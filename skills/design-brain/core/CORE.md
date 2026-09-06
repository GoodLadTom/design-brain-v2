# Design Brain core

Read this whole file before any design task. It is the part of the corpus you
carry in your head. The 1,124 entries behind it are for lookup with `query.py`,
and every rule here names the entry it comes from, so cite the number when you
use it in a decision. Where the corpus marks something `disputed` or gives a
convention rather than a measurement, this file says so. Don't upgrade a
convention into a law when you quote it.

The point of the order below is that the generic look happens when type and
colour get chosen first. Work down the list, and write each answer before
moving on. The written answers become the decision log that ships with the work
(section 6).

## 1. The order of decisions

### Step 0. The brief

Nothing can be designed until these exist. If the brief lacks one, ask, or state
the assumption in the log.

- The audience, and what they already know.
- The one job of the artefact (#683 One primary job per page). A page with two
  jobs has none.
- The content, real and complete, before any layout. Lorem ipsum hides every
  hierarchy problem (#680 Content-first design; #657 Content inventory).
- Three or four brand attributes that each exclude something (#822). "Honest,
  innovative, passionate" constrain nothing, because nobody picks the opposite.
  See `references/brief-translation.md` for turning attributes into constraints.
- A tone setting per context: formal or casual, serious or funny, respectful or
  irreverent, matter-of-fact or enthusiastic (#850). Error states get their own.
- Constraints: existing brand assets, platform, viewport range, what must not
  change.

### Step 1. Hierarchy

Rank the content in words before you rank it visually. If you can't write it as
an indented list, you can't lay it out (#96 Hierarchy).

- Three or four levels at most. Each level differs from the next by at least
  two attributes, size and weight, or size and colour, so the step is
  unmissable (#96, #343 Typographic hierarchy).
- One focal point, the place the eye goes first and returns to (#94). Everything
  else is subordinated, made quieter so the one thing can speak (#95
  Subordination). Two things shouting is no hierarchy (#1048).
- One clearly dominant action per view, two at the outside (#622; Apple's own
  guidance is one or two prominent buttons).
- Emphasis is one device at a time, and rare enough to register (#397).
- Isolation is emphasis too: space around a thing draws the eye as reliably as
  size (#149).

Check: shrink the page to a thumbnail. Only real differences survive. If the
ranking is gone, the levels are too close (#96, #476).

### Step 2. Structure

- Choose the grid from the content. Most pages want a hierarchical grid, with
  unequal but fixed and repeated bands (#409). Long reading wants a manuscript
  grid (#406). A column grid (#407) is for content that genuinely comes in
  equal units.
- Set the measure before anything else in the column: 45 to 75 characters,
  66 the traditional target, 40 to 50 in multi-column work (#372, #1011,
  Bringhurst 2.1.2). Put `max-width` in `ch` on every prose container and check
  it at every breakpoint.
- Decide the spacing scale before placing a single element: 8px steps, with
  4px for type, icons and the insides of components (#413, #414, #1017;
  Material 3 publishes 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, #765). Every
  margin, padding and gap comes from the scale (#446, #1026).
- Space groups. Gaps between sections are larger than gaps inside them, and
  related things sit closer than unrelated things (#156 Proximity; #119 macro
  white space).
- Everything aligns to shared lines, then gets corrected by eye: round shapes
  overshoot, heavy shapes sit high, text hangs its punctuation (#117, #151,
  #152, #153).
- Balance is a decision. Symmetry reads as formal and settled; asymmetry
  reads as active and lets one element dominate (#86, #87). Centring everything
  is the absence of a decision.
- Nested corners share a centre: inner radius equals outer radius minus the
  padding (#1039).

### Step 3. Type

- Two families with distinct jobs, or one family used with real contrast.
  Pairs either agree clearly or differ clearly; near-matches look like a
  mistake (#339, #340). Dair's seven ways type can differ: size, weight, form,
  structure, texture, colour, direction.
- Build the sizes from a ratio and a base and use nothing else: 1.125, 1.2,
  1.25, 1.333, 1.414, 1.5, 1.618 are the common ratios (#345, #1023). The
  classic scale runs 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 21, 24, 30, 36, 48,
  60, 72 (#344). More than about nine sizes on a page means there is no scale.
- Body text at 16px or the inherited default, in `rem`. No standard demands
  16px, but browsers ship it as the default and iOS zooms on any input below it
  (#1013). Judge size by x-height, not the number.
- Body line-height 1.4 to 1.6, tighter for headings, whose lines are short
  (#1012, #399). The 1.4 to 1.6 band is convention; WCAG 1.4.12 requires that
  the page survives 1.5.
- Flush left for anything longer than a line (#9377). Centred body copy gives
  every line a different start point (#1027). Justified text without
  hyphenation makes rivers (#1028).
- Then the details that separate professional from amateur setting: a
  controlled rag (#380), no widows or orphans (#381), hanging punctuation on
  display text (#386), tabular figures in any column of numbers (#361), and
  real bold and italic files, never the browser's faux versions (#1055).
- Use optical sizes where the family has them: display cuts thin at large
  sizes, text cuts sturdy at small (#348, #349).

### Step 4. Colour

- Value first. If the design doesn't work in greyscale, hue won't save it
  (#309, #310).
- Neutrals plus at most one colour doing the pointing (#307 Accented neutral).
  The 60/30/10 split is a budget, not a specification; it has no traceable
  source (#308, #1018).
- Choose the accent from the brand or the subject, never from habit. Test the
  mark and the palette in a single colour (#836) and ask whether a competitor
  already owns the hue (#842).
- Measure contrast on the real background, at the real size: 4.5:1 for body
  text, 3:1 for large text (24px, or about 18.5px bold) and for UI components
  and meaningful graphics (#690, #691, #1014, #1015; WCAG 2.2 SC 1.4.3 and
  1.4.11). A pale grey on a paler grey is the single most common accessibility
  fault on the web (#1029).
- Never colour alone. Every state and category carries a second cue: a label,
  a shape, a weight (#318, #694).
- Text over an image gets a scrim, or it doesn't go over the image. Contrast
  is different at every pixel, so it fails somewhere (#1030, #9477).
- Warm colours advance and cool ones recede, so a warm accent on a cool ground
  points harder than the reverse (#311, #286).
- Dark theme is a design, not an inversion: a very dark grey surface rather
  than black, desaturated accents, lighter surfaces for higher elevation, and
  enough contrast between white text and the base to still clear 4.5:1 on the
  lightest surface (#813, #319; Material's figures are #121212 and 15.8:1).

### Step 5. Imagery

- A real picture of the actual thing, or no picture. Readers look at images
  that carry information and skip the ones chosen to fill space (#481, #1037).
- Crop to the focal point at every breakpoint. Centre-crop cuts heads off
  because subjects are rarely in the middle (#482, #1057).
- Hold aspect ratios. A stretched image is broken and a stretched logo is a
  brand failure (#483, #1056). Reserve the space so nothing shifts on load
  (#805, #1053).
- One treatment across a set: same grading, same crop discipline, same lighting
  direction (#474, #480).
- Icons only with labels. Most icons carry no shared meaning (#493, #1031).
  Draw them on a 24px grid with a 20px live area (#490), one stroke weight
  (#491), and drop any icon that takes more than five seconds to conceive
  (#492).
- Alt text is content, written for the person who can't see the image (#488,
  #710).

### Step 6. Interaction and states

- Targets at least 24 by 24 CSS pixels, 44 by 44 where a finger is involved,
  with space between neighbours, because two adequate targets touching still
  mis-tap (#587, #700, #1016).
- Visible labels above the field. Placeholders vanish the moment someone types
  (#612, #1045). Single column (#613). Group fields by meaning (#614).
- Buttons say what happens, verb first: "Book a survey", not "Get started"
  (#621, #1046). Destructive actions look different and confirm only when undo
  is impossible (#623, #584, #585).
- Every component has every state before it ships: empty, loading, partial,
  error, ideal, overflow (#625). Empty states teach (#591). Errors say what
  went wrong and how to fix it, without blaming (#597, #1044).
- Focus is always visible (#695). Removing the outline blinds keyboard users
  (#10050).
- Hover is not a state on touch (#588, #1035). Anything revealed on hover needs
  another route.
- Disabled controls say why, or aren't disabled (#624, #1036).
- Feedback within 0.1 seconds, flow preserved within 1 second, attention lost
  after 10 (#1019, #594).

### Step 7. Motion

- Motion only where it carries information: feedback, orientation, hierarchy,
  continuity (#733, #741, #742, #743). Decoration on every scroll is a cost paid
  on every visit (#1041).
- 100 to 500ms, most of it under 300; 400ms only for large movements across
  large screens (#1020, #734). Desktop transitions run shorter than mobile.
- Ease out on entry, ease in on exit; Material's standard curve is
  `cubic-bezier(0.2, 0, 0, 1)` (#726, #735). Stagger entrances no more than
  20ms apart (#737).
- Animate `transform` and `opacity` only (#752). Budget 16ms a frame (#751).
- Respect `prefers-reduced-motion` with a real alternative, not just nothing
  (#701, #753). Anything that moves for more than five seconds gets a pause
  (#9747). No more than three flashes a second, ever (#702).

### Step 8. Before showing anyone

1. Run `scripts/measure.mjs` on the rendered page at desktop and mobile widths.
   Fix every FAIL line. Read every WARN and CHECK line and either fix it or
   write down why not.
2. Walk section 30, the failure modes, with `query.py section failure-modes`.
3. Walk the anti-default list in section 4 below.
4. Write the decision log (section 6).

## 2. The numbers card

Hard thresholds first, conventions after. "Convention" means the corpus could
not trace the figure to a standard or a study; use it, but don't cite it as one.

| Measure | Figure | Status | Entry |
| --- | --- | --- | --- |
| Body text contrast | 4.5:1 minimum (AA); 7:1 (AAA) | Standard, WCAG 2.2 SC 1.4.3, 1.4.6 | #690, #1014 |
| Large text and UI contrast | 3:1; large is 24px, or about 18.5px bold | Standard, SC 1.4.3, 1.4.11 | #691, #1015 |
| Link distinguished by colour alone | 3:1 against surrounding text, plus a second cue on hover and focus | Technique G183 | #694, #398 |
| Never colour alone | Every meaning carries a second cue | Standard, SC 1.4.1 | #318 |
| Target size | 24 by 24 CSS px (AA); 44 by 44 (AAA, Apple); 48 by 48 with 8 between (Material) | Standard, SC 2.5.8, 2.5.5 | #700, #1016, #587 |
| Focus indicator | Visible; AAA asks for a 2px perimeter at 3:1 | Standard, SC 2.4.7, 2.4.13 | #695, #10050 |
| Text resize | Works at 200 per cent | Standard, SC 1.4.4 | #692 |
| Reflow | No horizontal scroll at 320 CSS px | Standard, SC 1.4.10 | #693, #1052 |
| Text spacing survives | Line-height 1.5, paragraph 2x, letter 0.12, word 0.16 | Standard, SC 1.4.12 | #9692, #373 |
| Auto motion | Pause, stop or hide after 5 seconds | Standard, SC 2.2.2 | #9747 |
| Flashing | No more than 3 a second | Standard, SC 2.3.1 | #702 |
| Auto audio | Control if longer than 3 seconds | Standard, SC 1.4.2 | #758, #10041 |
| Measure | 45 to 75 characters, 66 ideal; 40 to 50 multi-column; 80 cap at AAA | Bringhurst 2.1.2; SC 1.4.8 | #372, #1011 |
| Body line-height | 1.4 to 1.6; CSS `normal` is about 1.2 | Convention; the 1.5 survival test is standard | #1012 |
| Body size | 16px is the browser default and the floor; inputs under 16px zoom on iOS | Convention plus documented behaviour | #1013 |
| Type scale ratios | 1.125, 1.2, 1.25, 1.333, 1.414, 1.5, 1.618 | Craft practice (Bringhurst, Brown) | #1023, #345 |
| Classic sizes | 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 21, 24, 30, 36, 48, 60, 72 | Metal-type tradition | #344 |
| Hierarchy levels | 3 or 4; each step differs by 2 attributes | Craft practice | #96 |
| Prominent actions | 1 per view, 2 at most | Apple HIG | #622 |
| Spacing scale | 8px steps; 4px inside components and for type | Material; craft practice | #413, #414, #1017 |
| Colour budget | About 60/30/10 dominant, secondary, accent | Convention, no traceable source | #308, #1018 |
| Icon grid | 24px, 20px live area, 2px padding; one stroke weight | Material | #490, #491 |
| Icon test | Understood in 5 seconds or dropped | NN/g (Harley) | #492 |
| Motion duration | 100 to 500ms; feedback about 100; modals 200 to 300; 400 only for big moves | NN/g; Material | #1020, #734 |
| Standard easing | `cubic-bezier(0.2, 0, 0, 1)` (Material 3); `(0.4, 0, 0.2, 1)` (Material 1) | Material | #735 |
| Stagger | No more than 20ms between entrances | Material | #737 |
| Frame budget | 16ms; do 10ms of work | RAIL | #751 |
| Response thresholds | 0.1s instant; 1s keeps flow; 10s loses attention | Nielsen after Miller 1968 | #1019 |
| Core Web Vitals | LCP 2.5s; INP 200ms; CLS 0.1, at the 75th percentile | Google | #1022 |
| Dark surface | #121212, not black; white text at 15.8:1 on the base | Material | #813, #319 |
| Memory | About 4 chunks (Cowan), not 7; no figure caps menu items | Research; the 7 is misapplied | #1021, #230 |
| Attention by scroll | 57 per cent of viewing time above the fold, 74 per cent in two screenfuls | NN/g 2018, 120 participants | #443 |
| Reading | About 240 words a minute; 79 per cent of users scan | Brysbaert 2019; Nielsen 1997 | #9011, #668 |
| Checkout fields | Sites average 11 to 13; most need 8 | Baymard | #1043 |
| Share image | 1200 by 630, ratio about 1.91:1 | Meta | #817 |
| Nested radius | Inner = outer minus padding | Craft practice | #1039 |
| Levels of scale | Neighbouring sizes step about 1:2 to 1:3, never 1:5 | Alexander | #913 |

## 3. Anti-defaults

These are the moves a model reaches for when nobody has decided anything. Each
one is paired with the entry that explains the failure and the move that
replaces it. Check the list against every design before it goes out.

1. **Everything centred, body copy included.** Centred multi-line text gives
   every line a different starting point (#1027). Flush-left the text; centre
   only a single line of display type, if anything (#9377, #87).
2. **Three equal cards for every group of things.** The rule of odds is cut
   from the corpus as decoration dressed as a principle (#137), and equal cards
   give no ranking (#1048). Rank the items. Give one dominance. Let the widths
   differ (#409).
3. **Hero of headline, subhead, two buttons, gradient.** One job, one action
   (#683, #622). A second button halves the first. A gradient behind text has
   no measurable contrast (#1030).
4. **Gradient backgrounds and gradient text.** Flat ground, one accent (#307).
   Gradients are for when a gradient means something.
5. **Violet, or the same electric blue, as the accent.** Pick the accent from
   the brand or the subject (#842, #836). If there is no brand, derive it from
   the imagery or the material of the thing being sold.
6. **One system sans in five weights doing every job.** Two families with
   distinct jobs, or one family with real contrast of size and weight (#339,
   #340, #1025). Weight alone is the weakest contrast Dair lists.
7. **Cards with shadows and 12px corners around everything.** Boxes are for
   things that are containers. Use rules and space first (#119, #446). One
   radius scale (#767), one light source (#740, #1040).
8. **Icons in front of every heading and bullet.** Decorative icons dilute the
   ones that mean something (#1031, #492). Icons appear only with a label and
   only where they help finding (#493).
9. **Pill buttons, glass blur, rounded everything.** Radius is a brand voice
   decision, set once (#767). Blur behind text makes contrast unmeasurable.
10. **A stock photo or an AI illustration that carries no information.**
    Real picture of the actual thing, or none (#481, #1037).
11. **The same padding on every side of every box.** Space groups. Between
    sections is bigger than inside sections (#156, #446, #119).
12. **A six-up feature grid of icon, title, two lines.** People scan, and a
    grid of equals gives nothing to scan for (#668, #1047, #1048). Lead with the
    one feature that matters and list the rest.
13. **"Get started", "Learn more", "Discover".** Say what happens, verb first:
    "Book a survey", "See prices" (#621, #1046).
14. **Dark theme by default with a neon accent.** Choose the ground from the
    brand and the reading conditions. If it is dark, follow the dark-theme
    rules rather than inverting (#813, #319).
15. **Fade-up on every element as it scrolls in.** Motion carries information
    or it doesn't happen (#1041, #733). If motion stays, respect reduced motion
    (#701).
16. **A testimonial carousel or an auto-playing logo wall.** Almost nobody
    clicks past slide one (#1033). Static, ranked, five or fewer, with a pause
    if anything moves (#9747).
17. **Placeholder text as the field label, or floating labels.** Labels above
    the field are read in 50ms and never vanish (#612, #1045).
18. **Decorative statistics.** "10k+ customers" with no source is a lie factor
    of infinity (#498). Numbers are real and sourced or they are not on the
    page (#686).
19. **A 1200px container of 14px grey text.** That is 150 characters a line in
    a colour that fails contrast (#372, #1029, #1013). Cap the measure, raise
    the size, darken the ink.
20. **Hierarchy by size alone, a 72px heading over 16px body and nothing
    between.** Levels differ by two attributes and there are three or four of
    them (#96, #343).

## 4. Vocabulary of moves

Name the move and you can make it on purpose. Each is an entry; pull it for
the full method.

- **Subordination** (#95): make everything but the one thing quieter.
- **Isolation** (#149): emphasis by surrounding space rather than size.
- **Asymmetrical balance** (#87): balance unlike elements by weight, not
  mirroring, so one can dominate.
- **Optical alignment** (#151), **optical spacing** (#153), **overshoot**
  (#152): correct by eye after aligning by number.
- **Measure** (#372): line length in characters, the cheapest fix for a wall of
  text.
- **Rag** (#380): the shape of the right edge in flush-left text; control it
  with breaks and hyphenation, not justification.
- **Hanging punctuation** (#386): quotes and bullets hang outside the margin so
  the text edge stays straight.
- **Modular scale** (#345): sizes generated from one base and one ratio.
- **Contrast in pairing** (#340): typefaces that differ clearly on at least one
  of Dair's seven axes.
- **Tabular figures** (#361) and **oldstyle figures** (#360): numbers that
  align in columns; numbers that sit in running text.
- **Accented neutral** (#307): a palette of neutrals with one colour pointing.
- **Value structure** (#309): tone before hue; the greyscale test (#310).
- **Redundant encoding** (#318): every colour meaning carried a second way.
- **Scrim** (#1030): a tint between text and image so contrast can be measured.
- **Whitespace scale** (#446) and **macro white space** (#119): named spacing
  values; large empty areas between major blocks.
- **Hierarchical grid** (#409): unequal but fixed bands drawn from the content.
- **Baseline grid** (#410): text lines across columns sit on the same rhythm.
- **Action hierarchy** (#622): one primary, ranked secondary and tertiary.
- **One job per page** (#683) and **front-loaded sentences** (#664): the page
  and every line lead with the point.
- **Meaningful headings** (#670): headings that could be read alone as an
  outline.
- **Focal-point cropping** (#482): crop decisions made per breakpoint.
- **Slow in, slow out** (#726) and **choreography** (#737): easing and
  staggered entrances that read as one movement.
- **Density modes** (#445): comfortable and compact as deliberate settings.
- **Data-ink** (#499), **direct labelling** (#507), **small multiples** (#502),
  **titles that state the takeaway** (#534): the four moves that fix most
  charts.
- **Cleveland-McGill ranking** (#514): position beats length beats angle beats
  area beats colour for reading a value.
- **Levels of scale** (#913): sizes that step by about 1:2 to 1:3.
- **Single-colour test** (#836), **small-size test** (#837), **clear space**
  (#838): the three tests a mark must pass.
- **State matrix** (#625): empty, loading, partial, error, ideal, overflow.
- **Progressive disclosure** (#580): show the common case, reveal the rest on
  request.

## 5. What the corpus can't do

It cannot supply taste, and it cannot know the client. It can remove the
defaults, hold the measurable lines, and force each decision to be made on
purpose. Taste comes from the brief, the constraints, and iteration against a
critic. Where the corpus is silent, say so; don't dress generic advice as a
citation.

## 6. The decision log

Every design ships with one. It is the reasoning made visible, and it is how a
client, a reviewer or the next designer knows the choices were made rather than
defaulted. Keep it short and specific.

```
DECISION LOG: <artefact>, <date>

Brief
  Job: <the one job>            Audience: <who, what they know>
  Attributes: <3-4, each with what it excludes>
  Tone: <formal/casual, serious/funny, respectful/irreverent, matter-of-fact/enthusiastic>

Hierarchy
  1. <element>  2. <element>  3. <element>     (#96, #94, #622)
  Focal point: <what and why>

Structure
  Grid: <type and columns> (#409)   Measure: <n ch> (#372)
  Spacing scale: <values> (#413)    Balance: <symmetric/asymmetric, why> (#87)

Type
  Families: <display / text, and their jobs> (#339)
  Scale: base <n>px, ratio <r>: <sizes> (#345)   Body: <size>/<line-height> (#1012)

Colour
  Ground: <hex>  Ink: <hex>  Accent: <hex>, from <where> (#307, #842)
  Measured contrast: body <n>:1, large <n>:1, UI <n>:1 (#690, #691)

Imagery
  <what is real, what is absent, and why> (#481)

Interaction and motion
  Primary action: <label> (#621)   Targets: <min size> (#700)
  Motion: <where, duration, easing, or none> (#734, #733)

Measured
  measure.mjs: <PASS/FAIL summary at each viewport>
  Left as WARN and why: <list>

Departures
  <any rule knowingly broken, the entry, and the reason>
```
