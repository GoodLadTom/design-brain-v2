window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[15] = {
  n: 15,
  slug: "ia-wayfinding",
  title: "Information architecture and wayfinding",
  blurb: "How content is grouped, named, linked and found, and how people work out where they are.",
  intro: "This family of ideas answers two questions: where does everything go, and how does a person know where they are. Most of it comes from two places. Library and information science supplied classification, controlled vocabularies, metadata and facets, which Louis Rosenfeld and Peter Morville pulled into web work in 1998 with Information Architecture for the World Wide Web. Urban design supplied the rest, chiefly Kevin Lynch's 1960 study of how people build mental maps of cities, later carried across to screens. A working designer needs this because navigation problems are almost never navigation problems. They are grouping and naming problems that surface as a menu nobody can use.",
  sources: [
    "Louis Rosenfeld, Peter Morville and Jorge Arango, Information Architecture: For the Web and Beyond, 4th edition (2015)",
    "Richard Saul Wurman, Information Anxiety (1989) and Information Architects (1996)",
    "S. R. Ranganathan, Colon Classification (1933), with M. P. Satija and J. Singh, Colon Classification: A Requiem, DESIDOC Journal of Library and Information Technology 33(4), 265-276 (2013) for its publication history",
    "Kevin Lynch, The Image of the City (1960)",
    "Mark A. Foltz, Designing Navigable Information Spaces, MIT master's thesis (1998)",
    "Paul Arthur and Romedi Passini, Wayfinding: People, Signs, and Architecture (1992)",
    "Marvin Levine, You-Are-Here Maps: Psychological Considerations, Environment and Behavior 14(2), 221-237 (1982)",
    "Kevin Larson and Mary Czerwinski, Web Page Design: Implications of Memory, Structure and Scent for Information Retrieval, CHI 98 (1998)",
    "Jakob Nielsen and Darrell Sano, SunWeb: user interface design for Sun Microsystems' internal web (1994)",
    "Donna Maurer, Card-Based Classification Evaluation, Boxes and Arrows (2003); Dave O'Brien, Tree Testing, Boxes and Arrows (2009)",
    "Peter Morville, Ambient Findability (2005)",
    "Jesse James Garrett, A Visual Vocabulary for Describing Information Architecture and Interaction Design, v1.0 (2000) and v1.1b (2002)",
    "Tim Berners-Lee, Cool URIs Don't Change, W3C style guide (1998)",
    "Jakob Nielsen, URL as UI, Alertbox (March 1999)",
    "Jeffrey Veen, Doing a Content Inventory, Adaptive Path (2002); Kristina Halvorson, Content Strategy for the Web (2009)",
    "Mike Atherton and Carrie Hane, Designing Connected Content (2017)",
    "Brad Frost, Atomic Design (2016)",
    "Stewart Brand, How Buildings Learn (1994), The Clock of the Long Now (1999) and Pace Layering, Journal of Design and Science (2018)",
    "ANSI/NISO Z39.19-2005 (R2010), Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies",
    "Dublin Core Metadata Initiative, Metadata Basics",
    "sitemaps.org, Sitemaps XML format protocol 0.9"
  ],
  entries: [

    {
      n: 637,
      title: "Location, alphabet, time, category, hierarchy (LATCH)",
      aka: ["Five hat racks"],
      oneLine: "Richard Saul Wurman's claim that information can be arranged five ways and no more.",
      demo: {
        caption: "The same five objects ordered five ways. Nothing changes but the rule, and the rule is what readers learn to use.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--top db-row--nowrap db-row--between\"><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Location</span><span class=\"db-type\" style=\"font-size:12px\">Chair <span class=\"db-note\">dk</span></span><span class=\"db-type\" style=\"font-size:12px\">Stool <span class=\"db-note\">fi</span></span><span class=\"db-type\" style=\"font-size:12px\">Lamp <span class=\"db-note\">it</span></span><span class=\"db-type\" style=\"font-size:12px\">Vase <span class=\"db-note\">jp</span></span><span class=\"db-type\" style=\"font-size:12px\">Rug <span class=\"db-note\">tr</span></span></div><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Alphabet</span><span class=\"db-type\" style=\"font-size:12px\">Chair</span><span class=\"db-type\" style=\"font-size:12px\">Lamp</span><span class=\"db-type\" style=\"font-size:12px\">Rug</span><span class=\"db-type\" style=\"font-size:12px\">Stool</span><span class=\"db-type\" style=\"font-size:12px\">Vase</span></div><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Time</span><span class=\"db-type\" style=\"font-size:12px\">Rug <span class=\"db-note\">1930</span></span><span class=\"db-type\" style=\"font-size:12px\">Chair <span class=\"db-note\">1954</span></span><span class=\"db-type\" style=\"font-size:12px\">Stool <span class=\"db-note\">1961</span></span><span class=\"db-type\" style=\"font-size:12px\">Lamp <span class=\"db-note\">1972</span></span><span class=\"db-type\" style=\"font-size:12px\">Vase <span class=\"db-note\">1988</span></span></div><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Category</span><span class=\"db-type\" style=\"font-size:12px\">Chair <span class=\"db-note\">seat</span></span><span class=\"db-type\" style=\"font-size:12px\">Stool <span class=\"db-note\">seat</span></span><span class=\"db-type\" style=\"font-size:12px\">Lamp <span class=\"db-note\">light</span></span><span class=\"db-type\" style=\"font-size:12px\">Rug <span class=\"db-note\">textile</span></span><span class=\"db-type\" style=\"font-size:12px\">Vase <span class=\"db-note\">ceramic</span></span></div><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Hierarchy</span><span class=\"db-type\" style=\"font-size:12px\">Chair <span class=\"db-note\">900</span></span><span class=\"db-type\" style=\"font-size:12px\">Rug <span class=\"db-note\">400</span></span><span class=\"db-type\" style=\"font-size:12px\">Lamp <span class=\"db-note\">180</span></span><span class=\"db-type\" style=\"font-size:12px\">Stool <span class=\"db-note\">120</span></span><span class=\"db-type\" style=\"font-size:12px\">Vase <span class=\"db-note\">60</span></span></div></div></div>"
      },
      what: "Wurman argued that however varied content looks, the schemes available for arranging it reduce to five: by place, by letter, by date, by kind, and by a ranking along some shared measure. He published the idea as the five hat racks in Information Anxiety (1989), where the fifth was continuum. In Information Architects (1996) he renamed continuum as hierarchy and the set became the LATCH acronym. The value is not the number five. It is that choosing a scheme becomes a decision you make on purpose rather than one that happens to you.",
      why: "Naming the scheme out loud stops you inventing a sixth one that is really two half-schemes stapled together. It also tells the reader what to expect. Once someone works out that a list is alphabetical, they stop hunting for meaning in the order and just scan.",
      how: [
        "Write down which of the five each menu, list and filter uses, before you draw it.",
        "Offer the same content under two schemes rather than compromising one scheme to serve both.",
        "Only rank things (hierarchy) when there is a shared measure to rank by, such as price, distance or date.",
        "Treat alphabetical order as the choice for long lists where people already know the exact name."
      ],
      example: "A supermarket: the store directory at the door organises by location, the aisles by category, and the shelf edge often ranks by price or pack size. Three schemes in one building, each one honest about what it is.",
      numbers: "",
      pitfall: "Hybrid menus. Mixing topics, tasks and audiences in a single list feels generous and forces the reader to scan every item, because there is no rule that predicts where anything sits.",
      source: "Richard Saul Wurman, Information Anxiety (1989), five hat racks with continuum as the fifth; Information Architects (1996), where continuum becomes hierarchy and the LATCH acronym appears.",
      verify: {
        status: "verified",
        note: "The 1989 set (category, time, location, alphabet, continuum) and the 1996 change of continuum to hierarchy under the LATCH name are set out on the InfoVis:Wiki Five Hat Racks page, which quotes Wurman directly: he can only organise by LATCH, and has tried a thousand times to find another way. Wurman's own site lists Information Anxiety (1989) and Information Architects (1996) and names LATCH among his signature theories. The 1989 book is also cited in Rosenfeld, Morville and Arango's Information Architecture, 4th edition."
      },
      belongs: {
        verdict: "core",
        why: "It is the shortest complete checklist for the first decision in any structure job, and it is cheap enough to run in your head."
      },
      related: [638, 641, 648, 9637]
    },

    {
      n: 638,
      title: "Taxonomy",
      aka: ["Classification scheme", "Organisation structure"],
      oneLine: "The named hierarchy of categories that decides where each piece of content belongs.",
      demo: {
        caption: "The menu shows four doors. The taxonomy underneath has to hold every page, including the ones nobody argues about.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">What the menu shows</span><div class=\"db-stage db-stage--tight\"><div class=\"db-nav\"><b>Treatments</b><span>Fees</span><span>About</span><span>Contact</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">What the taxonomy holds</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 296 190\"><text class=\"t\" x=\"8\" y=\"16\">Treatments</text><text class=\"t\" x=\"24\" y=\"30\">Preventive</text><text class=\"t\" x=\"40\" y=\"44\">Hygienist visit</text><text class=\"t\" x=\"24\" y=\"58\">Restorative</text><text class=\"t\" x=\"40\" y=\"72\">Crowns and bridges</text><text class=\"t\" x=\"8\" y=\"92\">Fees</text><text class=\"t\" x=\"24\" y=\"106\">Price list</text><text class=\"t\" x=\"24\" y=\"120\">Payment plans</text><text class=\"t\" x=\"8\" y=\"140\">About</text><text class=\"t\" x=\"24\" y=\"154\">The team</text><text class=\"t\" x=\"24\" y=\"168\">Complaints procedure</text><text class=\"t\" x=\"8\" y=\"188\">Contact</text></svg></div></div></div>"
      },
      what: "A taxonomy is the classification itself: the parent and child categories, what goes in each, and the rule for deciding. It is not the same as the labels on screen and not the same as the navigation menu that exposes part of it, although on small projects all three collapse into one artefact. Rosenfeld, Morville and Arango treat organisation, labelling, navigation and search as four separate systems for exactly this reason.",
      why: "A written taxonomy gives you and the client one place to argue about meaning before anyone builds a menu. It also outlives redesigns. The visual navigation gets replaced every few years; the grouping underneath tends to survive.",
      how: [
        "Keep the taxonomy in a document or spreadsheet, not only in the navigation bar of your design file.",
        "Use one principle of division per level, so a branch is never split by audience while its sibling is split by product.",
        "Write a one-line inclusion rule for every category, so a future editor knows what belongs.",
        "Populate it with real content, awkward items first, before you show anyone a menu."
      ],
      example: "The chapter and section structure of a printed reference book is a taxonomy. The running heads are its labels, and the index at the back is a separate route to the same content.",
      numbers: "",
      pitfall: "Designing the menu first and calling it the taxonomy. A menu shows a dozen items; the taxonomy has to hold everything, including the pages nobody wants to discuss.",
      source: "Rosenfeld, Morville and Arango, Information Architecture: For the Web and Beyond, 4th edition (2015), chapter 6.",
      verify: {
        status: "verified",
        note: "Read the text of the 4th edition, which separates organisation systems from labelling, navigation and search systems, and covers exact and ambiguous schemes, hierarchy, hypertext and database structures in chapter 6."
      },
      belongs: {
        verdict: "core",
        why: "Every navigation, filter and search result in a product is a view onto a taxonomy, whether one was designed deliberately or not."
      },
      related: [637, 639, 644, 647]
    },

    {
      n: 639,
      title: "Controlled vocabulary",
      aka: ["Authority file", "Thesaurus", "Synonym ring"],
      oneLine: "An agreed list of terms, with rules, so one idea is always described by the same word.",
      demo: {
        caption: "Three words people type, one term the system uses. The links above, below and beside record how the terms relate.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 610 164\"><text class=\"t\" x=\"10\" y=\"26\">variants people type</text><rect class=\"s-mute\" x=\"10\" y=\"36\" width=\"132\" height=\"22\" rx=\"2\"/><text class=\"t\" x=\"20\" y=\"51\">jobs</text><rect class=\"s-mute\" x=\"10\" y=\"68\" width=\"132\" height=\"22\" rx=\"2\"/><text class=\"t\" x=\"20\" y=\"83\">vacancies</text><rect class=\"s-mute\" x=\"10\" y=\"100\" width=\"132\" height=\"22\" rx=\"2\"/><text class=\"t\" x=\"20\" y=\"115\">opportunities</text><path class=\"s-mute\" d=\"M142 47 C 180 47, 190 79, 224 79\"/><path class=\"s-mute\" d=\"M142 79 H224\"/><path class=\"s-mute\" d=\"M142 111 C 180 111, 190 79, 224 79\"/><path class=\"f-mute\" d=\"M232 79 l-8 -4 v8 z\"/><text class=\"t\" x=\"168\" y=\"70\">use</text><rect class=\"s-accent\" x=\"232\" y=\"62\" width=\"150\" height=\"34\" rx=\"2\"/><text class=\"t\" x=\"244\" y=\"78\">Careers</text><text class=\"t\" x=\"244\" y=\"90\">preferred term</text><rect class=\"s-mute\" x=\"232\" y=\"10\" width=\"150\" height=\"22\" rx=\"2\"/><text class=\"t\" x=\"244\" y=\"25\">Working here</text><path class=\"s-mute\" d=\"M307 62 V38\"/><path class=\"f-mute\" d=\"M307 32 l-4 7 h8 z\"/><text class=\"t\" x=\"312\" y=\"52\">broader</text><path class=\"s-mute\" d=\"M307 96 L258 130\"/><path class=\"s-mute\" d=\"M307 96 L398 130\"/><text class=\"t\" x=\"312\" y=\"116\">narrower</text><rect class=\"s-mute\" x=\"180\" y=\"130\" width=\"140\" height=\"22\" rx=\"2\"/><text class=\"t\" x=\"190\" y=\"145\">Graduate scheme</text><rect class=\"s-mute\" x=\"336\" y=\"130\" width=\"140\" height=\"22\" rx=\"2\"/><text class=\"t\" x=\"346\" y=\"145\">Apprenticeships</text><path class=\"s-mute\" d=\"M382 79 H424\"/><path class=\"f-mute\" d=\"M430 79 l-8 -4 v8 z\"/><text class=\"t\" x=\"388\" y=\"70\">related</text><rect class=\"s-mute\" x=\"430\" y=\"68\" width=\"170\" height=\"22\" rx=\"2\"/><text class=\"t\" x=\"440\" y=\"83\">Employee benefits</text></svg></div>"
      },
      what: "Vocabulary control runs on a ladder. A synonym ring treats a set of words as equivalent. An authority file names one preferred term and points variants at it. Add broader and narrower relationships and you have a classification scheme. Add associative see-also links between concepts and you have a thesaurus. The US standard for building these, ANSI/NISO Z39.19-2005, covers lists, synonym rings, taxonomies and thesauri, and defines the preferred and non-preferred term relationship along with broader, narrower and related term links.",
      why: "It lets one person's word reach another person's content. Search can quietly expand a query through the synonym ring, filters stay consistent because there is only one approved term per idea, and a writer stops having to guess whether we say holiday or vacation this week.",
      how: [
        "Start with a synonym ring for search, which is cheap, before considering a full thesaurus.",
        "Pick one preferred term per concept and record the variants people actually type.",
        "Mine search logs, card sorts and customer emails for the variants rather than inventing them.",
        "Name an owner. An unmaintained vocabulary rots faster than the content it describes."
      ],
      example: "The ERIC Thesaurus for education, cited in the IA book as a source of ready-made labels: look up scholarship and you get the preferred term plus its broader, narrower and related terms.",
      numbers: "",
      pitfall: "Building a thesaurus the size of the content it describes. Most projects need a synonym ring and a short authority file, and get talked into a structure nobody has the staff to maintain.",
      source: "ANSI/NISO Z39.19-2005 (R2010); Rosenfeld, Morville and Arango, Information Architecture, 4th edition (2015), chapter 10 for the vocabulary ladder and chapter 7 for the ERIC example.",
      verify: {
        status: "verified",
        note: "Confirmed the Z39.19-2005 title, its 2010 reaffirmation and its coverage of lists, synonym rings, taxonomies and thesauri against NISO and standards summaries; the IA 4th edition lists the same standard by its full title among its recommended resources. The synonym ring definition and the ladder up to thesauri are read from chapter 10 of the book. The ERIC Thesaurus example with its entry for scholarship is in chapter 7, not chapter 10, and the source line has been corrected."
      },
      belongs: {
        verdict: "core",
        why: "Label consistency is a design output, and a controlled vocabulary is the only thing that keeps it consistent once more than one person writes copy."
      },
      related: [640, 644, 646, 9646]
    },

    {
      n: 640,
      title: "Metadata",
      aka: ["Data about data", "Content attributes"],
      oneLine: "Structured facts attached to content so it can be filtered, sorted, related and reused.",
      demo: {
        caption: "Every line on the left is a field. The filter rail on the right is generated from them, not drawn by hand.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--nowrap\"><div class=\"db-card\"><span class=\"db-label\">One recipe record</span><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Cuisine</span><span class=\"db-type\" style=\"font-size:12px\">Thai</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Course</span><span class=\"db-type\" style=\"font-size:12px\">Main</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Cook time</span><span class=\"db-type\" style=\"font-size:12px\">25 min</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Diet</span><span class=\"db-type\" style=\"font-size:12px\">Vegan</span></div></div></div><span class=\"db-arrow\">&#8594;</span><div class=\"db-ui\"><span class=\"db-label\">Filter rail, generated</span><div class=\"db-col db-col--tight\"><span class=\"db-note\">Cuisine (6)</span><span class=\"db-note\">Course (4)</span><span class=\"db-note\">Cook time (3)</span><span class=\"db-note\">Diet (5)</span></div></div></div></div>"
      },
      what: "Metadata is descriptive data about a thing: title, creator, date, format, subject, rights. Attach it to content and you can generate filters, sort orders, related-item rails and syndication feeds instead of hand-building each one. The Dublin Core Metadata Element Set, first drafted at a 1995 meeting in Dublin, Ohio, is the best known general scheme: fifteen elements covering Creator, Contributor, Publisher, Title, Date, Language, Format, Subject, Description, Identifier, Relation, Source, Type, Coverage and Rights.",
      why: "Metadata changes the question from where do I put this to how do I describe this. The second question scales, because one well-described item can appear in many views without being duplicated or moved.",
      how: [
        "Specify the fields before the content management system is chosen, not after.",
        "Make every field earn its place by naming the interface it powers: a facet, a sort, a badge, a related-items rule.",
        "Use a controlled vocabulary for any field that will drive a filter.",
        "Delete fields nobody fills in. Half-populated metadata produces filters that hide good content."
      ],
      example: "A recipe site where each recipe carries cuisine, course, cook time and dietary flags. The filter rail is then generated from the data rather than designed page by page.",
      numbers: "Dublin Core Metadata Element Set: fifteen elements, first drafted 1995.",
      pitfall: "Fields that only the person who specified them understands. If an editor has to stop and work out what a field means, the data will be wrong and the filter will lie.",
      source: "Dublin Core Metadata Initiative; Rosenfeld, Morville and Arango, Information Architecture, 4th edition (2015), chapter 10.",
      verify: {
        status: "verified",
        note: "Element count, element names and the 1995 Dublin, Ohio meeting checked against the Dublin Core Metadata Initiative's own Metadata Basics page. Metadata's role as an IA component checked against chapter 10 of the IA 4th edition."
      },
      belongs: {
        verdict: "core",
        why: "It came from library cataloguing, but in digital work the designer specifying a filter rail or a card component is specifying metadata, so it belongs in the design conversation."
      },
      related: [639, 641, 658, 607]
    },

    {
      n: 641,
      title: "Faceted classification",
      aka: ["Analytico-synthetic classification", "PMEST"],
      oneLine: "Describe a thing along several independent dimensions instead of filing it in one place.",
      demo: {
        caption: "Left: the drill has one address. Right: brand, power and colour combine in any order and every route reaches it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">One fixed tree</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 296 152\"><text class=\"t\" x=\"8\" y=\"16\">Catalogue</text><text class=\"t\" x=\"24\" y=\"34\">Power tools</text><text class=\"t\" x=\"40\" y=\"52\">Drills</text><rect class=\"s-accent\" x=\"50\" y=\"60\" width=\"140\" height=\"20\" rx=\"2\"/><text class=\"t\" x=\"58\" y=\"74\">Acme cordless drill</text><text class=\"t\" x=\"24\" y=\"100\">Hand tools</text><text class=\"t\" x=\"24\" y=\"118\">Garden</text><path class=\"s-mute\" d=\"M8 130 H288\"/><text class=\"t\" x=\"8\" y=\"146\">one address; nothing starts from Acme</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Independent facets</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Brand</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Acme 24</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Bosch 18</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Elu 9</span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Power</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Cordless 33</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Corded 18</span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Colour</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Green 12</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Grey 30</span></div></div><span class=\"db-note db-note--accent\">1 result: Acme cordless drill</span></div></div></div></div>"
      },
      what: "S. R. Ranganathan's Colon Classification, first published in 1933, built subject descriptions by combining independent facets rather than reading down one fixed tree. The five universal categories came later: he announced the theory of five and only five fundamental categories in 1952, and they were named Personality, Matter, Energy, Space and Time, the PMEST formula, in the fourth edition of Colon Classification that same year. The old question is where do I put this. The faceted question is how do I describe this. On screen the answer is the filter rail, where brand, size, colour and price combine freely.",
      why: "Facets let people arrive from any direction. Someone who knows the brand and someone who only knows the budget can both narrow the same set without you predicting which route they take. It also removes the argument about which single parent category an item belongs to.",
      how: [
        "Make each facet genuinely independent. If choosing one value in facet A empties facet B, they are one facet.",
        "Use business facets that match how people shop or search, such as topic, product, document type, audience, geography and price.",
        "Show counts against values so people can see where the content actually is.",
        "Keep facet values in a controlled vocabulary, or the same idea will appear twice with different spellings."
      ],
      example: "A Colon Classification call number such as L,45;421:6;253:f.44'N5, where the punctuation between the segments marks which facet each one is. Only in the early editions was the colon the sole connector; from the fourth edition each category got its own indicator digit. The same combining logic drives the filter panel on any large retail catalogue.",
      numbers: "Colon Classification first published 1933; the five fundamental categories named as PMEST in its fourth edition, 1952.",
      pitfall: "Facets built from the internal org chart. Ranganathan's universal categories are not what practitioners use either: the IA book says that in its authors' experience the faceted approach has great value but Ranganathan's universal facets do not get used, and lists the common business facets as topic, product, document type, audience, geography and price.",
      source: "S. R. Ranganathan, Colon Classification (Madras Library Association, 1933); M. P. Satija and J. Singh, Colon Classification: A Requiem, DESIDOC Journal of Library and Information Technology 33(4), 265-276 (2013); Rosenfeld, Morville and Arango, Information Architecture, 4th edition (2015), chapter 10.",
      verify: {
        status: "verified",
        note: "Corrected. An earlier draft dated PMEST to the 1933 first edition. Satija and Singh's history of the scheme states that after a long quest to generalise the facets Ranganathan came out in 1952 with the theory of five and only five fundamental categories, and that these were named Personality, Matter, Energy, Space and Time in the fourth edition; the same paper records that until the fourth edition the colon was the only connecting symbol. The 1933 first publication and the sample call number are from Wikipedia's Colon classification entry. The practitioner caveat is read from the faceted classification section of the IA 4th edition, which never uses the term PMEST; it lists the five categories and then the six business facets."
      },
      belongs: {
        verdict: "core",
        why: "Faceted browsing is now a default pattern in commerce, search and media, so the classification thinking behind it is working knowledge rather than library trivia."
      },
      related: [640, 647, 607, 637]
    },

    {
      n: 642,
      title: "Card sorting",
      aka: ["Open card sort", "Closed card sort"],
      oneLine: "Ask people to group labelled cards so you can see how they cluster your content.",
      demo: {
        caption: "Open sort left: participants build the piles and name them. Closed sort right: your categories are supplied and items get filed.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Open sort</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Pay a fine</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Renew a loan</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Book a room</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Opening hours</span></div><span class=\"db-arrow\">&#8595;</span><div class=\"db-row db-row--top\"><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Sorting me out</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Pay a fine</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Renew a loan</span></div><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Visiting</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Book a room</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Opening hours</span></div></div><span class=\"db-note db-note--accent\">pile names come from the participant</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Closed sort</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Pay a fine</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Renew a loan</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Book a room</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Opening hours</span></div><span class=\"db-arrow\">&#8595;</span><div class=\"db-row db-row--top\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Your account</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Pay a fine</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Renew a loan</span></div></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Using the library</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Book a room</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Opening hours</span></div></div></div></div><span class=\"db-note\">categories were supplied before the sort</span></div></div></div></div>"
      },
      what: "Participants sort cards, each naming one item of content, into piles that make sense to them and then name the piles. That is an open sort, and it generates structure. A closed sort supplies your categories and asks people to file items into them, which tests a structure you already have. The output is a picture of how your audience clusters meaning, plus a pile of category names in their words rather than yours.",
      why: "It surfaces the groupings and the language you would never have guessed, early, on paper, before anything is built. It is also the cheapest way to settle an internal argument about categories with evidence instead of seniority.",
      how: [
        "Write cards using real content names, never internal jargon or project code names.",
        "Run open sorts to generate a structure, then closed sorts to test the names you chose.",
        "Record the names participants invent for their own piles. They are better label candidates than anything written in a workshop.",
        "Treat small samples as signal, not statistics, and confirm the result with tree testing."
      ],
      example: "Jakob Nielsen and Darrell Sano's 1994 design of SunWeb, Sun Microsystems' intranet: 51 information services on cards, four participants, each sorting into piles then grouping and naming them in about 30 to 40 minutes. The result became the fifteen top-level categories of the intranet.",
      numbers: "Nielsen and Sano's 1994 SunWeb sort used 51 cards with four participants; sessions ran about 30 to 40 minutes.",
      pitfall: "Averaging the sorts into one structure nobody produced. A dendrogram is a summary, not a decision, and it will happily merge two groups that no participant ever put together.",
      source: "Origin unclear as a named technique; documented in design use in the 1994 SunWeb write-up, republished on nngroup.com under Jakob Nielsen's byline and published at the time with Darrell Sano; covered in Rosenfeld, Morville and Arango, Information Architecture, 4th edition (2015), chapters 7 and 11.",
      verify: {
        status: "verified",
        note: "Every SunWeb figure read from the write-up itself on nngroup.com: a brainstormed list of 51 types of information, one 3-by-4 inch notecard each, four users in the card sorting study, users typically finishing in about 30 minutes with some taking about 40, and fifteen first-level groupings defined from the results. Note the nngroup republication carries Nielsen's byline alone, dated 31 December 1994; Sano is credited as co-author of the conference version. No single originator is claimed for card sorting itself, because sources trace it loosely to psychology without naming a founding study."
      },
      belongs: {
        verdict: "adjacent",
        why: "It is a research method adapted from psychology rather than a design principle. Its specific design use is generating category groupings and harvesting the exact words people use, before a navigation structure is drawn."
      },
      related: [643, 644, 638, 9646]
    },

    {
      n: 643,
      title: "Tree testing",
      aka: ["Reverse card sorting", "Card-based classification"],
      oneLine: "Test whether people can find things in your structure by stripping away every visual.",
      demo: {
        caption: "Same structure on both sides. Strip the layout, the pictures and the search box and only the words are left to test.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">The designed page</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Logo</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Search</span></div><div class=\"db-block db-fill\"></div><div class=\"db-row db-row--nowrap\"><div class=\"db-block db-fill\"></div><div class=\"db-block db-fill\"></div><div class=\"db-block db-fill\"></div></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">What the test shows</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--quiet\">Treatments</span><span class=\"db-btn db-btn--quiet\">Fees and payment</span><span class=\"db-btn db-btn--quiet\">New patients</span><span class=\"db-btn db-btn--quiet\">About the practice</span><span class=\"db-btn db-btn--quiet\">Contact</span></div></div></div></div>"
      },
      what: "Show a text-only version of the hierarchy, give someone a realistic task, and watch which branch they click. No layout, no search box, no pictures, so the only thing under test is the structure and its labels. Donna Spencer devised the paper version, which she called card-based classification and wrote up under her earlier name, Donna Maurer, in Boxes and Arrows in April 2003, because closed card sorting tests grouping rather than finding. Dave O'Brien and colleagues at Optimal Workshop then built Treejack, the first online tool for running the test, and wrote the method up in Boxes and Arrows in December 2009.",
      why: "It separates a structure problem from a visual design problem, which is otherwise almost impossible to do. A test tells you the success rate per task, how directly people got there, and where they backtracked, so you can fix the branch that fails instead of restyling the menu.",
      how: [
        "Test before you design the navigation, then again after any restructure.",
        "Write tasks in the user's situation, not in your labels, so you are not handing them the answer.",
        "Include tasks for content that sits in an awkward place. Testing only the easy branches proves nothing.",
        "Look at first clicks as well as final answers: a wrong first click means the top level is mislabelled."
      ],
      example: "Any online tree test: the participant sees a plain list of top-level headings, clicks down through text-only levels, and can go back. Nothing on screen helps except the words.",
      numbers: "",
      pitfall: "Task wording that echoes a label in the tree. People are excellent pattern matchers and will follow your phrasing straight to the answer, which makes a broken structure look fine.",
      source: "Donna Maurer (later Donna Spencer), Card-Based Classification Evaluation, Boxes and Arrows (April 2003); Dave O'Brien, Tree Testing, Boxes and Arrows (5 December 2009); Treejack, by Optimal Workshop.",
      verify: {
        status: "verified",
        note: "Attribution to Spencer's paper method, her dissatisfaction with closed card sorting, and O'Brien and colleagues building the first online tree testing tool are stated in The Decision Lab's reference entry, which cites O'Brien's Boxes and Arrows article of 5 December 2009. That article was read at boxesandarrows.com: it is bylined Dave OBrien, dated 5 December 2009, and says his team built Treejack after working the paper method by hand, but it gives no launch date. An earlier draft dated the launch to 2008 on The Decision Lab's word alone, while comments on O'Brien's own article place it in early 2009; the year cannot be settled, so no year is given. Spencer's 2003 Boxes and Arrows article was published under her earlier name, Donna Maurer, and the source line says so. There is no academic origin paper."
      },
      belongs: {
        verdict: "core",
        why: "It was invented inside information architecture to answer a question only designers ask, and it is the one method that isolates structure from styling."
      },
      related: [642, 648, 644, 638]
    },

    {
      n: 644,
      title: "Labelling systems",
      aka: ["Nomenclature", "Naming"],
      oneLine: "The words that stand in for content: links, headings, field names, filter values.",
      demo: {
        caption: "Identical content behind both menus. Only the words changed, and only one set tells you what is behind the door.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Written for the owner</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-nav\"><span>Solutions</span><span>Resources</span><span>Insights</span></div><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Written for the reader</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-nav\"><span>Prices</span><span>Repair guides</span><span>Book a visit</span></div><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i></div></div></div></div></div>"
      },
      what: "Rosenfeld, Morville and Arango treat labelling as its own system, separate from organisation. You group content, then you name the groups, and the same group can be named several ways for different contexts. Labels appear as navigation links, as headings that describe the chunk beneath them, as index terms and as form field names. The book's own hint for telling the systems apart is that you organise content into groups and then label those groups.",
      why: "A label is the only thing most people ever read before deciding whether to click. Get it wrong and a perfectly sensible structure tests as broken, because nobody recognises the door they are standing in front of.",
      how: [
        "Draw labels from your own content, from search logs, from card sorts and from published controlled vocabularies before inventing any.",
        "Use one label per idea across every context, including the footer, the breadcrumb and the page title.",
        "Say what the thing is, not what the department that owns it is called.",
        "Keep the label set narrow in scope and consistent in style: same grammar, same length range, same level of specificity."
      ],
      example: "The ERIC Thesaurus for education, which the IA book recommends as a ready-made source of labels for anyone building an education site, because its terms are already the ones educators use.",
      numbers: "",
      pitfall: "Labels written to satisfy the internal owner. Products, Solutions and Resources survive review meetings precisely because they mean nothing to anyone outside the building.",
      source: "Rosenfeld, Morville and Arango, Information Architecture, 4th edition (2015), chapter 7, with the organise-then-label hint in chapter 5.",
      verify: {
        status: "verified",
        note: "Read the 4th edition text. Labels as headings, labels within navigation systems, search-log analysis as a source of label wording and the ERIC Thesaurus with its entry for scholarship are all in chapter 7. The hint used here, that you organise content into groups and then label those groups, is in chapter 5 where the four systems are introduced, and the source line has been corrected to say so."
      },
      belongs: {
        verdict: "core",
        why: "Renaming things is the cheapest fix in interface work with the biggest effect, and the part clients are most tempted to get wrong."
      },
      related: [639, 642, 645, 673]
    },

    {
      n: 645,
      title: "Navigation systems",
      aka: ["Wayfinding controls"],
      oneLine: "The set of links that tell people where they are and where they can go next.",
      demo: {
        caption: "Three layers doing different jobs: the whole environment, the branch you are in, and links out of the content itself.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div><span class=\"db-note db-note--accent\">Global</span><div class=\"db-nav\"><b>Courses</b><span>Research</span><span>About</span><span>Contact</span></div></div><div class=\"db-row db-row--top db-row--nowrap\"><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Local</span><span class=\"db-btn db-btn--quiet db-btn--sm\">Undergraduate</span><span class=\"db-btn db-btn--quiet db-btn--sm\">Postgraduate</span><span class=\"db-btn db-btn--quiet db-btn--sm\">Short courses</span><span class=\"db-btn db-btn--quiet db-btn--sm\">How to apply</span></div><div class=\"db-col db-fill\"><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i></div><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Contextual</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Entry requirements</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Meet the tutors</span></div></div></div></div></div></div>"
      },
      what: "The IA book splits navigation in two. Embedded systems sit inside the page: global navigation covering the whole environment, local navigation covering the branch you are in, and contextual navigation linking related things from within the content. Supplemental systems sit outside the pages: sitemaps giving a bird's-eye view, A to Z indexes giving direct access, and guides offering a linear route for a particular audience or task.",
      why: "Navigation supplies context and flexibility at the same time. Context is knowing where you are inside the whole; flexibility is being able to jump sideways without going back to the top. Contextual links are the part most often missing, and the part that makes deep content usable.",
      how: [
        "Design global, local and contextual navigation as three deliberate layers, not one menu plus whatever fits.",
        "Give every page one clear route upward and at least one sideways route to a genuinely related page.",
        "Add supplemental routes, an index or a guide, when one hierarchy cannot serve everyone.",
        "Reinforce the hierarchy rather than competing with it. The book warns that too many navigation aids can bury the hierarchy and overwhelm the reader."
      ],
      example: "A large university site: the masthead is global, the left-hand column within a department is local, and the links inside a course description to its entry requirements and its tutors are contextual.",
      numbers: "",
      pitfall: "Bolting on a mega menu instead of fixing the grouping. It converts one navigation problem into a scanning problem and hides the fact that the categories never worked.",
      source: "Rosenfeld, Morville and Arango, Information Architecture, 4th edition (2015), chapter 8.",
      verify: {
        status: "verified",
        note: "Read chapter 8 of the 4th edition, which sets out embedded systems (global, local, contextual) and supplemental systems (sitemaps, indexes, guides), and warns that too many navigation aids can bury the hierarchy."
      },
      belongs: {
        verdict: "core",
        why: "It is the visible half of information architecture and the part every designer is asked to draw."
      },
      related: [644, 646, 655, 606]
    },

    {
      n: 646,
      title: "Search systems",
      aka: ["Site search", "Retrieval systems"],
      oneLine: "A searchable index, a ranking method and a results page, designed rather than switched on.",
      demo: {
        caption: "Same query, same ranking. Only the right-hand page pins a hand-picked best bet and shows enough to choose without clicking.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Titles only</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-input\">renew a loan</span><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Renew a loan</span><span class=\"db-type\" style=\"font-size:13px\">Loan renewal policy</span><span class=\"db-type\" style=\"font-size:13px\">Renewals (archive copy)</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Enough to judge</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-input\">renew a loan</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Best bet</span><span class=\"db-type\" style=\"font-size:13px\">Renew a loan</span><span class=\"db-note\">Your account &middot; takes 30 seconds</span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Loan renewal policy</span><span class=\"db-note\">Policies &middot; how long items can be kept</span></div></div></div></div></div>"
      },
      what: "The IA book opens its search chapter with a warning: think twice before you make a product searchable. Its reasoning is that the preceding chapters have already shown other ways to support finding, and that a search engine alone will not satisfy every information need. A search system has separable parts. You choose what goes in the index. An algorithm ranks results. A query builder expands, corrects or narrows what was typed. Then results are presented, which is where most of the usability lives. Best bets are results chosen by hand and tied to specific common queries.",
      why: "Search serves the person who knows what they want and cannot be bothered to browse, and the person for whom your categories do not work. It also produces the most useful research data you will ever get for free, in the words people actually use.",
      how: [
        "Add search when there is enough content to need it, and fix the structure rather than hiding behind the search box.",
        "Decide deliberately what is in the index and what is excluded, including PDFs and archived pages.",
        "Design the zero-results state as a real screen with suggestions, not an apology.",
        "Wire best bets to your most common queries only. The book is explicit that they cost human expertise and time, so they are not worth building for every query.",
        "Show enough of each result for someone to judge it without clicking."
      ],
      example: "A hand-set best bet: a search for a product name returns the official product page pinned at the top, above whatever the ranking algorithm found.",
      numbers: "",
      pitfall: "Treating search as an alternative to information architecture. If the index contains three versions of the same page, search will faithfully return all three and the reader will pick the wrong one.",
      source: "Rosenfeld, Morville and Arango, Information Architecture, 4th edition (2015), chapter 9, with the definition of best bets in chapter 5.",
      verify: {
        status: "verified",
        note: "Read the 4th edition text. Chapter 9 opens its section on whether a product needs search by telling the reader to think twice before making a product searchable, and covers search system anatomy, choosing what to index, algorithms, query builders and presenting results. Best bets are defined in chapter 5 as preferred results manually coupled with a query, and chapter 9 adds that they need human expertise and time and so are typically reserved for the most common queries, identified by search-log analysis. An earlier draft told the reader to wire best bets to the top twenty queries; no source gives that number, so it has been removed."
      },
      belongs: {
        verdict: "core",
        why: "Search is a designed surface with its own states and failure modes, not a component you drop in."
      },
      related: [645, 649, 9646, 608]
    },

    {
      n: 647,
      title: "Polyhierarchy",
      aka: ["Cross-listing", "Multiple parents"],
      oneLine: "Letting one item sit in more than one category, reachable by more than one path.",
      demo: {
        caption: "One item, two ways of thinking about it. On the right both parents lead to the same page rather than a copy.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">One parent only</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 296 152\"><rect class=\"s\" x=\"112\" y=\"10\" width=\"72\" height=\"22\" rx=\"2\"/><text class=\"t\" x=\"126\" y=\"25\">Produce</text><path class=\"s-mute\" d=\"M148 32 V46 M60 46 H236 M60 46 V62 M236 46 V62\"/><rect class=\"s-mute\" x=\"20\" y=\"62\" width=\"80\" height=\"22\" rx=\"2\"/><text class=\"t\" x=\"32\" y=\"77\">Fruit</text><rect class=\"s-mute\" x=\"196\" y=\"62\" width=\"80\" height=\"22\" rx=\"2\"/><text class=\"t\" x=\"206\" y=\"77\">Vegetables</text><path class=\"s-mute\" d=\"M60 84 V104\"/><rect class=\"s-mute\" x=\"20\" y=\"104\" width=\"80\" height=\"22\" rx=\"2\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"32\" y=\"119\">nothing</text><path class=\"s-mute\" d=\"M236 84 V104\"/><rect class=\"s-accent\" x=\"190\" y=\"104\" width=\"92\" height=\"22\" rx=\"2\"/><text class=\"t\" x=\"206\" y=\"119\">Tomato</text><text class=\"t\" x=\"8\" y=\"146\">looking under Fruit, you give up</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Two parents, one page</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 296 152\"><rect class=\"s\" x=\"112\" y=\"10\" width=\"72\" height=\"22\" rx=\"2\"/><text class=\"t\" x=\"126\" y=\"25\">Produce</text><path class=\"s-mute\" d=\"M148 32 V46 M60 46 H236 M60 46 V62 M236 46 V62\"/><rect class=\"s-mute\" x=\"20\" y=\"62\" width=\"80\" height=\"22\" rx=\"2\"/><text class=\"t\" x=\"32\" y=\"77\">Fruit</text><rect class=\"s-mute\" x=\"196\" y=\"62\" width=\"80\" height=\"22\" rx=\"2\"/><text class=\"t\" x=\"206\" y=\"77\">Vegetables</text><path class=\"s-mute\" d=\"M60 84 C 60 96, 110 96, 128 104\"/><path class=\"s-mute\" d=\"M236 84 C 236 96, 186 96, 168 104\"/><rect class=\"s-accent\" x=\"104\" y=\"104\" width=\"92\" height=\"22\" rx=\"2\"/><text class=\"t\" x=\"120\" y=\"119\">Tomato</text><text class=\"t\" x=\"8\" y=\"146\">both routes reach one page</text></svg></div></div></div>"
      },
      what: "A strict hierarchy gives every item exactly one parent. A polyhierarchy allows cross-listing, so an item can be reached down several category paths. The IA book puts it plainly: hierarchies that allow cross-listing are known as polyhierarchical, and ambiguous schemes make mutually exclusive categories hard to achieve. Their example is the tomato, which people will look for under fruit, vegetable or berry depending on who they are.",
      why: "It rescues the genuinely ambiguous item without forcing you to redesign the whole tree around it. Someone who thinks of a product as outdoor gear and someone who thinks of it as footwear both land on the same page.",
      how: [
        "Cross-list the ambiguous minority, not everything.",
        "Keep one canonical address for the item and let the other paths lead to it, so the same content is not duplicated.",
        "Watch the ratio. If most items sit in several places, stop cross-listing and switch to facets.",
        "Make it obvious in the breadcrumb which route the reader took, so back and up still behave."
      ],
      example: "A garden centre catalogue where a fruit tree appears under Trees and under Fruit and veg, both links resolving to the same product page.",
      numbers: "",
      pitfall: "The book states the failure mode exactly: if too many items are cross-listed, the hierarchy loses its value. At that point the categories stop predicting anything and the menu is just a long list wearing a costume.",
      source: "Rosenfeld, Morville and Arango, Information Architecture, 4th edition (2015), chapter 6.",
      verify: {
        status: "verified",
        note: "Read directly from the 4th edition text, in the designing hierarchies part of chapter 6: hierarchies that allow cross-listing are known as polyhierarchical; ambiguous schemes in particular make mutually exclusive categories hard to achieve; do tomatoes belong in the fruit, vegetable or berry category; and if too many items are cross-listed, the hierarchy loses its value. The same passage points the reader to facets when topic and format are simply two ways of looking at the same information, which is the basis for the third how-to line."
      },
      belongs: {
        verdict: "core",
        why: "Almost every real content set contains items that belong in two places, and this is the named decision for handling them."
      },
      related: [638, 641, 606, 607]
    },

    {
      n: 648,
      title: "Breadth versus depth",
      aka: ["Broad and shallow versus narrow and deep"],
      oneLine: "The trade between how many options each level offers and how many levels there are.",
      demo: {
        caption: "The same 512 items in three shapes. Adding a third level cost more than widening a level, and middling breadth won.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 610 126\"><text class=\"t\" x=\"10\" y=\"16\">16 x 32</text><path class=\"s\" d=\"M10 28 v8 M15 28 v8 M20 28 v8 M25 28 v8 M30 28 v8 M35 28 v8 M40 28 v8 M45 28 v8 M50 28 v8 M55 28 v8 M60 28 v8 M65 28 v8 M70 28 v8 M75 28 v8 M80 28 v8 M85 28 v8\"/><text class=\"t\" x=\"97\" y=\"36\">16</text><path class=\"s\" d=\"M10 46 v8 M15 46 v8 M20 46 v8 M25 46 v8 M30 46 v8 M35 46 v8 M40 46 v8 M45 46 v8 M50 46 v8 M55 46 v8 M60 46 v8 M65 46 v8 M70 46 v8 M75 46 v8 M80 46 v8 M85 46 v8 M90 46 v8 M95 46 v8 M100 46 v8 M105 46 v8 M110 46 v8 M115 46 v8 M120 46 v8 M125 46 v8 M130 46 v8 M135 46 v8 M140 46 v8 M145 46 v8 M150 46 v8 M155 46 v8 M160 46 v8 M165 46 v8\"/><text class=\"t\" x=\"177\" y=\"54\">32</text><rect class=\"f-accent\" x=\"10\" y=\"88\" width=\"72\" height=\"10\" rx=\"1\"/><text class=\"t\" x=\"90\" y=\"97\">36 s</text><text class=\"t\" x=\"215\" y=\"16\">32 x 16</text><path class=\"s\" d=\"M215 28 v8 M220 28 v8 M225 28 v8 M230 28 v8 M235 28 v8 M240 28 v8 M245 28 v8 M250 28 v8 M255 28 v8 M260 28 v8 M265 28 v8 M270 28 v8 M275 28 v8 M280 28 v8 M285 28 v8 M290 28 v8 M295 28 v8 M300 28 v8 M305 28 v8 M310 28 v8 M315 28 v8 M320 28 v8 M325 28 v8 M330 28 v8 M335 28 v8 M340 28 v8 M345 28 v8 M350 28 v8 M355 28 v8 M360 28 v8 M365 28 v8 M370 28 v8\"/><text class=\"t\" x=\"382\" y=\"36\">32</text><path class=\"s\" d=\"M215 46 v8 M220 46 v8 M225 46 v8 M230 46 v8 M235 46 v8 M240 46 v8 M245 46 v8 M250 46 v8 M255 46 v8 M260 46 v8 M265 46 v8 M270 46 v8 M275 46 v8 M280 46 v8 M285 46 v8 M290 46 v8\"/><text class=\"t\" x=\"302\" y=\"54\">16</text><rect class=\"f-mute\" x=\"215\" y=\"88\" width=\"92\" height=\"10\" rx=\"1\"/><text class=\"t\" x=\"315\" y=\"97\">46 s</text><text class=\"t\" x=\"420\" y=\"16\">8 x 8 x 8</text><path class=\"s\" d=\"M420 28 v8 M425 28 v8 M430 28 v8 M435 28 v8 M440 28 v8 M445 28 v8 M450 28 v8 M455 28 v8\"/><text class=\"t\" x=\"467\" y=\"36\">8</text><path class=\"s\" d=\"M420 46 v8 M425 46 v8 M430 46 v8 M435 46 v8 M440 46 v8 M445 46 v8 M450 46 v8 M455 46 v8\"/><text class=\"t\" x=\"467\" y=\"54\">8</text><path class=\"s\" d=\"M420 64 v8 M425 64 v8 M430 64 v8 M435 64 v8 M440 64 v8 M445 64 v8 M450 64 v8 M455 64 v8\"/><text class=\"t\" x=\"467\" y=\"72\">8</text><rect class=\"f-mute\" x=\"420\" y=\"88\" width=\"116\" height=\"10\" rx=\"1\"/><text class=\"t\" x=\"544\" y=\"97\">58 s</text><path class=\"s-mute\" d=\"M10 80 H600\"/><text class=\"t\" x=\"10\" y=\"116\">mean time to find an item; 512 items in every version</text></svg></div>"
      },
      what: "Breadth is options per level; depth is number of levels. Kevin Larson and Mary Czerwinski tested this for the web at CHI 98. Nineteen experienced web users searched three hierarchies, each holding 512 bottom-level items built from Encarta content: 8x8x8, 16x32 and 32x16. Average search times were 36 seconds for 16x32, 46 seconds for 32x16 and 58 seconds for 8x8x8. The three-level structure was significantly slower than both two-level ones; the two broad structures did not differ significantly from each other.",
      why: "Depth cost more than breadth in that study, so the instinct to keep menus short by adding a level can make finding slower. Knowing that lets you defend a long, well-grouped list against the person who wants seven items. Note what the result does not say: the broadest top level, 32 options, was not the fastest. The middling one was.",
      how: [
        "Prefer a wider level to an extra level when the choice is between them, but do not read that as the wider the better.",
        "Be more conservative about depth than about breadth.",
        "Group long lists visually into labelled clusters rather than pushing them down a level.",
        "Settle the argument with a tree test on your own content instead of quoting a rule."
      ],
      example: "The study's own three arrangements of the same 512 items: 16 groups of 32, 32 groups of 16, and eight groups of eight groups of eight. Both two-level versions beat the three-level one, and the 16 by 32 arrangement was quickest.",
      numbers: "Larson and Czerwinski (CHI 98): 19 participants, 512 bottom-level nodes; mean search times 36s (16x32), 46s (32x16), 58s (8x8x8).",
      pitfall: "Quoting seven plus or minus two at menu design. The IA book refuses the rule outright and says the constraint on how many links you can safely show is visual scanning, not short-term memory.",
      source: "Kevin Larson and Mary Czerwinski, Web Page Design: Implications of Memory, Structure and Scent for Information Retrieval, CHI 98 (1998); Rosenfeld, Morville and Arango, Information Architecture, 4th edition (2015), chapter 6.",
      verify: {
        status: "verified",
        note: "Read the CHI 98 paper PDF from Microsoft Research and took every figure from its own text: 19 subjects, all experienced computer and web users; three structures each with 512 bottom-level nodes drawn from Encarta; mean reaction times of 36s (SD 16) for 16x32, 46s (SD 26) for 32x16 and 58s (SD 23) for 8x8x8; a significant main effect of hierarchy with the three-level structure significantly slower than both, and no significant difference between the two two-level structures. The authors' own conclusion is that their moderate level of breadth may afford optimal performance, not that broader is always better, and the entry has been adjusted to say so. The rejection of seven plus or minus two is from the IA 4th edition, which says the constraint is visual scanning rather than short-term memory. Caveat worth keeping: one study, 19 participants, 1998, encyclopedia content."
      },
      belongs: {
        verdict: "core",
        why: "It is the daily structural decision, and it is one of the few IA questions with a real measurement attached."
      },
      related: [637, 643, 645, 638]
    },

    {
      n: 649,
      title: "Findability",
      aka: [],
      oneLine: "How easily a specific thing can be located, and how well a system supports locating things.",
      demo: {
        caption: "The same page on both sides. On the right it sits two steps away and has more than one way in.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Five steps, one branch</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 296 152\"><rect class=\"s-mute\" x=\"16\" y=\"8\" width=\"200\" height=\"20\" rx=\"2\"/><text class=\"t\" x=\"26\" y=\"22\">Home</text><path class=\"s-mute\" d=\"M116 28 V32\"/><path class=\"f-mute\" d=\"M116 36 l-4 -6 h8 z\"/><rect class=\"s-mute\" x=\"16\" y=\"36\" width=\"200\" height=\"20\" rx=\"2\"/><text class=\"t\" x=\"26\" y=\"50\">About the practice</text><path class=\"s-mute\" d=\"M116 56 V60\"/><path class=\"f-mute\" d=\"M116 64 l-4 -6 h8 z\"/><rect class=\"s-mute\" x=\"16\" y=\"64\" width=\"200\" height=\"20\" rx=\"2\"/><text class=\"t\" x=\"26\" y=\"78\">Patient information</text><path class=\"s-mute\" d=\"M116 84 V88\"/><path class=\"f-mute\" d=\"M116 92 l-4 -6 h8 z\"/><rect class=\"s-mute\" x=\"16\" y=\"92\" width=\"200\" height=\"20\" rx=\"2\"/><text class=\"t\" x=\"26\" y=\"106\">Useful links</text><path class=\"s-mute\" d=\"M116 112 V116\"/><path class=\"f-mute\" d=\"M116 120 l-4 -6 h8 z\"/><rect class=\"s-accent\" x=\"16\" y=\"120\" width=\"200\" height=\"20\" rx=\"2\"/><text class=\"t\" x=\"26\" y=\"134\">Cancel an appointment</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Two steps, several ways in</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 296 152\"><rect class=\"s-mute\" x=\"6\" y=\"8\" width=\"88\" height=\"20\" rx=\"2\"/><text class=\"t\" x=\"16\" y=\"22\">Any page</text><rect class=\"s-mute\" x=\"104\" y=\"8\" width=\"88\" height=\"20\" rx=\"2\"/><text class=\"t\" x=\"114\" y=\"22\">Search</text><rect class=\"s-mute\" x=\"202\" y=\"8\" width=\"88\" height=\"20\" rx=\"2\"/><text class=\"t\" x=\"212\" y=\"22\">Map listing</text><path class=\"s-mute\" d=\"M50 28 C 50 48, 120 46, 140 64\"/><path class=\"s-mute\" d=\"M148 28 V64\"/><path class=\"s-mute\" d=\"M246 28 C 246 48, 176 46, 156 64\"/><rect class=\"s-mute\" x=\"58\" y=\"64\" width=\"180\" height=\"20\" rx=\"2\"/><text class=\"t\" x=\"68\" y=\"78\">Contact</text><path class=\"s-mute\" d=\"M148 84 V92\"/><path class=\"f-mute\" d=\"M148 98 l-4 -7 h8 z\"/><rect class=\"s-accent\" x=\"58\" y=\"98\" width=\"180\" height=\"20\" rx=\"2\"/><text class=\"t\" x=\"68\" y=\"112\">Cancel an appointment</text></svg></div></div></div>"
      },
      what: "Peter Morville gives findability a dictionary-style definition in Ambient Findability: the quality of being locatable or navigable; the degree to which a particular object is easy to discover or locate; and the degree to which a system or environment supports navigation and retrieval. His summary line is that findability precedes usability. Something nobody can locate is not usable, however good the page turns out to be.",
      why: "It reframes the brief. The measure of an information architecture is not whether the structure is elegant but whether a named thing can be reached by someone who wants it. That is testable, unlike tidiness.",
      how: [
        "Write a list of the things people most often come for, and time yourself finding each from the home page.",
        "Test findability with tree testing for structure and with search logs for the things people gave up browsing for.",
        "Distinguish findability, which is locating something you know exists, from discoverability, which is meeting something you did not know about.",
        "Check external routes too: a page found only through your own menu is barely found at all."
      ],
      example: "A hospital site where the phone number for cancelling an appointment can be reached in two clicks from any page. That is findability doing its job, and it is trivially checkable.",
      numbers: "",
      pitfall: "Measuring findability with an internal walkthrough. The people who built the structure can always find things, which is exactly why their opinion is worthless here.",
      source: "Peter Morville, Ambient Findability (O'Reilly, 2005).",
      verify: {
        status: "verified",
        note: "The three-part definition is reproduced identically in several independent places, including Morville's own article in Online magazine (Infotoday, November and December 2005) drawn from the book, a 2005 review by John Hagel and a published book review. The line that findability precedes usability, in the alphabet and on the Web, and that you cannot use what you cannot find, appears as a heading in the extract from the book published by A List Apart. I have read those extracts and reviews rather than the book itself, and have not extended the definition beyond what they carry."
      },
      belongs: {
        verdict: "core",
        why: "It is the outcome measure the rest of this section exists to serve."
      },
      related: [643, 646, 650, 9646]
    },

    {
      n: 650,
      title: "Ambient findability",
      aka: [],
      oneLine: "Morville's term for a world in which anyone or anything can be found from anywhere.",
      demo: {
        caption: "One fact, four routes in. Three read your titles and data rather than your menu, and you do not control them.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 610 170\"><rect class=\"s\" x=\"10\" y=\"14\" width=\"140\" height=\"26\" rx=\"2\"/><text class=\"t\" x=\"20\" y=\"31\">your navigation</text><rect class=\"s-mute\" x=\"160\" y=\"14\" width=\"140\" height=\"26\" rx=\"2\" stroke-dasharray=\"4 3\"/><text class=\"t\" x=\"170\" y=\"31\">search engine</text><rect class=\"s-mute\" x=\"310\" y=\"14\" width=\"140\" height=\"26\" rx=\"2\" stroke-dasharray=\"4 3\"/><text class=\"t\" x=\"320\" y=\"31\">map listing</text><rect class=\"s-mute\" x=\"460\" y=\"14\" width=\"140\" height=\"26\" rx=\"2\" stroke-dasharray=\"4 3\"/><text class=\"t\" x=\"470\" y=\"31\">assistant or app</text><path class=\"s-mute\" d=\"M80 40 C 80 70, 190 74, 214 96\"/><path class=\"s-mute\" d=\"M230 40 C 230 70, 250 78, 262 96\"/><path class=\"s-mute\" d=\"M380 40 C 380 70, 350 78, 336 96\"/><path class=\"s-mute\" d=\"M530 40 C 530 70, 410 74, 388 96\"/><path class=\"f-mute\" d=\"M214 102 l-5 -8 h9 z\"/><path class=\"f-mute\" d=\"M262 102 l-5 -8 h9 z\"/><path class=\"f-mute\" d=\"M336 102 l-5 -8 h9 z\"/><path class=\"f-mute\" d=\"M388 102 l-5 -8 h9 z\"/><rect class=\"s-accent\" x=\"180\" y=\"102\" width=\"250\" height=\"44\" rx=\"2\"/><text class=\"t\" x=\"196\" y=\"122\">opening hours: 9 to 5</text><text class=\"t\" x=\"196\" y=\"136\">one record, four ways in</text><text class=\"t\" x=\"10\" y=\"164\">dashed = a route you do not control</text></svg></div>"
      },
      what: "Ambient Findability (2005) is Peter Morville's book-length argument that networked devices, location awareness and search were making everything findable, and that this would change how we assign authority and trust. The book is a thoughtful survey of that shift. What it is not is a rule a designer can apply on a Tuesday afternoon. The workable idea inside it is narrower and does have a design use: your content is reached through channels you do not control, so structure has to extend past your own navigation.",
      why: "The useful residue is that findability is not confined to your site. People arrive from search engines, maps, marketplaces, app stores and assistants, and each of those routes reads your structure and metadata rather than your menu.",
      how: [
        "Design for arrival on any page, not just the home page, because most people will never see it.",
        "Make each page state what it is and where it sits, since the surrounding navigation may never be seen.",
        "Keep metadata and titles good enough for external systems to describe you accurately."
      ],
      example: "A restaurant whose opening hours are correct in a map listing, on an aggregator and on its own site. All three are routes to the same fact, and only one of them is the website.",
      numbers: "",
      pitfall: "Citing the phrase as if it were an actionable principle. It names a condition of the world rather than an instruction, and in practice people use it to mean plain findability with an adjective attached.",
      source: "Peter Morville, Ambient Findability (O'Reilly, 2005).",
      verify: {
        status: "verified",
        note: "Book, author, publisher and 2005 date confirmed. Morville does define the term, in his own words in Online magazine (Infotoday, November and December 2005): a future of ambient findability in which we can find anyone or anything from anywhere at anytime. That is a forecast about pervasive computing, not a rule a designer can apply, which is the basis for the cut verdict below. An earlier draft said no definition could be found; that was wrong and has been corrected."
      },
      belongs: {
        verdict: "cut",
        why: "As a design fundamental it duplicates findability (649) and adds a forecast about pervasive computing. If the list wants the real idea, replace it with cross-channel findability: designing so content is locatable through search engines, marketplaces, maps and assistants, not only through your own navigation."
      },
      related: [649, 660, 646]
    },

    {
      n: 651,
      title: "Paths, edges, districts, nodes, landmarks",
      aka: ["Lynch's five elements", "Elements of the city image"],
      oneLine: "The five things people use to build a mental map of a place, from Kevin Lynch's city study.",
      demo: {
        caption: "Channels you move along, boundaries you do not, areas with a character, junctions you enter, and a marker you steer by.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 610 210\"><rect class=\"f-mute\" x=\"30\" y=\"26\" width=\"180\" height=\"88\" opacity=\"0.12\"/><text class=\"t\" x=\"40\" y=\"42\">district</text><rect class=\"f-mute\" x=\"350\" y=\"104\" width=\"200\" height=\"76\" opacity=\"0.12\"/><text class=\"t\" x=\"360\" y=\"120\">district</text><path class=\"s-mute\" d=\"M300 22 C 380 46, 470 20, 598 48\"/><path class=\"s-mute\" d=\"M300 34 C 380 58, 470 32, 598 60\"/><text class=\"t\" x=\"306\" y=\"16\">edge</text><path class=\"s\" d=\"M14 150 H596\"/><path class=\"s\" d=\"M250 16 V196\"/><text class=\"t\" x=\"18\" y=\"144\">path</text><text class=\"t\" x=\"258\" y=\"28\">path</text><circle class=\"s\" cx=\"250\" cy=\"150\" r=\"8\"/><text class=\"t\" x=\"264\" y=\"142\">node</text><path class=\"f-accent\" d=\"M120 158 l11 20 h-22 z\"/><text class=\"t\" x=\"138\" y=\"176\">landmark</text></svg></div>"
      },
      what: "Lynch interviewed residents of Boston, Jersey City and Los Angeles and asked them to describe and sketch their cities. The images they produced were built from five kinds of element. Paths are the channels you move along. Edges are boundaries you do not travel along, such as a shoreline or a railway cutting. Districts are areas with a shared character that you feel yourself inside. Nodes are points you enter that act as focal junctions. Landmarks are reference points you cannot enter but can steer by.",
      why: "It gives you a vocabulary for diagnosing why a place, or a large product, feels featureless. If everything looks the same, there are no landmarks. If sections have no character of their own, there are no districts and people cannot tell how far in they are.",
      how: [
        "Give major sections a distinct character so they read as districts, not identical pages with a different heading.",
        "Provide landmarks that stay put: a masthead, a recurring hub page, a distinctive component people recognise.",
        "Make the main routes structurally clear, so paths have an obvious start, middle and end.",
        "Mark boundaries honestly when the reader crosses into a different system, so an edge is felt rather than stumbled over."
      ],
      example: "Mark Foltz's 1998 MIT thesis, Designing Navigable Information Spaces, carried Lynch's elements onto screens and derived principles from them, including using landmarks for orientation, building well-structured paths and giving people survey views.",
      numbers: "",
      pitfall: "Treating it as a drawing exercise. Producing a Lynch diagram of your site is easy; the value is in noticing which of the five elements your design does not have.",
      source: "Kevin Lynch, The Image of the City (MIT Press, 1960); Mark A. Foltz, Designing Navigable Information Spaces, MIT master's thesis (1998), supervised by Randall Davis.",
      verify: {
        status: "verified",
        note: "The five elements, the definitions and the three cities checked against Lynch's own wording as reproduced in sources quoting the book, and against Wikipedia's entry on The Image of the City. Foltz's thesis downloaded as a PDF from MIT CSAIL and read: it is a 1998 Master of Science thesis, and its chapter on design principles for wayfinding contains the three named here, using landmarks to provide orientation cues and memorable locations, creating well-structured paths, and using survey views."
      },
      belongs: {
        verdict: "core",
        why: "It is a design source, listed among this project's own reference books, and it is still the clearest language available for talking about orientation in any large environment."
      },
      related: [652, 653, 654, 645]
    },

    {
      n: 652,
      title: "Legibility of place",
      aka: ["Imageability", "Placemaking"],
      oneLine: "How easily the parts of an environment can be recognised and organised into one pattern.",
      demo: {
        caption: "Same footprint, same amount of building, same main route. Only the right-hand plan gives you anything to remember it by.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Every part alike</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 296 152\"><rect class=\"s-mute\" x=\"18\" y=\"20\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"18\" y=\"64\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"18\" y=\"108\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"86\" y=\"20\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"86\" y=\"64\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"86\" y=\"108\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"154\" y=\"20\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"154\" y=\"64\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"154\" y=\"108\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"222\" y=\"20\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"222\" y=\"64\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"222\" y=\"108\" width=\"56\" height=\"30\" rx=\"1\"/><path class=\"s\" d=\"M6 101 H290\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Districts and a landmark</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 296 152\"><rect class=\"f-accent\" x=\"12\" y=\"14\" width=\"136\" height=\"86\" opacity=\"0.14\"/><rect class=\"f-mute\" x=\"148\" y=\"102\" width=\"136\" height=\"42\" opacity=\"0.18\"/><rect class=\"s-mute\" x=\"18\" y=\"20\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"18\" y=\"64\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"18\" y=\"108\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"86\" y=\"20\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"86\" y=\"64\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"86\" y=\"108\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"154\" y=\"20\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"154\" y=\"64\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"154\" y=\"108\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"222\" y=\"20\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"222\" y=\"64\" width=\"56\" height=\"30\" rx=\"1\"/><rect class=\"s-mute\" x=\"222\" y=\"108\" width=\"56\" height=\"30\" rx=\"1\"/><path class=\"s\" d=\"M6 101 H290\"/><path class=\"f-accent\" d=\"M148 92 l6 17 h-12 z\"/><text class=\"t\" x=\"24\" y=\"60\">district</text><text class=\"t\" x=\"162\" y=\"122\">landmark</text></svg></div></div></div>"
      },
      what: "Lynch defined legibility as the apparent clarity of the cityscape, and glossed it as the ease with which its parts can be recognised and can be organised into a coherent pattern. He deliberately compared it to a printed page: a legible city is one whose districts, landmarks and paths are identifiable and can be assembled into an overall pattern. He paired it with imageability, the quality in a physical object that gives it a high probability of evoking a strong image in an observer. The IA book pursues the same idea in digital work under the heading of placemaking.",
      why: "Legibility is what makes a large environment feel navigable before anyone reads a sign. If people can form a rough mental picture of the whole, they can guess where things are, and guessing correctly is faster than any menu.",
      how: [
        "Make sections visually distinguishable so people can tell at a glance which part they are in.",
        "Keep the overall shape simple enough to be describable in a sentence.",
        "Repeat a small number of strong, recognisable elements rather than many weak ones.",
        "Give people an occasional survey view, an overview page or map, so the whole can be seen at once."
      ],
      example: "A hospital with colour-coded wings and a consistent numbering rule. Once a visitor grasps the rule they can predict where a room is without further signage.",
      numbers: "",
      pitfall: "Confusing legibility of place with typographic legibility. Lynch is talking about whether an environment can be read as a pattern, not whether letterforms can be distinguished.",
      source: "Kevin Lynch, The Image of the City (MIT Press, 1960); Rosenfeld, Morville and Arango, Information Architecture, 4th edition (2015), chapters 4 and 8.",
      verify: {
        status: "verified",
        note: "Lynch's gloss on legibility, the ease with which its parts can be recognised and can be organised into a coherent pattern, is quoted identically across several sources citing the book, and the entry now uses his wording rather than a paraphrase. The IA 4th edition's placemaking material read in the source text: chapter 4 is titled Design for Understanding and opens by calling information architecture a new type of placemaking, and chapter 8 contains a section headed Placemaking. Neither section names Lynch, so the link between the two is this entry's rather than the book's."
      },
      belongs: {
        verdict: "core",
        why: "It names the quality that separates a large product people can hold in their heads from one they can only ever search."
      },
      related: [651, 653, 645, 655]
    },

    {
      n: 653,
      title: "You-are-here design",
      aka: ["YAH maps", "Current location indication"],
      oneLine: "Showing people where they are now, on a map or in a structure, without making them work it out.",
      demo: {
        caption: "Both boards are accurate. On the left the shop on your left prints on the right, so the connecting lines cross.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">North at the top</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 296 180\"><text class=\"t\" x=\"6\" y=\"12\">what you see, looking ahead</text><rect class=\"s-mute\" x=\"24\" y=\"20\" width=\"54\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"32\" y=\"36\">shop A</text><rect class=\"s-mute\" x=\"218\" y=\"20\" width=\"54\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"226\" y=\"36\">shop B</text><circle class=\"f\" cx=\"148\" cy=\"58\" r=\"5\"/><path class=\"s\" d=\"M148 52 V40\"/><path class=\"f\" d=\"M148 34 l-4 8 h8 z\"/><text class=\"t\" x=\"158\" y=\"62\">you</text><text class=\"t\" x=\"24\" y=\"86\">the board</text><rect class=\"s\" x=\"24\" y=\"90\" width=\"248\" height=\"80\" rx=\"2\"/><path class=\"s-accent\" d=\"M51 44 L229 134\"/><path class=\"s-accent\" d=\"M245 44 L67 134\"/><circle class=\"f-accent\" cx=\"148\" cy=\"112\" r=\"4\"/><text class=\"t\" x=\"120\" y=\"126\">you are here</text><rect class=\"s-mute\" x=\"40\" y=\"134\" width=\"54\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"48\" y=\"150\">shop B</text><rect class=\"s-mute\" x=\"202\" y=\"134\" width=\"54\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"210\" y=\"150\">shop A</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Turned to your facing</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 296 180\"><text class=\"t\" x=\"6\" y=\"12\">what you see, looking ahead</text><rect class=\"s-mute\" x=\"24\" y=\"20\" width=\"54\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"32\" y=\"36\">shop A</text><rect class=\"s-mute\" x=\"218\" y=\"20\" width=\"54\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"226\" y=\"36\">shop B</text><circle class=\"f\" cx=\"148\" cy=\"58\" r=\"5\"/><path class=\"s\" d=\"M148 52 V40\"/><path class=\"f\" d=\"M148 34 l-4 8 h8 z\"/><text class=\"t\" x=\"158\" y=\"62\">you</text><text class=\"t\" x=\"24\" y=\"86\">the board</text><rect class=\"s\" x=\"24\" y=\"90\" width=\"248\" height=\"80\" rx=\"2\"/><path class=\"s-accent\" d=\"M51 44 L67 100\"/><path class=\"s-accent\" d=\"M245 44 L229 100\"/><rect class=\"s-mute\" x=\"40\" y=\"100\" width=\"54\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"48\" y=\"116\">shop A</text><rect class=\"s-mute\" x=\"202\" y=\"100\" width=\"54\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"210\" y=\"116\">shop B</text><circle class=\"f-accent\" cx=\"148\" cy=\"146\" r=\"4\"/><text class=\"t\" x=\"120\" y=\"160\">you are here</text></svg></div></div></div>"
      },
      what: "Marvin Levine studied fixed maps in public places and found that a precise map with a you-are-here marker can still mislead. He set out two principles that must be satisfied. Structure matching means the structure shown on the map has to correspond to what the reader can actually see around them. Orientation means the map has to be presented in a way that lines up with the reader's view rather than fighting it. Neglect either and the map sends people the wrong way with complete confidence.",
      why: "People read a map by matching it against the scene in front of them. If the match fails they have to mentally rotate the whole thing, which is slow, error-prone and unevenly distributed across a population. On screen the same job is done by the current-state indicator, the breadcrumb and the section heading.",
      how: [
        "Mark the current location, and mark it distinctly from everything else on the map or menu.",
        "Orient a fixed map to the viewer's actual facing rather than defaulting to north at the top.",
        "Include, on the map, the features the reader can see from where they stand, so the match is easy.",
        "In an interface, show the active state on every level of navigation, not just the top one."
      ],
      example: "A wall-mounted mall map with an arrow and the words you are here, drawn so that the shops on the reader's left appear on the left of the map.",
      numbers: "",
      pitfall: "A north-up map bolted to a wall facing south. It is technically accurate and reliably sends people the wrong way, which is precisely the failure Levine documented.",
      source: "Marvin Levine, You-Are-Here Maps: Psychological Considerations, Environment and Behavior 14(2), 221-237 (1982).",
      verify: {
        status: "verified",
        note: "Citation checked on SAGE: Environment and Behavior, volume 14, number 2, March 1982, pages 221 to 237. The two named principles, structure matching and orientation, and the point that a precisely constructed map with a properly affixed you-are-here symbol is still not sufficient, are from the published abstract as carried by SAGE, PsycNet and Semantic Scholar. The abstract's own recommendations include labelling coordinates in both terrain and map, siting maps near asymmetrical features, designing symbols that show map to terrain correspondence, aligning the map with the terrain, and using redundant supplements; the four how-to lines here stay within those. The full paper is paywalled, so its detailed sub-rules are not quoted and the later forward-up equivalence terminology is deliberately not repeated."
      },
      belongs: {
        verdict: "core",
        why: "Signage designers and interface designers face the same problem, and the two principles transfer directly to breadcrumbs and active states."
      },
      related: [651, 652, 654, 606]
    },

    {
      n: 654,
      title: "Decision-point mapping",
      aka: ["Decision points", "Decision plans", "Decision diagrams"],
      oneLine: "Find every place a person must choose a direction, and make sure the information is there.",
      demo: {
        caption: "Same route, same amount of sign. Only the right-hand one puts the words where the choice is actually made.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Signed along the corridor</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 296 152\"><path class=\"s-mute\" d=\"M28 118 H150 V44 H210\"/><circle class=\"f\" cx=\"28\" cy=\"118\" r=\"4\"/><text class=\"t\" x=\"10\" y=\"136\">entrance</text><path class=\"s\" d=\"M150 108 l10 10 l-10 10 l-10 -10 z\"/><path class=\"s\" d=\"M150 34 l10 10 l-10 10 l-10 -10 z\"/><text class=\"t\" x=\"128\" y=\"122\">?</text><text class=\"t\" x=\"128\" y=\"48\">?</text><path class=\"s-mute\" d=\"M85 112 V124\"/><text class=\"t\" x=\"62\" y=\"108\">welcome</text><path class=\"s-mute\" d=\"M156 80 H168\"/><text class=\"t\" x=\"172\" y=\"84\">level 2</text><rect class=\"s-accent\" x=\"210\" y=\"34\" width=\"76\" height=\"20\" rx=\"2\"/><text class=\"t\" x=\"220\" y=\"48\">clinic 4</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Signed at the junction</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 296 152\"><path class=\"s-mute\" d=\"M28 118 H150 V44 H210\"/><circle class=\"f\" cx=\"28\" cy=\"118\" r=\"4\"/><text class=\"t\" x=\"10\" y=\"136\">entrance</text><path class=\"s\" d=\"M150 108 l10 10 l-10 10 l-10 -10 z\"/><path class=\"s\" d=\"M150 34 l10 10 l-10 10 l-10 -10 z\"/><text class=\"t\" x=\"166\" y=\"116\">&#8593; clinic 4</text><text class=\"t\" x=\"166\" y=\"28\">&#8594; clinic 4</text><rect class=\"s-accent\" x=\"210\" y=\"34\" width=\"76\" height=\"20\" rx=\"2\"/><text class=\"t\" x=\"220\" y=\"48\">clinic 4</text></svg></div></div></div>"
      },
      what: "Romedi Passini and Paul Arthur framed wayfinding as a problem-solving process rather than a signage exercise. A person forms a decision plan, which Passini describes as the cognitive solution to a wayfinding problem, and then executes it at a series of decision points along the route. Mapping the route means listing those points in order and checking that each one carries the information needed to make the next choice. Jesse James Garrett's diagramming vocabulary uses the same idea on screen, with a diamond marking a decision point exactly as in a flow chart.",
      why: "It stops signage and interface content being distributed by intuition. Information is expensive to place and easy to put where it is convenient rather than where the choice actually happens, which is why so many buildings sign the corridor and not the junction.",
      how: [
        "Walk or click the real route and write down every point where a choice must be made.",
        "At each point, name the decision, then check that the words available answer it.",
        "Confirm the destination is recognisable on approach, not only that the route is signed.",
        "Count decision points as a rough complexity measure. Fewer choices along a route means less to get wrong."
      ],
      example: "A hospital route from the main entrance to a specific clinic: the entrance, the lift lobby, each lift exit and each corridor junction are decision points, and each needs the clinic name, not just a department code.",
      numbers: "",
      pitfall: "Signing the corridors and not the junctions. Reassurance between choices is cheap and comforting; information at the choice itself is what actually prevents a wrong turn.",
      source: "Paul Arthur and Romedi Passini, Wayfinding: People, Signs, and Architecture (McGraw-Hill, 1992); Romedi Passini and colleagues, Wayfinding and Dementia, Journal of Architectural and Planning Research (1998); Jesse James Garrett, Visual Vocabulary (2000).",
      verify: {
        status: "adjusted",
        note: "The master list name is not the source's terminology. Passini's own terms are decision point, decision plan and decision diagram, and the sentence that a decision plan corresponds to the cognitive solution of a wayfinding problem is quoted from the 1998 dementia paper as indexed on JSTOR. Arthur and Passini's 1992 book confirmed as McGraw-Hill, New York, 1992 in the Stanford library catalogue and the Institute for Human Centered Design library. Garrett's diamond decision point, borrowed from traditional flow charts, read on his own Visual Vocabulary page."
      },
      belongs: {
        verdict: "core",
        why: "It is the method that connects a route to the specific words needed to complete it, in buildings and in interfaces alike."
      },
      related: [653, 656, 651, 877]
    },

    {
      n: 655,
      title: "Sitemaps",
      aka: ["Structure diagram", "sitemap.xml"],
      oneLine: "One word for two different artefacts: a structure diagram for people, and a URL list for crawlers.",
      demo: {
        caption: "One word, two artefacts. On the left a drawing people can argue over; on the right a list only a crawler reads.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Structure diagram, for people</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 296 130\"><rect class=\"s\" x=\"112\" y=\"10\" width=\"72\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"126\" y=\"26\">home</text><path class=\"s-mute\" d=\"M148 34 V50 M40 50 H256 M40 50 V64 M148 50 V60 M256 50 V64\"/><rect class=\"s\" x=\"10\" y=\"64\" width=\"60\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"20\" y=\"80\">about</text><rect class=\"s\" x=\"124\" y=\"60\" width=\"60\" height=\"24\" rx=\"2\"/><rect class=\"s\" x=\"118\" y=\"66\" width=\"60\" height=\"24\" rx=\"2\"/><rect class=\"s\" x=\"112\" y=\"72\" width=\"60\" height=\"24\" rx=\"2\"/><text class=\"t\" x=\"118\" y=\"88\">products</text><path class=\"s\" d=\"M226 64 h40 l14 14 v30 h-54 z\"/><path class=\"s-mute\" d=\"M266 64 v14 h14\"/><text class=\"t\" x=\"232\" y=\"96\">prices</text><text class=\"t\" x=\"16\" y=\"102\">page</text><text class=\"t\" x=\"112\" y=\"110\">page stack</text><text class=\"t\" x=\"232\" y=\"122\">file</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">sitemap.xml, for crawlers</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><span class=\"db-label\">sitemap.xml</span><div class=\"db-col db-col--tight db-type db-type--mono\"><span>/</span><span>/about</span><span>/products/</span><span>/products/kettle-2l</span><span>/prices</span><span>/blog/2019/open-day</span><span class=\"db-note\">&hellip; and every other page</span></div></div></div></div></div>"
      },
      what: "The design sitemap is a top-down diagram of the structure, drawn so people can argue about it. Garrett's Visual Vocabulary, released in October 2000 and revised to v1.1b in March 2002, gave the field a shared notation: a rectangle for a page, a stack for a group of functionally identical pages, a dog-eared icon for a file, plus connectors and areas. Its stated purpose is to show macrostructure, leaving page-level detail to other documents. The other sitemap is sitemap.xml, a machine-readable list of URLs for crawlers under the sitemaps.org protocol. The IA book also uses the word for an in-product overview page.",
      why: "The diagram makes structure arguable before it is expensive. The XML file makes content reachable by crawlers when your navigation does not expose everything.",
      how: [
        "Keep the diagram at macrostructure level. If you are drawing buttons and fields, you are in the wrong document.",
        "Use a page stack rather than drawing forty identical product pages.",
        "Generate sitemap.xml automatically from the content system, and reference it from robots.txt.",
        "Do not assume an in-product sitemap page fixes bad navigation. It is a supplement, not a repair."
      ],
      example: "Garrett's own reverse-engineered diagram of MetaFilter, published with the Visual Vocabulary, showing the whole site's structure on a single sheet.",
      numbers: "sitemaps.org protocol: a single sitemap file must have no more than 50,000 URLs and be no larger than 50MB (52,428,800 bytes); a sitemap index file may not list more than 50,000 sitemaps and is held to the same size limit.",
      pitfall: "Presenting an XML sitemap as evidence of good information architecture. It tells a crawler where the pages are and says nothing about whether a person can find them.",
      source: "Jesse James Garrett, Visual Vocabulary v1.0 (17 October 2000), v1.1b (6 March 2002); sitemaps.org protocol; Rosenfeld, Morville and Arango, Information Architecture, 4th edition (2015).",
      verify: {
        status: "adjusted",
        note: "The master list uses one word for distinct artefacts, so this entry separates them. Version history read on Garrett's own jjg.net page: 1.0 on 17 October 2000, 1.1 on 31 January 2001, 1.1a on 17 September 2001 and 1.1b on 6 March 2002. The same page defines the page as a rectangle, the pagestack for functionally identical pages, the dog-eared icon for files, connectors, arrows and areas, states that the diagram focuses on macrostructure while page-level microstructure goes elsewhere, and links the reverse-engineered MetaFilter sample diagram. The 50,000 URL and 50MB (52,428,800 bytes) limits, and the matching index-file limits, are quoted from sitemaps.org's protocol page. The supplemental-navigation sense is in chapter 8 of the IA 4th edition and the structure diagram is a deliverable in its chapter 13."
      },
      belongs: {
        verdict: "core",
        why: "The structure diagram is a standard design deliverable, and knowing that the word means three things prevents a genuinely common client misunderstanding."
      },
      related: [656, 645, 660, 659]
    },

    {
      n: 656,
      title: "User flows",
      aka: ["Task flows", "Interaction diagrams"],
      oneLine: "A diagram of how someone moves through a task, step by step, including the branches.",
      demo: {
        caption: "The left flow has one outcome. The real task has at least two, and the second one still needs designing.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Happy path only</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 296 152\"><rect class=\"s\" x=\"68\" y=\"10\" width=\"160\" height=\"26\" rx=\"2\"/><text class=\"t\" x=\"80\" y=\"27\">enter password</text><path class=\"s-mute\" d=\"M148 36 V50\"/><path class=\"f-mute\" d=\"M148 56 l-4 -7 h8 z\"/><rect class=\"s\" x=\"68\" y=\"56\" width=\"160\" height=\"26\" rx=\"2\"/><text class=\"t\" x=\"80\" y=\"73\">signed in</text><path class=\"s-mute\" d=\"M68 23 H40 V117 H62\" stroke-dasharray=\"4 3\"/><path class=\"f-mute\" d=\"M68 117 l-7 -4 v8 z\"/><rect class=\"s-mute\" x=\"68\" y=\"104\" width=\"160\" height=\"26\" rx=\"2\" stroke-dasharray=\"4 3\"/><text class=\"t\" x=\"80\" y=\"121\">not drawn, not designed</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Every branch drawn</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 296 152\"><rect class=\"s\" x=\"68\" y=\"10\" width=\"160\" height=\"26\" rx=\"2\"/><text class=\"t\" x=\"80\" y=\"27\">enter password</text><path class=\"s-mute\" d=\"M148 36 V46\"/><path class=\"s\" d=\"M148 46 l18 16 l-18 16 l-18 -16 z\"/><path class=\"s-mute\" d=\"M130 62 H56 V96\"/><path class=\"s-mute\" d=\"M166 62 H240 V96\"/><text class=\"t\" x=\"96\" y=\"58\">no</text><text class=\"t\" x=\"196\" y=\"58\">yes</text><rect class=\"s\" x=\"8\" y=\"96\" width=\"104\" height=\"26\" rx=\"2\"/><text class=\"t\" x=\"16\" y=\"113\">wrong password</text><rect class=\"s\" x=\"184\" y=\"96\" width=\"104\" height=\"26\" rx=\"2\"/><text class=\"t\" x=\"192\" y=\"113\">signed in</text><path class=\"s-mute\" d=\"M60 122 V140 H252 V23 H234\"/><path class=\"f-mute\" d=\"M228 23 l7 -4 v8 z\"/></svg></div></div></div>"
      },
      what: "Garrett's Visual Vocabulary handles flows with the same notation as structure. Its underlying model is three lines long: the system presents paths, the user moves along them through actions, and those actions cause the system to generate results. Arrows carry direction, downstream meaning towards task completion. A diamond marks a decision point where the system chooses which result to show. Repeated sequences such as login are drawn once as a flow area and referenced elsewhere, in the way a subroutine is.",
      why: "A flow forces the branches into the open. Most of the work in a real task is the failure cases, and those only get designed if something on the page has a line pointing at them.",
      how: [
        "Diagram the task, not the screens, and stop before you start drawing buttons.",
        "Draw every branch out of a decision point, including the null result where nothing is offered.",
        "Factor repeated sequences into one referenced flow rather than copying them into every diagram.",
        "Label an arrow only when the user's action needs clarifying, and push longer notes to a footnote."
      ],
      example: "A login sequence drawn as a flow area: one entry point, a decision diamond for a failed password, an error branch, and a reference symbol wherever login appears inside a larger task.",
      numbers: "",
      pitfall: "Diagramming only the happy path. The flow then looks tidy, the build begins, and every error state gets invented in a hurry by whoever is closest to the deadline.",
      source: "Jesse James Garrett, A Visual Vocabulary for Describing Information Architecture and Interaction Design, v1.0 (2000), v1.1b (2002).",
      verify: {
        status: "verified",
        note: "Read Garrett's original document at jjg.net: the paths-actions-results model, the macrostructure and microstructure distinction, decision points as diamonds borrowed from flow charts, flow areas and references, and conditional branches, selectors and null results are all in his text."
      },
      belongs: {
        verdict: "core",
        why: "It is the standard notation for describing behaviour before it is built, and the fastest way to find the states nobody has designed."
      },
      related: [654, 655, 625, 645]
    },

    {
      n: 657,
      title: "Content inventory and audit",
      aka: ["Content audit", "ROT analysis"],
      oneLine: "List every piece of content you have, then judge whether each one deserves to survive.",
      demo: {
        caption: "The left half lists what exists. The right half is the judgement, and the right half is the one that gets skipped.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 610 140\"><text class=\"t\" x=\"10\" y=\"14\">inventory: what is there</text><text class=\"t\" x=\"352\" y=\"14\">audit: is it any good</text><path class=\"s-accent\" d=\"M340 6 V132\"/><text class=\"t\" x=\"10\" y=\"32\">page</text><text class=\"t\" x=\"210\" y=\"32\">updated</text><text class=\"t\" x=\"280\" y=\"32\">owner</text><text class=\"t\" x=\"352\" y=\"32\">rot</text><text class=\"t\" x=\"452\" y=\"32\">decision</text><path class=\"s-mute\" d=\"M10 40 H600\"/><text class=\"t\" x=\"10\" y=\"58\">/about/our-history</text><text class=\"t\" x=\"210\" y=\"58\">2014</text><text class=\"t\" x=\"280\" y=\"58\">none</text><text class=\"t\" x=\"352\" y=\"58\">outdated</text><rect class=\"s-accent\" x=\"448\" y=\"45\" width=\"66\" height=\"17\" rx=\"2\"/><text class=\"t\" x=\"458\" y=\"58\">delete</text><text class=\"t\" x=\"10\" y=\"78\">/services/repairs</text><text class=\"t\" x=\"210\" y=\"78\">2025</text><text class=\"t\" x=\"280\" y=\"78\">ops</text><text class=\"t\" x=\"352\" y=\"78\">&mdash;</text><rect class=\"s-accent\" x=\"448\" y=\"65\" width=\"66\" height=\"17\" rx=\"2\"/><text class=\"t\" x=\"458\" y=\"78\">keep</text><text class=\"t\" x=\"10\" y=\"98\">/services/repair-guide</text><text class=\"t\" x=\"210\" y=\"98\">2019</text><text class=\"t\" x=\"280\" y=\"98\">ops</text><text class=\"t\" x=\"352\" y=\"98\">redundant</text><rect class=\"s-accent\" x=\"448\" y=\"85\" width=\"66\" height=\"17\" rx=\"2\"/><text class=\"t\" x=\"458\" y=\"98\">merge</text><text class=\"t\" x=\"10\" y=\"118\">/news/2016-open-day</text><text class=\"t\" x=\"210\" y=\"118\">2016</text><text class=\"t\" x=\"280\" y=\"118\">comms</text><text class=\"t\" x=\"352\" y=\"118\">trivial</text><rect class=\"s-accent\" x=\"448\" y=\"105\" width=\"66\" height=\"17\" rx=\"2\"/><text class=\"t\" x=\"458\" y=\"118\">delete</text></svg></div>"
      },
      what: "These are two jobs with one reputation. An inventory is quantitative and answers what is there: a row per page or asset, with URL, format, title, owner and last updated. An audit is qualitative and answers whether it is any good. Jeffrey Veen's 2002 Adaptive Path article, Doing a Content Inventory, gave the practice its first widely read write-up, and his own column set was a link ID, a link name, the URL, the document type, topics and keywords, the owner or maintainer, a ROT column and free notes. ROT means redundant, outdated or trivial, and Veen's article is where most people first met it. Kristina Halvorson made the case for the audit in Content Strategy for the Web (2009).",
      why: "It converts a vague redesign into a countable job. It also stops the most common failure in a rebuild, which is discovering three weeks from launch that four hundred pages nobody mentioned still need a home.",
      how: [
        "Automate the crawl to populate the rows, then do the judgement by hand.",
        "Record an owner and a decision for every row: keep, revise, merge, delete.",
        "Sort by traffic before you audit, so the most-used and least-used pages get looked at first.",
        "Consider a rolling partial inventory rather than one heroic pass, which is Louis Rosenfeld's argument and a far more realistic one for a small team."
      ],
      example: "A spreadsheet with one row per page carrying URL, format, page title, owner, date last updated and an audit note. Unglamorous, and it is the artefact that makes a migration survivable.",
      numbers: "",
      pitfall: "Doing the inventory and skipping the audit. You end up with a beautiful list of everything and no decision about anything, and the whole lot gets migrated by default.",
      source: "Jeffrey Veen, Doing a Content Inventory (Or, A Mind-Numbingly Detailed Odyssey Through Your Web Site), Adaptive Path, 18 June 2002; Kristina Halvorson, Content Strategy for the Web (2009).",
      verify: {
        status: "verified",
        note: "Veen's article read at veen.com: dated 18 June 2002, and his own columns are link ID, link name, link, document type, topics and keywords, owner and maintainer, ROT, and notes, with ROT spelled out as redundant, outdated or trivial. An earlier draft said ROT had no named originator; Veen's 2002 article is the earliest widely read use I can point to, so the entry now credits it there rather than to no one. The typical wider column set (URL, format, meta title, owner, date last updated, audit notes), the Halvorson 2009 reference and Louis Rosenfeld's argument that ongoing partial inventories are more cost-effective and realistic than one comprehensive pass are all on Wikipedia's Content inventory entry with links to the originals."
      },
      belongs: {
        verdict: "core",
        why: "No structure decision is real until you know what content exists, and this is the only method for finding out."
      },
      related: [658, 659, 638, 660]
    },

    {
      n: 658,
      title: "Content model",
      aka: ["Structured content", "Content types"],
      oneLine: "Define the kinds of thing your content is about, their fields, and how they relate.",
      demo: {
        caption: "One record, described once. The three panels below are generated from the same fields, not written out three times.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 610 204\"><rect class=\"s\" x=\"10\" y=\"14\" width=\"150\" height=\"90\" rx=\"2\"/><text class=\"t\" x=\"22\" y=\"32\">Session</text><path class=\"s-mute\" d=\"M10 38 H160\"/><text class=\"t\" x=\"22\" y=\"54\">title</text><text class=\"t\" x=\"22\" y=\"68\">starts</text><text class=\"t\" x=\"22\" y=\"82\">speaker</text><text class=\"t\" x=\"22\" y=\"96\">venue</text><rect class=\"s\" x=\"210\" y=\"14\" width=\"120\" height=\"44\" rx=\"2\"/><text class=\"t\" x=\"222\" y=\"32\">Person</text><path class=\"s-mute\" d=\"M210 38 H330\"/><text class=\"t\" x=\"222\" y=\"52\">name</text><rect class=\"s\" x=\"210\" y=\"68\" width=\"120\" height=\"44\" rx=\"2\"/><text class=\"t\" x=\"222\" y=\"86\">Room</text><path class=\"s-mute\" d=\"M210 92 H330\"/><text class=\"t\" x=\"222\" y=\"106\">floor</text><path class=\"s-mute\" d=\"M160 82 H186 V36 H204\"/><path class=\"f-mute\" d=\"M210 36 l-7 -4 v8 z\"/><path class=\"s-mute\" d=\"M160 96 H186 V90 H204\"/><path class=\"f-mute\" d=\"M210 90 l-7 -4 v8 z\"/><path class=\"s-accent\" d=\"M85 104 V132 H500 M100 132 V148 M300 132 V148 M500 132 V148\"/><rect class=\"s-mute\" x=\"10\" y=\"148\" width=\"180\" height=\"48\" rx=\"2\"/><text class=\"t\" x=\"20\" y=\"166\">schedule row</text><text class=\"t\" x=\"20\" y=\"182\">09:30 Opening keynote</text><rect class=\"s-mute\" x=\"210\" y=\"148\" width=\"180\" height=\"48\" rx=\"2\"/><text class=\"t\" x=\"220\" y=\"166\">speaker page</text><text class=\"t\" x=\"220\" y=\"182\">Ada Byron, 09:30</text><rect class=\"s-mute\" x=\"410\" y=\"148\" width=\"180\" height=\"48\" rx=\"2\"/><text class=\"t\" x=\"420\" y=\"166\">search result</text><text class=\"t\" x=\"420\" y=\"182\">Opening keynote, Studio 2</text></svg></div>"
      },
      what: "Mike Atherton and Carrie Hane set out the method in Designing Connected Content (2017): begin with a domain model of the real-world things your subject is made of, then turn those into content types, each with defined fields and defined relationships to other types. A conference session type might carry title, description, speakers, time, venue. The point is that the relationships become explicit data rather than something implied by page layout.",
      why: "Structured content can be reassembled. The same session record can appear in a schedule, on a speaker page, in a search result and in a feed, without anyone copying text. It also gives you the contextual links that deep content usually lacks, because the relationships are already recorded.",
      how: [
        "Model the subject before the pages. Ask what things exist, not what pages we need.",
        "Give every type a small set of fields that each do a job somewhere in the interface.",
        "Record relationships explicitly, so related items are generated rather than hand-picked.",
        "Test the model by rendering a record with nonsense text. If it is still recognisable as its type, the model holds."
      ],
      example: "The IA book's example is a recipe: its objects are a list of ingredients, directions, a title and so on. Render it as lorem ipsum and it is still recognisably a recipe. Put the steps before the ingredients, or drop an important object, and the model collapses.",
      numbers: "",
      pitfall: "Modelling the pages instead of the subject. A model built from the current site structure locks in today's navigation and has to be rebuilt the moment the navigation changes."
      ,
      source: "Mike Atherton and Carrie Hane, Designing Connected Content (New Riders, 2017); Rosenfeld, Morville and Arango, Information Architecture, 4th edition (2015), chapter 13.",
      verify: {
        status: "verified",
        note: "Book, authors, publisher and 2017 date confirmed against the O'Reilly listing and the publisher's description, which names the end-to-end process for building a structured content framework. The recipe example is read from chapter 13 of the IA 4th edition, along with its statement that content models support the missing piece in many information environments, contextual navigation that works deep within the product; the chapter reference has been added to the source line."
      },
      belongs: {
        verdict: "core",
        why: "Any product with more than a handful of repeated content types is designing a content model, and doing it accidentally is the expensive option."
      },
      related: [640, 657, 659, 641]
    },

    {
      n: 659,
      title: "Page types and templates",
      aka: ["Page-level patterns"],
      oneLine: "Design a small set of repeatable page structures rather than designing pages one at a time.",
      demo: {
        caption: "One template, two real pages. Frost's test is whether the headline slot survives 40 characters and then 340 of them.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">The template</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><span class=\"db-note\">Headline</span></div><div class=\"db-card\"><span class=\"db-note\">Date and author</span></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i><i></i><i></i></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Two pages in it</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Council moves bin day in eleven streets</span><span class=\"db-note\">39 characters</span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Why the council has decided to move the Tuesday recycling collection to Thursday in eleven streets in the west of the borough from the beginning of next month, and what residents who currently put their bins out on Monday evening should do instead, including where to leave garden waste sacks while the change beds in</span><span class=\"db-note\">317 characters</span></div></div></div></div></div></div>"
      },
      what: "Brad Frost's Atomic Design puts templates and pages at the top of its five levels. A template is a page-level object that places components into a layout and articulates the underlying content structure. A page is that template filled with real content, used to test whether the system survives real variation. The distinction matters: a template is about what the content is made from, a page is about what the content actually is.",
      why: "A defined set of page types turns an unbounded design job into a bounded one, and it gives editors somewhere obvious to put new content. It also exposes the content extremes, because a template has to hold a 40-character headline and a 340-character one.",
      how: [
        "Derive page types from the content model, so each type of thing has a home.",
        "Keep the set small and name each type by what it holds, not by which department requested it.",
        "Build every template against real content at its shortest and its longest.",
        "Treat a request for a bespoke page as a signal that a type is missing, and decide deliberately which it is."
      ],
      example: "Frost's own case: a template has to account for the range the content can take, because one article headline might be 40 characters long and another 340. The page is where you find that out, by pouring real headlines into the template.",
      numbers: "Frost's illustration of content variation in a template: a headline of 40 characters against one of 340.",
      pitfall: "One flexible template that can do anything. It removes the constraint that made templates useful, and the site drifts back to page-by-page design within a year.",
      source: "Brad Frost, Atomic Design (2016), chapter 2.",
      verify: {
        status: "verified",
        note: "Read Frost's own Atomic Design text at atomicdesign.bradfrost.com. Templates are defined there as page-level objects that place components into a layout and articulate the design's underlying content structure; pages as specific instances of templates showing what a user interface looks like with real representative content in place, used to test the system and to articulate variations in templates. The 40 and 340 character headline figures are his illustration of the content ranges a template has to survive."
      },
      belongs: {
        verdict: "core",
        why: "It is the bridge between information architecture and a design system, and it decides how a site behaves after the designers leave."
      },
      related: [658, 655, 657, 632]
    },

    {
      n: 660,
      title: "URL design",
      aka: ["Cool URIs", "Address design"],
      oneLine: "Addresses are part of the interface and should be readable, guessable and permanent.",
      demo: {
        caption: "Berners-Lee's own comparison. The right-hand address outlives the software, and chopping off the end lands somewhere sensible.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Exposes the mechanism</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-input\">/cgi-bin/getpub?nsf9814</span><div class=\"db-col db-col--tight\"><span class=\"db-note\">cgi-bin &middot; the software</span><span class=\"db-note\">getpub &middot; the mechanism</span><span class=\"db-note\">nsf9814 &middot; an internal id</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Readable and hackable</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-input\">/pubs/1998/nsf9814/nsf9814.htm</span><div class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--quiet db-btn--sm\">/pubs/1998/nsf9814/ &#8594; that report</span><span class=\"db-btn db-btn--quiet db-btn--sm\">/pubs/1998/ &#8594; that year</span><span class=\"db-btn db-btn--quiet db-btn--sm\">/pubs/ &#8594; every publication</span></div></div></div></div></div>"
      },
      what: "Tim Berners-Lee's 1998 W3C note, Cool URIs Don't Change, puts it as URIs do not change, people change them, and says that designing an address mostly means leaving information out. His list of what to leave out runs: author's name, subject, status words such as old, draft and latest, access level, file extension, software mechanism and disk name. Jakob Nielsen's URL as UI, published in March 1999, adds the user-facing side: a memorable and spellable domain, short and easy-to-type addresses, addresses that show the structure, addresses that can be hacked by chopping off the end, and addresses that persist.",
      why: "People read, type, guess and judge addresses. A stable address is also the only thing that keeps inbound links and bookmarks working through a redesign.",
      how: [
        "Leave out anything that will change: department names, campaign names, status words, file extensions.",
        "Make addresses hackable, so removing the last segment lands on a sensible parent.",
        "Use lowercase and hyphens, and keep them short enough to say aloud.",
        "Never delete an address. Redirect it, and keep the redirect."
      ],
      example: "Berners-Lee's worked comparison, using the National Science Foundation's own site: the address /cgi-bin/getpub?nsf9814 exposes how the site is run, while /pubs/1998/nsf9814/nsf9814.htm carries a date that he can imagine still being valid in 2098.",
      numbers: "Nielsen (1999) advised keeping every URL on a site to fewer than 78 characters so it would not wrap across a line feed in email. The rationale is dated; the preference for short addresses is not.",
      pitfall: "Reorganising the site and letting the old addresses 404. Berners-Lee's answer to we just reorganised our website is blunt: if you feel the old addresses cannot be kept running, you chose them badly."
      ,
      source: "Tim Berners-Lee, Cool URIs Don't Change, W3C style guide (1998); Jakob Nielsen, URL as UI, Alertbox (March 1999).",
      verify: {
        status: "verified",
        note: "Read the W3C page at w3.org/Provider/Style/URI in full: the opening line that URIs do not change but people change them, the seven-item what to leave out list, the NSF address comparison, and the reply to we just reorganised our website, which is that if the old addresses cannot be kept running you chose them very badly. Read Nielsen's URL as UI on nngroup.com for the guidelines and the advice that all URLs on a site be less than 78 characters so they will not wrap across a line feed. One inconsistency left visible rather than resolved: nngroup.com dates the article 20 March 1999, while the original address, linked from the W3C page, was useit.com/alertbox/990321.html, which implies 21 March. The entry therefore says March 1999."
      },
      belongs: {
        verdict: "core",
        why: "The address is a visible, shareable, permanent part of the interface, and it is usually specified by nobody."
      },
      related: [655, 649, 650, 659]
    },

    {
      n: 661,
      title: "Pace layering of content",
      aka: ["Shearing layers", "Layers of change"],
      oneLine: "Separate the parts of a system by how fast they change, so fast edits do not disturb slow structure.",
      demo: {
        caption: "Four layers of one site against a year of edits. Tooling belongs at the top, argument and testing at the bottom.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 610 180\"><text class=\"t\" x=\"10\" y=\"14\">content layer</text><text class=\"t\" x=\"330\" y=\"14\">edits over one year</text><rect class=\"s-mute\" x=\"10\" y=\"24\" width=\"300\" height=\"30\" rx=\"2\"/><text class=\"t\" x=\"22\" y=\"43\">news and campaigns</text><path class=\"s-mute\" d=\"M330 39 H590\"/><path class=\"s\" d=\"M330 32 v14 M350 32 v14 M370 32 v14 M390 32 v14 M410 32 v14 M430 32 v14 M450 32 v14 M470 32 v14 M490 32 v14 M510 32 v14 M530 32 v14 M550 32 v14 M570 32 v14\"/><rect class=\"s-mute\" x=\"10\" y=\"62\" width=\"300\" height=\"30\" rx=\"2\"/><text class=\"t\" x=\"22\" y=\"81\">reference content</text><path class=\"s-mute\" d=\"M330 77 H590\"/><path class=\"s\" d=\"M330 70 v14 M390 70 v14 M450 70 v14 M510 70 v14 M570 70 v14\"/><rect class=\"s-mute\" x=\"10\" y=\"100\" width=\"300\" height=\"30\" rx=\"2\"/><text class=\"t\" x=\"22\" y=\"119\">page types and templates</text><path class=\"s-mute\" d=\"M330 115 H590\"/><path class=\"s\" d=\"M400 108 v14 M500 108 v14\"/><rect class=\"s-mute\" x=\"10\" y=\"138\" width=\"300\" height=\"30\" rx=\"2\"/><text class=\"t\" x=\"22\" y=\"157\">structure, labels and addresses</text><path class=\"s-mute\" d=\"M330 153 H590\"/><path class=\"s\" d=\"M450 146 v14\"/></svg></div>"
      },
      what: "Stewart Brand's account is precise. In the early 1970s the English architect Frank Duffy wrote that a building properly conceived is several layers of longevity of built components, and named four in commercial buildings: Shell, lasting perhaps 50 years; Services, swapped out every 15 or so; Scenery, the interior walls, moving every 5 to 7 years; and Set, the furniture, moving sometimes monthly. For How Buildings Learn (1994), Brand expanded these to six: Site, Structure, Skin, Services, Space Plan and Stuff, in a chapter he titled Shearing Layers. He generalised it as pace layering in The Clock of the Long Now (1999), summarised as fast learns, slow remembers, and fast gets all our attention while slow has all the power. Applied to content, structure and page types sit at the slow end, evergreen reference content in the middle, and news and campaigns at the fast end.",
      why: "It tells you where to spend care. Slow layers deserve argument and testing because changing them later is expensive. Fast layers deserve tooling, because they change constantly and should not need a designer.",
      how: [
        "Sort your content by how often it genuinely changes, not by how important someone says it is.",
        "Build fast-changing content so an editor can change it without touching navigation, templates or addresses.",
        "Keep slow layers, addresses, page types and top-level labels, deliberately hard to change.",
        "Check the boundary. A campaign that requires a new top-level nav item is a fast layer leaking into a slow one."
      ],
      example: "A university site: the department structure changes over years, course descriptions over terms, open-day dates weekly. Each should be editable at its own pace by different people.",
      numbers: "",
      pitfall: "Letting the fastest layer set the pace for everything. Once the home page is rebuilt for each campaign, the navigation follows, and the structure people had learned quietly disappears.",
      source: "Stewart Brand, How Buildings Learn (1994) and The Clock of the Long Now (1999); Stewart Brand, Pace Layering: How Complex Systems Learn and Keep Learning, Journal of Design and Science (17 January 2018), after Frank Duffy.",
      verify: {
        status: "adjusted",
        note: "Pace layering of content is not a term from a named source, so this entry names the actual origin and states the content application as an application. Read the Journal of Design and Science paper in full. Its acknowledgements carry Duffy's sentence about layers of longevity, his four layers with the lifespans quoted here, Brand's expansion to six for the 1994 book, the Shearing Layers chapter title, and Brand's note that the article text is a lightly edited chapter from The Clock of the Long Now (1999). The passage beginning fast learns, slow remembers and ending fast gets all our attention, slow has all the power is quoted from the same paper. The application to content layers is common practice rather than a sourced doctrine, and is presented as such."
      },
      belongs: {
        verdict: "adjacent",
        why: "It comes from architecture and systems thinking, not design research. Its specific design use is deciding which parts of an information environment must stay stable and which should be cheap for a non-designer to change."
      },
      related: [657, 659, 655, 632]
    },

    {
      n: 9637,
      title: "Exact and ambiguous organisation schemes",
      aka: ["Objective and subjective schemes"],
      oneLine: "Some schemes need no judgement to file or find; the useful ones usually need plenty.",
      demo: {
        caption: "Same service in both routes. Only the right-hand one works when you never knew it was called bulky waste collection.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Exact: services A to Z</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--quiet db-btn--sm\">Bins and boxes</span><span class=\"db-btn db-btn--sm\">Bulky waste collection</span><span class=\"db-btn db-btn--quiet db-btn--sm\">Council tax</span><span class=\"db-btn db-btn--quiet db-btn--sm\">Dog fouling</span><span class=\"db-btn db-btn--quiet db-btn--sm\">Housing benefit</span><span class=\"db-btn db-btn--quiet db-btn--sm\">Planning applications</span><span class=\"db-note\">you need the exact name</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Ambiguous: by topic</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Bins and recycling</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--quiet db-btn--sm\">Collection days</span><span class=\"db-btn db-btn--sm\">Bulky waste collection</span><span class=\"db-btn db-btn--quiet db-btn--sm\">Report a missed bin</span></div></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Parking</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--quiet db-btn--sm\">Permits</span><span class=\"db-btn db-btn--quiet db-btn--sm\">Fines</span></div></div></div><span class=\"db-note\">you only need the problem</span></div></div></div></div>"
      },
      what: "Rosenfeld, Morville and Arango draw a line that the rest of organisation work sits on. Exact schemes divide content into well-defined, mutually exclusive sections: alphabetical, chronological, geographical. They are cheap to build and easy to use, and they only work for known-item searching, where you already know the name of what you want. Ambiguous schemes divide by topic, task, audience or metaphor. They require judgement to build and to use, and they are what people reach for when they cannot name the thing they need.",
      why: "It explains why the tidy scheme so often fails. An A to Z of every service is perfect for someone who knows the service name and useless for everyone else.",
      how: [
        "Ask whether your audience can name what they want. If not, an exact scheme will not help them.",
        "Offer an exact scheme alongside an ambiguous one rather than instead of it: an A to Z index next to topic navigation.",
        "Budget more time for ambiguous schemes, because the arguments are real and card sorting is how you settle them.",
        "Use an exact scheme within a category once the set is small and the names are known."
      ],
      example: "A council website: the services A to Z is exact, the Bins and recycling section is ambiguous, and a resident who does not know the service is called Bulky waste collection needs the second one.",
      numbers: "",
      pitfall: "The book reports that extensive research shows library patrons use ambiguous subject schemes such as Dewey far more than exact author or title schemes, but does not name that research, so treat it as the authors' claim rather than a citable finding.",
      source: "Rosenfeld, Morville and Arango, Information Architecture, 4th edition (2015), chapter 6.",
      verify: {
        status: "verified",
        note: "Added as a gap. Read chapter 6 of the 4th edition, which defines exact or objective schemes as dividing information into well-defined and mutually exclusive sections, names alphabetical order of countries as the example of known-item searching, and later advises using both types of scheme wherever possible. The claim about library patrons is quoted from the same chapter and is prefaced there with the words extensive research shows, without a citation; the pitfall field flags it as the authors' claim rather than a citable finding."
      },
      belongs: {
        verdict: "core",
        why: "It is the distinction that decides whether a structure will work for people who cannot name what they want, which is most people."
      },
      related: [637, 638, 649, 643]
    },

    {
      n: 9646,
      title: "Search-log analysis",
      aka: ["Search analytics", "Query log review"],
      oneLine: "Read what people typed into your search box; it is the cheapest research you will ever run.",
      demo: {
        caption: "Queries ranked by volume. The site's own label comes third, and the two accent rows returned nothing at all.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 610 150\"><text class=\"t\" x=\"10\" y=\"14\">query typed</text><text class=\"t\" x=\"170\" y=\"14\">searches</text><text class=\"t\" x=\"10\" y=\"32\">jobs</text><rect class=\"f-mute\" x=\"170\" y=\"23\" width=\"300\" height=\"11\" rx=\"1\"/><text class=\"t\" x=\"478\" y=\"32\">412</text><text class=\"t\" x=\"10\" y=\"54\">vacancies</text><rect class=\"f-mute\" x=\"170\" y=\"45\" width=\"131\" height=\"11\" rx=\"1\"/><text class=\"t\" x=\"309\" y=\"54\">180</text><text class=\"t\" x=\"10\" y=\"76\">careers</text><rect class=\"f-mute\" x=\"170\" y=\"67\" width=\"70\" height=\"11\" rx=\"1\"/><text class=\"t\" x=\"248\" y=\"76\">96</text><text class=\"t\" x=\"280\" y=\"76\">the menu calls it this</text><text class=\"t\" x=\"10\" y=\"98\">bulky waste</text><rect class=\"f-accent\" x=\"170\" y=\"89\" width=\"54\" height=\"11\" rx=\"1\"/><text class=\"t\" x=\"232\" y=\"98\">74 &middot; 0 results</text><text class=\"t\" x=\"10\" y=\"120\">sofa collection</text><rect class=\"f-accent\" x=\"170\" y=\"111\" width=\"37\" height=\"11\" rx=\"1\"/><text class=\"t\" x=\"215\" y=\"120\">51 &middot; 0 results</text><path class=\"s-mute\" d=\"M10 128 H600\"/><text class=\"t\" x=\"10\" y=\"144\">accent = the query returned no results</text></svg></div>"
      },
      what: "Every query is a person telling you, unprompted, what they wanted and what words they used for it. Reading the logs shows the content people could not find by browsing, the vocabulary they use instead of yours, the things they expect you to have and do not, and the queries that return nothing. Rosenfeld, Morville and Arango treat it as a standard research method alongside card sorting and testing.",
      why: "It is free, continuous and unbiased by a research setting. Nobody performs for a search box. It also gives you the raw material for three other jobs in this section: label wording, synonym rings and best bets.",
      how: [
        "Sort by volume and fix the head of the list first, usually with best bets.",
        "Look at queries returning zero results, which are either missing content or a vocabulary mismatch.",
        "Feed the wording straight into labels and into the synonym ring.",
        "Re-read the logs after a restructure. A query spike for something that used to be in the menu means you buried it."
      ],
      example: "A site where staff call it Careers and the logs are full of jobs and vacancies. The fix is a synonym ring and possibly a relabel, and it costs an afternoon.",
      numbers: "",
      pitfall: "Reading only the head of the list. The tail is where the missing content lives, and the zero-result report is the most useful one in the set.",
      source: "Rosenfeld, Morville and Arango, Information Architecture, 4th edition (2015), chapters 3, 7 and 9.",
      verify: {
        status: "verified",
        note: "Added as a gap. Read the book's text rather than only its index. Chapter 3 names search analytics as one of the authors' two favourite research methods and defines it as reviewing the most common queries, usually from the search engine's logfiles, to diagnose problems with search, metadata, navigation and content. Chapter 7 carries a subsection headed Search-log analysis, describing it as one of the least intrusive sources of data on the labels an audience actually uses, and advises analysing search logs regularly and adjusting labels. Chapter 9 returns to it under search as a learning tool. An earlier draft cited index pages 170 and 336; two printings of the book paginate differently, so page numbers have been dropped in favour of chapters."
      },
      belongs: {
        verdict: "core",
        why: "It is the only research method in this section that runs continuously and for free, and it directly feeds labelling, vocabulary and search tuning."
      },
      related: [646, 639, 644, 649]
    }

  ]
};
