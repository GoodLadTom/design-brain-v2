window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[5] = {
  n: 5,
  slug: "perception",
  title: "Perception, vision and cognition",
  blurb: "How eyes and memory actually work, and what that forces a designer to do differently.",
  intro: "This family of ideas comes from vision science and cognitive psychology rather than from studios. It answers a practical question: what does a person actually take in from a page, a screen or a sign, and what do they miss? Most of it was measured in laboratories between the 1860s and the 2000s, using letters flashed on screens, eye trackers and reaction times. A working designer needs it because layout decisions are bets about attention and memory, and these are the measurements that tell you whether the bet is sound. Some of the best-known effects in this section have failed to replicate, and those are flagged rather than repeated.",
  sources: [
    "Anne Treisman and Garry Gelade, A Feature-Integration Theory of Attention, Cognitive Psychology (1980)",
    "Jeremy Wolfe and Todd Horowitz, What attributes guide the deployment of visual attention and how do they do it?, Nature Reviews Neuroscience (2004)",
    "Keith Rayner, Eye Movements in Reading and Information Processing: 20 Years of Research, Psychological Bulletin (1998)",
    "Ronald Rensink, Kevin O'Regan and James Clark, To See or Not to See: The Need for Attention to Perceive Changes in Scenes, Psychological Science (1997)",
    "Daniel Simons and Christopher Chabris, Gorillas in Our Midst, Perception (1999)",
    "Jan Panero Benway and David Lane, Banner Blindness: Web Searchers Often Miss Obvious Links, Internetworking (1998)",
    "Fergus Campbell and John Robson, Application of Fourier Analysis to the Visibility of Gratings, Journal of Physiology (1968)",
    "Gustav Fechner, Elemente der Psychophysik (1860)",
    "S. S. Stevens, On the Psychophysical Law, Psychological Review (1957)",
    "Michel Eugene Chevreul, De la loi du contraste simultane des couleurs (1839)",
    "Josef Albers, Interaction of Color (1963)",
    "Edwin Land, The Retinex Theory of Color Vision, Scientific American (1977)",
    "James J. Gibson, The Perception of the Visual World (1950)",
    "V. S. Ramachandran, Perception of shape from shading, Nature (1988)",
    "Max Wertheimer, Experimentelle Studien uber das Sehen von Bewegung (1912)",
    "George Sperling, The Information Available in Brief Visual Presentations (1960)",
    "George Miller, The Magical Number Seven, Plus or Minus Two, Psychological Review (1956)",
    "Nelson Cowan, The magical number 4 in short-term memory, Behavioral and Brain Sciences (2001)",
    "John Sweller, Cognitive Load During Problem Solving, Cognitive Science (1988)",
    "Jakob Nielsen, 10 Usability Heuristics for User Interface Design (1994)",
    "Donald Norman, The Design of Everyday Things (1988, revised 2013)",
    "Frederic Bartlett, Remembering (1932)",
    "Allan Paivio, Imagery and Verbal Processes (1971)",
    "Daniel Kahneman, Barbara Fredrickson, Charles Schreiber and Donald Redelmeier, When More Pain Is Preferred to Less, Psychological Science (1993)",
    "Herbert Simon, Rational Choice and the Structure of the Environment, Psychological Review (1956)",
    "Donald Redelmeier, Joel Katz and Daniel Kahneman, Memories of colonoscopy: a randomized trial, Pain (2003)",
    "Rebecca Ghibellini and Beat Meier, Interruption, recall and resumption: a meta-analysis of the Zeigarnik and Ovsiankina effects, Humanities and Social Sciences Communications (2025)",
    "Peter Pirolli and Stuart Card, Information Foraging, Psychological Review (1999)",
    "Colin Ware, Information Visualization: Perception for Design (2000, 4th edition 2021)",
    "W3C, Web Content Accessibility Guidelines 2.1 and 2.2"
  ],
  entries: [
    {
      n: 175,
      title: "Preattentive attributes",
      aka: ["Preattentive processing", "Visual features", "Guiding attributes"],
      oneLine: "A short list of visual features the eye registers across the whole field before you consciously look.",
      demo: {
        caption: "Three fields, one odd item in each. Colour, size and orientation are found without searching for them.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 120\"><circle class=\"f-mute\" cx=\"18\" cy=\"22\" r=\"5\"/><circle class=\"f-mute\" cx=\"44\" cy=\"22\" r=\"5\"/><circle class=\"f-mute\" cx=\"70\" cy=\"22\" r=\"5\"/><circle class=\"f-mute\" cx=\"96\" cy=\"22\" r=\"5\"/><circle class=\"f-mute\" cx=\"18\" cy=\"50\" r=\"5\"/><circle class=\"f-mute\" cx=\"44\" cy=\"50\" r=\"5\"/><circle class=\"f-accent\" cx=\"70\" cy=\"50\" r=\"5\"/><circle class=\"f-mute\" cx=\"96\" cy=\"50\" r=\"5\"/><circle class=\"f-mute\" cx=\"18\" cy=\"78\" r=\"5\"/><circle class=\"f-mute\" cx=\"44\" cy=\"78\" r=\"5\"/><circle class=\"f-mute\" cx=\"70\" cy=\"78\" r=\"5\"/><circle class=\"f-mute\" cx=\"96\" cy=\"78\" r=\"5\"/><circle class=\"f-mute\" cx=\"129\" cy=\"22\" r=\"5\"/><circle class=\"f-mute\" cx=\"155\" cy=\"22\" r=\"5\"/><circle class=\"f-mute\" cx=\"181\" cy=\"22\" r=\"5\"/><circle class=\"f-mute\" cx=\"207\" cy=\"22\" r=\"5\"/><circle class=\"f-mute\" cx=\"129\" cy=\"50\" r=\"5\"/><circle class=\"f-mute\" cx=\"155\" cy=\"50\" r=\"5\"/><circle class=\"f-mute\" cx=\"181\" cy=\"50\" r=\"11\"/><circle class=\"f-mute\" cx=\"207\" cy=\"50\" r=\"5\"/><circle class=\"f-mute\" cx=\"129\" cy=\"78\" r=\"5\"/><circle class=\"f-mute\" cx=\"155\" cy=\"78\" r=\"5\"/><circle class=\"f-mute\" cx=\"181\" cy=\"78\" r=\"5\"/><circle class=\"f-mute\" cx=\"207\" cy=\"78\" r=\"5\"/><rect class=\"f-mute\" x=\"236.5\" y=\"14\" width=\"3\" height=\"16\"/><rect class=\"f-mute\" x=\"260.5\" y=\"14\" width=\"3\" height=\"16\"/><rect class=\"f-mute\" x=\"284.5\" y=\"14\" width=\"3\" height=\"16\"/><rect class=\"f-mute\" x=\"308.5\" y=\"14\" width=\"3\" height=\"16\"/><rect class=\"f-mute\" x=\"236.5\" y=\"42\" width=\"3\" height=\"16\"/><rect class=\"f-mute\" x=\"260.5\" y=\"42\" width=\"3\" height=\"16\"/><rect class=\"f-mute\" x=\"284.5\" y=\"42\" width=\"3\" height=\"16\" transform=\"rotate(45 286 50)\"/><rect class=\"f-mute\" x=\"308.5\" y=\"42\" width=\"3\" height=\"16\"/><rect class=\"f-mute\" x=\"236.5\" y=\"70\" width=\"3\" height=\"16\"/><rect class=\"f-mute\" x=\"260.5\" y=\"70\" width=\"3\" height=\"16\"/><rect class=\"f-mute\" x=\"284.5\" y=\"70\" width=\"3\" height=\"16\"/><rect class=\"f-mute\" x=\"308.5\" y=\"70\" width=\"3\" height=\"16\"/><text class=\"t\" x=\"4\" y=\"110\">colour</text><text class=\"t\" x=\"115\" y=\"110\">size</text><text class=\"t\" x=\"226\" y=\"110\">orientation</text></svg></div>"
      },
      what: "Treisman and Gelade proposed that simple features such as colour, orientation, size and motion are picked up early, automatically and everywhere at once. Combinations of features are not. To find something defined by two features at the same time, attention has to visit items one by one and bind the features together. Later work by Jeremy Wolfe softened the hard two-stage split into graded guidance, but the shortlist of features that guide attention has held up.",
      why: "Anything you encode in a preattentive attribute is found in roughly the same time whether there are five items on the page or fifty. Anything you encode in a combination of attributes costs the reader a search. Choosing the right attribute is the difference between a glance and a hunt.",
      how: [
        "Encode the one distinction that matters most in a single strong attribute, usually colour or size.",
        "Never make a safety-critical or task-critical item findable only by a conjunction such as red and square.",
        "Keep each attribute doing one job: colour for category, position and length for quantity.",
        "Check the count. A preattentive cue only works while it is rare on the page."
      ],
      example: "A flight departures board where only delayed rows are amber. The amber is found in a glance because nothing else on the board is amber.",
      numbers: "Wolfe and Horowitz list exactly four undoubted guiding attributes: colour, motion, orientation and size (including length, spatial frequency and apparent size). Everything else, shape and curvature included, sits in weaker categories.",
      pitfall: "Designers add a second and third highlight colour, and the first one stops popping out. Preattentive salience is a budget, not a property of the colour.",
      source: "Anne Treisman and Garry Gelade, A Feature-Integration Theory of Attention, Cognitive Psychology (1980); Jeremy Wolfe and Todd Horowitz, Nature Reviews Neuroscience (2004)",
      verify: { status: "verified", note: "Corrected on 17 August 2026. Read the guiding-attributes table in Wolfe and Horowitz, Five Factors that Guide Attention in Visual Search, Nature Human Behaviour (2017), open copy at PMC9879335. The undoubted list is only colour, motion, orientation and size. An earlier draft of this entry also claimed aspect ratio and eye of origin were accepted; the table places both under possible attributes awaiting more research, and Wolfe notes earlier work suggested eye of origin does not guide attention at all. Treisman and Gelade 1980 confirmed as the founding paper." },
      belongs: { verdict: "core", why: "It is the mechanism behind every emphasis decision a designer makes, and it names exactly which visual properties will do the work." },
      related: [176, 177, 216]
    },
    {
      n: 176,
      title: "Pop-out effect",
      aka: ["Feature search", "Visual singleton"],
      oneLine: "An item differing from its neighbours by one feature is found in flat time, however many items there are.",
      demo: {
        caption: "Eight items on the left, forty on the right. The accent mark takes the same single glance in both.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">8 items</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div><div class=\"db-row db-row--tight db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot db-dot--mute\"></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">40 items</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div><div class=\"db-row db-row--tight db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div><div class=\"db-row db-row--tight db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div><div class=\"db-row db-row--tight db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div><div class=\"db-row db-row--tight db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div></div></div></div></div>"
      },
      what: "Pop-out is what preattentive processing looks like from the outside. In a feature search, reaction time barely rises as you add distractors, because the odd one out announces itself. Pop-out is not absolute. It depends on how far the target sits from the distractors on that feature, and on how uniform the distractors are among themselves. A mildly warmer grey among cool greys does not pop out; a red among greys does.",
      why: "Pop-out is the cheapest attention you will ever get. It costs no reading and no scanning. It is how you make an error state, an unread count or a primary action land before anyone has decided to look for it.",
      how: [
        "Make the difference large on one dimension rather than small on several.",
        "Keep the background uniform. Varied distractors kill pop-out faster than extra distractors do.",
        "Allow one pop-out per view and rank everything else with quieter means.",
        "Test by squinting or by looking at a thumbnail. If nothing jumps, nothing pops."
      ],
      example: "A single filled red dot beside one row in an otherwise monochrome inbox list.",
      numbers: "",
      pitfall: "Treating pop-out as a property of the element rather than the relationship. A red button pops out on a white page and disappears on a red marketing hero.",
      source: "Anne Treisman and Garry Gelade, Cognitive Psychology (1980)",
      verify: { status: "verified", note: "Confirmed against the Treisman and Gelade 1980 paper and standard summaries of feature versus conjunction search; the dependence on target-distractor difference and distractor uniformity is documented in Wolfe's visual search reviews." },
      belongs: { verdict: "core", why: "It is the direct, testable form of visual emphasis and it gives a designer a pass or fail check on any hierarchy." },
      related: [175, 177, 216]
    },
    {
      n: 177,
      title: "Visual search",
      aka: ["Feature search and conjunction search", "Search efficiency"],
      oneLine: "Finding a target among distractors, which is fast when one feature separates it and slow when a combination does.",
      demo: {
        caption: "Left, the odd mark arrives on its own. Right, the accent square is found only by checking items one by one.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One feature: colour</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Two features: colour and shape</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--centre\"><span class=\"db-dot db-dot--accent\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-dot db-dot--accent\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-sq db-sq--mute\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-dot db-dot--accent\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--accent\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-sq db-sq--mute\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-dot db-dot--accent\"></span></div></div></div></div></div>"
      },
      what: "Search is the task most interfaces actually put people through. Laboratory work measures it as a slope: how many extra milliseconds each added distractor costs. Feature searches have a near-flat slope. Conjunction searches climb steeply, because attention has to inspect items in turn. Real interfaces sit in between, and are made worse by clutter, low contrast and inconsistent alignment, all of which stop the eye from ruling out large areas at once.",
      why: "Most of what people call a confusing interface is a slow search. If you can turn a conjunction search into a feature search, you have removed work that no amount of copywriting would have removed.",
      how: [
        "Group items so that whole blocks can be dismissed without reading them.",
        "Align edges. A ragged column forces item-by-item inspection.",
        "Put the label that distinguishes items first, not after a shared prefix.",
        "Give repeated item types a consistent shape so the eye can filter on shape alone."
      ],
      example: "A settings page that lists every toggle in one long column versus the same toggles under four labelled headings. The headings turn one long search into a short one.",
      numbers: "",
      pitfall: "Adding a search box instead of fixing the layout. Search boxes help people who know the word for what they want, and nobody else.",
      source: "Anne Treisman and Garry Gelade (1980); Colin Ware, Information Visualization: Perception for Design (2000, 4th edition 2021)",
      verify: { status: "verified", note: "Feature versus conjunction slopes checked against the Treisman and Gelade 1980 paper; the applied framing follows Ware's Information Visualization, which I have named rather than quoted." },
      belongs: { verdict: "core", why: "Nearly every screen is a search task, and search efficiency is the measurable outcome of layout, grouping and contrast decisions." },
      related: [175, 176, 224]
    },
    {
      n: 178,
      title: "Foveal versus peripheral vision",
      aka: ["Central and peripheral vision", "Useful field of view"],
      oneLine: "Sharp vision covers a tiny patch at the centre of gaze; everything else is coarse but good at motion.",
      demo: {
        caption: "The ring is sharp vision at arm's length, drawn to scale against a full screen. Everything else is coarse.",
        html: "<div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 190\"><rect class=\"s-mute\" x=\"1\" y=\"1\" width=\"318\" height=\"183\"/><rect class=\"f-mute\" x=\"14\" y=\"14\" width=\"86\" height=\"6\"/><rect class=\"f-mute\" x=\"108\" y=\"14\" width=\"120\" height=\"6\"/><rect class=\"f-mute\" x=\"236\" y=\"14\" width=\"64\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"31\" width=\"110\" height=\"6\"/><rect class=\"f-mute\" x=\"132\" y=\"31\" width=\"72\" height=\"6\"/><rect class=\"f-mute\" x=\"212\" y=\"31\" width=\"90\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"48\" width=\"70\" height=\"6\"/><rect class=\"f-mute\" x=\"92\" y=\"48\" width=\"132\" height=\"6\"/><rect class=\"f-mute\" x=\"232\" y=\"48\" width=\"66\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"65\" width=\"124\" height=\"6\"/><rect class=\"f-mute\" x=\"146\" y=\"65\" width=\"58\" height=\"6\"/><rect class=\"f-mute\" x=\"212\" y=\"65\" width=\"86\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"82\" width=\"92\" height=\"6\"/><rect class=\"f-mute\" x=\"114\" y=\"82\" width=\"104\" height=\"6\"/><rect class=\"f-mute\" x=\"226\" y=\"82\" width=\"74\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"99\" width=\"64\" height=\"6\"/><rect class=\"f-mute\" x=\"86\" y=\"99\" width=\"118\" height=\"6\"/><rect class=\"f-mute\" x=\"212\" y=\"99\" width=\"84\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"116\" width=\"118\" height=\"6\"/><rect class=\"f-mute\" x=\"140\" y=\"116\" width=\"80\" height=\"6\"/><rect class=\"f-mute\" x=\"228\" y=\"116\" width=\"70\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"133\" width=\"78\" height=\"6\"/><rect class=\"f-mute\" x=\"100\" y=\"133\" width=\"110\" height=\"6\"/><rect class=\"f-mute\" x=\"218\" y=\"133\" width=\"80\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"150\" width=\"104\" height=\"6\"/><rect class=\"f-mute\" x=\"126\" y=\"150\" width=\"66\" height=\"6\"/><rect class=\"f-mute\" x=\"200\" y=\"150\" width=\"96\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"167\" width=\"88\" height=\"6\"/><rect class=\"f-mute\" x=\"110\" y=\"167\" width=\"124\" height=\"6\"/><rect class=\"f-mute\" x=\"242\" y=\"167\" width=\"52\" height=\"6\"/><circle class=\"s-accent\" cx=\"150\" cy=\"85\" r=\"8\"/><path class=\"s-accent\" d=\"M157 79 L204 50\"/><text class=\"t\" x=\"208\" y=\"52\">about 2 degrees</text></svg></div>"
      },
      what: "The fovea is the small central pit of the retina where cone density is highest. Anatomical definitions vary: the whole fovea subtends roughly five degrees of visual field, while its centre, the foveola, is about one degree, and the working figure for sharp vision usually falls between the two at around two degrees. Two degrees is about the width of a thumb held at arm's length. Acuity falls away steeply outside it. Peripheral vision is poor at fine detail and small text but sensitive to movement, large shapes, brightness changes and the general skeleton of a layout.",
      why: "It means nobody reads a page. They read a two-degree window and move it. It also means a peripheral cue has to be big, bright or moving to register at all, and that a subtle change in the corner of a wide monitor may as well not have happened.",
      how: [
        "Put confirmations and error messages near the control the person just used, not in a far corner.",
        "Make peripheral signals large, high in contrast or in motion; never small text.",
        "Design the page so its coarse structure reads at a squint, because that is what the periphery delivers.",
        "On wide screens, keep a task's elements inside a comfortable central band rather than spreading them edge to edge."
      ],
      example: "A form that puts the validation message immediately beside the offending field rather than in a summary bar above the fold line.",
      numbers: "The fovea subtends roughly five degrees of visual angle and the foveola about one; the commonly quoted sharp-vision figure of about two degrees sits between them. Acuity declines sharply beyond the centre.",
      pitfall: "Putting the system's most important feedback in a top-right toast while the user's eyes are locked on a button in the lower left.",
      source: "Standard visual anatomy and psychophysics; applied treatment in Colin Ware, Information Visualization: Perception for Design",
      verify: { status: "adjusted", note: "Corrected on 17 August 2026. An earlier draft gave the fovea flatly as two degrees. Clinical and vision-science sources put the anatomical fovea at about five degrees (roughly 1.5 mm across) and the foveola at about one degree, with two degrees being the popular shorthand for the high-acuity centre rather than the anatomical structure. All three figures are now given. No figure is quoted for the wider useful field of view because it varies with task." },
      belongs: { verdict: "core", why: "It sets the physical limit on where feedback and detail can be placed and still be seen." },
      related: [179, 184, 185]
    },
    {
      n: 179,
      title: "Saccades and fixations",
      aka: ["Eye movements", "Scanpath"],
      oneLine: "The eye jumps between brief still points, and takes in almost nothing during the jumps.",
      demo: {
        caption: "The eye samples each line at four points and jumps between them. Nothing is taken in during the jumps.",
        html: "<div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 152\"><rect class=\"f-mute\" x=\"12\" y=\"22\" width=\"30\" height=\"7\"/><rect class=\"f-mute\" x=\"48\" y=\"22\" width=\"18\" height=\"7\"/><rect class=\"f-mute\" x=\"72\" y=\"22\" width=\"42\" height=\"7\"/><rect class=\"f-mute\" x=\"120\" y=\"22\" width=\"24\" height=\"7\"/><rect class=\"f-mute\" x=\"150\" y=\"22\" width=\"36\" height=\"7\"/><rect class=\"f-mute\" x=\"192\" y=\"22\" width=\"20\" height=\"7\"/><rect class=\"f-mute\" x=\"218\" y=\"22\" width=\"48\" height=\"7\"/><rect class=\"f-mute\" x=\"272\" y=\"22\" width=\"30\" height=\"7\"/><rect class=\"f-mute\" x=\"12\" y=\"62\" width=\"44\" height=\"7\"/><rect class=\"f-mute\" x=\"62\" y=\"62\" width=\"22\" height=\"7\"/><rect class=\"f-mute\" x=\"90\" y=\"62\" width=\"34\" height=\"7\"/><rect class=\"f-mute\" x=\"130\" y=\"62\" width=\"18\" height=\"7\"/><rect class=\"f-mute\" x=\"154\" y=\"62\" width=\"46\" height=\"7\"/><rect class=\"f-mute\" x=\"206\" y=\"62\" width=\"26\" height=\"7\"/><rect class=\"f-mute\" x=\"238\" y=\"62\" width=\"30\" height=\"7\"/><rect class=\"f-mute\" x=\"274\" y=\"62\" width=\"28\" height=\"7\"/><rect class=\"f-mute\" x=\"12\" y=\"102\" width=\"26\" height=\"7\"/><rect class=\"f-mute\" x=\"44\" y=\"102\" width=\"40\" height=\"7\"/><rect class=\"f-mute\" x=\"90\" y=\"102\" width=\"20\" height=\"7\"/><rect class=\"f-mute\" x=\"116\" y=\"102\" width=\"38\" height=\"7\"/><rect class=\"f-mute\" x=\"160\" y=\"102\" width=\"24\" height=\"7\"/><rect class=\"f-mute\" x=\"190\" y=\"102\" width=\"44\" height=\"7\"/><rect class=\"f-mute\" x=\"240\" y=\"102\" width=\"22\" height=\"7\"/><rect class=\"f-mute\" x=\"268\" y=\"102\" width=\"34\" height=\"7\"/><path class=\"s-mute\" d=\"M232 25.5 C 300 40, 90 46, 24 65.5\"/><path class=\"s-mute\" d=\"M228 65.5 C 296 80, 92 86, 26 105.5\"/><path class=\"s-accent\" d=\"M25 25.5 Q56 13 88 25.5 Q124 13 160 25.5 Q196 13 232 25.5\"/><path class=\"s-accent\" d=\"M24 65.5 Q58 53 92 65.5 Q126 53 160 65.5 Q194 53 228 65.5\"/><path class=\"s-accent\" d=\"M26 105.5 Q61 93 96 105.5 Q132 93 168 105.5 Q204 93 240 105.5\"/><circle class=\"f-accent\" cx=\"25\" cy=\"25.5\" r=\"4\"/><circle class=\"f-accent\" cx=\"88\" cy=\"25.5\" r=\"5\"/><circle class=\"f-accent\" cx=\"160\" cy=\"25.5\" r=\"3.5\"/><circle class=\"f-accent\" cx=\"232\" cy=\"25.5\" r=\"4.5\"/><circle class=\"f-accent\" cx=\"24\" cy=\"65.5\" r=\"4.5\"/><circle class=\"f-accent\" cx=\"92\" cy=\"65.5\" r=\"4\"/><circle class=\"f-accent\" cx=\"160\" cy=\"65.5\" r=\"5\"/><circle class=\"f-accent\" cx=\"228\" cy=\"65.5\" r=\"3.5\"/><circle class=\"f-accent\" cx=\"26\" cy=\"105.5\" r=\"4\"/><circle class=\"f-accent\" cx=\"96\" cy=\"105.5\" r=\"5\"/><circle class=\"f-accent\" cx=\"168\" cy=\"105.5\" r=\"4\"/><circle class=\"f-accent\" cx=\"240\" cy=\"105.5\" r=\"4.5\"/><text class=\"t\" x=\"12\" y=\"128\">circles: fixations, 200 to 250 ms</text><text class=\"t\" x=\"12\" y=\"142\">curves: saccades and return sweeps</text></svg></div>"
      },
      what: "Vision is sampled, not streamed. The eye holds still for a fixation, then flicks to a new position in a saccade, and visual input is largely suppressed while it is moving. Rayner's review of reading research puts the average fixation at around 200 to 250 milliseconds and the average saccade at about seven to nine letter spaces. Where the eye goes next is driven partly by what is salient and partly by what the reader is trying to do.",
      why: "A layout is consumed as a sequence of samples. That is why alignment, grouping and clear landing points matter more than elegance in the abstract: they decide where the next sample falls and how many samples the task takes.",
      how: [
        "Give each block one obvious entry point, usually a heading or a strong image edge.",
        "Keep related items close enough that one fixation covers both, so a comparison does not need a return journey.",
        "Avoid layouts that force long horizontal jumps between a label and its value.",
        "Do not animate anything the reader has to read; a moving target costs extra fixations."
      ],
      example: "A pricing table with the plan name, price and call to action stacked in a narrow column, so all three land within a short run of fixations.",
      numbers: "In skilled adult reading, average fixation duration is roughly 200 to 250 milliseconds and average saccade length about seven to nine letter spaces (Rayner, 1998).",
      pitfall: "Reading eye-tracking heat maps as maps of interest. They show where the eye stopped, which can mean confusion just as easily as attention.",
      source: "Keith Rayner, Eye Movements in Reading and Information Processing: 20 Years of Research, Psychological Bulletin (1998)",
      verify: { status: "verified", note: "Both figures read from the text of Rayner's 1998 Psychological Bulletin review on 17 August 2026, page 375: eye fixations last about 200 to 250 ms and the mean saccade size is 7 to 9 letter spaces. The copy read was the Clemson University course mirror, which serves the PDF over plain HTTP only." },
      belongs: { verdict: "adjacent", why: "It is vision science rather than a design rule, but it gives a designer the specific reason to keep labels near values, keep comparisons within one fixation and avoid animating text." },
      related: [178, 180, 177]
    },
    {
      n: 180,
      title: "Parafoveal preview",
      aka: ["Preview benefit", "Boundary paradigm"],
      oneLine: "While you read one word, you are already partly processing the next, which speeds the whole line up.",
      demo: {
        caption: "Fixate the coloured word. On the right everything past it is masked, which is the preview a reader normally gets.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Normal reading</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-type db-type--mono\" style=\"font-size:13px\">the <span style=\"color:var(--accent)\">storm</span> had passed by morning</div><span class=\"db-note db-note--accent\">eye is on the coloured word</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Preview removed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-type db-type--mono\" style=\"font-size:13px\">the <span style=\"color:var(--accent)\">storm</span> xxx xxxxxx xx xxxxxxx</div><span class=\"db-note db-note--accent\">eye is on the coloured word</span></div></div></div></div>"
      },
      what: "Rayner's boundary technique hides the upcoming word and swaps it in only once the eye crosses an invisible line. Comparing that with a normal preview shows how much the reader had already gained. For skilled adult readers, the preview benefit is around 30 to 50 milliseconds per word. The perceptual span in alphabetic reading is asymmetric: a few letters to the left of fixation and roughly 14 to 15 letter spaces to the right.",
      why: "Reading speed is not just about legibility of the current word. It also depends on whether the next word is available in the near periphery. Anything that hides or disturbs the upcoming text costs real time on every line.",
      how: [
        "Do not hyphenate heavily or break words across lines in body copy if reading speed matters.",
        "Avoid reveal-on-scroll animations that hold back the next line of text.",
        "Keep line length moderate so the return sweep lands reliably at the start of the next line.",
        "Do not set body text in all capitals, which flattens the word shapes the periphery relies on."
      ],
      example: "A long-form article that fades paragraphs in as you scroll. Each fade removes the preview the reader would otherwise have had.",
      numbers: "Preview benefit of roughly 30 to 50 milliseconds in skilled adult readers (Rayner, 2009). Perceptual span of about three to four letters left of fixation and 14 to 15 letter spaces right, for left-to-right alphabetic scripts.",
      pitfall: "Applying the numbers to non-alphabetic scripts or to right-to-left languages, where the span is different and differently shaped.",
      source: "Keith Rayner, boundary paradigm (1975) and Eye Movements in Reading (1998); preview benefit magnitude from Rayner (2009) as cited in the reading literature",
      verify: { status: "verified", note: "Preview benefit of 30 to 50 milliseconds confirmed in Marx, Hutzler, Schuster and Hawelka, On the Development of Parafoveal Preprocessing, Frontiers in Psychology (2016), which cites Rayner 2009 for the figure. The perceptual span of 3 to 4 letters left of fixation and 14 to 15 right is stated in that paper and in the text of Rayner's 1998 review, which I read." },
      belongs: { verdict: "adjacent", why: "It is reading research, but it gives a concrete reason to reject scroll-triggered text reveals and aggressive hyphenation in body copy." },
      related: [179, 178]
    },
    {
      n: 181,
      title: "Change blindness",
      aka: ["Failure to detect change"],
      oneLine: "People miss large changes to a scene when the change happens during a flicker, cut or interruption.",
      demo: {
        caption: "Two figures differ between the panels. Nothing moves and nothing is marked, so you have to compare line by line.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Before</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span>Wireless mouse</span><span>24.00</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span>USB-C cable</span><span>9.50</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span>Laptop stand</span><span>32.00</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span>Delivery</span><span>4.50</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span>Total</span><span>70.00</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">After</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span>Wireless mouse</span><span>24.00</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span>USB-C cable</span><span>9.50</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span>Laptop stand</span><span>34.00</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span>Delivery</span><span>4.50</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span>Total</span><span>72.00</span></div></div></div></div></div></div>"
      },
      what: "Rensink, O'Regan and Clark alternated a picture with a slightly altered version, separated by a brief blank. Without the motion signal that a change normally produces, observers hunted for many seconds before spotting alterations as large as a missing aircraft engine. Simons and Levin took it into the street: an experimenter asking directions was swapped for a different person behind a passing door, and only seven of the fifteen pedestrians in the first experiment noticed.",
      why: "It kills the assumption that a visible change is a perceived change. If your interface quietly updates a total, swaps a label or reorders a list, a good proportion of users will carry on with the old picture in their head.",
      how: [
        "Announce state changes with motion, colour or a short message rather than swapping content silently.",
        "Avoid full-page repaints on small updates; change the smallest region you can and mark it.",
        "Keep an audit trail visible when values change, such as a struck-through old price.",
        "For screen reader users, use a live region so the change is announced rather than only drawn."
      ],
      example: "A basket total that updates after a promotion is applied. Without a brief highlight on the changed figure, a shopper who was looking at the item list will not register it.",
      numbers: "In Simons and Levin's first door experiment, 7 of 15 pedestrians noticed the person had been swapped. In their second, 4 of 12 noticed.",
      pitfall: "Relying on a fade transition to communicate a change. Fades are the closest thing to the blank screen that produces change blindness in the first place.",
      source: "Ronald Rensink, Kevin O'Regan and James Clark, Psychological Science (1997); Daniel Simons and Daniel Levin, Failure to detect changes to people during a real-world interaction, Psychonomic Bulletin and Review (1998)",
      verify: { status: "verified", note: "Re-checked on 17 August 2026. The Simons and Levin 1998 paper sits behind a Springer login and could not be opened this session, so the earlier note claiming a direct read has been withdrawn. The counts of 7 of 15 in Experiment 1 and 4 of 12 in Experiment 2 are reported consistently across independent summaries of the study, and the journal record confirms the citation. Rensink et al. 1997 and the flicker paradigm, including the airliner engine image, are confirmed by Rensink's own 2018 retrospective, To Have Seen or Not to Have Seen, which is openly available." },
      belongs: { verdict: "core", why: "It directly governs how interface state changes must be signalled, and it is one of the few perception findings with a clean design remedy." },
      related: [182, 183, 202]
    },
    {
      n: 182,
      title: "Inattentional blindness",
      aka: ["Perceptual blindness", "The invisible gorilla"],
      oneLine: "When attention is loaded by a task, people fail to see unexpected things that are plainly in view.",
      demo: {
        caption: "Same notice twice. The left one is larger and brighter; the right sits between the last field and the button.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Loud, beside the flow</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--nowrap db-row--top\"><div class=\"db-col\" style=\"width:60%\"><div><span class=\"db-label\">Card number</span><span class=\"db-input\">4242 4242 4242 4242</span></div><div><span class=\"db-label\">Expiry</span><span class=\"db-input\">09 / 28</span></div><div><span class=\"db-btn\">Pay now</span></div></div><div class=\"db-card\" style=\"width:36%;background:var(--accent-soft)\"><span class=\"db-note db-note--accent\">Order by 3 pm for next-day delivery</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Quiet, in the flow</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div><span class=\"db-label\">Card number</span><span class=\"db-input\">4242 4242 4242 4242</span></div><div><span class=\"db-label\">Expiry</span><span class=\"db-input\">09 / 28</span></div><div><span class=\"db-note\">Order by 3 pm for next-day delivery</span></div><div><span class=\"db-btn\">Pay now</span></div></div></div></div></div>"
      },
      what: "Mack and Rock established the effect in the laboratory, and Simons and Chabris made it famous with a video in which viewers counting basketball passes fail to see a person in a gorilla suit walk through the scene. Across 192 observers and 16 conditions, 46 per cent missed the unexpected event. Noticing depended on how hard the counting task was and on how similar the gorilla was to the items being tracked.",
      why: "Users arrive with a task. Anything not part of that task competes badly, no matter how large or central it is. This is the mechanism underneath most complaints that people ignored a notice you were sure they could not miss.",
      how: [
        "Put required information inside the task flow, not beside it.",
        "Interrupt deliberately when something must be seen, and make the interruption block progress.",
        "Reduce the load of the primary task if you also need peripheral awareness.",
        "Test with users who have a real goal, not with users told to look at the page."
      ],
      example: "A checkout page with a delivery cut-off notice in a sidebar. Shoppers focused on card details routinely complete the purchase without registering it.",
      numbers: "Simons and Chabris (1999): 192 observers, 46 per cent failed to notice the unexpected event.",
      pitfall: "Answering it with size and colour. A bigger banner in the wrong place is still outside the task, and may read as an advert.",
      source: "Arien Mack and Irvin Rock, Inattentional Blindness (1998); Daniel Simons and Christopher Chabris, Gorillas in Our Midst, Perception (1999)",
      verify: { status: "verified", note: "Corrected on 17 August 2026. The publisher's page for the paper returns a 403 and shows no abstract, so the earlier note pointing at it has been replaced. Figures read from the paper text hosted by Chabris: the remaining 192 observers were spread equally across sixteen conditions, and 46 per cent failed to notice the unexpected event. The paper's own conclusions state that the level of inattentional blindness depends on the difficulty of the primary task and on similarity to the attended items." },
      belongs: { verdict: "core", why: "It explains why placement relative to the user's task beats visual weight, which is a decision designers make on every screen." },
      related: [181, 183, 220]
    },
    {
      n: 183,
      title: "Banner blindness",
      aka: ["Ad blindness"],
      oneLine: "People skip anything that looks like an advertisement, including useful content that happens to look like one.",
      demo: {
        caption: "Same sentence twice. Cover the tags: the left one is classed as an advert before a word of it is read.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Reads as an advert</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-card\" style=\"background:var(--accent-soft);border-radius:14px;text-align:center\"><span class=\"db-note db-note--accent\">Term dates for 2026-27</span></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Reads as content</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-type\"><p style=\"font-size:15px;font-weight:600\">Term dates for 2026-27</p></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div>"
      },
      what: "Benway and Lane coined the term after watching users miss brightly coloured banner links that contained exactly what they had been asked to find. In the pilot study the banners were found about 58 per cent of the time against 94 per cent for control items. That pilot had only six participants, so the size of the effect is weakly established even though the direction has been repeated many times since in eye-tracking work. Their larger follow-up found that plain blue-text banners were skipped about as readily as graphical ones.",
      why: "It reverses the naive rule that bigger and brighter means more noticed. Once something carries the visual signature of advertising, users filter it out before reading it, which means your promotional styling can hide your own message.",
      how: [
        "Style important content like content: same typeface, same column, no isolated coloured box.",
        "Keep functional elements inside the main content column rather than in a right-hand rail.",
        "Avoid banner proportions, rotating carousels and animated borders for anything that matters.",
        "If a message must be prominent, promote it structurally with a heading, not with decoration."
      ],
      example: "A university site putting term dates in an orange rounded box in the right rail, where visitors searching for term dates walk straight past it.",
      numbers: "Benway and Lane (1998), pilot study: banners found about 58 per cent of the time versus 94 per cent for control items, six participants, t(5) = 2.80, p = 0.03. Second experiment: 72 undergraduates, of whom only 20 per cent said afterwards that they recalled seeing any advertisements.",
      pitfall: "Reading it as a rule about colour. It is a rule about resemblance. A restrained grey box in a rail can be skipped just as thoroughly.",
      source: "Jan Panero Benway and David Lane, Banner Blindness: Web Searchers Often Miss Obvious Links, Internetworking (1998); Nielsen Norman Group eye-tracking studies 1997 to 2007",
      verify: { status: "verified", note: "Read the Benway and Lane paper text on 17 August 2026: 58 per cent versus 94 per cent with t(5) = 2.80, p = 0.03, and six participants. The paper calls this its pilot study, not Experiment 1, and this entry has been corrected to match. The second experiment had 72 undergraduates, of whom 20 per cent recalled seeing any adverts. It found no significant advantage for text banners over graphical ones on search time, though the paper notes a possible slight advantage for text banners on later recall. The Nielsen Norman Group article on the original eye-tracking research states the finding qualitatively and gives no percentage, so none is quoted here. Weak evidence base worth flagging: six people founded a term now used as settled fact." },
      belongs: { verdict: "core", why: "It is a direct constraint on how promotional and functional elements may be styled, and it is regularly ignored in commercial work." },
      related: [182, 181, 224]
    },
    {
      n: 184,
      title: "Visual acuity limits",
      aka: ["Resolution limit", "Legibility threshold"],
      oneLine: "There is a fixed floor on the detail an eye can resolve, and it is set by angle.",
      demo: {
        caption: "One angle, two distances. The far block must be three times taller to arrive the same size in the eye.",
        html: "<div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 150\"><path class=\"s-accent\" d=\"M14 70 L310 44\"/><path class=\"s-accent\" d=\"M14 70 L310 96\"/><circle class=\"f\" cx=\"14\" cy=\"70\" r=\"4\"/><rect class=\"f\" x=\"105\" y=\"61.6\" width=\"10\" height=\"16.8\"/><rect class=\"f\" x=\"285\" y=\"44.9\" width=\"30\" height=\"50.2\"/><path class=\"s-mute\" d=\"M110 84 V122\"/><path class=\"s-mute\" d=\"M300 101 V122\"/><text class=\"t\" x=\"96\" y=\"136\">0.5 m</text><text class=\"t\" x=\"286\" y=\"136\">1.5 m</text><text class=\"t\" x=\"26\" y=\"30\">same visual angle</text><text class=\"t\" x=\"4\" y=\"90\">eye</text></svg></div>"
      },
      what: "Standard normal acuity, written 6/6 in metres or 20/20 in feet, means resolving detail about one minute of arc across. What matters for a designer is angular size: the same text is a different perceptual size at a phone's reading distance, a laptop's, and a wall display's. Acuity also varies widely across a real audience with age, correction and eye health, so the standard figure is a best case rather than a design target.",
      why: "It converts a vague argument about small text into arithmetic. A caption that is legible on a designer's monitor at 500 millimetres can be unreadable on a kiosk at three metres, and no amount of taste changes that.",
      how: [
        "Specify type by viewing distance, then convert to pixels for the device, rather than picking a pixel size first.",
        "Set a hard minimum for body text and never let secondary text drop below it.",
        "Support text resizing rather than fixing sizes; WCAG 1.4.4 requires content to work at 200 per cent.",
        "Check the design at the real distance and on the real device before signing anything off."
      ],
      example: "Motorway signage in the UK is sized from a legibility distance calculation rather than from an aesthetic choice, which is why letter heights change with road speed.",
      numbers: "6/6 (20/20) acuity corresponds to resolving roughly one minute of arc. WCAG 2.1 success criterion 1.4.4 requires text to be resizable up to 200 per cent without loss of content or function.",
      pitfall: "Designing tiny legal text because it is legally required rather than functionally read, then discovering that the same size has crept into captions and labels.",
      source: "Standard clinical definition of visual acuity (Snellen); W3C, Web Content Accessibility Guidelines 2.1, SC 1.4.4",
      verify: { status: "verified", note: "The one-arcminute definition is the standard clinical basis of Snellen acuity. WCAG SC 1.4.4 wording checked against the W3C guidelines. I have not quoted a specific minimum pixel size because no standard sets one." },
      belongs: { verdict: "core", why: "Type sizing is a daily design decision and this is the physical constraint that governs it." },
      related: [178, 185]
    },
    {
      n: 185,
      title: "Contrast sensitivity",
      aka: ["Contrast sensitivity function", "CSF"],
      oneLine: "The eye needs more contrast to see very fine or very coarse detail than it does for medium-sized detail.",
      demo: {
        caption: "Every bar is the same grey. The thin ones look paler, which is sensitivity falling away for fine detail.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-row db-row--nowrap\"><span class=\"db-note\" style=\"width:40px\">1 px</span><div class=\"db-bar db-fill\" style=\"height:1px\"></div></div><div class=\"db-row db-row--nowrap\"><span class=\"db-note\" style=\"width:40px\">2 px</span><div class=\"db-bar db-fill\" style=\"height:2px\"></div></div><div class=\"db-row db-row--nowrap\"><span class=\"db-note\" style=\"width:40px\">4 px</span><div class=\"db-bar db-fill\" style=\"height:4px\"></div></div><div class=\"db-row db-row--nowrap\"><span class=\"db-note\" style=\"width:40px\">9 px</span><div class=\"db-bar db-fill\" style=\"height:9px\"></div></div><div class=\"db-row db-row--nowrap\"><span class=\"db-note\" style=\"width:40px\">20 px</span><div class=\"db-bar db-fill\" style=\"height:20px\"></div></div></div></div>"
      },
      what: "Campbell and Robson measured how much contrast a pattern needs before it becomes visible, across a range of pattern sizes. Sensitivity is not flat. It peaks in a middle band of spatial frequencies, around two to five cycles per degree, and falls off at both ends. Thin hairlines, light-weight small type and very low-contrast one-pixel borders sit in the region where the eye needs a lot of contrast, which is exactly where designers tend to economise.",
      why: "It explains why a design that looks refined on a calibrated studio monitor collapses on an older laptop in daylight. Fine strokes and pale greys are the first things to disappear, and they disappear for a much larger share of the audience than designers expect.",
      how: [
        "Meet WCAG 1.4.3 at minimum: 4.5:1 for body text and 3:1 for large text.",
        "Give interface borders and icons at least 3:1 against their background, per WCAG 1.4.11.",
        "Raise contrast as stroke weight drops. A hairline needs more contrast than a bold rule of the same colour.",
        "Review the design at low brightness and on a cheap screen, not only on the best one in the office."
      ],
      example: "Placeholder text set in light grey inside a form field. It usually fails 4.5:1 and it is also the text people most need when they are unsure what to type.",
      numbers: "Contrast sensitivity peaks around two to five cycles per degree. WCAG 2.1 SC 1.4.3 requires 4.5:1 for normal text and 3:1 for large text (18 point, or 14 point bold); SC 1.4.6 raises this to 7:1 and 4.5:1 at AAA; SC 1.4.11 requires 3:1 for user interface components and graphical objects.",
      pitfall: "Treating a passing contrast ratio as the end of the job. The ratio ignores stroke weight and size, so a 4.5:1 hairline can still be invisible.",
      source: "Fergus Campbell and John Robson, Journal of Physiology (1968); W3C, WCAG 2.1",
      verify: { status: "verified", note: "Peak sensitivity of two to five cycles per degree from the NCBI Contrast Sensitivity Function chapter; Campbell and Robson 1968 confirmed as the source paper. WCAG ratios checked against the published success criteria." },
      belongs: { verdict: "core", why: "Contrast is a legal and functional requirement in most commercial work, and the sensitivity curve explains why the ratio alone is not sufficient." },
      related: [184, 189, 186]
    },
    {
      n: 9185,
      title: "Light and dark adaptation",
      aka: ["Luminance adaptation"],
      oneLine: "The eye retunes itself to the prevailing brightness, and the retuning takes time.",
      demo: {
        caption: "The grey lines are identical in both. The white block raises the level the eye adapts to, and they sink.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Quiet field</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 100\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"100\" fill=\"#15171b\"/><rect x=\"12\" y=\"18\" width=\"78\" height=\"6\" fill=\"#6b7280\"/><rect x=\"12\" y=\"32\" width=\"66\" height=\"6\" fill=\"#6b7280\"/><rect x=\"12\" y=\"46\" width=\"78\" height=\"6\" fill=\"#6b7280\"/><rect x=\"12\" y=\"60\" width=\"52\" height=\"6\" fill=\"#6b7280\"/><rect x=\"100\" y=\"18\" width=\"38\" height=\"64\" fill=\"#2a2e35\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One bright element</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 100\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"100\" fill=\"#15171b\"/><rect x=\"12\" y=\"18\" width=\"78\" height=\"6\" fill=\"#6b7280\"/><rect x=\"12\" y=\"32\" width=\"66\" height=\"6\" fill=\"#6b7280\"/><rect x=\"12\" y=\"46\" width=\"78\" height=\"6\" fill=\"#6b7280\"/><rect x=\"12\" y=\"60\" width=\"52\" height=\"6\" fill=\"#6b7280\"/><rect x=\"100\" y=\"18\" width=\"38\" height=\"64\" fill=\"#ffffff\"/></svg></div></div></div>"
      },
      what: "Sensitivity is not fixed. Move from a bright room to a dim one and detail returns gradually as the eye adapts; the reverse is faster but uncomfortable. Adaptation is also local: a bright element in a dark field raises the level the eye is set to, so everything else looks darker than it measures. This is a separate matter from contrast ratio, which is calculated from fixed colour values and takes no account of what the eye is currently adapted to.",
      why: "It is the reason a pure white modal on a dark interface hurts, and why a dark-mode design cannot be produced by inverting a light one. It also explains complaints about glare and halation from users reading at night.",
      how: [
        "In dark themes, avoid pure white text on pure black; use an off-white on a dark grey to cut the adaptation shock.",
        "Do not flash a bright loading screen before a dark interface.",
        "Keep large bright areas out of otherwise dark layouts, or dim them.",
        "Respect the system light or dark preference rather than forcing one."
      ],
      example: "Satellite navigation software that switches to a dark map at dusk, so the screen does not destroy the driver's adaptation to the road.",
      numbers: "",
      pitfall: "Testing dark mode in a bright office. The failures only show up in the conditions people actually use it in.",
      source: "Standard visual psychophysics; no single originating paper",
      verify: { status: "verified", note: "Adaptation is textbook vision science and is the accepted explanation for the dark-mode issues described. I have deliberately given no time figure for full dark adaptation because I did not verify one this session." },
      belongs: { verdict: "core", why: "Dark and light themes are now a standard deliverable, and adaptation is the perception fact that governs how to build them." },
      related: [185, 190, 189]
    },
    {
      n: 186,
      title: "Weber's law (just-noticeable difference)",
      aka: ["Weber-Fechner law", "JND"],
      oneLine: "The smallest difference you can notice is a roughly constant proportion of what you started with.",
      demo: {
        caption: "Both pairs differ by eight pixels. On the left that is a fifth of the bar; on the right, nothing.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">40 px and 48 px</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-bar db-bar--ink db-bar--tall\" style=\"width:40px\"></div><div class=\"db-bar db-bar--ink db-bar--tall\" style=\"width:48px\"></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">200 px and 208 px</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-bar db-bar--ink db-bar--tall\" style=\"width:200px\"></div><div class=\"db-bar db-bar--ink db-bar--tall\" style=\"width:208px\"></div></div></div></div></div>"
      },
      what: "Ernst Heinrich Weber found that the change needed before a difference is noticed scales with the original magnitude. Gustav Fechner formalised it and named it Weber's law in Elemente der Psychophysik. Add ten grams to a hundred-gram weight and you feel it; add ten grams to a kilogram and you do not. The proportion, known as the Weber fraction, varies by sense and by stimulus, and the law breaks down at the extremes of a range.",
      why: "It is the usual justification for building type and spacing scales on ratios rather than fixed increments. A four-pixel step is obvious between 8 and 12 pixels and easy to miss between 96 and 100. Treat the link as an argument by analogy: modular scales come from typographic and musical tradition, and no study establishes that a design system's steps sit at a measured just-noticeable difference.",
      how: [
        "Build type and spacing scales on ratios, not on fixed additions.",
        "When two states must be told apart, change the value by a clear proportion rather than a token amount.",
        "For price and quantity displays, remember that the same absolute saving feels smaller on a larger total.",
        "Check that your smallest step is still visible at the largest value in the scale."
      ],
      example: "A modular type scale where each step is a fixed multiple of the last, so 16 to 20 and 48 to 60 both read as one clear step up.",
      numbers: "Weber fractions are specific to the sense and stimulus and vary between studies, so no single number is given here.",
      pitfall: "Nudging a value by two pixels to fix a hierarchy problem. Below the noticeable difference it changes nothing except the code.",
      source: "Ernst Heinrich Weber (1834); named and formalised by Gustav Fechner, Elemente der Psychophysik (1860)",
      verify: { status: "verified", note: "Attribution to Weber with Fechner's formalisation in Elemente der Psychophysik (1860) is the standard account in psychophysics. No Weber fraction is quoted because the values vary by modality and I did not verify a specific one. Adjusted on 17 August 2026: the entry previously asserted that Weber's law is the reason design systems use ratio scales. That causal claim is not sourced, and the entry now presents it as an analogy." },
      belongs: { verdict: "adjacent", why: "Downgraded from core on 17 August 2026. The law itself is solid psychophysics, but its design use is an unmeasured analogy rather than an application, so it argues for proportional scales without validating any particular one." },
      related: [187, 185, 193]
    },
    {
      n: 187,
      title: "Stevens' power law",
      aka: ["Power law of sensation"],
      oneLine: "Perceived intensity follows a power function of physical intensity, and the exponent differs by sense.",
      demo: {
        caption: "Both pairs are exactly one to two. The bars show it; the circles, doubled in area, do not look doubled.",
        html: "<div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 110\"><rect class=\"f-mute\" x=\"10\" y=\"24\" width=\"56\" height=\"18\"/><rect class=\"f\" x=\"10\" y=\"52\" width=\"112\" height=\"18\"/><text class=\"t\" x=\"10\" y=\"92\">length, doubled</text><path class=\"s-mute\" d=\"M150 12 V84\"/><circle class=\"f-mute\" cx=\"196\" cy=\"46\" r=\"16\"/><circle class=\"f\" cx=\"256\" cy=\"46\" r=\"22.6\"/><text class=\"t\" x=\"176\" y=\"92\">area, doubled</text></svg></div>"
      },
      what: "S. S. Stevens argued that equal stimulus ratios produce equal subjective ratios, giving perceived magnitude as intensity raised to a power. The exponent is what matters. Below one, perception compresses the stimulus, so doubling the physical value feels like less than double. Above one, it expands. Stevens reported an exponent near 1.0 for visual length, around 0.7 for visual area and around 1.45 for heaviness. The method has been criticised for fitting curves to magnitude estimates without testing the underlying assumptions.",
      why: "It tells you which visual channels report quantity honestly. Length and position are close to linear. Area is compressed, so a circle drawn with twice the area does not look twice as big, and readers underestimate the difference.",
      how: [
        "Encode quantity with length or position wherever accuracy matters.",
        "If you must use area, scale by area rather than by radius, and label the values.",
        "Treat colour lightness and saturation as ordinal, not as a measurable quantity.",
        "Never scale an image or icon by width to represent a doubled value."
      ],
      example: "A bubble chart where population is mapped to circle area. Readers consistently read the ratio between two bubbles as smaller than it is.",
      numbers: "Exponents in the standard compilation of Stevens' reported values include roughly 1.0 for visual length, 0.7 for visual area, 1.45 for heaviness and 0.67 for loudness. Brightness exponents vary with viewing conditions.",
      pitfall: "Quoting one exponent as fixed. They shift with range, context and measurement method, which is the core of the criticism of the law.",
      source: "S. S. Stevens, On the Psychophysical Law, Psychological Review 64(3), 153 to 181 (1957)",
      verify: { status: "adjusted", note: "The 1957 Psychological Review citation and page range are confirmed. The exponent figures are the standard compilation of values Stevens reported across his publications rather than a table lifted from the 1957 paper alone, and this entry now says so. The methodological criticism of magnitude estimation is documented in the psychophysics literature." },
      belongs: { verdict: "adjacent", why: "It is psychophysics, but it decides which encodings a chart or dashboard may use for quantity, which is a routine design choice." },
      related: [186, 195, 193]
    },
    {
      n: 188,
      title: "Mach bands",
      aka: ["Border contrast bands"],
      oneLine: "Bright and dark bands appear at the edges of a brightness ramp even though the light itself is smooth.",
      demo: {
        caption: "Each band is one flat grey. The scalloping you see inside them is added by the eye at the joins.",
        html: "<div class=\"db-stage\"><div class=\"db-ramp\" style=\"height:70px\"><span style=\"background:#2b2b2b\"></span><span style=\"background:#414141\"></span><span style=\"background:#575757\"></span><span style=\"background:#6d6d6d\"></span><span style=\"background:#838383\"></span><span style=\"background:#999999\"></span><span style=\"background:#afafaf\"></span><span style=\"background:#c5c5c5\"></span></div></div>"
      },
      what: "Ernst Mach described the effect in the 1860s. Where a gradient meets a flat tone, the eye sees an exaggerated light line on the lighter side and a dark line on the darker side. Neither is in the signal. The usual explanation is lateral inhibition: neighbouring receptors suppress each other, which sharpens edges and overshoots at the transition.",
      why: "It means your gradients will not look as clean as they measure. It also means that adjacent panels of similar tone will appear to have a seam between them that no one drew.",
      how: [
        "Add slight noise or dithering to long, shallow gradients to break up visible banding.",
        "Avoid butting two large flat tones of near-identical lightness together; use a deliberate divider or widen the difference.",
        "Check gradients on a real screen at full size rather than in a small design canvas.",
        "Use more colour stops in a gradient than the maths seems to need."
      ],
      example: "A dark hero section fading into a slightly lighter section below, where a faint horizontal line appears along the join.",
      numbers: "",
      pitfall: "Blaming display banding and adding more colour depth, when the band the client is complaining about is being generated by their own visual system.",
      source: "Ernst Mach (1865), described in standard vision science; explained by lateral inhibition",
      verify: { status: "verified", note: "Mach's 1865 description and the lateral inhibition explanation are standard textbook vision science. I found no reason to doubt the attribution and have not attached any measured threshold to it." },
      belongs: { verdict: "adjacent", why: "It is a perceptual artefact rather than a principle, but it is the specific cause of gradient banding and phantom seams that designers have to fix." },
      related: [189, 185]
    },
    {
      n: 189,
      title: "Simultaneous contrast (perception)",
      aka: ["Simultaneous contrast", "Colour contrast effect", "Contextual colour"],
      oneLine: "A colour changes appearance depending on what surrounds it, without changing at all.",
      demo: {
        caption: "One square, drawn twice at the same value. The ground it sits on is the only thing that changed.",
        html: "<div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 300 132\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"108\" fill=\"#d9d9d9\"/><rect x=\"150\" y=\"0\" width=\"150\" height=\"108\" fill=\"#4f4f4f\"/><rect x=\"52\" y=\"31\" width=\"46\" height=\"46\" fill=\"#8f8f8f\"/><rect x=\"202\" y=\"31\" width=\"46\" height=\"46\" fill=\"#8f8f8f\"/><text class=\"t\" x=\"0\" y=\"126\">both squares are #8f8f8f</text></svg></div>"
      },
      what: "This card covers the perceptual effect itself. Itten's simultaneous contrast at 288 is the same phenomenon turned into a colour teaching device, one of his seven contrasts. Chevreul, who directed the dyeing works at the Gobelins manufactory in Paris, published the law of simultaneous colour contrast in 1839. His point was that a colour's appearance is decided partly by what sits next to it, so a yarn that looks weak may be a perfectly good yarn in bad company. Josef Albers built a teaching method on it more than a century later, showing pairs of samples that look different but are identical, and samples that look identical but are not.",
      why: "It means no colour can be judged in isolation. A grey that looks correct on a white artboard will look dirty on a cream card and cold on a navy one, so component colours must be checked in every context they will appear in.",
      how: [
        "Test every token against every surface it can land on, not against the artboard.",
        "Keep a neutral buffer, such as a white keyline, when two strong colours must sit together.",
        "Judge brand colours in the layout, never on the swatch page.",
        "If a colour must read identically in two contexts, expect to use two slightly different values."
      ],
      example: "Albers' plates in Interaction of Color, where one grey square placed on two different grounds appears as two different greys.",
      numbers: "",
      pitfall: "Approving a palette from a swatch sheet. The relationships between the colours in use are what people will see, not the swatches.",
      source: "Michel Eugene Chevreul, De la loi du contraste simultane des couleurs (Paris, 1839); Josef Albers, Interaction of Color (1963)",
      verify: { status: "verified", note: "Chevreul's title, publisher and 1839 date confirmed in the reference list of Hirschler and Schwarz, Itten's seven colour contrasts, Journal of the International Colour Association (2023), which also records his work as the best known on simultaneous contrast. Albers' Interaction of Color (1963) is the standard teaching source. I did not verify a primary source for the often-repeated anecdote about complaints at the Gobelins, so it is not stated as fact here." },
      belongs: { verdict: "core", why: "It governs how any palette must be specified and reviewed, and it is the reason colour work has to happen in situ." },
      related: [190, 191, 192, 288]
    },
    {
      n: 190,
      title: "Successive contrast (after-image)",
      aka: ["Negative after-image", "Chromatic adaptation"],
      oneLine: "Stare at a colour, look away, and you briefly see its opposite laid over whatever comes next.",
      demo: {
        caption: "Hold your eyes on the white dot, then move to the grey field; a green after-image floats over it.",
        html: "<div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 300 132\"><rect x=\"0\" y=\"0\" width=\"140\" height=\"108\" fill=\"#e12d2d\"/><circle cx=\"70\" cy=\"54\" r=\"4\" fill=\"#ffffff\"/><rect x=\"160\" y=\"0\" width=\"140\" height=\"108\" fill=\"#efefef\"/><circle cx=\"230\" cy=\"54\" r=\"4\" fill=\"#9a9a9a\"/><rect class=\"s-mute\" x=\"160\" y=\"0\" width=\"140\" height=\"108\"/><text class=\"t\" x=\"0\" y=\"126\">stare here for 20 seconds</text><text class=\"t\" x=\"160\" y=\"126\">then look here</text></svg></div>"
      },
      what: "Where simultaneous contrast works across space, successive contrast works across time. Prolonged exposure to a colour fatigues the corresponding response, so the next surface is seen with a bias towards the opposite. The usual account is opponent processing, in which colour is coded as red against green and blue against yellow, a model set out by Ewald Hering in the nineteenth century.",
      why: "It matters wherever people stare at one strong colour and then move to another screen or page. Sequences of screens, presentations and long-form scroll pages all carry a colour hangover from the section before.",
      how: [
        "Do not judge a neutral immediately after looking at a saturated colour; look at white first.",
        "Avoid full-screen saturated splash or loading states before a colour-critical view.",
        "In presentations, keep saturated slides short if the next slide contains colour-matched product imagery.",
        "Give colour approval sessions breaks, and use a neutral surround."
      ],
      example: "A brand launch deck with several full-bleed saturated red slides followed by a photograph of the product, which briefly reads as green-tinged.",
      numbers: "",
      pitfall: "Chasing a colour correction that only exists in the reviewer's eyes because of what they looked at thirty seconds earlier.",
      source: "Ewald Hering, opponent process theory (1878); standard colour science",
      verify: { status: "verified", note: "Opponent-process theory and its attribution to Hering are standard colour science, and are the accepted explanation for negative after-images. No timing figures are given because I did not verify any." },
      belongs: { verdict: "adjacent", why: "It is a physiological effect rather than a design rule, but it changes how colour reviews and screen sequences should be run." },
      related: [189, 191, 9185]
    },
    {
      n: 191,
      title: "Colour constancy",
      aka: ["Chromatic constancy", "Retinex"],
      oneLine: "A surface keeps its apparent colour across very different lighting, because the eye discounts the illuminant.",
      demo: {
        caption: "Both boards read as lit differently, not painted differently. Below, their two white patches sit side by side.",
        html: "<div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 158\"><rect x=\"8\" y=\"8\" width=\"46\" height=\"44\" fill=\"#efefef\"/><rect x=\"54\" y=\"8\" width=\"46\" height=\"44\" fill=\"#c0503f\"/><rect x=\"100\" y=\"8\" width=\"48\" height=\"44\" fill=\"#3f5f9a\"/><rect x=\"8\" y=\"52\" width=\"46\" height=\"44\" fill=\"#4f8f5f\"/><rect x=\"54\" y=\"52\" width=\"46\" height=\"44\" fill=\"#d9c04f\"/><rect x=\"100\" y=\"52\" width=\"48\" height=\"44\" fill=\"#8a8a8a\"/><rect x=\"172\" y=\"8\" width=\"46\" height=\"44\" fill=\"#efc483\"/><rect x=\"218\" y=\"8\" width=\"46\" height=\"44\" fill=\"#c04223\"/><rect x=\"264\" y=\"8\" width=\"48\" height=\"44\" fill=\"#3f4e55\"/><rect x=\"172\" y=\"52\" width=\"46\" height=\"44\" fill=\"#4f7534\"/><rect x=\"218\" y=\"52\" width=\"46\" height=\"44\" fill=\"#d99d2b\"/><rect x=\"264\" y=\"52\" width=\"48\" height=\"44\" fill=\"#8a714c\"/><rect class=\"s-mute\" x=\"8\" y=\"8\" width=\"140\" height=\"88\"/><rect class=\"s-mute\" x=\"172\" y=\"8\" width=\"140\" height=\"88\"/><text class=\"t\" x=\"8\" y=\"108\">neutral light</text><text class=\"t\" x=\"172\" y=\"108\">warm light</text><rect x=\"8\" y=\"118\" width=\"54\" height=\"30\" fill=\"#efefef\"/><rect class=\"s-mute\" x=\"8\" y=\"118\" width=\"54\" height=\"30\"/><rect x=\"66\" y=\"118\" width=\"54\" height=\"30\" fill=\"#efc483\"/><rect class=\"s-mute\" x=\"66\" y=\"118\" width=\"54\" height=\"30\"/><text class=\"t\" x=\"128\" y=\"136\">both whites, out of context</text></svg></div>"
      },
      what: "A white shirt looks white in daylight, under a tungsten bulb and in shade, even though the light reaching the eye differs enormously in each case. Edwin Land coined the term retinex and demonstrated the effect with his colour Mondrian displays, in which patches keep their apparent colour while the illumination is changed to make their physical output match. Constancy is good but not perfect, and it breaks down under narrow-band lighting.",
      why: "Perceived colour is computed from relationships within a scene, not read off absolute values. That is why a brand colour that is right on screen can look wrong in print, and why the surrounding page can pull a photograph's colour balance around.",
      how: [
        "Specify brand colours per medium and per substrate rather than assuming one value transfers.",
        "Keep a consistent neutral around photography so the eye has a stable reference to discount against.",
        "Do not fix a photo's colour cast in isolation; fix it in the page it will sit in.",
        "For colour-critical work such as product photography, control the viewing conditions in the brief."
      ],
      example: "Land's colour Mondrian demonstration, where patches of a painted board hold their apparent colours as the three illuminating lights are changed.",
      numbers: "",
      pitfall: "Assuming a hex value guarantees a perceived colour. The surround, the display and the ambient light all move it.",
      source: "Edwin Land, retinex theory (term coined 1964; colour Mondrian demonstrations published 1977)",
      verify: { status: "verified", note: "Land coined retinex in 1964 and published the Mondrian work in Scientific American in 1977, per the Journal of Electronic Imaging review Retinex at 50 (McCann, 2017) and the Harvard science demonstrations record of the experiment." },
      belongs: { verdict: "core", why: "Brand colour is delivered across screens, print and environments, and constancy is why the same specification produces different results." },
      related: [192, 189, 9191]
    },
    {
      n: 9191,
      title: "Colour vision deficiency",
      aka: ["Colour blindness", "CVD"],
      oneLine: "A significant minority cannot separate certain hues, most often reds from greens.",
      demo: {
        caption: "Strip the colour from each row. On the left the three states become one; on the right they still read.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Hue only</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 100\"><text class=\"t\" x=\"2\" y=\"30\">in colour</text><circle cx=\"72\" cy=\"26\" r=\"12\" fill=\"#d13b2e\"/><circle cx=\"116\" cy=\"26\" r=\"12\" fill=\"#dd9b2a\"/><circle cx=\"160\" cy=\"26\" r=\"12\" fill=\"#2e9e4f\"/><text class=\"t\" x=\"2\" y=\"74\">in grey</text><circle class=\"f-mute\" cx=\"72\" cy=\"70\" r=\"12\"/><circle class=\"f-mute\" cx=\"116\" cy=\"70\" r=\"12\"/><circle class=\"f-mute\" cx=\"160\" cy=\"70\" r=\"12\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Hue plus shape</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 100\"><text class=\"t\" x=\"2\" y=\"30\">in colour</text><path d=\"M64 18 L80 34 M80 18 L64 34\" stroke=\"#d13b2e\" stroke-width=\"4\" fill=\"none\"/><path d=\"M107 26 H125\" stroke=\"#dd9b2a\" stroke-width=\"4\" fill=\"none\"/><path d=\"M152 27 L157 33 L169 19\" stroke=\"#2e9e4f\" stroke-width=\"4\" fill=\"none\"/><text class=\"t\" x=\"2\" y=\"74\">in grey</text><path class=\"s-mute\" style=\"stroke-width:4\" d=\"M64 62 L80 78 M80 62 L64 78\"/><path class=\"s-mute\" style=\"stroke-width:4\" d=\"M107 70 H125\"/><path class=\"s-mute\" style=\"stroke-width:4\" d=\"M152 71 L157 77 L169 63\"/></svg></div></div></div>"
      },
      what: "Inherited red-green deficiency is carried on the X chromosome, which is why it is far more common in men. In populations of Northern European ancestry the usual estimate is around 8 per cent of men and about 0.5 per cent of women. Deuteranomaly, a weakened green response, is the most common form. Blue-yellow deficiency and complete absence of colour vision are much rarer.",
      why: "Any status system that relies on red against green excludes roughly one man in twelve. This is not an edge case, and in a business audience it is a large number of people.",
      how: [
        "Never carry meaning in hue alone; pair colour with an icon, a label, a pattern or a position.",
        "Choose palettes that also separate by lightness, so they survive being seen in greyscale.",
        "Simulate deuteranopia and protanopia during design review, not after build.",
        "For charts, use direct labels rather than a colour-keyed legend."
      ],
      example: "A traffic-light project status column where red and green squares are the only signal. Converting it to red cross, amber dash and green tick fixes it without changing the palette.",
      numbers: "Red-green colour vision deficiency affects roughly 8 per cent of males and 0.5 per cent of females of Northern European ancestry. WCAG 2.1 SC 1.4.1 (Use of Colour) requires that colour is not the only visual means of conveying information.",
      pitfall: "Adjusting the specific red and green until they pass a contrast check against the background. Contrast against the page does not make two hues distinguishable from each other.",
      source: "Prevalence per Colour Blind Awareness and the 2025 review A Global Perspective of Color Vision Deficiency (Healthcare); requirement per W3C WCAG 2.1 SC 1.4.1",
      verify: { status: "verified", note: "The 8 per cent and 0.5 per cent figures for Northern European populations are given in the 2025 Healthcare review (PMC12385717) and match the Colour Blind Awareness figures of 1 in 12 men and 1 in 200 women. WCAG 1.4.1 wording checked against the published criterion." },
      belongs: { verdict: "core", why: "It is a hard constraint on every palette and status system, and it is absent from the master list, which is a genuine gap in a perception section." },
      related: [191, 189, 185]
    },
    {
      n: 192,
      title: "Lightness constancy",
      aka: ["Brightness constancy"],
      oneLine: "A surface keeps its apparent shade across changes in illumination, because the eye infers the lighting.",
      demo: {
        caption: "Squares A and B are drawn at the same value. B is read as being in shade, so it looks lighter.",
        html: "<div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 224 160\"><rect x=\"10\" y=\"12\" width=\"34\" height=\"34\" fill=\"#ababab\"/><rect x=\"44\" y=\"12\" width=\"34\" height=\"34\" fill=\"#767676\"/><rect x=\"78\" y=\"12\" width=\"34\" height=\"34\" fill=\"#ababab\"/><rect x=\"112\" y=\"12\" width=\"34\" height=\"34\" fill=\"#767676\"/><rect x=\"146\" y=\"12\" width=\"34\" height=\"34\" fill=\"#ababab\"/><rect x=\"180\" y=\"12\" width=\"34\" height=\"34\" fill=\"#767676\"/><rect x=\"10\" y=\"46\" width=\"34\" height=\"34\" fill=\"#767676\"/><rect x=\"44\" y=\"46\" width=\"34\" height=\"34\" fill=\"#ababab\"/><rect x=\"78\" y=\"46\" width=\"34\" height=\"34\" fill=\"#767676\"/><rect x=\"112\" y=\"46\" width=\"34\" height=\"34\" fill=\"#ababab\"/><rect x=\"146\" y=\"46\" width=\"34\" height=\"34\" fill=\"#767676\"/><rect x=\"180\" y=\"46\" width=\"34\" height=\"34\" fill=\"#ababab\"/><rect x=\"10\" y=\"80\" width=\"34\" height=\"34\" fill=\"#ababab\"/><rect x=\"44\" y=\"80\" width=\"34\" height=\"34\" fill=\"#767676\"/><rect x=\"78\" y=\"80\" width=\"34\" height=\"34\" fill=\"#ababab\"/><rect x=\"112\" y=\"80\" width=\"34\" height=\"34\" fill=\"#767676\"/><rect x=\"146\" y=\"80\" width=\"34\" height=\"34\" fill=\"#ababab\"/><rect x=\"180\" y=\"80\" width=\"34\" height=\"34\" fill=\"#767676\"/><rect x=\"10\" y=\"114\" width=\"34\" height=\"34\" fill=\"#767676\"/><rect x=\"44\" y=\"114\" width=\"34\" height=\"34\" fill=\"#ababab\"/><rect x=\"78\" y=\"114\" width=\"34\" height=\"34\" fill=\"#767676\"/><rect x=\"112\" y=\"114\" width=\"34\" height=\"34\" fill=\"#ababab\"/><rect x=\"146\" y=\"114\" width=\"34\" height=\"34\" fill=\"#767676\"/><rect x=\"180\" y=\"114\" width=\"34\" height=\"34\" fill=\"#ababab\"/><polygon points=\"168,74 214,82 214,148 40,148\" fill=\"#000000\" fill-opacity=\"0.31\"/><rect x=\"168\" y=\"14\" width=\"46\" height=\"62\" fill=\"#6f8f7a\"/><ellipse cx=\"191\" cy=\"76\" rx=\"23\" ry=\"8\" fill=\"#6f8f7a\"/><ellipse cx=\"191\" cy=\"14\" rx=\"23\" ry=\"8\" fill=\"#86a692\"/><text class=\"t\" style=\"fill:#ffffff\" x=\"129\" y=\"34\" text-anchor=\"middle\">A</text><text class=\"t\" style=\"fill:#ffffff\" x=\"129\" y=\"136\" text-anchor=\"middle\">B</text></svg></div>"
      },
      what: "Coal in sunlight reflects more light than paper in shadow, yet the coal still looks black and the paper still looks white. The visual system separates how much light is arriving from how reflective the surface is, and reports the second. Edward Adelson's checker-shadow figure makes the point sharply: two squares of identical printed value look plainly different because one is read as being in shadow.",
      why: "It means a person cannot reliably judge a tone in isolation, and it means shadows and overlays change how the same fill is read. Scrims, dimmed backgrounds and elevation shadows all shift perceived lightness without changing a value.",
      how: [
        "When you dim a background behind a modal, re-check the foreground tones against the new context.",
        "Do not rely on subtle tonal steps to distinguish surfaces that sit under different shadows.",
        "Keep the implied lighting of an interface consistent, so tonal steps mean the same thing everywhere.",
        "Verify tonal hierarchy in a greyscale export."
      ],
      example: "Adelson's checkershadow illusion, where squares A and B print at the same value and look nothing alike.",
      numbers: "",
      pitfall: "Building a surface hierarchy from very small lightness steps, which then collapse or invert once shadows and overlays are applied.",
      source: "Standard lightness perception research; Edward Adelson, checkershadow illusion (1995)",
      verify: { status: "verified", note: "Constancy and the checkershadow demonstration are standard and widely documented; Adelson published the figure in 1995 and hosts it at MIT. I have not attached measurements to it." },
      belongs: { verdict: "adjacent", why: "It overlaps simultaneous contrast, but it names the specific problem of surfaces and scrims changing perceived tone in layered interfaces." },
      related: [189, 191, 198]
    },
    {
      n: 193,
      title: "Size constancy",
      aka: ["Perceived size", "Emmert's law"],
      oneLine: "An object looks the same size as it recedes, because the eye corrects retinal size using perceived distance.",
      demo: {
        caption: "Both bars are the same length. Add converging rails and the upper one reads as further off, so it looks longer.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">No depth cues</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 140 124\"><rect class=\"f\" x=\"53\" y=\"28\" width=\"34\" height=\"7\"/><rect class=\"f\" x=\"53\" y=\"88\" width=\"34\" height=\"7\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Converging cues</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 140 124\"><path class=\"s-mute\" d=\"M14 118 L58 16\"/><path class=\"s-mute\" d=\"M126 118 L82 16\"/><rect class=\"f\" x=\"53\" y=\"28\" width=\"34\" height=\"7\"/><rect class=\"f\" x=\"53\" y=\"88\" width=\"34\" height=\"7\"/></svg></div></div></div>"
      },
      what: "A person walking away halves their retinal image every time the distance doubles, yet does not appear to shrink. Holway and Boring showed in 1941 that the correction depends on the depth information available: strip out the cues and judgements collapse towards raw retinal size. Emmert's law states the same relationship for after-images, which appear larger when projected onto a more distant surface.",
      why: "Perceived size is a judgement about distance, not a measurement. Put an element over a photograph with strong perspective and it will read as a different size than it does over a flat ground, without any change to its dimensions.",
      how: [
        "Be careful placing UI over perspective imagery; the background can inflate or shrink apparent size.",
        "Keep depth cues consistent within a component so its parts do not read at different scales.",
        "Do not rely on size alone to signal importance when the background carries perspective.",
        "When comparing two things, present them on the same ground plane."
      ],
      example: "The Ames room, where two people of similar height appear wildly different because the room's false perspective supplies wrong distance information.",
      numbers: "",
      pitfall: "Judging the size of a logo on a perspective mock-up. The lock-up will need re-checking flat.",
      source: "A. H. Holway and Edwin Boring, Determinants of apparent visual size with distance variant, American Journal of Psychology (1941); Emmert's law (1881)",
      verify: { status: "verified", note: "Holway and Boring 1941 is the standard cited experiment for size constancy and cue reduction, and Emmert's law is the standard after-image formulation. Both are textbook attributions I found no reason to doubt; no figures are quoted." },
      belongs: { verdict: "adjacent", why: "It is perception research, but it explains a specific practical failure: elements judged over perspective backgrounds and mock-ups." },
      related: [195, 194, 187]
    },
    {
      n: 194,
      title: "Depth cue: occlusion",
      aka: ["Interposition", "Overlap"],
      oneLine: "If one shape hides part of another, the hidden one is behind, and this cue beats all the others.",
      demo: {
        caption: "Only the right set overlaps. Where one card interrupts another's outline, the stacking order becomes certain.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Gaps: no order</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 110\"><rect class=\"s\" style=\"fill:var(--paper)\" x=\"9\" y=\"28\" width=\"44\" height=\"54\"/><rect class=\"s\" style=\"fill:var(--paper)\" x=\"58\" y=\"28\" width=\"44\" height=\"54\"/><rect class=\"s\" style=\"fill:var(--paper)\" x=\"107\" y=\"28\" width=\"44\" height=\"54\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Overlap: order is certain</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 110\"><rect class=\"s\" style=\"fill:var(--paper)\" x=\"14\" y=\"14\" width=\"44\" height=\"54\"/><rect class=\"s\" style=\"fill:var(--paper)\" x=\"44\" y=\"31\" width=\"44\" height=\"54\"/><rect class=\"s\" style=\"fill:var(--paper)\" x=\"74\" y=\"48\" width=\"44\" height=\"54\"/></svg></div></div></div>"
      },
      what: "Occlusion is the most reliable depth cue there is. It works at any distance, needs no lighting and no perspective, and cannot be contradicted without the scene looking broken. Its limitation is that it only gives order, not amount: it tells you A is in front of B, and nothing about how far in front.",
      why: "It is the foundation of layered interfaces. Modals, dropdowns, sheets, tooltips and stacked cards all rely on partial overlap to say which layer is live. Get the overlap right and no other depth treatment is strictly needed.",
      how: [
        "Let an overlay genuinely cover the content behind it, rather than sitting in a gap.",
        "Keep z-order consistent with the interaction model: whatever is active is on top.",
        "Use a small deliberate overlap when stacking cards, so the order is unambiguous.",
        "Do not let a shadow imply one order while the overlap implies another."
      ],
      example: "A dropdown menu that overlaps the header beneath it, so its position in the stack is unambiguous.",
      numbers: "",
      pitfall: "Full-screen overlays that hide the context completely, which removes the occlusion cue and leaves the user unsure whether they are in a layer or on a new page.",
      source: "Standard depth cue taxonomy; James J. Gibson, The Perception of the Visual World (1950)",
      verify: { status: "verified", note: "Occlusion as the ordinal, dominant depth cue is standard vision science and appears in Gibson's account of the visual world; no measurements are attached." },
      belongs: { verdict: "core", why: "Layering is the primary spatial model of modern interfaces, and occlusion is what makes a layer read as a layer." },
      related: [195, 198, 197]
    },
    {
      n: 195,
      title: "Depth cue: relative size",
      aka: ["Familiar size"],
      oneLine: "Of two objects known to be similar, the smaller one is read as further away.",
      demo: {
        caption: "Four discs on one ground line. Stepping the size down on the right is enough to read the row as receding.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Same size</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 100\"><path class=\"s-mute\" d=\"M6 80 H164\"/><circle class=\"f\" cx=\"26\" cy=\"67\" r=\"13\"/><circle class=\"f\" cx=\"64\" cy=\"67\" r=\"13\"/><circle class=\"f\" cx=\"102\" cy=\"67\" r=\"13\"/><circle class=\"f\" cx=\"140\" cy=\"67\" r=\"13\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Stepped size</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 100\"><path class=\"s-mute\" d=\"M6 80 H164\"/><circle class=\"f\" cx=\"26\" cy=\"63\" r=\"17\"/><circle class=\"f\" cx=\"64\" cy=\"67.5\" r=\"12.5\"/><circle class=\"f\" cx=\"102\" cy=\"71\" r=\"9\"/><circle class=\"f\" cx=\"140\" cy=\"73.5\" r=\"6.5\"/></svg></div></div></div>"
      },
      what: "Two cues work together here. Relative size compares objects in the scene, and familiar size uses what you already know about how big a thing should be. A car drawn small next to a large car is read as distant rather than as a toy, because prior knowledge supplies the real dimensions. Remove familiarity and the cue weakens sharply.",
      why: "Scale is read as distance and as importance at the same time. A designer setting a size hierarchy is also, whether they intend it or not, setting an implied depth order.",
      how: [
        "Use size steps that are clearly different, so the order is unambiguous rather than merely measurable.",
        "Keep the size of a repeated element constant across a set unless you mean to imply distance or rank.",
        "Combine relative size with overlap when the depth reading has to be certain.",
        "Watch for accidental depth: a small logo beside a large one can read as receding rather than as secondary."
      ],
      example: "Illustration systems that draw background figures smaller and lower in contrast so they sit behind the main subject without any perspective grid.",
      numbers: "",
      pitfall: "Shrinking a partner logo to fix a crowded lock-up and accidentally implying it is at a distance, and therefore less real.",
      source: "Standard depth cue taxonomy; James J. Gibson, The Perception of the Visual World (1950)",
      verify: { status: "verified", note: "Relative and familiar size are standard pictorial depth cues in the vision literature; no measured figures are given." },
      belongs: { verdict: "core", why: "Size hierarchy is one of the few tools every designer uses on every layout, and this is what it says spatially." },
      related: [194, 193, 196]
    },
    {
      n: 196,
      title: "Depth cue: texture gradient",
      aka: ["Density gradient"],
      oneLine: "A repeating texture packs tighter as it recedes, and that packing alone reads as distance.",
      demo: {
        caption: "Same marks in both. Packing them tighter and smaller towards the top turns a flat pattern into a floor.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Even density</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 112\"><path class=\"s-mute\" style=\"stroke-width:3.4;stroke-linecap:round;stroke-dasharray:0.1 22\" d=\"M12 18 H158\"/><path class=\"s-mute\" style=\"stroke-width:3.4;stroke-linecap:round;stroke-dasharray:0.1 22\" d=\"M12 34 H158\"/><path class=\"s-mute\" style=\"stroke-width:3.4;stroke-linecap:round;stroke-dasharray:0.1 22\" d=\"M12 50 H158\"/><path class=\"s-mute\" style=\"stroke-width:3.4;stroke-linecap:round;stroke-dasharray:0.1 22\" d=\"M12 66 H158\"/><path class=\"s-mute\" style=\"stroke-width:3.4;stroke-linecap:round;stroke-dasharray:0.1 22\" d=\"M12 82 H158\"/><path class=\"s-mute\" style=\"stroke-width:3.4;stroke-linecap:round;stroke-dasharray:0.1 22\" d=\"M12 98 H158\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Density gradient</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 112\"><path class=\"s-mute\" style=\"stroke-width:1;stroke-linecap:round;stroke-dasharray:0.1 5.5\" d=\"M12 37 H158\"/><path class=\"s-mute\" style=\"stroke-width:1.3;stroke-linecap:round;stroke-dasharray:0.1 7\" d=\"M12 40 H158\"/><path class=\"s-mute\" style=\"stroke-width:1.6;stroke-linecap:round;stroke-dasharray:0.1 8.5\" d=\"M12 44 H158\"/><path class=\"s-mute\" style=\"stroke-width:2;stroke-linecap:round;stroke-dasharray:0.1 11\" d=\"M12 49.5 H158\"/><path class=\"s-mute\" style=\"stroke-width:2.5;stroke-linecap:round;stroke-dasharray:0.1 13.5\" d=\"M12 57 H158\"/><path class=\"s-mute\" style=\"stroke-width:3.2;stroke-linecap:round;stroke-dasharray:0.1 17\" d=\"M12 67.5 H158\"/><path class=\"s-mute\" style=\"stroke-width:4;stroke-linecap:round;stroke-dasharray:0.1 21\" d=\"M12 82 H158\"/><path class=\"s-mute\" style=\"stroke-width:5;stroke-linecap:round;stroke-dasharray:0.1 26\" d=\"M12 102 H158\"/></svg></div></div></div>"
      },
      what: "Gibson made texture gradients central to his account of perception, arguing that the ground surface and its texture give the visual system the information it needs about layout, without needing to reconstruct a scene from scratch. Cobbles, tiles, grass and grain all compress as they go away from the viewer, and that compression is read directly as depth.",
      why: "For a designer working in two dimensions, it is a way of creating a ground plane without drawing a perspective grid. It also warns you that any repeating background pattern with varying density will be read as a receding surface whether or not that is wanted.",
      how: [
        "Keep decorative repeating patterns even in density unless you intend a depth reading.",
        "Use a graded texture when you want an illustration to sit on a floor rather than float.",
        "Check that a patterned background does not fight the reading order by implying its own depth.",
        "Keep pattern scale consistent across breakpoints, or the implied depth changes with the viewport."
      ],
      example: "A cobbled street photograph used as a hero image, where the stones compress towards the horizon and give the whole frame a floor.",
      numbers: "",
      pitfall: "Scaling a background pattern responsively so that it compresses on small screens and unintentionally tilts the whole layout into a perspective reading.",
      source: "James J. Gibson, The Perception of the Visual World (1950)",
      verify: { status: "verified", note: "Texture gradient as a depth cue and Gibson's 1950 book as its source are standard in perception textbooks; nothing numeric is claimed." },
      belongs: { verdict: "adjacent", why: "It is mostly relevant to illustration, photography and environmental graphics rather than to screen layout, but in those it is a working tool." },
      related: [195, 197, 194]
    },
    {
      n: 197,
      title: "Depth cue: aerial perspective",
      aka: ["Atmospheric perspective"],
      oneLine: "Distant things look hazier, paler and bluer, because air scatters the light between them and you.",
      demo: {
        caption: "Identical ridges. On the right only the contrast falls away, and the far ridge sits back without changing size.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Equal contrast</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 96\"><path style=\"fill:color-mix(in srgb, var(--ink) 68%, var(--paper-raised));stroke:var(--paper-raised);stroke-width:1.4\" d=\"M-6 88 L46 22 L100 88 Z\"/><path style=\"fill:color-mix(in srgb, var(--ink) 68%, var(--paper-raised));stroke:var(--paper-raised);stroke-width:1.4\" d=\"M44 88 L108 42 L176 88 Z\"/><path style=\"fill:color-mix(in srgb, var(--ink) 68%, var(--paper-raised));stroke:var(--paper-raised);stroke-width:1.4\" d=\"M-6 88 L44 56 L96 88 Z\"/><path class=\"s-mute\" d=\"M-6 88 H176\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Contrast drops with distance</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 96\"><path style=\"fill:color-mix(in srgb, var(--ink) 18%, var(--paper-raised));stroke:var(--paper-raised);stroke-width:1.4\" d=\"M-6 88 L46 22 L100 88 Z\"/><path style=\"fill:color-mix(in srgb, var(--ink) 42%, var(--paper-raised));stroke:var(--paper-raised);stroke-width:1.4\" d=\"M44 88 L108 42 L176 88 Z\"/><path style=\"fill:color-mix(in srgb, var(--ink) 84%, var(--paper-raised));stroke:var(--paper-raised);stroke-width:1.4\" d=\"M-6 88 L44 56 L96 88 Z\"/><path class=\"s-mute\" d=\"M-6 88 H176\"/></svg></div></div></div>"
      },
      what: "Over distance, the atmosphere reduces contrast, lifts the darkest tones and shifts colour towards blue. Painters have used it deliberately since the Renaissance. It is a graded cue rather than an ordinal one: the more the contrast drops, the further away something reads.",
      why: "It gives a designer a way to push things back that does not need overlap or perspective. Blurring, desaturating and lifting the blacks of a background is the digital version of the same trick, and it works because it copies a real optical effect.",
      how: [
        "Push background elements back by reducing contrast rather than only reducing size.",
        "When a modal opens, dim and desaturate the layer behind rather than just darkening it.",
        "Keep foreground contrast high so the depth ordering stays consistent.",
        "Use blur sparingly; heavy background blur can read as a rendering fault on low-end devices."
      ],
      example: "A modal that blurs and desaturates the page behind it as well as dimming it. The background reads as further away rather than merely darker.",
      numbers: "",
      pitfall: "Dimming the background so hard that the user loses their place in the page, which removes the context the layer was supposed to preserve.",
      source: "Standard depth cue taxonomy; long-established practice in landscape painting",
      verify: { status: "verified", note: "Aerial perspective is a standard pictorial depth cue in perception texts and in painting practice. Corrected on 17 August 2026: an earlier draft named the iOS sheet and described its background as blurred and desaturated, which I could not confirm from Apple's own documentation. The example is now stated generically as a technique." },
      belongs: { verdict: "core", why: "Contrast reduction is the main way flat interfaces express depth, and this is the perceptual reason it works." },
      related: [194, 198, 192]
    },
    {
      n: 198,
      title: "Depth cue: shading and cast shadow",
      aka: ["Shape from shading", "Elevation"],
      oneLine: "Shading tells you the form of a surface; a cast shadow tells you how far it sits above another one.",
      demo: {
        caption: "Shading gives the left disc a surface. The right squares are identical: only the displaced shadow lifts one off the floor.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Shading: form</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 160 84\"><defs><linearGradient id=\"db198sphere\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#d7d3ca\"/><stop offset=\"1\" stop-color=\"#4e4b46\"/></linearGradient></defs><rect x=\"0\" y=\"0\" width=\"160\" height=\"84\" fill=\"#9c9890\"/><circle cx=\"44\" cy=\"42\" r=\"22\" fill=\"#7f7b75\"/><circle cx=\"116\" cy=\"42\" r=\"22\" fill=\"url(#db198sphere)\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Shadow: height</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 160 84\"><rect x=\"0\" y=\"0\" width=\"160\" height=\"84\" fill=\"#c9c5bc\"/><ellipse cx=\"37\" cy=\"54\" rx=\"16\" ry=\"4\" fill=\"#000000\" fill-opacity=\"0.34\"/><rect x=\"22\" y=\"22\" width=\"26\" height=\"26\" fill=\"#6f6c66\"/><ellipse cx=\"126\" cy=\"70\" rx=\"22\" ry=\"5.5\" fill=\"#000000\" fill-opacity=\"0.2\"/><rect x=\"100\" y=\"22\" width=\"26\" height=\"26\" fill=\"#6f6c66\"/></svg></div></div></div>"
      },
      what: "Two different cues share one heading. Attached shading, the gradient across an object's own surface, reports curvature and orientation. A cast shadow, thrown onto another surface, reports separation: a bigger, softer, further-offset shadow reads as greater height. Both depend on an assumed light source, and both go wrong when the assumption is broken.",
      why: "It is the whole basis of elevation systems in interface design. If shadows are consistent, users can read the stacking order of an interface without thinking about it. If they are inconsistent, the layers stop making sense and the shadows become decoration.",
      how: [
        "Define one light source for the whole system and derive every shadow from it.",
        "Tie shadow size and blur to a defined elevation scale rather than picking per component.",
        "Use attached shading for the shape of a control and a cast shadow for its height.",
        "Keep shadows subtle enough to survive both light and dark themes, and re-tune rather than reuse."
      ],
      example: "Material Design's elevation levels, where each level has a defined shadow so a dialog visibly sits higher than a card, which sits higher than the page.",
      numbers: "",
      pitfall: "Copying a shadow value from a component library into a dark theme. On dark surfaces the same shadow disappears and the elevation cue is lost.",
      source: "Standard shape-from-shading research including V. S. Ramachandran, Nature (1988); applied in Material Design elevation",
      verify: { status: "verified", note: "The attached shading versus cast shadow distinction is standard perception material, and Ramachandran's 1988 Nature paper on shape from shading is confirmed by its PubMed record. Material Design's use of elevation levels is publicly documented." },
      belongs: { verdict: "core", why: "Elevation and shadow are defined in nearly every design system, and this is the perception behind getting them consistent." },
      related: [201, 194, 197]
    },
    {
      n: 199,
      title: "Depth cue: motion parallax",
      aka: ["Movement parallax"],
      oneLine: "When you move, near things sweep across your view faster than far things, which gives depth.",
      demo: {
        caption: "One movement, three distances. The near disc sweeps across; the far one barely shifts. Figures give the relative travel.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-row db-row--nowrap\"><span class=\"db-note\">1.0</span><span class=\"db-dot db-dot--lg db-anim db-anim--slide db-anim--linear\"></span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-note\">0.5</span><span class=\"db-dot db-dot--lg db-anim db-anim--slide db-anim--linear\" style=\"scale:0.5;transform-origin:left center\"></span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-note\">0.2</span><span class=\"db-dot db-dot--lg db-anim db-anim--slide db-anim--linear\" style=\"scale:0.2;transform-origin:left center\"></span></div></div></div>"
      },
      what: "Motion parallax is depth from relative movement. It needs either the viewer or the scene to move, and it produces a strong sense of layout even with one eye closed. Parallax scrolling copies it: background layers are moved a smaller distance than foreground layers as the page scrolls, and the difference reads as depth.",
      why: "Used lightly it makes a page feel spatial rather than pasted together. Used heavily it causes discomfort, because it puts a strong motion signal into a view the body knows is not moving.",
      how: [
        "Keep parallax differentials small; large offsets tip quickly from depth into disorientation.",
        "Honour the prefers-reduced-motion setting and turn parallax off when it is set.",
        "Never attach parallax to text the user has to read.",
        "Test on a low-end device; janky parallax reads as breakage, not depth."
      ],
      example: "A long scrolling page where a background photograph moves at roughly a third of the speed of the foreground text block.",
      numbers: "",
      pitfall: "Motion sickness and vestibular symptoms in a minority of users, which is why WCAG 2.1 SC 2.3.3 covers animation from interactions at AAA and the prefers-reduced-motion media query exists.",
      source: "Standard depth cue taxonomy; W3C WCAG 2.1 SC 2.3.3 Animation from Interactions",
      verify: { status: "verified", note: "Motion parallax is a standard depth cue. WCAG SC 2.3.3 (Animation from Interactions, Level AAA) and the CSS prefers-reduced-motion media feature are both published specifications." },
      belongs: { verdict: "adjacent", why: "It is a perception fact, but its design use is specific and common: parallax scrolling, and the accessibility limits on it." },
      related: [202, 194, 200]
    },
    {
      n: 200,
      title: "Depth cue: stereopsis",
      aka: ["Binocular disparity", "Stereo depth"],
      oneLine: "Two eyes see slightly different images, and the difference between them gives precise near-range depth.",
      demo: {
        caption: "The frame sits identically in both views. Only the near square shifts sideways, and that offset is the whole cue.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Left eye</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 100\"><rect class=\"s-mute\" x=\"25\" y=\"18\" width=\"100\" height=\"64\"/><path class=\"s-mute\" style=\"stroke-dasharray:2 3\" d=\"M75 6 V94\"/><rect class=\"f\" x=\"69\" y=\"37\" width=\"26\" height=\"26\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Right eye</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 100\"><rect class=\"s-mute\" x=\"25\" y=\"18\" width=\"100\" height=\"64\"/><path class=\"s-mute\" style=\"stroke-dasharray:2 3\" d=\"M75 6 V94\"/><rect class=\"f\" x=\"55\" y=\"37\" width=\"26\" height=\"26\"/></svg></div></div></div>"
      },
      what: "Stereopsis is the only depth cue that needs two eyes. The brain compares the small horizontal offsets between the two retinal images and computes depth from them. It is most useful within a few metres, and a meaningful minority of people have reduced or absent stereo vision. It contributes nothing to a flat screen or a printed page, because both eyes see the same image.",
      why: "For flat media it is irrelevant, and it is worth saying so plainly. For headset and stereoscopic work it becomes central, along with the discomfort caused when the eyes converge at one distance while focusing at another.",
      how: [
        "Ignore it entirely for print and flat screens; use occlusion, shading and contrast instead.",
        "In headset design, keep interactive content within a comfortable depth range rather than at extremes.",
        "Do not put fine text at large disparities; reading forces the conflict between convergence and focus.",
        "Provide a usable single-eye fallback, since not everyone has functional stereo vision."
      ],
      example: "Menu panels in a virtual reality headset placed at a fixed comfortable distance rather than at arm's length or infinity.",
      numbers: "",
      pitfall: "Treating a stereoscopic scene as a flat one with depth added. Depth budget and comfortable convergence have to be designed, not decorated.",
      source: "Standard binocular vision research; vergence-accommodation conflict is documented in the stereoscopic display literature",
      verify: { status: "verified", note: "Binocular disparity as the basis of stereopsis and the vergence-accommodation conflict in headsets are standard in the vision and display literature. No prevalence figure for reduced stereo vision is given because I did not verify one." },
      belongs: { verdict: "adjacent", why: "It has no bearing on flat media at all, but it is the governing depth cue for headset and stereoscopic design, which is a real design discipline." },
      related: [199, 194]
    },
    {
      n: 201,
      title: "Light-from-above assumption",
      aka: ["Overhead light prior"],
      oneLine: "The eye assumes light comes from above, so top shading reads as a dent and bottom shading as a bump.",
      demo: {
        caption: "The same shading, flipped. Read as lit from above, the left discs swell and the right ones sink.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Light at the top</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 160 84\"><defs><linearGradient id=\"db201up\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#ddd9d0\"/><stop offset=\"1\" stop-color=\"#55524c\"/></linearGradient></defs><rect x=\"0\" y=\"0\" width=\"160\" height=\"84\" fill=\"#9c9890\"/><circle cx=\"32\" cy=\"42\" r=\"17\" fill=\"url(#db201up)\"/><circle cx=\"80\" cy=\"42\" r=\"17\" fill=\"url(#db201up)\"/><circle cx=\"128\" cy=\"42\" r=\"17\" fill=\"url(#db201up)\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Light at the bottom</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 160 84\"><defs><linearGradient id=\"db201down\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#55524c\"/><stop offset=\"1\" stop-color=\"#ddd9d0\"/></linearGradient></defs><rect x=\"0\" y=\"0\" width=\"160\" height=\"84\" fill=\"#9c9890\"/><circle cx=\"32\" cy=\"42\" r=\"17\" fill=\"url(#db201down)\"/><circle cx=\"80\" cy=\"42\" r=\"17\" fill=\"url(#db201down)\"/><circle cx=\"128\" cy=\"42\" r=\"17\" fill=\"url(#db201down)\"/></svg></div></div></div>"
      },
      what: "Ramachandran showed that judging shape from shading is a global operation which assumes a single light source, and that the assumed source is usually overhead. Rotate the same shaded circles by 180 degrees and convex bumps flip to concave dimples. The assumption is a default rather than a law, and other cues in the scene can override it.",
      why: "It is why a button with a light top edge and a dark bottom edge reads as raised, and why the inverse reads as pressed or inset. Every skeuomorphic control, embossed logo and inset form field trades on it.",
      how: [
        "Put the highlight on the top edge and the shadow on the bottom for anything meant to be raised.",
        "Invert it deliberately for pressed and inset states so the affordance is consistent.",
        "Use one light direction across the whole product; mixed directions destroy the reading.",
        "Do not let a decorative gradient contradict the elevation your shadows claim."
      ],
      example: "The pressed state on a physical-looking calculator app key, where the highlight and shadow swap so the key visibly sinks.",
      numbers: "",
      pitfall: "Applying an inner shadow to a card for texture, which quietly tells the user the card is a hole rather than a raised surface.",
      source: "V. S. Ramachandran, Perception of shape from shading, Nature 331, 163 to 166 (1988)",
      verify: { status: "verified", note: "Ramachandran's 1988 Nature paper is confirmed by its PubMed record, which reports that shape from shading is a global operation assuming a single light source." },
      belongs: { verdict: "core", why: "It is the rule behind every raised, pressed and inset state in interface design." },
      related: [198, 194]
    },
    {
      n: 202,
      title: "Apparent motion",
      aka: ["Beta movement", "Stroboscopic motion"],
      oneLine: "A series of still images shown in quick succession is seen as one thing moving.",
      demo: {
        caption: "Left: two marks swapping in place, so nothing moves. Right: one mark travelling, so the change keeps an identity.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Cross-fade: two things</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-dot db-dot--lg db-anim db-anim--fade db-anim--linear\" style=\"animation-delay:1.2s\"></span><span class=\"db-dot db-dot--lg db-anim db-anim--fade db-anim--linear\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Moved: one thing</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--nowrap\"><span class=\"db-dot db-dot--lg db-anim db-anim--slide db-anim--ease\"></span></div></div></div></div>"
      },
      what: "Wertheimer's 1912 studies of seen movement showed that two lights flashed in the right sequence, at the right spacing and interval, produce the experience of a single light moving. Cinema, animation and every interface transition depend on it. What is perceived depends on timing and distance, and outside the useful range the display falls apart into two separate flashes or into a smear.",
      why: "Motion in an interface is not decoration. It is the cue that ties a before-state to an after-state, so the user reads a change rather than a replacement, which is exactly the problem change blindness creates.",
      how: [
        "Animate the actual element between states rather than cross-fading two versions of it.",
        "Keep transitions short enough not to delay the task and long enough to be traced by the eye.",
        "Preserve identity through the move: same shape, same colour, changed position.",
        "Give a reduced-motion alternative that still communicates the change, such as a highlight."
      ],
      example: "A list item that visibly slides into its new position after sorting, so the user can see where it went instead of finding a rearranged list.",
      numbers: "Apparent motion is typically reported at interstimulus intervals in the tens to low hundreds of milliseconds, with the optimal range depending on spacing and stimulus properties.",
      pitfall: "Animating for polish rather than for continuity, which adds delay without answering the question of what just changed.",
      source: "Max Wertheimer, Experimentelle Studien uber das Sehen von Bewegung (1912)",
      verify: { status: "verified", note: "Wertheimer 1912 confirmed as the founding study. The timing range is stated loosely on purpose: reported optimal intervals vary with spacing and stimulus, as noted in Steinman, Pizlo and Pizlo (2000)." },
      belongs: { verdict: "core", why: "Every interface transition is an application of it, and it is the direct remedy for change blindness." },
      related: [203, 181, 199]
    },
    {
      n: 203,
      title: "Phi phenomenon",
      aka: ["Pure phi"],
      oneLine: "Objectless motion seen between two rapidly alternating stimuli, distinct from the object motion of beta movement.",
      demo: {
        none: "The entry corrects how a term is cited rather than describing a design decision, and pure phi needs alternation rates a page cannot honestly reproduce; the motion designers actually use is shown at 202."
      },
      what: "Wertheimer used phi for the seen movement in his 1912 thesis, and pure phi for a particular case: at high alternation rates observers report motion with no object moving, a sort of shapeless flow between the two positions. Beta movement is the different case in which an object appears to travel. Steinman, Pizlo and Pizlo set out the distinction in their 2000 paper in Vision Research, arguing that the two have been conflated for decades.",
      why: "For a designer the practical phenomenon is beta movement, which is entry 202. Phi is worth knowing only so you do not repeat the standard mix-up when someone cites it in a motion design deck.",
      how: [
        "Use apparent motion, or beta movement, as the term when describing interface transitions.",
        "Do not cite phi as the explanation for animation; the reference will be wrong.",
        "If you need the distinction, cite Steinman, Pizlo and Pizlo (2000) rather than a design blog."
      ],
      example: "Wertheimer's original apparatus, in which two lights alternating at a high rate produced motion without any moving object.",
      numbers: "",
      pitfall: "Design writing routinely calls all animation the phi phenomenon. It is the wrong term for what interfaces actually use.",
      source: "Max Wertheimer (1912); Robert Steinman, Zygmunt Pizlo and Filip Pizlo, Phi is not beta, and why Wertheimer's discovery launched the Gestalt revolution, Vision Research (2000)",
      verify: { status: "disputed", note: "Real phenomenon, routinely misattributed. Confirmed against the Steinman, Pizlo and Pizlo 2000 paper record and the Wikipedia account of Wertheimer's use of the terms: Wertheimer applied phi broadly in 1912 and pure phi to objectless motion at high alternation rates." },
      belongs: { verdict: "cut", why: "As a separate design fundamental it duplicates apparent motion (202) and the term is almost always used incorrectly. Keep 202 and drop this; if a third motion entry is wanted, flicker fusion and flash safety is the more useful one." },
      related: [202]
    },
    {
      n: 9203,
      title: "Flicker fusion and flash safety",
      aka: ["Critical flicker frequency", "Photosensitive seizure thresholds"],
      oneLine: "Above a certain rate, flashing fuses into steady light; below it, flashing can trigger seizures.",
      demo: {
        caption: "One second of screen time in each, drawn as a still trace. The limit is three flashes; the right-hand train fails.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Within the limit</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 80\"><text class=\"t\" x=\"10\" y=\"13\">2 flashes</text><path class=\"s-mute\" d=\"M10 58 H160\"/><path class=\"s-mute\" d=\"M10 58 V64 M160 58 V64\"/><path class=\"s\" d=\"M10 58 H30 V22 H52 V58 H96 V22 H118 V58 H160\"/><text class=\"t\" x=\"10\" y=\"75\">0 s</text><text class=\"t\" x=\"148\" y=\"75\">1 s</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Over the limit</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 80\"><text class=\"t\" x=\"10\" y=\"13\">6 flashes</text><path class=\"s-mute\" d=\"M10 58 H160\"/><path class=\"s-mute\" d=\"M10 58 V64 M160 58 V64\"/><path class=\"s\" d=\"M10 58 H14 V22 H26 V58 H39 V22 H51 V58 H64 V22 H76 V58 H89 V22 H101 V58 H114 V22 H126 V58 H139 V22 H151 V58 H160\"/><text class=\"t\" x=\"10\" y=\"75\">0 s</text><text class=\"t\" x=\"148\" y=\"75\">1 s</text></svg></div></div></div>"
      },
      what: "Repeated flashes stop being seen as separate above a rate that varies with brightness and size, which is why screens and lighting appear steady. Below that rate, large bright flashes are a documented seizure trigger for people with photosensitive epilepsy. WCAG turns this into a testable rule: no more than three general flashes or three red flashes in any one second, unless the flash is below defined luminance thresholds.",
      why: "This is one of the few perception facts in this section that carries a legal and safety obligation rather than a preference. It applies to video, animated GIFs, loading states, game effects and autoplaying adverts.",
      how: [
        "Keep any flashing to three or fewer flashes per second, and prefer none.",
        "Treat saturated red flashing as a separate and stricter case.",
        "Check the flashing area: the rule applies to a contiguous area within a 10 degree field of view.",
        "Screen third-party video and advertising creative before it goes live, not after."
      ],
      example: "A promotional video with a strobing intro sequence, which has to be re-cut or preceded by a warning before it can be placed on a public site.",
      numbers: "WCAG 2.1 and 2.2 SC 2.3.1, Level A: no more than three general flashes and/or three red flashes within any one-second period. A general flash is a pair of opposing changes in relative luminance of 10 per cent or more of the maximum, where the darker image is below 0.80 relative luminance. The area test is that concurrent flashes occupy no more than 0.006 steradians within any 10 degree visual field, which is about 25 per cent of that field. W3C estimates a 10 degree field as a 341 by 256 pixel rectangle when the content is viewed at 1024 by 768 pixels.",
      pitfall: "Assuming the rule is about full-screen effects. A small but bright strobing element can still exceed the threshold within its 10 degree area.",
      source: "W3C, Web Content Accessibility Guidelines 2.2, Success Criterion 2.3.1 Three Flashes or Below Threshold (Level A)",
      verify: { status: "verified", note: "Thresholds read directly from the W3C Understanding SC 2.3.1 page for WCAG 2.2 on 17 August 2026: Level A, three general and/or three red flashes per second, 10 per cent relative luminance change, darker image below 0.80, and no more than 0.006 steradians or about 25 per cent of any 10 degree visual field, which the page estimates as a 341 by 256 pixel rectangle at 1024 by 768 resolution. The area figure was added because the earlier draft named the 10 degree field without the proportion, which is the part that makes the rule testable." },
      belongs: { verdict: "core", why: "It is a published, enforceable safety threshold covering motion and video work, and the master list has no entry for it." },
      related: [202, 199]
    },
    {
      n: 204,
      title: "Iconic memory",
      aka: ["Visual sensory memory", "The icon"],
      oneLine: "A brief, high-capacity visual trace that holds far more than you can report before it fades.",
      demo: {
        caption: "Twelve letters go in; about four come back out. The faded ones were seen and gone before they could be named.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Shown for 50 ms</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type db-type--mono\"><p>X M R J</p><p>T B F P</p><p>K L D S</p></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Reported afterwards</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type db-type--mono\"><p>X <span style=\"opacity:0.12\">M</span> <span style=\"opacity:0.12\">R</span> J</p><p><span style=\"opacity:0.12\">T</span> <span style=\"opacity:0.12\">B</span> F <span style=\"opacity:0.12\">P</span></p><p><span style=\"opacity:0.12\">K</span> L <span style=\"opacity:0.12\">D</span> <span style=\"opacity:0.12\">S</span></p></div></div></div></div>"
      },
      what: "Sperling flashed a grid of twelve letters for about 50 milliseconds. Asked to report everything, people managed four or five. Asked with a tone, immediately after the display went, to report just one row, they got most of that row right, which implies around nine letters were briefly available. The advantage disappears as the cue is delayed, putting the useful life of the trace at about a second.",
      why: "It sets a floor on how brief a visual event can be and still be usable. It also explains a common frustration: people often feel they saw something on a screen that vanished, and are not able to say what it was.",
      how: [
        "Never convey information in a flash that disappears; a toast that lasts under a second is decoration.",
        "Give transient messages enough time to be read, and a way to bring them back.",
        "Do not rely on a splash of information during a page transition.",
        "If something matters, put it somewhere persistent as well as showing it briefly."
      ],
      example: "A save confirmation that appears and disappears in half a second. Users report a flicker and then check the record manually.",
      numbers: "Sperling (1960): twelve letters at 50 milliseconds exposure, whole report about four to five letters, partial report implying about 9.1 letters available (76 per cent of twelve), with the advantage gone by about one second after the display ends.",
      pitfall: "Designing notification timings from a designer's own reaction time while watching for them, rather than from a user's while doing something else.",
      source: "George Sperling, The Information Available in Brief Visual Presentations, Psychological Monographs (1960)",
      verify: { status: "verified", note: "Corrected on 17 August 2026. An earlier draft credited these figures to a 2023 replication in Tutorials in Quantitative Methods for Psychology, which I could not find. Figures now taken from Sperling's own 1960 monograph text: stimuli exposed for 50 msec, total information available about 9.1 letters or 76 per cent of twelve, and partial-report accuracy falling to whole-report accuracy by a delay of 1.0 sec." },
      belongs: { verdict: "adjacent", why: "It is memory research, but it gives a defensible floor for how long transient interface messages must remain on screen." },
      related: [205, 181, 202]
    },
    {
      n: 205,
      title: "Working memory limits",
      aka: ["Short-term memory capacity", "The magical number"],
      oneLine: "People can hold only a handful of items in mind at once, and the honest number is around four.",
      demo: {
        caption: "Same step, same field. Left, the reference lives only in the user's memory. Right, the screen is holding it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Held in the head</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-nav\"><span>Step 1</span><b>Step 2</b><span>Step 3</span></div><div class=\"db-ui\"><span class=\"db-label\">Reference from step 1</span><span class=\"db-input\">&nbsp;</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Carried forward</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-nav\"><span>Step 1</span><b>Step 2</b><span>Step 3</span></div><div class=\"db-ui\"><span class=\"db-label\">Reference from step 1</span><span class=\"db-input\">HX-4482</span></div></div></div></div></div>"
      },
      what: "Miller's 1956 paper gave the famous seven plus or minus two, but Miller himself framed it partly as a rhetorical device rather than a hard capacity. Cowan reviewed the evidence in 2001 and argued that once rehearsal and chunking are ruled out, the real limit for the focus of attention averages about four chunks in adults. Baddeley and Hitch's model adds that verbal and visuospatial material use partly separate stores.",
      why: "Any task that makes someone carry information from one screen to the next is spending a very small budget. Exceed it and people write things down, make errors or abandon the task.",
      how: [
        "Do not require a value from one step to be typed into a later step; carry it forward and show it.",
        "Keep comparison items visible together rather than making the user remember one.",
        "Break long forms into steps only if each step is self-contained; otherwise splitting increases the memory load.",
        "Show a running summary in multi-step flows so nothing has to be held in the head."
      ],
      example: "A booking flow that keeps the chosen date, room and price in a sticky summary panel through every step.",
      numbers: "Miller (1956): seven plus or minus two. Cowan (2001): about four chunks for the focus of attention when chunking and rehearsal are controlled.",
      pitfall: "Quoting seven as a design rule and building seven-item navigation as if it were validated. Miller's number was about item capacity in laboratory tasks, not about menus.",
      source: "George Miller, The Magical Number Seven, Plus or Minus Two, Psychological Review 63, 81 to 97 (1956); Nelson Cowan, The magical number 4 in short-term memory, Behavioral and Brain Sciences 24, 87 to 114 (2001)",
      verify: { status: "adjusted", note: "The master list title is fine, but the popular framing is not: I have led with Cowan's four rather than Miller's seven. Cowan's abstract states seven was meant more as a rough estimate and rhetorical device than a real capacity limit, and that others have since put the limit at three to five chunks. Checked via the PubMed record and the Journal of Cognition review of the four versus seven debate." },
      belongs: { verdict: "core", why: "It is the single most-cited cognitive limit in interface design and it constrains flow design directly." },
      related: [206, 210, 207]
    },
    {
      n: 206,
      title: "Chunking (memory)",
      aka: ["Chunking", "Grouping into units"],
      oneLine: "Grouping small items into meaningful units lets people hold far more in mind, because the unit is what counts.",
      demo: {
        caption: "The same sixteen digits. Grouped into fours, checking them against the card in your hand takes one glance per group.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Sixteen items</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><span class=\"db-label\">Card number</span><span class=\"db-input\">4929837219872345</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Four items</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><span class=\"db-label\">Card number</span><span class=\"db-input\">4929 8372 1987 2345</span></div></div></div></div>"
      },
      what: "Chunking here is the memory mechanism, not the content-design habit of the same name. The writing practice of breaking a page into short labelled blocks is at 671, and it borrowed this word without inheriting the evidence. Miller's real contribution was not the number but the mechanism. Capacity is measured in chunks, and a chunk can be as small as a digit or as large as a whole familiar pattern. Chase and Simon's chess work showed the point sharply: skilled players recalled realistic board positions far better than novices, but lost that advantage on randomly arranged pieces, because their chunks were meaningful configurations rather than individual pieces.",
      why: "You cannot raise someone's capacity, but you can change the size of what they are holding. Formatting, grouping and labelling are all ways of making the chunks bigger so fewer of them are needed.",
      how: [
        "Format long numbers into groups: sort codes, card numbers, telephone numbers, reference codes.",
        "Group form fields under headings that name the group, so the group becomes one chunk.",
        "Keep group sizes small and consistent rather than mixing threes, fives and sevens.",
        "Use familiar patterns; a chunk only works if the person recognises it."
      ],
      example: "A card number field that auto-formats to four groups of four digits, which makes checking against the physical card much faster.",
      numbers: "",
      pitfall: "Grouping by visual tidiness rather than by meaning. A group that does not correspond to anything in the user's head is not a chunk.",
      source: "George Miller (1956); William Chase and Herbert Simon, Perception in Chess, Cognitive Psychology (1973)",
      verify: { status: "verified", note: "Chunking as the mechanism behind Miller's number is stated in the 1956 paper itself. The chess expertise finding is the standard reported result of Chase and Simon (1973), which I have described only in outline." },
      belongs: { verdict: "core", why: "It is the practical response to working memory limits and it drives number formatting, grouping and form structure." },
      related: [205, 156, 210, 671]
    },
    {
      n: 207,
      title: "Cognitive load: intrinsic",
      aka: ["Task-inherent load"],
      oneLine: "The unavoidable difficulty of the material itself, set by how many parts have to be held together at once.",
      demo: {
        caption: "Four items either way. On the right each one depends on the others, and that difficulty cannot be designed out.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Low interactivity</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 100\"><circle class=\"f\" cx=\"32\" cy=\"26\" r=\"9\"/><circle class=\"f\" cx=\"118\" cy=\"26\" r=\"9\"/><circle class=\"f\" cx=\"32\" cy=\"74\" r=\"9\"/><circle class=\"f\" cx=\"118\" cy=\"74\" r=\"9\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">High interactivity</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 100\"><path class=\"s-mute\" d=\"M32 26 H118 M32 74 H118 M32 26 V74 M118 26 V74 M32 26 L118 74 M118 26 L32 74\"/><circle class=\"f\" cx=\"32\" cy=\"26\" r=\"9\"/><circle class=\"f\" cx=\"118\" cy=\"26\" r=\"9\"/><circle class=\"f\" cx=\"32\" cy=\"74\" r=\"9\"/><circle class=\"f\" cx=\"118\" cy=\"74\" r=\"9\"/></svg></div></div></div>"
      },
      what: "Sweller's cognitive load theory splits the demand on working memory by its source. Intrinsic load comes from the content, and its driver is element interactivity: how many pieces have to be understood in relation to each other rather than one at a time. Learning twenty separate vocabulary words is low in interactivity. Understanding a tax calculation where each figure depends on the others is high.",
      why: "It marks the floor. You can simplify presentation as much as you like, but you cannot design away the fact that a mortgage application has interdependent parts. Knowing that tells you where to invest: sequencing and scaffolding rather than cosmetic simplification.",
      how: [
        "Sequence highly interdependent material so parts are introduced before the whole.",
        "Give worked examples for genuinely complex tasks rather than blank forms.",
        "Let people save and return, because high intrinsic load tasks are done in sittings.",
        "Do not promise to make an inherently complex task simple; make it clear and resumable instead."
      ],
      example: "A self-assessment tax return, where the interaction between figures is the difficulty and no layout change removes it.",
      numbers: "",
      pitfall: "Treating every complaint of difficulty as a design fault. Some load belongs to the task, and stripping the interface further just removes the support people needed.",
      source: "John Sweller, Cognitive Load During Problem Solving, Cognitive Science (1988); John Sweller, Element Interactivity and Intrinsic, Extraneous, and Germane Cognitive Load, Educational Psychology Review 22, 123 to 138 (2010)",
      verify: { status: "verified", note: "Element interactivity as the defining mechanism of intrinsic load is stated in Sweller's 2010 Educational Psychology Review paper, confirmed via the journal record and abstract." },
      belongs: { verdict: "core", why: "It separates difficulty you can fix from difficulty you cannot, which changes what a designer should spend effort on." },
      related: [208, 209, 205]
    },
    {
      n: 208,
      title: "Cognitive load: extraneous",
      aka: ["Presentation load", "Avoidable load"],
      oneLine: "The extra mental work created by how the material is presented rather than by the material itself.",
      demo: {
        caption: "Same two lines. Left, you carry the key up from the bottom of the frame; right, the labels are already there.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Key set apart</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 104\"><path class=\"s-mute\" d=\"M16 12 V84 H132\"/><path class=\"s\" d=\"M20 70 L48 58 L76 48 L104 32 L130 24\"/><path class=\"s-accent\" d=\"M20 78 L48 74 L76 62 L104 60 L130 48\"/><path class=\"s\" d=\"M16 96 H30\"/><text class=\"t\" x=\"34\" y=\"99\">sales</text><path class=\"s-accent\" d=\"M74 96 H88\"/><text class=\"t\" x=\"92\" y=\"99\">returns</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Labels on the lines</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 104\"><path class=\"s-mute\" d=\"M16 12 V84 H132\"/><path class=\"s\" d=\"M20 70 L48 58 L76 48 L104 32 L130 24\"/><path class=\"s-accent\" d=\"M20 78 L48 74 L76 62 L104 60 L130 48\"/><text class=\"t\" style=\"fill:var(--ink)\" x=\"136\" y=\"27\">sales</text><text class=\"t\" style=\"fill:var(--accent)\" x=\"136\" y=\"51\">returns</text></svg></div></div></div>"
      },
      what: "Extraneous load is the part that is the designer's fault. It comes from split attention, where related information sits apart and has to be held in mind while the eye travels; from redundancy, where the same thing is said twice in two forms; and from anything that forces a search before the real task can start. In Sweller's later formulation, it too is understood through element interactivity, which links it directly to intrinsic load rather than leaving it as a separate bucket.",
      why: "This is the load you get paid to remove. Every unit of it competes with the intrinsic load for the same small working memory, so removing it is not cosmetic; it makes hard tasks possible.",
      how: [
        "Put labels next to what they label; a legend far from the chart is split attention.",
        "Remove duplicated explanations rather than adding a third one.",
        "Keep instructions inside the step they apply to rather than in a preamble.",
        "Cut decoration that has to be interpreted before it can be dismissed."
      ],
      example: "A chart with a colour key in the corner instead of labels on the lines. The reader has to hold the key in mind while reading the plot.",
      numbers: "",
      pitfall: "Confusing extraneous load with visual density. A dense table can be low load, and a sparse page with the key information in three separate places can be high load.",
      source: "John Sweller, Jeroen van Merrienboer and Fred Paas, Cognitive Architecture and Instructional Design (1998, revisited 2019); John Sweller (2010)",
      verify: { status: "verified", note: "Split attention and redundancy are standard extraneous load effects in cognitive load theory. Sweller's 2010 paper defining extraneous load through element interactivity was confirmed via the Educational Psychology Review record." },
      belongs: { verdict: "core", why: "It names the specific, removable damage a bad layout does, and it is what most design work actually fixes." },
      related: [207, 209, 224]
    },
    {
      n: 209,
      title: "Cognitive load: germane",
      aka: ["Learning-directed load"],
      oneLine: "Effort spent building understanding rather than fighting the presentation, and now doubted as a separate category.",
      demo: {
        none: "The entry argues about whether a category in a theory exists at all, and the only thing left to draw is extraneous load, which 208 already demonstrates."
      },
      what: "Germane load was introduced as a third kind of load: the working memory devoted to constructing knowledge, which instructional design should encourage rather than reduce. Sweller himself later argued that in its usual treatment germane load cannot be told apart from intrinsic load, and may be redundant. He proposed keeping intrinsic and extraneous as a non-redundant pair, and redefining germane load, if it is kept at all, as the working memory resources actually devoted to intrinsic load rather than to extraneous load.",
      why: "The practical version survives even if the category does not. Effort that goes into the task is worth protecting; effort that goes into decoding your layout is not. That is a statement about the ratio, not about a third pot of load.",
      how: [
        "Judge a design by how much of the user's effort lands on the actual task.",
        "Do not add difficulty on purpose in the belief that it deepens understanding.",
        "Cut extraneous load first, then check whether the remaining difficulty is the task itself.",
        "In a training or onboarding context, use worked examples rather than manufactured struggle."
      ],
      example: "An onboarding tutorial that makes people re-enter data they have already provided, defended as reinforcement. It is extraneous load with a better name.",
      numbers: "",
      pitfall: "Using germane load to justify friction. If the user is working hard on your interface rather than on their goal, the category label does not help them.",
      source: "John Sweller, Jeroen van Merrienboer and Fred Paas (1998); reconsidered in John Sweller, Educational Psychology Review 22, 123 to 138 (2010)",
      verify: { status: "disputed", note: "Sweller's 2010 paper states that in its traditional treatment germane load cannot be told apart from intrinsic load and that the concept may be redundant, with the intrinsic and extraneous pair being sufficient. Confirmed via the Educational Psychology Review record for that paper." },
      belongs: { verdict: "cut", why: "As a separate design lever it does not stand up: its own originator questioned it, and in practice it is used to excuse friction. Keep intrinsic and extraneous load (207 and 208) and drop this." },
      related: [207, 208]
    },
    {
      n: 210,
      title: "Recognition over recall",
      aka: ["Recognition rather than recall"],
      oneLine: "It is far easier to pick the right thing from a list than to produce it from memory.",
      demo: {
        caption: "Same question twice. The left field wants the code produced from memory; the right only needs the right line picked.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Recall</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><span class=\"db-label\">Country code</span><span class=\"db-input\">&nbsp;</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Recognition</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Country</span><span class=\"db-input\">Uganda</span><span class=\"db-input\">Ukraine</span><span class=\"db-input\">United Arab Emirates</span><span class=\"db-input\">United Kingdom</span></div></div></div></div></div>"
      },
      what: "Recognition gives the memory system a cue to match against; recall makes it generate the answer unaided. Nielsen made it the sixth of his ten usability heuristics, worded as minimising the user's memory load by making elements, actions and options visible, so the user does not have to remember information from one part of the interface to another.",
      why: "It is the cheapest usability win there is. Most of what people call an unintuitive interface is an interface that asks them to remember something the system already knows.",
      how: [
        "Show options rather than requiring a remembered command or code.",
        "Carry previously entered values forward and display them where they are next needed.",
        "Offer recent items, saved searches and history rather than a blank field.",
        "In search, suggest as the user types instead of relying on exact recall of the term."
      ],
      example: "A country selector that lists countries rather than requiring the two-letter code.",
      numbers: "",
      pitfall: "Turning recognition into a different problem: a list of 200 unsorted options is technically recognition and practically a search task.",
      source: "Jakob Nielsen, 10 Usability Heuristics for User Interface Design, heuristic 6 (1994)",
      verify: { status: "verified", note: "Wording of heuristic 6 and the 1994 date taken directly from the Nielsen Norman Group page for the ten heuristics." },
      belongs: { verdict: "core", why: "It is a published usability heuristic with direct, daily application to forms, navigation and command design." },
      related: [205, 206, 177]
    },
    {
      n: 211,
      title: "Mental models",
      aka: ["User's model", "Conceptual model"],
      oneLine: "The working theory a person holds about how something operates, which is usually incomplete and often wrong.",
      demo: {
        caption: "The rise has the same angle in both; only the level it stops at changed. The accent line is the expectation.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Set to 20</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 110\"><path class=\"s-mute\" d=\"M22 12 V92 H158\"/><path class=\"s-mute\" d=\"M22 50 H158 M22 26 H158\" stroke-dasharray=\"3 3\"/><path class=\"s\" d=\"M26 86 L98 50 L158 50\"/><text class=\"t\" x=\"6\" y=\"53\">20</text><text class=\"t\" x=\"6\" y=\"29\">30</text><text class=\"t\" x=\"124\" y=\"106\">time</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Set to 30</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 110\"><path class=\"s-mute\" d=\"M22 12 V92 H158\"/><path class=\"s-mute\" d=\"M22 50 H158 M22 26 H158\" stroke-dasharray=\"3 3\"/><path class=\"s-accent\" d=\"M26 86 L74 26 L158 26\"/><path class=\"s\" d=\"M26 86 L146 26 L158 26\"/><text class=\"t\" x=\"6\" y=\"53\">20</text><text class=\"t\" x=\"6\" y=\"29\">30</text><text class=\"t\" style=\"fill:var(--accent)\" x=\"78\" y=\"22\">expected</text><text class=\"t\" x=\"124\" y=\"106\">time</text></svg></div></div></div>"
      },
      what: "Kenneth Craik argued in 1943 that the mind builds small-scale models of reality to predict events. Philip Johnson-Laird developed it into a theory of reasoning. Donald Norman brought it into design with a distinction that is still the most useful part: there is the designer's model of how the system works, the user's model of how it works, and the system image, which is everything the product actually shows. Users build their model only from the system image, never from the designer's intentions.",
      why: "Almost every confusion is a mismatch between these models. The fix is rarely to explain the real mechanism; it is to change the system image so the model people naturally form is close enough to be useful.",
      how: [
        "Find out what users already believe before changing anything; the existing model is your starting material.",
        "Make the system image consistent, so people are not forming two contradictory models.",
        "Borrow familiar models where they fit, and signal clearly where yours differs.",
        "Test by asking people to predict what a control will do, not just to use it."
      ],
      example: "A domestic thermostat, where many people hold a valve model and believe turning it to 30 heats the house faster, rather than a target-temperature model.",
      numbers: "",
      pitfall: "Documenting your way out of a mismatch. If the model is wrong, help text is a patch on a design problem.",
      source: "Kenneth Craik, The Nature of Explanation (1943); Philip Johnson-Laird, Mental Models (1983); Donald Norman, The Design of Everyday Things (1988, revised 2013)",
      verify: { status: "verified", note: "Craik 1943, Johnson-Laird 1983 and Norman's designer model, user model and system image are the standard published lineage. The thermostat example is Norman's own long-standing illustration in The Design of Everyday Things." },
      belongs: { verdict: "core", why: "It is the central explanatory idea in interaction design and it dictates what a design has to communicate." },
      related: [212, 165, 210]
    },
    {
      n: 212,
      title: "Schema",
      aka: ["Knowledge structure", "Script"],
      oneLine: "A stored pattern of how a kind of thing usually goes, which fills the gaps in what you perceive.",
      demo: {
        caption: "Same four parts in both. Only the right one puts search and basket where a retail site normally keeps them.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Furniture moved</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Brand</span></div><div class=\"db-lines\"><i></i><i></i><i></i><i></i></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Basket</span><span class=\"db-input\">Search</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Where people expect it</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Brand</span><span class=\"db-input\">Search</span><span class=\"db-note\">Basket</span></div><div class=\"db-lines\"><i></i><i></i><i></i><i></i></div></div></div></div></div>"
      },
      what: "Bartlett showed in 1932 that memory is reconstructive: when English participants retold an unfamiliar Native American folk tale, the details drifted towards their own cultural expectations. What was recalled was shaped by the pattern they already held. Applied to interfaces, a schema is the expected sequence and furniture of a familiar type of thing: what a checkout involves, where a shopping basket lives, what a settings page contains.",
      why: "People arrive with a schema for your product type and will read your design against it. Matching the schema gives you comprehension for free. Departing from it costs attention, and needs to buy something worth the cost.",
      how: [
        "Learn the conventions of the category before deciding which to break.",
        "Keep the furniture where people expect it: search at the top, basket top right on retail sites.",
        "When you do break a convention, make the difference obvious rather than subtle.",
        "Name things with the words the schema uses, not with internal product language."
      ],
      example: "A hotel booking page that follows the expected sequence of dates, guests, rooms and payment. Reordering it without reason produces errors even though every step is present.",
      numbers: "",
      pitfall: "Confusing a schema with a personal habit. Test whether the expectation is shared before designing to it.",
      source: "Frederic Bartlett, Remembering: A Study in Experimental and Social Psychology (1932)",
      verify: { status: "verified", note: "Bartlett 1932 and the reconstructive memory finding from the War of the Ghosts studies are the standard source. The design application is my own framing, stated as such." },
      belongs: { verdict: "adjacent", why: "It is cognitive psychology and it overlaps mental models (211) and past experience (165), but it gives the specific reason conventions in a product category are worth following." },
      related: [211, 165, 231]
    },
    {
      n: 213,
      title: "Dual coding",
      aka: ["Dual coding theory"],
      oneLine: "Words and images are stored in two partly separate systems, so using both can help more than either alone.",
      demo: {
        caption: "Same sentence both sides. On the right a drawing carries it too, and you can see which flap is meant.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Words alone</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type db-measure-narrow\">Fold the corner flap under the slot on the front face.</div></div></div><div class=\"db-half\"><span class=\"db-tag\">Words and picture</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-type db-measure-narrow\">Fold the corner flap under the slot on the front face.</div><svg class=\"db-svg\" viewBox=\"0 0 180 92\"><path class=\"s\" d=\"M46 36 H146 V80 H46 Z\"/><path class=\"s\" d=\"M66 58 H106\"/><path class=\"s-accent\" d=\"M46 36 L46 14 L80 36 Z\"/><path class=\"s-mute\" d=\"M56 22 C 88 16, 102 36, 90 50\"/><path class=\"f-mute\" d=\"M90 58 L85 47 L95 47 Z\"/><text class=\"t\" x=\"84\" y=\"20\">flap</text><text class=\"t\" x=\"112\" y=\"61\">slot</text></svg></div></div></div></div>"
      },
      what: "Paivio proposed that the mind holds verbal and non-verbal representations in separate but connected systems. Material that is coded both ways has two routes to retrieval. The design consequence is not that pictures are always better, but that a picture and words that carry the same message can reinforce each other, provided they are genuinely related and presented together.",
      why: "It is the reason a labelled diagram outperforms either the diagram alone or the paragraph alone for explaining a process. It also sets a limit: two channels only help when they are integrated, not when they compete.",
      how: [
        "Pair diagrams with short integrated labels rather than a caption block underneath.",
        "Use an icon plus a word for navigation items, not an icon alone.",
        "Do not narrate on-screen text word for word in video; that is redundancy, not dual coding.",
        "Keep the image and the words in view at the same moment."
      ],
      example: "Assembly instructions that put the step number, the short instruction and the drawing of that step in the same block.",
      numbers: "",
      pitfall: "Adding a decorative stock photograph next to text and calling it dual coding. If the image carries no part of the message, it adds load and nothing else.",
      source: "Allan Paivio, Imagery and Verbal Processes (1971) and Mental Representations: A Dual Coding Approach (1986)",
      verify: { status: "verified", note: "Paivio's dual coding theory and its two publications are standard citations. The redundancy caution reflects established multimedia-learning findings; I have not attached a figure to it." },
      belongs: { verdict: "adjacent", why: "It comes from memory research, but it directly justifies labelled diagrams, icon-plus-label navigation and the rule against narrating on-screen text." },
      related: [214, 208]
    },
    {
      n: 214,
      title: "Picture superiority effect",
      aka: ["Pictorial superiority"],
      oneLine: "Pictures are remembered better than words, at least for recognising them again later.",
      demo: {
        caption: "Three files with near-identical names. Only on the right can you point at the one with the chart in it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Identical icons</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 122\"><rect class=\"s-mute\" x=\"12\" y=\"12\" width=\"26\" height=\"30\"/><rect class=\"s-mute\" x=\"12\" y=\"50\" width=\"26\" height=\"30\"/><rect class=\"s-mute\" x=\"12\" y=\"88\" width=\"26\" height=\"30\"/><text class=\"t\" x=\"46\" y=\"31\">report-final.pdf</text><text class=\"t\" x=\"46\" y=\"69\">report-final-2.pdf</text><text class=\"t\" x=\"46\" y=\"107\">report-final-b.pdf</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Distinct thumbnails</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 122\"><rect class=\"s-mute\" x=\"12\" y=\"12\" width=\"26\" height=\"30\"/><rect class=\"s-mute\" x=\"12\" y=\"50\" width=\"26\" height=\"30\"/><rect class=\"s-mute\" x=\"12\" y=\"88\" width=\"26\" height=\"30\"/><rect class=\"f-mute\" x=\"17\" y=\"30\" width=\"4\" height=\"8\"/><rect class=\"f-mute\" x=\"24\" y=\"24\" width=\"4\" height=\"14\"/><rect class=\"f-mute\" x=\"31\" y=\"19\" width=\"4\" height=\"19\"/><rect class=\"f-mute\" x=\"17\" y=\"57\" width=\"16\" height=\"2\"/><rect class=\"f-mute\" x=\"17\" y=\"63\" width=\"16\" height=\"2\"/><rect class=\"f-mute\" x=\"17\" y=\"69\" width=\"16\" height=\"2\"/><rect class=\"f-mute\" x=\"17\" y=\"75\" width=\"10\" height=\"2\"/><circle class=\"f-mute\" cx=\"21\" cy=\"99\" r=\"4\"/><path class=\"f-mute\" d=\"M14 115 L24 99 L34 115 Z\"/><text class=\"t\" x=\"46\" y=\"31\">report-final.pdf</text><text class=\"t\" x=\"46\" y=\"69\">report-final-2.pdf</text><text class=\"t\" x=\"46\" y=\"107\">report-final-b.pdf</text></svg></div></div></div>"
      },
      what: "Standing's 1973 study is the striking one: after seeing 10,000 pictures, participants recognised them at around 83 per cent when tested against new pictures. Recognition memory for images is very large. The effect is strongest for recognition rather than recall, and for distinctive, meaningful images rather than generic ones. Paivio's dual coding account is the usual explanation.",
      why: "It supports using images for recognition tasks: finding a previously seen item, identifying a brand, spotting your own file again. It says much less about using images to explain something, which is a different job.",
      how: [
        "Use thumbnails to help people re-find things they have seen before.",
        "Make images in a set visually distinct from each other, or the advantage collapses.",
        "Keep brand assets consistent so recognition compounds.",
        "Do not substitute an image for text where the message is a precise instruction."
      ],
      example: "A file manager showing document thumbnails rather than a list of identical file icons, so people spot the one they were working on.",
      numbers: "Standing (1973): about 83 per cent recognition accuracy after exposure to 10,000 pictures.",
      pitfall: "Reading it as a licence to replace copy with imagery. The effect is about later recognition, not about immediate comprehension.",
      source: "Lionel Standing, Learning 10,000 Pictures, Quarterly Journal of Experimental Psychology 25, 207 to 222 (1973)",
      verify: { status: "verified", note: "The 83 per cent figure is confirmed in Donald Laming, Forgetting tracked by recognition of pictures, Quarterly Journal of Experimental Psychology (PMC8915223), which states that Standing reported 83 per cent correct, at a mean accessibility of 0.66, after learning 10,000 pictures. Standing's own abstract confirms that memory was assessed by forced-choice recognition. Corrected on 17 August 2026: an earlier draft described Laming's paper as a Royal Society journal review, which it is not. Corrected again on 18 August 2026: a second-hand account attributed to Hollingworth could not be located and has been removed." },
      belongs: { verdict: "adjacent", why: "It is memory research with one specific design use: image-based recognition and re-finding, rather than explanation." },
      related: [213, 216]
    },
    {
      n: 215,
      title: "Serial position effect (primacy and recency)",
      aka: ["Primacy effect", "Recency effect"],
      oneLine: "In a list, the first and last items are remembered best and the middle is remembered worst.",
      demo: {
        caption: "Recall plotted against position in a ten-item list. The middle of the run is the part nobody keeps.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 128\"><path class=\"s-mute\" d=\"M36 14 V100 H300\"/><path class=\"s-accent\" d=\"M48 34 L75 52 L102 66 L129 76 L157 82 L184 84 L211 82 L238 72 L265 52 L292 24\"/><circle class=\"f-accent\" cx=\"48\" cy=\"34\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"75\" cy=\"52\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"102\" cy=\"66\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"129\" cy=\"76\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"157\" cy=\"82\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"184\" cy=\"84\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"211\" cy=\"82\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"238\" cy=\"72\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"265\" cy=\"52\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"292\" cy=\"24\" r=\"2.5\"/><text class=\"t\" x=\"36\" y=\"10\">recall</text><text class=\"t\" x=\"40\" y=\"116\">first</text><text class=\"t\" x=\"148\" y=\"116\">middle</text><text class=\"t\" x=\"276\" y=\"116\">last</text></svg></div>"
      },
      what: "Ebbinghaus described the shape and Murdock's 1962 free recall experiments gave it its standard form: plot recall against position and you get a U. Early items get more rehearsal and reach longer-term memory, which gives primacy. Late items are still available when recall begins, which gives recency. Recency is fragile and disappears if recall is delayed by a filled interval.",
      why: "Ordering is a design decision with a memory consequence. Where you place an item in a list changes how likely it is to be remembered afterwards, which matters for navigation, menus and pitch structure.",
      how: [
        "Put the most important navigation items first and last, not in the middle.",
        "In a presentation, place the point you want remembered at the start or the end.",
        "Keep lists short enough that there is not much middle.",
        "Do not rely on position alone; emphasise the item as well."
      ],
      example: "Primary navigation bars that put the home or brand link first and the main call to action last, leaving secondary items in between.",
      numbers: "",
      pitfall: "Applying it to scanning as if it were the same as memory. On a visible list, people are looking, not recalling, and the U shape does not apply in the same way.",
      source: "Hermann Ebbinghaus (1885); Bennet Murdock, The serial position effect of free recall, Journal of Experimental Psychology (1962)",
      verify: { status: "verified", note: "Murdock 1962 is the standard cited demonstration of the serial position curve, and the fragility of recency under a filled delay is a standard finding. I have flagged the scanning versus recall distinction rather than letting the design folklore stand unchallenged." },
      belongs: { verdict: "adjacent", why: "It is memory research, but it gives a defensible reason to order navigation items and pitch points the way most designers do by instinct." },
      related: [216, 205, 218]
    },
    {
      n: 216,
      title: "Von Restorff (isolation) effect",
      aka: ["Isolation effect", "Distinctiveness effect"],
      oneLine: "The item that differs from the rest of a set is the one that gets noticed and remembered.",
      demo: {
        caption: "Three plans. On the left every button is filled; on the right only the middle one, and that is what sticks.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Everything emphasised</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--nowrap\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Basic</span><span class=\"db-btn db-btn--sm\">Choose</span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Standard</span><span class=\"db-btn db-btn--sm\">Choose</span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Plus</span><span class=\"db-btn db-btn--sm\">Choose</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One emphasised</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--nowrap\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Basic</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Choose</span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Standard</span><span class=\"db-btn db-btn--sm\">Choose</span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Plus</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Choose</span></div></div></div></div></div></div>"
      },
      what: "Hedwig von Restorff published the finding in 1933: within a list of similar items, an item that stands out on some dimension is recalled better than its neighbours. The effect is relational. It is not that the odd item is intrinsically memorable, but that it is different from what surrounds it, which is why isolating two items works far less well than isolating one.",
      why: "It is the memory counterpart of pop-out and it underwrites every emphasis decision. A primary button works because it is the only one styled that way, not because of the colour it happens to be.",
      how: [
        "Style one primary action per view and make everything else visibly secondary.",
        "Isolate on one dimension at a time: colour, or weight, or size, not all three.",
        "Count your emphasised items before shipping; more than one or two and the effect is gone.",
        "In a pricing table, mark a single recommended plan rather than badging several."
      ],
      example: "A pricing page with three plans where only the middle one has a filled button and a border, so it is the one people remember discussing.",
      numbers: "",
      pitfall: "Stakeholder-driven emphasis creep. Every team wants their item highlighted, and the page ends up with no highlight at all.",
      source: "Hedwig von Restorff, Uber die Wirkung von Bereichsbildungen im Spurenfeld, Psychologische Forschung (1933)",
      verify: { status: "verified", note: "Attribution and date confirmed against Colin MacLeod, Zeigarnik and von Restorff: the memory effects and the stories behind them, Memory and Cognition 48(6), 1073 to 1088 (2020), whose reference list gives von Restorff (1933), Psychologische Forschung 18, 299 to 342." },
      belongs: { verdict: "core", why: "It is the memory justification for visual hierarchy, and it gives a hard limit on how many things can be emphasised." },
      related: [176, 175, 166]
    },
    {
      n: 217,
      title: "Zeigarnik effect",
      aka: ["Unfinished task effect"],
      oneLine: "The claim that interrupted tasks are remembered better than completed ones, which recent evidence does not support.",
      demo: {
        caption: "Share of recalled tasks that were interrupted, against the rest. The famous claim predicts a much taller left bar.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 280 120\"><path class=\"s-mute\" d=\"M34 96 H256\"/><rect class=\"f-accent\" x=\"68\" y=\"32\" width=\"52\" height=\"64\"/><rect class=\"f-mute\" x=\"170\" y=\"30\" width=\"52\" height=\"66\"/><path class=\"s-mute\" d=\"M34 31 H256\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"34\" y=\"12\">share of tasks recalled</text><text class=\"t\" x=\"74\" y=\"24\">49.16%</text><text class=\"t\" x=\"176\" y=\"24\">50.84%</text><text class=\"t\" x=\"68\" y=\"110\">interrupted</text><text class=\"t\" x=\"172\" y=\"110\">completed</text></svg></div>"
      },
      what: "Bluma Zeigarnik reported in 1927 that people recalled interrupted tasks better than finished ones. It became a staple of design writing, used to justify progress bars, saved drafts and open loops. Ghibellini and Meier's 2025 meta-analysis in Humanities and Social Sciences Communications found a weighted recall ratio of 0.99, whether or not Zeigarnik's own 1927 data was included, and concluded there is no reliable memory advantage for unfinished tasks. They did find a Zeigarnik effect in what they labelled a relaxed experimental atmosphere, so the effect looks conditional rather than absent. The related Ovsiankina effect, the tendency to resume an interrupted task, held up plainly.",
      why: "The design advice built on it is not necessarily wrong, but the reason usually given for it is. Progress indicators help because they show state and reduce uncertainty, not because an unfinished task burns itself into memory.",
      how: [
        "Keep progress indicators and saved drafts; justify them by resumption and clarity, not by recall.",
        "Make it easy to return to an interrupted task, since resumption is the part that replicates.",
        "Do not build a persuasion strategy on the premise that people will remember your unfinished onboarding.",
        "Stop citing Zeigarnik in decks unless you also cite the meta-analysis."
      ],
      example: "An account setup checklist showing three of five steps complete. It works by making the remaining work visible and resumable.",
      numbers: "Ghibellini and Meier (2025): weighted recall ratio 0.99 across 38 publications including Zeigarnik's own, and 0.99 again across the 37 without it; interrupted tasks made up 49.16 per cent of those recalled; weighted effect size dz = 0.15 from the 8 publications where one could be computed. Ovsiankina resumption rate 67.00 per cent across 21 publications, or 66.79 per cent across the 20 excluding Ovsiankina's own.",
      pitfall: "Designing deliberate incompleteness to create tension. You get the annoyance without the memory benefit.",
      source: "Bluma Zeigarnik, Das Behalten erledigter und unerledigter Handlungen, Psychologische Forschung 9, 1 to 85 (1927); Rebecca Ghibellini and Beat Meier, Interruption, recall and resumption: a meta-analysis of the Zeigarnik and Ovsiankina effects, Humanities and Social Sciences Communications (2025)",
      verify: { status: "disputed", note: "Read the results and discussion of the 2025 meta-analysis directly (article s41599-025-05000-w) on 17 August 2026 and took every figure from it verbatim. Earlier draft wording implied the 0.99 ratio came from 37 studies out of 38; the paper reports 0.99 for both the 38-publication and the 37-publication sets, and counts publications rather than studies. The paper's own caveat that a Zeigarnik effect appeared under a relaxed experimental atmosphere has been added, because omitting it overstated the case." },
      belongs: { verdict: "cut", why: "The memory claim it is famous for does not replicate, and the design advice attached to it survives on other grounds. If a replacement is wanted, use the Ovsiankina resumption effect, which the same meta-analysis supports." },
      related: [220, 218]
    },
    {
      n: 218,
      title: "Peak-end rule",
      aka: ["Peak and end evaluation"],
      oneLine: "People judge a past experience mostly by its most intense moment and its ending, not by its length.",
      demo: {
        caption: "Two pain traces, same peak. The right one lasts longer and hurts more in total, yet is remembered as better.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Stops at the peak</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><path class=\"s-mute\" d=\"M20 12 V92 H156\"/><path class=\"s-accent\" d=\"M24 88 L36 62 L46 42 L56 68 L66 36 L76 54 L86 26 L96 50 L104 32\"/><circle class=\"f-accent\" cx=\"86\" cy=\"26\" r=\"3\"/><circle class=\"f-accent\" cx=\"104\" cy=\"32\" r=\"3\"/><text class=\"t\" x=\"72\" y=\"18\">peak</text><text class=\"t\" x=\"112\" y=\"30\">end</text><text class=\"t\" x=\"20\" y=\"8\">pain</text><text class=\"t\" x=\"130\" y=\"106\">time</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Tails off</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><path class=\"s-mute\" d=\"M20 12 V92 H156\"/><path class=\"s-accent\" d=\"M24 88 L36 62 L46 42 L56 68 L66 36 L76 54 L86 26 L96 50 L104 32 L116 54 L126 68 L136 78 L146 86\"/><circle class=\"f-accent\" cx=\"86\" cy=\"26\" r=\"3\"/><circle class=\"f-accent\" cx=\"146\" cy=\"86\" r=\"3\"/><text class=\"t\" x=\"72\" y=\"18\">peak</text><text class=\"t\" x=\"148\" y=\"80\">end</text><text class=\"t\" x=\"20\" y=\"8\">pain</text><text class=\"t\" x=\"130\" y=\"106\">time</text></svg></div></div></div>"
      },
      what: "Kahneman and colleagues had participants hold a hand in painful cold water for 60 seconds, and separately for 60 seconds plus 30 more as the water warmed slightly but stayed unpleasant. Asked which to repeat, 22 of 32 chose the longer one, which contained strictly more discomfort. A later randomised trial of 682 patients by Redelmeier, Katz and Kahneman extended colonoscopy procedures with a less painful final period; those patients rated the final moments and the whole experience as less bad, and returned for repeat procedures at a slightly higher rate.",
      why: "It says the shape of an experience matters more than its total. For service and product design, that puts real weight on how things end: the last screen, the confirmation, the handover, the offboarding.",
      how: [
        "Design the ending deliberately, not as a leftover confirmation page.",
        "Find the worst moment in the journey and soften it, since the peak dominates the memory.",
        "Do not lengthen a bad experience on purpose; the evidence is about the shape, not a licence to add time.",
        "Handle failures and cancellations well, because those endings are what get described to other people."
      ],
      example: "The colonoscopy trial itself, where a gentler final few minutes changed how patients rated the whole procedure.",
      numbers: "Kahneman et al. (1993): 22 of 32 participants (69 per cent) chose to repeat the longer, more painful trial. Redelmeier, Katz and Kahneman (2003), n = 682: final-moment pain 1.7 versus 2.5 on a ten-point intensity scale; the whole experience rated 4.4 versus 4.9 on a 10 cm visual analogue scale; the procedure ranked 4.1 versus 4.6 against seven other unpleasant experiences with eight as the worst. Return rates for a repeat colonoscopy averaged 50.4 per cent over a median 5.3 years, with an odds ratio of 1.41 for the extended group.",
      pitfall: "Using it to excuse a bad middle. The peak is also part of the rule, and a terrible peak is not rescued by a cheerful ending.",
      source: "Daniel Kahneman, Barbara Fredrickson, Charles Schreiber and Donald Redelmeier, When More Pain Is Preferred to Less, Psychological Science (1993); Donald Redelmeier, Joel Katz and Daniel Kahneman, Memories of colonoscopy: a randomized trial, Pain (2003)",
      verify: { status: "verified", note: "Read the 1993 paper text: 14 degrees Celsius for 60 seconds, plus 30 seconds rising to a mean 15.2 degrees, and 22 of 32 (69 per cent) choosing the long trial. Corrected on 17 August 2026: an earlier draft gave the 2003 trial's overall unpleasantness as 4.4 versus 4.6, which conflated two separate measures. The published abstract gives 4.4 versus 4.9 on a 10 cm visual analogue scale for the whole experience and 4.1 versus 4.6 for the ranking against seven other unpleasant experiences. Note that the PubMed version of this abstract is garbled and merges those figures; the full abstract on the publisher and repository copies is the one used here." },
      belongs: { verdict: "adjacent", why: "It is behavioural economics, but it directly governs how service journeys, confirmations and endings should be designed." },
      related: [215, 217]
    },
    {
      n: 219,
      title: "Spacing effect",
      aka: ["Distributed practice"],
      oneLine: "Learning spread over separate sessions sticks far better than the same time crammed into one.",
      demo: {
        caption: "Same total study time both sides. Only the spacing changed; the bar at the right end is what is remembered later.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One session</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 92\"><path class=\"s-mute\" d=\"M10 62 H120\"/><rect class=\"f-accent\" x=\"12\" y=\"40\" width=\"48\" height=\"22\"/><path class=\"s-mute\" d=\"M128 14 V70\" stroke-dasharray=\"3 3\"/><rect class=\"f-mute\" x=\"138\" y=\"44\" width=\"16\" height=\"18\"/><text class=\"t\" x=\"10\" y=\"78\">day 1</text><text class=\"t\" x=\"84\" y=\"78\">day 28</text><text class=\"t\" x=\"132\" y=\"78\">recall</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Four sessions</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 92\"><path class=\"s-mute\" d=\"M10 62 H120\"/><rect class=\"f-accent\" x=\"12\" y=\"40\" width=\"12\" height=\"22\"/><rect class=\"f-accent\" x=\"40\" y=\"40\" width=\"12\" height=\"22\"/><rect class=\"f-accent\" x=\"72\" y=\"40\" width=\"12\" height=\"22\"/><rect class=\"f-accent\" x=\"108\" y=\"40\" width=\"12\" height=\"22\"/><path class=\"s-mute\" d=\"M128 14 V70\" stroke-dasharray=\"3 3\"/><rect class=\"f-mute\" x=\"138\" y=\"22\" width=\"16\" height=\"40\"/><text class=\"t\" x=\"10\" y=\"78\">day 1</text><text class=\"t\" x=\"84\" y=\"78\">day 28</text><text class=\"t\" x=\"132\" y=\"78\">recall</text></svg></div></div></div>"
      },
      what: "Ebbinghaus reported it in 1885 on himself. Cepeda, Pashler, Vul, Wixted and Rohrer's 2006 meta-analysis in Psychological Bulletin gathered 839 assessments across 317 experiments in 184 articles and found the benefit consistent: only 12 of 271 massed versus spaced comparisons showed no effect or a negative one. The best gap depends on how long you need the material to last, with the optimal interval growing as the retention interval grows.",
      why: "It matters for anything a designer builds that is meant to teach: onboarding, training, help systems, safety instructions. One long tutorial is the least effective shape you can choose.",
      how: [
        "Break onboarding into short sessions across days rather than one guided tour.",
        "Reintroduce a feature in context a while after first explaining it.",
        "Space reminders out rather than bunching them at the start.",
        "Match the gap to the horizon: longer gaps for things that must be remembered months later."
      ],
      example: "A software product that teaches one feature at first use, then surfaces the next one a few days later at the moment it becomes relevant.",
      numbers: "Cepeda et al. (2006): 839 assessments in 317 experiments across 184 articles; only 12 of 271 massed versus spaced comparisons failed to show a spacing benefit.",
      pitfall: "Turning spacing into nagging. Spaced teaching only works if each contact is short and genuinely useful.",
      source: "Hermann Ebbinghaus, Uber das Gedachtnis (1885); Nicholas Cepeda, Harold Pashler, Edward Vul, John Wixted and Doug Rohrer, Distributed Practice in Verbal Recall Tasks, Psychological Bulletin 132, 354 to 380 (2006)",
      verify: { status: "verified", note: "Read the Cepeda et al. 2006 paper text: 839 assessments in 317 experiments in 184 articles, and 12 of 271 comparisons showing no or negative spacing effect. The interaction between optimal gap and retention interval is stated in the same paper." },
      belongs: { verdict: "adjacent", why: "It belongs to learning science, but it decides the shape of onboarding, training and help content, which designers build." },
      related: [220, 210]
    },
    {
      n: 220,
      title: "Attention residue",
      aka: ["Task-switching residue"],
      oneLine: "After switching tasks, part of your attention stays stuck on the last one and degrades the next.",
      demo: {
        caption: "Attention through one interruption. The notch is the same in both; only the right panel shows the recovery afterwards.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Assumed cost</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 104\"><path class=\"s-mute\" d=\"M16 10 V92 H154\"/><path class=\"s-mute\" d=\"M16 28 H154\" stroke-dasharray=\"3 3\"/><path class=\"s-accent\" d=\"M16 28 H66 V70 H78 V28 H154\"/><path class=\"s-mute\" d=\"M66 78 H78 M66 74 V82 M78 74 V82\"/><text class=\"t\" x=\"61\" y=\"90\">cost</text><text class=\"t\" x=\"16\" y=\"8\">attention</text><text class=\"t\" x=\"132\" y=\"102\">time</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Actual cost</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 104\"><path class=\"s-mute\" d=\"M16 10 V92 H154\"/><path class=\"s-mute\" d=\"M16 28 H154\" stroke-dasharray=\"3 3\"/><path class=\"s-accent\" d=\"M16 28 H66 V70 H78 C 100 70, 118 34, 142 28 H154\"/><path class=\"s-mute\" d=\"M66 78 H142 M66 74 V82 M142 74 V82\"/><text class=\"t\" x=\"93\" y=\"90\">cost</text><text class=\"t\" x=\"16\" y=\"8\">attention</text><text class=\"t\" x=\"132\" y=\"102\">time</text></svg></div></div></div>"
      },
      what: "Sophie Leroy introduced the term in a 2009 paper in Organizational Behavior and Human Decision Processes. Switching between tasks leaves cognitive resources still engaged with the previous one, so performance on the new task suffers. Leroy reported that the residue is worse when the earlier task was left unfinished, and that simply finishing was not enough on its own: people needed time pressure while completing the first task in order to disengage from it and do well on the next.",
      why: "For a designer it reframes interruptions. A notification does not cost the two seconds it takes to dismiss; it costs a period of degraded attention afterwards. It also argues for interfaces that let a task be closed off properly rather than abandoned.",
      how: [
        "Batch notifications rather than delivering them one at a time.",
        "Give tasks a clear finishing point, so people can close the loop before switching.",
        "Save state properly so a resumed task starts where it stopped, with context visible.",
        "Do not interrupt a focused task for something that could wait until it ends."
      ],
      example: "An email client that groups notifications into a periodic digest instead of pinging on every message.",
      numbers: "",
      pitfall: "Using it as a general argument against multitasking in a pitch. The finding is about switching between work tasks, not about every kind of interruption.",
      source: "Sophie Leroy, Why is it so hard to do my work? The challenge of attention residue when switching between work tasks, Organizational Behavior and Human Decision Processes 109(2), 168 to 181 (2009)",
      verify: { status: "verified", note: "Citation, journal, volume and pages confirmed against the ScienceDirect record. Corrected on 18 August 2026: an earlier draft said the residue was worse when there was time pressure on the earlier task, which reverses the paper. Its abstract states that time pressure while finishing a prior task is what allows people to disengage and raises performance on the next one. No effect sizes are quoted, because none were verified." },
      belongs: { verdict: "adjacent", why: "It comes from organisational behaviour, but it is the specific justification for notification batching, save-and-resume state and non-blocking interruption design." },
      related: [182, 217, 208]
    },
    {
      n: 221,
      title: "Choice overload",
      aka: ["Overchoice", "The paradox of choice"],
      oneLine: "The claim that too many options reduce the likelihood of choosing, which holds only under specific conditions.",
      demo: {
        caption: "Both panels hold the same twenty-four options. Only the grouping changed, and only the right one can be scanned.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Twenty-four, unsorted</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Apricot</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Lemon</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Blackberry</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Fig</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Cherry</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Rhubarb</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Blueberry</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Plum</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Ginger</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Strawberry</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Damson</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Orange</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Raspberry</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Quince</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Peach</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Lime</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Redcurrant</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Sloe</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Grapefruit</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Nectarine</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Blackcurrant</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Greengage</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Loganberry</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Gooseberry</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">The same twenty-four, grouped</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div><span class=\"db-label\">Berry</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Blackberry</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Blackcurrant</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Blueberry</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Gooseberry</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Loganberry</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Raspberry</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Redcurrant</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Strawberry</span></div></div><div><span class=\"db-label\">Stone fruit</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Apricot</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Cherry</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Damson</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Greengage</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Nectarine</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Peach</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Plum</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Sloe</span></div></div><div><span class=\"db-label\">Citrus and other</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Fig</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Ginger</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Grapefruit</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Lemon</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Lime</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Orange</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Quince</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Rhubarb</span></div></div></div></div></div></div>"
      },
      what: "Iyengar and Lepper's supermarket study is the famous one: a tasting table with 24 jams drew more visitors than one with 6, but 30 per cent of shoppers at the small display bought jam against 3 per cent at the large one. The generalisation did not survive. Scheibehenne, Greifeneder and Todd's 2010 meta-analysis of 63 conditions from 50 experiments found a mean effect of virtually zero with large variance between studies. Chernev, Bockenholt and Goodman's 2015 meta-analysis reached a similar overall picture and identified moderating conditions under which overload does appear, including choice set complexity, decision task difficulty, preference uncertainty and the decision goal.",
      why: "The useful reading is not that more options are always bad, but that unstructured options are. If people cannot compare items or do not know what they want, adding options hurts. If the set is well organised and preferences are clear, it usually does not.",
      how: [
        "Structure large sets with categories, filters and sensible defaults rather than cutting them arbitrarily.",
        "Make options comparable on the same attributes, in the same order.",
        "Offer a recommended option for people who have no formed preference.",
        "Reduce the count only where the options genuinely overlap."
      ],
      example: "The 2000 jam study, which is worth citing accurately: one field experiment with a large effect, not a general law.",
      numbers: "Iyengar and Lepper (2000): 30 per cent purchase from the 6-jam display versus 3 per cent from the 24-jam display, N = 249. Scheibehenne et al. (2010): 63 conditions from 50 experiments, N = 5,036, mean effect size close to zero.",
      pitfall: "Cutting a product range or a menu on the strength of the jam study alone. The meta-analytic evidence does not support that as a general move.",
      source: "Sheena Iyengar and Mark Lepper, When Choice is Demotivating, Journal of Personality and Social Psychology (2000); Benjamin Scheibehenne, Rainer Greifeneder and Peter Todd, Can There Ever Be Too Many Options?, Journal of Consumer Research 37(3), 409 to 425 (2010); Alexander Chernev, Ulf Bockenholt and Joseph Goodman, Choice overload: A conceptual review and meta-analysis, Journal of Consumer Psychology 25(2), 333 to 358 (2015)",
      verify: { status: "disputed", note: "Real effect, wildly overgeneralised. Purchase percentages and N = 249 read from the Iyengar and Lepper paper text. The 2010 meta-analysis figures (63 conditions, 50 experiments, N = 5,036, mean effect near zero) come from its published abstract, and the Chernev et al. 2015 moderators from the paper record." },
      belongs: { verdict: "adjacent", why: "It is consumer psychology rather than a design fundamental, but it bears directly on assortment, menu and pricing-table decisions, so long as the caveats travel with it." },
      related: [222, 223, 226]
    },
    {
      n: 222,
      title: "Decision fatigue",
      aka: ["Ego depletion", "The hungry judges effect"],
      oneLine: "The claim that making decisions drains a finite resource, which large replications shrink to almost nothing.",
      demo: {
        caption: "Two multi-lab replications on one scale. The dashed line is zero, and Hagger's interval sits right across it.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 112\"><path class=\"s-mute\" d=\"M76 86 H292\"/><path class=\"s-mute\" d=\"M76 86 V90 M148 86 V90 M220 86 V90 M292 86 V90\"/><path class=\"s-mute\" d=\"M148 16 V86\" stroke-dasharray=\"3 3\"/><path class=\"s\" d=\"M123 36 H202 M123 31 V41 M202 31 V41\"/><circle class=\"f-accent\" cx=\"162\" cy=\"36\" r=\"4\"/><circle class=\"f-accent\" cx=\"184\" cy=\"62\" r=\"4\"/><text class=\"t\" x=\"6\" y=\"39\">Hagger 2016</text><text class=\"t\" x=\"6\" y=\"65\">Dang 2021</text><text class=\"t\" x=\"66\" y=\"100\">-0.2</text><text class=\"t\" x=\"145\" y=\"100\">0</text><text class=\"t\" x=\"212\" y=\"100\">0.2</text><text class=\"t\" x=\"284\" y=\"100\">0.4</text><text class=\"t\" x=\"214\" y=\"112\">effect size d</text></svg></div>"
      },
      what: "The idea rests on two much-cited results. Baumeister's ego depletion research proposed a depletable pool of self-control, and Danziger and colleagues reported in 2011 that Israeli parole judges granted parole less often as a session wore on. Both have been challenged. A 23-laboratory preregistered replication led by Hagger in 2016, with 2,141 participants, found an effect of d = 0.04 with a confidence interval straddling zero. A second multi-lab replication led by Dang in 2021 did find a small effect, d = 0.10, so the honest summary is that any effect is far smaller than the original literature claimed. Weinshall-Margel and Shapard argued the parole case ordering was not random, and Glockner's simulation work in 2016 concluded the size of the hungry judge effect is overestimated.",
      why: "This matters because the design advice attached to it, such as reducing the number of decisions in a flow, is usually good advice that does not need this justification. Cognitive load and working memory limits explain the same thing with evidence behind them.",
      how: [
        "Reduce unnecessary decisions in a flow, but justify it by load and by task clarity.",
        "Provide sensible defaults so a decision is only required when it matters.",
        "Order decisions so the ones needing most thought come while context is fresh.",
        "Do not cite decision fatigue in a client deck as an established finding."
      ],
      example: "A long insurance quote form with forty optional choices. Trimming it helps, but the reason is load and irrelevance, not a depleted battery.",
      numbers: "Hagger et al. (2016): 23 laboratories, N = 2,141, ego depletion effect d = 0.04, 95 per cent confidence interval minus 0.07 to 0.15. Dang et al. (2021), a second multi-lab replication using a different task, reported d = 0.10.",
      pitfall: "Building a persuasion argument on it. If a client checks the literature, the claim will not hold.",
      source: "Shai Danziger, Jonathan Levav and Liora Avnaim-Pesso, PNAS (2011); Martin Hagger et al., A Multilab Preregistered Replication of the Ego-Depletion Effect, Perspectives on Psychological Science 11(4), 546 to 573 (2016); Junhua Dang et al., A Multilab Replication of the Ego Depletion Effect, Social Psychological and Personality Science (2021); Andreas Glockner, Judgment and Decision Making (2016)",
      verify: { status: "disputed", note: "Hagger et al. 2016 confirmed via the PubMed abstract: k = 23, N = 2,141, d = 0.04, 95 per cent CI minus 0.07 to 0.15. Corrected on 17 August 2026: an earlier draft called this a null effect full stop, which overstates it, and omitted Dang et al.'s later multi-lab replication reporting a small but significant d = 0.10. The Weinshall-Margel and Shapard critique of case ordering and Glockner's simulation paper questioning the magnitude of the hungry judge effect were both confirmed via their published records. The verdict stands: the effect is far too small and too contested to build design arguments on." },
      belongs: { verdict: "cut", why: "The underlying research has not replicated, and every practical recommendation attached to it is better supported by cognitive load (207 and 208) and Hick-Hyman (226). Use those instead." },
      related: [207, 221, 226]
    },
    {
      n: 223,
      title: "Satisficing",
      aka: ["Good enough choice", "Bounded rationality"],
      oneLine: "People take the first option that is good enough rather than searching for the best one.",
      demo: {
        caption: "Options in the order met. The first to clear the line is taken; the better ones later are never opened.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 128\"><path class=\"s-mute\" d=\"M34 14 V96 H300\"/><path class=\"s-accent\" d=\"M34 60 H300\" stroke-dasharray=\"4 3\"/><path class=\"s-mute\" d=\"M141 14 V96\" stroke-dasharray=\"3 3\"/><circle class=\"f-mute\" cx=\"56\" cy=\"76\" r=\"4\"/><circle class=\"f-mute\" cx=\"90\" cy=\"68\" r=\"4\"/><circle class=\"f-accent\" cx=\"124\" cy=\"48\" r=\"5.5\"/><circle class=\"s-mute\" cx=\"158\" cy=\"30\" r=\"4\"/><circle class=\"s-mute\" cx=\"192\" cy=\"24\" r=\"4\"/><circle class=\"s-mute\" cx=\"226\" cy=\"52\" r=\"4\"/><circle class=\"s-mute\" cx=\"260\" cy=\"70\" r=\"4\"/><text class=\"t\" x=\"34\" y=\"10\">quality</text><text class=\"t\" style=\"fill:var(--accent)\" x=\"40\" y=\"54\">good enough</text><text class=\"t\" x=\"98\" y=\"40\">chosen</text><text class=\"t\" x=\"146\" y=\"10\">search stops</text><text class=\"t\" x=\"196\" y=\"88\">not looked at</text><text class=\"t\" x=\"34\" y=\"116\">order encountered</text></svg></div>"
      },
      what: "Herbert Simon coined the term as part of his account of bounded rationality: real decision makers have limited information, limited time and limited attention, so they set a threshold and stop searching once something clears it. Applied to interfaces, it means users click the first link that looks plausibly right rather than reading all the options and choosing well.",
      why: "It changes what a navigation label is for. It does not need to be the most accurate description; it needs to be recognisably plausible for the person's goal, because plausibility is what gets clicked. It also means users will not notice a better path further down the page.",
      how: [
        "Write links and buttons that state the outcome plainly, so plausibility is easy to judge.",
        "Put the most likely choice where it will be encountered first.",
        "Make going back cheap, because satisficing produces wrong first guesses.",
        "Do not hide the best option behind a more accurate but less obvious label."
      ],
      example: "A user looking for opening hours clicking Contact rather than About, because Contact clears the good-enough threshold first.",
      numbers: "",
      pitfall: "Optimising a label for internal accuracy. If it does not look plausible at a glance, the more precise wording loses to the vaguer one above it.",
      source: "Herbert Simon, Rational Choice and the Structure of the Environment, Psychological Review 63, 129 to 138 (1956)",
      verify: { status: "verified", note: "Simon's 1956 Psychological Review paper is the standard citation for satisficing and bounded rationality; the concept is also summarised as the basis of information foraging by the Nielsen Norman Group. The design application is my own framing." },
      belongs: { verdict: "core", why: "It is the behaviour every navigation and label decision is designed against, and it is the reasoning behind the whole scannability tradition in web design." },
      related: [224, 225, 221]
    },
    {
      n: 224,
      title: "Information scent",
      aka: ["Scent of information", "Proximal cues"],
      oneLine: "The cues a link or heading gives about what lies behind it, which is how people decide where to go.",
      demo: {
        caption: "Same council, same four pages. Only the right list tells you which one has the pothole behind it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Departmental names</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--ghost\">Highways services</span><span class=\"db-btn db-btn--ghost\">Environmental services</span><span class=\"db-btn db-btn--ghost\">Neighbourhood management</span><span class=\"db-btn db-btn--ghost\">Corporate resources</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">What you came to do</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--ghost\">Report a pothole</span><span class=\"db-btn db-btn--ghost\">Report fly-tipping</span><span class=\"db-btn db-btn--ghost\">Report a street light</span><span class=\"db-btn db-btn--ghost\">Pay council tax</span></div></div></div></div>"
      },
      what: "Information scent is one of the three model families in Pirolli and Card's information foraging theory. It addresses how people judge the value of a source they cannot yet see, using proximal cues: the words in a link, the heading, the thumbnail, the surrounding context. Strong scent means the cue matches the goal closely. Weak scent means the user is guessing.",
      why: "Most navigation failures are scent failures. People do not get lost because the site map is wrong; they get lost because nothing on the page smells like what they came for, so they either guess or leave.",
      how: [
        "Use the user's words in links and headings, not internal or brand terminology.",
        "Make link text describe the destination; avoid Read more and Learn more as the whole label.",
        "Repeat the trigger word on the destination page so the scent is confirmed on arrival.",
        "Give category pages enough specific detail to show what is inside them."
      ],
      example: "A council website where Report a pothole carries far stronger scent than Highways services, even though the second is the accurate departmental name.",
      numbers: "",
      pitfall: "Clever or brand-flavoured navigation labels. Wit reduces scent, and reduced scent shows up as bounce and as calls to the helpline.",
      source: "Peter Pirolli and Stuart Card, Information Foraging, Psychological Review 106(4), 643 to 675 (1999)",
      verify: { status: "verified", note: "Confirmed against the published abstract of Pirolli and Card 1999, which names information scent models as addressing the identification of information value from proximal cues, and against the Nielsen Norman Group's applied account of the same theory." },
      belongs: { verdict: "core", why: "It is the working principle behind navigation labelling, link text and headings, which is a large part of what designers actually decide." },
      related: [225, 223, 177]
    },
    {
      n: 225,
      title: "Information foraging",
      aka: ["Information foraging theory", "IFT"],
      oneLine: "People hunt for information as animals hunt for food, taking the path with the best expected return for effort.",
      demo: {
        caption: "Same page, two orderings. The dashed line is the rate another page offers, and the lower curve stays under it.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 144\"><path class=\"s-mute\" d=\"M34 12 V96 H300\"/><path class=\"s-mute\" d=\"M34 96 L300 40\" stroke-dasharray=\"4 3\"/><path class=\"s-accent\" d=\"M34 96 C 76 40, 120 26, 300 22\"/><path class=\"s\" d=\"M34 96 C 170 92, 240 80, 300 22\"/><text class=\"t\" x=\"34\" y=\"8\">information gained</text><text class=\"t\" x=\"268\" y=\"108\">effort</text><path class=\"s-accent\" d=\"M14 118 H30\"/><text class=\"t\" x=\"34\" y=\"121\">answer first</text><path class=\"s\" d=\"M130 118 H146\"/><text class=\"t\" x=\"150\" y=\"121\">answer last</text><path class=\"s-mute\" d=\"M14 132 H30\" stroke-dasharray=\"4 3\"/><text class=\"t\" x=\"34\" y=\"135\">rate another page offers</text></svg></div>"
      },
      what: "Pirolli and Card built the theory at Xerox PARC by adapting optimal foraging models from behavioural ecology. It has three parts: information patch models, covering how long to stay in one place before moving on; information scent models, covering how value is judged from cues; and information diet models, covering which items are worth pursuing at all. People act to maximise useful information gained per unit of effort, with the limits Simon described.",
      why: "It explains behaviour that looks irrational from the inside of a project. Users abandon a page not because it lacks the answer but because the expected rate of return dropped below what another page seems to promise. It also predicts that people leave a patch sooner as better alternatives become easier to reach.",
      how: [
        "Reduce the cost side as well as raising the value side: fewer clicks, faster pages, less reading before the answer.",
        "Give a strong sense of what a page contains near the top, so the patch judgement is made on real information.",
        "Front-load the answer rather than building up to it.",
        "Treat competitors and search results as the alternative patch; your page is judged against them."
      ],
      example: "A support article that answers the question in the first sentence and puts the explanation below, rather than the reverse.",
      numbers: "",
      pitfall: "Reading it as a rule that fewer clicks always wins. What matters is the expected rate of gain, and one clearly signposted extra click can beat a cluttered single page.",
      source: "Peter Pirolli and Stuart Card, Information Foraging, Psychological Review 106(4), 643 to 675 (1999)",
      verify: { status: "verified", note: "The three model families are named in the published abstract of Pirolli and Card 1999: information patch models, information scent models and information diet models. The rate-of-gain framing is confirmed by the Nielsen Norman Group's account of the theory." },
      belongs: { verdict: "core", why: "It is the underlying model of how people move through content, and it sets the terms for navigation, page structure and content order." },
      related: [224, 223, 177]
    }
  ]
};
