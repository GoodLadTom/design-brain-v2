# Playbook: chart

Use with `core/CORE.md`. For any single data graphic: a bar or line chart, a
table, a map, a figure in a report or a slide. Section 13 of the corpus is the
long version; this is the order to apply it in.

## The job

A chart exists to let someone read a value or see a comparison faster and more
truthfully than a table would. Tufte's tests cover the whole job: show the
data (#508), tell the truth about it (#497, #498), spend ink on it and not on
decoration (#499, #500), and make the difference that matters visible at the
smallest effective size (#511).

## The order of decisions for a chart

### 1. The question, then the encoding
- Write the finding as the title before drawing (#534 Titles that state the
  takeaway). If there is no finding, it is exploratory (#532) and belongs in a
  tool, not a report.
- Choose the encoding from the Cleveland-McGill ranking (#514, #515): position
  on a common scale, then position on non-aligned scales, then length, then
  angle and slope, then area, then volume, then colour and shading. Anything
  the reader must read accurately gets position or length. Bars beat pies for
  that reason (#519).
- Bertin's variables and what each can do (#512, #513): only size is
  quantitative; value is ordered; hue is selective but not ordered.
- Area scales as the square of length, so a circle twice as wide reads four
  times as large (#9462).

### 2. Honesty
- #498 Lie factor: effect shown divided by effect in data, kept between 0.95
  and 1.05
- #516 Zero-baseline rule for bars; a line chart may start elsewhere if the
  axis is labelled
- #517 Dual-axis pitfalls: almost always two charts instead
- #522 Log scales: 56 per cent read log-log axes correctly against 93 per cent
  for linear; label them loudly or avoid them
- #9521 Normalise by exposure, not raw counts; #521 Binning and aggregation
  choices; #523 Simpson's paradox
- #524 Uncertainty and error representation: show it or say why not

### 3. Ink
- #499 Data-ink ratio; #500 Chartjunk; #503 Layering and separation
- #507 Direct labelling: label the line at its end, not in a legend
- #525 Annotation layer: the one or two notes that explain the shape
- #520 Ordering by value, not alphabet, unless the categories have a natural
  order
- #518 Banking to 45 degrees for line slopes
- #502 Small multiples: a series of the same simple chart beats one complex one
- #506 Sparklines: word-sized graphics beside the number

### 4. Type and colour on charts
- #361 Tabular figures for every axis and label; #526 Table design and decimal
  alignment where a table is the better chart
- #343 Hierarchy: title, then data labels, then axis labels, then notes
- #318 Redundant encoding: pattern, label or shape as well as colour; #315
  Colour-vision-deficiency safe palettes (about 8 per cent of men)
- #535 Accessible charts: 3:1 for graphical objects, 4.5:1 for text, and a
  text alternative that states the finding
- #307 Accented neutral: grey for context series, one colour for the series the
  title is about

### 5. On a page or a slide
- #477 Image hierarchy within a layout; #478 Anchorage and relay: the caption
  fixes the meaning
- #476 Thumbnail legibility
- #1058 Unlabelled charts: units, scale and source on every chart, without
  exception

## Numbers for this artefact

| Figure | Entry |
| --- | --- |
| Lie factor 0.95 to 1.05 | #498 |
| Position, position (unaligned), length, angle, area, volume, colour | #514 |
| Log-log read correctly by 56 per cent, linear by 93 per cent | #522 |
| Bank slopes to 45 degrees | #518 |
| Sturges bins: log2(n) + 1 | #521 |
| Graphical objects 3:1; text 4.5:1 | #535 |
| Red-green deficiency: about 8 per cent of men, 0.5 per cent of women | #315 |
| Filter update under 100ms in interactive charts | #528 |

## Checks before showing

1. Is the title a finding? Would the chart still be needed if the title were
   read aloud? (#534)
2. Measure the lie factor on the biggest visual difference (#498).
3. Does any bar start above zero? (#516)
4. Print it in greyscale. Can every series be told apart? (#318, #310)
5. Cover the legend. Can you still read it? If not, label directly (#507).
6. Are units, source and date on the chart itself? (#1058)
7. Shrink it to a quarter size. Does the finding survive? (#476)

## Failures that cluster on this artefact

#1058 Unlabelled charts, #500 Chartjunk, #517 Dual axes, #519 Pies for
comparison, #1029 Grey on grey in axis labels, #1025 Too many weights, #1056
Stretched images (charts pasted as images and resized).
