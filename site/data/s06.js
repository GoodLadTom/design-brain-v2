window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[6] = {
  n: 6,
  slug: "named-laws",
  title: "Named laws and effects used in design",
  blurb: "The named rules designers quote in meetings, checked against the papers they actually come from.",
  intro: "Designers borrow laws. Some come from experimental psychology, some from network engineering, some from a satirical essay about the British civil service, and a few are aphorisms that stuck because they sound like laws. This section names the origin of each one and says plainly where the popular version has drifted from what the source claims. Several well-known effects here rest on research that has since been challenged, and those are marked as disputed rather than quietly repeated.",
  sources: [
    "W. E. Hick, On the Rate of Gain of Information, Quarterly Journal of Experimental Psychology (1952)",
    "Paul M. Fitts, The Information Capacity of the Human Motor System in Controlling the Amplitude of Movement, Journal of Experimental Psychology (1954)",
    "Johnny Accot and Shumin Zhai, Beyond Fitts' Law: Models for Trajectory-Based HCI Tasks, CHI (1997)",
    "George A. Miller, The Magical Number Seven, Plus or Minus Two, Psychological Review (1956)",
    "Nelson Cowan, The Magical Number 4 in Short-Term Memory, Behavioral and Brain Sciences (2001)",
    "Jakob Nielsen, Usability Engineering (1993), and the Nielsen Norman Group article archive",
    "Jon Postel (ed.), RFC 761 (1980); IETF RFC 9413, Maintaining Robust Protocols (2023)",
    "Robert B. Cialdini, Influence: The Psychology of Persuasion (1984)",
    "Daniel Kahneman and Amos Tversky, Prospect Theory, Econometrica (1979), and Judgment under Uncertainty, Science (1974)",
    "Noriaki Kano, Nobuhiko Seraku, Fumio Takahashi and Shin-ichi Tsuji, Attractive Quality and Must-Be Quality, Journal of the Japanese Society for Quality Control (1984)",
    "Melvin E. Conway, How Do Committees Invent?, Datamation (1968)",
    "John Gall, General Systemantics (1975)",
    "C. Northcote Parkinson, Parkinson's Law, and Other Studies in Administration (1957)",
    "Jon Yablonski, Laws of UX (2020)"
  ],
  entries: [
    {
      n: 226,
      title: "Hick-Hyman law",
      aka: ["Hick's law"],
      oneLine: "Decision time rises with the logarithm of the number of equally likely, well-learned options.",
      demo: {
        caption: "Both lines start at the same cost per option. The measured curve flattens: the tenth option costs far less than the first.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 148\"><text class=\"t\" x=\"2\" y=\"11\">decision time</text><path class=\"s-mute\" d=\"M30 16 V120 H314\"/><path class=\"s-mute\" d=\"M30 118 L111 18\" stroke-dasharray=\"4 3\"/><text class=\"t\" x=\"115\" y=\"22\">if every option cost the same</text><path class=\"s-accent\" d=\"M30 118 L47.5 96.5 L65 83.9 L82.5 75 L100 68 L117.5 62.3 L135 57.6 L152.5 53.4 L170 49.8 L187.5 46.5 L205 43.6 L222.5 40.8 L240 38.4 L257.5 36 L275 33.9 L292.5 31.9 L310 30.1\"/><text class=\"t\" x=\"248\" y=\"48\">measured</text><path class=\"s-mute\" d=\"M100 120 V124 M170 120 V124 M310 120 V124\"/><text class=\"t\" x=\"97\" y=\"136\">4</text><text class=\"t\" x=\"167\" y=\"136\">8</text><text class=\"t\" x=\"303\" y=\"136\">16</text><text class=\"t\" x=\"196\" y=\"136\">options</text></svg></div>"
      },
      what: "W. E. Hick (1952) and Ray Hyman (1953) found that the time to pick one of n signals grows with the logarithm of n, not with n itself. Doubling the options adds a roughly constant slice of time rather than doubling the wait. Hick used ten lamps and Morse keys; Hyman varied how predictable each signal was and got the same relationship against information content. Both were describing a practised person choosing among options they already knew.",
      why: "The cost of one more choice is real but sub-linear, so ten options are nowhere near five times worse than two. The win comes from cutting whole categories rather than shaving single items, which is why grouping and staging beat trimming for its own sake.",
      how: [
        "Group long option lists into labelled categories so each decision is made against a handful of items.",
        "Stage the decision: ask one question at a time in a checkout or filter panel instead of showing every control at once.",
        "Mark a recommended or most-used option so the practised path stays short.",
        "Do not use the law as cover for hiding functions people need. Move them, do not delete them."
      ],
      example: "The GOV.UK service pattern of one thing per page, which splits a long application into single-question screens rather than one long form.",
      numbers: "Reaction time = a + b log2(n + 1), where n is the number of equally likely alternatives (Hick 1952, Hyman 1953).",
      pitfall: "The popular UX version gets applied to unfamiliar menus, where the person is reading and searching rather than choosing among keys they already know. Search time scales differently, so the law over-promises.",
      source: "W. E. Hick, 'On the Rate of Gain of Information', Quarterly Journal of Experimental Psychology (1952); Ray Hyman, 'Stimulus Information as a Determinant of Reaction Time', Journal of Experimental Psychology (1953).",
      verify: { status: "disputed", note: "Both original papers confirmed. Proctor and Schneider, 'Hick's law for choice reaction time: A review', Quarterly Journal of Experimental Psychology 71 (2018), describes the apparatus of Hick's first experiment: ten lamps set in a small irregular circle, arranged that way to limit eye movements, with the ten fingers resting on keys. Hick was his own sole subject in that experiment. The law replicates well in its own domain. What is contested is the design extrapolation to scanning unfamiliar menus, a visual search task the original experiments did not test." },
      belongs: { verdict: "core", why: "Option count is a decision designers make every week, and this is the citation that says how the cost actually scales." },
      related: [229, 230, 234]
    },
    {
      n: 227,
      title: "Fitts's law",
      aka: [],
      oneLine: "Time to hit a target grows with distance and shrinks with target size.",
      demo: {
        caption: "Top target is far and narrow, bottom is near and wide. The bars beneath show the movement time each one costs.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 142\"><circle class=\"f-mute\" cx=\"18\" cy=\"30\" r=\"5\"/><path class=\"s-mute\" d=\"M26 30 H272\"/><path class=\"s-mute\" d=\"M266 26 L272 30 L266 34\"/><rect class=\"f-accent\" x=\"276\" y=\"13\" width=\"8\" height=\"34\"/><text class=\"t\" x=\"142\" y=\"24\">A</text><text class=\"t\" x=\"289\" y=\"11\">W</text><rect class=\"f-mute\" x=\"18\" y=\"52\" width=\"252\" height=\"6\"/><text class=\"t\" x=\"276\" y=\"58\">slow</text><circle class=\"f-mute\" cx=\"18\" cy=\"96\" r=\"5\"/><path class=\"s-mute\" d=\"M26 96 H112\"/><path class=\"s-mute\" d=\"M106 92 L112 96 L106 100\"/><rect class=\"f-accent\" x=\"116\" y=\"79\" width=\"44\" height=\"34\"/><text class=\"t\" x=\"64\" y=\"90\">A</text><text class=\"t\" x=\"134\" y=\"74\">W</text><rect class=\"f-mute\" x=\"18\" y=\"118\" width=\"100\" height=\"6\"/><text class=\"t\" x=\"124\" y=\"124\">fast</text><text class=\"t\" x=\"18\" y=\"138\">A: distance</text><text class=\"t\" x=\"110\" y=\"138\">W: target width</text><text class=\"t\" x=\"208\" y=\"138\">bars: movement time</text></svg></div>"
      },
      what: "Paul Fitts (1954) had people tap between two targets as fast as they could without missing. Movement time rose linearly with an index of difficulty set by the distance between the targets and their width. Small, distant targets are slow and error-prone; large, close ones are fast. The relationship has since been shown to hold for mice, fingers, styluses and gaze pointing.",
      why: "It turns target size and placement from taste into arithmetic. It also explains why screen edges and corners are the quickest places to hit on a desktop: the pointer stops dead at the edge, so the target is effectively infinitely deep.",
      how: [
        "Make the clickable area larger than the visible control by padding the hit area rather than growing the icon.",
        "Put frequent actions near where the pointer or thumb already is.",
        "Use screen edges and corners for high-frequency targets on pointer devices.",
        "Keep destructive actions off the path to common ones so a slip does not delete something."
      ],
      example: "The macOS menu bar sits flush against the top edge of the screen, so the pointer cannot overshoot it. A menu bar inside a window, a few pixels down from the edge, loses that advantage.",
      numbers: "Fitts's original index of difficulty: ID = log2(2A/W), with A the distance and W the target width. The Shannon form used in HCI, ID = log2(A/W + 1), is the one behind the throughput figure in ISO 9241-411.",
      pitfall: "Sizing to the visible box instead of the hit area. A 16-pixel icon with no padding is a 16-pixel target however large the card around it looks.",
      source: "Paul M. Fitts, 'The Information Capacity of the Human Motor System in Controlling the Amplitude of Movement', Journal of Experimental Psychology 47 (1954).",
      verify: { status: "verified", note: "Original paper and equation confirmed. An earlier draft credited Fitts and Peterson (1964) with a range of 9.5 to 11.5 bits per second for the 1954 results. That range is in neither paper and has been removed. The commonly quoted 'about 10 bits per second' is Fitts's own index of performance for the 1954 tapping task, reported as a mean of 10.10 bits per second in I. Scott MacKenzie's reanalysis of that data. The Shannon reformulation checked against MacKenzie, 'A Note on the Information-Theoretic Basis for Fitts' Law', Journal of Motor Behavior (1989), and its use in ISO 9241-411 throughput confirmed in the pointing-device literature." },
      belongs: { verdict: "core", why: "Target size, spacing and placement are design decisions on every screen, and this is the model that predicts their cost." },
      related: [228, 587, 700]
    },
    {
      n: 228,
      title: "Steering law",
      aka: ["Accot-Zhai steering law"],
      oneLine: "Moving through a corridor takes longer the longer and narrower the corridor is.",
      demo: {
        caption: "The same wobble in both. The narrow corridor cannot contain it, so the pointer leaves the path and the menu shuts.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Wide corridor</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 90\"><path class=\"s-mute\" d=\"M10 28 H180 M10 62 H180\"/><path class=\"s-accent\" d=\"M10 45 Q50 26 90 46 Q130 62 170 45\"/><circle class=\"f-accent\" cx=\"170\" cy=\"45\" r=\"4\"/><text class=\"t\" x=\"10\" y=\"82\">W = 34, path stays in</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Narrow corridor</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 90\"><path class=\"s-mute\" d=\"M10 40 H180 M10 50 H180\"/><path class=\"s-accent\" d=\"M10 45 Q50 26 90 46 Q130 62 170 45\"/><circle class=\"f-accent\" cx=\"50\" cy=\"36\" r=\"4\"/><circle class=\"f-accent\" cx=\"130\" cy=\"54\" r=\"4\"/><text class=\"t\" x=\"10\" y=\"82\">W = 10, path breaks out twice</text></svg></div></div></div>"
      },
      what: "Accot and Zhai (1997) extended Fitts's law to movements that have to stay inside a path rather than simply land on a target. Steering time rises with the length of the tunnel and falls with its width. For a straight tunnel the relationship is proportional to length divided by width, which is a far harsher penalty than the logarithm in Fitts's law.",
      why: "Cascading menus, sliders, drag handles and long hover paths are all steering tasks. If the corridor is narrow the pointer falls out of it, the menu snaps shut, and the person starts again.",
      how: [
        "Widen submenu hover corridors, or hold the submenu open for a moment so a diagonal slip does not dismiss it.",
        "Shorten the path: open the submenu next to its parent rather than across the screen.",
        "Prefer click-to-open over hover-to-open for anything more than one level deep.",
        "Make draggable bands tall enough that a small wobble does not release the handle."
      ],
      example: "A three-level cascading menu that opens on hover. The pointer has to stay inside a corridor a few pixels tall while travelling several hundred pixels sideways, and a small vertical drift closes the very item it was aimed at.",
      numbers: "For a straight tunnel: T = a + b(A/W), where A is path length and W is path width (Accot and Zhai, 1997).",
      pitfall: "Designers test menus with their own mouse at their own speed. A trackpad, a shaky hand or a very wide monitor turns a workable corridor into a frustrating one.",
      source: "Johnny Accot and Shumin Zhai, 'Beyond Fitts' Law: Models for Trajectory-Based HCI Tasks', CHI 1997.",
      verify: { status: "verified", note: "Original CHI 1997 paper confirmed, including the derivation from Fitts's law by integration and the straight-tunnel form of the equation." },
      belongs: { verdict: "core", why: "Menus, sliders and drag interactions are everyday design work, and this is the only model that predicts how they fail." },
      related: [227, 605, 611]
    },
    {
      n: 229,
      title: "Miller's law",
      aka: ["The magical number seven, plus or minus two"],
      oneLine: "Commonly quoted as seven items in memory; Miller's paper does not say that.",
      demo: {
        caption: "Same sixteen digits. Grouped, the reader carries four units to the keypad instead of sixteen.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One run of sixteen</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type db-type--mono\" style=\"font-size:15px\">4716829105536142</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Four chunks of four</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type db-type--mono\" style=\"font-size:15px\">4716 8291 0553 6142</div></div></div></div>"
      },
      what: "George Miller's 1956 paper collected two separate findings. People can tell apart about seven levels along a single dimension such as pitch or brightness, and people can hold about seven chunks in immediate memory, where a chunk is whatever the person has learned to treat as one unit. Miller's real subject was chunking: recoding raw items into larger meaningful units is how anyone gets past the limit. He opens the paper by saying he has been persecuted by an integer, and closes it by suggesting the number may be nothing more than a pernicious Pythagorean coincidence.",
      why: "The useful half of the paper is the chunking half. Splitting a sixteen-digit card number into four groups of four does not change the digits, it changes how many units the reader carries at once. That is a layout decision with a measurable effect on transcription errors.",
      how: [
        "Chunk long strings: card numbers, sort codes, reference numbers, phone numbers.",
        "Group related form fields under a heading so a section reads as one unit rather than eight.",
        "Do not cap navigation at seven items on the strength of this paper. It says nothing about menu length."
      ],
      example: "UK sort codes are printed as three pairs, 12-34-56, rather than as 123456.",
      numbers: "Miller reported a span of about seven plus or minus two chunks for immediate memory. Treat it as a rough figure, not a design threshold.",
      pitfall: "The seven-items-maximum rule for tabs, cards or navigation is a misreading that has outlived every correction. Cowan's later work puts the real limit lower anyway.",
      source: "George A. Miller, 'The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information', Psychological Review 63 (1956).",
      verify: { status: "disputed", note: "Full paper text read at the Classics in the History of Psychology archive, York University. The opening line 'My problem is that I have been persecuted by an integer' and the closing 'pernicious, Pythagorean coincidence' are both verbatim from the paper. An earlier draft of this entry claimed Miller called the number a rhetorical device and said the persecution line later; neither is true, and both have been corrected. The popular design version, a hard limit of seven interface items, is not in the paper." },
      belongs: { verdict: "adjacent", why: "It is cognitive psychology, and the famous number is wrong for interfaces. It stays because chunking long strings and grouping fields is a real layout technique that comes straight out of this paper." },
      related: [230, 206, 671]
    },
    {
      n: 230,
      title: "Cowan's 4 +/- 1",
      aka: ["The magical number four"],
      oneLine: "Working memory holds about four chunks once rehearsal and long-term memory are blocked.",
      demo: {
        caption: "Read each set once, then look away and say it back. Four returns whole; nine does not.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Four chunks</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-type db-type--mono\" style=\"font-size:15px\"><span>Q</span><span>L</span><span>7</span><span>B</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Nine chunks</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--tight db-type db-type--mono\" style=\"font-size:15px\"><span>M</span><span>4</span><span>K</span><span>X</span><span>9</span><span>R</span><span>T</span><span>Z</span><span>3</span></div></div></div></div>"
      },
      what: "Nelson Cowan reviewed the evidence in 2001 and argued that the capacity of the focus of attention is about four chunks, not seven. Higher figures come from studies where people could rehearse silently or lean on knowledge they already had. Remove those supports and the number settles around four.",
      why: "Four is a much tighter budget than seven and closer to what shows up in real tasks. It is why a comparison of three or four options feels manageable and nine does not, and why people lose their place in a multi-step flow that shows no running summary.",
      how: [
        "Keep side-by-side comparisons to about four columns before switching to a table people can scan and re-read.",
        "Print the state people would otherwise have to remember: a basket summary, a filter chip row, a breadcrumb.",
        "Never make someone carry a value from one screen to the next. Show it again on the next screen."
      ],
      example: "A checkout that repeats the basket contents on the payment screen, so the customer is not holding the order in their head while typing card details.",
      numbers: "About four chunks (Cowan, 2001). The '4 plus or minus 1' phrasing is a later shorthand rather than Cowan's own wording.",
      pitfall: "Treating four as a hard cap on anything countable. It is a limit on what someone holds in mind unaided, not on how many things may appear on a screen.",
      source: "Nelson Cowan, 'The Magical Number 4 in Short-Term Memory: A Reconsideration of Mental Storage Capacity', Behavioral and Brain Sciences 24 (2001).",
      verify: { status: "adjusted", note: "Confirmed against the Behavioral and Brain Sciences target article, where Cowan writes 'about four chunks'. The master list's 4 plus or minus 1 is popular shorthand, so I have labelled it as such rather than presenting it as his figure." },
      belongs: { verdict: "adjacent", why: "Psychology rather than design, but it sets the budget for what an interface must display instead of asking people to remember." },
      related: [229, 206, 567]
    },
    {
      n: 231,
      title: "Jakob's law",
      aka: ["Jakob's law of the internet user experience"],
      oneLine: "People spend most of their time on other sites, so they expect yours to work the same way.",
      demo: {
        caption: "Two shop headers with the same four parts. On the left you already know where the basket is without being told.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Where people expect them</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-ui\"><div class=\"db-row db-row--between db-row--nowrap\"><b>NORTHFIELD</b><span class=\"db-row db-row--tight\"><span class=\"db-note\">Search</span><span class=\"db-note\">Account</span><span class=\"db-note\">Basket (2)</span></span></div></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Same parts, moved</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-ui\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Basket (2)</span><span class=\"db-note\">Find things</span><b>NORTHFIELD</b></div></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div>"
      },
      what: "Jakob Nielsen wrote it on 22 July 2000: users spend most of their time on other sites. Whatever conventions the rest of the web settles on become the model in your visitor's head before they arrive. Meeting that model costs nothing. Breaking it costs attention that should have gone to your content.",
      why: "Convention is learning you did not have to pay for. A logo top-left that goes home, a magnifying glass that means search, an underlined phrase that is a link: none of it needs explaining because the visitor learned it somewhere else.",
      how: [
        "Put standard things where they are standard: logo top-left linking home, search top-right, basket top-right on a shop.",
        "Use native controls for dates, selects and file pickers unless you have a specific reason not to.",
        "Spend the originality budget on whatever makes the product different, not on the navigation.",
        "If you must break a convention, make the new behaviour visible on first use rather than hoping people work it out."
      ],
      example: "The basket icon in the top-right corner of an online shop. No shop invented it and no shop explains it, and a shop that moves it to the bottom-left has to.",
      numbers: "",
      pitfall: "Used as cover for a site that looks and behaves like every competitor. The law is about the mechanics people already know, not about the whole design.",
      source: "Jakob Nielsen, 'End of Web Design', Nielsen Norman Group, 22 July 2000, where he names Jakob's Law of the Internet User Experience.",
      verify: { status: "verified", note: "Fetched the original NN/g article, dated 22 July 2000, which names Jakob's Law of the Internet User Experience and states it as: 'Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.'" },
      belongs: { verdict: "core", why: "Deciding when to follow convention and when to break it is a design judgement made on every project." },
      related: [554, 633, 786]
    },
    {
      n: 232,
      title: "Postel's law (robustness principle)",
      aka: ["The robustness principle"],
      oneLine: "Be strict in what you send, forgiving in what you accept.",
      demo: {
        caption: "The same typing in both fields. On the right the code tidies it up instead of handing the work back.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Strict on the way in</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Postcode</span><span class=\"db-input db-input--error\">sw1a1aa</span><span class=\"db-note\" style=\"color:var(--sig-disputed)\">Enter a valid postcode</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Forgiving on the way in</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Postcode</span><span class=\"db-input\">sw1a1aa</span><span class=\"db-note db-note--accent\">Saved as SW1A 1AA</span></div></div></div></div>"
      },
      what: "The wording comes from RFC 761 (1980), the TCP specification edited by Jon Postel: be conservative in what you do, be liberal in what you accept from others. It was advice for people writing network software, so that a slightly malformed message from another machine did not break the connection. Designers borrow it for input handling: take whatever the person types and clean it up yourself.",
      why: "Rejecting a phone number because it contains spaces makes a person do work a line of code could do. Every rejected submission is a chance to lose them at the last step.",
      how: [
        "Strip spaces, dashes and brackets from phone numbers, card numbers and postcodes before validating.",
        "Accept several date formats, then echo back the one you parsed so the person can check it.",
        "Trim leading and trailing whitespace on email addresses. It is the most common paste error there is.",
        "Be strict on the way out: store and send one clean, consistent format."
      ],
      example: "A UK postcode field that accepts 'sw1a1aa', 'SW1A 1AA' and 'sw1a 1aa', stores the canonical form, and shows the person what it stored.",
      numbers: "",
      pitfall: "In its home field the principle is now treated as harmful, because tolerating broken input entrenches the breakage. For form input the advice still holds, but never silently accept something that changes the meaning. Guess a date wrong and you have booked the wrong flight.",
      source: "Jon Postel (ed.), RFC 761, Transmission Control Protocol (January 1980); reassessed in IETF RFC 9413, 'Maintaining Robust Protocols' (2023).",
      verify: { status: "disputed", note: "RFC 761 wording confirmed. Flagged because the principle is actively criticised where it came from: RFC 9413, 'Maintaining Robust Protocols' by Martin Thomson and David Schinazi (June 2023), states that tolerating unexpected input 'is no longer considered best practice in all scenarios' and describes a feedback cycle in which workarounds accumulate and errors become de facto standards. The design version is an analogy, not an application of the original." },
      belongs: { verdict: "adjacent", why: "Borrowed from network protocol design. Its specific design relevance is input handling: forgiving parsing on the way in, one clean format on the way out." },
      related: [615, 596, 555]
    },
    {
      n: 233,
      title: "Tesler's law (conservation of complexity)",
      aka: ["Law of conservation of complexity"],
      oneLine: "Every system has irreducible complexity; the only question is who absorbs it.",
      demo: {
        caption: "The card type question does not disappear on the right. The digits already answer it, so nobody is asked.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Paid by the user</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Card type</span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--open\"></span>Visa</span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--open\"></span>Mastercard</span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--open\"></span>Amex</span><span class=\"db-label\">Card number</span><span class=\"db-input\">4716 8291 0553 6142</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Paid by the code</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Card number</span><span class=\"db-input\">4716 8291 0553 6142</span><span class=\"db-note db-note--accent\">Visa, read from the first digit</span></div></div></div></div></div>"
      },
      what: "Larry Tesler formulated it around 1984 while working on an application framework at Apple. His wording: every application has an inherent amount of irreducible complexity, and the only question is who will have to deal with it, the user, the application developer, or the platform developer. Simplifying an interface does not delete complexity, it moves it somewhere.",
      why: "It turns 'make it simpler' into a budget question with a named payer. Someone has to handle the edge case. Moving it off the user and into the code is usually the right trade, because there is one codebase and a great many users.",
      how: [
        "When you remove a step, say where its complexity went. If the answer is nowhere, you have removed a capability.",
        "Absorb complexity in code: parse messy input, infer sensible defaults, detect the card type from the digits.",
        "Where complexity has to surface, surface it late and only to the people who need it.",
        "Be honest when a simplification is really a removal, and check nobody depended on what you cut."
      ],
      example: "A payment form that reads the card type from the first few digits instead of asking the customer to choose Visa or Mastercard. The logic still exists; a developer wrote it once rather than every customer answering it.",
      numbers: "",
      pitfall: "Pushed too far it becomes magic. The system guesses, guesses wrong, and gives the person no way to correct it. Absorb the complexity, but leave the override visible.",
      source: "Larry Tesler, around 1984. The wording above is from his own site, nomodes.com.",
      verify: { status: "verified", note: "Confirmed against Tesler's own page at nomodes.com, which dates the law to about 1984 and words it: 'Every application has an inherent amount of irreducible complexity. The only question is: Who will have to deal with it, the user, the application developer, or the platform developer?' That page gives no context. The detail that he arrived at it while working on an application framework at Apple comes from secondary accounts, which tie it to MacApp, and not from Tesler's own wording." },
      belongs: { verdict: "core", why: "It is a design law in the proper sense: it names the trade every simplification decision actually makes." },
      related: [580, 583, 232]
    },
    {
      n: 234,
      title: "Occam's razor",
      aka: ["Law of parsimony"],
      oneLine: "Prefer the explanation or design that needs fewest added parts.",
      demo: {
        caption: "Both controls take one of two answers. The right one shows both without opening, and holds no closed state.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Select, two options</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Delivery</span><span class=\"db-input\"><span class=\"db-row db-row--between db-row--nowrap\">Standard<span class=\"db-arrow\">&#9662;</span></span></span><span class=\"db-note\">One option hidden, one extra click, one open state</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Two radios</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Delivery</span><span class=\"db-row db-row--tight\"><span class=\"db-dot\"></span>Standard</span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--open\"></span>Next day</span><span class=\"db-note\">Both options visible, no hidden state</span></div></div></div></div>"
      },
      what: "A rule for choosing between competing explanations: do not add entities beyond what the job requires. The Latin everyone quotes, entia non sunt multiplicanda praeter necessitatem, is not in William of Ockham's writings. It first appears in that form in John Punch's 1639 commentary on Duns Scotus, three centuries after Ockham died. Ockham did write things close in meaning, such as 'it is futile to do with more what can be done with fewer'.",
      why: "As a working habit it is a tie-breaker. When two layouts do the same job, the one with fewer moving parts is cheaper to build and easier to change later.",
      how: [
        "When two solutions test the same, ship the one with fewer components, states and dependencies.",
        "Before adding a pattern to a design system, check whether an existing one already covers the case.",
        "In research, reach for the boring explanation of a drop-off first. Check the button works before theorising about motivation."
      ],
      example: "A dropdown with two options is a pair of radio buttons with extra machinery bolted on. Same job, fewer parts, no hidden state.",
      numbers: "",
      pitfall: "It is a tie-breaker, not a target. Simplest only wins when the two options genuinely do the same job, and 'simple' often turns out to mean simple for the designer.",
      source: "Attributed to William of Ockham (about 1287 to 1347), but the standard Latin phrasing is John Punch's, from his 1639 commentary on Duns Scotus.",
      verify: { status: "disputed", note: "Attribution checked against W. M. Thorburn's 'The Myth of Occam's Razor' (Mind, 1918) and standard reference accounts. The quotation is misattributed; the underlying idea is genuinely Ockham's, in different words." },
      belongs: { verdict: "adjacent", why: "A philosophy heuristic rather than a design principle. It earns a place as the tie-breaker between two working designs, though section 1 already carries the design-native versions: economy of means, and as little design as possible." },
      related: [10, 34, 233]
    },
    {
      n: 235,
      title: "Pareto principle (80/20)",
      aka: ["The 80/20 rule"],
      oneLine: "A small share of causes usually produces most of the effect.",
      demo: {
        caption: "Eighteen pages of one site, ranked by sessions. The first three stand above everything and the tail is nearly flat.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 132\"><path class=\"s-mute\" d=\"M14 112 H302\"/><rect class=\"f-accent\" x=\"16\" y=\"28\" width=\"12\" height=\"84\"/><rect class=\"f-accent\" x=\"32\" y=\"67\" width=\"12\" height=\"45\"/><rect class=\"f-accent\" x=\"48\" y=\"80\" width=\"12\" height=\"32\"/><rect class=\"f-mute\" x=\"64\" y=\"88\" width=\"12\" height=\"24\"/><rect class=\"f-mute\" x=\"80\" y=\"92\" width=\"12\" height=\"20\"/><rect class=\"f-mute\" x=\"96\" y=\"96\" width=\"12\" height=\"16\"/><rect class=\"f-mute\" x=\"112\" y=\"98\" width=\"12\" height=\"14\"/><rect class=\"f-mute\" x=\"128\" y=\"99\" width=\"12\" height=\"13\"/><rect class=\"f-mute\" x=\"144\" y=\"101\" width=\"12\" height=\"11\"/><rect class=\"f-mute\" x=\"160\" y=\"102\" width=\"12\" height=\"10\"/><rect class=\"f-mute\" x=\"176\" y=\"103\" width=\"12\" height=\"9\"/><rect class=\"f-mute\" x=\"192\" y=\"103\" width=\"12\" height=\"9\"/><rect class=\"f-mute\" x=\"208\" y=\"104\" width=\"12\" height=\"8\"/><rect class=\"f-mute\" x=\"224\" y=\"104\" width=\"12\" height=\"8\"/><rect class=\"f-mute\" x=\"240\" y=\"105\" width=\"12\" height=\"7\"/><rect class=\"f-mute\" x=\"256\" y=\"105\" width=\"12\" height=\"7\"/><rect class=\"f-mute\" x=\"272\" y=\"106\" width=\"12\" height=\"6\"/><rect class=\"f-mute\" x=\"288\" y=\"106\" width=\"12\" height=\"6\"/><path class=\"s-accent\" d=\"M16 26 V20 H60 V26\"/><text class=\"t\" x=\"64\" y=\"24\">these three</text><text class=\"t\" x=\"180\" y=\"94\">the other fifteen</text><text class=\"t\" x=\"14\" y=\"126\">sessions per page, ranked</text></svg></div>"
      },
      what: "Vilfredo Pareto observed in Cours d'economie politique (1896-97) that a small part of the Italian population held most of the land. Joseph Juran, working in quality control from around 1941, generalised the pattern and named it after Pareto. The 80/20 split is shorthand. Real distributions run anywhere from 90/10 to 70/30, and the two numbers measure different things so they need not add up to a hundred.",
      why: "It tells you where to spend design effort. A handful of screens, tasks or components carry most of the traffic in almost every product, and polishing those beats spreading effort evenly across everything.",
      how: [
        "Pull the analytics before the redesign and find the pages and flows that carry most sessions.",
        "Audit a design system for the ten components that appear on most screens, and get those right first.",
        "Rank usability findings by how many participants hit each problem, not by how painful each one was to watch."
      ],
      example: "A five-hundred-page site where the homepage, one product template and the contact page account for the bulk of sessions. The redesign starts with those three.",
      numbers: "The 80/20 figure is a rule of thumb, not a measured constant. Measure your own split before quoting one.",
      pitfall: "The neglected majority is not free. Rarely used pages are often the ones people need in a crisis, and rarely used components are often the accessible ones.",
      source: "Vilfredo Pareto, Cours d'economie politique (1896-97); named and generalised by Joseph M. Juran from about 1941.",
      verify: { status: "adjusted", note: "Confirmed that Juran, not Pareto, coined the name and generalised the rule for quality management. I have dropped the widely repeated story about Pareto counting pea pods in his garden, which I could not trace to any contemporary source." },
      belongs: { verdict: "adjacent", why: "Statistics by way of management consulting. Its specific design relevance is prioritising effort across pages, flows and components." },
      related: [250, 96, 9250]
    },
    {
      n: 236,
      title: "Parkinson's law",
      aka: [],
      oneLine: "Work expands to fill the time available for its completion.",
      demo: { none: "The claim is that a task's duration follows the allotment rather than the work, and any drawing of that is two labelled bars asserting it; the observable version of Parkinson, where attention follows comprehension, is demonstrated at 9236." },
      what: "C. Northcote Parkinson published it as a satirical essay in The Economist on 19 November 1955, two days after the report of the Royal Commission on the Civil Service. His observation was that Civil Service staff numbers kept growing by roughly six per cent a year while the empire being administered shrank. The famous line opens the essay.",
      why: "It is a scheduling observation, not a statement about the thing being designed. Give a design task a fortnight and it takes a fortnight. Give it two days and it often takes two days.",
      how: [
        "Timebox exploration and set the review date before the work starts.",
        "Give each phase an end, so the open-ended phase does not eat the build."
      ],
      example: "Parkinson's own illustration: an elderly woman with nothing else to do spends an entire day writing and posting a single postcard.",
      numbers: "",
      pitfall: "Wheeled out to justify arbitrary deadlines. The essay is satire about bureaucratic staffing, not evidence about how long good work takes.",
      source: "C. Northcote Parkinson, 'Parkinson's Law', The Economist, 19 November 1955; expanded in Parkinson's Law, and Other Studies in Administration (1957).",
      verify: { status: "verified", note: "The editorial note running above the essay reads 'The report of the Royal Commission on the Civil Service was published on Thursday afternoon', placing the piece two days after it. That wording comes from a reprint of the 19 November 1955 issue; economist.com blocks automated fetching, so I have not read the archive page itself. The opening sentence and the postcard illustration are confirmed in the text of chapter one, which is the essay. An earlier draft called 5.75 per cent Parkinson's Admiralty figure. It is not. The essay gives 5.6 per cent a year for Admiralty officials between 1914 and 1928 and 5.89 per cent for the Colonial Office, then settles on about 5.75 per cent a year as the general figure for pure staff accumulation. That last one is the 'roughly six per cent' quoted here." },
      belongs: { verdict: "adjacent", why: "Satire about civil service staffing rather than a design finding, and the master list's own gap is really the law of triviality at 9236. It stays because timeboxing is a standard design-process move and this is the law people cite for it, and because cutting it while keeping the planning fallacy at 268, which is equally generic, would be inconsistent." },
      related: [9236, 268, 982]
    },
    {
      n: 9236,
      title: "Parkinson's law of triviality (bikeshedding)",
      aka: ["The bike-shed effect", "Bikeshedding"],
      oneLine: "Groups spend most of their time on the decision they all feel qualified to judge.",
      demo: {
        caption: "Parkinson's committee, drawn to scale. The bars flip: the item worth least took the most time.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Money at stake</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 86\"><text class=\"t\" x=\"0\" y=\"14\">reactor: 10 million pounds</text><rect class=\"f-mute\" x=\"0\" y=\"18\" width=\"190\" height=\"14\"/><text class=\"t\" x=\"0\" y=\"62\">bike shed: 350 pounds</text><rect class=\"f-accent\" x=\"0\" y=\"66\" width=\"1\" height=\"14\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Minutes discussed</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 86\"><text class=\"t\" x=\"0\" y=\"14\">reactor: 2.5 minutes</text><rect class=\"f-mute\" x=\"0\" y=\"18\" width=\"10\" height=\"14\"/><text class=\"t\" x=\"0\" y=\"62\">bike shed: 45 minutes</text><rect class=\"f-accent\" x=\"0\" y=\"66\" width=\"190\" height=\"14\"/></svg></div></div></div>"
      },
      what: "A separate law from the 1957 book, set out in chapter three, 'High Finance, or the Point of Vanishing Interest'. A finance committee waves through a ten million pound atomic reactor in two and a half minutes, then spends forty-five minutes on a three hundred and fifty pound bicycle shed, because everyone understands bicycle sheds and nobody understands reactors. A third item, twenty-one pounds a year for refreshments, takes longer still.",
      why: "Every design review does this. The information architecture, the error handling and the accessibility of the custom control get nodded through, and then forty minutes go on a shade of blue. The cause is comprehension rather than carelessness: the group defaults to the decision every person in the room can hold an opinion about.",
      how: [
        "Put the hard decision first, while attention is fresh, and name it as the decision of the meeting.",
        "Take colour, copy and radius choices out of the group and give them to a named owner with a deadline.",
        "State what feedback you want before you present: a decision on the flow, not on the labels.",
        "Park trivia visibly in a list so people feel heard without spending the session on it."
      ],
      example: "Parkinson's committee: two and a half minutes on a ten million pound reactor, forty-five minutes on a three hundred and fifty pound bicycle shed.",
      numbers: "Parkinson's illustrative figures: 2.5 minutes on a 10 million pound reactor, 45 minutes on a 350 pound bicycle shed, and a third item of 21 pounds a year for refreshments.",
      pitfall: "Calling something bikeshedding to shut down a real objection. Small visual details do matter. The problem is the ratio of attention, not the topic.",
      source: "C. Northcote Parkinson, Parkinson's Law, and Other Studies in Administration (1957), chapter 3, 'High Finance, or the Point of Vanishing Interest'.",
      verify: { status: "verified", note: "Chapter title and all three agenda figures confirmed against sourced accounts that quote the chapter directly, including Parkinson's own sentence: 'A sum of 350 pounds is well within everybody's comprehension. Everyone can visualise a bicycle shed. Discussion goes on, therefore, for forty-five minutes.' An earlier draft called this Parkinson's second law, which is wrong: the second law is that expenditure rises to meet income. This is the law of triviality." },
      belongs: { verdict: "core", why: "Design decisions are made in rooms, and this names the most common way those rooms waste themselves. Every practising designer meets it monthly." },
      related: [236, 967, 968]
    },
    {
      n: 237,
      title: "Doherty threshold",
      aka: [],
      oneLine: "Fast system response changes how much work people get done, not only how the system feels.",
      demo: {
        caption: "The report's own figures. Cutting the wait from three seconds to a third of a second more than doubled the work completed.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 112\"><text class=\"t\" x=\"4\" y=\"38\">3.0 s wait</text><text class=\"t\" x=\"100\" y=\"20\">180 transactions an hour</text><rect class=\"f-mute\" x=\"100\" y=\"24\" width=\"97\" height=\"18\"/><text class=\"t\" x=\"4\" y=\"82\">0.3 s wait</text><text class=\"t\" x=\"100\" y=\"64\">371 transactions an hour</text><rect class=\"f-accent\" x=\"100\" y=\"68\" width=\"200\" height=\"18\"/><text class=\"t\" x=\"4\" y=\"106\">IBM, 1982</text></svg></div>"
      },
      what: "Walter Doherty and Ahrvind Thadani wrote 'The Economic Value of Rapid Response Time' for IBM in November 1982. Their argument was that response time is an economic variable rather than a technical one. As the machine got faster, users' transaction rates rose by more than the saved seconds alone explained, because people stopped losing their place and stopped context-switching. The report challenged the two-second standard of the day. The 400 millisecond threshold now attached to Doherty's name is not in the report. It comes from later design writing.",
      why: "It is the strongest argument available for treating speed as a design requirement rather than an engineering afterthought. If the interface answers before attention wanders, the person keeps their train of thought and does more in the same hour.",
      how: [
        "Budget interface response, not only page load. A filter, a sort or a tab switch should paint in well under half a second.",
        "Render optimistically for actions that almost always succeed, and reconcile afterwards.",
        "Prefetch or precompute the likely next screen while the person is reading the current one.",
        "Where you cannot be fast, be honest: show what is happening rather than freezing."
      ],
      example: "A search box that filters a visible list as you type, against one that waits for Enter and a server round trip. Same data, different amount of work done in ten minutes.",
      numbers: "The commonly quoted 400 milliseconds does not appear in the report, so treat it as a working target rather than a measured constant. The report's own figures are a jump in productivity once response falls below one second: 180 transactions per hour at 3 seconds against 371 at 0.3 seconds.",
      pitfall: "Chasing the number on a developer laptop over office broadband. Measure on the device and connection your users actually have.",
      source: "W. J. Doherty and A. J. Thadani, 'The Economic Value of Rapid Response Time', IBM, November 1982 (form number GE20-0752-00).",
      verify: { status: "disputed", note: "The document exists: the Computer History Museum holds a twelve-page IBM technical report of that title dated November 1982, catalogue number 102751398. IBM published it online under form number GE20-0752-00, and the full text is reproduced with IBM's permission on Jim Elliott's mainframe pages. Read end to end, it never mentions 400 milliseconds. It does challenge the earlier two-second standard, argue that productivity rises more than in proportion to the drop in response time, and give the transaction-rate figures quoted here. Laws of UX, the usual route by which the 400 reaches designers, also misfiles the report as an IBM Systems Journal paper. The 400 is design folklore." },
      belongs: { verdict: "core", why: "Perceived speed is a design constraint that shapes layout, loading states and how much a screen tries to do at once." },
      related: [239, 594, 571]
    },
    {
      n: 238,
      title: "Power law of practice",
      aka: ["The learning curve"],
      oneLine: "Task time falls steeply with early practice, then flattens out.",
      demo: {
        caption: "Nearly all the improvement happens in the first ten attempts. After that the curve is almost flat.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 140\"><text class=\"t\" x=\"2\" y=\"11\">time per trial</text><path class=\"s-mute\" d=\"M30 16 V115 H312\"/><path class=\"s-accent\" d=\"M32.8 25 L35.6 51.4 L38.4 63 L41.2 70 L46.8 78.3 L52.4 83.2 L63.6 89 L74.8 92.5 L97.2 96.6 L119.6 99.1 L164.4 102 L209.2 103.8 L254 104.9 L310 106\"/><path class=\"s-mute\" d=\"M58 115 V80\" stroke-dasharray=\"4 3\"/><text class=\"t\" x=\"62\" y=\"76\">ten trials</text><text class=\"t\" x=\"196\" y=\"96\">long flat tail</text><text class=\"t\" x=\"28\" y=\"128\">1</text><text class=\"t\" x=\"128\" y=\"128\">trials completed</text><text class=\"t\" x=\"298\" y=\"128\">100</text></svg></div>"
      },
      what: "Newell and Rosenbloom (1981) gathered learning curves from many tasks and showed that time per trial falls as a power function of the number of trials: quick improvement at first, then long diminishing returns. Heathcote, Brown and Mewhort (2000) then showed that most of those curves were averaged across participants, and that averaging exponential curves produces something a power function fits neatly. Fitted to individuals, an exponential usually fits better.",
      why: "Whichever function is right, the shape holds and so does the design lesson. Novices and daily users sit on completely different parts of the curve, and an interface tuned only for the first hour punishes everyone after it.",
      how: [
        "Design two paths: a discoverable one for the first week, a fast one for the hundredth time.",
        "Keep positions stable. Menus that reorder themselves by frequency destroy the muscle memory practice builds.",
        "Show the keyboard shortcut next to the menu item so people can graduate without hunting for it.",
        "Measure task time for returning users as well as first-timers, or you will optimise the wrong end of the curve."
      ],
      example: "A point-of-sale till where staff learn the button layout in a week and stop reading the labels. Move one button and the error rate jumps for a fortnight.",
      numbers: "",
      pitfall: "Quoting it as a law with a fixed exponent. The functional form is contested and any fitted numbers are specific to the task they came from.",
      source: "Allen Newell and Paul Rosenbloom, 'Mechanisms of Skill Acquisition and the Law of Practice' (1981); challenged by Andrew Heathcote, Scott Brown and D. J. K. Mewhort, 'The Power Law Repealed: The Case for an Exponential Law of Practice', Psychonomic Bulletin and Review 7 (2000).",
      verify: { status: "disputed", note: "Both papers confirmed. Heathcote and colleagues show that the power law is largely an artefact of averaging learning curves across participants, and that individual curves are better fitted by an exponential. The practical shape of the curve is unaffected by which function wins." },
      belongs: { verdict: "adjacent", why: "Learning research rather than design, but it is the reason to build for the expert as well as the novice, and the reason not to move things people have learned." },
      related: [572, 590, 631]
    },
    {
      n: 239,
      title: "Response-time thresholds (0.1s, 1s, 10s)",
      aka: ["Nielsen's three response time limits"],
      oneLine: "Under 0.1s feels instant, under 1s keeps the thought going, over 10s loses attention.",
      demo: {
        caption: "The upper row is what the interface should do; the lower row is what the person is doing while it happens.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 112\"><path class=\"s-mute\" d=\"M14 60 H306\"/><path class=\"s-accent\" d=\"M90 18 V68 M160 18 V68 M230 18 V68\"/><text class=\"t\" x=\"16\" y=\"32\">nothing</text><text class=\"t\" x=\"16\" y=\"48\">feels instant</text><text class=\"t\" x=\"94\" y=\"32\">nothing</text><text class=\"t\" x=\"94\" y=\"48\">thought held</text><text class=\"t\" x=\"164\" y=\"32\">indicator</text><text class=\"t\" x=\"164\" y=\"48\">waiting</text><text class=\"t\" x=\"234\" y=\"32\">progress bar</text><text class=\"t\" x=\"234\" y=\"48\">attention lost</text><text class=\"t\" x=\"78\" y=\"84\">0.1 s</text><text class=\"t\" x=\"152\" y=\"84\">1 s</text><text class=\"t\" x=\"220\" y=\"84\">10 s</text><text class=\"t\" x=\"14\" y=\"104\">time until the person sees a response</text></svg></div>"
      },
      what: "Robert B. Miller set out these limits in 1968 in 'Response Time in Man-Computer Conversational Transactions'. Jakob Nielsen restated them in Usability Engineering (1993) and has republished them since. A tenth of a second feels like direct manipulation and needs no feedback. One second is noticeable but the person keeps their train of thought. Ten seconds is about the limit of held attention, after which people switch to something else.",
      why: "They give three different design responses rather than one blanket rule. Under a tenth of a second, do nothing. Up to a second, still usually nothing. Past a second, acknowledge. Past ten, show progress and let people leave and come back.",
      how: [
        "Under 100ms: no spinner. An indicator that flashes for 80 milliseconds reads as a glitch.",
        "Between 1 and 10 seconds: show a determinate indicator if you can estimate the work, an indeterminate one if you cannot.",
        "Over 10 seconds: give a percentage, allow the person to do something else, and tell them when it finishes.",
        "Never fake a progress bar to fill the gap."
      ],
      example: "A file upload that shows nothing for the first fraction of a second, a quiet indicator after one second, and a percentage with a cancel button once it is clear the file is large.",
      numbers: "0.1 second, 1 second, 10 seconds (Miller 1968, restated in Nielsen, Usability Engineering, 1993).",
      pitfall: "Applying the thresholds to the network round trip alone. What counts is when the person sees a response, which includes render time on their device.",
      source: "Robert B. Miller, 'Response Time in Man-Computer Conversational Transactions', AFIPS Fall Joint Computer Conference (1968); Jakob Nielsen, Usability Engineering (1993).",
      verify: { status: "verified", note: "Confirmed against Nielsen Norman Group's article 'Response Times: The 3 Important Limits', which gives all three figures and cites Miller (1968) and Card and colleagues (1991) as the underlying research." },
      belongs: { verdict: "core", why: "These three numbers decide whether a screen needs a loading state at all, and which kind. That is a design decision on nearly every interactive element." },
      related: [237, 592, 595]
    },
    {
      n: 240,
      title: "Aesthetic-usability effect",
      aka: [],
      oneLine: "People judge attractive interfaces as easier to use, and forgive their small faults.",
      demo: {
        caption: "Same twelve keys, same steps, same machine. The one you judge easier to use is the one that looks tidier.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Cash machine A</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">Enter amount</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">1</span><span class=\"db-btn db-btn--sm\">2</span><span class=\"db-btn db-btn--sm\">3</span><span class=\"db-btn db-btn--sm\">4</span><span class=\"db-btn db-btn--sm\">5</span></div><div class=\"db-row\"><span class=\"db-btn db-btn--lg\">6</span><span class=\"db-btn db-btn--lg\">7</span></div><div class=\"db-row db-row--tight\"><span class=\"db-btn\">8</span><span class=\"db-btn\">9</span><span class=\"db-btn db-btn--sm\">0</span></div><div class=\"db-row\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Clear</span><span class=\"db-btn db-btn--lg\">Enter</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Cash machine B</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">Enter amount</span><div class=\"db-row db-row--tight db-row--centre\"><span class=\"db-btn\">1</span><span class=\"db-btn\">2</span><span class=\"db-btn\">3</span></div><div class=\"db-row db-row--tight db-row--centre\"><span class=\"db-btn\">4</span><span class=\"db-btn\">5</span><span class=\"db-btn\">6</span></div><div class=\"db-row db-row--tight db-row--centre\"><span class=\"db-btn\">7</span><span class=\"db-btn\">8</span><span class=\"db-btn\">9</span></div><div class=\"db-row db-row--tight db-row--centre\"><span class=\"db-btn db-btn--ghost\">Clear</span><span class=\"db-btn\">0</span><span class=\"db-btn\">Enter</span></div></div></div></div></div>"
      },
      what: "Masaaki Kurosu and Kaori Kashimura at the Hitachi Design Center tested 26 variations of a cash machine layout with 252 people in 1995. How attractive a layout looked correlated more strongly with how easy people said it was to use than with how easy it actually was. Noam Tractinsky repeated the study in Hebrew in Israel, expecting the effect to disappear under tighter controls, and found it stronger.",
      why: "Visual quality buys tolerance. People stay longer with something attractive, report fewer problems and try again after a small failure. That tolerance is genuine, and it is also a problem for you, because it hides faults from your own testing.",
      how: [
        "Do the visual craft properly. It is not decoration; it changes reported ease of use.",
        "In usability testing, score behaviour rather than opinion. A participant can fail a task and still rate the site highly.",
        "Test rough prototypes for flow and polished builds for perception, and keep the two results apart.",
        "Never use polish to cover a broken flow. The tolerance runs out."
      ],
      example: "Nielsen Norman Group describe a test participant who struggled badly with navigation on a Fitbit site, rated it highly anyway, and commented on the calming colours.",
      numbers: "Kurosu and Kashimura (1995): 26 layout variants, 252 participants.",
      pitfall: "Beautiful prototypes test well and ship badly. If your only evidence is a satisfaction score on a good-looking build, you have measured the polish.",
      source: "Masaaki Kurosu and Kaori Kashimura, 'Apparent Usability vs. Inherent Usability', CHI 1995; Noam Tractinsky, 'Aesthetics and Apparent Usability: Empirically Assessing Cultural and Methodological Issues', CHI 1997.",
      verify: { status: "verified", note: "Both studies confirmed, including the 26 ATM layout variants and 252 participants, via Nielsen Norman Group's article on the effect and the CHI 1997 paper record. The Fitbit participant is in that NN/g article, quoted as saying 'It's the colors they used. Looks like the ocean, it's calm. Very good photographs' after struggling with the site." },
      belongs: { verdict: "core", why: "It is the evidence that visual craft is functional, and the reason usability results from a polished build need reading with care." },
      related: [558, 971, 976]
    },
    {
      n: 241,
      title: "Goal-gradient effect",
      aka: ["Goal-gradient hypothesis"],
      oneLine: "Effort rises as the finish line gets closer, even when the closeness is manufactured.",
      demo: {
        caption: "Both cards need ten more purchases. The one already two stamps along gets finished sooner.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Blank ten-stamp card</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span></span><span class=\"db-note\">0 of 10 &middot; ten purchases to go</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Twelve-stamp card, two free</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span><span class=\"db-dot db-dot--open\"></span></span><span class=\"db-note\">2 of 12 &middot; ten purchases to go</span></div></div></div></div>"
      },
      what: "Clark Hull reported in the 1930s that rats ran faster the nearer they got to the food. Kivetz, Urminsky and Zheng brought it to people in 2006 with coffee loyalty cards: customers bought more often as they neared a free coffee. They also ran a version where one group got a twelve-stamp card with two stamps already applied and another got a blank ten-stamp card. Both needed ten more purchases. The group with the head start finished sooner.",
      why: "Visible progress pulls people forward, and a head start pulls harder than a blank slate. That is why an onboarding checklist works, and why it works better when the first item is already ticked.",
      how: [
        "Show progress as steps completed out of a known total, not as an unlabelled bar.",
        "Give a head start where it is honest. Mark account creation as done, because it is.",
        "Break long forms into stages so the finish line stays visible.",
        "Keep the total truthful. A bar that never fills is worse than no bar at all."
      ],
      example: "The Kivetz coffee card: a twelve-stamp card carrying two free stamps gets completed faster than a blank ten-stamp card requiring the same ten purchases.",
      numbers: "",
      pitfall: "Manufactured progress sits one step from a deceptive pattern. A bar that counts optional marketing consents as profile completion is manipulation, not motivation.",
      source: "Clark L. Hull, work on goal gradients in rats in the 1930s; Ran Kivetz, Oleg Urminsky and Yuhuang Zheng, 'The Goal-Gradient Hypothesis Resurrected: Purchase Acceleration, Illusionary Goal Progress, and Customer Retention', Journal of Marketing Research 43 (2006).",
      verify: { status: "verified", note: "Kivetz, Urminsky and Zheng (2006) confirmed in the Journal of Marketing Research, including the illusory-progress card manipulation. Hull's rat studies date from the 1930s; I have not read them and have described only what the 2006 paper reports of them." },
      belongs: { verdict: "adjacent", why: "Consumer psychology, but it is the evidence behind progress indication, onboarding checklists and multi-step form design." },
      related: [618, 592, 995]
    },
    {
      n: 242,
      title: "Labour illusion",
      aka: ["Operational transparency"],
      oneLine: "People value a result more when they can see the work that produced it.",
      demo: {
        caption: "Same search, same results, same seconds. Only the right-hand panel says what it is doing with them.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Blank wait</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Searching</span><span class=\"db-note\">Please wait</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Same wait, work shown</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Checking 42 airlines</span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span>British Airways</span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span>easyJet</span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span>Ryanair</span><span class=\"db-note\">18 of 42 checked</span></div></div></div></div></div>"
      },
      what: "Ryan Buell and Michael Norton ran five experiments on simulated travel and dating services and published them in Management Science in 2011. Sites that showed what they were doing while they searched were rated more highly than sites returning identical results instantly. In some conditions people preferred the slower site.",
      why: "A wait with visible work reads as effort on your behalf. The same wait with a blank screen reads as a broken site. Those seconds buy goodwill or lose it depending entirely on what you show during them.",
      how: [
        "During a genuine search, name what is happening, with a count that moves: checking 42 airlines.",
        "Only show work you are actually doing. A scripted list of fake steps is a lie.",
        "Reserve the technique for waits that are already unavoidable.",
        "Pair it with the outcome: show what was searched when the answer arrives."
      ],
      example: "Buell and Norton's own stimulus was a travel search that listed the airlines it was checking as the search ran.",
      numbers: "Five experiments across simulated travel and dating services (Buell and Norton, 2011).",
      pitfall: "Adding delay on purpose. The paper is about spending a wait you already have. An artificially slowed product is slower, whatever people say about it afterwards.",
      source: "Ryan W. Buell and Michael I. Norton, 'The Labor Illusion: How Operational Transparency Increases Perceived Value', Management Science 57(9) (2011).",
      verify: { status: "verified", note: "Paper confirmed in Management Science 57(9), pages 1564 to 1579. The abstract states five experiments in the domains of online travel and online dating, and reports that perceived provider effort and feelings of reciprocity mediate the rise in valuation." },
      belongs: { verdict: "adjacent", why: "Operations management research, but it directly governs how loading and progress states should be designed." },
      related: [592, 594, 1054]
    },
    {
      n: 243,
      title: "Mere-exposure effect",
      aka: ["Familiarity principle"],
      oneLine: "Repeated exposure to something, on its own, tends to make people like it more.",
      demo: {
        caption: "Liking climbs with repetition, then flattens and falls. Launch-day complaints sit at the left of the curve.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 142\"><text class=\"t\" x=\"2\" y=\"11\">liking</text><path class=\"s-mute\" d=\"M30 16 V112 H312\"/><path class=\"s-accent\" d=\"M30 100 C 70 94, 96 46, 140 38 C 176 32, 208 34, 234 46 C 264 60, 288 74, 310 86\"/><path class=\"s-mute\" d=\"M140 112 V48\" stroke-dasharray=\"4 3\"/><text class=\"t\" x=\"146\" y=\"28\">peak</text><text class=\"t\" x=\"32\" y=\"128\">first sight</text><text class=\"t\" x=\"122\" y=\"128\">repeated</text><text class=\"t\" x=\"238\" y=\"128\">worn out</text></svg></div>"
      },
      what: "Robert Zajonc published the finding in 1968: repeated exposure to a stimulus is enough by itself to improve attitude towards it, with no reward attached. Robert Bornstein's 1989 meta-analysis of 208 studies put the average effect at r = 0.26, modest but consistent. It is not unlimited. Liking rises with repetition and then falls again with overexposure.",
      why: "It explains why a new brand mark looks wrong for a fortnight and normal by week six, and why the redesign everyone hated on launch day attracts no comment two months later. It is also part of the case for consistency across a system.",
      how: [
        "Hold your nerve after a launch. Week-one complaints are partly novelty, so wait for behaviour data before reverting.",
        "Repeat the same shapes, colours and forms across a system so each accrues familiarity instead of starting from zero.",
        "Do not confuse acceptance with quality. Exposure makes people tolerate a design; it does not make it work.",
        "Watch for the downturn. The same hero animation on every visit stops being pleasant."
      ],
      example: "A rebrand that draws a wave of complaint on day one and none at all three months later, with no change to the mark in between.",
      numbers: "Bornstein (1989): meta-analysis of 208 studies, average effect r = 0.26.",
      pitfall: "Used to dismiss all criticism of a redesign as people hating change. Some of it is. Some of it is a real regression you have decided not to hear.",
      source: "Robert B. Zajonc, 'Attitudinal Effects of Mere Exposure', Journal of Personality and Social Psychology 9 (1968); Robert F. Bornstein, 'Exposure and Affect: Overview and Meta-Analysis of Research, 1968-1987', Psychological Bulletin 106 (1989).",
      verify: { status: "verified", note: "Zajonc (1968) and Bornstein's 1989 meta-analysis both confirmed, including the 208-study count and the r = 0.26 figure. The inverted-U shape with overexposure is attributed in that literature to Berlyne (1971)." },
      belongs: { verdict: "adjacent", why: "Social psychology, but it governs how to read the reaction to a redesign and why brand consistency compounds." },
      related: [853, 831, 976]
    },
    {
      n: 244,
      title: "Yerkes-Dodson law",
      aka: ["The inverted-U curve of arousal and performance"],
      oneLine: "Popularly, performance peaks at moderate arousal; the 1908 study measured neither.",
      demo: {
        caption: "Left, the modern curve. Right, the 1908 mice: two curves against shock strength, and only the hard task peaks.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">The curve everyone draws</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><text class=\"t\" x=\"2\" y=\"10\">performance</text><path class=\"s-mute\" d=\"M26 16 V104 H192\"/><path class=\"s-accent\" d=\"M32 96 C 68 96, 76 26, 108 26 C 140 26, 152 96, 188 96\"/><text class=\"t\" x=\"116\" y=\"122\">arousal</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">What the 1908 study measured</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><text class=\"t\" x=\"2\" y=\"10\">learning speed</text><path class=\"s-mute\" d=\"M26 16 V104 H192\"/><path class=\"s\" d=\"M32 96 C 88 92, 132 62, 188 30\"/><text class=\"t\" x=\"128\" y=\"26\">easy task</text><path class=\"s-accent\" d=\"M32 92 C 54 92, 60 46, 84 46 C 116 46, 144 80, 188 94\"/><text class=\"t\" x=\"86\" y=\"40\">hard task</text><text class=\"t\" x=\"94\" y=\"122\">shock strength</text></svg></div></div></div>"
      },
      what: "Robert Yerkes and John Dodson trained Japanese dancing mice to tell a white chamber from a black one, using electric shock as punishment. They reported that learning speed depended on shock strength in a way that also depended on how hard the discrimination was. They did not measure arousal and did not measure performance in the sense the modern curve implies. The inverted-U graph everyone draws was projected onto their two curves by researchers in the 1950s.",
      why: "The design use, usually a claim that a bit of pressure helps and too much hurts, is folklore. Where the underlying idea is real for design work, cognitive load theory states it better and with far better evidence.",
      how: [
        "If you reached for this to argue about difficulty and engagement, use cognitive load instead. It separates the difficulty inherent in the task from the difficulty you added.",
        "If you reached for it to justify time pressure or artificial stakes in an interface, do not. There is no design evidence behind that.",
        "Cite it only with the caveat attached, or leave it out."
      ],
      example: "Gamification decks routinely reproduce the inverted-U curve with arousal on one axis and performance on the other, attributed to Yerkes and Dodson (1908). Neither axis appears in that paper.",
      numbers: "",
      pitfall: "It arrives with a confident-looking curve. The curve is a later drawing, not a plot of the 1908 data.",
      source: "Robert M. Yerkes and John D. Dodson, 'The Relation of Strength of Stimulus to Rapidity of Habit-Formation', Journal of Comparative Neurology and Psychology (1908).",
      verify: { status: "disputed", note: "The 1908 paper exists and is correctly titled, but the modern arousal-performance law is not what it found. Checked against Karl Halvor Teigen, 'Yerkes-Dodson: A Law for All Seasons' (Theory and Psychology, 1994), Martin Corbett, 'From Law to Folklore: Work Stress and the Yerkes-Dodson Law' (2015), and a 2024 Trends in Cognitive Sciences review revisiting the inverted-U curve." },
      belongs: { verdict: "cut", why: "A mouse-shock learning study from 1908, reinterpreted decades later into a curve it never plotted. It has no specific design application, and cognitive load, items 207 to 209, covers the ground with sounder evidence." },
      related: [207, 208, 209]
    },
    {
      n: 245,
      title: "Kano model",
      aka: ["Attractive quality theory"],
      oneLine: "Features fall into must-haves, more-is-better and delighters, and the categories move over time.",
      demo: {
        caption: "Follow the right-hand edge: a perfected must-be barely clears neutral, while the same effort on an attractive feature lands high.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 192\"><text class=\"t\" x=\"2\" y=\"10\">satisfaction</text><path class=\"s-mute\" d=\"M30 16 V168\"/><path class=\"s-mute\" d=\"M30 90 H250\" stroke-dasharray=\"4 3\"/><text class=\"t\" x=\"38\" y=\"30\">delighted</text><text class=\"t\" x=\"38\" y=\"120\">unhappy</text><path class=\"s-accent\" d=\"M34 160 C 90 156, 140 130, 176 104 C 206 96, 226 94, 248 93\"/><text class=\"t\" x=\"254\" y=\"96\">must-be</text><path class=\"s\" d=\"M34 152 L248 55\" stroke-dasharray=\"5 3\"/><text class=\"t\" x=\"254\" y=\"52\">more is</text><text class=\"t\" x=\"254\" y=\"64\">better</text><path class=\"s\" d=\"M34 86 C 120 86, 152 85, 176 79 C 206 68, 226 46, 248 30\"/><text class=\"t\" x=\"254\" y=\"30\">attractive</text><text class=\"t\" x=\"30\" y=\"186\">feature absent</text><text class=\"t\" x=\"196\" y=\"186\">fully implemented</text></svg></div>"
      },
      what: "Noriaki Kano and three colleagues published it in the Journal of the Japanese Society for Quality Control in 1984, building on Herzberg's two-factor idea. Features sort into categories: must-be, where absence causes anger but presence earns no credit; one-dimensional, where satisfaction tracks how much you provide; attractive, where presence delights but absence is not missed; plus indifferent and reverse. Categories drift, so today's delighter becomes next year's must-have.",
      why: "It ends the roadmap argument where everyone rates everything important. Must-be items are hygiene: you get blamed for their absence and nothing for their excellence. Effort spent perfecting a must-be is usually wasted effort.",
      how: [
        "Sort a feature list into must-be, one-dimensional and attractive before prioritising, and treat must-be as a floor to reach rather than a place to excel.",
        "Ask the paired Kano question in research: how would you feel if this were present, and how would you feel if it were absent.",
        "Re-run the sort every year or two, because delighters decay into expectations.",
        "Never ship an attractive feature while a must-be one is still missing."
      ],
      example: "On a dental practice website, opening hours and a phone number are must-be: nobody praises them and everybody notices their absence. Online booking was attractive a decade ago and is close to must-be now.",
      numbers: "",
      pitfall: "Running the questionnaire on people who have never used the thing. Kano categories drawn from imagined use are guesses in the shape of data.",
      source: "Noriaki Kano, Nobuhiko Seraku, Fumio Takahashi and Shin-ichi Tsuji, 'Attractive Quality and Must-Be Quality', Journal of the Japanese Society for Quality Control 14(2) (1984).",
      verify: { status: "verified", note: "Paper, four authors, journal, volume 14 issue 2 and the 1984 date all confirmed against the J-Stage record, which romanises the names as Nobuhiko Seraku and Shin-ichi Tsuji. An earlier draft of this entry misspelt Seraku's given name and I have corrected it." },
      belongs: { verdict: "adjacent", why: "Quality management, but it is the clearest tool designers have for deciding which features deserve polish and which only need to exist." },
      related: [948, 683, 235]
    },
    {
      n: 246,
      title: "Conway's law",
      aka: [],
      oneLine: "A system's structure ends up mirroring the communication structure of the team that built it.",
      demo: {
        caption: "Three screens of one bank, three ways to enter the same date. The seams follow the org chart.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><span class=\"db-note\">One bank, one date field, three divisions</span><div class=\"db-ui\"><span class=\"db-label\">Current accounts</span><span class=\"db-input\">31/08/2026</span></div><div class=\"db-ui\"><span class=\"db-label\">Savings</span><span class=\"db-input\"><span class=\"db-row db-row--between db-row--nowrap\">31 August 2026<span class=\"db-arrow\">&#9662;</span></span></span></div><div class=\"db-ui\"><span class=\"db-label\">Mortgages</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-input\" style=\"width:48px\">31</span><span class=\"db-input\" style=\"width:48px\">08</span><span class=\"db-input\" style=\"width:64px\">2026</span></span></div></div></div>"
      },
      what: "Melvin Conway wrote 'How Do Committees Invent?' in 1967. Harvard Business Review turned it down and Datamation published it in April 1968. His claim: any organisation that designs a system will produce a design whose structure copies that organisation's communication structure. Fred Brooks quoted it in The Mythical Man-Month and gave it the name.",
      why: "It explains most of the seams in a product. Three teams produce three date pickers. Navigation that lists departments rather than tasks is an org chart with a stylesheet on it.",
      how: [
        "When you find an inconsistency in the interface, ask which team boundary it sits on before you write the ticket.",
        "Check navigation labels against the customer's vocabulary rather than the internal one.",
        "Give a design system one owner with authority across teams, or it will fragment along the same lines as the code.",
        "Reorganise deliberately if you want different architecture. Teams that never speak will not produce a joined-up flow."
      ],
      example: "A bank where current accounts, savings and mortgages each have a separate login and a separate password policy, because each was built by a different division.",
      numbers: "",
      pitfall: "Treated as fatalism. It describes a strong tendency, not a physical constraint, and design leadership exists partly to push back on it.",
      source: "Melvin E. Conway, 'How Do Committees Invent?', Datamation, April 1968; named by Fred Brooks in The Mythical Man-Month (1975).",
      verify: { status: "verified", note: "Wording and publication history confirmed against Conway's own site, which hosts the paper, including the HBR rejection and the April 1968 Datamation publication." },
      belongs: { verdict: "adjacent", why: "Organisational theory, but it is the standing explanation for design system fragmentation and for navigation shaped like an org chart." },
      related: [775, 780, 637]
    },
    {
      n: 247,
      title: "Gall's law",
      aka: [],
      oneLine: "Working complex systems evolve from working simple ones; big-bang designs fail.",
      demo: { none: "The law compares two histories rather than two artefacts, and the fact that separates them, that the big-bang version never worked, is an assertion a still picture can only label rather than show." },
      what: "John Gall, a paediatrician who wrote about how systems misbehave, put it in Systemantics (1975): a complex system that works is invariably found to have evolved from a simple system that worked. He added that a complex system designed from scratch never works and cannot be patched into working, and that you have to start again from a simple system that does.",
      why: "It is the argument against the eighteen-month redesign that launches in one release. It is also the argument for shipping a narrow design system rather than a complete one nobody adopts.",
      how: [
        "Ship the smallest version that genuinely works for one real task, then widen it.",
        "Run a redesign as a series of releases against live traffic rather than a single switch-over.",
        "Start a design system with the ten components already in use, not a theoretical set of eighty.",
        "When a large rebuild stalls, check whether there was ever a simple working version underneath it."
      ],
      example: "A design system that starts as colour, spacing and type tokens plus a button, and grows on demand, against one that arrives as a hundred components nobody asked for.",
      numbers: "",
      pitfall: "Used to argue against ever rewriting anything. Gall's point is about how complexity is reached, not that every legacy system deserves to survive.",
      source: "John Gall, General Systemantics: An Essay on How Systems Work, and Especially How They Fail (1975); reissued by Quadrangle in 1977 as Systemantics.",
      verify: { status: "verified", note: "Wording confirmed at page 71 of the 1975 book, cited with that page reference in the sourced Wikiquote entry for John Gall. An earlier draft gave the 1975 edition the subtitle 'How Systems Really Work and How They Fail'. That subtitle belongs to the 1986 second edition, and the title has been corrected." },
      belongs: { verdict: "adjacent", why: "Systems theory, but it directly shapes redesign strategy and how a design system should be rolled out." },
      related: [779, 982, 447]
    },
    {
      n: 248,
      title: "Curse of knowledge",
      aka: [],
      oneLine: "Once you know something, you cannot imagine not knowing it.",
      demo: {
        caption: "Same event, two messages. The first one works only if you already hold the team's model of the system.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Written from inside</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>Entity sync conflict: 409 on the canonical record. Resolve upstream and retry.</span><span class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">OK</span></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Written for a newcomer</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>Someone else edited this page while you were writing. Your version has been saved.</span><span class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Compare the two</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Keep mine</span></span></div></div></div></div></div>"
      },
      what: "Camerer, Loewenstein and Weber named it in the Journal of Political Economy in 1989. Better-informed people cannot set aside what they know when predicting what less-informed people will do, even when it costs them money to fail. Elizabeth Newton's 1990 Stanford dissertation gave the vivid version: tappers tapped a well-known tune on a table and predicted listeners would guess it about half the time. Listeners got 3 out of 120.",
      why: "It is the reason product teams write labels only they understand. You hear the tune in your head; the visitor hears tapping. It applies to jargon, to unlabelled icons, and to flows that make sense only if you already hold the internal model.",
      how: [
        "Test copy on someone who has never seen the product, and have them read it aloud.",
        "Replace internal nouns with the words customers use, taken from support tickets and site search logs.",
        "Label every icon except the handful everybody genuinely knows.",
        "Ask a newcomer to narrate their first five minutes, and explain nothing while they do."
      ],
      example: "Newton's tappers: 120 tunes tapped out, 3 correctly identified, against a predicted hit rate of about one in two.",
      numbers: "Newton (1990): 3 correct from 120 taps, roughly 2.5 per cent, against tappers' predicted 50 per cent.",
      pitfall: "Assuming an internal review round fixes it. Everyone internal carries the same curse, so only outsiders can break it.",
      source: "Colin Camerer, George Loewenstein and Martin Weber, 'The Curse of Knowledge in Economic Settings: An Experimental Analysis', Journal of Political Economy 97(5) (1989); Elizabeth Newton, doctoral dissertation, Stanford University (1990).",
      verify: { status: "verified", note: "The 1989 paper confirmed in the Journal of Political Economy, including the finding that market forces reduced the curse by about half without removing it. Newton's tappers-and-listeners study is a 1990 Stanford dissertation best known through Chip and Dan Heath's Made to Stick, so the 3-of-120 figure comes from secondary reporting of the thesis rather than a journal article." },
      belongs: { verdict: "adjacent", why: "Behavioural economics, but it is the named cause of most bad interface copy, unlabelled icons and unusable onboarding." },
      related: [663, 673, 599]
    },
    {
      n: 249,
      title: "Dunning-Kruger effect",
      aka: [],
      oneLine: "Popularly, the least able overrate themselves most; the statistics behind it are contested.",
      demo: {
        caption: "Almost everybody guesses they are near average. Set that flat line against real scores and the famous gap appears.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 164\"><text class=\"t\" x=\"2\" y=\"11\">percentile</text><path class=\"s-mute\" d=\"M34 18 V130 H310\"/><path class=\"s\" d=\"M40 124 L302 28\"/><text class=\"t\" x=\"226\" y=\"72\">actual score</text><path class=\"s-accent\" d=\"M40 62 C 120 58, 210 52, 302 44\"/><text class=\"t\" x=\"150\" y=\"40\">what people guess</text><path class=\"s-mute\" d=\"M62 116 V64\" stroke-dasharray=\"4 3\"/><text class=\"t\" x=\"68\" y=\"90\">the gap</text><text class=\"t\" x=\"34\" y=\"150\">least able</text><text class=\"t\" x=\"248\" y=\"150\">most able</text></svg></div>"
      },
      what: "Kruger and Dunning reported in 1999 that people scoring lowest on tests of grammar, logic and humour overestimated their rank by the widest margin. The popular version, that incompetent people believe they are experts, is much stronger than the paper. Since 2016 several groups have argued the pattern falls out of the arithmetic: nearly everyone guesses near average, and comparing a self-estimate against a score that forms part of the same comparison produces the familiar shape whether or not the psychological effect exists.",
      why: "There is no design action here that is not covered better elsewhere. If the point is that your team overestimates how clear its own work is, the curse of knowledge says so with cleaner evidence. If the point is that self-reported expertise makes a bad research screener, that is a method rule rather than a bias.",
      how: [
        "Do not screen research participants on self-rated skill. Use a task or a behavioural question instead.",
        "Do not cite this effect in a design argument. It will be challenged and the argument will go with it."
      ],
      example: "A recruitment screener that asks people to rate their own technical confidence out of five and then sorts them into novice and expert groups on that answer.",
      numbers: "",
      pitfall: "It gets used as an insult dressed up as science, usually aimed at users. That is a poor habit in a design team whatever the statistics turn out to say.",
      source: "Justin Kruger and David Dunning, 'Unskilled and Unaware of It', Journal of Personality and Social Psychology 77 (1999).",
      verify: { status: "disputed", note: "Original paper confirmed in JPSP 77. Challenged by Edward Nuhfer and colleagues (2016, 2017) and by Gilles Gignac and Marcin Zajenkowski, 'The Dunning-Kruger Effect Is (Mostly) a Statistical Artefact' (Intelligence, 2020). The debate is live. Dunkel, Nedelec and van der Linden (Intelligence 96, 2023) reran the analysis on a more representative sample and found a statistically significant effect, but one small enough that they questioned whether it means anything. A separate comment by Avram Hiller (Intelligence 97, 2023) argues that Gignac and Zajenkowski's recoding of an ordinal self-assessment onto an interval scale introduces error." },
      belongs: { verdict: "cut", why: "Not a design principle, the evidence is contested, and its main use in design conversation is to disparage users or colleagues. Item 248, the curse of knowledge, does the useful part of the job with sounder evidence." },
      related: [248, 953, 974]
    },
    {
      n: 250,
      title: "Survivorship bias",
      aka: [],
      oneLine: "Studying only what made it through hides the reason the rest did not.",
      demo: {
        caption: "Forty people started checkout. Only the eight who finished are in the survey, and they are the ones it worked for.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></div><span class=\"db-note\">32 abandoned the checkout. Never surveyed, never counted.</span><div class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--accent\"></span></div><span class=\"db-note db-note--accent\">8 reached the confirmation page, were asked, and said checkout was easy</span></div></div>"
      },
      what: "The standard illustration is Abraham Wald at the Statistical Research Group in 1943, working out aircraft vulnerability from damage data. Damage on returning aircraft clustered on the fuselage, with little around the engines, so the obvious move was to armour where the holes were. Wald reasoned the other way: hits were spread fairly evenly, so the clean areas on survivors were the areas where a hit stopped an aircraft coming back. The punchline everyone quotes, armour the engines, comes from later retellings. Wald's memoranda set out the estimates and stop short of telling the military what to do.",
      why: "Design research runs on survivors by default. Analytics contain only people who got far enough to be measured. Reviews come from people who completed the purchase. Best-practice galleries show sites that succeeded, never the identical sites that failed.",
      how: [
        "Study drop-off as well as completion: recordings of abandoned flows, exit surveys, failed site searches.",
        "Ask support and sales what people could not do, because those people never reached your funnel.",
        "When copying a successful competitor's pattern, go looking for a failed competitor using the same one.",
        "Recruit research participants who stopped using the product, not only current users."
      ],
      example: "A shop that surveys customers on the order confirmation page and concludes checkout is easy. Everyone who found it hard is missing from the sample.",
      numbers: "",
      pitfall: "The famous diagram of a bomber covered in red dots is a modern illustration, not Wald's. His memoranda are mathematical and contain no such picture, so do not present it as a wartime document.",
      source: "Abraham Wald, memoranda for the Statistical Research Group, Columbia University (1943).",
      verify: { status: "verified", note: "The memoranda are real. Bill Casselman's American Mathematical Society feature column 'The Legend of Abraham Wald' (June 2016) confirms that the survivorship reasoning is genuinely Wald's, but says there is very little evidence for the best-known parts of the popular story and that Wald said nothing about what the military should do. Casselman calls the memoranda severely technical, which is why the red-dot bomber diagram cannot be his." },
      belongs: { verdict: "adjacent", why: "Statistics, but it is the single most common sampling error in design research and analytics." },
      related: [977, 976, 235]
    },
    {
      n: 9250,
      title: "Goodhart's law",
      aka: [],
      oneLine: "When a measure becomes a target, it stops being a good measure.",
      demo: {
        caption: "Same article, same words. Splitting it across five screens multiplies the metric and makes the reading worse.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">One page</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i><i></i></div></div><span class=\"db-note\">900 words &middot; 1 page view</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Split across five</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-bar db-bar--thin\" style=\"width:56%\"></span><span class=\"db-btn db-btn--sm db-btn--ghost\">Next</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-bar db-bar--thin\" style=\"width:56%\"></span><span class=\"db-btn db-btn--sm db-btn--ghost\">Next</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-bar db-bar--thin\" style=\"width:56%\"></span><span class=\"db-btn db-btn--sm db-btn--ghost\">Next</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-bar db-bar--thin\" style=\"width:56%\"></span><span class=\"db-btn db-btn--sm db-btn--ghost\">Next</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-bar db-bar--thin\" style=\"width:56%\"></span><span class=\"db-btn db-btn--sm db-btn--quiet\">End</span></div></div><span class=\"db-note db-note--accent\">900 words &middot; 5 page views</span></div></div></div></div>"
      },
      what: "Charles Goodhart, then advising the Bank of England, wrote in 1975 that any observed statistical regularity tends to collapse once pressure is put on it for control purposes. The anthropologist Marilyn Strathern gave the short version in a 1997 paper on university audit: when a measure becomes a target, it ceases to be a good measure.",
      why: "Design work gets measured now, and measures get gamed. Set time on page as a target and someone slows the interface down. Set clicks as a target and someone splits one page into five. The metric improves and the product gets worse.",
      how: [
        "Pair every target metric with a guardrail that would move the wrong way if the target were gamed: conversion with refund rate, engagement with complaint volume.",
        "Measure the outcome the business actually wants rather than the proxy nearest to hand.",
        "Review a metric that starts improving fast without a matching change in the work.",
        "Do not tie one designer's performance to one number."
      ],
      example: "A publisher paginating an article across five screens to raise page views per session. Page views rise, reading falls, and the metric reports success.",
      numbers: "",
      pitfall: "Assumed to be about dishonesty. It happens with honest people, because the target quietly redefines what counts as good work.",
      source: "Charles Goodhart (1975), on UK monetary policy; short form from Marilyn Strathern, 'Improving Ratings: Audit in the British University System' (1997).",
      verify: { status: "verified", note: "Goodhart's 1975 formulation and Strathern's 1997 short version both confirmed. Strathern attributes the compact phrasing to Hoskin within her own paper, so it is a generalisation of Goodhart rather than his wording." },
      belongs: { verdict: "adjacent", why: "Economics, but it governs how design work is judged and how product metrics distort design decisions. Directly relevant to anyone working against OKRs or A/B test targets." },
      related: [977, 978, 976]
    },
    {
      n: 251,
      title: "Anchoring",
      aka: ["Anchoring and adjustment"],
      oneLine: "The first number people see pulls every later judgement towards it.",
      demo: {
        caption: "Both groups answered the same question. The only difference was the number a rigged wheel showed them first.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 154\"><text class=\"t\" x=\"2\" y=\"14\">median estimate: share of UN members that are African</text><text class=\"t\" x=\"34\" y=\"44\">wheel showed 10</text><path class=\"s\" d=\"M58 48 V62\"/><path class=\"s-mute\" d=\"M30 62 H306\"/><circle class=\"f-accent\" cx=\"99\" cy=\"62\" r=\"3.5\"/><text class=\"t\" x=\"76\" y=\"82\">answered 25%</text><path class=\"s-mute\" d=\"M99 88 V118\" stroke-dasharray=\"4 3\"/><text class=\"t\" x=\"185\" y=\"106\">wheel showed 65</text><path class=\"s\" d=\"M209 110 V124\"/><path class=\"s-mute\" d=\"M30 124 H306\"/><circle class=\"f-accent\" cx=\"154\" cy=\"124\" r=\"3.5\"/><text class=\"t\" x=\"131\" y=\"144\">answered 45%</text><text class=\"t\" x=\"28\" y=\"144\">0</text><text class=\"t\" x=\"286\" y=\"144\">100</text></svg></div>"
      },
      what: "Tversky and Kahneman demonstrated it in 1974. Participants watched a wheel of fortune rigged to stop on 10 or 65, then estimated what share of United Nations members were African countries. The group shown 10 gave a median estimate of 25 per cent; the group shown 65 gave a median of 45 per cent. The wheel carried no information at all, which is what makes it a bias rather than sensible inference.",
      why: "Every price, default quantity and 'from' figure sets a reference point for what follows. Show the annual plan first and the monthly one reads as expensive. Show the monthly first and the annual reads as a commitment.",
      how: [
        "Decide deliberately which number appears first on a pricing page, because one of them will anchor whether you planned it or not.",
        "Place the recommended plan where it is seen first, and label it as recommended.",
        "In estimation meetings, collect written estimates before anyone says a number aloud.",
        "Treat 'was' prices carefully. They only anchor honestly if the previous price was real, and UK pricing rules are specific about that."
      ],
      example: "Tversky and Kahneman's wheel of fortune: an anchor of 10 produced a median estimate of 25 per cent, an anchor of 65 produced 45 per cent, for the same question.",
      numbers: "Tversky and Kahneman (1974): anchor 10 gave a median estimate of 25 per cent; anchor 65 gave 45 per cent. The paper reports medians, not means.",
      pitfall: "Anchoring against a reference price that never existed. That is a deceptive pattern and, in the UK, a compliance problem as well as an ethical one.",
      source: "Amos Tversky and Daniel Kahneman, 'Judgment under Uncertainty: Heuristics and Biases', Science 185 (1974).",
      verify: { status: "verified", note: "Original study confirmed in Science 185, whose sentence reads 'the median estimates of the percentage of African countries in the United Nations were 25 and 45 for groups that received 10 and 65, respectively, as starting points'. An earlier draft of this entry called those figures means; they are medians and I have corrected all three places. Anchoring is among the better-replicated effects in the area: four anchoring studies were included in the first Many Labs replication project (Klein and colleagues, 2014) and all four found significant support." },
      belongs: { verdict: "adjacent", why: "Behavioural economics, but it decides the reading order and emphasis of any pricing page, comparison table or quantity default." },
      related: [255, 256, 684]
    },
    {
      n: 252,
      title: "Framing effect",
      aka: ["Gain and loss framing"],
      oneLine: "The same fact changes decisions depending on whether it is put as a gain or a loss.",
      demo: {
        caption: "Identical odds in both columns, worded two ways. The bars are the share of people who picked each option.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Put as lives saved</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">200 of 600 saved, for certain</span><div class=\"db-bar db-bar--accent\" style=\"width:72%\"></div><span class=\"db-note db-note--accent\">72%</span><span class=\"db-note\">One-third chance all 600 are saved</span><div class=\"db-bar\" style=\"width:28%\"></div><span class=\"db-note\">28%</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Put as lives lost</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">400 of 600 die, for certain</span><div class=\"db-bar\" style=\"width:22%\"></div><span class=\"db-note\">22%</span><span class=\"db-note\">One-third chance nobody dies</span><div class=\"db-bar db-bar--accent\" style=\"width:78%\"></div><span class=\"db-note db-note--accent\">78%</span></div></div></div></div>"
      },
      what: "Tversky and Kahneman published the Asian disease problem in Science in 1981. Offered a choice between saving 200 of 600 people for certain and a one-third chance of saving all of them, most people took the certain option. Given identical odds described as 400 dying for certain against a one-third chance nobody dies, most took the gamble. Same numbers, different wording, opposite choice.",
      why: "Every label, error message and summary line is a frame. '95 per cent of customers finish this in under two minutes' and 'one in twenty people get stuck here' state the same fact and set very different expectations.",
      how: [
        "Write the frame that lets the person decide well, then check the sentence is still true when flipped.",
        "Use positive framing for progress and capability, and plain factual framing for risk and money.",
        "Show both sides where the decision is consequential: what they get and what they give up.",
        "Do not use loss framing to create anxiety inside a purchase flow. That is a deceptive pattern."
      ],
      example: "The Asian disease problem itself: a large majority chose the certain option under the lives-saved frame, and a large majority chose the gamble under the deaths frame.",
      numbers: "Tversky and Kahneman (1981): about 72 per cent chose the certain option under the gain frame; about 78 per cent chose the gamble under the loss frame.",
      pitfall: "Framing is not a licence to mislead. If flipping the frame would change someone's decision, and you chose the frame to stop that happening, you are steering rather than designing.",
      source: "Amos Tversky and Daniel Kahneman, 'The Framing of Decisions and the Psychology of Choice', Science 211 (1981).",
      verify: { status: "verified", note: "Paper confirmed in Science 211, where the 72 and 78 per cent figures appear in brackets beside the two problems. The effect is among the better-replicated in the field: the first Many Labs project (Klein and colleagues, 2014) ran the Asian disease problem across 36 samples, found it significant in the expected direction in 86 per cent of them, and put the pooled effect at d = 0.60 to 0.62 against an original of 1.13. An earlier draft of this entry credited the replication to Many Labs 2 with a pooled g of 0.44; Many Labs 2's Tversky and Kahneman item was the jacket-and-calculator problem, not this one, so that citation has been removed." },
      belongs: { verdict: "adjacent", why: "Behavioural economics, but it is the mechanism behind every copy decision in error messages, comparison tables and pricing." },
      related: [253, 620, 674]
    },
    {
      n: 253,
      title: "Loss aversion",
      aka: [],
      oneLine: "Losses are usually said to weigh about twice as much as equivalent gains.",
      demo: {
        caption: "Equal steps either side of zero. The loss arm drops further than the gain arm climbs.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 178\"><path class=\"s-mute\" d=\"M20 88 H300\"/><path class=\"s-mute\" d=\"M160 14 V150\"/><text class=\"t\" x=\"166\" y=\"22\">value</text><text class=\"t\" x=\"24\" y=\"80\">losses</text><text class=\"t\" x=\"262\" y=\"104\">gains</text><path class=\"s-accent\" d=\"M20 152 C 60 148, 84 146, 100 139 C 128 126, 148 108, 160 88 C 172 76, 190 62, 220 57 C 250 52, 276 48, 300 44\"/><path class=\"s-mute\" d=\"M100 84 V92 M220 84 V92\"/><path class=\"s-mute\" d=\"M100 88 V139 M100 139 H160 M220 88 V57 M220 57 H160\" stroke-dasharray=\"4 3\"/><text class=\"t\" x=\"96\" y=\"170\">equal steps either side of zero</text></svg></div>"
      },
      what: "Kahneman and Tversky's prospect theory (1979) describes a value function steeper for losses than for gains. The two-to-one ratio everyone quotes is not in that paper: it comes from the coefficient of 2.25 that Tversky and Kahneman fitted thirteen years later, in the 1992 cumulative prospect theory paper. Gal and Rucker challenged the general claim in 2018, arguing the evidence does not support losses looming larger as a rule and that everything depends on context. Other researchers pushed back on their conclusion while accepting that the effect is contingent rather than universal.",
      why: "Where it holds, it changes how a decision reads. 'You will lose your saved work' lands differently from 'save your work'. It is also part of why redesigns meet resistance: people notice the one feature they lost more than the three they gained.",
      how: [
        "When shipping a change, name what people keep as well as what is new.",
        "Frame a trial ending around what access stops, but only where that is true and they can act on it.",
        "Do not plan a persuasion strategy around a two-to-one ratio. The ratio is not stable enough to build on.",
        "In migrations, give people a route back. What frightens them is irreversibility, not change."
      ],
      example: "A settings screen that warns 'you will lose your saved filters' rather than 'this will reset your settings'.",
      numbers: "The often-quoted 2:1 ratio traces to a single fitted coefficient, lambda = 2.25, in Tversky and Kahneman (1992). A meta-analysis of 607 estimates by Brown, Imai, Vieider and Camerer (Journal of Economic Literature, 2024) puts the mean at about 1.95, with a 95 per cent interval of 1.82 to 2.10. It is not a constant and should not be used as a planning number.",
      pitfall: "Manufacturing a loss that does not exist: a countdown that resets on refresh, or a warning about losing a discount that was never applied.",
      source: "Daniel Kahneman and Amos Tversky, 'Prospect Theory: An Analysis of Decision under Risk', Econometrica 47 (1979); the 2.25 coefficient from Amos Tversky and Daniel Kahneman, 'Advances in Prospect Theory: Cumulative Representation of Uncertainty', Journal of Risk and Uncertainty 5 (1992).",
      verify: { status: "disputed", note: "Prospect theory confirmed in Econometrica 47. An earlier draft credited the 2:1 ratio to the 1979 value function; the 2.25 estimate is from Tversky and Kahneman (1992) and the citation has been corrected. Flagged because David Gal and Derek Rucker, 'The Loss of Loss Aversion: Will It Loom Larger Than Its Gain?' (Journal of Consumer Psychology, 2018), argue the general principle is not supported by the evidence, with published replies disagreeing about how far that goes, and because meta-analytic estimates of the coefficient cluster below 2.25." },
      belongs: { verdict: "adjacent", why: "Behavioural economics, but it shapes how change, cancellation and trial-expiry copy should be written." },
      related: [254, 252, 995]
    },
    {
      n: 254,
      title: "Endowment effect",
      aka: [],
      oneLine: "People ask more to give up a thing than they would pay to get it.",
      demo: {
        caption: "Both screens ask for the same account. Only the second one asks you to walk away from something already yours.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Account first</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Create an account to start</span><span class=\"db-input\">you@example.com</span><span class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Sign up</span></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Account after</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Your three drafts</span><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--lg db-sq--accent\"></span><span class=\"db-sq db-sq--lg db-sq--mute\"></span><span class=\"db-sq db-sq--lg db-sq--mute\"></span></div><span class=\"db-label\">Create an account to keep them</span><span class=\"db-input\">you@example.com</span><span class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Sign up</span></span></div></div></div></div></div>"
      },
      what: "Richard Thaler named it in 1980. Kahneman, Knetsch and Thaler ran the mug experiments in 1990: people handed a mug wanted roughly twice as much to sell it as others were willing to pay for the same mug. Charles Plott and Kathryn Zeiler argued in 2005 that the gap is produced by how the experiments were run, and that with more careful training and elicitation it disappears. The argument has not settled.",
      why: "In products the design version is ownership before purchase. Free trials, saved baskets, configured accounts and uploaded content all create a sense of holding something before any money changes hands.",
      how: [
        "Let people build something before you ask for payment: a saved configuration, a draft, a shortlist.",
        "During a trial, show what they have made rather than only what the plan costs.",
        "At cancellation, be honest about what goes and let them export it. Ownership is not a hostage.",
        "Do not quote a ratio. The size of the effect is exactly what is disputed."
      ],
      example: "A design tool that lets you create and save files before signing up, so cancelling later means abandoning your own work.",
      numbers: "The original mug studies reported roughly a two-to-one gap between selling and buying prices. That figure is precisely what the methodological critique targets, so do not repeat it as settled.",
      pitfall: "Building a product whose only retention mechanism is the cost of leaving. That is a roach motel, not a strategy.",
      source: "Richard Thaler (1980), naming the effect; Daniel Kahneman, Jack Knetsch and Richard Thaler, 'Experimental Tests of the Endowment Effect and the Coase Theorem', Journal of Political Economy (1990).",
      verify: { status: "disputed", note: "Original studies confirmed. Charles Plott and Kathryn Zeiler (American Economic Review, 2005) argue the willingness-to-accept and willingness-to-pay gap comes from subject misconceptions and elicitation procedure, and found no gap under their preferred procedures. Contested rather than overturned." },
      belongs: { verdict: "adjacent", why: "Behavioural economics, but it explains why letting people create something before signing up works, and where that shades into a trap." },
      related: [253, 264, 986]
    },
    {
      n: 255,
      title: "Decoy effect",
      aka: ["Asymmetric dominance effect", "Attraction effect"],
      oneLine: "Adding a clearly worse third option shifts choice towards the option that beats it.",
      demo: {
        caption: "Print only costs the same as print plus web and gives less. It exists to make the third column obvious.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Two plans</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--nowrap db-row--top db-row--tight\"><div class=\"db-card\" style=\"flex:1 1 0;min-width:0\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Digital</span><span class=\"db-type\" style=\"font-size:15px\">&pound;59</span><span class=\"db-note\">web only</span></div></div><div class=\"db-card\" style=\"flex:1 1 0;min-width:0\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Print + digital</span><span class=\"db-type\" style=\"font-size:15px\">&pound;125</span><span class=\"db-note\">web + posted issues</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">A third plan added</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--nowrap db-row--top db-row--tight\"><div class=\"db-card\" style=\"flex:1 1 0;min-width:0\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Digital</span><span class=\"db-type\" style=\"font-size:15px\">&pound;59</span><span class=\"db-note\">web only</span></div></div><div class=\"db-card\" style=\"flex:1 1 0;min-width:0\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Print only</span><span class=\"db-type\" style=\"font-size:15px\">&pound;125</span><span class=\"db-note\">posted issues, no web</span></div></div><div class=\"db-card\" style=\"flex:1 1 0;min-width:0\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Print + digital</span><span class=\"db-type\" style=\"font-size:15px\">&pound;125</span><span class=\"db-note\">web + posted issues</span></div></div></div></div></div></div>"
      },
      what: "Huber, Payne and Puto reported it in 1982. Adding an option that is worse than one existing choice on every dimension, but not worse than the other, raises the share going to the option that dominates it. Two 2014 papers, by Frederick, Lee and Baskin and by Yang and Lynn, found the effect largely vanished with real products instead of hypothetical descriptions. Later work has reproduced it under narrower conditions with real stakes.",
      why: "It is the standard explanation for the three-column pricing table where the middle plan is made to look obviously better than one neighbour. Whether or not the mechanism holds, the layout decision is real and someone will ask you about it.",
      how: [
        "Design pricing tables so the recommended plan is genuinely the best value for the typical customer, then say so plainly.",
        "Do not add a plan whose only job is to look bad. People buy it.",
        "Test pricing layouts with real money where you can. The 2014 replications suggest hypothetical tests overstate the effect.",
        "Prefer an explicit recommendation to an implicit trick. It is clearer and it survives scrutiny."
      ],
      example: "A three-column pricing page where the basic plan costs only slightly less than the middle one but includes far less, so the middle plan reads as the obvious choice.",
      numbers: "",
      pitfall: "Building a plan nobody should buy. Real customers do buy it, then churn and tell people why.",
      source: "Joel Huber, John Payne and Christopher Puto, 'Adding Asymmetrically Dominated Alternatives: Violations of Regularity and the Similarity Hypothesis', Journal of Consumer Research 9 (1982).",
      verify: { status: "disputed", note: "Original 1982 paper confirmed. Replication is patchy: Frederick, Lee and Baskin (2014) and Yang and Lynn (2014) failed to find the effect with realistic stimuli, while Muller, Schliwa and Lehmann (2014) reproduced a prize-decoy version using real rather than hypothetical gambles. Treat it as condition-dependent." },
      belongs: { verdict: "adjacent", why: "Consumer research, but pricing table layout is a design job and this is the effect everyone cites when arguing about it." },
      related: [251, 221, 684]
    },
    {
      n: 256,
      title: "Default effect",
      aka: ["Status quo bias in defaults"],
      oneLine: "Whatever is preselected is what most people end up with.",
      demo: {
        caption: "Same two options, same wording. Only the preselected one differs, and it decides the answer for most people.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Opt-in default</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Organ donor register</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--open\"></span><span class=\"db-note\">Yes, add me</span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--accent\"></span><span class=\"db-note\">No, do not add me</span></div></div></div><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent\" style=\"width:42%\"></span><span class=\"db-note\">42% consented</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Opt-out default</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Organ donor register</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--accent\"></span><span class=\"db-note\">Yes, add me</span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--open\"></span><span class=\"db-note\">No, do not add me</span></div></div></div><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent\" style=\"width:82%\"></span><span class=\"db-note\">82% consented</span></div></div></div></div></div>"
      },
      what: "Johnson and Goldstein published 'Do Defaults Save Lives?' in Science in 2003, comparing organ donation consent under opt-in and opt-out systems and running an online experiment alongside. In the experiment, moving from opt-in to opt-out roughly doubled the share consenting. Across countries, presumed-consent systems show far higher registration. Most people take the path already laid out for them.",
      why: "The default is often the strongest design decision on a screen, and it is frequently made by accident. Whatever sits preselected becomes the answer for the majority who hold no strong view.",
      how: [
        "Choose every default deliberately and record why. An unconsidered default is still a default.",
        "Set it to what most people should reasonably want, not to what earns most.",
        "Never preselect marketing consent, add-ons or upgrades. In the UK and EU that is a legal problem as well as a trust one.",
        "Where the right answer genuinely depends on the person, ask instead of defaulting."
      ],
      example: "Johnson and Goldstein's comparison: consent rates in opt-out countries run far above those in comparable opt-in countries with similar attitudes to donation.",
      numbers: "In the Johnson and Goldstein online experiment, consent went from about 42 per cent under opt-in to about 82 per cent under opt-out.",
      pitfall: "Defaults that quietly serve the business. A preselected insurance add-on converts beautifully and destroys trust the moment it is noticed.",
      source: "Eric J. Johnson and Daniel Goldstein, 'Do Defaults Save Lives?', Science 302 (2003).",
      verify: { status: "verified", note: "Paper confirmed in Science 302. The 42 to 82 per cent figures refer to their online experiment rather than to national registration rates, and I have kept that distinction because secondary sources routinely blur it." },
      belongs: { verdict: "adjacent", why: "Behavioural economics, but defaults are set in the interface, by designers, on nearly every form and settings screen." },
      related: [583, 1000, 997]
    },
    {
      n: 257,
      title: "Social proof",
      aka: ["Informational social influence"],
      oneLine: "People look at what others did when they are unsure what to do.",
      demo: {
        caption: "Same songs, same start. With download counts visible one song runs away with it, and a different one in each world.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--top db-row--nowrap\"><div class=\"db-col db-col--tight db-fill\"><span class=\"db-note\">counts hidden</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">A</span><span class=\"db-bar\" style=\"width:78px\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">B</span><span class=\"db-bar\" style=\"width:66px\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">C</span><span class=\"db-bar\" style=\"width:72px\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">D</span><span class=\"db-bar\" style=\"width:60px\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">E</span><span class=\"db-bar\" style=\"width:68px\"></span></div></div><div class=\"db-col db-col--tight db-fill\"><span class=\"db-note\">counts shown, world 1</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">A</span><span class=\"db-bar db-bar--ink\" style=\"width:40px\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">B</span><span class=\"db-bar db-bar--ink\" style=\"width:26px\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">C</span><span class=\"db-bar db-bar--accent\" style=\"width:150px\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">D</span><span class=\"db-bar db-bar--ink\" style=\"width:18px\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">E</span><span class=\"db-bar db-bar--ink\" style=\"width:30px\"></span></div></div><div class=\"db-col db-col--tight db-fill\"><span class=\"db-note\">counts shown, world 2</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">A</span><span class=\"db-bar db-bar--ink\" style=\"width:34px\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">B</span><span class=\"db-bar db-bar--accent\" style=\"width:145px\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">C</span><span class=\"db-bar db-bar--ink\" style=\"width:14px\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">D</span><span class=\"db-bar db-bar--ink\" style=\"width:58px\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">E</span><span class=\"db-bar db-bar--ink\" style=\"width:22px\"></span></div></div></div></div>"
      },
      what: "Robert Cialdini named it in Influence (1984) as one of six principles of persuasion. The strongest experimental evidence in a design-like setting is Salganik, Dodds and Watts's 2006 study in Science: 14,341 people downloaded unknown songs in an artificial market, some seeing download counts and some not. Showing the counts made outcomes both more unequal and less predictable. Quality set the floor and the ceiling; social influence decided almost everything in between.",
      why: "Reviews, ratings, usage counts and client logos answer a question the page cannot answer for itself: is this normal, and did it work for people like me. They also amplify small early differences, which is why the first few reviews matter out of proportion.",
      how: [
        "Put proof next to the decision: a review beside the product, not a testimonial carousel on the homepage.",
        "Prefer counts and named sources to adjectives. 'Used by 400 UK practices' beats 'trusted by many'.",
        "Match the proof to the reader. A dentist wants to see other dentists.",
        "Publish only real reviews and real numbers. Fake reviews are unlawful in the UK under consumer protection rules."
      ],
      example: "Salganik, Dodds and Watts's MusicLab: with download counts visible, the same songs ended up ranked very differently across parallel, independently seeded markets.",
      numbers: "14,341 participants in the Salganik, Dodds and Watts experiment (Science, 2006).",
      pitfall: "Vague proof reads as no proof. 'Loved by thousands' with no source is wallpaper, and five stars from six reviews looks weaker than four stars from four hundred.",
      source: "Robert B. Cialdini, Influence: The Psychology of Persuasion (1984); Matthew Salganik, Peter Dodds and Duncan Watts, 'Experimental Study of Inequality and Unpredictability in an Artificial Cultural Market', Science 311 (2006).",
      verify: { status: "verified", note: "Cialdini's principle confirmed as one of the six in the 1984 book. The Salganik, Dodds and Watts study confirmed in Science 311, including the participant count and the finding that social influence raised both inequality and unpredictability of success." },
      belongs: { verdict: "adjacent", why: "Social psychology, but it decides where reviews, ratings and evidence sit on a page and what form they take." },
      related: [686, 258, 9261]
    },
    {
      n: 258,
      title: "Scarcity",
      aka: [],
      oneLine: "Limited availability raises perceived value, and manufactured limits are a deceptive pattern.",
      demo: {
        caption: "Same room, same page. The right states a limit you could check. The left states a feeling you cannot.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Manufactured</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Two nights in York</span><span class=\"db-note db-note--accent\">Selling fast &middot; only a few left</span><span class=\"db-note\">Prices rising &middot; book now</span><span class=\"db-btn\">Book</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Real and checkable</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Two nights in York</span><span class=\"db-note db-note--accent\">3 rooms left at this rate for 12 September</span><span class=\"db-note\">Rate held until Friday, 5pm</span><span class=\"db-btn\">Book</span></div></div></div></div></div>"
      },
      what: "Cialdini's sixth principle. The classic experiment is Worchel, Lee and Adewole (1975): identical biscuits were rated more desirable when there were two in the jar than ten, and more desirable again when supply had visibly dropped from plenty to few. Scarcity signals value, and it also signals that other people may know something you do not.",
      why: "Genuine scarcity is information the buyer needs. Two seats left at that fare, one room left at that rate, twelve places on the workshop. Telling them is a service. Inventing it is fraud.",
      how: [
        "State real stock, real deadlines and real capacity, and show where the limit comes from.",
        "If a deal ends, let it end. A countdown that resets on refresh destroys the credibility of every other number on the page.",
        "Prefer specific availability to urgency language: '3 left in stock' rather than 'selling fast'.",
        "Check countdown and stock wording against UK consumer protection rules before it ships."
      ],
      example: "Worchel, Lee and Adewole (1975): biscuits taken from a jar of two were rated more desirable than identical biscuits from a jar of ten.",
      numbers: "",
      pitfall: "False urgency is item 995 on this list and a documented deceptive pattern. Regulators in the UK and EU have acted on it, and customers spot it faster than most teams expect.",
      source: "Robert B. Cialdini, Influence (1984); Stephen Worchel, Jerry Lee and Akanbi Adewole, 'Effects of Supply and Demand on Ratings of Object Value', Journal of Personality and Social Psychology 32 (1975).",
      verify: { status: "verified", note: "Cialdini's principle and the Worchel, Lee and Adewole biscuit study both confirmed, including the finding that perceived value rose further when supply visibly changed from abundant to scarce. Worth knowing that this is a single small 1975 laboratory study of rated desirability, not a body of field evidence, so do not present it as more than an illustration." },
      belongs: { verdict: "adjacent", why: "Persuasion psychology, but stock, availability and deadline display are interface decisions, and this is where the ethical line sits." },
      related: [995, 257, 1001]
    },
    {
      n: 259,
      title: "Authority bias",
      aka: ["Cialdini's authority principle"],
      oneLine: "People give more weight to a judgement that comes from an apparent expert.",
      demo: {
        caption: "Same two credentials on both pages. On the right they sit beside the claim they support, not down in the footer.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Credentials in the footer</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Implants placed by a registered specialist</span><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i></div><div class=\"db-lines\"><i></i><i></i><i></i><i></i></div><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">GDC registered</span><span class=\"db-btn db-btn--sm db-btn--ghost\">CQC report</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Credentials beside the claim</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Implants placed by a registered specialist</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">GDC registered</span><span class=\"db-btn db-btn--sm db-btn--ghost\">CQC report</span></div><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i></div><div class=\"db-lines\"><i></i><i></i><i></i><i></i></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div></div>"
      },
      what: "Authority is one of Cialdini's six principles: credentials, uniforms and titles increase compliance. The evidence usually cited alongside it is Milgram's obedience work from the 1960s, and that evidence is contested. Gina Perry's archival research found Milgram excluded participants who doubted the setup and reported selectively, and Jerry Burger's 2009 partial replication produced a lower figure under modern ethical limits.",
      why: "In design this is about trust signals. The reader wants to know who is making a claim and why they should believe it. Named authors, professional registrations, regulator ratings and dated reviews all change how the same sentence reads.",
      how: [
        "Attribute claims to a named person or body with a date, rather than to the brand in general.",
        "Show real registrations and memberships where they exist and matter: the regulator's rating, the professional body, the certification number.",
        "Put the credential next to the claim it supports, not in the footer.",
        "Never display a badge you are not entitled to. It is checkable, and checking is the first thing a sceptical reader does."
      ],
      example: "A UK dental practice showing its Care Quality Commission rating and each clinician's General Dental Council registration number on the team page.",
      numbers: "",
      pitfall: "Authority decoration: stock 'as seen in' logos, invented awards, unnamed industry experts. It reads as a bluff because it usually is one.",
      source: "Robert B. Cialdini, Influence (1984). The Milgram obedience studies (1963 onwards) are the evidence most often cited for it, and are methodologically disputed.",
      verify: { status: "disputed", note: "Cialdini's authority principle is real and well documented. Flagged because the classic supporting evidence is contested: Gina Perry's Behind the Shock Machine (2013) documents selective reporting and participants who did not believe the setup, and Burger's 2009 replication in American Psychologist reached 150 volts with 70 per cent against Milgram's comparable 82.5 per cent." },
      belongs: { verdict: "adjacent", why: "Persuasion psychology, but credentials, trust marks and attribution are designed elements with a right and wrong way to place them." },
      related: [686, 257, 1004]
    },
    {
      n: 260,
      title: "Reciprocity",
      aka: [],
      oneLine: "A genuine gift creates a felt obligation to give something back.",
      demo: {
        caption: "The left holds the figure back until you hand over an email. The right gives it, then offers to send the breakdown.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Email first</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Your quote</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:17px\">&pound; &mdash;&mdash;</span><span class=\"db-note\">shown once you enter your email</span></div></div><span class=\"db-label\">Email</span><span class=\"db-input\">name@example.com</span><span class=\"db-btn\">Show me the price</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Answer first</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Your quote</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:17px\">&pound;1,200 to &pound;1,600</span><span class=\"db-note\">six pages, photography included</span></div></div><span class=\"db-label\">Email (optional)</span><span class=\"db-input\">name@example.com</span><span class=\"db-btn db-btn--ghost\">Send me the breakdown</span></div></div></div></div></div>"
      },
      what: "Cialdini's first principle. Give something first and people feel a pull to return it, often out of proportion to what they received. In interfaces the gift is the free tool, the useful guide, the working sample, the trial that does not ask for a card.",
      why: "It is the mechanism behind giving value before asking for anything, and it sets the tone of a whole site. A page that answers the question before asking for an email reads very differently from one that hides the answer behind a form.",
      how: [
        "Give the useful thing first and in full, rather than as a teaser with the answer gated.",
        "Make the gift usable on its own: a working calculator, a real checklist, an actual sample of the work.",
        "Ask for contact details after the value has landed, not before.",
        "Do not call something a gift and then invoice for it. The obligation only forms when the gift is real."
      ],
      example: "A postcode-based quote tool that gives a genuine indicative figure on screen, with the email capture offered afterwards for a copy of the breakdown.",
      numbers: "",
      pitfall: "Fake generosity. A gated 'free guide' that turns out to be three pages of sales copy produces the opposite of obligation.",
      source: "Robert B. Cialdini, Influence: The Psychology of Persuasion (1984).",
      verify: { status: "verified", note: "Confirmed as the first of Cialdini's six principles in the 1984 book. I have not cited a specific field experiment here because the studies usually quoted in design writing are second-hand and I did not read them this session." },
      belongs: { verdict: "adjacent", why: "Persuasion psychology, but it is the argument for putting the useful thing in front of the form rather than behind it." },
      related: [257, 261, 242]
    },
    {
      n: 261,
      title: "Commitment and consistency",
      aka: ["Foot in the door"],
      oneLine: "A small first commitment makes a larger matching one more likely.",
      demo: {
        caption: "Same enquiry. On the right one easy question comes first, and the rest is asked after the person has started.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Everything at once</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Full name</span><span class=\"db-input\">&nbsp;</span><span class=\"db-label\">Email</span><span class=\"db-input\">&nbsp;</span><span class=\"db-label\">Phone</span><span class=\"db-input\">&nbsp;</span><span class=\"db-label\">Address</span><span class=\"db-input\">&nbsp;</span><span class=\"db-label\">Postcode</span><span class=\"db-input\">&nbsp;</span><span class=\"db-label\">Property type</span><span class=\"db-input\">&nbsp;</span><span class=\"db-btn\">Get a quote</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One question first</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-bar db-bar--thin db-bar--accent\" style=\"width:24%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:70%\"></span></div><span class=\"db-note\">Step 1 of 4</span><span class=\"db-label\">Postcode</span><span class=\"db-input\">LS1 4AP</span><span class=\"db-btn\">Continue</span></div></div></div></div></div>"
      },
      what: "Cialdini's second principle: once people have taken a position or a small action, they behave in ways consistent with it. It is the mechanism behind the foot-in-the-door technique, where a small request precedes the real one.",
      why: "It is the design case for the small first step. A quote flow that asks for a postcode before it asks for anything else converts better than one that opens with fourteen fields, and it is not manipulative provided the first step is genuinely useful.",
      how: [
        "Open a long form with one easy, relevant question rather than a wall of fields.",
        "Acknowledge the first step with visible progress.",
        "Keep every step honest about what comes next. A small ask concealing a large one breaks trust the moment it is discovered.",
        "Let people change their mind. Consistency pressure that traps someone is a deceptive pattern, not a technique."
      ],
      example: "A quote flow that starts with a single postcode field, shows an indicative price range, and only then asks for contact details.",
      numbers: "",
      pitfall: "Using it to trap. Multi-step flows that reveal the price or the commitment only on the final screen exploit consistency rather than using it.",
      source: "Robert B. Cialdini, Influence (1984); the foot-in-the-door technique from Jonathan Freedman and Scott Fraser (1966).",
      verify: { status: "verified", note: "Confirmed as one of the six principles in Influence. Freedman and Fraser's 1966 foot-in-the-door study in the Journal of Personality and Social Psychology is the standard experimental reference; I have named it but did not read it this session." },
      belongs: { verdict: "adjacent", why: "Persuasion psychology, but it is the reasoning behind progressive forms and staged enquiry flows." },
      related: [618, 260, 990]
    },
    {
      n: 9261,
      title: "Liking",
      aka: ["Cialdini's liking principle"],
      oneLine: "People say yes more readily to those they like, and similarity is the biggest lever.",
      demo: {
        caption: "Two versions of the same promise. One is written by a legal department, the other by someone the reader could ring.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Corporate register</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-type\" style=\"font-size:13px\"><p>We endeavour to provide our valued clients with comprehensive maintenance solutions tailored to their individual requirements.</p></div><span class=\"db-note\">Client: a leading regional operator</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Plain, and recognisably for you</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-type\" style=\"font-size:13px\"><p>Tell us what has gone wrong. We come and look on Thursday, and you get a price before we start.</p></div><span class=\"db-note\">Customer: a fish and chip shop in Otley</span></div></div></div></div></div>"
      },
      what: "The missing one from Cialdini's six. Influence (1984) lists reciprocity, commitment and consistency, social proof, liking, authority and scarcity. Liking covers physical attractiveness, similarity, familiarity, compliments and cooperation towards a shared goal. The master list carries the other five and drops this one.",
      why: "It is the principle behind almost every photograph on a service website: who is in the picture, and does the visitor recognise someone like themselves. It also covers tone of voice, because a page that sounds like a person the reader would get on with outperforms one that sounds like a legal department.",
      how: [
        "Use real photographs of the actual people. Similarity only works when the person is recognisably real.",
        "Show customers who resemble the reader: same trade, same size of business, same town.",
        "Write in the second person and in the reader's own words rather than in corporate register.",
        "Name the shared goal early. Cooperation towards something is part of the principle, not decoration around it."
      ],
      example: "A local trade website with photographs of the actual team on actual jobs, against the same site using stock models in clean overalls.",
      numbers: "",
      pitfall: "Confusing likeability with vagueness. Warmth is not clarity, and a friendly page that never states the price is still failing the reader.",
      source: "Robert B. Cialdini, Influence: The Psychology of Persuasion (1984), one of the six principles.",
      verify: { status: "verified", note: "Confirmed that liking is one of the six principles in the 1984 book, alongside reciprocity, commitment and consistency, social proof, authority and scarcity. Cialdini added a seventh, unity, in Pre-Suasion (2016)." },
      belongs: { verdict: "adjacent", why: "Persuasion psychology like the rest of the Cialdini block already on this list. Its specific design relevance is photography direction, casting and tone of voice." },
      related: [257, 481, 850]
    },
    {
      n: 262,
      title: "Availability heuristic",
      aka: [],
      oneLine: "People judge how likely something is by how easily an example comes to mind.",
      demo: {
        caption: "Same four problems. On the left, the order they come to mind. On the right, how often they actually happened.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">What the team remembers</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:12px\">1. Angry email about the new colour</span><span class=\"db-type\" style=\"font-size:12px\">2. Card declined at checkout</span><span class=\"db-type\" style=\"font-size:12px\">3. Search finds nothing</span><span class=\"db-type\" style=\"font-size:12px\">4. Cannot find the phone number</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">What the logs count</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:12px\">Search finds nothing</span><span class=\"db-note\">214</span></div><span class=\"db-bar db-bar--ink\" style=\"width:100%\"></span><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:12px\">Cannot find the phone number</span><span class=\"db-note\">96</span></div><span class=\"db-bar db-bar--ink\" style=\"width:45%\"></span><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:12px\">Card declined at checkout</span><span class=\"db-note\">31</span></div><span class=\"db-bar db-bar--ink\" style=\"width:15%\"></span><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\" style=\"font-size:12px\">Angry email about the new colour</span><span class=\"db-note\">1</span></div><span class=\"db-bar db-bar--ink\" style=\"width:2px\"></span></div></div></div></div>"
      },
      what: "Tversky and Kahneman described it in Cognitive Psychology in 1973. Frequency and probability get estimated from how readily instances are retrieved. That usually tracks reality, and it breaks whenever something is memorable for a different reason: recent, vivid, or heavily reported.",
      why: "It is why one loud complaint reshapes a roadmap and one bad session in a usability test becomes the finding. It also shapes what users expect from your product, because they remember the last thing they used that looked similar.",
      how: [
        "Count your research findings. Note how many participants hit each problem and put the number in the report.",
        "Weigh support tickets by volume rather than by how memorable the angry one was.",
        "Watch for the last-thing-you-saw effect in critique. A pattern you admired this week is not evidence.",
        "When someone says a feature is missing, check the logs before believing the story you just heard."
      ],
      example: "A team that rebuilds a feature after one vocal customer email, then finds usage was already high and the change lowers it.",
      numbers: "",
      pitfall: "It cuts both ways. The team's own availability bias distorts prioritisation as much as the user's distorts perception.",
      source: "Amos Tversky and Daniel Kahneman, 'Availability: A Heuristic for Judging Frequency and Probability', Cognitive Psychology 5 (1973).",
      verify: { status: "verified", note: "Paper confirmed in Cognitive Psychology, volume 5, pages 207 to 232." },
      belongs: { verdict: "adjacent", why: "Judgement research, but it governs how design teams read research findings and prioritise work." },
      related: [263, 977, 968]
    },
    {
      n: 263,
      title: "Confirmation bias",
      aka: [],
      oneLine: "People look for evidence that fits what they already believe.",
      demo: {
        caption: "Both sides guessed even numbers rising by two. Only the right-hand triple could have shown the guess was wrong.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Triples that could only confirm</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">shown: 2 4 6</span><span class=\"db-note\">guess: even numbers, rising by two</span><span class=\"db-type db-type--mono\" style=\"font-size:13px\">4 6 8 &rarr; fits</span><span class=\"db-type db-type--mono\" style=\"font-size:13px\">10 12 14 &rarr; fits</span><span class=\"db-type db-type--mono\" style=\"font-size:13px\">20 22 24 &rarr; fits</span><span class=\"db-note\">guess still standing</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One triple that could disprove</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">shown: 2 4 6</span><span class=\"db-note\">guess: even numbers, rising by two</span><span class=\"db-type db-type--mono\" style=\"font-size:13px\">1 2 3 &rarr; fits</span><span class=\"db-note db-note--accent\">so the rule is any rising numbers</span></div></div></div></div>"
      },
      what: "Peter Wason described it in 1960 with the 2-4-6 task. He told people the triple 2-4-6 fitted a hidden rule and let them test their own triples. Most tested only triples that matched their guess, so they never discovered the rule was simply any three ascending numbers. His later selection task extended the finding and started the study of reasoning biases.",
      why: "Design research is unusually exposed to it. You already have a design you like, and it is very easy to run a session that produces support for it. The questions asked, the tasks chosen and which quotes reach the deck are all points where the bias operates.",
      how: [
        "Write the hypothesis and what would disprove it before the session, then go looking for that.",
        "Ask participants to break the design rather than to complete a happy path.",
        "Have someone who did not make the design run or observe the sessions.",
        "In an A/B test, set the metric and the stopping rule before you start, and do not peek."
      ],
      example: "Wason's 2-4-6 task: participants sure the rule was 'even numbers rising by two' tested only such triples and never tried 1-2-3.",
      numbers: "",
      pitfall: "Usability sessions that ask 'was that easy?' after every task. You have built a machine for collecting agreement.",
      source: "Peter C. Wason, 'On the Failure to Eliminate Hypotheses in a Conceptual Task', Quarterly Journal of Experimental Psychology 12 (1960).",
      verify: { status: "verified", note: "Wason's 1960 paper and the 2-4-6 task confirmed, including that the hidden rule was any ascending sequence. Wason's work predates the Tversky and Kahneman heuristics programme and is the origin of the term in this sense." },
      belongs: { verdict: "adjacent", why: "Reasoning research, but it is the main threat to the validity of any usability test or A/B test a designer runs." },
      related: [262, 971, 976]
    },
    {
      n: 264,
      title: "IKEA effect",
      aka: [],
      oneLine: "People value things more when they built them, provided they finished.",
      demo: {
        caption: "Your own finished build is worth nearly as much to you as an expert's. Abandon it halfway and the value goes.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><span class=\"db-note\">what people would pay for it</span><div class=\"db-col db-col--tight\"><span class=\"db-note\">expert-built, valued by a buyer</span><span class=\"db-bar\" style=\"width:76%\"></span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">you built it and finished it</span><span class=\"db-bar db-bar--accent\" style=\"width:72%\"></span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">you built it and gave up halfway</span><span class=\"db-bar db-bar--accent\" style=\"width:30%\"></span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">an amateur build somebody else made</span><span class=\"db-bar\" style=\"width:28%\"></span></div></div></div>"
      },
      what: "Norton, Mochon and Ariely published four experiments in 2012 in which people assembled IKEA boxes, folded origami and built Lego sets. Builders valued their own output close to what they believed expert work was worth, and expected others to agree. The effect disappeared when the task was abandoned or the creation destroyed, so completion is the condition.",
      why: "It has two faces. Users who configure, customise or set something up become attached to it. Designers who have spent three weeks on a concept also become attached to it, and that is the more useful half to know about yourself.",
      how: [
        "Let people customise something early: a saved view, a dashboard layout, a theme. Attachment follows effort.",
        "Make sure setup completes. Abandoned onboarding produces friction and no attachment at all.",
        "In critique, present two or three options so the conversation is about the work rather than about you.",
        "Set a date to review a concept against the brief with someone who did not make it."
      ],
      example: "Norton, Mochon and Ariely's origami study: builders valued their own crooked cranes about as highly as expert work, and non-builders did not.",
      numbers: "Four experiments (Norton, Mochon and Ariely, 2012).",
      pitfall: "Making users do pointless work so they value the result. Effort that serves no purpose is friction, and it produces no attachment unless it ends in something they own.",
      source: "Michael I. Norton, Daniel Mochon and Dan Ariely, 'The IKEA Effect: When Labor Leads to Love', Journal of Consumer Psychology 22(3) (2012).",
      verify: { status: "verified", note: "Paper confirmed in the Journal of Consumer Psychology 22(3), pages 453 to 460. The abstract states four studies covering IKEA boxes, origami and Lego, and the boundary condition that the effect vanishes when the task is not completed." },
      belongs: { verdict: "adjacent", why: "Consumer psychology, but it explains both why customisation drives retention and why designers defend their own concepts too hard in critique." },
      related: [254, 968, 265]
    },
    {
      n: 265,
      title: "Sunk-cost fallacy",
      aka: ["Escalation of commitment"],
      oneLine: "People keep going because of what they have already spent, not what remains.",
      demo: {
        caption: "The work still to do is the same length in both. Only the grey, which has already gone, differs.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Eight weeks in</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-bar db-bar--tall\" style=\"width:55%\"></span><span class=\"db-bar db-bar--tall db-bar--ink\" style=\"width:35%\"></span></div><span class=\"db-note\">8 weeks gone &middot; 6 weeks still to spend</span><span class=\"db-note db-note--accent\">team votes to finish it</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Same job, offered today</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-bar db-bar--tall db-bar--ink\" style=\"width:35%\"></span></div><span class=\"db-note\">nothing gone &middot; 6 weeks to spend</span><span class=\"db-note\">team votes not to start</span></div></div></div></div>"
      },
      what: "Arkes and Blumer set out the experimental evidence in 1985. Once money, time or effort has gone in, people continue at a higher rate than the remaining prospects justify. Their explanation is a rule against appearing wasteful, learned early and applied where it does not fit.",
      why: "Two design uses. Teams do it: a redesign obviously wrong at week eight gets finished because of the eight weeks. Products exploit it: streaks, part-complete profiles and accumulated points make leaving feel like forfeiting something.",
      how: [
        "Set kill criteria in writing at the start of a project, and review against them on a fixed date.",
        "In a design review, ask what you would do if the work so far did not exist.",
        "If you use streaks or progress, put the value in what the person gets rather than in what they would lose.",
        "Make cancellation easy. A product held together by sunk cost is one competitor away from empty."
      ],
      example: "A rebuild kept alive because of the money already spent, where finishing costs more than restarting with what has been learned.",
      numbers: "",
      pitfall: "Mistaking a real switching cost for the fallacy. Migrating data genuinely costs something. The fallacy is counting the money already gone.",
      source: "Hal R. Arkes and Catherine Blumer, 'The Psychology of Sunk Cost', Organizational Behavior and Human Decision Processes 35 (1985).",
      verify: { status: "verified", note: "Paper confirmed in Organizational Behavior and Human Decision Processes 35, pages 124 to 140, including the do-not-waste explanation the authors propose." },
      belongs: { verdict: "adjacent", why: "Decision research, but it is the named reason design projects run past the point of usefulness and the reason kill criteria exist." },
      related: [983, 264, 986]
    },
    {
      n: 266,
      title: "Unit bias",
      aka: [],
      oneLine: "People treat one serving as the right amount, whatever size the serving is.",
      demo: {
        caption: "One pretzel is one serving at either size, so the bigger unit means more eaten. The evidence is about food.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Small unit</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--centre\"><span class=\"db-sq\" style=\"width:30px;height:30px\"></span></div><span class=\"db-note\">one pretzel, taken as one</span><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent\" style=\"width:34%\"></span><span class=\"db-note\">total eaten by weight</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Large unit</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--centre\"><span class=\"db-sq\" style=\"width:62px;height:62px\"></span></div><span class=\"db-note\">one pretzel, taken as one</span><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent\" style=\"width:74%\"></span><span class=\"db-note\">total eaten by weight</span></div></div></div></div></div>"
      },
      what: "Geier, Rozin and Doros published it in Psychological Science in 2006. People took and ate considerably more by weight when the unit on offer was larger: bigger pretzels, bigger sweets, a larger serving spoon for M&Ms. They proposed that a single unit reads as the appropriate amount, which is why smaller portions cut intake. They also argued in the paper that unit bias is a general feature of human choice, though every experiment they ran was about eating.",
      why: "The evidence is food intake, and the authors' claim of generality was an argument rather than a test. The design-side idea people reach for, that a preset quantity becomes the quantity, is real, but that is the default effect and it has proper evidence for interfaces.",
      how: [
        "If you are setting a quantity stepper or a pack size, treat it as a default decision and design it as one.",
        "Do not cite a food-intake study as evidence about interface behaviour."
      ],
      example: "Quantity steppers that start at 1 rather than 0, and pack sizes offered as 10, 25 and 50 rather than as a free-text field.",
      numbers: "",
      pitfall: "Quoted in design decks as a general law of quantity perception. The published work is about eating.",
      source: "Andrew B. Geier, Paul Rozin and Gheorghe Doros, 'Unit Bias: A New Heuristic That Helps Explain the Effect of Portion Size on Food Intake', Psychological Science 17 (2006).",
      verify: { status: "verified", note: "Paper confirmed in Psychological Science 17(6), pages 521 to 525, along with its food-intake framing, the pretzel, sweet and serving-spoon manipulations, and the authors' own claim that unit bias is general to human choice. An earlier draft gave the page range as 523 to 525." },
      belongs: { verdict: "cut", why: "A real, well-conducted finding about food consumption. The authors claim it generalises, but they tested only eating and I found no study transferring it to interfaces. Everything a designer would use it for is covered by the default effect (256) and sensible defaults (583)." },
      related: [256, 583]
    },
    {
      n: 267,
      title: "Priming",
      aka: ["Semantic priming", "Social priming"],
      oneLine: "An earlier stimulus changes how the next one is processed, for a short window.",
      demo: {
        caption: "The headline is identical on both. The line directly above it decides what you expect the page to say next.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">After a warning</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Security alert</span><span class=\"db-type db-type--display\" style=\"font-size:19px\">What happens next</span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">After a welcome</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Your new account is ready</span><span class=\"db-type db-type--display\" style=\"font-size:19px\">What happens next</span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div></div>"
      },
      what: "Two very different literatures share this name. Semantic priming, from Meyer and Schvaneveldt (1971), is solid: seeing NURSE makes you recognise DOCTOR faster. Social or behavioural priming, where an unrelated concept changes behaviour, is the part that fell apart. Its best-known result, Bargh's 1996 finding that words about old age made students walk more slowly, failed to replicate when Doyen and colleagues repeated it in 2012 with automatic timing.",
      why: "The reliable version still matters. What someone reads or sees immediately before something frames how they read it, within the same page and the same few seconds. An image above a headline changes what the headline means.",
      how: [
        "Control what sits directly above and before the thing you want understood: the image, the eyebrow label, the first line.",
        "Keep the visual language of a flow consistent so each screen sets up the next.",
        "Do not build a strategy on unrelated behavioural priming. Words about luxury on a landing page will not make anyone spend more.",
        "If a study claims a subtle cue changed unrelated behaviour, check the year and the sample size before repeating it."
      ],
      example: "Meyer and Schvaneveldt (1971): people classify DOCTOR as a word faster after NURSE than after BUTTER.",
      numbers: "",
      pitfall: "Design articles still cite the elderly-walking study. It did not replicate, and repeating it costs you credibility with anyone who follows the literature.",
      source: "David Meyer and Roger Schvaneveldt (1971) for semantic priming; John Bargh, Mark Chen and Lara Burrows (1996) for the contested behavioural work.",
      verify: { status: "disputed", note: "Semantic priming is well established and widely replicated. Social and behavioural priming is the standing example of the replication crisis: Doyen and colleagues (PLOS ONE, 2012) failed to reproduce the elderly-walking effect using automated infrared timing, and Kahneman's September 2012 open letter warning priming researchers of a train wreck is on record via Nature." },
      belongs: { verdict: "adjacent", why: "Perception research with a genuine design use in sequencing and framing, once the discredited half is stripped out." },
      related: [212, 478, 682]
    },
    {
      n: 268,
      title: "Planning fallacy",
      aka: [],
      oneLine: "People underestimate how long their own work will take, even knowing their record.",
      demo: {
        caption: "The students' own worst case, 48.6 days, still came in under the 55.5 days their theses actually took.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><span class=\"db-note\">days to finish a thesis</span><div class=\"db-col db-col--tight\"><span class=\"db-note\">best case 27.4</span><span class=\"db-bar\" style=\"width:46%\"></span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">own prediction 33.9</span><span class=\"db-bar\" style=\"width:57%\"></span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">worst case 48.6</span><span class=\"db-bar\" style=\"width:81%\"></span></div><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">actually took 55.5</span><span class=\"db-bar db-bar--accent\" style=\"width:93%\"></span></div></div></div>"
      },
      what: "Kahneman and Tversky named it in 1979 and proposed the fix: take the outside view, estimating from what similar projects actually took rather than from your plan for this one. Buehler, Griffin and Ross measured it in 1994. Psychology students predicted an average of about 34 days to finish their theses and took about 55. Only around 30 per cent finished inside their own estimate, and even their worst-case estimates proved optimistic.",
      why: "Design work is chronically underestimated because the plan describes the happy path and the calendar contains everything else. Research recruitment slips, stakeholders go away, and the content is not ready.",
      how: [
        "Estimate from your own past projects of the same type, not from the task list for this one.",
        "Ask for a worst case as a separate number, then check it against history, because worst cases are optimistic too.",
        "Break work down, then add time for the integration you did not break down.",
        "Record actuals. Without a history of what things took, you have no outside view to use."
      ],
      example: "Buehler, Griffin and Ross (1994): mean prediction 33.9 days, mean actual 55.5 days, with roughly 30 per cent finishing inside their own prediction.",
      numbers: "Buehler, Griffin and Ross (1994): mean prediction 33.9 days, mean actual 55.5 days; best-case estimate 27.4 days, worst-case 48.6 days.",
      pitfall: "Adding a flat percentage to a bad estimate. The method is the problem, not the size of the number.",
      source: "Daniel Kahneman and Amos Tversky, 'Intuitive Prediction: Biases and Corrective Procedures', TIMS Studies in Management Science (1979); Roger Buehler, Dale Griffin and Michael Ross, Journal of Personality and Social Psychology 67 (1994).",
      verify: { status: "verified", note: "The 1994 study confirmed in the Journal of Personality and Social Psychology, volume 67, pages 366 to 381, including the 33.9 and 55.5 day means and the best and worst case figures. The term and the inside and outside view distinction come from Kahneman and Tversky (1979)." },
      belongs: { verdict: "adjacent", why: "Judgement research rather than design, but design timelines are estimated by designers and this is the named reason those estimates are wrong." },
      related: [982, 944, 9236]
    }
  ]
};
