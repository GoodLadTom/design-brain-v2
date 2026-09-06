window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[25] = {
  n: 25,
  slug: "product-design",
  title: "Product and industrial design",
  blurb: "Designing physical objects people hold, operate and eventually throw away or repair.",
  intro: "This family covers the part of design that has to survive contact with a body and a factory. It starts with measurements of real people, moves through the mechanics of grip, reach and control, and ends with what happens to the object after the sale. Much of it is written down in standards rather than books: ISO 7250 for body measurements, ISO 286 for fits, ISO 3864 for safety colours, ISO 14040 for life cycle assessment. The theory that is not in a standard mostly comes from two places, Henry Dreyfuss and the post-war human factors labs on one side, and Klaus Krippendorff's product semantics on the other. A screen designer can ignore all of it. Anyone drawing something that will be moulded, gripped or shipped cannot.",
  sources: [
    "Henry Dreyfuss, Designing for People (1955) and The Measure of Man (1960)",
    "Niels Diffrient, Alvin R. Tilley and Joan C. Bardagjy, Humanscale 1/2/3 (MIT Press, 1974)",
    "Gilbert S. Daniels, The \"Average Man\"?, WADC Technical Note 53-7 (December 1952)",
    "John Napier, The prehensile movements of the human hand, Journal of Bone and Joint Surgery 38-B(4), 902-913 (1956)",
    "James J. Gibson, The Ecological Approach to Visual Perception (1979); Donald Norman, The Design of Everyday Things (1988) and Affordance, conventions, and design, interactions 6(3), 38-43 (1999)",
    "Klaus Krippendorff and Reinhart Butter, Product Semantics: Exploring the Symbolic Qualities of Form, Innovation 3(2), 4-9 (1984)",
    "Paul M. Fitts and C. M. Seeger, S-R compatibility: spatial characteristics of stimulus and response codes, Journal of Experimental Psychology 46(3), 199-210 (1953); Alphonse Chapanis and Lionel E. Lindenbaum, A Reaction Time Study of Four Control-Display Linkages, Human Factors 1(4), 1-7 (1959)",
    "Liliana Becerra, CMF Design: The Fundamental Principles of Colour, Material and Finish Design (Frame Publishers, 2016)",
    "Geoffrey Boothroyd, Design for Assembly: A Designer's Handbook (1980); Boothroyd, Dewhurst and Knight, Product Design for Manufacture and Assembly",
    "Karl Ulrich, The role of product architecture in the manufacturing firm, Research Policy 24(3), 419-440 (1995)",
    "William McDonough and Michael Braungart, Cradle to Cradle: Remaking the Way We Make Things (2002)",
    "ISO 6385 (ergonomics principles), ISO 7250 (basic human body measurements), ISO 15535 (anthropometric databases), ISO 286 (limits and fits), ISO 2768-1 (general tolerances), ISO 3864 (safety colours and signs), ISO 13850 (emergency stop), IEC 60204-1 (electrical equipment of machines), NFPA 79 (electrical standard for industrial machinery), ISO 14040 and ISO 14044 (life cycle assessment)",
    "SAE J287, Driver Hand Control Reach (first issued 1976, current revision 2022)",
    "Regulation (EU) 2024/1781, Ecodesign for Sustainable Products Regulation",
    "Markus Krajewski, The Great Lightbulb Conspiracy, IEEE Spectrum (24 September 2014)"
  ],
  entries: [
    {
      n: 892,
      title: "Anthropometrics",
      aka: ["Body measurement data", "Human dimensions"],
      oneLine: "Designing to measured body dimensions of a stated population rather than to your own body.",
      demo: {
        caption: "One person on ten body dimensions. The band is the middle of each range; the dot leaves it five times.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 520 192\"><rect class=\"f-accent\" x=\"264\" y=\"26\" width=\"72\" height=\"146\" opacity=\"0.14\"/><text class=\"t\" x=\"264\" y=\"18\">THE MIDDLE OF EACH RANGE</text><path class=\"s-mute\" d=\"M120 36 H480 M120 50 H480 M120 64 H480 M120 78 H480 M120 92 H480 M120 106 H480 M120 120 H480 M120 134 H480 M120 148 H480 M120 162 H480\"/><text class=\"t\" x=\"112\" y=\"39\" text-anchor=\"end\">stature</text><text class=\"t\" x=\"112\" y=\"53\" text-anchor=\"end\">sitting height</text><text class=\"t\" x=\"112\" y=\"67\" text-anchor=\"end\">shoulder breadth</text><text class=\"t\" x=\"112\" y=\"81\" text-anchor=\"end\">chest depth</text><text class=\"t\" x=\"112\" y=\"95\" text-anchor=\"end\">waist girth</text><text class=\"t\" x=\"112\" y=\"109\" text-anchor=\"end\">arm length</text><text class=\"t\" x=\"112\" y=\"123\" text-anchor=\"end\">leg length</text><text class=\"t\" x=\"112\" y=\"137\" text-anchor=\"end\">hand length</text><text class=\"t\" x=\"112\" y=\"151\" text-anchor=\"end\">foot length</text><text class=\"t\" x=\"112\" y=\"165\" text-anchor=\"end\">head breadth</text><circle class=\"f-accent\" cx=\"343\" cy=\"36\" r=\"4.5\"/><circle class=\"f-mute\" cx=\"293\" cy=\"50\" r=\"4.5\"/><circle class=\"f-accent\" cx=\"376\" cy=\"64\" r=\"4.5\"/><circle class=\"f-mute\" cx=\"318\" cy=\"78\" r=\"4.5\"/><circle class=\"f-accent\" cx=\"239\" cy=\"92\" r=\"4.5\"/><circle class=\"f-mute\" cx=\"329\" cy=\"106\" r=\"4.5\"/><circle class=\"f-accent\" cx=\"397\" cy=\"120\" r=\"4.5\"/><circle class=\"f-mute\" cx=\"278\" cy=\"134\" r=\"4.5\"/><circle class=\"f-accent\" cx=\"217\" cy=\"148\" r=\"4.5\"/><circle class=\"f-mute\" cx=\"304\" cy=\"162\" r=\"4.5\"/><text class=\"t\" x=\"120\" y=\"186\">smaller</text><text class=\"t\" x=\"480\" y=\"186\" text-anchor=\"end\">larger</text></svg></div>"
      },
      what: "Anthropometrics is the practice of sizing objects against published measurements of human bodies: stature, sitting height, hand length, grip diameter, eye height. Henry Dreyfuss made it a design habit in the English-speaking world, first with the Joe and Josephine charts in Designing for People (1955) and then with the reference sheets of The Measure of Man (1960). Diffrient, Tilley and Bardagjy turned the same idea into the rotating Humanscale selectors published by MIT Press from 1974. The measurement side is now standardised: ISO 7250 defines which dimensions to take, ISO 15535 how to build a database of them.",
      why: "Designers default to their own reach, their own hand, their own eye height, and their own body is a sample of one. Working from a population table tells you who you are excluding before the tooling is cut, when it is still cheap to change.",
      how: [
        "Name the population first. Data for British adults, US military recruits and Japanese office workers are not interchangeable.",
        "Decide per dimension whether you are designing for a large user, a small user or an adjustable range. Clearance is usually set by the large user, reach by the small one.",
        "Prefer adjustment to a single fixed size wherever the mechanism can carry it.",
        "Check the age of your data. Body dimensions have shifted since the mid-century surveys."
      ],
      example: "Humanscale 1/2/3 (MIT Press, 1974): three double-sided card selectors that you rotate to read off body dimensions and clearances for a chosen percentile.",
      numbers: "ISO 7250 defines basic human body measurements for technological design. ISO 15535 sets general requirements for anthropometric databases.",
      pitfall: "Designing a whole product for the 50th percentile person. Gilbert Daniels tested that assumption for the US Air Force across ten body dimensions and found the average man to be an illusory basis for design criteria once more than one dimension is in play.",
      source: "Henry Dreyfuss, Designing for People (1955) and The Measure of Man (1960); ISO 7250; Gilbert S. Daniels, WADC Technical Note 53-7 (1952)",
      verify: { status: "verified", note: "Dreyfuss titles and dates checked on the Wikipedia entry for Henry Dreyfuss, which names Designing for People (1955), the Joe and Josephine charts and The Measure of Man (1960). Humanscale 1/2/3 confirmed as Diffrient, Tilley and Bardagjy, MIT Press 1974, from the MIT Press listing and the modernism101 bibliographic record. ISO 7250 and ISO 15535 listed in the Wikipedia anthropometry article's further reading. Daniels was rechecked this session against two independent records: a DTIC bibliography listing WADC Technical Note 53-7, The \"Average Man\"?, Daniels, G. S., December 1952, AD 10 203, and a NASA technical report archive stating that Daniels tested the average-man assumption using ten dimensions. I did not read the original report, so the sample size that circulates on blogs is still left out." },
      belongs: { verdict: "core", why: "Every physical product is sized against a body, whether or not the designer admits it, and the data exists in published form." },
      related: [893, 894, 895, 903]
    },
    {
      n: 893,
      title: "Ergonomics",
      aka: ["Human factors"],
      oneLine: "The discipline of fitting equipment, tasks and environments to human capabilities and limits.",
      demo: {
        caption: "The same force sits under the limit when it is occasional and over it when it is repeated all shift.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 520 196\"><path class=\"s-mute\" d=\"M70 24 V162 H480\"/><text class=\"t\" x=\"70\" y=\"16\">FORCE</text><text class=\"t\" x=\"480\" y=\"178\" text-anchor=\"end\">REPETITIONS PER HOUR</text><path class=\"s-accent\" d=\"M70 44 C 200 60, 240 120, 470 140\"/><text class=\"t\" x=\"200\" y=\"52\">acceptable limit</text><path class=\"s-mute\" d=\"M70 96 H470\" stroke-dasharray=\"4 4\"/><text class=\"t\" x=\"74\" y=\"86\">force the task needs</text><circle class=\"f-mute\" cx=\"140\" cy=\"96\" r=\"5\"/><text class=\"t\" x=\"140\" y=\"114\" text-anchor=\"middle\">now and then</text><circle class=\"f-accent\" cx=\"400\" cy=\"96\" r=\"5\"/><text class=\"t\" x=\"400\" y=\"84\" text-anchor=\"middle\">all shift</text></svg></div>"
      },
      what: "The International Ergonomics Association defines ergonomics as the study of the interaction between humans and other elements of a system, and the profession that applies that understanding to design in order to improve human well-being and system performance. ISO 6385 carries a near-identical wording. The field splits into three domains: physical ergonomics, covering posture, force, repetition and body dimensions; cognitive ergonomics, covering perception, memory, workload and decision-making; and organisational ergonomics, covering how work itself is structured. Industrial design borrows mainly from the first, and interaction design from the second.",
      why: "Ergonomics turns comfort from an opinion into something you can specify and test. It also puts a floor under the design: below a certain grip force, reach distance or legible character height, the product stops working for a measurable slice of the people who bought it.",
      how: [
        "Say which domain you are designing for. A posture problem and a workload problem have different fixes.",
        "Test with people at the edges of your population, not with the design team.",
        "Treat repetition and duration as design variables. A force that is fine once an hour is an injury eight hours a day.",
        "Write the ergonomic requirement into the brief as a number, not as the word comfortable."
      ],
      example: "An office chair specified against a seat-height range, a lumbar support range and an armrest range rather than a single fixed geometry, so that both a short and a tall user can reach a neutral posture.",
      numbers: "ISO 6385 sets out ergonomics principles in the design of work systems. The IEA's three domains are physical, cognitive and organisational.",
      pitfall: "Treating ergonomics as a late review that adds padding and a rubber grip. The decisions that matter, such as where the hand goes and how much force the mechanism needs, are made in the first week.",
      source: "International Ergonomics Association definition; ISO 6385",
      verify: { status: "verified", note: "IEA definition and the three domains checked against the Wikipedia article on human factors and ergonomics, which quotes both the IEA wording and the near-identical ISO 6385 definition. I did not read ISO 6385 itself, which is paywalled, so I have not quoted clause numbers." },
      belongs: { verdict: "core", why: "It is the parent discipline for most of this section and the source of the data a product designer works from." },
      related: [892, 894, 895, 906]
    },
    {
      n: 894,
      title: "Reach envelopes",
      aka: ["Reach zones", "Normal and maximum working area", "Reach capability surface"],
      oneLine: "The mapped volume a seated or standing user can reach without moving the trunk.",
      demo: {
        caption: "Two arcs from the shoulders. Controls used often belong inside the forearm sweep; set-once controls can sit beyond it.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 520 252\"><path class=\"s-mute\" d=\"M54 206 A168 168 0 0 1 390 206\"/><path class=\"s-mute\" d=\"M130 206 A168 168 0 0 1 466 206\"/><path class=\"s-accent\" d=\"M130 206 A92 92 0 0 1 314 206\"/><path class=\"s-accent\" d=\"M206 206 A92 92 0 0 1 390 206\"/><path class=\"s\" d=\"M30 206 H490\"/><circle class=\"f-mute\" cx=\"260\" cy=\"220\" r=\"15\"/><circle class=\"f-mute\" cx=\"222\" cy=\"206\" r=\"4\"/><circle class=\"f-mute\" cx=\"298\" cy=\"206\" r=\"4\"/><text class=\"t\" x=\"260\" y=\"248\" text-anchor=\"middle\">USER AT THE BENCH EDGE</text><text class=\"t\" x=\"260\" y=\"30\" text-anchor=\"middle\">MAXIMUM: WHOLE ARM</text><text class=\"t\" x=\"260\" y=\"108\" text-anchor=\"middle\">NORMAL: FOREARM SWEEP</text><circle class=\"f-accent\" cx=\"260\" cy=\"150\" r=\"6\"/><text class=\"t\" x=\"274\" y=\"153\">used often</text><circle class=\"f-mute\" cx=\"400\" cy=\"160\" r=\"6\"/><text class=\"t\" x=\"412\" y=\"164\">set once</text><circle class=\"s-mute\" cx=\"470\" cy=\"80\" r=\"6\"/><text class=\"t\" x=\"478\" y=\"64\" text-anchor=\"end\">out of reach</text></svg></div>"
      },
      what: "A reach envelope is the three-dimensional surface describing where a hand can get to from a fixed body position. Ralph Barnes split the flat version into two zones: the normal working area, swept by the forearm with the upper arm hanging naturally, and the maximum working area, swept by the whole extended arm from the shoulder. Vehicle work uses the three-dimensional version. SAE J287, Driver Hand Control Reach, describes boundaries of hand control locations that can be reached by a stated percentage of a driver population, given a seating configuration, and gives separate envelopes for three-finger, extended-finger and full-hand grasp.",
      why: "Reach ranks the controls for you. Anything used often, or in a hurry, belongs in the near zone; anything used rarely can sit further out. It also settles arguments about dashboard and workbench layout with a surface rather than an opinion.",
      how: [
        "Place frequently used and safety-critical controls inside the normal zone, and set-once controls outside it.",
        "Take the reach envelope from the smallest user you are designing for, not the average.",
        "Check the envelope in the real posture, including seat belt, gloves, apron or protective clothing.",
        "State the grasp type. Reaching a control with a fingertip is not the same as gripping and turning it."
      ],
      example: "SAE J287 reach surfaces, used to check that a driver of a stated percentile can reach a dashboard control from the seated driving position.",
      numbers: "SAE J287 gives hand reach envelopes for three-finger, extended-finger and full-hand grasp, referenced to a vehicle seating configuration. Issued July 1976; current revision November 2022.",
      pitfall: "Drawing the envelope from a standing model and then applying it to a seated task, or forgetting that the reach surface shrinks when the user has to keep their eyes on something else.",
      source: "Ralph M. Barnes, Motion and Time Study (normal and maximum working areas); SAE J287, Driver Hand Control Reach",
      verify: { status: "verified", note: "SAE J287 was rechecked this session. The SAE Mobilus record for J287_200702 states the recommended practice was issued July 1976, and the GlobalSpec record for J287_202211 dates the current revision 18 November 2022 and describes it as boundaries of hand control locations reachable by a stated percentage of a driver population; the published 2022 revision notes only minor editorial corrections to the definitions under SAE's five-year review. The three grasp types are from the SAE listings and the recommended practice PDF. Barnes's normal and maximum working areas confirmed from the Springer chapter Ergonomic Data for Console Design by William H. Cushman, which attributes both definitions to Barnes." },
      belongs: { verdict: "core", why: "Control placement in any physical product or workstation is decided by reach, and there is a published surface to decide it against." },
      related: [892, 893, 895, 906]
    },
    {
      n: 895,
      title: "Grip and control design",
      aka: ["Handle design", "Power grip and precision grip"],
      oneLine: "Shaping handles and controls around how the hand actually holds things.",
      demo: {
        caption: "Six cylinder diameters, 25 to 50 mm. Kong and Lowe found the shaded middle three rated most comfortable.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 520 162\"><rect class=\"f-accent\" x=\"82\" y=\"24\" width=\"232\" height=\"96\" opacity=\"0.12\"/><text class=\"t\" x=\"82\" y=\"16\">RATED MOST COMFORTABLE</text><circle class=\"s\" cx=\"50\" cy=\"72\" r=\"20\"/><circle class=\"s\" cx=\"114\" cy=\"72\" r=\"24\"/><circle class=\"s\" cx=\"186\" cy=\"72\" r=\"28\"/><circle class=\"s\" cx=\"266\" cy=\"72\" r=\"32\"/><circle class=\"s\" cx=\"354\" cy=\"72\" r=\"36\"/><circle class=\"s\" cx=\"450\" cy=\"72\" r=\"40\"/><text class=\"t\" x=\"50\" y=\"136\" text-anchor=\"middle\">25</text><text class=\"t\" x=\"114\" y=\"136\" text-anchor=\"middle\">30</text><text class=\"t\" x=\"186\" y=\"136\" text-anchor=\"middle\">35</text><text class=\"t\" x=\"266\" y=\"136\" text-anchor=\"middle\">40</text><text class=\"t\" x=\"354\" y=\"136\" text-anchor=\"middle\">45</text><text class=\"t\" x=\"450\" y=\"136\" text-anchor=\"middle\">50</text><text class=\"t\" x=\"30\" y=\"156\">DIAMETER IN MM</text><text class=\"t\" x=\"490\" y=\"156\" text-anchor=\"end\">KONG AND LOWE, 2005</text></svg></div>"
      },
      what: "John Napier's 1956 paper split human prehension into two patterns: the power grip, where the object is clamped between the flexed fingers and the palm with the thumb applying counter-pressure, and the precision grip, where it is pinched between thumb and fingertips. Almost every handle decision follows from which of the two you are designing for. Power grips want a diameter the fingers can wrap without overlapping; precision grips want a smaller section the fingertips can register against. Kong and Lowe tested aluminium cylinders from 25 to 50 mm with 24 participants and found the middle sizes rated most comfortable for maximum grip exertion.",
      why: "Get the grip pattern wrong and the user compensates with force, which is where discomfort and repetitive strain come from. Get it right and the tool feels obvious in the hand before anyone reads the label.",
      how: [
        "Decide the grip pattern first, then the section. Do not design a shape and hope the hand adapts.",
        "Size power-grip handles around 40 mm, which is the CCOHS general figure inside its 30 to 50 mm band, and work off hand length instead once you have the data.",
        "Avoid finger grooves. They fit one hand size and fight every other.",
        "Keep the grip axis in line with the force the user has to apply, so the wrist stays neutral."
      ],
      example: "A screwdriver with a broad barrel for the power grip and a knurled collar near the tip for the precision grip used when starting a screw.",
      numbers: "Kong and Lowe (2005) found 30, 35 and 40 mm cylindrical handles rated significantly more comfortable than smaller or larger ones, with the comfort-maximising diameter calculated at 19.7 per cent of hand length. CCOHS guidance gives 30 to 50 mm for a power grip, with 40 mm as a general figure.",
      pitfall: "Copying a competitor's handle section without knowing which grip it was designed for. A precision-grip section on a tool that needs torque forces the user to squeeze harder than the task requires.",
      source: "John Napier, The prehensile movements of the human hand, Journal of Bone and Joint Surgery 38-B(4), 902-913 (1956); Yong-Ku Kong and Brian D. Lowe, Optimal cylindrical handle diameter for grip force tasks, International Journal of Industrial Ergonomics 35(6), 495-507 (2005)",
      verify: { status: "verified", note: "Napier citation confirmed on PubMed (PMID 13376678) and the Bone and Joint journal record, both giving J Bone Joint Surg Br 1956 Nov;38-B(4):902-13. Kong and Lowe was checked twice this session: the ScienceDirect record gives International Journal of Industrial Ergonomics volume 35 issue 6, June 2005, pages 495-507, and the full paper was then read from the CDC Stacks copy. It confirms 24 subjects, six aluminium handles from 25 to 50 mm, 30/35/40 mm rated significantly more comfortable by Tukey comparison, 50 mm least comfortable, an optimal normalised handle size of 61.8 per cent of hand length which works out at 19.7 per cent of hand length as a diameter, and a recommended diameter table running 31.5 to 40.3 mm across hand sizes and sexes. The CCOHS hand tool ergonomics page gives 40 mm as the general power-grip figure within a 30 to 50 mm range; the sizing step now leads with 40 mm, because the earlier wording pointed at the top of a band whose upper end this study rated worst." },
      belongs: { verdict: "core", why: "Any object held in the hand is designed around one of two grip patterns, and the handle section follows from that choice." },
      related: [892, 893, 894, 896, 903]
    },
    {
      n: 896,
      title: "Physical affordance",
      aka: ["Real affordance", "Perceived affordance"],
      oneLine: "What an object physically permits a body to do with it, whether or not that is visible.",
      demo: {
        caption: "Both are the push side. The bar invites a pull, so it needs a sign; the plate only allows a push.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Bar on the push side</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 160\"><text class=\"t\" x=\"100\" y=\"10\" text-anchor=\"middle\">PUSH SIDE</text><rect class=\"s-mute\" x=\"30\" y=\"14\" width=\"140\" height=\"132\"/><rect class=\"s\" x=\"36\" y=\"20\" width=\"128\" height=\"120\"/><rect class=\"f-mute\" x=\"33\" y=\"44\" width=\"6\" height=\"12\"/><rect class=\"f-mute\" x=\"33\" y=\"104\" width=\"6\" height=\"12\"/><rect class=\"f-mute\" x=\"134\" y=\"58\" width=\"8\" height=\"4\"/><rect class=\"f-mute\" x=\"134\" y=\"98\" width=\"8\" height=\"4\"/><rect class=\"f-mute\" x=\"140\" y=\"54\" width=\"7\" height=\"52\" rx=\"3\"/><rect class=\"s-mute\" x=\"58\" y=\"66\" width=\"56\" height=\"22\"/><text class=\"t\" x=\"86\" y=\"81\" text-anchor=\"middle\">PUSH</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Plate on the push side</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 160\"><text class=\"t\" x=\"100\" y=\"10\" text-anchor=\"middle\">PUSH SIDE</text><rect class=\"s-mute\" x=\"30\" y=\"14\" width=\"140\" height=\"132\"/><rect class=\"s\" x=\"36\" y=\"20\" width=\"128\" height=\"120\"/><rect class=\"f-mute\" x=\"33\" y=\"44\" width=\"6\" height=\"12\"/><rect class=\"f-mute\" x=\"33\" y=\"104\" width=\"6\" height=\"12\"/><rect class=\"f-mute\" x=\"124\" y=\"50\" width=\"30\" height=\"60\"/></svg></div></div></div>"
      },
      what: "James Gibson coined affordance in 1979 for what an environment offers an animal: a surface at knee height affords sitting to a human, whatever anyone intended. Donald Norman borrowed the word for design in 1988 and narrowed it to action possibilities the user can perceive. He corrected himself in 1999, separating real affordances from perceived affordances, and by the 2013 revision of The Design of Everyday Things he had added signifiers for the marks that tell you where to act. His own summary: affordances determine what actions are possible, signifiers communicate where the action should take place.",
      why: "In physical products the two kinds usually coincide, and the reward for getting them to coincide is a control nobody has to be taught. A handle that is shaped only for pulling removes the need for a PUSH sign.",
      how: [
        "Make the shape do the instruction. A flat plate affords pushing; a bar affords pulling.",
        "Where the affordance is real but invisible, add a signifier rather than hoping the user guesses.",
        "Remove false affordances. A recessed panel that looks like a door but is not will be pulled at.",
        "Test by handing the object to someone cold and watching what they try first."
      ],
      example: "A door with a flat plate on the push side and a vertical bar on the pull side, so the hand is committed to the right action before the eye reaches any signage.",
      numbers: "",
      pitfall: "Using affordance loosely to mean any visual hint. Norman spent a 1999 article arguing that a graphic which merely suggests clicking is a convention, not an affordance, and the sloppy usage has outlived the correction.",
      source: "James J. Gibson, The Ecological Approach to Visual Perception (1979); Donald Norman, The Design of Everyday Things (1988), Affordance, conventions, and design, interactions 6(3), 38-43 (1999), and the 2013 revised edition",
      verify: { status: "verified", note: "Chronology checked against the Wikipedia affordance article, which gives Gibson's 1979 definition, Norman's 1988 narrowing, his later acknowledgement that the restriction was unintended, and the signifier distinction in the 2013 edition with the quoted line. The 1999 article citation confirmed at ACM Digital Library, interactions volume 6 issue 3, pages 38-43, and Norman's own jnd.org posting of the piece." },
      belongs: { verdict: "core", why: "It is the mechanism by which a physical form tells a user what to do, and the vocabulary designers argue in." },
      related: [897, 905, 906, 907]
    },
    {
      n: 897,
      title: "Tactility and material honesty",
      aka: ["Truth to materials", "Material authenticity"],
      oneLine: "Using a material for what it is good at and letting it look and feel like itself.",
      demo: {
        caption: "Same panel, cut edge showing. Left, the printed grain stops at the corner. Right, it runs through the timber.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Printed to imitate timber</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 152\"><path class=\"f-mute\" opacity=\"0.3\" d=\"M20 52 L200 52 L216 34 L36 34 Z\"/><path class=\"s\" d=\"M20 52 L200 52 L216 34 L36 34 Z\"/><rect class=\"s\" x=\"20\" y=\"52\" width=\"180\" height=\"76\"/><path class=\"s-mute\" d=\"M30 66 C 76 62, 124 72, 194 66 M30 82 C 80 78, 130 88, 194 82 M30 98 C 76 94, 124 104, 194 98 M30 114 C 80 110, 130 118, 194 114\"/><circle class=\"f-mute\" cx=\"50\" cy=\"46\" r=\"1.6\"/><circle class=\"f-mute\" cx=\"68\" cy=\"40\" r=\"1.6\"/><circle class=\"f-mute\" cx=\"86\" cy=\"45\" r=\"1.6\"/><circle class=\"f-mute\" cx=\"104\" cy=\"39\" r=\"1.6\"/><circle class=\"f-mute\" cx=\"122\" cy=\"45\" r=\"1.6\"/><circle class=\"f-mute\" cx=\"140\" cy=\"40\" r=\"1.6\"/><circle class=\"f-mute\" cx=\"158\" cy=\"46\" r=\"1.6\"/><circle class=\"f-mute\" cx=\"176\" cy=\"41\" r=\"1.6\"/><circle class=\"f-mute\" cx=\"192\" cy=\"45\" r=\"1.6\"/><path class=\"s-accent\" d=\"M22 50 H202\"/><path class=\"s-accent\" d=\"M96 26 L118 47\"/><text class=\"t\" x=\"20\" y=\"26\">PRINTED FOIL</text><text class=\"t\" x=\"20\" y=\"146\">PARTICLE CORE UNDER THE FACE</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Solid timber</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 152\"><path class=\"f-mute\" opacity=\"0.3\" d=\"M20 52 L200 52 L216 34 L36 34 Z\"/><path class=\"s\" d=\"M20 52 L200 52 L216 34 L36 34 Z\"/><rect class=\"s\" x=\"20\" y=\"52\" width=\"180\" height=\"76\"/><path class=\"s-mute\" d=\"M30 66 C 76 62, 124 72, 194 66 M30 82 C 80 78, 130 88, 194 82 M30 98 C 76 94, 124 104, 194 98 M30 114 C 80 110, 130 118, 194 114\"/><path class=\"s-mute\" d=\"M28 47 C 76 44, 124 50, 198 45 M40 40 C 88 37, 136 43, 208 38\"/><text class=\"t\" x=\"20\" y=\"26\">GRAIN RUNS THROUGH</text><text class=\"t\" x=\"20\" y=\"146\">ONE MATERIAL ALL THE WAY</text></svg></div></div></div>"
      },
      what: "Two ideas sit under this heading. Tactility is the plain craft question of how a surface feels: temperature, weight, friction, the sound a catch makes. Material honesty is a doctrine, and a contested one. Ruskin's Lamp of Truth, in The Seven Lamps of Architecture (1849), argued against veneers, concealed supports and machined mouldings pretending to be handwork. Modernism carried the same argument into products and buildings, leaving concrete unpainted so the shuttering marks show. Adolf Loos took a different line in The Principle of Cladding (1898): cladding is legitimate and ancient, but the cladding material must never imitate the colour of the material beneath it.",
      why: "Materials carry information through the hand. Cold, dense and smooth reads differently from warm, light and matt, and users judge quality from that before they judge the styling. The honesty argument matters because imitation finishes tend to age badly and to be found out.",
      how: [
        "Specify how a surface should feel, not just how it should look, and prototype in the real material.",
        "If a material is doing structural work, consider showing it rather than covering it.",
        "Avoid printed grains and mouldings that mimic a material the object is not made from.",
        "Use finish to mark function: a different texture on the part meant to be gripped."
      ],
      example: "Beton brut, the unpainted concrete of Brutalist buildings, which keeps the timber shuttering marks visible instead of rendering over them.",
      numbers: "",
      pitfall: "Treating honesty as a rule rather than a position. Loos and Ruskin disagreed about it in print, and a designer who bans all cladding will also ban veneers and coatings that are functionally sensible.",
      source: "John Ruskin, The Seven Lamps of Architecture (1849), the Lamp of Truth; Adolf Loos, The Principle of Cladding (1898)",
      verify: { status: "disputed", note: "Ruskin's 1849 publication date and the Lamp of Truth's argument against veneers, hidden supports and machined mouldings checked on the Wikipedia article for The Seven Lamps of Architecture. Loos's 1898 essay and the rule that cladding must not imitate the underlying material's colour checked on the designmanifestos.org transcription of the essay. Marked disputed because truth to materials is a stylistic doctrine argued over by named figures, not a finding, and the Wikipedia entry on truth to materials is a stub with no attribution." },
      belongs: { verdict: "core", why: "Material and finish choices are made on every physical product, and the honesty argument is the main critical frame designers use to judge them." },
      related: [7, 883, 896, 911]
    },
    {
      n: 9897,
      title: "Colour, material and finish (CMF)",
      aka: ["CMF design", "Colour and trim"],
      oneLine: "The specification discipline that fixes every colour, substrate and surface treatment on a product.",
      demo: {
        caption: "Three substrates matched under one light. Under another the same three parts drift apart, which is metamerism.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Under the showroom light</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#6e7b74\"></span><span class=\"db-note\">ABS</span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#6e7b74\"></span><span class=\"db-note\">glass</span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#6e7b74\"></span><span class=\"db-note\">alloy</span></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Under daylight</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#6e7b74\"></span><span class=\"db-note\">ABS</span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#767a6a\"></span><span class=\"db-note\">glass</span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#657e7e\"></span><span class=\"db-note\">alloy</span></span></div></div></div></div>"
      },
      what: "CMF is the industrial design speciality concerned with the chromatic, tactile and decorative identity of products: what each part is made from, what colour it is, and what happens to its surface through gloss level, texture, plating, anodising, soft-touch coating or print. It is a specification job as much as a taste job, because every choice has to survive a process. A colour has to be matchable in two different polymers moulded by two different suppliers, and a texture has to be achievable in the tool. It is usually planned across a whole product range at once rather than product by product, through a colour matrix and a CMF manual that several designers work to, so that products from different hands and different suppliers still read as one brand.",
      why: "CMF is where most of the perceived quality of a mass-produced object lives. Two products with identical geometry can read as premium or cheap purely on the substrate, the gloss level and how well the colours match across parts.",
      how: [
        "Build a physical CMF board with real mouldings and real plaques, not screen renders.",
        "Specify colour against a measurable reference and a tolerance, not a name.",
        "Check every colour in two lighting conditions, because metamerism makes matched parts diverge under different light.",
        "Confirm the texture with the toolmaker before signing it off. Not every texture can be drawn out of every tool."
      ],
      example: "A phone range offered in several finishes where the plastic, glass and metal parts have to match in colour despite being different substrates from different suppliers.",
      numbers: "",
      pitfall: "Approving CMF from renders. Screen colour, screen gloss and screen texture are all lies, and the mismatch only appears when the first mouldings arrive.",
      source: "Liliana Becerra, CMF Design: The Fundamental Principles of Colour, Material and Finish Design (Frame Publishers, 2016); no originating standard",
      verify: { status: "adjusted", note: "This entry previously said CMF had no identifiable reference text. That was too weak. Wikipedia carries a CMF design article, filed under industrial design, which defines CMF as the area of industrial design concerned with the chromatic, tactile and decorative identity of products and environments, and which describes the colour matrix and the CMF design manual as the tools used to plan a whole range at once. Its cited reference is Becerra, CMF Design: The Fundamental Principles of Colour, Material and Finish Design, Frame Publishers, 2016. Status is adjusted rather than verified because that Wikipedia article carries standing maintenance tags for missing citations and possible original research, and because there is no originating standard or single coining to point at. The claim that CMF is run as a named role with seasonal libraries has been dropped as unsourced; the range-level planning that replaced it is what the article actually describes. The manufacturing mechanics here, such as colour tolerance and mould texture, are ordinary practice. Added as a gap entry: the master list covers tactility and material honesty at 897 and sustainable material choice at 911, but not the specification discipline between them." },
      belongs: { verdict: "core", why: "Wikipedia files it as a named area of industrial design, and the choices it covers decide how a mass-produced object reads in the hand." },
      related: [897, 899, 911, 909]
    },
    {
      n: 898,
      title: "Tolerances and fit",
      aka: ["Limits and fits", "Gap and flush", "General tolerances"],
      oneLine: "Nothing is made to the exact size you drew, so you specify how far off it may be.",
      demo: {
        caption: "Four parts in one housing, all inside tolerance. Their errors stack to one end, and the visible gap quadruples.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 520 182\"><text class=\"t\" x=\"40\" y=\"22\">ALL FOUR PARTS AT NOMINAL</text><rect class=\"s\" x=\"40\" y=\"30\" width=\"420\" height=\"44\"/><rect class=\"s\" x=\"42\" y=\"36\" width=\"100\" height=\"32\"/><rect class=\"s\" x=\"142\" y=\"36\" width=\"100\" height=\"32\"/><rect class=\"s\" x=\"242\" y=\"36\" width=\"100\" height=\"32\"/><rect class=\"s\" x=\"342\" y=\"36\" width=\"100\" height=\"32\"/><rect class=\"f-accent\" opacity=\"0.45\" x=\"442\" y=\"36\" width=\"16\" height=\"32\"/><text class=\"t\" x=\"450\" y=\"88\" text-anchor=\"middle\">0.2 mm</text><text class=\"t\" x=\"40\" y=\"110\">ALL FOUR AT THEIR TOLERANCE LIMIT</text><rect class=\"s\" x=\"40\" y=\"118\" width=\"420\" height=\"44\"/><rect class=\"s\" x=\"42\" y=\"124\" width=\"88\" height=\"32\"/><rect class=\"s\" x=\"130\" y=\"124\" width=\"88\" height=\"32\"/><rect class=\"s\" x=\"218\" y=\"124\" width=\"88\" height=\"32\"/><rect class=\"s\" x=\"306\" y=\"124\" width=\"88\" height=\"32\"/><rect class=\"f-accent\" opacity=\"0.45\" x=\"394\" y=\"124\" width=\"64\" height=\"32\"/><text class=\"t\" x=\"426\" y=\"176\" text-anchor=\"middle\">0.8 mm</text></svg></div>"
      },
      what: "Every manufactured dimension varies. A tolerance states the band it may vary within, and a fit describes what happens when two toleranced parts meet. ISO 286 groups fits into three families: clearance, where the hole is larger than the shaft so the parts slide; transition, where they are close enough to need mild force; and interference, where the shaft is larger and assembly needs force or heat. Designations pair a hole letter in upper case with a shaft letter in lower case, such as H7/g6. Where a drawing does not tolerance a dimension individually, ISO 2768-1 supplies general tolerances in four classes: fine, medium, coarse and very coarse.",
      why: "Tolerance is what turns a drawing into something a supplier can quote. It also decides the visible gaps between parts, which is most of what a customer reads as build quality on an assembled product.",
      how: [
        "Tolerance only what matters. Tight tolerances everywhere multiply cost without improving the product.",
        "Work out the worst-case stack before you draw the gap. Several parts each at their tolerance limit add up.",
        "Design gaps you can hold. A 0.2 mm nominal gap that can stack to 0.8 mm will look wrong on some units.",
        "Put a general tolerance note on the drawing so untoleranced dimensions are not left to the supplier's judgement."
      ],
      example: "H7/g6, one of the common ISO 286 clearance fits, used where a shaft has to rotate or slide freely in a hole.",
      numbers: "ISO 2768-1 tolerance classes f, m, c and v. For the medium class, permissible deviation is plus or minus 0.1 mm over 3 to 6 mm nominal length and plus or minus 0.2 mm over 6 to 30 mm.",
      pitfall: "Designing to nominal dimensions and letting the engineer tolerance it afterwards. By then the gap you drew may be impossible to hold, and the fix is a visible change to the form.",
      source: "ISO 286 (geometrical product specifications: limits and fits); ISO 2768-1 (general tolerances for linear and angular dimensions)",
      verify: { status: "verified", note: "The three fit families, the hole-basis and shaft-basis systems and the upper-case hole / lower-case shaft designation checked on the Wikipedia engineering fit article, which names ISO 286 and gives H7/g6 as a common example. ISO 2768-1 classes and the medium-class values cross-checked against three published tolerance tables (Haizol, Fictiv and antishicnc), which agree on the figures. I have not read either standard directly, as both are paywalled." },
      belongs: { verdict: "core", why: "A physical design does not exist until its dimensions carry tolerances, and the visible gaps between parts are set here." },
      related: [899, 900, 902, 9897]
    },
    {
      n: 899,
      title: "Design for manufacture",
      aka: ["DFM", "Manufacturability", "Producibility"],
      oneLine: "Shaping a design so the chosen process can actually make it, cheaply and repeatably.",
      demo: {
        caption: "Same wall, same boss. Thick solid material behind the face shrinks as it cools and pulls a dimple into it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Thick solid boss</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 140\"><text class=\"t\" x=\"110\" y=\"24\" text-anchor=\"middle\">SOLID BOSS</text><path class=\"f-mute\" opacity=\"0.45\" d=\"M20 92 H90 V34 H130 V92 H200 V104 H134 C126 104 124 97 110 97 C96 97 94 104 86 104 H20 Z\"/><path class=\"s\" d=\"M20 92 H90 V34 H130 V92 H200 V104 H134 C126 104 124 97 110 97 C96 97 94 104 86 104 H20 Z\"/><path class=\"s-accent\" d=\"M110 120 V103\"/><text class=\"t\" x=\"110\" y=\"132\" text-anchor=\"middle\">SINK MARK ON THE FACE</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Cored boss, even wall</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 140\"><text class=\"t\" x=\"110\" y=\"24\" text-anchor=\"middle\">CORED BOSS</text><path class=\"f-mute\" opacity=\"0.45\" d=\"M20 92 H84 V40 H96 V92 H124 V40 H136 V92 H200 V104 H20 Z\"/><path class=\"s\" d=\"M20 92 H84 V40 H96 V92 H124 V40 H136 V92 H200 V104 H20 Z\"/><path class=\"s-accent\" d=\"M40 92 V104 M84 56 H96\"/><text class=\"t\" x=\"110\" y=\"132\" text-anchor=\"middle\">FACE STAYS FLAT</text></svg></div></div></div>"
      },
      what: "DFM is the practice of designing a part around the process that will produce it rather than designing a shape and asking a factory to cope. Each process has its own grammar. Injection moulding wants uniform wall thickness, draft angles on every vertical face and no undercuts that force a side action. Machining wants internal corners with a radius a cutter can reach, and rewards fewer setups. Sheet metal wants bend radii the press brake can hold. Most of the modern literature comes out of the same source as design for assembly, the Boothroyd and Dewhurst work, later published with Winston Knight as Product Design for Manufacture and Assembly.",
      why: "Process constraints are not a tax on the design, they are the boundary of what is buildable at your volume. Learning them early means the form you present is the form that ships, rather than a form that comes back thickened, ribbed and reshaped.",
      how: [
        "Pick the process before you finalise the form, and design to its rules.",
        "For moulded parts, keep wall thickness even, add draft to every face that leaves the tool, and avoid undercuts.",
        "Reduce the number of separate setups, tools and secondary operations, not just the number of features.",
        "Send the CAD to a supplier for a manufacturability review while the design is still cheap to change."
      ],
      example: "A moulded enclosure redrawn with a constant 2 mm wall and ribs instead of a thick solid boss, so the part cools evenly and does not sink on the visible face.",
      numbers: "",
      pitfall: "The figure that 70 to 80 per cent of product cost is committed during design gets quoted as though it were measured. It is repeated widely, including by Boothroyd Dewhurst's own site, but the trail leads back to concurrent engineering literature rather than to a single study, so treat it as a rule of thumb.",
      source: "Boothroyd, Dewhurst and Knight, Product Design for Manufacture and Assembly; process-specific design rules from individual manufacturing disciplines",
      verify: { status: "verified", note: "DFM defined from the Wikipedia design for manufacturability article as the practice of designing to reduce manufacturing cost and difficulty, with process-specific guidance. The Boothroyd, Dewhurst and Knight text confirmed via the DFMA.com site and the Wikipedia design for assembly article. On the 70-80 per cent claim, I checked the DFMA.com cost estimating page, which cites it and then sources it only to Department of Defense and NIST-backed concurrent engineering research plus two textbooks, with no primary study, which is why I have flagged it rather than stated it." },
      belongs: { verdict: "core", why: "It is the constraint set that decides whether an industrial design can be produced at all, and at what price." },
      related: [898, 900, 902, 903]
    },
    {
      n: 900,
      title: "Design for assembly and disassembly",
      aka: ["DFA", "DFD", "Design for disassembly"],
      oneLine: "Cutting part count and fiddly operations so a product goes together fast and comes apart later.",
      demo: {
        caption: "Same joint, same function. The right-hand stack replaces four screws and a bracket with two moulded snap tabs.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Eight parts</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 162\"><path class=\"s-mute\" stroke-dasharray=\"3 4\" d=\"M110 8 V120\"/><rect class=\"s\" x=\"45\" y=\"14\" width=\"130\" height=\"11\"/><rect class=\"f-mute\" x=\"57\" y=\"33\" width=\"11\" height=\"3\"/><rect class=\"f-mute\" x=\"60\" y=\"36\" width=\"5\" height=\"13\"/><rect class=\"f-mute\" x=\"85\" y=\"33\" width=\"11\" height=\"3\"/><rect class=\"f-mute\" x=\"88\" y=\"36\" width=\"5\" height=\"13\"/><rect class=\"f-mute\" x=\"125\" y=\"33\" width=\"11\" height=\"3\"/><rect class=\"f-mute\" x=\"128\" y=\"36\" width=\"5\" height=\"13\"/><rect class=\"f-mute\" x=\"153\" y=\"33\" width=\"11\" height=\"3\"/><rect class=\"f-mute\" x=\"156\" y=\"36\" width=\"5\" height=\"13\"/><rect class=\"s\" x=\"70\" y=\"60\" width=\"80\" height=\"9\"/><rect class=\"f-mute\" x=\"50\" y=\"80\" width=\"120\" height=\"6\"/><rect class=\"s\" x=\"40\" y=\"96\" width=\"140\" height=\"18\"/><text class=\"t\" x=\"110\" y=\"136\" text-anchor=\"middle\">8 PARTS</text><text class=\"t\" x=\"110\" y=\"152\" text-anchor=\"middle\">4 SCREWS TO DRIVE</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three parts</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 162\"><path class=\"s-mute\" stroke-dasharray=\"3 4\" d=\"M110 8 V120\"/><rect class=\"s\" x=\"45\" y=\"14\" width=\"130\" height=\"11\"/><path class=\"s\" d=\"M62 25 V40 H69 M158 25 V40 H151\"/><rect class=\"f-mute\" x=\"50\" y=\"64\" width=\"120\" height=\"6\"/><rect class=\"s\" x=\"40\" y=\"92\" width=\"140\" height=\"18\"/><path class=\"s-mute\" d=\"M59 92 V101 H66 M161 92 V101 H154\"/><text class=\"t\" x=\"110\" y=\"136\" text-anchor=\"middle\">3 PARTS</text><text class=\"t\" x=\"110\" y=\"152\" text-anchor=\"middle\">TWO MOULDED SNAP TABS</text></svg></div></div></div>"
      },
      what: "Geoffrey Boothroyd began developing design for assembly in 1977 at the University of Massachusetts Amherst with National Science Foundation support, producing a method that estimates manual assembly time and automated assembly cost. His handbook followed in 1980. The heart of it is three questions asked of every part, testing whether it could be eliminated or combined with another, and the biggest savings come from cutting part count. An earlier Japanese method, Hitachi's Assembly Evaluation Method, worked from the principle of one motion for one part. Design for disassembly runs the same logic backwards, so the product can be opened for repair, remanufacture or recycling.",
      why: "Fewer parts means fewer tools, fewer fasteners, fewer chances to fit something the wrong way round and fewer things to hold in stock. Designing the reverse path is what makes repair and recycling economic rather than theoretical.",
      how: [
        "Challenge every part: does it move relative to its neighbour, must it be a different material, does it have to come off for service? If not, combine it.",
        "Make parts self-locating and symmetrical, or clearly asymmetric so they can only go in one way.",
        "Assemble from one direction, ideally downward, so gravity holds parts while the next goes on.",
        "Standardise fasteners and minimise the steps to reach the parts most likely to fail."
      ],
      example: "The IBM Proprinter, cited in the DFA literature as a product designed to automated assembly rules; Sony's Walkman and the Swatch watch are given as further cases of design for fully automated assembly.",
      numbers: "",
      pitfall: "Counting part reduction as a win when it moves cost into tooling. A single complex moulding can be cheaper to assemble and far more expensive to tool and to repair.",
      source: "Geoffrey Boothroyd, Design for Assembly: A Designer's Handbook (1980); Boothroyd and Dewhurst, Product Design for Manufacture and Assembly",
      verify: { status: "verified", note: "Dates, institution, funding and the three-criteria test were re-read this session on the Wikipedia design for assembly article, which gives 1977, the University of Massachusetts Amherst, NSF support, and cites the handbook as Boothroyd, Design for Assembly - A Designer's Handbook, Department of Mechanical Engineering, University of Massachusetts Amherst, November 1980. It gives the Hitachi Assembly Evaluation Method with its one motion for one part principle, and the IBM Proprinter as a case of design for automated assembly rules. The Walkman and Swatch sentence in that article carries a citation-needed tag, so the example here presents those two as cases the literature gives rather than as established fact. Disassembly guidance cross-checked against a 2025 open-access Cleaner Production Letters paper on design for disassembly, which proposes minimising disassembly steps, clustering electronics and standardising fasteners." },
      belongs: { verdict: "core", why: "Part count is the single biggest lever on assembly cost and on whether the product can ever be repaired." },
      related: [899, 901, 902, 912]
    },
    {
      n: 901,
      title: "Repairability",
      aka: ["Serviceability", "Right to repair"],
      oneLine: "Designing so a broken product can be opened, diagnosed and fixed at a sensible price.",
      demo: {
        caption: "Identical layer stack. Which side opens decides whether the battery is one layer away or four.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Bonded back, opens at the screen</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 176\"><path class=\"s-mute\" d=\"M110 8 V22\"/><polygon class=\"f-mute\" points=\"104,22 116,22 110,28\"/><text class=\"t\" x=\"120\" y=\"18\">OPENS HERE</text><rect class=\"s\" x=\"40\" y=\"32\" width=\"140\" height=\"10\"/><rect class=\"s\" x=\"40\" y=\"46\" width=\"140\" height=\"8\"/><rect class=\"s\" x=\"40\" y=\"58\" width=\"140\" height=\"10\"/><rect class=\"s\" x=\"40\" y=\"72\" width=\"140\" height=\"6\"/><rect class=\"f-accent\" opacity=\"0.35\" x=\"40\" y=\"82\" width=\"140\" height=\"16\"/><rect class=\"s\" x=\"40\" y=\"82\" width=\"140\" height=\"16\"/><text class=\"t\" x=\"110\" y=\"93\" text-anchor=\"middle\">BATTERY</text><path class=\"s-accent\" stroke-dasharray=\"2 3\" d=\"M40 100 H180\"/><rect class=\"s\" x=\"40\" y=\"102\" width=\"140\" height=\"10\"/><path class=\"s-accent\" d=\"M36 32 H30 V82 H36\"/><text class=\"t\" x=\"110\" y=\"152\" text-anchor=\"middle\">FOUR LAYERS TO THE BATTERY</text><text class=\"t\" x=\"110\" y=\"168\" text-anchor=\"middle\">BACK IS BONDED</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Screwed back, opens at the back</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 176\"><rect class=\"s\" x=\"40\" y=\"32\" width=\"140\" height=\"10\"/><rect class=\"s\" x=\"40\" y=\"46\" width=\"140\" height=\"8\"/><rect class=\"s\" x=\"40\" y=\"58\" width=\"140\" height=\"10\"/><rect class=\"s\" x=\"40\" y=\"72\" width=\"140\" height=\"6\"/><rect class=\"f-accent\" opacity=\"0.35\" x=\"40\" y=\"82\" width=\"140\" height=\"16\"/><rect class=\"s\" x=\"40\" y=\"82\" width=\"140\" height=\"16\"/><text class=\"t\" x=\"110\" y=\"93\" text-anchor=\"middle\">BATTERY</text><rect class=\"s\" x=\"40\" y=\"102\" width=\"140\" height=\"10\"/><circle class=\"f-mute\" cx=\"55\" cy=\"107\" r=\"2.5\"/><circle class=\"f-mute\" cx=\"165\" cy=\"107\" r=\"2.5\"/><path class=\"s-accent\" d=\"M36 112 H30 V98 H36\"/><path class=\"s-mute\" d=\"M110 140 V124\"/><polygon class=\"f-mute\" points=\"104,124 116,124 110,118\"/><text class=\"t\" x=\"120\" y=\"134\">OPENS HERE</text><text class=\"t\" x=\"110\" y=\"152\" text-anchor=\"middle\">ONE LAYER TO THE BATTERY</text><text class=\"t\" x=\"110\" y=\"168\" text-anchor=\"middle\">BACK IS SCREWED</text></svg></div></div></div>"
      },
      what: "Repairability is now partly a regulated property rather than a virtue. Since 1 January 2021 France has required a repairability index on five categories of electrical goods, scored out of 10 across five criteria: documentation, ease of disassembly including tools and fasteners, availability of spare parts, price of spare parts relative to the product, and a category-specific criterion covering things like software updates and remote support. iFixit publishes its own 0 to 10 scores using different criteria and weights. At EU level, Regulation (EU) 2024/1781, the Ecodesign for Sustainable Products Regulation, allows repairability requirements to be set for product groups and introduces the digital product passport.",
      why: "Repairability is decided by geometry and fastener choice, both of which are the designer's job. It also has a commercial edge now, because a published score sits next to the price on the shelf in some markets.",
      how: [
        "Use standard screws rather than adhesive for anything that will fail before the product does.",
        "Put the parts most likely to fail, such as the battery and the screen, nearest the opening.",
        "Design a service access route and document it, rather than expecting a repairer to reverse-engineer it.",
        "Set a spare parts commitment and price before launch, because both are scored."
      ],
      example: "The French repairability index label on a smartphone or laptop sold in France, showing a score out of 10.",
      numbers: "French repairability index: score from 0 to 10, five criteria, in force from 1 January 2021, initially covering five product categories. iFixit repairability scores also run 0 to 10, zero meaning unrepairable and ten easiest to repair.",
      pitfall: "Optimising for the score rather than for repair. A product can earn documentation and spare parts points while still being glued shut in the one place that matters.",
      source: "French repairability index (in force 1 January 2021); Regulation (EU) 2024/1781 (Ecodesign for Sustainable Products Regulation); iFixit repairability scoring",
      verify: { status: "verified", note: "The five criteria and the 0 to 10 range taken verbatim from Microsoft's Surface repairability index page for France, which lists documentation, disassembly/tools/fasteners, availability of spare parts, price of spare parts and a product-specific criterion. The 1 January 2021 start date and the five initial categories cross-checked against Repair EU and the Halte a l'Obsolescence Programmee report. ESPR confirmed as Regulation (EU) 2024/1781 with durability, repairability and the digital product passport, from the EU green forum page and the climate-laws.org record. iFixit's scale read this session from iFixit's own smartphone repairability scores page, which states that engineers score repairability from zero, meaning unrepairable, to ten, meaning easiest to repair. The numbers field previously said 1 to 10, which contradicted both that page and this note; corrected to 0 to 10." },
      belongs: { verdict: "core", why: "Whether a product can be repaired is fixed by design decisions about fasteners, layering and part access, and is now scored by law in some markets." },
      related: [900, 902, 910, 912]
    },
    {
      n: 902,
      title: "Modularity and standard parts",
      aka: ["Product architecture", "Platform design", "Common parts"],
      oneLine: "Splitting a product into swappable chunks with defined interfaces, and reusing parts across the range.",
      demo: {
        caption: "Left, every part carries several functions. Right, one function per chunk, so a chunk can be swapped alone.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Integral</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 170\"><text class=\"t\" x=\"44\" y=\"16\" text-anchor=\"middle\">FUNCTIONS</text><text class=\"t\" x=\"176\" y=\"16\" text-anchor=\"middle\">PARTS</text><path class=\"s-mute\" d=\"M50 40 L170 56 M50 40 L170 88 M50 72 L170 56 M50 72 L170 120 M50 104 L170 88 M50 104 L170 120 M50 136 L170 56 M50 136 L170 88\"/><circle class=\"f-mute\" cx=\"44\" cy=\"40\" r=\"6\"/><circle class=\"f-mute\" cx=\"44\" cy=\"72\" r=\"6\"/><circle class=\"f-mute\" cx=\"44\" cy=\"104\" r=\"6\"/><circle class=\"f-mute\" cx=\"44\" cy=\"136\" r=\"6\"/><circle class=\"s\" cx=\"176\" cy=\"56\" r=\"6\"/><circle class=\"s\" cx=\"176\" cy=\"88\" r=\"6\"/><circle class=\"s\" cx=\"176\" cy=\"120\" r=\"6\"/><text class=\"t\" x=\"110\" y=\"162\" text-anchor=\"middle\">FUNCTIONS SPREAD ACROSS PARTS</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Modular</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 170\"><text class=\"t\" x=\"44\" y=\"16\" text-anchor=\"middle\">FUNCTIONS</text><text class=\"t\" x=\"176\" y=\"16\" text-anchor=\"middle\">CHUNKS</text><path class=\"s-mute\" d=\"M50 40 H170 M50 72 H170 M50 104 H170 M50 136 H170\"/><circle class=\"f-mute\" cx=\"44\" cy=\"40\" r=\"6\"/><circle class=\"f-mute\" cx=\"44\" cy=\"72\" r=\"6\"/><circle class=\"f-mute\" cx=\"44\" cy=\"104\" r=\"6\"/><circle class=\"f-mute\" cx=\"44\" cy=\"136\" r=\"6\"/><rect class=\"s\" x=\"170\" y=\"34\" width=\"12\" height=\"12\"/><rect class=\"s\" x=\"170\" y=\"66\" width=\"12\" height=\"12\"/><rect class=\"s\" x=\"170\" y=\"98\" width=\"12\" height=\"12\"/><rect class=\"s\" x=\"170\" y=\"130\" width=\"12\" height=\"12\"/><rect class=\"f-accent\" x=\"107\" y=\"37\" width=\"6\" height=\"6\"/><rect class=\"f-accent\" x=\"107\" y=\"69\" width=\"6\" height=\"6\"/><rect class=\"f-accent\" x=\"107\" y=\"101\" width=\"6\" height=\"6\"/><rect class=\"f-accent\" x=\"107\" y=\"133\" width=\"6\" height=\"6\"/><path class=\"s-accent\" d=\"M110 44 V50\"/><text class=\"t\" x=\"110\" y=\"60\" text-anchor=\"middle\">FIXED INTERFACE</text><text class=\"t\" x=\"110\" y=\"162\" text-anchor=\"middle\">ONE FUNCTION PER CHUNK</text></svg></div></div></div>"
      },
      what: "Karl Ulrich's 1995 paper defined product architecture as the scheme by which a product's functions are allocated to its physical parts. A modular architecture maps one function to one chunk and keeps the interfaces between chunks clean; an integral architecture spreads functions across parts and couples them tightly. Modular architectures make variety cheap, because you recombine modules instead of redesigning. Integral ones usually win on size, weight and cost per unit. Baldwin and Clark's Design Rules (MIT Press, 2000) worked the same idea into a theory of how modularity shapes industries.",
      why: "The architecture decision sets what your product range can do later. Modules let you build variants, upgrade one part, and stock fewer distinct components. It also concentrates the hard design work on the interfaces, which is where you can then hold the line.",
      how: [
        "Draw the function-to-part map before styling anything, and see how many parts carry more than one function.",
        "Freeze the interface first: mounting points, connector, tolerance, protocol. Modules can change afterwards; interfaces cannot.",
        "Reuse fasteners, connectors and off-the-shelf components across the range before designing bespoke ones.",
        "Accept the penalty. A modular product is usually bulkier and a little dearer per unit than an integral one."
      ],
      example: "IKEA's ranges, cited in the modularity literature, where a limited set of components and fittings recombine into many finished pieces.",
      numbers: "",
      pitfall: "Calling something modular when the interfaces are not actually stable. If each new module needs the interface changed, you have the cost of modularity without the benefit.",
      source: "Karl Ulrich, The role of product architecture in the manufacturing firm, Research Policy 24(3), 419-440 (1995); Carliss Baldwin and Kim Clark, Design Rules: The Power of Modularity (MIT Press, 2000)",
      verify: { status: "verified", note: "Ulrich citation confirmed on ScienceDirect, RePEc and Ulrich's own CV as Research Policy volume 24, issue 3, May 1995, pages 419-440. Baldwin and Clark confirmed from the Wikipedia modularity article's bibliography, which also gives the IKEA example. On standard parts, the interchangeable-parts origin story is worth care: the Library of Congress business history guide credits the original idea to Honore Blanc, and historians including Merritt Roe Smith have argued Eli Whitney's 1801 demonstration did not show genuine interchangeability." },
      belongs: { verdict: "core", why: "Architecture decides what variants, upgrades and repairs are possible for the life of the product, and it is set early." },
      related: [899, 900, 901, 898]
    },
    {
      n: 903,
      title: "Weight and balance",
      aka: ["Mass distribution", "Centre of gravity"],
      oneLine: "How heavy an object is, and where that mass sits relative to the hand holding it.",
      demo: {
        caption: "Same drill, same mass. Moving the battery into the handle base puts the centre of gravity over the grip.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Battery behind the chuck</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 168\"><path class=\"s-mute\" stroke-dasharray=\"3 4\" d=\"M71 20 V138\"/><rect class=\"s\" x=\"40\" y=\"40\" width=\"140\" height=\"28\"/><rect class=\"f-mute\" x=\"180\" y=\"46\" width=\"14\" height=\"16\"/><rect class=\"f-mute\" x=\"194\" y=\"52\" width=\"24\" height=\"4\"/><rect class=\"s\" x=\"54\" y=\"68\" width=\"34\" height=\"54\"/><rect class=\"f-accent\" opacity=\"0.4\" x=\"134\" y=\"44\" width=\"38\" height=\"20\"/><rect class=\"s\" x=\"134\" y=\"44\" width=\"38\" height=\"20\"/><text class=\"t\" x=\"153\" y=\"36\" text-anchor=\"middle\">BATTERY</text><path class=\"s-mute\" d=\"M124 47 V24\"/><circle class=\"s\" cx=\"124\" cy=\"54\" r=\"7\"/><circle class=\"f\" cx=\"124\" cy=\"54\" r=\"2.5\"/><text class=\"t\" x=\"124\" y=\"20\" text-anchor=\"middle\">CoG</text><circle class=\"s-mute\" cx=\"71\" cy=\"92\" r=\"7\"/><text class=\"t\" x=\"95\" y=\"95\">GRIP</text><path class=\"s-accent\" d=\"M71 138 V146 M124 138 V146 M71 142 H124\"/><text class=\"t\" x=\"97\" y=\"160\" text-anchor=\"middle\">MOMENT ARM</text><path class=\"s-accent\" d=\"M198 76 Q210 88 196 98\"/><polygon class=\"f-accent\" points=\"201,92 194,102 189,93\"/><text class=\"t\" x=\"232\" y=\"114\" text-anchor=\"end\">TIPS FORWARD</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Battery in the handle base</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 168\"><path class=\"s-mute\" stroke-dasharray=\"3 4\" d=\"M71 20 V138\"/><rect class=\"s\" x=\"40\" y=\"40\" width=\"140\" height=\"28\"/><rect class=\"f-mute\" x=\"180\" y=\"46\" width=\"14\" height=\"16\"/><rect class=\"f-mute\" x=\"194\" y=\"52\" width=\"24\" height=\"4\"/><rect class=\"s\" x=\"54\" y=\"68\" width=\"34\" height=\"54\"/><rect class=\"f-accent\" opacity=\"0.4\" x=\"54\" y=\"102\" width=\"34\" height=\"18\"/><rect class=\"s\" x=\"54\" y=\"102\" width=\"34\" height=\"18\"/><text class=\"t\" x=\"71\" y=\"134\" text-anchor=\"middle\">BATTERY</text><circle class=\"s\" cx=\"78\" cy=\"72\" r=\"7\"/><circle class=\"f\" cx=\"78\" cy=\"72\" r=\"2.5\"/><path class=\"s-mute\" d=\"M85 72 H116\"/><text class=\"t\" x=\"120\" y=\"75\">CoG</text><circle class=\"s-mute\" cx=\"71\" cy=\"92\" r=\"7\"/><text class=\"t\" x=\"95\" y=\"95\">GRIP</text><path class=\"s-accent\" d=\"M71 138 V146 M78 138 V146 M71 142 H78\"/><text class=\"t\" x=\"97\" y=\"160\" text-anchor=\"middle\">ALMOST NONE</text></svg></div></div></div>"
      },
      what: "Two separate properties. Total mass decides whether the object can be carried, lifted or held for long. Balance is where the centre of gravity sits, which decides whether the object twists in the hand. A tool whose mass is far from the grip has a long moment arm, so the wrist has to work against a turning force the whole time it is held. Neither is a styling question: both are fixed by where you put the motor, the battery and the metal.",
      why: "Balance is why one knife feels controllable and another does not, when both weigh the same. Moving mass a few centimetres towards the hand can remove more perceived effort than shaving grams off the total.",
      how: [
        "Locate the centre of gravity in the grip, or as close behind it as the mechanism allows.",
        "Check the held posture, not the resting one. A drill balanced on a bench can still tip forward in the hand.",
        "Where mass has to be high, add a counterweight rather than accepting the twist.",
        "Set a mass budget per part early, because batteries and motors will otherwise take whatever they need."
      ],
      example: "A cordless drill with the battery pack in the base of the handle rather than behind the chuck, putting the centre of gravity in line with the grip.",
      numbers: "For manual lifting, the revised NIOSH lifting equation uses a load constant of 23 kg, described by NIOSH as safe under ideal conditions for 75 per cent of women and 90 per cent of men before any of the six task multipliers are applied.",
      pitfall: "Adding mass on purpose because heavy is assumed to read as well made. The mechanical case for balance is solid; the folk rule that weight signals quality is a marketing belief, and I could not find a design-grade study for it.",
      source: "Mechanics of moment and centre of gravity (standard engineering); NIOSH revised lifting equation for the load constant",
      verify: { status: "adjusted", note: "I narrowed the framing. The mechanical half is uncontroversial physics and I have kept it. The NIOSH load constant of 23 kg and its 75 per cent of women / 90 per cent of men basis was checked on the CCOHS NIOSH lifting equation page and the CDC/NIOSH page for the revised equation. The popular claim that a heavier product reads as better made is a separate assertion: searching for it this session returned consumer-marketing studies on packaging weight and food perception, not product design evidence, so I have not stated it as fact." },
      belongs: { verdict: "core", why: "Mass and its distribution are set by internal layout and are among the first things a user feels when they pick a product up." },
      related: [892, 895, 899, 904]
    },
    {
      n: 904,
      title: "Factor of safety",
      aka: ["Design factor", "Safety factor"],
      oneLine: "Deliberately making a part stronger than its worst expected load, by a stated multiple.",
      demo: {
        caption: "Capacity as a multiple of the worst expected load. The shaded band is the margin; the multiples here are illustrative.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 520 200\"><path class=\"s-mute\" stroke-dasharray=\"3 4\" d=\"M60 125 H480 M60 80 H480\"/><path class=\"s-mute\" d=\"M60 170 H480\"/><rect class=\"f-mute\" x=\"90\" y=\"125\" width=\"80\" height=\"45\"/><rect class=\"f-mute\" x=\"230\" y=\"125\" width=\"80\" height=\"45\"/><rect class=\"f-accent\" opacity=\"0.35\" x=\"230\" y=\"80\" width=\"80\" height=\"45\"/><rect class=\"f-mute\" x=\"370\" y=\"125\" width=\"80\" height=\"45\"/><rect class=\"f-accent\" opacity=\"0.35\" x=\"370\" y=\"62\" width=\"80\" height=\"63\"/><text class=\"t\" x=\"130\" y=\"118\" text-anchor=\"middle\">x1</text><text class=\"t\" x=\"270\" y=\"73\" text-anchor=\"middle\">x2 REQUIRED</text><text class=\"t\" x=\"410\" y=\"55\" text-anchor=\"middle\">x2.4 ACHIEVED</text><text class=\"t\" x=\"270\" y=\"106\" text-anchor=\"middle\">MARGIN</text><text class=\"t\" x=\"130\" y=\"186\" text-anchor=\"middle\">WORST EXPECTED LOAD</text><text class=\"t\" x=\"270\" y=\"186\" text-anchor=\"middle\">DESIGN FACTOR</text><text class=\"t\" x=\"410\" y=\"186\" text-anchor=\"middle\">AS BUILT</text><text class=\"t\" x=\"60\" y=\"22\">LOAD AND CAPACITY</text></svg></div>"
      },
      what: "Factor of safety expresses how much stronger a structure is than it needs to be for its specified maximum load. Two related terms get confused. The design factor is a requirement set in advance by a regulation, standard or contract; the realised factor of safety is what the finished design actually achieves. The multiple exists to absorb the things the calculation does not know: material variation, manufacturing defects, corrosion, fatigue and users who load the thing in ways nobody modelled. Values vary widely by application, and aerospace works to far lower factors than building structures because weight is expensive and testing is exhaustive.",
      why: "For a product designer the factor of safety is what turns an elegant thin section into a section that survives being sat on. It also explains why an engineer keeps thickening your part, which is easier to negotiate if you know the number they are working to.",
      how: [
        "Ask which design factor applies before you settle a section thickness, and where it comes from.",
        "State the worst realistic load, including misuse, not the intended one.",
        "Where the factor forces a thicker section, change the geometry rather than the thickness if you can. Ribs and radii buy stiffness cheaply.",
        "Test to failure on a prototype rather than trusting the analysis alone."
      ],
      example: "Aircraft structures, which are designed to much lower factors than buildings because every kilogram costs fuel and the loads are known and tested in detail.",
      numbers: "I have not stated typical values here. Wikipedia lists figures such as 2.0 for building structural members and 1.25 for landing gear, but attributes them to general engineering practice without naming a code, so they are not safe to quote as standards.",
      pitfall: "Assuming the factor of safety covers misuse. It covers uncertainty in materials and loads, not a user standing on a product designed to be sat on.",
      source: "Standard engineering practice; specific design factors are mandated by application-specific codes rather than by one general standard",
      verify: { status: "verified", note: "Definitions of factor of safety and the distinction between design factor and realised factor checked on the Wikipedia factor of safety article. That article lists typical values but explicitly does not attribute them to named codes such as AISC or ACI, so I have declined to quote them as thresholds and said why in the numbers field." },
      belongs: { verdict: "adjacent", why: "It is mechanical engineering, not design theory, but it directly sets wall thickness, rib depth and section geometry, so an industrial designer who does not know the applicable factor will draw shapes that come back changed." },
      related: [898, 899, 903, 1008]
    },
    {
      n: 905,
      title: "Product semantics",
      aka: ["Semantics of form", "Product language"],
      oneLine: "Treating a product's form as a message the user reads, not just a shape that works.",
      demo: {
        caption: "One display and four controls in both panels. Only the geometry changed, and the two claim different jobs.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Reads as an instrument</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 150\"><rect class=\"s\" x=\"20\" y=\"20\" width=\"180\" height=\"110\" rx=\"2\"/><rect class=\"s-mute\" x=\"34\" y=\"32\" width=\"152\" height=\"26\"/><path class=\"s-mute\" d=\"M34 66 H186\"/><circle class=\"s\" cx=\"48\" cy=\"92\" r=\"11\"/><circle class=\"s\" cx=\"84\" cy=\"92\" r=\"11\"/><circle class=\"s\" cx=\"120\" cy=\"92\" r=\"11\"/><circle class=\"s\" cx=\"156\" cy=\"92\" r=\"11\"/><path class=\"s\" d=\"M48 92 V83 M84 92 V83 M120 92 V83 M156 92 V83\"/><text class=\"t\" x=\"48\" y=\"118\" text-anchor=\"middle\">GAIN</text><text class=\"t\" x=\"84\" y=\"118\" text-anchor=\"middle\">TRIM</text><text class=\"t\" x=\"120\" y=\"118\" text-anchor=\"middle\">RATE</text><text class=\"t\" x=\"156\" y=\"118\" text-anchor=\"middle\">OUT</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Reads as a toy</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 150\"><rect class=\"s\" x=\"20\" y=\"20\" width=\"180\" height=\"110\" rx=\"26\"/><rect class=\"s-mute\" x=\"44\" y=\"34\" width=\"132\" height=\"26\" rx=\"13\"/><circle class=\"s\" cx=\"50\" cy=\"96\" r=\"17\"/><circle class=\"s\" cx=\"88\" cy=\"96\" r=\"17\"/><circle class=\"s\" cx=\"132\" cy=\"96\" r=\"17\"/><circle class=\"s\" cx=\"170\" cy=\"96\" r=\"17\"/><path class=\"s\" d=\"M50 96 V81 M88 96 V81 M132 96 V81 M170 96 V81\"/></svg></div></div></div>"
      },
      what: "Klaus Krippendorff and Reinhart Butter set out product semantics in a 1984 article in Innovation, the journal of the Industrial Designers Society of America. Their argument is that a product's meaning comes from its physical and morphological characteristics read together with the user's relationship to it and its technical, psychological and social context. The designer's job is not only to build an object but to arrange it so that people in a particular culture interpret it correctly, then to adjust when they do not. Krippendorff's later line is that design is making sense of things. It grew out of a broader post-1960s European interest in semiotics applied to objects.",
      why: "It gives you language for the half of a product that is not function. A control can be perfectly placed and still read as fragile, medical, cheap or hostile, and semantics is the frame for arguing about that on purpose.",
      how: [
        "Write down what you want the object to say before you style it, in plain words a client can disagree with.",
        "Borrow form cues from the category the user should think of, and avoid cues from categories you do not want.",
        "Test the reading, not just the usability. Show the form to strangers and ask what it is and who it is for.",
        "Remember the reading is local. A colour or shape that signals medical in one market signals something else in another."
      ],
      example: "Dieter Rams's Braun products, where a stripped, labelled front panel communicates precision instrument rather than furniture, and which Rams summarised as good design makes a product understandable.",
      numbers: "",
      pitfall: "Using semantics to justify decoration. The claim is that form communicates, not that any expressive form is therefore good, and unverified cues invented in the studio often mean nothing to the user.",
      source: "Klaus Krippendorff and Reinhart Butter, Product Semantics: Exploring the Symbolic Qualities of Form, Innovation 3(2), 4-9 (1984)",
      verify: { status: "verified", note: "Citation confirmed from the University of Pennsylvania repository record, Semantic Scholar and the ResearchGate listing, all giving Krippendorff and Butter, Innovation, 1984, volume 3 issue 2, pages 4-9. The substance summarised from the Kyushu University Center for Design Fundamentals lexicon entry on product semantics, which describes the physical, relational, technical and social-psychological contexts and the designer-as-communicator argument. Rams's principle wording checked on the Vitsoe good design page." },
      belongs: { verdict: "core", why: "It is the main published theory of how physical form carries meaning, and industrial designers make that call on every project." },
      related: [896, 906, 907, 9897]
    },
    {
      n: 906,
      title: "Control-display compatibility",
      aka: ["Stimulus-response compatibility", "Spatial compatibility", "Control-display mapping"],
      oneLine: "Laying out controls so their arrangement matches the thing they control.",
      demo: {
        caption: "Same four knobs in a row. Offset the burners and each knob lines up with one, so no label is needed.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Burners in a square</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 180\"><rect class=\"s-mute\" x=\"16\" y=\"20\" width=\"188\" height=\"110\"/><path class=\"s-accent\" stroke-dasharray=\"3 4\" d=\"M46 142 L146 52 M86 142 L66 98 M146 142 L66 52 M186 142 L146 98\"/><circle class=\"s\" cx=\"66\" cy=\"52\" r=\"18\"/><circle class=\"s\" cx=\"146\" cy=\"52\" r=\"18\"/><circle class=\"s\" cx=\"66\" cy=\"98\" r=\"18\"/><circle class=\"s\" cx=\"146\" cy=\"98\" r=\"18\"/><path class=\"s-mute\" d=\"M16 130 H204\"/><circle class=\"f-mute\" cx=\"46\" cy=\"150\" r=\"8\"/><circle class=\"f-mute\" cx=\"86\" cy=\"150\" r=\"8\"/><circle class=\"f-mute\" cx=\"146\" cy=\"150\" r=\"8\"/><circle class=\"f-mute\" cx=\"186\" cy=\"150\" r=\"8\"/><text class=\"t\" x=\"110\" y=\"174\" text-anchor=\"middle\">MAPPING MUST BE LEARNED</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Burners offset</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 180\"><rect class=\"s-mute\" x=\"16\" y=\"20\" width=\"188\" height=\"110\"/><path class=\"s-accent\" stroke-dasharray=\"3 4\" d=\"M46 142 V68 M86 142 V114 M146 142 V68 M186 142 V114\"/><circle class=\"s\" cx=\"46\" cy=\"52\" r=\"16\"/><circle class=\"s\" cx=\"86\" cy=\"98\" r=\"16\"/><circle class=\"s\" cx=\"146\" cy=\"52\" r=\"16\"/><circle class=\"s\" cx=\"186\" cy=\"98\" r=\"16\"/><path class=\"s-mute\" d=\"M16 130 H204\"/><circle class=\"f-mute\" cx=\"46\" cy=\"150\" r=\"8\"/><circle class=\"f-mute\" cx=\"86\" cy=\"150\" r=\"8\"/><circle class=\"f-mute\" cx=\"146\" cy=\"150\" r=\"8\"/><circle class=\"f-mute\" cx=\"186\" cy=\"150\" r=\"8\"/><text class=\"t\" x=\"110\" y=\"174\" text-anchor=\"middle\">EACH KNOB LINES UP</text></svg></div></div></div>"
      },
      what: "Compatibility means the spatial relationship between a control and its display or effect matches what the user expects. Arnold Small coined stimulus-response compatibility in a 1951 presentation, and Fitts and Seeger demonstrated it in 1953: reaction times rose when the position of the signal and the position of the response did not correspond, and the effect held even when subjects crossed their arms, which showed it was perceptual rather than a matter of nerve length. The best-known design case is Chapanis and Lindenbaum's 1959 study of four wooden stove models with different control-to-burner arrangements. Fifteen subjects were tested on each of the four models over 80 consecutive trials, and one arrangement came out superior to all the others.",
      why: "Compatibility is close to free accuracy. A layout that matches the thing it controls is faster and produces fewer errors with no training and no labels. Practice narrows the gap without closing it: in the stove study performance stopped improving after the first half of the trials, and the ranking between arrangements still held over the second half.",
      how: [
        "Arrange controls in the same spatial pattern as the things they operate, and in the same orientation.",
        "Where a direct mapping is impossible, redesign the display rather than adding a diagram to explain the mapping.",
        "Keep the mapping consistent across every mode and screen of the product.",
        "Test with people under time pressure. Incompatible layouts are usable when the user is calm and fail when they are not."
      ],
      example: "A four-burner hob where the knobs sit in the same square pattern as the burners, or where the burners are offset so each knob lines up with one of them, instead of four knobs in a row.",
      numbers: "Chapanis and Lindenbaum (1959): 15 subjects, four wooden stove models, 80 consecutive trials. The abstract reports significant improvement across the 80 trials but none in the second half, and the ranking of arrangements was analysed on trials 41 to 80. It also reports that a second arrangement was significantly worse than the best but better than the remaining two.",
      pitfall: "Fixing a bad mapping with a label. The label is read the first few times and then ignored, and the error rate goes back up.",
      source: "Paul M. Fitts and C. M. Seeger, S-R compatibility: spatial characteristics of stimulus and response codes, Journal of Experimental Psychology 46(3), 199-210 (1953); Alphonse Chapanis and Lionel E. Lindenbaum, A Reaction Time Study of Four Control-Display Linkages, Human Factors 1(4), 1-7 (1959)",
      verify: { status: "verified", note: "The Chapanis and Lindenbaum abstract was read in full this session on the Sage Journals record: authors at Johns Hopkins, Human Factors volume 1 issue 4, November 1959, pages 1-7, fifteen subjects tested on each of four wooden stove models, 80 consecutive trials, significant improvement across the 80 trials but none in the second half, one arrangement superior to all the others and a second significantly worse than the best but better than the remaining two. The abstract does not name which arrangement won, so no claim is made about which. The entry previously said the compatibility effect does not wear off with practice, which the abstract does not support; that has been rewritten to state only what was measured. Small's 1951 coining and the Fitts and Seeger crossed-arms follow-up are from the Wikipedia stimulus-response compatibility article, which explains that the crossed-arms condition ruled out the competing nerve-path explanation because the difference from the standard condition was not statistically significant. The 1953 journal citation is taken from that article's reference list; I did not read the paper itself." },
      belongs: { verdict: "core", why: "Control layout is a design decision with a measured effect on error rate, demonstrated on an ordinary domestic product." },
      related: [893, 894, 896, 907]
    },
    {
      n: 907,
      title: "Population stereotypes (clockwise increases)",
      aka: ["Direction-of-motion stereotypes", "Movement compatibility", "Warrick's principle"],
      oneLine: "Learned expectations about which way a control should move to produce a given effect.",
      demo: {
        caption: "Both knobs turn clockwise. Only the right-hand scale rises with the turn, which is what a user already expects.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Clockwise lowers it</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 264 152\"><path class=\"s-accent\" d=\"M42.3 49.4 A72 72 0 0 1 177.7 49.4\"/><polygon class=\"f-accent\" points=\"172,44 183,47 176,57\"/><text class=\"t\" x=\"262\" y=\"58\" text-anchor=\"end\">CLOCKWISE</text><path class=\"s-mute\" d=\"M68.4 98 A48 48 0 1 1 151.6 98\"/><path class=\"s-mute\" d=\"M68.4 98 L61.5 102 M68.4 50 L61.5 46 M110 26 L110 18 M151.6 50 L158.5 46 M151.6 98 L158.5 102\"/><circle class=\"s\" cx=\"110\" cy=\"74\" r=\"34\"/><path class=\"s\" d=\"M110 74 V44\"/><text class=\"t\" x=\"48\" y=\"114\" text-anchor=\"middle\">MAX</text><text class=\"t\" x=\"172\" y=\"114\" text-anchor=\"middle\">MIN</text><text class=\"t\" x=\"110\" y=\"140\" text-anchor=\"middle\">THE VALUE FALLS</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Clockwise raises it</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 264 152\"><path class=\"s-accent\" d=\"M42.3 49.4 A72 72 0 0 1 177.7 49.4\"/><polygon class=\"f-accent\" points=\"172,44 183,47 176,57\"/><text class=\"t\" x=\"262\" y=\"58\" text-anchor=\"end\">CLOCKWISE</text><path class=\"s-mute\" d=\"M68.4 98 A48 48 0 1 1 151.6 98\"/><path class=\"s-mute\" d=\"M68.4 98 L61.5 102 M68.4 50 L61.5 46 M110 26 L110 18 M151.6 50 L158.5 46 M151.6 98 L158.5 102\"/><circle class=\"s\" cx=\"110\" cy=\"74\" r=\"34\"/><path class=\"s\" d=\"M110 74 V44\"/><text class=\"t\" x=\"48\" y=\"114\" text-anchor=\"middle\">MIN</text><text class=\"t\" x=\"172\" y=\"114\" text-anchor=\"middle\">MAX</text><text class=\"t\" x=\"110\" y=\"140\" text-anchor=\"middle\">THE VALUE RISES</text></svg></div></div></div>"
      },
      what: "A population stereotype is a strong, widely shared expectation about direction of movement. Several have names. The clockwise-for-increase stereotype says turning a rotary control clockwise should raise the value, regardless of the display's layout. Warrick's principle, from M. J. Warrick's 1947 work on control knobs and visual indicators, says a pointer is expected to move in the same direction as the side of the knob nearest to it. The clockwise-away stereotype says clockwise rotation suggests movement away from the user. These are conventions people have learned, not universal facts about perception, and they can conflict with one another in a single layout.",
      why: "Following the stereotype means the user gets it right the first time under stress. Breaking it produces errors that persist, because the wrong response has been practised for years on every other product.",
      how: [
        "Default to clockwise for increase on any rotary control, including on-screen dials.",
        "Check for conflicts. Warrick's principle and clockwise-for-increase can point opposite ways depending on where you put the knob relative to the scale.",
        "Where they conflict, move the control or the scale until they agree, rather than picking a winner.",
        "Verify the stereotype in each market you sell into. Some are not shared, and the mains light switch is the classic case: up is on in North America, down is on in the UK."
      ],
      example: "A volume knob that raises the level clockwise, matching every other volume knob the user has ever touched.",
      numbers: "",
      pitfall: "Training people out of a stereotype. It can be done, but it fails first in an emergency, which is exactly when the control matters.",
      source: "M. J. Warrick, Direction of movement in the use of control knobs to position visual indicators (1947), USAF AMC Report No. 694-4C, also published as a chapter in Fitts (ed.), Psychological Research on Equipment Design",
      verify: { status: "verified", note: "The named principles and their wording are taken from Cornell University's ergonomics course notes on control-display compatibility, which define Warrick's principle, clockwise-for-increase, clockwise-away and the scale-side principle. Warrick's title was checked this session against four independent reference lists (Hoffmann's paper on Warrick's principle, Tsang et al. 2015, a DTIC history of human factors, and Hommel 2001) which agree on the wording and give both the USAF AMC Report No. 694-4C identifier and the chapter in Fitts's Psychological Research on Equipment Design; the report number has been added. I did not read Warrick's original. The light-switch direction difference between North America and the UK is stated without a study here, though the Wikipedia article on stimulus-response compatibility uses the same UK and US light-switch example." },
      belongs: { verdict: "core", why: "Direction of movement is a design decision on every knob, lever and slider, and the expectations are documented and named." },
      related: [896, 906, 908, 550]
    },
    {
      n: 908,
      title: "Colour coding standards",
      aka: ["Safety colours", "Signal colours"],
      oneLine: "Published colour meanings for safety and control, which you follow rather than invent.",
      demo: {
        caption: "The meanings are fixed: red prohibits, yellow warns, blue commands, green means safe. Colours here are indicative only.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-row db-row--top\"><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#c8102e\"></span><span class=\"db-note\">prohibition</span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#f2c500\"></span><span class=\"db-note\">warning</span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#e8620e\"></span><span class=\"db-note\">medium risk</span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#0057b8\"></span><span class=\"db-note\">mandatory</span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#007a33\"></span><span class=\"db-note\">safe condition</span></span></div><span class=\"db-note\">indicative only: ISO 3864-4 sets the colorimetric values</span></div></div>"
      },
      what: "Safety colour is standardised, not a design choice. ISO 3864 sets safety colours and their meanings for signs and markings: red for prohibition and fire equipment, yellow for warning, blue for mandatory action and green for safe condition, with orange added in part 2 for medium-level product risk. Machine controls have their own rules. IEC 60204-1 clause 10.7.3 requires the actuator of an emergency stop to be red, and says that if a background exists immediately around the actuator it shall be yellow. ISO 13850 requires the same red actuator on a yellow background so far as a background exists and it is practicable. NFPA 79, the US equivalent, goes further and reserves the red-and-yellow combination exclusively for emergency stop.",
      why: "These meanings are already in the user's head from every other machine, road sign and building they have used. Following them means an unfamiliar user still reads the control correctly, and departing from them creates a legal exposure as well as a usability one.",
      how: [
        "Look up the applicable standard before choosing any safety-related colour, and cite it on the drawing.",
        "Never reuse red and yellow together for anything except emergency stop on machinery, which NFPA 79 states as an explicit rule.",
        "Add a second cue to every colour code: shape, position, symbol or text.",
        "Check the colours under the actual lighting of the installation, not on a monitor."
      ],
      example: "The red mushroom-head emergency stop button on a yellow backing plate, the same on machinery across Europe because IEC 60204-1 and ISO 13850 both require it.",
      numbers: "ISO 3864-1 (2011) design principles for safety signs and markings; ISO 3864-2 (2016) product safety labels, which adds orange for medium-level risk; ISO 3864-4 (2011) sets the colorimetric values. IEC 60204-1 clause 10.7.3 covers actuator colour. Around 8 per cent of men of northern European descent and about 0.5 per cent of women have red-green colour vision deficiency.",
      pitfall: "Coding by colour alone. With roughly one man in twelve unable to separate red from green reliably, a red-versus-green indicator with no shape or text difference is unreadable for a real slice of users.",
      source: "ISO 3864 (parts 1 to 4); IEC 60204-1 clause 10.7.3; ISO 13850; NFPA 79",
      verify: { status: "verified", note: "ISO 3864's four parts, their dates and titles, and the colour meanings were read this session from the Wikipedia ISO 3864 article: red for prohibition and fire equipment, yellow for warning, blue for mandatory, green for safe condition, with 3864-2:2016 adding orange for medium-level risk and 3864-4 carrying the colorimetric values. IEC 60204-1 clause 10.7.3 was confirmed by In Compliance Magazine and an NFPA 79 committee agenda, which both quote it as: actuators of emergency stop devices shall be coloured RED, and if a background exists immediately around the actuator then this background shall be coloured YELLOW. The entry gives no clause number for ISO 13850, because the numbering moves between editions. In Compliance quotes the 2014 EN version at 4.3.5 for the red actuator on a yellow background, and at 4.3.6 for the separate rule that the actuator and background should not be labelled with text or symbols. Two machinery-safety sources, machinerysafety101 and gt-engineering, quote the 2015 edition at 4.3.6 for the colour requirement itself. The colour rule is not in doubt; only which clause carries it in which edition. The exclusive reservation of the red-and-yellow combination for emergency stop is quoted from NFPA 79 rather than from the ISO or IEC text, and is now attributed to NFPA 79. Colour vision deficiency figures from Colour Blind Awareness (1 in 12 men, 1 in 200 women) and the Wikipedia colour blindness article citing the National Eye Institute." },
      belongs: { verdict: "core", why: "Colour meaning on physical products is set by published standards with legal force, and the designer's job is to apply them correctly." },
      related: [312, 495, 906, 907]
    },
    {
      n: 909,
      title: "Packaging and unboxing",
      aka: ["Pack design", "Out-of-box experience"],
      oneLine: "The box is part of the product, and opening it is a designed sequence.",
      demo: {
        caption: "Both boxes open from the top. Only one puts the thing the buyer paid for in the first layer.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Accessories on top</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 164\"><text class=\"t\" x=\"110\" y=\"12\" text-anchor=\"middle\">OPENED HERE</text><path class=\"s-mute\" d=\"M30 30 L18 20 M190 30 L202 20\"/><rect class=\"s\" x=\"30\" y=\"30\" width=\"160\" height=\"110\"/><rect class=\"f-mute\" x=\"40\" y=\"40\" width=\"90\" height=\"9\"/><text class=\"t\" x=\"136\" y=\"48\">papers</text><circle class=\"s-mute\" cx=\"85\" cy=\"76\" r=\"16\"/><circle class=\"s-mute\" cx=\"85\" cy=\"76\" r=\"7\"/><text class=\"t\" x=\"136\" y=\"79\">cable</text><rect class=\"f-accent\" opacity=\"0.35\" x=\"40\" y=\"102\" width=\"90\" height=\"30\"/><rect class=\"s\" x=\"40\" y=\"102\" width=\"90\" height=\"30\"/><text class=\"t\" x=\"136\" y=\"120\">product</text><text class=\"t\" x=\"110\" y=\"158\" text-anchor=\"middle\">PAPERWORK FIRST</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Product on top</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 164\"><text class=\"t\" x=\"110\" y=\"12\" text-anchor=\"middle\">OPENED HERE</text><path class=\"s-mute\" d=\"M30 30 L18 20 M190 30 L202 20\"/><rect class=\"s\" x=\"30\" y=\"30\" width=\"160\" height=\"110\"/><rect class=\"f-accent\" opacity=\"0.35\" x=\"40\" y=\"40\" width=\"90\" height=\"30\"/><rect class=\"s\" x=\"40\" y=\"40\" width=\"90\" height=\"30\"/><text class=\"t\" x=\"136\" y=\"58\">product</text><circle class=\"s-mute\" cx=\"85\" cy=\"100\" r=\"16\"/><circle class=\"s-mute\" cx=\"85\" cy=\"100\" r=\"7\"/><text class=\"t\" x=\"136\" y=\"103\">cable</text><rect class=\"f-mute\" x=\"40\" y=\"126\" width=\"90\" height=\"9\"/><text class=\"t\" x=\"136\" y=\"134\">papers</text><text class=\"t\" x=\"110\" y=\"158\" text-anchor=\"middle\">PRODUCT FIRST</text></svg></div></div></div>"
      },
      what: "Packaging does several jobs at once: it protects the product in transit, sells it on a shelf, carries the legally required information, and stages the first minute of ownership. That last job is designable. The order in which parts are revealed, the friction of the lid, what the user touches first and where the instructions sit are all choices. Adam Lashinsky's Inside Apple (2012) reported a secured packaging room at Apple where staff opened prototype packs to work on this, including one designer who spent months opening hundreds of iPod box prototypes.",
      why: "The pack is the only part of the product every buyer definitely handles, and it sets the expectation the product then has to meet. It is also the cheapest place to put the setup instructions, because the user is already looking at it.",
      how: [
        "Storyboard the opening as a sequence and prototype it in real board, not in CAD.",
        "Put the thing the user wants first on top, and the cables and paperwork underneath.",
        "Design the resistance of the lid deliberately. Too tight reads as a fight, too loose reads as flimsy.",
        "Test the pack for its dull jobs too: drop, stack, damp, and whether a courier can read the label."
      ],
      example: "The Apple iPod and iPhone boxes, where the lid lifts slowly against trapped air and the device is the first thing exposed.",
      numbers: "",
      pitfall: "Designing the reveal and forgetting protection and cost. A pack that photographs well and arrives dented, or that costs more than its shelf life justifies, has failed at its actual job.",
      source: "Adam Lashinsky, Inside Apple (2012), for the Apple packaging room account; no single canonical text for unboxing design",
      verify: { status: "verified", note: "The Apple packaging room claims are Lashinsky's, reported in Inside Apple (2012) and summarised in contemporaneous trade coverage at PackagingNews, Network World, Gizmodo and 9to5Mac in January 2012, rechecked this session: a secured room in the marketing building, staff designing and opening prototype packs, and one designer spending months opening hundreds of iPod box prototypes. I have attributed it to Lashinsky rather than stating it as an established fact about Apple, because it rests on his reporting. The widely repeated claims about lid friction being engineered to a specific value are not sourced anywhere I could verify, so I have left the number out." },
      belongs: { verdict: "core", why: "Packaging is a designed physical artefact with protection, regulatory and experience requirements, and it is usually drawn by the product design team." },
      related: [897, 9897, 910, 911]
    },
    {
      n: 910,
      title: "Lifecycle and durability",
      aka: ["Product lifespan", "Life cycle assessment", "Design for longevity"],
      oneLine: "How long the product is meant to last, and what its whole life costs the world.",
      demo: {
        caption: "Two measured points from the cartel years. Reference bulb life fell towards the 1,000 hours the members had agreed.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 520 196\"><text class=\"t\" x=\"90\" y=\"16\">DASHED: THE 1,000-HOUR STANDARD AGREED IN 1925</text><path class=\"s-mute\" d=\"M90 20 V160 H470\"/><rect class=\"f-mute\" x=\"150\" y=\"34\" width=\"70\" height=\"126\"/><rect class=\"f-mute\" x=\"310\" y=\"76\" width=\"70\" height=\"84\"/><path class=\"s-accent\" stroke-dasharray=\"4 4\" d=\"M90 90 H470\"/><text class=\"t\" x=\"185\" y=\"30\" text-anchor=\"middle\">1,800 H</text><text class=\"t\" x=\"345\" y=\"70\" text-anchor=\"middle\">1,205 H</text><text class=\"t\" x=\"185\" y=\"176\" text-anchor=\"middle\">1926</text><text class=\"t\" x=\"345\" y=\"176\" text-anchor=\"middle\">1933-34</text><text class=\"t\" x=\"90\" y=\"192\">MEASURED AVERAGE LIFE OF REFERENCE BULBS</text></svg></div>"
      },
      what: "Two connected questions. Durability is how long the object survives normal use, which the designer sets through material, section, fastener and service strategy. Life cycle assessment is the formal accounting of environmental impact across the whole life, standardised by ISO 14040 (principles and framework) and ISO 14044 (requirements and guidelines), both from 2006. An LCA runs in four phases: goal and scope, inventory, impact assessment and interpretation. Lifespan can also be shortened on purpose. The Phoebus cartel, formed in Geneva in December 1924 by Osram, Philips, Tungsram and others, codified incandescent bulb life at 1,000 hours from a previous norm of 1,500 to 2,000.",
      why: "Deciding the intended lifespan changes almost every other decision: which plastic, which fastener, whether the battery is replaceable, whether spares exist. It is better made explicitly than left to fall out of cost engineering.",
      how: [
        "State the intended service life in the brief, in years or cycles, and design the weakest part to meet it.",
        "Identify the part that will fail first and make it the easiest to replace.",
        "Commission an LCA early enough to change the design, since the answers depend heavily on where you drew the system boundary.",
        "Design the finish for how it will look after three years of handling, not on day one."
      ],
      example: "The Phoebus cartel's 1,000-hour bulb standard, documented by Markus Krajewski in IEEE Spectrum, where measured average life of reference bulbs fell from 1,800 hours in 1926 to 1,205 hours by 1933-34.",
      numbers: "ISO 14040:2006 and ISO 14044:2006, four LCA phases. Phoebus cartel: founded 23 December 1924 in Geneva, 1,000-hour standard codified by early 1925, effective until 1940.",
      pitfall: "Treating an LCA number as objective. Wikipedia's own summary of the method notes that rigid system boundaries and inconsistent inventory data mean different assumptions can produce contradictory conclusions for the same product, so the boundary is as important as the result.",
      source: "ISO 14040:2006 and ISO 14044:2006; Markus Krajewski, The Great Lightbulb Conspiracy, IEEE Spectrum (24 September 2014)",
      verify: { status: "verified", note: "ISO 14040 and ISO 14044 scopes, the 2006 dates and the four phases checked on the Wikipedia life-cycle assessment article, along with its documented criticisms of data quality and system boundaries. Phoebus figures read from Krajewski's IEEE Spectrum article: founded 23 December 1924 in Geneva, members including Osram, Philips, Compagnie des Lampes, Tungsram, AEI and Tokyo Electric, 1,000-hour standard codified by early 1925 down from 1,500-2,000, reference bulb life falling from 1,800 hours in 1926 to 1,205 hours in 1933-34, agreement nullified in 1940." },
      belongs: { verdict: "core", why: "Intended lifespan is a design input that determines material, fastener and service decisions, and LCA is the standard method for checking the consequences." },
      related: [901, 911, 912, 883]
    },
    {
      n: 911,
      title: "Sustainable material choice",
      aka: ["Material selection for environment", "Eco-materials"],
      oneLine: "Choosing materials on environmental grounds as well as cost, strength and appearance.",
      demo: {
        caption: "Two materials, two end-of-life routes. Bond them and neither route is open; seam them and both stay available.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Bonded laminate</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 152\"><rect class=\"s\" x=\"40\" y=\"26\" width=\"140\" height=\"22\"/><text class=\"t\" x=\"110\" y=\"41\" text-anchor=\"middle\">COTTON</text><rect class=\"f-accent\" opacity=\"0.75\" x=\"40\" y=\"48\" width=\"140\" height=\"7\"/><text class=\"t\" x=\"36\" y=\"55\" text-anchor=\"end\">GLUE</text><rect class=\"s\" x=\"40\" y=\"55\" width=\"140\" height=\"24\"/><text class=\"t\" x=\"110\" y=\"72\" text-anchor=\"middle\">POLYMER</text><path class=\"s-mute\" d=\"M110 90 V106\"/><polygon class=\"f-mute\" points=\"104,106 116,106 110,114\"/><text class=\"t\" x=\"110\" y=\"134\" text-anchor=\"middle\">MIXED WASTE</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Mechanical seam</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 152\"><rect class=\"s\" x=\"40\" y=\"26\" width=\"140\" height=\"22\"/><text class=\"t\" x=\"110\" y=\"41\" text-anchor=\"middle\">COTTON</text><rect class=\"s\" x=\"40\" y=\"56\" width=\"140\" height=\"24\"/><text class=\"t\" x=\"110\" y=\"73\" text-anchor=\"middle\">POLYMER</text><path class=\"s-accent\" d=\"M62 22 V84 M158 22 V84\"/><text class=\"t\" x=\"110\" y=\"98\" text-anchor=\"middle\">UNPICKS INTO TWO</text><path class=\"s-mute\" d=\"M92 104 L70 120 M128 104 L150 120\"/><polygon class=\"f-mute\" points=\"78,114 66,124 68,111\"/><polygon class=\"f-mute\" points=\"142,114 154,124 152,111\"/><text class=\"t\" x=\"56\" y=\"140\" text-anchor=\"middle\">BIOLOGICAL</text><text class=\"t\" x=\"164\" y=\"140\" text-anchor=\"middle\">TECHNICAL</text></svg></div></div></div>"
      },
      what: "The most influential framing is McDonough and Braungart's Cradle to Cradle: Remaking the Way We Make Things (2002), which splits materials into two streams. Biological nutrients are organic materials that can safely return to the soil after use. Technical nutrients are non-toxic synthetics that can circulate repeatedly without losing quality. The design implication is to keep the two streams separate and never bond them into a composite that can be neither composted nor recycled. The alternative, evidence-led route is life cycle assessment under ISO 14040 and ISO 14044, which measures rather than classifies.",
      why: "Material is usually the largest single environmental decision in a physical product and it is made early, often before anyone thinks to ask. It also decides whether the object has any end-of-life route other than landfill.",
      how: [
        "Keep material families separate in the assembly, so parts can be sorted without chemical separation.",
        "Avoid glued laminates of dissimilar materials wherever a mechanical joint will do.",
        "Mark polymer parts with their resin identification code so a recycler can sort them.",
        "Check the claim. Ask for the LCA and its system boundary rather than accepting a supplier's word for eco."
      ],
      example: "A product that uses one polymer family throughout the housing, with mouldings marked by resin code, so the whole enclosure can go into one recycling stream.",
      numbers: "",
      pitfall: "Cradle to Cradle has real critics, and pretending otherwise is a mistake. Friedrich Schmidt-Bleek of the Wuppertal Institute dismissed parts of it as impractical at scale, and others note the model largely ignores the use phase, which dominates the footprint of anything with a motor or an engine.",
      source: "William McDonough and Michael Braungart, Cradle to Cradle: Remaking the Way We Make Things (2002); ISO 14040 and ISO 14044",
      verify: { status: "disputed", note: "Authors, 2002 date, subtitle and the biological/technical nutrient definitions checked on the Wikipedia cradle-to-cradle design article, quoting its definitions directly. The same article carries the criticisms I have cited: Schmidt-Bleek of the Wuppertal Institute calling the concept impractical at scale, the argument that the model ignores the use phase, and the objection that C2C certification uses internal rather than independent external review of lifecycle assessments. Marked disputed because the framework is real and influential but contested on all three points." },
      belongs: { verdict: "core", why: "Material selection is a design decision with the largest environmental consequence, and there is a named framework and a measurement standard for making it." },
      related: [897, 910, 912, 9897]
    },
    {
      n: 912,
      title: "Circularity",
      aka: ["Circular economy", "Closed-loop design"],
      oneLine: "Designing so materials keep circulating through reuse, repair and remanufacture instead of being discarded.",
      demo: {
        caption: "Four return loops from the same product. The inner loop keeps the most value; the outer one keeps the least.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 520 176\"><text class=\"t\" x=\"60\" y=\"22\" text-anchor=\"middle\">MATERIAL</text><text class=\"t\" x=\"170\" y=\"22\" text-anchor=\"middle\">PARTS</text><text class=\"t\" x=\"280\" y=\"22\" text-anchor=\"middle\">ASSEMBLY</text><text class=\"t\" x=\"380\" y=\"22\" text-anchor=\"middle\">RETAIL</text><text class=\"t\" x=\"466\" y=\"22\" text-anchor=\"middle\">USE</text><path class=\"s-mute\" d=\"M70 35 H160 M180 35 H270 M290 35 H370 M390 35 H456\"/><rect class=\"f-mute\" x=\"55\" y=\"30\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"165\" y=\"30\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"275\" y=\"30\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"375\" y=\"30\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"461\" y=\"30\" width=\"10\" height=\"10\"/><path class=\"s-accent\" d=\"M474 42 V52 Q474 58 468 58 H458 Q452 58 452 52 V46\"/><polygon class=\"f-accent\" points=\"448,46 456,46 452,40\"/><text class=\"t\" x=\"446\" y=\"61\" text-anchor=\"end\">REPAIR</text><path class=\"s-mute\" d=\"M478 42 V76 Q478 84 470 84 H388 Q380 84 380 76 V50\"/><polygon class=\"f-mute\" points=\"376,50 384,50 380,44\"/><text class=\"t\" x=\"392\" y=\"80\">REUSE</text><path class=\"s-mute\" d=\"M482 42 V104 Q482 112 474 112 H288 Q280 112 280 104 V50\"/><polygon class=\"f-mute\" points=\"276,50 284,50 280,44\"/><text class=\"t\" x=\"292\" y=\"108\">REMANUFACTURE</text><path class=\"s-mute\" d=\"M486 42 V132 Q486 140 478 140 H68 Q60 140 60 132 V50\"/><polygon class=\"f-mute\" points=\"56,50 64,50 60,44\"/><text class=\"t\" x=\"72\" y=\"136\">RECYCLE</text><text class=\"t\" x=\"60\" y=\"166\">THE FURTHER OUT THE LOOP, THE MORE VALUE IS LOST</text></svg></div>"
      },
      what: "The circular economy replaces the take-make-dispose line with loops. Kenneth Boulding's 1966 essay The Economics of the Coming Spaceship Earth is usually cited as the first expression of the idea, though he did not use the phrase. Walter Stahel and Genevieve Reday's 1976 report to the European Commission sketched the model, and Pearce and Turner set it out in economic terms in 1990. The Ellen MacArthur Foundation, established in 2009 and launched publicly in 2010, popularised it and produced the butterfly diagram, which splits flows into a biological cycle that returns nutrients to the earth and a technical cycle that keeps products in use through reuse, repair, remanufacture and recycling.",
      why: "For a designer, circularity is a set of concrete constraints rather than an ideal: parts must come apart, materials must be sortable, spares must exist and value must remain in the object after first use. It also changes the business model, since renting or refurbishing a product only works if it was designed to come back.",
      how: [
        "Work the inner loops first. Reuse and repair keep more value than recycling does.",
        "Design for return: how the object gets back, who opens it, and what they do with the parts.",
        "Keep material streams separate so the technical and biological cycles do not contaminate each other.",
        "Check whether your business model actually captures the value of the loop, or whether the product just gets replaced anyway."
      ],
      example: "The Ellen MacArthur Foundation butterfly diagram, published on their site, with the biological cycle on the left and the technical cycle on the right.",
      numbers: "",
      pitfall: "Circularity is criticised, on record, as vague and as a greenwashing vehicle. Thermodynamics also limits it: matter cannot be recycled indefinitely without loss, so a claim of a fully closed loop is a claim to check rather than to repeat.",
      source: "Kenneth Boulding (1966); Walter Stahel and Genevieve Reday (1976); Pearce and Turner, Economics of Natural Resources and the Environment (1990); Ellen MacArthur Foundation",
      verify: { status: "verified", note: "The lineage from Boulding 1966 through Stahel and Reday's 1976 report to Pearce and Turner 1990 is set out in the Wikipedia circular economy article, which also carries the criticisms I have used: the thermodynamic objection, the umbrella-concept vagueness charge and the greenwashing risk. The butterfly diagram and the definitions of the technical and biological cycles come from the Ellen MacArthur Foundation's own circular-economy-diagram page. Foundation dates from the Wikipedia entry: established 23 June 2009, publicly launched 2 September 2010." },
      belongs: { verdict: "core", why: "It sets the end-of-life constraints that now drive disassembly, material and repair decisions on physical products, and EU regulation is codifying it." },
      related: [900, 901, 910, 911]
    }
  ]
};
