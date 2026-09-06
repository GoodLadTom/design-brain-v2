window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[10] = {
  n: 10,
  slug: "grid-layout",
  title: "Grid and layout systems",
  blurb: "The invisible scaffolding that decides where things sit on a page or a screen.",
  intro: "A grid is a set of agreed lines you place content against so that the placement stops being an argument. The modern version comes out of Switzerland in the 1950s, written up by Josef Müller-Brockmann in Grid Systems in Graphic Design (1981) and by Karl Gerstner in Designing Programmes (1964), but the underlying habit is much older: medieval scribes and Renaissance printers had geometric rules for where the type block sat on a leaf. Timothy Samara's Making and Breaking the Grid (2002) is the standard modern taxonomy, and the web has since bolted on its own layer of 8-point spacing, 12-column frameworks and container queries. This section covers the parts of a grid, the named page canons, the compositional systems that are not grids at all, and the honest question of when to ignore the whole apparatus.",
  sources: [
    "Josef Müller-Brockmann, Grid Systems in Graphic Design / Rastersysteme für die visuelle Gestaltung (Niggli, 1981)",
    "Timothy Samara, Making and Breaking the Grid (Rockport, 2002; third edition, Rockport, June 2023)",
    "Karl Gerstner, Designing Programmes (1964; enlarged editions 1968 and 2007)",
    "Kimberly Elam, Typographic Systems (Princeton Architectural Press, 2007; cover strapline Rules for Organizing Type; later printings titled Typographic Systems of Design)",
    "Beth Tondreau, Layout Essentials: 100 Design Principles for Using Grids (Rockport, 2009; revised and updated edition 2019)",
    "Jan Tschichold, The Form of the Book (English edition, Hartley and Marks, 1991)",
    "J. A. van de Graaf, Nieuwe berekening voor de vormgeving, in Tete: Technisch Tijdschrift voor de Grafische Industrie, November 1946",
    "Raul Rosarivo, Divina proporcion tipografica (Ministry of Education, Province of Buenos Aires, 1947)",
    "Jan V. White, Editing by Design (first published 1974; fourth edition revised by Alex W. White, Allworth Press, 2021)",
    "Bryn Jackson, The 8-Point Grid (spec.fm)",
    "Elliot Dahl, Intro to the 8-Point Grid System (Built to Adapt, 14 December 2016)",
    "Nathan Smith, 960 Grid System (2008)",
    "Bootstrap 4.6 grid documentation, getbootstrap.com",
    "Material Design 2, Spacing methods and Applying density; Una Kravets, Using Material Density on the Web (Google Design, 16 January 2020)",
    "EBU Recommendation R 95, Safe areas for 16:9 television production (version 1.1, June 2017)",
    "ISO 216 and its history (Lichtenberg's letter of 25 October 1786, Porstmann 1918, DIN 476)",
    "Nielsen Norman Group, Scrolling and Attention (2010 study; 2018 update, 15 April 2018)",
    "MDN, env() and CSS container queries (CSS Environment Variables Module Level 1; CSS Containment Module Level 3)",
    "Katherine Humphreys, Taking the Mystery Out of Arranging Type (Haneke Design), a published walkthrough of Elam's eight systems",
    "Lucas Czarnecki, 7 Essential Typographic Layout Systems (Type365, 2017)"
  ],
  entries: [
    {
      n: 406,
      title: "Manuscript (single-column) grid",
      aka: ["Block grid", "Single-column grid"],
      oneLine: "One block of text inside four margins, where the margins do all the compositional work.",
      demo: {
        caption: "Same page, same measure. Only the four margins changed, and on a single-column page that is the whole composition.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Four equal margins</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 144\"><path class=\"s-mute\" d=\"M56 12 V132\"/><text class=\"t\" x=\"16\" y=\"76\">spine</text><rect class=\"s\" x=\"60\" y=\"12\" width=\"80\" height=\"120\"/><path class=\"s-mute\" d=\"M72 31 H128 M72 39 H128 M72 47 H128 M72 55 H128 M72 63 H128 M72 71 H128 M72 79 H128 M72 87 H128 M72 95 H128 M72 103 H128 M72 111 H128 M72 119 H97\"/><text class=\"t\" x=\"94\" y=\"22\">12</text><text class=\"t\" x=\"61\" y=\"76\">12</text><text class=\"t\" x=\"128\" y=\"76\">12</text><text class=\"t\" x=\"94\" y=\"129\">12</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Inner smallest, foot deepest</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 144\"><path class=\"s-mute\" d=\"M56 12 V132\"/><text class=\"t\" x=\"16\" y=\"76\">spine</text><rect class=\"s\" x=\"60\" y=\"12\" width=\"80\" height=\"120\"/><path class=\"s-mute\" d=\"M68 33 H124 M68 41 H124 M68 49 H124 M68 57 H124 M68 65 H124 M68 73 H124 M68 81 H124 M68 89 H124 M68 97 H124 M68 105 H93\"/><text class=\"t\" x=\"92\" y=\"24\">14</text><text class=\"t\" x=\"62\" y=\"76\">8</text><text class=\"t\" x=\"127\" y=\"76\">16</text><text class=\"t\" x=\"92\" y=\"124\">26</text></svg></div></div></div>"
      },
      what: "The oldest and simplest grid. A single rectangle of type sits on the page and nothing else subdivides it. Every decision is about the size of that block, where it sits, and how much air surrounds it. Timothy Samara treats it as the first grid type in Making and Breaking the Grid, and it is the structure behind almost every printed novel. It handles continuous reading matter and nothing else particularly well.",
      why: "A reader working down one column never has to choose where to look next, so the structure disappears and the prose carries the whole load. For the designer it removes a dozen decisions and concentrates the remaining ones on measure, margin and the position of running heads and page numbers.",
      how: [
        "Fix the measure before the margins, then size the page around it rather than the other way round.",
        "Make the four margins unequal on purpose; equal margins read as a mistake in a bound book.",
        "Give folios, running heads and footnotes their own fixed slot so they never collide with the text block.",
        "If a second stream of content appears, hang it in a widened outer margin rather than adding a column."
      ],
      example: "Edward Tufte's own books put a single main column against a deliberately wide outer margin that carries figures and notes, which is a manuscript grid with a working sidebar.",
      numbers: "",
      pitfall: "On the web a single column with no maximum width becomes a manuscript grid at 1,600 pixels, which is unreadable. The block needs a cap, not just a container.",
      source: "Timothy Samara, Making and Breaking the Grid (2002)",
      verify: { status: "verified", note: "Confirmed the four-type grid taxonomy against teaching material that quotes the definitions from the 2002 Rockport edition of Samara's Making and Breaking the Grid, and against the publisher description of the third edition, which lists column, compound and modular grids as the basics covered. The confirmation of the manuscript type is second-hand rather than from the book itself." },
      belongs: { verdict: "core", why: "It is the base case every other grid is measured against, and choosing it is a real decision with real consequences for how a long text reads." },
      related: [416, 417, 424, 407]
    },
    {
      n: 407,
      title: "Column grid",
      aka: ["Columnar grid", "Multicolumn grid"],
      oneLine: "The page divided into vertical columns that content can occupy singly or in groups.",
      demo: {
        caption: "Four columns give four legal widths. Every block spans a whole number of them, so nothing needs a new measurement.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 156\"><path class=\"s-mute\" d=\"M40 8 V152 M94 8 V152 M106 8 V152 M160 8 V152 M172 8 V152 M226 8 V152 M238 8 V152 M292 8 V152\"/><rect class=\"f\" x=\"40\" y=\"14\" width=\"252\" height=\"20\"/><rect class=\"f\" x=\"40\" y=\"44\" width=\"186\" height=\"34\"/><rect class=\"f\" x=\"238\" y=\"44\" width=\"54\" height=\"34\"/><rect class=\"f\" x=\"40\" y=\"88\" width=\"120\" height=\"34\"/><rect class=\"f\" x=\"172\" y=\"88\" width=\"120\" height=\"34\"/><rect class=\"f\" x=\"40\" y=\"132\" width=\"54\" height=\"14\"/><rect class=\"f\" x=\"106\" y=\"132\" width=\"54\" height=\"14\"/><rect class=\"f\" x=\"172\" y=\"132\" width=\"54\" height=\"14\"/><rect class=\"f\" x=\"238\" y=\"132\" width=\"54\" height=\"14\"/><text class=\"t\" x=\"0\" y=\"27\">4</text><text class=\"t\" x=\"0\" y=\"64\">3 + 1</text><text class=\"t\" x=\"0\" y=\"108\">2 + 2</text><text class=\"t\" x=\"0\" y=\"142\">1 each</text></svg></div>"
      },
      what: "Vertical divisions of equal width, separated by gutters, that content aligns to. Text can sit in one column, images can span two or three, and a caption can take one while the picture takes the rest. The number of columns sets how many different widths you can build: three columns give you three, twelve give you many more. This is the workhorse of newspapers, magazines and most web layouts. Worth holding on to alongside it: Kimberly Elam counts the grid as one of eight compositional systems rather than as the default, which is a useful corrective when a column count is being chosen out of habit.",
      why: "Columns turn width into a small set of legal choices, which is what makes a long publication look like one publication rather than a hundred separate pages. They also fix the measure, so line length stays inside the readable band automatically.",
      how: [
        "Pick the column count from the widest and narrowest things you need to place, not from a habit.",
        "Check that a single column still gives a sensible measure at your body size; if it does not, use fewer columns.",
        "Decide the gutter first at text size, then let the column width fall out of the remaining space.",
        "Allow content to span columns freely; a grid that forbids spanning is a straitjacket."
      ],
      example: "USA Today runs an eight-column grid that is subdivided as needed, with items spanning two or more columns, as Katherine Humphreys sets out in her published walkthrough of Elam's eight systems.",
      numbers: "",
      pitfall: "Designers pick a high column count for flexibility and then use only the halves and thirds, so the extra columns do nothing except make the gutters wrong.",
      source: "Josef Müller-Brockmann, Grid Systems in Graphic Design (1981); Timothy Samara, Making and Breaking the Grid (2002)",
      verify: { status: "verified", note: "Multicolumn grids are set out directly in Tondreau's Layout Essentials, revised edition, which I read in scan and which defines the two-column and multicolumn structures; column grids are also named in the publisher description of Samara's third edition (Rockport, June 2023). Müller-Brockmann's 1981 Niggli book confirmed by bibliographic record. The USA Today figure comes from Katherine Humphreys' Haneke Design article, not from Elam's own pages, and the entry now says so." },
      belongs: { verdict: "core", why: "The default structure for nearly all multi-page and multi-element layout work; not knowing it means guessing at every width." },
      related: [406, 408, 411, 415, 418]
    },
    {
      n: 408,
      title: "Modular grid",
      aka: ["Field grid", "Unit grid"],
      oneLine: "A column grid crossed by horizontal divisions, producing a field of repeating rectangles.",
      demo: {
        caption: "Same columns, same blocks. Adding two horizontal flowlines fixes the tops and bottoms as well as the sides.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Columns only</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 136\"><path class=\"s-mute\" d=\"M8 8 V130 M64 8 V130 M72 8 V130 M128 8 V130 M136 8 V130 M192 8 V130\"/><rect class=\"f\" x=\"8\" y=\"16\" width=\"56\" height=\"48\"/><rect class=\"f\" x=\"8\" y=\"74\" width=\"56\" height=\"44\"/><rect class=\"f\" x=\"72\" y=\"10\" width=\"56\" height=\"58\"/><rect class=\"f\" x=\"72\" y=\"78\" width=\"56\" height=\"38\"/><rect class=\"f\" x=\"136\" y=\"22\" width=\"56\" height=\"40\"/><rect class=\"f\" x=\"136\" y=\"70\" width=\"56\" height=\"54\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Columns crossed by rows</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 136\"><path class=\"s-mute\" d=\"M8 8 V130 M64 8 V130 M72 8 V130 M128 8 V130 M136 8 V130 M192 8 V130\"/><path class=\"s-accent\" stroke-dasharray=\"4 4\" d=\"M4 14 H196 M4 64 H196 M4 72 H196 M4 122 H196\"/><rect class=\"f\" x=\"8\" y=\"14\" width=\"56\" height=\"50\"/><rect class=\"f\" x=\"8\" y=\"72\" width=\"56\" height=\"50\"/><rect class=\"f\" x=\"72\" y=\"14\" width=\"56\" height=\"108\"/><rect class=\"f\" x=\"136\" y=\"14\" width=\"56\" height=\"50\"/><rect class=\"f\" x=\"136\" y=\"72\" width=\"56\" height=\"50\"/></svg></div></div></div>"
      },
      what: "Take a column grid and add flowlines across it. The intersections create modules, and content is placed by claiming one or more modules rather than by choosing a free position. Müller-Brockmann built his career on these, and they are the reason Swiss posters and annual reports of the 1960s look the way they do. A modular grid gives vertical control as well as horizontal, which a column grid alone does not.",
      why: "Vertical alignment is the thing people notice when it is missing: pictures that start at slightly different heights, cards whose bottoms do not line up. Modules make that impossible by construction. They also handle mixed content well, because an image and a block of text can occupy the same footprint.",
      how: [
        "Derive the module height from the leading of the body text so type and modules stay in step.",
        "Keep the module count modest; a grid with too many tiny fields is functionally gridless.",
        "Use whole modules for images and let text run over several, rather than half-filling a module.",
        "Test the grid on your ugliest content before your prettiest."
      ],
      example: "Müller-Brockmann's Zurich Tonhalle concert posters and the layouts throughout Grid Systems in Graphic Design are the canonical modular grids.",
      numbers: "",
      pitfall: "Modules derived from a round number rather than from the leading leave text floating inside its field, so the grid looks tidy in the guides and ragged on the page.",
      source: "Josef Müller-Brockmann, Grid Systems in Graphic Design (1981); Timothy Samara, Making and Breaking the Grid (2002)",
      verify: { status: "verified", note: "Modular grids are named in the publisher description of Samara's third edition and are the structure documented throughout Müller-Brockmann's 1981 book." },
      belongs: { verdict: "core", why: "The main tool for controlling vertical placement across a document, and the ancestor of card-based screen layout." },
      related: [407, 410, 419, 439]
    },
    {
      n: 409,
      title: "Hierarchical grid",
      aka: ["Organic grid", "Bespoke grid"],
      oneLine: "Irregular zones sized to the content rather than a repeating rhythm of equal columns.",
      demo: {
        caption: "The bands are different depths and the zones different widths, yet every vertical edge lands on one of four alignments.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 168\"><path class=\"s-accent\" stroke-dasharray=\"4 4\" d=\"M97 4 V164 M107 4 V164 M193 4 V164 M203 4 V164\"/><rect class=\"s\" x=\"10\" y=\"10\" width=\"280\" height=\"44\"/><text class=\"t\" x=\"16\" y=\"37\">full width</text><rect class=\"s\" x=\"10\" y=\"62\" width=\"183\" height=\"56\"/><text class=\"t\" x=\"16\" y=\"94\">two thirds</text><rect class=\"s\" x=\"203\" y=\"62\" width=\"87\" height=\"56\"/><text class=\"t\" x=\"209\" y=\"94\">one third</text><rect class=\"s\" x=\"10\" y=\"126\" width=\"87\" height=\"32\"/><text class=\"t\" x=\"16\" y=\"146\">third</text><rect class=\"s\" x=\"107\" y=\"126\" width=\"86\" height=\"32\"/><text class=\"t\" x=\"113\" y=\"146\">third</text><rect class=\"s\" x=\"203\" y=\"126\" width=\"87\" height=\"32\"/><text class=\"t\" x=\"209\" y=\"146\">third</text></svg></div>"
      },
      what: "A structure built by looking at what has to go on the page and drawing alignments around it, instead of imposing a regular division first. The bands and blocks are unequal, but they are still fixed, still repeatable, and still shared across pages. Most website home pages are hierarchical grids: a full-bleed hero, then a three-across band, then a two-thirds and one-third split.",
      why: "Some content genuinely does not divide evenly. Forcing a masthead, a hero image and a run of small links into the same column rhythm wastes space and flattens the difference between them. A hierarchical grid keeps the discipline of fixed alignments while letting the proportions follow the job.",
      how: [
        "Lay out the real content first, then draw the alignments you find yourself using and freeze them.",
        "Write the zones down as named regions so the next person can reuse them.",
        "Keep the vertical rhythm regular even when the horizontal divisions are not.",
        "Limit yourself to a handful of zone widths; unlimited widths is not a grid."
      ],
      example: "A typical news home page: a wide lead story block, a narrower opinion rail and a bottom strip of equal cards, none of which share a single column width.",
      numbers: "",
      pitfall: "Called upon too early, this becomes an excuse for no system at all. If you cannot state the zone widths as a list, you have improvised rather than designed a grid.",
      source: "Timothy Samara, Making and Breaking the Grid (2002); Beth Tondreau, Layout Essentials (2009)",
      verify: { status: "verified", note: "Read directly from a scan of Tondreau's Layout Essentials, revised edition, which states that hierarchical grids break the page into zones and that many of them are composed of horizontal columns. The four-type taxonomy that also names this grid is standard teaching material derived from Samara 2002; that half of the attribution is second-hand rather than from Samara's own pages." },
      belongs: { verdict: "core", why: "It names the structure most real screen layouts actually use, and gives a designer permission to build one deliberately rather than by drift." },
      related: [406, 407, 421, 433]
    },
    {
      n: 410,
      title: "Baseline grid",
      aka: ["Line grid", "Vertical rhythm grid"],
      oneLine: "A ruled set of horizontal lines that every line of type sits on, across columns and pages.",
      demo: {
        caption: "Right, every line of type lands on the same ruling and the three columns cross-align. Left, each column drifts.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Each column set alone</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 144\"><path class=\"s-mute\" d=\"M4 12 H196 M4 24 H196 M4 36 H196 M4 48 H196 M4 60 H196 M4 72 H196 M4 84 H196 M4 96 H196 M4 108 H196 M4 120 H196 M4 132 H196\"/><path class=\"s\" d=\"M8 17 H64 M8 29 H64 M8 41 H64 M8 53 H64 M8 65 H64 M8 77 H64 M8 89 H64 M8 101 H64 M8 113 H64 M8 125 H64 M72 22 H128 M72 34 H128 M72 46 H128 M72 58 H128 M72 70 H128 M72 82 H128 M72 94 H128 M72 106 H128 M72 118 H128 M72 130 H128 M136 14 H192 M136 26 H192 M136 38 H192 M136 50 H192 M136 62 H192 M136 74 H192 M136 86 H192 M136 98 H192 M136 110 H192 M136 122 H192\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">All on one ruling</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 144\"><path class=\"s-mute\" d=\"M4 12 H196 M4 24 H196 M4 36 H196 M4 48 H196 M4 60 H196 M4 72 H196 M4 84 H196 M4 96 H196 M4 108 H196 M4 120 H196 M4 132 H196\"/><rect class=\"f\" x=\"72\" y=\"30\" width=\"44\" height=\"6\"/><path class=\"s\" d=\"M8 24 H64 M8 36 H64 M8 48 H64 M8 60 H64 M8 72 H64 M8 84 H64 M8 96 H64 M8 108 H64 M8 120 H64 M8 132 H64 M72 60 H128 M72 72 H128 M72 84 H128 M72 96 H128 M72 108 H128 M72 120 H128 M72 132 H128 M136 24 H192 M136 36 H192 M136 48 H192 M136 60 H192 M136 72 H192 M136 84 H192 M136 96 H192 M136 108 H192 M136 120 H192 M136 132 H192\"/></svg></div></div></div>"
      },
      what: "An invisible ruling at the interval of the body leading. Text in every column lands on the same lines, so a three-column spread reads as one field rather than three drifting stacks. Headings, captions and images are sized in whole multiples of that interval so they rejoin the rhythm after any interruption. Müller-Brockmann sets it out in Grid Systems in Graphic Design; Material Design 2 does the digital version with a 4dp baseline grid for type.",
      why: "Cross-alignment between columns is one of the few things a reader registers without being able to name it. It is also the mechanism that stops a page of mixed elements looking like a pile. For production it means spacing decisions collapse into a single number.",
      how: [
        "Set the grid interval to the body leading, not to a round pixel value chosen first.",
        "Give headings space above and below that adds to a whole number of intervals.",
        "Let captions and small print use half the interval if they must, but keep them landing on the grid every second line.",
        "Accept that centred text inside a component will sometimes sit off-grid, as Material's own guidance allows."
      ],
      example: "Material Design 2's spacing guidance states that type aligns to a 4dp baseline grid, with an exception for text centred inside a component such as a button or list item.",
      numbers: "Material Design 2: components align to an 8dp square baseline grid; icons, type and some in-component elements align to a 4dp grid; type aligns to a 4dp baseline grid.",
      pitfall: "Chasing perfect baseline alignment on the web costs hours and breaks the moment a font fails to load or a user changes text size. Use it where the type is fixed, treat it as a target elsewhere.",
      source: "Josef Müller-Brockmann, Grid Systems in Graphic Design (1981); Material Design 2, Spacing methods",
      verify: { status: "verified", note: "Read the Material Design 2 Spacing methods page directly for the 8dp and 4dp figures. Müller-Brockmann's 1981 book confirmed by bibliographic record. Note this overlaps master list entry 384, Baseline grid and cross-alignment, in the typography section." },
      belongs: { verdict: "core", why: "It is the single mechanism that links typography to layout, and the reason well-set pages feel calm." },
      related: [408, 414, 419, 446]
    },
    {
      n: 411,
      title: "Compound grid",
      aka: ["Composite grid", "Overlaid grid"],
      oneLine: "Two or more column grids drawn on the same page and used together.",
      demo: {
        caption: "A four-column grid over a six. They agree only at the margins and the centre, and those are the accent lines.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 134\"><text class=\"t\" x=\"0\" y=\"31\">4</text><rect class=\"s-mute\" x=\"12\" y=\"16\" width=\"60\" height=\"24\"/><rect class=\"s-mute\" x=\"84\" y=\"16\" width=\"60\" height=\"24\"/><rect class=\"s-mute\" x=\"156\" y=\"16\" width=\"60\" height=\"24\"/><rect class=\"s-mute\" x=\"228\" y=\"16\" width=\"60\" height=\"24\"/><text class=\"t\" x=\"0\" y=\"63\">6</text><rect class=\"s-mute\" x=\"12\" y=\"48\" width=\"36\" height=\"24\"/><rect class=\"s-mute\" x=\"60\" y=\"48\" width=\"36\" height=\"24\"/><rect class=\"s-mute\" x=\"108\" y=\"48\" width=\"36\" height=\"24\"/><rect class=\"s-mute\" x=\"156\" y=\"48\" width=\"36\" height=\"24\"/><rect class=\"s-mute\" x=\"204\" y=\"48\" width=\"36\" height=\"24\"/><rect class=\"s-mute\" x=\"252\" y=\"48\" width=\"36\" height=\"24\"/><path class=\"s-mute\" d=\"M48 84 V118 M60 84 V118 M72 84 V118 M84 84 V118 M96 84 V118 M108 84 V118 M192 84 V118 M204 84 V118 M216 84 V118 M228 84 V118 M240 84 V118 M252 84 V118\"/><path class=\"s-accent\" d=\"M12 80 V122 M144 80 V122 M156 80 V122 M288 80 V122\"/><rect class=\"f\" x=\"12\" y=\"88\" width=\"204\" height=\"10\"/><rect class=\"f\" x=\"204\" y=\"104\" width=\"84\" height=\"10\"/><text class=\"t\" x=\"12\" y=\"132\">upper bar on the four, lower bar on the six</text></svg></div>"
      },
      what: "A four-column grid and a three-column grid share a page. Some content aligns to one, some to the other, and the coincident lines where the two agree become the strongest alignments. Samara covers compound grids as one of the basics; Karl Gerstner built the best-known example in 1962 to 1963 for the German business magazine Capital, a structure he described in Designing Programmes as being based on 58 modules and which combines several smaller grids in one field.",
      why: "It gives you more widths without shredding the page into a dozen thin columns. A magazine can run body text on a two-column reading rhythm and picture captions on a finer division, and both still line up at the shared points.",
      how: [
        "Draw both grids, mark every line where they coincide, and treat those as your primary alignments.",
        "Assign each grid a job in writing: text on this one, images and captions on that one.",
        "Keep the two grids sharing the same margins, or the whole thing loses its edge alignment.",
        "Stop at two, or three at the very outside; beyond that you have a free canvas with extra guides."
      ],
      example: "Gerstner's grid for Capital magazine, reproduced in Designing Programmes, is the standard case cited for a single system that supports several column configurations.",
      numbers: "Gerstner's Capital grid, developed 1962 to 1963: 58 modules, described in Designing Programmes as a single structure combining several smaller grids.",
      pitfall: "Without an assigned job per grid, a compound grid becomes a permission slip to put anything anywhere and claim it was on a grid.",
      source: "Timothy Samara, Making and Breaking the Grid (2002); Karl Gerstner, Designing Programmes (1964)",
      verify: { status: "verified", note: "Compound grids are named in the publisher description of Samara's third edition, and Mark Boulton's grid workshop notes list compound grids alongside columnar, hierarchical, modular and baseline grids. Gerstner's Designing Programmes publication years (1964, expanded 1967 and 2007) confirmed. The 58-module count and the 1962 to 1963 date for the Capital grid come from Manuel Schmalstieg's notes on the grid, which give 58 as Gerstner's own figure in Designing Programmes, and from his Wikimedia Commons visualisation of the same diagram. Both are by the same author, so that is one check rather than two, and I have not counted the modules in the book myself." },
      belongs: { verdict: "core", why: "The standard answer when one column count cannot serve both text and pictures, and a real technique with a documented lineage." },
      related: [407, 408, 412, 418]
    },
    {
      n: 9411,
      title: "Nested grids and subgrids",
      aka: ["Sub-grid", "Grid within a grid"],
      oneLine: "A component carries its own internal grid that stays aligned to the page grid around it.",
      demo: {
        caption: "Same card, same slot. On the right the card's internal split lands in the page gutter behind it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Padding hard-coded</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><path class=\"s-mute\" d=\"M8 10 V120 M32 10 V120 M40 10 V120 M64 10 V120 M72 10 V120 M96 10 V120 M104 10 V120 M128 10 V120 M136 10 V120 M160 10 V120 M168 10 V120 M192 10 V120\"/><rect class=\"s\" x=\"40\" y=\"20\" width=\"120\" height=\"80\"/><path class=\"s-accent\" stroke-dasharray=\"4 4\" d=\"M78 14 V106 M86 14 V106\"/><rect class=\"f\" x=\"46\" y=\"28\" width=\"32\" height=\"64\"/><path class=\"s\" d=\"M86 40 H154 M86 52 H154 M86 64 H154 M86 76 H154\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Inner gutter inherited</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><path class=\"s-mute\" d=\"M8 10 V120 M32 10 V120 M40 10 V120 M64 10 V120 M72 10 V120 M96 10 V120 M104 10 V120 M128 10 V120 M136 10 V120 M160 10 V120 M168 10 V120 M192 10 V120\"/><rect class=\"s\" x=\"40\" y=\"20\" width=\"120\" height=\"80\"/><path class=\"s-accent\" stroke-dasharray=\"4 4\" d=\"M96 14 V106 M104 14 V106\"/><rect class=\"f\" x=\"40\" y=\"28\" width=\"56\" height=\"64\"/><path class=\"s\" d=\"M104 40 H160 M104 52 H160 M104 64 H160 M104 76 H160\"/></svg></div></div></div>"
      },
      what: "A card, a sidebar or a table sits in two or three columns of the page grid and then divides that space again for its own contents. The rule that makes it work is that the inner divisions inherit the outer gutter, so nothing inside the component drifts away from the alignments outside it. CSS formalised this with subgrid, where a nested element takes its tracks from its parent instead of defining new ones.",
      why: "Without it, every component invents its own spacing and the page slowly loses its edges. With it, a component can be dropped into a different slot and still line up.",
      how: [
        "Make the inner gutter equal to the outer gutter, or an exact half of it.",
        "Where the platform supports subgrid, use it rather than re-declaring track sizes inside a component.",
        "Check nested components at their narrowest allowed slot, not just their widest.",
        "Never let a nested grid change the page margins."
      ],
      example: "A product card spanning four columns that splits its own footprint into a two-column image and a two-column detail block, with the split landing on the same line as the page grid behind it.",
      numbers: "",
      pitfall: "Hard-coding pixel padding inside a component means it aligns in the layout it was designed for and nowhere else.",
      source: "CSS Grid Layout Module Level 2 (subgrid); standard practice in grid-based publication design",
      verify: { status: "verified", note: "Added as a gap. Subgrid is a documented CSS feature and nesting is standard grid practice, but I could not attribute the design principle to a single named author, so no attribution is claimed." },
      belongs: { verdict: "core", why: "Missing from the master list and unavoidable in any component-based layout, where alignment either survives nesting or collapses." },
      related: [408, 418, 444, 447]
    },
    {
      n: 412,
      title: "Swiss / international grid",
      aka: ["International Typographic Style", "Swiss Style grid"],
      oneLine: "The postwar Swiss method of building layouts from a declared mathematical field system.",
      demo: {
        caption: "The same field is drawn under both. Only the right-hand composition starts and stops on its lines.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Centred, sized by eye</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 150\"><path class=\"s-mute\" d=\"M12 12 V138 M50 12 V138 M58 12 V138 M96 12 V138 M104 12 V138 M142 12 V138 M150 12 V138 M188 12 V138 M12 12 H188 M12 28 H188 M12 34 H188 M12 50 H188 M12 56 H188 M12 72 H188 M12 78 H188 M12 94 H188 M12 100 H188 M12 116 H188 M12 122 H188 M12 138 H188\"/><rect class=\"f\" x=\"35\" y=\"16\" width=\"130\" height=\"8\"/><rect class=\"f\" x=\"58\" y=\"28\" width=\"84\" height=\"6\"/><rect class=\"f\" x=\"42\" y=\"52\" width=\"116\" height=\"42\"/><path class=\"s\" d=\"M52 104 H148 M58 112 H142 M48 120 H152 M62 128 H138\"/><rect class=\"f\" x=\"82\" y=\"138\" width=\"36\" height=\"5\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Flush left on a declared field</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 150\"><path class=\"s-mute\" d=\"M12 12 V138 M50 12 V138 M58 12 V138 M96 12 V138 M104 12 V138 M142 12 V138 M150 12 V138 M188 12 V138 M12 12 H188 M12 28 H188 M12 34 H188 M12 50 H188 M12 56 H188 M12 72 H188 M12 78 H188 M12 94 H188 M12 100 H188 M12 116 H188 M12 122 H188 M12 138 H188\"/><rect class=\"f\" x=\"12\" y=\"12\" width=\"130\" height=\"8\"/><rect class=\"f\" x=\"12\" y=\"22\" width=\"84\" height=\"6\"/><rect class=\"f\" x=\"12\" y=\"56\" width=\"130\" height=\"38\"/><path class=\"s\" d=\"M150 60 H188 M150 68 H188 M150 76 H188 M150 84 H188 M150 92 H188\"/><rect class=\"f\" x=\"12\" y=\"122\" width=\"38\" height=\"5\"/></svg></div></div></div>"
      },
      what: "A working doctrine that came out of Zurich and Basel in the 1950s: sans-serif type, flush-left setting, photography rather than illustration, and an explicit grid of fields that everything is placed into. Josef Müller-Brockmann wrote the definitive manual, published in 1981 by Niggli with the parallel German title Rastersysteme für die visuelle Gestaltung. Emil Ruder, Karl Gerstner and Armin Hofmann developed the teaching alongside him.",
      why: "It replaced taste with a stated method, which is why it scaled to corporations, airports and signage systems. Anyone can be handed the grid and produce work that belongs to the same family. That is the whole argument for it, and it is a strong one.",
      how: [
        "Write the grid down as a specification before you compose anything.",
        "Use the fewest type sizes and weights that will carry the hierarchy.",
        "Align flush left, ragged right, so the word spacing stays even and the left edge stays hard.",
        "Judge the result by whether a second designer could extend it without asking you questions."
      ],
      example: "Müller-Brockmann's Tonhalle concert posters and the layouts in Grid Systems in Graphic Design, which is itself set to the system it describes.",
      numbers: "",
      pitfall: "Copied as a look rather than a method, it produces Helvetica and a lot of white space with no underlying system. The style is the residue, not the point.",
      source: "Josef Müller-Brockmann, Grid Systems in Graphic Design (Niggli, 1981)",
      verify: { status: "verified", note: "Publication details confirmed (Niggli, 1981, bilingual German and English). The much-quoted line from the book, that the grid system is an aid and not a guarantee and that using it is an art requiring practice, is attributed to Müller-Brockmann across multiple independent sources." },
      belongs: { verdict: "core", why: "The origin of nearly every grid convention still in use, including the ones the web inherited without knowing it." },
      related: [407, 408, 411, 431]
    },
    {
      n: 413,
      title: "8-point grid",
      aka: ["8pt grid", "8dp grid"],
      oneLine: "Size and space every interface element in multiples of eight.",
      demo: {
        caption: "Thirty-three spacings sit between zero and thirty-two. The rule keeps the five marked, and the block lands on two.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 128\"><path class=\"s-mute\" d=\"M20 30 H284\"/><path class=\"s-mute\" d=\"M28.25 22 V30 M36.5 22 V30 M44.75 22 V30 M53 22 V30 M61.25 22 V30 M69.5 22 V30 M77.75 22 V30 M94.25 22 V30 M102.5 22 V30 M110.75 22 V30 M119 22 V30 M127.25 22 V30 M135.5 22 V30 M143.75 22 V30 M160.25 22 V30 M168.5 22 V30 M176.75 22 V30 M185 22 V30 M193.25 22 V30 M201.5 22 V30 M209.75 22 V30 M226.25 22 V30 M234.5 22 V30 M242.75 22 V30 M251 22 V30 M259.25 22 V30 M267.5 22 V30 M275.75 22 V30\"/><path class=\"s-accent\" d=\"M20 12 V30 M86 12 V30 M152 12 V30 M218 12 V30 M284 12 V30\"/><text class=\"t\" x=\"17\" y=\"42\">0</text><text class=\"t\" x=\"82\" y=\"42\">8</text><text class=\"t\" x=\"145\" y=\"42\">16</text><text class=\"t\" x=\"211\" y=\"42\">24</text><text class=\"t\" x=\"274\" y=\"42\">32</text><path class=\"s-accent\" stroke-dasharray=\"4 4\" d=\"M86 30 V108 M218 30 V108\"/><rect class=\"f\" x=\"86\" y=\"72\" width=\"132\" height=\"28\"/><text class=\"t\" x=\"86\" y=\"122\">16 wide, both edges on a kept tick</text></svg></div>"
      },
      what: "A spacing convention for screen work: dimensions, padding and margins are all multiples of eight. Bryn Jackson's spec.fm guide sets out the rule and distinguishes a hard grid, where elements snap to a displayed eight-point ruling, from a soft grid, where you simply measure eight-point increments between elements. Material Design bakes it in, aligning components to an 8dp square baseline grid. Elliot Dahl's Built to Adapt article of December 2016 is what spread it through product teams.",
      why: "It removes seven of every eight spacing options, which is the actual benefit. Fewer choices means faster work and fewer arguments, and a developer reading a mock-up can guess the number correctly without measuring.",
      how: [
        "Pick hard or soft grid as a team and say which in the design system documentation.",
        "Use eight for layout spacing and let type and icons drop to four where eight is too coarse.",
        "Set component heights by padding around the text rather than by typing a height.",
        "Do not force line-height onto eights if it damages the reading; type is the exception."
      ],
      example: "Material Design 2 specifies an app bar height of 56dp, a status bar of 24dp and a list item of 88dp, all multiples of eight.",
      numbers: "Material Design 2: components align to an 8dp square baseline grid; padding measured in increments of 8dp or 4dp; keylines measured in increments of 8dp; touch targets at least 48 by 48dp with at least 8dp between them.",
      pitfall: "Applied to typography as a hard rule it produces bad leading. Jackson's own guide treats text as the case that needs discretion.",
      source: "Bryn Jackson, The 8-Point Grid (spec.fm); Material Design 2, Spacing methods; Elliot Dahl, Intro to the 8-Point Grid System (Built to Adapt, 14 December 2016)",
      verify: { status: "verified", note: "Read the spec.fm text directly for the hard grid and soft grid distinction, for the pairing of an 8pt UI grid with a 4pt baseline grid, for the seven-of-every-eight argument and for the instruction to use discretion when laying out text. The page carries no byline; the attribution to Bryn Jackson comes from a later article that credits him by name. The 8dp and 4dp figures and the 24, 56 and 88dp heights read directly from the Material Design 2 Spacing methods page. Dahl's date of 14 December 2016 confirmed from the Medium byline. A 2015 date for the spec.fm article is claimed by a glossary site and I could not corroborate it, so no year is given." },
      belongs: { verdict: "core", why: "The default spacing discipline in current product design, and the thing that makes a design system implementable." },
      related: [414, 419, 446, 445]
    },
    {
      n: 414,
      title: "4-point spacing scale",
      aka: ["4pt grid", "4dp grid", "Half-step spacing"],
      oneLine: "A finer four-unit increment for type, icons and the insides of components.",
      demo: {
        caption: "Long ticks are the eights, short ticks the fours. The card is 32 wide; only its insides use the half steps.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 140\"><path class=\"s-mute\" d=\"M20 40 H284\"/><path class=\"s-accent\" d=\"M20 14 V40 M64 14 V40 M108 14 V40 M152 14 V40 M196 14 V40 M240 14 V40 M284 14 V40\"/><path class=\"s-mute\" d=\"M42 28 V40 M86 28 V40 M130 28 V40 M174 28 V40 M218 28 V40 M262 28 V40\"/><text class=\"t\" x=\"17\" y=\"52\">0</text><text class=\"t\" x=\"61\" y=\"52\">8</text><text class=\"t\" x=\"102\" y=\"52\">16</text><text class=\"t\" x=\"146\" y=\"52\">24</text><text class=\"t\" x=\"190\" y=\"52\">32</text><text class=\"t\" x=\"234\" y=\"52\">40</text><text class=\"t\" x=\"278\" y=\"52\">48</text><path class=\"s-accent\" stroke-dasharray=\"4 4\" d=\"M20 58 V124 M196 58 V124\"/><path class=\"s-mute\" stroke-dasharray=\"4 4\" d=\"M42 58 V124 M86 58 V124\"/><rect class=\"s\" x=\"20\" y=\"76\" width=\"176\" height=\"40\"/><rect class=\"f\" x=\"42\" y=\"85\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"86\" y=\"93\" width=\"88\" height=\"6\"/><text class=\"t\" x=\"204\" y=\"88\">card 32 wide</text><text class=\"t\" x=\"204\" y=\"104\">on the eights</text><text class=\"t\" x=\"20\" y=\"136\">inset 4, icon to label 4: half steps, inside only</text></svg></div>"
      },
      what: "Eight is too coarse for small things. The four-point scale gives a half step for icon spacing, label gaps and baseline alignment while keeping the arithmetic clean, because every eight-point value is still valid. Material Design uses exactly this split: components on 8dp, icons and type on 4dp. Tailwind CSS goes further and makes four pixels the base unit of its entire spacing scale.",
      why: "It buys back the fine control that a pure eight-point system loses, without reopening every value between one and eight. In practice teams write an eight-point layout scale and a four-point component scale and stop arguing.",
      how: [
        "Reserve four-point steps for inside components; keep layout spacing on eights.",
        "Write the scale as named tokens rather than raw numbers so the intent survives handover.",
        "Skip values as the scale grows, so steps stay visibly different rather than merely arithmetically different.",
        "Check the smallest steps at real device pixel ratios; a two-point difference disappears on a phone."
      ],
      example: "Tailwind CSS documents one spacing unit as 0.25rem, which is 4px at the default browser text size, and builds its whole utility scale from that unit.",
      numbers: "Material Design 2: icons, type and some in-component elements align to a 4dp grid, and type aligns to a 4dp baseline grid. Tailwind CSS: one spacing unit equals 0.25rem, or 4px at default settings.",
      pitfall: "Publishing both a four and an eight scale without saying which applies where means everyone uses four, and the coarse rhythm the system was meant to give you never appears.",
      source: "Material Design 2, Spacing methods; Tailwind CSS spacing documentation; Bryn Jackson, The 8-Point Grid (spec.fm)",
      verify: { status: "verified", note: "Material's 4dp figures, including type aligning to a 4dp baseline grid, read directly from the Material Design 2 Spacing methods page. Tailwind's default spacing theme variable of 0.25rem read directly from the Tailwind theme documentation. The pairing of an 8pt UI grid with a 4pt baseline grid read directly from the spec.fm text." },
      belongs: { verdict: "core", why: "The practical companion to the 8-point grid; without it the coarse grid gets abandoned at the first tight component." },
      related: [413, 410, 446]
    },
    {
      n: 415,
      title: "12-column responsive grid",
      aka: ["Twelve-column grid", "Framework grid"],
      oneLine: "Twelve equal columns, chosen because twelve divides neatly into halves, thirds, quarters and sixths.",
      demo: {
        caption: "Twelve splits cleanly into halves, thirds, quarters and sixths. The bottom row is the five that will not fit.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 180\"><path class=\"s-mute\" d=\"M46.5 12 V174 M69 12 V174 M91.5 12 V174 M114 12 V174 M136.5 12 V174 M159 12 V174 M181.5 12 V174 M204 12 V174 M226.5 12 V174 M249 12 V174 M271.5 12 V174\"/><rect class=\"s-mute\" x=\"26\" y=\"14\" width=\"18.5\" height=\"18\"/><rect class=\"s-mute\" x=\"48.5\" y=\"14\" width=\"18.5\" height=\"18\"/><rect class=\"s-mute\" x=\"71\" y=\"14\" width=\"18.5\" height=\"18\"/><rect class=\"s-mute\" x=\"93.5\" y=\"14\" width=\"18.5\" height=\"18\"/><rect class=\"s-mute\" x=\"116\" y=\"14\" width=\"18.5\" height=\"18\"/><rect class=\"s-mute\" x=\"138.5\" y=\"14\" width=\"18.5\" height=\"18\"/><rect class=\"s-mute\" x=\"161\" y=\"14\" width=\"18.5\" height=\"18\"/><rect class=\"s-mute\" x=\"183.5\" y=\"14\" width=\"18.5\" height=\"18\"/><rect class=\"s-mute\" x=\"206\" y=\"14\" width=\"18.5\" height=\"18\"/><rect class=\"s-mute\" x=\"228.5\" y=\"14\" width=\"18.5\" height=\"18\"/><rect class=\"s-mute\" x=\"251\" y=\"14\" width=\"18.5\" height=\"18\"/><rect class=\"s-mute\" x=\"273.5\" y=\"14\" width=\"18.5\" height=\"18\"/><rect class=\"f\" x=\"26\" y=\"42\" width=\"131\" height=\"18\"/><rect class=\"f\" x=\"161\" y=\"42\" width=\"131\" height=\"18\"/><rect class=\"f\" x=\"26\" y=\"70\" width=\"86\" height=\"18\"/><rect class=\"f\" x=\"116\" y=\"70\" width=\"86\" height=\"18\"/><rect class=\"f\" x=\"206\" y=\"70\" width=\"86\" height=\"18\"/><rect class=\"f\" x=\"26\" y=\"98\" width=\"63.5\" height=\"18\"/><rect class=\"f\" x=\"93.5\" y=\"98\" width=\"63.5\" height=\"18\"/><rect class=\"f\" x=\"161\" y=\"98\" width=\"63.5\" height=\"18\"/><rect class=\"f\" x=\"228.5\" y=\"98\" width=\"63.5\" height=\"18\"/><rect class=\"f\" x=\"26\" y=\"126\" width=\"41\" height=\"18\"/><rect class=\"f\" x=\"71\" y=\"126\" width=\"41\" height=\"18\"/><rect class=\"f\" x=\"116\" y=\"126\" width=\"41\" height=\"18\"/><rect class=\"f\" x=\"161\" y=\"126\" width=\"41\" height=\"18\"/><rect class=\"f\" x=\"206\" y=\"126\" width=\"41\" height=\"18\"/><rect class=\"f\" x=\"251\" y=\"126\" width=\"41\" height=\"18\"/><rect class=\"s\" stroke-dasharray=\"4 3\" x=\"26\" y=\"154\" width=\"50\" height=\"18\"/><rect class=\"s\" stroke-dasharray=\"4 3\" x=\"80\" y=\"154\" width=\"50\" height=\"18\"/><rect class=\"s\" stroke-dasharray=\"4 3\" x=\"134\" y=\"154\" width=\"50\" height=\"18\"/><rect class=\"s\" stroke-dasharray=\"4 3\" x=\"188\" y=\"154\" width=\"50\" height=\"18\"/><rect class=\"s\" stroke-dasharray=\"4 3\" x=\"242\" y=\"154\" width=\"50\" height=\"18\"/><text class=\"t\" x=\"0\" y=\"27\">12</text><text class=\"t\" x=\"0\" y=\"55\">2</text><text class=\"t\" x=\"0\" y=\"83\">3</text><text class=\"t\" x=\"0\" y=\"111\">4</text><text class=\"t\" x=\"0\" y=\"139\">6</text><text class=\"t\" x=\"0\" y=\"167\">5</text></svg></div>"
      },
      what: "The web's default column count. Twelve is popular for one arithmetic reason: it splits into 2, 3, 4 and 6 without remainder, so the same grid gives you a two-up, three-up, four-up and six-up layout. Nathan Smith's 960 Grid System of 2008 established the pattern with a 960 pixel container in 12 columns of 60 pixels or 16 of 40. Bootstrap took the twelve-column version and put it in front of millions of developers.",
      why: "It makes responsive reflow a matter of changing column spans at breakpoints rather than redrawing the layout. It also gives designers and developers a shared vocabulary: a component is six wide, not 47 per cent. Khoi Vinh, then design director of the New York Times, put the arithmetic case plainly, saying a designer should build units in multiples of three or four, with twelve as the ideal because it is a multiple of both.",
      how: [
        "State the container width and gutter alongside the column count; twelve columns alone specifies nothing.",
        "Reduce the column count at narrow widths rather than shrinking twelve columns to slivers.",
        "Check the fifths problem early; twelve does not divide by five, so a five-across row needs a different mechanism.",
        "Use the grid for layout, not for typography; measure still has to be checked separately."
      ],
      example: "Bootstrap 4.6 documents 12 columns with a 30 pixel gutter, 15 pixels on each side of a column, and container max-widths of 540, 720, 960 and 1140 pixels at its four container breakpoints.",
      numbers: "960 Grid System: 960px container, 12 columns of 60px or 16 of 40px, 10px margin each side of a column giving 20px gutters. Bootstrap 4.6: 12 columns, 30px gutter split 15px each side, container max-widths 540 / 720 / 960 / 1140px at 576 / 768 / 992 / 1200px.",
      pitfall: "Teams adopt twelve columns and then place nothing on them, styling components with arbitrary padding instead. The grid exists in the CSS and not on the screen.",
      source: "Nathan Smith, 960 Grid System (2008); Bootstrap 4.6 grid documentation; Khoi Vinh, quoted in Beth Tondreau, Layout Essentials",
      verify: { status: "verified", note: "Column, margin and gutter figures read directly from 960.gs, which also documents a 24-column 30px variant. Bootstrap figures and the four container max-widths with their media-query thresholds read directly from the Bootstrap 4.6 grid documentation. The Khoi Vinh quotation about twelve as the ideal unit count is reproduced in Tondreau's Layout Essentials, revised edition, which I read in scan. The 2008 date for the 960 Grid System is corroborated by a contemporaneous Swiss Miss post of October 2008." },
      belongs: { verdict: "core", why: "The de facto standard structure for web layout, and the reason so many sites share the same proportions." },
      related: [407, 418, 444, 9411]
    },
    {
      n: 416,
      title: "Margins",
      aka: ["Page margins", "Trim margins"],
      oneLine: "The unprinted band between the edge of the format and the content area.",
      demo: {
        caption: "The two inner margins meet at the fold as one gap, so equal margins leave the middle twice as wide.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">All four margins equal</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 142\"><rect class=\"s\" x=\"30\" y=\"12\" width=\"70\" height=\"105\"/><rect class=\"s\" x=\"100\" y=\"12\" width=\"70\" height=\"105\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M100 12 V117\"/><path class=\"s-mute\" d=\"M42 30 H88 M42 38 H88 M42 46 H88 M42 54 H88 M42 62 H88 M42 70 H88 M42 78 H88 M42 86 H88 M42 94 H88 M42 102 H88 M112 30 H158 M112 38 H158 M112 46 H158 M112 54 H158 M112 62 H158 M112 70 H158 M112 78 H158 M112 86 H158 M112 94 H158 M112 102 H158\"/><path class=\"s-accent\" d=\"M30 126 H42 M30 122 V130 M42 122 V130\"/><text class=\"t\" x=\"31\" y=\"138\">12</text><path class=\"s-accent\" d=\"M88 126 H112 M88 122 V130 M112 122 V130\"/><text class=\"t\" x=\"95\" y=\"138\">24</text><path class=\"s-accent\" d=\"M158 126 H170 M158 122 V130 M170 122 V130\"/><text class=\"t\" x=\"159\" y=\"138\">12</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Inner half the outer</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 142\"><rect class=\"s\" x=\"30\" y=\"12\" width=\"70\" height=\"105\"/><rect class=\"s\" x=\"100\" y=\"12\" width=\"70\" height=\"105\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M100 12 V117\"/><path class=\"s-mute\" d=\"M46 30 H92 M46 38 H92 M46 46 H92 M46 54 H92 M46 62 H92 M46 70 H92 M46 78 H92 M46 86 H92 M46 94 H92 M108 30 H154 M108 38 H154 M108 46 H154 M108 54 H154 M108 62 H154 M108 70 H154 M108 78 H154 M108 86 H154 M108 94 H154\"/><path class=\"s-accent\" d=\"M30 126 H46 M30 122 V130 M46 122 V130\"/><text class=\"t\" x=\"33\" y=\"138\">16</text><path class=\"s-accent\" d=\"M92 126 H108 M92 122 V130 M108 122 V130\"/><text class=\"t\" x=\"95\" y=\"138\">16</text><path class=\"s-accent\" d=\"M154 126 H170 M154 122 V130 M170 122 V130\"/><text class=\"t\" x=\"157\" y=\"138\">16</text></svg></div></div></div>"
      },
      what: "Margins define the live area by defining what is outside it. Beth Tondreau lists them first among the components of a grid, along with columns, markers, flowlines, spatial zones and modules. In book work they are conventionally unequal, with the inner margin smallest and the foot largest, because the gutter of a bound spread eats space and the page is held at the bottom.",
      why: "Margins do three jobs at once: they stop content being cut off in production, they give the eye somewhere to rest, and they set the perceived generosity of the whole piece. Cheap-looking print is almost always margin-starved print.",
      how: [
        "Make the four margins unequal in bound work; the classic order is inner smallest, then top, then outer, then foot.",
        "Add to the inner margin as the page count climbs, because thick books swallow the gutter.",
        "On screen, keep a real margin at every breakpoint rather than letting text touch the viewport edge.",
        "Treat the margin as content-free; a page number sitting in it is a marker, not an exception."
      ],
      example: "The Van de Graaf canon produces margins in the ratio 2:3:4:6, inner to top to outer to foot, on a 2:3 page, with the inner margin exactly half the outer.",
      numbers: "Van de Graaf canon on a 2:3 page: margins of 2:3:4:6 (inner:top:outer:foot). For a page of proportion 1:R the general form is 1:R:2:2R.",
      pitfall: "Equal margins on all four sides of a bound page look symmetrical in the file and lopsided in the hand, because the gutter takes back part of the inner margin.",
      source: "J. A. van de Graaf (1946), as documented in the standard account of page-construction canons; Beth Tondreau, Layout Essentials",
      verify: { status: "verified", note: "Margin ratios checked against the Wikipedia account of canons of page construction, which gives the 2:3:4:6 figures and the 1:R:2:2R generalisation for the Van de Graaf canon and cites his November 1946 article Nieuwe berekening voor de vormgeving. Tondreau read directly from a scan of the revised edition: she names margins, columns, markers, flowlines, spatial zones and modules as the main components, in that order, and defines margins as buffer zones between the trim size, including the gutter, and the page content." },
      belongs: { verdict: "core", why: "The first measurement on any layout and the one that decides whether the piece feels considered or cramped." },
      related: [406, 417, 424, 425]
    },
    {
      n: 417,
      title: "Columns",
      aka: ["Grid columns"],
      oneLine: "Vertical containers that hold type or images and set the measure.",
      demo: {
        caption: "A 96-character column splits into two of 46 or three of 29. Only the two-column split lands in the readable band.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 146\"><text class=\"t\" x=\"44\" y=\"14\">characters per line</text><path class=\"s-accent\" d=\"M134 22 V118 M194 22 V118\"/><rect class=\"s-mute\" x=\"6\" y=\"32\" width=\"26\" height=\"14\"/><rect class=\"s-mute\" x=\"6\" y=\"60\" width=\"26\" height=\"14\"/><path class=\"s-mute\" d=\"M19 60 V74\"/><rect class=\"s-mute\" x=\"6\" y=\"88\" width=\"26\" height=\"14\"/><path class=\"s-mute\" d=\"M14.7 88 V102 M23.3 88 V102\"/><rect class=\"f-mute\" x=\"44\" y=\"32\" width=\"192\" height=\"14\"/><rect class=\"f-accent\" x=\"44\" y=\"60\" width=\"92\" height=\"14\"/><rect class=\"f-mute\" x=\"44\" y=\"88\" width=\"58\" height=\"14\"/><text class=\"t\" x=\"240\" y=\"44\">96</text><text class=\"t\" x=\"140\" y=\"72\">46</text><text class=\"t\" x=\"106\" y=\"100\">29</text><text class=\"t\" x=\"126\" y=\"130\">45</text><text class=\"t\" x=\"188\" y=\"130\">75</text><text class=\"t\" x=\"130\" y=\"142\">readable band</text></svg></div>"
      },
      what: "Tondreau's definition is exactly that: columns are vertical containers that hold type or images. Their width is the single strongest control on readability, because it sets the line length. The count is a design decision made against the content, and it determines how many distinct widths the layout can offer.",
      why: "A column is a promise that text will be a certain width. Keep the promise and the reader never notices the structure. Break it and every page looks like a different publication.",
      how: [
        "Set column width from the measure you want at your body size, then work outwards to the page.",
        "Use more, narrower columns when you need flexibility, and combine them rather than adding new widths.",
        "Do not run body text across a column so wide that the eye loses the return sweep.",
        "Keep column widths equal unless you have a stated reason for a wide-and-narrow pairing."
      ],
      example: "USA Today runs an eight-column grid, subdivided as needed, with items spanning two or more columns at once.",
      numbers: "The conventional readable measure is 45 to 75 characters per line, which is the constraint that usually fixes column width. See master list entry 372.",
      pitfall: "Choosing the column count from the framework rather than the content leaves you with twelve columns and three usable widths.",
      source: "Beth Tondreau, Layout Essentials; Josef Müller-Brockmann, Grid Systems in Graphic Design (1981)",
      verify: { status: "verified", note: "Definition read directly from a scan of Tondreau's Layout Essentials, revised edition, which states that columns are vertical containers that hold type or images and that their width and number can vary with the content. The USA Today eight-column description comes from Katherine Humphreys' Haneke Design walkthrough of Elam's systems, not from Elam's own pages." },
      belongs: { verdict: "core", why: "The unit everything else in a grid is expressed in, and the one that directly controls whether text is readable." },
      related: [407, 416, 418, 372]
    },
    {
      n: 418,
      title: "Gutters",
      aka: ["Alleys", "Column gaps"],
      oneLine: "The space between columns, sized so the eye does not jump from one column into the next.",
      demo: {
        caption: "Left, the gutter is thinner than a word space, so each line runs straight on into the next column.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Gutter thinner than a word space</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><path class=\"s\" d=\"M10 16 H96 M10 28 H96 M10 40 H96 M10 52 H96 M10 64 H96 M10 76 H96 M10 88 H96 M10 100 H96 M10 112 H96 M98 16 H186 M98 28 H186 M98 40 H186 M98 52 H186 M98 64 H186 M98 76 H186 M98 88 H186 M98 100 H186 M98 112 H186\"/><text class=\"t\" x=\"8\" y=\"126\">gutter 2, leading 12</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Gutter set at the leading</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><path class=\"s\" d=\"M8 16 H92 M8 28 H92 M8 40 H92 M8 52 H92 M8 64 H92 M8 76 H92 M8 88 H92 M8 100 H92 M8 112 H92 M106 16 H190 M106 28 H190 M106 40 H190 M106 52 H190 M106 64 H190 M106 76 H190 M106 88 H190 M106 100 H190 M106 112 H190\"/><text class=\"t\" x=\"8\" y=\"126\">gutter 14, leading 12</text></svg></div></div></div>"
      },
      what: "The gap that keeps adjacent columns from reading as one. In a bound book the term also covers the binding gutter where two pages meet. The size is governed by the type: a gutter narrower than the word space will let the eye slide across at the end of a line, and a gutter much wider than the leading starts to split the page into unrelated pieces.",
      why: "Gutters are the cheapest legibility fix in layout. They also carry rhythm, because a consistent gutter is what makes a five-column page read as a system rather than five separate strips.",
      how: [
        "Size the gutter against the body leading, not against a round number chosen first.",
        "Widen the gutter as the measure gets longer, because the return sweep gets less accurate.",
        "Keep the gutter constant across the whole publication; varying it destroys the rhythm.",
        "Add to the binding gutter in print as the page count grows."
      ],
      example: "Bootstrap 4.6 sets a default gutter of 30 pixels, applied as 15 pixels of padding on each side of every column.",
      numbers: "Bootstrap 4.6 default gutter: 30px, split as 15px each side. 960 Grid System: 20px between columns, applied as 10px margin each side.",
      pitfall: "On the web the gutter is usually implemented as padding inside the column, so the outermost columns get half a gutter of unwanted inset unless the row compensates.",
      source: "Bootstrap grid documentation; Nathan Smith, 960 Grid System (2008)",
      verify: { status: "verified", note: "Both gutter figures read directly from the Bootstrap 4.6 grid documentation table and from 960.gs." },
      belongs: { verdict: "core", why: "A gutter set wrong is one of the few layout faults a general reader will notice, and it is decided by typography rather than taste." },
      related: [417, 407, 415, 446]
    },
    {
      n: 419,
      title: "Rows and modules",
      aka: ["Fields", "Units"],
      oneLine: "Horizontal divisions crossing the columns, and the rectangles their intersections create.",
      demo: {
        caption: "Right, the module is exactly four lines deep so the text fills it. Left, a round number leaves a sliver.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Module height a round number</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 140\"><rect class=\"s-mute\" x=\"8\" y=\"10\" width=\"88\" height=\"50\"/><rect class=\"s-mute\" x=\"8\" y=\"70\" width=\"88\" height=\"50\"/><rect class=\"s-mute\" x=\"104\" y=\"10\" width=\"88\" height=\"50\"/><rect class=\"s-mute\" x=\"104\" y=\"70\" width=\"88\" height=\"50\"/><path class=\"s\" d=\"M14 22 H90 M14 34 H90 M14 46 H90 M110 22 H186 M110 34 H186 M110 46 H186 M14 82 H90 M14 94 H90 M14 106 H90 M110 82 H186 M110 94 H186 M110 106 H186\"/><text class=\"t\" x=\"8\" y=\"136\">module 50, leading 12</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Module height from the leading</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 140\"><rect class=\"s-mute\" x=\"8\" y=\"10\" width=\"88\" height=\"48\"/><rect class=\"s-mute\" x=\"8\" y=\"70\" width=\"88\" height=\"48\"/><rect class=\"s-mute\" x=\"104\" y=\"10\" width=\"88\" height=\"48\"/><rect class=\"s-mute\" x=\"104\" y=\"70\" width=\"88\" height=\"48\"/><path class=\"s\" d=\"M14 22 H90 M14 34 H90 M14 46 H90 M14 58 H90 M110 22 H186 M110 34 H186 M110 46 H186 M110 58 H186 M14 82 H90 M14 94 H90 M14 106 H90 M14 118 H90 M110 82 H186 M110 94 H186 M110 106 H186 M110 118 H186\"/><text class=\"t\" x=\"8\" y=\"136\">module 48 = four lines</text></svg></div></div></div>"
      },
      what: "Rows are the horizontal counterpart of columns. Where rows and columns cross, they create modules: the individual units of space that content is assigned to in a modular grid. A photograph might take four modules, a caption one. The module is the atom of the system, and its height is normally derived from the leading of the body text so type and structure stay in step.",
      why: "Rows give you the vertical control that columns cannot. They are the reason a grid of cards lines up along its bottom edge as well as its sides, and the reason a page of mixed content still reads as one composition.",
      how: [
        "Derive module height from the leading so a whole number of text lines fits a whole number of modules.",
        "Keep the vertical gap between rows equal to the gutter, or an exact multiple of it.",
        "Assign content to whole modules; half-filled modules are where grids start to look sloppy.",
        "Cap the module count so each one is big enough to hold something useful."
      ],
      example: "The layouts in Müller-Brockmann's Grid Systems in Graphic Design are built by assigning photographs and text blocks to whole numbers of fields in a modular grid.",
      numbers: "",
      pitfall: "Rows set to a round pixel value rather than to the leading leave every text block floating slightly inside its module, and no amount of nudging fixes it afterwards.",
      source: "Timothy Samara, Making and Breaking the Grid (2002); Josef Müller-Brockmann, Grid Systems in Graphic Design (1981)",
      verify: { status: "verified", note: "Read directly from a scan of Tondreau's Layout Essentials, revised edition, which defines modules as individual divisions separated by consistent space, providing a repeating ordered grid, and notes that combining modules creates columns and rows of varying sizes. The matching wording attributed to Samara's 2002 edition comes from teaching material, not from the book itself." },
      belongs: { verdict: "core", why: "Without rows a grid controls only half the page, and vertical drift is the most common layout fault in real work." },
      related: [408, 410, 421, 446]
    },
    {
      n: 420,
      title: "Flowlines and hanglines",
      aka: ["Horizontal alignments", "Hang line"],
      oneLine: "Horizontal lines that break the page into bands and give content a shared starting height.",
      demo: {
        caption: "Three pages from one section. On the right the body text starts on the same line whatever the headline depth.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No hangline</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 116\"><path class=\"s-accent\" stroke-dasharray=\"4 4\" d=\"M4 44 H196\"/><rect class=\"s\" x=\"8\" y=\"10\" width=\"52\" height=\"96\"/><rect class=\"f\" x=\"12\" y=\"16\" width=\"44\" height=\"5\"/><rect class=\"f\" x=\"12\" y=\"25\" width=\"30\" height=\"5\"/><path class=\"s-mute\" d=\"M12 38 H56 M12 46 H56 M12 54 H56 M12 62 H56 M12 70 H56 M12 78 H56 M12 86 H56 M12 94 H56 M12 102 H56\"/><rect class=\"s\" x=\"74\" y=\"10\" width=\"52\" height=\"96\"/><rect class=\"f\" x=\"78\" y=\"16\" width=\"44\" height=\"5\"/><path class=\"s-mute\" d=\"M78 30 H122 M78 38 H122 M78 46 H122 M78 54 H122 M78 62 H122 M78 70 H122 M78 78 H122 M78 86 H122 M78 94 H122 M78 102 H122\"/><rect class=\"s\" x=\"140\" y=\"10\" width=\"52\" height=\"96\"/><rect class=\"f\" x=\"144\" y=\"16\" width=\"44\" height=\"5\"/><rect class=\"f\" x=\"144\" y=\"25\" width=\"44\" height=\"5\"/><rect class=\"f\" x=\"144\" y=\"34\" width=\"26\" height=\"5\"/><path class=\"s-mute\" d=\"M144 48 H188 M144 56 H188 M144 64 H188 M144 72 H188 M144 80 H188 M144 88 H188 M144 96 H188 M144 104 H188\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One hangline held</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 116\"><path class=\"s-accent\" stroke-dasharray=\"4 4\" d=\"M4 44 H196\"/><rect class=\"s\" x=\"8\" y=\"10\" width=\"52\" height=\"96\"/><rect class=\"f\" x=\"12\" y=\"16\" width=\"44\" height=\"5\"/><rect class=\"f\" x=\"12\" y=\"25\" width=\"30\" height=\"5\"/><path class=\"s-mute\" d=\"M12 48 H56 M12 56 H56 M12 64 H56 M12 72 H56 M12 80 H56 M12 88 H56 M12 96 H56 M12 104 H56\"/><rect class=\"s\" x=\"74\" y=\"10\" width=\"52\" height=\"96\"/><rect class=\"f\" x=\"78\" y=\"16\" width=\"44\" height=\"5\"/><path class=\"s-mute\" d=\"M78 48 H122 M78 56 H122 M78 64 H122 M78 72 H122 M78 80 H122 M78 88 H122 M78 96 H122 M78 104 H122\"/><rect class=\"s\" x=\"140\" y=\"10\" width=\"52\" height=\"96\"/><rect class=\"f\" x=\"144\" y=\"16\" width=\"44\" height=\"5\"/><rect class=\"f\" x=\"144\" y=\"25\" width=\"44\" height=\"5\"/><rect class=\"f\" x=\"144\" y=\"34\" width=\"26\" height=\"5\"/><path class=\"s-mute\" d=\"M144 48 H188 M144 56 H188 M144 64 H188 M144 72 H188 M144 80 H188 M144 88 H188 M144 96 H188 M144 104 H188\"/></svg></div></div></div>"
      },
      what: "Flowlines are the horizontal alignments that divide the page into bands and tell the eye where to stop and start. A hangline is the particular flowline that content hangs from on every page, usually the top of the main text block below a masthead or heading zone. Samara treats flowlines as one of the standard components of a grid alongside margins, columns, modules, spatial zones and markers.",
      why: "A shared hangline is what makes a run of pages feel like a set. Without it, each page starts its content at a slightly different height and the publication develops a wobble that readers feel but cannot name.",
      how: [
        "Fix one hangline for the main content and hold it on every page of the section.",
        "Use secondary flowlines to mark where sidebars, captions and footers begin.",
        "Let images break the hangline upwards on purpose for emphasis, and never accidentally.",
        "Check hangline consistency by flipping quickly through the whole document at thumbnail size."
      ],
      example: "Magazine features that start every article's body text at the same height down the page, with the headline zone above it varying in depth, are hung from a single flowline.",
      numbers: "",
      pitfall: "Designers set a hangline for feature pages and forget it on the department pages, so the publication splits into two unrelated rhythms.",
      source: "Beth Tondreau, Layout Essentials; Timothy Samara, Making and Breaking the Grid (2002); the term hangline is unattributed publication-design vocabulary",
      verify: { status: "verified", note: "Flowlines read directly from a scan of Tondreau's Layout Essentials, revised edition, which defines them as alignments that break space into horizontal bands, are not actual lines, and guide a reader across a page. Samara is also credited with the term in teaching material quoting the 2002 edition. Hangline does not appear anywhere in the Tondreau scan and I found no originating author for it, so it is given as trade vocabulary and no source is claimed for the word itself." },
      belongs: { verdict: "core", why: "The horizontal half of a grid's alignment discipline, and the fix for the most common form of page-to-page drift." },
      related: [419, 421, 429, 430]
    },
    {
      n: 421,
      title: "Spatial zones",
      aka: ["Fields", "Regions"],
      oneLine: "Groups of modules or columns reserved for one kind of content across the whole document.",
      demo: {
        caption: "Same content on both. On the right the picture, the rail and the index hold the same zone on every page.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Placed where it fits</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 116\"><rect class=\"s\" x=\"8\" y=\"10\" width=\"52\" height=\"96\"/><rect class=\"f\" x=\"12\" y=\"14\" width=\"26\" height=\"20\"/><path class=\"s\" d=\"M42 16 H56 M42 22 H56 M42 28 H56 M42 34 H56\"/><path class=\"s-mute\" d=\"M12 42 H52 M12 50 H52 M12 58 H52 M12 66 H52 M12 74 H52 M12 82 H52\"/><rect class=\"f-mute\" x=\"12\" y=\"92\" width=\"20\" height=\"5\"/><rect class=\"s\" x=\"74\" y=\"10\" width=\"52\" height=\"96\"/><path class=\"s\" d=\"M78 16 H118 M78 22 H118 M78 28 H118\"/><rect class=\"f\" x=\"78\" y=\"36\" width=\"44\" height=\"24\"/><path class=\"s-mute\" d=\"M78 66 H118 M78 74 H118 M78 82 H118\"/><rect class=\"f-mute\" x=\"100\" y=\"92\" width=\"20\" height=\"5\"/><rect class=\"s\" x=\"140\" y=\"10\" width=\"52\" height=\"96\"/><rect class=\"f\" x=\"144\" y=\"60\" width=\"44\" height=\"24\"/><path class=\"s-mute\" d=\"M144 16 H170 M144 24 H170 M144 32 H170 M144 40 H170 M144 48 H170\"/><path class=\"s\" d=\"M174 16 H188 M174 22 H188 M174 28 H188 M174 34 H188 M174 40 H188\"/><rect class=\"f-mute\" x=\"144\" y=\"92\" width=\"44\" height=\"5\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Zones held across pages</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 116\"><rect class=\"s\" x=\"8\" y=\"10\" width=\"52\" height=\"96\"/><rect class=\"f\" x=\"12\" y=\"14\" width=\"44\" height=\"24\"/><path class=\"s-mute\" d=\"M12 44 H38 M12 52 H38 M12 60 H38 M12 68 H38 M12 76 H38\"/><path class=\"s\" d=\"M42 44 H56 M42 50 H56 M42 56 H56 M42 62 H56 M42 68 H56 M42 74 H56\"/><rect class=\"f-mute\" x=\"12\" y=\"88\" width=\"44\" height=\"6\"/><rect class=\"s\" x=\"74\" y=\"10\" width=\"52\" height=\"96\"/><rect class=\"f\" x=\"78\" y=\"14\" width=\"44\" height=\"24\"/><path class=\"s-mute\" d=\"M78 44 H104 M78 52 H104 M78 60 H104 M78 68 H104\"/><path class=\"s\" d=\"M108 44 H122 M108 50 H122 M108 56 H122 M108 62 H122 M108 68 H122\"/><rect class=\"f-mute\" x=\"78\" y=\"88\" width=\"44\" height=\"6\"/><rect class=\"s\" x=\"140\" y=\"10\" width=\"52\" height=\"96\"/><rect class=\"f\" x=\"144\" y=\"14\" width=\"44\" height=\"24\"/><path class=\"s-mute\" d=\"M144 44 H170 M144 52 H170 M144 60 H170 M144 68 H170 M144 76 H170\"/><path class=\"s\" d=\"M174 44 H188 M174 50 H188 M174 56 H188 M174 62 H188 M174 68 H188 M174 74 H188 M174 80 H188\"/><rect class=\"f-mute\" x=\"144\" y=\"88\" width=\"44\" height=\"6\"/></svg></div></div></div>"
      },
      what: "A spatial zone is a block of the grid set aside for a job: the top four modules are always the picture zone, the left column is always navigation. Samara lists it among the components of a grid. The zone is not a one-off placement; it is a standing rule that holds across pages or screens.",
      why: "Zones are what let a reader learn a document. Once they know that captions live in the outer column, they stop searching. For a team they turn layout into assignment, which is far faster than composition from scratch on every page.",
      how: [
        "Name each zone after its content, not its position, so the intent survives a redesign.",
        "Keep zone boundaries on grid lines; a zone that floats is just a habit.",
        "Allow an empty zone to stay empty rather than filling it because it is there.",
        "Document the zones in the design system, since this is the part that new joiners get wrong."
      ],
      example: "A newspaper front page where the top-left block is always the lead story, the right-hand rail is always briefs and the bottom strip is always the index.",
      numbers: "",
      pitfall: "Zones defined too tightly become a template that cannot absorb an unusual story, and the designer breaks them silently rather than revising them.",
      source: "Timothy Samara, Making and Breaking the Grid (2002); Beth Tondreau, Layout Essentials",
      verify: { status: "verified", note: "Read directly from a scan of Tondreau's Layout Essentials, revised edition, which defines spatial zones as groups of modules or columns that form specific areas for type, advertisements, images or other information. The matching Samara wording is second-hand, from teaching material quoting the 2002 edition." },
      belongs: { verdict: "core", why: "The mechanism that turns a grid from a set of lines into a repeatable information structure." },
      related: [409, 419, 420, 447]
    },
    {
      n: 422,
      title: "Markers",
      aka: ["Placement indicators", "Furniture"],
      oneLine: "Fixed slots for the small repeating items: page numbers, running heads, section labels.",
      demo: {
        caption: "A folio measured down from the text moves with it. Measured up from the trim it lands in the same place.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Measured from the text</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 128\"><path class=\"s-accent\" stroke-dasharray=\"4 4\" d=\"M8 108 H194\"/><rect class=\"s\" x=\"14\" y=\"8\" width=\"76\" height=\"110\"/><path class=\"s-mute\" d=\"M22 18 H82 M22 26 H82 M22 34 H82 M22 42 H82 M22 50 H82 M22 58 H82 M22 66 H82 M22 74 H82 M22 82 H82 M22 90 H82\"/><rect class=\"f\" x=\"48\" y=\"96\" width=\"8\" height=\"4\"/><rect class=\"s\" x=\"110\" y=\"8\" width=\"76\" height=\"110\"/><path class=\"s-mute\" d=\"M118 18 H178 M118 26 H178 M118 34 H178 M118 42 H178 M118 50 H178 M118 58 H178\"/><rect class=\"f\" x=\"144\" y=\"64\" width=\"8\" height=\"4\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Measured from the trim</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 128\"><path class=\"s-accent\" stroke-dasharray=\"4 4\" d=\"M8 108 H194\"/><rect class=\"s\" x=\"14\" y=\"8\" width=\"76\" height=\"110\"/><path class=\"s-mute\" d=\"M22 18 H82 M22 26 H82 M22 34 H82 M22 42 H82 M22 50 H82 M22 58 H82 M22 66 H82 M22 74 H82 M22 82 H82 M22 90 H82\"/><rect class=\"f\" x=\"48\" y=\"104\" width=\"8\" height=\"4\"/><rect class=\"s\" x=\"110\" y=\"8\" width=\"76\" height=\"110\"/><path class=\"s-mute\" d=\"M118 18 H178 M118 26 H178 M118 34 H178 M118 42 H178 M118 50 H178 M118 58 H178\"/><rect class=\"f\" x=\"144\" y=\"104\" width=\"8\" height=\"4\"/></svg></div></div></div>"
      },
      what: "Tondreau defines markers as the elements that help a reader navigate a document by indicating placement for material appearing in the same location each time, and she lists page numbers, running heads and feet, and icons. A folio, a section tab and a legal line are all markers. They occupy the same spot on every page, usually outside the main content area, and they are part of the grid specification rather than an afterthought.",
      why: "Markers are how a reader knows where they are in a long document. Because they repeat on every page, any inconsistency in their position is visible when the pages are flipped, and consistency is nearly free once the slot is fixed.",
      how: [
        "Give every marker a fixed position measured from the trim, not from the text block.",
        "Keep markers out of the live content area so a long text never collides with them.",
        "Size them well below the body text but above the point where they stop being legible.",
        "Decide the drop-folio rule for chapter openers before you lay out the book, not during proofing."
      ],
      example: "Any well-made paperback: the folio sits at the same measurement from the foot on every page, and disappears entirely on the chapter opener.",
      numbers: "",
      pitfall: "Markers get moved page by page to dodge a collision, and the resulting jitter is obvious the moment anyone flips through.",
      source: "Beth Tondreau, Layout Essentials; Timothy Samara, Making and Breaking the Grid (2002)",
      verify: { status: "verified", note: "Definition read directly from a scan of Tondreau's Layout Essentials, revised edition, including her list of page numbers, running heads and feet, and icons. Samara's parallel wording about placement indicators for subordinate, consistently appearing text is second-hand, from teaching material quoting the 2002 edition." },
      belongs: { verdict: "core", why: "A narrow piece of grid anatomy, but the one that carries navigation in long documents and the one juniors most often leave undefined." },
      related: [416, 420, 429]
    },
    {
      n: 423,
      title: "Safe area",
      aka: ["Title safe", "Action safe", "Safe area insets"],
      oneLine: "The inner region guaranteed to be visible after cropping, rounding or device intrusion.",
      demo: {
        caption: "Left, EBU R 95: graphics five per cent in, action three and a half. Right, the same idea as device insets.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Broadcast, EBU R 95</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 136\"><rect class=\"s\" x=\"12\" y=\"14\" width=\"176\" height=\"99\"/><rect class=\"s-mute\" stroke-dasharray=\"4 3\" x=\"18.16\" y=\"17.47\" width=\"163.68\" height=\"92.07\"/><rect class=\"s-accent\" stroke-dasharray=\"4 3\" x=\"20.8\" y=\"18.95\" width=\"158.4\" height=\"89.1\"/><rect class=\"f\" x=\"28\" y=\"92\" width=\"84\" height=\"12\"/><text class=\"t\" x=\"12\" y=\"128\">action 93, graphics 90</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Screen, safe-area insets</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 136\"><rect class=\"s\" x=\"62\" y=\"8\" width=\"76\" height=\"112\" rx=\"10\"/><rect class=\"f-mute\" x=\"86\" y=\"8\" width=\"28\" height=\"6\"/><rect class=\"f-mute\" x=\"88\" y=\"113\" width=\"24\" height=\"3\"/><rect class=\"s-accent\" stroke-dasharray=\"4 3\" x=\"68\" y=\"22\" width=\"64\" height=\"86\"/><rect class=\"f\" x=\"68\" y=\"26\" width=\"64\" height=\"22\"/><path class=\"s-mute\" d=\"M86 11 H50 M68 64 H40\"/><text class=\"t\" x=\"16\" y=\"14\">notch</text><text class=\"t\" x=\"8\" y=\"67\">inset</text><text class=\"t\" x=\"46\" y=\"132\">safe-area inset</text></svg></div></div></div>"
      },
      what: "Two related standards. In broadcast, the safe area is the part of the frame you can rely on reaching the viewer after overscan and reframing, and EBU Recommendation R 95 sets an action safe area 3.5 per cent in from each edge with graphics 5 per cent in. On phones the same idea returned as CSS environment variables, where the safe-area-inset values report how far in you must move to clear a notch, a rounded corner or a system bar.",
      why: "It is the difference between a caption that reads and a caption with its descenders cut off. The safe area is a hard constraint imposed by hardware, not a stylistic preference, so ignoring it produces broken output rather than merely ugly output.",
      how: [
        "Keep all essential text inside the graphics safe area, not merely inside the action safe area.",
        "On the web, set viewport-fit and pad interactive elements with the safe-area-inset values rather than guessing at a notch height.",
        "Use safe-area-max-inset values where you need a constant that does not change as system chrome retracts.",
        "Test on a device with a cutout and on one without; both must look deliberate."
      ],
      example: "EBU R 95 gives a 16:9 action safe area of 93 per cent of the width and height, and a graphics safe area of 90 per cent, which is why broadcast lower thirds sit so far in from the edge.",
      numbers: "EBU R 95: action safe 3.5 per cent at each edge (93 per cent of the image), graphics safe 5 per cent at each edge (90 per cent). The older SMPTE RP 218 practice used 90 per cent safe action and 80 per cent safe title.",
      pitfall: "Designers pad with a fixed value copied from one phone. The insets are dynamic and differ per device, so a hard-coded 44 pixels is wrong nearly everywhere.",
      source: "EBU Recommendation R 95; CSS Environment Variables Module Level 1 (env())",
      verify: { status: "verified", note: "Percentages read from the EBU page for R 95, version 1.1 of June 2017, which states 3.5 per cent action safe and 5 per cent graphics safe at the top, bottom and lateral parts of a 16:9 image, and covers SDTV, HDTV and UHDTV. The older SMPTE RP 218 90/80 figures are corroborated by secondary sources only, not by the standard itself. The env() variables, including the safe-area-inset and safe-area-max-inset families, read directly from the MDN page for env(), which cites CSS Environment Variables Module Level 1." },
      belongs: { verdict: "core", why: "A published constraint on where content may sit, which is exactly what a layout fundamental is." },
      related: [416, 444, 443, 9147]
    },
    {
      n: 424,
      title: "Page proportion",
      aka: ["Format ratio", "Page shape"],
      oneLine: "The width-to-height ratio of the page, chosen before anything is placed on it.",
      demo: {
        caption: "Three formats of equal area with the same body size. The shape alone decides the measure and how many columns fit.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 152\"><rect class=\"s\" x=\"6\" y=\"12\" width=\"72\" height=\"108\"/><path class=\"s-mute\" d=\"M13 22 H71 M13 30 H71 M13 38 H71 M13 46 H71 M13 54 H71 M13 62 H71 M13 70 H71 M13 78 H71 M13 86 H71 M13 94 H71 M13 102 H71 M13 110 H71\"/><rect class=\"s\" x=\"88\" y=\"21.9\" width=\"88.2\" height=\"88.2\"/><path class=\"s-mute\" d=\"M95 32 H169 M95 40 H169 M95 48 H169 M95 56 H169 M95 64 H169 M95 72 H169 M95 80 H169 M95 88 H169 M95 96 H169 M95 104 H169\"/><rect class=\"s\" x=\"186.2\" y=\"30\" width=\"108\" height=\"72\"/><path class=\"s-mute\" d=\"M193.2 40 H238.2 M193.2 48 H238.2 M193.2 56 H238.2 M193.2 64 H238.2 M193.2 72 H238.2 M193.2 80 H238.2 M193.2 88 H238.2 M193.2 96 H238.2 M242.2 40 H287.2 M242.2 48 H287.2 M242.2 56 H287.2 M242.2 64 H287.2 M242.2 72 H287.2 M242.2 80 H287.2 M242.2 88 H287.2 M242.2 96 H287.2\"/><text class=\"t\" x=\"6\" y=\"132\">2:3 portrait</text><text class=\"t\" x=\"88\" y=\"132\">square</text><text class=\"t\" x=\"186\" y=\"132\">3:2 landscape</text><text class=\"t\" x=\"6\" y=\"146\">one column</text><text class=\"t\" x=\"88\" y=\"146\">one column</text><text class=\"t\" x=\"186\" y=\"146\">two columns</text></svg></div>"
      },
      what: "Every layout starts with a rectangle, and the shape of that rectangle constrains everything after it. Historical book design used a small set of ratios: 2:3, 3:4, the golden section, and root-2. Tschichold built his page canon on the 2:3 proportion in The Form of the Book, and the canons of page construction are all methods for placing a type area inside a chosen page shape while keeping the two in the same proportion.",
      why: "The ratio decides the natural measure, the number of columns that will fit, and whether the page reads as calm or dynamic. Choosing it late means retrofitting the grid to a shape someone else picked, usually a printer or a default template.",
      how: [
        "Choose the format from the content and the reading situation, then build the grid inside it.",
        "Where you are stuck with a standard size, check its ratio and design with it rather than against it.",
        "Keep the type area in the same proportion as the page if you want the classical effect.",
        "For screens, treat the container ratio as the format, since the viewport is not yours to choose."
      ],
      example: "The ISO A series is a single ratio, 1 to the square root of 2, held across every size from A0 down, which is why an A4 layout scales to A3 without redrawing.",
      numbers: "Common historical page ratios: 2:3, 3:4, 1:root-2 (about 1:1.414), and the golden section (about 1:1.618).",
      pitfall: "Designing a grid in a shape you will not print in. A layout composed at screen ratio and then forced onto A4 loses its margins first and its hierarchy second.",
      source: "Jan Tschichold, The Form of the Book (English edition 1991); ISO 216",
      verify: { status: "verified", note: "Tschichold's 2:3 page and its 1:1:2:3 margin proportions confirmed via the Wikipedia account of canons of page construction, which cites The Form of the Book. I did not find him ranking 2:3 above every other ratio, so the entry now says he built his canon on it rather than that he called it best. Root-2 confirmed against the ISO 216 article. The golden section value is standard arithmetic." },
      belongs: { verdict: "core", why: "The first decision in any layout, and the one that silently limits every later decision." },
      related: [425, 426, 442, 416]
    },
    {
      n: 425,
      title: "Van de Graaf canon",
      aka: ["Ninths canon", "Secret canon construction"],
      oneLine: "A ruler-and-compass method that places the type area at one ninth and two ninths of the page.",
      demo: {
        caption: "One ninth in at the spine, two ninths at the fore-edge, and the block's corners land on the page diagonal.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 172\"><rect class=\"s\" x=\"70\" y=\"14\" width=\"80\" height=\"120\"/><rect class=\"s\" x=\"150\" y=\"14\" width=\"80\" height=\"120\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M150 14 V134\"/><path class=\"s-mute\" d=\"M150 14 L230 134\"/><rect class=\"s-accent\" x=\"87.78\" y=\"27.33\" width=\"53.33\" height=\"80\"/><rect class=\"s-accent\" x=\"158.89\" y=\"27.33\" width=\"53.33\" height=\"80\"/><path class=\"s-accent\" d=\"M236 14 V27.33 M232 14 H240 M232 27.33 H240 M236 107.33 V134 M232 107.33 H240 M232 134 H240\"/><text class=\"t\" x=\"245\" y=\"24\">1/9</text><text class=\"t\" x=\"245\" y=\"124\">2/9</text><path class=\"s-accent\" d=\"M150 142 H158.89 M150 138 V146 M158.89 138 V146 M212.22 142 H230 M212.22 138 V146 M230 138 V146\"/><text class=\"t\" x=\"148\" y=\"156\">1/9</text><text class=\"t\" x=\"212\" y=\"156\">2/9</text><text class=\"t\" x=\"8\" y=\"168\">type area, same shape as the page</text></svg></div>"
      },
      what: "Devised by J. A. van de Graaf and published in 1946, this is a geometric construction using the diagonals of a page and of a spread. It works for any page ratio and yields margins of one ninth and two ninths of the page dimensions. On a 2:3 page it produces margins in the ratio 2:3:4:6, inner to top to outer to foot, with the inner margin exactly half the outer and the type area height equal to the page width.",
      why: "It gives a defensible starting point for a book page in about a minute, and the result has the asymmetry that bound pages need. It also keeps the type area in the same proportion as the page, which is the property that makes classical book pages look settled.",
      how: [
        "Draw the diagonals of the single page and of the full spread, then use their intersections to find the type area corners.",
        "Use it as a first position and then adjust for the real page count and binding method.",
        "Check the general form for non-2:3 pages: for a page of proportion 1:R the margins run 1:R:2:2R.",
        "Do not apply it to screens, where there is no spread and no gutter."
      ],
      example: "Redrawing a paperback page with the canon gives an inner margin half the width of the outer, which is precisely the asymmetry most desktop publishing defaults get wrong.",
      numbers: "Margins of one ninth and two ninths of the page size. On a 2:3 page: 2:3:4:6 (inner:top:outer:foot). General form for a 1:R page: 1:R:2:2R.",
      pitfall: "Treated as a rule rather than a starting point, it produces a very large foot margin that wastes paper on a thick book with a tight budget.",
      source: "J. A. van de Graaf, published 1946",
      verify: { status: "verified", note: "Date, ratios and the general 1:R:2:2R form checked against the Wikipedia article on canons of page construction, which cites van de Graaf's 1946 publication in Tete: Technisch Tijdschrift voor de Grafische Industrie." },
      belongs: { verdict: "core", why: "A named, reproducible construction that still gives better book margins than any software default." },
      related: [416, 424, 426, 428]
    },
    {
      n: 426,
      title: "Golden canon of page construction",
      aka: ["Tschichold's secret canon", "Golden section page canon"],
      oneLine: "Tschichold's reconstruction of a medieval page scheme with a 2:3 page and 1:1:2:3 margins.",
      demo: {
        caption: "The same 2:3 page under both canons. Van de Graaf gives 2:3:4:6 margins; Tschichold gives 1:1:2:3 and a golden block.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Van de Graaf, 2:3:4:6</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 164\"><rect class=\"s\" x=\"60\" y=\"14\" width=\"80\" height=\"120\"/><rect class=\"s-accent\" x=\"68.89\" y=\"27.33\" width=\"53.33\" height=\"80\"/><path class=\"s-mute\" d=\"M71.89 37 H119.22 M71.89 47 H119.22 M71.89 57 H119.22 M71.89 67 H119.22 M71.89 77 H119.22 M71.89 87 H119.22 M71.89 97 H119.22\"/><text class=\"t\" x=\"62\" y=\"76\">2</text><text class=\"t\" x=\"94\" y=\"25\">3</text><text class=\"t\" x=\"128\" y=\"76\">4</text><text class=\"t\" x=\"94\" y=\"124\">6</text><text class=\"t\" x=\"8\" y=\"152\">type area 2:3, as the page</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Tschichold, 1:1:2:3</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 164\"><rect class=\"s\" x=\"60\" y=\"14\" width=\"80\" height=\"120\"/><rect class=\"s-accent\" x=\"71.06\" y=\"25.06\" width=\"46.82\" height=\"75.76\"/><path class=\"s-mute\" d=\"M74.06 35 H114.88 M74.06 45 H114.88 M74.06 55 H114.88 M74.06 65 H114.88 M74.06 75 H114.88 M74.06 85 H114.88 M74.06 95 H114.88\"/><text class=\"t\" x=\"63\" y=\"74\">1</text><text class=\"t\" x=\"94\" y=\"23\">1</text><text class=\"t\" x=\"126\" y=\"74\">2</text><text class=\"t\" x=\"94\" y=\"121\">3</text><text class=\"t\" x=\"8\" y=\"152\">type area in the golden section</text></svg></div></div></div>"
      },
      what: "Jan Tschichold presented a construction he called the secret canon, based on medieval manuscripts, in which the page is 2:3, the margins run 1:1:2:3 and the type area is proportioned in the golden section. He argued this was a scheme used by medieval scribes and later printers. The construction is genuine and reproducible; the historical claim that it was a known and transmitted secret is a reconstruction rather than a documented practice.",
      why: "As a page layout it works: the asymmetric margins suit a bound spread, and the type area sits high and inboard where the hand does not cover it. Knowing the claim is contested keeps you from citing it as history when you are really citing it as taste.",
      how: [
        "Use it as a page scheme, not as an argument from authority.",
        "Start from a 2:3 page; the canon is defined for that proportion.",
        "Compare the result side by side with the Van de Graaf construction, which is a different scheme: on a 2:3 page it gives margins of 2:3:4:6, not 1:1:2:3.",
        "State plainly in any client deck that the medieval provenance is disputed."
      ],
      example: "Tschichold's own book pages, and the many fine-press paperbacks that follow his Penguin-era conventions, use this asymmetric margin structure.",
      numbers: "Page proportion 2:3; margin proportions 1:1:2:3; type area proportioned in the golden section.",
      pitfall: "The canon gets cited as proof that medieval scribes worked to the golden section. The construction is Tschichold's, and the evidence that anyone before him used it deliberately is thin.",
      source: "Jan Tschichold, The Form of the Book (English edition 1991)",
      verify: { status: "disputed", note: "The 2:3 page, the 1:1:2:3 margins and the golden section type area are all documented in the Wikipedia account of canons of page construction, which cites Tschichold. That account records the equivalence Tschichold noted as being with Rosarivo's ninths construction, not with Van de Graaf's; the author's draft had the wrong partner and I have corrected it, since Van de Graaf on a 2:3 page gives 2:3:4:6. I found no primary evidence that medieval scribes held the canon as a transmitted secret, so the historical claim is marked disputed while the geometry stands." },
      belongs: { verdict: "core", why: "A named page construction still worth building, provided the folklore around it is labelled as folklore." },
      related: [425, 427, 428, 424]
    },
    {
      n: 427,
      title: "Rosarivo's divine proportion of the book",
      aka: ["Typographical divine proportion", "The 2:3 golden number"],
      oneLine: "Rosarivo's claim that Renaissance printers set their type area by dividing the page into ninths.",
      demo: {
        caption: "The page cut into ninths. The block's corners sit at one ninth and seven ninths of the diagonal.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 192\"><path class=\"s-mute\" d=\"M108.89 30 V150 M117.78 30 V150 M126.67 30 V150 M135.56 30 V150 M144.44 30 V150 M153.33 30 V150 M162.22 30 V150 M171.11 30 V150 M100 43.33 H180 M100 56.67 H180 M100 70 H180 M100 83.33 H180 M100 96.67 H180 M100 110 H180 M100 123.33 H180 M100 136.67 H180\"/><rect class=\"s\" x=\"100\" y=\"30\" width=\"80\" height=\"120\"/><path class=\"s-mute\" d=\"M100 30 L180 150\"/><rect class=\"s-accent\" x=\"108.89\" y=\"43.33\" width=\"53.33\" height=\"80\"/><circle class=\"f-mute\" cx=\"117.78\" cy=\"56.67\" r=\"2\"/><circle class=\"f-mute\" cx=\"126.67\" cy=\"70\" r=\"2\"/><circle class=\"f-mute\" cx=\"135.56\" cy=\"83.33\" r=\"2\"/><circle class=\"f-mute\" cx=\"144.44\" cy=\"96.67\" r=\"2\"/><circle class=\"f-mute\" cx=\"153.33\" cy=\"110\" r=\"2\"/><circle class=\"f-mute\" cx=\"171.11\" cy=\"136.67\" r=\"2\"/><circle class=\"f-accent\" cx=\"108.89\" cy=\"43.33\" r=\"3\"/><circle class=\"f-accent\" cx=\"162.22\" cy=\"123.33\" r=\"3\"/><path class=\"s-accent\" d=\"M100 22 H180 M100 18 V26 M108.89 18 V26 M162.22 18 V26 M180 18 V26\"/><text class=\"t\" x=\"102\" y=\"14\">1</text><text class=\"t\" x=\"132\" y=\"14\">6</text><text class=\"t\" x=\"168\" y=\"14\">2</text><path class=\"s-accent\" d=\"M92 30 V150 M88 30 H96 M88 43.33 H96 M88 123.33 H96 M88 150 H96\"/><text class=\"t\" x=\"78\" y=\"40\">1</text><text class=\"t\" x=\"78\" y=\"88\">6</text><text class=\"t\" x=\"78\" y=\"146\">2</text><text class=\"t\" x=\"8\" y=\"172\">ninths across and down, one in and two out</text><text class=\"t\" x=\"8\" y=\"186\">page 2:3, and the type area 2:3 as well</text></svg></div>"
      },
      what: "Raul Rosarivo published Divina proporcion tipografica in 1947, through the Ministry of Education of the Province of Buenos Aires. Working with compass and ruler on Renaissance books, he concluded that the page diagonals divided into ninths determined where the type area sat, and argued that Gutenberg used the ratio 2:3 as a governing number. He extended the claim to Peter Schoeffer and Nicolaus Jenson.",
      why: "It is the source of the widely repeated line that the Gutenberg Bible was laid out on a ninths division. If you use that story in a talk or a proposal, you should know it is a reconstruction from measurement, not a document left by Gutenberg.",
      how: [
        "Use the ninths division as a page scheme if you like the result; it is equivalent in effect to the golden canon on a 2:3 page.",
        "Attribute the method to Rosarivo, not to Gutenberg.",
        "Measure a facsimile yourself before repeating any specific claim about a historical book.",
        "Prefer the Van de Graaf construction if you want a method with no historical claim attached."
      ],
      example: "The ninths construction applied to a 2:3 page puts the type area in the same position as Tschichold's golden canon, which is the equivalence the two schemes are known for.",
      numbers: "Page diagonals divided into ninths; Rosarivo's governing ratio 2:3.",
      pitfall: "Repeating Rosarivo's Gutenberg attribution as settled fact. It is an inference from measuring surviving copies, and inference is not the same as evidence of intent.",
      source: "Raul Rosarivo, Divina proporcion tipografica (1947)",
      verify: { status: "disputed", note: "Publication year, publisher and the ninths method checked against the Wikipedia account of canons of page construction, which also records that Rosarivo's work was analysed by experts at the Gutenberg Museum and republished in the Gutenberg-Jahrbuch. The claim about Gutenberg's intent remains a reconstruction, so the status is disputed rather than verified." },
      belongs: { verdict: "adjacent", why: "Downgraded from core. The publication is real, but on a 2:3 page the method lands the type area in the same place as 426, and its live value is as a lesson in how design folklore forms rather than as a construction you would reach for. Keep 425 and 426 as the working canons." },
      related: [425, 426, 424]
    },
    {
      n: 428,
      title: "Villard's diagram",
      aka: ["Villard's canon of division", "Villard de Honnecourt figure"],
      oneLine: "A geometric figure used to divide a line or a page into equal parts without measuring.",
      demo: {
        caption: "Two diagonals give the half. Each new line from the corner to the last division finds the third, then the quarter.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 168\"><rect class=\"s\" x=\"20\" y=\"20\" width=\"240\" height=\"120\"/><path class=\"s-mute\" d=\"M260 20 L20 140 M20 140 L140 20 M20 140 L100 20\"/><path class=\"s-accent\" d=\"M20 20 L260 140\"/><path class=\"s-accent\" stroke-dasharray=\"4 3\" d=\"M140 20 V140 M100 20 V140 M80 20 V140\"/><circle class=\"f-accent\" cx=\"140\" cy=\"80\" r=\"3\"/><circle class=\"f-accent\" cx=\"100\" cy=\"60\" r=\"3\"/><circle class=\"f-accent\" cx=\"80\" cy=\"50\" r=\"3\"/><text class=\"t\" x=\"71\" y=\"153\">1/4</text><text class=\"t\" x=\"93\" y=\"153\">1/3</text><text class=\"t\" x=\"133\" y=\"153\">1/2</text><text class=\"t\" x=\"20\" y=\"14\">straight lines only, nothing measured</text></svg></div>"
      },
      what: "A construction that appears in the thirteenth-century portfolio of Villard de Honnecourt and lets you divide any length into equal parts using only diagonals. Hans Kayser analysed it in 1946 and read it as a demonstration of Pythagorean musical proportion applied to design. Kayser himself acknowledged that Villard's geometry does not match the Pythagorean scheme when the figure is drawn correctly, which is the crack in the story.",
      why: "The construction itself is genuinely useful: it divides a page or a line into halves, thirds, quarters and so on with a straight edge alone, which is how you build a grid without arithmetic. The harmonic interpretation is a separate claim and a weaker one.",
      how: [
        "Use the diagonal construction to divide a format when you want proportional rather than fixed divisions.",
        "Keep the geometry and the harmonic theory separate in your own head and in any presentation.",
        "Check any claim about medieval practice against a facsimile of the portfolio rather than a design blog.",
        "Prefer plain arithmetic on screen, where you can divide precisely anyway."
      ],
      example: "Dividing a page into thirds by drawing the diagonals of the page and of each half, then dropping verticals from where they cross, needs no ruler markings at all.",
      numbers: "",
      pitfall: "The diagram is regularly presented as proof that medieval builders designed to musical ratios. That reading comes from Kayser in 1946, and Kayser conceded the geometry does not fit.",
      source: "Villard de Honnecourt, thirteenth-century portfolio; Hans Kayser, Ein harmonikaler Teilungskanon (1946)",
      verify: { status: "disputed", note: "Kayser's 1946 analysis and his own admission that Villard's geometry does not match the Pythagorean design when correctly drawn are both recorded in the Wikipedia account of canons of page construction. The construction is real; the harmonic interpretation is contested, so the entry is marked disputed." },
      belongs: { verdict: "adjacent", why: "Downgraded from core. The diagonal division is a real drawing technique, but on any screen or in any layout application you divide by arithmetic instead, and the reason the diagram is famous is a harmonic reading its own analyst conceded does not fit. Historical context rather than working method." },
      related: [425, 426, 427, 424]
    },
    {
      n: 429,
      title: "Spread thinking (recto and verso)",
      aka: ["Double-page spread", "Facing pages"],
      oneLine: "In bound work the unit of design is the two facing pages, not the single page.",
      demo: {
        caption: "Same two pages. On the right the grid is mirrored across the fold, so both folios land at the outer edge.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Grid repeated on both pages</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 140\"><rect class=\"s\" x=\"20\" y=\"14\" width=\"80\" height=\"100\"/><rect class=\"s\" x=\"100\" y=\"14\" width=\"80\" height=\"100\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M100 14 V114\"/><path class=\"s-mute\" d=\"M28 30 H84 M108 30 H164 M28 38 H84 M108 38 H164 M28 46 H84 M108 46 H164 M28 54 H84 M108 54 H164 M28 62 H84 M108 62 H164 M28 70 H84 M108 70 H164 M28 78 H84 M108 78 H164 M28 86 H84 M108 86 H164 M28 94 H84 M108 94 H164 M28 102 H84 M108 102 H164\"/><rect class=\"f-accent\" x=\"28\" y=\"106\" width=\"12\" height=\"4\"/><rect class=\"f-accent\" x=\"108\" y=\"106\" width=\"12\" height=\"4\"/><text class=\"t\" x=\"20\" y=\"132\">the recto folio sits at the fold</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Grid mirrored across the fold</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 140\"><rect class=\"s\" x=\"20\" y=\"14\" width=\"80\" height=\"100\"/><rect class=\"s\" x=\"100\" y=\"14\" width=\"80\" height=\"100\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M100 14 V114\"/><path class=\"s-mute\" d=\"M36 30 H92 M108 30 H164 M36 38 H92 M108 38 H164 M36 46 H92 M108 46 H164 M36 54 H92 M108 54 H164 M36 62 H92 M108 62 H164 M36 70 H92 M108 70 H164 M36 78 H92 M108 78 H164 M36 86 H92 M108 86 H164 M36 94 H92 M108 94 H164 M36 102 H92 M108 102 H164\"/><rect class=\"f-accent\" x=\"36\" y=\"106\" width=\"12\" height=\"4\"/><rect class=\"f-accent\" x=\"152\" y=\"106\" width=\"12\" height=\"4\"/><text class=\"t\" x=\"20\" y=\"132\">both folios at the outer edge</text></svg></div></div></div>"
      },
      what: "Recto is the right-hand page, verso the left. In Western books recto pages carry odd numbers and verso pages even ones, and by convention the first page of a book, and often of each chapter, is a recto. A reader never sees a single page in isolation, so the composition that matters is the spread: two type areas, two outer margins and a shared gutter down the middle.",
      why: "Designing page by page produces spreads where the two halves argue: different picture sizes, mismatched hanglines, a heavy left against an empty right. Designing the spread means the pair reads as one field, which is how it will actually be seen.",
      how: [
        "Lay out and proof in spreads from the first sketch, never in single pages.",
        "Treat the two inner margins as one shared space and size it for the binding.",
        "Put chapter openers on the recto when the budget allows, and plan the blank verso deliberately.",
        "Mirror the grid across the gutter rather than repeating it, so the outer margins match."
      ],
      example: "Open any well-made hardback at a chapter start: the chapter opens on the right-hand page, and the preceding left-hand page is either blank or ends cleanly rather than being padded.",
      numbers: "",
      pitfall: "Reviewing a book as single pages on screen hides every spread-level problem, and they all reappear at the printer.",
      source: "Standard book-publishing convention; Jan Tschichold, The Form of the Book",
      verify: { status: "verified", note: "Recto and verso definitions, the Latin origin (recto folio and verso folio), the odd-numbered recto convention and the chapter-opens-on-recto convention all checked against the Wikipedia entry on recto and verso." },
      belongs: { verdict: "core", why: "The correct unit of composition for any bound or paginated piece, and a mistake that cannot be fixed after printing." },
      related: [416, 420, 430, 422]
    },
    {
      n: 430,
      title: "Pacing across pages",
      aka: ["Editorial rhythm", "Sequence and contrast"],
      oneLine: "Varying density and scale from spread to spread so a long document has a shape.",
      demo: {
        caption: "Six spreads in sequence. On the right the weight changes on purpose, so the section has peaks instead of one texture.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Every spread the same weight</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 102\"><rect class=\"s-mute\" x=\"6\" y=\"10\" width=\"56\" height=\"36\"/><rect class=\"s-mute\" x=\"72\" y=\"10\" width=\"56\" height=\"36\"/><rect class=\"s-mute\" x=\"138\" y=\"10\" width=\"56\" height=\"36\"/><rect class=\"s-mute\" x=\"6\" y=\"58\" width=\"56\" height=\"36\"/><rect class=\"s-mute\" x=\"72\" y=\"58\" width=\"56\" height=\"36\"/><rect class=\"s-mute\" x=\"138\" y=\"58\" width=\"56\" height=\"36\"/><path class=\"s-mute\" stroke-dasharray=\"2 2\" d=\"M34 10 V46 M100 10 V46 M166 10 V46 M34 58 V94 M100 58 V94 M166 58 V94\"/><path class=\"s-mute\" d=\"M11 18 H29 M39 18 H57 M11 23 H29 M39 23 H57 M11 28 H29 M39 28 H57 M11 33 H29 M39 33 H57 M11 38 H29 M39 38 H57 M77 18 H95 M105 18 H123 M77 23 H95 M105 23 H123 M77 28 H95 M105 28 H123 M77 33 H95 M105 33 H123 M77 38 H95 M105 38 H123 M143 18 H161 M171 18 H189 M143 23 H161 M171 23 H189 M143 28 H161 M171 28 H189 M143 33 H161 M171 33 H189 M143 38 H161 M171 38 H189 M11 66 H29 M39 66 H57 M11 71 H29 M39 71 H57 M11 76 H29 M39 76 H57 M11 81 H29 M39 81 H57 M11 86 H29 M39 86 H57 M77 66 H95 M105 66 H123 M77 71 H95 M105 71 H123 M77 76 H95 M105 76 H123 M77 81 H95 M105 81 H123 M77 86 H95 M105 86 H123 M143 66 H161 M171 66 H189 M143 71 H161 M171 71 H189 M143 76 H161 M171 76 H189 M143 81 H161 M171 81 H189 M143 86 H161 M171 86 H189\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Density planned across the run</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 102\"><rect class=\"f-mute\" x=\"6\" y=\"10\" width=\"56\" height=\"36\"/><rect class=\"f-mute\" x=\"6\" y=\"58\" width=\"28\" height=\"36\"/><rect class=\"s-mute\" x=\"6\" y=\"10\" width=\"56\" height=\"36\"/><rect class=\"s-mute\" x=\"72\" y=\"10\" width=\"56\" height=\"36\"/><rect class=\"s-mute\" x=\"138\" y=\"10\" width=\"56\" height=\"36\"/><rect class=\"s-mute\" x=\"6\" y=\"58\" width=\"56\" height=\"36\"/><rect class=\"s-mute\" x=\"72\" y=\"58\" width=\"56\" height=\"36\"/><rect class=\"s-mute\" x=\"138\" y=\"58\" width=\"56\" height=\"36\"/><path class=\"s-mute\" stroke-dasharray=\"2 2\" d=\"M100 10 V46 M166 10 V46 M34 58 V94 M100 58 V94 M166 58 V94\"/><rect class=\"f-accent\" x=\"82\" y=\"70\" width=\"36\" height=\"5\"/><rect class=\"f-accent\" x=\"82\" y=\"80\" width=\"26\" height=\"5\"/><path class=\"s-mute\" d=\"M77 16 H95 M105 16 H123 M77 21 H95 M105 21 H123 M77 26 H95 M105 26 H123 M77 31 H95 M105 31 H123 M77 36 H95 M105 36 H123 M77 41 H95 M105 41 H123 M143 16 H161 M171 16 H189 M143 21 H161 M171 21 H189 M143 26 H161 M171 26 H189 M143 31 H161 M171 31 H189 M143 36 H161 M171 36 H189 M143 41 H161 M171 41 H189 M39 66 H57 M39 71 H57 M39 76 H57 M39 81 H57 M39 86 H57 M143 64 H161 M171 64 H189 M143 69 H161 M171 69 H189 M143 74 H161 M171 74 H189 M143 79 H161 M171 79 H189 M143 84 H161 M171 84 H189 M143 89 H161 M171 89 H189\"/></svg></div></div></div>"
      },
      what: "A magazine or report that keeps the same weight on every spread flattens out and readers stop turning. Pacing is the deliberate alternation of busy and quiet, large image and dense text, so the sequence has peaks. Jan V. White's Editing by Design, first published in 1974 and now in a fourth edition revised by Alex W. White, is the standard text in this territory, treating word and picture as one editing problem rather than two.",
      why: "The reader experiences a publication as a sequence in time, not as a set of independent pages. A change of density at the right point does the work that a headline cannot, which is telling someone this part is different.",
      how: [
        "Print thumbnails of every spread and lay them out in order before finishing any single page.",
        "Plan at least one high-contrast spread in every section, and let the ones around it be plain.",
        "Vary image scale hard rather than gently; small changes read as inconsistency, big ones read as intent.",
        "Keep the grid constant while the density changes, so the variation reads as pacing and not as chaos."
      ],
      example: "A features section that opens with a full-bleed photograph, runs three text-dense spreads, then breaks to a full-width pull quote before the next feature.",
      numbers: "",
      pitfall: "Pacing decided page by page as the pages are finished produces a random distribution of loud spreads, usually clustered wherever the best photographs happened to arrive.",
      source: "Jan V. White, Editing by Design (fourth edition, revised by Alex W. White, Allworth Press, 2021); general editorial-design practice",
      verify: { status: "unverified", note: "Bibliographic details confirmed: Editing by Design first appeared in 1974 and the fourth edition, revised by Alex W. White, was published by Allworth Press in 2021, with the publisher describing it as showing that word people and design people share one task. I could not open the book to confirm that White uses the word pacing or to quote a definition, so nothing beyond the subject matter of the book is attributed to him. The concept itself is common craft vocabulary with no single traceable origin, which is why this stays unverified." },
      belongs: { verdict: "core", why: "A genuine layout decision for any multi-page piece, and one that no grid will make for you." },
      related: [429, 431, 421]
    },
    {
      n: 431,
      title: "Breaking the grid deliberately",
      aka: ["Grid disruption", "Controlled violation"],
      oneLine: "Placing one element off the structure so it reads as important rather than as a mistake.",
      demo: {
        caption: "The same four pages in a different order. The break only reads as emphasis once the grid has been established.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Broken on page one</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 90\"><rect class=\"s-mute\" x=\"8\" y=\"14\" width=\"40\" height=\"60\"/><rect class=\"s-mute\" x=\"56\" y=\"14\" width=\"40\" height=\"60\"/><rect class=\"s-mute\" x=\"104\" y=\"14\" width=\"40\" height=\"60\"/><rect class=\"s-mute\" x=\"152\" y=\"14\" width=\"40\" height=\"60\"/><rect class=\"f-accent\" x=\"5\" y=\"11\" width=\"46\" height=\"66\"/><rect class=\"f-mute\" x=\"61\" y=\"20\" width=\"30\" height=\"10\"/><rect class=\"f-mute\" x=\"109\" y=\"20\" width=\"30\" height=\"10\"/><rect class=\"f-mute\" x=\"157\" y=\"20\" width=\"30\" height=\"10\"/><path class=\"s-mute\" d=\"M61 36 H91 M61 42 H91 M61 48 H91 M61 54 H91 M61 60 H91 M61 66 H91 M109 36 H139 M109 42 H139 M109 48 H139 M109 54 H139 M109 60 H139 M109 66 H139 M157 36 H187 M157 42 H187 M157 48 H187 M157 54 H187 M157 60 H187 M157 66 H187\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Established, then broken</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 90\"><rect class=\"s-mute\" x=\"8\" y=\"14\" width=\"40\" height=\"60\"/><rect class=\"s-mute\" x=\"56\" y=\"14\" width=\"40\" height=\"60\"/><rect class=\"s-mute\" x=\"104\" y=\"14\" width=\"40\" height=\"60\"/><rect class=\"s-mute\" x=\"152\" y=\"14\" width=\"40\" height=\"60\"/><rect class=\"f-accent\" x=\"149\" y=\"11\" width=\"46\" height=\"66\"/><rect class=\"f-mute\" x=\"13\" y=\"20\" width=\"30\" height=\"10\"/><rect class=\"f-mute\" x=\"61\" y=\"20\" width=\"30\" height=\"10\"/><rect class=\"f-mute\" x=\"109\" y=\"20\" width=\"30\" height=\"10\"/><path class=\"s-mute\" d=\"M13 36 H43 M13 42 H43 M13 48 H43 M13 54 H43 M13 60 H43 M13 66 H43 M61 36 H91 M61 42 H91 M61 48 H91 M61 54 H91 M61 60 H91 M61 66 H91 M109 36 H139 M109 42 H139 M109 48 H139 M109 54 H139 M109 60 H139 M109 66 H139\"/></svg></div></div></div>"
      },
      what: "Half of Samara's book is about this. Once a grid is established over several pages, a single element that ignores it becomes the loudest thing in the document, because the reader has learned the rule well enough to notice it being broken. The break has to be big enough to be unmistakable and rare enough to stay valuable. Müller-Brockmann's own position was that the grid is an aid rather than a guarantee, and that using it well is a skill that takes practice.",
      why: "It gives you an emphasis mechanism that costs nothing and does not rely on size, colour or weight. It also stops a rigorous grid from becoming monotonous over a hundred pages.",
      how: [
        "Establish the grid convincingly for several spreads before breaking it once.",
        "Break it by a clear amount; a two-millimetre overhang looks like bad production.",
        "Break one thing at a time, not a whole spread.",
        "Ask what the break is for. If the answer is variety, it is decoration and should probably go."
      ],
      example: "A single full-bleed image in an otherwise strictly gridded annual report, running past the margins on all four sides.",
      numbers: "",
      pitfall: "Breaking the grid before it has been established. If the reader has not yet learned the structure, the exception is simply an inconsistency.",
      source: "Timothy Samara, Making and Breaking the Grid (2002); Josef Müller-Brockmann, Grid Systems in Graphic Design (1981)",
      verify: { status: "verified", note: "Samara's book is structured around making and then breaking the grid, which the publisher description of the third edition confirms. The Müller-Brockmann line that the grid system is an aid and not a guarantee, and that using it is an art requiring practice, is attributed to him consistently across several independent sources, though I did not see it in the book itself." },
      belongs: { verdict: "core", why: "The emphasis technique that only a grid makes available, and the reason grids are not a cage." },
      related: [432, 433, 412, 408]
    },
    {
      n: 432,
      title: "Off-grid accents",
      aka: ["Grid exceptions", "Accent placement"],
      oneLine: "Small, repeated departures from the grid used as a deliberate signature rather than a rupture.",
      demo: {
        caption: "Captions hanging left of the column. On the right one offset is used every time, so it becomes a second alignment.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Offsets judged by eye</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><rect class=\"s\" x=\"30\" y=\"10\" width=\"140\" height=\"110\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M60 10 V120\"/><rect class=\"f-mute\" x=\"60\" y=\"16\" width=\"100\" height=\"24\"/><rect class=\"f-mute\" x=\"60\" y=\"48\" width=\"100\" height=\"24\"/><rect class=\"f-mute\" x=\"60\" y=\"80\" width=\"100\" height=\"24\"/><rect class=\"f-accent\" x=\"54\" y=\"44\" width=\"60\" height=\"4\"/><rect class=\"f-accent\" x=\"47\" y=\"76\" width=\"60\" height=\"4\"/><rect class=\"f-accent\" x=\"57\" y=\"108\" width=\"60\" height=\"4\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One offset, half a gutter</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><rect class=\"s\" x=\"30\" y=\"10\" width=\"140\" height=\"110\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M60 10 V120\"/><path class=\"s-accent\" stroke-dasharray=\"3 3\" d=\"M52 10 V120\"/><rect class=\"f-mute\" x=\"60\" y=\"16\" width=\"100\" height=\"24\"/><rect class=\"f-mute\" x=\"60\" y=\"48\" width=\"100\" height=\"24\"/><rect class=\"f-mute\" x=\"60\" y=\"80\" width=\"100\" height=\"24\"/><rect class=\"f-accent\" x=\"52\" y=\"44\" width=\"60\" height=\"4\"/><rect class=\"f-accent\" x=\"52\" y=\"76\" width=\"60\" height=\"4\"/><rect class=\"f-accent\" x=\"52\" y=\"108\" width=\"60\" height=\"4\"/></svg></div></div></div>"
      },
      what: "The quieter sibling of breaking the grid. Instead of one dramatic violation, a layout uses a consistent small offset: a folio that hangs outside the text block, a caption that sits half a column proud, a rule that runs past the margin. Because it repeats, it reads as a style decision rather than an error, and it stops a strict grid feeling machine-made.",
      why: "It gives a rigorous layout a human fingerprint without giving up the structure. It also creates a secondary alignment that helps distinguish supporting matter from the main text.",
      how: [
        "Choose one offset amount and use it everywhere; two different offsets read as sloppiness.",
        "Tie the offset to the grid maths, for example half a gutter, so it is reproducible.",
        "Apply it to secondary matter such as captions, folios and marginalia, not to body text.",
        "Document it, or the next person will correct it back onto the grid."
      ],
      example: "A report where every caption hangs one half-gutter to the left of its image column, consistently, on every page.",
      numbers: "",
      pitfall: "An offset applied by eye rather than by measurement drifts across a long document and ends up looking like a production fault.",
      source: "origin unclear",
      verify: { status: "unverified", note: "Off-grid accent is descriptive studio vocabulary rather than a named principle. I searched for an originating author and found none; the underlying practice is covered by Samara's treatment of grid disruption in Making and Breaking the Grid, but the term itself is not attributable, so no source is claimed." },
      belongs: { verdict: "cut", why: "This is a mode of entry 431, breaking the grid, rather than a separate fundamental, and I found no source that treats it as its own principle. Keep 431 for deliberate departures and 386, optical margin alignment, for the small systematic overhangs; drop this as a duplicate heading." },
      related: [431, 422, 420, 386]
    },
    {
      n: 433,
      title: "Gridless and organic layout",
      aka: ["Non-grid composition", "Free composition"],
      oneLine: "Composing by eye and by relationship rather than against a fixed set of lines.",
      demo: {
        caption: "No columns on the right, yet the alignments are exact. They come from the elements rather than from lines declared first.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Grid declared first</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><rect class=\"s\" x=\"14\" y=\"10\" width=\"172\" height=\"110\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M14 10 V120 M52.5 10 V120 M58.5 10 V120 M97 10 V120 M103 10 V120 M141.5 10 V120 M147.5 10 V120 M186 10 V120\"/><rect class=\"f-mute\" x=\"14\" y=\"18\" width=\"83\" height=\"40\"/><rect class=\"f-accent\" x=\"14\" y=\"64\" width=\"83\" height=\"7\"/><path class=\"s-mute\" d=\"M103 18 H141.5 M147.5 18 H186 M103 24 H141.5 M147.5 24 H186 M103 30 H141.5 M147.5 30 H186 M103 36 H141.5 M147.5 36 H186 M103 42 H141.5 M147.5 42 H186 M103 48 H141.5 M147.5 48 H186 M103 54 H141.5 M147.5 54 H186 M103 60 H141.5 M147.5 60 H186 M103 66 H141.5 M147.5 66 H186 M103 72 H141.5 M147.5 72 H186\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Alignments taken from the elements</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><path class=\"s-accent\" stroke-dasharray=\"3 3\" d=\"M24 6 V100 M124 6 V100 M12 14 H190\"/><rect class=\"f-mute\" x=\"24\" y=\"14\" width=\"90\" height=\"50\"/><rect class=\"f-mute\" x=\"24\" y=\"70\" width=\"44\" height=\"4\"/><rect class=\"f-accent\" x=\"124\" y=\"14\" width=\"56\" height=\"7\"/><rect class=\"f-accent\" x=\"124\" y=\"25\" width=\"40\" height=\"7\"/><path class=\"s-mute\" d=\"M124 44 H180 M124 50 H180 M124 56 H180 M124 62 H180\"/></svg></div></div></div>"
      },
      what: "Some work does not want a grid. A single poster, a title sequence, a one-off cover or an experimental editorial piece can be composed by weight, tension and optical alignment instead of by a division of the format. This is not the absence of discipline; the alignments still have to be exact, they are simply derived from the elements rather than declared in advance. Samara's book covers this territory in its second half, and the Swiss orthodoxy it reacts against is the reason it is worth naming.",
      why: "A grid pays for itself over repetition. When there is nothing to repeat, the grid mostly costs you the possibilities it forbids. Free composition lets a single piece find a structure specific to its content.",
      how: [
        "Establish alignments from the strongest elements on the page and hold them exactly.",
        "Work at thumbnail size first, where composition problems are visible and detail is not.",
        "Test by turning the piece upside down; weak composition falls apart, strong composition still balances.",
        "Do not use this approach for anything that will be extended by someone else."
      ],
      example: "A one-off gig poster or book jacket, where the type is positioned against the image rather than against a column structure.",
      numbers: "",
      pitfall: "Used on a multi-page or multi-page-template job, gridless composition means every page is a fresh negotiation and the set never coheres.",
      source: "Timothy Samara, Making and Breaking the Grid (2002)",
      verify: { status: "verified", note: "Samara's book explicitly covers both building grids and working without or against them, confirmed from the publisher description of the third edition. I did not confirm the phrase organic layout as a term of art in the book, so it is given as an alternative name rather than a quotation." },
      belongs: { verdict: "core", why: "Knowing when not to use a grid is part of knowing how to use one, and single-artefact work is a large share of design practice." },
      related: [431, 409, 412]
    },
    {
      n: 434,
      title: "Axial system",
      aka: ["Axis composition"],
      oneLine: "All elements arranged to the left and right of a single line, straight, angled or curved.",
      demo: {
        caption: "Every block hangs from one line and none crosses it. Tilting the axis changes the composition without changing the rule.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Vertical axis</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M100 12 V118\"/><rect class=\"f-mute\" x=\"100\" y=\"18\" width=\"70\" height=\"8\"/><rect class=\"f-mute\" x=\"44\" y=\"34\" width=\"56\" height=\"6\"/><rect class=\"f-mute\" x=\"100\" y=\"50\" width=\"50\" height=\"6\"/><rect class=\"f-accent\" x=\"30\" y=\"64\" width=\"70\" height=\"10\"/><rect class=\"f-mute\" x=\"100\" y=\"82\" width=\"34\" height=\"6\"/><rect class=\"f-mute\" x=\"60\" y=\"98\" width=\"40\" height=\"5\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Axis tilted</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M60 12 L140 118\"/><rect class=\"f-mute\" x=\"67.5\" y=\"18\" width=\"70\" height=\"8\"/><rect class=\"f-mute\" x=\"22.9\" y=\"34\" width=\"56\" height=\"6\"/><rect class=\"f-mute\" x=\"90.9\" y=\"50\" width=\"50\" height=\"6\"/><rect class=\"f-accent\" x=\"33\" y=\"64\" width=\"70\" height=\"10\"/><rect class=\"f-mute\" x=\"115.1\" y=\"82\" width=\"34\" height=\"6\"/><rect class=\"f-mute\" x=\"86.8\" y=\"98\" width=\"40\" height=\"5\"/></svg></div></div></div>"
      },
      what: "The first of the eight compositional systems Kimberly Elam sets out in Typographic Systems (Princeton Architectural Press, 2007). Content is hung from one axis. The axis need not be vertical or straight; angling or curving it changes the energy of the composition entirely while keeping the same organising logic. It is the simplest way to get structure into a poster or a title page without drawing a grid.",
      why: "One line gives the eye an unambiguous path and gives the designer a single decision to get right. Because the axis is visible in the alignment of the elements even when it is not drawn, the result reads as ordered from across a room.",
      how: [
        "Draw the axis, place everything against it, then remove the axis and check it is still legible.",
        "Vary the distance elements sit from the axis to create hierarchy rather than varying type size.",
        "Try the axis off-centre and angled before settling for vertical and central.",
        "Keep one axis; a second one turns this into a different system."
      ],
      example: "Lucas Czarnecki's Type365 walkthrough of the axial system draws the axis straight, curved or zigzag, down the middle or cutting off a corner, and hangs the content on either side of it.",
      numbers: "",
      pitfall: "A vertical central axis with elements running across it collapses into a bilateral, centred composition. The distinction is that in an axial layout each line stays on one side of the line, while in a bilateral one the text runs across it.",
      source: "Kimberly Elam, Typographic Systems (2007); Lucas Czarnecki, 7 Essential Typographic Layout Systems (Type365, 2017)",
      verify: { status: "verified", note: "Elam's eight systems and their order confirmed from Katherine Humphreys' Haneke Design article, whose text reproduces the book cover listing Axial, Radial, Dilatational, Random, Grid, Modular, Transitional and Bilateral, and gives the publisher as Princeton Architectural Press and the year as 2007. The axial technique and the axial-versus-bilateral distinction read directly from Czarnecki's Type365 walkthrough. I did not read Elam's own pages, so no description of her diagrams is asserted here." },
      belongs: { verdict: "core", why: "A named composition system from a design source, directly usable on posters, covers and title pages." },
      related: [441, 435, 438]
    },
    {
      n: 435,
      title: "Radial system",
      aka: ["Spoke composition"],
      oneLine: "Elements radiate outward from a single central point like spokes from a hub.",
      demo: {
        caption: "Everything leaves one point. It is the length of the spoke, not a change of size, that sets the order.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 172\"><path class=\"s-mute\" d=\"M150 88 L224 88 M150 88 L187 152.09 M150 88 L113 152.09 M150 88 L76 88 M150 88 L113 23.91 M150 88 L187 23.91\"/><g transform=\"rotate(0 150 88)\"><rect class=\"f-accent\" x=\"156\" y=\"85.5\" width=\"64\" height=\"5\"/></g><g transform=\"rotate(60 150 88)\"><rect class=\"f-mute\" x=\"156\" y=\"85.5\" width=\"44\" height=\"5\"/></g><g transform=\"rotate(120 150 88)\"><rect class=\"f-mute\" x=\"156\" y=\"85.5\" width=\"36\" height=\"5\"/></g><g transform=\"rotate(180 150 88)\"><rect class=\"f-mute\" x=\"156\" y=\"85.5\" width=\"54\" height=\"5\"/></g><g transform=\"rotate(240 150 88)\"><rect class=\"f-mute\" x=\"156\" y=\"85.5\" width=\"28\" height=\"5\"/></g><g transform=\"rotate(300 150 88)\"><rect class=\"f-mute\" x=\"156\" y=\"85.5\" width=\"48\" height=\"5\"/></g><circle class=\"f-accent\" cx=\"150\" cy=\"88\" r=\"3.5\"/><text class=\"t\" x=\"8\" y=\"166\">hierarchy set by spoke length, not by type size</text></svg></div>"
      },
      what: "The second of Elam's eight systems. Everything extends from one point of origin, so the composition has an obvious centre and a strong sense of energy moving outward. Reading it requires the viewer to rotate their attention around the centre, which makes it good for short bursts of text and poor for anything long.",
      why: "It produces immediate visual force from very little material. A single word set radially reads as movement, which is why it recurs in event posters and record sleeves.",
      how: [
        "Keep the text short; radial setting is hostile to reading more than a few words per spoke.",
        "Vary spoke length rather than type size to create hierarchy.",
        "Decide whether the centre is filled or empty; both work, but not by accident.",
        "Check legibility of upside-down elements, and cut them if they cannot be read."
      ],
      example: "A Jody Haneke poster described in Katherine Humphreys' article sets the words papercranes and summerbirds so they appear to orbit an invisible subject, with a large ampersand acting as a weight that pins the type to one spot.",
      numbers: "",
      pitfall: "Rotating whole sentences to fit the spokes makes the piece unreadable while looking dynamic in a thumbnail. It fails at real size.",
      source: "Kimberly Elam, Typographic Systems (2007); Katherine Humphreys, Taking the Mystery Out of Arranging Type (Haneke Design)",
      verify: { status: "verified", note: "Radial is listed among Elam's eight in Humphreys' article, which also describes the papercranes poster as a worked radial example in the wording used here. I did not read Elam's own pages." },
      belongs: { verdict: "core", why: "A named composition system with a specific and recognisable use in display work." },
      related: [434, 436, 461]
    },
    {
      n: 436,
      title: "Dilatational system",
      aka: ["Concentric composition"],
      oneLine: "Elements follow concentric circular paths expanding out from a centre.",
      demo: {
        caption: "Same centre, different path. Left, the content runs out along the spokes; right, it travels round the rings.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Radial</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 160\"><path class=\"s-mute\" d=\"M100 80 L162 80 M100 80 L131 133.69 M100 80 L69 133.69 M100 80 L38 80 M100 80 L69 26.31 M100 80 L131 26.31\"/><g transform=\"rotate(0 100 80)\"><rect class=\"f-accent\" x=\"106\" y=\"77.5\" width=\"52\" height=\"5\"/></g><g transform=\"rotate(60 100 80)\"><rect class=\"f-mute\" x=\"106\" y=\"77.5\" width=\"36\" height=\"5\"/></g><g transform=\"rotate(120 100 80)\"><rect class=\"f-mute\" x=\"106\" y=\"77.5\" width=\"44\" height=\"5\"/></g><g transform=\"rotate(180 100 80)\"><rect class=\"f-mute\" x=\"106\" y=\"77.5\" width=\"30\" height=\"5\"/></g><g transform=\"rotate(240 100 80)\"><rect class=\"f-mute\" x=\"106\" y=\"77.5\" width=\"48\" height=\"5\"/></g><g transform=\"rotate(300 100 80)\"><rect class=\"f-mute\" x=\"106\" y=\"77.5\" width=\"34\" height=\"5\"/></g><circle class=\"f-accent\" cx=\"100\" cy=\"80\" r=\"3\"/><text class=\"t\" x=\"8\" y=\"152\">content runs along the radius</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Dilatational</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 160\"><circle class=\"s-accent\" stroke-dasharray=\"6 3\" cx=\"100\" cy=\"80\" r=\"22\"/><circle class=\"s-accent\" stroke-dasharray=\"4 3\" cx=\"100\" cy=\"80\" r=\"40\"/><circle class=\"s-accent\" stroke-dasharray=\"3 3\" cx=\"100\" cy=\"80\" r=\"58\"/><circle class=\"f-mute\" cx=\"100\" cy=\"80\" r=\"2\"/><text class=\"t\" x=\"8\" y=\"152\">content runs around the circumference</text></svg></div></div></div>"
      },
      what: "The third of Elam's eight. Where a radial system runs outward along spokes, a dilatational one runs around rings. The image usually offered is the growth rings of a tree: the same centre, but the content travels the circumference rather than the radius. It is the rarest of the eight in commercial work and the most immediately identifiable when it appears.",
      why: "Circular paths hold the eye inside the composition instead of throwing it outward, which suits pieces meant to be looked at rather than read quickly. It also creates an obvious hierarchy, since the inner rings read first.",
      how: [
        "Set type on curves with generous letterspacing; tight curved text closes up on the inside of the arc.",
        "Keep the ring spacing even, or vary it on a stated progression rather than by feel.",
        "Put the most important word in the innermost ring or the empty centre.",
        "Avoid rings that force the reader to turn the page more than once."
      ],
      example: "A commemorative seal or a record label, where the text runs around concentric circles rather than across the disc.",
      numbers: "",
      pitfall: "Curved type at small sizes with default tracking looks broken on the inside of the curve, and no amount of kerning at the end will fix badly chosen ring radii.",
      source: "Kimberly Elam, Typographic Systems (2007); Lucas Czarnecki, 7 Essential Typographic Layout Systems (Type365, 2017)",
      verify: { status: "verified", note: "Dilatational is listed among Elam's eight in Katherine Humphreys' Haneke Design article, though the diagram there is captioned Dilational while the reproduced book cover spells it Dilatational; the cover spelling is used here. The description of type set along circular paths, and the tree-rings comparison, read directly from Czarnecki's Type365 walkthrough. The upside-down-text problem at the bottom of a full circle is also his point." },
      belongs: { verdict: "adjacent", why: "Downgraded from core. It is a named system with a distinct structure, but the entry's own honest admission is that it is the rarest of Elam's eight in commercial work, and it applies to a narrow band of seals, labels and display pieces. Worth knowing, not worth counting as a fundamental." },
      related: [435, 461, 434]
    },
    {
      n: 437,
      title: "Random system",
      aka: ["Chance composition", "Non-system"],
      oneLine: "Placement with no apparent order, used deliberately to signal energy or disorder.",
      demo: {
        caption: "Both look unplanned. Only the right one has even density, one anchor, and no two edges that happen to line up.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Actually random</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><path class=\"s-accent\" stroke-dasharray=\"3 3\" d=\"M24 12 V64\"/><rect class=\"f-mute\" x=\"24\" y=\"18\" width=\"18\" height=\"9\"/><rect class=\"f-mute\" x=\"24\" y=\"34\" width=\"12\" height=\"8\"/><rect class=\"f-mute\" x=\"24\" y=\"50\" width=\"20\" height=\"7\"/><rect class=\"f-mute\" x=\"46\" y=\"26\" width=\"10\" height=\"12\"/><rect class=\"f-mute\" x=\"40\" y=\"66\" width=\"14\" height=\"8\"/><rect class=\"f-mute\" x=\"156\" y=\"22\" width=\"12\" height=\"14\"/><rect class=\"f-mute\" x=\"148\" y=\"98\" width=\"16\" height=\"9\"/><text class=\"t\" x=\"8\" y=\"120\">three left edges line up by chance</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Controlled to look random</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><rect class=\"f-accent\" x=\"88\" y=\"34\" width=\"26\" height=\"18\"/><rect class=\"f-mute\" x=\"18\" y=\"20\" width=\"20\" height=\"9\"/><rect class=\"f-mute\" x=\"62\" y=\"14\" width=\"14\" height=\"11\"/><rect class=\"f-mute\" x=\"112\" y=\"22\" width=\"17\" height=\"8\"/><rect class=\"f-mute\" x=\"154\" y=\"16\" width=\"12\" height=\"10\"/><rect class=\"f-mute\" x=\"34\" y=\"54\" width=\"15\" height=\"10\"/><rect class=\"f-mute\" x=\"78\" y=\"64\" width=\"19\" height=\"8\"/><rect class=\"f-mute\" x=\"126\" y=\"50\" width=\"13\" height=\"12\"/><rect class=\"f-mute\" x=\"168\" y=\"70\" width=\"11\" height=\"9\"/><rect class=\"f-mute\" x=\"26\" y=\"92\" width=\"15\" height=\"9\"/><rect class=\"f-mute\" x=\"68\" y=\"102\" width=\"13\" height=\"10\"/><rect class=\"f-mute\" x=\"105\" y=\"88\" width=\"19\" height=\"8\"/><rect class=\"f-mute\" x=\"146\" y=\"104\" width=\"16\" height=\"9\"/><text class=\"t\" x=\"8\" y=\"124\">even density, one anchor, no shared edges</text></svg></div></div></div>"
      },
      what: "The fourth of Elam's eight, and the awkward one. Elements are placed without an evident organising rule. In practice a usable random composition is not random at all: the designer controls density, spacing and edge relationships while removing any readable alignment. The appearance of chance is the effect, not the method.",
      why: "It communicates disorder, urgency or plurality faster than any amount of copy. Used against a body of gridded work it reads as a shout.",
      how: [
        "Control the overall density even when individual placements look arbitrary.",
        "Keep at least one element anchored so the composition has somewhere to start.",
        "Avoid accidental alignments; two elements that happen to line up will read as a rule and undermine the effect.",
        "Test it against a strictly gridded version of the same content and be sure the random one earns its place."
      ],
      example: "Scattered zine and flyer layouts where nothing shares an alignment and the density is nevertheless controlled across the sheet.",
      numbers: "",
      pitfall: "Genuine randomness produces a bad composition almost every time. If you have not made a hundred decisions about the placement, it will look like an accident because it is one.",
      source: "Kimberly Elam, Typographic Systems (2007)",
      verify: { status: "verified", note: "Random is listed among Elam's eight on the book cover reproduced in Katherine Humphreys' Haneke Design article. Lucas Czarnecki's Type365 walkthrough covers only seven of the eight and says in a reply to a reader that he dropped random because he does not recommend it, which is an opinion about its use rather than a doubt about its place in the book. I did not read Elam's own pages, so no worked example from her is described and the example given here is a general case rather than a cited one." },
      belongs: { verdict: "adjacent", why: "Downgraded from core. Naming it is useful, but it is the one system a published walkthrough of the set felt able to drop outright, and by the entry's own account a usable random composition is not random, which makes it a caution rather than a method." },
      related: [433, 440, 434]
    },
    {
      n: 438,
      title: "Grid system",
      aka: ["Elam's grid system"],
      oneLine: "Composition organised by intersecting horizontal and vertical divisions.",
      demo: {
        none: "The structure named here is columns and rows, already drawn at 407 and 408; a third picture of the same lattice would teach nothing new."
      },
      what: "The fifth of Elam's eight, and the one every designer already knows: content sits in columns and rows. The framing treats it as one option among eight rather than as the default, which is the useful part. The grid earns its place by giving the reader a repeated, predictable environment, which is exactly why it dominates newspapers and magazines and exactly why it can feel safe.",
      why: "Predictability is the benefit and the cost. A reader who knows where things will be reads faster and trusts the source more. A reader who always knows where things will be stops looking.",
      how: [
        "Choose it when the content repeats and the reader will return; choose something else for a one-off.",
        "Subdivide the grid rather than adding new widths when content does not fit.",
        "Let elements span multiple columns so the grid reads as flexible rather than as a table.",
        "Pair it with one deliberate break per section if the material is long."
      ],
      example: "USA Today, which Katherine Humphreys describes as an eight-column grid subdivided as needed, with items spanning two or more columns, and whose website at the time carried a matching four-column version.",
      numbers: "",
      pitfall: "Specified three times over, once here and once each at 407 and 408, one grid ends up with three incompatible specifications. Pick the page-architecture description and treat this as a note about where the grid sits among the alternatives.",
      source: "Kimberly Elam, Typographic Systems (2007); Katherine Humphreys, Taking the Mystery Out of Arranging Type (Haneke Design)",
      verify: { status: "verified", note: "Grid is listed among Elam's eight on the cover reproduced in Humphreys' article, which also supplies the USA Today example, the eight-column description and the observation that the grid conveys reliability by giving the reader a repeated, predictable environment. That reading is Humphreys', not a quotation from Elam, whose pages I did not read. Duplicates master list entries 407 and 408 within this same section." },
      belongs: { verdict: "cut", why: "The idea is central, but it is already covered twice in this same section by 407, column grid, and 408, modular grid, which describe the same structure with more precision. Keep those two and drop this heading, noting inside 407 that Elam counts the grid as one of eight compositional systems rather than the default." },
      related: [407, 408, 439, 412]
    },
    {
      n: 439,
      title: "Modular system",
      aka: ["Repeating-unit composition"],
      oneLine: "A composition built from repeated standardised units rather than from a page division.",
      demo: {
        caption: "Left, the page is divided and content dropped into the fields. Right, one repeated unit is the composition itself.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Modular grid: the page is divided</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 140\"><rect class=\"s\" x=\"16\" y=\"10\" width=\"168\" height=\"120\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M60 10 V130 M104 10 V130 M148 10 V130 M16 48.67 H184 M16 52.67 H184 M16 91.33 H184 M16 95.33 H184\"/><rect class=\"f-mute\" x=\"16\" y=\"10\" width=\"80\" height=\"38.67\"/><rect class=\"f-accent\" x=\"148\" y=\"10\" width=\"36\" height=\"81.33\"/><rect class=\"f-mute\" x=\"16\" y=\"95.33\" width=\"124\" height=\"34.67\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Modular system: one unit repeated</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 140\"><g transform=\"translate(14 20)\"><rect class=\"s-mute\" width=\"24\" height=\"24\"/><path class=\"f-accent\" d=\"M0 24 H24 V0 Z\"/></g><text class=\"t\" x=\"14\" y=\"58\">one unit</text><g transform=\"translate(86 22)\"><rect class=\"s-mute\" width=\"24\" height=\"24\"/><path class=\"f-mute\" d=\"M0 24 H24 V0 Z\"/></g><g transform=\"translate(110 22) rotate(90 12 12)\"><rect class=\"s-mute\" width=\"24\" height=\"24\"/><path class=\"f-mute\" d=\"M0 24 H24 V0 Z\"/></g><g transform=\"translate(134 22) rotate(180 12 12)\"><rect class=\"s-mute\" width=\"24\" height=\"24\"/><path class=\"f-mute\" d=\"M0 24 H24 V0 Z\"/></g><g transform=\"translate(86 46) rotate(90 12 12)\"><rect class=\"s-mute\" width=\"24\" height=\"24\"/><path class=\"f-mute\" d=\"M0 24 H24 V0 Z\"/></g><g transform=\"translate(110 46) rotate(180 12 12)\"><rect class=\"s-mute\" width=\"24\" height=\"24\"/><path class=\"f-mute\" d=\"M0 24 H24 V0 Z\"/></g><g transform=\"translate(134 46) rotate(270 12 12)\"><rect class=\"s-mute\" width=\"24\" height=\"24\"/><path class=\"f-mute\" d=\"M0 24 H24 V0 Z\"/></g><g transform=\"translate(86 70) rotate(180 12 12)\"><rect class=\"s-mute\" width=\"24\" height=\"24\"/><path class=\"f-mute\" d=\"M0 24 H24 V0 Z\"/></g><g transform=\"translate(110 70) rotate(270 12 12)\"><rect class=\"s-mute\" width=\"24\" height=\"24\"/><path class=\"f-mute\" d=\"M0 24 H24 V0 Z\"/></g><g transform=\"translate(134 70)\"><rect class=\"s-mute\" width=\"24\" height=\"24\"/><path class=\"f-mute\" d=\"M0 24 H24 V0 Z\"/></g><text class=\"t\" x=\"8\" y=\"122\">no page division, only the unit</text></svg></div></div></div>"
      },
      what: "The sixth of Elam's eight. A single unit, often a simple geometric shape, is repeated and combined to build the whole composition. This differs from a modular grid: the modular grid divides a page and then places content into the resulting fields, whereas Elam's modular system builds the image out of the units themselves. Identity systems and pattern-based branding lean on it heavily.",
      why: "A repeated unit gives you unlimited compositions with guaranteed family resemblance, which is what an identity system needs. It also survives being handed to other people, since the unit is the rule.",
      how: [
        "Design the unit so it combines well on at least two axes before designing anything with it.",
        "Set the rules for combination in writing: rotation allowed, overlap allowed, and so on.",
        "Keep the unit simple enough to survive at small sizes.",
        "Delete and skew units to keep long applications from becoming wallpaper."
      ],
      example: "Czarnecki's Type365 walkthrough builds modular compositions by dropping content into repeated squares or circles, each module a small composition in its own right that adds up to a larger one, and suggests it for content that is already cut into pieces such as a poster listing a series of concerts.",
      numbers: "",
      pitfall: "Confusing this with the modular grid leads teams to specify a page division when what they wanted was a repeating brand element, or the reverse.",
      source: "Kimberly Elam, Typographic Systems (2007); Lucas Czarnecki, 7 Essential Typographic Layout Systems (Type365, 2017)",
      verify: { status: "verified", note: "Modular is listed among Elam's eight on the cover reproduced in Katherine Humphreys' Haneke Design article. The description of the system as repeating structures that break up content, and the concert-series example, read directly from Czarnecki's Type365 walkthrough, which also notes that modular and grid layouts are commonly conflated. I did not read Elam's own pages." },
      belongs: { verdict: "core", why: "A distinct compositional method with a clear identity-design use, despite the name clash with the modular grid." },
      related: [408, 438, 456]
    },
    {
      n: 440,
      title: "Transitional system",
      aka: ["Layered composition", "Strata"],
      oneLine: "Informal layered bands that flow across the field like strata in a cliff face.",
      demo: {
        caption: "Right, the bands differ in depth, share a left edge and one slips. Left, equal bands just read as a table.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Bands of equal depth</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><rect class=\"s\" x=\"14\" y=\"10\" width=\"172\" height=\"110\"/><rect class=\"f-mute\" x=\"14\" y=\"10\" width=\"172\" height=\"20\"/><rect class=\"f-mute\" x=\"14\" y=\"32\" width=\"172\" height=\"20\"/><rect class=\"f-mute\" x=\"14\" y=\"54\" width=\"172\" height=\"20\"/><rect class=\"f-mute\" x=\"14\" y=\"76\" width=\"172\" height=\"20\"/><rect class=\"f-mute\" x=\"14\" y=\"98\" width=\"172\" height=\"20\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Depth varied, left edge held</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><rect class=\"s\" x=\"14\" y=\"10\" width=\"172\" height=\"110\"/><rect class=\"f-mute\" x=\"14\" y=\"10\" width=\"182\" height=\"34\"/><rect class=\"f-mute\" x=\"14\" y=\"48\" width=\"150\" height=\"12\"/><path class=\"f-accent\" d=\"M14 64 L186 58 L186 84 L14 90 Z\"/><rect class=\"f-mute\" x=\"14\" y=\"94\" width=\"120\" height=\"9\"/><rect class=\"f-mute\" x=\"14\" y=\"107\" width=\"164\" height=\"13\"/></svg></div></div></div>"
      },
      what: "The seventh of Elam's eight. Content sits in horizontal layers, but the layers are irregular in depth and often shift or tilt, so the composition reads as movement through bands rather than as a stack of rows. The standard description compares it to a cross section of earth with layers of sediment and stone.",
      why: "It gives the horizontal organisation of a grid without the regularity, so a composition can feel structured and loose at the same time. That combination is useful for editorial openers and for covers that need to carry a lot of type without looking like a form.",
      how: [
        "Vary band depth noticeably; bands of similar depth read as a failed grid.",
        "Keep the left edge or the right edge consistent so the layers relate to something.",
        "Let one band break the pattern by tilting or bleeding.",
        "Order the bands by importance, since the reader will work down them."
      ],
      example: "Czarnecki's Type365 walkthrough recommends working from photographs of real sediment layers, then implying slippage with angles and shifted text so the composition reads as movement rather than as a stack.",
      numbers: "",
      pitfall: "Without a shared edge the bands stop reading as layers and start reading as unaligned blocks, which is the random system by accident.",
      source: "Kimberly Elam, Typographic Systems (2007); Lucas Czarnecki, 7 Essential Typographic Layout Systems (Type365, 2017)",
      verify: { status: "verified", note: "Transitional is listed among Elam's eight on the cover reproduced in Katherine Humphreys' Haneke Design article. The sediment-and-stone description and the working method read directly from Czarnecki's Type365 walkthrough, not from Elam's own wording, which I did not read." },
      belongs: { verdict: "core", why: "A named alternative to the grid that keeps horizontal order without regular rows, and a genuinely different composition to reach for." },
      related: [437, 438, 434]
    },
    {
      n: 441,
      title: "Bilateral system",
      aka: ["Centred composition", "Symmetrical setting"],
      oneLine: "Everything centred on a shared vertical axis, producing formal, symmetrical composition.",
      demo: {
        caption: "Same words, re-broken. On the right the line lengths make a deliberate shape; on the left they make a lumpy one.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Rag left to chance</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M100 10 V120\"/><rect class=\"f-accent\" x=\"30\" y=\"20\" width=\"140\" height=\"8\"/><rect class=\"f-mute\" x=\"78\" y=\"36\" width=\"44\" height=\"8\"/><rect class=\"f-mute\" x=\"34\" y=\"52\" width=\"132\" height=\"8\"/><rect class=\"f-mute\" x=\"86\" y=\"68\" width=\"28\" height=\"8\"/><rect class=\"f-mute\" x=\"42\" y=\"84\" width=\"116\" height=\"8\"/><rect class=\"f-mute\" x=\"70\" y=\"100\" width=\"60\" height=\"8\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Lines broken by sense</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M100 10 V120\"/><rect class=\"f-accent\" x=\"26\" y=\"20\" width=\"148\" height=\"8\"/><rect class=\"f-mute\" x=\"42\" y=\"36\" width=\"116\" height=\"8\"/><rect class=\"f-mute\" x=\"36\" y=\"52\" width=\"128\" height=\"8\"/><rect class=\"f-mute\" x=\"56\" y=\"68\" width=\"88\" height=\"8\"/><rect class=\"f-mute\" x=\"70\" y=\"84\" width=\"60\" height=\"8\"/><rect class=\"f-mute\" x=\"83\" y=\"100\" width=\"34\" height=\"8\"/></svg></div></div></div>"
      },
      what: "The eighth of Elam's systems and the oldest habit in typography. Lines are centred on a single axis so the composition is symmetrical about it. It reads as formal, traditional and static, which is exactly right for a wedding invitation, a title page or a memorial, and exactly wrong for most other things.",
      why: "Symmetry signals ceremony. It also removes any question of where things go, which is why it is the default that untrained hands reach for. The cost is that centred setting produces ragged edges on both sides, so nothing has a hard alignment to work against.",
      how: [
        "Reserve it for material where formality is the message.",
        "Break lines by sense, so each centred line is a coherent phrase.",
        "Shape the rag deliberately; a centred block with a lumpy silhouette is the main failure mode.",
        "Never centre long body copy; the ragged left edge destroys the return sweep."
      ],
      example: "One of Jody Haneke's posters, described in Katherine Humphreys' article, arranges its type symmetrically across a centre line and pairs it with an old-fashioned photograph, producing an atmosphere she calls slightly quirky but friendly.",
      numbers: "",
      pitfall: "It is the path of least resistance, so it turns up by default rather than by choice. Lucas Czarnecki, writing up the systems for Type365, says he thinks 99 per cent of bilateral designs are boring, and in undifferentiated use that is fair.",
      source: "Kimberly Elam, Typographic Systems (2007); Katherine Humphreys, Taking the Mystery Out of Arranging Type (Haneke Design); Lucas Czarnecki, 7 Essential Typographic Layout Systems (Type365, 2017)",
      verify: { status: "verified", note: "Bilateral is listed among Elam's eight on the cover reproduced in Humphreys' article, which also supplies the poster example in the wording used here. The 99 per cent judgement is Czarnecki's stated opinion in his Type365 walkthrough, attributed to him rather than to Elam. His fixes for centred setting, shifting the block vertically, splitting it into groups with their own axes and tilting the axis, are also from that article." },
      belongs: { verdict: "core", why: "A named system with a real, narrow use, and knowing its narrowness is what stops it being the default." },
      related: [434, 438, 86]
    },
    {
      n: 442,
      title: "Aspect-ratio families (root-2 / ISO A series)",
      aka: ["Root-2 rectangle", "DIN A series", "Lichtenberg ratio"],
      oneLine: "A page shape of 1 to root 2, which halves into the same shape forever.",
      demo: {
        caption: "Each sheet cut in half, and the half stood upright beside it. Only the root-2 sheet keeps its own outline.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">A 2:3 sheet</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><rect class=\"s\" x=\"16\" y=\"16\" width=\"54\" height=\"81\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M16 56.5 H70\"/><path class=\"s-mute\" d=\"M80 56 H100\"/><path class=\"f-mute\" d=\"M106 56 L99 52.5 L99 59.5 Z\"/><rect class=\"s-accent\" x=\"116\" y=\"16\" width=\"60.75\" height=\"81\"/><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"116\" y=\"16\" width=\"54\" height=\"81\"/><text class=\"t\" x=\"16\" y=\"110\">halved, it becomes 3:4</text><text class=\"t\" x=\"16\" y=\"124\">dashed: the original 2:3</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">A 1 : root 2 sheet</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><rect class=\"s\" x=\"16\" y=\"16\" width=\"54\" height=\"76.37\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M16 54.18 H70\"/><path class=\"s-mute\" d=\"M80 56 H100\"/><path class=\"f-mute\" d=\"M106 56 L99 52.5 L99 59.5 Z\"/><rect class=\"s-accent\" x=\"116\" y=\"16\" width=\"54\" height=\"76.37\"/><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"116\" y=\"16\" width=\"54\" height=\"76.37\"/><text class=\"t\" x=\"16\" y=\"110\">halved, it is still 1 : root 2</text><text class=\"t\" x=\"16\" y=\"124\">dashed: the original, and it fits</text></svg></div></div></div>"
      },
      what: "Cut a rectangle whose sides are in the ratio 1 to the square root of 2 across its long side and you get two rectangles of exactly the same proportion. Georg Christoph Lichtenberg described the advantage in a letter of 25 October 1786 to Johann Beckmann. Walter Porstmann's 1918 article anchored the system to area rather than length, proposing a sheet of one square metre with sides in that ratio, and the German standard that followed became the international A series.",
      why: "It is the only rectangle that scales without redrawing. An A4 layout enlarges to A3 or reduces to A5 with every proportion intact, which is why the whole of European print, office paper and much of the world's stationery runs on it.",
      how: [
        "Design once at one size in the series and scale, rather than reflowing at each size.",
        "Remember that type does not scale with the paper; check the measure at every size you will actually print.",
        "Use the root-2 relationship for image crops and panel divisions, not only for paper.",
        "Do not assume it applies to North American letter sizes, which are a different family."
      ],
      example: "A0 measures 841 by 1189 millimetres, giving an area of 0.999949 square metres, and every subsequent size in the series has half the area of the one before it.",
      numbers: "Ratio 1 to root 2, about 1:1.414. A0: 841 by 1189 mm, area 0.999949 square metres. Each successive A size has half the area of the previous one.",
      pitfall: "Scaling a layout up the series scales the type too, so a poster enlarged from an A5 flyer ends up with 200-point body text and no hierarchy.",
      source: "ISO 216 and its documented history: Lichtenberg's letter of 25 October 1786, Walter Porstmann's article of 1918, and the German standard DIN 476",
      verify: { status: "verified", note: "Lichtenberg's letter date and recipient, Porstmann's 1918 area-based proposal, the A0 dimensions and the 0.999949 square metre figure all read from the Wikipedia article on ISO 216. That article dates the German standard DIN 476 to 1921; other sources give 1922, so no year is asserted here." },
      belongs: { verdict: "core", why: "A published international standard that dictates the shape of most printed work outside North America, and the cleanest example of proportion doing real work." },
      related: [424, 448, 449, 425]
    },
    {
      n: 443,
      title: "The fold and above-the-fold",
      aka: ["Above the fold", "The page fold"],
      oneLine: "The line where a screen or a folded newspaper stops, and the attention cliff just past it.",
      demo: {
        caption: "Eye-tracking eight years apart. Attention above the fold fell from 80 to 57 per cent, and below it is not dead.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 136\"><text class=\"t\" x=\"8\" y=\"16\">share of viewing time, above the fold and below</text><rect class=\"f-accent\" x=\"60\" y=\"36\" width=\"184\" height=\"18\"/><rect class=\"f-mute\" x=\"244\" y=\"36\" width=\"46\" height=\"18\"/><path class=\"s-accent\" d=\"M244 28 V36\"/><text class=\"t\" x=\"232\" y=\"26\">fold</text><text class=\"t\" x=\"8\" y=\"43\">2010</text><text class=\"t\" x=\"8\" y=\"55\">1024x768</text><text class=\"t\" x=\"60\" y=\"68\">80 per cent above</text><text class=\"t\" x=\"248\" y=\"68\">20 below</text><rect class=\"f-accent\" x=\"60\" y=\"92\" width=\"131\" height=\"18\"/><rect class=\"f-mute\" x=\"191\" y=\"92\" width=\"99\" height=\"18\"/><path class=\"s-accent\" d=\"M191 84 V92\"/><text class=\"t\" x=\"179\" y=\"82\">fold</text><text class=\"t\" x=\"8\" y=\"99\">2018</text><text class=\"t\" x=\"8\" y=\"111\">1920x1080</text><text class=\"t\" x=\"60\" y=\"124\">57 per cent above</text><text class=\"t\" x=\"195\" y=\"124\">43 below</text></svg></div>"
      },
      what: "Newspapers are displayed folded, so only the top half of the front page shows, and editors put the strongest story there. The web borrowed the term for whatever is visible before scrolling. The correction that matters is that people do scroll. Nielsen Norman Group's eye-tracking found users spent about 57 per cent of viewing time above the fold in 2018, down from 80 per cent in their 2010 study.",
      why: "Attention does not stop at the fold, but it drops sharply and keeps dropping. That makes the top of the page the most valuable real estate you have, without making the rest worthless. Designing as if nothing below the fold is read produces cramped, shouty pages that fail on their own terms.",
      how: [
        "Put the single most important message and the primary action in the first screenful.",
        "Make it obvious that content continues; a full-height hero with a clean bottom edge suppresses scrolling.",
        "Do not cram the first screen. Weight decays gradually, so the second screenful is genuinely useful space.",
        "Test at the screen sizes your analytics actually show, since the fold moves with the device."
      ],
      example: "Nielsen Norman Group's 2018 analysis of over 130,000 eye fixations from 120 participants on 1920 by 1080 screens found the top 20 per cent of the page took over 42 per cent of viewing time.",
      numbers: "NN/g 2018: 57 per cent of viewing time above the fold; 74 per cent in the first two screenfuls; top 20 per cent of the page over 42 per cent of viewing time; top 40 per cent over 65 per cent. NN/g 2010, on 1024 by 768 screens: 80 per cent above the fold.",
      pitfall: "The folklore version, that users never scroll, comes from old figures and gets used to justify stuffing everything into the first screen. The measured pattern is a steep decline, not a wall.",
      source: "Nielsen Norman Group, Scrolling and Attention (2010 study; update published 15 April 2018)",
      verify: { status: "verified", note: "Every percentage and the sample description read directly from the Nielsen Norman Group article Scrolling and Attention, updated 15 April 2018: 57 per cent above the fold in 2018 against 80 per cent in 2010, 74 per cent in the first two screenfuls, more than 42 per cent of viewing time in the top 20 per cent of the page and more than 65 per cent in the top 40 per cent, from over 130,000 fixations by 120 participants on 1920 by 1080 screens, against 1024 by 768 in 2010. The article gives higher figures again for search-results pages, 47 and more than 75 per cent, which are not quoted here. The newspaper origin and the history of the dispute, including Milissa Tarquini's 2007 Blasting the Myth of the Fold and Amy Schade's 2015 Fold Manifesto, checked against the Wikipedia entry on above the fold." },
      belongs: { verdict: "core", why: "A layout constraint with measured effects on where attention goes, and one of the few places in this section with real numbers behind it." },
      related: [444, 423, 445]
    },
    {
      n: 444,
      title: "Viewport and container thinking",
      aka: ["Container queries", "Component-relative layout"],
      oneLine: "Size components against the space they are actually in, not against the whole window.",
      demo: {
        caption: "One window, two containers. The right-hand card asks how wide its own box is, so the sidebar copy stops being squashed.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Media query: asks the window</span><div class=\"db-stage db-stage--tight\"><span class=\"db-note\">window 1280px</span><div class=\"db-row db-row--top db-row--nowrap\"><div style=\"width:58%\"><span class=\"db-label\">Main</span><div class=\"db-card\"><div class=\"db-row db-row--top db-row--nowrap\"><span class=\"db-swatch\"></span><span class=\"db-lines db-fill\"><i></i><i></i><i></i></span></div></div></div><div style=\"width:32%\"><span class=\"db-label\">Sidebar</span><div class=\"db-card\"><div class=\"db-row db-row--top db-row--nowrap\"><span class=\"db-swatch\"></span><span class=\"db-lines db-fill\"><i></i><i></i><i></i></span></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Container query: asks the box</span><div class=\"db-stage db-stage--tight\"><span class=\"db-note\">window 1280px</span><div class=\"db-row db-row--top db-row--nowrap\"><div style=\"width:58%\"><span class=\"db-label\">Main</span><div class=\"db-card\"><div class=\"db-row db-row--top db-row--nowrap\"><span class=\"db-swatch\"></span><span class=\"db-lines db-fill\"><i></i><i></i><i></i></span></div></div></div><div style=\"width:32%\"><span class=\"db-label\">Sidebar</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-swatch\"></span><span class=\"db-lines db-fill\"><i></i><i></i><i></i></span></div></div></div></div></div></div></div>"
      },
      what: "Media queries ask how big the window is. Container queries ask how big the box around this component is, which is the question that actually matters when the same card appears in a wide main column and a narrow sidebar. CSS formalised this in the Containment Module Level 3, with container-type, the @container rule, and length units cqw, cqh, cqi, cqb, cqmin and cqmax that are relative to the query container rather than the viewport.",
      why: "It is the difference between a component library and a page library. A card that responds to its container can be dropped anywhere and behave correctly, so layouts become compositions of independent parts instead of one hard-coded arrangement per breakpoint.",
      how: [
        "Declare container-type: inline-size on the wrapper, not on the component itself.",
        "Reserve media queries for genuinely page-level decisions such as navigation pattern.",
        "Use cqi rather than vw for type that should respond to its column.",
        "Test each component at its narrowest and widest legal slot, not just at device widths."
      ],
      example: "A card whose heading grows only when its own container passes 700 pixels, written as an @container rule, so it stays small in a sidebar on a wide desktop screen.",
      numbers: "Container query units: cqw and cqh are 1 per cent of the container width and height; cqi and cqb are 1 per cent of its inline and block size; cqmin and cqmax take the smaller and larger of cqi and cqb.",
      pitfall: "Setting container-type: size instead of inline-size applies size containment in both directions, so the container's own size is worked out in isolation and its children no longer count towards it. Without a height from context or an explicit one, it collapses.",
      source: "CSS Containment Module Level 3, as documented by MDN",
      verify: { status: "verified", note: "Container types, the six-unit list with their definitions and the media-query contrast read directly from the MDN page on CSS container queries, which sits under the CSS Containment Module. The 700 pixel example mirrors MDN's own, which pairs an @container (width > 700px) rule with a font size using cqi. MDN did not state browser support dates on that page, so none are given. Corrected the pitfall, which had the mechanism the wrong way round: the MDN container-type page says size containment lets the element's size be computed in isolation, ignoring the child elements, and that an element with size containment collapses when no contextual or explicit size is available. Note this overlaps master list entry 794, Container queries, in the responsive section." },
      belongs: { verdict: "core", why: "The current answer to the layout question this whole section is about, which is what an element should measure itself against." },
      related: [415, 9411, 445, 443]
    },
    {
      n: 445,
      title: "Density modes (comfortable, compact)",
      aka: ["Display density", "Spacing modes"],
      oneLine: "A single setting that tightens or loosens all spacing so one interface can serve different jobs.",
      demo: {
        caption: "One control down Material's density scale: 36, 32, 28, 24 pixels. The dashed 48-pixel touch target does not shrink with it.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 124\"><text class=\"t\" x=\"14\" y=\"22\">dashed: the 48px touch target</text><path class=\"s-mute\" d=\"M12 88 H296\"/><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"24\" y=\"46\" width=\"48\" height=\"48\"/><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"96\" y=\"48\" width=\"48\" height=\"48\"/><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"168\" y=\"50\" width=\"48\" height=\"48\"/><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"240\" y=\"52\" width=\"48\" height=\"48\"/><rect class=\"f-accent\" x=\"20\" y=\"52\" width=\"56\" height=\"36\" rx=\"2\"/><rect class=\"f-mute\" x=\"92\" y=\"56\" width=\"56\" height=\"32\" rx=\"2\"/><rect class=\"f-mute\" x=\"164\" y=\"60\" width=\"56\" height=\"28\" rx=\"2\"/><rect class=\"f-mute\" x=\"236\" y=\"64\" width=\"56\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"20\" y=\"112\">0    36px</text><text class=\"t\" x=\"92\" y=\"112\">-1   32px</text><text class=\"t\" x=\"164\" y=\"112\">-2   28px</text><text class=\"t\" x=\"236\" y=\"112\">-3   24px</text></svg></div>"
      },
      what: "Rather than designing two interfaces, you define one and expose a density control. Material Design's scale has three named levels, default, comfortable and compact, implemented as a numeric scale starting at 0 for default density and moving to -1, -2 and -3 as spacing tightens. Each increment reduces the height of a component by 4dp. Padding and alignment stay as they are; only the dimensions change.",
      why: "A data-heavy table and a single sign-in form want opposite amounts of air, and the same product often contains both. A density setting lets a power user see more rows without forcing that density on someone filling in a date.",
      how: [
        "Treat high density as an opt-in. Material is explicit that higher-density components do not meet accessibility requirements, so 48 by 48dp targets should stay the default experience.",
        "Increase margins and gutters as component density increases, which is Material's own advice, so the layout stays legible.",
        "Do not apply high density to date pickers, alerts, dialogs or anything needing precise pointing.",
        "Stop before the component breaks. Material's own worked case is a chip, which fails at a density of -4."
      ],
      example: "Material's density scale applied to a button: 36 pixels high at default and 24 pixels at -3, calculated as the base height plus a 4 pixel interval times the scale value.",
      numbers: "Material Design density: three levels (default, comfortable, compact) on a scale of 0, -1, -2, -3; each increment reduces component height by 4dp; the documented button example goes from 36px to 24px at -3; the 48 by 48dp touch target with 8dp between targets applies to default-density components, and 44 by 44dp is the recommendation on iOS.",
      pitfall: "Reading the 48dp minimum as a floor that survives any density. Material says the opposite, that dense components fall short of accessibility requirements and users must opt in to them, so the honest fix is an opt-in rather than a claim that nothing was lost.",
      source: "Material Design 2, Applying density; Una Kravets, Using Material Density on the Web (Google Design, 16 January 2020)",
      verify: { status: "verified", note: "Level names, the 0 to -3 scale, the 4dp per increment rule, the padding-stays-dimensions-change rule, the broken chip at -4, the advice to increase margins as density rises, the 48 by 48dp default-density target with 8dp spacing and the 44 by 44dp iOS figure all read directly from the Material Design 2 Applying density page. The 36px to 24px button arithmetic read directly from Una Kravets' article of 16 January 2020, which gives it as 36px + 4px * (-3). Corrected the author's claim that touch targets stay at 48px regardless of density: the same Material page says higher-density components do not meet accessibility requirements and that users must opt in to them." },
      belongs: { verdict: "core", why: "A layout-level decision with a published implementation, and the standard way to serve both casual and expert users from one design." },
      related: [413, 414, 446, 444]
    },
    {
      n: 446,
      title: "Whitespace scale",
      aka: ["Spacing scale", "Spacing tokens"],
      oneLine: "A fixed, named set of spacing values used everywhere instead of arbitrary numbers.",
      demo: {
        caption: "Two spacing scales, drawn as the gaps themselves. Only the right-hand steps are far enough apart to be told apart.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Every step of four</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--nowrap\"><span class=\"db-row db-row--nowrap\" style=\"gap:4px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></span><span class=\"db-note\">4</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-row db-row--nowrap\" style=\"gap:8px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></span><span class=\"db-note\">8</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-row db-row--nowrap\" style=\"gap:12px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></span><span class=\"db-note\">12</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-row db-row--nowrap\" style=\"gap:16px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></span><span class=\"db-note\">16</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-row db-row--nowrap\" style=\"gap:20px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></span><span class=\"db-note\">20</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-row db-row--nowrap\" style=\"gap:24px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></span><span class=\"db-note\">24</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Steps skipped as it grows</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--nowrap\"><span class=\"db-row db-row--nowrap\" style=\"gap:4px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></span><span class=\"db-note\">4</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-row db-row--nowrap\" style=\"gap:8px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></span><span class=\"db-note\">8</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-row db-row--nowrap\" style=\"gap:16px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></span><span class=\"db-note\">16</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-row db-row--nowrap\" style=\"gap:24px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></span><span class=\"db-note\">24</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-row db-row--nowrap\" style=\"gap:32px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></span><span class=\"db-note\">32</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-row db-row--nowrap\" style=\"gap:48px\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span></span><span class=\"db-note\">48</span></div></div></div></div></div>"
      },
      what: "Rather than choosing a gap each time, you define a short list of allowed values and use only those. The list is normally built from a base unit and grows by skipping values, so adjacent steps are visibly different rather than merely arithmetically different. Tailwind CSS documents one spacing unit as 0.25rem, four pixels at default browser settings, and builds its whole scale on that. Material measures padding in increments of 8dp or 4dp.",
      why: "It makes spacing a decision about meaning rather than a decision about numbers: this is a tight group, that is a section break. It also makes handover unambiguous, since a token has a name and 13 pixels does not.",
      how: [
        "Name the steps by role, not by pixel value, so the scale can be retuned without renaming everything.",
        "Skip values as the scale grows; steps of 4, 8, 16, 24, 32, 48 read as distinct where 4, 8, 12, 16, 20 do not.",
        "Use the smallest steps only inside components and the largest only between sections.",
        "Ban off-scale values in review; one exception becomes the new default within a month."
      ],
      example: "Tailwind CSS ships a spacing scale where every utility is a multiple of one 0.25rem unit, so a gap of 4 is 1rem and a gap of 8 is 2rem.",
      numbers: "Tailwind CSS: one spacing unit is 0.25rem, or 4px at default browser settings. Material Design 2: padding measured in increments of 8dp or 4dp.",
      pitfall: "A scale with too many closely spaced steps gives no more discipline than free choice, because there is always a value close to whatever someone wanted.",
      source: "Tailwind CSS spacing documentation; Material Design 2, Spacing methods; Bryn Jackson, The 8-Point Grid (spec.fm)",
      verify: { status: "verified", note: "Tailwind's default --spacing value of 0.25rem read directly from its theme documentation. Material's 8dp and 4dp padding increments, and its 8dp keyline increments, read directly from the Material Design 2 Spacing methods page. The argument that removing seven of every eight spacing options is the point of the system read directly from spec.fm. The skip-value guidance is common design-system practice and is not attributed to a named author." },
      belongs: { verdict: "core", why: "The mechanism that turns whitespace from a taste question into a system, and the backbone of every working design system." },
      related: [413, 414, 419, 119]
    },
    {
      n: 447,
      title: "Template versus bespoke layout",
      aka: ["Programme versus one-off", "System layout versus composed layout"],
      oneLine: "Deciding whether pages are filled from a repeatable structure or composed one at a time.",
      demo: {
        caption: "One template, two records. The right-hand record has no photograph and a title four times the length of the sample.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Filled with the sample record</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\" style=\"height:96px\"><div class=\"db-row db-row--top db-row--nowrap\"><div class=\"db-block\" style=\"width:44px;height:44px\"></div><div><div class=\"db-type\">Autumn menu</div><span class=\"db-note\">by A. Author</span></div></div></div><span class=\"db-note\">the slot the template reserved</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Filled with the first real record</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\" style=\"height:96px\"><div class=\"db-row db-row--top db-row--nowrap\"><div class=\"db-block db-block--outline\" style=\"width:44px;height:44px\"></div><div><div class=\"db-type\">A very long headline of the kind that turns up in the first real record</div><span class=\"db-note\">by A. Author</span></div></div></div><span class=\"db-note\">the slot the template reserved</span></div></div></div></div>"
      },
      what: "Two different jobs wearing the same clothes. A template is a structure someone else will fill without you, so it has to anticipate content that does not exist yet and fail gracefully. A bespoke layout is composed against the actual content in front of you and answers only to that. Karl Gerstner's argument in Designing Programmes is that the higher craft is designing the programme rather than the individual result.",
      why: "Getting this wrong is expensive in both directions. Composing every page by hand does not scale past a small publication. Templating a one-off poster wastes the only advantage a one-off has, which is that you know exactly what goes in it.",
      how: [
        "Ask how many times this layout will be filled, and by whom, before drawing anything.",
        "For templates, design the awkward cases first: no image, very long title, missing author.",
        "For bespoke work, resist building a system nobody will reuse.",
        "Where both are needed, template the repeating body and reserve bespoke treatment for openers and covers."
      ],
      example: "A magazine that templates its department pages tightly and composes its feature openers individually, which is the standard split in editorial design.",
      numbers: "",
      pitfall: "A template tested only with ideal placeholder content collapses on the first real record, usually a title three times longer than the sample.",
      source: "Karl Gerstner, Designing Programmes (1964); Timothy Samara, Making and Breaking the Grid (2002)",
      verify: { status: "verified", note: "Gerstner's publication years confirmed as 1964 for the original Programme Entwerfen (Arthur Niggli), 1968 for the enlarged second edition and 2007 for the revised and enlarged third (Lars Müller). No 1967 edition is on record. The book is on record as a manifesto for system-oriented design in which he defines the programme rather than the single result as the designer's object. That characterisation comes from published accounts of the book, not from its pages, and the template-versus-bespoke framing is this entry's summary rather than a phrase Gerstner uses." },
      belongs: { verdict: "core", why: "The decision that determines whether a grid is worth building at all, and one that gets made by accident far too often." },
      related: [421, 409, 433, 412]
    }
  ]
};
