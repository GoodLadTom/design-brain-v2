# Decision log: Ledger, the owner's dashboard

Worked from `core/CORE.md` and `playbooks/dashboard.md`, with the dataviz
method's mark specs, palette validator and interaction rules applied on top.
Every figure on the page is illustrative and the page says so. Measured
figures at the end are from `scripts/measure.mjs`; the full output is in
`MEASURE.txt`.

## Brief (Step 0)

- Job: answer three questions in order, then get out of the way (#528
  Overview first, zoom and filter, details on demand). Explanatory, not
  exploratory (#532).
- Audience: owners who read numbers well and charts badly, and want to act.
- Attributes and exclusions: direct (no chart without a question behind it),
  calm (red for overdue and nothing else), dense enough (working-screen
  spacing, not marketing spacing).
- Tone (#850): matter-of-fact, respectful, serious.

## Architecture: the three questions

1. **How much am I owed, and how much is overdue?** One hero figure,
   £18,420, at 48px in the same sans as everything else, proportional
   figures (dataviz hero figure rule; #94 focal point). The overdue part sits
   under it in the serious red with an icon and the word, then the action on
   it: "Send 4 reminders" (#622, #621).
2. **Faster or slower?** One line chart, one series, one axis, the takeaway in
   the title (#534, #514). Three stat tiles beside the hero carry the
   supporting numbers, the middle one with a delta against a named period
   and an arrow (dataviz stat-tile contract).
3. **Which customers, and what do I do?** A table of the four overdue
   invoices with the action on each row (#526, #610).

One filter row above everything it scopes, in the header (dataviz
interaction; #607). Everything else on the screen answers one of the three
questions or is gone (#528, #500).

## Structure (Step 2)

- Twelve-column grid: hero 5, tiles 7, chart 12, table 12 (#409, #415).
  Under 900px the hero and tiles take the full width; under 600px the tiles
  stack and the card padding drops to 16px so the chart keeps enough width
  for its hit areas.
- Spacing 4, 8, 12, 16, 24, 32, 48 (#413, #765). Measured 100 per cent on
  scale at both widths.
- The table scrolls inside its card on a phone; the page never scrolls
  sideways (#1052, #693).

## Type (Step 3)

- One family, Atkinson Hyperlegible, two weights (#339: one family with real
  contrast of size and weight). No display face: the hero figure is the same
  sans (dataviz). A design-lint hook flagged "single font"; intentional.
- Scale base 16, ratio 1.25: 16, 20, 25, 48 for the hero, plus 15 for tile
  labels, table headings and ticks, and 13 and 14 inside the SVG for axis
  ticks and the end label (#345). Seven sizes measured, within the nine the
  core allows.
- Body 16px (#1013). Numbers in the table right-aligned in tabular figures;
  the hero and tile values proportional (#361, #526; dataviz figures rule).

## Colour (Step 4)

- Ground `#f5f6f8`, cards white, ink `#171a1f` (16:1), secondary `#4d5560`
  (7.3:1), tertiary `#6b737e` for ticks and captions (4.9:1, still above the
  4.5 floor, #690).
- Series `#2a78d6`: slot 1 of the dataviz reference palette, validated
  against the surface (lightness band, chroma floor, 3:1). The first draft's
  `#2a6f97` failed the chroma floor and was replaced. A second series, if one
  is ever added, is slot 2 `#eb6834`; the pair was validated too (CVD delta E
  24.7, normal-vision 33.6).
- **Bug recorded.** The first build used the series blue for the button and
  the links. The tool measured white on it at 4.42:1. Marks and text are
  different jobs: text and buttons now use the same hue at step 550,
  `#1c5cab`, 6.6:1 each way. The dataviz rule that text never wears the
  series colour applies to buttons too.
- Status: serious red `#a4210f` for overdue only, always with an icon and a
  word; good green `#1f6b3a` for the one delta in the right direction, with
  an arrow and words (#318, #623; dataviz status rule). Three saturated hue
  families on the page: the series, and the two statuses.

## The chart

- Line 2px with round joins, a 10 per cent wash beneath, hairline solid grid
  at 0, 10, 20, 30, 40, 50 days, zero baseline, months on the x axis
  (dataviz marks spec; #516, #499).
- Twelve markers at 8px with a 2px surface ring, each inside a 50-unit hit
  area carrying a native tooltip and `tabindex="0"`, so every value is
  reachable by keyboard and hover (dataviz interaction; #587).
- Two direct labels only: the start value and the end value with its unit
  (#507; dataviz selective labels). The legend is absent because there is one
  series and the title names it.
- A table view of the twelve figures under the chart in a `details` element
  (#535; dataviz table twin).
- **Bug recorded.** The first build put the tooltip and tab stop on the 8px
  dot. Twelve 8px keyboard targets failed the tool at both widths. Wrapping
  each in a 24-unit hit circle passed at 1280 and failed at 390, where the
  SVG scales to under half size; the hit circle is now 50 units and the card
  padding drops on narrow screens, which is 24px at 390.

## Interaction (Step 6)

- Filters 44px tall, `aria-pressed` on the active one (#587, #318).
- Row actions 44px, "Send reminder", verb first (#621).
- No disabled controls anywhere (#1036). States not shown on this page
  (empty, loading, error) are listed in the playbook and would be built
  before shipping (#625).
- Focus: 3px ink outline (#695).

## Motion (Step 7)

None, and a reduced-motion rule is present so nothing added later escapes it
(#701).

## Measured (Step 8)

- 1280 x 800: PASS on every check. Contrast all 95 text elements; measure 78
  on the one multi-line block; seven sizes, one family; spacing 100 per cent
  on scale; all 21 block-level targets at least 24px; three hue families; one
  h1, no skips.
- 390 x 844: PASS on every measurable check. Measure 48; all 21 targets at
  least 24px. WARN: the twelve chart points are 24px on a touch viewport,
  under the 44px comfortable figure. Deliberate: 44px hit areas would overlap
  on a twelve-point line, and every value is also in the table (#700, #1016).

## Departures from the core

None. Where the dataviz method was stricter than the corpus (marks, hit
areas, text tokens) it was followed and is cited.
