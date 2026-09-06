window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[16] = {
  n: 16,
  slug: "content-voice",
  title: "Content, copy and voice",
  blurb: "What the words in a design have to do, and which published standards actually govern them.",
  intro: "This section covers the words in a design: headings, labels, buttons, error messages and running text, plus how you decide what they say. The material has three main roots. Newsroom practice gave us the inverted pyramid and front-loading. Plain-language campaigners and then legislators turned readability into something you can be held to, from ISO 24495-1 to the UK Consumer Rights Act, while the web usability studies of the late 1990s supplied the measurements showing that people scan rather than read. Copy is design work, and several of the rules here are law rather than advice.",
  sources: [
    "ISO 24495-1:2023, Plain language, Part 1: Governing principles and guidelines",
    "John Morkes and Jakob Nielsen, Concise, SCANNABLE, and Objective: How to Write for the Web (1997); Jakob Nielsen, How Users Read on the Web, Nielsen Norman Group, 30 September 1997",
    "Jakob Nielsen, Be Succinct! Writing for the Web, Nielsen Norman Group, 14 March 1997",
    "Jakob Nielsen, How Little Do Users Read?, Nielsen Norman Group, 5 May 2008, on data from Weinreich, Obendorf, Herder and Mayer, Not Quite the Average: An Empirical Study of Web Use, ACM Transactions on the Web 2:1 (2008)",
    "Kara Pernice, F-Shaped Pattern of Reading on the Web, Nielsen Norman Group, 12 November 2017",
    "Amy Schade, Inverted Pyramid: Writing for Comprehension, Nielsen Norman Group, 11 February 2018",
    "Hoa Loranger and Jakob Nielsen, Microcontent: How to Write Headlines, Page Titles, and Subject Lines, Nielsen Norman Group, 29 January 2017",
    "Jakob Nielsen, 10 Usability Heuristics for User Interface Design (1994, revised)",
    "W3C, Web Content Accessibility Guidelines 2.2: SC 2.4.4, 2.4.6, 3.1.5, 3.2.4",
    "George A. Miller, The Magical Number Seven, Plus or Minus Two, Psychological Review 63 (1956), pp. 81-97",
    "Nelson Cowan, The Magical Number 4 in Short-Term Memory, Behavioral and Brain Sciences 24:1 (2001), pp. 87-114",
    "Rudolf Flesch, A New Readability Yardstick, Journal of Applied Psychology 32:3 (1948), pp. 221-233",
    "Kincaid, Fishburne, Rogers and Chissom, Derivation of New Readability Formulas for Navy Enlisted Personnel (1975)",
    "Robert Gunning, The Technique of Clear Writing (1952); G. Harry McLaughlin, SMOG Grading (1969)",
    "William Strunk Jr and E. B. White, The Elements of Style",
    "Geoffrey K. Pullum, 50 Years of Stupid Grammar Advice, The Chronicle of Higher Education, 17 April 2009 (The Chronicle Review, vol 55 issue 32, p B15)",
    "Apple, Human Interface Guidelines: Writing (current edition)",
    "Google, Material Design 3, Content design style guide",
    "Microsoft Writing Style Guide, Bias-free communication",
    "Kate Kiefer Lee, MailChimp Voice and Tone, voiceandtone.com (2012, archived); Kate Kiefer Lee, Voice And Tone: What's The Difference?, Forbes, 12 September 2012; Kate Kiefer Lee, Voice and Tone Live, UX Thursday Detroit keynote, transcript published by UIE, 17 September 2013",
    "Mailchimp Content Style Guide, Voice and Tone (current edition)",
    "ISO 9241-110:2020, Ergonomics of human-system interaction, Part 110: Interaction principles",
    "Kenny, Hattersley, Molins, Buckley, Povey and Pellicano, Which terms should be used to describe autism?, Autism (2016); Buijsman, Begeer and Scheeren, Autism 27:3 (2023), PubMed Central PMC10074744",
    "PatternFly content design guidance, Truncation; MDN Web Docs, CSS text-overflow",
    "IBM Carbon Design System, Content: writing style",
    "Quote Investigator, People Don't Want a Quarter-Inch Drill, They Want a Quarter-Inch Hole",
    "Pinsent Masons, Out-Law: Nobody reads terms and conditions, it's official (GameStation, April 2010)",
    "Jeffrey Zeldman, Content precedes design, zeldman.com, 6 May 2008",
    "Karen McGrane, Content Strategy for Mobile, A Book Apart (2012)",
    "Trent Walton, Content Choreography, trentwalton.com, 14 July 2011",
    "Margot Bloomstein, Content Strategy at Work (2012)",
    "Oli Gardner / Unbounce, The 7 Principles of Conversion-Centered Design",
    "Robert B. Cialdini, Influence: The Psychology of Persuasion (1984)",
    "BIPM, The International System of Units (SI Brochure), 9th edition, section 5.4.3",
    "ISO 8601-1:2019, Date and time representations for information interchange",
    "Regulation (EU) 2016/679 (GDPR), Article 12; Consumer Rights Act 2015 (UK), sections 64 and 68",
    "GOV.UK content and publishing guidance, A to Z style guide; UK Home Office User-Centred Design Manual, Readability"
  ],
  entries: [
    {
      n: 662,
      title: "Clarity first",
      aka: ["Clarity over cleverness"],
      oneLine: "When clarity and any other goal collide, clarity wins.",
      demo: {
        caption: "The same service message twice. Only the right one tells you what has happened and what to do next.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Clever</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:15px\">Your journey, reimagined</span><span>We are rethinking how you get to work.</span><span><span class=\"db-btn db-btn--sm\">Let us take it from here</span></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Clear</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:15px\">The 07:42 to Leeds is cancelled</span><span>The next train leaves at 08:14 from platform 3.</span><span><span class=\"db-btn db-btn--sm\">See the 08:14</span></span></div></div></div></div></div>"
      },
      what: "Clarity first is the working rule that a reader has to understand the message before anything else about it counts. It is a doctrine rather than a named law and has no single author. The nearest formal statement is ISO 24495-1:2023, which defines plain language as communication in which wording, structure and design are so clear that intended readers can easily find what they need, understand what they find, and use that information. Note where design sits in that definition: inside it, not beside it.",
      why: "A reader who has to decode a sentence spends attention on decoding rather than deciding. Morkes and Nielsen measured the cost in 1997: the same page rewritten in concise language scored 58 per cent better on their usability measure than the marketing-prose version. Clarity buys you a reader who is still paying attention when they reach the thing you want them to do.",
      how: [
        "Read the copy out loud. Wherever you stumble, the reader will stumble.",
        "Name the one thing the reader must take away, then check the first sentence delivers it.",
        "Cut any word whose removal does not change the meaning.",
        "Have someone outside the project read it cold, with no explanation from you."
      ],
      example: "The ISO definition itself works as a checklist. It sets three tests, can the reader easily find it, understand it and use it, so you can hold a real page against it instead of arguing about style.",
      numbers: "ISO 24495-1:2023 defines plain language by three reader tests: easily find what they need, understand what they find, use that information.",
      pitfall: "Everyone agrees clarity matters, then defends an unclear headline as brand voice. The rule only bites if one named person can overrule the clever version.",
      source: "ISO 24495-1:2023, Plain language, Part 1. As a slogan, origin unclear.",
      verify: { status: "verified", note: "The ISO 24495-1:2023 definition was read verbatim in the published standard preview hosted by iTeh, and cross-checked against the International Plain Language Federation's summary. The 58 per cent figure was read in Nielsen's write-up of the Morkes and Nielsen 1997 study, How Users Read on the Web, dated 30 September 1997 on nngroup.com, where it is the measured usability improvement for the concise version against the promotional control." },
      belongs: { verdict: "core", why: "It is the governing rule for every other item in this section, and it has a published standard behind it rather than only a tradition." },
      related: [663, 666, 682, 687]
    },
    {
      n: 663,
      title: "Plain language",
      aka: ["Plain English"],
      oneLine: "Write so the intended reader understands it first time, without re-reading.",
      demo: {
        caption: "Two versions of one clause. Cover the labels and you still know which one you could act on.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">As drafted</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:13px\">Where the Customer fails to remit the sums due within the period specified herein, the Company reserves the right, at its sole discretion, to suspend the provision of services forthwith.</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Plain</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:13px\">If you do not pay within 30 days, we can switch your service off.</div></div></div></div>"
      },
      what: "Plain language is a published standard now, not a preference. ISO 24495-1:2023 sets four governing principles: readers get what they need (relevant), can easily find what they need (findable), can easily understand what they find (understandable), and can easily use the information (usable). Parts of it are also law. GDPR Article 12(1) requires information to be given in a concise, transparent, intelligible and easily accessible form, using clear and plain language. The UK Consumer Rights Act 2015 treats a contract term as transparent only if it is expressed in plain and intelligible language and is legible.",
      why: "Plain language shifts effort off the reader and onto the writer, which is where it belongs. It also reduces the support load, because a reader who understands the page does not ring you to ask what it meant. In regulated copy it is the difference between a term that binds and one a court can set aside.",
      how: [
        "Pick the reader before you pick the words, and write the sentence you would say to that person.",
        "Replace a technical term or explain it in the same sentence you first use it. Do not link away to a glossary.",
        "Check the page against the four ISO principles one at a time rather than as a general feeling.",
        "Keep a list of the words your organisation uses that customers never say."
      ],
      example: "The Plain English Campaign has run since 1979, when Chrissie Maher launched it by shredding government forms in Parliament Square. Its Crystal Mark still appears on documents that pass its review, which makes it a checkable public example rather than an anecdote.",
      numbers: "ISO 24495-1:2023 sets four governing principles. Plain Writing Act of 2010 (United States). Consumer Rights Act 2015 (UK), sections 64(3) and 68(2). GDPR Article 12(1).",
      pitfall: "Plain language gets confused with dumbing down. The standard is about the reader's effort, not the subject's difficulty, so a protocol written for surgeons can be plain and still fully technical.",
      source: "ISO 24495-1:2023; Plain Writing Act of 2010 (US); Consumer Rights Act 2015 (UK); GDPR Article 12.",
      verify: { status: "verified", note: "The four principles were read verbatim in the published ISO 24495-1:2023 standard preview and match the International Plain Language Federation's own statement of them. Consumer Rights Act wording read on legislation.gov.uk this session, sections 64(3) and 68(2). GDPR Article 12(1) is carried from the author's check against gdpr-info.eu and gdpr-text.com, which I did not re-open; the paraphrase here matches the article as commonly published. Plain Writing Act of 2010 named as the governing law on the US digital.gov plain-language guide. The 1979 founding, Chrissie Maher and the Parliament Square shredding are on the campaign's own published timeline and corroborated by independent accounts." },
      belongs: { verdict: "core", why: "It sets the baseline every other content rule in this section builds on, and in several jurisdictions it is a legal requirement rather than good practice." },
      related: [662, 667, 676, 687]
    },
    {
      n: 664,
      title: "Front-loaded sentences",
      aka: ["Frontloading", "Key words first"],
      oneLine: "Put the words that carry the meaning at the start of the line.",
      demo: {
        caption: "Only the first three words of each heading are dark. On the left they carry no meaning.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Run-up first</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight db-type\" style=\"font-size:13px;color:var(--ink-4)\"><span><span style=\"color:var(--ink)\">Information about how</span> to renew your passport</span><span><span style=\"color:var(--ink)\">We are pleased</span> to announce new opening hours</span><span><span style=\"color:var(--ink)\">This page explains</span> how to claim a refund</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Front-loaded</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight db-type\" style=\"font-size:13px;color:var(--ink-4)\"><span><span style=\"color:var(--ink)\">Renew your passport</span> online</span><span><span style=\"color:var(--ink)\">New opening hours</span> from 3 March</span><span><span style=\"color:var(--ink)\">Claim a refund</span> within 14 days</span></div></div></div></div>"
      },
      what: "Front-loading means the first few words of a heading, sentence, link or page title carry the point. GOV.UK's A to Z style guide instructs that page titles should be 65 characters or less, unique, clear and descriptive, frontloaded and optimised for search, with no full stop and no question form. Nielsen Norman Group puts the working length of a page title at 40 to 60 characters, the span it says influences search ranking and whether people click the link.",
      why: "A scanning reader takes the first words of a line and moves on. Anything you park after a wind-up clause is read by fewer people than you think. Front-loading also helps search and screen readers, both of which weight the opening words.",
      how: [
        "Delete the run-up. Cut phrases like Information about, We are pleased to announce and This page explains.",
        "Put the noun or verb the reader is hunting for in the first three words.",
        "Read only the first three words of every heading on the page. If the set does not tell the story, rewrite.",
        "Hold page titles inside the GOV.UK limit of 65 characters and check how they truncate in a browser tab."
      ],
      example: "The GOV.UK A to Z style guide entry for Titles is the checkable artefact: it states the 65-character limit and the frontloading rule in five bullet points, and every GOV.UK page title follows it.",
      numbers: "GOV.UK: page titles 65 characters or less, frontloaded. Nielsen Norman Group: the 40 to 60 characters of a page title are the ones that affect search ranking and clicks.",
      pitfall: "Writers front-load the heading and forget the body, so every paragraph still opens with a subordinate clause. The reader's eye lands on the left edge of each line, and that is where the meaning has to be.",
      source: "GOV.UK content and publishing guidance, A to Z style guide; Loranger and Nielsen, Microcontent, Nielsen Norman Group (2017).",
      verify: { status: "verified", note: "The GOV.UK rules were read on the A to Z style guide, which has moved to guidance.publishing.service.gov.uk: page titles must be 65 characters or less, frontloaded and optimised for search, with no full stop and not phrased as questions. The 40 to 60 character figure is the only length figure in the Nielsen Norman Group microcontent article (Loranger and Nielsen, 29 January 2017), where it is tied to how a page title influences search ranking and display." },
      belongs: { verdict: "core", why: "It is a layout decision as much as a writing one, because it determines what survives when a heading is truncated or scanned." },
      related: [668, 669, 670, 9670]
    },
    {
      n: 665,
      title: "Active voice",
      aka: [],
      oneLine: "Name the actor before the verb, unless you have a reason not to.",
      demo: {
        caption: "Same event, two sentences. The passive one never says who declined it, so the reader cannot tell who to ring.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Passive</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:14px\">Your payment was declined.</span><span class=\"db-note\">subject: your payment</span><span class=\"db-note\">actor: not named</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Active</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:14px\">Your bank declined this payment.</span><span class=\"db-note\">subject: your bank</span><span class=\"db-note db-note--accent\">actor: your bank</span></div></div></div></div></div>"
      },
      what: "Active voice puts the doer first: we cancelled your order, rather than your order was cancelled. Use the active voice is a section head in Strunk and White, and most plain-language guidance repeats it. The advice is a good default and a bad rule. Geoffrey Pullum, in 50 Years of Stupid Grammar Advice (The Chronicle of Higher Education, 17 April 2009), counted the four pairs of examples the section offers and found that a staggering three out of the four are mistaken diagnoses, which tells you how loosely the term gets used.",
      why: "Active sentences tend to be shorter and to answer who did this, which is exactly the question a reader has during an error or a confirmation. The passive earns its place when the actor is unknown, irrelevant or deliberately unnamed. Strunk and White say so themselves in the same section: they do not mean that the writer should entirely discard the passive voice, which is frequently convenient and sometimes necessary.",
      how: [
        "Default to active for instructions, confirmations and errors, where the reader needs to know who does what.",
        "Keep the passive when the actor genuinely does not matter, or when naming them would be worse.",
        "Check whether a passive is hiding responsibility. Your payment was declined leaves out who declined it.",
        "Ignore a grammar checker that flags every was and is. Most of those are not passives."
      ],
      example: "Apple's Human Interface Guidelines open their Be action oriented advice with the line that active voice and clear labels help people navigate. A separate item on pronouns then tells designers to avoid we altogether because it may be unclear who the we refers to, offering Unable to load content as much clearer than We're having trouble loading this content. So Apple prefers a subject-free construction to an active one with a vague actor.",
      numbers: "Pullum (2009): of the four pairs of examples in the Use the active voice section, three are misidentified as passive.",
      pitfall: "Writers trained to hunt the passive start deleting perfectly good sentences containing the verb to be. Pullum's finding is the warning: most people who enforce this rule cannot reliably identify a passive.",
      source: "William Strunk Jr and E. B. White, The Elements of Style; Geoffrey K. Pullum, 50 Years of Stupid Grammar Advice, The Chronicle of Higher Education, 17 April 2009.",
      verify: { status: "disputed", note: "Corrected the citation. The article's published title is 50 Years of Stupid Grammar Advice, not Fifty Years, and it ran on 17 April 2009 in The Chronicle Review, vol 55 issue 32, p B15. chronicle.com refuses the request with a 403, so I read the full text in the copy Pullum hosts himself at pullum.ppls.ed.ac.uk/50years.pdf. It carries the quoted line, the three misidentified examples he itemises, and his note that Strunk and White explicitly do not ask writers to discard the passive. Apple's two passages read on the current Human Interface Guidelines Writing page. Marked disputed because the rule as commonly enforced rests on a source Pullum shows cannot reliably identify a passive." },
      belongs: { verdict: "core", why: "Interface copy lives or dies on who-does-what, and this is the sentence-level control for it, provided you treat it as a default rather than a law." },
      related: [663, 666, 675, 684]
    },
    {
      n: 666,
      title: "One idea per sentence",
      aka: ["One point per unit"],
      oneLine: "Carry one claim, instruction or fact per sentence, then start another.",
      demo: {
        caption: "Left: three facts welded into one sentence. Right: the same three, one per sentence, each countable at a glance.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Three ideas, one sentence</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:13px\">Cancel within 30 days and we refund the full amount, but after that we can only refund half, and any refund takes five working days to reach your account.</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One idea each</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight db-type\" style=\"font-size:13px\"><span class=\"db-row db-row--tight db-row--nowrap db-row--top\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span>Cancel within 30 days for a full refund.</span></span><span class=\"db-row db-row--tight db-row--nowrap db-row--top\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span>After 30 days we refund half.</span></span><span class=\"db-row db-row--tight db-row--nowrap db-row--top\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span>Refunds take five working days.</span></span></div></div></div></div>"
      },
      what: "The rule tells you to keep a single point in each sentence and break the next one out. It is standard plain-language advice with no single named author. What was actually tested is the paragraph version. The 1997 Nielsen Norman Group guidance on writing for the web lists one idea per paragraph alongside highlighted keywords, meaningful sub-headings and bulleted lists as the features that made a page scannable.",
      why: "A sentence holding two ideas forces the reader to hold the first while parsing the second, and scanning readers usually drop the second. Splitting also exposes weak logic, because two short sentences make it obvious when the second does not follow from the first.",
      how: [
        "Look for and, but and which in the middle of long sentences. Each one is a possible full stop.",
        "Keep one idea per paragraph as well, since that is the version with evidence behind it.",
        "Split an instruction that contains a condition: state the condition, then the action.",
        "Leave some connective words in. Copy chopped into single clauses starts to read like a warning label."
      ],
      example: "Apple's Human Interface Guidelines take the same idea up a level for screens: if you are trying to convey more than one idea, they suggest breaking the text across multiple screens rather than stacking it.",
      numbers: "",
      pitfall: "Applied mechanically, this produces staccato copy with no argument in it. The reader can follow every sentence and still not know why one leads to the next.",
      source: "Plain-language convention, origin unclear. The paragraph-level version is from Morkes and Nielsen (1997).",
      verify: { status: "adjusted", note: "Adjusted the framing. The master list says one idea per sentence; the formulation with measured support behind it is one idea per paragraph, from the Nielsen Norman Group 1997 web-writing study, which I read on nngroup.com. I found no study this session testing the sentence-level version on its own, so I have labelled it convention." },
      belongs: { verdict: "core", why: "It is the practical mechanism behind clarity and scannability, and it is the one rule a non-writer on the team can apply without training." },
      related: [662, 663, 668, 671]
    },
    {
      n: 667,
      title: "Reading level targeting",
      aka: ["Readability scoring", "Reading age"],
      oneLine: "Set a target reading level for copy and test against a published formula.",
      demo: {
        caption: "Both passages use the same short words and short sentences, so a formula grades them alike. Only one says something.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Says nothing</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-type\" style=\"font-size:13px\">We are on the case. The team has it in hand. We will be in touch.</div><span class=\"db-note\">short words, short sentences</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Says what to do</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-type\" style=\"font-size:13px\">Pay by 3 March. We will email a receipt. Your cover starts the next day.</div><span class=\"db-note\">short words, short sentences</span></div></div></div></div>"
      },
      what: "You choose a reading level and score the copy against a formula. The formulas are real and published: Flesch Reading Ease (Rudolf Flesch, A New Readability Yardstick, Journal of Applied Psychology 32:3, 1948), Flesch-Kincaid grade level (Kincaid, Fishburne, Rogers and Chissom, 1975, built for US Navy training material), the Fog index (Robert Gunning, The Technique of Clear Writing, 1952) and SMOG (G. Harry McLaughlin, 1969). Every one of them counts sentence length and word or syllable length. None of them reads the words, so none of them can tell whether a sentence makes sense.",
      why: "A score gives a team a cheap, repeatable check that stops copy drifting into legalese, and it gives a non-writer something to point at in review. At AAA it is also a formal accessibility requirement rather than a preference.",
      how: [
        "Use WCAG 3.1.5 as the anchor if you need a defensible target: text no harder than lower secondary education level, or a simpler alternative version alongside.",
        "Treat a score as a smoke alarm. A bad score means look at the page; a good score on its own means nothing.",
        "Test comprehension with real readers before signing off public-service copy.",
        "Never rewrite purely to move a number, because chopping sentences at random improves the score and damages the meaning."
      ],
      example: "The UK Home Office design manual tells teams that usually we recommend writing for a maximum reading age of 9, even if you are writing for a specialist audience.",
      numbers: "WCAG 2.2 SC 3.1.5 Reading Level is Level AAA and names lower secondary education level, which WCAG defines, following the UNESCO education classification, as the two or three year period beginning after six years of school and ending nine years after the start of primary education. UK Home Office guidance: maximum reading age 9.",
      pitfall: "The formulas reward short words and short sentences, so choppy nonsense scores well and a correct, unavoidable technical term scores badly. Teams then optimise the number and lose the sense.",
      source: "Flesch (1948); Kincaid et al (1975); Gunning (1952); McLaughlin (1969); W3C WCAG 2.2 SC 3.1.5; UK Home Office User-Centred Design Manual.",
      verify: { status: "disputed", note: "Citations for all four formulas confirmed through published bibliographies including the quanteda readability documentation and CRAN reference pages. SC 3.1.5 wording, its Level AAA rating and the WCAG definition of lower secondary education level read on the W3C Understanding page. The reading age 9 wording read on design.homeoffice.gov.uk, at its current address under written content rather than the older accessibility path. Marked disputed because the formulas measure surface features only, which is visible in their published definitions, and I found no study this session showing that hitting a target score improves comprehension." },
      belongs: { verdict: "adjacent", why: "Borrowed from education research, where the formulas were built to grade school textbooks. The specific design use is that a score is a cheap regression test on public-facing copy, and at WCAG AAA it becomes a stated accessibility criterion." },
      related: [663, 666, 687]
    },
    {
      n: 668,
      title: "Scannability",
      aka: ["Writing for scanning", "F-shaped pattern"],
      oneLine: "Format text so a reader who is not reading can still get the point.",
      demo: {
        caption: "The same quantity of text. Only the right side gives the eye somewhere to land: headings, bullets, one bold run.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Wall of text</span><div class=\"db-stage db-stage--tight\"><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Formatted for scanning</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">What it costs</span><div class=\"db-lines\"><i></i><i></i></div><span class=\"db-type\" style=\"font-size:13px\">Who can apply</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-bar db-bar--thin\" style=\"width:74%\"></span></span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-bar db-bar--thin\" style=\"width:58%\"></span></span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-bar db-bar--thin\" style=\"width:66%\"></span></span><span class=\"db-type\" style=\"font-size:13px\">How to cancel</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-bar db-bar--thin db-bar--ink\" style=\"width:22%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:62%\"></span></span><div class=\"db-lines\"><i></i></div></div></div></div></div>"
      },
      what: "People scan web pages. Morkes and Nielsen tested this in 1997 and found that 79 per cent of their users always scanned a new page while only 16 per cent read word by word. They also tested five versions of the same content: the concise version scored 58 per cent better on their usability measure, the scannable version 47 per cent better, the objective-language version 27 per cent better, and all three together 124 per cent better. Later work by Weinreich and colleagues, reported by Nielsen in 2008, put the share of words actually read at 28 per cent at the absolute maximum, with about 20 per cent the more realistic figure for an average visit.",
      why: "Scannable formatting means keywords, sub-headings, bulleted lists and short paragraphs, which give the eye somewhere to land. It converts a page that must be read in order into one that can be entered at any point, which is how people actually arrive at pages.",
      how: [
        "Give every block a sub-heading that describes it, not a teaser.",
        "Bold the keyword, not the whole clause. Bolding a sentence bolds nothing.",
        "Use a list where a list is the truth. Do not turn an argument into bullets.",
        "Strip promotional adjectives. Morkes and Nielsen found marketing language slowed users, who had to filter the exaggeration to find the facts."
      ],
      example: "The 1997 study is itself the example. Five versions of the same tourist-attraction content were tested with the same task, and the only difference was how the words were written and formatted.",
      numbers: "Morkes and Nielsen (1997): 79 per cent of test users always scanned a new page, 16 per cent read word by word; concise 58 per cent better, scannable 47 per cent, objective 27 per cent, all three combined 124 per cent. Nielsen (2008), on Weinreich et al, ACM Transactions on the Web 2:1: 28 per cent of words read at the maximum, about 20 per cent more realistically.",
      pitfall: "The F-shaped pattern gets treated as a law and everything gets crammed top-left. Kara Pernice's 2017 revisit lists layer-cake, spotted, marking, bypassing and commitment patterns as well, and says in terms that the F is the default pattern only when there are no strong cues to attract the eyes towards meaningful information, such as a wall of text with no bolding, bullets or subheadings.",
      source: "Morkes and Nielsen (1997); Nielsen, How Little Do Users Read? (2008); Pernice, F-Shaped Pattern of Reading on the Web, Nielsen Norman Group (2017).",
      verify: { status: "verified", note: "All percentages read directly on the Nielsen Norman Group articles How Users Read on the Web (30 September 1997), How Little Do Users Read? (5 May 2008) and F-Shaped Pattern of Reading on the Web (Kara Pernice, 12 November 2017), including the underlying Weinreich, Obendorf, Herder and Mayer citation in ACM Transactions on the Web 2:1. I added Nielsen's 20 per cent realistic figure, which the author had dropped: 28 per cent is the ceiling if a visitor spent all their time reading, and quoting it alone overstates the finding." },
      belongs: { verdict: "core", why: "It is the best-measured content finding in this section and it changes layout decisions, not just word choice." },
      related: [664, 669, 670, 671]
    },
    {
      n: 669,
      title: "Inverted pyramid",
      aka: ["Bottom line up front", "BLUF"],
      oneLine: "Conclusion first, supporting detail next, background last.",
      demo: {
        caption: "Both pages are cut at the same line. Only the one that opens with the answer still carries it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Background first</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><span class=\"db-note\">Background</span></div><div class=\"db-card\"><span class=\"db-note\">How we decided</span></div><div class=\"db-measure-mark\">cut off here</div><div class=\"db-card\" style=\"opacity:0.25\"><span class=\"db-note\">Your claim is approved</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Conclusion first</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><span class=\"db-note db-note--accent\">Your claim is approved</span></div><div class=\"db-card\"><span class=\"db-note\">How we decided</span></div><div class=\"db-measure-mark\">cut off here</div><div class=\"db-card\" style=\"opacity:0.25\"><span class=\"db-note\">Background</span></div></div></div></div></div>"
      },
      what: "The inverted pyramid puts the most important information at the top of a piece and works downwards in decreasing importance. It came out of newspaper practice, where a story could be cut from the bottom to fit. Nielsen Norman Group argues it suits screens for a different reason: a reader who stops after one paragraph still has the point. The tidy origin story, that Civil War reporters wrote this way because the telegraph might cut out, is not settled history.",
      why: "Screens truncate unpredictably, previews show the first line, and readers leave early. Putting the answer first means every one of those failure modes still delivers the message.",
      how: [
        "Write the last paragraph first, then move it to the top.",
        "Answer the reader's question in the opening sentence, then explain how you know.",
        "Put background and method at the bottom, where the interested reader will look for it.",
        "Apply it inside sections too, not just to the whole page."
      ],
      example: "Any GOV.UK guidance page opens with what you must do, then the detail, then the exceptions. The structure survives being cut off at any point.",
      numbers: "",
      pitfall: "Suspense gets designed in by accident. A page that builds to a conclusion reads well to the author, who already knows the ending, and badly to everyone else.",
      source: "Journalism practice, origin contested. Web application from Amy Schade, Inverted Pyramid, Nielsen Norman Group (2018).",
      verify: { status: "disputed", note: "The technique and the web guidance are verified: Schade's article was read on nngroup.com, dated 11 February 2018, and it makes no claim at all about the origin, so the telegraph story is not NN/g's. The origin is disputed among historians. Horst Poettker's study asks when and why the inverted pyramid appeared and places its arrival as a standard in the late nineteenth century, while David Mindich has argued for a link to Civil War coverage of Lincoln. I could not read either original in full this session, so I have described the disagreement rather than picked a side." },
      belongs: { verdict: "adjacent", why: "Overturned from core. This is borrowed wholesale from newsroom practice and the author's own reasoning admitted as much. The specific design use is real and narrow: it fixes the order of blocks on a page so that truncation, a link preview, or a reader who stops after one paragraph still carries the message." },
      related: [664, 668, 682, 683]
    },
    {
      n: 670,
      title: "Meaningful headings",
      aka: ["Descriptive headings"],
      oneLine: "A heading must describe what is under it, well enough to use on its own.",
      demo: {
        caption: "The page's headings listed on their own, the way a screen reader offers them. Only one list can be navigated.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Teasers</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><span class=\"db-label\">Headings on this page</span><div class=\"db-col db-col--tight db-type\" style=\"font-size:13px\"><span>A fresh start</span><span>The clever bit</span><span>One more thing</span><span>Onboarding V2</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Descriptive</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><span class=\"db-label\">Headings on this page</span><div class=\"db-col db-col--tight db-type\" style=\"font-size:13px\"><span>Who can apply</span><span>What it costs</span><span>How to cancel</span><span>Setting up your account</span></div></div></div></div></div>"
      },
      what: "WCAG 2.2 Success Criterion 2.4.6, at Level AA, states that headings and labels describe topic or purpose. The understanding document adds that a heading need not be long: a word, or even a single character, is enough if it gives a useful cue. Material Design 3 gives the same instruction from the scanning side, telling writers to use specific titles and headings that clearly describe a topic. Morkes and Nielsen listed meaningful sub-headings among the features that made pages scannable in 1997.",
      why: "Headings are the skeleton a scanning reader and a screen reader both navigate by. A screen reader user can list every heading on a page and jump; if the list reads as a set of jokes, the page has no structure for them at all.",
      how: [
        "Write the headings first as an outline, then check they read as a summary on their own.",
        "Describe, do not tease. The reader should be able to skip the section on the strength of the heading.",
        "Use real heading elements in the markup so the structure exists for assistive technology, not just visually.",
        "Avoid internal team names. A heading called Onboarding V2 means nothing outside the building."
      ],
      example: "The WCAG understanding document for 2.4.6 is itself an example: every section heading names the thing under it, so the page can be navigated by heading list alone.",
      numbers: "WCAG 2.2 SC 2.4.6 Headings and Labels, Level AA.",
      pitfall: "Marketing writes headings as teasers and design approves them because they fit the grid. Both the scanning reader and the AA criterion fail at the same moment.",
      source: "W3C, WCAG 2.2 SC 2.4.6; Material Design 3 content style guide; Morkes and Nielsen (1997).",
      verify: { status: "verified", note: "SC 2.4.6 wording, Headings and labels describe topic or purpose, its Level AA rating and the line that a word, or even a single character, may suffice, all read on the W3C Understanding WCAG 2.2 page. Material's instruction to use specific titles and headings that clearly describe a topic read verbatim on m3.material.io under the style guide's UX writing best practices. Nielsen wording read on nngroup.com." },
      belongs: { verdict: "core", why: "It is one of the few content rules with a formal conformance level attached, and it determines whether the page has a usable structure at all." },
      related: [664, 668, 671, 9670]
    },
    {
      n: 9670,
      title: "Link text that works out of context",
      aka: ["Link purpose", "No click here"],
      oneLine: "A link must say where it goes when read on its own, with no surrounding sentence.",
      demo: {
        caption: "The same links pulled out of their sentences, as a screen reader lists them. On the left they are identical.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Read more</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Fee changes for 2026</span><span><u style=\"color:var(--accent);font-size:12px\">Read more</u></span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">New opening hours</span><span><u style=\"color:var(--accent);font-size:12px\">Read more</u></span></div></div><span class=\"db-label\">Link list</span><div class=\"db-col db-col--tight db-type db-type--mono\" style=\"font-size:11px\"><span>Read more</span><span>Read more</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Destination in the link</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Fee changes for 2026</span><span><u style=\"color:var(--accent);font-size:12px\">Read the 2026 fee changes</u></span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">New opening hours</span><span><u style=\"color:var(--accent);font-size:12px\">See the new opening hours</u></span></div></div><span class=\"db-label\">Link list</span><div class=\"db-col db-col--tight db-type db-type--mono\" style=\"font-size:11px\"><span>Read the 2026 fee changes</span><span>See the new opening hours</span></div></div></div></div></div>"
      },
      what: "WCAG 2.2 Success Criterion 2.4.4, Link Purpose (In Context), at Level A, requires that the purpose of each link can be worked out from the link text alone, or from the link text together with its programmatically determined context. A stricter criterion, 2.4.9 Link Purpose (Link Only), asks at Level AAA for text that stands entirely on its own. The reason is mechanical, and WCAG states it: assistive technology has the ability to provide users with a list of links that are on the web page, stripped of the sentences around them.",
      why: "Sighted scanning readers behave the same way for a different reason. Links are visually distinct, so the eye lands on them first, and a page of identical Read more links gives that reader nothing. Descriptive link text also tells search engines what the destination is about.",
      how: [
        "Put the destination in the link: download the 2026 fee schedule, rather than click here.",
        "Keep any clarifying context before the link, because a screen reader moving forward has not yet read what follows.",
        "Make two links with identical text go to the same place, and give different destinations different text.",
        "Do not use a bare URL as link text unless the URL itself is the information."
      ],
      example: "A blog index with a Read more link under each post. Pulled into a screen reader's link list they are identical and useless. Read more about the 2026 fee changes survives the same treatment.",
      numbers: "WCAG 2.2 SC 2.4.4 Link Purpose (In Context) is Level A. SC 2.4.9 Link Purpose (Link Only) is the stricter version of the same requirement, at Level AAA.",
      pitfall: "Read more and Learn more survive design review because they look tidy in a card grid. They fail the Level A criterion and they fail the scanning reader at the same time.",
      source: "W3C, Web Content Accessibility Guidelines 2.2, Success Criterion 2.4.4.",
      verify: { status: "verified", note: "SC 2.4.4 number, level and verbatim wording read on the W3C Understanding WCAG 2.2 page for Link Purpose (In Context), which explains the screen-reader link-list behaviour and cross-refers to 2.4.9. The wording of 2.4.9 and its Level AAA rating were read on its own Understanding page. Added as a gap: nothing between 662 and 687 covers link text, and the nearest master list entries elsewhere cover underlines, deep linking and skip links rather than wording." },
      belongs: { verdict: "core", why: "It is a Level A requirement about wording, which puts it squarely in a content section, and it is the single most common copy failure in real interfaces." },
      related: [664, 670, 684]
    },
    {
      n: 671,
      title: "Chunking (content)",
      aka: ["Chunking", "Content chunking"],
      oneLine: "Break long content into short labelled blocks that each hold one thing.",
      demo: {
        caption: "Nine identical fields. Left is one undifferentiated run; right is the same nine in three named groups.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One run of nine</span><div class=\"db-stage db-stage--tight\"><span class=\"db-label\">Set up your account</span><div class=\"db-col db-col--tight\"><span class=\"db-bar db-fill\"></span><span class=\"db-bar db-fill\"></span><span class=\"db-bar db-fill\"></span><span class=\"db-bar db-fill\"></span><span class=\"db-bar db-fill\"></span><span class=\"db-bar db-fill\"></span><span class=\"db-bar db-fill\"></span><span class=\"db-bar db-fill\"></span><span class=\"db-bar db-fill\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three labelled groups</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">About you</span><span class=\"db-bar db-fill\"></span><span class=\"db-bar db-fill\"></span><span class=\"db-bar db-fill\"></span></div><div class=\"db-col db-col--tight\"><span class=\"db-label\">Address</span><span class=\"db-bar db-fill\"></span><span class=\"db-bar db-fill\"></span><span class=\"db-bar db-fill\"></span></div><div class=\"db-col db-col--tight\"><span class=\"db-label\">Payment</span><span class=\"db-bar db-fill\"></span><span class=\"db-bar db-fill\"></span><span class=\"db-bar db-fill\"></span></div></div></div></div></div>"
      },
      what: "This is the content-design practice, which took its name from the memory research at 206 without inheriting its evidence. Chunking here means splitting a run of content into blocks small enough to take in at a glance, each with a label. The practice is sound. The usual justification for it is not. George Miller's 1956 paper is about absolute judgement and immediate memory span, and Miller opens it by saying he has been persecuted by an integer and closes by calling the recurrence of seven only a pernicious, Pythagorean coincidence. Nelson Cowan's 2001 reconsideration in Behavioral and Brain Sciences puts short-term capacity nearer four items.",
      why: "Short labelled blocks give a scanning reader entry points and let them skip what they do not need. They also make the page easier to maintain, because a block can be rewritten without disturbing the ones around it.",
      how: [
        "Break at meaning boundaries, then label each block with a heading that describes it.",
        "Size blocks by what genuinely belongs together, not by a memory number.",
        "Do not cap a menu or list at seven items on Miller's authority. Test the actual list instead.",
        "Check the blocks still read in order. Chunking that destroys the argument has gone too far."
      ],
      example: "Miller's own paper. Read the first page and the last and you find the author disowning the tidy rule that now carries his name.",
      numbers: "Miller (1956), Psychological Review 63, pp. 81-97. Cowan (2001), Behavioral and Brain Sciences 24:1, pp. 87-114, argues for a limit closer to four items.",
      pitfall: "Seven plus or minus two gets cited to justify menu lengths, list caps and form section counts. Miller's paper supports none of that, and quoting it stops teams from testing the real thing.",
      source: "Practice: web content design convention. Justification usually credited to George A. Miller (1956), which the paper itself does not support.",
      verify: { status: "disputed", note: "Miller's title, journal, volume, year and pages, plus the persecuted by an integer and pernicious, Pythagorean coincidence lines, read in the full text at psychclassics.yorku.ca. Cowan 2001 citation confirmed via PubMed and Semantic Scholar. Marked disputed because the design rule commonly attached to Miller is not what his paper claims." },
      belongs: { verdict: "core", why: "The practice of breaking and labelling content is genuine design work. The borrowed psychology used to defend it is the part that does not hold, which is why it needs stating here rather than being quietly repeated." },
      related: [666, 668, 670, 206]
    },
    {
      n: 672,
      title: "Parallel structure",
      aka: ["Parallelism"],
      oneLine: "Items in a set take the same grammatical shape as each other.",
      demo: {
        caption: "One settings menu, twice. Read the first word of each item: on the left, one of the four is a verb.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Mixed shapes</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-col db-col--tight db-type\" style=\"font-size:13px\"><span>Account</span><span>Notifications</span><span>Privacy</span><span style=\"color:var(--sig-disputed)\">Get help</span></div><span class=\"db-note\">noun, noun, noun, verb</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One shape</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-col db-col--tight db-type\" style=\"font-size:13px\"><span>Account</span><span>Notifications</span><span>Privacy</span><span>Help</span></div><span class=\"db-note\">noun, noun, noun, noun</span></div></div></div></div>"
      },
      what: "Anything presented as a set, a navigation bar, a bulleted list, a set of tabs, a row of buttons, should use one grammatical pattern throughout. Strunk and White state the rule as expressing coordinate ideas in similar form. In interface work it applies to the label sets a user compares at a glance, where a mismatch reads as an error before the reader has worked out why.",
      why: "A reader comparing options uses the shape of the words as well as their meaning. Matching shapes make the set feel like one decision. A mismatched item pulls attention for the wrong reason and makes the odd one out look like a different kind of thing.",
      how: [
        "Read only the first word of each item in a set. If the parts of speech differ, fix it.",
        "Pick one pattern per set and hold it: all nouns, or all verb phrases, never a mix.",
        "Match the level of detail as well as the grammar. Billing next to Change your payment card in three steps is still broken.",
        "Re-check sets after anyone adds an item, because that is when parallelism breaks."
      ],
      example: "A settings menu reading Account, Notifications, Privacy, Get help. The first three are nouns and the fourth is a verb phrase, so the set looks wrong before you have thought about it.",
      numbers: "",
      pitfall: "Parallelism breaks quietly over time as different people add items to a list nobody owns. Navigation and filter lists show it first.",
      source: "William Strunk Jr and E. B. White, The Elements of Style. Rule numbering varies between editions, so none is quoted here.",
      verify: { status: "verified", note: "Confirmed that the composition rule expressing coordinate ideas in similar form appears in The Elements of Style, from several independent published summaries of the book's composition rules. I did not cite a rule number because editions renumber, and I could not check a specific edition this session." },
      belongs: { verdict: "core", why: "It governs label sets, which are a design artefact rather than prose, and it is one of the fastest tells that a product has no content owner." },
      related: [673, 677, 684]
    },
    {
      n: 673,
      title: "Terminology consistency",
      aka: ["One thing, one name"],
      oneLine: "Use one agreed word for each concept, in every place it appears.",
      demo: {
        caption: "Three places in one product naming the same object. The left names it three ways; the right names it once.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Three names</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><span class=\"db-label\">Navigation</span><div class=\"db-type\" style=\"font-size:13px\"><span style=\"color:var(--accent)\">Projects</span></div></div><div class=\"db-card\"><span class=\"db-label\">Settings</span><div class=\"db-type\" style=\"font-size:13px\"><span style=\"color:var(--accent)\">Workspace</span> defaults</div></div><div class=\"db-card\"><span class=\"db-label\">Help centre</span><div class=\"db-type\" style=\"font-size:13px\">Managing your <span style=\"color:var(--accent)\">boards</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One name</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><span class=\"db-label\">Navigation</span><div class=\"db-type\" style=\"font-size:13px\"><span style=\"color:var(--accent)\">Projects</span></div></div><div class=\"db-card\"><span class=\"db-label\">Settings</span><div class=\"db-type\" style=\"font-size:13px\"><span style=\"color:var(--accent)\">Project</span> defaults</div></div><div class=\"db-card\"><span class=\"db-label\">Help centre</span><div class=\"db-type\" style=\"font-size:13px\">Managing your <span style=\"color:var(--accent)\">projects</span></div></div></div></div></div></div>"
      },
      what: "Nielsen's fourth heuristic states that users should not have to wonder whether different words, situations or actions mean the same thing, and to follow platform and industry conventions. WCAG 2.2 Success Criterion 3.2.4, Consistent Identification, at Level AA, requires that components with the same functionality within a set of pages are identified consistently. ISO 9241-110:2020 lists conformity with user expectations as the third of its seven interaction principles, covering the same ground from the ergonomics side.",
      why: "Every synonym forces the reader to test whether two things are the same. Consistent naming removes that work, and it is the difference between a product that feels designed and one that feels assembled from three teams' vocabularies.",
      how: [
        "Keep a term list with one agreed word per concept and the rejected synonyms written next to it.",
        "Match the user's word, not the internal one. Nielsen's second heuristic asks for the user's language rather than internal jargon.",
        "Audit labels across pages, not within a page, because 3.2.4 is a cross-page criterion.",
        "Give the term list an owner. Without one it stops being true within a release or two."
      ],
      example: "A product that calls the same object a project in the navigation, a workspace in settings and a board in the help centre. Each team was right locally and the set is wrong.",
      numbers: "WCAG 2.2 SC 3.2.4 Consistent Identification, Level AA. ISO 9241-110:2020 sets seven interaction principles; conformity with user expectations is clause 5.3.",
      pitfall: "Consistency gets enforced on the internal vocabulary rather than the customer's, so the product ends up consistently wrong and the support team quietly translates.",
      source: "Jakob Nielsen, 10 Usability Heuristics (1994); W3C WCAG 2.2 SC 3.2.4; ISO 9241-110:2020, interaction principles.",
      verify: { status: "verified", note: "Heuristic 2 and heuristic 4 wording read on the Nielsen Norman Group heuristics page. SC 3.2.4 wording, Components that have the same functionality within a set of web pages are identified consistently, and its Level AA rating read on the W3C Understanding WCAG 2.2 page. ISO 9241-110:2020 confirmed as the current edition with seven interaction principles, conformity with user expectations at clause 5.3, from the ISO Online Browsing Platform table of contents and the CEN adoption listing." },
      belongs: { verdict: "core", why: "It is a design-system rule expressed in words rather than tokens, and it has a formal AA conformance criterion attached." },
      related: [672, 674, 677, 684]
    },
    {
      n: 674,
      title: "Voice and tone matrix",
      aka: ["Voice and tone guide"],
      oneLine: "Voice stays the same; tone changes with the situation, and a matrix says how.",
      demo: {
        caption: "One voice held across three situations, with the tone set per row and an example sentence in each.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-ui\"><span class=\"db-label\">Voice, every row</span><div class=\"db-type\" style=\"font-size:13px\">Plain, warm, never smug.</div></div><div class=\"db-col db-col--tight\"><div class=\"db-card\"><span class=\"db-label\">Campaign sent</span><span class=\"db-note db-note--accent\">tone: light</span><div class=\"db-type\" style=\"font-size:13px\">Nice one. Your campaign is on its way.</div></div><div class=\"db-card\"><span class=\"db-label\">Payment failed</span><span class=\"db-note db-note--accent\">tone: plain</span><div class=\"db-type\" style=\"font-size:13px\">We could not take your payment. Update your card to keep the account open.</div></div><div class=\"db-card\"><span class=\"db-label\">Account suspended</span><span class=\"db-note db-note--accent\">tone: formal, no jokes</span><div class=\"db-type\" style=\"font-size:13px\">Your account is suspended while we check a report. We will email you within two working days.</div></div></div></div></div>"
      },
      what: "Voice is the constant personality of the writing. Tone is how that voice sounds in a particular moment. The matrix is the table that maps each situation to a tone, with example sentences. MailChimp published the best-known version at voiceandtone.com in 2012, built by Kate Kiefer Lee. It is organised by content type rather than by mood, twenty-five of them, and in her words it starts out green for the happy emotions and goes all the way to red for the angry emotions. Each entry gives a hypothetical user quote, the feelings that user probably has, tips, and a sample of what MailChimp would say. Apple's Human Interface Guidelines make the same split, telling designers to determine the app's voice and then match the tone to the context.",
      why: "Without a matrix, every writer guesses, and the product sounds like several companies. With one, a new writer can produce copy that fits on their first day, and reviewers have something to point at other than taste.",
      how: [
        "Write the voice as a this-but-not-that list. Kiefer Lee's own examples are MailChimp is helpful, but not overbearing and MailChimp is smart, but not stodgy.",
        "List the real situations your product creates, including the bad ones, then set a tone for each.",
        "Put an example sentence in every row. Adjectives alone do not travel between writers.",
        "Include the states where the playful voice is switched off, and say so explicitly."
      ],
      example: "Apple's guidelines contrast two Apple Watch messages: the Fall Detection message reading It looks like you've taken a hard fall is direct and serious, while a message about a personal Move streak record is light and congratulatory. Same voice, different tone.",
      numbers: "voiceandtone.com (2012) covered twenty-five content types, from Freddie's Jokes and Success Message at the green end to Failure Message and Compliance Alert at the red end.",
      pitfall: "The matrix gets written as a column of adjectives with no sentences, so friendly means something different to every writer and the guide settles no arguments.",
      source: "Kate Kiefer Lee, MailChimp Voice and Tone, voiceandtone.com (2012); Apple Human Interface Guidelines, Writing.",
      verify: { status: "verified", note: "Kiefer Lee's authorship, the green-to-red structure and both this-but-not-that examples were read verbatim in the transcript of her UX Thursday Detroit keynote, published by UIE on 17 September 2013. I then checked the claim against the site itself in the Internet Archive: the 2 May 2013 capture of voiceandtone.com lists twenty-five content types in that order and describes itself as an interactive guide, and the about page confirms the voice-stays, tone-changes framing. Apple's wording and the two Apple Watch examples, Fall Detection and the Move streak record, read on the current Human Interface Guidelines Writing page." },
      belongs: { verdict: "core", why: "It is the governing artefact for every string in a product, and it belongs in the design system next to the colour tokens." },
      related: [673, 675, 682]
    },
    {
      n: 675,
      title: "Tone in failure states",
      aka: ["Error message tone"],
      oneLine: "Errors get the plainest, least playful tone in your whole system.",
      demo: {
        caption: "Same rejected field. The right message names the rule, so the reader knows what to type next.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Joke, no way forward</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Password</span><span class=\"db-input db-input--error\">••••</span><span class=\"db-type\" style=\"font-size:12px;color:var(--sig-disputed)\">Oops! That one is a bit weedy.</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Names the rule</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Password</span><span class=\"db-input db-input--error\">••••</span><span class=\"db-type\" style=\"font-size:12px;color:var(--sig-disputed)\">Choose a password with at least 8 characters.</span></div></div></div></div></div>"
      },
      what: "Apple's guidance for error messages is to show them close to the problem, avoid blame, and be clear about what the person can do to fix it. It gives a worked pair: That password is too short is less useful than Choose a password with at least 8 characters. It also warns against interjections like oops and uh-oh, which read as insincere. Nielsen's ninth heuristic asks that error messages be expressed in plain language with no error codes, precisely indicate the problem, and constructively suggest a solution.",
      why: "The reader is already annoyed, and humour from the party that caused the annoyance lands badly. A message that names the rule instead of reporting the violation converts a dead end into a next step.",
      how: [
        "Say what happened, then what to do. Skip the apology unless you actually caused it.",
        "Name the rule rather than the failure. At least 8 characters is actionable; too short is not.",
        "Switch the jokes off. MailChimp's compliance alert page predicted confusion, stress, anger, helplessness and fear, and one of its three tips was be serious, do not joke around with frustrated people.",
        "Never blame the reader for a format your field accepted without complaint."
      ],
      example: "Apple's own password pair, published in the Human Interface Guidelines: Choose a password with at least 8 characters replaces That password is too short.",
      numbers: "MailChimp's archived failure-message page predicted three user feelings, confusion, stress and anger, and gave four tips: be straightforward, be calm, be serious, and offer a solution or next step if possible.",
      pitfall: "A brand with a playful voice leaves the jokes running in error states, and the joke arrives at the moment someone has just lost work. This is the single most common voice-and-tone failure in shipped products.",
      source: "Apple Human Interface Guidelines, Writing; Jakob Nielsen, 10 Usability Heuristics (1994), heuristic 9; Kate Kiefer Lee, MailChimp Voice and Tone, voiceandtone.com (2012).",
      verify: { status: "verified", note: "Apple's error-message guidance, including the password example and the warning against oops and uh-oh, read on the current Human Interface Guidelines Writing page. Heuristic 9 wording read on nngroup.com. Corrected the MailChimp claim: the author attributed the five-feeling list to the guide as a whole, but confusion, stress, anger, helplessness and fear belong specifically to the compliance alert page, per Kiefer Lee's 2013 keynote transcript. I read the archived failure-message page directly and it lists three feelings and the four tips quoted here, including don't joke around with frustrated people." },
      belongs: { verdict: "core", why: "Error copy is where interface writing does the most work, and the tone decision is made in design rather than in engineering." },
      related: [674, 684, 665]
    },
    {
      n: 676,
      title: "Inclusive language",
      aka: ["Bias-free communication"],
      oneLine: "Write so the reader is not shut out or misdescribed by the words you chose.",
      demo: {
        caption: "A substitution table, and the row at the bottom where the communities disagree and there is no swap to make.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight db-type\" style=\"font-size:13px\"><span class=\"db-row db-row--tight db-row--nowrap\"><span style=\"text-decoration:line-through;color:var(--ink-4)\">chairman</span><span class=\"db-arrow\">→</span><span>chair, or moderator</span></span><span class=\"db-row db-row--tight db-row--nowrap\"><span style=\"text-decoration:line-through;color:var(--ink-4)\">manpower</span><span class=\"db-arrow\">→</span><span>workforce, or personnel</span></span></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-row db-row--tight db-row--nowrap db-type\" style=\"font-size:13px\"><span>autistic person</span><span class=\"db-arrow\">↔</span><span>person with autism</span></span><span class=\"db-note\">no agreed swap: ask the readers you publish for</span></div></div></div></div>"
      },
      what: "Microsoft's Writing Style Guide has a bias-free communication section with substitution tables, replacing chairman with chair or moderator, manpower with workforce or personnel, and setting patterns for gender-neutral pronouns. Apple tells designers to write with accessibility and localisation in mind, avoiding jargon and gendered terminology. The hard part is that communities disagree with each other. In Kenny and colleagues' 2016 UK survey published in Autism, around 40 per cent of 502 autistic adults endorsed the identity-first term autistic while around 18 per cent endorsed person with autism, and professionals leaned the other way.",
      why: "Language that misdescribes a reader costs you that reader, and in public-service work it costs you the whole point of the page. Getting it right also forces useful precision, since most inclusive rewrites are also shorter and more specific.",
      how: [
        "Ask the people you are writing about, in the country and language you are publishing in.",
        "Record the decisions in the same term list as everything else, with the reason next to each one.",
        "Describe what someone does rather than labelling what they are, when the label is not the point of the sentence.",
        "Give the list a review date. Preferences shift, and a stale list reads worse than no list."
      ],
      example: "The Microsoft Style Guide bias-free page is publicly readable, dated and versioned in a tracked source file, so you can check the current advice against a stated revision date rather than guessing. The page carries a document date of 18 April 2024.",
      numbers: "Kenny et al (2016), Autism: of 502 autistic adults, around 40 per cent endorsed autistic and around 18 per cent endorsed person with autism. A 2023 Dutch survey (PubMed Central PMC10074744) found the reverse locally, with 68.3 per cent of autistic adults preferring person-first wording.",
      pitfall: "A one-off word-swap list gets published and then never touched, which looks performative within a year. Worse, a list written in one country gets applied globally, and the preference it encodes is the opposite of local practice.",
      source: "Microsoft Writing Style Guide, Bias-free communication; Apple Human Interface Guidelines, Writing; Kenny, Hattersley, Molins, Buckley, Povey and Pellicano, Autism (2016).",
      verify: { status: "verified", note: "Microsoft's substitution table read on learn.microsoft.com, confirming chairman to chair or moderator, manpower to workforce, staff or personnel, and the guidance on generic pronouns. I removed the author's claim of a changelog entry dated 25 August 2021: the page exposes a document date of 18 April 2024 and its source file lives in a Microsoft repository I could not open, so that date was unsupported. Apple's wording read on the HIG Writing page. Kenny et al figures, 502 autistic adults with roughly 40 per cent for autistic and 18 per cent for person with autism, read in the 2023 Dutch paper on PubMed Central (PMC10074744), which also reports its own reversed result of 68.3 per cent for person-first wording. The two studies disagree and both are stated." },
      belongs: { verdict: "core", why: "It is a content-system decision with the same shape as terminology consistency, and it changes what appears on screen for real readers." },
      related: [663, 673, 674]
    },
    {
      n: 677,
      title: "Sentence case versus title case",
      aka: ["Capitalisation style"],
      oneLine: "Pick one capitalisation style per element type and apply it without exception.",
      demo: {
        caption: "The same dialogue box twice. On the left the heading, the body and the buttons each follow a different rule.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Mixed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:15px\">Delete This Project?</span><span>All files and Boards will be removed.</span><span class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">cancel</span><span class=\"db-btn db-btn--danger db-btn--sm\">Delete Project</span></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Sentence case throughout</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:15px\">Delete this project?</span><span>All files and boards will be removed.</span><span class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost db-btn--sm\">Cancel</span><span class=\"db-btn db-btn--danger db-btn--sm\">Delete project</span></span></div></div></div></div></div>"
      },
      what: "Sentence case capitalises the first word and proper nouns. Title case capitalises most words in a heading. Material Design 3 picks a side without hedging: unless otherwise specified, use sentence-style capitalisation, and it names titles, headings, labels, menu items, navigation components, app bars and buttons as all covered. Apple deliberately does not pick for you, saying title case is generally considered formal while sentence case is more casual, and telling designers to choose a style per element type and use it consistently.",
      why: "Sentence case gives fewer capital letters, which makes long strings easier to read and makes proper nouns stand out as proper nouns. The consistency matters more than the choice, because mixed capitalisation across one screen is the clearest visible sign that nobody owns the words.",
      how: [
        "Decide per element type, write it into the design system, and put it in the component documentation rather than in people's heads.",
        "Follow the platform if you ship on one. Android and Material default to sentence case.",
        "Keep product names and branded terms capitalised inside sentence case; Material says so explicitly.",
        "Check dialogs first. They stack a heading, body text and two buttons, so a mismatch is visible in one screenshot."
      ],
      example: "IBM's Carbon Design System takes Material's position, with two headings reading use sentence-case capitalization and do not use title case capitalization, and an illustration covering a page title, tabs, a module title, link text, button text, table headers and table content. Its stated reason is worth borrowing: title case relies on a subjective view of which words are important, so it cannot be applied consistently across a large organisation.",
      numbers: "",
      pitfall: "A team agrees on sentence case, then leaves title case in the legacy screens and in anything marketing supplies. The product ends up with both, which is worse than either.",
      source: "Google, Material Design 3 content style guide; Apple Human Interface Guidelines, Writing; IBM Carbon Design System.",
      verify: { status: "verified", note: "Material's instruction, unless otherwise specified, use sentence-style capitalization, its list of covered elements, and the note that products and branded terms may also be capitalized, all read verbatim on m3.material.io. Apple's formal-versus-casual wording and its instruction to choose a style for each UI element type read on the current HIG Writing page. Carbon's two headings, the element list in its illustration caption and its consistency argument read on carbondesignsystem.com." },
      belongs: { verdict: "core", why: "It is a typographic and system-level decision that shows up on every screen, and the two major platform guidelines take different positions on it." },
      related: [672, 673, 684]
    },
    {
      n: 678,
      title: "Numerals, units and localisation",
      aka: ["Number and unit formatting"],
      oneLine: "Format numbers, units and dates to the published standard, and to the reader's locale.",
      demo: {
        caption: "The three marked characters are the whole difference: a space, a hyphen, and a date order that cannot be misread.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">As typed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight db-type db-type--mono\" style=\"font-size:13px\"><span>10kΩ</span><span>a 35 millimetre film</span><span>03/04/2026</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">To the standard</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight db-type db-type--mono\" style=\"font-size:13px\"><span>10<span style=\"border-bottom:2px solid var(--accent)\"> </span>kΩ</span><span>a 35<span style=\"color:var(--accent)\">-</span>millimetre film</span><span><span style=\"color:var(--accent)\">2026</span>-04-03</span></div></div></div></div>"
      },
      what: "The SI Brochure, ninth edition, section 5.4.3, states that the numerical value always precedes the unit and a space is always used to separate the unit from the number, with the only exceptions being the symbols for degree, minute and second of plane angle. The hyphen appears only when the unit name is spelled out, giving a 35-millimetre film. ISO 8601-1:2019 sets the year-month-day form for dates, which is why 2026-08-17 is unambiguous and 08/17/2026 is not.",
      why: "Wrong formatting reads as carelessness at best and misleads at worst. Numbers are also where interfaces break most often across locales, because decimal separators, thousands separators, date order and plural rules all change while the layout does not.",
      how: [
        "Put a space between the number and the unit symbol, and make it a non-breaking space so the pair never splits across a line.",
        "Use the ISO 8601 form for machine-readable dates and a spelled-out month for human-facing ones, because 03/04 means two different days on the two sides of the Atlantic.",
        "Do not build sentences by joining strings. A plural-aware message format handles languages where the noun changes with the count.",
        "Leave slack in every label. Translated strings routinely run longer than the English original."
      ],
      example: "The SI Brochure's own worked pair, printed side by side: a 10 kΩ resistor takes a space and no hyphen, while the spelled-out version of a film gauge takes a hyphen, as in a 35-millimetre film.",
      numbers: "SI Brochure, ninth edition, section 5.4.3: a space always separates the numerical value from the unit symbol, with exceptions for degree, minute and second of plane angle. ISO 8601-1:2019 sets the year-month-day date form.",
      pitfall: "Dates written 03/04/2026 are the obvious failure. The quiet one is a number and its unit splitting across a line break, which happens whenever someone used an ordinary space.",
      source: "BIPM, The International System of Units (SI Brochure), 9th edition, section 5.4.3; ISO 8601-1:2019.",
      verify: { status: "verified", note: "Section 5.4.3 was read verbatim in the SI Brochure 9th edition PDF downloaded from bipm.org, confirming the space rule, the plane-angle exceptions and the printed pair a 10 kΩ resistor; a 35-millimetre film. I corrected the author's version, which had this as a 10 ohm resistor. ISO 8601-1:2019 confirmed as the current part. I have not quoted a string-expansion percentage because I could not verify one this session." },
      belongs: { verdict: "core", why: "It is a typesetting and layout decision as much as a writing one, and both rules cited are published international standards a designer can be held to." },
      related: [663, 679, 687]
    },
    {
      n: 679,
      title: "Truncation strategy",
      aka: ["Text overflow handling"],
      oneLine: "Decide in advance where a too-long string gets cut and how the reader recovers it.",
      demo: {
        caption: "Three files, one row width. End truncation makes them identical; middle truncation keeps the part that differs.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Cut at the end</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight db-type db-type--mono\" style=\"font-size:12px\"><span class=\"db-card\" style=\"width:206px;white-space:nowrap\">quarterly-report-fina…</span><span class=\"db-card\" style=\"width:206px;white-space:nowrap\">quarterly-report-fina…</span><span class=\"db-card\" style=\"width:206px;white-space:nowrap\">quarterly-report-fina…</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Cut in the middle</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight db-type db-type--mono\" style=\"font-size:12px\"><span class=\"db-card\" style=\"width:206px;white-space:nowrap\">quarterly-repo…-v5.pdf</span><span class=\"db-card\" style=\"width:206px;white-space:nowrap\">quarterly-repo…-v6.pdf</span><span class=\"db-card\" style=\"width:206px;white-space:nowrap\">quarterly-repo…-v7.pdf</span></div></div></div></div>"
      },
      what: "Truncation is what happens when a string is longer than its container. In CSS the default is to clip; text-overflow set to ellipsis replaces the clipped tail with the horizontal ellipsis character, U+2026. It only takes effect if the element also has overflow set to hidden and does not wrap, because text-overflow does not itself force an overflow. A strategy means deciding, per field, where to cut and how the full text is still reachable. PatternFly's guidance frames the choice as a question: which part of the string is more likely to differentiate the item?",
      why: "Truncation is a content decision made by a layout constraint. Left undecided, the cut lands wherever the box ends, and the reader loses whichever part happened to be at the right-hand edge.",
      how: [
        "Decide per field rather than globally. File names, URLs and versioned documents usually want middle truncation; sentences want end truncation.",
        "Give the full string somewhere reachable. A hover tooltip does not exist on touch, so offer a detail view or allow wrapping.",
        "Never truncate a price, a date, a total or a legal statement.",
        "Test with the longest real value in your data, and again with the browser text size increased."
      ],
      example: "A file list showing quarterly-report-fina...-v7.pdf. Middle truncation keeps both the topic and the version; end truncation would have dropped the version, which is the only part that distinguishes the row.",
      numbers: "CSS text-overflow with the ellipsis keyword renders U+2026 HORIZONTAL ELLIPSIS. MDN notes that text-overflow does not force an overflow, and gives overflow hidden with white-space nowrap as the pairing that makes it take effect.",
      pitfall: "Truncation gets used as a substitute for agreeing a content limit. Readers who increase their text size then lose information the designer never saw disappear, because the design was only ever tested at default size.",
      source: "CSS text-overflow, documented on MDN; PatternFly content guidance. No single origin.",
      verify: { status: "verified", note: "The text-overflow values, the named character U+2026 HORIZONTAL ELLIPSIS, and the note that the property does not force an overflow, with overflow hidden plus white-space nowrap given as the example pairing, all read on the MDN reference page. PatternFly's question, which part of the string is more likely to differentiate the item, quoted in its own wording from patternfly.org rather than paraphrased as the author had it. I found no single canonical source for truncation strategy, so I have described it as convention." },
      belongs: { verdict: "core", why: "It is the point where content and layout collide, and the decision is made by a designer, not by a writer or a developer." },
      related: [664, 670, 678]
    },
    {
      n: 680,
      title: "Content-first design",
      aka: ["Content precedes design"],
      oneLine: "Design the thing around what it has to say, not the other way round.",
      demo: {
        caption: "The same card on placeholder text, then on the real product name. Only the right one shows what must fit.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Laid out on placeholder</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\" style=\"width:168px\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:14px\">Lorem ipsum dolor</span><div class=\"db-lines\"><i></i><i></i><i></i></div><span><span class=\"db-btn db-btn--sm\">Add to basket</span></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Same card, real copy</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\" style=\"width:168px\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:14px\">Cordless rotary hammer drill, 18 V, two batteries and case</span><div class=\"db-lines\"><i></i><i></i><i></i></div><span><span class=\"db-btn db-btn--sm\">Add to basket</span></span></div></div></div></div></div>"
      },
      what: "Jeffrey Zeldman put the argument in one line on 6 May 2008: content precedes design, and design in the absence of content is not design, it is decoration. Karen McGrane's Content Strategy for Mobile, published by A Book Apart in 2012, made the operational case: content has to be structured and reusable before it can be laid out on screens you have not seen yet, which is the argument for adaptive content rather than a separate mobile site.",
      why: "A layout designed around lorem ipsum is designed around an average that no real content matches. Real copy exposes the long product name, the empty state and the seven-item list on day one rather than at launch.",
      how: [
        "Get real copy, or a written draft of it, before the first layout.",
        "Design from the longest and shortest real cases, then check the middle looks right, rather than the reverse.",
        "Structure content into named fields rather than one blob of formatted markup if it will appear in more than one place.",
        "Write the placeholder draft yourself if the client is slow, then have them correct it. Correction is faster than authoring."
      ],
      example: "Zeldman's post is the checkable artefact: a dated entry on zeldman.com from 6 May 2008 carrying the sentence in full.",
      numbers: "",
      pitfall: "Content first turns into wait for content, and the project stalls for a month while everyone blames the client. The rule is about sequence of thinking, not a gate on starting work.",
      source: "Jeffrey Zeldman, zeldman.com, 6 May 2008; Karen McGrane, Content Strategy for Mobile, A Book Apart (2012).",
      verify: { status: "verified", note: "Zeldman's wording and the 6 May 2008 date confirmed from the post's own URL and title on zeldman.com. McGrane's book, publisher and 2012 date confirmed via A Book Apart's product page, and the adaptive content chapter confirmed from the sample chapter published on UXmatters." },
      belongs: { verdict: "core", why: "It sets the order of work for an entire project, and it is the reason a layout survives contact with real copy." },
      related: [681, 682, 683]
    },
    {
      n: 681,
      title: "Content choreography",
      aka: [],
      oneLine: "Plan how content reorders and re-emphasises at each screen width, rather than letting it fall.",
      demo: {
        caption: "The same four blocks on a phone. On the left the one that matters lands last; on the right, first.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Reflow, source order</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\" style=\"max-width:136px\"><div class=\"db-card\"><span class=\"db-note\">Nav</span></div><div class=\"db-card\"><span class=\"db-note\">Sidebar</span></div><div class=\"db-card\"><span class=\"db-note\">Promo</span></div><div class=\"db-card\"><span class=\"db-note db-note--accent\">Article</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Choreographed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\" style=\"max-width:136px\"><div class=\"db-card\"><span class=\"db-note db-note--accent\">Article</span></div><div class=\"db-card\"><span class=\"db-note\">Promo</span></div><div class=\"db-card\"><span class=\"db-note\">Sidebar</span></div><div class=\"db-card\"><span class=\"db-note\">Nav</span></div></div></div></div></div>"
      },
      what: "Trent Walton coined the term on 14 July 2011. His argument was that media queries can do more than patch broken layouts, and that with proper planning you can choreograph content in proportion to screen size. The default behaviour of a responsive layout is that floated blocks drop into a single column in source order. Choreography is the deliberate version: deciding what order, what emphasis and what visibility each block takes at each width.",
      why: "A stacked layout can be technically responsive and still put the least useful block first on a phone. Deciding the order per breakpoint is what turns reflow into design.",
      how: [
        "Sketch the small-screen order first, then decide what changes at each larger width and why.",
        "Watch what happens to sidebars. A sidebar that lands at the bottom of a phone layout is a decision you should have made on purpose.",
        "Keep reading order and visual order in step, because assistive technology follows the source order.",
        "Name the one block that must be first at every width, and protect it."
      ],
      example: "Walton's own post on trentwalton.com, dated 14 July 2011, argues the case and shows the difference between patching a broken layout and planning the reflow.",
      numbers: "",
      pitfall: "Teams call reflow responsive and stop there. The page passes on every device and still buries the important block on the smallest one.",
      source: "Trent Walton, Content Choreography, trentwalton.com, 14 July 2011.",
      verify: { status: "verified", note: "Date, authorship and the quoted argument read on the original post at trentwalton.com/2011/07/14/content-choreography/." },
      belongs: { verdict: "core", why: "It is a named, dated idea from responsive design practice that changes how a layout is planned, not just how it is written." },
      related: [680, 682, 683]
    },
    {
      n: 682,
      title: "Message hierarchy",
      aka: ["Message architecture"],
      oneLine: "Rank what you are trying to say before anyone writes a word of it.",
      demo: {
        caption: "Three things to say. Unranked they arrive at one volume; ranked, the page says the first one loudest.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Unranked</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight db-type\"><span style=\"font-size:15px\">Cover for your family</span><span style=\"font-size:15px\">Claims paid in five days</span><span style=\"font-size:15px\">Backed by a UK team</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Ranked</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight db-type\"><span style=\"font-size:24px\">Cover for your family</span><span style=\"font-size:15px\">Claims paid in five days</span><span style=\"font-size:11px\">Backed by a UK team</span></div></div></div></div>"
      },
      what: "The established name for this is message architecture, set out in Margot Bloomstein's Content Strategy at Work (2012). It is a ranked set of communication goals agreed before the copy is written, so that arguments about the homepage get settled once rather than every time. Bloomstein builds it with a card sort: participants take a deck of brand attribute cards and sort them into three piles, who we are, who we are not, and who we would like to be. What survives becomes the ranked list.",
      why: "Without a ranking, every stakeholder gets their sentence onto the page and nothing gets emphasis. With one, the page can say the top thing loudly and the third thing quietly, and you have a written reason when someone objects.",
      how: [
        "Run the sort with the people who can veto copy later, not only with the writers.",
        "Reduce to a short ranked list, in order, and get it signed off in writing.",
        "Use the list to settle layout arguments too. The top message gets the largest type on the page.",
        "Revisit it when the offer changes, not when the design changes."
      ],
      example: "Bloomstein's worked example for a medical laboratory has four ranked goals in this order: passionate about strategic discovery, then tactical and hands-on, then pioneering, then people-focused and market-driven. Each carries its own supporting words, so passionate about strategic discovery unpacks as creative, spirited, inspired, visionary, flexible.",
      numbers: "The sort deals a deck of brand attribute cards into three columns, then cuts to roughly three top attributes with supporting words. Published card counts for the deck disagree, so none is given here.",
      pitfall: "An unranked list of pleasant adjectives is not a hierarchy. If everything is a priority the page says all of it at the same volume, which is the same as saying none of it.",
      source: "Margot Bloomstein, Content Strategy at Work, Morgan Kaufmann (2012).",
      verify: { status: "adjusted", note: "Adjusted the name. Message hierarchy is descriptive rather than a term of art; the established name is message architecture and it belongs to Bloomstein, whose own definition is a hierarchy of communication goals, attributes that appear in order of priority. Her method, the three sorting columns and the medical-laboratory example were read in a lecture report at contentstrategy.at, and I have replaced the author's partial ranking with the full four-item order given there. I dropped the deck size: that report describes a stack of around 100 possible attributes, while the published description of Bloomstein's own BrandSort deck counts 80 attribute cards, and the product page no longer resolves, so the figure cannot be settled. Note the limit on that source: it is a student-written course report carrying a disclaimer that it may contain interpretations the instructor would not share, and I did not read the book itself this session." },
      belongs: { verdict: "core", why: "It is the content equivalent of a visual hierarchy, and it decides what gets the biggest type before any type is chosen." },
      related: [674, 680, 683, 685]
    },
    {
      n: 683,
      title: "One primary job per page",
      aka: ["Attention ratio", "One page, one purpose"],
      oneLine: "Each page has one thing you want the reader to do, and everything else supports it.",
      demo: {
        caption: "Count the clickable things on each page. Eleven on the left, one on the right, and both want the same action.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Eleven things to click</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-nav\"><span>Home</span><span>Products</span><span>Pricing</span><span>Blog</span></div><span class=\"db-type\" style=\"font-size:14px\">See it working on your own data</span><span><span class=\"db-btn db-btn--sm\">Book a demo</span></span><span class=\"db-row db-row--tight\"><u style=\"color:var(--accent);font-size:11px\">Case studies</u><u style=\"color:var(--accent);font-size:11px\">Pricing guide</u><u style=\"color:var(--accent);font-size:11px\">Careers</u></span><div class=\"db-nav\"><span>Terms</span><span>Privacy</span><span>Contact</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One thing to click</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:14px\">See it working on your own data</span><span><span class=\"db-btn db-btn--sm\">Book a demo</span></span></div></div></div></div>"
      },
      what: "The measurable version of this is attention ratio, from Oli Gardner's seven principles of conversion-centred design at Unbounce, first set out in 2013: the ratio of the number of things you can do on a page to the number of things you should do. A dedicated landing page with one goal and one link has a ratio of one to one. Add global navigation, a footer and three cross-sell blocks and the ratio climbs fast. Unbounce's own framing is that landing pages with more than one purpose typically have no purpose.",
      why: "Every extra link on a page competes for the same attention as the one you care about. Naming the single job also settles design arguments early, because a block that does not serve the job has no claim on the space.",
      how: [
        "Write the one job as a sentence before you design. If you cannot, the page is two pages.",
        "Count the links, including the header and footer. Each one is a way out.",
        "Strip navigation from a page whose only job is a single conversion, and keep it on pages whose job is browsing.",
        "Check the largest element on the page is the one serving the job."
      ],
      example: "Unbounce's conversion-centred design page states the one-to-one target in its own words, so both the claim and its wording are checkable rather than folklore.",
      numbers: "Unbounce's stated target for a dedicated landing page is a one to one attention ratio.",
      pitfall: "The rule gets applied to pages it was never meant for. A documentation page or a product listing needs its links, and stripping them just traps the reader.",
      source: "Oli Gardner / Unbounce, The 7 Principles of Conversion-Centered Design. The broader one-purpose-per-page idea has no single origin.",
      verify: { status: "verified", note: "Attention ratio definition, the one to one target for the highest-converting landing pages, the seven principles, Gardner's 2013 authorship and the line about landing pages with more than one purpose all read on unbounce.com/conversion-centered-design. Note what that verifies and what it does not: it confirms Unbounce says these things, not that the ratio has been tested independently. I have quoted no conversion-lift figures, because the ones I found were vendor case studies I could not check." },
      belongs: { verdict: "adjacent", why: "Overturned from core. Attention ratio is a landing-page marketing metric published by a vendor selling landing-page software, with no independent study behind the one to one target. The specific design use survives that: counting every exit on a page is a cheap, repeatable check that changes what gets cut from a single-purpose page." },
      related: [669, 682, 684, 686]
    },
    {
      n: 684,
      title: "Call-to-action design",
      aka: ["CTA", "Action labels"],
      oneLine: "The wording of the thing you want clicked matters more than its colour.",
      demo: {
        caption: "Identical buttons, different words. Only the right column tells you what happens after the press.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Vague</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span><span class=\"db-btn\">Let us do this</span></span><span><span class=\"db-btn\">Submit</span></span><span><span class=\"db-btn\">Get started</span></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Names the outcome</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span><span class=\"db-btn\">Send message</span></span><span><span class=\"db-btn\">Pay £40 now</span></span><span><span class=\"db-btn\">Book a 20-minute call</span></span></div></div></div></div>"
      },
      what: "Apple's guidance is direct: when labelling buttons and links it is almost always best to use a verb, and to prioritise clarity over cleverness. Its worked example is that just saying Send often works better than Let's do it. It also rules out Click here for links in favour of more descriptive words or phrases, adding only that this is especially important for people using screen readers; the mechanism, that those readers can pull up a list of links with no surrounding sentences, comes from WCAG rather than from Apple. The term itself comes from direct-response advertising, where the response device was the point of the ad.",
      why: "A reader deciding whether to press something reads the label, not the fill colour. A label that names the outcome removes the pause where they wonder what happens next, which is where most abandonment sits.",
      how: [
        "Start with a verb that names the outcome: Send, Save, Book, Download.",
        "Match the label to the heading above it. A button reading Get started under a heading about booking a call is a small lie.",
        "Say what comes next when the action is heavy. Continue to payment beats Continue.",
        "Read the label on its own, with no surrounding page, the way a screen reader user hears it."
      ],
      example: "Apple's own pair, Send against Let's do it, published on the Human Interface Guidelines Writing page to illustrate prioritising clarity and avoiding the temptation to be too cute or clever.",
      numbers: "",
      pitfall: "The CTA gets designed as a coloured rectangle and the words go in last, usually by whoever is closest to the deadline. The words are the part the reader is actually deciding on.",
      source: "Apple Human Interface Guidelines, Writing (current edition). The term comes from direct-response advertising; origin unclear.",
      verify: { status: "verified", note: "Apple's verb-first instruction, the Send versus Let's do it example, and the warning against Click here all read on the current Human Interface Guidelines Writing page. Corrected one attribution: the author had Apple explaining that screen reader users pull up a list of links, and Apple does not say that. Apple says only that descriptive link text is especially important for people using screen readers. The link-list mechanism is stated in the W3C Understanding page for SC 2.4.4 and is credited there instead. I could not establish a first documented use of the phrase call to action, so I have not attributed it." },
      belongs: { verdict: "core", why: "Button and link wording is designed, tested and versioned like any other component, and it is where a page either works or does not." },
      related: [621, 672, 675, 683, 9670, 1046]
    },
    {
      n: 685,
      title: "Benefit before feature",
      aka: ["Sell the sizzle", "Features versus benefits"],
      oneLine: "Lead with what the reader gets, then give the specification that makes it true.",
      demo: {
        caption: "The same two lines, swapped. On the right the outcome is the headline and the specification sits under it as proof.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Specification first</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight db-type\"><span style=\"font-size:17px\">18 V, 1,500 rpm, 13 mm chuck</span><span style=\"font-size:12px;color:var(--ink-3)\">Makes a clean hole in a brick wall.</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Outcome first</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight db-type\"><span style=\"font-size:17px\">Makes a clean hole in a brick wall</span><span style=\"font-size:12px;color:var(--ink-3)\">18 V, 1,500 rpm, 13 mm chuck</span></div></div></div></div>"
      },
      what: "The idea comes from selling rather than design. Elmer Wheeler's Tested Sentences That Sell (1937) is the usual source for the line about selling the sizzle rather than the steak. The companion adage about drills and holes has a messier paper trail. Quote Investigator's earliest strong match is a 1942 newspaper advertisement for Provident Mutual Life placed by an agent named C. C. Wagner. Percy H. Whiting's The Five Great Rules of Selling (1947) credits Leo McGivena. Theodore Levitt used it and also credited McGivena, and Clayton Christensen credited Levitt in a 2005 Harvard Business Review article, which is how the misattribution spread.",
      why: "A reader scanning a page is deciding whether this thing is for them, and a specification does not answer that. Leading with the outcome buys you the second read, where the specification does its job.",
      how: [
        "Write the benefit as a sentence a customer would actually say, then put the feature under it as proof.",
        "Keep the specification. A benefit with nothing behind it reads as noise and invites doubt.",
        "Order the page by what the reader is deciding, not by what the team built.",
        "Check every benefit maps to a named feature. If it does not, it is a claim someone will test."
      ],
      example: "The 1942 Provident Mutual advertisement demonstrates its own technique: it sells insurance by pointing out that a million men bought quarter-inch drills because they wanted quarter-inch holes.",
      numbers: "",
      pitfall: "Benefit-first copy drifts into claims that nothing supports. Once the headline promises an outcome the product cannot show, the specification below it stops being read as evidence.",
      source: "Elmer Wheeler, Tested Sentences That Sell (1937). Attribution of the drill-and-hole adage is contested; see Quote Investigator.",
      verify: { status: "disputed", note: "Wheeler's 1937 book title confirmed from multiple independent sources. The drill-and-hole attribution chain, the 1942 Provident Mutual advertisement by C. C. Wagner, the 1947 Whiting credit to Leo McGivena, Levitt's use and Christensen's 2005 HBR credit to Levitt, all read on the Quote Investigator entry for this saying. Marked disputed because the adage is routinely credited to Levitt in design and marketing writing and he did not originate it." },
      belongs: { verdict: "adjacent", why: "Borrowed from direct-response selling. The specific design use is concrete: it decides what goes in the headline and what drops into the specification table below the fold." },
      related: [682, 683, 686]
    },
    {
      n: 686,
      title: "Proof and evidence placement",
      aka: ["Social proof placement"],
      oneLine: "Put the evidence next to the doubt it answers, not on a page of its own.",
      demo: {
        caption: "One customer quote, two placements. On the right it sits against the price, which is where the doubt is.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Filed at the bottom</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Team plan</span><span class=\"db-type\" style=\"font-size:17px\">£40 a month</span><span><span class=\"db-btn db-btn--sm\">Choose this plan</span></span></div></div><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">What customers say</span><span class=\"db-type\" style=\"font-size:12px;color:var(--ink-3)\">It replaced the two tools we were paying for. A. Patel, operations lead</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Beside the price</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Team plan</span><span class=\"db-type\" style=\"font-size:17px\">£40 a month</span><span class=\"db-type\" style=\"font-size:12px;color:var(--accent)\">It replaced the two tools we were paying for. A. Patel, operations lead</span><span><span class=\"db-btn db-btn--sm\">Choose this plan</span></span></div></div><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class=\"db-card\"><span class=\"db-label\">Common questions</span></div></div></div></div></div>"
      },
      what: "The mechanism underneath is social proof, one of the principles in Robert Cialdini's Influence: The Psychology of Persuasion (1984): when people are uncertain, they take their cue from what others did. The design decision is placement. A testimonial sitting on a testimonials page that nobody visits does no work. The same quote sitting beside the price, answering the objection the price raises, does.",
      why: "Objections happen at specific points on a page: at the price, at the sign-up form, at the security question. Evidence placed at those points is read at the moment it is needed rather than filed away as marketing.",
      how: [
        "Map the objections in order down the page, then place one piece of evidence against each.",
        "Prefer specific evidence to general praise. A named customer with a stated result beats five stars from A. Customer.",
        "Put credentials and certificates next to the field that worries people, usually payment or personal data.",
        "Publish only evidence you can produce on request, since invented ratings are a legal problem before they are a trust problem."
      ],
      example: "A pricing page that places a named customer quote about cost directly beside the price, rather than in a carousel at the bottom of the page.",
      numbers: "",
      pitfall: "Proof gets treated as decoration and ends up in a logo strip in the footer, far from any decision. The second failure is inflation, where an unverifiable claim does more damage than no claim at all.",
      source: "Robert B. Cialdini, Influence: The Psychology of Persuasion (1984), for social proof. Placement guidance has no single named origin.",
      verify: { status: "verified", note: "Social proof confirmed as one of Cialdini's named principles of persuasion from Influence (1984), checked against his own organisation's summary at influenceatwork.com. Note the limit of that: Cialdini supports the mechanism, not the placement advice, which is craft convention with no study behind it. I deliberately quote no conversion figures: every uplift number I found for testimonial placement traced back to a vendor case study I could not verify." },
      belongs: { verdict: "adjacent", why: "The mechanism is persuasion psychology, not design. The design decision it governs is specific and testable: which piece of evidence appears at which point on the page, next to which objection." },
      related: [683, 685, 687]
    },
    {
      n: 687,
      title: "Readable legal and compliance copy",
      aka: ["Plain legal writing", "Layered notices"],
      oneLine: "Terms, notices and privacy text have to be readable, and in places that is the law.",
      demo: {
        caption: "Legibility sits inside the statutory test, so the left version can fail before anyone has read a word.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One wall, set tiny</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:7px;line-height:1.35;color:var(--ink-4)\">7.2 The Customer may terminate this Agreement by written notice served upon the Supplier within fourteen (14) days of the Commencement Date, whereupon the Supplier shall refund such sums as have been paid in respect of the unexpired portion of the Term, less any deduction properly made pursuant to clause 9.4, and thereafter no further liability shall arise on the part of either party save as expressly provided herein.</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Layered, legible</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:14px\">Cancel in the first 14 days and we refund what you paid.</span><span><u style=\"color:var(--accent);font-size:12px\">Read clause 7.2 in full</u></span><span class=\"db-type\" style=\"font-size:10px;line-height:1.4;color:var(--ink-3)\">7.2 The Customer may terminate this Agreement by written notice served upon the Supplier within fourteen (14) days of the Commencement Date…</span></div></div></div></div>"
      },
      what: "GDPR Article 12(1) requires information to be provided in a concise, transparent, intelligible and easily accessible form, using clear and plain language, and singles out anything addressed to a child. The UK Consumer Rights Act 2015 says at section 64(3) that a term is transparent only if it is expressed in plain and intelligible language and, for a written term, is legible, and section 68(2) applies the same test to consumer notices. Legibility is named in the Act, which puts type size and contrast inside the legal test rather than beside it.",
      why: "Unreadable terms fail at the thing they exist for. A term a court can set aside for opacity protects nobody, and a privacy notice nobody can parse does not produce informed consent.",
      how: [
        "Layer it. A short plain summary that links to the binding clause beats one wall of text.",
        "Hold legal text to the same type standards as the rest of the product, since legibility is part of the statutory test.",
        "Show consequential terms at the moment they apply, not only in a document behind a link in the footer.",
        "Have a lawyer approve the plain version, rather than asking a writer to soften the legal one after the fact."
      ],
      example: "On 1 April 2010 the UK retailer GameStation added a clause to its online terms claiming a non-transferable option to claim, for now and for ever more, the buyer's immortal soul, with a link to opt out that also offered a five pound voucher for spotting it. Pinsent Masons' Out-Law reported that not one of the 7,500 customers who bought that day clicked it. The prank was a joke; the finding about how terms are read was not.",
      numbers: "GDPR Article 12(1). Consumer Rights Act 2015 (UK), sections 64(3) and 68(2). GameStation, 1 April 2010: 7,500 purchases that day, no opt-out clicks.",
      pitfall: "The plain summary and the binding text drift apart across revisions, and you end up with two documents saying different things. Version them together or do not write the summary.",
      source: "Regulation (EU) 2016/679 (GDPR), Article 12; Consumer Rights Act 2015 (UK), sections 64 and 68.",
      verify: { status: "verified", note: "Sections 64(3) and 68(2) read verbatim on legislation.gov.uk this session, confirming that legibility sits inside the statutory test for both a written term and a consumer notice. GDPR Article 12(1) is carried from the author's check rather than re-opened this session. The GameStation date, the 7,500 figure, the quoted clause and the unclicked opt-out with its five pound voucher read in Pinsent Masons' Out-Law report." },
      belongs: { verdict: "core", why: "Designers set the type, the layering and the moment of disclosure for legal copy, and the statutory tests name legibility as well as language." },
      related: [663, 667, 678, 686]
    }
  ]
};
