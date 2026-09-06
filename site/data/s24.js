window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[24] = {
  n: 24,
  slug: "signage",
  title: "Environmental, signage and exhibition",
  blurb: "Design that lives in physical space: signs people read while moving, and exhibitions people walk through.",
  intro: "Everything in this section gets read by someone who is moving, standing up and usually in a hurry. That changes the rules. Letter size comes from viewing distance rather than from the space left on the plate, contrast has to survive whatever lighting the building actually has, and the material has to last years outdoors. Much of it is governed by law rather than taste: the ADA Standards in the United States, Approved Document M and the 1996 safety signs regulations in the UK, and the ISO standards for public information and safety symbols. The exhibition entries come from a different tradition, museum visitor studies, where researchers have been tracking and timing real visitors for decades and the numbers are humbling.",
  sources: [
    "David Gibson, The Wayfinding Handbook: Information Design for Public Places (Princeton Architectural Press, February 2009)",
    "Paul Arthur and Romedi Passini, Wayfinding: People, Signs, and Architecture (1992)",
    "US Access Board, 2010 ADA Standards for Accessible Design (sections 216, 307, 407, 703)",
    "HM Government, Approved Document M: Access to and use of buildings, Volume 2 (2015 edition with 2024 amendments), clause 0.26",
    "Marvin Levine, You-Are-Here Maps: Psychological Considerations, Environment and Behavior 14(2), 1982",
    "Marvin Levine, Iris Marchon and Gerard Hanley, The Placement and Misplacement of You-Are-Here Maps, Environment and Behavior 16(2), 1984",
    "Andrew Bertucci, Sign Legibility: Rules of Thumb (United States Sign Council Foundation, 2006)",
    "Andrew Bertucci and Richard Crawford, Best Practice Standards for On-Premise Signs (United States Sign Council Foundation, 2015)",
    "John D. Bullough, Factors Affecting Sign Visibility, Conspicuity and Legibility: Review and Annotated Bibliography, Interdisciplinary Journal of Signage and Wayfinding, volume 1 issue 2 (2017)",
    "Brooke T. Kuhn, Philip M. Garvey and Martin T. Pietrucha, Model guidelines for visibility of on-premise advertising signs, Transportation Research Record 1605, 1997",
    "Center for Inclusive Design and Environmental Access, Design Resources DR-11: Text Legibility and Readability of Large Format Signs in Buildings and Sites (University at Buffalo, 2010)",
    "AIGA and the US Department of Transportation, Symbol Signs (34 symbols 1974, 16 more in 1979), designed by Roger Cook and Don Shanosky",
    "ISO 7001, Graphical symbols: Registered public information symbols (first published October 1980; current edition 2023, which is edition 4)",
    "ISO 22727:2007, Graphical symbols: Creation and design of public information symbols, Requirements",
    "ISO 9186-1, Graphical symbols: Test methods, Part 1: Method for testing comprehensibility (current edition 2014)",
    "ISO 3864-1 and ISO 7010, safety colours, design principles and registered safety signs (ISO 7010 first published October 2003; current edition 2019)",
    "HSE, Safety signs and signals: the Health and Safety (Safety Signs and Signals) Regulations 1996, Guidance on Regulations, L64, third edition (2015); the Regulations themselves, Schedule 1",
    "S. L. Jamson, F. N. Tate and A. H. Jamson, Evaluating the effects of bilingual traffic signs on driver performance and safety, Ergonomics 48(15), 2005",
    "Jeremy J. Foster, Keiichi Koyama and Austin Adams, Paper and on-line testing of graphical access symbols in three countries using the ISO 9186 comprehension test, Information Design Journal 18(2), 2010",
    "Beverly Serrell, Paying Attention: Visitors and Museum Exhibitions (American Association of Museums, 1998); Are They Watching? Visitors and Videos in Exhibitions, Curator 45(1), 2002; and Paying More Attention to Paying Attention (informalscience.org, March 2010)",
    "Benjamin Ives Gilman, Museum Fatigue, The Scientific Monthly 2(1), January 1916, pages 62 to 74",
    "Matthew Potteiger and Jamie Purinton, Landscape Narratives: Design Practices for Telling Stories (Wiley, March 1998)",
    "Barbara Stauffacher Solomon, interiors at The Sea Ranch (1966); C. Ray Smith, Supergraphics, Progressive Architecture, November 1967; Society for Experiential Graphic Design, founded 1973",
    "Project for Public Spaces (founded 1975), What is Placemaking? and The Placemaking Movement; William H. Whyte, Street Life Project (begun 1969) and The Social Life of Small Urban Spaces (1980); Jane Jacobs, The Death and Life of Great American Cities (1961)",
    "ASTM G154, ASTM G155 and the ISO 4892 series (accelerated weathering test practices)"
  ],
  entries: [
    {
      n: 877,
      title: "Identification signage",
      aka: ["ID signs", "Nameplate signage"],
      oneLine: "Signs that name a place once you reach it, confirming you got where you meant to go.",
      demo: {
        caption: "Same plate. Floating in the corridor it names neither door; set at each door it confirms which room you reached.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One plate out in the corridor</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 120\"><path class=\"s-mute\" d=\"M8 108 H252\"/><rect class=\"s\" x=\"16\" y=\"22\" width=\"48\" height=\"86\"/><rect class=\"s\" x=\"186\" y=\"22\" width=\"48\" height=\"86\"/><circle class=\"f-mute\" cx=\"57\" cy=\"68\" r=\"3\"/><circle class=\"f-mute\" cx=\"193\" cy=\"68\" r=\"3\"/><rect class=\"s-accent\" x=\"94\" y=\"38\" width=\"62\" height=\"17\"/><text class=\"t\" x=\"125\" y=\"51\" text-anchor=\"middle\">RADIOLOGY</text><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M94 46 H70 M156 46 H180\"/><text class=\"t\" x=\"125\" y=\"74\" text-anchor=\"middle\">WHICH DOOR?</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">A plate at each door</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 260 120\"><path class=\"s-mute\" d=\"M8 108 H252\"/><rect class=\"s\" x=\"16\" y=\"22\" width=\"48\" height=\"86\"/><rect class=\"s\" x=\"186\" y=\"22\" width=\"48\" height=\"86\"/><circle class=\"f-mute\" cx=\"57\" cy=\"68\" r=\"3\"/><circle class=\"f-mute\" cx=\"193\" cy=\"68\" r=\"3\"/><rect class=\"s-accent\" x=\"70\" y=\"38\" width=\"62\" height=\"17\"/><text class=\"t\" x=\"101\" y=\"51\" text-anchor=\"middle\">RADIOLOGY</text><rect class=\"s-accent\" x=\"150\" y=\"38\" width=\"34\" height=\"17\"/><text class=\"t\" x=\"167\" y=\"51\" text-anchor=\"middle\">MRI</text></svg></div></div></div>"
      },
      what: "David Gibson's wayfinding classification splits a sign system into four jobs: identification, direction, orientation and regulation. Identification signs do the naming. Building names, entrance markers, department titles, room numbers. They answer the question of what this place is rather than which way to turn. They also anchor the whole system, because every directional sign points at a name that some identification sign has to repeat word for word.",
      why: "A person arriving needs confirmation before they commit to walking through a door. Without it they stop in the corridor and reread the last arrow. Identification signs also carry most of a building's visible brand, which is why they get the biggest budget and the closest client scrutiny.",
      how: [
        "Put the name at the door rather than near it; a plate outside the door's sightline gets missed.",
        "Use the exact wording that appears on the directional signs leading to it.",
        "In the US, signs naming permanent rooms and spaces need raised characters and contracted braille as well as visual text.",
        "Add a number as well as a name where the client renames departments often."
      ],
      example: "Lift floor designations in US buildings. ADA 407.2.3.1 requires the floor number on both jambs of the hoistway entrance, in tactile characters at least 2 inches high plus braille, with a raised star marking the main entry level.",
      numbers: "ADA 2010, 703.2.5: raised characters 5/8 in (16 mm) minimum to 2 in (51 mm) maximum, measured on the uppercase I. ADA 407.2.3.1: lift floor designations 2 in (51 mm) minimum.",
      pitfall: "Identification is designed as a branding exercise, then the directional signs get written months later by a facilities team. The arrow says Outpatients and the door says Ambulatory Care.",
      source: "David Gibson, The Wayfinding Handbook (Princeton Architectural Press, 2009); 2010 ADA Standards for Accessible Design, 216.2 and 703.",
      verify: { status: "verified", note: "The four-type classification is credited to Gibson's The Wayfinding Handbook, published by Princeton Architectural Press in February 2009 (date given as February 2009 by SEGD's record of the book and as 4 February 2009 by Google Books; the four categories are cited to Gibson 2009 in a Carleton University wayfinding case study and in an International Journal of Design paper). Sections 216.2, 703.2, 703.2.5 and 407.2.3.1 read word for word from the US Access Board's published text of the 2010 ADA Standards; 703.2 is what requires raised characters to be duplicated in braille." },
      belongs: { verdict: "core", why: "Naming a place is the first job any sign system has to do, and every other sign in the system depends on it being right." },
      related: [878, 879, 880, 9880]
    },
    {
      n: 878,
      title: "Directional signage",
      aka: ["Wayfinding signs", "Fingerposts"],
      oneLine: "Arrows and destination lists placed at each decision point to carry someone along a route.",
      demo: {
        caption: "One route, three signs. Each decision point drops the destinations you can no longer reach, so the list shortens.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 460 176\"><path class=\"s-mute\" d=\"M20 150 H440\"/><circle class=\"f-accent\" cx=\"70\" cy=\"150\" r=\"4\"/><circle class=\"f-accent\" cx=\"230\" cy=\"150\" r=\"4\"/><circle class=\"f-accent\" cx=\"390\" cy=\"150\" r=\"4\"/><text class=\"t\" x=\"70\" y=\"168\" text-anchor=\"middle\">ENTRANCE</text><text class=\"t\" x=\"230\" y=\"168\" text-anchor=\"middle\">JUNCTION</text><text class=\"t\" x=\"390\" y=\"168\" text-anchor=\"middle\">LIFT LOBBY</text><rect class=\"s\" x=\"20\" y=\"12\" width=\"100\" height=\"104\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M70 116 V146\"/><text class=\"t\" x=\"30\" y=\"28\">WARD A</text><text class=\"t\" x=\"30\" y=\"39\">WARD B</text><text class=\"t\" x=\"30\" y=\"50\">X-RAY</text><text class=\"t\" x=\"30\" y=\"61\">PHARMACY</text><text class=\"t\" x=\"30\" y=\"72\">CAFE</text><text class=\"t\" x=\"30\" y=\"83\">CHAPEL</text><text class=\"t\" x=\"30\" y=\"94\">CLINIC</text><text class=\"t\" x=\"30\" y=\"105\">THEATRES</text><rect class=\"s\" x=\"180\" y=\"12\" width=\"100\" height=\"56\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M230 68 V146\"/><text class=\"t\" x=\"190\" y=\"28\">WARD A</text><text class=\"t\" x=\"190\" y=\"39\">WARD B</text><text class=\"t\" x=\"190\" y=\"50\">CAFE</text><text class=\"t\" x=\"190\" y=\"61\">CHAPEL</text><rect class=\"s\" x=\"340\" y=\"12\" width=\"100\" height=\"45\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M390 57 V146\"/><text class=\"t\" x=\"350\" y=\"28\">WARD A</text><text class=\"t\" x=\"350\" y=\"39\">WARD B</text><text class=\"t\" x=\"350\" y=\"50\">CAFE</text></svg></div>"
      },
      what: "Directional signs work as a chain. Each one covers a single decision point, meaning any place where a person can go more than one way, and carries only the destinations reachable from there. Arthur and Passini's 1992 book reframed wayfinding as spatial problem solving rather than sign reading. The consequence: each sign should confirm the choice just made and set up the next one.",
      why: "Continuity is what people actually feel. One missing sign at one junction sends someone back to the entrance. Planning the chain properly also cuts the sign count, because a destination can drop off the list once a wrong turn can no longer reach it.",
      how: [
        "Map every decision point on the plan first, write the wording for each, then design the sign.",
        "Keep the destination list short. HSE puts it bluntly in its safety signs guidance: you should avoid using too many signs which may cause confusion.",
        "Group destinations by direction and keep arrow placement consistent across the whole system rather than varying it sign by sign.",
        "Walk the route with someone who has never been in the building and note every place they hesitate."
      ],
      example: "A hospital entrance listing eight departments, a junction splitting them four and four, and a lift lobby listing only the three on that floor. Dropping names at each stage is what tells a person they are still on track.",
      numbers: "",
      pitfall: "Sign chains break at ownership boundaries. The car park operator, the landlord and the tenant each sign their own patch, and nobody signs the fifty metres in between.",
      source: "Paul Arthur and Romedi Passini, Wayfinding: People, Signs, and Architecture (1992); David Gibson, The Wayfinding Handbook (2009).",
      verify: { status: "verified", note: "Arthur and Passini, Wayfinding: People, Signs, and Architecture, McGraw-Hill, 1992, confirmed via the East Carolina University library catalogue, TRID and Semantic Scholar. Gibson's four sign types confirmed as above. The sentence about too many signs is quoted word for word from HSE's own page for guidance document L64, third edition, June 2015, ISBN 978 0 7176 6598 3. That Arthur and Passini frame wayfinding as spatial problem solving is the standard reading of the book; I have not read it." },
      belongs: { verdict: "core", why: "This is the load-bearing idea in wayfinding: a route is a chain of decisions, and the signage exists to serve the decision, not the wall." },
      related: [877, 879, 654, 9880]
    },
    {
      n: 879,
      title: "Orientation signage",
      aka: ["You-are-here maps", "Directories"],
      oneLine: "Maps and overviews that show where you are within the whole before you pick a direction.",
      demo: {
        caption: "Same plan, rotated. On the right the fountain you can see ahead is drawn ahead of the you-are-here dot.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Drawn north-up</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 160\"><path class=\"s-accent\" d=\"M100 18 V4 M95 9 L100 3 L105 9\"/><text class=\"t\" x=\"110\" y=\"14\">AHEAD</text><rect class=\"s\" x=\"6\" y=\"22\" width=\"188\" height=\"112\"/><text class=\"t\" x=\"100\" y=\"42\" text-anchor=\"middle\">YOU ARE HERE</text><circle class=\"f-accent\" cx=\"100\" cy=\"52\" r=\"5\"/><rect class=\"s-mute\" x=\"20\" y=\"84\" width=\"42\" height=\"26\"/><text class=\"t\" x=\"41\" y=\"101\" text-anchor=\"middle\">SHOP A</text><rect class=\"s-mute\" x=\"138\" y=\"84\" width=\"42\" height=\"26\"/><text class=\"t\" x=\"159\" y=\"101\" text-anchor=\"middle\">SHOP B</text><circle class=\"s\" cx=\"100\" cy=\"104\" r=\"9\"/><text class=\"t\" x=\"100\" y=\"126\" text-anchor=\"middle\">FOUNTAIN</text><text class=\"t\" x=\"100\" y=\"152\" text-anchor=\"middle\">SEEN AHEAD, DRAWN BEHIND</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Aligned with the view</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 160\"><path class=\"s-accent\" d=\"M100 18 V4 M95 9 L100 3 L105 9\"/><text class=\"t\" x=\"110\" y=\"14\">AHEAD</text><rect class=\"s\" x=\"6\" y=\"22\" width=\"188\" height=\"112\"/><circle class=\"s\" cx=\"100\" cy=\"52\" r=\"9\"/><text class=\"t\" x=\"100\" y=\"78\" text-anchor=\"middle\">FOUNTAIN</text><rect class=\"s-mute\" x=\"138\" y=\"40\" width=\"42\" height=\"26\"/><text class=\"t\" x=\"159\" y=\"57\" text-anchor=\"middle\">SHOP A</text><rect class=\"s-mute\" x=\"20\" y=\"40\" width=\"42\" height=\"26\"/><text class=\"t\" x=\"41\" y=\"57\" text-anchor=\"middle\">SHOP B</text><circle class=\"f-accent\" cx=\"100\" cy=\"104\" r=\"5\"/><text class=\"t\" x=\"100\" y=\"122\" text-anchor=\"middle\">YOU ARE HERE</text><text class=\"t\" x=\"100\" y=\"152\" text-anchor=\"middle\">SEEN AHEAD, DRAWN AHEAD</text></svg></div></div></div>"
      },
      what: "This covers you-are-here maps, floor directories and site plans. It gives the shape of the place rather than the next turn. Marvin Levine's 1982 paper in Environment and Behavior argued that even a precisely drawn map with a correct you-are-here marker can mislead if it is badly sited or badly oriented. He returned to it with Marchon and Hanley in 1984. Two working rules fall out of this: align the plan so that what is ahead of the reader is at the top, and make sure the map's structure matches what the reader can see.",
      why: "People build a rough mental model at the entrance and navigate off it afterwards. A good model means fewer directional signs later. A misaligned map forces the reader to rotate it mentally, and many get that wrong.",
      how: [
        "Fix orientation maps in place and draw separate artwork for every location instead of reusing one plan with the dot moved.",
        "Align the plan with the reader's facing direction, and mark facing as well as position.",
        "Put a landmark on the map that is also visible from where the reader stands.",
        "Simplify to the level of the decision being made. A survey drawing is not a wayfinding map."
      ],
      example: "You-are-here boards in stations and shopping centres, the case Levine studied. The common failure is one plan reused at ten locations with only the marker moved.",
      numbers: "",
      pitfall: "The map is drawn north-up because that is how the architect's plan came, so half the readers are looking at a picture of the world rotated 180 degrees.",
      source: "Marvin Levine, You-Are-Here Maps: Psychological Considerations, Environment and Behavior 14(2), 1982; Levine, Marchon and Hanley, The Placement and Misplacement of You-Are-Here Maps, Environment and Behavior 16(2), 1984.",
      verify: { status: "verified", note: "Levine 1982 confirmed as Environment and Behavior 14(2), pages 221 to 237, via Sage Journals and via the reference list of the 1984 paper itself; Levine, Marchon and Hanley 1984 confirmed as Environment and Behavior 16(2). I read abstracts and reference lists, not the full texts, so the alignment and structure-matching rules are given here as the standard practitioner reading of Levine rather than as quotations from him." },
      belongs: { verdict: "core", why: "Orientation is a distinct job from direction, and the alignment rule is one of the few wayfinding principles with published experimental work behind it." },
      related: [653, 877, 878]
    },
    {
      n: 880,
      title: "Regulatory signage",
      aka: ["Statutory signs", "Notices"],
      oneLine: "Signs that state a rule or legal notice, usually with wording and symbols someone else has fixed.",
      demo: {
        caption: "Same six notices. Consolidated onto one quiet plate, they stop competing with the directional sign above them.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">A sheet per rule</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><div class=\"db-card\"><span class=\"db-type db-type--mono\">WARDS A-D</span></div></div><div class=\"db-row db-row--tight\"><div class=\"db-card\"><span class=\"db-note\">NO SMOKING</span></div><div class=\"db-card\"><span class=\"db-note\">STAFF ONLY</span></div><div class=\"db-card\"><span class=\"db-note\">FIRE DOOR KEEP SHUT</span></div><div class=\"db-card\"><span class=\"db-note\">NO ENTRY</span></div><div class=\"db-card\"><span class=\"db-note\">MIND THE STEP</span></div><div class=\"db-card\"><span class=\"db-note\">CCTV IN USE</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One plate, smaller tier</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><div class=\"db-card\"><span class=\"db-type db-type--mono\">WARDS A-D</span></div></div><div class=\"db-row\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">NO SMOKING</span><span class=\"db-note\">STAFF ONLY</span><span class=\"db-note\">FIRE DOOR KEEP SHUT</span><span class=\"db-note\">NO ENTRY</span><span class=\"db-note\">MIND THE STEP</span><span class=\"db-note\">CCTV IN USE</span></div></div></div></div></div></div></div>"
      },
      what: "The fourth of Gibson's categories. No smoking, staff only, fire door keep shut, capacity notices, parking terms, statutory warnings. Most of the content is set by law or by an insurer rather than by the designer, and in many places the sign itself is prescribed. In UK workplaces, Schedule 1 of the Health and Safety (Safety Signs and Signals) Regulations 1996 fixes the shape and colour of each class of signboard and sets out the signs to be used, and Part I of that Schedule states that signs must be used only to convey the message specified in the Schedule.",
      why: "These signs carry legal weight, so getting them wrong exposes the client rather than just looking bad. They also make up a large share of the total sign count in most buildings, which means they dominate the visual clutter if nobody controls them.",
      how: [
        "Ask early which signs are mandated and by whom, and treat that as fixed content you design around.",
        "Give regulatory signs their own smaller tier so they do not compete with directional signs for attention.",
        "Consolidate onto shared plates where the law allows, rather than one laminated A4 sheet per rule.",
        "Do not restyle a prescribed pictogram. You control the plate, the size and the position, not the drawing."
      ],
      example: "Fire door keep shut discs and no smoking signs in UK workplaces, where the pictogram comes from the 1996 Regulations and, in current practice, from BS EN ISO 7010.",
      numbers: "",
      pitfall: "The designer hands over a clean system and the facilities team then prints thirty laminated notices, because nobody designed a home for the rules that arrive after handover.",
      source: "David Gibson, The Wayfinding Handbook (2009); Health and Safety (Safety Signs and Signals) Regulations 1996, with HSE guidance L64, third edition (2015).",
      verify: { status: "verified", note: "HSE's own page for L64 (third edition, June 2015, ISBN 978 0 7176 6598 3) confirms the Regulations cover prohibition, mandatory action, hazard warning and escape or first-aid direction, and that BS EN ISO 7010 is included in the guidance. Schedule 1 read on legislation.gov.uk: Part I sets the rule that signs convey only the message specified in the Schedule, and Part II fixes the shape and colour of prohibitory, warning, mandatory, emergency escape or first-aid and fire-fighting signboards and gives the signs to be used." },
      belongs: { verdict: "core", why: "A real category of sign with its own constraints, and the one most likely to wreck a finished scheme if it is left out of the plan." },
      related: [877, 878, 887]
    },
    {
      n: 881,
      title: "Viewing distance to letter-height ratio",
      aka: ["Legibility index", "Letter height rule"],
      oneLine: "How tall the letters must be for a sign to be read from where the reader actually stands.",
      demo: {
        caption: "Cap height rises with distance: same word, one inch per thirty feet. The last one adds height for a busy background.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--bottom db-row--loose\"><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:14px\">EXIT</span><span class=\"db-note\">30 FT / 1 IN</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:28px\">EXIT</span><span class=\"db-note\">60 FT / 2 IN</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:42px\">EXIT</span><span class=\"db-note\">90 FT / 3 IN</span></div><div class=\"db-col db-col--tight\"><span class=\"db-specimen\" style=\"font-size:63px\">EXIT</span><span class=\"db-note\">90 FT CLUTTERED / 4.5 IN</span></div></div></div>"
      },
      what: "The working measure is the legibility index: feet of viewing distance per inch of capital letter height. The United States Sign Council Foundation recommends 30 feet per inch of cap height. Bertucci and Crawford's 2015 standards multiply that index by 0.83 in moderately cluttered surroundings and by 0.67 where clutter is high. The Center for Inclusive Design and Environmental Access at Buffalo recommends a more generous 35. The studio folklore of one inch per ten feet is far more conservative than either, and I could not find a source for it.",
      why: "Letter height most often decides whether a sign works, and it is most often settled by how much room is left on the plate. Working backwards from a measured distance gives you a number to defend when a client asks for a bigger logo.",
      how: [
        "Measure the longest real viewing distance on site, including where an obstruction stops anyone getting closer.",
        "Divide that distance in feet by 30 for a minimum cap height in inches, then increase it if the background is busy.",
        "Add about 15 per cent for all-capital text, per Bertucci and Crawford.",
        "In the US, check the answer against ADA Table 703.5.5, a legal floor rather than a comfort target."
      ],
      example: "The ADA table itself. For a visual character mounted more than 120 inches above the floor and read from 21 feet or more, the minimum cap height is 3 inches, plus an eighth of an inch per additional foot.",
      numbers: "USSC Foundation: legibility index 30 ft per inch of cap height, multiplied by 0.83 in moderate visual complexity and 0.67 in high complexity. CIDEA, University at Buffalo (2010): 35 ft per inch. Bertucci and Crawford (2015): all-caps text needs about 15 per cent more height than mixed case. ADA 2010 Table 703.5.5, for characters mounted 40 in to 70 in above the floor: 5/8 in (16 mm) minimum up to a viewing distance of 72 in, then 5/8 in plus 1/8 in (3.2 mm) per foot of viewing distance beyond 72 in.",
      pitfall: "Height gets set from a drawing on screen rather than a distance paced out on site, so the sign ends up sized for the architect's viewpoint.",
      source: "Andrew Bertucci, Sign Legibility: Rules of Thumb (United States Sign Council Foundation, 2006); Bertucci and Crawford, Best Practice Standards for On-Premise Signs (2015); 2010 ADA Standards, Table 703.5.5.",
      verify: { status: "adjusted", note: "The master list title implies one settled ratio, and there is not one. I read Bullough's annotated review (Interdisciplinary Journal of Signage and Wayfinding 1(2), 2017) in full as a PDF. Its annotations give 30 ft/in for Bertucci 2006; 30 ft/in plus the 0.83 moderate-complexity and 0.67 high-complexity multipliers and the 15 per cent all-caps uplift for Bertucci and Crawford 2015; and 35 ft/in for CIDEA 2010. I have not read those three USSC and Buffalo publications themselves. Table 703.5.5 read word for word on the US Access Board site. I could trace no source at all for the common one-inch-per-ten-feet rule and have flagged it as folklore." },
      belongs: { verdict: "core", why: "The most consequential number in signage, and one of the few in this section with published research and a legal table behind it." },
      related: [882, 884, 877]
    },
    {
      n: 882,
      title: "Illumination and contrast in situ",
      aka: ["Light reflectance value", "Visual contrast"],
      oneLine: "Contrast and lighting have to be judged where the sign will hang, not on a screen.",
      demo: {
        caption: "Same green lettering. One LRV point of difference on the left, seventy-two on the right; Approved Document M wants over thirty.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Two brand colours, LRV 14 on 13</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-chip-text\" style=\"background:#c8102e;color:#007a33\">RADIOLOGY</div><span class=\"db-note\">LUMINANCE CONTRAST 1.1:1</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Same green, LRV 14 on 86</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-chip-text\" style=\"background:#f2efe6;color:#007a33\">RADIOLOGY</div><span class=\"db-note\">LUMINANCE CONTRAST 4.8:1</span></div></div></div></div>"
      },
      what: "Two things separate text from its background: luminance contrast, meaning how much lighter one is than the other, and colour contrast. The research John Bullough reviewed finds luminance matters far more, with colour contrast only counting once luminance contrast is already poor. UK Approved Document M defines visual contrast between two surfaces as a light reflectance value difference greater than 30 points, falling to 20 points where illuminance on the surfaces is above 200 lux. The ADA takes a looser line: non-glare finish, and either light characters on a dark background or dark on light.",
      why: "A sign that measures beautifully in a PDF can fail on the wall because of a downlight above it or a window behind it. Testing in place is what stops you reprinting a whole system after installation.",
      how: [
        "Specify materials by light reflectance value, not by hex code, and get the LRV figures from the finish supplier.",
        "Hold the difference above 30 LRV points as a default, and only approach 20 where the surface is genuinely well lit.",
        "Use matt or satin finishes. A gloss laminate under a spotlight throws the reading angle away.",
        "Mock the sign up full size, hang it in place, and look at it at the times of day people use it, including after dark."
      ],
      example: "Approved Document M clause 0.26, the figure a UK access consultant will measure your scheme against.",
      numbers: "Approved Document M Volume 2 (2015 edition incorporating 2020 and 2024 amendments), clause 0.26: LRV difference greater than 30 points; minimum 20 points where illuminance on surfaces is greater than 200 lux; 15 points where door opening furniture projects beyond the face of the door and creates its own shade. ADA 2010, 703.5.1: non-glare finish, light on dark or dark on light. Kuhn, Garvey and Pietrucha (1997) report that an on-premise sign reads best when the luminance ratio between the sign and its characters is about 12 to 1.",
      pitfall: "Two brand colours picked on a monitor turn out to have almost identical light reflectance values, so a logo that reads cleanly on screen becomes grey on grey on a wall.",
      source: "Approved Document M, Volume 2 (2015 with 2024 amendments), clause 0.26; 2010 ADA Standards, 703.5.1; John Bullough, Factors Affecting Sign Visibility, Conspicuity and Legibility, Interdisciplinary Journal of Signage and Wayfinding, volume 1 issue 2.",
      verify: { status: "verified", note: "Clause 0.26 pulled word for word from the Approved Document M Volume 2 PDF on gov.uk, and 703.5.1 from the US Access Board's published ADA text. Bullough's review attributes the 12 to 1 ratio to Kuhn, Garvey and Pietrucha, Transportation Research Record 1605, 1997; the finding that luminance contrast matters far more than colour contrast to Forbes et al. 1965 and Tinker 1966; and the finding that colour contrast only affects legibility significantly when luminance contrast is low to Eastman 1968. I read Bullough, not those originals." },
      belongs: { verdict: "core", why: "Contrast in the room is the difference between a sign that works and a sign that only worked in the studio, and there is a published UK figure to hit." },
      related: [881, 884, 9884]
    },
    {
      n: 883,
      title: "Material durability and weathering",
      aka: ["Sign material specification"],
      oneLine: "Picking sign materials that still look right after years of sun, rain and cleaning.",
      demo: {
        caption: "A sign is a stack. The warranty covers the film; the parts marked in colour, adhesive and fixings, usually fail first.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 460 190\"><rect class=\"f\" x=\"28\" y=\"30\" width=\"200\" height=\"9\"/><rect class=\"f-mute\" x=\"28\" y=\"39\" width=\"200\" height=\"15\"/><rect class=\"s\" x=\"28\" y=\"54\" width=\"200\" height=\"36\"/><rect class=\"s-accent\" x=\"28\" y=\"90\" width=\"200\" height=\"13\"/><rect class=\"s-mute\" x=\"28\" y=\"103\" width=\"200\" height=\"42\"/><path class=\"s-mute\" d=\"M40 145 L58 103 M76 145 L94 103 M112 145 L130 103 M148 145 L166 103 M184 145 L202 103\"/><path class=\"s-accent\" d=\"M68 25 V140 M188 25 V140\"/><rect class=\"f-accent\" x=\"63\" y=\"19\" width=\"10\" height=\"6\"/><rect class=\"f-accent\" x=\"183\" y=\"19\" width=\"10\" height=\"6\"/><path class=\"s-mute\" d=\"M230 34 H242 M230 47 H242 M230 72 H242 M230 96 H242 M230 124 H242\"/><text class=\"t\" x=\"248\" y=\"37\">PRINTED INK</text><text class=\"t\" x=\"248\" y=\"50\">PAINT OR VINYL</text><text class=\"t\" x=\"248\" y=\"75\">SUBSTRATE</text><text class=\"t\" x=\"248\" y=\"99\">ADHESIVE</text><text class=\"t\" x=\"248\" y=\"127\">WALL</text><path class=\"s\" d=\"M344 30 H350 V54 H344\"/><text class=\"t\" x=\"356\" y=\"45\">WARRANTED</text><rect class=\"f-accent\" x=\"28\" y=\"165\" width=\"10\" height=\"5\"/><text class=\"t\" x=\"44\" y=\"171\">FIXINGS AND ADHESIVE: OUTSIDE THE FILM WARRANTY</text></svg></div>"
      },
      what: "An exterior sign is a weather-exposed product, and each layer fails at a different rate: substrate, paint or vinyl, printed ink, adhesive and fixings. Manufacturers test to published practices such as ASTM G154 (fluorescent UV lamps), ASTM G155 (xenon arc) and the ISO 4892 series, which speed up sunlight exposure inside a chamber. Those tests rank materials against each other. They do not tell you how many years a particular sign will survive on a particular wall.",
      why: "Colour is the part clients notice. Reds and some magentas go first, so a two-year-old sign can drift off brand while the shapes stay perfect. Specifying properly at the start is cheaper than a replacement programme in year three.",
      how: [
        "Ask the supplier in writing which test practice a warranty is based on, and for how long.",
        "Prefer processes that put the colour into the material rather than onto it, such as vitreous enamel or anodising, for anything meant to last decades.",
        "Keep colour-critical elements out of direct unshaded sun where the layout gives you the choice.",
        "Design for repair: modular plates, replaceable inserts, and a written colour and finish schedule left with the client."
      ],
      example: "A vinyl quoted as passing ASTM G154. On its own that means very little, because G154 defines two different lamp types across eight numbered cycles, and a UVB-313 result is not comparable with a UVA-340 one. Ask which lamp and which cycle.",
      numbers: "ASTM G154 defines UVA-340 and UVB-313 fluorescent lamps used across eight numbered exposure cycles: UVA-340 is specified in cycles 1, 4, 6 and 7, UVB-313 in cycles 2, 3, 5 and 8. Q-Lab describes UVA-340 as the closest match to the shortwave ultraviolet in noon summer sunlight, and UVB-313 as carrying more high-energy UVB than anything reaching the earth's surface.",
      pitfall: "The warranty covers the vinyl alone, and the sign fails first at the adhesive or the fixings, which nobody tested and nobody warranted.",
      source: "ASTM G154, ASTM G155 and the ISO 4892 series. No authority publishes a lifespan for signs in service.",
      verify: { status: "verified", note: "Lamp types and the cycle numbers each lamp is specified in read from Q-Lab's own ASTM G154 standards page; the G154 / G155 / ISO 4892 relationship via Micom Laboratories and Smithers. I found no published figure for how long a sign lasts in the field and have deliberately not invented one. No manufacturer warranty periods are quoted here because I verified none. The claim that reds and magentas fade first is common trade knowledge and is not sourced to a published study." },
      belongs: { verdict: "core", why: "Specifying materials that survive the site is part of the environmental designer's job, and getting it wrong shows up as the client's problem two years later." },
      related: [884, 890, 882]
    },
    {
      n: 884,
      title: "Mounting height and sightlines",
      aka: ["Sign placement", "Installation height"],
      oneLine: "Where a sign sits in space: high enough to see over a crowd, low enough to read and reach.",
      demo: {
        caption: "One wall, three rules: tactile baselines 48 to 60 inches, four inches maximum protrusion in the shaded band, 80 inches head clearance.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 460 290\"><rect x=\"52\" y=\"60\" width=\"388\" height=\"132\" fill=\"var(--accent-soft)\"/><path class=\"s-mute\" d=\"M52 18 H440\"/><rect class=\"f-mute\" x=\"40\" y=\"18\" width=\"12\" height=\"242\"/><path class=\"s\" d=\"M40 260 H440\"/><path class=\"s-mute\" stroke-dasharray=\"4 4\" d=\"M52 60 H440 M52 192 H440\"/><path class=\"s-mute\" d=\"M30 60 H40 M30 110 H40 M30 140 H40 M30 192 H40\"/><text class=\"t\" x=\"2\" y=\"63\">80 IN</text><text class=\"t\" x=\"2\" y=\"113\">60 IN</text><text class=\"t\" x=\"2\" y=\"143\">48 IN</text><text class=\"t\" x=\"2\" y=\"195\">27 IN</text><rect class=\"f-accent\" x=\"52\" y=\"110\" width=\"8\" height=\"30\"/><path class=\"s-mute\" d=\"M60 125 H100\"/><text class=\"t\" x=\"104\" y=\"128\">TACTILE TEXT, BASELINES 48-60 IN</text><rect class=\"f\" x=\"52\" y=\"150\" width=\"10\" height=\"26\"/><path class=\"s-mute\" d=\"M62 163 H100\"/><text class=\"t\" x=\"104\" y=\"166\">PROJECTING SIGN</text><path class=\"s-mute\" d=\"M62 208 H52 V192\"/><text class=\"t\" x=\"68\" y=\"212\">27-80 IN: PROTRUSION LIMITED TO 4 IN</text><rect class=\"f\" x=\"310\" y=\"30\" width=\"100\" height=\"30\"/><path class=\"s-mute\" d=\"M330 18 V30 M390 18 V30\"/><path class=\"s-accent\" d=\"M360 60 V260 M354 60 H366 M354 260 H366\"/><text class=\"t\" x=\"352\" y=\"160\" text-anchor=\"end\">80 IN MINIMUM CLEARANCE</text><text class=\"t\" x=\"56\" y=\"276\">FLOOR</text></svg></div>"
      },
      what: "Three things govern height. Reading distance and viewing angle set the visual position. Accessibility law sets the tactile position: the ADA puts tactile characters between 48 and 60 inches above the floor, measured to the baselines of the lowest and highest characters. Safety rules set the limits on anything that sticks out, because a projecting sign is a hazard to somebody using a long cane.",
      why: "A sign at the wrong height is invisible in a busy corridor and unreadable from a wheelchair. Getting the projecting-object rules wrong is a legal failure and a real injury risk.",
      how: [
        "Use projecting or suspended signs where crowds block wall plates, and wall plates at the door for identification.",
        "In the US, mount tactile characters between 48 in and 60 in, measured to the character baselines.",
        "Keep anything with a leading edge between 27 in and 80 in above the floor from protruding more than 4 in into a circulation route.",
        "Maintain 80 in of head clearance under suspended signs, and where you cannot, add a guardrail whose leading edge sits no more than 27 in above the floor.",
        "Check sightlines on the real approach, standing where a standing person stands and sitting where a seated person sits."
      ],
      example: "A suspended corridor sign in a US hospital must clear 80 inches for head height, while the wall plate at the same door must sit with its tactile characters between 48 and 60 inches. Two rules, one wall.",
      numbers: "ADA 2010: tactile characters 48 in (1220 mm) minimum to 60 in (1525 mm) maximum above finished floor, measured to character baselines (703.4.1); visual characters at least 40 in (1015 mm) above the floor (703.5.6); objects with leading edges between 27 in (685 mm) and 80 in (2030 mm) may protrude 4 in (100 mm) maximum into a circulation path (307.2); vertical clearance 80 in (2030 mm) minimum (307.4).",
      pitfall: "Heights are fixed on an elevation drawing showing an empty corridor. The corridor is never empty, and at eye level the sign is behind a queue.",
      source: "2010 ADA Standards for Accessible Design, sections 307.2, 307.4, 703.4.1 and 703.5.6.",
      verify: { status: "verified", note: "All four sections read word for word from the US Access Board's published text of the 2010 ADA Standards, including the exceptions allowing handrails to protrude 4.5 in and door closers and door stops to sit at 78 in minimum." },
      belongs: { verdict: "core", why: "Placement decides whether a correctly designed sign can be seen or touched at all, and the numbers are legally binding in the US." },
      related: [881, 882, 9884]
    },
    {
      n: 885,
      title: "Universal symbols",
      aka: ["Pictograms", "Public information symbols"],
      oneLine: "Standardised pictograms for toilets, exits, lifts and the rest, meant to work without words.",
      demo: {
        caption: "The same symbol, solid as registered and redrawn as a hairline. At the size you actually see it, only one survives.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Redrawn to suit the brand</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 116\"><circle class=\"s\" cx=\"40\" cy=\"16\" r=\"6\"/><path class=\"s\" d=\"M30 30 H50 L47 58 H33 Z\"/><rect class=\"s\" x=\"33\" y=\"58\" width=\"5\" height=\"32\"/><rect class=\"s\" x=\"43\" y=\"58\" width=\"5\" height=\"32\"/><g transform=\"translate(120 57) scale(0.38)\"><circle class=\"s\" cx=\"40\" cy=\"16\" r=\"6\"/><path class=\"s\" d=\"M30 30 H50 L47 58 H33 Z\"/><rect class=\"s\" x=\"33\" y=\"58\" width=\"5\" height=\"32\"/><rect class=\"s\" x=\"43\" y=\"58\" width=\"5\" height=\"32\"/></g><text class=\"t\" x=\"40\" y=\"108\" text-anchor=\"middle\">CLOSE UP</text><text class=\"t\" x=\"135\" y=\"108\" text-anchor=\"middle\">AT DISTANCE</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Registered symbol</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 116\"><circle class=\"f\" cx=\"40\" cy=\"16\" r=\"9\"/><path class=\"f\" d=\"M26 30 H54 L49 58 H31 Z\"/><rect class=\"f\" x=\"31\" y=\"58\" width=\"7\" height=\"32\"/><rect class=\"f\" x=\"42\" y=\"58\" width=\"7\" height=\"32\"/><g transform=\"translate(120 57) scale(0.38)\"><circle class=\"f\" cx=\"40\" cy=\"16\" r=\"9\"/><path class=\"f\" d=\"M26 30 H54 L49 58 H31 Z\"/><rect class=\"f\" x=\"31\" y=\"58\" width=\"7\" height=\"32\"/><rect class=\"f\" x=\"42\" y=\"58\" width=\"7\" height=\"32\"/></g><text class=\"t\" x=\"40\" y=\"108\" text-anchor=\"middle\">CLOSE UP</text><text class=\"t\" x=\"135\" y=\"108\" text-anchor=\"middle\">AT DISTANCE</text></svg></div></div></div>"
      },
      what: "Two families dominate. AIGA produced 34 symbols for the US Department of Transportation in 1974, designed by Roger Cook and Don Shanosky, with 16 more in 1979 to make 50. ISO 7001, first published in October 1980 and now in its fourth edition of 2023, is the international register of public information symbols; the rules for creating one sit in ISO 22727 and the comprehension test in ISO 9186-1. Universal overstates the case. Symbols earn a place by being comprehension-tested across countries, and plenty of candidates fail that test.",
      why: "A tested symbol beats a translated word in a space with many languages, and survives distances where text has given up. Using a registered one also means somebody else paid for the cross-cultural testing you cannot afford.",
      how: [
        "Start from the ISO 7001 register or the AIGA/DOT set rather than drawing your own.",
        "Adjust a registered symbol to your stroke weight only where the standard allows, and never change what it depicts.",
        "Pair symbols with text where space allows. The ADA requires a text descriptor with any pictogram designating a permanent room.",
        "If you genuinely need a new symbol, test it with ISO 9186-1 rather than asking colleagues whether it reads."
      ],
      example: "Foster, Koyama and Adams tested priority-seating access symbols in Japan, Australia and the UK using the ISO 9186-1:2007 comprehension test. Results agreed closely across the three countries, and on-screen testing matched paper, which is useful if you want to run this cheaply.",
      numbers: "ADA 2010, 703.6.1: pictogram field height 6 in (150 mm) minimum, with no characters or braille inside the field. AIGA/DOT: 34 symbols in 1974, 50 after the 1979 additions.",
      pitfall: "A studio redraws the wheelchair or toilet symbol to fit its brand and throws away the recognition that was the only reason to use a standard symbol.",
      source: "AIGA and the US Department of Transportation, Symbol Signs (1974, extended 1979); ISO 7001 (first published October 1980, current edition 2023); ISO 22727:2007; ISO 9186-1; 2010 ADA Standards, 703.6.",
      verify: { status: "verified", note: "The 1974 and 1979 counts and Cook and Shanosky's authorship read from AIGA's own Symbol Signs page, which states that a first set of 34 symbols was published in 1974 and 16 more added in 1979. ISO 7001's first publication in October 1980 and its 2023 fourth edition, the current title Registered public information symbols, the still-current status of ISO 22727:2007 and the 2014 edition of ISO 9186-1 all read from ISO's own catalogue listing for ICS 01.080.10. The pictogram field rule read directly from the ADA text. The Foster, Koyama and Adams finding is quoted from the published abstract in Information Design Journal 18(2), 2010, pages 107 to 117. I could not confirm a published pass mark for symbol comprehension and have not quoted one." },
      belongs: { verdict: "core", why: "Choosing between a registered symbol and a bespoke one is a real design decision with a testable answer, and standard sets exist precisely so designers stop guessing." },
      related: [886, 887, 880]
    },
    {
      n: 886,
      title: "Multilingual signage",
      aka: ["Bilingual signage"],
      oneLine: "Carrying the same message in two or more languages without doubling how long it takes to read.",
      demo: {
        caption: "Four lines either way. Grouping the two languages lets each reader take in two lines instead of scanning all four.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Languages interleaved</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">CANOLFAN Y DREF</span><span class=\"db-note\">TOWN CENTRE</span><span class=\"db-note\">YR ORSAF</span><span class=\"db-note\">STATION</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Languages grouped</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">CANOLFAN Y DREF</span><span class=\"db-note\">YR ORSAF</span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">TOWN CENTRE</span><span class=\"db-note\">STATION</span></div></div></div></div></div></div>"
      },
      what: "Bilingual signing is required by law in some places, Wales and Ireland among them, and it is a practical need anywhere with a mixed population. The design problem is reading time. Jamson, Tate and Jamson tested bilingual variable message signs in a driving simulator and published in Ergonomics in 2005. Drivers handled one-line and two-line monolingual signs and two-line bilingual signs without measurable disruption. On four-line signs they significantly reduced speed and increased their gap to the car in front, and that happened with monolingual four-line signs as well as bilingual ones. The authors suggest drivers were reading the half they did not need.",
      why: "Adding a language adds lines, and lines cost reading time for someone in motion. Knowing roughly where the cliff edge is lets you argue for fewer destinations per sign instead of smaller type.",
      how: [
        "Cap the total number of lines rather than the number of languages. Four lines is where the simulator study found the cost.",
        "Separate the languages clearly with colour, weight or a rule, so a reader can skip the half that is not theirs.",
        "Keep the same language order everywhere in the system.",
        "Translate the whole system at once, regulatory signs included, so the second language does not quietly become second class."
      ],
      example: "Welsh and English signs, which the 2005 study used as its real-world model. The authors say they took the local UK example of Welsh bilingual signs, and focused on variable message signs because those were about to be introduced on Welsh roads.",
      numbers: "Jamson, Tate and Jamson (2005): one-line and two-line monolingual signs and two-line bilingual signs read with no measurable disruption to driving; four-line signs, monolingual or bilingual, produced a significant speed reduction and increased headway.",
      pitfall: "The second language gets set smaller or in italic to save space, which slows it down to read and tells its readers exactly where they rank.",
      source: "S. L. Jamson, F. N. Tate and A. H. Jamson, Evaluating the effects of bilingual traffic signs on driver performance and safety, Ergonomics 48(15), 2005, pages 1734 to 1748.",
      verify: { status: "verified", note: "Authors, journal, volume, issue and page range confirmed via PubMed (PMID 16373314, doi 10.1080/00140130500142191) and the article's own citation elsewhere; the findings above follow the abstract's wording. I also read the White Rose eprint of the paper, which is where the Welsh framing and the variable message sign rationale come from. Two cautions. This is a driving-simulator study of variable message signs, so applying it to static pedestrian signage is my extension, not the authors' claim. On the legal point I have named only Wales and Ireland, and only in general terms, because I did not read the Welsh Language Standards or the 2008 regulations under Ireland's Official Languages Act 2003 this session." },
      belongs: { verdict: "core", why: "Language count changes line count, which changes legibility and sign size, so it is a layout constraint rather than a translation task." },
      related: [885, 878, 881]
    },
    {
      n: 887,
      title: "Evacuation and safety signage",
      aka: ["Escape signage", "ISO 7010 signs"],
      oneLine: "Signs that get people out of a building, governed by colour and shape rules you do not get to change.",
      demo: {
        caption: "Shape and colour carry the meaning before any pictogram is read; changing either breaks the sign.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 520 116\"><circle cx=\"52\" cy=\"44\" r=\"24\" fill=\"#ffffff\" stroke=\"#c8102e\" stroke-width=\"8\"/><path d=\"M35 61 L69 27\" stroke=\"#c8102e\" stroke-width=\"8\" fill=\"none\"/><circle cx=\"156\" cy=\"44\" r=\"28\" fill=\"#005eb8\"/><path d=\"M260 16 L290 68 L230 68 Z\" fill=\"#ffd100\" stroke=\"#1b1b1b\" stroke-width=\"6\" stroke-linejoin=\"round\"/><rect x=\"338\" y=\"18\" width=\"52\" height=\"52\" fill=\"#007a33\"/><rect x=\"442\" y=\"18\" width=\"52\" height=\"52\" fill=\"#c8102e\"/><text class=\"t\" x=\"52\" y=\"92\" text-anchor=\"middle\">PROHIBITION</text><text class=\"t\" x=\"156\" y=\"92\" text-anchor=\"middle\">MANDATORY</text><text class=\"t\" x=\"260\" y=\"92\" text-anchor=\"middle\">WARNING</text><text class=\"t\" x=\"364\" y=\"92\" text-anchor=\"middle\">SAFE CONDITION</text><text class=\"t\" x=\"468\" y=\"92\" text-anchor=\"middle\">FIRE EQUIPMENT</text><text class=\"t\" x=\"52\" y=\"106\" text-anchor=\"middle\">RED CIRCLE, BAR</text><text class=\"t\" x=\"156\" y=\"106\" text-anchor=\"middle\">BLUE CIRCLE</text><text class=\"t\" x=\"260\" y=\"106\" text-anchor=\"middle\">YELLOW TRIANGLE</text><text class=\"t\" x=\"364\" y=\"106\" text-anchor=\"middle\">GREEN SQUARE</text><text class=\"t\" x=\"468\" y=\"106\" text-anchor=\"middle\">RED SQUARE</text></svg></div>"
      },
      what: "ISO 3864 sets the shape and colour grammar, and ISO 7010 registers the individual pictograms. Red circle with a diagonal bar means prohibition. Blue circle means a required action. Yellow triangle warns of a hazard. Green square means a safe condition such as an exit, first aid or assembly point. Red square marks firefighting equipment. ISO 7010 was first published in October 2003 and the current edition is 2019. In UK workplaces the duty comes from the Health and Safety (Safety Signs and Signals) Regulations 1996.",
      why: "These get read in smoke, in a crowd, by frightened people who have never been in the building. Consistency between buildings and across borders is the entire point, so personal expression here is a hazard.",
      how: [
        "Use the registered ISO 7010 pictogram rather than a redrawn version of it.",
        "Keep the safety colour dominant. A green exit sign reduced to a green hairline on white no longer reads as a safe-condition sign.",
        "Plan escape signage as a continuous chain from every occupied point, the same way you plan directional signage.",
        "Coordinate with the fire engineer early. Sign positions fall out of the escape strategy, not out of the graphics package."
      ],
      example: "The green running man, designed by Yukio Ota and originating in a 1979 competition run by Japan's Fire and Disaster Management Agency, before becoming the ISO escape-route symbol.",
      numbers: "ISO 7010 first published October 2003, current edition 2019. ISO 3864 colour meanings: red for prohibition and fire equipment, blue for mandatory action, yellow for warning, green for safe condition.",
      pitfall: "A client asks for the exit signs to be toned down to suit the interior. Changing the green, the shape or the pictogram breaks compliance, and the fire officer will find it on the first inspection.",
      source: "ISO 3864-1 and ISO 7010; Health and Safety (Safety Signs and Signals) Regulations 1996, with HSE guidance L64, third edition (2015).",
      verify: { status: "verified", note: "ISO's own catalogue listing for ICS 01.080.10 confirms ISO 7010:2003 as the first edition, ISO 7010:2019 as the current third edition, and ISO 3864-1:2011 as the current Part 1. The colour and shape mapping is taken from Wikipedia's ISO 7010 entry, which cites ISO 3864-4:2011; I have not read ISO 3864-4 itself. The UK duty and L64 third edition (2015) confirmed on hse.gov.uk. Yukio Ota's authorship and the 1979 Japanese Fire and Disaster Management Agency competition confirmed via the People's Graphic Design Archive, which also says the design was submitted to ISO in 1980 and adopted in 1984. I have given no adoption year in the entry because other sources say 1985 and 1987." },
      belongs: { verdict: "core", why: "Every designer who touches a building's signage will hit these standards, and they are the clearest case in design of a place where you follow rather than invent." },
      related: [885, 880, 882]
    },
    {
      n: 888,
      title: "Spatial narrative",
      aka: ["Narrative environments"],
      oneLine: "Treating the route through a space as the order in which the story gets told.",
      demo: {
        caption: "Same four sections. The right-hand plan forces 1939 before 1945; the left leaves the order to the visitor.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Open plan</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 150\"><rect class=\"s-mute\" x=\"6\" y=\"6\" width=\"188\" height=\"116\"/><rect class=\"s\" x=\"16\" y=\"16\" width=\"76\" height=\"44\"/><text class=\"t\" x=\"54\" y=\"42\" text-anchor=\"middle\">1939</text><rect class=\"s\" x=\"108\" y=\"16\" width=\"76\" height=\"44\"/><text class=\"t\" x=\"146\" y=\"42\" text-anchor=\"middle\">1941</text><rect class=\"s\" x=\"16\" y=\"70\" width=\"76\" height=\"44\"/><text class=\"t\" x=\"54\" y=\"96\" text-anchor=\"middle\">1943</text><rect class=\"s\" x=\"108\" y=\"70\" width=\"76\" height=\"44\"/><text class=\"t\" x=\"146\" y=\"96\" text-anchor=\"middle\">1945</text><path class=\"s-accent\" stroke-dasharray=\"3 3\" d=\"M100 126 V20\"/><path class=\"s-accent\" d=\"M100 100 H92 M100 100 H108 M100 38 H92 M100 38 H108\"/><circle class=\"f-accent\" cx=\"100\" cy=\"130\" r=\"4\"/><text class=\"t\" x=\"8\" y=\"146\">ENTRY, ANY ORDER</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Single route</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 150\"><rect class=\"s\" x=\"8\" y=\"20\" width=\"42\" height=\"102\"/><text class=\"t\" x=\"29\" y=\"44\" text-anchor=\"middle\">1939</text><rect class=\"s\" x=\"54\" y=\"20\" width=\"42\" height=\"102\"/><text class=\"t\" x=\"75\" y=\"44\" text-anchor=\"middle\">1941</text><rect class=\"s\" x=\"100\" y=\"20\" width=\"42\" height=\"102\"/><text class=\"t\" x=\"121\" y=\"44\" text-anchor=\"middle\">1943</text><rect class=\"s\" x=\"146\" y=\"20\" width=\"42\" height=\"102\"/><text class=\"t\" x=\"167\" y=\"44\" text-anchor=\"middle\">1945</text><path class=\"s-accent\" stroke-dasharray=\"3 3\" d=\"M2 71 H186\"/><path class=\"f-accent\" d=\"M186 66 L196 71 L186 76 Z\"/><circle class=\"f-accent\" cx=\"4\" cy=\"71\" r=\"4\"/><text class=\"t\" x=\"8\" y=\"146\">ENTRY, ONE WAY THROUGH</text></svg></div></div></div>"
      },
      what: "In an exhibition or a themed environment, the visitor's path is the sentence order. Whatever they meet first frames everything after it, and the designer controls that sequence through the plan rather than through page numbers. Potteiger and Purinton use the term in Landscape Narratives (1998) for the way a configuration of spaces maps out a set of stories, and it is everyday studio vocabulary in exhibition practice. I could not find a single originating author or a definition anyone agrees on, so treat the label as a useful shorthand rather than a doctrine.",
      why: "A visitor who grasps the argument early gives more attention to the objects that follow. Sequence is also the only editorial control you have in a room where people are free to wander.",
      how: [
        "Write the story as a linear script first, then decide which parts must be seen in order and which can be met in any order.",
        "Use the architecture to enforce the sequential parts: one door, a narrowed threshold, a change of light.",
        "Give each section a physical identity a visitor can describe afterwards, rather than relying on a heading.",
        "Plan the exit as part of the story, not as a route out of the building."
      ],
      example: "A tightly plotted single-route history exhibition where a visitor cannot reach 1945 before 1939, set against an open science-centre floor where every element has to stand on its own because nobody controls the order.",
      numbers: "",
      pitfall: "The narrative exists in the curator's document but never gets built into the plan, so visitors take the sections in whatever order the doors allow and the argument falls apart.",
      source: "Practitioner vocabulary, origin unclear. Matthew Potteiger and Jamie Purinton, Landscape Narratives: Design Practices for Telling Stories (Wiley, 1998), use the term in a design context.",
      verify: { status: "unverified", note: "I searched for a named originator or a standard definition of spatial narrative in exhibition design and found neither. The term appears in practice descriptions from firms such as Ralph Appelbaum Associates and in Potteiger and Purinton's book, confirmed as Landscape Narratives: Design Practices for Telling Stories, John Wiley and Sons, March 1998, ISBN 0471124869. I have not read that book, and I have not attributed the idea to anyone because I could not establish who is owed it. Everything in the how list is ordinary studio practice stated as such, not a finding from research." },
      belongs: { verdict: "core", why: "Sequence is a genuine design decision in any walk-through space and has no equivalent in flat media, so it belongs here even though the label is loose and the sourcing is thin." },
      related: [889, 890]
    },
    {
      n: 889,
      title: "Exhibition sequencing and dwell time",
      aka: ["Tracking and timing", "Sweep rate index"],
      oneLine: "How long visitors really stay, how much they really stop at, and how sequence changes both.",
      demo: {
        caption: "Content planned against time actually spent. The average tracked visit is about twenty minutes, whatever the exhibition was built to hold.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">CONTENT PLANNED FOR: 90 MIN</span><div class=\"db-bar db-bar--tall\"></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">AVERAGE TRACKED VISIT: 20 MIN</span><div class=\"db-bar db-bar--tall db-bar--accent\" style=\"width:22%\"></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">HALL OF MAMMALS, 25,000 SQ FT: 13 MIN</span><div class=\"db-bar db-bar--tall db-bar--accent\" style=\"width:14%\"></div></div></div></div>"
      },
      what: "Beverly Serrell's meta-analysis of 110 tracked exhibitions, published as Paying Attention in 1998, found visits are short, averaging about 20 minutes, and that smaller exhibitions get explored more fully. She introduced two measures. Sweep rate index is floor area divided by the average total time a tracked sample spends there; lower means slower, more engaged use. Percentage of diligent visitors is the share who stopped at more than half the exhibit elements.",
      why: "A team planning 90 minutes of content for a 20-minute visit is building something most people will never see. Serrell's data point one way on sequencing: exhibitions with fewer elements get used more thoroughly, and smaller shows hold people longer per square foot.",
      how: [
        "Set a time budget before you set a content list, then cut elements until the two agree.",
        "Treat more than about 50 elements in a temporary show as a warning sign; Serrell says that can overwhelm visitors trying to see everything.",
        "Do not rely on a video for a main message. Serrell's 2002 Curator paper Are They Watching? concluded that 30 per cent of visitors typically stop to look at a video and fewer stay for the whole thing.",
        "Track and time your own exhibition after it opens and compare it with the published averages."
      ],
      example: "The Behring Family Hall of Mammals at the Smithsonian's National Museum of Natural History, the least used show in Serrell's 2009 sample: 25,000 square feet, an average visit of 13 minutes, a sweep rate of 1,923. It was such an outlier that Serrell left it off the scattergram and out of the averages.",
      numbers: "Serrell (1998, 110 exhibitions): average visit about 20 minutes. Later sample of 50 exhibitions: average sweep rate index 300 sq ft per minute, average diligent visitors 26 per cent. Exceptionally thoroughly used means a sweep rate below 300 and more than 51 per cent diligent visitors, a benchmark derived from the 1991 Darkened Waters study at the Pratt Museum. Seven of the 50 met it.",
      pitfall: "Museum fatigue, first described by Benjamin Ives Gilman in 1916, gets treated as a law. It is a tendency: Josh Gutwill's 2000 study of Revealing Bodies at the Exploratorium found visitors spent roughly the same time in each section, with no strong fatigue effect.",
      source: "Beverly Serrell, Paying Attention: Visitors and Museum Exhibitions (American Association of Museums, 1998), and her follow-up Paying More Attention to Paying Attention (informalscience.org, March 2010).",
      verify: { status: "verified", note: "Read Serrell's 2010 follow-up in full on informalscience.org. It restates the 1998 method, defines both metrics, and gives the 20-minute average, the 300 sweep rate and 26 per cent diligent-visitor averages, the 51 per cent and 300 benchmarks from the 1991 Darkened Waters study at the Pratt Museum, the seven qualifying exhibitions, the Hall of Mammals figures and its exclusion from the averages, the more-than-50-elements warning, and the Gutwill quotation on fatigue. The video finding is her own citation of Serrell 2002, Are They Watching? Visitors and Videos in Exhibitions, Curator 45(1), pages 50 to 64, which I have not read. Gilman's article confirmed separately as Museum Fatigue, The Scientific Monthly 2(1), 1916, pages 62 to 74." },
      belongs: { verdict: "core", why: "One of the few areas of design with a published baseline drawn from observing real users at scale, and it changes how much content you are allowed to make." },
      related: [888, 890]
    },
    {
      n: 890,
      title: "Environmental graphics at scale",
      aka: ["Supergraphics"],
      oneLine: "Graphics sized to the building rather than the page, where the surface itself becomes the artwork.",
      demo: {
        caption: "Same wall. On the right the bands line up with the door head and skirting, and leave the alarm panel a gap.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Drawn as a flat elevation</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><path d=\"M-10 128 L92 -8\" stroke=\"var(--accent)\" stroke-width=\"13\" fill=\"none\"/><path d=\"M46 128 L148 -8\" stroke=\"var(--accent)\" stroke-width=\"13\" fill=\"none\"/><path d=\"M102 128 L204 -8\" stroke=\"var(--accent)\" stroke-width=\"13\" fill=\"none\"/><rect x=\"18\" y=\"44\" width=\"44\" height=\"76\" fill=\"var(--paper-raised)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><rect x=\"120\" y=\"26\" width=\"28\" height=\"18\" fill=\"var(--paper-raised)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><rect x=\"80\" y=\"62\" width=\"10\" height=\"14\" fill=\"var(--paper-raised)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><path class=\"s-mute\" d=\"M0 112 H18 M62 112 H200\"/><path class=\"s\" d=\"M0 120 H200\"/><rect x=\"100\" y=\"46\" width=\"68\" height=\"13\" fill=\"var(--paper-raised)\"/><text class=\"t\" x=\"134\" y=\"56\" text-anchor=\"middle\">ALARM PANEL</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Set out on the survey</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><rect class=\"f-accent\" x=\"0\" y=\"26\" width=\"112\" height=\"18\"/><rect class=\"f-accent\" x=\"156\" y=\"26\" width=\"44\" height=\"18\"/><rect class=\"f-accent\" x=\"62\" y=\"98\" width=\"138\" height=\"14\"/><rect x=\"18\" y=\"44\" width=\"44\" height=\"76\" fill=\"var(--paper-raised)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><rect x=\"120\" y=\"26\" width=\"28\" height=\"18\" fill=\"var(--paper-raised)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><rect x=\"80\" y=\"62\" width=\"10\" height=\"14\" fill=\"var(--paper-raised)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><path class=\"s-mute\" d=\"M0 112 H18 M62 112 H200\"/><path class=\"s\" d=\"M0 120 H200\"/><rect x=\"100\" y=\"46\" width=\"68\" height=\"13\" fill=\"var(--paper-raised)\"/><text class=\"t\" x=\"134\" y=\"56\" text-anchor=\"middle\">ALARM PANEL</text></svg></div></div></div>"
      },
      what: "Barbara Stauffacher Solomon painted the interiors at The Sea Ranch in 1966 with stripes and letterforms scaled to the walls, and the approach became known as supergraphics. C. Ray Smith named and explained it in Progressive Architecture in November 1967, the earliest use of the word I could trace. A discipline grew around it: the professional body, now the Society for Experiential Graphic Design, was founded in 1973. What separates this from an enlarged poster is that the geometry answers to the architecture. Shapes wrap corners, stop at structural lines, and are read from moving viewpoints rather than head on.",
      why: "At this size, graphics do a job architecture is bad at: making a large plain volume legible and memorable for very little money. It also gives a building a colour identity that people navigate by without ever consciously reading a sign.",
      how: [
        "Set the artwork out on the building's real geometry from a measured survey, not from a marketing render.",
        "Design for oblique views. Almost nobody sees a large wall square on.",
        "Decide what happens at corners, door frames, skirtings and exposed services before you commit, because that is where the drawing breaks.",
        "Check the paint or vinyl against the substrate and against the cleaning regime the building actually uses."
      ],
      example: "Solomon's 1966 interiors at The Sea Ranch in Sonoma County, and her later wall-and-ceiling piece Strips of Stripes at SFMOMA, which applies the same approach of running stripes and letters across whole surfaces in response to the architecture.",
      numbers: "",
      pitfall: "The artwork is designed as a flat elevation, then a fire alarm panel, a door closer and three light switches land in the middle of it.",
      source: "Barbara Stauffacher Solomon, The Sea Ranch interiors (1966); C. Ray Smith, Supergraphics, Progressive Architecture, November 1967; Society for Experiential Graphic Design, founded 1973.",
      verify: { status: "verified", note: "SFMOMA's own exhibition page states that in 1966 Solomon created supergraphics, large-scale forms that stretch across walls and ceilings in response to a building's architecture, and that Strips of Stripes is the newest of them. The C. Ray Smith article is cited as Progressive Architecture, November 1967, page 133, in an academic history of interiors published by Routledge and open on OAPEN; a 1971 AIA Massachusetts bulletin separately says Smith first named and explained supergraphics. I have not read the 1967 article itself, so it is given as the earliest use I could trace rather than as a proven coinage. SEGD's 1973 founding confirmed on segd.org, which marks fifty years, and via the International Council of Design. The society's rename from Environmental to Experiential is given as 2013 by some sources and 2014 by others, so I have left the year out." },
      belongs: { verdict: "core", why: "Scaling graphics to architecture brings its own constraints on geometry, viewing angle and material, none of which transfer from print or screen work." },
      related: [883, 891, 888]
    },
    {
      n: 891,
      title: "Placemaking",
      aka: [],
      oneLine: "Shaping a public space around how people actually use it, judged by whether they stay.",
      demo: {
        caption: "Same square, same budget. The test placemaking sets is not how it renders but how many people are still there.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">A mural, nowhere to sit</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 150\"><rect class=\"s-mute\" x=\"8\" y=\"8\" width=\"184\" height=\"118\"/><rect class=\"f-mute\" x=\"8\" y=\"8\" width=\"184\" height=\"7\"/><text class=\"t\" x=\"14\" y=\"28\">MURAL WALL</text><circle class=\"f-mute\" cx=\"28\" cy=\"112\" r=\"4\"/><circle class=\"f-mute\" cx=\"53\" cy=\"101\" r=\"4\"/><circle class=\"f-mute\" cx=\"77\" cy=\"89\" r=\"4\"/><circle class=\"f-mute\" cx=\"102\" cy=\"78\" r=\"4\"/><circle class=\"f-mute\" cx=\"127\" cy=\"66\" r=\"4\"/><circle class=\"f-mute\" cx=\"151\" cy=\"55\" r=\"4\"/><circle class=\"f-mute\" cx=\"176\" cy=\"44\" r=\"4\"/><circle class=\"f-accent\" cx=\"140\" cy=\"30\" r=\"4\"/><circle class=\"f-accent\" cx=\"12\" cy=\"137\" r=\"4\"/><text class=\"t\" x=\"20\" y=\"140\">STOPPED</text><circle class=\"f-mute\" cx=\"86\" cy=\"137\" r=\"4\"/><text class=\"t\" x=\"94\" y=\"140\">PASSING</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">The same square, with seats</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 150\"><rect class=\"s-mute\" x=\"8\" y=\"8\" width=\"184\" height=\"118\"/><rect class=\"f-mute\" x=\"8\" y=\"8\" width=\"184\" height=\"7\"/><text class=\"t\" x=\"14\" y=\"28\">MURAL WALL</text><rect class=\"f\" x=\"30\" y=\"62\" width=\"46\" height=\"5\"/><text class=\"t\" x=\"30\" y=\"78\">BENCH</text><rect class=\"f\" x=\"116\" y=\"46\" width=\"46\" height=\"5\"/><text class=\"t\" x=\"116\" y=\"62\">BENCH</text><rect class=\"f\" x=\"8\" y=\"112\" width=\"184\" height=\"5\"/><text class=\"t\" x=\"14\" y=\"110\">LEDGE</text><circle class=\"f-mute\" cx=\"28\" cy=\"96\" r=\"4\"/><circle class=\"f-mute\" cx=\"62\" cy=\"88\" r=\"4\"/><circle class=\"f-mute\" cx=\"98\" cy=\"80\" r=\"4\"/><circle class=\"f-mute\" cx=\"140\" cy=\"72\" r=\"4\"/><circle class=\"f-mute\" cx=\"176\" cy=\"64\" r=\"4\"/><circle class=\"f-accent\" cx=\"38\" cy=\"55\" r=\"4\"/><circle class=\"f-accent\" cx=\"52\" cy=\"55\" r=\"4\"/><circle class=\"f-accent\" cx=\"66\" cy=\"55\" r=\"4\"/><circle class=\"f-accent\" cx=\"124\" cy=\"39\" r=\"4\"/><circle class=\"f-accent\" cx=\"138\" cy=\"39\" r=\"4\"/><circle class=\"f-accent\" cx=\"152\" cy=\"39\" r=\"4\"/><circle class=\"f-accent\" cx=\"60\" cy=\"105\" r=\"4\"/><circle class=\"f-accent\" cx=\"96\" cy=\"105\" r=\"4\"/><circle class=\"f-accent\" cx=\"132\" cy=\"105\" r=\"4\"/><circle class=\"f-accent\" cx=\"12\" cy=\"137\" r=\"4\"/><text class=\"t\" x=\"20\" y=\"140\">STOPPED</text><circle class=\"f-mute\" cx=\"86\" cy=\"137\" r=\"4\"/><text class=\"t\" x=\"94\" y=\"140\">PASSING</text></svg></div></div></div>"
      },
      what: "Project for Public Spaces, founded in 1975, built this method on the observational work of Jane Jacobs and William H. Whyte, and by its own account began consistently using the word placemaking for it in the mid-1990s. The word itself is older than that use. Whyte began the Street Life Project in 1969 while working with the New York City Planning Commission, and spent years filming how people used the city's plazas before publishing The Social Life of Small Urban Spaces in 1980. Fred Kent, who founded PPS, was one of his research assistants. The method is to watch how a space gets used, work with its users, make small changes and watch again, rather than deliver a finished design object.",
      why: "For a designer working on signage, environmental graphics or a public installation, this is usually the client's framework and the standard the work will be measured against. It also rewrites the brief: the test is whether people linger, not whether the visual looks good in a render.",
      how: [
        "Observe the space at several times of day before proposing anything, and write down what people already do there.",
        "Propose cheap, reversible changes first and keep the evidence from them.",
        "Design for lingering. Whyte filmed what actually held people in a plaza; find out what holds people in your space before specifying furniture.",
        "Expect to hand over management as well as artwork. PPS's argument is that places need running, not only designing."
      ],
      example: "Whyte's Street Life Project films of New York plazas, made from 1969 onwards, still the clearest demonstration of the method.",
      numbers: "",
      pitfall: "The word gets stuck on any mural or public artwork, which strips out the observation and the community work that gave the method its meaning.",
      source: "Project for Public Spaces (founded 1975), What is Placemaking? and The Placemaking Movement; William H. Whyte, The Social Life of Small Urban Spaces (1980); Jane Jacobs, The Death and Life of Great American Cities (1961).",
      verify: { status: "adjusted", note: "Corrected two things the popular account gets wrong. First the date of the naming: PPS's own What is Placemaking? page says placemaking is not a new idea, that PPS began consistently using the term in the mid-1990s, and that the thinking behind it gained traction in the 1960s through Jacobs and Whyte. So PPS should be credited with developing the method from 1975, not with coining the word at its founding. Second the date of Whyte's project: PPS's page on Whyte says he began wondering how newly planned spaces were working while assisting the New York City Planning Commission in 1969, which is when the Street Life Project started, and that he walked the streets for more than sixteen years. The same page confirms Fred Kent worked as one of Whyte's research assistants before founding PPS. Whyte's 1980 book and Jacobs's 1961 book are confirmed by title and year. Status is adjusted rather than disputed: nothing here failed to replicate, the entry as written simply dated the naming wrongly." },
      belongs: { verdict: "adjacent", why: "This is urban planning and community development practice rather than a design fundamental. It earns a place because environmental graphics, signage and public installations are routinely commissioned inside a placemaking programme, and the brief will be written and judged in its language." },
      related: [890, 652]
    },
    {
      n: 9880,
      title: "Consistent nomenclature across the system",
      aka: ["Message schedule", "One name per destination"],
      oneLine: "Every destination gets one name, used identically on every sign, map, letter and web page.",
      demo: {
        caption: "One department, three names on the left. On the right the letter, the sign and the door all say the same word.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Three names</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><span class=\"db-label\">Appointment letter</span><span class=\"db-type db-type--mono\">IMAGING</span></div><div class=\"db-card\"><span class=\"db-label\">Corridor sign</span><span class=\"db-type db-type--mono\">RADIOLOGY</span></div><div class=\"db-card\"><span class=\"db-label\">Door plate</span><span class=\"db-type db-type--mono\">X-RAY</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One name</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><span class=\"db-label\">Appointment letter</span><span class=\"db-type db-type--mono\">RADIOLOGY</span></div><div class=\"db-card\"><span class=\"db-label\">Corridor sign</span><span class=\"db-type db-type--mono\">RADIOLOGY</span></div><div class=\"db-card\"><span class=\"db-label\">Door plate</span><span class=\"db-type db-type--mono\">RADIOLOGY</span></div></div></div></div></div>"
      },
      what: "A wayfinding system runs on a message schedule: a written list of every sign, its location and its exact wording, agreed before anything gets designed. The rule inside it is that a destination has one name. If the entrance sign says Outpatients, then the junction sign, the lift lobby, the door plate, the appointment letter and the website all say Outpatients. When a system that looks correct on the drawings fails in service, inconsistent naming is a common reason, and it is a naming problem rather than a graphics problem.",
      why: "Somebody looking for a name they were given will not accept a near match while under stress. A mismatch stops them at the junction, which is the exact failure the system exists to prevent. Fixing it costs nothing at schedule stage and costs a manufacturing run after installation.",
      how: [
        "Build the message schedule as a spreadsheet before the design phase and get the client's operational team to sign it off.",
        "Force one name per destination, and extend that to the letters, emails and web pages the client already sends out.",
        "Set a maximum number of destinations allowed on any one sign and hold the line on it.",
        "Write a change process into the handover, so a renamed department triggers a schedule update instead of a laminated notice."
      ],
      example: "A hospital where the same department is Radiology on the building signs, X-ray on the appointment letter and Imaging on the door. Each is correct to whoever wrote it, and the patient is lost.",
      numbers: "",
      pitfall: "Naming gets treated as the client's business and deferred until installation, by which point a change means remaking plates.",
      source: "Standard environmental graphic design practice; the message schedule is a documented part of the process described in David Gibson, The Wayfinding Handbook (2009).",
      verify: { status: "unverified", note: "I did not read Gibson's book and cannot quote his wording on message schedules, so nothing here is attributed to him as a formulation. The principle is long-standing practice in environmental graphic design and is stated as practice, not as a sourced claim. I found no study measuring how often naming inconsistency causes wayfinding failure, so the entry says common rather than most common. Added as a gap: nothing in entries 877 to 891 covers naming consistency." },
      belongs: { verdict: "core", why: "A failure mode that sits outside every other entry in the section, and one that no amount of good typography can rescue." },
      related: [877, 878, 880]
    },
    {
      n: 9884,
      title: "Tactile and braille signage",
      aka: ["Raised character signage"],
      oneLine: "Signs read by hand: raised characters and braille at a height and finish a hand can use.",
      demo: {
        caption: "Same words on both plates. Only the right one puts the braille under the text, where a sweeping hand finds it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Italic, braille alongside</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-row db-row--between\"><span class=\"db-type\" style=\"font-style:italic\">Room 214</span><span class=\"db-row\"><span class=\"db-col db-col--tight\"><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span></span><span class=\"db-col db-col--tight\"><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span></span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span></span><span class=\"db-col db-col--tight\"><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span></span></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Sans serif, braille below</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type db-type--mono\">ROOM 214</span><span class=\"db-row\"><span class=\"db-col db-col--tight\"><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span></span><span class=\"db-col db-col--tight\"><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm\"></span></span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span></span><span class=\"db-col db-col--tight\"><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm\"></span></span><span class=\"db-row db-row--tight\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span></span></span></div></div></div></div></div>"
      },
      what: "Visual wayfinding fails completely for some users, so the ADA requires signs naming permanent rooms and spaces to carry raised characters duplicated in contracted (Grade 2) braille alongside the visual text. The rules are dimensional rather than aesthetic: character height between 5/8 inch and 2 inches, sans serif, no italic or script, stroke no more than 15 per cent of character height, and baselines mounted between 48 and 60 inches above the floor. Braille sits below the text, outside any pictogram field.",
      why: "A hand reads differently from an eye. Raised text has to be findable by sweeping, separated enough not to run together under a fingertip, and within reach. Getting the dimensions wrong produces a sign that looks compliant and is useless.",
      how: [
        "Keep tactile text short. Room name and number, nothing else.",
        "Choose a sans serif with open counters. The standard bans italic, oblique, script and decorative forms outright.",
        "Locate tactile signs in the same position at every door, so a user can find them by habit rather than by search.",
        "Have braille produced by a specialist and proofread by a braille reader, not signed off by the studio."
      ],
      example: "Any US lift lobby. ADA 407.2.3.1 requires the floor number on both jambs of the hoistway entrance in tactile characters at least 2 inches high, plus braille, with a raised star at the main entry level.",
      numbers: "ADA 2010: raised characters 5/8 in (16 mm) to 2 in (51 mm), based on the uppercase I (703.2.5); stroke thickness 15 per cent of character height maximum (703.2.6); braille contracted Grade 2, dot base diameter 0.059 to 0.063 in (1.5 to 1.6 mm) (703.3.1); tactile characters mounted 48 in (1220 mm) to 60 in (1525 mm) above the floor, measured to character baselines (703.4.1).",
      pitfall: "The visual and tactile layers get designed as one composition, so the raised text ends up wherever the visual layout left a gap rather than where a hand will look for it.",
      source: "2010 ADA Standards for Accessible Design, sections 703.1, 703.2, 703.3, 703.4 and 407.2.3.1.",
      verify: { status: "verified", note: "All cited sections read word for word from the US Access Board's published text of the 2010 ADA Standards, including Table 703.3.1 for braille dot dimensions, 703.2 for the requirement that raised characters be duplicated in contracted braille, 703.3.2 for braille position, and the 703.2.5 exception allowing 1/2 in raised characters where separate visual characters carry the same information. Added as a gap: the master list's fifteen signage entries contain nothing on non-visual reading, which is a legal requirement in the US. I have not cited a UK instrument, so no claim about UK law is made here." },
      belongs: { verdict: "core", why: "A whole reading channel with its own measurable rules, absent from the section, and legally mandatory on any US building covered by the ADA." },
      related: [884, 877, 885]
    }
  ]
};
