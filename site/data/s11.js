window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[11] = {
  n: 11,
  slug: "proportion",
  title: "Proportion and geometry",
  blurb: "How ratio, scale and geometry set the sizes and shapes in a design, and which claims survive checking.",
  intro: "Proportion is the business of deciding how big one thing should be next to another, and geometry is the set of rules you can borrow to make that decision repeatable. Most of the systems here came out of architecture and printing, where a wrong ratio was expensive to fix once. Two things need separating from the start. The mathematics is sound: root rectangles really do subdivide into copies of themselves, and there really are only seventeen ways to repeat a pattern across a flat surface. The history bolted onto that mathematics is often invented, and the golden ratio carries more folklore than any other idea in design.",
  sources: [
    "Euclid, Elements, Book VI (division in extreme and mean ratio)",
    "Jay Hambidge, Dynamic Symmetry: The Greek Vase (1920), Dynamic Symmetry in Composition as Used by the Artists (1923) and The Elements of Dynamic Symmetry (1926)",
    "Rhys Carpenter, Dynamic Symmetry: A Criticism, American Journal of Archaeology 25 (1921)",
    "Edwin M. Blake, Dynamic Symmetry - A Criticism, The Art Bulletin 3:3 (1921), pp. 107-127",
    "George Markowsky, Misconceptions about the Golden Ratio, College Mathematics Journal 23:1 (1992), pp. 2-19",
    "Keith Devlin, The Myth That Will Not Go Away, Mathematical Association of America (2007)",
    "Le Corbusier, Le Modulor (1948) and Modulor 2 (1955)",
    "Rudolf Wittkower, Architectural Principles in the Age of Humanism (1949)",
    "Andrea Palladio, I Quattro Libri dell'Architettura (1570), Book I chapter XXI",
    "Robert Bringhurst, The Elements of Typographic Style",
    "Tim Brown, More Meaningful Typography, A List Apart, 3 May 2011",
    "Benoit Mandelbrot, How Long Is the Coast of Britain?, Science 156 (1967), and The Fractal Geometry of Nature (1982)",
    "Katherine Jones-Smith and Harsh Mathur, Fractal Analysis: Revisiting Pollock's Drip Paintings, Nature 444 (2006), E9-E10",
    "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
    "Henry Dreyfuss, Designing for People (1955) and The Measure of Man: Human Factors in Design (1960)",
    "Kimberly Elam, Typographic Systems (Princeton Architectural Press, 2007)",
    "Alain Goriely, The illusion of illusions: There are no optical corrections in the Parthenon, arXiv preprint 2510.16831 (2025, revised 2026)",
    "Rachel Fletcher, Dynamic Root Rectangles Part Two, Nexus Network Journal 10:1 (2008), pp. 149-178",
    "ISO 216 (A, B and C paper series)",
    "W3C, WCAG 2.2 Success Criterion 2.5.8 Target Size (Minimum), and WCAG 2.1 SC 2.5.5 Target Size (Enhanced)"
  ],
  entries: [
    {
      n: 448,
      title: "Golden section (phi)",
      aka: ["Golden ratio", "Divine proportion", "Extreme and mean ratio"],
      oneLine: "A line cut so the whole is to the larger part as that part is to the smaller, about 1.618.",
      demo: {
        caption: "Left, the exact property: cut off the square and what is left is the same rectangle. Right, the Parthenon measures 2.25.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Exact: cut off the square</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 136\"><rect class=\"s\" x=\"6\" y=\"24\" width=\"162\" height=\"100\"/><rect class=\"s-accent\" x=\"106\" y=\"24\" width=\"62\" height=\"100\"/><text class=\"t\" x=\"6\" y=\"16\">1.618 : 1</text><text class=\"t\" x=\"30\" y=\"78\">square</text><text class=\"t\" x=\"110\" y=\"78\">1 : 1.618</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Claimed: the Parthenon</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 136\"><rect class=\"s\" x=\"6\" y=\"44\" width=\"180\" height=\"80\"/><rect class=\"s-accent\" stroke-dasharray=\"5 3\" x=\"6\" y=\"44\" width=\"129\" height=\"80\"/><text class=\"t\" x=\"6\" y=\"16\">measured 2.25 : 1</text><text class=\"t\" x=\"6\" y=\"32\">golden 1.618 : 1</text></svg></div></div></div>"
      },
      what: "Euclid called it division in extreme and mean ratio. Cut a line so that whole is to larger as larger is to smaller and you get 1.6180339887..., written as phi. A golden rectangle has sides in that ratio, and slicing a square off one end leaves a smaller golden rectangle. That much is exact. The design history attached to it mostly is not. The name goldener Schnitt appears in print for the first time, so far as anyone has traced it, in Martin Ohm's Die reine Elementar-Mathematik of 1835, and the Greeks did not call it golden anything.",
      why: "As a ratio it does one genuinely useful job. It produces a scale where each step is the sum of the two before it, so nothing repeats and the jumps feel even. It also hands you a defensible starting number when the alternative is picking sizes at random.",
      how: [
        "Use 1.618 as the ratio in a type or spacing scale, then round to whole pixels and correct by eye.",
        "Compare it against 1.5 and 1.333 on the real layout first; the steps of 1.618 get very wide very fast on small screens.",
        "Treat any phi overlay on an existing logo or building as a claim to check rather than a fact to repeat."
      ],
      example: "The ISO A-series page is the most-used page proportion on the planet, and it is a root-two rectangle at 1.414 rather than a golden one. A4 measures 210 by 297 mm.",
      numbers: "phi = 1.6180339887...; goldener Schnitt traced to Martin Ohm, Die reine Elementar-Mathematik (1835). Markowsky computes the Parthenon width-to-height ratio as about 2.25 = 9/4, against the acceptance range of 1.58 to 1.66 he sets for any golden-ratio claim.",
      pitfall: "Fitting a phi spiral over a logo or photograph after the work is done. Given free choice of where the spiral starts and how big it is, you can fit one to almost anything, so the fit proves nothing.",
      source: "Euclid, Elements Book VI; George Markowsky, Misconceptions about the Golden Ratio, College Mathematics Journal 23:1 (1992), pp. 2-19",
      verify: {
        status: "disputed",
        note: "Read the full text of Markowsky, College Mathematics Journal 23:1 (1992), pp. 2-19. Three things confirmed against the paper. He does not measure the Parthenon himself: he takes Trachtenberg and Hyman's published dimensions and computes width over height as about 2.25 = 9/4, outside the 1.58 to 1.66 acceptance range he sets for any golden-ratio claim. He traces goldener Schnitt to Ohm (1835) rather than antiquity, quoting D. H. Fowler for that dating and David Eugene Smith for the older history of the name. And he quotes Leonard Zusne's account of Fechner's 1860s test, which offered only ten rectangles ranging from 1.00 to 0.40, with the modal choice at 0.62 and 76 per cent of all choices spread over the three ratios 0.57, 0.62 and 0.67. Markowsky's own words: the various claims made about the esthetic importance of the golden ratio seem to be without foundation. Keith Devlin's The Myth That Will Not Go Away (Devlin's Angle, MAA, May 2007) argues the same and retracts his own earlier nautilus-shell claim in as many words: I claimed there that you can find the golden ratio in the growth of the Nautilus shell. Not so."
      },
      belongs: {
        verdict: "core",
        why: "The arithmetic is real and 1.618 is a workable scale ratio. A designer mainly needs this entry to recognise and stop repeating the folklore that surrounds it."
      },
      related: [449, 451, 453, 455]
    },
    {
      n: 449,
      title: "Root rectangles (root-2, root-3, root-5)",
      aka: ["Dynamic rectangles"],
      oneLine: "Rectangles whose long side is the square root of a whole number times the short side.",
      demo: {
        caption: "Left, the construction: swing the square's diagonal down. Right, halve a root-two sheet and every part keeps the same shape.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Drawn from a square</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 136\"><rect class=\"s-mute\" x=\"10\" y=\"24\" width=\"90\" height=\"90\"/><path class=\"s-mute\" d=\"M10 114 L100 24\"/><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M100 24 A127.28 127.28 0 0 1 137.28 114\"/><rect class=\"s-accent\" x=\"10\" y=\"24\" width=\"127.28\" height=\"90\"/><text class=\"t\" x=\"32\" y=\"108\">square</text><text class=\"t\" x=\"104\" y=\"104\">1.414</text><text class=\"t\" x=\"10\" y=\"130\">1 : 1.414</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Halved, and halved again</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 136\"><rect class=\"s\" x=\"8\" y=\"20\" width=\"156\" height=\"110\"/><path class=\"s-mute\" d=\"M86 20 V130 M86 75 H164 M125 75 V130 M125 102.5 H164 M144.5 102.5 V130\"/><text class=\"t\" x=\"8\" y=\"14\">A0</text><text class=\"t\" x=\"41\" y=\"79\">A1</text><text class=\"t\" x=\"119\" y=\"51\">A2</text><text class=\"t\" x=\"99\" y=\"106\">A3</text><text class=\"t\" x=\"138\" y=\"92\">A4</text></svg></div></div></div>"
      },
      what: "A root-two rectangle has sides of 1 and 1.4142. Its defining trick is that cutting it in half across the long side gives two rectangles of exactly the same shape. Root-three splits into three copies of itself, root-five into five, and the pattern continues. Jay Hambidge called the irrational members of this family dynamic rectangles, because the two side lengths cannot be written as a ratio of whole numbers to each other, unlike a 2:3 or 3:4 rectangle. Root-four is the exception in the series, since 1:2 is a plain whole-number ratio.",
      why: "The self-dividing property is the part you can use. A root-two format survives being halved or doubled without changing shape, so one layout logic serves a poster and a flyer. It gives you a proportion that stays itself after it has been cut up.",
      how: [
        "Choose root-two whenever the artwork has to survive halving or doubling: paper stock, poster to leaflet, print to screen.",
        "Draw one without a calculator by swinging the diagonal of a square down onto the extended baseline.",
        "Remember root-four is simply 1:2, so the double square already belongs to the family.",
        "Subdivide on the same ratio you framed with, or the choice of frame buys you nothing."
      ],
      example: "A0 paper is 841 by 1189 mm, which is one square metre once the sides have been rounded to whole millimetres. Fold it in half and you get A1 at the same proportion, then A2, A3 and A4 at 210 by 297 mm.",
      numbers: "root-2 = 1.4142, root-3 = 1.7320, root-4 = 2.0, root-5 = 2.2360. ISO 216: A0 = 841 x 1189 mm, an area of 0.999949 m2 because A0 is specified as 1 m2 and then rounded to the nearest millimetre; A4 = 210 x 297 mm.",
      pitfall: "Drawing the root rectangle, then filling it with arbitrary boxes. Without matching subdivisions the frame is just a rectangle with a nice story attached.",
      source: "Jay Hambidge, The Elements of Dynamic Symmetry (1926); ISO 216; Rachel Fletcher, Dynamic Root Rectangles Part Two, Nexus Network Journal 10:1 (2008)",
      verify: {
        status: "verified",
        note: "Read Fletcher's Nexus Network Journal paper (vol 10 no 1, 2008, pp. 149-178) in full. It states the reciprocal property explicitly: a root-two rectangle divides into two reciprocals each half the total area, root-three into three each a third, root-four into four, root-five into five. Ratios and A-series millimetre sizes checked against ISO 216, which also supplies the correction made here: A0 is 0.999949 m2, not exactly 1 m2, because the standard rounds A0 to the nearest millimetre and derives the rest by halving and rounding down."
      },
      belongs: {
        verdict: "core",
        why: "Root-two is the proportion of nearly every sheet of paper outside North America, and the halving property is a working constraint rather than a theory."
      },
      related: [442, 448, 450]
    },
    {
      n: 450,
      title: "Dynamic symmetry",
      aka: ["Hambidge's system", "Application of areas"],
      oneLine: "Hambidge's composition method: build a picture from the diagonals and reciprocals of a root rectangle.",
      demo: {
        caption: "Left, one armature: diagonal, perpendicular, reciprocal. Right, keep adding lines and every point in the frame lands on one.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Diagonal and reciprocal</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 136\"><rect class=\"s\" x=\"10\" y=\"16\" width=\"180\" height=\"106\"/><path class=\"s-mute\" d=\"M10 122 L190 16 M10 16 L72.4 122 M72.4 16 V122\"/><rect class=\"f-accent\" x=\"48\" y=\"83\" width=\"16\" height=\"16\"/><text class=\"t\" x=\"10\" y=\"134\">the reciprocal rectangle</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Enough lines fit anything</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 136\"><rect class=\"s\" x=\"10\" y=\"16\" width=\"180\" height=\"106\"/><path class=\"s-mute\" d=\"M10 122 L190 16 M10 16 L190 122 M100 16 V122 M10 69 H190 M10 16 L100 122 M100 16 L190 122 M10 122 L100 16 M100 122 L190 16 M55 16 V122 M145 16 V122 M10 16 L72.4 122 M190 16 L127.6 122\"/><rect class=\"f-accent\" x=\"47\" y=\"87.5\" width=\"16\" height=\"16\"/><text class=\"t\" x=\"10\" y=\"134\">any point sits on a line</text></svg></div></div></div>"
      },
      what: "Jay Hambidge argued that Greek vases and temples were laid out using root rectangles and their reciprocals, and that this produced what he called dynamic symmetry, as opposed to the static symmetry of squares and regular polygons. In practice you draw the diagonal of your frame, drop a perpendicular from a corner to it, and the intersections give you a grid of lines that all share the frame's proportion. Every placement then sits on a line that is related to the edge of the picture.",
      why: "It is a way of getting placement decisions out of your hands and onto the geometry, which is useful when you are stuck. Because every line derives from the frame, elements end up related to each other whether or not anyone can name the reason.",
      how: [
        "Draw the frame diagonal and the reciprocal diagonal first, then place the main subject where they cross a strong horizontal.",
        "Use the resulting armature to align edges and eye-lines, not to dictate every element.",
        "Set the frame proportion before you shoot or draw, because the whole system depends on it.",
        "Check the result by covering the armature; if the composition only works with the lines visible, it does not work."
      ],
      example: "The American painter George Bellows worked from Hambidge's system from 1918 until his death in 1925, starting with his war series. The relationship ran both ways: Hambidge's Dynamic Symmetry in Composition as Used by the Artists (1923) carries a Bellows sketch among its worked examples.",
      numbers: "",
      pitfall: "The system is flexible enough to justify a decision you had already made. Hambidge's critics showed that with enough diagonals you can produce a line through any point you like.",
      source: "Jay Hambidge, Dynamic Symmetry: The Greek Vase (Yale, 1920) and The Elements of Dynamic Symmetry (1926)",
      verify: {
        status: "disputed",
        note: "Hambidge (1867-1924) and his two book titles and dates confirmed, and the mechanics of reciprocals confirmed against Rachel Fletcher's Nexus Network Journal 10:1 (2008) account. The archaeological claim was attacked within a year of publication: Rhys Carpenter, Dynamic Symmetry: A Criticism, American Journal of Archaeology 25 (1921), and Edwin M. Blake, Dynamic Symmetry - A Criticism, The Art Bulletin 3:3 (1921), pp. 107-127. Both showed that in its more complicated constructions the system could describe any shape at all, which makes the fit to Greek pots untestable. The Bellows date was corrected in this pass: gallery and museum records place his adherence from 1918, with the war series, not the early 1920s as first written."
      },
      belongs: {
        verdict: "adjacent",
        why: "Downgraded from core on review. The usable geometry is already carried by root rectangles at 449, the archaeological argument it was built to support has not survived, and what remains is one painter's armature technique rather than a rule most designers need. Worth keeping because photographers and illustrators still teach it, but it is not foundational."
      },
      related: [449, 448, 139]
    },
    {
      n: 451,
      title: "Fibonacci sequence",
      aka: ["Fibonacci numbers"],
      oneLine: "Each number is the sum of the two before it: 1, 1, 2, 3, 5, 8, 13, 21, 34.",
      demo: {
        caption: "Each square's side is the sum of the two before it: one, one, two, three, five, eight.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 132\"><rect class=\"s\" x=\"8\" y=\"18\" width=\"104\" height=\"104\"/><rect class=\"s\" x=\"112\" y=\"18\" width=\"65\" height=\"65\"/><rect class=\"s\" x=\"138\" y=\"83\" width=\"39\" height=\"39\"/><rect class=\"s\" x=\"112\" y=\"96\" width=\"26\" height=\"26\"/><rect class=\"s\" x=\"112\" y=\"83\" width=\"13\" height=\"13\"/><rect class=\"s\" x=\"125\" y=\"83\" width=\"13\" height=\"13\"/><text class=\"t\" x=\"188\" y=\"62\">8 + 5 = 13 across</text><text class=\"t\" x=\"188\" y=\"80\">5 + 3 = 8 down</text><text class=\"t\" x=\"57\" y=\"74\">8</text><text class=\"t\" x=\"141\" y=\"54\">5</text><text class=\"t\" x=\"154\" y=\"106\">3</text><text class=\"t\" x=\"122\" y=\"113\">2</text><text class=\"t\" x=\"116\" y=\"93\">1</text><text class=\"t\" x=\"129\" y=\"93\">1</text></svg></div>"
      },
      what: "Start with 1 and 1 and keep adding the last two terms. The ratio between neighbouring terms wanders towards phi, getting close enough for practical purposes by about 21:34. Leonardo of Pisa introduced the sequence to Europe in Liber Abaci (1202) through an artificial rabbit-breeding problem, though it appears centuries earlier in Indian work on Sanskrit verse metres. The name is nineteenth-century, coined by the French number theorist Edouard Lucas.",
      why: "For a designer the appeal is arithmetic convenience. The sequence gives you near-golden proportions in whole numbers, so a spacing scale of 8, 13, 21, 34, 55 lands on integers and never needs rounding. It also grows fast enough to keep sizes clearly distinct.",
      how: [
        "Use 8, 13, 21, 34, 55 as a spacing or size ladder when you want phi-like steps without fractional pixels.",
        "Drop the small end (1, 1, 2, 3) in interface work, because those steps are too close to read apart.",
        "Do not claim a Fibonacci layout is natural or biological; use it because the numbers behave, and say so."
      ],
      example: "The sequence turns up in a spacing token set as 8, 16, 24, 40, 64 once you scale it, which is why Fibonacci ladders and 8-point grids often land on similar numbers.",
      numbers: "1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89. Consecutive ratios converge on phi (1.618...), and 34/21 = 1.619 is already within a thousandth of it. Liber Abaci published 1202; the sequence appears in Indian prosody centuries earlier, in Pingala, Virahanka and Hemachandra, whose dates are themselves uncertain.",
      pitfall: "Treating the sequence as a design principle in its own right. It is a source of numbers, and beyond about 34 the steps are so far apart that the scale falls over.",
      source: "Leonardo of Pisa, Liber Abaci (1202); named by Edouard Lucas in the nineteenth century",
      verify: {
        status: "verified",
        note: "Checked the sequence history: the 1202 Liber Abaci rabbit problem, the earlier Indian appearances in Pingala, Virahanka and Hemachandra, Lucas coining the modern name in the nineteenth century, and Kepler's observation that consecutive ratios converge on the golden ratio. The Indian dates are given loosely here on purpose, because the conventional figures for Pingala in particular are disputed. No design claim beyond the arithmetic is asserted, and the example was checked by hand: 8, 16, 24, 40, 64 is 8 times 1, 2, 3, 5, 8."
      },
      belongs: {
        verdict: "adjacent",
        why: "This is number theory, not design. Its specific design use is real but narrow: generating a near-golden scale in whole numbers so spacing and type sizes stay on integers."
      },
      related: [448, 454, 455]
    },
    {
      n: 452,
      title: "The Modulor",
      aka: ["Le Corbusier's Modulor", "Red and blue series"],
      oneLine: "Le Corbusier's proportional system, a golden-ratio ladder pegged to the dimensions of a standing human figure.",
      demo: {
        caption: "Every dimension steps from one body measurement: navel 1.13 m, times phi for height, times two for the raised arm.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 170\"><path class=\"s-mute\" d=\"M20 150 H280\"/><path class=\"s-mute\" d=\"M64 14.4 H178 M64 40.2 H178 M64 82.2 H178\"/><path class=\"s-accent\" stroke-dasharray=\"4 3\" d=\"M20 45 H78\"/><circle class=\"s\" cx=\"90\" cy=\"50\" r=\"9\"/><path class=\"s\" d=\"M90 59 V100 M90 100 L76 150 M90 100 L104 150 M90 66 L112 56 L107 15 M90 66 L74 96\"/><circle class=\"f-accent\" cx=\"90\" cy=\"82.2\" r=\"3\"/><text class=\"t\" x=\"186\" y=\"17\">2.26 m raised arm</text><text class=\"t\" x=\"186\" y=\"43\">1.83 m height</text><text class=\"t\" x=\"186\" y=\"85\">1.13 m navel</text><text class=\"t\" x=\"20\" y=\"58\">1.75 m</text><text class=\"t\" x=\"20\" y=\"70\">before 1946</text><text class=\"t\" x=\"186\" y=\"112\">1.13 x 1.618 = 1.83</text><text class=\"t\" x=\"186\" y=\"126\">1.13 x 2 = 2.26</text></svg></div>"
      },
      what: "Le Corbusier built two interlocking sequences of measurements from a standard male body. The red series runs from navel height, the blue series from the height of the raised arm, and both step by the golden ratio. The idea was to give architects a set of dimensions that were harmonically related to each other and usable at human size, so a door handle, a window and a ceiling could all come from one ladder. He fixed the figure at 1.75 m at first, then in 1946 raised it to 1.83 m.",
      why: "It is the clearest worked example of tying an abstract ratio to something a body can touch, which is the argument for proportional systems in general. It is also the clearest warning about them, because every number in the system depends on a base measurement that was chosen for reasons that had nothing to do with proportion.",
      how: [
        "Take the method, not the numbers: pick one human dimension your design actually depends on, then build your scale from it.",
        "Write down why you chose the base measurement, so the next person can argue with it.",
        "Check the small end of any body-derived scale against real ergonomic minimums before you ship it."
      ],
      example: "Le Corbusier used the Modulor to set out the Unite d'Habitation in Marseille, where the apartment dimensions and the concrete brise-soleil come off the same series of measurements.",
      numbers: "Base figure raised from 1.75 m to 1.83 m in 1946; raised-arm height fixed at 2.26 m; navel height 1.13 m in the revised version. Le Modulor published 1948, Modulor 2 in 1955.",
      pitfall: "The base figure was changed because Le Corbusier decided that policemen in English detective novels are six feet tall. A system can be internally perfect and still rest on an arbitrary starting point, and the female body was considered only late and then rejected as a source.",
      source: "Le Corbusier, Le Modulor (1948) and Modulor 2 (1955)",
      verify: {
        status: "verified",
        note: "Figures checked this session against the reference account of the Modulor: 1.75 m original, revised to 1.83 m (six feet) in 1946, raised arm 2.26 m, navel 1.13 m, red series stepping from navel height and blue series from twice it, both by the golden ratio. Le Modulor 1948 in French, The Modulor 1954 in English; Modulor 2 1955 in French, 1958 in English. The six-foot policeman line is quoted as Le Corbusier's own stated reason, and the observation that the female body was belatedly considered and rejected as a source of proportional harmony is the architectural historian Robin Evans's."
      },
      belongs: {
        verdict: "core",
        why: "It is the canonical attempt to reconcile a mathematical scale with human dimensions, and both what it achieved and what went wrong with it are directly instructive for anyone building a design system."
      },
      related: [448, 455, 463]
    },
    {
      n: 453,
      title: "Harmonic musical ratios (2:3, 3:4, 4:5)",
      aka: ["Pythagorean proportion", "Musical proportion in architecture"],
      oneLine: "Small whole-number ratios borrowed from musical intervals and used to set the proportions of rooms and pages.",
      demo: {
        caption: "The same small whole numbers: as lengths of a stopped string on the left, as room and page shapes on the right.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Lengths of a plucked string</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 262 116\"><path class=\"s-mute\" d=\"M76 24 H256 M76 48 H256 M76 72 H256 M76 96 H256\"/><path class=\"s-accent\" d=\"M76 24 H166 M166 18 V30\"/><path class=\"s-accent\" d=\"M76 48 H196 M196 42 V54\"/><path class=\"s-accent\" d=\"M76 72 H211 M211 66 V78\"/><path class=\"s-accent\" d=\"M76 96 H220 M220 90 V102\"/><text class=\"t\" x=\"6\" y=\"27\">1:2 octave</text><text class=\"t\" x=\"6\" y=\"51\">2:3 fifth</text><text class=\"t\" x=\"6\" y=\"75\">3:4 fourth</text><text class=\"t\" x=\"6\" y=\"99\">4:5 third</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">The same ratios as shapes</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 262 116\"><rect class=\"s\" x=\"8\" y=\"16\" width=\"40\" height=\"80\"/><rect class=\"s\" x=\"60\" y=\"16\" width=\"53\" height=\"80\"/><rect class=\"s\" x=\"125\" y=\"16\" width=\"60\" height=\"80\"/><rect class=\"s\" x=\"197\" y=\"16\" width=\"64\" height=\"80\"/><text class=\"t\" x=\"8\" y=\"110\">1:2</text><text class=\"t\" x=\"60\" y=\"110\">2:3</text><text class=\"t\" x=\"125\" y=\"110\">3:4</text><text class=\"t\" x=\"197\" y=\"110\">4:5</text></svg></div></div></div>"
      },
      what: "Pluck a string, then stop it at two thirds of its length, and you hear a perfect fifth. Renaissance architects took the intervals that sound consonant, 2:3, 3:4 and 4:5 among them, and used the same numbers for the width, length and height of rooms. Palladio set out seven room shapes he considered best in Book I of the Quattro Libri: the circle, the square, the square's diagonal, 4:3, 3:2, 5:3 and 2:1. Rudolf Wittkower's 1949 study made the case that this was a coherent programme rather than decoration.",
      why: "Small whole-number ratios subdivide and nest without leaving awkward remainders. A 3:2 panel splits into three 1:2 strips or into two squares, and that arithmetic convenience is the practical reason these numbers keep coming back long after the cosmology behind them was abandoned.",
      how: [
        "Pick two or three whole-number ratios for a project and use only those, for cards, images and page divisions alike.",
        "Prefer ratios that subdivide into each other: 2:3 and 3:4 nest neatly, 5:7 does not.",
        "State the ratio in the design tokens so a developer can hold the shape when the content changes."
      ],
      example: "Palladio's Villa Emo and Villa Foscari room plans are the standard worked examples, and Wittkower's schematised diagram of the Palladian villa is reproduced in most architecture courses.",
      numbers: "Musical interval ratios: octave 1:2, perfect fifth 2:3, perfect fourth 3:4, major third 4:5. Palladio's seven preferred room shapes, as length to width: circle, square, root-2:1, 4:3, 3:2, 5:3, 2:1.",
      pitfall: "The claim that the eye responds to ratio the way the ear responds to frequency has never been demonstrated. Use these numbers because they subdivide cleanly, not because a 3:2 rectangle is somehow a perfect fifth.",
      source: "Andrea Palladio, I Quattro Libri dell'Architettura (1570), Book I chapter XXI; Rudolf Wittkower, Architectural Principles in the Age of Humanism (1949)",
      verify: {
        status: "disputed",
        note: "Palladio's seven room shapes confirmed against Stephen Wassell, The Mathematics of Palladio's Villas, Nexus Network Journal 1 (1999), pp. 121-128, which is free to read and quotes Book I chapter XXI directly: circular, square, length equal to the diagonal of the square of the breadth, a square and a third, a square and a half, a square and two-thirds, two squares. That gives root-2:1, 4:3, 3:2, 5:3 and 2:1. The list in this entry was reordered to match, since it had previously been printed inverted. David Hemsoll's Palladio and the Secrets of Architectural Proportion, Journal of the Society of Architectural Historians 84:1 (March 2025), pp. 4-38, was checked as a citation only: the full text is behind a paywall and the abstract does not list the shapes. Wittkower's 1949 book and its argument for a harmonic programme confirmed. Marked disputed because the underlying doctrine, that visual proportion works like musical consonance, is a historical belief with no confirmed perceptual basis, and scholars continue to argue over how far Palladio built to his stated ratios."
      },
      belongs: {
        verdict: "core",
        why: "Whole-number ratios are the everyday currency of layout, from 16:9 video to 3:2 photographs, and knowing which ones nest saves real time."
      },
      related: [448, 454, 424]
    },
    {
      n: 454,
      title: "Arithmetic versus geometric progression",
      aka: ["Linear versus ratio scales", "Additive versus multiplicative steps"],
      oneLine: "Arithmetic scales add a fixed amount at each step; geometric scales multiply by a fixed ratio.",
      demo: {
        caption: "Same start, same finish, four steps. Adding ten makes the top pair look alike; multiplying keeps every step even.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Arithmetic: add 10</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--baseline db-row--tight\"><span class=\"db-specimen\" style=\"font-size:14px\">Aa</span><span class=\"db-specimen\" style=\"font-size:24px\">Aa</span><span class=\"db-specimen\" style=\"font-size:34px\">Aa</span><span class=\"db-specimen\" style=\"font-size:44px\">Aa</span><span class=\"db-specimen\" style=\"font-size:54px\">Aa</span></div><span class=\"db-note\">14 24 34 44 54</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Geometric: multiply by 1.4</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--baseline db-row--tight\"><span class=\"db-specimen\" style=\"font-size:14px\">Aa</span><span class=\"db-specimen\" style=\"font-size:20px\">Aa</span><span class=\"db-specimen\" style=\"font-size:27px\">Aa</span><span class=\"db-specimen\" style=\"font-size:38px\">Aa</span><span class=\"db-specimen\" style=\"font-size:54px\">Aa</span></div><span class=\"db-note\">14 20 27 38 54</span></div></div></div></div>"
      },
      what: "An arithmetic progression grows by adding the same number: 4, 8, 12, 16, 20. A geometric progression grows by multiplying by the same number: 16, 20, 25, 31, 39 at a ratio of 1.25. The difference matters because the eye judges size by comparison rather than by absolute amount. A four-pixel jump is obvious at 8px and invisible at 80px, so an arithmetic scale that reads well at the small end collapses at the large end.",
      why: "Spacing wants arithmetic steps, because it has to align to a grid and add up to whole numbers. Type wants geometric steps, because heading sizes need to stay distinguishable from each other as they grow. Getting that split wrong is a common reason a size ladder looks arbitrary.",
      how: [
        "Use arithmetic steps for spacing and layout: 4, 8, 12, 16, 24, 32, so everything divides into the grid.",
        "Use geometric steps for type: a ratio of about 1.125 to 1.333 for interfaces, higher for editorial.",
        "If a large heading looks barely bigger than the one below it, your scale is arithmetic where it should be geometric.",
        "Round geometric results to whole pixels and keep the rounded values as the tokens."
      ],
      example: "The Material Design 2 spacing guidance states that all components align to an 8dp square baseline grid for mobile, tablet and desktop, which is arithmetic. The traditional printer's type scale reproduced by Bringhurst is roughly geometric, its steps widening as the sizes grow.",
      numbers: "Material Design 2 baseline grid: 8dp, with icons, type and some elements within components aligning to a 4dp grid. Traditional typographic scale: 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 21, 24, 36, 48, 60, 72 pt. A geometric scale at ratio 1.25 from a base of 16: 16, 20, 25, 31.25, 39.",
      pitfall: "Mixing the two inside one scale without noticing, which gives you a ladder with two steps that look identical and one that jumps. Print the whole scale at real size before you build against it.",
      source: "Standard arithmetic; applied to type by Robert Bringhurst, The Elements of Typographic Style, and to spacing by Material Design",
      verify: {
        status: "verified",
        note: "The Material Design spacing page was read directly and says, word for word, that all components align to an 8dp square baseline grid for mobile, tablet and desktop, and separately that icons, type and some elements within components can align to a 4dp grid. Named as Material Design 2 here because that is the version the quoted page belongs to, and it is marked on the site as no longer maintained. The traditional typographic scale numbers are as reproduced from Bringhurst by Spencer Mortensen's typographic scale article. The progression definitions and the worked 1.25 ladder are plain arithmetic and were recalculated."
      },
      belongs: {
        verdict: "adjacent",
        why: "The maths is borrowed, but the design use is specific and daily: spacing systems need additive steps to stay on a grid, type systems need multiplicative steps to stay legible as sizes grow."
      },
      related: [455, 451, 413]
    },
    {
      n: 455,
      title: "Modular scale (proportion)",
      aka: ["Modular scale", "Type scale", "Ratio-based scale"],
      oneLine: "A fixed set of sizes generated from one base number and one ratio, used across type and space.",
      demo: {
        caption: "Left, four sizes chosen one at a time and barely distinguishable. Right, the same four roles from 16 times 1.25.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Four separate decisions</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:21px\">Heading</span><span class=\"db-specimen\" style=\"font-size:20px\">Subhead</span><span class=\"db-specimen\" style=\"font-size:17px\">Body copy</span><span class=\"db-specimen\" style=\"font-size:16px\">Caption</span><span class=\"db-note\">21 20 17 16</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One base, one ratio</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:31px\">Heading</span><span class=\"db-specimen\" style=\"font-size:25px\">Subhead</span><span class=\"db-specimen\" style=\"font-size:20px\">Body copy</span><span class=\"db-specimen\" style=\"font-size:16px\">Caption</span><span class=\"db-note\">16 x 1.25: 16 20 25 31</span></div></div></div></div>"
      },
      what: "The method is set out in full at 345, and the ratio table at 346. What belongs in a section on proportion is why it works: one base measurement and one ratio give every dimension on the page a common ancestor, so type sizes, margins, gutters and image widths become members of one family instead of separate decisions. Bringhurst's comparison, quoted by Tim Brown, is to a musical scale, a prearranged set of harmonious proportions.",
      why: "It is where proportion theory turns into numbers you can ship. Sizes drawn from one scale relate to each other whether or not anyone can articulate how, and the constraint stops a page accumulating six near-identical text sizes.",
      how: [
        "Pick the base from a real measurement in the design, usually the body text size.",
        "Reuse the one scale for space as well as type: margins, gutters and line height.",
        "Round to whole pixels and freeze the rounded numbers as tokens. For the working method, see 345."
      ],
      example: "Tim Brown's A List Apart article of 3 May 2011 walks through building a page from a scale seeded by an existing 190px heading and 18px body text at a ratio of 1:1.618, and publishes the resulting CSS values.",
      numbers: "The common ratios are listed at 346. Four of them are just-intonation musical intervals; the golden ratio at 1.618 is often listed alongside them but is not one.",
      pitfall: "Sticking to the scale when the scale is wrong for the job. High ratios such as 1.618 look magnificent on a desktop hero and produce unreadable jumps on a phone, so most responsive systems need the ratio to change with the viewport.",
      source: "Robert Bringhurst, The Elements of Typographic Style; Tim Brown, More Meaningful Typography, A List Apart, 3 May 2011",
      verify: {
        status: "verified",
        note: "Read Tim Brown's A List Apart article, confirmed as published 3 May 2011. It quotes Bringhurst directly: a modular scale, like a musical scale, is a prearranged set of harmonious proportions. The worked example in the article uses 18px body text and a 190px heading at 1:1.618, which is where the figures here come from. Shortened to a cross-reference during duplicate resolution, because 345 covered the same method; the ratio list moved to a pointer at 346 rather than being repeated. No claim was changed."
      },
      belongs: {
        verdict: "core",
        why: "It is the standard mechanism for turning proportion theory into a working set of numbers, and it is what almost every modern design system actually ships. The method itself is written up at 345."
      },
      related: [345, 346, 448, 454]
    },
    {
      n: 456,
      title: "Self-similarity",
      aka: ["Scale invariance"],
      oneLine: "A shape or structure that repeats its own form at smaller sizes.",
      demo: {
        caption: "Left, every part is a shrunken copy of the whole. Right, the roughness holds at both scales without ever repeating.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Exact: parts are copies</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 126\"><polygon class=\"f\" points=\"10,110 50,110 30,85.5\"/><polygon class=\"f\" points=\"50,110 90,110 70,85.5\"/><polygon class=\"f\" points=\"30,85.5 70,85.5 50,61\"/><polygon class=\"f\" points=\"90,110 130,110 110,85.5\"/><polygon class=\"f\" points=\"130,110 170,110 150,85.5\"/><polygon class=\"f\" points=\"110,85.5 150,85.5 130,61\"/><polygon class=\"f\" points=\"50,61 90,61 70,36.5\"/><polygon class=\"f\" points=\"90,61 130,61 110,36.5\"/><polygon class=\"f\" points=\"70,36.5 110,36.5 90,12\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Statistical: same roughness</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 126\"><path class=\"s\" d=\"M8 40 L15 41 L22 57 L29 53 L36 64 L43 55 L50 61 L57 47 L64 48 L71 53 L78 73 L85 73 L92 88 L99 86 L106 70 L113 73 L120 62 L128 62 L136 78 L144 73 L152 84 L159 81 L166 63 L173 65 L180 52\"/><path class=\"s-mute\" stroke-dasharray=\"5 3\" d=\"M8 40 L92 88 L180 52\"/><text class=\"t\" x=\"8\" y=\"112\">one large bay, many small</text></svg></div></div></div>"
      },
      what: "Something is self-similar when a part of it looks like the whole. A Koch snowflake is exactly self-similar: every bump carries smaller bumps of identical shape. A coastline is statistically self-similar: the pattern of bays and headlands looks similar at a range of magnifications without repeating exactly. Mandelbrot set out the statistical version in his 1967 Science paper on the length of the British coast, before he had coined the word fractal.",
      why: "In design the useful version is deliberate: a repeated shape logic that survives at several sizes. A card that contains cards, or a corner radius that halves as the component halves. Recognition gets cheaper each time the eye meets the same relationship.",
      how: [
        "Define one shape rule, such as a corner radius that is a fixed fraction of the height, and apply it at every component size.",
        "Design the small version first, then scale the logic up; the reverse tends to produce detail that dies at 16px.",
        "Nest containers on the same padding ratio so a card inside a panel reads as the same kind of object.",
        "Test the logo at favicon size and at billboard size, and change the drawing rather than the scale where it breaks."
      ],
      example: "The Russian doll is the plain-language case. In interface work, an accordion inside an accordion inside a settings panel is self-similar if the padding, border and type sizes step by the same ratio at each level.",
      numbers: "",
      pitfall: "Exact self-similarity at very small sizes produces mush. A 12px icon needs a redrawn version, not a scaled-down one, because the strokes will fall below one pixel.",
      source: "Benoit Mandelbrot, How Long Is the Coast of Britain? Statistical Self-Similarity and Fractional Dimension, Science 156 (1967), pp. 636-638",
      verify: {
        status: "verified",
        note: "Mandelbrot's 1967 Science paper confirmed by citation (vol 156, issue 3775, pp. 636-638, published 5 May 1967), including the point that he distinguishes exactly self-similar mathematical curves from statistically self-similar natural forms, and that he had not yet coined the word fractal at that date. The design applications described here are ordinary practice, not claims from the paper."
      },
      belongs: {
        verdict: "adjacent",
        why: "The concept comes from mathematics. Its specific design use is real: repeating one shape rule across component sizes so a system reads as one family rather than a set of separate drawings."
      },
      related: [458, 457, 459]
    },
    {
      n: 457,
      title: "Fractal scaling",
      aka: ["Fractal dimension in design", "Fractal aesthetics"],
      oneLine: "The claim that arranging visual detail at fractal densities makes a design more pleasing.",
      demo: {
        caption: "The same coast measured twice. The short steps follow detail the long steps jump over, so they total more.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Three long steps</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 124\"><path class=\"s-mute\" d=\"M10 100 L20 78 L28 88 L38 58 L48 74 L58 52 L68 72 L78 66 L90 100 L100 72 L108 90 L118 54 L128 76 L138 60 L148 84 L158 62 L170 100 L180 74 L190 88 L200 56 L210 78 L220 62 L232 84 L242 70 L250 100\"/><path class=\"s-accent\" d=\"M10 100 H250\"/><circle class=\"f-accent\" cx=\"10\" cy=\"100\" r=\"3\"/><circle class=\"f-accent\" cx=\"90\" cy=\"100\" r=\"3\"/><circle class=\"f-accent\" cx=\"170\" cy=\"100\" r=\"3\"/><circle class=\"f-accent\" cx=\"250\" cy=\"100\" r=\"3\"/><text class=\"t\" x=\"10\" y=\"118\">3 steps of 80</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Twenty-four short steps</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 124\"><path class=\"s-mute\" d=\"M10 100 H250\"/><path class=\"s-accent\" d=\"M10 100 L20 78 L28 88 L38 58 L48 74 L58 52 L68 72 L78 66 L90 100 L100 72 L108 90 L118 54 L128 76 L138 60 L148 84 L158 62 L170 100 L180 74 L190 88 L200 56 L210 78 L220 62 L232 84 L242 70 L250 100\"/><text class=\"t\" x=\"10\" y=\"118\">24 steps, same two ends</text></svg></div></div></div>"
      },
      what: "A fractal has detail at every level of magnification, measured by a fractional dimension between the whole numbers. Mandelbrot formalised this in The Fractal Geometry of Nature (1982). The design version of the idea holds that compositions with a mid-range fractal dimension are more attractive, and it is usually introduced through Richard Taylor's analysis of Jackson Pollock's drip paintings, published in Nature in 1999.",
      why: "The honest answer is that it buys a working designer very little. The idea that detail should exist at more than one level of scale is worth having, but that idea already has a better and more usable name, and it does not need fractal dimension attached to it.",
      how: [
        "If you want detail at several magnifications, use levels of scale (458), which gives you an actionable rule rather than a measurement.",
        "For maps and generative pattern, where fractal generation is genuinely the technique, treat it as a production method rather than an aesthetic principle.",
        "Do not quote a fractal dimension as evidence that a layout is beautiful."
      ],
      example: "The Pollock case is the one usually cited, and it is the one that failed. Jones-Smith and Mathur showed in Nature in 2006 that simple sketches made in a drawing program produced the same fractal characteristics that had been offered as a signature of Pollock's work.",
      numbers: "",
      pitfall: "Presenting a contested research finding as a design law. The specific study that made this idea popular was challenged in the same journal that published it.",
      source: "Benoit Mandelbrot, The Fractal Geometry of Nature (1982); Richard Taylor, Adam Micolich and David Jonas, Fractal analysis of Pollock's drip paintings, Nature 399, 422 (3 June 1999)",
      verify: {
        status: "disputed",
        note: "Citation confirmed at Nature itself: Taylor, Micolich and Jonas, Fractal analysis of Pollock's drip paintings, Nature 399, 422, published 3 June 1999. Katherine Jones-Smith and Harsh Mathur published Fractal Analysis: Revisiting Pollock's Drip Paintings as a Brief Communications Arising in Nature 444 (2006), pp. E9-E10, with a reply from Taylor and colleagues in the same issue. The dispute is live and documented, so no aesthetic claim from this line of work should be presented as settled."
      },
      belongs: {
        verdict: "cut",
        why: "The mathematics is real but there is no reliable design instruction in it, and the study that popularised it is contested. Levels of scale (458) covers the same usable ground with a rule a designer can apply."
      },
      related: [456, 458]
    },
    {
      n: 458,
      title: "Levels of scale (in layout)",
      aka: ["Levels of scale", "Hierarchy of sizes"],
      oneLine: "A design feels whole when it contains a graded range of sizes, each roughly related to the next.",
      demo: {
        caption: "Count the distinct sizes. Two on the left and the page reads as crude; seven graded steps on the right.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Two levels</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:34px\">Headline</span><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i></div><span class=\"db-note\">2 sizes</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Seven levels</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:30px\">Masthead</span><span class=\"db-specimen\" style=\"font-size:20px\">Lead headline</span><span class=\"db-specimen\" style=\"font-size:14px\">Secondary head</span><span class=\"db-specimen\" style=\"font-size:11px\">Standfirst runs here</span><div class=\"db-lines\"><i></i><i></i><i></i></div><span class=\"db-note\" style=\"font-size:9px\">Caption</span><span class=\"db-note\" style=\"font-size:7px\">12</span></div></div></div></div>"
      },
      what: "Alexander's first property is written up at 913, with his own guidance on how big a step between neighbouring sizes should be. It appears in this section because it is the proportion idea you can run as a check on a finished layout. A facade with only a huge blank wall and tiny window catches has two levels and reads as dead; one with wall, bay, window, frame, glazing bar and moulding has six and reads as settled. The same count works on a page.",
      why: "It gives you a diagnostic you can run on any layout in a minute. Count the distinct sizes present. If there are three, the page will feel crude. If there are twenty with no clear intervals, it will feel noisy. The fix is usually to insert a missing middle rather than to change the extremes.",
      how: [
        "List every distinct size in the design, from page width down to hairline rule, and look for gaps in the ladder.",
        "Where two sizes are nearly identical, merge them; a level that cannot be told apart is not a level.",
        "Apply this to space as well as objects, since gaps have sizes too. Alexander's own ratio guidance is at 913."
      ],
      example: "A newspaper front page has masthead, lead headline, secondary headline, standfirst, body text, caption and folio, which is seven readable levels stepping down in an even sequence.",
      numbers: "",
      pitfall: "Adding levels for their own sake, which produces a page where nothing dominates. The point is an even ladder from a clear top to a clear bottom, not a maximum count.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002), property 1 of 15",
      verify: {
        status: "verified",
        note: "Confirmed that levels of scale is the first of the fifteen fundamental properties Alexander sets out in The Nature of Order, Book One: The Phenomenon of Life (2002). The attribution is what is verified here. The properties themselves are Alexander's own theory of living structure, argued rather than measured, and no controlled test supports the claim that a graded range of sizes causes a feeling of wholeness. The diagnostic in this entry is a practical restatement, and it earns its place because counting distinct sizes is useful whether or not Alexander's larger theory holds. Shortened to a cross-reference during duplicate resolution, because 913 carries the property itself alongside Alexander's other fourteen. No claim was changed."
      },
      belongs: {
        verdict: "core",
        why: "It converts an abstract idea about proportion into something you can count on a real layout, and it explains a common failure that has no other good name. The property itself sits at 913."
      },
      related: [456, 455, 98, 913]
    },
    {
      n: 459,
      title: "Symmetry groups",
      aka: ["Wallpaper groups", "Plane symmetry groups", "Frieze groups"],
      oneLine: "The complete classification of every way a pattern can repeat across a flat surface.",
      demo: {
        caption: "Four ways one motif can repeat along a line: slide, mirror, glide, half-turn. Seven frieze types, seventeen for the plane.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 160\"><path class=\"s-mute\" d=\"M88 20 H262 M88 52 H262 M88 88 H262 M88 138 H262\"/><path class=\"f\" transform=\"translate(96,20)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(132,20)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(168,20)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(204,20)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(240,20)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(96,52)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(132,52) scale(-1,1)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(168,52)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(204,52) scale(-1,1)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(240,52)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(96,88)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(132,88) scale(1,-1)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(168,88)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(204,88) scale(1,-1)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(240,88)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(96,138)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(132,138) rotate(180)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(168,138)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(204,138) rotate(180)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><path class=\"f\" transform=\"translate(240,138)\" d=\"M0 0 V-14 H8 L11 -11 L8 -8 H3 V0 Z\"/><text class=\"t\" x=\"4\" y=\"20\">translation</text><text class=\"t\" x=\"4\" y=\"52\">mirror</text><text class=\"t\" x=\"4\" y=\"92\">glide</text><text class=\"t\" x=\"4\" y=\"145\">half-turn</text></svg></div>"
      },
      what: "A repeating pattern is defined by which movements leave it looking unchanged: sliding, turning, mirroring and glide reflection. Classify patterns by which combinations of those movements they allow and you find there are exactly seventeen possibilities for a pattern that repeats in two directions, and exactly seven for a border that repeats in one. Evgraf Fedorov proved the seventeen in 1891 and George Polya derived them again independently in 1924. There is no eighteenth.",
      why: "For anyone doing surface pattern, textiles, tiling or generative backgrounds, this is the complete map of the territory. It tells you when two motifs that look different will behave the same way in repeat, and it lets you name the effect you want instead of nudging a tile until it looks right.",
      how: [
        "Decide the repeat type before you draw the motif; a half-drop and a mirror repeat need different artwork.",
        "For borders and rules, work through the seven frieze types rather than defaulting to plain translation.",
        "Add a glide reflection when a straight mirror repeat is producing an obvious seam line down the artwork.",
        "Test a repeat by tiling nine copies and standing back, because unwanted diagonal streaks only show at that size."
      ],
      example: "The tiled decoration of the Alhambra in Granada is the standard reference case, and mathematicians have argued for decades about how many of the seventeen groups appear there.",
      numbers: "17 wallpaper groups for two-directional repeats; 7 frieze groups for one-directional borders. Proof by Fedorov (1891), independently derived by Polya (1924).",
      pitfall: "Building a repeat by eye and only discovering at production scale that the motif forms a strong diagonal. The group structure predicts that; the single tile does not show it.",
      source: "Evgraf Fedorov (1891); George Polya (1924); standard in Grunbaum and Shephard, Tilings and Patterns (1987)",
      verify: {
        status: "verified",
        note: "The count of seventeen wallpaper groups and the Fedorov 1891 and Polya 1924 attributions were checked against the mathematical literature summary, including the original Fedorov citation in the Proceedings of the Imperial St Petersburg Mineralogical Society. The seven frieze groups are the standard classification. No claim is made here about how many groups appear at the Alhambra, because that count is genuinely contested."
      },
      belongs: {
        verdict: "adjacent",
        why: "This is group theory. The design relevance is exact and practical: it is the finite list of every repeat structure available to a pattern designer, so it tells you what your options are before you start drawing."
      },
      related: [460, 132, 461]
    },
    {
      n: 460,
      title: "Tessellation",
      aka: ["Tiling", "Repeat pattern"],
      oneLine: "Covering a surface with shapes that leave no gaps and no overlaps.",
      demo: {
        caption: "Only three regular shapes tile the plane alone. Three pentagons round a point come to 324 degrees and leave a gap.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">These three tile alone</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 130\"><rect class=\"s\" x=\"10\" y=\"32\" width=\"54\" height=\"54\"/><path class=\"s\" d=\"M28 32 V86 M46 32 V86 M10 50 H64 M10 68 H64\"/><path class=\"s\" d=\"M80 86 L92 65.2 L104 86 L116 65.2 L128 86 L140 65.2 L152 86 M80 86 H152 M92 65.2 H140\"/><path class=\"s\" d=\"M176 61 L188.12 68 L188.12 82 L176 89 L163.88 82 L163.88 68 Z\"/><path class=\"s\" d=\"M200.24 61 L212.36 68 L212.36 82 L200.24 89 L188.12 82 L188.12 68 Z\"/><path class=\"s\" d=\"M224.48 61 L236.6 68 L236.6 82 L224.48 89 L212.36 82 L212.36 68 Z\"/><path class=\"s\" d=\"M188.12 40 L200.24 47 L200.24 61 L188.12 68 L176 61 L176 47 Z\"/><path class=\"s\" d=\"M212.36 40 L224.48 47 L224.48 61 L212.36 68 L200.24 61 L200.24 47 Z\"/><text class=\"t\" x=\"16\" y=\"104\">square</text><text class=\"t\" x=\"94\" y=\"104\">triangle</text><text class=\"t\" x=\"178\" y=\"104\">hexagon</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">A regular pentagon does not</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 130\"><path class=\"s\" d=\"M85 65 L119.24 53.87 L119.24 17.87 L85 6.75 L63.84 35.87 Z\"/><path class=\"s\" d=\"M85 65 L63.84 35.87 L29.6 47 L29.6 83 L63.84 94.12 Z\"/><path class=\"s\" d=\"M85 65 L63.84 94.13 L85 123.25 L119.24 112.13 L119.24 76.13 Z\"/><path class=\"f-accent\" d=\"M85 65 L119.24 53.87 L119.24 76.13 Z\"/><text class=\"t\" x=\"130\" y=\"44\">108 deg each</text><text class=\"t\" x=\"130\" y=\"60\">3 x 108 = 324</text><text class=\"t\" x=\"130\" y=\"76\">36 deg left over</text></svg></div></div></div>"
      },
      what: "Only three regular polygons tile the plane on their own: the equilateral triangle, the square and the regular hexagon. Mix regular polygons and keep the same arrangement at every corner and you get eight semi-regular tilings. Loosen the rules further and you reach tilings that never repeat. Roger Penrose described sets of aperiodic tiles in the 1970s, and in March 2023 David Smith, Joseph Myers, Craig Kaplan and Chaim Goodman-Strauss proved that a single shape nicknamed the hat tiles the plane without ever repeating, provided you are allowed to use its mirror image as well. The same four authors closed that loophole in May 2023 with a shape called the spectre, which needs no reflections.",
      why: "Tiling is how you get a large surface from a small file, which is the economics of all pattern, texture and background work. It also governs anything that must pack without waste, from packaging nets to a grid of cards that has to fill the row.",
      how: [
        "Distort the edges of a regular tiling: push an edge out on one side and you must push it in by the same amount opposite.",
        "Use a hexagonal tiling when you want a repeat with no continuous straight lines running through it.",
        "Check the repeat at three zoom levels, since a tile that reads as texture up close often reads as stripes from a distance.",
        "For an organic look, use a larger tile with several motif variants rather than a small tile repeated more often."
      ],
      example: "The rhombitrihexagonal tiling, made of squares, triangles and hexagons, appears in a tiled floor in the Archaeological Museum of Seville, a standard photographed example of a semi-regular tiling in use.",
      numbers: "3 regular tilings (triangle, square, hexagon); 8 semi-regular (Archimedean) tilings; 17 wallpaper groups. The hat aperiodic monotile was announced as a preprint in March 2023 and formally published in 2024; the reflection-free spectre followed in May 2023.",
      pitfall: "The visible grid. A tile small enough to repeat many times inside the visible area will announce itself as a grid, and the smaller it is the louder that reads. There is no published threshold to quote here, so test it at the size the artwork will actually be seen: either enlarge the tile until the repeat stops registering, or accept the grid and make it deliberate.",
      source: "Grunbaum and Shephard, Tilings and Patterns (1987); Smith, Myers, Kaplan and Goodman-Strauss, aperiodic monotile (2023)",
      verify: {
        status: "verified",
        note: "The three regular and eight semi-regular tilings were confirmed, along with the rhombitrihexagonal tiling's composition of one triangle, two squares and one hexagon at each vertex, and the photographed floor tiling in the Archaeological Museum of Seville, all from the standard tiling literature citing Grunbaum and Shephard (1987) and Coxeter (1973). Two corrections were made in this pass. The hat monotile of March 2023 tiles aperiodically only when its mirror image is allowed, which the entry now says; the strictly chiral spectre of May 2023 is the version that needs no reflections. And the pitfall previously gave a tile-size threshold with nothing behind it, so the number has been removed."
      },
      belongs: {
        verdict: "core",
        why: "Making a pattern repeat without a visible join is an everyday production task in print, textile and screen work, and the geometry directly determines whether it can be done."
      },
      related: [459, 461, 456]
    },
    {
      n: 461,
      title: "Radial geometry",
      aka: ["Radial composition", "Rotational symmetry"],
      oneLine: "Organising a design around a centre, with elements placed by angle and distance rather than by row and column.",
      demo: {
        caption: "The same eight marks placed by row and column, then by angle and radius, where the centre becomes the strongest position.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Row and column</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 160\"><path class=\"s-mute\" d=\"M35 30 V130 M75 30 V130 M115 30 V130 M155 30 V130 M20 55 H175 M20 105 H175\"/><circle class=\"f\" cx=\"35\" cy=\"55\" r=\"6\"/><circle class=\"f\" cx=\"75\" cy=\"55\" r=\"6\"/><circle class=\"f\" cx=\"115\" cy=\"55\" r=\"6\"/><circle class=\"f\" cx=\"155\" cy=\"55\" r=\"6\"/><circle class=\"f\" cx=\"35\" cy=\"105\" r=\"6\"/><circle class=\"f\" cx=\"75\" cy=\"105\" r=\"6\"/><circle class=\"f\" cx=\"115\" cy=\"105\" r=\"6\"/><circle class=\"f\" cx=\"155\" cy=\"105\" r=\"6\"/><text class=\"t\" x=\"4\" y=\"156\">position is x and y</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Angle and radius</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 160\"><circle class=\"s-mute\" cx=\"100\" cy=\"82\" r=\"58\" stroke-dasharray=\"4 3\"/><path class=\"s-mute\" d=\"M100 82 L158 82 M100 82 L141 41\"/><path class=\"s-accent\" d=\"M120 82 A20 20 0 0 0 114.14 67.86\"/><circle class=\"f\" cx=\"158\" cy=\"82\" r=\"6\"/><circle class=\"f\" cx=\"141\" cy=\"41\" r=\"6\"/><circle class=\"f\" cx=\"100\" cy=\"24\" r=\"6\"/><circle class=\"f\" cx=\"59\" cy=\"41\" r=\"6\"/><circle class=\"f\" cx=\"42\" cy=\"82\" r=\"6\"/><circle class=\"f\" cx=\"59\" cy=\"123\" r=\"6\"/><circle class=\"f\" cx=\"100\" cy=\"140\" r=\"6\"/><circle class=\"f\" cx=\"141\" cy=\"123\" r=\"6\"/><circle class=\"f-accent\" cx=\"100\" cy=\"82\" r=\"10\"/><text class=\"t\" x=\"126\" y=\"62\">r</text><text class=\"t\" x=\"122\" y=\"94\">angle</text><text class=\"t\" x=\"4\" y=\"156\">position is radius and angle</text></svg></div></div></div>"
      },
      what: "Instead of positioning things on a grid of horizontals and verticals, you position them by how far they sit from a centre point and at what angle. Repeat a motif at equal angles and you get rotational symmetry of order n. Add mirror lines through the centre and you get the dihedral case. The centre becomes the strongest point in the composition by default, because every line in the design points at it.",
      why: "Radial arrangement communicates equality among the outer elements and dominance for the middle one, without any explicit ranking. It also handles cyclical information naturally, which is why clocks, compasses and seasonal charts are round rather than rectangular.",
      how: [
        "Reserve the centre for the thing that deserves it; a radial layout with a weak middle looks like a mistake.",
        "Keep the number of spokes to something the eye can count at a glance, or the wheel becomes texture.",
        "Rotate labels to stay upright rather than following the spoke angle, unless the design is decorative rather than functional.",
        "Give the outer ring more space per item than the inner ring, since circumference grows with radius while your content does not."
      ],
      example: "The rose window at Chartres Cathedral is the classic case. The interface version is the pie menu, which Blender ships as standard, where every option sits an equal flick from the cursor.",
      numbers: "",
      pitfall: "Using a circle for data that is not cyclical or not a share of a whole. Angles are hard to compare by eye, so a radial chart of unrelated quantities is almost always worse than a bar chart.",
      source: "Standard compositional geometry; the radial system is one of the eight layout systems set out by Kimberly Elam in Typographic Systems (2007)",
      verify: {
        status: "adjusted",
        note: "Elam's Typographic Systems (2007) confirmed, and confirmed as setting out eight systems: axial, radial, dilatational, random, grid, modular, transitional and bilateral. Radial is one of them, which means 461 substantially duplicates radial system at 435 in the grid and layout section. Rather than delete either, 461 has been written as the underlying geometry, rotation about a centre and its symmetry order, with 435 left as the layout pattern. No single named originator exists for radial composition as a principle, and this entry claims none."
      },
      belongs: {
        verdict: "adjacent",
        why: "Downgraded from core on review, because 435 already carries radial layout and two core entries should not describe the same thing. What is left here that 435 does not cover is the geometry itself, rotational and dihedral symmetry about a centre, which is worth its own entry but is a supporting idea rather than a foundational one."
      },
      related: [435, 459, 460]
    },
    {
      n: 462,
      title: "Optical versus mathematical proportion",
      aka: ["Optical adjustment", "Optical correction", "Overshoot"],
      oneLine: "What measures equal often does not look equal, so the eye gets the final say over the ruler.",
      demo: {
        caption: "Both shapes are exactly seventy units tall on the left, yet the circle looks smaller. On the right it overshoots the guides.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Measured the same</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 110\"><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M8 20 H192 M8 90 H192\"/><rect class=\"f\" x=\"30\" y=\"20\" width=\"70\" height=\"70\"/><circle class=\"f\" cx=\"150\" cy=\"55\" r=\"35\"/><text class=\"t\" x=\"8\" y=\"14\">both 70 tall</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Corrected by eye</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 110\"><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M8 20 H192 M8 90 H192\"/><rect class=\"f\" x=\"30\" y=\"20\" width=\"70\" height=\"70\"/><circle class=\"f\" cx=\"150\" cy=\"55\" r=\"37.5\"/><text class=\"t\" x=\"8\" y=\"14\">circle 75, overshooting</text></svg></div></div></div>"
      },
      what: "Set a circle and a square to the same height and the circle looks smaller, because it reaches full width at only one point while the square is at full width throughout. Type designers therefore draw round letters slightly taller than flat ones, which is called overshoot. The same mismatch appears in spacing, where a curved letter needs less side bearing than a straight one, and in vertical centring, where text at the exact middle of a box looks low. The measured value and the perceived value disagree, and the perceived value wins.",
      why: "This is the difference between work that measures correctly and work that looks right. It is also the most common reason a layout built from perfect numbers feels subtly wrong without anyone being able to point at the cause.",
      how: [
        "Let round and pointed shapes break the alignment slightly, above and below flat ones.",
        "Set text a little above true vertical centre in a button; the optical centre sits higher than the geometric one.",
        "Kern and space by eye at final size, not by numeric letter-spacing.",
        "Check icon weight by squinting, since a diagonal reads lighter than a vertical at the same thickness.",
        "Make the adjustment, then measure it, and record the number so the rest of the system can match."
      ],
      example: "Open almost any well-drawn typeface and compare the O to the H. The O will be drawn taller at both ends, though the two are meant to read as the same height.",
      numbers: "Banister Fletcher gives the Parthenon stylobate an upward curvature towards its centre of 2.61 inches (66 mm) on the east and west fronts and 4.39 inches (112 mm) on the flanks, and says the axes of the outer columns lean inwards by 2.65 inches (67 mm). He credits the survey behind those figures to Francis Cranmer Penrose. Overshoot amounts for round letters vary by typeface and no general published threshold was found, so none is given.",
      pitfall: "Assuming the classical version of this story is settled. The Parthenon refinements are real and measured, but the explanation that they correct optical illusions is contested. A preprint by Alain Goriely works through twelve proposed corrections and argues that the illusions they are supposed to correct are either non-existent or too small to perceive. The typographic adjustments are not in doubt; the ancient motive is.",
      source: "Standard type-design practice; Parthenon measurements as given in Banister Fletcher, A History of Architecture on the Comparative Method, which credits them to Penrose",
      verify: {
        status: "disputed",
        note: "The optical adjustment practices in type and interface work are ordinary craft knowledge and were checked against type-foundry and lettering sources describing overshoot and optical correction. No general figure for how far a round letter overshoots is given, because none could be sourced; the amount is a per-typeface decision. The Parthenon figures were read this pass in the full text of Banister Fletcher's A History of Architecture on the Comparative Method, which states an upward curvature towards the centre of 2.61 inches on the east and west fronts and 4.39 inches on the flanks, and outer columns whose axes lean inwards 2.65 inches. Three things were corrected against that text: the flank figure had been rounded to 4.3 inches and converted to 109 mm, the column lean had been described as corner columns out of plumb rather than the outer columns as a whole, and the measurements had been credited to Fletcher, who attributes them to Penrose. Marked disputed because of arXiv preprint 2510.16831, The illusion of illusions: There are no optical corrections in the Parthenon, by Alain Goriely, submitted 19 October 2025 and revised 4 April 2026, which accepts the measured refinements but argues across twelve claimed corrections that the illusions are either non-existent or imperceptible. It is a preprint, so the mainstream reading is retained here, but the ancient motive should not be stated as fact."
      },
      belongs: {
        verdict: "core",
        why: "It is the working rule that governs every alignment decision at final size, and no other entry in this section covers the gap between the measurement and the eye."
      },
      related: [463, 448, 455]
    },
    {
      n: 9462,
      title: "Area scales as the square of length",
      aka: ["Square scaling", "Linear versus area scaling"],
      oneLine: "Double a shape's width and height and it covers four times the area, not twice.",
      demo: {
        caption: "Both show 100 against 25. Sizing by diameter puts sixteen times the ink on the page; sizing by area puts four.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Diameter x 4</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><circle class=\"f\" cx=\"26\" cy=\"60\" r=\"10\"/><circle class=\"f\" cx=\"120\" cy=\"60\" r=\"40\"/><text class=\"t\" x=\"6\" y=\"14\">areas 16 : 1</text><text class=\"t\" x=\"20\" y=\"110\">25</text><text class=\"t\" x=\"110\" y=\"110\">100</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Area x 4</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><circle class=\"f\" cx=\"26\" cy=\"60\" r=\"10\"/><circle class=\"f\" cx=\"90\" cy=\"60\" r=\"20\"/><text class=\"t\" x=\"6\" y=\"14\">areas 4 : 1</text><text class=\"t\" x=\"20\" y=\"110\">25</text><text class=\"t\" x=\"81\" y=\"110\">100</text></svg></div></div></div>"
      },
      what: "Scaling is not linear in the way it feels. A shape enlarged by a factor of two in each direction has four times the area; by a factor of three, nine times. The eye reads a filled shape largely by how much surface it covers, so a value encoded by width or diameter will be read as far larger than intended. A circle drawn at twice the diameter of another does not look twice as big, it looks four times as big, because that is what it is.",
      why: "A chart that encodes value as diameter overstates its own differences by the square, and the reader has no way to tell. The fix is one square root in the calculation, which is why area encoding is the standing convention in statistical graphics.",
      how: [
        "Size circles and other filled marks by area, so the radius is proportional to the square root of the value.",
        "Say in the legend which quantity the mark encodes, because a reader cannot see whether you used diameter or area.",
        "Sanity-check a chart by picking the largest and smallest mark and comparing their area ratio against their value ratio.",
        "Where a mark must be compared precisely rather than impressionistically, use length on a common baseline instead of area."
      ],
      example: "A bubble chart where a value of 100 is drawn with twice the diameter of a value of 25 is correct, because the areas are then in a 4:1 ratio matching the values. Drawing it with four times the diameter would show a sixteenfold difference.",
      numbers: "Area scales with the square of the linear scale factor: 2x linear gives 4x area, 3x gives 9x. Volume scales with the cube, which is why three-dimensional bubbles are worse still.",
      pitfall: "Interface and charting tooling makes the mistake easy, because scaling handles work on linear dimensions and say nothing about area. The error compounds silently across a whole set of marks.",
      source: "Elementary geometry; the area-encoding convention is standard practice in statistical graphics",
      verify: {
        status: "verified",
        note: "The geometry is definitional and needs no external source, and the two worked examples were recalculated. Added as a gap because nothing in entries 448 to 463 covers the mismatch between the number a designer types and the amount of surface the eye receives, which is a distinct problem from optical adjustment at 462. Corrected in this pass: the entry originally claimed that scaling an icon from 24px to 96px makes it look heavy because strokes grow in one dimension while enclosed white grows in two. That is false. Uniform scaling multiplies stroke area and white area by the same factor, so the proportions are unchanged. Optical sizing is a real practice but it rests on perception, not on this geometry, so the claim was removed rather than rewritten. Numbered to follow 462 as a proposed addition."
      },
      belongs: {
        verdict: "core",
        why: "Any mark whose size carries a value depends on it, and the mistake is invisible until someone measures. It is also the one piece of arithmetic in this section that is not a matter of taste or historical claim."
      },
      related: [462, 454, 458]
    },
    {
      n: 463,
      title: "Human scale",
      aka: ["Anthropometric proportion", "Designing to the body"],
      oneLine: "Sizing things by what a real body can reach, grip, read and stand next to.",
      demo: {
        caption: "One angle at the eye. Four times the reading distance needs four times the size, which is why signs are not cards.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 150\"><path class=\"s-mute\" d=\"M0 132 H320\"/><circle class=\"s\" cx=\"16\" cy=\"64\" r=\"7\"/><path class=\"s\" d=\"M16 71 V104 M16 104 L9 132 M16 104 L23 132\"/><path class=\"s-mute\" d=\"M23 64 L276 26 M23 64 L276 102\"/><path class=\"s-accent\" d=\"M48.7 60.1 A26 26 0 0 1 48.7 67.9\"/><rect class=\"f\" x=\"84\" y=\"54.5\" width=\"5\" height=\"19\"/><rect class=\"f\" x=\"272\" y=\"26.2\" width=\"6\" height=\"75.6\"/><path class=\"s-mute\" d=\"M275 101.8 V132\"/><text class=\"t\" x=\"44\" y=\"30\">same angle at the eye</text><text class=\"t\" x=\"62\" y=\"96\">held card</text><text class=\"t\" x=\"150\" y=\"58\">4 x the distance</text><text class=\"t\" x=\"150\" y=\"72\">4 x the size</text><text class=\"t\" x=\"200\" y=\"124\">wall sign</text></svg></div>"
      },
      what: "Human scale means taking the dimensions of the design from measured people rather than from a ratio or a screen size. Vitruvius took building proportions from the body, Le Corbusier tried to systematise it with the Modulor, and Henry Dreyfuss did the version that industrial design still uses. His two figures, Joe and Josephine, first appeared in Designing for People in 1955 and were then set out as full anthropometric charts in The Measure of Man in 1960, giving reach, clearance and sightline dimensions across a population range rather than for a single ideal person. The digital equivalent is the minimum touch target, which is a fingertip measurement expressed in pixels.",
      why: "It is what stops a design being right on screen and wrong in the hand. Population data also forces you to design for a range instead of an average, which is where most ergonomic failures come from.",
      how: [
        "Use published percentile ranges, not one figure; a control placed for the average user fails half the population.",
        "Set minimum touch targets from the accessibility standard rather than from what looks tidy in the mockup.",
        "Check reading distance before setting type size; a wall panel and a leaflet at the same point size are not the same design.",
        "Print or mock up at real size and hold it, because a screen preview hides scale errors completely."
      ],
      example: "A hospital wayfinding sign and a printed appointment card can carry identical wording, and the sign needs type many times larger because it is read at ten metres rather than forty centimetres.",
      numbers: "WCAG 2.2 Success Criterion 2.5.8, Target Size (Minimum), Level AA: at least 24 by 24 CSS pixels, subject to exceptions for spacing, equivalent function, inline text, user-agent control and essential presentation. WCAG 2.1 Success Criterion 2.5.5, Target Size (Enhanced), Level AAA: at least 44 by 44 CSS pixels. Dreyfuss: Designing for People 1955, The Measure of Man 1960.",
      pitfall: "Treating a percentile figure as a target rather than a boundary. Designing for the fiftieth percentile means designing something that fits nobody in particular and excludes a great many people at both ends.",
      source: "Henry Dreyfuss, Designing for People (1955) and The Measure of Man: Human Factors in Design (1960); W3C, WCAG 2.2 SC 2.5.8 and WCAG 2.1 SC 2.5.5",
      verify: {
        status: "verified",
        note: "Corrected in this pass: the drawings of Joe and Josephine were first published in Designing for People (1955), not in The Measure of Man (1960), which is where the detailed charts appear. Both books and both dates confirmed against design-history and library sources. SC 2.5.8 Target Size (Minimum) read directly from the W3C Understanding document, which states at least 24 by 24 CSS pixels at Level AA and lists the five exceptions now named in the entry. SC 2.5.5 Target Size (Enhanced) at 44 by 44 CSS pixels, Level AAA, is the WCAG 2.1 criterion. Vitruvius and the Modulor are cited as historical context only."
      },
      belongs: {
        verdict: "core",
        why: "Every other proportional system in this section is internal to the design; this is the one that ties it to the person using it, and it is the only one with enforceable standards behind it."
      },
      related: [452, 462, 892]
    }
  ]
};
