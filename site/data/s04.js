window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[4] = {
  n: 4,
  slug: "gestalt",
  title: "Gestalt principles of perception",
  blurb: "How the eye groups marks into objects, and the rules that decide what reads as one thing.",
  intro: "Gestalt psychology started in Berlin in the 1910s and 1920s with Max Wertheimer, Kurt Koffka and Wolfgang Köhler. Their claim was that the eye does not add up dots and lines one at a time; it organises them into wholes before you have consciously done anything. Wertheimer's 1923 paper set out the grouping factors designers still use daily, and Edgar Rubin's 1915 thesis set out figure and ground. Treat these as reliable descriptions of what people will see rather than as a theory of the brain. Köhler's cortical field explanation was tested by Lashley, Chow and Semmes (1951) and by Sperry and Miner (1955) and did not hold up, while the perceptual effects themselves have been measured repeatedly and stand. Where the laboratory result is weaker than the design folklore, which happens with convexity and with symmetry, the entry says so.",
  sources: [
    "Max Wertheimer, Untersuchungen zur Lehre von der Gestalt II, Psychologische Forschung 4 (1923); English translation Laws of Organization in Perceptual Forms (1938)",
    "Edgar Rubin, Synsoplevede Figurer (1915)",
    "Kurt Koffka, Principles of Gestalt Psychology (1935)",
    "Stephen E. Palmer, Common Region: A New Principle of Perceptual Grouping, Cognitive Psychology 24 (1992)",
    "Stephen E. Palmer and Irvin Rock, Rethinking Perceptual Organization: The Role of Uniform Connectedness, Psychonomic Bulletin and Review 1 (1994)",
    "Stephen E. Palmer, Vision Science: Photons to Phenomenology (1999)",
    "Stephen E. Palmer, Perceptual Grouping: It's Later Than You Think, Current Directions in Psychological Science (2002)",
    "E. Van der Hulst, E. van Heusden, J. Wagemans and others, Additivity of grouping by proximity and luminance similarity is dependent on relative grouping strength, Attention, Perception and Psychophysics 86 (2024), pages 1186 to 1205",
    "Gaetano Kanizsa, Margini quasi-percettivi in campi con stimolazione omogenea, Rivista di Psicologia 49 (1955), pages 7 to 30",
    "Friedrich Schumann, Beitraege zur Analyse der Gesichtswahrnehmungen, Zeitschrift fuer Psychologie und Physiologie der Sinnesorgane 23 (1900), pages 1 to 32",
    "Gaetano Kanizsa and Walter Gerbino, Convexity and Symmetry in Figure-Ground Organization, in Mary Henle (editor), Vision and Artifact (Springer, 1976)",
    "Michael Kubovy and Johan Wagemans, Grouping by Proximity and Multistability in Dot Lattices: A Quantitative Gestalt Theory, Psychological Science 6 (1995), pages 225 to 234",
    "Michael Kubovy and Martin van den Berg, The Whole Is Equal to the Sum of Its Parts: A Probabilistic Model of Grouping by Proximity and Similarity in Regular Patterns, Psychological Review 115 (2008)",
    "Allison B. Sekuler and Patrick J. Bennett, Generalized Common Fate: Grouping by Common Luminance Changes, Psychological Science 12 (2001), pages 437 to 444",
    "David Alais, Randolph Blake and Sang-Hun Lee, Visual Features That Vary Together over Time Group Together over Space, Nature Neuroscience 1 (1998), pages 160 to 164",
    "Mary A. Peterson and Bradley S. Gibson, Must Figure-Ground Organization Precede Object Recognition? An Assumption in Peril, Psychological Science 5 (1994), pages 253 to 259",
    "Mary A. Peterson, The Proper Placement of Uniform Connectedness, Psychonomic Bulletin and Review 1 (1994), with the reply by Palmer and Rock, On the Nature and Order of Organizational Processing",
    "Mary A. Peterson and Elizabeth Salvagio, Inhibitory Competition in Figure-Ground Perception: Context and Convexity, Journal of Vision 8 (2008)",
    "Mary A. Peterson and Elizabeth Salvagio, Figure-ground perception, Scholarpedia 5(4):4320 (2010)",
    "Steven Lehar, Gestalt Isomorphism and the Primacy of Subjective Conscious Experience: A Gestalt Bubble Model, Behavioral and Brain Sciences 26 (2003), pages 375 to 408",
    "Johan Wagemans and others, A Century of Gestalt Psychology in Visual Perception I: Perceptual Grouping and Figure-Ground Organization, Psychological Bulletin 138 (2012)",
    "Shelia Guberman, Gestalt Theory Rearranged: Back to Wertheimer, Frontiers in Psychology 8 (2017), article 1782",
    "Karl S. Lashley, Kao Liang Chow and Josephine Semmes, An Examination of the Electrical Field Theory of Cerebral Integration, Psychological Review 58 (1951), pages 123 to 136",
    "Louis Albert Necker, Observations on Some Remarkable Optical Phaenomena Seen in Switzerland, London and Edinburgh Philosophical Magazine and Journal of Science 1 (1832)",
    "Nielsen Norman Group, Gestalt principles for user interface design (article and video series)"
  ],
  entries: [
    {
      n: 155,
      title: "Prägnanz (law of good figure)",
      aka: ["Law of good Gestalt", "Law of simplicity"],
      oneLine: "Given a choice, the eye settles on the simplest, most stable reading of what it sees.",
      demo: {
        caption: "Same nine bars both sides. Even gaps and ragged edges give nine things; grouped gaps and one edge give three.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Nine groups</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:10px\"><span class=\"db-bar db-bar--ink\" style=\"width:44%;margin-left:0\"></span><span class=\"db-bar db-bar--ink\" style=\"width:62%;margin-left:16%\"></span><span class=\"db-bar db-bar--ink\" style=\"width:38%;margin-left:5%\"></span><span class=\"db-bar db-bar--ink\" style=\"width:66%;margin-left:22%\"></span><span class=\"db-bar db-bar--ink\" style=\"width:48%;margin-left:9%\"></span><span class=\"db-bar db-bar--ink\" style=\"width:60%;margin-left:2%\"></span><span class=\"db-bar db-bar--ink\" style=\"width:52%;margin-left:19%\"></span><span class=\"db-bar db-bar--ink\" style=\"width:58%;margin-left:7%\"></span><span class=\"db-bar db-bar--ink\" style=\"width:41%;margin-left:13%\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three groups</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:20px\"><div class=\"db-col\" style=\"gap:4px\"><span class=\"db-bar db-bar--ink\" style=\"width:44%\"></span><span class=\"db-bar db-bar--ink\" style=\"width:62%\"></span><span class=\"db-bar db-bar--ink\" style=\"width:38%\"></span></div><div class=\"db-col\" style=\"gap:4px\"><span class=\"db-bar db-bar--ink\" style=\"width:66%\"></span><span class=\"db-bar db-bar--ink\" style=\"width:48%\"></span><span class=\"db-bar db-bar--ink\" style=\"width:60%\"></span></div><div class=\"db-col\" style=\"gap:4px\"><span class=\"db-bar db-bar--ink\" style=\"width:52%\"></span><span class=\"db-bar db-bar--ink\" style=\"width:58%\"></span><span class=\"db-bar db-bar--ink\" style=\"width:41%\"></span></div></div></div></div></div>"
      },
      what: "Wertheimer used the German word Prägnanz for the way some arrangements snap into a clear, settled form. Koffka turned it into a general law in 1935: organisation will be as good as the prevailing conditions allow. Faced with a messy set of marks, people do not hold every reading open. They land on one, usually the one with the fewest separate parts and the most regularity.",
      why: "This explains why a layout either clicks or feels like work. Give an arrangement one obvious simple reading and people get it without effort. Leave two readings competing and the eye keeps re-parsing the page while the content pays for it.",
      how: [
        "Squint until the detail blurs. If the big shapes do not resolve into a small, nameable set, the reading has not settled.",
        "Reduce the number of distinct visual groups before you polish any of them.",
        "Align on shared edges so the eye resolves the page into rectangles instead of a scatter.",
        "Where two readings compete, strengthen one cue and delete the other. A third cue makes it worse."
      ],
      example: "A UK motorway direction sign. Each destination sits in one aligned row with its route number and one arrow, so a driver resolves a handful of blocks at speed instead of twenty separate items.",
      numbers: "",
      pitfall: "Designers hear simplicity and start deleting content. Prägnanz is about the number of visual groups, not the amount of information. A dense table with one clean structure reads as simple; six loosely styled sections with little in them do not.",
      source: "Max Wertheimer (1923) used the term; Kurt Koffka gave the general statement in Principles of Gestalt Psychology (1935).",
      verify: {
        status: "disputed",
        note: "Checked Wertheimer's 1923 paper in the York University Classics in the History of Psychology translation: he writes about a good Gestalt recognised by its inner necessity, but does not set Prägnanz out as one of his numbered factors. Koffka (1935) supplies the general law and concedes that the word good in it is undefined. Shelia Guberman, Gestalt Theory Rearranged: Back to Wertheimer, Frontiers in Psychology 8 (2017), article 1782, makes the specific charge: the sentence Prägnanz is a tendency to the good Gestalt gets attributed to Wertheimer 1923, but Wertheimer used the word Prägnanz only as an attribute of Stufen, and the phrase good Gestalt as an appeal to intuition rather than a definition. Guberman also reports, via Neisser, that Köhler was troubled by the circularity of the law and kept asking for a better definition of Prägnanz. Real and useful, contested in its wording and its source."
      },
      belongs: {
        verdict: "core",
        why: "It is the umbrella claim under every other entry here and the reason simplification works at all. A designer applies it whenever they choose between two possible readings of a layout."
      },
      related: [156, 158, 167]
    },
    {
      n: 156,
      title: "Proximity (Gestalt)",
      aka: ["Proximity", "Factor of proximity", "Nearness"],
      oneLine: "Things placed close together are read as belonging together, before anyone reads the words.",
      demo: {
        caption: "Same four items. Every gap matches on the left, so each label floats between two fields; on the right it picks one.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Every gap equal</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:16px\"><span class=\"db-label\" style=\"margin-bottom:0\">Email</span><span class=\"db-input\">jan@example.com</span><span class=\"db-label\" style=\"margin-bottom:0\">Telephone</span><span class=\"db-input\">07700 900123</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Gaps grouped</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:28px\"><div class=\"db-col\" style=\"gap:4px\"><span class=\"db-label\" style=\"margin-bottom:0\">Email</span><span class=\"db-input\">jan@example.com</span></div><div class=\"db-col\" style=\"gap:4px\"><span class=\"db-label\" style=\"margin-bottom:0\">Telephone</span><span class=\"db-input\">07700 900123</span></div></div></div></div></div>"
      },
      what: "Wertheimer's first named factor. Spacing alone decides grouping: cut the gap between two items and people treat them as one unit, widen it and they split. In a plain layout it beats almost every other cue, and it works on items that look nothing alike. This is the perceptual finding. Robin Williams's proximity at 118 is the design instruction built on top of it, and that is the one to read for how to space a page.",
      why: "Proximity is the cheapest grouping tool you own, because it costs no ink, no colour and no box. It also works against you silently, which is why a caption sitting equidistant between two photographs belongs to neither.",
      how: [
        "Set the gap inside a group smaller than the gap around it, and keep that relationship consistent.",
        "Attach labels to their fields with space, not with a line or a colour.",
        "Before adding a divider, try removing space instead. Most dividers are patching bad spacing.",
        "Audit anything sitting halfway between two groups. It has no owner, so readers pick one at random."
      ],
      example: "Web forms. Put the label directly above its input with a small gap, then a larger gap before the next field, and mis-filling drops. Label placement is one of the main subjects of Luke Wroblewski's Web Form Design (2008).",
      numbers: "Kubovy and Wagemans (1995) measured proximity grouping in dot lattices and found it depends only on the distance between dots, not on the angle or the wider configuration. They called it the pure distance law. No pixel value for design follows from it.",
      pitfall: "Equal spacing everywhere. If every gap on the page is the same, nothing is grouped, and the reader has to work the structure out from the content instead.",
      source: "Max Wertheimer, Untersuchungen zur Lehre von der Gestalt II (1923), where it appears as the Factor of Proximity.",
      verify: {
        status: "verified",
        note: "Read the phrase Factor of Proximity in the 1923 translation hosted by York University's Classics in the History of Psychology. The pure distance law checked against Kubovy and Wagemans (1995) as summarised in Wagemans and others, Psychological Bulletin 138 (2012)."
      },
      belongs: {
        verdict: "core",
        why: "The single most used principle in layout. Every spacing scale, every form, every card is an application of it."
      },
      related: [157, 161, 118]
    },
    {
      n: 157,
      title: "Similarity (Gestalt)",
      aka: ["Similarity", "Factor of similarity", "Likeness"],
      oneLine: "Items sharing a visual quality are read as one set, even when spread far apart.",
      demo: {
        caption: "Spacing is identical on both sides. Only the shapes change, and the right reads as vertical columns rather than a field.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">One shape</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Two shapes</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-sq\"></span><span class=\"db-dot\"></span><span class=\"db-sq\"></span><span class=\"db-dot\"></span><span class=\"db-sq\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-sq\"></span><span class=\"db-dot\"></span><span class=\"db-sq\"></span><span class=\"db-dot\"></span><span class=\"db-sq\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-sq\"></span><span class=\"db-dot\"></span><span class=\"db-sq\"></span><span class=\"db-dot\"></span><span class=\"db-sq\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-sq\"></span><span class=\"db-dot\"></span><span class=\"db-sq\"></span><span class=\"db-dot\"></span><span class=\"db-sq\"></span></div></div></div></div></div>"
      },
      what: "Wertheimer's Factor of Similarity: like parts band together. Shared colour, shape, size, weight or orientation pulls items into a group across a gap. It is the grouping cue that survives distance, which is why it carries most of the work in tables, legends and navigation. This is the perceptual law. Wong's similarity at 110 is the studio version, a rule for building a set of things that belong together.",
      why: "It lets you say two things are the same kind without moving them next to each other. It also sets expectations about behaviour, because things that look the same are assumed to do the same. A link styled like a button gets treated as a button.",
      how: [
        "Give each attribute one meaning. Colour for status, shape for type, weight for hierarchy.",
        "Make elements of the same kind identical, not similar. Two nearly matching greys read as a mistake.",
        "If two things behave differently, make the difference visible at a glance.",
        "Check the design in greyscale. If a grouping disappears, you have encoded it in hue alone."
      ],
      example: "A chart legend runs purely on similarity. The swatch has no spatial relationship to the line it names, only a shared colour, and that is enough to bind them.",
      numbers: "Kubovy and van den Berg (2008), in Psychological Review, found grouping by proximity and grouping by luminance similarity add together rather than one simply overriding the other. Van der Hulst and others (2024) replicated that result, then enlarged the luminance difference so the two cues were closer in grouping strength, and the additivity broke down into an interaction. Whether two cues add or interact depends on how their strengths compare. No design threshold follows from either result.",
      pitfall: "Accidental similarity. A heading and a data label set at the same size and weight will be read as the same kind of thing, whatever you intended them to be.",
      source: "Max Wertheimer (1923), Factor of Similarity.",
      verify: {
        status: "verified",
        note: "Phrase confirmed in the 1923 translation at York University's Classics in the History of Psychology. Kubovy and van den Berg (2008) confirmed in the reference list of Wagemans and others, Psychological Bulletin 138 (2012): The Whole Is Equal to the Sum of Its Parts, Psychological Review 115, pages 131 to 154. I read the abstract of Van der Hulst, van Heusden, Wagemans and others, Additivity of grouping by proximity and luminance similarity is dependent on relative grouping strength, Attention, Perception and Psychophysics 86 (2024), online September 2023. A previous version of this entry had that study the wrong way round. Additivity survived their replication and broke down once they balanced the strength of the two cues, not the reverse."
      },
      belongs: {
        verdict: "core",
        why: "It is how every component library works: same appearance, same behaviour. Breaking it is the fastest way to make an interface untrustworthy."
      },
      related: [156, 110, 318]
    },
    {
      n: 158,
      title: "Closure",
      aka: ["Factor of closure"],
      oneLine: "The eye completes an unfinished shape, filling gaps so it reads as one whole object.",
      demo: {
        caption: "Gaps widen from left to right. The middle ring is still one circle; by the right it has become four arcs.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 110\"><circle class=\"s\" cx=\"55\" cy=\"44\" r=\"34\"/><circle class=\"s\" cx=\"165\" cy=\"44\" r=\"34\" style=\"stroke-dasharray:45 8\"/><circle class=\"s\" cx=\"275\" cy=\"44\" r=\"34\" style=\"stroke-dasharray:20 33\"/><text class=\"t\" x=\"55\" y=\"100\" text-anchor=\"middle\">no gap</text><text class=\"t\" x=\"165\" y=\"100\" text-anchor=\"middle\">small gaps</text><text class=\"t\" x=\"275\" y=\"100\" text-anchor=\"middle\">large gaps</text></svg></div>"
      },
      what: "Wertheimer's Factor of Closure. A form that nearly closes is seen as closed. Break a circle in four places and people still see a circle with gaps, not four separate arcs. The visual system prefers a finished contour to a set of fragments.",
      why: "You can imply a shape instead of drawing it, which buys a lighter, quieter design. The flip side is that readers will invent an edge you never drew, so an accidental near-enclosure gets read as a container.",
      how: [
        "Draw less of the box. Corner marks or two opposing edges often hold a group as well as a full border does.",
        "Lighten dense layouts by replacing boxes with alignment and white space, and let the eye supply the rectangle.",
        "Keep gaps small relative to the whole contour. A gap that is a large fraction of the shape stops reading as one form.",
        "Check icons at their smallest real size. Gaps that close nicely at 24px can look like a solid blob at 16px."
      ],
      example: "The WWF panda. The mark is a set of black shapes with no outline, and the white of the page supplies the body and the missing edges. First sketched by Gerald Watterson in 1961 and drawn up by Sir Peter Scott.",
      numbers: "",
      pitfall: "Over-closing is the commoner mistake. Put a border round every group and the page has no hierarchy left, because every group is equally enclosed.",
      source: "Max Wertheimer (1923), Factor of Closure.",
      verify: {
        status: "verified",
        note: "Factor of Closure confirmed in the 1923 translation at York University's Classics in the History of Psychology. WWF logo history taken from WWF's own published account: Gerald Watterson's 1961 sketches, drawn up by Sir Peter Scott, inspired by the panda Chi-Chi at London Zoo."
      },
      belongs: {
        verdict: "core",
        why: "It is the licence to remove borders, and it is the reason implied containment works. Directly usable in logo work, iconography and layout."
      },
      related: [171, 159, 155]
    },
    {
      n: 159,
      title: "Continuity (good continuation)",
      aka: ["Factor of direction", "Factor of the good curve"],
      oneLine: "The eye follows the smoothest path through a set of marks and treats it as one line.",
      demo: {
        caption: "The same crossing point. The eye takes the two smooth lines on the left, never the two corners on the right.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 112\"><path class=\"s\" d=\"M12 18 L148 88\"/><path class=\"s-accent\" d=\"M12 88 L148 18\"/><text class=\"t\" x=\"80\" y=\"108\" text-anchor=\"middle\">seen: two lines crossing</text><path class=\"s\" d=\"M188 18 L256 53 L188 88\"/><path class=\"s-accent\" d=\"M324 18 L256 53 L324 88\"/><text class=\"t\" x=\"256\" y=\"108\" text-anchor=\"middle\">not seen: two corners</text></svg></div>"
      },
      what: "Wertheimer called this the Factor of Direction and the Factor of the good curve. Where lines cross or elements form a run, people see the version that continues smoothly, not the version that turns a sharp corner. A row of items reads as a row even when the items differ from each other.",
      why: "This is why alignment works. A shared edge creates an invisible line and the eye follows it down the page, which is what makes an ordered layout feel ordered. It also steers attention, so a curve or a run of elements pulls the eye along it whether you meant that or not.",
      how: [
        "Align to a small number of vertical edges so the invisible lines are few and strong.",
        "Set carousels and horizontal lists so the next item is partly visible. The cut-off item continues the run and signals more content.",
        "Where a path should stop, break the alignment on purpose instead of hoping the reader stops.",
        "Watch for accidental lines formed by ragged text edges, image corners and icon centres."
      ],
      example: "A column of right-aligned figures in a table reads as one column because the digits form a single continuous edge. Knock one entry out of alignment and the eye stops following the column and starts inspecting rows.",
      numbers: "",
      pitfall: "Good continuation will happily carry the eye straight out of the content area. A strong diagonal, or a run of images pointing off-canvas, takes attention with it.",
      source: "Max Wertheimer (1923), Factor of Direction and Factor of the good curve.",
      verify: {
        status: "verified",
        note: "Both phrasings confirmed in the 1923 translation at York University's Classics in the History of Psychology. Worth knowing that continuity and good continuation are the later textbook names; Wertheimer's own words are direction and good curve."
      },
      belongs: {
        verdict: "core",
        why: "It is the perceptual reason grids and alignment do anything at all, and it explains why the eye travels the way it does across a page."
      },
      related: [117, 155, 144]
    },
    {
      n: 160,
      title: "Common fate",
      aka: ["Factor of uniform destiny"],
      oneLine: "Things that move together are seen as one group, whatever they look like.",
      demo: {
        caption: "Four dots leave the grid on the same path and the same beat, and read as one object across four rows.",
        html: "<div class=\"db-stage\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-anim db-anim--slide db-anim--ease\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot\"></span><span class=\"db-dot db-anim db-anim--slide db-anim--ease\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot db-anim db-anim--slide db-anim--ease\"></span><span class=\"db-dot\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot db-anim db-anim--slide db-anim--ease\"></span></div></div></div>"
      },
      what: "Wertheimer's Factor of Uniform Destiny, usually translated as common fate. Elements that change in the same way at the same time are grouped, and motion is the strongest version. It can override proximity and similarity: a scattered set of dots that all drift left becomes one object.",
      why: "Motion grouping is fast and hard to ignore, which makes it your strongest tool for showing what belongs to what during a change. The cost is that unrelated things animating together get read as related.",
      how: [
        "Animate a group as one unit when it enters, moves or leaves. Anything that animates separately reads as separate.",
        "Use it for multi-select. Dragging four selected rows should move all four as one block, not as four independent items.",
        "In filtering and sorting, move the surviving items together so the reader can see what was kept.",
        "Never give two unrelated regions the same timing and direction. They will look like one thing."
      ],
      example: "Select several files in a desktop file manager and drag them. They travel as one stack, and the grouping is obvious even though the icons are all different.",
      numbers: "",
      pitfall: "This is why decorative motion is expensive. A background element drifting on the same easing as your call to action gets bundled with it.",
      source: "Max Wertheimer (1923), Factor of Uniform Destiny (Common Fate). Sekuler and Bennett (2001) extended it beyond motion to shared changes such as luminance.",
      verify: {
        status: "verified",
        note: "The wording Factor of Uniform Destiny (or of Common Fate) confirmed in the 1923 translation at York University. The generalisation beyond motion is credited to Sekuler and Bennett (2001) in Wagemans and others, Psychological Bulletin 138 (2012)."
      },
      belongs: {
        verdict: "core",
        why: "Every animated state change in an interface is a common fate decision, and getting it wrong groups things that have nothing to do with each other."
      },
      related: [9160, 157, 741]
    },
    {
      n: 9160,
      title: "Synchrony",
      aka: ["Grouping by simultaneous change"],
      oneLine: "Things that change at the same instant are grouped, even when nothing moves.",
      demo: {
        caption: "Nothing moves in either. The left fades row by row and reads as five items; the right fades on one beat.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Staggered</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--tall db-bar--ink db-anim db-anim--fade db-anim--ease\" style=\"animation-delay:0s\"></span><span class=\"db-bar db-bar--tall db-bar--ink db-anim db-anim--fade db-anim--ease\" style=\"animation-delay:0.16s\"></span><span class=\"db-bar db-bar--tall db-bar--ink db-anim db-anim--fade db-anim--ease\" style=\"animation-delay:0.32s\"></span><span class=\"db-bar db-bar--tall db-bar--ink db-anim db-anim--fade db-anim--ease\" style=\"animation-delay:0.48s\"></span><span class=\"db-bar db-bar--tall db-bar--ink db-anim db-anim--fade db-anim--ease\" style=\"animation-delay:0.64s\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Simultaneous</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--tall db-bar--ink db-anim db-anim--fade db-anim--ease\" style=\"animation-delay:0s\"></span><span class=\"db-bar db-bar--tall db-bar--ink db-anim db-anim--fade db-anim--ease\" style=\"animation-delay:0s\"></span><span class=\"db-bar db-bar--tall db-bar--ink db-anim db-anim--fade db-anim--ease\" style=\"animation-delay:0s\"></span><span class=\"db-bar db-bar--tall db-bar--ink db-anim db-anim--fade db-anim--ease\" style=\"animation-delay:0s\"></span><span class=\"db-bar db-bar--tall db-bar--ink db-anim db-anim--fade db-anim--ease\" style=\"animation-delay:0s\"></span></div></div></div></div>"
      },
      what: "Common fate covers elements moving the same way. Synchrony is the wider case: elements that change at the same instant group together, whatever the change is. Palmer lists it among the grouping principles his laboratory added, crediting Palmer and Levitin (2002), and the published experiments are Alais, Blake and Lee (1998) and Lee and Blake (1999). A scattered set of dots flickering on the same beat groups, even though none of them moves.",
      why: "This governs almost every interface animation decision. Fade four items in together and they read as one block. Stagger them and they read as four items in a sequence. That choice gets made on every screen whether or not anyone made it deliberately.",
      how: [
        "Decide first whether a set should read as one thing or as several, then pick simultaneous or staggered timing to match.",
        "Use simultaneous change to show a filter or a state change applying to a whole group.",
        "Stagger only when you want the items counted individually. It slows the group read down.",
        "Do not let unrelated regions change on the same tick, such as a toast appearing at the exact moment a table refreshes."
      ],
      example: "Skeleton loading placeholders pulsing on the same cycle read as one block of pending content. Give each row its own offset and the reader starts seeing separate rows arriving one by one.",
      numbers: "",
      pitfall: "Staggering by default because it looks pleasant. Every stagger you add breaks a group that simultaneous timing would have held together.",
      source: "Stephen E. Palmer, Perceptual Grouping: It's Later Than You Think, Current Directions in Psychological Science (2002), which credits Palmer and Levitin (2002); experimental work by Alais, Blake and Lee (1998) and Lee and Blake (1999).",
      verify: {
        status: "verified",
        note: "Synchrony as a grouping principle, and the Alais, Blake and Lee (1998) and Lee and Blake (1999) attributions, confirmed in Wagemans and others, A Century of Gestalt Psychology in Visual Perception I, Psychological Bulletin 138 (2012), which credits those two papers and does not mention Palmer here. I then read Palmer's Perceptual Grouping: It's Later Than You Think, hosted as a PDF on his Berkeley lab site, where he lists common region, element connectedness and synchrony as principles his laboratory added and cites Palmer and Levitin (2002) for synchrony. A previous version credited synchrony to Palmer's Vision Science (1999); I could not confirm that and have removed it. Added by me: the master list has common fate but not synchrony."
      },
      belongs: {
        verdict: "core",
        why: "It is the rule behind simultaneous versus staggered animation, which is a daily decision in interface and motion work and is usually made by accident."
      },
      related: [160, 737, 157]
    },
    {
      n: 161,
      title: "Common region",
      aka: ["Containment grouping"],
      oneLine: "Elements inside the same boundary are read as a group, even when they sit far apart.",
      demo: {
        caption: "Same four dots in both rows. Spacing pairs the outer ones; the outline overrules it and pairs the middle two.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 132\"><circle class=\"f\" cx=\"60\" cy=\"30\" r=\"9\"/><circle class=\"f\" cx=\"110\" cy=\"30\" r=\"9\"/><circle class=\"f\" cx=\"210\" cy=\"30\" r=\"9\"/><circle class=\"f\" cx=\"260\" cy=\"30\" r=\"9\"/><text class=\"t\" x=\"160\" y=\"58\" text-anchor=\"middle\">spacing alone</text><rect class=\"s-mute\" x=\"96\" y=\"76\" width=\"128\" height=\"32\" rx=\"16\"/><circle class=\"f\" cx=\"60\" cy=\"92\" r=\"9\"/><circle class=\"f\" cx=\"110\" cy=\"92\" r=\"9\"/><circle class=\"f\" cx=\"210\" cy=\"92\" r=\"9\"/><circle class=\"f\" cx=\"260\" cy=\"92\" r=\"9\"/><text class=\"t\" x=\"160\" y=\"126\" text-anchor=\"middle\">one shared region</text></svg></div>"
      },
      what: "Stephen Palmer proposed this in 1992 as a new grouping principle. Put a border or a shared background round a set of items and they group, and his demonstrations showed it can beat both proximity and similarity. It is the principle behind every card, panel and fieldset in interface work.",
      why: "Common region gives you grouping that survives long distances and awkward spacing, which is what makes card layouts hold together on a phone and on a wide screen. It also carries an implied promise, because items in one container are assumed to share a purpose.",
      how: [
        "Reach for space first and a container second. A container is a loud signal, so spend it where the grouping really matters.",
        "One card, one job. If a card holds two unrelated actions, split it.",
        "Keep container styling to one or two levels. Cards inside panels inside sections stop meaning anything.",
        "Let the region's edge do a single job: either it groups content or it marks an interactive surface, not both."
      ],
      example: "Recipe and product listings. Image, title, price and rating on one card read as one item. Aurora Harley's Nielsen Norman Group article on common region documents exactly this fix in the Food Network tablet app: an older grid let long titles wrap, leaving uneven white space so readers could not tell which byline and rating belonged to which recipe, and a later version solved it with a card layout.",
      numbers: "",
      pitfall: "Boxing everything. Once every group has a border, the borders carry no information and the page becomes a grid of equally weighted cells.",
      source: "Stephen E. Palmer, Common Region: A New Principle of Perceptual Grouping, Cognitive Psychology 24 (1992), pages 436 to 447.",
      verify: {
        status: "verified",
        note: "Paper confirmed via the ScienceDirect and ERIC records: Cognitive Psychology 24(3), July 1992, pages 436 to 447. Elements within a common region group, and the effect can overcome proximity and similarity. Design application read directly in Nielsen Norman Group's article The Principle of Common Region: Containers Create Groupings by Aurora Harley, including the Food Network tablet app before-and-after named in the example."
      },
      belongs: {
        verdict: "core",
        why: "Card-based interfaces are built entirely on it, and knowing it is stronger than proximity tells you when a container is overkill."
      },
      related: [162, 173, 156]
    },
    {
      n: 162,
      title: "Uniform connectedness",
      aka: ["UC"],
      oneLine: "A single unbroken region of one colour or texture is seen as one object.",
      demo: {
        caption: "Same three labels, same gaps. Separate fills read as three buttons; one continuous fill reads as a single control.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Separate fills</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--nowrap db-row--tight\"><span class=\"db-btn db-btn--ghost\">Day</span><span class=\"db-btn db-btn--ghost\">Week</span><span class=\"db-btn db-btn--ghost\">Month</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">One fill</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-row db-row--centre db-row--nowrap db-row--tight\"><span class=\"db-btn db-btn--quiet\">Day</span><span class=\"db-btn db-btn--quiet\">Week</span><span class=\"db-btn db-btn--quiet\">Month</span></div></div></div></div></div>"
      },
      what: "Palmer and Rock proposed this in 1994. A closed region with uniform properties, such as one lightness, colour or texture, is taken as a single unit, and they argued it is the entry-level step that creates the elements the other factors then group. Their demonstrations show it holding up when opposed by proximity and similarity.",
      why: "This is why a toolbar, a segmented control or a filled pill reads as one control with parts instead of several controls sitting near each other. Give a run of items one continuous surface and you have built a compound object.",
      how: [
        "Use one continuous background to bind a control's parts, such as a search field with its button attached.",
        "Break the surface where you want a break. A gap in the fill splits an object more reliably than a divider line drawn on top of it.",
        "Keep the fill genuinely uniform. A gradient shifting across a bar can split it visually at the point where the change is steepest.",
        "Do not stretch one surface across two unrelated jobs, or people will treat them as one control."
      ],
      example: "A segmented control on iOS or Android. Several options share one filled track, and the whole thing reads as a single switch with positions rather than as separate buttons.",
      numbers: "",
      pitfall: "Do not repeat the processing-order claim as settled fact. The grouping effect is solid; the argument that uniform connectedness happens before everything else was contested in print.",
      source: "Stephen E. Palmer and Irvin Rock, Rethinking Perceptual Organization: The Role of Uniform Connectedness, Psychonomic Bulletin and Review 1 (1994), pages 29 to 55.",
      verify: {
        status: "disputed",
        note: "The principle and the 1994 paper are confirmed via the Springer record and abstract. The stronger claim, that uniform connectedness is a prior entry-level process, was challenged by Mary Peterson in The Proper Placement of Uniform Connectedness in the same journal, with a reply from Palmer and Rock, On the Nature and Order of Organizational Processing. The grouping effect is not in doubt; the ordering claim is."
      },
      belongs: {
        verdict: "core",
        why: "It explains compound controls and connected shapes, and it tells you that a shared surface binds harder than proximity does."
      },
      related: [9162, 161, 163]
    },
    {
      n: 9162,
      title: "Element connectedness",
      aka: ["Connectedness", "Grouping by a connector"],
      oneLine: "Two separate items joined by a line or bar are read as one unit.",
      demo: {
        caption: "Same four dots, same gaps. One line across the middle overrules the spacing and binds the two it joins.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">No connector</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 230 44\"><circle class=\"f\" cx=\"40\" cy=\"22\" r=\"9\"/><circle class=\"f\" cx=\"80\" cy=\"22\" r=\"9\"/><circle class=\"f\" cx=\"150\" cy=\"22\" r=\"9\"/><circle class=\"f\" cx=\"190\" cy=\"22\" r=\"9\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">One connector</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 230 44\"><path class=\"s\" d=\"M80 22 H150\"/><circle class=\"f\" cx=\"40\" cy=\"22\" r=\"9\"/><circle class=\"f\" cx=\"80\" cy=\"22\" r=\"9\"/><circle class=\"f\" cx=\"150\" cy=\"22\" r=\"9\"/><circle class=\"f\" cx=\"190\" cy=\"22\" r=\"9\"/></svg></div></div></div>"
      },
      what: "Palmer and Rock described this in 1994 alongside uniform connectedness. Two dots joined by a short line group together even when proximity and similarity both argue for a different pairing. It is distinct from uniform connectedness, which is about one homogeneous region being taken as a single unit. Here the items stay separate and a connector binds them.",
      why: "It is the strongest grouping cue you can apply across a gap, which matters when two things genuinely cannot sit next to each other. Org charts, node graphs, callout leader lines and steppers all depend on it.",
      how: [
        "Use a leader line to attach a label to a distant data point instead of relying on colour matching.",
        "Draw the connector before you reach for a matching colour. A line is unambiguous; a shared hue is a guess the reader has to make.",
        "Keep connectors thin and low in contrast so they bind without competing for attention.",
        "Avoid crossing connectors. A crossing hands the grouping over to good continuation, which may pick the wrong pairing."
      ],
      example: "A multi-step progress indicator. Numbered circles joined by a line read as one sequence; the same circles without the line read as separate badges.",
      numbers: "",
      pitfall: "A connector overrules your spacing. Draw one by accident, such as a rule that happens to run between two unrelated blocks, and it binds them anyway.",
      source: "Stephen E. Palmer and Irvin Rock, Rethinking Perceptual Organization: The Role of Uniform Connectedness, Psychonomic Bulletin and Review 1 (1994).",
      verify: {
        status: "verified",
        note: "Element connectedness attributed to Palmer and Rock (1994) and distinguished from uniform connectedness in Wagemans and others, Psychological Bulletin 138 (2012), which describes it as the tendency for distinct elements sharing a common border to be grouped. Design use checked against Nielsen Norman Group's Connectedness: Gestalt Principle for User Interface Design, which is a video rather than a written article. I read its published summary, not the video itself: connected elements are seen as belonging together, and the principle is strong enough to overrule small differences between the items. Added by me: the master list has uniform connectedness but not element connectedness."
      },
      belongs: {
        verdict: "core",
        why: "It is the only grouping cue that reliably works at long distance, and it underpins diagrams, steppers and any label attached to a distant target."
      },
      related: [162, 156, 159]
    },
    {
      n: 163,
      title: "Figure-ground",
      aka: ["Figure and ground", "Figure-ground segregation"],
      oneLine: "Every edge is assigned to one side: one region becomes the object, the other becomes background.",
      demo: {
        caption: "One identical edge, filled from the left and from the right. Whichever side takes the fill becomes the shape.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Fill on the left</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 100\"><rect x=\"0\" y=\"0\" width=\"160\" height=\"100\" style=\"fill:var(--paper-sunk)\"/><path class=\"f\" d=\"M0 0 L80 0 C110 18,44 30,60 46 C74 60,116 66,88 82 C74 90,76 94,80 100 L0 100 Z\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Fill on the right</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 100\"><rect x=\"0\" y=\"0\" width=\"160\" height=\"100\" style=\"fill:var(--paper-sunk)\"/><path class=\"f\" d=\"M160 0 L80 0 C110 18,44 30,60 46 C74 60,116 66,88 82 C74 90,76 94,80 100 L160 100 Z\"/></svg></div></div></div>"
      },
      what: "Edgar Rubin set this out in his 1915 Copenhagen thesis Synsoplevede Figurer. His finding was that a contour shapes only one side at a time. The side that gets the shape becomes the figure, an object with a form, and the other side becomes ground, appearing to run on behind it. You cannot see both sides as objects at once.",
      why: "Everything else in this section assumes figure-ground has already resolved. Get it wrong and the reader is looking at a pattern instead of at content, which is exactly what happens with text over a busy photograph. Get it right and negative space starts working for you.",
      how: [
        "Decide, for every area, which side is object and which is space, then make one cue do the deciding.",
        "Put a scrim or a solid panel behind text on imagery so the type owns its ground.",
        "Design counter-shapes as carefully as the shapes, particularly in marks and letterforms.",
        "If a region flips between readings when you look away and back, add a cue rather than hoping people land on yours."
      ],
      example: "The FedEx wordmark, designed by Lindon Leader at Landor Associates in 1994. The white gap between the E and the x becomes an arrow once you assign the figure to the white side.",
      numbers: "",
      pitfall: "Low-contrast text over photography. The type keeps losing the figure role to whatever sits behind it, and the effect shifts across breakpoints as the crop moves.",
      source: "Edgar Rubin, Synsoplevede Figurer (1915).",
      verify: {
        status: "verified",
        note: "Rubin's 1915 Copenhagen thesis and the one-sided contour finding confirmed via the British Psychological Society's centenary article Figure and Ground at 100 and the Wagemans and others review in Psychological Bulletin 138 (2012). The FedEx attribution to Lindon Leader at Landor Associates in 1994 is confirmed by ArtCenter's alumni profile of Leader and by multiple design histories. I have not read the Danish original of Rubin."
      },
      belongs: {
        verdict: "core",
        why: "It decides what counts as content and what counts as space, which is the first decision in any composition."
      },
      related: [172, 173, 174]
    },
    {
      n: 164,
      title: "Symmetry and order",
      aka: ["Law of symmetry", "Symmetry as a figure-ground cue"],
      oneLine: "Symmetrical regions read as objects, and mirrored pairs read as belonging together.",
      demo: {
        caption: "Identical spacing on both rows. Only the bracket direction changed, and the pairing the eye lands on moves with it.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 122\"><path class=\"s\" d=\"M31 14 Q20 32 31 50\"/><path class=\"s\" d=\"M73 14 Q84 32 73 50\"/><path class=\"s\" d=\"M135 14 Q124 32 135 50\"/><path class=\"s\" d=\"M177 14 Q188 32 177 50\"/><path class=\"s\" d=\"M239 14 Q228 32 239 50\"/><path class=\"s\" d=\"M281 14 Q292 32 281 50\"/><path class=\"s-accent\" d=\"M18 60 H86\"/><path class=\"s-accent\" d=\"M122 60 H190\"/><path class=\"s-accent\" d=\"M226 60 H294\"/><path class=\"s\" d=\"M21 66 Q32 84 21 102\"/><path class=\"s\" d=\"M83 66 Q72 84 83 102\"/><path class=\"s\" d=\"M125 66 Q136 84 125 102\"/><path class=\"s\" d=\"M187 66 Q176 84 187 102\"/><path class=\"s\" d=\"M229 66 Q240 84 229 102\"/><path class=\"s\" d=\"M291 66 Q280 84 291 102\"/><path class=\"s-accent\" d=\"M70 112 H138\"/><path class=\"s-accent\" d=\"M174 112 H242\"/></svg></div>"
      },
      what: "Two things sit under this heading, and they are not equally well supported. Symmetry as a grouping cue is solid: a pair of shapes mirroring each other reads as one unit even across a gap. Symmetry as a figure-ground cue is the classical claim, listed with convexity, small area and enclosure, but the experiments that tried to measure it have come out equivocal. Order is not a named Gestalt factor and is doing no work in the title.",
      why: "Symmetry buys grouping without proximity and objecthood without a border. Brackets, quotation marks and paired framing rules all rely on it. It also raises the cost of near-misses, because almost-symmetry reads as a mistake rather than a variation. Treat it as a real but beatable cue, not a trump card.",
      how: [
        "Use mirrored pairs to bind things you cannot place next to each other, such as rules top and bottom.",
        "Make symmetry exact or make it clearly asymmetric. Nothing in between.",
        "Give a shape a symmetrical silhouette if it must hold the figure role against a busy surround.",
        "Trust optical symmetry over measured symmetry. Check the numbers, then check by eye."
      ],
      example: "Kanizsa and Gerbino (1976) set symmetry against convexity directly. Their observers still read the convex regions as figures even when the concave regions were the symmetrical ones, which is why they concluded convexity is the more important cue of the two.",
      numbers: "No trustworthy figure exists for how strong symmetry is as a figure cue. Peterson and Salvagio, writing the Scholarpedia entry on figure-ground perception, say experiments assessing symmetry as a configural cue have produced equivocal results.",
      pitfall: "Confusing this with compositional balance. Symmetrical balance is a layout choice; symmetry here is a perceptual cue deciding what reads as an object, and the two are answered in different ways.",
      source: "Symmetry appears among Rubin's 1915 classical figure-ground cues and among the whole properties Wertheimer discussed in 1923. Tested against convexity by Kanizsa and Gerbino (1976), and against familiar shape by Peterson and Gibson (1994).",
      verify: {
        status: "disputed",
        note: "I found the previous version of this entry wrong on its evidence and I have replaced it. It claimed Peterson and Gibson (1994) manipulated symmetry and found it shifted figure reports, with symmetry taking effect from a 28 millisecond exposure. That inverts the study. Peterson and Gibson pitted a familiar shape against a symmetrical one and found the familiar side slightly stronger, with the two cues competing so that observers sometimes chose the symmetrical side anyway. Peterson's own Scholarpedia article states this plainly, and adds that experiments assessing symmetry as a configural cue have produced equivocal results, citing Pomerantz and Kubovy (1986) as an example. The 28 millisecond figure is real but belongs to the past-experience work, so I have moved it to entry 165. Symmetry as a grouping cue stands; symmetry as a figure-ground cue is contested."
      },
      belongs: {
        verdict: "core",
        why: "It is a working grouping cue and it explains why near-symmetry looks broken in a way designers feel but rarely name. It stays core on the grouping half; the figure-ground half is flagged rather than dropped because designers meet the claim constantly."
      },
      related: [163, 174, 86]
    },
    {
      n: 165,
      title: "Past experience / familiarity",
      aka: ["Factor of past experience", "Habit", "Meaningfulness"],
      oneLine: "What you have seen before shapes what you see now, including what counts as an object.",
      demo: {
        caption: "Neither row is labelled. You can name every mark on the left from prior exposure; the right ones are just as simple.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Conventional marks</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 176 48\"><circle class=\"s\" cx=\"27\" cy=\"21\" r=\"10\"/><path class=\"s\" d=\"M34 28 L42 36\"/><path class=\"s\" d=\"M74 25 L88 12 L102 25\"/><path class=\"s\" d=\"M78 25 V37 H98 V25\"/><path class=\"s\" d=\"M130 14 H162 V34 H130 Z\"/><path class=\"s\" d=\"M130 14 L146 27 L162 14\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Invented marks</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 176 48\"><path class=\"s\" d=\"M30 11 L41 17.5 L41 30.5 L30 37 L19 30.5 L19 17.5 Z\"/><path class=\"s\" d=\"M88 11 L101 36 H75 Z\"/><path class=\"s\" d=\"M80 29 H96\"/><path class=\"s\" d=\"M152 15 A 12 12 0 1 0 152 33\"/><circle class=\"f\" cx=\"148\" cy=\"24\" r=\"3\"/></svg></div></div></div>"
      },
      what: "Wertheimer named a factor of past experience or habit in 1923, but he was wary of it, arguing that people reach for it too readily to explain organisation that other factors already cover. Later work settled the question in its favour for figure-ground. Peterson and Gibson showed in 1994 that a region suggesting a familiar object is more likely to be seen as the figure, and only when that shape is the right way up.",
      why: "Convention is a grouping cue. A trolley icon, an underlined blue word, a stack of three lines at the top right: none of these are read from their geometry, they are read from prior exposure. That is what makes breaking a convention expensive, and occasionally worth it anyway.",
      how: [
        "Check what this audience already uses. Familiar placement beats a better idea nobody recognises.",
        "When you break a convention, over-signal the replacement with a plain label until it is learned.",
        "Do not rely on familiarity that only exists inside your team or your industry.",
        "Test icons without labels once. If people cannot name them cold, familiarity is not carrying them."
      ],
      example: "Peterson and Gibson's 1994 displays used a single edge with part of a familiar object suggested on one side, such as a standing woman. Observers picked that side as figure more often when it was upright than inverted, and the effect vanished when the parts were scrambled out of their normal order. Orientation dependence is what ties the effect to experience rather than to geometry, because geometry does not change when you turn the display over.",
      numbers: "Familiarity shifts figure assignment even with masked exposures as short as 28 milliseconds. Wagemans and others (2012) give that figure for the displays used by Peterson and Gibson (1994). That is a laboratory measurement about perception, not a design threshold.",
      pitfall: "Past experience gets used as a catch-all excuse for a weak layout. Wertheimer's objection still applies: check whether proximity, similarity or common region already explain the grouping first.",
      source: "Max Wertheimer (1923) named it as a factor of past experience or habit. Evidence for its role in figure-ground: Peterson, Harvey and Weidenbacher (1991) and Peterson and Gibson, Psychological Science (1994).",
      verify: {
        status: "verified",
        note: "Wertheimer's sentence, Another Factor is that of past experience or habit, and his scepticism about it, read directly in the 1923 translation at York University's Classics in the History of Psychology. The upright-versus-inverted method, the scrambled-parts control and the standing-woman stimulus are described by Mary Peterson herself in her Scholarpedia article on figure-ground perception. The 28 millisecond figure comes from Wagemans and others (2012), where it is attached to Peterson and Gibson (1994); I moved it here from entry 164, where the previous author had attached it to symmetry instead."
      },
      belongs: {
        verdict: "core",
        why: "It is the perceptual basis for design conventions, and it is why an unfamiliar pattern costs more than its geometry suggests."
      },
      related: [155, 163, 231]
    },
    {
      n: 166,
      title: "Focal point",
      aka: ["Point of focus"],
      oneLine: "A point of interest that pulls the eye first. Not a Gestalt principle, despite the listicles.",
      demo: {
        caption: "Three real ways to make one mark win: value, size and isolation. None of them is a grouping law.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">value</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">size</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute db-dot--lg\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">isolation</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\" style=\"margin-left:34px\"></span></div></div></div></div>"
      },
      what: "Design blogs and UX roundups routinely list focal point among the Gestalt principles, usually defined as the element that stands out and captures attention first. The definition is real and useful. The attribution is not. It does not appear in Wertheimer's 1923 factors, in Rubin's 1915 figure-ground work, or among the grouping principles catalogued in the 2012 centenary review of the field.",
      why: "Emphasis is a genuine and important part of composition. The problem is only where it has been filed. Calling it Gestalt implies experimental backing this particular item does not have, and it hides the mechanisms that actually produce emphasis: contrast, isolation and scale.",
      how: [
        "Keep using focal point as a composition idea. Give every screen one thing that wins.",
        "Build it from contrast in value, size or isolation instead of citing it as a perceptual law.",
        "If you want the Gestalt cousin of this idea, use anomaly: one element that breaks an established similarity group will pop."
      ],
      example: "Search Wagemans and others, A Century of Gestalt Psychology in Visual Perception I (2012), for a focal point principle. It is not there, while proximity, similarity, closure, good continuation, common fate, common region, connectedness and synchrony all are.",
      numbers: "",
      pitfall: "Repeating the listicle version. Tell a client that focal point is a Gestalt law and you have passed on a citation that does not exist.",
      source: "Origin unclear as a Gestalt principle. As a composition idea, emphasis and dominance are long-standing and appear across standard design texts.",
      verify: {
        status: "adjusted",
        note: "I corrected the framing, not the idea. Checked Wertheimer 1923 in translation, Rubin's 1915 figure-ground factors as summarised in the literature, and the grouping principles catalogued in Wagemans and others, Psychological Bulletin 138 (2012). None includes focal point. The design-side listings that do include it, such as popular UX roundups, cite no primary source."
      },
      belongs: {
        verdict: "cut",
        why: "It duplicates entry 94, focal point, which already sits in the composition section where it belongs, and nothing in the Gestalt literature supports listing it here. If a Gestalt-family replacement is wanted, use anomaly (entry 108) or isolation as a break in a similarity group."
      },
      related: [94, 108, 157]
    },
    {
      n: 167,
      title: "Simplicity",
      aka: ["Law of simplicity"],
      oneLine: "The same principle as Prägnanz, listed a second time under its English name.",
      demo: {
        caption: "The right side holds far more information and still reads as simpler, because it repeats one structure instead of six.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Little content, six treatments</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-bar db-bar--tall db-bar--ink\" style=\"width:52%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:78%;margin-left:20%\"></span><span class=\"db-bar db-bar--ink\" style=\"width:34%;margin-left:33%\"></span><span class=\"db-bar db-bar--tall\" style=\"width:64%;margin-left:6%\"></span><span class=\"db-bar db-bar--thin db-bar--accent\" style=\"width:24%;margin-left:58%\"></span><span class=\"db-bar db-bar--ink\" style=\"width:44%;margin-left:14%\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Dense content, one structure</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-bar\" style=\"width:36%\"></span><span class=\"db-bar\" style=\"width:22%\"></span><span class=\"db-bar\" style=\"width:16%\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-bar\" style=\"width:36%\"></span><span class=\"db-bar\" style=\"width:22%\"></span><span class=\"db-bar\" style=\"width:16%\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-bar\" style=\"width:36%\"></span><span class=\"db-bar\" style=\"width:22%\"></span><span class=\"db-bar\" style=\"width:16%\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-bar\" style=\"width:36%\"></span><span class=\"db-bar\" style=\"width:22%\"></span><span class=\"db-bar\" style=\"width:16%\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-bar\" style=\"width:36%\"></span><span class=\"db-bar\" style=\"width:22%\"></span><span class=\"db-bar\" style=\"width:16%\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-bar\" style=\"width:36%\"></span><span class=\"db-bar\" style=\"width:22%\"></span><span class=\"db-bar\" style=\"width:16%\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-bar\" style=\"width:36%\"></span><span class=\"db-bar\" style=\"width:22%\"></span><span class=\"db-bar\" style=\"width:16%\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-bar\" style=\"width:36%\"></span><span class=\"db-bar\" style=\"width:22%\"></span><span class=\"db-bar\" style=\"width:16%\"></span></div></div></div></div></div>"
      },
      what: "Simplicity is the usual English gloss for Prägnanz, which is why the law of Prägnanz is routinely called the law of simplicity. Design roundups often list both as separate principles, which produces two entries with one meaning. No separate Gestalt factor called simplicity appears in Wertheimer 1923, in Koffka 1935, or in the 2012 centenary review.",
      why: "Keeping the duplicate costs accuracy. It also encourages the loose reading of simplicity as less content, which is not what Koffka's law says. His claim is about the simplicity of the perceptual organisation, meaning the number and regularity of the parts the eye has to hold, not the quantity of information present.",
      how: [
        "Use entry 155 and drop this one.",
        "When someone says make it simpler, ask whether they mean fewer visual groups or less content. Those are different jobs.",
        "Measure it by counting distinct visual groups on the screen, not by counting words."
      ],
      example: "A train timetable is dense with information and simple in organisation: one repeating row structure, one alignment, one type size for the data. A near-empty landing page with six differently styled sections is the reverse.",
      numbers: "",
      pitfall: "Treating simplicity as a licence to delete useful content. That is a separate argument and it needs its own justification.",
      source: "Not a separate principle. Simplicity is the common English name for Prägnanz, from Koffka's Principles of Gestalt Psychology (1935).",
      verify: {
        status: "adjusted",
        note: "I identified this as a duplicate rather than a distinct principle. Checked against Wertheimer 1923 in translation, Koffka 1935 as reported in the secondary literature, and the principle list in Wagemans and others (2012). None names simplicity as a factor separate from Prägnanz."
      },
      belongs: {
        verdict: "cut",
        why: "Duplicate of entry 155, and it should be merged there. If a replacement is wanted in this section, synchrony is a real grouping principle with a proper source and a clear daily use in motion design."
      },
      related: [155, 9160]
    },
    {
      n: 168,
      title: "Invariance",
      aka: ["Object constancy", "Invariant recognition"],
      oneLine: "You recognise a shape as the same shape when it is rotated, resized, recoloured or partly hidden.",
      demo: {
        caption: "The same mark five times: turned, shrunk, recoloured and partly hidden. You still read one shape each time.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 84\"><g transform=\"translate(34,32)\"><path class=\"s\" d=\"M-10 -16 V16\"/><path class=\"f\" d=\"M-10 -14 L14 -6 L-10 2 Z\"/></g><g transform=\"translate(102,32) rotate(38)\"><path class=\"s\" d=\"M-10 -16 V16\"/><path class=\"f\" d=\"M-10 -14 L14 -6 L-10 2 Z\"/></g><g transform=\"translate(170,32) scale(0.55)\"><path class=\"s\" d=\"M-10 -16 V16\"/><path class=\"f\" d=\"M-10 -14 L14 -6 L-10 2 Z\"/></g><g transform=\"translate(238,32)\"><path class=\"s-accent\" d=\"M-10 -16 V16\"/><path class=\"f-accent\" d=\"M-10 -14 L14 -6 L-10 2 Z\"/></g><g transform=\"translate(306,32)\"><path class=\"s\" d=\"M-10 -16 V16\"/><path class=\"f\" d=\"M-10 -14 L14 -6 L-10 2 Z\"/><rect class=\"s-mute\" x=\"2\" y=\"-22\" width=\"24\" height=\"44\" style=\"fill:var(--paper-sunk)\"/></g><text class=\"t\" x=\"34\" y=\"72\" text-anchor=\"middle\">as drawn</text><text class=\"t\" x=\"102\" y=\"72\" text-anchor=\"middle\">turned</text><text class=\"t\" x=\"170\" y=\"72\" text-anchor=\"middle\">half size</text><text class=\"t\" x=\"238\" y=\"72\" text-anchor=\"middle\">recoloured</text><text class=\"t\" x=\"306\" y=\"72\" text-anchor=\"middle\">part hidden</text></svg></div>"
      },
      what: "Steven Lehar treats emergence, reification and invariance as the holistic Gestalt properties that conventional accounts of neural processing cannot express, and adds multistability in his wider writing. Invariance is the plainest of them: a simple object stays recognisable across rotation, scale, translation, lighting and a fair amount of deformation. It is a property of human object recognition rather than a grouping factor.",
      why: "Every rule in a brand manual about minimum sizes and single-colour versions is an invariance test. A mark that only survives at one size, in one colour, on one background is leaning on detail the visual system will strip away.",
      how: [
        "Test every mark at its smallest real use, in one colour, and as a plain silhouette.",
        "Test icons rotated or mirrored if they will appear in a right-to-left build.",
        "Keep the outline distinctive. Invariance holds on gross shape far better than on internal detail.",
        "Print your whole icon set at 16 pixels and see which ones stop being distinguishable from each other."
      ],
      example: "The single-colour test used across brand guidelines: reproduce the mark in solid black on white and check whether it is still the same mark.",
      numbers: "",
      pitfall: "Assuming invariance means anything goes. It holds for shape, not for meaning. A mirrored arrow is still perfectly recognisable as an arrow, and it now points the wrong way.",
      source: "Steven Lehar, Gestalt Isomorphism and the Primacy of Subjective Conscious Experience: A Gestalt Bubble Model, Behavioral and Brain Sciences 26 (2003), pages 375 to 408.",
      verify: {
        status: "adjusted",
        note: "I read the published abstract of Behavioral and Brain Sciences 26(4), pages 375 to 408, on Cambridge Core. It names three principles, not four: emergence, reification and invariance. Multistability appears among the paper's keywords, and the familiar four-item list is Lehar's formulation in his own longer writing, The Constructive Aspect of Visual Perception. I have corrected the previous version, which credited all four to the 2003 paper. Either way the set is Lehar's, not a Berlin-school list from the 1920s."
      },
      belongs: {
        verdict: "adjacent",
        why: "It is a property of object recognition from vision science, given a Gestalt label by Lehar. It earns its place because the single-colour test, the small-size test and silhouette testing of icons all depend on it."
      },
      related: [170, 836, 837]
    },
    {
      n: 169,
      title: "Multistability",
      aka: ["Perceptual reversal", "Bistability"],
      oneLine: "Some arrangements have two valid readings, and perception flips between them instead of settling.",
      demo: {
        caption: "The left cube has no hidden lines, so it has two readings. The middle and right show the two you flip between.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 118\"><g transform=\"translate(6,10)\"><path class=\"s\" d=\"M0 22 H60 V82 H0 Z\"/><path class=\"s\" d=\"M24 0 H84 V60 H24 Z\"/><path class=\"s\" d=\"M0 22 L24 0\"/><path class=\"s\" d=\"M60 22 L84 0\"/><path class=\"s\" d=\"M60 82 L84 60\"/><path class=\"s\" d=\"M0 82 L24 60\"/></g><g transform=\"translate(122,10)\"><path class=\"s\" d=\"M0 22 H60 V82 H0 Z\"/><path class=\"s\" d=\"M24 0 H84 V60\"/><path class=\"s\" d=\"M0 22 L24 0\"/><path class=\"s\" d=\"M60 22 L84 0\"/><path class=\"s\" d=\"M60 82 L84 60\"/></g><g transform=\"translate(238,10)\"><path class=\"s\" d=\"M60 82 H0 V22\"/><path class=\"s\" d=\"M24 0 H84 V60 H24 Z\"/><path class=\"s\" d=\"M0 22 L24 0\"/><path class=\"s\" d=\"M60 82 L84 60\"/><path class=\"s\" d=\"M0 82 L24 60\"/></g><text class=\"t\" x=\"48\" y=\"110\" text-anchor=\"middle\">ambiguous</text><text class=\"t\" x=\"164\" y=\"110\" text-anchor=\"middle\">reading one</text><text class=\"t\" x=\"280\" y=\"110\" text-anchor=\"middle\">reading two</text></svg></div>"
      },
      what: "A stable image with two possible organisations does not get averaged. Perception picks one, holds it, then switches. The Necker cube, published by Louis Albert Necker in 1832, and Rubin's vase and faces from 1915 are the standard cases. Neither reading wins permanently.",
      why: "In most layout and interface work multistability is a fault report. If a group can be read two ways, some people read it the other way and stay there. In marks and posters a controlled flip is a legitimate device, because the switch itself is what makes the design stick.",
      how: [
        "Treat any ambiguous grouping as a bug. Add or remove one cue until only one reading survives.",
        "Test with people who have not seen the layout. You cannot un-see your own intended reading.",
        "If you want the flip, make both readings clean and make one of them the reading people arrive at first.",
        "Watch spacing that falls between two structures. That is the usual cause of accidental ambiguity."
      ],
      example: "Rubin's vase. The same contour gives either a vase or two facing profiles, and observers report it switching rather than blending the two.",
      numbers: "",
      pitfall: "Designers see their own reading as obvious because they built it. Ambiguity almost never announces itself to the person who created it.",
      source: "Louis Albert Necker, London and Edinburgh Philosophical Magazine and Journal of Science (1832) for the reversing cube; Edgar Rubin, Synsoplevede Figurer (1915) for the reversing figure. Listed as a Gestalt property by Lehar.",
      verify: {
        status: "verified",
        note: "Necker's 1832 publication confirmed, including that he described it in a letter to Sir David Brewster and drew it as a rhomboid, in the article Observations on Some Remarkable Optical Phaenomena Seen in Switzerland. Rubin 1915 confirmed as above. On Lehar: multistability is a keyword of his 2003 Behavioral and Brain Sciences paper but is not one of the three principles named in its abstract, so I have attributed it to Lehar rather than to that paper specifically. The phenomenon itself is not in doubt and predates all of them."
      },
      belongs: {
        verdict: "adjacent",
        why: "It is a perception phenomenon rather than a design move, but it names a specific and common failure, the layout that groups two ways, and it is the mechanism behind deliberate ambiguity in marks."
      },
      related: [163, 168, 25]
    },
    {
      n: 170,
      title: "Emergence",
      aka: ["Holistic recognition"],
      oneLine: "The whole is recognised in one go, before any of the parts have been identified.",
      demo: {
        caption: "Identical layout, blurred on the right. Not one part is legible and the structure still comes across at a glance.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Full detail</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-bar db-bar--tall db-bar--ink\" style=\"width:58%\"></span><div class=\"db-lines\"><i></i><i></i><i></i><i></i></div><div class=\"db-row db-row--tight db-row--nowrap db-row--top\"><div class=\"db-card db-fill\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card db-fill\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card db-fill\"><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Squinted</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"filter:blur(2.5px)\"><span class=\"db-bar db-bar--tall db-bar--ink\" style=\"width:58%\"></span><div class=\"db-lines\"><i></i><i></i><i></i><i></i></div><div class=\"db-row db-row--tight db-row--nowrap db-row--top\"><div class=\"db-card db-fill\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card db-fill\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card db-fill\"><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div></div>"
      },
      what: "You see the dog in the classic dappled black-and-white photograph as a whole or not at all. There is no stage where you find the ears, then the legs, then conclude dog. Lehar named emergence as one of the holistic properties his 2003 model was built to express, and it restates the central Berlin-school claim that organisation comes first and the parts come after.",
      why: "It is the argument for judging your work at a glance before judging it in detail. If the overall shape of a page is wrong, no amount of component polish rescues it, because people resolve the whole first and only then look inside it.",
      how: [
        "Blur or squint at the design before you look at anything closely. What you see blurred is what people see first.",
        "Zoom out to a quarter size and check the page still reads as a small set of blocks.",
        "Judge marks and illustrations by silhouette before detail.",
        "Review at the size and viewing distance people actually use, not at the size you design at."
      ],
      example: "The squint test used in design critique: reduce a page to soft blocks and check that the intended hierarchy is still visible.",
      numbers: "",
      pitfall: "This gets quoted as proof that the whole is greater than the sum of its parts. Koffka's line is that the whole is other than the sum of its parts, which is a more careful and more useful claim.",
      source: "Berlin-school Gestalt psychology from the 1910s onward; named as a holistic Gestalt property by Steven Lehar (2003).",
      verify: {
        status: "verified",
        note: "Lehar's use of emergence confirmed by reading the published abstract of Behavioral and Brain Sciences 26(4), 2003, on Cambridge Core, which names emergence, reification and invariance as the principles his Gestalt Bubble model expresses. I removed the earlier phrase one of four, which the abstract does not support. The correction in the pitfall, other rather than greater, is the standard reading of Koffka and is consistent across the secondary sources I checked, but I have not seen the page in Koffka's 1935 text, so I have quoted only the wording and given no page reference."
      },
      belongs: {
        verdict: "adjacent",
        why: "It is a claim about perception rather than a technique, but it justifies the squint test and the habit of reviewing composition before detail, which is a real working method."
      },
      related: [155, 168, 476]
    },
    {
      n: 171,
      title: "Reification",
      aka: ["Illusory contours", "Subjective contours", "Modal completion"],
      oneLine: "Perception adds shapes and edges that are not present in the image at all.",
      demo: {
        caption: "The same three discs in both. Turn the notches inward and a triangle appears with edges that were never drawn.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Notches turned out</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 140\"><path class=\"f\" transform=\"rotate(180 80 18)\" d=\"M69.9 35.2 A 20 20 0 1 1 90.2 35.2 L80 18 Z\"/><path class=\"f\" transform=\"rotate(180 20 120)\" d=\"M40 120 A 20 20 0 1 1 30.2 102.8 L20 120 Z\"/><path class=\"f\" transform=\"rotate(180 140 120)\" d=\"M129.8 102.8 A 20 20 0 1 1 120 120 L140 120 Z\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Notches turned in</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 140\"><path class=\"f\" d=\"M69.9 35.2 A 20 20 0 1 1 90.2 35.2 L80 18 Z\"/><path class=\"f\" d=\"M40 120 A 20 20 0 1 1 30.2 102.8 L20 120 Z\"/><path class=\"f\" d=\"M129.8 102.8 A 20 20 0 1 1 120 120 L140 120 Z\"/></svg></div></div></div>"
      },
      what: "Reification is the constructive side of perception: what you see contains more explicit form than the stimulus does. The standard case is Kanizsa's triangle, published in 1955, where three notched circles produce a bright triangle with clear edges that were never drawn. Closure fills a gap in a contour that exists; reification builds a contour where there is none.",
      why: "It is the mechanism behind negative-space marks and behind any layout that implies structure without drawing it. Four aligned cards create a rectangle with edges readers will describe as present. That is structure you get for free.",
      how: [
        "Imply containers with alignment and consistent margins before you draw them.",
        "In a mark, design the counter-shape deliberately, because it will be seen as a shape whether you designed it or not.",
        "Use three or four corner cues instead of a full frame where you want a light touch.",
        "Check for unintended reified shapes. Accidental arrows, faces and letterforms turn up in negative space more often than you would expect."
      ],
      example: "Kanizsa's triangle: three circles with a wedge cut from each, arranged at the corners of a triangle. The triangle appears with visible edges and looks brighter than the paper, and none of it has been drawn.",
      numbers: "",
      pitfall: "Reified edges are strong but fragile. Move one element out of alignment and the implied shape collapses, so the layout suddenly looks loose for reasons the reader cannot name.",
      source: "Gaetano Kanizsa, Margini quasi-percettivi in campi con stimolazione omogenea, Rivista di Psicologia 49 (1955), pages 7 to 30. Named as a Gestalt property by Lehar (2003).",
      verify: {
        status: "disputed",
        note: "The effect and Kanizsa's 1955 paper in Rivista di Psicologia 49(1), pages 7 to 30, are confirmed. The attribution is contested: Friedrich Schumann is commonly credited with the first scientific report, in Zeitschrift fuer Psychologie und Physiologie der Sinnesorgane 23 (1900), pages 1 to 32, and comparable effects appear in art as far back as the Middle Ages. Kanizsa's 1976 Scientific American article is what returned the phenomenon to mainstream vision research. Reification is one of the three principles named in Lehar's 2003 abstract, so that attribution is sound."
      },
      belongs: {
        verdict: "core",
        why: "Negative-space logo design, implied grids and border-free containment all run on it, and it is directly actionable in everyday layout work."
      },
      related: [158, 163, 121]
    },
    {
      n: 172,
      title: "Convexity",
      aka: ["Convexity cue"],
      oneLine: "Where two regions share an edge, the bulging side tends to be read as the object.",
      demo: {
        caption: "Only the bulge direction swaps between the panels. The strips that bulge outward are the ones you read as objects.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Dark strips bulge</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 300 100\"><rect x=\"0\" y=\"0\" width=\"300\" height=\"100\" style=\"fill:var(--paper-sunk)\"/><path class=\"f\" d=\"M18 0 A 10 10 0 0 0 18 20 A 10 10 0 0 0 18 40 A 10 10 0 0 0 18 60 A 10 10 0 0 0 18 80 A 10 10 0 0 0 18 100 L54 100 A 10 10 0 0 0 54 80 A 10 10 0 0 0 54 60 A 10 10 0 0 0 54 40 A 10 10 0 0 0 54 20 A 10 10 0 0 0 54 0 Z\"/><path class=\"f\" d=\"M90 0 A 10 10 0 0 0 90 20 A 10 10 0 0 0 90 40 A 10 10 0 0 0 90 60 A 10 10 0 0 0 90 80 A 10 10 0 0 0 90 100 L126 100 A 10 10 0 0 0 126 80 A 10 10 0 0 0 126 60 A 10 10 0 0 0 126 40 A 10 10 0 0 0 126 20 A 10 10 0 0 0 126 0 Z\"/><path class=\"f\" d=\"M162 0 A 10 10 0 0 0 162 20 A 10 10 0 0 0 162 40 A 10 10 0 0 0 162 60 A 10 10 0 0 0 162 80 A 10 10 0 0 0 162 100 L198 100 A 10 10 0 0 0 198 80 A 10 10 0 0 0 198 60 A 10 10 0 0 0 198 40 A 10 10 0 0 0 198 20 A 10 10 0 0 0 198 0 Z\"/><path class=\"f\" d=\"M234 0 A 10 10 0 0 0 234 20 A 10 10 0 0 0 234 40 A 10 10 0 0 0 234 60 A 10 10 0 0 0 234 80 A 10 10 0 0 0 234 100 L270 100 A 10 10 0 0 0 270 80 A 10 10 0 0 0 270 60 A 10 10 0 0 0 270 40 A 10 10 0 0 0 270 20 A 10 10 0 0 0 270 0 Z\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Light strips bulge</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 300 100\"><rect class=\"f\" x=\"0\" y=\"0\" width=\"300\" height=\"100\"/><path style=\"fill:var(--paper-sunk)\" d=\"M18 0 A 10 10 0 0 0 18 20 A 10 10 0 0 0 18 40 A 10 10 0 0 0 18 60 A 10 10 0 0 0 18 80 A 10 10 0 0 0 18 100 L54 100 A 10 10 0 0 0 54 80 A 10 10 0 0 0 54 60 A 10 10 0 0 0 54 40 A 10 10 0 0 0 54 20 A 10 10 0 0 0 54 0 Z\"/><path style=\"fill:var(--paper-sunk)\" d=\"M90 0 A 10 10 0 0 0 90 20 A 10 10 0 0 0 90 40 A 10 10 0 0 0 90 60 A 10 10 0 0 0 90 80 A 10 10 0 0 0 90 100 L126 100 A 10 10 0 0 0 126 80 A 10 10 0 0 0 126 60 A 10 10 0 0 0 126 40 A 10 10 0 0 0 126 20 A 10 10 0 0 0 126 0 Z\"/><path style=\"fill:var(--paper-sunk)\" d=\"M162 0 A 10 10 0 0 0 162 20 A 10 10 0 0 0 162 40 A 10 10 0 0 0 162 60 A 10 10 0 0 0 162 80 A 10 10 0 0 0 162 100 L198 100 A 10 10 0 0 0 198 80 A 10 10 0 0 0 198 60 A 10 10 0 0 0 198 40 A 10 10 0 0 0 198 20 A 10 10 0 0 0 198 0 Z\"/><path style=\"fill:var(--paper-sunk)\" d=\"M234 0 A 10 10 0 0 0 234 20 A 10 10 0 0 0 234 40 A 10 10 0 0 0 234 60 A 10 10 0 0 0 234 80 A 10 10 0 0 0 234 100 L270 100 A 10 10 0 0 0 270 80 A 10 10 0 0 0 270 60 A 10 10 0 0 0 270 40 A 10 10 0 0 0 270 20 A 10 10 0 0 0 270 0 Z\"/></svg></div></div></div>"
      },
      what: "One of the cues that settles figure-ground. Kanizsa and Gerbino tested it in 1976 using a display of alternating convex and concave strips, and about 90 per cent of observers saw the convex regions as figures. It sits alongside surroundedness, size and symmetry as a reason one side of a contour wins.",
      why: "It explains why rounded, bulging forms read as things you could pick up or press, and why concave cut-outs read as holes in a surface. It is part of why a filled pill-shaped control feels like an object while a notched or scooped shape feels like an absence.",
      how: [
        "Give interactive surfaces convex outlines. Cut-outs and notches read as gaps, not controls.",
        "In a mark, decide which side of each contour should bulge, because that side becomes the subject.",
        "If a shape must read as a hole, make it clearly concave rather than nearly straight."
      ],
      example: "Kanizsa and Gerbino's 1976 display: seven edges dividing eight alternating convex and concave regions, with 90 per cent of observers reporting the convex ones as figures. It held even when the concave regions were the symmetrical ones and the smaller ones, which is why they argued convexity outranks both symmetry and small area.",
      numbers: "Kanizsa and Gerbino (1976) reported 90 per cent of observers seeing convex regions as figure, in an eight-region display. Peterson and Salvagio (2008), showing displays for 100 milliseconds, found the figure on the convex side of the central edge on 57 per cent of trials with two regions, then 66, 77 and 89 per cent with four, six and eight regions. Fifty per cent is chance.",
      pitfall: "The strength of this cue depends heavily on how many regions are competing, so do not treat convexity as a reliable way to make one thing read as an object. With only two regions it barely beats a coin toss.",
      source: "Rubin lists convexity among the classical figure-ground cues; Gaetano Kanizsa and Walter Gerbino, Convexity and Symmetry in Figure-Ground Organization, in Mary Henle (editor), Vision and Artifact (1976); context dependence shown by Peterson and Salvagio (2008).",
      verify: {
        status: "disputed",
        note: "I read the full text of Peterson and Salvagio, Inhibitory Competition in Figure-Ground Perception: Context and Convexity, Journal of Vision 8(16), and took the percentages straight from Experiment 1. It also supplies the Kanizsa and Gerbino figure: seven edges, eight regions, 90 per cent of observers. I corrected the previous version, which gave the eight-region result as 85 to 90 per cent and left the two-region result vague. I also removed the claim that Kanizsa and Gerbino ran the first experimental test: Peterson's own Scholarpedia article describes the classical cues as established by demonstration (Koffka, Köhler, Rubin) and later supported empirically, with Kanizsa and Gerbino as an example of the latter."
      },
      belongs: {
        verdict: "adjacent",
        why: "It is a figure-ground cue from perception research rather than a layout tool, but it has a specific payoff: convex forms read as objects to act on, concave forms read as gaps."
      },
      related: [163, 173, 174]
    },
    {
      n: 173,
      title: "Surroundedness",
      aka: ["Enclosure"],
      oneLine: "An enclosed region reads as the object, and the region around it reads as space behind.",
      demo: {
        caption: "Box every block and none of them comes forward. Enclose one and it lifts clear of the page as an object.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Five enclosures</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One enclosure</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div>"
      },
      what: "Enclosure sits among the classical configural cues Rubin and the Berlin school identified, alongside convexity, symmetry and small area. The enclosed region gets the shape, and the surrounding region is seen to continue behind it. This is the figure-ground twin of common region: common region says items in a boundary group together, while surroundedness says the enclosed area itself becomes an object.",
      why: "It is why modals, badges, chips and tooltips read as things placed on top rather than as parts of the page. It is also why a bordered panel always pulls forward, which is useful once on a screen and tiring everywhere on one.",
      how: [
        "Enclose the one thing you want treated as an object on top, and leave everything else open.",
        "Use enclosure sparingly, because every enclosed area competes for the foreground.",
        "If a badge should sit on a surface instead of floating above it, drop the outline and use a fill from the same family as the surface.",
        "Watch for enclosures created by accident, such as a heading trapped between two full-width rules."
      ],
      example: "A modal dialogue: a bounded panel over a dimmed page. The panel reads as an object in front and the page reads as continuing behind it, which is exactly Rubin's description of what a contour does.",
      numbers: "",
      pitfall: "Over-enclosure. Once several regions on one screen are enclosed, they all claim the foreground and the reader has no route through them.",
      source: "Edgar Rubin, Synsoplevede Figurer (1915), among the factors determining figure assignment.",
      verify: {
        status: "verified",
        note: "Enclosure and surroundedness confirmed as classical configural cues in Peterson and Salvagio's Scholarpedia article on figure-ground perception, which lists convex, symmetric, smaller, enclosed and surrounded regions together and traces them to Rubin (1915/1958), Koffka (1935) and Köhler. I removed the previous claim that Rubin ranked enclosure among the strongest factors: no source I found ranks them that way, and Kanizsa and Gerbino (1976) argued convexity beats symmetry and small area. I have not read the Danish original."
      },
      belongs: {
        verdict: "adjacent",
        why: "It overlaps heavily with common region and with the composition section's figure-ground entry, but it earns its own line because it explains foreground stacking: enclose something and it comes forward."
      },
      related: [161, 163, 172]
    },
    {
      n: 174,
      title: "Area (smallness)",
      aka: ["Smaller region", "Relative size cue"],
      oneLine: "Where two regions meet, the smaller one is more likely to be seen as the object.",
      demo: {
        caption: "Tones never change across the three panels. The smaller region takes the object role, so the reading flips left to right.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 98\"><g transform=\"translate(0,4)\"><rect x=\"0\" y=\"0\" width=\"90\" height=\"70\" style=\"fill:var(--paper-sunk)\"/><path class=\"f\" d=\"M0 0 H22 V18 H6 V36 H22 V54 H6 V70 H0 Z\"/></g><g transform=\"translate(105,4)\"><rect x=\"0\" y=\"0\" width=\"90\" height=\"70\" style=\"fill:var(--paper-sunk)\"/><path class=\"f\" d=\"M0 0 H53 V18 H37 V36 H53 V54 H37 V70 H0 Z\"/></g><g transform=\"translate(210,4)\"><rect x=\"0\" y=\"0\" width=\"90\" height=\"70\" style=\"fill:var(--paper-sunk)\"/><path class=\"f\" d=\"M0 0 H84 V18 H68 V36 H84 V54 H68 V70 H0 Z\"/></g><text class=\"t\" x=\"45\" y=\"92\" text-anchor=\"middle\">dark 1 : 5 light</text><text class=\"t\" x=\"150\" y=\"92\" text-anchor=\"middle\">dark 1 : 1 light</text><text class=\"t\" x=\"255\" y=\"92\" text-anchor=\"middle\">dark 5 : 1 light</text></svg></div>"
      },
      what: "Another of Rubin's figure-ground factors. Given two adjoining regions and nothing else to go on, the smaller area takes the figure role and the larger becomes ground. It is a weak cue on its own and is easily overturned by enclosure, convexity or familiarity.",
      why: "It sets a default you can work with or against. A small light shape on a large dark field is read as an object on a surface, not as a hole through it. In marks and in charts, relative area quietly decides which part is the subject.",
      how: [
        "If you want a counter-shape to be read as the subject of a mark, keep it smaller than the surround.",
        "Do not try to fight this with size alone. If a large region has to be the figure, add enclosure or convexity.",
        "In charts, keep the plotted marks smaller in total area than the field they sit on, or the background starts reading as the data."
      ],
      example: "A page with a large dark hero panel and a small light logo on it. The logo reads as an object sitting on a surface, not as a window cut through the panel.",
      numbers: "",
      pitfall: "The cue is weak. Relying on it produces marks that flip, especially at small sizes where the other cues drop out first.",
      source: "Edgar Rubin, Synsoplevede Figurer (1915).",
      verify: {
        status: "verified",
        note: "Confirmed as one of Rubin's classic image-based figure-ground factors via the Wagemans and others 2012 review, which lists smaller region among them. I have not read the Danish original."
      },
      belongs: {
        verdict: "adjacent",
        why: "Narrow, and nobody decides a layout on area alone, but it belongs because it explains why counter-shapes in logos and small marks on large fields read as objects."
      },
      related: [163, 172, 173]
    }
  ]
};
