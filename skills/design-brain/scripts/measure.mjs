#!/usr/bin/env node
/**
 * measure.mjs — measure a rendered page against the Design Brain numbers.
 *
 * Opens the page in headless Chrome, reads computed styles and geometry, and
 * reports what it finds keyed to Design Brain entry numbers. Nothing here is
 * inferred from the source: every figure comes from the rendered page.
 *
 *   node measure.mjs <file.html | URL> [--viewport 1280x800] [--json] [--all] [--shot DIR]
 *
 * Default runs two viewports, 1280x800 and 390x844, because the worst screen
 * is the one that matters. --viewport runs one. --all lists every finding
 * instead of the first few per check. --shot DIR saves a full-page PNG of each
 * viewport as it was measured, because the measurement and the eye should look
 * at the same render. Exit code 1 when any check FAILs.
 *
 * Needs Node 22+ (built-in WebSocket) and a Chrome or Chromium install.
 * Override the browser path with DESIGN_BRAIN_CHROME. Put data-measure-ignore
 * on any element whose contents fail on purpose (a demo of bad contrast, say).
 */
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
if (!args.length || args.includes('--help') || args.includes('-h')) {
  console.log(readFileSync(new URL(import.meta.url)).toString().split('*/')[0].replace(/^\/\*\*?/, ''));
  process.exit(0);
}
const target = args.find(a => !a.startsWith('--'));
const wantJson = args.includes('--json');
const listAll = args.includes('--all');
const shotDir = args.includes('--shot') ? args[args.indexOf('--shot') + 1] : null;
const vpArg = args[args.indexOf('--viewport') + 1];
const viewports = args.includes('--viewport') && /^\d+x\d+$/.test(vpArg || '')
  ? [vpArg.split('x').map(Number)]
  : [[1280, 800], [390, 844]];

const url = /^https?:\/\//.test(target) ? target : (() => {
  const [file, hash] = target.split(/#(.*)/s);
  return pathToFileURL(path.resolve(file)).href + (hash ? '#' + hash : '');
})();

/* Chrome ------------------------------------------------------------------ */

function findChrome() {
  const env = process.env.DESIGN_BRAIN_CHROME;
  if (env && existsSync(env)) return env;
  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  ];
  return candidates.find(existsSync);
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function launch(chrome) {
  const userDir = mkdtempSync(path.join(tmpdir(), 'design-brain-measure-'));
  const proc = spawn(chrome, [
    '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    '--hide-scrollbars', '--allow-file-access-from-files', '--remote-debugging-port=0',
    `--user-data-dir=${userDir}`, '--window-size=1280,800', 'about:blank',
  ], { stdio: 'ignore' });
  const portFile = path.join(userDir, 'DevToolsActivePort');
  for (let i = 0; i < 100; i++) {
    if (existsSync(portFile)) {
      const port = Number(readFileSync(portFile, 'utf8').split('\n')[0]);
      if (port) return { proc, userDir, port };
    }
    await sleep(100);
  }
  proc.kill();
  throw new Error('Chrome did not start');
}

class CDP {
  constructor(ws) { this.ws = ws; this.id = 0; this.pending = new Map(); this.listeners = []; }
  static async connect(port) {
    let targets = [];
    for (let i = 0; i < 50 && !targets.length; i++) {
      try { targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); } catch { await sleep(100); }
    }
    const page = targets.find(t => t.type === 'page');
    if (!page) throw new Error('No page target');
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
    const cdp = new CDP(ws);
    ws.onmessage = ev => {
      const msg = JSON.parse(ev.data);
      if (msg.id && cdp.pending.has(msg.id)) {
        const { res, rej } = cdp.pending.get(msg.id); cdp.pending.delete(msg.id);
        msg.error ? rej(new Error(msg.error.message)) : res(msg.result);
      } else if (msg.method) cdp.listeners.forEach(l => l(msg));
    };
    return cdp;
  }
  send(method, params = {}) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((res, rej) => this.pending.set(id, { res, rej }));
  }
  once(method) { return new Promise(res => this.listeners.push(m => m.method === method && res(m.params))); }
  async evaluate(expression) {
    const r = await this.send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || 'evaluate failed');
    return r.result.value;
  }
}

/* In-page measurement ----------------------------------------------------- */
/* This function is serialised and run inside the page. Keep it self-contained. */

function measureInPage() {
  const out = { errors: [] };
  const guard = (name, fn) => { try { out[name] = fn(); } catch (e) { out.errors.push(name + ': ' + e.message); } };
  const canvas = document.createElement('canvas').getContext('2d');
  const vw = window.innerWidth, vh = window.innerHeight;

  const toRGBA = str => {
    if (!str || str === 'transparent') return [0, 0, 0, 0];
    canvas.fillStyle = '#000'; canvas.fillStyle = str;
    const v = canvas.fillStyle;
    if (v[0] === '#') return [parseInt(v.slice(1, 3), 16), parseInt(v.slice(3, 5), 16), parseInt(v.slice(5, 7), 16), 1];
    const m = v.match(/rgba?\(([^)]+)\)/);
    if (!m) return [0, 0, 0, 0];
    const p = m[1].split(',').map(s => parseFloat(s));
    return [p[0], p[1], p[2], p.length > 3 ? p[3] : 1];
  };
  const lum = ([r, g, b]) => {
    const f = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (a, b) => { const l1 = lum(a), l2 = lum(b); return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05); };
  const blend = (top, under) => { const a = top[3]; return [0, 1, 2].map(i => Math.round(top[i] * a + under[i] * (1 - a))).concat([1]); };
  const hex = c => '#' + [0, 1, 2].map(i => Math.round(c[i]).toString(16).padStart(2, '0')).join('');
  const hsl = ([r, g, b]) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2;
    if (max === min) return [0, 0, l];
    const d = max - min, s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    let h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    return [h * 60, s, l];
  };

  const sel = el => {
    if (!el || el.nodeType !== 1) return '';
    let s = el.tagName.toLowerCase();
    if (el.id) return s + '#' + el.id;
    const cls = [...el.classList].slice(0, 2).join('.');
    if (cls) s += '.' + cls;
    const parent = el.parentElement;
    if (parent && parent !== document.body && parent !== document.documentElement) {
      const sib = [...parent.children].filter(c => c.tagName === el.tagName);
      if (sib.length > 1) s += ':nth-of-type(' + (sib.indexOf(el) + 1) + ')';
      return sel(parent) + ' > ' + s;
    }
    return s;
  };
  const snippet = t => t.replace(/\s+/g, ' ').trim().slice(0, 48);

  const visible = el => {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };
  // Anything inside [data-measure-ignore] is skipped: use it for demos that fail on purpose.
  const allEls = [...document.body.querySelectorAll('*')].filter(el => !['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE', 'SVG', 'PATH'].includes(el.tagName) && !el.closest('[data-measure-ignore]'));
  const visEls = allEls.filter(visible);

  // Effective background of an element: composite ancestor colours, flag images.
  const background = el => {
    let colour = [255, 255, 255, 1], image = false, node = el, stack = [];
    while (node && node.nodeType === 1) {
      const cs = getComputedStyle(node);
      const bg = toRGBA(cs.backgroundColor);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') image = true;
      if (bg[3] > 0) stack.push(bg);
      if (bg[3] >= 1) break;
      node = node.parentElement;
    }
    if (!stack.length || stack[stack.length - 1][3] < 1) stack.push([255, 255, 255, 1]);
    for (let i = stack.length - 1; i >= 0; i--) colour = i === stack.length - 1 ? stack[i] : blend(stack[i], colour);
    return { colour, image };
  };

  // Elements that directly contain rendered text.
  const textEls = visEls.filter(el => [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 0));

  guard('overflow', () => {
    // Text pushed past the viewport edge is a failure whether the page scrolls sideways
    // or a container clips it. scrollWidth misses the clipped case, so check the text itself.
    const beyond = [], seen = new Set();
    textEls.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.right > vw + 1 && r.width > 0) {
        const k = sel(el).replace(/:nth-of-type\(\d+\)/g, '');
        if (!seen.has(k)) { seen.add(k); beyond.push({ selector: k, right: Math.round(r.right), text: snippet(el.textContent) }); }
      }
    });
    return {
      scrollWidth: document.documentElement.scrollWidth, innerWidth: vw,
      horizontal: document.documentElement.scrollWidth > vw + 1,
      clipped: beyond,
    };
  });

  guard('type', () => {
    const sizes = {}, families = {}, weights = {};
    textEls.forEach(el => {
      const cs = getComputedStyle(el);
      const size = Math.round(parseFloat(cs.fontSize) * 10) / 10;
      sizes[size] = (sizes[size] || 0) + 1;
      const fam = cs.fontFamily.split(',')[0].replace(/["']/g, '').trim();
      families[fam] = (families[fam] || 0) + 1;
      weights[cs.fontWeight] = (weights[cs.fontWeight] || 0) + 1;
    });
    return { sizes, families, weights, sizeCount: Object.keys(sizes).length, familyCount: Object.keys(families).length };
  });

  guard('contrast', () => {
    const failures = [], overImage = [], seen = new Set();
    textEls.forEach(el => {
      const text = snippet([...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join(' '));
      if (!text) return;
      const cs = getComputedStyle(el);
      let fg = toRGBA(cs.color);
      const size = parseFloat(cs.fontSize), weight = parseInt(cs.fontWeight, 10) || 400;
      const large = size >= 24 || (size >= 18.66 && weight >= 700);
      const { colour: bg, image } = background(el);
      if (fg[3] < 1) fg = blend(fg, bg);
      // opacity on the chain reduces effective contrast; fold it in.
      let op = 1, n = el; while (n && n.nodeType === 1) { op *= parseFloat(getComputedStyle(n).opacity); n = n.parentElement; }
      if (op < 1) fg = blend([fg[0], fg[1], fg[2], op], bg);
      const r = Math.round(ratio(fg, bg) * 100) / 100;
      const required = large ? 3 : 4.5;
      const key = hex(fg) + hex(bg) + required;
      if (image) { if (!seen.has('img' + key)) { seen.add('img' + key); overImage.push({ selector: sel(el), text, fg: hex(fg) }); } return; }
      if (r < required && !seen.has(key)) {
        seen.add(key);
        failures.push({ selector: sel(el), text, fg: hex(fg), bg: hex(bg), ratio: r, required, size: Math.round(size * 10) / 10, weight, large });
      }
    });
    failures.sort((a, b) => a.ratio - b.ratio);
    return { checked: textEls.length, failures, overImage };
  });

  guard('measure', () => {
    const blocks = [];
    const bodyTags = new Set(['P', 'LI', 'DD', 'DT', 'BLOCKQUOTE', 'TD', 'TH', 'FIGCAPTION', 'SUMMARY', 'DIV', 'SECTION', 'ARTICLE', 'SPAN', 'LABEL']);
    textEls.forEach(el => {
      if (!bodyTags.has(el.tagName)) return;
      const text = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join(' ').replace(/\s+/g, ' ').trim();
      if (text.length < 120) return;
      const cs = getComputedStyle(el);
      const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.2;
      const r = el.getBoundingClientRect();
      if (r.height < lh * 1.8) return; // single line, measure does not apply
      canvas.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
      const avg = canvas.measureText('abcdefghijklmnopqrstuvwxyz etaoin shrdlu').width / 40;
      const width = el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const cpl = Math.round(width / avg);
      blocks.push({ selector: sel(el), cpl, width: Math.round(width), fontSize: Math.round(parseFloat(cs.fontSize) * 10) / 10, text: snippet(text) });
    });
    const uniq = new Map(); blocks.forEach(b => { const k = b.selector.replace(/:nth-of-type\(\d+\)/g, ''); if (!uniq.has(k)) uniq.set(k, b); });
    const list = [...uniq.values()];
    // Under 600px wide, short lines are the viewport's doing, not the design's.
    return { blocks: list, tooLong: list.filter(b => b.cpl > 80), tooShort: vw >= 600 ? list.filter(b => b.cpl < 40) : [] };
  });

  guard('lineHeight', () => {
    const issues = [], seen = new Set();
    textEls.forEach(el => {
      if (!['P', 'LI', 'DD', 'BLOCKQUOTE', 'TD'].includes(el.tagName)) return;
      const cs = getComputedStyle(el); const size = parseFloat(cs.fontSize);
      if (size > 20) return;
      const lh = cs.lineHeight === 'normal' ? size * 1.2 : parseFloat(cs.lineHeight);
      const rt = Math.round((lh / size) * 100) / 100;
      const k = sel(el).replace(/:nth-of-type\(\d+\)/g, '');
      if (rt < 1.3 && !seen.has(k)) { seen.add(k); issues.push({ selector: k, ratio: rt, fontSize: size }); }
    });
    return { issues };
  });

  guard('smallText', () => {
    const list = [], seen = new Set();
    textEls.forEach(el => {
      if (!['P', 'LI', 'DD', 'BLOCKQUOTE'].includes(el.tagName)) return;
      if (el.textContent.replace(/\s+/g, ' ').trim().length < 80) return; // a label in a <p> is not body copy
      const size = parseFloat(getComputedStyle(el).fontSize);
      const k = sel(el).replace(/:nth-of-type\(\d+\)/g, '');
      if (size < 16 && !seen.has(k)) { seen.add(k); list.push({ selector: k, size: Math.round(size * 10) / 10 }); }
    });
    return { list };
  });

  guard('spacing', () => {
    const values = {};
    const props = ['marginTop', 'marginBottom', 'marginLeft', 'marginRight', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'rowGap', 'columnGap'];
    visEls.forEach(el => {
      const cs = getComputedStyle(el);
      props.forEach(p => {
        const v = parseFloat(cs[p]);
        if (!v || v < 0 || isNaN(v)) return;
        const k = Math.round(v * 10) / 10;
        values[k] = (values[k] || 0) + 1;
      });
    });
    let on = 0, total = 0; const off = [];
    Object.entries(values).forEach(([k, n]) => {
      const v = parseFloat(k); total += n;
      const rem = Math.abs(v / 4 - Math.round(v / 4)) * 4;
      if (rem < 0.51) on += n; else off.push({ value: v, count: n });
    });
    off.sort((a, b) => b.count - a.count);
    return { distinct: Object.keys(values).length, onScalePct: total ? Math.round((on / total) * 100) : 100, offScale: off, total };
  });

  guard('targets', () => {
    const cands = [...document.body.querySelectorAll('a[href], button, input:not([type=hidden]), select, textarea, [role=button], [role=link], summary, [tabindex="0"]')].filter(visible);
    const failures = [], under44 = [], inline = [];
    const blockish = new Set(['P', 'LI', 'DD', 'TD', 'FIGCAPTION', 'BLOCKQUOTE', 'SPAN', 'SMALL', 'EM', 'STRONG', 'DIV', 'FOOTER']);
    cands.forEach(el => {
      let box = el;
      if (/^(radio|checkbox)$/.test(el.type || '')) {
        const lab = el.closest('label') || (el.id && document.querySelector(`label[for="${CSS.escape(el.id)}"]`));
        if (lab && visible(lab)) box = lab;
      }
      const r = box.getBoundingClientRect();
      const w = Math.round(r.width), h = Math.round(r.height);
      const label = snippet(el.getAttribute('aria-label') || el.textContent || el.getAttribute('placeholder') || el.tagName.toLowerCase());
      // Inline exception: a link sitting in a sentence, with real text either side of it.
      const par = el.parentElement;
      const parentText = par && blockish.has(par.tagName) && getComputedStyle(el).display === 'inline' &&
        par.textContent.trim().length > el.textContent.trim().length + 20;
      if (el.tagName === 'A' && parentText) { inline.push({ selector: sel(el), label }); return; }
      if (w < 24 || h < 24) failures.push({ selector: sel(el), label, w, h });
      else if (w < 44 || h < 44) under44.push({ selector: sel(el), label, w, h });
    });
    return { checked: cands.length, failures, under44, inlineLinks: inline.length };
  });

  guard('colour', () => {
    const buckets = {}, all = new Set();
    visEls.forEach(el => {
      const cs = getComputedStyle(el);
      [cs.color, cs.backgroundColor, cs.borderTopColor].forEach(c => {
        const rgba = toRGBA(c); if (rgba[3] < 0.5) return;
        all.add(hex(rgba));
        const [h, s, l] = hsl(rgba);
        if (s < 0.35 || l < 0.12 || l > 0.88) return;
        const b = Math.round(h / 30) % 12;
        buckets[b] = buckets[b] || { hue: b * 30, count: 0, samples: new Set() };
        buckets[b].count++; buckets[b].samples.add(hex(rgba));
      });
    });
    const hues = Object.values(buckets).map(b => ({ hue: b.hue, count: b.count, samples: [...b.samples].slice(0, 4) })).sort((a, b) => b.count - a.count);
    return { distinctColours: all.size, saturatedHueFamilies: hues.length, hues };
  });

  guard('headings', () => {
    const hs = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(visible);
    const order = hs.map(h => ({ level: +h.tagName[1], text: snippet(h.textContent) }));
    const skips = []; let prev = 0;
    order.forEach(h => { if (prev && h.level > prev + 1) skips.push(`h${prev} to h${h.level}: "${h.text}"`); prev = h.level; });
    return { h1Count: order.filter(h => h.level === 1).length, count: order.length, skips, first: order[0] || null };
  });

  guard('images', () => {
    const imgs = [...document.images].filter(visible);
    const missing = imgs.filter(i => !i.hasAttribute('alt')).map(i => ({ selector: sel(i), src: (i.currentSrc || i.src).split('/').pop().slice(0, 40) }));
    const stretched = imgs.filter(i => i.naturalWidth && i.naturalHeight && getComputedStyle(i).objectFit === 'fill' && Math.abs((i.clientWidth / i.clientHeight) / (i.naturalWidth / i.naturalHeight) - 1) > 0.05 && i.getAttribute('width') && i.getAttribute('height'))
      .map(i => ({ selector: sel(i) }));
    return { count: imgs.length, missingAlt: missing, stretched };
  });

  guard('motion', () => {
    let reducedMotionRule = false, focusOutlineRemoved = false, focusVisibleRule = false;
    const walk = rules => { for (const r of rules) {
      if (r.media && /prefers-reduced-motion/.test(r.media.mediaText)) reducedMotionRule = true;
      if (r.selectorText && /:focus-visible/.test(r.selectorText)) focusVisibleRule = true;
      if (r.selectorText && /:focus(?!-visible)/.test(r.selectorText) && r.style && /^(none|0)/.test(r.style.outline || r.style.outlineStyle || '')) focusOutlineRemoved = true;
      if (r.cssRules) walk(r.cssRules);
    } };
    for (const s of document.styleSheets) { try { walk(s.cssRules); } catch { /* cross-origin sheet */ } }
    const animated = [], durations = [];
    visEls.forEach(el => {
      const cs = getComputedStyle(el);
      if (cs.animationName && cs.animationName !== 'none') {
        animated.push(sel(el));
        cs.animationDuration.split(',').forEach(d => durations.push(parseFloat(d) * (d.trim().endsWith('ms') ? 1 : 1000)));
      }
      const td = cs.transitionDuration.split(',').map(d => parseFloat(d) * (d.trim().endsWith('ms') ? 1 : 1000)).filter(v => v > 0);
      durations.push(...td);
    });
    const slow = [...new Set(durations.filter(d => d > 700))];
    return { reducedMotionRule, animatedCount: animated.length, slowDurations: slow, focusOutlineRemoved: focusOutlineRemoved && !focusVisibleRule };
  });

  guard('forms', () => {
    const inputs = [...document.querySelectorAll('input:not([type=hidden]):not([type=submit]):not([type=button]), select, textarea')].filter(visible);
    const unlabelled = inputs.filter(i => {
      if (i.getAttribute('aria-label') || i.getAttribute('aria-labelledby') || i.closest('label')) return false;
      if (i.id && document.querySelector(`label[for="${CSS.escape(i.id)}"]`)) return false;
      return true;
    });
    const placeholderOnly = unlabelled.filter(i => i.getAttribute('placeholder')).map(i => ({ selector: sel(i), placeholder: i.getAttribute('placeholder') }));
    const disabled = [...document.querySelectorAll('button[disabled], input[disabled], [aria-disabled="true"]')].filter(visible).length;
    return { inputs: inputs.length, unlabelled: unlabelled.length, placeholderOnly, disabled };
  });

  guard('lang', () => ({ lang: document.documentElement.getAttribute('lang') || '', title: document.title }));

  return out;
}

/* Report ------------------------------------------------------------------ */

const REF = {
  contrast: '#690 Text contrast minimums, #1014, #1015 (WCAG 2.2 SC 1.4.3)',
  overImage: '#1030 Text on busy imagery without a scrim',
  measure: '#1011 45-75 characters per line, #372 Measure',
  lineHeight: '#1012 Body line-height 1.4-1.6, #373',
  smallText: '#1013 16px minimum body text on the web',
  spacing: '#414 4-point spacing scale, #1017 8-point grid, #1026 No spacing scale',
  targets: '#700 Minimum target size, #1016 24x24 minimum, 44x44 comfortable, #587',
  colour: '#307 Accented neutral schemes, #308 Dominant, secondary, accent, #836 Single-colour test',
  type: '#344 Type scale, #339 Type pairing, #1025 Too many typefaces or weights',
  headings: '#343 Typographic hierarchy, #395 Headings and subheads, #713 Reading order in the DOM',
  images: '#488 Alt text as content, #710 Alt text decision tree, #1056 Stretched logos and images',
  motion: '#701 Reduced-motion preference, #734 Duration guidelines, #1020 100-500ms interface motion',
  focus: '#10050 Removing the focus indicator',
  forms: '#1045 Placeholder text used as a label, #1036 Disabled buttons with no explanation',
  overflow: '#1052 Non-responsive tables, #1060 Header that wraps at intermediate widths, #793 Fluid and intrinsic layout',
};

function report(vp, m) {
  const lines = [], fails = [];
  const cap = arr => (listAll ? arr : arr.slice(0, 6));
  const more = arr => (!listAll && arr.length > 6 ? `  ... ${arr.length - 6} more (use --all)` : null);
  const push = (status, text, ref) => { lines.push(`${status.padEnd(5)} ${text}${ref ? `\n      ${ref}` : ''}`); if (status === 'FAIL') fails.push(text); };
  lines.push(`== ${vp[0]}x${vp[1]} ==`);

  if (m.overflow) {
    if (m.overflow.horizontal) push('FAIL', `Horizontal overflow: page is ${m.overflow.scrollWidth}px wide in a ${m.overflow.innerWidth}px viewport`, REF.overflow);
    if (m.overflow.clipped.length) {
      push('FAIL', `${m.overflow.clipped.length} text element${m.overflow.clipped.length > 1 ? 's' : ''} extend past the ${m.overflow.innerWidth}px viewport edge (clipped or scrolling)`, REF.overflow);
      cap(m.overflow.clipped).forEach(x => lines.push(`      right edge at ${x.right}px  "${x.text}"  ${x.selector}`));
      if (more(m.overflow.clipped)) lines.push(more(m.overflow.clipped));
    }
    if (!m.overflow.horizontal && !m.overflow.clipped.length) push('PASS', 'No horizontal overflow, nothing clipped at the viewport edge');
  }

  if (m.contrast) {
    const f = m.contrast.failures;
    if (f.length) {
      push('FAIL', `${f.length} text colour pair${f.length > 1 ? 's' : ''} below minimum contrast (of ${m.contrast.checked} text elements)`, REF.contrast);
      cap(f).forEach(x => lines.push(`      ${x.ratio}:1 (needs ${x.required}:1)  ${x.fg} on ${x.bg}  ${x.size}px/${x.weight}  "${x.text}"  ${x.selector}`));
      if (more(f)) lines.push(more(f));
    } else push('PASS', `Contrast: all ${m.contrast.checked} text elements meet 4.5:1 (3:1 large)`, null);
    if (m.contrast.overImage.length) {
      push('CHECK', `${m.contrast.overImage.length} text element${m.contrast.overImage.length > 1 ? 's' : ''} over a background image; contrast cannot be measured, check the worst pixel by eye`, REF.overImage);
      cap(m.contrast.overImage).forEach(x => lines.push(`      "${x.text}"  ${x.selector}`));
    }
  }

  if (m.measure) {
    const bad = [...m.measure.tooLong, ...m.measure.tooShort];
    if (bad.length) {
      push('WARN', `${bad.length} multi-line text block${bad.length > 1 ? 's' : ''} outside 40-80 characters per line (estimated from average glyph width)`, REF.measure);
      cap(bad).forEach(x => lines.push(`      ~${x.cpl} cpl  ${x.width}px at ${x.fontSize}px  "${x.text}"  ${x.selector}`));
    } else push('PASS', `Measure: ${m.measure.blocks.length} multi-line block${m.measure.blocks.length === 1 ? '' : 's'} within 40-80 characters per line${m.measure.blocks.length ? ` (${m.measure.blocks.map(b => b.cpl).join(', ')})` : ''}`);
  }

  if (m.lineHeight?.issues.length) {
    push('WARN', `${m.lineHeight.issues.length} body text block${m.lineHeight.issues.length > 1 ? 's' : ''} with line-height below 1.3`, REF.lineHeight);
    cap(m.lineHeight.issues).forEach(x => lines.push(`      ${x.ratio} at ${x.fontSize}px  ${x.selector}`));
  } else if (m.lineHeight) push('PASS', 'Body line-height at or above 1.3');

  if (m.smallText?.list.length) {
    push('WARN', `${m.smallText.list.length} body text block${m.smallText.list.length > 1 ? 's' : ''} below 16px`, REF.smallText);
    cap(m.smallText.list).forEach(x => lines.push(`      ${x.size}px  ${x.selector}`));
  } else if (m.smallText) push('PASS', 'Body text at or above 16px');

  if (m.type) {
    const sizes = Object.keys(m.type.sizes).map(Number).sort((a, b) => a - b);
    const st = m.type.sizeCount > 9 ? 'WARN' : 'PASS';
    push(st, `Type: ${m.type.sizeCount} distinct sizes (${sizes.join(', ')}), ${m.type.familyCount} famil${m.type.familyCount === 1 ? 'y' : 'ies'} (${Object.keys(m.type.families).join(', ')}), weights ${Object.keys(m.type.weights).join('/')}`, st === 'WARN' ? REF.type : null);
    if (m.type.familyCount > 2) push('WARN', `${m.type.familyCount} typeface families; more than two needs each one to have a distinct job`, REF.type);
  }

  if (m.spacing) {
    const st = m.spacing.onScalePct < 80 ? 'WARN' : 'PASS';
    push(st, `Spacing: ${m.spacing.onScalePct}% of ${m.spacing.total} margin/padding/gap values sit on a 4px scale (${m.spacing.distinct} distinct values)`, st === 'WARN' ? REF.spacing : null);
    if (m.spacing.offScale.length && st === 'WARN') lines.push(`      off-scale: ${cap(m.spacing.offScale).map(o => `${o.value}px x${o.count}`).join(', ')}`);
  }

  if (m.targets) {
    if (m.targets.failures.length) {
      push('FAIL', `${m.targets.failures.length} target${m.targets.failures.length > 1 ? 's' : ''} smaller than 24x24px (of ${m.targets.checked} interactive elements, ${m.targets.inlineLinks} inline links exempt)`, REF.targets);
      cap(m.targets.failures).forEach(x => lines.push(`      ${x.w}x${x.h}  "${x.label}"  ${x.selector}`));
    } else push('PASS', `Targets: all ${m.targets.checked - m.targets.inlineLinks} block-level targets at least 24x24px`);
    if (vp[0] < 600 && m.targets.under44.length) {
      push('WARN', `${m.targets.under44.length} target${m.targets.under44.length > 1 ? 's' : ''} under 44x44px on a touch viewport`, REF.targets);
      cap(m.targets.under44).forEach(x => lines.push(`      ${x.w}x${x.h}  "${x.label}"  ${x.selector}`));
    }
  }

  if (m.colour) {
    const st = m.colour.saturatedHueFamilies > 3 ? 'WARN' : 'PASS';
    push(st, `Colour: ${m.colour.saturatedHueFamilies} saturated hue famil${m.colour.saturatedHueFamilies === 1 ? 'y' : 'ies'} across ${m.colour.distinctColours} distinct colours${m.colour.hues.length ? ` (${m.colour.hues.map(h => `${h.hue}deg: ${h.samples.join(' ')}`).join('; ')})` : ''}`, st === 'WARN' ? REF.colour : null);
  }

  if (m.headings) {
    if (m.headings.h1Count !== 1) push('WARN', `${m.headings.h1Count} h1 element${m.headings.h1Count === 1 ? '' : 's'} (expected one)`, REF.headings);
    else push('PASS', `Headings: one h1 ("${m.headings.first.text}"), ${m.headings.count} headings, no level skips`.replace(', no level skips', m.headings.skips.length ? '' : ', no level skips'));
    if (m.headings.skips.length) push('WARN', `Heading levels skipped: ${m.headings.skips.join('; ')}`, REF.headings);
  }

  if (m.images) {
    if (m.images.missingAlt.length) {
      push('FAIL', `${m.images.missingAlt.length} image${m.images.missingAlt.length > 1 ? 's' : ''} with no alt attribute (of ${m.images.count})`, REF.images);
      cap(m.images.missingAlt).forEach(x => lines.push(`      ${x.src}  ${x.selector}`));
    } else if (m.images.count) push('PASS', `Images: all ${m.images.count} carry an alt attribute`);
    if (m.images.stretched.length) push('WARN', `${m.images.stretched.length} image${m.images.stretched.length > 1 ? 's' : ''} rendered off its natural aspect ratio`, REF.images);
  }

  if (m.motion) {
    if (m.motion.animatedCount && !m.motion.reducedMotionRule) push('WARN', `${m.motion.animatedCount} animated element${m.motion.animatedCount > 1 ? 's' : ''} and no prefers-reduced-motion rule in the stylesheets`, REF.motion);
    else if (m.motion.animatedCount) push('PASS', `Motion: ${m.motion.animatedCount} animated element${m.motion.animatedCount > 1 ? 's' : ''}, reduced-motion rule present`);
    if (m.motion.slowDurations.length) push('WARN', `Transition or animation durations over 700ms: ${m.motion.slowDurations.join(', ')}ms`, REF.motion);
    if (m.motion.focusOutlineRemoved) push('WARN', 'A :focus rule removes the outline and no :focus-visible rule replaces it', REF.focus);
  }

  if (m.forms) {
    if (m.forms.placeholderOnly.length) push('WARN', `${m.forms.placeholderOnly.length} input${m.forms.placeholderOnly.length > 1 ? 's' : ''} labelled only by placeholder: ${m.forms.placeholderOnly.map(p => `"${p.placeholder}"`).join(', ')}`, REF.forms);
    else if (m.forms.unlabelled) push('WARN', `${m.forms.unlabelled} form field${m.forms.unlabelled > 1 ? 's' : ''} with no label at all`, REF.forms);
    else if (m.forms.inputs) push('PASS', `Forms: all ${m.forms.inputs} fields labelled`);
    if (m.forms.disabled) push('CHECK', `${m.forms.disabled} disabled control${m.forms.disabled > 1 ? 's' : ''}: make sure each says why`, REF.forms);
  }

  if (m.lang && !m.lang.lang) push('WARN', 'No lang attribute on <html>', '#713 Reading order in the DOM; WCAG 3.1.1');
  if (m.screenshot) lines.push(`shot  ${m.screenshot}`);
  if (m.errors?.length) lines.push(`note  ${m.errors.length} check${m.errors.length > 1 ? 's' : ''} could not run: ${m.errors.join('; ')}`);
  return { lines, fails };
}

/* Main -------------------------------------------------------------------- */

const chrome = findChrome();
if (!chrome) { console.error('No Chrome or Chromium found. Set DESIGN_BRAIN_CHROME to the binary path.'); process.exit(2); }

const { proc, userDir, port } = await launch(chrome);
const results = [];
try {
  const cdp = await CDP.connect(port);
  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');
  await cdp.send('Network.enable');
  const inflight = new Set();
  cdp.listeners.push(msg => {
    if (msg.method === 'Network.requestWillBeSent') inflight.add(msg.params.requestId);
    if (msg.method === 'Network.loadingFinished' || msg.method === 'Network.loadingFailed') inflight.delete(msg.params.requestId);
  });
  // Settled = no request in flight for 600ms, or 12s, whichever first. Pages that
  // load their content after the load event (this site does) need it.
  const networkIdle = async () => {
    const start = Date.now(); let quietSince = Date.now();
    while (Date.now() - start < 12000) {
      if (inflight.size === 0) { if (Date.now() - quietSince > 600) return; } else quietSince = Date.now();
      await sleep(100);
    }
  };
  for (const vp of viewports) {
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: vp[0], height: vp[1], deviceScaleFactor: 1, mobile: vp[0] < 600 });
    const loaded = cdp.once('Page.loadEventFired');
    await cdp.send('Page.navigate', { url });
    await Promise.race([loaded, sleep(15000)]);
    await networkIdle();
    await cdp.evaluate('document.fonts.ready.then(() => new Promise(r => setTimeout(r, 400)))');
    const m = await cdp.evaluate(`(${measureInPage.toString()})()`);
    if (shotDir) {
      const height = Math.min(await cdp.evaluate('document.documentElement.scrollHeight'), 6000);
      await cdp.send('Emulation.setDeviceMetricsOverride', { width: vp[0], height, deviceScaleFactor: 1, mobile: vp[0] < 600 });
      await sleep(150);
      const shot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      mkdirSync(shotDir, { recursive: true });
      const base = path.basename(url.split('#')[0].split('?')[0]).replace(/\.[a-z]+$/i, '') || 'page';
      const route = (url.split('#')[1] || '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '');
      const file = path.join(shotDir, `${base}${route ? '-' + route : ''}-${vp[0]}x${vp[1]}.png`);
      writeFileSync(file, Buffer.from(shot.data, 'base64'));
      m.screenshot = file;
    }
    results.push({ viewport: { width: vp[0], height: vp[1] }, ...m });
  }
} finally {
  proc.kill();
  try { rmSync(userDir, { recursive: true, force: true }); } catch { /* ignore */ }
}

if (wantJson) {
  console.log(JSON.stringify({ url, results }, null, 1));
  process.exit(results.some(r => report([r.viewport.width, r.viewport.height], r).fails.length) ? 1 : 0);
}

let anyFail = false;
console.log(`Design Brain measure: ${url}`);
for (const r of results) {
  const { lines, fails } = report([r.viewport.width, r.viewport.height], r);
  console.log('\n' + lines.join('\n'));
  if (fails.length) anyFail = true;
}
console.log(`\n${anyFail ? 'RESULT: FAIL, fix the FAIL lines before this ships.' : 'RESULT: PASS on measurable checks. WARN and CHECK lines still need a human eye.'}`);
process.exit(anyFail ? 1 : 0);
