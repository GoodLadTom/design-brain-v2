window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[3] = {
  "n": 3,
  "slug": "composition",
  "title": "Principles of composition",
  "blurb": "How elements are arranged on a surface: balance, emphasis, rhythm, unity and the space between things.",
  "intro": "Composition is the arrangement job. You have a surface and some things to put on it, and these principles describe the levers you pull to decide where they go and how loud each one is. Most of the vocabulary comes from two lines of teaching: American design theory around 1900, where Arthur Wesley Dow and Denman Ross tried to write down what artists already knew by eye, and the Bauhaus-descended studio books of the twentieth century, of which Wucius Wong's Principles of Two-Dimensional Design is the tightest. A lot of it has since been repackaged for screens without much change, because the underlying perceptual facts have not changed. Read this section as a set of named handles for judgements you already make by instinct, so you can explain them to a client and repeat them on purpose.",
  "sources": [
    "Denman W. Ross, A Theory of Pure Design: Harmony, Balance, Rhythm (1907)",
    "Arthur Wesley Dow, Composition (first published 1899; all quotations here are from the ninth edition, Doubleday, Page and Company, 1914, which is the text available in full on Project Gutenberg)",
    "Wucius Wong, Principles of Two-Dimensional Design (Van Nostrand Reinhold, 1972)",
    "David A. Lauer and Stephen Pentak, Design Basics, 9th edition (Cengage, 2016; the ninth edition's title page credits Pentak first)",
    "Robin Williams, The Non-Designer's Design Book (Peachpit Press, 1994)",
    "Rudolf Arnheim, Art and Visual Perception: A Psychology of the Creative Eye (University of California Press, 1954; revised edition 1974)",
    "Mark Boulton, Whitespace, A List Apart, 9 January 2007",
    "Jakob Nielsen, F-Shaped Pattern For Reading Web Content, Nielsen Norman Group, 16 April 2006, and Kara Pernice's 2017 reassessment for the same group",
    "George Markowsky, Misconceptions about the Golden Ratio, The College Mathematics Journal 23(1), January 1992, pp. 2-19",
    "ISO 216 (international paper sizes)",
    "WCAG 2.2, W3C",
    "Leon Battista Alberti, De pictura (1435)",
    "John Thomas Smith, Remarks on Rural Scenery (1797)",
    "Arthur Wesley Dow, Composition (1899)",
    "Edgar Rubin, Synsoplevede Figurer (1915)",
    "Heinrich Wolfflin, Kunstgeschichtliche Grundbegriffe (1915)",
    "Rudolf Arnheim, Art and Visual Perception (1954, revised 1974) and The Power of the Center (1982)",
    "Colin Rowe and Robert Slutzky, Transparency: Literal and Phenomenal, Perspecta 8 (1963)",
    "Charles Bouleau, The Painter's Secret Geometry (1963)",
    "Josef Muller-Brockmann, Grid Systems in Graphic Design (Verlag Arthur Niggli, 1981)",
    "Edward Tufte, Envisioning Information (1990)",
    "Stephen E. Palmer, Common region: a new principle of perceptual grouping, Cognitive Psychology 24(3), 436-447 (1992)",
    "Gustav Fechner, Vorschule der Aesthetik (1876)",
    "Stephen Prince and Wayne E. Hensley, The Kuleshov Effect: Recreating the Classic Experiment, Cinema Journal 31(2), 59-75 (1992)",
    "George Markowsky, Misconceptions about the Golden Ratio, The College Mathematics Journal 23(1), 2-19 (1992)",
    "Christopher D. Green, All That Glitters: A Review of Psychological Research on the Aesthetics of the Golden Section, Perception 24(8), 937-968 (1995)",
    "Colin Wheildon, Type and Layout (Strathmoor Press, 1995), cited by Universal Principles of Design for the Gutenberg diagram",
    "Marco Bertamini, Kate Bennett and Carole Bode, The anterior bias in visual art: the case of images of animals, Laterality 16(6), 673-689 (2011)",
    "William Lidwell, Kritina Holden and Jill Butler, Universal Principles of Design (2003, revised editions since)",
    "Barbara Chaparro and colleagues, Reading Online Text: A Comparison of Four White Space Layouts, Usability News 6(2), Wichita State University (2004)",
    "Jakob Nielsen and Kara Pernice, F-shaped reading pattern research, Nielsen Norman Group (2006, 2017, 2019)",
    "Peter Karow, Digital Formats for Typefaces",
    "EBU Recommendation R 95, Safe areas for 16:9 television production",
    "W3C, CSS Text Module Level 3 (the hanging-punctuation property)",
    "Evgraf Fedorov (1891) and George Polya (1924) on the seventeen wallpaper groups"
  ],
  "entries": [
    {
      "n": 85,
      "title": "Balance",
      "aka": [
        "Visual balance"
      ],
      "oneLine": "Distributing visual weight so a composition feels settled instead of tipping to one side.",
      demo: {
        caption: "Same three squares. On the right the big mass sits near the axis and the small ones move out; it stops tipping.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Tips left</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"1\" y=\"1\" width=\"198\" height=\"118\"/><path class=\"s-mute\" d=\"M100 6 V114\"/><rect class=\"f\" x=\"12\" y=\"22\" width=\"56\" height=\"56\"/><rect class=\"f\" x=\"12\" y=\"86\" width=\"26\" height=\"26\"/><rect class=\"f\" x=\"46\" y=\"94\" width=\"14\" height=\"14\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Settles</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"1\" y=\"1\" width=\"198\" height=\"118\"/><path class=\"s-mute\" d=\"M100 6 V114\"/><rect class=\"f\" x=\"56\" y=\"22\" width=\"56\" height=\"56\"/><rect class=\"f\" x=\"146\" y=\"30\" width=\"26\" height=\"26\"/><rect class=\"f\" x=\"164\" y=\"80\" width=\"14\" height=\"14\"/></svg></div></div></div>"
      },
      "what": "Every element on a page pulls on the eye with a certain force. Size, darkness, colour saturation, complexity and distance from the centre all add to that pull. Balance is the arrangement of those pulls so the whole thing reads as resolved. Denman Ross, writing in 1907, defined balance as \"some equal opposition and consequent equilibrium\" that produces, for the moment, a suspension of movement. It is judged by eye, not by measurement.",
      "why": "A balanced layout stops the viewer fidgeting and lets them attend to the content. An unbalanced one keeps signalling that something is unfinished, which readers experience as low quality even when they cannot name the cause. Balance is also the cheapest way to make a modest layout look deliberate.",
      "how": [
        "Squint at the layout, or blur it, and check whether one side is visibly darker or heavier than the other.",
        "Counter one large pale element with several small dark ones rather than matching size for size.",
        "Remember that distance from the centre multiplies weight, so a small item near the edge can hold a big item near the middle.",
        "Rotate the design 180 degrees and look again; problems you have gone blind to will jump out."
      ],
      "example": "The Google homepage: logo, search field and two buttons stacked on a centre line, with nothing competing at the edges. Whatever else you think of it, it does not tip.",
      "numbers": "",
      "pitfall": "Designers chase balance by centring everything, which produces a static page with no route through it. Balance settles a composition; it does not tell the reader where to look first.",
      "source": "Denman W. Ross, A Theory of Pure Design: Harmony, Balance, Rhythm (1907)",
      "verify": {
        "status": "verified",
        "note": "Ross's definition of balance read directly from the Project Gutenberg full text of A Theory of Pure Design (ebook 74765), which also confirms harmony, balance and rhythm as his three modes of order."
      },
      "belongs": {
        "verdict": "core",
        "why": "Named and defined in the founding texts of design theory, and a judgement every designer makes on every layout."
      },
      "related": [
        71,
        86,
        87,
        90,
        150
      ]
    },
    {
      "n": 86,
      "title": "Symmetrical balance",
      "aka": [
        "Formal balance",
        "Bilateral symmetry"
      ],
      "oneLine": "Matching or near-matching elements either side of a central axis.",
      demo: {
        caption: "Fold along the centre line and every block meets itself. Formal and calm, with nowhere for the eye to move.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 240 130\"><rect class=\"s-mute\" x=\"1\" y=\"1\" width=\"238\" height=\"128\"/><path class=\"s-mute\" d=\"M120 8 V122\"/><circle class=\"f\" cx=\"120\" cy=\"24\" r=\"6\"/><rect class=\"f\" x=\"50\" y=\"44\" width=\"140\" height=\"12\"/><rect class=\"f-mute\" x=\"76\" y=\"64\" width=\"88\" height=\"6\"/><path class=\"s-mute\" d=\"M84 82 H156\"/><rect class=\"f-mute\" x=\"92\" y=\"96\" width=\"56\" height=\"8\"/></svg></div>"
      },
      "what": "The simplest way to balance a surface is to give both sides the same thing. Dow called symmetry \"the most common and obvious way of satisfying the desire for order\", achieved by placing two equal shapes in exact balance. In practice designers use approximate symmetry more often than exact mirroring: the masses match, the details do not.",
      "why": "Symmetry reads as formal, calm, official and traditional, which is why it turns up on certificates, memorials, wedding stationery and institutional identities. It is also very fast to lay out and hard to get visibly wrong. The cost is energy: a mirrored page has nowhere obvious to move.",
      "how": [
        "Use it when the message is authority, ceremony or neutrality, and when there is genuinely no single most important item.",
        "Centre on the optical centre, slightly above the geometric middle, rather than the exact middle of the height.",
        "Break the symmetry once, deliberately, if you need a focal point; one asymmetric element in a symmetric field becomes the loudest thing on the page.",
        "Check the ragged edges of centred text, because a bad rag ruins the effect symmetry is buying you."
      ],
      "example": "A centred title page: publisher's mark at the top, title on the centre line, author below, everything mirrored about a single vertical axis. The same arrangement appears on most theatre programmes and order-of-service sheets.",
      "numbers": "",
      "pitfall": "Centred type at long line lengths is hard to read because the eye loses the start of each line. Symmetry works for short blocks and falls apart for body copy.",
      "source": "Arthur Wesley Dow, Composition (first published 1899), on Symmetry as one of five principles; quoted from the ninth edition, 1914",
      "verify": {
        "status": "verified",
        "note": "Dow's wording read verbatim from the Project Gutenberg text of Composition (ebook 45410): \"The most common and obvious way of satisfying the desire for order is to place two equal lines or shapes in exact balance.\" Correction to the earlier note on this card: that Gutenberg text is the ninth edition, Doubleday, Page and Company, 1914, not the 1899 first edition. The five principles it lists are opposition, transition, subordination, repetition and symmetry; whether the 1899 first edition used the same wording was not checked."
      },
      "belongs": {
        "verdict": "core",
        "why": "One of the two basic balance strategies and named as a principle in the earliest composition teaching."
      },
      "related": [
        85,
        87,
        132,
        150
      ]
    },
    {
      "n": 87,
      "title": "Asymmetrical balance",
      "aka": [
        "Informal balance",
        "Occult balance"
      ],
      "oneLine": "Balancing unlike elements by weight rather than by mirroring them.",
      demo: {
        caption: "Neither side tips. The left is mirrored, so nothing ranks; the right is weighed off-centre, so the block leads.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Mirrored</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--centre\"><div class=\"db-block\" style=\"width:58%;min-height:60px\"></div></div><div class=\"db-row db-row--centre\"><div class=\"db-bar\" style=\"width:64%\"></div></div><div class=\"db-row db-row--centre\"><div class=\"db-bar db-bar--thin\" style=\"width:40%\"></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Weighed off-centre</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--nowrap\"><div class=\"db-block\" style=\"width:58%;min-height:60px\"></div><div class=\"db-col\" style=\"width:34%\"><div class=\"db-bar\"></div><div class=\"db-bar db-bar--thin\" style=\"width:70%\"></div></div></div></div></div></div>"
      },
      "what": "Here the two halves of the composition contain different things that nonetheless feel equally heavy. A single large photograph on the left can be held by a headline, a caption and a rule stacked on the right. The designer is trading size against tone, colour, texture, complexity and distance from the centre until the eye stops complaining. Lauer and Pentak treat this as the main alternative to symmetry in their chapter on balance.",
      "why": "Asymmetry gives you hierarchy and movement for free, because unequal elements automatically rank themselves. It is the default for editorial layout, most websites and nearly all Swiss-influenced graphic design. It also makes a page look considered rather than defaulted.",
      "how": [
        "Start by placing the heaviest element off centre, then add smaller counterweights until the page settles.",
        "Use empty space as a counterweight; a large quiet area can hold a small busy one.",
        "Push a small dark element further from the centre to buy more balancing force from it.",
        "Keep a strong alignment spine so the asymmetry reads as chosen rather than sloppy."
      ],
      "example": "A standard news site front page: one wide lead image and headline occupying the left two-thirds, with a column of short items, timestamps and small thumbnails down the right. Neither side mirrors the other and neither side wins.",
      "numbers": "",
      "pitfall": "Half-committed asymmetry is the worst outcome. An element nudged slightly off centre looks like a mistake, so move it far enough that the offset is obviously intentional.",
      "source": "David Lauer and Stephen Pentak, Design Basics, chapter 5 (Balance)",
      "verify": {
        "status": "verified",
        "note": "Chapter 5 of Design Basics (9th edition, Cengage, 2016) is confirmed as Balance, and Asymmetrical Balance as one of its named sections, from the published table of contents: Introduction, Imbalance, Symmetrical Balance, Asymmetrical Balance, Radial Balance, Crystallographic Balance. The working account given here is standard studio practice rather than a quotation from the chapter."
      },
      "belongs": {
        "verdict": "core",
        "why": "The working balance strategy behind most contemporary layout, and a distinct skill from symmetry."
      },
      "related": [
        85,
        86,
        92,
        119
      ]
    },
    {
      "n": 88,
      "title": "Radial balance",
      "aka": [
        "Radial symmetry"
      ],
      "oneLine": "Elements arranged around and radiating from a central point.",
      demo: {
        caption: "Turn the page by one tenth and it looks the same. Weight cancels in every direction, and the centre takes the eye.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 220 140\"><circle class=\"f-accent\" cx=\"110\" cy=\"70\" r=\"14\"/><path class=\"s-mute\" d=\"M136 70 L168 70\"/><circle class=\"f\" cx=\"168\" cy=\"70\" r=\"4\"/><path class=\"s-mute\" d=\"M131 85.3 L156.9 104.1\"/><circle class=\"f\" cx=\"156.9\" cy=\"104.1\" r=\"4\"/><path class=\"s-mute\" d=\"M118 94.7 L127.9 125.2\"/><circle class=\"f\" cx=\"127.9\" cy=\"125.2\" r=\"4\"/><path class=\"s-mute\" d=\"M102 94.7 L92.1 125.2\"/><circle class=\"f\" cx=\"92.1\" cy=\"125.2\" r=\"4\"/><path class=\"s-mute\" d=\"M89 85.3 L63.1 104.1\"/><circle class=\"f\" cx=\"63.1\" cy=\"104.1\" r=\"4\"/><path class=\"s-mute\" d=\"M84 70 L52 70\"/><circle class=\"f\" cx=\"52\" cy=\"70\" r=\"4\"/><path class=\"s-mute\" d=\"M89 54.7 L63.1 35.9\"/><circle class=\"f\" cx=\"63.1\" cy=\"35.9\" r=\"4\"/><path class=\"s-mute\" d=\"M102 45.3 L92.1 14.8\"/><circle class=\"f\" cx=\"92.1\" cy=\"14.8\" r=\"4\"/><path class=\"s-mute\" d=\"M118 45.3 L127.9 14.8\"/><circle class=\"f\" cx=\"127.9\" cy=\"14.8\" r=\"4\"/><path class=\"s-mute\" d=\"M131 54.7 L156.9 35.9\"/><circle class=\"f\" cx=\"156.9\" cy=\"35.9\" r=\"4\"/></svg></div>"
      },
      "what": "A special case of symmetry where the axis is a point rather than a line. Everything is distributed around the centre, so the composition balances in every direction at once. Lauer and Pentak give it a named section in their balance chapter, alongside symmetrical, asymmetrical and crystallographic balance. Rotating the design by a fixed angle leaves it looking much the same.",
      "why": "Radial arrangements pull the eye straight to the middle, which makes them useful when the centre holds the meaning. They also read as complete and self-contained, which suits emblems, badges and dials. In interfaces they signal a hub with equal-ranking options around it.",
      "how": [
        "Put the payload at the centre; anything placed there will be read first.",
        "Keep the number of spokes low enough to count at a glance, and space them evenly or the wheel looks buckled.",
        "Set radial type on a true arc rather than rotating each word, or the baseline will wobble.",
        "Do not force a radial menu into a rectangular container; you will waste the corners."
      ],
      "example": "A dartboard: twenty numbered segments radiating from the bullseye, balanced in every direction. The rose window of a Gothic cathedral does the same thing in stone and glass.",
      "numbers": "",
      "pitfall": "Radial layouts on screen are usually worse than a list. Labelling them is awkward and making them responsive is worse, so use them when the geometry carries meaning rather than for decoration.",
      "source": "David Lauer and Stephen Pentak, Design Basics, chapter 5 (Balance)",
      "verify": {
        "status": "verified",
        "note": "Radial Balance is confirmed as a named section of chapter 5 (Balance) from the published table of contents for Design Basics, 9th edition. No wording is quoted from the chapter here, because I have not read the printed page."
      },
      "belongs": {
        "verdict": "core",
        "why": "A named third balance type with its own layout consequences, taught in the standard design-basics curriculum."
      },
      "related": [
        85,
        107,
        461
      ]
    },
    {
      "n": 89,
      "title": "Crystallographic (all-over) balance",
      "aka": [
        "All-over balance",
        "Mosaic balance"
      ],
      "oneLine": "Even visual weight across the whole surface, with no focal point anywhere.",
      demo: {
        caption: "Both fields repeat one square at one interval. On the right four cells carry more weight, and the eye stops there.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Even everywhere</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--centre\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">A cluster forms</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--centre\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span></div></div></div></div></div>"
      },
      "what": "Instead of balancing left against right, you spread emphasis evenly so that wherever the eye lands it finds roughly the same amount of interest. Crystallographic Balance is the fourth of the balance types Lauer and Pentak name, and the one with no focal point in it. Repeating pattern is the usual way to achieve it.",
      "why": "An all-over field reads as texture rather than as a set of things, which is what you want from wallpaper, endpapers, packaging surfaces and background patterns. It also removes hierarchy on purpose, which can be the point when no single item deserves priority.",
      "how": [
        "Design the repeat tile, then check the assembled field for accidental clusters or holes that create unwanted focal points.",
        "Vary the tile's rotation or offset to break up the diagonal lines that emerge in naive repeats.",
        "Keep contrast low if the pattern sits behind content, or the field will start competing.",
        "Test at the real size, because a pattern that reads as texture on screen can read as motif at print scale."
      ],
      "example": "A chessboard: sixty-four squares of equal weight, no square more important than another. William Morris's repeating wallpapers do the same with far more incident.",
      "numbers": "",
      "pitfall": "Used behind text it is death. An all-over pattern with no rest area gives the eye nowhere to settle, and body copy laid over it becomes unreadable.",
      "source": "David Lauer and Stephen Pentak, Design Basics, chapter 5 (Balance)",
      "verify": {
        "status": "verified",
        "note": "Crystallographic Balance is confirmed as a named section of chapter 5 (Balance) from the published table of contents for Design Basics, 9th edition. The term is specific to this teaching tradition rather than universal, so expect blank looks if you use it with a client."
      },
      "belongs": {
        "verdict": "core",
        "why": "A narrow but real balance category, and the correct name for what surface pattern and textile design do."
      },
      "related": [
        61,
        85,
        104,
        460
      ]
    },
    {
      "n": 90,
      "title": "Equilibrium",
      "aka": [
        "Perceptual equilibrium"
      ],
      "oneLine": "The settled state a viewer perceives when opposing visual forces cancel out.",
      demo: { none: "Equilibrium is the state the balance demo at 85 already shows, so any picture here would be that picture again under a second name." },
      "what": "Equilibrium is the felt result of balance rather than a separate lever. Ross's 1907 definition of balance already contains it: an equal opposition and consequent equilibrium that suspends, for the moment, all sense of change or movement. Arnheim's later account describes the same thing as a distribution of perceptual forces that compensate one another. Every instruction you could write under equilibrium is already an instruction about balance.",
      "why": "The idea is worth understanding because it explains why balance cannot be calculated. What is being balanced is a set of perceived pulls in the viewer's head, not physical mass, so the only reliable instrument is your own eye and someone else's.",
      "how": [
        "Treat equilibrium as the test, not the technique: look at the finished layout and ask whether it has stopped moving.",
        "Get a second pair of eyes, because you go blind to imbalance in work you have stared at.",
        "Use entry 85 for the actual working method."
      ],
      "example": "A poster where a heavy black headline sits top left and a small bright red dot sits low right. Nothing matches, yet the pulls cancel and the sheet stops swaying.",
      "numbers": "",
      "pitfall": "Treating equilibrium as a fourth balance type alongside symmetrical, asymmetrical and radial. It is the state all three are aiming at, so listing it beside them double-counts one idea.",
      "source": "Denman W. Ross, A Theory of Pure Design (Houghton, Mifflin, 1907); Rudolf Arnheim, Art and Visual Perception (University of California Press, 1954)",
      "verify": {
        "status": "adjusted",
        "note": "Ross's definition read verbatim from the Project Gutenberg text of A Theory of Pure Design (ebook 74765): \"By the Order of Balance I mean some equal opposition and consequent equilibrium ... an equilibrium which induces, for the moment and in its place, a suspension of all change or movement.\" The master list treats balance and equilibrium as two items; the primary source treats them as one, and I have said so here rather than inventing a distinction."
      },
      "belongs": {
        "verdict": "cut",
        "why": "It restates entry 85 in different words, and the source that names both defines one in terms of the other. Keep Balance (85) and Visual weight (71) and drop this card."
      },
      "related": [
        71,
        85,
        91
      ]
    },
    {
      "n": 91,
      "title": "Tension",
      "aka": [
        "Visual tension",
        "Dynamic imbalance"
      ],
      "oneLine": "Deliberate imbalance or near-collision that keeps a composition energised.",
      demo: {
        caption: "One block, one frame, two positions. Crowded against the top and right edges, the gap left over will not stop pulling.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Resting</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"1\" y=\"1\" width=\"198\" height=\"118\"/><rect class=\"f\" x=\"58\" y=\"34\" width=\"84\" height=\"52\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Under tension</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"1\" y=\"1\" width=\"198\" height=\"118\"/><rect class=\"f\" x=\"112\" y=\"6\" width=\"84\" height=\"52\"/></svg></div></div></div>"
      },
      "what": "Tension is what you get when you stop just short of resolution. An element crowded against an edge, two shapes almost touching, a headline pushed hard into a corner: each sets up a pull the eye wants to correct and cannot. Arnheim's account of perception treats the picture field as a landscape of forces, so an element placed off the structural lines reads as strained rather than settled. The forces are felt, not measured.",
      "why": "Balance alone can produce something inert. Tension buys energy, urgency and a feeling of the moment before something happens, which is why fashion, music and sports work uses it constantly. It also creates emphasis without shouting, because the strained element becomes the thing you keep looking at.",
      "how": [
        "Push an element much closer to an edge than feels comfortable, then stop before it looks like a printing error.",
        "Set a small gap between two large masses so the space itself becomes charged.",
        "Crop a subject so part of it leaves the frame; the missing part pulls.",
        "Use tension once per composition, then keep everything else calm, or the page just reads as chaos."
      ],
      "example": "A magazine cover where the cover line runs right into the trim edge and the subject's shoulder is cropped by the frame. Nothing is centred, and the page will not sit still.",
      "numbers": "",
      "pitfall": "Tension and error look identical to a client. If you are deliberately crowding an edge, make it obviously deliberate by repeating the move elsewhere, or you will be asked to fix it.",
      "source": "Rudolf Arnheim, Art and Visual Perception: A Psychology of the Creative Eye (University of California Press, Berkeley, 1954); no single originator for the term",
      "verify": {
        "status": "unverified",
        "note": "The book is confirmed as University of California Press, Berkeley, 1954, from first-edition bookseller records, with a revised and expanded edition in 1974; the earlier note on this card was wrong to doubt the 1954 date. What remains unverified is tension itself: I could not trace it to a named originator or to a definition in Arnheim, so the account here is standard studio usage, and the description of the picture field as a field of forces is a summary of Arnheim's approach rather than a quotation."
      },
      "belongs": {
        "verdict": "core",
        "why": "A real and widely used compositional lever, and the counterweight to the idea that balance is the only goal."
      },
      "related": [
        85,
        108,
        133,
        147
      ]
    },
    {
      "n": 92,
      "title": "Dominance",
      "aka": [
        "Dominant element"
      ],
      "oneLine": "One element governs the composition and sets the character of everything else.",
      demo: {
        caption: "Left, the two masses are close enough to read as a tie. Right, the gap is wide enough for one to lead.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Two contenders</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--bottom db-row--nowrap\"><div class=\"db-block\" style=\"width:44%;min-height:64px\"></div><div class=\"db-block\" style=\"width:40%;min-height:56px\"></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One governs</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--bottom db-row--nowrap\"><div class=\"db-block\" style=\"width:60%;min-height:78px\"></div><div class=\"db-block\" style=\"width:24%;min-height:26px\"></div></div></div></div></div>"
      },
      "what": "Dominance is the relational version of emphasis. Dow put it plainly under his principle of subordination: to form a complete group, the parts are attached or related to a single dominating element which determines the character of the whole. The point is the second half of that sentence: the loud thing dictates how the quiet things behave.",
      "why": "A composition with a clear dominant reads instantly, because the viewer knows what kind of thing they are looking at before they read a word. It also makes every later decision easier, since the dominant element sets the scale, tone and colour that the rest must defer to.",
      "how": [
        "Decide the dominant before you lay anything out, and write it down in one sentence.",
        "Make the gap between the dominant and the next element unmistakable; a small margin of superiority reads as a tie.",
        "Let the dominant set the palette and the type scale, then derive the rest from it.",
        "If two elements are both trying to dominate, demote one on purpose rather than shrinking both."
      ],
      "example": "A film poster where the title occupies a third of the sheet and everything else, including the cast list and the release date, is set in the same family at a fraction of the size.",
      "numbers": "",
      "pitfall": "Dominance is often confused with size alone. A small, saturated, isolated element can dominate a page full of large grey ones, so weigh contrast and position, not just dimensions.",
      "source": "Arthur Wesley Dow, Composition (first published 1899), under Subordination; quoted from the ninth edition, 1914",
      "verify": {
        "status": "verified",
        "note": "Dow's sentence read verbatim from the Project Gutenberg text of Composition (ebook 45410), which is the ninth edition of 1914 rather than the 1899 first edition: \"To form a complete group the parts are attached or related to a single dominating element which determines the character of the whole.\" Be aware that this card and 95 rest on that same one sentence, which Dow files under Subordination and not under any principle called dominance; 93 covers the technique and 94 the result."
      },
      "belongs": {
        "verdict": "core",
        "why": "The relational half of the idea, and the half that carries a working instruction: the dominant element sets the treatment of everything around it. It shares its only primary source with 95, so read the two together."
      },
      "related": [
        93,
        94,
        95,
        96
      ]
    },
    {
      "n": 93,
      "title": "Emphasis",
      "aka": [
        "Accent"
      ],
      "oneLine": "Making one element stand out so the viewer's attention lands where you intend.",
      demo: {
        caption: "Same twelve dots both sides. One is darkened, one is left alone, and both step forward without anything else changing.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">By contrast</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--tight\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">By isolation</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></span><span class=\"db-dot db-dot--mute\"></span></div></div></div></div>"
      },
      "what": "Emphasis is the set of techniques for raising one element above its neighbours. Lauer and Pentak gather them in a section called Ways to Achieve Emphasis, then deal separately with how much emphasis to apply. The techniques usually taught are contrast, which makes the element different in size, tone, colour or weight; isolation, which gives it space that nothing else has; and placement, which puts it where the eye already goes.",
      "why": "Without emphasis a layout has no entry point and the reader has to do the sorting themselves, which most will not bother to do. With it, you decide the order in which the content is discovered. Emphasis is the difference between a page that communicates and a page that merely contains.",
      "how": [
        "Emphasise by taking away, not adding: shrink and grey the supporting elements rather than enlarging the star.",
        "Pick one emphasis technique per element; contrast plus isolation plus colour plus a box is four times too much.",
        "Reserve your loudest colour for a single job across the whole product, and never spend it on decoration.",
        "Count your emphasised items; if there is more than one per screen or spread, you have none."
      ],
      "example": "A newspaper front page: one photograph and one headline are set several times larger than anything else, so the lead story is identified before a word is read.",
      "numbers": "",
      "pitfall": "Emphasis inflation. Every stakeholder wants their section highlighted, and the result is a page of competing loud elements where nothing is prominent. Say no in the design, not in the meeting.",
      "source": "David Lauer and Stephen Pentak, Design Basics, chapter 3 (Emphasis and Focal Point)",
      "verify": {
        "status": "adjusted",
        "note": "Correction to the earlier note on this card. The published table of contents for Design Basics 9th edition (ISBN 9781285858227) gives chapter 3 as Emphasis and Focal Point with the sections Introduction, Ways to Achieve Emphasis, Degree of Emphasis and Absence of Focal Point. There are no sections titled Emphasis by Contrast, Emphasis by Isolation or Emphasis by Placement, so that trio is not quoted here as the book's own headings. Contrast, isolation and placement remain the three routes taught almost everywhere, including in this chapter's body, which I have not read."
      },
      "belongs": {
        "verdict": "core",
        "why": "A named chapter-level principle in the standard textbook and the main tool for controlling reading order."
      },
      "related": [
        92,
        94,
        97,
        149
      ]
    },
    {
      "n": 94,
      "title": "Focal point",
      "aka": [
        "Centre of interest"
      ],
      "oneLine": "The single place the eye goes first and keeps returning to.",
      demo: {
        caption: "Three valid choices: one place to look, a leader with two followers, or nothing ranked at all.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 100\"><rect class=\"s-mute\" x=\"1\" y=\"1\" width=\"100\" height=\"70\"/><circle class=\"f-mute\" cx=\"20\" cy=\"22\" r=\"4\"/><circle class=\"f-mute\" cx=\"44\" cy=\"54\" r=\"4\"/><circle class=\"f-mute\" cx=\"74\" cy=\"18\" r=\"4\"/><circle class=\"f-mute\" cx=\"86\" cy=\"52\" r=\"4\"/><circle class=\"f-mute\" cx=\"28\" cy=\"42\" r=\"4\"/><circle class=\"f\" cx=\"58\" cy=\"34\" r=\"13\"/><rect class=\"s-mute\" x=\"115\" y=\"1\" width=\"100\" height=\"70\"/><circle class=\"f\" cx=\"150\" cy=\"30\" r=\"12\"/><circle class=\"f-mute\" cx=\"192\" cy=\"22\" r=\"7\"/><circle class=\"f-mute\" cx=\"178\" cy=\"56\" r=\"7\"/><circle class=\"f-mute\" cx=\"128\" cy=\"58\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"206\" cy=\"52\" r=\"3.5\"/><rect class=\"s-mute\" x=\"229\" y=\"1\" width=\"100\" height=\"70\"/><circle class=\"f\" cx=\"252\" cy=\"22\" r=\"8\"/><circle class=\"f\" cx=\"288\" cy=\"18\" r=\"8\"/><circle class=\"f\" cx=\"316\" cy=\"40\" r=\"8\"/><circle class=\"f\" cx=\"262\" cy=\"56\" r=\"8\"/><circle class=\"f\" cx=\"300\" cy=\"58\" r=\"8\"/><text class=\"t\" x=\"1\" y=\"90\">one place</text><text class=\"t\" x=\"115\" y=\"90\">one, then two</text><text class=\"t\" x=\"229\" y=\"90\">nothing ranked</text></svg></div>"
      },
      "what": "The focal point is the result that emphasis produces. Lauer and Pentak pair the two in one chapter, and they close it with a section on the absence of a focal point, which they treat as a legitimate option rather than a failure. A composition can have one strong focal point, a primary with secondaries, or none at all, and each is a valid choice as long as it is a choice.",
      "why": "Readers give a page a fraction of a second before deciding whether to continue. A clear focal point spends that fraction on the thing you most want understood. It also gives the eye a home to return to as it works through the rest of the content.",
      "how": [
        "Nominate the focal point before you open the design tool, and check the finished layout against that nomination.",
        "Test by looking away and glancing back; whatever you see first is your actual focal point, whatever you intended.",
        "Give the focal point clear space around it, since crowding kills prominence faster than small size does.",
        "If the design genuinely has no single most important item, commit to no focal point rather than producing several weak ones."
      ],
      "example": "A passport-style portrait: the eyes sit near the upper third, the background is plain, and nothing else in the frame competes. You look at the eyes first every time.",
      "numbers": "",
      "pitfall": "Hero images with a busy background become their own focal point and swallow the headline sitting on top of them. Darken, blur or crop the image, or move the text off it.",
      "source": "David Lauer and Stephen Pentak, Design Basics, chapter 3 (Emphasis and Focal Point)",
      "verify": {
        "status": "verified",
        "note": "Chapter 3 is confirmed as Emphasis and Focal Point, with a closing section titled Absence of Focal Point, from the published table of contents for Design Basics 9th edition. The earlier note on this card gave that heading a subtitle it does not carry, so the subtitle has gone. Worth flagging for section 4: some popular lists file focal point among the Gestalt laws, as the master list does at 166, but it is not one of the classical grouping laws."
      },
      "belongs": {
        "verdict": "core",
        "why": "The named outcome of emphasis and the thing a designer is judged on in the first second of viewing."
      },
      "related": [
        92,
        93,
        140,
        149,
        166
      ]
    },
    {
      "n": 95,
      "title": "Subordination",
      "aka": [
        "Supporting elements"
      ],
      "oneLine": "Deliberately quietening everything that is not the main element.",
      demo: {
        caption: "The top bar is the same in both. Nothing was added to it; the three below were simply made quieter.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Cast at full volume</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-bar db-bar--ink db-bar--tall\" style=\"width:88%\"></div><div class=\"db-bar db-bar--ink\"></div><div class=\"db-bar db-bar--ink\" style=\"width:82%\"></div><div class=\"db-bar db-bar--ink\" style=\"width:64%\"></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Cast demoted</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-bar db-bar--ink db-bar--tall\" style=\"width:88%\"></div><div class=\"db-bar\"></div><div class=\"db-bar\" style=\"width:82%\"></div><div class=\"db-bar\" style=\"width:64%\"></div></div></div></div></div>"
      },
      "what": "Subordination is the other half of dominance, and Dow named it as the third of his five principles of composition: to form a complete group the parts are attached or related to a single dominating element which determines the character of the whole. His own image for it is a tree trunk with its branches, down to the veining of the leaves. In practice it means demoting captions, legal text, secondary navigation, credits and metadata so they support rather than compete. It is a subtractive skill.",
      "why": "Most layouts fail because everything shouts, not because the main element is too quiet. Subordinating the supporting cast raises the star without touching it, which is usually cheaper and always calmer. It also tells the reader what they may safely skip.",
      "how": [
        "Reduce weight before reducing size; a lighter grey at the same size is often enough.",
        "Give secondary items a single, consistent treatment so they read as a class rather than as individual decisions.",
        "Do the demotion pass last, after everything is on the page, and be ruthless.",
        "Keep subordinated text above the accessible contrast floor; quiet is not the same as illegible."
      ],
      "example": "A book cover where the author's name is set at a third the size of the title in the same typeface. On a debut it stays small; on a best-selling author it grows and the two swap roles.",
      "numbers": "WCAG 2.2 success criterion 1.4.3 sets 4.5:1 as the minimum contrast for normal-size text, which is the floor subordinated text must not cross.",
      "pitfall": "Subordination gets pushed too far on legal and accessibility-relevant text. Pale grey small print may satisfy the layout and fail both the reader and the regulator.",
      "source": "Arthur Wesley Dow, Composition (first published 1899), on Subordination; quoted from the ninth edition, 1914; WCAG 2.2, W3C",
      "verify": {
        "status": "verified",
        "note": "Dow's definition of subordination and his tree-trunk image read verbatim from the Project Gutenberg text of Composition (ebook 45410), which is the ninth edition of 1914 rather than the 1899 first edition. The 4.5:1 figure is quoted from WCAG 2.2 success criterion 1.4.3, a published W3C standard, not from a measurement made here."
      },
      "belongs": {
        "verdict": "core",
        "why": "Named in the founding composition text, and it describes a distinct working move that emphasis does not cover."
      },
      "related": [
        92,
        93,
        96,
        1014
      ]
    },
    {
      "n": 96,
      "title": "Hierarchy",
      "aka": [
        "Visual hierarchy"
      ],
      "oneLine": "Ranking elements by importance so the reading order is obvious without instruction.",
      demo: {
        caption: "Both blocks hold a heading and a paragraph. On the left the step is one pixel, so the rank never registers.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">16 px over 15 px</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\"><p style=\"font-size:16px\">Delivery options</p><p style=\"font-size:15px\">Standard delivery arrives in three to five working days.</p></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">24 px bold over 15 px</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\"><p style=\"font-size:24px;font-weight:600\">Delivery options</p><p style=\"font-size:15px\">Standard delivery arrives in three to five working days.</p></div></div></div></div>"
      },
      "what": "Hierarchy is emphasis applied to a whole set rather than to one element. You decide the levels first, then give each level a consistent treatment in size, weight, colour, position and space. Three or four levels is usually the limit before the distinctions stop being visible. Dow's subordination is the nearest documented ancestor of the idea, though the modern term has no single originator I could trace.",
      "why": "A reader with no hierarchy has to read everything to find out what matters, and will instead leave. A clear hierarchy lets them skim, decide, and start reading at the right point. It is the single highest-return fix on almost any bad layout.",
      "how": [
        "Write the content out as an indented list before designing; if you cannot rank it in words, you cannot rank it visually.",
        "Make each level differ by at least two attributes, for example size and weight, so the step is unmissable.",
        "Use no more than three or four levels on one page, and use the same treatment for the same level everywhere.",
        "Check the hierarchy at thumbnail size, where only the real differences survive."
      ],
      "example": "A UK motorway direction sign: place names largest, route numbers in coloured patches, distances to the right in smaller figures. You take the ranking in at seventy miles an hour.",
      "numbers": "",
      "pitfall": "Levels that are too close together. A 16px heading over 15px body text reads as a printing accident rather than as a rank. Make the jump obvious or do not make it at all.",
      "source": "Origin unclear as a named principle; Arthur Wesley Dow's Subordination is the nearest documented ancestor",
      "verify": {
        "status": "unverified",
        "note": "I could not trace visual hierarchy to a single originating author or text. Dow's subordination principle was read verbatim from the Project Gutenberg text of Composition (ninth edition, 1914) and is cited here as an ancestor rather than as the source of the modern term. The three-or-four-levels ceiling is common studio guidance with no study behind it that I could find, so treat it as a rule of thumb."
      },
      "belongs": {
        "verdict": "core",
        "why": "The organising principle behind typography, interface design and information design, whatever its murky origin."
      },
      "related": [
        92,
        93,
        95,
        343,
        1048
      ]
    },
    {
      "n": 97,
      "title": "Contrast",
      "aka": [
        "Opposition"
      ],
      "oneLine": "Making two things clearly different so the difference itself carries meaning.",
      demo: {
        caption: "The same words on the same ground. WCAG 2.2 asks 4.5:1 of body text, and only the right-hand chip clears it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">2.26 : 1</span><div class=\"db-stage db-stage--tight\"><div class=\"db-chip-text\" style=\"background:#e8e3d8;color:#7a9bbd\">Free returns within 30 days</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">7.18 : 1</span><div class=\"db-stage db-stage--tight\"><div class=\"db-chip-text\" style=\"background:#e8e3d8;color:#2c4a68\">Free returns within 30 days</div></div></div></div>"
      },
      "what": "Contrast is difference put to work: large against small, dark against light, dense against open, serif against sans, warm against cool. Wong gives it a chapter of its own. Dow's first principle, opposition, is a narrower ancestor rather than the same idea, since he means two lines meeting in opposing directions rather than difference in general. Robin Williams made contrast the first of her four principles and gave the working rule: if two things are not the same, make them very different. Christopher Alexander's contrast at 921 is the same word doing a heavier job, claiming that difference is what lets a part separate from its ground and become a thing at all; this entry is the working composition rule.",
      "why": "Contrast creates emphasis, hierarchy and legibility all at once, and it is the mechanism most other composition principles run on. Weak contrast is the most common reason a layout looks amateur, because near-misses read as indecision.",
      "how": [
        "When two elements differ, exaggerate the difference until it is unmistakable at a glance.",
        "Contrast on more than one axis at a time for the same element: bigger and bolder and darker.",
        "Measure text and interface contrast rather than judging it, especially on brand colours that look fine on your calibrated screen.",
        "Keep a low-contrast register for supporting material so the high-contrast register stays meaningful."
      ],
      "example": "GOV.UK pages: near-black text on white, one bright green action button, and almost nothing else in colour. The contrast budget is spent entirely on legibility and the next step.",
      "numbers": "WCAG 2.2 sets 4.5:1 minimum contrast for normal text and 3:1 for large text (success criterion 1.4.3), and 3:1 for user interface components and meaningful graphics (1.4.11).",
      "pitfall": "Brand palettes with two mid-tone colours next to each other. They pass the mood board and fail the contrast checker, and no amount of arguing changes the ratio.",
      "source": "Wucius Wong, Principles of Two-Dimensional Design (1972); Robin Williams, The Non-Designer's Design Book (Peachpit Press, 1994); WCAG 2.2, W3C",
      "verify": {
        "status": "verified",
        "note": "Contrast confirmed as a chapter of Wong's Principles of Two-Dimensional Design from the published contents listing, and as one of Williams's four principles (proximity, alignment, repetition, contrast) from Peachpit's own 1994 listing. Dow's opposition read from the Project Gutenberg text of Composition, where it means two lines meeting, which is why this card now calls it an ancestor rather than the same idea. Ratios quoted from WCAG 2.2 success criteria, a published W3C standard. The pointer to Alexander's contrast property was added when this card was cross-linked with 921; that claim is sourced there to The Nature of Order, Book One."
      },
      "belongs": {
        "verdict": "core",
        "why": "A named principle in every major composition text and the mechanism behind hierarchy, emphasis and legibility."
      },
      "related": [
        93,
        96,
        115,
        921,
        1014,
        1015
      ]
    },
    {
      "n": 98,
      "title": "Proportion",
      "aka": [
        "Ratio"
      ],
      "oneLine": "The size relationship between parts and between each part and the whole.",
      demo: {
        caption: "Fold each sheet in half and stand the half upright. Only on the left does its corner land on the diagonal.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">1 : 1.414, the A series</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 120 116\"><rect class=\"s\" x=\"8\" y=\"8\" width=\"70\" height=\"99\"/><path class=\"s-mute\" d=\"M8 8 L78 107\"/><path class=\"s-mute\" d=\"M8 57.5 H78\"/><rect class=\"s-accent\" x=\"8\" y=\"8\" width=\"49.5\" height=\"70\"/><circle class=\"f-accent\" cx=\"57.5\" cy=\"78\" r=\"3\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">2 : 3</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 120 116\"><rect class=\"s\" x=\"8\" y=\"8\" width=\"66\" height=\"99\"/><path class=\"s-mute\" d=\"M8 8 L74 107\"/><path class=\"s-mute\" d=\"M8 57.5 H74\"/><rect class=\"s-accent\" x=\"8\" y=\"8\" width=\"49.5\" height=\"66\"/><circle class=\"f-accent\" cx=\"57.5\" cy=\"74\" r=\"3\"/></svg></div></div></div>"
      },
      "what": "Proportion is about ratios rather than absolute sizes. It governs the shape of a page, the relationship between a margin and a text block, the steps in a type scale and the relative area given to an image against its caption. Some proportional systems are genuinely useful because they repeat: the ISO 216 paper series uses a ratio of the square root of two, so an A4 sheet halved gives two A5 sheets of exactly the same shape.",
      "why": "Consistent ratios make a set of pages look related without anyone being able to say why. They also remove a whole class of arbitrary decisions, since once the ratio is fixed the sizes follow. That saves argument and speeds the work up.",
      "how": [
        "Pick one ratio for the project and derive type sizes, spacing and image crops from it.",
        "Prefer a ratio that survives halving or doubling if the work has to work at several sizes.",
        "Judge the result by eye afterwards and adjust; optical correctness beats arithmetic correctness.",
        "Do not claim a mystical ratio to a client unless you can source it, because the claims are usually false."
      ],
      "example": "A4 paper at 210 by 297 millimetres. Fold it in half and you get A5 at 148 by 210, the same shape again, which is why the whole European stationery system holds together.",
      "numbers": "ISO 216 uses a 1:root-2 ratio, roughly 1:1.414; A4 is 210 x 297 mm and A3 is 297 x 420 mm. The golden ratio is 1.618 to three decimal places.",
      "pitfall": "Golden-ratio folklore. George Markowsky's 1992 paper in The College Mathematics Journal shows that much of what is claimed about the golden ratio in art and architecture, including the Parthenon story, is false or unmeasurable. Use the ratio if you like the results; do not sell it as ancient science.",
      "source": "ISO 216; George Markowsky, Misconceptions about the Golden Ratio, The College Mathematics Journal 23(1), January 1992, pp. 2-19",
      "verify": {
        "status": "verified",
        "note": "A4, A3 and A5 dimensions, the root-2 ratio and the standard's adoption in 1975 checked against the ISO 216 reference. Markowsky's journal, volume, issue, pages and date confirmed against the JSTOR issue listing and the publisher record. His Parthenon section was read in the paper itself and says of the usual diagram: \"None of these authors is bothered by the fact that parts of the Parthenon are outside the golden rectangle.\""
      },
      "belongs": {
        "verdict": "core",
        "why": "Proportional judgement runs through page shape, type scales and image sizing, and it is where most golden-ratio nonsense enters a studio."
      },
      "related": [
        99,
        448,
        449,
        455,
        1024
      ]
    },
    {
      "n": 99,
      "title": "Scale relationships",
      "aka": [
        "Relative scale"
      ],
      "oneLine": "How big things read next to each other and next to something the viewer already knows.",
      demo: {
        caption: "The grey mass is identical in both. Only the figure changes, and with it whether you read a tower or a shed.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Small figure</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 110\"><path class=\"s-mute\" d=\"M6 100 H194\"/><rect class=\"f-mute\" x=\"34\" y=\"20\" width=\"70\" height=\"80\"/><circle class=\"f\" cx=\"130\" cy=\"88.5\" r=\"2.5\"/><path class=\"s\" d=\"M130 91 V95.5 M126.5 100 L130 95.5 L133.5 100 M126.5 92.5 H133.5\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Tall figure</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 110\"><path class=\"s-mute\" d=\"M6 100 H194\"/><rect class=\"f-mute\" x=\"34\" y=\"20\" width=\"70\" height=\"80\"/><circle class=\"f\" cx=\"145\" cy=\"45\" r=\"5\"/><path class=\"s\" d=\"M145 50 V76 M136 100 L145 76 L154 100 M136 58 H154\"/></svg></div></div></div>"
      },
      "what": "Scale is the perceived size of an element relative to its neighbours, to the frame and to a real-world reference. Lauer and Pentak treat scale and proportion together in one chapter, because the two questions are linked: how big is this compared with that, and how big is that compared with everything. A photograph of an object with no reference in the frame has no scale at all.",
      "why": "Scale is how you tell the viewer what matters and how you make a flat surface feel like it has depth and drama. A big jump in scale between two elements creates energy; a small jump creates hierarchy; no jump creates a list. Scale is also where a design gains or loses physical credibility.",
      "how": [
        "Include a known reference in product photography, such as a hand or a familiar object, so viewers can size the thing.",
        "Exaggerate scale jumps rather than nudging them, because small differences read as inconsistency.",
        "Check the design at real output size, not at whatever zoom level you happen to be working at.",
        "Watch scale on responsive layouts, where an image that dominates a desktop page becomes a stamp on a phone."
      ],
      "example": "Architects' visualisations always include human figures. Remove them and you cannot tell whether the building is a bus shelter or a terminal.",
      "numbers": "",
      "pitfall": "Designing at 50 per cent zoom on a large monitor. Everything looks in proportion until it prints or ships, and then the type is unreadable and the images are enormous.",
      "source": "David Lauer and Stephen Pentak, Design Basics, chapter 4 (Scale and Proportion)",
      "verify": {
        "status": "verified",
        "note": "Chapter 4 confirmed as Scale and Proportion from the published table of contents for Design Basics 9th edition, with the sections Scale of Art, Scale within Art, Manipulating Scale and Proportion, which is what justifies the claim that the two are treated together."
      },
      "belongs": {
        "verdict": "core",
        "why": "A distinct judgement from proportion, and the one that governs drama, credibility and responsive behaviour."
      },
      "related": [
        98,
        129,
        463,
        465
      ]
    },
    {
      "n": 100,
      "title": "Rhythm",
      "aka": [
        "Visual rhythm"
      ],
      "oneLine": "Repeated elements and intervals that create a sense of movement across a composition.",
      demo: {
        caption: "Same blocks both sides. The right-hand column uses only two gap values, and the page picks up a beat.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Gaps chosen by dragging</span><div class=\"db-stage db-stage--tight\"><div class=\"db-bar db-bar--ink\" style=\"width:54%\"></div><div class=\"db-lines\" style=\"margin-top:3px\"><i></i><i></i><i></i></div><div class=\"db-bar db-bar--ink\" style=\"width:46%;margin-top:28px\"></div><div class=\"db-lines\" style=\"margin-top:14px\"><i></i><i></i><i></i></div><div class=\"db-bar db-bar--ink\" style=\"width:50%;margin-top:6px\"></div><div class=\"db-lines\" style=\"margin-top:17px\"><i></i><i></i><i></i></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Two gap values</span><div class=\"db-stage db-stage--tight\"><div class=\"db-bar db-bar--ink\" style=\"width:54%\"></div><div class=\"db-lines\" style=\"margin-top:8px\"><i></i><i></i><i></i></div><div class=\"db-bar db-bar--ink\" style=\"width:46%;margin-top:20px\"></div><div class=\"db-lines\" style=\"margin-top:8px\"><i></i><i></i><i></i></div><div class=\"db-bar db-bar--ink\" style=\"width:50%;margin-top:20px\"></div><div class=\"db-lines\" style=\"margin-top:8px\"><i></i><i></i><i></i></div></div></div></div>"
      },
      "what": "Rhythm is pattern in time, borrowed by design and applied to space. Ross defined it in 1907 as changes of sensation that induce the feeling of movement, provided the changes take place at regular and marked intervals. In a layout the beats are the elements and the intervals are the gaps between them, and the gaps do at least as much work as the elements.",
      "why": "Rhythm makes a long piece of content navigable, because the eye learns the pattern and can then predict where the next thing will be. It also gives a page a tempo, which is a real part of tone: tight even intervals feel businesslike, loose uneven ones feel relaxed.",
      "how": [
        "Design the intervals as deliberately as the elements; a spacing scale is a rhythm section.",
        "Establish the pattern early with at least three beats; Ross set the same floor, saying three repetitions as a rule, because one repetition shows only a single interval and leaves the reader guessing what comes next.",
        "Break the rhythm on purpose at section boundaries so the break carries meaning.",
        "Read a long page by scrolling fast; a broken rhythm shows up as a stutter."
      ],
      "example": "A well-set long article: every paragraph separated by the same space, every subheading preceded by a larger space, every pull quote breaking the pattern at the same interval. You feel the beat even though nothing is decorated.",
      "numbers": "",
      "pitfall": "Arbitrary spacing. Nine different gap values chosen by dragging in a design tool produce no rhythm at all, and the page reads as noisy without anyone being able to say why.",
      "source": "Denman W. Ross, A Theory of Pure Design: Harmony, Balance, Rhythm (1907)",
      "verify": {
        "status": "verified",
        "note": "Ross's definition of rhythm read verbatim from the Project Gutenberg text of A Theory of Pure Design (ebook 74765), where rhythm is one of his three modes of order alongside harmony and balance. The three-beat rule is his too: \"It is a question of some interest to decide how many repetitions are required in a Rhythm. In answer to this question I should say three as a rule.\""
      },
      "belongs": {
        "verdict": "core",
        "why": "Named in the founding text of American design theory and directly responsible for how a long layout feels to move through."
      },
      "related": [
        101,
        103,
        104,
        105,
        1017
      ]
    },
    {
      "n": 101,
      "title": "Regular rhythm",
      "aka": [
        "Even rhythm"
      ],
      "oneLine": "The same element repeated at the same interval, like bricks in a wall.",
      demo: {
        caption: "Same content both sides. Fixing one row height on the right gives the eye a landing point it can predict.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Rows sized to content</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One fixed row height</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\" style=\"height:58px\"><div class=\"db-lines\"><i></i></div></div><div class=\"db-card\" style=\"height:58px\"><div class=\"db-lines\"><i></i><i></i><i></i></div></div><div class=\"db-card\" style=\"height:58px\"><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div>"
      },
      "what": "The plainest rhythm: identical or near-identical elements, identical gaps. Ross's condition of regular and marked intervals is met exactly. In layout terms this is a grid of equal cards, a run of equal columns, a list with a fixed row height, or a repeated architectural bay.",
      "why": "Regularity reads as order, calm and reliability, and it makes content genuinely easier to scan because the eye can predict the next landing point. It is also the cheapest rhythm to build and maintain, since one rule covers every instance.",
      "how": [
        "Fix one row height or card size and hold it, even when the content varies in length.",
        "Truncate or expand content to protect the rhythm rather than letting each item find its own size.",
        "Use regular rhythm for lists, catalogues and tables, where predictability beats interest.",
        "Introduce one irregular element only when you want it noticed."
      ],
      "example": "A Georgian terrace: the same window at the same spacing along the whole street. The variation is in the doors, which is exactly why you notice the doors.",
      "numbers": "",
      "pitfall": "Regular rhythm over a long scroll becomes monotonous, and readers stop seeing individual items. Interrupt it every few screens with a change of module.",
      "source": "Origin unclear as a named term; consistent with Denman W. Ross's definition of rhythm (1907)",
      "verify": {
        "status": "unverified",
        "note": "Regular rhythm is standard art-education vocabulary but I could not trace it to a named author or text. It is not one of Lauer and Pentak's headings either: their rhythm chapter names alternating rhythm, progressive rhythm and polyrhythmic structures. Ross's 1907 definition of rhythm, read verbatim from the Project Gutenberg text, describes the same condition of regular and marked intervals, so the idea is sourced even though the label is not."
      },
      "belongs": {
        "verdict": "core",
        "why": "The label is a convenience term with no traceable author, but the thing it names is sourced to Ross's condition of regular intervals and maps directly onto grids, lists and repeating modules. That is what separates it from flowing rhythm at 102, which was cut."
      },
      "related": [
        100,
        104,
        105,
        131
      ]
    },
    {
      "n": 102,
      "title": "Flowing rhythm",
      "aka": [
        "Organic rhythm"
      ],
      "oneLine": "Curved or irregular repetition said to suggest natural, wave-like movement.",
      demo: { none: "The entry's point is that the category has no traceable definition, and drawing a wave here would hand it a precision the sources do not support." },
      "what": "Flowing rhythm appears in art-classroom lists of rhythm types, usually described as repetition through wavy lines or fluid forms of unequal size, in contrast to the even beat of regular rhythm. The category is taught widely, particularly in interior design courses, but I could not find an author, book or paper that originates it or defines it precisely.",
      "why": "The observation behind it is real: curves and uneven intervals do read as softer and less mechanical than a strict grid. But the same observation is already covered, and better sourced, by gradation and by progressive rhythm, both of which give you an actual instruction.",
      "how": [
        "If you want the effect, use gradation (106) or progressive rhythm (103), which have traceable definitions and clearer rules.",
        "Where curves are the point, treat them as a repeated form and control the interval, not the vibe."
      ],
      "example": "A described situation rather than a sourced one: a set of illustrated section dividers whose curves repeat at uneven intervals down a long page, so the page feels less mechanical than a ruled break would.",
      "numbers": "",
      "pitfall": "Presenting flowing rhythm to a client as an established principle. If you are asked where it comes from, you will not have an answer.",
      "source": "Origin unclear; widely taught in art and interior design courses with no traceable primary source",
      "verify": {
        "status": "unverified",
        "note": "Searched for a primary source for the five-type rhythm taxonomy (random, regular, alternating, flowing, progressive). Found it repeated across teaching sites and interior design blogs, but no originating author or text. The published table of contents for Design Basics 9th edition confirms that chapter 6 names Rhythm and Motion, Alternating Rhythm, Progressive Rhythm and Polyrhythmic Structures, with no flowing rhythm anywhere in it."
      },
      "belongs": {
        "verdict": "cut",
        "why": "No traceable source and no instruction it gives that gradation (106) and progressive rhythm (103) do not give better. Keep those two and drop this."
      },
      "related": [
        100,
        103,
        106
      ]
    },
    {
      "n": 103,
      "title": "Progressive rhythm",
      "aka": [
        "Progression"
      ],
      "oneLine": "A repeated element that changes by a steady step each time it recurs.",
      demo: {
        caption: "Both rows repeat one square. Only the right-hand row changes by a fixed ratio, which is what makes it point somewhere.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Varied sizes</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--bottom db-row--centre\"><span class=\"db-sq\" style=\"width:18px;height:18px\"></span><span class=\"db-sq\" style=\"width:11px;height:11px\"></span><span class=\"db-sq\" style=\"width:26px;height:26px\"></span><span class=\"db-sq\" style=\"width:14px;height:14px\"></span><span class=\"db-sq\" style=\"width:21px;height:21px\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Each step times 1.25</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--bottom db-row--centre\"><span class=\"db-sq\" style=\"width:12px;height:12px\"></span><span class=\"db-sq\" style=\"width:15px;height:15px\"></span><span class=\"db-sq\" style=\"width:19px;height:19px\"></span><span class=\"db-sq\" style=\"width:23px;height:23px\"></span><span class=\"db-sq\" style=\"width:29px;height:29px\"></span></div></div></div></div>"
      },
      "what": "Progressive rhythm is one of the rhythm types Lauer and Pentak name in their rhythm chapter. A shape repeats while one property changes by a regular step, most often size, though tone, colour or texture can be the varying element. The change has to be predictable, or you have variety rather than progression. It is repetition plus a rule for what happens next.",
      "why": "Progression gives you movement and direction at the same time, because a steady increase points somewhere. It also implies sequence, which is why it suits steps, timelines and anything with a beginning and an end. On screen it is the underlying logic of a modular type scale.",
      "how": [
        "Choose the step as a ratio, not an amount, so the progression holds at any starting size.",
        "Keep the number of steps small enough that the last one is still usable.",
        "Use the direction of the progression to point at the destination, such as a call to action.",
        "Do not mix two progressions in one composition unless they share a ratio."
      ],
      "example": "The pipes of a church organ, arranged in steadily decreasing length across the case. A type scale built on a fixed ratio does the same thing in two dimensions.",
      "numbers": "",
      "pitfall": "Geometric progressions run away fast. Three or four steps up from a body size and you have a headline that will not fit on a phone, so cap the scale and test the extremes.",
      "source": "David Lauer and Stephen Pentak, Design Basics, chapter 6 (Rhythm)",
      "verify": {
        "status": "verified",
        "note": "Progressive Rhythm is confirmed as a named section of chapter 6 (Rhythm) from the published table of contents for Design Basics 9th edition, alongside Rhythm and Motion, Alternating Rhythm and Polyrhythmic Structures. The account of what progressive rhythm does is standard teaching, not a quotation from the chapter."
      },
      "belongs": {
        "verdict": "core",
        "why": "A named, well-defined rhythm type with a direct application in type scales and step-based layouts."
      },
      "related": [
        100,
        106,
        455,
        1023
      ]
    },
    {
      "n": 104,
      "title": "Repetition",
      "aka": [
        "Recurrence"
      ],
      "oneLine": "Using the same element or treatment again so a set of parts reads as one thing.",
      demo: {
        caption: "Same three cards both sides. Repeating one rule on the right makes them read as one set.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">A new treatment each time</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\" style=\"border-left:3px solid var(--accent)\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\" style=\"border-radius:12px;border-top:3px solid var(--ink)\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\" style=\"border:2px dashed var(--rule-strong)\"><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One treatment repeated</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\" style=\"border-left:3px solid var(--accent)\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\" style=\"border-left:3px solid var(--accent)\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\" style=\"border-left:3px solid var(--accent)\"><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div>"
      },
      "what": "Repetition is the oldest principle on this list. Dow named it as the production of beauty by repeating the same lines in rhythmical order, with intervals that may be equal, as in pattern, or unequal, as in landscape. He also warned that a mere row of things has no art-value, so repetition is a way of putting lines and spaces together rather than a guarantee of anything. Wong gives it a chapter as the base case of two-dimensional design: identical or near-identical units placed in a structure. Robin Williams made it one of her four principles and framed it as repeating some aspect of the design throughout the piece.",
      "why": "Repetition creates unity across pages that the reader never sees side by side, which is the whole basis of consistent branding and design systems. It also reduces effort for the reader, who learns a treatment once and then recognises it everywhere. For the designer it turns a thousand decisions into one.",
      "how": [
        "Pick a small number of repeatable elements, such as a rule weight, an accent colour and a heading treatment, and use them everywhere.",
        "Repeat treatments, not just shapes: the same spacing rule is as unifying as the same graphic.",
        "Push repetition further than feels comfortable; readers notice consistency far less than designers do.",
        "Document what repeats, or the next person will invent a new version of it."
      ],
      "example": "The London Underground diagram: the same tick for every station, the same interchange circle, the same line weight throughout. Repetition is what lets a couple of dozen separate routes read as one map.",
      "numbers": "",
      "pitfall": "Repetition without any relief becomes wallpaper, and readers stop seeing individual items. Plan the exceptions at the same time as the pattern.",
      "source": "Arthur Wesley Dow, Composition (first published 1899), quoted from the ninth edition, 1914; Wucius Wong, Principles of Two-Dimensional Design (1972); Robin Williams, The Non-Designer's Design Book (1994)",
      "verify": {
        "status": "verified",
        "note": "Dow's wording read verbatim from the Project Gutenberg text of Composition (ebook 45410), which is the ninth edition of 1914: \"the production of beauty by repeating the same lines in rhythmical order. The intervals may be equal, as in pattern, or unequal, as in landscape\", and later \"A mere row of things has no art-value.\" Repetition confirmed as a chapter of Wong's Principles of Two-Dimensional Design from the published contents listing, and as one of Williams's four principles from Peachpit's listing. The line count in the Underground example was removed: the current map carries eleven Underground lines plus six named Overground lines, the Elizabeth line, the DLR and the tram, and any fixed number goes stale."
      },
      "belongs": {
        "verdict": "core",
        "why": "Named as a principle by three separate canonical sources and the mechanism behind every design system."
      },
      "related": [
        89,
        101,
        105,
        113,
        117
      ]
    },
    {
      "n": 105,
      "title": "Alternation",
      "aka": [
        "Alternating rhythm",
        "A-B repetition"
      ],
      "oneLine": "Two or more elements taking turns in a predictable sequence.",
      demo: {
        caption: "Six identical rows. Shading alternate bands on the right gives the eye a rail to follow from left column to right.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">One state throughout</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:0\"><div class=\"db-row db-row--between db-row--nowrap\" style=\"padding:5px 6px\"><span class=\"db-note\">Item A</span><span class=\"db-note\">12</span><span class=\"db-note\">340</span></div><div class=\"db-row db-row--between db-row--nowrap\" style=\"padding:5px 6px\"><span class=\"db-note\">Item B</span><span class=\"db-note\">7</span><span class=\"db-note\">118</span></div><div class=\"db-row db-row--between db-row--nowrap\" style=\"padding:5px 6px\"><span class=\"db-note\">Item C</span><span class=\"db-note\">24</span><span class=\"db-note\">902</span></div><div class=\"db-row db-row--between db-row--nowrap\" style=\"padding:5px 6px\"><span class=\"db-note\">Item D</span><span class=\"db-note\">9</span><span class=\"db-note\">256</span></div><div class=\"db-row db-row--between db-row--nowrap\" style=\"padding:5px 6px\"><span class=\"db-note\">Item E</span><span class=\"db-note\">18</span><span class=\"db-note\">473</span></div><div class=\"db-row db-row--between db-row--nowrap\" style=\"padding:5px 6px\"><span class=\"db-note\">Item F</span><span class=\"db-note\">5</span><span class=\"db-note\">061</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Two states alternating</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:0\"><div class=\"db-row db-row--between db-row--nowrap\" style=\"padding:5px 6px\"><span class=\"db-note\">Item A</span><span class=\"db-note\">12</span><span class=\"db-note\">340</span></div><div class=\"db-row db-row--between db-row--nowrap\" style=\"padding:5px 6px;background:var(--paper-sunk)\"><span class=\"db-note\">Item B</span><span class=\"db-note\">7</span><span class=\"db-note\">118</span></div><div class=\"db-row db-row--between db-row--nowrap\" style=\"padding:5px 6px\"><span class=\"db-note\">Item C</span><span class=\"db-note\">24</span><span class=\"db-note\">902</span></div><div class=\"db-row db-row--between db-row--nowrap\" style=\"padding:5px 6px;background:var(--paper-sunk)\"><span class=\"db-note\">Item D</span><span class=\"db-note\">9</span><span class=\"db-note\">256</span></div><div class=\"db-row db-row--between db-row--nowrap\" style=\"padding:5px 6px\"><span class=\"db-note\">Item E</span><span class=\"db-note\">18</span><span class=\"db-note\">473</span></div><div class=\"db-row db-row--between db-row--nowrap\" style=\"padding:5px 6px;background:var(--paper-sunk)\"><span class=\"db-note\">Item F</span><span class=\"db-note\">5</span><span class=\"db-note\">061</span></div></div></div></div></div>"
      },
      "what": "Alternation is repetition with more than one unit in the cycle: A, B, A, B, or A, B, C, A, B, C. Alternating Rhythm is one of the named sections of Lauer and Pentak's rhythm chapter. Wong's chapters on repetition and structure produce the same effect by alternating the modules inside a repeat. Christopher Alexander reaches the same pattern from architecture at 916, and adds the point this tradition leaves implicit: the interval between the units is itself one of the repeating elements and has to be designed.",
      "why": "Alternation gives you the order of regular rhythm with more interest, because the eye has two things to track instead of one. It is also functional: alternating treatments separate adjacent items that would otherwise merge, which is why it survives in tables and long lists.",
      "how": [
        "Use alternating row shading in long tables so the eye can follow a row across without slipping.",
        "Keep the contrast between the two states low, or the shading becomes the loudest thing on the page.",
        "Alternate image and text sides down a long page to give it a beat without adding decoration.",
        "Make sure the cycle is short enough to be recognised; a seven-element cycle reads as randomness."
      ],
      "example": "A piano keyboard: the black keys alternate in groups of two and three against the white, which is what lets a player find middle C without counting from the end.",
      "numbers": "",
      "pitfall": "Alternating left and right image placement down a whole page turns into a zigzag that is tiring on mobile, where the alternation collapses into a single column and disappears anyway.",
      "source": "David Lauer and Stephen Pentak, Design Basics, chapter 6 (Rhythm)",
      "verify": {
        "status": "verified",
        "note": "Alternating Rhythm confirmed as a named section of chapter 6 (Rhythm) from the published table of contents for Design Basics 9th edition. The zebra-striping advice is ordinary interface practice rather than anything the book says. The comparison with Alexander's alternating repetition was added when this card was cross-linked with 916; that claim is sourced there to The Nature of Order, Book One."
      },
      "belongs": {
        "verdict": "core",
        "why": "A distinct and practically useful rhythm type, and the reason zebra striping works in data tables."
      },
      "related": [
        100,
        101,
        104,
        501,
        916
      ]
    },
    {
      "n": 106,
      "title": "Gradation",
      "aka": [
        "Graduation",
        "Transition"
      ],
      "oneLine": "A repeated element changing gradually in one property across the composition.",
      demo: {
        caption: "Both ramps use the same nine tones. The dent on the left reads as a fault rather than an effect.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One step out of sequence</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:var(--ink);opacity:0.08\"></span><span style=\"background:var(--ink);opacity:0.18\"></span><span style=\"background:var(--ink);opacity:0.28\"></span><span style=\"background:var(--ink);opacity:0.58\"></span><span style=\"background:var(--ink);opacity:0.48\"></span><span style=\"background:var(--ink);opacity:0.38\"></span><span style=\"background:var(--ink);opacity:0.68\"></span><span style=\"background:var(--ink);opacity:0.78\"></span><span style=\"background:var(--ink);opacity:0.88\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Even steps</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:var(--ink);opacity:0.08\"></span><span style=\"background:var(--ink);opacity:0.18\"></span><span style=\"background:var(--ink);opacity:0.28\"></span><span style=\"background:var(--ink);opacity:0.38\"></span><span style=\"background:var(--ink);opacity:0.48\"></span><span style=\"background:var(--ink);opacity:0.58\"></span><span style=\"background:var(--ink);opacity:0.68\"></span><span style=\"background:var(--ink);opacity:0.78\"></span><span style=\"background:var(--ink);opacity:0.88\"></span></div></div></div></div>"
      },
      "what": "Gradation is a chapter in Wong's Principles of Two-Dimensional Design: units that repeat while one attribute shifts steadily, such as size, tone, spacing or direction. Dow's transition covers the same territory from the other side, describing it as the softening of opposition by intermediate steps. The difference from progressive rhythm is emphasis: gradation stresses the smoothness of the change, progression stresses the step.",
      "why": "A gradient of any kind implies depth and direction, so gradation is one of the few ways to suggest three dimensions on a flat surface without drawing perspective. It also softens hard contrasts, which is useful when two areas of a design need to relate rather than confront each other.",
      "how": [
        "Change one attribute at a time; two simultaneous gradations read as a mess.",
        "Keep the steps even, because an uneven gradation looks like a fault rather than an effect.",
        "Use gradation in halftones and dot densities to carry tonal information in one-colour printing.",
        "Watch for banding when a tonal gradation is reproduced in eight bits or on cheap stock."
      ],
      "example": "A newspaper halftone: dots grow steadily from tiny in the highlights to touching in the shadows, and a grid of black dots becomes a photograph.",
      "numbers": "",
      "pitfall": "Long, subtle gradients behind text are a legibility trap. Contrast passes at one end of the gradient and fails at the other, and automated checks often only sample one point.",
      "source": "Wucius Wong, Principles of Two-Dimensional Design (Van Nostrand Reinhold, 1972); Arthur Wesley Dow, Composition (first published 1899), on Transition, quoted from the ninth edition, 1914",
      "verify": {
        "status": "verified",
        "note": "Gradation confirmed as a chapter of Wong's Principles of Two-Dimensional Design from the published contents listing; the 1972 Van Nostrand Reinhold first edition confirmed from a library catalogue record and first-edition bookseller listings. Dow's transition read from the Project Gutenberg text of Composition (ninth edition, 1914), where a third line added between two opposing lines means \"the opposition is softened and an effect of unity and completeness produced\"."
      },
      "belongs": {
        "verdict": "core",
        "why": "Named as a chapter-level principle by Wong and the basis of halftone reproduction, depth cues and tonal transitions."
      },
      "related": [
        102,
        103,
        107,
        110
      ]
    },
    {
      "n": 107,
      "title": "Radiation",
      "aka": [
        "Radiating structure"
      ],
      "oneLine": "Repeated units arranged around a common centre so they fan outwards.",
      demo: {
        caption: "Same eight units, same circle. Aimed at the hub they read as spokes; turned side-on they read as a ring.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Aimed at the centre</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 120 120\"><circle class=\"s-mute\" cx=\"60\" cy=\"60\" r=\"52\"/><path class=\"s\" d=\"M78 60 L104 60\"/><path class=\"s\" d=\"M72.7 72.7 L91.1 91.1\"/><path class=\"s\" d=\"M60 78 L60 104\"/><path class=\"s\" d=\"M47.3 72.7 L28.9 91.1\"/><path class=\"s\" d=\"M42 60 L16 60\"/><path class=\"s\" d=\"M47.3 47.3 L28.9 28.9\"/><path class=\"s\" d=\"M60 42 L60 16\"/><path class=\"s\" d=\"M72.7 47.3 L91.1 28.9\"/><circle class=\"f-accent\" cx=\"60\" cy=\"60\" r=\"4\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Turned side-on</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 120 120\"><circle class=\"s-mute\" cx=\"60\" cy=\"60\" r=\"52\"/><path class=\"s\" d=\"M96 49 L96 71\"/><path class=\"s\" d=\"M77.7 93.3 L93.3 77.7\"/><path class=\"s\" d=\"M49 96 L71 96\"/><path class=\"s\" d=\"M26.7 77.7 L42.3 93.3\"/><path class=\"s\" d=\"M24 49 L24 71\"/><path class=\"s\" d=\"M42.3 26.7 L26.7 42.3\"/><path class=\"s\" d=\"M71 24 L49 24\"/><path class=\"s\" d=\"M93.3 42.3 L77.7 26.7\"/><circle class=\"f-accent\" cx=\"60\" cy=\"60\" r=\"4\"/></svg></div></div></div>"
      },
      "what": "Wong treats radiation as a chapter in its own right: a special kind of repetition where the structure is built on a centre rather than a grid. Units can point at the centre, circle it or spiral out from it. The result balances in every direction, which is why radial balance and radiation are close relatives, but radiation is the arrangement and radial balance is the effect.",
      "why": "Radiating structures concentrate attention at the centre while filling the whole field, so they are efficient when one item has to be surrounded by many equals. They also carry strong associations with emblems, dials, sunbursts and anything ceremonial.",
      "how": [
        "Decide whether units point at the centre, sit tangentially or spiral, because the three read very differently.",
        "Keep the spacing between spokes constant in angle, not in distance, or the outer edge will look uneven.",
        "Leave the centre either empty or occupied by the single most important thing; a half-filled centre looks unresolved.",
        "For pie and donut charts, order the segments so the largest starts at twelve o'clock, since arbitrary order wastes the structure."
      ],
      "example": "A bicycle wheel: identical spokes at identical angles, all resolving on the hub. The rose window in a Gothic cathedral is the same geometry in tracery.",
      "numbers": "",
      "pitfall": "Radiating type is nearly always a mistake. Words rotated around a circle force the reader to tilt their head, and the ones at the bottom end up upside down.",
      "source": "Wucius Wong, Principles of Two-Dimensional Design (Van Nostrand Reinhold, 1972)",
      "verify": {
        "status": "verified",
        "note": "Radiation confirmed as a chapter of Wong's Principles of Two-Dimensional Design from the publisher's contents listing, which runs: Introduction, Form, Repetition, Structure, Similarity, Gradation, Radiation, Anomaly, Contrast, Concentration, Texture, Space. The pie-chart advice is charting convention, not Wong."
      },
      "belongs": {
        "verdict": "core",
        "why": "A named structural principle in the standard two-dimensional design text, and distinct from radial balance."
      },
      "related": [
        88,
        104,
        461
      ]
    },
    {
      "n": 108,
      "title": "Anomaly",
      "aka": [
        "The exception",
        "Deviation"
      ],
      "oneLine": "One element that breaks an otherwise consistent pattern, and so takes all the attention.",
      demo: {
        caption: "Same field twice. One dot on the right changed colour, nothing else did, and the eye lands there first.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Consistent field</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">One unit changed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div></div></div></div></div>"
      },
      "what": "Wong gives anomaly a chapter: a deliberate irregularity in a regular field. The pattern has to be established firmly first, because an anomaly only exists relative to a rule the viewer has already learned. One red door in a row of black doors is an anomaly; one red door in a row of assorted colours is nothing.",
      "why": "This is the most economical form of emphasis available. You spend nothing on size or colour across the composition and everything on a single break, and the break is unmissable. It also adds life to a rigid layout without disturbing the order that makes it work.",
      "how": [
        "Establish the pattern over enough repetitions that the reader is confident in it before you break it.",
        "Break exactly one rule at the anomalous point, not several.",
        "Put the anomaly where you want the eye to go, since it will go there whether you meant it or not.",
        "Audit finished work for accidental anomalies, which are indistinguishable from deliberate ones."
      ],
      "example": "A row of identical Georgian front doors, all black except one painted yellow. Everyone who walks down the street looks at the yellow one.",
      "numbers": "",
      "pitfall": "Two anomalies cancel each other out. The moment there are two exceptions, the viewer starts looking for a second pattern rather than reading either as emphasis.",
      "source": "Wucius Wong, Principles of Two-Dimensional Design (Van Nostrand Reinhold, 1972)",
      "verify": {
        "status": "verified",
        "note": "Anomaly confirmed as a chapter of Wong's Principles of Two-Dimensional Design from the publisher's contents listing. The advice about how many repetitions to establish first is studio practice; Ross's answer of three, verified at entry 100, is the nearest sourced figure."
      },
      "belongs": {
        "verdict": "core",
        "why": "A named principle with a clear, cheap and reliable use: emphasis by breaking an established pattern."
      },
      "related": [
        91,
        93,
        149,
        176
      ]
    },
    {
      "n": 109,
      "title": "Concentration",
      "aka": [
        "Density variation"
      ],
      "oneLine": "Varying how tightly elements are packed so density itself carries the meaning.",
      demo: {
        caption: "Same mark, same count in each block. Only the spacing changes, and the tightest block reads as a darker grey.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--centre db-row--loose\"><div class=\"db-col\" style=\"gap:13px\"><div class=\"db-row\" style=\"gap:13px\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div><div class=\"db-row\" style=\"gap:13px\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div><div class=\"db-row\" style=\"gap:13px\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div><div class=\"db-row\" style=\"gap:13px\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div><div class=\"db-row\" style=\"gap:13px\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div></div><div class=\"db-col\" style=\"gap:7px\"><div class=\"db-row\" style=\"gap:7px\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div><div class=\"db-row\" style=\"gap:7px\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div><div class=\"db-row\" style=\"gap:7px\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div><div class=\"db-row\" style=\"gap:7px\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div><div class=\"db-row\" style=\"gap:7px\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div></div><div class=\"db-col\" style=\"gap:3px\"><div class=\"db-row\" style=\"gap:3px\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div><div class=\"db-row\" style=\"gap:3px\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div><div class=\"db-row\" style=\"gap:3px\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div><div class=\"db-row\" style=\"gap:3px\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div><div class=\"db-row\" style=\"gap:3px\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></div></div></div></div>"
      },
      "what": "Another Wong chapter. Where gradation changes an attribute of the units, concentration changes how many of them there are per unit of area. Elements crowd in one region and thin out in another, and the crowded region reads as heavier, darker and more important without any single element changing.",
      "why": "Density is a channel most designers ignore. It lets you build emphasis and tonal structure out of a single repeated mark, which is why it is the workhorse of one-colour printing, engraving, hatching and dot maps. In data work it is often the honest way to show quantity, because the ink genuinely corresponds to the count.",
      "how": [
        "Treat crowding as a tone: a dense cluster of small marks reads as a grey area from a distance.",
        "Keep the individual mark constant and let only the spacing vary, or you lose the effect.",
        "Squint at the result to check that the tonal map you have built is the one you intended.",
        "In data graphics, check that density corresponds to something real rather than to a plotting accident."
      ],
      "example": "A dot-density population map, where one dot stands for a fixed number of people. Cities appear as solid black masses and moorland as near-white, with no shading applied at all.",
      "numbers": "",
      "pitfall": "Overplotting. Past a certain density every dot map turns into a solid blob and stops carrying information, so check the darkest region still resolves.",
      "source": "Wucius Wong, Principles of Two-Dimensional Design (Van Nostrand Reinhold, 1972)",
      "verify": {
        "status": "verified",
        "note": "Concentration confirmed as chapter 9 of Wong's Principles of Two-Dimensional Design, checked against a scan of the book's own contents page in the Asia Art Archive digital collection. The publisher's product page returns a 403 and was not read, so it is not the basis here. The term is largely specific to Wong's vocabulary and is rare elsewhere, which is worth knowing before using it with a client."
      },
      "belongs": {
        "verdict": "core",
        "why": "A named principle in the standard text and a real compositional channel, even though the term itself travels less widely than the others."
      },
      "related": [
        70,
        104,
        106,
        501
      ]
    },
    {
      "n": 110,
      "title": "Similarity (composition)",
      "aka": [
        "Similarity",
        "Near-repetition"
      ],
      "oneLine": "Elements that resemble each other without being identical, so they read as a family.",
      demo: {
        caption: "Three different shapes both sides. On the right they share one stroke weight and one size, and become a family.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No shared rule</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 60\"><circle class=\"s\" cx=\"40\" cy=\"30\" r=\"17\" style=\"stroke-width:3.4\"/><rect class=\"s\" x=\"88\" y=\"22\" width=\"16\" height=\"16\" style=\"stroke-width:1\"/><path class=\"s\" d=\"M150 45 L164 17 L178 45 Z\" style=\"stroke-width:4.5\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One weight, one size</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 60\"><circle class=\"s\" cx=\"40\" cy=\"30\" r=\"12\" style=\"stroke-width:2\"/><rect class=\"s\" x=\"88\" y=\"18\" width=\"24\" height=\"24\" style=\"stroke-width:2\"/><path class=\"s\" d=\"M152 42 L164 20 L176 42 Z\" style=\"stroke-width:2\"/></svg></div></div></div>"
      },
      "what": "Wong devotes a chapter to similarity as the looser cousin of repetition: units that share enough character to belong together while differing in detail. The shared attribute might be shape, size, colour, texture or direction. This is a compositional instruction about how to build a set, and it sits alongside, rather than inside, the Gestalt grouping law of the same name at entry 157.",
      "why": "Strict repetition can be dull and is often impossible, because real content varies. Similarity gives you the unity of repetition with room for the differences the content actually has. It is how an icon set, a photographic style or a component library holds together despite every item being different.",
      "how": [
        "Fix one or two shared attributes across a set and let everything else vary.",
        "Write the shared attributes down as a rule, such as a fixed stroke weight and corner radius, so others can extend the set.",
        "Check a new item against the set at small size, where only the shared attributes survive.",
        "If a member keeps looking wrong, the shared rule is probably the wrong one rather than the item."
      ],
      "example": "A phone home screen: every app icon is a different picture, but all share the same rounded-square silhouette and the same size, so they read as one class of thing.",
      "numbers": "",
      "pitfall": "Similar but not similar enough. Icons drawn at three different stroke weights look like an accident, and the fix is a rule, not a redraw of the worst offender.",
      "source": "Wucius Wong, Principles of Two-Dimensional Design (Van Nostrand Reinhold, 1972)",
      "verify": {
        "status": "verified",
        "note": "Similarity confirmed as chapter 4 of Wong's Principles of Two-Dimensional Design, checked against a scan of the book's own contents page in the Asia Art Archive digital collection, where it follows Structure and precedes Gradation. The publisher's product page was not reachable. Note the overlap with the Gestalt law of similarity at master list entry 157; Wong's version is a construction rule, the Gestalt version is a perceptual law."
      },
      "belongs": {
        "verdict": "core",
        "why": "A construction principle for building consistent sets, and a distinct job from the perceptual grouping law of the same name."
      },
      "related": [
        104,
        113,
        116,
        157
      ]
    },
    {
      "n": 111,
      "title": "Movement",
      "aka": [
        "Implied motion",
        "Illusion of motion"
      ],
      "oneLine": "A still composition that suggests something is moving or about to move.",
      demo: {
        caption: "Neither side moves. On the right the same square leans and repeats into a fading trail, which reads as travel.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Upright, evenly spaced</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--bottom\"><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Same square, leaning and climbing</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--bottom\"><span class=\"db-sq db-sq--lg\" style=\"transform:rotate(-24deg);opacity:0.14;margin-bottom:0px\"></span><span class=\"db-sq db-sq--lg\" style=\"transform:rotate(-24deg);opacity:0.28;margin-bottom:9px\"></span><span class=\"db-sq db-sq--lg\" style=\"transform:rotate(-24deg);opacity:0.46;margin-bottom:18px\"></span><span class=\"db-sq db-sq--lg\" style=\"transform:rotate(-24deg);opacity:0.7;margin-bottom:27px\"></span><span class=\"db-sq db-sq--lg\" style=\"transform:rotate(-24deg);opacity:1;margin-bottom:36px\"></span></div></div></div></div>"
      },
      "what": "Nothing on a printed page moves, so movement here means the impression of motion built from static marks. Lauer and Pentak give it a chapter, the illusion of motion, in their section on design elements. The usual devices are blur, repeated figures in successive positions, diagonals, and forms that lean or overlap in a consistent direction.",
      "why": "Implied movement makes an image feel like a moment rather than an object, which is why sports, dance and automotive photography rely on it. In layout it also gives the eye a direction to travel, so it doubles as a way of controlling reading order without arrows.",
      "how": [
        "Use diagonals; horizontals and verticals read as stable and diagonals read as unstable.",
        "Leave space in front of a moving subject rather than behind it, or the motion looks blocked.",
        "Repeat a form in shifted positions to imply a sequence rather than showing a single frozen instant.",
        "Keep the implied direction consistent with the reading direction unless you want the friction."
      ],
      "example": "Marcel Duchamp's Nude Descending a Staircase, No. 2 (1912): one figure drawn in many overlapping positions, so a static canvas reads as continuous motion.",
      "numbers": "",
      "pitfall": "Motion blur applied in software to a sharp photo usually looks fake, because real blur follows the subject's path and the filter follows a straight line.",
      "source": "David Lauer and Stephen Pentak, Design Basics, chapter 11 (Illusion of Motion)",
      "verify": {
        "status": "verified",
        "note": "Chapter 11 confirmed as Illusion of Motion from the published table of contents for Design Basics 9th edition, with the sections Anticipated Motion, Ways to Suggest Motion and Optical Movement. It sits in the design elements half of the book, not among the principles. Duchamp's Nude Descending a Staircase (No. 2), dated 1912, checked against the Philadelphia Museum of Art collection record."
      },
      "belongs": {
        "verdict": "core",
        "why": "A chapter-level principle in the standard textbook and a working tool for both image-making and layout direction."
      },
      "related": [
        112,
        133,
        134,
        144
      ]
    },
    {
      "n": 112,
      "title": "Visual path / eye travel",
      "aka": [
        "Reading gravity",
        "Scan path"
      ],
      "oneLine": "The route a viewer's eyes actually take across a layout, and the attempt to steer it.",
      demo: {
        caption: "Unformatted text, skimmed: fixations stack along the top, a shorter second sweep, then down the left. That is the F.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 140\"><rect class=\"f-mute\" x=\"12\" y=\"14\" width=\"296\" height=\"5\"/><rect class=\"f-mute\" x=\"12\" y=\"25\" width=\"296\" height=\"5\"/><rect class=\"f-mute\" x=\"12\" y=\"36\" width=\"296\" height=\"5\"/><rect class=\"f-mute\" x=\"12\" y=\"47\" width=\"296\" height=\"5\"/><rect class=\"f-mute\" x=\"12\" y=\"58\" width=\"296\" height=\"5\"/><rect class=\"f-mute\" x=\"12\" y=\"69\" width=\"296\" height=\"5\"/><rect class=\"f-mute\" x=\"12\" y=\"80\" width=\"296\" height=\"5\"/><rect class=\"f-mute\" x=\"12\" y=\"91\" width=\"296\" height=\"5\"/><rect class=\"f-mute\" x=\"12\" y=\"102\" width=\"296\" height=\"5\"/><rect class=\"f-mute\" x=\"12\" y=\"113\" width=\"296\" height=\"5\"/><rect class=\"f-mute\" x=\"12\" y=\"124\" width=\"160\" height=\"5\"/><rect class=\"f-accent\" x=\"8\" y=\"8\" width=\"304\" height=\"26\" opacity=\"0.22\"/><rect class=\"f-accent\" x=\"8\" y=\"52\" width=\"188\" height=\"22\" opacity=\"0.16\"/><rect class=\"f-accent\" x=\"8\" y=\"8\" width=\"52\" height=\"122\" opacity=\"0.12\"/></svg></div>"
      },
      "what": "Designers have long used diagrams of assumed eye travel to plan layouts. The best known is the Gutenberg diagram, attributed to the American typographer Edmund Arnold, which divides a page into four quadrants and claims the eye sweeps from top left to bottom right. Eye-tracking research replaced that guesswork with measured patterns. Nielsen Norman Group's 2006 study of 232 users described an F-shaped scan, and their later work states that the F is one of several patterns, appearing only over unformatted text read by someone skimming with low commitment.",
      "why": "Knowing where eyes actually land tells you where to put the thing that matters, and it is a better argument in a client meeting than taste. The honest version also protects you from designing to a diagram that has no evidence behind it.",
      "how": [
        "Put the most important words at the start of headings and the start of the first line, where fixations concentrate.",
        "Format the content, because the F-pattern is what readers fall back on when nothing has been formatted for them.",
        "Build the path with hierarchy, contrast and space rather than assuming a fixed sweep across the page.",
        "Do not lay out to the Gutenberg or Z diagrams as if they were measured facts."
      ],
      "example": "A Google search results page: the strongest gazes land on the first few words of the first few results, which is why the blue link leads with the page title.",
      "numbers": "Nielsen Norman Group's 2006 study recorded the eye movements of 232 users and was published on 16 April 2006.",
      "pitfall": "Treating the F-pattern as a law and then formatting nothing, on the grounds that people will not read it anyway. NN/g's own follow-up says the pattern is a symptom of poorly formatted content, not a target to design for.",
      "source": "Jakob Nielsen, F-Shaped Pattern For Reading Web Content, Nielsen Norman Group, 16 April 2006; Kara Pernice, F-Shaped Pattern of Reading on the Web: Misunderstood, But Still Relevant, Nielsen Norman Group, 12 November 2017; Gutenberg diagram attributed to Edmund Arnold",
      "verify": {
        "status": "disputed",
        "note": "Verified from the original NN/g article: \"we recorded how 232 users looked at thousands of Web pages\", published 16 April 2006. Verified from Pernice's 2017 follow-up: \"In addition to the F-shaped pattern, there are many other possible scanning patterns\", and the F appears when a page \"has a wall of text but no bolding, bullets, or subheadings\". The Gutenberg diagram's attribution to Edmund Arnold is repeated widely in secondary sources, but I found no primary text and no empirical support for its claims, so treat that half as folklore."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "The evidence comes from eye-tracking research rather than design theory, but it has a specific design use: it decides where headings, first words and calls to action are placed."
      },
      "related": [
        111,
        140,
        141,
        142,
        143
      ]
    },
    {
      "n": 113,
      "title": "Unity",
      "aka": [
        "Coherence"
      ],
      "oneLine": "The sense that everything in a composition belongs to the same piece of work.",
      demo: {
        caption: "Same panel twice. The right one uses one corner radius, one button size and one type size, and stops looking assembled.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Five ingredients</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\" style=\"border-radius:12px;border-left:3px solid var(--accent)\"><div class=\"db-col\"><div class=\"db-type db-type--display\" style=\"font-size:19px\">Order summary</div><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-row\"><span class=\"db-btn db-btn--lg\" style=\"border-radius:14px\">Pay now</span><span class=\"db-btn db-btn--ghost db-btn--sm\" style=\"border-radius:0\">Cancel</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Two ingredients</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col\"><div class=\"db-type db-type--display\" style=\"font-size:15px\">Order summary</div><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-row\"><span class=\"db-btn\">Pay now</span><span class=\"db-btn db-btn--ghost\">Cancel</span></div></div></div></div></div></div>"
      },
      "what": "Unity is the overall test a composition passes or fails. Lauer and Pentak put it first among the design principles, ahead of emphasis, scale, balance and rhythm, because it governs whether the parts read as one thing. It is achieved through repetition, alignment, proximity, a shared palette and a shared type system rather than through any single move.",
      "why": "A unified piece is easier to trust, because inconsistency reads as carelessness and carelessness reads as unreliability. Unity also lowers the reader's effort, since one visual language has to be learned instead of five. For a business it is the difference between a brand and a pile of files.",
      "how": [
        "Limit the ingredients: one or two typefaces, a small palette, one spacing scale, one corner radius.",
        "Repeat a distinctive element across every page so unrelated pages still feel related.",
        "Print or export several pieces and lay them side by side; unity problems are invisible one screen at a time.",
        "When adding something new, ask which existing rule it follows rather than what it should look like."
      ],
      "example": "The London Underground diagram again: one line weight, one angle set, one station mark, one typeface. Everything on it obeys the same small rulebook, and that is what makes it readable.",
      "numbers": "",
      "pitfall": "Unity pursued to the point of sameness, so that important things stop standing out. The paired idea is unity with variety, and dropping the second half produces a beautifully consistent page nobody can navigate.",
      "source": "David Lauer and Stephen Pentak, Design Basics, chapter 2 (Unity)",
      "verify": {
        "status": "verified",
        "note": "Chapter 2 confirmed as Unity from the published table of contents for Design Basics 9th edition, and confirmed as the first principle chapter, since chapter 1 is Design Process and Emphasis, Scale and Proportion, Balance and Rhythm all follow it. Its sections are Gestalt, Ways to Achieve Unity, Unity with Variety and Unity at Work."
      },
      "belongs": {
        "verdict": "core",
        "why": "The top-level test of a composition and the organising goal that repetition, alignment and proximity all serve."
      },
      "related": [
        104,
        114,
        115,
        117,
        118
      ]
    },
    {
      "n": 114,
      "title": "Harmony",
      "aka": [
        "Concord"
      ],
      "oneLine": "Elements that share something appreciable, and so sit together comfortably.",
      demo: {
        caption: "Both pairs sit the same distance apart in hue. Holding saturation and lightness equal on the right is what settles them.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Nothing held in common</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--tight\"><span class=\"db-swatch db-swatch--lg\" style=\"background:hsl(212, 78%, 34%)\"></span><span class=\"db-swatch db-swatch--lg\" style=\"background:hsl(46, 96%, 62%)\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Saturation and lightness held</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--tight\"><span class=\"db-swatch db-swatch--lg\" style=\"background:hsl(212, 42%, 52%)\"></span><span class=\"db-swatch db-swatch--lg\" style=\"background:hsl(46, 42%, 52%)\"></span></div></div></div></div>"
      },
      "what": "Ross gave the clearest definition in 1907: whenever two or more impressions or ideas have something in common that is appreciable, they are in harmony, in the measure of what they have in common. Dow, working in the same decade, treated harmony as the goal and named his five principles as five ways of creating it. Harmony is therefore a relationship, not a property of any single element.",
      "why": "Naming the shared attribute turns a vague argument about whether something looks right into a checkable question. If two typefaces are fighting, you can ask what they actually have in common, and usually the answer is nothing. That gives you a fix rather than an opinion.",
      "how": [
        "When two elements clash, find one attribute they can share, such as weight, width, temperature or era.",
        "Build palettes by holding one dimension constant, for example equal saturation across every hue.",
        "Pair typefaces on a shared skeleton or a shared historical period rather than on contrast alone.",
        "Say what the shared attribute is out loud; if you cannot name it, there probably is not one."
      ],
      "example": "A superfamily such as a serif and a sans drawn on the same skeleton by the same designer. They differ visibly and still harmonise, because the proportions and the x-height are held in common.",
      "numbers": "",
      "pitfall": "Harmony taken as a synonym for safety. A composition where everything is in harmony and nothing contrasts has no hierarchy at all, and readers cannot find the entry point.",
      "source": "Denman W. Ross, A Theory of Pure Design: Harmony, Balance, Rhythm (Houghton, Mifflin, 1907); Arthur Wesley Dow, Composition (first published 1899), quoted from the ninth edition, 1914",
      "verify": {
        "status": "verified",
        "note": "Ross's definition read verbatim from the Project Gutenberg text of A Theory of Pure Design (ebook 74765): \"Whenever two or more impressions or ideas have something in common that is appreciable, they are in harmony, in the measure of what they have in common.\" Dow's framing read verbatim from the Project Gutenberg text of Composition (ebook 45410), which is the 1914 ninth edition: \"These names are given to five ways of creating harmony, all being dependent upon a great general principle, PROPORTION or GOOD SPACING.\""
      },
      "belongs": {
        "verdict": "core",
        "why": "Defined precisely in the founding sources and it converts a taste argument into a question about shared attributes."
      },
      "related": [
        97,
        113,
        115,
        453
      ]
    },
    {
      "n": 115,
      "title": "Variety",
      "aka": [
        "Unity with variety"
      ],
      "oneLine": "Enough difference in a composition to hold attention without breaking its coherence.",
      demo: {
        caption: "Same grid and the same block treatment. Only the sizes vary on the right, which gives the eye somewhere to start.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">One module, nine times</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--nowrap\"><span class=\"db-block\" style=\"flex:1\"></span><span class=\"db-block\" style=\"flex:1\"></span><span class=\"db-block\" style=\"flex:1\"></span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-block\" style=\"flex:1\"></span><span class=\"db-block\" style=\"flex:1\"></span><span class=\"db-block\" style=\"flex:1\"></span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-block\" style=\"flex:1\"></span><span class=\"db-block\" style=\"flex:1\"></span><span class=\"db-block\" style=\"flex:1\"></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Same grid, sizes varied</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--nowrap\"><span class=\"db-block\" style=\"flex:1\"></span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-block\" style=\"flex:2\"></span><span class=\"db-block\" style=\"flex:1\"></span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-block\" style=\"flex:1\"></span><span class=\"db-block\" style=\"flex:1\"></span><span class=\"db-block\" style=\"flex:2\"></span></div></div></div></div></div>"
      },
      "what": "Variety is the counterweight to unity, and the two are taught as a pair: Lauer and Pentak's unity chapter carries a section headed Unity with Variety. The claim is straightforward. A composition made entirely of the same thing is monotonous and a composition made of unrelated things is chaotic, so the work is to find the point between them. Variety is introduced by changing size, tone, direction, texture or spacing while holding the unifying attributes constant.",
      "why": "Attention needs something to catch on. Variety gives the eye reasons to keep moving through long content, and it prevents the flat, unreadable evenness that over-systemised design produces. It is also how you signal that two things are genuinely different rather than merely adjacent.",
      "how": [
        "Vary one attribute at a time and keep the rest of the shared rule intact.",
        "Introduce variety at structural boundaries, such as section starts, so the change carries information.",
        "Alternate module types down a long page rather than repeating one card layout forty times.",
        "Check that every variation earns its place; variation with no meaning is just noise."
      ],
      "example": "A well-made magazine feature: the same typeface and grid throughout, but full-bleed images, half-page images, pull quotes and plain text pages alternating so no two spreads feel identical.",
      "numbers": "",
      "pitfall": "Variety introduced by adding new typefaces or new colours, which breaks unity instead of decorating it. Vary scale, weight and spacing first; those are free.",
      "source": "David Lauer and Stephen Pentak, Design Basics, chapter 2 (Unity), section Unity with Variety",
      "verify": {
        "status": "verified",
        "note": "Correction to the earlier note on this card. Unity with Variety is confirmed as a named section of chapter 2 (Unity) in the published table of contents for Design Basics 9th edition, so the pairing is sourced after all. What is still untraceable is an originating author for variety as a standalone principle, and no definition is quoted from the chapter here."
      },
      "belongs": {
        "verdict": "core",
        "why": "The necessary counterweight to unity, and the reason heavily systemised layouts go flat."
      },
      "related": [
        97,
        108,
        113,
        114
      ]
    },
    {
      "n": 116,
      "title": "Grouping",
      "aka": [
        "Chunking (visual)"
      ],
      "oneLine": "Arranging related items so the eye reads them as one block rather than as separate parts.",
      demo: {
        caption: "Six items, two groups. Boxing each one flattens them; on the right space alone does the grouping.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">A box round everything</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Space does the grouping</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:24px\"><div class=\"db-col db-col--tight\"><div class=\"db-lines\"><i></i></div><div class=\"db-lines\"><i></i></div><div class=\"db-lines\"><i></i></div></div><div class=\"db-col db-col--tight\"><div class=\"db-lines\"><i></i></div><div class=\"db-lines\"><i></i></div><div class=\"db-lines\"><i></i></div></div></div></div></div></div>"
      },
      "what": "Grouping is the umbrella term for making things belong together on a surface. The perceptual machinery behind it comes from Gestalt psychology, whose grouping laws are covered separately in this reference: proximity, similarity, common region and uniform connectedness are the four you will use most. The design job is choosing which mechanism to use for each group and applying it consistently.",
      "why": "Readers process a page in blocks, not in items, so how you group determines what they think belongs to what. Get it right and a dense page becomes scannable. Get it wrong and people read a caption as a heading or a legal note as part of the offer.",
      "how": [
        "Group with space first, because it costs nothing and adds no visual clutter.",
        "Use a shared background or a border only when space alone cannot carry the grouping.",
        "Make the space between groups clearly larger than the space inside them, with an obvious margin, not a nudge.",
        "Do not mix mechanisms within one page; if some groups use boxes and others use space, the page reads as two systems."
      ],
      "example": "A restaurant menu: starters, mains and puddings separated by clear space with a small heading each. Squeeze the gaps and diners start reading the last starter as a main.",
      "numbers": "",
      "pitfall": "Boxing everything. Card interfaces group by drawing a border around every item, which produces a page of equal boxes and destroys the grouping the borders were meant to create.",
      "source": "Gestalt psychology's grouping laws; see entries 156, 157, 161 and 162",
      "verify": {
        "status": "verified",
        "note": "Grouping is a summary term rather than a single sourced principle. The underlying laws are the Gestalt grouping principles listed separately in this reference at 156 (proximity), 157 (similarity), 161 (common region) and 162 (uniform connectedness). No claim about a specific study or date is made here."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "The mechanism is borrowed from perceptual psychology rather than design theory, but the design use is specific: it decides how content is chunked on a page and therefore what readers understand to belong together."
      },
      "related": [
        110,
        118,
        156,
        157,
        161,
        162
      ]
    },
    {
      "n": 117,
      "title": "Alignment",
      "aka": [
        "Edge alignment"
      ],
      "oneLine": "Placing elements so their edges or centres line up on shared invisible lines.",
      demo: {
        caption: "Same four blocks, same widths. On the right every one starts on a single invisible line, and the edge does the organising.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No shared edge</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-bar db-bar--tall\" style=\"width:118px;margin-left:20px\"></div><div class=\"db-bar\" style=\"width:76px\"></div><div class=\"db-bar db-bar--thin\" style=\"width:148px;margin-left:34px\"></div><div class=\"db-bar\" style=\"width:96px;margin:0 auto\"></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One left edge</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-bar db-bar--tall\" style=\"width:118px\"></div><div class=\"db-bar\" style=\"width:76px\"></div><div class=\"db-bar db-bar--thin\" style=\"width:148px\"></div><div class=\"db-bar\" style=\"width:96px\"></div></div></div></div></div>"
      },
      "what": "Robin Williams made alignment one of her four principles in 1994 and stated the rule bluntly: nothing should be placed on the page arbitrarily, and every item should have a visual connection with something else. In practice that means picking a small number of vertical and horizontal lines and putting everything on one of them. The lines are invisible; their effect is not.",
      "why": "Alignment is the fastest way to make an amateur layout look professional, because misalignment is the clearest signal of carelessness a viewer can pick up. It also produces the strong edges that let the eye run down a page quickly, and it makes white space read as deliberate rather than left over.",
      "how": [
        "Choose one alignment and commit; mixing centred and left-aligned text in one block always looks weak.",
        "Prefer left alignment for body text in English, since a hard left edge gives the eye a reliable return point.",
        "Align to optical edges, not bounding boxes: round shapes, quotation marks and italics need overhanging to look aligned.",
        "Turn on the outline view and look at edges alone, ignoring the content."
      ],
      "example": "A well-set invoice: descriptions on one left edge, quantities and money on one right edge, dates on another. You can find any figure without reading a word.",
      "numbers": "",
      "pitfall": "Aligning to the container rather than to the ink. A logo, a heading and a button can all be technically centred and still look wrong, because their visual masses sit differently inside their boxes.",
      "source": "Robin Williams, The Non-Designer's Design Book (Peachpit Press, 1994)",
      "verify": {
        "status": "verified",
        "note": "Alignment confirmed as one of Williams's four principles (proximity, alignment, repetition, contrast) from the Peachpit Press 1994 first-edition record. The quoted rule is her well-known formulation; I have not read the printed page this session, so treat the wording as close paraphrase."
      },
      "belongs": {
        "verdict": "core",
        "why": "One of the four principles in the most widely used introductory design book, and the single most reliable fix for a layout that looks unprofessional."
      },
      "related": [
        104,
        113,
        118,
        151,
        153
      ]
    },
    {
      "n": 118,
      "title": "Proximity (composition)",
      "aka": [
        "Proximity",
        "Closeness"
      ],
      "oneLine": "Putting related items close together and unrelated items further apart.",
      demo: {
        caption: "Same three labels and fields. On the right the gap inside a pair is small and the gap between pairs is large.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Every gap the same</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:14px\"><span class=\"db-note\">Name</span><span class=\"db-input\">&nbsp;</span><span class=\"db-note\">Email</span><span class=\"db-input\">&nbsp;</span><span class=\"db-note\">Postcode</span><span class=\"db-input\">&nbsp;</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Tight inside, loose between</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:26px\"><div class=\"db-col\" style=\"gap:4px\"><span class=\"db-note\">Name</span><span class=\"db-input\">&nbsp;</span></div><div class=\"db-col\" style=\"gap:4px\"><span class=\"db-note\">Email</span><span class=\"db-input\">&nbsp;</span></div><div class=\"db-col\" style=\"gap:4px\"><span class=\"db-note\">Postcode</span><span class=\"db-input\">&nbsp;</span></div></div></div></div></div>"
      },
      "what": "Proximity is the second of Robin Williams's four principles, and it is a design instruction rather than a perceptual law: items relating to each other should be grouped close together, so they become one visual unit instead of several. The perceptual law that makes it work is the Gestalt principle of proximity at entry 156. Distance is doing the work, so the gaps have to be designed as carefully as the elements.",
      "why": "Proximity is the cheapest grouping mechanism available and it adds nothing to the page. It also removes clutter, because when related items merge into blocks the number of things on the page drops sharply, even though nothing has been deleted.",
      "how": [
        "Put a form label right against its field and well away from the field above it.",
        "Make the gap between groups at least twice the gap within a group so the difference is unmistakable.",
        "Attach captions to their images, not to the body text they happen to sit beside.",
        "Count the visual units on the finished page; if there are more than a handful, tighten the groupings."
      ],
      "example": "A contact block on a business card: name, role and company tight together, then a clear gap, then phone and email tight together. Two units, six lines.",
      "numbers": "",
      "pitfall": "Even spacing everywhere. When every gap is the same, nothing is grouped, and the reader has to work out the relationships from the words alone.",
      "source": "Robin Williams, The Non-Designer's Design Book (Peachpit Press, 1994); Gestalt proximity at entry 156",
      "verify": {
        "status": "verified",
        "note": "Proximity confirmed as one of Williams's four principles from the Peachpit Press 1994 first-edition record. The Gestalt law of the same name is treated separately at master list entry 156; no date or study is claimed for it here. The rule about doubling the gap between groups is a working heuristic, not a measured threshold."
      },
      "belongs": {
        "verdict": "core",
        "why": "A named principle in the standard introductory text and a direct layout instruction, distinct from the perceptual law it relies on."
      },
      "related": [
        116,
        117,
        119,
        120,
        156
      ]
    },
    {
      "n": 119,
      "title": "White space (macro)",
      "aka": [
        "Macro whitespace",
        "Negative space at layout level"
      ],
      "oneLine": "The large empty areas between the major blocks of a composition.",
      demo: {
        caption: "The accent block is identical in both. Clearing space around it on the right is the only change, and it now leads.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Even gaps throughout</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-block db-block--accent\"></div><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Space cleared around one block</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-block db-block--accent\" style=\"margin:30px 0\"></div><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div>"
      },
      "what": "Mark Boulton drew the distinction in A List Apart in January 2007: macro white space is the space between major elements in a composition, while micro white space is the space between smaller elements such as list items, captions and words. He also separated active white space, deployed to emphasise or structure information, from passive white space, the background breathing room of margins and leading. Macro space is the one clients ask you to fill.",
      "why": "Generous space around a block raises its perceived importance without changing the block, so it is emphasis by isolation at page level. It also separates sections, which makes a long page navigable.",
      "how": [
        "Give the single most important element on a page more surrounding space than anything else.",
        "Set section gaps from the same scale as everything else so the emptiness looks measured.",
        "Resist filling space with a stock photo or a badge; the empty area is doing a job.",
        "Show the client the crowded version next to the spacious one rather than arguing in the abstract."
      ],
      "example": "GOV.UK service pages: one narrow column of content on a wide white field, large gaps between sections, nothing in the margins. It looks empty and it works.",
      "numbers": "",
      "pitfall": "The often-repeated claim that white space increases comprehension by almost 20 per cent, credited to Lin 2004, is a misattribution. Carl Myhill wrote to Lin, who replied that the paper \"has nothing to do with whitespace, not to mention the so-called increase of comprehension by 20%\". Argue for space on emphasis and separation, and never quote that number to a client.",
      "source": "Mark Boulton, Whitespace, A List Apart, 9 January 2007; Carl Myhill, No, Lin (2004) did not discover that margins and white space increase comprehension by 20%",
      "verify": {
        "status": "verified",
        "note": "Boulton's article read this session. It gives \"the space between major elements in a composition is macro whitespace\" and micro whitespace as \"the space between smaller elements: between list items, between a caption and an image, or between words and letters\", plus the active and passive distinction, published 9 January 2007. Myhill's piece was also read, and Lin's denial is quoted from it verbatim. I have not read Lin's original paper."
      },
      "belongs": {
        "verdict": "core",
        "why": "A named and sourced distinction that governs emphasis and section separation, and the design decision clients most often ask you to reverse."
      },
      "related": [
        93,
        118,
        120,
        121,
        149
      ]
    },
    {
      "n": 120,
      "title": "White space (micro)",
      "aka": [
        "Micro whitespace",
        "Micro-spacing"
      ],
      "oneLine": "The small gaps inside a design: letter spacing, word spacing, line spacing and padding.",
      demo: {
        caption: "Identical words and identical button both sides. Only the leading and the padding changed, and only the right reads comfortably.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Leading and padding left tight</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-type db-measure-narrow\" style=\"line-height:1.02\">Micro spacing is the gap between letters, between words, between lines, and the padding inside a control.</div><div><span class=\"db-btn\" style=\"padding:2px 5px\">Continue</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Leading and padding set</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-type db-measure-narrow\" style=\"line-height:1.6\">Micro spacing is the gap between letters, between words, between lines, and the padding inside a control.</div><div><span class=\"db-btn\" style=\"padding:10px 18px\">Continue</span></div></div></div></div></div>"
      },
      "what": "Micro white space is the space inside and immediately around small things. The gap between letters, between words, between lines of type, the padding inside a button, the distance from a label to the field it names. Macro white space is the big stuff: page margins and the gaps between whole blocks. The split is a teaching convention rather than a named law, and I could not find who first drew it. Micro spacing makes text legible; macro spacing makes a page navigable.",
      "why": "Get micro spacing wrong and everything feels cramped or loose, even on a perfect grid. Readers never notice good micro spacing; they only feel the drag of bad micro spacing. It is also the cheapest correction available, because a tight layout can usually be fixed with leading and padding before anything moves.",
      "how": [
        "Set line height according to line length: the longer the line, the more leading (space between lines) it needs.",
        "Give buttons and fields padding in proportion to their type size rather than one pixel value copied everywhere.",
        "Keep the gap between a label and its field smaller than the gap to the next field, so proximity does the grouping.",
        "Letterspace capitals and small capitals. Leave lowercase running text alone.",
        "Judge at final size on a real device, never zoomed in on the artboard."
      ],
      "example": "In a signup form, a label sitting 4px above its input and 24px below the previous input reads as one group. Equal 14px gaps everywhere make five fields look like ten unrelated objects.",
      "numbers": "No trustworthy published threshold exists. The claim that white space raises comprehension by almost 20 per cent cites Lin (2004), a study of 24 older adults reading Chinese hypertext that says nothing about white space; Lin himself has confirmed this. The misquote entered circulation through Galitz, The Essential Guide to User Interface Design (2007).",
      "pitfall": "Designers tune the big gaps on a wide artboard and never check the small ones at reading size, so the layout looks calm zoomed out and feels suffocating on a phone.",
      "source": "Macro and micro split: teaching convention, origin unclear. Nearest real evidence: Chaparro, Baker, Shaikh, Hull and Brady, Reading Online Text: A Comparison of Four White Space Layouts, Usability News 6(2), Wichita State University (2004).",
      "verify": {
        "status": "disputed",
        "note": "I checked the Chaparro et al. (2004) study, which found margins slowed reading slightly while improving comprehension, and that leading changed preference rather than performance. I also traced the famous 20 per cent claim through Carl Myhill's analysis back to Galitz (2007) mis-citing Lin (2004). The craft practice is sound; the statistic attached to it is not."
      },
      "belongs": {
        "verdict": "core",
        "why": "Small spacing decisions determine whether text can be read at all, and they are the part of layout that designers most often leave at the tool's default."
      },
      "related": [
        119,
        121,
        118
      ]
    },
    {
      "n": 121,
      "title": "Negative space",
      "aka": [
        "Positive and negative space",
        "Notan"
      ],
      "oneLine": "The shape of the emptiness around and inside a form, treated as a designed thing in its own right.",
      demo: {
        caption: "Same layout twice. Inking the emptiness on the right gives it a shape, including the trapped sliver down the middle.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">The blocks</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><rect class=\"f\" x=\"10\" y=\"10\" width=\"104\" height=\"48\"/><rect class=\"f\" x=\"118\" y=\"10\" width=\"72\" height=\"100\"/><rect class=\"f\" x=\"10\" y=\"68\" width=\"104\" height=\"42\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">The gaps, inked</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><path class=\"f-accent\" fill-rule=\"evenodd\" d=\"M0 0 H200 V120 H0 Z M10 10 H114 V58 H10 Z M118 10 H190 V110 H118 Z M10 68 H114 V110 H10 Z\"/></svg></div></div></div>"
      },
      "what": "Negative space is the area a positive shape leaves behind. It has its own outline, its own weight, and it can carry meaning. The Japanese term notan was brought to the United States by the art historian Ernest Fenollosa and popularised by his collaborator Arthur Wesley Dow in Composition (1899): the harmony produced by masses of light and dark read as flat shapes, positive and negative judged together rather than one after the other.",
      "why": "Looking at the gaps is the fastest way to find what is wrong with a composition, because clumsy negative shapes show up long before you can name the problem with the subject. In mark-making it also gives you a second channel of meaning at no extra cost.",
      "how": [
        "Squint at the layout, or reduce it to two tones, and look only at the gaps.",
        "Check that no two gaps are identical unless you meant them to be.",
        "In logo work, draw the enclosed white shapes as solid black and see whether they hold up on their own.",
        "Hunt for trapped white: a thin awkward sliver between two elements always reads as an error."
      ],
      "example": "The FedEx wordmark carries an arrow in the gap between the E and the x. Nothing draws it; the two letters do.",
      "numbers": "",
      "pitfall": "Chasing a hidden shape in a logo and ending up with a mark that only works once someone points the trick out.",
      "source": "Arthur Wesley Dow, Composition (1899), for notan, with the term introduced in the United States by Ernest Fenollosa; Edgar Rubin, Synsoplevede Figurer (1915), for figure and ground.",
      "verify": {
        "status": "verified",
        "note": "Confirmed Dow's Composition (1899) as the book that popularised notan in Western design teaching, and corrected an earlier draft that credited Dow with introducing it: Fenollosa is credited with bringing the term to the United States, and notan in this sense is described as an American reading of a Japanese word rather than a Japanese design doctrine. Rubin's 1915 Copenhagen thesis confirmed for the figure and ground pairing. The FedEx arrow is observable in the mark itself, so no attribution is needed."
      },
      "belongs": {
        "verdict": "core",
        "why": "Treating empty area as a shape rather than as leftover is one of the few habits that separates trained from untrained composition."
      },
      "related": [
        119,
        120,
        122
      ]
    },
    {
      "n": 122,
      "title": "Figure-ground relationship",
      "aka": [
        "Figure and ground",
        "Positive and negative"
      ],
      "oneLine": "Perception splits a scene into object and background, and the split can be controlled or deliberately made ambiguous.",
      demo: {
        caption: "Left: two regions of equal area share one edge, and the eye keeps swapping. Right: the small enclosed shape wins at once.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Equal areas, one shared edge</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><path class=\"f\" d=\"M0 0 H100 C130 30, 70 90, 100 120 H0 Z\"/><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">One region small and enclosed</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><path class=\"f\" d=\"M100 12 C130 42, 70 72, 100 102 C142 100, 166 56, 100 12 Z\"/><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/></svg></div></div></div>"
      },
      "what": "Faced with any visual field, the eye assigns some regions as figure, meaning an object that owns its outline, and the rest as ground, meaning a surface that carries on behind. Edgar Rubin set this out in his 1915 thesis Synsoplevede Figurer, along with the vase and faces image named after him. Regions that are smaller, enclosed or convex tend to win the figure role. The often-quoted lower-region cue comes from later experimental work, not from Rubin.",
      "why": "Every readable design depends on this happening cleanly and instantly. Where the split is ambiguous the viewer stalls, and on a road sign, a dashboard or a fire exit plan that stall costs something real. Where you want ambiguity, this is the lever that produces it.",
      "how": [
        "Give text enough contrast against its background that figure assignment is never in question.",
        "Do not set type over the busy part of a photograph. Darken it, blur it, or move the type.",
        "For a reversible reading, keep the two candidate shapes similar in area and both convex.",
        "Invert the image as a test. If the ground suddenly looks like the subject, you have either a problem or an opportunity."
      ],
      "example": "The Rubin vase: a single black shape reads as a goblet or as two facing profiles, and never as both at the same instant.",
      "numbers": "",
      "pitfall": "White text dropped onto a photograph that happens to be light in one corner. The figure-ground split holds in the mock-up and collapses on the real image.",
      "source": "Edgar Rubin, Synsoplevede Figurer (Copenhagen, 1915).",
      "verify": {
        "status": "verified",
        "note": "Confirmed the thesis title, place and 1915 date against citations of Rubin (1915) in the perception literature. I removed lower region from the list of Rubin's own factors, because that cue was established by later experiments rather than by the 1915 thesis."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "Rubin's finding belongs to perceptual psychology, and it is listed again as a Gestalt principle at entry 163. Its design use is exact, though: nothing on a page can be read until the eye has decided what is object and what is background, so this sits underneath legibility, contrast and layout alike."
      },
      "related": [
        121,
        148,
        163
      ]
    },
    {
      "n": 123,
      "title": "Layering",
      "aka": [
        "Layering and separation"
      ],
      "oneLine": "Sorting a dense display into visual planes so one set of marks sits clearly behind another.",
      demo: {
        caption: "Same bars, same rules. On the left the scaffolding is heavier than the data; on the right it drops behind.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Rules as loud as the data</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"f-mute\" x=\"14\" y=\"70\" width=\"22\" height=\"40\"/><rect class=\"f-mute\" x=\"44\" y=\"48\" width=\"22\" height=\"62\"/><rect class=\"f-mute\" x=\"74\" y=\"80\" width=\"22\" height=\"30\"/><rect class=\"f-mute\" x=\"104\" y=\"32\" width=\"22\" height=\"78\"/><rect class=\"f-mute\" x=\"134\" y=\"58\" width=\"22\" height=\"52\"/><rect class=\"f-mute\" x=\"164\" y=\"42\" width=\"22\" height=\"68\"/><path class=\"s\" d=\"M0 30 H200 M0 50 H200 M0 70 H200 M0 90 H200 M0 110 H200\"/><rect class=\"s\" x=\"0.75\" y=\"0.75\" width=\"198.5\" height=\"118.5\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Rules pushed back</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><path class=\"s-mute\" d=\"M0 30 H200 M0 50 H200 M0 70 H200 M0 90 H200 M0 110 H200\"/><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><rect class=\"f\" x=\"14\" y=\"70\" width=\"22\" height=\"40\"/><rect class=\"f\" x=\"44\" y=\"48\" width=\"22\" height=\"62\"/><rect class=\"f\" x=\"74\" y=\"80\" width=\"22\" height=\"30\"/><rect class=\"f\" x=\"104\" y=\"32\" width=\"22\" height=\"78\"/><rect class=\"f\" x=\"134\" y=\"58\" width=\"22\" height=\"52\"/><rect class=\"f\" x=\"164\" y=\"42\" width=\"22\" height=\"68\"/></svg></div></div></div>"
      },
      "what": "Layering means giving different classes of information different visual weight so they separate into planes instead of fighting on one flat surface. Edward Tufte gives a chapter of Envisioning Information (1990) to layering and separation, and his working rule is to use the smallest visual difference that still does the job. He credits Josef Albers with the shorthand 1 + 1 = 3: put two lines close together and you have also made a third thing, the gap between them.",
      "why": "Dense information does not have to be noisy. Layering lets you keep every mark on the page while telling the reader which marks are the subject and which are scaffolding holding it up.",
      "how": [
        "Push grids, rules and axes down in contrast until they are the faintest thing that still works.",
        "Separate by weight and value before reaching for colour.",
        "Count the layers you did not intend. Every gap, every alignment edge and every rule adds one.",
        "Test in greyscale, because colour hides layering failures."
      ],
      "example": "A well-set railway timetable, where hairline rules sit in pale grey behind black departure times.",
      "numbers": "",
      "pitfall": "Trying to add a layer by adding a box. Boxes are heavy, and three nested boxes generate more visual noise than the content they were drawn to organise.",
      "source": "Edward Tufte, Envisioning Information (1990), chapter on layering and separation; the 1 + 1 = 3 formulation credited by Tufte to Josef Albers.",
      "verify": {
        "status": "verified",
        "note": "Confirmed the book, the 1990 date, the chapter title and Tufte's attribution of 1 + 1 = 3 to Albers across several independent summaries of that chapter. I did not read the printed page itself, so I have quoted nothing from it."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the main tool for handling density, which is the normal condition of dashboards, timetables, maps and financial documents."
      },
      "related": [
        124,
        125,
        97
      ]
    },
    {
      "n": 124,
      "title": "Overlap",
      "aka": [
        "Interposition"
      ],
      "oneLine": "Letting one element cover part of another to bind the two together and set their order in depth.",
      demo: {
        caption: "The same two shapes. Overlapping them binds the pair into one group and fixes which one is in front.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Placed apart</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"f-mute\" x=\"26\" y=\"31\" width=\"58\" height=\"58\"/><rect class=\"f\" x=\"116\" y=\"31\" width=\"58\" height=\"58\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Overlapped</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"f-mute\" x=\"42\" y=\"20\" width=\"58\" height=\"58\"/><rect class=\"f\" x=\"82\" y=\"42\" width=\"58\" height=\"58\"/></svg></div></div></div>"
      },
      "what": "Overlap is placing one shape partly over another on purpose. It does two jobs at once. It says which element is in front, and it locks the pair into a single group rather than two things sitting near each other. Unlike perspective or shading it carries no distance information; it only gives you order.",
      "why": "Overlap is the cheapest way to make a flat layout feel assembled rather than scattered. It also breaks a grid without abandoning it, which is why editorial design uses it so heavily.",
      "how": [
        "Overlap by a decent amount. A two-millimetre overlap reads as a registration error.",
        "Keep the front element unambiguously in front, with a shadow, a knockout edge, or enough tonal difference.",
        "Never overlap the part of an image that carries the subject.",
        "Use overlap to tie a caption, price flash or badge to its photograph instead of floating it nearby."
      ],
      "example": "A magazine cover where the masthead runs behind the model's head, so type and photograph read as one plane.",
      "numbers": "",
      "pitfall": "Overlapping type onto a photograph at a point where the tone shifts, so half a word vanishes into the background.",
      "source": "Standard compositional device with no single originator. Perceptually it is the occlusion depth cue.",
      "verify": {
        "status": "verified",
        "note": "Confirmed occlusion and interposition as a standard pictorial depth cue in the perception literature. I looked for an originating text for overlap as a compositional device and found none, so I claim none."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the simplest move available for creating depth and for grouping, and it works in print, on screen and in physical objects."
      },
      "related": [
        126,
        123,
        116
      ]
    },
    {
      "n": 125,
      "title": "Transparency",
      "aka": [
        "Literal transparency",
        "Phenomenal transparency"
      ],
      "oneLine": "Layers you can see through, either physically or by implying two readings of one shape.",
      demo: {
        caption: "Left, a real tint over a solid. Right, nothing is transparent, yet the shared region belongs to both shapes.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Literal: a tint over a solid</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"f\" x=\"26\" y=\"22\" width=\"86\" height=\"66\"/><rect class=\"f-accent\" fill-opacity=\"0.5\" x=\"82\" y=\"52\" width=\"86\" height=\"50\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Phenomenal: neither is in front</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s\" x=\"26\" y=\"22\" width=\"86\" height=\"66\"/><rect class=\"s\" x=\"82\" y=\"52\" width=\"86\" height=\"50\"/></svg></div></div></div>"
      },
      "what": "Colin Rowe and Robert Slutzky split transparency in two in an essay written in the mid-1950s and published as Transparency: Literal and Phenomenal in Perspecta 8 (1963), with a second part in 1971. Literal transparency is a material fact: glass, a tint, an alpha value. Phenomenal transparency is organisational: shapes overlap so that the shared region can be read as belonging to either, and the viewer holds both readings at once. Cubist painting was their main exhibit.",
      "why": "Literal transparency gives depth without hiding anything underneath. Phenomenal transparency gives a layout an ambiguity that keeps the eye working, which is what you want when a composition should feel considered rather than obvious.",
      "how": [
        "Use a tint rather than a solid when a panel has to sit over an image that still matters.",
        "Keep overlay opacity consistent across a system, or the tints read as accidents.",
        "For phenomenal transparency, align the overlap edges to shared grid lines so both readings stay plausible.",
        "Check text contrast after the tint is applied, not before."
      ],
      "example": "A frosted navigation bar over a photographic hero, where the picture stays legible through the bar and the links stay legible over the picture.",
      "numbers": "",
      "pitfall": "Stacking several semi-transparent layers. The final colour becomes unpredictable and text contrast fails in patches you did not anticipate.",
      "source": "Colin Rowe and Robert Slutzky, Transparency: Literal and Phenomenal, Perspecta 8 (1963); part two in Perspecta 13/14 (1971); collected as a book by Birkhauser (1997).",
      "verify": {
        "status": "verified",
        "note": "Confirmed the authorship, the two-part publication in Perspecta, the 1997 Birkhauser edition and the literal versus phenomenal distinction. The essay was written in 1955 or 1956 while both men taught at Texas and published in 1963."
      },
      "belongs": {
        "verdict": "core",
        "why": "Both meanings are in daily use: alpha compositing on every screen, and the layered ambiguity that gives modernist layouts their depth."
      },
      "related": [
        124,
        123,
        126
      ]
    },
    {
      "n": 126,
      "title": "Occlusion",
      "aka": [
        "Interposition",
        "Hidden surface"
      ],
      "oneLine": "One thing hides part of another, which fixes their order in depth without saying anything about distance.",
      demo: {
        caption: "Only the header's fill changed. On the right the clean cut edge tells you which surface is in front.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Header part-transparent</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"f-mute\" x=\"12\" y=\"8\" width=\"176\" height=\"6\"/><rect class=\"f-mute\" x=\"12\" y=\"22\" width=\"160\" height=\"6\"/><rect class=\"f-mute\" x=\"12\" y=\"36\" width=\"176\" height=\"6\"/><rect class=\"f-mute\" x=\"12\" y=\"50\" width=\"150\" height=\"6\"/><rect class=\"f-mute\" x=\"12\" y=\"64\" width=\"176\" height=\"6\"/><rect class=\"f-mute\" x=\"12\" y=\"78\" width=\"132\" height=\"6\"/><rect class=\"f-mute\" x=\"12\" y=\"92\" width=\"168\" height=\"6\"/><rect class=\"f-mute\" x=\"12\" y=\"106\" width=\"96\" height=\"6\"/><rect class=\"f\" fill-opacity=\"0.22\" x=\"0\" y=\"0\" width=\"200\" height=\"28\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Header opaque</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"f-mute\" x=\"12\" y=\"8\" width=\"176\" height=\"6\"/><rect class=\"f-mute\" x=\"12\" y=\"22\" width=\"160\" height=\"6\"/><rect class=\"f-mute\" x=\"12\" y=\"36\" width=\"176\" height=\"6\"/><rect class=\"f-mute\" x=\"12\" y=\"50\" width=\"150\" height=\"6\"/><rect class=\"f-mute\" x=\"12\" y=\"64\" width=\"176\" height=\"6\"/><rect class=\"f-mute\" x=\"12\" y=\"78\" width=\"132\" height=\"6\"/><rect class=\"f-mute\" x=\"12\" y=\"92\" width=\"168\" height=\"6\"/><rect class=\"f-mute\" x=\"12\" y=\"106\" width=\"96\" height=\"6\"/><rect class=\"f\" x=\"0\" y=\"0\" width=\"200\" height=\"28\"/></svg></div></div></div>"
      },
      "what": "Occlusion is the perceptual side of overlap. When one surface blocks part of another, the visual system reads the blocked surface as further away. It is the most dependable depth cue there is, surviving when colour, shading and perspective all fail. It is also purely ordinal: it tells you A is in front of B and nothing at all about how far apart they are.",
      "why": "Interfaces run on occlusion. Modals, drawers, dropdowns, stacked cards and tooltips all use it to say which surface is live. Get the stacking order wrong and an interface feels broken before anyone can explain why.",
      "how": [
        "Make one stacking order the truth: shadow, scrim and lift should all agree with each other.",
        "Never let two panels partly cover each other in different places. Pick one to be on top.",
        "Give occluding edges a clean cut. A soft half-transparent edge weakens the cue.",
        "Use partial occlusion deliberately, such as a card peeping out from behind another, to signal that more content exists sideways."
      ],
      "example": "A carousel that shows a sliver of the next card behind the current one. The sliver is the entire message.",
      "numbers": "",
      "pitfall": "A sticky header with no shadow and no background colour: content scrolls underneath, the occlusion cue is ambiguous, and the page looks like it is glitching.",
      "source": "Standard pictorial depth cue in vision science; no single originator.",
      "verify": {
        "status": "verified",
        "note": "Confirmed occlusion and interposition as a standard depth cue in the perception literature. I note openly that this duplicates entry 194 in the depth cues section rather than pretending they are different things."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "The finding belongs to vision science, but its design use is exact and unavoidable: it is what makes stacking order, shadows and modal surfaces legible on screen."
      },
      "related": [
        124,
        123,
        194
      ]
    },
    {
      "n": 127,
      "title": "Perspective",
      "aka": [
        "Linear perspective"
      ],
      "oneLine": "A geometric construction that puts a three-dimensional scene on a flat surface as an eye would see it.",
      demo: {
        caption: "Only the horizon moved. On the left you look down onto the box; on the right you look up at it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Horizon high</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><path class=\"s-mute\" d=\"M0 10 H200\"/><path class=\"s-mute\" d=\"M115 40 L165 10 M115 80 L165 10 M45 40 L165 10\"/><circle class=\"f-accent\" cx=\"165\" cy=\"10\" r=\"3\"/><path class=\"s\" d=\"M45 40 L115 40 L132.5 29.5 L87 29.5 Z\"/><path class=\"s\" d=\"M115 40 L132.5 29.5 L132.5 55.5 L115 80 Z\"/><rect class=\"s\" x=\"45\" y=\"40\" width=\"70\" height=\"40\"/><text class=\"t\" x=\"2\" y=\"7\">HORIZON</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Horizon low</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><path class=\"s-mute\" d=\"M0 110 H200\"/><path class=\"s-mute\" d=\"M115 40 L165 110 M115 80 L165 110 M45 80 L165 110\"/><circle class=\"f-accent\" cx=\"165\" cy=\"110\" r=\"3\"/><path class=\"s\" d=\"M45 80 L115 80 L132.5 90.5 L87 90.5 Z\"/><path class=\"s\" d=\"M115 40 L132.5 64.5 L132.5 90.5 L115 80 Z\"/><rect class=\"s\" x=\"45\" y=\"40\" width=\"70\" height=\"40\"/><text class=\"t\" x=\"2\" y=\"119\">HORIZON</text></svg></div></div></div>"
      },
      "what": "Linear perspective makes parallel edges converge on vanishing points and objects shrink with distance, according to a rule rather than a guess. Filippo Brunelleschi demonstrated it in Florence in the early fifteenth century, and Leon Battista Alberti wrote the first surviving account of the construction in De pictura, composed in Latin in 1435. The system needs three things fixed: a viewpoint, a picture plane and a horizon at the viewer's eye level.",
      "why": "Perspective gives a picture a viewer. The moment you set the horizon and the vanishing point you have decided where the person stands, whether they look up at the subject or down on it, and how much of the world they are allowed to see.",
      "how": [
        "Set the horizon height first. It decides whether the viewer feels below, level with or above the subject.",
        "Keep one vanishing point per set of parallel edges and hold to it.",
        "For product and interface illustration, choose isometric or two-point deliberately. Mixing the two looks like a mistake.",
        "Match any photograph you composite in to the horizon of the drawing."
      ],
      "example": "Masaccio's Holy Trinity in Santa Maria Novella, Florence, whose painted vault recedes to a single vanishing point set at the standing viewer's eye level.",
      "numbers": "",
      "pitfall": "Drawing devices and furniture in careful perspective while the type on their screens stays flat and front-on.",
      "source": "Filippo Brunelleschi's demonstration, early fifteenth century; Leon Battista Alberti, De pictura (1435).",
      "verify": {
        "status": "verified",
        "note": "Confirmed that De pictura was composed in Latin in 1435, and that Brunelleschi, Alberti and Masaccio are the documented figures in the development of linear perspective."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the foundation of every representational image and of the isometric and axonometric drawing that product and interface work still relies on."
      },
      "related": [
        128,
        129,
        196
      ]
    },
    {
      "n": 128,
      "title": "Foreshortening",
      "aka": [],
      "oneLine": "Dimensions pointing towards the viewer compress, so a long thing seen end-on looks short.",
      demo: {
        caption: "One disc, tipped away in four steps. The width across your view holds; the depth towards you collapses.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 96\"><ellipse class=\"s\" cx=\"45\" cy=\"48\" rx=\"28\" ry=\"28\"/><ellipse class=\"s\" cx=\"125\" cy=\"48\" rx=\"28\" ry=\"18\"/><ellipse class=\"s\" cx=\"205\" cy=\"48\" rx=\"28\" ry=\"9\"/><ellipse class=\"s\" cx=\"285\" cy=\"48\" rx=\"28\" ry=\"2\"/><path class=\"s-accent\" d=\"M17 82 H73 M97 82 H153 M177 82 H233 M257 82 H313\"/><text class=\"t\" x=\"17\" y=\"94\">WIDTH UNCHANGED</text></svg></div>"
      },
      "what": "Foreshortening is what perspective does along the line of sight. An object's dimensions parallel to that line appear shorter than its dimensions across it. An arm pointing at the camera takes up almost no length on the page while its hand grows large. It is the same geometry as perspective, described from the object's point of view rather than the scene's.",
      "why": "It is the strongest way to pull something out of a picture towards the viewer. It is also the thing most often drawn wrong, because the hand knows how long an arm is and overrules the eye.",
      "how": [
        "Measure with a held-up pencil or a rectangle on screen, and draw the length you can see rather than the length you know.",
        "Break the form into cross-sections and stack them. The spacing between sections carries the compression.",
        "Push the near-end scale difference harder than feels comfortable.",
        "In photography, remember it is the camera-to-subject distance that governs foreshortening: shooting from far back with a long lens flattens it, moving in close with a wide lens exaggerates it."
      ],
      "example": "Mantegna's Lamentation of Christ in the Brera, Milan, viewed from the soles of the feet, where the whole body compresses into almost nothing.",
      "numbers": "",
      "pitfall": "Correct foreshortening on a figure and none at all on the object it is holding, which snaps the illusion instantly.",
      "source": "Described as part of linear perspective; Leon Battista Alberti, De pictura (1435).",
      "verify": {
        "status": "verified",
        "note": "The definition matches the standard account of linear perspective, in which dimensions parallel to the line of sight appear shorter than those perpendicular to it. I corrected the lens advice: focal length does not change foreshortening on its own, viewing distance does, and the familiar long-lens and wide-lens effects follow from the distance each is normally used at."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a drawing fundamental, and it explains the lens choices that change how a product or a face reads in a photograph."
      },
      "related": [
        127,
        129,
        195
      ]
    },
    {
      "n": 129,
      "title": "Scale shift",
      "aka": [
        "Scale contrast",
        "Scale jump"
      ],
      "oneLine": "A deliberate jump between very large and very small elements inside one composition.",
      demo: {
        caption: "The headline is identical in both. On the left everything else grew with it, so the jump never registers.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Everything grew</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"f\" x=\"12\" y=\"16\" width=\"170\" height=\"18\"/><rect class=\"f\" x=\"12\" y=\"40\" width=\"120\" height=\"18\"/><rect class=\"f-mute\" x=\"12\" y=\"74\" width=\"176\" height=\"11\"/><rect class=\"f-mute\" x=\"12\" y=\"90\" width=\"176\" height=\"11\"/><rect class=\"f-mute\" x=\"12\" y=\"106\" width=\"110\" height=\"11\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One thing grew</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"f\" x=\"12\" y=\"16\" width=\"170\" height=\"18\"/><rect class=\"f\" x=\"12\" y=\"40\" width=\"120\" height=\"18\"/><rect class=\"f-mute\" x=\"12\" y=\"76\" width=\"176\" height=\"4\"/><rect class=\"f-mute\" x=\"12\" y=\"85\" width=\"176\" height=\"4\"/><rect class=\"f-mute\" x=\"12\" y=\"94\" width=\"176\" height=\"4\"/><rect class=\"f-mute\" x=\"12\" y=\"103\" width=\"176\" height=\"4\"/><rect class=\"f-mute\" x=\"12\" y=\"112\" width=\"110\" height=\"4\"/></svg></div></div></div>"
      },
      "what": "Scale shift is size contrast used hard. Instead of a smooth ladder of sizes you put something huge beside something tiny and let the gap carry the meaning. It creates hierarchy immediately, it suggests depth, and it stops a layout from looking like a spreadsheet of near-equal boxes.",
      "why": "Small size differences read as indecision, while a large jump reads as a decision. Scale shift also makes thin material go a long way, because one headline set enormous can carry a page that has almost nothing else on it.",
      "how": [
        "If two things should differ in importance, make the difference obvious. Timid steps look like errors.",
        "Build a type scale with real gaps in it rather than one-point increments.",
        "Let the largest element cross a structural line or run off the edge, so the jump registers as intentional.",
        "Keep the small elements genuinely small but still readable. Shrinking body text below comfort is not scale shift, it is damage."
      ],
      "example": "A broadsheet front page where the splash headline runs at several times the depth of the body text underneath it.",
      "numbers": "",
      "pitfall": "Scaling everything up together, so the page becomes loud and flat at the same time. The shift only registers if something stays quiet.",
      "source": "Standard compositional device; no single originator.",
      "verify": {
        "status": "verified",
        "note": "Treated as craft convention. I looked for a named originator and found none, so I have not invented an attribution."
      },
      "belongs": {
        "verdict": "core",
        "why": "Size is the first thing perceived and the cheapest hierarchy control a designer has, in print and on screen alike."
      },
      "related": [
        99,
        97,
        93
      ]
    },
    {
      "n": 130,
      "title": "Juxtaposition",
      "aka": [
        "Montage",
        "Pairing"
      ],
      "oneLine": "Putting two things side by side so the pair says something neither says alone.",
      demo: {
        caption: "The middle mark is identical on both sides. Its neighbours decide whether you read a letter or a number.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Between A and C</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 88\"><text class=\"f\" x=\"45\" y=\"70\" font-size=\"44\" text-anchor=\"middle\">A</text><g transform=\"translate(82,38) scale(0.5)\"><path class=\"f\" d=\"M0 0 H6 V64 H0 Z\"/><path class=\"f\" d=\"M9 0 H15 C34 0 34 31 15 31 H9 V24 H15 C24 24 24 7 15 7 H9 Z\"/><path class=\"f\" d=\"M9 33 H15 C34 33 34 64 15 64 H9 V57 H15 C24 57 24 40 15 40 H9 Z\"/></g><text class=\"f\" x=\"140\" y=\"70\" font-size=\"44\" text-anchor=\"middle\">C</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Between 12 and 14</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 88\"><text class=\"f\" x=\"45\" y=\"70\" font-size=\"44\" text-anchor=\"middle\">12</text><g transform=\"translate(82,38) scale(0.5)\"><path class=\"f\" d=\"M0 0 H6 V64 H0 Z\"/><path class=\"f\" d=\"M9 0 H15 C34 0 34 31 15 31 H9 V24 H15 C24 24 24 7 15 7 H9 Z\"/><path class=\"f\" d=\"M9 33 H15 C34 33 34 64 15 64 H9 V57 H15 C24 57 24 40 15 40 H9 Z\"/></g><text class=\"f\" x=\"140\" y=\"70\" font-size=\"44\" text-anchor=\"middle\">14</text></svg></div></div></div>"
      },
      "what": "Juxtaposition is placement used as an argument. Two images next to each other invite comparison, and viewers will supply a relationship whether or not one exists. Soviet film-makers built a theory on it: Lev Kuleshov's editing experiments in the 1910s and 1920s, then Sergei Eisenstein's montage, both claim the cut between two shots creates meaning present in neither shot. The replication record for the strong version is mixed, so treat that part as a claim rather than a settled fact.",
      "why": "In design it does the work of a sentence without writing one. Before and after, ours and theirs, problem and product: the reader draws the conclusion, which persuades better than being told.",
      "how": [
        "Match everything except the variable you want compared. Same crop, same light, same size.",
        "Place the pair close enough to read as one unit and far enough from everything else to stay separate.",
        "Mind the order. The second item reads as the conclusion.",
        "Audit accidental pairings. Check what sits next to what on every spread and every scroll position."
      ],
      "example": "A charity appeal running a before and after photograph at identical size and crop, so only the change is visible.",
      "numbers": "",
      "pitfall": "Unplanned juxtaposition. A holiday advertisement placed beside a report of a crash produces a meaning nobody chose and everybody sees.",
      "source": "Lev Kuleshov's editing experiments (1910s and 1920s); Sergei Eisenstein on montage.",
      "verify": {
        "status": "disputed",
        "note": "The Kuleshov effect is contested. Prince and Hensley's 1992 replication in Cinema Journal failed to reproduce it, with most participants reading no emotion from the actor. Later work by Mobbs and colleagues (2006, fMRI) and Calbi and colleagues (2019, EEG) reported effects. Juxtaposition as a compositional device is not in question; the strong claim about attributed emotion is."
      },
      "belongs": {
        "verdict": "core",
        "why": "Deciding what sits next to what is a compositional decision designers make constantly, and it changes meaning whether or not they intend it."
      },
      "related": [
        97,
        116,
        145
      ]
    },
    {
      "n": 131,
      "title": "Modularity",
      "aka": [
        "Modular system",
        "Component system"
      ],
      "oneLine": "Building a design out of a repeated unit that combines in a fixed, small set of ways.",
      demo: {
        caption: "One module and one gutter, three layouts. Nothing new was drawn; different fields were filled.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 96\"><rect class=\"s-mute\" x=\"0.5\" y=\"4.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"24.5\" y=\"4.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"48.5\" y=\"4.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"72.5\" y=\"4.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"0.5\" y=\"28.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"24.5\" y=\"28.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"48.5\" y=\"28.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"72.5\" y=\"28.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"0.5\" y=\"52.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"24.5\" y=\"52.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"48.5\" y=\"52.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"72.5\" y=\"52.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"0.5\" y=\"76.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"24.5\" y=\"76.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"48.5\" y=\"76.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"72.5\" y=\"76.5\" width=\"19\" height=\"19\"/><rect class=\"f\" x=\"0\" y=\"4\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"24\" y=\"4\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"48\" y=\"4\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"72\" y=\"4\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"0\" y=\"52\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"24\" y=\"52\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"0\" y=\"76\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"24\" y=\"76\" width=\"20\" height=\"20\"/><rect class=\"s-mute\" x=\"114.5\" y=\"4.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"138.5\" y=\"4.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"162.5\" y=\"4.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"186.5\" y=\"4.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"114.5\" y=\"28.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"138.5\" y=\"28.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"162.5\" y=\"28.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"186.5\" y=\"28.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"114.5\" y=\"52.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"138.5\" y=\"52.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"162.5\" y=\"52.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"186.5\" y=\"52.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"114.5\" y=\"76.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"138.5\" y=\"76.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"162.5\" y=\"76.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"186.5\" y=\"76.5\" width=\"19\" height=\"19\"/><rect class=\"f\" x=\"114\" y=\"4\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"114\" y=\"28\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"114\" y=\"52\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"114\" y=\"76\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"138\" y=\"76\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"162\" y=\"76\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"186\" y=\"76\" width=\"20\" height=\"20\"/><rect class=\"s-mute\" x=\"228.5\" y=\"4.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"252.5\" y=\"4.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"276.5\" y=\"4.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"300.5\" y=\"4.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"228.5\" y=\"28.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"252.5\" y=\"28.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"276.5\" y=\"28.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"300.5\" y=\"28.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"228.5\" y=\"52.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"252.5\" y=\"52.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"276.5\" y=\"52.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"300.5\" y=\"52.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"228.5\" y=\"76.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"252.5\" y=\"76.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"276.5\" y=\"76.5\" width=\"19\" height=\"19\"/><rect class=\"s-mute\" x=\"300.5\" y=\"76.5\" width=\"19\" height=\"19\"/><rect class=\"f\" x=\"228\" y=\"4\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"252\" y=\"4\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"228\" y=\"28\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"252\" y=\"28\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"300\" y=\"4\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"300\" y=\"52\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"228\" y=\"76\" width=\"20\" height=\"20\"/><rect class=\"f\" x=\"276\" y=\"76\" width=\"20\" height=\"20\"/></svg></div>"
      },
      "what": "Modularity means fixing a small set of building blocks plus a rule for how they fit, then making everything from those. In print the module is a grid field and the layout is a choice of which fields to fill. Josef Muller-Brockmann's Grid Systems in Graphic Design, published bilingually by Verlag Arthur Niggli in 1981, is the standard statement of the method. In digital work the same logic produces component libraries and design systems.",
      "why": "Modularity buys consistency without a fresh decision every time, and it lets several people work on one thing without it falling apart. It also lets a system grow, because new content finds a slot instead of forcing a redesign.",
      "how": [
        "Define the module and the gutter before placing anything at all.",
        "Keep the number of allowed combinations small enough that people can hold them in their heads.",
        "Design the awkward cases early: the long title, the missing image, the single item, the twelfth item.",
        "Break the module deliberately once in a document, not casually throughout it."
      ],
      "example": "Swiss concert posters of the 1950s and 1960s built on strict field grids, and the component libraries that now do the same job in software.",
      "numbers": "",
      "pitfall": "The module becomes a cage. Every page looks identical and content that does not fit gets cut to suit the grid rather than the reader.",
      "source": "Josef Muller-Brockmann, Grid Systems in Graphic Design / Rastersysteme fur die visuelle Gestaltung (Verlag Arthur Niggli, 1981).",
      "verify": {
        "status": "verified",
        "note": "Confirmed the 1981 Niggli publication and the bilingual German and English title through the publisher's own listing."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the organising idea behind grids, design systems and every piece of work that has to be produced repeatedly by more than one person."
      },
      "related": [
        104,
        117,
        132
      ]
    },
    {
      "n": 132,
      "title": "Translation, rotation, reflection, glide (symmetry operations)",
      "aka": [
        "Plane isometries",
        "Wallpaper symmetries"
      ],
      "oneLine": "The four moves that repeat a shape without changing it: slide, turn, mirror, and mirror-then-slide.",
      demo: {
        caption: "One L shape, four moves: slid, turned, mirrored, and mirrored then slid along the dashed line.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 96\"><text class=\"t\" x=\"0\" y=\"10\">TRANSLATION</text><text class=\"t\" x=\"82\" y=\"10\">ROTATION</text><text class=\"t\" x=\"164\" y=\"10\">REFLECTION</text><text class=\"t\" x=\"246\" y=\"10\">GLIDE</text><g transform=\"translate(8,32)\"><path class=\"f\" d=\"M0 0 H6 V24 H18 V30 H0 Z\"/></g><g transform=\"translate(40,32)\"><path class=\"f\" d=\"M0 0 H6 V24 H18 V30 H0 Z\"/></g><g transform=\"translate(90,32)\"><path class=\"f\" d=\"M0 0 H6 V24 H18 V30 H0 Z\"/></g><g transform=\"translate(122,32) rotate(180,9,15)\"><path class=\"f\" d=\"M0 0 H6 V24 H18 V30 H0 Z\"/></g><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M204 22 V72\"/><g transform=\"translate(172,32)\"><path class=\"f\" d=\"M0 0 H6 V24 H18 V30 H0 Z\"/></g><g transform=\"translate(236,32) scale(-1,1)\"><path class=\"f\" d=\"M0 0 H6 V24 H18 V30 H0 Z\"/></g><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M286 10 V92\"/><g transform=\"translate(254,16)\"><path class=\"f\" d=\"M0 0 H6 V24 H18 V30 H0 Z\"/></g><g transform=\"translate(318,52) scale(-1,1)\"><path class=\"f\" d=\"M0 0 H6 V24 H18 V30 H0 Z\"/></g></svg></div>"
      },
      "what": "Any repeating pattern in the plane is built from four operations: translation (slide), rotation (turn about a point), reflection (mirror across a line) and glide reflection (mirror, then slide along that same line). Combine them under the requirement that the pattern repeats in two directions and there are exactly seventeen possible groups. Evgraf Fedorov proved that in 1891 and George Polya derived it independently in 1924. Only rotations of order 2, 3, 4 and 6 can occur, which is why a fivefold repeat will not tile.",
      "why": "If you make patterns, this is the complete list of available moves, so you can choose rather than fiddle. It also explains why a repeat feels dead or alive: plain translation is inert, while glide reflection almost always reads as movement.",
      "how": [
        "Name the operation you are using before you start repeating anything.",
        "Try glide reflection when a straight repeat looks mechanical.",
        "Check the tile edges. The repeat has to work across the seam, not just inside the tile.",
        "Exempt text and logos. Mirroring them is a reflection and it will look wrong."
      ],
      "example": "William Morris wallpapers, and M. C. Escher's periodic drawings, which he began after studying the tilework at the Alhambra.",
      "numbers": "Seventeen wallpaper groups. Rotations are limited to orders 2, 3, 4 and 6 by the crystallographic restriction.",
      "pitfall": "A pattern built by plain translation of a busy tile produces diagonal tracking lines that you cannot stop seeing once you have noticed them.",
      "source": "Plane symmetry groups: Evgraf Fedorov (1891), derived independently by George Polya (1924).",
      "verify": {
        "status": "verified",
        "note": "Confirmed the four isometries, the count of seventeen groups, the Fedorov 1891 and Polya 1924 attributions and the permitted rotation orders against the standard mathematical description of wallpaper groups."
      },
      "belongs": {
        "verdict": "core",
        "why": "The four operations are the working vocabulary of repeat, pattern and surface design. The seventeen-group classification is borrowed mathematics, and this entry says so rather than dressing it up as design theory."
      },
      "related": [
        104,
        105,
        164
      ]
    },
    {
      "n": 133,
      "title": "Static versus dynamic composition",
      "aka": [
        "Stable and unstable composition"
      ],
      "oneLine": "Horizontals and verticals settle a composition; diagonals and unequal weights set it moving.",
      demo: {
        caption: "Same four bars. Square to the frame at equal intervals they settle; tilted and unevenly spaced they move.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Square to the frame, equal intervals</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><rect class=\"f\" x=\"45\" y=\"20\" width=\"110\" height=\"10\"/><rect class=\"f\" x=\"45\" y=\"44\" width=\"110\" height=\"10\"/><rect class=\"f\" x=\"45\" y=\"68\" width=\"110\" height=\"10\"/><rect class=\"f\" x=\"45\" y=\"92\" width=\"110\" height=\"10\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Tilted, intervals uneven</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><g transform=\"rotate(-10,100,60)\"><rect class=\"f\" x=\"20\" y=\"18\" width=\"110\" height=\"10\"/><rect class=\"f\" x=\"44\" y=\"36\" width=\"110\" height=\"10\"/><rect class=\"f\" x=\"30\" y=\"66\" width=\"110\" height=\"10\"/><rect class=\"f\" x=\"58\" y=\"92\" width=\"110\" height=\"10\"/></g></svg></div></div></div>"
      },
      "what": "A composition built on lines parallel to the frame reads as stable, because nothing is arguing with the edges. Introduce diagonals, off-centre weight or uneven intervals and the same elements read as being in motion. Rudolf Arnheim worked this out in perceptual terms in Art and Visual Perception (1954, revised 1974) and again in The Power of the Center (1982), where the frame's centre behaves as a real force that elements either obey or pull against.",
      "why": "This is the dial between calm and urgent, and it operates before a single word is read. A law firm's stationery and a sportswear poster can use the same typeface and differ almost entirely on this one setting.",
      "how": [
        "Decide which of the two you want, then check every major element against that decision.",
        "For stillness: align to the frame, keep intervals even, consider symmetry.",
        "For movement: tilt something, push the weight off centre, vary the intervals.",
        "Do not go half way. A five-degree tilt reads as a printing fault rather than as energy."
      ],
      "example": "A passport page and a skateboard graphic. Similar information, opposite settings on this dial.",
      "numbers": "",
      "pitfall": "Adding energy late by rotating one element on an otherwise static grid, which reads as an accident rather than a decision.",
      "source": "Rudolf Arnheim, Art and Visual Perception (1954, revised 1974) and The Power of the Center (1982).",
      "verify": {
        "status": "verified",
        "note": "Confirmed both Arnheim titles and their dates, and that The Power of the Center is organised around centric and eccentric forces acting within the frame."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the single control that sets the emotional temperature of a layout, and it is decided by geometry rather than by content."
      },
      "related": [
        134,
        89,
        111
      ]
    },
    {
      "n": 134,
      "title": "The diagonal",
      "aka": [
        "Oblique",
        "Diagonal armature"
      ],
      "oneLine": "A line running against the frame's own edges, which is why it reads as movement or tension.",
      demo: {
        caption: "On the right all three bars repeat the frame's own corner-to-corner angle. On the left each angle is its own.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Three unrelated angles</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><rect class=\"f\" x=\"23.0\" y=\"24.0\" width=\"70\" height=\"12\" transform=\"rotate(-9,58.0,30.0)\"/><rect class=\"f\" x=\"100.0\" y=\"60.0\" width=\"70\" height=\"12\" transform=\"rotate(24,135.0,66.0)\"/><rect class=\"f\" x=\"31.0\" y=\"84.0\" width=\"70\" height=\"12\" transform=\"rotate(-44,66.0,90.0)\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One angle: the frame's own diagonal</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M0 120 L200 0\"/><rect class=\"f\" x=\"49.5\" y=\"28.3\" width=\"70\" height=\"12\" transform=\"rotate(-31,84.5,34.3)\"/><rect class=\"f\" x=\"65.0\" y=\"54.0\" width=\"70\" height=\"12\" transform=\"rotate(-31,100.0,60.0)\"/><rect class=\"f\" x=\"80.5\" y=\"79.7\" width=\"70\" height=\"12\" transform=\"rotate(-31,115.5,85.7)\"/></svg></div></div></div>"
      },
      "what": "A rectangular frame gives you two directions free of charge: horizontal and vertical. Any other angle stands in opposition to the frame, and the eye registers that as instability. Gentle obliques suggest movement; steep converging obliques suggest speed or strain. The frame's own corner-to-corner diagonals are also the most common construction lines in compositional analysis, and many pictures place their subject on or near one.",
      "why": "One diagonal changes the mood of a layout more cheaply than any other move. It also gives the eye a route that ignores reading order, which is what you want when reading order is not the point.",
      "how": [
        "Use the frame's own diagonal as a placement line before inventing an arbitrary angle.",
        "Repeat one angle rather than using three different ones.",
        "Let a diagonal exit through a corner rather than dying in the middle of an edge.",
        "If you tilt type, tilt it far enough that nobody could mistake it for a slip."
      ],
      "example": "Alexander Rodchenko's photographs and the constructivist posters around them, built on hard diagonals that cut corner to corner.",
      "numbers": "",
      "pitfall": "A diagonal that aligns with nothing else, so the composition has an angle but no underlying structure to justify it.",
      "source": "Rudolf Arnheim on the dynamics of oblique orientation; Charles Bouleau, The Painter's Secret Geometry (1963), on diagonal armatures.",
      "verify": {
        "status": "verified",
        "note": "Confirmed Bouleau's book as the standard study of compositional armatures including diagonals, and Arnheim as the source for reading obliques as deviation from the frame. Any claim that a particular painter consciously used a given diagonal is the analyst's reading, not documented intent."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the main device for putting movement into a still image, and it works identically in painting, photography, posters and screens."
      },
      "related": [
        133,
        138,
        111
      ]
    },
    {
      "n": 135,
      "title": "The visual triangle",
      "aka": [
        "Triangular composition",
        "Pyramidal composition"
      ],
      "oneLine": "Arranging three points of interest so the eye travels a closed triangular path.",
      demo: { none: "Any picture here is three marks with a triangle ruled between them, which is the title redrawn, and the stability it claims is already shown at 133." },
      "what": "Group the main elements so that joining them traces a triangle, and the composition reads as settled and complete. A broad-based triangle sits still; a triangle balanced on a point does not. Renaissance painters used pyramidal groupings for exactly that stability, and Cezanne built still lifes on triangular structures. There is no controlled evidence behind it and no traceable originator. It is a workshop convention that keeps producing decent results.",
      "why": "Three points give the eye a circuit rather than a destination, so it keeps moving inside the frame instead of leaving it. It also tells you where to put a third element that would otherwise float.",
      "how": [
        "Place two elements first, then use the triangle to find where the third belongs.",
        "Avoid equilateral. An uneven triangle reads as natural, a regular one as arranged.",
        "Point the apex at whatever you want read last.",
        "Keep the triangle inside the frame rather than half off the edge."
      ],
      "example": "Raphael's Madonna of the Meadow, around 1506, where the three figures form a clear pyramid.",
      "numbers": "",
      "pitfall": "Adding a third object to a shot purely to complete the triangle, which buys clutter and no meaning.",
      "source": "Workshop convention in painting, described in art-historical accounts of Renaissance pyramidal composition and in Cezanne's still lifes. Origin unclear.",
      "verify": {
        "status": "disputed",
        "note": "Real as a taught convention with a long history in painting, but I found no originating text and no controlled test. The most-cited public statement of the triangle rule sits in an encyclopaedia section that carries no citation at all, with one sentence in it flagged as unsourced, which is a fair indication of how thin the documentation is. Raphael's Madonna del Prato is confirmed as a 1506 painting with a pyramidal figure group, so the historical example holds even though the general rule does not. On review the membership verdict has been dropped from core to adjacent."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "Downgraded from core on review. Pyramidal composition is a documented art-historical description of particular Renaissance pictures, but the general triangle rule has no originating text and no test, and the reason it works is grouping plus balance, both already on the list. Kept because the pyramidal grouping is a real historical practice a designer will meet by name, unlike the rule of odds, which is cut."
      },
      "related": [
        112,
        113,
        137
      ]
    },
    {
      "n": 136,
      "title": "Rule of thirds",
      "aka": [
        "Thirds grid"
      ],
      "oneLine": "Divide the frame in thirds each way and place the important things on those lines.",
      demo: {
        caption: "Same horizon and same subject. On the right both land on a third instead of halving the frame.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Horizon halves the frame</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M66.7 0 V120 M133.3 0 V120 M0 40 H200 M0 80 H200\"/><path class=\"s\" d=\"M0 60 H200\"/><circle class=\"f\" cx=\"100\" cy=\"60\" r=\"9\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Horizon and subject on thirds</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M66.7 0 V120 M133.3 0 V120 M0 40 H200 M0 80 H200\"/><path class=\"s\" d=\"M0 80 H200\"/><circle class=\"f\" cx=\"66.7\" cy=\"80\" r=\"9\"/></svg></div></div></div>"
      },
      "what": "John Thomas Smith named it in Remarks on Rural Scenery (1797), building on a remark by Joshua Reynolds about balancing dark and light. Smith's version concerns areas: set the sky at about two thirds, or else about one third, so the material objects take the rest. The photographic version, a nine-box grid with subjects on the intersections, came later. The working purpose is the same either way, which is to stop things landing dead centre or cutting the frame in half.",
      "why": "It gives a beginner a defensible answer quickly, and it usually beats centring by accident. It also leaves space on one side of a subject, which is where a horizon, a gaze or a movement can go.",
      "how": [
        "Use it for horizons and edges, not only for subjects.",
        "Put the subject on the intersection that leaves room in the direction it faces or moves.",
        "Break it when the subject is symmetrical or the message is formality.",
        "Compose to it in camera. Cropping later to force it usually costs more than it gains."
      ],
      "example": "Any landscape photograph with the horizon a third of the way up and two thirds of sky above it.",
      "numbers": "Divisions at one third and two thirds of each side.",
      "pitfall": "Treating it as a law. George Field complained in 1845 that the rule universalises a particular and that following it everywhere produces uniform, monotonous work.",
      "source": "John Thomas Smith, Remarks on Rural Scenery (1797).",
      "verify": {
        "status": "verified",
        "note": "Confirmed that Smith coined the term in 1797 and that his wording concerned setting the sky at about two thirds or about one third, and confirmed Field's 1845 criticism. The common claim that the rule is a simplification of the golden section has no supporting evidence and I have left it out."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the most widely used placement heuristic in photography and layout, it has a documented origin, and knowing its limits is part of knowing it."
      },
      "related": [
        138,
        139,
        9137
      ]
    },
    {
      "n": 137,
      "title": "Rule of odds",
      "aka": [],
      "oneLine": "The claim that an odd number of subjects looks more natural than an even number.",
      demo: { none: "The entry's own argument is that the effect belongs to dominance, so a demo here would be the dominance comparison at 92 with the subjects counted." },
      "what": "The rule says that with more than one subject you should use three, five or seven rather than two, four or six, because even numbers pair off and look arranged. It appears in almost every photography course. I could not find who first stated it, any study testing it, or any historical text setting it out. The Wikipedia section that states it carries no citation at all.",
      "why": "The observation underneath it is real, but it is already covered elsewhere on this list. Two equal subjects split attention because neither dominates, and a composition with no dominant element feels unresolved. That is dominance, not arithmetic.",
      "how": [
        "If a pair looks static, do not add a third subject. Make one of the two larger, closer or sharper.",
        "Vary the spacing between subjects rather than counting them.",
        "Where the content genuinely is a pair, compose it as a pair and give one of them the lead."
      ],
      "example": "Two identical products shot side by side at the same size read as a catalogue entry. Move one forward, turn it slightly, and the same pair reads as a picture.",
      "numbers": "",
      "pitfall": "Adding a filler object to reach three, which is how stock photography ends up with an unexplained third mug on the table.",
      "source": "Origin unclear. Photographic teaching folklore.",
      "verify": {
        "status": "disputed",
        "note": "I searched for an originator, a foundational text and any experimental test, and found none of the three. The most-cited public statement of the rule is an unsourced encyclopaedia section."
      },
      "belongs": {
        "verdict": "cut",
        "why": "A studio tip rather than a fundamental. The real effect it gestures at is dominance (92) combined with unequal intervals, both already on the list, and those two explain the cases where counting subjects fails as well as the cases where it happens to work."
      },
      "related": [
        92,
        115,
        135
      ]
    },
    {
      "n": 138,
      "title": "Rabatment of the rectangle",
      "aka": [
        "Rabatment of the square"
      ],
      "oneLine": "Fold the short side of a rectangle onto itself from each end; the two squares give you placement lines.",
      demo: {
        caption: "Accent lines are the folded squares' inner edges; grey dots mark the thirds. They agree at 3:2, not at 2.4:1.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">3:2 frame</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"179\" height=\"119\"/><rect class=\"f-mute\" fill-opacity=\"0.14\" x=\"0\" y=\"0\" width=\"120\" height=\"120\"/><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"119\" height=\"119\"/><rect class=\"f-mute\" fill-opacity=\"0.14\" x=\"60\" y=\"0\" width=\"120\" height=\"120\"/><rect class=\"s-mute\" x=\"60.5\" y=\"0.5\" width=\"119\" height=\"119\"/><path class=\"s-accent\" d=\"M60 0 V120 M120 0 V120\"/><circle class=\"f-mute\" cx=\"60\" cy=\"7\" r=\"4\"/><circle class=\"f-mute\" cx=\"120\" cy=\"7\" r=\"4\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">2.4:1 frame</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 100\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"239\" height=\"99\"/><rect class=\"f-mute\" fill-opacity=\"0.14\" x=\"0\" y=\"0\" width=\"100\" height=\"100\"/><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"99\" height=\"99\"/><rect class=\"f-mute\" fill-opacity=\"0.14\" x=\"140\" y=\"0\" width=\"100\" height=\"100\"/><rect class=\"s-mute\" x=\"140.5\" y=\"0.5\" width=\"99\" height=\"99\"/><path class=\"s-accent\" d=\"M100 0 V100 M140 0 V100\"/><circle class=\"f-mute\" cx=\"80\" cy=\"7\" r=\"4\"/><circle class=\"f-mute\" cx=\"160\" cy=\"7\" r=\"4\"/></svg></div></div></div>"
      },
      "what": "In any rectangle longer than it is tall you can lay a square against the left edge and another against the right. The inner edges of those squares are the rabatment lines. Charles Bouleau describes the construction in The Painter's Secret Geometry (1963) as one of the recurring armatures behind Western painting, alongside the armature of the rectangle. In a 3:2 frame the lines land at one third and two thirds, which is why rabatment and the rule of thirds often agree. In a wider frame they part company completely.",
      "why": "It produces placement lines derived from the actual proportions of your frame instead of an imported grid. That matters in wide formats, where thirds stop meaning very much.",
      "how": [
        "Draw the two squares first, then place the subject on or near a rabatment line.",
        "Use each square's own diagonal to find secondary positions.",
        "In panoramic and ultra-wide crops, prefer rabatment to thirds.",
        "Treat the lines as zones rather than as pixel targets."
      ],
      "example": "A 2:1 web banner where the headline block starts on the left rabatment line, half way across, rather than at an arbitrary margin.",
      "numbers": "For a 3:2 frame the rabatment lines fall at one third and two thirds of the long side. The positions move as the aspect ratio changes, which is the point of the construction.",
      "pitfall": "Analysts find rabatments in old paintings and then claim the painter intended them. The construction is useful whether or not that is true, but the intent is nearly always inferred rather than documented.",
      "source": "Charles Bouleau, The Painter's Secret Geometry (1963).",
      "verify": {
        "status": "verified",
        "note": "Confirmed that Bouleau's book covers the armature of the rectangle and rabatment of the shorter sides as recurring compositional structures. The geometry itself is checkable by construction; the attribution of intent to individual painters is not."
      },
      "belongs": {
        "verdict": "core",
        "why": "It gives proportion-aware placement lines for any frame shape, which the rule of thirds cannot do once you leave 3:2."
      },
      "related": [
        136,
        139,
        134
      ]
    },
    {
      "n": 139,
      "title": "Golden section placement",
      "aka": [
        "Phi grid",
        "Golden ratio composition"
      ],
      "oneLine": "Placing key elements at roughly 0.382 or 0.618 across the frame instead of at the thirds.",
      demo: {
        caption: "Dashed lines are the thirds; accent lines are 0.382 and 0.618. That small gap is the whole difference.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 600 340\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"599\" height=\"339\"/><path class=\"s-mute\" stroke-dasharray=\"5 5\" d=\"M200 0 V340 M400 0 V340 M0 113.3 H600 M0 226.7 H600\"/><path class=\"s-accent\" d=\"M229.2 0 V340 M370.8 0 V340 M0 129.9 H600 M0 210.1 H600\"/><circle class=\"f-mute\" cx=\"200\" cy=\"113.3\" r=\"5\"/><circle class=\"f-accent\" cx=\"229.2\" cy=\"129.9\" r=\"5\"/><text class=\"t\" x=\"194\" y=\"18\" text-anchor=\"end\">1/3</text><text class=\"t\" x=\"406\" y=\"18\">2/3</text><text class=\"t\" x=\"236\" y=\"332\">0.382</text><text class=\"t\" x=\"364\" y=\"332\" text-anchor=\"end\">0.618</text></svg></div>"
      },
      "what": "The golden section divides a length so that the whole is to the larger part as the larger part is to the smaller, a ratio of about 1.618. Used as a placement grid it puts lines at roughly 38.2 and 61.8 per cent of each side, slightly tighter to the centre than the thirds. As a placement device it works perfectly well. The separate claim that people find this ratio inherently beautiful is where the trouble starts. The main review of the experimental record concluded that real psychological effects do seem to exist, but that they are sensitive to careless method. That is a long way short of what the folklore asserts.",
      "why": "It gives you a second set of placement lines with a slightly different feel from thirds. That is what it gives you, and treating it as more than that has produced a century of bad design mythology and a lot of retrofitted spirals.",
      "how": [
        "Use it as an alternative to thirds when the thirds feel too loose for the frame.",
        "Apply it to one decision rather than to every dimension in the design.",
        "Never justify a layout to a client on the grounds that the ratio is objectively beautiful. The research will not carry that weight.",
        "Where a golden construction and your eye disagree, follow your eye."
      ],
      "example": "The phi grid overlay offered alongside the thirds grid in most photo-editing and camera software.",
      "numbers": "Phi is approximately 1.618. The divisions fall at approximately 0.382 and 0.618 of a side.",
      "pitfall": "Drawing a golden spiral over finished work as proof of quality. Draw it loosely enough and it fits almost any photograph, which is exactly why it proves nothing.",
      "source": "The ratio is in Euclid. The aesthetic claim traces to Gustav Fechner's rectangle-preference experiments, begun in the 1860s and set out in Vorschule der Aesthetik (1876).",
      "verify": {
        "status": "disputed",
        "note": "I corrected two things the earlier draft had wrong. First, George Markowsky's Misconceptions about the Golden Ratio (College Mathematics Journal 23(1), 1992, pages 2 to 19) used two different sets of 48 rectangles, and the earlier draft ran them together. The preference figures came from 48 rectangles of equal height with widths from 0.4 to 2.5 times that height, in which the most commonly chosen ratio was 1.83 rather than 1.618. A second set of 48 rectangles spanned ratios of 1.6 to 1.7 and convinced him that people cannot tell ratios that close apart at all. Second, Christopher Green's review All That Glitters (Perception 24(8), 1995, pages 937 to 968) does not conclude that the evidence is weak. Its stated conclusion is that there do seem to be real psychological effects associated with the golden section, but that they are relatively sensitive to careless methodological practices. I have removed a claim that close replications of Fechner failed, because I could not support it and Green's review argues against it. What survives is that the ratio is a usable placement construction and that the strong beauty claim is not established."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a real placement construction, it is built into the tools designers use daily, and the entry earns its place partly by dismantling the folklore attached to it."
      },
      "related": [
        136,
        138,
        98
      ]
    },
    {
      "n": 140,
      "title": "Entry point",
      "aka": [
        "Point of entry"
      ],
      "oneLine": "The first place attention lands, which sets the tone for everything that follows.",
      demo: {
        caption: "Same page underneath. On the left the reader meets three barriers before the content; on the right, one route in.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Three things before the content</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-nav\"><b>Home</b><span>Work</span><span>About</span><span>Contact</span></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-label\">Cookies</span><span class=\"db-btn db-btn--sm\">Accept all</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-label\">Newsletter</span><span class=\"db-btn db-btn--sm\">Sign up</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-label\">Quick survey</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Not now</span></div></div><div class=\"db-lines\"><i></i><i></i></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Nothing in the way</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-nav\"><b>Home</b><span>Work</span><span>About</span><span>Contact</span></div><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i></div><div class=\"db-row\"><span class=\"db-btn\">See the work</span></div></div></div></div></div>"
      },
      "what": "An entry point is where somebody comes into a design: the top of a page, the door of a shop, the first screen of an app. Lidwell, Holden and Butler treat it as a design principle in Universal Principles of Design and give it three components. Minimal barriers, so nothing blocks the way in. Points of prospect, so a person can see what is available from where they are standing. Progressive lures, so there is a reason to take the next step.",
      "why": "The entry point decides whether someone commits at all. It is also the one place where you can be confident of the order in which things are seen, which makes it the only reliable location for the single most important message.",
      "how": [
        "Clear the entrance. No interstitial stacked on a cookie wall stacked on a newsletter prompt.",
        "Give a view of the whole from the entry, so people can tell what is here without navigating.",
        "Put one lure in view, close enough to reach, that leads to the next stage.",
        "Design for the state a first-time visitor is in, not the state you are in after six months on the project."
      ],
      "example": "A shop with an open frontage and no door to push, where you can see the back wall from the pavement.",
      "numbers": "",
      "pitfall": "Loading the entry with everything the organisation wants to say. Barriers get added one at a time by different departments, and nobody owns the total.",
      "source": "William Lidwell, Kritina Holden and Jill Butler, Universal Principles of Design (2003, revised editions since).",
      "verify": {
        "status": "verified",
        "note": "Confirmed the principle and its three named components, minimal barriers, points of prospect and progressive lures, in Universal Principles of Design."
      },
      "belongs": {
        "verdict": "core",
        "why": "Every designed thing has a first moment, and this is the only principle on the list that treats that moment as a design object with its own requirements."
      },
      "related": [
        141,
        143,
        96
      ]
    },
    {
      "n": 141,
      "title": "Gutenberg diagram",
      "aka": [
        "Gutenberg rule",
        "Reading gravity"
      ],
      "oneLine": "A four-quadrant map of how the eye crosses an evenly filled page, from top left to bottom right.",
      demo: {
        caption: "The four quadrants, and the sweep from primary optical area to terminal area, over the evenly filled text the claim needs.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 176\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"319\" height=\"175\"/><path class=\"s-mute\" d=\"M160 0.5 V175.5 M0.5 88 H319.5\"/><path class=\"s-mute\" d=\"M8 28 H152 M168 28 H312 M8 37 H152 M168 37 H312 M8 46 H152 M168 46 H312 M8 55 H152 M168 55 H312 M8 64 H152 M168 64 H312 M8 73 H128 M168 73 H288 M8 116 H152 M168 116 H312 M8 125 H152 M168 125 H312 M8 134 H152 M168 134 H312 M8 143 H152 M168 143 H312 M8 152 H152 M168 152 H312 M8 161 H136 M168 161 H296\"/><text class=\"t\" x=\"8\" y=\"16\">PRIMARY OPTICAL</text><text class=\"t\" x=\"168\" y=\"16\">STRONG FALLOW</text><text class=\"t\" x=\"8\" y=\"104\">WEAK FALLOW</text><text class=\"t\" x=\"168\" y=\"104\">TERMINAL</text><path class=\"s-accent\" d=\"M18 26 L302 166\"/><path class=\"f-accent\" d=\"M302 166 L289 165 L293 156 Z\"/></svg></div>"
      },
      "what": "The diagram divides a page into four. The primary optical area at top left, the strong fallow area at top right, the weak fallow area at bottom left, and the terminal area at bottom right. The claim is that a Western reader begins in the primary optical area and sweeps left to right and downwards to the terminal area along an axis of orientation, pulled by the habit of reading. Universal Principles of Design attributes the concept to the typographer Edmund Arnold, who is said to have developed it in the 1950s.",
      "why": "It is a reasonable default in one narrow case: a page of evenly distributed, homogeneous text with nothing on it that stands out. Outside that case the weight and contrast of the elements decide where the eye goes, and the quadrants have nothing to say.",
      "how": [
        "Use it only where a layout genuinely has no dominant element, such as a directory or a page of classifieds.",
        "Put the first thing to be read at top left and the closing action at bottom right, then test rather than assume.",
        "If you have a strong headline or image, build the hierarchy and set the diagram aside.",
        "Remember it assumes left-to-right reading and does not transfer to Arabic or Hebrew layouts."
      ],
      "example": "A page of classified advertisements, where every entry carries the same visual weight and nothing competes for first look.",
      "numbers": "",
      "pitfall": "Treating the fallow areas as dead zones, putting important content there anyway, and then blaming users for missing it.",
      "source": "Attributed to Edmund Arnold, 1950s; described in Lidwell, Holden and Butler, Universal Principles of Design.",
      "verify": {
        "status": "disputed",
        "note": "I read the Gutenberg Diagram page of Universal Principles of Design. It attributes the concept to Edmund Arnold, cites Colin Wheildon's Type and Layout (Strathmoor Press, 1995), and states plainly that although designs based on the diagram are widespread, there is little empirical evidence that it improves reading rates or comprehension. It also notes the diagram is likely predictive only for heavy, evenly distributed text."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "Downgraded from core on review, for consistency with the Z-pattern being cut. The two are the same idea, and the reference book that carries the diagram says there is little empirical evidence for it. It stays on the list because a designer will be handed the quadrant diagram by somebody and needs to know what it is worth, not because it is a principle to design by."
      },
      "related": [
        140,
        142,
        143
      ]
    },
    {
      "n": 142,
      "title": "Z-pattern scanning",
      "aka": [
        "Z pattern of processing",
        "Z layout"
      ],
      "oneLine": "The claim that eyes trace a Z across a page: left to right, diagonally down, then left to right again.",
      demo: {
        caption: "Same page twice. The Z begins on the two smallest marks on it; weight puts the headline first.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Route the Z assumes</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"129\"/><rect class=\"f\" x=\"12\" y=\"10\" width=\"20\" height=\"7\"/><rect class=\"f-mute\" x=\"136\" y=\"11\" width=\"12\" height=\"4\"/><rect class=\"f-mute\" x=\"154\" y=\"11\" width=\"12\" height=\"4\"/><rect class=\"f-mute\" x=\"172\" y=\"11\" width=\"12\" height=\"4\"/><rect class=\"f\" x=\"12\" y=\"40\" width=\"96\" height=\"16\"/><rect class=\"f-mute\" x=\"12\" y=\"64\" width=\"80\" height=\"4\"/><rect class=\"f-mute\" x=\"12\" y=\"72\" width=\"58\" height=\"4\"/><rect class=\"f-mute\" x=\"120\" y=\"36\" width=\"68\" height=\"52\"/><rect class=\"f-accent\" x=\"120\" y=\"100\" width=\"52\" height=\"16\"/><path class=\"s\" stroke-dasharray=\"5 4\" d=\"M18 14 H182 L18 112 H182\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Order the weights give</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"129\"/><rect class=\"f\" x=\"12\" y=\"10\" width=\"20\" height=\"7\"/><rect class=\"f-mute\" x=\"136\" y=\"11\" width=\"12\" height=\"4\"/><rect class=\"f-mute\" x=\"154\" y=\"11\" width=\"12\" height=\"4\"/><rect class=\"f-mute\" x=\"172\" y=\"11\" width=\"12\" height=\"4\"/><rect class=\"f\" x=\"12\" y=\"40\" width=\"96\" height=\"16\"/><rect class=\"f-mute\" x=\"12\" y=\"64\" width=\"80\" height=\"4\"/><rect class=\"f-mute\" x=\"12\" y=\"72\" width=\"58\" height=\"4\"/><rect class=\"f-mute\" x=\"120\" y=\"36\" width=\"68\" height=\"52\"/><rect class=\"f-accent\" x=\"120\" y=\"100\" width=\"52\" height=\"16\"/><circle class=\"s-accent\" cx=\"100\" cy=\"30\" r=\"8\"/><text class=\"t\" x=\"100\" y=\"33\" text-anchor=\"middle\">1</text><circle class=\"s-accent\" cx=\"112\" cy=\"72\" r=\"8\"/><text class=\"t\" x=\"112\" y=\"75\" text-anchor=\"middle\">2</text><circle class=\"s-accent\" cx=\"110\" cy=\"108\" r=\"8\"/><text class=\"t\" x=\"110\" y=\"111\" text-anchor=\"middle\">3</text></svg></div></div></div>"
      },
      "what": "The Z-pattern is usually presented as a layout template. Logo top left, navigation top right, a diagonal down to an image, then a call to action bottom right. Universal Principles of Design lists the Z pattern of processing as an alternative name for the Gutenberg diagram and reports the same lack of evidence. Nielsen Norman Group's eyetracking work on how people scan text names four patterns, F, spotted, layer-cake and commitment, and the Z is not one of them.",
      "why": "The advice it produces is not harmful, because it amounts to putting the call to action where the eye tends to finish. The mechanism, though, is invented, and designers use it to justify a layout instead of building a hierarchy that decides the reading order for them.",
      "how": [
        "Decide the order you want things read, then make each step the loudest available thing at that moment.",
        "Test with a five-second exposure and ask people what they saw first.",
        "If a layout only makes sense once you draw a Z on top of it, it has no hierarchy of its own."
      ],
      "example": "The many landing pages with a hero image left, headline right and a button bottom right. They work because of size and contrast, not because anyone's eyes traced a Z.",
      "numbers": "",
      "pitfall": "Placing a critical control in the middle of the Z and assuming it will be picked up on the way past.",
      "source": "Origin unclear. Presented in Universal Principles of Design as an alternative name for the Gutenberg diagram.",
      "verify": {
        "status": "disputed",
        "note": "I checked Universal Principles of Design, which names the Z pattern as an alias for the Gutenberg diagram and reports little empirical evidence for it, and Nielsen Norman Group's 2019 eyetracking summary of text scanning patterns, which lists F, spotted, layer-cake and commitment and includes no Z."
      },
      "belongs": {
        "verdict": "cut",
        "why": "It is the Gutenberg diagram rebranded, with no independent evidence and no mechanism of its own. Replace it with hierarchy (96) and emphasis (93), which produce the same layouts for reasons that survive scrutiny."
      },
      "related": [
        96,
        141,
        143
      ]
    },
    {
      "n": 143,
      "title": "F-pattern scanning",
      "aka": [
        "F-shaped reading pattern"
      ],
      "oneLine": "On text-heavy pages people read the top lines and the left edge, tracing a rough F.",
      demo: {
        caption: "Accent marks what gets read: on the left it pools into an F, on the right headings spread it downwards.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No cues</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 140\"><rect class=\"f-mute\" x=\"8\" y=\"12\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"22\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"32\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"42\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"52\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"62\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"72\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"82\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"92\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"102\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"112\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"122\" width=\"150\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"12\" width=\"184\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"22\" width=\"184\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"32\" width=\"26\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"42\" width=\"24\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"52\" width=\"112\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"62\" width=\"96\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"72\" width=\"22\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"82\" width=\"20\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"92\" width=\"18\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"102\" width=\"16\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"112\" width=\"14\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"122\" width=\"12\" height=\"4\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Headings added</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 140\"><rect class=\"f-mute\" x=\"8\" y=\"24\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"34\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"44\" width=\"160\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"74\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"84\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"94\" width=\"146\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"124\" width=\"184\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"134\" width=\"120\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"10\" width=\"76\" height=\"6\"/><rect class=\"f-accent\" x=\"8\" y=\"24\" width=\"184\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"34\" width=\"60\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"60\" width=\"64\" height=\"6\"/><rect class=\"f-accent\" x=\"8\" y=\"74\" width=\"184\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"84\" width=\"52\" height=\"4\"/><rect class=\"f-accent\" x=\"8\" y=\"110\" width=\"88\" height=\"6\"/><rect class=\"f-accent\" x=\"8\" y=\"124\" width=\"184\" height=\"4\"/></svg></div></div></div>"
      },
      "what": "Nielsen Norman Group identified this in 2006 from eyetracking recordings of 232 users: a horizontal sweep across the top of the content, a shorter second sweep lower down, then a vertical scan down the left-hand side. Kara Pernice revisited it in 2017 and again in 2019 with an important correction. The F-pattern is what happens when a page gives the eye no cues at all. It is a symptom of poor formatting rather than a target, and NN/g rank it the least effective of the scanning patterns they record.",
      "why": "It tells you where attention is cheap and where it is expensive. The first words of headings, paragraphs and list items get read; the right-hand ends of lines mostly do not. That changes how you write, not only how you lay out.",
      "how": [
        "Front-load the informative word in every heading, link and bullet.",
        "Break long text with real headings so readers can use the layer-cake pattern instead.",
        "Bold the phrase that carries the meaning, not a whole sentence.",
        "Avoid starting consecutive list items with the same words, because readers skip repeated openings."
      ],
      "example": "A long product page where the reader takes the first two lines of each section and nothing else, then leaves believing they have read it.",
      "numbers": "The original 2006 NN/g study recorded 232 users.",
      "pitfall": "Designing an F-shaped layout on purpose. The finding says people fall back on the F when nothing helps them, so the fix is cues, not conformity.",
      "source": "Jakob Nielsen, F-Shaped Pattern For Reading Web Content, Nielsen Norman Group (2006); Kara Pernice, updates in 2017 and 2019.",
      "verify": {
        "status": "verified",
        "note": "Read NN/g's 2017 and 2019 articles. Confirmed the 232-user figure, the 2006 date, Pernice's authorship of both updates, and NN/g's position that the F-pattern signals a design failure while the layer-cake and commitment patterns produce better comprehension."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is one of the few claims in this section backed by published eyetracking, and it changes both layout and copywriting decisions."
      },
      "related": [
        96,
        141,
        142
      ]
    },
    {
      "n": 144,
      "title": "Leading lines",
      "aka": [
        "Lines of direction"
      ],
      "oneLine": "Real or implied lines within an image that steer the eye towards the subject.",
      demo: {
        caption: "Identical lines in both frames. Only the subject moved: on the right it sits where the lines point.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Leads to nothing</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><path class=\"s\" d=\"M14 118 L96 50\"/><path class=\"s\" d=\"M186 118 L112 50\"/><circle class=\"f-accent\" cx=\"158\" cy=\"34\" r=\"11\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Leads to the subject</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><path class=\"s\" d=\"M14 118 L96 50\"/><path class=\"s\" d=\"M186 118 L112 50\"/><circle class=\"f-accent\" cx=\"104\" cy=\"40\" r=\"11\"/></svg></div></div></div>"
      },
      "what": "Any strong linear element pulls the eye along it. Roads, fences, cables, rows of columns, a river, the edge where two tones meet, even a run of separate objects that the eye joins up into a line. Point that line at the subject and the viewer arrives there without being told. Curves behave differently from straight lines: slower, and read as gentler.",
      "why": "It is the most direct control you have over the order in which a picture gets read, and it costs nothing except a change of viewpoint.",
      "how": [
        "Move your feet. One step sideways changes where a line points.",
        "Start the line at or near a frame edge, ideally a corner, so the eye picks it up on entry.",
        "Do not let a line carry on out of the frame past the subject.",
        "In layouts, alignment edges and rules act as leading lines whether or not you intended them to."
      ],
      "example": "A photograph taken low on a country road, where the verges converge on a farmhouse at the far end.",
      "numbers": "",
      "pitfall": "A strong line that leads to nothing. The eye follows it, arrives at an empty corner, and leaves the picture.",
      "source": "Standard photographic and painting practice, described in composition manuals such as David Taylor, Understanding Composition: The Expanded Guide (Ammonite Press, first published 2014). Origin unclear.",
      "verify": {
        "status": "verified",
        "note": "Confirmed as a documented technique in published composition manuals. I corrected the Taylor date, which the earlier draft gave as 2015: the Ammonite Press edition was first published in 2014 and reprinted since. I looked for an originator and found none, so I do not name one."
      },
      "belongs": {
        "verdict": "core",
        "why": "Directing the eye is the central job of composition, and this is the most literal tool for doing it."
      },
      "related": [
        111,
        112,
        134
      ]
    },
    {
      "n": 145,
      "title": "Framing within the frame",
      "aka": [
        "Natural framing",
        "Frame within a frame"
      ],
      "oneLine": "Using something inside the scene as a second frame around the subject.",
      demo: {
        caption: "Same subject, same clutter behind it. The doorway hides most of the mess and puts a plane in front.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Open background</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><rect class=\"f-mute\" x=\"10\" y=\"14\" width=\"26\" height=\"18\"/><rect class=\"f-mute\" x=\"46\" y=\"8\" width=\"18\" height=\"26\"/><rect class=\"f-mute\" x=\"86\" y=\"10\" width=\"22\" height=\"12\"/><rect class=\"f-mute\" x=\"150\" y=\"12\" width=\"34\" height=\"16\"/><rect class=\"f-mute\" x=\"176\" y=\"44\" width=\"18\" height=\"30\"/><rect class=\"f-mute\" x=\"12\" y=\"52\" width=\"20\" height=\"22\"/><rect class=\"f-mute\" x=\"40\" y=\"86\" width=\"30\" height=\"16\"/><rect class=\"f-mute\" x=\"120\" y=\"92\" width=\"40\" height=\"14\"/><rect class=\"f-mute\" x=\"8\" y=\"96\" width=\"24\" height=\"14\"/><rect class=\"f-mute\" x=\"168\" y=\"80\" width=\"26\" height=\"20\"/><circle class=\"f-accent\" cx=\"100\" cy=\"62\" r=\"14\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Framed from within</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><rect class=\"f-mute\" x=\"10\" y=\"14\" width=\"26\" height=\"18\"/><rect class=\"f-mute\" x=\"46\" y=\"8\" width=\"18\" height=\"26\"/><rect class=\"f-mute\" x=\"86\" y=\"10\" width=\"22\" height=\"12\"/><rect class=\"f-mute\" x=\"150\" y=\"12\" width=\"34\" height=\"16\"/><rect class=\"f-mute\" x=\"176\" y=\"44\" width=\"18\" height=\"30\"/><rect class=\"f-mute\" x=\"12\" y=\"52\" width=\"20\" height=\"22\"/><rect class=\"f-mute\" x=\"40\" y=\"86\" width=\"30\" height=\"16\"/><rect class=\"f-mute\" x=\"120\" y=\"92\" width=\"40\" height=\"14\"/><rect class=\"f-mute\" x=\"8\" y=\"96\" width=\"24\" height=\"14\"/><rect class=\"f-mute\" x=\"168\" y=\"80\" width=\"26\" height=\"20\"/><circle class=\"f-accent\" cx=\"100\" cy=\"62\" r=\"14\"/><path class=\"f\" fill-rule=\"evenodd\" d=\"M0 0 H200 V120 H0 Z M64 24 H136 V120 H64 Z\"/></svg></div></div></div>"
      },
      "what": "You put an arch, a doorway, a window, overhanging branches or a dark foreground shape between viewer and subject, so the subject sits inside a frame of its own. It does three separate jobs. It isolates the subject from a busy background, it adds a foreground plane and therefore depth, and it implies a viewpoint, because somebody must be standing where that frame is.",
      "why": "It solves a cluttered background without retouching anything, and it makes the viewer feel placed in the scene rather than shown a picture of it.",
      "how": [
        "Keep the inner frame darker or less detailed than the subject, or the two compete.",
        "Let the frame touch at least two edges of the picture. A floating frame shape reads as an object, not a frame.",
        "Decide whether the frame should be sharp or soft. Sharp reads as architecture, soft reads as a glance.",
        "On screen, a full-bleed image with a cut-out panel does the same job."
      ],
      "example": "John Ford's The Searchers (1956), which opens and closes with the action seen through a black doorway.",
      "numbers": "",
      "pitfall": "A frame so heavy that the picture becomes about the doorway, and the subject shrinks to an incidental detail inside it.",
      "source": "Standard photographic and cinematic technique; origin unclear.",
      "verify": {
        "status": "verified",
        "note": "Confirmed as a documented technique across photography and film literature. The doorway framing in The Searchers is visible in the film itself and widely discussed. I found no originator and name none."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a reliable way to isolate a subject and build depth using only what is already in the scene."
      },
      "related": [
        144,
        148,
        149
      ]
    },
    {
      "n": 146,
      "title": "Cropping",
      "aka": [
        "The crop"
      ],
      "oneLine": "Cutting away the outer parts of an image to change what the image is about.",
      demo: {
        caption: "One drawing, two frames. The dashed box is all the right-hand version keeps, and the subject changes.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Wide</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><rect class=\"f-mute\" x=\"7\" y=\"59\" width=\"18\" height=\"51\"/><rect class=\"f-mute\" x=\"34\" y=\"59\" width=\"18\" height=\"51\"/><rect class=\"f-mute\" x=\"61\" y=\"59\" width=\"18\" height=\"51\"/><rect class=\"f-mute\" x=\"88\" y=\"59\" width=\"18\" height=\"51\"/><rect class=\"f-mute\" x=\"115\" y=\"59\" width=\"18\" height=\"51\"/><rect class=\"f-mute\" x=\"142\" y=\"59\" width=\"18\" height=\"51\"/><rect class=\"f-mute\" x=\"169\" y=\"59\" width=\"18\" height=\"51\"/><circle class=\"f-mute\" cx=\"16\" cy=\"50\" r=\"7\"/><circle class=\"f-mute\" cx=\"43\" cy=\"50\" r=\"7\"/><circle class=\"f-mute\" cx=\"70\" cy=\"50\" r=\"7\"/><circle class=\"f-mute\" cx=\"97\" cy=\"50\" r=\"7\"/><circle class=\"f-accent\" cx=\"124\" cy=\"50\" r=\"7\"/><circle class=\"f-mute\" cx=\"151\" cy=\"50\" r=\"7\"/><circle class=\"f-mute\" cx=\"178\" cy=\"50\" r=\"7\"/><rect class=\"s-accent\" stroke-dasharray=\"4 3\" x=\"108\" y=\"38\" width=\"40\" height=\"24\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Cropped</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><svg x=\"0\" y=\"0\" width=\"200\" height=\"120\" viewBox=\"108 38 40 24\"><rect class=\"f-mute\" x=\"88\" y=\"59\" width=\"18\" height=\"51\"/><rect class=\"f-mute\" x=\"115\" y=\"59\" width=\"18\" height=\"51\"/><rect class=\"f-mute\" x=\"142\" y=\"59\" width=\"18\" height=\"51\"/><circle class=\"f-mute\" cx=\"97\" cy=\"50\" r=\"7\"/><circle class=\"f-accent\" cx=\"124\" cy=\"50\" r=\"7\"/><circle class=\"f-mute\" cx=\"151\" cy=\"50\" r=\"7\"/></svg></svg></div></div></div>"
      },
      "what": "Cropping removes peripheral area to tighten framing, change the aspect ratio, cut out something unwanted, or push the subject forward. It is the cheapest edit available and the one with the largest effect on meaning, because it decides what the viewer is not permitted to see. In photojournalism cropping is one of the few edits generally accepted, alongside tonal balance, colour correction and sharpening.",
      "why": "A crop turns a record into a picture. It also fixes the aspect ratio, which is the single decision that determines how an image will behave across a responsive layout.",
      "how": [
        "Crop for one reason at a time: remove a distraction, or change the ratio, or tighten on the subject.",
        "Try the extreme crop as well as the safe one. The safe crop is rarely the best crop.",
        "Keep the wide original. You cannot uncrop.",
        "Define art-directed crops per breakpoint instead of letting one image be centre-cropped everywhere."
      ],
      "example": "The same news photograph run wide, showing the crowd, and cropped tight on one face. Two different stories from one negative.",
      "numbers": "",
      "pitfall": "Cropping to fit a container. A square thumbnail generated automatically from a landscape photograph will cut heads off, reliably and forever.",
      "source": "Standard practice across photography, print, film and design; documented as a basic process in image editing and printing.",
      "verify": {
        "status": "verified",
        "note": "Confirmed the standard definition and the photojournalism convention that cropping sits among the permitted edits. No single originator exists; the practice is as old as the picture frame."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the most consequential and most frequently made compositional decision in any workflow that involves photographs."
      },
      "related": [
        129,
        145,
        147
      ]
    },
    {
      "n": 147,
      "title": "Bleed and edge tension",
      "aka": [
        "Full bleed",
        "Edge pull"
      ],
      "oneLine": "Running artwork past the trim line, and the pull an element feels as it approaches the edge.",
      demo: {
        caption: "One photograph, three treatments. The middle one stops just short, and the leftover sliver reads as a mistake.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 124\"><text class=\"t\" x=\"0\" y=\"10\">BLEEDS</text><text class=\"t\" x=\"112\" y=\"10\">STOPS 3 MM SHORT</text><text class=\"t\" x=\"224\" y=\"10\">CLEAR MARGIN</text><rect class=\"s-mute\" x=\"0.5\" y=\"18.5\" width=\"95\" height=\"95\"/><rect class=\"s-mute\" x=\"112.5\" y=\"18.5\" width=\"95\" height=\"95\"/><rect class=\"s-mute\" x=\"224.5\" y=\"18.5\" width=\"95\" height=\"95\"/><rect class=\"f\" x=\"0\" y=\"18\" width=\"96\" height=\"96\"/><rect class=\"f\" x=\"115.5\" y=\"21.5\" width=\"89\" height=\"89\"/><rect class=\"f\" x=\"236\" y=\"30\" width=\"72\" height=\"72\"/></svg></div>"
      },
      "what": "Two related things. Bleed is the printing allowance: you extend artwork beyond the trim line, the line where the paper will be cut, so that a guillotine which never cuts exactly cannot leave a white sliver. Edge tension is the perceptual half: an element near the frame edge feels drawn towards it, and the narrow gap between them becomes an active shape in its own right. Either commit and bleed, or pull back and give a clear margin. The half-way position is what looks wrong.",
      "why": "Bleeding an image changes what the page is. A photograph inside a margin is an object on a page. The same photograph bled to all four edges becomes the page, and the reader is put inside it.",
      "how": [
        "Set the bleed before you start and keep live content well inside the trim.",
        "Bleed on purpose. One full-bleed image on a spread beats four half-hearted ones.",
        "If an element is not bleeding, give it enough margin that the gap reads as a decision.",
        "On screen, apply the same thinking to the viewport edge, especially on phones."
      ],
      "example": "A magazine spread with a full-bleed photograph on one page facing a text page set inside generous margins.",
      "numbers": "A standard bleed is 3 mm, or one eighth of an inch. Metric requirements generally range from 2 mm to 5 mm depending on the printer, and large-format work is commonly specified at 0.25 inch, about 6.35 mm, on each side. Always work to the printer's own specification.",
      "pitfall": "Placing type 2 mm from the trim line. It survives the PDF proof and gets shaved off on the print run.",
      "source": "Trade printing practice, with bleed allowances varying by printer. Edge tension follows Rudolf Arnheim's account of the frame as an active boundary.",
      "verify": {
        "status": "verified",
        "note": "Confirmed the 3 mm and one-eighth-inch convention, the 2 mm to 5 mm metric range and the quarter-inch large-format allowance against printing references. I reworded the large-format figure, which the earlier draft described as an extra allowance on top of the 3 mm rather than a specification in its own right. There is no single standard here: individual printers publish their own requirements, which is why the entry says to use theirs."
      },
      "belongs": {
        "verdict": "core",
        "why": "Bleed is a production constraint every print designer must handle, and edge tension is the compositional judgement that sits on top of it."
      },
      "related": [
        119,
        146,
        9147
      ]
    },
    {
      "n": 148,
      "title": "Containment",
      "aka": [
        "Common region",
        "Enclosure"
      ],
      "oneLine": "Drawing a boundary round elements so they read as one group whatever else is happening.",
      demo: {
        caption: "Nothing moved. The panel makes two dots a pair, though every gap in the row is identical.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Even spacing</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 80\"><circle class=\"f\" cx=\"30\" cy=\"40\" r=\"8\"/><circle class=\"f\" cx=\"65\" cy=\"40\" r=\"8\"/><circle class=\"f\" cx=\"100\" cy=\"40\" r=\"8\"/><circle class=\"f\" cx=\"135\" cy=\"40\" r=\"8\"/><circle class=\"f\" cx=\"170\" cy=\"40\" r=\"8\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">One region added</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 80\"><rect class=\"f-mute\" x=\"84\" y=\"20\" width=\"67\" height=\"40\" rx=\"3\"/><circle class=\"f\" cx=\"30\" cy=\"40\" r=\"8\"/><circle class=\"f\" cx=\"65\" cy=\"40\" r=\"8\"/><circle class=\"f\" cx=\"100\" cy=\"40\" r=\"8\"/><circle class=\"f\" cx=\"135\" cy=\"40\" r=\"8\"/><circle class=\"f\" cx=\"170\" cy=\"40\" r=\"8\"/></svg></div></div></div>"
      },
      "what": "Put a border, a background panel or a card around a set of elements and they become a unit. Stephen Palmer showed in 1992 that this beats proximity: items inside a common region group together even when other items sit physically closer to them. Containment is therefore the strongest grouping tool available, and the most expensive, because every boundary adds a line, a fill or a shadow to the page.",
      "why": "It lets you group things that cannot be moved next to each other, and it survives responsive reflow, where proximity often does not.",
      "how": [
        "Try white space first. Reach for a container only when spacing cannot do the job.",
        "Use one container style consistently. Three card treatments on one page is chaos with rounded corners.",
        "Make the padding inside a container larger than the gaps between the items it holds.",
        "Never nest more than two levels of container."
      ],
      "example": "A settings screen where related toggles sit on one grouped panel, separated from the next group by a plain gap rather than by a second box.",
      "numbers": "",
      "pitfall": "Card soup. Every block gets a white card with a shadow, so nothing is grouped, because everything is.",
      "source": "Stephen E. Palmer, Common region: a new principle of perceptual grouping, Cognitive Psychology, 24(3), 1992, pages 436 to 447.",
      "verify": {
        "status": "verified",
        "note": "Confirmed the Palmer 1992 citation, journal, volume, issue and page range, and that the paper proposes common region as a grouping principle that overrides proximity in the cases tested."
      },
      "belongs": {
        "verdict": "core",
        "why": "Cards, panels, fieldsets and table zones are the dominant grouping device in interface work, and this is the principle underneath all of them."
      },
      "related": [
        116,
        118,
        161
      ]
    },
    {
      "n": 149,
      "title": "Isolation as emphasis",
      "aka": [
        "Emphasis by separation"
      ],
      "oneLine": "Separate one element from the crowd and it becomes the thing people look at.",
      demo: {
        caption: "Left adds size and colour to one mark. Right adds only space, and your eye still lands on one.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Emphasis by weight</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 90\"><circle class=\"f\" cx=\"20\" cy=\"45\" r=\"7\"/><circle class=\"f\" cx=\"42\" cy=\"45\" r=\"7\"/><circle class=\"f\" cx=\"64\" cy=\"45\" r=\"7\"/><circle class=\"f-accent\" cx=\"86\" cy=\"45\" r=\"13\"/><circle class=\"f\" cx=\"108\" cy=\"45\" r=\"7\"/><circle class=\"f\" cx=\"130\" cy=\"45\" r=\"7\"/><circle class=\"f\" cx=\"152\" cy=\"45\" r=\"7\"/><circle class=\"f\" cx=\"174\" cy=\"45\" r=\"7\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Emphasis by space</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 90\"><circle class=\"f\" cx=\"14\" cy=\"45\" r=\"7\"/><circle class=\"f\" cx=\"32\" cy=\"45\" r=\"7\"/><circle class=\"f\" cx=\"50\" cy=\"45\" r=\"7\"/><circle class=\"f\" cx=\"68\" cy=\"45\" r=\"7\"/><circle class=\"f\" cx=\"86\" cy=\"45\" r=\"7\"/><circle class=\"f\" cx=\"104\" cy=\"45\" r=\"7\"/><circle class=\"f\" cx=\"122\" cy=\"45\" r=\"7\"/><circle class=\"f\" cx=\"182\" cy=\"45\" r=\"7\"/></svg></div></div></div>"
      },
      "what": "Emphasis is usually discussed as making something bigger, bolder or brighter. Isolation works the other way: leave one element alone in space while everything else clusters. The eye lands on the odd one out. This follows straight from grouping: an item that shares no region, no proximity and no similarity with its neighbours cannot be absorbed into a group, so it stands alone by default.",
      "why": "It is the quietest form of emphasis available, which makes it the right one when loud emphasis would cheapen the work. It also costs no ink, no colour and no extra weight.",
      "how": [
        "Give the primary action more clear space than anything else on the screen rather than a brighter colour.",
        "Isolate one item per view. Two isolated items cancel each other out.",
        "Remember it works on quantity too: one product on a shelf reads as precious, twenty read as stock.",
        "Pair it with a small size difference rather than a large one, because the space is already doing the work."
      ],
      "example": "A pricing page where the recommended plan sits slightly apart from the other two, with no coloured box and no badge.",
      "numbers": "",
      "pitfall": "The von Restorff effect gets cited as proof of this. Hedwig von Restorff's 1933 study measured recall of items in a list, not where the eye goes on a page, so do not present it as evidence about visual attention.",
      "source": "Grouping principles applied to emphasis. Hedwig von Restorff (1933) for the related, and different, memory finding.",
      "verify": {
        "status": "adjusted",
        "note": "The master list frames this as a compositional device, which is correct. I have separated it from the von Restorff isolation effect, confirmed as a 1933 memory study about recall of distinctive list items, because design writing routinely presents that study as attention evidence when it is not."
      },
      "belongs": {
        "verdict": "core",
        "why": "Emphasis by space is one of the few ways to make something prominent without adding visual noise, and it works in print, product and environment alike."
      },
      "related": [
        93,
        108,
        119
      ]
    },
    {
      "n": 150,
      "title": "Optical centre versus mathematical centre",
      "aka": [
        "Visual centre"
      ],
      "oneLine": "Dead centre looks low, so a centred element usually needs nudging upwards.",
      demo: {
        caption: "Both marks sit in the same tile. The right one is raised above the dashed true middle and reads as centred.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Centred by maths</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 120 110\"><rect class=\"s-mute\" x=\"16\" y=\"11\" width=\"88\" height=\"88\" rx=\"16\"/><rect class=\"f\" x=\"47\" y=\"42\" width=\"26\" height=\"26\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M16 55 H43 M77 55 H104\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Centred by eye</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 120 110\"><rect class=\"s-mute\" x=\"16\" y=\"11\" width=\"88\" height=\"88\" rx=\"16\"/><rect class=\"f\" x=\"47\" y=\"38\" width=\"26\" height=\"26\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M16 55 H43 M77 55 H104\"/></svg></div></div></div>"
      },
      "what": "Place something exactly halfway down a rectangle and most people read it as sitting slightly below the middle. The standard response is to raise it a little. Rudolf Arnheim treats the frame's centre as a real perceptual force in The Power of the Center (1982) and discusses the downward pull of visual gravity. What nobody has established is the size of the correction. Figures circulate, they do not agree with one another, and none of them comes with a source.",
      "why": "It is the difference between a logo that looks placed and one that looks dropped. Anything centred inside a fixed box needs this check: an icon, a symbol on a sign, a wordmark inside a badge, a glyph in an app tile.",
      "how": [
        "Centre it mathematically, then raise it until it looks right, then stop.",
        "Judge at final size and from a normal viewing distance, not zoomed in.",
        "Flip the artwork vertically as a test. If the flipped version looks better balanced, your original was sitting low.",
        "Set the correction once per component and apply it consistently across the set."
      ],
      "example": "An app icon holding a single glyph in a rounded square. Centred by maths it reads as sagging, and a small lift fixes it.",
      "numbers": "None that I can stand behind. Blogs quote figures such as the optical centre sitting at 46 per cent of the height, but I could not trace any of them to a source, so treat them as guesses and use your eye.",
      "pitfall": "Applying one fixed percentage lift to everything. The right amount depends on how the element's own weight is distributed, so a bottom-heavy shape may need no lift at all.",
      "source": "Rudolf Arnheim, The Power of the Center (1982). The specific percentage figures in circulation are unsourced.",
      "verify": {
        "status": "disputed",
        "note": "The perceptual effect and the practice are real and universally taught. I searched for a published figure for the size of the correction and found only unsourced blog numbers, so I have not repeated them as fact."
      },
      "belongs": {
        "verdict": "core",
        "why": "Every centring decision in every tool is geometric by default, so knowing that geometry and perception disagree here is a working necessity."
      },
      "related": [
        89,
        151,
        152
      ]
    },
    {
      "n": 151,
      "title": "Optical alignment",
      "aka": [
        "Optical margin alignment",
        "Hanging punctuation"
      ],
      "oneLine": "Aligning by how things look rather than by their bounding boxes.",
      demo: {
        caption: "The grey lines mark the true margin. On the right the quote hangs outside it, so the first letter starts flush.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Aligned by the box</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\"><p>&ldquo;Bounding boxes lie.&rdquo;</p></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Aligned by eye</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\"><p style=\"text-indent:-0.38em\">&ldquo;Bounding boxes lie.&rdquo;</p></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div>"
      },
      "what": "Bounding boxes lie. A round letter, a triangle, a quotation mark and a rectangle all sit differently inside their boxes, so aligning the boxes leaves the shapes looking crooked. Optical alignment means shifting elements until the edges look flush. The oldest example is hanging punctuation, where punctuation is set slightly outside the text edge so the margin reads as straight. Gutenberg did it in the 42-line Bible.",
      "why": "Software aligns geometrically by default, which means every design starts fractionally wrong. Correcting it is a large part of what separates work that looks careful from work that looks generated.",
      "how": [
        "Let round and pointed shapes break the line a little. A circle has to overshoot a square's edge to look level with it.",
        "Hang punctuation, bullets and quotation marks outside the text block.",
        "Centre an arrow or a play triangle by its visual mass, not by its bounding box.",
        "Align icons to the cap height of adjacent text rather than to the line box."
      ],
      "example": "Adobe InDesign's Optical Margin Alignment, and the CSS hanging-punctuation property defined in CSS Text Module Level 3, which Safari supports.",
      "numbers": "",
      "pitfall": "Fixing the alignment in the design tool and losing it in code, because the developer worked from the bounding box the tool exported.",
      "source": "Long-standing typographic practice. Hanging punctuation appears in the Gutenberg Bible. The W3C CSS Text Module Level 3 defines hanging-punctuation.",
      "verify": {
        "status": "verified",
        "note": "Confirmed that hanging punctuation was used by Gutenberg in the Gutenberg Bible, that InDesign and QuarkXPress offer automatic optical margin alignment, and that hanging-punctuation is defined in the W3C CSS Text Module Level 3 specification, now at candidate recommendation, with partial support in Safari from version 10 and none in the other major browsers."
      },
      "belongs": {
        "verdict": "core",
        "why": "Alignment is one of the first things a viewer judges, and the tools get it wrong by default, so the correction has to be knowledge the designer carries."
      },
      "related": [
        117,
        152,
        153
      ]
    },
    {
      "n": 152,
      "title": "Optical correction (overshoot, weight compensation)",
      "aka": [
        "Optical compensation"
      ],
      "oneLine": "Drawing things unequally on purpose so that they look equal.",
      demo: {
        caption: "Both circles are drawn against the same two guides. The right one overshoots them by three per cent and looks equal.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Measured equal</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 110\"><rect class=\"f\" x=\"34\" y=\"25\" width=\"60\" height=\"60\"/><circle class=\"f\" cx=\"140\" cy=\"55\" r=\"30\"/><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M8 25 H192 M8 85 H192\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Drawn 3 per cent taller</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 110\"><rect class=\"f\" x=\"34\" y=\"25\" width=\"60\" height=\"60\"/><circle class=\"f\" cx=\"140\" cy=\"55\" r=\"31.8\"/><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M8 25 H192 M8 85 H192\"/></svg></div></div></div>"
      },
      "what": "A circle drawn to the same height as a square looks smaller, so type designers draw round and pointed letters taller and deeper than flat ones. That excess is overshoot. The same logic runs through a whole typeface: horizontal strokes are drawn thinner than verticals because horizontals look heavier, the crossbar of an H sits above the true middle, and the lower bowl of an S is drawn larger than the upper one. Hoefler and Frere-Jones put it plainly: \"to appear the same height as a square, a circle must be measurably taller\".",
      "why": "Every geometric shape you place is subject to this. Once you can see it you stop trusting the numbers in the inspector panel and start judging the result, which is the point at which drawn work starts to look professional.",
      "how": [
        "Let circles and triangles overshoot the cap line or the box they sit in.",
        "Draw horizontal strokes lighter than vertical ones in any mark you make.",
        "Set a crossbar or a horizontal divider slightly above the true midpoint.",
        "When mixing an icon with text, match apparent weight rather than stroke width in pixels."
      ],
      "example": "In almost any text typeface, the capital O rises above and drops below the capital H, and neither looks out of place.",
      "numbers": "Overshoot varies with the design, but roughly 1 to 3 per cent of cap height is typical for the capital O. Peter Karow's Digital Formats for Typefaces recommends 3 per cent for O and 5 per cent for A.",
      "pitfall": "Building an icon set on a strict geometric grid with no optical corrections. Every circle in it will look undersized beside every square.",
      "source": "Type design practice; Peter Karow, Digital Formats for Typefaces (Springer), page 26, for the 3 and 5 per cent figures; quotation from Jonathan Hoefler and Tobias Frere-Jones.",
      "verify": {
        "status": "verified",
        "note": "Checked the definition of overshoot, the typical 1 to 3 per cent range and Karow's 3 per cent for O and 5 per cent for A, cited to page 26 of Digital Formats for Typefaces. The Hoefler and Frere-Jones line is a direct quotation and is now marked as one rather than paraphrased into the surrounding prose."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the clearest case of perception overruling geometry, and it applies to type, icons, logos and layout equally."
      },
      "related": [
        150,
        151,
        153
      ]
    },
    {
      "n": 153,
      "title": "Optical spacing",
      "aka": [
        "Letterfit",
        "Optical kerning"
      ],
      "oneLine": "Spacing letters and elements by the white between them rather than by equal distances.",
      demo: {
        caption: "Equal distances leave the triangles stranded, because a slope traps far more white than the measured gap suggests.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Equal distances</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 60\"><rect class=\"f\" x=\"12\" y=\"24\" width=\"24\" height=\"24\"/><path class=\"f\" d=\"M50 48 L62 24 L74 48 Z\"/><rect class=\"f\" x=\"88\" y=\"24\" width=\"24\" height=\"24\"/><path class=\"f\" d=\"M126 48 L138 24 L150 48 Z\"/><rect class=\"f\" x=\"164\" y=\"24\" width=\"24\" height=\"24\"/><path class=\"s-mute\" d=\"M4 48.5 H196\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Equal white</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 60\"><rect class=\"f\" x=\"28\" y=\"24\" width=\"24\" height=\"24\"/><path class=\"f\" d=\"M58 48 L70 24 L82 48 Z\"/><rect class=\"f\" x=\"88\" y=\"24\" width=\"24\" height=\"24\"/><path class=\"f\" d=\"M118 48 L130 24 L142 48 Z\"/><rect class=\"f\" x=\"148\" y=\"24\" width=\"24\" height=\"24\"/><path class=\"s-mute\" d=\"M4 48.5 H196\"/></svg></div></div></div>"
      },
      "what": "Equal gaps do not look equal. Two flat-sided letters facing each other trap more white than two round ones, so a typeface spaced on identical side bearings, the built-in space each side of a letter, reads as lumpy. Type designers space by area of white instead: straight to straight needs the most, straight to round less, round to round less again, and open shapes such as L, T, V and A need judgement rather than a rule. The same logic applies to a row of icons or a strip of partner logos.",
      "why": "Uneven texture in a line of type is felt as difficulty even by readers who cannot see what is wrong with it. It is one of the clearest markers between amateur and professional lettering.",
      "how": [
        "Space using control strings such as HHOHOOH and nnonoon, judging the rhythm rather than reading the numbers.",
        "Kern only after the general fit is right. Kerning cannot rescue bad spacing.",
        "Letterspace capitals and small capitals, and leave lowercase running text alone.",
        "For a row of logos, equalise the visible white between them, not the distance between their bounding boxes."
      ],
      "example": "A client logo strip where a wide wordmark and a compact roundel are set at equal box gaps, and the roundel ends up looking stranded in the middle of the row.",
      "numbers": "",
      "pitfall": "Trusting a tool's optical kerning to rescue a badly fitted typeface. It smooths the worst pairs and leaves the underlying rhythm just as uneven.",
      "source": "Type design and lettering practice; origin unclear.",
      "verify": {
        "status": "verified",
        "note": "Confirmed the principle against the optical adjustment literature in type design, which treats spacing as a judgement about enclosed white rather than about measured distance. I looked for a single originating text and did not find one, so I attribute it to practice."
      },
      "belongs": {
        "verdict": "core",
        "why": "It governs the texture of every line of type on every piece of work, and the same judgement transfers directly to spacing icons and logos."
      },
      "related": [
        120,
        151,
        152
      ]
    },
    {
      "n": 154,
      "title": "Compositional closure",
      "aka": [
        "Closed and open form"
      ],
      "oneLine": "Whether a composition reads as finished and self-contained, or as a slice of something larger.",
      demo: {
        caption: "Every form resolves inside the frame on the left. On the right the same forms are cut and carry on outside.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Closed, tectonic</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"129\"/><rect class=\"f\" x=\"46\" y=\"26\" width=\"108\" height=\"66\"/><rect class=\"f-mute\" x=\"46\" y=\"100\" width=\"60\" height=\"14\"/><rect class=\"f-mute\" x=\"116\" y=\"100\" width=\"38\" height=\"14\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Open, a-tectonic</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"129\"/><rect class=\"f\" x=\"96\" y=\"52\" width=\"104\" height=\"78\"/><rect class=\"f-mute\" x=\"0\" y=\"14\" width=\"52\" height=\"30\"/><path class=\"s\" d=\"M0 0 L118 83\"/></svg></div></div></div>"
      },
      "what": "Two ideas sit under this heading. The first is Gestalt closure: the eye completes an implied line or shape, so three points can imply a triangle and a broken outline still reads as a circle. The second is Heinrich Wolfflin's distinction in Kunstgeschichtliche Grundbegriffe (1915) between closed, or tectonic, form and open, or a-tectonic, form. Closed compositions turn inward and settle against the frame. Open ones run past it and imply a world carrying on outside. Wolfflin used the pair to separate Renaissance from Baroque painting.",
      "why": "Choosing between them is a decision about what the piece is for. Closed suits a poster or a book cover that has to work as an object. Open suits an image that should feel like a moment lifted out of something bigger.",
      "how": [
        "For closure, keep the main forms inside the frame, echo the frame's angles, and resolve the edges.",
        "For openness, cut a major form at the edge and let a line exit through a corner.",
        "Use implied closure to save ink: three aligned dots do the work of a drawn line.",
        "Pick one and hold it across a series. Mixing the two makes a set look inconsistent rather than varied."
      ],
      "example": "A formal portrait fully contained within its frame, against a street photograph where half a passer-by is cut off at the edge.",
      "numbers": "",
      "pitfall": "Cropping a form only just at the edge, which reads as a slip rather than as an open composition. Cut decisively or not at all.",
      "source": "Gestalt closure (Max Wertheimer, 1923); Heinrich Wolfflin, Kunstgeschichtliche Grundbegriffe (1915), on closed and open form.",
      "verify": {
        "status": "verified",
        "note": "Confirmed Wolfflin's 1915 book and that his five pairs of concepts include closed, or tectonic, versus open, or a-tectonic, form, used to contrast Renaissance with Baroque composition."
      },
      "belongs": {
        "verdict": "core",
        "why": "It names a decision every composition makes whether or not the designer notices, and it comes with a documented art-historical source."
      },
      "related": [
        113,
        147,
        158
      ]
    },
    {
      "n": 9104,
      "title": "Structure (formal, semi-formal, informal)",
      "aka": [
        "Underlying structure",
        "Structural grid"
      ],
      "oneLine": "The invisible framework that decides where repeated elements are allowed to sit.",
      demo: {
        caption: "Three structures for one repeated unit: a strict grid, the same grid broken in places, and no repeating interval at all.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 112\"><text class=\"t\" x=\"0\" y=\"10\">FORMAL</text><text class=\"t\" x=\"115\" y=\"10\">SEMI-FORMAL</text><text class=\"t\" x=\"230\" y=\"10\">INFORMAL</text><rect class=\"s-mute\" x=\"0.5\" y=\"18.5\" width=\"89\" height=\"89\"/><rect class=\"s-mute\" x=\"115.5\" y=\"18.5\" width=\"89\" height=\"89\"/><rect class=\"s-mute\" x=\"230.5\" y=\"18.5\" width=\"89\" height=\"89\"/><rect class=\"f\" x=\"4\" y=\"22\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"34\" y=\"22\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"64\" y=\"22\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"4\" y=\"52\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"34\" y=\"52\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"64\" y=\"52\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"4\" y=\"82\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"34\" y=\"82\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"64\" y=\"82\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"119\" y=\"22\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"149\" y=\"22\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"179\" y=\"22\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"119\" y=\"52\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"179\" y=\"52\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"119\" y=\"82\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"149\" y=\"74\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"179\" y=\"82\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"234\" y=\"22\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"263\" y=\"30\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"292\" y=\"20\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"238\" y=\"54\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"268\" y=\"47\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"294\" y=\"58\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"243\" y=\"84\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"272\" y=\"76\" width=\"22\" height=\"22\"/><rect class=\"f\" x=\"296\" y=\"82\" width=\"22\" height=\"22\"/></svg></div>"
      },
      "what": "Wong gives structure a chapter of its own, placed immediately after repetition, because every other principle in his book runs on top of it. A structure can be formal, with units in strict regular positions, semi-formal, with a regular skeleton that is broken in places, or informal, with no regular repetition at all. Structural lines can be visible, printed as rules, or invisible, felt only through the positions of the units. They can also be active, cutting the units they cross into separate shapes, or inactive, merely locating them.",
      "why": "Naming the structure separates two decisions that get muddled: what the repeating unit is, and where it is allowed to go. Once the structure is fixed, most layout arguments disappear, because there are only so many legal positions. It also explains why informal compositions can still feel ordered, since a felt structure is still a structure.",
      "how": [
        "Decide the structure before the content, then place content into it rather than deriving it afterwards.",
        "Choose semi-formal deliberately when you want order plus exceptions, and record which exceptions are allowed.",
        "Keep structural lines invisible unless a rule genuinely helps the reader find something.",
        "If a layout feels arbitrary, the fault is usually a missing structure rather than a badly drawn element."
      ],
      "example": "Graph paper: a formal, inactive, invisible-in-effect structure that decides where every mark can go without appearing in the finished drawing.",
      "numbers": "",
      "pitfall": "Treating structure as identical to a column grid. Page grids are one kind of formal structure; radial, spiral and informal structures follow the same logic and none of them has columns.",
      "source": "Wucius Wong, Principles of Two-Dimensional Design (Van Nostrand Reinhold, 1972), chapter on Structure",
      "verify": {
        "status": "verified",
        "note": "Structure confirmed as a chapter of Wong's Principles of Two-Dimensional Design, immediately after Repetition, from the publisher's contents listing (Introduction, Form, Repetition, Structure, Similarity, Gradation, Radiation, Anomaly, Contrast, Concentration, Texture, Space). Formal, semi-formal, informal, active, inactive, visible and invisible structure are confirmed as Wong's own sub-headings from the contents of his later Principles of Form and Design, which absorbs this material. I have not read the printed chapter itself."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the organising frame that repetition, gradation, radiation, anomaly and concentration all depend on. The master list covers page grids at 406 to 412 but not the broader idea of formal, semi-formal and informal structure."
      },
      "related": [
        101,
        104,
        106,
        107,
        131,
        409
      ]
    },
    {
      "n": 9137,
      "title": "Lead room (rule of space)",
      "aka": [
        "Nose room",
        "Rule of space"
      ],
      "oneLine": "Leave space in front of a subject that is facing or moving in a particular direction.",
      demo: {
        caption: "The same shape faces right in both. Only the right-hand frame gives its direction somewhere to go.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No room ahead</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M66.7 0 V120 M133.3 0 V120\"/><g transform=\"translate(160,45)\"><path class=\"f\" d=\"M0 0 L26 15 L0 30 Z\"/></g></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Room ahead</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"199\" height=\"119\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M66.7 0 V120 M133.3 0 V120\"/><g transform=\"translate(40,45)\"><path class=\"f\" d=\"M0 0 L26 15 L0 30 Z\"/></g></svg></div></div></div>"
      },
      "what": "A moving car, a walking figure or a person looking to one side needs space ahead of them in the frame. Photography and broadcast call it lead room or nose room. Without it the subject looks blocked; with it the movement or the gaze has somewhere to go. Bertamini, Bennett and Bode measured three collections of animal pictures, including 218 engravings by Thomas Bewick and 71 works by George Stubbs, and found a consistent anterior bias: more space in front of the animal than behind it. That is evidence that artists really do compose this way, not evidence that viewers prefer it.",
      "why": "It is one of the few placement rules with any published measurement behind it, and it explains why a centred portrait of someone looking sideways feels uncomfortable even to people who cannot say why.",
      "how": [
        "Place the subject on the third opposite the direction they face or move.",
        "Give more space in front than behind. Equal space reads as indecision.",
        "In a static portrait, treat the direction of the gaze as movement.",
        "Reverse it deliberately when you want the subject to feel hemmed in."
      ],
      "example": "A photograph of a runner with clear track ahead of them rather than behind them.",
      "numbers": "",
      "pitfall": "An automated centre crop places the subject in the middle of the new frame and destroys the lead room the photographer built in.",
      "source": "Standard photographic and broadcast practice; Bertamini, Bennett and Bode, The anterior bias in visual art: the case of images of animals, Laterality 16(6), 2011, pages 673 to 689.",
      "verify": {
        "status": "adjusted",
        "note": "Confirmed the citation, including the volume, issue and page range, and confirmed that the paper analyses existing artworks rather than testing viewer preference. I have rewritten the claim accordingly: the earlier draft said the study gave the preference published support, which overstates it. What the study establishes is that artists leave more space in front of an animal than behind it, across large samples. Whether audiences prefer that arrangement is a separate question the paper does not settle."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a placement rule that sits alongside the rule of thirds in every photography and video brief, it has a published measurement behind it, and it is missing from the master list."
      },
      "related": [
        119,
        111,
        136
      ]
    },
    {
      "n": 9147,
      "title": "Safe area (title-safe and action-safe)",
      "aka": [
        "Title-safe",
        "Action-safe"
      ],
      "oneLine": "A margin inside the frame that guarantees essential content survives any screen or crop.",
      demo: {
        caption: "EBU R 95's two insets, drawn to scale. The lower bars stay inside the graphics line; the top one crosses both.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 210\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"319\" height=\"179\"/><rect class=\"f-mute\" x=\"16\" y=\"108\" width=\"294\" height=\"12\"/><rect class=\"f\" x=\"16\" y=\"132\" width=\"150\" height=\"12\"/><rect class=\"f\" x=\"16\" y=\"150\" width=\"104\" height=\"10\"/><rect class=\"s-mute\" stroke-dasharray=\"4 3\" x=\"11.2\" y=\"6.3\" width=\"297.6\" height=\"167.4\"/><rect class=\"s-accent\" stroke-dasharray=\"4 3\" x=\"16\" y=\"9\" width=\"288\" height=\"162\"/><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M4 196 H24\"/><text class=\"t\" x=\"30\" y=\"199\">ACTION SAFE 3.5%</text><path class=\"s-accent\" stroke-dasharray=\"4 3\" d=\"M150 196 H170\"/><text class=\"t\" x=\"176\" y=\"199\">GRAPHICS SAFE 5%</text></svg></div>"
      },
      "what": "Safe area is covered in full at 423, in the layout section, which also takes in the screen version of the idea. What belongs here is the composition point. Broadcast holds the only published, measured version of edge tension: the European Broadcasting Union's Recommendation R 95 sets an action safe area for essential action and a smaller graphics safe area for all text, and social video repeats the discipline because the platform's own interface sits over the edges of the frame.",
      "why": "Every other edge rule in this section is a matter of taste. This one has a number, so it is the one you can hold a layout to.",
      "how": [
        "Keep all type inside the graphics safe area, not merely inside the frame.",
        "Design one master with safe margins rather than reformatting after the fact.",
        "For the interface insets and the rest of the practice, work from 423."
      ],
      "example": "A lower-third caption on a television news bulletin, always inset from the picture edge by a visible margin.",
      "numbers": "EBU R 95: action safe area 3.5 per cent and graphics safe area 5 per cent, measured at the top, bottom and each side, which is 7 per cent and 10 per cent of the complete image.",
      "pitfall": "Titles set to the frame edge in a 16:9 master, then cropped to 1:1 for social, losing the ends of every line.",
      "source": "EBU Recommendation R 95, Safe areas for 16:9 television production.",
      "verify": {
        "status": "verified",
        "note": "Checked the EBU's own publication page for R 95, which states the action safe area is 3.5 per cent and the graphics safe area 5 per cent at the top, bottom and lateral parts of the image, giving 7 per cent and 10 per cent of the complete image. Rewritten as a cross-reference to 423 during duplicate resolution, because the two cards described the same standard. No claim was changed, only shortened."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the published, testable version of edge tension for any work that will be cropped or reformatted, which now includes almost all moving image work. The full treatment lives at 423."
      },
      "related": [
        119,
        146,
        147,
        423
      ]
    }
  ]
};
