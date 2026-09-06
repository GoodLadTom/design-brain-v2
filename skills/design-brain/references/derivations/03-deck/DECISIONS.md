# Decision log: three slides from an accessibility report

Worked from `core/CORE.md` and `playbooks/deck.md`. The frames are 16:9
sections that scale with the window, so the same file can be reviewed in a
browser and projected. Measured figures at the end are from
`scripts/measure.mjs`; the full output is in `MEASURE.txt`.

## Brief (Step 0)

- Job: open a report meeting by landing one finding, showing its scale, and
  ranking the fixes (#683, #533).
- Audience: four trustees and a communications officer, three metres from a
  wall screen, not chart readers.
- Attributes and exclusions: plain (no decoration, transitions or stock),
  calm (alarm colour on one figure only), ranked (no three equal boxes).
- Tone (#850): formal-leaning, serious, respectful, matter-of-fact.
- Presented, not sent: little text on the frame, the argument in the titles
  (#534). The corpus has no "one idea per slide" entry; #723 Staging, #666
  One idea per sentence and #682 Message hierarchy were applied to the frame.

## Hierarchy (Step 1)

Each slide has one idea and one focal point (#94):

1. The finding. Focal point: the title. The alarming figure ("31 of 40")
   sits at the bottom in the serious red, with the words next to it, so it is
   not colour alone (#318).
2. The scale. Focal point: the first bar, the only one in the accent (#307,
   #149).
3. The fixes. Focal point: fix one, wider and on a white panel; two and three
   narrower and quieter (#96, #1048).

Read the three titles in order and they are the argument (#534, #533).

## Structure (Step 2)

- Safe area 5 per cent on every edge (#9147, EBU R 95 graphics-safe).
  Nothing that matters crosses it; the slide number sits exactly on it.
- Balance: flush-left, asymmetrical, the same left edge on every frame
  (#87, #117).
- Slide 3 grid: 1.6fr / 1fr / 1fr, so the ranking is visible before the
  words are read (#409).
- Spacing is in `cqw` (container width units) so the frame scales as one
  object. **WARN recorded:** the tool reports these values as off the 4px
  scale, which they are at any width other than the one they were designed
  at (2cqw is 25.6px at 1280). The frame is the unit here, not the pixel
  grid, and the decision stands.

## Type (Step 3)

- Superfamily pair: Source Serif 4 for titles, Source Sans 3 for everything
  else (#338, #339). They agree because they were drawn to.
- Three sizes across the deck (#344): title 5cqw (64px at 1280), body 2.5cqw
  (32px), small 1.5cqw (19px). The alarming figure on slide 1 is the one
  exception at 7.5cqw, as the focal point.
- Sized for the back row (#881): at a projected width of about two metres,
  32px body on a 1280-wide frame is 50mm high, which the legibility index
  puts well past three metres.
- Display leading tight at 1.08, body at 1.35 (#399). A design-lint hook
  flagged the tight leading; it is on titles and the figure, not on running
  text, and stays.
- **WARN recorded:** the tool estimates the lead paragraph on slide 1 at 38
  characters per line, under the 40 floor. It is set at 34ch on purpose: at
  32px on a frame, a short measure reads faster than a long one, and the
  multi-column band in #372 is 40 to 50. Intentional.
- **WARN recorded:** at 390px wide the tool reports body text of 8.5px and
  5.1px. That is the scaled preview, where the whole frame is 390px wide. A
  slide is not read at phone width; it is projected or opened at full size.
  The figure is correct and the decision stands.

## Colour (Step 4)

- Ground `#f7f6f2`, ink `#15171a` (16.6:1), secondary `#45494f` (8.2:1):
  projectors wash mid-tones, so ink stays near black (#690).
- One hue: `#2a78d6`, slot 1 of the dataviz reference palette, validated,
  for the lead bar (a mark). The rank numerals use the same hue at text
  strength, `#1c5cab`, 6.6:1 on white.
- **Bug recorded.** The first build used the mark blue for the numerals. At
  390px the "1" measured 4.42:1 at 17px, a normal-text size, and the tool
  failed it. Marks and text are different jobs; the dataviz rule that text
  never wears the series colour applies to numerals too.
- Serious red `#a4210f` once, on the figure that is alarming, with the words
  beside it (#318, #623).
- Measured: all 43 text elements pass at both widths; two saturated hue
  families (the blue pair and the red).

## Imagery (Step 5)

None. The chart on slide 2 is the same construction as derivation 05 with
larger type (24px categories and values, 20px ticks in the 1150-unit frame),
because a chart on a slide is read from further away (#476, #881).

## Motion (Step 7)

None. Builds and transitions would add nothing the titles do not already do
(#733, #1041).

## Measured (Step 8)

- 1280 x 800: PASS on every measurable check. Contrast all 43 text elements;
  seven sizes across the page (the three deck sizes at frame scale plus the
  page's own notes); two families; one h1, four headings, no skips. WARN
  lines: the 38-character lead, and cqw spacing off the pixel scale, both
  defended above.
- 390 x 844: PASS on every measurable check. WARN lines: body text under
  16px in the scaled preview, defended above.

## Hook findings and what was done

- cramped-padding: the fix panels on slide 3 have 2cqw padding, which is
  25.6px at 1280 and shrinks with the frame. Intentional; the frame scales as
  one object.
- tight-leading: on titles and the figure only. Intentional (#399).

## Departures from the core

The cqw spacing, defended in Structure. Nothing else.
