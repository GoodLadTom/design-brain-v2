#!/usr/bin/env node
/**
 * Design Brain — cross-section duplicate finder.
 *
 * The master list was compiled section by section, so the same idea can appear
 * in more than one place: proximity sits in both composition and Gestalt,
 * figure-ground in both, focal point in three. This finds those collisions so
 * one entry can be made canonical and the others made cross-references.
 *
 *   node tools/find-duplicates.mjs           report everything
 *   node tools/find-duplicates.mjs --strong  exact and near-exact only
 */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = (fs.existsSync(path.join(ROOT, 'site', 'data')) ? path.join(ROOT, 'site', 'data') : path.join(ROOT, 'data'));
const strongOnly = process.argv.includes('--strong');

/* Words that carry no distinguishing meaning in a design title. */
const STOP = new Set([
  'the', 'a', 'an', 'of', 'and', 'or', 'in', 'to', 'for', 'on', 'with', 'as',
  'by', 'at', 'from', 'is', 'its', 'design', 'principle', 'law', 'effect',
  'rule', 'versus', 'vs',
]);

function norm(s) {
  return String(s)
    .toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokens(s) {
  return new Set(norm(s).split(/[\s-]+/).filter((w) => w && !STOP.has(w)));
}

function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let hit = 0;
  for (const x of a) if (b.has(x)) hit++;
  return hit / (a.size + b.size - hit);
}

/* Load every written section --------------------------------------------- */

const all = [];
for (const f of fs.readdirSync(DATA).filter((f) => /^s\d\d\.js$/.test(f)).sort()) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  try {
    vm.runInContext(fs.readFileSync(path.join(DATA, f), 'utf8'), sandbox, { filename: f });
  } catch (e) {
    console.error(`skipping ${f}: ${e.message}`);
    continue;
  }
  const db = sandbox.window.DESIGN_BRAIN;
  for (const key of Object.keys(db)) {
    const sec = db[key];
    for (const e of sec.entries || []) {
      const names = [e.title, ...(e.aka || [])];
      all.push({
        n: e.n,
        sec: sec.n,
        secTitle: sec.title,
        title: e.title,
        cut: e.belongs && e.belongs.verdict === 'cut',
        toks: tokens(names.join(' ')),
        normTitle: norm(e.title),
        fullTitle: norm(e.title + " " + (e.title.match(/\(([^)]*)\)/) ? e.title.match(/\(([^)]*)\)/)[1] : "")),
      });
    }
  }
}

console.log(`\nCross-section duplicate check — ${all.length} entries loaded`);
console.log('='.repeat(74));

/* Compare -------------------------------------------------------------- */

const pairs = [];
for (let i = 0; i < all.length; i++) {
  for (let j = i + 1; j < all.length; j++) {
    const a = all[i];
    const b = all[j];
    if (a.sec === b.sec) continue;             // within-section repeats are the author's business
    if (a.cut && b.cut) continue;              // both already cut

    let score = jaccard(a.toks, b.toks);

    /* An exact match only counts when the FULL titles agree. Two entries
       deliberately disambiguated as "Anticipation (interaction)" and
       "Anticipation (animation)" are resolved, not colliding. */
    const sameBare = a.normTitle && a.normTitle === b.normTitle;
    const sameFull = a.fullTitle === b.fullTitle;
    if (sameFull) score = 1;
    else if (sameBare) score = Math.min(score, 0.7);   // resolved: report as loose only

    const threshold = strongOnly ? 0.8 : 0.55;
    if (score >= threshold) pairs.push({ a, b, score });
  }
}

pairs.sort((x, y) => y.score - x.score);

if (!pairs.length) {
  console.log('\nNo cross-section collisions above the threshold.\n');
  process.exit(0);
}

let exact = 0;
for (const p of pairs) {
  const tag = p.score === 1 ? 'EXACT' : p.score >= 0.8 ? 'NEAR ' : 'LOOSE';
  if (p.score === 1) exact++;
  const aFlag = p.a.cut ? ' [cut]' : '';
  const bFlag = p.b.cut ? ' [cut]' : '';
  console.log(
    `\n${tag} ${p.score.toFixed(2)}\n` +
    `  #${p.a.n} ${p.a.title}${aFlag}\n      s${p.a.sec} ${p.a.secTitle}\n` +
    `  #${p.b.n} ${p.b.title}${bFlag}\n      s${p.b.sec} ${p.b.secTitle}`
  );
}

console.log('\n' + '='.repeat(74));
console.log(`${pairs.length} collisions (${exact} exact title matches).`);
console.log('Resolve by picking one canonical entry and turning the other into a');
console.log('short cross-reference that points at it, rather than explaining twice.\n');
