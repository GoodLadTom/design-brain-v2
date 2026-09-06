window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[28] = {
  n: 28,
  slug: "ethics",
  title: "Ethics and responsibility",
  blurb: "Deceptive interface patterns, consent and privacy duties, and the older argument about what designers should work on.",
  intro: "Two separate traditions sit in this section. The older one is professional conscience: Ken Garland's First Things First in 1964 and Victor Papanek's Design for the Real World in 1971, both arguing that designers were spending their skill on the wrong problems. The newer one is a catalogue of specific interface tricks, started by Harry Brignull in 2010 and since turned into research taxonomies by Colin Gray and colleagues and by Arunesh Mathur and colleagues. That catalogue has become law. The UK Digital Markets, Competition and Consumers Act 2024, the EU Digital Services Act and the GDPR all now name particular design choices as unlawful, which means a designer can put a client in front of a regulator with a checkout page.",
  sources: [
    "Harry Brignull, deceptive.design pattern taxonomy (site started 2010; 18 types listed, accessed 2026) and Deceptive Patterns: Exposing the Tricks Tech Companies Use to Control You (Testimonium, 30 July 2023)",
    "Colin M. Gray, Yubo Kou, Bryan Battles, Joseph Hoggatt, Austin L. Toombs, The Dark (Patterns) Side of UX Design, CHI 2018 (DOI 10.1145/3173574.3174108)",
    "Arunesh Mathur et al., Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites, PACM HCI 3(CSCW), 2019",
    "FTC staff report, Bringing Dark Patterns to Light (September 2022)",
    "Digital Markets, Competition and Consumers Act 2024, Schedule 20 (in force 6 April 2025); CMA guidance CMA207, Unfair commercial practices",
    "Regulation (EU) 2022/2065 (Digital Services Act), Article 25; Regulation (EU) 2016/679 (GDPR), Articles 5, 7, 22 and 25; Regulation (EU) 2024/1689 (AI Act), Article 50",
    "CMA, Evidence review of Online Choice Architecture and consumer and competition harm (2022)",
    "Eric J. Johnson and Daniel G. Goldstein, Do Defaults Save Lives?, Science 302, 1338-1339 (2003)",
    "Ann Cavoukian, Privacy by Design: The 7 Foundational Principles (2009)",
    "ICO and The Alan Turing Institute, Explaining decisions made with AI (Project ExplAIn, 2020)",
    "Jakob Nielsen, 10 Usability Heuristics for User Interface Design (with Rolf Molich, 1990; current form 1994)",
    "Sustainable Web Design Model v4 (sustainablewebdesign.org); HTTP Archive Web Almanac 2024, Sustainability chapter; W3C Web Sustainability Guidelines",
    "FCA, FG21/1 Guidance for firms on the fair treatment of vulnerable customers (February 2021)",
    "eSafety Commissioner (Australia), Safety by Design principles",
    "Ken Garland, First Things First (1964); First Things First 2000, published in Eye, Adbusters, Emigre and others (1999-2000)",
    "Victor Papanek, Design for the Real World: Human Ecology and Social Change (1971)",
    "Amy Orben and Andrew K. Przybylski, The association between adolescent well-being and digital technology use, Nature Human Behaviour 3, 173-182 (2019)"
  ],
  entries: [
    {
      n: 985,
      title: "Dark pattern: bait and switch",
      aka: ["Bait advertising", "Switch selling"],
      oneLine: "Advertise one thing, then steer the customer to something else once they have already committed.",
      demo: {
        caption: "The listing offers a twin room at 89 pounds. The page its button opens no longer sells that room.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">The listing</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:24px\">&pound;89</span><span class=\"db-note\">twin room, Tuesday</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Book now</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">The page it opens</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:24px\">&pound;160</span><span class=\"db-note\">superior room, twin unavailable</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Continue</span></div></div></div></div></div></div>"
      },
      what: "Brignull listed bait and switch among the original dark patterns in 2010, defining it as: you set out to do one thing, but a different, undesirable thing happens instead. Gray and colleagues quote that definition in their Table 1 and nest bait and switch under sneaking, one of their five strategies. UK law splits it in two. Schedule 20 of the DMCC Act 2024 bans bait advertising at paragraph 5, where a trader advertises a price it has reasonable grounds to believe it cannot supply in reasonable quantities for a reasonable period. Paragraph 6 bans the switch itself: advertising a price, then refusing to show the item, refusing orders, refusing to deliver within a reasonable time, or showing a defective sample, with the intention of promoting a different product.",
      why: "By the time the substitute appears, the person has invested attention, form-filling and a decision. That sunk effort makes them likelier to accept a worse deal than they would have taken cold. Refusing the trick buys you a headline claim that survives to the payment screen, which is the only claim worth making.",
      how: [
        "Make the primary button do the thing the headline promised, on every step.",
        "If stock or availability is thin, say so on the listing, not at checkout.",
        "Keep the originally advertised item reachable from any upsell or interstitial.",
        "Write the ad copy and the destination page in the same review, not in two teams."
      ],
      example: "A hotel search page advertises rooms from 89 pounds. The 89-pound rate is one twin room on a Tuesday in February, and every ordinary date returns 160 pounds. Under Schedule 20 paragraph 5 that is bait advertising if the trader knew the advertised price could not be supplied in reasonable quantities for a reasonable period.",
      numbers: "UK: Digital Markets, Competition and Consumers Act 2024, Schedule 20, paragraph 5 (bait advertising) and paragraph 6 (bait and switch). Schedule 20 lists 32 practices unfair in all circumstances and came into force on 6 April 2025.",
      pitfall: "Marketing owns the advert and product owns the landing page, so nobody notices the promise and the destination have drifted apart over six months of small edits.",
      source: "Harry Brignull, darkpatterns.org (2010) and Deceptive Patterns (2023); UK DMCC Act 2024, Schedule 20",
      verify: { status: "verified", note: "Paragraph 5 and 6 wording read from the Schedule 20 text on legislation.gov.uk, which lists 32 practices. The current type list at deceptive.design/types was read in full: 18 types, and bait and switch is no longer among them. Brignull's 2010 definition is quoted from Table 1 of Gray et al. (CHI 2018). Correction to an earlier draft: that draft said Gray et al. do not file bait and switch under any of their five strategies. They do. Figure 1 of the CHI 2018 PDF lists it under Sneaking beside forced continuity, hidden costs and sneak into basket, and the Sneaking section gives it its own subsection. Both were read at dl.acm.org." },
      belongs: { verdict: "core", why: "A named, catalogued and now unlawful interface practice that a designer can create or prevent with a single button label." },
      related: [990, 994, 995]
    },
    {
      n: 986,
      title: "Dark pattern: roach motel",
      aka: ["Hard to cancel", "Easy in, hard out"],
      oneLine: "Signing up takes one click; getting out takes a phone call, a form and three retention offers.",
      demo: {
        caption: "Count the screens. Joining takes one; leaving takes six, and the last step is a telephone call.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Joining</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--lg db-sq--accent\"></span></div><span class=\"db-note\">one screen, one click</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Leaving</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--lg db-sq--accent\"></span><span class=\"db-sq db-sq--lg db-sq--accent\"></span><span class=\"db-sq db-sq--lg db-sq--accent\"></span><span class=\"db-sq db-sq--lg db-sq--accent\"></span><span class=\"db-sq db-sq--lg db-sq--accent\"></span><span class=\"db-sq db-sq--lg db-sq--accent\"></span></div><span class=\"db-note\">six screens, then a phone call</span></div></div></div></div>"
      },
      what: "Brignull's original name for the asymmetry between joining and leaving. The current deceptive.design taxonomy has retired the animal metaphor and calls it Hard to Cancel: the user finds it easy to sign up or subscribe, and very hard to cancel. Gray and colleagues treat it as a subtype of obstruction. The law has caught up. Article 25(1) of the EU Digital Services Act bans platforms from designing interfaces that deceive or manipulate, and Article 25(3)(c) names making the procedure for terminating a service more difficult than subscribing to it as one of the practices the Commission will write guidelines against. Article 7(3) of the GDPR requires that withdrawing consent be as easy as giving it.",
      why: "Every extra step in a cancellation flow removes some proportion of the people trying to use it, which is exactly why the steps get added. It converts revenue that the customer has decided to stop paying, so the money it earns is money the business has already lost the argument for. Symmetrical exits also stop the support queue filling with angry people.",
      how: [
        "Count the clicks from signed-in home page to confirmed cancellation, then count them for signing up. Publish both numbers internally.",
        "Put cancellation in the same place as the subscription details, not in help articles.",
        "Allow exactly one retention offer, on the same screen, with the cancel button still primary.",
        "Never require a phone call or an email to cancel something that was bought with a click."
      ],
      example: "The FTC's complaint against ABCmouse alleged that the site promised Easy Cancellation while rejecting cancellations by phone, email and support form, and instead required people to walk through between six and nine screens, none of which could be skipped, each carrying links that took them out of the cancellation path. The first screen did not use the word cancellation at all. The FTC sets this out in its 2022 staff report Bringing Dark Patterns to Light.",
      numbers: "EU Digital Services Act, Article 25(3)(c). GDPR, Article 7(3). In the US, the FTC's revised Negative Option Rule (the click-to-cancel rule) was vacated in its entirety by the Eighth Circuit in July 2025 on procedural grounds, days before it took full effect; the Restore Online Shoppers' Confidence Act still requires a simple cancellation mechanism.",
      pitfall: "Retention teams measure saves and nobody measures the cost of the people who leave anyway and then tell others about the experience.",
      source: "Harry Brignull, darkpatterns.org (2010), renamed Hard to Cancel at deceptive.design; EU DSA Article 25; GDPR Article 7",
      verify: { status: "adjusted", note: "The master list uses Brignull's 2010 name. The current deceptive.design taxonomy calls this Hard to Cancel, so I have kept the old title and added the current name as an alias. Article 25(1) and 25(3)(c) read at eu-digital-services-act.com: note that 25(3) is framed as a list of practices the Commission may issue guidelines on, not a separate prohibition, and 25(2) disapplies the ban where the Unfair Commercial Practices Directive or the GDPR already covers the conduct. GDPR Article 7(3) read at gdpr-info.eu. The ABCmouse detail, including the six to nine screens and the Easy Cancellation promise, is quoted from the FTC staff report PDF at ftc.gov. Two law-firm notes give the Eighth Circuit decision date as 2 July and 8 July 2025 respectively, so I have said July 2025 only." },
      belongs: { verdict: "core", why: "Cancellation flow is a design artefact, and the asymmetry between joining and leaving is measurable in clicks." },
      related: [993, 988, 9000]
    },
    {
      n: 987,
      title: "Dark pattern: confirmshaming",
      aka: ["Guilt decline", "Shame the no"],
      oneLine: "Wording the decline option so that choosing it feels like admitting something embarrassing about yourself.",
      demo: {
        caption: "Only the wording of the decline changed. The left one makes you say something about yourself to get out.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Shamed decline</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:14px\">Get 10% off your first order</span><span class=\"db-input\">name@example.com</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Sign up</span></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">No thanks, I like paying full price</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Plain decline</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:14px\">Get 10% off your first order</span><span class=\"db-input\">name@example.com</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Sign up</span></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">No thanks</span></div></div></div></div></div></div>"
      },
      what: "Brignull defines confirmshaming as emotionally manipulating the user into doing something they would not otherwise have done. In practice it means the accept option is written neutrally and the decline option is written in the first person as a confession: no thanks, I prefer paying full price. Gray and colleagues catalogue the same move as toying with emotion, one of four named forms of aesthetic manipulation, which is itself a subtype of interface interference. The FTC lists Confirm Shaming under the heading Asymmetric Choice in the appendix to its 2022 staff report, defining it as using shame to steer users away from certain choices by framing the alternatives as a bad decision.",
      why: "Reading the decline option forces a small self-description, and people avoid describing themselves badly even in a throwaway modal. It converts a few extra sign-ups at the price of a mild insult delivered by your brand to a person who already said no. Neutral wording keeps the choice a choice and keeps the tone consistent with everything else you have written.",
      how: [
        "Write both options as plain verbs from the same point of view: Subscribe and No thanks.",
        "Never write a decline option in the first person.",
        "Give the two options the same visual weight unless one is genuinely destructive.",
        "Read the decline text aloud as though a member of staff were saying it to a customer's face."
      ],
      example: "The FTC's 2022 staff report gives, as its example of confirm shaming, the phrase No, I don't want to save money appearing when a shopper selects a one-time purchase over a recurring one.",
      numbers: "",
      pitfall: "Copywriters treat the decline option as spare space for brand personality, and it is the one place where personality reads as contempt.",
      source: "Harry Brignull, deceptive.design; FTC, Bringing Dark Patterns to Light (September 2022)",
      verify: { status: "verified", note: "Definition taken from the type list at deceptive.design/types. The Asymmetric Choice heading, the FTC's own definition of confirm shaming and the one-time purchase example were read directly in the September 2022 staff report PDF at ftc.gov, not from a law-firm summary. Gray et al. place toying with emotion under aesthetic manipulation, which is itself one of the three subtypes of interface interference; wording checked against the CHI 2018 paper text." },
      belongs: { verdict: "core", why: "This is pure copywriting inside an interface, which is the designer's own material." },
      related: [991, 1000, 992]
    },
    {
      n: 988,
      title: "Dark pattern: forced continuity",
      aka: ["Hidden subscription", "Negative option", "Free trial trap"],
      oneLine: "A free trial silently becomes a paid subscription because the charge was never clearly disclosed.",
      demo: {
        caption: "Both trials charge on day 14. Only the lower one warns you first and leaves time to stop it.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 160\"><text class=\"t\" x=\"0\" y=\"16\">trial that says nothing</text><path class=\"s-mute\" d=\"M8 48 H312\"/><circle class=\"f-mute\" cx=\"14\" cy=\"48\" r=\"4\"/><circle class=\"f-accent\" cx=\"250\" cy=\"48\" r=\"6\"/><text class=\"t\" x=\"8\" y=\"66\">day 0 sign-up</text><text class=\"t\" x=\"312\" y=\"66\" text-anchor=\"end\">day 14: &pound;9.99 taken</text><text class=\"t\" x=\"0\" y=\"104\">trial that discloses</text><path class=\"s-mute\" d=\"M8 136 H312\"/><circle class=\"f-mute\" cx=\"14\" cy=\"136\" r=\"4\"/><circle class=\"f-accent\" cx=\"180\" cy=\"136\" r=\"5\"/><circle class=\"f-accent\" cx=\"250\" cy=\"136\" r=\"6\"/><text class=\"t\" x=\"180\" y=\"126\" text-anchor=\"middle\">day 11 reminder</text><text class=\"t\" x=\"8\" y=\"154\">day 0: free until day 14, then &pound;9.99</text><text class=\"t\" x=\"312\" y=\"154\" text-anchor=\"end\">&pound;9.99 taken</text></svg></div>"
      },
      what: "Brignull's original name for the free trial that quietly turns into a recurring charge. The current deceptive.design taxonomy calls it Hidden Subscription: the user is enrolled in a recurring payment plan without clear disclosure or explicit consent. Gray and colleagues file it under sneaking. Mathur and colleagues found it as one of three types inside their Sneaking category in a crawl of roughly 11,000 shopping sites. In the US it is governed by the Restore Online Shoppers' Confidence Act, which requires clear disclosure of all material terms, express informed consent before charging, and a simple way to cancel.",
      why: "The pattern works on forgetting rather than on persuasion, so it collects money from people who never decided to pay. It also poisons the trial as a tool: once customers expect the trap, they stop starting trials at all. Clear disclosure and a reminder before the first charge cost a little conversion and remove the refund queue entirely.",
      how: [
        "State the charge amount, the date and the currency on the same screen as the trial sign-up, in body copy, not a tooltip.",
        "Send a reminder before the first charge with a one-click route to cancel.",
        "Do not pre-tick the box that converts a trial into a plan.",
        "Show the next renewal date permanently in the account area."
      ],
      example: "Mathur and colleagues' 2019 crawl treats Hidden Subscription as one of fifteen dark pattern types; their dataset and the shopping sites carrying each instance are published with the paper at webtransparency.cs.princeton.edu/dark-patterns.",
      numbers: "Mathur et al. (2019) found 1,818 dark pattern instances across roughly 53,000 product pages on about 11,000 shopping sites, present on 1,254 sites (about 11.1 per cent), covering 15 types in 7 categories.",
      pitfall: "The disclosure exists but sits below the fold, in grey, next to the terms link, which satisfies a lawyer and nobody else.",
      source: "Harry Brignull, darkpatterns.org (2010), renamed Hidden Subscription at deceptive.design; ROSCA (US, 2010)",
      verify: { status: "adjusted", note: "Master list uses the 2010 name; current deceptive.design taxonomy calls it Hidden Subscription, so I have added that as an alias. Crawl figures and the category structure were read on the Princeton project page: 1,818 instances, 1,254 sites, about 11.1 per cent, roughly 53,000 product pages, 15 types in 7 categories, and Sneaking holding exactly sneak into basket, hidden costs and hidden subscription. ROSCA requirements summarised from Alston and Wiley advisories on the vacated FTC rule; I did not read the statute itself." },
      belongs: { verdict: "core", why: "Trial and subscription flows are designed screens, and the disclosure is a layout decision before it is a legal one." },
      related: [986, 994, 990]
    },
    {
      n: 989,
      title: "Dark pattern: disguised ads",
      aka: ["Native advertising failure", "Advertorial"],
      oneLine: "Paid content styled so the reader takes it for editorial, navigation or a system message.",
      demo: {
        caption: "One item in each list is paid for. Only on the right can you tell which one before you click.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No marker</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">How to pick a drill bit</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">The 12V drill we recommend</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Best cordless drills tested</span><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Marked and contained</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">How to pick a drill bit</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\" style=\"background:var(--paper-sunk)\"><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Paid promotion</span><span class=\"db-type\" style=\"font-size:13px\">The 12V drill we recommend</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Best cordless drills tested</span><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div></div>"
      },
      what: "Brignull's definition is that the user believes they are clicking an interface element or native content when it is actually an advertisement. That covers three related failures: an advert drawn to look like a download button, a paid article set in the same typography as the editorial around it, and a sponsored listing in a results page with no visible marker. UK law bans the second directly. Schedule 20 paragraph 12 of the DMCC Act 2024 prohibits using editorial content to promote a product where the trader has paid for the promotion without making that clear in the content, or through images or sounds the consumer can identify.",
      why: "Readers use visual convention to work out who is talking to them. Break that convention and every subsequent judgement they make about your credibility is built on a false reading. Clear labelling costs a small amount of click-through and keeps the rest of the page believable.",
      how: [
        "Give paid content a different container, a different typeface or a persistent label, and keep the difference legible at a glance.",
        "Put the label at the top of the item, before the headline, not in a footer.",
        "Never style an advert to resemble a system control such as a download or close button.",
        "Test the labelling by screenshotting the page and asking someone outside the team to point at what is paid for."
      ],
      example: "The FTC's 2022 staff report names advertisements designed to look like independent editorial content and comparison-shopping sites that claim neutrality while ranking companies by compensation.",
      numbers: "UK: DMCC Act 2024, Schedule 20, paragraph 12, covering paid editorial content that is not clearly identified.",
      pitfall: "The word Sponsored is set at 10px in mid-grey on white, technically present and effectively invisible, which fails the contrast rules as well as the disclosure rules.",
      source: "Harry Brignull, deceptive.design; UK DMCC Act 2024, Schedule 20 paragraph 12; FTC, Bringing Dark Patterns to Light (2022)",
      verify: { status: "verified", note: "Paragraph 12 wording read from the Schedule 20 text on legislation.gov.uk. Definition from deceptive.design/types. The FTC examples are quoted from the body of the September 2022 staff report PDF, which names advertisements deceptively formatted to look like independent editorial content and purportedly neutral comparison-shopping sites that rank companies based on compensation." },
      belongs: { verdict: "core", why: "Whether a reader can tell editorial from advertising is decided entirely by typography, colour and containment." },
      related: [991, 1003, 9004]
    },
    {
      n: 990,
      title: "Dark pattern: hidden costs",
      aka: ["Drip pricing", "Junk fees"],
      oneLine: "A low headline price that grows with mandatory fees only once the customer reaches checkout.",
      demo: {
        caption: "Both journeys end at the same total. Only the right-hand card puts that number where the decision is made.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Headline is the part price</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:26px\">&pound;45</span><span class=\"db-note\">per ticket</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Choose seat</span></div></div></div><span class=\"db-note\">pay screen: &pound;58.40</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Headline is the total</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:26px\">&pound;58.40</span><span class=\"db-note\">&pound;45 plus booking and service fees</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Choose seat</span></div></div></div><span class=\"db-note\">pay screen: &pound;58.40</span></div></div></div></div>"
      },
      what: "Brignull's definition is that the user is drawn in by a low advertised price and discovers unexpected fees after investing time and effort. Mathur and colleagues classify it under Sneaking. Regulators call it drip pricing. Since 6 April 2025 the UK bans it directly: under the DMCC Act 2024 a trader must give the total price up front in any invitation to purchase, including all mandatory fees, taxes and charges the consumer must pay. A charge counts as mandatory when it is unavoidable, so booking fees, administration fees, service charges and platform fees all have to be in the headline number.",
      why: "The pattern relies on the same sunk effort as bait and switch: nobody restarts a twenty-minute booking over four pounds. Showing the true total earlier loses some clicks at the top of the funnel and removes the abandonment spike at the payment step, which is the expensive one.",
      how: [
        "Show the all-in price on the listing, and use per-night or per-item breakdowns as secondary text.",
        "If a fee genuinely varies, show the range on the listing rather than nothing.",
        "Keep genuinely optional extras clearly separate and unticked.",
        "Compare your listing price and your final price on ten real journeys before launch."
      ],
      example: "A ticketing site lists a seat at 45 pounds and charges 58.40 pounds at the payment step after a booking fee and a service charge. Since April 2025 that is unlawful in the UK unless the 58.40 figure appears in the original invitation to purchase.",
      numbers: "UK: DMCC Act 2024 total price rule, in force 6 April 2025. The CMA has direct enforcement powers with fines up to 300,000 pounds or 10 per cent of worldwide turnover, whichever is higher.",
      pitfall: "The engineering team can only calculate the fee once a date and quantity are chosen, so the listing keeps the old number and nobody treats that as a compliance problem.",
      source: "Harry Brignull, deceptive.design; UK DMCC Act 2024; CMA guidance CMA207, Unfair commercial practices",
      verify: { status: "verified", note: "Total price rule and the 6 April 2025 date checked against the CMA's own CMA207 guidance on gov.uk and Taylor Wessing's April 2025 briefing. The penalty figures, 300,000 pounds or 10 per cent of worldwide turnover whichever is higher, appear in CMA207 and in three independent law-firm notes." },
      belongs: { verdict: "core", why: "What number appears in the largest type on a listing card is a design decision, and it is the one regulators now read first." },
      related: [985, 994, 995]
    },
    {
      n: 991,
      title: "Dark pattern: misdirection",
      aka: ["Visual interference", "Trick wording", "False hierarchy"],
      oneLine: "Deliberately aiming attention at one option so the other one is technically present but unseen.",
      demo: {
        caption: "Two equally valid choices in each panel. On the left the styling has already made the decision for the reader.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One option carries the weight</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:14px\">Your renewal quote is &pound;340</span><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Renew now</span></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--quiet\">see other prices</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Both options carry the same</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:14px\">Your renewal quote is &pound;340</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost\">Renew now</span></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost\">See other prices</span></div></div></div></div></div></div>"
      },
      what: "Misdirection was one of Brignull's original names for using visual and verbal emphasis to push people towards the option that suits the business. The current deceptive.design taxonomy has split it into Visual Interference, where information is hidden, obscured or disguised, and Trick Wording, where confusing language does the work. Mathur and colleagues keep Misdirection as one of their seven categories, holding four types: confirmshaming, visual interference, trick questions and pressured selling. Article 25(3)(a) of the EU Digital Services Act names giving more prominence to certain choices as an example of a prohibited interface design.",
      why: "Hierarchy is the strongest tool a designer has, and it works whether or not the reader consents to it. Put a grey ghost button beside a filled primary button and you have made the decision for them while appearing to offer a choice. Equal weight on genuinely equal options is the only version that survives an audit.",
      how: [
        "Give equal options equal treatment: same size, same contrast, same position weight.",
        "Reserve visual primacy for actions that are actually better for the person, and be able to say why.",
        "Rewrite any double negative in a consent or preference control.",
        "Screenshot consent screens in greyscale; if one option disappears, the hierarchy is doing the arguing."
      ],
      example: "A cookie banner with a solid, high-contrast Accept all button and a text-only Manage preferences link. Both routes exist; only one is designed to be found.",
      numbers: "EU Digital Services Act, Article 25(3)(a). Mathur et al. (2019) list Misdirection as one of seven categories, containing four of their fifteen types.",
      pitfall: "Designers defend the imbalance as visual hierarchy, which is exactly what it is, and exactly why it counts as a deceptive pattern when the options are equivalent.",
      source: "Harry Brignull, darkpatterns.org (2010), now split into Visual Interference and Trick Wording; Mathur et al. (2019); EU DSA Article 25",
      verify: { status: "adjusted", note: "The master list uses Brignull's original single term. The current deceptive.design taxonomy no longer lists Misdirection; it has been split into Visual Interference and Trick Wording, both checked at deceptive.design/types. Mathur's category structure checked at webtransparency.cs.princeton.edu/dark-patterns. DSA text checked at eu-digital-services-act.com." },
      belongs: { verdict: "core", why: "This is the ethical edge of visual hierarchy, the most basic tool in the discipline." },
      related: [987, 1000, 997]
    },
    {
      n: 992,
      title: "Dark pattern: nagging",
      aka: ["Persistent interruption", "Re-asking"],
      oneLine: "Repeating a request the person has already declined until declining costs more than agreeing.",
      demo: {
        caption: "Seven visits to one site. A refusal is forgotten and re-asked every time; an acceptance is stored and never questioned.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 150\"><text class=\"t\" x=\"0\" y=\"14\">the same prompt, seven visits</text><text class=\"t\" x=\"0\" y=\"40\">after refusing</text><circle class=\"f-accent\" cx=\"8\" cy=\"52\" r=\"4\"/><circle class=\"f-accent\" cx=\"58\" cy=\"52\" r=\"4\"/><circle class=\"f-accent\" cx=\"108\" cy=\"52\" r=\"4\"/><circle class=\"f-accent\" cx=\"158\" cy=\"52\" r=\"4\"/><circle class=\"f-accent\" cx=\"208\" cy=\"52\" r=\"4\"/><circle class=\"f-accent\" cx=\"258\" cy=\"52\" r=\"4\"/><circle class=\"f-accent\" cx=\"308\" cy=\"52\" r=\"4\"/><path class=\"s-mute\" d=\"M8 66 H308\"/><path class=\"s-mute\" d=\"M8 62 V70 M58 62 V70 M108 62 V70 M158 62 V70 M208 62 V70 M258 62 V70 M308 62 V70\"/><text class=\"t\" x=\"8\" y=\"84\">asked again on every visit</text><text class=\"t\" x=\"0\" y=\"112\">after accepting</text><circle class=\"f-accent\" cx=\"8\" cy=\"124\" r=\"4\"/><path class=\"s-mute\" d=\"M8 138 H308\"/><path class=\"s-mute\" d=\"M8 134 V142 M58 134 V142 M108 134 V142 M158 134 V142 M208 134 V142 M258 134 V142 M308 134 V142\"/><text class=\"t\" x=\"58\" y=\"128\">stored for a year, never asked again</text></svg></div>"
      },
      what: "Gray and colleagues define nagging as a minor redirection of expected functionality that may persist over one or more interactions: pop-ups that obscure the interface, audio notices, or anything else that repeatedly pulls focus away from the task. It is one of their five top-level strategies. The EU Digital Services Act names the same behaviour at Article 25(3)(b), listing repeatedly requesting that a user make a choice where that choice has already been made, especially through pop-ups that interfere with the experience.",
      why: "Repetition converts by exhausting the person rather than convincing them, which produces agreements that predict nothing about future behaviour. It also trains people to dismiss your interface without reading it, so the one message that genuinely matters gets swatted away with the rest.",
      how: [
        "Store a refusal with the same care you store an acceptance, and honour it for the same length of time.",
        "Set a hard cap on how many times any prompt may appear per user, and write it into the component.",
        "Give every recurring prompt a permanent off switch that is visible on the prompt itself.",
        "Audit the first five minutes of a new account and count every interruption."
      ],
      example: "A news site re-asks for cookie consent on every visit because it stores no record of a refusal, while remembering an acceptance for a year. The asymmetry is the pattern.",
      numbers: "EU Digital Services Act, Article 25(3)(b).",
      pitfall: "Each prompt is owned by a different team and each one is reasonable on its own; nobody owns the total count a real person sees.",
      source: "Gray, Kou, Battles, Hoggatt and Toombs, The Dark (Patterns) Side of UX Design, CHI 2018; EU DSA Article 25",
      verify: { status: "verified", note: "The five strategies (nagging, obstruction, sneaking, interface interference, forced action), the nagging definition and the Instagram, Google location and Uber examples were all read in the CHI 2018 PDF at dl.acm.org. Correction to an earlier draft: it said the definition could not be read at source and gave the standard quotation, which drops a word. The paper says may persist, and the entry now follows it. DSA Article 25(3)(b) wording checked at eu-digital-services-act.com." },
      belongs: { verdict: "core", why: "Prompt frequency and refusal persistence are product design decisions, and both are now named in EU law." },
      related: [993, 997, 1001]
    },
    {
      n: 993,
      title: "Dark pattern: obstruction",
      aka: ["Sludge", "Friction as a weapon"],
      oneLine: "Making a task harder than it needs to be so that fewer people finish it.",
      demo: {
        caption: "Three steps in both panels. What separates good design from obstruction is who each step is protecting.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Protects the person</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-note\">identity check</span></div><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-note\">set a deposit limit</span></div><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-note\">24-hour wait before first bet</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Protects the revenue</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-note\">retention offer</span></div><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-note\">reason for leaving survey</span></div><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-note\">24-hour wait before cancelling</span></div></div></div></div></div>"
      },
      what: "Gray and colleagues define obstruction as impeding a task flow, making an interaction more difficult than it inherently needs to be, with the intent to dissuade an action. It is the parent category that holds roach motel, price comparison prevention and intermediate currency. Cass Sunstein's term for the same thing outside interfaces is sludge, which the UK Competition and Markets Authority adopted in its 2022 evidence review of online choice architecture: excessive or unjustified friction that makes it difficult for consumers to get what they want.",
      why: "Friction is not automatically bad. The CMA is explicit that some friction is justified, and gives gambling rules as its example: a waiting period before a new customer can play, or a cap on what can be deposited into a temporary account. The test is who the friction serves. Friction that protects the person is good design, and friction that protects the revenue line from the person's decision is obstruction.",
      how: [
        "For each step in a flow, write down who benefits from it. If the answer is the business and not the user, delete it or justify it in writing.",
        "Measure the step count of the leaving path and the joining path and keep them within one of each other.",
        "Do not require a channel change (phone, post, email) for something that was started in the interface.",
        "Run a sludge audit on the paths people rarely take: refunds, data export, account deletion."
      ],
      example: "Gray and colleagues' worked example of obstruction is Apple iOS 6, where the control for limiting ad tracking sat in an unrelated part of the settings menu and was worded confusingly enough to disorient the person looking for it. They note that later versions moved it somewhere sensible and rewrote the label, which is what the fix looks like.",
      numbers: "CMA definition of sludge: excessive or unjustified friction that makes it difficult for consumers to get what they want or to do as they wish.",
      pitfall: "Obstruction is usually built by inaction rather than intent: the cancellation flow is simply the one nobody has redesigned since 2019, and its poor performance is read as a win.",
      source: "Gray et al., CHI 2018; Cass Sunstein on sludge; CMA, Evidence review of Online Choice Architecture (2022)",
      verify: { status: "verified", note: "Gray et al.'s definition, the three subtypes (roach motel, price comparison prevention, intermediate currency) and the iOS 6 example were read in the CHI 2018 paper text. The sludge definition is quoted verbatim from the CMA evidence review on gov.uk, as is the gambling example of justified friction. Correction to an earlier draft: it cited a Konsumentverket telephone-cancellation screenshot as figure 15 of the CMA review, and a later pass dropped that as unfindable. It is in the review. Figure 15 is captioned as a hard to cancel or roach motel example from the Konsumentverket report and shows a checkout page stating that cancellations must be made by phone. The iOS 6 example stays because it comes from the paper this entry is built on." },
      belongs: { verdict: "core", why: "Step count, channel changes and path visibility are the substance of interaction design, not a policy overlay." },
      related: [986, 992, 9000]
    },
    {
      n: 994,
      title: "Dark pattern: sneaking",
      aka: ["Concealment", "Delayed disclosure"],
      oneLine: "Hiding, disguising or delaying information the person needs before they can decide properly.",
      demo: {
        caption: "The same sentence in both. Above the button it can change the decision; below it, it can only cause regret.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Fact after the button</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">order total</span><span class=\"db-type\" style=\"font-size:16px\">&pound;24.00</span></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Pay now</span></div></div></div><span class=\"db-note\">next screen: includes &pound;6 a month membership</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Fact before the button</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">order total</span><span class=\"db-type\" style=\"font-size:16px\">&pound;24.00</span></div><span class=\"db-note\">includes &pound;6 a month membership</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Pay now</span></div></div></div><span class=\"db-note\">next screen: nothing new</span></div></div></div></div>"
      },
      what: "Gray and colleagues define sneaking as an attempt to hide, disguise or delay the divulging of information relevant to the user, usually to force an uninformed decision. Brignull's version puts it as being drawn into a transaction on false pretences because pertinent information is hidden or delayed. This is a parent category rather than a single trick: Gray and colleagues nest Brignull's forced continuity, hidden costs, sneak into basket and bait and switch underneath it. Mathur and colleagues use Sneaking as one of their seven categories, containing three of the same behaviours under the names sneak into basket, hidden costs and hidden subscription.",
      why: "Disclosure timing decides whether a decision is real. Information that arrives after the commitment has been made cannot change the choice, only the regret. Putting the material facts in front of the decision costs a small number of conversions and produces customers who do not need to be argued with later.",
      how: [
        "List every fact a reasonable person would want before this decision, then check each one appears before the button, not after it.",
        "Never add an item to a basket that the person did not choose.",
        "Treat a terms link as evidence you have not disclosed something properly, and pull the material fact into the page.",
        "Order the page by decision relevance, not by legal caution."
      ],
      example: "Gray and colleagues' worked example of sneaking comes from Salesforce.com, where a person had to consent to a privacy statement before they could unsubscribe from an email newsletter. The statement allowed Salesforce to sell their information to other countries, and the paper notes that anyone who did not read the fine print would agree to it without knowing.",
      numbers: "",
      pitfall: "The master list treats sneaking as a sibling of forced continuity and hidden costs. In the source taxonomy it is their parent, so an audit that ticks all three is really testing one thing three times.",
      source: "Gray, Kou, Battles, Hoggatt and Toombs, CHI 2018; Harry Brignull, deceptive.design",
      verify: { status: "verified", note: "Definition, the Salesforce example and the subtype mapping were read in the CHI 2018 PDF at dl.acm.org: the Sneaking section names Brignull's forced continuity, hidden costs, sneak into basket and bait and switch, and Figure 1 lists the same four. Correction to an earlier draft: that draft dropped bait and switch on the mistaken ground that the paper does not place it here. It does, so it is restored here and in entry 985. Mathur's category contents read at webtransparency.cs.princeton.edu/dark-patterns." },
      belongs: { verdict: "core", why: "Disclosure order is layout, and layout is the designer's decision." },
      related: [985, 988, 990]
    },
    {
      n: 995,
      title: "Dark pattern: false urgency and scarcity",
      aka: ["Fake urgency", "Fake scarcity", "Countdown timers"],
      oneLine: "Inventing a deadline or a shortage to stop someone thinking before they buy.",
      demo: {
        caption: "The same page on two mornings. The left-hand clock has not moved, so nothing happens when it reaches zero.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Invented deadline</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Tuesday, 09:00</span><span class=\"db-type db-type--mono\" style=\"font-size:15px\">offer ends in 04:59</span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Wednesday, 09:00</span><span class=\"db-type db-type--mono\" style=\"font-size:15px\">offer ends in 04:59</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Real deadline</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Tuesday, 09:00</span><span class=\"db-type db-type--mono\" style=\"font-size:15px\">offer ends in 4d 15h</span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Wednesday, 09:00</span><span class=\"db-type db-type--mono\" style=\"font-size:15px\">offer ends in 3d 15h</span></div></div></div></div></div></div>"
      },
      what: "Two related types in Brignull's taxonomy. Fake urgency pressures a decision with a time limit that is not real. Fake scarcity pressures it with a supply limit that is not real. Mathur and colleagues treat Urgency and Scarcity as two of their seven categories, holding four types between them: countdown timers, limited-time messages, low-stock messages and high-demand messages. UK law bans the urgency version outright. Schedule 20 paragraph 7 of the DMCC Act 2024 prohibits falsely stating that a product will only be available for a limited time or on particular terms for a limited time.",
      why: "A deadline suppresses comparison, which is the whole point. Where the deadline is genuine, saying so is useful information and people are grateful for it. Where it is not, the person discovers the same offer the next day and permanently discounts every claim you make afterwards.",
      how: [
        "A countdown may only exist if something actually changes when it reaches zero.",
        "Stock counts must be read from inventory, never generated.",
        "Store the promotion end date in one place and let both the copy and the timer read from it.",
        "Reload the page in a clean browser session and check the timer has not reset."
      ],
      example: "Mathur and colleagues counted 157 deceptive countdown timers on 140 sites, where the timer ran out and the advertised offer stayed valid anyway. They also found 16 sites whose stock counters ran down on a fixed schedule rather than from inventory, and 22 third-party vendors selling these behaviours as ready-made components.",
      numbers: "UK: DMCC Act 2024, Schedule 20, paragraph 7. Mathur et al. (2019) found 157 deceptive countdown timers on 140 sites and 22 third-party entities offering dark patterns as a turnkey solution, across roughly 11,000 shopping sites.",
      pitfall: "A marketing plugin adds the timer and the design team never sees the code, so the site ships an unlawful claim that no designer chose to make.",
      source: "Harry Brignull, deceptive.design; Mathur et al. (2019); UK DMCC Act 2024, Schedule 20 paragraph 7",
      verify: { status: "verified", note: "Type definitions from deceptive.design/types; category structure and the 22 third-party vendors figure from the Princeton project page and the paper abstract. The 157 timers on 140 sites and the 16 sites with scheduled stock countdowns were read in the paper PDF on arXiv. Correction to an earlier draft: it said the crawl found timers that reset on reload and low-stock messages generated at random. The paper's test was that the offer stayed valid once the timer ran out, and it found random stock generation on one site only. Paragraph 7 wording read from Schedule 20 on legislation.gov.uk." },
      belongs: { verdict: "core", why: "Timers, badges and stock counters are components a designer specifies, and their honesty is a spec decision." },
      related: [990, 991, 985]
    },
    {
      n: 996,
      title: "Dark pattern: privacy zuckering",
      aka: ["Privacy trickery", "Oversharing by default"],
      oneLine: "Designing privacy controls so people share far more about themselves than they meant to.",
      demo: {
        caption: "Same four switches, same wording, same screen. All that differs is the state they were in before anyone looked.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Defaults as shipped</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">profile visible to everyone</span><span class=\"db-sq db-sq--accent\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">activity shared with partners</span><span class=\"db-sq db-sq--accent\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">location shown on posts</span><span class=\"db-sq db-sq--accent\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">contacts used to suggest friends</span><span class=\"db-sq db-sq--accent\"></span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Defaults that collect nothing</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">profile visible to everyone</span><span class=\"db-sq db-dot--open\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">activity shared with partners</span><span class=\"db-sq db-dot--open\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">location shown on posts</span><span class=\"db-sq db-dot--open\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">contacts used to suggest friends</span><span class=\"db-sq db-dot--open\"></span></div></div></div></div></div></div>"
      },
      what: "Brignull coined the phrase in 2010, naming it after Mark Zuckerberg, for interfaces that trick people into publicly sharing more than they intended. Gray and colleagues classify it under forced action, where access to a feature is conditional on giving up data. The name has since been retired from the deceptive.design taxonomy, and the behaviours it covered now sit under Trick Wording, Visual Interference and Forced Action. The practice itself is regulated: GDPR Article 25(2) requires that by default only personal data necessary for each specific purpose is processed, and that it is not made accessible to an indefinite number of people without the individual acting.",
      why: "Sharing settings are read once, at sign-up, by someone who wants to get to the product. Whatever is set at that moment is what most people live with for years, which makes the default state of a privacy control more consequential than the control itself.",
      how: [
        "Default every sharing and visibility control to the most private setting that still lets the product work.",
        "Show the current audience for anything a person posts, in plain words, at the point of posting.",
        "Do not make an unrelated feature conditional on a data permission.",
        "Re-test the settings screen after every release; new features quietly add new switches, usually on."
      ],
      example: "The FTC alleged that smart-TV maker Vizio enabled a default setting called Smart Interactivity, described to viewers as offering programme offers and suggestions, which in fact let the company collect and share their television viewing activity with third parties. Many consumers got no notice of it at all. Some later got one that timed out after a minute and carried no link to the settings menu or the privacy policy. The case is set out in the FTC's 2022 dark patterns report.",
      numbers: "GDPR, Article 25(2).",
      pitfall: "The privacy screen is designed once by a team that understands it and then extended for three years by teams that do not, so the mental model in the interface stops matching what the system actually does.",
      source: "Harry Brignull, darkpatterns.org (2010), term now retired; Gray et al., CHI 2018; GDPR Article 25(2)",
      verify: { status: "adjusted", note: "Kept the master list title but flagged that the name is Brignull's 2010 coinage and no longer appears in the 18 types listed at deceptive.design/types; Gray et al. discuss Brignull's Privacy Zuckering in their Forced Action section. I could not establish the date the term was dropped. The Vizio detail, including the Smart Interactivity setting name and the notice that timed out after one minute, was read in the FTC staff report PDF at ftc.gov rather than in a press release. GDPR Article 25(2) checked at gdpr-info.eu." },
      belongs: { verdict: "core", why: "Default visibility states and permission prompts are interface decisions, whatever the term for them is this year." },
      related: [997, 998, 999, 1000]
    },
    {
      n: 997,
      title: "Honest consent design",
      aka: ["Valid consent", "Freely given consent"],
      oneLine: "A consent request that a person could refuse as easily as accept, in words they understand.",
      demo: {
        caption: "One switch covering three purposes cannot be refused in part. On the right, each purpose can be turned down separately.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One control for everything</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">analytics, advertising, personalisation</span><span class=\"db-sq db-sq--accent\"></span></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Accept all</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Reject all</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One control per purpose</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">analytics</span><span class=\"db-sq db-sq--accent\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">advertising</span><span class=\"db-sq db-dot--open\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">personalisation</span><span class=\"db-sq db-dot--open\"></span></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Accept all</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Reject all</span></div></div></div></div></div></div>"
      },
      what: "GDPR Article 7 sets out what a consent request has to look like. It must be clearly distinguishable from other matters, in an intelligible and easily accessible form, using clear and plain language. The person must be told before they consent that they can withdraw at any time, and withdrawing must be as easy as giving. Consent also fails the freely given test where a service is made conditional on data processing that is not necessary to deliver it. Article 25 of the Digital Services Act adds that platforms must not organise their interfaces so as to deceive or materially distort a user's ability to decide freely. Read Article 25(2) before quoting it at a client: the DSA prohibition steps back where the Unfair Commercial Practices Directive or the GDPR already covers the conduct, so for most consent screens the operative law is the GDPR.",
      why: "Almost every property of a valid consent request is a design property: where the request sits, what it is written in, how the two options are weighted, how many clicks the refusal takes. When a consent screen fails an audit, the thing that failed is usually the layout. Getting it right also gives you a permission you can rely on.",
      how: [
        "Give accept and reject the same prominence and the same click count at the top level.",
        "Separate each purpose into its own control; do not bundle analytics with advertising.",
        "Write the request at the reading age of your actual audience and drop the word cookies where a plainer noun exists.",
        "Put the withdrawal route somewhere a person can find it without searching, and test it works."
      ],
      example: "A consent banner with Accept all and Reject all as two identical buttons side by side, and Manage preferences as a third, is the layout that satisfies the equal-ease test. The common variant with only Accept all and a text link does not.",
      numbers: "GDPR, Article 7 (conditions for consent), including Article 7(3) on withdrawal. EU Digital Services Act, Article 25.",
      pitfall: "The banner is bought as a third-party product, configured by whoever installed it, and never reviewed by the person responsible for the design of the rest of the site.",
      source: "Regulation (EU) 2016/679 (GDPR), Article 7; Regulation (EU) 2022/2065 (Digital Services Act), Article 25",
      verify: { status: "verified", note: "Article 7 text read at gdpr-info.eu, including the clearly distinguishable, plain language, and as easy to withdraw as to give provisions and the conditionality test. Article 25(1) and the Article 25(2) carve-out for conduct already covered by Directive 2005/29/EC or Regulation (EU) 2016/679 were read at eu-digital-services-act.com. I have not cited specific supervisory authority decisions, as I did not check any this session." },
      belongs: { verdict: "core", why: "Every element of a valid consent request is a typographic, hierarchical or copy decision." },
      related: [991, 996, 1000, 9000]
    },
    {
      n: 998,
      title: "Data minimisation",
      aka: ["Collect only what you need", "Ask less"],
      oneLine: "Ask for the fewest pieces of personal data that will actually do the job, and no more.",
      demo: {
        caption: "Both enquiry forms end in the same phone call. The extra six answers on the left change nothing about it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Nine fields</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">Full name</span><span class=\"db-input\">Email</span><span class=\"db-input\">Telephone</span><span class=\"db-input\">Date of birth</span><span class=\"db-input\">Home address</span><span class=\"db-input\">Postcode</span><span class=\"db-input\">Occupation</span><span class=\"db-input\">How did you hear about us?</span><span class=\"db-input\">Marketing preferences</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three fields, same call back</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">Full name</span><span class=\"db-input\">Telephone</span><span class=\"db-input\">What do you need?</span></div></div></div></div></div>"
      },
      what: "GDPR Article 5(1)(c) requires that personal data be adequate, relevant and limited to what is necessary in relation to the purposes for which it is processed. Article 25(2) extends this to defaults: by default, only the personal data necessary for each specific purpose should be processed, covering the amount collected, the extent of processing, the storage period and accessibility. For a designer this translates into a simple question asked of every field on every form: what decision or action does this answer change?",
      why: "Each extra field lowers completion and raises the cost of a breach at the same time, so the trade is bad in both directions. Shorter forms convert better and leave less to protect. It also removes the argument about how long to keep something you never collected.",
      how: [
        "Go through each form field and name the specific downstream use. Delete any field where the answer is that it might be useful later.",
        "Ask for optional information after the transaction, not before it.",
        "Prefer a derived value to a raw one: an age band rather than a date of birth, a postcode rather than a full address.",
        "Set a deletion date at the same time you add a field, not in a later project."
      ],
      example: "A dental practice enquiry form that asks for date of birth and full home address before anyone has booked anything. Neither answer changes what happens next, which is a member of staff ringing back.",
      numbers: "GDPR, Article 5(1)(c) and Article 25(2).",
      pitfall: "Fields get added because a stakeholder wants a report, and reporting appetite is unlimited while form completion is not.",
      source: "Regulation (EU) 2016/679 (GDPR), Articles 5 and 25",
      verify: { status: "verified", note: "Article 5(1)(c) wording and Article 25(2) default provisions read at gdpr-info.eu. The design translation is my own framing, not a quotation from the regulation." },
      belongs: { verdict: "core", why: "Deciding which fields exist is form design, which is one of the oldest jobs in the discipline; the regulation just gives it a deadline." },
      related: [996, 999, 1000]
    },
    {
      n: 999,
      title: "Privacy by design",
      aka: ["Data protection by design and by default", "PbD"],
      oneLine: "Build privacy into the system from the start rather than bolting a settings screen on later.",
      demo: {
        caption: "Both panels return the same list of nearby clinics. Only the left one needs a permission that stays on afterwards.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Privacy traded for the feature</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Find a clinic near you</span><span class=\"db-note\">Allow location access at all times to use search</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Allow</span><span class=\"db-btn db-btn--sm db-btn--quiet\">Not now</span></div><span class=\"db-note\">search is unavailable until you allow it</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Same function, no standing permission</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Find a clinic near you</span><span class=\"db-label\">Postcode or town</span><span class=\"db-input\">LS1 4AP</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Search</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Use my location once</span></div></div></div></div></div></div>"
      },
      what: "Ann Cavoukian set out seven foundational principles in 2009, drawing on a 1995 joint report by the Information and Privacy Commissioner of Ontario, the Dutch data protection authority and the Netherlands Organisation for Applied Scientific Research. The principles are: proactive not reactive; privacy as the default setting; privacy embedded into design; full functionality, positive-sum rather than zero-sum; end-to-end security; visibility and transparency; and respect for user privacy. The International Assembly of Privacy Commissioners and Data Protection Authorities adopted the framework unanimously at its 2010 conference, and GDPR Article 25 makes a version of it a legal duty.",
      why: "The framework matters to a designer through two of its seven parts. Privacy as the default decides what a person gets without acting, which is what most people get. Visibility and transparency decides whether they can find out what is happening to their data. The other five are engineering and governance work a designer influences rather than owns.",
      how: [
        "Treat the default state of every data control as a design deliverable with a named owner.",
        "Make the data a feature collects visible at the point the feature is used, not only in a policy page.",
        "Raise privacy questions during concept work, when the answer is cheap, rather than at review.",
        "Keep a written record of why each processing decision was made; Article 25(3) allows certification schemes as evidence."
      ],
      example: "GDPR Article 25(2) requires that personal data is not made accessible, without the individual's intervention, to an indefinite number of people. A social product whose new posts default to public fails that test on the default alone.",
      numbers: "Seven foundational principles (Cavoukian, 2009). GDPR, Article 25.",
      pitfall: "The framework is broad enough to agree with and vague enough to skip. Critics have argued exactly that: it gives engineers little implementable guidance, is weak on data minimisation and has no enforcement mechanism of its own.",
      source: "Ann Cavoukian, Privacy by Design: The 7 Foundational Principles (2009); GDPR Article 25",
      verify: { status: "verified", note: "The GDPR Article 25 duties, including the 25(2) default rule and the 25(3) certification provision, were read at gdpr-info.eu. The rest rests on one secondary source, the Wikipedia article on Privacy by design: the 1995 joint report Privacy-Enhancing Technologies: The Path to Anonymity, the wording of the seven principles, the unanimous 2010 adoption, and the criticisms (vagueness, weak enforcement, thin on minimisation, little implementable engineering guidance). I have not read Cavoukian's 2009 paper at source." },
      belongs: { verdict: "adjacent", why: "A governance framework written for organisations by a privacy regulator, not for designers. Its design relevance is narrow but real: two of the seven principles, defaults and transparency, are decided entirely in the interface." },
      related: [996, 998, 1000]
    },
    {
      n: 1000,
      title: "Honest defaults",
      aka: ["Default effect", "Privacy by default"],
      oneLine: "Set the pre-selected option to what serves the person, because most people never change it.",
      demo: {
        caption: "Effective consent to organ donation. The four opt-in countries do not overlap the opt-out ones at any point.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 152\"><text class=\"t\" x=\"0\" y=\"10\">effective consent to organ donation, per cent</text><text class=\"t\" x=\"0\" y=\"30\">opt-in default</text><text class=\"t\" x=\"0\" y=\"43\">Denmark</text><text class=\"t\" x=\"110\" y=\"43\" text-anchor=\"end\">4.25</text><rect class=\"f-mute\" x=\"118\" y=\"36\" width=\"6.8\" height=\"8\"/><text class=\"t\" x=\"0\" y=\"59\">Germany</text><text class=\"t\" x=\"110\" y=\"59\" text-anchor=\"end\">12</text><rect class=\"f-mute\" x=\"118\" y=\"52\" width=\"19.2\" height=\"8\"/><text class=\"t\" x=\"0\" y=\"75\">UK</text><text class=\"t\" x=\"110\" y=\"75\" text-anchor=\"end\">17.17</text><rect class=\"f-mute\" x=\"118\" y=\"68\" width=\"27.5\" height=\"8\"/><text class=\"t\" x=\"0\" y=\"91\">Netherlands</text><text class=\"t\" x=\"110\" y=\"91\" text-anchor=\"end\">27.5</text><rect class=\"f-mute\" x=\"118\" y=\"84\" width=\"44\" height=\"8\"/><text class=\"t\" x=\"0\" y=\"111\">opt-out default</text><text class=\"t\" x=\"0\" y=\"124\">Sweden</text><text class=\"t\" x=\"110\" y=\"124\" text-anchor=\"end\">85.9</text><rect class=\"f-accent\" x=\"118\" y=\"117\" width=\"137.4\" height=\"8\"/><text class=\"t\" x=\"0\" y=\"140\">six more</text><text class=\"t\" x=\"110\" y=\"140\" text-anchor=\"end\">98-99.98</text><rect class=\"f-accent\" x=\"118\" y=\"133\" width=\"156.8\" height=\"8\"/></svg></div>"
      },
      what: "Whatever a system does when nobody acts is what happens to most people. Johnson and Goldstein demonstrated the size of this in 2003 by comparing organ donation consent across European countries. In their words, the two distributions have no overlap, and nearly 60 percentage points separate the two groups. In their own online experiment of 161 people, 42 per cent agreed to donate under an opt-in default against 82 per cent under opt-out, roughly twice as many. Their model of actual donation rates estimated a 16.3 per cent increase, from 14.1 to 16.4 donors per million. That last step is disputed. Later work questions whether moving a country to opt-out raises transplants at all, pointing to hospital infrastructure, family veto and a possible fall in living donation. The gap in recorded consent rates is solid; what follows from it is argued over. GDPR Article 25(2) turns the principle into an obligation for personal data: the default must process only what is necessary.",
      why: "A default decides for everyone who does not intervene, and that is most people. It makes the pre-ticked box the most powerful element on a form and the one most worth arguing about. Setting it honestly costs some short-term numbers and removes the risk that your growth was borrowed from people who never chose it.",
      how: [
        "For every pre-selected control, write down who benefits. If it is the business, change it or defend it in writing.",
        "Default marketing consent, data sharing and visibility to off.",
        "Where there is no clearly better answer, present an active choice with no default rather than guessing.",
        "Report default-driven conversions separately, so nobody mistakes inertia for demand."
      ],
      example: "Johnson and Goldstein's chart of European effective consent rates runs from 4.25 per cent in Denmark, 12 in Germany, 17.17 in the United Kingdom and 27.5 in the Netherlands, all opt-in, up to 85.9 per cent in Sweden and 98 to 99.98 per cent in Belgium, Poland, Portugal, France, Hungary and Austria, all opt-out. The two groups do not overlap.",
      numbers: "Johnson and Goldstein, Science 302, 1338-1339 (2003): nearly 60 percentage points between the opt-in and presumed-consent groups; 42 per cent consenting under an opt-in default against 82 per cent under opt-out in their 161-person online experiment; an estimated 16.3 per cent rise in actual donation, 14.1 to 16.4 per million. GDPR, Article 25(2).",
      pitfall: "Defaults get set by whoever builds the component first, then survive every redesign because nobody thinks of an unticked box as a design element.",
      source: "Eric J. Johnson and Daniel G. Goldstein, Do Defaults Save Lives?, Science (2003); Richard Thaler and Cass Sunstein, Nudge (2008); GDPR Article 25(2)",
      verify: { status: "disputed", note: "Every figure here was read in the full text of the Science paper itself, including the per-country chart, the 42, 82 and 79 per cent experiment results, the 161 respondents, the sentence about nearly 60 percentage points and no overlap, and the 16.3 per cent (P < 0.02) rise from 14.1 to 16.4 donors per million. Correction to an earlier draft: that draft said presumed-consent countries sat above 98 per cent. Sweden is 85.9 per cent, so the claim was wrong and the range has been given instead. Marked disputed for the donation-rate step rather than for the consent-rate figures, which are descriptive and uncontested: systematic reviews and later panel studies question whether presumed consent by itself raises transplant numbers, and a 2025 PNAS Nexus paper reports a crowding-out effect on living donation. The wider nudge literature is contested too: Maier et al., No evidence for nudging after adjusting for publication bias (PNAS, 2022), found the pooled effect from Mertens et al. (PNAS, 2022) no longer stood after correcting for publication bias. Defaults are among the better-supported effects in that literature rather than a typical one." },
      belongs: { verdict: "core", why: "You cannot ship a form without setting defaults. Every designer makes this decision, by choosing or by neglecting to choose." },
      related: [997, 998, 991]
    },
    {
      n: 1001,
      title: "Attention ethics",
      aka: ["Humane technology", "Time well spent"],
      oneLine: "Treating a person's attention as theirs, not as inventory to be sold on.",
      demo: {
        caption: "Same three items in both. The right-hand feed reaches an end, and it waits to be asked for the next one.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No end, no asking</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div><span class=\"db-note\">loading more</span><span class=\"db-note\">next item plays in 3</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">An end, and a question</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div><span class=\"db-note\">you have seen everything from today</span><span class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Play next</span></span></div></div></div></div>"
      },
      what: "The position was set out by Tristan Harris, a former Google design ethicist, in a 2016 essay titled How Technology Hijacks People's Minds, from a Magician and Google's Design Ethicist. Its argument is that products which compete for attention will converge on the same techniques regardless of intent, because the metric rewards them: controlling the menu of options, intermittent variable rewards, bottomless feeds and autoplay. Harris founded Time Well Spent, which became the Center for Humane Technology. Brignull's taxonomy has since added Addictive Design as a named type: designs and system behaviours that exploit known psychological vulnerabilities to drive compulsive behaviour, so that the person spends excessive money, time or effort against their own interests.",
      why: "The practical value is a second question at the design review. Alongside does this work, you ask what this optimises for, and whether that number would still look good if the person could see it. It also gives you a language for arguing against a feature that will hit its target and damage the relationship.",
      how: [
        "Name the metric a feature is meant to move, then write down the behaviour that would maximise it. If that behaviour would embarrass you, change the metric.",
        "Default notifications to off, and batch the rest.",
        "Give feeds a natural end, or a visible marker for where the person left off.",
        "Do not autoplay the next item without an explicit setting."
      ],
      example: "Harris's essay names the specific mechanisms he objects to, including intermittent variable rewards and what he calls bottomless bowls, infinite feeds and autoplay. It is readable in full and worth reading before arguing about it.",
      numbers: "",
      pitfall: "The essay contains claims that are not sourced within it, including a figure for how often people check their phones. Repeating those numbers as fact is exactly the failure the position is meant to guard against.",
      source: "Tristan Harris, How Technology Hijacks People's Minds (2016); Center for Humane Technology; Addictive Design, deceptive.design",
      verify: { status: "disputed", note: "The essay first appeared on Medium in May 2016 and was reprinted by Observer (observer.com, the New York title, not the British Sunday paper) in June 2016; an earlier draft credited the Observer as the original venue, which is wrong. Harris's role and the Time Well Spent to Center for Humane Technology lineage were checked against the Institute for New Economic Thinking's profile of him. The Addictive Design wording is quoted from deceptive.design/types/addictive-design. The essay is real; several of its empirical claims are uncited within it, and I did not verify the 150 phone checks per day figure. This is an advocacy position with a contested evidence base rather than a tested principle." },
      belongs: { verdict: "adjacent", why: "A movement and a critique rather than a design rule, but it names real design decisions: notification defaults, feed termination and autoplay are all specified by designers." },
      related: [992, 1002, 1000]
    },
    {
      n: 1002,
      title: "Cost of addiction mechanics",
      aka: ["Variable reward", "Compulsion loops", "Streaks"],
      oneLine: "Mechanics borrowed from gambling produce repeat use, and the claimed harm is weaker than usually stated.",
      demo: {
        caption: "Twenty actions and four payoffs in each row. Only the spacing changed, and that spacing is the whole mechanic.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Fixed schedule</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--accent\"></span></div><span class=\"db-note\">a payoff on every fifth action</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Variable schedule</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></div><span class=\"db-note\">the same four payoffs, no pattern</span></div></div></div></div>"
      },
      what: "The mechanics are real and identifiable: unpredictable payoffs on a variable schedule, streaks that punish a missed day, pull-to-refresh, badge counts and infinite scroll. They come from operant conditioning research and from slot machine design, and they are deployed deliberately. The harm claim is a separate question and a much weaker one. Orben and Przybylski applied specification curve analysis to three datasets covering 355,358 people and found the association between digital technology use and adolescent wellbeing was negative but small, explaining at most 0.4 per cent of the variation.",
      why: "You should know these mechanics because you will be asked to build them, and because a client will describe one to you without knowing its name. You should also know that the population-level evidence for screen time harm is thin, so an argument built on it will not survive contact with someone who has read the research.",
      how: [
        "Ask whether a reward schedule is unpredictable by design or by accident, and make it predictable if there is no reason for it not to be.",
        "Do not build a streak that punishes an absence unless the product's purpose is a daily habit the person asked for.",
        "Give the person a session summary or an end point rather than a feed that never terminates.",
        "Argue against these mechanics on grounds you can defend: consent, reversibility and the person's stated goal, not on claims of addiction."
      ],
      example: "The Oxford Internet Institute's summary of the Orben and Przybylski study reports that eating potatoes has a similar association with adolescent wellbeing to screen use, and wearing corrective lenses a worse one, while bullying is 4.3 times and cannabis 2.7 times more negatively associated.",
      numbers: "Orben and Przybylski, Nature Human Behaviour 3, 173-182 (2019): n = 355,358; screen use explains at most 0.4 per cent of the variation in adolescent wellbeing.",
      pitfall: "Designers reach for the word addiction because it wins arguments, then lose the argument permanently when someone produces the effect sizes.",
      source: "Amy Orben and Andrew K. Przybylski, Nature Human Behaviour (2019); Addictive Design, deceptive.design",
      verify: { status: "disputed", note: "The study, sample size, 0.4 per cent figure, the potato and corrective lens comparisons and the 2.7 and 4.3 multiples were confirmed against the Oxford Internet Institute's own release, titled Technology use explains at most 0.4% of adolescent wellbeing, and corroborated by contemporaneous reports in the Independent and Open Access Government. The mechanics themselves are documented in Brignull's Addictive Design type. I did not verify any clinical classification of technology use this session and have deliberately made no claim about one." },
      belongs: { verdict: "adjacent", why: "The mechanics are design decisions a designer will be asked to make, but the framing imports a clinical claim from psychology that the population evidence does not support." },
      related: [1001, 992, 1007]
    },
    {
      n: 1003,
      title: "Inclusive representation in imagery",
      aka: ["Casting", "Representation in art direction"],
      oneLine: "Choose photography and illustration that looks like the people you are actually talking to.",
      demo: {
        none: "The subject is who appears inside the photographs, and this kit renders no images; abstract marks standing in for people would be a metaphor rather than a demonstration."
      },
      what: "Every image is a casting decision, whether or not anyone treats it as one. Stock libraries have historically over-supplied a narrow range of bodies, ages, skin tones and family shapes, so a designer who searches, picks the best-composed result and moves on will reproduce that narrowness by default. The countermeasure is to treat the image set for a project as a set: check it as a whole against the audience it addresses, rather than judging each photograph on its own merits.",
      why: "A reader deciding whether a service is for them uses the pictures before the copy. Imagery that excludes them answers the question before your words get a chance. On a local business site this is concrete: a dental practice in a mixed neighbourhood whose photography shows one demographic is telling the rest of the street something it did not mean to say.",
      how: [
        "Lay every image for the project on one board and review the set, not the individual pictures.",
        "Compare the set against a real population figure for the catchment area rather than an impression.",
        "Use the client's own photographs of their own people first; genuine photographs beat well-cast stock.",
        "Avoid the tokenised group shot where difference is arranged for the camera; ordinary people doing ordinary things reads as true."
      ],
      example: "Project #ShowUs, launched in 2019 by Getty Images with Dove and Girlgaze, is a searchable stock collection built specifically against beauty stereotypes. Getty's own page describes it as more than 14,000 photographs from 200 photographers in 41 countries, with tags written by the subjects themselves.",
      numbers: "Project #ShowUs: over 14,000 images, 200 photographers, 41 countries, per Getty Images (accessed 2026).",
      pitfall: "Representation is treated as a checklist applied at the end, which produces a set where one image is visibly doing the work and the other eleven are unchanged.",
      source: "Project #ShowUs (Getty Images, Dove and Girlgaze, 2019); no single canonical text",
      verify: { status: "verified", note: "The collection size, photographer count and country count are quoted from gettyimages.com/showus. Dove's press material also claims 70 per cent of women globally do not feel represented by everyday images; that research was commissioned by the brand running the campaign, so I have left it out of the entry. I found no single authored principle for this item, which is why the source is a project rather than a book." },
      belongs: { verdict: "core", why: "Art direction and casting are design work, and the failure mode is visible on the finished page." },
      related: [989, 1007, 1010]
    },
    {
      n: 1004,
      title: "Algorithmic transparency",
      aka: ["Explainability", "Why am I seeing this"],
      oneLine: "Tell people when a system decided something about them, and give them something they can act on.",
      demo: {
        caption: "Same refusal on both screens. Only the right one names what decided it and where a person can be asked.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Outcome only</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:15px\">Application unsuccessful</span><span class=\"db-note\">reference 4471-A</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--quiet\">Close</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Reason and route to a human</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:15px\">Application unsuccessful</span><span class=\"db-note\">decided automatically, on two things: three missed payments in the last year, and six months of credit history</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Ask a person to review this</span><span class=\"db-btn db-btn--sm db-btn--ghost\">See what was used</span></div></div></div></div></div></div>"
      },
      what: "The ICO and the Alan Turing Institute set out six types of explanation in their joint guidance Explaining decisions made with AI: rationale, the reasons for a decision in non-technical terms; responsibility, who built and runs the system and who to contact for a human review; data, what was used and how; fairness, what was done to keep decisions unbiased; safety and performance, what was done for accuracy and reliability; and impact, what effects the system may have. GDPR Article 22 governs decisions based solely on automated processing and requires safeguards, at least a right to human intervention, to express a point of view and to contest the decision. The duty to give meaningful information about the logic involved sits in Articles 13, 14 and 15, not in Article 22.",
      why: "Two of the six explanation types show up in an interface, and both are the designer's problem. Rationale decides what a rejection screen says. Responsibility decides whether there is a visible route to a human. Those two are the difference between a person who can appeal and a person who is stuck.",
      how: [
        "Give any automated decision that affects someone a visible, plain-language reason and a named route to a human.",
        "Put a why am I seeing this control on ranked or personalised content, and make the answer specific.",
        "Say which inputs mattered rather than describing the technique.",
        "Do not present a confidence score as a fact; show what the person can do about it."
      ],
      example: "The ICO guidance separates process-based explanations, covering what was done during development, from outcome-based explanations, covering this particular decision. A credit decline screen needs the second one and usually ships with neither.",
      numbers: "Six explanation types (ICO and Alan Turing Institute, 2020). GDPR, Articles 13 to 15, Article 22 and Recital 71.",
      pitfall: "There is a live legal argument about whether GDPR grants a right to an explanation at all. Wachter, Mittelstadt and Floridi argue it does not, because the explanation language sits in Recital 71, which is not binding, rather than in the Articles. The UK position has also moved: the Data (Use and Access) Act 2025 rewrote the UK GDPR's automated decision-making rules and the ICO has put this guidance under review, so check what is current before promising a client the law requires something.",
      source: "ICO and The Alan Turing Institute, Explaining decisions made with AI (Project ExplAIn, 2020); GDPR Article 22",
      verify: { status: "verified", note: "The six explanation types, with their exact names and definitions, and the process-based versus outcome-based split are quoted from the ICO's own guidance, part 1, What goes into an explanation, read at ico.org.uk. That guidance now carries an ICO banner saying it is under review following the Data (Use and Access) Act, which is why the pitfall says so. The contested right to explanation is from Wachter, Mittelstadt and Floridi, Why a Right to Explanation of Automated Decision-Making Does Not Exist in the General Data Protection Regulation, confirmed via the Oxford ORA copy and citations in Cambridge's Algorithms and Law. Correction to an earlier draft: it put the meaningful information about the logic involved duty in Article 22. The Article 22 text at gdpr-info.eu does not contain that wording; Articles 13(2)(f), 14(2)(g) and 15(1)(h) do." },
      belongs: { verdict: "adjacent", why: "The field is AI governance and law rather than design, but two of the six explanation types are delivered entirely through interface copy and navigation." },
      related: [1005, 9004, 999]
    },
    {
      n: 1005,
      title: "Error transparency",
      aka: ["Honest error messages", "Recoverable failure"],
      oneLine: "Say what went wrong, in plain words, and give the person a way out of it.",
      demo: {
        caption: "Same failure in both. The right-hand message sits on the field that failed and says what a valid answer looks like.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Code, at the top, unattached</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Error 0x80070570: submission failed</span><span class=\"db-label\">Sort code</span><span class=\"db-input\">0400 4</span><span class=\"db-label\">Account number</span><span class=\"db-input\">12345678</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Pay</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Plain, on the field, with a fix</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Sort code</span><span class=\"db-input db-input--error\">0400 4</span><span class=\"db-note\">a sort code is six digits, like 04-00-04</span><span class=\"db-label\">Account number</span><span class=\"db-input\">12345678</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Pay</span></div></div></div></div></div></div>"
      },
      what: "Nielsen's ninth usability heuristic is help users recognise, diagnose and recover from errors. His wording: error messages should be expressed in plain language, with no error codes, precisely indicate the problem, and constructively suggest a solution. The heuristics were developed with Rolf Molich in 1990 and refined by Nielsen in 1994 from an analysis of 249 usability problems, and have not changed since. The ethical extension of the same idea is disclosing your own failures rather than absorbing them silently, so that a person who lost work knows they lost it.",
      why: "An error message is the interface at its least sympathetic moment, and it is where a product either keeps its credibility or loses it. Naming the problem precisely also removes support contacts, because most people can fix their own problem when told what it is. Hiding failures buys nothing: people notice, and then they distrust the parts that are working.",
      how: [
        "Say what happened, why, and what to do next, in that order, in the person's language.",
        "Put the message next to the thing that failed, not at the top of the page.",
        "Never blame the user for a system limitation you did not tell them about.",
        "Show the state of the system honestly during outages rather than an indefinite spinner."
      ],
      example: "Nielsen's own guidance on heuristic 9 recommends traditional error visuals such as bold red text, plain wording without technical jargon, and where possible a shortcut that resolves the problem immediately.",
      numbers: "Nielsen's ten heuristics: developed with Rolf Molich in 1990, refined in 1994 from an analysis of 249 usability problems.",
      pitfall: "Error copy is written last, by an engineer, under time pressure, and reviewed by nobody. It then outlives three redesigns of the screen it sits on.",
      source: "Jakob Nielsen, 10 Usability Heuristics for User Interface Design, heuristic 9 (with Rolf Molich, 1990; current form 1994)",
      verify: { status: "verified", note: "Heuristic 9 wording, the accompanying tips, and the 1990 and 1994 dates with the 249 usability problems figure all read from the Nielsen Norman Group's article at nngroup.com/articles/ten-usability-heuristics. The extension to disclosing system failures is my own framing, not Nielsen's." },
      belongs: { verdict: "core", why: "Error states are screens, and the honesty of what they say is written by whoever designs them." },
      related: [1004, 1008, 997]
    },
    {
      n: 1006,
      title: "Digital sustainability (page weight and energy)",
      aka: ["Sustainable web design", "Carbon-aware design"],
      oneLine: "Heavy pages cost energy at every hop, and most of the weight is put there by designers.",
      demo: {
        caption: "Where a mobile page's emissions come from at the 75th percentile. Images and scripts are almost nine tenths of it.",
        html: "<div class=\"db-stage\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\" style=\"flex:0 0 84px\">images</span><span class=\"db-bar db-bar--accent\" style=\"width:61.7%\"></span><span class=\"db-note\">61.7%</span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\" style=\"flex:0 0 84px\">JavaScript</span><span class=\"db-bar db-bar--accent\" style=\"width:27.4%\"></span><span class=\"db-note\">27.4%</span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\" style=\"flex:0 0 84px\">fonts</span><span class=\"db-bar\" style=\"width:5.6%\"></span><span class=\"db-note\">5.6%</span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\" style=\"flex:0 0 84px\">CSS</span><span class=\"db-bar\" style=\"width:3.6%\"></span><span class=\"db-note\">3.6%</span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\" style=\"flex:0 0 84px\">HTML</span><span class=\"db-bar\" style=\"width:1.8%\"></span><span class=\"db-note\">1.8%</span></div></div></div>"
      },
      what: "The Sustainable Web Design Model, now at version 4, estimates the greenhouse gas emissions of a page view from data transfer, split across the data centre, the network and the user's device. The HTTP Archive Web Almanac uses it to measure the real web. In 2024 the median page emitted about 0.37 grams of carbon dioxide equivalent on desktop and 0.33 grams on mobile per view. On mobile at the 75th percentile, images accounted for around 61.7 per cent of a page's emissions and JavaScript around 27.4 per cent, with fonts, CSS and HTML making up the rest. The desktop split at the same percentile is close: images 62.7 per cent, JavaScript 26.5 per cent.",
      why: "The two heaviest categories, images and scripts, are the two a designer controls most directly. Cutting them is the same work as making the page fast, which improves every other measure you are judged on. It is also the rare ethical argument you can win with a number a client already cares about.",
      how: [
        "Set a page weight budget before design starts and treat it as a constraint like any other.",
        "Serve modern image formats at the size actually displayed, and stop shipping a 3000px hero to a phone.",
        "Question every third-party script; each one costs weight the designer never sees in the mockup.",
        "Subset fonts and cut the number of weights rather than loading a family and using three of it."
      ],
      example: "Between June 2012 and June 2022 the median mobile page grew by 594 per cent, or 1.7 MB, according to the HTTP Archive Web Almanac's 2022 page weight chapter. The Sustainable Web Design Model points at that growth as its reason for keeping data transfer as the input, calling it a proxy for the bloatware problem.",
      numbers: "Median page view under SWDM v4 in 2024: about 0.37 gCO2e desktop, 0.33 gCO2e mobile. Mobile emission share at the 75th percentile: images 61.7 per cent, JavaScript 27.4 per cent, fonts 5.6 per cent, CSS 3.6 per cent, HTML 1.8 per cent. Median mobile page weight rose 594 per cent, or 1.7 MB, between June 2012 and June 2022; desktop rose 221 per cent.",
      pitfall: "The model uses data transfer as a proxy for energy, and its own authors acknowledge an active research debate about whether that proxy holds. Quote the figures as estimates from a named model, not as measurements.",
      source: "Sustainable Web Design Model v4 (sustainablewebdesign.org); HTTP Archive Web Almanac 2024, Sustainability chapter; W3C Web Sustainability Guidelines",
      verify: { status: "verified", note: "All figures read from the Web Almanac 2024 sustainability chapter. The chapter gives separate desktop and mobile percentile tables; an earlier draft quoted the mobile 75th-percentile split without saying which it was, so both are now labelled. The 594 and 221 per cent figures are from the Web Almanac 2022 page weight chapter, which states them for June 2012 to June 2022. The SWDM v4 methodology page at sustainablewebdesign.org/estimating-digital-emissions confirms the three system segments and raises the proxy caveat itself, saying the web sustainability community has debated whether data transfer is a suitable metric for estimating digital carbon emissions. An earlier draft framed that as a direct quotation while dropping a word from it, so it is now given as a paraphrase. Note that the W3C Web Sustainability Guidelines are Community Group work, not a W3C Recommendation." },
      belongs: { verdict: "core", why: "Image choices, font loading and third-party scripts are design decisions, and they account for the large majority of the measured emissions." },
      related: [1010, 1005]
    },
    {
      n: 1007,
      title: "Designing for vulnerable users",
      aka: ["Stress cases", "Designing for the bad day"],
      oneLine: "Design for people in trouble, not just for the confident user having an ordinary day.",
      demo: {
        caption: "Same nine-step claim. Only the right-hand one survives the person being interrupted and coming back tomorrow.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Assumes one uninterrupted sitting</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Bereavement claim, step 4 of 9</span><div class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--open\"></span><span class=\"db-dot db-dot--sm db-dot--open\"></span><span class=\"db-dot db-dot--sm db-dot--open\"></span><span class=\"db-dot db-dot--sm db-dot--open\"></span><span class=\"db-dot db-dot--sm db-dot--open\"></span></div><span class=\"db-note\">your session ends in 2:00 and unsaved answers are lost</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Continue</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Assumes an interrupted day</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Bereavement claim, step 4 of 9</span><div class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot db-dot--sm db-dot--open\"></span><span class=\"db-dot db-dot--sm db-dot--open\"></span><span class=\"db-dot db-dot--sm db-dot--open\"></span><span class=\"db-dot db-dot--sm db-dot--open\"></span><span class=\"db-dot db-dot--sm db-dot--open\"></span></div><span class=\"db-note\">saved as you go, so you can close this and come back</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Continue</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Finish later</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Speak to someone</span></div></div></div></div></div></div>"
      },
      what: "The UK Financial Conduct Authority's guidance FG21/1, published in February 2021, groups the characteristics that raise the risk of harm into four drivers: health, life events, resilience and capability. Health covers physical and mental conditions and cognitive impairment. Life events covers bereavement, job loss, relationship breakdown and care responsibilities. Resilience covers low ability to withstand a financial or emotional shock. Capability covers low knowledge or confidence. The guidance is explicit that these are not mutually exclusive and not permanent: vulnerability can be transient.",
      why: "The person you design for in a workshop is rested, literate, has both hands free and is not grieving. Real journeys include people who are none of those things, and they are the ones who most need the journey to work. Designing for the difficult case usually improves the ordinary case as well, because it forces plain language and shorter paths.",
      how: [
        "Write a stress case alongside each happy path: the same task attempted by someone distressed, rushed or unfamiliar.",
        "Do not build a flow that assumes only one person will ever use an account.",
        "Offer a route to a human on any journey where the consequences of a mistake are serious.",
        "Test forms with people who have low confidence with technology, not only with confident testers."
      ],
      example: "FG21/1 asks firms to consider whether customers in vulnerable circumstances achieve outcomes at least as good as other customers, and to evidence that with data rather than policy. The FCA published a follow-up review of firms' actual treatment of these customers in March 2025.",
      numbers: "FCA FG21/1 (February 2021): four drivers of vulnerability, being health, life events, resilience and capability. The FCA's Financial Lives coronavirus panel survey of October 2020, quoted on its own guidance page, found 53 per cent of UK adults displaying a characteristic of vulnerability, up by more than 3 million people since February 2020.",
      pitfall: "Vulnerability is treated as a rare edge case handled by support, when the guidance is explicit that it can be temporary and can apply to anyone at some point.",
      source: "FCA, FG21/1 Guidance for firms on the fair treatment of vulnerable customers (February 2021)",
      verify: { status: "verified", note: "The four drivers, the February 2021 date, the March 2025 follow-up review and the 53 per cent Financial Lives figure with its October 2020 survey date were all read on the FCA's own guidance page at fca.org.uk. Correction to an earlier draft: it called 52 per cent a higher figure from the 2024 Financial Lives Survey. It is neither. The 52 per cent reading is May 2022 and the May 2024 survey reports 49 per cent, so the number has fallen since the guidance was written. Quote the date with the figure. Eric Meyer and Sara Wachter-Boettcher's Design for Real Life is the standard design text on stress cases; I did not verify it this session and have not cited it as a source." },
      belongs: { verdict: "core", why: "Stress cases change what a flow must contain, which is a design decision made before any visual work starts." },
      related: [1008, 1005, 1003]
    },
    {
      n: 1008,
      title: "Safety by design and abuse resistance",
      aka: ["Designing against abuse", "Adversarial user"],
      oneLine: "Assume one user will try to harm another through your product, and design the feature accordingly.",
      demo: {
        caption: "A payment reference is free text delivered to another person. Only the right-hand statement treats it as one.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Read as a transaction</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Recent payments in</span><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">J Smith</span><span class=\"db-note\">&pound;0.01</span></div><span class=\"db-note\">reference: pick up the phone or I will come round</span><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">J Smith</span><span class=\"db-note\">&pound;0.01</span></div><span class=\"db-note\">reference: answer me</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Read as a message channel</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Recent payments in</span><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">J Smith</span><span class=\"db-note\">&pound;0.01</span></div><span class=\"db-note\">reference hidden, reported</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Show</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Report</span><span class=\"db-btn db-btn--sm db-btn--danger\">Block sender</span></div></div></div></div></div></div>"
      },
      what: "Australia's eSafety Commissioner has promoted Safety by Design since 2018, built on three principles: service provider responsibility, in eSafety's words that the burden of safety should never fall solely upon the user; user empowerment and autonomy, meaning people have control and clear tools; and transparency and accountability, meaning the platform publishes what it is doing and can be held to it. The design version of this is adversarial thinking applied to features rather than to security: any field that carries text can carry abuse, any field that carries location can carry surveillance, and any shared account can be used to control someone.",
      why: "Abuse vectors are cheap to close at design time and very expensive afterwards, because closing them later means taking a feature away from people who use it normally. Thinking about the adversary also improves ordinary usability, since most abuse routes are also confusion routes.",
      how: [
        "For each new feature, run a short session on how a hostile person could use it against another person, and write the answers down.",
        "Treat any free-text field visible to a third party as a message channel and moderate it as one.",
        "Design shared and delegated access assuming the relationship may become hostile: separate logins, visible access logs, easy revocation.",
        "Make blocking and reporting reachable from the place the harm happens, not from a settings menu."
      ],
      example: "Transaction reference fields, notes on shared calendars and payment memos are all short free-text fields sent to another person. Each is a messaging channel that was not designed as one, and each needs the moderation and blocking a messaging channel would get.",
      numbers: "eSafety Commissioner Safety by Design: three principles.",
      pitfall: "The abuse review happens once, at launch, and every feature added afterwards inherits the assumption that it was already done.",
      source: "eSafety Commissioner (Australia), Safety by Design principles (promoted since 2018)",
      verify: { status: "verified", note: "The three principles and the burden of safety wording are on the eSafety Commissioner's own page at esafety.gov.au/industry/safety-by-design, which also states that eSafety has been working with industry on Safety by Design since 2018, so the date no longer rests on a third-party summary. Eva PenzeyMoog's Design for Safety is the standard design text here; I did not verify it this session and have not cited it as a source. The specific field examples are my own generic description, not confirmed incidents at any named product." },
      belongs: { verdict: "core", why: "Which fields exist, who can see them and how a person is removed are all design decisions taken before any code is written." },
      related: [1007, 1005, 996]
    },
    {
      n: 1009,
      title: "First Things First position",
      aka: ["First Things First 1964", "First Things First 2000", "Garland manifesto"],
      oneLine: "A 1964 manifesto arguing that designers were spending their best skill on the least useful work.",
      demo: {
        none: "The manifesto is an argument about which commissions to accept, so nothing on a finished page looks different for it; any picture would just re-list its words."
      },
      what: "Ken Garland wrote First Things First in 1963 and self-published it in January 1964, signed by twenty-two visual communicators in all, Garland among them: designers, photographers and students. It argued that too much design effort was going into advertising and proposed redirecting it towards what it called worthwhile purposes, listing signs for streets and buildings, books and periodicals, catalogues, instruction manuals, industrial photography, educational aids, films, television features and science publications. The Guardian picked it up and Garland was invited onto television to talk about it. A second version, First Things First 2000, appeared in autumn 1999 with 33 signatories and was published simultaneously in seven magazines: Adbusters, the AIGA Journal and Emigre in North America, Eye and Blueprint in Britain, Form in Germany and Items in the Netherlands.",
      why: "It is the discipline's oldest surviving argument about what designers should agree to work on, and it is short enough to read in five minutes. Its practical use is as a prompt before taking a commission rather than as a rule applied to a page.",
      how: [
        "Read both versions before repeating either; they say different things and the 1964 one is milder.",
        "Use it as a question about your own book of work rather than as a judgement on someone else's.",
        "Note that Garland said the original was not anti-advertising, while the 2000 version was."
      ],
      example: "Eye magazine publishes the full 2000 text with all 33 signatories, including Garland himself, Milton Glaser, Erik Spiekermann, Ellen Lupton and Rick Poynor.",
      numbers: "1964: twenty-two signatories in total. 2000: 33 signatories, published in seven magazines.",
      pitfall: "The 2000 version drew a sharp reply about the position of its own signatories, with Dietmar Winkler asking in Adbusters whether it was embarrassing to see well-placed practitioners speaking as prophets. Quoting the manifesto without knowing that argument exists is a weak position to hold.",
      source: "Ken Garland, First Things First (1964); First Things First 2000, published in Eye, Adbusters, Emigre and others (1999-2000)",
      verify: { status: "verified", note: "The 2000 text, its 33 signatories and its simultaneous publication were read at eyemagazine.com; the launch details, the Winkler criticism and Garland's remark that the original was not anti-advertising come from Rick Poynor's account for AIGA Eye on Design, and Poynor was directly involved in the 2000 version. Eye's own text states the 1964 manifesto was signed by 22 visual communicators, so I have used that rather than the vaguer around twenty of an earlier draft; designishistory.com's phrasing of twenty others is consistent with it. The seven titles are listed at Eye, and an earlier draft named only six, omitting Form in Germany, which contradicted its own count of seven; that is fixed. A further correction: that draft also said the seven titles spanned four countries. They span five, so the count has been dropped rather than restated. Poynor adds that Form followed the other six rather than launching with them. The television appearance is reported as a BBC news programme; I could not confirm the programme name." },
      belongs: { verdict: "adjacent", why: "Overturned from core on the entry's own reasoning. This is an argument about which commissions to accept, not a decision made inside a design. It is written by designers about design practice and it belongs in an ethics section, but nothing on a page changes because you have read it." },
      related: [1010, 1003]
    },
    {
      n: 1010,
      title: "Design for the real world (social responsibility)",
      aka: ["Papanek", "Socially responsible design"],
      oneLine: "Papanek's 1971 argument that most design served consumption rather than need, and could be redirected.",
      demo: {
        none: "What separates the two kinds of object Papanek contrasts is what they are made of and what they cost to keep, none of which shows in markup; a drawn comparison would be his sentences relabelled."
      },
      what: "Victor Papanek published Design for the Real World: Human Ecology and Social Change in 1971. It opens: There are professions more harmful than industrial design, but only a very few of them. The book argues that much of what was being manufactured was inconvenient, frivolous or unsafe, and that designers should work on genuine needs, particularly in the developing world and for disabled and elderly people, using cheap and locally available materials. Its publisher says it has been translated into over twenty languages and calls it the world's most widely read book on design.",
      why: "Papanek is useful less as a doctrine than as a habit: asking who the object or interface is for, who it excludes, and what it will cost after it is bought. For commercial work that translates into a plain test of whether the thing you are making is useful to the person paying for it, or only to the person selling it.",
      how: [
        "Ask what happens to the thing after the sale: who maintains it, who repairs it, what it costs to keep.",
        "Design for the least-served user in the group rather than the most profitable one, then check the profitable case still works.",
        "Prefer the cheapest material and process that meets the need over the one that signals most.",
        "Read the opening chapter rather than the summary; the tone is part of the argument."
      ],
      example: "Papanek's best-known project is a low-cost radio receiver made from a used tin can, developed as a demonstration that a functioning object could be produced from waste materials for very little money.",
      numbers: "First published 1971; translated into over twenty languages per the publisher's own description, and into twenty-three according to several booksellers quoting a later edition.",
      pitfall: "The book is often invoked as general virtue rather than read. It makes specific, arguable and sometimes dated claims, and quoting the opening line without the rest is the commonest form of this.",
      source: "Victor Papanek, Design for the Real World: Human Ecology and Social Change (1971)",
      verify: { status: "verified", note: "The opening line was confirmed in three independent places: Alice Twemlow's essay, which cites Papanek 1971 p. 13; the New York Times obituary-era piece of 2011; and a scan of the book itself hosted at readings.design. Publication year is not in dispute. Correction to an earlier draft: it claimed more than 24 languages, which I could not source. The publisher's own blurb says over twenty, and several booksellers quoting a later edition say twenty-three, so the entry now gives both and claims neither as exact. Papanek is also widely said to have urged designers to give a tenth of their time or income to work for the needy; the PDF I fetched would not render as text and I could not confirm the exact wording, so I have left that claim out. The tin can radio is a documented Papanek project, though I did not verify its production figures this session and have made no claim about them." },
      belongs: { verdict: "core", why: "Kept core where entry 1009 is adjacent, and the difference is what each one argues about. Garland's manifesto is about which commissions to accept. Papanek argues about the made thing itself: what it is built from, what it costs to keep, who it leaves out. Those are decisions taken inside a design. It is not the origin of the argument in this section either; Garland's manifesto predates it by seven years." },
      related: [1009, 1006, 1003]
    },
    {
      n: 9000,
      title: "Exit parity",
      aka: ["Leaving is as easy as joining", "Symmetric consent"],
      oneLine: "Whatever effort it took to join, take your data or say yes, leaving must cost no more.",
      demo: {
        caption: "The plan sits in Account on both. Only on the right does the control that ends it sit next to it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Exit lives somewhere else</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-nav\"><b>Account</b><span>Billing</span><span>Help</span></div><span class=\"db-note\">Your plan</span><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Standard, &pound;12 a month</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Change plan</span></div><span class=\"db-note\">to cancel: Help &rsaquo; Contact us &rsaquo; ring us, weekdays</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Exit lives with the thing it ends</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-nav\"><b>Account</b><span>Billing</span><span>Help</span></div><span class=\"db-note\">Your plan</span><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Standard, &pound;12 a month</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Change plan</span></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Cancel subscription</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Download my data</span></div></div></div></div></div></div>"
      },
      what: "This is the positive rule that the roach motel pattern breaks, and it now appears in three separate places in law. GDPR Article 7(3) requires that withdrawing consent be as easy as giving it. Digital Services Act Article 25(3)(c) lists making termination harder than subscription as a prohibited interface practice. The US Restore Online Shoppers' Confidence Act requires a simple cancellation mechanism for online negative-option sales. The design version is a measurable test rather than a sentiment: count the steps in, count the steps out, and compare.",
      why: "Stating it as a rule rather than as the absence of a dark pattern makes it something you can specify, hand to a developer and check at QA. It also gives you a number to bring to the meeting where someone proposes adding a retention step.",
      how: [
        "Record the click count, screen count and channel for both directions, and put both in the design spec.",
        "Place the exit control in the same screen area as the thing being exited.",
        "Cap retention offers at one, on the same screen, with the exit still the primary action.",
        "Apply the same rule to data export and account deletion, not only to paid subscriptions."
      ],
      example: "A subscription bought with a card in three screens and cancelled through a two-minute web form in the account area passes. The same subscription cancelled only by telephone during office hours fails DSA Article 25(3)(c) on its face.",
      numbers: "GDPR Article 7(3). EU Digital Services Act Article 25(3)(c). ROSCA simple cancellation requirement.",
      pitfall: "Teams satisfy the letter by adding a cancel link and then rebuild the friction inside the flow with three confirmation screens and a survey.",
      source: "GDPR Article 7(3); EU Digital Services Act Article 25(3)(c); ROSCA (US, 2010)",
      verify: { status: "verified", note: "Added as a gap. All three legal provisions were checked this session: GDPR Article 7 at gdpr-info.eu, DSA Article 25(3)(c) at eu-digital-services-act.com, and the ROSCA cancellation requirement via Alston and Bird's and Wiley's July 2025 advisories on the vacated FTC rule. The name exit parity is my own label for the rule; the rule itself is not my invention." },
      belongs: { verdict: "core", why: "The master list catalogues the failure (roach motel, obstruction) but never states the rule as something to build to, which is what a designer actually needs." },
      related: [986, 993, 997]
    },
    {
      n: 9004,
      title: "Synthetic media disclosure",
      aka: ["AI content labelling", "Deepfake disclosure", "Bot disclosure"],
      oneLine: "Say clearly, at first contact, when a person is talking to an AI or looking at AI-generated content.",
      demo: {
        caption: "Three messages in, the left-hand disclosure has scrolled away. The right-hand one is part of the frame.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Said once, in the first message</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">3 earlier messages</span><span class=\"db-note\">You: can you cancel the order from Tuesday?</span><span class=\"db-note\">Ava: of course, I can sort that out for you now</span><span class=\"db-note\">You: thanks, are you able to refund it too?</span><span class=\"db-input\">type a message</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Held in the frame</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-nav\"><b>Ava</b><span class=\"db-note db-note--accent\">this is an AI, not a person</span></div><span class=\"db-note\">You: can you cancel the order from Tuesday?</span><span class=\"db-note\">Ava: of course, I can sort that out for you now</span><span class=\"db-note\">You: thanks, are you able to refund it too?</span><span class=\"db-input\">type a message</span></div></div></div></div></div>"
      },
      what: "Article 50 of the EU AI Act sets four transparency duties. Providers of AI systems that interact with people must design them so users are told they are dealing with an AI. Providers of systems generating synthetic audio, image, video or text must mark the outputs in a machine-readable format. Deployers of emotion recognition or biometric categorisation must tell exposed individuals. Deployers who publish deepfakes, or AI-generated text on matters of public interest, must disclose that the content is artificially generated.",
      why: "Where the label goes and what it says is a design job, and the Commission's guidance rules out the lazy answers directly. Terms and conditions do not count. Metadata and watermarks alone do not count, because people do not see them at the point of interaction. Vague words such as assistant do not count either. The guidance asks for plain-language notices and persistent visual indicators, with stricter treatment where children are in the audience.",
      how: [
        "Put the disclosure at the start of the interaction or the content, and repeat it where someone may join partway through, such as a podcast or a long video.",
        "Use plain words: this is an AI, not this system uses LLMs.",
        "Make the indicator persistent in a chat interface rather than a one-off first message.",
        "Keep the label legible against whatever it sits on; a compliant label that fails contrast is not a disclosure."
      ],
      example: "For a deepfake in an artistic or satirical work, Article 50(4) limits the duty to disclosing that generated content exists, in a way that does not spoil the work. That is a typographic problem: an end card or a corner mark rather than a permanent overlay.",
      numbers: "EU AI Act, Article 50, applying from 2 August 2026, with the Article 50(2) machine-readable marking duty deferred to 2 December 2026 for generative systems already on the market before that date. Penalties up to 15 million euros or 3 per cent of worldwide annual turnover, whichever is higher.",
      pitfall: "Legal signs off on the wording and nobody checks it is visible; a compliant sentence buried in a settings page fails the same test as a buried consent notice.",
      source: "Regulation (EU) 2024/1689 (AI Act), Article 50; European Commission guidelines on Article 50 transparency obligations and Code of Practice on Transparency of AI-generated Content (July 2026)",
      verify: { status: "verified", note: "Added as a gap. Article 50 text checked at artificialintelligenceact.eu/article/50. The 2 August 2026 application date is stated on the European Commission's own digital-strategy pages for both the Article 50 guidelines and the Code of Practice on Transparency of AI-generated Content, and the Commission adopted those guidelines on 20 July 2026. The 2 December 2026 deferral for the Article 50(2) marking duty and the 15 million euro or 3 per cent ceiling are stated in three independent law-firm and industry notes. Correction to an earlier draft: it also gave a watermark-detection interoperability deadline of 2 February 2027, which I could not source anywhere, so it has been removed. The rulings on what does not count as disclosure come from law-firm summaries of the finalised guidance, not from the guidance text itself." },
      belongs: { verdict: "core", why: "The master list's ethics section predates the labelling duties, and where a disclosure sits, how it reads and whether it stays visible are all design decisions with a legal deadline that has already passed." },
      related: [1004, 989, 997]
    }
  ]
};
