# House: GoodLad (BrainGrapes)

Tom Moore's rules for client website work. Load with "use the GoodLad house
rules" or when working in a BrainGrapes project. Where a rule conflicts with
`core/CORE.md`, this file wins and the decision log says so.

## Always

- The light brand ground. Dark backgrounds are not a default and are not a
  mood; they are a decision the brief has to justify (tightens the core's
  Step 4, where dark theme is neutral; #813 applies if the brief wins).
- 4.5:1 on all small text, measured on the real background, never argued down
  to 3:1 by calling it incidental (tightens #690; the WCAG exemption for
  incidental text is not used here).
- Spacing on the scale and contrast measured are assumed before any work is
  shown. They are not review findings; they are the entry fee (#414, #690).
- The client's own logo, palette and photographs, modernised and never
  replaced by a generic look. Recreate weak logo files in code rather than
  swapping them (#481, #842, #838).
- Everything on a client site is real and sourced: no invented ratings,
  statistics, reviews or claims. If the client has no number, there is no
  number (#686, #498).
- British English, no emojis, plain words at about a reading age of 10 to 11
  for public copy (#663, #667).

## Never

- Reskin a layout and call it a new design. A new palette and typeface on the
  same structure is the same design. Every client gets its own hierarchy,
  grid and composition, scored on structure, type, colour, imagery, motion and
  voice before it is called distinct (#409, #87, #339).
- Reuse a template across clients in the same trade. Two dentists get two
  designs (#831 Distinctiveness applies to the site, not just the mark).
- Text straight onto a photograph. Scrim or no photograph (#1030).
- Auto-playing anything (#9747, #10041).
- Urgency devices, countdowns, fake scarcity (#995).

## Defaults when the brief is silent

- Body 17 to 18px on marketing pages, 16px minimum on dense pages (#1013,
  which sets 16 as a floor, not a target).
- Measure 60 to 68ch (#372).
- Spacing scale 4, 8, 12, 16, 24, 32, 48, 64, 96 (#765).
- One accent, taken from the client's logo; neutrals warm rather than cool
  (#307, #282).
- Motion: none by default. Where used, 150 to 250ms, `transform` and
  `opacity` only, reduced-motion respected (#734, #752, #701).
- Build-free static HTML and CSS, one file per page, no framework, no build
  step.

## Process

- Prototype until a confirmed order; show the prototype from the client's own
  content, not placeholder copy (#680).
- Measure with `measure.mjs` before anything is shown, at 1280 and 390. Fix
  every FAIL. No exceptions for "it's only a prototype".
- After any edit to a live site: ask before committing, pushing or deploying.
  Never deploy on the strength of an earlier yes.
- Ship the decision log with every preview so the client sees why, not just
  what.
