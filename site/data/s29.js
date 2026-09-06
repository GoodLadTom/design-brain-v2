window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[29] = {
  n: 29,
  slug: "numbers",
  title: "Numbers worth memorising",
  blurb: "The hard figures a designer should carry in their head, with the sources and the myths attached.",
  intro: "Most of design will not reduce to a number. A handful of things will, and those are worth knowing by heart, because they settle arguments and save you looking them up mid-build. They come from three different places: published standards such as WCAG and ISO, research out of human-computer interaction, and craft convention that has hardened into habit. Those three do not carry equal weight, and this section says which is which each time. Two of the figures below are folklore that has been repeated until it sounds like a standard, and one of them should not be on the list at all.",
  sources: [
    "W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation (2023), success criteria 1.4.3, 1.4.4, 1.4.6, 1.4.8, 1.4.11, 1.4.12, 2.5.5, 2.5.8",
    "Robert Bringhurst, The Elements of Typographic Style, section 2.1.2, as reproduced in Richard Rutter, The Elements of Typographic Style Applied to the Web",
    "Jakob Nielsen, Response Times: The 3 Important Limits, Nielsen Norman Group (1993), after Miller (1968) and Card et al. (1991)",
    "Page Laubheimer, Executing UX Animations: Duration and Motion Characteristics, Nielsen Norman Group (9 February 2020)",
    "Google, Core Web Vitals, web.dev",
    "Google, Material Design, Spacing methods (m2.material.io), including its touch-target section",
    "The 8-Point Grid, spec.fm/specifics/8-pt-grid (undated page, attributed to Bryn Jackson)",
    "Tim Brown, More Meaningful Typography, A List Apart (3 May 2011)",
    "Apple, Human Interface Guidelines, Accessibility (control size table)",
    "George A. Miller, The Magical Number Seven, Plus or Minus Two, Psychological Review 63(2), 1956, 81-97",
    "Nelson Cowan, The Magical Number 4 in Short-Term Memory, Behavioral and Brain Sciences 24(1), 2001, 87-114",
    "Jean-luc Doumont, Magical numbers: the seven-plus-or-minus-two myth, IEEE Transactions on Professional Communication 45(2), 2002, 123-127",
    "ISO 216 (paper sizes), after Lichtenberg (1786), Porstmann and DIN 476 (1921)",
    "George Markowsky, Misconceptions about the Golden Ratio, The College Mathematics Journal 23(1), 1992, 2-19",
    "Mario Livio, The Golden Ratio: The Story of Phi (2002)",
    "Marc Brysbaert, How many words do we read per minute? A review and meta-analysis of reading rate, Journal of Memory and Language 109 (2019), article 104047",
    "MDN Web Docs, CSS font-size and CSS line-height"
  ],
  entries: [
    {
      n: 1011,
      title: "45-75 characters per line (66 ideal)",
      aka: ["The measure", "Line length", "Characters per line (CPL)"],
      oneLine: "Set text lines to roughly 45 to 75 characters including spaces, with 66 as the traditional target.",
      demo: {
        caption: "Both columns are exactly the same pixel width. Count the characters on the first line of each.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Serif text face</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px\">A line that runs past seventy-five characters makes the return sweep hard to aim, so the eye lands on a line it has already read.</div></div></div><div class=\"db-half\"><span class=\"db-tag\">Mono, identical width</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type db-type--mono\" style=\"font-size:12px\">A line that runs past seventy-five characters makes the return sweep hard to aim, so the eye lands on a line it has already read.</div></div></div></div>"
      },
      what: "Bringhurst puts it plainly in section 2.1.2 of The Elements of Typographic Style: \"Anything from 45 to 75 characters is widely regarded as a satisfactory length of line for a single-column page set in a serifed text face in a text size. The 66-character line (counting both letters and spaces) is widely regarded as ideal.\" Note the phrase he uses twice; he is reporting settled printing practice, and there is no experiment behind it. The one standards figure sits at the top end. WCAG 2.2 success criterion 1.4.8 Visual Presentation, at level AAA, asks for a mechanism that gives blocks of text a width no greater than 80 characters, or 40 for Chinese, Japanese and Korean.",
      why: "The eye has to find the start of the next line every time it returns. Long lines make people re-read the line they just finished or skip one entirely. Very short lines break the sentence into fragments and force ragged word spacing or heavy hyphenation.",
      how: [
        "Set a max-width in ch units, which is a rough character width for the current font, rather than guessing in pixels.",
        "Recheck the measure at every breakpoint, not just the desktop one, because the count changes with font size and family.",
        "Allow 40 to 50 characters in narrow columns such as captions or sidebars, and lift the leading to compensate.",
        "Paste a real paragraph in the real typeface before signing off the column width."
      ],
      example: "A full-width paragraph on a 27-inch monitor with no max-width runs past 150 characters per line and is close to unreadable.",
      numbers: "45 to 75 characters is the accepted band and 66 the traditional target (Bringhurst 2.1.2). WCAG 2.2 SC 1.4.8, level AAA, requires a mechanism for text blocks no wider than 80 characters, or 40 for CJK.",
      pitfall: "Setting the measure in pixels once and forgetting that a different typeface, a larger user font size or a language with longer words changes the character count underneath you.",
      source: "Robert Bringhurst, The Elements of Typographic Style, section 2.1.2; W3C WCAG 2.2 SC 1.4.8",
      verify: { status: "verified", note: "Bringhurst's wording checked against section 2.1.2 as reproduced in Richard Rutter's The Elements of Typographic Style Applied to the Web (webtypography.net/2.1.2). The 80-character AAA ceiling checked against the WCAG 2.2 Recommendation at w3.org/TR/WCAG22. Bringhurst cites no experiment, so the 45-75 band is craft consensus rather than a finding." },
      belongs: { verdict: "core", why: "Line length is one of the few typographic settings that changes whether a paragraph can be read at all, and the number is the first thing to get wrong on a wide screen." },
      related: [1012, 1013, 371, 373]
    },
    {
      n: 1012,
      title: "Body line-height 1.4-1.6",
      aka: ["Leading", "Line spacing"],
      oneLine: "Set body leading at about 1.5 times the font size; 1.4 to 1.6 is the working band around it.",
      demo: {
        caption: "Same words, same width. Only the leading changed; the left block fuses into a slab the eye cannot track.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">1.2, the browser default</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px;line-height:1.2\">Leading is the distance from one baseline to the next. Set it too tight and the lines fuse, so the eye loses the track it needs to find the start of the next line.</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">1.5, the WCAG figure</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px;line-height:1.5\">Leading is the distance from one baseline to the next. Set it too tight and the lines fuse, so the eye loses the track it needs to find the start of the next line.</div></div></div></div>"
      },
      what: "Line-height is the distance from one baseline to the next, expressed as a multiple of the font size. The figure with a standard behind it is 1.5. WCAG 2.2 success criterion 1.4.12 Text Spacing, level AA, requires that no content or function is lost when a user sets line height to at least 1.5 times the font size. SC 1.4.8, level AAA, asks for line spacing of at least space-and-a-half within paragraphs. MDN gives the same advice in plainer terms on its line-height page: use a minimum of 1.5 for main paragraph content. The 1.4 to 1.6 band is convention that has grown up around that number; I could not trace the band to a named source. The CSS keyword normal is left to the browser, and MDN puts the desktop default at roughly 1.2, varying with the font family.",
      why: "Too tight and the lines visually merge, so the eye loses its return path. Too loose and the paragraph stops reading as a single block and becomes a stack of separate lines. Leading also has to answer to the measure and the x-height: longer lines and larger x-heights want more space.",
      how: [
        "Write line-height unitless, as 1.5 rather than 24px, so it scales with any inherited font size.",
        "Tighten as type gets bigger: display headings usually want 1.05 to 1.2.",
        "Loosen small print and long measures, and tighten short measures.",
        "Run the SC 1.4.12 test on your own layout: force line height to 1.5 plus the letter and word spacing values and check nothing clips or overlaps."
      ],
      example: "Set a 16px paragraph at line-height 1.2 and again at 1.5 side by side on a 700px column. The 1.2 version starts to look like a grey slab and readers skip lines in it.",
      numbers: "WCAG 2.2 SC 1.4.12 (AA): no loss of content or functionality with line height at least 1.5 times font size, letter spacing 0.12 times, word spacing 0.16 times, and space after paragraphs 2 times. SC 1.4.8 (AAA): line spacing at least space-and-a-half within paragraphs. CSS line-height normal resolves to roughly 1.2 on desktop browsers (MDN).",
      pitfall: "Fixing line-height in pixels, so it stops tracking font size and collapses when a user or a breakpoint changes the type size.",
      source: "W3C WCAG 2.2 SC 1.4.12 and SC 1.4.8; MDN Web Docs, CSS line-height; the 1.4-1.6 band itself has no traceable origin",
      verify: { status: "adjusted", note: "The master list gives a band. The published number is 1.5, from WCAG 2.2 SC 1.4.12 and SC 1.4.8, both read at w3.org/TR/WCAG22 this session. MDN's line-height page, also read this session, recommends a minimum of 1.5 for main paragraph content and states that normal resolves to roughly 1.2 on desktop browsers depending on the font family. I searched for a source for the 1.4-1.6 range and found none, so I have reframed the entry as a convention sitting around a standard rather than a standard in itself." },
      belongs: { verdict: "core", why: "Leading is a setting every designer makes on every text block, and one of the few with an accessibility standard attached to it." },
      related: [1011, 1013, 373, 385]
    },
    {
      n: 1013,
      title: "16px minimum body text on the web",
      aka: ["Default browser font size", "Body copy floor"],
      oneLine: "No standard demands 16px, but it is the usual browser default and a sensible floor for body copy.",
      demo: {
        caption: "One sentence at four sizes. Sixteen is where the browser starts, so the two below it are sizes you imposed.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">12 px</span><div class=\"db-type db-measure-good\" style=\"font-size:12px\">Body copy set below the browser default is a readability cost you have chosen to impose on the reader.</div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">14 px</span><div class=\"db-type db-measure-good\" style=\"font-size:14px\">Body copy set below the browser default is a readability cost you have chosen to impose on the reader.</div></div><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">16 px, the browser default</span><div class=\"db-type db-measure-good\" style=\"font-size:16px\">Body copy set below the browser default is a readability cost you have chosen to impose on the reader.</div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">18 px</span><div class=\"db-type db-measure-good\" style=\"font-size:18px\">Body copy set below the browser default is a readability cost you have chosen to impose on the reader.</div></div></div></div>"
      },
      what: "In CSS the initial value of font-size is the keyword medium, which resolves to whatever the user's default size is, and browsers ship that default at 16px unless the user changes it. MDN warns against setting font sizes in px at all, because some browsers then stop the user resizing text. WCAG sets no minimum size anywhere; SC 1.4.4 Resize Text asks instead that text can be scaled to 200 per cent without loss of content or function. One hard behaviour is genuinely tied to the number: iOS Safari zooms the page when a form field with a font-size below 16px receives focus.",
      why: "Body copy set below the browser default is a readability cost you have chosen to impose, and older eyes, cheap screens and bright daylight pay it first. Keeping to the default also means you are honouring whatever size the reader already set for themselves.",
      how: [
        "Set body copy in rem, or leave it at the inherited default, so a user who raises their browser size gets a bigger page.",
        "Never take form inputs below 16px on the mobile web, or iOS will zoom and shift the layout under the user's thumb.",
        "Judge size by x-height rather than the nominal number: two faces at 16px can read a size apart.",
        "Check the page at 200 per cent browser zoom and at the largest OS text setting."
      ],
      example: "A signup form with 14px inputs on an iPhone: tapping the email field zooms the viewport, the submit button slides off screen, and the user has to pinch back out to find it.",
      numbers: "Browsers resolve the CSS keyword medium to 16px by default. iOS Safari zooms on focus when an input's font-size is under 16px. WCAG 2.2 SC 1.4.4 requires resize to 200 per cent and sets no minimum size.",
      pitfall: "Treating 16px as a ceiling as well as a floor, so long-form article pages get the same size as a dense admin table when they should be larger.",
      source: "No standard sets it. MDN Web Docs, CSS font-size; W3C WCAG 2.2 SC 1.4.4; documented iOS Safari input-zoom behaviour",
      verify: { status: "adjusted", note: "The master list calls 16px a minimum. I could find no standard that requires it. Checked MDN's CSS font-size page (initial value medium, explicit warning against px for font sizes) and the WCAG 2.2 Understanding page for SC 1.4.4, which addresses resizing and specifies no minimum. MDN does not commit to a pixel value for medium, so the 16px default is stated as browser behaviour. The iOS zoom threshold is documented in the CSS-Tricks post 16px or Larger Text Prevents iOS Form Zoom, read this session, and reproduced in bug reports and Stack Overflow questions." },
      belongs: { verdict: "core", why: "Body size is the base every other type decision is measured from, and the 16px figure is the one most likely to be argued about with a client who wants a smaller, tidier-looking page." },
      related: [1011, 1012, 371, 1016]
    },
    {
      n: 1014,
      title: "4.5:1 contrast for body text",
      aka: ["WCAG AA text contrast", "Contrast (Minimum)"],
      oneLine: "Level AA needs 4.5:1 between text and its background; level AAA needs 7:1.",
      demo: {
        caption: "The label clears 4.5:1 in both. Only on the right do the placeholder and the helper text clear it too.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Placeholder 2.1:1, helper 2.6:1</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\" style=\"background:#ffffff\"><div class=\"db-col db-col--tight\"><span class=\"db-label\" style=\"color:#767676\">Email address</span><span class=\"db-input\" style=\"background:#ffffff;border-color:#767676;color:#b4b4b4\">name@example.com</span><span style=\"color:#a0a0a0\">We will never pass this on</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">All three at 4.5:1</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\" style=\"background:#ffffff\"><div class=\"db-col db-col--tight\"><span class=\"db-label\" style=\"color:#767676\">Email address</span><span class=\"db-input\" style=\"background:#ffffff;border-color:#767676;color:#767676\">name@example.com</span><span style=\"color:#767676\">We will never pass this on</span></div></div></div></div></div>"
      },
      what: "WCAG 2.2 success criterion 1.4.3 Contrast (Minimum), level AA, requires text and images of text to reach a contrast ratio of at least 4.5:1. SC 1.4.6 Contrast (Enhanced), level AAA, raises that to 7:1. Both drop the requirement for large-scale text, which WCAG defines as at least 18 point, or 14 point bold, or the equivalent for Chinese, Japanese and Korean faces. Both also exempt incidental text, such as inactive controls and decoration, and logotypes. Contrast ratios run from 1:1 for identical colours to 21:1 for pure black on pure white.",
      why: "The ratio is a stand-in for how much luminance separation a reader with reduced contrast sensitivity needs, and that includes anyone in sunlight or on a washed-out laptop screen. Meeting it buys you a page that survives conditions you will never test in.",
      how: [
        "Check every text and background pair, including hover, visited, placeholder, helper text and text sitting over photographs.",
        "Pick the palette against the ratio from the start rather than tinting a brand colour darker at the end of the project.",
        "Remember the point-to-pixel conversion: 18 point is 24px and 14 point bold is about 18.7px at the standard CSS mapping.",
        "Where text sits on imagery, add a scrim or a solid panel and test the worst frame of the image, not the best."
      ],
      example: "Mid-grey #767676 on white passes 4.5:1 by a small margin; the popular #999999 on white does not, and it appears in a great many templates as body copy.",
      numbers: "WCAG 2.2 SC 1.4.3 (AA): 4.5:1 for text, 3:1 for large-scale text. SC 1.4.6 (AAA): 7:1 and 4.5:1. Large scale is at least 18 point, or 14 point bold.",
      pitfall: "Testing only the default state. Placeholder text, disabled labels and the second line of a two-line button are where contrast quietly fails.",
      source: "W3C WCAG 2.2 SC 1.4.3 and SC 1.4.6 (W3C Recommendation, 2023)",
      verify: { status: "verified", note: "Normative text for SC 1.4.3 and SC 1.4.6, the level assignments and the large-scale definition all read from the WCAG 2.2 Recommendation at w3.org/TR/WCAG22 this session. The point-to-pixel figures are arithmetic from the CSS unit definition of 1pt as 4/3 of a px." },
      belongs: { verdict: "core", why: "It is a published, testable requirement that governs the colour of nearly every word a designer sets, and it is enforceable in procurement and law in several countries." },
      related: [1015, 316, 317, 690]
    },
    {
      n: 1015,
      title: "3:1 contrast for large text and UI components",
      aka: ["Non-text contrast", "WCAG SC 1.4.11"],
      oneLine: "Large text, control boundaries and meaningful graphics need at least 3:1 against whatever sits next to them.",
      demo: {
        caption: "Both fields carry the same label. Only the right-hand boundary reaches 3:1, so only that one announces a control.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Boundary 1.3:1</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\" style=\"background:#ffffff\"><div class=\"db-col db-col--tight\"><span class=\"db-label\" style=\"color:#595959\">Search</span><span class=\"db-input\" style=\"background:#f2f2f2;border-color:#e0e0e0;color:#595959\">Postcode or town</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Boundary 3:1</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\" style=\"background:#ffffff\"><div class=\"db-col db-col--tight\"><span class=\"db-label\" style=\"color:#595959\">Search</span><span class=\"db-input\" style=\"background:#ffffff;border-color:#949494;color:#595959\">Postcode or town</span></div></div></div></div></div>"
      },
      what: "Two separate rules land on the same figure. First, SC 1.4.3 lets large-scale text (18 point, or 14 point bold) sit at 3:1 rather than 4.5:1, because size compensates for weaker separation. Second, SC 1.4.11 Non-text Contrast, level AA, added in WCAG 2.1, requires 3:1 against adjacent colours for user interface components and for graphical objects. That covers the parts you need to see in order to know a control exists and what state it is in: the border of a text field, the focus ring, the tick in a checkbox, the thumb on a slider, and the bars in a chart when the bar is the only carrier of the value.",
      why: "People fail forms because they cannot find the field, not because they cannot read the label above it. A control that is invisible is worse than one that is ugly.",
      how: [
        "Give text inputs a visible boundary at 3:1 against the page, rather than a hairline of pale grey.",
        "Test the focus indicator against both the component it sits on and the background behind it.",
        "Check icon-only buttons, toggle states and chart series against 3:1, and add a second cue such as a label or pattern.",
        "Treat 3:1 as the floor for controls and 4.5:1 as the floor for anything you expect people to read."
      ],
      example: "A search field styled as a light grey box on a white card, with no border. The label passes at 4.5:1, the field itself is nearer 1.2:1, and on a laptop screen at an angle it disappears.",
      numbers: "3:1 for large-scale text (SC 1.4.3, AA) and 3:1 for user interface components and graphical objects (SC 1.4.11, AA). Large scale is at least 18 point, or 14 point bold.",
      pitfall: "Teams audit text, pass, and never test the interface furniture. Borders, dividers that carry meaning, and focus rings are the usual failures.",
      source: "W3C WCAG 2.2 SC 1.4.3 and SC 1.4.11 (SC 1.4.11 introduced in WCAG 2.1, 2018)",
      verify: { status: "verified", note: "Normative wording for SC 1.4.11 (\"a contrast ratio of at least 3:1 against adjacent color(s)\" for User Interface Components and Graphical Objects) and the 3:1 large-text allowance in SC 1.4.3 both read from the WCAG 2.2 Recommendation at w3.org/TR/WCAG22 this session." },
      belongs: { verdict: "core", why: "It is the accessibility number that governs interface parts rather than words, which is most of what an interface designer actually draws." },
      related: [1014, 691, 318, 694]
    },
    {
      n: 1016,
      title: "24x24 minimum target, 44x44 comfortable",
      aka: ["Target size", "Touch target", "Hit area"],
      oneLine: "Pointer targets should be at least 24 by 24 CSS pixels, and 44 by 44 where a finger is involved.",
      demo: {
        caption: "Three hit areas at true size with the same icon inside. Twenty-four is the floor; forty-four is what a thumb wants.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--loose db-row--bottom\"><div class=\"db-col db-col--tight\"><div class=\"db-block db-block--outline db-row db-row--centre\" style=\"width:16px;height:16px;min-height:16px\"><span class=\"db-dot db-dot--sm\"></span></div><span class=\"db-note\">16 px</span><span class=\"db-note\">fails SC 2.5.8</span></div><div class=\"db-col db-col--tight\"><div class=\"db-block db-block--outline db-row db-row--centre\" style=\"width:24px;height:24px;min-height:24px\"><span class=\"db-dot db-dot--sm\"></span></div><span class=\"db-note\">24 px</span><span class=\"db-note\">SC 2.5.8 floor</span></div><div class=\"db-col db-col--tight\"><div class=\"db-block db-block--outline db-row db-row--centre\" style=\"width:44px;height:44px;min-height:44px\"><span class=\"db-dot db-dot--sm\"></span></div><span class=\"db-note\">44 px</span><span class=\"db-note\">SC 2.5.5, Apple</span></div></div></div>"
      },
      what: "WCAG 2.2 added SC 2.5.8 Target Size (Minimum) at level AA: targets for pointer input are at least 24 by 24 CSS pixels. It carries five named exceptions, Spacing, Equivalent, Inline, User agent control and Essential. The spacing exception is the one worth learning: a smaller target passes if a 24-pixel-diameter circle centred on its bounding box does not intersect another target or another such circle. SC 2.5.5 Target Size (Enhanced) sets 44 by 44 CSS pixels at level AAA. Apple's Human Interface Guidelines list a default control size of 44 by 44 points on iOS and iPadOS, with 28 by 28 points as the minimum. Material Design asks for touch targets of at least 48 by 48 dp with at least 8dp of space between them.",
      why: "Fingertips are blunt and hands are not steady, and they are least steady on a moving bus or for anyone with a tremor. A generous hit area removes mis-taps, and mis-taps in a destructive row are expensive.",
      how: [
        "Use 24 as the absolute floor for a dense desktop toolbar and 44 as the default for anything touched.",
        "Pad rather than inflate: keep the icon at 20px and let the button's hit area run to 44px around it.",
        "Where small targets sit close together, space them so the 24-pixel circles clear each other.",
        "Make whole rows tappable in lists and tables rather than relying on a tiny chevron at the end."
      ],
      example: "A data table with a 16px delete icon at the end of each row. At 16px it is undersized, and because the rows are stacked the 24-pixel circles of neighbouring icons intersect, so the spacing exception cannot rescue it either. Wrapped in a 44px-tall button with the icon centred, it passes and stops people deleting the wrong record.",
      numbers: "WCAG 2.2 SC 2.5.8 (AA): 24 by 24 CSS pixels, with a spacing exception based on a 24-pixel-diameter circle. SC 2.5.5 (AAA): 44 by 44 CSS pixels. Apple HIG: default control size 44 by 44 points on iOS and iPadOS, minimum 28 by 28 points. Material Design: at least 48 by 48 dp with at least 8dp between targets.",
      pitfall: "Hitting 44px on each control and then setting them 2px apart, so the targets are large but the gaps between them are not, and a slightly off tap still lands on the neighbour.",
      source: "W3C WCAG 2.2 SC 2.5.8 and SC 2.5.5; Apple Human Interface Guidelines, Accessibility; Google Material Design, Spacing methods",
      verify: { status: "verified", note: "The 24 by 24 and 44 by 44 CSS pixel figures and the five exception names (Spacing, Equivalent, Inline, User agent control, Essential) read from the WCAG 2.2 Recommendation and the Understanding SC 2.5.8 page at w3.org this session, including the 24-pixel-diameter circle wording for the spacing exception. An earlier draft quoted an older Apple line about maintaining a minimum tappable area of 44x44 points for all controls. That wording is no longer on the HIG Layout page, which I read in full this session and which now gives no figure at all. The 44 comes instead from the HIG Accessibility page, also read this session, whose control-size table lists a default of 44x44 pt and a minimum of 28x28 pt for iOS and iPadOS under the heading \"Offer sufficiently sized controls\". The Material figure now comes from Google's own spacing methods page, which says touch targets \"should be at least 48 x 48 dp with at least 8dp of space between targets\"; an earlier draft of this entry rested that number on secondary sources." },
      belongs: { verdict: "core", why: "Target size is a measurable property of every interactive element a designer draws, and it now has a level AA requirement attached." },
      related: [700, 227, 588, 1017]
    },
    {
      n: 1017,
      title: "8-point spacing grid",
      aka: ["8pt grid", "8dp baseline grid", "Spacing scale"],
      oneLine: "Size and space everything in multiples of eight so spacing becomes a token rather than a taste question.",
      demo: {
        caption: "The spacing scale at true size, sharing a left edge. Every gap in the system comes from these seven values.",
        html: "<div class=\"db-stage\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--nowrap\"><div class=\"db-bar db-bar--ink\" style=\"width:4px\"></div><span class=\"db-note\">4 px</span></div><div class=\"db-row db-row--nowrap\"><div class=\"db-bar db-bar--ink\" style=\"width:8px\"></div><span class=\"db-note\">8 px</span></div><div class=\"db-row db-row--nowrap\"><div class=\"db-bar db-bar--ink\" style=\"width:16px\"></div><span class=\"db-note\">16 px</span></div><div class=\"db-row db-row--nowrap\"><div class=\"db-bar db-bar--ink\" style=\"width:24px\"></div><span class=\"db-note\">24 px</span></div><div class=\"db-row db-row--nowrap\"><div class=\"db-bar db-bar--ink\" style=\"width:32px\"></div><span class=\"db-note\">32 px</span></div><div class=\"db-row db-row--nowrap\"><div class=\"db-bar db-bar--ink\" style=\"width:48px\"></div><span class=\"db-note\">48 px</span></div><div class=\"db-row db-row--nowrap\"><div class=\"db-bar db-bar--ink\" style=\"width:64px\"></div><span class=\"db-note\">64 px</span></div></div></div>"
      },
      what: "Material Design states it directly: \"All components align to an 8dp square baseline grid for mobile, tablet, and desktop.\" Icons, type and some elements inside components are allowed onto a 4dp grid, and type aligns to a 4dp baseline grid. The guide at spec.fm called The 8-Point Grid, widely attributed to Bryn Jackson, set out the two working methods for designers: a hard grid, where elements snap to a displayed 8-point grid, and a soft grid, where you simply measure 8-point increments between elements. Its stated reasons for eight are that most popular screen sizes are divisible by 8 on at least one axis, usually both, and that some platform style guides, Material Design among them, already call for a grid of 4 or 8 points.",
      why: "A fixed spacing scale removes a whole category of decisions and arguments. Padding stops being negotiated per component and becomes a value picked from a short list, which is also what makes a design system implementable by people who did not draw it.",
      how: [
        "Define the scale as tokens (4, 8, 16, 24, 32, 48, 64) and treat any other value in code review as a bug.",
        "Keep 4 as the half-step for icon alignment, type offsets and tight in-component spacing.",
        "Let line-height sit on a 4-unit baseline rather than forcing text blocks onto 8.",
        "Apply the grid to sizes as well as gaps: button heights, icon boxes and card widths."
      ],
      example: "Material Design's own spacing methods page, whose captions read \"The app bar and floating action button align to the 8dp grid\" and \"Elements of the bottom navigation bar align to the 4dp grid\".",
      numbers: "Material Design: 8dp square baseline grid for all components across mobile, tablet and desktop; 4dp grid for icons, type and some in-component elements; type on a 4dp baseline grid. Material's own padding examples are measured in increments of 8dp or 4dp.",
      pitfall: "Forcing an 8-multiple onto things whose size is decided by content, such as type blocks, icons drawn on their own keyline or photographs, which produces lumpy padding instead of rhythm.",
      source: "Google Material Design, Spacing methods; The 8-Point Grid, spec.fm/specifics/8-pt-grid (undated, attributed to Bryn Jackson)",
      verify: { status: "adjusted", note: "Material's wording quoted from m2.material.io/design/layout/spacing-methods.html, read in full this session, including the 4dp exceptions and the two figure captions used as the example. An earlier draft dated the spec.fm guide to 2015 and gave Bryn Jackson as its author on the page's own authority. I read the whole page: it carries no byline and no publication date. The attribution to Jackson rests on secondary sources that link to it by name, so the year has been dropped and the authorship marked as attributed rather than confirmed. The hard-grid and soft-grid distinction and the two reasons given for eight are taken from the page itself. The same earlier draft credited the page with an argument that eight scales to whole numbers at 1.5x, 2x and 3x. The page makes no such claim, so it has been removed." },
      belongs: { verdict: "core", why: "Spacing is the single largest source of inconsistency in an unsystematised layout, and this is the convention almost every design system now uses to fix it." },
      related: [413, 414, 1023, 385]
    },
    {
      n: 1018,
      title: "60-30-10 colour split",
      aka: ["60/30/10 rule", "Dominant, secondary, accent"],
      oneLine: "A decorating rule of thumb: 60 per cent dominant colour, 30 per cent secondary, 10 per cent accent.",
      demo: { none: "The area split is already demonstrated in the colour section, and what this entry adds is that the figures have no traceable source, which no picture can show." },
      what: "The rule proposes a rough area budget for a colour scheme. Sixty per cent goes to the dominant surface, which in a room is the walls and on a screen is the page background and large fields. Thirty per cent goes to a supporting colour that carries sections, panels and imagery. Ten per cent goes to the accent that takes attention, which on a page usually means the primary button and little else. It is repeated constantly in interior design and interface writing. I could not trace it to any named originator, book, designer or study, so treat it as folklore with a useful shape rather than a finding.",
      why: "It forces you to decide which colour is doing which job. Most weak palettes fail on proportion rather than on hue: the brand colour is used everywhere, so nothing stands out, and the button has to shout to be noticed.",
      how: [
        "Budget by area on the rendered page, not by counting swatches in the palette.",
        "Reserve the accent for the single action you most want taken, and check no other element is wearing it.",
        "Blur or squint at a screenshot; if the accent does not pop out first, the split is wrong.",
        "Keep photography out of the budget or it will swallow the accent."
      ],
      example: "A typical software marketing page: a near-white background across most of the screen, one mid-tone brand colour running section panels and illustrations, and a single saturated colour used only on the sign-up button.",
      numbers: "60 per cent dominant, 30 per cent secondary, 10 per cent accent. No published source, so treat the figures as an approximate budget rather than a specification.",
      pitfall: "Applying it literally, measuring pixel areas and hitting the percentages while the page still has no focal point, because proportion alone does not fix a palette with no value contrast in it.",
      source: "Origin unclear. Widely repeated in interior design and interface writing with no traceable originator.",
      verify: { status: "disputed", note: "I searched for an originator across design, decorating and interface sources and found only unsourced repetition, with no book, designer or study credited anywhere. The sourced relative of the idea is Johannes Itten's contrast of extension in The Art of Color, which treats the relative area a colour occupies as a compositional variable in its own right. The 60/30/10 figures themselves remain unattributed." },
      belongs: { verdict: "adjacent", why: "Borrowed from interior decorating and carrying no evidence, but it does one specific job for a designer: it forces colour to be budgeted by the area it will occupy on screen, which is where most palettes actually fail." },
      related: [290, 314, 1014]
    },
    {
      n: 1019,
      title: "0.1s, 1s, 10s response thresholds",
      aka: ["Nielsen's response time limits", "Three important limits"],
      oneLine: "Under 0.1 seconds feels instant, under 1 second keeps flow, and past 10 seconds attention goes.",
      demo: {
        caption: "The three limits on a log scale. Each is ten times the last, and the first is where acknowledgement must land.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 380 108\"><path class=\"s-mute\" d=\"M14 70 H372\"/><path class=\"s-mute\" d=\"M14 64 V76 M100 64 V76 M186 64 V76 M272 64 V76\"/><path class=\"s-accent\" style=\"stroke-dasharray:4 4\" d=\"M100 26 V64 M186 26 V64 M272 26 V64\"/><text class=\"t\" x=\"14\" y=\"90\">0.01s</text><text class=\"t\" x=\"100\" y=\"90\" text-anchor=\"middle\">0.1s</text><text class=\"t\" x=\"186\" y=\"90\" text-anchor=\"middle\">1s</text><text class=\"t\" x=\"272\" y=\"90\" text-anchor=\"middle\">10s</text><text class=\"t\" x=\"57\" y=\"46\" text-anchor=\"middle\">feels instant</text><text class=\"t\" x=\"143\" y=\"46\" text-anchor=\"middle\">flow unbroken</text><text class=\"t\" x=\"229\" y=\"46\" text-anchor=\"middle\">show progress</text><text class=\"t\" x=\"322\" y=\"46\" text-anchor=\"middle\">attention gone</text><text class=\"t\" x=\"14\" y=\"16\">each step is ten times the last</text></svg></div>"
      },
      what: "Jakob Nielsen set these out in Response Times: The 3 Important Limits (1993), drawing on Robert B. Miller's 1968 paper on response time in man-computer conversational transactions and on Card and colleagues in 1991. At 0.1 second the user feels they are directly manipulating the object. At 1 second they notice the delay and feel the computer is working, but their flow of thought stays unbroken. At 10 seconds attention leaves the task; beyond that Nielsen asks for a percent-done indicator and a clearly signposted way to interrupt. The limits come from human perception, so faster hardware does not move them.",
      why: "These three numbers tell you when feedback is required rather than optional. Meeting the first buys the feeling that the user caused the change; missing the third means they will task-switch and come back needing to reorient.",
      how: [
        "Acknowledge every tap within 100ms even when the real work takes longer: a pressed state, a spinner in the button, a row highlight.",
        "Between 1 and 10 seconds, show that work is happening and roughly what it is.",
        "Past 10 seconds, show genuine progress, allow cancellation, and make it safe to leave and return.",
        "Use optimistic updates where the outcome is near certain, and design the rollback for when it is not."
      ],
      example: "Nielsen's own example, from the 2014 update to the article: selecting a table column should highlight it within 0.1 second, and if the sort itself cannot be done in 0.1 second, it \"certainly has to be done in 1 second, or users will feel that the UI is sluggish\".",
      numbers: "0.1 second for direct manipulation, 1 second for uninterrupted flow, 10 seconds for the limit of attention on a task (Nielsen 1993, after Miller 1968 and Card et al. 1991).",
      pitfall: "Teams optimise total completion time and skip the acknowledgement, so a three-second action feels broken because nothing at all happens in the first second.",
      source: "Jakob Nielsen, Response Times: The 3 Important Limits, Nielsen Norman Group (1 January 1993), an excerpt from chapter 5 of his Usability Engineering",
      verify: { status: "verified", note: "Read the whole NN/g article at nngroup.com/articles/response-times-3-important-limits this session. It is dated 1 January 1993, is labelled an excerpt from chapter 5 of Usability Engineering, gives all three limits in the wording paraphrased here, and cites Miller (1968) and Card et al. (1991) in its own opening line. The percent-done indicator and interrupt advice for delays past 10 seconds is in the 2014 update section, as is the table-sorting example." },
      belongs: { verdict: "core", why: "It comes out of human-computer interaction, which is design's own research field, and it was written as guidance for interface designers rather than borrowed from elsewhere." },
      related: [1020, 1022, 594, 592]
    },
    {
      n: 1020,
      title: "100-500ms interface motion",
      aka: ["Animation duration", "Transition timing"],
      oneLine: "Keep interface animation between about 100 and 500 milliseconds, shorter for smaller moves.",
      demo: { none: "The motion section already draws these durations to scale, so a second chart of the same milliseconds would be that picture again under another name." },
      what: "Page Laubheimer's Nielsen Norman Group article of 9 February 2020 puts the duration of most animations at 100 to 500ms, \"depending on complexity and on how far the element is traveling\". Simple feedback such as showing a checkbox or a toggle switch should be roughly 100ms. Substantial screen changes, such as a modal window moving into view, can take 200 to 300ms. The warning at the top end is blunt: \"At 500ms, animations start to feel like a real drag for users.\" In most cases the article settles on 100 to 400ms, with 400ms reserved for big movements across large screens. The lower bound connects to Nielsen's 0.1 second limit for direct manipulation.",
      why: "Below about 100ms the change is not read as motion at all, so you lose the sense of one thing turning into another. Above about 400ms the user has finished deciding and is waiting for the interface to catch up.",
      how: [
        "Scale duration to distance and size: around 100ms for a state flip, 200 to 300ms for a panel or card, up to 400ms for a full-screen move.",
        "Ease out for things arriving and ease in for things leaving, so entrances feel quick and exits feel decisive.",
        "Make animations interruptible, so a second tap during the first animation is not swallowed.",
        "Honour prefers-reduced-motion with a cross-fade or an instant change rather than removing the feedback entirely."
      ],
      example: "A modal that fades and scales in over 200ms reads as arriving. The same modal at 600ms reads as slow, and by the third time a user opens it they are clicking through the animation.",
      numbers: "Most animations 100 to 500ms; simple feedback such as a checkbox around 100ms; substantial screen changes such as a modal 200 to 300ms; 100 to 400ms in most cases, with 400ms only for big movements across large screens (Laubheimer, NN/g, 2020).",
      pitfall: "One global duration token applied to everything, so a tooltip and a full-page transition run for the same time and at least one of them is wrong.",
      source: "Page Laubheimer, Executing UX Animations: Duration and Motion Characteristics, Nielsen Norman Group (9 February 2020)",
      verify: { status: "verified", note: "Read the article at nngroup.com/articles/animation-duration this session for the 100-500ms range, the 100ms figure for simple feedback, the 200-300ms figure for substantial screen changes and the verbatim warning about 500ms. An earlier draft of this entry gave no author or date because neither had been checked; both are on the page, and both are now stated." },
      belongs: { verdict: "core", why: "Duration is the first decision in any interface animation, and getting it wrong makes an otherwise good interaction feel either invisible or sluggish." },
      related: [1019, 734, 735, 701]
    },
    {
      n: 1021,
      title: "7+/-2 and the stricter 4+/-1",
      aka: ["Miller's law", "The magical number seven", "Cowan's four"],
      oneLine: "Miller's famous seven measures memory span, not menu length, and it gives designers no usable rule.",
      demo: {
        caption: "Nine options either way. On the left they all stay on screen; on the right eight exist only in memory.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Nine links on screen</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 120\"><rect class=\"s-mute\" x=\"1\" y=\"1\" width=\"158\" height=\"118\"/><rect class=\"f\" x=\"10\" y=\"10\" width=\"96\" height=\"7\"/><rect class=\"f\" x=\"10\" y=\"22\" width=\"112\" height=\"7\"/><rect class=\"f\" x=\"10\" y=\"34\" width=\"84\" height=\"7\"/><rect class=\"f\" x=\"10\" y=\"46\" width=\"104\" height=\"7\"/><rect class=\"f\" x=\"10\" y=\"58\" width=\"92\" height=\"7\"/><rect class=\"f\" x=\"10\" y=\"70\" width=\"120\" height=\"7\"/><rect class=\"f\" x=\"10\" y=\"82\" width=\"78\" height=\"7\"/><rect class=\"f\" x=\"10\" y=\"94\" width=\"108\" height=\"7\"/><rect class=\"f\" x=\"10\" y=\"106\" width=\"88\" height=\"7\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Nine options spoken</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 120\"><rect class=\"s-mute\" x=\"1\" y=\"1\" width=\"158\" height=\"118\"/><rect class=\"s-mute\" style=\"stroke-dasharray:3 3\" x=\"10\" y=\"10\" width=\"96\" height=\"7\"/><rect class=\"s-mute\" style=\"stroke-dasharray:3 3\" x=\"10\" y=\"22\" width=\"112\" height=\"7\"/><rect class=\"s-mute\" style=\"stroke-dasharray:3 3\" x=\"10\" y=\"34\" width=\"84\" height=\"7\"/><rect class=\"f-accent\" x=\"10\" y=\"46\" width=\"104\" height=\"7\"/><rect class=\"s-mute\" style=\"stroke-dasharray:3 3\" x=\"10\" y=\"58\" width=\"92\" height=\"7\"/><rect class=\"s-mute\" style=\"stroke-dasharray:3 3\" x=\"10\" y=\"70\" width=\"120\" height=\"7\"/><rect class=\"s-mute\" style=\"stroke-dasharray:3 3\" x=\"10\" y=\"82\" width=\"78\" height=\"7\"/><rect class=\"s-mute\" style=\"stroke-dasharray:3 3\" x=\"10\" y=\"94\" width=\"108\" height=\"7\"/><rect class=\"s-mute\" style=\"stroke-dasharray:3 3\" x=\"10\" y=\"106\" width=\"88\" height=\"7\"/><text class=\"t\" x=\"120\" y=\"53\">now</text></svg></div></div></div>"
      },
      what: "George Miller's 1956 paper in Psychological Review reported two separate limits. The first is the span of absolute judgement on a single dimension, which he put at a mean channel capacity of 2.6 bits, or about 6.5 categories, with one standard deviation covering 4 to 10. The second is the immediate memory span, about seven items, measured in chunks rather than bits. Miller wrote that \"in spite of the coincidence that the magical number seven appears in both places, the span of absolute judgment and the span of immediate memory are quite different kinds of limitations\", and closed by calling the recurrence \"only a pernicious, Pythagorean coincidence\". Nelson Cowan's 2001 paper in Behavioral and Brain Sciences put working memory nearer four chunks. Neither paper concerns navigation, menus or lists on a screen, where the options remain visible and nothing has to be held in memory. Jean-luc Doumont catalogued the misuse in Magical numbers: the seven-plus-or-minus-two myth (IEEE Transactions on Professional Communication, 2002).",
      why: "The version of this that reaches designers, keep menus to seven items, does not follow from either paper. What does follow is narrower and still useful: chunking helps, and anything a person has to carry in their head from one screen to the next should be kept very short.",
      how: [
        "Stop counting visible options. If they are on screen and scannable, the constraint is scanning and grouping, not memory.",
        "Chunk long strings you expect people to read back or type: sort codes, reference numbers, card numbers.",
        "Where a value must be carried across a step, keep it to a few chunks and let people look it up again without losing their place.",
        "If you want a defensible number for choice cost, use the Hick-Hyman law rather than this one."
      ],
      example: "A telephone menu that reads out nine options is a genuine memory-span problem, because each option disappears as the next is spoken. A website navigation bar with nine links is not, because all nine stay on screen while the user decides.",
      numbers: "Miller 1956: immediate memory span about seven items; span of absolute judgement a mean of 2.6 bits, which is about 6.5 categories, ranging over 3 to 15 across the studies he pooled. Cowan 2001: about four chunks. No published figure caps the number of items in a menu.",
      pitfall: "Deleting a navigation item that people need in order to get the count under seven, and burying it somewhere worse.",
      source: "George A. Miller, Psychological Review 63(2), 1956; Nelson Cowan, Behavioral and Brain Sciences 24(1), 2001; Jean-luc Doumont, IEEE Transactions on Professional Communication 45(2), 2002",
      verify: { status: "disputed", note: "Read Miller's 1956 text in full this session (the Classics in the History of Psychology transcription). An earlier draft of this entry gave the span of absolute judgement as \"around five or six categories\", which understates it: Miller's figure is a mean of 2.6 bits, about 6.5 categories, one standard deviation covering 4 to 10 and a total range of 3 to 15. That has been corrected, and his two quoted sentences are now verbatim rather than paraphrased. Cowan's 2001 four-chunk revision confirmed with journal, volume and page numbers. Doumont's 2002 debunking paper confirmed with volume 45, issue 2, pages 123-127. I found no source applying either figure to menu or navigation length." },
      belongs: { verdict: "cut", why: "Borrowed psychology that has been misread into a design rule and repeated for decades. Miller measured memory span, not interface complexity, and the number yields no instruction a designer can safely follow. Replace it with chunking and with the Hick-Hyman law (226) for choice time, and keep Cowan's four only as a rough cap on what someone can carry between screens (205, 567)." },
      related: [205, 226, 567]
    },
    {
      n: 1022,
      title: "LCP 2.5s, INP 200ms, CLS 0.1",
      aka: ["Core Web Vitals", "Google page experience metrics"],
      oneLine: "Google's Core Web Vitals: main content in 2.5 seconds, response in 200ms, layout shift under 0.1.",
      demo: {
        caption: "Twenty loads sorted slowest last. The median clears 2.5 seconds; the verdict is read at the dashed line, which does not.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 380 124\"><rect class=\"f-mute\" x=\"60\" y=\"84\" width=\"12\" height=\"16\"/><rect class=\"f-mute\" x=\"75\" y=\"82\" width=\"12\" height=\"18\"/><rect class=\"f-mute\" x=\"90\" y=\"81\" width=\"12\" height=\"19\"/><rect class=\"f-mute\" x=\"105\" y=\"79\" width=\"12\" height=\"21\"/><rect class=\"f-mute\" x=\"120\" y=\"77\" width=\"12\" height=\"23\"/><rect class=\"f-mute\" x=\"135\" y=\"75\" width=\"12\" height=\"25\"/><rect class=\"f-mute\" x=\"150\" y=\"74\" width=\"12\" height=\"26\"/><rect class=\"f-mute\" x=\"165\" y=\"72\" width=\"12\" height=\"28\"/><rect class=\"f-mute\" x=\"180\" y=\"70\" width=\"12\" height=\"30\"/><rect class=\"f-mute\" x=\"195\" y=\"68\" width=\"12\" height=\"32\"/><rect class=\"f-mute\" x=\"210\" y=\"67\" width=\"12\" height=\"33\"/><rect class=\"f-mute\" x=\"225\" y=\"65\" width=\"12\" height=\"35\"/><rect class=\"f-mute\" x=\"240\" y=\"61\" width=\"12\" height=\"39\"/><rect class=\"f-mute\" x=\"255\" y=\"58\" width=\"12\" height=\"42\"/><rect class=\"f-mute\" x=\"270\" y=\"52\" width=\"12\" height=\"48\"/><rect class=\"f\" x=\"285\" y=\"45\" width=\"12\" height=\"55\"/><rect class=\"f\" x=\"300\" y=\"37\" width=\"12\" height=\"63\"/><rect class=\"f\" x=\"315\" y=\"28\" width=\"12\" height=\"72\"/><rect class=\"f\" x=\"330\" y=\"19\" width=\"12\" height=\"81\"/><rect class=\"f\" x=\"345\" y=\"12\" width=\"12\" height=\"88\"/><path class=\"s-mute\" d=\"M56 104 H366\"/><path class=\"s-accent\" style=\"stroke-dasharray:4 4\" d=\"M60 56 H366\"/><text class=\"t\" x=\"52\" y=\"59\" text-anchor=\"end\">2.5s</text><path class=\"s-mute\" style=\"stroke-dasharray:3 3\" d=\"M283 10 V108\"/><text class=\"t\" x=\"283\" y=\"120\" text-anchor=\"middle\">75th percentile</text><path class=\"s-mute\" d=\"M208 104 V110\"/><text class=\"t\" x=\"204\" y=\"120\" text-anchor=\"end\">median</text></svg></div>"
      },
      what: "Three metrics measured on real visits rather than in a lab. Largest Contentful Paint records when the biggest visible element finishes rendering, and good is within 2.5 seconds. Interaction to Next Paint measures how long after an interaction the page next paints, and good is 200ms or less. Cumulative Layout Shift scores unexpected movement of content that is already visible, and good is 0.1 or less. All three are assessed at the 75th percentile of page loads, segmented across mobile and desktop, so the slowest quarter of your visitors decides the verdict. INP became a stable Core Web Vital in 2024, taking over from First Input Delay.",
      why: "Two of the three are design decisions before they are engineering ones. The hero image and the web fonts drive LCP, and whether space was reserved for images, embeds and banners drives CLS. These are also the numbers a client's SEO agency will read out to you.",
      how: [
        "Reserve height for anything that loads late: width and height on images, fixed boxes for embeds, space allowed for a cookie bar.",
        "Never inject content above content that is already on screen.",
        "Keep the hero's largest element small and load it first; a 3MB background photograph is an LCP failure by itself.",
        "Watch font loading, because a swap to the real face can reflow the text and register as shift."
      ],
      example: "A page that inserts a cookie banner above the header a second after load. Every element below jumps down, the user's thumb lands on the wrong link, and CLS records the whole movement.",
      numbers: "Good thresholds: LCP 2.5 seconds or less, INP 200ms or less, CLS 0.1 or less, each measured at the 75th percentile of page loads and split between mobile and desktop.",
      pitfall: "Tuning against a lab tool on a fast laptop over office broadband and declaring victory, when the thresholds are field data drawn from the slower end of real traffic.",
      source: "Google, Core Web Vitals, web.dev (INP replaced FID as a stable Core Web Vital in 2024)",
      verify: { status: "verified", note: "All three thresholds, the 75th-percentile rule and the FID-to-INP transition read from web.dev/articles/vitals this session." },
      belongs: { verdict: "core", why: "These are the only performance numbers most clients will ever quote, and image weight, font choice and reserved space are all decided by the designer." },
      related: [1019, 594, 1053, 804]
    },
    {
      n: 1023,
      title: "Type scale ratios 1.125 to 1.618",
      aka: ["Modular scale", "Ratio-based type scale"],
      oneLine: "Pick one ratio and generate every type size from it instead of choosing sizes one at a time.",
      demo: {
        caption: "Both ladders start at 16px. Left steps by 1.25, right by 1.618, and only one of them suits an interface.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Ratio 1.25</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--bottom\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:16px\">Aa</span><span class=\"db-note\">16</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:20px\">Aa</span><span class=\"db-note\">20</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:25px\">Aa</span><span class=\"db-note\">25</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:31px\">Aa</span><span class=\"db-note\">31</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:39px\">Aa</span><span class=\"db-note\">39</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Ratio 1.618</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--bottom\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:16px\">Aa</span><span class=\"db-note\">16</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:26px\">Aa</span><span class=\"db-note\">26</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:42px\">Aa</span><span class=\"db-note\">42</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:68px\">Aa</span><span class=\"db-note\">68</span></div></div></div></div></div>"
      },
      what: "A modular scale multiplies a starting size by a fixed ratio to get the next size up and divides to get the next size down. Tim Brown set the method out for the web in More Meaningful Typography (A List Apart, 3 May 2011), quoting Bringhurst: \"A modular scale, like a musical scale, is a prearranged set of harmonious proportions.\" The usual ratios are taken from musical intervals: major second 9:8 is 1.125, minor third 6:5 is 1.2, major third 5:4 is 1.25, perfect fourth 4:3 is about 1.333, the augmented fourth is root two at about 1.414, perfect fifth 3:2 is 1.5, and the golden section is about 1.618. Small ratios give many close sizes; large ratios give few, dramatic jumps.",
      why: "A scale makes hierarchy legible because every step is the same size of step. It also gives you a defensible answer when someone asks why the subhead is 20px and not 21px.",
      how: [
        "Choose the ratio from the job: 1.125 to 1.25 for dense product interfaces, 1.333 to 1.618 for editorial and marketing pages.",
        "Round the generated values to whole pixels and freeze the rounded set as tokens.",
        "Run two scales if one cannot serve both small interface text and large display type.",
        "Treat the scale as a set of candidates rather than a menu you must use in full."
      ],
      example: "A 16px base at a 1.25 ratio gives 16, 20, 25, 31, 39, 49. The same base at 1.618 gives 16, 26, 42, 68, which is a different kind of page entirely.",
      numbers: "Common ratios: 1.125 (9:8), 1.2 (6:5), 1.25 (5:4), 1.333 (4:3), 1.414 (root two), 1.5 (3:2), 1.618 (golden section).",
      pitfall: "Choosing 1.618 for an interface, finding the third step is enormous, and then improvising off-scale sizes to cope, which leaves you with the inconsistency the scale was meant to prevent.",
      source: "Tim Brown, More Meaningful Typography, A List Apart (3 May 2011), building on Robert Bringhurst on scales",
      verify: { status: "verified", note: "Author, publication and the 3 May 2011 date confirmed by reading the article at alistapart.com this session, along with the Bringhurst quotation and the worked golden-ratio example. The ratio values are arithmetic from the musical intervals named. The further claim that these ratios read as more harmonious than arbitrary numbers is a tradition inherited from music theory, and I found no study testing it." },
      belongs: { verdict: "core", why: "Type size is the most-repeated decision in any layout, and a ratio turns it from taste into a set of tokens the whole team can use." },
      related: [346, 343, 1024, 1017]
    },
    {
      n: 1024,
      title: "Golden ratio 1.618, root-2 1.414",
      aka: ["Phi", "Golden section", "ISO 216 ratio"],
      oneLine: "Root two runs the world's paper sizes; the golden ratio is a real number wrapped in false history.",
      demo: {
        caption: "Fold a root-two sheet and you get the same rectangle again. Fold a golden one and the shape changes.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Root two: halves repeat</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 300 226\"><rect class=\"s\" x=\"8\" y=\"8\" width=\"283\" height=\"200\"/><path class=\"s-mute\" d=\"M149.5 8 V208\"/><path class=\"s-mute\" d=\"M149.5 108 H291\"/><path class=\"s-mute\" d=\"M220.25 108 V208\"/><text class=\"t\" x=\"78\" y=\"112\" text-anchor=\"middle\">A5</text><text class=\"t\" x=\"220\" y=\"62\" text-anchor=\"middle\">A6</text><text class=\"t\" x=\"185\" y=\"162\" text-anchor=\"middle\">A7</text><text class=\"t\" x=\"8\" y=\"222\">A4 halved three times, always 1 : 1.414</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Golden: halves do not</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 300 226\"><rect class=\"s\" x=\"8\" y=\"8\" width=\"283\" height=\"175\"/><path class=\"s-mute\" d=\"M149.5 8 V183\"/><text class=\"t\" x=\"16\" y=\"22\">1 : 1.618</text><text class=\"t\" x=\"78\" y=\"100\" text-anchor=\"middle\">1 : 1.24</text><text class=\"t\" x=\"220\" y=\"100\" text-anchor=\"middle\">1 : 1.24</text><text class=\"t\" x=\"8\" y=\"222\">halving gives a different shape</text></svg></div></div></div>"
      },
      what: "The golden ratio is (1 + root 5) divided by 2, or 1.6180339887..., the number that satisfies phi squared equals phi plus one. Root two is 1.41421356..., and it is the one with a standard behind it. ISO 216 builds paper on a root-two rectangle, so cutting the long side in half gives the same proportion again; A0 is 841 by 1189mm with an area of one square metre, and A4 is 210 by 297mm. The golden ratio's design claims are weaker. George Markowsky's Misconceptions about the Golden Ratio (The College Mathematics Journal, 1992) works through the usual exhibits against a stated acceptance range of 1.58 to 1.66. The Parthenon's published dimensions give 2.25 and 1.71, and the UN Secretariat gives 1.76, all outside it. The Great Pyramid does compute to about 1.62, inside the range, but Markowsky traces that claim to a distorted retelling of Herodotus and finds no sign the Egyptians knew the ratio at all. For Leonardo's St Jerome he gives no ratio and objects instead to where the famous rectangle has been drawn, noting it does not touch the figure and that Leonardo met Pacioli thirteen years after painting it. He also ran his own rectangle-preference tests, in which the most commonly chosen rectangle had a ratio of 1.83, and concluded that the aesthetic claims \"seem to be without foundation\". Fechner's rectangle experiments of the 1860s, the original source of the preference claim, gave a weak result even in his own data, and later work has not settled it.",
      why: "Root two tells you what happens when a layout is scaled or folded, which is a daily concern in print. The golden ratio is worth knowing so you can use it as one scale ratio among several, and so you can answer a client who has read an article claiming it is the secret of beauty.",
      how: [
        "For print, work inside the root-two family and your artwork enlarges between A sizes without recropping.",
        "Use 1.618 as a scale ratio when you like the size steps it produces, and say that is why.",
        "When a client cites the Parthenon, say the published measurements put it near 2.25 rather than 1.618, and name Markowsky or Livio."
      ],
      example: "The 141 per cent enlargement button on an office photocopier, which takes A4 to A3. That figure is root two, and it works because every A size shares the same proportion.",
      numbers: "Golden ratio 1.6180339887..., equal to (1 + root 5) / 2. Root two 1.41421356... ISO 216: A0 is 841 by 1189mm with an area of one square metre; A4 is 210 by 297mm.",
      pitfall: "Reaching for the golden ratio to justify a decision already made on other grounds, which teaches clients that proportion is mysticism rather than a choice you can explain.",
      source: "ISO 216 (after Lichtenberg 1786, Porstmann, DIN 476 1921); George Markowsky, Misconceptions about the Golden Ratio, The College Mathematics Journal 23(1), 1992, 2-19; Mario Livio, The Golden Ratio (2002)",
      verify: { status: "disputed", note: "The numeric values are exact, and ISO 216 was checked this session for the root-two basis, the A0 and A4 dimensions, the one-square-metre area and the Lichtenberg, Porstmann and DIN 476 history. An earlier draft could not open Markowsky's paper and rested on secondary summaries; I have now read the article text (College Mathematics Journal 23(1), Jan 1992, 2-19). It does not discuss the Mona Lisa, which the earlier draft named, so the exhibits listed here are the ones Markowsky actually examines: the Great Pyramid, the Parthenon, Leonardo's St Jerome, and the UN Secretariat. A later draft then said all four fall outside his 1.58-1.66 acceptance range. That holds for the Parthenon (2.25 and 1.71) and the UN Secretariat (1.76). It does not hold for the Great Pyramid, which computes to about 1.62 and sits inside the range; Markowsky rejects that claim on historical grounds instead. For St Jerome he gives no ratio and criticises the placement of the rectangle. The entry has been corrected. His own rectangle tests found 1.83 the most-picked ratio. He quotes Fischler for the point that Pacioli advocated a classical Vitruvian system of simple proportions and did not advocate the golden ratio for painting, and he quotes David Eugene Smith for the term \"golden section\" first appearing in print in Martin Ohm's Die reine Elementar-Mathematik in 1835. An earlier draft credited both points to Fischler and added a dating of the Pacioli misattribution to an edition of Montucla's Histoire des Mathematiques in 1799. That dating appears nowhere in Markowsky's paper and I could not source it, so it has been removed. On Fechner, Markowsky dates the rectangle experiments to the 1860s, not 1876, and quotes Zusne's summary of them: the modal choice was the golden-section rectangle, but 76 per cent of choices spread across three rectangles and other shapes still drew a fair number of votes." },
      belongs: { verdict: "core", why: "Root two is a working standard for anyone who touches print, and the golden ratio earns its place as a usable scale ratio and as a myth a designer should be able to correct." },
      related: [1023, 424, 427, 462]
    },
    {
      n: 9011,
      title: "Adult reading speed, about 240 words a minute",
      aka: ["Reading rate", "Words per minute", "Read time"],
      oneLine: "Adults read English non-fiction silently at about 238 words a minute, below the figures usually quoted.",
      demo: {
        caption: "Forty words, about ten seconds at 238 words a minute. Read it and check the figure against your own clock.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-type db-measure-good\">Word count is not a length, it is a duration. At two hundred and thirty-eight words a minute, this paragraph costs a reader about ten seconds, and the whole page it sits on will still cost a great deal more.</div><span class=\"db-note\">40 words, about ten seconds. 240 words, about a minute. 1,200 words, about five minutes.</span></div></div>"
      },
      what: "Marc Brysbaert's 2019 meta-analysis in the Journal of Memory and Language pooled 190 studies covering 18,573 participants. The average silent reading rate for adults in English came out at 238 words a minute for non-fiction and 260 for fiction, the gap explained by non-fiction using longer words. Most adults fall between 175 and 300 wpm on non-fiction and 200 to 320 on fiction. Oral reading, from a separate pool of 77 studies and 5,965 participants, averaged 183 wpm. Rates in other languages can be predicted reasonably well from how many words that language needs to say the same thing. Brysbaert's abstract states that he reviews the reasons for the overestimates in circulation.",
      why: "It converts a word count into a time cost, which is the unit the reader actually spends. A designer arguing for shorter copy has a stronger case with seconds than with adjectives.",
      how: [
        "Budget copy in seconds: 240 words is roughly a minute, 60 words is roughly fifteen.",
        "Size the first screen so a visitor can read the whole of it in under about ten seconds.",
        "If you publish read-time estimates, calculate at 240 wpm and round up, since your slower readers are the ones checking.",
        "Cut words before you shrink type, because the time cost falls with the word count and not with the point size."
      ],
      example: "A 1,200-word dental service page is a five-minute read at 240 wpm. Told that, most clients will accept cutting it to 600 words far more readily than they accept being told it is too long.",
      numbers: "238 wpm silent non-fiction and 260 wpm fiction, from 190 studies and 18,573 participants; typical ranges 175 to 300 wpm for non-fiction and 200 to 320 for fiction; 183 wpm read aloud, from a separate 77 studies and 5,965 participants (Brysbaert 2019).",
      pitfall: "Using the inflated 300 wpm or faster figures still repeated in blog posts, which makes every read-time estimate on the site optimistic and every long page feel worse than promised.",
      source: "Marc Brysbaert, How many words do we read per minute? A review and meta-analysis of reading rate, Journal of Memory and Language 109 (2019), article 104047",
      verify: { status: "verified", note: "Every figure quoted directly from the published abstract, read verbatim this session. An earlier draft attached the 190 studies and 18,573 participants to the oral reading figure as well; the abstract assigns oral reading its own pool of 77 studies and 5,965 participants, and that is now stated separately. The abstract also states that rates are lower for children, older adults and readers with English as a second language, and that rates in other languages can be predicted from the number of words those languages need to convey the same message." },
      belongs: { verdict: "core", why: "It turns word count into time, the only unit a reader experiences, and it sits alongside line length and body size as a number that decides how much copy a layout can honestly carry." },
      related: [1011, 1013, 667, 1019]
    }
  ]
};
