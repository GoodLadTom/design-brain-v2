window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[30] = {
  "n": 30,
  "slug": "failure-modes",
  "title": "Common failure modes",
  "blurb": "The recurring ways real projects break, each one traced back to the standard or study that names it.",
  "intro": "Every other section in this list describes something to do. This one describes what happens when you do not. The items are the faults that show up again and again in client work, code review and accessibility audits: contrast that fails, labels that vanish, layouts that jump, controls that only work with a mouse. Most of them have a named standard behind them, usually WCAG 2.2, the Core Web Vitals thresholds, or a piece of Nielsen Norman Group research. A few are pure craft with no paper trail at all, and those are marked as such rather than dressed up with a fake citation.",
  "sources": [
    "W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation (2023), and the associated Understanding documents",
    "WebAIM, The WebAIM Million: 2026 report on the accessibility of the top 1,000,000 home pages",
    "Jakob Nielsen, 10 Usability Heuristics for User Interface Design (1994, last revised 30 January 2024)",
    "Jakob Nielsen, How Users Read on the Web, Nielsen Norman Group (30 September 1997)",
    "Jakob Nielsen, The End of Web Design, Nielsen Norman Group (22 July 2000)",
    "Jakob Nielsen, Photos as Web Content, Nielsen Norman Group (31 October 2010)",
    "Aurora Harley, Icon Usability, Nielsen Norman Group (27 July 2014)",
    "Katie Sherwin, Placeholders in Form Fields Are Harmful, Nielsen Norman Group (11 May 2014)",
    "Kara Pernice, Designing Effective Carousels, Nielsen Norman Group (14 September 2013)",
    "Therese Fessenden, Modal and Nonmodal Dialogs: When (and When Not) to Use Them, Nielsen Norman Group (23 April 2017)",
    "Hoa Loranger, Infinite Scrolling Is Not for Every Website, Nielsen Norman Group (2 February 2014)",
    "Tim Neusesser and Evan Sunwall, Error-Message Guidelines, Nielsen Norman Group (14 May 2023)",
    "Sara Paul, Scrolljacking 101, Nielsen Norman Group (6 August 2023)",
    "Erik Runyon, Carousel Interaction Stats, nd.edu data (January 2013)",
    "Google, Cumulative Layout Shift (CLS), web.dev",
    "Baymard Institute, Checkout Optimization: 5 Ways to Minimize Form Fields in Checkout",
    "Chris Harrison, Brian Amento, Stacey Kuznetsov and Robert Bell, Rethinking the Progress Bar, UIST 2007, pages 115 to 118",
    "Ryan W. Buell and Michael I. Norton, The Labor Illusion: How Operational Transparency Increases Perceived Value, Management Science 57(9), 2011, pages 1564 to 1579",
    "Alan Stearns, Say No to Faux Bold, A List Apart (8 May 2012)",
    "Edward Tufte, The Visual Display of Quantitative Information (1983), principles of graphical integrity, principle 2 on labelling",
    "Vincent Flanders, Web Pages That Suck (1998)",
    "GOV.UK content and publishing guidance, A to Z style guide, Words to avoid",
    "GOV.UK Design System, Button component",
    "Google, Material Design 2, Spacing methods, Surfaces and Elevation",
    "MDN Web Docs: repeat(), text-overflow, object-fit, object-position, prefers-reduced-motion",
    "Regulation (EU) 2016/679 (GDPR), Article 5(1)(c), data minimisation",
    "Paul Hebert, The Math Behind Nesting Rounded Corners, Cloud Four (26 October 2022)",
    "Qihan Wang, Xinyue Kang and Pei-Luen Patrick Rau, Evaluating Time Perception of Progress Bar (2022), arXiv:2211.13909",
    "Jonas Karlsson and Martin Larsson, Adapting infinite-scroll with the user experience in mind, master's thesis, Linkoping University (2016)",
    "W3C WAI, Forms tutorial, User instructions",
    "Alan West, Why Every AI-Built Website Looks the Same (Blame Tailwind's Indigo-500), dev.to (25 March 2026)"
  ],
  "entries": [
    {
      "n": 1025,
      "title": "Too many typefaces or weights",
      "aka": [
        "Type soup",
        "Font salad"
      ],
      "oneLine": "Piling on typefaces and weights spends contrast on nothing and leaves no signal for what matters.",
      "demo": {
        "caption": "Same five lines both sides. On the left every line takes a different face or weight, so none of them ranks.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Five styles, no order</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-type db-type--display\" style=\"font-size:15px;font-weight:700\">Delivery and returns</span><span class=\"db-type db-type--mono\" style=\"font-size:14px;font-style:italic\">Updated for the new season</span><span class=\"db-type\" style=\"font-size:15px;font-weight:300\">Orders placed before noon go out the same working day.</span><span class=\"db-type db-type--display\" style=\"font-size:14px;font-weight:500\">Returns are free within thirty days.</span><span class=\"db-type db-type--mono\" style=\"font-size:14px\">Bulky items excluded</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One family, two weights</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:19px;font-weight:600\">Delivery and returns</span><span class=\"db-type\" style=\"font-size:13px;color:var(--ink-3)\">Updated for the new season</span><span class=\"db-type\" style=\"font-size:13px\">Orders placed before noon go out the same working day.</span><span class=\"db-type\" style=\"font-size:13px\">Returns are free within thirty days.</span><span class=\"db-type\" style=\"font-size:11px;color:var(--ink-3)\">Bulky items excluded</span></div></div></div></div>"
      },
      "what": "A page needs a small number of type styles that each mean something: a heading style, a body style, a caption style, maybe an emphasis weight. Add more and the reader stops being able to tell which difference is meaningful. The familiar advice to limit yourself to two or three typefaces is craft folklore rather than a measured finding, and plenty of good work breaks it. The idea underneath is sound: every extra style has to earn a job, and most of them cannot name one.",
      "why": "Difference is how a reader works out structure. When four weights and three families all sit at similar sizes, the reader has to read everything to find out what anything is. Cutting back gives the remaining differences somewhere to land.",
      "how": [
        "Write down every type style before you build, with the job each one does. If two share a job, delete one.",
        "Prefer a wide gap between two weights over a narrow gap between four.",
        "Use a variable font if you genuinely need many weights, so you are not shipping a separate file per weight.",
        "Reach for size, spacing and colour before reaching for another family."
      ],
      "example": "The GOV.UK service pages run on a single family, GDS Transport, with a short set of sizes and two weights, and still signal headings, body, hints and errors clearly.",
      "numbers": "",
      "pitfall": "The count creeps up through components rather than decisions. A card gets a semibold label, a banner gets a light subhead, a table gets a condensed face, and nobody ever sees them side by side until the design system audit.",
      "source": "Craft convention. No single originator for the two-or-three-typeface rule.",
      "verify": {
        "status": "disputed",
        "note": "I could not find an original source or a study behind the commonly repeated limit of two or three typefaces. It is repeated widely in teaching material without citation, so it is written here as convention, not as a measured threshold. The underlying point about meaningful contrast is standard across the typography canon."
      },
      "belongs": {
        "verdict": "core",
        "why": "Choosing and limiting type styles is one of the first decisions in any layout and one of the most visible when it goes wrong."
      },
      "related": [
        1026,
        1047,
        1048,
        1055
      ]
    },
    {
      "n": 1026,
      "title": "No spacing scale (arbitrary numbers)",
      "aka": [
        "Magic numbers",
        "Eyeballed spacing"
      ],
      "oneLine": "Spacing typed in ad hoc gives a layout that never lines up and cannot be maintained.",
      "demo": {
        "caption": "Three gaps each side. Cover the numbers: the left three are one gap typed badly, the right three are three steps.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Eyeballed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--loose\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--nowrap\" style=\"gap:13px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></div><span class=\"db-note\">13</span></div><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--nowrap\" style=\"gap:14px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></div><span class=\"db-note\">14</span></div><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--nowrap\" style=\"gap:15px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></div><span class=\"db-note\">15</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">On the scale</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--loose\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--nowrap\" style=\"gap:8px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></div><span class=\"db-note\">8</span></div><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--nowrap\" style=\"gap:16px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></div><span class=\"db-note\">16</span></div><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--nowrap\" style=\"gap:24px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></div><span class=\"db-note\">24</span></div></div></div></div></div>"
      },
      "what": "Every gap in a design should come from a short, named set of values rather than from whatever number looked right at the time. Material Design states the case plainly: all components align to an 8dp square baseline grid for mobile, tablet and desktop, while icons, type and some elements within components can align to a finer 4dp grid. The specific base does not matter much. What matters is that 13px, 14px and 15px gaps stop existing, because none of them can be told apart and all three will be typed somewhere.",
      "why": "A scale makes vertical rhythm happen by default instead of by inspection. It also makes spacing reviewable: a value outside the scale is a bug you can spot in a diff, rather than a judgement call you have to argue about.",
      "how": [
        "Define the scale as tokens and forbid raw values in component code.",
        "Keep the set short. A geometric-ish run such as 4, 8, 12, 16, 24, 32, 48, 64 covers most interfaces.",
        "Keep the half step (4) for the smaller things Material allows on it: icons, type and elements inside a component.",
        "Add a lint rule or a design-token check so off-scale numbers fail review rather than ship."
      ],
      "example": "Material Design's spacing guidance specifies that all components align to an 8dp square baseline grid across mobile, tablet and desktop, and that icons, type and some elements within components can align to a 4dp grid. Padding is measured in increments of 8dp or 4dp.",
      "numbers": "Material Design 2: 8dp square baseline grid for all components; 4dp grid available to icons, type and elements within components; padding in increments of 8dp or 4dp.",
      "pitfall": "Teams adopt a scale then quietly break it for one stubborn component, and the exception spreads. The other failure is a scale so long that every value is on it, which is the same as having no scale.",
      "source": "Google, Material Design 2, Spacing methods (m2.material.io)",
      "verify": {
        "status": "verified",
        "note": "Checked against the Material Design 2 Spacing methods page, which reads 'All components align to an 8dp square baseline grid for mobile, tablet, and desktop' and 'Icons, type, and some elements within components can align to a 4dp grid'. An earlier draft of this entry said the 4dp grid was for iconography in toolbars, which is wording from the older Material 1 spec and not what the current page says; corrected. The wider 8-point-grid practice has no single named originator."
      },
      "belongs": {
        "verdict": "core",
        "why": "Spacing is the largest single contributor to whether a layout reads as considered, and a scale is how it stays that way across a team."
      },
      "related": [
        1025,
        1039,
        1048,
        1049
      ]
    },
    {
      "n": 1027,
      "title": "Centred body copy",
      "aka": [
        "Centred paragraphs",
        "Centred text blocks"
      ],
      "oneLine": "Centring multi-line body text gives every line a different starting point and slows the reader down.",
      "demo": {
        "caption": "The same paragraph twice. Run your eye down the left edge of each: one is a line, the other is a staircase.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Centred</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:13px;text-align:center\"><p>We open at eight on weekdays and nine at weekends. The kitchen stops taking orders half an hour before we close, and the last coffee goes out at five.</p></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Flush left</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:13px;text-align:left\"><p>We open at eight on weekdays and nine at weekends. The kitchen stops taking orders half an hour before we close, and the last coffee goes out at five.</p></div></div></div></div>"
      },
      "what": "Centring is fine for a short heading, a pull quote or a title page. Applied to a paragraph it removes the fixed left edge that the eye returns to at the end of each line. The standard explanation is that the ragged start makes the return sweep harder, because the reader has to hunt for where the next line begins. It is a settled convention in typographic teaching rather than a well-evidenced experimental result, which is worth being honest about.",
      "why": "A flush left edge is a free navigation aid. It costs nothing and it means the reader never loses their place between lines. Centring spends that aid on a decorative effect that the reader was not asking for.",
      "how": [
        "Set anything over about two lines flush left, ragged right, in left-to-right scripts.",
        "Reserve centring for single lines: titles, standfirsts, short captions, a signature.",
        "If a centred block is a brand requirement, keep it very short and set the measure narrow so the ragged edge stays shallow.",
        "Check the mobile view. A line that centres neatly on one row at desktop width wraps into several ragged rows on a phone."
      ],
      "example": "Wedding invitations and film title cards are centred and work, because they are one to three short lines. The same treatment applied to an About Us paragraph on a small screen is the version that fails.",
      "numbers": "",
      "pitfall": "Centring gets applied at the section level, so it catches the paragraph as well as the heading. The other version is a centred hero paragraph that looks fine at 1440px and turns into a ragged column on a phone.",
      "source": "Standard typographic convention. Origin unclear.",
      "verify": {
        "status": "disputed",
        "note": "Wikipedia's Typographic alignment article states that centred text is less readable for multi-line body copy because the ragged starting edges make it hard to track from line to line, but that sentence carries no citation. I found no controlled reading study this session, so the mechanism is presented as convention rather than measured fact."
      },
      "belongs": {
        "verdict": "core",
        "why": "Alignment is a first-order typographic decision and centred body copy is one of the most common amateur tells in real client work."
      },
      "related": [
        1028,
        1047,
        1060
      ]
    },
    {
      "n": 1028,
      "title": "Justified text without hyphenation",
      "aka": [
        "Rivers",
        "Loose lines"
      ],
      "oneLine": "Justifying without hyphenation stretches word spaces until white gaps run down the page.",
      "demo": {
        "caption": "Same words, same column width. On the left the word spaces stretch line by line; on the right they stay even.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Justified, no hyphenation</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:13px;text-align:justify;hyphens:none\"><p>Comprehensive documentation accompanies every international transaction, including the supplementary identification requirements introduced by recent legislation governing cross-border payments.</p></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Ragged right</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:13px;text-align:left\"><p>Comprehensive documentation accompanies every international transaction, including the supplementary identification requirements introduced by recent legislation governing cross-border payments.</p></div></div></div></div>"
      },
      "what": "Justified setting forces both edges flush by adjusting word spacing. With no hyphenation available, the only way to fill a line is to stretch the spaces, so some lines end up with word gaps several times wider than others. When those wide gaps happen to stack, they form a visible pale channel down the column, which typographers call a river. The narrower the column, the worse it gets, because there are fewer spaces to absorb the adjustment.",
      "why": "Even word spacing is what makes a paragraph read as a single grey texture. Once spacing varies line to line, the reader notices the setting instead of the sentence. Hyphenation gives the line breaker somewhere to put the slack.",
      "how": [
        "If you justify on the web, turn on hyphens: auto and set a lang attribute, because the browser needs the language to hyphenate.",
        "Do not justify narrow columns. Wide word gaps are unavoidable when a line only holds a few words.",
        "In print, set the hyphenation and justification zones in InDesign rather than accepting defaults, and cap consecutive hyphens.",
        "If you cannot hyphenate, set ragged right instead. It is the safer default."
      ],
      "example": "The Gutenberg Bible is justified and tight, which it achieves through heavy abbreviation and alternate glyph widths. A modern narrow web column set to text-align: justify with no hyphens is the same ambition without any of the tools.",
      "numbers": "",
      "pitfall": "Justification gets switched on in CSS with no lang attribute on the html element, so hyphenation silently does nothing and the rivers appear only in some languages. Long unbroken URLs in justified text produce the worst single lines.",
      "source": "Standard typographic practice; the CSS mechanisms are in CSS Text Module Level 3 (text-align, hyphens).",
      "verify": {
        "status": "verified",
        "note": "Checked against Wikipedia's Typographic alignment article, which states that rivers are more likely in justified text because of the additional word spacing, that the problem of loose lines is reduced by using hyphenation (citing Typography for Lawyers), and that justification in narrow columns creates extremely large word spaces (citing Johannes Ammon, The Justification of the Gutenberg Bible, 2019)."
      },
      "belongs": {
        "verdict": "core",
        "why": "Justification is a routine setting decision and the failure is visible on the page rather than a matter of taste."
      },
      "related": [
        1027,
        1047
      ]
    },
    {
      "n": 1029,
      "title": "Low-contrast grey on grey",
      "aka": [
        "Insufficient text contrast",
        "Light grey text"
      ],
      "oneLine": "Text that fails the WCAG contrast minimum is the single most common accessibility fault on the web.",
      "demo": {
        "caption": "Two greys on the same white. Left is 2.7:1, under the 4.5:1 minimum; right is 7.0:1. Same size, same screen.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">#949494 on white, 2.7:1</span><div class=\"db-stage db-stage--tight\"><div class=\"db-chip-text\" style=\"background:#ffffff;color:#949494\">Your order has been despatched and should reach you on Thursday.</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">#595959 on white, 7.0:1</span><div class=\"db-stage db-stage--tight\"><div class=\"db-chip-text\" style=\"background:#ffffff;color:#595959\">Your order has been despatched and should reach you on Thursday.</div></div></div></div>"
      },
      "what": "WCAG 2.2 success criterion 1.4.3 Contrast (Minimum), Level AA, requires normal text to reach a contrast ratio of at least 4.5:1 against its background. Large-scale text, defined as at least 18 point or 14 point bold, may drop to 3:1. Success criterion 1.4.11 Non-text Contrast, also Level AA, applies a 3:1 minimum to user interface component boundaries and to graphical objects needed to understand the content. Mid-grey text on a light grey card fails all of these routinely.",
      "why": "Contrast is what makes a glyph a shape rather than a smudge, and the people it affects first are older readers, anyone in bright sunlight and anyone on a cheap panel. It is also the cheapest accessibility fix there is, since it costs one hex value.",
      "how": [
        "Check every text and background pairing with a contrast checker before it ships, including hover, focus and visited states.",
        "Treat 4.5:1 as the floor for body text, not the target. Aim higher and you survive the client who lightens everything later.",
        "Check icons, input borders and chart strokes too, at 3:1, under 1.4.11.",
        "Bake ratios into the colour tokens so a designer cannot pick a failing pair from the palette."
      ],
      "example": "The WebAIM Million 2026 analysis of one million home pages found low-contrast text on 83.9 per cent of them, the most common error type in the whole study.",
      "numbers": "WCAG 2.2 SC 1.4.3 (AA): 4.5:1 for normal text, 3:1 for large text (18pt, or 14pt bold). SC 1.4.11 (AA): 3:1 for user interface components and graphical objects. WebAIM Million 2026: low-contrast text on 83.9 per cent of one million home pages, with 56.1 detected errors per page on average.",
      "pitfall": "Placeholder grey, disabled grey and secondary-text grey all get set from the same token, so the moment secondary text is used for something a reader needs, it fails. Dark mode is usually a second failure, because the light-mode ratios do not carry over.",
      "source": "W3C, WCAG 2.2 SC 1.4.3 and SC 1.4.11 (2023); WebAIM Million 2026",
      "verify": {
        "status": "verified",
        "note": "Ratios and the 18pt / 14pt bold definition checked against the W3C WCAG 2.2 Recommendation and the Understanding Contrast (Minimum) document. Prevalence figures checked against the WebAIM Million 2026 report page."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a hard, published threshold that applies to every piece of text a designer sets."
      },
      "related": [
        1030,
        1036,
        1050,
        10050
      ]
    },
    {
      "n": 1030,
      "title": "Text on busy imagery without a scrim",
      "aka": [
        "Hero text over a photo",
        "No overlay"
      ],
      "oneLine": "Text laid straight onto a photograph has a different contrast ratio at every pixel, so it fails somewhere.",
      "demo": {
        "caption": "White type over the same banded background twice. On the left it disappears wherever the band is pale; the scrim rescues it.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No scrim</span><div class=\"db-stage db-stage--flush\"><div class=\"db-stack\"><div style=\"background:repeating-linear-gradient(115deg,#efe9da 0 18px,#2f2a22 18px 34px,#b9ae95 34px 52px,#6d6455 52px 68px)\"></div><div class=\"db-centre\"><span style=\"color:#ffffff;font-family:var(--font-display);font-size:20px\">Book a table</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">55 per cent scrim</span><div class=\"db-stage db-stage--flush\"><div class=\"db-stack\"><div style=\"background:repeating-linear-gradient(115deg,#efe9da 0 18px,#2f2a22 18px 34px,#b9ae95 34px 52px,#6d6455 52px 68px)\"></div><div style=\"background:rgba(0,0,0,0.55)\"></div><div class=\"db-centre\"><span style=\"color:#ffffff;font-family:var(--font-display);font-size:20px\">Book a table</span></div></div></div></div></div>"
      },
      "what": "A solid background gives one contrast ratio you can measure. A photograph gives thousands. Text over a hero image will clear 4.5:1 over the dark trees and fail badly over the bright sky in the same line. The standard fix is a scrim, a semi-transparent layer between the image and the type, borrowed from the lighting screen of the same name and adopted as a term by Material Design. WCAG's Understanding document for 1.4.3 gives no special method for measuring against an image background, which is exactly why you need to force the background to a known value.",
      "why": "A scrim converts an unmeasurable background into a measurable one. It also stops the text competing with the busiest part of the picture, which is usually where the eye wants to go anyway.",
      "how": [
        "Put a solid or gradient scrim behind the text and measure contrast against the darkest point the scrim reaches, not the average.",
        "Test with the image failing to load and with a different image in the same slot, because the CMS will eventually swap it.",
        "Prefer moving the text into a solid panel beside the image over fighting the image.",
        "If the photo must show through, crop or choose so the type sits over a quiet area, then still add a light scrim as insurance."
      ],
      "example": "Material Design's Surfaces page defines scrims as temporary treatments applied to a surface to make the content on it less prominent, and notes they can appear at any elevation, in the foreground or the background.",
      "numbers": "WCAG 2.2 SC 1.4.3 still applies over images: 4.5:1 for normal text, 3:1 for large text.",
      "pitfall": "The scrim is tuned against the one launch photo and then a client uploads a bright beach shot. The other failure is a scrim so heavy that the photograph might as well not be there.",
      "source": "W3C, WCAG 2.2 SC 1.4.3; Google, Material Design (scrim)",
      "verify": {
        "status": "verified",
        "note": "Confirmed that the WCAG 2.2 Understanding document for 1.4.3 provides no measurement method for image backgrounds, and that scrim is a documented Material Design term on the m2.material.io Surfaces page, which reads 'Scrims are temporary treatments that can be applied to Material surfaces for the purpose of making content on a surface less prominent' and 'Scrims can appear at any elevation, whether in the foreground or background'. An earlier draft paraphrased the purpose as holding attention on foreground content, which is not what the page says; corrected to its own wording. The practice of forcing a known background value is craft, not a written standard."
      },
      "belongs": {
        "verdict": "core",
        "why": "Text over imagery is on almost every marketing page, and it is the most common way a site with a good palette still fails contrast."
      },
      "related": [
        1029,
        1037,
        1057
      ]
    },
    {
      "n": 1031,
      "title": "Icon-only buttons with ambiguous meaning",
      "aka": [
        "Unlabelled icons",
        "Icon-only toolbars"
      ],
      "oneLine": "Most icons do not carry a shared meaning, so an icon with no label is a guess.",
      "demo": {
        "caption": "Four unlabelled controls on the left. Point at the one that saves for later before you look at the right.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Icon only</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 300 58\"><path class=\"s\" d=\"M32 12 H52 V44 L42 36 L32 44 Z\"/><path class=\"s\" d=\"M112 42 C 98 32, 98 18, 106 18 C 110 18, 112 22, 112 25 C 112 22, 114 18, 118 18 C 126 18, 126 32, 112 42 Z\"/><path class=\"s\" d=\"M182 13 L186 25 L199 25 L188 33 L192 45 L182 37 L172 45 L176 33 L165 25 L178 25 Z\"/><path class=\"s\" d=\"M252 12 V32 M244 26 L252 34 L260 26 M240 42 H264\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Icon plus label</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 300 58\"><path class=\"s\" d=\"M32 6 H52 V38 L42 30 L32 38 Z\"/><text class=\"t\" x=\"42\" y=\"54\" text-anchor=\"middle\">Save</text><path class=\"s\" d=\"M112 36 C 98 26, 98 12, 106 12 C 110 12, 112 16, 112 19 C 112 16, 114 12, 118 12 C 126 12, 126 26, 112 36 Z\"/><text class=\"t\" x=\"112\" y=\"54\" text-anchor=\"middle\">Like</text><path class=\"s\" d=\"M182 7 L186 19 L199 19 L188 27 L192 39 L182 31 L172 39 L176 27 L165 19 L178 19 Z\"/><text class=\"t\" x=\"182\" y=\"54\" text-anchor=\"middle\">Rate</text><path class=\"s\" d=\"M252 6 V26 M244 20 L252 28 L260 20 M240 36 H264\"/><text class=\"t\" x=\"252\" y=\"54\" text-anchor=\"middle\">Download</text></svg></div></div></div>"
      },
      "what": "Nielsen Norman Group's testing found that very few icons are recognised across contexts. Aurora Harley named home, print and the magnifying glass for search as the ones with wide recognition, and concluded that stripping text labels from the rest renders them meaningless. Her recommendation is direct: icon labels should be visible at all times, without any interaction from the user. There is an accessibility half to this too. WCAG 2.2 SC 4.1.2 requires a name, role and value for every user interface component, and SC 2.5.3 Label in Name requires that where a control has a visible text label, its accessible name contains that text.",
      "why": "A label removes the guess and costs a few pixels. It also gives you the accessible name for free, and it makes the control findable by anyone using voice control, who has to say what they see.",
      "how": [
        "Put a visible text label on any icon that is not home, print or search, especially destructive actions.",
        "Never rely on a hover tooltip as the label. It does not exist on touch.",
        "If space genuinely forbids a label, give the button an aria-label and check it matches what a user would call it.",
        "Test a fresh person on the toolbar with the icons alone. If they hesitate, label it."
      ],
      "example": "The WebAIM Million 2026 report found empty buttons on 30.6 per cent of the one million home pages tested, which is what an icon-only button with no accessible name looks like in an automated audit.",
      "numbers": "WebAIM Million 2026: empty buttons on 30.6 per cent of one million home pages. WCAG 2.2 SC 4.1.2 (Level A) and SC 2.5.3 Label in Name (Level A).",
      "pitfall": "The hamburger and the three-dot overflow get treated as universal because designers see them daily. Icon sets also get reused across products with different meanings, so a familiar glyph teaches the wrong thing.",
      "source": "Aurora Harley, Icon Usability, Nielsen Norman Group (27 July 2014); W3C, WCAG 2.2 SC 4.1.2 and SC 2.5.3",
      "verify": {
        "status": "verified",
        "note": "Quotes and the three-recognised-icons finding checked against the NN/g Icon Usability article. WCAG criteria checked against the WCAG 2.2 Recommendation. Empty-button prevalence checked against the WebAIM Million 2026 report."
      },
      "belongs": {
        "verdict": "core",
        "why": "Labelling is a design decision, not an engineering one, and icon-only interfaces are a default in most component libraries."
      },
      "related": [
        1032,
        1035,
        1046,
        1050
      ]
    },
    {
      "n": 1032,
      "title": "Mystery-meat navigation",
      "aka": [
        "MMN",
        "Mystery meat"
      ],
      "oneLine": "Navigation whose destinations are hidden until you hover or click, so the user has to probe the page.",
      "demo": {
        "caption": "Two menus, four items each. Only one of them lets you work out where you land before you tap.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Feelings</span><div class=\"db-stage db-stage--tight\"><div class=\"db-nav\"><span>Discover</span><span>Explore</span><span>Journey</span><span>Beyond</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Page names</span><div class=\"db-stage db-stage--tight\"><div class=\"db-nav\"><span>Prices</span><span>Guides</span><span>Delivery</span><span>Contact</span></div></div></div></div>"
      },
      "what": "Vincent Flanders coined the term in 1998 on Web Pages That Suck, for navigation made of unlabelled shapes, images or animations where the only way to discover a link's destination is to move the pointer over it and wait. The name comes from unidentifiable cafeteria food. It was a Flash-era complaint and it came straight back with icon-only mobile bars, gesture-only interfaces and hero animations that hide their links until you interact.",
      "why": "Navigation is the one part of a site that has to be legible at a glance, because it is how someone decides whether to stay. Making the labels conditional on interaction turns a scan into a search.",
      "how": [
        "Write the destination in text, in the navigation, at rest.",
        "Never make a link's meaning depend on hover, because touch users never get it.",
        "If the design calls for image-based navigation, caption every image with the real page name.",
        "Say what the page is called, not what it feels like. A menu item reading Discover tells nobody anything."
      ],
      "example": "Flanders' own Web Pages That Suck kept a running Worst Websites list through the 2000s, with mystery meat navigation as one of the recurring charges.",
      "numbers": "",
      "pitfall": "It reappears as good taste. A minimal design strips the nav labels for visual calm, and the client's most profitable page becomes unfindable.",
      "source": "Vincent Flanders, Web Pages That Suck (1998)",
      "verify": {
        "status": "verified",
        "note": "Attribution and 1998 date checked against Wikipedia's Mystery meat navigation article and two independent write-ups, all naming Vincent Flanders and Web Pages That Suck. I did not access the original 1998 page itself."
      },
      "belongs": {
        "verdict": "core",
        "why": "It names a specific, recurring navigation failure and is still the clearest label for the icon-only version of the same mistake."
      },
      "related": [
        1031,
        1035,
        1046
      ]
    },
    {
      "n": 1033,
      "title": "Carousels as a content dumping ground",
      "aka": [
        "Sliders",
        "Rotating banners",
        "Hero carousel"
      ],
      "oneLine": "A carousel usually exists to settle an argument about the homepage, and almost nobody clicks past slide one.",
      "demo": {
        "caption": "Clicks by slide position on one university homepage. Slide one takes 84 per cent; the other four split the rest.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 130\"><path class=\"s-mute\" d=\"M14 100 H292\"/><rect class=\"f-accent\" x=\"20\" y=\"16\" width=\"34\" height=\"84\"/><rect class=\"f-mute\" x=\"74\" y=\"96\" width=\"34\" height=\"4\"/><rect class=\"f-mute\" x=\"128\" y=\"96\" width=\"34\" height=\"4\"/><rect class=\"f-mute\" x=\"182\" y=\"96\" width=\"34\" height=\"4\"/><rect class=\"f-mute\" x=\"236\" y=\"96\" width=\"34\" height=\"4\"/><text class=\"t\" x=\"37\" y=\"11\" text-anchor=\"middle\">84%</text><text class=\"t\" x=\"199\" y=\"88\" text-anchor=\"middle\">about 4% each</text><text class=\"t\" x=\"37\" y=\"113\" text-anchor=\"middle\">1</text><text class=\"t\" x=\"91\" y=\"113\" text-anchor=\"middle\">2</text><text class=\"t\" x=\"145\" y=\"113\" text-anchor=\"middle\">3</text><text class=\"t\" x=\"199\" y=\"113\" text-anchor=\"middle\">4</text><text class=\"t\" x=\"253\" y=\"113\" text-anchor=\"middle\">5</text><text class=\"t\" x=\"14\" y=\"127\">28,928 feature clicks, nd.edu, Oct 2012 to Jan 2013</text></svg></div>"
      },
      "what": "The rotating hero banner is the standard way an organisation avoids choosing what its homepage is about. Erik Runyon published click data from the University of Notre Dame homepage covering mid-October 2012 to 22 January 2013: roughly 1 per cent of visitors clicked a feature at all, and of the 28,928 clicks recorded, 84 per cent landed on the first position, with the remaining four slides splitting about 4 per cent each. Nielsen Norman Group's guidance from the same period recommends five frames or fewer, warns that people scroll straight past large images, and advises against auto-forwarding on mobile.",
      "why": "Knowing that slides two to five collect a few per cent between them changes the conversation with a client. It turns a design argument into an editing decision: pick the one thing, and put the rest somewhere a person can actually find it.",
      "how": [
        "Default to a single static hero. Make the carousel prove itself, not the other way round.",
        "If you must ship one, cap it at five frames, show position, and put the controls inside the carousel.",
        "Do not auto-advance. If you do, WCAG 2.2 SC 2.2.2 requires a way to pause, stop or hide anything that moves automatically for more than five seconds.",
        "Put the content from slides two onwards into real sections further down the page, where it can be linked and indexed."
      ],
      "example": "Runyon's nd.edu figures: 28,928 feature clicks over roughly three months, 84 per cent of them on the first slide.",
      "numbers": "nd.edu, Oct 2012 to Jan 2013: about 1 per cent of visitors clicked a feature; 84 per cent of the 28,928 clicks were on position 1. NN/g: five frames or fewer. WCAG 2.2 SC 2.2.2 (Level A): a pause, stop or hide mechanism for automatic movement lasting more than five seconds.",
      "pitfall": "The carousel becomes political property. Each department gets a slide, so nobody has to be told no, and the homepage stops saying anything. Auto-advance then steals the slide out from under anyone still reading it.",
      "source": "Erik Runyon, Carousel Interaction Stats (January 2013); Kara Pernice, Designing Effective Carousels, Nielsen Norman Group (14 September 2013)",
      "verify": {
        "status": "verified",
        "note": "Click figures, date range and total click count checked directly against Erik Runyon's published post. The five-frame limit, the auto-forwarding warning and the scroll-past finding checked against the NN/g article. Note that the nd.edu data is one site over one period, not a general web average."
      },
      "belongs": {
        "verdict": "core",
        "why": "Deciding what a page is about, and refusing to defer that decision, is a design responsibility."
      },
      "related": [
        1034,
        1041,
        1048
      ]
    },
    {
      "n": 1034,
      "title": "Modal overuse",
      "aka": [
        "Dialog spam",
        "Interstitial overload"
      ],
      "oneLine": "Every modal interrupts a task, so a product that opens them casually trains people to dismiss them unread.",
      "demo": {
        "caption": "Same article behind both. Left stacks three overlays over the task; right puts the one that matters in a quiet bar.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Thirty seconds in</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"f-mute\" x=\"10\" y=\"8\" width=\"180\" height=\"5\" opacity=\"0.28\"/><rect class=\"f-mute\" x=\"10\" y=\"20\" width=\"180\" height=\"5\" opacity=\"0.28\"/><rect class=\"f-mute\" x=\"10\" y=\"32\" width=\"180\" height=\"5\" opacity=\"0.28\"/><rect class=\"f-mute\" x=\"10\" y=\"44\" width=\"180\" height=\"5\" opacity=\"0.28\"/><rect class=\"f-mute\" x=\"10\" y=\"56\" width=\"180\" height=\"5\" opacity=\"0.28\"/><rect class=\"f-mute\" x=\"10\" y=\"68\" width=\"180\" height=\"5\" opacity=\"0.28\"/><rect class=\"f-mute\" x=\"10\" y=\"80\" width=\"180\" height=\"5\" opacity=\"0.28\"/><rect class=\"f-mute\" x=\"10\" y=\"92\" width=\"112\" height=\"5\" opacity=\"0.28\"/><rect x=\"14\" y=\"12\" width=\"112\" height=\"30\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/><text class=\"t\" x=\"22\" y=\"31\">Cookies</text><rect x=\"40\" y=\"46\" width=\"112\" height=\"30\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/><text class=\"t\" x=\"48\" y=\"65\">Newsletter</text><rect x=\"66\" y=\"80\" width=\"112\" height=\"30\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/><text class=\"t\" x=\"74\" y=\"99\">Live chat</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One, and not modal</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"f-mute\" x=\"10\" y=\"8\" width=\"180\" height=\"5\" opacity=\"0.55\"/><rect class=\"f-mute\" x=\"10\" y=\"20\" width=\"180\" height=\"5\" opacity=\"0.55\"/><rect class=\"f-mute\" x=\"10\" y=\"32\" width=\"180\" height=\"5\" opacity=\"0.55\"/><rect class=\"f-mute\" x=\"10\" y=\"44\" width=\"180\" height=\"5\" opacity=\"0.55\"/><rect class=\"f-mute\" x=\"10\" y=\"56\" width=\"180\" height=\"5\" opacity=\"0.55\"/><rect class=\"f-mute\" x=\"10\" y=\"68\" width=\"180\" height=\"5\" opacity=\"0.55\"/><rect class=\"f-mute\" x=\"10\" y=\"80\" width=\"180\" height=\"5\" opacity=\"0.55\"/><rect class=\"f-mute\" x=\"10\" y=\"92\" width=\"112\" height=\"5\" opacity=\"0.55\"/><rect x=\"10\" y=\"102\" width=\"180\" height=\"14\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/><text class=\"t\" x=\"18\" y=\"113\">Cookies</text></svg></div></div></div>"
      },
      "what": "A modal dialog blocks the interface until it is dealt with. Therese Fessenden's guidance for Nielsen Norman Group sets a high bar for that: modals suit important warnings, critical error prevention, information genuinely needed to continue, and breaking a complex flow into steps. They do not suit information unrelated to the current task, and they should be avoided during high-stakes processes such as checkout. Her summary of the cost is direct: modal dialogs force users away from the tasks they were working on in the first place.",
      "why": "Attention is the thing you are spending. Fessenden makes the Boy Who Cried Wolf comparison: interrupt people repeatedly with things that did not matter and they will not stop for the one that does.",
      "how": [
        "Ask what happens if this is not a modal. If the answer is nothing much, make it an inline message or a page.",
        "Never stack modals, and never open one during checkout or payment.",
        "Give every modal an obvious close, an Escape key binding and a return of focus to the trigger.",
        "Count the modals a new user meets in their first session. If it is more than one, cut."
      ],
      "example": "A site that opens a cookie banner, a newsletter modal and a chat prompt within thirty seconds has taught the visitor to hunt for the X before reading anything.",
      "numbers": "",
      "pitfall": "Modals get used because they are easy to add without touching the page layout. That convenience is why they multiply, and why marketing keeps asking for one more.",
      "source": "Therese Fessenden, Modal and Nonmodal Dialogs: When (and When Not) to Use Them, Nielsen Norman Group (23 April 2017)",
      "verify": {
        "status": "verified",
        "note": "Criteria, the interruption quote and the Boy Who Cried Wolf analogy checked directly against the NN/g article. No quantitative study of modal frequency was found this session, so no figure is given."
      },
      "belongs": {
        "verdict": "core",
        "why": "Deciding when to interrupt someone is a core interaction design judgement with a documented set of criteria."
      },
      "related": [
        1033,
        1041,
        1042
      ]
    },
    {
      "n": 1035,
      "title": "Hover-dependent interactions",
      "aka": [
        "Hover-only menus",
        "Tooltip-only labels"
      ],
      "oneLine": "Touch screens have no hover, so anything only reachable by hovering is unreachable for most visitors.",
      "demo": {
        "caption": "Same menu, same page, same code. The four service links exist only while a pointer hovers, so a phone never reaches them.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">With a pointer</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-nav\"><b>Services</b><span>Work</span><span>Contact</span></div><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>Root canal treatment</span><span>Implants</span><span>Whitening</span><span>Emergency appointments</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">On a touch screen</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-nav\"><b>Services</b><span>Work</span><span>Contact</span></div></div></div></div></div>"
      },
      "what": "Hover is a pointer state. A phone, a tablet and most keyboard-only use have no equivalent, so a menu, label or control that appears only on hover simply does not exist for those users. WCAG 2.2 SC 1.4.13 Content on Hover or Focus, Level AA, sets three conditions on content that hover or focus reveals: it must be dismissable without moving the pointer, hoverable so the pointer can move onto it without it vanishing, and persistent until dismissed or the trigger is removed. Nielsen Norman Group makes the usability version of the same point about icon labels: hovering raises interaction cost and fails outright on touch.",
      "why": "Handling hover properly means the same content is available by tap and by keyboard, which is where most of your traffic actually is. It also removes the class of bug where a submenu closes as the pointer travels to it.",
      "how": [
        "Make everything reachable by click or tap, then treat hover as a shortcut layered on top.",
        "Trigger hover-revealed content on focus as well, so keyboard users get it.",
        "Meet 1.4.13: let Escape dismiss it, let the pointer move onto it, and do not time it out.",
        "Test with a phone and with the keyboard alone before sign-off, not with a mouse on a large screen."
      ],
      "example": "A desktop mega-menu that opens on hover and has no click handler leaves phone users tapping the top-level item and landing on a category page that was never designed to carry the links.",
      "numbers": "WCAG 2.2 SC 1.4.13 (Level AA): additional content triggered by hover or focus must be dismissable, hoverable and persistent.",
      "pitfall": "The hover state gets designed and reviewed on a large monitor with a mouse. The touch equivalent is discovered by the client, on their phone, after launch.",
      "source": "W3C, WCAG 2.2 SC 1.4.13 (2023); Aurora Harley, Icon Usability, Nielsen Norman Group (2014)",
      "verify": {
        "status": "verified",
        "note": "The three conditions of SC 1.4.13 checked against the WCAG 2.2 Recommendation text. The interaction-cost and touch point checked against the NN/g Icon Usability article."
      },
      "belongs": {
        "verdict": "core",
        "why": "Input modality is a design constraint, and hover dependence is the most common way a desktop-first design breaks on a phone."
      },
      "related": [
        1031,
        1032,
        1051
      ]
    },
    {
      "n": 1036,
      "title": "Disabled buttons with no explanation",
      "aka": [
        "Greyed-out controls",
        "Dead buttons"
      ],
      "oneLine": "A greyed-out button says no without saying why, and it is usually too faint to read as well.",
      "demo": {
        "caption": "Same form, same blocked state. Only the right one names the field that stopped it and lets you try again.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Disabled, no reason</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Postcode</span><span class=\"db-input\">SW1</span><div class=\"db-row\"><span class=\"db-btn db-btn--ghost\" style=\"color:var(--ink-4);border-color:var(--rule)\">Continue</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Live button, named error</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Postcode</span><span class=\"db-input db-input--error\">SW1</span><span style=\"color:var(--sig-disputed)\">Enter a full postcode, for example SW1A 2AA</span><div class=\"db-row\"><span class=\"db-btn\">Continue</span></div></div></div></div></div></div>"
      },
      "what": "Disabling a control removes the action and gives nothing back. The user is left to work out which of several fields is the blocker. The GOV.UK Design System states the position plainly: disabled buttons have poor contrast and can confuse some users, so avoid them if possible, and only use them if research shows it makes the interface easier to understand. The contrast problem is structural, because WCAG 2.2 SC 1.4.3 exempts text that is part of an inactive user interface component from any contrast requirement, so nothing forces a disabled label to be legible.",
      "why": "Keeping the button live and validating on submit gives the user an error that names the problem, which is a route forward. A dead control is a wall with no sign on it.",
      "how": [
        "Keep the button enabled and validate on submit, then show a specific error next to the field that blocked it.",
        "If you must disable, put the reason in visible text next to the control, not in a tooltip.",
        "Do not remove the control from the tab order silently. A user who cannot focus it cannot discover it.",
        "Make disabled styling read as disabled without becoming invisible, and check it in dark mode too."
      ],
      "example": "GOV.UK Design System, Button component: avoid disabled buttons if possible, and only use them if research shows they make the user interface easier to understand.",
      "numbers": "WCAG 2.2 SC 1.4.3 exception: text that is part of an inactive user interface component has no contrast requirement.",
      "pitfall": "A long form disables Continue until every field validates, so the user stares at a grey button with no idea which field is wrong. Custom disabled states also often keep the pointer cursor, so the button still looks clickable.",
      "source": "GOV.UK Design System, Button component; W3C, WCAG 2.2 SC 1.4.3 (2023)",
      "verify": {
        "status": "verified",
        "note": "Guidance quoted directly from the GOV.UK Design System button page. The contrast exemption wording checked against the WCAG 2.2 Understanding Contrast (Minimum) document. NN/g also publishes a video on disabled buttons, which I saw listed but did not watch, so it is not relied on here."
      },
      "belongs": {
        "verdict": "core",
        "why": "Form state and error communication are core interaction design, and this is the most common way a form silently blocks someone."
      },
      "related": [
        1029,
        1044,
        1045
      ]
    },
    {
      "n": 1037,
      "title": "Generic stock imagery",
      "aka": [
        "Handshake photos",
        "Smiling models"
      ],
      "oneLine": "Users look at pictures that carry information and skip pictures that were chosen to fill a space.",
      "demo": {
        "none": "The whole difference between a real photograph and a bought one lives inside the photograph, and these demos draw no images, so any stand-in would be a grey box with the word stock written on it."
      },
      "what": "Jakob Nielsen's eyetracking write-up divides web photographs into two groups. Pictures treated as content get scrutinised: products, and real people who actually work at the company. Pictures that are decorative get ignored, and his wording on the second group is flat: users ignore stock photos of generic people. In the FreshBooks team page he illustrates, one user's gaze recording showed 10 per cent more time on the portrait photographs than on the biographies, even though the bios took up 316 per cent more space.",
      "why": "A real photograph of the actual place, product or team is read as evidence. A licensed image of strangers in a bright office is read as filler and skipped, so the space it occupies has been spent on nothing. Nielsen's own example of pure filler is a decorative photo on a Yale page, where visitors were trying to understand an application process instead.",
      "how": [
        "Shoot the real thing. Even a decent phone photograph of the actual premises beats a polished stock image of somewhere else.",
        "If a photograph is not carrying information, consider removing it rather than replacing it.",
        "Where stock is unavoidable, pick images that show the specific thing being described, not people reacting to it.",
        "Never use the same stock image a competitor is using. Reverse image search before you buy."
      ],
      "example": "Nielsen's illustration is the FreshBooks team page, where the photographs show people who genuinely worked there and the recorded gaze went to the faces rather than the text beside them.",
      "numbers": "Nielsen (2010), one user's eyetracking session on the FreshBooks team page: 10 per cent more time on the portrait photos than on the biographies, which occupied 316 per cent more space. Not a multi-user average.",
      "pitfall": "A client with no photography budget accepts stock as a placeholder and it becomes permanent. In local service businesses the giveaway is a team page of models, which quietly undermines the one thing a small firm has going for it.",
      "source": "Jakob Nielsen, Photos as Web Content, Nielsen Norman Group (31 October 2010)",
      "verify": {
        "status": "verified",
        "note": "Author, the 31 October 2010 date, the real-people versus stock-photo distinction and the 10 per cent figure checked directly against the NN/g article. The article's sentence is 'the user spent 10% more time viewing the portrait photos than reading the biographies, even though the bios consumed 316% more space', which is one participant's gaze recording used as an illustration. An earlier draft of this entry reported it as users plural and as a measured site average; corrected to what the article actually says."
      },
      "belongs": {
        "verdict": "core",
        "why": "Image selection is a design decision with a measurable effect on whether the image gets looked at."
      },
      "related": [
        1030,
        1056,
        1057
      ]
    },
    {
      "n": 1038,
      "title": "Orphaned cells in auto-fill grids",
      "aka": [
        "Empty grid tracks",
        "auto-fill gaps"
      ],
      "oneLine": "CSS auto-fill keeps empty columns, so a grid of eight items in a nine-column layout shows a hole.",
      "demo": {
        "caption": "Three items, same width both sides. auto-fill holds two empty tracks open on the left; auto-fit collapses them.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">auto-fill, five tracks</span><div class=\"db-stage db-stage--tight\"><div style=\"display:grid;grid-template-columns:repeat(5,1fr);gap:8px\"><div class=\"db-block\"></div><div class=\"db-block\"></div><div class=\"db-block\"></div><div></div><div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">auto-fit, tracks collapse</span><div class=\"db-stage db-stage--tight\"><div style=\"display:grid;grid-template-columns:repeat(3,1fr);gap:8px\"><div class=\"db-block\"></div><div class=\"db-block\"></div><div class=\"db-block\"></div></div></div></div></div>"
      },
      "what": "In CSS Grid, repeat(auto-fill, ...) creates as many tracks as will fit the container, whether or not there are items to put in them. MDN describes the alternative directly: auto-fit behaves as auto-fill except that after placing grid items, any empty repeated tracks are collapsed, and a collapsed track is treated as having a fixed size of 0px with its gutters collapsing too. So auto-fill leaves the ghost columns in place and the last row ends up short, with visible empty cells where the design expected content.",
      "why": "Knowing which keyword you want turns a recurring visual bug into a one-word fix. For a fixed set of items, such as a team of eight, an explicit column count is safer still, because it never guesses.",
      "how": [
        "Use auto-fit when tracks should stretch to fill the row, and auto-fill only when you deliberately want the empty tracks reserved.",
        "For a known item count, write the columns out explicitly, for example repeat(4, 1fr) for eight members over two rows.",
        "Check the layout at every breakpoint with the real number of items, not with placeholder counts that happen to divide evenly.",
        "Test with one item and with an awkward count such as five or seven, which is where the hole shows."
      ],
      "example": "A team page with three staff cards in a repeat(auto-fill, minmax(240px, 1fr)) grid, on a screen wide enough for five tracks, leaves tracks four and five empty and held open, so the cards bunch to the left. Change auto-fill to auto-fit and those two tracks collapse, so the three cards stretch across the row.",
      "numbers": "",
      "pitfall": "The grid is built with a content set that happens to fit and then the client adds or removes a person. The empty cell only appears at certain viewport widths, so it survives review.",
      "source": "MDN Web Docs, repeat() (CSS Grid); CSS Grid Layout Module Level 1",
      "verify": {
        "status": "verified",
        "note": "The auto-fill and auto-fit behaviour, including the wording about collapsing empty repeated tracks to 0px with collapsed gutters, checked directly against MDN's repeat() page, which quotes the specification."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a specific, reproducible layout fault in the standard tool designers now use for every card grid."
      },
      "related": [
        1026,
        1039,
        1060
      ]
    },
    {
      "n": 1039,
      "title": "Mixed corner radii",
      "aka": [
        "Inconsistent rounding",
        "Non-concentric corners"
      ],
      "oneLine": "Unrelated radius values, or nested corners that do not share a centre, read as sloppy work.",
      "demo": {
        "caption": "Both have a 26px outer radius and 14px padding. Only the right inner corner stays parallel to the outer one.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Inner radius 26, same as outer</span><div class=\"db-stage db-stage--tight\"><div class=\"db-centre\"><div style=\"padding:14px;border:1px solid var(--rule-strong);border-radius:26px\"><div class=\"db-block db-block--accent\" style=\"width:140px;height:72px;border-radius:26px\"></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Inner radius 12, which is 26 minus 14</span><div class=\"db-stage db-stage--tight\"><div class=\"db-centre\"><div style=\"padding:14px;border:1px solid var(--rule-strong);border-radius:26px\"><div class=\"db-block db-block--accent\" style=\"width:140px;height:72px;border-radius:12px\"></div></div></div></div></div></div>"
      },
      "what": "Two things go wrong. The first is a design using four unrelated radius values because each component was drawn separately. The second is subtler: a rounded element sitting inside a rounded container, where the two curves are not concentric, so the gap between them looks thicker at the corner than along the edge. The documented fix is a single formula, written up by Cloud Four as outerRadius minus gap equals innerRadius. Set the inner radius to the outer radius minus the padding and the curves stay parallel.",
      "why": "Concentric corners make a nested component look machined rather than assembled. It is a small correction that most people cannot articulate but can see, which makes it a cheap way to raise perceived quality.",
      "how": [
        "Define radius as tokens, the same way you define spacing, and use three or four values at most.",
        "For nested elements, compute the inner radius: inner = outer - padding. In CSS, calc(var(--outer-radius) - var(--padding)).",
        "Keep the radius proportional to the element. A 16px radius on a 24px chip is a pill, not a rounded rectangle.",
        "Pick one shape language. Fully square, consistently rounded or fully pill, and stop mixing them within a view."
      ],
      "example": "A card with 16px radius and 8px padding needs an 8px radius on the image inside it. Give the image the card's 16px and the corner gap visibly fattens.",
      "numbers": "Nested radius formula: inner radius = outer radius - padding (equivalently, outer = inner + padding).",
      "pitfall": "Radius tokens exist but components get built from Figma frames where a designer nudged the corner by hand. Buttons inside cards inside modals are where the compounding error shows first.",
      "source": "Craft convention; the nesting formula is documented by Paul Hebert, The Math Behind Nesting Rounded Corners, Cloud Four (26 October 2022).",
      "verify": {
        "status": "verified",
        "note": "The formula outerRadius - gap = innerRadius, with the CSS calc(var(--outer-radius) - var(--padding)) implementation, checked directly against Paul Hebert's Cloud Four article of 26 October 2022 and corroborated by several independent articles stating the same relationship. It is a geometric convention rather than a research finding, and Hebert is writing it up rather than originating it."
      },
      "belongs": {
        "verdict": "core",
        "why": "Corner radius is a component-level decision that appears in every interface, and the nesting rule is a concrete, checkable technique."
      },
      "related": [
        1026,
        1040,
        1048
      ]
    },
    {
      "n": 1040,
      "title": "Mixed shadow languages",
      "aka": [
        "Inconsistent elevation",
        "Multiple light sources"
      ],
      "oneLine": "Shadows imply a light source and a height, so mixing shadow styles puts several suns in one interface.",
      "demo": {
        "caption": "Three panels each side. On the left every shadow falls a different way; on the right, one light and three heights.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Three light sources</span><div class=\"db-stage db-stage--tight db-stage--dark\"><svg class=\"db-svg\" viewBox=\"0 0 200 116\"><rect class=\"f-mute\" x=\"25\" y=\"35\" width=\"44\" height=\"54\" opacity=\"0.45\"/><rect class=\"f-mute\" x=\"72\" y=\"34\" width=\"56\" height=\"62\" opacity=\"0.25\"/><rect class=\"f-mute\" x=\"131\" y=\"24\" width=\"44\" height=\"54\" opacity=\"0.45\"/><rect x=\"20\" y=\"30\" width=\"44\" height=\"54\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/><rect x=\"78\" y=\"30\" width=\"44\" height=\"54\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/><rect x=\"136\" y=\"30\" width=\"44\" height=\"54\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One ramp, one direction</span><div class=\"db-stage db-stage--tight db-stage--dark\"><svg class=\"db-svg\" viewBox=\"0 0 200 116\"><rect class=\"f-mute\" x=\"23\" y=\"33\" width=\"44\" height=\"54\" opacity=\"0.22\"/><rect class=\"f-mute\" x=\"84\" y=\"36\" width=\"44\" height=\"54\" opacity=\"0.34\"/><rect class=\"f-mute\" x=\"145\" y=\"39\" width=\"44\" height=\"54\" opacity=\"0.46\"/><rect x=\"20\" y=\"30\" width=\"44\" height=\"54\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/><rect x=\"78\" y=\"30\" width=\"44\" height=\"54\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/><rect x=\"136\" y=\"30\" width=\"44\" height=\"54\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/><text class=\"t\" x=\"42\" y=\"106\" text-anchor=\"middle\">level 1</text><text class=\"t\" x=\"100\" y=\"106\" text-anchor=\"middle\">level 2</text><text class=\"t\" x=\"158\" y=\"106\" text-anchor=\"middle\">level 3</text></svg></div></div></div>"
      },
      "what": "A drop shadow is a claim about physics: this surface is a certain distance above that one, lit from a certain direction. Material Design formalises this as elevation, defined in one sentence as the relative distance between two surfaces along the z-axis, measured in density-independent pixels and depicted by default using shadows. When one component has a tight dark shadow, another has a wide soft one and a third has a shadow offset the other way, the interface is asserting three different light sources and three unrelated height systems at once.",
      "why": "A consistent shadow ramp lets shadow carry meaning: more shadow means nearer the front, which is how a user reads a menu as sitting above a card. Once the ramp is inconsistent, shadow stops being information and becomes decoration.",
      "how": [
        "Define a short shadow ramp as tokens, one shadow per elevation level, and use nothing else.",
        "Keep one light direction across the whole product, conventionally from above.",
        "Tie elevation to meaning: resting surfaces low, overlays and menus high, and never give two things at the same layer different shadows.",
        "Check shadows in dark mode. A black shadow on a dark surface disappears, so those levels usually need a lighter surface tint instead."
      ],
      "example": "Material Design defines elevation as the relative distance between two surfaces along the z-axis, and says the distance from the front of one surface to the front of another is measured in dps and depicted by default using shadows.",
      "numbers": "",
      "pitfall": "Shadows arrive from three sources: the component library default, a designer's Figma effect and a developer's copied CSS snippet. Nobody owns them, so the ramp never gets written down.",
      "source": "Google, Material Design 2, Elevation; the same definition is carried into the Material 3 component documentation.",
      "verify": {
        "status": "verified",
        "note": "The sentence 'Elevation is the relative distance between two surfaces along the z-axis' was confirmed verbatim on the m2.material.io Elevation page, together with the note that the distance is measured in dps and depicted by default using shadows. An earlier draft attributed the sentence to the Material Design 3 elevation page; the M3 page itself would not load this session, though the same sentence does appear in Google's Material 3 material-web component documentation, so the attribution has been moved to the source I could actually read. The entry quotes no dp figures. The M2 page does carry a table of default elevation values, which I read but the entry does not need."
      },
      "belongs": {
        "verdict": "core",
        "why": "Depth cueing is a standard part of interface visual language and a shadow ramp is a real, definable system."
      },
      "related": [
        1026,
        1039,
        1048
      ]
    },
    {
      "n": 1041,
      "title": "Decorative motion with no purpose",
      "aka": [
        "Gratuitous animation",
        "Scroll animations everywhere"
      ],
      "oneLine": "Motion that carries no information costs time on every visit and makes some people physically unwell.",
      "demo": {
        "caption": "The same two paragraphs. The left pair spends most of its loop unreadable, and nothing has been said when it arrives.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Reveal on scroll, on everything</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-lines db-anim db-anim--fade db-anim--ease\"><i></i><i></i><i></i></div><div class=\"db-lines db-anim db-anim--fade db-anim--ease\"><i></i><i></i><i></i></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">No motion</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div>"
      },
      "what": "Animation earns its place when it shows a relationship: where a panel came from, what changed, that something is loading. Motion added for atmosphere charges the same delay without the payoff. There are two hard standards. WCAG 2.2 SC 2.2.2 Pause, Stop, Hide, Level A, requires a mechanism to pause, stop or hide any moving, blinking or scrolling information that starts automatically and lasts more than five seconds. SC 2.3.3 Animation from Interactions, Level AAA, requires that motion animation triggered by interaction can be disabled unless it is essential.",
      "why": "Vestibular disorders make large parallax and zoom effects physically sickening for the people who have them. Respecting the operating system setting costs one media query and removes the problem.",
      "how": [
        "Wrap non-essential motion in @media (prefers-reduced-motion: reduce) and turn it off there. The feature has two values, no-preference and reduce, and is defined in Media Queries Level 5.",
        "Give any automatic movement over five seconds a visible pause control, per SC 2.2.2.",
        "Prefer opacity and small position changes over large-scale parallax, zoom and rotation.",
        "Ask what each animation tells the user. If the answer is nothing, delete it rather than shortening it."
      ],
      "example": "Nielsen Norman Group's scrolljacking research found most participants experienced at least mild disorientation, with some reading heavy scrolljacking as a technical fault.",
      "numbers": "WCAG 2.2 SC 2.2.2 (Level A): five seconds. SC 2.3.3 (Level AAA). CSS prefers-reduced-motion values: no-preference, reduce.",
      "pitfall": "A reveal-on-scroll library gets applied to every section, so content is invisible until it animates in, and anyone scrolling fast sees a page of blanks. Reduced-motion support gets added to the marketing site and forgotten in the app.",
      "source": "W3C, WCAG 2.2 SC 2.2.2 and SC 2.3.3 (2023); CSS Media Queries Level 5, prefers-reduced-motion",
      "verify": {
        "status": "verified",
        "note": "Criterion text, levels and the five-second figure checked against the WCAG 2.2 Recommendation. The prefers-reduced-motion values and its home in Media Queries Level 5 checked against MDN. Scrolljacking findings checked against Sara Paul's NN/g article (6 August 2023)."
      },
      "belongs": {
        "verdict": "core",
        "why": "Motion is a design material with published constraints, and the failure has an accessibility consequence, not just an aesthetic one."
      },
      "related": [
        1033,
        1051,
        1053,
        10041
      ]
    },
    {
      "n": 10041,
      "title": "Audio that plays automatically",
      "aka": [
        "Autoplay sound",
        "Unrequested audio"
      ],
      "oneLine": "Sound the visitor did not ask for talks over their screen reader and their music, and they leave.",
      "demo": {
        "caption": "Two sound sources in one pair of ears. The shaded overlap is what a screen reader user has to listen through.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 104\"><rect class=\"f-accent\" x=\"122\" y=\"16\" width=\"144\" height=\"48\" opacity=\"0.22\"/><text class=\"t\" x=\"8\" y=\"33\">page audio</text><rect class=\"f-accent\" x=\"96\" y=\"22\" width=\"210\" height=\"14\"/><text class=\"t\" x=\"8\" y=\"55\">screen reader</text><rect class=\"f\" x=\"122\" y=\"44\" width=\"144\" height=\"14\"/><path class=\"s-accent\" d=\"M175 14 V70\" style=\"stroke-dasharray:3 3\"/><text class=\"t\" x=\"171\" y=\"11\" text-anchor=\"end\">control required past 3s</text><path class=\"s-mute\" d=\"M96 70 H306 M96 70 V74 M175 70 V74 M306 70 V74\"/><text class=\"t\" x=\"96\" y=\"84\" text-anchor=\"middle\">0s</text><text class=\"t\" x=\"175\" y=\"84\" text-anchor=\"middle\">3s</text><text class=\"t\" x=\"306\" y=\"84\" text-anchor=\"end\">8s</text><text class=\"t\" x=\"194\" y=\"98\" text-anchor=\"middle\">both at once</text></svg></div>"
      },
      "what": "A video that autoplays with sound, a background track or an audio advert takes over the device without permission. WCAG 2.2 SC 1.4.2 Audio Control, Level A, is unusually specific: if any audio on a web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. Level A is the lowest tier in WCAG, which marks this as a baseline requirement rather than a refinement.",
      "why": "A screen reader user hears your audio mixed with the speech they navigate by and cannot separate the two. Most other visitors are in an office or already listening to something, and their first move is to close the tab rather than hunt for a mute control.",
      "how": [
        "Do not autoplay audio. If a video must autoplay for atmosphere, mute it and provide an unmute control.",
        "If audio does start on its own, give a pause or stop control reachable within the first few seconds and by keyboard.",
        "Put that control near the top of the reading order, not floating over the video where a screen reader reaches it last.",
        "Provide captions and a transcript, so the content never depends on hearing it."
      ],
      "example": "Browsers now block most autoplay with sound by default, which is a platform workaround for a design failure rather than a reason to keep designing it.",
      "numbers": "WCAG 2.2 SC 1.4.2 Audio Control (Level A): automatic audio lasting more than 3 seconds requires a pause or stop mechanism, or an independent volume control.",
      "pitfall": "The background video is muted on the marketing site and unmuted in a case-study embed nobody audited. Third-party advert slots are the other reliable source, because the page owner does not control what they play.",
      "source": "W3C, WCAG 2.2 SC 1.4.2 Audio Control (2023)",
      "verify": {
        "status": "verified",
        "note": "Normative text, the 3 second figure and the Level A rating checked directly against the W3C Understanding Audio Control document. Added as a gap: the master list covers decorative motion at 1041 but has no entry for unrequested sound, which is a separate criterion with a stricter threshold."
      },
      "belongs": {
        "verdict": "core",
        "why": "Whether media starts on its own is a design decision, and it has the lowest-tier accessibility requirement attached to it."
      },
      "related": [
        1041,
        1051,
        1054
      ]
    },
    {
      "n": 1042,
      "title": "Infinite scroll with a footer",
      "aka": [
        "Endless scroll",
        "Unreachable footer"
      ],
      "oneLine": "Content that loads forever puts the footer permanently out of reach and breaks the scrollbar as a position cue.",
      "demo": {
        "caption": "Same footer both sides. On the left every scroll appends another batch, so the bottom of the page keeps moving away.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Infinite scroll</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 150\"><rect class=\"s-mute\" x=\"8\" y=\"8\" width=\"112\" height=\"94\"/><rect class=\"f-mute\" x=\"16\" y=\"16\" width=\"96\" height=\"7\" opacity=\"0.5\"/><rect class=\"f-mute\" x=\"16\" y=\"28\" width=\"96\" height=\"7\" opacity=\"0.5\"/><rect class=\"f-mute\" x=\"16\" y=\"40\" width=\"96\" height=\"7\" opacity=\"0.5\"/><rect class=\"f-mute\" x=\"16\" y=\"52\" width=\"96\" height=\"7\" opacity=\"0.5\"/><rect class=\"f-mute\" x=\"16\" y=\"64\" width=\"96\" height=\"7\" opacity=\"0.5\"/><rect class=\"f-mute\" x=\"16\" y=\"76\" width=\"96\" height=\"7\" opacity=\"0.5\"/><rect class=\"f-mute\" x=\"16\" y=\"88\" width=\"96\" height=\"7\" opacity=\"0.5\"/><rect class=\"f-mute\" x=\"126\" y=\"8\" width=\"6\" height=\"94\" opacity=\"0.18\"/><rect class=\"f-mute\" x=\"126\" y=\"34\" width=\"6\" height=\"26\" opacity=\"0.7\"/><text class=\"t\" x=\"64\" y=\"113\" text-anchor=\"middle\">+ next batch</text><path class=\"s-mute\" d=\"M64 117 V125 M60 121 L64 125 L68 121\"/><g opacity=\"0.45\"><rect x=\"8\" y=\"129\" width=\"112\" height=\"16\" style=\"fill:var(--paper-sunk);stroke:var(--rule-strong)\"/><text class=\"t\" x=\"64\" y=\"141\" text-anchor=\"middle\">footer</text></g></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Pagination</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 150\"><rect class=\"s-mute\" x=\"8\" y=\"8\" width=\"112\" height=\"94\"/><rect class=\"f-mute\" x=\"16\" y=\"16\" width=\"96\" height=\"7\" opacity=\"0.5\"/><rect class=\"f-mute\" x=\"16\" y=\"28\" width=\"96\" height=\"7\" opacity=\"0.5\"/><rect class=\"f-mute\" x=\"16\" y=\"40\" width=\"96\" height=\"7\" opacity=\"0.5\"/><rect class=\"f-mute\" x=\"16\" y=\"52\" width=\"96\" height=\"7\" opacity=\"0.5\"/><rect class=\"f-accent\" x=\"16\" y=\"64\" width=\"12\" height=\"10\"/><rect class=\"s-mute\" x=\"32\" y=\"64\" width=\"12\" height=\"10\"/><rect class=\"s-mute\" x=\"48\" y=\"64\" width=\"12\" height=\"10\"/><rect x=\"16\" y=\"82\" width=\"96\" height=\"14\" style=\"fill:var(--paper-sunk);stroke:var(--rule-strong)\"/><text class=\"t\" x=\"64\" y=\"92\" text-anchor=\"middle\">footer</text><rect class=\"f-mute\" x=\"126\" y=\"8\" width=\"6\" height=\"94\" opacity=\"0.18\"/><rect class=\"f-mute\" x=\"126\" y=\"68\" width=\"6\" height=\"34\" opacity=\"0.7\"/></svg></div></div></div>"
      },
      "what": "Infinite scroll appends new content as the user approaches the bottom, so the bottom keeps moving. Anything parked below the feed, typically the footer with contact details, terms and site links, can never be reached. Hoa Loranger's Nielsen Norman Group article makes the related point that infinite scrolling breaks the scroll bar by causing it to display the page length inaccurately, so the user loses any sense of how much is left. She recommends it for browsing and serendipitous discovery on flat, streaming content, and warns it is not recommended for goal-oriented finding tasks.",
      "why": "Deciding between pagination and infinite scroll early avoids designing a footer that nobody can use. It also decides whether a user can return to the same position later, which pagination gives you and infinite scroll usually does not.",
      "how": [
        "If the page has a footer that matters, use pagination or a Load more button instead.",
        "If you keep infinite scroll, move the footer links into a persistent sidebar or a sticky bar, or repeat them above the feed.",
        "Give each loaded batch a real URL so a user can share a position and the back button behaves.",
        "Use a Load more button for goal-oriented lists such as search results and product categories."
      ],
      "example": "A shop that switches its category pages to infinite scroll puts the delivery policy, the returns terms and the phone number, all of which live in the footer, permanently one more batch of products away.",
      "numbers": "",
      "pitfall": "The footer holds the phone number, the privacy notice and the returns policy, and nobody notices it is unreachable because the team always navigates by menu. Search engines see the same wall.",
      "source": "Hoa Loranger, Infinite Scrolling Is Not for Every Website, Nielsen Norman Group (2 February 2014)",
      "verify": {
        "status": "verified",
        "note": "Author, the 2 February 2014 date, the browsing-versus-finding distinction and the broken-scrollbar quote checked directly against the NN/g article, which does not itself discuss footers. The unreachable-footer problem was confirmed separately against a 2016 Linkoping University master's thesis by Jonas Karlsson and Martin Larsson, Adapting infinite-scroll with the user experience in mind, which lists 'the footer is unreachable in a traditional infinite-scroll' among the drawbacks. An earlier draft credited that thesis to one author; corrected."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a concrete information architecture consequence of a common pattern choice, and it is decided at design time."
      },
      "related": [
        1034,
        1052,
        1059
      ]
    },
    {
      "n": 1043,
      "title": "Asking for data you don't need",
      "aka": [
        "Over-long forms",
        "Excessive field collection"
      ],
      "oneLine": "Every extra field costs conversions and, under GDPR, collecting more than you need is unlawful.",
      "demo": {
        "caption": "The same enquiry both sides. Every extra row on the left is one more thing to answer before sending.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Nine fields</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div><span class=\"db-label\">Title</span><div class=\"db-bar\"></div></div><div><span class=\"db-label\">First name</span><div class=\"db-bar\"></div></div><div><span class=\"db-label\">Last name</span><div class=\"db-bar\"></div></div><div><span class=\"db-label\">Company name</span><div class=\"db-bar\"></div></div><div><span class=\"db-label\">Job title</span><div class=\"db-bar\"></div></div><div><span class=\"db-label\">Company size</span><div class=\"db-bar\"></div></div><div><span class=\"db-label\">Phone</span><div class=\"db-bar\"></div></div><div><span class=\"db-label\">Email</span><div class=\"db-bar\"></div></div><div><span class=\"db-label\">Message</span><div class=\"db-bar db-bar--tall\"></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three fields</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div><span class=\"db-label\">Name</span><div class=\"db-bar\"></div></div><div><span class=\"db-label\">Email</span><div class=\"db-bar\"></div></div><div><span class=\"db-label\">Message</span><div class=\"db-bar db-bar--tall\"></div></div></div></div></div></div>"
      },
      "what": "Each field is a small decision the user has to make and a small reason to leave. Baymard Institute's checkout research puts numbers on the gap: the average checkout in 2024 ran to 11.3 form fields, down from 11.8 in 2021 and 12.7 in 2019, while their finding is that most sites need only 8 in total. There is a legal side too. GDPR Article 5(1)(c) requires personal data to be adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed, a principle the regulation names data minimisation.",
      "why": "Cutting fields raises completion and reduces the amount of personal data you have to secure, justify and eventually delete. It is one of the few changes that improves the commercial and the compliance position at once.",
      "how": [
        "For every field, name the process that consumes it. If nobody can, remove it.",
        "Move optional data out of the critical path and ask for it after the conversion, in context.",
        "Use one field where possible: a single full-name field instead of title, first, middle and last.",
        "Count fields as a design metric and track it, the way Baymard does."
      ],
      "example": "Baymard Institute: average checkout 11.3 form fields in 2024, against their finding that most sites need only 8.",
      "numbers": "Baymard Institute: average checkout form fields 12.7 (2019), 11.8 (2021), 11.3 (2024); most sites need only 8. GDPR Article 5(1)(c): data minimisation.",
      "pitfall": "Fields are added by whoever asks loudest and removed by nobody, because deleting one means telling a department they cannot have their report. Phone number as a required field on a contact form is the usual first casualty of that argument.",
      "source": "Baymard Institute checkout research; Regulation (EU) 2016/679 (GDPR), Article 5(1)(c)",
      "verify": {
        "status": "verified",
        "note": "Field-count figures and the 8-field finding checked against Baymard's Checkout Optimization: 5 Ways to Minimize Form Fields article. The Article 5(1)(c) wording checked verbatim against gdpr-info.eu. I did not verify any specific conversion-uplift percentage, so none is quoted."
      },
      "belongs": {
        "verdict": "core",
        "why": "Form scope is decided by designers, and it is one of the few design choices with both a measured commercial effect and a legal constraint."
      },
      "related": [
        1036,
        1044,
        1045
      ]
    },
    {
      "n": 1044,
      "title": "Error messages that blame the user",
      "aka": [
        "Invalid input",
        "Accusatory errors"
      ],
      "oneLine": "An error that calls the input invalid says the user failed, without saying how to fix it.",
      "demo": {
        "caption": "Same wrong entry both sides. The left message names the user's mistake, the right one names the format.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Names the failure</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Date of birth</span><span class=\"db-input db-input--error\" style=\"color:var(--ink)\">09/06/85</span><span class=\"db-type\" style=\"font-size:12px;color:var(--sig-disputed)\">Invalid date.</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Names the fix</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Date of birth</span><span class=\"db-input db-input--error\" style=\"color:var(--ink)\">09/06/85</span><span class=\"db-type\" style=\"font-size:12px;color:var(--sig-disputed)\">Enter the year in full, as 09/06/1985.</span></div></div></div></div></div>"
      },
      "what": "Nielsen's ninth heuristic, unchanged since 1994, is to help users recognise, diagnose and recover from errors. Nielsen Norman Group's error-message guidelines put the wording rule bluntly: do not use phrasing that blames users or implies they are doing something wrong, such as invalid, illegal, or incorrect. They add that merely stating the problem is also not enough, and that a message should offer some potential remedies. WCAG 2.2 backs this with SC 3.3.1 Error Identification at Level A and SC 3.3.3 Error Suggestion at Level AA.",
      "why": "A person who has just been told they are wrong, with no route out, abandons the task. A message that names the field, says what format is expected and leaves their input in place converts a dead end into one more attempt.",
      "how": [
        "Describe the system's expectation, not the user's failure: Enter a date as DD/MM/YYYY, not Invalid date.",
        "Put the message next to the field it belongs to, and summarise at the top for long forms.",
        "Preserve what they typed. Never clear a form on validation failure.",
        "Prevent where you can: input masks, sensible defaults and accepting spaces in card and postcode fields."
      ],
      "example": "A card field that rejects 4111 1111 1111 1111 because of the spaces, and says Invalid card number, is doing both halves of this wrong at once.",
      "numbers": "WCAG 2.2 SC 3.3.1 Error Identification (Level A); SC 3.3.3 Error Suggestion (Level AA).",
      "pitfall": "The messages come straight from a validation library or a database constraint, so the user sees developer language. Errors also tend to fire on blur before the user has finished typing, which scolds them mid-thought.",
      "source": "Jakob Nielsen, 10 Usability Heuristics (1994), heuristic 9; Tim Neusesser and Evan Sunwall, Error-Message Guidelines, Nielsen Norman Group (14 May 2023); W3C, WCAG 2.2",
      "verify": {
        "status": "verified",
        "note": "The no-blame and offer-remedies quotes and the authors and date checked directly against the NN/g error-message guidelines. Heuristic 9's wording and the 1994 date checked against the NN/g heuristics page, which notes the heuristics have been unchanged since 1994 and were last reviewed on 30 January 2024."
      },
      "belongs": {
        "verdict": "core",
        "why": "Error copy is designed, not written by accident, and it is where a product either helps or abandons someone."
      },
      "related": [
        1036,
        1043,
        1045,
        1046
      ]
    },
    {
      "n": 1045,
      "title": "Placeholder text used as a label",
      "aka": [
        "Placeholder-only forms",
        "Ghost labels"
      ],
      "oneLine": "Placeholder text vanishes the moment someone types, taking the only explanation of the field with it.",
      "demo": {
        "caption": "Cover the tags. On the left the filled field no longer says what it holds, on the right it still does.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Placeholder as the label</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Before typing</span><span class=\"db-input\">Date of birth</span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">After typing</span><span class=\"db-input\" style=\"color:var(--ink)\">09/06/1985</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Label above, format inside</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Before typing</span><span class=\"db-label\">Date of birth</span><span class=\"db-input\">DD/MM/YYYY</span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">After typing</span><span class=\"db-label\">Date of birth</span><span class=\"db-input\" style=\"color:var(--ink)\">09/06/1985</span></div></div></div></div></div>"
      },
      "what": "The W3C Web Accessibility Initiative states it directly: placeholder text is not a replacement for labels, and assistive technologies such as screen readers do not treat placeholder text as labels. WCAG 2.2 SC 3.3.2 Labels or Instructions, Level A, requires that labels or instructions are provided when content requires user input. Katie Sherwin's Nielsen Norman Group article lists the usability costs: disappearing placeholder text strains short-term memory, users cannot check their answers before submitting without deleting them, error correction becomes guesswork, and some users mistake a placeholder for a pre-filled value and skip the field.",
      "why": "A visible label stays put while the field is filled, checked, corrected and submitted. It also gives the field a programmatic name, which is what a screen reader, a voice control user and an autofill engine all need.",
      "how": [
        "Put a real label above every field and keep it visible at all times.",
        "Use the placeholder for a format example only, and never for the field name.",
        "Associate the label with the input properly, using for and id or by wrapping the input.",
        "If you use floating labels, check the shrunk state still meets contrast, and be aware Sherwin notes filled fields are less noticeable."
      ],
      "example": "WebAIM's 2026 analysis of one million home pages found missing form input labels on 51 per cent of them.",
      "numbers": "WCAG 2.2 SC 3.3.2 (Level A). WebAIM Million 2026: missing form input labels on 51 per cent of one million home pages.",
      "pitfall": "Placeholder-only forms get shipped because they look tidy in a mockup where every field is empty. The problem only shows up once the form is half filled, half wrong, and being corrected.",
      "source": "W3C WAI, Forms tutorial, User instructions; Katie Sherwin, Placeholders in Form Fields Are Harmful, Nielsen Norman Group (11 May 2014); WCAG 2.2 SC 3.3.2",
      "verify": {
        "status": "verified",
        "note": "The two sentences 'Placeholder text is not a replacement for labels' and 'Assistive technologies, such as screen readers, do not treat placeholder text as labels' quoted directly from the W3C WAI forms tutorial, on the User instructions page rather than the Labelling controls page as an earlier draft said. SC 3.3.2's normative text and Level A status checked against its Understanding document. Sherwin's problem list, the 11 May 2014 date and her point that fields with text in them are less noticeable checked against the NN/g article. Prevalence figure from the WebAIM Million 2026 report."
      },
      "belongs": {
        "verdict": "core",
        "why": "Form labelling is a design decision with a Level A standard behind it and it fails on half the web."
      },
      "related": [
        1036,
        1043,
        1044,
        1050
      ]
    },
    {
      "n": 1046,
      "title": "Jargon in calls to action",
      "aka": [
        "Business-speak buttons",
        "Vague CTAs"
      ],
      "oneLine": "A button that says Discover or Get started tells nobody what happens when they press it.",
      "demo": {
        "caption": "Read each button on its own. Only one column tells you what the next screen will be.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Could sit on any site</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-btn\">Discover</span></div><div class=\"db-row\"><span class=\"db-btn\">Get started</span></div><div class=\"db-row\"><span class=\"db-btn\">Learn more</span></div><div class=\"db-row\"><span class=\"db-btn\">Explore our solutions</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Names the outcome</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-btn\">Book an appointment</span></div><div class=\"db-row\"><span class=\"db-btn\">Create your account</span></div><div class=\"db-row\"><span class=\"db-btn\">Download the price list</span></div><div class=\"db-row\"><span class=\"db-btn\">Send my enquiry</span></div></div></div></div></div>"
      },
      "what": "A call to action has one job: say what the next screen will be. Words that describe a feeling rather than an outcome fail that job. GOV.UK's editorial guidance takes the strongest published line on this. Plain English is mandatory for all of GOV.UK, and its A to Z style guide carries an explicit words-to-avoid list, including deliver, facilitate, empower, key, leverage, robust, streamline, tackle and utilise, each with a plainer replacement. It also warns against metaphors on the grounds that they do not say what you actually mean and lead to slower comprehension.",
      "why": "Nielsen's second heuristic asks the interface to speak the user's language rather than system-oriented terms. A concrete verb and object removes the pause before a click, and it makes the button honest about what it does.",
      "how": [
        "Name the outcome: Book an appointment, Download the price list, Send my enquiry.",
        "Use the user's words, taken from support tickets and search queries, not the internal product name.",
        "Read the button on its own, out of context. If it could sit on any site in any industry, rewrite it.",
        "Check the GOV.UK words-to-avoid list against your own copy. Most marketing pages fail it."
      ],
      "example": "GOV.UK A to Z style guide: 'Plain English is mandatory for all of GOV.UK so avoid using these words', followed by entries such as 'utilise, use \"use\"' and 'in order to, usually not needed - do not use it'.",
      "numbers": "",
      "pitfall": "The jargon is inherited from the sales deck, so it feels normal internally and opaque to everyone else. Generic buttons also destroy analytics, because five different Learn more links cannot be told apart in a report.",
      "source": "GOV.UK content and publishing guidance, A to Z style guide, Words to avoid; Jakob Nielsen, 10 Usability Heuristics (1994), heuristic 2",
      "verify": {
        "status": "verified",
        "note": "The words-to-avoid list and the plain-English mandate quoted directly from the GOV.UK A to Z style guide page. Heuristic 2, Match between the system and the real world, checked against the NN/g heuristics page. The guide is about GOV.UK content generally rather than buttons specifically, which is stated here rather than glossed over."
      },
      "belongs": {
        "verdict": "core",
        "why": "Interface copy is design work, and the label on a button is often the most consequential sentence on a page."
      },
      "related": [
        1031,
        1032,
        1044,
        1047
      ]
    },
    {
      "n": 1047,
      "title": "Walls of undifferentiated text",
      "aka": [
        "Text dump",
        "No scannable structure"
      ],
      "oneLine": "People scan web pages rather than read them, so unbroken prose gets skipped whatever it says.",
      "demo": {
        "caption": "The same amount of text both sides. Scan each for five seconds and see which one gives you anything.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Nothing to catch on</span><div class=\"db-stage db-stage--tight\"><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Headings and a list</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-bar db-bar--ink\" style=\"width:52%\"></div><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-bar db-bar--ink\" style=\"width:38%\"></div><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><div class=\"db-bar db-bar--thin\" style=\"width:70%\"></div></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><div class=\"db-bar db-bar--thin\" style=\"width:56%\"></div></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><div class=\"db-bar db-bar--thin\" style=\"width:64%\"></div></div></div><div class=\"db-bar db-bar--ink\" style=\"width:44%\"></div><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div>"
      },
      "what": "Jakob Nielsen's 1997 study of reading behaviour found that 79 per cent of test users always scanned any new page they came across, and only 16 per cent read word by word. The same work tested rewrites of a single page and measured usability improvements of 58 per cent for concise text, 47 per cent for a scannable layout, 27 per cent for objective rather than promotional language, and 124 per cent for a version combining all three. A page of long paragraphs with no headings offers a scanner nothing to catch on.",
      "why": "Structure is what lets someone find the one paragraph they came for without reading the other eleven. Adding headings, lists and short paragraphs does not shorten the content, it just makes the shape of it visible.",
      "how": [
        "Give every section a heading that states its content, using real heading elements so the structure is programmatic.",
        "Front-load each paragraph with its conclusion, then support it.",
        "Break lists out of prose. If a sentence contains three commas and an 'and', it is probably a list.",
        "Keep the measure sensible and the paragraphs short, and use bold for meaningful terms rather than for emphasis."
      ],
      "example": "Nielsen's 1997 test measured a 124 per cent usability improvement for the version of a page that was concise, scannable and objective at once.",
      "numbers": "Nielsen (1997): 79 per cent of users always scanned; 16 per cent read word by word. Measured usability improvements: concise 58 per cent, scannable 47 per cent, objective language 27 per cent, combined 124 per cent.",
      "pitfall": "The copy arrives as a Word document and gets poured into a template unedited, because nobody has the authority to cut a client's paragraph. Headings then get added that describe nothing, such as Our Approach.",
      "source": "Jakob Nielsen, How Users Read on the Web, Nielsen Norman Group (30 September 1997), reporting work with John Morkes",
      "verify": {
        "status": "verified",
        "note": "All five percentages, the author and the 30 September 1997 date checked directly against the NN/g article. It is a single study on a small set of test pages from 1997, so the figures are best read as evidence of direction rather than constants."
      },
      "belongs": {
        "verdict": "core",
        "why": "Typographic structure is design work, and this is the measured case for doing it."
      },
      "related": [
        1025,
        1027,
        1046,
        1048
      ]
    },
    {
      "n": 1048,
      "title": "Flat hierarchy and competing focal points",
      "aka": [
        "No visual hierarchy",
        "Everything is loud"
      ],
      "oneLine": "When several elements shout at the same volume, the reader gets no guidance and picks at random.",
      "demo": {
        "caption": "Three panels each side. Point at the one you are meant to press first: only the right side answers.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Three equal panels</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-bar db-bar--ink db-bar--tall\" style=\"width:72%\"></div><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-row\"><span class=\"db-btn db-btn--sm\">Book a demo</span></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-bar db-bar--ink db-bar--tall\" style=\"width:72%\"></div><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-row\"><span class=\"db-btn db-btn--sm\">Read the report</span></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-bar db-bar--ink db-bar--tall\" style=\"width:72%\"></div><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-row\"><span class=\"db-btn db-btn--sm\">Join the mailing list</span></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One leads, two follow</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-bar db-bar--ink db-bar--tall\" style=\"width:86%\"></div><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row\"><span class=\"db-btn\">Book a demo</span></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-bar\" style=\"width:44%\"></div><div class=\"db-lines\"><i></i></div><div class=\"db-row\"><span class=\"db-btn db-btn--quiet db-btn--sm\">Read the report</span></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-bar\" style=\"width:38%\"></div><div class=\"db-lines\"><i></i></div><div class=\"db-row\"><span class=\"db-btn db-btn--quiet db-btn--sm\">Join the mailing list</span></div></div></div></div></div></div></div>"
      },
      "what": "Hierarchy is the order in which a design proposes things be looked at. It is built from size, weight, colour, position and space. A flat page has all of those set to similar values, so nothing recedes and nothing leads. The related fault is competing focal points: three full-width panels, each with a large heading, a bright button and a photograph, arranged so that none can win. Nielsen's eighth heuristic covers the neighbouring idea, that every extra unit of information competes with the relevant units and reduces their relative visibility.",
      "why": "Establishing a clear first, second and third gives the reader a route through the page and gives you somewhere to put the thing you actually want clicked. It also forces the commercial conversation about what the page is for.",
      "how": [
        "Decide the single most important element on the page before you style anything, and make everything else quieter than it.",
        "Get contrast from size and space before colour. A large heading with room around it beats a small heading in red.",
        "Allow one primary button per view. Everything else is secondary or a text link.",
        "Squint at the design or blur it heavily. Whatever is still legible is your hierarchy, and it should match your intent."
      ],
      "example": "A homepage with three equally weighted hero panels, each with its own large heading and filled button, is the standard result of three stakeholders each getting their section.",
      "numbers": "",
      "pitfall": "Hierarchy collapses through addition rather than through a decision. Each new component is designed on its own and looks correct, and the flatness only appears when they are stacked on one page.",
      "source": "Origin unclear. Standard composition teaching; Nielsen's heuristic 8, Aesthetic and minimalist design (1994), covers the adjacent point about competing information.",
      "verify": {
        "status": "unverified",
        "note": "I could not find a single named originator or a specific study for visual hierarchy as a stated principle. It runs through the composition and typography canon without one canonical citation. Nielsen's heuristic 8 was checked against the NN/g heuristics page and is genuinely adjacent rather than the same claim, which is why the source is given as unclear."
      },
      "belongs": {
        "verdict": "core",
        "why": "Deciding what gets looked at first is the base job of layout, even though the principle has no single documented origin."
      },
      "related": [
        1025,
        1033,
        1040,
        1047
      ]
    },
    {
      "n": 1049,
      "title": "Text touching a rule or an edge",
      "aka": [
        "No safe margin",
        "Text crowding a border"
      ],
      "oneLine": "Type set hard against a rule, a border or the trim edge looks like an accident and often becomes one.",
      "demo": {
        "caption": "Look at the descenders on the left: nothing separates the type from the border and the rule it sits on.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No padding</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\" style=\"padding:0\"><span class=\"db-type\" style=\"font-size:13px\">Type needs air on every edge</span></div><div style=\"border-top:1px solid var(--rule-strong);padding-top:0\"><span class=\"db-note\">Figure 4. Press sheet, gripper edge</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Padding from the scale</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\" style=\"padding:12px\"><span class=\"db-type\" style=\"font-size:13px\">Type needs air on every edge</span></div><div style=\"border-top:1px solid var(--rule-strong);padding-top:8px\"><span class=\"db-note\">Figure 4. Press sheet, gripper edge</span></div></div></div></div></div>"
      },
      "what": "Letters need air on all four sides. Set a caption a pixel under a hairline rule and the two read as one object. Push body text to the edge of a coloured panel and the descenders appear to fall out of it. In print the stakes are physical: sheets shift on press and get trimmed with a tolerance, so anything close to the trim line risks being cut. UK trade printers handle this by asking for bleed on artwork that runs off the page and a quiet zone, a safe area a few millimetres inside the trim, that nothing important may enter.",
      "why": "Padding is what tells the eye that two things are separate. It also protects you from the parts of production you do not control: the press, the browser's rounding, the client pasting in a longer word.",
      "how": [
        "Give every rule, border and container a padding value from your spacing scale, and never set it to zero for text.",
        "Ask the printer for their bleed and quiet-zone figures before you set up the document, because they vary by press and product.",
        "Check text against panel edges at the smallest breakpoint, where padding is usually squeezed first.",
        "Watch descenders and diacritics. A line that clears the rule in English can collide in French or Vietnamese."
      ],
      "example": "Marqetspace asks for a 4mm quiet zone from the cut edge and 1.5mm bleed on most products, then at least 10mm and 3mm on booklets, where creep moves the inner pages. One supplier, two sets of figures, which is the point.",
      "numbers": "No single standard. Bleed and quiet-zone allowances are set by the printer and by the product. Marqetspace: 1.5mm bleed and a 4mm quiet zone on most products; 3mm bleed and at least a 10mm quiet zone on booklets. Inprint Group: 3mm bleed.",
      "pitfall": "The design is approved on screen where the trim line is invisible, then folded leaflets come back with the page numbers shaved. On the web, the same fault appears when a container gets padding but its child heading has a negative margin from a reset.",
      "source": "Print trade practice; individual printers publish their own bleed and quiet-zone specifications, for example the Marqetspace file supply guide.",
      "verify": {
        "status": "verified",
        "note": "Read the Marqetspace file supply pages directly. They state 1.5mm bleed and important elements 4mm away from the cut edge on most products, and 3mm bleed with at least a 10mm quiet zone on booklets, where creep is named as the reason. Inprint Group's guide, read separately, asks for 3mm bleed. An earlier draft of this entry credited a second set of figures to a firm called Maidenhead Printing and gave a bleed range topping out at 5mm. I could not find an artwork specification published by that firm, and nothing I read supported 5mm, so both have been removed. Because the figures differ by supplier and by product, no universal number is given here."
      },
      "belongs": {
        "verdict": "core",
        "why": "Padding and safe margins are decided at layout time and the failure is unrecoverable once something is printed."
      },
      "related": [
        1026,
        1039,
        1056
      ]
    },
    {
      "n": 1050,
      "title": "Inaccessible custom controls",
      "aka": [
        "Div soup widgets",
        "Fake selects"
      ],
      "oneLine": "A styled div pretending to be a control has no role, no state and usually no keyboard support.",
      "demo": {
        "caption": "Both forms look identical. Count the tab stops down the right of each: the styled div cannot be reached.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Div with a click handler</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col\"><div><span class=\"db-label\">Name</span><div class=\"db-row db-row--nowrap db-row--between\"><span class=\"db-input\">Ada Lovelace</span><span class=\"db-note\">Tab&nbsp;1</span></div></div><div><span class=\"db-label\">Country</span><div class=\"db-row db-row--nowrap db-row--between\"><span class=\"db-input\">United Kingdom &#9662;</span><span class=\"db-note\" style=\"color:var(--sig-disputed)\">None</span></div></div><div class=\"db-row db-row--nowrap db-row--between\"><span class=\"db-btn\">Save</span><span class=\"db-note\">Tab&nbsp;2</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Native select</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col\"><div><span class=\"db-label\">Name</span><div class=\"db-row db-row--nowrap db-row--between\"><span class=\"db-input\">Ada Lovelace</span><span class=\"db-note\">Tab&nbsp;1</span></div></div><div><span class=\"db-label\">Country</span><div class=\"db-row db-row--nowrap db-row--between\"><span class=\"db-input\">United Kingdom &#9662;</span><span class=\"db-note\">Tab&nbsp;2</span></div></div><div class=\"db-row db-row--nowrap db-row--between\"><span class=\"db-btn\">Save</span><span class=\"db-note\">Tab&nbsp;3</span></div></div></div></div></div></div>"
      },
      "what": "Designers reject native selects, checkboxes and dialogs because they cannot be styled freely, and the replacement is built from divs and spans with click handlers. WCAG 2.2 SC 4.1.2 Name, Role, Value, Level A, requires that for every user interface component the name and role can be programmatically determined and that states and values can be set and notified. A div satisfies none of that by default. ARIA can supply the missing semantics, but it has to be complete and correct, and in practice it often is not.",
      "why": "Building on the native element gives you keyboard behaviour, focus management, screen reader semantics and platform conventions for nothing. Everything you replace, you have to rebuild and then test with actual assistive technology.",
      "how": [
        "Start from the native element. Style what you can and only replace it when the requirement genuinely cannot be met.",
        "If you build a custom widget, follow the WAI-ARIA Authoring Practices pattern for that widget rather than inventing keyboard behaviour.",
        "Test with a keyboard alone and with at least one screen reader before it ships. Automated checks will not catch a missing role.",
        "Check SC 2.5.3 Label in Name: the accessible name must contain the visible text label, or voice control users cannot activate it."
      ],
      "example": "The WebAIM Million 2026 report found 82.7 per cent of the one million home pages used ARIA, up from 79.4 per cent in 2025, and that pages with ARIA present averaged 59.1 detected errors against 42 for pages without it.",
      "numbers": "WCAG 2.2 SC 4.1.2 (Level A); SC 2.5.3 Label in Name (Level A). WebAIM Million 2026: ARIA on 82.7 per cent of home pages; 59.1 average errors with ARIA versus 42 without.",
      "pitfall": "The custom control passes a mouse-based design review because it looks and behaves correctly with a pointer. Nobody tabs to it. Modal dialogs are the worst case, because focus escapes to the page behind.",
      "source": "W3C, WCAG 2.2 SC 4.1.2 and SC 2.5.3 (2023); W3C WAI-ARIA Authoring Practices Guide; WebAIM Million 2026",
      "verify": {
        "status": "verified",
        "note": "Criterion text and levels checked against the WCAG 2.2 Recommendation. ARIA prevalence and the error averages quoted directly from the WebAIM Million 2026 report, which explicitly cautions that the correlation does not prove ARIA itself caused the errors, since more complex pages use more ARIA and also have more problems."
      },
      "belongs": {
        "verdict": "core",
        "why": "The decision to replace a native control is a design decision, and it is the moment accessibility is usually lost."
      },
      "related": [
        1031,
        1036,
        1045,
        10050
      ]
    },
    {
      "n": 10050,
      "title": "Removing the focus indicator",
      "aka": [
        "outline: none",
        "No focus ring"
      ],
      "oneLine": "Deleting the focus outline leaves keyboard users navigating an interface with no cursor.",
      "demo": {
        "caption": "Tab has been pressed twice on both rows. Only the right one tells you which link you are on.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">outline: none</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-note\">Tab pressed twice</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Home</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Treatments</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Fees</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Contact</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Visible ring</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-note\">Tab pressed twice</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Home</span><span class=\"db-btn db-btn--ghost db-btn--sm\" style=\"outline:2px solid var(--accent);outline-offset:2px\">Treatments</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Fees</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Contact</span></div></div></div></div></div>"
      },
      "what": "The browser draws a focus ring so that anyone operating the page by keyboard can see where they are. A single CSS declaration, outline: none, removes it, and it is still copied into resets and component libraries to tidy up the default ring. WCAG 2.2 SC 2.4.7 Focus Visible, Level AA, requires that any keyboard operable interface has a mode of operation where the keyboard focus indicator is visible. SC 2.4.13 Focus Appearance, Level AAA, goes further and specifies the size and contrast: an area at least as large as a 2 CSS pixel thick perimeter of the unfocused component, with a contrast ratio of at least 3:1 between the focused and unfocused states.",
      "why": "Without a visible ring, keyboard and switch users press Tab and guess. Designing a ring you actually like is the fix, since the objection is nearly always to the default appearance rather than to having an indicator at all.",
      "how": [
        "Never ship outline: none without an equally visible replacement in the same rule.",
        "Use :focus-visible so the ring appears for keyboard use without showing on every mouse click.",
        "Pick a ring colour that clears 3:1 against both the component and the page background.",
        "Tab through every page before sign-off and watch the ring. If you lose it, so will everyone else."
      ],
      "example": "A dark site that sets outline: none globally and signals focus with a subtle background change leaves a keyboard user unable to tell which of eight nav links is selected.",
      "numbers": "WCAG 2.2 SC 2.4.7 Focus Visible (Level AA). SC 2.4.13 Focus Appearance (Level AAA): at least a 2 CSS pixel thick perimeter equivalent, and at least 3:1 contrast between focused and unfocused states.",
      "pitfall": "The reset lives in a base stylesheet written years ago, so nobody associates it with the bug. Custom focus styles also tend to be tested only on the default background and disappear on coloured panels.",
      "source": "W3C, WCAG 2.2 SC 2.4.7 and SC 2.4.13 (2023)",
      "verify": {
        "status": "verified",
        "note": "Normative text and levels for SC 2.4.7 and SC 2.4.13, including the 2 CSS pixel perimeter and the 3:1 figure, checked directly against the W3C Understanding documents for each criterion."
      },
      "belongs": {
        "verdict": "core",
        "why": "The focus indicator is a designed visual element with a published specification, and removing it is a design decision, not a technical accident."
      },
      "related": [
        1029,
        1035,
        1050
      ]
    },
    {
      "n": 1051,
      "title": "Breaking browser conventions",
      "aka": [
        "Scrolljacking",
        "Hijacking the back button"
      ],
      "oneLine": "Users learn the browser elsewhere and bring those expectations with them, so overriding it costs you.",
      "demo": {
        "caption": "The dashed line is the browser's one-to-one scroll. The accent line stalls, then leaps a whole section.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 480 210\"><path class=\"s-mute\" d=\"M51 24 V171 H459\"/><path class=\"s-mute\" stroke-dasharray=\"4 5\" d=\"M51 165 L453 33\"/><path class=\"s-accent\" d=\"M51 165 H225 V144 H322 V108 H397 V66 H453 V33\"/><path class=\"s-mute\" stroke-dasharray=\"4 5\" d=\"M63 39 H93\"/><text class=\"t\" x=\"102\" y=\"43\">browser default</text><path class=\"s-accent\" d=\"M63 66 H93\"/><text class=\"t\" x=\"102\" y=\"70\">scrolljacked</text><text class=\"t\" x=\"45\" y=\"15\">PAGE MOVED</text><text class=\"t\" x=\"459\" y=\"195\" text-anchor=\"end\">WHEEL INPUT</text></svg></div>"
      },
      "what": "Jakob Nielsen wrote the underlying observation in July 2000: users spend most of their time on other sites. It is now repeated as Jakob's Law, and the consequence is that people arrive with a working model of how scrolling, links, the back button and text selection behave. Overriding any of them makes the site feel broken rather than distinctive. Scrolljacking is the most common current version, where the page changes scroll speed or direction. Nielsen Norman Group's 2023 study found that most participants experienced at least mild disorientation, and that some read heavy scrolljacking as a technical fault.",
      "why": "Conventions are free usability. Every one you keep is a thing the user does not have to learn, and the attention saved goes into your content instead of into working out your interface.",
      "how": [
        "Leave scrolling alone. If you must animate on scroll, keep it short, keep the scroll rate honest and keep sticky navigation available as an escape.",
        "Make links behave like links: real href values, middle-clickable, right-clickable, keyboard focusable.",
        "Do not break the back button. Every meaningful state change should have a URL.",
        "Leave text selectable and leave the browser's find-in-page working."
      ],
      "example": "NN/g's scrolljacking research recorded a participant saying that as a prospect they would get severely agitated and just move on.",
      "numbers": "",
      "pitfall": "Convention-breaking arrives as an award-site aesthetic, so it is defended on craft grounds. The damage falls on goal-directed visitors, who are the ones with money.",
      "source": "Jakob Nielsen, The End of Web Design, Nielsen Norman Group (22 July 2000); Sara Paul, Scrolljacking 101, Nielsen Norman Group (6 August 2023)",
      "verify": {
        "status": "verified",
        "note": "The quote 'Users spend most of their time on other sites' and the 22 July 2000 date checked against the NN/g article, which introduces it as Jakob's Law of the Internet User Experience. Scrolljacking findings, author and date checked against the NN/g scrolljacking article. Note that lawsofux.com attributes Jakob's Law to Nielsen but gives no origin date."
      },
      "belongs": {
        "verdict": "core",
        "why": "Choosing whether to follow or break a platform convention is a design decision made on nearly every project."
      },
      "related": [
        1035,
        1041,
        1042
      ]
    },
    {
      "n": 1052,
      "title": "Non-responsive tables",
      "aka": [
        "Overflowing data tables",
        "Squashed tables"
      ],
      "oneLine": "A wide table on a narrow screen either overflows the page or crushes its columns into unreadable slivers.",
      "demo": {
        "caption": "Eight columns on a phone. On the left every column is a sliver, on the right the row label stays put.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Crushed to fit</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 186\"><rect class=\"s-mute\" x=\"15\" y=\"15\" width=\"210\" height=\"150\"/><path class=\"s-mute\" d=\"M15 42 H225 M41.25 15 V165 M67.5 15 V165 M93.75 15 V165 M120 15 V165 M146.25 15 V165 M172.5 15 V165 M198.75 15 V165\"/><g class=\"f-mute\"><rect x=\"18\" y=\"24\" width=\"19.5\" height=\"7.5\"/><rect x=\"44.25\" y=\"24\" width=\"19.5\" height=\"7.5\"/><rect x=\"70.5\" y=\"24\" width=\"19.5\" height=\"7.5\"/><rect x=\"96.75\" y=\"24\" width=\"19.5\" height=\"7.5\"/><rect x=\"123\" y=\"24\" width=\"19.5\" height=\"7.5\"/><rect x=\"149.25\" y=\"24\" width=\"19.5\" height=\"7.5\"/><rect x=\"175.5\" y=\"24\" width=\"19.5\" height=\"7.5\"/><rect x=\"201.75\" y=\"24\" width=\"19.5\" height=\"7.5\"/></g><g class=\"f-mute\" opacity=\"0.55\"><rect x=\"19.5\" y=\"57\" width=\"16.5\" height=\"6\"/><rect x=\"45.75\" y=\"57\" width=\"16.5\" height=\"6\"/><rect x=\"72\" y=\"57\" width=\"16.5\" height=\"6\"/><rect x=\"98.25\" y=\"57\" width=\"16.5\" height=\"6\"/><rect x=\"124.5\" y=\"57\" width=\"16.5\" height=\"6\"/><rect x=\"150.75\" y=\"57\" width=\"16.5\" height=\"6\"/><rect x=\"177\" y=\"57\" width=\"16.5\" height=\"6\"/><rect x=\"203.25\" y=\"57\" width=\"16.5\" height=\"6\"/><rect x=\"19.5\" y=\"84\" width=\"16.5\" height=\"6\"/><rect x=\"45.75\" y=\"84\" width=\"16.5\" height=\"6\"/><rect x=\"72\" y=\"84\" width=\"16.5\" height=\"6\"/><rect x=\"98.25\" y=\"84\" width=\"16.5\" height=\"6\"/><rect x=\"124.5\" y=\"84\" width=\"16.5\" height=\"6\"/><rect x=\"150.75\" y=\"84\" width=\"16.5\" height=\"6\"/><rect x=\"177\" y=\"84\" width=\"16.5\" height=\"6\"/><rect x=\"203.25\" y=\"84\" width=\"16.5\" height=\"6\"/><rect x=\"19.5\" y=\"111\" width=\"16.5\" height=\"6\"/><rect x=\"45.75\" y=\"111\" width=\"16.5\" height=\"6\"/><rect x=\"72\" y=\"111\" width=\"16.5\" height=\"6\"/><rect x=\"98.25\" y=\"111\" width=\"16.5\" height=\"6\"/><rect x=\"124.5\" y=\"111\" width=\"16.5\" height=\"6\"/><rect x=\"150.75\" y=\"111\" width=\"16.5\" height=\"6\"/><rect x=\"177\" y=\"111\" width=\"16.5\" height=\"6\"/><rect x=\"203.25\" y=\"111\" width=\"16.5\" height=\"6\"/><rect x=\"19.5\" y=\"138\" width=\"16.5\" height=\"6\"/><rect x=\"45.75\" y=\"138\" width=\"16.5\" height=\"6\"/><rect x=\"72\" y=\"138\" width=\"16.5\" height=\"6\"/><rect x=\"98.25\" y=\"138\" width=\"16.5\" height=\"6\"/><rect x=\"124.5\" y=\"138\" width=\"16.5\" height=\"6\"/><rect x=\"150.75\" y=\"138\" width=\"16.5\" height=\"6\"/><rect x=\"177\" y=\"138\" width=\"16.5\" height=\"6\"/><rect x=\"203.25\" y=\"138\" width=\"16.5\" height=\"6\"/></g><text class=\"t\" x=\"15\" y=\"180\">375px wide</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Pinned, then scrolls</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 186\"><rect class=\"s-mute\" x=\"15\" y=\"15\" width=\"210\" height=\"150\"/><path class=\"s-mute\" d=\"M15 42 H225 M126 15 V165 M168 15 V165 M210 15 V165\"/><path class=\"s-accent\" d=\"M84 15 V165\"/><g class=\"f-mute\"><rect x=\"21\" y=\"24\" width=\"54\" height=\"7.5\"/><rect x=\"90\" y=\"24\" width=\"30\" height=\"7.5\"/><rect x=\"132\" y=\"24\" width=\"30\" height=\"7.5\"/><rect x=\"174\" y=\"24\" width=\"30\" height=\"7.5\"/><rect x=\"216\" y=\"24\" width=\"9\" height=\"7.5\"/></g><g class=\"f-mute\" opacity=\"0.55\"><rect x=\"21\" y=\"57\" width=\"48\" height=\"6\"/><rect x=\"90\" y=\"57\" width=\"27\" height=\"6\"/><rect x=\"132\" y=\"57\" width=\"27\" height=\"6\"/><rect x=\"174\" y=\"57\" width=\"27\" height=\"6\"/><rect x=\"216\" y=\"57\" width=\"9\" height=\"6\"/><rect x=\"21\" y=\"84\" width=\"54\" height=\"6\"/><rect x=\"90\" y=\"84\" width=\"27\" height=\"6\"/><rect x=\"132\" y=\"84\" width=\"27\" height=\"6\"/><rect x=\"174\" y=\"84\" width=\"27\" height=\"6\"/><rect x=\"216\" y=\"84\" width=\"9\" height=\"6\"/><rect x=\"21\" y=\"111\" width=\"42\" height=\"6\"/><rect x=\"90\" y=\"111\" width=\"27\" height=\"6\"/><rect x=\"132\" y=\"111\" width=\"27\" height=\"6\"/><rect x=\"174\" y=\"111\" width=\"27\" height=\"6\"/><rect x=\"216\" y=\"111\" width=\"9\" height=\"6\"/><rect x=\"21\" y=\"138\" width=\"51\" height=\"6\"/><rect x=\"90\" y=\"138\" width=\"27\" height=\"6\"/><rect x=\"132\" y=\"138\" width=\"27\" height=\"6\"/><rect x=\"174\" y=\"138\" width=\"27\" height=\"6\"/><rect x=\"216\" y=\"138\" width=\"9\" height=\"6\"/></g><path class=\"s-accent\" d=\"M204 156 H222 M216 150 L222 156 L216 162\"/><text class=\"t\" x=\"15\" y=\"180\">375px wide</text></svg></div></div></div>"
      },
      "what": "There is a useful subtlety here. WCAG 2.2 SC 1.4.10 Reflow, Level AA, requires content to work at a width equivalent to 320 CSS pixels without scrolling in two dimensions, which the W3C explains corresponds to a 1280px browser window zoomed to 400 per cent. The criterion then exempts parts of the content which require two-dimensional layout for usage or meaning, and the Understanding document lists data tables, though not individual cells, among the examples. So a data table that scrolls sideways does not fail WCAG. It still fails the reader, which is the reason to fix it.",
      "why": "Knowing the exemption exists stops you mangling a table to satisfy an audit tool. It also tells you what the real goal is: keep the row and column relationships intact while making the table usable in a narrow viewport.",
      "how": [
        "Wrap the table in a container with overflow-x: auto, give it a tabindex so it can be scrolled by keyboard, and label it.",
        "Freeze the first column so the row identity stays visible while the reader scrolls.",
        "Cut columns rather than shrinking them. Most wide tables carry columns nobody reads on a phone.",
        "Only stack rows into cards when the table is a list rather than a real two-dimensional dataset, because stacking destroys column comparison."
      ],
      "example": "A nine-column price comparison table is exempt from reflow under 1.4.10, yet on a 375px phone it is still a sideways scroll with no visible row labels unless the first column is pinned.",
      "numbers": "WCAG 2.2 SC 1.4.10 (Level AA): 320 CSS pixels wide for vertical scrolling content, 256 CSS pixels high for horizontal. The W3C notes 320 CSS pixels corresponds to a 1280px window at 400 per cent zoom. Data tables are named in the exception.",
      "pitfall": "Responsive CSS stacks every table row into a card, which reads fine for a two-column list and destroys a real dataset. The other failure is a horizontally scrolling table with no visual cue that there is more to the right.",
      "source": "W3C, WCAG 2.2 SC 1.4.10 Reflow and its Understanding document (2023)",
      "verify": {
        "status": "verified",
        "note": "Normative text, both pixel figures, the 1280px-at-400-per-cent explanation and the exception list naming data tables (not individual cells) all checked directly against the W3C Understanding Reflow document."
      },
      "belongs": {
        "verdict": "core",
        "why": "Tabular data appears in most real products, and how it behaves at narrow widths is a layout decision with a standard attached."
      },
      "related": [
        1042,
        1053,
        1058,
        1059
      ]
    },
    {
      "n": 1053,
      "title": "Layout shift on load",
      "aka": [
        "Content jump",
        "CLS"
      ],
      "oneLine": "Content that moves after it appears makes people misclick, and Google measures it as Cumulative Layout Shift.",
      "demo": {
        "caption": "The dashed box is where the button sat a moment ago. On the left the tap now lands on the advert.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No space reserved</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 200\"><rect class=\"s-mute\" x=\"15\" y=\"12\" width=\"210\" height=\"180\"/><rect x=\"24\" y=\"21\" width=\"192\" height=\"45\" style=\"fill:var(--paper-sunk);stroke:var(--rule-strong)\"/><text class=\"t\" x=\"120\" y=\"34\" text-anchor=\"middle\">advert loads late</text><rect class=\"s-mute\" stroke-dasharray=\"4 4\" x=\"24\" y=\"40\" width=\"84\" height=\"24\"/><circle class=\"f-accent\" cx=\"66\" cy=\"52\" r=\"5\"/><g class=\"f-mute\" opacity=\"0.55\"><rect x=\"24\" y=\"78\" width=\"84\" height=\"6\"/><rect x=\"24\" y=\"90\" width=\"84\" height=\"6\"/></g><rect class=\"s\" x=\"24\" y=\"105\" width=\"84\" height=\"24\"/><text class=\"t\" x=\"31\" y=\"121\">Book now</text><path class=\"s-accent\" d=\"M168 68 V101 M162 95 L168 101 L174 95\"/><text class=\"t\" x=\"159\" y=\"90\" text-anchor=\"end\">shift</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Space reserved</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 200\"><rect class=\"s-mute\" x=\"15\" y=\"12\" width=\"210\" height=\"180\"/><rect class=\"s-mute\" stroke-dasharray=\"4 4\" x=\"24\" y=\"21\" width=\"192\" height=\"45\"/><text class=\"t\" x=\"120\" y=\"34\" text-anchor=\"middle\">space held early</text><g class=\"f-mute\" opacity=\"0.55\"><rect x=\"24\" y=\"78\" width=\"84\" height=\"6\"/><rect x=\"24\" y=\"90\" width=\"84\" height=\"6\"/></g><rect class=\"s\" x=\"24\" y=\"105\" width=\"84\" height=\"24\"/><text class=\"t\" x=\"31\" y=\"121\">Book now</text><circle class=\"f-accent\" cx=\"95\" cy=\"117\" r=\"5\"/><text class=\"t\" x=\"159\" y=\"90\" text-anchor=\"end\">no shift</text></svg></div></div></div>"
      },
      "what": "Cumulative Layout Shift is one of the Core Web Vitals. Google's definition scores each unexpected shift as the impact fraction multiplied by the distance fraction, groups shifts into session windows where each gap is under one second and the whole window is at most five seconds, and reports the largest window. The published thresholds are 0.1 or less for good and above 0.25 for poor, assessed at the 75th percentile of page loads and segmented by mobile and desktop. Typical causes are images with no dimensions, web fonts swapping in at a different size, and banners injected above existing content.",
      "why": "A shift makes someone tap the wrong thing, usually the advert that just loaded where the button used to be. Reserving space is cheap and removes an entire class of accidental clicks.",
      "how": [
        "Set width and height attributes, or an aspect-ratio, on every image, video and iframe so the browser reserves the box.",
        "Reserve space for anything injected later: cookie banners, adverts, embeds, notification bars.",
        "Use font-display: optional or size-adjust and matching fallback metrics so the font swap does not change line count.",
        "Measure in the field rather than in the lab, at the 75th percentile, because CLS depends on real interaction."
      ],
      "example": "An article page where a late-loading advert pushes the body text down by 200px, so the reader taps the advert instead of the link they were aiming at.",
      "numbers": "CLS: 0.1 or less is good, above 0.25 is poor, assessed at the 75th percentile of page loads. Session window: shifts less than one second apart, five second maximum window. Score = impact fraction x distance fraction.",
      "pitfall": "CLS is measured on a fast development machine with a warm cache and comes back at zero. The real failure happens on a slow phone where the font and the advert both arrive late.",
      "source": "Google, Cumulative Layout Shift (CLS), web.dev",
      "verify": {
        "status": "verified",
        "note": "Thresholds, the 75th percentile rule, the session window definition and the score formula all checked directly against the web.dev CLS article."
      },
      "belongs": {
        "verdict": "core",
        "why": "Reserving space is a layout decision, and it is one of the few design faults with a published numeric threshold."
      },
      "related": [
        1022,
        1052,
        1054,
        1056
      ]
    },
    {
      "n": 1054,
      "title": "Fake progress indicators",
      "aka": [
        "Artificial loading",
        "Dishonest progress bars"
      ],
      "oneLine": "A bar that does not track real work is a lie the user eventually catches.",
      "demo": {
        "caption": "The accent line is what the bar shows. The dashed line is how much work has actually finished.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 480 210\"><path class=\"s-mute\" d=\"M51 24 V171 H459\"/><path class=\"s-mute\" stroke-dasharray=\"3 5\" d=\"M51 33 H459\"/><text class=\"t\" x=\"45\" y=\"37\" text-anchor=\"end\">100%</text><path class=\"s-mute\" stroke-dasharray=\"4 5\" d=\"M51 165 L435 33\"/><path class=\"s-accent\" d=\"M51 165 Q 93 48 150 48 H417 L435 33\"/><text class=\"t\" x=\"225\" y=\"75\">stalled</text><path class=\"s-accent\" d=\"M294 126 H324\"/><text class=\"t\" x=\"330\" y=\"130\">shown</text><path class=\"s-mute\" stroke-dasharray=\"4 5\" d=\"M294 150 H324\"/><text class=\"t\" x=\"330\" y=\"154\">real work</text><text class=\"t\" x=\"45\" y=\"15\">PROGRESS</text><text class=\"t\" x=\"459\" y=\"195\" text-anchor=\"end\">TIME</text></svg></div>"
      },
      "what": "Two lines of research sit behind this. Harrison, Amento, Kuznetsov and Bell's UIST 2007 paper Rethinking the Progress Bar held every bar at a constant 5.5 seconds and varied only how it moved. Pacing changed perception: the two accelerating functions, which put their fastest progress near the end, were judged faster than linear, while the three functions with a pause near the finish were judged slower. An early pause did not have that effect and came out roughly level with linear. That pacing result is contested: Wang, Kang and Rau tested the same question in 2022 and found constant-speed and accelerating bars were both judged quickest, so the direction of the effect is unsettled. Buell and Norton's 2011 Management Science paper named the labour illusion, showing across five experiments in online travel and online dating that people can prefer a site with a longer wait when it signals that work is being done, even when the results are identical. Neither finding licences a bar that stalls at 90 per cent.",
      "why": "An honest indicator sets an expectation the user can plan around. A bar that fills instantly then hangs teaches people that your progress display carries no information, and after that they cannot tell a slow operation from a crashed one.",
      "how": [
        "If you can measure progress, show it, and let it move unevenly rather than faking smoothness.",
        "If you cannot measure it, use an indeterminate spinner and say what is happening in words.",
        "Never let a bar reach a high percentage and stop. Cap determinate bars below completion until the work is genuinely done.",
        "Name the step underway in words. That is honest transparency, where an invented delay is not."
      ],
      "example": "Harrison and colleagues held every bar in the experiment at 5.5 seconds and varied only its behaviour, which is how they isolated perception from duration.",
      "numbers": "Harrison et al., UIST 2007, pages 115 to 118: bars held at a constant 5.5 seconds. Buell and Norton, Management Science 57(9), 2011, pages 1564 to 1579: five experiments.",
      "pitfall": "A team reads the labour illusion result and adds a fake three-second delay to make a product feel thorough. That is a deception with a trust cost, and it is not what either paper recommends.",
      "source": "Chris Harrison, Brian Amento, Stacey Kuznetsov and Robert Bell, Rethinking the Progress Bar, UIST 2007; Ryan W. Buell and Michael I. Norton, The Labor Illusion, Management Science 57(9), 2011; Qihan Wang, Xinyue Kang and Pei-Luen Patrick Rau, The Magic of Slow-to-Fast and Constant, arXiv:2211.13909 (2022)",
      "verify": {
        "status": "disputed",
        "note": "Both papers exist and were checked against the sources themselves. The Harrison citation (UIST 2007, pages 115 to 118), the constant 5.5 second duration and the clustering of the nine functions were read from the paper's own PDF on chrisharrison.net. The Buell and Norton citation, journal, volume 57, issue 9, pages 1564 to 1579, and the five experiments in online travel and online dating were read from the published paper and its abstract. The disputed status is about the follow-up literature, not the citations. Wang, Kang and Rau (2022, arXiv:2211.13909) tested the same question and report that constant-speed and speed-up bars are both perceived as the quickest, where Harrison had linear coming out slower than accelerating. An earlier draft of this entry said at least one study found a fast bar extended perceived duration; I could not confirm that specific result, so it has been replaced with the conflict I could actually read. Treat pacing effects as unsettled and do not design around a specific direction."
      },
      "belongs": {
        "verdict": "core",
        "why": "Visibility of system status is Nielsen's first heuristic, and how a wait is represented is a designed part of the interface."
      },
      "related": [
        1044,
        1053,
        10041
      ]
    },
    {
      "n": 1055,
      "title": "Faux bold and faux italic",
      "aka": [
        "Synthetic weights",
        "Algorithmic italics"
      ],
      "oneLine": "When the real bold or italic file is missing, the browser fakes it by smearing and slanting the regular cut.",
      "demo": {
        "caption": "Left is the regular cut smeared and slanted. On the right the italic is a different set of letterforms.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Synthesised</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Bold</span><span class=\"db-specimen\" style=\"font-size:26px;font-weight:400;text-shadow:0.6px 0 currentColor,-0.6px 0 currentColor\">Handgloves</span><span class=\"db-note\">Italic</span><span class=\"db-specimen\" style=\"font-size:26px;display:inline-block;transform:skewX(-12deg)\">Handgloves</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Real cuts</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Bold</span><span class=\"db-specimen\" style=\"font-size:26px;font-weight:700\">Handgloves</span><span class=\"db-note\">Italic</span><span class=\"db-specimen\" style=\"font-size:26px;font-style:italic\">Handgloves</span></div></div></div></div>"
      },
      "what": "Alan Stearns set this out in A List Apart in 2012: bold appears as a smeared version of regular glyphs, and italic appears as regular glyphs pushed over into a slant. A designed bold is a separate drawing with adjusted stroke weights, counters and spacing. A designed italic is often a different alphabet entirely, with single-storey letterforms and cursive joins. The synthetic versions get neither. Results also vary by browser, so the same page renders differently in Firefox and Chrome.",
      "why": "Loading the real files fixes the appearance and usually costs nothing extra, because you were already downloading a weight you did not need. Turning synthesis off makes the failure visible in development instead of shipping quietly.",
      "how": [
        "Declare a separate @font-face for every weight and style you use, with the correct font-weight and font-style descriptors.",
        "Set font-synthesis: none so a missing cut renders plainly rather than being faked, which makes the gap obvious in testing.",
        "Use a variable font with a real italic axis or a paired italic file, rather than relying on the browser to slant.",
        "Check bold and italic in every language the site supports, since fallback stacks differ by script."
      ],
      "example": "A site loading only Regular 400 from a web font service and then styling headings with font-weight: 700 will show Chrome's light smear and Firefox's heavier one from the same CSS.",
      "numbers": "",
      "pitfall": "Only the regular weight gets included to keep the page light, and the bold text then looks blurry rather than absent, so nobody files it as a bug. True italics are lost the same way and the loss is easy to miss until you compare with a specimen.",
      "source": "Alan Stearns, Say No to Faux Bold, A List Apart (8 May 2012); the font-synthesis property is defined in CSS Fonts Module Level 4",
      "verify": {
        "status": "verified",
        "note": "Author, 8 May 2012 date, the smear-and-slant description and the note that results differ between Firefox and Chrome all checked directly against the A List Apart article. The font-synthesis property was confirmed as a documented CSS property in search results but I did not read the specification text itself this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "Choosing and loading type is design work, and this is the most common way good type gets rendered badly."
      },
      "related": [
        1025,
        1029,
        1047
      ]
    },
    {
      "n": 1056,
      "title": "Stretched logos and images",
      "aka": [
        "Distorted aspect ratio",
        "Squashed images"
      ],
      "oneLine": "Forcing an image into a box of the wrong shape distorts it, and a stretched logo is broken.",
      "demo": {
        "caption": "The same wordmark in the same box. On the left it has been stretched to fill it; the circle gives it away.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Stretched to fill</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 34\" preserveAspectRatio=\"none\" style=\"height:88px\"><circle class=\"f\" cx=\"17\" cy=\"17\" r=\"13\"/><text class=\"f\" x=\"42\" y=\"25\" style=\"font-family:var(--font-display);font-size:21px;letter-spacing:0.08em\">MERIDIAN</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Fitted, ratio kept</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 34\" style=\"height:88px\"><circle class=\"f\" cx=\"17\" cy=\"17\" r=\"13\"/><text class=\"f\" x=\"42\" y=\"25\" style=\"font-family:var(--font-display);font-size:21px;letter-spacing:0.08em\">MERIDIAN</text></svg></div></div></div>"
      },
      "what": "An image has a native aspect ratio. Give it a width and a height that do not match and something has to give. In CSS the culprit is usually the default object-fit value, fill, which stretches the content to fill the box. The alternatives preserve the ratio: contain fits the whole image inside and leaves space, cover fills the box and crops. On a logo the distortion is worse than on a photograph, because the letterforms were drawn at a fixed proportion and a stretched wordmark reads as a mistake even to people who cannot say what changed.",
      "why": "Getting this right takes one CSS property and protects the one asset a client is most sensitive about. It also stops the client's brand guidelines being breached on their own website.",
      "how": [
        "Set object-fit: contain for logos and object-fit: cover for photographic fills, and never leave a sized image on the default.",
        "Give logos a fixed height and let the width follow, rather than constraining both.",
        "Supply logos as SVG so they scale without resampling, and keep a clear-space rule around them.",
        "Set width and height attributes that match the real file, which prevents distortion and also helps with layout shift."
      ],
      "example": "A footer that sizes a client logo with both width and height to make several partner marks look even will squash any mark whose proportions differ from the box.",
      "numbers": "",
      "pitfall": "A tidy grid of partner logos is the classic case, because forcing them all to one box is the easy way to make the row look even. The correct fix is equal optical size within a fixed height, not equal bounding boxes.",
      "source": "MDN Web Docs, object-fit; brand-manual misuse conventions, origin unclear.",
      "verify": {
        "status": "verified",
        "note": "The object-fit values and the fact that fill is the default that distorts were checked against MDN. The rule against distorting a logo is a universal brand-manual convention with no single origin; the NHS Identity guidance I checked forbids recreating the logo and restricts its colour, but does not spell out a no-stretching rule, so I have not attributed one to it."
      },
      "belongs": {
        "verdict": "core",
        "why": "Image fitting is a layout decision that appears on every page with a picture on it."
      },
      "related": [
        1037,
        1053,
        1057
      ]
    },
    {
      "n": 1057,
      "title": "Crops that ignore the focal point",
      "aka": [
        "Bad automatic crop",
        "Decapitation crop"
      ],
      "oneLine": "Filling a box by cropping from the centre cuts heads off, because the subject is rarely in the middle.",
      "demo": {
        "caption": "Same picture, same letterbox crop. Only the vertical position changed, and the default centre crop loses the head.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">object-position: centre</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 36 120 40\"><rect x=\"0\" y=\"0\" width=\"120\" height=\"120\" style=\"fill:var(--paper-sunk)\"/><circle class=\"f-mute\" cx=\"60\" cy=\"30\" r=\"13\"/><rect class=\"f-mute\" x=\"54\" y=\"38\" width=\"12\" height=\"14\"/><path class=\"f-mute\" d=\"M18 120 C 18 76 36 50 60 50 C 84 50 102 76 102 120 Z\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">object-position: top</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 12 120 40\"><rect x=\"0\" y=\"0\" width=\"120\" height=\"120\" style=\"fill:var(--paper-sunk)\"/><circle class=\"f-mute\" cx=\"60\" cy=\"30\" r=\"13\"/><rect class=\"f-mute\" x=\"54\" y=\"38\" width=\"12\" height=\"14\"/><path class=\"f-mute\" d=\"M18 120 C 18 76 36 50 60 50 C 84 50 102 76 102 120 Z\"/></svg></div></div></div>"
      },
      "what": "When an image is set to cover a container, the browser crops whatever does not fit, and by default it crops around the centre. Photographs are not composed that way. A portrait with the face in the upper third loses the face in a short banner crop, and a product shot with the item to the left loses the item on a phone. CSS object-position moves the visible region, and the picture element with several source entries lets you supply a differently composed file for different viewports rather than cropping one image harder.",
      "why": "Naming the focal point once, at upload, means every crop across the site lands correctly without anyone checking. Supplying a separate composition for narrow screens goes further and gives a portrait crop that was actually shot for it.",
      "how": [
        "Set object-position deliberately on any covered image, most often toward the top for anything with a face in it.",
        "Store a focal point per image in the CMS and feed it into object-position, so editors control it rather than developers.",
        "For hero images, supply a separate narrow-screen file through picture and source, cropped for that shape.",
        "Review every crop at the extremes: the widest banner and the narrowest phone, not just the design width."
      ],
      "example": "A team page where a wide desktop card shows the whole face and the same image in a tall mobile card, cropped from the centre, shows a chin and a shoulder.",
      "numbers": "",
      "pitfall": "Automatic cropping is trusted because it works for the sample images, which were chosen by the designer and are centred. It fails on the real library the client uploads later.",
      "source": "MDN Web Docs, object-fit and object-position; the picture element for art direction.",
      "verify": {
        "status": "verified",
        "note": "Confirmed against MDN that object-fit: cover crops the image and that object-position controls which part remains visible, and that the picture element with multiple sources supports supplying different image files. The specific compositional advice is craft judgement, not standardised guidance."
      },
      "belongs": {
        "verdict": "core",
        "why": "Cropping is an editorial and compositional decision, and on the web it has to be specified as a rule rather than done by hand."
      },
      "related": [
        1030,
        1037,
        1056
      ]
    },
    {
      "n": 1058,
      "title": "Unlabelled charts",
      "aka": [
        "Naked axes",
        "Unannotated graphics"
      ],
      "oneLine": "A chart without units, scale and annotation cannot be read, only admired.",
      "demo": {
        "caption": "Identical bars both sides. Only one of them can be read, because the units, the scale and the years are on it.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Naked</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 186\"><path class=\"s-mute\" d=\"M30 150 H225\"/><g class=\"f-accent\"><rect x=\"39\" y=\"99\" width=\"24\" height=\"51\"/><rect x=\"75\" y=\"72\" width=\"24\" height=\"78\"/><rect x=\"111\" y=\"81\" width=\"24\" height=\"69\"/><rect x=\"147\" y=\"45\" width=\"24\" height=\"105\"/><rect x=\"183\" y=\"55\" width=\"24\" height=\"95\"/></g><rect class=\"f-accent\" x=\"39\" y=\"165\" width=\"9\" height=\"9\"/><text class=\"t\" x=\"54\" y=\"174\">Series 1</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Labelled on the graphic</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 186\"><text class=\"t\" x=\"30\" y=\"15\">BOOKINGS, MILLIONS</text><path class=\"s-mute\" d=\"M30 24 V150 H225\"/><path class=\"s-mute\" d=\"M25 150 H30 M25 87 H30 M25 24 H30\"/><text class=\"t\" x=\"22\" y=\"154\" text-anchor=\"end\">0</text><text class=\"t\" x=\"22\" y=\"91\" text-anchor=\"end\">20</text><text class=\"t\" x=\"22\" y=\"28\" text-anchor=\"end\">40</text><g class=\"f-accent\"><rect x=\"39\" y=\"99\" width=\"24\" height=\"51\"/><rect x=\"75\" y=\"72\" width=\"24\" height=\"78\"/><rect x=\"111\" y=\"81\" width=\"24\" height=\"69\"/><rect x=\"147\" y=\"45\" width=\"24\" height=\"105\"/><rect x=\"183\" y=\"55\" width=\"24\" height=\"95\"/></g><g class=\"t\"><text x=\"51\" y=\"165\" text-anchor=\"middle\">21</text><text x=\"87\" y=\"165\" text-anchor=\"middle\">22</text><text x=\"123\" y=\"165\" text-anchor=\"middle\">23</text><text x=\"159\" y=\"165\" text-anchor=\"middle\">24</text><text x=\"195\" y=\"165\" text-anchor=\"middle\">25</text></g><text class=\"t\" x=\"30\" y=\"183\">Scale starts at zero</text></svg></div></div></div>"
      },
      "what": "Labelling is the second of Edward Tufte's principles of graphical integrity in The Visual Display of Quantitative Information, after the rule that the size of a mark should be proportional to the quantity it stands for. It reads: clear, detailed and thorough labeling should be used to defeat graphical distortion and ambiguity. Tufte then tells the maker to write out explanations of the data on the graphic itself and to label important events in the data. A chart missing its units, its baseline, its time period or its source is not a compressed argument, it is a shape. The usual missing pieces are the axis unit, whether the y-axis starts at zero, the sample size and the date the data was pulled.",
      "why": "Labelling on the graphic itself removes the round trip to a legend or a caption, which is where readers give up. It also forces the maker to state the things that would otherwise let the chart mislead, such as a truncated axis.",
      "how": [
        "Label series directly next to the line or bar rather than in a separate key.",
        "State units on the axis and say whether the scale starts at zero.",
        "Put the source and the date on the graphic, not in a footnote elsewhere.",
        "Annotate the two or three points that carry the argument, with a short sentence rather than a marker."
      ],
      "example": "Tufte's own instruction is to write out explanations of the data on the graphic itself and to label important events in the data, rather than leaving the reader to decode a legend.",
      "numbers": "",
      "pitfall": "Charting libraries produce a legend by default and no units, so the defaults quietly become the design. Slide decks make it worse, because a chart pasted from a spreadsheet loses its caption and keeps its unlabelled axis.",
      "source": "Edward Tufte, The Visual Display of Quantitative Information (1983), principles of graphical integrity",
      "verify": {
        "status": "verified",
        "note": "Checked against several independent reproductions of Tufte's principles of graphical integrity. All list labelling as the second principle, after the proportionality rule, and all give the same first sentence. They disagree on one word in the second sentence: most read 'write out explanations of the data on the graphic itself', which matches the 'surface of the graphic itself' wording of the first principle in the same passage, while at least one reproduction reads 'on the graph itself'. The 'graphic' wording is used here. An earlier draft called labelling the first principle and, on a later pass, switched the quotation to 'graph itself'; the first was wrong and the second is not the majority reading, so both are reversed. I read reproductions rather than the book, so treat the phrasing as Tufte's as widely quoted. The American spelling in the quotation is left as published."
      },
      "belongs": {
        "verdict": "core",
        "why": "Annotation is a design decision in every chart, and the omission is what lets a graphic mislead."
      },
      "related": [
        1046,
        1052,
        1059
      ]
    },
    {
      "n": 1059,
      "title": "Truncation with no route to the full text",
      "aka": [
        "Ellipsis dead end",
        "Clipped content"
      ],
      "oneLine": "Cutting text off with an ellipsis is fine only if the reader can still get to the rest of it.",
      "demo": {
        "caption": "Three different tickets both sides. On the left, the part that tells them apart is past the cut.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Clipped, no way through</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-input\" style=\"white-space:nowrap;overflow:hidden;text-overflow:ellipsis\">Automated alert: system notification regarding invoice 88214</span><span class=\"db-input\" style=\"white-space:nowrap;overflow:hidden;text-overflow:ellipsis\">Automated alert: system notification regarding invoice 88215</span><span class=\"db-input\" style=\"white-space:nowrap;overflow:hidden;text-overflow:ellipsis\">Automated alert: system notification regarding refund 41903</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Wrapped in full</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">Automated alert: system notification regarding invoice 88214</span><span class=\"db-input\">Automated alert: system notification regarding invoice 88215</span><span class=\"db-input\">Automated alert: system notification regarding refund 41903</span></div></div></div></div>"
      },
      "what": "There are two kinds of truncation and they behave very differently. CSS truncation with text-overflow: ellipsis is presentational, so the full string stays in the document and can still be read by a screen reader, copied or found. Truncation done in the server or template output deletes the text, so the rest of it does not exist on the page at all. WCAG 2.2 SC 1.4.10 Reflow requires content to be presented without loss of information at 320 CSS pixels, and a hard truncation that leaves no way to the full string is exactly that loss.",
      "why": "Distinguishing the two tells you which fix you need. Visual clipping needs a way to reveal, such as expansion or a detail view. Content deletion needs the full text put back before anything else.",
      "how": [
        "Prefer wrapping to truncating. Two lines of a real title beat one line and an ellipsis.",
        "If you clip visually, give a route to the whole thing: an expander, a link to the detail page, or a tooltip that is also available on focus and touch.",
        "Truncate at the end of the string, never in the middle of the distinguishing part. Filenames and reference numbers usually differ at the end.",
        "Never truncate error messages, prices, legal terms or anything a user has to act on."
      ],
      "example": "A support ticket list that clips every subject line at forty characters, where the tickets all start with the same automated prefix, so every row reads identically.",
      "numbers": "WCAG 2.2 SC 1.4.10 (Level AA): content presented without loss of information at a width equivalent to 320 CSS pixels.",
      "pitfall": "Truncation is added to make a card grid look even and then the real data arrives, where the distinguishing words are all past the cut. Mobile is where it bites, because the same limit clips far more.",
      "source": "W3C, WCAG 2.2 SC 1.4.10 (2023); MDN Web Docs, text-overflow",
      "verify": {
        "status": "verified",
        "note": "SC 1.4.10's wording checked against the W3C Understanding document. MDN's text-overflow page describes the ellipsis keyword as a display behaviour and, as I confirmed, carries no accessibility warning at all, so the point about CSS truncation leaving text in the document is drawn from the property being presentational rather than from a stated MDN claim."
      },
      "belongs": {
        "verdict": "core",
        "why": "Deciding how overflowing text behaves is a layout decision, and the failure hides content the user came for."
      },
      "related": [
        1042,
        1047,
        1052,
        1058
      ]
    },
    {
      "n": 1060,
      "title": "Header that wraps at intermediate widths",
      "aka": [
        "Nav wrap",
        "Broken header between breakpoints"
      ],
      "oneLine": "A header that fits on a phone and a large desktop can still collapse into two ragged lines in between.",
      "demo": {
        "caption": "Both headers at the same in-between width. The left one has not collapsed to a menu yet, so it wraps.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Burger not reached yet</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-type db-type--display\" style=\"font-size:15px\">Ashgrove</span><span class=\"db-note\">Treatments</span><span class=\"db-note\">Team</span><span class=\"db-note\">Fees</span><span class=\"db-note\">Reviews</span><span class=\"db-note\">Contact</span><span class=\"db-note\">01632 960 421</span><span class=\"db-btn db-btn--sm\">Book now</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Burger moved up</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--nowrap db-row--between\"><span class=\"db-row db-row--tight db-row--nowrap\"><svg class=\"db-svg\" viewBox=\"0 0 16 12\" style=\"width:16px\"><path class=\"s\" d=\"M1 2H15M1 6H15M1 10H15\"/></svg><span class=\"db-type db-type--display\" style=\"font-size:15px\">Ashgrove</span></span><span class=\"db-note\">01632 960 421</span><span class=\"db-btn db-btn--sm\">Book now</span></div></div></div></div>"
      },
      "what": "A site header holds a logo, a navigation list, often a phone number and usually a button, all on one line. The mobile layout is designed and the desktop layout is designed. The widths between them are not, and that is where the row runs out of space and wraps, dropping the button under the logo or splitting the nav across two lines. It is a pure responsive-layout fault with no published rule behind it. WCAG 2.2 SC 1.4.10 Reflow only specifies behaviour at 320 CSS pixels, so nothing in the standards requires anyone to look at 900px.",
      "why": "The header is the first thing on every page and a wrapped one signals amateur work immediately. Fixing it is a matter of testing widths nobody assigned rather than of any technique that is hard.",
      "how": [
        "Set white-space: nowrap on the nav items, the phone number and the button label so they cannot break internally.",
        "Move the burger breakpoint up to whatever width the row actually stops fitting, which is usually higher than the tablet breakpoint people default to.",
        "Drag the browser window slowly across the whole range rather than checking the three device presets.",
        "Test with the longest real content: the longest nav label, the longest phone number, the client's full trading name."
      ],
      "example": "A header with six nav items, a phone number and a Book now button typically fits at 1280px and at 375px with a burger, and breaks somewhere around 900px to 1100px where the burger has not yet appeared.",
      "numbers": "",
      "pitfall": "Design review happens at three fixed widths, so the broken range is never seen. Translated or longer client content then shifts the break point after sign-off.",
      "source": "Origin unclear. Responsive layout craft; no published rule specifies intermediate-width testing.",
      "verify": {
        "status": "unverified",
        "note": "I could not find any named principle, study or standard covering header wrapping at intermediate widths. WCAG 2.2 SC 1.4.10 was checked and only specifies 320 CSS pixels, confirming that no standard requires testing the range in between. This entry is recorded as practitioner craft with no source, rather than being attributed to anyone."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "Downgraded from core on review. It is a real and repeatable failure, but it is a QA omission rather than a design principle: the fix is to test widths nobody assigned, not to know something. Everything else in this section either has a published standard behind it or names a decision a designer makes on purpose. This one has neither, and it is one symptom of the broader habit of checking only the three device presets."
      },
      "related": [
        1026,
        1038,
        1052
      ]
    },
    {
      "n": 10060,
      "title": "The model default (the AI look)",
      "aka": [
        "AI slop",
        "The purple gradient",
        "The Tailwind median"
      ],
      "oneLine": "A page assembled from what a language model reaches for when nobody decided anything, and recognisable as such at a glance.",
      "demo": {
        "caption": "Same product, two pages. Left, the model's median: centred, gradient, two buttons, three equal cards. Right, four decisions: a claim, one action, one thing dominant.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Defaults</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\" style=\"text-align:center\"><span class=\"db-type\" style=\"font-weight:700\">Build faster with AI</span><span class=\"db-row db-row--centre\"><span class=\"db-btn db-btn--sm\" style=\"background:linear-gradient(90deg,#6366f1,#a855f7);color:#fff\">Get started</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Learn more</span></span><span class=\"db-row\"><span class=\"db-card\"><span class=\"db-dot\"></span></span><span class=\"db-card\"><span class=\"db-dot\"></span></span><span class=\"db-card\"><span class=\"db-dot\"></span></span></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Decisions</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><span class=\"db-type\" style=\"font-weight:700\">Invoices paid in 9 days, not 40</span><span class=\"db-row\"><span class=\"db-btn db-btn--sm\">See prices</span></span><span class=\"db-row db-row--top\"><span class=\"db-card\" style=\"flex:2\"><span class=\"db-type\" style=\"font-size:11px\">Automatic reminders</span></span><span class=\"db-col\"><span class=\"db-type\" style=\"font-size:11px\">Card and bank</span><span class=\"db-type\" style=\"font-size:11px\">Statements</span></span></span></div></div></div></div>"
      },
      "what": "Left to itself, a model produces the statistical middle of everything it was trained on, and for web pages that middle has a recognisable shape: a centred hero with gradient text, an indigo or violet accent, a sans such as Inter, a light ground with rounded cards under soft shadows, a three-column grid of icon, title and two lines, and one purple call to action. Alan West traces the colour to Tailwind's creator choosing indigo-500 as an inoffensive placeholder for component demos, a choice West reports Adam Wathan acknowledged in August 2025, and to the loop in which that code became training data and the model's output became more of it. Jack Pearce records the same convergence, and that Anthropic's own front-end guidance now warns against it. The mechanism is practitioner inference; the look itself is not in dispute.",
      "why": "Every element passes on its own. The combination fails, because it tells the reader that nothing on the page was decided, which is the opposite of what a brand is paying for. Distinctiveness (#831) is exactly what the look removes.",
      "how": [
        "Run the anti-default list in the Design Brain core before anything ships, and change the structure, not only the colour.",
        "Choose the accent from the brand or the subject and test it in one colour (#842, #836).",
        "Rank the content and give one thing dominance in place of three equal cards (#96, #1048).",
        "Flush-left the text, cap the buttons at one primary, and put a scrim or nothing behind text (#1027, #622, #1030).",
        "Use motion only where it carries information, and drop the fade-up on scroll (#1041)."
      ],
      "example": "Put ten landing pages generated by different tools into a slide sorter. If they cannot be told apart at thumbnail size, this is why, and none of them will be remembered.",
      "numbers": "None. West's article gives no measurement, and no study of the convergence was found. The claim rests on observation.",
      "pitfall": "Fixing the colour. Swap violet for teal and the centred hero, three cards and gradient text still announce the source. The structure is the tell.",
      "source": "Alan West, Why Every AI-Built Website Looks the Same (Blame Tailwind's Indigo-500), dev.to, 25 March 2026; Jack Pearce, Where does that purple gradient come from?, jackpearce.co.uk (undated note); the composite is the failure modes at #1027, #1048, #1030, #1025, #1039, #1040 and #1041",
      "verify": {
        "status": "verified",
        "note": "Both articles were read this session. West's account of the August 2025 tweet by Tailwind's creator was not checked against the tweet itself and is attributed to him as his report. Neither piece measures anything; the training-data mechanism is inference by practitioners, and the entry says so. The visual pattern is easy to confirm by generating a page with any current model and no brief."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is now the commonest failure in the wild for anything built with a model, and it is a compound of other failure modes, which is what section 30 exists to name."
      },
      "related": [
        1027,
        1048,
        1030,
        1025,
        1039,
        1040,
        1041,
        831,
        842
      ]
    }
  ]
};
