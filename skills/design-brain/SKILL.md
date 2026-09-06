---
name: design-brain
description: >
  Design from fundamentals rather than from a reference to copy. A method
  (order of decisions, numbers, anti-defaults) that runs at decision time, a
  measurement tool that checks the rendered page against WCAG and the corpus,
  and 1,124 sourced design entries for lookup and citation. Use for any visual
  build (website, page, UI, deck, form, chart, email, brand mark), for design
  critique, for design-theory questions, and for teaching material. Trigger
  on design brain, design this, build a page, make it look good, critique this
  design/page/deck, why does this feel off, and on typography, hierarchy,
  contrast, whitespace, grid, colour, accessibility, motion or
  data-visualisation questions.
---

# Design Brain

Four modes. DESIGN is the one that changes what you build; the other three
answer, critique and teach from the same corpus.

Resolve this skill folder as `SKILL_DIR`. Everything is local. Never fetch the
live site to answer a question.

```
SKILL_DIR/
  core/CORE.md                     read whole before any design task
  references/brief-translation.md  client adjectives to constraints
  references/playbooks/*.md        landing-page, dashboard, deck, form, chart, email, brand-mark
  references/derivations/*/        worked designs: brief, decision log, result, measurement
  house/                           optional house-style overlays (see house/README.md)
  scripts/query.py                 search, entry, section, critique, numbers
  scripts/measure.mjs              measure a rendered page (needs Chrome and Node 22+)
  data/design-brain.json           the corpus, 1,124 entries
  data/numbers.json                every published threshold, with source
```

## Mode: DESIGN

Use whenever you are about to build or restyle anything visual, whether or not
anyone said "design". Do not skip to writing markup.

1. **Read `core/CORE.md` in full.** It is about 4,000 words and it is the part
   of the corpus you carry through the task: the order of decisions, the
   numbers card, the anti-defaults, the vocabulary.
2. **Open the playbook for the artefact** in `references/playbooks/`. If none
   fits, use the nearest and say so.
3. **Translate the brief** with `references/brief-translation.md`. Cap the
   attributes at four; write the exclusions before anything else.
4. **Load a house overlay** if one is present in `house/` and the user has
   asked for it, or it is the user's own. House rules override the core where
   they conflict, and the decision log records that they did.
5. **Work the order of decisions** from CORE.md, Step 0 to Step 7, writing each
   answer as you go. Pull entries with `query.py entry <n>` whenever a step
   needs the full method. Check `query.py numbers <terms>` before choosing any
   size, ratio, duration or contrast.
6. **Build.** Every value in the code comes from a decision already written
   down: the spacing scale, the type scale, the measured palette.
7. **Measure before showing.** `node scripts/measure.mjs <file> ` at both
   default viewports. Fix every FAIL. Read every WARN and CHECK and fix it or
   record why not. Then walk the anti-defaults in CORE.md section 3 and section
   30 of the corpus.
8. **Ship the decision log** (CORE.md section 6) with the work. It cites entry
   numbers. It is short.

If a derivation in `references/derivations/` matches the artefact, read its
`DECISIONS.md` first. It shows what reasoning from the corpus looks like on a
real brief. Do not copy its result; copy its method.

## Mode: ASK (answer engine)

1. `query.py search <terms>` for the topic, then `entry <n>` for the ones that
   matter. Entries carry `related` numbers; follow the good ones.
2. Answer in plain English, always citing entry number and named source, like
   "(#690 Text contrast minimums, WCAG 2.2 SC 1.4.3)".
3. Quote the verify label when it is not `verified`. A `disputed` entry is
   cited as disputed.
4. If the corpus is silent, say so. Never pad with generic advice dressed as a
   citation.

## Mode: CRITIQUE (the call-out)

Use whenever visual work is being built, reviewed or shipped in a session.
Don't wait to be asked.

1. Run `measure.mjs` on the rendered page if there is one. Its output is
   evidence; opinion comes after.
2. Identify the artefact and open its playbook. Run its "Checks before
   showing" list.
3. Run two to four `query.py critique <terms>` queries for the artefact's risk
   areas.
4. Report findings as: violation, entry number and title, the rule, the named
   source, the concrete fix. Severity-ordered. Measured figures where they
   exist ("3.1:1 on the footer links, needs 4.5:1"). No "make it pop".
5. Name one or two things the work does well against the corpus, so the
   critique is calibrated.
6. Sweep section 30 (`query.py section failure-modes`) and CORE.md's
   anti-defaults for anything the targeted queries missed.

## Mode: TEACH (content source)

1. Pull entries or sections in full (`entry`, `section`).
2. Hand the sourced material (rule, example, pitfall, numbers, source) to
   whatever writes the finished piece. This skill supplies substance and
   citations; it does not write the post.
3. Never strip the source attribution.

## The tools

```bash
python3 "$SKILL_DIR/scripts/query.py" sections
python3 "$SKILL_DIR/scripts/query.py" search <terms> [--limit N]
python3 "$SKILL_DIR/scripts/query.py" entry <n> [n...]
python3 "$SKILL_DIR/scripts/query.py" section <slug|n>
python3 "$SKILL_DIR/scripts/query.py" critique <terms> [--limit N]
python3 "$SKILL_DIR/scripts/query.py" numbers <terms> [--limit N]
python3 "$SKILL_DIR/scripts/query.py" ... --json

node "$SKILL_DIR/scripts/measure.mjs" <file.html | URL> [--viewport 1280x800] [--json] [--all]
```

`query.py` needs Python 3 and nothing else. `measure.mjs` needs Node 22 or
later and a Chrome or Chromium install; set `DESIGN_BRAIN_CHROME` if it is
somewhere unusual. It reports contrast, measure, line-height, body size, type
sizes and families, spacing scale, target sizes, hue count, heading order, alt
text, motion and reduced-motion, focus outlines, form labels and overflow, each
keyed to the entry it comes from, at 1280 and 390 wide by default. Exit code 1
on any FAIL, so it works as a gate. Put `data-measure-ignore` on anything that
fails on purpose, such as a demo of bad contrast.

Entry numbers run 1 to 1,060 in reading order, plus 64 later additions
numbered from 9000 (#9756 is the entry added after #756), so `entry 9000` is
valid.

## What the labels mean

Each entry carries a verdict and a verify record:

- `core`: a genuine design fundamental worth knowing and using.
- `adjacent`: real and useful, but borrowed from another field. Kept only
  where the entry states its specific design use.
- `cut`: doesn't belong. The entry says why, and names a replacement.

`verify` is `verified`, `adjusted`, `disputed` or `unverified`, with a note
saying what was checked. Quote it when it isn't `verified`, so the reader knows
how much weight the claim carries.

## Maintenance

`scripts/refresh.sh` re-pulls the live site and rebuilds `design-brain.json`;
rebuild `numbers.json` from it with the snippet in the script. Run only when
the site has actually changed.
