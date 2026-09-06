# Decision log: the Design Brain site, run through its own method

The v1 site was critiqued with `skills/design-brain/scripts/measure.mjs`, the
landing-page playbook and the corpus, then rebuilt from a written brief. This
is the log. Measured figures are from the tool at 1280 and 390 wide, settled
page, after the rebuild.

## What the critique found

Measured: an "Audit trail" link at 109 by 15px (#700); 372 entry-number
links at 48 by 18px on the audit view (#700); 65 blocks of 15px text on every
section page (#1013); 10 to 11 distinct type sizes and three families (#344,
#1025); spacing 80 to 83 per cent on the 4px scale, 65 per cent on the audit
view (#1026); a violet accent with no reason behind it (#842); a first paint
of "0 entries" and every section "pending" until the background load
finished (#592).

By eye: the whole system was the editorial AI default, cream paper, a didone
display face doing text jobs at 20 and 24px (#336, #329), tracked mono
capitals on every label so nothing was emphasised (#397), a first screen with
no job and no action (#683, #443), 31 equal cards beside a rail holding the
same 31 items (#1048), and a twelve-line introduction in front of every
section's contents.

What worked and was kept: search-first with `/` (#590), the rail with live
counts (#653), the entry anatomy with live demos (#478, #680), the verdict
chips carrying words (#318), dark mode, print, keyboard navigation.

## Brief (Step 0)

- Job: get a designer, or a model, from a question to the right entry in ten
  seconds, and make the entry trustworthy on sight (#683).
- Audience: designers, developers, and people driving a model with the skill.
- Attributes and exclusions: rigorous (no decoration: no paper grain, no
  fade-in, no stat wall), fast (no ceremony: no slogan, no eyebrow labels
  before content), plain (no fashion type: no didone, no tracked capitals).
- Tone (#850): matter-of-fact, serious, dry.

## Hierarchy (Step 1)

Home, in order: the title as a name, one sentence saying what this is, the
search field as the focal point (#94), three ways in (Common failure modes,
Numbers worth memorising, Audit trail), the 31 sections as a directory in
seven named groups, what an entry holds, colophon. One action, the search,
with the three routes visibly subordinate (#95, #622).

Section page: eyebrow, title, the table of contents first, then the
introduction under its own heading, then the entries. A reader arrives with a
question, not a wish to be introduced (#528).

Audit page: the numbers moved here, where they are proof of something (#686),
above the filters and the rows.

## Structure (Step 2)

- Rail plus main, unchanged; wrap 980px; measure 56ch, which lands at 66 to
  72 characters in Newsreader (measured; #372).
- The seven groups: Foundations; Perception; Colour and image; Type and
  layout; Interaction and content; Motion, sound and systems; Brand, place
  and practice. Two balanced columns on desktop via CSS columns, one on a
  phone. Rows, not cards (#409, #1048). The rail mirrors the groups.
- Spacing 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 (#413). Measured 99 to 100
  per cent on scale, from 80 to 83.
- Counts and blurbs are copied into the manifest so the home page paints
  complete before any section file arrives (#592, #1053). The topbar says
  "Loading n of 31 sections" until it is done, then the entry count.

## Type (Step 3)

- Two families, two jobs (#339): Newsreader for everything read, using its
  optical-size axis for the headings instead of a second face (#348); IBM
  Plex Sans for chrome, labels, numbers and controls, sentence case
  throughout (#396). IBM Plex Mono is loaded for the demos only.
- Scale: base 18, ratio 1.25: 16 (chrome floor), 18, 22, 28, 35, 44, 55
  (#345, #1013). Measured: five distinct sizes on every view, from ten or
  eleven.
- Body 18px at 1.6. Flush left everywhere (#9377).
- Labels: the class is still called `mono-label` so the templates did not
  change; it is now the UI face, semibold, sentence case, no tracking.

## Colour (Step 4)

- Paper `#f4f3ef`, a neutral rather than cream; raised `#fbfaf7`. Ink
  `#1b1a17`; ink-2 at 0.74 alpha (7.1:1 on the paper); ink-3 at 0.66 (5.3:1),
  the quietest any text is set in; ink-4 for rules and icons only (#690).
- One accent, `#9b3a20`, the rust the verdict chips already used, warm on a
  cool-neutral ground so it advances (#311, #307). 6.3:1 as text. The violet
  is gone (#842).
- Dark theme: `#161614` surface, `#e08a6c` accent at 6.8:1 on it (#813).
- Measured: every text element passes 4.5:1 on every view at both widths;
  one saturated hue family on the home page, two on section pages where the
  amber "adjusted" chip appears.

## Imagery (Step 5)

None on the shell. The demos inside entries are the site's images and were
not touched.

## Interaction (Step 6)

- Hero search submits to the search route and mirrors into the top bar.
- Targets: rail rows 32px, 44px on touch; table of contents rows 32px, 44px
  on touch; audit numbers 24px; chips and related links 28 to 32px; icon
  buttons 44px (#700, #1016). Measured: every block-level target at least
  24px on every view. WARN recorded: on a phone, related-entry chips and
  entry anchors sit between 24 and 44px. A 61-row contents list at 44px each
  is already long; the chips stay at the AA floor.
- Focus: 3px accent outline (#695).

## Motion (Step 7)

None. The view fade-in and the paper-grain overlay were removed (#1041).

## Measured (Step 8)

- Home, 1280: PASS on every check. 257 text elements at 4.5:1 or better;
  measure 70, 50, 70; five sizes, two families; spacing 99 per cent; 74
  targets at least 24px; one hue family; one h1.
- Home, 390: PASS on every measurable check. Measure 35 to 43; 75 targets at
  least 24px. WARN: 24 targets under 44px (rail and chip rows), defended
  above.
- Section 7 (Colour), 1280: PASS on every check. 2,133 text elements at
  4.5:1 or better; measure 66 to 72 across 246 blocks; five sizes, two
  families; spacing 100 per cent; 316 targets at least 24px.
- Section 7, 390: PASS on every measurable check. WARN: 257 targets under
  44px, defended above.
- Audit, both widths: PASS; 788 targets at least 24px on a phone, from 372
  failures.

## Hook findings and what was done

- side-tab (three findings on the first draft of the stylesheet): the accent
  left rules on the three ways in, the one-line rule and the callouts. All
  three were decoration the labels already did the work of. Removed.
- The rail's current-section indicator keeps a 3px left rule: it is a
  navigation state, not a card, and it carries a background tint and the
  accent on the number as well (#318).

## Departures from the core

None knowingly.
