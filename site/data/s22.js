window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[22] = {
  n: 22,
  slug: "brand",
  title: "Brand and identity",
  blurb: "How an organisation gets a mark, a voice and a set of assets people can recognise anywhere.",
  intro: "Brand identity is the craft of making one organisation reliably recognisable across everything it puts out, and its vocabulary comes from three places that do not always agree. Designers such as Paul Rand set out what a mark has to do mechanically, and his 1991 list of seven qualities still underpins most logo critiques. Marketing academics such as Al Ries, David Aaker and Jenni Romaniuk supplied the strategy layer, and their claims range from well-evidenced to heavily contested. Trade mark law supplies the hard edges, because a colour or a name you cannot register is a colour or a name you cannot rely on. Where those three disagree, this section says so rather than smoothing it over.",
  sources: [
    "Paul Rand, Logos, Flags, and Escutcheons, AIGA Journal of Graphic Design vol 9 no 3 (1991), reprinted in Looking Closer (Allworth Press, 1994)",
    "Alina Wheeler, Designing Brand Identity (first edition 2003; five-phase process retained in later editions)",
    "Al Ries and Jack Trout, The Positioning Era Cometh, Advertising Age three-part series (April and May 1972), and Positioning: The Battle for Your Mind (1981)",
    "Jennifer L. Aaker, Dimensions of Brand Personality, Journal of Marketing Research 34:3 (1997)",
    "Jenni Romaniuk, Building Distinctive Brand Assets (Oxford University Press, 2018); Byron Sharp, How Brands Grow (2010)",
    "Wally Olins, Corporate Identity: Making Business Strategy Visible Through Design (1989)",
    "David A. Aaker and Erich Joachimsthaler, Brand Leadership (2000), and The Brand Relationship Spectrum, California Management Review (2000)",
    "Abercrombie & Fitch Co. v. Hunting World, Inc., 537 F.2d 4 (2d Cir. 1976), Friendly J.",
    "Qualitex Co. v. Jacobson Products Co., 514 U.S. 159 (1995)",
    "Societe des Produits Nestle SA v Cadbury UK Ltd [2013] EWCA Civ 1174",
    "Christian Louboutin v Van Haren Schoenen BV, CJEU Case C-163/16 (2018)",
    "WIPO, Nice Classification, established by the Nice Agreement of 15 June 1957",
    "NASA Brand Guidelines and the NASA Graphics Standards Manual (Richard Danne and Bruce Blackburn, 1975)",
    "Google, Material Design system icon guidance (24dp grid and keyline shapes)",
    "Android Developers, adaptive icon specification (108dp layers, 72dp mask, 66dp safe zone)",
    "Kate Moran, The Four Dimensions of Tone of Voice, Nielsen Norman Group, 17 July 2016",
    "A. B. Blake, M. Nazarian and A. D. Castel, The Apple of the mind's eye, Quarterly Journal of Experimental Psychology (2015)",
    "Government Digital Service, A few notes on typography, GDS blog, 5 July 2012",
    "Snopes, Did the Chevrolet Nova Fail to Sell in Spanish-Speaking Countries?",
    "UK press and trade reporting on the Consignia reversal, June 2002; Royal Mail Group plc from 4 November 2002",
    "Josh Gabert-Doyon, Why does every advert look the same? Blame Corporate Memphis, Wired, 24 January 2021",
    "Alla Kholmatova, Design Systems (Smashing Magazine, 2017)"
  ],
  entries: [
    {
      n: 820,
      title: "Strategy before identity",
      aka: ["Brand strategy first", "Discovery before design"],
      oneLine: "Settle what the organisation is and who it serves before you draw a single mark.",
      demo: { none: "The claim is about the order in which the work is done, and a picture of an order is a flow chart of the sentence rather than a demonstration of anything visible." },
      what: "Alina Wheeler's Designing Brand Identity lays the work out in five phases: conducting research, clarifying strategy, designing identity, creating touchpoints, managing assets. Drawing is phase three of five. The two phases in front of it exist to produce the facts that the drawing then has to satisfy: who actually buys, what rivals already own visually, what the organisation can honestly claim about itself. Skip them and you are decorating a guess.",
      why: "A brief built from research gives you something to argue from when a director says they do not like green. It also stops you solving the wrong problem, which in identity work is usually a positioning problem wearing a logo costume.",
      how: [
        "Write the strategy down as a page of plain statements before opening any drawing tool.",
        "List what competitors already own in colour, shape and typographic register, then treat those as taken.",
        "Get the claims signed off by whoever will have to deliver them, not just by marketing.",
        "Keep the research artefacts, because in six months nobody will remember why the mark is the shape it is."
      ],
      example: "Royal Mail's parent renamed itself Consignia in 2001 to signal that the group did more than carry letters. The strategic reasoning was never accepted by staff or the public, and the company began trading as Royal Mail Group plc again on 4 November 2002.",
      numbers: "",
      pitfall: "Discovery that ends in a deck nobody reads. If the strategy does not change a single decision about the mark, the typeface or the photography, it was theatre.",
      source: "Alina Wheeler, Designing Brand Identity (first edition 2003), five-phase process",
      verify: {
        status: "verified",
        note: "The five phase names were re-checked this session across multiple independent summaries and catalogue records of the book, which agree: Phase 1 conducting research, Phase 2 clarifying strategy, Phase 3 designing identity, Phase 4 creating touchpoints, Phase 5 managing assets. Designing Brand Identity was first published by Wiley in 2003. Consignia: the group was renamed Consignia in 2001 and began operating as Royal Mail Group plc on 4 November 2002, confirmed this session. No cost figure is claimed in this entry."
      },
      belongs: {
        verdict: "core",
        why: "Every identity process in the canon puts research and strategy ahead of drawing, and a designer who skips them produces work they cannot defend."
      },
      related: [821, 822, 853]
    },
    {
      n: 821,
      title: "Positioning",
      aka: ["Positioning strategy"],
      oneLine: "Claiming a specific slot in the customer's head relative to whatever is already sitting there.",
      demo: {
        caption: "Seven rivals plotted on two axes. The dashed ring marks the only region nobody holds, which is where the position is.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 160\"><path class=\"s-mute\" d=\"M24 80 H296\"/><path class=\"s-mute\" d=\"M160 12 V148\"/><text class=\"t\" x=\"24\" y=\"96\">cheap</text><text class=\"t\" x=\"296\" y=\"96\" text-anchor=\"end\">costly</text><text class=\"t\" x=\"166\" y=\"20\">specialist</text><text class=\"t\" x=\"166\" y=\"144\">everyday</text><circle class=\"f-mute\" cx=\"60\" cy=\"100\" r=\"5\"/><circle class=\"f-mute\" cx=\"88\" cy=\"112\" r=\"5\"/><circle class=\"f-mute\" cx=\"112\" cy=\"94\" r=\"5\"/><circle class=\"f-mute\" cx=\"138\" cy=\"118\" r=\"5\"/><circle class=\"f-mute\" cx=\"196\" cy=\"106\" r=\"5\"/><circle class=\"f-mute\" cx=\"224\" cy=\"94\" r=\"5\"/><circle class=\"f-mute\" cx=\"74\" cy=\"44\" r=\"5\"/><circle class=\"s-accent\" stroke-dasharray=\"4 4\" cx=\"250\" cy=\"42\" r=\"14\"/><text class=\"t\" x=\"250\" y=\"70\" text-anchor=\"middle\">open slot</text></svg></div>"
      },
      what: "Al Ries and Jack Trout argued that you do not position a product, you position it in the mind of the prospect, and that mind is already full. Their three-part series in Advertising Age, The Positioning Era Cometh, ran in April and May 1972; the book Positioning: The Battle for Your Mind followed in 1981. The practical move is to find a slot that is either empty or held weakly, then say one thing about it relentlessly.",
      why: "Positioning tells you what the identity has to signal and, more usefully, what it must not. If the position is cheap and cheerful, an expensive-looking mark is a mistake even if it wins awards.",
      how: [
        "Write the position as one sentence naming the category, the audience and the competitor you are defined against.",
        "Test every design decision against it: does this typeface support the claim or undercut it?",
        "Prefer a narrow position you can hold over a broad one you cannot."
      ],
      example: "Avis built a campaign at Doyle Dane Bernbach on being the second-largest car hire firm and trying harder because of it. The position only works because Hertz was already established as the leader, which is the whole point of positioning against what is there.",
      numbers: "",
      pitfall: "Writing a position that every competitor could also sign. Quality, innovation and customer focus are not positions, they are table stakes.",
      source: "Al Ries and Jack Trout, Advertising Age (1972) and Positioning: The Battle for Your Mind (1981)",
      verify: {
        status: "verified",
        note: "Dates re-checked this session. The three-part Advertising Age series ran in April and May 1972, the first part on 24 April 1972, and Positioning: The Battle for Your Mind followed in 1981. The sales figure often quoted for the book, over four million copies, traces to the authors' own sites and is not independently audited, so it is left out here. The Avis campaign at Doyle Dane Bernbach is well documented and no claimed sales effect is stated for it."
      },
      belongs: {
        verdict: "adjacent",
        why: "It comes from advertising strategy rather than design. It earns its place because it is the input that decides what register the mark, palette and photography have to hit."
      },
      related: [820, 822, 831]
    },
    {
      n: 822,
      title: "Brand attributes",
      aka: ["Brand personality", "Brand adjectives"],
      oneLine: "The handful of adjectives a brand is meant to feel like, used to steer visual choices.",
      demo: {
        caption: "Two attribute lists against the same four typefaces. Only the right-hand list rules any of them out.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Innovative, passionate</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-specimen\" style=\"font-size:17px\">Harbour</span><span class=\"db-type db-type--mono\" style=\"font-size:14px\">Harbour</span><span class=\"db-type\" style=\"font-size:14px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase\">Harbour</span><span class=\"db-type\" style=\"font-size:15px\">Harbour</span></div><span class=\"db-note\">four still open</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Warm, plain-spoken</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-specimen\" style=\"font-size:17px;color:var(--ink-4);opacity:0.45\">Harbour</span><span class=\"db-type db-type--mono\" style=\"font-size:14px;color:var(--ink-4);opacity:0.45\">Harbour</span><span class=\"db-type\" style=\"font-size:14px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--ink-4);opacity:0.45\">Harbour</span><span class=\"db-type\" style=\"font-size:15px\">Harbour</span></div><span class=\"db-note\">one still open</span></div></div></div></div>"
      },
      what: "The formal version is Jennifer Aaker's 1997 paper Dimensions of Brand Personality in the Journal of Marketing Research, which borrowed the method behind psychology's Big Five and produced five brand dimensions: sincerity, excitement, competence, sophistication and ruggedness. In studios the idea shows up in a cruder form, as five adjectives on a slide. Both versions are trying to do the same job, which is to give a shared word for a feeling so that a type choice can be argued about rather than voted on. The scale itself is disputed. Later researchers argue that it measures more than personality and that the five factors do not hold up consistently across cultures, so treat the words as shared vocabulary rather than as a measurement.",
      why: "A short attribute list narrows an infinite design space fast. Warm and plain-spoken rules out a high-contrast display serif; precise and technical rules out a wobbly hand-drawn mark.",
      how: [
        "Cap the list at three or four words and make each one exclude something.",
        "Pair each attribute with its opposite so the team can see what you are trading away.",
        "Translate each word into a concrete constraint before you design: attribute, then rule, then artefact.",
        "Throw out any adjective a direct competitor could also claim."
      ],
      example: "Aaker's five dimensions each carry sub-traits, so excitement covers daring, spirited, imaginative and up-to-date. That granularity is what makes the scale usable as a research instrument rather than a mood word.",
      numbers: "Aaker (1997) reports five dimensions: sincerity, excitement, competence, sophistication, ruggedness.",
      pitfall: "Adjectives that sound like a job advert. Honest, innovative and passionate constrain nothing, because no organisation is going to pick the opposites.",
      source: "Jennifer L. Aaker, Dimensions of Brand Personality, Journal of Marketing Research 34:3 (1997)",
      verify: {
        status: "disputed",
        note: "The five dimensions and the excitement sub-traits, daring, spirited, imaginative and up-to-date, are confirmed against multiple academic sources for the 1997 paper, Journal of Marketing Research vol 34, pages 347 to 356. The scale itself is contested: Story of Aaker's brand personality scale criticism, Spanish Journal of Marketing - ESIC 22(2), 2018, surveys the sustained objections, including Azoulay and Kapferer, Do brand personality scales really measure brand personality?, Journal of Brand Management 11(2), 2003, which argues the definition is too broad and mixes personality with user profile, and the finding that the five factors do not replicate consistently across cultures. Treat the framework as a useful vocabulary rather than a measurement."
      },
      belongs: {
        verdict: "adjacent",
        why: "It is consumer psychology borrowed into design. Its specific design use is real: the attribute list is what converts a strategy document into typeface, colour temperature and casting decisions."
      },
      related: [821, 843, 845, 850]
    },
    {
      n: 823,
      title: "Naming",
      aka: ["Brand naming", "Verbal identity"],
      oneLine: "Choosing a name that can be owned legally, said aloud easily and drawn well.",
      demo: {
        caption: "Four names for one bicycle shop, ranked by how much protection each type can hold. The generic one holds none.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 140\"><text class=\"t\" x=\"0\" y=\"22\">generic</text><text class=\"t\" x=\"72\" y=\"22\" style=\"font-size:11px;fill:var(--ink)\">Bicycle Shop</text><rect class=\"s-mute\" x=\"170\" y=\"13\" width=\"142\" height=\"11\"/><text class=\"t\" x=\"0\" y=\"50\">descriptive</text><text class=\"t\" x=\"72\" y=\"50\" style=\"font-size:11px;fill:var(--ink)\">Quick Bikes</text><rect class=\"s-mute\" x=\"170\" y=\"41\" width=\"142\" height=\"11\"/><rect class=\"f-accent\" x=\"170\" y=\"41\" width=\"36\" height=\"11\"/><text class=\"t\" x=\"0\" y=\"78\">suggestive</text><text class=\"t\" x=\"72\" y=\"78\" style=\"font-size:11px;fill:var(--ink)\">Cadence</text><rect class=\"s-mute\" x=\"170\" y=\"69\" width=\"142\" height=\"11\"/><rect class=\"f-accent\" x=\"170\" y=\"69\" width=\"88\" height=\"11\"/><text class=\"t\" x=\"0\" y=\"106\">arbitrary</text><text class=\"t\" x=\"72\" y=\"106\" style=\"font-size:11px;fill:var(--ink)\">Kestrel</text><rect class=\"s-mute\" x=\"170\" y=\"97\" width=\"142\" height=\"11\"/><rect class=\"f-accent\" x=\"170\" y=\"97\" width=\"142\" height=\"11\"/><text class=\"t\" x=\"170\" y=\"128\">eligibility for protection</text></svg></div>"
      },
      what: "US trade mark law gives the clearest map of name types. In Abercrombie & Fitch Co. v. Hunting World (1976) Judge Henry Friendly set out four ascending classes: generic, descriptive, suggestive, and arbitrary or fanciful. Generic names cannot be protected at all. Descriptive names need proof that the public has come to treat them as a brand. Suggestive, arbitrary and coined names are protectable from the start. That ladder is a design constraint as much as a legal one, because the weaker the name, the harder the mark has to work.",
      why: "The name sets the length, rhythm and letterform problems the wordmark will have to solve. It also decides whether you spend the next decade defending the brand or building it.",
      how: [
        "Push away from purely descriptive names unless you have the budget to establish them.",
        "Say every shortlisted name down a bad phone line and ask someone to spell it back.",
        "Set the shortlist in three unrelated typefaces at 12mm wide before choosing, since awkward letter pairs only show up at size.",
        "Run register and domain checks before anyone falls in love."
      ],
      example: "The Royal Mail group's 2001 name Consignia was invented by the consultancy Dragon Brands to cover more than post. It was coined, so legally strong, and it failed on every other count. Trading resumed as Royal Mail Group plc on 4 November 2002.",
      numbers: "Abercrombie sets four classes in ascending order of protection: generic, descriptive, suggestive, arbitrary or fanciful.",
      pitfall: "Falling for a name that reads well on screen and collapses in speech. If people have to spell it every time they say it, you have added friction to every conversation about the brand.",
      source: "Abercrombie & Fitch Co. v. Hunting World, Inc., 537 F.2d 4 (2d Cir. 1976)",
      verify: {
        status: "verified",
        note: "The opinion text for 537 F.2d 4 (2d Cir. 1976), Friendly J., was read this session on Justia. It states that the cases, and in some instances the Lanham Act, identify four different categories of terms, arrayed in an ascending order which roughly reflects their eligibility to trademark status: (1) generic, (2) descriptive, (3) suggestive, and (4) arbitrary or fanciful. Consignia renamed in 2001 and trading as Royal Mail Group plc from 4 November 2002, confirmed this session across reference and trade-press accounts; the name was coined by the consultancy Dragon Brands."
      },
      belongs: {
        verdict: "core",
        why: "The name is the first artefact of the identity and it constrains the wordmark, the lockup and the register of everything after it."
      },
      related: [824, 854, 9823]
    },
    {
      n: 9823,
      title: "Tagline",
      aka: ["Strapline", "Slogan", "Endline"],
      oneLine: "A short fixed line of words locked to the brand and repeated until it sticks.",
      demo: {
        caption: "Same lockup at card size. The tagline is shrunk to five pixels on the left and dropped on the right.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Shrunk to fit</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:17px\">Meridian</span><span class=\"db-type\" style=\"font-size:5px\">Bright ideas, carefully made</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Dropped below minimum</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:17px\">Meridian</span></div></div></div></div>"
      },
      what: "A tagline is a sentence or fragment that travels with the identity, usually set near the mark or at the end of an advertisement. It is not the positioning statement, which is internal, and it is not the tone of voice, which governs all the other words. It is one fixed string of text treated as a brand asset in its own right, with rules about typeface, size and placement, exactly like a logo.",
      why: "A repeated line gives people a verbal handle for the brand, which matters because most brand recall happens in conversation rather than on screen. For the designer it is also a layout element with a fixed relationship to the mark, so it needs a lockup and a minimum size.",
      how: [
        "Write it to survive being said out loud by someone who does not work there.",
        "Decide early whether it is locked to the mark or free-floating, and document the spacing either way.",
        "Set a minimum size below which the tagline is dropped rather than shrunk into illegibility.",
        "Retire it deliberately rather than letting it fade, so the change is a decision and not a drift."
      ],
      example: "Ronseal's line about doing exactly what it says on the tin was written in 1994 by Liz Whiston and Dave Shelton at the agency HHCL. It passed into ordinary British English and is recorded in dictionaries of idiom and slang, which is about as far as a tagline can travel.",
      numbers: "",
      pitfall: "Treating the tagline as decoration and setting it in whatever space is left. If it is small enough to be unreadable at the sizes you actually print, it is doing nothing but adding grey.",
      source: "Standard practice in brand identity manuals; no single originator. Ronseal line: HHCL, 1994",
      verify: {
        status: "verified",
        note: "Added as a gap. The master list covers naming at 823 and tone of voice at 850 but has no entry for the tagline, which every identity manual treats as a separate managed asset with its own lockup rules. Ronseal details checked this session: the line dates from a 1994 HHCL campaign for Quick Drying Woodstain, written by Liz Whiston and Dave Shelton. An earlier draft said the phrase is listed in general-purpose dictionaries; the citable listing is in dictionaries of idiom and slang, including the Concise New Partridge Dictionary of Slang and Unconventional English, so the claim has been narrowed. No cost or effectiveness figure is claimed."
      },
      belongs: {
        verdict: "adjacent",
        why: "Downgraded from core on review, to sit consistently with tone of voice at 850. Writing the line is copywriting, not design. What is genuinely the designer's is the artefact it becomes: a fixed string with a lockup, a minimum size and a rule for when it is dropped."
      },
      related: [823, 840, 850]
    },
    {
      n: 824,
      title: "Wordmark",
      aka: ["Logotype"],
      oneLine: "The brand name itself, drawn as the mark, with no separate symbol.",
      demo: {
        caption: "Same five letters both times. Cutting the crossbars out of the two As is all that turns typing into a mark.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Typed</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 196 72\"><path class=\"s\" style=\"stroke-width:7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 60 V20 L24 44 L40 20 V60\"/><path class=\"s\" style=\"stroke-width:7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M50 60 L64 20 L78 60\"/><path class=\"s\" style=\"stroke-width:7\" stroke-linecap=\"round\" d=\"M56 44 H72\"/><path class=\"s\" style=\"stroke-width:7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M88 60 V20 L112 60 V20\"/><path class=\"s\" style=\"stroke-width:7\" stroke-linecap=\"round\" d=\"M122 20 H150\"/><path class=\"s\" style=\"stroke-width:7\" stroke-linecap=\"round\" d=\"M136 20 V60\"/><path class=\"s\" style=\"stroke-width:7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M160 60 L174 20 L188 60\"/><path class=\"s\" style=\"stroke-width:7\" stroke-linecap=\"round\" d=\"M166 44 H182\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Drawn</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 196 72\"><path class=\"s\" style=\"stroke-width:7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 60 V20 L24 44 L40 20 V60\"/><path class=\"s\" style=\"stroke-width:7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M50 60 L64 20 L78 60\"/><path class=\"s\" style=\"stroke-width:7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M88 60 V20 L112 60 V20\"/><path class=\"s\" style=\"stroke-width:7\" stroke-linecap=\"round\" d=\"M122 20 H150\"/><path class=\"s\" style=\"stroke-width:7\" stroke-linecap=\"round\" d=\"M136 20 V60\"/><path class=\"s\" style=\"stroke-width:7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M160 60 L174 20 L188 60\"/></svg></div></div></div>"
      },
      what: "A wordmark is the name set or drawn in a fixed, usually customised, form. There is no picture to fall back on, so all the character has to come out of the letterforms, their spacing and their proportions. Wordmarks work best when the name is short enough to read at a glance and distinctive enough that the letter shapes have something to hold onto.",
      why: "A wordmark teaches the name and the look in one hit, which is exactly what a young or unfamiliar brand needs. It also removes the recurring problem of people who recognise the symbol but cannot say the name.",
      how: [
        "Start from a real typeface, then modify the specific letters that cause trouble rather than redrawing everything.",
        "Tune the spacing optically at the size the mark will actually be used, not at 400 per cent zoom.",
        "Test the wordmark reversed out of a dark background, where thin joins close up.",
        "Check how it behaves when the name has to sit in a square avatar, since a long wordmark has nowhere to go."
      ],
      example: "The NASA logotype, known as the worm, was designed by Richard Danne and Bruce Blackburn in 1975 and was the agency's official logo from 1976 to 1992. It is pure letterform, with the crossbars of the two As removed.",
      numbers: "",
      pitfall: "Typing the name in a fashionable typeface and calling it done. If a competitor can produce the same mark in thirty seconds, it is not an identity, it is a font licence.",
      source: "NASA Brand Guidelines; Richard Danne and Bruce Blackburn, NASA Graphics Standards Manual (1975)",
      verify: {
        status: "verified",
        note: "Read NASA's current brand guidelines page, which states that the NASA Logotype, the Worm, was designed by Richard Danne and Bruce Blackburn in 1975 and was NASA's official logo between 1976 and 1992, and that it may now be used only as a supplemental graphic alongside the insignia."
      },
      belongs: {
        verdict: "core",
        why: "One of the small number of structural choices every identity job starts from, and the one with the fewest places to hide."
      },
      related: [825, 829, 843]
    },
    {
      n: 825,
      title: "Lettermark",
      aka: ["Monogram", "Initials mark"],
      oneLine: "A mark built from the initials of a long name, drawn as a unit.",
      demo: {
        caption: "One name, one 60-pixel avatar. Set in full it is grey texture; cut to two initials it is a mark.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Full name</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><svg class=\"db-svg\" viewBox=\"0 0 60 60\" style=\"width:60px\"><rect class=\"s-mute\" x=\"0.75\" y=\"0.75\" width=\"58.5\" height=\"58.5\" rx=\"8\"/><text class=\"t\" x=\"30\" y=\"32\" text-anchor=\"middle\" textLength=\"50\" lengthAdjust=\"spacingAndGlyphs\" style=\"font-size:5px;fill:var(--ink)\">Northfield Instruments</text></svg></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Initials</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><svg class=\"db-svg\" viewBox=\"0 0 60 60\" style=\"width:60px\"><rect class=\"s-mute\" x=\"0.75\" y=\"0.75\" width=\"58.5\" height=\"58.5\" rx=\"8\"/><text class=\"t\" x=\"30\" y=\"40\" text-anchor=\"middle\" style=\"font-size:26px;fill:var(--ink)\">NI</text></svg></div></div></div></div>"
      },
      what: "A lettermark reduces an unwieldy name to two or three letters and then treats those letters as a shape. It suits organisations whose full name is too long to set small, and it works only if the initials are already how people refer to the organisation. Drawing the letters as a single locked unit, rather than as three separate glyphs, is what separates a lettermark from an abbreviation.",
      why: "It buys you a compact, near-square mark that survives at avatar and favicon sizes where a full wordmark would be unreadable. It also gives the letters somewhere to carry a visual idea.",
      how: [
        "Only use initials people already say aloud; inventing an abbreviation nobody uses adds a translation step.",
        "Lock the letter spacing as drawn artwork, not as live text with tracking applied.",
        "Give the group an overall silhouette that stays recognisable when filled in solid black.",
        "Check the initials do not spell something unfortunate in your main export markets."
      ],
      example: "Paul Rand redrew the IBM letters in City Medium in 1956 and then, in 1972, cut them into the eight-bar striped version that IBM still uses unchanged. IBM's own history page records both dates and gives the corporate blue as Pantone 2718C.",
      numbers: "IBM eight-bar logotype introduced 1972, sometimes rendered in thirteen bars; IBM Blue given as Pantone 2718C.",
      pitfall: "Stripes, gradients or cut-outs that vanish at small sizes. Rand's eight-bar mark survives because the bars are heavy enough to hold at a few millimetres, which is a decision, not luck.",
      source: "IBM corporate history, The IBM logo; Paul Rand (1956, 1972)",
      verify: {
        status: "verified",
        note: "IBM's own logo history page was read this session. It records that Rand was hired in 1956 and replaced the earlier Beton Bold lettering with City Medium, that he created the eight-bar logo in 1972, rendered in eight and sometimes thirteen horizontal lines, and that IBM Blue is identified as Pantone PMS 2718C."
      },
      belongs: {
        verdict: "core",
        why: "A standard structural option and the usual answer when the legal name is far longer than the working name."
      },
      related: [824, 833, 837]
    },
    {
      n: 826,
      title: "Pictorial mark",
      aka: ["Brand symbol", "Iconic mark"],
      oneLine: "A recognisable object, simplified, standing in for the brand.",
      demo: {
        caption: "One leaf, three reductions. The middle one is the mark; the third has lost the points that made it a leaf.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 96\"><g transform=\"translate(6,0)\"><path class=\"s\" d=\"M40 6 C 66 20, 66 54, 40 70 C 14 54, 14 20, 40 6 Z\"/><path class=\"s-mute\" d=\"M40 8 V68\"/><path class=\"s-mute\" d=\"M40 22 L27 32\"/><path class=\"s-mute\" d=\"M40 22 L53 32\"/><path class=\"s-mute\" d=\"M40 34 L25 44\"/><path class=\"s-mute\" d=\"M40 34 L55 44\"/><path class=\"s-mute\" d=\"M40 46 L29 54\"/><path class=\"s-mute\" d=\"M40 46 L51 54\"/></g><g transform=\"translate(110,0)\"><path class=\"f\" d=\"M40 6 C 66 20, 66 54, 40 70 C 14 54, 14 20, 40 6 Z\"/><path class=\"s\" style=\"stroke:var(--paper-raised);stroke-width:3\" d=\"M40 12 V64\"/></g><g transform=\"translate(214,0)\"><ellipse class=\"f\" cx=\"40\" cy=\"38\" rx=\"24\" ry=\"32\"/></g><text class=\"t\" x=\"46\" y=\"90\" text-anchor=\"middle\">every vein drawn</text><text class=\"t\" x=\"150\" y=\"90\" text-anchor=\"middle\">the mark</text><text class=\"t\" x=\"254\" y=\"90\" text-anchor=\"middle\">one cut too many</text></svg></div>"
      },
      what: "A pictorial mark depicts something real: an animal, a fruit, a tool, a building. The object usually has no literal connection to what the organisation sells, and Paul Rand was blunt that it does not need one. What it needs is a silhouette clean enough to survive reproduction and odd enough not to be confused with the next brand along.",
      why: "A picture is easier to remember than a set of letters and it crosses languages without translation. It also gives you an element that can be used on its own, away from the name, once people have learned the pairing.",
      how: [
        "Reduce until removing one more element breaks recognition, then stop.",
        "Design the silhouette first in solid black; detail added later must not be load-bearing.",
        "Avoid objects your whole category already uses, or you are drawing a category sign, not a brand mark.",
        "Plan for the day the mark appears without the name, and make sure it can carry that weight."
      ],
      example: "Apple's apple has nothing to do with computers. Rand made exactly this point in 1991, listing apples and computers alongside the Mercedes star as symbols that work because of what they came to stand for, not because of any depicted link.",
      numbers: "",
      pitfall: "Cramming the object, the initials and a swoosh into one mark. A pictorial mark that has to be explained has lost the advantage it was chosen for.",
      source: "Paul Rand, Logos, Flags, and Escutcheons (1991)",
      verify: {
        status: "verified",
        note: "Read Rand's essay in full on paulrand.design. He writes that the Mercedes symbol has nothing to do with automobiles, that the same can be said about apples and computers, and that a logo derives its meaning from the quality of the thing it symbolizes, not the other way around."
      },
      belongs: {
        verdict: "core",
        why: "One of the basic mark structures, and the one with the strongest recognition advantage once exposure has done its work."
      },
      related: [827, 832, 835]
    },
    {
      n: 827,
      title: "Abstract mark",
      aka: ["Abstract symbol", "Geometric mark"],
      oneLine: "A shape that depicts nothing, carrying meaning only through repeated association.",
      demo: {
        caption: "Three businesses, twice. The house suits only one of them; the invented shape suits all three, because it means nothing yet.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Pictorial mark</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--nowrap\"><svg class=\"db-svg\" viewBox=\"0 0 80 76\" style=\"width:30px\"><path class=\"f\" d=\"M40 8 L72 34 H8 Z\"/><path class=\"f\" d=\"M18 38 H62 V68 H18 Z\"/></svg><span class=\"db-type\" style=\"font-size:13px\">Harlow Legal</span></div><div class=\"db-row db-row--nowrap\"><svg class=\"db-svg\" viewBox=\"0 0 80 76\" style=\"width:30px\"><path class=\"f\" d=\"M40 8 L72 34 H8 Z\"/><path class=\"f\" d=\"M18 38 H62 V68 H18 Z\"/></svg><span class=\"db-type\" style=\"font-size:13px\">Ardent Biotech</span></div><div class=\"db-row db-row--nowrap\"><svg class=\"db-svg\" viewBox=\"0 0 80 76\" style=\"width:30px\"><path class=\"f\" d=\"M40 8 L72 34 H8 Z\"/><path class=\"f\" d=\"M18 38 H62 V68 H18 Z\"/></svg><span class=\"db-type\" style=\"font-size:13px\">Fenwick Removals</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Abstract mark</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--nowrap\"><svg class=\"db-svg\" viewBox=\"0 0 80 76\" style=\"width:30px\"><path class=\"f\" d=\"M12 68 A 48 48 0 0 1 60 20 L60 40 A 28 28 0 0 0 32 68 Z\"/><circle class=\"f\" cx=\"70\" cy=\"60\" r=\"8\"/></svg><span class=\"db-type\" style=\"font-size:13px\">Harlow Legal</span></div><div class=\"db-row db-row--nowrap\"><svg class=\"db-svg\" viewBox=\"0 0 80 76\" style=\"width:30px\"><path class=\"f\" d=\"M12 68 A 48 48 0 0 1 60 20 L60 40 A 28 28 0 0 0 32 68 Z\"/><circle class=\"f\" cx=\"70\" cy=\"60\" r=\"8\"/></svg><span class=\"db-type\" style=\"font-size:13px\">Ardent Biotech</span></div><div class=\"db-row db-row--nowrap\"><svg class=\"db-svg\" viewBox=\"0 0 80 76\" style=\"width:30px\"><path class=\"f\" d=\"M12 68 A 48 48 0 0 1 60 20 L60 40 A 28 28 0 0 0 32 68 Z\"/><circle class=\"f\" cx=\"70\" cy=\"60\" r=\"8\"/></svg><span class=\"db-type\" style=\"font-size:13px\">Fenwick Removals</span></div></div></div></div></div>"
      },
      what: "An abstract mark is invented geometry. It does not show an object, so it starts with no meaning at all and acquires one only through exposure. That is a slower and more expensive route than a pictorial mark, and the payoff is that the shape is legally cleaner, culturally lighter and cannot be mistaken for a category cliche.",
      why: "An abstract shape can be tuned purely for how it reads, without arguing about whether the animal looks right. It also scales and simplifies more predictably than a drawn object.",
      how: [
        "Judge it on silhouette, balance and how it sits next to the wordmark, since there is no subject to fall back on.",
        "Build it from a small number of curves or angles you can describe out loud.",
        "Accept that it will look empty for the first year and budget the exposure to fill it.",
        "Check it against the trade mark register early, because simple geometry is crowded."
      ],
      example: "Carolyn Davidson drew the Nike swoosh in 1971 while a graphic design student at Portland State University, and invoiced 35 US dollars for it. The shape meant nothing on the day it was delivered and now carries the brand on its own without the name.",
      numbers: "Davidson's final invoice for the swoosh was 35 US dollars (1971).",
      pitfall: "Believing the mark will explain the strategy. Rand's position was that a logo derives its meaning from the quality of the thing it symbolises, so an abstract mark attached to a poor product will simply come to mean that.",
      source: "Paul Rand, Logos, Flags, and Escutcheons (1991); Nike swoosh commission, 1971",
      verify: {
        status: "verified",
        note: "Rand's claim read directly in his 1991 essay on paulrand.design. The swoosh commission details are consistent across design-history sources and Nike's own account: 1971, Carolyn Davidson, then a graphic design student at Portland State University, commissioned by Phil Knight, invoiced 35 US dollars. Nike later gave Davidson shares, but the valuations quoted for that gift vary widely between retellings and are left out here."
      },
      belongs: {
        verdict: "core",
        why: "A standard structural option, and the one that most clearly exposes how much of a mark's meaning is bought rather than drawn."
      },
      related: [826, 831, 835]
    },
    {
      n: 828,
      title: "Emblem",
      aka: ["Badge", "Crest", "Seal"],
      oneLine: "A mark where the name sits inside the shape and the two cannot be separated.",
      demo: {
        caption: "Both marks are the same overall width. Enclosing the name inside a roundel cuts the letters to about half the size.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 134\"><text class=\"t\" x=\"60\" y=\"68\" text-anchor=\"middle\" textLength=\"100\" lengthAdjust=\"spacingAndGlyphs\" style=\"font-size:20px;fill:var(--ink)\">MERIDIAN</text><circle class=\"s\" cx=\"250\" cy=\"60\" r=\"50\"/><circle class=\"s-mute\" cx=\"250\" cy=\"60\" r=\"44\"/><path class=\"f\" d=\"M244 32 L256 32 L250 46 Z\"/><text class=\"t\" x=\"250\" y=\"72\" text-anchor=\"middle\" textLength=\"62\" lengthAdjust=\"spacingAndGlyphs\" style=\"font-size:11px;fill:var(--ink)\">MERIDIAN</text><text class=\"t\" x=\"250\" y=\"88\" text-anchor=\"middle\" textLength=\"34\" lengthAdjust=\"spacingAndGlyphs\" style=\"font-size:7px\">EST 1974</text><path class=\"s-accent\" d=\"M10 118 H110 M10 114 V122 M110 114 V122\"/><path class=\"s-accent\" d=\"M200 118 H300 M200 114 V122 M300 114 V122\"/><text class=\"t\" x=\"60\" y=\"133\" text-anchor=\"middle\">same width</text><text class=\"t\" x=\"250\" y=\"133\" text-anchor=\"middle\">same width</text></svg></div>"
      },
      what: "An emblem locks type and symbol into a single enclosed form: a roundel, a shield, a banner, a seal. The name is part of the artwork rather than set beside it. That gives an emblem a strong sense of institution and authority, which is why they dominate in government, universities, sports clubs and anything trading on heritage.",
      why: "The enclosed shape reads as one object, so it holds together on a badge, a patch or a vehicle door where a loose lockup would fall apart. It also signals permanence, which is sometimes exactly the claim.",
      how: [
        "Draw a simplified variant with fewer internal elements for small sizes, and specify the size at which it takes over.",
        "Keep the enclosing shape simple, because it is the part people will recognise at distance.",
        "Set the internal type large enough to survive the reduction the enclosure forces on it.",
        "Decide in advance whether the emblem may ever be broken apart, and write that rule down."
      ],
      example: "The NASA insignia, the blue meatball, was designed by then-NASA employee James Modarelli and adopted in 1959. The letters NASA sit inside the sphere and the whole thing is treated as one indivisible object; the guidelines even specify that it must be centred on the sphere rather than on the artwork as a whole.",
      numbers: "",
      pitfall: "Detail that dies at size. An emblem carrying a founding date, a motto and a ribbon will read as a grey blob on a 24-pixel favicon unless you have drawn the small-size version too.",
      source: "NASA Brand Guidelines; insignia designed by James Modarelli, adopted 1959",
      verify: {
        status: "verified",
        note: "Read NASA's brand guidelines page, which states the insignia was designed by then-NASA employee James Modarelli and adopted for use in 1959, retired between 1976 and 1992, reinstated in 1992, and that it should be centre aligned using its blue sphere rather than object-centred."
      },
      belongs: {
        verdict: "core",
        why: "A distinct structural type with its own failure mode at small sizes, and the default in whole sectors."
      },
      related: [829, 833, 837]
    },
    {
      n: 829,
      title: "Combination mark",
      aka: ["Logo lockup", "Signature"],
      oneLine: "A symbol and a wordmark set in a fixed relationship that is used as one unit.",
      demo: {
        caption: "The same symbol and name three times. On the left three people rebuilt the lockup; on the right one file was supplied.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Rebuilt from parts</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--nowrap\" style=\"gap:6px\"><span class=\"db-sq db-sq--lg\"></span><span class=\"db-specimen\" style=\"font-size:15px\">Meridian</span></div><div class=\"db-row db-row--nowrap\" style=\"gap:18px\"><span class=\"db-sq\"></span><span class=\"db-specimen\" style=\"font-size:15px\">Meridian</span></div><div class=\"db-row db-row--nowrap\" style=\"gap:3px\"><span class=\"db-sq db-sq--lg\"></span><span class=\"db-specimen\" style=\"font-size:19px\">Meridian</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One supplied lockup</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--nowrap\" style=\"gap:10px\"><span class=\"db-sq db-sq--lg\"></span><span class=\"db-specimen\" style=\"font-size:15px\">Meridian</span></div><div class=\"db-row db-row--nowrap\" style=\"gap:10px\"><span class=\"db-sq db-sq--lg\"></span><span class=\"db-specimen\" style=\"font-size:15px\">Meridian</span></div><div class=\"db-row db-row--nowrap\" style=\"gap:10px\"><span class=\"db-sq db-sq--lg\"></span><span class=\"db-specimen\" style=\"font-size:15px\">Meridian</span></div></div></div></div></div>"
      },
      what: "A combination mark keeps the symbol and the name as separate pieces of artwork but freezes the spacing, alignment and relative size between them. The pair travels together until the symbol is well enough known to go out alone. Most identities need more than one arrangement, typically a horizontal version for wide spaces and a stacked version for narrow ones.",
      why: "It gets you the recognition speed of a symbol and the name-teaching of a wordmark at the same time. Freezing the relationship is what stops fifty people rebuilding it fifty slightly different ways.",
      how: [
        "Supply the lockups as finished files and forbid rebuilding them from parts.",
        "Define the alignment against something structural in the mark, not against the bounding box.",
        "Provide horizontal and stacked versions, and say which is preferred.",
        "State the point at which the symbol may be used alone."
      ],
      example: "NASA's preferred identifier configuration places the insignia within its protected space at the upper right of the design border with the agency name aligned to the left edge. In the left-aligned two-line variant the guidelines specify that the x-height of the lower line must align with the baseline of NASA inside the insignia.",
      numbers: "NASA left-aligned configuration: 1.5 N clear space between the vertical divider rule and the insignia; 2 N minimum clear space on the exterior borders of all configurations.",
      pitfall: "Shipping one lockup and letting everyone else improvise the rest. The stacked version you did not draw is the one that ends up on the van.",
      source: "NASA Brand Guidelines, Identifier Configurations",
      verify: {
        status: "verified",
        note: "Read the NASA brand guidelines page directly. It gives the preferred configuration alignment, the x-height to baseline alignment rule for the two-line variant, the 1.5 N divider clearance, and the statement that a minimum clear space of 2 N's should be respected on the exterior borders of all configurations."
      },
      belongs: {
        verdict: "core",
        why: "The commonest structure in practice and the one that generates most of the day-to-day rules in a brand manual."
      },
      related: [824, 826, 838, 840]
    },
    {
      n: 830,
      title: "Dynamic identity",
      aka: ["Generative identity", "Flexible identity", "Living mark"],
      oneLine: "An identity built as a system of variations rather than one fixed mark.",
      demo: {
        caption: "Four outputs of one rule. The nine-cell lattice and the count of three never change; only the placement does.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--centre db-row--loose\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--accent\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span></div><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--accent\"></span><span class=\"db-sq db-sq--mute\"></span></div><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--accent\"></span></div></div><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--accent\"></span></div><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--accent\"></span><span class=\"db-sq db-sq--mute\"></span></div><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--accent\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span></div></div><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--accent\"></span><span class=\"db-sq db-sq--mute\"></span></div><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--accent\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span></div><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--accent\"></span></div></div><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--accent\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span></div><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--accent\"></span></div><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span><span class=\"db-sq db-sq--accent\"></span><span class=\"db-sq db-sq--mute\"></span></div></div></div></div>"
      },
      what: "A dynamic identity replaces the single locked logo with a rule that produces many logos. The rule can be algorithmic, driven by live data, or simply a defined set of slots that different departments fill differently. What stays constant is the underlying structure, not the artwork. The approach became fashionable in the late 2000s and remains a minority choice, because it demands a level of discipline most organisations do not have.",
      why: "It suits organisations whose whole point is variety, and it lets individuals or sub-groups hold a piece of the identity as their own. Done well, the recognisable thing is the grammar rather than the picture.",
      how: [
        "Define what is invariant before you define what varies, and keep the invariant part small and hard.",
        "Build the generator as a tool other people can run, not as a set of files you hand over.",
        "Produce a fixed fallback version for legal, embroidery and anywhere the system cannot reach.",
        "Be honest about the maintenance cost, because a generator with nobody to run it dies quietly."
      ],
      example: "The MIT Media Lab identity of 2011, by Richard The, E Roon Kang and Willy Sengewald, generated over 40,000 permutations of a three-shape mark, one per person, so staff could claim their own version. It was replaced in 2014 by a fixed mark from Pentagram.",
      numbers: "MIT Media Lab 2011 system: over 40,000 permutations.",
      pitfall: "A system nobody can operate after the launch team leaves. The MIT case is instructive precisely because the celebrated generative identity lasted about three years before a fixed mark took over.",
      source: "MIT Media Lab identity, Richard The, E Roon Kang and Willy Sengewald (2011); replaced by Pentagram (2014)",
      verify: {
        status: "verified",
        note: "Checked this session against E Roon Kang's own project page, which states the system generates over 40,000 permutations and credits E Roon Kang, Richard The, and Willy Sengewald for programming and design. Note that Kang's page dates the work 2010 while the identity is generally reported as launched in 2011, for the lab's 25th anniversary; 2011 is used here as the public launch. The 2014 replacement is confirmed to Pentagram, by Michael Bierut with Aron Fay, which reused the earlier system's seven by seven grid to build an ML monogram plus marks for the research groups."
      },
      belongs: {
        verdict: "core",
        why: "A real structural alternative to the fixed mark, with distinct rules and a distinct failure mode that a designer needs to be able to argue about."
      },
      related: [829, 844, 851]
    },
    {
      n: 831,
      title: "Distinctiveness",
      aka: ["Distinctive brand assets", "Ownability"],
      oneLine: "Being immediately identifiable as you, which is not the same as being different.",
      demo: {
        caption: "Same four rivals twice. On the left they all use the triangle, so seeing it names the category, not the brand.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Every rival uses it</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--nowrap\"><span class=\"db-tri\"></span><span class=\"db-type\" style=\"font-size:13px\">Aster</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-tri\"></span><span class=\"db-type\" style=\"font-size:13px\">Kelvin</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-tri\"></span><span class=\"db-type\" style=\"font-size:13px\">Brightwell</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-tri\"></span><span class=\"db-type\" style=\"font-size:13px\">Norlands</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One brand uses it</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--nowrap\"><span class=\"db-tri\"></span><span class=\"db-type\" style=\"font-size:13px\">Aster</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-dot\"></span><span class=\"db-type\" style=\"font-size:13px\">Kelvin</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-sq\"></span><span class=\"db-type\" style=\"font-size:13px\">Brightwell</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-dot db-dot--open\"></span><span class=\"db-type\" style=\"font-size:13px\">Norlands</span></div></div></div></div></div>"
      },
      what: "Paul Rand put distinctiveness first in his 1991 list of what a logo depends on. The Ehrenberg-Bass Institute later made it measurable. Jenni Romaniuk's Building Distinctive Brand Assets (2018) scores any non-name element, a colour, a shape, a character, a sound, on two axes. Fame is the share of category buyers who name your brand when shown the asset without the name. Uniqueness is whether they name only your brand. High on both and the asset is worth protecting; high fame with low uniqueness means you are advertising the category.",
      why: "Distinctiveness is what lets an advertisement, a shelf display or an app icon be attributed to you in the fraction of a second people actually give it. It is a recognition job, not a persuasion job.",
      how: [
        "Audit what you already own before inventing anything, since existing assets usually have a head start.",
        "Test each candidate asset with the name removed; if people cannot attribute it, it is not yet an asset.",
        "Avoid category colours and category shapes, because fame without uniqueness helps your competitors.",
        "Use the same assets long enough for them to build, which usually means longer than the marketing director's tenure."
      ],
      example: "Romaniuk's grid puts assets into four quadrants with an instruction attached to each: high fame and high uniqueness is use or lose, low fame and high uniqueness is investment potential, high fame and low uniqueness is avoid solo use, and low fame and low uniqueness is ignore or test.",
      numbers: "",
      pitfall: "Confusing distinctiveness with differentiation. Byron Sharp's argument in How Brands Grow is that brands compete mainly on being easy to notice and recall rather than on meaningful difference, and this remains actively debated in marketing literature rather than settled.",
      source: "Paul Rand (1991); Jenni Romaniuk, Building Distinctive Brand Assets (2018); Byron Sharp, How Brands Grow (2010)",
      verify: {
        status: "verified",
        note: "Rand's list read in the original essay on paulrand.design, with distinctiveness first of the seven. The fame and uniqueness metrics and the four-quadrant grid checked against multiple independent summaries of Romaniuk's 2018 book, which agree on the definitions and on the four quadrant labels: use or lose, investment potential, avoid solo use, ignore or test. An earlier draft described the low-fame, low-uniqueness quadrant as clutter to be dropped; Romaniuk's own instruction is ignore or test, so the entry now uses her labels. Romaniuk is at the Ehrenberg-Bass Institute and the book is Oxford University Press, 2018. The wider Sharp claim that distinctiveness beats differentiation is flagged as contested rather than presented as settled."
      },
      belongs: {
        verdict: "core",
        why: "It is the first test any mark has to pass, and it is the one criterion in this family that can actually be measured."
      },
      related: [832, 842, 844, 852]
    },
    {
      n: 832,
      title: "Memorability",
      aka: ["Recall", "Recognisability"],
      oneLine: "Whether people can bring the mark to mind, which is mostly bought with exposure.",
      demo: {
        caption: "Eighty-five students drew the Apple logo from memory. The accented dot is the one who got it right.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div></div>"
      },
      what: "Memorability sits in Rand's 1991 list of seven qualities a logo depends on. It is worth being precise about what it means, because recognition and recall are different jobs. People recognise far more than they can reproduce, and even heavy exposure does not produce accurate recall. Blake, Nazarian and Castel tested this directly on the Apple logo in 2015: of 85 undergraduates asked to draw it from memory, one got it right, and fewer than half picked the correct version out of a lineup.",
      why: "Knowing the gap between recognition and recall keeps you honest about what a mark can do. It also tells you which decisions matter: a simple, consistent silhouette survives poor recall, a fussy one does not.",
      how: [
        "Design for recognition at speed rather than for accurate reproduction, because nobody is going to draw your mark.",
        "Hold the same mark still for years; consistency does more for memory than cleverness does.",
        "Test attribution with the name removed rather than asking people whether they like it.",
        "Give the mark one memorable feature instead of five competing ones."
      ],
      example: "The 2015 Apple study is the sharpest available demonstration. Participants were confident before drawing and wrong afterwards, which is a warning about relying on stakeholder recall in research.",
      numbers: "Blake, Nazarian and Castel (2015): 1 of 85 participants drew the Apple logo correctly; fewer than half identified the correct logo among alternatives.",
      pitfall: "Treating memorability as a lever you can pull in the drawing. It is an outcome of exposure and consistency, and a brief that asks for a memorable logo has not asked for anything actionable.",
      source: "Paul Rand (1991); A. B. Blake, M. Nazarian and A. D. Castel, The Apple of the mind's eye, Quarterly Journal of Experimental Psychology (2015)",
      verify: {
        status: "verified",
        note: "Rand's seven qualities read in the original essay: distinctiveness, visibility, useability, memorability, universality, durability, timelessness. The Apple study was re-checked this session against the publisher's record and the UCLA press release: Adam B. Blake, Meenely Nazarian and Alan D. Castel, Quarterly Journal of Experimental Psychology vol 68 issue 5, pages 858 to 865, 2015. The abstract states that only 1 participant of 85 recalled the logo correctly and that fewer than half identified it correctly among alternatives. UCLA's newsroom release of 26 March 2015 quotes Castel on the gap between confidence before drawing and performance. An earlier draft gave a February 2015 online publication date; the publisher's record gives first online publication as 1 May 2015, so the February date has been dropped."
      },
      belongs: {
        verdict: "core",
        why: "A named criterion in the canon that a designer should know, chiefly so they stop promising it and start measuring attribution instead."
      },
      related: [831, 836, 852]
    },
    {
      n: 833,
      title: "Scalability",
      aka: ["Size range", "Responsive logo"],
      oneLine: "The mark has to work from a favicon to a building, so it needs more than one drawing.",
      demo: {
        caption: "The layer is 108dp, the mask keeps 72dp and only the 66dp circle is guaranteed. The bar runs outside the mask.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 150\"><rect class=\"f-mute\" x=\"40\" y=\"66\" width=\"120\" height=\"16\"/><rect class=\"s-mute\" stroke-dasharray=\"4 4\" x=\"40\" y=\"15\" width=\"120\" height=\"120\"/><rect class=\"s\" x=\"60\" y=\"35\" width=\"80\" height=\"80\" rx=\"20\"/><circle class=\"s-accent\" stroke-dasharray=\"4 4\" cx=\"100\" cy=\"75\" r=\"36.5\"/><path class=\"s-mute\" d=\"M160 15 L176 28\"/><path class=\"s-mute\" d=\"M140 36 L176 72\"/><path class=\"s-mute\" d=\"M126 101 L176 116\"/><text class=\"t\" x=\"180\" y=\"31\">108 dp layer</text><text class=\"t\" x=\"180\" y=\"75\">72 dp mask</text><text class=\"t\" x=\"180\" y=\"119\">66 dp safe zone</text></svg></div>"
      },
      what: "Scalability means a set of drawings, each optimised for a size band, with defined switchover points between them. One file scaled up and down will not do it. Detail that reads at poster size closes up at 16 pixels; hairlines that look elegant on screen disappear in embroidery. Platform specifications make the small end concrete: Android adaptive icons are supplied as 108 by 108 dp layers, masked to at most 72 by 72 dp, with a 66 by 66 dp safe zone that is never clipped.",
      why: "Working out the size range in advance is what stops someone else deciding it badly at eleven at night. It also protects the mark's character, because the alternative is a blurred version of the large drawing.",
      how: [
        "Define two or three size bands and draw a version for each, with a stated pixel or millimetre switchover.",
        "Design the smallest version first, then add detail upwards rather than removing it downwards.",
        "Test on the actual platforms, since app and site icons get cropped by masks you do not control.",
        "Print at final size on the worst paper you will realistically use."
      ],
      example: "Android's adaptive icon system supplies foreground and background layers at 108 by 108 dp. The device manufacturer applies its own mask, so anything outside the 66 by 66 dp safe zone may be cut off entirely.",
      numbers: "Android adaptive icons: layers 108 x 108 dp, masked to a maximum of 72 x 72 dp, with a 66 x 66 dp safe zone never clipped by an OEM mask. Material system icons are displayed at 24 x 24 dp.",
      pitfall: "One SVG for everything. It will look correct in the guidelines document and wrong in the app switcher, which is where most people will actually see it.",
      source: "Android Developers, adaptive icon specification; Google, Material Design system icon guidance",
      verify: {
        status: "verified",
        note: "Read the Android Developers adaptive icon page this session: all layers are sized 108 by 108 dp, the inner 66 by 66 dp is the safe zone guaranteed never to be clipped by an OEM mask, and the outer 18 dp on each side is reserved for masking and visual effects, which is where the 72 by 72 dp masked area comes from. Material system icon size of 24 by 24 dp read from the Material Design documentation."
      },
      belongs: {
        verdict: "core",
        why: "A hard production constraint with published thresholds, and one of the few logo criteria you can fail objectively."
      },
      related: [834, 837, 838, 847]
    },
    {
      n: 834,
      title: "Reproducibility",
      aka: ["Production tolerance", "Media resilience"],
      oneLine: "The mark must survive every process it will be put through, not just the good ones.",
      demo: {
        caption: "One drawing, two stroke weights, at the same size. The hairline version is already breaking up before anything is printed.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Hairline strokes</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><svg class=\"db-svg\" viewBox=\"0 0 90 90\" style=\"width:90px\"><circle class=\"s\" style=\"stroke-width:0.4\" cx=\"45\" cy=\"45\" r=\"36\"/><path class=\"s\" style=\"stroke-width:0.4\" d=\"M45 20 L69 62 L21 62 Z\"/><circle class=\"s\" style=\"stroke-width:0.4\" cx=\"45\" cy=\"51\" r=\"7\"/></svg></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Minimum weight held</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><svg class=\"db-svg\" viewBox=\"0 0 90 90\" style=\"width:90px\"><circle class=\"s\" style=\"stroke-width:3\" cx=\"45\" cy=\"45\" r=\"36\"/><path class=\"s\" style=\"stroke-width:3\" d=\"M45 20 L69 62 L21 62 Z\"/><circle class=\"s\" style=\"stroke-width:3\" cx=\"45\" cy=\"51\" r=\"7\"/></svg></div></div></div></div>"
      },
      what: "Rand's conclusion in 1991 was blunt: the only thing mandatory, it seems, is that a logo be attractive, reproducible in one color and in exceedingly small sizes. Reproducibility covers everything downstream of the drawing, including single-colour printing, embroidery, engraving, vinyl cutting, screen printing on dark cloth, laser etching and low-quality photocopying. Each of these has a minimum stroke weight and a minimum gap it can hold.",
      why: "The identity is applied by people you will never meet, using equipment you will never see. A mark that only works in the studio conditions it was drawn in generates a decade of bad applications.",
      how: [
        "Supply an approved single-colour version, a reversed version and a version with a keyline for difficult backgrounds.",
        "Set a minimum stroke weight and a minimum counter size that survive the crudest process on your list.",
        "Ask the actual suppliers what they can hold before you finalise, not after.",
        "Give each approved version a name and a use case in the manual so nobody has to guess."
      ],
      example: "NASA supplies the insignia in four variations: full colour, one colour, one colour with a white rule, and mono-colour with a white rule, and instructs users to choose based on production requirements, media qualities, visibility and approved usage. The full-colour version may never appear with a white rule and may not be reversed.",
      numbers: "",
      pitfall: "Discovering the gradient at the point of ordering embroidered polo shirts. Thread has no gradients, and the factory will invent a solution for you.",
      source: "Paul Rand, Logos, Flags, and Escutcheons (1991); NASA Brand Guidelines",
      verify: {
        status: "verified",
        note: "Rand quotation read verbatim from his 1991 essay on paulrand.design. The four insignia variations and the rules on white rules and reversal read directly from NASA's current brand guidelines page."
      },
      belongs: {
        verdict: "core",
        why: "A production constraint that decides whether the identity holds up in the world, and one Rand ranked above almost everything else."
      },
      related: [833, 836, 839]
    },
    {
      n: 835,
      title: "Appropriateness",
      aka: ["Fit to sector", "Relevance"],
      oneLine: "The mark should suit what the organisation is, though it need not depict what it does.",
      demo: {
        caption: "The same name twice. Nothing in the words has changed; the left-hand setting belongs to a different kind of organisation.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Set like a demolition firm</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><span class=\"db-type db-type--mono\" style=\"font-size:13px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase\">Meadow House Hospice</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Set like a hospice</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><span class=\"db-specimen\" style=\"font-size:19px\">Meadow House Hospice</span></div></div></div></div>"
      },
      what: "Two claims get muddled here. The first, which holds, is that the register of the identity should match the organisation: a children's hospice and a demolition contractor should not look interchangeable. The second, which does not hold, is that the mark should show the business. Rand took the harder line: he wrote that the subject matter of a logo is of relatively little importance, that appropriateness does not always play a significant role, and that a one-to-one relationship between a symbol and what is symbolised is often impossible and sometimes objectionable.",
      why: "Getting the register right stops the identity fighting the product. Dropping the demand for literal depiction frees you to design a mark that actually works, rather than a small illustration of a service.",
      how: [
        "Match register, not subject: weight, colour temperature, formality, level of finish.",
        "Show the mark to people in the sector and ask what kind of organisation it suggests, not whether they like it.",
        "Resist the request to put the product in the logo unless the product is genuinely the icon.",
        "Check appropriateness across all the markets the brand will trade in, since register is culturally read."
      ],
      example: "Rand's own examples make the point. The Mercedes star has nothing to do with cars, the Lacoste crocodile nothing to do with sportswear, and a bat is the mark of authenticity for Bacardi rum.",
      numbers: "",
      pitfall: "The literal brief. Asking for a logo that shows what we do produces a category sign, and category signs are the least distinctive marks in any market.",
      source: "Paul Rand, Logos, Flags, and Escutcheons (1991)",
      verify: {
        status: "verified",
        note: "Read Rand's essay in full. He writes that the subject matter of a logo is of relatively little importance, that nor, it seems, does appropriateness always play a significant role, and gives the Mercedes, Lacoste and Bacardi examples in the closing section."
      },
      belongs: {
        verdict: "core",
        why: "A genuine criterion that a designer applies on every job, and one where the popular version of the rule is stronger than the original author's."
      },
      related: [826, 827, 854]
    },
    {
      n: 836,
      title: "Single-colour test",
      aka: ["One-colour test", "Black-only test"],
      oneLine: "Flatten the mark to one colour; if it stops working, the colour was doing the drawing's job.",
      demo: {
        caption: "Both marks flattened to one colour. Separated by hue, the two shapes merge; separated by a gap, they hold.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Separated by hue</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><svg class=\"db-svg\" viewBox=\"0 0 90 74\" style=\"width:90px\"><circle class=\"f-accent\" cx=\"32\" cy=\"32\" r=\"24\"/><circle class=\"f\" cx=\"58\" cy=\"32\" r=\"24\"/><text class=\"t\" x=\"45\" y=\"70\" text-anchor=\"middle\">two colours</text></svg><svg class=\"db-svg\" viewBox=\"0 0 90 74\" style=\"width:90px\"><circle class=\"f\" cx=\"32\" cy=\"32\" r=\"24\"/><circle class=\"f\" cx=\"58\" cy=\"32\" r=\"24\"/><text class=\"t\" x=\"45\" y=\"70\" text-anchor=\"middle\">one colour</text></svg></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Separated by form</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><svg class=\"db-svg\" viewBox=\"0 0 90 74\" style=\"width:90px\"><circle class=\"f-accent\" cx=\"26\" cy=\"32\" r=\"19\"/><circle class=\"f\" cx=\"68\" cy=\"32\" r=\"19\"/><text class=\"t\" x=\"45\" y=\"70\" text-anchor=\"middle\">two colours</text></svg><svg class=\"db-svg\" viewBox=\"0 0 90 74\" style=\"width:90px\"><circle class=\"f\" cx=\"26\" cy=\"32\" r=\"19\"/><circle class=\"f\" cx=\"68\" cy=\"32\" r=\"19\"/><text class=\"t\" x=\"45\" y=\"70\" text-anchor=\"middle\">one colour</text></svg></div></div></div></div>"
      },
      what: "The test is simple. Set the mark in solid black on white, and again in solid white on black, and check that every element still reads. Rand named single-colour reproduction as one of only two mandatory requirements. Failing the test usually means shapes are separated by hue rather than by form, so once hue goes the shapes merge.",
      why: "Single colour is the condition the mark will meet most often outside your control: fax, stamp, embossing, invoice footers, newspaper listings, laser engraving, a partner's monochrome supplier grid. It is also a fast diagnostic for whether the drawing is sound.",
      how: [
        "Do the black and white test before showing any colour version to the client.",
        "Where two coloured shapes touch, add a physical gap or a change in form so they separate without hue.",
        "Supply the approved one-colour artwork as a file, not as an instruction to desaturate.",
        "Repeat the test at your smallest specified size, since the two failures compound."
      ],
      example: "NASA's insignia set includes a one-colour version and a one-colour version with a white rule, and the guidelines direct users to pick according to media and visibility rather than preference.",
      numbers: "",
      pitfall: "Passing the test by converting to greyscale rather than to flat single colour. Greyscale keeps tonal separation that a rubber stamp or an engraving will not give you.",
      source: "Paul Rand, Logos, Flags, and Escutcheons (1991); NASA Brand Guidelines",
      verify: {
        status: "verified",
        note: "Rand's requirement quoted verbatim from the 1991 essay: reproducible in one color and in exceedingly small sizes. NASA's one-colour and one-colour-with-white-rule variants read from its current brand guidelines page."
      },
      belongs: {
        verdict: "core",
        why: "A cheap, decisive craft test with a named origin, and one that catches a common structural fault early."
      },
      related: [834, 837, 842]
    },
    {
      n: 837,
      title: "Small-size test",
      aka: ["Favicon test", "Thumbnail test"],
      oneLine: "Print or render the mark at its smallest real use and see what survives.",
      demo: {
        caption: "One drawing at 64, 32, 24 and 16 pixels. The ring and the ticks die two steps before the triangle does.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--bottom db-row--loose db-row--centre\"><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 64 64\" style=\"width:64px\"><circle class=\"s\" style=\"stroke-width:2.5\" cx=\"32\" cy=\"32\" r=\"29\"/><circle class=\"s-mute\" cx=\"32\" cy=\"32\" r=\"22\"/><path class=\"s-mute\" d=\"M32 3 V8 M61 32 H56 M32 61 V56 M3 32 H8 M52.5 11.5 L49 15 M52.5 52.5 L49 49 M11.5 52.5 L15 49 M11.5 11.5 L15 15\"/><path class=\"f\" d=\"M32 19 L44 43 L20 43 Z\"/></svg><span class=\"db-note\">64 px</span></div><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 64 64\" style=\"width:32px\"><circle class=\"s\" style=\"stroke-width:2.5\" cx=\"32\" cy=\"32\" r=\"29\"/><circle class=\"s-mute\" cx=\"32\" cy=\"32\" r=\"22\"/><path class=\"s-mute\" d=\"M32 3 V8 M61 32 H56 M32 61 V56 M3 32 H8 M52.5 11.5 L49 15 M52.5 52.5 L49 49 M11.5 52.5 L15 49 M11.5 11.5 L15 15\"/><path class=\"f\" d=\"M32 19 L44 43 L20 43 Z\"/></svg><span class=\"db-note\">32 px</span></div><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 64 64\" style=\"width:24px\"><circle class=\"s\" style=\"stroke-width:2.5\" cx=\"32\" cy=\"32\" r=\"29\"/><circle class=\"s-mute\" cx=\"32\" cy=\"32\" r=\"22\"/><path class=\"s-mute\" d=\"M32 3 V8 M61 32 H56 M32 61 V56 M3 32 H8 M52.5 11.5 L49 15 M52.5 52.5 L49 49 M11.5 52.5 L15 49 M11.5 11.5 L15 15\"/><path class=\"f\" d=\"M32 19 L44 43 L20 43 Z\"/></svg><span class=\"db-note\">24 px</span></div><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 64 64\" style=\"width:16px\"><circle class=\"s\" style=\"stroke-width:2.5\" cx=\"32\" cy=\"32\" r=\"29\"/><circle class=\"s-mute\" cx=\"32\" cy=\"32\" r=\"22\"/><path class=\"s-mute\" d=\"M32 3 V8 M61 32 H56 M32 61 V56 M3 32 H8 M52.5 11.5 L49 15 M52.5 52.5 L49 49 M11.5 52.5 L15 49 M11.5 11.5 L15 15\"/><path class=\"f\" d=\"M32 19 L44 43 L20 43 Z\"/></svg><span class=\"db-note\">16 px</span></div></div></div>"
      },
      what: "The other half of Rand's mandatory pair: a logo must be reproducible in exceedingly small sizes. In practice that means checking at the specific sizes the mark will actually meet, which today usually means a browser tab icon, an app icon, a social avatar and a business card. Screen sizes are fixed and published, so this is a measurable test rather than a matter of taste.",
      why: "Small is the default condition now. A tab, an avatar and an app icon are where most people meet a mark day to day, and one that fails there fails at the moment of recognition.",
      how: [
        "Render at the real pixel sizes and look at the result on a phone, not zoomed on a monitor.",
        "Draw a reduced version with fewer elements, and specify the size at which it takes over.",
        "Align strokes to whole pixels at the target size rather than scaling down a large drawing.",
        "Check the mark inside a circular crop, because avatars are masked without asking you."
      ],
      example: "Material Design puts system icons on a 24 by 24 dp grid with content limited to a 20 by 20 dp live area and 2 dp of padding all round. That is the space a mark has to work inside once it becomes an interface element.",
      numbers: "Material system icons: 24 x 24 dp grid, 20 x 20 dp live area, 2 dp padding. Android adaptive icon safe zone: 66 x 66 dp within a 108 x 108 dp layer.",
      pitfall: "Judging the small version at 400 per cent zoom. Everything looks fine at 400 per cent; the failure only appears at one to one on a real screen.",
      source: "Paul Rand (1991); Google, Material Design system icon guidance",
      verify: {
        status: "verified",
        note: "Rand's phrase quoted from the 1991 essay. The 24 dp grid, 20 dp live area and 2 dp padding read directly from Google's Material Design system icon documentation."
      },
      belongs: {
        verdict: "core",
        why: "A measurable acceptance test tied to published platform sizes, and the condition most brand marks now spend most of their life in."
      },
      related: [833, 836, 847]
    },
    {
      n: 838,
      title: "Clear space and minimum size",
      aka: ["Exclusion zone", "Protected area", "Isolation zone"],
      oneLine: "A stated empty margin around the mark and a size below which it must not be used.",
      demo: {
        caption: "The margin is one N on every side, and N is the wordmark's own height, so the rule scales.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 150\"><rect class=\"s-accent\" stroke-dasharray=\"4 4\" x=\"40\" y=\"34\" width=\"180\" height=\"80\"/><rect class=\"s-mute\" x=\"40\" y=\"34\" width=\"20\" height=\"20\"/><text class=\"t\" x=\"50\" y=\"48\" text-anchor=\"middle\">N</text><rect class=\"s-mute\" x=\"200\" y=\"64\" width=\"20\" height=\"20\"/><text class=\"t\" x=\"210\" y=\"78\" text-anchor=\"middle\">N</text><circle class=\"f-accent\" cx=\"80\" cy=\"74\" r=\"20\"/><rect class=\"f\" x=\"108\" y=\"64\" width=\"92\" height=\"20\"/><rect class=\"f-mute\" x=\"244\" y=\"54\" width=\"66\" height=\"6\"/><rect class=\"f-mute\" x=\"244\" y=\"68\" width=\"66\" height=\"6\"/><rect class=\"f-mute\" x=\"244\" y=\"82\" width=\"44\" height=\"6\"/><text class=\"t\" x=\"244\" y=\"104\">other content</text><text class=\"t\" x=\"40\" y=\"134\">N is the wordmark's own height</text></svg></div>"
      },
      what: "Clear space is a defined region around the mark that nothing else may enter, measured by convention in a unit taken from the mark itself so the rule scales automatically. Minimum size is the matching floor: a stated width below which the mark is dropped or swapped for a simplified version. Both exist because the mark will be placed by people with no design training and no time.",
      why: "A margin defined in the mark's own units survives every reproduction size without recalculation. The minimum size stops the mark being used at a scale where it turns to mush and takes the brand's credibility with it.",
      how: [
        "Pick a measuring unit from inside the mark, such as a letter height or a counter width.",
        "Show the rule as a diagram, not a sentence, because the diagram is what people copy.",
        "State the minimum in both millimetres and pixels, since one audience never uses the other.",
        "Say what happens below the minimum: which reduced version takes over, or whether the mark is omitted."
      ],
      example: "NASA measures clear space in Ns taken from its own wordmark. The insignia's protected area is a minimum of 1 N height from the edge of the sphere; identifier configurations require 2 N on the exterior borders; the left-aligned configuration requires 1.5 N between the divider rule and the insignia.",
      numbers: "NASA insignia protected space: minimum 1 N from the edge of the sphere. Identifier configurations: 2 N minimum on exterior borders. Left-aligned configuration: 1.5 N between vertical divider and insignia.",
      pitfall: "Writing the rule and never enforcing it. Clear space fails at the edges of layouts, where the mark gets pushed against a trim edge or a photograph because nobody left room for it in the grid.",
      source: "NASA Brand Guidelines, Protected space and minimum size",
      verify: {
        status: "verified",
        note: "All three figures read directly from NASA's current brand guidelines page: the minimum width for the protected area is 1N height from the edge of the sphere; a minimum clear space of 2 N's should be respected on the exterior borders of all configurations; a clear space of 1.5 N's should be used between the vertical line divider and the meatball. NASA's page states the minimum-size requirement is illustrated in a diagram but does not give a numeric floor in the text, so none is claimed here."
      },
      belongs: {
        verdict: "core",
        why: "The single most-used page in any brand manual, and a rule with a real mechanical purpose rather than a decorative one."
      },
      related: [829, 833, 839, 852]
    },
    {
      n: 839,
      title: "Misuse rules",
      aka: ["Logo don'ts", "Violations page", "Incorrect usage"],
      oneLine: "A short illustrated list of the specific wrong things people will otherwise do to the mark.",
      demo: {
        caption: "One approved mark and four things people will do to it, each one named and crossed out.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--centre\"><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 80 50\" style=\"width:92px\"><circle class=\"f-accent\" cx=\"20\" cy=\"24\" r=\"11\"/><rect class=\"f\" x=\"36\" y=\"17\" width=\"36\" height=\"14\"/></svg><span class=\"db-note\">approved</span></div><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 80 50\" style=\"width:92px\"><g transform=\"translate(40 24) scale(1.2 1) translate(-40 -24)\"><circle class=\"f-accent\" cx=\"20\" cy=\"24\" r=\"11\"/><rect class=\"f\" x=\"36\" y=\"17\" width=\"36\" height=\"14\"/></g><path class=\"s\" style=\"stroke:var(--sig-disputed)\" d=\"M8 46 L72 4\"/></svg><span class=\"db-note\">stretched</span></div><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 80 50\" style=\"width:92px\"><g transform=\"translate(40 24) scale(1 0.55) translate(-40 -24)\"><circle class=\"f-accent\" cx=\"20\" cy=\"24\" r=\"11\"/><rect class=\"f\" x=\"36\" y=\"17\" width=\"36\" height=\"14\"/></g><path class=\"s\" style=\"stroke:var(--sig-disputed)\" d=\"M8 46 L72 4\"/></svg><span class=\"db-note\">squashed</span></div><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 80 50\" style=\"width:92px\"><g transform=\"rotate(-14 40 24)\"><circle class=\"f-accent\" cx=\"20\" cy=\"24\" r=\"11\"/><rect class=\"f\" x=\"36\" y=\"17\" width=\"36\" height=\"14\"/></g><path class=\"s\" style=\"stroke:var(--sig-disputed)\" d=\"M8 46 L72 4\"/></svg><span class=\"db-note\">rotated</span></div><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 80 50\" style=\"width:92px\"><circle class=\"s\" cx=\"20\" cy=\"24\" r=\"11\"/><rect class=\"s\" x=\"36\" y=\"17\" width=\"36\" height=\"14\"/><path class=\"s\" style=\"stroke:var(--sig-disputed)\" d=\"M8 46 L72 4\"/></svg><span class=\"db-note\">outlined</span></div></div></div>"
      },
      what: "The misuse page shows the mark being abused and crosses it out: stretched, skewed, rotated, recoloured, outlined, shadowed, reversed when it should not be, placed on a clashing background. It works because it is visual and specific. A written instruction to use the logo correctly changes nothing; a picture of the exact mistake, marked as wrong, changes quite a lot.",
      why: "Most brand damage is not one dramatic breach, it is a hundred small distortions applied by people who thought they were helping. Naming each one removes the ambiguity.",
      how: [
        "Base the list on real mistakes already made with this mark, not on a generic checklist.",
        "Show each violation at the size it usually happens, and cross it out clearly.",
        "Cover the awkward cases: photographic backgrounds, dark mode, partner grids, merchandise.",
        "Keep the list short enough that people actually read it, and add to it as new abuses appear."
      ],
      example: "NASA lists its insignia violations in a single illustrated block and adds specific written rules: the full-colour insignia can never appear with a white rule, may not be displayed in reverse, and may not sit on backgrounds with clashing colours or similar saturation that reduce legibility. It also states plainly that the list is not comprehensive.",
      numbers: "",
      pitfall: "A misuse page so long it reads as a legal document. Twelve clear crossed-out examples beat forty, because the point is recall at the moment of placement."
      ,
      source: "NASA Brand Guidelines, Insignia Violations",
      verify: {
        status: "verified",
        note: "Read NASA's brand guidelines page, which carries an Insignia Violations block with the footnote that the list is not comprehensive and subject to changes and additions, plus explicit rules that the full-colour insignia can never appear with a white rule, may not be displayed in reverse, and should not be used on clashing or similarly saturated backgrounds."
      },
      belongs: {
        verdict: "core",
        why: "A standard, load-bearing part of every identity delivery, and the part that determines whether the rest of the manual survives contact with users."
      },
      related: [838, 851, 852]
    },
    {
      n: 840,
      title: "Lockups and endorsement",
      aka: ["Co-branding lockups", "Endorsed lockup", "Ingredient branding"],
      oneLine: "Fixed arrangements for the mark next to another name, division, partner or product.",
      demo: {
        caption: "The same mark and name paired by four teams, against the one published lockup all four should have used.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Built from parts, four teams</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-row db-row--nowrap\" style=\"gap:3px\"><span class=\"db-dot db-dot--lg db-dot--accent\"></span><span class=\"db-type\" style=\"font-size:15px\">Harbour Rail</span></span><span class=\"db-row db-row--nowrap\" style=\"gap:18px\"><span class=\"db-dot db-dot--accent\"></span><span class=\"db-type\" style=\"font-size:12px\">Harbour Rail</span></span><span class=\"db-row db-row--nowrap db-row--baseline\" style=\"gap:8px\"><span class=\"db-dot db-dot--lg db-dot--accent\"></span><span class=\"db-type\" style=\"font-size:18px\">Harbour Rail</span></span><span class=\"db-row db-row--nowrap\" style=\"gap:8px\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-type db-type--mono\" style=\"font-size:12px\">Harbour Rail</span></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One published lockup, four uses</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-row db-row--nowrap\" style=\"gap:8px\"><span class=\"db-dot db-dot--lg db-dot--accent\"></span><span class=\"db-type\" style=\"font-size:15px\">Harbour Rail</span></span><span class=\"db-row db-row--nowrap\" style=\"gap:8px\"><span class=\"db-dot db-dot--lg db-dot--accent\"></span><span class=\"db-type\" style=\"font-size:15px\">Harbour Rail</span></span><span class=\"db-row db-row--nowrap\" style=\"gap:8px\"><span class=\"db-dot db-dot--lg db-dot--accent\"></span><span class=\"db-type\" style=\"font-size:15px\">Harbour Rail</span></span><span class=\"db-row db-row--nowrap\" style=\"gap:8px\"><span class=\"db-dot db-dot--lg db-dot--accent\"></span><span class=\"db-type\" style=\"font-size:15px\">Harbour Rail</span></span></div></div></div></div>"
      },
      what: "A lockup is the frozen relationship between the main mark and something else: a department name, a sub-brand, a partner logo, an ingredient badge. Endorsement is the particular case where a parent brand vouches for a smaller one and the visual hierarchy has to make clear which is which. Without published lockups, every department invents its own, and within two years the identity has forked.",
      why: "Lockups decide who is seen to own what. They also settle the sizing argument in advance, which is the argument that otherwise happens on every co-branded piece of work.",
      how: [
        "Publish approved lockups as finished files and forbid people building their own from parts.",
        "Set relative sizes by optical weight, not by matching bounding boxes.",
        "Give partner logos a fixed slot and a maximum size, since partners always want more.",
        "Define the alignment against a structural feature such as a baseline or a sphere edge."
      ],
      example: "Intel's ingredient branding campaign, which began in 1991, put an Intel badge on other manufacturers' machines. It is endorsement running the other way: the component maker's mark endorsing the finished product, in a slot with defined placement rules.",
      numbers: "",
      pitfall: "Letting the sub-brand grow. Endorsement hierarchies drift upward over time as each division argues for more prominence, and nobody notices until the parent mark has become a footnote.",
      source: "NASA Brand Guidelines, Identifier Configurations; Intel Inside campaign (from 1991)",
      verify: {
        status: "verified",
        note: "NASA's identifier configuration rules, including alignment and clear-space figures, read from its brand guidelines page; it also states the logotype should never appear without the insignia in appropriate proximity except on commercial merchandise. Intel Inside launched in 1991 and is confirmed as the landmark ingredient-branding case by Intel's own corporate history pages as well as secondary sources; it ran as a co-operative programme, with Intel subsidising OEM advertising that carried the badge."
      },
      belongs: {
        verdict: "core",
        why: "A concrete drawing and specification task that appears in almost every identity project of any size."
      },
      related: [829, 838, 841]
    },
    {
      n: 841,
      title: "Brand architecture (branded house, endorsed, house of brands)",
      aka: ["Portfolio structure", "Brand relationship spectrum", "Monolithic, endorsed, branded"],
      oneLine: "How the marks in a portfolio relate: one master brand, endorsed sub-brands, or separate brands.",
      demo: {
        caption: "One owner, three businesses, three structures. Watch where the parent name goes and at what size.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--top db-row--centre\"><div class=\"db-col db-col--tight\" style=\"width:170px\"><span class=\"db-note\">branded house</span><div class=\"db-card\"><span class=\"db-type\" style=\"font-size:13px\"><b>Harbour</b> Rail</span></div><div class=\"db-card\"><span class=\"db-type\" style=\"font-size:13px\"><b>Harbour</b> Air</span></div><div class=\"db-card\"><span class=\"db-type\" style=\"font-size:13px\"><b>Harbour</b> Freight</span></div></div><div class=\"db-col db-col--tight\" style=\"width:170px\"><span class=\"db-note\">endorsed</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Skyline</span><span class=\"db-note\">a Harbour company</span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Aerowest</span><span class=\"db-note\">a Harbour company</span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Portway</span><span class=\"db-note\">a Harbour company</span></div></div></div><div class=\"db-col db-col--tight\" style=\"width:170px\"><span class=\"db-note\">house of brands</span><div class=\"db-card\"><span class=\"db-type\" style=\"font-size:13px\">Skyline</span></div><div class=\"db-card\"><span class=\"db-type\" style=\"font-size:13px\">Aerowest</span></div><div class=\"db-card\"><span class=\"db-type\" style=\"font-size:13px\">Portway</span></div><span class=\"db-note\">owner nowhere on the pack</span></div></div></div>"
      },
      what: "Wally Olins set out three structures in 1989: monolithic, where everything carries one name; endorsed, where sub-brands carry their own name plus a visible parent endorsement; and branded, where the products stand alone and the owner is invisible. David Aaker and Erich Joachimsthaler later stretched this into a brand relationship spectrum in Brand Leadership (2000), adding sub-brands as an intermediate step and describing the ends as branded house and house of brands.",
      why: "The architecture decides how many marks you have to draw, how they nest, and how much equity transfers when something new launches or something goes wrong. It is a design brief disguised as an org chart.",
      how: [
        "Draw the current architecture as it actually is before proposing what it should be, including the strays.",
        "Match the visual system to the chosen structure: shared marks for a branded house, deliberate separation for a house of brands.",
        "Decide the endorsement rule once, in writing, and apply it to every new launch.",
        "Set a naming rule for new products so the architecture does not erode one launch at a time."
      ],
      example: "NASA runs an endorsed structure with a hard cap. Mission and project identifiers exist but cannot contain the insignia or logotype, and only two principal identifiers, Artemis and the James Webb Space Telescope, are approved for public-facing use alongside the insignia.",
      numbers: "Olins (1989) sets three structures: monolithic, endorsed, branded.",
      pitfall: "Choosing a house of brands because it is more fun to design and then failing to fund it. Separate brands need separate awareness budgets, and without them you have a portfolio of unknown names."
      ,
      source: "Wally Olins, Corporate Identity (1989); David A. Aaker and Erich Joachimsthaler, Brand Leadership (2000)",
      verify: {
        status: "verified",
        note: "Olins's three-way split into monolithic, endorsed and branded is consistently attributed to his 1989 Corporate Identity: Making Business Strategy Visible Through Design across academic corporate-communication sources. The brand relationship spectrum, running from house of brands to branded house, is confirmed to Aaker and Joachimsthaler, The Brand Relationship Spectrum: The Key to the Brand Architecture Challenge, California Management Review 42(4), 2000, pages 8 to 23, and to Brand Leadership (2000). NASA's brand guidelines page states that the only two approved principal identifiers are for Artemis and the James Webb Space Telescope; the further restriction on mission identifiers containing the insignia or logotype is the guidelines' own framing and was not separately quoted."
      },
      belongs: {
        verdict: "adjacent",
        why: "It is a portfolio management decision from marketing strategy. Its design relevance is direct: it dictates how many marks exist, how they nest and which lockups you have to draw."
      },
      related: [840, 829, 852]
    },
    {
      n: 842,
      title: "Colour ownership",
      aka: ["Brand colour", "Colour trade mark", "Signature colour"],
      oneLine: "Using one colour so consistently that people attribute it to you, and sometimes registering it.",
      demo: {
        caption: "Left, the colour applied exactly as shown. Right, everything the words predominant colour also cover, which is why Cadbury's wording failed.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Applied as shown</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 110\"><rect class=\"f-accent\" x=\"30\" y=\"10\" width=\"100\" height=\"72\"/><rect style=\"fill:var(--paper-raised)\" x=\"30\" y=\"64\" width=\"100\" height=\"18\"/><rect class=\"s-mute\" x=\"30\" y=\"10\" width=\"100\" height=\"72\"/><text class=\"t\" x=\"80\" y=\"100\" text-anchor=\"middle\">one sign</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Predominant colour</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 112\"><rect class=\"f-accent\" x=\"6\" y=\"6\" width=\"56\" height=\"40\"/><rect class=\"s-mute\" x=\"6\" y=\"6\" width=\"56\" height=\"40\"/><rect class=\"f-accent\" x=\"70\" y=\"6\" width=\"56\" height=\"40\"/><rect style=\"fill:var(--paper-raised)\" x=\"70\" y=\"6\" width=\"56\" height=\"10\"/><rect class=\"s-mute\" x=\"70\" y=\"6\" width=\"56\" height=\"40\"/><rect class=\"f-accent\" x=\"134\" y=\"6\" width=\"56\" height=\"40\"/><rect style=\"fill:var(--paper-raised)\" x=\"172\" y=\"6\" width=\"18\" height=\"40\"/><rect class=\"s-mute\" x=\"134\" y=\"6\" width=\"56\" height=\"40\"/><rect class=\"f-accent\" x=\"6\" y=\"52\" width=\"56\" height=\"40\"/><circle style=\"fill:var(--paper-raised)\" cx=\"34\" cy=\"72\" r=\"9\"/><rect class=\"s-mute\" x=\"6\" y=\"52\" width=\"56\" height=\"40\"/><rect class=\"f-accent\" x=\"70\" y=\"52\" width=\"56\" height=\"40\"/><polygon style=\"fill:var(--paper-raised)\" points=\"70,80 126,60 126,70 70,90\"/><rect class=\"s-mute\" x=\"70\" y=\"52\" width=\"56\" height=\"40\"/><rect class=\"f-accent\" x=\"134\" y=\"52\" width=\"56\" height=\"40\"/><rect style=\"fill:var(--paper-raised)\" x=\"134\" y=\"82\" width=\"56\" height=\"10\"/><rect class=\"s-mute\" x=\"134\" y=\"52\" width=\"56\" height=\"40\"/><text class=\"t\" x=\"98\" y=\"108\" text-anchor=\"middle\">six signs, all predominant</text></svg></div></div></div>"
      },
      what: "Two things travel under this heading. The commercial version is behavioural: use a colour long enough and exclusively enough and buyers start attributing it to you. The legal version is narrower. In Qualitex v Jacobson (1995) the US Supreme Court held that a colour alone can be a trade mark where it has acquired secondary meaning and serves no other function. European law allows it too, but the wording has to be precise. Cadbury lost its purple registration at the Court of Appeal in 2013 because describing purple as the predominant colour covered more than one sign.",
      why: "Colour carries at distances and angles where a mark is still unreadable, so it does recognition work no logo can do. Registering it turns a habit into an asset with a defence.",
      how: [
        "Specify the colour in every system you print and display in, not just one Pantone number.",
        "Use it as the dominant field rather than an accent, because attribution comes from area.",
        "Test attribution by showing the colour without the mark and asking who it belongs to.",
        "If registration matters, define the mark description tightly and take advice before filing."
      ],
      example: "Christian Louboutin's Benelux registration reads: the mark consists of the colour red (Pantone 18-1663TP) applied to the sole of a shoe as shown. The CJEU held in 2018 that this did not consist exclusively of a shape, so the shape exclusion did not defeat it.",
      numbers: "Qualitex Co. v. Jacobson Products Co., 514 U.S. 159, decided 28 March 1995. Cadbury's mark specified Pantone 2685C; refused on the predominant colour wording, [2013] EWCA Civ 1174. Louboutin: Pantone 18-1663TP, CJEU Case C-163/16 (2018).",
      pitfall: "Assuming a Pantone number in the guidelines equals ownership. Ownership requires exclusive use over time, and most brands undermine it themselves with a twelve-colour secondary palette used at equal weight.",
      source: "Qualitex Co. v. Jacobson Products Co., 514 U.S. 159 (1995); Nestle v Cadbury [2013] EWCA Civ 1174; Louboutin v Van Haren, CJEU C-163/16 (2018)",
      verify: {
        status: "verified",
        note: "Qualitex read this session on Cornell LII: 514 U.S. 159, decided 28 March 1995, holding that the Lanham Act permits registration of a trademark consisting purely and simply of a colour, subject to secondary meaning and to the colour serving no other significant function. Cadbury's mark wording, the colour purple (Pantone 2685C) applied to the whole visible surface, or being the predominant colour applied to the whole visible surface, of the packaging, and the Court of Appeal's rejection of it on 4 October 2013 for not being a single sign capable of graphic representation, both confirmed. Louboutin's mark description and the 12 June 2018 CJEU ruling that the sign does not consist exclusively of a shape both confirmed."
      },
      belongs: {
        verdict: "adjacent",
        why: "The ownership half is trade mark law rather than design. It belongs here because the answer decides whether a designer can build the identity on a colour or must build it on something else."
      },
      related: [831, 836, 854]
    },
    {
      n: 843,
      title: "Typographic voice",
      aka: ["Brand typeface", "Type as identity"],
      oneLine: "The typefaces a brand uses everywhere, chosen or drawn so the words themselves are recognisable.",
      demo: {
        caption: "No mark appears on any of these six pieces. Only the right-hand three read as one organisation.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Three registers</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">invoice</span><span class=\"db-type\" style=\"font-size:15px\">No. 4471</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:11px\">notice</span><span class=\"db-type db-type--mono\" style=\"font-size:13px;text-transform:uppercase\">Night trains return</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type db-type--display\" style=\"font-size:19px\">Platform 3</span><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One register</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">invoice</span><span class=\"db-type db-type--display\" style=\"font-size:17px\">No. 4471</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">notice</span><span class=\"db-type db-type--display\" style=\"font-size:17px\">Night trains return</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">platform</span><span class=\"db-type db-type--display\" style=\"font-size:17px\">Platform 3</span><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div></div>"
      },
      what: "Type carries more of an identity than the logo does, simply because there is so much more of it. The decision runs from picking an existing family and licensing it properly, through commissioning a modified cut, to having a face drawn from scratch. Each step up costs more and buys more ownership. What matters practically is that the choice covers every weight, language and platform the brand actually uses, including web fonts and office documents.",
      why: "A consistent typographic register makes a page recognisable before anyone finds the logo. It also removes a thousand small decisions from everyone downstream.",
      how: [
        "Check the licence covers web, app, broadcast and third-party agency use before falling in love.",
        "Pick a family with enough weights and widths that people do not go hunting for substitutes.",
        "Specify a fallback stack for systems where the brand face cannot be installed, and design with it in mind.",
        "Give the office-document users a workable answer, or they will pick their own and it will be Calibri."
      ],
      example: "GOV.UK dropped Gill Sans, Georgia and Helvetica in 2012 for New Transport, a digital redrawing with six new weights of Kinneir and Calvert's road-sign Transport, made by Margaret Calvert with Henrik Kubel. The Government Digital Service wrote up the reasoning on its blog on 5 July 2012.",
      numbers: "New Transport was released with six new weights (GDS blog, 5 July 2012).",
      pitfall: "Buying a beautiful display face and no text face. The identity then looks correct on the homepage and falls apart on every page with real content on it.",
      source: "Government Digital Service, A few notes on typography, 5 July 2012; NASA Brand Guidelines typography section",
      verify: {
        status: "verified",
        note: "Read the GDS blog post of 5 July 2012 this session. It states the previous version of GOV.UK used three typefaces, Gill Sans, Georgia and Helvetica; that Transport, designed by Jock Kinneir and Margaret Calvert for Britain's road sign system in the late fifties and early sixties, was chosen for its legibility; and that Calvert has been working with Henrik Kubel on a new digital version with six new weights called New Transport. NASA's parallel example, Helvetica and Garamond recommended generally with Inter, Public Sans and DM Mono on the web, read from its brand guidelines page."
      },
      belongs: {
        verdict: "core",
        why: "Type is the highest-volume element of any identity and the choice governs almost everything the audience actually reads."
      },
      related: [824, 850, 851]
    },
    {
      n: 844,
      title: "Supporting graphic devices",
      aka: ["Brand device", "Pattern", "Holding shape", "Graphic language"],
      oneLine: "Shapes, patterns or framing elements used across a brand's work alongside the logo.",
      demo: {
        caption: "Neither piece carries the mark. Only the right one says who made it, using one angle as pattern and crop.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Logo removed</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 112\"><rect class=\"f-mute\" x=\"0\" y=\"0\" width=\"200\" height=\"6\"/><rect class=\"f-mute\" x=\"0\" y=\"22\" width=\"200\" height=\"54\"/><rect class=\"f-mute\" x=\"0\" y=\"86\" width=\"200\" height=\"5\"/><rect class=\"f-mute\" x=\"0\" y=\"96\" width=\"200\" height=\"5\"/><rect class=\"f-mute\" x=\"0\" y=\"106\" width=\"120\" height=\"5\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Logo removed, device kept</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 112\"><polygon class=\"f-accent\" points=\"10,0 20,0 14,12 4,12\"/><polygon class=\"f-accent\" points=\"28,0 38,0 32,12 22,12\"/><polygon class=\"f-accent\" points=\"46,0 56,0 50,12 40,12\"/><polygon class=\"f-accent\" points=\"64,0 74,0 68,12 58,12\"/><polygon class=\"f-accent\" points=\"82,0 92,0 86,12 76,12\"/><polygon class=\"f-accent\" points=\"100,0 110,0 104,12 94,12\"/><polygon class=\"f-accent\" points=\"118,0 128,0 122,12 112,12\"/><polygon class=\"f-accent\" points=\"136,0 146,0 140,12 130,12\"/><polygon class=\"f-accent\" points=\"154,0 164,0 158,12 148,12\"/><polygon class=\"f-accent\" points=\"172,0 182,0 176,12 166,12\"/><polygon class=\"f-accent\" points=\"190,0 200,0 194,12 184,12\"/><polygon class=\"f-mute\" points=\"0,22 200,22 188,76 0,76\"/><rect class=\"f-mute\" x=\"0\" y=\"86\" width=\"200\" height=\"5\"/><rect class=\"f-mute\" x=\"0\" y=\"96\" width=\"200\" height=\"5\"/><rect class=\"f-mute\" x=\"0\" y=\"106\" width=\"120\" height=\"5\"/></svg></div></div></div>"
      },
      what: "A supporting device is a piece of recurring geometry that is not the logo: a repeating pattern, a crop shape, a rule, a corner treatment, a way of holding photographs. Romaniuk's asset framework treats these as distinctive brand assets in their own right, measured on the same fame and uniqueness axes as the logo. In practice they do more work than the logo on formats where the logo is small or absent.",
      why: "A device lets you brand a piece of work without stamping a logo on it, which matters on packaging, social formats and environments where the mark would be intrusive. Used consistently, it becomes attributable on its own.",
      how: [
        "Derive the device from something already in the identity, such as an angle or a curve in the mark.",
        "Define how it is constructed and how it scales, not just what it looks like in one application.",
        "Use it at large scale as structure rather than sprinkling it as decoration.",
        "Audit it for attribution the same way you audit the logo, since an unrecognised device is just texture."
      ],
      example: "The Burberry check is a repeating pattern held separately from the wordmark and protected by registered EU trade marks. It is recognisable as the brand on a garment where no logo is visible.",
      numbers: "",
      pitfall: "Inventing a device that resembles the category's shared visual furniture. A rounded gradient blob is not an asset, because it cues thirty other brands at the same time."
      ,
      source: "Jenni Romaniuk, Building Distinctive Brand Assets (2018); Burberry check as registered EU trade mark",
      verify: {
        status: "verified",
        note: "Romaniuk's treatment of patterns, shapes and packaging forms as measurable distinctive assets confirmed across independent summaries of the 2018 book. The existence of registered EU trade marks covering the Burberry check is confirmed by legal commentary on the EUIPO's partial refusal of 8 February 2023, which declined to extend the check to NFTs, virtual clothing and related digital goods for lack of distinctiveness while noting the design is already registered as a figurative mark. No registration number or filing date is claimed here, because the register entries were not read directly."
      },
      belongs: {
        verdict: "core",
        why: "A standard part of an identity system and often the element that carries recognition where the logo cannot go."
      },
      related: [831, 842, 846, 847]
    },
    {
      n: 845,
      title: "Photography direction",
      aka: ["Image style", "Art direction for photography"],
      oneLine: "Written and visual rules for how the brand's photographs are shot, cropped and graded.",
      demo: {
        caption: "Same wide shot twice. The dashed vertical crop the brand also needs finds a subject only on the right.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Framed for the wide crop</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 118\"><rect class=\"s-mute\" x=\"6\" y=\"8\" width=\"188\" height=\"84\"/><path class=\"s-mute\" d=\"M6 64 H194\"/><circle class=\"f\" cx=\"160\" cy=\"40\" r=\"6\"/><path class=\"f\" d=\"M154 88 L154 56 Q160 48 166 56 L166 88 Z\"/><rect class=\"s-accent\" stroke-dasharray=\"4 4\" x=\"68\" y=\"8\" width=\"64\" height=\"84\"/><text class=\"t\" x=\"68\" y=\"106\">vertical crop</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Framed for both crops</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 118\"><rect class=\"s-mute\" x=\"6\" y=\"8\" width=\"188\" height=\"84\"/><path class=\"s-mute\" d=\"M6 64 H194\"/><circle class=\"f\" cx=\"100\" cy=\"40\" r=\"6\"/><path class=\"f\" d=\"M94 88 L94 56 Q100 48 106 56 L106 88 Z\"/><rect class=\"s-accent\" stroke-dasharray=\"4 4\" x=\"68\" y=\"8\" width=\"64\" height=\"84\"/><text class=\"t\" x=\"68\" y=\"106\">vertical crop</text></svg></div></div></div>"
      },
      what: "Photography direction is the section of a brand system that governs lighting, framing, subject, casting, colour grade and what must never appear. It exists because photographs are commissioned by many people over many years and drift faster than any other element. There is no named originator for this; it is craft practice, codified in brand manuals since the middle of the twentieth century.",
      why: "Images occupy far more surface area than the logo and set the emotional register of everything. Consistent photography makes unrelated pieces of work look like one organisation without a mark being visible.",
      how: [
        "Give reference images in pairs, one approved and one rejected, since the contrast teaches faster than adjectives.",
        "Specify the grade as an actual recipe a retoucher can apply, not as a mood word.",
        "Say what is banned outright, including specific stock cliches you keep seeing.",
        "Commission real photography where you can, and log where each licensed image came from."
      ],
      example: "Motorola Solutions publishes its photography rules openly, asking for subjects who look authentic and are captured mid-action rather than overly posed. The University of Illinois brand guidelines do the same, tying hero images to named brand pillars and setting practical shooting rules on orientation and focal point.",
      numbers: "",
      pitfall: "Writing the direction as adjectives. Authentic and human describe nothing a photographer can act on, and you will get back exactly the stock library you were trying to avoid.",
      source: "Craft practice codified in brand guidelines; origin unclear",
      verify: {
        status: "verified",
        note: "No named originator for photography direction as a principle could be found, so it is described here as codified craft practice. Both examples were checked this session and are public. Motorola Solutions' photography page asks for subjects who look authentic, confident and inspirational, captured in mid-action without being overly posed. The University of Illinois photography page ties hero images to its four brand pillars, innovation, community, momentum and discovery, and gives practical rules on shooting both vertical and horizontal versions and on setting a clear focal point."
      },
      belongs: {
        verdict: "core",
        why: "Photography is usually the largest visual surface a brand owns, and the rules for it are the designer's to write."
      },
      related: [822, 846, 852]
    },
    {
      n: 846,
      title: "Illustration direction",
      aka: ["Illustration system", "Drawing style guide"],
      oneLine: "Rules for the brand's drawn imagery: construction, palette, proportion and subject.",
      demo: {
        caption: "Four spot drawings. On the right one stroke weight, one accent and one level of detail make them a family.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Three illustrators, no rules</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><svg class=\"db-svg\" viewBox=\"0 0 48 48\" style=\"width:58px\"><path class=\"s-mute\" d=\"M8 26 L24 12 L40 26 V42 H8 Z\"/><rect class=\"f\" x=\"20\" y=\"32\" width=\"8\" height=\"10\"/></svg><svg class=\"db-svg\" viewBox=\"0 0 48 48\" style=\"width:58px\"><path class=\"f\" d=\"M12 16 H34 V34 A6 6 0 0 1 28 40 H18 A6 6 0 0 1 12 34 Z\"/><path class=\"s\" style=\"stroke-width:3\" d=\"M34 20 H38 A5 5 0 0 1 38 30 H34\"/></svg><svg class=\"db-svg\" viewBox=\"0 0 48 48\" style=\"width:58px\"><circle class=\"s\" style=\"stroke-width:3.5\" cx=\"24\" cy=\"19\" r=\"11\"/><path class=\"s\" style=\"stroke-width:3.5\" d=\"M24 30 V42\"/></svg><svg class=\"db-svg\" viewBox=\"0 0 48 48\" style=\"width:58px\"><circle class=\"s-mute\" cx=\"24\" cy=\"24\" r=\"13\"/><path class=\"s-mute\" d=\"M24 24 V14 M24 24 H31\"/><path class=\"s-mute\" d=\"M24 11 V13 M24 35 V37 M11 24 H13 M35 24 H37 M33.2 14.8 L31.8 16.2 M14.8 33.2 L16.2 31.8 M33.2 33.2 L31.8 31.8 M14.8 14.8 L16.2 16.2\"/></svg></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One construction rule</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><svg class=\"db-svg\" viewBox=\"0 0 48 48\" style=\"width:58px\"><path class=\"s\" d=\"M8 26 L24 12 L40 26 V42 H8 Z\"/><path class=\"s-accent\" d=\"M20 42 V32 H28 V42\"/></svg><svg class=\"db-svg\" viewBox=\"0 0 48 48\" style=\"width:58px\"><path class=\"s\" d=\"M12 16 H34 V34 A6 6 0 0 1 28 40 H18 A6 6 0 0 1 12 34 Z\"/><path class=\"s-accent\" d=\"M34 20 H38 A5 5 0 0 1 38 30 H34\"/></svg><svg class=\"db-svg\" viewBox=\"0 0 48 48\" style=\"width:58px\"><circle class=\"s\" cx=\"24\" cy=\"19\" r=\"11\"/><path class=\"s-accent\" d=\"M24 30 V42\"/></svg><svg class=\"db-svg\" viewBox=\"0 0 48 48\" style=\"width:58px\"><circle class=\"s\" cx=\"24\" cy=\"24\" r=\"13\"/><path class=\"s-accent\" d=\"M24 24 V14 M24 24 H31\"/></svg></div></div></div></div>"
      },
      what: "An illustration system defines how drawn images are made, so that several illustrators over several years produce work that belongs together. It covers stroke construction, corner treatment, colour range, figure proportion, level of detail and what the illustrations are for. The risk specific to illustration is homogenisation, because styles spread fast and cheaply.",
      why: "Illustration solves the problems photography cannot: abstract concepts, empty states, processes, anything you cannot photograph honestly. A defined system means you can hand the work to different people and still recognise the output.",
      how: [
        "Write the construction rules, not the vibe: stroke weight, corner radius, palette, proportion system.",
        "Draw a small reference set that covers the hardest subjects, not just the easy ones.",
        "Set a rule for how illustration and photography coexist, since mixing them badly is the commonest failure.",
        "Check the style is not already the default in your sector before committing to it."
      ],
      example: "Alegria, the flat illustration system the agency Buck created for Facebook in 2017, was copied so widely across technology companies that it acquired the nickname Corporate Memphis. Wired ran a piece on it in January 2021 headlined Why does every advert look the same? Blame Corporate Memphis.",
      numbers: "",
      pitfall: "Adopting the current default style because it is fast to produce. If a reader cannot tell your product from three competitors by the drawings, the illustration budget has bought you nothing.",
      source: "Buck, Alegria for Facebook (2017); Josh Gabert-Doyon, Wired, 24 January 2021",
      verify: {
        status: "verified",
        note: "Checked this session against the Wikipedia article on Corporate Memphis and independent design coverage. All agree the style was popularised by Facebook's Alegria system, created in 2017 by the agency Buck, and that Alegria is Spanish for joy. An earlier draft put a paraphrase in Wired's mouth about the homogenisation of the internet's visual culture; the citable fact is the article itself, Josh Gabert-Doyon, Why does every advert look the same? Blame Corporate Memphis, Wired, 24 January 2021, so the entry now names it rather than quoting it. The term Corporate Memphis is attributed to Mike Merrill and to the title of an Are.na board, which is not independently confirmed and so is not stated as fact."
      },
      belongs: {
        verdict: "core",
        why: "A standard component of a modern identity system with its own construction rules and its own distinct failure mode."
      },
      related: [844, 845, 847]
    },
    {
      n: 847,
      title: "Iconography system",
      aka: ["Icon set", "System icons", "Keyline grid"],
      oneLine: "A family of small symbols built on a shared grid so they carry equal visual weight.",
      demo: {
        caption: "Both pairs sit in the same 24 dp box. The right-hand square is smaller, and only now do the two match.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Both measured 20 dp</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 130 78\"><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"10\" y=\"10\" width=\"48\" height=\"48\"/><rect class=\"f\" x=\"14\" y=\"14\" width=\"40\" height=\"40\"/><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"72\" y=\"10\" width=\"48\" height=\"48\"/><circle class=\"f\" cx=\"96\" cy=\"34\" r=\"20\"/><text class=\"t\" x=\"34\" y=\"72\" text-anchor=\"middle\">square 20 dp</text><text class=\"t\" x=\"96\" y=\"72\" text-anchor=\"middle\">circle 20 dp</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">On the keylines</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 130 78\"><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"10\" y=\"10\" width=\"48\" height=\"48\"/><rect class=\"f\" x=\"16\" y=\"16\" width=\"36\" height=\"36\"/><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"72\" y=\"10\" width=\"48\" height=\"48\"/><circle class=\"f\" cx=\"96\" cy=\"34\" r=\"20\"/><text class=\"t\" x=\"34\" y=\"72\" text-anchor=\"middle\">square 18 dp</text><text class=\"t\" x=\"96\" y=\"72\" text-anchor=\"middle\">circle 20 dp</text></svg></div></div></div>"
      },
      what: "An icon system is a grid, a set of keyline shapes and a construction rule, applied to every glyph so that a circle and a square read as the same size even though they are not. Material Design's published version is the clearest reference: a 24 by 24 dp grid, a 20 by 20 dp live area with 2 dp of padding, and four keyline shapes tuned for equal optical weight, a square at 18 by 18 dp, a circle 20 dp in diameter, and vertical and horizontal rectangles at 16 by 20 dp and 20 by 16 dp.",
      why: "The keylines exist because equal measured size does not produce equal perceived size. Following them makes a set of unrelated silhouettes look like one family, which is the entire point of an icon system.",
      how: [
        "Fit each new icon to the keyline shape that matches its silhouette rather than to the outer box.",
        "Fix one stroke weight for the whole set and hold it, including on diagonals.",
        "Draw at the target size with strokes on whole pixels, rather than drawing large and reducing.",
        "Allow a small number of deliberate exceptions where a silhouette reads better off the keyline, and record them."
      ],
      example: "The circle keyline is 20 dp across and the square keyline only 18 dp. A square drawn to 20 dp would look heavier than a circle of the same width, so Material shrinks it. The two icons then read as the same size on a toolbar despite a 2 dp difference in measured width.",
      numbers: "Material system icons: 24 x 24 dp grid, 20 x 20 dp live area, 2 dp padding per side; keylines square 18 x 18 dp, circle 20 dp diameter, vertical rectangle 16 dp wide by 20 dp high, horizontal rectangle 20 dp wide by 16 dp high.",
      pitfall: "Buying icons from three different sets. Mixed stroke weights and mixed corner treatments are visible instantly, even to people who could not name what is wrong.",
      source: "Google, Material Design system icon guidance (Material Design 2 and 3)",
      verify: {
        status: "verified",
        note: "All figures read this session from Google's Material Design system icon documentation, which specifies the 24 dp grid, the 20 by 20 dp live area, and the four keyline shapes: square 18 by 18 dp, circle 20 dp diameter, vertical rectangle 20 dp high by 16 dp wide, horizontal rectangle 16 dp high by 20 dp wide. The 2 dp padding is the per-side figure, forced by a 20 dp live area centred in a 24 dp grid. An earlier draft illustrated this with a named clipboard icon on the square keyline; the documentation does not name icons against keylines, so the example now states the geometry instead."
      },
      belongs: {
        verdict: "core",
        why: "A drawing discipline with published numbers, and a component of nearly every identity that touches a screen."
      },
      related: [833, 837, 844]
    },
    {
      n: 848,
      title: "Motion identity",
      aka: ["Brand animation", "Idents", "Logo animation"],
      oneLine: "How the brand moves: the timing, easing and behaviour that make animation recognisable.",
      demo: {
        caption: "Same mark, same distance, same duration. Only the easing differs, and the two read as different organisations.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Linear</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row\"><span class=\"db-dot db-dot--lg db-dot--accent db-anim db-anim--slide db-anim--linear\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Ease-out</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row\"><span class=\"db-dot db-dot--lg db-dot--accent db-anim db-anim--slide db-anim--ease\"></span></div></div></div></div>"
      },
      what: "Motion identity treats movement as an ownable property. That means defining timing curves, durations, the way the mark assembles or resolves, and how transitions behave, then applying them consistently across broadcast, product and social. Television did this first, because a channel needs something to sit between programmes, and the discipline transferred to screens generally.",
      why: "Movement is often attributable before the mark is legible. It also carries tone in a way a static mark cannot: the same logo can feel brisk or ponderous purely on its easing.",
      how: [
        "Define timing and easing as reusable values, so motion is specified rather than improvised per project.",
        "Design the shortest version first, because most real placements are under two seconds.",
        "Make the resolve, not the entrance, the memorable part, since the resolve is what people see repeated.",
        "Provide a static fallback and respect reduced-motion preferences."
      ],
      example: "Channel 4's first ident, on air from 2 November 1982, was designed by Martin Lambie-Nairn with his partner Colin Robinson and animated in Los Angeles by Bo Gehring Aviation, because at the time there was nowhere in the UK that could do the work. Nine coloured blocks flew together to form the number 4, with several different assembly routes reusing the same idea.",
      numbers: "",
      pitfall: "Animating the logo once for the launch film and never again. Motion only becomes identity through repetition in ordinary places, not through one showpiece."
      ,
      source: "Channel 4 idents, Martin Lambie-Nairn and Colin Robinson, animated by Bo Gehring Aviation of Los Angeles (1982)",
      verify: {
        status: "verified",
        note: "Checked this session against the Wikipedia article on Channel 4 idents and presentation, which gives the 2 November 1982 launch, credits Martin Lambie-Nairn and his partner Colin Robinson working with Bo Gehring Aviation of Los Angeles, and says the team went to Los Angeles because at the time there was nowhere in the UK to go for computer animation of this kind. An earlier draft named the animation company Bo Gehring and Associates; both names circulate for the firm, so the Wikipedia form is used. The nine-block count and the multiple assembly routes are given on the same page."
      },
      belongs: {
        verdict: "core",
        why: "A working part of most identity systems now, with its own specifications, and a discipline designers are expected to brief and review."
      },
      related: [830, 849, 851]
    },
    {
      n: 849,
      title: "Sonic identity",
      aka: ["Audio branding", "Sound mark", "Sonic logo"],
      oneLine: "A short piece of sound used as a brand signature, sometimes registered as a trade mark.",
      demo: {
        caption: "The Deep Note as pitch over time: the voices start inside one narrow band and diverge across three octaves.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 150\"><path class=\"s-mute\" d=\"M28 12 V132\"/><path class=\"s-mute\" d=\"M28 132 H310\"/><path class=\"s-mute\" d=\"M34 93 C 150 93, 200 18, 300 18\"/><path class=\"s-mute\" d=\"M34 95 C 150 95, 200 26, 300 26\"/><path class=\"s-accent\" d=\"M34 96 C 150 96, 200 34, 300 34\"/><path class=\"s-mute\" d=\"M34 98 C 150 98, 200 44, 300 44\"/><path class=\"s-mute\" d=\"M34 99 C 150 99, 200 54, 300 54\"/><path class=\"s-mute\" d=\"M34 100 C 150 100, 200 64, 300 64\"/><path class=\"s-mute\" d=\"M34 101 C 150 101, 200 74, 300 74\"/><path class=\"s-mute\" d=\"M34 102 C 150 102, 200 86, 300 86\"/><path class=\"s-mute\" d=\"M34 103 C 150 103, 200 96, 300 96\"/><path class=\"s-accent\" d=\"M34 104 C 150 104, 200 106, 300 106\"/><path class=\"s-mute\" d=\"M34 105 C 150 105, 200 116, 300 116\"/><path class=\"s-mute\" d=\"M34 106 C 150 106, 200 126, 300 126\"/><path class=\"s\" d=\"M31 91 V108\"/><path class=\"s\" d=\"M304 16 V128\"/><text class=\"t\" x=\"6\" y=\"10\">pitch</text><text class=\"t\" x=\"36\" y=\"124\">start: 200 to 400 Hz</text><text class=\"t\" x=\"300\" y=\"10\" text-anchor=\"end\">three octaves</text><text class=\"t\" x=\"278\" y=\"146\">time</text></svg></div>"
      },
      what: "Sonic branding is covered in full at 756, including how the family of sounds is designed, tested and specified. Sonic identity is the same discipline under the name the identity side uses, and what matters here is status: the sound is an asset the business owns, protectable in the same way a visual mark is. The NBC chimes became the first purely audio service mark granted in the United States, registered on 4 April 1950, described in the register as a sequence of chime-like notes G, E and C. The THX Deep Note, created by James A. Moorer in late 1982 and first heard publicly with Return of the Jedi in 1983, was registered as a US sound trade mark in 1992.",
      why: "Sound works when the screen is not being watched, which now covers a large share of the time people spend with media. It is also a much less crowded space than the visual one.",
      how: [
        "Register it if it matters, and document the exact recording that constitutes the mark.",
        "Brief and sign it off as part of the identity, not as a late addition to one campaign.",
        "For designing and testing the sounds themselves, work from 756."
      ],
      example: "Moorer's Deep Note was synthesised rather than performed: 30 voices over seven measures, starting in a narrow 200 to 400 Hz band and diverging to pitches spanning three octaves.",
      numbers: "NBC chimes: registered 4 April 1950, registration no. 523,616, notes G, E, C. THX Deep Note: created late 1982, US sound trade mark registered 1992, 30 voices over seven measures, initial range 200 to 400 Hz spreading over three octaves.",
      pitfall: "Commissioning a thirty-second track. If it cannot survive being cut to two seconds it will never be used in the places that build recognition.",
      source: "NBC chimes US service mark registration (1950); James A. Moorer, THX Deep Note (1982), US sound trade mark (1992)",
      verify: {
        status: "verified",
        note: "NBC details checked this session: registered 4 April 1950 as the first purely audio service mark granted by the USPTO, registration number 523,616, with the registered description giving the notes G, E and C. An earlier draft called 523,616 a serial number; it is the registration number. Deep Note checked against the Wikipedia article and the trade mark description it quotes: Moorer, late 1982, premiere with Return of the Jedi in 1983, USPTO sound trade mark registered 1992, 30 voices over seven measures, beginning between 200 and 400 Hz and arriving at pitches spanning three octaves. The frequently repeated claim that Walter Werzowa composed the Intel five-note bong in 1994 turns up only in secondary marketing sources, so it is not stated here. Shortened to a cross-reference during duplicate resolution, because 756 covers the same discipline under the name sonic branding; the registration facts are kept here because they are the identity-side point. No claim was changed."
      },
      belongs: {
        verdict: "adjacent",
        why: "Downgraded from core on review. Sound is a separate craft from visual identity and a designer almost never makes the asset. It belongs here because it is commissioned, specified and signed off as part of an identity project, and because it carries the same legal status as a visual mark. The practice itself is written up at 756."
      },
      related: [831, 848, 852, 756]
    },
    {
      n: 850,
      title: "Tone of voice",
      aka: ["Verbal identity", "Voice and tone"],
      oneLine: "The consistent character of a brand's writing, adjusted by situation without changing personality.",
      demo: {
        caption: "Same failure, same casual voice. Three of the four dimensions shift, and only the right-hand message fits the moment.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Marketing tone in a failure</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Card</span><span class=\"db-input db-input--error\">4242 4242 4242 4242</span><span>Whoops! That didn't work. Give it another whirl.</span><span class=\"db-note\">casual, funny, irreverent, enthusiastic</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Same voice, tone dialled</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Card</span><span class=\"db-input db-input--error\">4242 4242 4242 4242</span><span>The payment did not go through. No money has left your account.</span><span class=\"db-note\">casual, serious, respectful, matter-of-fact</span></div></div></div></div></div>"
      },
      what: "Voice is the constant, tone is what shifts by context. The most usable model is Kate Moran's for Nielsen Norman Group, published on 17 July 2016, which breaks tone into four dimensions that can be dialled independently: formal versus casual, serious versus funny, respectful versus irreverent, and matter-of-fact versus enthusiastic. Because they are dimensions rather than labels, you can specify a different setting for an error message than for a marketing page while keeping the same voice.",
      why: "Interface words are design material. A cheerful error message in a banking app is a design error, and the four dimensions give you a way to say why without arguing about taste.",
      how: [
        "Set a position on each of the four dimensions for each major context: marketing, help, errors, legal.",
        "Write real examples in the guidelines, since abstract descriptions of tone teach nobody.",
        "Give the failure states most of your attention, because that is where tone does damage.",
        "Test copy with people outside the organisation, not with the team that wrote it."
      ],
      example: "Moran's own test showed the dimensions are perceptible to readers, though modestly: a survey of 50 respondents rating samples on five-point scales for friendliness and formality found differences of roughly half a point to a point, statistically significant at p below 0.05.",
      numbers: "NN/g tone-of-voice study: 50 respondents, five-point Likert scales, differences of about 0.5 to 1 point, significant at p < 0.05.",
      pitfall: "One tone everywhere. A brand that is playful in its error states and playful in its outage notices will be read as not taking the problem seriously.",
      source: "Kate Moran, The Four Dimensions of Tone of Voice, Nielsen Norman Group, 17 July 2016",
      verify: {
        status: "verified",
        note: "Read the NN/g article. It names the four dimensions as formal versus casual, serious versus funny, respectful versus irreverent, and matter-of-fact versus enthusiastic, gives the publication date of 17 July 2016 and last review in August 2023, and reports the survey of 50 American respondents with differences around 0.5 to 1 point on five-point scales, significant at p < 0.05. The sample is small, so the effect sizes should not be over-read."
      },
      belongs: {
        verdict: "adjacent",
        why: "It is a writing discipline rather than a visual one. Its design relevance is direct: interface copy is part of the interface, and the tone has to match the visual register or the product reads as two products."
      },
      related: [822, 9823, 843]
    },
    {
      n: 851,
      title: "Brand book versus living brand system",
      aka: ["Brand manual versus design system", "Static guidelines versus living guidelines"],
      oneLine: "A printed rulebook fixes decisions; a living system ships the assets and updates itself.",
      demo: {
        caption: "Same rule, same three teams. On the right the rule also shipped as the component, so nobody could drift.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Rule written in the manual</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-note\">primary button: ink fill, 3 px radius, mono label</span><div class=\"db-row\"><span class=\"db-btn\">Continue</span><span class=\"db-btn db-btn--ghost db-btn--sm\">Continue</span><span class=\"db-btn db-btn--lg\" style=\"border-radius:16px\">Continue</span></div><span class=\"db-note\">three teams, three buttons</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Rule shipped as the component</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-note\">primary button: ink fill, 3 px radius, mono label</span><div class=\"db-row\"><span class=\"db-btn\">Continue</span><span class=\"db-btn\">Continue</span><span class=\"db-btn\">Continue</span></div><span class=\"db-note\">three teams, one button</span></div></div></div></div>"
      },
      what: "The brand book is a document describing how the identity should be used. The living system is a maintained set of real assets, tokens and components that people build with directly, so the rules are enforced by the artefacts rather than by reading. Most organisations of any size now need both: a book for the reasoning and the edge cases, a system for the day-to-day work.",
      why: "A document tells people what to do; a system removes the chance to do otherwise. That difference decides how much of the identity survives its second year.",
      how: [
        "Put anything mechanical into code or components: colour tokens, spacing, type scales, approved logo files.",
        "Reserve the written document for reasoning, edge cases and judgement calls, which code cannot hold.",
        "Version the system and publish the changelog, so people know when their local copy went stale.",
        "Name an owner. A system without a maintainer becomes a document again within a year."
      ],
      example: "NASA runs both. The 1975 Graphics Standards Manual by Danne and Blackburn is the historical printed rulebook; the current public brand guidelines page carries the live rules, and the nasa.gov site itself is built on the Horizon Design System using Inter, Public Sans and DM Mono.",
      numbers: "",
      pitfall: "Publishing a beautiful 90-page PDF and nothing else. It will be downloaded once, saved to a desktop, and superseded silently.",
      source: "NASA Brand Guidelines and NASA Graphics Standards Manual (1975); Alla Kholmatova, Design Systems (2017)",
      verify: {
        status: "verified",
        note: "NASA's dual arrangement read from its own brand guidelines page, which describes the Horizon Design System and names Inter, Public Sans and DM Mono for the web while recommending Helvetica and Garamond elsewhere. NASA's page dates the logotype to Danne and Blackburn in 1975; note that secondary sources variously give 1974 and 1976 for the worm, so NASA's own figure is used. Alla Kholmatova's Design Systems was published by Smashing Magazine in 2017 and is cited here as the standard reference for the living-system half of the argument, not for any specific claim above."
      },
      belongs: {
        verdict: "core",
        why: "It is the delivery decision at the end of every identity project and it determines whether the work holds together afterwards."
      },
      related: [839, 852, 9851]
    },
    {
      n: 9851,
      title: "Asset management and file delivery",
      aka: ["Brand asset library", "Logo kit", "Handover"],
      oneLine: "Getting the right files, correctly named, into the hands of everyone who needs them.",
      demo: {
        caption: "The same mark from two files, enlarged to the same width. Only one of them was built to be scaled.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">logo-final-2.png, from an old email</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><svg class=\"db-svg\" viewBox=\"0 0 64 64\" style=\"width:120px\"><rect class=\"f\" x=\"20\" y=\"4\" width=\"24\" height=\"4\"/><rect class=\"f\" x=\"16\" y=\"8\" width=\"32\" height=\"4\"/><rect class=\"f\" x=\"12\" y=\"12\" width=\"40\" height=\"4\"/><rect class=\"f\" x=\"8\" y=\"16\" width=\"48\" height=\"4\"/><rect class=\"f\" x=\"4\" y=\"20\" width=\"56\" height=\"4\"/><rect class=\"f\" x=\"4\" y=\"24\" width=\"56\" height=\"4\"/><rect class=\"f\" x=\"4\" y=\"28\" width=\"56\" height=\"4\"/><rect class=\"f\" x=\"4\" y=\"32\" width=\"56\" height=\"4\"/><rect class=\"f\" x=\"4\" y=\"36\" width=\"56\" height=\"4\"/><rect class=\"f\" x=\"4\" y=\"40\" width=\"56\" height=\"4\"/><rect class=\"f\" x=\"8\" y=\"44\" width=\"48\" height=\"4\"/><rect class=\"f\" x=\"12\" y=\"48\" width=\"40\" height=\"4\"/><rect class=\"f\" x=\"16\" y=\"52\" width=\"32\" height=\"4\"/><rect class=\"f\" x=\"20\" y=\"56\" width=\"24\" height=\"4\"/></svg></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">harbour-logo-primary.svg, from the library</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><svg class=\"db-svg\" viewBox=\"0 0 64 64\" style=\"width:120px\"><circle class=\"f\" cx=\"32\" cy=\"32\" r=\"28\"/></svg></div></div></div></div>"
      },
      what: "This is the last phase of Wheeler's five and the one most often skipped: managing assets. It covers which file formats ship, how they are named, where they live, who has access, how versions are retired and how partners request artwork. It sounds administrative because it is, and it is also the difference between an identity that stays intact and one that degrades into whatever people found in an old email.",
      why: "Almost every misuse you will see traces back to someone using the wrong file because the right one was hard to get. Fixing access fixes more brand consistency than another page of rules ever will.",
      how: [
        "Ship SVG for screen, EPS or PDF for print, and PNG at named pixel sizes for people who cannot open the others.",
        "Name files so the version, colourway and variant are readable without opening them.",
        "Put everything behind one link that does not expire, and kill the old copies.",
        "Give external partners a self-serve route, since a request queue guarantees improvisation."
      ],
      example: "NASA publishes its logo rules, approved versions and contact route for artwork requests on one public brand centre page, including named restrictions on who may use the insignia and for what.",
      numbers: "",
      pitfall: "Handing over a folder at the end of the project and walking away. Within a year there will be four versions of the logo circulating and nobody able to say which is current.",
      source: "Alina Wheeler, Designing Brand Identity, Phase 5: managing assets",
      verify: {
        status: "verified",
        note: "Added as a gap. Wheeler's fifth phase is literally titled managing assets and is confirmed in the book's published table of contents, but the master list has no entry covering file delivery, naming or access, despite 839 and 851 depending on it. NASA's public brand centre is cited as an existing, checkable implementation."
      },
      belongs: {
        verdict: "core",
        why: "It is the mechanism by which every other rule in this section is either enforced or lost."
      },
      related: [839, 851, 852]
    },
    {
      n: 852,
      title: "Touchpoint consistency",
      aka: ["Cross-channel consistency", "Brand consistency"],
      oneLine: "The same identity applied the same way everywhere the brand is met.",
      demo: {
        caption: "Six surfaces the brand is met on. Only the right-hand set carries the asset on the dull, high-volume ones.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Branded where it is fun</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><div class=\"db-card\" style=\"width:58px\"><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent\"></span><span class=\"db-note\">website</span></div></div><div class=\"db-card\" style=\"width:58px\"><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent\"></span><span class=\"db-note\">app</span></div></div><div class=\"db-card\" style=\"width:58px\"><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent\"></span><span class=\"db-note\">van</span></div></div><div class=\"db-card\" style=\"width:58px\"><div class=\"db-col db-col--tight\"><span class=\"db-bar\"></span><span class=\"db-note\">invoice</span></div></div><div class=\"db-card\" style=\"width:58px\"><div class=\"db-col db-col--tight\"><span class=\"db-bar\"></span><span class=\"db-note\">receipt</span></div></div><div class=\"db-card\" style=\"width:58px\"><div class=\"db-col db-col--tight\"><span class=\"db-bar\"></span><span class=\"db-note\">form</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Branded everywhere it is met</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><div class=\"db-card\" style=\"width:58px\"><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent\"></span><span class=\"db-note\">website</span></div></div><div class=\"db-card\" style=\"width:58px\"><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent\"></span><span class=\"db-note\">app</span></div></div><div class=\"db-card\" style=\"width:58px\"><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent\"></span><span class=\"db-note\">van</span></div></div><div class=\"db-card\" style=\"width:58px\"><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent\"></span><span class=\"db-note\">invoice</span></div></div><div class=\"db-card\" style=\"width:58px\"><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent\"></span><span class=\"db-note\">receipt</span></div></div><div class=\"db-card\" style=\"width:58px\"><div class=\"db-col db-col--tight\"><span class=\"db-bar db-bar--accent\"></span><span class=\"db-note\">form</span></div></div></div></div></div></div>"
      },
      what: "A touchpoint is any place a person encounters the organisation: the site, the app, the invoice, the van, the reception desk, the recruitment advert, the out-of-office reply. Wheeler makes creating touchpoints a phase of the work in its own right. The standard being asked for is attribution, which means the same small set of distinctive assets showing up reliably enough to be recognised. Everything looking identical is a different and lower ambition.",
      why: "Recognition is built by repetition, so every inconsistent touchpoint wastes exposure you have already paid for. Consistency also lowers cost, because decisions get made once.",
      how: [
        "List every touchpoint including the unglamorous ones, and audit them rather than guessing.",
        "Prioritise the high-frequency, low-glamour surfaces: receipts, transactional email, signage, forms.",
        "Fix the assets people reach for most, since consistency follows availability.",
        "Re-audit annually, because drift is continuous and invisible from inside."
      ],
      example: "NASA enforces consistency through specific mechanical rules rather than general appeals, such as requiring the insignia to be sphere-centred rather than object-centred, and requiring the logotype never to appear without the insignia in appropriate proximity except on merchandise.",
      numbers: "",
      pitfall: "Quoting the widely circulated claim that consistent brand presentation raises revenue by up to 23 per cent. It traces to a software vendor's own survey of marketers rather than to audited accounts, and the same vendor later published 33 per cent instead. Citing either in a deck will eventually cost you credibility.",
      source: "Alina Wheeler, Designing Brand Identity, Phase 4: creating touchpoints",
      verify: {
        status: "disputed",
        note: "The touchpoints phase is confirmed as Phase 4 of Wheeler's five across independent summaries of the book. The 23 per cent revenue figure was traced this session to a 2016 report by Lucidpress, now Marq, produced with Demand Metric; a 2019 update from the same source gives 33 per cent instead. Both come from surveys of marketers, not from audited financials, and no independent replication was locatable. Treat the number as vendor marketing. The NASA rules were read from its brand guidelines page: the insignia is centre aligned using its blue sphere rather than object-centred, and the logotype should never appear without the insignia in appropriate proximity except on commercial merchandise."
      },
      belongs: {
        verdict: "core",
        why: "It is what an identity is for, and it is the part of the job that continues long after the mark is drawn."
      },
      related: [831, 839, 851, 9851]
    },
    {
      n: 853,
      title: "Evolution versus revolution in rebrands",
      aka: ["Refresh versus redesign", "Incremental rebrand"],
      oneLine: "Choosing between adjusting an identity people already know and replacing it outright.",
      demo: {
        caption: "Four steps of one mark. On the right the last step keeps none of what people had already learned.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Evolution</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--centre\"><svg class=\"db-svg\" viewBox=\"0 0 56 56\" style=\"width:54px\"><circle class=\"s\" cx=\"28\" cy=\"28\" r=\"23\"/><circle class=\"s-mute\" cx=\"28\" cy=\"28\" r=\"17\"/><path class=\"s-mute\" d=\"M28 3 V8 M53 28 H48 M28 53 V48 M3 28 H8\"/><path class=\"f\" d=\"M28 18 L38 37 L18 37 Z\"/></svg><svg class=\"db-svg\" viewBox=\"0 0 56 56\" style=\"width:54px\"><circle class=\"s\" cx=\"28\" cy=\"28\" r=\"23\"/><path class=\"f\" d=\"M28 18 L38 37 L18 37 Z\"/></svg><svg class=\"db-svg\" viewBox=\"0 0 56 56\" style=\"width:54px\"><circle class=\"s\" style=\"stroke-width:3\" cx=\"28\" cy=\"28\" r=\"22\"/><path class=\"f\" d=\"M28 16 L39 38 L17 38 Z\"/></svg><svg class=\"db-svg\" viewBox=\"0 0 56 56\" style=\"width:54px\"><circle class=\"f\" cx=\"28\" cy=\"28\" r=\"23\"/><path style=\"fill:var(--paper-raised)\" d=\"M28 15 L40 39 L16 39 Z\"/></svg></div><span class=\"db-note\">step four: the same mark, tightened</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Revolution</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--centre\"><svg class=\"db-svg\" viewBox=\"0 0 56 56\" style=\"width:54px\"><circle class=\"s\" cx=\"28\" cy=\"28\" r=\"23\"/><circle class=\"s-mute\" cx=\"28\" cy=\"28\" r=\"17\"/><path class=\"s-mute\" d=\"M28 3 V8 M53 28 H48 M28 53 V48 M3 28 H8\"/><path class=\"f\" d=\"M28 18 L38 37 L18 37 Z\"/></svg><svg class=\"db-svg\" viewBox=\"0 0 56 56\" style=\"width:54px\"><circle class=\"s\" cx=\"28\" cy=\"28\" r=\"23\"/><path class=\"f\" d=\"M28 18 L38 37 L18 37 Z\"/></svg><svg class=\"db-svg\" viewBox=\"0 0 56 56\" style=\"width:54px\"><circle class=\"s\" style=\"stroke-width:3\" cx=\"28\" cy=\"28\" r=\"22\"/><path class=\"f\" d=\"M28 16 L39 38 L17 38 Z\"/></svg><svg class=\"db-svg\" viewBox=\"0 0 56 56\" style=\"width:54px\"><rect class=\"s\" x=\"6\" y=\"6\" width=\"44\" height=\"44\"/><path class=\"s\" d=\"M14 42 L42 14\"/></svg></div><span class=\"db-note\">step four: recognition starts again</span></div></div></div></div>"
      },
      what: "Evolution keeps the recognisable assets and corrects what is broken. Revolution throws them away, which discards the recognition already paid for and restarts the exposure clock. The case for revolution is genuine when the brand carries damage, when the business has changed materially, or when the old mark cannot function technically. Outside those cases the arithmetic usually favours evolution.",
      why: "Getting this call right is the highest-stakes judgement in brand work. It is also the one most likely to be made for internal reasons, which Rand named in 1991: to satisfy a chief executive who does not wish to be linked with the past, or because it is the thing to do.",
      how: [
        "Measure what people currently attribute to you before changing it, and protect whatever scores well.",
        "Change one asset at a time where you can, so attribution has something to hold onto.",
        "Write down what problem the change solves, then check that it does.",
        "Plan the transition properly, including the cost of replacing physical assets."
      ],
      example: "Gap put a new logo on its website in early October 2010 and announced on 11 October, after about a week of public objection, that it was going back to the old one. Tropicana relaunched Pure Premium packaging on 8 January 2009; Advertising Age, citing Nielsen data, reported unit sales down around 20 per cent by late February, and the company announced a return to the old carton on 23 February 2009.",
      numbers: "Gap: new logo on the website in early October 2010, reversal announced 11 October 2010. Tropicana: new pack 8 January 2009, sales reported down about 20 per cent by late February 2009, reversal announced 23 February 2009. Consignia: about £2 million spent on becoming Consignia, of which £500,000 was the name itself; reverting reported as likely to top £1 million (UK press, June 2002).",
      pitfall: "Redesigning to look current. Fashion moves faster than recognition builds, so a mark changed for fashion will need changing again before it has been learned.",
      source: "Paul Rand (1991); Gap logo withdrawal (2010); Tropicana packaging reversal (2009); UK press coverage of Consignia (June 2002)",
      verify: {
        status: "verified",
        note: "Rand's remarks on ego-driven redesign read in his 1991 essay on paulrand.design: logos get redesigned to feed someone's ego, to satisfy a CEO who doesn't wish to be linked with the past, or often because it's the thing to do. Gap's reversal is well documented: Marka Hansen announced the return of the old logo on 11 October 2010. The launch date is not settled. Some accounts give 4 October, when the logo went up quietly on Gap's site, and others 6 October, when it drew wide attention, so no single launch date is claimed here. An earlier draft asserted 6 October as agreed fact. The widely repeated 100 million dollar cost figure has no traceable source and is deliberately omitted. Tropicana dates and the 20 per cent unit-sales fall are consistently reported across secondary sources all citing the same Advertising Age report of Nielsen data; the original is paywalled, so this is given as reported rather than as read. Consignia costs corrected this session: contemporaneous June 2002 trade reporting gives about £2 million spent on the Consignia rebrand, of which £500,000 was the name change, and estimates the reversal at possibly more than £1 million. An earlier draft of this entry claimed a £1.5 million launch cost, which no source supports."
      },
      belongs: {
        verdict: "core",
        why: "The judgement a designer is paid to make on any established brand, and the one with the largest downside if it is made badly."
      },
      related: [820, 831, 852]
    },
    {
      n: 854,
      title: "Trademark and cultural checks",
      aka: ["Clearance", "Linguistic screening", "Freedom to operate"],
      oneLine: "Testing a name and mark for legal availability and for how they read in every target market.",
      demo: {
        caption: "Forty-five classes. The name can be free in the three you trade in, or already registered in one of them.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 148\"><rect class=\"s-mute\" x=\"12\" y=\"12\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"30\" y=\"12\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"48\" y=\"12\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"66\" y=\"12\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"84\" y=\"12\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"102\" y=\"12\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"120\" y=\"12\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"138\" y=\"12\" width=\"14\" height=\"14\"/><rect class=\"f-accent\" x=\"156\" y=\"12\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"12\" y=\"30\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"30\" y=\"30\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"48\" y=\"30\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"66\" y=\"30\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"84\" y=\"30\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"102\" y=\"30\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"120\" y=\"30\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"138\" y=\"30\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"156\" y=\"30\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"12\" y=\"48\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"30\" y=\"48\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"48\" y=\"48\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"66\" y=\"48\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"84\" y=\"48\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"102\" y=\"48\" width=\"14\" height=\"14\"/><rect class=\"f-accent\" x=\"120\" y=\"48\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"138\" y=\"48\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"156\" y=\"48\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"12\" y=\"66\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"30\" y=\"66\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"48\" y=\"66\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"66\" y=\"66\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"84\" y=\"66\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"102\" y=\"66\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"120\" y=\"66\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"12\" y=\"96\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"30\" y=\"96\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"48\" y=\"96\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"66\" y=\"96\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"84\" y=\"96\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"102\" y=\"96\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"120\" y=\"96\" width=\"14\" height=\"14\"/><rect class=\"f-accent\" x=\"138\" y=\"96\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"156\" y=\"96\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"12\" y=\"114\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"30\" y=\"114\" width=\"14\" height=\"14\"/><path class=\"s\" style=\"stroke:var(--sig-disputed)\" d=\"M122 50 L132 60 M132 50 L122 60\"/><path class=\"s-mute\" d=\"M136 55 H172\"/><text class=\"t\" x=\"176\" y=\"58\">class 25 already taken</text><text class=\"t\" x=\"176\" y=\"20\">1 to 34, goods</text><text class=\"t\" x=\"176\" y=\"104\">35 to 45, services</text><text class=\"t\" x=\"12\" y=\"144\">shaded: the three classes you trade in</text></svg></div>"
      },
      what: "Two checks run in parallel with the design work. Legal clearance asks whether the name or mark is free in the classes and territories you trade in. The Nice Classification, set up by the Nice Agreement of 15 June 1957 and run by WIPO, divides goods and services into 45 classes, 1 to 34 for goods and 35 to 45 for services, and you register only in the ones you need. Cultural screening asks how the name, the mark and the colours read to native speakers in each market.",
      why: "A mark you cannot register is a mark you cannot defend, and a name that reads badly in a major market has to be replaced later at far greater cost. Both checks are cheap early and expensive late.",
      how: [
        "Run register searches in the relevant classes before anyone gets attached to a shortlist.",
        "Get native speakers, not translation software, to react to names and marks in each market.",
        "Check gestures, animals and colour associations as well as words, since marks travel without captions.",
        "Record what was checked and when, because clearance is a moment-in-time result."
      ],
      example: "Mitsubishi sells the same vehicle as the Pajero in most markets, the Montero in Spain, Latin America and North America because pajero is vulgar Spanish, and the Shogun in the United Kingdom. Three names, one product, because the check was done.",
      numbers: "Nice Classification: 45 classes, 1 to 34 goods, 35 to 45 services; Nice Agreement concluded 15 June 1957.",
      pitfall: "Repeating the Chevrolet Nova story as evidence. Snopes has documented that the car sold acceptably in Spanish-speaking markets and that no Spanish speaker would parse Nova as no va; using a debunked anecdote to justify a real precaution undermines the precaution.",
      source: "WIPO, Nice Classification (Nice Agreement, 15 June 1957); Snopes fact-check on the Chevrolet Nova",
      verify: {
        status: "verified",
        note: "Nice Classification structure re-checked this session: 45 classes, 1 to 34 for goods and 35 to 45 for services, established by the Nice Agreement concluded at Nice on 15 June 1957 and administered by WIPO. Snopes rates the Chevrolet Nova legend false, noting the car sold well in Mexico and Venezuela, that Venezuelan sales beat GM's expectations, and that nova and no va are not read as the same word. The Mitsubishi naming is a matter of public record: Pajero in most markets, Montero in Spain, Latin America and North America, Shogun in the United Kingdom, the original name taken from Leopardus pajeros, the Pampas cat."
      },
      belongs: {
        verdict: "adjacent",
        why: "Clearance is legal work and cultural screening is market research. Both belong here because they can kill a mark outright, so the designer has to schedule them alongside the sketching rather than after it."
      },
      related: [823, 842, 835]
    }
  ]
};
