window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[20] = {
  n: 20,
  slug: "design-systems",
  title: "Design systems",
  blurb: "How repeated design decisions get named, stored, documented and governed so a team builds one thing.",
  intro: "A design system is the set of decisions a team stops re-making: the colours, spacings, components and rules that every screen draws from. The modern vocabulary is young. Brad Frost published atomic design in 2013, Jina Anne and the Salesforce team coined design tokens in 2014, and Alla Kholmatova's book Design Systems arrived in 2017. Much of the rest is borrowed from software engineering and from how open-source projects are run, which is why words like versioning, linting and contribution turn up in a design section. A working designer needs this because the hard part of a system is rarely the visual design: it is naming things, keeping the drawing and the code saying the same thing, and deciding who is allowed to change what.",
  sources: [
    "Jina Anne and the Salesforce Lightning Design System team, design tokens and the Theo build tool (2014)",
    "Design Tokens Community Group (W3C), Design Tokens Format Module, draft community group report (read August 2026)",
    "Nathan Curtis, Tokens in Design Systems (EightShapes, 2016) and Naming Tokens in Design Systems (2020)",
    "Nathan Curtis, Team Models for Scaling a Design System (2015), Measuring Design System Success (2017), Adopting Design Systems (2017), Defining Design System Contributions (2020)",
    "Brad Frost, Interface Inventory (2013), Atomic Design blog post (2013) and Atomic Design book (2016)",
    "Alla Kholmatova, Design Systems (Smashing Magazine, 2017) and The Language of Modular Design, A List Apart (11 August 2015)",
    "Material Design 3, Google: colour, spacing, shape, elevation and motion guidance, plus the material-web motion token source (read August 2026)",
    "Radix Colors documentation, palette composition and scale steps",
    "Therese Fessenden, Design Systems 101, Nielsen Norman Group (11 April 2021)",
    "Jonathan Grudin, The Case Against User Interface Consistency, Communications of the ACM 32(10), 1164-1173 (October 1989)",
    "W3C, Web Content Accessibility Guidelines 2.2, W3C Recommendation (5 October 2023, updated 12 December 2024)",
    "W3C Web Accessibility Initiative, ARIA Authoring Practices Guide",
    "Tom Preston-Werner, Semantic Versioning (semver.org)",
    "Ward Cunningham, The WyCash Portfolio Management System, OOPSLA (1992)",
    "Tim Brown, More Meaningful Typography, A List Apart (3 May 2011), quoting Robert Bringhurst",
    "Bootstrap 5.3 documentation, Layout: Breakpoints",
    "Daniele Procida, Diataxis documentation framework",
    "Style Dictionary (amzn/style-dictionary), Storybook documentation, Stylelint documentation, BackstopJS (garris/BackstopJS)",
    "Bergeron and others, Systems Programming Languages (1972), earliest printed statement of the principle of least astonishment"
  ],
  entries: [

    {
      n: 761,
      title: "Design tokens (global, alias, component)",
      aka: ["Primitive, semantic and component tokens", "Options and decisions"],
      oneLine: "Named values that hold a design decision once, so every platform reads the same answer.",
      demo: {
        caption: "One raw value at the top. Every name below points upwards, so the edit happens once and reaches five places.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 150\"><text class=\"t\" x=\"0\" y=\"23\">GLOBAL</text><rect class=\"s-accent\" x=\"160\" y=\"8\" width=\"112\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"216\" y=\"23\" text-anchor=\"middle\">blue-500</text><text class=\"t\" x=\"360\" y=\"23\" text-anchor=\"end\">EDIT ONCE</text><path class=\"s-mute\" d=\"M216 32 V47 H152 V57\"/><path class=\"f-mute\" d=\"M152 63 l-3.5 -6 h7 Z\"/><path class=\"s-mute\" d=\"M216 32 V47 H280 V57\"/><path class=\"f-mute\" d=\"M280 63 l-3.5 -6 h7 Z\"/><text class=\"t\" x=\"0\" y=\"78\">ALIAS</text><rect class=\"s-mute\" x=\"96\" y=\"63\" width=\"112\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"152\" y=\"78\" text-anchor=\"middle\">color-action</text><rect class=\"s-mute\" x=\"224\" y=\"63\" width=\"112\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"280\" y=\"78\" text-anchor=\"middle\">color-link</text><path class=\"s-mute\" d=\"M152 87 V102 H124 V112\"/><path class=\"f-mute\" d=\"M124 118 l-3.5 -6 h7 Z\"/><path class=\"s-mute\" d=\"M152 87 V102 H220 V112\"/><path class=\"f-mute\" d=\"M220 118 l-3.5 -6 h7 Z\"/><path class=\"s-mute\" d=\"M280 87 V102 H316 V112\"/><path class=\"f-mute\" d=\"M316 118 l-3.5 -6 h7 Z\"/><text class=\"t\" x=\"0\" y=\"133\">COMPONENT</text><rect class=\"s-mute\" x=\"80\" y=\"118\" width=\"88\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"124\" y=\"133\" text-anchor=\"middle\">button-bg</text><rect class=\"s-mute\" x=\"176\" y=\"118\" width=\"88\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"220\" y=\"133\" text-anchor=\"middle\">chip-bg</text><rect class=\"s-mute\" x=\"272\" y=\"118\" width=\"88\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"316\" y=\"133\" text-anchor=\"middle\">link-text</text></svg></div>"
      },
      what: "A design token is a name paired with a value: a colour, a size, a duration. The term comes from Jina Anne and the Salesforce Lightning Design System team in 2014, who needed one set of decisions to feed web, iOS and Android instead of the same blue being retyped in five codebases. Teams stack tokens in tiers. Global or primitive tokens hold raw values such as blue-500, alias or semantic tokens point at those and carry intent such as color-text-primary, and component tokens scope a decision to one part such as button-background. Nathan Curtis framed the same split as options and decisions.",
      why: "Tiers give you one place to change a decision and a trail showing where it lands. The naming also forces intent into the open, because color-text-primary tells a developer what it is for while blue-500 only says what it looks like.",
      how: [
        "Keep global tokens boring and non-semantic: a ramp of numbered values, nothing about buttons or brands.",
        "Make products consume alias tokens only, so a theme change never asks anyone to edit a component.",
        "Add a component token only when a part genuinely needs to diverge, not as a default habit.",
        "Store tokens in a neutral format and build them out with a tool such as Style Dictionary rather than hand-copying values."
      ],
      example: "Style Dictionary, the open-source build tool hosted at github.com/amzn/style-dictionary, takes tokens defined once in JSON and generates CSS custom properties, Android XML dimensions, iOS Swift constants and JavaScript from that single definition.",
      numbers: "The Design Tokens Format Module draft defines the types color, dimension, fontFamily, fontWeight, duration, cubicBezier and number, plus strokeStyle and the composites border, transition, shadow, gradient and typography. A token value can reference another using the syntax {group.token}.",
      pitfall: "Tokenising everything. A token per one-off value gives you a dictionary nobody can read, and a semantic layer that is a one-to-one copy of the global layer adds a hop without adding meaning.",
      source: "Jina Anne, Salesforce Lightning Design System (2014); Nathan Curtis, Tokens in Design Systems, EightShapes (2016); Design Tokens Community Group, Design Tokens Format Module (draft)",
      verify: { status: "verified", note: "Read the Design Tokens Format Module draft at designtokens.org, which sets out the type list, the strokeStyle and composite types and the {group.token} alias syntax, and which is labelled a Draft Community Group Report. Jina Anne's own site records architecting tokens and the open-source Theo tool at Salesforce, and a design-tokens history piece dates the coinage to her Lightning Design System work in 2014. The three-tier naming is industry convention, not part of the spec." },
      belongs: { verdict: "core", why: "Tokens are the storage layer of every modern design system, and the naming choices decide how the system behaves for years." },
      related: [762, 763, 769, 775, 776]
    },

    {
      n: 762,
      title: "Token naming conventions",
      aka: ["Token taxonomy"],
      oneLine: "A repeatable name structure so a token's meaning can be read straight off its name.",
      demo: {
        caption: "Right-hand names put each level in the same column, so the parts line up and can be sorted as a group.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No fixed order</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 112\"><text class=\"t\" x=\"4\" y=\"16\">NAMES AS FOUND</text><path class=\"s-mute\" d=\"M4 22 H166\"/><text class=\"t\" x=\"4\" y=\"36\">btnBgHover</text><text class=\"t\" x=\"4\" y=\"54\">color-background-button</text><text class=\"t\" x=\"4\" y=\"72\">hover-button-bg</text><text class=\"t\" x=\"4\" y=\"90\">buttonBackgroundPressed</text><text class=\"t\" x=\"4\" y=\"106\">NOTHING TO SORT ON</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Object, base, modifier</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 112\"><path class=\"s-mute\" d=\"M56 6 V98 M106 6 V98\"/><text class=\"t\" x=\"4\" y=\"16\">OBJECT</text><text class=\"t\" x=\"60\" y=\"16\">BASE</text><text class=\"t\" x=\"110\" y=\"16\">MODIFIER</text><path class=\"s-mute\" d=\"M4 22 H166\"/><text class=\"t\" x=\"4\" y=\"36\">button</text><text class=\"t\" x=\"60\" y=\"36\">bg</text><text class=\"t\" x=\"110\" y=\"36\">hover</text><text class=\"t\" x=\"4\" y=\"54\">button</text><text class=\"t\" x=\"60\" y=\"54\">bg</text><text class=\"t\" x=\"110\" y=\"54\">pressed</text><text class=\"t\" x=\"4\" y=\"72\">input</text><text class=\"t\" x=\"60\" y=\"72\">border</text><text class=\"t\" x=\"110\" y=\"72\">focus</text><text class=\"t\" x=\"4\" y=\"90\">card</text><text class=\"t\" x=\"60\" y=\"90\">bg</text><text class=\"t\" x=\"4\" y=\"106\">SAME LEVEL, SAME COLUMN</text></svg></div></div></div>"
      },
      what: "Nathan Curtis published a taxonomy for token names in October 2020 that most teams now borrow from. He splits a name into base levels (category, property, concept), modifiers (variant, state, scale, mode), objects (a component, a nested element, a group of components) and namespaces (system, theme, domain). You assemble a name from only the levels you actually need. His rule is to include enough to describe and distinguish the intent and no more.",
      why: "A consistent order means a developer can guess a token name before looking it up, and can tell at a glance whether they are holding a raw value or an applied decision. It also makes bulk work possible: you can search, sort, lint and migrate names that follow a pattern.",
      how: [
        "Fix the order of levels once and write it down, for example namespace, object, base, modifier.",
        "Use the same word for the same idea everywhere: pick surface or background, not both.",
        "Do not encode the value in the name; bg-grey-100 becomes a lie the day the theme changes.",
        "Reserve state words such as hover, focus and disabled for actual states, and mode for light and dark."
      ],
      example: "Material 3 names its motion tokens by category and scale, giving md.sys.motion.duration.short1 through to extra-long4, so the shape of the name tells you what kind of thing it is before you read the value.",
      numbers: "",
      pitfall: "Renaming halfway through adoption. Token names become other people's code, so a tidy-up that reads as a small improvement can cost every consuming team a migration.",
      source: "Nathan Curtis, Naming Tokens in Design Systems, EightShapes (15 October 2020)",
      verify: { status: "verified", note: "Read Curtis's article directly for the four groupings and the quoted rule about including only the levels needed. The Material token names were read from the material-web token source." },
      belongs: { verdict: "core", why: "Naming is the interface of a token system; get it wrong and every later decision inherits the mess." },
      related: [761, 763, 775]
    },

    {
      n: 9762,
      title: "Shared language for patterns",
      aka: ["Naming the patterns", "Pattern vocabulary"],
      oneLine: "Agreeing what each part is called so a team can discuss the system without pointing.",
      demo: {
        caption: "Left, one appearance description fits all three parts. Right, each name picks out exactly one of them.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Described by appearance</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div><span class=\"db-note\">THAT THING WITH THE LINES</span><div class=\"db-card\"><div class=\"db-row db-row--nowrap\"><span class=\"db-sq db-sq--accent\"></span><div class=\"db-lines db-fill\"><i></i></div></div></div></div><div><span class=\"db-note\">THAT THING WITH THE LINES</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Add one</span></div></div></div></div><div><span class=\"db-note\">THAT THING WITH THE LINES</span><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><div class=\"db-lines db-fill\"><i></i></div><span class=\"db-btn db-btn--sm db-btn--quiet\">Undo</span></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Named by purpose</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div><span class=\"db-note\">ALERT</span><div class=\"db-card\"><div class=\"db-row db-row--nowrap\"><span class=\"db-sq db-sq--accent\"></span><div class=\"db-lines db-fill\"><i></i></div></div></div></div><div><span class=\"db-note\">EMPTY STATE</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Add one</span></div></div></div></div><div><span class=\"db-note\">TOAST</span><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><div class=\"db-lines db-fill\"><i></i></div><span class=\"db-btn db-btn--sm db-btn--quiet\">Undo</span></div></div></div></div></div></div></div>"
      },
      what: "Alla Kholmatova gives shared language a chapter of its own in Design Systems (2017), alongside functional patterns, which do a job, and perceptual patterns, which carry the look and feel. Writing in A List Apart two years earlier, she put it bluntly: if an object in the interface has no name that makes sense to the team and is known and used by them, it does not exist as a concrete, actionable module to work with. Naming together is also how a team works out what a thing is for, because agreeing on the name forces the function into the open.",
      why: "A team without agreed names describes components by appearance, so the blue box becomes three different things in one meeting. Naming also acts as a design check, because a part you cannot name in a few words is usually two parts fused together.",
      how: [
        "Name from purpose rather than appearance: Alert, not YellowBar.",
        "Take names from words the team already says out loud, and abandon a name nobody adopts.",
        "Keep one word per idea across design files, code and documentation.",
        "Put the name in the documentation heading and use it in release notes so it spreads."
      ],
      example: "Her team at FutureLearn named one component the whisper box, and she describes the effort of saying that in conversation instead of 'that thing with the lines and an icon in the middle' until the name took hold.",
      numbers: "",
      pitfall: "Cute internal names. A component called Pancake is fun for six months and then costs every new joiner an explanation, and it never matches what the design tool search finds.",
      source: "Alla Kholmatova, Design Systems (Smashing Magazine, 2017); Alla Kholmatova, The Language of Modular Design, A List Apart (11 August 2015)",
      verify: { status: "verified", note: "Confirmed the September 2017 publication date and the chapter order, Functional Patterns then Perceptual Patterns then Shared Language, from Smashing Magazine's own book listings, which also carry each chapter's summary. I have not read the chapter text, so the naming argument and the whisper box example here are taken from Kholmatova's A List Apart article of 11 August 2015, which I read in full, and are not attributed to the book." },
      belongs: { verdict: "core", why: "Naming components is the everyday work of running a system, and the master list covers token naming but not pattern naming." },
      related: [762, 774, 788]
    },

    {
      n: 763,
      title: "Theming and modes",
      aka: ["Light and dark mode", "Multi-brand theming"],
      oneLine: "Swapping the values behind semantic tokens so one build can serve several looks.",
      demo: {
        caption: "Both cards name the same three roles. Only the values change, and neither primary nor the variant is a straight inversion.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Light values</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-chip-text\" style=\"background:#fdfbf6;color:#17150f\">surface / on-surface</div><div class=\"db-chip-text\" style=\"background:#efeade;color:#17150f\">surface-variant</div><div class=\"db-chip-text\" style=\"background:#5b3a94;color:#ffffff\">primary / on-primary</div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Dark values</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-chip-text\" style=\"background:#14120d;color:#ede7da\">surface / on-surface</div><div class=\"db-chip-text\" style=\"background:#2b2620;color:#ede7da\">surface-variant</div><div class=\"db-chip-text\" style=\"background:#b9a0ea;color:#12100c\">primary / on-primary</div></div></div></div></div>"
      },
      what: "A theme is a second set of values plugged into the same semantic names. Light and dark are the common pair, but the mechanism also covers brands, contrast levels and product sub-families. Browsers expose the user's system preference through the prefers-color-scheme media feature, defined in Media Queries Level 5, with the values light and dark. Material 3 shows the fuller version: the same 26 colour roles are filled from different tones for light and dark, and again for standard, medium and high contrast settings.",
      why: "If components refer to roles rather than to colours, a theme is a data change instead of a redesign. It also lets you honour a preference the person has already set at the operating system level, so you are not asking them to configure the same thing twice.",
      how: [
        "Theme only the alias layer; components should never name a raw colour.",
        "Respect prefers-color-scheme by default and offer an in-product override rather than only one or the other.",
        "Re-test contrast in every mode, since a pairing that passes in light can fail in dark.",
        "Check images, illustrations, shadows and charts in each mode, not just text and surfaces."
      ],
      example: "Material 3 assigns light and dark values to the same colour roles, so an app written against roles such as primary and on primary receives both themes without new component code.",
      numbers: "prefers-color-scheme takes the values light and dark, and MDN records it as available across browsers since January 2020. Material 3 defines 26 colour roles, and states that its medium contrast setting provides a minimum contrast ratio of 3:1 and its high contrast setting 7:1.",
      pitfall: "Treating dark mode as an inversion. Flipping lightness produces glaring whites, dead shadows and brand colours that no longer sit on their backgrounds.",
      source: "CSS Media Queries Level 5 (prefers-color-scheme); Material Design 3 colour system, Google",
      verify: { status: "verified", note: "Checked prefers-color-scheme on MDN, which names Media Queries Level 5, the two values and availability across browsers since January 2020. The count of 26 colour roles, the light and dark mapping and the 3:1 and 7:1 contrast levels were read from Material 3's How the system works page this session." },
      belongs: { verdict: "core", why: "Multi-mode delivery is now the normal expectation, and it only works if the token layer was built for it." },
      related: [761, 764, 783]
    },

    {
      n: 764,
      title: "Colour ramp construction",
      aka: ["Tonal palette", "Colour scale"],
      oneLine: "Building a numbered ladder of one hue so contrast and role can be chosen by number.",
      demo: {
        caption: "Two hues, five steps. On the left a given step differs in weight between the rows; on the right it matches.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Equal HSL lightness</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ramp\"><span style=\"background:#fbf2b6\"></span><span style=\"background:#f7e56e\"></span><span style=\"background:#f4d825\"></span><span style=\"background:#c2a90a\"></span><span style=\"background:#796a06\"></span></div><div class=\"db-ramp\"><span style=\"background:#cdc2f0\"></span><span style=\"background:#9c85e0\"></span><span style=\"background:#6a47d1\"></span><span style=\"background:#4729a3\"></span><span style=\"background:#2d1a66\"></span></div><span class=\"db-note\">SAME STEP, DIFFERENT WEIGHT</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Equal perceived lightness</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ramp\"><span style=\"background:#ffe47e\"></span><span style=\"background:#dfbb02\"></span><span style=\"background:#b39609\"></span><span style=\"background:#8a7304\"></span><span style=\"background:#625101\"></span></div><div class=\"db-ramp\"><span style=\"background:#d8e5ff\"></span><span style=\"background:#9ebdff\"></span><span style=\"background:#6592ff\"></span><span style=\"background:#2c60ff\"></span><span style=\"background:#0d04f4\"></span></div><span class=\"db-note\">SAME STEP, SAME WEIGHT</span></div></div></div></div>"
      },
      what: "A ramp is one hue rendered as an ordered set of steps from light to dark, each step given a number and, in the better systems, a job. Material 3 builds tonal palettes in HCT, a space where hue and chroma can be changed without disturbing tone, and numbers each palette by tone from 0 (black) to 100 (white). Radix Colors fixes the job of each of its 12 steps: app background, subtle background, component backgrounds with their hover and active states, borders, solid fills, then text. Both make contrast a matter of choosing step numbers rather than eyeballing swatches.",
      why: "Even steps in a perceptual space mean two ramps at the same number look equally strong, so a warning red and an info blue sit at the same weight. Assigning jobs to steps also removes an argument: the question stops being which grey and becomes which step.",
      how: [
        "Space steps by perceived lightness, not by evenly spaced hex values.",
        "Give each step a job and document it, so nobody uses a border step for text.",
        "Generate every hue on the same step structure so ramps are interchangeable.",
        "Check the pairings you actually ship, for example step 11 text on step 2 background, against the contrast rule you are held to."
      ],
      example: "Radix Colors publishes 12 numbered steps per scale with a fixed purpose per step, and states that steps 11 and 12, the text steps, are guaranteed to Lc 60 and Lc 90 APCA contrast on a step 2 background from the same scale.",
      numbers: "Material 3 tonal palettes run 0 to 100 in increments of 10, plus 95, 98 and 99, and Material notes some palettes carry extra values. Material states that tones 50 and 98 give an accessible 3:1 contrast and tones 30 and 98 reach 7:1. Radix guarantees Lc 60 for step 11 and Lc 90 for step 12 against step 2. WCAG 2.2 SC 1.4.3 requires 4.5:1 for normal text and 3:1 for large text at AA.",
      pitfall: "Building the ramp in HSL and assuming equal lightness values look equally light. Yellow at 50% lightness reads far brighter than blue at 50%, so the middle of your ramp will not behave.",
      source: "Material Design 3 colour system (HCT and tonal palettes), Google; Radix Colors documentation, Understanding the Scale; WCAG 2.2, W3C (2023, updated 2024)",
      verify: { status: "verified", note: "Tone increments, the HCT explanation and the tone 50/98 and 30/98 pairings were read from Material 3's How the system works page this session. The 12 steps, their per-step purposes and the Lc 60 and Lc 90 APCA guarantees came from the Radix Colors Understanding the Scale page. Contrast minimums checked against WCAG 2.2." },
      belongs: { verdict: "core", why: "A system's colour behaviour is decided by how the ramp is built, and every later theming and accessibility decision rests on it." },
      related: [763, 765, 783]
    },

    {
      n: 765,
      title: "Spacing scale",
      aka: ["Spacing tokens", "8-point grid"],
      oneLine: "A short fixed set of gaps, so spacing is chosen from a list rather than typed.",
      demo: {
        caption: "Same six bars. On the left the gap between the groups is smaller than a gap inside one, so the grouping breaks.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Gaps typed by hand</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-col\" style=\"gap:11px\"><div class=\"db-col\" style=\"gap:7px\"><div class=\"db-bar db-bar--ink\"></div><div class=\"db-bar\"></div><div class=\"db-bar\"></div></div><div class=\"db-col\" style=\"gap:13px\"><div class=\"db-bar db-bar--ink\"></div><div class=\"db-bar\"></div><div class=\"db-bar\"></div></div></div><span class=\"db-note\">GAPS 7, 11 AND 13 PX</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Gaps from one scale</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-col\" style=\"gap:24px\"><div class=\"db-col\" style=\"gap:8px\"><div class=\"db-bar db-bar--ink\"></div><div class=\"db-bar\"></div><div class=\"db-bar\"></div></div><div class=\"db-col\" style=\"gap:8px\"><div class=\"db-bar db-bar--ink\"></div><div class=\"db-bar\"></div><div class=\"db-bar\"></div></div></div><span class=\"db-note\">GAPS 8 AND 24 PX</span></div></div></div></div>"
      },
      what: "A spacing scale replaces free-typed padding and margin with a named ladder. Material 3 works from a base unit of 8dp, named space100, and derives the rest as multipliers of it, running from space0 up to space900 at 72dp. It publishes only the values it recommends rather than every possible one, so the ladder is uneven: whole multiples at the top, quarter and half steps at the bottom where small gaps matter. Some systems work in fours instead, and Jina Anne records convincing Salesforce to move to a four-based metric system while building the Lightning Design System. The exact base matters less than having one, because a scale turns spacing into a decision with a small number of legal answers.",
      why: "Rhythm comes out of repetition, and a scale makes repetition the default rather than an achievement. It also kills the 13px versus 14px argument, and it makes drift visible: any value not on the scale stands out in a diff or a lint report.",
      how: [
        "Pick one base unit and derive everything from it; do not run two bases side by side.",
        "Keep the scale short. If you need eleven values you probably need better layout components.",
        "Use bigger jumps at the top end, since the difference between 48 and 56 matters less than between 4 and 8.",
        "Name steps by position, not by use, so space200 does not become card-padding by the back door."
      ],
      example: "Material 3's spacing tokens page publishes eighteen named steps built as multipliers of md.sys.measurement.space100, which is 8dp, and says outright that Material defines only the most recommended values on the scale rather than every one.",
      numbers: "Material 3 spacing tokens, read from the tokens page: space0 0dp, space25 2dp, space50 4dp, space75 6dp, space100 8dp, space125 10dp, space150 12dp, space175 14dp, space200 16dp, space250 20dp, space300 24dp, space400 32dp, space450 36dp, space500 40dp, space600 48dp, space700 56dp, space800 64dp, space900 72dp.",
      pitfall: "Allowing an escape hatch for one nudge. One hard-coded 6px becomes a convention, and within a year the spacing scale describes only part of the product.",
      source: "Material Design 3 spacing guidance, Google; Jina Anne on the Salesforce four-based metric system",
      verify: { status: "verified", note: "Every dp value above was read from Material 3's spacing tokens page this session, and it corrects an earlier draft of this entry that described the scale as nine steps of 8dp; the published scale also carries quarter and half steps (space25 at 2dp through space175 at 14dp) and space450 at 36dp, and has no space350. The four-based system at Salesforce comes from Jina Anne's own account on jina.me. I found no single documented originator for the 8-point grid convention itself, so I have not attributed it." },
      belongs: { verdict: "core", why: "Spacing is the most frequently made decision in interface work, and a scale is the cheapest way to make it consistently." },
      related: [766, 767, 761]
    },

    {
      n: 766,
      title: "Type scale (as tokens)",
      aka: ["Type scale", "Type size tokens"],
      oneLine: "The agreed type sizes held as named tokens, so nobody can type a size that is not on the list.",
      demo: {
        caption: "Left, eight sizes that drifted in over three years. Right, five token steps. Only the right-hand set gives distinct levels.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Eight sizes, accumulated</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--bottom db-row--tight\"><span class=\"db-specimen\" style=\"font-size:13px\">Aa</span><span class=\"db-specimen\" style=\"font-size:14px\">Aa</span><span class=\"db-specimen\" style=\"font-size:15px\">Aa</span><span class=\"db-specimen\" style=\"font-size:16px\">Aa</span><span class=\"db-specimen\" style=\"font-size:17px\">Aa</span><span class=\"db-specimen\" style=\"font-size:18px\">Aa</span><span class=\"db-specimen\" style=\"font-size:20px\">Aa</span><span class=\"db-specimen\" style=\"font-size:22px\">Aa</span></div><span class=\"db-note\">13 14 15 16 17 18 20 22 PX</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Five tokens</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--bottom db-row--tight\"><span class=\"db-specimen\" style=\"font-size:13px\">Aa</span><span class=\"db-specimen\" style=\"font-size:16px\">Aa</span><span class=\"db-specimen\" style=\"font-size:20px\">Aa</span><span class=\"db-specimen\" style=\"font-size:25px\">Aa</span><span class=\"db-specimen\" style=\"font-size:31px\">Aa</span></div><span class=\"db-note\">13 16 20 25 31 PX</span></div></div></div></div>"
      },
      what: "The type scale itself is at 344 and the ratio method that generates one is at 345. What a design system adds is enforcement. The scale stops being a recommendation and becomes a set of named tokens with the raw numbers out of reach, so an off-scale size cannot ship quietly. Tim Brown set the web method out in A List Apart in 2011, quoting Robert Bringhurst: a modular scale, like a musical scale, is a prearranged set of harmonious proportions.",
      why: "Related sizes look deliberate, and a fixed set makes hierarchy a choice between levels rather than a fiddle with numbers. It also caps the count. A system with six sizes is far easier to keep coherent than one with nineteen accumulated over three years.",
      how: [
        "Round the generated sizes to whole pixels and ship the rounded values as the tokens.",
        "Pair each size with a line height in the same token definition so the two never drift apart.",
        "Treat a request for a new size as a change to the system, with the same review as any other."
      ],
      example: "Tim Brown's More Meaningful Typography walks through building a page from a base size and the golden ratio, and cites Bringhurst's chapter on shaping the page as the source of the idea.",
      numbers: "The golden ratio used in Brown's worked example is 1:1.618.",
      pitfall: "Keeping every generated step. A modular scale produces sizes at 11.2 and 12.8 that no interface needs, and a scale nobody trims turns into free choice with extra steps.",
      source: "Tim Brown, More Meaningful Typography, A List Apart (3 May 2011), quoting Robert Bringhurst, The Elements of Typographic Style",
      verify: { status: "verified", note: "Read Brown's A List Apart article this session for the date, the Bringhurst quotation, the definition of a modular scale and the 1.618 ratio. I did not verify Bringhurst's own page numbers, so no traditional size list is quoted here. Shortened to a cross-reference during duplicate resolution, because 344 and 345 already carried the scale and the method; only the systems-side point about tokens is kept. No claim was changed." },
      belongs: { verdict: "core", why: "Type sizing is a system decision that repeats on every screen, and a scale is how a team stops relitigating it. The scale itself is written up at 344 and 345." },
      related: [765, 761, 344, 345]
    },

    {
      n: 767,
      title: "Radius scale",
      aka: ["Shape scale", "Corner radius scale"],
      oneLine: "A named set of corner radii so roundness carries meaning instead of being decoration.",
      demo: {
        caption: "Left puts one 14-pixel corner on all three sizes. Right scales radius with size, and the small control stops looking bloated.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One radius everywhere</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-btn\" style=\"border-radius:14px\">Save</span></div><div class=\"db-card\" style=\"border-radius:14px\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-block db-block--outline\" style=\"border-radius:14px;min-height:62px\"></div><span class=\"db-note\">14 PX ON ALL THREE</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Radius scaled to size</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-btn\" style=\"border-radius:4px\">Save</span></div><div class=\"db-card\" style=\"border-radius:8px\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-block db-block--outline\" style=\"border-radius:18px;min-height:62px\"></div><span class=\"db-note\">4, 8 AND 18 PX</span></div></div></div></div>"
      },
      what: "A radius scale gives corner roundness the same treatment as spacing: a list of named steps used everywhere. Material 3 publishes it as a shape scale of named corner values running from no rounding through extra small, small, medium, large, large increased, extra large, extra large increased and extra extra large, plus fully rounded, and says shape can direct attention, communicate state and express brand rather than being trim. In practice the scale also encodes hierarchy, with small radii on controls and larger ones on containers.",
      why: "Roundness is one of the loudest brand signals in an interface and one of the easiest to lose track of, because every component author has an opinion. A scale makes it a system property, and gives you a single lever if the brand later softens or sharpens.",
      how: [
        "Tie radius to component size: a 4px radius on a 200px card reads as an accident.",
        "Use fully rounded deliberately, usually for pills, avatars and chips, not as a general default.",
        "Match nested radii, keeping the inner radius smaller than the outer by roughly the padding between them.",
        "Keep the scale to a handful of steps and put them in tokens so a brand refresh is one edit."
      ],
      example: "Material 3 names its corner radius steps from no rounding to fully rounded and applies them consistently across components, so a button, a card and a dialogue share a family resemblance.",
      numbers: "Material 3's corner radius scale publishes nine named corner values, from no rounding to extra extra large, plus a fully rounded step. Its own guidance is that shape can direct attention, communicate state and express brand.",
      pitfall: "Applying one radius to everything. A single value used on inputs, cards, modals and images flattens the hierarchy and makes small controls look bloated.",
      source: "Material Design 3 shape guidance, Google",
      verify: { status: "verified", note: "The named steps were read from Material 3's corner radius scale page this session, and they correct an earlier draft that listed only six: the current scale also carries large increased, extra large increased and extra extra large. I could not extract reliable dp values for every step, so none are quoted. I found no canonical origin for radius scales as a general practice." },
      belongs: { verdict: "core", why: "Narrow but real: corner treatment is a systemised visual decision and belongs in tokens like any other." },
      related: [765, 768, 761]
    },

    {
      n: 768,
      title: "Elevation and shadow scale",
      aka: ["Depth scale", "Z-axis levels"],
      oneLine: "A small ladder of depth levels that says which surface sits above which.",
      demo: {
        caption: "Both nest a menu in a panel on a page. Only the right separates the three levels, so the menu floats.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Everything raised alike</span><div class=\"db-stage db-stage--tight db-stage--dark\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">PAGE / LEVEL 0</span><div class=\"db-card\" style=\"box-shadow:0 8px 18px var(--rule-strong)\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">PANEL / LEVEL 3</span><div class=\"db-card\" style=\"box-shadow:0 8px 18px var(--rule-strong)\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">MENU / LEVEL 3</span><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One level per surface</span><div class=\"db-stage db-stage--tight db-stage--dark\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">PAGE / LEVEL 0</span><div class=\"db-card\" style=\"box-shadow:0 1px 2px var(--rule-strong)\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">PANEL / LEVEL 1</span><div class=\"db-stage db-stage--tight\" style=\"box-shadow:0 14px 28px var(--rule-strong)\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">MENU / LEVEL 4</span><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div></div></div></div>"
      },
      what: "Elevation is the apparent distance between two surfaces on the z-axis, expressed through shadow, and in Material 3 also through tonal surface colour. The system defines six levels, 0 to 5, and components are assigned a level rather than a shadow. That indirection matters, because the same level can be drawn as a soft shadow in a light theme and as a lighter surface tint in a dark one, where shadows barely read.",
      why: "Depth is a hierarchy signal: a person reads a raised surface as temporary and closer to hand. A short fixed ladder keeps that signal legible, whereas twenty bespoke shadows leave a reader unable to tell which panel is really on top.",
      how: [
        "Assign levels, not shadow values, and let the theme decide how a level is drawn.",
        "Keep the number of levels small and reserve the top of the range for things that genuinely float, such as menus and dialogues.",
        "Give dark themes a surface-tint route to depth rather than relying on shadow alone.",
        "Keep shadow colour derived from the background rather than pure black, so it does not read as grime."
      ],
      example: "Material 3 defines six elevation levels, 0 to 5, and states elevation can be shown either as tonal surface colours or as shadows.",
      numbers: "Material 3 defines six elevation levels, numbered 0 to 5.",
      pitfall: "Shadows used as decoration. Once every card carries a drop shadow, elevation stops meaning anything and the page just looks smudged.",
      source: "Material Design 3 elevation guidance, Google",
      verify: { status: "verified", note: "Read Material 3's elevation overview this session for the six levels and the shadow versus tonal surface distinction. Earlier Material versions used different dp values per level, so I have quoted level numbers only rather than dp figures." },
      belongs: { verdict: "core", why: "Depth is a shared visual language across components, and it falls apart unless it is defined once in the system." },
      related: [767, 763, 761]
    },

    {
      n: 769,
      title: "Motion tokens",
      aka: ["Duration and easing tokens"],
      oneLine: "Named durations and easing curves so animation timing is a system decision, not a guess.",
      demo: {
        caption: "Sixteen named durations on one axis. The ladder steps by 50 milliseconds, then by 100 across the accented extra-long band.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 152\"><text class=\"t\" x=\"8\" y=\"12\">STEPS OF 50 MS</text><text class=\"t\" x=\"353\" y=\"12\" text-anchor=\"end\">STEPS OF 100 MS</text><path class=\"s-mute\" d=\"M0 120 H356\"/><rect class=\"f\" x=\"8\" y=\"115\" width=\"15\" height=\"5\"/><rect class=\"f\" x=\"30\" y=\"110\" width=\"15\" height=\"10\"/><rect class=\"f\" x=\"52\" y=\"105\" width=\"15\" height=\"15\"/><rect class=\"f\" x=\"74\" y=\"100\" width=\"15\" height=\"20\"/><rect class=\"f\" x=\"96\" y=\"95\" width=\"15\" height=\"25\"/><rect class=\"f\" x=\"118\" y=\"90\" width=\"15\" height=\"30\"/><rect class=\"f\" x=\"140\" y=\"85\" width=\"15\" height=\"35\"/><rect class=\"f\" x=\"162\" y=\"80\" width=\"15\" height=\"40\"/><rect class=\"f\" x=\"184\" y=\"75\" width=\"15\" height=\"45\"/><rect class=\"f\" x=\"206\" y=\"70\" width=\"15\" height=\"50\"/><rect class=\"f\" x=\"228\" y=\"65\" width=\"15\" height=\"55\"/><rect class=\"f\" x=\"250\" y=\"60\" width=\"15\" height=\"60\"/><rect class=\"f-accent\" x=\"272\" y=\"50\" width=\"15\" height=\"70\"/><rect class=\"f-accent\" x=\"294\" y=\"40\" width=\"15\" height=\"80\"/><rect class=\"f-accent\" x=\"316\" y=\"30\" width=\"15\" height=\"90\"/><rect class=\"f-accent\" x=\"338\" y=\"20\" width=\"15\" height=\"100\"/><text class=\"t\" x=\"48\" y=\"136\" text-anchor=\"middle\">SHORT</text><text class=\"t\" x=\"136\" y=\"136\" text-anchor=\"middle\">MEDIUM</text><text class=\"t\" x=\"224\" y=\"136\" text-anchor=\"middle\">LONG</text><text class=\"t\" x=\"312\" y=\"136\" text-anchor=\"middle\">EXTRA-LONG</text><text class=\"t\" x=\"8\" y=\"150\">50 MS</text><text class=\"t\" x=\"353\" y=\"150\" text-anchor=\"end\">1000 MS</text></svg></div>"
      },
      what: "Motion tokens store the two values every transition needs: how long it runs and how it accelerates. Material 3 publishes sixteen duration tokens, from short1 at 50ms to extra-long4 at 1000ms, stepping by 50ms up to long4 at 600ms and by 100ms across the extra-long band, alongside named easing curves such as standard and emphasized. The Design Tokens Format Module includes duration and cubicBezier as first-class token types, so motion travels between tools in the same file as colour and spacing.",
      why: "Timing consistency is what makes an interface feel like one product rather than several. Named durations also let you tune the whole product at once: if everything feels sluggish, you change the token, not forty components.",
      how: [
        "Tie duration to distance and size, with small elements moving faster than large panels.",
        "Use accelerate curves for things leaving and decelerate curves for things arriving.",
        "Ship a reduced-motion behaviour alongside the tokens rather than as an afterthought.",
        "Give the tokens plain names by scale so nobody has to remember which curve is which set of numbers."
      ],
      example: "Material's web component library defines md.sys.motion.duration.short1 at 50ms and standard easing as cubic-bezier(0.2, 0, 0, 1) in its published token source.",
      numbers: "Material 3 durations: short1 50ms, short2 100ms, short3 150ms, short4 200ms, medium1 250ms through medium4 400ms, long1 450ms through long4 600ms, extra-long1 700ms through extra-long4 1000ms. Easing: standard cubic-bezier(0.2, 0, 0, 1), emphasized decelerate cubic-bezier(0.05, 0.7, 0.1, 1), legacy cubic-bezier(0.4, 0, 0.2, 1).",
      pitfall: "Tokenising duration but leaving easing hard-coded. Half-systemised motion is the version that still feels inconsistent, because the curve carries more of the character than the length does.",
      source: "Material Design 3 motion tokens, Google (material-web token source); Design Tokens Format Module, Design Tokens Community Group",
      verify: { status: "verified", note: "Every duration and easing value was read from the material-web repository's _md-sys-motion token source this session, which also corrects an earlier draft describing the whole range as 50ms increments: the extra-long band steps by 100ms. The duration and cubicBezier token types were confirmed in the Design Tokens Format Module draft." },
      belongs: { verdict: "core", why: "Motion values repeat across every component, and unsystemised timing is one of the clearest tells of an unmanaged interface." },
      related: [761, 753, 750]
    },

    {
      n: 770,
      title: "Breakpoint tokens",
      aka: ["Named breakpoints"],
      oneLine: "Named viewport widths shared by design files, CSS and documentation.",
      demo: {
        caption: "Bootstrap's five named widths on one axis. The accent mark is where this content actually breaks, sitting between the tiers.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 100\"><text class=\"t\" x=\"83\" y=\"32\" text-anchor=\"middle\">XS</text><text class=\"t\" x=\"147\" y=\"32\" text-anchor=\"middle\">SM</text><text class=\"t\" x=\"189\" y=\"32\" text-anchor=\"middle\">MD</text><text class=\"t\" x=\"238\" y=\"32\" text-anchor=\"middle\">LG</text><text class=\"t\" x=\"284\" y=\"32\" text-anchor=\"middle\">XL</text><text class=\"t\" x=\"328\" y=\"32\" text-anchor=\"middle\">XXL</text><text class=\"t\" x=\"147\" y=\"46\" text-anchor=\"middle\">576</text><text class=\"t\" x=\"189\" y=\"46\" text-anchor=\"middle\">768</text><text class=\"t\" x=\"238\" y=\"46\" text-anchor=\"middle\">992</text><text class=\"t\" x=\"284\" y=\"46\" text-anchor=\"middle\">1200</text><text class=\"t\" x=\"328\" y=\"46\" text-anchor=\"middle\">1400</text><path class=\"s-mute\" d=\"M20 60 H350\"/><path class=\"s\" d=\"M147 60 V50 M189 60 V50 M238 60 V50 M284 60 V50 M328 60 V50\"/><text class=\"t\" x=\"20\" y=\"74\">0</text><text class=\"t\" x=\"350\" y=\"74\" text-anchor=\"end\">1500 PX</text><path class=\"s-accent\" d=\"M174 60 V78\"/><text class=\"t\" x=\"174\" y=\"92\" text-anchor=\"middle\">CONTENT BREAKS AT 700</text></svg></div>"
      },
      what: "A breakpoint token names a width at which layout rules change, so the same number is not retyped in a Figma frame, a media query and a test. Bootstrap 5.3 ships six named tiers with fixed pixel values and says outright that they are a subset of common device sizes chosen to hold containers whose widths are multiples of twelve. That honesty is the useful part: named breakpoints are a shared convention, not a measurement of real devices.",
      why: "Shared names make cross-discipline conversation possible, because a designer saying it breaks at large and a developer reading lg are talking about the same thing. Tokenising them also stops the slow accumulation of one-off widths that nobody can rationalise later.",
      how: [
        "Keep the token list short and let content decide any extra adjustments locally.",
        "Name tiers by size, not by device, since medium is honest and tablet is not.",
        "Generate the media queries from the tokens rather than typing the numbers again.",
        "Prefer container queries for component-level behaviour and keep breakpoints for page layout."
      ],
      example: "Bootstrap 5.3 defines sm at 576px, md at 768px, lg at 992px, xl at 1200px and xxl at 1400px, with extra small covering anything below 576px.",
      numbers: "Bootstrap 5.3 grid breakpoints: xs 0, sm 576px, md 768px, lg 992px, xl 1200px, xxl 1400px.",
      pitfall: "Treating a framework's tiers as facts about hardware. They are a grid convention, and copying them into a product whose content breaks at 700px just leaves you with a broken layout at a tidy number.",
      source: "Bootstrap 5.3 documentation, Layout: Breakpoints",
      verify: { status: "verified", note: "Values and the stated rationale about multiples of twelve were read from the Bootstrap 5.3 breakpoints documentation this session." },
      belongs: { verdict: "core", why: "Breakpoints are shared vocabulary between design and code, and naming them is how the two stay in step." },
      related: [792, 794, 761]
    },

    {
      n: 771,
      title: "Component API design",
      aka: ["Component interface", "Component contract"],
      oneLine: "Deciding what a component lets people change, and what it refuses to expose.",
      demo: {
        caption: "Left exposes fourteen booleans, so most of its 16,384 combinations were never drawn. Right exposes three, and all six are drawn.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Fourteen booleans</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">loading / disabled / danger / ghost</span><span class=\"db-input\">block / icon / iconRight / rounded</span><span class=\"db-input\">compact / elevated / outlined / muted</span><span class=\"db-input\">uppercase / fullWidth</span><span class=\"db-note\">14 FLAGS = 16,384 COMBINATIONS</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three properties</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">tone: neutral / primary / danger</span><span class=\"db-input\">size: small / medium</span><span class=\"db-input\">label: string</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Save</span><span class=\"db-btn db-btn--sm\">Save</span><span class=\"db-btn db-btn--danger db-btn--sm\">Save</span></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost\">Save</span><span class=\"db-btn\">Save</span><span class=\"db-btn db-btn--danger\">Save</span></div><span class=\"db-note\">6 STATES, ALL DRAWN</span></div></div></div></div>"
      },
      what: "Every shared component has a public surface: the properties a product team can set, the content they can pass in, the states it will handle. In React that surface is the props object, which the documentation describes as how components communicate, with any nested content arriving as a children prop. In Figma the same surface appears as component properties and variant properties. Designing it means deciding what is configurable and what is fixed, and the second half of that sentence is the part teams skip.",
      why: "The API is the promise. Anything you expose you have to support and cannot quietly change, so a small surface keeps you free to rework the inside later. It also shapes behaviour, since people build what the props allow and route around what they do not.",
      how: [
        "Start from the real cases you have, not the ones you imagine, and add properties when a second product needs them.",
        "Name properties after intent, such as tone or emphasis, rather than after appearance.",
        "Keep the design tool properties and the code props in the same vocabulary, so a handover is not a translation.",
        "Refuse styling escape hatches by default; a className that lets anyone repaint the component is an API you can never change."
      ],
      example: "React's own documentation demonstrates a Card component whose entire signature is children, and describes such a component as having a hole that the parent fills with arbitrary content, which it recommends for visual wrappers such as panels and grids.",
      numbers: "",
      pitfall: "Prop explosion. A button with fourteen booleans can express combinations nobody designed, and half of them look broken.",
      source: "React documentation, Passing Props to a Component; Figma documentation on variants and component properties",
      verify: { status: "verified", note: "Checked the React docs on props and children this session, which open with the line that React components use props to communicate with each other and carry the children-only Card example; the earlier draft claimed that example controls padding and elevation, which the docs do not say, so the example has been rewritten to what is actually there. Figma's variants and component properties help article was read for the design-tool side. The phrase component API design is common practice language rather than a named principle with an origin I could trace." },
      belongs: { verdict: "core", why: "In a system, the component's interface is the design deliverable as much as its appearance is." },
      related: [772, 773, 786]
    },

    {
      n: 772,
      title: "Variants, props and slots",
      aka: ["Component properties", "Composition points"],
      oneLine: "The three ways a component flexes: preset versions, settable values and content holes.",
      demo: {
        caption: "One component, three levers: presets drawn in advance, a value passed in, and a dashed hole the caller fills.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">VARIANT / A PRESET, DRAWN IN ADVANCE</span><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Primary</span><span class=\"db-btn db-btn--ghost\">Secondary</span><span class=\"db-btn db-btn--quiet\">Quiet</span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">PROP / A VALUE THE CALLER PASSES IN</span><span class=\"db-input\">label = Save changes / disabled = false</span><div class=\"db-row db-row--tight\"><span class=\"db-arrow\">&gt;</span><span class=\"db-btn\">Save changes</span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">SLOT / A HOLE THE CALLER FILLS</span><div class=\"db-card\"><div class=\"db-row db-row--nowrap\"><span class=\"db-sq db-sq--accent\"></span><div class=\"db-card db-fill\" style=\"border-style:dashed\">Payment failed. <span class=\"db-btn db-btn--sm db-btn--quiet\">Update card</span></div></div></div></div></div></div>"
      },
      what: "A variant is a preset version of a component, drawn and approved in advance. Figma's guidance is that all variants in a set should use the same properties and values, with each variant a unique combination of them, and that you do not need a variant for every possible combination. A prop is a value the caller passes in, such as a label or a disabled state. A slot is a hole the caller fills with arbitrary content; React calls the main one children, and other frameworks use the word slot directly. Most components need all three, and the design work is deciding which flexibility belongs in which mechanism.",
      why: "Variants keep quality high because someone drew each one. Props keep the surface small. Slots handle the cases you cannot enumerate, such as an alert that sometimes contains a link. Splitting them properly stops you generating hundreds of variants for combinations nobody asked for.",
      how: [
        "Use variants for a closed set with a real visual difference, such as emphasis levels.",
        "Use props for open values and states, such as label text or loading.",
        "Use a slot when the content is genuinely the caller's business, and constrain it with layout rather than rules in a document.",
        "Count the combinations before adding another variant dimension: four properties with three values each is 81 variants to keep in step."
      ],
      example: "A Figma component set for a button with emphasis, size and state properties produces one component in the library while the code exposes the same three as props.",
      numbers: "",
      pitfall: "Slotting everything. A component that is only a wrapper with an open slot gives no guarantee at all, which is a pattern library pretending to be a component library.",
      source: "Figma documentation on variants and component properties; React documentation on props and children",
      verify: { status: "verified", note: "The variant guidance was read from Figma's Create and use variants help article this session, which words it as should rather than must; the earlier draft said Figma requires it, which overstates the source. The children behaviour comes from the React docs. I did not re-read the Web Components slot specification, so no claims are made about its exact syntax." },
      belongs: { verdict: "core", why: "These are the three levers a system designer actually pulls when deciding how much freedom to hand out." },
      related: [771, 773, 774]
    },

    {
      n: 773,
      title: "Composition over configuration",
      aka: ["Build from parts, not options"],
      oneLine: "Prefer small parts a team can assemble over one component with many settings.",
      demo: {
        caption: "Left needs a new prop for every layout. Right rearranges the same three parts, so the second card needs no new code.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One component, many props</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">hasHeader / hasMedia / mediaTop</span><span class=\"db-input\">hasBadge / actionCount / dense</span><span class=\"db-input\">headerRight / mediaAspect</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">HEADER</span><div class=\"db-bar db-bar--ink\"></div><span class=\"db-note\">MEDIA</span><div class=\"db-block\"></div><span class=\"db-note\">ACTIONS</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Open</span></div></div></div><span class=\"db-note\">A NEW LAYOUT NEEDS A NEW PROP</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three parts, arranged</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">CardHeader / CardMedia / CardActions</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">HEADER</span><div class=\"db-bar db-bar--ink\"></div><span class=\"db-note\">MEDIA</span><div class=\"db-block\"></div><span class=\"db-note\">ACTIONS</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Open</span></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">MEDIA</span><div class=\"db-block\"></div><span class=\"db-note\">HEADER</span><div class=\"db-bar db-bar--ink\"></div><span class=\"db-note\">ACTIONS</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Open</span></div></div></div><span class=\"db-note\">SECOND ARRANGEMENT, NO NEW CODE</span></div></div></div></div>"
      },
      what: "The idea is that a family of small components which fit together will cover more real cases than a single component with an option for each case. Rather than a Card with twenty props for headers, media, actions and badges, you publish Card, CardHeader, CardMedia and CardActions and let teams arrange them. The slogan has no single traceable origin. Its documented ancestors are composition over inheritance, from Gamma, Helm, Johnson and Vlissides in Design Patterns (1994), and convention over configuration from the Ruby on Rails world.",
      why: "Composed parts fail more gracefully, because a case you never anticipated becomes an arrangement rather than a feature request. It also keeps the system team out of the queue: product teams can build the odd layout themselves without waiting for a release.",
      how: [
        "When a third boolean appears on a component, look for the part that wants extracting.",
        "Publish the sub-parts as named components with their own tokens, not as undocumented internals.",
        "Give the composed pieces layout rules so an unusual arrangement still lines up.",
        "Keep a configured version of the two or three most common arrangements, so simple cases stay one line."
      ],
      example: "Material 3's card and list guidance is written around named regions rather than a single component with a switch for every layout, which is the same split in practice.",
      numbers: "",
      pitfall: "Composing so far down that using the system becomes assembly work. If building a standard card takes six components and correct nesting, most teams will copy the markup once and never update it.",
      source: "Origin unclear as a named design-system principle; nearest documented ancestors are Design Patterns (Gamma and others, 1994) and convention over configuration from Ruby on Rails",
      verify: { status: "disputed", note: "I could not find a primary source that coined composition over configuration. Composition over inheritance is documented as coming from Design Patterns (1994), which I checked, and convention over configuration comes from Rails; the design-system phrase appears to be a blend of the two and circulates as practitioner folklore." },
      belongs: { verdict: "adjacent", why: "It is a software design principle, but it maps directly onto a design decision: how much of a layout the system draws versus how much a product team assembles." },
      related: [771, 772, 774]
    },

    {
      n: 774,
      title: "Atoms, molecules, organisms, templates, pages",
      aka: ["Atomic design"],
      oneLine: "Brad Frost's five-stage way of describing interfaces as parts assembled into wholes.",
      demo: {
        caption: "Read down: loose parts, joined into a form, set inside a header, laid into a page shell, then filled with real content.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 236\"><text class=\"t\" x=\"0\" y=\"20\">ATOMS</text><rect class=\"f-mute\" x=\"72\" y=\"13\" width=\"30\" height=\"6\"/><rect class=\"s\" x=\"112\" y=\"6\" width=\"86\" height=\"18\" rx=\"2\"/><rect class=\"f\" x=\"210\" y=\"6\" width=\"44\" height=\"18\" rx=\"2\"/><text class=\"t\" x=\"262\" y=\"20\">3 PARTS, LOOSE</text><text class=\"t\" x=\"0\" y=\"58\">MOLECULE</text><rect class=\"s-mute\" x=\"72\" y=\"38\" width=\"200\" height=\"32\" rx=\"2\"/><rect class=\"f-mute\" x=\"80\" y=\"44\" width=\"30\" height=\"5\"/><rect class=\"s\" x=\"80\" y=\"53\" width=\"110\" height=\"12\" rx=\"2\"/><rect class=\"f\" x=\"198\" y=\"53\" width=\"62\" height=\"12\" rx=\"2\"/><text class=\"t\" x=\"280\" y=\"58\">SEARCH FORM</text><text class=\"t\" x=\"0\" y=\"100\">ORGANISM</text><rect class=\"s-mute\" x=\"72\" y=\"80\" width=\"270\" height=\"32\" rx=\"2\"/><rect class=\"f\" x=\"80\" y=\"88\" width=\"16\" height=\"16\"/><rect class=\"f-mute\" x=\"104\" y=\"93\" width=\"20\" height=\"5\"/><rect class=\"f-mute\" x=\"128\" y=\"93\" width=\"20\" height=\"5\"/><rect class=\"f-mute\" x=\"152\" y=\"93\" width=\"20\" height=\"5\"/><rect class=\"s-mute\" x=\"180\" y=\"86\" width=\"154\" height=\"20\" rx=\"2\"/><rect class=\"s\" x=\"185\" y=\"90\" width=\"100\" height=\"12\" rx=\"2\"/><rect class=\"f\" x=\"291\" y=\"90\" width=\"38\" height=\"12\" rx=\"2\"/><text class=\"t\" x=\"0\" y=\"150\">TEMPLATE</text><text class=\"t\" x=\"0\" y=\"162\">STRUCTURE</text><rect class=\"s-mute\" x=\"72\" y=\"122\" width=\"270\" height=\"48\" rx=\"2\"/><rect class=\"f-mute\" x=\"76\" y=\"126\" width=\"262\" height=\"10\"/><rect class=\"s-mute\" x=\"76\" y=\"140\" width=\"82\" height=\"26\"/><rect class=\"s-mute\" x=\"164\" y=\"140\" width=\"82\" height=\"26\"/><rect class=\"s-mute\" x=\"252\" y=\"140\" width=\"86\" height=\"26\"/><text class=\"t\" x=\"0\" y=\"208\">PAGE</text><text class=\"t\" x=\"0\" y=\"220\">REAL COPY</text><rect class=\"s-mute\" x=\"72\" y=\"180\" width=\"270\" height=\"48\" rx=\"2\"/><rect class=\"f-mute\" x=\"76\" y=\"184\" width=\"262\" height=\"10\"/><rect class=\"s-mute\" x=\"76\" y=\"198\" width=\"82\" height=\"26\"/><rect class=\"f-mute\" x=\"80\" y=\"202\" width=\"68\" height=\"4\"/><rect class=\"f-mute\" x=\"80\" y=\"209\" width=\"74\" height=\"4\"/><rect class=\"f-mute\" x=\"80\" y=\"216\" width=\"46\" height=\"4\"/><rect class=\"s-mute\" x=\"164\" y=\"198\" width=\"82\" height=\"26\"/><rect class=\"f-mute\" x=\"168\" y=\"202\" width=\"72\" height=\"4\"/><rect class=\"f-mute\" x=\"168\" y=\"209\" width=\"58\" height=\"4\"/><rect class=\"f-mute\" x=\"168\" y=\"216\" width=\"66\" height=\"4\"/><rect class=\"s-mute\" x=\"252\" y=\"198\" width=\"86\" height=\"26\"/><rect class=\"f-mute\" x=\"256\" y=\"202\" width=\"76\" height=\"4\"/><rect class=\"f-mute\" x=\"256\" y=\"209\" width=\"68\" height=\"4\"/><rect class=\"f-mute\" x=\"256\" y=\"216\" width=\"52\" height=\"4\"/></svg></div>"
      },
      what: "Brad Frost published atomic design on 10 June 2013 and expanded it into a book in 2016. Atoms are the basic building blocks: form labels, inputs, buttons, plus abstract elements such as colour palettes and fonts. Molecules are small groups of atoms bonded together. Organisms are groups of molecules forming a distinct section of an interface. Templates are organisms arranged into a page-level layout, and pages are specific instances of templates with real content in place. Frost describes the point as assembling rather than deconstructing.",
      why: "The value is a shared vocabulary for talking about scale, and a reminder that the same button appears inside a search form, inside a header and inside a checkout page. It also separates two questions that teams usually tangle: is this part right, and does this arrangement work with real content.",
      how: [
        "Use the stages as a way to name conversations, not as folder structure you must obey.",
        "Insist on the pages stage: review templates filled with the longest, ugliest real content you have.",
        "Push shared decisions down to the smallest level that owns them, so a fix lands everywhere at once.",
        "Let a team rename the stages if the chemistry metaphor is getting in the way of the work."
      ],
      example: "A search form is the standard illustration: a label, an input and a button are atoms, the search form is a molecule, and a header containing logo, navigation and that form is an organism.",
      numbers: "Five stages: atoms, molecules, organisms, templates, pages.",
      pitfall: "Endless boundary arguments. Teams lose weeks deciding whether a card is a molecule or an organism, which produces no better interface.",
      source: "Brad Frost, Atomic Design, blog post (10 June 2013) and Atomic Design, book (2016)",
      verify: { status: "verified", note: "Read Frost's original post this session, dated 10 June 2013, for the five stage definitions and his line that by assembling rather than deconstructing, we're crafting a system right out of the gate instead of cherry picking patterns after the fact. The post is titled Atomic Design, not Atomic Web Design; the URL slug reads atomic-web-design, which is where the mistitled citations come from, and an earlier draft of this entry repeated it. Frost's framing is bottom-up assembly; he does not present the stages as a strict linear process." },
      belongs: { verdict: "core", why: "It is the most widely used shared vocabulary for component scale, and it changed how teams organise interface work." },
      related: [772, 775, 9774]
    },

    {
      n: 9774,
      title: "Interface inventory",
      aka: ["UI audit"],
      oneLine: "Screenshotting and grouping every existing UI part to see what you actually have.",
      demo: {
        caption: "Every primary button found in one product, lined up together. The count and the near-misses are the whole argument.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><span class=\"db-note\">PRIMARY ACTION, AS FOUND: ELEVEN VARIATIONS</span><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Save</span><span class=\"db-btn\" style=\"border-radius:14px\">Save</span><span class=\"db-btn db-btn--sm\">Save</span><span class=\"db-btn db-btn--lg\">Save</span><span class=\"db-btn db-btn--ghost\">Save</span><span class=\"db-btn db-btn--ghost\" style=\"border-radius:14px\">SAVE</span><span class=\"db-btn\" style=\"text-transform:uppercase;letter-spacing:0.14em\">Save</span><span class=\"db-btn db-btn--quiet\">Save</span><span class=\"db-btn\" style=\"border-radius:0\">Save changes</span><span class=\"db-btn db-btn--danger\">Save</span><span class=\"db-btn\" style=\"padding:11px 26px\">Submit</span></div><span class=\"db-note\">VARIES BY RADIUS, SIZE, CASE, PADDING AND WORDING</span></div></div>"
      },
      what: "Brad Frost defines an interface inventory as a comprehensive collection of the bits and pieces that make up your interface. You go through the product, screenshot every button, form field, heading, card and message, sort the screenshots into categories, and present the result. It is deliberately manual, because the value is in seeing every button style the product uses lined up on one slide. Frost published the technique in July 2013, and Kholmatova's book treats the same exercise as the starting point for a pattern library.",
      why: "An inventory turns a vague sense of inconsistency into evidence, which is usually what gets the system funded. It also sets the real scope, since you cannot decide what a system should contain until you know what already exists.",
      how: [
        "Screenshot from the live product, not from design files, because the two disagree.",
        "Group by function, so every element that acts as a primary action lands in one place.",
        "Count the variations and put the number on the slide; the count is the argument.",
        "Redo it after a year to measure whether the system is actually replacing the old parts."
      ],
      example: "Frost's own write-up screen-grabs the button variations from a few pages of his bank, PNC, then sets them against the same inventory for Etsy, a company he says maintains a style guide and pattern library, and lets the two slides make the argument.",
      numbers: "",
      pitfall: "Doing the inventory and stopping there. A slide deck of inconsistencies with no owner and no roadmap becomes a document people quote at each other for two years.",
      source: "Brad Frost, Interface Inventory (10 July 2013); Alla Kholmatova, Design Systems (2017)",
      verify: { status: "verified", note: "Read Frost's Interface Inventory post this session, dated 10 July 2013, for the definition, the screenshot-and-categorise method and the PNC and Etsy comparison, both of which he names. Kholmatova's book listing confirms a purpose-directed interface audit as part of her approach to setting up a pattern library." },
      belongs: { verdict: "core", why: "It is the standard first step in building a system and the only reliable way to size the job; the master list has no equivalent entry." },
      related: [774, 784, 788]
    },

    {
      n: 775,
      title: "Single source of truth",
      aka: ["SSOT"],
      oneLine: "Each decision is mastered in exactly one place and everything else refers to it.",
      demo: {
        caption: "Left, two masters holding almost the same blue. Right, one file generating three platforms, so the three cannot disagree.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Two masters</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 120\"><rect class=\"s-mute\" x=\"2\" y=\"8\" width=\"74\" height=\"30\" rx=\"2\"/><text class=\"t\" x=\"39\" y=\"21\" text-anchor=\"middle\">FIGMA</text><text class=\"t\" x=\"39\" y=\"32\" text-anchor=\"middle\">#2F6BFF</text><rect class=\"s-mute\" x=\"94\" y=\"8\" width=\"74\" height=\"30\" rx=\"2\"/><text class=\"t\" x=\"131\" y=\"21\" text-anchor=\"middle\">CODE</text><text class=\"t\" x=\"131\" y=\"32\" text-anchor=\"middle\">#2E6AF6</text><path class=\"s-mute\" d=\"M39 38 V56 H70 V70\"/><path class=\"f-mute\" d=\"M70 76 l-3.5 -6 h7 Z\"/><path class=\"s-mute\" d=\"M131 38 V56 H100 V70\"/><path class=\"f-mute\" d=\"M100 76 l-3.5 -6 h7 Z\"/><rect class=\"s\" x=\"44\" y=\"76\" width=\"82\" height=\"26\" rx=\"2\"/><text class=\"t\" x=\"85\" y=\"93\" text-anchor=\"middle\">PRODUCT</text><text class=\"t\" x=\"85\" y=\"116\" text-anchor=\"middle\">TWO MASTERS, ONE DRIFTS</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One master</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 120\"><rect class=\"s-accent\" x=\"34\" y=\"8\" width=\"102\" height=\"30\" rx=\"2\"/><text class=\"t\" x=\"85\" y=\"21\" text-anchor=\"middle\">TOKENS.JSON</text><text class=\"t\" x=\"85\" y=\"32\" text-anchor=\"middle\">#2F6BFF</text><path class=\"s-mute\" d=\"M85 38 V58 H28 V70\"/><path class=\"f-mute\" d=\"M28 76 l-3.5 -6 h7 Z\"/><path class=\"s-mute\" d=\"M85 38 V70\"/><path class=\"f-mute\" d=\"M85 76 l-3.5 -6 h7 Z\"/><path class=\"s-mute\" d=\"M85 38 V58 H142 V70\"/><path class=\"f-mute\" d=\"M142 76 l-3.5 -6 h7 Z\"/><rect class=\"s-mute\" x=\"2\" y=\"76\" width=\"53\" height=\"28\" rx=\"2\"/><text class=\"t\" x=\"28\" y=\"89\" text-anchor=\"middle\">CSS</text><text class=\"t\" x=\"28\" y=\"100\" text-anchor=\"middle\">#2F6BFF</text><rect class=\"s-mute\" x=\"59\" y=\"76\" width=\"52\" height=\"28\" rx=\"2\"/><text class=\"t\" x=\"85\" y=\"89\" text-anchor=\"middle\">XML</text><text class=\"t\" x=\"85\" y=\"100\" text-anchor=\"middle\">#2F6BFF</text><rect class=\"s-mute\" x=\"116\" y=\"76\" width=\"52\" height=\"28\" rx=\"2\"/><text class=\"t\" x=\"142\" y=\"89\" text-anchor=\"middle\">SWIFT</text><text class=\"t\" x=\"142\" y=\"100\" text-anchor=\"middle\">#2F6BFF</text><text class=\"t\" x=\"85\" y=\"116\" text-anchor=\"middle\">GENERATED, NOT MAINTAINED</text></svg></div></div></div>"
      },
      what: "The term comes from information management, where it means structuring data so every element is edited in only one place. Applied to a design system, the source of truth for a colour is the token file, for a component's behaviour it is the coded component, and for usage it is the documentation generated from both. Everything else is a copy that should be generated rather than maintained. Storybook makes the claim explicitly for itself, listing among its benefits that Storybook is the single source of truth for your UI.",
      why: "Copies drift, and drift is what people mean when they say the design system is out of date. Naming one master per decision tells you which artefact to fix and which ones will follow on their own.",
      how: [
        "Pick the master for each kind of decision and write it down, then generate everything downstream from it.",
        "Never let a Figma library and a code library both be authoritative for the same property.",
        "Make the generated copies obviously generated, with a header saying do not edit.",
        "Give the master a versioned home so a decision has a history you can read."
      ],
      example: "A tokens file built by Style Dictionary into CSS, Android XML and iOS Swift, so a colour change is made once and reaches three platforms in one release.",
      numbers: "",
      pitfall: "Declaring the design file the source of truth while the product ships from code. What ships is the truth, and any claim otherwise just means the documentation is lying politely.",
      source: "Single source of truth as used in information management; Style Dictionary; Storybook documentation",
      verify: { status: "verified", note: "Definition checked against the Wikipedia article on single source of truth, which places it in information management. Storybook's Why Storybook page states the claim as Storybook is the single source of truth for your UI; the earlier draft attributed it to stories rather than to the tool, which is corrected here. Style Dictionary's multi-platform output was read from its own repository." },
      belongs: { verdict: "adjacent", why: "The idea is borrowed from data management, but the design use is specific: one master per decision, with tokens, components and documentation generated from it rather than kept in step by hand." },
      related: [761, 776, 789]
    },

    {
      n: 776,
      title: "Design-code parity",
      aka: ["Design and code in sync"],
      oneLine: "The drawn component and the shipped component behave the same and stay that way.",
      demo: {
        caption: "Same component on both sides. Left, the radius, padding and label all differ; right, the drawing and the build agree.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Drifted</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div><span class=\"db-note\">LIBRARY FILE</span><div class=\"db-row db-row--tight\"><span class=\"db-btn\" style=\"border-radius:3px;padding:7px 14px\">Save</span></div></div><div><span class=\"db-note\">SHIPPED CODE</span><div class=\"db-row db-row--tight\"><span class=\"db-btn\" style=\"border-radius:16px;padding:12px 26px\">Save changes</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">In parity</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div><span class=\"db-note\">LIBRARY FILE</span><div class=\"db-row db-row--tight\"><span class=\"db-btn\" style=\"border-radius:3px;padding:7px 14px\">Save</span></div></div><div><span class=\"db-note\">SHIPPED CODE</span><div class=\"db-row db-row--tight\"><span class=\"db-btn\" style=\"border-radius:3px;padding:7px 14px\">Save</span></div></div></div></div></div></div>"
      },
      what: "Parity means the Figma library, the coded component and the documentation agree on properties, states and values, and keep agreeing after each release. In practice it is maintained by three mechanisms: tokens generated from one definition into both tools, component properties named identically on each side, and a review step that treats a mismatch as a defect. It is a working practice rather than a named principle, and I could not trace it to an origin.",
      why: "When the drawing and the build disagree, every handover turns into an argument about which one is right, and product teams start rebuilding parts themselves. Parity is what lets a designer specify by naming a component instead of redlining it.",
      how: [
        "Generate token values into both the design tool and the codebase from the same file.",
        "Use the same property names and values on both sides, letters and all.",
        "Add a parity check to release: if a prop changed in code, the library file changes in the same release or the release waits.",
        "Publish a visible list of components with their parity status so nobody has to guess."
      ],
      example: "Storybook renders each component in isolation from the shipped code, which gives designers a place to compare the real component against the library file rather than against a screenshot.",
      numbers: "",
      pitfall: "Parity kept by discipline alone. Without generation and a check in the release process, the two sides drift within a couple of sprints and nobody notices until a redesign.",
      source: "Origin unclear; standard practice described in design system documentation such as Storybook's",
      verify: { status: "unverified", note: "I searched for an originating source for design-code parity as a named principle and found none. The mechanisms described here were checked against Storybook's own documentation and the Style Dictionary repository; the framing is mine, drawn from those tools rather than from a cited author." },
      belongs: { verdict: "core", why: "It names the failure mode that kills most design systems in year two, and it is a design responsibility, not only an engineering one." },
      related: [775, 777, 790]
    },

    {
      n: 777,
      title: "Documentation as product",
      aka: ["Docs as a first-class deliverable"],
      oneLine: "Treating the system's documentation as something with users, a backlog and a quality bar.",
      demo: {
        caption: "Two questions place the four kinds: does the page inform action or cognition, and is the reader acquiring or applying skill?",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 152\"><text class=\"t\" x=\"141\" y=\"12\" text-anchor=\"middle\">ACQUISITION OF SKILL</text><text class=\"t\" x=\"287\" y=\"12\" text-anchor=\"middle\">APPLICATION OF SKILL</text><text class=\"t\" x=\"0\" y=\"60\">ACTION</text><text class=\"t\" x=\"0\" y=\"124\">COGNITION</text><rect class=\"s-mute\" x=\"70\" y=\"26\" width=\"142\" height=\"60\" rx=\"2\"/><text class=\"t\" x=\"141\" y=\"52\" text-anchor=\"middle\">TUTORIALS</text><text class=\"t\" x=\"141\" y=\"68\" text-anchor=\"middle\">LEARNING-ORIENTED</text><rect class=\"s-mute\" x=\"216\" y=\"26\" width=\"142\" height=\"60\" rx=\"2\"/><text class=\"t\" x=\"287\" y=\"52\" text-anchor=\"middle\">HOW-TO GUIDES</text><text class=\"t\" x=\"287\" y=\"68\" text-anchor=\"middle\">GOAL-ORIENTED</text><rect class=\"s-mute\" x=\"70\" y=\"90\" width=\"142\" height=\"60\" rx=\"2\"/><text class=\"t\" x=\"141\" y=\"116\" text-anchor=\"middle\">EXPLANATION</text><text class=\"t\" x=\"141\" y=\"132\" text-anchor=\"middle\">UNDERSTANDING-ORIENTED</text><rect class=\"s-mute\" x=\"216\" y=\"90\" width=\"142\" height=\"60\" rx=\"2\"/><text class=\"t\" x=\"287\" y=\"116\" text-anchor=\"middle\">REFERENCE</text><text class=\"t\" x=\"287\" y=\"132\" text-anchor=\"middle\">INFORMATION-ORIENTED</text></svg></div>"
      },
      what: "The claim is that documentation is not a write-up produced after the component; it is the interface most people meet the system through, so it deserves the same care as the components. The slogan itself has no traceable origin. The nearest named framework is Diataxis, created by Daniele Procida, which splits documentation into four kinds according to what the reader needs: tutorials for learning, how-to guides for a task in hand, technical reference for looking things up, and explanation for understanding. Component tools help with the reference half by generating docs from the code itself.",
      why: "Most people never speak to the system team, so the documentation is the system as far as they are concerned. Splitting it by reader need also stops the usual failure, where a reference page is padded with narrative and a beginner still cannot get started.",
      how: [
        "Write the four kinds separately and do not blend them on one page.",
        "Generate the reference material from code so it cannot go stale silently.",
        "Put the working example first: people copy before they read.",
        "Track documentation in the same backlog as components, and treat an undocumented component as unreleased."
      ],
      example: "Storybook auto-generates documentation from stories, which covers the reference layer while leaving tutorials and explanation to be written deliberately.",
      numbers: "Diataxis defines four documentation types: tutorials, how-to guides, reference and explanation.",
      pitfall: "A beautiful documentation site with no maintenance budget. It looks like commitment for a quarter, then becomes the most confidently wrong artefact in the company.",
      source: "Daniele Procida, Diataxis; Storybook documentation. The phrase documentation as product is of unclear origin",
      verify: { status: "unverified", note: "I could not trace documentation as product to an originating author or publication. Diataxis and its four types were read this session at diataxis.fr, and the colophon names Daniele Procida as its creator, with earlier versions of the ideas published while he was at Divio. Storybook's auto-generated docs claim comes from its own documentation." },
      belongs: { verdict: "adjacent", why: "Overturned from core on review. The slogan has no source, and the only citable content in the entry is Diataxis, a technical-writing framework from software documentation, so this is borrowed material on the same footing as single source of truth (775) and versioning (781), which this section already marks adjacent. The design use is real and specific: the documentation page is where most people meet the component, so how it is written decides whether the drawn design is the one that ships." },
      related: [778, 776, 782]
    },

    {
      n: 778,
      title: "Usage guidelines and do/don't examples",
      aka: ["Paired examples", "Usage rules"],
      oneLine: "Showing the right and wrong use side by side rather than describing them in prose.",
      demo: {
        caption: "The guidance drawn rather than written: five competing buttons marked don't, beside one action, one alternative and an overflow.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Don't</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col\"><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Save</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Duplicate</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Export</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Archive</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Delete</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Do</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col\"><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Save</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Cancel</span><span class=\"db-btn db-btn--sm db-btn--quiet\">More</span></div></div></div></div></div></div>"
      },
      what: "A usage guideline says when to reach for a component, when not to, and what the common mistake looks like. The dominant format is a pair: a picture marked do beside a picture marked don't, each with one sentence. Material 3's button guidance does exactly this, pairing an instruction to use buttons for discrete actions with a warning not to clutter the interface with too many, and to move low-priority actions into overflow menus or icon buttons instead.",
      why: "A picture of the mistake is recognised faster than a rule describing it, because most people arrive at the page having already half-built the wrong thing. Pairs also settle arguments: it is much harder to disagree with a marked-up screenshot than with a paragraph of guidance.",
      how: [
        "Draw the don't from a real mistake you have seen in the product, not an invented one.",
        "Mark the don't clearly enough that a skim reader cannot mistake it for the recommendation.",
        "Keep each caption to one sentence saying what to do, not why the system is designed that way.",
        "Say what to use instead, since a prohibition without an alternative is a request people will ignore."
      ],
      example: "Material 3's buttons guidance publishes the pair: do use buttons for discrete actions, and do not clutter the interface with too many buttons, considering overflow menus or icon buttons for low-priority actions.",
      numbers: "",
      pitfall: "Don'ts that are too pretty. If the bad example is rendered as carefully as the good one, readers skim, copy the wrong image and cite your own documentation back at you.",
      source: "Material Design 3 component guidance, Google; W3C ARIA Authoring Practices Guide (worked examples)",
      verify: { status: "verified", note: "Pulled the do and don't wording from Material 3's button guidelines page this session. The APG was checked for its stated purpose of providing patterns with functional examples and keyboard support guidance." },
      belongs: { verdict: "core", why: "How guidance is presented decides whether it is followed, and paired examples are the format the major systems converged on." },
      related: [777, 783, 786]
    },

    {
      n: 779,
      title: "Contribution model",
      aka: ["Contribution process"],
      oneLine: "The published route by which people outside the core team get work into the system.",
      demo: {
        caption: "Every contribution takes the same five steps. Dot size is how much of each step that size of change needs.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 158\"><text class=\"t\" x=\"0\" y=\"12\">SIZE</text><text class=\"t\" x=\"92\" y=\"12\" text-anchor=\"middle\">PROPOSE</text><text class=\"t\" x=\"151\" y=\"12\" text-anchor=\"middle\">DESIGN</text><text class=\"t\" x=\"210\" y=\"12\" text-anchor=\"middle\">CODE</text><text class=\"t\" x=\"269\" y=\"12\" text-anchor=\"middle\">DOCUMENT</text><text class=\"t\" x=\"328\" y=\"12\" text-anchor=\"middle\">RELEASE</text><path class=\"s-mute\" d=\"M0 20 H360\"/><text class=\"t\" x=\"0\" y=\"47\">FIX</text><circle class=\"f\" cx=\"92\" cy=\"44\" r=\"2.5\"/><circle class=\"f\" cx=\"151\" cy=\"44\" r=\"2.5\"/><circle class=\"f\" cx=\"210\" cy=\"44\" r=\"2.5\"/><circle class=\"f\" cx=\"269\" cy=\"44\" r=\"2.5\"/><circle class=\"f\" cx=\"328\" cy=\"44\" r=\"2.5\"/><text class=\"t\" x=\"0\" y=\"75\">SMALL</text><circle class=\"f\" cx=\"92\" cy=\"72\" r=\"4.5\"/><circle class=\"f\" cx=\"151\" cy=\"72\" r=\"4.5\"/><circle class=\"f\" cx=\"210\" cy=\"72\" r=\"4.5\"/><circle class=\"f\" cx=\"269\" cy=\"72\" r=\"4.5\"/><circle class=\"f\" cx=\"328\" cy=\"72\" r=\"4.5\"/><text class=\"t\" x=\"0\" y=\"103\">LARGE</text><circle class=\"f\" cx=\"92\" cy=\"100\" r=\"6.5\"/><circle class=\"f\" cx=\"151\" cy=\"100\" r=\"6.5\"/><circle class=\"f\" cx=\"210\" cy=\"100\" r=\"6.5\"/><circle class=\"f\" cx=\"269\" cy=\"100\" r=\"6.5\"/><circle class=\"f\" cx=\"328\" cy=\"100\" r=\"6.5\"/><text class=\"t\" x=\"0\" y=\"131\">FEATURE</text><circle class=\"f\" cx=\"92\" cy=\"128\" r=\"8.5\"/><circle class=\"f\" cx=\"151\" cy=\"128\" r=\"8.5\"/><circle class=\"f\" cx=\"210\" cy=\"128\" r=\"8.5\"/><circle class=\"f\" cx=\"269\" cy=\"128\" r=\"8.5\"/><circle class=\"f\" cx=\"328\" cy=\"128\" r=\"8.5\"/><text class=\"t\" x=\"0\" y=\"154\">SAME FIVE STEPS, WEIGHTED BY SIZE</text></svg></div>"
      },
      what: "Nathan Curtis defines a contribution as any proposal, design, code, documentation or design asset of a new feature, enhancement or fix completed by someone not on the system core team and released through the system for others to reuse. He sorts contributions by size: fixes, small enhancements, large enhancements and new features. The process runs propose, design, code, document, release, with the depth of each step scaled to the size of the contribution, so a colour fix does not carry the same ceremony as a new component.",
      why: "A core team is always outnumbered by the product teams waiting on it, and a published route converts that pressure into help instead of into local workarounds. Sizing the process is what makes it usable, because a single heavyweight path guarantees people go around it.",
      how: [
        "Publish the route, including who decides and how long each step usually takes.",
        "Size the process: a documented fix should be mergeable in a day.",
        "Say what the system will not accept, so contributors do not build something that gets refused at review.",
        "Credit contributors by name in release notes; that is most of the payment they are getting."
      ],
      example: "Curtis sizes the work using alerts: adding one new alert colour is a small enhancement, while dismissibility, descriptions and new positioning such as inline or viewport-locked are large enhancements, and each size gets a correspondingly heavier route through the five steps.",
      numbers: "Four contribution sizes (fixes, small enhancements, large enhancements, new features) and five steps (propose, design, code, document, release).",
      pitfall: "Inviting contributions without funding review. Pull requests pile up unmerged, and the invitation becomes a standing insult to the people who accepted it.",
      source: "Nathan Curtis, Defining Design System Contributions, EightShapes (14 January 2020)",
      verify: { status: "verified", note: "Read Curtis's article this session for the 14 January 2020 date, the definition quoted almost verbatim, the four sizes and the five steps. The alert example replaces an earlier draft example that put words and a review procedure into Curtis's mouth that his article does not contain." },
      belongs: { verdict: "adjacent", why: "The mechanics come from open-source project management, but the design use is specific: it decides whether product teams extend the shared component set or quietly fork it." },
      related: [780, 785, 782]
    },

    {
      n: 780,
      title: "Governance",
      aka: ["Operating model", "Team model"],
      oneLine: "Who decides what goes in the system, who maintains it, and how that is funded.",
      demo: {
        caption: "Three arrangements of one job. Watch where the system sits, and whether the arrows run one way out or both ways.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 100\"><path class=\"s-mute\" d=\"M118 4 V96 M240 4 V96\"/><text class=\"t\" x=\"57\" y=\"10\" text-anchor=\"middle\">SOLITARY</text><rect class=\"s\" x=\"6\" y=\"18\" width=\"102\" height=\"34\" rx=\"2\"/><text class=\"t\" x=\"30\" y=\"39\" text-anchor=\"middle\">TEAM A</text><rect class=\"s-accent\" x=\"56\" y=\"26\" width=\"46\" height=\"18\" rx=\"2\"/><text class=\"t\" x=\"79\" y=\"38\" text-anchor=\"middle\">SYSTEM</text><path class=\"s-mute\" d=\"M79 52 V60 H28 V68\"/><path class=\"f-mute\" d=\"M28 74 l-3.5 -6 h7 Z\"/><path class=\"s-mute\" d=\"M79 52 V60 H86 V68\"/><path class=\"f-mute\" d=\"M86 74 l-3.5 -6 h7 Z\"/><rect class=\"s-mute\" x=\"6\" y=\"74\" width=\"44\" height=\"18\" rx=\"2\"/><text class=\"t\" x=\"28\" y=\"86\" text-anchor=\"middle\">TEAM B</text><rect class=\"s-mute\" x=\"64\" y=\"74\" width=\"44\" height=\"18\" rx=\"2\"/><text class=\"t\" x=\"86\" y=\"86\" text-anchor=\"middle\">TEAM C</text><text class=\"t\" x=\"179\" y=\"10\" text-anchor=\"middle\">CENTRALISED</text><rect class=\"s-accent\" x=\"151\" y=\"26\" width=\"56\" height=\"18\" rx=\"2\"/><text class=\"t\" x=\"179\" y=\"38\" text-anchor=\"middle\">SYSTEM</text><path class=\"s-mute\" d=\"M179 44 V58 H140 V68\"/><path class=\"f-mute\" d=\"M140 74 l-3.5 -6 h7 Z\"/><path class=\"s-mute\" d=\"M179 44 V68\"/><path class=\"f-mute\" d=\"M179 74 l-3.5 -6 h7 Z\"/><path class=\"s-mute\" d=\"M179 44 V58 H218 V68\"/><path class=\"f-mute\" d=\"M218 74 l-3.5 -6 h7 Z\"/><rect class=\"s-mute\" x=\"124\" y=\"74\" width=\"32\" height=\"18\" rx=\"2\"/><text class=\"t\" x=\"140\" y=\"86\" text-anchor=\"middle\">A</text><rect class=\"s-mute\" x=\"163\" y=\"74\" width=\"32\" height=\"18\" rx=\"2\"/><text class=\"t\" x=\"179\" y=\"86\" text-anchor=\"middle\">B</text><rect class=\"s-mute\" x=\"202\" y=\"74\" width=\"32\" height=\"18\" rx=\"2\"/><text class=\"t\" x=\"218\" y=\"86\" text-anchor=\"middle\">C</text><text class=\"t\" x=\"303\" y=\"10\" text-anchor=\"middle\">FEDERATED</text><rect class=\"s-mute\" x=\"246\" y=\"18\" width=\"32\" height=\"18\" rx=\"2\"/><text class=\"t\" x=\"262\" y=\"30\" text-anchor=\"middle\">A</text><rect class=\"s-mute\" x=\"287\" y=\"18\" width=\"32\" height=\"18\" rx=\"2\"/><text class=\"t\" x=\"303\" y=\"30\" text-anchor=\"middle\">B</text><rect class=\"s-mute\" x=\"328\" y=\"18\" width=\"32\" height=\"18\" rx=\"2\"/><text class=\"t\" x=\"344\" y=\"30\" text-anchor=\"middle\">C</text><path class=\"s-mute\" d=\"M262 44 V50 H286 V56\"/><path class=\"f-mute\" d=\"M286 62 l-3.5 -6 h7 Z\"/><path class=\"f-mute\" d=\"M262 38 l-3.5 6 h7 Z\"/><path class=\"s-mute\" d=\"M303 44 V56\"/><path class=\"f-mute\" d=\"M303 62 l-3.5 -6 h7 Z\"/><path class=\"f-mute\" d=\"M303 38 l-3.5 6 h7 Z\"/><path class=\"s-mute\" d=\"M344 44 V50 H320 V56\"/><path class=\"f-mute\" d=\"M320 62 l-3.5 -6 h7 Z\"/><path class=\"f-mute\" d=\"M344 38 l-3.5 6 h7 Z\"/><rect class=\"s-accent\" x=\"272\" y=\"62\" width=\"62\" height=\"18\" rx=\"2\"/><text class=\"t\" x=\"303\" y=\"74\" text-anchor=\"middle\">SYSTEM</text></svg></div>"
      },
      what: "Governance is the boring question that decides whether a system survives. Nathan Curtis set out three team models in 2015. Solitary: one team builds a library and offers it to others while prioritising its own product. Centralised: a dedicated team produces the system for everyone but does not design products itself. Federated: representatives from several product teams make system decisions alongside their day jobs. Each trades context against consistency, and Curtis notes federated designers must transcend tribal affiliation for the greater good of a cohesive user journey.",
      why: "Without a named model, decisions default to whoever shouts loudest in the moment, and the system fills with parts that serve one product. Naming the model also names the failure you are accepting, since a centralised team will lack product context and a federated one will move slowly.",
      how: [
        "Pick a model out loud and revisit it when the number of consuming teams changes.",
        "Name the decider for each kind of decision, not just an amorphous team.",
        "Fund maintenance as continuing work, not as a project with an end date.",
        "Write down the criteria for what belongs in the system so refusals are not personal."
      ],
      example: "A centralised system team of five, funded for consecutive quarters, publishing releases on a schedule while product teams request components through a contribution route.",
      numbers: "Three team models: solitary, centralised, federated.",
      pitfall: "A federated model on top of full workloads. Everybody nods in the meeting, nobody has time to do the work, and the system stalls with three half-built components.",
      source: "Nathan Curtis, Team Models for Scaling a Design System, EightShapes (17 September 2015)",
      verify: { status: "verified", note: "Read Curtis's article this session for the three models, their definitions and the quoted line about tribal affiliation." },
      belongs: { verdict: "adjacent", why: "It is organisational management, but design-specific: the model determines whose visual decisions become everyone's defaults." },
      related: [779, 782, 785]
    },

    {
      n: 781,
      title: "Versioning and deprecation",
      aka: ["Semantic versioning", "Managed retirement"],
      oneLine: "Numbering releases so consumers know what will break, and retiring parts on a published path.",
      demo: {
        caption: "Version numbers along the top. The retiring component stays usable through two minor releases and only disappears at the major.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 104\"><text class=\"t\" x=\"98\" y=\"12\" text-anchor=\"middle\">2.4.0</text><text class=\"t\" x=\"182\" y=\"12\" text-anchor=\"middle\">2.5.0</text><text class=\"t\" x=\"266\" y=\"12\" text-anchor=\"middle\">2.6.0</text><text class=\"t\" x=\"340\" y=\"12\" text-anchor=\"middle\">3.0.0</text><path class=\"s-mute\" d=\"M84 20 H356\"/><path class=\"s-mute\" d=\"M98 16 V24 M182 16 V24 M266 16 V24\"/><path class=\"s-accent\" d=\"M340 16 V24\"/><text class=\"t\" x=\"0\" y=\"45\">TABS</text><rect class=\"f\" x=\"84\" y=\"34\" width=\"98\" height=\"14\"/><rect class=\"s-mute\" x=\"182\" y=\"34\" width=\"158\" height=\"14\"/><text class=\"t\" x=\"0\" y=\"71\">TABLIST</text><rect class=\"f\" x=\"182\" y=\"60\" width=\"174\" height=\"14\"/><path class=\"s-accent\" d=\"M182 28 V84 M340 28 V84\"/><text class=\"t\" x=\"182\" y=\"96\" text-anchor=\"middle\">DEPRECATED</text><text class=\"t\" x=\"340\" y=\"96\" text-anchor=\"end\">REMOVED</text></svg></div>"
      },
      what: "Most systems version with semantic versioning, written by Tom Preston-Werner: increment MAJOR for incompatible API changes, MINOR for functionality added in a backward compatible way, and PATCH for backward compatible bug fixes. Deprecation is the other half. Rather than deleting a component, you mark it deprecated, name its replacement, keep it working for a stated period and then remove it in a major release. The Design Tokens Format Module carries this through to tokens, which can hold a deprecation status alongside their type and description.",
      why: "A version number is a promise about upgrade cost, and it lets a product team decide when to take the work. A published deprecation path is what makes removal possible at all, because parts that are simply deleted teach everyone to pin an old version and stop updating.",
      how: [
        "Follow semantic versioning honestly: a renamed prop is a major change even if it feels tidy.",
        "Never remove in the same release as you deprecate; overlap the old and new for a named period.",
        "Put the replacement in the deprecation notice, in the code, the design file and the docs.",
        "Publish release notes a product designer can read, not only a commit log."
      ],
      example: "A tokens file where a retired colour keeps its entry with a deprecation flag pointing at the replacement, so build tooling can warn every consumer before the value disappears.",
      numbers: "Semantic versioning: MAJOR for incompatible API changes, MINOR for backward compatible additions, PATCH for backward compatible fixes.",
      pitfall: "Breaking changes shipped as minor releases. It happens once, teams stop trusting the version number, and after that everyone pins and the system fragments.",
      source: "Tom Preston-Werner, Semantic Versioning (semver.org); Design Tokens Format Module, Design Tokens Community Group",
      verify: { status: "verified", note: "Read semver.org this session for Tom Preston-Werner's authorship and the three increment rules, which are quoted almost verbatim. The draft Design Tokens Format Module defines a $deprecated property taking true, false or a string explaining the deprecation; it is a draft, so treat it as a direction of travel rather than a settled standard." },
      belongs: { verdict: "adjacent", why: "Borrowed wholesale from software release management, but designers depend on it: it is how a visual change reaches products without silently breaking them." },
      related: [784, 776, 779]
    },

    {
      n: 782,
      title: "Adoption measurement",
      aka: ["System adoption metrics"],
      oneLine: "Counting how much of the product is actually built from the system, and where it is not.",
      demo: {
        caption: "Left, one number for the whole estate. Right, the same estate by level, showing which product stalled and where.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One percentage</span><div class=\"db-stage db-stage--tight\"><div class=\"db-centre\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:44px\">50%</span><span class=\"db-note\">ADOPTED</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Levels per product</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 124\"><text class=\"t\" x=\"0\" y=\"12\">LEVEL</text><text class=\"t\" x=\"66\" y=\"12\" text-anchor=\"middle\">1</text><text class=\"t\" x=\"106\" y=\"12\" text-anchor=\"middle\">2</text><text class=\"t\" x=\"146\" y=\"12\" text-anchor=\"middle\">3</text><path class=\"s-mute\" d=\"M0 18 H166\"/><text class=\"t\" x=\"0\" y=\"41\">SHOP</text><rect class=\"f\" x=\"48\" y=\"30\" width=\"36\" height=\"14\" rx=\"1\"/><rect class=\"f\" x=\"88\" y=\"30\" width=\"36\" height=\"14\" rx=\"1\"/><rect class=\"f\" x=\"128\" y=\"30\" width=\"36\" height=\"14\" rx=\"1\"/><text class=\"t\" x=\"0\" y=\"61\">ACCOUNT</text><rect class=\"f\" x=\"48\" y=\"50\" width=\"36\" height=\"14\" rx=\"1\"/><rect class=\"f\" x=\"88\" y=\"50\" width=\"36\" height=\"14\" rx=\"1\"/><rect class=\"s-mute\" x=\"128\" y=\"50\" width=\"36\" height=\"14\" rx=\"1\"/><text class=\"t\" x=\"0\" y=\"81\">ADMIN</text><rect class=\"f\" x=\"48\" y=\"70\" width=\"36\" height=\"14\" rx=\"1\"/><rect class=\"s-mute\" x=\"88\" y=\"70\" width=\"36\" height=\"14\" rx=\"1\"/><rect class=\"s-mute\" x=\"128\" y=\"70\" width=\"36\" height=\"14\" rx=\"1\"/><text class=\"t\" x=\"0\" y=\"101\">LEGACY</text><rect class=\"s-mute\" x=\"48\" y=\"90\" width=\"36\" height=\"14\" rx=\"1\"/><rect class=\"s-mute\" x=\"88\" y=\"90\" width=\"36\" height=\"14\" rx=\"1\"/><rect class=\"s-mute\" x=\"128\" y=\"90\" width=\"36\" height=\"14\" rx=\"1\"/><text class=\"t\" x=\"0\" y=\"118\">SHOWS WHERE IT STALLED</text></svg></div></div></div>"
      },
      what: "Nathan Curtis published a measurement approach in 2017 built on objectives and key results rather than a single number. He separates initiated adoption, meaning a product has installed the system, from graded adoption, meaning it has reached a defined level of use, and adds adoption age, meaning how far behind the current version a product's dependency has fallen. His companion piece groups products on an adoption scorecard by priority and warns against making constrained products look like second-class citizens, noting it can be more effortful for such products to adopt the system, even the basics.",
      why: "Without measurement the system team is arguing from anecdote at budget time. Levels beat a percentage, because they show a legacy product moving from nothing to installed as progress rather than as failure.",
      how: [
        "Define levels before you measure, so everyone agrees what counts as adopted.",
        "Measure something machine-readable, such as the installed version in each codebase.",
        "Track version age as well as installation, since a product two years behind is not really on the system.",
        "Report where adoption stalled and why; that is the roadmap, and it is more useful than the score."
      ],
      example: "Curtis's worked example sets targets such as every flagship product having the system installed as a dependency, and dependencies being no older than six months for flagship products and twelve for secondary ones.",
      numbers: "In Curtis's example objectives, adoption age targets are dependencies no older than six months for flagship products and twelve months for secondary products. These are his illustrative targets, not an industry standard.",
      pitfall: "Chasing the percentage. Teams import a component and then override its styles, which scores as adoption while producing exactly the inconsistency the system was meant to remove.",
      source: "Nathan Curtis, Measuring Design System Success (9 June 2017) and Adopting Design Systems (28 June 2017), EightShapes",
      verify: { status: "verified", note: "Read both EightShapes articles this session. The initiated, graded and adoption-age categories and the six and twelve month key results are quoted from Curtis's example OKRs in Measuring Design System Success (9 June 2017), and are labelled as his examples rather than as an industry standard. The second-class citizens caution is from Adopting Design Systems (28 June 2017); its actual wording is about the extra effort of adopting, which an earlier draft had stretched into achieving less." },
      belongs: { verdict: "adjacent", why: "It is management measurement, but the design use is direct: adoption data tells you which components are unusable in practice and need redesigning." },
      related: [780, 784, 787]
    },

    {
      n: 783,
      title: "Accessibility baked into components",
      aka: ["Accessible by default"],
      oneLine: "Building the accessible behaviour into the shared component so products inherit it.",
      demo: {
        caption: "Both middle marks are focused. Left, 16 by 16 and no ring; right, the 24 by 24 minimum with one.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Left to the product team</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--tight\"><span class=\"db-sq\" style=\"width:16px;height:16px\"></span><span class=\"db-sq\" style=\"width:16px;height:16px\"></span><span class=\"db-sq\" style=\"width:16px;height:16px\"></span></div><span class=\"db-note\">16 PX TARGETS, MIDDLE ONE FOCUSED</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Built into the component</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-sq\" style=\"width:24px;height:24px\"></span><span class=\"db-sq\" style=\"width:24px;height:24px;outline:2px solid var(--accent);outline-offset:2px\"></span><span class=\"db-sq\" style=\"width:24px;height:24px\"></span></div><span class=\"db-note\">24 PX MINIMUM, RING BUILT IN</span></div></div></div></div>"
      },
      what: "Rather than asking every product team to add keyboard handling and correct semantics, the system component ships with them. That means the roles, states and properties, the focus order, the visible focus indicator, the labels and the touch target size are settled once, tested once and reused. The W3C's ARIA Authoring Practices Guide provides patterns and working examples with keyboard support for the common widgets, which is the reference most component teams build against, and WCAG 2.2 sets the criteria the result has to meet.",
      why: "Accessibility done per product is accessibility done inconsistently and usually late. Putting it in the component turns a recurring cost into a fixed one, and a fix to the menu's keyboard handling reaches every product on the next release.",
      how: [
        "Build to a named pattern from the ARIA Authoring Practices Guide rather than inventing widget behaviour.",
        "Meet the target size and contrast criteria in the component's own defaults, not in guidance telling teams to be careful.",
        "Test each component with a keyboard alone and with a screen reader before release, and record the result in its documentation.",
        "Make the accessible version the only version, with no prop that switches off the label or the focus ring."
      ],
      example: "A combobox built to the APG pattern, with its keyboard interactions and ARIA attributes handled inside the component, so a product team using it gets that behaviour without knowing the specification.",
      numbers: "WCAG 2.2 became a W3C Recommendation on 5 October 2023, with an updated version published on 12 December 2024. SC 1.4.3 requires 4.5:1 contrast for normal text and 3:1 for large text at AA. SC 2.5.8 Target Size (Minimum) requires pointer targets of at least 24 by 24 CSS pixels at AA, with five exceptions: spacing, equivalent, inline, user agent control and essential.",
      pitfall: "An accessible component with an open styling escape hatch. Teams override the focus indicator or the contrast and the audit finds the failure in the system's name.",
      source: "W3C, WCAG 2.2 (Recommendation 5 October 2023, updated 12 December 2024); W3C Web Accessibility Initiative, ARIA Authoring Practices Guide",
      verify: { status: "verified", note: "Checked SC 1.4.3's ratios and SC 2.5.8's 24 by 24 CSS pixels and five exceptions on the W3C site this session. The date is corrected here: the published document header carries 12 December 2024, but W3C's own WCAG standards page states that WCAG 2.2 was published on 5 October 2023 and an update was published on 12 December 2024, so an earlier draft giving only 2024 as the Recommendation date was incomplete. The APG page was read for its stated purpose of providing design patterns and functional examples with keyboard support." },
      belongs: { verdict: "core", why: "It is the single largest practical advantage of having a design system, and it is a design decision as much as an engineering one." },
      related: [778, 771, 790]
    },

    {
      n: 784,
      title: "Systems debt",
      aka: ["Design debt"],
      oneLine: "The accumulated cost of shortcuts in the system, paid back as slower work later.",
      demo: {
        caption: "Two ways of shipping the same work. The shortcut is quicker once, then every later change costs more, and the lines cross.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 148\"><text class=\"t\" x=\"0\" y=\"12\">TIME PER CHANGE</text><path class=\"s-mute\" d=\"M40 18 V118 H350\"/><path class=\"s\" d=\"M40 70 C 110 66, 200 62, 344 58\"/><path class=\"s-accent\" d=\"M40 96 C 140 92, 240 60, 344 20\"/><circle class=\"s\" cx=\"221\" cy=\"63\" r=\"4\"/><path class=\"s-mute\" d=\"M221 68 V78\"/><text class=\"t\" x=\"196\" y=\"90\">CROSSOVER</text><text class=\"t\" x=\"46\" y=\"112\">FASTER FIRST RELEASE</text><text class=\"t\" x=\"344\" y=\"16\" text-anchor=\"end\">INTEREST ON THE DEBT</text><text class=\"t\" x=\"344\" y=\"74\" text-anchor=\"end\">PAID BACK EARLY</text><text class=\"t\" x=\"350\" y=\"132\" text-anchor=\"end\">RELEASES</text></svg></div>"
      },
      what: "The parent idea is technical debt, coined by Ward Cunningham in his 1992 OOPSLA report on the WyCash portfolio management system. His metaphor: shipping first-time code is like going into debt, a little debt speeds development so long as it is paid back promptly with a rewrite, and every minute spent on not-quite-right code counts as interest on that debt. Systems debt is the same borrowing in a design system: the fourth button variant added under deadline, the token named after a colour, the component nobody documented.",
      why: "Naming it as debt makes the trade-off explicit and time-bound rather than invisible. It changes the conversation from whether the shortcut is acceptable to when it is being repaid and who is holding the note.",
      how: [
        "Log the shortcut when you take it, with the reason and the intended repayment.",
        "Reserve a fixed share of each release for repayment rather than waiting for a clear quarter.",
        "Treat duplicated components as debt with a measurable interest rate: every one of them doubles a future fix.",
        "Repay the debts that block other work first, usually naming and token structure."
      ],
      example: "A team ships a second card component for a campaign page with a promise to merge it later; two years on there are five card components and no fix can be made in one place.",
      numbers: "",
      pitfall: "Using debt as a synonym for anything old. Cunningham's point was about deliberate, repayable borrowing; calling every legacy decision debt just turns the word into a complaint.",
      source: "Ward Cunningham, The WyCash Portfolio Management System, OOPSLA (1992), for technical debt; systems debt is the design-side analogy",
      verify: { status: "verified", note: "Verified the coinage, the 1992 OOPSLA report and the original wording of the metaphor, including Cunningham's later clarification that he meant deliberate borrowing to be repaid. Systems debt itself is a practitioner analogy with no single origin I could find." },
      belongs: { verdict: "adjacent", why: "Borrowed from software engineering, but it names the specific way design systems decay: unrepaid shortcuts in components, tokens and documentation." },
      related: [781, 787, 789]
    },

    {
      n: 785,
      title: "Exception process",
      aka: ["Waivers", "Deviation requests"],
      oneLine: "A route for teams that need something the system does not offer.",
      demo: { none: "The entry describes a paperwork route with a written request, a named decider and a review date, so any picture would only be those words drawn as boxes." },
      what: "The practice is to let a product team deviate from the system on the record: they state what they need and why, someone decides, and the deviation is logged with a review date. Done well, today's exception becomes tomorrow's contribution, because a deviation that three teams request is a gap in the system. I could not find an authoritative source for it. What turns up in searches is search-optimised marketing content rather than a practitioner or standard I would cite, and the substance is covered by governance and by the contribution route.",
      why: "The honest case for it is visibility: teams will deviate anyway, and a logged deviation can be reviewed while an undocumented one just becomes drift. The case against it as a separate fundamental is that it is a step inside governance rather than an idea of its own.",
      how: [
        "If you run one, keep it to a short written request, a named decider and a review date.",
        "Log deviations somewhere the system team reads, and count repeats as roadmap input.",
        "Time-limit every approval so nothing becomes permanent by silence.",
        "Handle the underlying decisions through governance and the contribution route rather than treating exceptions as a separate scheme."
      ],
      example: "A checkout team needs a payment card component the system does not have, gets approval to build it locally with a six-month review, and the review turns it into a contribution.",
      numbers: "",
      pitfall: "An exception process with no review date. Approvals accumulate, nobody revisits them, and the log becomes a list of the components the system should have built.",
      source: "Origin unclear; no authoritative source found",
      verify: { status: "unverified", note: "Searched again this session for a primary source and found none: no practitioner article, book or standard defines an exception process as a named practice, and the results are vendor marketing and content-farm pages. Nathan Curtis's writing covers the same ground under governance and contributions, which is where the substance belongs." },
      belongs: { verdict: "cut", why: "It is a sub-procedure of governance (780) and the contribution route (779), not a fundamental in its own right, and no source defines it. A better entry for this slot is the interface inventory (added here as 9774), which is a named technique with a documented origin." },
      related: [780, 779, 784]
    },

    {
      n: 786,
      title: "Principle of least surprise",
      aka: ["Principle of least astonishment", "POLA"],
      oneLine: "A component should behave the way its name and appearance lead people to expect.",
      demo: {
        caption: "Left, two identical controls that do different things. Right, the appearance of each one tells you what it will do.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Same look, different job</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Delete account</span></div><span class=\"db-note\">ACTS IMMEDIATELY</span></div><div><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Pricing</span></div><span class=\"db-note\">NAVIGATES AWAY</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Look predicts job</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Delete account</span></div><span class=\"db-note\">ACTS IMMEDIATELY</span></div><div><div class=\"db-row db-row--tight\"><span class=\"db-type\" style=\"text-decoration:underline\">Pricing</span></div><span class=\"db-note\">NAVIGATES AWAY</span></div></div></div></div></div>"
      },
      what: "The principle comes from programming language design. It appeared as the law of least astonishment in the PL/I Bulletin in December 1967, and the first printed formulation, from Bergeron and others in Systems Programming Languages (1972), says every construct in the system should behave exactly as its syntax suggests, that widely accepted conventions should be followed whenever possible, and that exceptions to previously established rules of the language should be minimal. In a design system, the surprise is usually a component that looks like one thing and behaves like another: a link styled as a button, a toggle that needs a save, a modal that cannot be dismissed with escape.",
      why: "People predict before they read. If the prediction holds, the interface feels obvious and nobody reports anything; if it does not, they lose trust in every other similar control, not just the one that misbehaved.",
      how: [
        "Keep appearance and behaviour matched: if it navigates, style it as a link.",
        "Follow the platform convention for anything a person has already learnt elsewhere, such as escape closing a dialogue.",
        "Keep a name doing one job across the system; a prop called dismissible should mean the same thing everywhere.",
        "When you must break a convention, break it loudly with a visible signal rather than quietly."
      ],
      example: "A component named Toggle that only takes effect after a separate save action surprises people who have learned that toggles apply immediately, so they leave the page believing the change is made.",
      numbers: "",
      pitfall: "Invoking the principle to defend whatever is familiar to the team. The expectations that matter are the user's, and they are set by other products, not by your internal habits.",
      source: "Law of least astonishment, PL/I Bulletin (December 1967); first printed formulation in Bergeron and others, Systems Programming Languages (1972)",
      verify: { status: "verified", note: "Checked the documented origin and the 1972 wording via the Wikipedia article on the principle of least astonishment, which cites the PL/I Bulletin of December 1967 as the earliest reference and quotes Bergeron and others in full; the paraphrase here has been corrected to follow that wording. The interface examples are illustrations, not claims about specific products." },
      belongs: { verdict: "adjacent", why: "It comes from programming language design, but the design use is exact: component naming and behaviour should match what the appearance already promised." },
      related: [787, 771, 778]
    },

    {
      n: 787,
      title: "Consistency versus local optimisation",
      aka: ["The case against consistency"],
      oneLine: "Consistency is a means, not the goal, and sometimes the local answer is better.",
      demo: {
        caption: "Grudin's kitchen. Left, the knives filed together and a walk to every task. Right, each knife kept where it is used.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Consistent</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 106\"><rect class=\"s-mute\" x=\"4\" y=\"12\" width=\"162\" height=\"88\" rx=\"2\"/><rect class=\"s\" x=\"10\" y=\"32\" width=\"46\" height=\"48\" rx=\"2\"/><text class=\"t\" x=\"33\" y=\"44\" text-anchor=\"middle\">DRAWER</text><path class=\"f\" d=\"M20 50 l16 3 l-16 3 Z\"/><path class=\"f\" d=\"M20 60 l16 3 l-16 3 Z\"/><path class=\"f\" d=\"M20 70 l16 3 l-16 3 Z\"/><rect class=\"s-mute\" x=\"96\" y=\"18\" width=\"66\" height=\"20\" rx=\"2\"/><rect class=\"s-mute\" x=\"96\" y=\"46\" width=\"66\" height=\"20\" rx=\"2\"/><rect class=\"s-mute\" x=\"96\" y=\"78\" width=\"66\" height=\"20\" rx=\"2\"/><text class=\"t\" x=\"102\" y=\"32\">PREP</text><text class=\"t\" x=\"102\" y=\"60\">TABLE</text><text class=\"t\" x=\"102\" y=\"92\">CHEESE</text><path class=\"s-mute\" d=\"M56 56 H78 V28 H90\"/><path class=\"f-mute\" d=\"M96 28 l-6 -3.5 v7 Z\"/><path class=\"s-mute\" d=\"M56 56 H90\"/><path class=\"f-mute\" d=\"M96 56 l-6 -3.5 v7 Z\"/><path class=\"s-mute\" d=\"M56 56 H78 V88 H90\"/><path class=\"f-mute\" d=\"M96 88 l-6 -3.5 v7 Z\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Inconsistent, and better</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 106\"><rect class=\"s-mute\" x=\"4\" y=\"12\" width=\"162\" height=\"88\" rx=\"2\"/><rect class=\"s-mute\" x=\"10\" y=\"32\" width=\"46\" height=\"48\" rx=\"2\"/><text class=\"t\" x=\"33\" y=\"52\" text-anchor=\"middle\">DRAWER</text><text class=\"t\" x=\"33\" y=\"64\" text-anchor=\"middle\">EMPTY</text><rect class=\"s-mute\" x=\"96\" y=\"18\" width=\"66\" height=\"20\" rx=\"2\"/><rect class=\"s-mute\" x=\"96\" y=\"46\" width=\"66\" height=\"20\" rx=\"2\"/><rect class=\"s-mute\" x=\"96\" y=\"78\" width=\"66\" height=\"20\" rx=\"2\"/><text class=\"t\" x=\"102\" y=\"32\">PREP</text><text class=\"t\" x=\"102\" y=\"60\">TABLE</text><text class=\"t\" x=\"102\" y=\"92\">CHEESE</text><path class=\"f\" d=\"M146 25 l14 3 l-14 3 Z\"/><path class=\"f\" d=\"M146 53 l14 3 l-14 3 Z\"/><path class=\"f\" d=\"M146 85 l14 3 l-14 3 Z\"/></svg></div></div></div>"
      },
      what: "Jonathan Grudin argued this in Communications of the ACM in 1989. He separates internal consistency, a design agreeing with itself, external consistency, a design agreeing with other interfaces a person knows, and analogic consistency, a design corresponding to things in the world beyond the computer. His warning is direct: when user interface consistency becomes our primary concern, our attention is directed away from its proper focus, users and their work. His illustration is household knives, which are stored where they are used rather than gathered in one consistent place, and the arrangement is inconsistent and correct.",
      why: "This is the counterweight a design system needs. A system's whole tendency is to answer every question with make it the same, and Grudin's point is that the same as what, and for whose task, are the questions that actually matter.",
      how: [
        "Ask which kind of consistency is at stake before defending it: internal, external or analogic.",
        "Let a component diverge when the task genuinely differs, and record the reason next to it.",
        "Prefer external consistency for anything people learnt elsewhere, such as form controls and search.",
        "Judge a proposed exception by the user's task, not by whether it tidies the library."
      ],
      example: "Grudin's own example: knives distributed around a kitchen by use rather than filed together, which looks inconsistent and works better.",
      numbers: "Jonathan Grudin, Communications of the ACM, volume 32, issue 10, pages 1164-1173, October 1989.",
      pitfall: "Using this paper as cover for whatever a team wanted to build anyway. Grudin argues for grounding decisions in the user's task, which is a higher bar than consistency, not a lower one.",
      source: "Jonathan Grudin, The Case Against User Interface Consistency, Communications of the ACM 32(10), 1164-1173 (1989)",
      verify: { status: "verified", note: "Read the paper this session, including the three kinds of consistency, the knives example and the quoted line about attention being directed away from users and their work. Citation details confirmed against the ACM Digital Library listing." },
      belongs: { verdict: "core", why: "It is the strongest published check on the main failure mode of systems thinking, and it comes from within interface design." },
      related: [786, 785, 782]
    },

    {
      n: 788,
      title: "Style guide versus pattern library versus component library",
      aka: ["Design system vocabulary"],
      oneLine: "Three different artefacts that teams routinely confuse with each other and with the system.",
      demo: {
        caption: "Three artefacts at three scopes: brand values, single parts, and the arrangement those parts are put into.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--top db-row--nowrap\"><div class=\"db-card db-fill\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">STYLE GUIDE</span><div class=\"db-row db-row--tight\"><span class=\"db-swatch\" style=\"background:var(--accent)\"></span><span class=\"db-swatch\" style=\"background:var(--ink)\"></span></div><span class=\"db-specimen\" style=\"font-size:26px\">Aa</span></div></div><div class=\"db-card db-fill\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">COMPONENT LIBRARY</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Continue</span></div><span class=\"db-input\">Email</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Cancel</span></div></div></div><div class=\"db-card db-fill\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">PATTERN LIBRARY</span><div class=\"db-nav\"><b>Basket</b><span>Pay</span></div><div class=\"db-row db-row--top db-row--tight db-row--nowrap\"><div class=\"db-lines db-fill\"><i></i><i></i></div><div class=\"db-block\" style=\"width:26px\"></div></div><div class=\"db-row db-row--between\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Back</span><span class=\"db-btn db-btn--sm\">Pay</span></div></div></div></div></div>"
      },
      what: "Nielsen Norman Group draws the lines this way. A design system is a complete set of standards intended to manage design at scale using reusable components and patterns. A style guide holds implementation guidance and visual reference, typically brand elements such as colour, type and logo, plus tone of voice. A component library holds the individual reusable interface elements with their names, descriptions, states and code. A pattern library holds groupings and layouts rather than single elements, meaning content structures and templates meant to be reused and adapted.",
      why: "Knowing which one you are being asked for saves a quarter. A brand refresh needs a style guide, a front-end rebuild needs a component library, and a request for consistency across whole pages needs patterns, not more buttons.",
      how: [
        "Name the artefact in the brief before scoping the work.",
        "Do not promise a design system when you have funding for a style guide.",
        "Keep them linked: a component page should reference the brand rules it obeys and the patterns it appears in.",
        "Audit which one people actually open, and put effort where they land."
      ],
      example: "A brand style guide specifying logo clear space and typeface, sitting beside a coded component library of buttons and inputs, with a pattern library showing the checkout flow those components assemble into.",
      numbers: "",
      pitfall: "Selling a component library as a design system. Without the standards, documentation and governance around it, you have shipped some components and inherited the expectations of a system.",
      source: "Therese Fessenden, Design Systems 101, Nielsen Norman Group (11 April 2021)",
      verify: { status: "verified", note: "Definitions read from the NN/g article this session, including the design system definition quoted and the distinction drawn between component and pattern libraries. Terminology varies between organisations, so these are NN/g's lines rather than universal ones." },
      belongs: { verdict: "core", why: "It is basic vocabulary hygiene for the discipline, and the confusion causes real scoping failures." },
      related: [774, 777, 780]
    },

    {
      n: 789,
      title: "Design linting",
      aka: ["Automated design checks"],
      oneLine: "Machine checks that flag values and patterns outside the system before review does.",
      demo: {
        caption: "Two of the four declarations sit outside the system. The check marks them and names the token to use instead.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 122\"><text class=\"t\" x=\"12\" y=\"12\">DECLARATION</text><text class=\"t\" x=\"360\" y=\"12\" text-anchor=\"end\">LINT SAYS</text><path class=\"s-mute\" d=\"M0 18 H360\"/><rect class=\"f-mute\" x=\"0\" y=\"26\" width=\"3\" height=\"12\"/><text class=\"t\" x=\"12\" y=\"36\">gap: var(--space-3)</text><rect class=\"f-accent\" x=\"0\" y=\"46\" width=\"3\" height=\"12\"/><text class=\"t\" x=\"12\" y=\"56\">padding: 15px</text><text class=\"t\" x=\"360\" y=\"56\" text-anchor=\"end\">USE --SPACE-4 (16PX)</text><rect class=\"f-mute\" x=\"0\" y=\"66\" width=\"3\" height=\"12\"/><text class=\"t\" x=\"12\" y=\"76\">color: var(--color-text)</text><rect class=\"f-accent\" x=\"0\" y=\"86\" width=\"3\" height=\"12\"/><text class=\"t\" x=\"12\" y=\"96\">color: #2F6BFF</text><text class=\"t\" x=\"360\" y=\"96\" text-anchor=\"end\">USE --COLOR-ACTION</text><text class=\"t\" x=\"12\" y=\"116\">CAUGHT BY THE BUILD, NOT BY A REVIEWER</text></svg></div>"
      },
      what: "Linting is automated rule checking, borrowed from code tooling and applied to design output. On the code side, Stylelint describes itself as a mighty CSS linter that helps you avoid errors and enforce conventions, and its convention rules cover exactly the design-system cases: disallowing specific units, enforcing naming patterns for custom properties, setting limits on ID selectors. In design tools the equivalent plugins scan a file for colours, text styles and spacing values that are not bound to a library. Either way, the point is to catch drift when it is one commit old.",
      why: "Humans do not reliably notice a 15px gap in a review, and they get tired of being the person who mentions it. A check moves the enforcement off individuals and onto tooling, which also removes the politics.",
      how: [
        "Lint for the rules you can state exactly, starting with raw colour values and off-scale spacing.",
        "Run it in continuous integration so it blocks a merge rather than filling a backlog.",
        "Fail on new violations only at first, so an existing codebase does not produce ten thousand errors nobody will fix.",
        "Give each rule a message naming the token to use instead of the value found."
      ],
      example: "A Stylelint configuration that rejects hex colour values in component CSS and requires a custom property, so any hard-coded colour fails the build.",
      numbers: "Stylelint states it has over 100 built-in rules for modern CSS syntax and features, and supports plugins for custom ones.",
      pitfall: "Linting rules that outrun the system. If the token set does not yet cover a legitimate case, the check just teaches people to add a disable comment, and then they add it everywhere.",
      source: "Stylelint documentation; equivalent lint plugins in design tools",
      verify: { status: "verified", note: "Stylelint's self-description, rule categories and rule count were read from stylelint.io this session. I attempted to verify a specific Figma lint plugin page and was blocked with a 403, so no plugin is named here." },
      belongs: { verdict: "adjacent", why: "The technique is borrowed from software linting, but its design use is specific: it is the only practical way to stop token drift across a large codebase." },
      related: [775, 784, 790]
    },

    {
      n: 790,
      title: "Visual regression testing",
      aka: ["Screenshot diffing", "Pixel testing"],
      oneLine: "Comparing rendered screenshots between builds to catch visual changes nobody intended.",
      demo: {
        caption: "The approved screenshot, the new build, and the comparison that says which part moved and which parts did not.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--top db-row--nowrap\"><div class=\"db-card db-fill\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">REFERENCE</span><div class=\"db-lines\"><i></i></div><div class=\"db-block\" style=\"height:34px\"></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Save</span></div></div></div><div class=\"db-card db-fill\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">CURRENT</span><div class=\"db-lines\"><i></i></div><div class=\"db-block\" style=\"height:56px\"></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Save</span></div></div></div><div class=\"db-card db-fill\"><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">DIFF</span><div class=\"db-lines\"><i></i></div><div class=\"db-block db-block--accent\" style=\"height:56px\"></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Save</span></div></div></div></div></div>"
      },
      what: "The tool renders each component or page, saves an approved reference image, and on every later run captures the same views and compares them pixel by pixel. Differences are reported for a human to approve or reject. BackstopJS, one of the long-standing open-source tools, describes itself as automating visual regression testing by comparing screenshots over time, and works through three commands: init to configure the URLs and screen sizes, test to capture and compare, approve to promote the new screenshots to references.",
      why: "A token change touches everything, and no team reviews four hundred components by hand before a release. Diffing tells you which twelve actually moved, which turns a release from an act of faith into a review.",
      how: [
        "Test components in isolation as well as whole pages, so a diff points at a cause.",
        "Capture at each of your breakpoint widths and in each theme.",
        "Freeze the things that always differ: animation, dates, random content and web font loading.",
        "Treat approval as a design review, since approving diffs without looking is worse than having no tests."
      ],
      example: "BackstopJS run against a component library, with backstop test capturing the current build, comparing against the references and producing a report of the differences for approval.",
      numbers: "BackstopJS defaults: misMatchThreshold 0.1 per cent of pixels before a test fails, and requireSameDimensions true, so a screenshot of different dimensions fails regardless of pixel difference.",
      pitfall: "A suite so noisy nobody reads it. Unfrozen animation and font loading produce false failures on every run, and within a month the team approves everything on sight.",
      source: "BackstopJS (garris/BackstopJS) documentation; the practice is standard across tools such as this one",
      verify: { status: "verified", note: "Read the BackstopJS repository documentation this session for the self-description, the three-command workflow, the misMatchThreshold default of 0.1 per cent and the requireSameDimensions default. I have not verified the behaviour of commercial alternatives, so none are described here." },
      belongs: { verdict: "adjacent", why: "It is quality-assurance engineering, but it exists to protect visual decisions, and approving the diffs is a designer's job." },
      related: [789, 776, 783]
    }
  ]
};
