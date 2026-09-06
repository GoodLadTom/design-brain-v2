# Playbook: dashboard and data-dense interface

Use with `core/CORE.md`. For screens whose job is to let someone monitor,
compare and act on numbers: admin panels, analytics, operational dashboards,
tables with controls. Ranked by leverage.

## The job

A dashboard answers a small number of questions fast, then lets the person dig.
Shneiderman's mantra is the whole architecture: overview first, zoom and filter,
then details on demand (#528). Decide which it is before drawing: an
explanatory display that states a finding, or an exploratory one that lets the
person find their own (#532). Most dashboards fail by being neither, a wall of
equal-sized charts with no question behind any of them.

## Ranked entries

### 1. Architecture
- #528 Overview first, zoom and filter, details on demand (filter updates
  under 100ms)
- #532 Exploratory versus explanatory; #533 Narrative sequencing
- #504 Micro/macro reading; #530 Focus plus context; #531 Semantic zoom
- #445 Density modes: comfortable and compact as deliberate settings, each
  level 4dp tighter (Material)
- #580 Progressive disclosure; #607 Faceted filtering; #609 Sorting and
  filtering models; #608 Search versus browse
- #96 Hierarchy: the one number that matters is bigger; everything else is
  subordinated (#95)

### 2. The charts
Follow `playbooks/chart.md` for each one. The dashboard-level rules:
- #502 Small multiples: the same chart repeated beats six different chart
  types
- #506 Sparklines for trends beside numbers
- #534 Titles that state the takeaway; #507 Direct labelling, no legends
  where a label will do
- #499 Data-ink ratio; #500 Chartjunk; #511 The smallest effective difference
- #514 Cleveland-McGill: position and length for values people must read
  accurately; colour and area only for rough comparison
- #516 Zero baseline for bars; #520 Ordering by value; #517 Dual-axis pitfalls
- #524 Uncertainty and error representation
- #535 Accessible charts: 3:1 for graphical objects, never colour alone

### 3. Tables
- #526 Table design and decimal alignment: numbers right-aligned, decimals
  aligned, in tabular figures (#361)
- #527 Zebra-striping restraint
- #1052 Non-responsive tables (failure mode): decide the narrow-screen
  behaviour before the table exists
- #679 Truncation strategy; #1059 Truncation with no route to the full text

### 4. State and feedback
- #625 State matrix completeness: empty, loading, partial, error, ideal,
  overflow, for every panel
- #591 Empty states; #592 Loading and skeleton states; #806 Skeletons versus
  spinners
- #595 Determinate versus indeterminate progress; #1054 Fake progress
- #551 Visibility of system status; #563 Informative feedback
- #571 Latency reduction; #594 Perceived performance; #1019 The 0.1s, 1s, 10s
  thresholds
- #593 Optimistic UI; #636 Autosave and version history; #574 Protect the
  user's work

### 5. Controls
- #610 Selection and bulk actions; #584 Undo over confirm; #585 Confirmation
  for destructive actions; #623 Destructive action styling
- #622 Action hierarchy per view; #624 Disabled-state pitfalls
- #587 Target size in dense layouts: 24px is the floor even in compact mode
- #601 Tooltip use and misuse (WCAG 1.4.13: dismissable, hoverable,
  persistent); #588 Hover is not a state on touch
- #590 Accelerators for experienced users; #589 Keyboard focus order
- #9628 Timeouts and session expiry: 20 seconds' warning, extension ten times

### 6. Type and colour for density
- #337 Monospace and #361 Tabular figures for anything that aligns in columns
- #343 Typographic hierarchy at small sizes: weight and colour, not size alone
- #307 Accented neutral: one colour points at the thing needing attention;
  #311 warm advances
- #318 Redundant encoding; #315 Colour-vision-deficiency safe palettes
- #813 Dark mode implementation, if dark: dashboards often are, and the
  Material figures (#121212 surface, 15.8:1) apply

## Numbers for this artefact

| Figure | Entry |
| --- | --- |
| Filter update under 100ms | #528 |
| 0.1s instant, 1s flow, 10s attention | #1019 |
| Density steps of 4dp; compact button 24px | #445 |
| Graphical objects 3:1 | #535, #691 |
| Target floor 24 by 24 | #700 |
| Tooltip: dismissable, hoverable, persistent | #601 |
| Timeout warning 20s, extend 10 times | #9628 |
| Position, then length, then angle, then area, then colour | #514 |
| About four chunks in working memory, not seven | #1021 |

## Checks before showing

1. Write the three questions the dashboard answers. Point at where each answer
   is. If you can't, the panel serving no question goes (#528, #532).
2. Switch every panel to its empty, error and overflow states. Does the layout
   hold? (#625)
3. Read each chart title. Is it a takeaway or a label? (#534)
4. Remove colour (greyscale). Can every state and series still be told apart?
   (#318, #310)
5. Resize to 390px. What happens to the tables? (#1052)
6. Run `measure.mjs` in both viewports; compact density still has to clear
   24px targets and 4.5:1 text.
7. Tab through it. Is focus visible and in reading order? (#589, #695)

## Failures that cluster on this artefact

#1058 Unlabelled charts, #1052 Non-responsive tables, #1054 Fake progress,
#1059 Truncation without route, #1036 Disabled with no reason, #1035
Hover-dependent, #1029 Grey on grey, #1025 Too many weights, #1048 Competing
focal points.
