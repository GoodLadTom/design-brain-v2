#!/usr/bin/env node
/**
 * Design Brain — regenerate the master list from the verified data.
 *
 * The original Design-Fundamentals-Master-List.md was the input to the build.
 * It has since been overtaken: 25 entries were cut, 59 genuine gaps were added,
 * and a number of titles were disambiguated. This writes the list back out as
 * it now actually stands, so the flat reference and the site cannot drift.
 *
 *   node tools/export-list.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = (fs.existsSync(path.join(ROOT, 'site', 'data')) ? path.join(ROOT, 'site', 'data') : path.join(ROOT, 'data'));
const OUT = path.join(ROOT, 'Design-Fundamentals-Verified-List.md');

const sections = [];
for (const f of fs.readdirSync(DATA).filter((f) => /^s\d\d\.js$/.test(f)).sort()) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(DATA, f), 'utf8'), sandbox, { filename: f });
  const db = sandbox.window.DESIGN_BRAIN;
  sections.push(db[Object.keys(db)[0]]);
}
sections.sort((a, b) => a.n - b.n);

const t = { core: 0, adjacent: 0, cut: 0 };
const st = { verified: 0, adjusted: 0, disputed: 0, unverified: 0 };
let total = 0, added = 0, demos = 0, skips = 0;

for (const s of sections) {
  for (const e of s.entries) {
    total++;
    if (e.n >= 9000) added++;
    if (e.demo && e.demo.html) demos++;
    if (e.demo && e.demo.none) skips++;
    if (t[e.belongs?.verdict] !== undefined) t[e.belongs.verdict]++;
    if (st[e.verify?.status] !== undefined) st[e.verify.status]++;
  }
}

/* Newest data file, not an arbitrary one: this is a build stamp. */
const today = fs.readdirSync(DATA)
  .filter((f) => /^s\d\d\.js$/.test(f))
  .map((f) => fs.statSync(path.join(DATA, f)).mtime)
  .sort((a, b) => b - a)[0]
  .toISOString().slice(0, 10);

let out = `# Design Fundamentals — the verified list

Generated from the site data by \`tools/export-list.mjs\`. This supersedes
\`Design-Fundamentals-Master-List.md\`, which was the input to the build rather
than a record of what survived it.

**${total.toLocaleString('en-GB')} entries.** ${t.core} core, ${t.adjacent} adjacent, ${t.cut} cut.
${st.verified} verified, ${st.adjusted} corrected, ${st.disputed} disputed,
${st.unverified} unconfirmed. ${added} added as gaps in the original list.
${demos} carry a visual demonstration; ${skips} were judged not to need one.

Notation: **[cut]** did not survive the membership check and the entry explains
why. **[disputed]** is real but contested, misattributed, or resting on research
that has been challenged. **[+]** was added during the build. **[?]** could not
be confirmed against a source.

Last built ${today}.

---

`;

for (const s of sections) {
  out += `## ${s.n}. ${s.title}\n\n`;
  if (s.blurb) out += `*${s.blurb}*\n\n`;
  for (const e of s.entries) {
    const tags = [];
    if (e.belongs?.verdict === 'cut') tags.push('**[cut]**');
    if (e.belongs?.verdict === 'adjacent') tags.push('[adjacent]');
    if (e.verify?.status === 'disputed') tags.push('**[disputed]**');
    if (e.verify?.status === 'unverified') tags.push('[?]');
    if (e.n >= 9000) tags.push('[+]');
    const num = e.n >= 9000 ? `+${e.n - 9000}` : String(e.n);
    out += `${num}. ${e.title}${tags.length ? ' ' + tags.join(' ') : ''}\n`;
  }
  out += '\n';
}

out += `---

## What was cut, and why

`;
for (const s of sections) {
  for (const e of s.entries) {
    if (e.belongs?.verdict !== 'cut') continue;
    out += `**${e.n} ${e.title}** *(section ${s.n})*\n\n${e.belongs.why}\n\n`;
  }
}

fs.writeFileSync(OUT, out, 'utf8');
console.log(`Wrote ${OUT}`);
console.log(`${total} entries, ${t.cut} cut, ${added} added, ${demos} demos, ${skips} judged skips`);
