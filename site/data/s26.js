window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[26] = {
  n: 26,
  slug: "architecture",
  title: "Architecture, space and urbanism",
  blurb: "How buildings, streets and cities are shaped, and what those rules teach anyone arranging space.",
  intro: "Most of this section comes from two sources. The first is Christopher Alexander, who spent forty years trying to write down what makes a place feel alive, first as 253 numbered patterns and later as fifteen geometric properties and a theory of step-by-step making. The second is the post-war reaction against modernist planning, led by Jane Jacobs and carried on by Gordon Cullen, Jan Gehl, Ian Bentley and the urban morphologists. Two things are worth knowing before you read on. Alexander's fifteen properties are observational claims about geometry, not tested hypotheses, and he never presented them as science. And several of the urbanism items here have been tested since, with mixed results, so where the evidence is thin the entry says so.",
  sources: [
    "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
    "Christopher Alexander, The Nature of Order, Book Two: The Process of Creating Life (2002)",
    "Christopher Alexander, Sara Ishikawa and Murray Silverstein, A Pattern Language: Towns, Buildings, Construction (1977)",
    "Alexander's own summary of the fifteen properties at livingneighborhoods.org (accessed 2026)",
    "Jane Jacobs, The Death and Life of Great American Cities (1961)",
    "Gordon Cullen, Townscape (1961)",
    "Jay Appleton, The Experience of Landscape (1975)",
    "Oscar Newman, Defensible Space: Crime Prevention Through Urban Design (1972)",
    "Ian Bentley, Alan Alcock, Paul Murrain, Sue McGlynn and Graham Smith, Responsive Environments: A Manual for Designers (1985)",
    "Roger Trancik, Finding Lost Space: Theories of Urban Design (1986)",
    "M. R. G. Conzen, Alnwick, Northumberland: A Study in Town-Plan Analysis (1960)",
    "Stewart Brand, How Buildings Learn: What Happens After They're Built (1994)",
    "Jan Gehl, Lotte Johansen Kaefer and Solvejg Reigstad, Close Encounters with Buildings, Urban Design International 11(1), 29-47 (2006)",
    "Institute of Transportation Engineers with the Congress for the New Urbanism, Designing Walkable Urban Thoroughfares: A Context Sensitive Approach (2010)",
    "BS EN 17037:2018, Daylight in Buildings",
    "BRE, Site Layout Planning for Daylight and Sunlight: A Guide to Good Practice (BR 209), Littlefair, 2022 edition",
    "Annemarie S. Dosen and Michael J. Ostwald, Evidence for prospect-refuge theory: a meta-analysis of the findings of environmental preference research, City, Territory and Architecture 3(1), article 4 (2016)",
    "Nuria Vidal-Domper, Susana Herrero-Olarte, Gonzalo Hoyos-Bucheli and Marta Benages-Albert, Do Jane Jacobs's conditions fostering the presence of people influence crimes in public space? An econometric analysis in la Mariscal neighborhood in Quito, Cities 148, article 104863 (2024)",
    "Rob Hopkins, interview with Christopher Alexander, Transition Culture, 23 December 2010",
    "Bill Hillier and Julienne Hanson, The Social Logic of Space (1984); Hillier, Penn, Hanson, Grajewski and Xu, Natural Movement, Environment and Planning B 20(1), 29-66 (1993)"
  ],
  entries: [
    {
      n: 913,
      title: "Levels of scale",
      aka: ["Scaling hierarchy", "Balanced range of sizes"],
      oneLine: "A living whole contains a full ladder of sizes, with small steps between neighbouring ones.",
      demo: {
        caption: "Left jumps straight from the largest to the smallest. Right fills the ladder, halving each time, so the eye can step down.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Largest to smallest in one jump</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--bottom db-row--nowrap\"><span class=\"db-block db-block--ink\" style=\"width:96px;height:96px\"></span><span class=\"db-block db-block--ink\" style=\"width:12px;height:12px;min-height:12px\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Steps of about one to two</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--bottom db-row--nowrap\"><span class=\"db-block db-block--ink\" style=\"width:96px;height:96px\"></span><span class=\"db-block db-block--ink\" style=\"width:48px;height:48px\"></span><span class=\"db-block db-block--ink\" style=\"width:24px;height:24px;min-height:24px\"></span><span class=\"db-block db-block--ink\" style=\"width:12px;height:12px;min-height:12px\"></span></div></div></div></div>"
      },
      what: "The first of Alexander's fifteen properties. In any place that feels coherent there is a range of element sizes, and the jump from one size to the next is small. His own summary puts the useful step at roughly one to two or one to three, not one to five or one to ten. The failure is a gap in the ladder, where a very large thing sits next to a very small one with nothing in between.",
      why: "A complete ladder lets the eye travel from the whole down to the detail without falling through a hole. It is why a type scale with only two sizes looks crude and a facade with only two window sizes looks cheap.",
      how: [
        "List every distinct size in the thing you are making, sort the list and look for gaps.",
        "Fill the biggest gap with a real element that has a job, not a decorative filler.",
        "Check the ratio between neighbouring sizes; bigger than about three to one means something is missing.",
        "Count space as well as objects: margins, gutters and rules are all sizes."
      ],
      example: "Alexander's own illustration is Inca stonework, where a large block sits beside one half its size, then a quarter, then an eighth. A Georgian terrace does the same with terrace, house, bay, window, pane and glazing bar.",
      numbers: "Alexander's summary of the property gives the step between neighbouring sizes as roughly 1:2 to 1:3, and warns against 1:5 or 1:10.",
      pitfall: "People add sizes for the sake of it and end up with a scale so fine that no two elements read as different. The ladder needs steps you can actually see.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
      verify: { status: "verified", note: "Property name and the 1:2 to 1:3 guidance checked against Alexander's own summary of the fifteen properties at livingneighborhoods.org, which also supplies the Inca stonework example. The property list matches Book One." },
      belongs: { verdict: "core", why: "Scale hierarchy is a general design fundamental that transfers straight from buildings to pages, screens and product families." },
      related: [914, 922, 924, 346, 458]
    },
    {
      n: 914,
      title: "Strong centres",
      aka: ["Centeredness", "Field of centres"],
      oneLine: "Space feels resolved when it is organised around parts that read clearly as centres.",
      demo: {
        caption: "Only one square changed size. With two equal masses the eye has nowhere to settle; with one dominant it does.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Two equal masses</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 150\"><rect class=\"f-mute\" x=\"18\" y=\"22\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"112\" y=\"14\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"206\" y=\"20\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"18\" y=\"116\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"112\" y=\"124\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"206\" y=\"114\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"48\" y=\"48\" width=\"52\" height=\"52\"/><rect class=\"f\" x=\"140\" y=\"48\" width=\"52\" height=\"52\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One dominant, one subordinate</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 150\"><rect class=\"f-mute\" x=\"18\" y=\"22\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"112\" y=\"14\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"206\" y=\"20\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"18\" y=\"116\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"112\" y=\"124\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"206\" y=\"114\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"48\" y=\"48\" width=\"52\" height=\"52\"/><rect class=\"f\" x=\"155\" y=\"63\" width=\"22\" height=\"22\"/></svg></div></div></div>"
      },
      what: "Alexander uses the word centre for any identifiable part that appears within a larger whole and gathers space around itself. A centre is not a geometric dot; it is an arrangement that produces a felt sense of centredness. Centres come in degrees of strength, and they get stronger by helping each other, so a strong centre is usually surrounded by smaller centres that point at it. His whole theory of wholeness is built on this idea, and he describes the fifteen properties as the kinds of glue that bind centres together.",
      why: "Without a centre the eye has nowhere to rest and the composition feels like a list. Give the reader one clear focus supported by smaller ones and the arrangement stops feeling arbitrary.",
      how: [
        "Name the single strongest centre in what you are making before you arrange anything else.",
        "Support it with smaller centres nearby rather than competing ones far away.",
        "Shape the space around a centre so it presses inward, instead of letting the centre float.",
        "If two centres are fighting, demote one; two equal focal points read as none."
      ],
      example: "Alexander's illustration is a North African mosque courtyard, where the court, the domes and the arcade arches each read as centres at different sizes. The same structure appears in the Tuileries in Paris, where each avenue of trees and each square of four trees is felt as a centre.",
      numbers: "",
      pitfall: "Designers hear centre and think middle. Alexander's centres are rarely central; a strong centre can sit near an edge as long as the surrounding space is shaped to support it.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
      verify: { status: "verified", note: "Definition of centres taken from the Wikipedia summary of The Nature of Order quoting Alexander, and from Alexander's own fifteen-properties page at livingneighborhoods.org, which supplies the mosque and Tuileries examples." },
      belongs: { verdict: "core", why: "Focal hierarchy is the same problem in a plaza, a poster and a dashboard, and Alexander's version is the most precise statement of it." },
      related: [913, 917, 921, 925]
    },
    {
      n: 915,
      title: "Thick boundaries",
      aka: ["Boundaries", "Interchange zones"],
      oneLine: "A boundary should be a zone with its own thickness and life, not a line.",
      demo: {
        caption: "Below, the same edge given width: verge, ditch, hedge. Each layer is a place; the line above is only a division.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 520 190\"><text class=\"t\" x=\"0\" y=\"14\">BOUNDARY AS A LINE</text><rect class=\"f-mute\" x=\"0\" y=\"24\" width=\"260\" height=\"46\" opacity=\"0.18\"/><rect class=\"f-mute\" x=\"260\" y=\"24\" width=\"260\" height=\"46\" opacity=\"0.4\"/><path class=\"s\" d=\"M260 24 V70\"/><text class=\"t\" x=\"130\" y=\"52\" text-anchor=\"middle\">ROAD</text><text class=\"t\" x=\"390\" y=\"52\" text-anchor=\"middle\">FIELD</text><text class=\"t\" x=\"0\" y=\"100\">BOUNDARY AS A ZONE</text><path class=\"s-mute\" d=\"M200 116 V110 H330 V116\"/><rect class=\"f-mute\" x=\"0\" y=\"118\" width=\"200\" height=\"46\" opacity=\"0.18\"/><rect class=\"f-accent\" x=\"200\" y=\"118\" width=\"50\" height=\"46\" opacity=\"0.18\"/><rect class=\"f-accent\" x=\"250\" y=\"118\" width=\"30\" height=\"46\" opacity=\"0.32\"/><rect class=\"f-accent\" x=\"280\" y=\"118\" width=\"50\" height=\"46\" opacity=\"0.5\"/><rect class=\"f-mute\" x=\"330\" y=\"118\" width=\"190\" height=\"46\" opacity=\"0.4\"/><text class=\"t\" x=\"100\" y=\"146\" text-anchor=\"middle\">ROAD</text><text class=\"t\" x=\"425\" y=\"146\" text-anchor=\"middle\">FIELD</text><path class=\"s-mute\" d=\"M225 164 V172 M265 164 V172 M305 164 V172\"/><text class=\"t\" x=\"225\" y=\"184\" text-anchor=\"middle\">VERGE</text><text class=\"t\" x=\"265\" y=\"184\" text-anchor=\"middle\">DITCH</text><text class=\"t\" x=\"305\" y=\"184\" text-anchor=\"middle\">HEDGE</text></svg></div>"
      },
      what: "Where two areas meet, a hard line separates them but does nothing else. Alexander argues that in living structures the boundary becomes a zone of interaction with a size of its own, thick enough to be a place. It both separates the two sides and connects them, and it usually turns out to be made of smaller boundaries in turn. The boundary belongs to both sides and to neither.",
      why: "Thick boundaries stop two areas from grinding against each other and give people somewhere to pause between them. In flat design work, generous edges do the separating that hairlines cannot, and they read as intentional rather than as leftover.",
      how: [
        "Where two zones meet, ask what the boundary is for and give it real width.",
        "Put something useful in the boundary: a bench, a verge, a caption, a colophon.",
        "Build boundaries out of layers rather than a single edge.",
        "Prefer a wide band of quiet space to a thin rule when separating content."
      ],
      example: "Alexander illustrates the property with Binsted Lane in Sussex, where the road is flanked on each side by a grass verge, then a ditch, then a hedge. The arcaded hallway at his Eishin campus does the same job for a building: it separates inside from outside while giving people a place to stand.",
      numbers: "",
      pitfall: "Thickening a boundary is not the same as decorating a line. A fat border with nothing happening in it just wastes space and reads as a frame.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
      verify: { status: "verified", note: "Alexander's book calls the property Boundaries; his own restatement at livingneighborhoods.org titles it Thick Boundaries, which is the name the master list uses. Both were checked. That page lists Binsted Lane in Sussex and the Eishin campus hallway among its examples, so both are Alexander's own; its headline illustration is a Japanese tea ceremony cup." },
      belongs: { verdict: "core", why: "The habit of treating an edge as a zone rather than a line is directly usable in layout, product form and interface work." },
      related: [917, 920, 931, 941]
    },
    {
      n: 916,
      title: "Alternating repetition",
      aka: ["Rhythm by alternation"],
      oneLine: "Repetition works when two kinds of element take turns, so the gaps repeat as well.",
      demo: {
        caption: "The columns are identical in both. On the right the opening between them is given a shape, and a rhythm appears.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One unit copied</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 120\"><path class=\"s-mute\" d=\"M8 100 H232\"/><rect class=\"f\" x=\"16\" y=\"20\" width=\"20\" height=\"80\"/><rect class=\"f\" x=\"60\" y=\"20\" width=\"20\" height=\"80\"/><rect class=\"f\" x=\"104\" y=\"20\" width=\"20\" height=\"80\"/><rect class=\"f\" x=\"148\" y=\"20\" width=\"20\" height=\"80\"/><rect class=\"f\" x=\"192\" y=\"20\" width=\"20\" height=\"80\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Unit and interval both repeat</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 120\"><path class=\"s-mute\" d=\"M8 100 H232\"/><path class=\"f-accent\" opacity=\"0.28\" d=\"M36 100 V44 A12 12 0 0 1 60 44 V100 Z\"/><path class=\"f-accent\" opacity=\"0.28\" d=\"M80 100 V44 A12 12 0 0 1 104 44 V100 Z\"/><path class=\"f-accent\" opacity=\"0.28\" d=\"M124 100 V44 A12 12 0 0 1 148 44 V100 Z\"/><path class=\"f-accent\" opacity=\"0.28\" d=\"M168 100 V44 A12 12 0 0 1 192 44 V100 Z\"/><rect class=\"f\" x=\"16\" y=\"20\" width=\"20\" height=\"80\"/><rect class=\"f\" x=\"60\" y=\"20\" width=\"20\" height=\"80\"/><rect class=\"f\" x=\"104\" y=\"20\" width=\"20\" height=\"80\"/><rect class=\"f\" x=\"148\" y=\"20\" width=\"20\" height=\"80\"/><rect class=\"f\" x=\"192\" y=\"20\" width=\"20\" height=\"80\"/></svg></div></div></div>"
      },
      what: "Alexander's fourth property says that in living structures a repeating unit almost always alternates with a second structure that also repeats. The space between the columns is itself a repeating element, and it is doing as much work as the columns. Straight copying of one unit produces a mechanical row; alternation produces a rhythm. Composition teaching arrives at the same pattern from the other direction at 105, where alternation is a rhythm type; the difference is that Alexander insists the interval is one of the repeating elements.",
      why: "Alternation gives you the regularity of a pattern without the deadness of a stamp. It also forces you to design the interval, which is the part people usually leave to chance.",
      how: [
        "When you repeat something, name the counter-element that repeats between the copies and design it.",
        "Vary what alternates: solid and void, wide and narrow, loud and quiet.",
        "Check that the interval has a shape of its own, not just an absence.",
        "If a row feels dead, the fix is usually the gap, not the unit."
      ],
      example: "Alexander's illustration is a sixteenth-century Ottoman figured velvet. In building terms, a Venetian palazzo arcade reads as pier, opening, pier, opening, with both members shaped deliberately.",
      numbers: "",
      pitfall: "Alternation can slide into a chequerboard, where the two elements are so equal that neither leads. One of the two should be dominant.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
      verify: { status: "verified", note: "Definition checked against a published summary of Book One's chapter on the fifteen properties in nature, which quotes Alexander on repeating units alternating with a second repeating structure. Example taken from Alexander's own properties page." },
      belongs: { verdict: "core", why: "It corrects the most common mistake in pattern making, which is designing the marks and ignoring the intervals." },
      related: [917, 921, 924, 105]
    },
    {
      n: 917,
      title: "Positive space",
      aka: ["Convex space", "Shaped void"],
      oneLine: "Every piece of space, including the leftovers, should have a definite shape of its own.",
      demo: {
        caption: "The tint is the space between the buildings. Left it is a set of slivers; right it is one shaped room.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Space left over</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 150\"><rect class=\"f-accent\" x=\"0\" y=\"0\" width=\"240\" height=\"150\" opacity=\"0.16\"/><rect class=\"f\" x=\"10\" y=\"10\" width=\"66\" height=\"44\"/><rect class=\"f\" x=\"80\" y=\"4\" width=\"54\" height=\"34\"/><rect class=\"f\" x=\"138\" y=\"14\" width=\"60\" height=\"52\"/><rect class=\"f\" x=\"6\" y=\"60\" width=\"42\" height=\"74\"/><rect class=\"f\" x=\"98\" y=\"44\" width=\"34\" height=\"92\"/><rect class=\"f\" x=\"140\" y=\"72\" width=\"52\" height=\"26\"/><rect class=\"f\" x=\"200\" y=\"74\" width=\"34\" height=\"60\"/><rect class=\"f\" x=\"58\" y=\"92\" width=\"32\" height=\"44\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Space with a shape</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 150\"><rect class=\"f-accent\" x=\"0\" y=\"0\" width=\"240\" height=\"150\" opacity=\"0.16\"/><rect class=\"f\" x=\"10\" y=\"10\" width=\"62\" height=\"38\"/><rect class=\"f\" x=\"76\" y=\"10\" width=\"88\" height=\"38\"/><rect class=\"f\" x=\"168\" y=\"10\" width=\"62\" height=\"38\"/><rect class=\"f\" x=\"10\" y=\"48\" width=\"44\" height=\"92\"/><rect class=\"f\" x=\"186\" y=\"48\" width=\"44\" height=\"92\"/><rect class=\"f\" x=\"58\" y=\"104\" width=\"40\" height=\"36\"/><rect class=\"f\" x=\"102\" y=\"104\" width=\"38\" height=\"36\"/><rect class=\"f\" x=\"144\" y=\"104\" width=\"38\" height=\"36\"/></svg></div></div></div>"
      },
      what: "Alexander calls this the hardest of the fifteen to grasp. A well-formed thing is created by the well-formed things next to it: the space around an object presses inward and gives the object its shape. In a coherent whole, the wholes and the spaces between them form an unbroken continuum, and no space is merely left over. Alexander links this to convexity and compactness of the resulting shapes.",
      why: "Once you start judging the gaps as shapes, weak layouts become obvious. Awkward space is the most reliable early warning that a plan or a page is not resolved.",
      how: [
        "Squint at the negative space and ask whether each piece has a name and a shape.",
        "Reject shapes that are thin, spiky or accidental; push the surrounding elements until the void is compact.",
        "Design courtyards, forecourts and white space as rooms with edges, not as setback left after the building.",
        "Invert your artwork to black and white and look only at the ground."
      ],
      example: "Alexander uses a Matisse cut-paper figure, where the white around the figure is as carefully shaped as the blue. In cities, the difference between a piazza in Siena and the space around a tower block is exactly this.",
      numbers: "",
      pitfall: "Suburban site plans and slide layouts both fail here in the same way: objects are placed first and the space becomes residue. By then it is too late to fix without moving the objects.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
      verify: { status: "verified", note: "Alexander's own page on the fifteen properties gives the Matisse example and the wording about surroundings shaping the thing; a published summary of Book One supplies the unbroken continuum phrasing." },
      belongs: { verdict: "core", why: "This is the architectural statement of figure and ground, and it is the single most portable of the fifteen properties." },
      related: [914, 925, 941, 121]
    },
    {
      n: 918,
      title: "Good shape",
      aka: ["Coherent form"],
      oneLine: "A good shape is itself built out of good smaller shapes, with one main centre.",
      demo: {
        caption: "Each shape is cut into its parts below. The arch gives four pieces that hold on their own; the other gives slivers.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Parts fall apart</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 180\"><path class=\"f\" d=\"M18 104 L34 30 L46 72 L74 22 L84 86 L112 34 L120 96 L152 44 L146 92 L182 58 L172 104 Z\"/><path class=\"s-mute\" d=\"M6 116 H234\" stroke-dasharray=\"3 4\"/><text class=\"t\" x=\"6\" y=\"130\">ITS PARTS</text><path class=\"f\" d=\"M28 138 L36 136 L40 172 L30 172 Z\"/><path class=\"f\" d=\"M70 136 L76 172 L68 172 Z\"/><path class=\"f\" d=\"M104 138 H136 V146 H114 V158 H130 V166 H104 Z\"/><path class=\"f\" d=\"M170 136 L176 138 L168 172 L162 170 Z\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Parts hold on their own</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 180\"><path class=\"s-mute\" d=\"M60 104 H180\"/><path class=\"f\" d=\"M72 62 A48 48 0 0 1 168 62 L150 62 A30 30 0 0 0 90 62 Z\"/><rect class=\"f\" x=\"72\" y=\"62\" width=\"18\" height=\"42\"/><rect class=\"f\" x=\"150\" y=\"62\" width=\"18\" height=\"42\"/><path class=\"f-accent\" d=\"M113.3 14.5 A48 48 0 0 1 126.7 14.5 L124.2 32.3 A30 30 0 0 0 115.8 32.3 Z\"/><path class=\"s-mute\" d=\"M6 116 H234\" stroke-dasharray=\"3 4\"/><text class=\"t\" x=\"6\" y=\"130\">ITS PARTS</text><rect class=\"f\" x=\"24\" y=\"138\" width=\"16\" height=\"34\"/><path class=\"f\" d=\"M60 136 L82 140 L78 172 L62 168 Z\"/><path class=\"f-accent\" d=\"M104 136 H130 L124 172 H110 Z\"/><rect class=\"f\" x=\"158\" y=\"136\" width=\"40\" height=\"10\"/><rect class=\"f\" x=\"162\" y=\"146\" width=\"32\" height=\"26\"/></svg></div></div></div>"
      },
      what: "Alexander's sixth property is recursive. A shape counts as good when it has a major centre intensified by minor centres, and when the parts you can pick out of it are themselves good shapes. The test is whether the form can be decomposed into pieces that each hold together, all the way down, rather than whether it looks smooth or novel.",
      why: "It gives you a way to criticise a shape that is more useful than liking it or not. If a logo, a plan or a chart form falls apart when you name its parts, the shape is weak, and no amount of finish will rescue it.",
      how: [
        "Break the shape into named parts and check each part on its own.",
        "Prefer forms that are simple enough to describe in a sentence.",
        "Give the whole one dominant centre rather than several equal lumps.",
        "Redraw at thumbnail size; a good shape survives, a fussy one turns to mush."
      ],
      example: "Alexander illustrates the property with a Greek sail. A Roman arch works the same way: the arch, the springing, the voussoirs and the keystone are each coherent shapes in their own right.",
      numbers: "",
      pitfall: "Good shape gets read as simple shape, and people flatten everything into circles and squares. Alexander's test is about internal structure, not about reducing the part count.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
      verify: { status: "verified", note: "The major-centre-intensified-by-minor-centres definition comes from a published summary quoting Book One's chapter on the properties in nature; the Greek sail example is from Alexander's own properties page." },
      belongs: { verdict: "core", why: "It gives a repeatable test for form quality in logos, icons, furniture and plans." },
      related: [914, 919, 926]
    },
    {
      n: 919,
      title: "Local symmetries",
      aka: ["Small symmetries", "Sub-symmetries"],
      oneLine: "Living structures are full of small symmetries and rarely symmetrical overall.",
      demo: {
        caption: "Left, one axis governs everything. Right, each room is symmetrical about its own short axis and none of them line up.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One axis over the whole</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 150\"><path class=\"s-accent\" d=\"M120 8 V142\" stroke-dasharray=\"4 4\"/><rect class=\"s\" x=\"98\" y=\"22\" width=\"44\" height=\"106\" fill=\"none\"/><rect class=\"s\" x=\"34\" y=\"46\" width=\"58\" height=\"58\" fill=\"none\"/><rect class=\"s\" x=\"148\" y=\"46\" width=\"58\" height=\"58\" fill=\"none\"/><rect class=\"s\" x=\"10\" y=\"64\" width=\"18\" height=\"22\" fill=\"none\"/><rect class=\"s\" x=\"212\" y=\"64\" width=\"18\" height=\"22\" fill=\"none\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Small axes, no overall one</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 150\"><rect class=\"s\" x=\"12\" y=\"16\" width=\"64\" height=\"46\" fill=\"none\"/><path class=\"s-accent\" d=\"M44 18 V28\" stroke-dasharray=\"3 3\"/><rect class=\"f-mute\" x=\"28\" y=\"35\" width=\"8\" height=\"8\"/><rect class=\"f-mute\" x=\"52\" y=\"35\" width=\"8\" height=\"8\"/><rect class=\"s\" x=\"88\" y=\"10\" width=\"52\" height=\"52\" fill=\"none\"/><path class=\"s-accent\" d=\"M114 12 V22\" stroke-dasharray=\"3 3\"/><rect class=\"f-mute\" x=\"96\" y=\"32\" width=\"8\" height=\"8\"/><rect class=\"f-mute\" x=\"120\" y=\"32\" width=\"8\" height=\"8\"/><rect class=\"s\" x=\"152\" y=\"24\" width=\"72\" height=\"40\" fill=\"none\"/><path class=\"s-accent\" d=\"M188 26 V36\" stroke-dasharray=\"3 3\"/><rect class=\"f-mute\" x=\"172\" y=\"44\" width=\"8\" height=\"8\"/><rect class=\"f-mute\" x=\"196\" y=\"44\" width=\"8\" height=\"8\"/><rect class=\"s\" x=\"24\" y=\"76\" width=\"58\" height=\"58\" fill=\"none\"/><path class=\"s-accent\" d=\"M53 78 V88\" stroke-dasharray=\"3 3\"/><rect class=\"f-mute\" x=\"37\" y=\"100\" width=\"8\" height=\"8\"/><rect class=\"f-mute\" x=\"61\" y=\"100\" width=\"8\" height=\"8\"/><rect class=\"s\" x=\"94\" y=\"80\" width=\"76\" height=\"44\" fill=\"none\"/><path class=\"s-accent\" d=\"M132 82 V92\" stroke-dasharray=\"3 3\"/><rect class=\"f-mute\" x=\"116\" y=\"98\" width=\"8\" height=\"8\"/><rect class=\"f-mute\" x=\"140\" y=\"98\" width=\"8\" height=\"8\"/><rect class=\"s\" x=\"182\" y=\"74\" width=\"46\" height=\"60\" fill=\"none\"/><path class=\"s-accent\" d=\"M205 76 V86\" stroke-dasharray=\"3 3\"/><rect class=\"f-mute\" x=\"189\" y=\"100\" width=\"8\" height=\"8\"/><rect class=\"f-mute\" x=\"213\" y=\"100\" width=\"8\" height=\"8\"/></svg></div></div></div>"
      },
      what: "Alexander's seventh property inverts the usual assumption. Grand overall symmetry is uncommon in places that feel alive, but small symmetries are everywhere, because a part will be symmetrical unless a real condition forces it not to be. His formulation is that asymmetry only occurs when it is forced. So symmetry becomes the default at the level of the room, the window, the bay, and it is broken where the site, the use or the structure demands.",
      why: "It resolves the tired argument between symmetry and asymmetry. You get calm at small scale and freedom at large scale, which is how most well-loved buildings and most good editorial layouts actually behave.",
      how: [
        "Make each small unit symmetrical unless you have a reason not to.",
        "Let the overall composition follow the constraints rather than forcing global balance.",
        "When you break a small symmetry, be able to say what forced it.",
        "Do not impose an axis on the whole thing just to look ordered."
      ],
      example: "Alexander uses the plan of the Alhambra: dozens of locally symmetrical courts and rooms, with no governing overall axis. English market towns behave the same way, with symmetrical shopfronts on a crooked street.",
      numbers: "",
      pitfall: "The property is often quoted as an argument against symmetry altogether, which is the opposite of what it says. It argues for more symmetry, just smaller.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
      verify: { status: "verified", note: "The wording about asymmetry only occurring when forced comes from a published summary quoting Book One; the Alhambra plan is Alexander's own example on his fifteen-properties page." },
      belongs: { verdict: "core", why: "It is a directly usable rule for composition at any scale, and it settles a recurring false choice." },
      related: [918, 923, 42]
    },
    {
      n: 920,
      title: "Deep interlock and ambiguity",
      aka: ["Interlocking edges"],
      oneLine: "Adjacent areas should hook into each other, with some parts belonging to both.",
      demo: {
        caption: "Right: each side reaches into the other, and the band at the join belongs to both. Left: one clean cut, no overlap.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Butt joint</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 140\"><rect class=\"f-mute\" x=\"10\" y=\"20\" width=\"110\" height=\"90\" opacity=\"0.3\"/><rect class=\"f-mute\" x=\"120\" y=\"20\" width=\"110\" height=\"90\" opacity=\"0.6\"/><path class=\"s\" d=\"M120 20 V110\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Interlocked, with a shared band</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 140\"><path class=\"f-mute\" opacity=\"0.3\" d=\"M10 20 H120 V32 H150 V52 H120 V78 H150 V98 H120 V110 H10 Z\"/><path class=\"f-mute\" opacity=\"0.6\" d=\"M230 20 H120 V32 H150 V52 H120 V78 H150 V98 H120 V110 H230 Z\"/><rect class=\"f-accent\" x=\"120\" y=\"20\" width=\"30\" height=\"90\" opacity=\"0.3\"/><path class=\"s-mute\" d=\"M120 114 V120 H150 V114\"/><text class=\"t\" x=\"135\" y=\"134\" text-anchor=\"middle\">BOTH</text></svg></div></div></div>"
      },
      what: "Alexander's eighth property describes what happens at a good junction. Neighbouring systems interact along an enlarged surface rather than a clean cut, fingers of one reaching into the other, and some sub-parts genuinely belong to two overlapping wholes at once. The ambiguity is the point: the arcade is part of the building and part of the street, and you cannot say which.",
      why: "Interlocked edges hold two things together without a visible join. They also create the in-between places people actually use, which is where most of the life in a building happens.",
      how: [
        "Design the join as a set of overlaps rather than a single line.",
        "Give at least one element dual membership, such as a porch, a colonnade or a shared column in a table.",
        "Let planting, paving or type run across a boundary rather than stopping at it.",
        "Avoid the clean butt joint when two zones need to work together."
      ],
      example: "Alexander uses Persian tilework from Tabriz. In buildings the plainest case is a deep veranda, which reads as room from inside and as street furniture from outside.",
      numbers: "",
      pitfall: "Interlock at the wrong scale just looks messy. The overlaps have to be big enough to be occupied, not decorative crenellation on a plan.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
      verify: { status: "verified", note: "Definition checked against a published summary quoting Book One on neighbouring systems interacting along enlarged surfaces and sub-systems belonging to two overlapping larger systems; the Tabriz tilework example is from Alexander's own page." },
      belongs: { verdict: "core", why: "The idea of a shared, doubly owned zone is usable wherever two systems meet, including navigation, tables and modular components." },
      related: [915, 931, 936]
    },
    {
      n: 921,
      title: "Contrast (as a property of wholeness)",
      aka: ["Contrast"],
      oneLine: "Centres need genuine opposites next to them, or they never become distinct.",
      demo: {
        caption: "Same eight blocks in the same places. Only the tones changed, and on the right one of them becomes a thing.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Every tone in the middle</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 130\"><rect class=\"f\" x=\"12\" y=\"16\" width=\"44\" height=\"40\" opacity=\"0.42\"/><rect class=\"f\" x=\"68\" y=\"16\" width=\"44\" height=\"40\" opacity=\"0.42\"/><rect class=\"f\" x=\"124\" y=\"16\" width=\"44\" height=\"40\" opacity=\"0.42\"/><rect class=\"f\" x=\"180\" y=\"16\" width=\"44\" height=\"40\" opacity=\"0.42\"/><rect class=\"f\" x=\"12\" y=\"70\" width=\"44\" height=\"40\" opacity=\"0.42\"/><rect class=\"f\" x=\"68\" y=\"70\" width=\"44\" height=\"40\" opacity=\"0.42\"/><rect class=\"f\" x=\"124\" y=\"70\" width=\"44\" height=\"40\" opacity=\"0.42\"/><rect class=\"f\" x=\"180\" y=\"70\" width=\"44\" height=\"40\" opacity=\"0.42\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One real opposite</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 130\"><rect class=\"f\" x=\"12\" y=\"16\" width=\"44\" height=\"40\" opacity=\"0.12\"/><rect class=\"f\" x=\"68\" y=\"16\" width=\"44\" height=\"40\" opacity=\"1\"/><rect class=\"f\" x=\"124\" y=\"16\" width=\"44\" height=\"40\" opacity=\"0.12\"/><rect class=\"f\" x=\"180\" y=\"16\" width=\"44\" height=\"40\" opacity=\"0.12\"/><rect class=\"f\" x=\"12\" y=\"70\" width=\"44\" height=\"40\" opacity=\"0.12\"/><rect class=\"f\" x=\"68\" y=\"70\" width=\"44\" height=\"40\" opacity=\"0.55\"/><rect class=\"f\" x=\"124\" y=\"70\" width=\"44\" height=\"40\" opacity=\"0.12\"/><rect class=\"f\" x=\"180\" y=\"70\" width=\"44\" height=\"40\" opacity=\"0.12\"/></svg></div></div></div>"
      },
      what: "Alexander's ninth property claims that natural systems get their organisation from the interaction of opposites, and that a centre needs something unlike itself nearby before it can be felt at all. This is not contrast as visual seasoning. It is the structural claim that difference is what allows a part to separate from its background and become a thing. The composition principle of the same name is at 97; that one tells you to make differences unmistakable, while this one says the difference is what brings the element into existence.",
      why: "It explains why gently graded schemes go dead. If everything is mid-tone, mid-size and mid-weight, no centre forms and the eye finds nothing. Real opposites give you hierarchy for free.",
      how: [
        "For each main element, name the opposite quality sitting next to it.",
        "Put dark against light, dense against empty, quiet against loud.",
        "Increase the difference until the two things read as different kinds, not two settings of the same dial.",
        "Keep the number of contrast pairs small so they stay legible."
      ],
      example: "Alexander uses a Persian bowl. In cities, the value of a small dark alley opening onto a bright square is the same effect at building scale.",
      numbers: "",
      pitfall: "Contrast gets confused with clutter. Adding more different things is not contrast; contrast is a small number of clear oppositions.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
      verify: { status: "verified", note: "The interaction-of-opposites definition comes from a published summary quoting Book One's chapter on the properties in nature. The master list adds the clarifier in brackets; the property itself is simply called Contrast." },
      belongs: { verdict: "core", why: "Contrast is a design fundamental in every medium, and Alexander's framing explains why it produces structure rather than just interest." },
      related: [914, 922, 925, 97]
    },
    {
      n: 922,
      title: "Gradients",
      aka: ["Graded change", "Intimacy gradient"],
      oneLine: "Qualities should change gradually across a whole rather than switching in one step.",
      demo: {
        caption: "Both run from public to private. The lower one changes by degrees, so you can feel where you are without a sign.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 520 180\"><text class=\"t\" x=\"0\" y=\"14\">SWITCHED IN ONE STEP</text><rect class=\"f\" x=\"0\" y=\"24\" width=\"260\" height=\"42\" opacity=\"0.1\"/><rect class=\"f\" x=\"260\" y=\"24\" width=\"260\" height=\"42\" opacity=\"0.7\"/><text class=\"t\" x=\"130\" y=\"82\" text-anchor=\"middle\">PUBLIC</text><text class=\"t\" x=\"390\" y=\"82\" text-anchor=\"middle\">PRIVATE</text><text class=\"t\" x=\"0\" y=\"110\">GRADED ACROSS FIVE</text><rect class=\"f\" x=\"0\" y=\"120\" width=\"104\" height=\"42\" opacity=\"0.08\"/><rect class=\"f\" x=\"104\" y=\"120\" width=\"104\" height=\"42\" opacity=\"0.22\"/><rect class=\"f\" x=\"208\" y=\"120\" width=\"104\" height=\"42\" opacity=\"0.38\"/><rect class=\"f\" x=\"312\" y=\"120\" width=\"104\" height=\"42\" opacity=\"0.56\"/><rect class=\"f\" x=\"416\" y=\"120\" width=\"104\" height=\"42\" opacity=\"0.76\"/><text class=\"t\" x=\"52\" y=\"176\" text-anchor=\"middle\">PORCH</text><text class=\"t\" x=\"156\" y=\"176\" text-anchor=\"middle\">HALL</text><text class=\"t\" x=\"260\" y=\"176\" text-anchor=\"middle\">PARLOUR</text><text class=\"t\" x=\"364\" y=\"176\" text-anchor=\"middle\">KITCHEN</text><text class=\"t\" x=\"468\" y=\"176\" text-anchor=\"middle\">BEDROOM</text></svg></div>"
      },
      what: "Alexander's tenth property observes that in living structure a quantity varies systematically through space: sizes get smaller towards an edge, windows get closer together as a wall approaches a corner, rooms get more private as you go deeper into a house. The change is graded rather than binary. His pattern 127, Intimacy Gradient, is the same idea written as a building rule, arranging rooms from public at the entrance to private at the back.",
      why: "A gradient tells people where they are without a sign. It also gives a designer a way to organise many elements with one rule instead of a decision per element.",
      how: [
        "Pick one quality and vary it monotonically across the whole: size, spacing, privacy, brightness.",
        "Sequence rooms and screens from most public to most private in the order people meet them.",
        "Use graded change instead of a hard boundary when two zones must remain connected.",
        "Check the gradient is readable; if nobody can feel the direction, it is just noise."
      ],
      example: "Pattern 127 in A Pattern Language, Intimacy Gradient, orders the spaces of a building so public areas sit nearest the entrance and private areas furthest from it. A traditional English house does this with porch, hall, parlour, kitchen, bedroom.",
      numbers: "",
      pitfall: "Gradients need an obvious direction. Varying a quality randomly and calling it a gradient produces a layout that looks broken rather than graded.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002); the Intimacy Gradient pattern is number 127 in A Pattern Language (1977)",
      verify: { status: "verified", note: "Property definition from a published summary quoting Book One; pattern number 127 for Intimacy Gradient confirmed against two independent pattern indexes, including patternlanguage.cc." },
      belongs: { verdict: "core", why: "Graded change is a general ordering device, used in type scales, spacing systems and information architecture as well as in plans." },
      related: [913, 921, 931, 928]
    },
    {
      n: 923,
      title: "Roughness",
      aka: ["Tolerant irregularity"],
      oneLine: "Small irregularities that come from fitting each part to its real conditions.",
      demo: {
        caption: "Same room, out of square on the right. Left holds one tile size and leaves an offcut; right varies each course slightly.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Grid held, offcut at the wall</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 150\"><path class=\"f-accent\" opacity=\"0.45\" d=\"M204 14 H224 L212 138 H204 Z\"/><rect class=\"f-mute\" x=\"12\" y=\"14\" width=\"46\" height=\"40\"/><rect class=\"f-mute\" x=\"60\" y=\"14\" width=\"46\" height=\"40\"/><rect class=\"f-mute\" x=\"108\" y=\"14\" width=\"46\" height=\"40\"/><rect class=\"f-mute\" x=\"156\" y=\"14\" width=\"46\" height=\"40\"/><rect class=\"f-mute\" x=\"12\" y=\"56\" width=\"46\" height=\"40\"/><rect class=\"f-mute\" x=\"60\" y=\"56\" width=\"46\" height=\"40\"/><rect class=\"f-mute\" x=\"108\" y=\"56\" width=\"46\" height=\"40\"/><rect class=\"f-mute\" x=\"156\" y=\"56\" width=\"46\" height=\"40\"/><rect class=\"f-mute\" x=\"12\" y=\"98\" width=\"46\" height=\"40\"/><rect class=\"f-mute\" x=\"60\" y=\"98\" width=\"46\" height=\"40\"/><rect class=\"f-mute\" x=\"108\" y=\"98\" width=\"46\" height=\"40\"/><rect class=\"f-mute\" x=\"156\" y=\"98\" width=\"46\" height=\"40\"/><path class=\"s\" d=\"M12 14 H224 L212 138 H12 Z\" fill=\"none\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Courses adjusted to the room</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 150\"><rect class=\"f-mute\" x=\"12\" y=\"14\" width=\"50.5\" height=\"40\"/><rect class=\"f-mute\" x=\"64.5\" y=\"14\" width=\"50.5\" height=\"40\"/><rect class=\"f-mute\" x=\"117\" y=\"14\" width=\"50.5\" height=\"40\"/><rect class=\"f-mute\" x=\"169.5\" y=\"14\" width=\"50.5\" height=\"40\"/><rect class=\"f-mute\" x=\"12\" y=\"56\" width=\"49.5\" height=\"40\"/><rect class=\"f-mute\" x=\"63.5\" y=\"56\" width=\"49.5\" height=\"40\"/><rect class=\"f-mute\" x=\"115\" y=\"56\" width=\"49.5\" height=\"40\"/><rect class=\"f-mute\" x=\"166.5\" y=\"56\" width=\"49.5\" height=\"40\"/><rect class=\"f-mute\" x=\"12\" y=\"98\" width=\"48.5\" height=\"40\"/><rect class=\"f-mute\" x=\"62.5\" y=\"98\" width=\"48.5\" height=\"40\"/><rect class=\"f-mute\" x=\"113\" y=\"98\" width=\"48.5\" height=\"40\"/><rect class=\"f-mute\" x=\"163.5\" y=\"98\" width=\"48.5\" height=\"40\"/><path class=\"s\" d=\"M12 14 H224 L212 138 H12 Z\" fill=\"none\"/></svg></div></div></div>"
      },
      what: "Alexander's eleventh property is the most misread. Roughness names the partial misfit between a clean geometric order and the actual space it has to occupy, and Alexander argues that allowing that misfit produces a greater overall regularity than forcing perfection. Sloppiness and surface texture are different things. A handmade tile floor that adjusts course by course fits the room better than a machine-cut floor that leaves an ugly strip at one wall.",
      why: "It gives you permission to let the ideal system bend where reality pushes back, and it explains why perfectly uniform work often feels lifeless. The alternative is a design that is exactly right in the abstract and wrong in the room.",
      how: [
        "Let the last unit in a run absorb the leftover rather than forcing every unit to match.",
        "Adjust individual elements to local conditions instead of holding the grid at all costs.",
        "Distribute the error across many small adjustments rather than dumping it in one place.",
        "Keep the underlying order visible; roughness only works against a clear system."
      ],
      example: "A stone-flagged floor in an old church, where the courses shift slightly to meet a wall that is not square. A hand-laid brick path that widens where the ground falls away does the same thing.",
      numbers: "",
      pitfall: "Designers use roughness as cover for carelessness, or fake it with random offsets. Alexander's roughness is a response to a real constraint, so if you cannot say what forced it, it is decoration.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
      verify: { status: "verified", note: "The partial-misfit definition and the claim that it produces greater overall regularity come from a published summary quoting Book One's chapter on the properties in nature. Alexander's own properties page shows a German example for roughness, but I could not establish what it depicts, so the earlier claim that he illustrates the property with a German building has been dropped and the entry now uses unattributed everyday cases." },
      belongs: { verdict: "core", why: "It is the principled answer to when a grid should be broken, which every layout designer needs and few can articulate." },
      related: [919, 926, 42]
    },
    {
      n: 924,
      title: "Echoes",
      aka: ["Family resemblance"],
      oneLine: "The same angles and proportions recur throughout a whole, so parts look related.",
      demo: {
        caption: "Four marks in each set. On the right they share one corner radius and one angle, so they read as a family.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Each part drawn fresh</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 120\"><rect class=\"s\" x=\"12\" y=\"18\" width=\"48\" height=\"48\" rx=\"0\" fill=\"none\"/><rect class=\"s\" x=\"72\" y=\"18\" width=\"48\" height=\"48\" rx=\"14\" fill=\"none\"/><rect class=\"s\" x=\"132\" y=\"18\" width=\"48\" height=\"48\" rx=\"4\" fill=\"none\"/><rect class=\"s\" x=\"192\" y=\"18\" width=\"48\" height=\"48\" rx=\"22\" fill=\"none\"/><path class=\"s\" d=\"M24 46 L36 38 L48 46\"/><path class=\"s\" d=\"M96 54 V32 M86 44 L96 32 L106 44\"/><path class=\"s\" d=\"M144 48 L168 40\"/><path class=\"s\" d=\"M204 46 L216 30 L228 46 M204 56 L216 40 L228 56\"/><text class=\"t\" x=\"12\" y=\"90\">RADIUS 0 / 14 / 4 / 22</text><text class=\"t\" x=\"12\" y=\"106\">ANGLE 34 / 50 / 18 / 53</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One radius, one angle, reused</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 120\"><rect class=\"s\" x=\"12\" y=\"18\" width=\"48\" height=\"48\" rx=\"8\" fill=\"none\"/><rect class=\"s\" x=\"72\" y=\"18\" width=\"48\" height=\"48\" rx=\"8\" fill=\"none\"/><rect class=\"s\" x=\"132\" y=\"18\" width=\"48\" height=\"48\" rx=\"8\" fill=\"none\"/><rect class=\"s\" x=\"192\" y=\"18\" width=\"48\" height=\"48\" rx=\"8\" fill=\"none\"/><path class=\"s\" d=\"M24 48 L36 36 L48 48\"/><path class=\"s\" d=\"M96 54 V34 M88 42 L96 34 L104 42\"/><path class=\"s\" d=\"M144 30 L168 54\"/><path class=\"s\" d=\"M204 44 L216 32 L228 44 M204 54 L216 42 L228 54\"/><text class=\"t\" x=\"12\" y=\"90\">RADIUS 8 / 8 / 8 / 8</text><text class=\"t\" x=\"12\" y=\"106\">ANGLE 45 / 45 / 45 / 45</text></svg></div></div></div>"
      },
      what: "Alexander's twelfth property says that in coherent structures the same typical angles and proportions repeat again and again at different scales and in different elements, and that this repetition determines the character of the place. The parts are not identical copies; they share a family likeness, because the same process made all of them.",
      why: "Echoes are what make a set of different things read as one thing. They are cheaper than uniformity and more convincing, because they survive the moment when a new element has to be added.",
      how: [
        "Fix a small set of angles, radii and proportions and reuse them across every element.",
        "Derive new components from existing ones rather than drawing them fresh.",
        "Test a new part by putting it next to an old one; if the family likeness is missing, adjust the shared parameters.",
        "Let the echo carry across scales, from the whole plan down to a handle."
      ],
      example: "Alexander uses the trulli of Alberobello in Puglia, where the same cone and the same wall thickness recur in every building. A modern design system does the same job with one corner radius and one angle used in every icon.",
      numbers: "",
      pitfall: "Echo is not repetition. If you clone the same element everywhere you get uniformity, which is duller and more brittle than a shared family of proportions.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
      verify: { status: "verified", note: "The typical-angles-and-proportions definition comes from a published summary quoting Book One; the Alberobello example is from Alexander's own fifteen-properties page." },
      belongs: { verdict: "core", why: "Family resemblance across components is the working basis of every design system and brand identity." },
      related: [913, 916, 918]
    },
    {
      n: 925,
      title: "The void",
      aka: ["The great emptiness"],
      oneLine: "A large quiet emptiness at the heart, against which the detail makes sense.",
      demo: {
        caption: "Forty marks in both panels. On the right they are pushed outwards, and the emptiness they leave is doing the work.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Detail spread everywhere</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 150\"><g class=\"f\" opacity=\"0.7\"><rect x=\"10\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"40\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"70\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"100\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"130\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"160\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"190\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"220\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"10\" y=\"44\" width=\"8\" height=\"8\"/><rect x=\"40\" y=\"44\" width=\"8\" height=\"8\"/><rect x=\"70\" y=\"44\" width=\"8\" height=\"8\"/><rect x=\"100\" y=\"44\" width=\"8\" height=\"8\"/><rect x=\"130\" y=\"44\" width=\"8\" height=\"8\"/><rect x=\"160\" y=\"44\" width=\"8\" height=\"8\"/><rect x=\"190\" y=\"44\" width=\"8\" height=\"8\"/><rect x=\"220\" y=\"44\" width=\"8\" height=\"8\"/><rect x=\"10\" y=\"74\" width=\"8\" height=\"8\"/><rect x=\"40\" y=\"74\" width=\"8\" height=\"8\"/><rect x=\"70\" y=\"74\" width=\"8\" height=\"8\"/><rect x=\"100\" y=\"74\" width=\"8\" height=\"8\"/><rect x=\"130\" y=\"74\" width=\"8\" height=\"8\"/><rect x=\"160\" y=\"74\" width=\"8\" height=\"8\"/><rect x=\"190\" y=\"74\" width=\"8\" height=\"8\"/><rect x=\"220\" y=\"74\" width=\"8\" height=\"8\"/><rect x=\"10\" y=\"104\" width=\"8\" height=\"8\"/><rect x=\"40\" y=\"104\" width=\"8\" height=\"8\"/><rect x=\"70\" y=\"104\" width=\"8\" height=\"8\"/><rect x=\"100\" y=\"104\" width=\"8\" height=\"8\"/><rect x=\"130\" y=\"104\" width=\"8\" height=\"8\"/><rect x=\"160\" y=\"104\" width=\"8\" height=\"8\"/><rect x=\"190\" y=\"104\" width=\"8\" height=\"8\"/><rect x=\"220\" y=\"104\" width=\"8\" height=\"8\"/><rect x=\"10\" y=\"134\" width=\"8\" height=\"8\"/><rect x=\"40\" y=\"134\" width=\"8\" height=\"8\"/><rect x=\"70\" y=\"134\" width=\"8\" height=\"8\"/><rect x=\"100\" y=\"134\" width=\"8\" height=\"8\"/><rect x=\"130\" y=\"134\" width=\"8\" height=\"8\"/><rect x=\"160\" y=\"134\" width=\"8\" height=\"8\"/><rect x=\"190\" y=\"134\" width=\"8\" height=\"8\"/><rect x=\"220\" y=\"134\" width=\"8\" height=\"8\"/></g></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">The same detail round an emptiness</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 150\"><g class=\"f\" opacity=\"0.7\"><rect x=\"10\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"40\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"70\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"100\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"130\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"160\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"190\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"220\" y=\"14\" width=\"8\" height=\"8\"/><rect x=\"10\" y=\"30\" width=\"8\" height=\"8\"/><rect x=\"40\" y=\"30\" width=\"8\" height=\"8\"/><rect x=\"70\" y=\"30\" width=\"8\" height=\"8\"/><rect x=\"100\" y=\"30\" width=\"8\" height=\"8\"/><rect x=\"130\" y=\"30\" width=\"8\" height=\"8\"/><rect x=\"160\" y=\"30\" width=\"8\" height=\"8\"/><rect x=\"190\" y=\"30\" width=\"8\" height=\"8\"/><rect x=\"220\" y=\"30\" width=\"8\" height=\"8\"/><rect x=\"10\" y=\"58\" width=\"8\" height=\"8\"/><rect x=\"26\" y=\"58\" width=\"8\" height=\"8\"/><rect x=\"204\" y=\"58\" width=\"8\" height=\"8\"/><rect x=\"220\" y=\"58\" width=\"8\" height=\"8\"/><rect x=\"10\" y=\"90\" width=\"8\" height=\"8\"/><rect x=\"26\" y=\"90\" width=\"8\" height=\"8\"/><rect x=\"204\" y=\"90\" width=\"8\" height=\"8\"/><rect x=\"220\" y=\"90\" width=\"8\" height=\"8\"/><rect x=\"10\" y=\"118\" width=\"8\" height=\"8\"/><rect x=\"40\" y=\"118\" width=\"8\" height=\"8\"/><rect x=\"70\" y=\"118\" width=\"8\" height=\"8\"/><rect x=\"100\" y=\"118\" width=\"8\" height=\"8\"/><rect x=\"130\" y=\"118\" width=\"8\" height=\"8\"/><rect x=\"160\" y=\"118\" width=\"8\" height=\"8\"/><rect x=\"190\" y=\"118\" width=\"8\" height=\"8\"/><rect x=\"220\" y=\"118\" width=\"8\" height=\"8\"/><rect x=\"10\" y=\"134\" width=\"8\" height=\"8\"/><rect x=\"40\" y=\"134\" width=\"8\" height=\"8\"/><rect x=\"70\" y=\"134\" width=\"8\" height=\"8\"/><rect x=\"100\" y=\"134\" width=\"8\" height=\"8\"/><rect x=\"130\" y=\"134\" width=\"8\" height=\"8\"/><rect x=\"160\" y=\"134\" width=\"8\" height=\"8\"/><rect x=\"190\" y=\"134\" width=\"8\" height=\"8\"/><rect x=\"220\" y=\"134\" width=\"8\" height=\"8\"/></g></svg></div></div></div>"
      },
      what: "Alexander's thirteenth property observes that detailed structure tends to differentiate around the quiet of some larger, more stable system. In building terms that means one big calm empty place at the centre of the composition: a courtyard, a nave, a lake, a plain wall. The void is the still thing everything else is measured against, which is a job, not an absence of one.",
      why: "Without a void, a design with a lot of detail has nowhere to breathe and every part competes. One large emptiness makes the rest of the detail legible and stops the eye from being pulled in ten directions.",
      how: [
        "Reserve one genuinely large empty area and defend it against being filled.",
        "Put the void at the centre of the composition, not at the edges as margin.",
        "Keep the void plain; a courtyard full of features is not a void.",
        "Judge the size by contrast with the busiest part, not by a percentage."
      ],
      example: "Alexander uses the Mosque of Baybars in Cairo. Any cathedral close, or the empty floor of a Japanese tea room, works the same way.",
      numbers: "",
      pitfall: "Clients and stakeholders read a void as waste and ask for something to be put in it. Once it is filled, the reason the composition worked disappears and nobody can say why.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
      verify: { status: "verified", note: "The definition about smaller structures differentiating around the quiet of a larger stable system comes from a published summary quoting Book One; the Baybars image sits under the Egypt heading on Alexander's own properties page and is a plan of a courtyard mosque." },
      belongs: { verdict: "core", why: "It is the strongest available argument for large-scale white space and it applies to pages and screens as directly as to plans." },
      related: [917, 926, 40]
    },
    {
      n: 926,
      title: "Simplicity and inner calm",
      aka: ["Inner calm"],
      oneLine: "Keep taking things away until what remains is the simplest thing the conditions allow.",
      demo: {
        caption: "The right wall has one more element, not fewer. Take the peg rail away and the floor can no longer be swept.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Rail removed: cannot sweep</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 150\"><path class=\"s-mute\" d=\"M8 116 H232\"/><path class=\"s\" d=\"M24 116 V72 M24 74 H38 M24 94 H48 M48 94 V116\"/><path class=\"s\" d=\"M78 116 V72 M78 74 H92 M78 94 H102 M102 94 V116\"/><path class=\"s\" d=\"M132 116 V72 M132 74 H146 M132 94 H156 M156 94 V116\"/><path class=\"s\" d=\"M186 116 V72 M186 74 H200 M186 94 H210 M210 94 V116\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Rail kept: floor sweeps clear</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 150\"><path class=\"s-mute\" d=\"M8 116 H232\"/><path class=\"s-accent\" d=\"M14 52 H226 M30 52 V58 M84 52 V58 M138 52 V58 M192 52 V58\"/><path class=\"s\" d=\"M24 96 V52 M24 54 H38 M24 74 H48 M48 74 V96\"/><path class=\"s\" d=\"M78 96 V52 M78 54 H92 M78 74 H102 M102 74 V96\"/><path class=\"s\" d=\"M132 96 V52 M132 54 H146 M132 74 H156 M156 74 V96\"/><path class=\"s\" d=\"M186 96 V52 M186 54 H200 M186 74 H210 M210 74 V96\"/><text class=\"t\" x=\"14\" y=\"44\">PEG RAIL</text></svg></div></div></div>"
      },
      what: "Alexander's fourteenth property is his version of Occam's razor: each configuration occurring in nature is the simplest one consistent with its conditions. Note the second half. The target is not the fewest possible parts but the fewest that still satisfy every real requirement, which is a much harder test than minimalism and often ends up with more elements, not fewer.",
      why: "The rule gives you a stopping condition. You keep removing until removing the next thing breaks a requirement, and then you stop, which is a more defensible position than removing until it looks clean.",
      how: [
        "List the conditions the thing must satisfy before you start cutting.",
        "Remove one element at a time and check which condition it was serving.",
        "Stop when the next removal breaks something real, and write down why.",
        "Resist adding anything that serves no listed condition."
      ],
      example: "A Shaker meeting house: plain surfaces, no mouldings, but full-height peg rails because the chairs are hung on the wall to sweep the floor. Nothing decorative, nothing missing.",
      numbers: "",
      pitfall: "This overlaps heavily with less is more and with as little design as possible, and it is often quoted as a licence to strip. Alexander's version is conditional, so stripping past the conditions is a failure of the property, not an expression of it.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
      verify: { status: "verified", note: "The simplest-configuration-consistent-with-its-conditions wording is quoted from Book One in a published summary of the chapter on the properties in nature." },
      belongs: { verdict: "core", why: "It is a real design fundamental, though it repeats ground already covered by entries 4, 34 and 41; the value here is the conditional test." },
      related: [918, 923, 4, 34]
    },
    {
      n: 927,
      title: "Not-separateness",
      aka: ["Connectedness to surroundings"],
      oneLine: "A finished thing should melt into its surroundings rather than stand apart from them.",
      demo: {
        caption: "The dashed line is the neighbours' eaves. The right-hand infill is plainly new, yet it holds that line and the window spacing.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Dropped into the gap</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 140\"><path class=\"s-mute\" d=\"M4 116 H256\"/><rect class=\"s\" x=\"4\" y=\"52\" width=\"60\" height=\"64\" fill=\"none\"/><path class=\"s\" d=\"M4 52 L34 34 L64 52\"/><rect class=\"f-mute\" x=\"12\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"29\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"46\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"29\" y=\"92\" width=\"10\" height=\"24\"/><rect class=\"s\" x=\"68\" y=\"52\" width=\"60\" height=\"64\" fill=\"none\"/><path class=\"s\" d=\"M68 52 L98 34 L128 52\"/><rect class=\"f-mute\" x=\"76\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"93\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"110\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"93\" y=\"92\" width=\"10\" height=\"24\"/><rect class=\"s\" x=\"196\" y=\"52\" width=\"60\" height=\"64\" fill=\"none\"/><path class=\"s\" d=\"M196 52 L226 34 L256 52\"/><rect class=\"f-mute\" x=\"204\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"221\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"238\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"221\" y=\"92\" width=\"10\" height=\"24\"/><rect class=\"s\" x=\"132\" y=\"22\" width=\"60\" height=\"94\" fill=\"none\"/><rect class=\"f-mute\" x=\"140\" y=\"34\" width=\"44\" height=\"52\"/><path class=\"s-accent\" d=\"M0 52 H260\" stroke-dasharray=\"5 4\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">New, but on the same lines</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 140\"><path class=\"s-mute\" d=\"M4 116 H256\"/><rect class=\"s\" x=\"4\" y=\"52\" width=\"60\" height=\"64\" fill=\"none\"/><path class=\"s\" d=\"M4 52 L34 34 L64 52\"/><rect class=\"f-mute\" x=\"12\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"29\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"46\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"29\" y=\"92\" width=\"10\" height=\"24\"/><rect class=\"s\" x=\"68\" y=\"52\" width=\"60\" height=\"64\" fill=\"none\"/><path class=\"s\" d=\"M68 52 L98 34 L128 52\"/><rect class=\"f-mute\" x=\"76\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"93\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"110\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"93\" y=\"92\" width=\"10\" height=\"24\"/><rect class=\"s\" x=\"196\" y=\"52\" width=\"60\" height=\"64\" fill=\"none\"/><path class=\"s\" d=\"M196 52 L226 34 L256 52\"/><rect class=\"f-mute\" x=\"204\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"221\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"238\" y=\"64\" width=\"10\" height=\"14\"/><rect class=\"f-mute\" x=\"221\" y=\"92\" width=\"10\" height=\"24\"/><rect class=\"s\" x=\"132\" y=\"52\" width=\"60\" height=\"64\" fill=\"none\"/><rect class=\"f-mute\" x=\"139\" y=\"60\" width=\"12\" height=\"40\"/><rect class=\"f-mute\" x=\"156\" y=\"60\" width=\"12\" height=\"56\"/><rect class=\"f-mute\" x=\"173\" y=\"60\" width=\"12\" height=\"40\"/><path class=\"s-accent\" d=\"M0 52 H260\" stroke-dasharray=\"5 4\"/></svg></div></div></div>"
      },
      what: "The last of the fifteen. Alexander's claim is that nothing in a living structure is perfectly isolated; each part stays connected to the larger systems around it. Applied to making things, it says the test of a finished design is whether it looks as though it belongs where it is, or whether it announces itself as a separate object dropped into the site.",
      why: "It is a check against work that photographs well and sits badly. If a building, a shopfront or a component reads as an intrusion, it will keep needing justification for as long as it exists.",
      how: [
        "Judge the design in its actual context, never on a blank background.",
        "Borrow at least one real thing from the surroundings: a material, a line, a rhythm, a colour.",
        "Let the edges of the new work blur into what is already there.",
        "Ask whether removing your work would leave a hole or a relief."
      ],
      example: "Alexander illustrates it with a photograph of reeds in England. In practice, the contrast is between a Cotswold barn conversion that keeps the stone and the openings, and a rendered box on the same field.",
      numbers: "",
      pitfall: "It is the vaguest of the fifteen and the easiest to use as an argument for timidity. Not-separateness is about connection, not about copying the neighbours.",
      source: "Christopher Alexander, The Nature of Order, Book One: The Phenomenon of Life (2002)",
      verify: { status: "verified", note: "Definition from a published summary quoting Book One on no part being perfectly isolated; property name and the reeds image confirmed on Alexander's own fifteen-properties page." },
      belongs: { verdict: "core", why: "Context fit is a genuine design fundamental, even though this is the least operable statement of it in the set." },
      related: [920, 942, 21]
    },
    {
      n: 928,
      title: "Pattern language",
      aka: ["Patterns", "A Pattern Language"],
      oneLine: "A numbered, cross-linked set of recurring problems and their tested solutions.",
      demo: {
        caption: "One pattern in the fixed format: context, the forces in conflict, then the instruction. The numbers above and below are its links.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><span class=\"db-note\">UP: 102 FAMILY OF ENTRANCES &middot; 110 MAIN ENTRANCE</span><div class=\"db-ui\"><span class=\"db-label\">Pattern 112 &middot; Entrance transition</span><div class=\"db-col db-col--tight\"><div><span class=\"db-label\">Context</span><span class=\"db-type\">A front door reached straight off the street.</span></div><div><span class=\"db-label\">Conflicting forces</span><span class=\"db-type\">A building that opens directly onto the street is never quiet inside, yet a door on its own marks no change.</span></div><div><span class=\"db-label\">Therefore</span><span class=\"db-type\">Make a transition space between the street and the front door, and mark it with a change of light, sound, direction, surface or level.</span></div></div></div><span class=\"db-note\">DOWN: 127 INTIMACY GRADIENT &middot; 130 ENTRANCE ROOM &middot; 134 ZEN VIEW</span></div></div>"
      },
      what: "Alexander, Sara Ishikawa and Murray Silverstein published 253 patterns in 1977, running from region scale down to construction detail. Each pattern has the same structure: a context, a problem stated as a conflict of forces, and a solution stated as an instruction. Patterns are numbered and cross-referenced, so larger patterns list the smaller ones that complete them, and the set is meant to be used as a language rather than a catalogue. The book gives no plans, only rules that a builder combines.",
      why: "The format forces you to write down why a solution works, not just what it looks like, which is what makes it reusable by someone else. It also gives a shared vocabulary, so a team can argue about the entrance transition rather than about a drawing.",
      how: [
        "Write your recurring solutions in the pattern format: context, conflicting forces, instruction.",
        "Number them and link each one to the larger and smaller patterns it depends on.",
        "State the confidence you have in each pattern, as Alexander did with his asterisks.",
        "Use the language to generate options, not to approve a finished design."
      ],
      example: "Pattern 112, Entrance Transition, tells you to make a transition space between the street and the front door, and to mark it with a change of light, sound, direction, surface or level. The software world borrowed the format wholesale, which is where the design patterns literature comes from.",
      numbers: "253 patterns in A Pattern Language (1977).",
      pitfall: "Teams treat the book as a checklist of approved features. Alexander's own later position was that patterns alone were not enough, because the order in which you apply them changes the result, which is what led him to generative sequences.",
      source: "Christopher Alexander, Sara Ishikawa and Murray Silverstein, A Pattern Language: Towns, Buildings, Construction (Oxford University Press, 1977)",
      verify: { status: "verified", note: "Pattern count of 253 and pattern 112 Entrance Transition confirmed against patternlanguage.cc, whose page for the pattern also supplies the wording about light, sound, direction, surface and level. The shift towards sequences is documented in The Nature of Order, Book Two." },
      belongs: { verdict: "core", why: "The pattern format is the ancestor of design systems documentation and remains the clearest way to record a reusable design decision." },
      related: [929, 931, 922, 930]
    },
    {
      n: 929,
      title: "Generative sequences",
      aka: ["Unfolding", "Sequence of unfolding"],
      oneLine: "The order of the steps decides the result, so design the sequence before the object.",
      demo: {
        caption: "Same three moves in both, reordered. Fix the bay first and the walls land through a window, leaving a sliver.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Bay fixed first</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 124\"><text class=\"t\" x=\"40\" y=\"12\" text-anchor=\"middle\">1 PLACE BAY</text><text class=\"t\" x=\"130\" y=\"12\" text-anchor=\"middle\">2 SPLIT</text><text class=\"t\" x=\"220\" y=\"12\" text-anchor=\"middle\">3 SPLIT AGAIN</text><rect class=\"s\" x=\"4\" y=\"22\" width=\"72\" height=\"72\" fill=\"none\"/><rect class=\"f-accent\" x=\"40\" y=\"19\" width=\"8\" height=\"6\"/><rect class=\"f-accent\" x=\"52\" y=\"19\" width=\"8\" height=\"6\"/><rect class=\"f-accent\" x=\"64\" y=\"19\" width=\"8\" height=\"6\"/><rect class=\"s\" x=\"94\" y=\"22\" width=\"72\" height=\"72\" fill=\"none\"/><rect class=\"f-accent\" x=\"130\" y=\"19\" width=\"8\" height=\"6\"/><rect class=\"f-accent\" x=\"142\" y=\"19\" width=\"8\" height=\"6\"/><rect class=\"f-accent\" x=\"154\" y=\"19\" width=\"8\" height=\"6\"/><path class=\"s\" d=\"M134 22 V94\"/><rect class=\"s\" x=\"184\" y=\"22\" width=\"72\" height=\"72\" fill=\"none\"/><rect class=\"f-accent\" x=\"214\" y=\"22\" width=\"10\" height=\"72\" opacity=\"0.22\"/><rect class=\"f-accent\" x=\"220\" y=\"19\" width=\"8\" height=\"6\"/><rect class=\"f-accent\" x=\"232\" y=\"19\" width=\"8\" height=\"6\"/><rect class=\"f-accent\" x=\"244\" y=\"19\" width=\"8\" height=\"6\"/><path class=\"s\" d=\"M214 22 V94\"/><path class=\"s\" d=\"M224 22 V94\"/><text class=\"t\" x=\"219\" y=\"110\" text-anchor=\"middle\">SLIVER</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Largest split first</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 124\"><text class=\"t\" x=\"40\" y=\"12\" text-anchor=\"middle\">1 SPLIT</text><text class=\"t\" x=\"130\" y=\"12\" text-anchor=\"middle\">2 SPLIT AGAIN</text><text class=\"t\" x=\"220\" y=\"12\" text-anchor=\"middle\">3 PLACE BAY</text><rect class=\"s\" x=\"4\" y=\"22\" width=\"72\" height=\"72\" fill=\"none\"/><path class=\"s\" d=\"M40 22 V94\"/><rect class=\"s\" x=\"94\" y=\"22\" width=\"72\" height=\"72\" fill=\"none\"/><path class=\"s\" d=\"M130 22 V94\"/><path class=\"s\" d=\"M112 22 V94\"/><rect class=\"s\" x=\"184\" y=\"22\" width=\"72\" height=\"72\" fill=\"none\"/><path class=\"s\" d=\"M220 22 V94\"/><path class=\"s\" d=\"M202 22 V94\"/><rect class=\"f-accent\" x=\"189\" y=\"19\" width=\"8\" height=\"6\"/><rect class=\"f-accent\" x=\"207\" y=\"19\" width=\"8\" height=\"6\"/><rect class=\"f-accent\" x=\"234\" y=\"19\" width=\"8\" height=\"6\"/><text class=\"t\" x=\"220\" y=\"110\" text-anchor=\"middle\">NOTHING CUT</text></svg></div></div></div>"
      },
      what: "In the second volume of The Nature of Order, Alexander argues that a good whole cannot be drawn in one go. It has to unfold through a sequence of steps, where each step responds to the state produced by the step before it, and where earlier steps set the large structure that later steps fill in. In a December 2010 interview with Rob Hopkins he described it as a one-way process: you do something and then it is there, you do something else and then it is there, and there is no going back. Getting the sequence wrong produces a poor result even when every individual decision is sound.",
      why: "It shifts attention from what you are making to the order in which you make it, which is usually where projects go wrong. If you fix the cladding before the plan, no amount of skill on the cladding will save the plan.",
      how: [
        "Write the order of decisions down before you start, largest and most binding first.",
        "At each step, look at what actually exists rather than at the original brief.",
        "Do not let a downstream decision be made early because it is easier or more fun.",
        "If the result is wrong, examine the sequence before blaming the individual moves."
      ],
      example: "Alexander's Eishin Campus in Japan was built by working outward from a sequence of site decisions taken on the ground rather than from a finished master plan. The everyday version is choosing the grid and the type scale before any page is laid out.",
      numbers: "",
      pitfall: "Sequence thinking can become an excuse for refusing to plan. Alexander's sequences are written down in advance and then followed, not improvised.",
      source: "Christopher Alexander, The Nature of Order, Book Two: The Process of Creating Life (2002), chapter eleven, The Sequence of Unfolding; Rob Hopkins, interview with Christopher Alexander, Transition Culture, 23 December 2010",
      verify: { status: "verified", note: "Chapter eleven, The Sequence of Unfolding, confirmed against a published contents listing for Book Two and against the Building Beauty lecture series, which covers that chapter by number. The one-way process wording is from Rob Hopkins's interview published on Transition Culture on 23 December 2010; an earlier draft credited a republication of that interview, and the citation now points at the original." },
      belongs: { verdict: "core", why: "Decision order is a genuine design fundamental and is under-taught compared with the artefacts themselves." },
      related: [928, 913, 914]
    },
    {
      n: 930,
      title: "Prospect and refuge",
      aka: ["Prospect-refuge theory"],
      oneLine: "People are said to prefer places that offer a wide view from a sheltered position.",
      demo: {
        caption: "One room, three seats. Only the right-hand seat has both a solid back and the long view out.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 520 196\"><text class=\"t\" x=\"260\" y=\"16\" text-anchor=\"middle\">WINDOW WALL, THE VIEW OUT</text><rect class=\"s\" x=\"10\" y=\"34\" width=\"500\" height=\"130\" fill=\"none\"/><path class=\"s-accent\" d=\"M30 34 H490\"/><polygon class=\"f-accent\" points=\"150,114 95,34 205,34\" opacity=\"0.12\"/><circle class=\"f\" cx=\"150\" cy=\"114\" r=\"6\"/><path class=\"s\" d=\"M10 110 H74 V164\"/><polygon class=\"f-accent\" points=\"42,140 20,112 68,112\" opacity=\"0.12\"/><circle class=\"f\" cx=\"42\" cy=\"140\" r=\"6\"/><rect class=\"f\" x=\"26\" y=\"150\" width=\"32\" height=\"4\"/><polygon class=\"f-accent\" points=\"400,140 300,34 500,34\" opacity=\"0.12\"/><circle class=\"f\" cx=\"400\" cy=\"140\" r=\"6\"/><rect class=\"f\" x=\"378\" y=\"150\" width=\"44\" height=\"4\"/><text class=\"t\" x=\"150\" y=\"182\" text-anchor=\"middle\">PROSPECT ONLY</text><text class=\"t\" x=\"12\" y=\"182\">REFUGE ONLY</text><text class=\"t\" x=\"400\" y=\"182\" text-anchor=\"middle\">PROSPECT AND REFUGE</text></svg></div>"
      },
      what: "The geographer Jay Appleton proposed in 1975 that landscape preference has an evolutionary basis: we like to see without being seen, so places that combine prospect, an open outlook for spotting resources and threats, with refuge, a protected spot to occupy, will be preferred. Designers picked it up quickly, and it now appears in biophilic design guidance, restaurant seating advice and hospital layout. The evidence behind it is weaker than the popularity suggests.",
      why: "As a heuristic it explains why people take the booth by the wall before the table in the middle, and why a window seat with a solid back is the first spot filled in any cafe. It is a useful prompt when you are placing seating or deciding where a room's occupied edge should be.",
      how: [
        "Put seating with its back to something solid and its face to the longest view.",
        "Give every room at least one occupiable edge, such as a window seat or an alcove.",
        "Avoid enclosure without outlook, which reads as a trap rather than a refuge.",
        "Treat it as a hypothesis to test with observation on your own site, not as a rule."
      ],
      example: "Frank Lloyd Wright's Prairie houses are the case usually cited, with low sheltered inglenooks opening onto wide horizontal views. Whether that is evidence for the theory or a story fitted to it afterwards is the point at issue.",
      numbers: "",
      pitfall: "Designers quote the theory for interiors and streets while leaning on findings taken from open landscape. Dosen and Ostwald's complaint is precisely that the results most often cited in architecture come from natural settings, and that refuge is the half of the pair that stops holding up once you move indoors.",
      source: "Jay Appleton, The Experience of Landscape (1975)",
      verify: { status: "disputed", note: "Appleton's authorship and 1975 date are solid. Dosen and Ostwald's 2016 meta-analysis in City, Territory and Architecture 3(1), covering thirty-four quantitative environmental-preference studies, concludes that the quantitative evidence for prospect-refuge theory remains inconsistent. Read directly rather than through a summary, its result is more specific than the popular gloss: urban and interior studies supported the significance of prospect but were neutral about refuge, while natural-environment studies supported both and also produced contrary and neutral findings. An earlier draft of this entry said most of the research used natural landscapes; the paper's actual claim is that the results most commonly cited in architecture are the natural-environment ones, which is a different point, and the entry has been corrected." },
      belongs: { verdict: "adjacent", why: "It comes from landscape geography and evolutionary psychology rather than design, but it has a specific design use: deciding where to place seats, alcoves and occupiable edges so that people actually sit in them." },
      related: [925, 931, 940]
    },
    {
      n: 931,
      title: "Thresholds and transitions",
      aka: ["Entrance transition", "Liminal space"],
      oneLine: "Arriving somewhere should take a moment and involve a real change of conditions.",
      demo: {
        caption: "Same door. On the right the entrance takes three paces and changes level, cover and surface before you are inside.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Straight off the pavement</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 132\"><text class=\"t\" x=\"4\" y=\"16\">PAVEMENT</text><text class=\"t\" x=\"256\" y=\"16\" text-anchor=\"end\">INSIDE</text><path class=\"s-mute\" d=\"M4 100 H256\"/><rect class=\"f\" x=\"150\" y=\"26\" width=\"106\" height=\"74\" opacity=\"0.05\"/><path class=\"s\" d=\"M150 26 H256\"/><path class=\"s\" d=\"M150 26 V58\"/><circle class=\"f-mute\" cx=\"40\" cy=\"106\" r=\"2.5\"/><circle class=\"f-mute\" cx=\"72\" cy=\"106\" r=\"2.5\"/><circle class=\"f-mute\" cx=\"104\" cy=\"106\" r=\"2.5\"/><circle class=\"f-mute\" cx=\"136\" cy=\"106\" r=\"2.5\"/><circle class=\"f-mute\" cx=\"168\" cy=\"106\" r=\"2.5\"/><circle class=\"f-mute\" cx=\"200\" cy=\"106\" r=\"2.5\"/><path class=\"s-accent\" d=\"M150 22 V114\" stroke-dasharray=\"4 4\"/><text class=\"t\" x=\"150\" y=\"128\" text-anchor=\"middle\">ONE LINE, ONE PACE</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Level, cover, surface</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 132\"><text class=\"t\" x=\"4\" y=\"16\">PAVEMENT</text><text class=\"t\" x=\"256\" y=\"16\" text-anchor=\"end\">INSIDE</text><path class=\"s-mute\" d=\"M4 100 H86\"/><path class=\"s-mute\" d=\"M86 94 H150\"/><path class=\"s-mute\" d=\"M150 88 H256\"/><path class=\"s-accent\" d=\"M86 100 V94\"/><path class=\"s-accent\" d=\"M150 94 V88\"/><rect class=\"f\" x=\"86\" y=\"46\" width=\"64\" height=\"48\" opacity=\"0.12\"/><path class=\"s\" d=\"M80 46 H156\"/><rect class=\"f\" x=\"150\" y=\"26\" width=\"106\" height=\"62\" opacity=\"0.05\"/><path class=\"s\" d=\"M150 26 H256\"/><path class=\"s\" d=\"M150 26 V58\"/><text class=\"t\" x=\"118\" y=\"42\" text-anchor=\"middle\">CANOPY</text><circle class=\"f-mute\" cx=\"30\" cy=\"106\" r=\"2.5\"/><circle class=\"f-mute\" cx=\"58\" cy=\"106\" r=\"2.5\"/><circle class=\"f-mute\" cx=\"98\" cy=\"100\" r=\"2.5\"/><circle class=\"f-mute\" cx=\"118\" cy=\"100\" r=\"2.5\"/><circle class=\"f-mute\" cx=\"138\" cy=\"100\" r=\"2.5\"/><circle class=\"f-mute\" cx=\"172\" cy=\"94\" r=\"2.5\"/><circle class=\"f-mute\" cx=\"204\" cy=\"94\" r=\"2.5\"/><path class=\"s-accent\" d=\"M86 114 H150\" stroke-dasharray=\"4 4\"/><text class=\"t\" x=\"118\" y=\"128\" text-anchor=\"middle\">THREE PACES</text></svg></div></div></div>"
      },
      what: "Pattern 112 in A Pattern Language argues that buildings with a graceful transition between street and interior are more comfortable than those where you step straight from one to the other. The pattern asks for a change you can feel at the threshold: a change of light, of sound, of level, of surface underfoot, or of view. The point is to mark the boundary in the body, not just on the plan.",
      why: "A threshold resets attention and tells people they have entered a different set of rules. Without one, the inside of a building keeps feeling like the street, and people behave accordingly.",
      how: [
        "Change at least two conditions at the entrance: level and light, or surface and enclosure.",
        "Give the transition enough depth that it takes several paces, not one.",
        "Do the same in sequences of screens: mark the move from browsing to committing.",
        "Make the change reversible and obvious, so leaving is as clearly marked as arriving."
      ],
      example: "Pattern 112 itself. A Japanese genkan, the sunken entrance where shoes come off, changes level, surface, light and behaviour in one move.",
      numbers: "",
      pitfall: "Thresholds get value-engineered out because they are floor area that does nothing measurable. The loss only shows up later, in how the building is used.",
      source: "Christopher Alexander, Sara Ishikawa and Murray Silverstein, A Pattern Language (1977), pattern 112, Entrance Transition",
      verify: { status: "verified", note: "Pattern number 112 and the substance of the pattern confirmed against patternlanguage.cc and the Christopher Alexander CES archive record for the original pattern draft." },
      belongs: { verdict: "core", why: "Marking a change of state at the boundary is a design fundamental that carries from doorways to checkout flows." },
      related: [915, 920, 922, 933]
    },
    {
      n: 932,
      title: "Enclosure ratios",
      aka: ["Height to width ratio", "D/H ratio"],
      oneLine: "How enclosed a street or square feels is largely set by building height against width.",
      demo: {
        caption: "Same street width in all three. Only the buildings change height, and the space closes as the ratio rises.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 540 152\"><text class=\"t\" x=\"0\" y=\"12\">BUILDING HEIGHT TO STREET WIDTH</text><rect class=\"f\" x=\"5\" y=\"100\" width=\"25\" height=\"18\"/><rect class=\"f\" x=\"140\" y=\"100\" width=\"25\" height=\"18\"/><path class=\"s-mute\" d=\"M5 118 H165\"/><path class=\"s-accent\" d=\"M30 126 H140\" stroke-dasharray=\"4 4\"/><text class=\"t\" x=\"85\" y=\"30\" text-anchor=\"middle\">1 : 6</text><text class=\"t\" x=\"85\" y=\"144\" text-anchor=\"middle\">OPEN</text><rect class=\"f\" x=\"190\" y=\"90\" width=\"25\" height=\"28\"/><rect class=\"f\" x=\"325\" y=\"90\" width=\"25\" height=\"28\"/><path class=\"s-mute\" d=\"M190 118 H350\"/><path class=\"s-accent\" d=\"M215 126 H325\" stroke-dasharray=\"4 4\"/><text class=\"t\" x=\"270\" y=\"30\" text-anchor=\"middle\">1 : 4</text><text class=\"t\" x=\"270\" y=\"144\" text-anchor=\"middle\">ENCLOSURE FELT</text><rect class=\"f\" x=\"375\" y=\"63\" width=\"25\" height=\"55\"/><rect class=\"f\" x=\"510\" y=\"63\" width=\"25\" height=\"55\"/><path class=\"s-mute\" d=\"M375 118 H535\"/><path class=\"s-accent\" d=\"M400 126 H510\" stroke-dasharray=\"4 4\"/><text class=\"t\" x=\"455\" y=\"30\" text-anchor=\"middle\">1 : 2</text><text class=\"t\" x=\"455\" y=\"144\" text-anchor=\"middle\">ENCLOSED</text></svg></div>"
      },
      what: "Urban designers describe enclosure as the ratio of the height of the buildings lining a space to the width of the space between them. Low ratios read as open and exposed, high ratios as contained, and beyond a point as oppressive. The ITE and CNU manual Designing Walkable Urban Thoroughfares puts the threshold where pedestrians first perceive enclosure at a building height to street width ratio of 1:4, and says ratios between 1:3 and 1:2 give appropriate enclosure in denser contexts.",
      why: "It turns a vague complaint that a street feels windswept into a number you can design against. It also explains why planting alone will not fix a wide road; the height has to come up or the width has to come down.",
      how: [
        "Measure the existing ratio before proposing heights.",
        "Bring the effective width down with tree lines, colonnades or build-to lines if you cannot raise the buildings.",
        "Hold a consistent ratio along a length of street so the space reads as one room.",
        "Loosen the ratio at junctions and squares, so the release is felt."
      ],
      example: "Compare a Georgian street in Bath, roughly three storeys facing a narrow carriageway, with a dual carriageway lined by two-storey retail sheds set back behind parking.",
      numbers: "ITE and CNU (2010): enclosure is first perceived at about 1:4 height to width; 1:3 to 1:2 is described as appropriate enclosure in dense urban contexts.",
      pitfall: "The ratio is treated as the whole story. Later empirical work has questioned how far it dominates perceived enclosure once frontage detail, tree cover and street length are accounted for, so use it as a starting point rather than a verdict.",
      source: "Institute of Transportation Engineers with the Congress for the New Urbanism, Designing Walkable Urban Thoroughfares: A Context Sensitive Approach (2010), figure 4.2",
      verify: { status: "verified", note: "Read from the manual itself. Its wording is that the threshold when pedestrians first perceive enclosure is a 1:4 ratio of building height to thoroughfare width, typical of low-density environments. Figure 4.2, the 2010 date and the ITE Recommended Practice status were confirmed in the same document, as was the following sentence, that in denser urban contexts height-to-width ratios between 1:3 and 1:2 create an appropriate enclosure on a thoroughfare. The publication number is RP-036A. The caveat about the ratio not being the only driver reflects published research on D/H and perceived enclosure." },
      belongs: { verdict: "core", why: "A measurable proportion rule that a designer sets directly through massing and setback." },
      related: [933, 936, 942, 463]
    },
    {
      n: 933,
      title: "Sequence and procession",
      aka: ["Serial vision"],
      oneLine: "A place is experienced as a series of unfolding views, so design the walk, not the plan.",
      demo: {
        caption: "Three frames from one walk. The tower is hidden, then glimpsed past a corner, then held in the square.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 540 172\"><text class=\"t\" x=\"83\" y=\"20\" text-anchor=\"middle\">1</text><text class=\"t\" x=\"270\" y=\"20\" text-anchor=\"middle\">2</text><text class=\"t\" x=\"457\" y=\"20\" text-anchor=\"middle\">3</text><rect class=\"s-mute\" x=\"2\" y=\"28\" width=\"163\" height=\"112\" fill=\"none\"/><path class=\"s-mute\" d=\"M2 132 H165\"/><rect class=\"f-mute\" x=\"10\" y=\"48\" width=\"56\" height=\"84\"/><rect class=\"f-mute\" x=\"100\" y=\"42\" width=\"58\" height=\"90\"/><rect class=\"s-mute\" x=\"189\" y=\"28\" width=\"163\" height=\"112\" fill=\"none\"/><path class=\"s-mute\" d=\"M189 132 H352\"/><rect class=\"f-mute\" x=\"197\" y=\"48\" width=\"56\" height=\"84\"/><rect class=\"f\" x=\"289\" y=\"58\" width=\"18\" height=\"74\"/><rect class=\"f-mute\" x=\"309\" y=\"46\" width=\"36\" height=\"86\"/><rect class=\"s-mute\" x=\"376\" y=\"28\" width=\"163\" height=\"112\" fill=\"none\"/><path class=\"s-mute\" d=\"M376 132 H539\"/><rect class=\"f-mute\" x=\"384\" y=\"66\" width=\"42\" height=\"66\"/><rect class=\"f\" x=\"446\" y=\"38\" width=\"28\" height=\"94\"/><polygon class=\"f\" points=\"446,38 460,20 474,38\"/><rect class=\"f-mute\" x=\"500\" y=\"66\" width=\"32\" height=\"66\"/><text class=\"t\" x=\"83\" y=\"158\" text-anchor=\"middle\">STREET CLOSED</text><text class=\"t\" x=\"270\" y=\"158\" text-anchor=\"middle\">GLIMPSE PAST A CORNER</text><text class=\"t\" x=\"457\" y=\"158\" text-anchor=\"middle\">HELD IN THE SQUARE</text></svg></div>"
      },
      what: "Gordon Cullen's Townscape set out serial vision: a town is not perceived as a plan but as a sequence of pictures revealed by walking. Cullen drew it as a strip of sketches, each with what he called the existing view, the thing in front of you now, and the emerging view, the thing about to appear round the corner. The pleasure comes from the contrast between the two, and from concealment and revelation.",
      why: "It makes movement a design material. Once you think in sequence, you start placing things so they are found rather than seen all at once, which is how a small site can feel larger and a long route can stay interesting.",
      how: [
        "Draw the route as a strip of views before you finalise the plan.",
        "Withhold the main event until a turn or a narrowing reveals it.",
        "Give each stretch one thing worth arriving at.",
        "Check the reverse direction; a sequence that only works one way is half designed."
      ],
      example: "Cullen's own worked example is a walk through a small English town, drawn as numbered viewpoints on a plan with a sketch for each. The approach to Wells Cathedral through the Penniless Porch does the same thing in stone.",
      numbers: "",
      pitfall: "Designers plan the sequence for the visitor who arrives at the front door and ignore the route most people actually take, which is from the car park or the side street.",
      source: "Gordon Cullen, Townscape (1961), later abridged as The Concise Townscape (1971)",
      verify: { status: "verified", note: "Serial vision, and the existing view and emerging view pairing, confirmed against multiple published accounts of Townscape including the Urban Design Group's library entry and reviews of The Concise Townscape." },
      belongs: { verdict: "core", why: "Designing for a moving viewer rather than a static plan applies to exhibitions, retail and onboarding flows as much as to streets." },
      related: [931, 934, 651]
    },
    {
      n: 934,
      title: "Circulation and desire lines",
      aka: ["Desire paths", "Cow paths"],
      oneLine: "Watch the worn tracks people make and route the path where they already walk.",
      demo: {
        caption: "The dashed diagonal is where people already walk. On the right the paving has been moved onto it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Path as drawn</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 130\"><rect class=\"s-mute\" x=\"4\" y=\"8\" width=\"252\" height=\"112\" fill=\"none\"/><rect class=\"f-mute\" x=\"4\" y=\"98\" width=\"222\" height=\"10\"/><rect class=\"f-mute\" x=\"216\" y=\"16\" width=\"10\" height=\"92\"/><path class=\"s-accent\" d=\"M14 98 L216 24\" stroke-dasharray=\"4 4\"/><circle class=\"f-accent\" cx=\"14\" cy=\"98\" r=\"3.5\"/><circle class=\"f-accent\" cx=\"216\" cy=\"24\" r=\"3.5\"/><text class=\"t\" x=\"14\" y=\"42\">WORN TRACK</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Path moved to the track</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 130\"><rect class=\"s-mute\" x=\"4\" y=\"8\" width=\"252\" height=\"112\" fill=\"none\"/><path class=\"s-mute\" d=\"M9 103 H221 V16\" stroke-dasharray=\"4 4\"/><polygon class=\"f-mute\" points=\"12.3,93.3 214.3,19.3 217.7,28.7 15.7,102.7\"/><circle class=\"f-accent\" cx=\"14\" cy=\"98\" r=\"3.5\"/><circle class=\"f-accent\" cx=\"216\" cy=\"24\" r=\"3.5\"/><text class=\"t\" x=\"14\" y=\"42\">NOW PAVED</text></svg></div></div></div>"
      },
      what: "Circulation is the planned network of routes through a place. A desire line is the route people actually take, usually visible as a worn strip across grass where the paved path was inconvenient. The practical principle is to read desire lines as evidence and either move the path to them or find out what makes the official route unacceptable. Some designers go further and delay paving until the tracks appear.",
      why: "Desire lines are free, honest usage data. They tell you where the friction is without a survey, and they keep telling you after the scheme is built.",
      how: [
        "Walk the site and photograph worn tracks before drawing any route.",
        "Where a desire line crosses your plan, move the plan unless you can name the reason not to.",
        "Where you must resist a desire line, block it properly with a real obstacle; a sign will not do it.",
        "Revisit after a year and look for new tracks."
      ],
      example: "Any park where the diagonal across the lawn is worn bare while the right-angled path stays clean. The web equivalent is a search log full of queries for a page that exists but is not in the navigation.",
      numbers: "",
      pitfall: "The habit of citing a famous campus that supposedly waited for the tracks before paving. The story is told about several institutions and is rarely sourced, so do not repeat it as fact.",
      source: "Origin unclear. The term is widely credited to Gaston Bachelard's The Poetics of Space (1958), but that attribution is repeated without a source.",
      verify: { status: "disputed", note: "The Bachelard attribution circulates constantly and I found no source for it: no page reference, no French phrase, no quotation. I could not establish a first documented use of the term this session either. An earlier draft cited a glossary at landreader.com as authority for the negative finding; that domain is parked and offered for sale, so the citation has been removed rather than passed on. The practice of reading worn tracks and moving the path is real and widely used, and the entry now rests on that alone." },
      belongs: { verdict: "core", why: "Observing actual behaviour and redesigning to match it is a design fundamental, whatever the phrase's history." },
      related: [933, 939, 937]
    },
    {
      n: 935,
      title: "Daylight and solar orientation",
      aka: ["Daylighting", "Solar aspect"],
      oneLine: "Which way a building faces, and where its openings go, decides how it feels and what it costs to run.",
      demo: {
        caption: "The dashed line rises at 25 degrees from the neighbour's window. On the left the new building cuts through it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Crosses the line</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 156\"><path class=\"s-mute\" d=\"M4 130 H256\"/><rect class=\"f\" x=\"40\" y=\"40\" width=\"96\" height=\"90\" opacity=\"0.10\"/><rect class=\"s\" x=\"40\" y=\"40\" width=\"96\" height=\"90\" fill=\"none\"/><rect class=\"s\" x=\"196\" y=\"58\" width=\"56\" height=\"72\" fill=\"none\"/><path class=\"s-accent\" d=\"M196 88 V104\"/><circle class=\"f-accent\" cx=\"196\" cy=\"96\" r=\"2.5\"/><path class=\"s-accent\" d=\"M196 96 L20 14\" stroke-dasharray=\"5 4\"/><text class=\"t\" x=\"150\" y=\"64\" text-anchor=\"middle\">25 DEGREES</text><text class=\"t\" x=\"88\" y=\"148\" text-anchor=\"middle\">PROPOSED</text><text class=\"t\" x=\"224\" y=\"148\" text-anchor=\"middle\">NEIGHBOUR</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Stays below the line</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 156\"><path class=\"s-mute\" d=\"M4 130 H256\"/><rect class=\"f\" x=\"40\" y=\"86\" width=\"96\" height=\"44\" opacity=\"0.10\"/><rect class=\"s\" x=\"40\" y=\"86\" width=\"96\" height=\"44\" fill=\"none\"/><rect class=\"s\" x=\"196\" y=\"58\" width=\"56\" height=\"72\" fill=\"none\"/><path class=\"s-accent\" d=\"M196 88 V104\"/><circle class=\"f-accent\" cx=\"196\" cy=\"96\" r=\"2.5\"/><path class=\"s-accent\" d=\"M196 96 L20 14\" stroke-dasharray=\"5 4\"/><text class=\"t\" x=\"150\" y=\"64\" text-anchor=\"middle\">25 DEGREES</text><text class=\"t\" x=\"88\" y=\"148\" text-anchor=\"middle\">PROPOSED</text><text class=\"t\" x=\"224\" y=\"148\" text-anchor=\"middle\">NEIGHBOUR</text></svg></div></div></div>"
      },
      what: "Orientation controls daylight, sunlight and heat. In the United Kingdom two documents govern it: BS EN 17037:2018, which sets daylight targets inside a space, and the BRE guide BR 209, which covers how a development affects daylight and sunlight for its neighbours and itself.",
      why: "Getting orientation right is close to free at the sketch stage and close to impossible to fix afterwards. It also decides whether a scheme survives planning, since neighbours' daylight is a standard objection.",
      how: [
        "Set the plan against the sun path before the elevations.",
        "Put daytime rooms on the sunlit side and stores and circulation on the cold side.",
        "Test overshadowing of neighbours early using the BR 209 checks.",
        "Design shading and glazing area together; more glass is not more daylight if it has to be blinded out."
      ],
      example: "BR 209 uses a 25 degree rule as a first check: if no part of a new building rises above a line at 25 degrees from the horizontal taken from the centre of a neighbouring window, daylight to that window is unlikely to be badly affected.",
      numbers: "BS EN 17037:2018 minimum target: 300 lux over 50 per cent of the reference plane and 100 lux over 95 per cent, for at least 50 per cent of daylight hours. BR 209 sunlight targets: at least 25 per cent annual probable sunlight hours and at least 5 per cent in winter, tested on windows within 90 degrees of due south.",
      pitfall: "A space can pass EN 17037 on a lux calculation and still feel gloomy, because the numbers say nothing about where the light comes from.",
      source: "BS EN 17037:2018, Daylight in Buildings; BRE, Site Layout Planning for Daylight and Sunlight: A Guide to Good Practice (BR 209), Littlefair, 2022 edition",
      verify: { status: "verified", note: "The EN 17037 minimum targets of 300 lux over 50 per cent and 100 lux over 95 per cent of the reference plane, for at least half the daylight hours, were confirmed against the CEN catalogue record and a peer-reviewed paper on the standard's minimum target. Note that the standard has since been amended as EN 17037:2018+A1:2021. BR 209 as a third edition dated 2022 by Littlefair was confirmed against the NBS publication index, BRE and an RICS standards page. The APSH thresholds, the 90 degree due south rule and the 25 degree rule were confirmed against UK daylight and sunlight consultancy references and a planning submission applying them, not against the guide's own text, which is paywalled." },
      belongs: { verdict: "core", why: "Orientation is a design decision with published performance standards attached, and it is set at the earliest and cheapest moment in a project." },
      related: [922, 932, 943]
    },
    {
      n: 936,
      title: "Active frontage",
      aka: ["Soft edges", "Ground floor activity"],
      oneLine: "Ground floors with many doors, windows and small units make streets worth walking.",
      demo: {
        caption: "Both are 100 metres of ground floor. Count the doors: sixteen against one, Gehl's category A against E.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Category E</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 118\"><rect class=\"s\" x=\"4\" y=\"28\" width=\"252\" height=\"60\" fill=\"none\"/><rect class=\"f\" x=\"4\" y=\"28\" width=\"252\" height=\"60\" opacity=\"0.05\"/><rect class=\"f-accent\" x=\"126\" y=\"68\" width=\"12\" height=\"20\"/><path class=\"s-mute\" d=\"M4 88 H256\"/><path class=\"s-accent\" d=\"M4 98 H256\" stroke-dasharray=\"4 4\"/><text class=\"t\" x=\"130\" y=\"112\" text-anchor=\"middle\">100 METRES</text><text class=\"t\" x=\"130\" y=\"20\" text-anchor=\"middle\">1 DOOR, NO VARIATION</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Category A</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 118\"><rect class=\"s\" x=\"4\" y=\"28\" width=\"252\" height=\"60\" fill=\"none\"/><rect class=\"f\" x=\"4\" y=\"28\" width=\"252\" height=\"60\" opacity=\"0.05\"/><rect class=\"f-mute\" x=\"6.50\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"8.50\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M19.75 28 V88\"/><rect class=\"f-mute\" x=\"22.25\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"24.25\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M35.50 28 V88\"/><rect class=\"f-mute\" x=\"38.00\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"40.00\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M51.25 28 V88\"/><rect class=\"f-mute\" x=\"53.75\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"55.75\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M67.00 28 V88\"/><rect class=\"f-mute\" x=\"69.50\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"71.50\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M82.75 28 V88\"/><rect class=\"f-mute\" x=\"85.25\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"87.25\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M98.50 28 V88\"/><rect class=\"f-mute\" x=\"101.00\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"103.00\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M114.25 28 V88\"/><rect class=\"f-mute\" x=\"116.75\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"118.75\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M130.00 28 V88\"/><rect class=\"f-mute\" x=\"132.50\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"134.50\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M145.75 28 V88\"/><rect class=\"f-mute\" x=\"148.25\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"150.25\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M161.50 28 V88\"/><rect class=\"f-mute\" x=\"164.00\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"166.00\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M177.25 28 V88\"/><rect class=\"f-mute\" x=\"179.75\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"181.75\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M193.00 28 V88\"/><rect class=\"f-mute\" x=\"195.50\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"197.50\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M208.75 28 V88\"/><rect class=\"f-mute\" x=\"211.25\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"213.25\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M224.50 28 V88\"/><rect class=\"f-mute\" x=\"227.00\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"229.00\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M240.25 28 V88\"/><rect class=\"f-mute\" x=\"242.75\" y=\"36\" width=\"10.75\" height=\"22\" opacity=\"0.55\"/><rect class=\"f-accent\" x=\"244.75\" y=\"68\" width=\"6.75\" height=\"20\"/><path class=\"s-mute\" d=\"M4 88 H256\"/><path class=\"s-accent\" d=\"M4 98 H256\" stroke-dasharray=\"4 4\"/><text class=\"t\" x=\"130\" y=\"112\" text-anchor=\"middle\">100 METRES</text><text class=\"t\" x=\"130\" y=\"20\" text-anchor=\"middle\">16 DOORS, 16 UNITS</text></svg></div></div></div>"
      },
      what: "Jan Gehl, Lotte Johansen Kaefer and Solvejg Reigstad set out a five-step scale for grading ground-floor facades, A to E. Category A means small units with 15 to 20 doors per 100 metres, wide variation in function, no blind and few passive frontages, plenty of relief and good detail. Category E means large units with nought to two doors per 100 metres, no visible variation in function, blind or passive frontages and nothing to look at. The grading turns a subjective judgement about street quality into something two people can agree on.",
      why: "Frontage grade predicts whether people slow down, stop and stay. It is also the part of a scheme a designer controls directly, through unit sizes and door positions, without needing to change the plan.",
      how: [
        "Count doors per 100 metres on your proposed frontage and grade it A to E.",
        "Break long units into narrower shopfronts even when one tenant occupies them all.",
        "Push blank walls, plant rooms and service doors to the back or side.",
        "Give the frontage physical relief, so it casts shadow and rewards a close look."
      ],
      example: "The paper's own study covered seven mixed-use streets in Copenhagen in 2003, setting open, varied frontages against uniform ones with few doors. Stops and other activity ran seven times higher in front of the active facades.",
      numbers: "Gehl, Kaefer and Reigstad (2006): category A, 15-20 doors per 100 m; B, 10-14; C, 6-8; D, 2-5; E, 0-2. In the Copenhagen study, stops and other activity were seven times greater in front of active than passive facades, with a further 13 per cent of activity added by pedestrians slowing as they passed.",
      pitfall: "Planning policies ask for active frontage and then accept a single glazed lobby serving a whole block. The door count is the part that matters, not the glass.",
      source: "Jan Gehl, Lotte Johansen Kaefer and Solvejg Reigstad, Close Encounters with Buildings, Urban Design International 11(1), 29-47 (2006); first published in Danish as Naerkontakt med huse, Arkitekten, September 2004",
      verify: { status: "verified", note: "Authors, journal, volume 11, issue 1, pages 29-47 and the 2006 date confirmed against the publisher's record. The Danish first publication, Naerkontakt med huse, Arkitekten no. 9 (2004), pages 6-21, confirmed against the Danish national library catalogue and Gehl's own bibliography in Cities for People. The A to E door counts were checked against three independent transcriptions of the paper's table, which agree; note that some planning policies quoting the scale, such as the City of Sydney's, alter the bands. An earlier draft said the team surveyed Copenhagen and Melbourne and named Stroget as a case. Reading the paper, the empirical work is a study of seven mixed-use streets in Copenhagen, and Melbourne appears only as one of several cities that have introduced facade regulations, so the example has been replaced with findings the paper actually reports." },
      belongs: { verdict: "core", why: "A measurable frontage rule set directly by the designer through unit width and door placement." },
      related: [937, 938, 932, 942]
    },
    {
      n: 937,
      title: "Eyes on the street",
      aka: ["Natural surveillance"],
      oneLine: "Buildings that face the street, with people using it, are said to keep it safer.",
      demo: {
        caption: "The tint is the pavement each window can see. Turn the buildings round and the street loses its cover.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Backs to the street</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 142\"><rect class=\"f\" x=\"4\" y=\"46\" width=\"252\" height=\"50\" opacity=\"0.04\"/><rect class=\"s\" x=\"4\" y=\"8\" width=\"252\" height=\"38\" fill=\"none\"/><rect class=\"f\" x=\"4\" y=\"8\" width=\"252\" height=\"38\" opacity=\"0.06\"/><rect class=\"s\" x=\"4\" y=\"96\" width=\"252\" height=\"38\" fill=\"none\"/><rect class=\"f\" x=\"4\" y=\"96\" width=\"252\" height=\"38\" opacity=\"0.06\"/><path class=\"s-mute\" d=\"M67 8 V46\"/><path class=\"s-mute\" d=\"M130 8 V46\"/><path class=\"s-mute\" d=\"M193 8 V46\"/><path class=\"s-mute\" d=\"M67 96 V134\"/><path class=\"s-mute\" d=\"M130 96 V134\"/><path class=\"s-mute\" d=\"M193 96 V134\"/><rect class=\"f\" x=\"4\" y=\"42\" width=\"252\" height=\"4\"/><rect class=\"f\" x=\"4\" y=\"96\" width=\"252\" height=\"4\"/><rect class=\"f-accent\" x=\"30\" y=\"6\" width=\"12\" height=\"3\"/><rect class=\"f-accent\" x=\"92\" y=\"6\" width=\"12\" height=\"3\"/><rect class=\"f-accent\" x=\"154\" y=\"6\" width=\"12\" height=\"3\"/><rect class=\"f-accent\" x=\"216\" y=\"6\" width=\"12\" height=\"3\"/><rect class=\"f-accent\" x=\"61\" y=\"133\" width=\"12\" height=\"3\"/><rect class=\"f-accent\" x=\"124\" y=\"133\" width=\"12\" height=\"3\"/><rect class=\"f-accent\" x=\"187\" y=\"133\" width=\"12\" height=\"3\"/><text class=\"t\" x=\"130\" y=\"30\" text-anchor=\"middle\">WINDOWS FACE AWAY</text><text class=\"t\" x=\"130\" y=\"74\" text-anchor=\"middle\">BLANK FLANKS BOTH SIDES</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Fronts to the street</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 142\"><rect class=\"f\" x=\"4\" y=\"46\" width=\"252\" height=\"50\" opacity=\"0.04\"/><rect class=\"s\" x=\"4\" y=\"8\" width=\"252\" height=\"38\" fill=\"none\"/><rect class=\"f\" x=\"4\" y=\"8\" width=\"252\" height=\"38\" opacity=\"0.06\"/><rect class=\"s\" x=\"4\" y=\"96\" width=\"252\" height=\"38\" fill=\"none\"/><rect class=\"f\" x=\"4\" y=\"96\" width=\"252\" height=\"38\" opacity=\"0.06\"/><path class=\"s-mute\" d=\"M67 8 V46\"/><path class=\"s-mute\" d=\"M130 8 V46\"/><path class=\"s-mute\" d=\"M193 8 V46\"/><path class=\"s-mute\" d=\"M67 96 V134\"/><path class=\"s-mute\" d=\"M130 96 V134\"/><path class=\"s-mute\" d=\"M193 96 V134\"/><polygon class=\"f-accent\" points=\"36,46 2,96 70,96\" opacity=\"0.11\"/><rect class=\"f-accent\" x=\"30\" y=\"44\" width=\"12\" height=\"3\"/><polygon class=\"f-accent\" points=\"98,46 64,96 132,96\" opacity=\"0.11\"/><rect class=\"f-accent\" x=\"92\" y=\"44\" width=\"12\" height=\"3\"/><polygon class=\"f-accent\" points=\"160,46 126,96 194,96\" opacity=\"0.11\"/><rect class=\"f-accent\" x=\"154\" y=\"44\" width=\"12\" height=\"3\"/><polygon class=\"f-accent\" points=\"222,46 188,96 256,96\" opacity=\"0.11\"/><rect class=\"f-accent\" x=\"216\" y=\"44\" width=\"12\" height=\"3\"/><polygon class=\"f-accent\" points=\"67,96 33,46 101,46\" opacity=\"0.11\"/><rect class=\"f-accent\" x=\"61\" y=\"93\" width=\"12\" height=\"3\"/><polygon class=\"f-accent\" points=\"130,96 96,46 164,46\" opacity=\"0.11\"/><rect class=\"f-accent\" x=\"124\" y=\"93\" width=\"12\" height=\"3\"/><polygon class=\"f-accent\" points=\"193,96 159,46 227,46\" opacity=\"0.11\"/><rect class=\"f-accent\" x=\"187\" y=\"93\" width=\"12\" height=\"3\"/><text class=\"t\" x=\"130\" y=\"30\" text-anchor=\"middle\">WINDOWS FACE THE STREET</text></svg></div></div></div>"
      },
      what: "Jane Jacobs argued in 1961 that a city street is kept in order by its users and by the people who overlook it from windows and shopfronts, not by police. Her conditions were that the line between public and private must be clear, that there must be eyes upon the street belonging to its natural proprietors, and that the pavement must have users on it fairly continuously, since users both add eyes and give the people indoors a reason to look out. Oscar Newman later built the idea into his natural surveillance principle.",
      why: "It gives a design reason to face buildings towards the street, put windows in habitable rooms rather than corridors, and avoid blank flanks and rear service yards on public routes. Those are cheap decisions at plan stage.",
      how: [
        "Orient habitable rooms and shopfronts towards public routes, not away from them.",
        "Avoid blank gables, high fences and undercrofts along paths people use.",
        "Keep a clear public and private line so it is obvious who belongs where.",
        "Give the street a reason to be used at more than one time of day."
      ],
      example: "Jacobs described her own block of Hudson Street in Greenwich Village, where shopkeepers, residents and passers-by watched each other through the day.",
      numbers: "",
      pitfall: "The idea is repeated as settled fact. It is not: later work is mixed, and more people on a street can bring more targets as well as more guardians.",
      source: "Jane Jacobs, The Death and Life of Great American Cities (1961)",
      verify: { status: "disputed", note: "Jacobs's authorship and the wording of her three conditions are confirmed. The empirical picture is contested. The most relevant recent test is Vidal-Domper, Herrero-Olarte, Hoyos-Bucheli and Benages-Albert, Cities 148, article 104863 (2024), an ordinary least squares study of street robbery in the la Mariscal neighbourhood of Quito. Its abstract reports five morphological indicators strongly correlated with the number of robberies: the balance of basic to non-basic commerce and facilities, street area, distance to squares and pocket parks, distance to public transport stations, and distance to border vacuums. The authors read that as support for Jacobs, and their listed highlights say so directly. The grounds for calling this disputed sit in their own literature review, which records no agreement on whether more people on a street raises or lowers street crime and cites studies on both sides. The paper is paywalled beyond the abstract, highlights and introduction, so its tables and coefficients were not checked. An earlier draft of this note attributed directional findings on population density, block size, street lighting and residential balance to the paper and said the theory splits in testing; the abstract reports none of that, and the claim has been removed. An earlier draft also cited a US study around low-income schools; I could not verify it this session and have removed it." },
      belongs: { verdict: "adjacent", why: "It is a claim about how social behaviour keeps a street orderly rather than a design principle in its own right, and it belongs to the same family as defensible space, which is also marked adjacent. Its design use is specific and real: deciding which way buildings face, whether habitable rooms or corridors get the windows onto the street, and whether a public route is given a frontage or a blank flank." },
      related: [936, 938, 940, 939]
    },
    {
      n: 938,
      title: "Mixed use",
      aka: ["Mixed primary uses", "Diversity of use"],
      oneLine: "Different uses in the same area keep it occupied across the day rather than in one burst.",
      demo: {
        caption: "Occupancy hour by hour. The office-only block spikes then dies at six; the lower one holds a floor under the day.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 520 192\"><text class=\"t\" x=\"24\" y=\"16\">OFFICES ONLY</text><rect class=\"f\" x=\"56\" y=\"79\" width=\"20\" height=\"3\"/><rect class=\"f\" x=\"82\" y=\"72\" width=\"20\" height=\"10\"/><rect class=\"f\" x=\"108\" y=\"46\" width=\"20\" height=\"36\"/><rect class=\"f\" x=\"134\" y=\"42\" width=\"20\" height=\"40\"/><rect class=\"f\" x=\"160\" y=\"42\" width=\"20\" height=\"40\"/><rect class=\"f\" x=\"186\" y=\"46\" width=\"20\" height=\"36\"/><rect class=\"f\" x=\"212\" y=\"44\" width=\"20\" height=\"38\"/><rect class=\"f\" x=\"238\" y=\"42\" width=\"20\" height=\"40\"/><rect class=\"f\" x=\"264\" y=\"42\" width=\"20\" height=\"40\"/><rect class=\"f\" x=\"290\" y=\"46\" width=\"20\" height=\"36\"/><rect class=\"f\" x=\"316\" y=\"62\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"342\" y=\"77\" width=\"20\" height=\"5\"/><rect class=\"f\" x=\"368\" y=\"81\" width=\"20\" height=\"1\"/><path class=\"s-mute\" d=\"M24 82 H504\"/><text class=\"t\" x=\"24\" y=\"108\">OFFICES, HOMES, SHOPS, BARS</text><rect class=\"f\" x=\"30\" y=\"162\" width=\"20\" height=\"10\"/><rect class=\"f\" x=\"56\" y=\"157\" width=\"20\" height=\"15\"/><rect class=\"f\" x=\"82\" y=\"150\" width=\"20\" height=\"22\"/><rect class=\"f\" x=\"108\" y=\"144\" width=\"20\" height=\"28\"/><rect class=\"f\" x=\"134\" y=\"144\" width=\"20\" height=\"28\"/><rect class=\"f\" x=\"160\" y=\"142\" width=\"20\" height=\"30\"/><rect class=\"f\" x=\"186\" y=\"140\" width=\"20\" height=\"32\"/><rect class=\"f\" x=\"212\" y=\"142\" width=\"20\" height=\"30\"/><rect class=\"f\" x=\"238\" y=\"144\" width=\"20\" height=\"28\"/><rect class=\"f\" x=\"264\" y=\"144\" width=\"20\" height=\"28\"/><rect class=\"f\" x=\"290\" y=\"142\" width=\"20\" height=\"30\"/><rect class=\"f\" x=\"316\" y=\"140\" width=\"20\" height=\"32\"/><rect class=\"f\" x=\"342\" y=\"138\" width=\"20\" height=\"34\"/><rect class=\"f\" x=\"368\" y=\"140\" width=\"20\" height=\"32\"/><rect class=\"f\" x=\"394\" y=\"142\" width=\"20\" height=\"30\"/><rect class=\"f\" x=\"420\" y=\"146\" width=\"20\" height=\"26\"/><rect class=\"f\" x=\"446\" y=\"150\" width=\"20\" height=\"22\"/><rect class=\"f\" x=\"472\" y=\"157\" width=\"20\" height=\"15\"/><path class=\"s-mute\" d=\"M24 172 H504\"/><text class=\"t\" x=\"40\" y=\"184\" text-anchor=\"middle\">06</text><text class=\"t\" x=\"196\" y=\"184\" text-anchor=\"middle\">12</text><text class=\"t\" x=\"352\" y=\"184\" text-anchor=\"middle\">18</text><text class=\"t\" x=\"482\" y=\"184\" text-anchor=\"middle\">23</text></svg></div>"
      },
      what: "Jacobs listed four conditions she said were needed to generate diversity in a city district: a mixture of primary uses so that people are out at different times for different reasons, short blocks, buildings of varying age and condition so that rents vary, and a sufficiently dense concentration of people. She was explicit that all four are needed together, and that any one on its own will not produce the effect.",
      why: "For a designer the useful consequence is programming: a scheme with one use empties at a predictable hour, and everything else that depends on footfall fails with it. Mixing uses spreads the occupancy curve.",
      how: [
        "Check the occupancy of your scheme hour by hour across a week and look for the dead stretches.",
        "Add a use that peaks when your main use is empty.",
        "Keep some cheap floorspace in the mix; Jacobs's aged buildings condition is really about rent variety.",
        "Keep blocks short enough that the uses are within a short walk of each other."
      ],
      example: "Jacobs's own examples were the North End of Boston and Greenwich Village. The counter-case is a single-use business park, busy from nine to five and empty otherwise.",
      numbers: "",
      pitfall: "Mixed use gets delivered as flats above a permanently vacant retail unit. Jacobs's condition was a mixture of primary uses that draw people for their own sake, not a token ground floor.",
      source: "Jane Jacobs, The Death and Life of Great American Cities (1961), part two, the conditions for city diversity",
      verify: { status: "verified", note: "The four conditions, mixed primary uses, short blocks, aged buildings and sufficient concentration, and Jacobs's insistence that all four are required, confirmed against several independent published summaries of part two of the book." },
      belongs: { verdict: "adjacent", why: "It is a planning and programming principle rather than a design one, but it has a specific design use: deciding the mix of uses and the ground-floor programme that will keep a scheme occupied outside its main hours." },
      related: [937, 936, 942]
    },
    {
      n: 939,
      title: "Permeability",
      aka: ["Connectivity", "Choice of routes"],
      oneLine: "How many alternative ways there are through a place, and whether people can see them.",
      demo: {
        caption: "Same two points in both. The cul-de-sac layout offers one way across; the small blocks offer a choice at every corner.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Cul-de-sacs off one spine</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 132\"><path class=\"s-mute\" d=\"M40 112 V84\"/><circle class=\"s-mute\" cx=\"40\" cy=\"79\" r=\"5\" fill=\"none\"/><path class=\"s-mute\" d=\"M80 112 V80\"/><circle class=\"s-mute\" cx=\"80\" cy=\"75\" r=\"5\" fill=\"none\"/><path class=\"s-mute\" d=\"M120 90 H162\"/><circle class=\"s-mute\" cx=\"167\" cy=\"90\" r=\"5\" fill=\"none\"/><path class=\"s-mute\" d=\"M120 62 H78\"/><circle class=\"s-mute\" cx=\"73\" cy=\"62\" r=\"5\" fill=\"none\"/><path class=\"s-mute\" d=\"M180 40 V74\"/><circle class=\"s-mute\" cx=\"180\" cy=\"79\" r=\"5\" fill=\"none\"/><path class=\"s-mute\" d=\"M216 40 V70\"/><circle class=\"s-mute\" cx=\"216\" cy=\"75\" r=\"5\" fill=\"none\"/><path class=\"s-accent\" d=\"M4 112 H120 V40 H252\"/><circle class=\"f-accent\" cx=\"4\" cy=\"112\" r=\"4\"/><circle class=\"f-accent\" cx=\"252\" cy=\"40\" r=\"4\"/><text class=\"t\" x=\"10\" y=\"128\">A</text><text class=\"t\" x=\"248\" y=\"30\" text-anchor=\"end\">B</text><text class=\"t\" x=\"140\" y=\"128\" text-anchor=\"middle\">ONE WAY ACROSS</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Small blocks</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 132\"><path class=\"s-mute\" d=\"M4 40 V112\"/><path class=\"s-mute\" d=\"M46 40 V112\"/><path class=\"s-mute\" d=\"M88 40 V112\"/><path class=\"s-mute\" d=\"M130 40 V112\"/><path class=\"s-mute\" d=\"M172 40 V112\"/><path class=\"s-mute\" d=\"M214 40 V112\"/><path class=\"s-mute\" d=\"M252 40 V112\"/><path class=\"s-mute\" d=\"M4 40 H252\"/><path class=\"s-mute\" d=\"M4 76 H252\"/><path class=\"s-mute\" d=\"M4 112 H252\"/><path class=\"s-accent\" d=\"M4 112 V40 H252\"/><path class=\"s-accent\" d=\"M4 112 H252 V40\" stroke-dasharray=\"5 4\"/><circle class=\"f-accent\" cx=\"4\" cy=\"112\" r=\"4\"/><circle class=\"f-accent\" cx=\"252\" cy=\"40\" r=\"4\"/><text class=\"t\" x=\"10\" y=\"128\">A</text><text class=\"t\" x=\"248\" y=\"30\" text-anchor=\"end\">B</text><text class=\"t\" x=\"140\" y=\"128\" text-anchor=\"middle\">TWO OF MANY</text></svg></div></div></div>"
      },
      what: "Permeability is the first of the seven qualities in Responsive Environments. The authors define it as the extent to which an environment allows people to move through it in different directions, and they split it into physical permeability, the number of alternative routes, and visual permeability, whether those routes can be seen. Both depend on how the network of public space divides the area into blocks, so smaller blocks mean more permeability.",
      why: "Route choice is what lets people take the direct way and what spreads footfall across more frontages rather than concentrating it on one. Block size is the lever, and it is set at masterplan stage.",
      how: [
        "Count the alternative routes between the main origins and destinations on your site.",
        "Reduce block size rather than adding paths within blocks.",
        "Make routes visible from their start; an unseen route is not a real choice.",
        "Keep the public and private distinction clear, so permeability does not turn private space into a shortcut."
      ],
      example: "A medieval market town centre, with many small blocks and dozens of ways across it, against a post-war estate with a hierarchical layout of cul-de-sacs feeding one distributor road.",
      numbers: "",
      pitfall: "Permeability and defensible space give opposite advice on cul-de-sacs, and the argument has never been fully settled. Do not apply either as a rule without looking at what the specific place is like.",
      source: "Ian Bentley, Alan Alcock, Paul Murrain, Sue McGlynn and Graham Smith, Responsive Environments: A Manual for Designers (Architectural Press, 1985), chapter one",
      verify: { status: "verified", note: "Authors, publisher and 1985 date confirmed from library catalogue records. The definition, the physical and visual split, the dependence on block size and the listed causes of declining permeability were checked against a transcription of the book's first chapter." },
      belongs: { verdict: "core", why: "Block size and route choice are direct design decisions with a well-documented framework behind them." },
      related: [934, 940, 942, 9939]
    },
    {
      n: 9939,
      title: "Space syntax and natural movement",
      aka: ["Configurational analysis", "Integration"],
      oneLine: "Movement through a place is largely predicted by the shape of the street network itself.",
      demo: {
        caption: "Line weight is how well each street connects to all the others. The shops sit on the heaviest line.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 520 176\"><text class=\"t\" x=\"0\" y=\"12\">LINE WEIGHT: HOW WELL CONNECTED</text><path class=\"s-accent\" style=\"stroke-width:7\" d=\"M20 96 L500 88\"/><path class=\"s\" style=\"stroke-width:3\" d=\"M60 34 L470 30\"/><path class=\"s\" style=\"stroke-width:2.5\" d=\"M92 24 L120 158\"/><path class=\"s\" style=\"stroke-width:2.5\" d=\"M232 20 L252 160\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M372 24 L392 156\"/><path class=\"s-mute\" d=\"M152 118 L152 156\"/><path class=\"s-mute\" d=\"M430 112 L470 148\"/><rect class=\"f-accent\" x=\"116\" y=\"78\" width=\"8\" height=\"8\"/><rect class=\"f-accent\" x=\"186\" y=\"78\" width=\"8\" height=\"8\"/><rect class=\"f-accent\" x=\"258\" y=\"77\" width=\"8\" height=\"8\"/><rect class=\"f-accent\" x=\"330\" y=\"76\" width=\"8\" height=\"8\"/><rect class=\"f-accent\" x=\"402\" y=\"75\" width=\"8\" height=\"8\"/><text class=\"t\" x=\"16\" y=\"130\">MOST INTEGRATED</text><text class=\"t\" x=\"160\" y=\"150\">DEAD END</text><text class=\"t\" x=\"500\" y=\"70\" text-anchor=\"end\">SHOPS</text></svg></div>"
      },
      what: "Bill Hillier and Julienne Hanson set out a method for describing spatial layout as a network and measuring how well each space connects to all the others. The follow-up argument, published as natural movement in 1993, is that the configuration of the network is itself the main driver of pedestrian movement, and that shops and other attractors then locate where the movement already is, rather than causing it. That reverses the usual assumption that activity creates footfall.",
      why: "It gives a testable model rather than a preference. If the network says a route will be quiet, putting a cafe on it will not fix the route, and you are better off changing the network.",
      how: [
        "Model the route network before deciding where the active frontage and the anchors go.",
        "Put the uses that need footfall on the best-connected lines, not on the prettiest ones.",
        "Treat a well-connected route as an asset and avoid severing it with a building or a barrier.",
        "Check predictions against observed pedestrian counts on the actual site."
      ],
      example: "The 1993 paper set observed pedestrian movement against configurational measures of the street grid and found the space syntax measure of integration to be consistently the most important of them. Its practical claim is that shops locate to catch the passing trade the grid already produces, and may then multiply it.",
      numbers: "",
      pitfall: "The method models the network and not the people, so it says little about who is moving, when, or why. Treat it as one input among several.",
      source: "Bill Hillier and Julienne Hanson, The Social Logic of Space (1984); Hillier, Penn, Hanson, Grajewski and Xu, Natural Movement: Or, Configuration and Attraction in Urban Pedestrian Movement, Environment and Planning B 20(1), 29-66 (1993)",
      verify: { status: "verified", note: "Paper title, all five authors, journal, volume 20, issue 1, pages 29-66 and the 1993 date confirmed against the publisher's record, and the abstract read directly. It states that the configuration of the urban grid is the main generator of movement patterns, that retail then locates to take advantage of the passing trade and may act as a multiplier on it, and that the integration measure was consistently found to be the most important. Added as a gap: the master list covers permeability as a qualitative quality but has no entry for the measured, testable version of the same idea." },
      belongs: { verdict: "adjacent", why: "The method comes from architectural research and quantitative geography rather than design practice, but its design use is specific: choosing where to put entrances, frontages and anchors based on how well connected each route is." },
      related: [939, 934, 937, 942]
    },
    {
      n: 940,
      title: "Defensible space",
      aka: ["CPTED", "Territoriality"],
      oneLine: "Housing laid out so residents feel ownership of the space outside their front doors.",
      demo: {
        caption: "The same four homes. On the right every scrap of ground belongs to somebody, and each boundary can be seen.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Undivided ground</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 132\"><rect class=\"s\" x=\"4\" y=\"8\" width=\"252\" height=\"34\" fill=\"none\"/><rect class=\"f\" x=\"4\" y=\"8\" width=\"252\" height=\"34\" opacity=\"0.08\"/><path class=\"s-mute\" d=\"M67 8 V42\"/><path class=\"s-mute\" d=\"M130 8 V42\"/><path class=\"s-mute\" d=\"M193 8 V42\"/><rect class=\"f-accent\" x=\"30\" y=\"40\" width=\"10\" height=\"3\"/><rect class=\"f-accent\" x=\"93\" y=\"40\" width=\"10\" height=\"3\"/><rect class=\"f-accent\" x=\"156\" y=\"40\" width=\"10\" height=\"3\"/><rect class=\"f-accent\" x=\"219\" y=\"40\" width=\"10\" height=\"3\"/><rect class=\"f\" x=\"4\" y=\"50\" width=\"252\" height=\"74\" opacity=\"0.05\"/><rect class=\"s-mute\" x=\"4\" y=\"50\" width=\"252\" height=\"74\" fill=\"none\"/><path class=\"s-mute\" d=\"M4 104 H256\" stroke-dasharray=\"4 4\"/><text class=\"t\" x=\"130\" y=\"80\" text-anchor=\"middle\">ONE OPEN TRACT, NO BOUNDARIES</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Private, shared, public</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 132\"><rect class=\"s\" x=\"4\" y=\"8\" width=\"252\" height=\"34\" fill=\"none\"/><rect class=\"f\" x=\"4\" y=\"8\" width=\"252\" height=\"34\" opacity=\"0.08\"/><path class=\"s-mute\" d=\"M67 8 V42\"/><path class=\"s-mute\" d=\"M130 8 V42\"/><path class=\"s-mute\" d=\"M193 8 V42\"/><rect class=\"f-accent\" x=\"30\" y=\"40\" width=\"10\" height=\"3\"/><rect class=\"f-accent\" x=\"93\" y=\"40\" width=\"10\" height=\"3\"/><rect class=\"f-accent\" x=\"156\" y=\"40\" width=\"10\" height=\"3\"/><rect class=\"f-accent\" x=\"219\" y=\"40\" width=\"10\" height=\"3\"/><rect class=\"f\" x=\"8\" y=\"50\" width=\"55\" height=\"24\" opacity=\"0.16\"/><rect class=\"s\" x=\"8\" y=\"50\" width=\"55\" height=\"24\" fill=\"none\"/><rect class=\"f\" x=\"71\" y=\"50\" width=\"55\" height=\"24\" opacity=\"0.16\"/><rect class=\"s\" x=\"71\" y=\"50\" width=\"55\" height=\"24\" fill=\"none\"/><rect class=\"f\" x=\"134\" y=\"50\" width=\"55\" height=\"24\" opacity=\"0.16\"/><rect class=\"s\" x=\"134\" y=\"50\" width=\"55\" height=\"24\" fill=\"none\"/><rect class=\"f\" x=\"197\" y=\"50\" width=\"55\" height=\"24\" opacity=\"0.16\"/><rect class=\"s\" x=\"197\" y=\"50\" width=\"55\" height=\"24\" fill=\"none\"/><rect class=\"f\" x=\"4\" y=\"80\" width=\"252\" height=\"24\" opacity=\"0.07\"/><rect class=\"s-mute\" x=\"4\" y=\"80\" width=\"252\" height=\"24\" fill=\"none\"/><rect class=\"f\" x=\"4\" y=\"110\" width=\"252\" height=\"14\" opacity=\"0.02\"/><rect class=\"s-mute\" x=\"4\" y=\"110\" width=\"252\" height=\"14\" fill=\"none\"/><text class=\"t\" x=\"31\" y=\"66\" text-anchor=\"middle\">PRIVATE</text><text class=\"t\" x=\"130\" y=\"96\" text-anchor=\"middle\">SHARED COURT</text><text class=\"t\" x=\"130\" y=\"121\" text-anchor=\"middle\">PUBLIC</text></svg></div></div></div>"
      },
      what: "Oscar Newman's 1972 book set out four elements: territoriality, the sense of ownership created by dividing space into clearly private, semi-private and public zones; natural surveillance, layouts that let residents see the ground around them; image, the appearance of a place and whether it signals care; and milieu, the character of the wider area around it. Newman argued that high-rise slab housing failed on all four, producing large tracts of ground that belonged to nobody. The book launched what became crime prevention through environmental design.",
      why: "The design instruction that survives is worth keeping: make it clear where private space ends and public space begins, and give each dwelling a piece of ground it plainly owns. That is achievable in almost any housing layout.",
      how: [
        "Draw the private, semi-private and public zones on your plan and make each boundary readable on the ground.",
        "Give every dwelling a defensible piece of ground and a front door people can see.",
        "Avoid large shared areas that no household can plausibly claim.",
        "Keep surveillance and territory working together; a fence that creates ownership but blocks the view helps nobody."
      ],
      example: "Newman's comparison of the Van Dyke and Brownsville housing projects in New York, similar in population and income but different in layout, is the case the book is built on.",
      numbers: "",
      pitfall: "The theory carries real harm as well as use. Its British application through Alice Coleman's work was attacked on statistical grounds, and taken far it produces gated, fortified layouts that cut permeability and push problems elsewhere.",
      source: "Oscar Newman, Defensible Space: Crime Prevention Through Urban Design (1972)",
      verify: { status: "disputed", note: "The four elements, territoriality, natural surveillance, image and milieu, are confirmed against an encyclopaedia entry on defensible space theory and two further academic summaries. The contested status is also documented: an LSE review records that Bill Hillier and others published papers setting out statistical problems in Alice Coleman's British application of the theory, and a review of defensible space research reports studies finding no support. Newman's original project comparison is widely cited but I did not verify the underlying figures this session." },
      belongs: { verdict: "adjacent", why: "It is criminology applied to layout rather than a design principle in its own right, but it has a specific design use: setting the public, semi-private and private zoning of the ground in housing schemes." },
      related: [937, 939, 930, 915]
    },
    {
      n: 941,
      title: "Figure-ground in urban plans",
      aka: ["Nolli plan", "Poche plan"],
      oneLine: "Blacken the buildings and leave the space white, and the structure of a city appears.",
      demo: {
        caption: "Buildings black, space white. On the left the white is leftover; on the right it makes streets and a square.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Objects in space</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 164\"><rect class=\"s-mute\" x=\"2\" y=\"4\" width=\"256\" height=\"156\" fill=\"none\"/><rect class=\"f\" x=\"18\" y=\"20\" width=\"46\" height=\"32\"/><rect class=\"f\" x=\"98\" y=\"16\" width=\"38\" height=\"46\"/><rect class=\"f\" x=\"176\" y=\"26\" width=\"54\" height=\"28\"/><rect class=\"f\" x=\"16\" y=\"80\" width=\"34\" height=\"48\"/><rect class=\"f\" x=\"76\" y=\"90\" width=\"50\" height=\"30\"/><rect class=\"f\" x=\"152\" y=\"78\" width=\"32\" height=\"54\"/><rect class=\"f\" x=\"206\" y=\"86\" width=\"42\" height=\"36\"/><rect class=\"f\" x=\"60\" y=\"138\" width=\"64\" height=\"16\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Space carved from mass</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 164\"><rect class=\"s-mute\" x=\"2\" y=\"4\" width=\"256\" height=\"156\" fill=\"none\"/><rect class=\"f\" x=\"10\" y=\"10\" width=\"74\" height=\"48\"/><rect class=\"f\" x=\"94\" y=\"10\" width=\"72\" height=\"48\"/><rect class=\"f\" x=\"176\" y=\"10\" width=\"72\" height=\"48\"/><rect class=\"f\" x=\"10\" y=\"70\" width=\"74\" height=\"48\"/><rect class=\"f\" x=\"176\" y=\"70\" width=\"72\" height=\"48\"/><rect class=\"f\" x=\"10\" y=\"130\" width=\"74\" height=\"24\"/><rect class=\"f\" x=\"94\" y=\"130\" width=\"72\" height=\"24\"/><rect class=\"f\" x=\"176\" y=\"130\" width=\"72\" height=\"24\"/><text class=\"t\" x=\"130\" y=\"67\" text-anchor=\"middle\">STREET</text><text class=\"t\" x=\"130\" y=\"97\" text-anchor=\"middle\">SQUARE</text></svg></div></div></div>"
      },
      what: "Draw a plan with built mass in solid black and open space in white and you get a diagram of the relationship between the two. Roger Trancik put figure-ground theory first among the three approaches he identified in Finding Lost Space, alongside linkage theory and place theory. The technique's ancestor is Giambattista Nolli's 1748 map of Rome, which treated publicly accessible interiors such as church naves as white, so that public space continued through buildings rather than stopping at their walls.",
      why: "It removes style, materials and everything else and leaves only the question of whether the open space has shape. Traditional centres show white space that reads as rooms; modernist plans usually show white space that reads as leftover.",
      how: [
        "Produce the figure-ground before you produce any elevation.",
        "Look at the white, not the black, and ask whether each void has a shape you can name.",
        "Try the Nolli version, with publicly accessible interiors left white, to see how far public space really reaches.",
        "Compare your plan against a figure-ground of a place you already think works, at the same scale."
      ],
      example: "Nolli's 1748 Pianta Grande di Roma. Set a figure-ground of Siena beside one of a typical business park at the same scale and the difference needs no explanation.",
      numbers: "",
      pitfall: "The diagram flattens everything into two values, so it tells you nothing about height, use, frontage quality or topography. It is a first test, not an assessment.",
      source: "Roger Trancik, Finding Lost Space: Theories of Urban Design (1986); the technique derives from Giambattista Nolli's map of Rome (1748)",
      verify: { status: "verified", note: "Trancik's three theories, figure-ground, linkage and place, and his use of Nolli's 1748 map of Rome, confirmed against the Wikipedia entry on the book and independent published accounts of Trancik's figure-ground theory." },
      belongs: { verdict: "core", why: "It is the urban form of figure and ground, and the discipline of judging the void before the object transfers directly to layout work." },
      related: [917, 942, 122, 163]
    },
    {
      n: 942,
      title: "Grain and tissue",
      aka: ["Urban grain", "Urban morphology"],
      oneLine: "The size and pattern of plots and blocks, which sets how fine or coarse a place feels.",
      demo: {
        caption: "The same block, divided fourteen ways and once. Look at how much frontage changes hands in a single decision.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Fine grain</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 146\"><rect class=\"s\" x=\"4\" y=\"16\" width=\"252\" height=\"104\" fill=\"none\"/><path class=\"s-mute\" d=\"M22 16 V120\" stroke-dasharray=\"3 3\"/><path class=\"s-mute\" d=\"M40 16 V120\" stroke-dasharray=\"3 3\"/><path class=\"s-mute\" d=\"M58 16 V120\" stroke-dasharray=\"3 3\"/><path class=\"s-mute\" d=\"M76 16 V120\" stroke-dasharray=\"3 3\"/><path class=\"s-mute\" d=\"M94 16 V120\" stroke-dasharray=\"3 3\"/><path class=\"s-mute\" d=\"M112 16 V120\" stroke-dasharray=\"3 3\"/><path class=\"s-mute\" d=\"M130 16 V120\" stroke-dasharray=\"3 3\"/><path class=\"s-mute\" d=\"M148 16 V120\" stroke-dasharray=\"3 3\"/><path class=\"s-mute\" d=\"M166 16 V120\" stroke-dasharray=\"3 3\"/><path class=\"s-mute\" d=\"M184 16 V120\" stroke-dasharray=\"3 3\"/><path class=\"s-mute\" d=\"M202 16 V120\" stroke-dasharray=\"3 3\"/><path class=\"s-mute\" d=\"M220 16 V120\" stroke-dasharray=\"3 3\"/><path class=\"s-mute\" d=\"M238 16 V120\" stroke-dasharray=\"3 3\"/><rect class=\"f\" x=\"6.5\" y=\"94\" width=\"13\" height=\"26\"/><rect class=\"f\" x=\"24.5\" y=\"94\" width=\"13\" height=\"26\"/><rect class=\"f\" x=\"42.5\" y=\"94\" width=\"13\" height=\"26\"/><rect class=\"f\" x=\"60.5\" y=\"94\" width=\"13\" height=\"26\"/><rect class=\"f\" x=\"78.5\" y=\"94\" width=\"13\" height=\"26\"/><rect class=\"f\" x=\"96.5\" y=\"94\" width=\"13\" height=\"26\"/><rect class=\"f\" x=\"114.5\" y=\"94\" width=\"13\" height=\"26\"/><rect class=\"f\" x=\"132.5\" y=\"94\" width=\"13\" height=\"26\"/><rect class=\"f\" x=\"150.5\" y=\"94\" width=\"13\" height=\"26\"/><rect class=\"f\" x=\"168.5\" y=\"94\" width=\"13\" height=\"26\"/><rect class=\"f\" x=\"186.5\" y=\"94\" width=\"13\" height=\"26\"/><rect class=\"f\" x=\"204.5\" y=\"94\" width=\"13\" height=\"26\"/><rect class=\"f\" x=\"222.5\" y=\"94\" width=\"13\" height=\"26\"/><rect class=\"f\" x=\"240.5\" y=\"94\" width=\"13\" height=\"26\"/><text class=\"t\" x=\"130\" y=\"11\" text-anchor=\"middle\">FOURTEEN PLOTS</text><rect class=\"f\" x=\"4\" y=\"120\" width=\"252\" height=\"18\" opacity=\"0.05\"/><path class=\"s-mute\" d=\"M4 120 H256\"/><text class=\"t\" x=\"130\" y=\"134\" text-anchor=\"middle\">STREET</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Coarse grain</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 146\"><rect class=\"s\" x=\"4\" y=\"16\" width=\"252\" height=\"104\" fill=\"none\"/><rect class=\"s-mute\" x=\"8\" y=\"20\" width=\"244\" height=\"96\" fill=\"none\" stroke-dasharray=\"3 3\"/><rect class=\"f\" x=\"48\" y=\"44\" width=\"164\" height=\"54\"/><text class=\"t\" x=\"130\" y=\"11\" text-anchor=\"middle\">ONE PLOT</text><rect class=\"f\" x=\"4\" y=\"120\" width=\"252\" height=\"18\" opacity=\"0.05\"/><path class=\"s-mute\" d=\"M4 120 H256\"/><text class=\"t\" x=\"130\" y=\"134\" text-anchor=\"middle\">STREET</text></svg></div></div></div>"
      },
      what: "Urban grain means the texture of an area as set by plot widths, block sizes and building footprints: fine grain is many narrow plots, coarse grain is few large ones. The analytical tradition behind it is Conzenian urban morphology, from M. R. G. Conzen's 1960 study of Alnwick, which divided urban form into three layers: the town plan, made up of streets, plots and block plans of buildings; the building fabric; and land and building use. The Italian school, working from Muratori and Caniggia, uses urban tissue for much the same idea.",
      why: "Grain is what decides whether a street can hold small businesses, whether it can change hands one unit at a time, and whether it can adapt without wholesale redevelopment. A single large plot commits the next fifty years to one owner's decisions.",
      how: [
        "Map plot widths across your site and its context before setting building footprints.",
        "Subdivide large sites into plots that can be developed and sold separately.",
        "Match the grain of the adjoining streets at the edges of a scheme, even if the middle differs.",
        "Treat plot boundaries as the durable layer; buildings will change, plots usually will not."
      ],
      example: "Conzen's analysis of Alnwick traced medieval burgage plots, long narrow strips off the market street, and showed how they were repeatedly subdivided and built over while the plot boundaries survived.",
      numbers: "",
      pitfall: "Fine grain is treated as always better. Some uses genuinely need large floorplates, and forcing narrow plots on them produces awkward buildings that get demolished.",
      source: "M. R. G. Conzen, Alnwick, Northumberland: A Study in Town-Plan Analysis (Institute of British Geographers, publication 27, 1960)",
      verify: { status: "verified", note: "Conzen's 1960 study, its publisher and series number, and his tripartite division of urban form into town plan, building fabric and land use, confirmed against the retrospective review of the Alnwick study by Whitehand, Samuels and M. P. Conzen in Progress in Human Geography 33(6), 859-864 (2009), whose own title records the publisher as George Philip, and against published summaries of the Conzenian tradition. An earlier draft dated that review to 2010 and credited Whitehand alone. The Italian tissue tradition via Muratori and Caniggia is well documented but I did not verify a specific text this session." },
      belongs: { verdict: "adjacent", why: "It comes from historical geography as a descriptive method, but its design use is direct: choosing plot widths and block sizes, which are the decisions that outlast every building on them." },
      related: [936, 939, 941, 943]
    },
    {
      n: 943,
      title: "Shearing layers (site, structure, skin, services, space plan, stuff)",
      aka: ["Pace layering of buildings"],
      oneLine: "A building is several systems changing at different speeds, so keep them separable.",
      demo: {
        caption: "Same duct, same slab. On the left, changing a fifteen-year layer means cutting into a two-hundred-year one.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Duct cast into the slab</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 132\"><rect class=\"f\" x=\"4\" y=\"42\" width=\"252\" height=\"28\" opacity=\"0.14\"/><rect class=\"s\" x=\"4\" y=\"42\" width=\"252\" height=\"28\" fill=\"none\"/><text class=\"t\" x=\"196\" y=\"60\" text-anchor=\"middle\">STRUCTURE 30-300 YR</text><rect class=\"s-accent\" x=\"74\" y=\"42\" width=\"32\" height=\"28\" fill=\"none\" stroke-dasharray=\"3 3\"/><circle class=\"f-accent\" cx=\"90\" cy=\"58\" r=\"8\"/><path class=\"s-mute\" d=\"M90 74 V82\"/><text class=\"t\" x=\"90\" y=\"94\" text-anchor=\"middle\">SERVICES 7-15 YR</text><text class=\"t\" x=\"130\" y=\"118\" text-anchor=\"middle\">CUT THE SLAB TO REACH IT</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Duct in its own zone</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 132\"><rect class=\"f\" x=\"4\" y=\"42\" width=\"252\" height=\"28\" opacity=\"0.14\"/><rect class=\"s\" x=\"4\" y=\"42\" width=\"252\" height=\"28\" fill=\"none\"/><text class=\"t\" x=\"196\" y=\"60\" text-anchor=\"middle\">STRUCTURE 30-300 YR</text><rect class=\"s-mute\" x=\"4\" y=\"76\" width=\"252\" height=\"26\" fill=\"none\"/><path class=\"s-accent\" d=\"M4 102 H256\" stroke-dasharray=\"4 3\"/><circle class=\"f-accent\" cx=\"90\" cy=\"89\" r=\"8\"/><text class=\"t\" x=\"196\" y=\"92\" text-anchor=\"middle\">SERVICES 7-15 YR</text><text class=\"t\" x=\"130\" y=\"118\" text-anchor=\"middle\">ACCESS PANEL, NOTHING CUT</text></svg></div></div></div>"
      },
      what: "Stewart Brand, building on Frank Duffy's model, described a building as six layers that change at different rates. Site is effectively permanent. Structure lasts 30 to 300 years. Skin is replaced about every 20 years. Services last 7 to 15 years. Space plan, the internal partitions and finishes, changes every 3 to 30 years. Stuff, the furniture and possessions, moves daily. The design consequence is that a fast layer must never be buried in a slow one.",
      why: "Most expensive building failures are layer failures: ducts cast into structure, cabling chased into facades, partitions that cannot move without touching the frame. Keeping the layers separable is what lets a building be adapted instead of demolished.",
      how: [
        "Name which layer every component belongs to before detailing the junction.",
        "Never embed a short-lived layer inside a long-lived one; give services their own accessible route.",
        "Spend the money on the slow layers, where change is hardest, and keep the fast layers cheap and replaceable.",
        "Apply the same test to software and design systems: tokens are slow, components are medium, page layouts are fast."
      ],
      example: "Brand contrasted buildings that had absorbed decades of change, such as ordinary brick warehouses, with sealed high-design buildings whose services could not be reached without cutting into the fabric.",
      numbers: "Brand's ranges: structure 30-300 years, skin about 20 years, services 7-15 years, space plan 3-30 years. Duffy's earlier four layers were shell 30-50 years, services 15 years, scenery 5 years, set weeks to months.",
      pitfall: "The lifespans are Brand's estimates rather than measured figures, so quote them as an ordering of speeds and not as engineering data.",
      source: "Stewart Brand, How Buildings Learn: What Happens After They're Built (1994), extending Frank Duffy's four layers published in The Changing Workplace (1992)",
      verify: { status: "verified", note: "The six layer names, Brand's lifespan ranges, the 1994 publication date and Duffy's earlier four layers with their spans and 1992 source were all checked against the Wikipedia entry on shearing layers, which cites both books." },
      belongs: { verdict: "core", why: "Separating things by their rate of change is a general design fundamental, applied in buildings, product platforms and design systems alike." },
      related: [942, 935, 902, 910]
    }
  ]
};
