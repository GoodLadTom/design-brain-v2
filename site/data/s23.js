window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[23] = {
  n: 23,
  slug: "editorial-print",
  title: "Editorial, book and print production",
  blurb: "How books and printed matter are structured, specified and manufactured, from front matter to ink limits.",
  intro: "This family covers two connected jobs. The first is editorial structure: how a long document is divided, numbered, opened and paced so a reader can hold their place in it. The second is production: paper, folding, binding, ink and the file you hand a printer. Most of it is settled craft rather than theory, written down in style manuals such as Chicago, in Tschichold's essays on book design, and in ISO standards for paper and print process control. A designer who skips it does not produce worse ideas, just files that come back from the printer wrong, or books that will not lie open.",
  sources: [
    "Jan Tschichold, The Form of the Book (English edition, 1991)",
    "The Chicago Manual of Style, 18th edition, chapter 1: Books and Journals",
    "ISO 536 (grammage), ISO 534 (thickness and bulk), ISO 2471 (opacity)",
    "ISO 12647-2 (offset process control), ISO 12647-7:2016 (proofing direct from digital data), ISO 12646 (displays for colour proofing), ISO 14861:2015 (colour soft proofing systems)",
    "ISO 15930 (the PDF/X family)",
    "Adobe InDesign Help, About overprinting and Marks and Bleeds (accessed 2026)",
    "PrintWiki, Show-Through and Strike-Through",
    "Wikipedia, Canons of page construction; Pantone; Moire pattern",
    "Fogra, prepress certification and Contract Proof Creation",
    "ECI (European Color Initiative), offset profile documentation, for ink limits and tone value increase curves",
    "Printing United Alliance, guidance on managing ink coverage (2024)",
    "Mixam UK, published bleed and quiet area guidance",
    "Pantone help centre, on the 1963 launch of the matching system"
  ],
  entries: [
    {
      n: 855,
      title: "The book as an object",
      aka: ["Book as artefact", "The physical book"],
      oneLine: "A book is a physical object first: size, proportion, margins and opening behaviour are all design decisions.",
      demo: {
        caption: "Same 2:3 page. Left has four equal margins; right sets them 2:3:4:6, tightest at the spine and deepest at the foot.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Four equal margins</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 176\"><rect class=\"s-mute\" x=\"34\" y=\"8\" width=\"100\" height=\"150\"/><path class=\"s\" d=\"M34 4 V162\"/><text class=\"t\" x=\"26\" y=\"83\" text-anchor=\"middle\" transform=\"rotate(-90 26 83)\">SPINE</text><rect class=\"s-accent\" x=\"51\" y=\"25\" width=\"66\" height=\"116\"/><g class=\"f-mute\" opacity=\"0.5\"><rect x=\"51\" y=\"31\" width=\"66\" height=\"3\"/><rect x=\"51\" y=\"43\" width=\"66\" height=\"3\"/><rect x=\"51\" y=\"55\" width=\"66\" height=\"3\"/><rect x=\"51\" y=\"67\" width=\"66\" height=\"3\"/><rect x=\"51\" y=\"79\" width=\"66\" height=\"3\"/><rect x=\"51\" y=\"91\" width=\"66\" height=\"3\"/><rect x=\"51\" y=\"103\" width=\"66\" height=\"3\"/><rect x=\"51\" y=\"115\" width=\"42\" height=\"3\"/></g><text class=\"t\" x=\"84\" y=\"20\" text-anchor=\"middle\">1/6</text><text class=\"t\" x=\"126\" y=\"86\" text-anchor=\"middle\">1/6</text><text class=\"t\" x=\"84\" y=\"152\" text-anchor=\"middle\">1/6</text><text class=\"t\" x=\"42\" y=\"86\" text-anchor=\"middle\" transform=\"rotate(-90 42 86)\">1/6</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Van de Graaf: 2:3:4:6</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 176\"><rect class=\"s-mute\" x=\"34\" y=\"8\" width=\"100\" height=\"150\"/><path class=\"s\" d=\"M34 4 V162\"/><text class=\"t\" x=\"26\" y=\"83\" text-anchor=\"middle\" transform=\"rotate(-90 26 83)\">SPINE</text><rect class=\"s-accent\" x=\"45\" y=\"25\" width=\"67\" height=\"100\"/><g class=\"f-mute\" opacity=\"0.5\"><rect x=\"45\" y=\"31\" width=\"67\" height=\"3\"/><rect x=\"45\" y=\"43\" width=\"67\" height=\"3\"/><rect x=\"45\" y=\"55\" width=\"67\" height=\"3\"/><rect x=\"45\" y=\"67\" width=\"67\" height=\"3\"/><rect x=\"45\" y=\"79\" width=\"67\" height=\"3\"/><rect x=\"45\" y=\"91\" width=\"67\" height=\"3\"/><rect x=\"45\" y=\"103\" width=\"67\" height=\"3\"/><rect x=\"45\" y=\"115\" width=\"43\" height=\"3\"/></g><text class=\"t\" x=\"84\" y=\"20\" text-anchor=\"middle\">1/9</text><text class=\"t\" x=\"123\" y=\"86\" text-anchor=\"middle\">2/9</text><text class=\"t\" x=\"84\" y=\"147\" text-anchor=\"middle\">2/9</text><text class=\"t\" x=\"40\" y=\"86\" text-anchor=\"middle\" transform=\"rotate(-90 40 86)\">1/9</text></svg></div></div></div>"
      },
      what: "Before a word is set, a book has a trim size, a page proportion, a weight in the hand and a way of opening. Jan Tschichold argued in The Form of the Book that page proportion and the placement of the type area are the base decisions, and that they can be set by construction rather than taste. He popularised the Van de Graaf canon, which puts the type area in the same proportion as the page with margins of one-ninth and two-ninths. Tschichold called ratios such as 2:3 and the golden section clear and definite, and everything else accidental.",
      why: "Proportion and margin are what the reader feels before reading anything: whether the block sits comfortably in the hand, and whether the inner column stays readable once the book is bound. Getting these right buys you a page that needs no rescue later.",
      how: [
        "Fix the trim proportion before the grid, and pick a ratio you can name.",
        "Set margins as a related set, not four equal numbers, with the smallest at the gutter and the largest at the foot, where the hand holds the book.",
        "Test the real bulk: order a dummy in the actual paper and page count before signing off margins."
      ],
      example: "Richard Hendel's On Book Design, which carries the Van de Graaf construction on its dust cover.",
      numbers: "Van de Graaf canon: margins of one-ninth and two-ninths of the page. At a 2:3 page proportion the margins fall in the ratio 2:3:4:6 (inner:top:outer:bottom), and the height of the type area equals the width of the page.",
      pitfall: "Designing to a flat rectangle on screen and forgetting the gutter. A thick perfect-bound book swallows millimetres at the spine, so a generous-looking inner margin disappears into the binding.",
      source: "Jan Tschichold, The Form of the Book (English edition 1991), building on J. A. van de Graaf and Raul Rosarivo",
      verify: { status: "verified", note: "Re-checked line by line against the Wikipedia article Canons of page construction (source text read in full). It cites Tschichold 1991 for the one-ninth and two-ninths margins, the 2:3:4:6 ratio at a 2:3 page, the type area height equalling the page width, and his quoted list of clear versus accidental proportions (pp. 37-38). Two corrections made: the article says the method was discovered by Van de Graaf (published 1946) and popularised by Tschichold, so revived was wrong; and the Hendel claim is about the dust cover of On Book Design, which the article states directly. Note the article frames all these canons as historical reconstructions of what medieval scribes may have done, not documented rules." },
      belongs: { verdict: "core", why: "Trim, proportion and margin are the first decisions in any printed document and the ones hardest to change later." },
      related: [856, 859, 863, 865]
    },
    {
      n: 856,
      title: "Front matter, body, back matter",
      aka: ["Prelims", "Parts of a book", "End matter"],
      oneLine: "Books run in three blocks: front matter, main text, back matter, each with its own numbering.",
      demo: {
        caption: "Page numbers restart: roman through the prelims, then arabic from the first page of text and straight on through the back matter.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 96\"><text class=\"t\" x=\"44\" y=\"14\" text-anchor=\"middle\">FRONT MATTER</text><text class=\"t\" x=\"152\" y=\"14\" text-anchor=\"middle\">MAIN TEXT</text><text class=\"t\" x=\"260\" y=\"14\" text-anchor=\"middle\">BACK MATTER</text><g class=\"s-mute\"><rect x=\"6\" y=\"26\" width=\"16\" height=\"30\"/><rect x=\"26\" y=\"26\" width=\"16\" height=\"30\"/><rect x=\"46\" y=\"26\" width=\"16\" height=\"30\"/><rect x=\"66\" y=\"26\" width=\"16\" height=\"30\"/><rect x=\"104\" y=\"26\" width=\"16\" height=\"30\"/><rect x=\"124\" y=\"26\" width=\"16\" height=\"30\"/><rect x=\"144\" y=\"26\" width=\"16\" height=\"30\"/><rect x=\"164\" y=\"26\" width=\"16\" height=\"30\"/><rect x=\"184\" y=\"26\" width=\"16\" height=\"30\"/><rect x=\"222\" y=\"26\" width=\"16\" height=\"30\"/><rect x=\"242\" y=\"26\" width=\"16\" height=\"30\"/><rect x=\"262\" y=\"26\" width=\"16\" height=\"30\"/><rect x=\"282\" y=\"26\" width=\"16\" height=\"30\"/></g><g class=\"t\" text-anchor=\"middle\"><text x=\"14\" y=\"68\">i</text><text x=\"34\" y=\"68\">ii</text><text x=\"54\" y=\"68\">iii</text><text x=\"74\" y=\"68\">iv</text><text x=\"132\" y=\"68\">2</text><text x=\"152\" y=\"68\">3</text><text x=\"172\" y=\"68\">4</text><text x=\"192\" y=\"68\">5</text><text x=\"230\" y=\"68\">6</text><text x=\"250\" y=\"68\">7</text><text x=\"270\" y=\"68\">8</text><text x=\"290\" y=\"68\">9</text></g><text class=\"t\" style=\"fill:var(--accent)\" x=\"112\" y=\"68\" text-anchor=\"middle\">1</text><path class=\"s-mute\" d=\"M6 80 H82 M6 80 V76 M82 80 V76 M104 80 H200 M104 80 V76 M200 80 V76 M222 80 H298 M222 80 V76 M298 80 V76\"/><text class=\"t\" x=\"44\" y=\"92\" text-anchor=\"middle\">ROMAN</text><text class=\"t\" style=\"fill:var(--accent)\" x=\"152\" y=\"92\" text-anchor=\"middle\">RESTARTS AT 1</text><text class=\"t\" x=\"260\" y=\"92\" text-anchor=\"middle\">CONTINUES</text></svg></div>"
      },
      what: "A book is not one continuous run of pages. The front matter carries the half title, title page, copyright page, dedication, epigraph, contents, foreword, preface and introduction. The main text carries the chapters. The back matter carries appendixes, glossary, endnotes, bibliography, illustration credits, index and colophon. Chicago sets both the order and the page numbering: front matter takes roman numerals, the main text and back matter take arabic numerals starting again at 1.",
      why: "The reader uses these blocks as landmarks without thinking about them. Get the order wrong and the book feels amateur in a way people notice but cannot name, and the index and cross-references stop lining up.",
      how: [
        "Work from the Chicago running order rather than inventing one, then delete what the book does not need.",
        "Keep the two numbering systems separate: roman for prelims, arabic restarting at the first page of text.",
        "Put the copyright page on the verso (left-hand side) of the title page.",
        "Budget prelim pages early. They usually fill a four-page slot and eat into your extent."
      ],
      example: "Any book published to Chicago style: half title on page i, title page on iii, copyright on iv, contents opening on a right-hand page, index last.",
      numbers: "Chicago 1.7 and 1.8: roman numerals for front matter, arabic numerals for text and back matter.",
      pitfall: "Treating the prelims as leftover space. If the front matter grows by a page late in the process, everything after it shifts and the whole index has to be repaged.",
      source: "The Chicago Manual of Style, 18th edition, chapter 1 (sections 1.3 to 1.77)",
      verify: { status: "verified", note: "Read the CMOS 18th edition chapter 1 contents listing directly. The two numbering sections are titled in full: 1.7 Roman numerals for front matter, 1.8 Arabic numerals for text and back matter, which states the rule in the heading itself. Running order confirmed from the headings: half title 1.18, series title 1.19, frontispiece 1.20, title page 1.21, copyright page 1.22, dedication 1.40, epigraph 1.41, contents 1.42, foreword 1.45, preface 1.46, introduction 1.48, then back matter from 1.65 through index 1.73, colophon 1.76 and errata 1.77. Section body text is paywalled (the section URLs redirect to a login), so the running order and the numbering rule come from the headings, not the body copy." },
      belongs: { verdict: "core", why: "The structural skeleton of every long printed document, and a convention with a published standard behind it." },
      related: [855, 857, 858]
    },
    {
      n: 857,
      title: "Chapter openers",
      aka: ["Chapter openings", "Sinkage"],
      oneLine: "The first page of a chapter is a designed event, not just a heading on a page.",
      demo: {
        caption: "Right: the text drops a set sink from the top, the running head goes, and the folio moves to the foot.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Heading run in at the top</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 120 172\"><rect class=\"s-mute\" x=\"10\" y=\"6\" width=\"100\" height=\"156\"/><text class=\"t\" x=\"22\" y=\"20\">CHAPTER 3</text><text class=\"t\" x=\"98\" y=\"20\" text-anchor=\"end\">41</text><text class=\"f\" x=\"22\" y=\"36\" font-size=\"11\">Three</text><g class=\"f-mute\" opacity=\"0.55\"><rect x=\"22\" y=\"46\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"55\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"64\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"73\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"82\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"91\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"100\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"109\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"118\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"127\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"136\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"145\" width=\"48\" height=\"3\"/></g></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Sink, no running head</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 120 172\"><rect class=\"s-mute\" x=\"10\" y=\"6\" width=\"100\" height=\"156\"/><path class=\"s-accent\" d=\"M16 6 V62 M13 6 H19 M13 62 H19\"/><text class=\"t\" x=\"24\" y=\"36\">SINK</text><text class=\"f\" x=\"22\" y=\"76\" font-size=\"17\">Three</text><g class=\"f-mute\" opacity=\"0.55\"><rect x=\"22\" y=\"90\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"99\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"108\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"117\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"126\" width=\"76\" height=\"3\"/><rect x=\"22\" y=\"135\" width=\"48\" height=\"3\"/></g><text class=\"t\" x=\"60\" y=\"156\" text-anchor=\"middle\">41</text></svg></div></div></div>"
      },
      what: "A chapter opener starts a new page, drops the text down from the top by a set amount (the sink or sinkage), sets the chapter number and title in display type, and usually suppresses the running head. In trade and academic books the opener conventionally falls on a recto, the right-hand page, which means a blank verso whenever the previous chapter ends on an odd page. That blank is a deliberate cost, not an error.",
      why: "The sink and the change of type give the eye a rest and mark a real break in the argument. Because it repeats, the opener also becomes the book's signature page: readers recognise it flipping through, which is why it carries so much of the design's character.",
      how: [
        "Set one sink measurement and apply it to every opener without exception.",
        "Decide up front whether chapters always open recto or may open on either side, then hold to it. Recto-only costs pages.",
        "Drop the folio to the foot or omit it on openers, and turn the running head off.",
        "Make the opener out of the same type family as the text, sized up, before reaching for a second face."
      ],
      example: "A 300-page novel where every chapter begins a third of the way down a fresh right-hand page, with no running head and the page number moved to the foot.",
      numbers: "",
      pitfall: "Choosing recto-only openers on a short book with many chapters. Twenty chapters can add ten blank versos, which is most of a signature of paper you are paying for.",
      source: "Trade book convention; The Chicago Manual of Style, 18th edition, sections 1.52 (determining page 1) and 1.55 (division into chapters)",
      verify: { status: "verified", note: "Confirmed from the CMOS 18th edition chapter 1 contents that 1.52 is Determining page 1 and 1.55 is Division into chapters, general, and that running head rules run 1.10 to 1.16, ending with 1.16 Omission of running heads. The body text of those sections is paywalled, so nothing here is claimed as a Chicago rule beyond what the headings support. In particular Chicago is not cited for recto openings: that is publisher house style and it varies." },
      belongs: { verdict: "core", why: "A repeated structural page that sets the tone of a whole book and drives its page count." },
      related: [856, 858, 864, 876]
    },
    {
      n: 858,
      title: "Long-document hierarchy",
      aka: ["Subhead levels", "Running heads and folios"],
      oneLine: "Long documents need a small, repeated set of levels plus running heads and folios that never vary.",
      demo: {
        caption: "The left has three heading levels separated only by point size; on the right each level changes case, family and size.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Size only</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-type\" style=\"font-size:15px;font-weight:600\">Materials</span><div class=\"db-lines\"><i></i><i></i></div><span class=\"db-type\" style=\"font-size:14px;font-weight:600\">Sample preparation</span><div class=\"db-lines\"><i></i><i></i></div><span class=\"db-type\" style=\"font-size:13px;font-weight:600\">Grinding</span><div class=\"db-lines\"><i></i><i></i></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">More than one variable</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-type db-type--display\" style=\"font-size:21px\">Materials</span><div class=\"db-lines\"><i></i><i></i></div><span class=\"db-type db-type--mono\" style=\"font-size:11px;text-transform:uppercase;letter-spacing:0.14em\">Sample preparation</span><div class=\"db-lines\"><i></i><i></i></div><span class=\"db-type\" style=\"font-size:13px;font-style:italic\">Grinding</span><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div>"
      },
      what: "Hierarchy in a long document is two things working together. Inside the text, a fixed ladder of subhead levels (A-head, B-head, C-head in publishing shorthand) shows how sections nest. Around the text, running heads and folios tell the reader where they are. Chicago handles both: subhead levels and placement, numbered subheads, ornamental breaks, and separate running head rules for front matter, text, back matter and endnotes.",
      why: "A reader who opens the book at random should be able to work out their position in about a second. That is what running heads are for. The subhead ladder does the same job vertically, so a scanning reader can tell a section from a sub-section without reading either.",
      how: [
        "Cap yourself at three subhead levels. If the content needs four, the structure is wrong.",
        "Make each level differ by more than one variable, so a reader can tell them apart out of context.",
        "Use the chapter title on the verso running head and the section or subhead on the recto, so a spread names both.",
        "Turn running heads off on display pages: chapter openers, part titles, full-bleed images."
      ],
      example: "An academic monograph where the left page always carries the book or chapter title and the right always carries the current section, so any open spread answers where am I.",
      numbers: "",
      pitfall: "Levels that look different in the style sheet but not on the page. A 12pt bold and an 11pt bold small-caps read as the same level to anyone not holding a ruler.",
      source: "The Chicago Manual of Style, 18th edition, sections 1.10 to 1.16 (running heads) and 1.61 to 1.64 (text subdivisions)",
      verify: { status: "verified", note: "Confirmed the scope of these sections from the CMOS 18th edition chapter 1 contents listing: 1.10 Running heads defined, 1.11 to 1.15 running heads for front matter, text, subheads, back matter and endnotes, 1.16 Omission of running heads, then 1.61 Subheads, wording, 1.62 Subhead levels and placement, 1.63 Numbered subheads, 1.64 Ornamental or typographic breaks. The three-level cap and the verso-recto running head pairing given here are common editorial practice, not Chicago rules, and are written as advice." },
      belongs: { verdict: "core", why: "Navigation in anything longer than a leaflet depends on it, and the same logic carries straight into web and app documentation." },
      related: [856, 857, 859]
    },
    {
      n: 859,
      title: "Rhythm and pacing across spreads",
      aka: ["Pacing", "The spread as the unit"],
      oneLine: "Design the spread, not the page, and vary the density of spreads so reading has a shape.",
      demo: {
        caption: "Twelve spreads as thumbnails. The left run is flat grey throughout; the right alternates full-bleed, dense text and quiet spreads.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One flat grey</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 78\"><g class=\"f-mute\" opacity=\"0.45\"><rect x=\"3\" y=\"8\" width=\"18\" height=\"26\"/><rect x=\"25\" y=\"8\" width=\"18\" height=\"26\"/><rect x=\"53\" y=\"8\" width=\"18\" height=\"26\"/><rect x=\"75\" y=\"8\" width=\"18\" height=\"26\"/><rect x=\"103\" y=\"8\" width=\"18\" height=\"26\"/><rect x=\"125\" y=\"8\" width=\"18\" height=\"26\"/><rect x=\"3\" y=\"44\" width=\"18\" height=\"26\"/><rect x=\"25\" y=\"44\" width=\"18\" height=\"26\"/><rect x=\"53\" y=\"44\" width=\"18\" height=\"26\"/><rect x=\"75\" y=\"44\" width=\"18\" height=\"26\"/><rect x=\"103\" y=\"44\" width=\"18\" height=\"26\"/><rect x=\"125\" y=\"44\" width=\"18\" height=\"26\"/></g><g class=\"s-mute\"><rect x=\"1\" y=\"6\" width=\"44\" height=\"30\"/><rect x=\"51\" y=\"6\" width=\"44\" height=\"30\"/><rect x=\"101\" y=\"6\" width=\"44\" height=\"30\"/><rect x=\"1\" y=\"42\" width=\"44\" height=\"30\"/><rect x=\"51\" y=\"42\" width=\"44\" height=\"30\"/><rect x=\"101\" y=\"42\" width=\"44\" height=\"30\"/><path d=\"M23 6 V36 M73 6 V36 M123 6 V36 M23 42 V72 M73 42 V72 M123 42 V72\"/></g></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Light and heavy</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 78\"><g class=\"f\"><rect x=\"3\" y=\"8\" width=\"18\" height=\"26\"/><rect x=\"25\" y=\"8\" width=\"18\" height=\"26\"/><rect x=\"125\" y=\"44\" width=\"18\" height=\"26\"/></g><g class=\"f-mute\" opacity=\"0.45\"><rect x=\"53\" y=\"8\" width=\"18\" height=\"26\"/><rect x=\"75\" y=\"8\" width=\"18\" height=\"26\"/><rect x=\"103\" y=\"8\" width=\"18\" height=\"26\"/><rect x=\"125\" y=\"8\" width=\"18\" height=\"26\"/><rect x=\"3\" y=\"44\" width=\"18\" height=\"26\"/><rect x=\"25\" y=\"44\" width=\"18\" height=\"26\"/><rect x=\"103\" y=\"44\" width=\"18\" height=\"26\"/></g><g class=\"f-mute\"><rect x=\"55\" y=\"54\" width=\"14\" height=\"3\"/><rect x=\"77\" y=\"54\" width=\"9\" height=\"3\"/></g><g class=\"s-mute\"><rect x=\"1\" y=\"6\" width=\"44\" height=\"30\"/><rect x=\"51\" y=\"6\" width=\"44\" height=\"30\"/><rect x=\"101\" y=\"6\" width=\"44\" height=\"30\"/><rect x=\"1\" y=\"42\" width=\"44\" height=\"30\"/><rect x=\"51\" y=\"42\" width=\"44\" height=\"30\"/><rect x=\"101\" y=\"42\" width=\"44\" height=\"30\"/><path d=\"M23 6 V36 M73 6 V36 M123 6 V36 M23 42 V72 M73 42 V72 M123 42 V72\"/></g></svg></div></div></div>"
      },
      what: "In a bound document the reader never sees a single page: they see two facing pages at once. Editorial designers therefore treat the spread as the unit of design, and plan a sequence of spreads the way an editor plans a sequence of scenes. Some spreads are dense text, some are a single image, some are mostly white. Laid out as thumbnails, the whole book should show a pattern of light and heavy rather than one flat grey.",
      why: "Uninterrupted uniformity makes long reading feel longer. Changing the density gives the reader a sense of progress and a place to stop, and it lets you put weight on the pages that matter.",
      how: [
        "Print or export the whole document as thumbnails and read the pattern before fixing any individual page.",
        "Check that anything crossing the gutter still works with the middle few millimetres lost to the binding.",
        "Plan an opener, a rest and a close for each section instead of pouring text end to end.",
        "Keep the underlying grid constant while the density changes, or the variation reads as chaos."
      ],
      example: "A magazine feature well laid out as a thumbnail wall, where a full-bleed opening spread is followed by two dense text spreads and then a quiet pull-quote spread.",
      numbers: "",
      pitfall: "Approving pages one at a time in a PDF viewer set to single-page view. Problems that only appear across the gutter, such as two facing images fighting, never show up until the proof arrives.",
      source: "Standard editorial practice; origin unclear",
      verify: { status: "unverified", note: "Left unverified after a second attempt. No named originator or single published statement of this as a principle was found. Pace and rhythm are standard vocabulary in editorial design teaching, and Zappaterra's Art Direction and Editorial Design does discuss changing pace and monotonous rhythms of pictures, but only a fragmentary third-party snippet of that text could be read, and the archived copy would not open to a searchable page. No attribution is made to Zappaterra, Tschichold or Hochuli on that basis. Everything in the entry is working practice a designer can act on; none of it is presented as a sourced rule." },
      belongs: { verdict: "core", why: "The spread, not the page, is what a reader of any bound object actually sees, so it is the correct unit to design in." },
      related: [855, 857, 858, 863]
    },
    {
      n: 860,
      title: "Paper choice, weight and opacity",
      aka: ["Stock selection", "Grammage", "GSM"],
      oneLine: "Paper is specified by grammage, thickness and opacity, and each choice changes how the printed page reads.",
      demo: {
        caption: "One mill's datasheet, drawn: mass per square metre, thickness measured between two anvils, and how much light the sheet stops.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 126\"><rect class=\"s\" x=\"26\" y=\"40\" width=\"60\" height=\"40\"/><text class=\"t\" x=\"56\" y=\"63\" text-anchor=\"middle\">1 m2</text><path class=\"s-accent\" d=\"M56 16 V34 M52 30 L56 35 L60 30\"/><text class=\"t\" x=\"56\" y=\"12\" text-anchor=\"middle\">MASS</text><rect class=\"f-mute\" x=\"134\" y=\"42\" width=\"68\" height=\"6\"/><rect class=\"f-mute\" opacity=\"0.3\" x=\"134\" y=\"52\" width=\"68\" height=\"8\"/><rect class=\"s\" x=\"134\" y=\"52\" width=\"68\" height=\"8\"/><rect class=\"f-mute\" x=\"134\" y=\"64\" width=\"68\" height=\"6\"/><path class=\"s-accent\" d=\"M204 52 H212 M204 60 H212 M208 52 V60\"/><text class=\"t\" x=\"168\" y=\"32\" text-anchor=\"middle\">ANVIL TO ANVIL</text><rect class=\"f-mute\" opacity=\"0.3\" x=\"246\" y=\"52\" width=\"68\" height=\"8\"/><rect class=\"s\" x=\"246\" y=\"52\" width=\"68\" height=\"8\"/><path class=\"s-accent\" d=\"M262 88 V64 M258 70 L262 63 L266 70 M280 88 V64 M276 70 L280 63 L284 70 M298 88 V64 M294 70 L298 63 L302 70\"/><path class=\"s-accent\" opacity=\"0.3\" d=\"M280 48 V34 M276 40 L280 33 L284 40\"/><text class=\"t\" x=\"280\" y=\"98\" text-anchor=\"middle\">LIGHT</text><g class=\"t\" text-anchor=\"middle\"><text x=\"56\" y=\"110\">GRAMMAGE ISO 536</text><text x=\"168\" y=\"110\">THICKNESS ISO 534</text><text x=\"280\" y=\"110\">OPACITY ISO 2471</text></g><g class=\"t\" text-anchor=\"middle\" style=\"fill:var(--accent)\"><text x=\"56\" y=\"122\">75 g/m2</text><text x=\"168\" y=\"122\">97 micron</text><text x=\"280\" y=\"122\">90 per cent</text></g></svg></div>"
      },
      what: "Paper is bought against measured properties, each with its own test standard. Grammage is mass per square metre in grams, measured to ISO 536, and is what people mean by gsm. Thickness (and from it bulk) is measured to ISO 534. Opacity, how much of the printing on the reverse is blocked, is measured to ISO 2471 and reported as a percentage. Surface matters as well: coated stocks hold a finer screen and sharper detail, uncoated stocks absorb more ink and read softer.",
      why: "Stock decides how the ink sits, how heavy the object feels and whether the reader is distracted by the page behind. It also decides the spine width and the postage, which is often what the client actually cares about.",
      how: [
        "Ask the printer for a bulking dummy in the exact stock and page count before finalising the spine.",
        "For double-sided text-heavy work, ask for the opacity figure rather than assuming heavier paper is more opaque.",
        "Match screen ruling to stock: fine screens need a coated or well-calendered sheet.",
        "Print a real proof on the actual stock. Uncoated paper will make your colours duller than the screen showed."
      ],
      example: "A paper mill datasheet reading grammage ISO 536 at 75 gsm, thickness ISO 534 at 97 microns, opacity ISO 2471 at 90 per cent. Those three lines are the paper's specification.",
      numbers: "ISO 536 gives grammage in g/m2. ISO 534 gives thickness in microns. ISO 2471 gives opacity as a percentage.",
      pitfall: "Specifying a heavier sheet to solve show-through. Weight and opacity are different properties, and a bulky 90 gsm can be less opaque than a dense 80 gsm.",
      source: "ISO 536, ISO 534 and ISO 2471 (paper test methods)",
      verify: { status: "verified", note: "Re-checked. The published preview of ISO 534:2011 confirms it specifies methods for measuring the thickness of paper and board. ISO's own 85.060 catalogue listing gives ISO 2471 as Determination of opacity (paper backing), diffuse reflectance method. The EBB Group artwork datasheet lists Grammage ISO 536 gsm 75, Thickness ISO 534 micron 97.0, Opacity ISO 2471 per cent 90.0, and a second mill datasheet shows the same three standards with different values, so the example figures are one sheet's specification and not a general rule. Full standard texts are paywalled and no internal figures are quoted from them." },
      belongs: { verdict: "core", why: "Stock is a design decision with measurable properties, and every other print decision depends on it." },
      related: [861, 862, 872, 876]
    },
    {
      n: 861,
      title: "Grain direction",
      aka: ["Long grain", "Short grain", "Machine direction"],
      oneLine: "Paper fibres line up in one direction; that direction decides how a sheet folds and a book opens.",
      demo: {
        caption: "Both sheets folded at the spine. Across the fibres the fold cracks; along them it folds cleanly and the book opens flat.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Grain across the spine</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 128\"><rect class=\"s-mute\" x=\"10\" y=\"10\" width=\"140\" height=\"92\"/><g class=\"s-mute\" opacity=\"0.4\"><path d=\"M12 18 H148 M12 28 H148 M12 38 H148 M12 48 H148 M12 58 H148 M12 68 H148 M12 78 H148 M12 88 H148 M12 98 H148\"/></g><path class=\"s-accent\" d=\"M22 26 H62 M27 22 L21 26 L27 30 M57 22 L63 26 L57 30\"/><text class=\"t\" x=\"66\" y=\"29\">GRAIN</text><path class=\"s-accent\" d=\"M80 10 l3 8 l-6 8 l6 8 l-6 8 l6 8 l-6 8 l6 8 l-6 8 l6 8 l-6 8 l3 12\"/><text class=\"t\" x=\"90\" y=\"62\" style=\"fill:var(--accent)\">CRACKS</text><text class=\"t\" x=\"80\" y=\"118\" text-anchor=\"middle\">SPINE FOLD</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Grain parallel to the spine</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 128\"><rect class=\"s-mute\" x=\"10\" y=\"10\" width=\"140\" height=\"92\"/><g class=\"s-mute\" opacity=\"0.4\"><path d=\"M16 12 V100 M26 12 V100 M36 12 V100 M46 12 V100 M56 12 V100 M66 12 V100 M76 12 V100 M86 12 V100 M96 12 V100 M106 12 V100 M116 12 V100 M126 12 V100 M136 12 V100 M146 12 V100\"/></g><path class=\"s-accent\" d=\"M22 24 V80 M18 29 L22 23 L26 29 M18 75 L22 81 L26 75\"/><text class=\"t\" x=\"34\" y=\"52\" transform=\"rotate(-90 34 52)\" text-anchor=\"middle\">GRAIN</text><path class=\"s-accent\" d=\"M80 10 V102\"/><text class=\"t\" x=\"88\" y=\"62\" style=\"fill:var(--accent)\">FOLDS CLEAN</text><text class=\"t\" x=\"80\" y=\"118\" text-anchor=\"middle\">SPINE FOLD</text></svg></div></div></div>"
      },
      what: "Paper is made on a moving wire, so the fibres mostly align along the direction of travel. That axis is the grain. Paper folds cleanly and bends easily along the grain, and cracks or fights you across it. It also swells more across the grain when it takes up moisture. In binding, the rule is that the grain of the text paper, the endpapers and the boards should run parallel to the spine.",
      why: "Grain running the right way is the difference between a book that falls open and stays open and one that springs shut in your hand. It also stops covers warping and folds cracking through the print.",
      how: [
        "Specify grain direction on the order, do not leave it to the printer to guess.",
        "For any bound item, ask for grain parallel to the spine.",
        "Test a sample by tearing it: a tear runs straighter along the grain than across it.",
        "For heavy or coated stock that must fold across the grain, ask for creasing rather than folding alone."
      ],
      example: "A hand-bound sketchbook where the paper grain runs across the spine instead of along it: the pages resist opening flat and the cover bows as humidity changes.",
      numbers: "",
      pitfall: "Digital short-run printers often supply whatever grain the sheet came in. On a 200-page perfect-bound book that means a spine that will not open flat, and nothing in the artwork can fix it.",
      source: "Standard bookbinding practice; no single originator",
      verify: { status: "verified", note: "The rule that grain should run parallel to the spine in paper and boards was confirmed across independent bookbinding sources, including Pimlico Bookbinding's article on paper grain and a paper supplier's grain-direction guide, which states that grain parallel to the spine makes books open flatter. Pimlico also confirms the moisture point directly: paper usually shrinks and expands more across the grain than along it when humidity changes. No single named originator was found, and none is claimed." },
      belongs: { verdict: "adjacent", why: "This is a property of how paper is manufactured rather than a design principle, but the design use is exact: a designer specifies grain parallel to the spine, or the finished book will not open properly." },
      related: [860, 863, 870]
    },
    {
      n: 862,
      title: "Show-through",
      aka: ["Print show-through", "Strike-through (the ink-penetration version)"],
      oneLine: "Show-through is printing on the back of a sheet becoming visible from the front.",
      demo: {
        caption: "The same text page over the same solid advert printed on the reverse. Only the opacity of the paper has changed.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Low opacity sheet</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 116\"><rect class=\"s-mute\" x=\"8\" y=\"6\" width=\"144\" height=\"104\"/><rect class=\"f\" opacity=\"0.24\" x=\"18\" y=\"18\" width=\"124\" height=\"80\"/><g class=\"f\"><rect x=\"18\" y=\"16\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"26\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"36\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"46\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"56\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"66\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"76\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"86\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"96\" width=\"74\" height=\"4\"/></g></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">High opacity sheet</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 116\"><rect class=\"s-mute\" x=\"8\" y=\"6\" width=\"144\" height=\"104\"/><rect class=\"f\" opacity=\"0.04\" x=\"18\" y=\"18\" width=\"124\" height=\"80\"/><g class=\"f\"><rect x=\"18\" y=\"16\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"26\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"36\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"46\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"56\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"66\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"76\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"86\" width=\"124\" height=\"4\"/><rect x=\"18\" y=\"96\" width=\"74\" height=\"4\"/></g></svg></div></div></div>"
      },
      what: "Show-through is the visibility, in normal light, of what is printed on the reverse of a sheet. PrintWiki distinguishes two causes. Ordinary show-through is a function of the paper's opacity: light passes through a thin sheet and you see the image behind. When the ink itself soaks into and through the sheet, the trade calls that strike-through. Heavy solids, high ink coverage and absorbent uncoated stock all make it worse.",
      why: "Text competing with a ghost of the page behind is harder to read and looks cheap. Since it is set by paper and ink coverage rather than layout, the fix has to be decided at specification time.",
      how: [
        "Ask for the opacity figure (ISO 2471) rather than judging by weight.",
        "Back up heavy solid areas with other heavy areas rather than with fine text.",
        "Keep total ink coverage down on thin or absorbent stock.",
        "Hold a printed sample over a white sheet under the lighting the reader will actually use."
      ],
      example: "A newspaper page where a full-page dark advertisement on the reverse turns the text page in front of it grey and patchy.",
      numbers: "",
      pitfall: "Approving show-through on a single loose sheet held up to a window. In a bound book with pages stacked behind it, the effect is far weaker, so you can also over-specify and pay for opacity you never needed.",
      source: "PrintWiki, Show-Through; ISO 2471 for the opacity measurement",
      verify: { status: "verified", note: "The distinction is quoted almost verbatim from the PrintWiki Show-Through entry: show-through is typically a function of a paper's opacity, while show-through resulting from increased ink absorption and penetration through the paper is referred to as strike-through. ISO 2471 confirmed as the opacity method from ISO's 85.060 catalogue listing and from mill datasheets. The claim that show-through is harder to read is stated as craft judgement, not as a measured reading-speed result, because no study was found to support a number." },
      belongs: { verdict: "core", why: "A visible quality defect that a designer causes or prevents through stock and ink coverage choices." },
      related: [860, 868, 876]
    },
    {
      n: 863,
      title: "Binding methods and creep",
      aka: ["Push-out", "Shingling", "Binding allowance"],
      oneLine: "How pages are held together, and how thick paper pushes the inner pages of a folded section outward.",
      demo: {
        caption: "Nested folded sheets end-on. Each inner sheet pushes further past the trim line, so the knife takes more off the middle pages.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 132\"><path class=\"s\" d=\"M250 40 H70 A30 30 0 0 0 70 100 H250\"/><path class=\"s\" d=\"M257 47 H70 A23 23 0 0 0 70 93 H257\"/><path class=\"s\" d=\"M264 54 H70 A16 16 0 0 0 70 86 H264\"/><path class=\"s\" d=\"M271 61 H70 A9 9 0 0 0 70 79 H271\"/><path class=\"s-accent\" stroke-dasharray=\"4 3\" d=\"M248 28 V112\"/><text class=\"t\" x=\"248\" y=\"124\" text-anchor=\"middle\">TRIM</text><path class=\"s-accent\" d=\"M250 22 H271 M250 18 V26 M271 18 V26\"/><text class=\"t\" x=\"260\" y=\"12\" text-anchor=\"middle\" style=\"fill:var(--accent)\">CREEP</text><text class=\"t\" x=\"34\" y=\"73\" text-anchor=\"end\">SPINE</text><path class=\"s-mute\" d=\"M36 70 H42\"/></svg></div>"
      },
      what: "The main methods are saddle-stitching (folded sheets nested and stapled through the spine), perfect binding (pages milled and glued, normally with EVA hot-melt, or with PUR adhesive where better lay-flat and durability are worth paying for), section sewn (signatures sewn then cased in), and mechanical bindings such as wiro. Saddle-stitching brings a specific problem: each nested sheet sits inside the last, so inner pages project further at the fore-edge. After trimming they are narrower than the outer pages. That projection is creep or push-out, and compensating for it in imposition is called shingling.",
      why: "Creep silently eats your outer margin on exactly the pages you cannot see it happening to, and it slides page numbers and rules out of alignment through the middle of the booklet. Binding choice also decides whether a spread can cross the gutter at all.",
      how: [
        "Tell the printer the page count and stock early and ask them to apply creep compensation at imposition.",
        "On saddle-stitched work with thick stock, add extra fore-edge margin rather than trusting the automatic fix.",
        "For anything that must lie flat, ask about PUR perfect binding or section sewing before you design crossovers.",
        "Never put critical content, such as a face or a phone number, in the gutter of a perfect-bound book."
      ],
      example: "A 64-page saddle-stitched brochure on 170 gsm silk where the centre spread's page numbers sit visibly closer to the trim edge than those on page 3.",
      numbers: "",
      pitfall: "Applying creep compensation twice, once in the layout file and once at the printer's imposition stage. The result is a middle spread with a suspiciously wide outer margin.",
      source: "Standard bindery practice; no single originator",
      verify: { status: "adjusted", note: "Creep, push-out and shingling confirmed as the same phenomenon across independent trade sources including Cedar Graphics' multi-page tutorial and Color Vision Printing's saddle-stitch guide. No published universal creep figure exists, since it depends on caliper and page count, so no number is given. Corrected one claim: the entry said perfect binding uses PUR adhesive usually. Binding-adhesive suppliers and printers describe EVA hot-melt as the cheap standard and PUR as the more durable, better lay-flat upgrade, so PUR is the option, not the norm." },
      belongs: { verdict: "core", why: "Binding choice constrains what a layout can do, and creep is a geometry problem the designer has to allow for." },
      related: [861, 864, 865, 876]
    },
    {
      n: 864,
      title: "Imposition",
      aka: ["Signatures", "Sections", "Page make-up"],
      oneLine: "Imposition is the arrangement of pages on a press sheet so they fold into the right order.",
      demo: {
        caption: "Pages sit out of order and half upside down on the press sheet; fold it twice and they run 1 to 8.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 152\"><text class=\"t\" x=\"96\" y=\"12\" text-anchor=\"middle\">ONE SIDE OF THE PRESS SHEET</text><rect class=\"s\" x=\"6\" y=\"18\" width=\"180\" height=\"112\"/><path class=\"s-mute\" stroke-dasharray=\"5 4\" d=\"M96 18 V130 M6 74 H186\"/><g class=\"f\" text-anchor=\"middle\" font-size=\"20\"><text x=\"51\" y=\"53\" transform=\"rotate(180 51 46)\">5</text><text x=\"141\" y=\"53\" transform=\"rotate(180 141 46)\">4</text><text x=\"51\" y=\"109\">8</text><text x=\"141\" y=\"109\">1</text></g><text class=\"t\" x=\"6\" y=\"144\">FOLDS DASHED, EVERY PAIR SUMS TO 9</text><path class=\"s-accent\" d=\"M196 74 H222 M216 69 L223 74 L216 79\"/><text class=\"t\" x=\"282\" y=\"12\" text-anchor=\"middle\">FOLDED AND TRIMMED</text><g class=\"s-mute\"><rect x=\"236\" y=\"22\" width=\"18\" height=\"30\"/><rect x=\"258\" y=\"22\" width=\"18\" height=\"30\"/><rect x=\"280\" y=\"22\" width=\"18\" height=\"30\"/><rect x=\"302\" y=\"22\" width=\"18\" height=\"30\"/><rect x=\"236\" y=\"62\" width=\"18\" height=\"30\"/><rect x=\"258\" y=\"62\" width=\"18\" height=\"30\"/><rect x=\"280\" y=\"62\" width=\"18\" height=\"30\"/><rect x=\"302\" y=\"62\" width=\"18\" height=\"30\"/></g><g class=\"f\" text-anchor=\"middle\" font-size=\"11\"><text x=\"245\" y=\"42\">1</text><text x=\"267\" y=\"42\">2</text><text x=\"289\" y=\"42\">3</text><text x=\"311\" y=\"42\">4</text><text x=\"245\" y=\"82\">5</text><text x=\"267\" y=\"82\">6</text><text x=\"289\" y=\"82\">7</text><text x=\"311\" y=\"82\">8</text></g></svg></div>"
      },
      what: "A press prints large sheets, which are then folded, gathered and trimmed. Each fold doubles the number of pages, so a folded sheet always produces pages in multiples of four. Offset books are usually planned in 8, 16 or 32 page sections, because larger sections mean fewer sheets, fewer folds and less handling. The layout of pages on that sheet, upside down and out of sequence so they land correctly after folding, is the imposition.",
      why: "Imposition sets your extent. A book of 250 pages will be printed and paid for as 256, and those six pages will exist whether you use them or not. Knowing the section size lets you place colour sections, decide where blanks fall and use the paid-for pages deliberately.",
      how: [
        "Ask the printer what section size they will run before you fix the page count.",
        "Design to a page count that is a multiple of the section, not just a multiple of four.",
        "If colour is restricted to certain sections, plan the picture content to land in them.",
        "Supply single pages as single pages. Let the printer impose, unless they ask otherwise."
      ],
      example: "A 96-page paperback printed as six 16-page sections, so the designer plans in blocks of 16 and knows exactly where each section begins.",
      numbers: "Folding gives pages in multiples of four. Common offset sections are 8, 16 and 32 pages.",
      pitfall: "Handing the printer reader spreads instead of single pages. They then have to take the file apart before imposing it, which costs time and introduces errors.",
      source: "Standard print production practice; no single originator",
      verify: { status: "verified", note: "Multiples of four from folding, and 8/16/32 as common signature sizes, confirmed across independent print sources including QinPrinting's signatures guide and PrintIndustry.com's discussion of when smaller signatures are used. I found no standards body defining signature sizes; they are a press and folder constraint." },
      belongs: { verdict: "core", why: "Page count is a design decision, and imposition is what turns it into a cost and a set of physical constraints." },
      related: [863, 865, 866, 876]
    },
    {
      n: 865,
      title: "Trim, bleed and safety margin",
      aka: ["Bleed and quiet area", "Safe zone"],
      oneLine: "Trim is the finished edge, bleed runs past it, and safety keeps content clear of the knife.",
      demo: {
        caption: "Artwork runs past the trim and text stays inside the safe band, so a cut landing a millimetre out still looks right.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 162\"><rect class=\"f-mute\" opacity=\"0.35\" x=\"14\" y=\"14\" width=\"200\" height=\"132\"/><rect class=\"s\" x=\"26\" y=\"26\" width=\"176\" height=\"108\"/><rect class=\"s-accent\" stroke-dasharray=\"4 3\" x=\"42\" y=\"42\" width=\"144\" height=\"76\"/><g class=\"f-mute\"><rect x=\"50\" y=\"48\" width=\"92\" height=\"9\"/><rect x=\"50\" y=\"68\" width=\"128\" height=\"4\"/><rect x=\"50\" y=\"78\" width=\"128\" height=\"4\"/><rect x=\"50\" y=\"88\" width=\"128\" height=\"4\"/><rect x=\"50\" y=\"98\" width=\"84\" height=\"4\"/></g><path class=\"s-mute\" d=\"M214 30 H230 M202 76 H230 M186 120 H230\"/><g class=\"t\"><text x=\"234\" y=\"33\">BLEED, 3 mm</text><text x=\"234\" y=\"79\">TRIM</text><text x=\"234\" y=\"123\">SAFE, 5 mm</text></g><path class=\"s\" stroke-dasharray=\"8 4\" d=\"M14 140 H214\"/><text class=\"t\" x=\"14\" y=\"156\">A CUT THAT DRIFTS STILL LANDS IN THE BLEED</text></svg></div>"
      },
      what: "Trim size is the finished dimension of the piece. Bleed is artwork extended beyond the trim so that a slightly inaccurate cut still shows ink to the edge rather than a white sliver. The safety margin (some printers call it the quiet area) is a band inside the trim that you keep text and logos out of, for the same reason in the other direction. Guillotines cut through stacks and drift by a fraction, and both allowances exist to absorb that drift.",
      why: "The knife is the last uncontrolled step in the process. Bleed and safety together mean the piece survives being cut a millimetre or two off without anyone noticing.",
      how: [
        "Set the bleed value in the document at the start, not on export.",
        "Extend background images and colour panels into the bleed properly, not by scaling them up on export.",
        "Keep page numbers, captions and logos inside the safety band even when the layout begs for an edge.",
        "Check the printer's own spec sheet. Bleed and safety values differ by product and by press."
      ],
      example: "A business card designed with a full-colour background: the colour is drawn 3 mm past the trim on all four sides, while the phone number sits comfortably inside the safe area.",
      numbers: "UK and European printers commonly ask for 3 mm bleed. Mixam's UK guidance asks for 3 mm bleed on every product except hardcover covers, which need 20 mm, and a quiet area of at least 5 mm inside the trim edge.",
      pitfall: "Bleeding a photograph but leaving a white-filled box behind it at exactly trim size. The box wins at the edge and you get a hairline of white on one side of the finished job.",
      source: "Printer specification convention; no single standard body",
      verify: { status: "adjusted", note: "Corrected. The entry previously gave Mixam's quiet area as 0.25 inch, which is the figure on Mixam's US site. Mixam's UK bleed page, read this session, says the quiet area should be a minimum of 5mm inside the trim edge, that all print items except hardcover (casebound) book covers require a 3mm bleed area outside the trim line, and that hardcover covers need a 20mm bleed. Their UK FAQ repeats the 3mm figure. 3 mm remains the common UK bleed value across other printers' spec pages. Values vary by printer and product, and the entry says so." },
      belongs: { verdict: "core", why: "Every printed file needs these three allowances set correctly, and getting them wrong wastes a whole print run." },
      related: [864, 866, 875]
    },
    {
      n: 866,
      title: "Crop and registration marks",
      aka: ["Printer's marks", "Trim marks", "Colour bars"],
      oneLine: "Printer marks sit outside the trim and tell the press and guillotine where things go.",
      demo: {
        caption: "Everything outside the trim: corner ticks for the knife, a crosshair for plate alignment, patches for ink density, and a slug line.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 178\"><rect class=\"f-mute\" opacity=\"0.3\" x=\"44\" y=\"34\" width=\"202\" height=\"112\"/><rect class=\"s-mute\" stroke-dasharray=\"4 3\" x=\"44\" y=\"34\" width=\"202\" height=\"112\"/><rect class=\"s-mute\" x=\"50\" y=\"40\" width=\"190\" height=\"100\"/><path class=\"s\" d=\"M28 40 H40 M50 18 V30 M250 40 H262 M240 18 V30 M28 140 H40 M50 150 V162 M250 140 H262 M240 150 V162\"/><text class=\"t\" x=\"2\" y=\"14\">CROP MARKS</text><circle class=\"s\" cx=\"298\" cy=\"90\" r=\"7\"/><path class=\"s\" d=\"M286 90 H310 M298 78 V102\"/><text class=\"t\" x=\"294\" y=\"116\" text-anchor=\"middle\">REGISTRATION</text><g><rect x=\"70\" y=\"18\" width=\"18\" height=\"11\" fill=\"#29abe2\"/><rect x=\"89\" y=\"18\" width=\"18\" height=\"11\" fill=\"#ec008c\"/><rect x=\"108\" y=\"18\" width=\"18\" height=\"11\" fill=\"#fff200\"/><rect x=\"127\" y=\"18\" width=\"18\" height=\"11\" fill=\"var(--ink)\"/><rect x=\"146\" y=\"18\" width=\"18\" height=\"11\" fill=\"#29abe2\" opacity=\"0.5\"/><rect x=\"165\" y=\"18\" width=\"18\" height=\"11\" fill=\"#ec008c\" opacity=\"0.5\"/><rect x=\"184\" y=\"18\" width=\"18\" height=\"11\" fill=\"#fff200\" opacity=\"0.5\"/><rect x=\"203\" y=\"18\" width=\"18\" height=\"11\" fill=\"var(--ink)\" opacity=\"0.5\"/></g><text class=\"t\" x=\"145\" y=\"12\" text-anchor=\"middle\">COLOUR BAR</text><text class=\"t\" x=\"2\" y=\"174\">SLUG: JOB 4412 / COVER / v3 / 18 AUG</text></svg></div>"
      },
      what: "Printer marks are added outside the trim area on the press sheet. Crop or trim marks are short right-angled ticks at each corner showing where to cut, offset slightly so they do not print inside the finished piece. Registration marks are small crosshair targets printed in all separations at once, so an operator can see instantly whether the plates are lined up. Colour bars are strips of known ink patches used to measure density and consistency across the sheet. Page information and slug data label the file. All of it is trimmed away.",
      why: "These marks are how a press operator checks their own work while the job runs. They also tell the finishing department what your intended trim actually was, which matters when a PDF page box is ambiguous.",
      how: [
        "Turn marks on at export, and set the offset so marks sit outside the bleed, not on top of it.",
        "Never draw marks by hand inside the artwork. Let the layout application place them.",
        "Add a slug line with the job name, date and version so the right proof gets signed.",
        "If the printer imposes the job themselves, ask whether they want marks at all. Many prefer clean single pages."
      ],
      example: "Any commercially printed poster proof, where the corner ticks, the four-colour crosshair targets and the strip of solid CMYK patches sit in the white area around the image.",
      numbers: "",
      pitfall: "Setting the mark offset smaller than the bleed. The crop marks then sit on top of the bleed area and get printed into the artwork if the trim shifts.",
      source: "Standard prepress practice, as implemented in Adobe applications (Marks and Bleeds output options)",
      verify: { status: "verified", note: "The set of marks and what each is for confirmed against Adobe's own Marks and Bleeds documentation, which lists crop marks, bleed marks, registration marks, colour bars and page information alongside the bleed and slug areas, plus trade descriptions of colour bars as press quality-control strips." },
      belongs: { verdict: "adjacent", why: "Overturned from core on review. These are machine instructions for the press and the guillotine, not design decisions: the designer's whole involvement is an export dialogue and an offset value. It stays in because getting it wrong sends the job back, but it asks for no judgement the way trim, bleed and safety do." },
      related: [865, 867, 875]
    },
    {
      n: 867,
      title: "Overprint and knockout",
      aka: ["Overprinting", "Trapping", "Rich black"],
      oneLine: "Overprinting ink prints on top of what is beneath; knockout cuts a hole for it.",
      demo: {
        caption: "The same black bar, printed a fraction off register. On the left the knocked-out hole shows as a sliver of bare paper.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Knockout, plates shift</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 110\"><rect class=\"f-accent\" x=\"10\" y=\"10\" width=\"140\" height=\"90\"/><rect x=\"30\" y=\"40\" width=\"100\" height=\"26\" fill=\"var(--paper)\"/><rect class=\"f\" x=\"26\" y=\"36\" width=\"100\" height=\"26\"/><text class=\"t\" x=\"80\" y=\"88\" text-anchor=\"middle\" style=\"fill:var(--paper)\">BARE PAPER AT THE JOIN</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Black overprints</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 110\"><rect class=\"f-accent\" x=\"10\" y=\"10\" width=\"140\" height=\"90\"/><rect class=\"s-mute\" stroke-dasharray=\"3 2\" x=\"30\" y=\"40\" width=\"100\" height=\"26\"/><rect class=\"f\" x=\"26\" y=\"36\" width=\"100\" height=\"26\"/><text class=\"t\" x=\"80\" y=\"88\" text-anchor=\"middle\" style=\"fill:var(--paper)\">SAME SHIFT, NO GAP</text></svg></div></div></div>"
      },
      what: "By default a page layout application knocks out: where a coloured object sits over another, the underlying colour is removed so the inks do not mix. That is right for colour accuracy but leaves nothing to hide behind if the plates shift slightly on press, so a white hairline can appear at the join. Overprinting instead lets the top ink print over the one below. InDesign automatically overprints 100 per cent black fills and strokes for exactly this reason, so small black type over colour does not fringe. Trapping is the related trick of slightly overlapping adjacent colours to cover misregistration.",
      why: "Registration on a press is never perfect. These settings decide whether a small error shows as a white gap, a muddy overlap, or nothing at all.",
      how: [
        "Leave black type at C0 M0 Y0 K100 so the automatic black overprint applies to it.",
        "Use a rich black (black plus small amounts of cyan, magenta and yellow) only for large black areas, and ask the printer for their preferred build.",
        "Turn on Overprint Preview before signing anything off. Overprints are invisible in normal view.",
        "Never colour artwork with the Registration swatch. It puts 100 per cent of every ink down."
      ],
      example: "Fine white type reversed out of a four-colour photograph. If it is set to overprint by mistake, it disappears completely on press while looking perfect on screen.",
      numbers: "",
      pitfall: "Applying rich black to small text. The four plates cannot register tightly enough at that size, so the letters fringe in colour. Rich black is for large areas only.",
      source: "Adobe InDesign Help, About overprinting; standard prepress practice",
      verify: { status: "verified", note: "Read Adobe's InDesign About overprinting page in full this session. It says: by default, InDesign knocks out the underlying color, but this can expose white gaps if registration shifts; InDesign automatically overprints 100% black fills and strokes by default, which prevents misregistration issues with small black text positioned over colored areas; rich black is for large black areas or large black type, with exact percentages to come from the service provider; rich black is not to be confused with the Registration color; and tints of black and unnamed blacks are not affected by the overprint preference." },
      belongs: { verdict: "core", why: "A file-level decision that changes what physically appears on paper, and one of the classic ways artwork fails silently." },
      related: [866, 868, 869, 875]
    },
    {
      n: 868,
      title: "Total ink limit",
      aka: ["TAC", "Total area coverage", "Total ink coverage"],
      oneLine: "Total ink limit is the maximum combined percentage of all inks a press and paper can take.",
      demo: {
        caption: "Add the four inks at one point. The hand-built black totals 400 per cent, far past the ceiling the profile sets.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 124\"><text class=\"t\" x=\"255\" y=\"10\" text-anchor=\"middle\" style=\"fill:var(--accent)\">PROFILE LIMIT</text><path class=\"s-accent\" stroke-dasharray=\"4 3\" d=\"M255 14 V100\"/><text class=\"t\" x=\"56\" y=\"41\" text-anchor=\"end\">BY HAND</text><rect x=\"60\" y=\"26\" width=\"65\" height=\"22\" fill=\"#29abe2\"/><rect x=\"125\" y=\"26\" width=\"65\" height=\"22\" fill=\"#ec008c\"/><rect x=\"190\" y=\"26\" width=\"65\" height=\"22\" fill=\"#fff200\"/><rect x=\"255\" y=\"26\" width=\"65\" height=\"22\" fill=\"var(--ink)\"/><text class=\"t\" x=\"287\" y=\"41\" text-anchor=\"middle\" style=\"fill:var(--paper)\">400%</text><text class=\"t\" x=\"56\" y=\"85\" text-anchor=\"end\">CONVERTED</text><rect x=\"60\" y=\"70\" width=\"39\" height=\"22\" fill=\"#29abe2\"/><rect x=\"99\" y=\"70\" width=\"26\" height=\"22\" fill=\"#ec008c\"/><rect x=\"125\" y=\"70\" width=\"26\" height=\"22\" fill=\"#fff200\"/><rect x=\"151\" y=\"70\" width=\"65\" height=\"22\" fill=\"var(--ink)\"/><text class=\"t\" x=\"183\" y=\"85\" text-anchor=\"middle\" style=\"fill:var(--paper)\">240%</text><path class=\"s-mute\" d=\"M60 100 H320 M60 100 V104 M125 100 V104 M190 100 V104 M255 100 V104 M320 100 V104\"/><g class=\"t\" text-anchor=\"middle\"><text x=\"60\" y=\"116\">0</text><text x=\"125\" y=\"116\">100</text><text x=\"190\" y=\"116\">200</text><text x=\"255\" y=\"116\">300</text><text x=\"320\" y=\"116\">400</text></g></svg></div>"
      },
      what: "Add the cyan, magenta, yellow and black percentages at any point in an image and you get its total area coverage. Four solid inks would be 400 per cent, which no press can dry or hold. Each printing condition therefore sets a ceiling, built into its ICC profile. Uncoated and newsprint conditions sit lower than coated ones, because absorbent paper takes less ink before it stops working.",
      why: "Exceed the limit and shadows fill in and go muddy, ink fails to dry, and sheets set off against each other in the stack. Staying inside it is what keeps dark areas readable as dark rather than as a black smear.",
      how: [
        "Ask the printer which output profile they want, then convert to it rather than guessing at CMYK values.",
        "Check shadows with the Total Ink readout in Photoshop's Info panel before you supply files.",
        "Do not hand-build blacks at 100/100/100/100. Use the printer's rich black recipe.",
        "For newsprint or uncoated stock, expect a lower ceiling and design darks accordingly."
      ],
      example: "A moody full-bleed photograph converted with no profile applied, arriving at the printer with shadow areas above 360 per cent. The press cannot dry it and the sheets offset onto each other.",
      numbers: "The limit belongs to the profile, not to the press in general. ECI publishes two profiles for the same European coated condition, FOGRA39L: ISO Coated v2 (ECI), and ISO Coated v2 300% (ECI), the second built to a lower 300 per cent ceiling for web offset. Printing United Alliance quotes 320 per cent for sheetfed coated (GRACoL), 300 to 320 per cent for heatset web and 300 per cent for SWOP, and calls those industry averages.",
      pitfall: "Treating the ink limit as a fixed number rather than a property of the chosen profile and paper. Published figures for the same named condition disagree, so the right number comes from the printer.",
      source: "ISO 12647-2 printing conditions and their characterisation data; ECI offset profile documentation; Printing United Alliance guidance on ink limits",
      verify: { status: "adjusted", note: "The author's figures did not hold up and have been replaced. Printing United Alliance's 2024 ink-limit guidance gives GRACoL 320 per cent, heatset web 300 to 320 per cent, SWOP 300 per cent and FOGRA39 300 per cent, so the claim that GRACoL is commonly quoted at 300 per cent was wrong. The 330 per cent figure is real but belongs to a specific profile rather than to FOGRA39 as such: ECI's own offset page describes ISO Coated v2 300% (ECI) as a version with lower maximum ink coverage (300%) of a pair of profiles both based on FOGRA39L, and separately describes a 2008 profile creating a maximum tone value sum of 330 percent against a 300 per cent variant. Sources therefore genuinely conflict, and the entry now says so instead of asserting one pair of numbers. ISO 12647-2 itself is paywalled and no figure is quoted from it." },
      belongs: { verdict: "core", why: "A hard physical ceiling that limits what a designer can specify in dark areas of any CMYK job." },
      related: [862, 867, 872, 875, 323]
    },
    {
      n: 869,
      title: "Spot colours and specials",
      aka: ["Pantone", "PMS", "Special inks"],
      oneLine: "A spot colour is a pre-mixed ink printed from its own plate, not built from CMYK.",
      demo: {
        caption: "Two ways to put colour on paper: four plates of overlapping dots, or one plate of ink mixed to a formula.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 134\"><defs><pattern id=\"db869rosette\" width=\"12\" height=\"12\" patternUnits=\"userSpaceOnUse\"><rect width=\"12\" height=\"12\" fill=\"var(--paper)\"/><circle cx=\"3\" cy=\"3\" r=\"3.4\" fill=\"#29abe2\" opacity=\"0.85\"/><circle cx=\"8\" cy=\"4\" r=\"3.4\" fill=\"#ec008c\" opacity=\"0.85\"/><circle cx=\"4\" cy=\"9\" r=\"3.4\" fill=\"#fff200\" opacity=\"0.85\"/><circle cx=\"9\" cy=\"9\" r=\"2.4\" fill=\"var(--ink)\" opacity=\"0.85\"/></pattern></defs><text class=\"t\" x=\"83\" y=\"12\" text-anchor=\"middle\">PROCESS BUILD</text><rect x=\"12\" y=\"22\" width=\"28\" height=\"28\" fill=\"#29abe2\"/><rect x=\"44\" y=\"22\" width=\"28\" height=\"28\" fill=\"#ec008c\"/><rect x=\"76\" y=\"22\" width=\"28\" height=\"28\" fill=\"#fff200\"/><rect x=\"108\" y=\"22\" width=\"28\" height=\"28\" fill=\"var(--ink)\"/><path class=\"s-accent\" d=\"M83 56 V66 M78 61 L83 68 L88 61\"/><rect x=\"48\" y=\"74\" width=\"70\" height=\"40\" fill=\"url(#db869rosette)\"/><rect class=\"s-mute\" x=\"48\" y=\"74\" width=\"70\" height=\"40\"/><text class=\"t\" x=\"83\" y=\"128\" text-anchor=\"middle\">FOUR PLATES, FOUR WASH-UPS</text><path class=\"s-mute\" d=\"M168 6 V128\"/><text class=\"t\" x=\"253\" y=\"12\" text-anchor=\"middle\">SPOT INK</text><rect class=\"f-accent\" x=\"239\" y=\"22\" width=\"28\" height=\"28\"/><path class=\"s-accent\" d=\"M253 56 V66 M248 61 L253 68 L258 61\"/><rect class=\"f-accent\" x=\"218\" y=\"74\" width=\"70\" height=\"40\"/><rect class=\"s-mute\" x=\"218\" y=\"74\" width=\"70\" height=\"40\"/><text class=\"t\" x=\"253\" y=\"128\" text-anchor=\"middle\">ONE PLATE, ONE MIXED INK</text></svg></div>"
      },
      what: "Rather than simulating a colour with four process inks, a spot colour is mixed to a formula and printed from a single plate. The Pantone Matching System, created by Lawrence Herbert and launched in 1963, gave the trade a shared numbered vocabulary for these inks, with printed fan guides on coated, uncoated and matte stock. Specials go further: metallics, fluorescents, pastels and neons that four-colour process cannot reach. A large minority of the system has never been reproducible in CMYK at all.",
      why: "A spot colour gives you exact, repeatable brand colour across print runs, and access to colours outside the CMYK gamut. It also costs an extra plate and an extra wash-up on press, so it has to earn its place.",
      how: [
        "Specify spot colours from a current printed guide viewed under controlled light, never from a screen swatch.",
        "Quote the coated or uncoated reference explicitly, since the same number prints differently on each.",
        "Check whether the job is running as spot plus process or as process only, and set the swatch type to match.",
        "Delete unused spot swatches before export, or the printer's preflight will flag a fifth plate you never wanted."
      ],
      example: "A two-colour annual report printed as one Pantone plus black: two plates instead of four, and a brand colour that matches across every print run.",
      numbers: "The most-quoted published figure is that about 30 per cent of the system's 1,114 spot colours, counted as of the year 2000, cannot be simulated in CMYK. It is tied to that year and that library size, and the library has grown a great deal since, so treat it as an order of magnitude rather than a current statistic.",
      pitfall: "From November 2022, Pantone libraries stopped being bundled free inside Adobe applications and moved to a paid plugin, so swatches in older files can drop out. Guides also yellow with age, and Pantone recommends buying replacements annually.",
      source: "Lawrence Herbert, Pantone Matching System, launched 1963",
      verify: { status: "verified", note: "Pantone's own help centre states that Pantone was founded in 1963 by Lawrence Herbert and that the matching system was first launched in that same year; Hofstra University's page on Herbert, an alumnus, says he joined in 1956, bought the company in 1962 and invented the system in 1963. Wikipedia's Pantone article, read as source text, confirms the 1962 purchase for US$50,000, states that about 30% of the Pantone system's 1114 spot colors (as of year 2000) cannot be simulated with CMYK, and that Pantone recommends that PMS Color Guides be purchased annually, as their inks become yellowish over time. The Adobe change is dated by the article's cited Verge piece of 1 November 2022. The percentage was restored to the entry with its year and library-size caveat attached, rather than dropped, because the caveat is the honest part." },
      belongs: { verdict: "core", why: "Spot colour is a live design and budget decision on almost every identity job that gets printed." },
      related: [867, 870, 322, 843]
    },
    {
      n: 870,
      title: "Varnish, foiling, embossing, die-cutting",
      aka: ["Print finishing", "Embellishment", "Specials"],
      oneLine: "Finishing processes applied after printing that change the surface, the shape or the feel of a piece.",
      demo: {
        caption: "The sheet in section: varnish and foil sit on top, embossing pushes the paper up, debossing down, and the die cuts through.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 102\"><text class=\"t\" x=\"165\" y=\"14\" text-anchor=\"middle\">THE SHEET IN SECTION</text><rect class=\"f-mute\" opacity=\"0.35\" x=\"4\" y=\"52\" width=\"58\" height=\"10\"/><rect class=\"s\" x=\"4\" y=\"52\" width=\"58\" height=\"10\"/><rect class=\"f-accent\" opacity=\"0.45\" x=\"16\" y=\"47\" width=\"34\" height=\"5\"/><rect class=\"f-mute\" opacity=\"0.35\" x=\"70\" y=\"52\" width=\"58\" height=\"10\"/><rect class=\"s\" x=\"70\" y=\"52\" width=\"58\" height=\"10\"/><rect class=\"f\" x=\"82\" y=\"45\" width=\"34\" height=\"7\"/><path class=\"f-mute\" opacity=\"0.35\" d=\"M136 52 H152 L158 42 H172 L178 52 H194 V62 H178 L172 52 H158 L152 62 H136 Z\"/><path class=\"s\" d=\"M136 52 H152 L158 42 H172 L178 52 H194 V62 H178 L172 52 H158 L152 62 H136 Z\"/><path class=\"f-mute\" opacity=\"0.35\" d=\"M202 52 H218 L224 62 H238 L244 52 H260 V62 H244 L238 72 H224 L218 62 H202 Z\"/><path class=\"s\" d=\"M202 52 H218 L224 62 H238 L244 52 H260 V62 H244 L238 72 H224 L218 62 H202 Z\"/><rect class=\"f-mute\" opacity=\"0.35\" x=\"268\" y=\"52\" width=\"20\" height=\"10\"/><rect class=\"s\" x=\"268\" y=\"52\" width=\"20\" height=\"10\"/><rect class=\"f-mute\" opacity=\"0.35\" x=\"306\" y=\"52\" width=\"20\" height=\"10\"/><rect class=\"s\" x=\"306\" y=\"52\" width=\"20\" height=\"10\"/><path class=\"s-accent\" stroke-dasharray=\"3 2\" d=\"M288 44 V70 M306 44 V70\"/><g class=\"t\" text-anchor=\"middle\"><text x=\"33\" y=\"90\">SPOT VARNISH</text><text x=\"99\" y=\"90\">FOIL</text><text x=\"165\" y=\"90\">EMBOSS</text><text x=\"231\" y=\"90\">DEBOSS</text><text x=\"297\" y=\"90\">DIE-CUT</text></g></svg></div>"
      },
      what: "Varnishes and coatings sit on top of the ink, either overall or as spot UV applied only to chosen shapes, giving a contrast of gloss against matt. Foil blocking presses a metallic or pigmented film onto the sheet using a heated die. Embossing raises an area of the sheet and debossing pushes it in, both using a formed die. Die-cutting cuts the sheet to a shape other than a rectangle. Each of these needs its own artwork layer defining exactly where it goes, and most need a physical die made first.",
      why: "These are the only tools that work on touch rather than sight. A foiled logo or a debossed cover is felt before it is read, which is why they end up on covers, packaging and anything meant to signal care.",
      how: [
        "Supply each finish as its own layer, drawn as vector shapes filled with a named spot colour set to overprint.",
        "Name the layers plainly (FOIL, EMBOSS, DIECUT, SPOT_UV) and tell the printer they are non-printing.",
        "Keep foil and emboss detail chunky. Hairlines and small serifs fill in or tear.",
        "Get a plain unfinished proof plus a finishing sample. A PDF cannot show gloss or relief."
      ],
      example: "A hardback cover where the title is blocked in matt black foil on a textured uncoated board, so the type reads only as it catches the light.",
      numbers: "",
      pitfall: "Adding a finish late. Dies have to be made, which adds days and a fixed setup cost, so a spot UV added after the schedule is set often costs more than the printing.",
      source: "Standard print finishing practice; no single originator",
      verify: { status: "verified", note: "Process descriptions and the requirement for separate artwork layers confirmed against print finishing guides from Galloways (UK) and a packaging finishing reference, which states that spot UV, foil stamping, embossing and debossing each need separate layers defining the application areas. I have not repeated any single supplier's quoted lead times or minimum quantities, since those are commercial figures rather than standards." },
      belongs: { verdict: "core", why: "A distinct set of design tools with their own artwork requirements, and the main way print does what a screen cannot." },
      related: [860, 869, 876]
    },
    {
      n: 871,
      title: "Soft proofing and hard proofing",
      aka: ["Contract proof", "Screen proof", "Press pass"],
      oneLine: "A proof is the agreed picture of the finished job, on screen or on paper.",
      demo: {
        caption: "Office screen, calibrated display, contract proof: the same file, three colours, and only the signed sheet is a usable reference.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--top\"><div class=\"db-card db-col db-col--tight\"><div class=\"db-swatch db-swatch--lg\" style=\"background:#8b6fd0\"></div><span class=\"db-note\">Office screen</span><span class=\"db-note\">Room light unknown</span></div><div class=\"db-card db-col db-col--tight\"><div class=\"db-swatch db-swatch--lg\" style=\"background:#7358b4\"></div><span class=\"db-note\">Calibrated display</span><span class=\"db-note\">ISO 12646</span></div><div class=\"db-card db-col db-col--tight\"><div class=\"db-swatch db-swatch--lg\" style=\"background:#6a4aa0\"></div><span class=\"db-note db-note--accent\">Contract proof</span><span class=\"db-note db-note--accent\">ISO 12647-7, signed</span></div></div></div>"
      },
      what: "A soft proof simulates the printing condition on a calibrated and profiled display under controlled ambient light. ISO 12646 sets the monitor requirements, and ISO 14861:2015 covers soft proofing systems as a whole. A hard proof is a physical print made to simulate the press. ISO 12647-7 sets the criteria for contract hard copy proofing, including requirements for the proofing substrate, and Fogra runs a certification scheme against it. A contract proof is the one both sides sign: it is the reference the printed result is judged against.",
      why: "Without an agreed reference, colour disputes have no answer. A proof turns an argument about whether the blue looks right into a measurement against something both parties approved.",
      how: [
        "Ask which printing condition the proof simulates, and make sure your file is converted to the same one.",
        "Judge hard proofs under standardised viewing light, not office fluorescents or a window.",
        "For soft proofing, calibrate and profile the display, and control the light in the room. An uncalibrated laptop is not a proof.",
        "Get the proof on stock as close to the final paper as the process allows, especially for uncoated work."
      ],
      example: "A packaging job where a Fogra-certified contract proof is signed by the client, and the press run is then matched to that sheet rather than to anyone's screen.",
      numbers: "",
      pitfall: "Emailing a PDF and calling it a proof. It shows content and position, which is useful, but it says nothing about colour and gives you no reference to hold the printer to.",
      source: "ISO 12647-7 (proofing processes working directly from digital data, current edition 2016), ISO 12646 (displays for colour proofing), ISO 14861:2015 (colour soft proofing systems)",
      verify: { status: "verified", note: "ISO's online browsing platform confirms ISO 14861:2015 as Graphic technology, requirements for colour soft proofing systems, and shows it referencing ISO 12646, Graphic technology, displays for colour proofing, characteristics. ISO's entry for ISO 12647-7 (third edition, 2016) confirms it specifies requirements for systems producing hard-copy digital proof prints intended to simulate a printing condition. Fogra's prepress certification page confirms it certifies against the ISO 12647-7 proofing standard. Entry corrected on one small point: 12647-7's current edition is 2016, not the 2013 edition still widely cited. Full standard texts are paywalled and no internal tolerance is quoted." },
      belongs: { verdict: "core", why: "The formal handover point between design intent and manufactured result, with published standards behind it." },
      related: [867, 868, 875, 323]
    },
    {
      n: 872,
      title: "Screen ruling and halftones",
      aka: ["Line screen", "LPI", "Halftone screening"],
      oneLine: "Screen ruling is how finely a continuous image is broken into printable dots, measured in lines per inch.",
      demo: {
        caption: "The same three tints, twice. Coarse dots read as dots; the finer screen on the right reads as continuous tone.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Coarse screen</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 92\"><defs><pattern id=\"db872c1\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\"><circle cx=\"8\" cy=\"8\" r=\"4.5\" fill=\"var(--ink)\"/></pattern><pattern id=\"db872c2\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\"><circle cx=\"8\" cy=\"8\" r=\"6.4\" fill=\"var(--ink)\"/></pattern><pattern id=\"db872c3\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\"><circle cx=\"8\" cy=\"8\" r=\"7.8\" fill=\"var(--ink)\"/></pattern></defs><rect x=\"4\" y=\"6\" width=\"48\" height=\"62\" fill=\"url(#db872c1)\"/><rect x=\"56\" y=\"6\" width=\"48\" height=\"62\" fill=\"url(#db872c2)\"/><rect x=\"108\" y=\"6\" width=\"48\" height=\"62\" fill=\"url(#db872c3)\"/><g class=\"s-mute\"><rect x=\"4\" y=\"6\" width=\"48\" height=\"62\"/><rect x=\"56\" y=\"6\" width=\"48\" height=\"62\"/><rect x=\"108\" y=\"6\" width=\"48\" height=\"62\"/></g><g class=\"t\" text-anchor=\"middle\"><text x=\"28\" y=\"84\">25%</text><text x=\"80\" y=\"84\">50%</text><text x=\"132\" y=\"84\">75%</text></g></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Fine screen</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 92\"><defs><pattern id=\"db872f1\" width=\"8\" height=\"8\" patternUnits=\"userSpaceOnUse\"><circle cx=\"4\" cy=\"4\" r=\"2.26\" fill=\"var(--ink)\"/></pattern><pattern id=\"db872f2\" width=\"8\" height=\"8\" patternUnits=\"userSpaceOnUse\"><circle cx=\"4\" cy=\"4\" r=\"3.19\" fill=\"var(--ink)\"/></pattern><pattern id=\"db872f3\" width=\"8\" height=\"8\" patternUnits=\"userSpaceOnUse\"><circle cx=\"4\" cy=\"4\" r=\"3.9\" fill=\"var(--ink)\"/></pattern></defs><rect x=\"4\" y=\"6\" width=\"48\" height=\"62\" fill=\"url(#db872f1)\"/><rect x=\"56\" y=\"6\" width=\"48\" height=\"62\" fill=\"url(#db872f2)\"/><rect x=\"108\" y=\"6\" width=\"48\" height=\"62\" fill=\"url(#db872f3)\"/><g class=\"s-mute\"><rect x=\"4\" y=\"6\" width=\"48\" height=\"62\"/><rect x=\"56\" y=\"6\" width=\"48\" height=\"62\"/><rect x=\"108\" y=\"6\" width=\"48\" height=\"62\"/></g><g class=\"t\" text-anchor=\"middle\"><text x=\"28\" y=\"84\">25%</text><text x=\"80\" y=\"84\">50%</text><text x=\"132\" y=\"84\">75%</text></g></svg></div></div></div>"
      },
      what: "A press lays down solid ink or no ink, so continuous tone has to be faked. Conventional (amplitude modulated) screening splits the image into a regular grid of dots that vary in size: big dots read as dark, small as light. The grid spacing is the screen ruling or line screen, quoted in lines per inch. Finer rulings hold more detail but need a smoother, less absorbent paper and a press that can hold the dot. Stochastic or FM screening uses same-size dots scattered at varying density instead, which sidesteps some screen-angle problems.",
      why: "Screen ruling is the practical ceiling on how much detail a printed image can carry, and it sets how much resolution your image files actually need.",
      how: [
        "Ask the printer for the ruling before finalising image resolution.",
        "Match ruling to stock. Do not ask for a fine screen on absorbent uncoated paper.",
        "Keep fine detail and small reversed type out of images that will be screened coarsely.",
        "Ask about stochastic screening if the job has fine repeating patterns or high-detail fabric."
      ],
      example: "A newspaper photograph where the dot pattern is visible to the naked eye, next to the same photograph in a glossy magazine where it is not.",
      numbers: "Trade figures commonly quoted: newsprint around 60 to 85 lpi, uncoated offset around 85 to 133 lpi, coated stock 120 to 150 lpi and above, with high-quality colour work running 150 to 300 lpi.",
      pitfall: "Supplying images at a resolution chosen before the ruling is known. Too low and the image is soft; far too high just makes files slow without adding anything the screen can print.",
      source: "Standard offset practice; halftone screening dates to the nineteenth century, exact originator contested",
      verify: { status: "verified", note: "The lpi bands were re-checked against the DePaul University teaching page, read again this session, which tabulates offset newsprint 60-85 and offset uncoated 85-133 and notes newsprint typically uses 85 lpi and 133 lpi under SWOP for offset. A second trade explainer gives the same picture and states image ppi is roughly 1.5 to 2 times lpi. These are trade ranges that vary by press and stock, not a standard, and the entry labels them as such. No inventor of the halftone is named here, because attribution is contested between several nineteenth-century patents and none was verified." },
      belongs: { verdict: "core", why: "It sets the real detail limit of printed images and drives every image-resolution decision a designer makes." },
      related: [860, 873, 874, 9872]
    },
    {
      n: 873,
      title: "Moire",
      aka: ["Moire pattern", "Screen clash"],
      oneLine: "Moire is the interference pattern you get when two regular grids overlap slightly out of step.",
      demo: {
        caption: "Two line screens overlaid. Six degrees apart they beat into coarse bands; thirty degrees apart the clash stays too fine to see.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Six degrees apart</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 100\"><defs><pattern id=\"db873base\" width=\"8\" height=\"8\" patternUnits=\"userSpaceOnUse\"><rect width=\"4\" height=\"8\" fill=\"var(--ink)\"/></pattern><pattern id=\"db873six\" width=\"8\" height=\"8\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(6)\"><rect width=\"4\" height=\"8\" fill=\"var(--ink)\"/></pattern></defs><rect x=\"4\" y=\"6\" width=\"152\" height=\"88\" fill=\"url(#db873base)\" opacity=\"0.5\"/><rect x=\"4\" y=\"6\" width=\"152\" height=\"88\" fill=\"url(#db873six)\" opacity=\"0.5\"/><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"152\" height=\"88\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Thirty degrees apart</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 100\"><defs><pattern id=\"db873base2\" width=\"8\" height=\"8\" patternUnits=\"userSpaceOnUse\"><rect width=\"4\" height=\"8\" fill=\"var(--ink)\"/></pattern><pattern id=\"db873thirty\" width=\"8\" height=\"8\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(30)\"><rect width=\"4\" height=\"8\" fill=\"var(--ink)\"/></pattern></defs><rect x=\"4\" y=\"6\" width=\"152\" height=\"88\" fill=\"url(#db873base2)\" opacity=\"0.5\"/><rect x=\"4\" y=\"6\" width=\"152\" height=\"88\" fill=\"url(#db873thirty)\" opacity=\"0.5\"/><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"152\" height=\"88\"/></svg></div></div></div>"
      },
      what: "When two periodic patterns sit on top of each other and differ a little in angle or spacing, a third, much coarser pattern appears. In four-colour printing each ink has its own halftone grid, so the grids are deliberately rotated apart to keep the interference too fine to see. Moire also appears when a printed image is scanned, because the scanner's sampling grid interferes with the original's halftone grid, and when a design contains fine stripes or checks.",
      why: "It is a defect that appears at the last moment, on press or on screen, in artwork that looked clean everywhere else. Knowing the cause lets you avoid it at design time rather than firefight it at proof stage.",
      how: [
        "Never scan a printed original for reproduction. Get the digital file or rescan the photograph.",
        "If you must scan print, descreen at scan time or blur and resharpen, then check at 100 per cent.",
        "Avoid fine regular stripes and checks in artwork that will be halftoned.",
        "Leave screen angles to the printer's RIP. Overriding them is how moire gets introduced."
      ],
      example: "A scanned magazine photograph reproduced in a brochure, showing coarse crosshatched bands across a suit jacket that were not in the original.",
      numbers: "In conventional CMYK screening the strong inks are separated by 30 degrees, with yellow offset by about 15 degrees from its neighbours. Specific angle assignments vary by supplier and RIP.",
      pitfall: "Judging moire on screen. Display scaling produces its own interference, so a pattern that looks alarming at 50 per cent zoom may print fine, and one that looks clean may not.",
      source: "Optical interference; standard prepress practice for screen angles",
      verify: { status: "verified", note: "Cause confirmed against Wikipedia's Moire pattern article (the two patterns must differ in displacement, rotation or pitch) and a scanning reference explaining interference between the scanner's sampling grid and an original's halftone screen. On angles, trade sources read this session agree that the strong inks sit 30 degrees apart and that yellow is the exception at 15 degrees from a neighbour, but they give different assignments: one gives K 45, C 15, M 75, Y 0, another lists European 15/45/0/75 against US 15/75/0/45, and a third places magenta and cyan at 75 and 105 with yellow at 90. The entry therefore states the principle and flags the variation. The master list spells this with an accent; plain ASCII is used here, matching every other file in the set." },
      belongs: { verdict: "adjacent", why: "Moire is an optical interference effect rather than a design principle. It stays because it constrains real decisions: whether a fine repeating pattern can be drawn at all, and whether a printed original can be scanned for reuse." },
      related: [872, 874]
    },
    {
      n: 874,
      title: "DPI versus PPI",
      aka: ["Image resolution", "Output resolution", "Quality factor"],
      oneLine: "PPI describes pixels in an image file; DPI describes dots a device puts on paper.",
      demo: {
        caption: "One 1,200-pixel file placed at two sizes. Doubling the width on the page halves the effective resolution to 150 ppi.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Placed 4 in wide</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 170\"><defs><pattern id=\"db874a\" width=\"6\" height=\"6\" patternUnits=\"userSpaceOnUse\"><path d=\"M6 0 V6 M0 6 H6\" stroke=\"var(--ink-4)\" stroke-width=\"0.5\" fill=\"none\"/></pattern></defs><rect class=\"f-mute\" opacity=\"0.18\" x=\"50\" y=\"10\" width=\"60\" height=\"60\"/><rect x=\"50\" y=\"10\" width=\"60\" height=\"60\" fill=\"url(#db874a)\"/><rect class=\"s-mute\" x=\"50\" y=\"10\" width=\"60\" height=\"60\"/><path class=\"s-accent\" d=\"M50 80 H110 M50 76 V84 M110 76 V84\"/><text class=\"t\" x=\"80\" y=\"96\" text-anchor=\"middle\">4 in</text><text class=\"t\" x=\"80\" y=\"162\" text-anchor=\"middle\" style=\"fill:var(--accent)\">300 ppi</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Same file, placed 8 in wide</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 170\"><defs><pattern id=\"db874b\" width=\"12\" height=\"12\" patternUnits=\"userSpaceOnUse\"><path d=\"M12 0 V12 M0 12 H12\" stroke=\"var(--ink-4)\" stroke-width=\"0.5\" fill=\"none\"/></pattern></defs><rect class=\"f-mute\" opacity=\"0.18\" x=\"20\" y=\"10\" width=\"120\" height=\"120\"/><rect x=\"20\" y=\"10\" width=\"120\" height=\"120\" fill=\"url(#db874b)\"/><rect class=\"s-mute\" x=\"20\" y=\"10\" width=\"120\" height=\"120\"/><path class=\"s-accent\" d=\"M20 140 H140 M20 136 V144 M140 136 V144\"/><text class=\"t\" x=\"80\" y=\"156\" text-anchor=\"middle\">8 in</text><text class=\"t\" x=\"80\" y=\"168\" text-anchor=\"middle\" style=\"fill:var(--accent)\">150 ppi</text></svg></div></div></div>"
      },
      what: "PPI, pixels per inch, is a property of an image at a given physical size: a 3000 pixel wide photograph placed 10 inches wide is 300 ppi. DPI, dots per inch, describes the marks a printer or imagesetter can physically place. They are not interchangeable, and neither is the same as lpi, the halftone screen ruling. The prepress rule connecting them is the quality factor: image resolution at final printed size should be roughly 1.5 to 2 times the screen ruling.",
      why: "This is the calculation that decides whether a photograph will look sharp or soft in print. Confusing the terms is why people set 300 dpi in a scanner dialogue and still get a soft result.",
      how: [
        "Work out resolution at the final placed size, not at the size the file happens to be.",
        "Ask for the screen ruling, multiply by 1.5 to 2, and use that as your target ppi.",
        "For large-format work viewed from a distance, drop the target. A billboard does not need 300 ppi.",
        "Changing the ppi setting without resampling does not add detail. It only changes the physical size."
      ],
      example: "A magazine printed at 150 lpi: a quality factor of 2 means 300 ppi at final size, so a full-page A4 image needs about 2480 by 3508 pixels.",
      numbers: "Quality factor of 1.5 to 2 times the screen ruling. At 150 lpi that gives 225 to 300 ppi at final printed size.",
      pitfall: "Enlarging a placed image in the layout without rechecking effective resolution. Scaling a 300 ppi image to 200 per cent leaves you with 150 ppi on the page.",
      source: "Standard prepress practice (the quality factor rule); no single originator",
      verify: { status: "adjusted", note: "The 1.5 to 2 times rule was checked against the DePaul University teaching page, which works the calculation as LPI x 2 x enlargement (its worked example: 85 x 2 x 150% = 255 spi) and states that 150 lpi requires images at 300 dpi, and against a trade explainer giving image ppi as roughly 1.5 to 2 times lpi. Both describe long-standing practice, not a standard, and the entry says so. Arithmetic corrected: A4 at 300 ppi is 2480 by 3508 pixels, not 3510, since 297 mm is 11.69 inches." },
      belongs: { verdict: "core", why: "Choosing image resolution is a daily design decision, and this is the rule that governs it." },
      related: [872, 873, 875]
    },
    {
      n: 875,
      title: "Prepress checklist",
      aka: ["Preflight", "Print-ready file", "PDF/X"],
      oneLine: "A fixed set of checks run on artwork before it goes to plate or press.",
      demo: {
        caption: "One file, six checks. The four failures would each have reached the press if nobody had run the list.",
        html: "<div class=\"db-stage\"><div class=\"db-ui\"><span class=\"db-label\">Preflight against PDF/X-4</span><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span>Fonts embedded</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Pass</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span>Output intent set</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Pass</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span>Bleed 3 mm on all four edges</span><span class=\"db-btn db-btn--sm db-btn--danger\">Fail</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span>Effective resolution, cover image 96 ppi</span><span class=\"db-btn db-btn--sm db-btn--danger\">Fail</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span>Total ink, darkest shadow 348 per cent</span><span class=\"db-btn db-btn--sm db-btn--danger\">Fail</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span>Unused spot colour on a fifth plate</span><span class=\"db-btn db-btn--sm db-btn--danger\">Fail</span></div></div></div></div>"
      },
      what: "Preflight is the automated and manual check of a file against the printing condition it is destined for: fonts embedded, images at adequate effective resolution and in the right colour space, bleed present, no unintended spot colours, overprint settings correct, total ink within the limit, trim and bleed boxes set properly. The PDF/X family, standardised as ISO 15930, exists to make that check possible. PDF/X-1a demands everything be CMYK or spot with transparency flattened; PDF/X-4 keeps live transparency and supports colour-managed workflows with ICC profiles.",
      why: "Nearly every expensive print mistake is a file error that a two-minute check would have caught. A written checklist turns that from a matter of memory into a process.",
      how: [
        "Ask the printer which PDF/X flavour and which output intent they want, then export to it.",
        "Run preflight in the layout application before export, and again on the exported PDF.",
        "Check overprint preview, effective resolution and the separations preview as three separate passes.",
        "Keep a one-page checklist per printer and tick it every time. Do not rely on remembering."
      ],
      example: "A job exported as PDF/X-4 with the printer's ICC output intent, checked in Acrobat's output preview for ink coverage above the profile limit before it is uploaded.",
      numbers: "PDF/X is standardised as ISO 15930. PDF/X-1a requires CMYK or spot colour with flattened transparency; PDF/X-4 permits live transparency and ICC-based colour.",
      pitfall: "Exporting PDF/X-1a out of habit on a job with transparency effects. Flattening happens on export with no warning, and soft shadows or blend modes can come out visibly different from the layout.",
      source: "ISO 15930 (PDF/X); standard prepress practice",
      verify: { status: "verified", note: "The PDF/X-1a versus PDF/X-4 distinction was re-checked this session against the PDF Association's technical page on PDF/X, a commercial printer's print-ready guide and an Adobe community thread: X-1a converts all colour to DeviceCMYK or spot and flattens transparency, while X-4 keeps live transparency and supports ICC colour management. ISO 15930 itself is paywalled, so no part-by-part detail of the standard is claimed." },
      belongs: { verdict: "core", why: "The last gate between a design file and an irreversible print run, and the point where most of this section's other items get checked." },
      related: [865, 866, 867, 868, 874]
    },
    {
      n: 876,
      title: "Cost consequences of design choices",
      aka: ["Print economics", "Specification cost"],
      oneLine: "Almost every design decision in print has a price attached, and most of them are set early.",
      demo: {
        caption: "Four more pages of content. The book jumps from eight full sections to nine, and twelve of the new pages are blank.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">128 pages</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 100\"><g class=\"f-mute\" opacity=\"0.5\"><rect x=\"4\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"24\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"44\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"64\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"84\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"104\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"124\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"144\" y=\"16\" width=\"16\" height=\"48\"/></g><g class=\"s-mute\"><rect x=\"4\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"24\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"44\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"64\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"84\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"104\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"124\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"144\" y=\"16\" width=\"16\" height=\"48\"/></g><text class=\"t\" x=\"110\" y=\"86\" text-anchor=\"middle\">EIGHT FULL 16-PAGE SECTIONS</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">132 pages</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 100\"><g class=\"f-mute\" opacity=\"0.5\"><rect x=\"4\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"24\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"44\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"64\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"84\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"104\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"124\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"144\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"164\" y=\"52\" width=\"16\" height=\"12\"/></g><g class=\"s-mute\"><rect x=\"4\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"24\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"44\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"64\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"84\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"104\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"124\" y=\"16\" width=\"16\" height=\"48\"/><rect x=\"144\" y=\"16\" width=\"16\" height=\"48\"/></g><rect class=\"s-accent\" x=\"164\" y=\"16\" width=\"16\" height=\"48\"/><path class=\"s-accent\" d=\"M186 16 V52 M183 16 H189 M183 52 H189\"/><text class=\"t\" x=\"192\" y=\"37\" style=\"fill:var(--accent)\">BLANK</text><text class=\"t\" x=\"110\" y=\"86\" text-anchor=\"middle\">NINE SECTIONS, ONE ALMOST EMPTY</text></svg></div></div></div>"
      },
      what: "Cost in print is driven by a short list: page count relative to the printer's signature size, number of inks (each spot colour is another plate and another wash-up), paper choice and how efficiently your trim size cuts from a standard sheet, binding method, any finishing that needs a die made, and the quantity. Because these are all fixed at specification time, the expensive decisions are usually made in the first week, before anyone has drawn a page.",
      why: "A designer who understands the cost structure can spend the client's money where it shows. Dropping from four colours to two and putting the saving into a foiled cover is a design decision, not an accounting one.",
      how: [
        "Get a quote on two or three specifications before committing, not one at the end.",
        "Design to the printer's section size, so you are not paying for blank pages.",
        "Check your trim size against standard sheet sizes. An awkward format can waste a third of every sheet.",
        "Ask what each extra costs before promising it: one spot colour, one die, a heavier stock, a lamination."
      ],
      example: "A 128-page book on a 16-page section runs as eight clean sections. Adding four pages of extra content pushes it to 132, which the printer must handle as an odd part-section, costing far more than the four pages suggest.",
      numbers: "Folded sheets give pages in multiples of four; offset work is usually planned in 8, 16 or 32 page sections.",
      pitfall: "Specifying finishes for a short run. Dies, plates and setups are fixed costs, so on 250 copies a foil block can cost more per unit than everything else combined.",
      source: "Standard print production economics; no single originator",
      verify: { status: "verified", note: "The signature and page-count relationship is confirmed by the same sources used for entry 864 (QinPrinting, PrintIndustry.com), and the fixed-cost nature of dies and setups is stated in print finishing guides. Specific prices vary by printer, country and quantity, so no monetary figures are given." },
      belongs: { verdict: "core", why: "In print, the specification is part of the design, and cost is the constraint that shapes it more than any other." },
      related: [860, 863, 864, 869, 870]
    },
    {
      n: 9872,
      title: "Dot gain (tone value increase)",
      aka: ["TVI", "Tonal value increase"],
      oneLine: "Halftone dots print bigger than specified, so midtones darken; print standards measure and control this.",
      demo: {
        caption: "Tone specified against tone printed: the curve bulges in the midtones, so a 40 per cent tint arrives near 53.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 152\"><path class=\"s-mute\" d=\"M40 126 H196 M40 126 V12\"/><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M40 126 L190 16\"/><path class=\"s-accent\" d=\"M40 126 L70 94 L100 68 L130 47 L160 29 L190 16\"/><path class=\"s-mute\" stroke-dasharray=\"2 3\" d=\"M100 126 V68 M100 68 H40\"/><text class=\"t\" x=\"100\" y=\"138\" text-anchor=\"middle\">40 IN</text><text class=\"t\" x=\"44\" y=\"63\">53 OUT</text><text class=\"t\" x=\"118\" y=\"150\" text-anchor=\"middle\">TONE IN THE FILE</text><text class=\"t\" x=\"14\" y=\"70\" text-anchor=\"middle\" transform=\"rotate(-90 14 70)\">TONE ON PAPER</text><rect class=\"f\" opacity=\"0.4\" x=\"216\" y=\"30\" width=\"46\" height=\"40\"/><rect class=\"s-mute\" x=\"216\" y=\"30\" width=\"46\" height=\"40\"/><rect class=\"f\" opacity=\"0.53\" x=\"272\" y=\"30\" width=\"46\" height=\"40\"/><rect class=\"s-mute\" x=\"272\" y=\"30\" width=\"46\" height=\"40\"/><g class=\"t\" text-anchor=\"middle\"><text x=\"239\" y=\"24\">40%</text><text x=\"295\" y=\"24\">53%</text><text x=\"239\" y=\"84\">SPECIFIED</text><text x=\"295\" y=\"84\">PRINTED</text></g></svg></div>"
      },
      what: "Ink spreads when it hits paper, and the halftone dot on the plate ends up larger on the sheet. The printed tone is therefore darker than the file asked for, with the largest shift in the midtones. The old trade name is dot gain; the term used in the standards is tone value increase, or TVI, because what is measured is the change in tone rather than the diameter of a dot. ISO 12647-2 specifies target TVI curves for offset printing conditions, which is one of the things a press is set up to hit. Uncoated and absorbent stocks gain more than coated ones.",
      why: "This is why images and screen tints print heavier than they looked, and why a 20 per cent grey panel can come back looking like 30 per cent. Once you know it happens, you set tints and shadow detail with headroom instead of being surprised.",
      how: [
        "Convert images using the printer's output profile, which already has the gain compensation built in.",
        "Set light background tints a few points lighter than you want, especially on uncoated stock.",
        "Keep shadow detail out of the deepest few per cent, where gain will close it up.",
        "Check a hard proof made to the same printing condition rather than judging tints on screen."
      ],
      example: "A pale grey information panel specified at 10 per cent black, printed on uncoated stock, arriving noticeably darker and heavier than the layout showed.",
      numbers: "Gain is largest around the middle of the tonal range and depends heavily on stock. ISO 12647-2:2004 names a set of aim curves, A to F, usually quoted as the gain measured at a 40 per cent patch. ECI's offset documentation gives curve A as 13 per cent, curve B as 16, curve C as 19 and curve D as 22. Coated paper types 1 and 2 run to curve A for cyan, magenta and yellow and curve B for black; wood-free uncoated white runs to curve C and curve D. The standard is paywalled, so get the curve for your job from the printer.",
      pitfall: "Compensating for gain by hand in the image as well as using a profile that already compensates. The result is a flat, washed-out print.",
      source: "ISO 12647-2 (tone value increase for offset processes), as reported in ECI offset profile documentation; dot gain is the older trade term",
      verify: { status: "adjusted", note: "The author's figures were dropped. They gave ISO 12647-2 targets at the 50 per cent tone as roughly plus 16 per cent on gloss coated and about plus 26 per cent on uncoated, attributed only to an unnamed prepress article. The uncoated figure does not hold: Colorsource's tabulation of the ISO 12647-2:2004 A to F curves puts a 50 per cent tone at 64.3 for curve A rising to 77.5 for curve F, and its profile table maps wood-free uncoated white (FOGRA47L) to curve C for CMY and curve D for black, which is plus 19.6 and plus 22.3 at that tone. The entry now gives the 40 per cent patch figures, which ECI's own offset page states directly: paper type 1/2 uses TVI curve A for CMY (13%) and B (16%) for black, and the same page gives curve C as 19% and curve D as 22%. ISO 12647-2 itself is paywalled and was not read. That ISO 12647-2 sets aim TVI curves, that dot gain and TVI are the same thing, and that absorbent uncoated stock gains more than coated, are confirmed by the ECI page and by Prepressure's dot gain article. Gap confirmed again: searching the whole master list for dot gain, tone value and TVI returns nothing." },
      belongs: { verdict: "core", why: "A universal print behaviour that changes what a designer's specified tones actually look like on paper, and it is missing from the list." },
      related: [872, 868, 871, 875]
    }
  ]
};
