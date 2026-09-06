# Decision log: one report chart

Worked from `core/CORE.md` and `playbooks/chart.md`, with the dataviz method's
mark specs and palette validator applied on top. The data is real: the WebAIM
Million figures the corpus records at #1029, #710, #707, #1031 and #712.
Measured figures at the end are from `scripts/measure.mjs`; the full output is
in `MEASURE.txt`.

## The question, then the encoding

- The finding, written as the title before anything was drawn (#534): "Low-
  contrast text is on 84 per cent of home pages, more than any other detected
  failure." The subtitle states the population and the source.
- Form: five categories, one measure, a comparison of magnitude. Bars, not a
  pie, because position and length are read more accurately than angle
  (#514, #515, #519). Horizontal, because the category names are long.
- Ordered by value, not alphabet (#520). The finding is the first bar.

## Honesty

- Zero baseline; the axis runs 0 to 100 per cent (#516).
- Lie factor 1.0 by construction: bar length is 4.2 units per percentage
  point (#498).
- The caption says the figures are automated detections and therefore floors
  (#497). No dual axis, no log scale (#517, #522).

## Ink

- Data-ink first (#499): hairline vertical gridlines one step off the
  surface, solid not dashed, a single baseline rule, no chart border, no
  legend for a single series (#500, dataviz marks spec).
- Direct labels at every bar tip, because five values on a report figure are
  the content, not clutter (#507). Values in bold ink, categories in regular
  ink; text never wears the series colour (dataviz).
- Marks: 24 units thick, 4-unit rounded end at the data end only, square at
  the baseline via a clip path, 32-unit gap (dataviz marks spec).
- Emphasis: the first bar in the series colour, the other four in a neutral
  grey (#307, #149; dataviz "highlight one, grey the rest"). The relief rule
  applies to the grey bars: they carry direct labels and the table view.

## Colour

- Series `#2a78d6`: slot 1 of the dataviz reference palette. Validated with
  `validate_palette.js` against a white surface: lightness band, chroma
  floor and 3:1 surface contrast all pass. The first draft's `#2a6f97` failed
  the chroma floor ("reads grey") and was replaced.
- Neutral `#b8bec6` for the de-emphasised bars. It fails the validator's
  categorical checks by design, because it is not a category: it is the
  de-emphasis step, and the labels and table carry the values.
- Summary link `#1c5cab`, the series hue at text strength, 6.6:1 (#690).
  **Bug recorded.** The first build used the mark blue for the link and the
  tool measured 4.42:1. Mark colour and text colour are different jobs.
- Greyscale: the lead bar is darker than the neutrals, and the ordering by
  length carries the ranking, so the chart reads without hue (#310, #318).

## Type

- One family, Source Sans 3, three weights (#339). Title 22px, subtitle 17px,
  categories and values 16px in the SVG, ticks 14px, caption 15px. Five sizes.
- Figures tabular in the table column only, proportional elsewhere (#361;
  dataviz figures rule).

## Interaction

- Each bar sits inside a 56-unit hit area with a native tooltip and
  `tabindex="0"`, so the value is reachable by keyboard and hover (#587;
  dataviz interaction: hit targets bigger than the mark).
- **Bug recorded, twice.** The first build put the tooltip on the 24-unit
  bar itself, which is 22px on a phone. The second put a 36-unit hit rect
  behind it, still under 24px once the SVG scaled down. The honest fix was
  to respace the bars to a 56-unit step so a 56-unit hit area meets its
  neighbour without overlapping, and to drop the figure's padding under
  600px so the SVG keeps its width. A first attempt at that padding rule sat
  above the base rule in the stylesheet and lost the cascade; the tool
  reported 22px again until it was moved to the end.
- A table view of the same figures sits under the chart in a `details`
  element (#535; dataviz: every chart has a table twin).

## Measured (Step 8)

- 1280 x 800: PASS on every check. Contrast all 32 text elements; measure 66
  and 78; five sizes, one family; spacing 100 per cent on scale; all 6
  targets at least 24px; one hue family; one h1.
- 390 x 844: PASS on every measurable check. Targets all at least 24px. WARN:
  five targets under 44px on a touch viewport. The bars are 24px, the AA
  floor; 44px would need a taller chart than a report figure allows, and the
  table view carries every value (#700, #1016).

## Hook findings and what was done

- single-font: intentional. A report figure has no use for a display face;
  the dataviz rule says the same.
- flat-type-hierarchy: false positive. Title to body is 1.29; the levels
  also differ by weight.

## Departures from the core

None. The dataviz mark specs sit on top of the corpus rather than against it.
