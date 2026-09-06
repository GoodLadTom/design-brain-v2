window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[8] = {
  n: 8,
  slug: "typography-macro",
  title: "Typography: macro",
  blurb: "How typefaces are classified, chosen, paired and scaled, and what the letterforms are actually made of.",
  intro: "Macro typography is everything you decide before you start fiddling with word spacing: which typeface, which cuts of it, how many sizes, how they relate, and which of the font's hidden characters you switch on. Most of the vocabulary comes from two places. The classification names (Garalde, Didone, Lineal, Incise) come from Maximilien Vox's 1954 scheme, which ATypI adopted in 1962 and formally dropped in 2021 as no longer representative of the range of writing systems its members work with. The technical controls (small caps, oldstyle figures, tabular figures, variable axes) come from the OpenType specification, which is public and precise. Knowing both means you can say what you want and then actually get it out of the font.",
  sources: [
    "Maximilien Vox, typeface classification (1954); adopted by ATypI 1962, de-adopted 2021",
    "Robert Bringhurst, The Elements of Typographic Style (1992; later editions)",
    "Carl Dair, Design with Type (1952; revised 1967)",
    "Microsoft, OpenType specification 1.9.1: registered features and design-variation axis registry",
    "Adobe, Apple, Google and Microsoft, OpenType 1.8 Font Variations, announced at ATypI Warsaw, 14 September 2016",
    "Tim Brown, More Meaningful Typography, A List Apart (3 May 2011)",
    "Mike Riethmuller, Precise control over responsive typography (17 March 2015)",
    "A. Dawn Shaikh, Barbara Chaparro and Doug Fox, Perception of Fonts: Perceived Personality Traits and Uses, Usability News 8(1), Wichita State University (2006)",
    "George Markowsky, Misconceptions about the Golden Ratio, The College Mathematics Journal 23(1), 2-19 (1992)",
    "The Unicode Standard, character database 16.0.0"
  ],
  entries: [
    {
      n: 326,
      title: "Typeface versus font",
      aka: ["Type family versus font file"],
      oneLine: "A typeface is the design; a font is one specific instance of that design you can set.",
      demo: { none: "The difference sits in what the two words point at rather than in anything you could see, so any picture would need labels naming the parts, which is the sentence redrawn." },
      what: "In metal type a font was a case of sorts in one size and one style, so 8-point Caslon Italic and 10-point Caslon Italic were two different fonts of the same typeface. Digital outlines scale freely, so the size half of the old definition fell away. What survives in professional use is: typeface means the drawn design and the family around it, font means the thing you install, licence and select. Most people outside the trade use font for both, and that is now normal English rather than an error.",
      why: "Getting the two words straight makes budgets and licences legible. A client who asks for one font and a designer who quotes for a typeface family are talking about very different amounts of money.",
      how: [
        "Say typeface when you mean the design and font when you mean the file you licensed.",
        "Count licences by font file, because that is how foundries price and how web-font limits are counted.",
        "Write specifications as family plus named styles, not as a single vague font name."
      ],
      example: "Minion Pro is one typeface shipping four optical sizes, two widths and four weights, each with its italic, which comes to 64 styles. Each of those 64 is a font; Minion is the typeface.",
      numbers: "Minion Pro: 64 styles from four optical sizes, two widths and four weights, each with an italic.",
      pitfall: "Correcting a client's use of the word in a meeting buys you nothing and costs you goodwill. Fix it quietly in the written spec instead.",
      source: "Metal-type usage, still the standard trade distinction; recorded in Wikipedia's Typeface article and in Bringhurst, The Elements of Typographic Style (1992).",
      verify: { status: "verified", note: "Checked the Wikipedia Typeface article this session for the metal-type definition (8-point Caslon Italic and 10-point Caslon Italic as separate fonts) and the note that digital usage has merged the terms. The 64-style count is corrected in attribution on this pass: it comes from Wikipedia's Minion article, which itemises four optical sizes, two widths and four weights each with an italic. Adobe's own Minion page describes the family as three weights and two widths with optical size variants and gives no total, so the count is no longer credited to Adobe." },
      belongs: { verdict: "adjacent", why: "Downgraded on review. This is trade vocabulary and a licensing distinction, not a design principle: no layout decision changes depending on which word you use, and the entry itself concedes that general usage has merged the two and that correcting people is not worth doing. Useful to know, adjacent to the craft." },
      related: [338, 348, 349, 364]
    },
    {
      n: 327,
      title: "Humanist / old-style / garalde",
      aka: ["Venetian", "Aldine", "Old style", "Garalde", "Humanes"],
      oneLine: "The oldest roman types: low contrast, diagonal stress, angled bracketed serifs, drawn from the broad-nib pen.",
      demo: {
        caption: "Two lowercase e's from the same skeleton. The only difference is the accented crossbar: angled on the left, level on the right.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Venetian</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><path class=\"s\" style=\"stroke-width:8\" d=\"M127.4 65.8A28 28 0 1 0 72 60A28 28 0 0 0 119.8 79.8\"/><path class=\"s-accent\" style=\"stroke-width:8\" d=\"M75 66L125 54\"/><text class=\"t\" x=\"100\" y=\"114\" text-anchor=\"middle\">angled crossbar</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Garalde</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><path class=\"s\" style=\"stroke-width:8\" d=\"M127.4 65.8A28 28 0 1 0 72 60A28 28 0 0 0 119.8 79.8\"/><path class=\"s-accent\" style=\"stroke-width:8\" d=\"M74 60H126\"/><text class=\"t\" x=\"100\" y=\"114\" text-anchor=\"middle\">level crossbar</text></svg></div></div></div>"
      },
      what: "This covers the first two of Vox's classes, which the master list runs together. Humanes (also called Venetian) are the 1470s types after Nicolas Jenson, with a slanted crossbar on the lowercase e. Garaldes take their name from Garamond and Aldus, and descend from the type Francesco Griffo cut for Aldus Manutius around 1495, first used in February 1496; the crossbar on the e is level and the proportions are finer with slightly stronger contrast. Both share a diagonal stress, meaning the thinnest points of the o sit on a slanted axis, and both have bracketed serifs with angled heads.",
      why: "These faces are the default for long-form reading in books and long articles because the pen-derived shapes vary a lot from letter to letter, which is what makes words easy to tell apart. They also read as settled and traditional, which is either what you want or exactly what you must avoid.",
      how: [
        "Reach for a garalde first for anything over a few hundred words of continuous prose.",
        "Check the lowercase e crossbar to tell a Venetian from a garalde when a foundry is vague.",
        "Expect a small x-height, so set them a size larger than you would set a modern sans."
      ],
      example: "Bembo (after Griffo's Aldine type of around 1495) and Garamond are the standard garaldes; Centaur is the standard Jenson revival.",
      numbers: "",
      pitfall: "Digital revivals of the same historical face vary enormously in weight and x-height. Adobe Garamond, Stempel Garamond and EB Garamond are not interchangeable, so test the actual file rather than trusting the name.",
      source: "Vox classification (1954), adopted by ATypI in 1962 and de-adopted in 2021.",
      verify: { status: "adjusted", note: "The master list merges two separate Vox classes. Checked against the Vox-ATypI class list on Wikipedia and the Old-style serif article: Humanes/Venetian are distinguished from Garaldes by the angled crossbar of the e, and Garalde is a portmanteau of Garamond and Aldus. Date corrected on review: Wikipedia's Bembo article gives the Griffo type as cut around 1495 and first used in February 1496 (1495 by the Venetian calendar), so the flat 1495 the author wrote is only half the story. Split explained rather than silently merged." },
      belongs: { verdict: "core", why: "The most widely used class of text face, and the reference point every other serif class is defined against." },
      related: [328, 329, 350, 356, 357]
    },
    {
      n: 328,
      title: "Transitional",
      aka: ["Realist", "Reales", "Baroque serif"],
      oneLine: "Serifs that sit between old style and Didone: sharper contrast, near-vertical stress, still bracketed.",
      demo: {
        caption: "Three bowls, left to right. The accented axis swings upright and the thin strokes thin out; transitional is the middle state.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 124\"><path class=\"f\" fill-rule=\"evenodd\" d=\"M30 60A30 30 0 1 1 90 60A30 30 0 1 1 30 60ZM81.14 52.31A22.5 26.5 -20 1 1 38.86 67.69A22.5 26.5 -20 1 1 81.14 52.31Z\"/><path class=\"f\" fill-rule=\"evenodd\" d=\"M140 60A30 30 0 1 1 200 60A30 30 0 1 1 140 60ZM191.38 57.75A21.5 27.5 -6 1 1 148.62 62.25A21.5 27.5 -6 1 1 191.38 57.75Z\"/><path class=\"f\" fill-rule=\"evenodd\" d=\"M250 60A30 30 0 1 1 310 60A30 30 0 1 1 250 60ZM300 60A20 28.8 0 1 1 260 60A20 28.8 0 1 1 300 60Z\"/><path class=\"s-accent\" d=\"M47 24.3L73 95.7\"/><path class=\"s-accent\" d=\"M166 22.2L174 97.8\"/><path class=\"s-accent\" d=\"M280 22V98\"/><text class=\"t\" x=\"60\" y=\"116\" text-anchor=\"middle\">garalde</text><text class=\"t\" x=\"170\" y=\"116\" text-anchor=\"middle\">transitional</text><text class=\"t\" x=\"280\" y=\"116\" text-anchor=\"middle\">didone</text></svg></div>"
      },
      what: "Vox called these Reales. They appear in the mid-eighteenth century, starting with the Romain du roi drawn on a grid for the French crown, running through Fournier and reaching their best-known form in John Baskerville's type of 1757. Compared with a garalde the contrast between thick and thin is stronger, the stress has swung close to vertical, and stroke endings are often ball terminals rather than blunt angled serifs. Serifs are still bracketed, so they curve into the stem rather than meeting it as a hairline. Times New Roman (1932) is usually filed here.",
      why: "Transitionals are the safest general-purpose serif: crisp enough to look deliberate in headings, even enough to read comfortably at text size. They carry authority without the coldness of a Didone.",
      how: [
        "Use a transitional when you want a serif that works for both display and body copy without switching family.",
        "Give Baskerville-style faces generous leading, because the strong verticals make tight lines feel congested.",
        "Avoid setting them very small in low-quality print, where the thin strokes drop out."
      ],
      example: "Baskerville, cut in Birmingham and first used in 1757, is the textbook transitional. Times New Roman, drawn for The Times in 1932, is the one most people have actually read.",
      numbers: "",
      pitfall: "Times New Roman is a newspaper face designed to be economical in narrow columns. Used as a default at wide measures it looks cramped and unconsidered, which is why it reads as the font of not choosing a font.",
      source: "Vox classification (1954); dates from Wikipedia's Serif article.",
      verify: { status: "verified", note: "Checked Wikipedia's Serif article this session: transitional/baroque serifs defined by stronger contrast than old style, more vertical stress and ball terminals, with Romain du roi, Fournier, Baskerville (1757) and Times New Roman (1932) named." },
      belongs: { verdict: "core", why: "One of the four historical serif classes, and the group most working text faces belong to." },
      related: [327, 329, 356, 357]
    },
    {
      n: 329,
      title: "Didone",
      aka: ["Modern", "Neoclassical"],
      oneLine: "Extreme thick-thin contrast, flat unbracketed hairline serifs, strictly vertical stress.",
      demo: {
        caption: "Look where the serif meets the stem: on the left it curves in, on the right it stops at a right angle.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Garalde: bracketed</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 140 100\"><path class=\"f\" d=\"M38 80H102V76H96C88 76 76 70 76 58V20H64V58C64 70 52 76 44 76H38Z\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Didone: unbracketed hairline</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 140 100\"><path class=\"f\" d=\"M38 80H102V78H76V20H64V78H38Z\"/></svg></div></div></div>"
      },
      what: "The name is a 1954 coinage joining Didot and Bodoni, the two families whose work defined the style around 1800. The verticals are heavy, the horizontals are hairlines, the serifs are thin flat lines with no bracket where they meet the stem, and the stress is dead vertical. Ball terminals are common. The style became the default for general printing through the nineteenth century and now reads as luxury, fashion and editorial.",
      why: "Nothing else carries the same combination of formality and glamour, which is why fashion mastheads keep returning to it. The cost is that the hairlines are fragile, so the style demands size, good reproduction and careful spacing.",
      how: [
        "Set Didones large. Below roughly text size the hairlines vanish or clog depending on the medium.",
        "Use a text cut or a low optical-size setting if you must run one as body copy.",
        "Give them extra leading, because heavy verticals with hairline horizontals create strong vertical striping."
      ],
      example: "Bodoni, Didot and Walbaum are the three canonical families. Their descendants are on most fashion magazine covers.",
      numbers: "",
      pitfall: "Wikipedia's Didone article names the specific failure: dazzle, where the thick verticals grab so much attention that readers struggle to pick out the thin strokes that tell letters apart. It gets worse as the setting gets smaller and tighter.",
      source: "Vox classification (1954), coined from Didot and Bodoni.",
      verify: { status: "verified", note: "Checked Wikipedia's Didone (typography) article this session for the 1954 portmanteau origin, the defining features (unbracketed hairline serifs, vertical stress, strong contrast, ball terminals) and the documented dazzle problem." },
      belongs: { verdict: "core", why: "A distinct historical class with a specific and predictable failure mode a designer must plan around." },
      related: [328, 348, 349, 356]
    },
    {
      n: 330,
      title: "Slab serif",
      aka: ["Egyptian", "Mecanes", "Antique", "Square serif"],
      oneLine: "Heavy rectangular serifs with little thick-thin variation, built for advertising rather than reading.",
      demo: {
        caption: "Same stem in both. Only the serif changes: a light finishing stroke on the left, a bar as heavy as the stem.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Old-style serif</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 140 100\"><path class=\"f\" d=\"M40 80H100V76H77V20H63V76H40Z\"/><path class=\"s-accent\" d=\"M63 16H77\"/><path class=\"s-accent\" d=\"M34 76V80\"/><text class=\"t\" x=\"70\" y=\"11\" text-anchor=\"middle\">stem</text><text class=\"t\" x=\"34\" y=\"70\" text-anchor=\"middle\">serif</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Slab serif</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 140 100\"><path class=\"f\" d=\"M40 80H100V66H77V20H63V66H40Z\"/><path class=\"s-accent\" d=\"M63 16H77\"/><path class=\"s-accent\" d=\"M34 66V80\"/><text class=\"t\" x=\"70\" y=\"11\" text-anchor=\"middle\">stem</text><text class=\"t\" x=\"34\" y=\"60\" text-anchor=\"middle\">serif</text></svg></div></div></div>"
      },
      what: "Vincent Figgins issued slab-serif type as Antique in a specimen dated 1815, probably actually released in 1817; the earliest known slab letterform is woodblock lettering on a London lottery advertisement of 1810. The serifs are blunt rectangles, roughly the same weight as the stems. Two sub-groups matter in practice: Clarendon-style slabs, which keep a bracket where serif meets stem and vary stroke weight; and geometric slabs such as Rockwell and Memphis, which have unbracketed serifs and almost no contrast.",
      why: "Slabs shout without being sans. They hold up in small sizes on rough paper and on screens, which is why they persist in signage, packaging and headline work.",
      how: [
        "Use a bracketed Clarendon slab when you need warmth; use a geometric slab when you need blunt force.",
        "Watch the letterfit at large sizes, because the big serifs close up the gaps between letters.",
        "Treat slab bolds as display only; the counters fill in fast as weight increases."
      ],
      example: "Clarendon on American national park signage, Rockwell in the early-1990s editions of Guinness World Records and in Arby's advertising, Courier as the typewriter slab most people have used without noticing.",
      numbers: "",
      pitfall: "The name Egyptian is historically muddled. James Mosley showed that the first types actually labelled Egyptian were sans serifs, so a nineteenth-century specimen labelled Egyptian may not be a slab at all.",
      source: "Vox classification (1954), class Mecanes; dates from Wikipedia's Slab serif article.",
      verify: { status: "adjusted", note: "Checked Wikipedia's Slab serif article this session: Figgins Antique specimen dated 1815 and probably issued 1817, the 1810 lottery-advertisement woodblock as earliest known example, and Mosley's finding that the first faces labelled Egyptian were sans serifs. The example was wrong and is corrected: the author wrote Rockwell on older Guinness advertising, but Wikipedia's Rockwell article records Guinness World Records (the book) in its early-1990s editions, not the brewer's advertising, and separately names Arby's. I found no source for Rockwell in Guinness beer advertising." },
      belongs: { verdict: "core", why: "A named historical class still in active use, with its own spacing and weight behaviour." },
      related: [329, 331, 336, 357]
    },
    {
      n: 331,
      title: "Grotesque and neo-grotesque",
      aka: ["Gothic", "Lineal", "Anonymous sans"],
      oneLine: "Nineteenth-century sans serifs and their tidied-up 1950s Swiss descendants.",
      demo: {
        caption: "Two capital G's. On the left the stroke projects below the bar as an accented spur; on the right it does not.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Grotesque: quirk kept</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 140 124\"><path class=\"s\" style=\"stroke-width:9\" d=\"M94.5 39.4A32 32 0 1 0 94.5 80.6\"/><path class=\"s-accent\" style=\"stroke-width:9\" d=\"M94.5 80.6V62\"/><path class=\"s\" style=\"stroke-width:9\" d=\"M94.5 62H72\"/><text class=\"t\" x=\"70\" y=\"116\" text-anchor=\"middle\">spur</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Neo-grotesque: quirk removed</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 140 124\"><path class=\"s\" style=\"stroke-width:9\" d=\"M94.5 39.4A32 32 0 1 0 101.9 62H72\"/><text class=\"t\" x=\"70\" y=\"116\" text-anchor=\"middle\">no spur</text></svg></div></div></div>"
      },
      what: "William Caslon IV showed the first sans-serif printing type in England around 1816, a capitals-only face called Two Lines English Egyptian; no period uses of it have been found. Figgins issued a more commercially successful sans in 1828. The word grotesque comes from the Italian grottesco and was popularised by William Thorowgood around 1830, as an insult about how strange these letters looked next to the ornate types of the day. Grotesques such as Akzidenz-Grotesk keep small quirks: a spur on the G, a curled leg on the R, some stroke-width variation. Neo-grotesques such as Helvetica and Univers, both from 1957, iron those quirks out for a more even, uniform texture.",
      why: "Neo-grotesques are the standard neutral voice of corporate and Swiss-influenced design. Grotesques give you the same plainness with a bit of character left in, which is why they have come back into fashion for brands that want plain but not anonymous.",
      how: [
        "Pick a grotesque when you want plainness with personality; pick a neo-grotesque when you want the type to disappear.",
        "Check the capital G and R and the leg of the a: those tell you which group you are in.",
        "Tighten default tracking at display sizes; most grotesques were spaced for text."
      ],
      example: "Akzidenz-Grotesk from the 1890s (grotesque) against Helvetica and Univers from 1957 (neo-grotesque).",
      numbers: "",
      pitfall: "Closed apertures on many neo-grotesques make a, c, e and s look similar at small sizes and low contrast. That is a legibility cost you pay for the even texture.",
      source: "Vox class Lineales (1954); dates and etymology from Wikipedia's Sans-serif article.",
      verify: { status: "verified", note: "Checked Wikipedia's Sans-serif article this session: Caslon IV's Two Lines English Egyptian c.1816 with no known period uses, Figgins 1828, grottesco etymology popularised by Thorowgood around 1830, Akzidenz-Grotesk 1890s, Helvetica and Univers both 1957." },
      belongs: { verdict: "core", why: "The two most-used sans classes in commercial work, and the distinction changes the tone of a whole identity." },
      related: [332, 333, 355, 342]
    },
    {
      n: 332,
      title: "Geometric sans",
      aka: ["Constructed sans", "Bauhaus sans"],
      oneLine: "Sans serifs built from circles and straight lines, with near-uniform stroke weight.",
      demo: {
        caption: "The faint circle and square behind each letter are identical. Every shape is that one radius plus straight lines.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 100\"><rect class=\"s-mute\" x=\"25\" y=\"25\" width=\"60\" height=\"60\"/><rect class=\"s-mute\" x=\"130\" y=\"25\" width=\"60\" height=\"60\"/><rect class=\"s-mute\" x=\"235\" y=\"25\" width=\"60\" height=\"60\"/><circle class=\"s-mute\" cx=\"160\" cy=\"55\" r=\"30\"/><circle class=\"s-mute\" cx=\"265\" cy=\"55\" r=\"30\"/><circle class=\"s\" style=\"stroke-width:7\" cx=\"55\" cy=\"55\" r=\"30\"/><path class=\"s\" style=\"stroke-width:7\" d=\"M181.2 33.8A30 30 0 1 0 181.2 76.2\"/><path class=\"s\" style=\"stroke-width:7\" d=\"M235 14V85\"/><circle class=\"s\" style=\"stroke-width:7\" cx=\"265\" cy=\"55\" r=\"30\"/></svg></div>"
      },
      what: "The 1920s produced sans faces drawn from simple geometry rather than from handwriting. Futura, designed by Paul Renner and released in 1927, is the defining example; Erbar came slightly earlier, around 1925, and Kabel is from the same moment. The o is close to a true circle, the a is single-storey, and stroke width barely changes. Ascenders are usually long and the x-height is comparatively small, which gives the classic tall, airy look.",
      why: "Geometric sans read as modern, rational and slightly cool, which is why tech and architecture brands keep choosing them. They photograph and scale beautifully in large sizes.",
      how: [
        "Use them for display, logotypes and short passages rather than long reading.",
        "Add tracking at small sizes; the circular forms crowd each other when set tight.",
        "Check the numerals and the lowercase l against the capital I, which are often near-identical."
      ],
      example: "Futura (Renner, 1927), used by the artist Barbara Kruger since the late 1970s and in Wes Anderson's early film titles. Volkswagen's VAG Rounded borrows Futura's letterforms and rounds every terminal.",
      numbers: "",
      pitfall: "Because so many letters share the same circle, o, c, e and the round shoulders of n and u become hard to tell apart at speed. Treat any claim about how much this costs you as craft opinion unless someone names a study; the shape argument is sound, the size of the effect is not something I could verify.",
      source: "Vox class Lineales, geometric subgroup (1954); dates from Wikipedia's Sans-serif article.",
      verify: { status: "adjusted", note: "Dates and defining traits (geometric shapes, single-storey a, Futura 1927, Erbar c.1925, Kabel) checked against Wikipedia's Sans-serif article this session. The legibility claim is deliberately hedged because I found no study to cite for its magnitude. The example was replaced on review: the author claimed Volkswagen and Nike both built identities on geometric sans, and Wikipedia's Futura article does not name Nike at all and mentions Volkswagen only for VAG Rounded borrowing Futura's letterforms. Corrected again on this pass: the entry then listed the Toronto Transit Commission and Comedy Central as Futura users, and the article credits neither with Futura itself. It gives the TTC the Toronto Subway font, based on Futura, and Comedy Central Brandon Grotesque, inspired by it. The users now named, Barbara Kruger from the late 1970s and Wes Anderson's early film titles, are ones the article records as setting Futura." },
      belongs: { verdict: "core", why: "A distinct and heavily used sans class whose geometry changes how you must space and size it." },
      related: [331, 333, 350, 355]
    },
    {
      n: 333,
      title: "Humanist sans",
      aka: ["Humanistic sans", "Calligraphic sans"],
      oneLine: "Sans serifs with the proportions and open shapes of pen-written roman letters.",
      demo: {
        caption: "Two lowercase c's, same weight. The accented line measures the mouth: nearly shut on the left, wide open on the right.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Closed aperture</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 140 124\"><path class=\"s\" style=\"stroke-width:9\" d=\"M99.7 48A32 32 0 1 0 99.7 72\"/><path class=\"s-accent\" d=\"M99.7 48V72\"/><text class=\"t\" x=\"70\" y=\"116\" text-anchor=\"middle\">aperture</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Open aperture</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 140 124\"><path class=\"s\" style=\"stroke-width:9\" d=\"M87 32.9A32 32 0 1 0 87 87.1\"/><path class=\"s-accent\" d=\"M87 32.9V87.1\"/><text class=\"t\" x=\"70\" y=\"116\" text-anchor=\"middle\">aperture</text></svg></div></div></div>"
      },
      what: "These take the skeleton of a humanist serif and strip the serifs off, keeping the varied letter widths, the two-storey a and g, and open apertures on a, c, e and s. Edward Johnston's 1916 type for the London Underground is the starting point; Eric Gill's Gill Sans followed in 1928. Adrian Frutiger's Frutiger, released in 1976, grew out of Roissy, commissioned in 1970 or 1971 for signage at the new Charles de Gaulle Airport. Frutiger's stated aim was Univers's cleanliness with Gill Sans's organic proportions.",
      why: "The wider range of letter widths and the open apertures make words easier to tell apart at distance and at small sizes, which is why this class dominates signage and wayfinding. It also reads warmer than a neo-grotesque without looking soft.",
      how: [
        "Default to a humanist sans for interface text, signage and anything read in a hurry.",
        "Compare apertures directly: hold a, c, e and s side by side against a neo-grotesque before choosing.",
        "Use it as the sans half of a serif-plus-sans pairing when you want the two to feel related."
      ],
      example: "Roissy, the face that became Frutiger, on the signs at Charles de Gaulle Airport; Johnston and its later revisions across the London Underground since 1916.",
      numbers: "",
      pitfall: "Humanist sans families often have weaker bolds than grotesques, because the varied widths and open shapes fight against heavy weights. Check the bold before committing to it for headings.",
      source: "Vox class Lineales, humanist subgroup (1954); dates from Wikipedia's Sans-serif and Frutiger articles.",
      verify: { status: "verified", note: "Checked Wikipedia's Sans-serif article (Johnston 1916, Gill Sans 1928, Frutiger 1976) and the Frutiger typeface article this session, which records Roissy commissioned 1970/71 for Charles de Gaulle Airport, public release in 1976 by Stempel with Linotype, and the open apertures on a, c, e and s. The example was tightened on review: the airport signs carried Roissy, and Frutiger is the commercial release that grew out of it, so naming Frutiger at the airport was a shorthand worth undoing." },
      belongs: { verdict: "core", why: "The class you reach for whenever reading conditions are poor, which covers most signage and most interfaces." },
      related: [331, 332, 355, 327]
    },
    {
      n: 334,
      title: "Glyphic",
      aka: ["Incise", "Incises", "Inscriptional", "Chiselled"],
      oneLine: "Letters that look carved rather than written, with flared stems and small wedge-like serifs.",
      demo: {
        caption: "Three stems at one weight. The middle one has no serif attached to it; the stroke itself swells towards the ends.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 112\"><path class=\"f\" d=\"M49 20H61V80H49Z\"/><path class=\"f\" d=\"M155 20H175C172 32 171 44 171 50C171 56 172 68 175 80H155C158 68 159 56 159 50C159 44 158 32 155 20Z\"/><path class=\"f\" d=\"M259 80H291V77H287C283 77 281 74 281 70V30C281 26 283 23 287 23H291V20H259V23H263C267 23 269 26 269 30V70C269 74 267 77 263 77H259Z\"/><text class=\"t\" x=\"55\" y=\"100\" text-anchor=\"middle\">sans</text><text class=\"t\" x=\"165\" y=\"100\" text-anchor=\"middle\">glyphic</text><text class=\"t\" x=\"275\" y=\"100\" text-anchor=\"middle\">serif</text></svg></div>"
      },
      what: "Vox called this class Incises. The reference is Roman inscriptional capitals cut in stone: stems that swell slightly towards the ends, serifs that are small triangular flares rather than separate slabs, and a general feeling of having been chiselled. Many glyphics are capital-heavy, and some have no real lowercase at all. Trajan, Albertus and Copperplate Gothic are the names usually given.",
      why: "Glyphics carry weight and permanence without shouting, which is why they end up on memorials, institutional identities and film posters. They also sidestep the serif-or-sans question, which can be handy when a client wants gravity but not a book face.",
      how: [
        "Set glyphic capitals with generous letterspacing; they were drawn for inscriptions, not for words at text size.",
        "Check whether the family has a usable lowercase before you plan a layout around it.",
        "Pair with a plain humanist sans for body copy so the glyphic stays a voice, not a texture."
      ],
      example: "Trajan, drawn from the inscription at the base of Trajan's Column, was the default film-poster face for years.",
      numbers: "",
      pitfall: "This is the mushiest of the Vox classes: it is defined by a feeling rather than a measurable trait, and foundries file faces here that have little in common. Do not expect two glyphics to behave alike.",
      source: "Vox classification (1954), class Incises; ATypI de-adopted the whole scheme in 2021.",
      verify: { status: "verified", note: "The class and its examples (Albertus, Copperplate Gothic, Trajan) are confirmed in the Vox-ATypI class list I checked on Wikipedia this session. Wikipedia's Serif article carries no separate glyphic section, which is itself evidence of how loose the category is; I have said so rather than dressing it up." },
      belongs: { verdict: "adjacent", why: "Downgraded on review. The author was too generous. This is a catalogue label from a classification its own governing body has abandoned, defined by resemblance rather than by any measurable trait, and the entry's own pitfall admits two glyphics need not behave alike. Worth recognising in a foundry listing, but it carries no working rule the way garalde or Didone does." },
      related: [327, 335, 357, 396]
    },
    {
      n: 335,
      title: "Script and blackletter",
      aka: ["Scriptes", "Gothiques", "Fraktur", "Textura", "Cursive"],
      oneLine: "Types that imitate handwriting or medieval pen hands, useful in short bursts and dangerous in long ones.",
      demo: {
        caption: "Ten strokes above, five letters below, the same word both times. That is why blackletter cannot carry a paragraph.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 190\"><path class=\"f\" d=\"M30 45L38 40V71L30 76Z\"/><path class=\"f\" d=\"M45 45L53 40V71L45 76Z\"/><path class=\"f\" d=\"M60 45L68 40V71L60 76Z\"/><path class=\"f\" d=\"M75 45L83 40V71L75 76Z\"/><path class=\"f\" d=\"M90 45L98 40V71L90 76Z\"/><path class=\"f\" d=\"M105 45L113 40V71L105 76Z\"/><path class=\"f\" d=\"M120 45L128 40V71L120 76Z\"/><path class=\"f\" d=\"M135 45L143 40V71L135 76Z\"/><path class=\"f\" d=\"M150 45L158 40V71L150 76Z\"/><path class=\"f\" d=\"M165 45L173 40V71L165 76Z\"/><text class=\"t\" x=\"30\" y=\"98\">textura: ten identical strokes</text><text class=\"f\" x=\"30\" y=\"162\" style=\"font-size:62px;font-family:var(--font-text)\">minim</text><text class=\"t\" x=\"30\" y=\"182\">roman: the same word</text></svg></div>"
      },
      what: "Vox's Scriptes imitate cursive penmanship, usually with a strong slope and letters that join. Blackletter (Gothiques, one of the two classes ATypI added to Vox's original nine) copies the dense angular hands of medieval northern Europe; Gutenberg cut a textualis for his 42-line Bible of 1455, complete with a large set of ligatures and abbreviations. Both are writing systems rendered as type, so they inherit the rules of the hand: connected scripts need their exit and entry strokes to meet, and blackletter capitals were never meant to stand alone.",
      why: "Nothing else signals hand-made, ceremonial or historical as fast. Used for a masthead, a certificate or a single word, they do a job no roman can.",
      how: [
        "Never set a connecting script in all capitals; the joins have nowhere to go and the word falls apart.",
        "Keep both to a few words. Neither survives a paragraph.",
        "Check the alternates: most good scripts ship contextual alternates and swash forms specifically so the joins work.",
        "Test the capitals of a blackletter in isolation before using one as an initial."
      ],
      example: "The New York Times, The Los Angeles Times and The Sydney Morning Herald all still set their nameplates in blackletter.",
      numbers: "",
      pitfall: "Blackletter carries political baggage. The Nazi regime banned it in 1941 by memorandum, on the false claim that it was Jewish in origin, which is one reason German designers treat it warily to this day.",
      source: "Vox classification (1954), classes Scriptes and Manuaires; Gothiques and Non-Latines were added by ATypI at an unrecorded date after its 1962 adoption.",
      verify: { status: "adjusted", note: "Class names and the blackletter addition checked against the Vox-ATypI class list on Wikipedia this session, which lists Script (Shelley, Mistral), Graphic/Manuaire and Blackletter (Fraktur, Schwabacher). Corrected on review: the author dated the Gothiques addition to the 1962 ATypI adoption, and Wikipedia says only that ATypI added blackletters and Non-Latins to Vox's original nine without giving a date, so the date claim has been withdrawn. Wikipedia's Blackletter article, also checked this session, confirms Gutenberg's textualis for the 42-line Bible in 1455, names The New York Times, The Los Angeles Times and The Sydney Morning Herald as nameplate users, and records the 1941 memorandum banning the script as 'Schwabach Jew letters'." },
      belongs: { verdict: "core", why: "Two classes with hard technical constraints (joins, capitals) that a designer will break unknowingly without the warning." },
      related: [336, 358, 363, 396]
    },
    {
      n: 336,
      title: "Display faces",
      aka: ["Titling faces", "Headline type", "Fancy type"],
      oneLine: "Typefaces drawn to be seen large, where personality matters more than sustained readability.",
      demo: {
        caption: "The same two words three times. Everything the display face was chosen for at 44px has gone by 11px.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Display face at 44px</span><span class=\"db-type db-type--display\" style=\"font-size:44px\">Winter Season</span></div><div class=\"db-row db-row--loose db-row--top\"><span class=\"db-col db-col--tight\"><span class=\"db-note\">The same face at 11px</span><span class=\"db-type db-type--display\" style=\"font-size:11px\">Winter Season</span></span><span class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">A text face at 11px</span><span class=\"db-type\" style=\"font-size:11px\">Winter Season</span></span></div></div></div>"
      },
      what: "Display is a use category rather than a historical class, so it cuts across all of the others. A display face is drawn on the assumption that it will be set big: spacing is tight, contrast can be extreme, hairlines can be genuinely hair-thin, and idiosyncratic shapes that would tire a reader over a page are fine over three words. Vox's Manuaires (Graphic) class collects the hand-drawn display types specifically, but plenty of display faces are display versions of ordinary text families.",
      why: "Display type is where a brand's voice is loudest and where a page gets its character. It also lets you carry personality at the top of a layout while keeping the body text plain and readable.",
      how: [
        "Use display faces above roughly the size they were drawn for, and never for running text.",
        "Expect to kern display settings by hand; the default fit is rarely right at poster size.",
        "Limit yourself to one display face per layout and let everything else be quiet."
      ],
      example: "Poster and album typography is almost entirely display work; so is a magazine feature opener where one word fills half the page.",
      numbers: "",
      pitfall: "Buying a display face without checking its character set. Many are capitals-only, or lack accented characters and currency symbols, which only shows up when the copy changes.",
      source: "Vox classification (1954) covers hand-drawn display as Manuaires; display as a use category is general trade practice, origin unclear.",
      verify: { status: "verified", note: "The Manuaire/Graphic class and its brief (based on hand-drawn originals, for display purposes, examples Banco and Klang) is confirmed in the Vox-ATypI class list I checked this session. The wider use of display as a category is ordinary trade vocabulary with no single originator, and I have said so." },
      belongs: { verdict: "core", why: "A working distinction that governs which faces you may use where, and one of the commonest sources of bad type choices." },
      related: [349, 348, 9338, 343]
    },
    {
      n: 337,
      title: "Monospace",
      aka: ["Fixed-pitch", "Typewriter type", "Fixed-width"],
      oneLine: "Every character occupies the same advance width, so columns line up without tabs.",
      demo: {
        caption: "Same characters, same spaces. The fixed advance width on the right lines the numbers up and makes both rows the same length.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Proportional</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Six i, six m</span><span class=\"db-type\" style=\"font-size:16px\">iiiiii</span><span class=\"db-type\" style=\"font-size:16px\">mmmmmm</span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Padded with spaces only</span><span class=\"db-type\" style=\"font-size:13px;white-space:pre\">Widget    12</span><span class=\"db-type\" style=\"font-size:13px;white-space:pre\">Bolt       7</span><span class=\"db-type\" style=\"font-size:13px;white-space:pre\">Spanner   34</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Monospace</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Six i, six m</span><span class=\"db-type db-type--mono\" style=\"font-size:16px\">iiiiii</span><span class=\"db-type db-type--mono\" style=\"font-size:16px\">mmmmmm</span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Padded with spaces only</span><span class=\"db-type db-type--mono\" style=\"font-size:13px;white-space:pre\">Widget    12</span><span class=\"db-type db-type--mono\" style=\"font-size:13px;white-space:pre\">Bolt       7</span><span class=\"db-type db-type--mono\" style=\"font-size:13px;white-space:pre\">Spanner   34</span></div></div></div></div></div>"
      },
      what: "Monospaced type comes from machines that could only move the carriage one fixed step per character. Howard Kettler designed Courier for IBM in the mid-1950s; IBM never trademarked the name, so Courier drifted into the public domain. To make an i and an m fit the same width, the narrow letters grow serifs and the wide letters get squeezed, which is why monospace has its distinctive rhythm. Modern coding faces add contextual ligatures that render sequences such as arrows and comparison operators as single shapes.",
      why: "Fixed width means anything you print in columns lines up for free, and it makes character-level differences visible, which is what code and reference numbers need. It also signals technical, raw or machine-made, which designers now use deliberately.",
      how: [
        "Use monospace for code, terminal output, reference numbers and anything where a reader compares character by character.",
        "Choose a coding face with disambiguated 0/O and 1/l/I rather than a pretty one.",
        "If you use monospace as a style choice in a brand, keep it to short strings; the even rhythm tires the eye over paragraphs."
      ],
      example: "The US State Department replaced 12-point Courier New with 14-point Times New Roman for official documents in January 2004.",
      numbers: "US State Department switch, January 2004: Courier New 12 to Times New Roman 14.",
      pitfall: "Setting body copy in monospace because it looks technical. The forced widths make word shapes uniform and the page grey and lifeless.",
      source: "Typewriter engineering; Courier by Howard Kettler for IBM, mid-1950s.",
      verify: { status: "verified", note: "Checked Wikipedia's Courier (typeface) article this session for the designer, the mid-1950s IBM commission, IBM's failure to trademark the name, and the January 2004 State Department change from 12-point Courier New to 14-point Times New Roman." },
      belongs: { verdict: "core", why: "A structural category with a specific job that no proportional face can do." },
      related: [361, 9363, 358, 363]
    },
    {
      n: 338,
      title: "Superfamilies",
      aka: ["Type systems", "Matched families", "Serif and sans companions"],
      oneLine: "One design drawn out across serif, sans and sometimes slab, sharing skeleton, widths and metrics.",
      demo: {
        caption: "One skeleton, four cuts. The stem width and the two guide lines never move; only the serifs are taken away.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 110\"><path class=\"s-mute\" d=\"M20 20H330\"/><path class=\"s-mute\" d=\"M20 80H330\"/><path class=\"f\" d=\"M34 80H66V77H62C58 77 56 74 56 70V30C56 26 58 23 62 23H66V20H34V23H38C42 23 44 26 44 30V70C44 74 42 77 38 77H34Z\"/><path class=\"f\" d=\"M125 80H145V77H141V23H145V20H125V23H129V77H125Z\"/><path class=\"f\" d=\"M209 20H231C228 24 226 27 226 32V68C226 73 228 76 231 80H209C212 76 214 73 214 68V32C214 27 212 24 209 20Z\"/><path class=\"f\" d=\"M299 20H311V80H299Z\"/><text class=\"t\" x=\"50\" y=\"100\" text-anchor=\"middle\">serif</text><text class=\"t\" x=\"135\" y=\"100\" text-anchor=\"middle\">semi-serif</text><text class=\"t\" x=\"220\" y=\"100\" text-anchor=\"middle\">semi-sans</text><text class=\"t\" x=\"305\" y=\"100\" text-anchor=\"middle\">sans</text></svg></div>"
      },
      what: "A superfamily is a family whose members cross the serif/sans line while keeping the same underlying shapes, proportions and vertical metrics. Otl Aicher's Rotis (1988) is the clearest statement of the idea: four related sets running from full serif through semi-serif and semi-sans to sans. Luc(as) de Groot's Thesis, first published in 1994, does the same across TheSans, TheSerif and TheMix, with real italics at every weight. Because the members share metrics, you can swap between them without the layout shifting.",
      why: "A superfamily solves the pairing problem by removing it. You get contrast between a serif and a sans while keeping a single voice, which is exactly what most identity systems need.",
      how: [
        "Use a superfamily when one organisation needs many voices (report, interface, signage) without looking like several organisations.",
        "Check that the members really do share vertical metrics before you rely on drop-in swapping.",
        "Do not use every member. Two or three cuts from a superfamily is a system; eight is a mess."
      ],
      example: "Rotis (Aicher, 1988) in serif, semi-serif, semi-sans and sans; Thesis (de Groot, 1994) as TheSans, TheSerif and TheMix.",
      numbers: "",
      pitfall: "Buying a superfamily does not mean every member is worth using. Rotis has its critics, Erik Spiekermann among them, who said its letters never come together into words that do not look contrived, and that it looks best at architectural sizes.",
      source: "Otl Aicher, Rotis (1988); Luc(as) de Groot, Thesis (1994).",
      verify: { status: "adjusted", note: "Checked Wikipedia's Rotis article (1988, Aicher, the four variants) and the Thesis article plus LucasFonts (first published 1994 by FontFont, TheSans, TheSerif and TheMix, eight weights with real italics). The pitfall was rewritten on review: the author asserted that the semi-serif and semi-sans specifically are widely disliked, which no source I found supports. The Rotis article's actual criticism is Spiekermann's, aimed at the family as a whole, and that is what the entry now says." },
      belongs: { verdict: "core", why: "A practical answer to type pairing that changes how you plan a whole system, not just a page." },
      related: [339, 340, 9338, 364]
    },
    {
      n: 9338,
      title: "Character set and language coverage",
      aka: ["Glyph coverage", "Language support", "Codepage support"],
      oneLine: "Check the font actually contains the characters your content needs before you choose it.",
      demo: {
        caption: "Same two names. On the right the accented letters have come from another font, which is what a missing glyph looks like.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Glyphs present</span><div class=\"db-stage db-stage--tight\"><span class=\"db-type\" style=\"font-size:30px\">Krak&#243;w, Gda&#324;sk</span></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Glyphs missing, quietly substituted</span><div class=\"db-stage db-stage--tight\"><span class=\"db-type\" style=\"font-size:30px\">Krak<span style=\"font-family:var(--font-mono)\">&#243;</span>w, Gda<span style=\"font-family:var(--font-mono)\">&#324;</span>sk</span></div></div></div>"
      },
      what: "A typeface is only as useful as its glyph set. Coverage varies wildly: some display faces ship capitals and basic Latin only, while text families carry hundreds of accented characters, several currency symbols, small caps, multiple figure sets, arrows and maths signs. Foundries and Google Fonts publish supported language lists and glyph tables for each family. The gaps that bite are usually the Central and Eastern European accents, Turkish, Vietnamese, Greek and Cyrillic.",
      why: "Missing glyphs do not fail loudly. The browser or layout application silently substitutes another font for the affected characters, so a Polish name or a Turkish place name appears in a different typeface and nobody notices until a native speaker does.",
      how: [
        "List the languages, currencies and symbols the project must support before you shortlist typefaces.",
        "Open the foundry's glyph table and search for the specific characters, not just the language name.",
        "Test with real content containing the awkward characters, not with lorem ipsum.",
        "Set an explicit fallback stack so substitution is a choice rather than an accident."
      ],
      example: "A brand rolling out across the EU needs the Polish ogonek in a and e, the Czech hacek, the Hungarian double acute and the Turkish dotless i. Plenty of otherwise good display faces have none of them.",
      numbers: "",
      pitfall: "Choosing the display face first and discovering the coverage gap after the identity has been signed off.",
      source: "Foundry glyph tables and the Google Fonts language-support listings; no single canonical text.",
      verify: { status: "verified", note: "This is a production check rather than a claim: foundry specimen pages and Google Fonts family pages both publish per-family language and glyph coverage, which is directly checkable. I have avoided naming any specific font's gaps, since I did not audit any glyph table this session." },
      belongs: { verdict: "core", why: "A genuine omission from the master list. Type selection that ignores glyph coverage produces broken pages in production, and the failure is silent." },
      related: [338, 336, 363, 366]
    },
    {
      n: 339,
      title: "Type pairing",
      aka: ["Font pairing", "Type combination"],
      oneLine: "Combining typefaces so they either agree clearly or differ clearly, never almost-match.",
      demo: {
        caption: "Same words three times. Only the heading's face changes; the third is neither the same nor different enough to look deliberate.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Concord: one family throughout</span><div class=\"db-type\" style=\"font-size:21px\">The evening edition</div><div class=\"db-type db-measure-good\" style=\"font-size:13px\">The sentence underneath is identical in all three blocks, so the only thing changing is the face of the line above it.</div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Contrast: two faces that agree about nothing</span><div class=\"db-type db-type--mono\" style=\"font-size:17px\">The evening edition</div><div class=\"db-type db-measure-good\" style=\"font-size:13px\">The sentence underneath is identical in all three blocks, so the only thing changing is the face of the line above it.</div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Conflict: two faces that nearly match</span><div class=\"db-type\" style=\"font-size:21px;font-family:'Times New Roman',Georgia,serif\">The evening edition</div><div class=\"db-type db-measure-good\" style=\"font-size:13px\">The sentence underneath is identical in all three blocks, so the only thing changing is the face of the line above it.</div></div></div></div>"
      },
      what: "Carl Dair set out the useful framework in Design with Type (1952, revised 1967): any two typographic elements are in concord, in contrast, or in conflict. Concord means they share so much that they read as one voice. Contrast means they differ enough that the difference is obviously deliberate. Conflict is the failure state, where two faces are similar enough to look like a mistake and different enough to jar. Dair also warns against combining scripts with italics, since both are versions of handwritten letters and will conflict rather than contrast.",
      why: "A reader cannot tell a considered pairing from a careless one by analysis, only by feel. Landing firmly in concord or firmly in contrast is what makes the page feel controlled.",
      how: [
        "Start from one family with enough range and only add a second face when it is doing a job the first cannot.",
        "If two faces look nearly the same, either commit to one or push them further apart.",
        "Give each face a defined job (headings, body, captions, data) and stick to it across the whole project.",
        "Do not put a script next to an italic."
      ],
      example: "A humanist serif for body copy with a neo-grotesque for labels and data is a contrast pairing that works because the two disagree about almost everything.",
      numbers: "",
      pitfall: "Pairing by mood board. Two faces that photograph well together in a specimen can still conflict once one is at 10 points and the other at 60.",
      source: "Carl Dair, Design with Type (1952; revised and expanded 1967).",
      verify: { status: "verified", note: "Checked John D. Berry's essay on Dair, reproduced on a RISD course page, this session. It confirms the 1952 and 1967 publication dates, Dair's insistence that a contrast be obvious rather than an almost imperceptible variation, and his parenthetical warning against setting scripts with italics. Corrected on this pass: that page never uses the words concord and conflict, so the framing was checked elsewhere. Chapter 8 of Design with Type is titled Relationships of Concord and Contrast in the University of Toronto Press edition, and published summaries of the chapter give conflict as Dair's name for the failure between the two. The popular internet lore about pairing rules has no source I could find, and I have not repeated it." },
      belongs: { verdict: "core", why: "One of the few typographic decisions a designer makes on every single project, and it has a named framework behind it." },
      related: [340, 338, 341, 343]
    },
    {
      n: 340,
      title: "Contrast in pairing",
      aka: ["Dair's seven contrasts", "Typographic contrast"],
      oneLine: "Dair named seven ways type can differ: size, weight, form, structure, texture, colour and direction.",
      demo: {
        caption: "Dair's seven, one cell each. Every cell changes only the dimension it names and holds everything else still.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--top\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Size</span><span class=\"db-row db-row--tight db-row--baseline\"><span class=\"db-specimen\" style=\"font-size:14px\">Aa</span><span class=\"db-specimen\" style=\"font-size:32px\">Aa</span></span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Weight</span><span class=\"db-row db-row--tight db-row--baseline\"><span class=\"db-specimen\" style=\"font-size:22px;font-weight:400\">Aa</span><span class=\"db-specimen\" style=\"font-size:22px;font-weight:700\">Aa</span></span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Form</span><span class=\"db-row db-row--tight db-row--baseline\"><span class=\"db-specimen\" style=\"font-size:22px\">Aa</span><span class=\"db-specimen\" style=\"font-size:22px;font-style:italic\">Aa</span></span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Structure</span><span class=\"db-row db-row--tight db-row--baseline\"><span class=\"db-specimen\" style=\"font-size:22px\">Aa</span><span class=\"db-type db-type--mono\" style=\"font-size:19px\">Aa</span></span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Texture</span><span class=\"db-row db-row--top db-row--tight\"><span class=\"db-col db-col--tight\" style=\"width:40px\"><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span><span class=\"db-bar db-bar--thin\"></span></span><span class=\"db-col db-col--tight\" style=\"width:40px\"><span class=\"db-bar db-bar--tall\"></span><span class=\"db-bar db-bar--tall\"></span></span></span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Colour</span><span class=\"db-row db-row--tight db-row--baseline\"><span class=\"db-specimen\" style=\"font-size:22px\">Aa</span><span class=\"db-specimen\" style=\"font-size:22px;color:var(--accent)\">Aa</span></span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Direction</span><span class=\"db-row db-row--top\"><span class=\"db-specimen\" style=\"font-size:22px\">Aa</span><span class=\"db-specimen\" style=\"font-size:22px;writing-mode:vertical-rl\">Aa</span></span></div></div></div>"
      },
      what: "Contrast of size is point size. Weight is light against bold. Form is capitals against lowercase, or roman against italic. Structure is the underlying construction, so a garalde against a geometric sans. Texture is the overall grain of a block of setting. Colour is both actual hue and the grey value of the type. Direction is horizontal against vertical or angled. Dair's central instruction is that a contrast must be obvious rather than a slight, almost imperceptible variation.",
      why: "Naming the seven gives you a checklist instead of a hunch. When a layout feels flat, you can work down the list and find which dimensions you have left unused.",
      how: [
        "Change at least two of the seven at once. One small change reads as an error.",
        "Prefer contrast of weight and structure over contrast of size; large size jumps eat space fast.",
        "Use direction sparingly and only where the reading order is unambiguous.",
        "Squint at the layout to judge contrast of texture and colour, since both are about the block rather than the letter."
      ],
      example: "A short bold sans standfirst above a light serif body changes weight, structure and texture at once, which is why it reads instantly as a deliberate hierarchy.",
      numbers: "Seven contrasts in Dair's scheme: size, weight, form, structure, texture, colour, direction.",
      pitfall: "Timid contrast. A heading two points bigger than the body in the same weight looks like a mistake rather than a level.",
      source: "Carl Dair, Design with Type (1952; revised 1967), and his pamphlet A Typographic Quest No. 5, Typographic Contrast.",
      verify: { status: "verified", note: "The seven named contrasts and Dair's warning that contrast must be obvious were checked this session against a course page reproducing his scheme, which also cites A Typographic Quest No. 5 (part of a series issued 1964 to 1968)." },
      belongs: { verdict: "core", why: "A named, complete and testable framework for the single most common typographic judgement." },
      related: [339, 342, 343, 344]
    },
    {
      n: 341,
      title: "Voice and tone of type",
      aka: ["Typeface personality", "Type semantics", "Font psychology"],
      oneLine: "A typeface carries associations that colour how the words are read before anyone reads them.",
      demo: {
        caption: "One sentence, three faces. Notice how your reading of it shifts before you have weighed a single word.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Didone</span><span class=\"db-type db-type--display\" style=\"font-size:24px\">We will let you know on Friday.</span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Text serif</span><span class=\"db-type\" style=\"font-size:24px\">We will let you know on Friday.</span></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Monospace</span><span class=\"db-type db-type--mono\" style=\"font-size:24px\">We will let you know on Friday.</span></div></div></div>"
      },
      what: "Choose Bodoni and the text sounds formal and expensive; choose Comic Sans and it sounds informal whatever it says. The research base is thinner than the confidence with which the idea is usually stated. The most-cited study is Shaikh, Chaparro and Fox (2006) at Wichita State University, an online survey in which 561 participants rated 20 typefaces against 15 adjective pairs and picked appropriate uses. Serifs came out stable, practical, mature and formal; script faces youthful, creative and casual; monospaced faces dull, plain and unimaginative. The sans serifs did not stand out on any trait at all. That is a self-report survey published in a lab newsletter, not a controlled reading experiment.",
      why: "Type sets expectation before content arrives, which is free persuasion or free sabotage depending on how carefully you choose. Knowing the evidence is soft keeps you from over-claiming to a client.",
      how: [
        "Test the shortlist with the client's real headline, not with the typeface name.",
        "Ask what the audience already associates the style with in that market, rather than what it means in general.",
        "Say the association is a judgement when you present it, and do not dress it up as research.",
        "Where tone matters most, put two candidates in front of real users on real copy."
      ],
      example: "CERN announced the Higgs boson discovery on 4 July 2012 with ATLAS spokesperson Fabiola Gianotti presenting in Comic Sans. The typeface, not the physics, became the story in the design press for a week.",
      numbers: "Shaikh, Chaparro and Fox (2006): 561 participants, 20 typefaces, 15 adjective pairs, 4-point scale.",
      pitfall: "Treating typeface associations as universal. They are learned from what a culture has seen that style used for, so they shift by country, industry and decade.",
      source: "A. Dawn Shaikh, Barbara Chaparro and Doug Fox, Perception of Fonts: Perceived Personality Traits and Uses, Usability News 8(1), Software Usability Research Laboratory, Wichita State University (2006).",
      verify: { status: "disputed", note: "The previous pass corrected the summary of the findings but sourced it to a doctoral literature review, which I could not trace. On this pass I read the paper itself, so the secondary citation has been dropped. The paper states 561 participants for the personality part and 533 for the uses part, 20 fonts rated against 15 adjective pairs on a 4-point Likert scale, and in its results: the sans serif fonts did not score extremely high or low on any personality trait; serifs scored highest on Stable, Practical, Mature and Formal; the script and funny group on Youthful, Happy, Creative, Rebellious, Feminine, Casual and Cuddly; the modern display group on Masculine, Assertive, Rude, Sad and Coarse; the monospaced group on Dull, Plain, Unimaginative and Conforming. An earlier draft gave casual to the sans serifs, which reverses the one clear null result. Status stays disputed: this is a self-report survey in a usability lab newsletter, funded by Microsoft's reading-technology team, not a controlled reading experiment, so it will not carry the personality tables that circulate online. Gianotti's Comic Sans slides of 4 July 2012 are archived on CERN's Indico for that seminar, and CERN's own 2014 April Fool about switching to Comic Sans refers back to them." },
      belongs: { verdict: "core", why: "Typeface choice is a communication decision, not just a formal one, and this is the entry that tells a designer how much weight the evidence will bear." },
      related: [339, 336, 335, 342]
    },
    {
      n: 342,
      title: "Typographic colour (grey value)",
      aka: ["Type colour", "Grey value", "Texture"],
      oneLine: "The overall lightness or darkness of a block of set text when you stop reading it.",
      demo: {
        caption: "Same sentence twice. Justified at a narrow measure opens white gaps that pool into rivers; ranged left stays even.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Justified, no hyphenation</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type db-measure-narrow\" style=\"text-align:justify;font-size:13px\">Justification stretches the interword spaces until every line reaches the margin, and unhyphenated setting at a narrow measure opens holes.</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Ranged left</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type db-measure-narrow\" style=\"font-size:13px\">Justification stretches the interword spaces until every line reaches the margin, and unhyphenated setting at a narrow measure opens holes.</div></div></div></div>"
      },
      what: "Typographic colour has nothing to do with hue. It is the grey a paragraph averages out to, produced by the typeface's stroke weight, its x-height, the size, the leading, the word spacing and the measure. Bringhurst treats evenness of typographic colour as the aim of good setting. A block with even colour has no lighter or darker patches; an uneven block has holes, clumps and rivers of white running through it.",
      why: "Even colour is what makes a page look calm and what lets a reader move through it without snagging. Uneven colour is read as sloppiness long before anyone can say what is wrong.",
      how: [
        "Squint at the page or blur the screenshot. Patches and rivers show up immediately.",
        "Print at actual size and look at it upside down, which stops you reading and forces you to see the texture.",
        "Fix uneven colour with word spacing, measure and hyphenation settings before you change typeface.",
        "Match typographic colour across paired faces, or the lighter one will look like a mistake."
      ],
      example: "Set the same paragraph justified with hyphenation off and then on. The rivers of white in the first version are a colour problem, not a spacing preference.",
      numbers: "",
      pitfall: "Judging colour on a bright screen at 200 per cent zoom. Colour problems live at reading size, so check at reading size.",
      source: "Robert Bringhurst, The Elements of Typographic Style; the term is standard in the trade and predates him.",
      verify: { status: "verified", note: "Confirmed this session that Bringhurst uses typographic colour in this sense and calls for evenness of it, via a cited passage in an academic paper referencing Bringhurst (2013 edition, p. 324) and secondary discussions of the book. I could not read the book directly, so I have avoided quoting him." },
      belongs: { verdict: "core", why: "The main way a trained eye judges a block of text, and the thing most amateur setting gets wrong." },
      related: [340, 373, 378, 379]
    },
    {
      n: 343,
      title: "Typographic hierarchy",
      aka: ["Reading order", "Levels of information"],
      oneLine: "Making the rank of every piece of text obvious at a glance, without the reader having to work it out.",
      demo: {
        caption: "Identical words both sides. On the right, size, weight and space alone tell you which line is which rank.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One treatment for everything</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:13px\">Quarterly review</span><span class=\"db-type\" style=\"font-size:13px\">Trade held up better than expected</span><span class=\"db-type\" style=\"font-size:13px\">By the finance desk</span><span class=\"db-type\" style=\"font-size:13px\">Orders rose in every region except the north, where the closures still weigh on the figures.</span><span class=\"db-type\" style=\"font-size:13px\">Figures are provisional.</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Five ranks, five treatments</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-note\">Quarterly review</span><span class=\"db-type\" style=\"font-size:19px;font-weight:600;line-height:1.15\">Trade held up better than expected</span><span class=\"db-type\" style=\"font-size:12px\">By the finance desk</span><span class=\"db-type\" style=\"font-size:13px\">Orders rose in every region except the north, where the closures still weigh on the figures.</span><span class=\"db-type\" style=\"font-size:11px\">Figures are provisional.</span></div></div></div></div>"
      },
      what: "Hierarchy is the visible ordering of a page: what is the headline, what is a subhead, what is body, what is a caption, what is a footnote. You have six levers to signal rank, and they can be combined: size, weight, case, colour, position and space. There is no single originator for the idea; it is craft that was formalised by the Swiss modernists and is set out in most typography manuals. The strongest single lever is usually space, because a gap says level change more cleanly than any size jump.",
      why: "Readers scan before they read. A clear hierarchy lets them find their entry point in under a second and skip what they do not need, which is how almost all reading on screens actually happens.",
      how: [
        "Fix the number of levels before you design. Three or four is usually plenty; more than five stops being a hierarchy.",
        "Use space and weight before size. Big size jumps eat layout and rarely add clarity.",
        "Make each level unmistakably different from the one above and below it, not slightly different.",
        "Write the levels down as a specification so the same rank always looks the same across the project."
      ],
      example: "A newspaper front page separates masthead, headline, standfirst, byline, body and caption using six clearly different treatments, and you can name every level without reading a word.",
      numbers: "",
      pitfall: "Inventing a new treatment each time a new kind of content appears. The result is twelve near-identical levels and no hierarchy at all.",
      source: "Craft convention, formalised in the Swiss modernist tradition; origin unclear, no single named author.",
      verify: { status: "verified", note: "I could find no single originating source for typographic hierarchy as a named principle, and I have said so rather than attributing it to a convenient author. The mechanics (size, weight, case, colour, position, space) are standard across typography manuals." },
      belongs: { verdict: "core", why: "The organising decision behind every page of text, and the one that determines whether a layout can be scanned." },
      related: [344, 340, 395, 385]
    },
    {
      n: 344,
      title: "Type scale",
      aka: ["Size palette", "Classic typographic scale"],
      oneLine: "A short fixed set of sizes used across a project instead of picking numbers as you go.",
      demo: {
        caption: "Two components each. On the left every element got its own number; on the right both use the same three sizes.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Sizes picked as you go</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:19px\">Opening hours</span><span class=\"db-type\" style=\"font-size:13px\">Weekdays, nine until six.</span><span class=\"db-note\">19 / 13</span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:17px\">Getting here</span><span class=\"db-type\" style=\"font-size:14px\">Two minutes from the station.</span><span class=\"db-note\">17 / 14</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One scale, both cards</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:20px\">Opening hours</span><span class=\"db-type\" style=\"font-size:13px\">Weekdays, nine until six.</span><span class=\"db-note\">20 / 13</span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:20px\">Getting here</span><span class=\"db-type\" style=\"font-size:13px\">Two minutes from the station.</span><span class=\"db-note\">20 / 13</span></div></div></div></div></div></div>"
      },
      what: "Metal type came in a limited set of cast sizes, and that limit turned out to be a feature. Bringhurst records the classic scale as 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 21, 24, 30, 36, 48, 60 and 72 points. Spencer Mortensen's analysis of it notes that the sizes double every five steps, and that the historical list has two oddities: 42 is missing from the progression and 11 is an extra note that does not belong. A modern type scale is the same idea, a small deliberate list of sizes with everything else forbidden.",
      why: "A fixed set of sizes is what makes a large project look like one project. It also removes a decision you would otherwise make badly a hundred times.",
      how: [
        "Define the whole scale once, name each step, and refuse to add sizes later.",
        "Keep it short. Five to seven steps covers most editorial and interface work.",
        "Set the body size first and build the scale outwards from it, not from the headline down.",
        "Store the scale as tokens or styles so nobody can type an arbitrary number."
      ],
      example: "The classic metal scale: 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 21, 24, 30, 36, 48, 60, 72 points.",
      numbers: "Classic typographic scale: 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 21, 24, 30, 36, 48, 60, 72 points.",
      pitfall: "Treating the classic scale as sacred. It is a record of what founders happened to cast, complete with a missing 42 and an out-of-pattern 11, not a law of perception.",
      source: "Traditional metal-type sizes, recorded in Robert Bringhurst, The Elements of Typographic Style; analysed by Spencer Mortensen, The typographic scale.",
      verify: { status: "adjusted", note: "The exact list (including 30, which is often dropped from web versions) and the attribution to Bringhurst were checked this session against Spencer Mortensen's article The typographic scale, which also identifies the missing 42 and the extraneous 11. One number corrected on review: the author wrote that the scale doubles every eight steps. Mortensen's article says the ratio is two with five sizes in an interval, which the list bears out (6 to 12 and 12 to 24 are each five steps once the stray 11 is removed)." },
      belongs: { verdict: "core", why: "A constraint that directly improves consistency, and the historical basis for every modern scale system." },
      related: [345, 346, 347, 343, 766]
    },
    {
      n: 345,
      title: "Modular scale",
      aka: ["Ratio scale", "Harmonic scale"],
      oneLine: "Generating your sizes by repeatedly multiplying a base size by a chosen ratio.",
      demo: {
        caption: "One base size multiplied by 1.25 four times. Each step is the previous size times the ratio, nothing else.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--bottom\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:16px\">Aa</span><span class=\"db-note\">16px</span></div><span class=\"db-note db-note--accent\">&times;1.25</span><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:20px\">Aa</span><span class=\"db-note\">20px</span></div><span class=\"db-note db-note--accent\">&times;1.25</span><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:25px\">Aa</span><span class=\"db-note\">25px</span></div><span class=\"db-note db-note--accent\">&times;1.25</span><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:31px\">Aa</span><span class=\"db-note\">31px</span></div><span class=\"db-note db-note--accent\">&times;1.25</span><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:39px\">Aa</span><span class=\"db-note\">39px</span></div></div></div>"
      },
      what: "Tim Brown set this out for the web in More Meaningful Typography, published in A List Apart on 3 May 2011. Start from a base size, pick a ratio, and multiply up and divide down to produce the rest of the scale. A ratio of 1.25 from a 16px base gives 16, 20, 25, 31.25 and so on. Brown's argument was that numbers related by a ratio produce more visual harmony than arbitrary or easily divisible ones, and that a scale can be seeded from meaningful values such as the measure or an image width rather than picked at random.",
      why: "It gives you a defensible reason for every size, and it makes the relationship between sizes consistent as the scale grows. It also means one number (the ratio) controls how dramatic the whole hierarchy feels.",
      how: [
        "Pick the ratio to match the tone: small ratios for dense, quiet interfaces, large ratios for editorial drama.",
        "Round the generated values to whole pixels or points, then keep the rounded list as the real scale.",
        "Seed the scale from something real in the layout (body size, column width) rather than an arbitrary base.",
        "Do not use every step. Generate ten and ship five."
      ],
      example: "A 1.25 ratio from a 16px base: 16, 20, 25, 31, 39, 49. A 1.5 ratio from the same base: 16, 24, 36, 54, 81.",
      numbers: "",
      pitfall: "Larger ratios produce enormous steps very quickly, so the top of the scale becomes unusable on small screens. Cap the scale rather than letting the maths run.",
      source: "Tim Brown, More Meaningful Typography, A List Apart (3 May 2011).",
      verify: { status: "verified", note: "Publication date, venue and author confirmed this session; the article's definition of a modular scale as a sequence of numbers related by a ratio, and its golden-ratio worked example, are quoted in the search result and on A List Apart. The arithmetic examples above are my own and are trivially checkable." },
      belongs: { verdict: "core", why: "The standard method for building a type scale in digital work, with a named author and a dated source." },
      related: [344, 346, 347, 340, 455, 766]
    },
    {
      n: 346,
      title: "Ratio-based scale (minor third, perfect fourth, golden)",
      aka: ["Musical scale ratios", "Golden ratio type scale"],
      oneLine: "The common multipliers used to build a modular scale, labelled with names borrowed from music.",
      demo: {
        caption: "Three steps up from a sixteen-pixel base, one ratio per column. Watch how fast the right-hand columns run away.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--bottom\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:28px\">Aa</span><span class=\"db-note\">&times;1.2 = 28px</span><span class=\"db-note\">minor third</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:31px\">Aa</span><span class=\"db-note\">&times;1.25 = 31px</span><span class=\"db-note\">major third</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:38px\">Aa</span><span class=\"db-note\">&times;1.333 = 38px</span><span class=\"db-note\">perfect fourth</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:54px\">Aa</span><span class=\"db-note\">&times;1.5 = 54px</span><span class=\"db-note\">perfect fifth</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:68px\">Aa</span><span class=\"db-note\">&times;1.618 = 68px</span><span class=\"db-note\">golden ratio</span></div></div></div>"
      },
      what: "The ratios in circulation are minor third 1.2, major third 1.25, perfect fourth 1.333, perfect fifth 1.5, and the golden ratio at roughly 1.618. The first four are the just-intonation frequency ratios of those musical intervals (6:5, 5:4, 4:3, 3:2), so the names are arithmetically accurate. What the names do not carry is any evidence that a reader perceives a stack of type sizes the way an ear perceives an interval. The golden ratio in particular arrives loaded with claims about classical art and architecture that do not survive checking.",
      why: "The ratios themselves are useful as starting points, because they cover the range from very tight to very dramatic in five steps. Knowing where the names came from stops you presenting arithmetic as a law.",
      how: [
        "Treat the named ratios as presets to try, not as a hierarchy of correctness.",
        "Use 1.2 or 1.25 for interfaces and dense editorial; 1.5 or higher only where you have space.",
        "If you cite the golden ratio to a client, say it is a convention you have chosen, not a proven proportion."
      ],
      example: "A 1.333 (perfect fourth) scale from 16px gives 16, 21, 28, 38, 51. A 1.618 scale from the same base gives 16, 26, 42, 68.",
      numbers: "Minor third 1.2 (6:5), major third 1.25 (5:4), perfect fourth 1.333 (4:3), perfect fifth 1.5 (3:2), golden ratio approximately 1.618.",
      pitfall: "Quoting the golden ratio as historical authority. George Markowsky's paper documents how many of the standard claims (that the Greeks named it, that Leonardo used it) are simply not supported.",
      source: "Musical interval ratios, applied to type by modern web practice; George Markowsky, Misconceptions about the Golden Ratio, The College Mathematics Journal 23(1), 2-19 (1992).",
      verify: { status: "disputed", note: "The ratios are correct arithmetic and the musical interval names match just-intonation frequency ratios. The implied authority does not hold: I confirmed Markowsky's 1992 paper (College Mathematics Journal, vol 23 no 1, pages 2-19) this session and read its sections showing that the term golden section first appears in print in Martin Ohm's Die reine Elementar-Mathematik in 1835, and that the Leonardo claims are unsupported. I found no study showing readers perceive musically-derived size ratios as more harmonious." },
      belongs: { verdict: "cut", why: "This is not a separate principle, it is the parameter list for 345 (modular scale) with borrowed music-theory labels attached. Fold the ratio table into 345 and drop the entry; nothing is lost except the false impression that the names confer authority." },
      related: [345, 344]
    },
    {
      n: 347,
      title: "Fluid type",
      aka: ["Responsive type", "CSS locks", "Viewport-relative sizing"],
      oneLine: "Type size that scales smoothly with viewport width between a defined minimum and maximum.",
      demo: {
        caption: "The accented line holds at its floor, ramps, then stops at its ceiling. The pale line is bare vw, which never stops.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 158\"><path class=\"s-mute\" d=\"M20 125H330\"/><path class=\"s-mute\" d=\"M20 125L235.7 8\"/><path class=\"s-accent\" d=\"M20 69H106L278 41H330\"/><path class=\"s-mute\" d=\"M106 125V131M278 125V131\"/><text class=\"t\" x=\"24\" y=\"64\">16px floor</text><text class=\"t\" x=\"330\" y=\"36\" text-anchor=\"end\">24px ceiling</text><text class=\"t\" x=\"232\" y=\"12\" text-anchor=\"end\">bare vw</text><text class=\"t\" x=\"106\" y=\"142\" text-anchor=\"middle\">333px</text><text class=\"t\" x=\"278\" y=\"142\" text-anchor=\"middle\">1000px</text><text class=\"t\" x=\"175\" y=\"155\" text-anchor=\"middle\">viewport width</text></svg></div>"
      },
      what: "Mike Riethmuller published the technique on 17 March 2015 as Precise control over responsive typography: combine calc() with viewport units so a size moves linearly between two chosen pixel values across a chosen viewport range. Tim Brown later named the pattern CSS locks. Modern CSS does the same job with clamp(), which takes a minimum, a preferred fluid value and a maximum in one function. The point is the bounds; unbounded viewport sizing is not fluid type, it is just type that gets silly at the extremes.",
      why: "It removes the stepped jumps at breakpoints and lets one declaration cover phone to desktop, which cuts the number of media queries a project has to carry.",
      how: [
        "Always set both a floor and a ceiling. A bare vw value is the mistake, not the technique.",
        "Scale headings more aggressively than body copy; body text wants to stay near its comfortable reading size.",
        "Test at browser zoom, not just at different window widths.",
        "Keep the fluid range tied to the measure you want, not to arbitrary breakpoints."
      ],
      example: "clamp(1rem, 0.75rem + 1.2vw, 1.5rem), from a 16px root, holds body text at 16px until the viewport passes about 333px, grows it through the middle sizes, and reaches its 24px ceiling at 1000px.",
      numbers: "WCAG 2.1 success criterion 1.4.4 (Resize Text, level AA) requires text to be resizable up to 200 per cent without loss of content or function.",
      pitfall: "Sizing purely in viewport units breaks browser zoom, because zooming does not change the viewport width in the way the user expects. That is an accessibility failure, not a taste question.",
      source: "Mike Riethmuller, Precise control over responsive typography (17 March 2015); named CSS locks by Tim Brown; W3C, Web Content Accessibility Guidelines 2.1.",
      verify: { status: "adjusted", note: "Read Riethmuller's article this session. Its own dateline reads 17th March 2015 in the page markup, which settles the date, and the method it gives is calc() with viewport units interpolating linearly between two pixel values over a chosen viewport range. Note that the article predates clamp() and never mentions it; the clamp() framing is the modern equivalent, not Riethmuller's wording. Tim Brown's CSS locks naming is confirmed by secondary sources. The worked example was corrected on review: the author wrote that it holds at 16px on a phone, but at a 16px root the floor only applies below roughly 333px, so most phones already sit on the fluid part of the curve." },
      belongs: { verdict: "core", why: "Screen type has to work across a continuous range of widths, and this is the standard way to make it do so." },
      related: [344, 345, 348, 372]
    },
    {
      n: 348,
      title: "Optical sizing",
      aka: ["opsz", "Size-specific design", "Optical scaling"],
      oneLine: "Changing the drawing of the letters, not just their scale, to suit the size they will be read at.",
      demo: {
        caption: "Same letter, same height, two drawings. The small-size cut carries thicker stems and a wider fit so it survives being set tiny.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Small-size cut</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 120\"><path class=\"s-mute\" d=\"M8 92H152M8 30H152\"/><path class=\"s\" style=\"stroke-width:13\" d=\"M28 92V62A32 32 0 0 1 92 62V92\"/><text class=\"t\" x=\"80\" y=\"112\" text-anchor=\"middle\">sturdy stems, wide fit</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Large-size cut</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 120\"><path class=\"s-mute\" d=\"M8 92H152M8 30H152\"/><path class=\"s\" style=\"stroke-width:7\" d=\"M44 92V52A22 22 0 0 1 88 52V92\"/><text class=\"t\" x=\"80\" y=\"112\" text-anchor=\"middle\">fine stems, tight fit</text></svg></div></div></div>"
      },
      what: "In metal, every size was cut separately, so a punchcutter naturally made the small sizes sturdier and the large sizes finer. Scalable digital outlines threw that away, and OpenType brought it back as the opsz variation axis. The specification defines opsz values as strictly greater than zero and interpreted as text size in typographic points (1/72 inch), recommends a value between 10 and 16 for typical text, and notes that applications may pick the value automatically from the displayed size. Typical adaptations are glyph proportions, stem weights and the fineness of details.",
      why: "It fixes two opposite problems at once: small type that clogs and falls apart, and large type that looks clumsy because it is a text design blown up. You get better reading and better display from one family.",
      how: [
        "Leave font-optical-sizing on its default of auto in browsers, and set opsz by hand only when you have a reason.",
        "Set opsz to the size the reader actually sees, which is not always the CSS size on large displays or at distance.",
        "When choosing a variable font, check whether it has a real opsz axis or just weight and width.",
        "Clamp to the axis minimum or maximum outside the range rather than falling back to the default."
      ],
      example: "The OpenType specification notes that designers typically evaluate optical size variants at a reading distance of 14 to 16 inches (35 to 40 cm), so a 12-point design judged at 15 inches also suits 24-point text seen from 30 inches.",
      numbers: "opsz: values strictly greater than zero, interpreted as points (1/72 inch); 10 to 16 recommended for typical text settings.",
      pitfall: "Assuming opsz is doing something when the font does not carry the axis. Check the axis list before writing CSS that silently does nothing.",
      source: "Microsoft, OpenType specification 1.9.1, opsz design-variation axis tag registry.",
      verify: { status: "verified", note: "Fetched the Microsoft OpenType opsz axis page this session. It gives the valid range (strictly greater than zero), the points scale at 1/72 inch, the 10 to 16 recommendation for typical text, the 14 to 16 inch / 35 to 40 cm evaluation distance and the clamping guidance, all as quoted." },
      belongs: { verdict: "core", why: "A real and specified mechanism that changes how legible type is at both extremes of size." },
      related: [349, 364, 329, 350]
    },
    {
      n: 349,
      title: "Display cuts versus text cuts",
      aka: ["Opticals", "Caption, text, subhead, display"],
      oneLine: "Picking the family member drawn for your size, rather than scaling one design up and down.",
      demo: {
        caption: "Minion Pro's four cuts against the point sizes each is drawn for. The Display range runs from twenty points upwards.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 110\"><text class=\"f\" x=\"40\" y=\"30\" text-anchor=\"middle\" font-size=\"9\">Aa</text><text class=\"f\" x=\"87\" y=\"30\" text-anchor=\"middle\" font-size=\"12\">Aa</text><text class=\"f\" x=\"139\" y=\"30\" text-anchor=\"middle\" font-size=\"17\">Aa</text><text class=\"f\" x=\"242\" y=\"30\" text-anchor=\"middle\" font-size=\"27\">Aa</text><path class=\"s-mute\" d=\"M20 38H320V56H20Z\"/><path class=\"s-mute\" d=\"M61 38V56M113 38V56M165 38V56\"/><text class=\"t\" x=\"40\" y=\"51\" text-anchor=\"middle\">Caption</text><text class=\"t\" x=\"87\" y=\"51\" text-anchor=\"middle\">Regular</text><text class=\"t\" x=\"139\" y=\"51\" text-anchor=\"middle\">Subhead</text><text class=\"t\" x=\"242\" y=\"51\" text-anchor=\"middle\">Display</text><path class=\"s-mute\" d=\"M20 56V63M61 56V63M113 56V63M165 56V63M320 56V63\"/><text class=\"t\" x=\"20\" y=\"75\" text-anchor=\"middle\">6</text><text class=\"t\" x=\"61\" y=\"75\" text-anchor=\"middle\">8.4</text><text class=\"t\" x=\"113\" y=\"75\" text-anchor=\"middle\">13</text><text class=\"t\" x=\"165\" y=\"75\" text-anchor=\"middle\">20</text><text class=\"t\" x=\"320\" y=\"75\" text-anchor=\"middle\">72</text><text class=\"t\" x=\"175\" y=\"95\" text-anchor=\"middle\">point size, logarithmic</text></svg></div>"
      },
      what: "This is optical sizing as a purchasing and specification decision. Adobe ships Minion Pro with four optical sizes named Caption, Regular, Subhead and Display, an approach that came directly out of Minion's origin as a multiple master typeface. Minion 3 keeps the same four, and its text-size cut ships simply as Minion 3. A caption or text cut has sturdier stems, a slightly larger x-height, more open apertures and looser spacing. A display cut has finer hairlines, tighter fit and more delicate detail. The names differ by foundry (Text, Deck, Banner, Poster all appear) but the logic is constant.",
      why: "Using the right cut is the cheapest quality upgrade available in typography. A display cut set at 10 points looks weak and a text cut set at 90 points looks lumpy, and both are visible to non-designers even if they cannot name the problem.",
      how: [
        "Check whether a family has opticals before you buy; it is often the reason one family costs more than another.",
        "Map each cut to a level in your hierarchy and record it in the type specification.",
        "If the family has no opticals, compensate by tightening tracking as size increases and loosening it as size decreases."
      ],
      example: "Minion Pro's Caption, Regular, Subhead and Display cuts, intended for 6 to 8.4 points, 8.5 to 13, 13.1 to 19.9, and 20 points and up.",
      numbers: "Minion Pro: four optical sizes named Caption, Regular, Subhead and Display.",
      pitfall: "Buying a display cut because the specimen looked best, then using it for body copy. This is the commonest way a good typeface produces a weak-looking page.",
      source: "Adobe's optical size naming for Minion (multiple master origins); the underlying idea is metal-type practice.",
      verify: { status: "adjusted", note: "Wikipedia's Minion article, checked this session, confirms the four optical sizes (Caption, Regular, Subhead, Display), their multiple master origin, the 64 styles from four opticals, two widths and four weights with italics, and the intended point ranges (Caption 6 to 8.4, Regular 8.5 to 13, Subhead 13.1 to 19.9, Display 20 and up). Corrected on review: the entry said Minion 3 renames Regular as Text. Adobe's own Minion 3 usage page still names the four Caption, Regular, Subhead and Display, and no font is sold as Minion 3 Text, so the rename claim has been removed." },
      belongs: { verdict: "core", why: "The practical face of 348: a purchasing and specification rule a designer applies on every project that uses a serious text family." },
      related: [348, 336, 326, 364]
    },
    {
      n: 350,
      title: "X-height",
      aka: ["Lowercase height"],
      oneLine: "The height of the lowercase x, from baseline to mean line, and the best predictor of apparent size.",
      demo: {
        caption: "Both boxes are the same point size. The accented line is the x-height, and the right-hand letters simply look bigger.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Small x-height</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 122\"><path class=\"s-mute\" d=\"M8 12H162V98H8Z\"/><path class=\"s-mute\" d=\"M8 78H162\"/><path class=\"s-accent\" d=\"M8 52H162\"/><path class=\"s\" style=\"stroke-width:5\" d=\"M30 18V78M30 65A13 13 0 0 1 56 65V78\"/><circle class=\"s\" style=\"stroke-width:5\" cx=\"76\" cy=\"65\" r=\"13\"/><path class=\"s\" style=\"stroke-width:5\" d=\"M96 52V94M96 52A13 13 0 0 1 96 78\"/><text class=\"t\" x=\"158\" y=\"48\" text-anchor=\"end\">x-height</text><text class=\"t\" x=\"85\" y=\"116\" text-anchor=\"middle\">same point size</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Large x-height</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 122\"><path class=\"s-mute\" d=\"M8 12H162V98H8Z\"/><path class=\"s-mute\" d=\"M8 78H162\"/><path class=\"s-accent\" d=\"M8 42H162\"/><path class=\"s\" style=\"stroke-width:5\" d=\"M30 18V78M30 60A18 18 0 0 1 66 60V78\"/><circle class=\"s\" style=\"stroke-width:5\" cx=\"88\" cy=\"60\" r=\"18\"/><path class=\"s\" style=\"stroke-width:5\" d=\"M116 42V94M116 42A18 18 0 0 1 116 78\"/><text class=\"t\" x=\"158\" y=\"38\" text-anchor=\"end\">x-height</text><text class=\"t\" x=\"85\" y=\"116\" text-anchor=\"middle\">same point size</text></svg></div></div></div>"
      },
      what: "X-height is measured on a flat-topped lowercase letter such as x, so it excludes the overshoot of round letters like o. Its ratio to cap height and to the em varies enormously between typefaces. Point size measures the em, an abstract body inherited from metal type, so two faces at the same point size can look very different in size. The one that looks bigger is almost always the one with the larger x-height.",
      why: "It is the number that decides whether two typefaces can sit next to each other, and whether a size you chose in one face will still work when you swap to another. It also drives how much leading a setting needs.",
      how: [
        "When swapping typefaces, match x-heights by eye rather than keeping the same point size.",
        "Give large-x-height faces more leading; the taller lowercase closes the gap between lines.",
        "Prefer a larger x-height for small sizes and poor conditions, and a smaller one for elegant book setting.",
        "Never compare two faces from their point size alone in a specification."
      ],
      example: "Set Futura and Helvetica at the same point size side by side. Helvetica looks noticeably larger, entirely because of x-height.",
      numbers: "",
      pitfall: "Locking a design system to pixel sizes and then changing typeface. Everything shifts in apparent size at once and the whole hierarchy has to be rebuilt.",
      source: "Standard type anatomy; the term and measurement are universal in the trade, origin unclear.",
      verify: { status: "verified", note: "Definition checked against Wikipedia's X-height article and the standard anatomy terms this session. I have deliberately given no x-height-to-cap-height ratios, because the figures that circulate online are per-typeface measurements rather than published thresholds and I could not verify any of them." },
      belongs: { verdict: "core", why: "The single most useful measurement for comparing typefaces and for setting leading." },
      related: [351, 352, 353, 373]
    },
    {
      n: 351,
      title: "Cap height",
      aka: ["Capital height"],
      oneLine: "The distance from the baseline to the top of a flat capital such as H.",
      demo: {
        caption: "Same label twice. The left square matches the font size; the right matches the cap height. Only the right looks equal.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Square set to the font size, 16px</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-sq\" style=\"width:16px;height:16px\"></span><span class=\"db-type\" style=\"font-size:16px\">ACCOUNT</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Square set to the cap height, 11px</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-sq\" style=\"width:11px;height:11px\"></span><span class=\"db-type\" style=\"font-size:16px\">ACCOUNT</span></div></div></div></div>"
      },
      what: "Cap height is measured on a flat-topped capital, so like x-height it excludes overshoot. In most typefaces it sits a little below the ascender height, which is why the l in a word like Hello often pokes slightly above the H. It is the reference line you use when you want capitals to align with something that is not type.",
      why: "Almost every alignment problem between type and non-type objects is a cap-height problem. Icons, rules, avatars, buttons and logotypes all need aligning to cap height or x-height rather than to the invisible em box.",
      how: [
        "Align icons to cap height when they sit beside capitals, and to x-height when they sit beside lowercase.",
        "Size an icon to roughly the cap height of the text it labels, then adjust by eye.",
        "Use cap height, not line height, when specifying the vertical position of type inside a button or badge.",
        "Check the ascender against the cap height before setting a logotype in mixed case."
      ],
      example: "A 16px label with a 16px square icon beside it always looks wrong, because the icon is sized to the em box and the capitals only fill part of it.",
      numbers: "",
      pitfall: "Centring type vertically inside a box using line height. The em box is not symmetrical around the letters, so optically centred and mathematically centred are different positions.",
      source: "Standard type anatomy, origin unclear.",
      verify: { status: "verified", note: "Definition (baseline to top of a flat capital, excluding overshoot, usually below ascender height) checked against Wikipedia's Cap height article this session. No numeric ratios are given because none are standardised." },
      belongs: { verdict: "core", why: "The alignment reference that governs how type sits with every other element on a page or screen." },
      related: [350, 352, 354, 353]
    },
    {
      n: 352,
      title: "Ascender and descender",
      aka: ["Extenders"],
      oneLine: "The parts of lowercase letters that rise above the x-height or drop below the baseline.",
      demo: {
        caption: "Identical size and line height on both sides. Only the left-hand text has extenders, and only it runs into itself.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Extenders on every line</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type db-measure-narrow\" style=\"font-size:14px;line-height:0.82\">Highly baptised jugglers happily plodded by. Highly baptised jugglers happily plodded by.</div></div></div><div class=\"db-half\"><span class=\"db-tag\">No extenders at all</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type db-measure-narrow\" style=\"font-size:14px;line-height:0.82\">Numerous reasons arose as someone renews our seasonal courses. Numerous reasons arose as we</div></div></div></div>"
      },
      what: "Ascenders are the upstrokes on b, d, f, h, k, l and t. Descenders are the downstrokes on g, j, p, q and y. Together they are sometimes called extenders. Their length relative to the x-height is one of the strongest signals of a typeface's character: long extenders and a small x-height give the airy look of a geometric sans or a classical book face, while short extenders and a large x-height give the compact look of a newspaper or interface face.",
      why: "Extenders create the distinctive outline of a word, which is part of how readers recognise words at speed. They also decide how much leading a setting needs, because tight leading makes descenders collide with the ascenders on the line below.",
      how: [
        "Increase leading whenever descenders and ascenders come close to touching between lines.",
        "Choose long extenders for elegance and short extenders for density, and be honest about which the project needs.",
        "Check the descender depth before setting type in a fixed-height container; that is where clipping happens.",
        "Never set all-caps text with the leading you used for lowercase; there are no extenders to fill the gap."
      ],
      example: "Compare Futura's long ascenders against Helvetica's short ones at the same size. Futura needs less leading to look open and more space above the line.",
      numbers: "",
      pitfall: "Fixed-height containers in CSS clip descenders, and the bug only appears with certain words. Test with a string containing g, j, p, q and y.",
      source: "Standard type anatomy, origin unclear.",
      verify: { status: "verified", note: "Standard anatomy, consistent across the reference pages I checked this session. No numbers quoted, since extender-to-x-height ratios are per-typeface measurements rather than published thresholds." },
      belongs: { verdict: "core", why: "Directly determines leading, clipping and the character of a setting." },
      related: [350, 353, 373, 399]
    },
    {
      n: 353,
      title: "Baseline and mean line",
      aka: ["Alphabetic baseline", "x-line", "x-height line"],
      oneLine: "The invisible line letters sit on, and the invisible line the lowercase tops reach.",
      demo: {
        caption: "Same three pieces of text at three sizes. Centred on the left; resting on one shared baseline on the right.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Centred on each other</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-type\" style=\"font-size:34px\">48</span><span class=\"db-type\" style=\"font-size:18px\">.00</span><span class=\"db-type\" style=\"font-size:12px\">per month</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Sitting on one baseline</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight db-row--nowrap db-row--baseline\"><span class=\"db-type\" style=\"font-size:34px\">48</span><span class=\"db-type\" style=\"font-size:18px\">.00</span><span class=\"db-type\" style=\"font-size:12px\">per month</span></div></div></div></div>"
      },
      what: "The baseline is the line the flat bottoms of letters rest on; round letters dip slightly below it. The mean line, also called the x-line, is the line the flat tops of lowercase letters reach, and the distance between the two is the x-height. Type designers usually say x-height line rather than mean line, which is more of a textbook term. In CSS and in font files this baseline is specifically the alphabetic baseline; other scripts use different baselines, which matters as soon as you mix Latin with Devanagari or CJK.",
      why: "The baseline is the alignment reference for everything: adjacent words, mixed sizes, inline images, form fields and icons all line up on it or fail to. A shared baseline is what makes mixed content look typeset rather than assembled.",
      how: [
        "Align mixed-size type on the baseline, not on the top or the centre of the text box.",
        "Set inline icons and images with vertical-align tied to the baseline or explicitly offset from it.",
        "Remember that round letters overshoot the baseline slightly and should not be optically corrected back to it.",
        "Specify the baseline explicitly when mixing scripts, because the default is Latin-centric."
      ],
      example: "A price set as a large numeral with a small currency symbol only looks right when the symbol is deliberately raised, because baseline alignment puts it too low.",
      numbers: "",
      pitfall: "Assuming a single baseline works across scripts. Latin sits on the alphabetic baseline; several Indic scripts hang from a line above, and CJK uses a centred ideographic baseline.",
      source: "Standard type anatomy; the alphabetic baseline is defined in the CSS Inline Layout specification and in OpenType baseline tables.",
      verify: { status: "adjusted", note: "The master list's mean line is a real term but a secondary one; I checked Wikipedia's Mean line article this session and have flagged that working type designers usually say x-height line. The multiple-baseline point comes from the existence of OpenType baseline tags and CSS baseline keywords rather than from a source I read in full, so it is stated as a caution and not as a specification quote." },
      belongs: { verdict: "core", why: "The reference line for every alignment decision involving text." },
      related: [350, 351, 354, 384]
    },
    {
      n: 354,
      title: "Overshoot",
      aka: ["Optical overshoot", "Round letter overshoot"],
      oneLine: "Round and pointed letters are drawn slightly taller and deeper than flat ones so they look the same size.",
      demo: {
        caption: "Both O's meet the same two lines. Drawn three per cent taller on the right, the O now matches the H.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Snapped to the lines</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 115\"><path class=\"s-mute\" d=\"M12 25H158M12 85H158\"/><path class=\"s\" style=\"stroke-width:9\" d=\"M40 25V85M74 25V85M40 55H74\"/><circle class=\"s\" style=\"stroke-width:9\" cx=\"115\" cy=\"55\" r=\"30\"/><text class=\"t\" x=\"12\" y=\"21\">cap line</text><text class=\"t\" x=\"12\" y=\"99\">baseline</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Overshooting both lines</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 115\"><path class=\"s-mute\" d=\"M12 25H158M12 85H158\"/><path class=\"s\" style=\"stroke-width:9\" d=\"M40 25V85M74 25V85M40 55H74\"/><circle class=\"s\" style=\"stroke-width:9\" cx=\"115\" cy=\"55\" r=\"32\"/><text class=\"t\" x=\"12\" y=\"21\">cap line</text><text class=\"t\" x=\"12\" y=\"99\">baseline</text></svg></div></div></div>"
      },
      what: "A circle drawn to exactly the same height as a square looks smaller, because the curve only touches the boundary at one point. Type designers compensate by pushing the O above the cap height and below the baseline, and the o above the x-height and below the baseline. Pointed letters such as A and V get the same treatment. Wikipedia's overshoot entry records roughly 1 to 3 per cent of cap or x-height as typical for O, and cites Peter Karow's Digital Formats for Typefaces recommending 3 per cent for O and 5 per cent for A.",
      why: "Understanding overshoot stops you correcting it. It also transfers directly to everything else you draw: circular icons, dots, bullets and round buttons all need to be slightly bigger than their square neighbours to look equal.",
      how: [
        "Never nudge round letters back to the baseline or cap line in a logotype; the designer put them there on purpose.",
        "Draw circular icons slightly larger than square ones in the same set, then check by eye.",
        "Oversize round bullets and dots relative to their nominal grid size.",
        "Judge every optical correction at final size, since the effect is proportional."
      ],
      example: "Measure the O and the H in any well-made typeface. The O is taller, and you cannot see that it is.",
      numbers: "Typically 1 to 3 per cent of cap or x-height for O; Peter Karow's Digital Formats for Typefaces is cited as recommending 3 per cent for O and 5 per cent for A.",
      pitfall: "Aligning a logotype's letters mathematically in a vector tool. Snapping the O to the same height as the H makes the O look small, and it is very hard to un-see afterwards.",
      source: "Type design practice; figures via Wikipedia's Overshoot (typography) article citing Peter Karow, Digital Formats for Typefaces.",
      verify: { status: "verified", note: "Checked Wikipedia's Overshoot (typography) article this session for the definition and for the 1 to 3 per cent range and the Karow recommendations of 3 per cent for O and 5 per cent for A. The Karow figures are a secondary citation: I did not read Karow's book, and I have said so in the numbers field by attributing rather than asserting." },
      belongs: { verdict: "core", why: "A concrete optical correction that generalises from letters to icons, bullets and shapes." },
      related: [351, 353, 350, 357]
    },
    {
      n: 355,
      title: "Counters and apertures",
      aka: ["Counterform", "Bowl", "Opening"],
      oneLine: "The white inside a letter, and the size of the gap where that white escapes to the outside.",
      demo: {
        caption: "Same skeleton, same stroke. The terminals curl in on the right, halving the opening; the small copies show what that costs.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Open aperture</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 125\"><path class=\"s\" style=\"stroke-width:8\" d=\"M69.91 33.7A26 26 0 1 0 69.91 76.3\"/><path class=\"s-accent\" d=\"M88 33.7V76.3M84 33.7H92M84 76.3H92\"/><text class=\"t\" x=\"52\" y=\"58\" text-anchor=\"middle\">counter</text><text class=\"t\" x=\"96\" y=\"58\">aperture</text><g transform=\"translate(113.5 83.5) scale(0.3)\"><path class=\"s\" style=\"stroke-width:8\" d=\"M69.91 33.7A26 26 0 1 0 69.91 76.3\"/></g><text class=\"t\" x=\"130\" y=\"120\" text-anchor=\"middle\">at small size</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Closed aperture</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 125\"><path class=\"s\" style=\"stroke-width:8\" d=\"M79.11 45.26A26 26 0 1 0 79.11 64.74\"/><path class=\"s-accent\" d=\"M88 45.26V64.74M84 45.26H92M84 64.74H92\"/><text class=\"t\" x=\"52\" y=\"58\" text-anchor=\"middle\">counter</text><text class=\"t\" x=\"96\" y=\"58\">aperture</text><g transform=\"translate(113.5 83.5) scale(0.3)\"><path class=\"s\" style=\"stroke-width:8\" d=\"M79.11 45.26A26 26 0 1 0 79.11 64.74\"/></g><text class=\"t\" x=\"130\" y=\"120\" text-anchor=\"middle\">at small size</text></svg></div></div></div>"
      },
      what: "A counter is the enclosed or partly enclosed white space in a letter: the hole in an o, the bowl of a b, the two counters of a g. An aperture is the opening between that counter and the surrounding space, which is what you see in a, c, e, s, f and S. Open apertures leave a wide gap; closed apertures curl the terminals in until the gap is narrow. Frutiger is the standard example of a face designed with deliberately open apertures.",
      why: "Apertures are how a reader tells similar letters apart at small sizes, in poor light, at distance or with reduced vision. Closed apertures make c look like o and e look like a solid blob once conditions get bad.",
      how: [
        "Prefer open apertures for signage, interfaces, forms and anything read under pressure.",
        "Check a, c, e and s side by side at your actual smallest size, on your actual output medium.",
        "Watch counters as weight increases; bold and black weights fill in first at the counters.",
        "Do not letterspace a face to fix closed apertures; the gap inside the letter is the problem, not the gap between them."
      ],
      example: "Set Helvetica and Frutiger at 11px and compare the lowercase a and s. The Frutiger openings stay visible; the Helvetica ones close up.",
      numbers: "",
      pitfall: "Choosing a fashionable neo-grotesque for a dense data interface. The closed apertures that look clean in a headline become a legibility tax in a table of numbers and codes.",
      source: "Standard type anatomy; aperture as a term is well established in type design writing, origin unclear.",
      verify: { status: "verified", note: "Definitions checked this session against typography glossaries and the Frutiger typeface article, which names the wide open apertures of a, e and s as a humanist signal and describes the face as intended to stay legible at a distance and at small sizes. The general claim that open apertures aid recognition in poor conditions is standard in type design writing; I found no single controlled study to name, so I have not cited one." },
      belongs: { verdict: "core", why: "The specific letterform feature that most affects whether text survives bad conditions." },
      related: [333, 331, 350, 371]
    },
    {
      n: 356,
      title: "Stroke contrast and stress",
      aka: ["Thick-thin contrast", "Axis", "Modulation"],
      oneLine: "How much the stroke width varies within a letter, and which way the thin points are oriented.",
      demo: {
        caption: "Two o's on the same outer circle. Left: even walls on a tilted axis. Right: hairlines top and bottom, axis dead vertical.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Low contrast, diagonal stress</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 122\"><path class=\"f\" fill-rule=\"evenodd\" d=\"M51 58a34 34 0 1 0 68 0a34 34 0 1 0-68 0M62.5 66.2A24 29 -20 1 0 107.5 49.8A24 29 -20 1 0 62.5 66.2\"/><path class=\"s-accent\" d=\"M70 17L100 99\"/><text class=\"t\" x=\"85\" y=\"116\" text-anchor=\"middle\">stress axis</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">High contrast, vertical stress</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 122\"><path class=\"f\" fill-rule=\"evenodd\" d=\"M51 58a34 34 0 1 0 68 0a34 34 0 1 0-68 0M64 58A21 31.5 0 1 0 106 58A21 31.5 0 1 0 64 58\"/><path class=\"s-accent\" d=\"M85 15V101\"/><text class=\"t\" x=\"85\" y=\"116\" text-anchor=\"middle\">stress axis</text></svg></div></div></div>"
      },
      what: "Contrast is the ratio between the thickest and thinnest parts of a stroke. Stress, also called the axis, is the direction of the imaginary line drawn through the two thinnest points of an o. Both come from the tool: a broad-nib pen held at an angle produces low contrast and a diagonal stress, which is what old-style faces record. A pointed flexible pen produces high contrast and a vertical stress, which is what Didones record. Most sans serifs have almost no contrast and therefore no meaningful stress.",
      why: "Contrast and stress are the two features that let you identify a typeface's family at a glance and predict how it will behave. High contrast means fragility at small sizes and in poor printing; low contrast means durability and a flatter texture.",
      how: [
        "Draw an imaginary line through the thin points of the o to place an unfamiliar serif in its class.",
        "Avoid high-contrast faces for small text, reversed-out text and anything printed on absorbent paper.",
        "Match contrast levels when pairing, or accept that the mismatch will be the loudest thing on the page.",
        "Check reversed white-on-dark settings specifically; thin strokes shrink optically when reversed."
      ],
      example: "Garamond has low contrast and a clearly diagonal stress. Bodoni has extreme contrast and a dead vertical stress. That single pair of tests separates most serif classes.",
      numbers: "",
      pitfall: "Reversing a high-contrast serif out of a dark background at small size. The hairlines disappear and the text turns into a row of vertical bars.",
      source: "Standard type anatomy; the pen-derived explanation is set out in Gerrit Noordzij, The Stroke.",
      verify: { status: "verified", note: "Contrast and stress definitions and their class-by-class behaviour (diagonal in old style, vertical in transitional and Didone) were checked this session against Wikipedia's Old-style serif, Serif and Didone articles. Noordzij's The Stroke is named as the standard treatment of the pen-derived explanation; I did not read it this session, so I have attributed the idea rather than quoting it." },
      belongs: { verdict: "core", why: "The two measurements that classify a typeface and predict its failure modes." },
      related: [327, 328, 329, 357]
    },
    {
      n: 357,
      title: "Terminals, spurs and serif shapes",
      aka: ["Stroke endings", "Finials", "Serif brackets"],
      oneLine: "The small details where a stroke ends, which are the fingerprints you use to identify and match type.",
      demo: {
        caption: "The same G twice. The short stroke hanging below the bar on the left is the spur, the only difference.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Spurred G</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 125\"><path class=\"s\" style=\"stroke-width:9\" d=\"M104 40A34 34 0 1 0 112 62H88\"/><path class=\"s-accent\" style=\"stroke-width:9\" d=\"M112 62V78\"/><text class=\"t\" x=\"124\" y=\"76\">spur</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Spurless G</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 125\"><path class=\"s\" style=\"stroke-width:9\" d=\"M104 40A34 34 0 1 0 112 62H88\"/><text class=\"t\" x=\"124\" y=\"76\">no spur</text></svg></div></div></div>"
      },
      what: "A terminal is how a stroke ends when there is no serif: a ball terminal on the a and c of many transitionals, a sheared or angled terminal on many grotesques, a flared terminal on glyphics. A spur is the small projection at the bottom right of a capital G in some designs and absent in others. Serifs themselves vary by bracket (the curve joining serif to stem), by shape (slab, hairline, wedge, cupped) and by whether the head serifs are angled or flat.",
      why: "These details are how you tell two similar faces apart, how you match a client's existing type when nobody kept the file, and how you judge whether two faces will sit together. They are also where a typeface's quality shows.",
      how: [
        "Compare the capital G, the lowercase a and g, and the numeral 1 first; those carry the most identifying detail.",
        "Match terminals when pairing: ball terminals next to sheared ones read as a clash.",
        "Look at serif brackets when deciding whether a face will hold up at small sizes; unbracketed hairlines will not.",
        "Photograph existing signage or print at high resolution before trying to identify a face from memory."
      ],
      example: "Akzidenz-Grotesk and Helvetica both carry a spur on the capital G, so that detail will not separate them. What does: Helvetica ends its strokes on horizontal or vertical lines, Akzidenz-Grotesk is less consistent about that, and many Akzidenz-Grotesk styles give the R a straight leg where Helvetica curves it.",
      numbers: "",
      pitfall: "Identifying a typeface from a lowercase-only sample. The identifying detail is concentrated in a handful of characters, and if none of them appear you are guessing.",
      source: "Standard type anatomy, origin unclear; the terms are consistent across type design references.",
      verify: { status: "adjusted", note: "Terminal, spur, bracket and serif-shape terminology checked this session against Wikipedia's Serif, Sans-serif and Didone articles, which name ball terminals on transitionals and Didones and the spurred G and curled-leg R as grotesque markers. The example was wrong and has been corrected: Wikipedia's Akzidenz-Grotesk article gives that face a spurred G and, on many styles, a straight R leg, while the Helvetica article says Helvetica has a spurred G and a curved R tail. The two are told apart by Helvetica's higher x-height, tighter spacing and consistently horizontal terminals." },
      belongs: { verdict: "core", why: "The observational vocabulary a designer needs to identify, match and pair typefaces." },
      related: [356, 330, 334, 339]
    },
    {
      n: 358,
      title: "Ligatures (standard and discretionary)",
      aka: ["liga", "dlig", "Tied letters"],
      oneLine: "Single glyphs that replace awkward letter pairs, either automatically or only when you ask.",
      demo: {
        caption: "Same word, same size, same font. Ligatures off on the left; on the right the ffi is one drawn glyph.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">liga off</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><span class=\"db-type\" style=\"font-variant-ligatures:none;font-size:44px\">office</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">liga on</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><span class=\"db-type\" style=\"font-variant-ligatures:common-ligatures;font-size:44px\">office</span></div></div></div></div>"
      },
      what: "Some letter combinations collide: the hook of an f runs into the dot of an i, or the arm of an f hits the ascender of an l. Standard ligatures (OpenType feature liga) replace those pairs with a single drawn glyph and are on by default in most text engines. Discretionary ligatures (dlig) are the decorative ones, such as st and ct, and are off by default because they are a stylistic choice. There are also required ligatures (rlig), which scripts such as Arabic cannot be set without, historical ligatures (hlig) and contextual ligatures (clig).",
      why: "Standard ligatures remove visible collisions you would otherwise have to kern around. Discretionary ligatures give a setting a period or hand-set flavour in a way that costs nothing but a feature flag.",
      how: [
        "Leave standard ligatures on for text, and turn them off only where you have a reason.",
        "Switch discretionary ligatures on for short display settings, never for body copy.",
        "Turn ligatures off in monospaced code unless the coding face's ligatures are deliberate and the team agrees.",
        "In CSS, use font-variant-ligatures rather than raw font-feature-settings so the properties cascade properly."
      ],
      example: "In most serif faces the word 'office' sets with an ffi ligature by default. Turn liga off and the collision between the f hook and the i dot becomes visible.",
      numbers: "OpenType feature tags: liga (standard), dlig (discretionary), rlig (required), clig (contextual), hlig (historical).",
      pitfall: "Ligatures crossing a compound word boundary, in words such as shelfful or cufflink, where the tied letters belong to different parts of the word. Good fonts suppress these contextually; many do not.",
      source: "Microsoft, OpenType specification 1.9.1, registered features list.",
      verify: { status: "verified", note: "Fetched the OpenType registered features list this session and confirmed the tags and friendly names: liga Standard Ligatures, dlig Discretionary Ligatures, rlig Required Ligatures, clig Contextual Ligatures, hlig Historical Ligatures. The default-on behaviour of liga is text-engine behaviour rather than something the tag registry itself states, and is phrased as such." },
      belongs: { verdict: "core", why: "A default-on feature that changes how words look, and one of the few OpenType features a designer must sometimes switch off." },
      related: [363, 337, 359, 365]
    },
    {
      n: 359,
      title: "Small caps",
      aka: ["smcp", "c2sc", "Small capitals"],
      oneLine: "Capitals drawn at roughly lowercase height, with their own stem weights and widths.",
      demo: {
        caption: "The same acronym three ways in one sentence. Only the third carries the same weight of ink as the words around it.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:21px\">Filed with NASA before the deadline</span><span class=\"db-note\">full capitals: a hole in the line</span></span><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:21px\">Filed with <span style=\"font-size:0.68em\">NASA</span> before the deadline</span><span class=\"db-note\">capitals scaled down: too light</span></span><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:21px\">Filed with <span style=\"font-size:0.68em;font-weight:600;letter-spacing:0.06em\">NASA</span> before the deadline</span><span class=\"db-note\">drawn small caps: stems put back</span></span></div></div>"
      },
      what: "True small caps are separate drawings, not shrunken capitals. Because a capital scaled down keeps its original proportions, it ends up too light and too narrow next to the surrounding text; a drawn small cap is given heavier stems and wider proportions to match. They sit at or a little above x-height. Johann Froben is credited with popularising them, using them extensively from 1516. In OpenType, smcp converts lowercase to small caps and c2sc converts existing capitals to small caps, so setting an acronym properly usually needs both.",
      why: "Small caps let you set acronyms, running heads, opening phrases and legal text at capital emphasis without punching a hole in the typographic colour of the page. Full capitals inside a paragraph always shout.",
      how: [
        "Use smcp and c2sc together when the source text mixes cases, or the acronym will come out half-size.",
        "Add a little letterspacing to small caps, as you would to any capital setting.",
        "Set acronyms of three letters or more in small caps in body copy: NASA, HTML, PDF.",
        "Check the font actually has drawn small caps before specifying them."
      ],
      example: "A book's running heads set in small caps sit quietly at the top of the page; the same text in full capitals dominates the spread.",
      numbers: "OpenType feature tags: smcp (Small Capitals), c2sc (Small Capitals From Capitals), pcap and c2pc for petite caps.",
      pitfall: "CSS font-variant-caps: small-caps will synthesise fake small caps by scaling the capitals if the font has none. The result is visibly too light, and it is the same mistake as faux bold.",
      source: "Microsoft, OpenType specification 1.9.1, registered features list; history via Wikipedia's Small caps article.",
      verify: { status: "verified", note: "Tags smcp and c2sc confirmed against the OpenType registered features list I fetched this session. The definition, the difference between drawn and scaled small caps, the x-height positioning and the Froben attribution from 1516 come from Wikipedia's Small caps article, checked this session. I have left out the petite-caps percentages that article gives, because they were internally inconsistent." },
      belongs: { verdict: "core", why: "A standard editorial device with a specific technical requirement most people get wrong." },
      related: [366, 360, 377, 396]
    },
    {
      n: 360,
      title: "Oldstyle versus lining figures",
      aka: ["Text figures", "Non-lining figures", "onum", "lnum"],
      oneLine: "Numerals that vary in height like lowercase, against numerals that all sit at capital height.",
      demo: {
        caption: "Same sentence, same size. On the right the digits rise and fall with the lowercase instead of standing at capital height.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Lining figures</span><div class=\"db-stage db-stage--tight\"><span class=\"db-type\" style=\"font-size:26px\">the 1788 edition</span></div></div><div class=\"db-half\"><span class=\"db-tag\">Oldstyle figures</span><div class=\"db-stage db-stage--tight\"><span class=\"db-type\" style=\"font-size:26px\">the <span style=\"font-size:0.63em\">1</span><span style=\"vertical-align:-0.25em\">7</span>88 edition</span></div></div></div>"
      },
      what: "Text figures, also called oldstyle or non-lining figures, have varying heights. In the most common scheme 0, 1 and 2 sit at x-height, 6 and 8 ascend, and 3, 4, 5, 7 and 9 descend. Lining figures are all one height, aligned with the capitals. Lining figures appear around 1788, when Richard Austin cut a type for John Bell with three-quarter-height lining figures, and spread through nineteenth-century newspapers and advertising. OpenType exposes both as onum and lnum.",
      why: "Text figures blend into a paragraph because they have the same up-and-down rhythm as lowercase, so a date or a page reference stops shouting. Lining figures hold their own in tables, headings and all-capital settings.",
      how: [
        "Use oldstyle figures in running prose and lining figures in tables, forms and headings.",
        "Match the figure style to the case around it: lining with capitals, oldstyle with lowercase.",
        "Set the choice once at the stylesheet level rather than per instance.",
        "Check the font has both sets before promising a client oldstyle figures."
      ],
      example: "A paragraph mentioning 'the 1788 edition' set with lining figures has a small wall of capital-height digits in the middle of it; the same sentence with oldstyle figures reads smoothly.",
      numbers: "Common oldstyle scheme: 0, 1, 2 at x-height; 6, 8 ascending; 3, 4, 5, 7, 9 descending. OpenType tags onum and lnum.",
      pitfall: "Using oldstyle figures in a table. The varying heights destroy the vertical alignment that the table exists to provide.",
      source: "Microsoft, OpenType specification 1.9.1 (onum, lnum); history via Wikipedia's Text figures article.",
      verify: { status: "verified", note: "The digit scheme (0, 1, 2 at x-height; 6, 8 ascending; 3, 4, 5, 7, 9 descending), the Richard Austin type for John Bell around 1788 with three-quarter-height lining figures, and the onum/lnum tags were all checked this session against Wikipedia's Text figures article and the OpenType registered features list." },
      belongs: { verdict: "core", why: "A visible, controllable choice that affects every page containing numbers." },
      related: [361, 362, 359, 394]
    },
    {
      n: 361,
      title: "Tabular versus proportional figures",
      aka: ["tnum", "pnum", "Monospaced figures"],
      oneLine: "Digits given equal widths so columns align, against digits spaced individually for reading.",
      demo: {
        caption: "The same three numbers, right-aligned in both. Only the tabular column keeps its decimal points and its digits in line.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Proportional figures</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-variant-numeric:proportional-nums;text-align:right;font-size:22px;line-height:1.5\">1,111.11<br/>8,808.80<br/>1,010.10</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Tabular figures</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-variant-numeric:tabular-nums;text-align:right;font-size:22px;line-height:1.5\">1,111.11<br/>8,808.80<br/>1,010.10</div></div></div></div>"
      },
      what: "Tabular figures (OpenType tnum) give every digit the same advance width, so a 1 occupies as much space as a 0 and columns of numbers line up without any tab stops. Proportional figures (pnum) give each digit its natural width, which reads better in prose because the 1 stops sitting in a puddle of white. This is independent of the oldstyle/lining choice: a font can offer all four combinations.",
      why: "Tabular figures are what make financial tables, timetables and dashboards readable. They also stop live counters, clocks and timers from jittering, because the string width does not change as the digits change.",
      how: [
        "Set tnum on tables, prices in columns, timers, counters and anything that updates in place.",
        "Set pnum on running prose so numbers sit comfortably in the sentence.",
        "In CSS use font-variant-numeric: tabular-nums rather than raw feature settings.",
        "Check whether your typeface defaults to tabular or proportional; both defaults exist in the wild."
      ],
      example: "A stopwatch built with proportional figures visibly twitches as the digits change, because 1 is narrower than 8. Switching to tabular figures freezes the layout.",
      numbers: "OpenType feature tags: tnum (Tabular Figures), pnum (Proportional Figures).",
      pitfall: "Assuming tnum fixes alignment on its own. If the column is centred or ragged the digits still will not line up; tabular figures need right alignment or decimal alignment to do their job.",
      source: "Microsoft, OpenType specification 1.9.1, registered features list.",
      verify: { status: "verified", note: "Tags tnum (Tabular Figures) and pnum (Proportional Figures) confirmed against the OpenType registered features list fetched this session. The independence of the tabular/proportional and lining/oldstyle axes follows from them being four separate registered features rather than from a statement I read." },
      belongs: { verdict: "core", why: "The difference between a usable and an unusable table of numbers, and a one-line fix." },
      related: [360, 337, 394, 362]
    },
    {
      n: 362,
      title: "Fractions and superiors",
      aka: ["frac", "sups", "numr", "dnom", "Superscript and subscript"],
      oneLine: "Properly drawn fractions, superscripts and subscripts, rather than shrunken full-size characters.",
      demo: {
        caption: "One half, three ways at one size. The middle is just shrunken digits, and its strokes are thinner than everything around them.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--between\"><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:34px\">1/2</span><span class=\"db-note\">typed at full size</span></span><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:34px\"><span style=\"font-size:0.58em;vertical-align:0.42em\">1</span>&#8260;<span style=\"font-size:0.58em\">2</span></span><span class=\"db-note\">faked by scaling down</span></span><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:34px\">&#189;</span><span class=\"db-note\">drawn as one glyph</span></span></div></div>"
      },
      what: "OpenType provides frac for fractions built from numerator and denominator forms, afrc for alternative (stacked or nut) fractions, numr and dnom for the component parts, sups for superscript figures, subs for subscript, sinf for scientific inferiors and ordn for ordinals. All of these are drawn at the right weight for their size. A superscript faked by scaling a full-size numeral down and raising it comes out too light and too narrow against the text around it.",
      why: "Footnote markers, ordinals, measurements and chemical formulae appear in almost every document, and the faked versions are visibly weedy. Drawn forms keep the typographic colour even.",
      how: [
        "Use sups for footnote markers rather than a smaller raised character.",
        "Use frac for inline fractions such as 1/2 and 3/4, and check what the font produces before trusting it.",
        "Use ordn for 1st, 2nd and 3rd rather than manually superscripting the letters.",
        "In CSS, font-variant-position: super and sub select real forms where they exist."
      ],
      example: "Set a footnote marker as a real superior figure and then as a scaled numeral at the same visual size. The scaled one is noticeably lighter.",
      numbers: "OpenType feature tags: frac, afrc, numr, dnom, sups, subs, sinf, ordn.",
      pitfall: "Relying on frac in a font with only a handful of pre-built fractions. Ask for 7/16 and you may get either a properly composed fraction or nothing at all, depending on the font.",
      source: "Microsoft, OpenType specification 1.9.1, registered features list.",
      verify: { status: "adjusted", note: "All eight tags and their friendly names (Fractions, Alternative Fractions, Numerators, Denominators, Superscript, Subscript, Scientific Inferiors, Ordinals) confirmed against the OpenType registered features list fetched this session. One number removed on review: the author wrote that a faked superscript is scaled to 60 per cent, which no source gives. Applications differ and the figure was invented, so the sentence now describes the effect without a percentage." },
      belongs: { verdict: "core", why: "Everyday editorial detail with a specific technical solution and a common wrong answer." },
      related: [360, 361, 366, 388]
    },
    {
      n: 363,
      title: "Stylistic sets and alternates",
      aka: ["ss01 to ss20", "cv01 to cv99", "salt", "Alternate glyphs"],
      oneLine: "Switchable alternative letterforms a typeface carries beyond its defaults.",
      demo: {
        caption: "The same tag in two different fonts. Nothing defines what ss01 does, so it swaps an a here and an R there.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Font A: ss01</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 112\"><path class=\"s\" style=\"stroke-width:7\" d=\"M62 40V78C62 84 67 86 72 84\"/><circle class=\"s\" style=\"stroke-width:7\" cx=\"48\" cy=\"66\" r=\"13\"/><path class=\"s\" style=\"stroke-width:7\" d=\"M36 48C38 38 52 34 62 42\"/><path class=\"s-mute\" d=\"M84 62H104M99 57L104 62L99 67\"/><path class=\"s\" style=\"stroke-width:7\" d=\"M152 45V78C152 84 157 86 162 84\"/><circle class=\"s\" style=\"stroke-width:7\" cx=\"134\" cy=\"62\" r=\"17\"/><text class=\"t\" x=\"49\" y=\"104\" text-anchor=\"middle\">default</text><text class=\"t\" x=\"139\" y=\"104\" text-anchor=\"middle\">ss01</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Font B: ss01</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 112\"><path class=\"s\" style=\"stroke-width:7\" d=\"M42 34V84M42 34H60A14 14 0 0 1 60 62H42\"/><path class=\"s\" style=\"stroke-width:7\" d=\"M60 62C68 68 70 76 76 84\"/><path class=\"s-mute\" d=\"M90 60H110M105 55L110 60L105 65\"/><path class=\"s\" style=\"stroke-width:7\" d=\"M124 34V84M124 34H142A14 14 0 0 1 142 62H124\"/><path class=\"s\" style=\"stroke-width:7\" d=\"M142 62L160 84\"/><text class=\"t\" x=\"58\" y=\"104\" text-anchor=\"middle\">default</text><text class=\"t\" x=\"142\" y=\"104\" text-anchor=\"middle\">ss01</text></svg></div></div></div>"
      },
      what: "OpenType provides several routes to alternates. Stylistic sets ss01 to ss20 each swap a defined group of glyphs at once. Character variants cv01 to cv99 target individual characters. salt offers stylistic alternates for a character, aalt gives access to all alternates, swsh gives swash forms and titl gives titling forms drawn for large sizes. What any given set does is entirely up to the foundry, so ss01 in one font has nothing in common with ss01 in another.",
      why: "Alternates are how you make a widely-used typeface look like yours. Changing a single-storey a to a double-storey one, or turning on an alternate g, shifts the character of a whole identity without licensing a new family.",
      how: [
        "Read the foundry's specimen to find out what each set does before switching anything on.",
        "Pick alternates for a reason (disambiguation, brand character) and then apply them everywhere consistently.",
        "Record the exact feature strings in the design system, since nobody will remember that ss03 was the alternate R.",
        "Test alternates in the smallest size you ship; some are display-only in practice."
      ],
      example: "Many grotesques ship an alternate single-storey a or a straight-leg R as a stylistic set, which is how two brands using the same typeface end up looking different.",
      numbers: "OpenType feature tags: ss01 to ss20 (Stylistic Set 1 to 20), cv01 to cv99 (Character Variant 1 to 99), salt, aalt, swsh, titl.",
      pitfall: "There is no registry of what each set means. A font update can change or reorder sets, and a fallback font will silently ignore them, so a brand built on ss04 is a brand with a hidden dependency.",
      source: "Microsoft, OpenType specification 1.9.1, registered features list.",
      verify: { status: "verified", note: "Ranges and friendly names confirmed against the OpenType registered features list fetched this session: ss01 to ss20 Stylistic Set 1 to 20, cv01 to cv99 Character Variant 1 to 99, salt Stylistic Alternates, aalt Access All Alternates, swsh Swash, titl Titling. The point that set meanings are foundry-defined follows from the spec registering only the tags and not their contents." },
      belongs: { verdict: "core", why: "The main way a designer customises a licensed typeface, and a real source of production risk." },
      related: [9363, 358, 365, 364]
    },
    {
      n: 9363,
      title: "Slashed zero and ambiguous character pairs",
      aka: ["zero", "Character disambiguation", "0/O, 1/l/I"],
      oneLine: "Choosing or configuring type so that similar characters cannot be confused in strings that matter.",
      demo: {
        caption: "On the left only the labels tell these five marks apart. On the right the added strokes do.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Ambiguous forms</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 108\"><ellipse class=\"s\" style=\"stroke-width:5\" cx=\"24\" cy=\"50\" rx=\"11\" ry=\"20\"/><ellipse class=\"s\" style=\"stroke-width:5\" cx=\"62\" cy=\"50\" rx=\"13\" ry=\"20\"/><path class=\"s\" style=\"stroke-width:5\" d=\"M98 30V70M126 28V70M154 30V70\"/><text class=\"t\" x=\"24\" y=\"92\" text-anchor=\"middle\">zero</text><text class=\"t\" x=\"62\" y=\"92\" text-anchor=\"middle\">oh</text><text class=\"t\" x=\"98\" y=\"92\" text-anchor=\"middle\">one</text><text class=\"t\" x=\"126\" y=\"92\" text-anchor=\"middle\">ell</text><text class=\"t\" x=\"154\" y=\"92\" text-anchor=\"middle\">eye</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Disambiguated forms</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 108\"><ellipse class=\"s\" style=\"stroke-width:5\" cx=\"24\" cy=\"50\" rx=\"11\" ry=\"20\"/><path class=\"s-accent\" style=\"stroke-width:5\" d=\"M15 64L33 36\"/><ellipse class=\"s\" style=\"stroke-width:5\" cx=\"62\" cy=\"50\" rx=\"13\" ry=\"20\"/><path class=\"s\" style=\"stroke-width:5\" d=\"M98 30V70M126 28V70M154 30V70\"/><path class=\"s-accent\" style=\"stroke-width:5\" d=\"M98 30L90 37M88 70H108M126 70C126 75 131 77 136 74M146 30H162M146 70H162\"/><text class=\"t\" x=\"24\" y=\"92\" text-anchor=\"middle\">zero</text><text class=\"t\" x=\"62\" y=\"92\" text-anchor=\"middle\">oh</text><text class=\"t\" x=\"98\" y=\"92\" text-anchor=\"middle\">one</text><text class=\"t\" x=\"126\" y=\"92\" text-anchor=\"middle\">ell</text><text class=\"t\" x=\"154\" y=\"92\" text-anchor=\"middle\">eye</text></svg></div></div></div>"
      },
      what: "Several character pairs look alike in most typefaces: zero against capital O, one against lowercase l and capital I, five against S, eight against B, and the pair rn against m. In running prose context resolves the ambiguity instantly. In a reference number, a password, a licence plate, a part code or a line of source code there is no context, so the reader has to guess. OpenType provides the zero feature, which substitutes a slashed or dotted zero, and many technical typefaces ship disambiguated forms as their defaults or as stylistic sets.",
      why: "Every mis-keyed reference number is a support call, a failed payment or a wrong delivery. Choosing type that cannot be misread is cheaper than any amount of interface copy telling people to check carefully.",
      how: [
        "Set the zero feature on for reference numbers, codes, passwords and any string a person will retype.",
        "Test the specific pairs 0/O, 1/l/I, 5/S, 8/B and rn/m at the smallest size you ship.",
        "Prefer a typeface with a tailed lowercase l or a serifed capital I for technical content.",
        "Break long codes into groups so the reader can check a chunk at a time."
      ],
      example: "Set a booking reference such as 1O0Il in your chosen face at 12px and try to read it back. If you cannot, the typeface is wrong for that job.",
      numbers: "OpenType feature tag: zero (Slashed Zero).",
      pitfall: "Turning slashed zeros on globally. In prose and in prices a slashed zero looks like an error, so scope it to the strings that need it.",
      source: "Microsoft, OpenType specification 1.9.1, registered features list (zero).",
      verify: { status: "verified", note: "The zero (Slashed Zero) tag is confirmed in the OpenType registered features list I fetched this session. The list of confusable pairs is observational and directly checkable in any font; I have not attached any error-rate figure, because I found no study I could name." },
      belongs: { verdict: "core", why: "A genuine omission from the master list. Typeface choice for codes and data is a distinct fundamental with a specific OpenType control, and getting it wrong causes real errors rather than ugly pages." },
      related: [363, 337, 361, 394]
    },
    {
      n: 364,
      title: "Variable font axes (weight, width, optical size, slant, grade)",
      aka: ["OpenType Font Variations", "fvar", "Variable fonts"],
      oneLine: "One font file holding a continuous design space, navigated by named numeric axes.",
      demo: {
        caption: "Both sides span one weight range. The static family gives four cast points on it; the variable font gives every point.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Static family: four cut weights</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 108\"><path class=\"s-mute\" d=\"M14 82H176\"/><rect class=\"f\" x=\"28\" y=\"34\" width=\"4\" height=\"44\"/><rect class=\"f\" x=\"74.5\" y=\"34\" width=\"7\" height=\"44\"/><rect class=\"f\" x=\"118\" y=\"34\" width=\"12\" height=\"44\"/><rect class=\"f\" x=\"159\" y=\"34\" width=\"18\" height=\"44\"/><circle class=\"f\" cx=\"30\" cy=\"82\" r=\"2.5\"/><circle class=\"f\" cx=\"78\" cy=\"82\" r=\"2.5\"/><circle class=\"f\" cx=\"124\" cy=\"82\" r=\"2.5\"/><circle class=\"f\" cx=\"168\" cy=\"82\" r=\"2.5\"/><text class=\"t\" x=\"30\" y=\"100\" text-anchor=\"middle\">300</text><text class=\"t\" x=\"78\" y=\"100\" text-anchor=\"middle\">400</text><text class=\"t\" x=\"124\" y=\"100\" text-anchor=\"middle\">700</text><text class=\"t\" x=\"168\" y=\"100\" text-anchor=\"middle\">900</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Variable font: one wght axis</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 108\"><path class=\"s-accent\" d=\"M14 82H176\"/><rect class=\"f\" x=\"20.5\" y=\"34\" width=\"3\" height=\"44\"/><rect class=\"f\" x=\"37.6\" y=\"34\" width=\"4.9\" height=\"44\"/><rect class=\"f\" x=\"54.6\" y=\"34\" width=\"6.8\" height=\"44\"/><rect class=\"f\" x=\"71.7\" y=\"34\" width=\"8.6\" height=\"44\"/><rect class=\"f\" x=\"88.8\" y=\"34\" width=\"10.5\" height=\"44\"/><rect class=\"f\" x=\"105.8\" y=\"34\" width=\"12.4\" height=\"44\"/><rect class=\"f\" x=\"122.9\" y=\"34\" width=\"14.3\" height=\"44\"/><rect class=\"f\" x=\"140\" y=\"34\" width=\"16.1\" height=\"44\"/><rect class=\"f\" x=\"157\" y=\"34\" width=\"18\" height=\"44\"/><text class=\"t\" x=\"95\" y=\"100\" text-anchor=\"middle\">any value from 1 to 1000</text></svg></div></div></div>"
      },
      what: "Adobe, Apple, Google and Microsoft announced OpenType 1.8 Font Variations together at ATypI in Warsaw on 14 September 2016. A variable font stores a default outline plus deltas, so software can interpolate any point in the design space. Five axes are registered, and their tags are lowercase: wght (weight, 1 to 1000, with 400 required for Regular), wdth (width, greater than zero, as a percentage of normal, with 100 required for Regular), opsz (optical size, greater than zero, in points), slnt (slant, greater than minus 90 and less than plus 90, measured in counter-clockwise degrees so a right-leaning oblique is negative, with 0 required for Regular) and ital (italic). Grade is not one of them.",
      why: "Variable fonts let you use exactly the weight or width a layout needs instead of the nearest cast one, and they let a single file cover a whole family, which cuts what the browser has to download.",
      how: [
        "Read the font's axis list before writing CSS; a font with only wght will silently ignore everything else.",
        "Use font-variation-settings only for custom axes, and use the standard CSS properties (font-weight, font-stretch, font-style) for registered ones.",
        "Remember slnt is counter-clockwise, so a normal right-leaning slant is a negative number.",
        "Define named instances in the design system rather than letting anyone pick any value."
      ],
      example: "Roboto Flex exposes the registered axes plus custom ones including GRAD for grade and XOPQ for thin stroke.",
      numbers: "Registered axes: wght 1 to 1000 (Regular 400), wdth greater than 0 (Regular 100), opsz greater than 0 in points, slnt between minus 90 and plus 90 (Regular 0), ital.",
      pitfall: "Treating grade as a registered axis. Registered tags are lowercase and foundry-defined ones must start with an uppercase letter, which is why grade is GRAD; support for it is per-font and per-tool, not guaranteed.",
      source: "Microsoft, OpenType specification 1.9.1, design-variation axis tag registry; OpenType 1.8 announced at ATypI Warsaw, 14 September 2016.",
      verify: { status: "adjusted", note: "The master list names grade as one of the axes. I fetched the Microsoft design-variation axis tag registry and the individual wght, wdth, opsz and slnt pages this session: only ital, opsz, slnt, wdth and wght are registered, with exactly the ranges quoted. GRAD is a foundry-defined custom axis, which I confirmed against Google Fonts documentation stating that registered axes are lowercase and custom axes uppercase, and that Roboto Flex exposes GRAD and XOPQ. The 14 September 2016 ATypI Warsaw announcement by Adobe, Apple, Google and Microsoft was separately confirmed." },
      belongs: { verdict: "core", why: "The current format for type, and it changes what a type scale and a weight palette can be." },
      related: [348, 365, 349, 344]
    },
    {
      n: 365,
      title: "True italics versus obliques",
      aka: ["Cursive italic", "Sloped roman", "Slanted roman"],
      oneLine: "An italic redraws the letters from handwriting; an oblique just leans the roman over.",
      demo: {
        caption: "The same word both ways. Sheared on the left, the f keeps its flat foot; the drawn italic gives it a descender.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Roman sheared over</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><span class=\"db-type\" style=\"display:inline-block;transform:skewX(-12deg);font-size:36px\">fragile</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">The family's own italic</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><span class=\"db-type\" style=\"font-style:italic;font-size:36px\">fragile</span></div></div></div></div>"
      },
      what: "Italic type was first used by Aldus Manutius and his punchcutter Francesco Griffo in Venice in 1500, and it was not invented for emphasis. Manutius wanted a compact cursive for small portable editions of popular texts. A true italic changes the letterforms: a single-storey a, a different g, entry and exit strokes taken from handwriting, sometimes swash capitals. An oblique is a slanted roman that keeps the double-storey a and the non-descending f, with no cursive forms. Many sans families ship obliques and label them italic.",
      why: "The two read differently. A true italic reads as another voice, which is what emphasis, titles and quoted matter want. An oblique reads as the same voice tilted, which suits a neutral sans system but carries less weight as emphasis.",
      how: [
        "Check the lowercase a and g before assuming a family has real italics.",
        "In a serif family expect true italics and treat a sloped roman as a warning sign about quality.",
        "Do not mix a true italic and an oblique within one system for the same job.",
        "Use italics for their editorial jobs (titles, foreign terms, emphasis) rather than for decoration."
      ],
      example: "Helvetica Oblique is a slanted roman: the a stays double-storey. Garamond Italic is a different alphabet from Garamond Roman.",
      numbers: "",
      pitfall: "Assuming the italic in a family is a true italic because the menu says Italic. The menu name is a style label, not a description of the drawing.",
      source: "Aldus Manutius and Francesco Griffo, Venice, 1500; definitions via Wikipedia's Italic type article.",
      verify: { status: "verified", note: "Checked Wikipedia's Italic type article this session: first used by Manutius in Venice in 1500 with Griffo as punchcutter, intended for compact portable editions rather than emphasis; oblique defined as slanted but lacking cursive letterforms, with a non-descending f and double-storey a; and the note that many sans-serif families label obliques as italics." },
      belongs: { verdict: "core", why: "Determines whether emphasis actually reads as emphasis, and it is a quality signal when choosing a family." },
      related: [366, 364, 397, 358]
    },
    {
      n: 366,
      title: "Faux styles (why to avoid)",
      aka: ["Synthetic bold", "Faux italic", "Synthesised styles"],
      oneLine: "Software fakes missing weights and italics by smearing or shearing the regular, and it always shows.",
      demo: {
        caption: "Regular, then bold. The faux outline grows both ways and eats the counter; the drawn bold widens and keeps it open.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Faux bold</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 115\"><circle class=\"s\" style=\"stroke-width:8\" cx=\"48\" cy=\"56\" r=\"24\"/><path class=\"s-accent\" d=\"M28 56H68M28 52V60M68 52V60\"/><circle class=\"s\" style=\"stroke-width:18\" cx=\"134\" cy=\"56\" r=\"24\"/><path class=\"s-accent\" d=\"M119 56H149M119 52V60M149 52V60\"/><text class=\"t\" x=\"48\" y=\"104\" text-anchor=\"middle\">regular</text><text class=\"t\" x=\"134\" y=\"104\" text-anchor=\"middle\">faux bold</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Drawn bold</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 115\"><circle class=\"s\" style=\"stroke-width:8\" cx=\"48\" cy=\"56\" r=\"24\"/><path class=\"s-accent\" d=\"M28 56H68M28 52V60M68 52V60\"/><ellipse class=\"s\" style=\"stroke-width:16\" cx=\"134\" cy=\"56\" rx=\"29\" ry=\"27\"/><path class=\"s-accent\" d=\"M113 56H155M113 52V60M155 52V60\"/><text class=\"t\" x=\"48\" y=\"104\" text-anchor=\"middle\">regular</text><text class=\"t\" x=\"134\" y=\"104\" text-anchor=\"middle\">drawn bold</text></svg></div></div></div>"
      },
      what: "When an application or browser is asked for a bold or italic that the loaded font does not contain, it manufactures one. Faux bold thickens the outline outwards in every direction, which closes counters and destroys the letterfit. Faux italic shears the roman by a fixed angle, which distorts curves and leaves the letterforms uncursive. Neither matches what a designer would have drawn. On the web the usual cause is an @font-face block that declares one file and then asks for font-weight: 700, so the browser synthesises rather than loading the real bold.",
      why: "Faux styles are one of the few typographic faults that non-designers notice as wrongness even when they cannot name it, and they are entirely avoidable.",
      how: [
        "Declare every real weight and style in its own @font-face block with matching font-weight and font-style descriptors.",
        "Set font-synthesis: none while developing so faux styles fail loudly instead of quietly.",
        "Check small caps too: font-variant-caps will synthesise those as well if the font lacks them.",
        "Compare a suspect bold against the real file at large size; the smeared counters give it away."
      ],
      example: "Load a single regular weight from a web font service and apply <strong> to a word. The browser shows a faux bold: thickened outwards, with the counters closed up and the spacing wrong.",
      numbers: "",
      pitfall: "Faux italic on a serif face is the worst case, because sheared serifs and shorn curves look plainly broken. Faux bold on a light weight is the second worst.",
      source: "CSS Fonts specification (the font-synthesis property); the problem is documented in Say No to Faux Bold, A List Apart.",
      verify: { status: "adjusted", note: "Confirmed this session that the CSS Fonts specification defines font-synthesis to control whether faux bold and faux italic are generated, via A List Apart's Say No to Faux Bold and related front-end sources describing the @font-face descriptor mismatch as the usual cause. Corrected on review: the author's own note said no figure for prevalence had been found, yet the example still called this the most common typographic fault on the web. That superlative is unsupported and has been removed; the example now describes what the fault looks like instead." },
      belongs: { verdict: "core", why: "A specific, avoidable production fault that degrades every other typographic decision on the page." },
      related: [365, 359, 364, 358]
    },
    {
      n: 367,
      title: "Dashes: hyphen, en, em",
      aka: ["Hyphenation and dashes", "Rules of the dash"],
      oneLine: "Three different marks with three different jobs, plus a minus sign that is none of them.",
      demo: {
        caption: "Three marks between the same two letters at one size. Only their length differs, and each length has its own job.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--between\"><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:32px\">n-n</span><span class=\"db-note\">hyphen: joins</span></span><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:32px\">n&#8211;n</span><span class=\"db-note\">en dash: ranges</span></span><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:32px\">n&#8212;n</span><span class=\"db-note\">em dash: breaks</span></span></div></div>"
      },
      what: "The hyphen joins words and breaks them at line ends. The en dash, roughly the width of an n, marks ranges and connections between equals: pages 10-15, the London-Paris route. The em dash, roughly the width of an m, marks a break in a sentence. Style guides disagree on that last job. Chicago sets a closed em dash with no spaces; British publishing convention and Bringhurst both prefer a spaced en dash. Unicode has separate characters for all of them, plus a proper minus sign that is neither hyphen nor dash.",
      why: "Dashes are one of the fastest ways to tell hand-set copy from pasted copy. Getting them right costs nothing and getting them wrong marks a page as unedited.",
      how: [
        "Pick one house style for the sentence break, spaced en or closed em, and apply it everywhere.",
        "Use en dashes closed up for ranges, and never put spaces around a range dash.",
        "Use the real minus sign in maths and data, not a hyphen.",
        "Use the non-breaking hyphen in compound names and codes that must not break across lines."
      ],
      example: "The range 1914-18 takes a closed en dash. The sentence break takes either an em dash with no spaces (Chicago) or an en dash with spaces on both sides (British house style).",
      numbers: "U+002D hyphen-minus (the ASCII key), U+2010 HYPHEN, U+2011 NON-BREAKING HYPHEN, U+2013 EN DASH, U+2014 EM DASH, U+2212 MINUS SIGN.",
      pitfall: "Word processors autocorrect a double hyphen into an em dash but leave range hyphens alone, so most pasted copy has the em dashes right and every single range wrong.",
      source: "The Chicago Manual of Style (closed em dash); Robert Bringhurst, The Elements of Typographic Style (spaced en dash); The Unicode Standard for the characters.",
      verify: { status: "verified", note: "The character names and code points were verified directly this session against the Unicode character database version 16.0.0 using Python's unicodedata module. The Chicago closed-em-dash preference and the British and Bringhurst preference for a spaced en dash were checked against Chicago Manual of Style Shop Talk and secondary typographic guides; the two conventions genuinely differ and I have presented both rather than picking one as correct." },
      belongs: { verdict: "core", why: "A daily editorial decision with defined characters and defined conventions." },
      related: [368, 369, 388, 378]
    },
    {
      n: 368,
      title: "Quotation marks and primes",
      aka: ["Smart quotes", "Curly quotes", "Typographer's quotes"],
      oneLine: "Real quotation marks curl and come in pairs; primes are straight marks that mean feet, inches and minutes.",
      demo: {
        caption: "The same two strings, typed then set. The quotation marks curl into a pair and the measurement takes leaning primes.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Typed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:30px\">&quot;quiet&quot;</span><span class=\"db-type\" style=\"font-size:30px\">6&#39;2&quot;</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Set</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"font-size:30px\">&#8220;quiet&#8221;</span><span class=\"db-type\" style=\"font-size:30px\">6&#8242;2&#8243;</span></div></div></div></div>"
      },
      what: "The straight marks on a keyboard are typewriter compromises. Proper quotation marks are directional: U+2018 and U+2019 for single, U+201C and U+201D for double. U+2019 also serves as the apostrophe. German and several other languages use low-9 forms (U+201A and U+201E), and French uses guillemets (U+00AB and U+00BB). Primes are different characters again: U+2032 PRIME for feet and minutes, U+2033 DOUBLE PRIME for inches and seconds. A prime is not a straight quote and a straight quote is not a prime.",
      why: "Curly quotes are the clearest single signal that copy has been set rather than typed. Primes matter because 6'2\" set with quote marks reads as a quotation of something.",
      how: [
        "Turn on smart quotes in the editor, then check every apostrophe that starts a word: '90s and 'til are the ones autocorrect gets backwards.",
        "Use primes for measurements, coordinates and times, never straight quotes.",
        "Set the language on the page so software picks the right national quote forms.",
        "Leave straight quotes alone inside code samples, where they are correct."
      ],
      example: "Rock 'n' roll needs two apostrophes, both curling the same way as U+2019. Most autocorrect systems get the first one wrong and turn it into an opening quote.",
      numbers: "U+2018 and U+2019 single quotation marks; U+201C and U+201D double; U+201A and U+201E low-9 forms; U+00AB and U+00BB guillemets; U+2032 PRIME; U+2033 DOUBLE PRIME.",
      pitfall: "Copy pasted from a word processor into a CMS often arrives with a mix of straight and curly marks. Search for the straight characters explicitly rather than trusting the eye.",
      source: "The Unicode Standard; conventions from standard editorial practice.",
      verify: { status: "verified", note: "All code points and official character names were verified this session against the Unicode character database version 16.0.0 using Python's unicodedata module: LEFT and RIGHT SINGLE and DOUBLE QUOTATION MARK, SINGLE and DOUBLE LOW-9 QUOTATION MARK, the two double angle quotation marks, PRIME and DOUBLE PRIME." },
      belongs: { verdict: "core", why: "A visible correctness marker on every piece of copy, with unambiguous right answers." },
      related: [367, 369, 388, 386]
    },
    {
      n: 369,
      title: "Non-breaking spaces and thin spaces",
      aka: ["nbsp", "Hard space", "Fixed spaces"],
      oneLine: "Spaces of controlled width or controlled breaking behaviour, used to stop bad line breaks and tighten pairs.",
      demo: {
        caption: "The same line in the same narrow column. On the right the space between the number and its unit cannot break.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Ordinary space</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type db-type--mono\" style=\"width:23.5ch;font-size:14px;line-height:1.6\">Preheat the oven to 180 C</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">No-break space</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type db-type--mono\" style=\"width:23.5ch;font-size:14px;line-height:1.6\">Preheat the oven to 180&#160;C</div></div></div></div>"
      },
      what: "Unicode defines a set of spaces beyond the ordinary word space. U+00A0 NO-BREAK SPACE has a normal width but forbids a line break. U+2009 THIN SPACE is narrow but does allow a break; U+202F NARROW NO-BREAK SPACE is the narrow version that does not. U+200A HAIR SPACE is narrower still. U+2002 EN SPACE and U+2003 EM SPACE are fixed at an en and an em. U+2007 FIGURE SPACE is conventionally the width of a digit, which makes it useful for padding numbers.",
      why: "Bad line breaks are among the most visible faults in body copy, and they are avoidable one character at a time. Thin spaces fix the collisions that ordinary spaces make too loose, such as between an initial and a surname.",
      how: [
        "Bind a number to its unit (10 kg), a label to its figure (Fig. 3), and a name to its numeral (Henry VIII) with a no-break space.",
        "Use a narrow no-break space, not a thin space, when the pair must also stay on one line.",
        "Prefer CSS white-space: nowrap on a span for phrases, and reserve the characters for single pairs.",
        "Set initials as T. S. Eliot with thin or narrow no-break spaces, not full word spaces."
      ],
      example: "A price rendered as 12 GBP with an ordinary space can break across two lines. The same string with U+00A0 cannot.",
      numbers: "U+00A0 NO-BREAK SPACE, U+2002 EN SPACE, U+2003 EM SPACE, U+2007 FIGURE SPACE, U+2008 PUNCTUATION SPACE, U+2009 THIN SPACE, U+200A HAIR SPACE, U+202F NARROW NO-BREAK SPACE.",
      pitfall: "Non-breaking spaces are invisible in most editors and survive copy and paste, so they get scattered through copy by accident and then break justification. Search for them before publishing.",
      source: "The Unicode Standard, character database 16.0.0.",
      verify: { status: "verified", note: "Every code point and official name here was verified this session against Unicode 16.0.0 using Python's unicodedata module. The widths are conventions carried in Unicode's annotations and in typesetting practice rather than facts guaranteed by the character names, so I have written FIGURE SPACE as conventionally a digit width and given no fraction-of-an-em figure for THIN SPACE, which I could not confirm." },
      belongs: { verdict: "core", why: "Concrete characters that fix concrete faults in set text, and they are part of the working vocabulary of detail typography." },
      related: [367, 368, 374, 381]
    }
  ]
};
