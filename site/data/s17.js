window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[17] = {
  n: 17,
  slug: "accessibility",
  title: "Accessibility and inclusive design",
  blurb: "How to design so that disability, temporary injury or a bad situation does not lock people out.",
  intro: "Most of this section is not opinion. It is the Web Content Accessibility Guidelines (WCAG), published by the W3C and now at version 2.2, where each requirement is a numbered success criterion with a testable threshold. The rest comes from inclusive design practice, mainly Microsoft's toolkit and the W3C's cognitive accessibility work, which cover the people the thresholds miss. Two reasons a working designer should care: UK public sector guidance now names WCAG 2.2 AA as the standard to meet, and the failures found most often on real sites (poor contrast, missing alt text, unlabelled form fields) start in a design file, not in code. Where a number below is quoted, it comes from the standard itself, and where the standard's own reasoning is contested that is said plainly.",
  sources: [
    "W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation (first published 5 October 2023; the version served at w3.org/TR/WCAG22 is dated 12 December 2024)",
    "W3C WAI, Understanding WCAG 2.2 (accessed August 2026)",
    "W3C, Accessible Name and Description Computation 1.2, Working Draft (5 August 2026)",
    "W3C, Using ARIA, Discontinued Draft (24 February 2026)",
    "W3C WAI COGA Task Force, Making Content Usable for People with Cognitive and Learning Disabilities, W3C Working Group Note (29 April 2021)",
    "W3C, CSS Flexible Box Layout Module Level 1, section 5.4 Reordering and Accessibility",
    "W3C WAI, An alt Decision Tree (updated 13 May 2024)",
    "W3C, WAI-ARIA 1.2 role definitions",
    "Microsoft, Inclusive 101 and the Inclusive Design toolkit (inclusive.microsoft.design)",
    "Angela Glover Blackwell, The Curb-Cut Effect, Stanford Social Innovation Review (Winter 2017)",
    "WebAIM, Screen Reader User Survey #10 (2024)",
    "WebAIM, The WebAIM Million (February 2026)",
    "Apple, Human Interface Guidelines: Accessibility (accessed August 2026)",
    "Google, Material Design 3: Accessibility, Designing (accessed August 2026)",
    "GOV.UK, Accessibility requirements for public sector websites and apps (accessed August 2026)"
  ],
  entries: [
    {
      n: 688,
      title: "Perceivable, operable, understandable, robust (POUR)",
      aka: ["The four WCAG principles"],
      oneLine: "WCAG files every accessibility requirement under four headings, and each one asks a different question.",
      demo: {
        caption: "One checkout screen, four faults. Each principle catches a different one, so fixing the grey text leaves three.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div><span class=\"db-tag\">1 Perceivable</span><div class=\"db-chip-text\" style=\"background:#ffffff;color:#cfcfcf\">Delivery arrives on Tuesday</div></div><div><span class=\"db-tag\">2 Operable</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-bar db-bar--accent\" style=\"width:38%\"></span><span class=\"db-dot db-dot--lg db-dot--accent\"></span><span class=\"db-bar\" style=\"width:50%\"></span></div><span class=\"db-note\">drag the handle: no field, no arrow keys</span></div><div><span class=\"db-tag\">3 Understandable</span><span class=\"db-input db-input--error\">Error 0x2F: constraint violation</span></div><div><span class=\"db-tag\">4 Robust</span><div class=\"db-row db-row--tight\"><span class=\"db-btn\"><span class=\"db-sq\" style=\"--mark:var(--paper)\"></span></span><span class=\"db-note\">announced as: button, no name</span></div></div></div></div>"
      },
      what: "WCAG sorts its whole contents into four principles. Perceivable: the content reaches the person through some sense, so text has an alternative and sound has a transcript. Operable: the interface can be driven by whatever input the person has, keyboard included. Understandable: the words and the behaviour make sense and stay predictable. Robust is the standard's own fourth word, and it means the code holds up in assistive technology. Under each principle sit guidelines, and under those the numbered success criteria that are actually testable.",
      why: "The four headings stop accessibility collapsing into a vague good intention. Run one screen past all four and you get four different failures out of it rather than four versions of the same one. They also give an audit a shape a client can follow, because the fixes group naturally.",
      how: [
        "Check a design against all four before it goes to build, not just contrast and colour.",
        "For each principle ask what happens when that channel is missing: no sight, no mouse, no memory of the last screen, no modern browser.",
        "Group audit findings by principle so the developer sees which are markup problems and which are design problems.",
        "Treat the fourth principle as a build conversation, since it is mostly about correct roles, names and states."
      ],
      example: "The WCAG 2.2 numbering is the principle set made visible: 1.4.3 is a contrast rule because 1.x is perceivable, 2.1.1 is a keyboard rule because 2.x is operable, and 4.1.2 is name, role and value because 4.x is the fourth principle.",
      numbers: "",
      pitfall: "Teams learn POUR, feel covered and stop. It is a filing system with no tests in it; the pass or fail lives in the success criteria underneath.",
      source: "W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation, first published 5 October 2023.",
      verify: { status: "adjusted", note: "Checked the four principles and the numbering against w3.org/TR/WCAG22. Date corrected to name both: WCAG 2.2 became a Recommendation on 5 October 2023, and the copy served at that URL now carries the date 12 December 2024, so a citation giving only one of the two invites an argument with a client." },
      belongs: { verdict: "core", why: "It is the organising structure of the standard every other entry in this section sits inside." },
      related: [689, 703, 720]
    },
    {
      n: 689,
      title: "Conformance levels A, AA, AAA",
      aka: ["WCAG levels"],
      oneLine: "Every success criterion is graded A, AA or AAA, and conformance is claimed per page at one level.",
      demo: {
        caption: "Four steps of this checkout pass at AA. The fifth does not, and the claim is for the whole process.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-row db-row--tight db-row--nowrap\"><div class=\"db-card db-fill\"><span class=\"db-note\">Basket</span><span class=\"db-tag db-tag--good\">Pass</span></div><div class=\"db-card db-fill\"><span class=\"db-note\">Delivery</span><span class=\"db-tag db-tag--good\">Pass</span></div><div class=\"db-card db-fill\"><span class=\"db-note\">Payment</span><span class=\"db-tag db-tag--bad\">Fail</span></div><div class=\"db-card db-fill\"><span class=\"db-note\">Review</span><span class=\"db-tag db-tag--good\">Pass</span></div><div class=\"db-card db-fill\"><span class=\"db-note\">Confirm</span><span class=\"db-tag db-tag--good\">Pass</span></div></div><div class=\"db-note\">AA claim for this checkout: <span style=\"color:var(--sig-disputed)\">not met</span></div></div></div>"
      },
      what: "Level A is the floor, AA adds more, AAA is the highest. To claim AA you must meet every A and every AA criterion on the page, so there is no partial credit. Beyond the criteria there are five conformance requirements: conformance level, full pages, complete processes, accessibility-supported technologies and non-interference. Full pages means you cannot exclude the bit you have not fixed. Complete processes means every page in a checkout or application flow has to conform, not just the pretty ones.",
      why: "The level named in the brief decides how much room the design has. AA is what regulators point at, so it is the practical target for client work. Knowing the five requirements stops the common false claim of conformance based on a sample of nice pages.",
      how: [
        "Write the target level into the brief and the quote, not into a later apology.",
        "Test whole pages and whole flows, including the error and confirmation states.",
        "Pick individual AAA criteria to adopt where they suit the audience rather than promising AAA outright."
      ],
      example: "GOV.UK guidance for public sector bodies tells organisations to meet the WCAG 2.2 AA standard and to publish an accessibility statement describing how accessible the site actually is.",
      numbers: "WCAG states it is not recommended that Level AAA conformance be required as a general policy for entire sites, because some content cannot satisfy every AAA criterion.",
      pitfall: "A brief that says AAA out of enthusiasm. Some AAA criteria fight the content (sign language for every video) or the brand palette (7:1 text contrast), and the promise gets quietly dropped.",
      source: "W3C, WCAG 2.2 conformance requirements; GOV.UK accessibility requirements guidance.",
      verify: { status: "verified", note: "Five conformance requirements and the AAA sentence taken from the WAI Understanding Conformance page. The UK level was read off the GOV.UK guidance page in August 2026, which names WCAG 2.2 AA." },
      belongs: { verdict: "core", why: "The level chosen changes what a designer is allowed to draw, so it is a design constraint, not just paperwork." },
      related: [688, 690, 720]
    },
    {
      n: 690,
      title: "Text contrast minimums",
      aka: ["1.4.3 Contrast (Minimum)", "4.5:1 rule"],
      oneLine: "Body text needs 4.5:1 against its background; large text needs 3:1.",
      demo: {
        caption: "The same sentence on white. Only the grey changed, from #949494 at 3.0:1 to #767676 at 4.5:1.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">3.0:1, fails 1.4.3</span><div class=\"db-stage db-stage--tight\"><div class=\"db-chip-text\" style=\"background:#ffffff;color:#949494\">Your appointment is confirmed for 9 March at 10:15.</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">4.5:1, passes 1.4.3</span><div class=\"db-stage db-stage--tight\"><div class=\"db-chip-text\" style=\"background:#ffffff;color:#767676\">Your appointment is confirmed for 9 March at 10:15.</div></div></div></div>"
      },
      what: "Success criterion 1.4.3 (Level AA) sets 4.5:1 for text and images of text, dropping to 3:1 for large text, which the standard defines as at least 18 point, or 14 point bold. WCAG notes those sizes are roughly 1.5em and 1.2em. Criterion 1.4.6 (Level AAA) raises the same pair to 7:1 and 4.5:1. Logos and brand names are exempt, so is incidental text inside a photograph, and so are controls that are switched off.",
      why: "The ratio is not plucked from the air. WCAG derives it from the 3:1 minimum recommended in ISO-9241-3 and ANSI-HFES-100-1988, multiplied by 1.5 to allow for the contrast sensitivity loss that goes with 20/40 acuity. Meeting it is the single highest-yield fix on most sites. Say plainly to a client that the formula behind the number is contested: it is widely criticised for misjudging mid-tones and dark themes, which is why Apple's guidelines now name the Accessible Perceptual Contrast Algorithm next to WCAG. The 4.5:1 threshold is still the one you are audited against.",
      how: [
        "Check contrast on the real background, including images, gradients and dark mode, not on a swatch board.",
        "Fix pale grey body text first, then placeholder text, then small print in footers.",
        "If a brand colour cannot carry text, use it for large headings or as a background behind white.",
        "Record passing pairs as tokens so the ratio survives the next redesign."
      ],
      example: "WebAIM's February 2026 scan of a million home pages found low contrast text on 83.9 per cent of them, making it the most common detected failure by a wide margin.",
      numbers: "4.5:1 normal text, 3:1 large text (AA). 7:1 and 4.5:1 (AAA). Large text is 18pt, or 14pt bold.",
      pitfall: "White text dropped on a photograph passes on the dark part of the image and fails on the sky. Test the worst pixel behind the text, or add a scrim.",
      source: "W3C, WCAG 2.2 SC 1.4.3 and 1.4.6, with the derivation given in Understanding SC 1.4.3.",
      verify: { status: "adjusted", note: "Ratios, the large-text definition and the 3 x 1.5 derivation quoted from the WAI Understanding page for 1.4.3, which gives 20/40 acuity as the reason for the 1.5 multiplier; failure rate of 83.9 per cent confirmed on the WebAIM Million page, February 2026 report, where it is the most common error. The caveat about the formula was buried in this note in the first draft and has been moved into the entry itself, because a reader of the body would otherwise never see it. Apple naming APCA alongside WCAG was read off the Human Interface Guidelines accessibility page in August 2026." },
      belongs: { verdict: "core", why: "A colour decision made in the design file with a published pass mark attached to it." },
      related: [691, 694, 692]
    },
    {
      n: 691,
      title: "Non-text and UI component contrast",
      aka: ["1.4.11 Non-text Contrast"],
      oneLine: "Controls, their states, and the meaningful parts of graphics need 3:1 against what sits next to them.",
      demo: {
        caption: "The label passes 4.5:1 in both. Only the right field has an edge you can find, at 3:1 rather than 1.4:1.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Border 1.4:1</span><div class=\"db-stage db-stage--tight\" style=\"background:#ffffff\"><span class=\"db-label\" style=\"color:#595959\">Card number</span><span class=\"db-input\" style=\"background:#ffffff;border-color:#dddddd;color:#595959\">4242 4242 4242 4242</span></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Border 3.0:1</span><div class=\"db-stage db-stage--tight\" style=\"background:#ffffff\"><span class=\"db-label\" style=\"color:#595959\">Card number</span><span class=\"db-input\" style=\"background:#ffffff;border-color:#949494;color:#595959\">4242 4242 4242 4242</span></div></div></div>"
      },
      what: "Criterion 1.4.11 (Level AA) covers two things. User interface components: whatever visual information you need in order to spot the control and read its state, such as the edge of an input, the tick in a checkbox, the selected tab. Graphical objects: the parts of an illustration or chart needed to understand it. Both need 3:1 against adjacent colours. Inactive controls are exempt, so are browser defaults you have not restyled, and so is presentation that is essential, such as a flag or a photograph.",
      why: "Text contrast alone leaves a form where the label is readable and the field is invisible. This criterion is where minimal interface styling meets its limit, and it is the one that decides whether a low-vision user can find the button at all.",
      how: [
        "Give every input a boundary at 3:1 or a filled background that differs from the page at 3:1.",
        "Check the difference between states, not just each state on its own: unchecked against checked, tab against selected tab.",
        "In charts, test the line or bar against the plot background and against the neighbouring series.",
        "Do not rely on a disabled control looking pale, since the exemption means nobody has to be able to read it."
      ],
      example: "A one pixel #DDDDDD border around a white text field computes to about 1.4:1 by the WCAG contrast formula, so the field boundary fails 3:1 even when the label above it passes 4.5:1 easily.",
      numbers: "3:1 for identifying components and their states, and for the parts of graphics needed to understand them.",
      pitfall: "Ghost buttons and hairline dividers on white. They photograph well in a portfolio shot and disappear on a laptop screen at an angle.",
      source: "W3C, WCAG 2.2 SC 1.4.11 Non-text Contrast (Level AA).",
      verify: { status: "verified", note: "Wording, scope and the three exceptions checked on the WAI Understanding page for 1.4.11. The #DDDDDD figure is my own arithmetic using the published WCAG relative luminance formula, not a quoted statistic." },
      belongs: { verdict: "core", why: "It governs the visual treatment of every control a designer draws." },
      related: [690, 695, 700]
    },
    {
      n: 692,
      title: "Resize text to 200 per cent",
      aka: ["1.4.4 Resize Text"],
      oneLine: "Text has to survive being doubled in size without losing content or function.",
      demo: {
        caption: "Both labels doubled to 32px. The left button kept its 40 pixel height, so the descenders are sliced off.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Fixed height 40px</span><div class=\"db-stage db-stage--tight\"><span class=\"db-btn\" style=\"font-size:32px;height:40px;overflow:hidden\">Sign up</span></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Minimum height 40px</span><div class=\"db-stage db-stage--tight\"><span class=\"db-btn\" style=\"font-size:32px;min-height:40px\">Sign up</span></div></div></div>"
      },
      what: "Criterion 1.4.4 (Level AA) says that, captions and images of text aside, text can be resized up to 200 per cent without assistive technology and without loss of content or functionality. In practice that means browser zoom and browser font settings, not a magnifier. Nothing should be cut off, overlapped or pushed out of reach at that size, and every control still has to work.",
      why: "Plenty of people who would never call themselves disabled run their browser at 125 or 150 per cent. Designing for double size forces containers that grow with their contents, which is the same discipline that makes translation and long names survive.",
      how: [
        "Size type in rem or em so it responds to the user's own browser setting.",
        "Avoid fixed heights on buttons, cards, nav bars and table cells; set a minimum height instead.",
        "Test at 200 per cent zoom on a laptop viewport, then walk the primary task end to end.",
        "Watch for text clipped by overflow: hidden, which hides the failure rather than showing it."
      ],
      example: "A fixed 40px tall primary button with 16px label text: at 200 per cent the label is 32px in a box that never grew, so the descenders are sliced off and the button reads as a graphic.",
      numbers: "200 per cent, Level AA.",
      pitfall: "Truncating with an ellipsis to keep a layout tidy. It passes a screenshot review and fails the criterion, because content is lost.",
      source: "W3C, WCAG 2.2 SC 1.4.4 Resize Text (Level AA).",
      verify: { status: "adjusted", note: "Wording and level checked against w3.org/TR/WCAG22. The criterion's own opening exception, for captions and images of text, was missing from the first draft and has been restored." },
      belongs: { verdict: "core", why: "It is a layout rule with a number on it, and it is decided by how the designer sizes boxes." },
      related: [693, 9692, 690]
    },
    {
      n: 9692,
      title: "Text spacing override",
      aka: ["1.4.12 Text Spacing"],
      oneLine: "A user can loosen line height and letter spacing, and your layout must not break.",
      demo: {
        caption: "The reader's own spacing applied to both cards. The left one was pinned to a height, so the last line is cut.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Card height fixed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-type\" style=\"font-size:13px;line-height:1.5;letter-spacing:0.12em;word-spacing:0.16em;height:64px;overflow:hidden\">The clinic moves to Bridge Street on 3 March. Your existing appointments are unchanged and the phone number stays the same.</div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Card height grows</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-type\" style=\"font-size:13px;line-height:1.5;letter-spacing:0.12em;word-spacing:0.16em\">The clinic moves to Bridge Street on 3 March. Your existing appointments are unchanged and the phone number stays the same.</div></div></div></div></div>"
      },
      what: "Criterion 1.4.12 (Level AA) is about surviving a change the reader makes, not about your defaults. If someone applies line height of 1.5 times the font size, paragraph spacing of 2 times, letter spacing of 0.12 times and word spacing of 0.16 times, no content or function may be lost. People with dyslexia and low vision use exactly these overrides through browser extensions and user stylesheets.",
      why: "It is the fastest way to find out whether your text containers are boxes or cages. A layout that passes this one usually also handles translation, long words and larger system fonts.",
      how: [
        "Test with a bookmarklet or user stylesheet that applies all four values at once.",
        "Set line height with a unitless number so it scales with the font size.",
        "Never pin a text container to a height taken from the design file.",
        "Check buttons, badges, tabs and table headers, which are where clipping shows first."
      ],
      example: "A three-line card excerpt clamped to a fixed pixel height: apply 1.5 line height and the fourth line is cut mid-sentence with no way to reveal it.",
      numbers: "Line height 1.5x font size, paragraph spacing 2x, letter spacing 0.12x, word spacing 0.16x.",
      pitfall: "Reading the criterion as an instruction to set 1.5 line height everywhere. It is a resilience test, not a typographic prescription.",
      source: "W3C, WCAG 2.2 SC 1.4.12 Text Spacing (Level AA).",
      verify: { status: "verified", note: "All four values quoted from w3.org/TR/WCAG22. Added because the master list covers resize and reflow but omits text spacing, which is the AA criterion designers break most often with fixed-height cards." },
      belongs: { verdict: "core", why: "A published AA threshold that lands squarely on typographic and layout decisions." },
      related: [692, 693]
    },
    {
      n: 693,
      title: "Reflow at 320 CSS pixels",
      aka: ["1.4.10 Reflow"],
      oneLine: "Content must work in a 320 pixel wide window without scrolling in two directions.",
      demo: {
        caption: "Both frames are 320 pixels wide, a 1280 window at 400 per cent zoom. The top one runs off the edge.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div><span class=\"db-tag db-tag--bad\">Four fixed columns</span><div class=\"db-card\" style=\"width:320px;overflow:hidden\"><div class=\"db-row db-row--tight db-row--nowrap\"><div class=\"db-ui\" style=\"flex:0 0 120px\">Starter</div><div class=\"db-ui\" style=\"flex:0 0 120px\">Team</div><div class=\"db-ui\" style=\"flex:0 0 120px\">Business</div><div class=\"db-ui\" style=\"flex:0 0 120px\">Enterprise</div></div></div></div><div><span class=\"db-tag db-tag--good\">Collapsed to one column</span><div class=\"db-card\" style=\"width:320px\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\">Starter</div><div class=\"db-ui\">Team</div><div class=\"db-ui\">Business</div><div class=\"db-ui\">Enterprise</div></div></div></div></div></div>"
      },
      what: "Criterion 1.4.10 (Level AA) requires content to be presented without loss of information or functionality and without two-dimensional scrolling at a width of 320 CSS pixels, or a height of 256 CSS pixels for content read vertically. WCAG explains that 320 pixels is what you get from a 1280 pixel viewport at 400 per cent zoom. Content that genuinely needs two dimensions is excepted: data tables, maps, diagrams, video, games.",
      why: "This is the criterion that ties desktop magnification to mobile layout. Build one honest responsive layout and you have usually satisfied both, which is why it is cheap if you plan for it and expensive if you retrofit.",
      how: [
        "Test at 400 per cent browser zoom on a 1280 pixel window, not only in a phone emulator.",
        "Let wide tables scroll inside their own container so the page itself never scrolls sideways.",
        "Collapse multi-column layouts to one column rather than shrinking the columns.",
        "Check that sticky headers and floating chat widgets do not eat the whole narrow viewport."
      ],
      example: "A pricing table with four fixed-width columns: at 400 per cent zoom the page scrolls left and right on every line, so reading a single row means dragging back and forth.",
      numbers: "320 CSS pixels wide (horizontal languages) or 256 CSS pixels tall (vertical languages), equivalent to 400 per cent zoom at 1280 pixels.",
      pitfall: "Passing the width test but leaving a full-height sticky banner, so the reader gets a 320 pixel window with 80 pixels of usable content in it.",
      source: "W3C, WCAG 2.2 SC 1.4.10 Reflow (Level AA).",
      verify: { status: "verified", note: "Figures and the 1280-at-400-per-cent explanation quoted from the WAI Understanding page for 1.4.10." },
      belongs: { verdict: "core", why: "A hard layout constraint with a published number, decided by the designer's grid choices." },
      related: [692, 9692, 700]
    },
    {
      n: 694,
      title: "No colour-only encoding",
      aka: ["1.4.1 Use of Color"],
      oneLine: "Colour may carry meaning, but never alone.",
      demo: {
        caption: "Each list is shown in colour, then in greyscale. Only the right one still says which invoice is overdue.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Colour only</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-dot\" style=\"--mark:var(--sig-core)\"></span><span class=\"db-type\" style=\"font-size:13px\">Invoice 1042</span></div><div class=\"db-row db-row--tight\"><span class=\"db-dot\" style=\"--mark:var(--sig-disputed)\"></span><span class=\"db-type\" style=\"font-size:13px\">Invoice 1043</span></div><span class=\"db-note\">the same rows, greyscale</span><div style=\"filter:grayscale(1)\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-dot\" style=\"--mark:var(--sig-core)\"></span><span class=\"db-type\" style=\"font-size:13px\">Invoice 1042</span></div><div class=\"db-row db-row--tight\"><span class=\"db-dot\" style=\"--mark:var(--sig-disputed)\"></span><span class=\"db-type\" style=\"font-size:13px\">Invoice 1043</span></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Colour and a word</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-dot\" style=\"--mark:var(--sig-core)\"></span><span class=\"db-type\" style=\"font-size:13px\">Invoice 1042, paid</span></div><div class=\"db-row db-row--tight\"><span class=\"db-dot\" style=\"--mark:var(--sig-disputed)\"></span><span class=\"db-type\" style=\"font-size:13px\">Invoice 1043, overdue</span></div><span class=\"db-note\">the same rows, greyscale</span><div style=\"filter:grayscale(1)\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-dot\" style=\"--mark:var(--sig-core)\"></span><span class=\"db-type\" style=\"font-size:13px\">Invoice 1042, paid</span></div><div class=\"db-row db-row--tight\"><span class=\"db-dot\" style=\"--mark:var(--sig-disputed)\"></span><span class=\"db-type\" style=\"font-size:13px\">Invoice 1043, overdue</span></div></div></div></div></div></div></div>"
      },
      what: "Criterion 1.4.1 (Level A) says colour is not used as the only visual means of conveying information, indicating an action, prompting a response or distinguishing a visual element. It does not ban colour coding. It requires a second cue that survives colour blindness, a monochrome print, a sunlit screen or a badly calibrated projector: a shape, an icon, a label, a pattern, a position.",
      why: "Colour vision deficiency is the obvious case, but the criterion also covers anyone in bright light or reading a photocopy. The second cue usually improves the design anyway, since it makes the meaning explicit rather than learned.",
      how: [
        "Pair every status colour with an icon or a word: a tick with Paid, a warning triangle with Overdue.",
        "Label chart series directly on the line instead of relying on a colour key.",
        "For links inside body text, keep an underline, or make the link text differ from the surrounding text by at least 3:1.",
        "Convert the screen to greyscale as a five second test."
      ],
      example: "A form that turns the field border red on error and green on success and says nothing else. In greyscale the two states are the same box.",
      numbers: "Technique G183: where an inline link is distinguished from static text by colour alone, the contrast ratio between link text and surrounding text must be at least 3:1, measured as a difference in relative luminance. Each colour also still has to pass 4.5:1 against the background.",
      pitfall: "Legends. A chart key that maps five hues to five products is colour-only encoding no matter how large the key is.",
      source: "W3C, WCAG 2.2 SC 1.4.1 Use of Color (Level A); WCAG 2.2 Technique G183.",
      verify: { status: "adjusted", note: "Criterion wording from the WAI Understanding page for 1.4.1. The link guidance was rewritten after reading G183 in full: the WCAG 2.2 version is titled 'Using a contrast ratio of at least 3:1 to distinguish inline text links from surrounding text' and treats 3:1 as sufficient on its own. The earlier draft's 'plus a cue on hover and focus' came from the older WCAG 2.0 and 2.1 wording of the same technique and is now only advisory, so it has been removed from the requirement. That page gives no prevalence figures for colour vision deficiency, so none are quoted here." },
      belongs: { verdict: "core", why: "A direct constraint on how a designer encodes meaning in a palette." },
      related: [690, 691, 708]
    },
    {
      n: 695,
      title: "Visible focus indicator",
      aka: ["2.4.7 Focus Visible"],
      oneLine: "Whatever the keyboard is on must be visibly marked, and not hidden behind anything.",
      demo: {
        caption: "The keyboard is on Send in both rows. Only the right row lets you find it without pressing a key.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">outline: none</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Back</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Save</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Send</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Print</span></div><span class=\"db-note\">focus is on Send</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">2px ring at 3:1</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Back</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Save</span><span class=\"db-btn db-btn--ghost db-btn--sm\" style=\"outline:2px solid var(--accent);outline-offset:2px\">Send</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Print</span></div><span class=\"db-note\">focus is on Send</span></div></div></div></div>"
      },
      what: "Criterion 2.4.7 (Level AA) requires a visible keyboard focus indicator. WCAG 2.2 added two more. 2.4.11 Focus Not Obscured (Minimum), also AA, says that when a component receives focus it is not entirely hidden by author-created content, which is aimed at sticky headers and cookie bars. 2.4.13 Focus Appearance (AAA) puts numbers on the indicator itself: an area at least as large as a 2 CSS pixel thick perimeter of the component, with a contrast ratio of at least 3:1 between the focused and unfocused states of those same pixels.",
      why: "A keyboard user with no visible focus is navigating blind. The default browser outline is ugly but functional, and removing it without a replacement is the most common way a design becomes unusable without anyone noticing.",
      how: [
        "Design the focus state in the same file as hover and active, so it is never left to the browser by accident.",
        "Use :focus-visible so mouse clicks do not leave rings behind while keyboard users still get them.",
        "Give the indicator its own contrast against both the component and the page background.",
        "Tab through the page with a sticky header and a cookie banner on screen to catch 2.4.11 failures."
      ],
      example: "A CSS reset containing outline: none. Every button, link and field in the product loses its focus ring at once, and the failure is invisible to anyone using a mouse.",
      numbers: "AAA appearance test: at least the area of a 2 CSS pixel perimeter, and at least 3:1 between focused and unfocused states.",
      pitfall: "Replacing the outline with a subtle colour change of the component itself. It usually fails 3:1 and it disappears entirely against a coloured background.",
      source: "W3C, WCAG 2.2 SC 2.4.7 (AA), 2.4.11 (AA, new in 2.2) and 2.4.13 (AAA, new in 2.2).",
      verify: { status: "verified", note: "Levels and figures checked on the WAI Understanding pages for focus-appearance and focus-not-obscured-minimum, and against the WAI list of criteria new in WCAG 2.2." },
      belongs: { verdict: "core", why: "A visual state the designer owns, with a published size and contrast test." },
      related: [696, 698, 691]
    },
    {
      n: 696,
      title: "Logical focus order",
      aka: ["2.4.3 Focus Order"],
      oneLine: "Tab order must follow meaning, not the order things happened to be coded.",
      demo: {
        caption: "The numbers are Tab presses over the same layout. Follow the line: the left one doubles back across the page.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Order the markup happened to be in</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 150\"><rect class=\"s-mute\" x=\"2\" y=\"2\" width=\"236\" height=\"146\" rx=\"2\"/><rect class=\"s-mute\" x=\"12\" y=\"12\" width=\"216\" height=\"22\" rx=\"2\"/><rect class=\"s-mute\" x=\"12\" y=\"42\" width=\"104\" height=\"62\" rx=\"2\"/><rect class=\"s-mute\" x=\"124\" y=\"42\" width=\"104\" height=\"62\" rx=\"2\"/><rect class=\"s-mute\" x=\"12\" y=\"112\" width=\"216\" height=\"24\" rx=\"2\"/><path class=\"s-accent\" d=\"M120 23 L176 73 L120 124 L64 73\"/><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"120\" cy=\"23\" r=\"9\"/><text class=\"t\" x=\"120\" y=\"26\" text-anchor=\"middle\">1</text><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"176\" cy=\"73\" r=\"9\"/><text class=\"t\" x=\"176\" y=\"76\" text-anchor=\"middle\">2</text><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"120\" cy=\"124\" r=\"9\"/><text class=\"t\" x=\"120\" y=\"127\" text-anchor=\"middle\">3</text><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"64\" cy=\"73\" r=\"9\"/><text class=\"t\" x=\"64\" y=\"76\" text-anchor=\"middle\">4</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Order a reader would take</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 150\"><rect class=\"s-mute\" x=\"2\" y=\"2\" width=\"236\" height=\"146\" rx=\"2\"/><rect class=\"s-mute\" x=\"12\" y=\"12\" width=\"216\" height=\"22\" rx=\"2\"/><rect class=\"s-mute\" x=\"12\" y=\"42\" width=\"104\" height=\"62\" rx=\"2\"/><rect class=\"s-mute\" x=\"124\" y=\"42\" width=\"104\" height=\"62\" rx=\"2\"/><rect class=\"s-mute\" x=\"12\" y=\"112\" width=\"216\" height=\"24\" rx=\"2\"/><path class=\"s-accent\" d=\"M120 23 L64 73 L176 73 L120 124\"/><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"120\" cy=\"23\" r=\"9\"/><text class=\"t\" x=\"120\" y=\"26\" text-anchor=\"middle\">1</text><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"64\" cy=\"73\" r=\"9\"/><text class=\"t\" x=\"64\" y=\"76\" text-anchor=\"middle\">2</text><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"176\" cy=\"73\" r=\"9\"/><text class=\"t\" x=\"176\" y=\"76\" text-anchor=\"middle\">3</text><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"120\" cy=\"124\" r=\"9\"/><text class=\"t\" x=\"120\" y=\"127\" text-anchor=\"middle\">4</text></svg></div></div></div>"
      },
      what: "Criterion 2.4.3 (Level A) requires that when a page can be navigated sequentially and the sequence affects meaning or operation, focus moves in an order that preserves both. In practice that means Tab walks the page the way a reader would, dialogs take focus when they open and hand it back when they close, and nothing gains focus that is not currently visible.",
      why: "Focus order is the keyboard user's reading order. When it jumps around, the interface becomes a memory test, and any progress the layout made at explaining itself is lost.",
      how: [
        "Never use positive tabindex values; fix the source order instead.",
        "Move focus into a modal when it opens and return it to the trigger when it closes.",
        "Make offscreen menus and hidden panels genuinely unfocusable while they are closed.",
        "Tab the whole page once, out loud, and say where you expect to land next."
      ],
      example: "An off-canvas mobile menu that stays in the DOM when closed: Tab from the logo goes silently through fifteen invisible links before reaching the page content.",
      numbers: "",
      pitfall: "Fixing visual order with CSS after the fact. The eye follows the new layout and the keyboard follows the old markup.",
      source: "W3C, WCAG 2.2 SC 2.4.3 Focus Order (Level A).",
      verify: { status: "verified", note: "Level confirmed against w3.org/TR/WCAG22; the requirement is paraphrased rather than quoted." },
      belongs: { verdict: "core", why: "It is the sequencing half of layout, and design decisions about placement create or fix it." },
      related: [695, 713, 699]
    },
    {
      n: 697,
      title: "Skip links",
      aka: ["Skip to content", "2.4.1 Bypass Blocks"],
      oneLine: "Give keyboard users one jump past the header and nav that repeats on every page.",
      demo: {
        caption: "Numbered chips are Tab presses. Count how many it takes to reach the first paragraph on each side.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No skip link</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">header and nav</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">1</span><span class=\"db-btn db-btn--ghost db-btn--sm\">2</span><span class=\"db-btn db-btn--ghost db-btn--sm\">3</span><span class=\"db-btn db-btn--ghost db-btn--sm\">4</span><span class=\"db-btn db-btn--ghost db-btn--sm\">5</span><span class=\"db-btn db-btn--ghost db-btn--sm\">6</span><span class=\"db-btn db-btn--ghost db-btn--sm\">7</span><span class=\"db-btn db-btn--ghost db-btn--sm\">8</span></div><span class=\"db-note\">main content</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">9</span><div class=\"db-lines db-fill\"><i></i><i></i><i></i></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Skip link first</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\" style=\"outline:2px solid var(--accent);outline-offset:2px\">1</span><span class=\"db-note\">skip to main content</span></div><span class=\"db-note\">header and nav</span><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span></div><span class=\"db-note\">main content</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">2</span><div class=\"db-lines db-fill\"><i></i><i></i><i></i></div></div></div></div></div></div>"
      },
      what: "Criterion 2.4.1 Bypass Blocks (Level A) asks for a mechanism to skip blocks of content that repeat across pages. A skip link is one way of meeting it. Headings and landmarks are others, and screen reader users mostly rely on those. The skip link earns its place for sighted keyboard users, who cannot jump by heading and would otherwise Tab through the entire navigation on every single page.",
      why: "Twenty links before the first piece of content, on every page, is the difference between a usable site and an exhausting one for anyone driving by keyboard or switch. It is one line of markup.",
      how: [
        "Make it the first focusable element in the document.",
        "Hide it visually until it receives focus, then show it clearly at the top of the viewport.",
        "Point it at the main content container and give that container tabindex=\"-1\" so focus actually lands there.",
        "Test it: press Tab on a fresh page load, then press Tab again and confirm you are inside the content."
      ],
      example: "WebAIM's tenth screen reader survey found 71.6 per cent of respondents find information on a long page by navigating headings and only 3.7 per cent by landmarks, which is why headings carry the load for screen reader users while the skip link serves the sighted keyboard user.",
      numbers: "",
      pitfall: "A skip link hidden with display: none, which removes it from the tab order entirely, so it exists only in the code review.",
      source: "W3C, WCAG 2.2 SC 2.4.1 Bypass Blocks (Level A); WebAIM Screen Reader User Survey #10 (2024).",
      verify: { status: "verified", note: "Level checked against w3.org/TR/WCAG22. Navigation percentages from WebAIM Screen Reader User Survey #10, fielded December 2023 to January 2024 with 1,539 valid responses." },
      belongs: { verdict: "core", why: "A small, well-defined pattern that a designer has to allow for in the header design." },
      related: [703, 704, 698]
    },
    {
      n: 698,
      title: "Full keyboard operability",
      aka: ["2.1.1 Keyboard"],
      oneLine: "Everything the mouse can do, the keyboard must do too.",
      demo: {
        none: "The failure is that nothing happens when Tab is pressed, and a still picture of a working interface and an unreachable one is the same picture."
      },
      what: "Criterion 2.1.1 (Level A) states that all functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function needs the path of the movement rather than its endpoints. Freehand drawing is the classic exception. Criterion 2.1.3 Keyboard (No Exception), at AAA, removes even that.",
      why: "Keyboard operability is the shared floor for switch access, voice control, screen readers and anyone whose hands do not cooperate with a trackpad. If it works by keyboard it usually works with the rest; if it does not, none of them work.",
      how: [
        "Every hover behaviour needs a focus equivalent, and every mouse-only gesture needs a button.",
        "Use real buttons and links so keys come for free, rather than click handlers on divs.",
        "For custom widgets, follow the key patterns in the ARIA Authoring Practices Guide rather than inventing keys.",
        "Do the whole primary task with the mouse unplugged before you sign off a prototype."
      ],
      example: "A card grid where the whole card is clickable through a JavaScript handler on the container: the mouse opens it, the keyboard cannot reach it, and nothing on screen says so.",
      numbers: "",
      pitfall: "Custom dropdowns and date pickers. They usually receive focus and then ignore arrow keys, Home, End and Escape, which makes them technically reachable and practically unusable.",
      source: "W3C, WCAG 2.2 SC 2.1.1 Keyboard (Level A) and 2.1.3 (Level AAA).",
      verify: { status: "verified", note: "Criterion 2.1.1 quoted from the WAI Understanding page for keyboard; levels for 2.1.1 and 2.1.3 checked against w3.org/TR/WCAG22." },
      belongs: { verdict: "core", why: "It decides which interactions a designer is allowed to specify in the first place." },
      related: [699, 696, 9700]
    },
    {
      n: 699,
      title: "No keyboard traps",
      aka: ["2.1.2 No Keyboard Trap"],
      oneLine: "If the keyboard can get into a component, it must be able to get out again.",
      demo: {
        caption: "Follow the arrows into the editor. On the left nothing leads out again, so Save is never reached.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Focus goes in and stays</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 -16 240 116\"><rect class=\"s\" x=\"8\" y=\"20\" width=\"62\" height=\"26\" rx=\"2\"/><text class=\"t\" x=\"39\" y=\"37\" text-anchor=\"middle\">Title</text><rect class=\"s\" x=\"88\" y=\"20\" width=\"64\" height=\"26\" rx=\"2\"/><text class=\"t\" x=\"120\" y=\"37\" text-anchor=\"middle\">Editor</text><rect class=\"s-mute\" x=\"170\" y=\"20\" width=\"62\" height=\"26\" rx=\"2\"/><text class=\"t\" x=\"201\" y=\"37\" text-anchor=\"middle\">Save</text><path class=\"s-accent\" d=\"M70 33 H84\"/><polygon class=\"f-accent\" points=\"88,33 82,30 82,36\"/><path class=\"s-accent\" d=\"M100 20 C 100 -6, 140 -6, 140 20\"/><polygon class=\"f-accent\" points=\"140,20 137,14 143,14\"/><text class=\"t\" x=\"120\" y=\"-6\" text-anchor=\"middle\">Tab</text><path class=\"s-mute\" d=\"M152 33 H168\" stroke-dasharray=\"3 3\"/><path class=\"s\" d=\"M156 29 L164 37 M164 29 L156 37\"/><text class=\"t\" x=\"160\" y=\"52\" text-anchor=\"middle\">no exit</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Escape or Tab leaves</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 -16 240 116\"><rect class=\"s\" x=\"8\" y=\"20\" width=\"62\" height=\"26\" rx=\"2\"/><text class=\"t\" x=\"39\" y=\"37\" text-anchor=\"middle\">Title</text><rect class=\"s\" x=\"88\" y=\"20\" width=\"64\" height=\"26\" rx=\"2\"/><text class=\"t\" x=\"120\" y=\"37\" text-anchor=\"middle\">Editor</text><rect class=\"s\" x=\"170\" y=\"20\" width=\"62\" height=\"26\" rx=\"2\"/><text class=\"t\" x=\"201\" y=\"37\" text-anchor=\"middle\">Save</text><path class=\"s-accent\" d=\"M70 33 H84\"/><polygon class=\"f-accent\" points=\"88,33 82,30 82,36\"/><path class=\"s-accent\" d=\"M100 20 C 100 -6, 140 -6, 140 20\"/><polygon class=\"f-accent\" points=\"140,20 137,14 143,14\"/><text class=\"t\" x=\"120\" y=\"-6\" text-anchor=\"middle\">Tab</text><path class=\"s-accent\" d=\"M152 33 H166\"/><polygon class=\"f-accent\" points=\"170,33 164,30 164,36\"/><text class=\"t\" x=\"160\" y=\"52\" text-anchor=\"middle\">Esc</text></svg></div></div></div>"
      },
      what: "Criterion 2.1.2 (Level A) requires that focus can always be moved away from a component using the keyboard alone. If getting out needs anything more than unmodified Tab or arrow keys, the user has to be told how. A modal that deliberately cycles focus among its own controls is not a trap, provided Escape and a close button both work.",
      why: "A trap is worse than an inaccessible feature, because it takes the whole page down with it. The person cannot reach the navigation, the footer or the exit, and their only option is to close the tab and lose the session.",
      how: [
        "Test every embedded widget by tabbing in and then out again: video players, maps, rich text editors, third-party payment frames.",
        "Give dialogs a working Escape key as well as a close button.",
        "If a component needs its own key handling, say so in visible text or an instruction the screen reader reads on entry.",
        "Re-test after every third-party embed is added, since traps usually arrive with someone else's code."
      ],
      example: "A rich text editor that swallows the Tab key to insert an indent. Focus enters the writing area and never leaves, so the Save button below it is unreachable by keyboard.",
      numbers: "",
      pitfall: "The trap is often in code nobody on the team wrote. Embeds and iframes need the same tab-in, tab-out test as your own components.",
      source: "W3C, WCAG 2.2 SC 2.1.2 No Keyboard Trap (Level A).",
      verify: { status: "verified", note: "Level checked against w3.org/TR/WCAG22; the requirement is paraphrased, not quoted." },
      belongs: { verdict: "core", why: "A build failure with a design cause, since custom widgets and modals are specified in the design." },
      related: [698, 696, 695]
    },
    {
      n: 700,
      title: "Minimum target size",
      aka: ["2.5.8 Target Size (Minimum)"],
      oneLine: "Pointer targets should be at least 24 by 24 CSS pixels, and comfortably more on touch.",
      demo: {
        caption: "The mark inside is 14 pixels in both rows. Only the box you can hit changed, from 20 to 44.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">20 by 20, below the floor</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight db-row--centre\"><span class=\"db-row db-row--centre\" style=\"width:20px;height:20px;border:1px solid var(--rule-strong)\"><span class=\"db-sq\"></span></span><span class=\"db-row db-row--centre\" style=\"width:20px;height:20px;border:1px solid var(--rule-strong)\"><span class=\"db-sq\"></span></span><span class=\"db-row db-row--centre\" style=\"width:20px;height:20px;border:1px solid var(--rule-strong)\"><span class=\"db-sq\"></span></span><span class=\"db-row db-row--centre\" style=\"width:20px;height:20px;border:1px solid var(--rule-strong)\"><span class=\"db-sq\"></span></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">44 by 44, same glyph</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><span class=\"db-row db-row--centre\" style=\"width:44px;height:44px;border:1px solid var(--rule-strong)\"><span class=\"db-sq\"></span></span><span class=\"db-row db-row--centre\" style=\"width:44px;height:44px;border:1px solid var(--rule-strong)\"><span class=\"db-sq\"></span></span><span class=\"db-row db-row--centre\" style=\"width:44px;height:44px;border:1px solid var(--rule-strong)\"><span class=\"db-sq\"></span></span><span class=\"db-row db-row--centre\" style=\"width:44px;height:44px;border:1px solid var(--rule-strong)\"><span class=\"db-sq\"></span></span></div></div></div></div>"
      },
      what: "Criterion 2.5.8 (Level AA, new in WCAG 2.2) sets a floor of 24 by 24 CSS pixels for pointer targets, with five exceptions: adequate spacing (a 24 pixel circle centred on the target does not intersect its neighbours), an equivalent control elsewhere on the page, targets inline in a sentence, targets styled by the browser, and cases where the size is essential. Criterion 2.5.5 Target Size (Enhanced) at AAA asks for 44 by 44 CSS pixels. Platform guidance is more generous than the AA floor.",
      why: "Small targets punish tremor, arthritis, thumbs on a moving bus and anyone using a stylus. The cost of a bigger hit area is usually nothing, because padding is invisible.",
      how: [
        "Size the target, not the glyph: keep a 24 pixel icon and grow the padding around it.",
        "Where targets have to be small, buy the exception with spacing rather than cramming.",
        "Give destructive actions extra room and extra distance from the thing next to them."
      ],
      example: "Material Design 3 shows a 24dp icon sitting inside a 48dp touch target, and notes 48dp works out at roughly 9mm of physical screen whatever the device.",
      numbers: "WCAG: 24 by 24 CSS pixels (AA), 44 by 44 (AAA). Material Design 3: at least 48 by 48dp for touch, 44 by 44dp for pointer, 8dp between targets. Apple's Human Interface Guidelines list a default control size of 44 by 44pt on iOS and iPadOS with a stated minimum of 28 by 28pt.",
      pitfall: "Icon-only toolbars where the icons are 20 pixels apart. Each one might pass on its own and the group still fails the spacing exception.",
      source: "W3C, WCAG 2.2 SC 2.5.8 and 2.5.5; Material Design 3 accessibility guidance; Apple Human Interface Guidelines.",
      verify: { status: "verified", note: "WCAG figures and exceptions from the WAI Understanding pages for target-size-minimum and target-size-enhanced. Material and Apple figures read directly off m3.material.io and developer.apple.com in August 2026; note Apple's current page frames 44pt as the default rather than the minimum." },
      belongs: { verdict: "core", why: "A dimension the designer sets, with three published numbers to reconcile." },
      related: [9700, 691, 693]
    },
    {
      n: 9700,
      title: "Dragging alternatives",
      aka: ["2.5.7 Dragging Movements"],
      oneLine: "Anything you can drag must also be doable with a single tap or click.",
      demo: {
        caption: "The same three-item list. Only the right one can be reordered without holding and dragging anything.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Drag handle only</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:13px\">Cover letter</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-col db-col--tight\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span><span class=\"db-col db-col--tight\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span></span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:13px\">CV</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-col db-col--tight\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span><span class=\"db-col db-col--tight\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span></span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:13px\">References</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-col db-col--tight\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span><span class=\"db-col db-col--tight\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span></span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Handle plus buttons</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:13px\">Cover letter</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Up</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Down</span></span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:13px\">CV</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Up</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Down</span></span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:13px\">References</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Up</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Down</span></span></div></div></div></div></div></div>"
      },
      what: "Criterion 2.5.7 (Level AA, new in WCAG 2.2) says all functionality that uses a dragging movement can be achieved by a single pointer without dragging, unless dragging is essential or the behaviour comes from the browser rather than from you. Dragging is hard with a tremor, a head pointer, a trackball or a stylus held awkwardly, and it is impossible with some switch setups.",
      why: "Drag-and-drop feels natural in a demo and quietly excludes a slice of users in production. The alternative is usually cheap: a menu, a pair of arrow buttons, a number field.",
      how: [
        "Pair every drag handle with Move up and Move down controls, or a cut-and-paste style action.",
        "Give sliders a text input or stepper alongside the thumb.",
        "For kanban boards, add a Move to column action on each card.",
        "Remember the keyboard requirement is separate: passing 2.5.7 with a click alternative does not exempt you from 2.1.1."
      ],
      example: "A file upload area that only accepts dropped files. Adding a Choose file button satisfies the criterion and helps everyone on a phone.",
      numbers: "",
      pitfall: "Treating a long-press or a two-finger gesture as the alternative. The criterion asks for a single pointer without dragging, not for a different gesture.",
      source: "W3C, WCAG 2.2 SC 2.5.7 Dragging Movements (Level AA).",
      verify: { status: "verified", note: "Wording, level and exceptions quoted from the WAI Understanding page for dragging-movements. Added because the master list covers target size but not the other new pointer criterion in WCAG 2.2, and drag interfaces are specified in design files." },
      belongs: { verdict: "core", why: "It rules on an interaction pattern designers choose, and it is an AA requirement." },
      related: [700, 698]
    },
    {
      n: 701,
      title: "Reduced-motion preference",
      aka: ["prefers-reduced-motion"],
      oneLine: "Honour the operating system setting that says large movement makes this person ill.",
      demo: {
        caption: "The same panel arriving, on a loop. The reduced version still shows the change, without the travel across the screen.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Default: 120px of travel</span><div class=\"db-stage db-stage--tight\"><div class=\"db-block db-block--accent db-anim db-anim--slide db-anim--ease\" style=\"width:90px\"></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Reduce motion: cross-fade</span><div class=\"db-stage db-stage--tight\"><div class=\"db-block db-block--accent db-anim db-anim--fade db-anim--ease\" style=\"width:90px\"></div></div></div></div>"
      },
      what: "prefers-reduced-motion is a CSS media feature defined in Media Queries Level 5, with two values: no-preference and reduce. It reports an operating system setting, so the user has already asked, in their own settings, for less movement. WCAG's related criterion, 2.3.3 Animation from Interactions, sits at AAA and covers motion animation triggered by interaction where the motion is not essential.",
      why: "Vestibular disorders turn parallax, large zooms and sliding page transitions into nausea and dizziness. Respecting the setting costs one media query and removes a genuine physical harm.",
      how: [
        "Write the reduced variant as a real design decision: swap movement for a cross-fade, keep the state change legible.",
        "Keep essential feedback. Progress, loading and status still need to communicate.",
        "Cut the big offenders first: parallax, auto-playing carousels, full-screen zooms, motion in the periphery.",
        "Test by toggling the OS setting rather than by editing the media query."
      ],
      example: "Apple's guidance for reduce motion is specific: tighten animation springs to reduce bounce, replace x, y and z transitions with fades, avoid animating into and out of blurs.",
      numbers: "MDN records prefers-reduced-motion as available across browsers since January 2020. The settings are macOS Accessibility, Reduce motion; iOS Settings, Accessibility, Motion; Windows 11 Accessibility, Visual effects, Animation effects; Android Remove animations.",
      pitfall: "The blanket override that sets animation and transition to none on everything. It kills spinners and progress bars, so the reduced-motion user gets an interface that looks frozen.",
      source: "W3C, CSS Media Queries Level 5 (prefers-reduced-motion); WCAG 2.2 SC 2.3.3 (Level AAA); Apple Human Interface Guidelines.",
      verify: { status: "verified", note: "Values, spec and OS setting names taken from MDN's prefers-reduced-motion page; the level for 2.3.3 checked against w3.org/TR/WCAG22; the reduce-motion tactics quoted from Apple's Human Interface Guidelines accessibility page, August 2026." },
      belongs: { verdict: "core", why: "Motion is a design decision and this is the published mechanism for opting out of it." },
      related: [702, 720]
    },
    {
      n: 702,
      title: "Flash and seizure thresholds",
      aka: ["2.3.1 Three Flashes or Below Threshold"],
      oneLine: "Nothing may flash more than three times a second unless the flashing area is tiny or weak.",
      demo: {
        caption: "Relative luminance across one second. Count the rises: four on the left is over the three-flash limit, two is not.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Four flashes in one second</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 100\"><text class=\"t\" x=\"20\" y=\"12\">luminance</text><path class=\"s-mute\" d=\"M20 16 V84 H220\"/><path class=\"s-mute\" d=\"M20 80 V88 M220 80 V88\"/><path class=\"s-accent\" d=\"M20 70 H32 V22 H57 V70 H82 V22 H107 V70 H132 V22 H157 V70 H182 V22 H207 V70 H220\"/><text class=\"t\" x=\"120\" y=\"98\" text-anchor=\"middle\">1 second</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Two flashes in one second</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 100\"><text class=\"t\" x=\"20\" y=\"12\">luminance</text><path class=\"s-mute\" d=\"M20 16 V84 H220\"/><path class=\"s-mute\" d=\"M20 80 V88 M220 80 V88\"/><path class=\"s-accent\" d=\"M20 70 H60 V22 H100 V70 H160 V22 H200 V70 H220\"/><text class=\"t\" x=\"120\" y=\"98\" text-anchor=\"middle\">1 second</text></svg></div></div></div>"
      },
      what: "Criterion 2.3.1 (Level A) allows no more than three general flashes and no more than three red flashes in any one second period, unless the flashing stays under the published thresholds. A general flash means a pair of opposing changes in relative luminance of 10 per cent or more of maximum, where the darker image is below 0.80. The area test exempts flashing covering no more than 0.006 steradians within any 10 degree visual field. Criterion 2.3.2 (AAA) simply bans anything flashing more than three times a second.",
      why: "Photosensitive epilepsy is the reason this one is Level A and phrased in physics rather than taste. A seizure triggered by a website is a real injury, and the person cannot look away fast enough to prevent it.",
      how: [
        "Keep flashing, strobing and rapid cuts out of hero animations and loading states.",
        "Screen video before you embed it: news footage of camera flashes and concert lighting are the usual sources.",
        "If you must include it, warn before it plays and let the user start it themselves."
      ],
      example: "Apple's platforms include a Dim Flashing Lights setting that detects and mitigates flashing in video playback, and Apple asks apps that play video to respond to it.",
      numbers: "Three general or three red flashes per second. The standard describes the area limit as 25 per cent of any 10 degree visual field, and exempts fine balanced patterns with squares smaller than 0.1 degree.",
      pitfall: "Assuming the rule is about epilepsy warnings in games only. A GIF in a marketing email or an animated advert in a sidebar can cross the threshold just as easily.",
      source: "W3C, WCAG 2.2 SC 2.3.1 (Level A) and 2.3.2 (Level AAA); Apple Human Interface Guidelines.",
      verify: { status: "verified", note: "Thresholds quoted from the WAI Understanding page for three-flashes-or-below-threshold; levels checked against w3.org/TR/WCAG22; the Dim Flashing Lights setting is described on Apple's Human Interface Guidelines accessibility page." },
      belongs: { verdict: "core", why: "A safety limit on motion and video that a designer specifies, with published measurements." },
      related: [701, 711]
    },
    {
      n: 703,
      title: "Semantic HTML and landmarks",
      aka: ["1.3.1 Info and Relationships", "ARIA landmark roles"],
      oneLine: "Structure you can see must also exist in the markup, as real elements and named regions.",
      demo: {
        caption: "Two identical layouts. Read the line under each: only the right one gives a screen reader anywhere to jump.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Divs all the way down</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><div class=\"db-row db-row--tight db-row--nowrap db-row--top\"><div class=\"db-card\" style=\"width:30%\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\" style=\"width:44%\"><div class=\"db-lines\"><i></i><i></i><i></i></div></div><div class=\"db-card\" style=\"width:26%\"><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><span class=\"db-note\">regions to jump to: none</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Native elements and landmarks</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><span class=\"db-note db-note--accent\">banner</span><div class=\"db-lines\"><i></i></div></div><div class=\"db-row db-row--tight db-row--nowrap db-row--top\"><div class=\"db-card\" style=\"width:30%\"><span class=\"db-note db-note--accent\">nav</span><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\" style=\"width:44%\"><span class=\"db-note db-note--accent\">main</span><div class=\"db-lines\"><i></i><i></i><i></i></div></div><div class=\"db-card\" style=\"width:26%\"><span class=\"db-note db-note--accent\">aside</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\"><span class=\"db-note db-note--accent\">contentinfo</span><div class=\"db-lines\"><i></i></div></div><span class=\"db-note\">regions to jump to: five</span></div></div></div></div>"
      },
      what: "Criterion 1.3.1 (Level A) requires that information, structure and relationships conveyed visually are available in code. Landmarks are the coarse layer of that: ARIA defines eight landmark roles, namely banner, navigation, search, main, complementary, contentinfo, region and form. Native HTML elements carry most of them, so header, nav, main, aside and footer do the job without extra attributes. A screen reader can then jump between regions the way a sighted reader's eye jumps between blocks.",
      why: "Visual grouping is invisible to anything that reads the page linearly. Landmarks and correct elements are how a boxed sidebar becomes a thing that can be skipped rather than a run of unexplained links.",
      how: [
        "Use one main per page and put the primary content inside it.",
        "Label repeated landmarks so they can be told apart, for example primary navigation and pagination, and do not repeat the role name inside the label.",
        "Reach for the native element before the ARIA role: nav rather than div role=navigation.",
        "Mark up lists as lists and tables as tables, since that structure is read out."
      ],
      example: "Material Design 3's accessibility guidance lists the eight landmark roles and shows a page diagram mapping each region of a layout to a landmark before any code is written.",
      numbers: "Eight landmark roles: banner, navigation, search, main, complementary, contentinfo, region, form.",
      pitfall: "Landmark inflation. Wrapping every section in role=region produces a list of a dozen unnamed regions, which is worse than none.",
      source: "W3C, WCAG 2.2 SC 1.3.1 (Level A); WAI-ARIA landmark roles; Material Design 3 accessibility guidance.",
      verify: { status: "verified", note: "Level for 1.3.1 checked against w3.org/TR/WCAG22. The list of eight landmark roles and the labelling advice were read off the Material Design 3 Designing accessibility page, which cites the W3C ARIA guidelines." },
      belongs: { verdict: "core", why: "The layout a designer draws is the structure a developer marks up, so the two have to be agreed in the design." },
      related: [704, 697, 713]
    },
    {
      n: 704,
      title: "Heading outline",
      aka: ["Document outline", "H1 to H6"],
      oneLine: "Headings are a navigable table of contents, so their levels must follow the content, not the type size.",
      demo: {
        caption: "The four headings look identical on both sides. Only the left picked its levels from the type size.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Level from the type size</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--baseline db-row--nowrap\"><span class=\"db-note db-note--accent\">h1</span><span class=\"db-type db-type--display\" style=\"font-size:20px\">Pricing</span></div><div class=\"db-row db-row--tight db-row--baseline db-row--nowrap\" style=\"margin-left:36px\"><span class=\"db-note db-note--accent\">h3</span><span class=\"db-type db-type--display\" style=\"font-size:15px\">Team plan</span></div><div class=\"db-row db-row--tight db-row--baseline db-row--nowrap\" style=\"margin-left:54px\"><span class=\"db-note db-note--accent\">h4</span><span class=\"db-type db-type--display\" style=\"font-size:13px\">What is included</span></div><div class=\"db-row db-row--tight db-row--baseline db-row--nowrap\" style=\"margin-left:18px\"><span class=\"db-note db-note--accent\">h2</span><span class=\"db-type db-type--display\" style=\"font-size:18px\">Enterprise</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Level from the content</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--baseline db-row--nowrap\"><span class=\"db-note db-note--accent\">h1</span><span class=\"db-type db-type--display\" style=\"font-size:20px\">Pricing</span></div><div class=\"db-row db-row--tight db-row--baseline db-row--nowrap\" style=\"margin-left:18px\"><span class=\"db-note db-note--accent\">h2</span><span class=\"db-type db-type--display\" style=\"font-size:15px\">Team plan</span></div><div class=\"db-row db-row--tight db-row--baseline db-row--nowrap\" style=\"margin-left:36px\"><span class=\"db-note db-note--accent\">h3</span><span class=\"db-type db-type--display\" style=\"font-size:13px\">What is included</span></div><div class=\"db-row db-row--tight db-row--baseline db-row--nowrap\" style=\"margin-left:18px\"><span class=\"db-note db-note--accent\">h2</span><span class=\"db-type db-type--display\" style=\"font-size:18px\">Enterprise</span></div></div></div></div></div>"
      },
      what: "Headings carry structure under criterion 1.3.1, and criterion 2.4.6 Headings and Labels (Level AA) adds that they must describe the topic or purpose. Levels come from the information hierarchy: do not skip from h2 to h4, and one h1 for the page title is the usual advice. Visual prominence and heading level are separate decisions, so a small heading can still be an h2.",
      why: "Headings are the main way screen reader users move around a long page, well ahead of landmarks or links. A correct outline is also a summary of whether the page has a sensible argument, so it catches content problems as well as access ones.",
      how: [
        "Sketch the outline as plain indented text before styling anything.",
        "Match every visual heading in the design to a level, and mark decorative labels that are not headings.",
        "Write headings that make sense read out of context, since that is how they are heard.",
        "Check the outline with a browser extension or by listing the headings in the accessibility panel of dev tools."
      ],
      example: "WebAIM's tenth screen reader survey found 71.6 per cent of respondents locate information on a long page by navigating headings, against 13.6 per cent using the browser's find, 4.8 per cent navigating links and 3.7 per cent navigating landmarks.",
      numbers: "Survey base: 1,539 valid responses, December 2023 to January 2024.",
      pitfall: "Choosing the heading level by how big the text should look. That produces pages of h3s and h1s used as pull quotes, and an outline that reads as nonsense.",
      source: "W3C, WCAG 2.2 SC 1.3.1 and 2.4.6 (Level AA); WebAIM Screen Reader User Survey #10 (2024); Material Design 3 accessibility guidance.",
      verify: { status: "verified", note: "Level for 2.4.6 checked against w3.org/TR/WCAG22; percentages from the WebAIM Screen Reader User Survey #10 results page; the no-skipped-levels and single-h1 advice is stated on Material Design 3's Designing accessibility page." },
      belongs: { verdict: "core", why: "Typographic hierarchy and document structure are the same decision seen from two sides." },
      related: [703, 697, 713]
    },
    {
      n: 705,
      title: "Accessible names and descriptions",
      aka: ["AccName", "4.1.2 Name, Role, Value"],
      oneLine: "Every control needs a name a machine can read, and the name has an order of precedence.",
      demo: {
        caption: "Both buttons print Save draft. Only the left carries an aria-label, and that is the name that wins.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">aria-label outranks the text</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Save draft</span></div><span class=\"db-note\">aria-label = Submit</span><span class=\"db-note db-note--accent\">heard: Submit, button</span><span class=\"db-note\">spoken command Save draft: no match</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Name is the visible text</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Save draft</span></div><span class=\"db-note\">no aria-label</span><span class=\"db-note db-note--accent\">heard: Save draft, button</span><span class=\"db-note\">spoken command Save draft: activates</span></div></div></div></div>"
      },
      what: "The accessible name is what a screen reader says after the role: Search, button. It is computed in a fixed order defined by the W3C's Accessible Name and Description Computation: aria-labelledby first, then aria-label, then the native feature such as a label element or an img alt, then the text inside the element, then title as a last resort. The accessible description is a separate, lower-priority string, computed from aria-describedby, aria-description, then host language features. Criterion 4.1.2 Name, Role, Value (Level A) is where the requirement to have one lives.",
      why: "Icon-only buttons have no name unless somebody writes one, and that somebody should be the designer, because the wording is content. Voice control users say the visible label out loud, so a mismatch between what is printed and what is coded stops the command working.",
      how: [
        "Write the name for every icon-only control in the design file, next to the icon.",
        "Keep the visible label and the accessible name the same, or at least make the visible text the start of the name.",
        "Do not stack aria-label on top of visible text, because the higher-precedence attribute wins and the visible words are never spoken.",
        "Never rely on title as the name; it is last in the order and inconsistently announced."
      ],
      example: "Apple's guidance for Voice Control tells developers to label interface elements appropriately so people can speak the name of a control to activate it.",
      numbers: "Name precedence: aria-labelledby, aria-label, native host language feature, content, tooltip.",
      pitfall: "Twelve links reading Learn more. Each has a name, none has a useful one, and a list of links pulled out of context is unusable.",
      source: "W3C, Accessible Name and Description Computation 1.2, Working Draft 5 August 2026; WCAG 2.2 SC 4.1.2 (Level A).",
      verify: { status: "verified", note: "Precedence order and the name-versus-description distinction taken from w3.org/TR/accname-1.2 (Working Draft, 5 August 2026); level for 4.1.2 checked against w3.org/TR/WCAG22; Voice Control labelling advice from Apple's Human Interface Guidelines. The published algorithm has more steps than the five listed here, including a hidden-node check at the start and an embedded-control step between aria-labelledby and aria-label; the five above are the ones a designer's decisions touch, and their relative order matches the spec." },
      belongs: { verdict: "core", why: "The name is copy, and copy is a design deliverable." },
      related: [706, 707, 710]
    },
    {
      n: 9705,
      title: "Content on hover or focus",
      aka: ["1.4.13", "Dismissible, hoverable, persistent"],
      oneLine: "Tooltips and hover panels must be dismissible, hoverable and persistent.",
      demo: {
        caption: "Both panels hang off the same trigger. Only the left leaves a gap the pointer must cross, closing on the way.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Detached, times out</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Password rules</span></div><div class=\"db-card\" style=\"margin-top:18px\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">at least 12 characters</span><span class=\"db-note\">one number</span></div></div><div class=\"db-note\" style=\"margin-top:8px\">18px of nothing: the panel closes mid-journey</div><div class=\"db-note\">and again after 2 seconds</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Hoverable, dismissible, persistent</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Password rules</span></div><div class=\"db-card\" style=\"margin-top:0\"><div class=\"db-row db-row--between db-row--nowrap db-row--top\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">at least 12 characters</span><span class=\"db-note\">one number</span></div><span class=\"db-btn db-btn--quiet db-btn--sm\">Esc</span></div></div><div class=\"db-note\" style=\"margin-top:8px\">no gap: the pointer arrives</div><div class=\"db-note\">stays until Esc or the trigger goes</div></div></div></div>"
      },
      what: "Criterion 1.4.13 (Level AA) covers any extra content that appears on hover or focus and then disappears. Three things must be true. Dismissible: it can be closed without moving the pointer or focus, unless it reports an input error or covers nothing. Hoverable: the pointer can move onto the content without it vanishing. Persistent: it stays until the trigger is removed, the user dismisses it, or the information stops being true.",
      why: "A tooltip that evaporates when you move towards it is unusable for anyone with a tremor or using magnification, because at high zoom the tooltip and its trigger may not be on screen together. The three tests also make the pattern better for everyone.",
      how: [
        "Let Escape close any hover or focus panel.",
        "Add a small hover-safe gap or bridge so the pointer can travel from trigger to panel.",
        "Never put a link or a control inside something that disappears on mouse-out.",
        "Trigger the same panel on keyboard focus, not on hover alone."
      ],
      example: "A custom form-field tooltip that shows password rules on hover and hides on mouse-out. At 400 per cent zoom the rules sit off screen and the user cannot scroll to them without losing them.",
      numbers: "",
      pitfall: "Auto-hiding after a timer. A tooltip that disappears after two seconds fails persistent, and slower readers never finish it.",
      source: "W3C, WCAG 2.2 SC 1.4.13 Content on Hover or Focus (Level AA).",
      verify: { status: "verified", note: "Wording and the three requirements quoted from the WAI Understanding page for content-on-hover-or-focus. Added because tooltips and hover menus are drawn in every design system and the master list has no entry for them." },
      belongs: { verdict: "core", why: "An AA rule that governs a component pattern designers specify constantly." },
      related: [705, 700, 693]
    },
    {
      n: 706,
      title: "First rule of ARIA (don't use ARIA)",
      aka: ["No ARIA is better than bad ARIA"],
      oneLine: "If a native HTML element already does the job, use it instead of rebuilding it with ARIA.",
      demo: {
        caption: "The two checkboxes are drawn identically. Underneath is what the browser gives free and what somebody has to write.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">div with role=checkbox</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-row db-row--centre\" style=\"width:14px;height:14px;border:1px solid var(--rule-strong)\"></span><span class=\"db-type\" style=\"font-size:13px\">Email me updates</span></div><span class=\"db-note\">Tab: not focusable</span><span class=\"db-note\">Space: nothing happens</span><span class=\"db-note\">State: aria-checked never changes</span><span class=\"db-note\">Focus ring: none</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">input type=checkbox</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-row db-row--centre\" style=\"width:14px;height:14px;border:1px solid var(--rule-strong)\"></span><span class=\"db-type\" style=\"font-size:13px\">Email me updates</span></div><span class=\"db-note\">Tab: focusable</span><span class=\"db-note\">Space: toggles</span><span class=\"db-note\">State: reported by the browser</span><span class=\"db-note\">Focus ring: from the browser</span></div></div></div></div>"
      },
      what: "The rule, as written by the W3C, is that if you can use a native HTML element or attribute with the semantics and behaviour you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so. ARIA changes what assistive technology reports. It adds no behaviour at all, so a div given role=button still needs its own click handling, key handling, focus management and states written by hand.",
      why: "Every custom widget is a promise to maintain keyboard support, states and screen reader output forever. Native elements come with all of that, tested by browser vendors, in every language and on every platform.",
      how: [
        "Specify real form controls in designs: a native select, checkbox, radio and date input where the pattern allows.",
        "If the design cannot be built from native parts, budget the extra build and test time openly.",
        "Ask what problem an ARIA role solves before adding it, and check the state is being updated as well as declared.",
        "Follow the ARIA Authoring Practices Guide for any widget you do have to build."
      ],
      example: "A styled div acting as a checkbox. It looks identical in the design file and arrives with no space-key toggle, no checked state and nothing announced, all of which the native input gives free.",
      numbers: "",
      pitfall: "Sprinkling roles onto broken markup to make an automated checker go quiet. It usually makes the screen reader experience worse than the untouched original.",
      source: "W3C, Using ARIA (the rules of ARIA use); now a Discontinued Draft dated 24 February 2026 that directs readers to the ARIA Authoring Practices Guide.",
      verify: { status: "adjusted", note: "First rule taken word for word from w3.org/TR/using-aria, with only the British spelling of behaviour changed; the first draft had 'rather than re-purposing' where the source reads 'instead of re-purposing', so the entry no longer claims a verbatim quote it was not giving. Worth flagging that the document is now marked Discontinued Draft (24 February 2026); the rule itself is unchanged and still repeated in WAI material, but cite it as the rules of ARIA use rather than as a live specification." },
      belongs: { verdict: "core", why: "It is a design-stage decision as much as a code one, because choosing a bespoke control over a native one creates the problem." },
      related: [705, 703, 707]
    },
    {
      n: 707,
      title: "Form labels and instructions",
      aka: ["3.3.2 Labels or Instructions"],
      oneLine: "Every field needs a visible label that stays visible, plus any format rules stated up front.",
      demo: {
        caption: "The same field, empty then filled. On the left the placeholder was the only label, and typing removed it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Placeholder as the label</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">empty</span><span class=\"db-input\">Delivery address</span><span class=\"db-note\">filled</span><span class=\"db-input\" style=\"color:var(--ink)\">12 Bridge Street</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Label above, rule before the field</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">empty</span><div><span class=\"db-label\">Delivery address</span><span class=\"db-note\">Include the flat or unit number</span><span class=\"db-input\">&nbsp;</span></div><span class=\"db-note\">filled</span><div><span class=\"db-label\">Delivery address</span><span class=\"db-input\" style=\"color:var(--ink)\">12 Bridge Street</span></div></div></div></div></div>"
      },
      what: "Criterion 3.3.2 (Level A) requires labels or instructions when content requires user input. A label is programmatically tied to its field so clicking it focuses the field and a screen reader announces it. Instructions cover the things people cannot guess: accepted date formats, password rules, why you want a phone number, which fields are optional. Placeholder text is not a label, because it disappears the moment typing starts.",
      why: "Forms are where money and applications are won or lost, and an unlabelled field is a guess. Labels also help everyone returning to a half-finished form, since the empty field still says what it wants.",
      how: [
        "Put the label above the field, visible at all times, and never rely on the placeholder.",
        "State format rules before the input, not in an error afterwards.",
        "Mark optional fields in words rather than marking required ones with a coloured asterisk alone.",
        "Group related controls with a fieldset and legend so radio buttons make sense in isolation."
      ],
      example: "WebAIM's February 2026 scan found missing form input labels on 51 per cent of the million home pages tested, one of six error types that between them accounted for 96 per cent of all detected errors.",
      numbers: "51 per cent of home pages had missing form input labels (WebAIM Million, February 2026).",
      pitfall: "The floating label that shrinks into the field border. It often ends up too small and too low in contrast to read once filled, so it fails on size and contrast even though the markup is right.",
      source: "W3C, WCAG 2.2 SC 3.3.2 Labels or Instructions (Level A); WebAIM Million (February 2026).",
      verify: { status: "verified", note: "Level checked against w3.org/TR/WCAG22; failure rate and the six-error-type figure from the WebAIM Million page, February 2026 report." },
      belongs: { verdict: "core", why: "Label placement and wording are pure design decisions with a measurable failure rate." },
      related: [708, 705, 9708]
    },
    {
      n: 708,
      title: "Error identification and suggestion",
      aka: ["3.3.1 Error Identification", "3.3.3 Error Suggestion"],
      oneLine: "Say in text which field is wrong and, where you can work it out, how to fix it.",
      demo: {
        caption: "The same failed field twice. The left marks it in colour only; the right names it and says what would pass.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Colour and a generic banner</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><span class=\"db-note\" style=\"color:var(--sig-disputed)\">Please correct the errors below</span></div><div class=\"db-lines\"><i></i><i></i><i></i></div><div><span class=\"db-label\">Postcode</span><span class=\"db-input db-input--error\">SW1A</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Named in text, with the fix</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><span class=\"db-note\" style=\"color:var(--sig-disputed)\">1 problem: the postcode is incomplete</span></div><div class=\"db-lines\"><i></i><i></i><i></i></div><div><span class=\"db-label\">Postcode</span><span class=\"db-input db-input--error\">SW1A</span><span class=\"db-note\" style=\"color:var(--sig-disputed)\">Enter a full postcode, for example SW1A 1AA</span></div></div></div></div></div>"
      },
      what: "Criterion 3.3.1 (Level A) says an input error that is detected automatically must be identified and described to the user in text. Criterion 3.3.3 (Level AA) goes further: if you know how to correct it, offer the suggestion, unless doing so would compromise security or the purpose of the content. Text is the operative word in both. A red border is not a description.",
      why: "Error handling is where a form either recovers the user or loses them. A named field and a plain instruction turn a dead end into one more step.",
      how: [
        "Put the message next to the field it belongs to, and repeat a summary at the top of long forms.",
        "Name the field in the message: Enter a delivery postcode, not This field is required.",
        "Move focus to the summary or the first bad field, or announce the count through a live region.",
        "Never clear the user's other answers when validation fails."
      ],
      example: "A checkout that returns to the top of the page with a red banner reading Please correct the errors below, while the failing field is three screens down with only a coloured outline to mark it.",
      numbers: "",
      pitfall: "Validating on every keystroke. The user is told they are wrong before they have finished being right, and a live region can end up announcing an error on every character.",
      source: "W3C, WCAG 2.2 SC 3.3.1 (Level A) and 3.3.3 (Level AA).",
      verify: { status: "verified", note: "Levels checked against w3.org/TR/WCAG22; requirements paraphrased from the criterion text." },
      belongs: { verdict: "core", why: "Error copy, placement and timing are designed, and this is the published minimum for all three." },
      related: [707, 709, 694]
    },
    {
      n: 9708,
      title: "Accessible authentication",
      aka: ["3.3.8 Accessible Authentication (Minimum)"],
      oneLine: "Logging in must not depend on remembering, transcribing or solving a puzzle.",
      demo: {
        caption: "Six one-character boxes on the left. A copied code has nowhere to land, so the user retypes it from memory.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Six boxes</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Verification code</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-input\" style=\"width:32px;padding:7px 2px;text-align:center\">4</span><span class=\"db-input\" style=\"width:32px;padding:7px 2px;text-align:center\">8</span><span class=\"db-input\" style=\"width:32px;padding:7px 2px;text-align:center\">2</span><span class=\"db-input\" style=\"width:32px;padding:7px 2px;text-align:center\">9</span><span class=\"db-input\" style=\"width:32px;padding:7px 2px;text-align:center\">1</span><span class=\"db-input\" style=\"width:32px;padding:7px 2px;text-align:center\">3</span></div><span class=\"db-note\">paste fills the first box only</span><span class=\"db-note\">no autofill, no alternative</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One field, plus a way round it</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Verification code</span><span class=\"db-input\" style=\"color:var(--ink)\">482913</span><span class=\"db-note\">paste and autofill both work</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Use the link in the email instead</span></div></div></div></div></div>"
      },
      what: "Criterion 3.3.8 (Level AA, new in WCAG 2.2) says a cognitive function test must not be required at any step of authentication unless that step also offers one of four things: an alternative method, a mechanism that helps the user complete the test, object recognition, or identifying content the user provided themselves. The standard defines a cognitive function test as a task requiring the user to remember, manipulate or transcribe information, and it names memorising passwords, typing in characters, correct spelling, calculations and puzzles.",
      why: "Memory and transcription are exactly what people with cognitive disabilities, dyslexia and brain injury struggle with, and everyone else finds them tedious. The criterion is unusual in that meeting it means removing an obstacle rather than adding a feature.",
      how: [
        "Allow paste into every password, code and one-time-passcode field.",
        "Let password managers autofill; do not block them with scripted inputs or split character boxes.",
        "Offer an alternative to a text puzzle CAPTCHA, or drop it in favour of server-side checks.",
        "Avoid asking users to retype a code from an email when a link would do the same job."
      ],
      example: "A bank login that asks for the third, fifth and eighth characters of a memorable word is a transcription and memory test, and blocking paste on the same page removes the mechanism that would have excused it.",
      numbers: "",
      pitfall: "Six separate one-character boxes for a texted code. They look neat, break paste and autofill, and turn a copy into a transcription exercise.",
      source: "W3C, WCAG 2.2 SC 3.3.8 Accessible Authentication (Minimum), Level AA.",
      verify: { status: "verified", note: "Criterion wording, the definition of a cognitive function test, the four exceptions and the explicit mention of password managers and copy and paste all quoted from the WAI Understanding page for accessible-authentication-minimum. Added because the master list has no login entry and this is a new AA criterion with obvious design consequences." },
      belongs: { verdict: "core", why: "Login screens are designed, and this criterion rules directly on their most common patterns." },
      related: [707, 716, 714]
    },
    {
      n: 709,
      title: "Status messages and live regions",
      aka: ["4.1.3 Status Messages", "aria-live"],
      oneLine: "Changes that are not announced by focus need a live region, used sparingly.",
      demo: {
        caption: "Two updates land half a second apart. Read what each aria-live value leaves the listener with.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">on screen, half a second apart</span><span class=\"db-type\" style=\"font-size:13px\">Saved. / 12 results found.</span></div></div><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap db-row--top\"><span class=\"db-note\" style=\"flex:0 0 74px\">off</span><span class=\"db-note\">nothing, then nothing</span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--top\"><span class=\"db-note\" style=\"flex:0 0 74px\">polite</span><span class=\"db-note db-note--accent\">Saved. 12 results found.</span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--top\"><span class=\"db-note\" style=\"flex:0 0 74px\">assertive</span><span class=\"db-note db-note--accent\">Sav- 12 results found.</span></div></div></div></div>"
      },
      what: "Criterion 4.1.3 (Level AA) covers messages that report a status, a result or an error without taking focus: three items added to basket, search returned no results, saved. The mechanism is a live region. aria-live has three values. Off is the default and says nothing. Polite waits for a gap in speech. Assertive interrupts immediately and can clear what was queued. ARIA also defines role=status as a live region whose content is advisory information that is not important enough to justify an alert, often but not necessarily shown as a status bar, and role=alert as a live region carrying important and usually time-sensitive information.",
      why: "Anyone who cannot see the toast has no idea the action worked. Getting this right removes the silence after a button press, which is the most disorienting moment in a screen reader session.",
      how: [
        "Put the empty live region in the page at load, then inject text into it, because a region added at the same time as its content may be missed.",
        "Reserve assertive for things that must interrupt, such as a session about to expire.",
        "Keep the message short and complete on its own: Saved. 3 results found.",
        "Do not make a toast the only record of something important; leave it on the page as well."
      ],
      example: "A filter panel that updates a product grid with no page reload. Without a polite live region announcing the new result count, the screen reader user hears nothing and assumes the filter did not apply.",
      numbers: "",
      pitfall: "Assertive on everything. Every announcement cuts off the last one, so the person hears fragments and cannot finish reading anything.",
      source: "W3C, WCAG 2.2 SC 4.1.3 (Level AA); WAI-ARIA 1.2 role definitions; MDN aria-live reference.",
      verify: { status: "adjusted", note: "Level for 4.1.3 checked against w3.org/TR/WCAG22; the aria-live values and the advice that the region must exist in the DOM before content is inserted come from MDN's aria-live page. The definition of role=status was wrong in the first draft, which said 'not necessarily interactive'. WAI-ARIA 1.2 actually reads: a type of live region whose content is advisory information for the user but is not important enough to justify an alert, often but not necessarily presented as a status bar. Corrected here." },
      belongs: { verdict: "core", why: "Feedback moments are designed, and this decides whether they exist for people who cannot see them." },
      related: [708, 705, 714]
    },
    {
      n: 710,
      title: "Alt text decision tree",
      aka: ["1.1.1 Non-text Content"],
      oneLine: "Alt text depends on what the image is doing, and the answer is often an empty alt.",
      demo: {
        caption: "One photograph, four jobs. What the alt has to say changes with the job, and twice it is empty.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-row db-row--tight db-row--nowrap db-row--top\"><span class=\"db-block db-block--outline\" style=\"flex:0 0 54px;height:34px\"></span><div class=\"db-col db-col--tight\"><span class=\"db-note\">decoration beside a caption that already says it</span><span class=\"db-type db-type--mono\" style=\"font-size:12px\">alt=\"\"</span></div></div><div class=\"db-row db-row--tight db-row--nowrap db-row--top\"><span class=\"db-block db-block--outline\" style=\"flex:0 0 54px;height:34px\"></span><div class=\"db-col db-col--tight\"><span class=\"db-note\">wrapped in a link to the hire page</span><span class=\"db-type db-type--mono\" style=\"font-size:12px\">alt=\"Hire a bike\"</span></div></div><div class=\"db-row db-row--tight db-row--nowrap db-row--top\"><span class=\"db-block db-block--outline\" style=\"flex:0 0 54px;height:34px\"></span><div class=\"db-col db-col--tight\"><span class=\"db-note\">the only place the locking rule is shown</span><span class=\"db-type db-type--mono\" style=\"font-size:12px\">alt=\"Bike locked to the rail by its frame\"</span></div></div><div class=\"db-row db-row--tight db-row--nowrap db-row--top\"><span class=\"db-block db-block--outline\" style=\"flex:0 0 54px;height:34px\"></span><div class=\"db-col db-col--tight\"><span class=\"db-note\">a poster whose words are typed out underneath</span><span class=\"db-type db-type--mono\" style=\"font-size:12px\">alt=\"\"</span></div></div></div></div>"
      },
      what: "Criterion 1.1.1 (Level A) requires a text alternative for non-text content. The W3C's alt decision tree walks the actual question. Decorative image: empty alt. Image inside a link or button where the purpose would be unclear without it: describe the destination or the action, not the picture. Informative image: convey the meaning it adds. Chart or complex graphic: put the information in text nearby and use alt to point at it. Image of text: include the text; if the same words are already next to it, use an empty alt.",
      why: "Alt text is content, so it should be written by whoever wrote the caption, not generated at build time. Deciding by function rather than by appearance also stops the most common failure, which is describing a photograph nobody needs described.",
      how: [
        "Run each image through the tree once and record the answer with the asset.",
        "For a linked logo, describe where the link goes, since an empty alt leaves the link with no name at all.",
        "For charts, write the finding in the body copy and keep the alt short.",
        "Do not start with Image of, since the role is already announced."
      ],
      example: "WebAIM's February 2026 scan found missing alternative text on 53.1 per cent of home pages, empty links on 46.3 per cent and empty buttons on 30.6 per cent, and the last two are often the same unlabelled icon problem.",
      numbers: "Missing alt text on 53.1 per cent of home pages (WebAIM Million, February 2026).",
      pitfall: "Filenames as alt text, or the same marketing sentence pasted into every image on the page. Both are worse than an empty alt on a decorative image.",
      source: "W3C WAI, An alt Decision Tree, updated 13 May 2024; WCAG 2.2 SC 1.1.1 (Level A).",
      verify: { status: "verified", note: "Branches and guidance taken from the WAI alt decision tree page (updated 13 May 2024); level for 1.1.1 checked against w3.org/TR/WCAG22; percentages from the WebAIM Million, February 2026." },
      belongs: { verdict: "core", why: "Images are chosen and captioned in the design, and the tree is the decision a designer has to make." },
      related: [705, 711, 694]
    },
    {
      n: 711,
      title: "Captions, transcripts and audio description",
      aka: ["1.2.x Time-based Media"],
      oneLine: "Sound needs text, and anything shown but not said needs describing.",
      demo: {
        caption: "Captions sit under every line of dialogue. Description only fits the silences, which is why scripts must leave some.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 150\"><text class=\"t\" x=\"0\" y=\"8\">dialogue</text><path class=\"s-mute\" d=\"M0 19 H320\"/><rect class=\"f-mute\" x=\"10\" y=\"12\" width=\"80\" height=\"14\" rx=\"2\"/><rect class=\"f-mute\" x=\"120\" y=\"12\" width=\"70\" height=\"14\" rx=\"2\"/><rect class=\"f-mute\" x=\"230\" y=\"12\" width=\"80\" height=\"14\" rx=\"2\"/><text class=\"t\" x=\"0\" y=\"44\">captions</text><path class=\"s-mute\" d=\"M0 55 H320\"/><rect class=\"f\" x=\"10\" y=\"48\" width=\"80\" height=\"14\" rx=\"2\"/><rect class=\"f\" x=\"120\" y=\"48\" width=\"70\" height=\"14\" rx=\"2\"/><rect class=\"f\" x=\"230\" y=\"48\" width=\"80\" height=\"14\" rx=\"2\"/><text class=\"t\" x=\"0\" y=\"80\">audio description</text><path class=\"s-mute\" d=\"M0 91 H320\"/><rect class=\"f-accent\" x=\"92\" y=\"84\" width=\"26\" height=\"14\" rx=\"2\"/><rect class=\"f-accent\" x=\"192\" y=\"84\" width=\"36\" height=\"14\" rx=\"2\"/><path class=\"s-mute\" d=\"M90 12 V66 M120 12 V66\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"0\" y=\"116\">transcript</text><rect class=\"s\" x=\"0\" y=\"120\" width=\"318\" height=\"14\" rx=\"2\"/><text class=\"t\" x=\"159\" y=\"144\" text-anchor=\"middle\">the whole thing, dialogue and description, as text</text></svg></div>"
      },
      what: "Four criteria cover most work. Captions for prerecorded video are Level A, as is providing either an audio description or a full text alternative. Live captions are Level AA, and a proper audio description track for prerecorded video is also Level AA. The four formats are not interchangeable. Captions carry dialogue plus meaningful sound. Subtitles translate dialogue. Audio description narrates what is only visible, in the gaps. A transcript is the whole thing as text.",
      why: "Captions serve deaf and hard of hearing viewers first, and after that everyone watching in a quiet office or a loud train. Transcripts are the cheapest of the four, get indexed by search engines and let people skim instead of scrubbing.",
      how: [
        "Budget captions into the video cost rather than treating them as an extra.",
        "Edit automatic captions; unedited machine output regularly mangles names and product terms.",
        "Write the script with description in mind so the presenter says what is on screen and less needs adding later.",
        "Publish the transcript on the page as text, not as a downloadable file."
      ],
      example: "Apple's guidance separates captions, subtitles, audio descriptions and transcripts, and recommends transcripts for longer-form media where people want to review the whole thing or read along.",
      numbers: "",
      pitfall: "Burning captions into the video frame. They cannot be resized, restyled, translated or turned off, and they usually collide with the player controls.",
      source: "W3C, WCAG 2.2 SC 1.2.2 and 1.2.3 (Level A), 1.2.4 and 1.2.5 (Level AA); Apple Human Interface Guidelines.",
      verify: { status: "verified", note: "Levels checked against w3.org/TR/WCAG22; the four-way distinction between captions, subtitles, audio descriptions and transcripts is set out on Apple's Human Interface Guidelines accessibility page." },
      belongs: { verdict: "core", why: "Media formats and their text alternatives are planned at design and production stage, not bolted on." },
      related: [710, 702, 712]
    },
    {
      n: 712,
      title: "Language attributes",
      aka: ["3.1.1 Language of Page", "3.1.2 Language of Parts"],
      oneLine: "Declare the page language, and tag any passage in a different one.",
      demo: {
        none: "A lang attribute changes how a page is pronounced, not how it looks, and writing out synthesised speech would be a guess rather than a demonstration."
      },
      what: "Criterion 3.1.1 (Level A) requires the default human language of the page to be programmatically determinable, which in practice means a lang attribute on the html element. Criterion 3.1.2 (Level AA) extends that to passages in another language, so a French quotation inside an English page carries its own tag. The values are standard language tags, so en-GB rather than a free-text label.",
      why: "A screen reader picks its pronunciation rules and voice from the tag. Without it, English gets read with the wrong phonetics, and a French sentence inside an English page becomes noise. Translation tools and browsers use the same signal.",
      how: [
        "Set lang on the html element of every template, including error pages and email templates.",
        "Tag proper names and quotations in another language where the pronunciation matters.",
        "Set the correct regional variant when the spelling and vocabulary differ, such as en-GB.",
        "Check the CMS is not stamping a default language on translated pages."
      ],
      example: "WebAIM's February 2026 scan found a missing document language on 13.5 per cent of home pages, the smallest of the six most common errors and the easiest of them to fix.",
      numbers: "13.5 per cent of home pages missing a document language (WebAIM Million, February 2026).",
      pitfall: "A multilingual site built from one template where every localised page still says lang=\"en\". Every translated page then gets read in the wrong accent.",
      source: "W3C, WCAG 2.2 SC 3.1.1 (Level A) and 3.1.2 (Level AA); WebAIM Million (February 2026).",
      verify: { status: "verified", note: "Levels checked against w3.org/TR/WCAG22; the 13.5 per cent figure from the WebAIM Million page, February 2026 report." },
      belongs: { verdict: "adjacent", why: "Overturned from core. The author's own reasoning conceded it is markup rather than drawing, and then argued for it on the grounds that it is cheap and common, which is a case for including it, not for calling it a design decision. Setting a lang attribute is a development and content-management job. Its design use is narrow and real: the designer who specifies a bilingual page, a translated template set or a foreign-language pull quote is the person who has to raise it, because nobody downstream will." },
      related: [703, 711]
    },
    {
      n: 713,
      title: "Reading order in the DOM",
      aka: ["1.3.2 Meaningful Sequence"],
      oneLine: "Source order is the real reading order, and CSS may only change how it looks.",
      demo: {
        caption: "Identical cards. The numbers are the order in the markup, which is the order the page is read and tabbed.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Photo first, moved by CSS order</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note db-note--accent\">2</span><span class=\"db-type db-type--display\" style=\"font-size:15px\">Spring service</span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note db-note--accent\">1</span><span class=\"db-block db-block--outline db-fill\" style=\"height:30px\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--top\"><span class=\"db-note db-note--accent\">3</span><div class=\"db-lines db-fill\"><i></i><i></i></div></div></div></div><div class=\"db-note\" style=\"margin-top:8px\">heard: image, Spring service, body</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Source order matches the layout</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note db-note--accent\">1</span><span class=\"db-type db-type--display\" style=\"font-size:15px\">Spring service</span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note db-note--accent\">2</span><span class=\"db-block db-block--outline db-fill\" style=\"height:30px\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--top\"><span class=\"db-note db-note--accent\">3</span><div class=\"db-lines db-fill\"><i></i><i></i></div></div></div></div><div class=\"db-note\" style=\"margin-top:8px\">heard: Spring service, image, body</div></div></div></div>"
      },
      what: "Criterion 1.3.2 (Level A) says that where the sequence of content affects its meaning, that sequence has to be programmatically determinable. The CSS Flexible Box Layout specification is blunt about the consequence: source order is used for speech, for the default traversal order of sequential navigation such as tabbing, and for browsers without CSS. Its section 5.4 is titled Reordering and Accessibility: the order property, and it carries the instruction that authors must use order only for visual, not logical, reordering of content, adding that style sheets which reorder logically are non-conforming.",
      why: "Any layout trick that moves a block visually leaves the screen reader and the Tab key behind. Getting source order right first means the visual arrangement is a presentation choice rather than a hidden second version of the page.",
      how: [
        "Write the content in a sensible linear order before laying it out.",
        "Use flex order, grid placement and row-reverse only where the two orders still agree in meaning.",
        "Test by tabbing the page and, separately, by turning CSS off.",
        "Check responsive breakpoints individually, since the mismatch usually appears at one size only."
      ],
      example: "A media card where the visual design shows title, photo, then description, but the markup puts the photo first and CSS moves it. The screen reader announces an unexplained image before the heading on every card in the list.",
      numbers: "",
      pitfall: "Ordering columns for the desktop grid and letting mobile inherit the result, so the sidebar is read before the article on a phone.",
      source: "W3C, WCAG 2.2 SC 1.3.2 (Level A); CSS Flexible Box Layout Module Level 1, section 5.4 Reordering and Accessibility.",
      verify: { status: "adjusted", note: "Level for 1.3.2 checked against w3.org/TR/WCAG22. Section 5.4 of the CSS Flexbox specification was read in the source: it says the source order 'is used in rendering to non-visual media (such as speech), in the default traversal order of sequential navigation modes (such as cycling through links, see e.g. tabindex), and when content is represented in non-CSS UAs', then 'Authors must use order only for visual, not logical, reordering of content. Style sheets that use order to perform logical reordering are non-conforming.' The section title was truncated in the first draft and the non-conforming clause was missing; both are fixed." },
      belongs: { verdict: "core", why: "Layout and reading order are the same decision, and this is the rule that keeps them attached." },
      related: [696, 703, 704]
    },
    {
      n: 714,
      title: "Timeouts and extensions",
      aka: ["2.2.1 Timing Adjustable", "2.2.6 Timeouts"],
      oneLine: "If the interface imposes a time limit, let people turn it off, adjust it or extend it.",
      demo: {
        caption: "Two sessions on the same clock. Only the right opens a warning window wide enough to notice and act in.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Silent cut-off</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 76\"><text class=\"t\" x=\"0\" y=\"10\">15 minutes of inactivity</text><rect class=\"f-mute\" x=\"0\" y=\"20\" width=\"170\" height=\"14\" rx=\"2\"/><path class=\"s\" d=\"M170 14 V40\"/><path class=\"s-mute\" d=\"M176 27 H238\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"150\" y=\"52\">no warning</text><text class=\"t\" x=\"150\" y=\"66\">answers gone</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Warned, then extendable</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 76\"><text class=\"t\" x=\"0\" y=\"10\">15 minutes of inactivity</text><rect class=\"f-mute\" x=\"0\" y=\"20\" width=\"140\" height=\"14\" rx=\"2\"/><rect class=\"f-accent\" x=\"140\" y=\"20\" width=\"30\" height=\"14\" rx=\"2\"/><path class=\"s-accent\" d=\"M140 14 V40\"/><rect class=\"f-mute\" x=\"176\" y=\"20\" width=\"62\" height=\"14\" rx=\"2\"/><text class=\"t\" x=\"140\" y=\"52\" text-anchor=\"middle\">warning</text><text class=\"t\" x=\"207\" y=\"52\" text-anchor=\"middle\">extended</text><text class=\"t\" x=\"140\" y=\"66\" text-anchor=\"middle\">20s to respond</text></svg></div></div></div>"
      },
      what: "Criterion 2.2.1 (Level A) gives three ways out of a time limit: the user can turn it off, adjust it to at least ten times the default, or extend it after a warning that gives at least 20 seconds to respond and allows extension at least ten times. There are exceptions for real-time events such as an auction, for limits that are essential, and for limits longer than 20 hours. Criterion 2.2.6 Timeouts (Level AAA) adds that users are warned about inactivity that could cause data loss, unless the data is preserved for more than 20 hours.",
      why: "Reading, typing, switching to a password manager and using a screen reader all take longer than the designer's own test run. A silent logout that destroys a half-completed application is a real cost to a real person.",
      how: [
        "Save work in progress so a timeout is an inconvenience rather than a loss.",
        "Warn well before the limit and make the extend control easy to reach by keyboard.",
        "Question every carousel and auto-advancing banner, which are time limits in disguise."
      ],
      example: "An online insurance application that logs out after 15 minutes of inactivity, clears every answered field and offers no warning. The person who needed 20 minutes to find a policy number starts again.",
      numbers: "At least 20 seconds of warning, adjustment or extension up to ten times, and an exemption above 20 hours (2.2.1). 2.2.6 uses the same 20 hour figure for preserved data.",
      pitfall: "Building the warning as a modal that appears without moving focus. The keyboard or screen reader user never learns it is there, and the session ends behind their back.",
      source: "W3C, WCAG 2.2 SC 2.2.1 (Level A) and 2.2.6 (Level AAA).",
      verify: { status: "verified", note: "The 20 second, ten times and 20 hour figures come from w3.org/TR/WCAG22; the 2.2.6 wording and its AAA level are quoted from the WAI Understanding page for timeouts." },
      belongs: { verdict: "core", why: "Session limits and their warnings are interface decisions with published thresholds." },
      related: [709, 716, 9708]
    },
    {
      n: 715,
      title: "Consistent navigation and identification",
      aka: ["3.2.3", "3.2.4", "3.2.6 Consistent Help"],
      oneLine: "The same things appear in the same places and go by the same names on every page.",
      demo: {
        caption: "Three pages of one site. On the left the same control moves slot and changes name; on the right it never does.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Reordered and renamed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-nav\"><b>Home</b><span>Prices</span><span>Search</span><span>Account</span></div></div><div class=\"db-card\"><div class=\"db-nav\"><span>Find</span><b>Prices</b><span>Account</span><span>Home</span></div></div><div class=\"db-card\"><div class=\"db-nav\"><span>Home</span><span>Lookup</span><b>Account</b><span>Prices</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Same order, same words</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-nav\"><b>Home</b><span>Prices</span><span>Search</span><span>Account</span></div></div><div class=\"db-card\"><div class=\"db-nav\"><span>Home</span><b>Prices</b><span>Search</span><span>Account</span></div></div><div class=\"db-card\"><div class=\"db-nav\"><span>Home</span><span>Prices</span><span>Search</span><b>Account</b></div></div></div></div></div></div>"
      },
      what: "Three criteria. Consistent Navigation (Level AA) requires navigation repeated across pages to keep the same relative order, though the user is free to reorder it themselves. Consistent Identification (Level AA) requires components with the same function to be identified consistently, so one icon and one label per action. Consistent Help (Level A, new in WCAG 2.2) requires that help mechanisms repeated across pages appear in the same relative order.",
      why: "Consistency is a memory subsidy. It matters most for people with cognitive disabilities and for screen magnifier users, who see a small window and rely on things being where they were last time.",
      how: [
        "Fix the order of the main navigation and keep it identical across templates.",
        "Use one icon and one word per action across the whole product: Delete everywhere, not Delete, Remove and Bin.",
        "Keep contact details, chat and help links in the same slot on every page.",
        "Audit for drift after any redesign of a single template, which is where inconsistency creeps in."
      ],
      example: "A site where the search field sits in the header on marketing pages and in the left sidebar inside the account area, with a magnifier icon in one and the word Find in the other.",
      numbers: "",
      pitfall: "Section-specific navigation designed by different teams. Each is coherent on its own and the set is not, which only shows up when someone walks a full journey.",
      source: "W3C, WCAG 2.2 SC 3.2.3 (Level AA), 3.2.4 (Level AA) and 3.2.6 (Level A, new in 2.2).",
      verify: { status: "verified", note: "Levels checked against w3.org/TR/WCAG22, and 3.2.6 confirmed as new in WCAG 2.2 on the WAI What's New page. Requirements paraphrased." },
      belongs: { verdict: "core", why: "It is a design system rule with a conformance requirement attached." },
      related: [716, 703, 705]
    },
    {
      n: 716,
      title: "Cognitive accessibility",
      aka: ["COGA", "Making Content Usable"],
      oneLine: "Design so people do not have to remember, decode or concentrate harder than the task needs.",
      demo: {
        caption: "The same two steps. On the right the reference is still on screen at the moment the field asks for it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Step two is a memory test</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">step 1</span><div class=\"db-card\"><span class=\"db-type\" style=\"font-size:13px\">Your reference is HX-4471</span></div><span class=\"db-note\">step 2</span><div class=\"db-card\"><span class=\"db-label\">Enter your reference</span><span class=\"db-input\">&nbsp;</span><span class=\"db-note\">no way back to step 1</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Step two shows it</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">step 1</span><div class=\"db-card\"><span class=\"db-type\" style=\"font-size:13px\">Your reference is HX-4471</span></div><span class=\"db-note\">step 2</span><div class=\"db-card\"><span class=\"db-type\" style=\"font-size:13px\">Your reference is HX-4471</span><span class=\"db-label\" style=\"margin-top:8px\">Enter your reference</span><span class=\"db-input\">&nbsp;</span></div></div></div></div></div>"
      },
      what: "The W3C's Cognitive and Learning Disabilities Accessibility Task Force published Making Content Usable for People with Cognitive and Learning Disabilities as a Working Group Note on 29 April 2021. It sets eight objectives: help users understand what things are and how to use them; help users find what they need; use clear and understandable content; help users avoid mistakes and know how to correct them; help users focus; ensure processes do not rely on memory; provide help and support; support adaptation and personalisation.",
      why: "This is the largest group of disabled users and the least served by conformance testing, because most of the guidance is a Note rather than a testable criterion. The objectives read as good interaction design generally, which is the point: they are the reason plain wording and short paths matter beyond taste.",
      how: [
        "Do not make the user hold a reference number in their head between two screens; show it.",
        "Use familiar words and familiar icons rather than invented ones.",
        "Keep help in reach at the point of difficulty instead of on a separate support page.",
        "Reduce the number of decisions on a screen before you reduce the number of words."
      ],
      example: "A form that shows a code on one page and asks for it on the next with no way back is a memory test; printing the code on the second page removes it.",
      numbers: "Eight objectives in the 2021 W3C Working Group Note.",
      pitfall: "Treating this as a synonym for plain English. Reading level is one objective out of eight, and memory, findability and help are the ones that fail real journeys.",
      source: "W3C COGA Task Force, Making Content Usable for People with Cognitive and Learning Disabilities, W3C Working Group Note, 29 April 2021.",
      verify: { status: "verified", note: "Title, status, date, producing group and all eight objectives read from w3.org/TR/coga-usable. Note that it is a Working Group Note, so it carries no conformance requirement, which is worth saying to any client who assumes AA covers it." },
      belongs: { verdict: "core", why: "It names the design decisions that decide whether a journey is completable, and it is published guidance rather than folklore." },
      related: [715, 714, 717]
    },
    {
      n: 717,
      title: "Situational, temporary and permanent impairment",
      aka: ["The persona spectrum", "Mismatch"],
      oneLine: "Any ability can be missing permanently, missing for a while, or missing right now because of circumstances.",
      demo: {
        caption: "One message and three unrelated people. Permanent, temporary and situational all arrive at the same unreadable result.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div><span class=\"db-tag\">As drawn, on the studio monitor</span><div class=\"db-chip-text\" style=\"background:#ffffff;color:#1a1a1a\">Confirmed for 10:15</div></div><div class=\"db-row db-row--tight db-row--top\"><div class=\"db-fill\" style=\"flex:1 1 30%\"><span class=\"db-tag\">Permanent: low vision</span><div class=\"db-chip-text\" style=\"background:#ffffff;color:#c4c4c4\">Confirmed for 10:15</div></div><div class=\"db-fill\" style=\"flex:1 1 30%\"><span class=\"db-tag\">Temporary: eyes dilated</span><div class=\"db-chip-text\" style=\"background:#ffffff;color:#c4c4c4\">Confirmed for 10:15</div></div><div class=\"db-fill\" style=\"flex:1 1 30%\"><span class=\"db-tag\">Situational: bright sun</span><div class=\"db-chip-text\" style=\"background:#ffffff;color:#c4c4c4\">Confirmed for 10:15</div></div></div></div></div>"
      },
      what: "Microsoft's inclusive design work frames disability as a mismatch between a person and their surroundings rather than a fixed medical fact. Its example: a device designed for a person who has one arm can be used just as effectively by a person with a temporary wrist injury or a new parent holding an infant. The same three-way split applies to sight, hearing and speech, so a bright screen outdoors, an ear infection and a noisy bar all sit on the same spectrum as permanent conditions.",
      why: "It makes the audience for accessibility work obviously large, which changes the budget conversation. It also gives you concrete scenarios to design against, which is more useful than an abstract compliance target.",
      how: [
        "For each ability your interface depends on, write down the permanent, temporary and situational version of losing it.",
        "Test in the situational cases you can create: full sunlight, one hand, sound off, poor connection.",
        "Use the mismatch framing in client conversations rather than the language of a minority group.",
        "Keep it alongside the standard, not instead of it, because scenarios do not give you thresholds."
      ],
      example: "Captions serve deaf viewers, a viewer with a temporary ear infection, and the far larger group watching with the sound off in an office or on a train.",
      numbers: "Microsoft's own sizing of the touch example: in the United States 26,000 people a year suffer loss of upper extremities, and counting temporary and situational impairments the number is greater than 20 million. Microsoft attributes those to the US Census Bureau, the Limbs for Life Foundation, the Amputee Coalition, the CDC and the Disability Statistics Center at UCSF rather than to one study, so quote them as its estimate.",
      pitfall: "Leaning so hard on the situational cases that the permanent ones get dropped. Sound-off viewers are a business case; deaf viewers are the requirement.",
      source: "Microsoft Design, Inclusive 101 Guidebook (2016) and the Inclusive Design toolkit (inclusive.microsoft.design).",
      verify: { status: "adjusted", note: "Read the Inclusive 101 Guidebook itself, not a secondary summary. The one arm, wrist injury and new parent sentence is quoted almost verbatim from page 38, which also names the diagram: 'We call this the Persona Spectrum.' The first draft said Microsoft's population figures disagree across sources and quoted none; the guidebook in fact prints 26,000 and more than 20 million in the same chapter with a source list under them, so the figures are restored with that attribution. Guidebook is dated 2016 and licensed CC BY-NC-ND." },
      belongs: { verdict: "core", why: "It is a design method from a design team, and it changes what gets specified rather than only how it is argued for." },
      related: [718, 719, 716]
    },
    {
      n: 718,
      title: "The persona spectrum",
      aka: ["Solve for one, extend to many"],
      oneLine: "Microsoft's name for the permanent, temporary and situational diagram, used to size a design's reach.",
      demo: {
        none: "This is entry 717 under a brand name, so any picture here would be the one already built there; the spectrum itself is a workshop exercise rather than a shape."
      },
      what: "Microsoft writes that the persona spectrum is used to understand related mismatches and motivations across a spectrum of permanent, temporary and situational scenarios. It is the same idea as the previous entry with a name attached: take one motivation, such as operating a device one-handed, and trace it across the three groups. It sits under the principle Microsoft states as solve for one, extend to many.",
      why: "The named version is useful in a workshop because it gives people a repeatable exercise rather than a slogan. Beyond that it adds no new instruction.",
      how: [
        "Pick one ability the interface depends on and write the three scenarios out as a row.",
        "Use the row to choose which situations you will actually test.",
        "State the extension explicitly: who else gets the benefit, and what it costs to serve them."
      ],
      example: "One-handed operation: a person with one arm, a person with a broken wrist, a parent carrying a baby. The design response, reachable controls on one side, is the same for all three.",
      numbers: "",
      pitfall: "Running the exercise and stopping there. The spectrum tells you who to think about and nothing about contrast, focus or markup.",
      source: "Microsoft Design, Inclusive 101 Guidebook (2016), the Solve for one, extend to many chapter.",
      verify: { status: "verified", note: "Quoted from the guidebook: 'We use the Persona Spectrum to understand related mismatches and motivations across a spectrum of permanent, temporary, and situational scenarios.' The guidebook calls it a quick tool for building empathy and showing how a solution scales to a broader audience. It sits inside the chapter named after the third principle, Solve for one, extend to many, confirmed as one of the toolkit's three principles alongside Recognize exclusion and Learn from diversity." },
      belongs: { verdict: "cut", why: "It is entry 717 under a brand name, and listing both makes the section look longer than it is. Keep 717 with persona spectrum as an alternative name, and if a second entry is wanted here, use Microsoft's distinct principle solve for one, extend to many, which is an instruction rather than a restatement." },
      related: [717, 719]
    },
    {
      n: 719,
      title: "Curb-cut effect",
      aka: ["Kerb-cut effect"],
      oneLine: "Access features built for disabled people usually end up serving far more people than that.",
      demo: {
        none: "Drawing a dropped kerb would only restate the title, and the claim being made is about who later chooses to use it, which a picture can assert but not show."
      },
      what: "The term was popularised by Angela Glover Blackwell in Stanford Social Innovation Review in Winter 2017. Her argument is that changes made for a group at the margins tend to benefit everyone. The example that names it is the dropped kerb: pressed by disabled activists, Berkeley installed its first official curb cut at an intersection on Telegraph Avenue in 1972, eighteen years before the Americans with Disabilities Act. Blackwell is careful to say curb cuts were not new, the first having appeared in Kalamazoo, Michigan, in 1945. What changed was what happened next, as parents with prams, workers with carts, travellers with luggage and skateboarders all headed for them.",
      why: "For a designer it does two things. It is the argument that gets accessibility funded, because it reframes the work as improving the product rather than serving a minority. It also predicts which access features become mainstream defaults, which is a reasonable guide to where to invest.",
      how: [
        "When you propose an access fix, name the wider group it also serves, honestly.",
        "Look at existing mainstream conveniences and ask which started as access features.",
        "Do not use the effect to rank fixes; use it to explain them."
      ],
      example: "Blackwell reports a study of pedestrian behaviour at a Sarasota, Florida shopping mall in which nine out of ten unencumbered pedestrians went out of their way to use a curb cut rather than the kerb.",
      numbers: "Nine out of ten unencumbered pedestrians (Sarasota shopping mall). Blackwell's endnote traces the figure to a newspaper report, Frank Greve, Curb ramps liberate Americans with disabilities—and everyone else, McClatchy Newspapers, 31 January 2007, so it is journalism rather than a peer-reviewed study and no sample size is given.",
      pitfall: "The mainstream-benefit argument quietly becomes a filter, so anything without an obvious benefit to non-disabled users gets dropped. Screen reader support rarely wins on that test and is still required.",
      source: "Angela Glover Blackwell, The Curb-Cut Effect, Stanford Social Innovation Review, Winter 2017 (Vol. 15, No. 1).",
      verify: { status: "adjusted", note: "Author, publication, issue and the Telegraph Avenue history read from the article on ssir.org. Two corrections. The first draft said campaigners installed unofficial ramps in the early 1970s; the article does not say that, it says the city installed the curb cut under pressure from activists, and it adds that the first curb cuts appeared in Kalamazoo in 1945, so Berkeley was the turning point rather than the origin. The first draft also said Blackwell gives the Sarasota figure without a reference; she gives endnote 8, which is a 2007 McClatchy newspaper piece by Frank Greve. That is a real source but not a study, and the entry now says so." },
      belongs: { verdict: "adjacent", why: "It comes from social policy, not design. Its specific design use is as the funding argument for access work and as a rough predictor of which access features become mainstream defaults." },
      related: [717, 718, 716]
    },
    {
      n: 720,
      title: "Testing with assistive technology",
      aka: ["Screen reader testing"],
      oneLine: "Automated checks find a slice of the problems; the rest need a keyboard, a screen reader and real users.",
      demo: {
        caption: "The same card twice. The checker reports one fault; driving the card by keyboard turns up three it cannot see.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">What the automated checker reports</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:13px\">Book an appointment</span><span class=\"db-btn db-btn--sm\"><span class=\"db-sq db-sq--sm\" style=\"--mark:var(--paper)\"></span></span></div><span class=\"db-note\" style=\"color:var(--ink-4)\">Held for 10 minutes</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Learn more</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Learn more</span></div><span class=\"db-note db-note--accent\">1 error: contrast on the held-for line</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">What a keyboard and screen reader pass finds</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:13px\">Book an appointment</span><span class=\"db-btn db-btn--sm\"><span class=\"db-sq db-sq--sm\" style=\"--mark:var(--paper)\"></span></span></div><span class=\"db-note\" style=\"color:var(--ink-4)\">Held for 10 minutes</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Learn more</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Learn more</span></div><span class=\"db-note db-note--accent\">the icon button is announced with no name</span><span class=\"db-note db-note--accent\">two links, both called Learn more</span><span class=\"db-note db-note--accent\">Tab reaches the second link before the first</span></div></div></div></div>"
      },
      what: "There are three layers. Automated tools catch machine-detectable failures such as contrast, missing alt and unlabelled inputs. Manual testing by keyboard and screen reader catches order, naming, state and announcement problems that no tool can judge. Task-based testing with people who use assistive technology daily catches the things that are technically conformant and still unusable. The pairing matters: JAWS and NVDA dominate on Windows, VoiceOver on Apple platforms.",
      why: "Conformance is not the same as usability. A page can pass every automated rule and still be a maze, and the only way to find that out is to drive it the way the user does.",
      how: [
        "Do a keyboard-only pass on every new flow before it ships; it costs minutes and catches most focus problems.",
        "Learn one screen reader properly rather than dabbling in three.",
        "Test on the combinations your audience actually uses rather than the one on your machine.",
        "Pay disabled testers for task-based sessions on anything that handles money, health or applications."
      ],
      example: "WebAIM's tenth screen reader survey (1,539 responses, December 2023 to January 2024) reports JAWS as primary for 40.5 per cent of respondents, NVDA for 37.7 per cent and VoiceOver for 9.7 per cent, with JAWS plus Chrome the commonest pairing at 24.7 per cent.",
      numbers: "WebAIM's February 2026 scan of a million home pages detected WCAG 2 failures on 95.9 per cent of them, averaging 56.1 errors per page.",
      pitfall: "A designer's first hour with VoiceOver produces panic and bad fixes, because the tool is unfamiliar and everything sounds broken. Learn it properly or sit with someone who uses it every day.",
      source: "WebAIM, Screen Reader User Survey #10 (2024) and The WebAIM Million (February 2026).",
      verify: { status: "verified", note: "Screen reader shares, browser pairings and the survey base read from webaim.org/projects/screenreadersurvey10; failure rate, average error count and the six-error-type share read from webaim.org/projects/million, February 2026 report." },
      belongs: { verdict: "core", why: "It is the verification step that turns every other entry in this section from an intention into a fact." },
      related: [688, 698, 695]
    }
  ]
};
