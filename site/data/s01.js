window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[1] = {
  n: 1,
  slug: "first-principles",
  title: "First principles and doctrines",
  blurb: "The big arguments about what design is for, and what anyone means by good.",
  intro: "These are the beliefs designers work from before they draw anything. Most arrived as slogans, written by architects, typographers and product designers who were picking a fight with the practice around them. Vitruvius set the oldest test. Sullivan, Loos, Mies, Rams, Vignelli and Alexander each added a rule that solved their own problem, and the rules have been quoted ever since, often by people who never read the source. Knowing where each one came from tells you when it applies and when it is somebody else's answer to somebody else's question.",
  sources: [
    "Vitruvius, De architectura (first century BC)",
    "Sir Henry Wotton, The Elements of Architecture (1624)",
    "A. W. N. Pugin, The True Principles of Pointed or Christian Architecture (1841)",
    "John Ruskin, The Seven Lamps of Architecture (1849)",
    "Louis Sullivan, The Tall Office Building Artistically Considered, Lippincott's Monthly Magazine (March 1896)",
    "Adolf Loos, Ornament and Crime (lecture 1910; first published in French 1913)",
    "Beatrice Warde, The Crystal Goblet, or Printing Should Be Invisible (lecture 1930)",
    "Kurt Koffka, Principles of Gestalt Psychology (1935)",
    "Raymond Loewy, Never Leave Well Enough Alone (1951)",
    "Hisamatsu Shin'ichi, Zen and the Fine Arts (English edition 1971)",
    "Victor Papanek, Design for the Real World (1971)",
    "Horst Rittel and Melvin Webber, Dilemmas in a General Theory of Planning, Policy Sciences (1973)",
    "Christopher Alexander, The Timeless Way of Building (1979) and The Nature of Order (2002-2004)",
    "Donald Schon, The Reflective Practitioner (1983)",
    "Henry Petroski, The Evolution of Useful Things (1992)",
    "Leonard Koren, Wabi-Sabi for Artists, Designers, Poets and Philosophers (1994)",
    "Dieter Rams, Ten Principles for Good Design (late 1970s; text as published by Vitsoe)",
    "John Maeda, The Laws of Simplicity (2006)",
    "Massimo Vignelli, The Vignelli Canon (2010)"
  ],
  entries: [

    {
      n: 1,
      title: "Firmitas, utilitas, venustas (firmness, commodity, delight)",
      aka: ["The Vitruvian triad", "Firmness, commodity and delight"],
      oneLine: "A made thing must stand up, work for the people using it, and give pleasure.",
      demo: {
        caption: "One stool, four times. Watch the leg width, the seat width and the bulk: each version drops a different condition.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 130\"><path class=\"s-mute\" d=\"M4 100 H336\"/><rect class=\"f\" x=\"8\" y=\"48\" width=\"70\" height=\"7\"/><rect class=\"f\" x=\"14\" y=\"55\" width=\"5\" height=\"45\"/><rect class=\"f\" x=\"67\" y=\"55\" width=\"5\" height=\"45\"/><rect class=\"f\" x=\"93\" y=\"48\" width=\"70\" height=\"7\"/><rect class=\"f\" x=\"99\" y=\"55\" width=\"1.2\" height=\"45\"/><rect class=\"f\" x=\"156\" y=\"55\" width=\"1.2\" height=\"45\"/><rect class=\"f\" x=\"206\" y=\"48\" width=\"14\" height=\"7\"/><path class=\"f\" d=\"M206 55 H211 L196 100 H188 Z\"/><path class=\"f\" d=\"M215 55 H220 L238 100 H230 Z\"/><rect class=\"f\" x=\"263\" y=\"42\" width=\"70\" height=\"20\"/><rect class=\"f\" x=\"265\" y=\"62\" width=\"16\" height=\"38\"/><rect class=\"f\" x=\"309\" y=\"62\" width=\"22\" height=\"38\"/><text class=\"t\" x=\"43\" y=\"118\" text-anchor=\"middle\">all three</text><text class=\"t\" x=\"128\" y=\"118\" text-anchor=\"middle\">no firmness</text><text class=\"t\" x=\"213\" y=\"118\" text-anchor=\"middle\">no commodity</text><text class=\"t\" x=\"298\" y=\"118\" text-anchor=\"middle\">no delight</text></svg></div>"
      },
      what: "Writing near the end of the first century BC, the Roman architect Vitruvius said good building needs three things at once: firmitas, durability; utilitas, useful arrangement; venustas, beauty. The English wording most people quote is not a translation of the Latin at all. It comes from Sir Henry Wotton's The Elements of Architecture (1624): \"Well Building hath three Conditions; Commodity, Firmness, and Delight.\" Scholars have pointed out that Wotton's order follows Palladio's Italian (comodita, perpetuita, bellezza) rather than Vitruvius.",
      why: "It is the oldest complete brief in design, and it still catches the three ways work fails. A thing can break, or it can survive and be useless, or it can be sound and useful and make people miserable. Holding all three in view stops you optimising one at the cost of the others without noticing.",
      how: [
        "Score any design against all three before you present it, not just the one your client is loudest about.",
        "When you drop one, say so out loud and say what you bought with it.",
        "Use it on digital work too: firmness is reliability and maintainability, commodity is the job the user came to do, delight is how the thing feels in the hand."
      ],
      example: "The Clifton Suspension Bridge in Bristol, designed by Brunel and completed in 1864 after his death, carries road traffic to this day and draws visitors who have no crossing to make. All three conditions in one object.",
      numbers: "",
      pitfall: "The triad gets used as a rubber stamp after the fact instead of a test during the work. Delight in particular tends to be claimed rather than checked with anyone outside the studio.",
      source: "Vitruvius, De architectura (first century BC); the familiar English phrasing from Sir Henry Wotton, The Elements of Architecture (1624)",
      verify: { status: "verified", note: "The Wikipedia article on firmness, commodity and delight gives Wotton's 1624 wording as \"Well Building hath three Conditions; Commodity, Firmness, and Delight\", the Latin as firmitas, utilitas et venustas, and Palladio's ordering as l'utile o comodita, la perpetuita, e la bellezza, which it says was apparently the source for Wotton's translation. The Clifton Suspension Bridge example was tightened: Brunel won the design competition but the bridge was completed in 1864, five years after his death, which the entry now says." },
      belongs: { verdict: "core", why: "The oldest surviving statement of what a designed object owes its user, and still the shortest complete checklist in the discipline." },
      related: [2, 9, 27, 36]
    },

    {
      n: 2,
      title: "Form follows function",
      aka: ["Form ever follows function"],
      oneLine: "The shape a thing takes should come out of the job it does.",
      demo: {
        caption: "Sullivan's own case. Shops, then identical office floors, then the plant. The elevation divides where the uses divide.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 172\"><rect class=\"s-mute\" x=\"40\" y=\"14\" width=\"90\" height=\"136\"/><path class=\"s\" d=\"M40 38 H130\"/><path class=\"s\" d=\"M40 116 H130\"/><path class=\"s-mute\" d=\"M40 53 H130\"/><path class=\"s-mute\" d=\"M40 68 H130\"/><path class=\"s-mute\" d=\"M40 83 H130\"/><path class=\"s-mute\" d=\"M40 98 H130\"/><text class=\"t\" x=\"36\" y=\"29\" text-anchor=\"end\">plant</text><text class=\"t\" x=\"36\" y=\"80\" text-anchor=\"end\">offices</text><text class=\"t\" x=\"36\" y=\"137\" text-anchor=\"end\">shops</text><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M134 38 H186\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M134 116 H186\"/><rect class=\"s\" x=\"186\" y=\"14\" width=\"98\" height=\"24\"/><rect class=\"s\" x=\"190\" y=\"38\" width=\"90\" height=\"78\"/><rect class=\"s-mute\" x=\"197\" y=\"43\" width=\"18\" height=\"9\"/><rect class=\"s-mute\" x=\"223\" y=\"43\" width=\"18\" height=\"9\"/><rect class=\"s-mute\" x=\"249\" y=\"43\" width=\"18\" height=\"9\"/><rect class=\"s-mute\" x=\"197\" y=\"58\" width=\"18\" height=\"9\"/><rect class=\"s-mute\" x=\"223\" y=\"58\" width=\"18\" height=\"9\"/><rect class=\"s-mute\" x=\"249\" y=\"58\" width=\"18\" height=\"9\"/><rect class=\"s-mute\" x=\"197\" y=\"73\" width=\"18\" height=\"9\"/><rect class=\"s-mute\" x=\"223\" y=\"73\" width=\"18\" height=\"9\"/><rect class=\"s-mute\" x=\"249\" y=\"73\" width=\"18\" height=\"9\"/><rect class=\"s-mute\" x=\"197\" y=\"88\" width=\"18\" height=\"9\"/><rect class=\"s-mute\" x=\"223\" y=\"88\" width=\"18\" height=\"9\"/><rect class=\"s-mute\" x=\"249\" y=\"88\" width=\"18\" height=\"9\"/><rect class=\"s-mute\" x=\"197\" y=\"103\" width=\"18\" height=\"9\"/><rect class=\"s-mute\" x=\"223\" y=\"103\" width=\"18\" height=\"9\"/><rect class=\"s-mute\" x=\"249\" y=\"103\" width=\"18\" height=\"9\"/><rect class=\"s\" x=\"190\" y=\"116\" width=\"90\" height=\"34\"/><rect class=\"s-mute\" x=\"197\" y=\"122\" width=\"36\" height=\"24\"/><rect class=\"s-mute\" x=\"241\" y=\"122\" width=\"36\" height=\"24\"/><text class=\"t\" x=\"85\" y=\"166\" text-anchor=\"middle\">the uses</text><text class=\"t\" x=\"235\" y=\"166\" text-anchor=\"middle\">the elevation</text></svg></div>"
      },
      what: "Louis Sullivan wrote it in \"The Tall Office Building Artistically Considered\", published in Lippincott's Monthly Magazine in March 1896. His sentence was \"form ever follows function\", and it sat inside a long mystical passage about the law of all things organic and inorganic. Sullivan meant that the outward shape of a skyscraper should express what happens inside it. The three-word version that survives has been read as an argument for stripping decoration, which is not what he did in practice. The idea is often credited to the sculptor Horatio Greenough, who wrote about function in the 1840s but did not coin this phrase.",
      why: "It gives you a first move on any brief. Understand what the thing does, and the shape starts to argue for itself instead of being chosen. It also gives you a defence against arbitrary styling, because you can ask what any given element is doing.",
      how: [
        "Write the function in one sentence before you draw. If you cannot, the form will be guesswork.",
        "For every element on the page or the object, name its job. Delete the ones with no answer.",
        "Treat function as including psychological and social jobs, not just mechanical ones.",
        "Do not use it to ban ornament. Sullivan did not."
      ],
      example: "The Guaranty Building in Buffalo, by Adler and Sullivan and completed in 1896, is faced in terracotta blocks carrying a dense floral ornament programme. The man who coined the phrase built the counter-argument into his own work in the same year he published it.",
      numbers: "",
      pitfall: "It is used to justify blandness. Stripping a design of everything you cannot immediately justify tends to remove the parts that carry meaning and pleasure, which are also functions.",
      source: "Louis Sullivan, \"The Tall Office Building Artistically Considered\", Lippincott's Monthly Magazine, March 1896",
      verify: { status: "verified", note: "Wikipedia's Louis Sullivan article gives the essay title, Lippincott's Monthly Magazine and March 1896, and quotes the full sentence ending \"that form ever follows function\". Corrected the magazine name, which the entry previously gave as Lippincott's Magazine. The Guaranty Building's date, its architects and its floral terracotta programme come from the Wikipedia article on the building. Greenough wrote about functional form in the 1840s but did not use this phrase." },
      belongs: { verdict: "core", why: "The single most quoted doctrine in design, and the source of most arguments about ornament and styling." },
      related: [3, 6, 9, 36, 9002]
    },

    {
      n: 3,
      title: "Form follows emotion",
      aka: ["frog design's slogan"],
      oneLine: "How a product makes someone feel is part of what it has to do.",
      demo: {
        caption: "Two chairs on one seat-height line, same footprint, same job. Everything that separates them is how they feel.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 140\"><path class=\"s-mute\" d=\"M14 120 H306\"/><path class=\"s-accent\" stroke-dasharray=\"4 4\" d=\"M14 78 H306\"/><text class=\"t\" x=\"16\" y=\"71\">seat height</text><path class=\"s\" style=\"stroke-width:5\" d=\"M30 78 H106\"/><path class=\"s\" style=\"stroke-width:5\" d=\"M106 78 V28\"/><path class=\"s\" style=\"stroke-width:5\" d=\"M34 78 V120\"/><path class=\"s\" style=\"stroke-width:5\" d=\"M104 78 V120\"/><path class=\"s\" style=\"stroke-width:5\" stroke-linecap=\"round\" d=\"M190 80 Q228 88 266 78\"/><path class=\"s\" style=\"stroke-width:5\" stroke-linecap=\"round\" d=\"M266 78 C 270 56, 260 36, 246 26\"/><path class=\"s\" style=\"stroke-width:5\" stroke-linecap=\"round\" d=\"M196 80 C 192 96, 192 110, 190 120\"/><path class=\"s\" style=\"stroke-width:5\" stroke-linecap=\"round\" d=\"M262 79 C 266 96, 266 110, 268 120\"/></svg></div>"
      },
      what: "The German-American designer Hartmut Esslinger, who founded frog, rewrote Sullivan's line as \"form follows emotion\". His argument is that function alone is a thin account of why people choose and keep things, because people want meaning as well as utility. The earliest print record I could confirm is a Forbes ASAP profile of Esslinger by Owen Edwards, headlined \"Form Follows Emotion\" and dated 12 November 1999, reporting the phrase as his credo. Donald Norman later made a related case in Emotional Design, splitting a person's response into visceral, behavioural and reflective levels.",
      why: "It licences you to work on feel without pretending it is something else. If two designs both do the job, the emotional reading decides, and you can design that deliberately rather than leave it to whatever the engineering produces.",
      how: [
        "Write down the feeling you want at first sight, during use, and in memory. Design for each separately.",
        "Test the first-glance reaction with people who have never seen the thing, before usability.",
        "Look at material, weight, sound and timing, not only the picture.",
        "Keep it honest. A warm feeling attached to a product that does not work is a short-lived trick."
      ],
      example: "The Red Dot Design Museum in Essen carries \"form follows emotion\" as a basic design principle in its Design Fundamentals display, attributing it to Esslinger by name. A fair sign it has settled into the canon rather than staying a studio slogan.",
      numbers: "",
      pitfall: "Emotion gets used as cover for decoration nobody asked for. If you cannot say what feeling an element produces and why it helps, it is styling with a better excuse.",
      source: "Hartmut Esslinger's credo at frog design, reported in Owen Edwards, \"Form Follows Emotion\", Forbes ASAP, 12 November 1999. Related: Donald Norman, Emotional Design (Basic Books, 2003)",
      verify: { status: "adjusted", note: "Corrected an author error. The entry previously said Esslinger published an essay of this title in Forbes ASAP in 1999. He did not. I read the archived piece at forbes.com/asap/1999/1112/237_print.html: it is a profile of Esslinger by the journalist Owen Edwards, and it says \"In every arena, Esslinger works to implement his credo: Form follows emotion.\" The phrase is Esslinger's, the article is Edwards's. Red Dot's own Design Fundamentals page names Esslinger as originator. Sources disagree on when he first said it, so no coinage date is given." },
      belongs: { verdict: "core", why: "A counter-doctrine to form follows function, raised from inside the profession, and why emotional response is now a normal design requirement." },
      related: [2, 11, 37, 27]
    },

    {
      n: 4,
      title: "Less is more",
      aka: ["Weniger ist mehr"],
      oneLine: "Strip a design to its essentials and what remains carries more weight.",
      demo: {
        caption: "The same word at the same size in both panels. On the right nothing competes with it, and it carries.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Nine things on the page</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between\"><span class=\"db-note\">Series 04</span><span class=\"db-note\">Autumn</span></div><div class=\"db-lines\"><i></i><i></i></div><span class=\"db-specimen\" style=\"font-size:30px\">Nocturne</span><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Book</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Share</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Notes</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">One thing on the page</span><div class=\"db-stage db-stage--tight\"><div class=\"db-centre\"><span class=\"db-specimen\" style=\"font-size:30px\">Nocturne</span></div></div></div></div>"
      },
      what: "The phrase is stuck to Ludwig Mies van der Rohe, who used it constantly and built it. He did not invent it. Robert Browning put \"less is more\" in the mouth of the painter in his 1855 poem Andrea del Sarto. Mies is often said to have picked it up from Peter Behrens, in whose office he worked, but I could not confirm that link. In Mies's hands it meant reducing a building to structure, proportion and material, with nothing added to explain it.",
      why: "Subtraction raises the value of everything left. Fewer parts means each part is read, remembered and judged, which is the effect you want on a title, a logo or a control panel. It also removes places for mistakes to hide.",
      how: [
        "Remove one element and look again. Repeat until removal starts to hurt, then put the last one back.",
        "Reduce the count of typefaces, weights, colours and rules before you touch anything else.",
        "Check what the removal cost. If people can no longer find something, you cut the wrong thing.",
        "Spend the budget you save on the quality of what stays: better paper, better photography, better tolerances."
      ],
      example: "The Barcelona Pavilion of 1929, by Mies with Lilly Reich, is eight chrome-clad cruciform columns, a set of free-standing planes in travertine, green marble and golden onyx, and two pools. There is nothing in it to look at except the material and the proportion, which is the point.",
      numbers: "",
      pitfall: "It becomes a licence to withhold information. Robert Venturi's retort, \"less is a bore\", was aimed at exactly this: minimal work that is quiet because it has nothing to say.",
      source: "Popularised by Ludwig Mies van der Rohe; the phrase appears earlier in Robert Browning's poem Andrea del Sarto (1855)",
      verify: { status: "adjusted", note: "Status changed from disputed to adjusted: the attribution is not in dispute, it was wrong in the popular telling and the correction is settled. Browning's Andrea del Sarto (1855) carries \"Well, less is more, Lucrezia\", so Mies popularised rather than coined it. The claim that he took it from Peter Behrens appeared in no source I checked, so it is left out. Pavilion details, including the eight chrome-clad cruciform columns, two pools, travertine, green marble and golden onyx, from its Wikipedia article, which credits Lilly Reich as co-designer." },
      belongs: { verdict: "core", why: "The founding slogan of minimalism and the one most working designers reach for when defending a cut." },
      related: [5, 34, 38, 41]
    },

    {
      n: 5,
      title: "Less, but better",
      aka: ["Weniger, aber besser"],
      oneLine: "Do fewer things and raise the standard of each one, rather than simply doing less.",
      demo: {
        caption: "Nine controls on the left, three on the right, same panel. The survivors gained room, a label and a hittable target.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Nine controls</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">AUX</span><span class=\"db-btn db-btn--sm\">SYN</span><span class=\"db-btn db-btn--sm\">REC</span><span class=\"db-btn db-btn--sm\">MON</span><span class=\"db-btn db-btn--sm\">EQ</span><span class=\"db-btn db-btn--sm\">FX</span><span class=\"db-btn db-btn--sm\">PAN</span><span class=\"db-btn db-btn--sm\">CUE</span><span class=\"db-btn db-btn--sm\">DIM</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three, made properly</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Volume</span><span class=\"db-btn db-btn--lg\">Up / down</span></div><div class=\"db-col db-col--tight\"><span class=\"db-label\">Source</span><span class=\"db-btn db-btn--lg\">Radio / disc</span></div><div class=\"db-col db-col--tight\"><span class=\"db-label\">Power</span><span class=\"db-btn db-btn--lg db-btn--ghost\">On / off</span></div></div></div></div></div></div>"
      },
      what: "Dieter Rams's formulation, in German \"Weniger, aber besser\". It differs from \"less is more\" in an important way: the second half is a quality bar. Rams is not asking for emptiness, he is asking you to concentrate on the essential aspects so that products are not burdened with non-essentials. The same line closes his tenth principle of good design.",
      why: "It stops reduction turning into laziness. Cutting is cheap and feels productive, but a shorter feature list with the same sloppy detailing is not better. Tying every cut to a raised standard elsewhere makes reduction pay.",
      how: [
        "Pair every deletion with an investment. Cut two features, then make the remaining one properly good.",
        "Set the quality bar in advance and in writing, otherwise you will grade against what you managed to ship.",
        "Ask what the essential aspects of this product are, in the user's terms, and defend those first.",
        "Judge the result over years, not at launch."
      ],
      example: "Vitsoe has manufactured the 606 Universal Shelving System since Rams designed it in 1960, and still publishes his ten principles on its own site. Components ordered decades apart are made to fit each other. A small range, held to a standard, kept in production.",
      numbers: "",
      pitfall: "Companies adopt the \"less\" and quietly drop the \"but better\", ending up with a thin product that photographs well. The phrase then becomes a cost-cutting slogan.",
      source: "Dieter Rams, \"Weniger, aber besser\"; also the closing line of his tenth principle of good design, as published by Vitsoe",
      verify: { status: "verified", note: "Read the ten principles on Vitsoe's own good design page, where the tenth principle ends \"Less, but better - because it concentrates on the essential aspects, and the products are not burdened with non-essentials.\" Vitsoe's own 606 page gives the 1960 design date, continuous production and the cross-decade compatibility. The German phrase is the title of the Rams book Weniger, aber besser / Less but better. Gestalten's own product page dates its edition to March 2014 and lists the Dieter and Ingeborg Rams Foundation and Jo Klatt as editors, so the earlier note calling Klatt the author of a foreword was wrong." },
      belongs: { verdict: "core", why: "The most usable version of minimalism, because it names the trade rather than just the cut." },
      related: [4, 34, 32, 38]
    },

    {
      n: 6,
      title: "Ornament and crime",
      aka: ["Ornament und Verbrechen"],
      oneLine: "Loos argued that applied decoration wastes labour and materials and belongs to an earlier age.",
      demo: {
        caption: "Same six windows in the same wall. Everything the left carries extra sits on the surface, and no opening moves.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Ornamented</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 170\"><rect class=\"s-mute\" x=\"10\" y=\"14\" width=\"160\" height=\"142\"/><path class=\"s-mute\" d=\"M10 28 H170\"/><path class=\"s-mute\" d=\"M10 138 H170\"/><rect class=\"s\" x=\"26\" y=\"48\" width=\"32\" height=\"34\"/><rect class=\"s\" x=\"74\" y=\"48\" width=\"32\" height=\"34\"/><rect class=\"s\" x=\"122\" y=\"48\" width=\"32\" height=\"34\"/><rect class=\"s\" x=\"26\" y=\"94\" width=\"32\" height=\"34\"/><rect class=\"s\" x=\"74\" y=\"94\" width=\"32\" height=\"34\"/><rect class=\"s\" x=\"122\" y=\"94\" width=\"32\" height=\"34\"/><path class=\"s-mute\" d=\"M22 46 L42 34 L62 46\"/><path class=\"s-mute\" d=\"M70 46 L90 34 L110 46\"/><path class=\"s-mute\" d=\"M118 46 L138 34 L158 46\"/><path class=\"s-mute\" d=\"M20 28 V34 M40 28 V34 M60 28 V34 M80 28 V34 M100 28 V34 M120 28 V34 M140 28 V34 M160 28 V34\"/><path class=\"s-mute\" d=\"M22 86 H62 M70 86 H110 M118 86 H158 M22 132 H62 M70 132 H110 M118 132 H158\"/><rect class=\"s-mute\" x=\"10\" y=\"44\" width=\"8\" height=\"9\"/><rect class=\"s-mute\" x=\"10\" y=\"62\" width=\"8\" height=\"9\"/><rect class=\"s-mute\" x=\"10\" y=\"80\" width=\"8\" height=\"9\"/><rect class=\"s-mute\" x=\"10\" y=\"98\" width=\"8\" height=\"9\"/><rect class=\"s-mute\" x=\"10\" y=\"116\" width=\"8\" height=\"9\"/><rect class=\"s-mute\" x=\"162\" y=\"44\" width=\"8\" height=\"9\"/><rect class=\"s-mute\" x=\"162\" y=\"62\" width=\"8\" height=\"9\"/><rect class=\"s-mute\" x=\"162\" y=\"80\" width=\"8\" height=\"9\"/><rect class=\"s-mute\" x=\"162\" y=\"98\" width=\"8\" height=\"9\"/><rect class=\"s-mute\" x=\"162\" y=\"116\" width=\"8\" height=\"9\"/><circle class=\"s-mute\" cx=\"66\" cy=\"65\" r=\"4\"/><circle class=\"s-mute\" cx=\"114\" cy=\"65\" r=\"4\"/><circle class=\"s-mute\" cx=\"66\" cy=\"111\" r=\"4\"/><circle class=\"s-mute\" cx=\"114\" cy=\"111\" r=\"4\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Plain</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 170\"><rect class=\"s-mute\" x=\"10\" y=\"14\" width=\"160\" height=\"142\"/><path class=\"s-mute\" d=\"M10 28 H170\"/><path class=\"s-mute\" d=\"M10 138 H170\"/><rect class=\"s\" x=\"26\" y=\"48\" width=\"32\" height=\"34\"/><rect class=\"s\" x=\"74\" y=\"48\" width=\"32\" height=\"34\"/><rect class=\"s\" x=\"122\" y=\"48\" width=\"32\" height=\"34\"/><rect class=\"s\" x=\"26\" y=\"94\" width=\"32\" height=\"34\"/><rect class=\"s\" x=\"74\" y=\"94\" width=\"32\" height=\"34\"/><rect class=\"s\" x=\"122\" y=\"94\" width=\"32\" height=\"34\"/></svg></div></div></div>"
      },
      what: "Adolf Loos gave the lecture in Vienna on 21 January 1910, to the Akademischer Verband fur Literatur und Musik. The usual 1908 date is wrong: Henry Kulka changed the year for the 1931 Trotzdem reprint and the mistake stuck. Loos's economic argument is that ornament dates objects early and wastes the craftsman's labour. His cultural argument is racist, resting on a comparison between ornament and the tattooing of so-called primitive peoples, and should be named as such rather than skated over.",
      why: "It is the intellectual root of the plain modern surface. Whatever you make of Loos, one working question survives: is this decoration earning its cost, or is it there because the category expects it?",
      how: [
        "Price your ornament. Work out what the flourish costs to make and maintain, then decide.",
        "Ask how long the choice will look current. Short-lived ornament dates the whole object.",
        "Separate ornament from articulation. A shadow showing a control is pressable is doing work.",
        "Read the original before quoting it. The argument is uglier than the slogan."
      ],
      example: "Loos's Goldman and Salatsch building on Michaelerplatz in Vienna sets a plain upper facade above a marble-clad shopfront. It caused a public row at the time and is still there to look at.",
      numbers: "",
      pitfall: "Quoting the title as if it settled the question. It is a polemic from a specific fight with the Vienna Secession, not a general law, and bare surfaces have their own maintenance problems.",
      source: "Adolf Loos, Ornament and Crime; lecture Vienna, 21 January 1910; first published in French 1913; dating from Christopher Long, Journal of the Society of Architectural Historians, vol. 68, no. 2 (June 2009), pp. 200-223",
      verify: { status: "adjusted", note: "The master list gives the title only. I read Long's JSAH article itself, not a summary. His words: \"What is certain is that Loos presented 'Ornament and Crime' as a lecture in Vienna on 21 January 1910, a little more than two months after his first Berlin talk.\" Long also shows Loos spoke in Berlin on 11 November 1909, but under another title and with no manuscript surviving, so the Vienna date is the first certain delivery. Wikipedia's article on the essay confirms Kulka's alteration of the year to 1908 for the 1931 Trotzdem reprint, and the 1913 French and 1929 German publications." },
      belongs: { verdict: "core", why: "The founding text of anti-ornament modernism, still live every time someone adds a flourish." },
      related: [2, 4, 8, 34]
    },

    {
      n: 7,
      title: "Truth to materials",
      aka: ["Material honesty", "Truth to the materials"],
      oneLine: "Work a material so its own nature shows, rather than disguising it as something else.",
      demo: {
        caption: "Look for the repeat. The left panel prints one tile four times, so the same knot lands at four even intervals.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Printed grain</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 100\"><g transform=\"translate(0,0)\"><path class=\"s-mute\" d=\"M0 10 C 12 6, 28 14, 40 10\"/><path class=\"s-mute\" d=\"M0 26 C 14 22, 26 30, 40 26\"/><ellipse class=\"s-mute\" cx=\"20\" cy=\"50\" rx=\"7\" ry=\"10\"/><ellipse class=\"s-mute\" cx=\"20\" cy=\"50\" rx=\"3\" ry=\"5\"/><path class=\"s-mute\" d=\"M0 76 C 12 72, 28 80, 40 76\"/><path class=\"s-mute\" d=\"M0 90 C 14 86, 26 94, 40 90\"/></g><g transform=\"translate(40,0)\"><path class=\"s-mute\" d=\"M0 10 C 12 6, 28 14, 40 10\"/><path class=\"s-mute\" d=\"M0 26 C 14 22, 26 30, 40 26\"/><ellipse class=\"s-mute\" cx=\"20\" cy=\"50\" rx=\"7\" ry=\"10\"/><ellipse class=\"s-mute\" cx=\"20\" cy=\"50\" rx=\"3\" ry=\"5\"/><path class=\"s-mute\" d=\"M0 76 C 12 72, 28 80, 40 76\"/><path class=\"s-mute\" d=\"M0 90 C 14 86, 26 94, 40 90\"/></g><g transform=\"translate(80,0)\"><path class=\"s-mute\" d=\"M0 10 C 12 6, 28 14, 40 10\"/><path class=\"s-mute\" d=\"M0 26 C 14 22, 26 30, 40 26\"/><ellipse class=\"s-mute\" cx=\"20\" cy=\"50\" rx=\"7\" ry=\"10\"/><ellipse class=\"s-mute\" cx=\"20\" cy=\"50\" rx=\"3\" ry=\"5\"/><path class=\"s-mute\" d=\"M0 76 C 12 72, 28 80, 40 76\"/><path class=\"s-mute\" d=\"M0 90 C 14 86, 26 94, 40 90\"/></g><g transform=\"translate(120,0)\"><path class=\"s-mute\" d=\"M0 10 C 12 6, 28 14, 40 10\"/><path class=\"s-mute\" d=\"M0 26 C 14 22, 26 30, 40 26\"/><ellipse class=\"s-mute\" cx=\"20\" cy=\"50\" rx=\"7\" ry=\"10\"/><ellipse class=\"s-mute\" cx=\"20\" cy=\"50\" rx=\"3\" ry=\"5\"/><path class=\"s-mute\" d=\"M0 76 C 12 72, 28 80, 40 76\"/><path class=\"s-mute\" d=\"M0 90 C 14 86, 26 94, 40 90\"/></g></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Sawn timber</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 100\"><path class=\"s-mute\" d=\"M0 8 C 40 4, 100 14, 160 9\"/><path class=\"s-mute\" d=\"M0 22 C 50 18, 90 28, 160 20\"/><path class=\"s-mute\" d=\"M0 38 C 30 36, 60 30, 100 34 C 130 37, 145 44, 160 41\"/><ellipse class=\"s-mute\" cx=\"112\" cy=\"58\" rx=\"6\" ry=\"9\"/><ellipse class=\"s-mute\" cx=\"112\" cy=\"58\" rx=\"2.5\" ry=\"4\"/><path class=\"s-mute\" d=\"M0 56 C 40 52, 80 50, 105 55\"/><path class=\"s-mute\" d=\"M119 60 C 134 62, 148 58, 160 60\"/><path class=\"s-mute\" d=\"M0 70 C 45 66, 95 76, 160 68\"/><path class=\"s-mute\" d=\"M0 86 C 60 82, 110 90, 160 84\"/><path class=\"s-mute\" d=\"M0 96 C 70 93, 120 99, 160 95\"/></svg></div></div></div>"
      },
      what: "The doctrine has two roots. John Ruskin, in The Seven Lamps of Architecture (1849), set out the Lamp of Truth and named three architectural deceits: structural deceits, where something appears to hold weight and does not; surface deceits, where one material is painted to look like another; and operative deceits, where machine work poses as handwork. The phrase itself belongs to twentieth-century sculpture, where it was the governing idea of direct carving. Tate's own definition is that the artist respects the nature of the material and works it to bring out its properties of colour and surface.",
      why: "Materials read. People can tell veneer from timber and a printed grain from a real one, and the moment they notice, the whole object loses credit. Working with the material also tends to be cheaper, because you stop paying to hide what you have.",
      how: [
        "Let the material set the detail: the grain direction, the weld, the ply edge, the paper's show-through.",
        "Do not print one material onto another and hope. If you cannot afford the real thing, use a plain material honestly.",
        "In digital work, the equivalent is not pretending a control is physical when it does not behave physically."
      ],
      example: "Barbara Hepworth and Henry Moore worked as direct carvers in stone and wood, letting the cutting find the form rather than copying a worked-out preliminary model, and keeping surfaces free of detail so the block's own colour and markings stayed visible.",
      numbers: "",
      pitfall: "It hardens into a taboo against paint, plating and finish, which is not what Ruskin argued and not what the sculptors did. Polishing to reveal a stone's colour is a finish, and an honest one.",
      source: "John Ruskin, The Seven Lamps of Architecture (1849), the Lamp of Truth; the phrase itself from twentieth-century direct carving (Brancusi, Epstein, Gaudier-Brzeska, Hepworth, Moore), as defined by Tate",
      verify: { status: "verified", note: "Checked Ruskin's Lamp of Truth and his three deceits against summaries of The Seven Lamps of Architecture (1849). Tate's art-term page on direct carving supplies the sculptural half: the carving itself suggests the form rather than a worked-out preliminary model, and the artist \"consciously respected the nature of the material, working it to bring out its particular properties and beauty of colour and surface\". It names Brancusi, Epstein, Gaudier-Brzeska, Hepworth and Moore. The example was tightened to Tate's wording: it previously said the pair carved without preparatory maquettes, which Tate does not claim and which is hard to defend for Moore. Ruskin did not use the phrase, hence the split attribution." },
      belongs: { verdict: "core", why: "Governs every choice of substrate, finish and texture, and the digital version of the same question comes up in every skeuomorphic interface." },
      related: [8, 30, 43, 897]
    },

    {
      n: 8,
      title: "Honesty of construction",
      aka: ["Pugin's two great rules", "Structural honesty"],
      oneLine: "Show how the thing is put together, and decorate the structure rather than hiding it.",
      demo: {
        caption: "The same form twice. On the right only the editable fields are boxed, so the border tells you where to type.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">A border round everything</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">Order 4471</span><span class=\"db-input\">Placed 3 March</span><span class=\"db-input\">14 Mill Lane</span><span class=\"db-input\">Dispatched</span><span class=\"db-input\">Leave with a neighbour</span><span class=\"db-input\">42.60</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">A border where it means something</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>Order 4471</span><span>Placed 3 March</span><span class=\"db-input\">14 Mill Lane</span><span>Dispatched</span><span class=\"db-input\">Leave with a neighbour</span><span>42.60</span></div></div></div></div></div>"
      },
      what: "A. W. N. Pugin set it out in The True Principles of Pointed or Christian Architecture (1841) as two rules: first, that there should be no features about a building which are not necessary for convenience, construction or propriety; second, that all ornament should consist of enrichment of the essential construction of the building. The second rule is the interesting half. Pugin is not banning ornament, he is saying ornament must be applied to the parts that are already doing work.",
      why: "It gives you a test that separates decoration from articulation. Enriching a joint, a seam or an edge makes the object easier to read, because you are drawing attention to what is actually holding it together. Applied pattern that ignores the structure makes it harder to read.",
      how: [
        "Find the real joints, edges and load paths first, then decide where any ornament goes.",
        "Delete features that exist only to look like construction. A false beam is the classic case.",
        "In layout, treat the grid, the fold and the column edge as the structure, and let emphasis land on those.",
        "In interfaces, put your visual weight on the boundaries that carry real meaning, such as the edge of an editable field."
      ],
      example: "The Centre Pompidou in Paris puts its structure and services on the outside in colour-coded runs, so that the building explains its own construction from the street.",
      numbers: "",
      pitfall: "Exposed structure becomes its own decorative style, at which point you are faking honesty. Exposed ducting installed for looks in a building that hides its real services is the modern version of Pugin's false beam.",
      source: "A. W. N. Pugin, The True Principles of Pointed or Christian Architecture (1841)",
      verify: { status: "verified", note: "The wording of the two great rules was confirmed against the Arts and Crafts Movement in Great Britain resource on Pugin, a libquotes record of the passage, and the Bard Graduate Center article on Pugin and the progress of design. All give the same two-part formulation and the 1841 date." },
      belongs: { verdict: "core", why: "The clearest published test for whether an element is doing work or is applied on top, and it transfers cleanly from buildings to layouts and interfaces." },
      related: [7, 6, 30, 32]
    },

    {
      n: 9,
      title: "Fitness for purpose",
      aka: ["Fit for purpose"],
      oneLine: "An object is good when it does the job it was made for, judged by use rather than looks.",
      demo: {
        caption: "Both faces show ten past ten. Only on the right can you tell the hour hand from the minute hand.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Cannot be read</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 120 120\"><circle class=\"s-mute\" cx=\"60\" cy=\"60\" r=\"52\"/><path class=\"s\" style=\"stroke-width:3\" d=\"M60 60 L94.6 40\"/><path class=\"s\" style=\"stroke-width:3\" d=\"M60 60 L27.2 37\"/><circle class=\"f\" cx=\"60\" cy=\"60\" r=\"2.5\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Can be read</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 120 120\"><circle class=\"s-mute\" cx=\"60\" cy=\"60\" r=\"52\"/><path class=\"s-mute\" d=\"M60 10 V16 M85 16.7 L82 21.9 M103.3 35 L98.1 38 M110 60 H104 M103.3 85 L98.1 82 M85 103.3 L82 98.1 M60 110 V104 M35 103.3 L38 98.1 M16.7 85 L21.9 82 M10 60 H16 M16.7 35 L21.9 38 M35 16.7 L38 21.9\"/><path class=\"s\" style=\"stroke-width:5\" d=\"M60 60 L38.7 45.1\"/><path class=\"s\" style=\"stroke-width:2.5\" d=\"M60 60 L96.4 39\"/><circle class=\"f\" cx=\"60\" cy=\"60\" r=\"2.5\"/></svg></div></div></div>"
      },
      what: "Fitness for Purpose was the founding slogan of the Design and Industries Association, set up in Britain in May 1915 on the Deutscher Werkbund model. The DIA existed to raise the standard of British industrial design, and its argument was that quality should be judged from use rather than from styling or historical dress. The same principle ran through British design policy after the war, in the Council of Industrial Design, set up in 1944, and in the work of Gordon Russell, its director from 1947. The same phrase is a term of art in UK consumer law, which is worth knowing because clients often mean the legal sense.",
      why: "It moves the argument off taste. Once the purpose is written down and agreed, disputes are settled by asking whether the thing does it, which is a shorter conversation than whether anyone likes the colour.",
      how: [
        "Write the purpose as a sentence with a user and a verb in it, signed off before design starts.",
        "Test against that sentence with people who match the user, not the client's marketing team.",
        "Ask whose purpose. The buyer's and the user's are often different."
      ],
      example: "Britain Can Make It, the Council of Industrial Design's 1946 exhibition at the V and A, ran on exactly this argument, presenting British goods as designed for use.",
      numbers: "",
      pitfall: "Purpose gets defined so narrowly that everything else counts as decoration. A chair is for sitting, but it also has to look right in someone's house, and that is part of the purpose.",
      source: "Design and Industries Association, founded May 1915, slogan Fitness for Purpose; carried into British public policy by the Council of Industrial Design",
      verify: { status: "adjusted", note: "Founding date corrected from March to May 1915. Wikipedia's article on the Design and Industries Association places the March 1915 exhibition of German manufactures at Goldsmiths' Hall before the founding meeting rather than at it, and confirms the Fitness for Purpose slogan and the Deutscher Werkbund model. Scholarly accounts, including E. G. West's Cardiff thesis and the Moorcroft study published by Open Book Publishers, date the DIA's formation to May 1915, with the first meeting on 19 May. Removed an unsupported claim: the entry called Gordon Russell one of the Council of Industrial Design's original members, which I could not confirm anywhere. His Wikipedia entry supports only that he became director in 1947. The article on Britain Can Make It confirms the Council organised it at the V and A in 1946 but never mentions Russell. No evidence found for who first used the phrase, so the DIA gets the slogan, not the coinage." },
      belongs: { verdict: "core", why: "The plainest statement of design as a service to use, and the doctrine behind British design policy for most of the twentieth century." },
      related: [1, 2, 36, 21]
    },

    {
      n: 10,
      title: "Economy of means",
      aka: ["Doing more with less"],
      oneLine: "Get the effect you need using the fewest parts, materials, colours and moves.",
      demo: {
        caption: "Same five stops in the same order. The right-hand version is drawn with horizontals, verticals and forty-five degree diagonals only.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Geographic route</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 120\"><path class=\"s-accent\" style=\"stroke-width:4\" d=\"M20 96 C 34 100, 46 104, 58 104 C 70 96, 66 78, 76 66 C 96 62, 108 78, 122 80 C 140 74, 150 44, 162 26\"/><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"20\" cy=\"96\" r=\"4\"/><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"58\" cy=\"104\" r=\"4\"/><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"76\" cy=\"66\" r=\"4\"/><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"122\" cy=\"80\" r=\"4\"/><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"162\" cy=\"26\" r=\"4\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Three angles only</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 120\"><path class=\"s-accent\" style=\"stroke-width:4\" d=\"M20 96 H56 L80 72 V40 H120 L144 16 H162\"/><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"20\" cy=\"96\" r=\"4\"/><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"56\" cy=\"96\" r=\"4\"/><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"80\" cy=\"72\" r=\"4\"/><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"120\" cy=\"40\" r=\"4\"/><circle class=\"s-accent\" style=\"fill:var(--paper-raised)\" cx=\"162\" cy=\"16\" r=\"4\"/></svg></div></div></div>"
      },
      what: "A working principle in art and design rather than a doctrine with a single author. The idea is that a solution using three elements beats an equivalent one using eight, because every extra part costs money, attention and a chance to go wrong. The nearest hard statement of it in design history is Hannes Meyer's Bauhaus functionalism: in 1928 he wrote that the functional diagram and the economic programme are the determining principles of the building project. Rams's tenth principle is the same instinct with a quality bar attached.",
      why: "Constraint on means forces invention. When you cannot add, you have to make each element do more than one job, and multi-tasking elements are what make a design feel tight. It also lowers cost, which keeps projects alive.",
      how: [
        "Set a budget in units before you start: two typefaces, three colours, one grid, one motion pattern.",
        "Make elements double up. A rule that separates can also align; a colour that codes can also brand.",
        "Count your parts at the end and try to halve the count without losing a function."
      ],
      example: "Harry Beck's London Underground diagram of 1933 uses only horizontals, verticals and forty-five degree diagonals, plus a tick for a station and a diamond for an interchange, which Beck himself later changed to a circle. A whole network in a handful of moves.",
      numbers: "",
      pitfall: "Economy of means turns into false economy when you reuse one element for jobs that need to be told apart. Two different meanings sharing one colour is cheap until someone acts on the wrong one.",
      source: "Origin unclear as a named doctrine; the closest sourced statements are Hannes Meyer's 1928 functionalism at the Bauhaus and Dieter Rams's tenth principle",
      verify: { status: "unverified", note: "No originator or canonical text found for economy of means as a named principle, and I am not going to invent one. Verified instead: Hannes Meyer's 1928 line that \"the functional diagram and the economic programme are the determining principles of the building project\", quoted in his Wikipedia article, and Rams's tenth principle from Vitsoe. Example corrected too: Wikipedia's tube map article says Beck's 1933 diagram used ticks for stations and diamonds for interchanges, and that Beck later changed the diamond to a circle. The entry had the circle as original, which is wrong." },
      belongs: { verdict: "core", why: "Even without a named author it is the mechanism behind most of the reduction doctrines here, and the one designers apply day to day." },
      related: [4, 5, 34, 16]
    },

    {
      n: 11,
      title: "MAYA - most advanced yet acceptable",
      aka: ["The MAYA principle"],
      oneLine: "Push a design as far forward as people will still accept, and no further.",
      demo: {
        caption: "One cup, five steps further from the expected shape each time. Notice where you stop seeing a cup.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 112\"><path class=\"s\" style=\"stroke-width:2\" d=\"M16 48 L20 84 H48 L52 48 Z\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M52 54 C 64 54, 64 74, 52 74\"/><path class=\"s\" style=\"stroke-width:3\" d=\"M8 88 H60\"/><path class=\"s-mute\" d=\"M26 38 C 30 32, 22 28, 26 22\"/><path class=\"s-mute\" d=\"M42 38 C 46 32, 38 28, 42 22\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M84 48 L88 84 H116 L120 48 Z\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M120 54 C 132 54, 132 74, 120 74\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M152 48 V84 H188 V48\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M188 58 C 196 58, 196 70, 188 70\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M220 48 V84 H256 V48\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M288 48 H324 V84 H288 Z\"/><text class=\"t\" x=\"34\" y=\"104\" text-anchor=\"middle\">1</text><text class=\"t\" x=\"102\" y=\"104\" text-anchor=\"middle\">2</text><text class=\"t\" x=\"170\" y=\"104\" text-anchor=\"middle\">3</text><text class=\"t\" x=\"238\" y=\"104\" text-anchor=\"middle\">4</text><text class=\"t\" x=\"306\" y=\"104\" text-anchor=\"middle\">5</text></svg></div>"
      },
      what: "Raymond Loewy's rule, set out in his 1951 autobiography Never Leave Well Enough Alone. His observation was that the public's taste will not accept the logical solution to a requirement if that solution departs too far from what they are used to. So the job is to find the furthest point of advance that people will still recognise and buy. The idea is usually explained as a tension between curiosity about the new and unease at the unfamiliar.",
      why: "It turns the fight between innovation and familiarity into a dial rather than a yes or no. You can decide, deliberately, how far ahead of the audience to sit, and you can move the dial per element instead of per project.",
      how: [
        "Advance one thing hard and keep the rest conventional. Radical layout with familiar labels usually lands; radical everything usually does not.",
        "Find the conventions the audience uses daily, and keep those unless you have a real reason.",
        "Test the boldest version and the safe version on real users and look for the gap between what they say and what they can do.",
        "Revisit the acceptable line each year. It moves."
      ],
      example: "The rule was written by a working industrial designer whose output ran from locomotives to the Lucky Strike pack, all of it aimed at mass-market buyers rather than at other designers, which is the constituency the rule is about.",
      numbers: "",
      pitfall: "MAYA gets used as an excuse to never change anything, because acceptability is always easier to argue than advance. Loewy's point had two halves and the first one was most advanced.",
      source: "Raymond Loewy, Never Leave Well Enough Alone (Simon and Schuster, 1951)",
      verify: { status: "verified", note: "Wikipedia's Loewy article lists Never Leave Well Enough Alone as his 1951 autobiography and gives MAYA, most advanced yet acceptable, as his design philosophy. Academic citations of the MAYA principle, including Eggink's Design and Emotion paper, cite the same 1951 Simon and Schuster book, and one secondary account cites page 227 for the passage. All quote Loewy's line about the adult public's taste not accepting a solution that departs too far from the norm. The neophilia and neophobia framing is a later gloss, most associated with Derek Thompson's writing, so those terms are not attached to Loewy here." },
      belongs: { verdict: "core", why: "The standard tool for calibrating how far a redesign can move, and the honest answer to a client asking why the bold option failed." },
      related: [3, 35, 19, 21]
    },

    {
      n: 12,
      title: "The crystal goblet (typography should be invisible)",
      aka: ["Printing should be invisible", "Transparent typography"],
      oneLine: "Typography serves the words, like a clear glass serving the wine inside it.",
      demo: {
        caption: "The same sentence, same size, same measure. On the left you notice the letters; on the right you just read.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Body copy in a mono face</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type db-type--mono\" style=\"font-size:13px;line-height:1.55\"><p>The bell in the tower had not been rung for thirty years, and nobody in the village could remember who kept the key to the door at the bottom of the stairs.</p></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Body copy in a text face</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:13px;line-height:1.55\"><p>The bell in the tower had not been rung for thirty years, and nobody in the village could remember who kept the key to the door at the bottom of the stairs.</p></div></div></div></div>"
      },
      what: "Beatrice Warde delivered this as a speech titled \"Printing Should Be Invisible\" to the British Typographers' Guild at the St Bride Institute in London on 7 October 1930. Her image is a choice between a solid gold goblet and a crystal one: the connoisseur picks crystal, because they want to see the wine. Applied to a book page, the type should not call attention to itself and get between reader and meaning.",
      why: "It gives you a clear test for reading matter. If a reader notices the typeface while reading continuous text, something has gone wrong. That single rule settles most arguments about display faces in body copy.",
      how: [
        "For anything meant to be read at length, choose a face for its behaviour at size, not for its personality.",
        "Judge a setting by printing a spread and reading it, not by looking at a specimen line.",
        "Keep the crystal goblet for reading matter. Posters and packaging are the gold goblet, meant to be looked at.",
        "Fix the things that break transparency first: line length, line spacing, word spacing, contrast."
      ],
      example: "Any well-set literary paperback. You read a Penguin Classic for hours without forming an opinion about the typeface, which is the effect Warde is describing.",
      numbers: "",
      pitfall: "It gets treated as a universal law rather than a rule for continuous reading, and it has been criticised for dressing up one tradition's taste as neutrality. Invisible typography is still a style, carrying the values of whoever chose it.",
      source: "Beatrice Warde, lecture to the British Typographers' Guild, St Bride Institute, London, 7 October 1930; printed soon after in the trade press, issued as a pamphlet in 1932 and 1937, and collected in The Crystal Goblet: Sixteen Essays on Typography (1955)",
      verify: { status: "adjusted", note: "Wikipedia's entry for Beatrice Warde confirms the title Printing Should Be Invisible, the British Typographers' Guild, the St Bride Institute and the 7 October 1930 date, and I read the essay text at City Tech OpenLab. Publication history corrected: the entry said it appeared under the crystal goblet title from 1932. Wikipedia supports only that it was printed days later in the trade press, issued as a pamphlet in 1932 and 1937, and collected in 1955. The critical reading comes from Loraine Furter and the Clemson paper Shattering the Crystal Goblet." },
      belongs: { verdict: "core", why: "The founding argument for typographic restraint in reading matter, and the thing every later argument for expressive typography pushes against." },
      related: [18, 29, 27, 34]
    },

    {
      n: 13,
      title: "Design is one",
      aka: ["The discipline is unitary"],
      oneLine: "Design is a single discipline applied to different subjects, not a set of separate trades.",
      demo: { none: "Vignelli's claim is that the judgement travels regardless of style, so three artefacts sharing a look would show a house style rather than one discipline." },
      what: "One of the twelve intangibles in Massimo Vignelli's The Vignelli Canon (2010). His wording is that design is one, it is not many different ones, and that the discipline can be applied to many different subjects regardless of style. Vignelli's own career was the argument: signage, books, furniture, packaging, corporate identity and interiors, all governed by the same set of rules.",
      why: "It stops you starting from zero every time the medium changes. The judgements that matter, about proportion, hierarchy, spacing and appropriateness, travel between a book and a bus timetable. It also makes you a more useful practitioner, because you can follow a client's problem across media instead of handing it on.",
      how: [
        "Carry your judgement across media rather than your visual tricks. The tricks do not transfer, the reasoning does.",
        "When you take on unfamiliar work, look for the underlying structure rather than the surface conventions.",
        "Build one set of rules for a project and apply it everywhere, including the parts nobody will photograph.",
        "Learn the production craft of each medium anyway. Unity of discipline is not an excuse for not knowing how printing works."
      ],
      example: "The Vignellis' work for Knoll and for the New York subway sits alongside their tableware and their book design, and the same proportional logic and typographic restraint runs through all of it.",
      numbers: "",
      pitfall: "It becomes an excuse for a designer to take work they have no craft knowledge of. Discipline may be one, but tolerances, inks, screens and materials are not, and clients pay for that knowledge.",
      source: "Massimo Vignelli, The Vignelli Canon (2010)",
      verify: { status: "verified", note: "Read the Design Is One section of The Vignelli Canon in the PDF published by RIT's Vignelli Center. His words: \"Design is one - it is not many different ones. The discipline of Design is one and can be applied to many different subjects, regardless of style.\" The twelve intangibles listed in the book's contents are Semantics, Syntactics, Pragmatics, Discipline, Appropriateness, Ambiguity, Design is One, Visual Power, Intellectual Elegance, Timelessness, Responsibility and Equity." },
      belongs: { verdict: "core", why: "A claim about the nature of the discipline itself, made by one of its most consistent practitioners, and the argument for teaching principles rather than tools." },
      related: [21, 22, 24, 27]
    },

    {
      n: 14,
      title: "The whole is other than the sum of its parts",
      aka: ["Gestalt maxim", "Emergence in perception"],
      oneLine: "A composition is perceived as one thing, with properties none of its parts has alone.",
      demo: {
        caption: "Three identical discs in the same three places. Turn the notches inward and a triangle appears that nobody drew.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Notches turned out</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 200\"><circle class=\"f\" cx=\"100\" cy=\"58\" r=\"32\"/><circle class=\"f\" cx=\"48\" cy=\"156\" r=\"32\"/><circle class=\"f\" cx=\"152\" cy=\"156\" r=\"32\"/><polygon style=\"fill:var(--paper-raised)\" points=\"100,58 121.6,17.3 100,6 78.4,17.3\"/><polygon style=\"fill:var(--paper-raised)\" points=\"48,156 26.4,196.7 3.4,182.8 2,156\"/><polygon style=\"fill:var(--paper-raised)\" points=\"152,156 173.6,196.7 196.6,182.8 198,156\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Notches turned in</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 200\"><circle class=\"f\" cx=\"100\" cy=\"58\" r=\"32\"/><circle class=\"f\" cx=\"48\" cy=\"156\" r=\"32\"/><circle class=\"f\" cx=\"152\" cy=\"156\" r=\"32\"/><polygon style=\"fill:var(--paper-raised)\" points=\"100,58 78.4,98.7 100,110 121.6,98.7\"/><polygon style=\"fill:var(--paper-raised)\" points=\"48,156 69.6,115.3 92.6,129.2 94,156\"/><polygon style=\"fill:var(--paper-raised)\" points=\"152,156 130.4,115.3 107.4,129.2 106,156\"/></svg></div></div></div>"
      },
      what: "The idea comes from Kurt Koffka's Principles of Gestalt Psychology (1935). His own sentence runs: \"The whole is something else than the sum of its parts, because summing is a meaningless procedure, whereas the whole-part relationship is meaningful.\" The title above is the common English rendering of that. Either way it is usually misquoted as \"greater than the sum of its parts\", which is not what he meant. Koffka's point was qualitative: the whole is a different kind of thing, with properties that do not exist in the parts. Four dots make a square. The square is not in any dot.",
      why: "It explains why fixing elements one at a time does not fix a layout. People see the arrangement before they see the components, so the relationships you set up are the design. It is also why a page can be made of good parts and still read as a mess.",
      how: [
        "Judge every layout squinted, at thumbnail size, or across the room, before you judge any element.",
        "When something is wrong, change a relationship first: spacing, alignment, grouping, size ratio.",
        "Print or mock up the whole set together. A component library approved in isolation will produce incoherent pages.",
        "Watch for accidental wholes: three unrelated items in a row will be read as a group whether you meant it or not."
      ],
      example: "Paul Rand's 8-bar IBM logo of 1972, which IBM still uses unchanged, is a set of eight horizontal stripes broken by gaps. No single stripe contains a letter. The letters exist only in the arrangement.",
      numbers: "",
      pitfall: "Quoting it as \"greater than\" and using it as motivational filler about teamwork. As a design tool it is specific and useful, and the specificity is in the claim that the whole is a different kind of thing.",
      source: "Kurt Koffka, Principles of Gestalt Psychology (1935)",
      verify: { status: "adjusted", note: "Wikipedia's Gestalt psychology article quotes Koffka's 1935 sentence in full and says directly that the more-than version is not a precise description of the Gestaltist view. The entry now gives Koffka's own wording rather than treating the master list's \"other than\" as a quotation. IBM's own logo history page confirms Rand's 8-bar mark of 1972, unchanged since." },
      belongs: { verdict: "adjacent", why: "Perceptual psychology rather than design doctrine, but its design use is exact: it is why composition is judged whole and first, and it underwrites every Gestalt grouping principle designers use." },
      related: [155, 170, 113, 116]
    },

    {
      n: 15,
      title: "Nothing by accident (intentionality)",
      aka: ["Nothing left to chance"],
      oneLine: "Every choice in the finished work should be a decision somebody made on purpose.",
      demo: { none: "The entry concludes that it duplicates 22 and 32, so any demo built here would belong to one of those two rather than to this." },
      what: "A working attitude rather than a named doctrine. The idea is that a designer should be able to explain any measurement, colour or space in the finished piece. I could not find an originator or a canonical text for it under this name. The sentiment does exist in sourced form elsewhere in this section: Dieter Rams's eighth principle says nothing must be arbitrary or left to chance, and Vignelli's Discipline says there is no room for sloppiness, carelessness or procrastination.",
      why: "Stated on its own it has real force in a studio, because it puts the burden of proof on the person who left a default in. In practice, though, it repeats two better-sourced entries in the same list.",
      how: [
        "Use the sourced versions instead: Rams's eighth principle for objects, Vignelli's Discipline for layout.",
        "Run the test they both imply: pick five values at random from your file and ask why each is what it is.",
        "Treat unexplained values as bugs, not as style."
      ],
      example: "Not applicable. The behaviour this entry describes is covered by entries 22 and 32, both of which have named sources and published wording.",
      numbers: "",
      pitfall: "Taken literally it produces designers who cannot ship, because it forbids the useful default and the happy accident. Good work often keeps something that arrived by chance and was then kept on purpose, which is a different thing from having no accidents.",
      source: "Origin unclear. No named originator found",
      verify: { status: "unverified", note: "I searched for an originator and a canonical text for nothing by accident as a design doctrine and found none. What I did verify is the wording of the two entries that cover the same ground: Rams's eighth principle on Vitsoe's site (\"Nothing must be arbitrary or left to chance\") and Vignelli's Discipline section in The Vignelli Canon." },
      belongs: { verdict: "cut", why: "It has no traceable origin and it duplicates two sourced entries in this same section. Replace it with 32 (good design is thorough down to the last detail) and 22 (discipline and self-imposed rules), which say the same thing with published wording behind them." },
      related: [22, 32, 5]
    },

    {
      n: 16,
      title: "Constraints as a generative force",
      aka: ["Design depends largely on constraints"],
      oneLine: "Limits are the raw material of a design, not an obstacle to be negotiated away.",
      demo: {
        caption: "The same four blocks. On the right each may only start and stop on a column edge. Nothing else changed.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">No rule</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 300 132\"><rect class=\"f-mute\" x=\"17\" y=\"12\" width=\"191\" height=\"22\"/><rect class=\"f-mute\" x=\"63\" y=\"44\" width=\"232\" height=\"22\"/><rect class=\"f-mute\" x=\"9\" y=\"76\" width=\"151\" height=\"22\"/><rect class=\"f-mute\" x=\"141\" y=\"108\" width=\"139\" height=\"22\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">One rule: start and stop on a column</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 300 132\"><rect style=\"fill:var(--accent-soft)\" x=\"0\" y=\"0\" width=\"43.3\" height=\"132\"/><rect style=\"fill:var(--accent-soft)\" x=\"51.3\" y=\"0\" width=\"43.3\" height=\"132\"/><rect style=\"fill:var(--accent-soft)\" x=\"102.7\" y=\"0\" width=\"43.3\" height=\"132\"/><rect style=\"fill:var(--accent-soft)\" x=\"154\" y=\"0\" width=\"43.3\" height=\"132\"/><rect style=\"fill:var(--accent-soft)\" x=\"205.3\" y=\"0\" width=\"43.3\" height=\"132\"/><rect style=\"fill:var(--accent-soft)\" x=\"256.7\" y=\"0\" width=\"43.3\" height=\"132\"/><rect class=\"f-mute\" x=\"0\" y=\"12\" width=\"197.2\" height=\"22\"/><rect class=\"f-mute\" x=\"51.3\" y=\"44\" width=\"248.5\" height=\"22\"/><rect class=\"f-mute\" x=\"0\" y=\"76\" width=\"145.9\" height=\"22\"/><rect class=\"f-mute\" x=\"154\" y=\"108\" width=\"145.9\" height=\"22\"/></svg></div></div></div>"
      },
      what: "Charles Eames put it plainly in the Design Q and A, filmed in 1972 from questions put by Madame L'Amic of the Musee des Arts Decoratifs for the Louvre's What Is Design? exhibition. Asked whether the creation of design admits constraint, Eames said design depends largely on constraints, and that one of the few effective keys is the designer's ability to recognise as many of the constraints as possible and their willingness and enthusiasm for working within them. The claim is not that limits are tolerable. It is that they are the thing you design with.",
      why: "A brief with no constraints gives you nowhere to start and no way to tell a good answer from an arbitrary one. Naming the real limits early turns an open problem into a shaped one, and the shape usually suggests the solution.",
      how: [
        "Start each project by listing every constraint you can find: budget, format, production, legal, brand, time, the client's boss.",
        "Sort them into fixed and negotiable, and check which of the fixed ones are actually just habits.",
        "When you are stuck, add a constraint rather than removing one. Force a two-colour version or a half-width layout.",
        "Design the constraint into the answer, so that removing it would break the work."
      ],
      example: "The Eames Office's own plywood furniture came directly out of wartime work moulding plywood leg splints for the US Navy. The material limit produced the form.",
      numbers: "",
      pitfall: "Accepting invented constraints without checking them. Half the limits on a project are somebody's assumption, and a designer who never tests them is not working within constraints, just following instructions.",
      source: "Charles Eames, Design Q and A (film, 1972; questions by Madame L'Amic for the Louvre's What Is Design? exhibition, 1969)",
      verify: { status: "verified", note: "The Eames Foundation's Design Q and A page states that in 1969 the curator Madame L'Amic of the Musee des Arts Decoratifs asked five designers in the Louvre exhibition Qu'est ce que le design? to answer a set of questions, and that Charles and Ray turned the answers into the film in 1972. The exchange, \"Does the creation of design admit constraint? Design depends largely on constraints\", appears identically in the New Yorker's 1999 Eames profile and in several transcripts." },
      belongs: { verdict: "core", why: "One of the very few statements about method that a working designer can apply on the first morning of a project." },
      related: [22, 10, 50, 9]
    },

    {
      n: 17,
      title: "Content determines form",
      aka: ["Form follows content"],
      oneLine: "Read and understand the material first, then build a form that fits what is actually there.",
      demo: {
        caption: "One template, two fillings. Placeholder of equal length on the left, the real content on the right, where it stops fitting.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Designed on placeholder</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--nowrap db-row--top db-row--tight\"><div class=\"db-card\" style=\"flex:1 1 0;min-width:0\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:12px\">Lorem ipsum dolor</span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div><div class=\"db-card\" style=\"flex:1 1 0;min-width:0\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:12px\">Lorem ipsum dolor</span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div><div class=\"db-card\" style=\"flex:1 1 0;min-width:0\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:12px\">Lorem ipsum dolor</span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">The same template, real content</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--nowrap db-row--top db-row--tight\"><div class=\"db-card\" style=\"flex:1 1 0;min-width:0\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:12px\">Adjustable-height desk frame in oiled walnut</span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div><div class=\"db-card\" style=\"flex:1 1 0;min-width:0\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:12px\">Clip</span></div></div><div class=\"db-card\" style=\"flex:1 1 0;min-width:0\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:12px\">Wall shelf</span><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div></div></div></div></div>"
      },
      what: "A studio principle rather than a doctrine with a signed author. The argument is that a layout should be derived from the real content, its length, its structure, its awkward cases, rather than from a template the content is then poured into. The closest sourced statement in this section is Vignelli's Semantics, which he describes as the search for the meaning of whatever we have to design, and which he places before the visual decisions.",
      why: "Designing against real content is the only way to find out what the design has to survive. Every project has a headline three times longer than the others and a table nobody mentioned, and those cases decide the layout.",
      how: [
        "Get the real text, the real images and the real data before you draw. Ask for the longest and the shortest of each.",
        "Never design with placeholder Latin for anything you will present. It hides every fit problem you have.",
        "Build the awkward cases first: the empty state, the twelve-item list, the name with an apostrophe in it.",
        "Let the content's own structure suggest the hierarchy, rather than imposing a hierarchy and editing to fit."
      ],
      example: "Any editorial magazine spread where the pull quote length, the caption count and the picture crop were decided together with the writer. The difference against a templated page is visible immediately in how the columns end.",
      numbers: "",
      pitfall: "It can become a reason never to start, because the content is late. The working compromise is to design the structure from a representative sample and hold the details open until the real material lands.",
      source: "Origin unclear as a named doctrine; the closest sourced statement is Massimo Vignelli's Semantics in The Vignelli Canon (2010)",
      verify: { status: "unverified", note: "No originator or first use found for content determines form as a named principle, and several plausible attributions could not be checked, so they are left out. The Vignelli anchor is verified from the RIT Vignelli Center PDF of The Vignelli Canon, where he writes \"Semantics, for me, is the search of the meaning of whatever we have to design\" and describes it as the very first thing he does on a new assignment." },
      belongs: { verdict: "core", why: "Unsourced as a slogan, but it is the practical rule that separates designed pages from filled templates, and it is testable on any live project." },
      related: [13, 18, 21, 12]
    },

    {
      n: 18,
      title: "Clarity before beauty",
      aka: ["Legibility first"],
      oneLine: "If a person cannot understand the thing, no amount of visual quality rescues it.",
      demo: {
        caption: "Find the start time and the price in each panel. Only the right one gives them up quickly.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Handsome, slow to read</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:20px\">Evening recital</span><div class=\"db-type db-type--display\" style=\"font-size:12px;text-align:center\"><p>Doors from seven, the programme begins at half past seven on the fourteenth, tickets are twelve pounds on the door or nine in advance, and the box office shuts an hour before curtain.</p></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Same facts, found at a glance</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:20px\">Evening recital</span><div class=\"db-row db-row--between\"><span class=\"db-note\">Date</span><span class=\"db-type\" style=\"font-size:13px\">14 March</span></div><div class=\"db-row db-row--between\"><span class=\"db-note\">Starts</span><span class=\"db-type\" style=\"font-size:13px\">7.30pm</span></div><div class=\"db-row db-row--between\"><span class=\"db-note\">In advance</span><span class=\"db-type\" style=\"font-size:13px\">&pound;9</span></div><span class=\"db-btn\">Book a seat</span></div></div></div></div></div>"
      },
      what: "A priority rule rather than a named doctrine, and I could not find an originator for the phrase. Its sourced ancestors are specific rather than general: Warde's crystal goblet argues it for continuous text, and Rams's fourth principle says good design makes a product understandable, clarifying its structure so that at best it is self-explanatory. Stated broadly, the rule is a sequencing instruction. Solve comprehension first, then spend what is left on how it looks.",
      why: "Comprehension failures are silent. Nobody writes in to say they did not understand the pricing table, they just leave. Putting clarity first means you catch the expensive failures before you spend time on the cheap ones.",
      how: [
        "Show an unfinished version to someone outside the project and ask them to tell you what it says, not whether they like it.",
        "Fix reading order, labelling and contrast before you fix colour and texture.",
        "Set a comprehension test you can fail: can a first-time reader find the price, the date and the next step in ten seconds.",
        "When beauty and clarity genuinely conflict, write the trade-off down and take it to the client rather than deciding it quietly."
      ],
      example: "Jock Kinneir and Margaret Calvert's British road signage was tested on the Preston bypass in 1958 before it went up on the M1 in 1959. Legibility at speed was settled first, and the graphic system is still in service.",
      numbers: "",
      pitfall: "It gets used to shut down every visual ambition on the grounds that plainness is safer. Plain is not automatically clear, and an ugly page that people refuse to read has failed the clarity test as well.",
      source: "Origin unclear as a phrase. Sourced ancestors: Beatrice Warde's crystal goblet (1930) and Dieter Rams's fourth principle, good design makes a product understandable",
      verify: { status: "unverified", note: "No originator found for clarity before beauty as a named principle, so the status stays unverified. Both ancestors are verified: Warde's 1930 lecture text via City Tech OpenLab, Rams's fourth principle via Vitsoe. The example is now sourced too. Wikipedia's article on the Transport typeface says all aspects of the signing were investigated and tested, first on the Preston bypass in 1958, before introduction on the M1 a year later." },
      belongs: { verdict: "core", why: "Unsourced as a slogan, but it names the order of operations that separates information design from decoration, and it settles more real arguments than any other line in this section." },
      related: [12, 28, 17, 23]
    },

    {
      n: 19,
      title: "Utility before novelty",
      aka: ["Usefulness first"],
      oneLine: "A new idea earns its place only after the thing works for the person using it.",
      demo: { none: "The entry's own conclusion is that the judgement belongs to 36 and 11, so any demo built here would be one of theirs." },
      what: "A priority rule with no traceable author. Its two sourced neighbours in this same section say it better and say it differently. Rams's second principle is that good design makes a product useful, and that everything else must be subordinated to that usefulness. Loewy's MAYA says the opposite thing about ambition: advance as far as the audience will accept, because being too safe is also a failure. Between them there is nothing left for this entry to do.",
      why: "As a slogan it is a caution against novelty for its own sake, which is a real problem. As an entry on a list of fundamentals it repeats better-attributed material.",
      how: [
        "Use Rams's second principle when you need to argue for usefulness over a feature nobody asked for.",
        "Use MAYA when you need to decide how far ahead of the audience the work should sit.",
        "Ask the harder question the slogan avoids: which novelty is itself the utility, because sometimes it is."
      ],
      example: "Not applicable. The judgements this entry describes are covered by entries 36 and 11, both of which have published sources.",
      numbers: "",
      pitfall: "Used as written, it becomes an argument against ever doing anything new, which is how organisations end up with products that work perfectly and nobody wants.",
      source: "Origin unclear. No named originator found",
      verify: { status: "unverified", note: "I searched for a named source for utility before novelty as a design doctrine and found none. The two entries I recommend in its place are verified: Rams's second principle on Vitsoe's own site, and Loewy's MAYA from Never Leave Well Enough Alone (1951)." },
      belongs: { verdict: "cut", why: "No source, and it duplicates 36 (good design makes a product useful) while flatly contradicting 11 (MAYA). Replace it with those two, which state both halves of the trade honestly." },
      related: [36, 11, 35]
    },

    {
      n: 20,
      title: "Timelessness over fashion",
      aka: ["Long-lasting design", "Anti-fashion"],
      oneLine: "Design for the length of the thing's life, not for the year it launches.",
      demo: {
        caption: "Each card is shown styled, then with the styling stripped out. Only the right-hand one still has a hierarchy underneath.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">The style is the hierarchy</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent db-fill\"></span><span class=\"db-type\" style=\"font-size:11px\">Northern line closures</span><span class=\"db-type\" style=\"font-size:11px\">Sunday service from 14 March</span><span class=\"db-type\" style=\"font-size:11px\">Buses every ten minutes</span></div></div><span class=\"db-note\">styling removed</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:11px\">Northern line closures</span><span class=\"db-type\" style=\"font-size:11px\">Sunday service from 14 March</span><span class=\"db-type\" style=\"font-size:11px\">Buses every ten minutes</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Structure under the style</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent db-fill\"></span><span class=\"db-type\" style=\"font-size:17px\">Northern line closures</span><span class=\"db-type\" style=\"font-size:11px\">Sunday service from 14 March</span><span class=\"db-type\" style=\"font-size:11px\">Buses every ten minutes</span></div></div><span class=\"db-note\">styling removed</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:17px\">Northern line closures</span><span class=\"db-type\" style=\"font-size:11px\">Sunday service from 14 March</span><span class=\"db-type\" style=\"font-size:11px\">Buses every ten minutes</span></div></div></div></div></div></div>"
      },
      what: "Two sources say it. Vignelli lists Timelessness among his intangibles: he writes that he is definitively against any fashion of design, and that he likes design that is clear, simple and enduring. Rams's seventh principle is that good design is long-lasting, avoiding fashionable styling so that a product stays relevant for years rather than dating quickly. Both are arguments about lifespan, and both assume the thing is expected to last.",
      why: "Fashionable choices carry a hidden bill, because someone has to pay to redo them. A design that looks current for a decade costs the client less and lets you spend your effort on structure rather than resurfacing.",
      how: [
        "Ask how long this will be in service, and design to that horizon rather than to the launch.",
        "Prefer the conventions that have survived several style cycles: real hierarchy, generous spacing, honest materials.",
        "Isolate the parts that will date. Put the fashionable colour in one variable, not spread through the file.",
        "Look at what the thing will look like once the current style has become embarrassing, and check what is left standing."
      ],
      example: "The 606 shelving system Vitsoe still sells was designed by Rams in 1960 and has been in continuous production since, which is the only real test this principle has.",
      numbers: "",
      pitfall: "Timelessness is often just the fashion of the person saying it, usually mid-century Swiss. Genuinely long-lived work is chosen by the market over decades, not declared in a presentation.",
      source: "Massimo Vignelli, The Vignelli Canon (2010), Timelessness; Dieter Rams, seventh principle, good design is long-lasting",
      verify: { status: "verified", note: "Read the Timelessness section of The Vignelli Canon in the PDF published by RIT's Vignelli Center. Vignelli writes \"We are definitively against any fashion of design and any design fashion\" and closes \"We like Design that is clear, simple and enduring. And that is what timelessness means in Design.\" Rams's seventh principle checked against Vitsoe's published text. Vitsoe's own 606 page gives the 1960 design date and continuous production." },
      belongs: { verdict: "core", why: "Two independent named sources say the same thing, and lifespan is a decision every project makes whether or not anyone names it." },
      related: [31, 5, 26, 11]
    },

    {
      n: 21,
      title: "Appropriateness to context",
      aka: ["Appropriateness"],
      oneLine: "The right answer depends on who it is for, where it appears and what it has to survive.",
      demo: {
        caption: "One panel, two reading distances. At twenty metres the type must be this big, so two words are all that fit.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Read at two metres</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:12px\">Aylesbury and the north</span><div class=\"db-type\" style=\"font-size:9px\"><p>Follow the ring road for two miles and take the third exit. Vehicles over 7.5 tonnes use the eastern approach. Short-stay parking is signposted from the roundabout, and the barrier lifts on ticket.</p></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Read at twenty metres</span><div class=\"db-stage db-stage--tight\"><div class=\"db-centre\"><span class=\"db-specimen\" style=\"font-size:34px\">Aylesbury north</span></div></div></div></div>"
      },
      what: "One of Vignelli's intangibles. He describes it as a consequence of searching for what is specific to a given problem, and says it directs you to the right kind of media, the right kind of materials and the right kind of scale. It is the counterweight to house style. A studio with one look applies it everywhere; a designer working on appropriateness asks what this particular problem needs.",
      why: "It is the reason a portfolio of very different-looking work can be more skilled than a portfolio of identical work. Judging appropriateness also gives you a defence that taste arguments cannot touch, because you are talking about the situation rather than your preference.",
      how: [
        "Write down the context before the design brief: reading distance, lighting, device, literacy, mood, time pressure.",
        "Choose materials and scale from the context, not from the last project.",
        "Look at what already exists in that context. A hospital sign lives among other hospital signs.",
        "Check appropriateness in situ. Print it, mount it, hold it, walk past it at the real distance."
      ],
      example: "Airport signage and a poetry pamphlet can both be excellent and share almost nothing, because the reading distance, the time available and the consequence of misreading are entirely different.",
      numbers: "",
      pitfall: "Appropriateness gets used to justify doing the expected thing. Context tells you the constraints, not the answer, and a category full of bad work is a context that needs breaking.",
      source: "Massimo Vignelli, The Vignelli Canon (2010), Appropriateness",
      verify: { status: "verified", note: "Read the Appropriateness section of The Vignelli Canon in the RIT Vignelli Center PDF. Vignelli writes that \"appropriateness is the search for the specific of any given problem\" and that it \"directs us to the right kind of media, the right kind of materials, the right kind of scale, the right kind of expression, color and texture\", and calls it one of the fundamental principles of his canon." },
      belongs: { verdict: "core", why: "It is the principle that makes every other principle conditional, and the main thing separating a designer from a stylist." },
      related: [13, 9, 17, 24]
    },

    {
      n: 22,
      title: "Discipline and self-imposed rules",
      aka: ["Discipline"],
      oneLine: "Set your own rules at the start and keep to them, so the work holds together.",
      demo: {
        caption: "Three covers from one series. On the right the margin, heading size and alignment were settled once, not three times.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Decided cover by cover</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--nowrap db-row--top db-row--tight\"><div class=\"db-card\" style=\"flex:1 1 0;min-width:0;padding:6px 14px\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:15px\">Spring</span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div><div class=\"db-card\" style=\"flex:1 1 0;min-width:0;padding:16px 4px\"><div class=\"db-col db-col--tight\" style=\"text-align:center\"><span class=\"db-type\" style=\"font-size:10px\">Summer</span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div><div class=\"db-card\" style=\"flex:1 1 0;min-width:0;padding:11px 8px\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Autumn</span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One set of rules, kept</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--nowrap db-row--top db-row--tight\"><div class=\"db-card\" style=\"flex:1 1 0;min-width:0;padding:10px\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Spring</span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div><div class=\"db-card\" style=\"flex:1 1 0;min-width:0;padding:10px\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Summer</span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div><div class=\"db-card\" style=\"flex:1 1 0;min-width:0;padding:10px\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Autumn</span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div></div></div>"
      },
      what: "Vignelli's Discipline is a set of self-imposed rules, parameters within which we operate. He is blunt about the alternative: design without discipline is anarchy and an exercise of irresponsibility, and there is no good design without it regardless of style. The rules are yours to choose, which is the part people miss. Discipline here means picking a grid, a scale, a palette and a spacing system before the work starts, and then not quietly breaking them at four in the afternoon.",
      why: "Self-imposed rules do two jobs. They make a body of work feel like one thing, and they remove hundreds of small decisions so you can spend attention on the few that matter. They also make it obvious when something is wrong, because a break in a rule is visible.",
      how: [
        "Decide the system before the pages: grid, type scale, spacing steps, colour roles, corner radius, motion timing.",
        "Write the rules down where the team can see them, otherwise they are preferences rather than rules.",
        "When you break a rule, break it once, hard, and for a stated reason. Repeated small breaks read as sloppiness.",
        "Review the whole set together at the end and fix the drift."
      ],
      example: "Josef Müller-Brockmann's grid work is the standard demonstration: a fixed module, applied without exception across a series, producing coherence that no individual page could achieve.",
      numbers: "",
      pitfall: "Discipline hardens into a system nobody may question, and the design stops responding to the content. The rules exist to serve the work, so they should be revised deliberately rather than defended out of habit.",
      source: "Massimo Vignelli, The Vignelli Canon (2010), Discipline",
      verify: { status: "verified", note: "Read the Discipline section of The Vignelli Canon in the RIT Vignelli Center PDF. His words: \"There is no room for sloppiness, for carelessness, for procrastination\", \"Discipline is a set of self imposed rules, parameters within which we operate\", and \"Design without discipline is anarchy, an exercise of irresponsibility.\"" },
      belongs: { verdict: "core", why: "The mechanism behind grids, type scales and design systems, stated as a principle rather than a technique." },
      related: [16, 15, 32, 13]
    },

    {
      n: 23,
      title: "Visual power",
      aka: ["Visual impact"],
      oneLine: "A design should hit hard in concept, form, colour and texture, not just avoid mistakes.",
      demo: {
        caption: "Same three elements, same frame. On the right the image and the title are simply far bigger than everything else.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Timid ratios</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--centre\"><span class=\"db-block db-block--outline\" style=\"width:58%\"></span></div><span class=\"db-specimen\" style=\"font-size:15px\">Autumn Series</span><span class=\"db-note\">Thursday 14 March, 7.30pm</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One thing carries the panel</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-block db-block--ink db-fill\" style=\"height:74px\"></span><span class=\"db-specimen\" style=\"font-size:34px\">Autumn Series</span><span class=\"db-note\">Thursday 14 March, 7.30pm</span></div></div></div></div>"
      },
      what: "Another of Vignelli's intangibles, and one of the few in the canon that pushes against restraint. His wording is that they like design to be visually powerful, and cannot stand design that is weak in concept, form, colour, texture or any or all of them. It sits deliberately next to Timelessness and Intellectual Elegance, so the claim is that quiet work can still be strong.",
      why: "Correct is not the same as good. Plenty of work passes every checklist and still fails, because nobody looks at it. Naming visual power as a requirement gives you permission to push contrast, scale and colour rather than settling at safe.",
      how: [
        "Make the biggest thing genuinely big. Most timid layouts are timid in their size ratios.",
        "Check strength at thumbnail size. If the design disappears, it has no visual power.",
        "Pick one carrier of power per piece: a scale jump, a colour, a crop, a single image. Two competing carriers cancel out.",
        "Compare your work against the strongest thing in its context, not against the previous version of itself."
      ],
      example: "The New York subway diagram unveiled in August 1972, designed under Vignelli at Unimark and assembled by Joan Charysyn, is a hard, high-contrast graphic that reads across a platform. Riders disliked its geography, not its weakness, and it was replaced in 1979.",
      numbers: "",
      pitfall: "Power gets chased with volume: everything large, everything saturated, everything bold. When all elements shout, the page has high energy and no hierarchy, which reads as noise.",
      source: "Massimo Vignelli, The Vignelli Canon (2010), Visual Power",
      verify: { status: "verified", note: "Read the Visual Power section of The Vignelli Canon in the RIT Vignelli Center PDF: \"We say all the time that we like Design to be visually powerful. We cannot stand Design that is weak in concept, form, color, texture or any or all of them.\" The subway map dates were soft in the previous version and are now checked: Wikipedia's article on the New York City Subway map gives the unveiling on 4 August 1972, Joan Charysyn's role assembling it at Unimark under Vignelli's direction, the rider complaints about geography, and the 1979 replacement by the Tauranac and Hertz design." },
      belongs: { verdict: "core", why: "Names the quality most competent work lacks, and it comes from a designer usually cited in defence of restraint, which makes the point harder to dismiss." },
      related: [24, 18, 22, 93]
    },

    {
      n: 24,
      title: "Intellectual elegance",
      aka: ["Elegance of solution"],
      oneLine: "The pleasure of a solution so exactly right that it looks like the only possible answer.",
      demo: {
        caption: "Same three series twice. Naming the lines where they end removes the legend and the lookup in one move.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Chart plus legend</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 300 140\"><path class=\"s-mute\" d=\"M30 8 V104 H292\"/><polyline class=\"s\" points=\"36,78 100,60 164,52 228,34 286,24\"/><polyline class=\"s-accent\" points=\"36,88 100,84 164,68 228,62 286,48\"/><polyline class=\"s-mute\" points=\"36,96 100,92 164,94 228,86 286,82\"/><rect class=\"f\" x=\"36\" y=\"122\" width=\"12\" height=\"5\"/><text class=\"t\" x=\"54\" y=\"128\">Retail</text><rect class=\"f-accent\" x=\"110\" y=\"122\" width=\"12\" height=\"5\"/><text class=\"t\" x=\"128\" y=\"128\">Trade</text><rect class=\"f-mute\" x=\"184\" y=\"122\" width=\"12\" height=\"5\"/><text class=\"t\" x=\"202\" y=\"128\">Export</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Names on the lines</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 300 140\"><path class=\"s-mute\" d=\"M30 8 V104 H292\"/><polyline class=\"s\" points=\"36,78 88,60 140,52 192,34 238,24\"/><polyline class=\"s-accent\" points=\"36,88 88,84 140,68 192,62 238,48\"/><polyline class=\"s-mute\" points=\"36,96 88,92 140,94 192,86 238,82\"/><text class=\"t\" x=\"244\" y=\"27\">Retail</text><text class=\"t\" x=\"244\" y=\"51\">Trade</text><text class=\"t\" x=\"244\" y=\"85\">Export</text></svg></div></div></div>"
      },
      what: "Vignelli's term, and the vaguest of his intangibles. He describes it as the sublime level of intelligence which has produced all the masterpieces in the history of mankind. Stripped of the grandeur, it points at a real thing: a design where the idea and the execution are the same move, so there is nothing left to explain. It is the difference between a clever solution and a decorated one.",
      why: "It gives you a standard above working. Once a design works, the remaining question is whether it is arrived at or assembled, and elegance is the word for arrived at. Elegant solutions also survive better, because fewer parts means fewer things to maintain.",
      how: [
        "Keep asking whether one element could do the job of two.",
        "Look for the move that solves several problems at once, and build the design around that move.",
        "Explain the design in one sentence. If it takes three, it probably has three ideas in it.",
        "Leave the work for a day and come back. Cleverness reads as cleverness on day two; elegance still reads as obvious."
      ],
      example: "The Bauhaus-derived convention of using a single grid module to set both the type measure and the image sizes is an elegant move: one decision resolves two problems that would otherwise be settled separately and never quite agree.",
      numbers: "",
      pitfall: "It flatters the designer and excludes the client, because elegance is easy to claim and hard to test. If you cannot show why the solution is inevitable, you are asking people to take your taste on trust.",
      source: "Massimo Vignelli, The Vignelli Canon (2010), Intellectual Elegance",
      verify: { status: "verified", note: "Read the Intellectual Elegance section of The Vignelli Canon in the RIT Vignelli Center PDF: \"For me, intellectual elegance is the sublime level of intelligence which has produced all the masterpieces in the history of mankind.\" The reading offered here is a plain-English gloss on his wording, not a quotation." },
      belongs: { verdict: "core", why: "Names the quality that separates a solved problem from a covered-up one, and it is a designer's own term rather than a borrowing." },
      related: [23, 10, 34, 48]
    },

    {
      n: 25,
      title: "Ambiguity as a tool",
      aka: ["Plurality of meaning"],
      oneLine: "A design can be built to carry more than one reading, and that can be the point.",
      demo: {
        caption: "Identical blocks. On the right only the end of the gap was shaped, and the empty space reads as an arrow.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">One reading</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 100\"><rect class=\"f\" x=\"0\" y=\"0\" width=\"260\" height=\"100\" rx=\"3\"/><rect style=\"fill:var(--paper-raised)\" x=\"20\" y=\"40\" width=\"205\" height=\"20\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">A second reading, built in</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 100\"><rect class=\"f\" x=\"0\" y=\"0\" width=\"260\" height=\"100\" rx=\"3\"/><path style=\"fill:var(--paper-raised)\" d=\"M20 40 H170 V26 L225 50 L170 74 V60 H20 Z\"/></svg></div></div></div>"
      },
      what: "Vignelli treats ambiguity as a positive: a plurality of meanings, or the ability of conferring to an object or a design the possibility of being read in different ways. Christopher Alexander names something related in The Nature of Order, where deep interlock and ambiguity is one of his fifteen properties of living structure, describing places where two zones penetrate each other so it is not clear where one ends. Both are talking about deliberate ambiguity, designed in, not about vagueness left behind.",
      why: "A design with one flat reading is finished the moment you see it. Layered readings keep people looking, and they let one artefact serve audiences who want different things from it. It is also the mechanism behind most good logos and most good covers.",
      how: [
        "Build the second reading into the form, not into a caption. If it needs explaining, it is a puzzle rather than ambiguity.",
        "Make the first reading unambiguous and the second one optional. Nobody should be blocked by the layer they missed.",
        "Test that the wrong reading is not harmful. Ambiguity is a tool for expression, not for instructions or safety information.",
        "Look for interlocking edges: overlaps, shared counters, figures that also read as ground."
      ],
      example: "The FedEx wordmark, designed in 1994 by Lindon Leader at Landor Associates, contains an arrow in the negative space between the E and the x. The first reading is the company name and the second is optional.",
      numbers: "",
      pitfall: "Ambiguity is disastrous in anything operational. In a form, a warning, a dosage label or a wayfinding sign, two readings means someone will act on the wrong one.",
      source: "Massimo Vignelli, The Vignelli Canon (2010), Ambiguity; related: Christopher Alexander, The Nature of Order, property 8, deep interlock and ambiguity",
      verify: { status: "verified", note: "Read the Ambiguity section of The Vignelli Canon in the RIT Vignelli Center PDF, where Vignelli sets out ambiguity \"intended as a plurality of meanings, or the ability of conferring to an object or a design, the possibility of being read in different ways\". Alexander's property 8 confirmed from the Architexturez and ArchDaily lists of the fifteen properties. The FedEx attribution was soft before and is now checked: Wikipedia's FedEx article gives the wordmark as designed in 1994 by Lindon Leader of Landor Associates, arrow included." },
      belongs: { verdict: "core", why: "A named design principle from two independent design sources, and the working explanation for why some marks and images keep rewarding a second look." },
      related: [49, 75, 122, 23]
    },

    {
      n: 26,
      title: "Responsibility and equity in design",
      aka: ["Responsibility", "Equity (brand equity)"],
      oneLine: "Vignelli's two duties: answer to yourself, the client and the public, and do not throw away accumulated recognition.",
      demo: { none: "Both halves are claims about conduct and about commercial memory built up over decades, and any picture would only caption the words." },
      what: "These are two separate intangibles in The Vignelli Canon, and the second one does not mean what a modern reader expects. Responsibility, for Vignelli, has three levels: to ourselves, to the client, and to the public at large, the consumer, the user. Equity is about brand equity, not social equity. His argument is that when a logo has been in the public domain for more than fifty years it becomes a classic, and there is no reason to throw it away.",
      why: "The responsibility framing is useful because it names the third party. Designers answer to a client who is paying and to a public who is not, and most ethical problems in the job live in that gap. The equity point saves clients money and saves you from the redesign that destroys twenty years of recognition.",
      how: [
        "Name the three parties on every project and write down where their interests conflict.",
        "Before redesigning an identity, find out what recognition already exists and cost the loss of it.",
        "For the social and ecological side, go to Papanek and to the current work on responsibility, not to Vignelli."
      ],
      example: "The Shell pecten and the London Underground roundel are the equity argument in practice. Each has been redrawn many times and never abandoned.",
      numbers: "Vignelli's own threshold: a logo in the public domain for more than fifty years becomes a classic.",
      pitfall: "Reading Vignelli's equity as social equity, and then citing him for a position he was not taking. His fifty-year rule is also a rule of thumb from one designer, not a finding.",
      source: "Massimo Vignelli, The Vignelli Canon (2010), Responsibility and Equity; for social and ecological responsibility, Victor Papanek, Design for the Real World (Pantheon, 1971)",
      verify: { status: "adjusted", note: "The master list's title implies social equity. The Equity section of The Vignelli Canon, read in the RIT Vignelli Center PDF, is about long-lived logos: \"When a logo has been in the public domain for more than fifty years it becomes a classic, a landmark, a respectable entity and there is no reason to throw it away.\" He names Ford, Cinzano and Lancia as marks his office retouched rather than replaced. The three levels of responsibility come from the same PDF. Papanek's Design for the Real World confirmed as Pantheon, 1971." },
      belongs: { verdict: "core", why: "The three-party responsibility model is the most usable ethical frame here, and the equity point is a real, frequently ignored commercial principle." },
      related: [20, 31, 1010, 1009]
    },

    {
      n: 27,
      title: "Design is how it works",
      aka: ["Design is not a veneer"],
      oneLine: "Design covers the behaviour of a thing, not only its appearance.",
      demo: {
        caption: "Two players, same finish. The dots are the presses needed to reach track 24; the wheel does it in one turn.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Next-track button</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Now playing</span><span class=\"db-type\" style=\"font-size:12px\">Track 24 of 500</span><div class=\"db-row db-row--centre\"><span class=\"db-btn db-btn--sm\">Next</span></div></div></div><div class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div><span class=\"db-note\">one press per track</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Thumb wheel</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Now playing</span><span class=\"db-type\" style=\"font-size:12px\">Track 24 of 500</span><div class=\"db-row db-row--centre\"><span class=\"db-swatch db-swatch--round\"></span></div></div></div><div class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span></div><span class=\"db-note\">one turn, any distance</span></div></div></div></div>"
      },
      what: "Steve Jobs said it to Rob Walker for a New York Times Magazine piece about the making of the iPod, published on 30 November 2003 under the title \"The Guts of a New Machine\". The full quotation is worth having, because the short version loses the argument: most people make the mistake of thinking design is what it looks like, that it is a veneer, that designers are handed a box and told to make it look good. Jobs said design is not just what it looks like and feels like, design is how it works.",
      why: "It is the sentence that gets a designer into the room where behaviour is decided. If design stops at the surface, you are handed the box; if design includes how it works, you get to change what is in the box. That is the difference between a decorator and a designer.",
      how: [
        "Ask to see the flow, the data model and the failure states before you draw a screen.",
        "Design the empty state, the error and the slow connection with the same care as the hero shot.",
        "Judge your own work by watching someone use it, not by looking at it."
      ],
      example: "The article the quotation comes from was about the iPod, whose central design decision was the scroll wheel: a behaviour, not a finish.",
      numbers: "",
      pitfall: "It gets used to dismiss visual craft as shallow. Jobs said design is not just what it looks like, which includes appearance rather than replacing it, and the products he was talking about were also carefully finished.",
      source: "Steve Jobs, interviewed by Rob Walker, \"The Guts of a New Machine\", New York Times Magazine, 30 November 2003",
      verify: { status: "verified", note: "The New York Times page could not be reached, so the wording was checked against a full reproduction of the article at notated.org: \"Most people make the mistake of thinking design is what it looks like... It's not just what it looks like and feels like. Design is how it works.\" An earlier version of this note called that the closing line of the article. It is not. The line sits in the middle of the piece. Title, author, publication and the 30 November 2003 date are given the same way across independent citations, including iLounge's contemporaneous write-up. The article is about the making of the iPod." },
      belongs: { verdict: "core", why: "The most widely used argument for design as a discipline of behaviour rather than surface, and the reason product teams now include designers at all." },
      related: [2, 36, 28, 3]
    },

    {
      n: 28,
      title: "Good design is understandable",
      aka: ["Rams principle 4", "Self-explanatory design"],
      oneLine: "The design should clarify the product's structure so the thing explains itself.",
      demo: {
        caption: "Both are the push side of a door. One says push by its shape; the other needs a sign.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Pull handle on the push side</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 160\"><rect class=\"s-mute\" x=\"6\" y=\"6\" width=\"138\" height=\"148\"/><rect class=\"s\" x=\"16\" y=\"14\" width=\"118\" height=\"132\"/><rect class=\"f\" x=\"110\" y=\"58\" width=\"7\" height=\"44\" rx=\"3\"/><rect class=\"s-mute\" x=\"42\" y=\"66\" width=\"52\" height=\"22\"/><text class=\"t\" x=\"68\" y=\"81\" text-anchor=\"middle\">PUSH</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Flat plate on the push side</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 160\"><rect class=\"s-mute\" x=\"6\" y=\"6\" width=\"138\" height=\"148\"/><rect class=\"s\" x=\"16\" y=\"14\" width=\"118\" height=\"132\"/><rect class=\"f-mute\" x=\"98\" y=\"52\" width=\"26\" height=\"56\"/><rect class=\"s\" x=\"98\" y=\"52\" width=\"26\" height=\"56\"/></svg></div></div></div>"
      },
      what: "The fourth of Dieter Rams's ten principles. His wording: it clarifies the product's structure, better still it can make the product talk, and at best it is self-explanatory. The claim is about structure rather than instructions. A product is understandable when its shape, grouping and labelling tell you what it is made of and what each part does, before you have read anything.",
      why: "Every product that needs a manual has paid for one, in support calls, returns and abandoned features. Structure that reads correctly on sight removes that cost and removes the moment of hesitation that makes people give up.",
      how: [
        "Group controls by what they do, and separate the groups with space rather than lines where you can.",
        "Make the most-used control the most obvious one, physically and visually.",
        "Label in the user's words, not the organisation's. Test the labels on someone outside.",
        "Watch a first-time user without helping them. Every question they ask aloud is a structural failure."
      ],
      example: "A door with a flat plate on the push side and a pull handle on the other side needs no sign. A door with the same handle on both sides needs one, and the sign is the design admitting defeat.",
      numbers: "",
      pitfall: "Teams answer an understandability problem with a tooltip, an onboarding tour or a help article. Those are all evidence the structure did not read, and none of them fix it.",
      source: "Dieter Rams, ten principles for good design, principle 4 (late 1970s; text as published by Vitsoe)",
      verify: { status: "verified", note: "Read the ten principles on Vitsoe's own good design page, the standard published text. This is the fourth: \"It clarifies the product's structure. Better still, it can make the product talk.\" Vitsoe dates the principles to the late 1970s, when Rams asked himself whether his own design was good design. Checked the full running order against that page: 1 innovative, 2 useful, 3 aesthetic, 4 understandable, 5 unobtrusive, 6 honest, 7 long-lasting, 8 thorough, 9 environmentally friendly, 10 as little design as possible. The master list runs them out of Rams's order, so entries 28 to 37 give his number as well as the master list's." },
      belongs: { verdict: "core", why: "One of the ten most-cited design principles in the world, from a named designer, with published wording." },
      related: [29, 30, 34, 18]
    },

    {
      n: 29,
      title: "Good design is unobtrusive",
      aka: ["Rams principle 5", "Neutral and restrained"],
      oneLine: "Products that do a job are tools, so they should leave room for the user.",
      demo: {
        caption: "Same note in both. On the left the software is the loudest thing on screen; on the right the words are.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Chrome first</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent db-bar--tall db-fill\"></span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">File</span><span class=\"db-btn db-btn--sm\">Edit</span><span class=\"db-btn db-btn--sm\">Share</span><span class=\"db-btn db-btn--sm\">Sync</span></div><div class=\"db-card\"><div class=\"db-type\" style=\"font-size:9px\"><p>Pick up bread, and ring the surgery before four.</p></div></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Tags</span><span class=\"db-btn db-btn--sm db-btn--ghost\">History</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Export</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Content first</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-nav\"><b>Notes</b><span>File</span><span>Edit</span></div><div class=\"db-type\" style=\"font-size:16px\"><p>Pick up bread, and ring the surgery before four.</p></div></div></div></div></div></div>"
      },
      what: "Rams's fifth principle. His wording is that products fulfilling a purpose are like tools, they are neither decorative objects nor works of art, and their design should therefore be neutral and restrained to leave room for the user's self-expression. The target is the product that performs its own personality at you while you are trying to use it.",
      why: "A tool you have to accommodate is tiring. Restraint also lets the same object sit in very different homes and lives, which is what mass-produced things have to do. In interfaces the same logic applies to the user's own content, which should be the loudest thing on screen.",
      how: [
        "Make the user's content the brightest, largest and most saturated thing in the frame. Give the chrome less.",
        "Cut brand expression from the parts people use every day and put it where first impressions are formed.",
        "Avoid personality in system messages that appear during failure. Nobody wants a joke at that moment.",
        "Give the object a form that survives in a room you did not choose."
      ],
      example: "A good kitchen tap is one you stop noticing after a week. You reach for it without looking, and its shape has not started to annoy you.",
      numbers: "",
      pitfall: "Unobtrusive becomes an alibi for anonymous. Rams's own products are restrained and instantly recognisable, so restraint is clearly compatible with having a character.",
      source: "Dieter Rams, ten principles for good design, principle 5 (late 1970s; text as published by Vitsoe)",
      verify: { status: "verified", note: "Wording confirmed from Vitsoe's published text of the ten principles. This is Rams's fifth principle; the master list runs the ten out of his order." },
      belongs: { verdict: "core", why: "The clearest statement of the design-as-tool position, and the principle most often broken by brand teams." },
      related: [28, 34, 12, 37]
    },

    {
      n: 30,
      title: "Good design is honest",
      aka: ["Rams principle 6"],
      oneLine: "Do not make a product look more capable, valuable or advanced than it is.",
      demo: {
        caption: "Both panels sell the same four-pound tea towel. The left one borrows the visual language of a far more expensive object.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Dressed up</span><div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-row db-row--centre\"><span class=\"db-note\">Est. 1974</span></div><div class=\"db-row db-row--centre\"><span class=\"db-specimen\" style=\"font-size:26px\">Tea Towel</span></div><div class=\"db-row db-row--centre\"><span class=\"db-note\">Long-staple cotton, hand cut</span></div><div class=\"db-row db-row--centre\"><span class=\"db-btn db-btn--ghost\">Reserve one</span></div><div class=\"db-row db-row--centre\"><span class=\"db-note\">&pound;4</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Stated plainly</span><div class=\"db-stage\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:15px\">Cotton tea towel</span><span class=\"db-type\" style=\"font-size:15px\">&pound;4</span><span class=\"db-note\">70 x 50 cm, machine washable</span><span class=\"db-btn\">Add to basket</span></div></div></div></div></div>"
      },
      what: "Rams's sixth principle. His wording is that good design does not make a product more innovative, powerful or valuable than it really is, and does not attempt to manipulate the consumer with promises that cannot be kept. This is an ethical rule aimed at the designer's own tools, since the visual language of quality can be applied to anything, including things that do not deserve it.",
      why: "Dishonest design works once. The second time, people discount everything else you tell them, including the true parts. Honesty is therefore the cheapest way to keep the signals in your visual language meaning something.",
      how: [
        "Check every visual promise against the actual behaviour: weight, speed, materials, capability.",
        "Do not use premium cues, heavy materials or slow reveals to imply quality the product does not have.",
        "Show real numbers and real photographs. If the render does not match the product, do not ship the render.",
        "In interfaces, do not animate progress that is not being measured."
      ],
      example: "A progress bar that fills at a fixed rate while the system waits for an unknown response is a designed lie. It looks like measurement and it is decoration.",
      numbers: "",
      pitfall: "Honesty gets read as an instruction to be plain, which is a different thing. A product can be dramatic, expressive and completely honest, and a plain product can still overclaim.",
      source: "Dieter Rams, ten principles for good design, principle 6 (late 1970s; text as published by Vitsoe)",
      verify: { status: "verified", note: "Wording confirmed from Vitsoe's published text of the ten principles, read at vitsoe.com: \"It does not make a product more innovative, powerful or valuable than it really is. It does not attempt to manipulate the consumer with promises that cannot be kept.\" This is Rams's sixth principle. An earlier version of this entry had him saying a product should not appear more innovative; the published wording has no \"appear\" in it." },
      belongs: { verdict: "core", why: "The only one of the ten that is straightforwardly an ethics rule, and it is the root of the modern argument about deceptive patterns." },
      related: [7, 8, 985, 997]
    },

    {
      n: 31,
      title: "Good design is long-lasting",
      aka: ["Rams principle 7", "Not fashionable"],
      oneLine: "Avoid fashionable styling so the thing stays current for as long as it stays useful.",
      demo: {
        caption: "Three surfaces over twenty years. The panel, the three lines and their spacing have not moved; only the treatment was replaced.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--nowrap db-row--top db-row--tight\"><div class=\"db-col db-col--tight\" style=\"flex:1 1 0;min-width:0\"><span class=\"db-note\">2005</span><div class=\"db-card\" style=\"border-radius:0\"><div class=\"db-col db-col--tight\"><span class=\"db-block db-block--outline db-fill\" style=\"border-radius:0\"></span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div><div class=\"db-col db-col--tight\" style=\"flex:1 1 0;min-width:0\"><span class=\"db-note\">2015</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-block db-fill\"></span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div><div class=\"db-col db-col--tight\" style=\"flex:1 1 0;min-width:0\"><span class=\"db-note\">2025</span><div class=\"db-card\" style=\"border-radius:14px\"><div class=\"db-col db-col--tight\"><span class=\"db-block db-block--accent db-fill\" style=\"border-radius:14px\"></span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div></div>"
      },
      what: "Rams's seventh principle. It avoids being fashionable, so it never appears antiquated, and unlike fashionable design it lasts many years even in a throwaway society. The argument has a physical half as well as a visual one: an object that still looks acceptable is an object people keep, repair and pass on, which is where its environmental case comes from.",
      why: "Most redesign budgets are spent undoing choices made to look current. Designing for length converts that spend into build quality, and it stops the identity or product needing rescue every three years.",
      how: [
        "Design the structure to outlive the surface. Keep the datable choices in a small, replaceable layer.",
        "Prefer solutions that already have a long track record over ones with two years of evidence.",
        "Plan the refresh cycle honestly at the start rather than pretending the thing will never change.",
        "Judge the design against how it will look when today's style is out of favour."
      ],
      example: "The Transport typeface has been on British road signs since the M1 opened in 1959 and still reads as current, largely because Kinneir and Calvert drew it for legibility at speed rather than for a look.",
      numbers: "",
      pitfall: "Rejecting all contemporary work in the name of longevity, which produces designs that are dated on arrival in a different way. What lasts is usually clear structure, not a particular decade's taste.",
      source: "Dieter Rams, ten principles for good design, principle 7 (late 1970s; text as published by Vitsoe)",
      verify: { status: "verified", note: "Confirmed as Rams's seventh principle with the anti-fashion wording via Vitsoe's published text. The Transport dates were left out of the previous version and are now checked: Wikipedia's article on the typeface states Kinneir and Calvert developed it between 1957 and 1963, that it was tested on the Preston bypass in 1958, and that it was introduced on the M1 a year later, in 1959." },
      belongs: { verdict: "core", why: "A named principle with a clear economic and environmental argument behind it, and the counterweight to trend-led redesign." },
      related: [20, 33, 5, 11]
    },

    {
      n: 32,
      title: "Good design is thorough down to the last detail",
      aka: ["Rams principle 8"],
      oneLine: "Nothing arbitrary, nothing left to chance, because care in the detail is respect for the user.",
      demo: {
        caption: "The same rejected form. On the right the surname survived, one field is marked, and the message says what to type.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Details left to chance</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Surname</span><span class=\"db-input db-input--error\">&nbsp;</span><span class=\"db-label\">Date of visit</span><span class=\"db-input db-input--error\">&nbsp;</span><span class=\"db-note\">Invalid input</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Details decided</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Surname</span><span class=\"db-input\">O'Sullivan</span><span class=\"db-label\">Date of visit</span><span class=\"db-input db-input--error\">14-3</span><span class=\"db-note\">Enter the date as 14/03/2026</span></div></div></div></div></div>"
      },
      what: "Rams's eighth principle. His wording is that nothing must be arbitrary or left to chance, and that care and accuracy in the design process show respect towards the user. The interesting part is the second clause. Rams is not making an aesthetic argument about neatness, he is making a moral one: the details are where the user finds out whether anyone thought about them.",
      why: "People cannot see your process, so they judge your care by the details they hit. A misaligned edge or a badly worded error is read as evidence that the rest is also careless, and that read is usually correct.",
      how: [
        "Audit the parts nobody presents: error text, empty states, print marks, the back of the packaging, the receipt.",
        "Give every value in your file a reason. Round numbers chosen at random are still random.",
        "Check the awkward inputs: long names, no data, no network, small screens, screen readers.",
        "Do a final pass with fresh eyes on alignment, spacing and spelling before it goes out."
      ],
      example: "A booking form that accepts an apostrophe in a surname, keeps what you typed when validation fails, and tells you which field is wrong. Each of those is a detail decision, and together they are the whole experience of the form.",
      numbers: "",
      pitfall: "Detail work absorbs the time that should have gone on the structure. A beautifully detailed answer to the wrong problem is still the wrong answer.",
      source: "Dieter Rams, ten principles for good design, principle 8 (late 1970s; text as published by Vitsoe)",
      verify: { status: "verified", note: "Wording confirmed from Vitsoe's published text of the ten principles, including the line that nothing must be arbitrary or left to chance. This is the sourced version of the sentiment the master list also lists separately at 15." },
      belongs: { verdict: "core", why: "Named, published, and the single principle most visible in the difference between amateur and professional output." },
      related: [22, 15, 28, 30]
    },

    {
      n: 33,
      title: "Good design is environmentally friendly",
      aka: ["Rams principle 9", "Design and resources"],
      oneLine: "Design conserves resources and cuts physical and visual pollution across the whole life of the product.",
      demo: {
        caption: "Two housings for the same device. The fixings decide which one can be opened, and they are visible from outside.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Bonded shut</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 298 210\"><rect class=\"s\" x=\"24\" y=\"28\" width=\"250\" height=\"137\" rx=\"10\"/><path class=\"s-mute\" d=\"M24 96 H274\"/><rect class=\"f-mute\" x=\"52\" y=\"49\" width=\"102\" height=\"95\"/><text class=\"t\" x=\"149\" y=\"196\" text-anchor=\"middle\">no fixings, glued seam</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Four screws</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 298 210\"><rect class=\"s\" x=\"24\" y=\"28\" width=\"250\" height=\"137\" rx=\"10\"/><circle class=\"s\" cx=\"42\" cy=\"46\" r=\"6\"/><circle class=\"s\" cx=\"256\" cy=\"46\" r=\"6\"/><circle class=\"s\" cx=\"42\" cy=\"147\" r=\"6\"/><circle class=\"s\" cx=\"256\" cy=\"147\" r=\"6\"/><rect class=\"s-mute\" x=\"63\" y=\"59\" width=\"102\" height=\"95\"/><rect class=\"f-mute\" x=\"52\" y=\"49\" width=\"102\" height=\"95\"/><path class=\"s-accent\" d=\"M175 96 H220\"/><path class=\"f-accent\" d=\"M220 88 L238 96 L220 104 Z\"/><text class=\"t\" x=\"149\" y=\"196\" text-anchor=\"middle\">battery comes out</text></svg></div></div></div>"
      },
      what: "Rams's ninth principle. His wording is that design makes an important contribution to the preservation of the environment, conserving resources and minimising physical and visual pollution throughout the lifecycle of the product. The phrase visual pollution is easy to skip and worth keeping. Rams is counting clutter, noise and advertising as pollution alongside material waste.",
      why: "Most of a product's environmental cost is set at the design stage, before anything is made, because that is when material, repairability and lifespan are decided. It is also the point at which those choices are cheap to change.",
      how: [
        "Design for repair: standard fixings, replaceable parts, published spares.",
        "Choose fewer materials and materials that separate cleanly at end of life.",
        "For digital work, treat page weight and energy as a design constraint, not an engineering afterthought.",
        "Count visual pollution too. Every extra banner, interstitial and notification is a cost you are imposing."
      ],
      example: "Fairphone builds smartphones with replaceable modules and sells spare parts directly, so the design decision about repairability is visible in the product's screws.",
      numbers: "",
      pitfall: "The principle gets discharged with a recycled-paper stock and a green colour scheme while the product's lifespan, repairability and shipping stay untouched.",
      source: "Dieter Rams, ten principles for good design, principle 9 (late 1970s; text as published by Vitsoe)",
      verify: { status: "verified", note: "Confirmed as the ninth principle, including the phrase about minimising physical and visual pollution throughout the lifecycle of the product, from Vitsoe's published text. Fairphone's modular, repairable phones and its direct sale of spare parts are a matter of public record on its own site." },
      belongs: { verdict: "core", why: "A named principle that puts environmental cost inside the design decision rather than beside it, and it predates most current sustainability guidance." },
      related: [31, 1006, 30, 5]
    },

    {
      n: 34,
      title: "Good design is as little design as possible",
      aka: ["Rams principle 10", "Back to purity, back to simplicity"],
      oneLine: "Concentrate on the essentials so the product is not loaded with things that are not essential.",
      demo: {
        caption: "Three versions of one thermostat. The middle one only removed things; the right one removed things and improved what was left.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--nowrap db-row--top db-row--tight\"><div class=\"db-col db-col--tight\" style=\"flex:1 1 0;min-width:0\"><span class=\"db-note\">Loaded</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Mode</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">AUTO</span><span class=\"db-btn db-btn--sm\">ECO</span><span class=\"db-btn db-btn--sm\">BST</span><span class=\"db-btn db-btn--sm\">HOL</span><span class=\"db-btn db-btn--sm\">P1</span><span class=\"db-btn db-btn--sm\">P2</span></div><span class=\"db-type\" style=\"font-size:12px\">21.5</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">SET</span><span class=\"db-btn db-btn--sm db-btn--ghost\">CLK</span><span class=\"db-btn db-btn--sm db-btn--ghost\">ADV</span></div></div></div></div><div class=\"db-col db-col--tight\" style=\"flex:1 1 0;min-width:0\"><span class=\"db-note\">Stripped only</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:10px\">21.5</span><span class=\"db-btn db-btn--sm db-btn--ghost\">+</span></div></div></div><div class=\"db-col db-col--tight\" style=\"flex:1 1 0;min-width:0\"><span class=\"db-note\">Reduced and improved</span><div class=\"db-ui\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Temperature</span><span class=\"db-specimen\" style=\"font-size:32px\">21.5</span></div><span class=\"db-btn db-btn--lg\">Warmer / cooler</span></div></div></div></div></div>"
      },
      what: "Rams's tenth and final principle, and the one that carries his slogan: less, but better, because it concentrates on the essential aspects and the products are not burdened with non-essentials. It is the summary of the other nine rather than an extra rule. The instruction is about what to leave out, and the standard for leaving something out is whether it is essential to the purpose.",
      why: "Every element you keep has to be designed, made, tested, documented and maintained. Cutting the inessential is the only move that improves quality and cost at the same time.",
      how: [
        "List everything in the design and mark each item essential or not, against the stated purpose.",
        "Remove the not-essential items and live with the result for a day before restoring anything.",
        "Resist the request to add one small thing. Small things are how the burden accumulates.",
        "Spend the recovered effort on the essentials, otherwise you have just made a smaller mediocre product."
      ],
      example: "Muji's household range is built on this argument: plain materials, no visible branding on the object, and a deliberately narrow set of variations.",
      numbers: "",
      pitfall: "Confusing as little design as possible with as little effort as possible. Removing things is the easy half; the hard half is that whatever survives now has to be excellent.",
      source: "Dieter Rams, ten principles for good design, principle 10 (late 1970s; text as published by Vitsoe)",
      verify: { status: "verified", note: "Confirmed as the tenth principle, with the less-but-better wording, from Vitsoe's published text of the ten principles." },
      belongs: { verdict: "core", why: "The most quoted of the ten, and the practical statement of minimalism with a quality condition attached." },
      related: [4, 5, 10, 41]
    },

    {
      n: 35,
      title: "Good design is innovative",
      aka: ["Rams principle 1"],
      oneLine: "Design advances with technology, and the possibilities are never used up.",
      demo: {
        caption: "The same three cards. Fixed widths from a wider screen get cut off; widths that follow the space do not.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Widths set for the old screen</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--nowrap\"><div class=\"db-card\" style=\"min-width:150px\"><div class=\"db-lines\"><i></i><i></i><i></i></div></div><div class=\"db-card\" style=\"min-width:150px\"><div class=\"db-lines\"><i></i><i></i><i></i></div></div><div class=\"db-card\" style=\"min-width:150px\"><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Widths re-derived for the new one</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div></div>"
      },
      what: "Rams's first principle. His wording is that the possibilities for innovation are not, by any means, exhausted, that technological development keeps offering new opportunities, and that innovative design always develops alongside innovative technology, never as an end in itself. The last clause is the constraint. Innovation follows a new capability, it is not a target set in a brief.",
      why: "It stops two failure modes at once. It gives you permission to abandon a convention when the underlying technology has changed, and it refuses novelty applied to a situation that has not changed.",
      how: [
        "When a technology changes, revisit the design conventions that were built around the old limits.",
        "Ask what is newly possible before you ask what is newly fashionable.",
        "Do not innovate on the parts people rely on to get out of trouble. Save it for where the gain is real.",
        "Pair every new idea with an existing convention so people have somewhere to stand."
      ],
      example: "Responsive web design, as set out by Ethan Marcotte, arrived because a new constraint made the old answer fail. Fixed-width pages had been correct when screens were roughly one size, and stopped being correct when they were not.",
      numbers: "",
      pitfall: "Read on its own, this principle is the one companies most like to quote, and it is the one Rams hedged hardest. Innovation as an end in itself is the thing he explicitly rules out.",
      source: "Dieter Rams, ten principles for good design, principle 1 (late 1970s; text as published by Vitsoe)",
      verify: { status: "verified", note: "Confirmed as Rams's first principle, including the clause that innovative design always develops alongside innovative technology and never as an end in itself, from Vitsoe's published text. Marcotte's responsive web design is listed in the master list's own sources." },
      belongs: { verdict: "core", why: "Named and published, and it is the principle that tells you when a convention has expired." },
      related: [11, 19, 36, 20]
    },

    {
      n: 36,
      title: "Good design makes a product useful",
      aka: ["Rams principle 2"],
      oneLine: "A product is bought to be used, so usefulness comes first and everything else serves it.",
      demo: {
        caption: "The same demist function: three screens deep on the left, one press you can find without looking on the right.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">On the screen</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><span class=\"db-note\">Menu</span></div><span class=\"db-arrow\">&#8595;</span><div class=\"db-card\"><span class=\"db-note\">Climate</span></div><span class=\"db-arrow\">&#8595;</span><div class=\"db-card\"><span class=\"db-note db-note--accent\">Demist</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">On the dashboard</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row\"><span class=\"db-btn db-btn--ghost\">Hazard</span><span class=\"db-btn db-btn--ghost\">Wipers</span><span class=\"db-btn\">Demist</span></div></div></div></div>"
      },
      what: "Rams's second principle. His wording is that a product is bought to be used, that it has to satisfy criteria which are not only functional but also psychological and aesthetic, and that good design emphasises the usefulness of a product while disregarding anything that could detract from it. The psychological and aesthetic clause matters, because it means usefulness in Rams's sense already includes how using the thing feels.",
      why: "It gives you a single tie-breaker. When two options are equally defensible, the one that makes the product more useful wins, and useful is defined by the person holding it rather than by the feature list.",
      how: [
        "Define usefulness as a job the user is trying to finish, then measure whether they finish it.",
        "Remove anything that gets between the user and that job, including your own brand expression.",
        "Include the psychological side: confidence, calm and control are part of usefulness.",
        "Treat features nobody uses as a cost, and remove them."
      ],
      example: "Euro NCAP judged the touchscreen-only dashboard a safety problem, not just an annoyance. From January 2026 its rating scheme withholds the top score from cars that lack physical controls for indicators, hazard lights, the horn, the wipers and the emergency call. Usefulness beat tidiness in the rules.",
      numbers: "",
      pitfall: "Usefulness is measured with whatever data is easy to collect, which is usually clicks. High engagement with a control can mean people cannot find what they need.",
      source: "Dieter Rams, ten principles for good design, principle 2 (late 1970s; text as published by Vitsoe)",
      verify: { status: "verified", note: "Confirmed as Rams's second principle, including the functional, psychological and aesthetic clause, from Vitsoe's published text of the ten principles. The example was replaced with a checkable one: the European Transport Safety Council's report on the new Euro NCAP scheme states that from January 2026 manufacturers cannot reach the highest safety ratings without physical switches for indicators, hazard lights, the horn, the windscreen wipers and the eCall function." },
      belongs: { verdict: "core", why: "The plainest statement of design's obligation to use, and the entry that makes 19 redundant." },
      related: [9, 19, 27, 2]
    },

    {
      n: 37,
      title: "Good design is aesthetic",
      aka: ["Rams principle 3"],
      oneLine: "Beauty is part of usefulness, because things you use daily affect how you feel.",
      demo: {
        caption: "Identical fields, identical wording. On the left the edges do not line up and the corners disagree; nothing functional changed.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Executed carelessly</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Delivery address</span><span class=\"db-input\" style=\"width:96%\">Flat 2, Ashby House</span><span class=\"db-input\">Norwich</span><span class=\"db-input\" style=\"width:91%\">NR2 4TQ</span><span class=\"db-btn\" style=\"width:97%;border-radius:10px\">Continue</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Executed well</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Delivery address</span><span class=\"db-input\">Flat 2, Ashby House</span><span class=\"db-input\">Norwich</span><span class=\"db-input\">NR2 4TQ</span><span class=\"db-btn\">Continue</span></div></div></div></div>"
      },
      what: "Rams's third principle. His wording is that the aesthetic quality of a product is integral to its usefulness, because products we use every day affect our person and our well-being, and that only well-executed objects can be beautiful. The argument runs the opposite way to the usual one: beauty is not a reward added after function, it is a component of function for anything you live with.",
      why: "It gives you an argument for spending time on appearance that a finance director can follow. An object someone likes looking at is an object they keep, maintain and recommend, and none of that happens with an ugly one.",
      how: [
        "Treat visual quality as a requirement in the brief, not as a phase at the end.",
        "Judge beauty in the real setting, in real light, at the real distance, over days rather than minutes.",
        "Remember Rams's condition: only well-executed objects can be beautiful, so fix the execution first.",
        "Look hardest at the things people see most often, which is usually the least glamorous screen or surface."
      ],
      example: "A hospital waiting room refitted with decent light, quiet colour and legible signs holds the same number of chairs and does the same job, and is a great deal easier to sit in for two hours. On Rams's argument that change in appearance is a change in function, not a coat of paint over it.",
      numbers: "",
      pitfall: "The principle is used to justify styling exercises on products that do not work. Rams put it third, after useful, and made execution a precondition of beauty.",
      source: "Dieter Rams, ten principles for good design, principle 3 (late 1970s; text as published by Vitsoe)",
      verify: { status: "verified", note: "Confirmed as Rams's third principle, including the claim that aesthetic quality is integral to usefulness and that only well-executed objects can be beautiful, from Vitsoe's published text. The waiting-room example previously said the refit was measurably easier to sit in. There is no measurement behind that, so the word was removed rather than a study invented. The example is an illustration of Rams's argument, not evidence for it." },
      belongs: { verdict: "core", why: "It is the published argument that beauty is functional, which every designer needs when a client calls the visual work decoration." },
      related: [3, 36, 1, 29]
    },

    {
      n: 38,
      title: "The laws of simplicity",
      aka: ["Maeda's ten laws", "Reduce, organise, time, learn, differences, context, emotion, trust, failure, the one"],
      oneLine: "John Maeda's ten short rules for making complicated things feel simple.",
      demo: {
        caption: "Eight fields on both sides. Nothing was removed; the right one is only grouped and named.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Eight fields, flat</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">Name</span><span class=\"db-input\">Email</span><span class=\"db-input\">Phone</span><span class=\"db-input\">Address</span><span class=\"db-input\">Postcode</span><span class=\"db-input\">Card number</span><span class=\"db-input\">Expiry</span><span class=\"db-input\">Security code</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Eight fields, organised</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div><span class=\"db-label\">You</span><div class=\"db-col db-col--tight\"><span class=\"db-input\">Name</span><span class=\"db-input\">Email</span><span class=\"db-input\">Phone</span></div></div><div><span class=\"db-label\">Delivery</span><div class=\"db-col db-col--tight\"><span class=\"db-input\">Address</span><span class=\"db-input\">Postcode</span></div></div><div><span class=\"db-label\">Payment</span><div class=\"db-col db-col--tight\"><span class=\"db-input\">Card number</span><span class=\"db-input\">Expiry</span><span class=\"db-input\">Security code</span></div></div></div></div></div></div>"
      },
      what: "From John Maeda's The Laws of Simplicity, published by MIT Press in 2006. The ten are: Reduce, the simplest way to achieve simplicity is through thoughtful reduction; Organise, organisation makes a system of many appear fewer; Time, savings in time feel like simplicity; Learn, knowledge makes everything simpler; Differences, simplicity and complexity need each other; Context, what lies in the periphery of simplicity is definitely not peripheral; Emotion, more emotions are better than less; Trust, in simplicity we trust; Failure, some things can never be made simple; The One, simplicity is about subtracting the obvious and adding the meaningful.",
      why: "The list is useful because it separates the ways simplicity is achieved. Most teams only know reduce, and reach for it when the real answer is organise, or speed, or teaching the user one concept. Naming ten routes gives you nine more moves.",
      how: [
        "Diagnose before you cut. Ask whether the problem is too many things, badly grouped things, or slow things.",
        "Use Organise when the count cannot come down: grouping, naming and consistent placement do the work instead.",
        "Accept Failure as a law. Some domains are irreducibly complicated, and pretending otherwise makes them worse."
      ],
      example: "A checkout that feels simpler after the fields are grouped and the page is made faster, without a single field being removed, is Organise and Time doing the work that Reduce could not.",
      numbers: "Ten laws, plus three keys for technology specifically: away, open, power.",
      pitfall: "The ten get treated as a checklist to satisfy rather than a menu to choose from, which produces work that is nominally simple and actually thin. Maeda's ninth law says some things cannot be simplified, and that is the one people skip.",
      source: "John Maeda, The Laws of Simplicity (MIT Press, 2006)",
      verify: { status: "verified", note: "The ten laws and their one-line statements were read off Maeda's own lawsofsimplicity.com, which matches the order and wording given here exactly, from Reduce through to The One. The three keys are given on the Farnam Street summary of the book in Maeda's own words: AWAY, more appears like less by simply moving it far, far away; OPEN, openness simplifies complexity; POWER, use less, gain more. He describes them as keys to simplicity in the technology domain specifically." },
      belongs: { verdict: "core", why: "A named, published set of design rules aimed directly at product and interface work, and the most practical treatment of simplicity in the section." },
      related: [4, 5, 34, 41]
    },

    {
      n: 39,
      title: "Wabi-sabi",
      aka: ["Wabi and sabi"],
      oneLine: "A Japanese aesthetic that finds beauty in things that are imperfect, impermanent and incomplete.",
      demo: {
        caption: "The same mended bowl twice, with the same break. Only the treatment differs: hidden on the left, declared on the right.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 120\"><ellipse class=\"s\" cx=\"80\" cy=\"36\" rx=\"52\" ry=\"9\"/><path class=\"s\" d=\"M28 36 C34 94, 126 94, 132 36\"/><path class=\"s-mute\" d=\"M77 45 L82 58 L74 69 L78 78\"/><ellipse class=\"s\" cx=\"240\" cy=\"36\" rx=\"52\" ry=\"9\"/><path class=\"s\" d=\"M188 36 C194 94, 286 94, 292 36\"/><path class=\"s-accent\" d=\"M237 45 L242 58 L234 69 L238 78\"/><text class=\"t\" x=\"80\" y=\"112\" text-anchor=\"middle\">break hidden</text><text class=\"t\" x=\"240\" y=\"112\" text-anchor=\"middle\">break as the finish</text></svg></div>"
      },
      what: "Wabi and sabi are two old Japanese terms, brought together as a single idea in modern usage. The aesthetic developed through the tea ceremony: Murata Juko replaced ornate Chinese ceramics with plain wooden and clay utensils, and Sen no Rikyu, in the sixteenth century, pushed it further, famously building a teahouse whose entrance was so low that even an emperor had to bow to enter. The Western design reading of wabi-sabi comes largely from Leonard Koren's Wabi-Sabi for Artists, Designers, Poets and Philosophers, published in 1994.",
      why: "It gives you a defensible position against machine perfection. Variation, wear and visible repair can be designed for rather than tolerated, which changes what materials and finishes you choose and how you handle ageing. In digital work the equivalent is designing for the state a thing is in after two years of real use.",
      how: [
        "Choose materials that age into something better: oiled wood, brass, wool, uncoated paper.",
        "Design the worn state deliberately. Decide where the object will scuff and make that the right place.",
        "Allow variation within a system instead of specifying one exact outcome.",
        "Do not fake it. Distressing a new object to look old is the opposite of the idea."
      ],
      example: "Kintsugi, the Japanese practice of repairing broken pottery with lacquer mixed with gold, leaves the break visible and valuable rather than hidden.",
      numbers: "",
      pitfall: "In Western design writing wabi-sabi is usually flattened into a mood board of beige linen and rough ceramics, which is a style, not the idea. It also gets used to excuse poor tolerances and sloppy making, which is not what the tea masters were doing.",
      source: "Traditional Japanese aesthetics, developed through the tea ceremony (Murata Juko, Sen no Rikyu); introduced to Western designers by Leonard Koren, Wabi-Sabi for Artists, Designers, Poets and Philosophers (1994)",
      verify: { status: "verified", note: "Wikipedia's wabi-sabi article confirms the lineage: Murata Juko (1423-1502) introduced rough wooden and clay instruments in place of the gold, jade and porcelain of the Chinese-style tea service, and Sen no Rikyu (1522-1591) built a teahouse with a door so low that even the emperor would have to bow to enter. It gives the aesthetic as beauty that is imperfect, impermanent and incomplete, and confirms Koren's 1994 book. Koren's exact sentence could not be confirmed, so it is unquoted." },
      belongs: { verdict: "adjacent", why: "It is a philosophical and religious aesthetic rather than a design doctrine, but the design use is exact: it governs how you specify material, finish, variation and ageing." },
      related: [43, 41, 7, 47]
    },

    {
      n: 40,
      title: "Ma (the active void)",
      aka: ["The gap", "Negative space, Japanese sense"],
      oneLine: "The empty interval is a designed element, not what is left over.",
      demo: {
        caption: "The right panel shows only the gaps from the left arrangement. The intervals have widths and proportions of their own.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">The objects</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--nowrap\" style=\"gap:0\"><span class=\"db-block\" style=\"width:22%;height:56px\"></span><span style=\"width:8%\"></span><span class=\"db-block\" style=\"width:34%;height:56px\"></span><span style=\"width:6%\"></span><span class=\"db-block\" style=\"width:18%;height:56px\"></span><span style=\"width:12%\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">The intervals</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--nowrap\" style=\"gap:0\"><span style=\"width:22%\"></span><span class=\"db-block db-block--accent\" style=\"width:8%;height:56px\"></span><span style=\"width:34%\"></span><span class=\"db-block db-block--accent\" style=\"width:6%;height:56px\"></span><span style=\"width:18%\"></span><span class=\"db-block db-block--accent\" style=\"width:12%;height:56px\"></span></div></div></div></div>"
      },
      what: "Ma, written with the character for gap or pause, is the interval between things in Japanese arts and everyday life. It covers space and time equally: the gap between two objects, the pause in a piece of music, the distance between two fighters in karate. The graphic designer Alan Fletcher discussed it in The Art of Looking Sideways (2001), pointing out that Western languages have no single word for it. The nearest English gloss in common use is the silence between the notes that makes the music.",
      why: "Treating the void as an element changes how you work. You start composing the gaps instead of arranging the objects and accepting whatever space is left, which is the difference between a page with white space and a page with holes in it.",
      how: [
        "Draw the gaps. Sketch the negative shapes as though they were the objects.",
        "Set your spacing scale before your element sizes, so the intervals are chosen rather than left over.",
        "Use time as well as space: a deliberate pause before a transition is ma.",
        "Resist filling. An empty area is doing work if it separates, frames or slows the eye."
      ],
      example: "A tokonoma, the recessed alcove in a traditional Japanese room, holds a single scroll or arrangement. The emptiness of the alcove is what makes the one object in it readable.",
      numbers: "",
      pitfall: "Ma gets used as a fancy word for white space, which loses the time half and the activeness. Emptiness left by accident is not ma, and calling it that does not make it deliberate.",
      source: "Traditional Japanese aesthetics; discussed for designers in Alan Fletcher, The Art of Looking Sideways (2001)",
      verify: { status: "verified", note: "Checked the Wikipedia article on ma, which gives the character, the space-and-time definition, the ikebana, tokonoma and karate applications, Bernhard Karlgren's etymology, and Alan Fletcher's 2001 discussion. The silence-between-the-notes gloss appears in that article." },
      belongs: { verdict: "adjacent", why: "Borrowed from Japanese aesthetics, but the design use is direct and specific: it reframes spacing and timing as things you design rather than residue, which is how white space and pacing are taught." },
      related: [119, 121, 75, 46]
    },

    {
      n: 41,
      title: "Kanso (simplicity)",
      aka: ["Elimination of clutter"],
      oneLine: "Simplicity reached by taking away, so that what remains is plain and clear.",
      demo: { none: "Its working instruction produces the cut already drawn at 5 and 34, and what separates kanso, that the test is how the thing feels to look at rather than how few parts it has, is not in the object." },
      what: "One of the seven characteristics of Zen art set out by the philosopher Hisamatsu Shin'ichi in Zen and the Fine Arts. Kanso means simplicity or plainness: the removal of the ornate and the elaborate so that the thing is expressed in the fewest possible terms. It is close to the European reduction doctrines in this section, but arrived at from a different direction, since the aim is a clear mind rather than an efficient factory.",
      why: "Having a second, unrelated tradition arrive at the same conclusion is a reason to take reduction seriously rather than treating it as one century's taste. In practice kanso gives you a test that is about the viewer's state, not the object's part count: does looking at this feel quiet.",
      how: [
        "Take away rather than tidy. Rearranging clutter is not kanso.",
        "Judge by how the thing feels to look at, not by how few elements you can count.",
        "Leave the surface plain and let form, material and interval carry the interest.",
        "Apply it to what is on offer as well as what is on the page: fewer options is also kanso."
      ],
      example: "The dry garden at Ryoan-ji in Kyoto is raked white gravel, some moss, and fifteen stones in five groups, arranged so that at least one stone is always hidden from the viewing veranda. There is nothing else in it, and it has held attention for centuries.",
      numbers: "",
      pitfall: "Kanso is often used in Western design writing as a synonym for minimalist styling, which puts the emphasis back on how it looks. The tradition is about restraint in what is offered, not about a white background.",
      source: "Hisamatsu Shin'ichi, Zen and the Fine Arts (English edition 1971), one of seven characteristics of Zen art",
      verify: { status: "adjusted", note: "An earlier version of this note cited the Wikipedia entry on Shin'ichi Hisamatsu. That page carries no list of the seven and does not mention Zen and the Fine Arts, so it has been dropped. Kanso is confirmed as one of the seven, alongside fukinsei, koko, shizen, yugen, datsuzoku and seijaku, by Wikipedia's Japanese aesthetics article and by Lomas and colleagues, \"Zen and the Art of Living Mindfully\", Journal of Religion and Health (2017), which attributes the set to Hisamatsu (1971). Shibumi, which the master list treats as belonging to this set at 47, is not one of them; koko is the one omitted. Ryoan-ji details from the Wikipedia article on the temple: white gravel raked daily, moss round the stones, fifteen stones in five groups, at least one always hidden from the veranda." },
      belongs: { verdict: "adjacent", why: "Religious aesthetics rather than design doctrine, but its design use is the same working instruction as less-but-better, arrived at independently, which is worth knowing when you argue for a cut." },
      related: [4, 34, 39, 46]
    },

    {
      n: 42,
      title: "Fukinsei (asymmetry)",
      aka: ["Irregularity", "Asymmetry in Zen aesthetics"],
      oneLine: "Deliberate imbalance, because perfect symmetry looks finished and dead.",
      demo: {
        caption: "Right: a large pale mass and a small dark mark far out. They balance by weight and distance, not by mirroring.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Mirrored on the centre</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--nowrap\"><span class=\"db-block\" style=\"width:36px;height:72px\"></span><span class=\"db-block db-block--ink\" style=\"width:84px;height:72px\"></span><span class=\"db-block\" style=\"width:36px;height:72px\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Balanced by weight</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-block\" style=\"width:108px;height:72px\"></span><span class=\"db-sq db-sq--lg\"></span></div></div></div></div>"
      },
      what: "One of Hisamatsu's seven characteristics of Zen art. Fukinsei means asymmetry or irregularity: the refusal of the exact centre, the matched pair and the perfect circle. The reasoning is that symmetry implies completion and stasis, while an off-balance arrangement stays alive because the eye keeps resolving it. Nature is the model, since nothing in it is exactly symmetrical.",
      why: "Asymmetry is the easier route to a dynamic composition, and it forces you to work with visual weight rather than measurement, which produces better judgement than centring everything. The claim that it holds attention longer is the tradition's, not a finding, so treat it as a working preference rather than evidence.",
      how: [
        "Place the main element off centre and balance it with a smaller element further out.",
        "Break exact repetition somewhere: one item different in size, spacing or angle.",
        "Balance by weight rather than by mirroring. A small dark shape can hold a large pale one.",
        "Keep symmetry where it signals formality or authority, because that meaning is real and useful."
      ],
      example: "Ikebana arrangements are built on unequal stem lengths and a deliberately unbalanced triangle, which is why they read as alive rather than as a bouquet.",
      numbers: "",
      pitfall: "Asymmetry done without a system reads as a mistake rather than a decision. The arrangement still needs an underlying structure, otherwise you get a wonky layout instead of a dynamic one.",
      source: "Hisamatsu Shin'ichi, Zen and the Fine Arts (English edition 1971), one of seven characteristics of Zen art",
      verify: { status: "adjusted", note: "Confirmed as one of the seven characteristics by Wikipedia's Japanese aesthetics article and by Lomas and colleagues, \"Zen and the Art of Living Mindfully\", Journal of Religion and Health (2017), both of which translate fukinsei as asymmetry or irregularity. The Wikipedia entry on Shin'ichi Hisamatsu, cited here before, carries no list of the seven and has been dropped. The entry also called fukinsei the first of the seven. Published orderings of the set disagree, so the ordinal has gone. The why section previously asserted that asymmetric compositions hold attention longer. I found no study behind that, so it is now marked as the tradition's claim rather than a measured effect." },
      belongs: { verdict: "adjacent", why: "Borrowed from Zen aesthetics, and its design content overlaps entry 87, asymmetrical balance, in the composition section. Its distinct use here is the reason for the preference, that symmetry reads as closed, which composition textbooks rarely state." },
      related: [87, 91, 133, 41]
    },

    {
      n: 43,
      title: "Shizen (naturalness)",
      aka: ["Without pretence", "Unforced"],
      oneLine: "Made with care but not looking laboured, so nothing appears contrived.",
      demo: { none: "Naturalness is a claim about whether the making shows, which sits in the process rather than in a property of the object, and its one visible consequence, structure carried by alignment instead of drawn rules, is already the picture at 7." },
      what: "Another of Hisamatsu's seven. Shizen means naturalness, but not wildness. The Zen sense is closer to an absence of pretence: the thing has clearly been made with intention, and the intention does not show. A tea bowl that looks casually thrown was made by someone who could throw perfectly and chose not to.",
      why: "Effort that shows reads as anxiety. Work that looks unforced is trusted more, because the audience is not being asked to admire the labour. It is also the difference between a garden and a display.",
      how: [
        "Hide the working. Grids, guides and construction geometry should be felt, not seen.",
        "Avoid the over-resolved: perfectly even distributions, mathematically exact curves everywhere, symmetry by default.",
        "Let materials behave. Wood moves, ink spreads, paper takes ink unevenly.",
        "Check whether your design is asking to be admired for how hard it was."
      ],
      example: "A Japanese stroll garden is engineered to the centimetre and reads as though the landscape simply arranged itself, which is the whole intention.",
      numbers: "",
      pitfall: "Naturalness gets confused with leaving things alone. An unedited photograph or an untouched default is not shizen, it is just unfinished, and the difference is obvious to anyone looking.",
      source: "Hisamatsu Shin'ichi, Zen and the Fine Arts (English edition 1971), one of seven characteristics of Zen art",
      verify: { status: "adjusted", note: "Confirmed as one of the seven characteristics, translated as naturalness, by Wikipedia's Japanese aesthetics article and by Lomas and colleagues, \"Zen and the Art of Living Mindfully\", Journal of Religion and Health (2017), which attributes the set to Hisamatsu (1971). The Wikipedia entry on Shin'ichi Hisamatsu, cited here before, carries no list of the seven and has been dropped." },
      belongs: { verdict: "adjacent", why: "Aesthetic philosophy rather than design doctrine, but it names a real quality control: work that shows its effort is read as insecure, and this is the tradition that says so most clearly." },
      related: [7, 39, 41, 24]
    },

    {
      n: 44,
      title: "Yugen (subtle profundity)",
      aka: ["Mystery", "Depth beyond the surface"],
      oneLine: "Suggesting more than is shown, so the viewer completes the meaning.",
      demo: {
        caption: "Right: only the prow is clear of the island, and you still see a whole boat. Left leaves nothing to do.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 120\"><path class=\"s-mute\" d=\"M8 88 H150\"/><path class=\"f\" d=\"M92 88 L134 88 L128 78 L98 78 Z\"/><path class=\"f\" d=\"M112 78 L112 50 L130 76 Z\"/><path class=\"f-mute\" d=\"M16 88 C26 50, 58 48, 70 88 Z\"/><path class=\"s-mute\" d=\"M170 88 H312\"/><path class=\"f\" d=\"M206 88 L248 88 L242 78 L212 78 Z\"/><path class=\"f\" d=\"M226 78 L226 50 L244 76 Z\"/><path class=\"f-mute\" d=\"M178 88 C190 44, 224 44, 234 88 Z\"/><text class=\"t\" x=\"79\" y=\"110\" text-anchor=\"middle\">all of it shown</text><text class=\"t\" x=\"241\" y=\"110\" text-anchor=\"middle\">the rest inferred</text></svg></div>"
      },
      what: "One of Hisamatsu's seven, and the hardest to pin down. Yugen names a profound, quiet depth that cannot be stated directly. It comes from classical Japanese poetics and Noh theatre, where the aim is to imply an emotion or a distance rather than to depict it. The stock images are a landscape half hidden in mist and a boat disappearing behind an island.",
      why: "Suggestion outlasts statement. A design that shows everything is finished on first sight, while one that implies something keeps the viewer working, and work is what makes something memorable. It is also the mechanism behind almost every good film poster and book cover.",
      how: [
        "Show the part and let the whole be inferred: a detail crop, a fragment of the object, an edge running off the page.",
        "Obscure deliberately with mist, shadow, distance, blur or partial occlusion, rather than by cropping badly.",
        "Leave one question unanswered on purpose, and make sure it is not a question the reader needs answered.",
        "Keep yugen out of anything instructional, where implication is a defect."
      ],
      example: "Noh theatre, where a single slow turn of a masked head is meant to carry the emotional weight that a Western play would give to a speech.",
      numbers: "",
      pitfall: "It is the easiest of the seven to fake, because vagueness looks like depth in a small thumbnail. If the suggestion does not resolve into anything when the viewer thinks about it, you made a mood, not a meaning.",
      source: "Hisamatsu Shin'ichi, Zen and the Fine Arts (English edition 1971), one of seven characteristics of Zen art; the term is older, from classical Japanese poetics and Noh",
      verify: { status: "adjusted", note: "Confirmed as one of the seven characteristics by Wikipedia's Japanese aesthetics article, which glosses yugen as subtly profound grace, and by Lomas and colleagues, \"Zen and the Art of Living Mindfully\", Journal of Religion and Health (2017), which attributes the set to Hisamatsu (1971) and translates it as profound grace. The Wikipedia entry on Shin'ichi Hisamatsu, cited here before, carries no list of the seven and has been dropped. Its earlier life in Japanese poetics and Noh is standard in the literature on Japanese aesthetics." },
      belongs: { verdict: "adjacent", why: "Poetics rather than design, and the thinnest of the seven for practical work. Its specific design use is the argument for suggestion over depiction in image-making, cover design and advertising." },
      related: [25, 40, 146, 39]
    },

    {
      n: 45,
      title: "Datsuzoku (freedom from convention)",
      aka: ["Breaking from routine", "Transcending habit"],
      oneLine: "Escape the expected pattern, so the work surprises rather than confirms.",
      demo: {
        caption: "Eight stones at one rhythm. Turning a single stone is the whole difference, and your eye goes straight to it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Rhythm unbroken</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--nowrap db-row--tight\"><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">One break</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--nowrap db-row--tight\"><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\" style=\"transform:rotate(24deg)\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span></div></div></div></div>"
      },
      what: "One of Hisamatsu's seven, usually translated as freedom from convention, from habit or from worldly attachment. It licences the break: the moment where the established rhythm stops and something unexpected happens. In the tea tradition the break is small and deliberate, an unmatched utensil among matched ones, not a general invitation to do as you like.",
      why: "Consistency without a break becomes wallpaper, and people stop seeing it. A single planned deviation resets attention and makes the surrounding order legible again, because you only notice a rule when it is broken.",
      how: [
        "Establish the pattern properly first. There is no break without a rule to break.",
        "Break once per piece, at the place you most want looked at.",
        "Make the break big enough to read as intentional. A small deviation reads as an error.",
        "Never break in the parts people rely on to navigate or to recover from a mistake."
      ],
      example: "A tea garden path where the stepping stones run in an even rhythm and then one stone sits at an angle, which slows the walker and makes them look up.",
      numbers: "",
      pitfall: "It is the principle most easily used to justify self-indulgence. Freedom from convention in the hands of someone who has not learned the convention produces work that is merely wrong.",
      source: "Hisamatsu Shin'ichi, Zen and the Fine Arts (English edition 1971), one of seven characteristics of Zen art",
      verify: { status: "adjusted", note: "Confirmed as one of the seven characteristics, translated as unbounded by convention or free from routine, by Wikipedia's Japanese aesthetics article and by Lomas and colleagues, \"Zen and the Art of Living Mindfully\", Journal of Religion and Health (2017), which attributes the set to Hisamatsu (1971). The Wikipedia entry on Shin'ichi Hisamatsu, cited here before, carries no list of the seven and has been dropped." },
      belongs: { verdict: "adjacent", why: "Zen aesthetics, but with a precise design use: it is the doctrine behind the deliberate single break in a system, which is how designers keep consistency from turning into invisibility." },
      related: [108, 22, 149, 42]
    },

    {
      n: 46,
      title: "Seijaku (stillness)",
      aka: ["Tranquillity", "Quiet"],
      oneLine: "An active calm, energised rather than empty, held in the design.",
      demo: {
        caption: "The same four tasks, the same type. Only the interval changed, and the right one is quieter to look at.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Same items, packed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col\" style=\"gap:3px\"><span class=\"db-label\">Today</span><span class=\"db-type\">Renew the vehicle tax</span><span class=\"db-type\">Book the boiler service</span><span class=\"db-type\">Send the meter reading</span><span class=\"db-type\">Collect the parcel</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Same items, spaced</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col\" style=\"gap:18px\"><span class=\"db-label\">Today</span><span class=\"db-type\">Renew the vehicle tax</span><span class=\"db-type\">Book the boiler service</span><span class=\"db-type\">Send the meter reading</span><span class=\"db-type\">Collect the parcel</span></div></div></div></div></div>"
      },
      what: "One of Hisamatsu's seven, usually translated as tranquillity or stillness. The quality is not absence of activity but a settled quietness that survives activity: the calm of a tea room in a busy city. In visual terms it comes from slow rhythm, generous intervals, low contrast in the supporting elements and the removal of anything that flickers or nags.",
      why: "Attention is the scarce resource in almost every design context. A calm design lets people think, which is what they came to do, and calm is a competitive advantage in categories where everything else is shouting.",
      how: [
        "Cut motion, flashing, autoplay and anything that moves without being asked.",
        "Increase intervals before you decrease elements. Space produces calm faster than deletion.",
        "Keep contrast high where meaning lives and low everywhere else.",
        "Slow the pacing: fewer things per screen, longer transitions, no urgency you did not need."
      ],
      example: "A tea room, which is small, dim and plain, and is designed so that a guest's attention has somewhere to settle.",
      numbers: "",
      pitfall: "Calm becomes lifeless when it is achieved by draining contrast everywhere, including from the things people need to find. Stillness in this tradition has tension in it.",
      source: "Hisamatsu Shin'ichi, Zen and the Fine Arts (English edition 1971), one of seven characteristics of Zen art",
      verify: { status: "adjusted", note: "Confirmed as one of the seven characteristics, translated as tranquillity or silence, by Wikipedia's Japanese aesthetics article and by Lomas and colleagues, \"Zen and the Art of Living Mindfully\", Journal of Religion and Health (2017), which attributes the set to Hisamatsu (1971). The Wikipedia entry on Shin'ichi Hisamatsu, cited here before, carries no list of the seven and has been dropped." },
      belongs: { verdict: "adjacent", why: "Zen aesthetics, and its design use is now a mainstream requirement: calm interfaces and quiet environments, judged by whether a person can think in them." },
      related: [40, 41, 1001, 119]
    },

    {
      n: 9046,
      title: "Koko (austere sublimity)",
      aka: ["Weathered beauty", "Basic, seasoned"],
      oneLine: "The pared-down, weathered quality of something reduced to its essentials by age and use.",
      demo: { none: "Koko is the leanness that long use leaves in a real material, and any drawn version of age would be the applied grunge the entry warns against rather than the thing itself." },
      what: "Koko is one of Hisamatsu's seven characteristics of Zen art, and it is the one missing from the master list. It is usually translated as austere sublimity, or as the basic and weathered: a form stripped to bone, with the sap gone out of it, carrying the marks of long use. A gnarled old pine and a worn wooden step are the standard illustrations.",
      why: "It gives you a target for maturity in a design rather than freshness. Where wabi-sabi accepts imperfection, koko wants the leanness that comes from long service, which is a useful brief for anything meant to look established rather than new.",
      how: [
        "Reduce until the form has no slack in it, then leave the surface alone.",
        "Let use marks stay visible where they show the object has worked.",
        "Prefer aged, matte and dry finishes over new, glossy and wet ones when the brief calls for authority.",
        "Do not confuse it with distressing. Koko is what happens, not what is applied."
      ],
      example: "An ancient pine trained over centuries, or the worn timber threshold of a temple, which the tradition treats as more beautiful than a new one.",
      numbers: "",
      pitfall: "It gets faked with texture overlays and grunge filters, which produce the appearance of age with none of the reduction that gives koko its force.",
      source: "Hisamatsu Shin'ichi, Zen and the Fine Arts (English edition 1971), one of seven characteristics of Zen art",
      verify: { status: "adjusted", note: "Added because the master list gives six of Hisamatsu's seven characteristics (kanso, fukinsei, shizen, yugen, datsuzoku, seijaku) and substitutes shibumi, which is not one of them, for koko, which is. An earlier version called koko the seventh of the set. Both listings I could reach put it third: Wikipedia's Japanese aesthetics article runs fukinsei, kanso, koko, shizen, yugen, datsuzoku, seijaku, and Lomas and colleagues, \"Zen and the Art of Living Mindfully\", Journal of Religion and Health (2017), runs kanso, fukinsei, koko, shizen, datsuzoku, seijaku, yugen. The ordinal has gone rather than been swapped, because the two sources also disagree about which comes first. Wikipedia glosses koko as basic and weathered; Lomas gives austere sublimity. The Wikipedia entry on Shin'ichi Hisamatsu, cited here before, carries no list of the seven." },
      belongs: { verdict: "adjacent", why: "Zen aesthetics, included for completeness because the master list already carries the other six. Its design use is a brief for material ageing and for forms that should read as long-established." },
      related: [39, 41, 43, 47]
    },

    {
      n: 47,
      title: "Shibumi (understated elegance)",
      aka: ["Shibui", "Shibusa"],
      oneLine: "Restrained beauty that reveals more the longer you live with it.",
      demo: {
        caption: "Three greys at one lightness. The outer two have a hue in them, which shows only against the flat one.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--centre\"><span class=\"db-col db-col--tight\"><span class=\"db-swatch db-swatch--lg\" style=\"background:#968878\"></span><span class=\"db-note\">warm</span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch db-swatch--lg\" style=\"background:#8a8a8a\"></span><span class=\"db-note\">flat</span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch db-swatch--lg\" style=\"background:#808c94\"></span><span class=\"db-note\">cool</span></span></div></div>"
      },
      what: "Shibui, shibumi and shibusa are forms of one word. It started in the Muromachi period as shibushi, meaning a sour or astringent taste like an unripe persimmon, and by the early Edo period it had become an aesthetic term for anything beautiful by being understated. The quality balances simplicity and complexity: plain at first glance, with detail that emerges over time. The critic Yanagi Soetsu described seven elements of shibusa: simplicity, implicitness, modesty, naturalness, everydayness, imperfection and silence.",
      why: "It describes the only kind of beauty that survives daily ownership. Loud design is exhausting to live with and quiet design can be dull, and shibumi names the narrow band between them, which is exactly the target for products, interiors and anything a person uses for years.",
      how: [
        "Put the interest in the detail, not the silhouette. Reward close inspection and second use.",
        "Use low-contrast, complex colour rather than flat bright colour: a grey with something in it.",
        "Design the first impression to be quiet and the tenth to be interesting.",
        "Test by living with it. Put the design on your own desk for a fortnight."
      ],
      example: "The August and September 1960 issues of House Beautiful, edited by Elizabeth Gordon, were devoted to shibui and are the reason the word entered Western design vocabulary at all.",
      numbers: "",
      pitfall: "Shibumi is often listed as one of the seven Zen aesthetic principles. It is not. Quoting it as part of Hisamatsu's set will be picked up by anyone who knows the material.",
      source: "Traditional Japanese aesthetics, from the Muromachi period; seven elements of shibusa from Yanagi Soetsu; popularised in the West by House Beautiful, August and September 1960, edited by Elizabeth Gordon",
      verify: { status: "adjusted", note: "The master list places shibumi at the end of the Zen seven, which is wrong. Wikipedia's shibui article gives the Muromachi origin as shibushi, meaning a sour or astringent taste like an unripe persimmon, the early Edo shift to the aesthetic sense, Yanagi Soetsu's seven elements of shibusa as simplicity, implicitness, modesty, naturalness, everydayness, imperfection and silence, published in the magazine Kogei between 1930 and 1940, and the August and September 1960 House Beautiful issues edited by Elizabeth Gordon, subtitled \"Discover shibui, the word for the highest level in beauty\" and \"How to be shibui with American things\". It does not list shibumi among Hisamatsu's seven, and nor does the Hisamatsu literature. Koko added at 9046 as the one actually missing." },
      belongs: { verdict: "adjacent", why: "Japanese aesthetics rather than design doctrine, but it names the exact target for objects people live with, which is a brief no European design term states as precisely." },
      related: [9046, 39, 41, 20]
    },

    {
      n: 48,
      title: "The quality without a name",
      aka: ["QWAN", "Aliveness"],
      oneLine: "Alexander's name for the property that makes some places feel alive, which no single word captures.",
      demo: {
        caption: "One row of shops twice; on the right, one unit repeated. You will prefer one before you can say why.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 130\"><path class=\"s-mute\" d=\"M4 100 H154\"/><rect class=\"s\" x=\"6\" y=\"56\" width=\"26\" height=\"44\"/><rect class=\"s\" x=\"34\" y=\"42\" width=\"34\" height=\"58\"/><rect class=\"s\" x=\"70\" y=\"64\" width=\"22\" height=\"36\"/><rect class=\"s\" x=\"94\" y=\"50\" width=\"30\" height=\"50\"/><rect class=\"s\" x=\"126\" y=\"58\" width=\"26\" height=\"42\"/><rect class=\"f-mute\" x=\"12\" y=\"64\" width=\"6\" height=\"8\"/><rect class=\"f-mute\" x=\"22\" y=\"64\" width=\"6\" height=\"8\"/><rect class=\"f-mute\" x=\"40\" y=\"50\" width=\"8\" height=\"10\"/><rect class=\"f-mute\" x=\"54\" y=\"50\" width=\"8\" height=\"10\"/><rect class=\"f-mute\" x=\"46\" y=\"84\" width=\"10\" height=\"16\"/><rect class=\"f-mute\" x=\"76\" y=\"72\" width=\"10\" height=\"8\"/><rect class=\"f-mute\" x=\"100\" y=\"58\" width=\"8\" height=\"10\"/><rect class=\"f-mute\" x=\"112\" y=\"58\" width=\"8\" height=\"10\"/><rect class=\"f-mute\" x=\"132\" y=\"66\" width=\"14\" height=\"10\"/><path class=\"s-mute\" d=\"M166 100 H316\"/><rect class=\"s\" x=\"170\" y=\"54\" width=\"26\" height=\"46\"/><rect class=\"s\" x=\"199\" y=\"54\" width=\"26\" height=\"46\"/><rect class=\"s\" x=\"228\" y=\"54\" width=\"26\" height=\"46\"/><rect class=\"s\" x=\"257\" y=\"54\" width=\"26\" height=\"46\"/><rect class=\"s\" x=\"286\" y=\"54\" width=\"26\" height=\"46\"/><rect class=\"f-mute\" x=\"176\" y=\"62\" width=\"14\" height=\"10\"/><rect class=\"f-mute\" x=\"205\" y=\"62\" width=\"14\" height=\"10\"/><rect class=\"f-mute\" x=\"234\" y=\"62\" width=\"14\" height=\"10\"/><rect class=\"f-mute\" x=\"263\" y=\"62\" width=\"14\" height=\"10\"/><rect class=\"f-mute\" x=\"292\" y=\"62\" width=\"14\" height=\"10\"/><rect class=\"f-mute\" x=\"179\" y=\"86\" width=\"8\" height=\"14\"/><rect class=\"f-mute\" x=\"208\" y=\"86\" width=\"8\" height=\"14\"/><rect class=\"f-mute\" x=\"237\" y=\"86\" width=\"8\" height=\"14\"/><rect class=\"f-mute\" x=\"266\" y=\"86\" width=\"8\" height=\"14\"/><rect class=\"f-mute\" x=\"295\" y=\"86\" width=\"8\" height=\"14\"/><text class=\"t\" x=\"79\" y=\"118\" text-anchor=\"middle\">A</text><text class=\"t\" x=\"241\" y=\"118\" text-anchor=\"middle\">B</text></svg></div>"
      },
      what: "Christopher Alexander opened The Timeless Way of Building (1979) with a central quality he called the root criterion of life and spirit in a person, a town or a building, and said it is objective and precise but cannot be named. He then circled it with words that each catch part of it and none of it whole: alive, whole, comfortable, free, exact, egoless, eternal. He spent the decades that followed trying to name it, which became The Nature of Order.",
      why: "It is permission to trust a judgement you cannot justify yet. Most designers can tell one room or page is alive and another dead long before they can explain why, and Alexander's argument is that the feeling is evidence rather than taste.",
      how: [
        "Ask the comparison question rather than the analysis one: which of these two feels more alive.",
        "Ask several people the same comparison. Alexander claimed agreement would be high, which is contested, so treat your own answers as the data.",
        "When something is dead, look at the relationships rather than the parts.",
        "Use the fifteen properties in The Nature of Order to convert the feeling into changes."
      ],
      example: "An old market street people linger in, next to a newer precinct built for the same purpose that they walk straight through. Alexander's argument is that the difference is real and can be studied.",
      numbers: "",
      pitfall: "Because it cannot be named, it is easy to use as an unanswerable trump card in a critique. Alexander did not leave it there, and neither should you. His further claim that people agree strongly about which things have the quality is disputed, so do not cite it as fact.",
      source: "Christopher Alexander, The Timeless Way of Building (Oxford University Press, 1979)",
      verify: { status: "disputed", note: "Book, publisher and 1979 date confirmed via Wikipedia, which also says Alexander defines the quality by surrounding it with words none of which is sufficient alone. Several close readings give the same seven: alive, whole, comfortable, free, exact, egoless, eternal. Status moved from verified to disputed: the concept is sound, but it rests on Alexander's claim that observers agree strongly about which things have the quality, and that has never been independently replicated. The entry invited readers to confirm it, and now says the claim is unsettled." },
      belongs: { verdict: "core", why: "Names the thing designers argue about most and articulate least. Core despite the disputed status: the concept holds even where Alexander's evidence claim does not." },
      related: [49, 24, 37, 39]
    },

    {
      n: 49,
      title: "Wholeness and living structure",
      aka: ["The fifteen properties", "Centres"],
      oneLine: "Alexander's attempt to say precisely what makes a structure feel alive, using centres and fifteen recurring properties.",
      demo: {
        caption: "Left jumps from biggest to smallest with nothing between. Right fills the intermediate sizes: Alexander's first property.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Two sizes only</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--bottom\"><span class=\"db-sq\" style=\"width:64px;height:64px\"></span><span class=\"db-sq\" style=\"width:8px;height:8px\"></span><span class=\"db-sq\" style=\"width:8px;height:8px\"></span><span class=\"db-sq\" style=\"width:8px;height:8px\"></span><span class=\"db-sq\" style=\"width:8px;height:8px\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Sizes all the way down</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--bottom\"><span class=\"db-sq\" style=\"width:64px;height:64px\"></span><span class=\"db-sq\" style=\"width:40px;height:40px\"></span><span class=\"db-sq\" style=\"width:24px;height:24px\"></span><span class=\"db-sq\" style=\"width:14px;height:14px\"></span><span class=\"db-sq\" style=\"width:8px;height:8px\"></span></div></div></div></div>"
      },
      what: "In The Nature of Order, published in four books between 2002 and 2005, Christopher Alexander replaced the unnamed quality with a theory. Space is made of centres, which are focused areas that support each other, and wholeness is the field of those centres. He identified fifteen properties that appear wherever living structure occurs. The first eight are levels of scale, strong centres, boundaries, alternating repetition, positive space, good shape, local symmetries, and deep interlock and ambiguity.",
      why: "It converts a vague judgement into a checklist you can work with. When a layout feels dead, running the properties gives you concrete moves: add an intermediate scale, strengthen the centre, give the boundary a thickness, make the leftover space into a shape.",
      how: [
        "Look for missing levels of scale. Most dead layouts have a huge thing and a tiny thing and nothing between.",
        "Strengthen the main centre and let everything else support it rather than compete.",
        "Give boundaries a real thickness rather than a hairline. A thick edge is itself a centre.",
        "Turn leftover gaps into positive shapes with their own proportions."
      ],
      example: "A traditional window with a frame, a sill, glazing bars and a reveal has levels of scale, boundaries and local symmetries built in. A frameless sheet of glass in a wall has none of them, which is why the two feel so different at the same size.",
      numbers: "Fifteen properties, across four books published 2002 to 2005.",
      pitfall: "Alexander presents the theory as objective and universal, and that claim is contested in architecture and in design research. Treat the fifteen properties as a strong working toolkit rather than a proven law.",
      source: "Christopher Alexander, The Nature of Order, four volumes (Center for Environmental Structure, 2002-2005)",
      verify: { status: "adjusted", note: "Two dating errors fixed. Wikipedia gives the series only as 2002-2004 and does not date the volumes individually; the Christopher Alexander CES Archive records Book One, The Phenomenon of Life, and Book Two, The Process of Creating Life, as 2002, Book Four, The Luminous Ground, as 2004, and Book Three, A Vision of a Living World, as 2005, published out of sequence. The range is therefore 2002 to 2005. The third property was also wrong. An earlier note claimed Alexander's name for it is thick boundaries; his own heading, in chapter 5 of Book One, is boundaries, and thickness is what he says a boundary needs, not what he calls it. Thick boundaries is Salingaros's phrasing in derivative accounts. Order and names of the first eight checked against a reader's notes on Book One at nature-of-order.stefan-lesser.com. The Architexturez pages cited before return 403 and the ArchDaily chapter is behind a subscriber wall, so neither was read." },
      belongs: { verdict: "core", why: "The most detailed attempt anyone has made to say what good structure is, and the fifteen properties are directly usable on a page or a screen." },
      related: [48, 25, 96, 113]
    },

    {
      n: 50,
      title: "Design as problem-solving versus design as problem-framing",
      aka: ["Problem setting", "Reframing"],
      oneLine: "Deciding what the problem is matters more than solving the problem you were handed.",
      demo: {
        caption: "Both come from one request for a new website. Only the right one answers the problem underneath: where is the number?",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Problem as handed over</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col\"><div class=\"db-nav\"><b>Home</b><span>About</span><span>Services</span><span>Contact</span></div><div class=\"db-block db-block--ink\" style=\"height:36px\"></div><div class=\"db-lines\"><i></i><i></i><i></i></div><span class=\"db-note\" style=\"font-size:7px\">01234 567890</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Problem reframed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col\"><div class=\"db-row db-row--between db-row--nowrap\"><div class=\"db-nav\"><b>Home</b><span>About</span></div><span class=\"db-btn db-btn--sm\">01234 567890</span></div><div class=\"db-lines\"><i></i><i></i><i></i><i></i></div></div></div></div></div></div>"
      },
      what: "Two sources sit under this. Horst Rittel and Melvin Webber, in Dilemmas in a General Theory of Planning (Policy Sciences, 1973), described wicked problems: no definitive formulation, no stopping rule, solutions that are better or worse rather than true or false, and each problem unique. Donald Schon, in The Reflective Practitioner (1983), argued that professionals do not receive problems ready-made; the work of problem setting, deciding what the situation is and what is worth attending to, comes first and is usually left out of accounts of practice.",
      why: "Most bad design is a competent answer to a badly stated question. Time spent on the frame is the highest-return time in the project, because a changed frame changes every subsequent decision, and it is much cheaper to change at the start.",
      how: [
        "Rewrite the brief in your own words and take it back. Disagreements surface immediately.",
        "Ask what the client will do with the outcome, and what happens if nothing changes.",
        "State the problem three different ways and see which one produces the most interesting solutions.",
        "Watch for wicked characteristics: no clear stopping point, no true or false answer, stakeholders who define it differently. Those need negotiation, not more analysis."
      ],
      example: "A client asking for a new website when their real problem is that nobody can find their phone number. Both are real jobs, and they produce completely different projects.",
      numbers: "Rittel and Webber list ten characteristics of a wicked problem.",
      pitfall: "Reframing becomes a way of avoiding the work you were hired for, and clients notice. Frame once, get agreement, then solve. Endless reframing is a symptom, not a method.",
      source: "Horst Rittel and Melvin Webber, Dilemmas in a General Theory of Planning, Policy Sciences (1973); Donald Schon, The Reflective Practitioner (Basic Books, 1983)",
      verify: { status: "verified", note: "Wikipedia's wicked problem article confirms Rittel and Webber's Dilemmas in a General Theory of Planning in Policy Sciences (1973) and their ten characteristics, and gives Churchman's 1967 guest editorial in Management Science as the probable coinage, noting the attribution is not entirely settled between Churchman and Rittel. Schon's problem setting argument and the 1983 Basic Books date confirmed via the SAGE Encyclopedia of Educational Theory and Philosophy. The master list also covers this at 945." },
      belongs: { verdict: "core", why: "The distinction that decides whether a designer is a supplier or a partner, and the source of every reframing method in the process literature." },
      related: [945, 16, 1, 9]
    },

    {
      n: 9002,
      title: "Form follows failure",
      aka: ["Design driven by dissatisfaction"],
      oneLine: "Things change shape because the previous version annoyed somebody, not because someone imagined a function.",
      demo: {
        caption: "Three forks in order. Nobody deduced the fourth tine from the function; each one answers a complaint about the last.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 130\"><rect class=\"f\" x=\"48\" y=\"62\" width=\"8\" height=\"52\"/><rect class=\"f\" x=\"42\" y=\"54\" width=\"20\" height=\"9\"/><rect class=\"f\" x=\"43\" y=\"18\" width=\"6\" height=\"37\"/><rect class=\"f\" x=\"55\" y=\"18\" width=\"6\" height=\"37\"/><rect class=\"f\" x=\"154\" y=\"62\" width=\"8\" height=\"52\"/><rect class=\"f\" x=\"144\" y=\"54\" width=\"28\" height=\"9\"/><rect class=\"f\" x=\"145\" y=\"18\" width=\"6\" height=\"37\"/><rect class=\"f\" x=\"155\" y=\"18\" width=\"6\" height=\"37\"/><rect class=\"f\" x=\"165\" y=\"18\" width=\"6\" height=\"37\"/><rect class=\"f\" x=\"260\" y=\"62\" width=\"8\" height=\"52\"/><rect class=\"f\" x=\"246\" y=\"54\" width=\"36\" height=\"9\"/><rect class=\"f\" x=\"247\" y=\"18\" width=\"6\" height=\"37\"/><rect class=\"f\" x=\"256\" y=\"18\" width=\"6\" height=\"37\"/><rect class=\"f\" x=\"265\" y=\"18\" width=\"6\" height=\"37\"/><rect class=\"f\" x=\"274\" y=\"18\" width=\"6\" height=\"37\"/><text class=\"t\" x=\"52\" y=\"126\" text-anchor=\"middle\">two tines</text><text class=\"t\" x=\"158\" y=\"126\" text-anchor=\"middle\">three</text><text class=\"t\" x=\"264\" y=\"126\" text-anchor=\"middle\">four</text></svg></div>"
      },
      what: "Henry Petroski's argument, made across his books and most directly in The Evolution of Useful Things (1992). His claim is that form follows function is a poor account of how objects actually develop. Designers rarely start from a pure statement of purpose; they start from an existing object that fails in some small way, and they fix that failure. The next version then fails differently, and so on. His earlier book, To Engineer Is Human (1985), makes the same case about the role of failure in successful design.",
      why: "It changes where you look for ideas. If invention is driven by dissatisfaction, then the most productive research is watching people be irritated by the current thing, which is cheap, fast and available on every project.",
      how: [
        "Study the incumbent before you design the replacement. List everything that fails, including the trivial annoyances.",
        "Watch real use rather than asking. People do not report small failures, they just work around them.",
        "Collect the workarounds. A workaround is a failure with a user-designed patch on it.",
        "Expect your fix to create the next failure, and design so the next person can find it."
      ],
      example: "The paper clip, the zip and the fork are all in Petroski's territory: long chains of small fixes to specific annoyances, with no single moment where someone deduced the form from the function.",
      numbers: "",
      pitfall: "Taken alone it makes design purely incremental, and some things really do start from a new capability rather than from an old irritation. Hold it alongside Rams's first principle rather than instead of it.",
      source: "Henry Petroski, The Evolution of Useful Things (Knopf, 1992); see also To Engineer Is Human: The Role of Failure in Successful Design (1985)",
      verify: { status: "verified", note: "Added as a gap: the master list has form follows function and form follows emotion but not this, which is the best-known counter-argument to both. Book titles and the 1992 and 1985 dates confirmed via the Wikipedia entry on Henry Petroski. The chapter attribution was soft before and is now checked: the contents page of the Internet Archive full-text scan gives chapter 2 as \"Form Follows Failure\". An earlier version of this note also cited a State Library of Queensland catalogue record calling it his maxim. I could not confirm that record, so it has gone." },
      belongs: { verdict: "core", why: "A named, published doctrine about where designed form actually comes from, and the most useful correction to the two form-follows slogans that open this section." },
      related: [2, 3, 35, 50]
    }
  ]
};
