#!/usr/bin/env node
/**
 * Design Brain — data quality gate.
 *
 *   node tools/check.mjs            check every section that exists
 *   node tools/check.mjs 4 6 9      check only those sections
 *   node tools/check.mjs --strict   treat warnings as failures too
 *
 * Hard errors (exit 1): missing/duplicate/out-of-range entry numbers, missing
 * required fields, bad enum values, emoji, broken files.
 * Warnings: house-voice violations, length outliers, unverified sources.
 */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = fs.existsSync(path.join(ROOT, 'site', 'data')) ? path.join(ROOT, 'site', 'data') : path.join(ROOT, 'data');

/* Section ranges must match assets/app.js and the master list. */
const SECTIONS = [
  [1, 1, 50, 'First principles and doctrines'],
  [2, 51, 84, 'Elements of visual language'],
  [3, 85, 154, 'Principles of composition'],
  [4, 155, 174, 'Gestalt principles of perception'],
  [5, 175, 225, 'Perception, vision and cognition'],
  [6, 226, 268, 'Named laws and effects used in design'],
  [7, 269, 325, 'Colour'],
  [8, 326, 369, 'Typography: macro'],
  [9, 370, 405, 'Typography: micro'],
  [10, 406, 447, 'Grid and layout systems'],
  [11, 448, 463, 'Proportion and geometry'],
  [12, 464, 495, 'Image, photography and iconography'],
  [13, 496, 535, 'Information design and data visualisation'],
  [14, 536, 590, 'Interaction principles'],
  [15, 637, 661, 'Information architecture and wayfinding'],
  [16, 662, 687, 'Content, copy and voice'],
  [17, 688, 720, 'Accessibility and inclusive design'],
  [18, 721, 754, 'Motion and animation'],
  [19, 755, 760, 'Sound and haptics'],
  [20, 761, 790, 'Design systems'],
  [21, 791, 819, 'Web and front-end craft'],
  [22, 820, 854, 'Brand and identity'],
  [23, 855, 876, 'Editorial, book and print production'],
  [24, 877, 891, 'Environmental, signage and exhibition'],
  [25, 892, 912, 'Product and industrial design'],
  [26, 913, 943, 'Architecture, space and urbanism'],
  [27, 944, 984, 'Process and method'],
  [28, 985, 1010, 'Ethics and responsibility'],
  [29, 1011, 1024, 'Numbers worth memorising'],
  [30, 1025, 1060, 'Common failure modes'],
  [31, 591, 636, 'Interface patterns and states'],
].map(([n, from, to, title]) => ({ n, from, to, title, expected: to - from + 1 }));

const STATUS = ['verified', 'adjusted', 'disputed', 'unverified'];
const VERDICT = ['core', 'adjacent', 'cut'];

const BANNED = [
  'delve', 'leverage', 'leveraging', 'robust', 'seamless', 'seamlessly',
  'elevate', 'elevates', 'unlock', 'unlocks', 'harness', 'harnesses',
  'tapestry', 'testament', 'realm', 'crucial', 'vital', 'pivotal',
  'foster', 'fosters', 'underscore', 'underscores', 'showcase', 'showcases',
  'boasts', 'game-changer', 'cutting-edge', 'moreover', 'furthermore',
  'essentially', 'ultimately',
];

const BANNED_PHRASES = [
  "in today's world", 'at its core', 'when it comes to', 'it is worth noting',
  'it’s worth noting', 'dive in', 'a testament to', 'plays a key role',
  'plays a crucial role', 'the world of', 'navigating the',
];

/* American spellings. Known book and standard titles are exempt. */
const US_SPELLINGS = [
  ['color', 'colour'], ['colors', 'colours'], ['colored', 'coloured'],
  ['center', 'centre'], ['centered', 'centred'], ['organize', 'organise'],
  ['organized', 'organised'], ['recognize', 'recognise'], ['behavior', 'behaviour'],
  ['analyze', 'analyse'], ['prioritize', 'prioritise'], ['emphasize', 'emphasise'],
  ['minimize', 'minimise'], ['maximize', 'maximise'], ['gray', 'grey'],
  ['favorite', 'favourite'], ['labeled', 'labelled'], ['modeling', 'modelling'],
  ['catalog', 'catalogue'], ['defense', 'defence'], ['optimize', 'optimise'],
];

const TITLE_EXEMPTIONS = [ /* retained for reference; proseOnly() now does the work */
  'interaction of color', 'the art of color', 'the elements of color',
  'color harmony', 'a color notation', 'the color of', 'colorimetry',
  'design center', 'center for', 'colors of', 'american', 'behavioral',
  'the measure of man', 'gray scale',
];

const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{1F000}-\u{1F0FF}]/u;

/* Demo-kit class names, read from the stylesheet so the two cannot drift. */
const KIT_CLASSES = (() => {
  const set = new Set();
  try {
    const css = fs.readFileSync(fs.existsSync(path.join(ROOT, 'site', 'assets', 'demos.css')) ? path.join(ROOT, 'site', 'assets', 'demos.css') : path.join(ROOT, 'assets', 'demos.css'), 'utf8');
    for (const m of css.matchAll(/\.(db-[a-z0-9-]+)/g)) set.add(m[1]);
  } catch { /* kit not present yet */ }
  return set;
})();

/* Once demos exist anywhere, a missing one is worth flagging. */
const DEMOS_EXPECTED = process.argv.includes('--demos');

/* -------------------------------------------------------------------------- */

function loadSection(file) {
  const code = fs.readFileSync(file, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: file, timeout: 5000 });
  const db = sandbox.window.DESIGN_BRAIN || {};
  const keys = Object.keys(db);
  if (keys.length !== 1) throw new Error(`expected one section key, found ${keys.length}`);
  return db[keys[0]];
}

function entryText(e) {
  return [
    e.title, (e.aka || []).join(' '), e.oneLine, e.what, e.why,
    (e.how || []).join(' '), e.example, e.numbers, e.pitfall, e.source,
    e.verify && e.verify.note, e.belongs && e.belongs.why,
  ].filter(Boolean).join(' ');
}

/**
 * Reader-facing prose only, with everything that legitimately carries a foreign
 * or American spelling removed first. Without this the voice checks drown in
 * false positives: "Interaction of Color" is a book, "Robust" is WCAG's own
 * fourth principle, "prefers-color-scheme" is a CSS feature, and "Foster" is a
 * researcher. None of those may be anglicised.
 */
function proseOnly(e) {
  const raw = [e.oneLine, e.what, e.why, (e.how || []).join(' '), e.example, e.pitfall]
    .filter(Boolean).join(' ');
  return raw
    .replace(/'[^']{3,}?'/g, ' ')          // single-quoted spans
    .replace(/"[^"]{3,}?"/g, ' ')          // double-quoted spans
    .replace(/[a-z]+(-[a-z]+)+/g, ' ')     // code identifiers: prefers-color-scheme
    .replace(/\b([A-Z][a-z]+ ){1,6}(of |the |and )?[A-Z][a-z]+\b/g, ' ') // title-case runs
    .replace(/\b[A-Z][a-z]+\b/g, ' ');     // remaining proper nouns
}

function words(s) { return (s || '').trim().split(/\s+/).filter(Boolean).length; }

/* -------------------------------------------------------------------------- */

const args = process.argv.slice(2);
const strict = args.includes('--strict');
const only = args.filter((a) => /^\d+$/.test(a)).map(Number);

let errors = 0;
let warnings = 0;
let totalEntries = 0;
const tally = { core: 0, adjacent: 0, cut: 0 };
const statusTally = { verified: 0, adjusted: 0, disputed: 0, unverified: 0 };
const missingSections = [];

const err = (m) => { errors++; console.log(`  \x1b[31mERROR\x1b[0m  ${m}`); };
const warn = (m) => { warnings++; console.log(`  \x1b[33mwarn \x1b[0m  ${m}`); };

console.log('\nDesign Brain data check');
console.log('='.repeat(72));

for (const s of SECTIONS) {
  if (only.length && !only.includes(s.n)) continue;

  const file = path.join(DATA, `s${String(s.n).padStart(2, '0')}.js`);
  if (!fs.existsSync(file)) { missingSections.push(s.n); continue; }

  console.log(`\n[${String(s.n).padStart(2, '0')}] ${s.title}`);

  let data;
  try {
    data = loadSection(file);
  } catch (e) {
    err(`file will not parse: ${e.message}`);
    continue;
  }
  if (!data || !Array.isArray(data.entries)) { err('no entries array'); continue; }

  if (!data.intro || words(data.intro) < 20) warn('section intro is missing or very short');
  if (!data.blurb) warn('section blurb missing (used on the index page)');
  if (!Array.isArray(data.sources) || !data.sources.length) warn('no section sources listed');

  /* Coverage --------------------------------------------------------------- */
  const seen = new Map();
  for (const e of data.entries) {
    if (seen.has(e.n)) err(`duplicate entry number ${e.n} (${e.title})`);
    seen.set(e.n, e);
  }

  const added = [...seen.keys()].filter((n) => n >= 9000);
  const inRange = [...seen.keys()].filter((n) => n < 9000);
  const missing = [];
  for (let n = s.from; n <= s.to; n++) if (!seen.has(n)) missing.push(n);
  const stray = inRange.filter((n) => n < s.from || n > s.to);

  if (missing.length) err(`missing ${missing.length} entries: ${missing.join(', ')}`);
  if (stray.length) err(`entries outside this section's range: ${stray.join(', ')}`);
  if (added.length) console.log(`  note    ${added.length} added beyond the master list: ${added.join(', ')}`);

  totalEntries += data.entries.length;

  /* Every demo in a section renders on one page, so an SVG id reused by two
     demos silently breaks whichever paints second. */
  const svgIds = new Map();

  /* Per-entry -------------------------------------------------------------- */
  for (const e of data.entries) {
    const id = `#${e.n} ${e.title || '(untitled)'}`;

    for (const f of ['title', 'oneLine', 'what', 'why', 'source']) {
      if (!e[f] || !String(e[f]).trim()) err(`${id}: missing ${f}`);
    }
    if (!Array.isArray(e.how) || !e.how.length) err(`${id}: missing "how" steps`);
    if (!e.verify || !STATUS.includes(e.verify.status)) err(`${id}: bad verify.status`);
    else statusTally[e.verify.status]++;
    if (!e.belongs || !VERDICT.includes(e.belongs.verdict)) err(`${id}: bad belongs.verdict`);
    else tally[e.belongs.verdict]++;
    if (e.verify && !e.verify.note) warn(`${id}: verify.note is empty`);
    if (e.belongs && !e.belongs.why) warn(`${id}: belongs.why is empty`);

    const text = entryText(e);
    const prose = proseOnly(e);
    const lower = prose.toLowerCase();

    if (EMOJI.test(text)) err(`${id}: contains an emoji`);

    for (const b of BANNED) {
      if (new RegExp(`\\b${b}\\b`, 'i').test(prose)) warn(`${id}: banned word "${b}"`);
    }
    for (const p of BANNED_PHRASES) {
      if (lower.includes(p)) warn(`${id}: banned phrase "${p}"`);
    }
    for (const [us, uk] of US_SPELLINGS) {
      if (new RegExp(`\\b${us}\\b`, 'i').test(prose)) {
        warn(`${id}: American spelling "${us}" (use "${uk}")`);
      }
    }

    const dashes = (text.match(/—/g) || []).length;
    if (dashes > 1) warn(`${id}: ${dashes} em dashes (limit is one)`);

    if (/\bnot (just )?about .{2,40}, (it|it's|its) about\b/i.test(text)) {
      warn(`${id}: negative parallelism ("not about X, it's about Y")`);
    }

    /* Length. The brief asked for depth, so the ceiling is generous: it exists
       to catch genuine bloat, not to punish a well-covered fundamental. */
    const wc = words(text);
    if (wc < 150) warn(`${id}: only ${wc} words, likely thin`);
    if (wc > 560) warn(`${id}: ${wc} words, check for padding`);
    if (words(e.oneLine) > 24) warn(`${id}: oneLine is ${words(e.oneLine)} words, keep it under 24`);

    if (Array.isArray(e.related)) {
      for (const r of e.related) if (typeof r !== 'number') err(`${id}: related must be entry numbers`);
    }

    /* Demo ------------------------------------------------------------------ */
    if (e.demo && !e.demo.html && e.demo.none) {
      /* A recorded decision not to illustrate. Judged, not missed. */
      if (words(e.demo.none) < 4) warn(`${id}: demo skip has no real reason`);
    } else if (!e.demo || !e.demo.html) {
      if (DEMOS_EXPECTED) warn(`${id}: no visual demo and no recorded reason`);
    } else {
      const h = e.demo.html;
      if (/<\s*(script|iframe|object|embed|form|link|meta)\b/i.test(h)) {
        err(`${id}: demo contains a forbidden tag`);
      }
      if (/\son[a-z]+\s*=/i.test(h)) err(`${id}: demo contains an inline event handler`);
      if (/(src|href)\s*=\s*["']?https?:/i.test(h)) err(`${id}: demo loads an external URL`);
      if (/<img\b/i.test(h)) err(`${id}: demo uses an img tag`);
      if (!/class\s*=\s*["'][^"']*\bdb-/.test(h)) err(`${id}: demo uses no demo-kit classes`);
      if (EMOJI.test(h)) err(`${id}: demo contains an emoji`);
      if (!e.demo.caption) warn(`${id}: demo has no caption`);
      else if (words(e.demo.caption) > 26) warn(`${id}: demo caption is ${words(e.demo.caption)} words`);

      /* Unknown classes are the main way a demo silently renders as nothing. */
      const used = new Set();
      for (const m of h.matchAll(/class\s*=\s*["']([^"']+)["']/g)) {
        for (const c of m[1].split(/\s+/)) if (c.startsWith('db-')) used.add(c);
      }
      for (const c of used) {
        if (!KIT_CLASSES.has(c)) warn(`${id}: demo uses unknown class "${c}"`);
      }

      for (const m of h.matchAll(/\bid="([^"]+)"/g)) {
        const prev = svgIds.get(m[1]);
        if (prev !== undefined && prev !== e.n) {
          err(`${id}: demo reuses id "${m[1]}", already used by #${prev} on the same page`);
        } else {
          svgIds.set(m[1], e.n);
        }
      }

      const open = (h.match(/</g) || []).length;
      const close = (h.match(/>/g) || []).length;
      if (open !== close) err(`${id}: demo markup has unbalanced angle brackets`);
    }
  }

  const okCount = data.entries.length;
  console.log(`  ${okCount} entries` + (missing.length ? ` (${missing.length} missing)` : ' — complete'));
}

/* Summary ------------------------------------------------------------------ */

console.log('\n' + '='.repeat(72));
if (missingSections.length) {
  console.log(`Not written yet: ${missingSections.length} sections (${missingSections.join(', ')})`);
}
console.log(`Entries written: ${totalEntries} / 1060`);
console.log(`Verdicts: core ${tally.core}, adjacent ${tally.adjacent}, cut ${tally.cut}`);
console.log(`Status:   verified ${statusTally.verified}, adjusted ${statusTally.adjusted}, ` +
            `disputed ${statusTally.disputed}, unverified ${statusTally.unverified}`);
console.log(`\n${errors} errors, ${warnings} warnings`);

if (errors > 0 || (strict && warnings > 0)) {
  console.log('\x1b[31mFAIL\x1b[0m\n');
  process.exit(1);
}
console.log('\x1b[32mPASS\x1b[0m\n');
