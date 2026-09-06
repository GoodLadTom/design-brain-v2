window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[27] = {
  n: 27,
  slug: "process",
  title: "Process and method",
  blurb: "How design work is actually run: framing, researching, sketching, prototyping, testing and reviewing.",
  intro: "This section covers the working method rather than the artefact. Most of it was written down between the 1960s and the 2010s by people trying to make design repeatable enough to teach and to defend: ergonomists, usability researchers, service designers, software teams and the UK's Design Council. Some of it is well evidenced. Some is a workshop technique with a good story attached, and the difference matters when a client asks why they are paying for a fortnight of research before anyone opens a design file. The entries below say which is which, and flag the places where the popular version has drifted from what the original source actually claimed. Process is what turns a good instinct into something you can repeat on the next job and explain on the current one.",
  sources: [
    "Horst Rittel and Melvin Webber, Dilemmas in a General Theory of Planning, Policy Sciences (1973)",
    "Richard Buchanan, Wicked Problems in Design Thinking, Design Issues (1992)",
    "Design Council (UK), the Double Diamond and the Framework for Innovation",
    "Hasso Plattner Institute of Design at Stanford, An Introduction to Design Thinking: Process Guide (2010)",
    "ISO 9241-210:2019, Ergonomics of human-system interaction, Part 210: Human-centred design for interactive systems",
    "Hugh Beyer and Karen Holtzblatt, Contextual Design (1997)",
    "Alan Cooper, The Inmates Are Running the Asylum (1999); Chapman and Milham (2006)",
    "G. Lynn Shostack, Designing Services That Deliver, Harvard Business Review 62(1), January to February 1984, 133 to 139 (service blueprint)",
    "Indi Young, Mental Models: Aligning Design Strategy with Human Behavior (Rosenfeld Media, 2008)",
    "John Annett and Keith Duncan, Task Analysis and Training Design, Occupational Psychology 41 (1967)",
    "Stephanie Houde and Charles Hill, What do Prototypes Prototype? (Apple Computer, 1997)",
    "Marc Rettig, Prototyping for Tiny Fingers, CACM (1994); Carolyn Snyder, Paper Prototyping (2003)",
    "Adam Connor and Aaron Irizarry, Discussing Design (O'Reilly, 2015)",
    "Jakob Nielsen and Rolf Molich, CHI 1990 (heuristic evaluation); Nielsen and Landauer, INTERCHI 1993",
    "Wharton, Rieman, Lewis and Polson, in Nielsen and Mack (eds), Usability Inspection Methods (1994)",
    "K. Anders Ericsson and Herbert Simon, Verbal Reports as Data, Psychological Review (1980)",
    "Laura Faulkner, Beyond the Five-User Assumption, Behavior Research Methods 35(3) (2003), 379 to 383",
    "W3C, Website Accessibility Conformance Evaluation Methodology (WCAG-EM)",
    "Ron Kohavi, Randal Crook and Roger Longbotham (2009), quoted in Kohavi, Tang and Xu, Trustworthy Online Controlled Experiments (2020)",
    "Kerry Rodden, Hilary Hutchinson and Xin Fu, Measuring the User Experience on a Large Scale, CHI 2010",
    "Michael Nygard, Documenting Architecture Decisions (2011)",
    "Norman L. Kerth, Project Retrospectives: A Handbook for Team Reviews (2001)",
    "Ken Schwaber and Jeff Sutherland, The Scrum Guide (2020)",
    "Ward Cunningham, technical debt, OOPSLA (1992)",
    "Nielsen Norman Group articles on diary studies, heuristic evaluation, remote and unmoderated testing (checked 2026)",
    "John Brooke, SUS: a quick and dirty usability scale (1996); MeasuringU benchmark data"
  ],
  entries: [
    {
      n: 944,
      title: "Brief writing",
      aka: ["Design brief", "Creative brief"],
      oneLine: "A written agreement on problem, audience, constraints and deliverables, settled before design starts.",
      demo: { none: "A brief is an agreement written in words, so any picture of one would only redraw its headings; what a badly framed brief costs is shown at 945." },
      what: "A brief is a short written agreement, made before any design happens, about what the work has to achieve. It names the problem, the audience, the fixed constraints, the deliverables, the deadline and the money. Nobody invented it. It is trade practice, and the published checklists broadly agree on the headings: background, objectives, audience, requirements and deliverables, budget and timeline.",
      why: "A brief turns a vague wish into something both sides can argue against later. It gives the client a way to judge the work other than personal taste, and it gives you a defence when scope quietly grows.",
      how: [
        "Write the problem in one sentence the client would say out loud themselves.",
        "List the fixed constraints separately from the preferences, and mark which is which.",
        "State what success looks like in something you can check afterwards, such as enquiries received or tasks completed.",
        "Write the out-of-scope list; it is usually more useful than the in-scope list.",
        "Get it signed before you open the design file."
      ],
      example: "A dental practice asks for a modern website. The brief turns that into: replace the 2014 template site, keep the existing logo and the practice's own photographs, cover the nine treatment pages already published, add a booking link, launch before the September campaign, fixed fee.",
      numbers: "",
      pitfall: "Briefs written by the designer alone read as a wish list nobody agreed to. Briefs that specify the solution, such as asking for a full-width video hero, delete the design problem before anyone has looked at it.",
      source: "Origin unclear. Standard trade practice.",
      verify: { status: "unverified", note: "I went looking for a canonical origin for the design brief and did not find one. The practice is real and consistently described, but the guidance I could check this session is practitioner material (the Interaction Design Foundation's design briefs topic page, Figma's resource library), not a named theory or a standard. I have therefore claimed no author and no date." },
      belongs: { verdict: "core", why: "Every piece of commissioned design starts with an agreement about what it is for. Writing that agreement down is part of the craft, not administration." },
      related: [945, 959, 979, 983]
    },
    {
      n: 945,
      title: "Problem framing and reframing",
      aka: ["Problem setting", "Wicked problems"],
      oneLine: "Choosing which problem to solve, and being willing to restate it, before solving anything.",
      demo: {
        caption: "Count the dots. The same situation, stated at three levels, admits a different number of answers.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 130\"><text class=\"t\" x=\"8\" y=\"14\">level of the problem</text><text class=\"t\" x=\"178\" y=\"14\">answers the wording admits</text><path class=\"s-mute\" d=\"M170 24 V116\" stroke-dasharray=\"3 3\"/><path class=\"s-mute\" d=\"M158 112 V30\"/><polygon class=\"f-mute\" points=\"158,22 153,33 163,33\"/><text class=\"t\" x=\"8\" y=\"36\">reduce missed appointments</text><text class=\"t\" x=\"8\" y=\"72\">get more people booking</text><text class=\"t\" x=\"8\" y=\"108\">make the button bigger</text><circle class=\"f\" cx=\"178\" cy=\"32\" r=\"5\"/><circle class=\"f\" cx=\"198\" cy=\"32\" r=\"5\"/><circle class=\"f\" cx=\"218\" cy=\"32\" r=\"5\"/><circle class=\"f\" cx=\"238\" cy=\"32\" r=\"5\"/><circle class=\"f\" cx=\"258\" cy=\"32\" r=\"5\"/><circle class=\"f\" cx=\"278\" cy=\"32\" r=\"5\"/><circle class=\"f\" cx=\"298\" cy=\"32\" r=\"5\"/><circle class=\"f\" cx=\"318\" cy=\"32\" r=\"5\"/><circle class=\"f\" cx=\"338\" cy=\"32\" r=\"5\"/><circle class=\"f\" cx=\"178\" cy=\"68\" r=\"5\"/><circle class=\"f\" cx=\"198\" cy=\"68\" r=\"5\"/><circle class=\"f\" cx=\"218\" cy=\"68\" r=\"5\"/><circle class=\"f\" cx=\"238\" cy=\"68\" r=\"5\"/><circle class=\"f\" cx=\"258\" cy=\"68\" r=\"5\"/><circle class=\"f\" cx=\"178\" cy=\"104\" r=\"5\"/><circle class=\"f\" cx=\"198\" cy=\"104\" r=\"5\"/></svg></div>"
      },
      what: "The way you state a problem already contains most of the answer. Horst Rittel and Melvin Webber called planning problems wicked in Dilemmas in a General Theory of Planning (Policy Sciences, 1973), and listed ten properties: no definitive formulation, no stopping rule, solutions that are better or worse rather than true or false, every problem unique, and so on. Richard Buchanan carried the argument into design in Wicked Problems in Design Thinking (Design Issues, 1992). Reframing means deliberately restating the problem to see which solutions become visible.",
      why: "A reframe changes the set of answers you can even see. It also protects you from delivering a good answer to the wrong question, which no amount of craft repairs afterwards.",
      how: [
        "Write the problem three different ways before committing to one.",
        "Push the statement up a level and down a level, then decide which level you can act on.",
        "Ask what would have to be true for this to be the real problem.",
        "Read the restated problem back to the client and check they recognise themselves in it."
      ],
      example: "The Design Council's first diamond exists for this reason. Its own page says the first diamond helps people 'understand, rather than simply assume, what the problem is'.",
      numbers: "Rittel and Webber list ten properties of a wicked problem.",
      pitfall: "Reframing becomes a way of avoiding delivery. If every review reopens the problem statement, nothing ships.",
      source: "Rittel and Webber (1973); Buchanan (1992).",
      verify: { status: "verified", note: "Checked Wikipedia's wicked problem entry for the Rittel and Webber citation, the ten properties and Buchanan's 1992 Design Issues article, and the Design Council's own page for the first-diamond wording. One caveat: the coinage is contested, since C. West Churchman used the term in a 1967 Management Science editorial." },
      belongs: { verdict: "core", why: "Deciding what the problem is changes more about the outcome than any later choice, and it is the step most often skipped." },
      related: [944, 946, 958]
    },
    {
      n: 946,
      title: "Discover, define, develop, deliver",
      aka: ["Double Diamond", "Framework for Innovation"],
      oneLine: "A two-diamond map of a project: widen then narrow on the problem, then on the solution.",
      demo: {
        caption: "Widen then narrow on the problem, then again on the solution. The dots are how many options are live at each point.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 154\"><text class=\"t\" x=\"95\" y=\"12\" text-anchor=\"middle\">the problem</text><text class=\"t\" x=\"265\" y=\"12\" text-anchor=\"middle\">the solution</text><path class=\"s\" d=\"M20 66 L95 22 L170 66 L95 110 Z\"/><path class=\"s\" d=\"M190 66 L265 22 L340 66 L265 110 Z\"/><path class=\"s-mute\" d=\"M95 22 V110\" stroke-dasharray=\"3 3\"/><path class=\"s-mute\" d=\"M265 22 V110\" stroke-dasharray=\"3 3\"/><circle class=\"f-mute\" cx=\"30\" cy=\"66\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"160\" cy=\"66\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"200\" cy=\"66\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"330\" cy=\"66\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"95\" cy=\"34\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"95\" cy=\"50\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"95\" cy=\"66\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"95\" cy=\"82\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"95\" cy=\"98\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"265\" cy=\"34\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"265\" cy=\"50\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"265\" cy=\"66\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"265\" cy=\"82\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"265\" cy=\"98\" r=\"3.5\"/><text class=\"t\" x=\"57\" y=\"128\" text-anchor=\"middle\">discover</text><text class=\"t\" x=\"133\" y=\"128\" text-anchor=\"middle\">define</text><text class=\"t\" x=\"227\" y=\"128\" text-anchor=\"middle\">develop</text><text class=\"t\" x=\"303\" y=\"128\" text-anchor=\"middle\">deliver</text><path class=\"s-mute\" d=\"M330 138 C 300 152, 62 152, 34 140\"/><polygon class=\"f-mute\" points=\"26,136 38,132 37,144\"/></svg></div>"
      },
      what: "The Design Council's model splits a project into two diamonds. The first widens to understand the situation (Discover) and narrows to a stated problem (Define). The second widens to possible answers (Develop) and narrows to one that ships (Deliver). The Council later expanded it into what it calls the Framework for Innovation, adding the point that what you learn can send you back to the start of the diamond, and that in a digital product no idea is ever finished.",
      why: "It stops the common failure of jumping to a solution in the first meeting, and it gives non-designers a picture of why the middle of a project looks chaotic before it looks resolved.",
      how: [
        "Say which diamond and which half you are in at the start of every session.",
        "Do not let Define happen in the same meeting as Discover; put a night between them.",
        "Plan for a return trip; budget the second diamond assuming the first one changes the brief.",
        "Show the client the diagram early so the widening phase does not read as drift."
      ],
      example: "The Design Council publishes the diagram on its own site and describes the first diamond as helping people understand rather than assume what the problem is.",
      numbers: "",
      pitfall: "Teams treat the diamonds as a waterfall with new labels and run each phase once. The model only pays for itself when the second diamond is allowed to send you back into the first.",
      source: "Design Council (UK). Date reported inconsistently, see verify note.",
      verify: { status: "disputed", note: "The model is real and published by the Design Council; the date is not consistent between sources. The Council's own resource page, read again this session, dates it to 2003 and opens 'In 2003, the Design Council was promoting the positive impact of adopting a strategic approach to design'. Wikipedia says the Council popularised it in 2005 and that it adapted Bela H. Banathy's 1996 divergence and convergence model. I checked both this session and cannot settle it, so treat any single date you see quoted as unsafe." },
      belongs: { verdict: "core", why: "It is the most widely used shared vocabulary for the shape of a design project, and it names the two-stage structure a designer actually works in." },
      related: [945, 947, 960]
    },
    {
      n: 947,
      title: "Empathise, define, ideate, prototype, test",
      aka: ["The d.school five modes", "Design thinking process"],
      oneLine: "Stanford's five-mode model of human-centred design, taught mainly to people who are not designers.",
      demo: { none: "The five modes are names for what a room is doing, so any drawing of them is the five words in boxes; the shape that carries information, widening then narrowing, belongs to 946." },
      what: "The Hasso Plattner Institute of Design at Stanford, known as the d.school, published An Introduction to Design Thinking: Process Guide in 2010. It sets out five modes: Empathize, Define, Ideate, Prototype and Test, in the guide's own American spelling. It calls empathy 'the centerpiece of a human-centered design process' and describes the Define mode as 'all about bringing clarity and focus to the design space'. The modes are presented as things you do, not as a timetable. Whether the process reliably produces better outcomes is argued over in print, and the guide itself offers no evidence that it does.",
      why: "It gives a mixed team a shared vocabulary and a running order, which matters most when the people in the room are engineers, clinicians or executives rather than designers.",
      how: [
        "Use the mode names as a way of naming what the room is doing right now.",
        "Treat Empathize as fieldwork with real people, not as a sympathetic conversation in a workshop.",
        "Return to earlier modes openly; the guide does not present them as one-way.",
        "Do not sell the five modes to a client as evidence that the outcome will be good."
      ],
      example: "The 2010 process guide itself is a checkable artefact: a short PDF issued by the d.school and mirrored by organisations such as ALNAP, with a page per mode.",
      numbers: "Five modes.",
      pitfall: "Run as five meetings in a row it produces the ceremony without the learning, and the sticky notes become the deliverable.",
      source: "Hasso Plattner Institute of Design at Stanford, An Introduction to Design Thinking: Process Guide (2010).",
      verify: { status: "disputed", note: "The guide, its 2010 date and the mode descriptions are verified: ALNAP's record of the Stanford d.school process guide, checked again this session, dates it to 2010 and carries both quoted lines word for word. The wider claim that design thinking works as advertised is contested in print by Lucy Kimbell (2011), Lee Vinsel (2018), Natasha Iskander (2018) and Rebecca Ackermann (2023), per Wikipedia's design thinking entry." },
      belongs: { verdict: "core", why: "It is the process model most designers will be asked to work inside, so knowing what it does and does not claim is part of the job." },
      related: [945, 946, 961, 9947]
    },
    {
      n: 9947,
      title: "Human-centred design as a standard (ISO 9241-210)",
      aka: ["ISO 9241-210", "Human-centred design standard"],
      oneLine: "An international standard setting out the principles and activities of human-centred design for interactive systems.",
      demo: { none: "The entry deliberately declines to list the standard's contents, not having read the paywalled text, so there is nothing to draw here that would not be invented." },
      what: "ISO 9241-210 is the formal version of what design thinking describes informally. Its full title is Ergonomics of human-system interaction, Part 210: Human-centred design for interactive systems, and it provides requirements and recommendations for human-centred design principles and activities across the life cycle of computer-based interactive systems. The current edition is ISO 9241-210:2019, published in July 2019, and adopted in Europe as EN ISO 9241-210:2019.",
      why: "When a client, a public-sector buyer or a lawyer asks what process you followed, a named international standard answers the question in a way that a workshop model does not.",
      how: [
        "Cite the standard by number in proposals for regulated or public-sector work.",
        "Map your own process onto its activities so you can show the equivalence rather than adopting new vocabulary.",
        "Buy the current edition rather than quoting blog summaries of it; summaries drift.",
        "Use it alongside WCAG for accessibility, which it does not replace."
      ],
      example: "ISO lists it as ISO 9241-210:2019, edition 2, dated 2019-07; CEN lists the European adoption as EN ISO 9241-210:2019.",
      numbers: "ISO 9241-210:2019 is the second edition, published July 2019.",
      pitfall: "The standard describes activities, not quality. A team can satisfy every clause and still ship something unusable.",
      source: "ISO 9241-210:2019, Ergonomics of human-system interaction, Part 210.",
      verify: { status: "verified", note: "Re-checked this session: the ISO catalogue entry for 9241-210:2019 gives edition 2, dated 2019-07, under the title Ergonomics of human-system interaction, Part 210: Human-centred design for interactive systems, and the CEN listing gives EN ISO 9241-210:2019, which describes it as providing requirements and recommendations for human-centred design principles and activities throughout the life cycle. I have not read the paywalled standard itself, so I have deliberately not listed its principles individually. Added as a gap: the master list covers two informal process models but not the formal one." },
      belongs: { verdict: "core", why: "It is the only process description in this family that carries legal and procurement weight, and it is what human-centred design means in a contract." },
      related: [946, 947, 975]
    },
    {
      n: 948,
      title: "Jobs to be done",
      aka: ["JTBD", "Outcome-driven innovation"],
      oneLine: "Describe the progress someone is trying to make, rather than describing the person or the product.",
      demo: {
        caption: "One job at the top. Three unrelated things do it, which is why the job outlives whatever you build.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><span class=\"db-note\">Job: be at Thursday's appointment without losing a morning's work</span><svg class=\"db-svg\" viewBox=\"0 0 340 126\"><rect class=\"s\" x=\"24\" y=\"10\" width=\"52\" height=\"88\" rx=\"6\"/><rect class=\"f-mute\" x=\"31\" y=\"26\" width=\"38\" height=\"20\" rx=\"2\"/><rect class=\"f-mute\" x=\"31\" y=\"54\" width=\"38\" height=\"4\"/><rect class=\"f-mute\" x=\"31\" y=\"64\" width=\"26\" height=\"4\"/><rect class=\"s\" x=\"118\" y=\"30\" width=\"88\" height=\"50\" rx=\"2\"/><rect class=\"f-mute\" x=\"128\" y=\"42\" width=\"52\" height=\"5\"/><rect class=\"f-mute\" x=\"128\" y=\"56\" width=\"36\" height=\"5\"/><rect class=\"f-mute\" x=\"128\" y=\"66\" width=\"60\" height=\"5\"/><rect class=\"s\" x=\"248\" y=\"14\" width=\"80\" height=\"80\"/><path class=\"s\" d=\"M248 34 H328\"/><rect class=\"f-mute\" x=\"256\" y=\"42\" width=\"12\" height=\"12\"/><rect class=\"f-mute\" x=\"274\" y=\"42\" width=\"12\" height=\"12\"/><rect class=\"f-mute\" x=\"292\" y=\"42\" width=\"12\" height=\"12\"/><rect class=\"f-mute\" x=\"310\" y=\"42\" width=\"12\" height=\"12\"/><rect class=\"f-mute\" x=\"256\" y=\"60\" width=\"12\" height=\"12\"/><rect class=\"f-mute\" x=\"274\" y=\"60\" width=\"12\" height=\"12\"/><rect class=\"f-mute\" x=\"292\" y=\"60\" width=\"12\" height=\"12\"/><rect class=\"f-mute\" x=\"310\" y=\"60\" width=\"12\" height=\"12\"/><rect class=\"f-mute\" x=\"256\" y=\"78\" width=\"12\" height=\"12\"/><rect class=\"f-mute\" x=\"274\" y=\"78\" width=\"12\" height=\"12\"/><rect class=\"f-mute\" x=\"292\" y=\"78\" width=\"12\" height=\"12\"/><rect class=\"f-mute\" x=\"310\" y=\"78\" width=\"12\" height=\"12\"/><circle class=\"s-accent\" cx=\"280\" cy=\"66\" r=\"10\"/><text class=\"t\" x=\"50\" y=\"118\" text-anchor=\"middle\">on the phone</text><text class=\"t\" x=\"162\" y=\"118\" text-anchor=\"middle\">in the wallet</text><text class=\"t\" x=\"288\" y=\"118\" text-anchor=\"middle\">on the wall</text></svg></div></div>"
      },
      what: "The idea is that people hire a product to get a job done, so you should specify the job rather than the buyer's demographics. Anthony Ulwick built the outcome-driven innovation version, taking the first of his patents on the process in 1999, publishing it in Harvard Business Review in 2002 and in What Customers Want (2005). Clayton Christensen popularised the phrase, and his book The Innovator's Solution cites Ulwick and Richard Pedi of Gage Foods. Who originated the idea is argued over, with Ulwick's own firm claiming the theory as his and other accounts treating Christensen's and Bob Moesta's work as separate lineages.",
      why: "A job statement survives redesigns and re-platforming, because it describes the person's situation rather than your current feature set. It also stops demographic detail from driving decisions it cannot support.",
      how: [
        "Write the job as a situation, a motivation and a desired outcome, not as a feature request.",
        "Interview people about the last time they did the job, not about what they would like.",
        "Check the job statement still makes sense if your product does not exist.",
        "Keep the job separate from the solution in every document, including the brief."
      ],
      example: "Christensen's milkshake story is the usual illustration. I have not verified the underlying study this session, so treat it as an anecdote he repeated rather than published evidence.",
      numbers: "",
      pitfall: "Job statements get written by the team in a room, then treated as research. Written that way they are opinions in a new format.",
      source: "Anthony Ulwick, outcome-driven innovation (HBR 2002; What Customers Want, 2005); Clayton Christensen, The Innovator's Solution (2003).",
      verify: { status: "disputed", note: "Verified via Wikipedia's outcome-driven innovation entry: Ulwick's first patent 1999, HBR article 2002, book 2005, and Christensen's citation of Ulwick and Pedi. The priority claim is not in that entry and comes from elsewhere: Ulwick's own firm, Strategyn, publishes a history page stating that he invented the theory and that Christensen only popularised it, while independent write-ups of the field treat Christensen's and Bob Moesta's strands as separate lineages. Separately, the quarter-inch drill and quarter-inch hole line usually quoted alongside JTBD is misattributed: Quote Investigator traces it to a 1942 newspaper advertisement and notes that Theodore Levitt himself credited Leo McGivena." },
      belongs: { verdict: "adjacent", why: "Borrowed from marketing and innovation management. The design use is concrete: it gives you a one-line statement of what a screen, page or product has to accomplish, which you can test a design against." },
      related: [944, 953, 957]
    },
    {
      n: 949,
      title: "User interviews",
      aka: ["Depth interviews", "Research interviews"],
      oneLine: "A structured conversation about what someone actually did, run before you design anything.",
      demo: {
        caption: "Same subject, two questions. Only one of the answers contains anything you could design against.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Asked to predict</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col\"><div><span class=\"db-label\">Question</span><span>Would you use an online booking form?</span></div><div><span class=\"db-label\">Answer</span><span>Yes, that sounds handy.</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Asked what happened</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col\"><div><span class=\"db-label\">Question</span><span>How did you book your last appointment?</span></div><div><span class=\"db-label\">Answer</span><span>Rang at nine, engaged. Rang again at one, left a message. They rang back on Thursday.</span></div></div></div></div></div></div>"
      },
      what: "A user interview is a planned conversation aimed at behaviour rather than opinion. The discipline is in the questions: past events rather than predictions, specifics rather than generalities, and silence rather than prompting. There is no single originator for the technique, but the closest formal grounding in design is Beyer and Holtzblatt's contextual inquiry, with its principles of context, partnership, interpretation and focus.",
      why: "It is the cheapest way to find out that the problem you were given is not the problem people have. It also gives you the words real users use, which you can put straight into the interface.",
      how: [
        "Ask about the last time they did the thing, then walk through it step by step.",
        "Avoid questions that ask people to predict their own behaviour; they are poor at it.",
        "Say back what you think you heard and let them correct you.",
        "Record and take notes with two people, so nobody has to write and listen at once.",
        "Stop asking whether they like something; ask what they did next."
      ],
      example: "Asking a receptionist to show you how she books a patient, then following up on every hesitation, will surface workarounds she would never list if you asked her what her problems are.",
      numbers: "Contextual inquiry sessions typically run about two hours one to one, with published sample sizes from four users for a single small task up to thirty or more.",
      pitfall: "Interviews drift into feature requests. What people ask for and what they do are different data, and only the second predicts anything.",
      source: "No single origin. Beyer and Holtzblatt's Contextual Design (1997) is the nearest formal grounding.",
      verify: { status: "verified", note: "Checked Wikipedia's contextual inquiry entry this session for the four principles, the roughly two-hour session length and the four-to-thirty sample range. The user interview as such has no single named originator that I could confirm, and I have not claimed one." },
      belongs: { verdict: "core", why: "It is the base research method the rest of this section depends on; personas, journey maps and mental model diagrams are all built from interview data or from nothing." },
      related: [950, 951, 973, 9952]
    },
    {
      n: 950,
      title: "Contextual inquiry",
      aka: ["Master and apprentice interviewing", "Field study"],
      oneLine: "Interviewing people where they work, while they work, and interpreting what you see with them.",
      demo: {
        caption: "Same person, same task, same desk. The right-hand panel adds only what was actually on it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Described in a meeting room</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 140\"><path class=\"s-mute\" d=\"M6 124 H174\"/><rect class=\"s\" x=\"34\" y=\"14\" width=\"112\" height=\"76\" rx=\"2\"/><path class=\"s\" d=\"M84 90 V116 M96 90 V116 M70 118 H110\"/><rect class=\"f-mute\" x=\"42\" y=\"22\" width=\"96\" height=\"9\"/><rect class=\"f-mute\" x=\"42\" y=\"40\" width=\"60\" height=\"5\"/><rect class=\"f-mute\" x=\"42\" y=\"52\" width=\"80\" height=\"5\"/><rect class=\"f-mute\" x=\"42\" y=\"64\" width=\"48\" height=\"5\"/><rect class=\"f-mute\" x=\"106\" y=\"74\" width=\"32\" height=\"10\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Watched at the desk</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 140\"><path class=\"s-mute\" d=\"M6 124 H174\"/><rect class=\"s\" x=\"34\" y=\"14\" width=\"112\" height=\"76\" rx=\"2\"/><path class=\"s\" d=\"M84 90 V116 M96 90 V116 M70 118 H110\"/><rect class=\"f-mute\" x=\"42\" y=\"22\" width=\"96\" height=\"9\"/><rect class=\"f-mute\" x=\"42\" y=\"40\" width=\"60\" height=\"5\"/><rect class=\"f-mute\" x=\"42\" y=\"52\" width=\"80\" height=\"5\"/><rect class=\"f-mute\" x=\"42\" y=\"64\" width=\"48\" height=\"5\"/><rect class=\"f-mute\" x=\"106\" y=\"74\" width=\"32\" height=\"10\"/><rect class=\"s\" x=\"66\" y=\"34\" width=\"76\" height=\"52\" style=\"fill:var(--paper-raised)\"/><path class=\"s-mute\" d=\"M66 46 H142 M66 58 H142 M66 70 H142 M92 34 V86 M118 34 V86\"/><rect class=\"s-accent\" x=\"140\" y=\"58\" width=\"34\" height=\"30\" style=\"fill:var(--accent-soft)\"/><path class=\"s-accent\" d=\"M146 68 H168 M146 77 H160\"/><rect class=\"s-mute\" x=\"10\" y=\"100\" width=\"42\" height=\"24\"/><path class=\"s-mute\" d=\"M15 107 H47 M15 113 H40 M15 119 H44\"/></svg></div></div></div>"
      },
      what: "Contextual inquiry puts the researcher in the real place with the real artefacts. The user works, you watch, and you interrupt to ask why. It runs on four principles. Context means being where the work happens rather than in a meeting room. Partnership means building the understanding together instead of interrogating. Interpretation means saying your reading back so the person can correct it. Focus means steering the session towards what the team needs to know.",
      why: "People cannot describe their own work in the detail you need, because most of it has become automatic. Watching recovers the workarounds, the notes stuck to the monitor and the second system somebody keeps in a spreadsheet.",
      how: [
        "Go to the workplace. A video call loses the desk, the paperwork and the interruptions.",
        "Watch a real task, not a demonstration of one.",
        "Interpret out loud during the session; the correction is the valuable part.",
        "Photograph the artefacts people use, with permission, and keep them with the notes."
      ],
      example: "The method was first referenced in 1988 by Whiteside, Bennett and Holtzblatt, described as a method in 1990 by Wixon, Holtzblatt and Knox, and set out in full in Beyer and Holtzblatt's Contextual Design (1997).",
      numbers: "About two hours per session; sample sizes from four users for one small task up to thirty or more.",
      pitfall: "Sitting silently and taking notes is observation, not inquiry. Without the interpretation step you go home with a description you have misread.",
      source: "Hugh Beyer and Karen Holtzblatt, Contextual Design (1997).",
      verify: { status: "verified", note: "Checked Wikipedia's contextual inquiry entry this session for the attribution chain (Whiteside, Bennett and Holtzblatt 1988; Wixon, Holtzblatt and Knox 1990; Beyer and Holtzblatt 1997), the four principles with their definitions, the roughly two-hour one-to-one session and the range of as few as four users for a single small task up to thirty or more." },
      belongs: { verdict: "core", why: "For anything used at work, it is the method that finds the requirements nobody thought to state. It is also the source of the affinity synthesis step that follows it." },
      related: [949, 957, 9952]
    },
    {
      n: 951,
      title: "Diary studies",
      aka: ["Experience sampling", "Longitudinal self-reporting"],
      oneLine: "Participants log their own experience over days or weeks, in place, rather than recalling it later.",
      demo: {
        caption: "The same eleven events. The lower row is what a single interview at the end gets back.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 132\"><text class=\"t\" x=\"14\" y=\"22\">logged in the moment</text><circle class=\"f\" cx=\"26\" cy=\"40\" r=\"4.5\"/><circle class=\"f\" cx=\"44\" cy=\"40\" r=\"4.5\"/><circle class=\"f\" cx=\"70\" cy=\"40\" r=\"4.5\"/><circle class=\"f\" cx=\"96\" cy=\"40\" r=\"4.5\"/><circle class=\"f\" cx=\"112\" cy=\"40\" r=\"4.5\"/><circle class=\"f\" cx=\"146\" cy=\"40\" r=\"4.5\"/><circle class=\"f\" cx=\"174\" cy=\"40\" r=\"4.5\"/><circle class=\"f\" cx=\"200\" cy=\"40\" r=\"4.5\"/><circle class=\"f\" cx=\"218\" cy=\"40\" r=\"4.5\"/><circle class=\"f\" cx=\"262\" cy=\"40\" r=\"4.5\"/><circle class=\"f\" cx=\"300\" cy=\"40\" r=\"4.5\"/><text class=\"t\" x=\"14\" y=\"72\">remembered at the end</text><circle class=\"s-mute\" cx=\"26\" cy=\"90\" r=\"4.5\"/><circle class=\"s-mute\" cx=\"44\" cy=\"90\" r=\"4.5\"/><circle class=\"s-mute\" cx=\"70\" cy=\"90\" r=\"4.5\"/><circle class=\"s-mute\" cx=\"96\" cy=\"90\" r=\"4.5\"/><circle class=\"s-mute\" cx=\"112\" cy=\"90\" r=\"4.5\"/><circle class=\"f\" cx=\"146\" cy=\"90\" r=\"4.5\"/><circle class=\"s-mute\" cx=\"174\" cy=\"90\" r=\"4.5\"/><circle class=\"s-mute\" cx=\"200\" cy=\"90\" r=\"4.5\"/><circle class=\"s-mute\" cx=\"218\" cy=\"90\" r=\"4.5\"/><circle class=\"f\" cx=\"262\" cy=\"90\" r=\"4.5\"/><circle class=\"f\" cx=\"300\" cy=\"90\" r=\"4.5\"/><path class=\"s-mute\" d=\"M14 108 H326\"/><path class=\"s-mute\" d=\"M14 104 V112 M118 104 V112 M222 104 V112 M326 104 V112\"/><text class=\"t\" x=\"66\" y=\"124\" text-anchor=\"middle\">week 1</text><text class=\"t\" x=\"170\" y=\"124\" text-anchor=\"middle\">week 2</text><text class=\"t\" x=\"274\" y=\"124\" text-anchor=\"middle\">week 3</text></svg></div>"
      },
      what: "Participants record what happened as it happens, by text, photo, voice note or form. The signal-based version, where a prompt asks people to log what they are doing at that moment, is called experience sampling. Nielsen Norman Group's guidance sets the study length by how often the behaviour occurs: about a week for something done several times a day, about three weeks for something done once or twice a week.",
      why: "It reaches behaviour that is spread out, private or infrequent, such as how somebody researches a purchase over a fortnight or manages a condition across a month.",
      how: [
        "Match the study length to the frequency of the behaviour, not to your deadline.",
        "Keep each entry short enough to do in under two minutes, or people stop.",
        "Prompt on a schedule rather than trusting people to remember; unprompted diaries thin out as the study goes on.",
        "Follow the diary with an interview using their own entries as the script."
      ],
      example: "A three-week diary on how patients choose a dentist will catch the recommendation from a colleague, the two websites they compared and the phone call that went unanswered, none of which survive to a single interview a month later.",
      numbers: "NN/g suggests roughly 5 to 12 participants for a small discovery project, 12 to 30 for a large one and 30 to 50 for academic-scale work, with about one week for daily behaviours and about three weeks for weekly ones.",
      pitfall: "Drop-out and thin entries. Ask for too much per day and people either stop or start writing what they think you want to read.",
      source: "Nielsen Norman Group, Diary Studies (checked 2026); experience sampling is the psychology term for the signal-based variant.",
      verify: { status: "verified", note: "All figures taken from NN/g's diary studies article, read this session: the one-week and three-week guidance and the 5 to 12, 12 to 30 and 30 to 50 participant bands. NN/g also states that signal-based collection is known as experience sampling. An earlier draft claimed unprompted diaries decay by day three; no source supports a specific day, so the claim has been reduced to the general one NN/g does make." },
      belongs: { verdict: "adjacent", why: "The method comes from psychology's experience sampling. Its design use is specific: it captures behaviour that happens outside a research session, which is where nearly all real product use sits." },
      related: [949, 952, 977]
    },
    {
      n: 952,
      title: "Surveys",
      aka: ["Questionnaires", "Standardised usability instruments"],
      oneLine: "Counting attitudes or reported behaviour across many people, ideally with a published instrument.",
      demo: {
        caption: "The same score of 70 twice. On the right the average of 68 is marked, and the gap nearly disappears.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Read as a percentage</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 78\"><rect class=\"f-mute\" x=\"10\" y=\"30\" width=\"180\" height=\"16\"/><rect class=\"f-accent\" x=\"10\" y=\"30\" width=\"126\" height=\"16\"/><path class=\"s-mute\" d=\"M136 22 V30\"/><text class=\"t\" x=\"136\" y=\"18\" text-anchor=\"middle\">70</text><text class=\"t\" x=\"10\" y=\"68\">0</text><text class=\"t\" x=\"190\" y=\"68\" text-anchor=\"end\">100</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Read against the benchmark</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 78\"><rect class=\"f-mute\" x=\"10\" y=\"30\" width=\"180\" height=\"16\"/><rect class=\"f-accent\" x=\"10\" y=\"30\" width=\"126\" height=\"16\"/><path class=\"s-mute\" d=\"M136 22 V30\"/><text class=\"t\" x=\"136\" y=\"18\" text-anchor=\"middle\">70</text><path class=\"s\" d=\"M132.4 26 V54\"/><text class=\"t\" x=\"132\" y=\"68\" text-anchor=\"middle\">average 68</text><text class=\"t\" x=\"10\" y=\"68\">0</text><text class=\"t\" x=\"190\" y=\"68\" text-anchor=\"end\">100</text></svg></div></div></div>"
      },
      what: "Surveys tell you how many, never why. In design the useful ones are standardised instruments rather than home-made question sets, because a standard instrument gives you a number that means something outside your own team. The System Usability Scale is ten Likert items scored on to a 0 to 100 scale. John Brooke created it in 1986, for testing terminal systems, and published it in 1996; the 1996 chapter is the citation everyone uses. Net Promoter Score, introduced by Fred Reichheld in Harvard Business Review in 2003, is the other one you will meet, and its central claim has not held up.",
      why: "A standardised score lets you compare this release with the last one and your product against a benchmark, which qualitative work cannot do.",
      how: [
        "Use a published instrument where one exists, unchanged, or your score is not comparable to anything.",
        "Never ask a survey to explain a cause; pair it with interviews or testing.",
        "Ask about past behaviour rather than intentions.",
        "Report the sample size and how people were recruited next to every percentage."
      ],
      example: "Jeff Sauro's analysis of 500 studies covering more than 5,000 users puts the average SUS score at 68, which is why 68 is treated as the pass mark rather than 50. He also warns that a SUS score is not a percentage: 70 out of 100 sits close to the average, not at the seventieth percentile.",
      numbers: "SUS: ten items, five-point agreement scale, score 0 to 100, created 1986 and published 1996, mean 68 across 500 studies and over 5,000 users. NPS: 0 to 10 scale, with 9 and 10 counted as promoters and 0 to 6 as detractors.",
      pitfall: "Home-made satisfaction questions produce numbers that move for reasons you cannot trace, and they get reported to boards as if they were measurements.",
      source: "John Brooke, SUS: a quick and dirty usability scale (1996); Fred Reichheld, The One Number You Need to Grow (HBR, 2003); Keiningham and colleagues, Journal of Marketing (2007).",
      verify: { status: "disputed", note: "SUS is verified: ten items and the 0 to 100 scoring conversion, the mean of 68 from 500 studies and over 5,000 users, and the not-a-percentage warning all come from Jeff Sauro's MeasuringU page, read this session. That page also dates the instrument's creation to 1986, which an earlier draft of this entry gave only as 1996; both dates are now stated, since 1996 is the publication everyone cites. NPS is disputed: Keiningham and colleagues' 2007 Journal of Marketing paper, A Longitudinal Examination of Net Promoter and Firm Revenue Growth, reports finding no support for the claim that Net Promoter is the best predictor of growth, and notes that Reichheld's original methodology had not been independently replicated." },
      belongs: { verdict: "adjacent", why: "The instrument belongs to survey research. It earns a place because SUS gives designers the one comparable usability number that survives a change of team or agency." },
      related: [951, 976, 978]
    },
    {
      n: 9952,
      title: "Affinity diagramming and synthesis",
      aka: ["KJ method", "Building an affinity"],
      oneLine: "Turning hundreds of raw research notes into named findings by grouping them from the bottom up.",
      demo: {
        caption: "Same fifteen notes. Deciding the buckets first makes them come out even; grouping from the notes leaves a group of one.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Buckets decided first</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 150\"><text class=\"t\" x=\"34\" y=\"14\" text-anchor=\"middle\">web</text><rect class=\"f-mute\" x=\"10\" y=\"22\" width=\"48\" height=\"16\"/><rect class=\"f-mute\" x=\"10\" y=\"44\" width=\"48\" height=\"16\"/><rect class=\"f-mute\" x=\"10\" y=\"66\" width=\"48\" height=\"16\"/><rect class=\"f-mute\" x=\"10\" y=\"88\" width=\"48\" height=\"16\"/><rect class=\"f-mute\" x=\"10\" y=\"110\" width=\"48\" height=\"16\"/><text class=\"t\" x=\"34\" y=\"142\" text-anchor=\"middle\">5</text><text class=\"t\" x=\"90\" y=\"14\" text-anchor=\"middle\">staff</text><rect class=\"f-mute\" x=\"66\" y=\"22\" width=\"48\" height=\"16\"/><rect class=\"f-mute\" x=\"66\" y=\"44\" width=\"48\" height=\"16\"/><rect class=\"f-mute\" x=\"66\" y=\"66\" width=\"48\" height=\"16\"/><rect class=\"f-mute\" x=\"66\" y=\"88\" width=\"48\" height=\"16\"/><rect class=\"f-mute\" x=\"66\" y=\"110\" width=\"48\" height=\"16\"/><text class=\"t\" x=\"90\" y=\"142\" text-anchor=\"middle\">5</text><text class=\"t\" x=\"146\" y=\"14\" text-anchor=\"middle\">cost</text><rect class=\"f-mute\" x=\"122\" y=\"22\" width=\"48\" height=\"16\"/><rect class=\"f-mute\" x=\"122\" y=\"44\" width=\"48\" height=\"16\"/><rect class=\"f-mute\" x=\"122\" y=\"66\" width=\"48\" height=\"16\"/><rect class=\"f-mute\" x=\"122\" y=\"88\" width=\"48\" height=\"16\"/><rect class=\"f-mute\" x=\"122\" y=\"110\" width=\"48\" height=\"16\"/><text class=\"t\" x=\"146\" y=\"142\" text-anchor=\"middle\">5</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Grouped from the notes</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 150\"><text class=\"t\" x=\"25\" y=\"14\" text-anchor=\"middle\">prices</text><rect class=\"f-mute\" x=\"8\" y=\"22\" width=\"34\" height=\"11\"/><rect class=\"f-mute\" x=\"8\" y=\"37\" width=\"34\" height=\"11\"/><rect class=\"f-mute\" x=\"8\" y=\"52\" width=\"34\" height=\"11\"/><rect class=\"f-mute\" x=\"8\" y=\"67\" width=\"34\" height=\"11\"/><rect class=\"f-mute\" x=\"8\" y=\"82\" width=\"34\" height=\"11\"/><rect class=\"f-mute\" x=\"8\" y=\"97\" width=\"34\" height=\"11\"/><rect class=\"f-mute\" x=\"8\" y=\"112\" width=\"34\" height=\"11\"/><text class=\"t\" x=\"25\" y=\"142\" text-anchor=\"middle\">7</text><text class=\"t\" x=\"69\" y=\"14\" text-anchor=\"middle\">phone</text><rect class=\"f-mute\" x=\"52\" y=\"22\" width=\"34\" height=\"11\"/><rect class=\"f-mute\" x=\"52\" y=\"37\" width=\"34\" height=\"11\"/><rect class=\"f-mute\" x=\"52\" y=\"52\" width=\"34\" height=\"11\"/><rect class=\"f-mute\" x=\"52\" y=\"67\" width=\"34\" height=\"11\"/><text class=\"t\" x=\"69\" y=\"142\" text-anchor=\"middle\">4</text><text class=\"t\" x=\"113\" y=\"14\" text-anchor=\"middle\">friend</text><rect class=\"f-mute\" x=\"96\" y=\"22\" width=\"34\" height=\"11\"/><rect class=\"f-mute\" x=\"96\" y=\"37\" width=\"34\" height=\"11\"/><rect class=\"f-mute\" x=\"96\" y=\"52\" width=\"34\" height=\"11\"/><text class=\"t\" x=\"113\" y=\"142\" text-anchor=\"middle\">3</text><text class=\"t\" x=\"157\" y=\"14\" text-anchor=\"middle\">photo</text><rect class=\"f-accent\" x=\"140\" y=\"22\" width=\"34\" height=\"11\"/><text class=\"t\" x=\"157\" y=\"142\" text-anchor=\"middle\" style=\"fill:var(--accent)\">1</text></svg></div></div></div>"
      },
      what: "Every observation goes on its own note, in the participant's words where possible. The team groups notes that seem to belong together without deciding the categories in advance, then names each group from what is actually in it, and groups the groups. The technique is the KJ method, devised in the 1960s by the Japanese ethnographer Jiro Kawakita for making sense of fieldwork data, and it is now the standard synthesis step in contextual design and in a great deal of HCI research.",
      why: "Research is worthless until it is reduced to findings. Sorting from the bottom up stops the team filing everything under the categories they already believed in before the study.",
      how: [
        "One observation per note, never a summary of several.",
        "Group before you name, and take the group name from the notes rather than from your model.",
        "Keep a source code on every note so any finding can be traced back to a person.",
        "Pay attention to the group with one note in it; it is often the interesting one.",
        "Do it as a team, standing up, in one sitting."
      ],
      example: "Contextual Design builds its whole analysis on the affinity: individual interview notes are consolidated upwards into a wall of grouped issues that the team then walks.",
      numbers: "",
      pitfall: "Naming the groups first turns the wall into a filing exercise that confirms the team's existing beliefs at high resolution.",
      source: "Jiro Kawakita, the KJ method (1960s); used as the synthesis step in Beyer and Holtzblatt's Contextual Design (1997).",
      verify: { status: "verified", note: "Checked the Interaction Design Foundation's affinity diagrams topic page and an Inria paper on affinity diagramming, both of which attribute the technique to Jiro Kawakita's KJ method, and an ACM paper describing it as commonly used in contextual design and HCI. Wikipedia's affinity diagram entry dates the invention to the 1960s and notes the contextual inquiry use; I have not seen Kawakita's original Japanese publication, so the decade is as precise as I will go. Added as a gap: the master list jumps from data gathering straight to personas with no synthesis step in between." },
      belongs: { verdict: "adjacent", why: "Kawakita built it for ethnographic fieldwork, not for design, which puts it in the same borrowed category as task analysis and think-aloud. It earns its place because it is the missing link between raw interviews and every downstream artefact here. Without a synthesis method, personas and journey maps get made up." },
      related: [949, 950, 953, 958]
    },
    {
      n: 953,
      title: "Personas and their limits",
      aka: ["User archetypes"],
      oneLine: "A described archetype built from research, used to keep decisions anchored to somebody other than yourself.",
      demo: {
        caption: "Watch the count fall as attributes are added: the more detailed the persona, the fewer real people fit it.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 112\"><text class=\"t\" x=\"40\" y=\"16\" text-anchor=\"middle\">all users</text><circle class=\"f\" cx=\"12\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"26\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"40\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"54\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"68\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"12\" cy=\"48\" r=\"4\"/><circle class=\"f\" cx=\"26\" cy=\"48\" r=\"4\"/><circle class=\"f\" cx=\"40\" cy=\"48\" r=\"4\"/><circle class=\"f\" cx=\"54\" cy=\"48\" r=\"4\"/><circle class=\"f\" cx=\"68\" cy=\"48\" r=\"4\"/><circle class=\"f\" cx=\"12\" cy=\"62\" r=\"4\"/><circle class=\"f\" cx=\"26\" cy=\"62\" r=\"4\"/><circle class=\"f\" cx=\"40\" cy=\"62\" r=\"4\"/><circle class=\"f\" cx=\"54\" cy=\"62\" r=\"4\"/><circle class=\"f\" cx=\"68\" cy=\"62\" r=\"4\"/><circle class=\"f\" cx=\"12\" cy=\"76\" r=\"4\"/><circle class=\"f\" cx=\"26\" cy=\"76\" r=\"4\"/><circle class=\"f\" cx=\"40\" cy=\"76\" r=\"4\"/><circle class=\"f\" cx=\"54\" cy=\"76\" r=\"4\"/><circle class=\"f\" cx=\"68\" cy=\"76\" r=\"4\"/><text class=\"t\" x=\"40\" y=\"102\" text-anchor=\"middle\">20 left</text><text class=\"t\" x=\"128\" y=\"16\" text-anchor=\"middle\">+ aged 35 to 44</text><circle class=\"f\" cx=\"100\" cy=\"34\" r=\"4\"/><circle class=\"f-mute\" cx=\"114\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"128\" cy=\"34\" r=\"4\"/><circle class=\"f-mute\" cx=\"142\" cy=\"34\" r=\"4\"/><circle class=\"f-mute\" cx=\"156\" cy=\"34\" r=\"4\"/><circle class=\"f-mute\" cx=\"100\" cy=\"48\" r=\"4\"/><circle class=\"f\" cx=\"114\" cy=\"48\" r=\"4\"/><circle class=\"f-mute\" cx=\"128\" cy=\"48\" r=\"4\"/><circle class=\"f\" cx=\"142\" cy=\"48\" r=\"4\"/><circle class=\"f-mute\" cx=\"156\" cy=\"48\" r=\"4\"/><circle class=\"f\" cx=\"100\" cy=\"62\" r=\"4\"/><circle class=\"f-mute\" cx=\"114\" cy=\"62\" r=\"4\"/><circle class=\"f-mute\" cx=\"128\" cy=\"62\" r=\"4\"/><circle class=\"f\" cx=\"142\" cy=\"62\" r=\"4\"/><circle class=\"f-mute\" cx=\"156\" cy=\"62\" r=\"4\"/><circle class=\"f-mute\" cx=\"100\" cy=\"76\" r=\"4\"/><circle class=\"f\" cx=\"114\" cy=\"76\" r=\"4\"/><circle class=\"f-mute\" cx=\"128\" cy=\"76\" r=\"4\"/><circle class=\"f-mute\" cx=\"142\" cy=\"76\" r=\"4\"/><circle class=\"f\" cx=\"156\" cy=\"76\" r=\"4\"/><text class=\"t\" x=\"128\" y=\"102\" text-anchor=\"middle\">8 left</text><text class=\"t\" x=\"216\" y=\"16\" text-anchor=\"middle\">+ rings to book</text><circle class=\"f-mute\" cx=\"188\" cy=\"34\" r=\"4\"/><circle class=\"f-mute\" cx=\"202\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"216\" cy=\"34\" r=\"4\"/><circle class=\"f-mute\" cx=\"230\" cy=\"34\" r=\"4\"/><circle class=\"f-mute\" cx=\"244\" cy=\"34\" r=\"4\"/><circle class=\"f-mute\" cx=\"188\" cy=\"48\" r=\"4\"/><circle class=\"f\" cx=\"202\" cy=\"48\" r=\"4\"/><circle class=\"f-mute\" cx=\"216\" cy=\"48\" r=\"4\"/><circle class=\"f-mute\" cx=\"230\" cy=\"48\" r=\"4\"/><circle class=\"f-mute\" cx=\"244\" cy=\"48\" r=\"4\"/><circle class=\"f-mute\" cx=\"188\" cy=\"62\" r=\"4\"/><circle class=\"f-mute\" cx=\"202\" cy=\"62\" r=\"4\"/><circle class=\"f-mute\" cx=\"216\" cy=\"62\" r=\"4\"/><circle class=\"f-mute\" cx=\"230\" cy=\"62\" r=\"4\"/><circle class=\"f-mute\" cx=\"244\" cy=\"62\" r=\"4\"/><circle class=\"f-mute\" cx=\"188\" cy=\"76\" r=\"4\"/><circle class=\"f\" cx=\"202\" cy=\"76\" r=\"4\"/><circle class=\"f-mute\" cx=\"216\" cy=\"76\" r=\"4\"/><circle class=\"f-mute\" cx=\"230\" cy=\"76\" r=\"4\"/><circle class=\"f-mute\" cx=\"244\" cy=\"76\" r=\"4\"/><text class=\"t\" x=\"216\" y=\"102\" text-anchor=\"middle\">3 left</text><text class=\"t\" x=\"304\" y=\"16\" text-anchor=\"middle\">+ two children</text><circle class=\"f-mute\" cx=\"276\" cy=\"34\" r=\"4\"/><circle class=\"f-mute\" cx=\"290\" cy=\"34\" r=\"4\"/><circle class=\"f-mute\" cx=\"304\" cy=\"34\" r=\"4\"/><circle class=\"f-mute\" cx=\"318\" cy=\"34\" r=\"4\"/><circle class=\"f-mute\" cx=\"332\" cy=\"34\" r=\"4\"/><circle class=\"f-mute\" cx=\"276\" cy=\"48\" r=\"4\"/><circle class=\"f-accent\" cx=\"290\" cy=\"48\" r=\"4\"/><circle class=\"f-mute\" cx=\"304\" cy=\"48\" r=\"4\"/><circle class=\"f-mute\" cx=\"318\" cy=\"48\" r=\"4\"/><circle class=\"f-mute\" cx=\"332\" cy=\"48\" r=\"4\"/><circle class=\"f-mute\" cx=\"276\" cy=\"62\" r=\"4\"/><circle class=\"f-mute\" cx=\"290\" cy=\"62\" r=\"4\"/><circle class=\"f-mute\" cx=\"304\" cy=\"62\" r=\"4\"/><circle class=\"f-mute\" cx=\"318\" cy=\"62\" r=\"4\"/><circle class=\"f-mute\" cx=\"332\" cy=\"62\" r=\"4\"/><circle class=\"f-mute\" cx=\"276\" cy=\"76\" r=\"4\"/><circle class=\"f-mute\" cx=\"290\" cy=\"76\" r=\"4\"/><circle class=\"f-mute\" cx=\"304\" cy=\"76\" r=\"4\"/><circle class=\"f-mute\" cx=\"318\" cy=\"76\" r=\"4\"/><circle class=\"f-mute\" cx=\"332\" cy=\"76\" r=\"4\"/><text class=\"t\" x=\"304\" y=\"102\" text-anchor=\"middle\">1 left</text></svg></div>"
      },
      what: "A persona is a written portrait of a type of user, drawn from research, with goals and behaviours attached. Alan Cooper had been working this way since 1983, with prototype users drawn from informal interviews, and he popularised the technique in The Inmates Are Running the Asylum (1999). The limits are documented rather than rumoured. Chapman and Milham argued in 2006 that there is no reliable procedure for getting from data to a specific persona, which makes the process non-reproducible by scientific standards. Chapman and colleagues found in 2008 that detailed persona descriptions are likely to match very few actual customers.",
      why: "A persona makes a team argue about a named person rather than about themselves. That is the whole benefit, and it evaporates the moment the persona stops being grounded in data.",
      how: [
        "Build them from interview data you can point at, and cite the sources on the persona sheet itself.",
        "Delete every attribute that will not change a design decision; the stock photo and the favourite coffee will not.",
        "Prefer behaviour patterns and goals to age, income and marital status.",
        "Retire a persona when the research no longer supports it rather than editing it quietly.",
        "Keep the count low enough that the team can name them all."
      ],
      example: "Steve Portigal's criticism is worth reading beside Cooper's book: he describes their appeal as the seduction of a 'sanitized form of reality', where real data becomes an oversimplified stereotype.",
      numbers: "",
      pitfall: "Invented personas. One assembled in a workshop from assumptions gives a team confidence without adding information, which is worse than having none at all.",
      source: "Alan Cooper, The Inmates Are Running the Asylum (1999); Chapman and Milham (2006); Chapman and colleagues (2008).",
      verify: { status: "disputed", note: "Cooper's authorship, the 1983 start and the 1999 book are verified via Wikipedia's persona entry, read this session, which also records the criticisms: Chapman and Milham (2006) on reproducibility, Chapman and colleagues (2008) on descriptions matching few real customers, Ronkko (2005) on organisational limits, and Portigal's sanitised-reality critique. Evidence of benefit is thin: the same entry cites Long (2009) as a positive study while noting it lacked random assignment and blinding." },
      belongs: { verdict: "core", why: "Designers will be handed personas on most commercial projects, so knowing both the technique and its documented weaknesses is part of the job." },
      related: [948, 954, 958, 9952]
    },
    {
      n: 954,
      title: "Journey maps",
      aka: ["Customer journey map", "Experience map"],
      oneLine: "A person's experience laid out along time, with what they do, feel and hit trouble with at each stage.",
      demo: {
        caption: "Three rows over the same five stages. The feeling line drops where the channel changes and nobody owns the handover.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 160\"><text class=\"t\" x=\"92\" y=\"14\" text-anchor=\"middle\">search</text><text class=\"t\" x=\"148\" y=\"14\" text-anchor=\"middle\">compare</text><text class=\"t\" x=\"204\" y=\"14\" text-anchor=\"middle\">phone</text><text class=\"t\" x=\"260\" y=\"14\" text-anchor=\"middle\">visit</text><text class=\"t\" x=\"316\" y=\"14\" text-anchor=\"middle\">after</text><path class=\"s-mute\" d=\"M118 20 V136 M174 20 V136 M230 20 V136 M286 20 V136\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"58\" y=\"40\" text-anchor=\"end\">doing</text><rect class=\"f-mute\" x=\"72\" y=\"30\" width=\"40\" height=\"14\"/><rect class=\"f-mute\" x=\"128\" y=\"30\" width=\"40\" height=\"14\"/><rect class=\"f-mute\" x=\"184\" y=\"30\" width=\"40\" height=\"14\"/><rect class=\"f-mute\" x=\"240\" y=\"30\" width=\"40\" height=\"14\"/><rect class=\"f-mute\" x=\"296\" y=\"30\" width=\"40\" height=\"14\"/><text class=\"t\" x=\"58\" y=\"74\" text-anchor=\"end\">channel</text><text class=\"t\" x=\"92\" y=\"74\" text-anchor=\"middle\">web</text><text class=\"t\" x=\"148\" y=\"74\" text-anchor=\"middle\">web</text><text class=\"t\" x=\"204\" y=\"74\" text-anchor=\"middle\">phone</text><text class=\"t\" x=\"260\" y=\"74\" text-anchor=\"middle\">in person</text><text class=\"t\" x=\"316\" y=\"74\" text-anchor=\"middle\">email</text><text class=\"t\" x=\"58\" y=\"116\" text-anchor=\"end\">feeling</text><path class=\"s-accent\" d=\"M92 100 L148 104 L204 132 L260 118 L316 108\"/><circle class=\"f-accent\" cx=\"92\" cy=\"100\" r=\"4\"/><circle class=\"f-accent\" cx=\"148\" cy=\"104\" r=\"4\"/><circle class=\"f-accent\" cx=\"204\" cy=\"132\" r=\"4\"/><circle class=\"f-accent\" cx=\"260\" cy=\"118\" r=\"4\"/><circle class=\"f-accent\" cx=\"316\" cy=\"108\" r=\"4\"/><path class=\"s-accent\" d=\"M204 138 V144\"/><text class=\"t\" x=\"204\" y=\"154\" text-anchor=\"middle\" style=\"fill:var(--accent)\">channel changes here</text></svg></div>"
      },
      what: "A journey map runs the stages of an experience across the page and stacks rows beneath them: what the person does, what they are thinking and feeling, which channel or touchpoint they are using, and where it goes wrong. It usually covers a whole end-to-end experience rather than one screen, which is why it crosses departments.",
      why: "It shows the gaps between channels that nobody owns, which is where most bad experience lives. It also gives everybody in the room the same picture to point at.",
      how: [
        "Build it from research and mark clearly which parts are evidence and which are assumption.",
        "Keep one row for actions, one for thoughts and feelings, one for touchpoints.",
        "Mark the moments that decide whether the person continues or gives up.",
        "Give every low point an owner, otherwise the map changes nothing.",
        "Date it; a journey map goes stale as soon as the service changes."
      ],
      example: "Adaptive Path's Rail Europe experience map, published by Chris Risdon on 30 November 2011, is the version most later templates are descended from.",
      numbers: "",
      pitfall: "Maps assembled in a workshop rather than from research. They document the team's beliefs beautifully and teach nobody anything.",
      source: "No single originator confirmed. Chris Risdon, Anatomy of an Experience Map, Adaptive Path (30 November 2011).",
      verify: { status: "verified", note: "I could not confirm an originator for journey mapping and have not invented one. What I did verify, this session, is the landmark example: Chris Risdon's Anatomy of an Experience Map, whose current home at Center Centre states it was originally published on Adaptive Path's site on 30 November 2011, and which is cited with that date in later academic work. It covers the Rail Europe map." },
      belongs: { verdict: "core", why: "It is the standard artefact for reasoning about an experience that spans more than one screen, and it is what makes cross-channel failures visible." },
      related: [953, 955, 957]
    },
    {
      n: 955,
      title: "Service blueprints",
      aka: ["Blueprinting"],
      oneLine: "A journey map extended behind the counter, showing the staff and systems that deliver each step.",
      demo: {
        caption: "Both show the same four customer steps. Only the right-hand one goes below the line, which is where the failure sits.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Stops at the line</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 172\"><text class=\"t\" x=\"6\" y=\"14\">customer</text><rect class=\"f-mute\" x=\"6\" y=\"20\" width=\"38\" height=\"18\"/><rect class=\"f-mute\" x=\"48\" y=\"20\" width=\"38\" height=\"18\"/><rect class=\"f-mute\" x=\"90\" y=\"20\" width=\"38\" height=\"18\"/><rect class=\"f-mute\" x=\"132\" y=\"20\" width=\"38\" height=\"18\"/><path class=\"s-accent\" d=\"M6 50 H174\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"174\" y=\"62\" text-anchor=\"end\" style=\"fill:var(--accent)\">line of visibility</text><text class=\"t\" x=\"90\" y=\"112\" text-anchor=\"middle\">nothing here</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Goes behind it</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 172\"><text class=\"t\" x=\"6\" y=\"14\">customer</text><rect class=\"f-mute\" x=\"6\" y=\"20\" width=\"38\" height=\"18\"/><rect class=\"f-mute\" x=\"48\" y=\"20\" width=\"38\" height=\"18\"/><rect class=\"f-mute\" x=\"90\" y=\"20\" width=\"38\" height=\"18\"/><rect class=\"f-mute\" x=\"132\" y=\"20\" width=\"38\" height=\"18\"/><path class=\"s-accent\" d=\"M6 50 H174\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"174\" y=\"62\" text-anchor=\"end\" style=\"fill:var(--accent)\">line of visibility</text><rect class=\"s-mute\" x=\"6\" y=\"68\" width=\"38\" height=\"18\"/><rect class=\"s-mute\" x=\"48\" y=\"68\" width=\"38\" height=\"18\"/><rect class=\"s-mute\" x=\"90\" y=\"68\" width=\"38\" height=\"18\"/><rect class=\"s-mute\" x=\"132\" y=\"68\" width=\"38\" height=\"18\"/><path class=\"s-mute\" d=\"M6 96 H174\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"174\" y=\"106\" text-anchor=\"end\">internal line</text><rect class=\"s-mute\" x=\"6\" y=\"112\" width=\"38\" height=\"18\"/><rect class=\"s-mute\" x=\"48\" y=\"112\" width=\"38\" height=\"18\"/><rect class=\"s-mute\" x=\"90\" y=\"112\" width=\"38\" height=\"18\"/><circle class=\"s-accent\" cx=\"67\" cy=\"121\" r=\"9\"/><path class=\"s-accent\" d=\"M62 116 L72 126 M72 116 L62 126\"/><text class=\"t\" x=\"67\" y=\"146\" text-anchor=\"middle\" style=\"fill:var(--accent)\">fail point</text><rect class=\"s-mute\" x=\"6\" y=\"152\" width=\"80\" height=\"14\"/><rect class=\"s-mute\" x=\"94\" y=\"152\" width=\"80\" height=\"14\"/></svg></div></div></div>"
      },
      what: "A blueprint draws the customer's actions along the top, then the staff actions the customer can see, then the ones they cannot, then the supporting processes, separated by horizontal lines. G. Lynn Shostack, a bank executive, described the technique in Designing Services That Deliver (Harvard Business Review, January to February 1984). Her original carried one named line, the line of visibility, between front stage and back stage. The three extra lines usually taught with the method were added later by Zeithaml and Bitner: the line of interaction, between customer and provider actions; the line of internal interaction, between front office and back office; and the line of implementation, between the management and support zones. Other authors have since proposed a fifth, the line of order penetration, separating customer-induced from customer-independent activity.",
      why: "Most service failures happen behind the line of visibility, in a step the customer never sees but always feels. A blueprint makes that step somebody's responsibility.",
      how: [
        "Draw the customer row first, then everything behind it.",
        "Mark fail points and waits, not only steps.",
        "Include the physical evidence row; signs, receipts, confirmation emails and text messages are part of the service.",
        "Blueprint the service you actually run before the one you would like to run."
      ],
      example: "Shostack's article, Designing Services That Deliver, appeared in Harvard Business Review volume 62, number 1, January to February 1984, pages 133 to 139.",
      numbers: "One line in the original (visibility); four in the version usually taught, after Zeithaml and Bitner added three; a fifth, the line of order penetration, has been proposed since. Five common rows: customer actions, front-stage actions, back-stage actions, support processes, physical evidence.",
      pitfall: "Blueprints that stop at the line of visibility are journey maps with more boxes, and they leave the real failure untouched.",
      source: "G. Lynn Shostack, Designing Services That Deliver, Harvard Business Review 62(1), January to February 1984, 133 to 139; later lines from Zeithaml and Bitner, Services Marketing (1996).",
      verify: { status: "verified", note: "Checked Wikipedia's service blueprint entry, which gives Shostack's authorship, the full 1984 HBR citation with title, volume, issue and pages, and the standard component rows. Corrected an attribution error here: the four lines commonly presented as Shostack's are not all hers. The article credits only the line of visibility to the original, with the lines of interaction, internal interaction and implementation recommended later by Zeithaml and Bitner (1996), and the line of order penetration by Fliess and Kleinaltenkamp (2004). The claim that today's rows still follow her structure was removed as unsupported." },
      belongs: { verdict: "core", why: "It is the design drawing for a service rather than an interface, and it is how you design the parts of an experience that involve staff and systems." },
      related: [954, 957, 979]
    },
    {
      n: 956,
      title: "Empathy maps",
      aka: ["Empathy Map Canvas"],
      oneLine: "A one-page sheet capturing what a person says, thinks, does and feels, plus their pains and gains.",
      demo: {
        caption: "The sheet fills up either way. Only two of these six squares came from research; the other four are guesses.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 152\"><rect class=\"s-mute\" x=\"10\" y=\"14\" width=\"102\" height=\"60\"/><text class=\"t\" x=\"18\" y=\"30\">says</text><rect class=\"f-mute\" x=\"18\" y=\"40\" width=\"60\" height=\"4\"/><rect class=\"f-mute\" x=\"18\" y=\"50\" width=\"44\" height=\"4\"/><text class=\"t\" x=\"104\" y=\"66\" text-anchor=\"end\" style=\"fill:var(--accent)\">heard</text><rect class=\"s-mute\" x=\"122\" y=\"14\" width=\"102\" height=\"60\"/><text class=\"t\" x=\"130\" y=\"30\">thinks</text><rect class=\"f-mute\" x=\"130\" y=\"40\" width=\"60\" height=\"4\"/><rect class=\"f-mute\" x=\"130\" y=\"50\" width=\"44\" height=\"4\"/><text class=\"t\" x=\"216\" y=\"66\" text-anchor=\"end\">guess</text><rect class=\"s-mute\" x=\"234\" y=\"14\" width=\"102\" height=\"60\"/><text class=\"t\" x=\"242\" y=\"30\">does</text><rect class=\"f-mute\" x=\"242\" y=\"40\" width=\"60\" height=\"4\"/><rect class=\"f-mute\" x=\"242\" y=\"50\" width=\"44\" height=\"4\"/><text class=\"t\" x=\"328\" y=\"66\" text-anchor=\"end\" style=\"fill:var(--accent)\">heard</text><rect class=\"s-mute\" x=\"10\" y=\"84\" width=\"102\" height=\"60\"/><text class=\"t\" x=\"18\" y=\"100\">feels</text><rect class=\"f-mute\" x=\"18\" y=\"110\" width=\"60\" height=\"4\"/><rect class=\"f-mute\" x=\"18\" y=\"120\" width=\"44\" height=\"4\"/><text class=\"t\" x=\"104\" y=\"136\" text-anchor=\"end\">guess</text><rect class=\"s-mute\" x=\"122\" y=\"84\" width=\"102\" height=\"60\"/><text class=\"t\" x=\"130\" y=\"100\">pains</text><rect class=\"f-mute\" x=\"130\" y=\"110\" width=\"60\" height=\"4\"/><rect class=\"f-mute\" x=\"130\" y=\"120\" width=\"44\" height=\"4\"/><text class=\"t\" x=\"216\" y=\"136\" text-anchor=\"end\">guess</text><rect class=\"s-mute\" x=\"234\" y=\"84\" width=\"102\" height=\"60\"/><text class=\"t\" x=\"242\" y=\"100\">gains</text><rect class=\"f-mute\" x=\"242\" y=\"110\" width=\"60\" height=\"4\"/><rect class=\"f-mute\" x=\"242\" y=\"120\" width=\"44\" height=\"4\"/><text class=\"t\" x=\"328\" y=\"136\" text-anchor=\"end\">guess</text></svg></div>"
      },
      what: "Dave Gray and his team created the empathy map at XPLANE as part of the Gamestorming toolkit, and it spread widely after appearing in Osterwalder's Business Model Generation. Gray later published an updated canvas because, in his words, 'the various versions that have proliferated across the web have somewhat degraded the original concept.' His revision puts think and feel inside a large head at the centre, adds a goal statement and numbers the sections so the exercise runs in order.",
      why: "It gets a team's assumptions about a person out of their heads and on to one visible sheet quickly, where they can be marked as evidence or guess and then checked.",
      how: [
        "Fill it in from interview notes, not from imagination.",
        "Work through the numbered sections in order rather than jumping to feelings.",
        "Mark each square as evidence or assumption, in two colours.",
        "Turn the assumptions into the question list for your next round of research."
      ],
      example: "Gray's updated Empathy Map Canvas, published under his own name, is the version to use: goal at the top, numbered sequence, think and feel in a head at the centre, pains and gains made explicit.",
      numbers: "",
      pitfall: "Filled in from imagination it manufactures confidence. Gray's own complaint about degraded copies applies to most of the templates now in circulation.",
      source: "Dave Gray, XPLANE, in Gamestorming; updated Empathy Map Canvas by Gray.",
      verify: { status: "verified", note: "Checked Gamestorming's empathy mapping page and Dave Gray's own updated canvas article, which is the source of the quoted sentence and the list of changes. Gray dates it only as 'many years ago', so I have not given a creation year. I found no evidence base for the technique." },
      belongs: { verdict: "adjacent", why: "It came out of business facilitation rather than design research, and it has no evidence base. Its narrow but real design use is surfacing what a team believes about a user before anyone starts designing for that belief." },
      related: [953, 967, 9952]
    },
    {
      n: 957,
      title: "Task analysis",
      aka: ["Hierarchical task analysis", "HTA"],
      oneLine: "Breaking a job into goals, the operations that achieve them, and the plans that order those operations.",
      demo: {
        caption: "Break the job down and the same operation turns up three times. Naming it as steps is what makes it removable.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 150\"><rect class=\"s\" x=\"110\" y=\"8\" width=\"120\" height=\"22\"/><text class=\"t\" x=\"170\" y=\"23\" text-anchor=\"middle\">book a patient in</text><path class=\"s-mute\" d=\"M170 30 V42 M60 42 H280 M60 42 V56 M170 42 V56 M280 42 V56\"/><rect class=\"s\" x=\"10\" y=\"56\" width=\"100\" height=\"22\"/><text class=\"t\" x=\"60\" y=\"71\" text-anchor=\"middle\">1 take details</text><path class=\"s-mute\" d=\"M60 78 V88 M34 88 H86 M34 88 V100 M86 88 V100\"/><rect class=\"s\" x=\"120\" y=\"56\" width=\"100\" height=\"22\"/><text class=\"t\" x=\"170\" y=\"71\" text-anchor=\"middle\">2 find a slot</text><path class=\"s-mute\" d=\"M170 78 V88 M144 88 H196 M144 88 V100 M196 88 V100\"/><rect class=\"s\" x=\"230\" y=\"56\" width=\"100\" height=\"22\"/><text class=\"t\" x=\"280\" y=\"71\" text-anchor=\"middle\">3 confirm</text><path class=\"s-mute\" d=\"M280 78 V88 M254 88 H306 M254 88 V100 M306 88 V100\"/><rect class=\"s-mute\" x=\"10\" y=\"100\" width=\"48\" height=\"20\"/><text class=\"t\" x=\"34\" y=\"114\" text-anchor=\"middle\">name</text><rect class=\"s-accent\" x=\"62\" y=\"100\" width=\"48\" height=\"20\"/><text class=\"t\" x=\"86\" y=\"114\" text-anchor=\"middle\" style=\"fill:var(--accent)\">d.o.b.</text><rect class=\"s-mute\" x=\"120\" y=\"100\" width=\"48\" height=\"20\"/><text class=\"t\" x=\"144\" y=\"114\" text-anchor=\"middle\">diary</text><rect class=\"s-accent\" x=\"172\" y=\"100\" width=\"48\" height=\"20\"/><text class=\"t\" x=\"196\" y=\"114\" text-anchor=\"middle\" style=\"fill:var(--accent)\">d.o.b.</text><rect class=\"s-mute\" x=\"230\" y=\"100\" width=\"48\" height=\"20\"/><text class=\"t\" x=\"254\" y=\"114\" text-anchor=\"middle\">text</text><rect class=\"s-accent\" x=\"282\" y=\"100\" width=\"48\" height=\"20\"/><text class=\"t\" x=\"306\" y=\"114\" text-anchor=\"middle\" style=\"fill:var(--accent)\">d.o.b.</text><text class=\"t\" x=\"170\" y=\"142\" text-anchor=\"middle\" style=\"fill:var(--accent)\">typed three times</text></svg></div>"
      },
      what: "Hierarchical task analysis decomposes a goal into sub-goals and operations, and writes plans that state the order and the conditions. Operations are the smallest steps that will not usefully break down further. Plans describe whether steps run in sequence, in parallel or only under certain conditions. The method came out of industrial training research: Annett and Duncan's Task Analysis and Training Design, Occupational Psychology 41 (1967), pages 211 to 221.",
      why: "It gives you the real sequence a person has to follow, including the steps your current interface invented. Counting steps is how you find the ones to delete.",
      how: [
        "Write the goal first, decompose downwards, and agree a stopping rule before you start.",
        "Write the plans, not just the lists; the conditions and loops are where interfaces fail.",
        "Analyse the task as performed as well as the task as designed, and compare them.",
        "Count the steps before and after a redesign and keep both numbers."
      ],
      example: "A booking task analysed this way often shows a receptionist entering a patient's date of birth into three separate systems. The analysis names the repetition as steps, which is what makes it removable.",
      numbers: "",
      pitfall: "Decomposing forever. HTA has no natural stopping point, so a team can spend a week producing a document nobody reads.",
      source: "John Annett and Keith Duncan, Task Analysis and Training Design, Occupational Psychology 41 (1967), 211 to 221.",
      verify: { status: "verified", note: "Confirmed the Annett and Duncan 1967 citation through the ERIC record (ED019566) and two independent reference lists giving Occupational Psychology 41, 211 to 221. The goals, operations and plans structure and the note that HTA is a starting point for further analysis come from Wikipedia's task analysis entry." },
      belongs: { verdict: "adjacent", why: "It arrived from occupational psychology and industrial training. The design use is direct: it is the method that tells you how many steps a task really takes and which of those steps your design added." },
      related: [954, 958, 970]
    },
    {
      n: 958,
      title: "Mental model diagrams",
      aka: ["Indi Young's mental model diagrams", "Opportunity map"],
      oneLine: "Stack what people said about pursuing a purpose into towers, then line your features up underneath.",
      demo: {
        caption: "Towers are what people said about the purpose; blocks beneath are what you offer. The fourth tower has nothing under it.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 156\"><text class=\"t\" x=\"10\" y=\"14\">what people said</text><path class=\"s\" d=\"M10 92 H330\"/><rect class=\"f-mute\" x=\"20\" y=\"80\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"20\" y=\"65\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"20\" y=\"50\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"20\" y=\"35\" width=\"48\" height=\"12\"/><rect class=\"f\" x=\"20\" y=\"95\" width=\"48\" height=\"12\"/><rect class=\"f\" x=\"20\" y=\"110\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"84\" y=\"80\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"84\" y=\"65\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"84\" y=\"50\" width=\"48\" height=\"12\"/><rect class=\"f\" x=\"84\" y=\"95\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"148\" y=\"80\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"148\" y=\"65\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"148\" y=\"50\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"148\" y=\"35\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"148\" y=\"20\" width=\"48\" height=\"12\"/><rect class=\"f\" x=\"148\" y=\"95\" width=\"48\" height=\"12\"/><rect class=\"f\" x=\"148\" y=\"110\" width=\"48\" height=\"12\"/><rect class=\"f\" x=\"148\" y=\"125\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"212\" y=\"80\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"212\" y=\"65\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"276\" y=\"80\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"276\" y=\"65\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"276\" y=\"50\" width=\"48\" height=\"12\"/><rect class=\"f-mute\" x=\"276\" y=\"35\" width=\"48\" height=\"12\"/><rect class=\"f\" x=\"276\" y=\"95\" width=\"48\" height=\"12\"/><rect class=\"s-accent\" x=\"212\" y=\"95\" width=\"48\" height=\"27\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"236\" y=\"136\" text-anchor=\"middle\" style=\"fill:var(--accent)\">nothing</text><text class=\"t\" x=\"10\" y=\"150\">what you offer</text></svg></div>"
      },
      what: "Indi Young's method, set out in Mental Models: Aligning Design Strategy with Human Behavior (Rosenfeld Media, 2008). You listen to people describe how they go about a purpose, group what they said into stacked patterns that look like towers in a city skyline, and then align your existing features and content underneath the towers. Towers with nothing beneath them are the gaps. Young's later work adds thinking styles layered over the towers and calls the aligned version an opportunity map.",
      why: "It shows what you do not support, which no feature audit will ever tell you, because a feature audit can only list what exists. The alignment step also forces an organisation to look at itself from the outside.",
      how: [
        "Frame the research around a purpose the person has, not around your product.",
        "Build the towers from what people said about their own thinking, not from your feature list.",
        "Align current features and content under the towers and mark every empty one.",
        "Treat the gaps as a roadmap rather than as a scorecard."
      ],
      example: "Young's own site describes the diagram as a city skyline: towers made of windows, grouped into blocks and sometimes into neighbourhoods, with capabilities aligned beneath.",
      numbers: "",
      pitfall: "It is slow, and a diagram built from a handful of interviews implies far more structure than the data can carry.",
      source: "Indi Young, Mental Models: Aligning Design Strategy with Human Behavior (Rosenfeld Media, 2008).",
      verify: { status: "verified", note: "Checked Indi Young's own explanations page for the towers, windows, blocks, alignment and gap language, and Rosenfeld Media's listing for the 2008 book and its alignment and gap analysis chapter." },
      belongs: { verdict: "core", why: "It is the one common research artefact that maps what people are trying to do against what you actually provide, which is the question a roadmap should answer." },
      related: [953, 957, 9952]
    },
    {
      n: 959,
      title: "User stories and acceptance criteria",
      aka: ["Connextra format", "Definition of done"],
      oneLine: "A short statement of a user need plus the written conditions that say when it is built correctly.",
      demo: {
        caption: "Left is the screen the story asks for. Right is the same component in the four states nobody wrote down.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">What the story shows</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><span class=\"db-label\">Next appointment</span><span>Thursday 14 March, 9:20am</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">What the criteria must cover</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><span class=\"db-label\">Next appointment</span><span>Nothing booked yet</span></div><div class=\"db-card\"><span class=\"db-label\">Next appointment</span><span>Loading</span></div><div class=\"db-card\"><span class=\"db-label\">Next appointment</span><span>Could not load. Try again.</span></div><div class=\"db-card\"><span class=\"db-label\">Next appointment</span><span>Sign in to see this</span></div></div></div></div></div>"
      },
      what: "A user story states a need in the form popularised by the team at Connextra in London around 2001: as a role, I want a capability, so that I get a benefit. Kent Beck introduced stories on the Chrysler C3 project in 1997 and they reached a wide audience through Extreme Programming Explained in 1999. Mike Cohn's User Stories Applied (2004) is the standard reference. Acceptance criteria are the notes that say what must be true for the story to be accepted, often written as given, when, then.",
      why: "For a designer, the story is where you discover what the build has actually committed to. The acceptance criteria are where empty states, error text and keyboard behaviour get written down instead of being invented at three in the afternoon by whoever is coding.",
      how: [
        "Write acceptance criteria with the developer, in the same sitting, before the sprint starts.",
        "Add the states the happy path forgets: loading, empty, error, over-long content, no permission, offline.",
        "Attach the design decision and its reason to the story, not just the file link.",
        "Refuse stories with no benefit clause; a missing 'so that' usually means nobody knows why."
      ],
      example: "As a returning patient, I want to see my next appointment on the home screen, so that I do not have to ring the practice. The acceptance criteria then have to state what appears when no appointment is booked, which is the part that gets missed.",
      numbers: "",
      pitfall: "Design work gets chopped into story-sized pieces, so nobody owns the shape of the whole screen. Keep a separate artefact for the whole thing.",
      source: "Kent Beck (1997, Extreme Programming); the Connextra template (around 2001); Mike Cohn, User Stories Applied (2004).",
      verify: { status: "verified", note: "Checked Wikipedia's user story entry for Beck's 1997 introduction on the Chrysler C3 project, the 1999 book, the Connextra template around 2001, Cohn's 2004 reference work and his definition of acceptance criteria. Wikipedia also notes that Cohn credits Rachel Davies for the format while Davies credits the whole Connextra team." },
      belongs: { verdict: "adjacent", why: "It is a software planning device rather than a design method. It belongs here because acceptance criteria are the only place most teams ever write down the states and edge cases a designer is responsible for." },
      related: [944, 979, 982]
    },
    {
      n: 960,
      title: "Divergence and convergence",
      aka: ["Widen then narrow", "Opening and closing"],
      oneLine: "Design alternates between widening the set of options and cutting it down, and the two need different behaviour.",
      demo: {
        caption: "Both rooms produced eight ideas. On the left they were judged as they arrived, so none got far from the first.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Judgement left on</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 134\"><path class=\"s-mute\" d=\"M14 108 H168\"/><path class=\"s-mute\" d=\"M14 104 V112\"/><text class=\"t\" x=\"14\" y=\"126\">first idea</text><text class=\"t\" x=\"168\" y=\"126\" text-anchor=\"end\">further off</text><circle class=\"f\" cx=\"22\" cy=\"88\" r=\"4\"/><circle class=\"f-mute\" cx=\"30\" cy=\"66\" r=\"4\"/><path class=\"s-mute\" d=\"M24 60 L36 72 M36 60 L24 72\"/><circle class=\"f-mute\" cx=\"44\" cy=\"94\" r=\"4\"/><path class=\"s-mute\" d=\"M38 88 L50 100 M50 88 L38 100\"/><circle class=\"f-mute\" cx=\"52\" cy=\"72\" r=\"4\"/><path class=\"s-mute\" d=\"M46 66 L58 78 M58 66 L46 78\"/><circle class=\"f\" cx=\"60\" cy=\"84\" r=\"4\"/><circle class=\"f-mute\" cx=\"26\" cy=\"50\" r=\"4\"/><path class=\"s-mute\" d=\"M20 44 L32 56 M32 44 L20 56\"/><circle class=\"f-mute\" cx=\"48\" cy=\"54\" r=\"4\"/><path class=\"s-mute\" d=\"M42 48 L54 60 M54 48 L42 60\"/><circle class=\"f\" cx=\"38\" cy=\"78\" r=\"4\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Judgement deferred</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 134\"><path class=\"s-mute\" d=\"M14 108 H168\"/><path class=\"s-mute\" d=\"M14 104 V112\"/><text class=\"t\" x=\"14\" y=\"126\">first idea</text><text class=\"t\" x=\"168\" y=\"126\" text-anchor=\"end\">further off</text><circle class=\"f\" cx=\"22\" cy=\"86\" r=\"4\"/><circle class=\"f\" cx=\"44\" cy=\"58\" r=\"4\"/><circle class=\"f\" cx=\"60\" cy=\"96\" r=\"4\"/><circle class=\"f\" cx=\"82\" cy=\"44\" r=\"4\"/><circle class=\"f\" cx=\"98\" cy=\"78\" r=\"4\"/><circle class=\"f\" cx=\"118\" cy=\"62\" r=\"4\"/><circle class=\"f\" cx=\"138\" cy=\"92\" r=\"4\"/><circle class=\"f\" cx=\"156\" cy=\"50\" r=\"4\"/><circle class=\"s-accent\" cx=\"82\" cy=\"44\" r=\"9\"/><circle class=\"s-accent\" cx=\"138\" cy=\"92\" r=\"9\"/></svg></div></div></div>"
      },
      what: "During divergence you defer judgement and go for quantity. During convergence you apply agreed criteria and kill things. They are different jobs and they need different rules in the room. The Design Council's Double Diamond is a drawing of this alternation, and Wikipedia traces the divergence and convergence shape it uses to Bela H. Banathy's 1996 model.",
      why: "Most bad design meetings mix the two. Criticism during divergence stops ideas arriving, and enthusiasm during convergence stops decisions being made.",
      how: [
        "Say out loud which mode the room is in, and change modes deliberately rather than by drift.",
        "Set a number for divergence, such as eight sketches each, so quantity is the explicit goal.",
        "Put the convergence criteria on the wall before anyone looks at the options.",
        "Split the two into separate sessions when the group is senior enough to derail either."
      ],
      example: "Google's Design Sprint Kit places Crazy 8s in its sketch phase as a pure divergence exercise, with the decision work held back to a later phase.",
      numbers: "",
      pitfall: "Teams that only diverge end up with a wall of options nobody can choose between. Teams that only converge polish the first idea anybody had.",
      source: "Design Council, Double Diamond; the divergence and convergence shape is traced to Bela H. Banathy (1996).",
      verify: { status: "verified", note: "The alternation is verified through the Design Council's own Double Diamond page. The attribution to Banathy's 1996 divergence and convergence model comes from Wikipedia's Double Diamond entry; I have not read Banathy's original and do not claim more than the attribution." },
      belongs: { verdict: "core", why: "It is the underlying mechanic of every process model in this section, and naming the mode is the single cheapest fix for unproductive design meetings." },
      related: [946, 961, 967]
    },
    {
      n: 961,
      title: "Crazy eights and rapid ideation",
      aka: ["Crazy 8s", "Time-boxed sketching"],
      oneLine: "Fold a sheet into eight, sketch eight ideas in eight minutes, one per panel, alone and fast.",
      demo: {
        caption: "Panels one to three are the same idea three times. The variety only starts once the obvious layouts are used up.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 350 206\"><rect class=\"s-mute\" x=\"6\" y=\"8\" width=\"78\" height=\"82\"/><rect class=\"f-mute\" x=\"14\" y=\"16\" width=\"62\" height=\"8\"/><rect class=\"f-mute\" x=\"14\" y=\"30\" width=\"62\" height=\"26\"/><rect class=\"f-mute\" x=\"14\" y=\"62\" width=\"62\" height=\"4\"/><rect class=\"f-mute\" x=\"14\" y=\"70\" width=\"40\" height=\"4\"/><rect class=\"f-mute\" x=\"14\" y=\"78\" width=\"24\" height=\"7\"/><text class=\"t\" x=\"45\" y=\"102\" text-anchor=\"middle\">1</text><rect class=\"s-mute\" x=\"92\" y=\"8\" width=\"78\" height=\"82\"/><rect class=\"f-mute\" x=\"100\" y=\"16\" width=\"62\" height=\"8\"/><rect class=\"f-mute\" x=\"100\" y=\"30\" width=\"62\" height=\"22\"/><rect class=\"f-mute\" x=\"100\" y=\"58\" width=\"62\" height=\"4\"/><rect class=\"f-mute\" x=\"100\" y=\"66\" width=\"52\" height=\"4\"/><rect class=\"f-mute\" x=\"100\" y=\"74\" width=\"34\" height=\"4\"/><rect class=\"f-mute\" x=\"100\" y=\"82\" width=\"24\" height=\"7\"/><text class=\"t\" x=\"131\" y=\"102\" text-anchor=\"middle\">2</text><rect class=\"s-mute\" x=\"178\" y=\"8\" width=\"78\" height=\"82\"/><rect class=\"f-mute\" x=\"186\" y=\"16\" width=\"62\" height=\"8\"/><rect class=\"f-mute\" x=\"186\" y=\"30\" width=\"62\" height=\"24\"/><rect class=\"f-mute\" x=\"186\" y=\"60\" width=\"62\" height=\"4\"/><rect class=\"f-mute\" x=\"186\" y=\"68\" width=\"44\" height=\"4\"/><rect class=\"f-mute\" x=\"224\" y=\"78\" width=\"24\" height=\"7\"/><text class=\"t\" x=\"217\" y=\"102\" text-anchor=\"middle\">3</text><rect class=\"s-mute\" x=\"264\" y=\"8\" width=\"78\" height=\"82\"/><rect class=\"f-mute\" x=\"272\" y=\"16\" width=\"62\" height=\"8\"/><rect class=\"f-mute\" x=\"272\" y=\"32\" width=\"28\" height=\"10\"/><rect class=\"f-mute\" x=\"306\" y=\"32\" width=\"28\" height=\"10\"/><rect class=\"f-mute\" x=\"272\" y=\"48\" width=\"28\" height=\"10\"/><rect class=\"f-mute\" x=\"306\" y=\"48\" width=\"28\" height=\"10\"/><rect class=\"f-mute\" x=\"272\" y=\"64\" width=\"28\" height=\"10\"/><rect class=\"f-mute\" x=\"306\" y=\"64\" width=\"28\" height=\"10\"/><text class=\"t\" x=\"303\" y=\"102\" text-anchor=\"middle\">4</text><rect class=\"s-mute\" x=\"6\" y=\"108\" width=\"78\" height=\"82\"/><rect class=\"f-mute\" x=\"20\" y=\"132\" width=\"50\" height=\"20\"/><rect class=\"f-mute\" x=\"20\" y=\"160\" width=\"50\" height=\"5\"/><text class=\"t\" x=\"45\" y=\"202\" text-anchor=\"middle\">5</text><rect class=\"s-mute\" x=\"92\" y=\"108\" width=\"78\" height=\"82\"/><path class=\"s-mute\" d=\"M108 124 V180\"/><circle class=\"f-mute\" cx=\"108\" cy=\"130\" r=\"3\"/><rect class=\"f-mute\" x=\"118\" y=\"128\" width=\"38\" height=\"4\"/><circle class=\"f-mute\" cx=\"108\" cy=\"146\" r=\"3\"/><rect class=\"f-mute\" x=\"118\" y=\"144\" width=\"38\" height=\"4\"/><circle class=\"f-mute\" cx=\"108\" cy=\"162\" r=\"3\"/><rect class=\"f-mute\" x=\"118\" y=\"160\" width=\"38\" height=\"4\"/><circle class=\"f-mute\" cx=\"108\" cy=\"178\" r=\"3\"/><rect class=\"f-mute\" x=\"118\" y=\"176\" width=\"38\" height=\"4\"/><text class=\"t\" x=\"131\" y=\"202\" text-anchor=\"middle\">6</text><rect class=\"s-mute\" x=\"178\" y=\"108\" width=\"78\" height=\"82\"/><rect class=\"f-mute\" x=\"188\" y=\"120\" width=\"16\" height=\"16\"/><rect class=\"f-mute\" x=\"210\" y=\"120\" width=\"16\" height=\"16\"/><rect class=\"f-mute\" x=\"232\" y=\"120\" width=\"16\" height=\"16\"/><rect class=\"f-mute\" x=\"188\" y=\"142\" width=\"16\" height=\"16\"/><rect class=\"f-mute\" x=\"210\" y=\"142\" width=\"16\" height=\"16\"/><rect class=\"f-mute\" x=\"232\" y=\"142\" width=\"16\" height=\"16\"/><rect class=\"f-mute\" x=\"188\" y=\"164\" width=\"16\" height=\"16\"/><rect class=\"f-mute\" x=\"210\" y=\"164\" width=\"16\" height=\"16\"/><rect class=\"f-mute\" x=\"232\" y=\"164\" width=\"16\" height=\"16\"/><text class=\"t\" x=\"217\" y=\"202\" text-anchor=\"middle\">7</text><rect class=\"s-mute\" x=\"264\" y=\"108\" width=\"78\" height=\"82\"/><circle class=\"s-mute\" cx=\"286\" cy=\"140\" r=\"8\"/><path class=\"s-mute\" d=\"M274 166 C 274 152, 298 152, 298 166\"/><rect class=\"s-mute\" x=\"312\" y=\"132\" width=\"16\" height=\"26\" rx=\"2\"/><path class=\"s-mute\" d=\"M300 144 H308\"/><polygon class=\"f-mute\" points=\"312,144 306,141 306,147\"/><text class=\"t\" x=\"303\" y=\"202\" text-anchor=\"middle\">8</text></svg></div>"
      },
      what: "Crazy 8s is a time-boxed individual sketching exercise from design sprint practice. Google's Design Sprint Kit lists it as a core sprint method, gives the format as eight sketches in eight minutes, and states the purpose plainly: to push past your first idea, 'frequently the least innovative', and produce variety. The kit adds that the sketches only need to communicate the idea and are not meant to be good.",
      why: "A hard time limit stops people polishing, and the last panels are where unusual ideas appear because the obvious ones have already been used up.",
      how: [
        "Keep it individual and silent; group sketching produces one idea eight times.",
        "Time it strictly and let panels stay rough.",
        "Sketch ideas rather than screens; a diagram or a sequence of boxes counts.",
        "Pin all sheets up together and review them without names attached.",
        "Tell non-designers in advance that boxes and arrows are a legitimate answer."
      ],
      example: "The Design Sprint Kit's own entry gives the stats as 8 minutes, individual, applicable to all sprint types.",
      numbers: "Eight sketches in eight minutes, done individually, per Google's Design Sprint Kit.",
      pitfall: "People freeze at panel three and start redrawing panel one. Say out loud that the sheets go in the bin afterwards.",
      source: "Google Design Sprint Kit, Crazy 8's; the method is associated with Jake Knapp's design sprint work.",
      verify: { status: "verified", note: "Read the Design Sprint Kit's own Crazy 8's page this session. It gives eight distinct ideas in eight minutes, a stats block reading 8 mins, Individual and all sprint types, and the purpose of pushing 'beyond your first idea, frequently the least innovative, and to generate a wide variety of solutions to your challenge'. I could not confirm who first ran the exercise, so I have said only that it is associated with Knapp's sprint work." },
      belongs: { verdict: "core", why: "Time-boxed individual sketching is the practical way a team gets past its first idea, and this is the version everyone in the industry will recognise by name." },
      related: [960, 962, 963]
    },
    {
      n: 962,
      title: "SCAMPER",
      aka: ["Eberle's checklist"],
      oneLine: "A seven-prompt checklist for changing something that already exists: substitute, combine, adapt or adjust, modify, put to other uses, eliminate, reverse.",
      demo: {
        caption: "One search field, seven prompts, seven variants. Nothing here says which is right; the list only makes more of them.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 350 196\"><text class=\"t\" x=\"45\" y=\"16\" text-anchor=\"middle\">the artefact</text><rect class=\"s-mute\" x=\"6\" y=\"24\" width=\"78\" height=\"64\"/><rect class=\"s-mute\" x=\"14\" y=\"48\" width=\"52\" height=\"16\"/><rect class=\"f-mute\" x=\"19\" y=\"54\" width=\"22\" height=\"4\"/><circle class=\"s-mute\" cx=\"72\" cy=\"56\" r=\"5\"/><text class=\"t\" x=\"131\" y=\"16\" text-anchor=\"middle\">S substitute</text><rect class=\"s-mute\" x=\"92\" y=\"24\" width=\"78\" height=\"64\"/><rect class=\"f-mute\" x=\"114\" y=\"48\" width=\"34\" height=\"16\"/><circle class=\"s-mute\" cx=\"131\" cy=\"56\" r=\"4\"/><text class=\"t\" x=\"217\" y=\"16\" text-anchor=\"middle\">C combine</text><rect class=\"s-mute\" x=\"178\" y=\"24\" width=\"78\" height=\"64\"/><rect class=\"s-mute\" x=\"186\" y=\"40\" width=\"62\" height=\"14\"/><rect class=\"f-mute\" x=\"186\" y=\"64\" width=\"18\" height=\"8\"/><rect class=\"f-mute\" x=\"208\" y=\"64\" width=\"18\" height=\"8\"/><rect class=\"f-mute\" x=\"230\" y=\"64\" width=\"18\" height=\"8\"/><text class=\"t\" x=\"303\" y=\"16\" text-anchor=\"middle\">A adjust</text><rect class=\"s-mute\" x=\"264\" y=\"24\" width=\"78\" height=\"64\"/><rect class=\"s-mute\" x=\"272\" y=\"48\" width=\"18\" height=\"16\"/><rect class=\"s-mute\" x=\"290\" y=\"48\" width=\"44\" height=\"16\"/><rect class=\"f-mute\" x=\"295\" y=\"54\" width=\"20\" height=\"4\"/><text class=\"t\" x=\"45\" y=\"116\" text-anchor=\"middle\">M modify</text><rect class=\"s-mute\" x=\"6\" y=\"124\" width=\"78\" height=\"64\"/><rect class=\"s-mute\" x=\"12\" y=\"138\" width=\"66\" height=\"34\"/><rect class=\"f-mute\" x=\"18\" y=\"150\" width=\"34\" height=\"8\"/><text class=\"t\" x=\"131\" y=\"116\" text-anchor=\"middle\">P other use</text><rect class=\"s-mute\" x=\"92\" y=\"124\" width=\"78\" height=\"64\"/><rect class=\"s-mute\" x=\"100\" y=\"138\" width=\"62\" height=\"14\"/><rect class=\"f-mute\" x=\"100\" y=\"158\" width=\"44\" height=\"5\"/><rect class=\"f-mute\" x=\"100\" y=\"168\" width=\"52\" height=\"5\"/><rect class=\"f-mute\" x=\"100\" y=\"178\" width=\"38\" height=\"5\"/><text class=\"t\" x=\"217\" y=\"116\" text-anchor=\"middle\">E eliminate</text><rect class=\"s-mute\" x=\"178\" y=\"124\" width=\"78\" height=\"64\"/><rect class=\"f-mute\" x=\"186\" y=\"138\" width=\"30\" height=\"7\"/><rect class=\"f-mute\" x=\"186\" y=\"154\" width=\"62\" height=\"5\"/><rect class=\"f-mute\" x=\"186\" y=\"164\" width=\"50\" height=\"5\"/><rect class=\"f-mute\" x=\"186\" y=\"174\" width=\"58\" height=\"5\"/><text class=\"t\" x=\"303\" y=\"116\" text-anchor=\"middle\">R reverse</text><rect class=\"s-mute\" x=\"264\" y=\"124\" width=\"78\" height=\"64\"/><rect class=\"f-mute\" x=\"272\" y=\"136\" width=\"62\" height=\"5\"/><rect class=\"f-mute\" x=\"272\" y=\"146\" width=\"48\" height=\"5\"/><rect class=\"f-mute\" x=\"272\" y=\"156\" width=\"56\" height=\"5\"/><rect class=\"s-mute\" x=\"272\" y=\"168\" width=\"62\" height=\"14\"/></svg></div>"
      },
      what: "Bob Eberle published SCAMPER in 1971, in SCAMPER: Games for Imagination Development, a book aimed at developing creativity in children. He built it from questions in Alex Osborn's Applied Imagination checklist together with ideas from Frank E. Williams. Each letter is a prompt applied to an existing thing to generate a variant of it.",
      why: "As a prompt list it does what it says. Applied to one concrete artefact it will produce variants when a group has run dry.",
      how: [
        "If you use it, apply it to one specific artefact rather than to the problem in general.",
        "Run it after divergence has stalled, never instead of divergence.",
        "Treat the output as raw variants that still have to be judged against the brief."
      ],
      example: "The letters are not even stable between sources. Wikipedia glosses A as adjust, while most design write-ups gloss it as adapt, and M appears as modify, magnify or minify depending on who is writing.",
      numbers: "Seven letters.",
      pitfall: "It produces volume without direction, and the volume gets mistaken for progress in a workshop.",
      source: "Bob Eberle, SCAMPER: Games for Imagination Development (1971), built on Alex Osborn's Applied Imagination and on techniques from Frank E. Williams.",
      verify: { status: "verified", note: "Checked Wikipedia's SCAMPER entry this session for Eberle's 1971 book, its origin in children's creativity training, the debt to Osborn's checklist and to Williams, and the gloss given for each letter, which confirms A as adjust rather than adapt. No evidence of effectiveness is offered there and I found none." },
      belongs: { verdict: "adjacent", why: "It came out of children's creativity training rather than design and it has no evidence base, which is exactly true of synectics in entry 963 as well. Held to one standard both are adjacent: workshop prompts with a documented history, worth something when applied to one specific artefact after a group has run dry, and worth nothing on their own. An earlier draft cut this entry on the no-evidence ground while keeping 963, which is not a standard that survives being written down." },
      related: [960, 961, 963]
    },
    {
      n: 963,
      title: "Analogy and forced connection",
      aka: ["Synectics", "Metaphorical thinking"],
      oneLine: "Borrow the structure of something unrelated to get a genuinely different answer, not another variant.",
      demo: {
        caption: "Four office objects on the left, four on screen. Borrowing the domain brought all four relations across in one move.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 154\"><text class=\"t\" x=\"60\" y=\"12\" text-anchor=\"middle\">office</text><text class=\"t\" x=\"280\" y=\"12\" text-anchor=\"middle\">file system</text><path class=\"s\" d=\"M24 28 H48 L54 34 H96 V52 H24 Z\"/><path class=\"s\" d=\"M244 28 H262 L267 33 H316 V52 H244 Z\"/><rect class=\"s\" x=\"40\" y=\"60\" width=\"34\" height=\"26\"/><path class=\"s-mute\" d=\"M46 68 H68 M46 75 H62 M46 82 H66\"/><rect class=\"s\" x=\"258\" y=\"60\" width=\"34\" height=\"26\"/><path class=\"s\" d=\"M284 60 L292 68 H284 Z\"/><path class=\"s\" d=\"M40 96 H80 M44 100 L49 120 H71 L76 100\"/><path class=\"s\" d=\"M258 96 H298 M262 100 L267 120 H289 L294 100\"/><path class=\"s\" d=\"M24 128 H96 M32 128 V146 M88 128 V146\"/><rect class=\"s\" x=\"244\" y=\"128\" width=\"72\" height=\"18\"/><path class=\"s-accent\" d=\"M104 40 H140\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"170\" y=\"43\" text-anchor=\"middle\">folder</text><path class=\"s-accent\" d=\"M200 40 H230\" stroke-dasharray=\"3 3\"/><polygon class=\"f-accent\" points=\"238,40 228,36 228,44\"/><path class=\"s-accent\" d=\"M104 73 H140\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"170\" y=\"76\" text-anchor=\"middle\">the sheet</text><path class=\"s-accent\" d=\"M200 73 H230\" stroke-dasharray=\"3 3\"/><polygon class=\"f-accent\" points=\"238,73 228,69 228,77\"/><path class=\"s-accent\" d=\"M104 108 H140\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"170\" y=\"111\" text-anchor=\"middle\">the bin</text><path class=\"s-accent\" d=\"M200 108 H230\" stroke-dasharray=\"3 3\"/><polygon class=\"f-accent\" points=\"238,108 228,104 228,112\"/><path class=\"s-accent\" d=\"M104 137 H140\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"170\" y=\"140\" text-anchor=\"middle\">the surface</text><path class=\"s-accent\" d=\"M200 137 H230\" stroke-dasharray=\"3 3\"/><polygon class=\"f-accent\" points=\"238,137 228,133 228,141\"/></svg></div>"
      },
      what: "Synectics is the formal version, developed by William J. J. Gordon and George M. Prince in the 1950s and set out in Gordon's Synectics: The Development of Creative Capacity (1961). Gordon's method rests on a metaphorical process he described as making the familiar strange and the strange familiar, and he stated the principle as 'trust things that are alien, and alienate things that are trusted'. A forced connection is the blunt version: pick something unrelated at random and insist on a link.",
      why: "An analogy imports a whole set of relationships in one move, which is why it produces structurally different concepts instead of small variations on the first idea.",
      how: [
        "Name the abstract function first, then look for anything else in the world that performs it.",
        "Push the analogy until it breaks and note exactly where it broke; that boundary is the useful part.",
        "Force the connection to something specific rather than to a vague field.",
        "Strip the analogy out of the final work unless it stands up on its own terms."
      ],
      example: "The desktop metaphor is the best-known example still in daily use: folders, files and a wastebasket borrowed wholesale from office furniture to explain a file system.",
      numbers: "",
      pitfall: "The analogy gets designed instead of the problem. Stitched leather in a note-taking app is an analogy that outstayed its welcome.",
      source: "William J. J. Gordon, Synectics: The Development of Creative Capacity (1961); George M. Prince, The Practice of Creativity (1970).",
      verify: { status: "verified", note: "Checked Wikipedia's synectics entry this session for Gordon and Prince, the 1950s development inside the Arthur D. Little Invention Design Unit, the 1961 and 1970 books, the familiar and strange formulation and the quoted principle, which appears there word for word. The same entry offers no evidence of effectiveness and notes the method depends heavily on a trained facilitator, which I have not hidden." },
      belongs: { verdict: "adjacent", why: "Synectics came from group problem-solving consultancy rather than from design. Its design use is specific: it is the reliable way to get a structurally different concept when everything on the wall is a variation of the first sketch." },
      related: [945, 961, 962]
    },
    {
      n: 964,
      title: "Fidelity ladder (sketch, wireframe, mockup, prototype)",
      aka: ["Levels of fidelity"],
      oneLine: "The working vocabulary for how finished an artefact is, from a sketch to a working prototype.",
      demo: {
        caption: "The same booking page four times. Each step up in finish changes what people comment on, shown underneath.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 350 148\"><rect class=\"s-mute\" x=\"6\" y=\"8\" width=\"78\" height=\"100\"/><path class=\"s-mute\" d=\"M14 26 C 32 23, 54 29, 76 25\"/><path class=\"s-mute\" d=\"M14 36 L75 35 L76 64 L15 65 Z\"/><path class=\"s-mute\" d=\"M14 74 C 34 71, 52 77, 70 73\"/><path class=\"s-mute\" d=\"M14 82 C 28 79, 42 85, 54 81\"/><path class=\"s-mute\" d=\"M14 90 L40 89 L41 100 L15 101 Z\"/><text class=\"t\" x=\"45\" y=\"126\" text-anchor=\"middle\">sketch</text><text class=\"t\" x=\"45\" y=\"140\" text-anchor=\"middle\">wrong page?</text><rect class=\"s-mute\" x=\"92\" y=\"8\" width=\"78\" height=\"100\"/><rect class=\"f-mute\" x=\"100\" y=\"22\" width=\"62\" height=\"9\"/><rect class=\"s-mute\" x=\"100\" y=\"40\" width=\"62\" height=\"12\"/><rect class=\"s-mute\" x=\"100\" y=\"56\" width=\"62\" height=\"12\"/><rect class=\"s-mute\" x=\"100\" y=\"72\" width=\"62\" height=\"12\"/><rect class=\"f-mute\" x=\"100\" y=\"90\" width=\"28\" height=\"11\"/><text class=\"t\" x=\"131\" y=\"126\" text-anchor=\"middle\">wireframe</text><text class=\"t\" x=\"131\" y=\"140\" text-anchor=\"middle\">field order</text><rect class=\"s-mute\" x=\"178\" y=\"8\" width=\"78\" height=\"100\"/><rect class=\"f-mute\" x=\"186\" y=\"20\" width=\"62\" height=\"26\"/><circle class=\"s-mute\" cx=\"198\" cy=\"28\" r=\"3\"/><polygon class=\"s-mute\" points=\"208,44 222,28 236,44\"/><rect class=\"f\" x=\"186\" y=\"52\" width=\"44\" height=\"8\"/><rect class=\"f-mute\" x=\"186\" y=\"66\" width=\"62\" height=\"4\"/><rect class=\"f-mute\" x=\"186\" y=\"74\" width=\"40\" height=\"4\"/><rect class=\"f-accent\" x=\"186\" y=\"86\" width=\"30\" height=\"12\"/><text class=\"t\" x=\"217\" y=\"126\" text-anchor=\"middle\">mockup</text><text class=\"t\" x=\"217\" y=\"140\" text-anchor=\"middle\">that photo</text><rect class=\"s-mute\" x=\"264\" y=\"8\" width=\"78\" height=\"100\"/><rect class=\"f-mute\" x=\"272\" y=\"20\" width=\"50\" height=\"24\"/><rect class=\"f\" x=\"272\" y=\"50\" width=\"38\" height=\"8\"/><rect class=\"s-accent\" x=\"272\" y=\"64\" width=\"50\" height=\"14\" style=\"stroke-width:2\"/><path class=\"s-accent\" d=\"M278 67 V75\"/><rect class=\"f-accent\" x=\"272\" y=\"82\" width=\"30\" height=\"4\"/><rect class=\"f-accent\" x=\"272\" y=\"90\" width=\"28\" height=\"12\"/><rect class=\"s-mute\" x=\"324\" y=\"16\" width=\"24\" height=\"84\" style=\"fill:var(--paper-raised)\"/><text class=\"t\" x=\"303\" y=\"126\" text-anchor=\"middle\">prototype</text><text class=\"t\" x=\"303\" y=\"140\" text-anchor=\"middle\">what happens</text></svg></div>"
      },
      what: "A sketch tests an idea. A wireframe tests structure and priority. A mockup tests the visual design. A prototype tests behaviour. Each rung costs more to make and more to change than the one below it. The ladder is practitioner vocabulary rather than a named theory, and it has no single origin that I could trace. The nearest sourced framework is Houde and Hill's, which describes a prototype by the question it answers rather than by how finished it looks.",
      why: "Knowing which rung you are standing on tells you what feedback to ask for and what to ignore. Show a mockup and people talk about colour. Show a wireframe and they talk about order.",
      how: [
        "Pick the lowest rung that can answer the question you actually have.",
        "Say what the artefact does not represent, out loud, before you show it.",
        "Never add visual polish to a structural question; it changes the feedback you get.",
        "Climb a rung only when the one below has stopped teaching you anything."
      ],
      example: "A grey-box wireframe of a booking page gets comments about which fields come first. The same page in brand colours with real photographs gets comments about the photographs.",
      numbers: "",
      pitfall: "High-fidelity mockups shown early are read as decisions, and clients then experience any change as going backwards.",
      source: "Origin unclear as a named ladder. Houde and Hill, What do Prototypes Prototype? (Apple Computer, 1997), is the closest sourced framework.",
      verify: { status: "adjusted", note: "I could not find an originator for the phrase fidelity ladder and have therefore reframed this entry as practitioner vocabulary rather than as a named principle, which is how the master list title reads it. The sourced anchor I point to instead is Houde and Hill's 1997 chapter, verified through Semantic Scholar's record and two independent summaries." },
      belongs: { verdict: "core", why: "Choosing the right level of finish for the question in hand is a daily decision, and getting it wrong is the most common cause of useless design feedback." },
      related: [965, 966, 967]
    },
    {
      n: 965,
      title: "Paper prototyping",
      aka: ["Low-fidelity prototyping", "Paper interfaces"],
      oneLine: "Hand-drawn interfaces operated by a person while a participant tries to use them.",
      demo: {
        caption: "The same screen twice. Same wording, same order, same decisions to argue about; only the appearance has gone.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Built version</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Preferred day</span><span class=\"db-input\">Tuesday 14 March</span><div class=\"db-row db-row--between\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Back</span><span class=\"db-btn db-btn--sm\">Confirm</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Paper version</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 104\"><path class=\"s-mute\" d=\"M8 6 L192 4 L194 98 L6 96 Z\"/><text class=\"t\" x=\"20\" y=\"26\">preferred day</text><path class=\"s\" d=\"M18 34 L168 32 L169 54 L19 55 Z\"/><text class=\"t\" x=\"28\" y=\"48\">Tuesday 14 March</text><path class=\"s\" d=\"M18 66 L66 65 L67 86 L19 87 Z\"/><text class=\"t\" x=\"30\" y=\"80\">back</text><path class=\"s\" d=\"M112 65 L168 66 L167 87 L111 86 Z\"/><text class=\"t\" x=\"122\" y=\"80\">confirm</text></svg></div></div></div>"
      },
      what: "The interface is drawn on paper and a team member plays the computer, swapping sheets and revealing menus as the participant taps and writes. Marc Rettig's Prototyping for Tiny Fingers (Communications of the ACM, 1994) is one of the founding articles, and Carolyn Snyder's Paper Prototyping (2003) is the handbook.",
      why: "You get usability findings before anything is built, and changes cost seconds rather than a sprint. It also lowers the social barrier: people criticise a drawing far more freely than something that looks finished.",
      how: [
        "Draw at real size and keep the pieces loose so you can swap parts mid-session.",
        "Use two people: one operates the interface, one facilitates.",
        "Test flows and wording, not appearance.",
        "Redraw between sessions rather than saving all the changes to the end."
      ],
      example: "Snyder's handbook documents the full method, including the human computer swapping sheets in response to the participant's actions.",
      numbers: "",
      pitfall: "It works in person only, and participants have to imagine the interaction, which biases anything depending on timing, scrolling or animation.",
      source: "Marc Rettig, Prototyping for Tiny Fingers, CACM (1994); Carolyn Snyder, Paper Prototyping (2003).",
      verify: { status: "verified", note: "Checked Wikipedia's paper prototyping entry for the Rettig 1994 CACM article and Snyder's 2003 book, and for the stated limitations: in-person only, minimal functionality, and the demand it places on participants' imagination." },
      belongs: { verdict: "core", why: "It is the cheapest way to test a flow with a real person, and it works before any tooling decision has been made." },
      related: [964, 966, 971]
    },
    {
      n: 966,
      title: "Fidelity matched to the question",
      aka: ["What do prototypes prototype?", "Prototype by purpose"],
      oneLine: "Describe a prototype by the question it answers, not by how finished it looks.",
      demo: {
        caption: "Each prototype answers one corner. The one in the middle tries to answer all three and costs the most.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 172\"><path class=\"s-mute\" d=\"M180 22 L320 140 L40 140 Z\"/><text class=\"t\" x=\"180\" y=\"14\" text-anchor=\"middle\">role</text><text class=\"t\" x=\"36\" y=\"156\">look and feel</text><text class=\"t\" x=\"324\" y=\"156\" text-anchor=\"end\">implementation</text><circle class=\"f-accent\" cx=\"180\" cy=\"48\" r=\"4\"/><text class=\"t\" x=\"180\" y=\"66\" text-anchor=\"middle\">foam mock-up</text><circle class=\"f-accent\" cx=\"110\" cy=\"122\" r=\"4\"/><text class=\"t\" x=\"110\" y=\"112\" text-anchor=\"middle\">static comp</text><circle class=\"f-accent\" cx=\"255\" cy=\"122\" r=\"4\"/><text class=\"t\" x=\"255\" y=\"112\" text-anchor=\"middle\">code spike</text><circle class=\"f\" cx=\"180\" cy=\"95\" r=\"5\"/><text class=\"t\" x=\"180\" y=\"88\" text-anchor=\"middle\">integrated demo</text></svg></div>"
      },
      what: "Stephanie Houde and Charles Hill argued in What do Prototypes Prototype? (Apple Computer, 1997) that a prototype should be described in terms of the artefact being designed rather than its own incidental attributes. Their model has three corners. Role asks what the thing would be useful for in someone's life. Look and feel asks what experiencing it is like. Implementation asks whether and how it can be built. Their advice is to build separate prototypes for separate questions rather than one that tries to answer all three at once.",
      why: "Fidelity is not one dial. A cardboard mock-up can be high fidelity for role and worthless for look and feel, and knowing which you need stops you defaulting to the expensive option.",
      how: [
        "Write the question down before you choose the tool.",
        "Build separate artefacts for separate questions instead of one integrated demo.",
        "Mix fidelity within one artefact: rough boxes with real copy is often exactly right.",
        "State which corner a prototype covers when you present it."
      ],
      example: "Houde and Hill place any prototype somewhere inside a triangle of role, look and feel, and implementation, with fully integrated prototypes sitting in the middle and costing the most.",
      numbers: "Three dimensions: role, look and feel, implementation.",
      pitfall: "Integrated demos. They impress, they cost the most and they answer no single question well enough to decide anything.",
      source: "Stephanie Houde and Charles Hill, What do Prototypes Prototype? (Apple Computer, 1997).",
      verify: { status: "verified", note: "Verified the authors, the 1997 date, the Apple affiliation and the role, look and feel, implementation model through Semantic Scholar's record of the chapter and two independent summaries. I read summaries rather than the full chapter, so I have not quoted from it directly." },
      belongs: { verdict: "core", why: "It is the correction to the fidelity ladder: it replaces a vague sense of finish with an explicit question, which is what decides how much a prototype should cost." },
      related: [964, 965, 971]
    },
    {
      n: 967,
      title: "Design critique structure",
      aka: ["Critique", "Design review"],
      oneLine: "A structured session that analyses a design against its stated objectives rather than against taste.",
      demo: { none: "The structure here is an order of things said in a room, so any picture of it is the agenda headings redrawn; the one part with a visible form, sorting a comment into evidence or preference, is demonstrated at 968." },
      what: "Critique is analysis, run to a shape. Adam Connor and Aaron Irizarry set out the practice in Discussing Design (O'Reilly, 2015). The publisher's summary puts the intent plainly: critique 'is intended to help teams strengthen their designs, products, and services, rather than be used to assert authority or push agendas under the guise of feedback'. In practice the session has a fixed order: state the objectives, walk through the decisions and their reasons, analyse against those objectives, then record actions.",
      why: "It makes design decisions discussable without making them personal, and it gives junior people a legitimate way to challenge senior work.",
      how: [
        "Open by restating the goals the work is being judged against, in one slide or one sentence.",
        "Ask for analysis tied to a stated goal, and park comments that cannot name one.",
        "Separate the critique session from the decision session; do not do both in one hour.",
        "Write actions with owners before anyone leaves the room.",
        "Have the designer present the problem, not defend the artefact."
      ],
      example: "Discussing Design is built around this distinction and treats critique as a skill that can be practised, rather than as a meeting type.",
      numbers: "",
      pitfall: "Critique without stated objectives collapses into a taste contest, and the most senior taste wins by default.",
      source: "Adam Connor and Aaron Irizarry, Discussing Design: Improving Communication and Collaboration through Critique (O'Reilly, 2015).",
      verify: { status: "verified", note: "Checked O'Reilly's own listing and the ACM Digital Library record, which date the book to June 2015 and carry the overview line quoted here word for word. The session order I describe is common practice and I have not attributed it to the book." },
      belongs: { verdict: "core", why: "Design gets decided in rooms, and the structure of the room decides which design survives. This is the named practice for running that room." },
      related: [960, 968, 979]
    },
    {
      n: 968,
      title: "Feedback versus opinion",
      aka: ["Critique versus reaction"],
      oneLine: "Analysis against an agreed goal is feedback; everything else is preference, and should be labelled as such.",
      demo: {
        caption: "Both begin from the same discomfort. Only the right one names what it is judged against, so only it settles.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Preference</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Comment</span><span class=\"db-type\">I am not keen on the blue.</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Feedback</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Goal it names</span><span class=\"db-type\">A visitor finds the phone number on the first screen.</span><span class=\"db-label\">Observation</span><span class=\"db-type\">The number is the same blue and weight as three other links.</span><span class=\"db-label\">Check</span><span class=\"db-type\">Five people, one task: ring the practice.</span></div></div></div></div></div>"
      },
      what: "Connor and Irizarry separate critique, which is analysis against agreed objectives, from reactions and preferences, which mostly reveal the speaker's own vision for the work. The working test is whether a comment can name the objective it relates to and say why it is not being met. Preferences are not worthless, but they are a different input and should be recorded differently.",
      why: "It gives you a courteous way to decline a preference without declining the person, and it stops the work being reshaped by whoever spoke last or loudest.",
      how: [
        "Ask what problem the comment is describing before discussing any fix.",
        "Convert 'I don't like the blue' into a question about contrast, hierarchy or brand fit, then answer that question.",
        "Log preferences separately, and revisit them if the same one recurs across reviewers.",
        "Let the person who raised it confirm whether your restatement is right."
      ],
      example: "Make the logo bigger is a preference. People are not registering whose site this is within the first screen is feedback, and it can be tested with five users.",
      numbers: "",
      pitfall: "Using the distinction as a shield. If you file every awkward comment as mere opinion, you stop learning and the room stops speaking.",
      source: "Adam Connor and Aaron Irizarry, Discussing Design (O'Reilly, 2015).",
      verify: { status: "verified", note: "Same source as entry 967, checked against O'Reilly's listing and the ACM record, whose shared overview draws exactly this line between critique and things said under the guise of feedback. The working test described here is my summary of the distinction rather than a quotation." },
      belongs: { verdict: "core", why: "Sorting comments into evidence and preference is a daily skill in client work, and it is the difference between iterating and being pushed around." },
      related: [967, 971, 976]
    },
    {
      n: 969,
      title: "Heuristic evaluation",
      aka: ["Expert review", "Usability inspection"],
      oneLine: "Several evaluators inspect an interface independently against usability principles and pool their findings.",
      demo: {
        caption: "Three evaluators, twenty problems, six found each. The merged row is thirteen, which is why one reviewer is not an audit.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Evaluator A: 6 of 20</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Evaluator B: 6 of 20</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Evaluator C: 6 of 20</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Merged: 13 of 20</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></div></div></div></div>"
      },
      what: "Each evaluator walks the interface against a list of usability heuristics and records every violation with its location and a severity rating. Jakob Nielsen and Rolf Molich introduced the method at the ACM CHI conference in 1990. Nielsen Norman Group's guidance is that three to five people should evaluate independently, because any single evaluator misses problems, with the findings merged afterwards. The statistical argument for using several evaluators comes from Nielsen and Landauer's 1993 INTERCHI model.",
      why: "It finds a large share of the obvious problems without recruiting a single user, which makes it the right thing to run before a usability test so the test is not wasted on issues you already knew about.",
      how: [
        "Have each evaluator go through alone first, then merge the lists in a single session.",
        "Record location, the heuristic broken and a severity rating for every issue.",
        "Do two passes: one to learn the flow, one to inspect it.",
        "Follow it with real users; inspection predicts problems, it does not observe them."
      ],
      example: "NN/g's own how-to article specifies independent evaluation by three to five people and cites Nielsen and Landauer (1993) as the reason more than one evaluator is needed.",
      numbers: "Three to five independent evaluators, per Nielsen Norman Group.",
      pitfall: "One expert doing it alone and calling it an audit. The method's entire argument is that different evaluators find different problems.",
      source: "Jakob Nielsen and Rolf Molich, CHI 1990; Nielsen and Landauer, INTERCHI 1993; Nielsen Norman Group guidance.",
      verify: { status: "verified", note: "Checked NN/g's how to conduct a heuristic evaluation article again this session: it recommends that three to five people evaluate independently, says team members should not see each other's work until their own is finished, and cites both Nielsen and Molich (1990) and Nielsen and Landauer (1993). One qualification: that article does not cover severity ratings. Severity scoring is a documented part of Nielsen's wider heuristic evaluation method, set out separately, and is offered here as method advice rather than as something the how-to article says." },
      belongs: { verdict: "core", why: "It is the standard low-cost inspection method, and knowing its evaluator count is what separates a real evaluation from one person's opinions in a spreadsheet." },
      related: [970, 971, 974]
    },
    {
      n: 970,
      title: "Cognitive walkthrough",
      aka: ["Learnability inspection"],
      oneLine: "Step through a task as a first-time user would, asking four fixed questions at every action.",
      demo: {
        caption: "Four questions at every step. The failure lands on one question at one step, which is what you write down.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 420 152\"><text class=\"t\" x=\"175\" y=\"26\" text-anchor=\"middle\">wants it</text><text class=\"t\" x=\"235\" y=\"26\" text-anchor=\"middle\">notices it</text><text class=\"t\" x=\"295\" y=\"26\" text-anchor=\"middle\">matches</text><text class=\"t\" x=\"355\" y=\"26\" text-anchor=\"middle\">feedback</text><path class=\"s-mute\" d=\"M150 34 V136\"/><text class=\"t\" x=\"8\" y=\"54\">1 find the booking page</text><text class=\"t\" x=\"8\" y=\"90\">2 choose a time</text><text class=\"t\" x=\"8\" y=\"126\">3 confirm and pay</text><circle class=\"f\" cx=\"175\" cy=\"50\" r=\"5\"/><circle class=\"f\" cx=\"235\" cy=\"50\" r=\"5\"/><circle class=\"f\" cx=\"295\" cy=\"50\" r=\"5\"/><circle class=\"f\" cx=\"355\" cy=\"50\" r=\"5\"/><circle class=\"f\" cx=\"175\" cy=\"86\" r=\"5\"/><circle class=\"s-accent\" cx=\"235\" cy=\"86\" r=\"7\"/><circle class=\"f\" cx=\"295\" cy=\"86\" r=\"5\"/><circle class=\"f\" cx=\"355\" cy=\"86\" r=\"5\"/><circle class=\"f\" cx=\"175\" cy=\"122\" r=\"5\"/><circle class=\"f\" cx=\"235\" cy=\"122\" r=\"5\"/><circle class=\"f\" cx=\"295\" cy=\"122\" r=\"5\"/><circle class=\"f\" cx=\"355\" cy=\"122\" r=\"5\"/></svg></div>"
      },
      what: "You choose a task, write the correct sequence of actions, and at each step ask the original four questions: will the user try to achieve this effect, will they notice the correct action is available, will they understand that this action produces the effect they want, and do they get appropriate feedback. The method was developed in the early 1990s and set out by Wharton, Rieman, Lewis and Polson in Nielsen and Mack's Usability Inspection Methods (1994). Rick Spencer published a streamlined two-question version in 2000.",
      why: "It is aimed squarely at learnability, at the person who has never seen this before, which is precisely the person your team can no longer imagine being.",
      how: [
        "Write and agree the correct action sequence before the session starts.",
        "Answer all four questions out loud at every step, including the ones that look trivial.",
        "Record failure stories rather than scores.",
        "Use it on sign-up, first run and error recovery, where first-time use decides everything."
      ],
      example: "Lewis and Rieman flag two recurring misunderstandings: evaluators who do not know the correct sequence themselves, and teams who believe the method involves real users. It does not.",
      numbers: "Four questions per step in the original method; two in Spencer's 2000 version.",
      pitfall: "Time pressure and designer defensiveness derail it. Spencer's streamlined version exists precisely because the full method takes longer than most teams will sit still for.",
      source: "Wharton, Rieman, Lewis and Polson, in Nielsen and Mack (eds), Usability Inspection Methods (1994); Spencer (2000).",
      verify: { status: "verified", note: "Checked Wikipedia's cognitive walkthrough entry this session. It gives the early 1990s development, the four original questions, the 1994 chapter citation as Wharton, Rieman, Lewis and Polson in Nielsen and Mack, pages 105 to 140, Spencer's 2000 two-question version and the two misunderstandings reported by Lewis and Rieman. Question three is paraphrased here; the original reads 'will the user understand that the wanted subtask can be achieved by the action?'." },
      belongs: { verdict: "core", why: "It is the only inspection method that targets first-time learnability specifically, which is the thing an experienced team is structurally unable to judge." },
      related: [957, 969, 971]
    },
    {
      n: 971,
      title: "Moderated usability testing",
      aka: ["Facilitated usability testing", "Lab testing"],
      oneLine: "One participant, one facilitator, realistic tasks, and a team watching someone struggle in real time.",
      demo: {
        caption: "Words in mono are the interface's own. On the left they give away the route the test was meant to find.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Written as instructions</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Task 1</span><span class=\"db-type\">Click <span class=\"db-type--mono\">Book appointment</span> in the top menu, choose <span class=\"db-type--mono\">Tuesday</span>, then press <span class=\"db-type--mono\">Confirm</span>.</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Written as a goal</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Task 1</span><span class=\"db-type\">You have toothache and want the earliest appointment this week. Show me how you would get one.</span></div></div></div></div></div>"
      },
      what: "The participant attempts tasks with the product while a facilitator watches, keeps quiet and probes when something goes wrong. It can be in person or remote. Nielsen Norman Group recommends in-person testing where possible, because facilitators can read body language and judge when to probe, and adds that remote testing beats skipping the test when budget or geography rules out the room.",
      why: "It is the only method that shows a real person failing at your design as it happens, which changes minds in a way that a written report never does.",
      how: [
        "Write tasks as goals with a reason, never as instructions that name the buttons.",
        "Say nothing. Count to five before you help.",
        "Get the team watching live rather than reading a summary next week.",
        "Test the current live product as well, so you have a baseline to compare against.",
        "Debrief within the hour, while everyone still remembers what they saw."
      ],
      example: "Watching one person hunt for the phone number on a practice website teaches a team more in ninety seconds than a month of dashboard-watching.",
      numbers: "See entry 974 for sample size and what the numbers actually support.",
      pitfall: "Leading the participant. The moment you say try the menu, the finding is gone and cannot be recovered.",
      source: "Nielsen Norman Group, Remote Usability Tests: Moderated and Unmoderated (checked 2026).",
      verify: { status: "verified", note: "Checked NN/g's articles on remote and unmoderated testing for the in-person preference, the body-language rationale and the position that remote testing is better than no testing. The method itself predates NN/g and I did not confirm an originator, so I have not named one." },
      belongs: { verdict: "core", why: "Observing real use is the base evidence for interaction design; everything else in this section is either preparation for it or a substitute when it is impossible." },
      related: [972, 973, 974]
    },
    {
      n: 972,
      title: "Unmoderated testing",
      aka: ["Remote unmoderated testing", "Asynchronous testing"],
      oneLine: "Participants complete tasks alone while software gives instructions and records what they do.",
      demo: {
        caption: "Two routes over the same nine products. The right-hand participant is spending nobody's money, and the route shows it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Spending their own money</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 152\"><path class=\"s-mute\" d=\"M8 8 h48 v36 h-48 Z M66 8 h48 v36 h-48 Z M124 8 h48 v36 h-48 Z M8 54 h48 v36 h-48 Z M66 54 h48 v36 h-48 Z M124 54 h48 v36 h-48 Z M8 100 h48 v36 h-48 Z M66 100 h48 v36 h-48 Z M124 100 h48 v36 h-48 Z\"/><path class=\"s\" d=\"M32 26 L90 26 L148 26 L90 72 L32 72 L32 118 L90 118 L90 72 L148 72 L148 118\"/><circle class=\"f-accent\" cx=\"148\" cy=\"118\" r=\"5\"/><text class=\"t\" x=\"148\" y=\"148\" text-anchor=\"middle\">chosen</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Pretending, unmoderated</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 152\"><path class=\"s-mute\" d=\"M8 8 h48 v36 h-48 Z M66 8 h48 v36 h-48 Z M124 8 h48 v36 h-48 Z M8 54 h48 v36 h-48 Z M66 54 h48 v36 h-48 Z M124 54 h48 v36 h-48 Z M8 100 h48 v36 h-48 Z M66 100 h48 v36 h-48 Z M124 100 h48 v36 h-48 Z\"/><path class=\"s\" d=\"M32 26 L90 26\"/><circle class=\"f-accent\" cx=\"90\" cy=\"26\" r=\"5\"/><text class=\"t\" x=\"90\" y=\"50\" text-anchor=\"middle\">chosen</text></svg></div></div></div>"
      },
      what: "Software delivers the tasks, records the screen and voice, and asks fixed follow-up questions. Nielsen Norman Group's summary of the trade-off is blunt: the absence of a researcher 'is both their biggest benefit and their greatest drawback'. It is much faster because nothing has to be scheduled, and it works best on live sites or highly functional prototypes rather than on rough ones.",
      why: "It gets you many sessions quickly and cheaply, which suits a narrow question such as whether one component works or whether a wording change helps.",
      how: [
        "Use it for a few specific elements rather than for a general review.",
        "Write instructions as if nobody can ask you anything, because nobody can.",
        "Pilot with two people before you spend the whole sample.",
        "Avoid tasks needing imagination or emotional investment, such as pretend shopping."
      ],
      example: "NN/g warns that a participant only pretending to shop 'often will glance only at a few products and quickly select one that seems reasonable', which is nothing like how somebody spending their own money behaves.",
      numbers: "",
      pitfall: "You discover afterwards that half the participants misread the task, and there was nobody in the room to notice.",
      source: "Nielsen Norman Group, Unmoderated User Tests: How and Why to Do Them, and Remote Usability Tests (checked 2026).",
      verify: { status: "verified", note: "Both quoted phrases and the guidance on suitable study types come from NN/g's unmoderated testing articles, read this session." },
      belongs: { verdict: "core", why: "It is now the default way most teams get behavioural evidence at volume, and knowing what it cannot see is as important as knowing how to run it." },
      related: [952, 971, 976]
    },
    {
      n: 973,
      title: "Think-aloud protocol",
      aka: ["Thinking aloud", "Concurrent verbal protocol"],
      oneLine: "Ask the participant to say what they are thinking while they work, so you get the reason behind the click.",
      demo: {
        caption: "The same silent gap on both tracks. On the lower one the participant said why, so it stops being a guess.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 420 142\"><text class=\"t\" x=\"8\" y=\"26\">clicks only</text><path class=\"s-mute\" d=\"M20 48 H400\"/><circle class=\"f\" cx=\"44\" cy=\"48\" r=\"4\"/><circle class=\"f\" cx=\"92\" cy=\"48\" r=\"4\"/><circle class=\"f\" cx=\"330\" cy=\"48\" r=\"4\"/><path class=\"s-mute\" d=\"M100 40 V32 H320 V40\"/><text class=\"t\" x=\"210\" y=\"28\" text-anchor=\"middle\">18 seconds, no click</text><text class=\"t\" x=\"210\" y=\"64\" text-anchor=\"middle\">unexplained</text><text class=\"t\" x=\"8\" y=\"92\">clicks and commentary</text><path class=\"s-mute\" d=\"M20 114 H400\"/><circle class=\"f\" cx=\"44\" cy=\"114\" r=\"4\"/><circle class=\"f\" cx=\"92\" cy=\"114\" r=\"4\"/><circle class=\"f\" cx=\"330\" cy=\"114\" r=\"4\"/><path class=\"s-mute\" d=\"M100 106 V98 H320 V106\"/><text class=\"t\" x=\"210\" y=\"132\" text-anchor=\"middle\">I thought that was the total, not the deposit</text></svg></div>"
      },
      what: "The technique comes from protocol analysis in cognitive psychology, set out by K. Anders Ericsson and Herbert Simon in Verbal Reports as Data (Psychological Review, 1980). Clayton Lewis brought it into usability testing while at IBM. Concurrent think-aloud happens during the task and tends to be more complete. Retrospective think-aloud happens afterwards, often prompted by a video of the session, and interferes less with performance.",
      why: "It converts a silent failure into a describable one. Without it you see the click and the pause, and you invent your own explanation for both.",
      how: [
        "Ask for a running commentary at the start, then remind gently rather than interrogate.",
        "Prompt with a neutral 'what are you thinking?' rather than a question about your design.",
        "Use the retrospective version for timed or high-workload tasks.",
        "Keep what they did and what they said about it in separate columns of your notes."
      ],
      example: "Ted Boren and Judith Ramey found significant differences between the way Ericsson and Simon said protocols should be run and the way usability practitioners actually run them, with far more prompting than the theory allows.",
      numbers: "",
      pitfall: "Heavy prompting turns the session into an interview and changes the behaviour you came to watch, which is the reactivity problem the original researchers worried about.",
      source: "Ericsson and Simon, Verbal Reports as Data, Psychological Review (1980); Clayton Lewis at IBM; Boren and Ramey's critique.",
      verify: { status: "verified", note: "Checked Wikipedia's think aloud protocol entry for the Ericsson and Simon 1980 Psychological Review paper, Lewis's introduction of the method at IBM, the concurrent versus retrospective comparison and the Boren and Ramey finding about practitioner drift." },
      belongs: { verdict: "adjacent", why: "It is a cognitive psychology method. In design it is the standard way of attaching a reason to an observed action during a usability test, and it is what makes a recorded session interpretable." },
      related: [971, 972, 974]
    },
    {
      n: 974,
      title: "The five-user rule and its limits",
      aka: ["Nielsen's five users", "Diminishing returns curve"],
      oneLine: "Five users find most usability problems on average, but the average conceals a very wide range.",
      demo: {
        caption: "Faulkner's 2003 data. At five users the result landed anywhere from 55 to 99 per cent; the dot is the mean.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 152\"><text class=\"t\" x=\"345\" y=\"14\" text-anchor=\"end\">per cent of known problems found</text><text class=\"t\" x=\"8\" y=\"42\">5 users</text><text class=\"t\" x=\"8\" y=\"78\">10 users</text><text class=\"t\" x=\"8\" y=\"114\">20 users</text><path class=\"s-mute\" d=\"M97.5 38 H339.5\"/><path class=\"s\" d=\"M97.5 32 V44\"/><path class=\"s\" d=\"M339.5 32 V44\"/><circle class=\"f-accent\" cx=\"265.5\" cy=\"38\" r=\"4.5\"/><text class=\"t\" x=\"97.5\" y=\"26\" text-anchor=\"middle\">55</text><text class=\"t\" x=\"265.5\" y=\"26\" text-anchor=\"middle\">mean 85.55</text><text class=\"t\" x=\"339.5\" y=\"26\" text-anchor=\"middle\">99</text><path class=\"s-mute\" d=\"M246 74 H345\" stroke-dasharray=\"3 3\"/><path class=\"s\" d=\"M246 68 V80\"/><circle class=\"f-accent\" cx=\"315.8\" cy=\"74\" r=\"4.5\"/><text class=\"t\" x=\"246\" y=\"62\" text-anchor=\"middle\">82</text><text class=\"t\" x=\"315.8\" y=\"62\" text-anchor=\"middle\">mean 94.7</text><path class=\"s-mute\" d=\"M317.5 110 H345\" stroke-dasharray=\"3 3\"/><path class=\"s\" d=\"M317.5 104 V116\"/><circle class=\"f-accent\" cx=\"336.2\" cy=\"110\" r=\"4.5\"/><text class=\"t\" x=\"317.5\" y=\"98\" text-anchor=\"middle\">95</text><text class=\"t\" x=\"345\" y=\"126\" text-anchor=\"end\">mean 98.4</text><path class=\"s-mute\" d=\"M70 134 H345\"/><path class=\"s-mute\" d=\"M70 134 V129\"/><path class=\"s-mute\" d=\"M207.5 134 V129\"/><path class=\"s-mute\" d=\"M345 134 V129\"/><text class=\"t\" x=\"70\" y=\"147\" text-anchor=\"middle\">50</text><text class=\"t\" x=\"207.5\" y=\"147\" text-anchor=\"middle\">75</text><text class=\"t\" x=\"345\" y=\"147\" text-anchor=\"end\">100</text></svg></div>"
      },
      what: "Nielsen's claim rests on the model N(1-(1-L)^n), where N is the number of problems in the design, L is the proportion one user finds and n is the number of users. He puts L at 31 per cent on average, drawn from work with Tom Landauer published at INTERCHI in 1993, which gives about 85 per cent of problems at five users. Laura Faulkner tested that in 2003 by running 60 users against one product, logging 45 problems in total, then drawing 100 random samples at each size. Sets of five found as much as 99 per cent of the known problems and as little as 55 per cent, with a mean of 85.55. Ten users never found fewer than 82 per cent; twenty never fewer than 95. In an earlier study by Spool and Schroeder (2001), the first five users found 35 per cent.",
      why: "Five is a defensible number for finding problems inside an iterative cycle. It is not a defensible number for claiming you have found most of the problems in one round, and the difference matters when you are advising a client to stop testing.",
      how: [
        "Run several rounds of five rather than one round of fifteen.",
        "Increase the sample where the cost of a missed problem is high, such as payments, safety or accessibility.",
        "Test three to four users per group when you have two distinct user groups.",
        "Report the range you might have missed alongside what you found."
      ],
      example: "Faulkner's paper, Beyond the Five-User Assumption: Benefits of Increased Sample Sizes in Usability Testing (Behavior Research Methods, 2003), is the one to hand to anybody who quotes the five-user rule as settled.",
      numbers: "Nielsen: L = 31 per cent, giving about 85 per cent of problems at five users; he separately advises 20 users for quantitative studies and 15 for card sorting. Faulkner 2003, from 60 users and 45 known problems: sets of five found between 55 and 99 per cent, mean 85.55; ten users found at least 82 per cent, mean 94.7; twenty users at least 95 per cent. Spool and Schroeder 2001: first five users found 35 per cent.",
      pitfall: "Treating 85 per cent as a guarantee rather than an average. Your particular five could be the set that found 55.",
      source: "Nielsen and Landauer, INTERCHI 1993; Jakob Nielsen, Why You Only Need to Test with 5 Users (2000); Laura Faulkner, Beyond the Five-User Assumption, Behavior Research Methods 35(3) (2003), 379 to 383; Spool and Schroeder, Testing Web Sites: Five Users Is Nowhere Near Enough, CHI 2001 Extended Abstracts, 285 to 286.",
      verify: { status: "disputed", note: "Nielsen's formula, the L value of 31 per cent, the 85 per cent figure and his 20-user and 15-user caveats are taken from his own NN/g article, read this session. The formula is set as an image on that page and reads N(1-(1-L)^n), which is what this entry now prints; an earlier draft dropped the outer term and gave a figure that contradicted the 85 per cent it sits next to. Faulkner's figures now come from the full paper rather than the abstract, read this session as a PDF: 60 users, 45 problems, 100 random samples per size, and her Table 2, which gives minimums of 55, 82 and 95 per cent at five, ten and twenty users with means of 85.55, 94.69 and 98.4. Note that her own abstract rounds the ten-user minimum to 80 while her table says 82; the table is the harder number and is what this entry now quotes. The Spool and Schroeder 35 per cent figure is stated in Faulkner's background section with the CHI 2001 citation. The rule is real but routinely overstated." },
      belongs: { verdict: "core", why: "Sample size is the number designers are asked about most often, and this is the entry where the popular version and the evidence part company." },
      related: [952, 969, 971]
    },
    {
      n: 975,
      title: "Accessibility audit",
      aka: ["WCAG evaluation", "WCAG-EM"],
      oneLine: "A structured evaluation of a site against WCAG success criteria, using a sampled set of pages.",
      demo: {
        caption: "Same thirty-five pages. The left sample never opens the booking form, which is the one part that has to work.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">First ten pages crawled</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">home</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">treatment pages</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">blog posts</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">booking form</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">contact</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One of every kind</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">home</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">treatment pages</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">blog posts</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">booking form</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">contact</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span></div></div></div></div></div></div>"
      },
      what: "The W3C publishes a methodology for this, the WCAG Evaluation Methodology, known as WCAG-EM. It has five steps: define the evaluation scope, explore the target product, select a representative sample, evaluate that sample, and report the findings. It sets no fixed sample size, saying the size depends on how large, old, complex and consistent the product is, and it asks you to add a random sample equal to 10 per cent of the structured sample as a cross-check.",
      why: "An audit turns the unanswerable question of whether a site is accessible into a list of specific failures against numbered criteria, which a developer can fix and a client can sign off.",
      how: [
        "Sample structurally: common views, essential functionality, each type of page, each technology relied upon.",
        "Add the random 10 per cent check to catch what your structured sample missed.",
        "Test with a keyboard and a screen reader as well as automated tools.",
        "Report against the numbered success criterion so the fix is unambiguous.",
        "Re-audit after the fixes, on the same sample."
      ],
      example: "WCAG-EM asks you to select samples reflecting 'common views, essential functionality, types of samples, technologies relied upon and other relevant samples'.",
      numbers: "Five steps; a random sample set of 10 per cent of the structured sample size.",
      pitfall: "Automated scans reported as audits. Many success criteria need human judgement, so a clean scan is not a pass and should never be sold as one.",
      source: "W3C, WCAG Evaluation Methodology (WCAG-EM) 2.0, W3C Group Note (23 July 2026).",
      verify: { status: "verified", note: "Read the W3C's WCAG-EM document again this session for the five steps in order, the refusal to set a fixed sample size, the factors affecting it, the structured sampling requirement and the rule that the random sample set is 10 per cent of the structured sample set, worked through with the document's own example of 80 structured items plus 8 random ones. The version I read is published as a W3C Group Note dated 23 July 2026 and is titled WCAG Evaluation Methodology (WCAG-EM) 2.0. An earlier draft expanded the acronym using the older 1.0 title, Website Accessibility Conformance Evaluation Methodology, which no longer matches the document being cited." },
      belongs: { verdict: "core", why: "Accessibility is a legal requirement in much commercial work, and this is the published method for checking it rather than asserting it." },
      related: [969, 971, 979]
    },
    {
      n: 976,
      title: "A/B testing and its limits",
      aka: ["Online controlled experiments", "Split testing"],
      oneLine: "Randomly split users between variants and let a metric decide, while knowing what the method cannot see.",
      demo: {
        caption: "Watch the early spike. Stopping at the first crossing ships a difference that the full sample shows is nothing.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 380 148\"><path class=\"s-mute\" d=\"M30 45 H350\" stroke-dasharray=\"4 4\"/><path class=\"s-mute\" d=\"M30 105 H350\"/><text class=\"t\" x=\"350\" y=\"40\" text-anchor=\"end\">looks like a win</text><text class=\"t\" x=\"30\" y=\"118\">no difference</text><path class=\"s-accent\" d=\"M30 90 L55 42 L80 30 L105 52 L130 70 L160 88 L190 96 L220 101 L250 104 L280 105 L310 105 L350 105\"/><circle class=\"f-accent\" cx=\"80\" cy=\"30\" r=\"4.5\"/><text class=\"t\" x=\"88\" y=\"27\">stopped here</text><circle class=\"f\" cx=\"350\" cy=\"105\" r=\"4.5\"/><text class=\"t\" x=\"344\" y=\"118\" text-anchor=\"end\">full sample</text><text class=\"t\" x=\"190\" y=\"138\" text-anchor=\"middle\">sample size grows</text></svg></div>"
      },
      what: "Users are randomly assigned to variants and a pre-chosen metric decides the winner. The number every designer should know is the failure rate: Kohavi, Crook and Longbotham, in Online Experimentation at Microsoft (2009), write that only about one third of ideas improve the metrics they were designed to improve. The limits are structural. A test can only compare things you built, so it never tells you about the option nobody drew. It needs traffic. It favours short-term metrics. And it will hand you a significant-looking result if you stop as soon as the numbers look good.",
      why: "Run properly it is the only method that measures effect on real behaviour at scale. Held loosely it manufactures confidence in whatever you already wanted to do.",
      how: [
        "Fix the sample size and the stopping point before the test starts, and stick to them.",
        "Change one thing at a time, or use a design that can separate the effects.",
        "Agree guardrail metrics up front, so a win on one number cannot hide a loss on another.",
        "Use it to choose between designed options, not as a substitute for designing them."
      ],
      example: "The one-third figure is repeated across Kohavi's published work, including Trustworthy Online Controlled Experiments (2020), and it is the strongest available argument for testing rather than shipping on conviction.",
      numbers: "About one third of tested ideas at Microsoft improved their target metric (Kohavi, Crook and Longbotham, 2009).",
      pitfall: "Peeking at the results and stopping the moment the variant is ahead. A close second is testing trivia: a button colour test is cheap, so it gets run instead of the question that matters.",
      source: "Ronny Kohavi, Thomas Crook and Roger Longbotham, Online Experimentation at Microsoft (2009); repeated in Kohavi, Tang and Xu, Trustworthy Online Controlled Experiments (2020).",
      verify: { status: "verified", note: "I read the 2009 paper itself this session, at robotics.stanford.edu/~ronnyk/ExPThinkWeek2009Public.pdf, which says in terms: 'only about 1/3 of ideas improve the metrics they were designed to improve', and again that of well-designed experiments aimed at a key metric 'only about one-third were successful at improving the key metric'. The word about matters and has been restored to the entry text. The byline on that PDF reads Ronny Kohavi, Thomas Crook and Roger Longbotham among seven authors; an earlier draft gave the second author a wrong first name, and the source line now matches the paper. The remaining limits listed here are standard descriptions of the method rather than claims traced to a named source." },
      belongs: { verdict: "adjacent", why: "It is applied statistics. Its design relevance is direct and uncomfortable: it is the best evidence we have that most design changes do not move the number they were meant to move." },
      related: [968, 977, 978]
    },
    {
      n: 977,
      title: "Analytics as design input",
      aka: ["Behavioural data", "Product analytics"],
      oneLine: "Live behavioural data tells you how many and where, never why, and is best used to aim research.",
      demo: {
        caption: "The bars locate the drop at step three. Only the panel beside them shows what is actually in step three.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Analytics: how many, where</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">1 search</span><div class=\"db-bar db-bar--ink\" style=\"width:100%\"></div><span class=\"db-note\">2 choose a time</span><div class=\"db-bar db-bar--ink\" style=\"width:82%\"></div><span class=\"db-note\">3 your details</span><div class=\"db-bar db-bar--accent\" style=\"width:31%\"></div><span class=\"db-note\">4 confirm</span><div class=\"db-bar db-bar--accent\" style=\"width:28%\"></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">One session: why</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">3 your details</span><span class=\"db-input\">Name</span><span class=\"db-input db-input--error\">NHS number (required)</span><span class=\"db-note\">nobody has one to hand at the bus stop</span></div></div></div></div></div>"
      },
      what: "Analytics covers what people land on, where they stop, what they search for, which devices they use and which errors they hit. It is continuous, cheap and covers everybody rather than the eight people you interviewed. It cannot tell you a reason. Its best use in design is triage: pointing you at the screen that deserves a research session.",
      why: "It is the only always-on signal you have, and it is the fastest way to find out that the page you were about to redesign gets four visits a week.",
      how: [
        "Start from a question, not from the dashboard.",
        "Instrument the failures: validation errors, empty search results, abandoned steps, rage clicks.",
        "Look at distributions, not averages; the average hides the users you are losing.",
        "Pair every finding with a qualitative method before you act on it.",
        "Write down which goal each metric serves, or you will end up reporting whatever the tool produces."
      ],
      example: "A high exit rate on step three of a booking flow tells you where to test. Ten minutes of moderated testing on step three tells you why people leave.",
      numbers: "",
      pitfall: "Optimising the number you can see. Time on page rises both when content is engaging and when it is confusing, and the tool cannot tell you which.",
      source: "No single origin. The discipline of tracing metrics back to stated goals is set out in Rodden, Hutchinson and Fu's HEART paper (CHI 2010).",
      verify: { status: "verified", note: "The goals-to-metrics discipline is verified against Google Research's record of the CHI 2010 HEART paper, which describes a process for mapping product goals to metrics. The rest of this entry is standard practice rather than a cited claim, and I have kept it free of invented figures." },
      belongs: { verdict: "adjacent", why: "It is product measurement rather than a design method. The specific design use is triage: it tells you which screen or step is worth spending research time on." },
      related: [976, 978, 981]
    },
    {
      n: 978,
      title: "HEART framework",
      aka: ["Happiness, Engagement, Adoption, Retention, Task success", "Goals-Signals-Metrics"],
      oneLine: "Five categories of user-centred metric, plus a process for deriving each metric from a stated goal.",
      demo: {
        caption: "Both columns end at a number. Only the right one can say which goal the number was chosen to serve.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Started at the dashboard</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><span class=\"db-label\">Goal</span><span class=\"db-note\">not stated</span></div><span class=\"db-row db-row--centre\"><span class=\"db-arrow\">&#8595;</span></span><div class=\"db-card\"><span class=\"db-label\">Signal</span><span class=\"db-note\">not stated</span></div><span class=\"db-row db-row--centre\"><span class=\"db-arrow\">&#8595;</span></span><div class=\"db-card\"><span class=\"db-label\">Metric</span><span class=\"db-type db-type--mono\">time on page</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Goals, signals, metrics</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><span class=\"db-label\">Goal</span><span class=\"db-type\">People book without ringing the practice.</span></div><span class=\"db-row db-row--centre\"><span class=\"db-arrow\">&#8595;</span></span><div class=\"db-card\"><span class=\"db-label\">Signal</span><span class=\"db-type\">A booking finished with no call in the next hour.</span></div><span class=\"db-row db-row--centre\"><span class=\"db-arrow\">&#8595;</span></span><div class=\"db-card\"><span class=\"db-label\">Metric</span><span class=\"db-type db-type--mono\">bookings finished / bookings started</span></div></div></div></div></div>"
      },
      what: "Kerry Rodden, Hilary Hutchinson and Xin Fu published HEART at CHI 2010 in a paper called Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications. The letters stand for Happiness, Engagement, Adoption, Retention and Task success. The paper also gives the process that makes the categories work: map goals to signals to metrics, so every number can be traced back to something the team said it wanted.",
      why: "It stops metric selection being a list of whatever the analytics tool happens to output. Each category also forces a question teams otherwise skip, such as whether new users ever come back.",
      how: [
        "Write the goal first, then the observable signal, then the metric. Never the other way round.",
        "Use only the categories your goal needs; five metrics for a small feature is theatre.",
        "Pair a task-success metric with a happiness one, so speed does not get optimised at the cost of the experience.",
        "Report ratios rather than raw counts, so overall growth does not flatter a failing feature."
      ],
      example: "The paper reports that HEART metrics helped Google product teams make decisions that were both data-driven and user-centred. On transfer it claims less than it is often credited with: the authors say the framework generalised across enough of their own company's products that they are confident teams elsewhere can reuse or adapt it.",
      numbers: "Five metric categories; three steps in the goals, signals, metrics process.",
      pitfall: "Adopting the acronym and skipping goals-signals-metrics, which is the part that does the actual work.",
      source: "Kerry Rodden, Hilary Hutchinson and Xin Fu, CHI 2010 (Google).",
      verify: { status: "verified", note: "Checked Google Research's publication record for the paper: authors, CHI 2010 venue, the HEART categories and the goals-to-metrics process described in the abstract. The abstract says the framework and process 'have generalized to enough of our company's own products that we are confident that teams in other organizations will be able to reuse or adapt them', so the entry no longer states that transfer to other organisations happened." },
      belongs: { verdict: "adjacent", why: "It is a product measurement framework rather than a design principle. Designers need it because it is the standard way to state, in advance, what a redesign is supposed to change." },
      related: [976, 977, 981]
    },
    {
      n: 979,
      title: "Design QA and handoff",
      aka: ["Design review of the build", "Implementation QA"],
      oneLine: "Packaging a design so it can be built correctly, then checking the built version against it.",
      demo: {
        caption: "One card was signed off. These are the states the same component meets in the build, long name included.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Handed over</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\">Whitening consultation</span><div class=\"db-lines\"><i></i><i></i></div><span class=\"db-row\"><span class=\"db-btn db-btn--sm\">Book</span></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Met by the build</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i><i></i></div></div><div class=\"db-card\"><span class=\"db-note\">no appointments this week</span></div><div class=\"db-card\"><span class=\"db-input db-input--error\">that slot has gone</span></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\">Composite bonding and enamel reshaping consultation with the hygienist</span><span class=\"db-row\"><span class=\"db-btn db-btn--sm\">Book</span></span></div></div></div></div></div></div>"
      },
      what: "Handoff is the package: specifications, every state, tokens, assets, copy and behaviour. Design QA is the check afterwards, done in the browser, on real devices, at the sizes and settings people actually use. Neither has a canonical source; both are trade practice. What makes them work is having written the states down before the build rather than discovering them during it.",
      why: "Almost every visible defect a user meets was introduced between the design file and the build. Reviewing the built thing is where you catch it, and it is cheaper than any of the alternatives.",
      how: [
        "Hand over states, not screens: loading, empty, error, over-long content, no permission, offline.",
        "Write down what a static file cannot show, such as focus order, what happens on submit and what the back button does.",
        "Review at 320 pixels wide, at 200 per cent zoom and with the keyboard only.",
        "Log defects against the specification with a screenshot and the rule broken, not as opinions.",
        "Run it before the client sees it, not after."
      ],
      example: "A card component signed off with three lines of text breaks with a nine-word product name. Only the build review catches it, because the design file only ever contained the tidy example.",
      numbers: "",
      pitfall: "Handing over a pretty file and calling it a specification. A close second is QA done only by the designer, at desktop size, on the machine the design was made on.",
      source: "Origin unclear; trade practice.",
      verify: { status: "unverified", note: "I looked for a named source or standard for design QA and handoff and found none, so this entry is written from practice rather than from a citation and claims no author. The nearest formal anchors are the accessibility criteria in entry 975 and the acceptance criteria in entry 959, both of which are sourced." },
      belongs: { verdict: "core", why: "The design that ships is the only one users meet, so checking the built version is part of designing it rather than an optional extra." },
      related: [955, 959, 975, 984]
    },
    {
      n: 980,
      title: "Decision records",
      aka: ["Architecture decision records", "ADR"],
      oneLine: "One short document per decision, recording the context, the choice, its status and its consequences.",
      demo: {
        caption: "One decision, five headings, under a page. The status line is what keeps the older record readable rather than deleted.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Title</span><span class=\"db-type\">0014: one blue for every link</span><span class=\"db-label\">Context</span><span class=\"db-type\">Four blues are in use and none of them passes contrast on grey.</span><span class=\"db-label\">Decision</span><span class=\"db-type\">We will keep one link blue and delete the other three.</span><span class=\"db-label\">Status</span><span class=\"db-type db-type--mono\">accepted, supersedes 0007</span><span class=\"db-label\">Consequences</span><span class=\"db-type\">Two campaign pages change colour; the old values stay in the register.</span></div></div><span class=\"db-note\">0007 is not deleted, only marked superseded, so the reasoning survives</span></div></div>"
      },
      what: "Michael Nygard published the format on 15 November 2011. Each record has five parts: title, context, decision, status and consequences. The context is written in neutral language, the decision in active voice starting 'We will', and the status says whether it is proposed, accepted, deprecated or superseded. His argument for keeping them short is direct: 'Large documents are never kept up to date. Small, modular documents have at least a chance at being updated.' He adds that the whole document should be one or two pages long.",
      why: "Six months on, nobody remembers why the navigation has seven items or why the brand blue was darkened. Without the record the team either reverses a good decision or defends a bad one out of habit.",
      how: [
        "Write one record per decision, at the time, in under a page.",
        "Record what you rejected and why; that is the part people need later.",
        "Keep them versioned alongside the project, not in a chat thread.",
        "Mark records superseded rather than deleting them, so the history stays readable."
      ],
      example: "Nygard's original post is the template most teams still copy, five headings and all, and the post itself is written as an example of the format.",
      numbers: "Five sections: title, context, decision, status, consequences.",
      pitfall: "Writing them retrospectively in a batch. Reconstructed context is the team's current opinion wearing an old date.",
      source: "Michael Nygard, Documenting Architecture Decisions (15 November 2011).",
      verify: { status: "verified", note: "Read Nygard's original post on Cognitect's blog, dated 15 November 2011: the five sections with their guidance, the active-voice convention, the four statuses and the one-or-two-page limit. The quotation about large documents was truncated in an earlier draft of this entry and has been restored to his exact words." },
      belongs: { verdict: "adjacent", why: "It comes from software architecture. It transfers cleanly because design decisions have exactly the same failure: the artefact survives and the reasoning does not." },
      related: [944, 967, 984]
    },
    {
      n: 981,
      title: "Post-launch review",
      aka: ["Retrospective", "Project review"],
      oneLine: "A session after the work ships, examining what happened and converting it into changes for next time.",
      demo: {
        caption: "Twenty lines of notes, none of them owned. Three actions on the right, each with a name and a date.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">What the room produced</span><div class=\"db-stage db-stage--tight\"><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">What leaves the room</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\">Book research a cycle ahead of design</span><span class=\"db-note db-note--accent\">Ana, before the next kickoff</span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\">Add the long-name case to the card spec</span><span class=\"db-note db-note--accent\">Sam, this week</span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\">One named client contact signs off copy</span><span class=\"db-note db-note--accent\">Priya, at contract stage</span></div></div></div></div></div></div>"
      },
      what: "Norman Kerth's Project Retrospectives: A Handbook for Team Reviews (2001) is the standard reference and the source of the Prime Directive, the statement read at the start of a review to establish that everyone did the best job they could with what they knew at the time. The other half of a post-launch review is the product: did the thing you designed do what the brief said it would.",
      why: "Lessons from a launch have a short shelf life. A review turns them into a change in how the next project runs, rather than a story people repeat in the pub.",
      how: [
        "Book the date before launch, or it will never happen.",
        "Check the numbers you promised in the brief, not only how the project felt.",
        "Review the process and the product in separate passes.",
        "Leave with two or three changes with named owners, not twenty observations."
      ],
      example: "Kerth's Prime Directive is read aloud at the start of the session precisely to stop it becoming an inquiry into who caused what.",
      numbers: "",
      pitfall: "Reviews whose actions have no owner produce the same list next time, word for word.",
      source: "Norman L. Kerth, Project Retrospectives: A Handbook for Team Reviews (2001).",
      verify: { status: "verified", note: "Confirmed Kerth's 2001 book and its Prime Directive chapter through the O'Reilly listing and two independent descriptions of the Directive. Wordings of the Directive in circulation differ slightly, so I have paraphrased rather than quoted it." },
      belongs: { verdict: "adjacent", why: "It comes from software project management. The design use is specific: it is where you check whether the thing you designed did what the brief claimed it would." },
      related: [944, 980, 982]
    },
    {
      n: 982,
      title: "Iteration cadence",
      aka: ["Sprint rhythm", "Time-boxing"],
      oneLine: "A fixed rhythm for shipping and reviewing, with scope varying and the dates held still.",
      demo: {
        caption: "Same eight weeks on both lanes. The top holds the workload and misses every date; the bottom holds the dates.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 400 162\"><path class=\"s-mute\" d=\"M110 20 V132 M200 20 V132 M290 20 V132 M380 20 V132\" stroke-dasharray=\"3 4\"/><text class=\"t\" x=\"20\" y=\"18\">scope held, dates move</text><path class=\"s\" d=\"M20 26 h95 v26 h-95 Z M115 26 h105 v26 h-105 Z M220 26 h120 v26 h-120 Z\"/><circle class=\"f-mute\" cx=\"36\" cy=\"39\" r=\"3\"/><circle class=\"f-mute\" cx=\"58\" cy=\"39\" r=\"3\"/><circle class=\"f-mute\" cx=\"80\" cy=\"39\" r=\"3\"/><circle class=\"f-mute\" cx=\"102\" cy=\"39\" r=\"3\"/><circle class=\"f-mute\" cx=\"133\" cy=\"39\" r=\"3\"/><circle class=\"f-mute\" cx=\"158\" cy=\"39\" r=\"3\"/><circle class=\"f-mute\" cx=\"183\" cy=\"39\" r=\"3\"/><circle class=\"f-mute\" cx=\"208\" cy=\"39\" r=\"3\"/><circle class=\"f-mute\" cx=\"240\" cy=\"39\" r=\"3\"/><circle class=\"f-mute\" cx=\"270\" cy=\"39\" r=\"3\"/><circle class=\"f-mute\" cx=\"300\" cy=\"39\" r=\"3\"/><circle class=\"f-mute\" cx=\"330\" cy=\"39\" r=\"3\"/><text class=\"t\" x=\"20\" y=\"72\">dates held, scope varies</text><path class=\"s\" d=\"M20 80 h90 v26 h-90 Z M110 80 h90 v26 h-90 Z M200 80 h90 v26 h-90 Z M290 80 h90 v26 h-90 Z\"/><circle class=\"f-mute\" cx=\"36\" cy=\"93\" r=\"3\"/><circle class=\"f-mute\" cx=\"56\" cy=\"93\" r=\"3\"/><circle class=\"f-mute\" cx=\"76\" cy=\"93\" r=\"3\"/><circle class=\"f-mute\" cx=\"96\" cy=\"93\" r=\"3\"/><circle class=\"f-mute\" cx=\"143\" cy=\"93\" r=\"3\"/><circle class=\"f-mute\" cx=\"168\" cy=\"93\" r=\"3\"/><circle class=\"f-mute\" cx=\"215\" cy=\"93\" r=\"3\"/><circle class=\"f-mute\" cx=\"230\" cy=\"93\" r=\"3\"/><circle class=\"f-mute\" cx=\"245\" cy=\"93\" r=\"3\"/><circle class=\"f-mute\" cx=\"260\" cy=\"93\" r=\"3\"/><circle class=\"f-mute\" cx=\"275\" cy=\"93\" r=\"3\"/><circle class=\"f-mute\" cx=\"308\" cy=\"93\" r=\"3\"/><circle class=\"f-mute\" cx=\"335\" cy=\"93\" r=\"3\"/><circle class=\"f-mute\" cx=\"362\" cy=\"93\" r=\"3\"/><path class=\"s-mute\" d=\"M20 132 H380 M20 132 V137 M110 132 V137 M200 132 V137 M290 132 V137 M380 132 V137\"/><text class=\"t\" x=\"110\" y=\"150\" text-anchor=\"middle\">wk 2</text><text class=\"t\" x=\"200\" y=\"150\" text-anchor=\"middle\">wk 4</text><text class=\"t\" x=\"290\" y=\"150\" text-anchor=\"middle\">wk 6</text><text class=\"t\" x=\"380\" y=\"150\" text-anchor=\"end\">wk 8</text></svg></div>"
      },
      what: "Scrum is the version most designers will work inside. The 2020 Scrum Guide by Ken Schwaber and Jeff Sutherland defines Sprints as 'fixed length events of one month or less to create consistency', with a new Sprint starting immediately after the previous one ends. It states that shorter Sprints 'can be employed to generate more learning cycles and limit risk of cost and effort to a smaller time frame', and warns that when a Sprint's horizon is too long the goal may become invalid and risk rises.",
      why: "A cadence forces decisions to a date, which is what stops design work expanding to fill whatever time is available. It also creates a repeating slot for research and critique that nobody has to negotiate for every time.",
      how: [
        "Hold the rhythm and vary the scope, never the other way round.",
        "Keep design at least one cycle ahead of build, and research a cycle ahead of design.",
        "Put critique and design QA in the recurring calendar rather than relying on someone remembering.",
        "Shorten the cycle when uncertainty is high and lengthen it when the work is well understood."
      ],
      example: "The Scrum Guide's own justification is worth quoting to a client who wants a six-month design phase: a long horizon means the goal 'may become invalid, complexity may rise, and risk may increase'.",
      numbers: "Scrum Sprints are fixed length, one month or less, with no gap between them.",
      pitfall: "Design squeezed into the same cycle as the build it is meant to feed, so every cycle starts with an unresearched decision made under time pressure.",
      source: "Ken Schwaber and Jeff Sutherland, The Scrum Guide (2020).",
      verify: { status: "verified", note: "Read the 2020 Scrum Guide this session for the one-month maximum, the fixed-length wording, the immediate start of the next Sprint, the rationale for shorter Sprints and the warning about long horizons. All quoted phrases are from that document." },
      belongs: { verdict: "adjacent", why: "It comes from software delivery management. Designers need it because the cadence decides how much time any decision gets and whether research can realistically land before the build." },
      related: [959, 981, 983]
    },
    {
      n: 983,
      title: "Kill criteria",
      aka: ["States and dates", "Stopping conditions"],
      oneLine: "Conditions agreed in advance that say when to stop, written while you can still think clearly.",
      demo: {
        caption: "Two projects, one rule. At the agreed date, whichever line sits below the agreed state stops, however it feels.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 162\"><path class=\"s-mute\" d=\"M40 20 V130 M40 130 H340\"/><path class=\"s-mute\" d=\"M40 60 H340\" stroke-dasharray=\"4 4\"/><text class=\"t\" x=\"44\" y=\"54\">state: 3 of 10 book unaided</text><path class=\"s-mute\" d=\"M250 20 V130\" stroke-dasharray=\"4 4\"/><text class=\"t\" x=\"254\" y=\"28\">the agreed date</text><path class=\"s-mute\" d=\"M40 126 C 110 100, 180 66, 250 44 L330 34\"/><circle class=\"f-mute\" cx=\"250\" cy=\"44\" r=\"4\"/><text class=\"t\" x=\"256\" y=\"58\">carries on</text><path class=\"s-accent\" d=\"M40 126 C 110 118, 180 100, 250 92\"/><path class=\"s-accent\" d=\"M244 86 L256 98 M256 86 L244 98\"/><text class=\"t\" x=\"256\" y=\"106\">stops</text><text class=\"t\" x=\"40\" y=\"14\">state reached</text><text class=\"t\" x=\"340\" y=\"146\" text-anchor=\"end\">time</text></svg></div>"
      },
      what: "Annie Duke sets kill criteria out in Quit (2022) as a pairing of states and dates: if by this date we have not reached this state, we stop. The point is to make the stopping decision before you are emotionally and financially committed, because by the time a project is failing, the sunk cost argues for continuing on its own behalf.",
      why: "Design projects rarely get killed; they get quietly starved. Written criteria give the team permission to stop and give the client a decision point instead of an awkward conversation nobody starts.",
      how: [
        "Put the kill criteria in the brief, with a date and a state you can measure.",
        "Choose criteria you would genuinely accept losing on, not ones you are certain to pass.",
        "Give the call to somebody who is not doing the work.",
        "Record the outcome as a decision record so the reasoning survives the project."
      ],
      example: "A concept test with a stated criterion: if fewer than three of ten participants complete the booking unaided by the end of the month, the concept is dropped rather than refined.",
      numbers: "",
      pitfall: "Criteria that get renegotiated at the exact moment they bite. If they can be moved, they were never criteria.",
      source: "Annie Duke, Quit: The Power of Knowing When to Walk Away (2022).",
      verify: { status: "verified", note: "Duke's kill criteria and the states-and-dates formulation are described consistently in two independent summaries of Quit (2022) that I read this session. I have not read the book itself, so I have not quoted from it and have attributed only the concept." },
      belongs: { verdict: "adjacent", why: "It is decision science rather than design. It applies directly because concept work has no natural end point and will otherwise be stopped by a budget running out rather than by evidence." },
      related: [944, 976, 980]
    },
    {
      n: 984,
      title: "Design debt",
      aka: ["Interface debt", "UX debt"],
      oneLine: "The accumulated cost of design shortcuts, borrowed knowingly and repaid with interest later.",
      demo: {
        caption: "Eleven ways to say Save, each reasonable on the day it was added. The right-hand set is what a newcomer learns.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Eleven ways to save</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Save</span><span class=\"db-btn\" style=\"border-radius:999px\">Save</span><span class=\"db-btn db-btn--ghost\">Save</span><span class=\"db-btn db-btn--ghost db-btn--sm\" style=\"border-radius:999px\">Save</span><span class=\"db-btn db-btn--quiet\">Save</span><span class=\"db-btn\" style=\"border-radius:0\">Save</span><span class=\"db-btn db-btn--lg\">Save</span><span class=\"db-btn db-btn--sm\" style=\"text-transform:uppercase\">Save</span><span class=\"db-btn db-btn--ghost\" style=\"border-radius:0\">Save</span><span class=\"db-btn\" style=\"letter-spacing:0.18em\">Save</span><span class=\"db-btn db-btn--quiet db-btn--sm\" style=\"text-transform:uppercase\">Save</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three, each with a job</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Save</span><span class=\"db-btn db-btn--ghost\">Cancel</span><span class=\"db-btn db-btn--quiet\">Skip</span></div></div></div></div>"
      },
      what: "Design debt is the pile of near-matching components, the four greys where one would do, and the three patterns solving the same problem. The metaphor comes from technical debt, coined by Ward Cunningham at OOPSLA in 1992 in the experience report on the WyCash portfolio management system. Cunningham's own restatement is that shipping something which does not match your current understanding of the problem means you keep stumbling over the mismatch, which slows you down like interest on a loan. Design debt is listed alongside code debt as an accepted variant of the term.",
      why: "Debt is not the same as bad work. It is a decision to move faster now and pay later, and naming it lets a team decide whether the interest is worth paying.",
      how: [
        "Keep a written list of the shortcuts and why they were taken, rather than pretending they were decisions.",
        "Pay it down in the area you are already working in, not as a separate clean-up project nobody funds.",
        "Audit for duplicates: colours, spacing values, button variants, icon styles.",
        "Refuse a new variant without deleting an old one once the system is crowded."
      ],
      example: "A product with eleven button styles never chose eleven. Each one was a reasonable shortcut under a deadline, and the eleventh is what a new designer now has to learn.",
      numbers: "",
      pitfall: "Calling everything you dislike debt. The word only earns its keep when it describes a shortcut that was knowingly taken and can be costed.",
      source: "Ward Cunningham, technical debt (OOPSLA, 1992); design debt is a recognised variant of that term.",
      verify: { status: "verified", note: "Checked Wikipedia's technical debt entry for Cunningham's 1992 OOPSLA coinage, the WyCash context, his 2009 restatement of the metaphor and the listing of design debt as an alternative term. I found no separate originator for design debt itself and have not invented one." },
      belongs: { verdict: "adjacent", why: "Borrowed from software engineering. The design use is exact: it is the standard argument for buying time to tidy a design system before adding anything else to it." },
      related: [979, 980, 982]
    }
  ]
};
