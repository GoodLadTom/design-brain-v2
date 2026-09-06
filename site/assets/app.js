/* ==========================================================================
   Design Brain — application
   Dependency-free. Hash routing. Section data is loaded on demand from
   data/sNN.js via injected <script> tags, which keeps the whole thing working
   from a file:// URL where fetch() of local JSON is blocked.
   ========================================================================== */

(function () {
  'use strict';

  /* ---------------------------------------------------------------- manifest */

  var SECTIONS = [
    { n: 1,  slug: 'first-principles',    title: 'First principles and doctrines',        from: 1,    to: 50 },
    { n: 2,  slug: 'elements',            title: 'Elements of visual language',           from: 51,   to: 84 },
    { n: 3,  slug: 'composition',         title: 'Principles of composition',             from: 85,   to: 154 },
    { n: 4,  slug: 'gestalt',             title: 'Gestalt principles of perception',      from: 155,  to: 174 },
    { n: 5,  slug: 'perception',          title: 'Perception, vision and cognition',      from: 175,  to: 225 },
    { n: 6,  slug: 'named-laws',          title: 'Named laws and effects used in design', from: 226,  to: 268 },
    { n: 7,  slug: 'colour',              title: 'Colour',                                from: 269,  to: 325 },
    { n: 8,  slug: 'typography-macro',    title: 'Typography: macro',                     from: 326,  to: 369 },
    { n: 9,  slug: 'typography-micro',    title: 'Typography: micro',                     from: 370,  to: 405 },
    { n: 10, slug: 'grid-layout',         title: 'Grid and layout systems',               from: 406,  to: 447 },
    { n: 11, slug: 'proportion',          title: 'Proportion and geometry',               from: 448,  to: 463 },
    { n: 12, slug: 'image',               title: 'Image, photography and iconography',    from: 464,  to: 495 },
    { n: 13, slug: 'data-viz',            title: 'Information design and data visualisation', from: 496, to: 535 },
    { n: 14, slug: 'interaction',         title: 'Interaction principles',                from: 536,  to: 590 },
    { n: 15, slug: 'ia-wayfinding',       title: 'Information architecture and wayfinding', from: 637, to: 661 },
    { n: 16, slug: 'content-voice',       title: 'Content, copy and voice',               from: 662,  to: 687 },
    { n: 17, slug: 'accessibility',       title: 'Accessibility and inclusive design',    from: 688,  to: 720 },
    { n: 18, slug: 'motion',              title: 'Motion and animation',                  from: 721,  to: 754 },
    { n: 19, slug: 'sound-haptics',       title: 'Sound and haptics',                     from: 755,  to: 760 },
    { n: 20, slug: 'design-systems',      title: 'Design systems',                        from: 761,  to: 790 },
    { n: 21, slug: 'web-craft',           title: 'Web and front-end craft',               from: 791,  to: 819 },
    { n: 22, slug: 'brand',               title: 'Brand and identity',                    from: 820,  to: 854 },
    { n: 23, slug: 'editorial-print',     title: 'Editorial, book and print production',  from: 855,  to: 876 },
    { n: 24, slug: 'signage',             title: 'Environmental, signage and exhibition', from: 877,  to: 891 },
    { n: 25, slug: 'product-design',      title: 'Product and industrial design',         from: 892,  to: 912 },
    { n: 26, slug: 'architecture',        title: 'Architecture, space and urbanism',      from: 913,  to: 943 },
    { n: 27, slug: 'process',             title: 'Process and method',                    from: 944,  to: 984 },
    { n: 28, slug: 'ethics',              title: 'Ethics and responsibility',             from: 985,  to: 1010 },
    { n: 29, slug: 'numbers',             title: 'Numbers worth memorising',              from: 1011, to: 1024 },
    { n: 30, slug: 'failure-modes',       title: 'Common failure modes',                  from: 1025, to: 1060 },
    { n: 31, slug: 'patterns',            title: 'Interface patterns and states',         from: 591,  to: 636 }
  ];

  SECTIONS.forEach(function (s) { s.expected = s.to - s.from + 1; });

  var TOTAL_EXPECTED = SECTIONS.reduce(function (a, s) { return a + s.expected; }, 0);

  var VERDICT_WORD = { core: 'Core', adjacent: 'Adjacent', cut: 'Cut' };
  var STATUS_WORD = {
    verified: 'Verified', adjusted: 'Adjusted',
    disputed: 'Disputed', unverified: 'Unverified'
  };

  /* ------------------------------------------------------------------- state */

  window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};

  var loading = {};       // section n -> Promise
  var indexed = [];       // flat entry index for search
  var indexedSections = {};
  var els = {};
  var searchTimer = null;
  var activeResult = -1;

  /* ------------------------------------------------------------------ helpers */

  /* Entries numbered 9000+ were added by a researcher as genuine gaps in the
     master list. Show them as additions, never as a raw five-figure id. */
  function isAdded(n) { return n >= 9000; }
  function displayNum(n) { return isAdded(n) ? 'Added after ' + (n - 9000) : 'No. ' + n; }
  function shortNum(n) { return isAdded(n) ? '+' : String(n); }

  /* Demo markup is authored in this repo, not user input, but it is still
     injected as HTML. Strip anything executable so a bad paste cannot run. */
  function safeDemo(html) {
    return String(html || '')
      .replace(/<\s*\/?\s*(script|iframe|object|embed|link|meta|form)\b[^>]*>/gi, '')
      .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
      .replace(/javascript:/gi, '');
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function sectionByN(n) {
    for (var i = 0; i < SECTIONS.length; i++) if (SECTIONS[i].n === n) return SECTIONS[i];
    return null;
  }

  function loaded(n) { return !!window.DESIGN_BRAIN[n]; }

  function loadSection(n) {
    if (loaded(n)) return Promise.resolve(window.DESIGN_BRAIN[n]);
    if (loading[n]) return loading[n];

    loading[n] = new Promise(function (resolve) {
      var el = document.createElement('script');
      el.src = 'data/s' + (n < 10 ? '0' + n : n) + '.js';
      el.async = true;
      el.onload = function () { indexSection(n); resolve(window.DESIGN_BRAIN[n] || null); };
      el.onerror = function () { resolve(null); };
      document.head.appendChild(el);
    });
    return loading[n];
  }

  function indexSection(n) {
    var data = window.DESIGN_BRAIN[n];
    if (!data || indexedSections[n]) return;
    indexedSections[n] = true;
    (data.entries || []).forEach(function (e) {
      indexed.push({
        n: e.n,
        s: n,
        title: e.title || '',
        one: e.oneLine || '',
        aka: (e.aka || []).join(' '),
        verdict: (e.belongs && e.belongs.verdict) || '',
        status: (e.verify && e.verify.status) || '',
        hay: ((e.title || '') + ' ' + (e.oneLine || '') + ' ' + (e.aka || []).join(' ') +
              ' ' + (e.what || '') + ' ' + (e.source || '')).toLowerCase()
      });
    });
    indexed.sort(function (a, b) { return a.n - b.n; });
    paintRail();
    // Background loading fires this up to thirty times. Coalesce the repaint so
    // the index and the audit table do not flash on every arriving section.
    var route = currentRoute().name;
    if (route === 'home' || route === 'audit') {
      clearTimeout(dataRepaint);
      dataRepaint = setTimeout(function () {
        var r = currentRoute().name;
        if (r === 'home') renderHome();
        else if (r === 'audit') renderAudit();
      }, 150);
    }
  }
  var dataRepaint = null;

  /* Load everything in the background so search covers the whole brain. */
  function warmAll() {
    var i = 0;
    (function next() {
      if (i >= SECTIONS.length) return;
      var s = SECTIONS[i++];
      loadSection(s.n).then(function () { setTimeout(next, 30); });
    })();
  }

  function entryLookup(num) {
    for (var i = 0; i < indexed.length; i++) if (indexed[i].n === num) return indexed[i];
    return null;
  }

  /* ------------------------------------------------------------------ routing */

  function currentRoute() {
    var h = (location.hash || '#/').replace(/^#/, '');
    var parts = h.split('/').filter(Boolean);
    if (!parts.length) return { name: 'home' };
    if (parts[0] === 's') return { name: 'section', n: parseInt(parts[1], 10) };
    if (parts[0] === 'n') return { name: 'entry', n: parseInt(parts[1], 10) };
    if (parts[0] === 'audit') return { name: 'audit' };
    if (parts[0] === 'q') return { name: 'search', q: decodeURIComponent(parts.slice(1).join('/') || '') };
    return { name: 'home' };
  }

  function go(hash) {
    if (location.hash === hash) render(); else location.hash = hash;
  }

  /* -------------------------------------------------------------------- rail */

  function paintRail() {
    var done = 0;
    var html = SECTIONS.map(function (s) {
      var data = window.DESIGN_BRAIN[s.n];
      var count = data && data.entries ? data.entries.length : 0;
      if (count) done += count;
      var pending = !data;
      return '<li><a class="rail__link' + (pending ? ' rail__link--pending' : '') +
        '" href="#/s/' + s.n + '" data-sec="' + s.n + '">' +
        '<span class="rail__num">' + (s.n < 10 ? '0' + s.n : s.n) + '</span>' +
        '<span class="rail__title">' + esc(s.title) +
        ' <span class="rail__count">' + (count ? count : s.expected) + '</span></span></a></li>';
    }).join('');

    els.railList.innerHTML = html;

    /* Researchers added entries the master list had missed, so the written
       count can exceed the planned one. Say what is actually there. */
    var sectionsDone = SECTIONS.filter(function (s) { return !!window.DESIGN_BRAIN[s.n]; }).length;
    els.progress.textContent = sectionsDone === SECTIONS.length
      ? Number(done).toLocaleString('en-GB') + ' entries'
      : Number(done).toLocaleString('en-GB') + ' of ' + Number(TOTAL_EXPECTED).toLocaleString('en-GB');

    if (indexed.length) {
      els.search.placeholder = 'Search ' + Number(indexed.length).toLocaleString('en-GB') + ' fundamentals';
    }
    markCurrentRail();
  }

  function markCurrentRail() {
    var r = currentRoute();
    var sec = r.name === 'section' ? r.n : null;
    Array.prototype.forEach.call(els.railList.querySelectorAll('.rail__link'), function (a) {
      if (parseInt(a.getAttribute('data-sec'), 10) === sec) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  /* ------------------------------------------------------------------ render */

  function render() {
    var r = currentRoute();
    markCurrentRail();
    document.body.classList.remove('nav-open');

    if (r.name === 'home') return renderHome();
    if (r.name === 'section') return renderSection(r.n);
    if (r.name === 'entry') return renderEntryJump(r.n);
    if (r.name === 'audit') return renderAudit();
    if (r.name === 'search') return renderSearch(r.q);
    renderHome();
  }

  function setView(html) {
    els.view.innerHTML = html;
    els.view.classList.remove('fade-in');
    void els.view.offsetWidth;
    els.view.classList.add('fade-in');
  }

  /* Home ------------------------------------------------------------------- */

  function renderHome() {
    document.title = 'GoodLad’s Design Brain v2';
    var written = indexed.length;
    var core = indexed.filter(function (e) { return e.verdict === 'core'; }).length;
    var adjacent = indexed.filter(function (e) { return e.verdict === 'adjacent'; }).length;
    var cut = indexed.filter(function (e) { return e.verdict === 'cut'; }).length;
    var flagged = indexed.filter(function (e) {
      return e.status === 'disputed' || e.status === 'unverified';
    }).length;

    var cards = SECTIONS.map(function (s) {
      var data = window.DESIGN_BRAIN[s.n];
      var count = data && data.entries ? data.entries.length : 0;
      var blurb = data && data.blurb ? data.blurb : 'Not written yet.';
      return '<a class="sec-card' + (data ? '' : ' sec-card--pending') + '" href="#/s/' + s.n + '">' +
        '<span class="sec-card__top">' +
          '<span class="sec-card__num">' + (s.n < 10 ? '0' + s.n : s.n) + '</span>' +
          '<span class="sec-card__count">' + (count ? count + ' entries' : 'pending') + '</span>' +
        '</span>' +
        '<span class="sec-card__title">' + esc(s.title) + '</span>' +
        '<p class="sec-card__blurb">' + esc(blurb) + '</p>' +
      '</a>';
    }).join('');

    setView(
      '<div class="wrap">' +
        '<header class="hero">' +
          '<div class="rule-label"><span class="mono-label">The reference</span></div>' +
          '<h1 class="hero__title">GoodLad’s Design Brain v2<br><em>every fundamental, checked</em></h1>' +
          '<div class="hero__grid">' +
            '<p class="lead">One entry for every design fundamental worth knowing: what it says, why it matters, how to use it, where it comes from, and whether it has any business being on the list at all. Sources are named. Contested ideas are labelled as contested.</p>' +
            '<div class="stat-row">' +
              stat(written, 'entries') +
              stat(TOTAL_EXPECTED, 'master list') +
              stat(core, 'core') +
              stat(adjacent, 'adjacent') +
              stat(cut, 'cut') +
              stat(flagged, 'flagged') +
            '</div>' +
          '</div>' +
        '</header>' +
        '<section style="padding-top:var(--s-7)">' +
          '<div class="rule-label"><span class="mono-label">Thirty-one sections</span>' +
          '<a class="mono-label" href="#/audit" style="text-decoration:none">Audit trail &rarr;</a></div>' +
          '<div class="section-index">' + cards + '</div>' +
        '</section>' +
        colophon() +
      '</div>'
    );
  }

  function stat(n, label) {
    return '<span class="stat"><span class="stat__n">' + fmt(n) + '</span><span class="stat__l">' + label + '</span></span>';
  }

  function fmt(n) { return Number(n).toLocaleString('en-GB'); }

  /* Section ---------------------------------------------------------------- */

  function renderSection(n) {
    var s = sectionByN(n);
    if (!s) return renderHome();
    document.title = s.title + ' — GoodLad’s Design Brain v2';

    if (!loaded(n)) {
      setView('<div class="wrap"><div class="loading">Loading section ' + n + '…</div></div>');
      loadSection(n).then(function (d) {
        if (currentRoute().name === 'section' && currentRoute().n === n) {
          d ? renderSection(n) : setView(pendingView(s));
        }
      });
      return;
    }

    var data = window.DESIGN_BRAIN[n];
    var entries = data.entries || [];

    var toc = entries.map(function (e) {
      return '<a href="#/s/' + n + '" data-jump="e' + e.n + '"><span class="n">' + shortNum(e.n) + '</span>' + esc(e.title) + '</a>';
    }).join('');

    var idx = SECTIONS.indexOf(s);
    var prev = idx > 0 ? SECTIONS[idx - 1] : null;
    var next = idx < SECTIONS.length - 1 ? SECTIONS[idx + 1] : null;

    setView(
      '<div class="wrap">' +
        '<header class="page-head">' +
          '<div class="page-head__eyebrow rule-label">' +
            '<span class="mono-label">Section ' + (n < 10 ? '0' + n : n) + ' &middot; ' + entries.length + ' entries</span>' +
          '</div>' +
          '<h1 class="page-head__title">' + esc(data.title || s.title) + '</h1>' +
          '<p class="page-head__intro">' + esc(data.intro || '') + '</p>' +
        '</header>' +
        (toc ? '<nav class="toc" aria-label="Entries in this section">' + toc + '</nav>' : '') +
        entries.map(entryHtml).join('') +
        '<nav class="pagination">' +
          (prev ? '<a href="#/s/' + prev.n + '"><span class="mono-label">Previous</span><span class="pagination__t">' + esc(prev.title) + '</span></a>' : '<span></span>') +
          (next ? '<a class="pagination__next" href="#/s/' + next.n + '"><span class="mono-label">Next</span><span class="pagination__t">' + esc(next.title) + '</span></a>' : '') +
        '</nav>' +
        (data.sources && data.sources.length ?
          '<section style="margin-top:var(--s-8)">' +
            '<div class="rule-label"><span class="mono-label">Sources used in this section</span></div>' +
            '<ul class="measure">' + data.sources.map(function (x) {
              return '<li style="padding:4px 0;color:var(--ink-2);font-size:0.9375rem">' + esc(x) + '</li>';
            }).join('') + '</ul>' +
          '</section>' : '') +
        colophon() +
      '</div>'
    );

    window.scrollTo(0, 0);
  }

  function pendingView(s) {
    return '<div class="wrap"><div class="empty">' +
      '<div class="rule-label"><span class="mono-label">Section ' + s.n + '</span></div>' +
      '<h1 class="empty__title">' + esc(s.title) + '</h1>' +
      '<p>This section has not been written yet. It covers entries ' + s.from + ' to ' + s.to +
      ' of the master list, ' + s.expected + ' in total.</p>' +
      '<p><a href="#/">Back to the index</a></p>' +
    '</div></div>';
  }

  /* Entry ------------------------------------------------------------------- */

  function entryHtml(e) {
    var verdict = (e.belongs && e.belongs.verdict) || '';
    var status = (e.verify && e.verify.status) || '';

    var fields = '';

    /* The demo comes first: see the thing, then read about it. Entries judged
       not to benefit from one say so quietly rather than showing an empty box. */
    if (e.demo && !e.demo.html && e.demo.none) {
      fields += field('Shown',
        '<p class="no-visual">No visual: ' + esc(e.demo.none) + '</p>');
    } else if (e.demo && e.demo.html) {
      fields += '<div class="field field--demo">' +
        '<div class="field__label mono-label">Shown</div>' +
        '<div class="field__body"><figure class="db-demo" data-measure-ignore>' +
          safeDemo(e.demo.html) +
          (e.demo.caption ? '<figcaption class="db-cap">' + esc(e.demo.caption) + '</figcaption>' : '') +
        '</figure></div></div>';
    }

    fields += field('What it is', '<p>' + esc(e.what) + '</p>');
    if (e.why) fields += field('Why it matters', '<p>' + esc(e.why) + '</p>');

    if (e.how && e.how.length) {
      fields += field('How to use it',
        '<ul class="how-list">' + e.how.map(function (h) { return '<li><span>' + esc(h) + '</span></li>'; }).join('') + '</ul>');
    }
    if (e.example) fields += field('Example', '<p>' + esc(e.example) + '</p>');
    if (e.numbers) fields += field('Numbers', '<div class="callout callout--numbers">' + esc(e.numbers) + '</div>');
    if (e.pitfall) fields += field('Goes wrong when', '<div class="callout callout--pitfall">' + esc(e.pitfall) + '</div>');
    if (e.source) fields += field('Source', '<p class="source-line">' + esc(e.source) + '</p>');

    var checkBits = '<div class="chips" style="margin-bottom:var(--s-3)">' +
      (status ? '<span class="chip chip--' + esc(status) + '">' + (STATUS_WORD[status] || esc(status)) + '</span>' : '') +
      (verdict ? '<span class="chip chip--' + esc(verdict) + '">' + (VERDICT_WORD[verdict] || esc(verdict)) + '</span>' : '') +
      '</div>' +
      (e.verify && e.verify.note ? '<p style="font-size:0.9375rem;color:var(--ink-2)">' + esc(e.verify.note) + '</p>' : '') +
      (e.belongs && e.belongs.why ? '<p style="font-size:0.9375rem;color:var(--ink-2)">' + esc(e.belongs.why) + '</p>' : '');
    fields += field('Checked', checkBits);

    if (e.related && e.related.length) {
      fields += field('Related', '<div class="related">' + e.related.map(function (r) {
        var t = entryLookup(r);
        return '<a href="#/n/' + r + '">' + shortNum(r) + (t ? ' &middot; ' + esc(t.title) : '') + '</a>';
      }).join('') + '</div>');
    }

    return '<article class="entry' + (verdict === 'cut' ? ' entry--cut' : '') + '" id="e' + e.n + '">' +
      '<header class="entry__head">' +
        '<span class="entry__num">' + displayNum(e.n) + '</span>' +
        '<h2 class="entry__title">' + esc(e.title) +
          '<a class="entry__anchor" href="#/n/' + e.n + '" aria-label="Link to this entry">#</a>' +
        '</h2>' +
        (e.aka && e.aka.length ? '<p class="entry__aka">Also called: ' + esc(e.aka.join(', ')) + '</p>' : '') +
        (e.oneLine ? '<p class="entry__oneline">' + esc(e.oneLine) + '</p>' : '') +
      '</header>' +
      fields +
    '</article>';
  }

  function field(label, body) {
    return '<div class="field">' +
      '<div class="field__label mono-label">' + label + '</div>' +
      '<div class="field__body">' + body + '</div>' +
    '</div>';
  }

  function renderEntryJump(num) {
    var hit = entryLookup(num);
    if (hit) {
      renderSection(hit.s);
      /* Arriving via a deep link should land on the entry, not slide to it.
         Smooth here also leaves headless captures mid-animation. */
      setTimeout(function () {
        var el = document.getElementById('e' + num);
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      }, 60);
      return;
    }
    // Not indexed yet: find the owning section from the manifest and load it.
    var owner = null;
    var seek = isAdded(num) ? num - 9000 : num;
    SECTIONS.forEach(function (s) { if (seek >= s.from && seek <= s.to) owner = s; });
    if (!owner) return renderHome();
    setView('<div class="wrap"><div class="loading">Finding entry ' + num + '…</div></div>');
    loadSection(owner.n).then(function () { renderEntryJump(num); });
  }

  /* Search ------------------------------------------------------------------ */

  function renderSearch(q) {
    document.title = q ? '"' + q + '" — GoodLad’s Design Brain v2' : 'Search — GoodLad’s Design Brain v2';
    var term = (q || '').trim().toLowerCase();
    if (els.search.value !== q) els.search.value = q || '';

    if (!term) {
      setView('<div class="wrap"><div class="empty"><h1 class="empty__title">Search the brain</h1>' +
        '<p>Type any principle, law, book or idea. ' + indexed.length + ' entries indexed so far.</p></div></div>');
      return;
    }

    var words = term.split(/\s+/);
    var hits = indexed.filter(function (e) {
      return words.every(function (w) { return e.hay.indexOf(w) !== -1; });
    }).map(function (e) {
      var score = 0;
      var t = e.title.toLowerCase();
      if (t === term) score += 100;
      if (t.indexOf(term) === 0) score += 50;
      if (t.indexOf(term) !== -1) score += 25;
      if (e.one.toLowerCase().indexOf(term) !== -1) score += 8;
      if (e.aka.toLowerCase().indexOf(term) !== -1) score += 15;
      return { e: e, score: score };
    }).sort(function (a, b) {
      return b.score - a.score || a.e.n - b.e.n;
    });

    activeResult = -1;

    if (!hits.length) {
      setView('<div class="wrap"><div class="empty"><h1 class="empty__title">Nothing found</h1>' +
        '<p>No entry matches &ldquo;' + esc(q) + '&rdquo; in the ' + indexed.length +
        ' entries indexed so far. Sections still being written will not appear yet.</p></div></div>');
      return;
    }

    setView('<div class="wrap">' +
      '<div class="rule-label"><span class="mono-label">' + hits.length + ' result' +
        (hits.length === 1 ? '' : 's') + ' for &ldquo;' + esc(q) + '&rdquo;</span></div>' +
      '<div class="results">' + hits.map(function (h) {
        var s = sectionByN(h.e.s);
        return '<a class="result" href="#/n/' + h.e.n + '">' +
          '<span class="result__n">' + shortNum(h.e.n) + '</span>' +
          '<span><span class="result__t">' + highlight(h.e.title, words) + '</span>' +
            '<span class="result__o">' + highlight(h.e.one, words) + '</span></span>' +
          '<span class="result__s">' + esc(s ? s.title : '') + '</span>' +
        '</a>';
      }).join('') + '</div></div>');
  }

  function highlight(text, words) {
    var out = esc(text);
    words.forEach(function (w) {
      if (!w) return;
      var re = new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
      out = out.replace(re, '<mark>$1</mark>');
    });
    return out;
  }

  /* Audit ------------------------------------------------------------------- */

  var auditFilter = 'flagged';

  function renderAudit() {
    document.title = 'Audit trail — GoodLad’s Design Brain v2';

    var rows = [];
    SECTIONS.forEach(function (s) {
      var data = window.DESIGN_BRAIN[s.n];
      if (!data) return;
      (data.entries || []).forEach(function (e) {
        var v = (e.belongs && e.belongs.verdict) || '';
        var st = (e.verify && e.verify.status) || '';
        var isFlagged = v === 'cut' || v === 'adjacent' || st === 'disputed' || st === 'unverified' || st === 'adjusted';
        if (auditFilter === 'flagged' && !isFlagged) return;
        if (auditFilter === 'cut' && v !== 'cut') return;
        if (auditFilter === 'adjacent' && v !== 'adjacent') return;
        if (auditFilter === 'disputed' && st !== 'disputed') return;
        rows.push({ e: e, s: s, v: v, st: st });
      });
    });

    var btns = [
      ['flagged', 'Everything flagged'],
      ['cut', 'Cut'],
      ['adjacent', 'Adjacent'],
      ['disputed', 'Disputed'],
      ['all', 'All entries']
    ].map(function (b) {
      return '<button class="filter-btn" data-filter="' + b[0] + '" aria-pressed="' +
        (auditFilter === b[0]) + '">' + b[1] + '</button>';
    }).join('');

    setView('<div class="wrap">' +
      '<header class="page-head">' +
        '<div class="page-head__eyebrow rule-label"><span class="mono-label">Audit trail</span></div>' +
        '<h1 class="page-head__title">What was checked, and what did not survive</h1>' +
        '<p class="page-head__intro">Every entry carries a verdict on whether it belongs on a design list at all, and a status on how well its facts stand up. This is the list of everything that is not a plain, verified, core fundamental.</p>' +
      '</header>' +
      '<div class="filters">' + btns + '</div>' +
      (indexed.length < 40 ? '<div class="loading">Loading sections…</div>' : '') +
      (rows.length ? '<div class="results">' + rows.map(function (r) {
        return '<div class="audit-row">' +
          '<a class="result__n" href="#/n/' + r.e.n + '" style="text-decoration:none">' + shortNum(r.e.n) + '</a>' +
          '<a href="#/n/' + r.e.n + '" style="text-decoration:none"><strong style="font-family:var(--font-display);font-weight:400">' +
            esc(r.e.title) + '</strong><br><span class="mono-label">' + esc(r.s.title) + '</span></a>' +
          '<span class="audit-verdict chips">' +
            (r.st ? '<span class="chip chip--' + esc(r.st) + '">' + (STATUS_WORD[r.st] || esc(r.st)) + '</span>' : '') +
            (r.v ? '<span class="chip chip--' + esc(r.v) + '">' + (VERDICT_WORD[r.v] || esc(r.v)) + '</span>' : '') +
          '</span>' +
          '<span class="audit-why">' + esc((r.e.belongs && r.e.belongs.why) || '') +
            (r.e.verify && r.e.verify.note && (r.st === 'disputed' || r.st === 'adjusted' || r.st === 'unverified')
              ? ' <em style="color:var(--ink-3)">' + esc(r.e.verify.note) + '</em>' : '') +
          '</span>' +
        '</div>';
      }).join('') + '</div>'
        : '<div class="empty"><p>Nothing matches that filter in the sections written so far.</p></div>') +
      colophon() +
    '</div>');
  }

  function colophon() {
    return '<footer class="colophon">' +
      '<span>GoodLad’s Design Brain v2 &middot; BrainGrapes internal reference</span>' +
      '<span>Set in Bodoni Moda, Newsreader and IBM Plex Mono &middot; measure held near 66 characters &middot; 8pt spacing scale</span>' +
      '<span>Every source named. Contested claims labelled.</span>' +
    '</footer>';
  }

  /* ------------------------------------------------------------------- events */

  function onSearchInput() {
    clearTimeout(searchTimer);
    var v = els.search.value;
    searchTimer = setTimeout(function () {
      if (!v.trim()) {
        if (currentRoute().name === 'search') go('#/');
        return;
      }
      go('#/q/' + encodeURIComponent(v));
    }, 140);
  }

  function moveResult(dir) {
    var list = els.view.querySelectorAll('.result');
    if (!list.length) return;
    if (activeResult >= 0 && list[activeResult]) list[activeResult].classList.remove('is-active');
    activeResult += dir;
    if (activeResult < 0) activeResult = list.length - 1;
    if (activeResult >= list.length) activeResult = 0;
    list[activeResult].classList.add('is-active');
    list[activeResult].scrollIntoView({ block: 'nearest' });
  }

  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('db-theme', t); } catch (err) {}
    els.themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  function bind() {
    els.search.addEventListener('input', onSearchInput);

    els.search.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') { els.search.value = ''; els.search.blur(); go('#/'); }
      if (ev.key === 'ArrowDown') { ev.preventDefault(); moveResult(1); }
      if (ev.key === 'ArrowUp') { ev.preventDefault(); moveResult(-1); }
      if (ev.key === 'Enter') {
        var list = els.view.querySelectorAll('.result');
        var target = list[activeResult >= 0 ? activeResult : 0];
        if (target) { ev.preventDefault(); location.hash = target.getAttribute('href').slice(1); els.search.blur(); }
      }
    });

    document.addEventListener('keydown', function (ev) {
      var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
      if ((ev.key === '/' && !typing) || ((ev.metaKey || ev.ctrlKey) && ev.key.toLowerCase() === 'k')) {
        ev.preventDefault();
        els.search.focus();
        els.search.select();
      }
    });

    els.themeBtn.addEventListener('click', function () {
      var now = document.documentElement.getAttribute('data-theme');
      if (!now) {
        now = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      setTheme(now === 'dark' ? 'light' : 'dark');
    });

    els.navBtn.addEventListener('click', function () { document.body.classList.toggle('nav-open'); });
    els.scrim.addEventListener('click', function () { document.body.classList.remove('nav-open'); });

    els.view.addEventListener('click', function (ev) {
      var jump = ev.target.closest('[data-jump]');
      if (jump) {
        ev.preventDefault();
        var el = document.getElementById(jump.getAttribute('data-jump'));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      var f = ev.target.closest('[data-filter]');
      if (f) { auditFilter = f.getAttribute('data-filter'); renderAudit(); }
    });

    window.addEventListener('hashchange', render);
  }

  /* --------------------------------------------------------------------- boot */

  function boot() {
    els.view = document.getElementById('view');
    els.railList = document.getElementById('rail-list');
    els.search = document.getElementById('search');
    els.themeBtn = document.getElementById('theme-btn');
    els.navBtn = document.getElementById('nav-btn');
    els.scrim = document.getElementById('scrim');
    els.progress = document.getElementById('progress');

    var stored = null;
    try { stored = localStorage.getItem('db-theme'); } catch (err) {}
    if (stored) setTheme(stored);

    bind();
    paintRail();
    render();

    /* Load the section the route actually needs before warming the rest.
       A deep link to an entry used to kick off all thirty loads first, which
       left the one section the reader asked for queued behind the other 29. */
    var r = currentRoute();
    var first = null;
    if (r.name === 'section') {
      first = r.n;
    } else if (r.name === 'entry') {
      var target = isAdded(r.n) ? r.n - 9000 : r.n;
      SECTIONS.forEach(function (s) {
        if (target >= s.from && target <= s.to) first = s.n;
      });
    }
    if (first) loadSection(first).then(warmAll); else warmAll();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
