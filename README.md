# GoodLad's Design Brain v2

A design method for people and models that have to produce good design
without a reference to copy. Underneath it, 1,124 design fundamentals, each
checked against a named primary source and labelled with whether it belongs on
the list at all.

Live site: **[goodlads-design-brain.vercel.app](https://goodlads-design-brain.vercel.app)**

Version 1 was a library: you looked things up. Version 2 is a method: it runs
while the decisions are being made, and it measures the result before anyone
sees it.

## What changed in v2

**The core.** About 4,000 words that get read whole before any design task:
the order of decisions (brief, hierarchy, structure, type, colour, imagery,
interaction, motion, then self-critique), a numbers card of every hard
threshold with its status and source, a list of twenty anti-defaults (the
moves a model reaches for when nobody decided anything, each paired with the
entry that explains the failure and the move that replaces it), and a
vocabulary of named moves. `skills/design-brain/core/CORE.md`.

**The measurement tool.** `measure.mjs` opens a page in headless Chrome and
reports what it finds against the corpus, at 1280 and 390 wide: every text
contrast pair, characters per line, line-height, body size, type sizes and
families, whether spacing sits on a 4px scale, target sizes, how many
saturated hues are in play, heading order, alt text, motion and reduced-motion,
focus outlines, form labels and overflow. Each finding names the entry it comes
from. It exits non-zero on a FAIL, so it works as a gate. Nothing in it is
inferred from the source; every figure comes from the rendered page. Node 22
and a Chrome install, no dependencies.

**Brief translation.** A table from the words clients use ("premium",
"friendly", "modern") to the design moves each one asks for and, more usefully,
what each one rules out.

**Playbooks.** For landing pages, dashboards, decks, forms, charts, email and
brand marks: the entries that matter most for that artefact, ranked, with the
numbers and the checks to run before showing anyone.

**Worked derivations.** Five designs reasoned from the corpus on a written
brief: a small business site, a dashboard, three slides, a form in two
states, and a single report chart. Each ships with the brief, a decision log
citing entry numbers, the result as one HTML file, and the tool's measurement
of it. The businesses are fictional and say so on the page. The chart's data
is real: the WebAIM Million figures the corpus already cites. Read the
decision logs for the method, including the places where the first draft was
wrong and the tool said so.

**House overlays.** The core is brief-neutral. A house file sits on top of it
for one studio's rules, and the decision log records where it overrode the
core. One real overlay is included as the format to copy.

**The site, run through its own method.** The v1 site was the other AI default:
cream paper, a didone display face doing text jobs, tracked mono capitals on
every label, a violet accent, 31 equal cards. The tool found two contrast
slips and a 15px target in its chrome. The v2 site is two families with two
jobs (Newsreader for reading, IBM Plex Sans for chrome), five type sizes
instead of eleven, one accent, the search as the focal point, and the sections
as a directory in seven named groups. Its decision log is `site/DECISIONS.md`.

**The corpus.** Five entries added with new primary sources: auditory icons
(Gaver 1986), tactons (Brewster and Brown 2004), loudness normalisation (EBU
R 128), standard beep patterns (ISO 24500) and, in the failure modes, the
model default itself. One entry upgraded from unverified after its source was
traced. Section 14 split into interaction principles and a new section 31 of
interface patterns and states. Two contrast slips in the site's own chrome
fixed, found by the tool.

## Requirements

- `query.py` needs Python 3.8 or later and nothing else.
- `measure.mjs` needs Node 22 or later (it uses the built-in WebSocket) and a
  Chrome or Chromium install. It looks in the usual places on macOS, Linux and
  Windows; if yours is somewhere else, set `DESIGN_BRAIN_CHROME` to the binary.
- The site needs a browser. No server, no build.

## Install

**Claude Code, as a plugin** (the recommended route; it updates with the repo)

```text
/plugin marketplace add GoodLadTom/design-brain-v2
/plugin install design-brain@goodlad-design-brain-v2
```

Restart Claude Code. The skill is now `design-brain` and it triggers on its own
for design work, critique and design-theory questions.

**Claude Code, by hand** (no plugin system, or a single project)

```bash
git clone https://github.com/GoodLadTom/design-brain-v2.git
cp -r design-brain-v2/skills/design-brain ~/.claude/skills/design-brain   # every project
# or, for one project only:
cp -r design-brain-v2/skills/design-brain .claude/skills/design-brain
```

**Codex, Cursor, or anything that reads a skills folder**

```bash
git clone https://github.com/GoodLadTom/design-brain-v2.git
cd design-brain-v2
./install.sh
```

`install.sh` links the skill into `~/.claude/skills`, `~/.cursor/skills`,
`~/.codex/skills` and `~/.agents/skills`, whichever exist, and reports whether
Python, Node and Chrome are where the tools expect them.

**Check it works**

```bash
python3 skills/design-brain/scripts/query.py entry 690
node skills/design-brain/scripts/measure.mjs skills/design-brain/references/derivations/01-small-business-site/index.html
```

The first prints the contrast entry with its source. The second opens the
joinery derivation in headless Chrome and reports PASS at 1280 and 390 wide.

## Using it

Say what you want built and name the skill, or don't: it triggers on design
work by itself.

- "Design a one-page site for a physiotherapy clinic in Leeds. Use Design
  Brain." It reads the core, translates the brief, works the order of
  decisions, builds, measures at both widths, and hands over a decision log
  citing entry numbers.
- "Critique this page against Design Brain: path/to/index.html" It measures
  first, then reports violations as entry, rule, source and fix, in severity
  order, and names what the page does well.
- "What does Design Brain say about line length?" It answers from the corpus
  with entry numbers and named sources, and says so when the corpus is silent.
- "Use the GoodLad house rules." Loads the overlay in `house/`. Copy
  `house/goodlad.md` to `house/<yours>.md` to make your own.

**Query it directly, no agent involved**

```bash
python3 skills/design-brain/scripts/query.py search line length
python3 skills/design-brain/scripts/query.py entry 690
python3 skills/design-brain/scripts/query.py numbers target size
python3 skills/design-brain/scripts/query.py critique contrast hierarchy
node skills/design-brain/scripts/measure.mjs path/to/page.html --shot ./shots
```

## Updating

Pull the repo. If you installed as a plugin, Claude Code picks the update up;
if you copied the folder, copy it again. `skills/design-brain/scripts/refresh.sh`
rebuilds both data indexes from the live site if the corpus changes.

## Read it as a site

Open `site/index.html` in a browser. There is no server and no build step. It
works from a `file://` URL and on any static host.

Every entry carries a live visual demo built from HTML and CSS rather than a
screenshot, so a demo of easing actually eases and a contrast demo genuinely
fails at 1.9:1. Press `/` to search. The **Audit trail** view lists everything
that isn't a plain, verified, core fundamental, which is the fastest way to
find the arguments.

## Why the corpus is built the way it is

Most design advice arrives without a receipt. Someone tells you the golden
ratio is why the layout works, or that people read web pages in an F-pattern,
and none of it comes with a source you can go and check. So every entry names
where the claim came from, and records what happened when someone checked it:

| Verify status | Entries | Meaning |
| --- | --- | --- |
| `verified` | 886 | The source says what people say it says |
| `adjusted` | 105 | The claim needed correcting to match the source |
| `disputed` | 104 | Real disagreement in the literature, flagged as such |
| `unverified` | 29 | No primary source could be found; the note says what was tried |

The 29 unverified entries stay unverified on purpose. Each one is a piece of
craft vocabulary with no traceable originator ("regular rhythm", "empty
states", "design QA"), and the previous researchers already looked. Inventing
a source would be worse than saying there isn't one.

Every entry also gets a verdict on whether it belongs: **909 core**, **190
adjacent** (real and useful, but borrowed from another field) and **25 cut**
(doesn't belong, with the reason and a replacement where there is one). The
golden ratio (#1024) is filed as disputed. The F-pattern (#143) is verified
against Nielsen Norman Group's eyetracking of 232 users. Z-pattern scanning
(#142) is cut.

## The 31 sections

| # | Section | Entries |
| --- | --- | --- |
| 01 | First principles and doctrines | 52 |
| 02 | Elements of visual language | 35 |
| 03 | Principles of composition | 73 |
| 04 | Gestalt principles of perception | 22 |
| 05 | Perception, vision and cognition | 54 |
| 06 | Named laws and effects used in design | 46 |
| 07 | Colour | 61 |
| 08 | Typography: macro | 46 |
| 09 | Typography: micro | 37 |
| 10 | Grid and layout systems | 43 |
| 11 | Proportion and geometry | 17 |
| 12 | Image, photography and iconography | 35 |
| 13 | Information design and data visualisation | 41 |
| 14 | Interaction principles | 57 |
| 15 | Information architecture and wayfinding | 27 |
| 16 | Content, copy and voice | 27 |
| 17 | Accessibility and inclusive design | 37 |
| 18 | Motion and animation | 35 |
| 19 | Sound and haptics | 12 |
| 20 | Design systems | 32 |
| 21 | Web and front-end craft | 32 |
| 22 | Brand and identity | 37 |
| 23 | Editorial, book and print production | 23 |
| 24 | Environmental, signage and exhibition | 17 |
| 25 | Product and industrial design | 22 |
| 26 | Architecture, space and urbanism | 32 |
| 27 | Process and method | 43 |
| 28 | Ethics and responsibility | 28 |
| 29 | Numbers worth memorising | 15 |
| 30 | Common failure modes | 39 |
| 31 | Interface patterns and states | 47 |

Entry numbers run 1 to 1,060 in reading order, plus 64 later additions
numbered from 9000 (so #9756 is the entry added after #756).

## Repo layout

```
skills/design-brain/
  SKILL.md                              the four modes: DESIGN, ASK, CRITIQUE, TEACH
  core/CORE.md                          read whole before any design task
  references/brief-translation.md       client adjectives to constraints
  references/playbooks/                 landing-page, dashboard, deck, form, chart, email, brand-mark
  references/derivations/               five worked designs, each with brief, log, result, measurement
  house/                                house-style overlays; goodlad.md is the example
  scripts/query.py                      search, entry, section, critique, numbers
  scripts/measure.mjs                   measure a rendered page
  scripts/refresh.sh                    re-pull the live site and rebuild both indexes
  data/design-brain.json                the corpus
  data/numbers.json                     every published threshold, with source
site/                                   the browsable site, build-free
tools/                                  data quality gate, duplicate finder, list export
```

## Licence

Two licences, because the code and the corpus are different things.

The corpus, meaning the entries and section introductions, is
[CC BY 4.0](LICENSE-CONTENT). Use it, adapt it, sell things built on it, and
credit it. The code, meaning the site shell, the tools, the scripts and the
derivation pages, is [MIT](LICENSE).

The books, papers and standards cited inside the corpus belong to their own
authors. Entries summarise and cite those sources rather than reproducing them.

## Contributing

Corrections are the useful kind of issue. If an entry misstates its source,
cite the source and say what it actually says. If the measurement tool reports
something wrong on a page you can share, include the page. If something
labelled `core` is really folklore, make the case.

Built by [Tom Moore](https://github.com/GoodLadTom). Version 1 is at
[GoodLadTom/design-brain](https://github.com/GoodLadTom/design-brain).
