window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[2] = {
  n: 2,
  slug: "elements",
  title: "Elements of visual language",
  blurb: "The raw vocabulary of visual work: point, line, plane, shape, colour, texture, space and the rest.",
  intro: "These are the parts you actually move around. Most of the vocabulary comes from two places: the Bauhaus, where Kandinsky and Klee tried to write down what a point and a line really are, and the design-school textbooks that followed, above all Wucius Wong's, which sorts the elements into four groups. Jacques Bertin did the same job for maps and charts and added something the art books lack, a set of rules about what each element is good for. The vocabulary earns its keep because it lets you name what is wrong with a layout instead of nudging things until they look better. A few entries here are studio working words rather than named principles, and those are flagged in the verify note.",
  sources: [
    "Wassily Kandinsky, Point and Line to Plane (1926)",
    "Paul Klee, Pedagogical Sketchbook (1925)",
    "Wucius Wong, Principles of Two-Dimensional Design (1972) and Principles of Form and Design (1993)",
    "Donis A. Dondis, A Primer of Visual Literacy (MIT Press, 1973)",
    "Jacques Bertin, Semiology of Graphics (1967; English translation 1983)",
    "Rudolf Arnheim, Art and Visual Perception (1954; revised 1974)",
    "Edgar Rubin, Synsoplevede Figurer (1915)",
    "Albert H. Munsell, A Color Notation (1905)",
    "Ellen Lupton and Jennifer Cole Phillips, Graphic Design: The New Basics (2008)",
    "Francis D. K. Ching, Architecture: Form, Space and Order (1979)",
    "Edward Tufte, The Visual Display of Quantitative Information (1983)",
    "WCAG 2.2, W3C Recommendation (current version 12 December 2024)",
    "ISO 216, A-series paper sizes",
    "AIGA and the US Department of Transportation, Symbol Signs (1974 and 1979)"
  ],
  entries: [

    {
      n: 51,
      title: "Point",
      aka: ["Dot"],
      oneLine: "A mark that fixes position and nothing else, the smallest unit of visual language.",
      demo: {
        caption: "Same frame, same position. The small mark only says where; enlarged, it stops saying where and becomes a shape.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Reads as a point</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 96\"><rect class=\"s-mute\" x=\"1\" y=\"1\" width=\"158\" height=\"94\"/><circle class=\"f\" cx=\"54\" cy=\"34\" r=\"5\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Reads as a disc</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 96\"><rect class=\"s-mute\" x=\"1\" y=\"1\" width=\"158\" height=\"94\"/><circle class=\"f\" cx=\"54\" cy=\"34\" r=\"27\"/></svg></div></div></div>"
      },
      what: "Kandinsky opens Point and Line to Plane with the claim that \"The geometric point is an invisible thing\" and that considered as substance it equals zero. Wong says the same in plainer terms: a point indicates position, has no length or breadth, and is where a line starts, ends, or crosses another. The instant you put one on paper it stops being conceptual and becomes a small form. Wong's practical test is relative, not absolute: a form reads as a point because it is small compared with the frame around it, and because its shape is simple.",
      why: "A point pins attention to one place and immediately sets up a relationship with the edges of the format. Two points imply a line between them without one being drawn. It is the cheapest way a designer can say \"here\".",
      how: [
        "Size points against the frame they sit in, never in absolute units carried over from another canvas.",
        "Use a single point when you want one destination for the eye, and accept that a second one splits it.",
        "Treat bullets, full stops, map pins and status dots as the same element with the same rules.",
        "Watch the pull: a point away from the centre creates tension with the format, which you either want or you do not."
      ],
      example: "A pin dropped on a digital map. It has no size worth reading and no shape worth describing; all it does is say where.",
      numbers: "",
      pitfall: "Dot sizes get fixed in pixels early, then reused on a much larger canvas, where they stop reading as points and start reading as small discs with their own shape.",
      source: "Wassily Kandinsky, Point and Line to Plane (1926); Wucius Wong, Principles of Two-Dimensional Design (1972) for the conceptual definition, and Principles of Form and Design (1993) for form as point.",
      verify: { status: "verified", note: "Kandinsky's wording checked against the text of Bauhaus book 9, which reads \"The geometric point is an invisible thing. Therefore, it must be defined as an incorporeal thing. Considered in terms of substance, it equals zero.\" Wong's treatment read from the scan of Principles of Form and Design at robertcarlsen.net, which states that a form is recognised as a point because it is small, that smallness is relative to the frame of reference, and that the main characteristics of a point are that its size should be comparatively small and its shape rather simple. The conceptual definition of point as position without length or breadth is from the earlier Principles of Two-Dimensional Design, checked against teaching material quoting it." },
      belongs: { verdict: "core", why: "The smallest unit in every element taxonomy from Kandinsky to Wong to Dondis, and directly usable in layout and iconography." },
      related: [52, 68, 79, 81]
    },

    {
      n: 52,
      title: "Line",
      aka: ["Stroke", "Rule"],
      oneLine: "The track of a moving point: length without meaningful breadth, always carrying direction.",
      demo: {
        caption: "Only the gap between identical dots changes. By the middle row the eye stops counting dots and follows a line.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 110\"><circle class=\"f\" cx=\"16\" cy=\"20\" r=\"4\"/><circle class=\"f\" cx=\"66\" cy=\"20\" r=\"4\"/><circle class=\"f\" cx=\"116\" cy=\"20\" r=\"4\"/><circle class=\"f\" cx=\"166\" cy=\"20\" r=\"4\"/><circle class=\"f\" cx=\"216\" cy=\"20\" r=\"4\"/><text class=\"t\" x=\"232\" y=\"24\">separate points</text><circle class=\"f\" cx=\"16\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"26\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"36\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"46\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"56\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"66\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"76\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"86\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"96\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"106\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"116\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"126\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"136\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"146\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"156\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"166\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"176\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"186\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"196\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"206\" cy=\"56\" r=\"4\"/><circle class=\"f\" cx=\"216\" cy=\"56\" r=\"4\"/><text class=\"t\" x=\"232\" y=\"60\">the same dot, packed</text><path class=\"s\" d=\"M16 92 H216\" style=\"stroke-width:8\"/><text class=\"t\" x=\"232\" y=\"96\">one drawn line</text></svg></div>"
      },
      what: "Kandinsky is exact about it: \"The geometric line is an invisible thing. It is the track made by the moving point; that is, its product.\" Wong gives the working version. A form reads as a line when its breadth is very narrow and its length is prominent, and he separates three things in it: the overall shape (straight, curved, bent, irregular, hand-drawn), the body held between two edges, and the extremities, which start to matter once the line gets heavy. A row of points reads as a line without any line existing.",
      why: "Every line in a layout is doing a job: separating two things, joining them, or leading the eye somewhere. Naming the job stops you drawing a rule when what you needed was a gap. Line is also the fastest way to build structure, because the eye follows a line whether or not you meant it to.",
      how: [
        "Say what each line is for before you draw it, and delete the ones you cannot account for.",
        "Set stroke weight in relation to the type beside it, not from a default.",
        "Give the ends a deliberate shape once a line is heavy enough for them to read.",
        "Try an implied line first, made from aligned edges, before you draw a real one."
      ],
      example: "Harry Beck's London Underground diagram, first issued in 1933, is built almost entirely from horizontal, vertical and 45-degree lines, and it works because those lines connect rather than divide.",
      numbers: "",
      pitfall: "Divider rules get added everywhere a boundary is felt, and the interface turns into a wireframe. Space nearly always does the same job more quietly.",
      source: "Wassily Kandinsky, Point and Line to Plane (1926); Wucius Wong, Principles of Form and Design (1993).",
      verify: { status: "verified", note: "Kandinsky's definition quoted from the text of Bauhaus book 9. Wong's two conditions for a line and his three aspects of it, the overall shape, the body between two edges and the extremities, read verbatim from the scan of Principles of Form and Design at robertcarlsen.net, along with his note that points arranged in a row evoke a line that is conceptual rather than visual. Beck's diagram checked against the London Transport Museum, which confirms the first pocket edition of January 1933 and his restriction to horizontal, vertical and 45-degree lines. Folklore flag: \"a line is a dot that went for a walk\" is a paraphrase, not Klee's wording, which is covered at 79. The claim that line does exactly three jobs was the author's own and has been removed rather than sourced." },
      belongs: { verdict: "core", why: "Named in every element taxonomy in the field and used in every piece of work a designer makes." },
      related: [51, 53, 66, 72, 144]
    },

    {
      n: 53,
      title: "Plane",
      aka: ["Surface", "Basic Plane"],
      oneLine: "The path of a moving line: an area with length and breadth but no thickness.",
      demo: {
        caption: "Same six lines of content both sides. The left stacks three planes to group them; the right does it on one.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">A plane per group</span><div class=\"db-stage db-stage--tight db-stage--dark\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One plane, grouped by space</span><div class=\"db-stage db-stage--tight db-stage--dark\"><div class=\"db-card\"><div class=\"db-col\" style=\"gap:22px\"><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div>"
      },
      what: "Wong defines a plane as the path of a line moving in a direction other than its own, bounded by lines, with position and direction but no thickness. Kandinsky calls the surface you work on the Basic Plane, the material plane that receives the work. Wong's practical test is negative: on a flat surface, anything not read as a point or a line is read as a plane. He also notes that points or lines packed densely enough will start to read as a plane, which is where texture comes from.",
      why: "Planes are how you carve a format into regions. Panels, cards, bands, columns and colour blocks are all planes, and the reader groups content by which plane it sits on before reading a word of it.",
      how: [
        "Treat the page or screen itself as the first plane, then count how many you are stacking on it.",
        "Give every plane a job. A plane with no job is a background colour looking for a reason.",
        "Define planes by their boundaries, and decide whether each boundary is drawn, tonal or implied.",
        "Stop at three or four stacked planes; past that the depth order stops being readable."
      ],
      example: "A settings screen: the screen is one plane, a grouped-settings card sits on it as a second, and a sheet sliding over both is a third. Three planes, three levels, and anyone can tell you which is on top.",
      numbers: "",
      pitfall: "Cards get nested inside cards inside sheets until every region has its own fill and border, and the interface loses the quiet ground everything else was supposed to sit on.",
      source: "Wucius Wong, Principles of Two-Dimensional Design (1972) for the conceptual definition, and Principles of Form and Design (1993) for form as plane; Wassily Kandinsky, Point and Line to Plane (1926).",
      verify: { status: "verified", note: "Read from the scan of Principles of Form and Design at robertcarlsen.net: that all flat forms not recognised as points or lines are forms as plane, that a planar form is bound by conceptual lines constituting its edges, the six-way classification of planar shapes (geometric, organic, rectilinear, irregular, hand-drawn, accidental), and that points or lines densely and regularly grouped together suggest planar forms and become the texture of the plane. Kandinsky's Basic Plane confirmed verbatim from Bauhaus book 9: \"the material plane which is called upon to receive the content of the work of art\"." },
      belongs: { verdict: "core", why: "One of the four conceptual elements, and the unit almost every screen and page layout is actually built from." },
      related: [51, 52, 54, 76, 78]
    },

    {
      n: 54,
      title: "Volume",
      aka: ["Solid"],
      oneLine: "The path of a moving plane: three-dimensional extent, entirely illusory on a flat surface.",
      demo: {
        caption: "Identical geometry, one light source from above. Lighting the top edge gives a solid; lighting the bottom edge gives a void.",
        html: "<div class=\"db-stage db-stage--dark\"><svg class=\"db-svg\" viewBox=\"0 0 320 124\"><rect class=\"f-mute\" x=\"30\" y=\"22\" width=\"110\" height=\"70\"/><path style=\"fill:#fff;opacity:0.5\" d=\"M30 22 H140 L132 30 H38 Z\"/><path style=\"fill:#fff;opacity:0.5\" d=\"M30 22 L38 30 V84 L30 92 Z\"/><path style=\"fill:#000;opacity:0.4\" d=\"M30 92 L38 84 H132 L140 92 Z\"/><path style=\"fill:#000;opacity:0.4\" d=\"M140 22 L132 30 V84 L140 92 Z\"/><text class=\"t\" x=\"85\" y=\"110\" text-anchor=\"middle\">solid</text><rect class=\"f-mute\" x=\"180\" y=\"22\" width=\"110\" height=\"70\"/><path style=\"fill:#000;opacity:0.4\" d=\"M180 22 H290 L282 30 H188 Z\"/><path style=\"fill:#000;opacity:0.4\" d=\"M180 22 L188 30 V84 L180 92 Z\"/><path style=\"fill:#fff;opacity:0.5\" d=\"M180 92 L188 84 H282 L290 92 Z\"/><path style=\"fill:#fff;opacity:0.5\" d=\"M290 22 L282 30 V84 L290 92 Z\"/><text class=\"t\" x=\"235\" y=\"110\" text-anchor=\"middle\">void</text></svg></div>"
      },
      what: "Wong: a volume is the path of a plane in motion, bounded by planes, with position in space, and in two-dimensional design it is completely illusory. Ching treats point, line, plane and volume as the primary elements of architecture, and adds a distinction flat design does not need. In his words a volume can be either a solid, meaning space displaced by mass, or a void, meaning space contained or enclosed by planes. On paper or screen, volume is a claim you assemble from cues, mainly occlusion, shading and perspective.",
      why: "Volume is what makes something look pressable, liftable or physically there. It also gives you an order in depth, which is a second axis of hierarchy on top of size and value.",
      how: [
        "Pick one light direction for the whole product and never break it.",
        "Reach for occlusion before shading. Something overlapping something else is the strongest and cheapest depth cue you have.",
        "In three-dimensional work, decide whether you are shaping the solid or the void, because both are designed.",
        "Keep the number of apparent depth levels small enough that a user can rank them at a glance."
      ],
      example: "A physical rocker light switch: the rocker is a solid volume, the recess behind it is a void, and you read both correctly before your hand arrives.",
      numbers: "",
      pitfall: "Shadow directions drift between components built by different people, so one card is lit from above and another from the left, and the whole surface stops being a single space.",
      source: "Wucius Wong, Principles of Two-Dimensional Design (1972) for the conceptual definition, and Principles of Form and Design (1993); Francis D. K. Ching, Architecture: Form, Space and Order (first published 1979).",
      verify: { status: "verified", note: "Wong's statement that form as volume is completely illusory read from the scan of Principles of Form and Design at robertcarlsen.net. Ching checked against the full text of Architecture: Form, Space and Order, which gives the primary elements of point, line, plane and volume and reads: \"a volume can be either a solid, space displaced by mass, or a void, space contained or enclosed by planes\". The wording \"enclosed by surfaces\" has been corrected to Ching's \"planes\"." },
      belongs: { verdict: "core", why: "One of the four conceptual elements, literal in product and architecture and simulated constantly in interface work." },
      related: [53, 57, 59, 194, 198]
    },

    {
      n: 55,
      title: "Shape",
      aka: ["Silhouette outline", "Figure"],
      oneLine: "The outline that identifies a thing; the first property perception uses to recognise it.",
      demo: {
        caption: "Find the four triangles on the left, then the four accent dots on the right. Same four positions, both times.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Marked by shape</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--nowrap db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-sq\"></span><span class=\"db-tri\"></span><span class=\"db-dot\"></span><span class=\"db-sq\"></span></div><div class=\"db-row db-row--nowrap db-row--centre\"><span class=\"db-sq\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-sq\"></span><span class=\"db-tri\"></span></div><div class=\"db-row db-row--nowrap db-row--centre\"><span class=\"db-tri\"></span><span class=\"db-sq\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-sq\"></span></div><div class=\"db-row db-row--nowrap db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-sq\"></span><span class=\"db-tri\"></span><span class=\"db-dot\"></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Marked by colour</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--nowrap db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div><div class=\"db-row db-row--nowrap db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot db-dot--accent\"></span></div><div class=\"db-row db-row--nowrap db-row--centre\"><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div><div class=\"db-row db-row--nowrap db-row--centre\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot db-dot--accent\"></span><span class=\"db-dot\"></span></div></div></div></div></div>"
      },
      what: "Wong puts it simply: anything that can be seen has a shape, and shape is the main identification in perception. He sorts planar shapes into six kinds, geometric, organic, rectilinear, irregular, hand-drawn and accidental, which is a more useful split than the usual geometric-versus-organic pair. Bertin lists shape among his retinal variables but rates it the weakest of the set: it is the only one of his variables he considered never selective, meaning you cannot pick out all the triangles at a glance the way you can pick out all the red ones.",
      why: "Shape carries identity at distance, at small size and in one colour, which is why logos and pictograms live or die on it. Bertin's finding is the useful warning attached: identity and grouping are different jobs, and shape only does the first one.",
      how: [
        "Use shape to say what something is, and colour or value to say which group it belongs to.",
        "Test every shape at the smallest size it will ever appear, filled solid in one colour.",
        "Keep to one shape family per system, and make any departure from it mean something.",
        "In charts, do not ask readers to find a pattern by scanning for a marker shape."
      ],
      example: "The AIGA and US Department of Transportation symbol signs, drawn by Roger Cook and Don Shanosky: 34 published in 1974 and 16 more in 1979. Each one has to be identified by shape alone from the far end of a concourse.",
      numbers: "",
      pitfall: "A dashboard encodes six data series by marker shape because the palette was already spent, and no reader can see the pattern without reading the legend six times.",
      source: "Wucius Wong, Principles of Form and Design (1993); Jacques Bertin, Semiology of Graphics (1967; English translation 1983).",
      verify: { status: "verified", note: "Wong read verbatim from the scan of Principles of Form and Design at robertcarlsen.net: \"Anything that can be seen has a shape which provides the main identification in our perception\", plus the six-way classification. Bertin checked against the Axis Maps Cartography Guide, which states that shape \"is the only one of Bertin's variables that he thought is never selective, along with orientation when used for area representation\". AIGA's own resource page confirms a first set of 34 symbols published in 1974 and 16 more added in 1979, designed by Roger Cook and Don Shanosky." },
      belongs: { verdict: "core", why: "A visual element in Wong, a retinal variable in Bertin, and the property recognition runs on." },
      related: [56, 74, 490, 512, 514]
    },

    {
      n: 56,
      title: "Form",
      aka: ["Visible form"],
      oneLine: "A shape once it has been given a definite size, colour and texture; also, confusingly, a 3D shape.",
      demo: {
        caption: "One rectangle, four forms. A shape is never delivered on its own; size, colour and texture arrive with it.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--bottom db-row--centre\"><div class=\"db-col db-col--tight\"><div class=\"db-block db-block--outline\" style=\"width:68px;height:44px;border-radius:6px\"></div><span class=\"db-note\">shape</span></div><div class=\"db-col db-col--tight\"><div class=\"db-block db-block--outline\" style=\"width:102px;height:66px;border-radius:9px\"></div><span class=\"db-note\">plus size</span></div><div class=\"db-col db-col--tight\"><div class=\"db-block db-block--accent\" style=\"width:102px;height:66px;border-radius:9px\"></div><span class=\"db-note\">plus colour</span></div><div class=\"db-col db-col--tight\"><div class=\"db-block\" style=\"width:102px;height:66px;border-radius:9px;background:repeating-linear-gradient(45deg,var(--accent) 0 5px,var(--accent-soft) 5px 11px)\"></div><span class=\"db-note\">plus texture</span></div></div></div>"
      },
      what: "Two incompatible definitions are in circulation and you need to know which one is in the room. School teaching usually says shape is two-dimensional and form is its three-dimensional counterpart. Wong means something else entirely: form is all the visual elements taken together, so a form is a shape of definite size, colour and texture, and even a point or a line becomes a form the moment it is visible. Ching uses form for the identifying outward characteristic of a volume, which is closer to the school definition.",
      why: "Wong's reading is the more useful one at a desk, because it kills the idea that you can approve a shape and settle the rest later. You never choose a shape on its own; you choose a shape plus three other things, whether or not you noticed.",
      how: [
        "Say which definition you are using before an argument about it starts.",
        "Never sign off a shape without its size, colour and texture pinned down in the same review.",
        "In three-dimensional work, keep form for the outward figure and mass for the bulk.",
        "When a form is not working, change one of the four properties at a time so you learn which one was at fault."
      ],
      example: "The same rounded rectangle at a 4px radius in pale grey reads as a container. At a 24px radius in saturated blue it reads as a button. One shape, two forms, two meanings.",
      numbers: "",
      pitfall: "A brief says \"make the shape stronger\" when the actual fault is that the fill is too pale or the texture is too busy, and three rounds get spent redrawing geometry.",
      source: "Wucius Wong, Principles of Form and Design (1993); Francis D. K. Ching, Architecture: Form, Space and Order (1979).",
      verify: { status: "disputed", note: "Real term, contested definition. Wong's text reads: \"All the visual elements constitute what we generally call 'form'... Form in this sense is not just a shape that is seen, but a shape of definite size, color, and texture\", and separately that point, line or plane, when visible, becomes form. Ching's text reads: \"Form is the primary identifying characteristic of a volume. It is established by the shapes and interrelationships of the planes that describe the boundaries of the volume.\" Neither matches the shape-is-flat, form-is-solid split taught in most art rooms, and no single agreed definition exists across the canon, so both readings are given rather than one being presented as correct." },
      belongs: { verdict: "core", why: "Central working vocabulary in both readings, and the ambiguity itself is worth knowing about because it causes real confusion in reviews." },
      related: [55, 57, 71, 82]
    },

    {
      n: 57,
      title: "Mass",
      aka: ["Bulk"],
      oneLine: "How much matter a form appears to contain, whether it is real or only implied.",
      demo: { none: "Mass is a physical quantity, so a flat picture can only ever show its stand-in, visual weight, which is exactly the confusion this entry exists to correct; the solid-and-void half is demonstrated at 54." },
      what: "In three-dimensional work mass is literal, and it is the half of Ching's pair that has substance: a volume is either a solid, space displaced by mass, or a void, space enclosed by planes. Shaping a building means deciding, for every part of it, which of those two you are working on. On a flat surface there is no mass at all, only an impression of bulk that the eye builds from area, darkness and closeness of texture, and that impression is better handled under its own name, visual weight, at 71.",
      why: "The word earns its place in product, packaging and architecture, where mass is a real quantity with a cost and a manufacturing consequence. In flat work it is worth knowing chiefly so that you notice when a reviewer says mass and means weight, which is a different and better-defined idea.",
      how: [
        "In product and architecture, design the void with the same care as the solid, and say which one a given drawing is about.",
        "Keep mass for things that have material, and use visual weight for marks on a surface.",
        "When a client asks for something to feel more substantial, find out whether they mean physical bulk or apparent weight, because the fixes are unrelated."
      ],
      example: "A cast-iron kettle and a printed photograph of the same kettle. The first has mass, which you feel when you lift it; the second has only visual weight, which changes if you fade it.",
      numbers: "",
      pitfall: "Mass and visual weight get used interchangeably in a review, so a note about physical heft comes back as a change to a shadow.",
      source: "Francis D. K. Ching, Architecture: Form, Space and Order (1979) for the solid-or-void reading; otherwise studio vocabulary, origin unclear.",
      verify: { status: "adjusted", note: "Mass is not named as an element by Wong, Kandinsky, Dondis or Bertin, so it is not presented as canonical. Ching's solid-or-void wording confirmed verbatim in the full text of Architecture: Form, Space and Order. The entry as originally written duplicated entry 71 almost line for line, including the same squint test, the same large-pale-against-small-dark advice and the same pitfall about a washed-out photograph; that material has been removed and left where it is sourced, at 71." },
      belongs: { verdict: "adjacent", why: "Overturning the original core verdict. Mass is load-bearing in three-dimensional design, but the solid-and-void content is already carried by Ching at 54 and the flat-surface content is visual weight at 71 under a vaguer name. It belongs here as vocabulary to disambiguate, not as an element of visual language in its own right." },
      related: [54, 71, 85, 917]
    },

    {
      n: 58,
      title: "Space",
      aka: ["Interval space", "Blank space"],
      oneLine: "The area elements occupy or leave empty; a relational element you arrange, not a leftover.",
      demo: {
        caption: "Six identical fields both sides. The left draws five rules to structure them; the right draws none and widens one gap.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Five rules</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>Full name</span><span style=\"border-top:1px solid var(--rule-strong);padding-top:4px\">Email</span><span style=\"border-top:1px solid var(--rule-strong);padding-top:4px\">Telephone</span><span style=\"border-top:1px solid var(--rule-strong);padding-top:4px\">Address</span><span style=\"border-top:1px solid var(--rule-strong);padding-top:4px\">Postcode</span><span style=\"border-top:1px solid var(--rule-strong);padding-top:4px\">Country</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One wider gap</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col\" style=\"gap:22px\"><div class=\"db-col db-col--tight\"><span>Full name</span><span>Email</span><span>Telephone</span></div><div class=\"db-col db-col--tight\"><span>Address</span><span>Postcode</span><span>Country</span></div></div></div></div></div></div>"
      },
      what: "Space is one of Wong's four relational elements, and he groups it with gravity as something felt rather than seen. His definition is brief and useful: shapes of any size occupy space, so space can be occupied or left blank, and it can be flat or made to suggest depth. The empty parts of a composition are as designed as the marked parts, because the marks got their positions from them.",
      why: "Space does the grouping work that borders and boxes do badly. Gestalt proximity means readers group by gap size before they read anything, so the gaps decide the structure whether you set them deliberately or not.",
      how: [
        "Fix a spacing scale and refuse values outside it.",
        "Make the gap between groups clearly bigger than the gap inside a group, so grouping is not a judgement call.",
        "Reach for space before a divider line every time.",
        "Treat blank areas as a decision you can defend, not as room still to be filled."
      ],
      example: "A form where each label sits tight above its input and each field sits well clear of the next reads as a set of grouped questions. Set every gap the same and the identical markup reads as a flat list of unrelated boxes.",
      numbers: "",
      pitfall: "A stakeholder sees blank area as waste and asks for it to be used, and the content that gets poured in destroys the grouping the space was creating.",
      source: "Wucius Wong, Principles of Form and Design (1993).",
      verify: { status: "verified", note: "Wong read verbatim from the scan of Principles of Form and Design at robertcarlsen.net: \"Shapes of any size, however small, occupy space. Thus, space can be occupied or left blank. It can also be flat or illusory to suggest depth.\" His split of the relational elements into those perceived (direction, position) and those felt (space, gravity) confirmed in the same passage." },
      belongs: { verdict: "core", why: "One of Wong's relational elements and the single most reliable tool a designer has for creating structure without adding marks." },
      related: [69, 118, 119, 156, 446]
    },

    {
      n: 59,
      title: "Depth",
      aka: ["Pictorial depth", "Z-axis"],
      oneLine: "The illusion of a third dimension on a flat surface, assembled from cues the eye trusts.",
      demo: {
        caption: "Three panels each side. Identical shadows leave them all at one height; the overlap on the right ranks them instantly.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Shadow on everything</span><div class=\"db-stage db-stage--tight db-stage--dark\"><svg class=\"db-svg\" viewBox=\"0 0 200 116\"><rect class=\"f-mute\" x=\"19\" y=\"33\" width=\"52\" height=\"62\" opacity=\"0.45\"/><rect class=\"f-mute\" x=\"79\" y=\"33\" width=\"52\" height=\"62\" opacity=\"0.45\"/><rect class=\"f-mute\" x=\"139\" y=\"33\" width=\"52\" height=\"62\" opacity=\"0.45\"/><rect x=\"14\" y=\"28\" width=\"52\" height=\"62\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/><rect x=\"74\" y=\"28\" width=\"52\" height=\"62\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/><rect x=\"134\" y=\"28\" width=\"52\" height=\"62\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One thing over another</span><div class=\"db-stage db-stage--tight db-stage--dark\"><svg class=\"db-svg\" viewBox=\"0 0 200 116\"><rect x=\"18\" y=\"12\" width=\"72\" height=\"54\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/><rect x=\"48\" y=\"31\" width=\"72\" height=\"54\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/><rect x=\"78\" y=\"50\" width=\"72\" height=\"54\" style=\"fill:var(--paper-raised);stroke:var(--rule-strong)\"/></svg></div></div></div>"
      },
      what: "Wong notes that space in a design can be flat or illusory, and that the illusion starts as soon as one form overlaps another. Everything beyond that is a matter of stacking cues: occlusion, relative size, texture gradient, aerial perspective, shading and cast shadow. The cues themselves are perception, and they are covered properly in section 5. What matters here is that depth is not an element you place, it is a result you build.",
      why: "Depth gives you a hierarchy axis that does not cost size or colour. It tells the reader what is on top, what is behind and what is temporarily out of reach, which is exactly what a modal, a drawer or a dropdown needs to say.",
      how: [
        "Use occlusion first. One thing covering another is unambiguous and free.",
        "Keep one depth model across the product, with a fixed number of levels.",
        "Spend depth on communicating order, not on making surfaces look nicer.",
        "If a shadow does not tell the reader something about order, remove it."
      ],
      example: "A dialogue over a dimmed page. Occlusion plus a darkened backdrop is two cues, and nobody has ever needed the behaviour explained to them.",
      numbers: "",
      pitfall: "Shadows are applied as a style rather than a signal, so six unrelated elements all appear to float at the same height and the depth order says nothing.",
      source: "Wucius Wong, Principles of Form and Design (1993) for the flat-or-illusory distinction; the cue list is standard perception material, sourced at 194 to 200.",
      verify: { status: "verified", note: "Wong's statement that space can be flat or illusory to suggest depth, and that when one shape overlaps another some depth is created, read from the scan of Principles of Form and Design at robertcarlsen.net. The individual depth cues are not re-sourced here; they are entries 194 to 200 in section 5." },
      belongs: { verdict: "core", why: "The z-axis is a working design element in every layered interface, and the choice of which cue to use is a design decision, not a perceptual given." },
      related: [54, 124, 194, 195, 740]
    },

    {
      n: 60,
      title: "Texture",
      aka: ["Surface quality"],
      oneLine: "The surface character of a form, which may be felt as well as seen.",
      demo: {
        caption: "Identical words on both sides. Only the leading changes, and with it the grey of the block before you read anything.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Leading 1.1</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:13px;line-height:1.1\"><p>The delivery window runs from Monday to Friday, between eight in the morning and six in the evening. Someone has to be at the address to sign for the parcel.</p></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Leading 1.9</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\" style=\"font-size:13px;line-height:1.9\"><p>The delivery window runs from Monday to Friday, between eight in the morning and six in the evening. Someone has to be at the address to sign for the parcel.</p></div></div></div></div>"
      },
      what: "Wong lists texture among his four visual elements and defines it as the surface characteristic of a shape, plain or decorated, smooth or rough, appealing to touch as much as to sight. He adds a point most texture explanations miss: points or lines grouped densely and regularly stop reading as separate marks and become the texture of the plane. Bertin includes texture among his retinal variables, so it is also a way of encoding data, not only a way of making a surface.",
      why: "Texture tells the eye what something is made of before a single word is read, and it can separate two areas without a line or a box between them. It is also unavoidable: a block of type has a texture whether or not anyone chose it.",
      how: [
        "Separate tactile texture, which is real and physical, from visual texture, which is a picture of a surface.",
        "Use a change of texture instead of a border when you want a soft boundary.",
        "Check texture at final size and final resolution, because most textures dissolve or moire when scaled.",
        "Treat the greyness of a block of type as a texture you control through size, leading and tracking."
      ],
      example: "Two pages of the same words, one set with tight leading and one with open leading. The words are identical; the texture is not, and the second page reads as calmer before anyone starts reading.",
      numbers: "",
      pitfall: "A paper or grain overlay is dropped in at full strength across a whole page, and it competes with the type at exactly the frequency that makes small text hard to resolve.",
      source: "Wucius Wong, Principles of Form and Design (1993); Jacques Bertin, Semiology of Graphics (1967).",
      verify: { status: "verified", note: "Wong read verbatim from the scan of Principles of Form and Design at robertcarlsen.net: \"Texture refers to the surface characteristics of a shape. This may be plain or decorated, smooth or rough, and may appeal to the sense of touch as much as to sight\", plus his point that densely and regularly grouped points or lines become the texture of the plane. Texture's presence in Bertin's list of retinal variables checked against the Axis Maps Cartography Guide, which lists position, size, shape, value, colour hue, orientation and texture. That page gives no rating for texture on Bertin's four levels, so none is claimed here." },
      belongs: { verdict: "core", why: "One of Wong's four visual elements and one of Bertin's retinal variables, with a direct daily use in typographic colour." },
      related: [61, 342, 512, 872]
    },

    {
      n: 61,
      title: "Pattern",
      aka: ["Repeat", "Surface pattern"],
      oneLine: "An element repeated on a rule, which turns texture into something a viewer can predict.",
      demo: {
        caption: "The same triangle at the same density in both fields. Offsetting every other row by half a step turns columns into diagonals.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Straight repeat</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Half-drop repeat</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\" style=\"margin-left:10px\"><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\" style=\"margin-left:10px\"><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span><span class=\"db-tri\"></span></div></div></div></div></div>"
      },
      what: "Pattern is texture with a structure behind it. The mathematics is settled and finite: every repeating flat pattern with two independent directions of translation belongs to one of 17 wallpaper groups, first proved by Evgraf Fedorov in 1891 and derived again independently by George Polya in 1924. Patterns that repeat along a single line belong to one of 7 frieze groups. Lupton and Phillips give Pattern its own chapter in Graphic Design: The New Basics, treating it as a basic rather than a decorative concern.",
      why: "A pattern is recognisable from a fragment, which is why it is one of the few brand assets that survives being cropped. It also lets you fill an area with interest at almost no attention cost, because once the rule is understood the eye stops working at it.",
      how: [
        "Design the repeat unit and its joins, not a pretty swatch, and always view it tiled.",
        "Choose the symmetry deliberately. A mirrored repeat feels formal, a glide repeat feels casual, and the difference is visible.",
        "Test at both extremes of scale: as a large surface and as a small swatch on a business card.",
        "Break the repeat once, on purpose, if you want a focal point inside a patterned field."
      ],
      example: "The Burberry check. It is identifiable from a corner of a scarf, which is the whole point of owning a pattern rather than owning a colour.",
      numbers: "17 wallpaper (plane symmetry) groups; 7 frieze groups.",
      pitfall: "A pattern is designed as a single tile in isolation and never viewed repeating, so the seam line and a diagonal drift across the field only appear once it is printed.",
      source: "Evgraf Fedorov (1891) for the classification of the 17 plane symmetry groups; Ellen Lupton and Jennifer Cole Phillips, Graphic Design: The New Basics (2008).",
      verify: { status: "verified", note: "The 17 wallpaper groups confirmed against the standard mathematical reference, which states that \"a proof that there are only 17 distinct groups of such planar symmetries was first carried out by Evgraf Fedorov in 1891 and then derived independently by George Polya in 1924\". The count of 7 frieze groups is settled mathematics. The Pattern chapter confirmed in the chapter list for Graphic Design: The New Basics held by the Internet Archive. I did not verify the widely repeated claim that the Alhambra contains all 17 groups, so it is left out; treat that claim as unproven." },
      belongs: { verdict: "core", why: "A named chapter in the standard basics textbook, with a settled mathematical structure a designer can actually use to choose a repeat." },
      related: [60, 104, 132, 460, 844]
    },

    {
      n: 62,
      title: "Value / tone",
      aka: ["Lightness", "Tonal value"],
      oneLine: "How light or dark something is, independent of its hue.",
      demo: {
        caption: "Four different hues on the left, all at the same lightness. In greyscale the whole palette collapses to one tone.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Four brand hues</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--nowrap db-row--tight\"><span class=\"db-swatch\" style=\"background:#4E7FBF\"></span><span class=\"db-swatch\" style=\"background:#CE5A46\"></span><span class=\"db-swatch\" style=\"background:#558B49\"></span><span class=\"db-swatch\" style=\"background:#9A7A2E\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">The same four in greyscale</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--nowrap db-row--tight\"><span class=\"db-swatch\" style=\"background:#7d7d7d\"></span><span class=\"db-swatch\" style=\"background:#7e7e7e\"></span><span class=\"db-swatch\" style=\"background:#7e7e7e\"></span><span class=\"db-swatch\" style=\"background:#7e7e7e\"></span></div></div></div></div>"
      },
      what: "Munsell separated colour into hue, value and chroma and set the system out in A Color Notation in 1905. He was the first to treat those three as independent, perceptually even dimensions, though the system went on being refined for decades after that book. Value is the vertical axis: pure lightness with the colour taken out. Bertin lists value among his retinal variables and classifies it as ordered but dissociative, meaning a change in value changes how visible a mark is, so you cannot vary value and still have marks read as one group.",
      why: "Value carries hierarchy and legibility. If the value structure is wrong, no adjustment to hue will rescue it, and the accessibility standards are written in value terms rather than colour terms for exactly that reason.",
      how: [
        "Check every layout in greyscale before you look at it in colour.",
        "Carry rank with value, and use hue for identity and category instead.",
        "Measure text contrast rather than judging it on a bright monitor in a bright room.",
        "Keep at least three clearly separated value steps in a palette: a ground, a mid, and a foreground."
      ],
      example: "UK motorway signage is white type on blue. It stays readable at speed and in rain because of the value gap, not because of the particular blue.",
      numbers: "WCAG 2.2 requires a contrast ratio of at least 4.5:1 for body text and 3:1 for large text (Success Criterion 1.4.3), and at least 3:1 for user interface components and graphical objects (Success Criterion 1.4.11).",
      pitfall: "A brand palette arrives with four colours that all sit at roughly the same lightness, so nothing in it can be a background for anything else and every screen needs black or white smuggled in.",
      source: "Albert H. Munsell, A Color Notation (1905); Jacques Bertin, Semiology of Graphics (1967); WCAG 2.2, W3C.",
      verify: { status: "verified", note: "The 1905 publication of A Color Notation confirmed, along with the standard reference wording that Munsell \"was the first to separate hue, value, and chroma into perceptually uniform and independent dimensions\". The original claim that the book contained the full system has been softened, because the 1905 Atlas was only the first embodiment and the system was revised through the 1929 Book of Color and later renotations. Bertin's classification of value as selective, ordered and dissociative checked against the Axis Maps Cartography Guide. Both WCAG figures read from the published criteria at w3.org: 1.4.3 requires 4.5:1 for text and 3:1 for large text, 1.4.11 requires 3:1 for user interface components and graphical objects." },
      belongs: { verdict: "core", why: "The dimension hierarchy and legibility actually run on, and the one written into accessibility law." },
      related: [63, 285, 309, 310, 690]
    },

    {
      n: 63,
      title: "Colour",
      aka: ["Hue and chroma"],
      oneLine: "A visual element covering hue, the neutrals, and every tonal and chromatic variation between.",
      demo: {
        caption: "Same card twice. The left puts the accent on five things; the right saves it for the one you press.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Accent on five things</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">New</span><span style=\"color:var(--accent)\">Annual review</span><div class=\"db-lines\"><i style=\"background:var(--accent);opacity:1\"></i><i></i></div><span class=\"db-note db-note--accent\">Read the guidance</span><div class=\"db-row\"><span class=\"db-btn\" style=\"background:var(--accent);border-color:var(--accent)\">Start</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Accent on one</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">New</span><span>Annual review</span><div class=\"db-lines\"><i></i><i></i></div><span class=\"db-note\">Read the guidance</span><div class=\"db-row\"><span class=\"db-btn\" style=\"background:var(--accent);border-color:var(--accent)\">Start</span></div></div></div></div></div></div>"
      },
      what: "Wong lists colour among his four visual elements and uses the word broadly: not only the hues of the spectrum but the neutrals, black through the greys to white, and all their tonal and chromatic variations. Bertin splits it, treating hue as a retinal variable that is selective and associative but has no natural order, while lightness is handled separately as value. Section 7 covers the systems, the harmony schemes and the contrast rules in full; this entry is only about colour as an element you place.",
      why: "Colour is the fastest grouping signal available and the one most likely to fail silently. It fails for people with colour vision differences, in greyscale printing, in bright sunlight, and in dark mode, and in each case nobody tells you.",
      how: [
        "Choose the value structure first and the hues second.",
        "Never let hue be the only thing carrying a meaning; add a label, a shape or a position.",
        "Keep the working palette small enough that every colour has one job.",
        "Test in greyscale and in a colour vision simulator as part of the normal review, not as a final audit."
      ],
      example: "A line chart where the only difference between two series is red and green. It reads fine on the designer's screen and is unreadable to a meaningful share of the audience.",
      numbers: "WCAG 2.2 Success Criterion 1.4.1 (Level A) requires that colour is never the only visual means of conveying information.",
      pitfall: "The brand colour is used for the primary action and also as a decorative accent, so within two screens the reader has stopped treating it as a signal.",
      source: "Wucius Wong, Principles of Form and Design (1993); Jacques Bertin, Semiology of Graphics (1967); WCAG 2.2, W3C.",
      verify: { status: "verified", note: "Wong read verbatim from the scan of Principles of Form and Design at robertcarlsen.net: colour \"is used in its broad sense, comprising not only all the hues of the spectrum but also the neutrals (black, white, and all the intermediate grays), and also all their tonal and chromatic variations\". Bertin's treatment of hue as selective and associative but neither ordered nor quantitative checked against the Axis Maps Cartography Guide. Success Criterion 1.4.1 read at w3.org: \"Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element\", Level A. Colour systems and harmony are deferred to section 7 rather than duplicated here." },
      belongs: { verdict: "core", why: "One of Wong's four visual elements and a retinal variable in Bertin, though its detail belongs in section 7." },
      related: [62, 269, 318, 694, 842]
    },

    {
      n: 64,
      title: "Size",
      aka: ["Extent"],
      oneLine: "How big something is: measurable in absolute terms, and the bluntest hierarchy tool there is.",
      demo: {
        caption: "The same two lines both sides. A two-pixel step is a measurement; the step on the right is a rank.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">18px over 16px</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\"><p style=\"font-size:18px\">Delivery options</p><p style=\"font-size:16px\">Choose a day and a time window for this order.</p></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">28px over 16px</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type\"><p style=\"font-size:28px\">Delivery options</p><p style=\"font-size:16px\">Choose a day and a time window for this order.</p></div></div></div></div>"
      },
      what: "Wong's definition holds both halves of it: all shapes have size, size is relative if you describe it as big or small, and it is also physically measurable. Bertin rates size as ordered and quantitative, one of only two variables, alongside position, from which people can estimate an actual ratio rather than just an order. He also rates it dissociative: changing size changes how visible a mark is, so a set of differently sized marks will not read as one group.",
      why: "Readers obey size before anything else, which makes it the fastest way to establish rank and the fastest way to wreck it. It is also the element accessibility standards regulate most directly, because a target too small to hit is a hard failure rather than a matter of taste.",
      how: [
        "Work from a size scale with visible steps, not from arbitrary numbers typed in one at a time.",
        "Reserve the largest size on a page for one thing only.",
        "Check that size differences still read at the smallest breakpoint, where a scale often collapses.",
        "Meet the minimum target sizes before styling anything, not after."
      ],
      example: "A type scale where the heading is 18px and the body is 16px. On the designer's monitor it looks like a hierarchy; on a phone at arm's length it looks like a mistake.",
      numbers: "WCAG 2.2 Success Criterion 2.5.8 (Target Size (Minimum), Level AA) sets a minimum of 24 by 24 CSS pixels. Success Criterion 2.5.5 (Level AAA) sets 44 by 44 CSS pixels.",
      pitfall: "Steps in a type scale are set too close together, so the design has six sizes and two apparent levels of hierarchy.",
      source: "Wucius Wong, Principles of Form and Design (1993); Jacques Bertin, Semiology of Graphics (1967); WCAG 2.2, W3C.",
      verify: { status: "verified", note: "Wong read verbatim from the scan of Principles of Form and Design at robertcarlsen.net: \"All shapes have size. Size is relative if we describe it in terms of bigness and smallness, but it is also physically measurable.\" Bertin's rating of size as selective, ordered, quantitative and dissociative checked against the Axis Maps Cartography Guide, which notes that among the retinal variables Bertin considered only size to be quantitative, with position quantitative as a dimension of the plane. Both target size criteria read at w3.org: 2.5.8 Target Size (Minimum), Level AA, at least 24 by 24 CSS pixels; 2.5.5 Target Size (Enhanced), Level AAA, at least 44 by 44 CSS pixels." },
      belongs: { verdict: "core", why: "A visual element in Wong, a retinal variable in Bertin, and the only variable besides position that supports reading a quantity." },
      related: [65, 344, 587, 700, 1016]
    },

    {
      n: 65,
      title: "Scale",
      aka: ["Relative size"],
      oneLine: "Size understood as a relationship: how big something is against a reference the viewer already knows.",
      demo: {
        caption: "Both squares are the same 24 units across. Only the frame around them changed, and with it how big they look.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 152\"><rect class=\"s-mute\" x=\"24\" y=\"44\" width=\"56\" height=\"56\"/><rect class=\"f\" x=\"40\" y=\"60\" width=\"24\" height=\"24\"/><text class=\"t\" x=\"52\" y=\"146\" text-anchor=\"middle\">small frame</text><rect class=\"s-mute\" x=\"120\" y=\"14\" width=\"180\" height=\"116\"/><rect class=\"f\" x=\"198\" y=\"60\" width=\"24\" height=\"24\"/><text class=\"t\" x=\"210\" y=\"146\" text-anchor=\"middle\">large frame</text></svg></div>"
      },
      what: "Size is measurable on its own; scale only exists against something else. Wong demonstrates it when explaining what makes a form read as a point: the same form looks fairly large confined in a tiny frame of reference and rather small inside a much greater one, with nothing about the form having changed. He also says outright that the frame of reference is what provides scale. The reference can be the format, a human body, a familiar object, or another element in the same composition. Lupton and Phillips give Scale a chapter of its own in Graphic Design: The New Basics.",
      why: "Scale is where mood comes from. The same photograph reads as intimate at postcard size and monumental across a spread. It is also the property most often lost in handoff, because a designer checks a logo at 400 per cent and a user meets it at 16 pixels.",
      how: [
        "Name the reference every time you talk about scale, or the conversation is meaningless.",
        "Review at the real size on the real device before approving anything.",
        "Use a deliberate scale jump when you want emphasis; small increments read as inconsistency rather than hierarchy.",
        "Check the smallest and largest cases of every asset, not the comfortable middle."
      ],
      example: "A 40px icon inside a 44px button is cramped and reads as a solid block. The same icon on a hero panel reads as a small detail. Same size, two scales.",
      numbers: "",
      pitfall: "A mark is designed and signed off at full-screen zoom, then fails at favicon size where nobody looked, and the fix arrives after the stationery has been printed.",
      source: "Wucius Wong, Principles of Form and Design (1993); Ellen Lupton and Jennifer Cole Phillips, Graphic Design: The New Basics (2008).",
      verify: { status: "verified", note: "Wong read verbatim from the scan of Principles of Form and Design at robertcarlsen.net, in the Form as Point section: \"A form may appear fairly large when it is confined in a tiny frame of reference, but the same form may appear rather small when it is put inside a much greater frame of reference\", and in Form and Space: \"the frame of reference provides scale\". The original entry placed both statements in his frame of reference section, which is only half right, and has been corrected. The Scale chapter confirmed in the chapter list for Graphic Design: The New Basics held by the Internet Archive." },
      belongs: { verdict: "core", why: "Distinct from size in a way that matters daily, and a named chapter in the standard basics text." },
      related: [64, 129, 463, 833, 837]
    },

    {
      n: 66,
      title: "Direction",
      aka: ["Angle", "Thrust"],
      oneLine: "Which way a form points, judged against the viewer, the frame, and its neighbours at once.",
      demo: {
        caption: "Three identical cards both sides. The left is tilted by three different small amounts; the right by one angle, repeated.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Three different angles</span><div class=\"db-stage db-stage--tight db-stage--dark\"><div class=\"db-col\"><div class=\"db-card\" style=\"transform:rotate(2deg)\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\" style=\"transform:rotate(-3deg)\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\" style=\"transform:rotate(1.5deg)\"><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One angle, repeated</span><div class=\"db-stage db-stage--tight db-stage--dark\"><div class=\"db-col\"><div class=\"db-card\" style=\"transform:rotate(-3deg)\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\" style=\"transform:rotate(-3deg)\"><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-card\" style=\"transform:rotate(-3deg)\"><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div>"
      },
      what: "Direction is one of Wong's relational elements, and his definition is precise about what it depends on: the direction of a shape is set by how it relates to the observer, to the frame that contains it, and to other shapes nearby. That is three references, not one, which is why a diagonal can feel dynamic in one layout and simply crooked in another. Dondis also treats direction as one of the basic elements of visual communication.",
      why: "Direction creates apparent movement, and movement creates a reading path. Horizontal reads as calm and settled, vertical as formal and alert, diagonal as unstable and active, and those readings come from the relationship to the frame rather than from the angle in the abstract.",
      how: [
        "Pick one dominant direction per composition and let everything else defer to it.",
        "Use a single contrary direction as the accent. Two competing diagonals cancel each other out.",
        "Check direction against the frame edges, not only against neighbouring elements.",
        "Make sure the implied direction agrees with the reading order rather than fighting it."
      ],
      example: "A poster with one strong diagonal running from the lower left to the upper right carries the eye. Add a second diagonal at a different angle and the eye stalls at the crossing point.",
      numbers: "",
      pitfall: "Several elements are rotated by small, different amounts because each looked good on its own, and the page reads as badly assembled rather than dynamic.",
      source: "Wucius Wong, Principles of Form and Design (1993); Donis A. Dondis, A Primer of Visual Literacy (1973).",
      verify: { status: "verified", note: "Wong read verbatim from the scan of Principles of Form and Design at robertcarlsen.net: \"Direction of a shape depends on how it is related to the observer, to the frame that contains it, or to other shapes nearby.\" Upgraded from the author's hedge on Dondis: I have now read her printed list in the text of A Primer of Visual Literacy, which runs \"the dot, line, shape, direction, tone, color, texture, dimension, scale, movement\". Direction is in it." },
      belongs: { verdict: "core", why: "One of Wong's relational elements and one of Dondis's basic elements, and directly usable in composition." },
      related: [67, 111, 134, 512]
    },

    {
      n: 67,
      title: "Orientation",
      aka: ["Rotation", "Tilt"],
      oneLine: "The angle of a mark against a fixed axis, useful for separating things and poor for grouping areas.",
      demo: {
        caption: "One tilted stroke pops out of the field on the left. On the right, try pairing the patches by hatch angle.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Point marks</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 118\"><path class=\"s\" d=\"M20 12 V28\"/><path class=\"s\" d=\"M48 12 V28\"/><path class=\"s\" d=\"M76 12 V28\"/><path class=\"s\" d=\"M104 12 V28\"/><path class=\"s\" d=\"M132 12 V28\"/><path class=\"s\" d=\"M160 12 V28\"/><path class=\"s\" d=\"M20 38 V54\"/><path class=\"s\" d=\"M48 38 V54\"/><path class=\"s\" d=\"M76 38 V54\"/><path class=\"s\" d=\"M104 38 V54\"/><path class=\"s\" d=\"M132 38 V54\"/><path class=\"s\" d=\"M160 38 V54\"/><path class=\"s\" d=\"M20 64 V80\"/><path class=\"s\" d=\"M48 64 V80\"/><path class=\"s\" d=\"M76 64 V80\"/><path class=\"s\" d=\"M98 78 L110 66\"/><path class=\"s\" d=\"M132 64 V80\"/><path class=\"s\" d=\"M160 64 V80\"/><path class=\"s\" d=\"M20 90 V106\"/><path class=\"s\" d=\"M48 90 V106\"/><path class=\"s\" d=\"M76 90 V106\"/><path class=\"s\" d=\"M104 90 V106\"/><path class=\"s\" d=\"M132 90 V106\"/><path class=\"s\" d=\"M160 90 V106\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Filled areas</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><div class=\"db-block db-block--outline\" style=\"flex:1 1 0;height:48px;background:repeating-linear-gradient(45deg,var(--ink-4) 0 2px,transparent 2px 7px)\"></div><div class=\"db-block db-block--outline\" style=\"flex:1 1 0;height:48px;background:repeating-linear-gradient(135deg,var(--ink-4) 0 2px,transparent 2px 7px)\"></div><div class=\"db-block db-block--outline\" style=\"flex:1 1 0;height:48px;background:repeating-linear-gradient(90deg,var(--ink-4) 0 2px,transparent 2px 7px)\"></div></div><div class=\"db-row db-row--tight db-row--nowrap\"><div class=\"db-block db-block--outline\" style=\"flex:1 1 0;height:48px;background:repeating-linear-gradient(90deg,var(--ink-4) 0 2px,transparent 2px 7px)\"></div><div class=\"db-block db-block--outline\" style=\"flex:1 1 0;height:48px;background:repeating-linear-gradient(45deg,var(--ink-4) 0 2px,transparent 2px 7px)\"></div><div class=\"db-block db-block--outline\" style=\"flex:1 1 0;height:48px;background:repeating-linear-gradient(135deg,var(--ink-4) 0 2px,transparent 2px 7px)\"></div></div></div></div></div></div>"
      },
      what: "Bertin lists orientation among his retinal variables: the angle at which a mark sits relative to a fixed reference. It differs from direction in what it is measured against. Direction, in Wong's sense, is relative to the viewer, the frame and the neighbours; orientation is measured against a fixed axis and is therefore something you can specify. Bertin's warning is specific: for areas, such as polygons filled with angled hatching, orientation is not selective, so readers cannot pick out one hatch angle at a glance.",
      why: "Orientation is the cheapest way to distinguish two marks that are otherwise identical, and it is one of the attributes usually listed among those the visual system picks up before conscious attention, so a single tilted item in a field of upright ones stands out on its own.",
      how: [
        "Use one tilt across a design or none at all.",
        "Do not distinguish filled areas by hatch angle; use value or hue.",
        "Keep body text upright. Rotated running text costs the reader real effort.",
        "If you rotate table column headers to save width, check whether the table needed those columns at all."
      ],
      example: "Rotated column headers in a dense spreadsheet. They fit, and every reader tilts their head to use them.",
      numbers: "",
      pitfall: "Type is rotated to solve a space problem on a chart axis, and the chart becomes slower to read than the table it replaced.",
      source: "Jacques Bertin, Semiology of Graphics (1967; English translation 1983).",
      verify: { status: "verified", note: "Orientation's place among Bertin's retinal variables and his point that it is not selective for area symbols checked against the Axis Maps Cartography Guide summary of Semiology of Graphics. The preattentive claim is stated as a cross-reference to entry 175 in section 5 rather than sourced here; I did not re-read the primary literature on preattentive features this session." },
      belongs: { verdict: "core", why: "A named retinal variable with a clear rule attached about when it works and when it does not." },
      related: [66, 132, 175, 512]
    },

    {
      n: 68,
      title: "Position",
      aka: ["Placement", "Location"],
      oneLine: "Where a form sits, judged against the frame and the underlying structure; the strongest encoding available.",
      demo: {
        caption: "The same four values twice. The axis hands you each one; in the stack, try ranking B against D.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Position on a common axis</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 118\"><path class=\"s-mute\" d=\"M26 12 V96\"/><path class=\"s-mute\" d=\"M156 92 V96\"/><text class=\"t\" x=\"26\" y=\"108\" text-anchor=\"middle\">0</text><text class=\"t\" x=\"156\" y=\"108\" text-anchor=\"middle\">50</text><text class=\"t\" x=\"12\" y=\"27\">A</text><circle class=\"f\" cx=\"114\" cy=\"24\" r=\"4\"/><text class=\"t\" x=\"12\" y=\"47\">B</text><circle class=\"f\" cx=\"81\" cy=\"44\" r=\"4\"/><text class=\"t\" x=\"12\" y=\"67\">C</text><circle class=\"f\" cx=\"151\" cy=\"64\" r=\"4\"/><text class=\"t\" x=\"12\" y=\"87\">D</text><circle class=\"f\" cx=\"96\" cy=\"84\" r=\"4\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Stacked, no common baseline</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 118\"><rect class=\"f-mute\" x=\"60\" y=\"14\" width=\"56\" height=\"22\"/><rect class=\"f\" x=\"60\" y=\"36\" width=\"56\" height=\"14\"/><rect class=\"f-mute\" x=\"60\" y=\"50\" width=\"56\" height=\"31\"/><rect class=\"f\" x=\"60\" y=\"81\" width=\"56\" height=\"17\"/><text class=\"t\" x=\"124\" y=\"28\">A</text><text class=\"t\" x=\"124\" y=\"47\">B</text><text class=\"t\" x=\"124\" y=\"69\">C</text><text class=\"t\" x=\"124\" y=\"93\">D</text></svg></div></div></div>"
      },
      what: "Bertin separates the two dimensions of the plane, the x and y of a page or a chart, from the retinal variables, and treats them as the primary carriers of information. Position and size are the only two he considered quantitative, meaning a reader can estimate the actual ratio between two values rather than just their order. Wong makes the same element relational: the position of a shape is judged by its relationship to the frame, or to the structure underneath the design.",
      why: "Position beats every other way of encoding a value, and it also carries meaning that has nothing to do with data. Top means important, first means primary, and near means related, and readers apply those before they read anything.",
      how: [
        "Encode the value you most want understood as position along a common axis.",
        "Align to a structure so that position is readable, not just present.",
        "Judge placement against the format edges as well as against neighbours.",
        "Reserve the top-left region, in left-to-right reading, for what you want seen first."
      ],
      example: "A dot plot and a set of stacked colour blocks can hold the same numbers. Readers get the ratios right from the dot plot because position is doing the work.",
      numbers: "",
      pitfall: "Everything gets centred, so no element has a position relative to any structure and the page has no readable order beyond top to bottom.",
      source: "Jacques Bertin, Semiology of Graphics (1967; English translation 1983); Wucius Wong, Principles of Form and Design (1993).",
      verify: { status: "verified", note: "Bertin's separation of the two planar dimensions from the retinal variables, and his rating of position and size as the only quantitative variables, checked against the Axis Maps Cartography Guide. Wong read verbatim from the scan of Principles of Form and Design at robertcarlsen.net: \"The position of a shape is judged by its relationship to the frame or the structure of the design.\" Position's rank at the top of the Cleveland and McGill ordering is left to entry 514, where it is sourced." },
      belongs: { verdict: "core", why: "One of Wong's relational elements, the primary carrier in Bertin, and the most accurate encoding in data work." },
      related: [66, 117, 150, 514]
    },

    {
      n: 69,
      title: "Interval",
      aka: ["Spacing", "Gap"],
      oneLine: "The measured gap between two things, and the thing that actually does the grouping.",
      demo: {
        caption: "Six identical bars both sides. One-off gaps on the left; two values on the right, and six bars become two groups.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Gaps 11 14 9 17 12</span><div class=\"db-stage db-stage--tight\"><div class=\"db-bar db-bar--tall\"></div><div class=\"db-bar db-bar--tall\" style=\"margin-top:11px\"></div><div class=\"db-bar db-bar--tall\" style=\"margin-top:14px\"></div><div class=\"db-bar db-bar--tall\" style=\"margin-top:9px\"></div><div class=\"db-bar db-bar--tall\" style=\"margin-top:17px\"></div><div class=\"db-bar db-bar--tall\" style=\"margin-top:12px\"></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Gaps 8 8 24 8 8</span><div class=\"db-stage db-stage--tight\"><div class=\"db-bar db-bar--tall\"></div><div class=\"db-bar db-bar--tall\" style=\"margin-top:8px\"></div><div class=\"db-bar db-bar--tall\" style=\"margin-top:8px\"></div><div class=\"db-bar db-bar--tall\" style=\"margin-top:24px\"></div><div class=\"db-bar db-bar--tall\" style=\"margin-top:8px\"></div><div class=\"db-bar db-bar--tall\" style=\"margin-top:8px\"></div></div></div></div>"
      },
      what: "An interval is the distance between one element and the next: between letters, between words, between lines, between columns, between a heading and the paragraph under it. It is standard vocabulary in typography, where word spacing and line spacing are described as the intervals between words and between lines. It is not, however, named as a basic element by Kandinsky, Wong, Dondis or Bertin, so treat it as working language rather than canon.",
      why: "Readers group by comparing gaps, not by measuring them. A set of intervals that all look similar produces a design with no groups; a set with clear steps between them produces structure without a single border being drawn.",
      how: [
        "Define a short set of intervals and use nothing outside it.",
        "Make the gap between groups obviously larger than the gap inside a group, so the reader never has to judge.",
        "Set intervals in relation to the type size they sit beside, not as fixed numbers carried across contexts.",
        "When something looks wrong and you cannot say why, measure the gaps before you touch anything else."
      ],
      example: "A list where each item's label sits close to its value and the items sit well clear of each other reads instantly. Set both gaps the same and readers start pairing the wrong label with the wrong value.",
      numbers: "",
      pitfall: "A codebase accumulates dozens of one-off spacing values because each was fine on its own screen, and after that no two pages have the same rhythm.",
      source: "Standard typographic vocabulary; Rob Carter, Ben Day and Philip Meggs, Typographic Design: Form and Communication, which defines letter, word and line spacing as intervals. Origin as a named element unclear.",
      verify: { status: "adjusted", note: "Interval is not named as an element of visual language by Wong, Kandinsky, Dondis or Bertin, so the master list overstates its canonical status. The typographic use is confirmed verbatim in Carter, Day and Meggs: \"interletter spacing, traditionally called letterspacing, which is the interval between letters; interword spacing, also called wordspacing, which is the interval between words; and interline spacing, traditionally called leading... which is the interval between two lines of type\". No numeric ratio is given for the between-group to within-group gap, because no published threshold for it could be found." },
      belongs: { verdict: "core", why: "Not a canonical element, but spacing intervals decide grouping in every layout, and a spacing scale is one of the first things a design system needs." },
      related: [58, 118, 374, 414, 446]
    },

    {
      n: 70,
      title: "Density",
      aka: ["Packing", "Information density"],
      oneLine: "How much is packed into a given area, and how much a reader can take in per glance.",
      demo: {
        caption: "Same box, same type both sides. Four rows fit at comfortable spacing; nine fit once the gaps are tightened.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Comfortable</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:16px\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">BA 1476</span><span class=\"db-note\">09:15</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">LH 903</span><span class=\"db-note\">09:40</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">AF 1281</span><span class=\"db-note\">10:05</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">KL 1008</span><span class=\"db-note\">10:30</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Compact</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:3px\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">BA 1476</span><span class=\"db-note\">09:15</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">LH 903</span><span class=\"db-note\">09:40</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">AF 1281</span><span class=\"db-note\">10:05</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">KL 1008</span><span class=\"db-note\">10:30</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">IB 3167</span><span class=\"db-note\">10:55</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">SK 502</span><span class=\"db-note\">11:20</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">AZ 205</span><span class=\"db-note\">11:45</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">TP 1353</span><span class=\"db-note\">12:10</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">LX 317</span><span class=\"db-note\">12:35</span></div></div></div></div></div>"
      },
      what: "Density is the amount of content per unit of area. Tufte gives it a definition for graphics: the data density of a graphic is the number of entries in the data matrix divided by the area of the data graphic, and his argument is that most published graphics are far too sparse rather than too crowded. In typography the same property shows up as typographic colour, the overall greyness of a block. Wong describes points or lines grouped densely and regularly as becoming the texture of the plane.",
      why: "Density sets the cost of scanning. In a tool someone uses for six hours a day, low density means more scrolling, more page loads and more held-in-head state, and that cost is invisible in a design review because the reviewer only looks at one screen.",
      how: [
        "Measure density rather than judging it, at least roughly: how many items fit above the fold.",
        "Offer density modes for tools that people live in, and default professionals to the compact one.",
        "Raise density by removing decoration before you shrink type or gaps.",
        "Check density against target size, because past a point the two are in direct conflict."
      ],
      example: "An airline crew roster or a trading terminal. Both are deliberately dense because the user's cost of scrolling is far higher than the cost of small type they read every day.",
      numbers: "Tufte defines data density as the number of entries in the data matrix divided by the area of the data graphic.",
      pitfall: "Consumer-app spacing is applied to a professional tool, and the people who use it eight hours a day quietly build spreadsheets instead.",
      source: "Edward Tufte, The Visual Display of Quantitative Information (1983); Wucius Wong, Principles of Form and Design (1993).",
      verify: { status: "adjusted", note: "Density is not named as an element by Wong, Kandinsky, Dondis or Bertin, so it is presented as a working property rather than canon. Tufte's formula, data density equals the number of entries in the data matrix divided by the area of the data graphic, confirmed against several independent quotations of The Visual Display of Quantitative Information, along with his instruction to maximise data density within reason. Wong's point about densely grouped marks becoming the texture of the plane read from the scan of Principles of Form and Design at robertcarlsen.net." },
      belongs: { verdict: "core", why: "Not a canonical element, but density is a first-order decision in any tool or dashboard and it has a defined measure in the data-graphics literature." },
      related: [60, 445, 501, 1017]
    },

    {
      n: 71,
      title: "Visual weight",
      aka: ["Perceptual weight", "Optical weight"],
      oneLine: "How hard a form appears to pull on a composition, which is what balance is judged from.",
      demo: {
        caption: "The same two blocks in one frame. Only the small dark one moves; distance from the centre is what it buys.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Small mass near the centre</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 118\"><rect class=\"s-mute\" x=\"6\" y=\"6\" width=\"168\" height=\"100\"/><path class=\"s-mute\" stroke-dasharray=\"2 4\" d=\"M90 6 V106\"/><rect class=\"f-mute\" x=\"22\" y=\"33\" width=\"48\" height=\"48\"/><rect class=\"f\" x=\"104\" y=\"49\" width=\"16\" height=\"16\"/><path class=\"s-accent\" d=\"M90 96 H112\"/><path class=\"s-accent\" d=\"M112 92 V100\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Same mass, further out</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 118\"><rect class=\"s-mute\" x=\"6\" y=\"6\" width=\"168\" height=\"100\"/><path class=\"s-mute\" stroke-dasharray=\"2 4\" d=\"M90 6 V106\"/><rect class=\"f-mute\" x=\"22\" y=\"33\" width=\"48\" height=\"48\"/><rect class=\"f\" x=\"148\" y=\"49\" width=\"16\" height=\"16\"/><path class=\"s-accent\" d=\"M90 96 H156\"/><path class=\"s-accent\" d=\"M156 92 V100\"/></svg></div></div></div>"
      },
      what: "Arnheim's account in Art and Visual Perception sets out the factors, following Denman Ross's A Theory of Pure Design, which he credits. Weight rises with size. It rises with distance from the centre, on the lever principle, so a small element far out can hold a large one near the middle. It rises with the depth an area reaches. Colour and shape change it too, and Arnheim is clear that every factor has to be weighed together rather than applied one at a time.",
      why: "Weight is how you balance a layout without resorting to symmetry. Once you can see it, asymmetric composition becomes something you can reason about rather than something you nudge towards.",
      how: [
        "Squint at the layout until detail disappears and only the masses are left.",
        "Balance a large pale area against a small dark one rather than matching areas.",
        "Move an element further from the centre when you want it to count for more.",
        "Judge weight in greyscale first, then check whether a strong hue has changed the reading."
      ],
      example: "A poster with a small dark headline in the upper left and a large pale image in the lower right. The areas are nowhere near equal and it still sits still.",
      numbers: "",
      pitfall: "Weight is treated as area alone, so a huge washed-out photograph is assumed to balance a small block of solid black type, and the page tips.",
      source: "Rudolf Arnheim, Art and Visual Perception (1954; revised 1974).",
      verify: { status: "disputed", note: "Arnheim's factors are correctly stated and were read from the Balance chapter; his debt to Denman Ross is stated in the paper cited below and in Arnheim's own text. The physicalist reading of the theory has been tested and did not hold up. I C McManus, Katharina Stoever and Do Kim, i-Perception volume 2 (2011), pages 615 to 647, report in their abstract that the centre of mass of art photographs was closer to an axis than in control images, \"as was the case for photographic croppings\", but that \"stronger, within-image, paired comparison studies... showed no support for the Arnheim-Ross theory\", and that \"studies moving a frame around two disks, of different size, greyness, or background, did not support Arnheim's Gestalt theory\". Correction to the original entry: it claimed the cropping study found people framed centrally rather than balancing weights, which reverses the result. The crops in fact sat closer to the axes, weakly supporting Arnheim; it was the paired-comparison and disk-framing studies that failed. Use visual weight as a working heuristic, not as a predictive model." },
      belongs: { verdict: "core", why: "Universal studio vocabulary and directly actionable, even though the formal theory behind it is only partly supported." },
      related: [57, 62, 85, 87, 150]
    },

    {
      n: 72,
      title: "Edge",
      aka: ["Boundary", "Transition"],
      oneLine: "Where one area meets another, and how abruptly the change happens.",
      demo: {
        caption: "One boundary, three characters. Only the width of the transition changes, from an instant step to a fade you cannot locate.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--nowrap db-row--top\"><div class=\"db-col db-col--tight\" style=\"flex:1 1 0\"><div style=\"height:74px;background:linear-gradient(to right,var(--ink-4) 0 50%,var(--paper-raised) 50% 100%)\"></div><span class=\"db-note\">hard</span></div><div class=\"db-col db-col--tight\" style=\"flex:1 1 0\"><div style=\"height:74px;background:linear-gradient(to right,var(--ink-4) 0 36%,var(--paper-raised) 64% 100%)\"></div><span class=\"db-note\">soft</span></div><div class=\"db-col db-col--tight\" style=\"flex:1 1 0\"><div style=\"height:74px;background:linear-gradient(to right,var(--ink-4) 0 3%,var(--paper-raised) 97% 100%)\"></div><span class=\"db-note\">lost</span></div></div></div>"
      },
      what: "An edge is a boundary between two areas of different value, colour or texture. Wong uses the word for the two boundaries that contain the body of a line, and for the conceptual lines that bound a planar form. In practice an edge has a character you choose: hard, where the change is abrupt; soft, where it happens over a gradient; or implied, where nothing is drawn and an alignment does the work. The eye is an edge detector, so this is not a small decision.",
      why: "Edges are where attention lands. A hard edge asserts a separation, a soft edge lets one area sit behind another, and an implied edge gives you structure without adding ink. Choosing deliberately is the difference between a designed page and a boxed one.",
      how: [
        "Decide hard, soft or implied for every boundary in the design, and be able to say why.",
        "Try an implied edge, made from alignment and space, before you draw a rule or a border.",
        "Keep soft-edge treatments consistent: one blur radius language, not five.",
        "Never let text touch an edge, whether that edge is a rule, a container or the trim."
      ],
      example: "A table with no rules but strict column alignment and generous row spacing. The edges are all implied, and it is easier to read than the same table with a border on every cell.",
      numbers: "",
      pitfall: "Every container gets a one-pixel border because it is the quickest way to make a boundary visible, and the interface ends up looking like the wireframe it came from.",
      source: "Wucius Wong, Principles of Form and Design (1993) uses edges for the boundaries of forms; the hard, soft and lost edge vocabulary comes from painting and photography, origin unclear.",
      verify: { status: "adjusted", note: "No canonical element list names edge as an element. Wong's use of the word confirmed verbatim in the scan of Principles of Form and Design at robertcarlsen.net: \"As a line has breadth, its body is contained within two edges\", and \"A planar form is bound by conceptual lines which constitute the edges of the form.\" The entry is framed around the boundary transition, and the hard, soft and lost edge vocabulary is credited to painting and photography practice rather than to a source that could not be confirmed." },
      belongs: { verdict: "core", why: "Not canonical vocabulary, but every boundary in every design is an edge decision, and it is the one most often made by default." },
      related: [73, 75, 147, 527, 1049]
    },

    {
      n: 73,
      title: "Contour",
      aka: ["Outline", "Glyph contour"],
      oneLine: "The perceived boundary that describes a form, whether or not a line has been drawn on it.",
      demo: {
        caption: "No outline anywhere in this picture. The circle exists only because the grain of the texture changes across its boundary.",
        html: "<div class=\"db-stage\"><div class=\"db-row db-row--centre\"><div class=\"db-stack\" style=\"width:300px;height:220px\"><div style=\"background:radial-gradient(var(--ink-4) 0.9px,var(--paper-raised) 0.9px) 0 0/9px 9px\"></div><div style=\"background:radial-gradient(var(--ink-4) 2.3px,var(--paper-raised) 2.3px) 0 0/9px 9px;clip-path:circle(84px at 50% 50%)\"></div></div></div></div>"
      },
      what: "Contour is the outline that tells you where a form stops. Wong includes it among the things we feel to be present without being drawn: we sense a line marking the contour of an object, and a planar form is bounded by conceptual lines that give it its shape. In drawing, contour is also a discipline, following the boundary with the eye rather than sketching an impression of it. In type design and font file formats the closed paths that define a glyph are literally called contours.",
      why: "The useful part is that a contour need not be drawn. Where two textures meet, or where one value gives way to another, the eye reads an outline that nobody put there, so you can describe a form without inking its edge. In type design the word is literal: the outline is the object, and everything else follows from it.",
      how: [
        "Establish the contour before adding any interior detail.",
        "Ask of each boundary whether it has to be drawn, or whether alignment and value will produce it.",
        "Keep contour complexity consistent across a set, or one icon will read as heavier than the rest.",
        "Where a contour must be simplified for small sizes, draw a separate small-size version rather than scaling the large one."
      ],
      example: "A glyph in a font file is a set of closed contours and nothing else. Change one point on the outline and you have changed the letter, because there is no interior to fall back on.",
      numbers: "",
      pitfall: "An icon set is drawn with fussy inner detail and a weak outer boundary, so at 16 pixels every icon becomes the same grey smudge.",
      source: "Wucius Wong, Principles of Two-Dimensional Design (1972) for the conceptual line at the contour of an object, and Principles of Form and Design (1993) for the conceptual lines bounding a planar form; otherwise standard drawing and type-design vocabulary.",
      verify: { status: "adjusted", note: "Contour is not listed as a separate element by Wong, Kandinsky, Dondis or Bertin. What Wong does say, confirmed in the scan of Principles of Form and Design at robertcarlsen.net, is that a planar form is bound by conceptual lines which constitute its edges; the companion phrase about feeling a line at the contour of an object belongs to the conceptual-elements passage of the earlier Principles of Two-Dimensional Design and is sourced to that book here. The Coca-Cola example has been removed: the bottle is genuinely called the contour bottle, but the original entry's claim that it is named for its recognisability in outline is an invented causal link I could not source. The 1915 brief is real and well documented, on Coca-Cola's own history page and in the High Museum's centenary exhibition, but it asks for a bottle recognisable by feel in the dark or lying broken on the ground, which is touch and fragments rather than outline. It has been replaced by the glyph-contour example, which is a matter of file format rather than folklore." },
      belongs: { verdict: "adjacent", why: "Overturning the original core verdict. The justification the author gave for it, that contour decides whether a mark survives small sizes and one-colour printing, is entry 74's job and is stated there with the same test. What is left that is genuinely its own is the undrawn boundary and the type-design sense, which is real but narrower than a core element of visual language." },
      related: [72, 74, 355, 476, 490]
    },

    {
      n: 74,
      title: "Silhouette",
      aka: ["Solid shape", "Fill test"],
      oneLine: "A form filled solid with every interior detail thrown away; the hardest recognition test there is.",
      demo: {
        caption: "Top row as drawn, bottom row filled solid. On the left three icons become one shape; on the right they survive.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Detail inside a box</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 122\"><rect class=\"s\" x=\"17\" y=\"14\" width=\"30\" height=\"30\" rx=\"4\"/><path class=\"s\" d=\"M24 22 H40\"/><path class=\"s\" d=\"M24 29 H40\"/><path class=\"s\" d=\"M24 36 H34\"/><rect class=\"s\" x=\"75\" y=\"14\" width=\"30\" height=\"30\" rx=\"4\"/><circle class=\"s\" cx=\"90\" cy=\"29\" r=\"7\"/><rect class=\"s\" x=\"133\" y=\"14\" width=\"30\" height=\"30\" rx=\"4\"/><path class=\"s\" d=\"M140 29 H156\"/><path class=\"s\" d=\"M151 24 L156 29 L151 34\"/><text class=\"t\" x=\"90\" y=\"62\" text-anchor=\"middle\">as drawn</text><rect class=\"f\" x=\"17\" y=\"72\" width=\"30\" height=\"30\" rx=\"4\"/><rect class=\"f\" x=\"75\" y=\"72\" width=\"30\" height=\"30\" rx=\"4\"/><rect class=\"f\" x=\"133\" y=\"72\" width=\"30\" height=\"30\" rx=\"4\"/><text class=\"t\" x=\"90\" y=\"116\" text-anchor=\"middle\">filled solid</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Outer form carries it</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 122\"><path class=\"s\" d=\"M16 44 V29 L32 15 L48 29 V44 Z\"/><path class=\"s\" d=\"M90 14 L93.6 24 L104.3 24.4 L95.9 30.9 L98.8 41.1 L90 35.2 L81.2 41.1 L84.1 30.9 L75.7 24.4 L86.4 24 Z\"/><path class=\"s\" d=\"M142 14 H154 V28 H160 L148 44 L136 28 H142 Z\"/><text class=\"t\" x=\"90\" y=\"62\" text-anchor=\"middle\">as drawn</text><path class=\"f\" d=\"M16 102 V87 L32 73 L48 87 V102 Z\"/><path class=\"f\" d=\"M90 72 L93.6 82 L104.3 82.4 L95.9 88.9 L98.8 99.1 L90 93.2 L81.2 99.1 L84.1 88.9 L75.7 82.4 L86.4 82 Z\"/><path class=\"f\" d=\"M142 72 H154 V86 H160 L148 102 L136 86 H142 Z\"/><text class=\"t\" x=\"90\" y=\"116\" text-anchor=\"middle\">filled solid</text></svg></div></div></div>"
      },
      what: "The silhouette is what you get when you flatten a form to one colour and discard everything inside it. It is the recognition test with the most information removed, which is why it is the useful one. At distance, at small sizes, in one-colour printing, in poor light and in fog, the silhouette is the only thing that survives, so anything that depends on interior detail has already failed.",
      why: "Passing the silhouette test buys reliability. It means a mark works on a stamp and on a hoarding, in a favicon and embroidered on a shirt, without a separate version for each.",
      how: [
        "Fill the logo, icon or product black on white and see whether it is still identifiable.",
        "Repeat at the smallest size it will ever appear, then blur it and try again.",
        "Within an icon set, check that no two silhouettes are the same.",
        "Meet the contrast minimum for graphical objects, because a silhouette that cannot be separated from its ground is not a silhouette."
      ],
      example: "The AIGA and US Department of Transportation symbol signs, 34 published in 1974 and 16 added in 1979, drawn by Roger Cook and Don Shanosky. Every one is a solid silhouette designed to be read across a concourse.",
      numbers: "WCAG 2.2 Success Criterion 1.4.11 (Non-text Contrast) requires at least 3:1 contrast for graphical objects needed to understand content.",
      pitfall: "An outline-style icon set gives every icon the same silhouette, a rounded square, and puts all the meaning in thin interior strokes that vanish at small sizes.",
      source: "AIGA and the US Department of Transportation, Symbol Signs (1974 and 1979); WCAG 2.2, W3C; the fill and small-size tests are standard identity practice.",
      verify: { status: "verified", note: "AIGA's own resource page reads: \"A first set of 34 symbols was published in 1974, and received one of the first Presidential Design Awards; 16 more symbols were added in 1979\", giving the system of 50, with Roger Cook and Don Shanosky named as the designers. Success Criterion 1.4.11 Non-text Contrast read at w3.org: at least 3:1 against adjacent colours for user interface components and graphical objects, Level AA." },
      belongs: { verdict: "core", why: "The standard reproduction test in identity, icon and signage work, and it decides real production outcomes rather than taste." },
      related: [73, 476, 836, 837, 885]
    },

    {
      n: 75,
      title: "Counterform / negative shape",
      aka: ["Counter", "Negative space"],
      oneLine: "The shape of the space a form leaves behind, which is as designed as the form itself.",
      demo: {
        caption: "Compare the white inside the O with the white beside it. Tightening the tracking breaks the relationship between the two.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Tracking 0</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><span class=\"db-specimen\" style=\"font-size:52px;letter-spacing:0\">NOON</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Tracking -0.07em</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><span class=\"db-specimen\" style=\"font-size:52px;letter-spacing:-0.07em\">NOON</span></div></div></div></div>"
      },
      what: "The counterform is the leftover: the hole in a lowercase o, the gap between two words, the space trapped between a mark and its wordmark. In typography the enclosed space inside a letter is the counter, and counterform is the wider term covering all the negative spaces in and around letters. Wong makes the same distinction as positive and negative form, and notes that once forms interpenetrate or intersect, which is positive and which is negative stops being easily distinguishable.",
      why: "Rubin showed in 1915 that when two fields share a border, the border shapes one of them and not the other, which is precisely why counterforms get overlooked. Spacing type is really counterform design: you are matching the apparent area of the gaps, not the distances between the letters.",
      how: [
        "Look at the whites rather than the blacks when you space anything.",
        "Turn the artwork upside down, or blur it, so the counterforms stop being read as letters.",
        "Judge letter and word gaps as shapes of roughly equal apparent area, not as equal measurements.",
        "Check that counters stay open at small sizes and in the bold weights, where they close first."
      ],
      example: "The arrow formed between the E and the x in the FedEx wordmark, drawn by Lindon Leader. It is a counterform, and it is the most memorable part of the mark.",
      numbers: "",
      pitfall: "Tracking is tightened on a headline until it looks tight and modern, and the counters in the round letters close up so the word becomes a texture rather than a word.",
      source: "Edgar Rubin, Synsoplevede Figurer (1915) for figure and ground; Wucius Wong, Principles of Form and Design (1993) for positive and negative form; counter and counterform are standard typographic terms.",
      verify: { status: "verified", note: "Rubin's 1915 doctoral thesis, Synsoplevede Figurer: Studier i psykologisk Analyse, confirmed as the source, and his principle quoted as: \"When two fields have a common border, and one is seen as figure and the other as ground, the immediate perceptual experience is characterized by a shaping effect which emerges from the common border of the fields and which operates only on one field or operates more strongly on one than on the other.\" Wong's positive and negative form passage read from the scan of Principles of Form and Design at robertcarlsen.net, and his wording corrected here from overlap to interpenetration and intersection, which is what he actually names. The FedEx mark is credited to Lindon Leader at Landor Associates in 1994, confirmed in the design-press record. Counterform as the wider term for the negative spaces in and around letters is standard typographic usage, discussed in relation to Walter Tracy's Letters of Credit." },
      belongs: { verdict: "core", why: "The working half of figure-ground for anyone spacing type or drawing a mark, and the thing that separates competent spacing from good spacing." },
      related: [76, 121, 122, 355, 386]
    },

    {
      n: 76,
      title: "Ground",
      aka: ["Background", "Field of the page"],
      oneLine: "The surface a figure sits on: the area read as continuous, behind, and without a shape of its own.",
      demo: {
        caption: "One border drawn once, filled two ways. Whichever side takes the ink becomes the figure; the other stops having a shape.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Ink on the left</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 116\"><rect class=\"s-mute\" x=\"4\" y=\"4\" width=\"152\" height=\"108\"/><path class=\"f\" d=\"M84 4 C66 22 68 40 82 52 C96 64 94 86 78 112 H4 V4 Z\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Ink on the right</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 116\"><rect class=\"s-mute\" x=\"4\" y=\"4\" width=\"152\" height=\"108\"/><path class=\"f\" d=\"M84 4 C66 22 68 40 82 52 C96 64 94 86 78 112 H156 V4 Z\"/></svg></div></div></div>"
      },
      what: "Rubin's 1915 work set out the asymmetry: when two fields share a border, the border shapes one field and not the other, and the shaped one becomes the figure while the other becomes ground. Wong puts it in design terms: form is the figure, and ground is the area surrounding it, with the relationship reversible in ambiguous cases. A ground has no shape until you give it one, which is what makes it easy to neglect and easy to ruin.",
      why: "Nothing reads as foreground without a stable ground behind it. Once a page has three or four competing grounds, the reader has to work out the depth order before reading anything, and every element loses a little of its prominence.",
      how: [
        "Keep one ground per view and let everything else sit on it.",
        "Stop stacking surfaces: a card inside a card inside a sheet has three grounds and no hierarchy.",
        "Make the ground quiet enough that the figure wins without being enlarged.",
        "If you want figure and ground to swap, design the ambiguity deliberately rather than discovering it."
      ],
      example: "Rubin's own vase, where two profiles and a vase share one border. Whichever you see, the other becomes shapeless, which is the whole point.",
      numbers: "",
      pitfall: "An elevation system defines six surface greys a few per cent apart, so every panel is technically a different ground and none of them reads as the ground.",
      source: "Edgar Rubin, Synsoplevede Figurer (1915); Wucius Wong, Principles of Form and Design (1993).",
      verify: { status: "verified", note: "Rubin's 1915 thesis and the shared-border principle checked against the standard references on the Rubin vase, including the wording that the shaping effect \"operates only on one field or operates more strongly on one than on the other\". Wong read verbatim from the scan of Principles of Form and Design at robertcarlsen.net: \"Form, whether positive or negative, is commonly referred to as the 'figure,' which is on a 'ground.' Here 'ground' denotes the area surrounding the form or the 'figure.' In ambiguous cases, the figure-ground relationship may be reversible.\"" },
      belongs: { verdict: "core", why: "Half of the oldest and most reliable perceptual relationship in design, and a daily decision in layered interfaces." },
      related: [75, 77, 122, 163, 917]
    },

    {
      n: 77,
      title: "Field",
      aka: ["Visual field", "Grid field"],
      oneLine: "A loose word for the whole active area of a composition, already covered by other entries.",
      demo: { none: "Field turns out not to be a distinct element, so any picture would really be showing ground, format or a grid module under a borrowed name, and the one drawable claim left in the entry, Arnheim's structural skeleton, is the claim that failed when it was tested." },
      what: "Field is used in two ways and neither is a distinct element. Sometimes it means the whole surface being designed, which is Wong's frame of reference and Kandinsky's Basic Plane. Sometimes it means a module of a grid, which is a grid field. The one idea worth keeping under this heading is Arnheim's: an empty rectangle is not neutral. He describes a hidden structural skeleton of centre, axes and diagonals, and demonstrates it by moving a black disc around a white square, where the disc looks settled dead centre and restless just off it.",
      why: "If you take Arnheim's structural skeleton seriously, placement is never free. The format would be pulling before you put anything in it, which would explain why some off-centre positions feel resolved and others feel like mistakes. Treat that as a prompt to look rather than as a finding, because the experiment Arnheim built the claim on has since been run properly and did not come out his way.",
      how: [
        "Before placing anything, mark the centre, the two axes and the diagonals of your format and see where they land.",
        "Treat the empty format as active rather than as a container waiting to be filled.",
        "If your team uses the word field, agree which sense you mean, because form input is a third one."
      ],
      example: "Arnheim's own demonstration. He places a black disc in a white square and reports that it looks at rest dead centre and visibly unsettled a small distance from it, with nothing else in the frame to explain the difference. Worth knowing that when this was tested with viewers rather than asserted, the effect did not appear.",
      numbers: "",
      pitfall: "One conversation uses field for the page, the grid module and the text input, and the resulting spec is unusable.",
      source: "Rudolf Arnheim, Art and Visual Perception (1954; revised 1974) for the structural skeleton; Wucius Wong (1993) for the frame of reference; Wassily Kandinsky (1926) for the Basic Plane.",
      verify: { status: "disputed", note: "Field is not named as an element of visual language by Wong, Kandinsky, Dondis or Bertin. Arnheim's structural skeleton and the disc-in-a-square demonstration are confirmed as his, read from Art and Visual Perception. The demonstration itself is contested: McManus, Stoever and Kim (i-Perception, 2011) state in their abstract that \"studies moving a frame around two disks, of different size, greyness, or background, did not support Arnheim's Gestalt theory\". That is a direct test of this example, not a general objection, and the original entry presented the demonstration as settled. Also recorded at 71." },
      belongs: { verdict: "cut", why: "Not a distinct element. The two things people mean by it are already covered by 76 (ground) and 78 (format and frame), or by grid modules at 419. If a slot is wanted here, replace it with Arnheim's structural skeleton of the format, which is a specific claim about where an empty rectangle pulls rather than a loose word." },
      related: [76, 78, 150, 419, 421]
    },

    {
      n: 78,
      title: "Format and frame",
      aka: ["Frame of reference", "Canvas"],
      oneLine: "The shape and size of the surface, and the boundary that closes it; the first decision in any composition.",
      demo: {
        caption: "Fold the sheet in half and the proportion is unchanged. That is the only rectangle for which this is true.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 246\"><text class=\"t\" x=\"20\" y=\"16\">A3</text><rect class=\"s\" x=\"20\" y=\"22\" width=\"280\" height=\"198\"/><path class=\"s-mute\" d=\"M160 22 V220\"/><path class=\"s-mute\" d=\"M160 121 H300\"/><path class=\"s-mute\" d=\"M230 121 V220\"/><path class=\"s-mute\" d=\"M230 170.5 H300\"/><text class=\"t\" x=\"90\" y=\"126\" text-anchor=\"middle\">A4</text><text class=\"t\" x=\"230\" y=\"76\" text-anchor=\"middle\">A5</text><text class=\"t\" x=\"195\" y=\"174\" text-anchor=\"middle\">A6</text><text class=\"t\" x=\"265\" y=\"149\" text-anchor=\"middle\">A7</text><text class=\"t\" x=\"265\" y=\"199\" text-anchor=\"middle\">A7</text><text class=\"t\" x=\"20\" y=\"240\">every fold keeps 1:1.414</text></svg></div>"
      },
      what: "Wong calls this the frame of reference and makes three claims for it. It marks the outer limits of a design. It supplies scale, so you know how big the forms are. And it establishes the position and direction of everything inside. He adds that if there is a real, visible frame, it is part of the design and its own visual properties count. Where there is no drawn frame, the trim of a poster, the edge of a page or the face of a package becomes one.",
      why: "The format decides more than anything you put inside it. Change portrait to landscape and every relationship in the composition changes, which is why starting with content and only later choosing the format produces work that has to be rebuilt.",
      how: [
        "Choose or acknowledge the format before anything else, and design to that specific shape.",
        "Use the frame edges as alignment references, not only the grid inside them.",
        "Decide bleed and edge tension on purpose: an element that touches the trim behaves differently from one that does not.",
        "On the web, remember the format is a range rather than a size, so test the extremes of that range."
      ],
      example: "ISO A-series paper. Fold an A4 sheet in half and you get A5 with the same proportions, which is why the whole system nests without any layout being redrawn.",
      numbers: "ISO 216 fixes the A series at a ratio of 1 to the square root of 2 (about 1:1.414), so halving any size gives the next size with the proportion unchanged.",
      pitfall: "A layout is designed at one fixed canvas size and only meets the real format at build time, where the range it has to survive turns out to be four times wider than anything that was drawn.",
      source: "Wucius Wong, Principles of Form and Design (1993); ISO 216.",
      verify: { status: "verified", note: "Wong read verbatim from the scan of Principles of Form and Design at robertcarlsen.net: \"The frame of reference marks the outer limits of a design\"; \"If it is, then the frame should be considered as an integral part of the design. The visual elements of the visible frame should not be overlooked. If there is no actual frame, the edges of a poster, the page of a magazine, the various surfaces of a package all become frames of reference\"; and \"the frame of reference provides scale... and establishes the positions and directions of elements\". The root-two ratio is the defining property of the ISO 216 A series and is stated in the standard." },
      belongs: { verdict: "core", why: "Named directly by Wong and the decision every other compositional decision depends on." },
      related: [77, 147, 424, 442, 444]
    },

    {
      n: 79,
      title: "Gesture and mark",
      aka: ["Mark-making", "The hand"],
      oneLine: "The physical trace a tool leaves, and the movement still readable in it.",
      demo: {
        caption: "Six strokes each side. Identical ones read as texture; varied width, lean and ends on the right read as a hand.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Repeated identical strokes</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 96\"><path class=\"s\" stroke-width=\"3\" d=\"M22 14 V82\"/><path class=\"s\" stroke-width=\"3\" d=\"M50 14 V82\"/><path class=\"s\" stroke-width=\"3\" d=\"M78 14 V82\"/><path class=\"s\" stroke-width=\"3\" d=\"M106 14 V82\"/><path class=\"s\" stroke-width=\"3\" d=\"M134 14 V82\"/><path class=\"s\" stroke-width=\"3\" d=\"M162 14 V82\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Marks from one hand</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 96\"><path class=\"s\" stroke-width=\"2.4\" stroke-linecap=\"round\" d=\"M22 13 C25 32 19 52 24 83\"/><path class=\"s\" stroke-width=\"4\" stroke-linecap=\"round\" d=\"M50 16 C46 36 53 56 49 79\"/><path class=\"s\" stroke-width=\"1.8\" stroke-linecap=\"round\" d=\"M78 12 C81 33 75 54 79 81\"/><path class=\"s\" stroke-width=\"3.2\" stroke-linecap=\"round\" d=\"M106 15 C103 35 110 54 105 78\"/><path class=\"s\" stroke-width=\"2.2\" stroke-linecap=\"round\" d=\"M134 14 C137 37 131 56 135 84\"/><path class=\"s\" stroke-width=\"3.6\" stroke-linecap=\"round\" d=\"M162 17 C166 36 160 57 164 80\"/></svg></div></div></div>"
      },
      what: "A mark is the trace of a tool: a brush stroke, a pen line, a pencil smudge, a cursor drag. Gesture is the movement that made it, which stays legible in the result because speed, pressure and hesitation all leave evidence. Klee opens the Pedagogical Sketchbook with the line \"An active line on a walk, moving freely, without goal. A walk for a walk's sake.\" Kandinsky makes the same move analytically: the line is the track of a moving point, created by the destruction of the point's repose.",
      why: "Marks carry evidence of a person, and readers pick that up without being told. A hand-drawn mark reads as warm, made and specific against geometric vector work, which is why it is used to signal craft, and why faking it is so easy to spot.",
      how: [
        "Decide whether you want the hand visible before you choose tools, not after.",
        "If you do, keep genuine variation: repeated identical strokes read as a texture, not as a hand.",
        "Do not simulate a hand with a filter over vector artwork; the variation is wrong at the ends and the pressure is flat.",
        "Keep marks in one family, made with one tool, so they read as coming from a single person."
      ],
      example: "A scanned brush stroke used as a section divider against a one-pixel rule. Both separate two blocks of content; only one of them tells you anything about who made the page.",
      numbers: "",
      pitfall: "A single hand-drawn flourish is dropped into an otherwise strictly geometric system, where it reads as an accident rather than as a choice.",
      source: "Paul Klee, Pedagogical Sketchbook (1925); Wassily Kandinsky, Point and Line to Plane (1926).",
      verify: { status: "verified", note: "Klee's opening line checked against multiple independent quotations of the Pedagogical Sketchbook, which agree word for word, and dated to the 1925 Bauhaus book with the standard English translation of 1953. Kandinsky's line quoted from Bauhaus book 9: \"The geometric line is an invisible thing. It is the track made by the moving point; that is, its product.\" Folklore flag: the famous paraphrases, \"a line is a dot that went for a walk\" and \"drawing is the art of taking a line for a walk\", are both in wide circulation and neither is Klee's wording; do not quote either as his." },
      belongs: { verdict: "core", why: "Mark-making is the physical basis of drawing, lettering and illustration, and the deliberate choice to show or hide the hand is a live decision in brand work." },
      related: [52, 489, 731, 846]
    },

    {
      n: 80,
      title: "Gravity (implied)",
      aka: ["Felt weight", "Implied stability"],
      oneLine: "The heaviness and stability we read into shapes that have neither.",
      demo: {
        caption: "The same shape twice on one ground line. Standing it on the narrow edge is all it takes to look precarious.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Wide base</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 118\"><path class=\"f-mute\" d=\"M40 98 H140 L118 30 H62 Z\"/><path class=\"s-mute\" d=\"M10 98 H170\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Narrow base</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 118\"><path class=\"f-mute\" d=\"M62 98 H118 L140 30 H40 Z\"/><path class=\"s-mute\" d=\"M10 98 H170\"/></svg></div></div></div>"
      },
      what: "Gravity is one of Wong's four relational elements, and he is blunt about what it is: \"The sense of gravity is not visual but psychological.\" Because we are pulled downwards all day, we attribute heaviness or lightness, stability or instability, to individual shapes and to groups of them. Nothing in the marks themselves is heavy. Wong groups gravity with space as an element that is felt rather than perceived.",
      why: "Implied gravity explains a set of corrections that otherwise look like superstition: why the optical centre sits above the mathematical centre, why bottom-heavy letterforms feel stable, why an object placed near the top of a frame reads as precarious, and why a shape with a narrow base reads as about to fall.",
      how: [
        "Place things at optical centre, slightly above mathematical centre, and check by eye rather than by measurement.",
        "Give a visually heavy element something beneath it to rest on.",
        "Use instability deliberately when you want energy, and remove it when you want authority.",
        "Flip a layout vertically to test it. Problems with implied gravity become obvious immediately."
      ],
      example: "Set a circle and a square to the same nominal height on a baseline. The circle has to be drawn slightly larger and to overshoot the line, or it looks smaller and looks as though it is sinking.",
      numbers: "",
      pitfall: "A logo is centred inside its clear-space box by measurement and ships looking dropped, because nobody checked it by eye against the box it actually appears in.",
      source: "Wucius Wong, Principles of Form and Design (1993).",
      verify: { status: "verified", note: "Quoted directly from Wong's list of relational elements in the scan of Principles of Form and Design at robertcarlsen.net: \"Gravity - The sense of gravity is not visual but psychological. As we are pulled by the gravity of the earth, we tend to attribute heaviness or lightness, stability or instability to individual shapes or groups of shapes.\" The same sentence appears in Principles of Two-Dimensional Design. The optical-centre and overshoot practices in this entry are standard studio craft rather than claims of Wong's." },
      belongs: { verdict: "adjacent", why: "Borrowed from bodily experience and psychology rather than from anything in the marks, as Wong says himself. Its design use is specific: it is why optical centre sits above mathematical centre, why overshoot is drawn into round letterforms, and why a composition reads as settled or about to topple." },
      related: [71, 150, 152, 354]
    },

    {
      n: 81,
      title: "Conceptual elements (point, line, plane, volume)",
      aka: ["Wong's first group"],
      oneLine: "The four invisible constructs a design is structured on: point, line, plane and volume.",
      demo: {
        caption: "Each is the path of the one before it: the mark at the left of each panel is what moved.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 96\"><circle class=\"f\" cx=\"30\" cy=\"44\" r=\"4.5\"/><text class=\"t\" x=\"30\" y=\"84\" text-anchor=\"middle\">point</text><circle class=\"f-mute\" cx=\"70\" cy=\"44\" r=\"4.5\"/><path class=\"s\" d=\"M70 44 H122\"/><path class=\"s-accent\" d=\"M116 39 L122 44 L116 49\"/><text class=\"t\" x=\"96\" y=\"84\" text-anchor=\"middle\">line</text><rect class=\"f-mute\" x=\"156\" y=\"24\" width=\"56\" height=\"40\"/><path class=\"s\" d=\"M156 24 V64\"/><path class=\"s-accent\" d=\"M218 38 L224 44 L218 50\"/><text class=\"t\" x=\"184\" y=\"84\" text-anchor=\"middle\">plane</text><rect class=\"f-mute\" x=\"246\" y=\"34\" width=\"44\" height=\"32\"/><rect class=\"s\" x=\"258\" y=\"22\" width=\"44\" height=\"32\"/><rect class=\"s\" x=\"246\" y=\"34\" width=\"44\" height=\"32\"/><path class=\"s\" d=\"M246 34 L258 22\"/><path class=\"s\" d=\"M290 66 L302 54\"/><path class=\"s\" d=\"M246 66 L258 54\"/><path class=\"s-accent\" d=\"M290 34 L302 22\"/><path class=\"s-accent\" d=\"M295 22 H302 V29\"/><text class=\"t\" x=\"274\" y=\"84\" text-anchor=\"middle\">volume</text></svg></div>"
      },
      what: "Wong's first group, and the one people find strangest. His own words: conceptual elements are not visible, they do not actually exist but seem to be present. A point marks position with no length or breadth. A line is the path of a moving point. A plane is the path of a moving line. A volume is the path of a moving plane, and on a flat surface it is illusory. The moment one of them can be seen it stops being conceptual and becomes a form.",
      why: "The distinction stops you confusing the structure of a design with its rendering. The corner of a photograph is a point although no dot is printed there. A column of aligned text edges is a line although no rule is drawn. Most of the structure in good work is conceptual, and drawing all of it is what makes a page look busy.",
      how: [
        "Sketch the conceptual structure, the points and lines you can feel, before you make any marks.",
        "Go through a finished layout asking which lines are drawn and which are implied, then try deleting the drawn ones.",
        "Name the two or three points that anchor a composition, and check that nothing competes with them.",
        "Treat alignment as a line, because that is what the reader sees."
      ],
      example: "A newspaper page has dozens of conceptual lines, one down each column edge, and very few drawn ones. Remove the drawn rules and it still reads as a grid.",
      numbers: "",
      pitfall: "A designer draws every structural line they can feel, and the result is a diagram of the grid rather than a design that uses it.",
      source: "Wucius Wong, Principles of Two-Dimensional Design (1972) and Principles of Form and Design (1993).",
      verify: { status: "verified", note: "The quotation \"Conceptual elements are not visible. They do not actually exist but seem to be present\" and the four definitions were checked against reproductions of Wong's Principles of Two-Dimensional Design, and against the scan of Principles of Form and Design at robertcarlsen.net, which reads: \"the conceptual elements are not visible. Thus point, line, or plane, when visible, becomes form... Volume remains illusory in two-dimensional design.\" The same four appear as \"the primary elements of point, line, plane, and volume\" in the full text of Ching's Architecture: Form, Space and Order." },
      belongs: { verdict: "core", why: "Carries a claim beyond its four members: the structure you design with is mostly invisible, which changes how you draw." },
      related: [51, 52, 53, 54, 82]
    },

    {
      n: 82,
      title: "Visual elements (shape, size, colour, texture)",
      aka: ["Wong's second group"],
      oneLine: "The four properties a mark acquires the instant it becomes visible: shape, size, colour, texture.",
      demo: {
        caption: "Every line here answers the same brief, add a divider. Nobody named shape, size, colour or texture, so each got chosen.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><span class=\"db-note\">brief: add a divider</span><div class=\"db-row db-row--nowrap\"><div style=\"flex:1 1 0;height:1px;background:var(--ink-4)\"></div><span class=\"db-note\" style=\"flex:0 0 142px\">1px / grey / solid</span></div><div class=\"db-row db-row--nowrap\"><div style=\"flex:1 1 0;height:4px;background:var(--ink)\"></div><span class=\"db-note\" style=\"flex:0 0 142px\">4px / ink / solid</span></div><div class=\"db-row db-row--nowrap\"><div style=\"flex:1 1 0;border-top:1px dotted var(--ink)\"></div><span class=\"db-note\" style=\"flex:0 0 142px\">1px / ink / dotted</span></div><div class=\"db-row db-row--nowrap\"><div style=\"flex:1 1 0\"><div style=\"width:40%;height:2px;background:var(--accent)\"></div></div><span class=\"db-note\" style=\"flex:0 0 142px\">40% / accent / solid</span></div></div></div>"
      },
      what: "Wong's second group, and the only elements you can actually see. His claim is stronger than a list. A conceptual element becomes visible only by taking on all four at once, so a point drawn on paper immediately has a shape, a size, a colour and a texture, whether or not anyone chose them. He calls the visual elements the most prominent part of a design because they are what is actually there.",
      why: "This kills the idea that you can settle a shape now and deal with the rest later. Every mark is four decisions, and three of them get made by whoever implements it if the designer leaves them open.",
      how: [
        "Review every element against all four properties, not just the one being argued about.",
        "When something is not working, run through the four before redrawing anything.",
        "Write component specs in terms of the four so nothing is left to a default.",
        "Change one property at a time in exploration, so you find out which one was carrying the problem."
      ],
      example: "A grey divider is four decisions: a rectangle, one pixel by full width, a specific grey, solid rather than dotted. Leave any of them unstated and someone else picks it.",
      numbers: "",
      pitfall: "A review argues about shape for an hour and hands colour and texture to a developer's defaults, then the same review happens again a sprint later about the result.",
      source: "Wucius Wong, Principles of Form and Design (1993).",
      verify: { status: "verified", note: "Read verbatim from the scan of Principles of Form and Design at robertcarlsen.net: \"when conceptual elements become visible, they have shape, size, color, and texture. Visual elements form the most prominent part of a design because they are what we can actually see.\" Wong's individual definitions of shape, size, colour and texture were read in the same passage and are quoted at 55, 60, 63 and 64." },
      belongs: { verdict: "core", why: "The grouping carries a claim its members do not: visibility is a package of four properties, never one." },
      related: [55, 60, 63, 64, 81]
    },

    {
      n: 83,
      title: "Relational elements (direction, position, space, gravity)",
      aka: ["Wong's third group"],
      oneLine: "The four elements that govern placement rather than form: direction, position, space and gravity.",
      demo: {
        caption: "Two identical cards on the same guides. Neither has been redrawn; the right one simply sits seven pixels off the grid.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 132\"><path class=\"s-mute\" d=\"M0 12 H10 M152 12 H168 M310 12 H320\"/><path class=\"s-mute\" d=\"M0 36 H10 M152 36 H168 M310 36 H320\"/><path class=\"s-mute\" d=\"M0 60 H10 M152 60 H168 M310 60 H320\"/><path class=\"s-mute\" d=\"M0 84 H10 M152 84 H168 M310 84 H320\"/><path class=\"s-mute\" d=\"M0 108 H10 M152 108 H168 M310 108 H320\"/><rect class=\"s\" x=\"14\" y=\"36\" width=\"134\" height=\"72\"/><rect class=\"f\" x=\"26\" y=\"48\" width=\"64\" height=\"8\"/><rect class=\"f-mute\" x=\"26\" y=\"68\" width=\"110\" height=\"5\"/><rect class=\"f-mute\" x=\"26\" y=\"80\" width=\"110\" height=\"5\"/><rect class=\"f-mute\" x=\"26\" y=\"92\" width=\"72\" height=\"5\"/><rect class=\"s\" x=\"172\" y=\"43\" width=\"134\" height=\"72\"/><rect class=\"f\" x=\"184\" y=\"55\" width=\"64\" height=\"8\"/><rect class=\"f-mute\" x=\"184\" y=\"75\" width=\"110\" height=\"5\"/><rect class=\"f-mute\" x=\"184\" y=\"87\" width=\"110\" height=\"5\"/><rect class=\"f-mute\" x=\"184\" y=\"99\" width=\"72\" height=\"5\"/><text class=\"t\" x=\"81\" y=\"128\" text-anchor=\"middle\">on the grid</text><text class=\"t\" x=\"239\" y=\"128\" text-anchor=\"middle\">seven pixels off</text></svg></div>"
      },
      what: "Wong's third group governs the placement and interrelationship of shapes rather than the shapes themselves. He splits the four by how we get at them: direction and position are perceived, while space and gravity are felt. Direction depends on the viewer, the frame and the neighbours. Position is judged against the frame or against the structure underneath the design. Space can be occupied or blank, flat or illusory. Gravity, in his words, is psychological rather than visual.",
      why: "The group separates two jobs that get muddled in reviews: drawing the thing, and placing the thing. A large share of layout problems are relational, which means redrawing the element cannot fix them and only moving it can.",
      how: [
        "When a composition is not working, change relational elements before you touch the forms.",
        "Fix the perceived pair first, position and direction, then check the felt pair.",
        "Review a layout with the text greeked so you see relationships rather than content.",
        "Log the fault as relational or formal when you write it up, so the next person does not redraw a working component."
      ],
      example: "Two identical cards feel different when one sits on the baseline grid and the other floats a few pixels off it. Nothing about the card has changed.",
      numbers: "",
      pitfall: "A team redesigns a component over two sprints when the actual fault was that it sat eleven pixels out of alignment with everything around it.",
      source: "Wucius Wong, Principles of Form and Design (1993).",
      verify: { status: "verified", note: "Wong's own framing, read verbatim from the scan of Principles of Form and Design at robertcarlsen.net: \"This group of elements governs the placement and interrelationship of the shapes in a design. Some are to be perceived, such as direction and position; some are to be felt, such as space and gravity.\" His definitions of all four were read in the same passage." },
      belongs: { verdict: "core", why: "Names a distinction that changes how a designer diagnoses a problem: form faults and placement faults need different fixes." },
      related: [58, 66, 68, 80]
    },

    {
      n: 84,
      title: "Practical elements (representation, meaning, function)",
      aka: ["Wong's fourth group"],
      oneLine: "What a design depicts, what it says and what it does; named by Wong, then set aside.",
      demo: {
        caption: "One mark, three layers: what it depicts, what it says, and what it does. Each is a separate decision.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 92\"><path class=\"s\" d=\"M52 16 V27\"/><path class=\"s\" d=\"M46 22 L52 30 L58 22\"/><path class=\"s\" d=\"M43 31 V36 H61 V31\"/><text class=\"t\" x=\"52\" y=\"80\" text-anchor=\"middle\">depicts</text><path class=\"s\" d=\"M158 16 V27\"/><path class=\"s\" d=\"M152 22 L158 30 L164 22\"/><path class=\"s\" d=\"M149 31 V36 H167 V31\"/><text class=\"t\" x=\"158\" y=\"52\" text-anchor=\"middle\">Download invoice</text><text class=\"t\" x=\"158\" y=\"80\" text-anchor=\"middle\">means</text><rect class=\"s\" x=\"214\" y=\"20\" width=\"92\" height=\"32\" rx=\"3\"/><path class=\"s\" d=\"M226 27 V34\"/><path class=\"s\" d=\"M222 31 L226 35.5 L230 31\"/><path class=\"s\" d=\"M220 37 V40 H232 V37\"/><text class=\"t\" x=\"240\" y=\"39\">Download</text><text class=\"t\" x=\"260\" y=\"80\" text-anchor=\"middle\">does</text></svg></div>"
      },
      what: "Wong's fourth group, and the one he waves through. He says the practical elements underlie the content and extension of a design, that they are beyond the scope of his book, and that he would like to mention them anyway, which is a fair description of how the group has been treated ever since. Representation is when a shape is derived from nature or the man-made world, graded realistic, stylised or near-abstract. Meaning is present when the design conveys a message. Function is present when the design serves a purpose.",
      why: "These are the elements a client actually judges. This is also the seam where visual language hands over to content, copy and product, so leaving it unnamed is how a project ends up with beautiful form and no answer to what the thing is for.",
      how: [
        "Settle the practical elements in the brief before touching the visual ones.",
        "Choose the level of representation deliberately: realistic, stylised or near-abstract, each with a reason.",
        "Carry meaning on more than one channel, so it survives a reader who does not decode the picture.",
        "State the function in one sentence and check the finished design against that sentence."
      ],
      example: "A download icon: a downward arrow into a tray is representational at one remove, means save this file locally, and functions as the control you press. All three have to be right or the icon fails.",
      numbers: "",
      pitfall: "Because Wong bracketed this group off, teaching skips it, and students arrive fluent in form and unable to say what a piece of work is supposed to achieve.",
      source: "Wucius Wong, Principles of Form and Design (1993).",
      verify: { status: "verified", note: "Read verbatim from the scan of Principles of Form and Design at robertcarlsen.net: \"The practical elements underlie the content and extension of a design. They are beyond the scope of this book, but I would like to mention them here\", followed by the three definitions. Correction to the original entry, which said Wong names the three and then sets them aside: he sets them aside first and names them second, which is the sharper point." },
      belongs: { verdict: "adjacent", why: "A genuine design fundamental, but misfiled here, which is why it is adjacent rather than core: representation, meaning and function are content and purpose rather than visual language, and they are covered more fully at 17, at 478 and in section 16." },
      related: [17, 478, 492, 662]
    },

    {
      n: 9080,
      title: "Time and motion as elements",
      aka: ["Duration", "Change over time"],
      oneLine: "Once a design changes over time, order and duration become elements you place, like any other.",
      demo: {
        caption: "Watch the three marks. Fading together says nothing; staggering the same fade creates an order that exists only in time.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">All at once</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><span class=\"db-dot db-dot--lg db-anim db-anim--fade db-anim--ease\"></span><span class=\"db-dot db-dot--lg db-anim db-anim--fade db-anim--ease\"></span><span class=\"db-dot db-dot--lg db-anim db-anim--fade db-anim--ease\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">In order</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre\"><span class=\"db-dot db-dot--lg db-anim db-anim--fade db-anim--ease\"></span><span class=\"db-dot db-dot--lg db-anim db-anim--fade db-anim--ease\" style=\"animation-delay:0.3s\"></span><span class=\"db-dot db-dot--lg db-anim db-anim--fade db-anim--ease\" style=\"animation-delay:0.6s\"></span></div></div></div></div>"
      },
      what: "Every element above assumes a still surface. On a screen that is rarely true. Dondis ends her list of the basic elements of visual communication with movement, and says it is more often implied in the visual mode than actually expressed. Lupton and Phillips give Time and Motion a chapter in Graphic Design: The New Basics, treating it as a basic rather than an afterthought. Treated as an element, time gives you three things to specify: what changes, in what order, and over how long.",
      why: "Most design now runs on surfaces that change. If time is not part of the vocabulary, motion arrives at the end as decoration chosen by whoever implements it, and it ends up describing nothing about the structure of the thing.",
      how: [
        "Decide what changes and in what order before choosing any easing curve or library.",
        "Treat a sequence as a composition in time, with the same hierarchy rules as a still layout.",
        "Use motion to explain where something came from and where it went, not to add interest.",
        "Provide a still alternative for anyone who has asked their system to reduce motion."
      ],
      example: "A list item that expands into a detail view, with the item itself growing into the new panel. The movement tells you where you came from, which no single still frame can.",
      numbers: "",
      pitfall: "A motion library is picked before anyone has decided what the motion is meant to communicate, and every transition ends up with the same 300 millisecond fade because it was the default.",
      source: "Donis A. Dondis, A Primer of Visual Literacy (1973); Ellen Lupton and Jennifer Cole Phillips, Graphic Design: The New Basics (2008).",
      verify: { status: "verified", note: "Added because the master list has no element covering time in this section, although section 18 covers animation craft at length. The Time and Motion chapter confirmed in the chapter list for Graphic Design: The New Basics held by the Internet Archive. Upgraded from the author's hedge on Dondis: I have now read her printed list in the text of A Primer of Visual Literacy, which reads \"the dot, line, shape, direction, tone, color, texture, dimension, scale, movement\", and her chapter on movement, which opens \"The visual element of movement, like dimension, is more often implied in the visual mode than actually expressed.\" Her word is movement, not motion, and the entry has been corrected to use it. The 300 millisecond figure in the pitfall is named as a common library default, not as a recommended duration." },
      belongs: { verdict: "core", why: "A basic element in two of the standard texts, and the missing piece in a list of visual elements written for screens." },
      related: [111, 721, 733, 753]
    }
  ]
};
