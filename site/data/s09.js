window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[9] = {
  n: 9,
  slug: "typography-micro",
  title: "Typography - micro (detail typography)",
  blurb: "The small decisions inside a column of text that decide whether people can actually read it.",
  intro: "Macro typography picks the typefaces and the sizes. Micro typography, the subject Jost Hochuli mapped out in Detail in Typography (1987), covers everything that happens inside the column: the space between letters, words and lines, how the paragraph breaks, how punctuation behaves at the margin. Most of it is invisible when done well and obvious when done badly. The reliable sources here are Hochuli, Robert Bringhurst's The Elements of Typographic Style, Matthew Butterick's Practical Typography, plus reading research from cognitive psychology and the W3C standards that now carry the hard numbers.",
  sources: [
    "Jost Hochuli, Detail in Typography (first published 1987)",
    "Robert Bringhurst, The Elements of Typographic Style (1992, later editions)",
    "Matthew Butterick, Butterick's Practical Typography (online)",
    "Walter Tracy, Letters of Credit: A View of Type Design (1986)",
    "Kevin Larson, The Science of Word Recognition (Microsoft, 2004)",
    "Miles Tinker, Legibility of Print (1963)",
    "Miles Tinker and Donald Paterson, Influence of type form on speed of reading, Journal of Applied Psychology 12 (1928)",
    "Mary Dyson and Mark Haselgrove, The influence of reading speed and line length on the effectiveness of reading from screen, International Journal of Human-Computer Studies 54 (2001)",
    "Donald Knuth and Michael Plass, Breaking Paragraphs into Lines, Software: Practice and Experience 11 (1981)",
    "Josef Müller-Brockmann, Grid Systems in Graphic Design (1981)",
    "W3C, Web Content Accessibility Guidelines 2.2 (2023)",
    "W3C Internationalisation, Text size in translation",
    "Unicode Standard Annex #9, Unicode Bidirectional Algorithm",
    "The Chicago Manual of Style",
    "Stephen Few, Show Me the Numbers"
  ],
  entries: [
    {
      n: 370,
      title: "The reading process",
      aka: ["Eye movements in reading", "Saccades and fixations in text"],
      oneLine: "Eyes jump along a line in short hops, and letters are recognised in parallel, not as word outlines.",
      demo: {
        caption: "Dots are where the eye stops. Arcs are the jumps between them, and the accent arc jumps backwards to re-read.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 100\"><path class=\"s-mute\" d=\"M24 26 Q 62 6 100 26\"/><path class=\"s-mute\" d=\"M100 26 Q 135 6 170 26\"/><path class=\"s-mute\" d=\"M170 26 Q 201 6 232 26\"/><path class=\"s-mute\" d=\"M232 26 Q 252 10 272 26\"/><text class=\"t\" x=\"10\" y=\"14\">saccades</text><text class=\"t\" x=\"10\" y=\"42\" style=\"font-size:12px\">Eyes</text><text class=\"t\" x=\"46\" y=\"42\" style=\"font-size:12px\">jump</text><text class=\"t\" x=\"84\" y=\"42\" style=\"font-size:12px\">along</text><text class=\"t\" x=\"128\" y=\"42\" style=\"font-size:12px\">the</text><text class=\"t\" x=\"158\" y=\"42\" style=\"font-size:12px\">line</text><text class=\"t\" x=\"192\" y=\"42\" style=\"font-size:12px\">in</text><text class=\"t\" x=\"214\" y=\"42\" style=\"font-size:12px\">short</text><text class=\"t\" x=\"258\" y=\"42\" style=\"font-size:12px\">hops</text><circle class=\"f-accent\" cx=\"24\" cy=\"52\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"100\" cy=\"52\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"170\" cy=\"52\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"232\" cy=\"52\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"272\" cy=\"52\" r=\"2.5\"/><text class=\"t\" x=\"10\" y=\"70\">fixations</text><path class=\"s-accent\" d=\"M170 58 Q 152 78 134 58\"/><text class=\"t\" x=\"152\" y=\"92\" text-anchor=\"middle\">regression</text></svg></div>"
      },
      what: "Reading is a series of stops and jumps. The eye fixates for roughly 200 to 250 milliseconds, then makes a fast jump called a saccade, and somewhere between one jump in ten and one in seven goes backwards to re-read. Within a fixation the reader takes in a useful span of around fifteen letters to the right. Kevin Larson's 2004 review for Microsoft gathers the evidence that we identify a word from its component letters processed at the same time, and that the older word-shape or bouma theory no longer holds.",
      why: "Every setting decision either helps that machinery or fights it. Clear word spaces give the eye a target for the next jump, distinct letterforms feed the letter recognisers, and an over-long line makes the return sweep miss its landing.",
      how: [
        "Keep word spaces obvious and even, since the space signals where the next fixation should land.",
        "Choose text faces whose similar letters stay distinguishable at your size, such as I, l and 1.",
        "Stop justifying design choices with word-shape arguments; use letter clarity and spacing instead."
      ],
      example: "Larson's moving-window figures: when only three letters around the fixation were visible, readers managed 207 words per minute; with nine letters, 308; with fifteen letters, 340.",
      numbers: "Fixations of roughly 200-250ms, saccades of 20-35ms covering 7-9 letters, a perceptual span of about 15 letters to the right of fixation, and 10-15 per cent of saccades running backwards (Larson 2004, summarising McConkie and Rayner 1975 and Rayner 1975).",
      pitfall: "The word-shape story is still repeated in type marketing and in design courses. Anyone selling you a typeface on the strength of its bouma shapes is quoting a model that reading psychologists abandoned.",
      source: "Kevin Larson, The Science of Word Recognition (Microsoft, 2004); Jost Hochuli opens Detail in Typography (1987) with the same subject.",
      verify: { status: "verified", note: "Read Larson's paper in full on Microsoft Learn, including the moving-window and boundary-study tables and the reference list (McConkie and Rayner 1975, Rayner 1975, Paap, Newsome and Noel 1984). Confirmed Hochuli's book opens with a chapter called The reading process from the publisher's contents listing." },
      belongs: { verdict: "adjacent", why: "This is cognitive psychology, not design. It earns its place because it supplies the actual reasons behind measure limits, word spacing and the case against all-caps body text, and because it disproves a model many designers still use." },
      related: [371, 372, 374, 396]
    },
    {
      n: 371,
      title: "Legibility versus readability",
      aka: ["Character clarity versus reading comfort"],
      oneLine: "Legibility is how well single characters can be told apart; readability is how comfortably a passage reads.",
      demo: {
        caption: "Top row: one string, two faces, so the characters change. Below: one face, two settings, so the comfort changes.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Legibility: one string, two faces</span><div class=\"db-row db-row--loose db-row--baseline\"><span class=\"db-type\" style=\"font-size:22px\">Il1 O0 rn cl</span><span class=\"db-type db-type--mono\" style=\"font-size:22px\">Il1 O0 rn cl</span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Readability: one face, two settings</span><div class=\"db-type db-measure-wide\" style=\"font-size:13px;line-height:1\">Micro typography is the part of the job nobody notices when it is done well, because the reader gets to the end of the paragraph without noticing anything at all.</div><div class=\"db-type db-measure-good\" style=\"font-size:13px;line-height:1.6\">Micro typography is the part of the job nobody notices when it is done well, because the reader gets to the end of the paragraph without noticing anything at all.</div></div></div></div>"
      },
      what: "Legibility belongs to the typeface: can you tell a capital I from a lower-case l, a 3 from an 8, at the size you are using. Readability belongs to the setting: size, measure, leading, spacing, contrast, colour, language and the reader's familiarity with the text. A highly legible face can be set unreadably, and a quirky face can read tolerably well if the setting is generous. Walter Tracy's Letters of Credit (1986) gives the pair a chapter of their own, Legibility and readability, and describes legibility as the quality of being decipherable and recognisable. Tracy's readability is about whether a text can be read for long stretches without strain, which is a property of the setting as much as of the face.",
      why: "Separating the two tells you where to fix a problem. If readers stumble on individual characters, change the typeface. If they lose their place, tire quickly or skip lines, change the setting. Designers who conflate the two swap typefaces when the real fault is a 110-character measure.",
      how: [
        "Diagnose first: proofread a paragraph for character confusions before blaming the face.",
        "Run the standard confusable string Il1 O0 rn/m in any face you plan to use for data or codes.",
        "Judge readability on a full page of real copy, never on a pangram or a heading."
      ],
      example: "A reference number set in a geometric sans where capital I, lower-case l and figure 1 are near-identical strokes is a legibility failure. The same face at 15px over a 900px-wide column is a readability failure.",
      numbers: "",
      pitfall: "The two words are used interchangeably in casual writing and in client feedback, so agree which one you mean before a critique turns into a typeface argument.",
      source: "Walter Tracy, Letters of Credit: A View of Type Design (1986), chapter Legibility and readability.",
      verify: { status: "verified", note: "Confirmed the 1986 publication date (Gordon Fraser; later Godine edition) via the Internet Archive record, and confirmed from the book's contents listing that Legibility and readability is a chapter title beginning at page 30. Tracy's phrase for legibility, the quality of being decipherable and recognisable, is the one reproduced in the type literature. I did not read the chapter itself, so the split between typeface and setting is stated as the standard working distinction rather than as Tracy's own wording." },
      belongs: { verdict: "core", why: "A basic distinction that determines which lever a designer reaches for. Missing it leads to fixing the wrong thing." },
      related: [370, 372, 373, 396]
    },
    {
      n: 372,
      title: "Measure (45-75 characters)",
      aka: ["Line length", "Column width"],
      oneLine: "Set body text to roughly 45 to 75 characters a line, counting letters and spaces.",
      demo: {
        caption: "The same passage at three widths. Count the characters on a line in each and compare how the middle one reads.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">About 25 characters</span><div class=\"db-type\" style=\"font-size:12px;max-width:12em\">A line that runs too long makes the return sweep hard to aim, so the eye lands on the wrong line and the reader starts again. A line that is too short chops the sentence into fragments.</div></div><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">About 65 characters</span><div class=\"db-type db-measure-good\" style=\"font-size:12px\">A line that runs too long makes the return sweep hard to aim, so the eye lands on the wrong line and the reader starts again. A line that is too short chops the sentence into fragments.</div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Over 100 characters</span><div class=\"db-type db-measure-wide\" style=\"font-size:12px\">A line that runs too long makes the return sweep hard to aim, so the eye lands on the wrong line and the reader starts again. A line that is too short chops the sentence into fragments.</div></div></div></div>"
      },
      what: "Measure is the width of a text column expressed in characters. Bringhurst's rule 2.1.2 puts a satisfactory single-column line at 45 to 75 characters in a serifed text face, calls 66 the widely regarded ideal, and gives 40 to 50 for multiple-column work. The reason sits in the reading machinery: a long line makes the return sweep harder to aim, so readers re-read or skip lines.",
      why: "Getting measure right is the cheapest improvement available to a page of text. It needs no new typeface and it removes the main cause of readers giving up on a long article.",
      how: [
        "Set a max-width on prose containers in ch units, around 60ch to 70ch, and check it at every breakpoint.",
        "If a wide container is fixed, increase the type size rather than letting the line run long.",
        "Count characters on a real paragraph rather than trusting the container width in pixels.",
        "For multi-column layouts, aim lower, around 40 to 50."
      ],
      example: "A 1200px container with no max-width gives roughly 150 characters a line at 16px. The same text in a 65ch column is unremarkable to read, which is the point.",
      numbers: "Bringhurst: 45-75 characters single column, 66 ideal, 40-50 multi-column. WCAG 2.2 Success Criterion 1.4.8 (level AAA) caps a block of text at 80 characters, or 40 for Chinese, Japanese and Korean. Dyson and Haselgrove (2001) compared three line lengths on screen, 25, 55 and 100 characters, and found the medium 55-character line gave the highest comprehension at both normal and fast reading speeds, and was read faster than the short line.",
      pitfall: "Designers set the measure on the desktop mock and forget the tablet width, where a two-column grid collapses to one and the measure doubles.",
      source: "Robert Bringhurst, The Elements of Typographic Style, rule 2.1.2; WCAG 2.2 SC 1.4.8; Mary Dyson and Mark Haselgrove, International Journal of Human-Computer Studies 54 (2001), 585-612.",
      verify: { status: "verified", note: "Quoted rule 2.1.2 from Richard Rutter's rule-by-rule mirror at webtypography.net, which reproduces Bringhurst's wording including the 66-character ideal and the 40-50 multi-column figure. Checked WCAG 1.4.8 wording via the W3C Understanding document. Corrected the Dyson and Haselgrove citation: the paper is in the International Journal of Human-Computer Studies, volume 54 issue 4 (April 2001), not Interacting with Computers, and it compared three line lengths rather than six. Abstract read via the ACM Digital Library record for doi 10.1006/ijhc.2001.0458; the 25, 55 and 100 character conditions confirmed against Shaikh (2005), who summarises the study." },
      belongs: { verdict: "core", why: "One of the very few typographic rules with both a canonical source and supporting reading research." },
      related: [373, 1011, 380, 384]
    },
    {
      n: 373,
      title: "Leading relative to measure and x-height",
      aka: ["Line spacing", "Line-height"],
      oneLine: "Longer lines and larger x-heights need more space between lines, not a fixed ratio.",
      demo: {
        caption: "Line spacing is identical in the first two blocks. Only the column got wider, and the third block shows the fix.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Narrow column, line-height 1.3</span><div class=\"db-type db-measure-narrow\" style=\"font-size:11px;line-height:1.3\">Leading is the distance from one baseline to the next, and no single number is right for every setting. A narrow column holds together on tight leading because the eye travels only a short way back. Widen the same column and the return journey gets longer, so the reader needs a clearer track of white to land on.</div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Wide column, the same 1.3</span><div class=\"db-type db-measure-wide\" style=\"font-size:11px;line-height:1.3\">Leading is the distance from one baseline to the next, and no single number is right for every setting. A narrow column holds together on tight leading because the eye travels only a short way back. Widen the same column and the return journey gets longer, so the reader needs a clearer track of white to land on.</div></div><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Wide column, line-height 1.75</span><div class=\"db-type db-measure-wide\" style=\"font-size:11px;line-height:1.75\">Leading is the distance from one baseline to the next, and no single number is right for every setting. A narrow column holds together on tight leading because the eye travels only a short way back. Widen the same column and the return journey gets longer, so the reader needs a clearer track of white to land on.</div></div></div></div>"
      },
      what: "Leading is the vertical distance from one baseline to the next, and there is no single correct value. Bringhurst's rule 2.2.1 says to choose a basic leading that suits the typeface, the text and the measure. Two faces at the same nominal size can need different leading because their x-heights differ: a large x-height fills more of the line and closes the horizontal channel of white between lines, so it wants more room. Wider measures also want more leading, because the eye needs a clearer track to find the next line.",
      why: "Leading controls whether a paragraph reads as separate lines or a grey smudge. Too tight and readers lose the line; too loose and the paragraph stops holding together as one unit.",
      how: [
        "Set leading after you have fixed the measure, not before.",
        "Increase line-height as measure grows, and reduce it if you narrow the column.",
        "Compare candidate faces at matched x-heights before comparing leading.",
        "Reduce leading slightly for large display text and increase it for small print."
      ],
      example: "Verdana and Garamond set at the same point size look like different sizes because Verdana's x-height is far larger. Give them the same line-height and the Verdana paragraph will feel cramped.",
      numbers: "WCAG 2.2 SC 1.4.12 (level AA) requires no loss of content or function when a user sets line height to at least 1.5 times the font size and paragraph spacing to at least 2 times the font size. SC 1.4.8 (level AAA) asks for at least space-and-a-half line spacing within paragraphs.",
      pitfall: "Copying a line-height number from another project without copying its measure and typeface. The ratio that worked at 60 characters will feel mean at 90.",
      source: "Robert Bringhurst, rule 2.2.1; Jost Hochuli, Detail in Typography (1987), chapter on line spacing and the column; WCAG 2.2 SC 1.4.12 and 1.4.8.",
      verify: { status: "verified", note: "Rule 2.2.1 wording taken from Rutter's webtypography.net mirror of Bringhurst. Hochuli's chapter titles confirmed from publisher listings. WCAG figures checked against the W3C Understanding documents for 1.4.12 and 1.4.8." },
      belongs: { verdict: "core", why: "Leading is one of the three dials (size, measure, leading) that set the readability of any text block." },
      related: [372, 385, 399, 1012]
    },
    {
      n: 374,
      title: "Word spacing",
      aka: ["Word space", "Interword spacing"],
      oneLine: "The gap between words should separate them cleanly without punching holes in the line.",
      demo: {
        caption: "The same sentence three times. Only the word space changes, from words touching to a paragraph of separate islands.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Word space tightened</span><div class=\"db-type db-measure-good\" style=\"font-size:15px;word-spacing:-0.14em\">The space between words is doing navigational work as well as visual work, because the eye uses it to aim the next jump.</div></div><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Left at the font default</span><div class=\"db-type db-measure-good\" style=\"font-size:15px\">The space between words is doing navigational work as well as visual work, because the eye uses it to aim the next jump.</div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Word space opened out</span><div class=\"db-type db-measure-good\" style=\"font-size:15px;word-spacing:0.75em\">The space between words is doing navigational work as well as visual work, because the eye uses it to aim the next jump.</div></div></div></div>"
      },
      what: "Bringhurst's rule 2.1.1 says to define the word space to suit the size and natural letterfit of the font. A tightly fitted face wants a smaller word space; a loosely fitted one wants more. The word space also has a job beyond separation: eye-tracking work shows readers use word-space information to program where the next saccade lands, so it is doing navigational work as well as visual work.",
      why: "Word spacing sets the texture of the paragraph. Too tight and words run together into one long string. Too loose and the paragraph breaks into a scatter of islands with white channels running down it.",
      how: [
        "Leave the font's default word space alone unless you have a specific reason to change it.",
        "If you tighten letter-spacing, tighten word spacing by a proportionate amount or the words will drift apart.",
        "In justified setting, control word space through the justification limits rather than a global adjustment.",
        "Check word spacing at your smallest real size, where it is most likely to close up."
      ],
      example: "Pollatsek and Rayner (1982) replaced word spaces with the letter x during reading and found saccade lengths shortened, which is evidence that the space is part of how the eye plans its next move.",
      numbers: "WCAG 2.2 SC 1.4.12 (AA) requires content to remain usable when word spacing is set to at least 0.16 times the font size.",
      pitfall: "Adding tracking to a headline and leaving the word space untouched, which turns the headline into a row of evenly spaced letters with no visible word breaks.",
      source: "Robert Bringhurst, rule 2.1.1; Pollatsek and Rayner (1982), cited in Larson (2004); WCAG 2.2 SC 1.4.12.",
      verify: { status: "verified", note: "Rule 2.1.1 wording from Rutter's Bringhurst mirror. The Pollatsek and Rayner finding is reported and cited in Larson's Microsoft paper, which I read in full. WCAG figure checked against the W3C Understanding document." },
      belongs: { verdict: "core", why: "One of the two spacing dials inside a line, and the one that most often breaks when designers track headlines." },
      related: [375, 378, 379, 388]
    },
    {
      n: 375,
      title: "Letter-spacing and tracking",
      aka: ["Tracking", "Letterspacing"],
      oneLine: "Tracking adjusts space across a run of letters uniformly; it is a display tool, not a body-text tool.",
      demo: {
        caption: "The same paragraph, the same face. Tracking has been added to every gap on the left and nowhere on the right.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Tracked +0.14em</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:13px;letter-spacing:0.14em\">Lower-case letterforms already carry their spacing, drawn in by the type designer. Adding more breaks each word into a run of separate characters, and the reader has to assemble them again.</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Tracking at zero</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:13px;letter-spacing:0\">Lower-case letterforms already carry their spacing, drawn in by the type designer. Adding more breaks each word into a run of separate characters, and the reader has to assemble them again.</div></div></div></div>"
      },
      what: "Tracking adds or removes the same amount of space between every character in a range. Bringhurst's rule 2.1.7 is blunt: don't letterspace the lower case without a reason. Lower-case letterforms are drawn with their spacing built in by the type designer, and adding space breaks the word into loose characters, which slows letter-to-word recognition. Positive tracking has legitimate uses at small sizes, in capitals, in small caps and in reversed-out text, where letters can otherwise close up.",
      why: "Tracking is the fastest way to wreck an otherwise good paragraph, and one of the fastest ways to fix a display line. Knowing which situation you are in is most of the skill.",
      how: [
        "Leave body text at zero tracking unless you are compensating for small size or reversed-out text.",
        "Add a little positive tracking to light text on a dark background, where letters visually swell and close up.",
        "Track small caps and capitals open (see entry 377).",
        "Record any tracking value as a token, so the same value gets reused rather than eyeballed each time."
      ],
      example: "Set a caption at 12px in white on black with default tracking and it will look tighter than the same caption in black on white. A small positive value, applied only to that reversed style, restores the fit.",
      numbers: "WCAG 2.2 SC 1.4.12 (AA) requires content to remain usable when letter spacing is set to at least 0.12 times the font size.",
      pitfall: "Tracking body copy to make it fill a box. It always shows, it always reads worse, and it is the classic sign of a layout that was never resized properly.",
      source: "Robert Bringhurst, rule 2.1.7; WCAG 2.2 SC 1.4.12.",
      verify: { status: "verified", note: "Rule 2.1.7, don't letterspace the lower case without a reason, confirmed on Rutter's webtypography.net mirror. The distinction from kerning is formal, not just conventional: the OpenType kern table specification on Microsoft Learn describes minimum values as limiting the adjustment a scaler applies through the combination of kerning and tracking, and states that those adjustments are additive. The claim that positive tracking helps reversed-out and very small text is craft convention with no numeric threshold I could source, so none is given." },
      belongs: { verdict: "core", why: "A daily control with a clear rule and a clear failure mode." },
      related: [374, 376, 377, 400]
    },
    {
      n: 376,
      title: "Kerning and kerning pairs",
      aka: ["Pair kerning", "Letterfit"],
      oneLine: "Kerning adjusts the gap between two specific characters; tracking adjusts a whole run.",
      demo: {
        caption: "One word, three fits. Tracking moves every gap; kerning moves only the space between the A and the V.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--top db-row--between\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:34px\">AVATAR</span><span class=\"db-note\">Default fit</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:34px;letter-spacing:0.09em\">AVATAR</span><span class=\"db-note\">Tracked: every gap</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:34px\">A<span style=\"margin-left:-0.13em\">V</span>ATAR</span><span class=\"db-note db-note--accent\">Kerned: the AV pair</span></div></div></div>"
      },
      what: "Every glyph carries its own side bearings, the built-in space to its left and right. Some pairs still collide or gape, classically AV, To, Ye and quote marks after a capital. Kerning corrects those pairs individually. In a font file the corrections live in a kern table or, for modern OpenType fonts, in the GPOS (glyph positioning) table, which also supports class-based kerning so a designer can fix whole groups of pairs at once. Bringhurst's rule 2.1.8 says to kern consistently and modestly, or not at all.",
      why: "Good kerning is invisible; bad kerning stops the reader on a word. At body sizes the font's own kerning is nearly always enough. At display sizes the gaps are magnified and hand correction starts to pay.",
      how: [
        "Turn font kerning on (in CSS, font-kerning: normal) and leave it on.",
        "Hand-kern only at large sizes: logos, headlines, posters, numerals in a hero figure.",
        "Kern by eye, not by number. Judge the area of white between pairs, not the distance.",
        "Never hand-kern text that will be re-flowed or translated; your fixes will land on the wrong pairs."
      ],
      example: "A wordmark starting with a capital W followed by a lower-case a needs the pair pulled together, because the diagonal of the W opens a hole no side bearing can close.",
      numbers: "",
      pitfall: "Kerning a headline in the design tool, then shipping the same string as live text where the corrections do not exist. The shipped version will not match the mock.",
      source: "Robert Bringhurst, rule 2.1.8; OpenType specification, kern and GPOS tables (Microsoft).",
      verify: { status: "verified", note: "Confirmed the kern table and GPOS behaviour, including class-based kerning and that CFF-outline fonts require GPOS, from the OpenType specification on Microsoft Learn. Rule 2.1.8 wording from Rutter's Bringhurst mirror." },
      belongs: { verdict: "core", why: "A named typographic operation with a defined mechanism in font files, and a routine part of display work." },
      related: [375, 400, 377]
    },
    {
      n: 377,
      title: "Tracking for caps and small caps",
      aka: ["Letterspacing capitals"],
      oneLine: "Strings of capitals and small caps need extra letter space; lower case does not.",
      demo: {
        caption: "The same acronym and the same account number, spaced on the right. Look at how the letters separate.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No extra space</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:26px\">NASA HMRC</span><span class=\"db-specimen\" style=\"font-size:20px\">4029356782</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Letterspaced +0.14em</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:26px;letter-spacing:0.14em\">NASA HMRC</span><span class=\"db-specimen\" style=\"font-size:20px;letter-spacing:0.14em\">4029356782</span></div></div></div></div>"
      },
      what: "Bringhurst's rule 2.1.6 says to letterspace all strings of capitals and small caps, and all long strings of digits. Capitals were designed as monumental forms to stand apart, not to be packed side by side in words, so a run of them set at default fit reads as a tight brick. Small caps have the same problem in miniature. Long digit strings behave the same way, since figures are drawn to a uniform width and pack too closely to scan.",
      why: "A small amount of extra space makes an acronym, a caps heading or an account number scannable. It also stops a caps line from looking like a solid black bar in a layout, which flattens the hierarchy.",
      how: [
        "Add a modest positive tracking value to any all-caps or small-caps style in your design system, and bake it into the token.",
        "Apply the same treatment to long reference numbers, sort codes and card numbers.",
        "Do not carry that tracking over to the lower-case version of the same style.",
        "Use real small caps from the font (font-variant-caps: small-caps) rather than shrunk capitals."
      ],
      example: "Compare an unspaced NASA to a lightly spaced N A S A at small sizes; the spaced version separates into three readable letterforms rather than one shape.",
      numbers: "",
      pitfall: "Setting a global tracking value on a heading style that is sometimes caps and sometimes sentence case. The sentence-case instances then look letterspaced for no reason.",
      source: "Robert Bringhurst, rule 2.1.6, and rule 3.2.2 on spaced small caps for abbreviations in running text.",
      verify: { status: "verified", note: "Both rule titles confirmed on Rutter's webtypography.net mirror of Bringhurst's rule list (2.1.6 letterspace all strings of capitals and small caps and all long strings of digits; 3.2.2 for abbreviations and acronyms in the midst of normal text, use spaced small caps)." },
      belongs: { verdict: "core", why: "A specific, testable rule from the standard reference, and one that shows up on almost every interface with acronyms or reference numbers." },
      related: [375, 396, 359, 361]
    },
    {
      n: 9377,
      title: "Text alignment (flush left, justified, centred, flush right)",
      aka: ["Setting mode", "Ragged right versus justified"],
      oneLine: "Choose how the text block meets its margins before tuning rag, rivers or hyphenation.",
      demo: {
        caption: "The same paragraph set four ways. On the right, no two lines begin in the same place.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One starting point</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Flush left</span><div class=\"db-type\" style=\"font-size:11px;text-align:left\">Every line of this paragraph has to start somewhere, and the reader relies on knowing where that is before the eye leaves the line above.</div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Justified</span><div class=\"db-type\" style=\"font-size:11px;text-align:justify\">Every line of this paragraph has to start somewhere, and the reader relies on knowing where that is before the eye leaves the line above.</div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">A new starting point each line</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Centred</span><div class=\"db-type\" style=\"font-size:11px;text-align:center\">Every line of this paragraph has to start somewhere, and the reader relies on knowing where that is before the eye leaves the line above.</div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Flush right</span><div class=\"db-type\" style=\"font-size:11px;text-align:right\">Every line of this paragraph has to start somewhere, and the reader relies on knowing where that is before the eye leaves the line above.</div></div></div></div></div></div>"
      },
      what: "There are four ways to set a block: flush left with a ragged right edge, justified to both margins, centred, and flush right. Bringhurst's rule 2.1.3 says to set ragged if ragged setting suits the text and the page, which frames it as a considered choice rather than a default. Flush left keeps every word space identical and puts the variation into the rag. Justified keeps the edges straight and puts the variation into the word spaces. Centred and flush right give the reader no consistent starting point for each line, so both suit short runs only.",
      why: "This one decision determines which problems you then have to manage. Choose justified and you inherit rivers, hyphenation and word-space control. Choose ragged and you inherit rag shaping. Choose centred for a paragraph and you inherit an unhappy reader.",
      how: [
        "Default to flush left for anything the reader has to work through, especially on screen.",
        "Justify only where you also control hyphenation and can review the result line by line.",
        "Keep centred text to short items: a title, a pull quote, a caption of a line or two."
      ],
      example: "Newspaper columns are justified because the narrow measure makes a ragged edge look tattered and the hyphenation dictionary is doing the work. A CSS-justified web paragraph with no hyphenation gets the holes without the fix.",
      numbers: "WCAG 2.2 SC 1.4.8 (level AAA) lists unjustified text as one of its five conditions for a block of text.",
      pitfall: "Centring body copy because it looks tidy in a mock with two lines of placeholder text. Add the real six-line paragraph and every line starts in a different place.",
      source: "Robert Bringhurst, rule 2.1.3; WCAG 2.2 SC 1.4.8.",
      verify: { status: "verified", note: "Rule 2.1.3 title confirmed on Rutter's webtypography.net Bringhurst mirror. The no-justification condition confirmed in the W3C Understanding SC 1.4.8 document. Added by me: see notes." },
      belongs: { verdict: "adjacent", why: "Added as a gap, and the weakest membership claim in the section. Items 378 and 380 already cover the justified and ragged cases from the inside, so the overlap is real. It earns a place because nothing else in the section covers centred or flush-right setting, and because the alignment decision is the one that determines which of the following three problems a designer inherits. Strike it if the section needs to match the master list exactly." },
      related: [378, 379, 380, 1027]
    },
    {
      n: 378,
      title: "Justification and hyphenation",
      aka: ["H and J", "Hyphenation and justification"],
      oneLine: "Justified text only works when hyphenation is on and the line breaks are chosen for the whole paragraph.",
      demo: {
        caption: "Both columns are justified. On the left the word spaces stretch into holes; on the right hyphens absorb the slack.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Hyphenation off</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" lang=\"en\" style=\"font-size:11px;text-align:justify;hyphens:none;-webkit-hyphens:none\">Justification stretches the word spaces until every line reaches both margins, so an unusually long word such as internationalisation or characteristically leaves craters behind it.</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Hyphenation on</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" lang=\"en\" style=\"font-size:11px;text-align:justify;hyphens:auto;-webkit-hyphens:auto\">Justification stretches the word spaces until every line reaches both margins, so an unusually long word such as internationalisation or characteristically leaves craters behind it.</div></div></div></div>"
      },
      what: "Justifying a column means stretching or squeezing word spaces so every line meets both margins. Without hyphenation the software has only the word spaces to play with, and one awkward long word forces huge gaps. Knuth and Plass showed in 1981 that breaking a paragraph well means treating it as a whole rather than deciding one line at a time, minimising a total badness score across all lines. Their algorithm is what TeX uses and what most serious typesetting software has copied since.",
      why: "Justified setting buys a firm, architectural page. It costs you control over word spacing, and it demands a hyphenation dictionary for the right language plus a pass by eye.",
      how: [
        "If you justify, turn hyphenation on and set the language attribute so the right dictionary is used.",
        "Set justification limits on word space, and allow only small glyph scaling if any.",
        "Follow Bringhurst's hyphenation etiquette: leave at least two characters behind, take at least three forward, and avoid more than three hyphenated lines in a row."
      ],
      example: "A book page justified in InDesign with hyphenation on looks even. The same text justified in a browser with hyphenation off shows word spaces two or three times their normal width on the awkward lines.",
      numbers: "Bringhurst: at least two characters before a hyphenated break and at least three carried forward; no more than three consecutive hyphenated line-ends. WCAG 2.2 SC 1.4.8 (level AAA) lists unjustified text as one of its conditions.",
      pitfall: "Justifying a narrow mobile column. At 30 characters a line even a good algorithm has nothing to work with, and the gaps become craters.",
      source: "Donald Knuth and Michael Plass, Breaking Paragraphs into Lines, Software: Practice and Experience 11 (1981), pages 1119-1184; Bringhurst rules 2.4.1 and 2.4.3; WCAG 2.2 SC 1.4.8.",
      verify: { status: "verified", note: "Confirmed the Knuth and Plass paper's journal, volume, year and page range via Wiley Online Library and the Gwern scan, and its whole-paragraph optimisation approach. Bringhurst hyphenation rule wordings taken from Rutter's webtypography.net mirror. WCAG condition checked in the W3C Understanding document." },
      belongs: { verdict: "core", why: "A decision every text setter makes, with a documented algorithmic basis and a well-known failure mode." },
      related: [9377, 379, 374, 1028]
    },
    {
      n: 379,
      title: "Rivers",
      aka: ["Rivers of white"],
      oneLine: "Word spaces on consecutive lines that line up into a pale channel running down the paragraph.",
      demo: {
        caption: "The same block of set lines twice. On the left the wide gaps stack into a pale channel down the middle.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Wide gaps stacked</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 79\"><rect class=\"f-mute\" x=\"6\" y=\"6\" width=\"26\" height=\"7\"/><rect class=\"f-mute\" x=\"36\" y=\"6\" width=\"28\" height=\"7\"/><rect class=\"f-mute\" x=\"72\" y=\"6\" width=\"18\" height=\"7\"/><rect class=\"f-mute\" x=\"94\" y=\"6\" width=\"22\" height=\"7\"/><rect class=\"f-mute\" x=\"120\" y=\"6\" width=\"24\" height=\"7\"/><rect class=\"f-mute\" x=\"6\" y=\"18\" width=\"20\" height=\"7\"/><rect class=\"f-mute\" x=\"30\" y=\"18\" width=\"32\" height=\"7\"/><rect class=\"f-mute\" x=\"71\" y=\"18\" width=\"16\" height=\"7\"/><rect class=\"f-mute\" x=\"91\" y=\"18\" width=\"22\" height=\"7\"/><rect class=\"f-mute\" x=\"117\" y=\"18\" width=\"27\" height=\"7\"/><rect class=\"f-mute\" x=\"6\" y=\"30\" width=\"14\" height=\"7\"/><rect class=\"f-mute\" x=\"24\" y=\"30\" width=\"16\" height=\"7\"/><rect class=\"f-mute\" x=\"44\" y=\"30\" width=\"18\" height=\"7\"/><rect class=\"f-mute\" x=\"72\" y=\"30\" width=\"22\" height=\"7\"/><rect class=\"f-mute\" x=\"98\" y=\"30\" width=\"18\" height=\"7\"/><rect class=\"f-mute\" x=\"120\" y=\"30\" width=\"24\" height=\"7\"/><rect class=\"f-mute\" x=\"6\" y=\"42\" width=\"30\" height=\"7\"/><rect class=\"f-mute\" x=\"40\" y=\"42\" width=\"22\" height=\"7\"/><rect class=\"f-mute\" x=\"71\" y=\"42\" width=\"14\" height=\"7\"/><rect class=\"f-mute\" x=\"89\" y=\"42\" width=\"26\" height=\"7\"/><rect class=\"f-mute\" x=\"119\" y=\"42\" width=\"25\" height=\"7\"/><rect class=\"f-mute\" x=\"6\" y=\"54\" width=\"18\" height=\"7\"/><rect class=\"f-mute\" x=\"28\" y=\"54\" width=\"20\" height=\"7\"/><rect class=\"f-mute\" x=\"52\" y=\"54\" width=\"10\" height=\"7\"/><rect class=\"f-mute\" x=\"72\" y=\"54\" width=\"24\" height=\"7\"/><rect class=\"f-mute\" x=\"100\" y=\"54\" width=\"16\" height=\"7\"/><rect class=\"f-mute\" x=\"120\" y=\"54\" width=\"24\" height=\"7\"/><rect class=\"f-mute\" x=\"6\" y=\"66\" width=\"24\" height=\"7\"/><rect class=\"f-mute\" x=\"34\" y=\"66\" width=\"28\" height=\"7\"/><rect class=\"f-mute\" x=\"70\" y=\"66\" width=\"20\" height=\"7\"/><rect class=\"f-mute\" x=\"94\" y=\"66\" width=\"22\" height=\"7\"/><rect class=\"f-mute\" x=\"120\" y=\"66\" width=\"24\" height=\"7\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Same gaps, offset</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 79\"><rect class=\"f-mute\" x=\"6\" y=\"6\" width=\"31\" height=\"7\"/><rect class=\"f-mute\" x=\"43\" y=\"6\" width=\"32\" height=\"7\"/><rect class=\"f-mute\" x=\"81\" y=\"6\" width=\"28\" height=\"7\"/><rect class=\"f-mute\" x=\"115\" y=\"6\" width=\"29\" height=\"7\"/><rect class=\"f-mute\" x=\"6\" y=\"18\" width=\"19\" height=\"7\"/><rect class=\"f-mute\" x=\"31\" y=\"18\" width=\"32\" height=\"7\"/><rect class=\"f-mute\" x=\"69\" y=\"18\" width=\"28\" height=\"7\"/><rect class=\"f-mute\" x=\"103\" y=\"18\" width=\"41\" height=\"7\"/><rect class=\"f-mute\" x=\"6\" y=\"30\" width=\"43\" height=\"7\"/><rect class=\"f-mute\" x=\"55\" y=\"30\" width=\"30\" height=\"7\"/><rect class=\"f-mute\" x=\"91\" y=\"30\" width=\"30\" height=\"7\"/><rect class=\"f-mute\" x=\"127\" y=\"30\" width=\"17\" height=\"7\"/><rect class=\"f-mute\" x=\"6\" y=\"42\" width=\"25\" height=\"7\"/><rect class=\"f-mute\" x=\"37\" y=\"42\" width=\"32\" height=\"7\"/><rect class=\"f-mute\" x=\"75\" y=\"42\" width=\"28\" height=\"7\"/><rect class=\"f-mute\" x=\"109\" y=\"42\" width=\"35\" height=\"7\"/><rect class=\"f-mute\" x=\"6\" y=\"54\" width=\"51\" height=\"7\"/><rect class=\"f-mute\" x=\"63\" y=\"54\" width=\"28\" height=\"7\"/><rect class=\"f-mute\" x=\"97\" y=\"54\" width=\"26\" height=\"7\"/><rect class=\"f-mute\" x=\"129\" y=\"54\" width=\"15\" height=\"7\"/><rect class=\"f-mute\" x=\"6\" y=\"66\" width=\"35\" height=\"7\"/><rect class=\"f-mute\" x=\"47\" y=\"66\" width=\"32\" height=\"7\"/><rect class=\"f-mute\" x=\"85\" y=\"66\" width=\"30\" height=\"7\"/><rect class=\"f-mute\" x=\"121\" y=\"66\" width=\"23\" height=\"7\"/></svg></div></div></div>"
      },
      what: "A river appears when the gaps between words on several stacked lines fall roughly under one another, so the eye reads a vertical white stream through the block instead of horizontal lines of text. Justified setting at a narrow measure produces them most often, because word spaces are being stretched and the stretched gaps have more chance of aligning. Ragged setting can produce them too, just less often.",
      why: "A river pulls the eye downwards while the reader is trying to move across. It is one of the clearest signs that a text block was set by machine and never looked at.",
      how: [
        "Squint at the paragraph or turn the page upside down; rivers show up when you stop reading the words.",
        "Fix them by changing the break, not the spacing: reword slightly, add a hyphenation point, or nudge the measure.",
        "Tighten justification limits so word spaces cannot stretch far enough to line up.",
        "Check the final rendered output, not the draft, because reflowing text moves every river."
      ],
      example: "Justified newspaper columns are the classic case. The measure is narrow enough that word spaces have to stretch a long way, which is why newspaper typesetting leans so hard on hyphenation.",
      numbers: "",
      pitfall: "Trying to fix a river by tracking the whole paragraph. It moves the river somewhere else and damages the texture of every other line.",
      source: "Long-standing typesetting term; discussed in the standard manuals including Bringhurst and Hochuli. No single named originator.",
      verify: { status: "verified", note: "The term and its definition are consistent across typographic references. I could not establish a first documented use, so no origin is claimed here. The mechanism (stretched word spaces in justified setting) follows directly from how justification distributes space, as described in Knuth and Plass (1981)." },
      belongs: { verdict: "core", why: "A specific, nameable defect in set text that a designer is expected to spot and fix." },
      related: [378, 374, 380]
    },
    {
      n: 380,
      title: "Rag quality",
      aka: ["Ragged edge", "Rag control"],
      oneLine: "In flush-left setting, the uneven right edge should look natural and avoid shapes, steps and stubs.",
      demo: {
        caption: "Read only the right-hand edge. The left alternates long and short, holds a flat step, then ends on a stub.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Shapes in the rag</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:6px\"><span class=\"db-bar db-bar--thin\" style=\"width:97%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:53%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:96%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:56%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:88%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:88%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:88%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:19%\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Gentle variation</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:6px\"><span class=\"db-bar db-bar--thin\" style=\"width:96%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:83%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:90%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:76%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:93%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:80%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:87%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:64%\"></span></div></div></div></div>"
      },
      what: "When text is set flush left the right-hand edge is ragged. A good rag varies gently, without long lines followed by very short ones, without three or four line-ends of nearly identical length forming a straight step, and without accidental shapes such as a wedge or a bulge. It is judged by eye, as a silhouette, and it is one of the last things a typographer adjusts.",
      why: "A jagged or patterned rag draws attention to the edge of the block and away from the words. A well-shaped rag makes a paragraph look considered even to readers who could not say why.",
      how: [
        "Read the right edge as a shape, ignoring the words.",
        "Break bad rags with a soft line break or a non-breaking space between a short word and the one after it, rather than by re-writing at random.",
        "Never leave a one- or two-letter word alone at a line end where you can avoid it.",
        "Allow occasional hyphenation in ragged setting at narrow measures; a hyphen is better than a hole."
      ],
      example: "In HTML, joining the last two words of a heading with a non-breaking space keeps them together and stops a single-word final line.",
      numbers: "",
      pitfall: "Hand-tuning the rag on a responsive page. Every break you fix at one viewport is wrong at another, so keep manual fixes for fixed-width output and headings only.",
      source: "Standard flush-left setting practice, treated in Bringhurst's rule 2.1.3 on ragged setting and in Hochuli's Detail in Typography. No single named originator for rag shaping.",
      verify: { status: "verified", note: "Rule 2.1.3 confirmed via Rutter's Bringhurst mirror. Rag shaping itself is craft convention rather than a codified principle; I found no canonical rule set and have not invented thresholds for it." },
      belongs: { verdict: "core", why: "The main quality check on the most common setting mode on screen." },
      related: [9377, 381, 379]
    },
    {
      n: 381,
      title: "Widows and orphans",
      aka: ["Runts", "Stranded lines"],
      oneLine: "Single stranded lines at the top or bottom of a column, and single words alone on a last line.",
      demo: {
        caption: "Look at the top of the right-hand column. On the left a single line has been cut off from its paragraph.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One line stranded</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--top db-row--nowrap\"><div class=\"db-col db-fill\" style=\"gap:5px\"><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span></div><div class=\"db-col db-fill\" style=\"gap:16px\"><div class=\"db-col\" style=\"gap:5px\"><span class=\"db-bar db-bar--thin\" style=\"width:58%\"></span></div><div class=\"db-col\" style=\"gap:5px\"><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\" style=\"width:64%\"></span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Two lines carried over</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--top db-row--nowrap\"><div class=\"db-col db-fill\" style=\"gap:5px\"><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span></div><div class=\"db-col db-fill\" style=\"gap:16px\"><div class=\"db-col\" style=\"gap:5px\"><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\" style=\"width:58%\"></span></div><div class=\"db-col\" style=\"gap:5px\"><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\" style=\"width:64%\"></span></div></div></div></div></div></div>"
      },
      what: "Bringhurst defines a widow as the last line of a paragraph stranded at the top of a page or column, and an orphan as the first line of a paragraph left at the bottom. He treats the widow as the real offence, since it has a past but no future, and gives the orphan a pass. Many designers use the two terms the opposite way round, and many also call a single word alone on a paragraph's last line a widow or a runt. The definitions are not standardised.",
      why: "A stranded line breaks the visual link between a paragraph and its own body, and a lone word on a final line leaves a hole that reads as an error.",
      how: [
        "In print, apply Bringhurst's rule: never begin a page with the last line of a multi-line paragraph.",
        "On the web, use text-wrap: pretty on paragraphs to reduce single-word last lines, with a plain wrap fallback.",
        "Use text-wrap: balance on headings so a two-line heading splits evenly instead of dropping one word.",
        "Bind the last two words with a non-breaking space where a specific heading keeps breaking badly."
      ],
      example: "CSS has widows and orphans properties for paged media, and text-wrap: pretty for continuous text. Firefox still does not support pretty at all, so treat both as improvements rather than guarantees.",
      numbers: "",
      pitfall: "Arguing about the terms instead of fixing the page. Agree in the team which word means which, write it down, and move on.",
      source: "Robert Bringhurst, The Elements of Typographic Style, including rule 2.4.8 (never begin a page with the last line of a multi-line paragraph). Terminology is inconsistent across the industry.",
      verify: { status: "disputed", note: "Bringhurst's definitions (widow at the top, orphan at the bottom) are confirmed, along with rule 2.4.8 from Rutter's mirror. The dispute is real: multiple typographic references and the Wikipedia entry on widows and orphans record that the two terms are used with opposite meanings by different sources, and that a lone final word is often called either. Corrected the browser support figures, which the earlier draft got wrong: per the MDN browser compatibility data, text-wrap: pretty is supported from Chrome and Edge 117 and Safari 26, and is not supported in Firefox at all. Safari 17.5 supports the text-wrap-style property and the balance value, but not pretty. text-wrap: balance, used in the how steps, is more widely available (Chrome 114, Firefox 121, Safari 17.5)." },
      belongs: { verdict: "core", why: "A standard quality check in both print and screen typography, even though the naming is a mess." },
      related: [380, 395, 1060]
    },
    {
      n: 382,
      title: "Indent versus space between paragraphs",
      aka: ["First-line indent", "Paragraph separation"],
      oneLine: "Mark a new paragraph with an indent or with space above, and never with both.",
      demo: {
        caption: "Three ways to mark a new paragraph. The third uses both signals at once, which is a wasted line of space.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--top db-row--nowrap\"><div class=\"db-fill\"><span class=\"db-tag db-tag--good\">Indent only</span><div class=\"db-col\" style=\"gap:6px\"><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\" style=\"width:62%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:88%;margin-left:12%\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\" style=\"width:55%\"></span></div></div><div class=\"db-fill\"><span class=\"db-tag db-tag--good\">Space only</span><div class=\"db-col\" style=\"gap:16px\"><div class=\"db-col\" style=\"gap:6px\"><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\" style=\"width:62%\"></span></div><div class=\"db-col\" style=\"gap:6px\"><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\" style=\"width:55%\"></span></div></div></div><div class=\"db-fill\"><span class=\"db-tag db-tag--bad\">Both at once</span><div class=\"db-col\" style=\"gap:16px\"><div class=\"db-col\" style=\"gap:6px\"><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\" style=\"width:62%\"></span></div><div class=\"db-col\" style=\"gap:6px\"><span class=\"db-bar db-bar--thin\" style=\"width:88%;margin-left:12%\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\" style=\"width:55%\"></span></div></div></div></div></div>"
      },
      what: "A paragraph needs one signal that it has started. The traditional book solution is a first-line indent of at least one en, with no extra space between paragraphs, which keeps the text column solid. The screen solution is a blank space between paragraphs and no indent, which suits scanning and short blocks. Bringhurst's rules 2.3.1 and 2.3.2 set the convention: the opening paragraph is flush left, and every paragraph after it carries an indent of at least one en.",
      why: "Using both signals at once wastes vertical space and makes the column look uncertain. Using neither makes a wall of text with no entry points.",
      how: [
        "Pick one method per document and apply it everywhere, including inside sidebars and captions.",
        "Do not indent the first paragraph after a heading or a break; there is nothing to distinguish it from.",
        "If you use indents, make them at least one en and keep them consistent with the measure; wide columns can take more.",
        "If you use space, set it once as a token so it never varies between components."
      ],
      example: "Open almost any printed novel: paragraph one after the chapter opener sits flush, and every following paragraph is indented, with no blank line anywhere.",
      numbers: "Bringhurst specifies an indent of at least one en. WCAG 2.2 SC 1.4.12 requires content to survive paragraph spacing set to 2 times the font size.",
      pitfall: "Pasting text from a word processor into a web page and getting both an indent and a margin, which is the commonest sign nobody set the styles.",
      source: "Robert Bringhurst, rules 2.3.1 and 2.3.2.",
      verify: { status: "verified", note: "Both rule titles confirmed on Rutter's webtypography.net Bringhurst mirror, including the at-least-one-en figure. WCAG paragraph spacing figure from the W3C Understanding document for 1.4.12." },
      belongs: { verdict: "core", why: "A basic, binary decision that shows up in every body of text and is very often got wrong." },
      related: [385, 392, 395]
    },
    {
      n: 383,
      title: "Drop caps and raised initials",
      aka: ["Versals", "Initial caps", "Dropped initial"],
      oneLine: "An oversized opening letter, either sunk into the text block or sitting on the first baseline.",
      demo: {
        caption: "Left, the capital sits inside the block and the lines set round it. Right, it rises above the first line.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Dropped initial</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px\"><span class=\"db-type--display\" style=\"float:left;font-size:46px;line-height:0.78;padding-right:5px\">T</span>he initial sinks into the block and the opening lines set around it, so the top edge of the paragraph stays straight and the eye is still given a way in.</div></div></div><div class=\"db-half\"><span class=\"db-tag\">Raised initial</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px\"><span class=\"db-type--display\" style=\"font-size:30px;line-height:1\">T</span>he initial sits on the baseline of the first line and rises out of the block, so the top edge steps up at the point where the text begins.</div></div></div></div>"
      },
      what: "A dropped initial sinks into the paragraph, occupying two or more lines, with the text wrapping around it. A raised initial sits on the baseline of the first line and rises above the text block. Both descend from the versals of manuscript books, where an enlarged letter marked the start of a passage in text that had no paragraph breaks.",
      why: "An initial marks an entry point and gives an article a moment of scale. It is one of the few pieces of decoration in text typography that also does a navigational job.",
      how: [
        "Align a dropped initial optically with the top of the first line's cap height, and sit its foot on a baseline of the text it displaces.",
        "Close the gap between the initial and the following characters by hand; default spacing will look loose at that size.",
        "If the first word continues in small caps after the initial, keep the transition on the same line.",
        "Use one initial per article opening, not one per section, unless the piece is deliberately decorative."
      ],
      example: "CSS has ::first-letter and the initial-letter property for sinking a capital by a set number of lines. Chrome supports it unprefixed from version 110, Safari only under the -webkit-initial-letter prefix from Safari 9, and Firefox has never shipped it, so keep a plain fallback.",
      numbers: "",
      pitfall: "Letting the initial collide with an ascender, or wrapping text so tightly around a diagonal letter such as A or W that the second and third lines look crushed.",
      source: "Manuscript versal tradition; CSS ::first-letter and initial-letter. No canonical numbered rule is cited here.",
      verify: { status: "unverified", note: "Downgraded. The earlier draft credited the setting conventions to chapter 4 of Bringhurst, and I could not confirm that from any source I could reach, so the attribution has been removed rather than repeated. The alignment guidance (optical alignment to cap height, foot resting on a text baseline) is standard teaching material with no named originator. The verifiable part is the CSS: initial-letter support figures taken from the MDN browser compatibility data, which records Chrome 110 unprefixed, Safari 9 prefixed as -webkit-initial-letter with the unprefixed property still open as WebKit bug 229090, and no Firefox support." },
      belongs: { verdict: "core", why: "A named editorial device with specific alignment rules that a designer is expected to know." },
      related: [384, 395, 359]
    },
    {
      n: 384,
      title: "Baseline grid and cross-alignment",
      aka: ["Baseline alignment", "Text grid"],
      oneLine: "Lock every line of text in a layout to a shared set of baselines so columns align across the page.",
      demo: {
        caption: "Faint rules run at one fixed interval. On the right both columns land on them; on the left the wider one drifts.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Second column off the interval</span><div class=\"db-stage db-stage--tight\"><div class=\"db-baseline\"><div class=\"db-row db-row--top db-row--nowrap\"><div class=\"db-col db-fill\" style=\"gap:19px;margin-top:19px\"><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span></div><div class=\"db-col db-fill\" style=\"gap:33px;margin-top:19px\"><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Second column on a multiple</span><div class=\"db-stage db-stage--tight\"><div class=\"db-baseline\"><div class=\"db-row db-row--top db-row--nowrap\"><div class=\"db-col db-fill\" style=\"gap:19px;margin-top:19px\"><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span></div><div class=\"db-col db-fill\" style=\"gap:43px;margin-top:19px\"><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span></div></div></div></div></div></div>"
      },
      what: "A baseline grid is a set of evenly spaced horizontal lines, usually derived from the leading of the body text, that all text sits on. Müller-Brockmann's Grid Systems in Graphic Design (1981) derives all vertical spacing decisions from the leading of the base text, which removes hundreds of arbitrary judgements. Cross-alignment is the payoff: two adjacent columns at different type sizes still share baselines at regular intervals, so the page reads as one structure.",
      why: "It gives a multi-column page visible order, and it turns vertical spacing into arithmetic rather than taste. It also makes the layout auditable, since anything out of alignment is a measurable error.",
      how: [
        "Set the grid interval to the body leading, then make every other vertical measurement a whole multiple of it.",
        "Choose heading sizes whose line heights are also multiples of the interval, so headings return the text to the grid.",
        "Cross-align sidebars and captions at some interval even if they cannot match every line.",
        "Accept controlled exceptions for images and rules rather than forcing everything onto the grid."
      ],
      example: "In InDesign, Align to Baseline Grid forces every line onto the document grid; set the grid increment to the body leading and heading spacing has to be chosen in multiples of it.",
      numbers: "",
      pitfall: "Applying it to a page whose content is mostly images and cards, where the grid buys nothing and quietly forces ugly gaps above every heading.",
      source: "Josef Müller-Brockmann, Grid Systems in Graphic Design (1981); standard Swiss typographic practice.",
      verify: { status: "verified", note: "Confirmed the book and its central method (deriving all vertical spacing from the leading of the base text) from multiple summaries of Grid Systems. I looked for, and could not confirm, the often-repeated claim that baseline grids originate in back-to-back register or show-through on thin paper, so that explanation is not given here." },
      belongs: { verdict: "core", why: "A defining technique of the Swiss school and still the basis of spacing scales in design systems." },
      related: [385, 373, 410, 1017]
    },
    {
      n: 385,
      title: "Vertical rhythm",
      aka: ["Compose to a vertical rhythm"],
      oneLine: "Keeping the vertical spacing of a page on a single repeating interval so text descends at an even pace.",
      demo: {
        caption: "Same blocks both sides. The right paces every gap on one unit, so the page steps down at a constant rate.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Gaps of 9, 27, 6, 19, 11</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:0\"><span class=\"db-bar db-bar--tall db-bar--ink\" style=\"width:52%\"></span><div class=\"db-lines\" style=\"margin-top:9px\"><i></i><i></i><i></i></div><span class=\"db-bar db-bar--tall db-bar--ink\" style=\"width:44%;margin-top:27px\"></span><div class=\"db-lines\" style=\"margin-top:6px\"><i></i><i></i><i></i></div><span class=\"db-bar db-bar--tall db-bar--ink\" style=\"width:58%;margin-top:19px\"></span><div class=\"db-lines\" style=\"margin-top:11px\"><i></i><i></i></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Gaps of 12, 24, 12, 24, 12</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:0\"><span class=\"db-bar db-bar--tall db-bar--ink\" style=\"width:52%\"></span><div class=\"db-lines\" style=\"margin-top:12px\"><i></i><i></i><i></i></div><span class=\"db-bar db-bar--tall db-bar--ink\" style=\"width:44%;margin-top:24px\"></span><div class=\"db-lines\" style=\"margin-top:12px\"><i></i><i></i><i></i></div><span class=\"db-bar db-bar--tall db-bar--ink\" style=\"width:58%;margin-top:24px\"></span><div class=\"db-lines\" style=\"margin-top:12px\"><i></i><i></i></div></div></div></div></div>"
      },
      what: "Vertical rhythm is the goal a baseline grid serves: as the reader moves down the page, the spacing repeats at a consistent interval, so headings, paragraphs, lists and images all fall into the same measure. On the web the idea was popularised by Richard Rutter's article Compose to a Vertical Rhythm (24 ways, December 2006), which sets font size, line height and margins so they all resolve to one unit.",
      why: "It removes arbitrary spacing decisions and gives a long document a steady feel. In a design system it is the reason spacing tokens are multiples of one base number rather than a pile of one-off values.",
      how: [
        "Pick one base unit, usually the body line height, and derive every margin and padding from it.",
        "Give headings a line height that is a whole multiple of the unit.",
        "Handle images and embeds by setting their container height in units, not by hoping they fit.",
        "Accept that the rhythm will break somewhere; decide in advance which elements are allowed to break it."
      ],
      example: "A 16px body on a 24px line height with all vertical spacing in 24px multiples is the standard web implementation of the idea.",
      numbers: "",
      pitfall: "Chasing strict baseline alignment on the web, where variable image heights, form controls and third-party embeds break it constantly. The discipline of one spacing unit is worth keeping; the pixel-perfect baseline lock usually is not.",
      source: "Print typographic practice; on the web, Richard Rutter, Compose to a Vertical Rhythm, 24 ways, 12 December 2006.",
      verify: { status: "disputed", note: "Rechecked the article on 24ways.org: written by Richard Rutter, published 12 December 2006, not A List Apart as it is often miscited. The concept is real and widely taught. What is disputed is the benefit: I found no study demonstrating that strict baseline alignment improves reading, and the web design community has argued about its practical value since the mid-2000s. Treat the single-unit spacing scale as the defensible part." },
      belongs: { verdict: "core", why: "It is the reasoning behind every spacing scale in modern design systems, even where the strict baseline grid is abandoned." },
      related: [384, 373, 765, 1017]
    },
    {
      n: 386,
      title: "Optical margin alignment (hanging punctuation)",
      aka: ["Hung punctuation", "Optical margin alignment"],
      oneLine: "Push quote marks, hyphens and full points slightly outside the margin so the edge looks straight.",
      demo: {
        caption: "Compare the start of the first line with the lines below it. On the right the quote mark hangs outside.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Mark inside the margin</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:14px\">&ldquo;An opening mark carries less weight than a letter, so a line that is mathematically flush still looks pushed in.&rdquo;</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Mark hung outside</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:14px;text-indent:-0.42em\">&ldquo;An opening mark carries less weight than a letter, so a line that is mathematically flush still looks pushed in.&rdquo;</div></div></div></div>"
      },
      what: "Punctuation carries less visual weight than a letter, so a line beginning with an opening quote mark or ending with a hyphen looks indented even when it is mathematically flush. Hanging the punctuation into the margin corrects the illusion. Gutenberg was doing it in the 42-line Bible, where hyphens jut out to the right of the columns. Adobe InDesign has shipped the feature as Optical Margin Alignment since its first release in 1999.",
      why: "It makes a text block read as a clean rectangle. Combined with optical alignment elsewhere, it is a large part of why professionally set pages look settled and amateur ones look slightly loose.",
      how: [
        "Turn on Optical Margin Alignment in InDesign for body text, then check large pull quotes separately.",
        "For a single large opening quotation mark, hang it manually with a negative indent.",
        "On the web, CSS has hanging-punctuation, but only Safari implements it, and only partly. Chrome, Edge and Firefox have never shipped it, so use a negative text-indent as the practical fallback.",
        "Hang hyphens and full points as well as quote marks; the hyphen at a justified line-end is the most visible offender."
      ],
      example: "A pull quote starting with a large curly opening quote looks indented if left flush. Pull it left by roughly the width of the mark and the first letter lines up with the text below.",
      numbers: "",
      pitfall: "Hanging punctuation on a block that sits hard against a container edge, so the marks now overlap a background colour boundary or get clipped.",
      source: "Gutenberg Bible practice; Adobe InDesign, Optical Margin Alignment (1999); CSS Text Module Level 3, hanging-punctuation.",
      verify: { status: "verified", note: "The Gutenberg Bible attribution rests on the standard reference literature on optical margin alignment rather than on an examination of the book, so it is given as received history. The 31 August 1999 ship date for InDesign 1.0 is the release date given in the infobox of the Wikipedia article on Adobe InDesign. Adobe's own twenty-years-of-InDesign post is no longer reachable, so Optical Margin Alignment in version 1.0 is confirmed instead from contemporary reviews of InDesign 1.0, which describe the feature by name. Browser support rechecked against Can I Use: hanging-punctuation is partial in Safari from version 10 and unsupported in Chrome, Edge and Firefox in every version to date." },
      belongs: { verdict: "core", why: "A named, implemented feature in professional tools and one of the clearest examples of optical over mathematical alignment." },
      related: [387, 151, 388]
    },
    {
      n: 387,
      title: "Hanging bullets and indents",
      aka: ["Hanging indent", "Outdent"],
      oneLine: "Set the bullet or number outside the text block so every line of the item aligns with the first.",
      demo: {
        caption: "Look at where the second line of each item starts. On the right it lines up with the first line.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Runover returns to the margin</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-type\" style=\"font-size:12px\"><span style=\"display:inline-block;width:1.1em\">&bull;</span>The marker sits inside the text column, so the runover lines slide back underneath it.</div><div class=\"db-type\" style=\"font-size:12px\"><span style=\"display:inline-block;width:1.1em\">&bull;</span>The text now has two different left edges and the markers disappear into the block.</div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Runover aligns with line one</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-type\" style=\"font-size:12px;padding-left:1.1em;text-indent:-1.1em\"><span style=\"display:inline-block;width:1.1em\">&bull;</span>The marker hangs outside the text column, so every line of the item starts at the same place.</div><div class=\"db-type\" style=\"font-size:12px;padding-left:1.1em;text-indent:-1.1em\"><span style=\"display:inline-block;width:1.1em\">&bull;</span>The text keeps one clean left edge and the markers stay visible in a column of their own.</div></div></div></div></div>"
      },
      what: "In a hanging indent the marker (a bullet, a number, a term) sits to the left of the text column and the runover lines align with the first line of text rather than with the marker. It applies to bulleted lists, numbered lists, glossaries, bibliographies and dialogue. The alternative, where runover lines return all the way to the marker, makes the marker disappear into the paragraph.",
      why: "The hanging arrangement keeps a clean left edge for the text, so the reader can scan the items without the markers interrupting, while the markers stay visible as a separate column of their own.",
      how: [
        "In CSS, keep list-style-position at its default of outside; setting it to inside destroys the hang.",
        "For custom markers, use a two-column layout (grid or flex) so wrapping text cannot slip under the marker.",
        "Align numbers in a numbered list on their right-hand digit so 9 and 10 do not shift the text column.",
        "Give the gap between marker and text a token value so every list in the product matches."
      ],
      example: "Bibliographies in academic styles use a hanging indent for exactly this reason: the author surname stays exposed at the left edge and the rest of the entry sits in a tidy block.",
      numbers: "",
      pitfall: "Building lists out of paragraphs with a typed bullet character. The runover lines return to the margin, the hang is lost, and screen readers no longer announce a list.",
      source: "Long-standing typesetting convention; the hanging arrangement is the default rendering of HTML lists (CSS list-style-position: outside).",
      verify: { status: "verified", note: "Confirmed that outside is the initial value of CSS list-style-position, producing a hanging indent. The typographic rule itself is craft convention with no single named originator, and I have not invented one." },
      belongs: { verdict: "core", why: "A specific alignment rule with a visible failure mode, applied dozens of times in any real document or interface." },
      related: [393, 386, 394]
    },
    {
      n: 388,
      title: "Punctuation spacing",
      aka: ["Sentence spacing", "Spacing around marks"],
      oneLine: "One word space after a full point, no space before most marks, and language rules where they differ.",
      demo: {
        caption: "Same sentences, same measure. Only the gap after each full point has changed, and the left column is full of holes.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Two spaces after the point</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px\">Set it once.&nbsp; Check it twice.&nbsp; A full point has already stopped the line.&nbsp; A second space stops it again.&nbsp; The holes stack down the column.&nbsp; Most readers cannot name the fault.</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One space after the point</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px\">Set it once. Check it twice. A full point has already stopped the line. A second space stops it again. The holes stack down the column. Most readers cannot name the fault.</div></div></div></div>"
      },
      what: "In professional English typesetting a single word space follows a full point; the double space is a typewriter habit from monospaced machines where sentence ends were hard to see. Bringhurst's rule 2.1.4 says to use a single word space between sentences, and 2.1.5 says to add little or no space within strings of initials. Other languages differ: French sets a non-breaking space before the colon and French quotation marks, and a thin non-breaking space before the semicolon, exclamation mark and question mark.",
      why: "Consistent punctuation spacing is most of what makes text look professionally set. Inconsistent spacing shows up as flicker along the line even to readers who cannot name the fault.",
      how: [
        "Search and replace double spaces after full points before any text goes into layout.",
        "Set the language attribute on your text so tools apply the right punctuation spacing.",
        "For French copy, use the correct non-breaking and thin non-breaking spaces rather than an ordinary space, which will break at a line end.",
        "Use non-breaking spaces to hold short numerical expressions together (Bringhurst's rule 2.4.6)."
      ],
      example: "Butterick's Practical Typography states the rule as always exactly one space between sentences, and lists double spacing among typewriter habits to drop.",
      numbers: "",
      pitfall: "Assuming the double-space question is settled by science. Johnson, Bui and Schmitt (2018) found a small eye-movement benefit for two spaces, but their text was set in Courier New, a monospaced face, so the result does not transfer to proportional type. Comprehension was unaffected either way.",
      source: "Robert Bringhurst, rules 2.1.4, 2.1.5 and 2.4.6; Matthew Butterick, Practical Typography; Lexique des regles typographiques en usage a l'Imprimerie nationale for French spacing.",
      verify: { status: "disputed", note: "The single-space rule is confirmed in both Bringhurst (rule 2.1.4, via Rutter's mirror) and Butterick's one-space-between-sentences page. The disputed part is the popular reporting of Johnson, Bui and Schmitt, Are two spaces better than one?, Attention, Perception and Psychophysics 80, 2018, 1504-1511. The full paper is paywalled and SpringerLink would not open for me, so this rests on the published abstract: comprehension was not affected by punctuation spacing, the eye-movement record suggested initial processing was facilitated when periods were followed by two spaces, and those who type two spaces showed the greatest facilitation. The setting details, 14 point Courier New with quadruple line spacing, are quoted from the paper's method by Butterick on his Are two spaces better than one? page. That is a monospaced face at unnatural leading, so the result does not transfer to proportional setting. French spacing rules confirmed against descriptions of the Imprimerie nationale lexique." },
      belongs: { verdict: "core", why: "Basic setting hygiene, and one of the few areas where the popular version of the evidence is misreported." },
      related: [374, 401, 402, 367]
    },
    {
      n: 389,
      title: "Footnotes, sidenotes and marginalia",
      aka: ["Marginal notes", "Endnotes"],
      oneLine: "Secondary text placed at the foot of the page, in the margin, or collected at the end.",
      demo: {
        caption: "The accent line is the distance from the reference mark to the note: down the page, across the margin, or gone.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 132\"><rect class=\"s-mute\" x=\"8\" y=\"14\" width=\"96\" height=\"98\"/><rect class=\"f-mute\" x=\"16\" y=\"24\" width=\"80\" height=\"4\"/><rect class=\"f-mute\" x=\"16\" y=\"32\" width=\"64\" height=\"4\"/><rect class=\"f-mute\" x=\"16\" y=\"40\" width=\"80\" height=\"4\"/><rect class=\"f-mute\" x=\"16\" y=\"48\" width=\"80\" height=\"4\"/><rect class=\"f-mute\" x=\"16\" y=\"56\" width=\"72\" height=\"4\"/><rect class=\"f-mute\" x=\"16\" y=\"64\" width=\"80\" height=\"4\"/><rect class=\"f-mute\" x=\"16\" y=\"72\" width=\"46\" height=\"4\"/><circle class=\"f-accent\" cx=\"86\" cy=\"34\" r=\"2.4\"/><path class=\"s-accent\" d=\"M86 39 C 92 66, 62 78, 24 90\"/><path class=\"s-mute\" d=\"M16 84 H 46\"/><circle class=\"f-accent\" cx=\"18\" cy=\"93\" r=\"1.8\"/><rect class=\"f-mute\" x=\"23\" y=\"91\" width=\"73\" height=\"3\"/><rect class=\"f-mute\" x=\"16\" y=\"98\" width=\"52\" height=\"3\"/><text class=\"t\" style=\"font-size:6px\" x=\"56\" y=\"126\" text-anchor=\"middle\">footnote</text><rect class=\"s-mute\" x=\"122\" y=\"14\" width=\"96\" height=\"98\"/><rect class=\"f-mute\" x=\"130\" y=\"24\" width=\"46\" height=\"4\"/><rect class=\"f-mute\" x=\"130\" y=\"32\" width=\"36\" height=\"4\"/><rect class=\"f-mute\" x=\"130\" y=\"40\" width=\"46\" height=\"4\"/><rect class=\"f-mute\" x=\"130\" y=\"48\" width=\"46\" height=\"4\"/><rect class=\"f-mute\" x=\"130\" y=\"56\" width=\"46\" height=\"4\"/><rect class=\"f-mute\" x=\"130\" y=\"64\" width=\"46\" height=\"4\"/><rect class=\"f-mute\" x=\"130\" y=\"72\" width=\"28\" height=\"4\"/><circle class=\"f-accent\" cx=\"171\" cy=\"34\" r=\"2.4\"/><path class=\"s-accent\" d=\"M174 34 H 181\"/><rect class=\"f-mute\" x=\"184\" y=\"30\" width=\"26\" height=\"3\"/><rect class=\"f-mute\" x=\"184\" y=\"37\" width=\"20\" height=\"3\"/><text class=\"t\" style=\"font-size:6px\" x=\"170\" y=\"126\" text-anchor=\"middle\">sidenote</text><rect class=\"s-mute\" x=\"236\" y=\"14\" width=\"96\" height=\"98\"/><rect class=\"f-mute\" x=\"244\" y=\"24\" width=\"80\" height=\"4\"/><rect class=\"f-mute\" x=\"244\" y=\"32\" width=\"54\" height=\"4\"/><rect class=\"f-mute\" x=\"244\" y=\"40\" width=\"80\" height=\"4\"/><rect class=\"f-mute\" x=\"244\" y=\"48\" width=\"80\" height=\"4\"/><rect class=\"f-mute\" x=\"244\" y=\"56\" width=\"72\" height=\"4\"/><rect class=\"f-mute\" x=\"244\" y=\"64\" width=\"80\" height=\"4\"/><rect class=\"f-mute\" x=\"244\" y=\"72\" width=\"46\" height=\"4\"/><circle class=\"f-accent\" cx=\"303\" cy=\"34\" r=\"2.4\"/><path class=\"s-accent\" d=\"M303 39 C 303 74, 314 96, 324 113\"/><text class=\"t\" style=\"font-size:6px\" x=\"284\" y=\"126\" text-anchor=\"middle\">endnote, page 240</text></svg></div>"
      },
      what: "A footnote sits at the foot of the page it belongs to. A sidenote sits in the outer margin, level with its reference, so the reader's eye moves sideways instead of down. A margin note is a sidenote without a reference number. An endnote is banished to the back of the document. Edward Tufte's books use generous outer margins for sidenotes and small figures, and the Tufte CSS project reproduces that arrangement for the web.",
      why: "Placement decides whether the note gets read. A sidenote is read almost automatically; an endnote is read almost never. Choosing between them is a decision about how important the aside really is.",
      how: [
        "Use sidenotes where you have the margin for them and the note genuinely helps in place.",
        "Keep footnote markers small and superior, and set the note itself a size or two down with tighter leading.",
        "On narrow screens, collapse sidenotes to inline expandable notes rather than pushing them to the page end.",
        "If a note is longer than a couple of sentences, ask whether it belongs in the main text."
      ],
      example: "Tufte CSS puts numbered sidenotes in the right margin on wide viewports and turns them into tappable inline notes on small screens.",
      numbers: "",
      pitfall: "Numbering footnotes per document in a long piece, so the reader is hunting for note 147. Restart numbering per chapter or per page.",
      source: "Book typography convention; the sidenote treatment is associated with Edward Tufte's own books and documented in the Tufte CSS project.",
      verify: { status: "verified", note: "Confirmed the Tufte CSS documentation describing sidenotes, margin notes and their behaviour on small viewports, where marginal elements are hidden until the reader toggles them into view. That page names The Visual Display of Quantitative Information, Visual Explanations and Beautiful Evidence as the print precedent. I did not verify a passage in any of Tufte's books prescribing sidenotes, so no page or quote is claimed." },
      belongs: { verdict: "core", why: "A real editorial typographic decision with different reading outcomes for each option." },
      related: [391, 362, 390]
    },
    {
      n: 390,
      title: "Running heads and folios",
      aka: ["Headers and page numbers", "Drop folio"],
      oneLine: "The repeating page-top line and the page number that tell a reader where they are in a document.",
      demo: {
        caption: "One spread. Both page numbers sit at the outer edges, and the running head changes from book title to chapter.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 142\"><rect class=\"s-mute\" x=\"18\" y=\"12\" width=\"140\" height=\"116\"/><rect class=\"s-mute\" x=\"170\" y=\"12\" width=\"140\" height=\"116\"/><path class=\"s-accent\" d=\"M18 18 V 34\"/><path class=\"s-accent\" d=\"M310 18 V 34\"/><text class=\"t\" style=\"font-size:5px\" x=\"26\" y=\"27\">12</text><text class=\"t\" style=\"font-size:5px\" x=\"38\" y=\"27\">DETAIL IN TYPOGRAPHY</text><text class=\"t\" style=\"font-size:5px\" x=\"302\" y=\"27\" text-anchor=\"end\">13</text><text class=\"t\" style=\"font-size:5px\" x=\"290\" y=\"27\" text-anchor=\"end\">3 WORD SPACES</text><rect class=\"f-mute\" x=\"28\" y=\"46\" width=\"120\" height=\"4\"/><rect class=\"f-mute\" x=\"28\" y=\"56\" width=\"120\" height=\"4\"/><rect class=\"f-mute\" x=\"28\" y=\"66\" width=\"120\" height=\"4\"/><rect class=\"f-mute\" x=\"28\" y=\"76\" width=\"120\" height=\"4\"/><rect class=\"f-mute\" x=\"28\" y=\"86\" width=\"120\" height=\"4\"/><rect class=\"f-mute\" x=\"28\" y=\"96\" width=\"120\" height=\"4\"/><rect class=\"f-mute\" x=\"28\" y=\"106\" width=\"74\" height=\"4\"/><rect class=\"f-mute\" x=\"180\" y=\"46\" width=\"120\" height=\"4\"/><rect class=\"f-mute\" x=\"180\" y=\"56\" width=\"120\" height=\"4\"/><rect class=\"f-mute\" x=\"180\" y=\"66\" width=\"120\" height=\"4\"/><rect class=\"f-mute\" x=\"180\" y=\"76\" width=\"120\" height=\"4\"/><rect class=\"f-mute\" x=\"180\" y=\"86\" width=\"120\" height=\"4\"/><rect class=\"f-mute\" x=\"180\" y=\"96\" width=\"120\" height=\"4\"/><rect class=\"f-mute\" x=\"180\" y=\"106\" width=\"74\" height=\"4\"/><text class=\"t\" style=\"font-size:6px\" x=\"88\" y=\"139\" text-anchor=\"middle\">verso</text><text class=\"t\" style=\"font-size:6px\" x=\"164\" y=\"139\" text-anchor=\"middle\">gutter</text><text class=\"t\" style=\"font-size:6px\" x=\"240\" y=\"139\" text-anchor=\"middle\">recto</text></svg></div>"
      },
      what: "A running head is the small repeated line at the top of a page carrying, typically, the book title on the verso (left) page and the chapter title on the recto (right). A folio is the page number. Common placements are top outer corners, or at the foot as a drop folio. The Chicago Manual of Style's conventions include placing folios flush left on verso and flush right on recto, and omitting the running head on chapter opening pages, which usually take a drop folio or none at all.",
      why: "These are the wayfinding furniture of a long document. They let a reader who opens the book in the middle work out where they are in about a second, and they let anyone cite a page.",
      how: [
        "Set running heads and folios smaller and lighter than body text; they are signposts, not content.",
        "Suppress the running head on chapter openers, part titles and full-bleed pages.",
        "Put the folio where a thumb can find it when flipping: outer edge, top or bottom.",
        "In digital documents, carry the same idea into a sticky section label rather than dropping it altogether."
      ],
      example: "Open any well-set non-fiction book at random: the left page carries the book title, the right carries the chapter, and both carry a page number at the outer edge.",
      numbers: "",
      pitfall: "Letting a long chapter title wrap in the running head. Shorten it for the head rather than allowing two lines at the top of the page.",
      source: "Book typography convention, codified in The Chicago Manual of Style.",
      verify: { status: "verified", note: "Confirmed the folio placement convention (flush left verso, flush right recto, or drop folio) and the omission of running heads on chapter openers from Chicago Manual of Style guidance and book-design references. I did not cite specific CMOS paragraph numbers because I could only see them second hand." },
      belongs: { verdict: "core", why: "Standard editorial furniture with clear rules, and the print ancestor of persistent navigation labels on screen." },
      related: [389, 391, 395]
    },
    {
      n: 391,
      title: "Captions and credits",
      aka: ["Cutlines", "Photo credits"],
      oneLine: "Short text tied to an image, set to read as a different voice from the body copy.",
      demo: {
        caption: "The same caption twice. On the right it is smaller, in another face, and pinned to the image left edge.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Caption in the body voice</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-block\" style=\"height:34px\"></div><div class=\"db-type\" style=\"font-size:12px;text-align:center\">The plant room, 1974.</div><div class=\"db-type\" style=\"font-size:12px\">The article carries on here, at the size the caption also uses, so the two run together.</div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Caption subordinate, credit smaller again</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-block\" style=\"height:34px\"></div><div class=\"db-type db-type--mono\" style=\"font-size:9px\">The plant room, 1974. <span class=\"db-note\">County archive</span></div><div class=\"db-type\" style=\"font-size:12px\">The article carries on here, and the caption reads as another voice before you have read a word of it.</div></div></div></div></div>"
      },
      what: "A caption explains or extends an image; a credit names the source. Both need to be visibly subordinate to body text and visibly attached to the right image. The usual devices are a smaller size, a different style (italic, or the sans companion to a serif body), tighter leading, and a consistent position relative to the image. Credits are usually smaller again, sometimes set vertically along the image edge.",
      why: "Editors have long held that captions are among the most-read text on a page, on the reasoning that readers look at pictures first and then read whatever sits next to them. Whether or not the claim survives measurement, treating captions as an afterthought wastes words the reader is very likely to reach.",
      how: [
        "Fix one caption position (below-left is the safe default) and keep it everywhere.",
        "Keep the caption measure equal to or narrower than the image width so the pairing is unambiguous.",
        "Set credits at a smaller size than captions, with a consistent format for the source name.",
        "Write captions that add information rather than repeating the alt text or the nearby heading."
      ],
      example: "Newspaper picture captions, sometimes called cutlines, are conventionally set in a face that contrasts with the body so the reader knows instantly they are not reading the article.",
      numbers: "",
      pitfall: "Centring a short caption under a wide image. It floats, and with two images side by side the reader cannot tell which caption belongs to which.",
      source: "Editorial and book-design convention. No single named originator.",
      verify: { status: "unverified", note: "I looked for a canonical typographic source for caption setting in Bringhurst's numbered rule list and in Hochuli's published contents (the reading process, the letter, the word, the line, numerals, emphasis, linespacing and the column, the qualities of type) and found none that covers captions directly. The guidance here is standard editorial practice, stated as such, with no invented attribution. The claim that captions are among the most-read text on a page is repeated widely in editorial handbooks but I found no study to support it, so it is offered as trade lore rather than a measured finding." },
      belongs: { verdict: "core", why: "A distinct text role with its own setting rules, and one that gets treated as an afterthought far more often than it should." },
      related: [389, 477, 488]
    },
    {
      n: 392,
      title: "Block quotes",
      aka: ["Extracts", "Displayed quotations"],
      oneLine: "Quoted matter set apart from the running text by indent, space and often a size change.",
      demo: {
        caption: "The same quotation. On the right, space above and below plus an indent do the job the quote marks were doing.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Marks doing all the work</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px\"><p>The report opens with the usual framing, then quotes the committee at length.</p><p>&ldquo;The evidence we heard was consistent on this point, and no witness argued otherwise, although several asked for more time.&rdquo;</p><p>The chapter then returns to the author&rsquo;s own argument.</p></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Set apart, marks dropped</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px\"><p>The report opens with the usual framing, then quotes the committee at length.</p><p style=\"margin:12px 0 4px 18px\">The evidence we heard was consistent on this point, and no witness argued otherwise, although several asked for more time.</p><p class=\"db-note\" style=\"margin:0 0 12px 18px\">Select committee, 2019</p><p>The chapter then returns to the author&rsquo;s own argument.</p></div></div></div></div>"
      },
      what: "A block quote (also called an extract) is a quotation long enough to be set as its own block rather than run into a sentence with quote marks. Bringhurst's rule 2.3.3 says to add extra lead before and after block quotations, and 2.3.4 says to indent or centre verse quotations. Because the block is already marked out by position, it does not also need quotation marks. A pull quote is a different thing: a phrase lifted from the article and enlarged as a display element, which does keep its own styling logic.",
      why: "Setting the quote apart tells the reader instantly that the voice has changed, without them having to track opening and closing marks across several lines.",
      how: [
        "Indent the block, add space above and below, and drop the quotation marks.",
        "Reduce the size slightly if you like, but keep the leading comfortable; small size plus tight leading makes quotes look punished.",
        "Attribute below the block, in a smaller or lighter style, with a consistent dash or format.",
        "Never confuse the block quote style with the pull quote style; a reader who mistakes a pull quote for a source quotation has been misled."
      ],
      example: "In HTML, blockquote with a cite attribute carries the semantics; the indent and spacing are the visual half of the same signal.",
      numbers: "",
      pitfall: "Using blockquote markup for anything you want indented. It tells assistive technology that the content is a quotation when it is not.",
      source: "Robert Bringhurst, rules 2.3.3 and 2.3.4.",
      verify: { status: "verified", note: "Both rule titles confirmed on Rutter's webtypography.net Bringhurst mirror. The distinction between an extract and a pull quote is standard editorial usage." },
      belongs: { verdict: "core", why: "A named text role with a canonical setting rule from the standard reference." },
      related: [382, 393, 686]
    },
    {
      n: 393,
      title: "Lists",
      aka: ["Bulleted and numbered lists", "Definition lists"],
      oneLine: "Sequences of parallel items set with markers, hanging indents and their own spacing.",
      demo: {
        caption: "The same five things. On the right each one is a separate object the eye can count, leave and come back to.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Run on as one sentence</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px\">Bring a passport, the printed booking reference, proof of insurance, the vehicle registration document and a payment card in the driver&rsquo;s own name.</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Set as a list</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-type\" style=\"font-size:12px\">Bring:</div><div class=\"db-row db-row--top db-row--nowrap\" style=\"gap:8px\"><span class=\"db-dot db-dot--sm\" style=\"margin-top:5px\"></span><span class=\"db-type\" style=\"font-size:12px\">Passport</span></div><div class=\"db-row db-row--top db-row--nowrap\" style=\"gap:8px\"><span class=\"db-dot db-dot--sm\" style=\"margin-top:5px\"></span><span class=\"db-type\" style=\"font-size:12px\">Printed booking reference</span></div><div class=\"db-row db-row--top db-row--nowrap\" style=\"gap:8px\"><span class=\"db-dot db-dot--sm\" style=\"margin-top:5px\"></span><span class=\"db-type\" style=\"font-size:12px\">Proof of insurance</span></div><div class=\"db-row db-row--top db-row--nowrap\" style=\"gap:8px\"><span class=\"db-dot db-dot--sm\" style=\"margin-top:5px\"></span><span class=\"db-type\" style=\"font-size:12px\">Vehicle registration document</span></div><div class=\"db-row db-row--top db-row--nowrap\" style=\"gap:8px\"><span class=\"db-dot db-dot--sm\" style=\"margin-top:5px\"></span><span class=\"db-type\" style=\"font-size:12px\">Payment card in the driver&rsquo;s own name</span></div></div></div></div></div>"
      },
      what: "Lists come in three basic kinds: unordered (bullets, where sequence does not matter), ordered (numbers or letters, where it does), and description or definition lists (a term with its explanation). Typographically each needs a marker column, a hanging indent, item spacing that is smaller than paragraph spacing but larger than line spacing, and parallel grammatical structure in the writing.",
      why: "A list converts a run-on sentence into scannable units. That is a real gain for a reader skimming, and the reason so much interface copy is set as lists.",
      how: [
        "Use ordered lists only where the order carries meaning; a numbered list implies steps or ranking.",
        "Set item spacing between the line height and the paragraph spacing, so items group as one block.",
        "Keep bullets small; a bullet at full text weight competes with the words.",
        "Use real list markup so the count is announced to screen reader users, and so the hanging indent comes for free."
      ],
      example: "A recipe method is an ordered list because step three depends on step two. A list of ingredients is unordered because it does not.",
      numbers: "",
      pitfall: "Nesting three or four levels deep. Past two levels the marker hierarchy stops being readable and the content wants a table or separate headings instead.",
      source: "Editorial convention plus HTML list semantics (ul, ol, dl). No single named typographic originator.",
      verify: { status: "verified", note: "I checked the HTML list element semantics and the CSS default hanging indent, which are the verifiable parts. I found no canonical typographic rule set for list setting comparable to Bringhurst's numbered rules, and have not invented one. Spacing advice here is stated as convention." },
      belongs: { verdict: "core", why: "A distinct text structure with its own spacing and alignment rules, used constantly in both editorial and interface work." },
      related: [387, 671, 672]
    },
    {
      n: 394,
      title: "Table typography",
      aka: ["Tabular setting", "Data tables"],
      oneLine: "Numbers right-aligned on the decimal, text left-aligned, and as few rules as the table can survive.",
      demo: {
        caption: "Read down the number column. Fixed decimal places and tabular figures line up the points and the final digits.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Left aligned, decimals as they came</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:12px\">North</span><span class=\"db-type db-type--mono\" style=\"font-size:12px;width:80px\">1,204.5</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:12px\">Midlands</span><span class=\"db-type db-type--mono\" style=\"font-size:12px;width:80px\">98.75</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:12px\">South</span><span class=\"db-type db-type--mono\" style=\"font-size:12px;width:80px\">12</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:12px\">Wales</span><span class=\"db-type db-type--mono\" style=\"font-size:12px;width:80px\">7,310.25</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Right aligned, tabular, two places</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:12px\">North</span><span class=\"db-type db-type--mono\" style=\"font-size:12px;width:80px;text-align:right;font-variant-numeric:tabular-nums\">1,204.50</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:12px\">Midlands</span><span class=\"db-type db-type--mono\" style=\"font-size:12px;width:80px;text-align:right;font-variant-numeric:tabular-nums\">98.75</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:12px\">South</span><span class=\"db-type db-type--mono\" style=\"font-size:12px;width:80px;text-align:right;font-variant-numeric:tabular-nums\">12.00</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:12px\">Wales</span><span class=\"db-type db-type--mono\" style=\"font-size:12px;width:80px;text-align:right;font-variant-numeric:tabular-nums\">7,310.25</span></div></div></div></div></div>"
      },
      what: "A table is a grid of aligned data, and alignment is what makes it readable. The standard guidance, set out in Stephen Few's Show Me the Numbers, is that quantitative values are right-aligned with a consistent number of decimal places, so both the decimal point and the final digit line up, while text is left-aligned. Tabular (fixed-width) figures are needed for the alignment to hold, since proportional figures put a 1 in less space than an 8.",
      why: "Aligned columns let the reader compare magnitudes by eye, because the number of digits becomes a visible length. Misaligned columns force them to read every value.",
      how: [
        "Switch the table to tabular figures (font-variant-numeric: tabular-nums) before anything else.",
        "Right-align numbers, left-align text, and align headers with the data below them.",
        "Fix the decimal places per column rather than letting the data decide row by row.",
        "Remove vertical rules first, then horizontal ones, keeping only what stops the eye slipping rows."
      ],
      example: "A financial table where 1,204.5 and 98.75 are left-aligned reads as noise; right-aligned with two decimal places each, the column becomes a bar chart made of digits.",
      numbers: "",
      pitfall: "Zebra striping every row by habit. On short tables it adds visual weight for no gain; keep it for wide tables where the eye actually loses the row.",
      source: "Stephen Few, Show Me the Numbers; OpenType tabular figures (tnum).",
      verify: { status: "verified", note: "The alignment convention (right-align quantitative values with consistent decimal places, left-align text) is uncontroversial and is the guidance attributed to Show Me the Numbers in every summary I could reach, but I did not read the book itself, so it is stated as the standard guidance rather than as a quotation. Dropped the earlier claim about date formatting, which I could not attribute to Few. Confirmed tabular figures as an OpenType feature (tnum) exposed in CSS as font-variant-numeric: tabular-nums." },
      belongs: { verdict: "core", why: "Tables are text, and their alignment rules are typographic decisions with a documented source." },
      related: [361, 526, 527, 387]
    },
    {
      n: 395,
      title: "Headings and subheads",
      aka: ["Subheadings", "Crossheads"],
      oneLine: "Breaks in text that signal structure, and which must sit closer to what they introduce than to what precedes them.",
      demo: {
        caption: "Which paragraph does the heading belong to? On the left it floats between the two; on the right it binds downwards.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Equal space above and below</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:0\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-type db-type--display\" style=\"font-size:15px;margin:20px 0\">Making a claim</div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Roughly twice as much above</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:0\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-type db-type--display\" style=\"font-size:15px;margin:32px 0 6px\">Making a claim</div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div>"
      },
      what: "A heading does two jobs: it names a section and it interrupts the column so a scanning reader has entry points. The spacing rule follows from proximity: a heading needs more space above it than below, so it visibly belongs to the text underneath. Level differences should be made with clear steps in size, weight or case, and the number of levels should be small enough that a reader can tell them apart without a legend.",
      why: "Headings are the skeleton a scanner reads first. If two levels look nearly the same, the structure the writer built is invisible and the document reads as flat.",
      how: [
        "Set space above a heading to roughly twice the space below it, then check by eye.",
        "Limit yourself to three heading levels in most documents; if you need more, restructure.",
        "Do not indent the first paragraph after a heading.",
        "Keep the heading with its first line of text by preventing a page or column break between them.",
        "Use text-wrap: balance so a two-line heading splits evenly rather than leaving one word."
      ],
      example: "Any well-set reference book: the section heading sits tight above its opening paragraph with a clear gap above it, so you can see at a glance which text it governs.",
      numbers: "",
      pitfall: "Equal space above and below a heading, which leaves it floating between two sections so the reader cannot tell which one it heads. This is the single commonest spacing error in web layouts.",
      source: "Application of proximity (a Gestalt grouping principle) to text setting; standard editorial practice. Spacing ratio is craft convention, not a published standard.",
      verify: { status: "verified", note: "The mechanism (proximity determines perceived grouping) is well established in Gestalt perception and is the reason for the asymmetric spacing rule. I found no published numeric standard for the above-to-below ratio, so the two-to-one figure is given explicitly as a starting point to check by eye rather than as a sourced threshold." },
      belongs: { verdict: "core", why: "Heading spacing is where the abstract principle of proximity becomes a concrete, testable typographic rule." },
      related: [156, 343, 382, 399]
    },
    {
      n: 396,
      title: "All-caps legibility limits",
      aka: ["Setting in capitals"],
      oneLine: "Capitals read more slowly in long passages, so keep them to short strings.",
      demo: {
        caption: "Identical words, size and column width. The capitals need more lines, and every letter now sits between the same two heights.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">All capitals</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px;text-transform:uppercase\">Your right to cancel this agreement is set out in the schedule at the back of this booklet, and nothing written in this clause or anywhere else takes that right away from you.</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Lower case</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px\">Your right to cancel this agreement is set out in the schedule at the back of this booklet, and nothing written in this clause or anywhere else takes that right away from you.</div></div></div></div>"
      },
      what: "Text set entirely in capitals is read more slowly than the same text in lower case. Tinker and Paterson (1928) gave forms A and B of the Chapman-Cook speed of reading test to 640 subjects in three type forms, all capitals, roman lower case and italic, and measured a 13.4 per cent reading-speed advantage for lower case. Their design has a known weakness, since the uppercase text took about 35 per cent more horizontal space, so type form and line length were confounded. Smith (1969) and Fisher (1975) later found reliable differences of 5 to 10 per cent.",
      why: "The practical rule is unaffected by why it happens: keep capitals for short items where the extra emphasis or formality is worth the cost, and never for paragraphs. Capitals also eat horizontal space, which pushes the measure up.",
      how: [
        "Restrict all caps to labels, short buttons, brief headings and acronyms.",
        "Letterspace any string you do set in caps (see entry 377).",
        "Prefer small caps to full caps inside body text, so the colour of the paragraph stays even.",
        "Check all-caps interface labels still fit after translation, where they grow further."
      ],
      example: "A road sign in capitals is fine at a glance. A terms-and-conditions clause in capitals, supposedly for prominence, is the standard example of the rule being broken to the reader's cost.",
      numbers: "13.4 per cent (Tinker and Paterson 1928); 5 to 10 per cent (Smith 1969 and Fisher 1975, as reported by Larson). All in favour of lower case.",
      pitfall: "The usual explanation given is that capitals destroy word shape. Larson's review shows that explanation is wrong. The effect is largely a practice effect, since readers spend nearly all their reading time on lower case, and speed for unfamiliar forms improves with exposure.",
      source: "Miles Tinker and Donald Paterson, Influence of type form on speed of reading, Journal of Applied Psychology 12 (1928), 359-368; Kevin Larson, The Science of Word Recognition (Microsoft, 2004); Perea, Rosa and Marcet, Acta Psychologica 177 (2017), 30-35.",
      verify: { status: "disputed", note: "Corrected the citation: the 1928 paper is Influence of type form on speed of reading, Journal of Applied Psychology 12(4), 359-368, not the later Studies of typographical factors series the earlier draft named. The 13.4 per cent figure, the Chapman-Cook test, the 640 subjects and the three type forms are confirmed from the paper's own abstract and from Perea, Rosa and Marcet (2017). Perea and colleagues also record the specific weakness in the 1928 design: the uppercase text occupied about 35 per cent more horizontal space than the lowercase text, so type form and line length were confounded. Larson does not cite Tinker and Paterson at all; he traces the finding to Woodworth (1938) and reports the 5-10 per cent replication range for Smith (1969) and Fisher (1975), and he attributes the difference to practice rather than word shape, citing Kolers and Perkins (1975) on mirrored text. The effect itself replicates; the folk explanation does not survive." },
      belongs: { verdict: "core", why: "A daily setting decision with measured evidence behind it, and a good example of a real effect with a folk explanation attached." },
      related: [377, 370, 397, 359]
    },
    {
      n: 397,
      title: "Emphasis: pick one, and use it sparingly",
      aka: ["Italic before bold", "Emphasis order"],
      oneLine: "Use one emphasis device at a time, and emphasise little enough that the emphasis still registers.",
      demo: {
        caption: "Five bold phrases on the left, so none of them stands out. One italic phrase on the right, in the same paragraph.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Five emphasised phrases</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px\">The survey ran for <b>six weeks</b> and reached <b>4,100 households</b>, of which <b>just over half</b> replied. The <b>single clearest</b> finding was that people wanted <b>the bins collected weekly</b>.</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One emphasised phrase</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px\">The survey ran for six weeks and reached 4,100 households, of which just over half replied. The single clearest finding was that people wanted <i>the bins collected weekly</i>.</div></div></div></div>"
      },
      what: "The master list calls this italic before bold. That is the book-typography convention: italic disturbs the colour of a paragraph least, while bold was an advertising import that leaves dark patches in running text. It is not a universal rule. Butterick's guidance is that bold and italic are mutually exclusive, that italic suits gentle emphasis and bold heavier emphasis in a serif face, and that with sans-serif text it is usually better to skip italic and use bold.",
      why: "Emphasis works by contrast with its surroundings. Every extra emphasised word reduces the contrast, so a paragraph with six bolded phrases has no emphasis at all.",
      how: [
        "Choose one device per document for in-text emphasis and stay with it.",
        "Never combine bold and italic on the same run unless a style guide demands it.",
        "In serif body text, reach for italic first; in sans-serif body text, bold usually reads better.",
        "Count the emphasised words on a page. If it is more than a handful, cut."
      ],
      example: "Book indexes and scholarly text use italic for titles and foreign terms, which keeps the page even. A marketing landing page bolding one phrase per sentence achieves the opposite of emphasis.",
      numbers: "",
      pitfall: "Faking the styles. Software-slanted or software-thickened type is not the same as a drawn italic or bold, and it shows at any size.",
      source: "Book typography convention; Matthew Butterick, Practical Typography, Bold or italic.",
      verify: { status: "adjusted", note: "The framing has been changed from the master list's, and I agree with the change after rereading the source. Butterick's Bold or italic page gives two numbered rules: rule 1, bold or italic, think of them as mutually exclusive; rule 2, use bold and italic as little as possible. He then says to use italic for gentle emphasis or bold for heavier emphasis with a serif font, and if you're using a sans serif font, skip italic and use bold. So italic before bold is a book convention rather than a universal rule, and the defensible common rule is one device used sparingly. The original master-list title is kept in aka. Hochuli's Detail in Typography also carries a chapter titled Emphasis, though I have not read it." },
      belongs: { verdict: "core", why: "Emphasis discipline is a genuine typographic skill, but the specific ordering in the master list needed correcting rather than repeating." },
      related: [365, 366, 398, 1055]
    },
    {
      n: 398,
      title: "Underline reserved for links",
      aka: ["Underlining"],
      oneLine: "Underlining is a typewriter workaround; on screen it now means a link, so leave it to links.",
      demo: {
        caption: "Which phrase is clickable? On the left both are underlined; on the right the underline has been left to the link.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Underlined for emphasis as well</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px\">The deadline is <span style=\"text-decoration:underline\">the last working day of March</span>, and anything later goes to the <span style=\"text-decoration:underline;color:var(--accent)\">appeals panel</span>.</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Underline reserved for the link</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:12px\">The deadline is <i>the last working day of March</i>, and anything later goes to the <span style=\"color:var(--accent);text-decoration:underline;text-decoration-skip-ink:auto;text-underline-offset:3px\">appeals panel</span>.</div></div></div></div>"
      },
      what: "Typewriters had no bold or italic, so the only way to emphasise was to back up the carriage and underline. In set type an underline cuts through descenders and darkens the line. On the web it acquired a specific meaning: it marks a hyperlink. WCAG 2.2 Success Criterion 1.4.1 (Use of Colour) means links in body text cannot be signalled by colour alone, and an underline is the standard non-colour cue.",
      why: "Keeping the underline for links means a reader never has to hover to find out what is clickable, and it satisfies the accessibility requirement without extra work.",
      how: [
        "Underline links inside body text. Navigation and buttons, where the whole element reads as interactive, do not need it.",
        "Use text-decoration-skip-ink so the underline breaks around descenders.",
        "Use text-underline-offset and thickness to soften the underline rather than removing it.",
        "If you do remove it, follow technique G183: 3:1 link-to-text contrast plus a non-colour cue on hover and keyboard focus."
      ],
      example: "Wikipedia article links are distinguished by colour at rest and underlined on hover, the pattern that needs the 3:1 contrast check to pass 1.4.1.",
      numbers: "The 3:1 figure is not in the text of SC 1.4.1. It comes from the W3C sufficient technique G183, which pairs a contrast ratio of at least 3:1 between link text and surrounding text with a further visual distinction on hover and keyboard focus. The Understanding document also notes that where colour alone separates visited from unvisited links, a ratio below 3:1 does not fail the criterion.",
      pitfall: "Underlining a heading or a run of text for emphasis. Readers will try to click it.",
      source: "Matthew Butterick, Practical Typography, Underlining; W3C, Understanding SC 1.4.1 Use of Colour, and sufficient technique G183.",
      verify: { status: "verified", note: "Confirmed Butterick's position (underlining is a typewriter habit, do not underline in printed documents) from his Underlining and Typewriter habits pages. Corrected an overstatement in the earlier draft, which presented 3:1 as a requirement written into SC 1.4.1. It is not: the W3C Understanding document for Use of Colour points to the sufficient technique G183 for the ratio, and records the visited-versus-unvisited-link exception where a ratio below 3:1 still passes. Read the Understanding SC 1.4.1 page on w3.org for both points." },
      belongs: { verdict: "core", why: "A typographic convention that now carries a functional and accessibility meaning on screen." },
      related: [397, 694, 808]
    },
    {
      n: 399,
      title: "Line-height for headings versus body",
      aka: ["Display leading"],
      oneLine: "Large type needs proportionally tighter line spacing than body text; the ratio is not constant.",
      demo: {
        caption: "The body paragraph is set at 1.5 in both halves. The same ratio on the heading pulls its two lines apart.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Heading at 1.5</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-type db-type--display\" style=\"font-size:24px;line-height:1.5\">A heading that runs to two lines</div><div class=\"db-type\" style=\"font-size:12px;line-height:1.5\">Body text underneath, set at 1.5 on both sides of the pair, where the ratio does its job.</div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Heading at 1.1</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-type db-type--display\" style=\"font-size:24px;line-height:1.1\">A heading that runs to two lines</div><div class=\"db-type\" style=\"font-size:12px;line-height:1.5\">Body text underneath, set at 1.5 on both sides of the pair, where the ratio does its job.</div></div></div></div></div>"
      },
      what: "Line-height set as a multiple of the font size does not scale sensibly. At body sizes the multiple has to be generous, because the eye needs a clear track to find the next line across a long measure. At heading sizes the lines are few and short, the physical gap is already large, and the same multiple leaves the heading looking like unrelated strips stacked up. Heading line-height therefore comes down as size goes up.",
      why: "A multi-line heading should read as one object. Applying the body ratio to a 48px heading breaks it apart and weakens the hierarchy you were building.",
      how: [
        "Define line-height per step of the type scale rather than as one global multiple.",
        "Take the ratio down as size goes up, and check each step with a real two-line heading.",
        "Judge the absolute gap, not the ratio: a heading at 1.1 still has more physical space between lines than body text at 1.5.",
        "Increase line-height slightly for small print such as captions and legal text."
      ],
      example: "Material Design 3 sets its Body Large token at 16sp text on a 24sp line height, a ratio of 1.5. No sensible system applies 1.5 to a display heading.",
      numbers: "Material Design 3 Body Large: 16sp on 24sp (ratio 1.5). WCAG 2.2 SC 1.4.12 requires content to remain usable at a line height of 1.5 times the font size.",
      pitfall: "Setting a single line-height on the body element and inheriting it everywhere. Headings then look loose and captions look tight, and nobody can point at why the page feels unresolved.",
      source: "Craft convention in type setting; the underlying reason is the same as optical sizing (see entry 348). Material Design 3 type scale tokens are one published example of size-specific line heights.",
      verify: { status: "verified", note: "I verified the Material Design 3 Body Large token (16sp size, 24sp line height) via the Jetpack Compose typography documentation. I tried and failed to retrieve the display-size line-height tokens from m3.material.io and the material-web token files this session, so no display figures are quoted. The rule itself is craft convention with no single canonical published source, and is stated as such." },
      belongs: { verdict: "core", why: "A specific and frequently broken rule that follows from how leading actually works, even though it lacks a named originator." },
      related: [373, 348, 344, 400]
    },
    {
      n: 400,
      title: "Negative tracking at display sizes",
      aka: ["Tightening large type", "Display tracking"],
      oneLine: "Type drawn for text sizes looks loose when enlarged, so large settings usually need slight tightening.",
      demo: {
        caption: "Same word, same size, same face. On the right the letters are pulled in slightly, so the word reads as one shape.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Text fit at 42px</span><div class=\"db-stage db-stage--tight\"><div class=\"db-centre\"><span class=\"db-specimen\" style=\"font-size:42px;letter-spacing:0\">Handbook</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Tracked -0.03em</span><div class=\"db-stage db-stage--tight\"><div class=\"db-centre\"><span class=\"db-specimen\" style=\"font-size:42px;letter-spacing:-0.03em\">Handbook</span></div></div></div></div>"
      },
      what: "A text face is spaced for reading at text sizes, where generous letterfit helps. Blow the same drawing up to poster or hero size and the built-in spaces enlarge with it, so the letters look scattered. The traditional answer is a display cut of the typeface, drawn with tighter fit, finer strokes and smaller counters. Variable fonts express the same idea through the optical size axis (opsz), which changes the drawing as size changes. Where neither is available, a small negative tracking value approximates it.",
      why: "Tightening large type restores the word as a unit, so a headline reads as a single drawn object rather than a row of enlarged letters. It is one of the few corrections that separates a considered hero heading from a defaulted one.",
      how: [
        "Use a real display cut or an optical size axis if the family offers one; that is always better than tracking.",
        "Otherwise apply small negative tracking, defined per step of the type scale rather than globally.",
        "Stop tightening before letters touch, and check the tightest pairs specifically.",
        "Never apply display tracking values to body text; the direction of the correction reverses at small sizes."
      ],
      example: "Families with an opsz axis change the letterfit automatically as you scale, which is why a variable text face can be used for a headline without the loose look.",
      numbers: "",
      pitfall: "Applying one negative tracking value across all heading levels. At the small heading sizes it makes the text cramped, since the correction should get stronger as size grows.",
      source: "Traditional display cuts in metal and photo type; formalised in the OpenType variable font optical size axis (opsz).",
      verify: { status: "verified", note: "The optical size axis is a registered OpenType variation axis, and display versus text cuts are long-established type-design practice. The tracking approximation is craft convention rather than a published rule, and no numeric values are given here because I could not verify any published thresholds." },
      belongs: { verdict: "core", why: "A routine display-typography correction with a documented mechanism behind it in the font format itself." },
      related: [375, 348, 349, 364]
    },
    {
      n: 401,
      title: "Ellipses and abbreviations",
      aka: ["Suspension points", "Contractions"],
      oneLine: "Use the correct marks and spacing for omitted text and shortened words, and be consistent.",
      demo: {
        caption: "Three ways to set one omission. The first two are different characters that look nearly alike; only the spaced form differs.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:26px\">et cetera...</span><span class=\"db-note\">three full points</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:26px\">et cetera&hellip;</span><span class=\"db-note\">one character, U+2026</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:26px\">et cetera . . .</span><span class=\"db-note\">spaced points, Chicago</span></div></div></div>"
      },
      what: "An ellipsis marks omitted words. Unicode provides a single character for it, U+2026 HORIZONTAL ELLIPSIS, while The Chicago Manual of Style prefers three full points separated by spaces. Either is defensible; mixing them in one document is not. Abbreviations bring their own decisions: British house styles generally drop the full points in all-capital abbreviations, and Bringhurst's rule 3.2.2 recommends spaced small caps for abbreviations and acronyms sitting in running text, so a run of capitals does not shout.",
      why: "These marks appear constantly and each one is a small chance to look either edited or careless. Consistency here is most of what readers register as professionalism.",
      how: [
        "Pick one ellipsis form, write it into the style sheet, and enforce it with search and replace.",
        "Use non-breaking spaces inside a spaced ellipsis so it never splits across a line.",
        "Set acronyms in small caps in body text where the font supports real small caps.",
        "Decide once whether to use full points in abbreviations, and apply it to every instance."
      ],
      example: "In interfaces, a trailing ellipsis on a menu item conventionally means the command opens a dialogue for more input rather than acting immediately.",
      numbers: "",
      pitfall: "Using an ellipsis for truncated text without giving the reader any route to the full string. Truncation needs a tooltip, an expand control or a details view.",
      source: "Unicode Standard (U+2026); The Chicago Manual of Style; Robert Bringhurst, rule 3.2.2.",
      verify: { status: "verified", note: "Confirmed U+2026 HORIZONTAL ELLIPSIS in Unicode and that Chicago prefers spaced full points. Bringhurst's rule 3.2.2 wording confirmed on Rutter's mirror. The British no-full-points convention is stated as house-style practice rather than attributed to a specific manual, because I did not verify a named source for it this session." },
      belongs: { verdict: "core", why: "Detail typography in the literal sense, and the kind of consistency readers notice only when it is absent." },
      related: [388, 402, 679, 1059]
    },
    {
      n: 402,
      title: "Language-specific quotation marks",
      aka: ["Guillemets", "Quotes by locale"],
      oneLine: "Quotation marks differ by language, so a hard-coded pair of English curly quotes is wrong elsewhere.",
      demo: {
        caption: "The same three languages. Only the right column uses each one's own marks: note the low German opener and the French guillemets.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">English marks everywhere</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--nowrap\"><span class=\"db-note\">EN</span><span class=\"db-type\" style=\"font-size:15px\">&ldquo;good evening&rdquo;</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-note\">DE</span><span class=\"db-type\" style=\"font-size:15px\">&ldquo;guten Abend&rdquo;</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-note\">FR</span><span class=\"db-type\" style=\"font-size:15px\">&ldquo;bonsoir&rdquo;</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Marks from the locale</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--nowrap\"><span class=\"db-note\">EN</span><span class=\"db-type\" style=\"font-size:15px\">&ldquo;good evening&rdquo;</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-note\">DE</span><span class=\"db-type\" style=\"font-size:15px\">&bdquo;guten Abend&ldquo;</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-note\">FR</span><span class=\"db-type\" style=\"font-size:15px\">&laquo;&nbsp;bonsoir&nbsp;&raquo;</span></div></div></div></div></div>"
      },
      what: "English uses paired curly quotes. German conventionally opens with a low double quote (U+201E) and closes with the mark English uses to open (U+201C), giving the pattern often described as low-high. French uses guillemets, the sideways double chevrons, with a non-breaking space between the mark and the quoted text, and single guillemets for nested quotes. Other languages have their own conventions again, and CJK typography uses its own bracket forms.",
      why: "Getting these right is the difference between a localised product and a translated one. Native readers spot the wrong marks immediately, in the way an English reader spots a straight apostrophe.",
      how: [
        "Store quotation marks as locale data, never hard-coded in a template or component.",
        "Use the CSS quotes property with a language selector, or let the browser's default per-language quotes apply.",
        "For French, use the correct non-breaking space so the guillemet never separates from its text at a line break.",
        "Have a native speaker review any locale before launch; the marks are one of several conventions that will be wrong."
      ],
      example: "Set a French quotation with ordinary spaces inside the guillemets and a line break will eventually strand a chevron alone at the start of a line.",
      numbers: "",
      pitfall: "Applying an English smart-quotes filter to every locale. It converts correctly typed foreign marks into English curly quotes and quietly breaks the typography of every non-English page.",
      source: "Unicode Standard; W3C Internationalisation guidance on quotation marks; French rules per the Imprimerie nationale conventions.",
      verify: { status: "verified", note: "Confirmed German low-high quotes (U+201E opening, U+201C closing), French guillemets with an inner non-breaking space and single guillemets for nesting, from W3C internationalisation material and the Guillemet reference. Confirmed that W3C has tracked the issue of quotation marks differing by language." },
      belongs: { verdict: "core", why: "A concrete typographic rule that changes per locale, and one designers routinely get wrong by hard-coding." },
      related: [368, 401, 404, 712]
    },
    {
      n: 403,
      title: "Right-to-left typography",
      aka: ["RTL", "Bidirectional text"],
      oneLine: "Arabic and Hebrew run right to left, and mixed text follows a defined algorithm, not intuition.",
      demo: {
        caption: "One attribute changed. The row mirrors and the text moves to the right, but the Latin name still reads left to right.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">dir = ltr</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-btn db-btn--sm db-btn--ghost\">&#8592;</span><span class=\"db-type\" style=\"font-size:12px\">Name</span></div><span class=\"db-input\">Design Brain Ltd</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">dir = rtl</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\" dir=\"rtl\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-btn db-btn--sm db-btn--ghost\">&#8594;</span><span class=\"db-type\" style=\"font-size:12px\">&#1575;&#1604;&#1575;&#1587;&#1605;</span></div><span class=\"db-input\">Design Brain Ltd</span></div></div></div></div>"
      },
      what: "In right-to-left scripts the reading direction reverses, and so does the reading order of the whole interface. Text containing both directions is handled by the Unicode Bidirectional Algorithm, defined in Unicode Standard Annex #9, which is a normative part of the Unicode Standard. Characters are always stored in logical order; only the display order changes. Arabic adds a further requirement, since letters change shape depending on their position in a word and join to their neighbours.",
      why: "Mirroring an interface by hand always misses something. The algorithm and the CSS logical properties exist so the layout flips correctly, including numbers and embedded English, which stay left to right inside a right-to-left line.",
      how: [
        "Set the dir attribute on the HTML element, not on individual components.",
        "Use CSS logical properties (margin-inline-start, padding-inline-end, text-align: start) instead of left and right.",
        "Do not mirror everything: clocks, media playback controls and most logos stay as they are.",
        "Choose a face with proper Arabic or Hebrew coverage and check that its line height suits the script, which usually needs more vertical space."
      ],
      example: "A phone number or a Latin brand name embedded in an Arabic sentence still reads left to right within the right-to-left line; that behaviour comes from the bidirectional algorithm rather than from anything you write.",
      numbers: "",
      pitfall: "Flipping the layout but leaving hard-coded left and right values in components, so icons, chevrons and progress bars point the wrong way in the mirrored build.",
      source: "Unicode Standard Annex #9, Unicode Bidirectional Algorithm; HTML dir attribute; CSS logical properties.",
      verify: { status: "verified", note: "Confirmed UAX #9 is the normative Unicode specification for bidirectional text, that logical order is preserved and only display order changes, and that the HTML dir attribute and CSS direction and unicode-bidi properties are the implementation route (Unicode.org and MDN)." },
      belongs: { verdict: "core", why: "A structural typographic requirement with a formal standard behind it, affecting layout as well as text." },
      related: [404, 405, 627, 713]
    },
    {
      n: 404,
      title: "Multilingual and script matching",
      aka: ["Script harmonisation", "Font fallback"],
      oneLine: "When one design carries several writing systems, the faces must be matched in weight, size and feel.",
      demo: {
        caption: "Four words meaning design, all at one font-size, each face picked by your browser. Compare the x-heights and the stroke weights.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--baseline db-row--loose db-row--centre\"><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:30px\">Design</span><span class=\"db-note\">Latin</span></span><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:30px\">&#1044;&#1080;&#1079;&#1072;&#1081;&#1085;</span><span class=\"db-note\">Cyrillic</span></span><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:30px\">&#931;&#967;&#941;&#948;&#953;&#959;</span><span class=\"db-note\">Greek</span></span><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:30px\">&#35373;&#35336;</span><span class=\"db-note\">Han</span></span></div></div>"
      },
      what: "A brand or product that ships in many languages needs type that holds together across scripts. Matching means aligning apparent size, stroke weight and overall texture between, say, a Latin face and a Cyrillic, Greek, Arabic, Devanagari or CJK companion, while letting each script keep its authentic forms. Google and Monotype's Noto project exists to do exactly this: a collection covering over 150 writing systems and more than 1,000 languages, harmonised across scripts while each script keeps its own authentic forms.",
      why: "Unmatched scripts make a multilingual product look assembled rather than designed, and can make one language's pages look heavier or smaller than another's at the same nominal size.",
      how: [
        "Define your fallback stack per script explicitly rather than relying on whatever the operating system supplies.",
        "Compare apparent size across scripts and adjust font-size-adjust or per-locale size overrides where needed.",
        "Test every locale's line height; Devanagari, Thai and Arabic often need more vertical room than Latin.",
        "Check weight matching: a regular Latin against a slightly heavier companion is the commonest mismatch."
      ],
      example: "Noto includes hundreds of families across scripts drawn to a shared brief, which is why it is the usual choice when a product needs coverage rather than character.",
      numbers: "",
      pitfall: "Leaving the fallback to the browser. Different operating systems substitute different faces, so the same page can look completely different in Japan and in Germany.",
      source: "Google and Monotype, Noto fonts project; standard multilingual type-design practice.",
      verify: { status: "verified", note: "The coverage figures, over 150 writing systems and more than 1,000 languages, are stated on the Noto project's own documentation site, which also states the harmonisation goal: the designs are harmonious across scripts but retain the authentic flavours that make each script special. Dropped an earlier claim that Noto weights can be matched precisely against a non-Noto Latin face. The project's advice is only that you complement a font you already use with Noto fonts in similar styles. The rest of the entry (fallback stacks, font-size-adjust, per-script line height) is ordinary practice with no named originator." },
      belongs: { verdict: "core", why: "Type selection across scripts is a design decision with visible consequences, not an engineering detail." },
      related: [403, 405, 712, 338]
    },
    {
      n: 405,
      title: "Text expansion in translation",
      aka: ["String growth", "Localisation expansion"],
      oneLine: "Translated text usually gets longer, and the shorter the English source, the bigger the growth.",
      demo: {
        caption: "Each bar is the translated string measured against the English source. The shortest strings grow the most.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 152\"><text class=\"t\" style=\"font-size:6px\" x=\"64\" y=\"10\" text-anchor=\"end\">SOURCE</text><text class=\"t\" style=\"font-size:6px\" x=\"76\" y=\"10\">TRANSLATED LENGTH</text><path class=\"s-mute\" d=\"M70 14 V 132\"/><text class=\"t\" style=\"font-size:6px\" x=\"64\" y=\"25\" text-anchor=\"end\">up to 10</text><rect class=\"f-accent\" x=\"70\" y=\"18\" width=\"70.0\" height=\"9\"/><rect class=\"f-mute\" x=\"140.0\" y=\"18\" width=\"70.0\" height=\"9\"/><text class=\"t\" style=\"font-size:6px\" x=\"216\" y=\"25\">200-300%</text><text class=\"t\" style=\"font-size:6px\" x=\"64\" y=\"45\" text-anchor=\"end\">11-20</text><rect class=\"f-accent\" x=\"70\" y=\"38\" width=\"56.0\" height=\"9\"/><rect class=\"f-mute\" x=\"126.0\" y=\"38\" width=\"14.0\" height=\"9\"/><text class=\"t\" style=\"font-size:6px\" x=\"216\" y=\"45\">180-200%</text><text class=\"t\" style=\"font-size:6px\" x=\"64\" y=\"65\" text-anchor=\"end\">21-30</text><rect class=\"f-accent\" x=\"70\" y=\"58\" width=\"42.0\" height=\"9\"/><rect class=\"f-mute\" x=\"112.0\" y=\"58\" width=\"14.0\" height=\"9\"/><text class=\"t\" style=\"font-size:6px\" x=\"216\" y=\"65\">160-180%</text><text class=\"t\" style=\"font-size:6px\" x=\"64\" y=\"85\" text-anchor=\"end\">31-50</text><rect class=\"f-accent\" x=\"70\" y=\"78\" width=\"28.0\" height=\"9\"/><rect class=\"f-mute\" x=\"98.0\" y=\"78\" width=\"14.0\" height=\"9\"/><text class=\"t\" style=\"font-size:6px\" x=\"216\" y=\"85\">140-160%</text><text class=\"t\" style=\"font-size:6px\" x=\"64\" y=\"105\" text-anchor=\"end\">51-70</text><rect class=\"f-accent\" x=\"70\" y=\"98\" width=\"35.7\" height=\"9\"/><rect class=\"f-mute\" x=\"105.7\" y=\"98\" width=\"13.3\" height=\"9\"/><text class=\"t\" style=\"font-size:6px\" x=\"216\" y=\"105\">151-170%</text><text class=\"t\" style=\"font-size:6px\" x=\"64\" y=\"125\" text-anchor=\"end\">over 70</text><rect class=\"f-accent\" x=\"70\" y=\"118\" width=\"21.0\" height=\"9\"/><text class=\"t\" style=\"font-size:6px\" x=\"216\" y=\"125\">130%</text><text class=\"t\" style=\"font-size:6px\" x=\"70\" y=\"145\">100 per cent is the English string</text></svg></div>"
      },
      what: "English is compact. Translating into most European languages lengthens the text, and the proportional growth is largest on the shortest strings, because there is no room to average out. IBM's published expansion guidelines, reproduced in the W3C article Text size in translation, put a source string of up to ten characters at 200 to 300 per cent and text over seventy characters at about 130 per cent.",
      why: "The elements with the least room are the ones that expand most: buttons, tabs, navigation items, badges and column headers. A layout that only works with the English string breaks in every other market.",
      how: [
        "Design short labels with visible slack, and never size a button to fit its English text exactly.",
        "Pseudo-localise early: run the interface with strings padded to roughly double length and see what breaks.",
        "Allow labels to wrap to two lines rather than truncating.",
        "Check all-caps styles specifically, since capitals are wider and expansion compounds the problem."
      ],
      example: "A nav item reading Home can triple in width; the same growth across five nav items forces a header into a wrap or a burger menu.",
      numbers: "IBM guidelines, via the W3C: up to 10 characters, 200-300 per cent; 11-20, 180-200 per cent; 21-30, 160-180 per cent; 31-50, 140-160 per cent; 51-70, 151-170 per cent; over 70, 130 per cent. W3C heads the column simply Average expansion and does not say whether these are total resulting sizes or space added on top, so treat them as orders of magnitude rather than exact allowances.",
      pitfall: "Treating this as an engineering problem discovered at localisation time. By then the component widths are fixed and the fix is truncation, which is the worst option available.",
      source: "IBM Guidelines to design global solutions, reproduced in W3C Internationalisation, Text size in translation.",
      verify: { status: "verified", note: "Rechecked against the W3C article Text size in translation and copied the IBM table figures exactly as published, including the 51-70 row, which reads 151-170 per cent in the source and is out of sequence with the rows either side of it. The table is attributed by W3C to IBM's Guidelines to design global solutions and its column is headed only Average expansion, with the introduction calling the figures average expected expansion rates. Removed the earlier draft's claim that these are total resulting sizes, which the source does not state." },
      belongs: { verdict: "core", why: "A hard layout constraint with published figures, and the direct cause of the wrapping header failure in entry 1060." },
      related: [403, 404, 679, 1060]
    }
  ]
};
