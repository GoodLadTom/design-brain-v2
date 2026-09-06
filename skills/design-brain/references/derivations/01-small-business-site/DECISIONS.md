# Decision log: Harbourside Joinery, one-page site

Worked from `core/CORE.md` and `playbooks/landing-page.md`. Every value in
`index.html` traces to a line here. The measured figures at the end are from
`scripts/measure.mjs`; the full output is in `MEASURE.txt`.

## Brief (Step 0)

- Job: get a homeowner planning a kitchen or built-in storage to request a
  site visit (#683). One action on the page, repeated twice, never joined by a
  second.
- Audience: homeowners 35 to 65 in north Kent, comparing local firms, wary of
  being sold to.
- Attributes and what each excludes: craft (no glass, gradients, stock
  kitchens), trustworthy (no urgency, no invented numbers; there are no
  reviews in the brief so there are none on the page, #686), calm (no motion,
  no exclamation marks).
- Tone (#850): formal-to-casual midpoint, serious, respectful,
  matter-of-fact.
- Translation (`brief-translation.md`, rows "Traditional, heritage, craft"
  and "Trustworthy"): a serif with a workshop feel, near-symmetry or a quiet
  asymmetry, a palette from the materials, real imagery or none, proof next to
  the claim.

## Hierarchy (Step 1)

1. What they make and where (h1).
2. The action: book a site visit, with the reassurance under it (free, an
   hour, written estimate in seven days).
3. How a visit works, three numbered steps.
4. What they make, ranked: kitchens dominant, storage and one-off pieces
   beneath.
5. The two joiners.
6. Contact and the fictional-business notice.

Levels differ by two attributes each: h1 is display serif at 55px, h2 display
at 28px, body text sans at 18px (#96, #343). Focal point is the h1 with the
button beneath it (#94); the steps panel is subordinated by sitting on a
raised surface in smaller type (#95). Prominent actions: one, twice (#622).

## Structure (Step 2)

- Grid: hierarchical, 7/5 in the hero and the work section, 3/7 for section
  heads and the about block (#409). Everything collapses to one column under
  860px.
- Balance: asymmetrical. The claim carries the left, the process panel the
  right (#87).
- Measure: 62ch on all prose (#372). Measured 50 to 77 characters per line at
  1280 and 32 to 47 at 390.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96 (#413, #765). Measured 100
  per cent of margin, padding and gap values on the 4px scale.
- Radius: 3px everywhere (#767, #1039).

## Type (Step 3)

- Families: Young Serif for display, IBM Plex Sans for reading (#339). Two
  jobs, clearly different in structure (#340).
- **Departure recorded.** The first draft used Fraunces. A design-lint hook
  flagged it as an overused face and, on reflection, it is now one of the
  model defaults (#10060). Swapped for Young Serif, which is sturdier and
  suits a workshop. Distinctiveness (#831) outranked the optical-size axis
  Fraunces would have given (#348).
- Scale: base 18, ratio 1.25: 18, 22, 28, 44, 55, plus 16 for labels and
  hints (#345, #1023). Measured at 1280: 16, 18, 22, 28, 55. Five sizes.
- **Bug recorded.** The first build set the root to 1.125rem and defined the
  tokens in rem, which scaled every token by 18/16 without anyone noticing.
  The tool reported sizes of 18, 24.8, 31.5 and 61.9. Fixed by setting the
  root to 112.5 per cent and expressing tokens as ratios of 18.
- Body 18px, line-height 1.55 (#1013, #1012). Flush left throughout (#9377).

## Colour (Step 4)

- Ground: `#eef0ea`, a cool pale grey-green. Ink `#1b1d18`, secondary
  `#474b43`. Accent `#8a4b1e`, from oak end grain (#842, #307).
- **Departure recorded.** The first draft used a warm cream ground
  (`#f6f1e8`). The hook flagged cream as the reflex "tasteful" AI surface. The
  corpus gave a better reason to change it: a warm accent advances hardest on
  a cool ground (#311, #286), so the oak now points harder than it did on
  cream.
- Measured contrast: ink on ground 14.6:1, secondary 7.8:1, accent as text
  5.9:1, white on accent 6.8:1; input border `#7d8077` 4.0:1 on white (#690,
  #691). One saturated hue family on the page (#307).
- Greyscale test passed by construction: the hierarchy is carried by size,
  weight and position, not by the accent (#309, #310).

## Imagery (Step 5)

None. No photographs were supplied and stock would have been worse than
nothing (#481, #1037). The only graphic is a dovetail drawn in SVG beside the
wordmark, so nothing can be stretched (#1056).

## Interaction (Step 6)

- Primary action: "Book a site visit", verb first, naming the outcome (#621).
  Form submit: "Request a visit".
- Form: four fields, each with a reason (name; postcode to check the area;
  what they are planning; one contact route), labels above, single column,
  48px inputs, 18px text so iOS does not zoom (#1043, #612, #613, #1013).
- Targets: nav links and buttons at 44px or more; measured all block-level
  targets at least 24px at both widths (#700, #1016).
- Focus: 3px accent outline on every focusable element (#695).
- Under 860px the three nav links hide and the action stays in the header;
  all three destinations are reachable by scrolling, so nothing is lost
  (#622).

## Motion (Step 7)

None (#733, #1041). Nothing on the page needs to move.

## Measured (Step 8)

`measure.mjs`, both default viewports:

- 1280 x 800: PASS on every check. Contrast all 49 text elements; measure 50,
  66, 52, 77, 77; body 18px at 1.55; five sizes, two families; spacing 100
  per cent on scale; 11 targets all at least 24px; one hue family; one h1,
  seven headings, no skips; four fields labelled.
- 390 x 844: PASS on every check. Measure 32, 32, 40, 40, 47; eight targets
  all at least 24px.
- No WARN or CHECK lines remain.

## Hook findings and what was done

- overused-font (Fraunces): real, acted on, see Type.
- cream-palette: real in spirit, acted on with a corpus reason, see Colour.
- single-font: false positive; the page uses two families.
- flat-type-hierarchy: false positive; the scale is 1.25 and each level also
  changes family or weight.

## Departures from the core

None knowingly. The two hook findings above changed the design and are
recorded so the next reader sees where the first draft was a default.
