window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[12] = {
  n: 12,
  slug: "image",
  title: "Image, photography and iconography",
  blurb: "How photographs, illustrations and icons get framed, treated, cropped, delivered and captioned so they earn their place.",
  intro: "This family of ideas covers pictures: how they are made, chosen, cropped, treated, delivered and labelled. Much of the vocabulary comes from photography and cinema, where framing, lighting and tonal control were worked out long before screens existed. Some comes from print, where a duotone was a way of getting more tonal range out of two inks. The rest is engineering and standards work, covering file formats, pixel density, alt text, icon grids and the ISO safety symbols. A designer rarely takes the photograph, but almost always decides which frame runs, how it crops at each screen width, what it sits beside and what the caption says.",
  sources: [
    "John Thomas Smith, Remarks on Rural Scenery (1797)",
    "Henri Cartier-Bresson, Images a la sauvette (Teriade, 1952), published in English as The Decisive Moment (Simon and Schuster, 1952)",
    "Ansel Adams and Fred Archer, the Zone System, set out in Ansel Adams, The Negative (1948; revised edition with Robert Baker, 1981)",
    "Roland Barthes, Rhetorique de l'image, Communications 4 (1964); English translation in Image Music Text, trans. Stephen Heath (1977), pp. 32-51",
    "Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981)",
    "Otto Neurath and Gerd Arntz, Isotype (Vienna Method of Pictorial Statistics, 1925-1934)",
    "AIGA and US Department of Transportation, Symbol Signs (Roger Cook and Don Shanosky, 1974; expanded 1979)",
    "ISO 7001 Public information symbols (first published 1980; ISO 7001:2023)",
    "ISO 7010 Safety signs (2003) and ISO 3864 Graphical symbols, safety colours and safety signs",
    "UN Globally Harmonized System of Classification and Labelling of Chemicals; OSHA Hazard Communication Standard pictograms",
    "W3C, Web Content Accessibility Guidelines 2.2 (2023), Success Criteria 1.1.1 and 1.4.3",
    "Google, Material Design 2 system icon guidance (m2.material.io)",
    "Apple, Human Interface Guidelines: Images",
    "MDN Web Docs, Responsive images and Image file type and format guide",
    "web.dev, Optimize Cumulative Layout Shift",
    "Jakob Nielsen, Photos as Web Content (Nielsen Norman Group, 31 October 2010)",
    "Aurora Harley, Icon Usability (Nielsen Norman Group, 27 July 2014)",
    "Dean Jackson, Improving Color on the Web (WebKit, 1 July 2016)"
  ],
  entries: [
    {
      n: 464,
      title: "Subject placement",
      aka: ["Rule of thirds"],
      oneLine: "Where the main subject sits in the frame decides what a viewer reads first.",
      demo: {
        caption: "Left, everything lands on the halves. Right, the horizon sits on the lower third and the subject on a crossing.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Centred by reflex</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 142\"><rect class=\"s-mute\" x=\"6\" y=\"6\" width=\"188\" height=\"118\"/><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M100 6 V124\"/><path class=\"s\" d=\"M6 65 H194 M100 65 V49\"/><circle class=\"f\" cx=\"100\" cy=\"38\" r=\"11\"/><text class=\"t\" x=\"6\" y=\"138\">horizon at 50, subject at 50</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Placed on the thirds</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 142\"><rect class=\"s-mute\" x=\"6\" y=\"6\" width=\"188\" height=\"118\"/><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M68.7 6 V124 M131.3 6 V124 M6 45.3 H194 M6 84.7 H194\"/><path class=\"s\" d=\"M6 84.7 H194 M68.7 84.7 V56\"/><circle class=\"f\" cx=\"68.7\" cy=\"45.3\" r=\"11\"/><path class=\"s-accent\" d=\"M80 106 H190 M80 102 V110 M190 102 V110\"/><text class=\"t\" x=\"96\" y=\"122\">two thirds open</text><text class=\"t\" x=\"6\" y=\"138\">horizon at 66.7, subject on 33.3</text></svg></div></div></div>"
      },
      what: "The best-known version is the rule of thirds: divide the frame into thirds each way and put the subject on a line or a crossing. John Thomas Smith set the idea down in Remarks on Rural Scenery in 1797, arguing for a ratio of about two thirds to one third as a better proportion than the precise formal half. He was writing about landscape painting and where to put the horizon. Photography borrowed it later, and camera makers turned it into a grid you can switch on in the viewfinder.",
      why: "Dead-centre placement reads as static and formal, which suits a passport photo and little else. Off-centre placement leaves room for the subject to look into or move into, and it gives you somewhere to put type without covering a face. It also forces you to decide what the subject actually is, which is the useful part.",
      how: [
        "Name the subject before you crop, then place it on purpose instead of centring by reflex.",
        "Leave the larger empty area on the side the subject faces or moves towards.",
        "Keep the same placement logic across a set of images so they read as one set.",
        "Go dead centre when centring says something, such as symmetry, formality or confrontation."
      ],
      example: "Smith's own 1797 landscape prescription is more layered than the modern grid. He asks for two thirds of one element, such as water, to one third of another, such as land, with both together making only one third of the picture and the remaining two thirds given to sky and aerial perspective.",
      numbers: "Smith's stated proportion is two thirds to one third. The grid version puts guides at 33.3 and 66.7 per cent of the frame width and height.",
      pitfall: "Treating thirds as a law gives you a set of pictures that all look identical, everything parked on the same crossing. It also encourages cropping to a grid rather than to the content.",
      source: "John Thomas Smith, Remarks on Rural Scenery (1797)",
      verify: { status: "disputed", note: "Attribution checked against Wikipedia's Rule of thirds article, which quotes Smith's 1797 wording (a ratio of about two thirds to one third, better than the precise formal half) and his landscape prescription, and notes he was building on Sir Joshua Reynolds' 1783 Annotations on The Art of Painting. Marked disputed because the same article records George Field's 1845 objection, quoted as: this rule, however, does not supply a general law, but universalises a particular, the invariable observance of which would produce a uniform and monotonous practice. I found nothing establishing the rule as optimal rather than customary." },
      belongs: { verdict: "core", why: "Choosing where the subject sits, and therefore where the crop falls, is a decision a designer makes on almost every image that ships." },
      related: [467, 468, 477, 482]
    },
    {
      n: 465,
      title: "Focal length and perspective compression",
      aka: ["Lens choice", "Telephoto compression"],
      oneLine: "Distance from the subject sets the perspective; the lens only changes how much fits in.",
      demo: {
        caption: "The posts never move. Standing back and using a longer lens is what closes the gap between their apparent heights.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Camera close</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 128\"><path class=\"s-mute\" d=\"M8 100 H202\"/><path class=\"s\" d=\"M140 100 V40 M196 100 V40\"/><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M112 100 L140 40 M112 100 L196 40\"/><polygon class=\"f\" points=\"104,94 104,106 114,100\"/><rect class=\"f-accent\" x=\"124\" y=\"70\" width=\"3\" height=\"30\"/><rect class=\"f-accent\" x=\"131\" y=\"90\" width=\"3\" height=\"10\"/><text class=\"t\" x=\"130\" y=\"34\">near</text><text class=\"t\" x=\"188\" y=\"34\">far</text><text class=\"t\" x=\"8\" y=\"122\">apparent heights 3 : 1</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Camera back</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 128\"><path class=\"s-mute\" d=\"M8 100 H202\"/><path class=\"s\" d=\"M140 100 V40 M196 100 V40\"/><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M10 100 L140 40 M10 100 L196 40\"/><polygon class=\"f\" points=\"2,94 2,106 12,100\"/><rect class=\"f-accent\" x=\"74\" y=\"70\" width=\"3\" height=\"30\"/><rect class=\"f-accent\" x=\"81\" y=\"79\" width=\"3\" height=\"21\"/><text class=\"t\" x=\"130\" y=\"34\">near</text><text class=\"t\" x=\"188\" y=\"34\">far</text><text class=\"t\" x=\"8\" y=\"122\">apparent heights 1.4 : 1</text></svg></div></div></div>"
      },
      what: "Long lenses appear to flatten depth and short lenses appear to stretch it, but the geometry is set by how far the camera stands from the subject, not by the glass. A long lens makes you stand back, and standing back is what compresses the apparent distance between near and far objects. A wide lens invites you close, and being close is what makes a nose look large next to the ears. Two frames shot from the same spot share the same perspective whatever the focal length.",
      why: "Once you know distance is the variable, you can brief a shoot precisely instead of asking for a look. It also explains why a wide-angle interior shot of a small clinic feels cavernous and dishonest.",
      how: [
        "Brief camera distance and framing, not just a focal length.",
        "For faces, ask the photographer to stand back and use a longer lens rather than crowd the subject.",
        "Watch wide-angle property and interior shots for exaggerated size; check them against a plan or a tape measure.",
        "Keep lens treatment consistent across a set, since mixed compression makes people and products look like different sizes."
      ],
      example: "Portrait work on a 35mm frame usually sits between 85mm and 135mm, because those lenses force a working distance that keeps facial proportions natural.",
      numbers: "On a 35mm frame, roughly 85mm to 135mm are the conventional portrait focal lengths.",
      pitfall: "Estate-agent syndrome: an ultra-wide lens in a corner makes a small room look far bigger than it is, and the client complains when visitors arrive. Wide lenses also bend faces near the frame edge.",
      source: "Standard photographic optics; no single originator",
      verify: { status: "verified", note: "Checked against Wikipedia's Perspective distortion article, which states plainly that linear perspective changes are caused by distance, not by the lens as such, and gives 85mm to 135mm as the usual 35mm portrait range." },
      belongs: { verdict: "adjacent", why: "It comes from photographic optics rather than design, but a designer commissioning or selecting photography needs it to brief a shoot and to spot images that misrepresent a space." },
      related: [466, 480, 481]
    },
    {
      n: 466,
      title: "Depth of field",
      aka: ["Selective focus", "Bokeh"],
      oneLine: "The band of distance that is acceptably sharp, and the main tool for isolating a subject.",
      demo: {
        caption: "Same subject, same background. Throwing the background out of focus is what makes the subject read first.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Shallow: background thrown out</span><div class=\"db-stage db-stage--tight\"><div class=\"db-stack\"><div class=\"db-col\" style=\"filter:blur(4px)\"><div class=\"db-row db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div></div><div class=\"db-centre\"><span class=\"db-dot db-dot--lg db-dot--accent\"></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Deep: everything sharp</span><div class=\"db-stage db-stage--tight\"><div class=\"db-stack\"><div class=\"db-col\"><div class=\"db-row db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div><div class=\"db-row db-row--centre\"><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span><span class=\"db-dot db-dot--mute\"></span></div></div><div class=\"db-centre\"><span class=\"db-dot db-dot--lg db-dot--accent\"></span></div></div></div></div></div>"
      },
      what: "Depth of field is the distance between the nearest and furthest things that look acceptably sharp in a picture. Four things move it: aperture, focal length, how close you are to the subject, and how big an out-of-focus blur circle you are willing to call sharp, which is the circle of confusion. Sensor size matters through the same route. Shallow focus lifts a subject off its background; deep focus keeps a whole scene readable.",
      why: "Selective focus is the cheapest way to say what a picture is about, and it does the job before any text arrives. Deep focus is the honest choice when the context is the point, such as a shop floor or a workshop. Choosing between them is an editorial decision, not a technical one.",
      how: [
        "Use shallow focus for a single hero subject and deep focus when the setting carries the message.",
        "Check that the sharp plane lands on the thing that matters, usually the near eye in a portrait.",
        "Avoid heavy background blur behind text; the soft area still competes if it is bright.",
        "Be wary of software-simulated blur on phones; it cuts around hair and glasses badly at large sizes."
      ],
      example: "A product shot at a wide aperture drops the shelf behind into a soft wash so the item reads instantly; the same shot at f/11 keeps the shop context legible.",
      numbers: "Approximate depth of field for a distant subject is 2u squared Nc divided by f squared, where u is subject distance, N the f-number, c the acceptable circle of confusion and f the focal length. Sources disagree on the acceptable circle of confusion for a final image viewed at 25cm: Wikipedia's Depth of field article gives 0.25mm, its Circle of confusion article gives 0.2mm from a five line pairs per millimetre acuity limit. Treat it as 0.2 to 0.25mm rather than a fixed figure.",
      pitfall: "Blur used as a mood effect rather than as a decision about the subject. If the viewer cannot tell what is meant to be sharp, the shallow depth of field is doing nothing but hiding a messy background.",
      source: "Standard photographic optics; no single originator",
      verify: { status: "adjusted", note: "Definition, the four controlling factors and the approximate formula checked against Wikipedia's Depth of field article, which states the circle of confusion as 0.25mm for an image viewed from 25cm. Adjusted because Wikipedia's own Circle of confusion article gives 0.2mm at the same viewing distance, derived from a five line pairs per millimetre acuity limit. The entry now reports the range and the disagreement rather than one figure." },
      belongs: { verdict: "adjacent", why: "Camera physics rather than design theory, but it is how a designer asks for subject isolation and how they judge whether a supplied image will survive having text placed over it." },
      related: [465, 475, 477]
    },
    {
      n: 467,
      title: "Headroom and lead room",
      aka: ["Nose room", "Looking room"],
      oneLine: "The gap above a head and the gap in front of a face or a moving subject.",
      demo: {
        caption: "The dashed line is the upper third. On the right the eyes sit on it, with the bigger gap in front.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Eyes low, nose on the edge</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 152\"><rect class=\"s-mute\" x=\"6\" y=\"6\" width=\"188\" height=\"126\"/><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M6 48 H194\"/><circle class=\"s\" cx=\"140\" cy=\"94\" r=\"24\"/><circle class=\"f\" cx=\"149\" cy=\"86\" r=\"2.5\"/><circle class=\"f\" cx=\"158\" cy=\"86\" r=\"2.5\"/><path class=\"s\" d=\"M108 132 C114 122, 166 122, 172 132\"/><path class=\"s-accent\" d=\"M28 8 V70 M24 8 H32 M24 70 H32\"/><path class=\"s-accent\" d=\"M166 94 H192 M166 90 V98 M192 90 V98\"/><text class=\"t\" x=\"8\" y=\"44\">upper third</text><text class=\"t\" x=\"6\" y=\"148\">headroom 64, lead room 30</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Eyes on the third, lead room ahead</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 152\"><rect class=\"s-mute\" x=\"6\" y=\"6\" width=\"188\" height=\"126\"/><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M6 48 H194\"/><circle class=\"s\" cx=\"76\" cy=\"56\" r=\"24\"/><circle class=\"f\" cx=\"85\" cy=\"48\" r=\"2.5\"/><circle class=\"f\" cx=\"94\" cy=\"48\" r=\"2.5\"/><path class=\"s\" d=\"M44 132 C50 100, 102 100, 108 132\"/><path class=\"s-accent\" d=\"M28 8 V32 M24 8 H32 M24 32 H32\"/><path class=\"s-accent\" d=\"M102 56 H192 M102 52 V60 M192 52 V60\"/><text class=\"t\" x=\"8\" y=\"44\">upper third</text><text class=\"t\" x=\"6\" y=\"148\">headroom 26, lead room 94</text></svg></div></div></div>"
      },
      what: "Headroom is the space between the top of the subject's head and the top of the frame. Lead room, also called nose room or looking room, is the space on the side the subject faces or moves towards. Conventional framing puts the eyes roughly a third of the way down and gives more space in front of the face than behind it. Both amounts change with shot size: a tight close-up can crop the top of the head, while a wide shot usually needs more air.",
      why: "Get these wrong and a picture feels off before anyone can say why. Too much headroom leaves a dead band of ceiling and pushes the face down; too little makes the frame feel cramped. Lead room is what stops a person looking as though they are about to walk into the edge of the layout.",
      how: [
        "Set the eyes near the upper third line and let the top of the head fall where it falls.",
        "Give the larger side gap to the direction of the gaze or the movement.",
        "Recrop supplied images per placement rather than reusing one crop across every slot.",
        "Cut the top of the head deliberately on tight crops instead of shrinking the face to fit it in."
      ],
      example: "Broadcast framing adds a little extra headroom because home viewers see slightly less of the frame than the crew does on a studio monitor, an allowance for overscan.",
      numbers: "Wikipedia's Headroom article puts the home-viewer loss at approximately 5 per cent of the frame area. No fixed headroom measurement is standardised.",
      pitfall: "Automated cropping. Centre-weighted crop tools slice the top off heads on narrow screens and leave a metre of empty sky on wide ones.",
      source: "Standard photographic and broadcast framing practice; no single originator",
      verify: { status: "verified", note: "The definition of headroom, the eyes-on-the-upper-third convention and the roughly 5 per cent broadcast allowance checked against Wikipedia's Headroom (photographic framing) article, which mentions lead room, nose room and looking room as alternative terms but does not define them. Lead room as the space in front of a facing or moving subject checked separately against Wikipedia's Lead room article. No named originator is given in either, and I could not find one." },
      belongs: { verdict: "core", why: "Cropping images to fit layouts is daily design work, and these two are the rules that decide whether a crop looks composed or accidental." },
      related: [464, 468, 482, 483]
    },
    {
      n: 468,
      title: "Eye-line",
      aka: ["Eyeline match", "Gaze direction"],
      oneLine: "Where a person in the picture is looking, and what a viewer expects to find there.",
      demo: {
        caption: "Same portrait, mirrored. On the left the gaze walks the reader off the edge; on the right it returns to the text.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Facing off the page</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 140\"><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"212\" height=\"112\"/><rect class=\"f-mute\" x=\"14\" y=\"28\" width=\"88\" height=\"9\"/><rect class=\"f-mute\" x=\"14\" y=\"48\" width=\"88\" height=\"4\"/><rect class=\"f-mute\" x=\"14\" y=\"58\" width=\"88\" height=\"4\"/><rect class=\"f-mute\" x=\"14\" y=\"68\" width=\"64\" height=\"4\"/><circle class=\"s\" cx=\"162\" cy=\"58\" r=\"26\"/><circle class=\"f\" cx=\"172\" cy=\"50\" r=\"3\"/><circle class=\"f\" cx=\"184\" cy=\"50\" r=\"3\"/><path class=\"s\" d=\"M126 118 C134 84, 190 84, 198 118\"/><path class=\"s-accent\" stroke-dasharray=\"5 3\" d=\"M192 48 L210 42\"/><polygon class=\"f-accent\" points=\"218,39 209,37 211,45\"/><text class=\"t\" x=\"6\" y=\"134\">the gaze leaves the page</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Facing the text</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 140\"><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"212\" height=\"112\"/><rect class=\"f-mute\" x=\"14\" y=\"28\" width=\"88\" height=\"9\"/><rect class=\"f-mute\" x=\"14\" y=\"48\" width=\"88\" height=\"4\"/><rect class=\"f-mute\" x=\"14\" y=\"58\" width=\"88\" height=\"4\"/><rect class=\"f-mute\" x=\"14\" y=\"68\" width=\"64\" height=\"4\"/><circle class=\"s\" cx=\"162\" cy=\"58\" r=\"26\"/><circle class=\"f\" cx=\"140\" cy=\"50\" r=\"3\"/><circle class=\"f\" cx=\"152\" cy=\"50\" r=\"3\"/><path class=\"s\" d=\"M126 118 C134 84, 190 84, 198 118\"/><path class=\"s-accent\" stroke-dasharray=\"5 3\" d=\"M132 48 L114 42\"/><polygon class=\"f-accent\" points=\"106,39 115,37 113,45\"/><text class=\"t\" x=\"6\" y=\"134\">the gaze returns to the copy</text></svg></div></div></div>"
      },
      what: "In film editing, an eyeline match is a cut from someone looking off-screen to the thing they are looking at, and continuity editing relies on it to join two shots into one space. Still layout borrows the idea differently: a face turned towards the headline is supposed to pull the reader's attention that way. The film technique is well documented. The layout claim is weaker, and the popular version circulating in design blogs comes from a commercial eye-tracking demonstration rather than a controlled study.",
      why: "Direction of gaze is a strong compositional signal even if it does not move conversion rates. A face looking out of the page pushes the eye off the edge; a face looking inwards keeps it on the spread.",
      how: [
        "Turn faces towards the content, not off the outside edge of the page or slide.",
        "When a subject looks straight down the lens, treat it as a direct address and give it room rather than burying it beside body text.",
        "On a two-page spread or a split hero, keep the gaze pointing across the gutter or the fold, not away from it.",
        "If someone claims a gaze direction will lift conversion, test it on your own traffic rather than citing the heatmap picture."
      ],
      example: "Alfred Hitchcock's Rear Window is the standard teaching case for eyeline match, cutting between James Stewart looking and what he sees.",
      numbers: "",
      pitfall: "Treating the famous baby-looking-at-the-headline heatmap as settled science. It is a small commercial study, widely reposted, and it measures where eyes go rather than what people buy.",
      source: "Continuity editing practice; the Rear Window example and the definition are documented, but no single originator is credited",
      verify: { status: "disputed", note: "Eyeline match definition and its place in continuity editing checked against Wikipedia's Eyeline match article, which credits no originator. Marked disputed because the design-world version, that pointing a model's gaze at a call to action improves performance, traces back to a widely circulated commercial eye-tracking demonstration and I could not find a peer-reviewed study supporting the conversion claim." },
      belongs: { verdict: "adjacent", why: "The concept is film grammar borrowed into layout; its concrete design use is deciding which way a cropped subject faces relative to the text and the page edge." },
      related: [464, 467, 477, 478]
    },
    {
      n: 469,
      title: "The decisive moment",
      aka: ["Images a la sauvette"],
      oneLine: "The instant when an event and the arrangement of forms in the frame line up.",
      demo: {
        caption: "Five frames of one leap. Only the fourth catches full stride with the heel still clear of its own reflection.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 310 124\"><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"58\" height=\"88\"/><rect class=\"s-mute\" x=\"64\" y=\"6\" width=\"58\" height=\"88\"/><rect class=\"s-mute\" x=\"124\" y=\"6\" width=\"58\" height=\"88\"/><rect class=\"s-accent\" x=\"184\" y=\"6\" width=\"58\" height=\"88\"/><rect class=\"s-mute\" x=\"244\" y=\"6\" width=\"58\" height=\"88\"/><path class=\"s-mute\" d=\"M6 52 H60 M66 52 H120 M126 52 H180 M186 52 H240 M246 52 H300\"/><g><circle class=\"f\" cx=\"22\" cy=\"20\" r=\"4\"/><path class=\"s\" d=\"M22 24 V38 M22 27 L16 35 M22 27 L28 35 M22 38 L19 52 M22 38 L26 52\"/><circle class=\"f\" cx=\"84\" cy=\"24\" r=\"4\"/><path class=\"s\" d=\"M84 28 V40 M84 30 L76 26 M84 30 L92 34 M84 40 L77 52 M84 40 L91 50\"/><circle class=\"f\" cx=\"150\" cy=\"19\" r=\"4\"/><path class=\"s\" d=\"M150 23 V36 M150 26 L141 20 M150 26 L160 28 M150 36 L140 46 M150 36 L159 42\"/><circle class=\"f-accent\" cx=\"214\" cy=\"17\" r=\"4\"/><path class=\"s-accent\" d=\"M214 21 V35 M214 24 L203 16 M214 24 L226 25 M214 35 L201 50 M214 35 L228 43\"/><circle class=\"f\" cx=\"280\" cy=\"21\" r=\"4\"/><path class=\"s\" d=\"M280 25 V39 M280 28 L271 24 M280 28 L288 32 M280 39 L274 52 M280 39 L287 51\"/></g><g transform=\"translate(0,104) scale(1,-1)\" opacity=\"0.32\"><circle class=\"f-mute\" cx=\"22\" cy=\"20\" r=\"4\"/><path class=\"s-mute\" d=\"M22 24 V38 M22 27 L16 35 M22 27 L28 35 M22 38 L19 52 M22 38 L26 52\"/><circle class=\"f-mute\" cx=\"84\" cy=\"24\" r=\"4\"/><path class=\"s-mute\" d=\"M84 28 V40 M84 30 L76 26 M84 30 L92 34 M84 40 L77 52 M84 40 L91 50\"/><circle class=\"f-mute\" cx=\"150\" cy=\"19\" r=\"4\"/><path class=\"s-mute\" d=\"M150 23 V36 M150 26 L141 20 M150 26 L160 28 M150 36 L140 46 M150 36 L159 42\"/><circle class=\"f-accent\" cx=\"214\" cy=\"17\" r=\"4\"/><path class=\"s-accent\" d=\"M214 21 V35 M214 24 L203 16 M214 24 L226 25 M214 35 L201 50 M214 35 L228 43\"/><circle class=\"f-mute\" cx=\"280\" cy=\"21\" r=\"4\"/><path class=\"s-mute\" d=\"M280 25 V39 M280 28 L271 24 M280 28 L288 32 M280 39 L274 52 M280 39 L287 51\"/></g><text class=\"t\" x=\"4\" y=\"106\">1</text><text class=\"t\" x=\"64\" y=\"106\">2</text><text class=\"t\" x=\"124\" y=\"106\">3</text><text class=\"t\" x=\"184\" y=\"106\">4</text><text class=\"t\" x=\"244\" y=\"106\">5</text><text class=\"t\" x=\"4\" y=\"120\">frame 4: full stride, heel still above its reflection</text></svg></div>"
      },
      what: "Henri Cartier-Bresson published Images a la sauvette with Teriade in 1952. He described his aim as the simultaneous recognition, in a fraction of a second, of the significance of an event as well as of a precise organization of forms which give that event its proper expression. The English title, The Decisive Moment, came from Dick Simon at Simon and Schuster, not from Cartier-Bresson. It picks up the book's epigraph from Cardinal de Retz: there is nothing in this world that does not have a decisive moment.",
      why: "For anyone choosing images rather than shooting them, this is a selection criterion. Out of a shoot's worth of frames, one usually has the gesture, the expression and the geometry landing together, and it is rarely the technically cleanest one. Naming what you are looking for makes contact-sheet reviews faster and less political.",
      how: [
        "Review a shoot for the frame where the action reads, then check the technical quality, in that order.",
        "Resist the smoothest frame if a slightly messier one carries the moment.",
        "Brief reportage shoots for sequences rather than single set-ups, so a decisive frame can exist.",
        "Do not stage a candid and call it one; the honesty is the point of the idea."
      ],
      example: "Cartier-Bresson's 1932 photograph behind the Gare Saint-Lazare, a man mid-stride above his own reflection, is the picture the phrase is usually attached to.",
      numbers: "",
      pitfall: "The French title actually means something closer to images taken on the sly. The English phrase has drifted into a general excuse for shooting fast, which is not what the definition says.",
      source: "Henri Cartier-Bresson, Images a la sauvette (1952), published in English as The Decisive Moment",
      verify: { status: "adjusted", note: "Checked against Wikipedia's Henri Cartier-Bresson article. Verified the 1952 Teriade publication, the Simon and Schuster English edition, the de Retz epigraph in French and translation, and Cartier-Bresson's own definition. Adjusted the framing: the master list treats the phrase as his, but the English title was Dick Simon's, and the French title means images on the sly." },
      belongs: { verdict: "adjacent", why: "A photojournalist's doctrine rather than a design principle, but it gives an art director a usable test when picking one frame out of a shoot." },
      related: [464, 475, 481]
    },
    {
      n: 470,
      title: "Key, fill and rim light",
      aka: ["Three-point lighting"],
      oneLine: "One light does the modelling, one opens the shadows, one separates subject from background.",
      demo: {
        caption: "Left, the shadow side is a hole. Adding fill returns detail; adding a back light lifts the edge off the background.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 124\"><rect x=\"6\" y=\"6\" width=\"96\" height=\"96\" fill=\"#454545\"/><circle cx=\"54\" cy=\"54\" r=\"28\" fill=\"#121212\"/><circle cx=\"48\" cy=\"48\" r=\"19\" fill=\"#6e6e6e\"/><circle cx=\"44\" cy=\"44\" r=\"13\" fill=\"#a2a2a2\"/><circle cx=\"41\" cy=\"41\" r=\"7\" fill=\"#d6d6d6\"/><circle cx=\"18\" cy=\"18\" r=\"3\" fill=\"#f0f0f0\"/><path d=\"M20.5 20.5 L32 32\" stroke=\"#f0f0f0\" stroke-width=\"1.2\" fill=\"none\"/><rect x=\"112\" y=\"6\" width=\"96\" height=\"96\" fill=\"#454545\"/><circle cx=\"160\" cy=\"54\" r=\"28\" fill=\"#3f3f3f\"/><circle cx=\"154\" cy=\"48\" r=\"19\" fill=\"#6e6e6e\"/><circle cx=\"150\" cy=\"44\" r=\"13\" fill=\"#a2a2a2\"/><circle cx=\"147\" cy=\"41\" r=\"7\" fill=\"#d6d6d6\"/><circle cx=\"124\" cy=\"18\" r=\"3\" fill=\"#f0f0f0\"/><path d=\"M126.5 20.5 L138 32\" stroke=\"#f0f0f0\" stroke-width=\"1.2\" fill=\"none\"/><circle cx=\"196\" cy=\"22\" r=\"2.2\" fill=\"#8d8d8d\"/><path d=\"M193.8 24.2 L184 34\" stroke=\"#8d8d8d\" stroke-width=\"1\" fill=\"none\"/><rect x=\"218\" y=\"6\" width=\"96\" height=\"96\" fill=\"#454545\"/><circle cx=\"266\" cy=\"54\" r=\"28\" fill=\"#3f3f3f\"/><circle cx=\"260\" cy=\"48\" r=\"19\" fill=\"#6e6e6e\"/><circle cx=\"256\" cy=\"44\" r=\"13\" fill=\"#a2a2a2\"/><circle cx=\"253\" cy=\"41\" r=\"7\" fill=\"#d6d6d6\"/><path d=\"M292.31 44.42 A28 28 0 0 1 256.42 80.31\" stroke=\"#ededed\" stroke-width=\"3.5\" fill=\"none\"/><circle cx=\"230\" cy=\"18\" r=\"3\" fill=\"#f0f0f0\"/><path d=\"M232.5 20.5 L244 32\" stroke=\"#f0f0f0\" stroke-width=\"1.2\" fill=\"none\"/><circle cx=\"302\" cy=\"22\" r=\"2.2\" fill=\"#8d8d8d\"/><path d=\"M299.8 24.2 L290 34\" stroke=\"#8d8d8d\" stroke-width=\"1\" fill=\"none\"/><circle cx=\"300\" cy=\"88\" r=\"2.6\" fill=\"#f0f0f0\"/><path d=\"M297.8 85.8 L288 76\" stroke=\"#f0f0f0\" stroke-width=\"1.1\" fill=\"none\"/><text class=\"t\" x=\"6\" y=\"118\">key only</text><text class=\"t\" x=\"112\" y=\"118\">key + fill</text><text class=\"t\" x=\"218\" y=\"118\">key + fill + back</text></svg></div>"
      },
      what: "The key light is the main source and sets the overall look through its strength, colour and angle. The fill sits at a side angle to the key, is softer and dimmer, and lifts the shadows so they keep detail. The back or rim light comes from behind and draws a bright edge around the subject so it does not merge into the background. Change the ratio between key and fill and you change the whole mood without moving a lamp.",
      why: "It gives you language for a shoot instead of adjectives. Asking for less fill is specific; asking for something moodier is not. The same three roles explain why a UI element with only a flat shadow looks stuck on, while one with a soft shadow and a faint top highlight reads as a raised surface.",
      how: [
        "Fix the key angle first, since it decides where the shadows fall.",
        "Set the fill by how much shadow detail you need, not by symmetry with the key.",
        "Add a rim when the subject and background are close in tone, which is common in dark product shots.",
        "Keep the same lighting scheme across a product set so the objects look photographed on the same day."
      ],
      example: "Standard interview and talking-head setups use exactly this arrangement, which is why they all share a family look.",
      numbers: "The fill is conventionally softer and up to half the brightness of the key. No single ratio is standardised.",
      pitfall: "Filling until the shadows disappear. The result is flat and cheap-looking, and it removes the modelling that told the viewer what shape the object is.",
      source: "Standard film, television and studio photography practice; no single originator documented",
      verify: { status: "verified", note: "Definitions of key, fill and back light and the up to half the amount fill guidance checked against Wikipedia's Three-point lighting article. That article gives no origin story and no other ratios, so I have not claimed either." },
      belongs: { verdict: "adjacent", why: "It is lighting craft from film and photography; the design use is briefing and judging commissioned images, and it is the same mental model behind shadow and depth in interfaces." },
      related: [471, 472, 473, 480]
    },
    {
      n: 471,
      title: "High key and low key",
      aka: ["Lighting ratio"],
      oneLine: "High key means bright and low contrast; low key means dark with small lit areas.",
      demo: {
        caption: "The strip below each picture is one black-to-white scale. The accent marks show which part of it the picture uses.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">High key</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 148\"><rect x=\"6\" y=\"6\" width=\"188\" height=\"84\" fill=\"#ededed\"/><rect x=\"6\" y=\"72\" width=\"188\" height=\"18\" fill=\"#e2e2e2\"/><ellipse cx=\"100\" cy=\"84\" rx=\"42\" ry=\"5\" fill=\"#dedede\"/><circle cx=\"100\" cy=\"52\" r=\"26\" fill=\"#c9c9c9\"/><rect x=\"8\" y=\"98\" width=\"20\" height=\"12\" fill=\"#000000\"/><rect x=\"28\" y=\"98\" width=\"20\" height=\"12\" fill=\"#202020\"/><rect x=\"48\" y=\"98\" width=\"20\" height=\"12\" fill=\"#404040\"/><rect x=\"68\" y=\"98\" width=\"20\" height=\"12\" fill=\"#606060\"/><rect x=\"88\" y=\"98\" width=\"20\" height=\"12\" fill=\"#808080\"/><rect x=\"108\" y=\"98\" width=\"20\" height=\"12\" fill=\"#a0a0a0\"/><rect x=\"128\" y=\"98\" width=\"20\" height=\"12\" fill=\"#c0c0c0\"/><rect x=\"148\" y=\"98\" width=\"20\" height=\"12\" fill=\"#e0e0e0\"/><rect x=\"168\" y=\"98\" width=\"20\" height=\"12\" fill=\"#ffffff\"/><rect class=\"f-accent\" x=\"128\" y=\"113\" width=\"60\" height=\"3\"/><text class=\"t\" x=\"8\" y=\"130\">tones bunched at the light end</text><text class=\"t\" x=\"8\" y=\"144\">black to white</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Low key</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 148\"><rect x=\"6\" y=\"6\" width=\"188\" height=\"84\" fill=\"#191919\"/><rect x=\"6\" y=\"72\" width=\"188\" height=\"18\" fill=\"#141414\"/><circle cx=\"100\" cy=\"52\" r=\"26\" fill=\"#2e2e2e\"/><circle cx=\"92\" cy=\"44\" r=\"16\" fill=\"#6a6a6a\"/><circle cx=\"88\" cy=\"40\" r=\"8\" fill=\"#b4b4b4\"/><rect x=\"8\" y=\"98\" width=\"20\" height=\"12\" fill=\"#000000\"/><rect x=\"28\" y=\"98\" width=\"20\" height=\"12\" fill=\"#202020\"/><rect x=\"48\" y=\"98\" width=\"20\" height=\"12\" fill=\"#404040\"/><rect x=\"68\" y=\"98\" width=\"20\" height=\"12\" fill=\"#606060\"/><rect x=\"88\" y=\"98\" width=\"20\" height=\"12\" fill=\"#808080\"/><rect x=\"108\" y=\"98\" width=\"20\" height=\"12\" fill=\"#a0a0a0\"/><rect x=\"128\" y=\"98\" width=\"20\" height=\"12\" fill=\"#c0c0c0\"/><rect x=\"148\" y=\"98\" width=\"20\" height=\"12\" fill=\"#e0e0e0\"/><rect x=\"168\" y=\"98\" width=\"20\" height=\"12\" fill=\"#ffffff\"/><rect class=\"f-accent\" x=\"8\" y=\"113\" width=\"60\" height=\"3\"/><rect class=\"f-accent\" x=\"128\" y=\"113\" width=\"20\" height=\"3\"/><text class=\"t\" x=\"8\" y=\"130\">dark, with one small highlight</text><text class=\"t\" x=\"8\" y=\"144\">black to white</text></svg></div></div></div>"
      },
      what: "The names come from the balance between key and fill in a three-point setup. High-key lighting reduces the lighting ratio so the scene is evenly bright with few strong shadows. Low key does the opposite, letting most of the frame fall dark and lighting only part of the subject. High key became standard in classical Hollywood partly for technical reasons, because early film and television handled high contrast badly.",
      why: "It is the fastest way to set the emotional register of a whole image library. A clinic that wants to read as calm and clean needs a high-key set; a whisky brand that wants weight needs a low-key one. Deciding this once saves arguing about individual photographs later.",
      how: [
        "Pick one register for a brand's photography and write it into the guidelines.",
        "Match illustration and UI backgrounds to the same register, or the photographs will look imported.",
        "Check text overlays against the register: high-key images kill white type, low-key images kill dark type.",
        "Ask for a lighting ratio in the brief rather than a mood word."
      ],
      example: "Sitcom and daytime television lighting is high key; film noir and most spirits advertising is low key.",
      numbers: "",
      pitfall: "Shorthand that hardens into rules, such as high key equals happy. The register sets an expectation; the content still decides the meaning.",
      source: "Film and television lighting practice; term derives from the key-to-fill ratio",
      verify: { status: "verified", note: "Checked against Wikipedia's High-key lighting article, which defines high key as reducing the lighting ratio, derives the name from the key-to-fill balance, and notes the early technical reason for its adoption. That article gives no numeric ratios, so the numbers field is empty rather than filled with a plausible figure. Its treatment of low key is thin, so I have described low key only as the converse." },
      belongs: { verdict: "adjacent", why: "Lighting vocabulary from film, useful to a designer as the single decision that makes a whole photo library feel consistent." },
      related: [470, 472, 473, 474]
    },
    {
      n: 472,
      title: "Chiaroscuro",
      aka: ["Light-dark modelling", "Tenebrism (extreme form)"],
      oneLine: "Strong light and dark contrast used either to model volume or to drive a whole composition.",
      demo: {
        caption: "Same circle, same size, same ground. Stepping the light across it, and dropping a shadow, turns a disc into a solid.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Flat fill</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 118\"><rect x=\"6\" y=\"6\" width=\"188\" height=\"104\" fill=\"#cfcfcf\"/><circle cx=\"100\" cy=\"58\" r=\"34\" fill=\"#838383\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Graded light and a cast shadow</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 118\"><rect x=\"6\" y=\"6\" width=\"188\" height=\"104\" fill=\"#cfcfcf\"/><ellipse cx=\"118\" cy=\"96\" rx=\"42\" ry=\"7\" fill=\"#a8a8a8\"/><circle cx=\"100\" cy=\"58\" r=\"34\" fill=\"#3b3b3b\"/><circle cx=\"94\" cy=\"52\" r=\"25\" fill=\"#5f5f5f\"/><circle cx=\"89\" cy=\"47\" r=\"18\" fill=\"#8b8b8b\"/><circle cx=\"85\" cy=\"43\" r=\"11\" fill=\"#b6b6b6\"/><circle cx=\"83\" cy=\"41\" r=\"5\" fill=\"#dcdcdc\"/></svg></div></div></div>"
      },
      what: "Chiaroscuro is Italian for light-dark. The term came out of the Renaissance, where artists drew on coloured paper and worked towards light with white gouache and towards dark with ink. It covers two related jobs: gradating light to make a flat surface read as a solid form, and setting bold light against bold dark across a whole picture for dramatic effect. Tenebrism is the extreme version, most associated with Caravaggio, where deep shadow dominates and a narrow shaft of light picks out the subject.",
      why: "It is the oldest working account of how light makes shape legible, which is exactly the problem in product photography, in 3D renders and in interface depth. If you understand chiaroscuro as modelling rather than as drama, you stop lighting objects flat and wondering why they look like stickers.",
      how: [
        "Light objects so at least one plane is clearly brighter than the one next to it.",
        "Keep the darkest dark and the lightest light in the picture few and deliberate, since they take the attention.",
        "For interface depth, treat shadows as evidence of a single light source rather than decoration around a box.",
        "Reserve the tenebrist look for images that carry drama; it swamps informational content."
      ],
      example: "Caravaggio's paintings are the standard reference; the same logic runs through black-and-white film noir and most dark-mode product renders.",
      numbers: "",
      pitfall: "Reaching for heavy contrast as a style when the image needs to show detail. Deep shadow that reads as atmosphere in a poster loses the buttons on a product photograph.",
      source: "Renaissance and Baroque painting practice; term in use since the Renaissance",
      verify: { status: "verified", note: "Etymology, Renaissance origin, the split between modelling and whole-composition contrast, tenebrism and its association with Caravaggio all checked against Wikipedia's Chiaroscuro article." },
      belongs: { verdict: "adjacent", why: "It is painting terminology, kept here because it is the clearest account of how light makes form legible, which is the same problem in product shots, renders and interface shadows." },
      related: [470, 471, 473, 475]
    },
    {
      n: 473,
      title: "Tonal range and exposure",
      aka: ["The Zone System"],
      oneLine: "Deciding which parts of a scene keep detail, rather than hoping the camera guesses right.",
      demo: {
        caption: "Both strips have eleven cells. On the left the end three at each side have merged, so that detail is gone.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Clipped at both ends</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 92\"><rect x=\"5\" y=\"14\" width=\"18\" height=\"40\" fill=\"#000000\"/><rect x=\"23\" y=\"14\" width=\"18\" height=\"40\" fill=\"#000000\"/><rect x=\"41\" y=\"14\" width=\"18\" height=\"40\" fill=\"#000000\"/><rect x=\"59\" y=\"14\" width=\"18\" height=\"40\" fill=\"#4d4d4d\"/><rect x=\"77\" y=\"14\" width=\"18\" height=\"40\" fill=\"#666666\"/><rect x=\"95\" y=\"14\" width=\"18\" height=\"40\" fill=\"#808080\"/><rect x=\"113\" y=\"14\" width=\"18\" height=\"40\" fill=\"#999999\"/><rect x=\"131\" y=\"14\" width=\"18\" height=\"40\" fill=\"#b3b3b3\"/><rect x=\"149\" y=\"14\" width=\"18\" height=\"40\" fill=\"#ffffff\"/><rect x=\"167\" y=\"14\" width=\"18\" height=\"40\" fill=\"#ffffff\"/><rect x=\"185\" y=\"14\" width=\"18\" height=\"40\" fill=\"#ffffff\"/><path class=\"s-accent\" d=\"M5 60 H59 M149 60 H203\"/><text class=\"t\" x=\"8\" y=\"74\">no detail</text><text class=\"t\" x=\"152\" y=\"74\">no detail</text><text class=\"t\" x=\"5\" y=\"88\">shadows blocked, highlights clipped</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Eleven zones, all separate</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 92\"><rect x=\"5\" y=\"14\" width=\"18\" height=\"40\" fill=\"#000000\"/><rect x=\"23\" y=\"14\" width=\"18\" height=\"40\" fill=\"#1a1a1a\"/><rect x=\"41\" y=\"14\" width=\"18\" height=\"40\" fill=\"#333333\"/><rect x=\"59\" y=\"14\" width=\"18\" height=\"40\" fill=\"#4d4d4d\"/><rect x=\"77\" y=\"14\" width=\"18\" height=\"40\" fill=\"#666666\"/><rect x=\"95\" y=\"14\" width=\"18\" height=\"40\" fill=\"#808080\"/><rect x=\"113\" y=\"14\" width=\"18\" height=\"40\" fill=\"#999999\"/><rect x=\"131\" y=\"14\" width=\"18\" height=\"40\" fill=\"#b3b3b3\"/><rect x=\"149\" y=\"14\" width=\"18\" height=\"40\" fill=\"#cccccc\"/><rect x=\"167\" y=\"14\" width=\"18\" height=\"40\" fill=\"#e6e6e6\"/><rect x=\"185\" y=\"14\" width=\"18\" height=\"40\" fill=\"#ffffff\"/><path class=\"s-accent\" d=\"M95 58 V64\"/><text class=\"t\" x=\"11\" y=\"70\">0</text><text class=\"t\" x=\"100\" y=\"74\">V</text><text class=\"t\" x=\"190\" y=\"70\">X</text><text class=\"t\" x=\"5\" y=\"88\">each step one stop; V is middle grey</text></svg></div></div></div>"
      },
      what: "Ansel Adams and Fred Archer worked out the Zone System around 1939 to 1940 at the Art Center School in Los Angeles. Adams called it a codification of the principles of sensitometry rather than an invention. It divides the tonal scale into eleven zones, numbered 0 to X, each one stop apart, from pure black with no detail through middle grey at Zone V to paper white. You place the important element on the zone you want it to occupy, and everything else falls where its own reflectance puts it.",
      why: "It converts exposure from a guess into a decision about what matters. For a designer receiving files, it gives a way to say what is wrong: the shadows are blocked up, the highlights are clipped, or the whole image sits in the middle with no anchor. It also explains why an image that looks fine on screen prints as mud.",
      how: [
        "Check the histogram for detail at both ends before approving an image, not just the on-screen impression.",
        "Decide which element must hold detail, then judge exposure against that element.",
        "Keep a consistent tonal placement across a set so faces sit at the same brightness.",
        "Allow for the output: paper crushes shadows more than a backlit screen does."
      ],
      example: "Adams set out the placement and fall method in The Negative (1948), revised in 1981 with Robert Baker.",
      numbers: "Eleven zones, 0 to X, each one stop apart, meaning each zone is double the exposure of the one below. Zone V is middle grey.",
      pitfall: "Chasing a punchy look with heavy contrast, which clips the highlights on skin and blocks the shadows in dark clothing. Neither comes back once the file is flattened.",
      source: "Ansel Adams and Fred Archer, the Zone System (c. 1939-40); Ansel Adams, The Negative (1948, revised 1981)",
      verify: { status: "verified", note: "Creators, date, the Art Center School setting, the eleven-zone structure, the one-stop spacing, the placement and fall method and the publication history all checked against Wikipedia's Zone System article, including Adams' own description of it as a codification of sensitometry." },
      belongs: { verdict: "adjacent", why: "Overturned from core. The Zone System is a photographer's method for exposing and developing a negative, in the same borrowed category as focal length and depth of field. Its design use is real but second-hand: judging whether a supplied file holds usable detail in its shadows and highlights, and having the words to say which end has failed." },
      related: [471, 474, 487, 9484]
    },
    {
      n: 474,
      title: "Colour grading for consistency",
      aka: ["Colour timing", "Grade"],
      oneLine: "Pushing a mixed set of images towards one colour treatment so they read as a family.",
      demo: {
        caption: "Three separate shoots on the left, each with its own cast. On the right the same three pushed to one look.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Three casts</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 100\"><rect x=\"6\" y=\"6\" width=\"62\" height=\"40\" fill=\"#e8d3b0\"/><rect x=\"6\" y=\"46\" width=\"62\" height=\"32\" fill=\"#b58f5f\"/><circle cx=\"37\" cy=\"44\" r=\"10\" fill=\"#7c5f3d\"/><rect x=\"74\" y=\"6\" width=\"62\" height=\"40\" fill=\"#cde0ee\"/><rect x=\"74\" y=\"46\" width=\"62\" height=\"32\" fill=\"#7f96a6\"/><circle cx=\"105\" cy=\"44\" r=\"10\" fill=\"#4f6373\"/><rect x=\"142\" y=\"6\" width=\"62\" height=\"40\" fill=\"#dfe6cd\"/><rect x=\"142\" y=\"46\" width=\"62\" height=\"32\" fill=\"#8b9a72\"/><circle cx=\"173\" cy=\"44\" r=\"10\" fill=\"#5d6a48\"/><text class=\"t\" x=\"6\" y=\"94\">warm, cool, green</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One grade over all three</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 100\"><rect x=\"6\" y=\"6\" width=\"62\" height=\"40\" fill=\"#ded2bb\"/><rect x=\"6\" y=\"46\" width=\"62\" height=\"32\" fill=\"#7d8a85\"/><circle cx=\"37\" cy=\"44\" r=\"10\" fill=\"#47534f\"/><rect x=\"74\" y=\"6\" width=\"62\" height=\"40\" fill=\"#dbcfb8\"/><rect x=\"74\" y=\"46\" width=\"62\" height=\"32\" fill=\"#798681\"/><circle cx=\"105\" cy=\"44\" r=\"10\" fill=\"#44504c\"/><rect x=\"142\" y=\"6\" width=\"62\" height=\"40\" fill=\"#e0d4bd\"/><rect x=\"142\" y=\"46\" width=\"62\" height=\"32\" fill=\"#808d88\"/><circle cx=\"173\" cy=\"44\" r=\"10\" fill=\"#4a5652\"/><text class=\"t\" x=\"6\" y=\"94\">warm highlights, cool shadows</text></svg></div></div></div>"
      },
      what: "Grading descends from photochemical colour timing, where a lab technician set printer points to control exposure during printing and used a Hazeltine analyser to preview the result. Digital intermediate workflows replaced that, and the vocabulary survives: primary grading for the whole image, secondary grading for isolated areas using masks and power windows. Colour correction fixes what is wrong; grading decides what the image should look like. In design work the goal is usually cohesion rather than drama.",
      why: "Photography arrives from different shoots, different cameras and different days, and it shows. A shared grade is the cheapest way to make a stock image, a client-supplied photograph and a new shoot belong on the same page. It also carries brand colour into imagery without printing a logo on everything.",
      how: [
        "Set a reference image first, then grade everything else towards it.",
        "Match skin tone and white balance before touching anything stylistic.",
        "Save the grade as a reusable preset or lookup table so other people can apply it.",
        "Keep the ungraded originals; grades date faster than photographs do."
      ],
      example: "The orange and teal split that dominated Hollywood grading for years is the most visible case of a house look applied across a whole body of work.",
      numbers: "",
      pitfall: "Grading hard enough to change the product. A warm grade that flatters a room will also turn a white dental surgery cream, and the client will notice before you do.",
      source: "Post-production practice descended from photochemical colour timing; no single originator",
      verify: { status: "verified", note: "The descent from colour timing, printer points, the Hazeltine analyser, digital intermediate workflows and the primary and secondary grading vocabulary all checked against Wikipedia's Color grading article. That article does not cover lookup tables, so I have kept the how-to wording general." },
      belongs: { verdict: "core", why: "Making a mixed set of images look like one set is an art-direction task designers do on nearly every project with photography." },
      related: [471, 479, 480, 9484]
    },
    {
      n: 475,
      title: "Silhouette clarity",
      aka: ["Silhouette test", "Readable outline"],
      oneLine: "If the outline alone reads, the shape works; if it does not, detail will not rescue it.",
      demo: {
        caption: "Both are the same figure filled solid black. Only the right-hand outline can still be named.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Limbs merged into the mass</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 148\"><circle class=\"f\" cx=\"80\" cy=\"26\" r=\"13\"/><rect class=\"f\" x=\"62\" y=\"38\" width=\"36\" height=\"98\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Limbs clear of the mass</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 148\"><circle class=\"f\" cx=\"78\" cy=\"24\" r=\"12\"/><path class=\"f\" d=\"M66 38 H90 L94 82 H62 Z\"/><path class=\"f\" d=\"M88 42 L122 20 L128 30 L93 56 Z\"/><path class=\"f\" d=\"M66 44 L32 62 L36 72 L70 58 Z\"/><path class=\"f\" d=\"M62 82 L50 132 L62 134 L78 96 L92 132 L104 129 L94 82 Z\"/></svg></div></div></div>"
      },
      what: "Fill a shape solid black and see whether you can still tell what it is. The underlying principle is Disney's staging, described by Frank Thomas and Ollie Johnston in The Illusion of Life (1981) as the presentation of any idea so that it is completely and unmistakably clear, keeping focus on what is relevant and avoiding unnecessary detail. Animators, character designers and icon designers all use the black-fill check, but the phrase silhouette test itself is studio folklore with no documented first use.",
      why: "Outline is the first thing the eye resolves and the last thing to survive at small size, in low contrast, or in peripheral vision. A logo, an icon or a cut-out product that fails the black-fill check will keep failing at every size below the one you designed it at.",
      how: [
        "Fill your icon, logo or character solid black and ask a colleague to name it.",
        "Fix the outline by changing the pose or the angle rather than by adding interior detail.",
        "Avoid overlapping limbs, handles or spouts that merge into the body mass.",
        "Test cut-out product images against both light and dark page backgrounds."
      ],
      example: "Recognising a Coca-Cola contour bottle or a pair of scissors from a solid black shape alone is the everyday version of this test.",
      numbers: "",
      pitfall: "Designing at 400 per cent zoom, where interior detail carries the meaning, then discovering the shape is unreadable at 24 pixels where it actually lives.",
      source: "Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981), under the principle of staging; the silhouette test wording is folklore, origin unclear",
      verify: { status: "disputed", note: "The staging principle and its wording checked against Wikipedia's Twelve basic principles of animation article, which cites Thomas and Johnston (1981). Marked disputed because the specific silhouette test, as a named rule, is craft folklore repeated across animation and game-art teaching without a traceable original source. I could not find one." },
      belongs: { verdict: "core", why: "Icons, logos and cut-out imagery are judged on outline first, so the black-fill check is a working test designers should run before anything ships." },
      related: [476, 490, 492, 494]
    },
    {
      n: 476,
      title: "Thumbnail legibility",
      aka: ["Small-size test", "Squint test"],
      oneLine: "An image or mark has to survive the smallest size it will actually be seen at.",
      demo: {
        caption: "Each icon shown at drawing size and at 24 pixels. Only the three-shape version still reads at the size it ships.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Nine features</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--bottom\"><svg class=\"db-svg\" viewBox=\"0 0 24 24\" style=\"width:88px\"><path class=\"s\" d=\"M1.5 10.5 L12 2 L22.5 10.5 M4 10.5 V22 H20 V10.5 M6.5 12.5 H11.5 V17 H6.5 Z M9 12.5 V17 M6.5 14.75 H11.5 M14 22 V13.5 H18.5 V22 M15.2 15 H17.3 V17.5 H15.2 Z M17 5.5 V2.5 H19 V6.5 M13 22 H19.5\"/><circle class=\"f\" cx=\"15\" cy=\"19\" r=\"0.5\"/></svg><svg class=\"db-svg\" viewBox=\"0 0 24 24\" style=\"width:24px\"><path class=\"s\" d=\"M1.5 10.5 L12 2 L22.5 10.5 M4 10.5 V22 H20 V10.5 M6.5 12.5 H11.5 V17 H6.5 Z M9 12.5 V17 M6.5 14.75 H11.5 M14 22 V13.5 H18.5 V22 M15.2 15 H17.3 V17.5 H15.2 Z M17 5.5 V2.5 H19 V6.5 M13 22 H19.5\"/><circle class=\"f\" cx=\"15\" cy=\"19\" r=\"0.5\"/></svg><span class=\"db-note\">at 24 px</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three features</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--bottom\"><svg class=\"db-svg\" viewBox=\"0 0 24 24\" style=\"width:88px\"><path class=\"s\" d=\"M1.5 10.5 L12 2 L22.5 10.5 M4 10.5 V22 H20 V10.5 M10 22 V14 H16 V22\"/></svg><svg class=\"db-svg\" viewBox=\"0 0 24 24\" style=\"width:24px\"><path class=\"s\" d=\"M1.5 10.5 L12 2 L22.5 10.5 M4 10.5 V22 H20 V10.5 M10 22 V14 H16 V22\"/></svg><span class=\"db-note\">at 24 px</span></div></div></div></div>"
      },
      what: "Most images end up smaller than the size they were designed at. A hero photograph becomes a card thumbnail, a logo becomes a browser tab, an icon sits at 24 pixels inside a toolbar. Testing at final size means shrinking the artwork and looking at it at 100 per cent on a real screen, not zoomed in on a canvas. Icon systems build the constraint in: Material's system icons are drawn on a 24 by 24 dp grid with a 20 by 20 dp live area, dropping to 20 dp with a 16 dp live area in dense desktop layouts.",
      why: "Small size strips out everything except gross shape, value contrast and one or two colours. Testing early tells you which detail is load-bearing and which is decoration, and it usually forces a simpler and better design.",
      how: [
        "Preview every image at its smallest real placement before approving it.",
        "Crop tighter for thumbnails rather than shrinking the full frame.",
        "Choose photographs with one clear subject and strong tonal separation for card and list views.",
        "Draw icons at their target size on the target grid, then check them on a device."
      ],
      example: "Material Design's system icon spec fixes the working size at 24 by 24 dp, with 2 dp of padding around a 20 by 20 dp live area, so the constraint is part of the drawing process.",
      numbers: "Material Design system icons: 24 by 24 dp with a 20 by 20 dp live area and 2 dp padding; dense desktop icons 20 by 20 dp with a 16 by 16 dp live area and the same 2 dp padding.",
      pitfall: "Approving hero photography on a large monitor when most views will be a small card on a phone. Group shots and wide landscapes are the usual casualties.",
      source: "Craft practice, origin unclear; the size figures come from Google's Material Design system icon guidance",
      verify: { status: "verified", note: "Icon grid, live area and padding figures checked directly against Google's Material Design 2 system icons page. The general small-size test has no documented originator, and I have said so rather than attributing it." },
      belongs: { verdict: "core", why: "Nearly every image and mark now appears at several sizes, and checking the smallest one is a routine part of the job." },
      related: [475, 484, 490, 491]
    },
    {
      n: 477,
      title: "Image hierarchy within a layout",
      aka: ["Ranking images on a page"],
      oneLine: "Rank the pictures on a page so one leads and the rest support it.",
      demo: {
        caption: "Same four pictures. Only the right-hand version tells the reader which one to look at first.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Four equal images</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 132\"><rect class=\"f-mute\" x=\"6\" y=\"6\" width=\"92\" height=\"58\"/><rect class=\"f-mute\" x=\"102\" y=\"6\" width=\"92\" height=\"58\"/><rect class=\"f-mute\" x=\"6\" y=\"70\" width=\"92\" height=\"58\"/><rect class=\"f-mute\" x=\"102\" y=\"70\" width=\"92\" height=\"58\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One leads, three support</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 132\"><rect class=\"f-mute\" x=\"6\" y=\"6\" width=\"188\" height=\"72\"/><rect class=\"f-mute\" x=\"6\" y=\"88\" width=\"58\" height=\"40\"/><rect class=\"f-mute\" x=\"71\" y=\"88\" width=\"58\" height=\"40\"/><rect class=\"f-mute\" x=\"136\" y=\"88\" width=\"58\" height=\"40\"/></svg></div></div></div>"
      },
      what: "A page with three images at the same size gives the reader no route through it. Hierarchy means deciding which image leads, then giving it more area, more tonal weight or more isolation than the others. It is the same idea as typographic hierarchy applied to pictures, and it interacts with type: a large image and a large headline compete unless one of them yields. Not every image needs to be seen, and some should be small on purpose.",
      why: "Readers do not look at every picture. Nielsen Norman Group's eye-tracking work found people study images that carry information and skip images that are there to fill space. Ranking images decides which ones get that attention rather than leaving it to chance.",
      how: [
        "Choose one lead image per view and make the size difference obvious rather than marginal.",
        "Cut images that carry no information; a smaller page with fewer pictures reads better.",
        "Give the lead image space around it, since isolation ranks as strongly as size.",
        "Check the ranking survives on a narrow screen where images stack and all end up full width."
      ],
      example: "Newspaper front pages run one dominant photograph and small secondary images, so the eye lands in one place before it starts scanning.",
      numbers: "",
      pitfall: "Equal-sized grids of stock photography. Every card looks the same weight, so the reader treats the whole block as decoration and scrolls past it.",
      source: "Application of visual hierarchy to imagery; origin unclear",
      verify: { status: "verified", note: "The evidence claim is checked against Jakob Nielsen, Photos as Web Content (Nielsen Norman Group, 31 October 2010), which reports eye-tracking showing users ignoring decorative photographs and studying informative ones. The broader hierarchy principle has no single documented origin, and I have not invented one." },
      belongs: { verdict: "core", why: "Deciding which picture leads is a layout decision on every editorial page, landing page and card grid a designer builds." },
      related: [464, 478, 481, 9477]
    },
    {
      n: 478,
      title: "Anchorage and relay (image-text relationship)",
      aka: ["Barthes on captions", "Rhetoric of the Image"],
      oneLine: "Text either fixes which meaning an image carries, or supplies meaning the image cannot.",
      demo: {
        caption: "Identical figures in both frames. Only the sentence underneath changes, and with it what the picture is of.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Caption one</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><svg class=\"db-svg\" viewBox=\"0 0 210 92\"><path class=\"s-mute\" d=\"M8 84 H202\"/><circle class=\"f\" cx=\"26\" cy=\"52\" r=\"4\"/><path class=\"s\" d=\"M26 56 V70 M26 60 L18 48 M26 60 L34 48 M26 70 L21 84 M26 70 L31 84\"/><circle class=\"f\" cx=\"56\" cy=\"54\" r=\"4\"/><path class=\"s\" d=\"M56 58 V71 M56 62 L47 48 M56 62 L63 54 M56 71 L51 84 M56 71 L61 84\"/><circle class=\"f\" cx=\"86\" cy=\"51\" r=\"4\"/><path class=\"s\" d=\"M86 55 V69 M86 59 L78 47 M86 59 L94 47 M86 69 L81 84 M86 69 L91 84\"/><circle class=\"f\" cx=\"116\" cy=\"55\" r=\"4\"/><path class=\"s\" d=\"M116 59 V72 M116 63 L107 55 M116 63 L125 49 M116 72 L111 84 M116 72 L121 84\"/><circle class=\"f\" cx=\"146\" cy=\"52\" r=\"4\"/><path class=\"s\" d=\"M146 56 V70 M146 60 L138 48 M146 60 L154 48 M146 70 L141 84 M146 70 L151 84\"/><circle class=\"f\" cx=\"176\" cy=\"54\" r=\"4\"/><path class=\"s\" d=\"M176 58 V71 M176 62 L167 50 M176 62 L185 54 M176 71 L171 84 M176 71 L181 84\"/></svg><div class=\"db-type\">Supporters salute the winner.</div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Caption two</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><svg class=\"db-svg\" viewBox=\"0 0 210 92\"><path class=\"s-mute\" d=\"M8 84 H202\"/><circle class=\"f\" cx=\"26\" cy=\"52\" r=\"4\"/><path class=\"s\" d=\"M26 56 V70 M26 60 L18 48 M26 60 L34 48 M26 70 L21 84 M26 70 L31 84\"/><circle class=\"f\" cx=\"56\" cy=\"54\" r=\"4\"/><path class=\"s\" d=\"M56 58 V71 M56 62 L47 48 M56 62 L63 54 M56 71 L51 84 M56 71 L61 84\"/><circle class=\"f\" cx=\"86\" cy=\"51\" r=\"4\"/><path class=\"s\" d=\"M86 55 V69 M86 59 L78 47 M86 59 L94 47 M86 69 L81 84 M86 69 L91 84\"/><circle class=\"f\" cx=\"116\" cy=\"55\" r=\"4\"/><path class=\"s\" d=\"M116 59 V72 M116 63 L107 55 M116 63 L125 49 M116 72 L111 84 M116 72 L121 84\"/><circle class=\"f\" cx=\"146\" cy=\"52\" r=\"4\"/><path class=\"s\" d=\"M146 56 V70 M146 60 L138 48 M146 60 L154 48 M146 70 L141 84 M146 70 L151 84\"/><circle class=\"f\" cx=\"176\" cy=\"54\" r=\"4\"/><path class=\"s\" d=\"M176 58 V71 M176 62 L167 50 M176 62 L185 54 M176 71 L171 84 M176 71 L181 84\"/></svg><div class=\"db-type\">Protesters block the road.</div></div></div></div></div>"
      },
      what: "Roland Barthes published Rhetorique de l'image in Communications 4 in 1964; the English version appears in Image Music Text, translated by Stephen Heath in 1977. He argues that all images are polysemous, carrying what he calls a floating chain of signifieds, with the reader free to pick some and ignore others. Text does one of two jobs. Anchorage answers the question what is it, steering the reader towards a meaning chosen in advance, which Barthes calls a control with a repressive value. Relay is different: text and image each carry part of the story, as in a comic strip or film dialogue, and neither works alone.",
      why: "This is the only precise account of what a caption is for. Once you can tell anchorage from relay, you stop writing captions that repeat what is visible. It also explains why the same photograph can run in two publications and mean opposite things.",
      how: [
        "Write the caption as an editorial decision, not as a description of the pixels.",
        "Use anchorage when an image is ambiguous and the ambiguity is a risk, such as a photograph of a crowd.",
        "Use relay when text and image are read together in sequence, as in a step-by-step or a comic panel.",
        "Check what your caption forecloses; anchorage removes meanings as well as adding one."
      ],
      example: "Barthes analyses a Panzani pasta advertisement, showing how the brand name and the copy pin down readings such as freshness, home cooking and Italianness that the photograph alone leaves open.",
      numbers: "",
      pitfall: "Captions that say what the reader can already see. That wastes the one place where the designer controls how the picture is understood.",
      source: "Roland Barthes, Rhetorique de l'image, Communications 4 (1964); English in Image Music Text, trans. Stephen Heath (1977), pp. 32-51",
      verify: { status: "verified", note: "Checked against the full text of the Heath translation. Confirmed the wording that all images are polysemous with an underlying floating chain of signifieds, the sentence there appear to be two: anchorage and relay, anchorage as answering what is it and as a control with a repressive value, and relay as the diegetic case cited in comic strips. Publication details confirmed as Image Music Text pp. 32-51 (1977), original 1964." },
      belongs: { verdict: "core", why: "Pairing pictures with words is design work, and this is the only rigorous vocabulary for what a caption actually does to an image." },
      related: [477, 488, 492, 493]
    },
    {
      n: 479,
      title: "Duotone and treatment for cohesion",
      aka: ["Two-ink halftone", "Image treatment"],
      oneLine: "A shared colour treatment pulls mismatched photographs into one visual family.",
      demo: {
        caption: "Compare the two ends of each strip. The duograph cannot reach the dark or the light the two-ink duotone holds.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">One ink: greyscale</span><div class=\"db-ramp\"><span style=\"background:#111111\"></span><span style=\"background:#2f2f2f\"></span><span style=\"background:#4d4d4d\"></span><span style=\"background:#6b6b6b\"></span><span style=\"background:#898989\"></span><span style=\"background:#a7a7a7\"></span><span style=\"background:#c5c5c5\"></span><span style=\"background:#e3e3e3\"></span><span style=\"background:#fbfbfb\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Duotone: two inks, full range</span><div class=\"db-ramp\"><span style=\"background:#10233f\"></span><span style=\"background:#2c3b51\"></span><span style=\"background:#485362\"></span><span style=\"background:#656b74\"></span><span style=\"background:#818385\"></span><span style=\"background:#9d9b97\"></span><span style=\"background:#b9b4a9\"></span><span style=\"background:#d6ccba\"></span><span style=\"background:#f2e4cc\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Duograph: one halftone over a solid</span><div class=\"db-ramp\"><span style=\"background:#3a4553\"></span><span style=\"background:#4a535e\"></span><span style=\"background:#5a6169\"></span><span style=\"background:#6a6f73\"></span><span style=\"background:#7a7d7e\"></span><span style=\"background:#898a89\"></span><span style=\"background:#999894\"></span><span style=\"background:#a9a69e\"></span><span style=\"background:#b9b4a9\"></span></div></div></div></div>"
      },
      what: "A true duotone is a printing technique: one colour halftone superimposed over another, using two inks, to extend the tonal range of a reproduction and bring out middle tones that a single ink flattens. The cheaper substitute, a duograph, prints a single halftone over a solid colour and loses much of the contrast. Digitally, the same word now covers mapping a greyscale image onto two brand colours. The broader principle is that a consistent treatment, whether duotone, tint, grain or a shared grade, makes images from different sources belong together.",
      why: "It solves a real problem cheaply: a client has good photographs, bad photographs and a few stock images, and no budget for a reshoot. A shared treatment mutes the differences and puts brand colour into the imagery without adding a logo to it. It also makes text overlays predictable, because you know the tonal range in advance.",
      how: [
        "Pick a treatment that keeps the subject readable, then apply it to every image without exception.",
        "Map brand colours to the shadows and highlights rather than tinting the whole image one flat hue.",
        "Keep an untreated set for cases where accuracy matters, such as product colour or clinical photography.",
        "Check faces first; skin tone is where a duotone either works or looks alarming."
      ],
      example: "Two-ink duotones were standard in mid-century print because they gave a photograph more depth than black alone for the cost of one extra ink.",
      numbers: "A traditional duotone uses two inks. A duograph uses one halftone over one solid, and loses contrast.",
      pitfall: "Treating photographs of people, food or products where the real colour is the information. A duotoned meal or a duotoned tooth shade tells the customer nothing useful.",
      source: "Printing practice; the duotone and duograph distinction is standard reproduction terminology",
      verify: { status: "verified", note: "Definition as a halftone reproduction superimposing one colour halftone over another, the two-ink construction, the purpose of extending middle tones and highlights, and the duograph as the inferior single-halftone-over-solid version all checked against Wikipedia's Duotone article." },
      belongs: { verdict: "core", why: "It is technique-level rather than a grand principle, but unifying mismatched imagery is a problem on most real projects and this is the standard tool for it." },
      related: [474, 480, 486, 9477]
    },
    {
      n: 480,
      title: "Art direction consistency",
      aka: ["Image style guide", "House look"],
      oneLine: "Written rules for imagery, so pictures chosen next year still match the ones chosen today.",
      demo: {
        caption: "Eight frames, one brief each. On the right the subject size, placement and tonal register are fixed, so the set holds.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No written rules</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 52\"><rect class=\"f\" x=\"1\" y=\"4\" width=\"43\" height=\"34\" fill-opacity=\"0.07\"/><rect class=\"s-mute\" x=\"1\" y=\"4\" width=\"43\" height=\"34\"/><circle class=\"f\" cx=\"11\" cy=\"32\" r=\"4\" fill-opacity=\"0.5\"/><rect class=\"f\" x=\"52\" y=\"4\" width=\"44\" height=\"34\" fill-opacity=\"0.42\"/><rect class=\"s-mute\" x=\"52\" y=\"4\" width=\"44\" height=\"34\"/><circle class=\"f\" cx=\"74\" cy=\"21\" r=\"13\" fill-opacity=\"0.85\"/><rect class=\"f\" x=\"104\" y=\"4\" width=\"44\" height=\"34\" fill-opacity=\"0.16\"/><rect class=\"s-mute\" x=\"104\" y=\"4\" width=\"44\" height=\"34\"/><circle class=\"f\" cx=\"138\" cy=\"13\" r=\"5\" fill-opacity=\"0.6\"/><circle class=\"f\" cx=\"118\" cy=\"29\" r=\"8\" fill-opacity=\"0.4\"/><rect class=\"f\" x=\"156\" y=\"4\" width=\"43\" height=\"34\" fill-opacity=\"0.04\"/><rect class=\"s-mute\" x=\"156\" y=\"4\" width=\"43\" height=\"34\"/><circle class=\"f\" cx=\"178\" cy=\"21\" r=\"2.5\" fill-opacity=\"0.7\"/><text class=\"t\" x=\"1\" y=\"50\">tone, subject size and crop all drift</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One written standard</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 52\"><rect class=\"f\" x=\"1\" y=\"4\" width=\"43\" height=\"34\" fill-opacity=\"0.16\"/><rect class=\"s-mute\" x=\"1\" y=\"4\" width=\"43\" height=\"34\"/><path class=\"s-mute\" d=\"M1 28H44\"/><circle class=\"f\" cx=\"15\" cy=\"20\" r=\"7\" fill-opacity=\"0.7\"/><rect class=\"f\" x=\"52\" y=\"4\" width=\"44\" height=\"34\" fill-opacity=\"0.16\"/><rect class=\"s-mute\" x=\"52\" y=\"4\" width=\"44\" height=\"34\"/><path class=\"s-mute\" d=\"M52 28H96\"/><circle class=\"f\" cx=\"66\" cy=\"20\" r=\"7\" fill-opacity=\"0.7\"/><rect class=\"f\" x=\"104\" y=\"4\" width=\"44\" height=\"34\" fill-opacity=\"0.16\"/><rect class=\"s-mute\" x=\"104\" y=\"4\" width=\"44\" height=\"34\"/><path class=\"s-mute\" d=\"M104 28H148\"/><circle class=\"f\" cx=\"118\" cy=\"20\" r=\"7\" fill-opacity=\"0.7\"/><rect class=\"f\" x=\"156\" y=\"4\" width=\"43\" height=\"34\" fill-opacity=\"0.16\"/><rect class=\"s-mute\" x=\"156\" y=\"4\" width=\"43\" height=\"34\"/><path class=\"s-mute\" d=\"M156 28H199\"/><circle class=\"f\" cx=\"170\" cy=\"20\" r=\"7\" fill-opacity=\"0.7\"/><text class=\"t\" x=\"1\" y=\"50\">one tone, one subject size, one crop</text></svg></div></div></div>"
      },
      what: "Art direction consistency means deciding, and writing down, how a brand's images look: subject matter, framing, lighting register, colour treatment, whether people look at the camera, whether products sit on white or in context. Mature design systems publish this as specification rather than mood. Apple's Human Interface Guidelines, for example, fix asset scale factors, recommend file formats by image type and ask for a colour profile on every image.",
      why: "Photography is chosen by many people over many years, most of whom will never speak to you. Rules survive; taste does not. A written image standard is also the only thing that lets a client add images later without wrecking the work.",
      how: [
        "Write the image rules as testable statements, such as one subject per frame, no direct eye contact, natural light only.",
        "Include the negative cases, since the useful part of a guideline is what it forbids.",
        "Supply a reference set of approved images alongside the rules, because people match pictures faster than they read.",
        "Fix the technical side too: formats, scale factors, colour profile, minimum dimensions."
      ],
      example: "Apple's Human Interface Guidelines specify which platforms need @2x and @3x assets, which format suits each image type, and that every image should carry a colour profile.",
      numbers: "",
      pitfall: "A mood board with no rules. Everyone agrees it looks lovely, then the first new photograph arrives and nobody can say precisely why it is wrong.",
      source: "Standard brand and editorial practice; origin unclear",
      verify: { status: "verified", note: "The example is checked directly against Apple's Human Interface Guidelines Images page, which sets scale factors per platform, gives a format table by image type and instructs designers to include a colour profile with each image. The general principle of documenting image style has no single documented originator, and I have said so." },
      belongs: { verdict: "core", why: "Someone has to decide what the pictures look like and write it down, or the identity dissolves as soon as the original designer leaves." },
      related: [474, 479, 481, 489]
    },
    {
      n: 481,
      title: "Authenticity over generic stock",
      aka: ["Real photography", "Anti-filler imagery"],
      oneLine: "Real pictures of the actual thing get looked at; decorative filler gets skipped.",
      demo: {
        caption: "The same layout twice. Fixation dots skip the decorative photograph and cluster on the one that carries information.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Decorative filler</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"4\" y=\"4\" width=\"192\" height=\"112\"/><rect class=\"f-mute\" x=\"14\" y=\"14\" width=\"86\" height=\"7\"/><rect class=\"f-mute\" x=\"14\" y=\"30\" width=\"86\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"14\" y=\"38\" width=\"86\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"14\" y=\"46\" width=\"86\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"14\" y=\"54\" width=\"86\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"14\" y=\"62\" width=\"64\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"118\" y=\"14\" width=\"68\" height=\"52\" fill-opacity=\"0.45\"/><circle class=\"f\" cx=\"141\" cy=\"42\" r=\"13\" fill-opacity=\"0.16\"/><circle class=\"f\" cx=\"161\" cy=\"42\" r=\"13\" fill-opacity=\"0.16\"/><rect class=\"s-mute\" x=\"118\" y=\"14\" width=\"68\" height=\"52\"/><rect class=\"f-mute\" x=\"14\" y=\"78\" width=\"172\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"14\" y=\"86\" width=\"172\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"14\" y=\"94\" width=\"172\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"14\" y=\"102\" width=\"120\" height=\"4\" fill-opacity=\"0.6\"/><circle class=\"f-accent\" cx=\"24\" cy=\"17\" r=\"5\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"44\" cy=\"32\" r=\"4\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"28\" cy=\"40\" r=\"5\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"52\" cy=\"48\" r=\"3.5\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"26\" cy=\"56\" r=\"4\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"34\" cy=\"64\" r=\"3\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"30\" cy=\"79\" r=\"5\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"66\" cy=\"87\" r=\"3.5\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"28\" cy=\"95\" r=\"4\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"50\" cy=\"103\" r=\"3\" fill-opacity=\"0.5\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Photograph of the actual thing</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 120\"><rect class=\"s-mute\" x=\"4\" y=\"4\" width=\"192\" height=\"112\"/><rect class=\"f-mute\" x=\"14\" y=\"14\" width=\"86\" height=\"7\"/><rect class=\"f-mute\" x=\"14\" y=\"30\" width=\"86\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"14\" y=\"38\" width=\"86\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"14\" y=\"46\" width=\"86\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"14\" y=\"54\" width=\"86\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"14\" y=\"62\" width=\"64\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"118\" y=\"14\" width=\"68\" height=\"52\" fill-opacity=\"0.45\"/><circle class=\"f\" cx=\"152\" cy=\"32\" r=\"10\" fill-opacity=\"0.3\"/><path class=\"f\" d=\"M133 66 C133 47 171 47 171 66 Z\" fill-opacity=\"0.3\"/><rect class=\"s-mute\" x=\"118\" y=\"14\" width=\"68\" height=\"52\"/><rect class=\"f-mute\" x=\"14\" y=\"78\" width=\"172\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"14\" y=\"86\" width=\"172\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"14\" y=\"94\" width=\"172\" height=\"4\" fill-opacity=\"0.6\"/><rect class=\"f-mute\" x=\"14\" y=\"102\" width=\"120\" height=\"4\" fill-opacity=\"0.6\"/><circle class=\"f-accent\" cx=\"140\" cy=\"28\" r=\"5\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"158\" cy=\"34\" r=\"6\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"148\" cy=\"45\" r=\"4.5\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"166\" cy=\"22\" r=\"3.5\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"152\" cy=\"58\" r=\"4\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"24\" cy=\"17\" r=\"4.5\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"30\" cy=\"40\" r=\"4\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"32\" cy=\"79\" r=\"4\" fill-opacity=\"0.5\"/><circle class=\"f-accent\" cx=\"40\" cy=\"95\" r=\"3\" fill-opacity=\"0.5\"/></svg></div></div></div>"
      },
      what: "Nielsen Norman Group's eye-tracking work found that people study images carrying information and ignore images placed for decoration. Jakob Nielsen's 2010 write-up gives the example of a Yale School of Management applications page where the photograph of students was skipped, since users were there to understand the application process. He is careful to say the Yale students are probably real; the fault is that the picture is filler on that page. The same article shows a FreshBooks.com team page where one test user spent 10 per cent more time on the portrait photographs than on the biographies, even though the biographies took up 316 per cent more space.",
      why: "Filler images cost money, slow the page and get ignored, so they are worse than nothing. Real photographs of the actual premises, staff and products do work that words cannot: they answer questions about whether the place is clean, whether the team looks approachable and what the thing actually looks like.",
      how: [
        "Shoot the real premises, team and product before buying anything from a library.",
        "If you must use stock, use it for texture or background rather than for the thing being described.",
        "Delete filler rather than replacing it; empty space beats a handshake photograph.",
        "Prefer a slightly imperfect real photograph over a polished generic one."
      ],
      example: "The Yale School of Management case in Nielsen's 2010 article: a user looking for application information passed over the student photograph entirely.",
      numbers: "One gaze plot in Nielsen's 2010 article shows a single test user spending 10 per cent more time on the FreshBooks.com portrait photographs than on the biographies, which occupied 316 per cent more space. It is an illustrative gaze plot, not an averaged result across participants.",
      pitfall: "Swapping obvious stock for expensive stock. The problem is that the image carries no information about this business, and a better-lit stranger does not fix it.",
      source: "Jakob Nielsen, Photos as Web Content (Nielsen Norman Group, 31 October 2010)",
      verify: { status: "adjusted", note: "Checked directly against the Nielsen Norman Group article Photos as Web Content, dated 31 October 2010. The article's exact wording is: here, the user spent 10% more time viewing the portrait photos than reading the biographies, even though the bios consumed 316% more space. Adjusted because the entry previously reported this as users in the plural, implying an aggregate; it is one annotated gaze plot from one test user. Also corrected the Yale description: Nielsen writes that the photograph probably does show real students, and calls it filler because it is irrelevant to the application task, not because it is stock." },
      belongs: { verdict: "core", why: "Choosing between real and library photography is a decision on nearly every commercial project, and there is published eye-tracking evidence behind the answer." },
      related: [477, 480, 9481]
    },
    {
      n: 482,
      title: "Focal-point cropping per breakpoint",
      aka: ["Art direction in responsive images", "Smart cropping"],
      oneLine: "Different screen widths need different crops, not the same photograph squashed to fit.",
      demo: {
        caption: "Same source photograph, same narrow frame below it. Only the crop centre moved, and on the left the subject falls outside it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Centre crop, the default</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 126\"><rect class=\"f-mute\" x=\"6\" y=\"6\" width=\"188\" height=\"36\" fill-opacity=\"0.35\"/><rect class=\"f-mute\" x=\"6\" y=\"42\" width=\"188\" height=\"12\" fill-opacity=\"0.75\"/><circle class=\"f\" cx=\"40\" cy=\"28\" r=\"8\"/><path class=\"f\" d=\"M28 54 C28 38 52 38 52 54 Z\"/><rect class=\"s-mute\" x=\"6\" y=\"6\" width=\"188\" height=\"48\"/><rect class=\"s-accent\" x=\"70\" y=\"6\" width=\"44\" height=\"48\" fill=\"none\" stroke-dasharray=\"4 3\"/><path class=\"s-mute\" d=\"M92 56V64\" stroke-dasharray=\"3 3\"/><rect class=\"f-mute\" x=\"70\" y=\"68\" width=\"44\" height=\"36\" fill-opacity=\"0.35\"/><rect class=\"f-mute\" x=\"70\" y=\"104\" width=\"44\" height=\"12\" fill-opacity=\"0.75\"/><rect class=\"s\" x=\"70\" y=\"68\" width=\"44\" height=\"48\" fill=\"none\"/><text class=\"t\" x=\"6\" y=\"64\">crop window</text><text class=\"t\" x=\"6\" y=\"124\">phone crop: sky and grass</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Crop set to the subject</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 126\"><rect class=\"f-mute\" x=\"6\" y=\"6\" width=\"188\" height=\"36\" fill-opacity=\"0.35\"/><rect class=\"f-mute\" x=\"6\" y=\"42\" width=\"188\" height=\"12\" fill-opacity=\"0.75\"/><circle class=\"f\" cx=\"40\" cy=\"28\" r=\"8\"/><path class=\"f\" d=\"M28 54 C28 38 52 38 52 54 Z\"/><rect class=\"s-mute\" x=\"6\" y=\"6\" width=\"188\" height=\"48\"/><rect class=\"s-accent\" x=\"18\" y=\"6\" width=\"44\" height=\"48\" fill=\"none\" stroke-dasharray=\"4 3\"/><path class=\"s-mute\" d=\"M40 56V64\" stroke-dasharray=\"3 3\"/><rect class=\"f-mute\" x=\"18\" y=\"68\" width=\"44\" height=\"36\" fill-opacity=\"0.35\"/><rect class=\"f-mute\" x=\"18\" y=\"104\" width=\"44\" height=\"12\" fill-opacity=\"0.75\"/><circle class=\"f\" cx=\"40\" cy=\"90\" r=\"8\"/><path class=\"f\" d=\"M28 116 C28 100 52 100 52 116 Z\"/><rect class=\"s\" x=\"18\" y=\"68\" width=\"44\" height=\"48\" fill=\"none\"/><text class=\"t\" x=\"70\" y=\"64\">crop window</text><text class=\"t\" x=\"70\" y=\"124\">phone crop: the subject</text></svg></div></div></div>"
      },
      what: "MDN calls this the art direction problem: the crop that works as a wide desktop banner has the subject too small, or cut off, on a phone. The HTML answer is the picture element, with source elements carrying media conditions so the browser picks a different file at different widths. The CSS answer, when you must reuse one file, is object-fit with object-position, which defaults to 50% 50% and therefore crops from the centre unless you tell it otherwise.",
      why: "Automatic centre cropping decapitates people and slices logos in half. Setting a focal point per image, or shipping a genuinely different crop, is the difference between a hero that works on a phone and one that shows an empty patch of sky.",
      how: [
        "Use picture with media conditions when the mobile crop is a different picture, not just a smaller one.",
        "When reusing one file, set object-position to the subject rather than leaving it at the default centre.",
        "Store a focal point with each image in the content system so editors do not have to re-crop by hand.",
        "Test the narrowest breakpoint first, since that is where crops break."
      ],
      example: "MDN's own example swaps a wide landscape shot for a close portrait crop below 800 pixels using picture and source media conditions.",
      numbers: "object-position defaults to 50% 50%, meaning centre crop.",
      pitfall: "Assuming a content management system's automatic cropping is safe. Face detection misses hats, groups and products, and nobody checks the archive after launch.",
      source: "MDN Web Docs, Responsive images; CSS object-fit and object-position",
      verify: { status: "verified", note: "The art direction problem terminology, the picture and source media approach and the example crop swap checked against MDN's Responsive images guide. The 50% 50% default checked against MDN's object-position reference page." },
      belongs: { verdict: "core", why: "Responsive layouts are the default, so deciding how each image crops at each width is unavoidable production work." },
      related: [467, 483, 484, 486]
    },
    {
      n: 483,
      title: "Aspect-ratio discipline",
      aka: ["Ratio consistency", "Reserving image space"],
      oneLine: "Pick a small set of image ratios, use them everywhere, and reserve the space before loading.",
      demo: {
        caption: "Three cards each side. On the right one ratio runs throughout, so every caption starts on the same line.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Whatever ratio arrived</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--top db-row--nowrap\"><div class=\"db-col db-col--tight db-fill\"><div class=\"db-block\" style=\"height:58px\"></div><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-col db-col--tight db-fill\"><div class=\"db-block\" style=\"height:34px\"></div><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-col db-col--tight db-fill\"><div class=\"db-block\" style=\"height:76px\"></div><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One ratio throughout</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--top db-row--nowrap\"><div class=\"db-col db-col--tight db-fill\"><div class=\"db-block\" style=\"height:56px\"></div><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-col db-col--tight db-fill\"><div class=\"db-block\" style=\"height:56px\"></div><div class=\"db-lines\"><i></i><i></i></div></div><div class=\"db-col db-col--tight db-fill\"><div class=\"db-block\" style=\"height:56px\"></div><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div>"
      },
      what: "Two separate disciplines share this name. The first is editorial: settle on a few ratios and stick to them, so cards, galleries and grids line up instead of drifting. The common ratios all have histories, with 3:2 coming from the 36 by 24mm 35mm still frame, 4:3 from silent 35mm cinema, 1.85:1 introduced by Universal Pictures in May 1953 and 2.39:1 from anamorphic 35mm from 1970 onwards. The second discipline is technical: declare the ratio in the markup so the browser can reserve space before the file arrives.",
      why: "Mixed ratios make a grid look broken even when the alignment is perfect. On the technical side, an image with no declared dimensions pushes the content below it down when it loads, which is the main cause of layout shift and one of the things Google measures.",
      how: [
        "Choose two or three ratios for a project and write them into the design system.",
        "Always put width and height attributes on img elements so the browser can compute the ratio.",
        "Use the CSS aspect-ratio property where the markup cannot carry dimensions.",
        "Crop to the chosen ratio at upload rather than letting CSS squash the file."
      ],
      example: "A card grid using one ratio throughout stays aligned whatever the source images were; the same grid with mixed portrait and landscape crops needs constant manual patching.",
      numbers: "web.dev advises aiming for a Cumulative Layout Shift of 0.1 or less for at least 75 per cent of page visits, with anything above 0.25 counted as poor. 3:2 comes from the 36 by 24mm 35mm frame.",
      pitfall: "Letting a CMS accept any ratio and fixing it in CSS with object-fit. The grid holds together, but faces and products get cropped at random across hundreds of pages.",
      source: "web.dev, Optimize Cumulative Layout Shift; standard film and photographic ratios",
      verify: { status: "verified", note: "CLS thresholds, the advice to set width and height attributes and the CSS aspect-ratio alternative all checked against web.dev's Optimize CLS article. Ratio origins, including the 36 by 24mm 35mm frame for 3:2 and the May 1953 Universal Pictures introduction of 1.85:1, checked against Wikipedia's Aspect ratio (image) article." },
      belongs: { verdict: "core", why: "Ratio choice governs whether grids hold together, and declaring dimensions is a measurable performance requirement rather than a preference." },
      related: [482, 484, 486, 477]
    },
    {
      n: 484,
      title: "Resolution and pixel density (1x, 2x, 3x)",
      aka: ["Scale factors", "Retina assets", "Device pixel ratio"],
      oneLine: "A point is not a pixel, so bitmaps need versions at each display density.",
      demo: {
        caption: "One six-point square at three scale factors. The size on screen never changes; the pixel grid inside it gets three times finer.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 114\"><path class=\"s-mute\" d=\"M23 6V96M38 6V96M53 6V96M68 6V96M83 6V96M8 21H98M8 36H98M8 51H98M8 66H98M8 81H98\"/><circle class=\"s\" cx=\"53\" cy=\"51\" r=\"44\" fill=\"none\"/><rect class=\"s\" x=\"8\" y=\"6\" width=\"90\" height=\"90\" fill=\"none\"/><path class=\"s-mute\" d=\"M121.5 6V96M129 6V96M136.5 6V96M144 6V96M151.5 6V96M159 6V96M166.5 6V96M174 6V96M181.5 6V96M189 6V96M196.5 6V96M114 13.5H204M114 21H204M114 28.5H204M114 36H204M114 43.5H204M114 51H204M114 58.5H204M114 66H204M114 73.5H204M114 81H204M114 88.5H204\"/><circle class=\"s\" cx=\"159\" cy=\"51\" r=\"44\" fill=\"none\"/><rect class=\"s\" x=\"114\" y=\"6\" width=\"90\" height=\"90\" fill=\"none\"/><path class=\"s-mute\" d=\"M225 6V96M230 6V96M235 6V96M240 6V96M245 6V96M250 6V96M255 6V96M260 6V96M265 6V96M270 6V96M275 6V96M280 6V96M285 6V96M290 6V96M295 6V96M300 6V96M305 6V96M220 11H310M220 16H310M220 21H310M220 26H310M220 31H310M220 36H310M220 41H310M220 46H310M220 51H310M220 56H310M220 61H310M220 66H310M220 71H310M220 76H310M220 81H310M220 86H310M220 91H310\"/><circle class=\"s\" cx=\"265\" cy=\"51\" r=\"44\" fill=\"none\"/><rect class=\"s\" x=\"220\" y=\"6\" width=\"90\" height=\"90\" fill=\"none\"/><text class=\"t\" x=\"8\" y=\"110\">@1x  6 x 6 px</text><text class=\"t\" x=\"114\" y=\"110\">@2x  12 x 12 px</text><text class=\"t\" x=\"220\" y=\"110\">@3x  18 x 18 px</text></svg></div>"
      },
      what: "Apple's model is the clearest: a point is an abstract unit, and a scale factor says how many pixels sit in a point. A scale factor of 1, written @1x, is one pixel per point; @2x is a 2:1 density and @3x is 3:1. Apple asks for @2x and @3x on iOS, @2x on iPadOS and watchOS, and @1x and @2x on macOS and tvOS. On the web the same problem is handled with srcset, where x descriptors serve the same image at different densities and w descriptors, paired with sizes, let the browser pick by rendered width.",
      why: "A bitmap built for @1x looks soft on every modern phone. Sending the @3x file to everyone wastes bandwidth on the devices that do not need it. Getting the descriptors right means each device downloads roughly the pixels it can show.",
      how: [
        "Export bitmap assets at each scale factor the platform expects and name them accordingly.",
        "Design at the lowest resolution and scale up, keeping control points on whole values so shapes stay aligned at 1x.",
        "On the web, use w descriptors with sizes for photographs and x descriptors for fixed-size UI graphics.",
        "Use vector formats for flat artwork so density stops being a problem at all."
      ],
      example: "Apple's own illustration: a circle that is 10 by 10 pixels at @1x is 20 by 20 at @2x and 30 by 30 at @3x.",
      numbers: "Apple scale factors: @2x and @3x for iOS, @2x for iPadOS and watchOS, @1x and @2x for macOS and tvOS.",
      pitfall: "Shipping one large file and letting the browser scale it down. The layout looks right, the page is slow, and mobile users pay for pixels they never see.",
      source: "Apple, Human Interface Guidelines: Images; MDN Web Docs, Responsive images",
      verify: { status: "verified", note: "Point and scale factor definitions, the @1x, @2x and @3x pixel densities, the per-platform table and the design-at-lowest-resolution advice checked directly against Apple's Human Interface Guidelines Images page. The srcset x and w descriptor behaviour and the role of sizes checked against MDN's Responsive images guide." },
      belongs: { verdict: "core", why: "Every designer producing bitmap assets for screens has to decide which densities to export and how they are served." },
      related: [476, 485, 486, 9484]
    },
    {
      n: 485,
      title: "Vector versus raster",
      aka: ["Resolution independence"],
      oneLine: "Vector art is described by shapes and scales freely; raster art is a fixed grid of pixels.",
      demo: {
        caption: "One ten-pixel circle, enlarged both ways. The vector is redrawn at the new size; the bitmap only gets bigger pixels.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Raster source, enlarged</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 120 132\"><rect class=\"f\" x=\"40\" y=\"10\" width=\"40\" height=\"10\"/><rect class=\"f\" x=\"30\" y=\"20\" width=\"60\" height=\"10\"/><rect class=\"f\" x=\"20\" y=\"30\" width=\"80\" height=\"10\"/><rect class=\"f\" x=\"10\" y=\"40\" width=\"100\" height=\"10\"/><rect class=\"f\" x=\"10\" y=\"50\" width=\"100\" height=\"10\"/><rect class=\"f\" x=\"10\" y=\"60\" width=\"100\" height=\"10\"/><rect class=\"f\" x=\"10\" y=\"70\" width=\"100\" height=\"10\"/><rect class=\"f\" x=\"20\" y=\"80\" width=\"80\" height=\"10\"/><rect class=\"f\" x=\"30\" y=\"90\" width=\"60\" height=\"10\"/><rect class=\"f\" x=\"40\" y=\"100\" width=\"40\" height=\"10\"/><path class=\"s-mute\" d=\"M20 10V110M30 10V110M40 10V110M50 10V110M60 10V110M70 10V110M80 10V110M90 10V110M100 10V110M10 20H110M10 30H110M10 40H110M10 50H110M10 60H110M10 70H110M10 80H110M10 90H110M10 100H110\"/><rect class=\"s-mute\" x=\"10\" y=\"10\" width=\"100\" height=\"100\" fill=\"none\"/><text class=\"t\" x=\"10\" y=\"126\">10 x 10 stored pixels</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Vector source, enlarged</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 120 132\"><circle class=\"f\" cx=\"60\" cy=\"60\" r=\"50\"/><rect class=\"s-mute\" x=\"10\" y=\"10\" width=\"100\" height=\"100\" fill=\"none\"/><text class=\"t\" x=\"10\" y=\"126\">one path, redrawn</text></svg></div></div></div>"
      },
      what: "A vector file stores paths, fills and strokes as instructions, so the renderer redraws it at any size. A raster file stores a grid of pixel values, so enlarging it invents detail that was never captured. Photographs are inherently raster. Logos, icons, diagrams and charts are usually better as vector. Apple recommends PDF or SVG for flat artwork that needs high-resolution scaling, and for visionOS it advises preferring vector art for 2D images because bitmaps may not survive being scaled up.",
      why: "Choosing vector removes a whole class of production problems: no scale-factor exports, no blurry logos on a new display, smaller files for simple artwork. Choosing raster where vector cannot go, mainly photographs and painterly illustration, keeps file sizes sane.",
      how: [
        "Keep logos, icons, diagrams and charts as vector all the way to output.",
        "Ask clients for original vector artwork before accepting a PNG of a logo.",
        "Do not trace a low-resolution bitmap and call it a vector logo; redraw it properly.",
        "Remember that a vector file with thousands of nodes can be slower than a small bitmap, so simplify paths."
      ],
      example: "The same company logo as SVG stays crisp on a 4K display and inside a printed brochure; as a 200-pixel PNG it fails at both.",
      numbers: "",
      pitfall: "Exporting an SVG straight from a drawing tool with embedded raster images, filters or thousands of stray points. It is technically vector and behaves like a slow bitmap.",
      source: "Standard graphics practice; format guidance from Apple, Human Interface Guidelines: Images and MDN's image format guide",
      verify: { status: "verified", note: "Apple's recommendation of PDF or SVG for flat artwork requiring high-resolution scaling, and its visionOS advice to prefer vector-based art because bitmap content may not scale well, checked directly against the Apple HIG Images page. MDN's recommendation of SVG for icons, diagrams and charts checked against its Image file type and format guide." },
      belongs: { verdict: "core", why: "The vector or raster decision determines how artwork behaves at every size and output, and designers make it at the start of every asset." },
      related: [484, 486, 490, 476]
    },
    {
      n: 486,
      title: "Format choice (SVG, AVIF, WebP, JPEG, PNG)",
      aka: ["Picking an image format"],
      oneLine: "Match the format to the content: photographs, flat graphics and diagrams each want different files.",
      demo: {
        caption: "Bar length is the file size MDN reports for each format, against JPEG and PNG at full width.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><span class=\"db-tag\">Photograph, lossy</span><div><span class=\"db-note\">JPEG</span><div class=\"db-bar db-bar--ink\" style=\"width:100%\"></div></div><div><span class=\"db-note\">WebP, 25 to 35 per cent smaller</span><div class=\"db-bar db-bar--ink\" style=\"width:70%\"></div></div><div><span class=\"db-note\">AVIF, about 50 per cent smaller</span><div class=\"db-bar db-bar--accent\" style=\"width:50%\"></div></div><span class=\"db-tag\">Flat artwork, lossless</span><div><span class=\"db-note\">PNG</span><div class=\"db-bar db-bar--ink\" style=\"width:100%\"></div></div><div><span class=\"db-note\">WebP lossless, about 26 per cent smaller</span><div class=\"db-bar db-bar--accent\" style=\"width:74%\"></div></div></div></div>"
      },
      what: "MDN's guidance is straightforward. Photographs suit WebP or JPEG, with JPEG as the safe fallback. Icons and flat artwork suit SVG, with lossless WebP or PNG as alternatives. Screenshots want a lossless format so text stays crisp. Diagrams and charts want SVG. GIF should be limited to simple legacy animation. AVIF gives the strongest compression of the lot and MDN now lists it as supported in Chrome, Edge, Opera, Safari and Firefox, but it cannot render progressively, so the file has to arrive in full before anything appears. The picture element lets you offer a modern format first with an older one behind it.",
      why: "Format choice is the largest single lever on image weight, ahead of clever compression settings. Picking the wrong one shows immediately: a JPEG screenshot has fringes around the text, a PNG photograph is several times larger than it needs to be.",
      how: [
        "Photographs to WebP or AVIF with a JPEG fallback in a picture element.",
        "Flat artwork, icons, diagrams and charts to SVG.",
        "Screenshots and anything containing text to a lossless format, PNG or lossless WebP.",
        "Check the support position for the newest format before making it the only option."
      ],
      example: "MDN's own fallback pattern nests source elements for SVG and PNG inside a picture element with a plain img as the last resort.",
      numbers: "MDN's format guide states that lossy AVIF images are around 50 per cent smaller than JPEG, that lossy WebP images average 25 to 35 per cent smaller than JPEG at visually similar quality, and that lossless WebP is typically 26 per cent smaller than PNG.",
      pitfall: "Saving a screenshot as JPEG. Lossy compression treats the sharp edges of letterforms as high-frequency detail and smears them, which is exactly the content you needed to keep.",
      source: "MDN Web Docs, Image file type and format guide",
      verify: { status: "adjusted", note: "Per-content recommendations, the picture element fallback pattern, the AVIF and WebP size comparisons and the lack of progressive rendering in AVIF all checked against MDN's Image file type and format guide. Adjusted because the entry previously described AVIF as having narrow browser support; MDN now lists it as supported in Chrome, Edge, Opera, Safari and Firefox, so the live limitation is progressive rendering rather than availability. Support levels move, so the how-to still sends the reader to current data." },
      belongs: { verdict: "core", why: "Format is a decision on every image that ships and it drives both quality and page weight." },
      related: [485, 487, 484, 483]
    },
    {
      n: 487,
      title: "Compression artefacts",
      aka: ["JPEG artefacts", "Banding", "Blocking"],
      oneLine: "The specific ways lossy compression damages an image, and how to recognise each one.",
      demo: {
        caption: "Left, the clean original. Right, the same areas compressed hard: steps in the gradient, ripples at the edge, seams in flat tone.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Original</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><defs><linearGradient id=\"dbGrad487\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop offset=\"0\" style=\"stop-color:var(--ink);stop-opacity:0.05\"/><stop offset=\"1\" style=\"stop-color:var(--ink);stop-opacity:0.5\"/></linearGradient></defs><rect x=\"6\" y=\"6\" width=\"188\" height=\"32\" fill=\"url(#dbGrad487)\"/><text class=\"t\" x=\"6\" y=\"45\">smooth gradient</text><rect class=\"f\" x=\"6\" y=\"49\" width=\"94\" height=\"32\" fill-opacity=\"0.45\"/><rect class=\"f\" x=\"100\" y=\"49\" width=\"94\" height=\"32\" fill-opacity=\"0.08\"/><text class=\"t\" x=\"6\" y=\"88\">clean edge</text><rect class=\"f\" x=\"6\" y=\"92\" width=\"188\" height=\"28\" fill-opacity=\"0.2\"/><text class=\"t\" x=\"6\" y=\"128\">flat tone</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Quality pushed too low</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 130\"><rect class=\"f\" x=\"6\" y=\"6\" width=\"23.5\" height=\"32\" fill-opacity=\"0.05\"/><rect class=\"f\" x=\"29.5\" y=\"6\" width=\"23.5\" height=\"32\" fill-opacity=\"0.11\"/><rect class=\"f\" x=\"53\" y=\"6\" width=\"23.5\" height=\"32\" fill-opacity=\"0.17\"/><rect class=\"f\" x=\"76.5\" y=\"6\" width=\"23.5\" height=\"32\" fill-opacity=\"0.24\"/><rect class=\"f\" x=\"100\" y=\"6\" width=\"23.5\" height=\"32\" fill-opacity=\"0.3\"/><rect class=\"f\" x=\"123.5\" y=\"6\" width=\"23.5\" height=\"32\" fill-opacity=\"0.37\"/><rect class=\"f\" x=\"147\" y=\"6\" width=\"23.5\" height=\"32\" fill-opacity=\"0.44\"/><rect class=\"f\" x=\"170.5\" y=\"6\" width=\"23.5\" height=\"32\" fill-opacity=\"0.5\"/><text class=\"t\" x=\"6\" y=\"45\">banding</text><rect class=\"f\" x=\"6\" y=\"49\" width=\"94\" height=\"32\" fill-opacity=\"0.45\"/><rect class=\"f\" x=\"100\" y=\"49\" width=\"94\" height=\"32\" fill-opacity=\"0.08\"/><rect class=\"f\" x=\"90\" y=\"49\" width=\"5\" height=\"32\" fill-opacity=\"0.62\"/><rect class=\"f\" x=\"95\" y=\"49\" width=\"5\" height=\"32\" fill-opacity=\"0.3\"/><rect class=\"f\" x=\"100\" y=\"49\" width=\"5\" height=\"32\" fill-opacity=\"0.26\"/><rect class=\"f\" x=\"105\" y=\"49\" width=\"5\" height=\"32\" fill-opacity=\"0.15\"/><text class=\"t\" x=\"6\" y=\"88\">ringing</text><rect class=\"f\" x=\"6\" y=\"92\" width=\"23.5\" height=\"14\" fill-opacity=\"0.17\"/><rect class=\"f\" x=\"29.5\" y=\"92\" width=\"23.5\" height=\"14\" fill-opacity=\"0.23\"/><rect class=\"f\" x=\"53\" y=\"92\" width=\"23.5\" height=\"14\" fill-opacity=\"0.19\"/><rect class=\"f\" x=\"76.5\" y=\"92\" width=\"23.5\" height=\"14\" fill-opacity=\"0.24\"/><rect class=\"f\" x=\"100\" y=\"92\" width=\"23.5\" height=\"14\" fill-opacity=\"0.16\"/><rect class=\"f\" x=\"123.5\" y=\"92\" width=\"23.5\" height=\"14\" fill-opacity=\"0.22\"/><rect class=\"f\" x=\"147\" y=\"92\" width=\"23.5\" height=\"14\" fill-opacity=\"0.18\"/><rect class=\"f\" x=\"170.5\" y=\"92\" width=\"23.5\" height=\"14\" fill-opacity=\"0.21\"/><rect class=\"f\" x=\"6\" y=\"106\" width=\"23.5\" height=\"14\" fill-opacity=\"0.22\"/><rect class=\"f\" x=\"29.5\" y=\"106\" width=\"23.5\" height=\"14\" fill-opacity=\"0.17\"/><rect class=\"f\" x=\"53\" y=\"106\" width=\"23.5\" height=\"14\" fill-opacity=\"0.24\"/><rect class=\"f\" x=\"76.5\" y=\"106\" width=\"23.5\" height=\"14\" fill-opacity=\"0.18\"/><rect class=\"f\" x=\"100\" y=\"106\" width=\"23.5\" height=\"14\" fill-opacity=\"0.23\"/><rect class=\"f\" x=\"123.5\" y=\"106\" width=\"23.5\" height=\"14\" fill-opacity=\"0.16\"/><rect class=\"f\" x=\"147\" y=\"106\" width=\"23.5\" height=\"14\" fill-opacity=\"0.21\"/><rect class=\"f\" x=\"170.5\" y=\"106\" width=\"23.5\" height=\"14\" fill-opacity=\"0.19\"/><text class=\"t\" x=\"6\" y=\"128\">blocking</text></svg></div></div></div>"
      },
      what: "Block-based transform compression works on small blocks of pixels, and coarse quantisation shows up in predictable ways. Blocking is visible discontinuity at block boundaries, worst in flat areas where nothing hides it. Ringing is a faint oscillation running alongside a strong edge, left behind when the high-frequency coefficients that would have described that edge cleanly are quantised away. Mosquito noise is the moving version of that shimmer, ringing and edge busyness flickering across successive video frames. Posterisation, often called banding, appears as stepped bands in gradients, and Wikipedia attributes it to the DC values being given too little importance at low quality. Curved edges pick up staircase aliasing.",
      why: "Naming the artefact tells you the fix. Banding in a sky wants more bits or a dither, not a higher quality slider on the whole file. Ringing around white text on a photograph means the text should be live HTML rather than baked into a JPEG. Guessing at quality settings without this vocabulary wastes hours.",
      how: [
        "Inspect exported images at 100 per cent in flat areas and along high-contrast edges, which is where artefacts appear first.",
        "Keep a lossless master and re-export from it; each save of a lossy file compounds the damage.",
        "Avoid putting sharp text and logos inside lossy photographic formats.",
        "Watch gradients and dark backgrounds for banding, which survives compression settings that look fine elsewhere."
      ],
      example: "A dark blue gradient hero exported as a medium-quality JPEG shows visible steps across the sky, while the busy foreground in the same file looks clean.",
      numbers: "",
      pitfall: "Judging compression on a laptop screen in a bright room. Banding and blocking in dark areas only appear on a good display, and users will find them on theirs.",
      source: "Standard image compression theory; the artefact taxonomy is well documented",
      verify: { status: "adjusted", note: "Blocking, mosquito noise as ringing and edge busyness carried across successive frames, posterisation from DC values being given too little importance at low quality, and staircase aliasing along curving edges all checked against Wikipedia's Compression artifact article. Adjusted the ringing sentence: the entry previously gave overshoot as the cause, but that article mentions overshooting the DCT values at encode time as a way to reduce ringing, which is a remedy rather than a cause. Ringing is now described as the loss of the high-frequency coefficients that describe a sharp edge." },
      belongs: { verdict: "core", why: "Every designer exporting images makes quality-versus-weight decisions, and this is the vocabulary for describing what went wrong." },
      related: [486, 473, 484]
    },
    {
      n: 488,
      title: "Alt text as content",
      aka: ["Text alternatives", "WCAG 1.1.1"],
      oneLine: "A text alternative that does the same job as the image, not a description of the pixels.",
      demo: {
        caption: "Both alt values sit under the same chart. Read the chart, then read them: only one does the job the chart does.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Describes the file</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><svg class=\"db-svg\" viewBox=\"0 0 200 78\"><rect class=\"f-mute\" x=\"20\" y=\"26\" width=\"28\" height=\"38\"/><rect class=\"f-mute\" x=\"62\" y=\"20\" width=\"28\" height=\"44\"/><rect class=\"f-mute\" x=\"104\" y=\"22\" width=\"28\" height=\"42\"/><rect class=\"f-mute\" x=\"146\" y=\"50\" width=\"28\" height=\"14\"/><path class=\"s-mute\" d=\"M10 64H190\"/><text class=\"t\" x=\"28\" y=\"74\">Q1</text><text class=\"t\" x=\"70\" y=\"74\">Q2</text><text class=\"t\" x=\"112\" y=\"74\">Q3</text><text class=\"t\" x=\"154\" y=\"74\">Q4</text></svg><div class=\"db-ui\"><span class=\"db-label\">alt</span><span class=\"db-input\">chart.png</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Does the image's job</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><svg class=\"db-svg\" viewBox=\"0 0 200 78\"><rect class=\"f-mute\" x=\"20\" y=\"26\" width=\"28\" height=\"38\"/><rect class=\"f-mute\" x=\"62\" y=\"20\" width=\"28\" height=\"44\"/><rect class=\"f-mute\" x=\"104\" y=\"22\" width=\"28\" height=\"42\"/><rect class=\"f-mute\" x=\"146\" y=\"50\" width=\"28\" height=\"14\"/><path class=\"s-mute\" d=\"M10 64H190\"/><text class=\"t\" x=\"28\" y=\"74\">Q1</text><text class=\"t\" x=\"70\" y=\"74\">Q2</text><text class=\"t\" x=\"112\" y=\"74\">Q3</text><text class=\"t\" x=\"154\" y=\"74\">Q4</text></svg><div class=\"db-ui\"><span class=\"db-label\">alt</span><span class=\"db-input\">Revenue held steady, then fell sharply in Q4</span></div></div></div></div></div>"
      },
      what: "WCAG 2.2 Success Criterion 1.1.1 Non-text Content, at Level A, requires that all non-text content presented to the user has a text alternative that serves the equivalent purpose. The standard lists exceptions and special cases: controls need a name describing their purpose, time-based media needs descriptive identification, tests and sensory experiences need identification, CAPTCHA needs an alternative in another modality, and anything purely decorative must be implemented so assistive technology can ignore it.",
      why: "Equivalent purpose is the phrase that matters. An image used as a link needs alt text describing where the link goes, not the picture. A chart needs the finding, not the word chart. Written properly, alt text is editorial work and belongs with the copy, which is why leaving it to developers at the end produces filenames read aloud.",
      how: [
        "Ask what job the image does on the page, then write text that does that job.",
        "Mark purely decorative images so assistive technology skips them rather than describing them.",
        "For an image that is a link or a button, describe the destination or action.",
        "Put alt text in the content brief and the CMS field, so writers supply it rather than developers."
      ],
      example: "A magnifying-glass icon that submits a search needs an alternative such as Search, not a description of a magnifying glass.",
      numbers: "WCAG 2.2 Success Criterion 1.1.1 is Level A, the baseline conformance level.",
      pitfall: "Filling every alt attribute for the sake of a green tick, including decorative images. A screen-reader user then hears a string of meaningless descriptions between the sentences they wanted.",
      source: "W3C, Web Content Accessibility Guidelines 2.2 (2023), Success Criterion 1.1.1 Non-text Content",
      verify: { status: "verified", note: "Exact wording, Level A rating and all six listed situations, including the decoration case, checked directly against the W3C Understanding document for SC 1.1.1 in WCAG 2.2." },
      belongs: { verdict: "core", why: "It is a legal requirement in many jurisdictions and a writing task that only the person who chose the image can do well." },
      related: [478, 492, 493, 494]
    },
    {
      n: 489,
      title: "Illustration style systems",
      aka: ["Illustration guidelines", "Drawing rules"],
      oneLine: "A written set of drawing rules so several illustrators produce work that looks like one hand.",
      demo: {
        caption: "On the right the line weight, corner radius and box size are fixed, so the three drawings read as one hand.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Three illustrators, one brief</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 72\"><path class=\"s\" style=\"stroke-width:1\" d=\"M16 34 L34 20 L52 34\"/><rect class=\"s\" style=\"stroke-width:1\" x=\"20\" y=\"34\" width=\"28\" height=\"16\" fill=\"none\"/><rect class=\"f\" x=\"82\" y=\"20\" width=\"34\" height=\"40\" rx=\"8\"/><path class=\"s\" style=\"stroke-width:4\" d=\"M116 30 C126 30 126 46 116 46\" fill=\"none\"/><circle class=\"s\" style=\"stroke-width:3\" cx=\"166\" cy=\"28\" r=\"14\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:3\" d=\"M166 42 V56\"/><text class=\"t\" x=\"6\" y=\"70\">three weights, three radii, three sizes</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three illustrators, written rules</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 72\"><path class=\"s\" style=\"stroke-width:2\" d=\"M18 38 L34 26 L50 38\"/><rect class=\"s\" style=\"stroke-width:2\" x=\"22\" y=\"38\" width=\"24\" height=\"20\" rx=\"2\" fill=\"none\"/><rect class=\"s\" style=\"stroke-width:2\" x=\"86\" y=\"26\" width=\"26\" height=\"32\" rx=\"2\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M112 34 C120 34 120 48 112 48\" fill=\"none\"/><circle class=\"s\" style=\"stroke-width:2\" cx=\"166\" cy=\"38\" r=\"12\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M166 50 V58\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M6 58 H194 M6 26 H194\"/><text class=\"t\" x=\"6\" y=\"70\">one weight, one radius, one box</text></svg></div></div></div>"
      },
      what: "An illustration style system fixes the variables that make drawings match: line weight or the absence of line, corner treatment, perspective, the palette and how many colours a single drawing may use, how people are represented, and what illustration is used for as opposed to photography. Large design systems publish these alongside their icon and image rules. The practice is real and widespread, though I could not find a canonical published source that names and defines it as a principle.",
      why: "Illustration is the easiest asset type to drift. Three illustrators with the same brief produce three styles, and a year later the product looks like a collage. Rules make the work commissionable, because a freelancer can hit the style without a long apprenticeship.",
      how: [
        "Fix line weight, corner radius and perspective first; those three carry most of the family resemblance.",
        "Limit the palette per drawing and state the limit as a number.",
        "Say what illustration is for and where photography takes over, so the two do not compete.",
        "Ship a starter file with the grid, palette and a reference drawing rather than a written description alone."
      ],
      example: "Icon systems show the pattern most clearly: Material Design fixes a 24 dp grid, a 2 dp stroke and a 2 dp default corner radius, and every icon drawn to those rules matches.",
      numbers: "",
      pitfall: "Rules that describe mood rather than geometry. Friendly and human is not a specification, and two illustrators will read it in opposite directions.",
      source: "Common design-system practice; no canonical source found",
      verify: { status: "unverified", note: "I could not verify a named, published source that defines illustration style systems as a principle. I tried the Shopify Polaris illustrations page, which now redirects to shopify.dev, and the IBM Carbon pictogram usage page, which returned 404. The Material Design icon specification I did verify covers icons rather than illustration, so I have used it only as an analogy and labelled it as such." },
      belongs: { verdict: "core", why: "Commissioning illustration that stays consistent across many hands is a real recurring problem, even though the practice lacks a canonical text." },
      related: [480, 490, 491, 492]
    },
    {
      n: 490,
      title: "Icon grid and keyline shapes",
      aka: ["Icon template", "Optical sizing grid"],
      oneLine: "A shared grid and a set of guide shapes so icons of different forms look the same size.",
      demo: {
        caption: "Both squares are 18 dp. On the right the circle grows to the 20 dp keyline, and the pair matches.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Both drawn 18 dp wide</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 98\"><rect class=\"f\" x=\"23\" y=\"17\" width=\"54\" height=\"54\"/><rect class=\"s-mute\" x=\"14\" y=\"8\" width=\"72\" height=\"72\" fill=\"none\"/><rect class=\"s-accent\" x=\"20\" y=\"14\" width=\"60\" height=\"60\" fill=\"none\" stroke-dasharray=\"3 3\"/><circle class=\"f\" cx=\"146\" cy=\"44\" r=\"27\"/><rect class=\"s-mute\" x=\"110\" y=\"8\" width=\"72\" height=\"72\" fill=\"none\"/><rect class=\"s-accent\" x=\"116\" y=\"14\" width=\"60\" height=\"60\" fill=\"none\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"14\" y=\"94\">square 18 dp</text><text class=\"t\" x=\"110\" y=\"94\">circle 18 dp</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Snapped to the keylines</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 98\"><rect class=\"f\" x=\"23\" y=\"17\" width=\"54\" height=\"54\"/><rect class=\"s-mute\" x=\"14\" y=\"8\" width=\"72\" height=\"72\" fill=\"none\"/><rect class=\"s-accent\" x=\"20\" y=\"14\" width=\"60\" height=\"60\" fill=\"none\" stroke-dasharray=\"3 3\"/><circle class=\"f\" cx=\"146\" cy=\"44\" r=\"30\"/><rect class=\"s-mute\" x=\"110\" y=\"8\" width=\"72\" height=\"72\" fill=\"none\"/><rect class=\"s-accent\" x=\"116\" y=\"14\" width=\"60\" height=\"60\" fill=\"none\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"14\" y=\"94\">square 18 dp</text><text class=\"t\" x=\"110\" y=\"94\">circle 20 dp</text></svg></div></div></div>"
      },
      what: "Material Design's system icons are drawn at 24 by 24 dp, with content kept inside a 20 by 20 dp live area and 2 dp of padding around it. Dense desktop layouts drop to 20 by 20 dp with a 16 by 16 dp live area. Sitting on that grid are keyline shapes that regulate size: a square of 18 by 18 dp, a circle of 20 dp diameter, a vertical rectangle 20 dp high by 16 dp wide and a horizontal rectangle 16 dp high by 20 dp wide. A square drawn to the same measurement as a circle looks bigger, so the keylines make the circle larger to compensate.",
      why: "Without keylines an icon set looks ragged even when every icon is technically the same size, because the eye judges area rather than bounding box. The grid also settles arguments, since an icon either sits on the keyline or it does not.",
      how: [
        "Draw every icon on the same grid with the same live area and padding.",
        "Snap circular forms to the circle keyline and square forms to the square keyline rather than to the outer box.",
        "Keep coordinates on whole numbers so shapes stay aligned to the pixel grid.",
        "Give 24 dp icons a 48 dp touch target, and 20 dp dense icons a 40 dp target."
      ],
      example: "Material's clipboard icon is built on the square keyline and its camera icon on the horizontal rectangle keyline, which is why the two look equally weighted in a toolbar.",
      numbers: "Material Design: 24 by 24 dp icon, 20 by 20 dp live area, 2 dp padding; dense 20 by 20 dp icon with a 16 by 16 dp live area and the same 2 dp padding. Keylines, given as height then width: square 18 dp by 18 dp, circle 20 dp diameter, vertical rectangle 20 dp by 16 dp, horizontal rectangle 16 dp by 20 dp. Touch targets 48 dp for 24 dp icons and 40 dp for 20 dp dense icons.",
      pitfall: "Drawing icons to fill the full 24 dp box. They then sit tight against neighbouring elements and look larger than the rest of the set.",
      source: "Google, Material Design 2 system icon guidance",
      verify: { status: "verified", note: "Every figure here, including the grid, live area, padding, all four keyline dimensions, the on-pixel positioning rule and the 48 dp and 40 dp touch targets, was read directly from Google's Material Design 2 system icons page." },
      belongs: { verdict: "core", why: "Anyone drawing or extending an icon set needs a grid and keylines, or the set will never look even." },
      related: [491, 492, 475, 476]
    },
    {
      n: 491,
      title: "Icon stroke-weight consistency",
      aka: ["Uniform line weight"],
      oneLine: "One stroke weight across a whole icon set, with small optical corrections where a shape demands it.",
      demo: {
        caption: "Four icons from one set. On the left the stroke weight drifts; on the right every line is the same 2 dp.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Mixed weights</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 44\"><circle class=\"s\" style=\"stroke-width:1\" cx=\"32\" cy=\"18\" r=\"9\" fill=\"none\"/><rect class=\"s\" style=\"stroke-width:1.6\" x=\"68\" y=\"9\" width=\"18\" height=\"18\" rx=\"1\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:2.6\" d=\"M120 8 L130 27 H110 Z\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:3.2\" d=\"M164 9 V27 M155 18 H173\"/><text class=\"t\" x=\"22\" y=\"40\">1 dp</text><text class=\"t\" x=\"66\" y=\"40\">1.6 dp</text><text class=\"t\" x=\"110\" y=\"40\">2.6 dp</text><text class=\"t\" x=\"154\" y=\"40\">3.2 dp</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One 2 dp stroke</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 44\"><circle class=\"s\" style=\"stroke-width:2\" cx=\"32\" cy=\"18\" r=\"9\" fill=\"none\"/><rect class=\"s\" style=\"stroke-width:2\" x=\"68\" y=\"9\" width=\"18\" height=\"18\" rx=\"1\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M120 8 L130 27 H110 Z\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M164 9 V27 M155 18 H173\"/><text class=\"t\" x=\"22\" y=\"40\">2 dp</text><text class=\"t\" x=\"66\" y=\"40\">2 dp</text><text class=\"t\" x=\"110\" y=\"40\">2 dp</text><text class=\"t\" x=\"154\" y=\"40\">2 dp</text></svg></div></div></div>"
      },
      what: "Material's system icons use a consistent 2 dp stroke across curves, angles and both interior and exterior strokes, with squared stroke terminals. Where an icon has too much detail to fit, Material allows an optical correction: the paperclip and the smoking icons drop to 1.5 dp of the available 2 dp stroke area so multiple curves fit inside 24 dp. Stroke alignment matters too, and Material recommends aligning the stroke to the inside of a shape in most cases. If the stroke is 2 dp or less, the corner radius must be 1 dp.",
      why: "Stroke weight is what your eye reads as the family resemblance in an icon set, more than the shapes themselves. A single icon drawn at a different weight stands out immediately in a toolbar, and users read the difference as importance rather than as a mistake.",
      how: [
        "Set one stroke weight for the set and keep it on interior strokes as well as outlines.",
        "Correct optically only where a shape cannot fit, and correct within the existing geometry rather than distorting it.",
        "Align strokes to the inside of shapes so the outer silhouette stays the intended size.",
        "Match icon stroke weight to the weight of the type it sits beside."
      ],
      example: "Material's paperclip icon uses 1.5 dp of the possible 2 dp stroke area so its curves fit inside the 24 by 24 dp space.",
      numbers: "Material Design: 2 dp standard stroke, optical corrections down to 1.5 dp, corner radius 1 dp when the stroke is 2 dp or less, recommended corner radius range 0 to 4 dp.",
      pitfall: "Mixing icons from two libraries. The weights differ by a fraction of a pixel, and the toolbar looks wrong without anyone being able to point at the offender.",
      source: "Google, Material Design 2 system icon guidance",
      verify: { status: "verified", note: "The 2 dp stroke rule, the 1.5 dp optical corrections on the paperclip and smoking icons, the inside stroke alignment recommendation, the 1 dp corner radius rule for strokes of 2 dp or less and the 0 to 4 dp radius range were all read directly from Google's Material Design 2 system icons page." },
      belongs: { verdict: "core", why: "Stroke weight is the single most visible consistency failure in icon work and the rule is cheap to apply." },
      related: [490, 492, 489, 476]
    },
    {
      n: 492,
      title: "Icon metaphor clarity",
      aka: ["Icon recognisability"],
      oneLine: "Very few icons are understood without a label, so test rather than assume.",
      demo: {
        caption: "Three objects on the left, each with one settled picture. On the right, three glyphs all in use for the same action.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Concrete objects</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 52\"><circle class=\"s\" style=\"stroke-width:2\" cx=\"33\" cy=\"20\" r=\"9\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M40 27 L49 36\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M88 26 L100 14 L112 26\" fill=\"none\"/><rect class=\"s\" style=\"stroke-width:2\" x=\"92\" y=\"26\" width=\"16\" height=\"13\" fill=\"none\"/><rect class=\"s\" style=\"stroke-width:2\" x=\"156\" y=\"20\" width=\"16\" height=\"19\" rx=\"1\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M152 19 H176 M161 15 H167\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">One action: share</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 52\"><circle class=\"f\" cx=\"28\" cy=\"16\" r=\"3.5\"/><circle class=\"f\" cx=\"28\" cy=\"32\" r=\"3.5\"/><circle class=\"f\" cx=\"44\" cy=\"24\" r=\"3.5\"/><path class=\"s\" style=\"stroke-width:1.5\" d=\"M31 17.5 L41 22.5 M31 30.5 L41 25.5\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M88 26 V39 H112 V26\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M100 34 V12 M94 18 L100 12 L106 18\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M152 34 C152 20 164 14 176 14\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:2\" d=\"M170 9 L177 14 L170 19\" fill=\"none\"/><text class=\"t\" x=\"22\" y=\"50\">share</text><text class=\"t\" x=\"86\" y=\"50\">share</text><text class=\"t\" x=\"150\" y=\"50\">share</text></svg></div></div></div>"
      },
      what: "Nielsen Norman Group's Aurora Harley, writing in July 2014, concluded that beyond a small handful such as home, print and the magnifying glass, most icons stay ambiguous because the same picture means different things in different products. Her advice is to test twice: for recognisability, by asking people what an icon represents, and for memorability, by returning weeks later to see whether the meaning stuck. She also applies a five-second rule, arguing that if an icon takes longer than five seconds to think up, it probably will not communicate.",
      why: "Designers know what their own icons mean, which makes internal review useless. Testing catches the ones that read as something else entirely, usually the abstract ones representing a process or a state rather than a physical object.",
      how: [
        "Prefer icons for concrete objects over abstract concepts, since objects have agreed pictures.",
        "Test recognisability by showing the icon alone and asking what it does.",
        "Test memorability weeks later with the same people, not fresh ones.",
        "If an icon needs a long explanation to justify it, replace it with a word."
      ],
      example: "The floppy disk still means save to millions of people who have never handled one; the same convention does not exist for share, sync or archive.",
      numbers: "Harley's five-second rule: an icon that takes longer than five seconds to conceive of is unlikely to communicate.",
      pitfall: "Inventing an icon for a concept that has no visual convention, then defending it because it makes sense once explained. Nobody reads the explanation.",
      source: "Aurora Harley, Icon Usability (Nielsen Norman Group, 27 July 2014)",
      verify: { status: "verified", note: "Checked directly against the Nielsen Norman Group article Icon Usability, dated 27 July 2014, including the home, print and magnifying glass exceptions, the recognisability and memorability test advice and the five-second rule. The floppy disk example is my own illustration of the point, not a claim from the article." },
      belongs: { verdict: "core", why: "Choosing and vetting icons is routine interface work, and there is published usability guidance on how to do it." },
      related: [493, 490, 494, 488]
    },
    {
      n: 493,
      title: "Icon plus label",
      aka: ["Labelled icons"],
      oneLine: "Pair an icon with visible text unless the icon is a genuinely established standard.",
      demo: {
        caption: "The same five controls. Name the third, fourth and fifth from the icon alone, then look at the right.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Icons only</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 58\"><path class=\"s\" style=\"stroke-width:1.8\" d=\"M10 22 L18 14 L26 22\" fill=\"none\"/><rect class=\"s\" style=\"stroke-width:1.8\" x=\"13\" y=\"22\" width=\"10\" height=\"8\" fill=\"none\"/><circle class=\"s\" style=\"stroke-width:1.8\" cx=\"56\" cy=\"19\" r=\"6\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:1.8\" d=\"M60.5 23.5 L65 28\"/><rect class=\"s\" style=\"stroke-width:1.8\" x=\"89\" y=\"21\" width=\"18\" height=\"9\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:1.8\" d=\"M98 8 V17 M94 13.5 L98 17.5 L102 13.5\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:1.8\" d=\"M134 8 V30\"/><path class=\"s\" style=\"stroke-width:1.8\" d=\"M134 10 H150 L146 15 L150 20 H134\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:1.8\" d=\"M180 9 L182.6 15.4 L189.5 15.9 L184.3 20.4 L185.9 27.1 L180 23.5 L174.1 27.1 L175.7 20.4 L170.5 15.9 L177.4 15.4 Z\" fill=\"none\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Icon plus visible label</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 58\"><path class=\"s\" style=\"stroke-width:1.8\" d=\"M10 22 L18 14 L26 22\" fill=\"none\"/><rect class=\"s\" style=\"stroke-width:1.8\" x=\"13\" y=\"22\" width=\"10\" height=\"8\" fill=\"none\"/><circle class=\"s\" style=\"stroke-width:1.8\" cx=\"56\" cy=\"19\" r=\"6\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:1.8\" d=\"M60.5 23.5 L65 28\"/><rect class=\"s\" style=\"stroke-width:1.8\" x=\"89\" y=\"21\" width=\"18\" height=\"9\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:1.8\" d=\"M98 8 V17 M94 13.5 L98 17.5 L102 13.5\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:1.8\" d=\"M134 8 V30\"/><path class=\"s\" style=\"stroke-width:1.8\" d=\"M134 10 H150 L146 15 L150 20 H134\" fill=\"none\"/><path class=\"s\" style=\"stroke-width:1.8\" d=\"M180 9 L182.6 15.4 L189.5 15.9 L184.3 20.4 L185.9 27.1 L180 23.5 L174.1 27.1 L175.7 20.4 L170.5 15.9 L177.4 15.4 Z\" fill=\"none\"/><text class=\"t\" x=\"18\" y=\"44\" text-anchor=\"middle\">Home</text><text class=\"t\" x=\"58\" y=\"44\" text-anchor=\"middle\">Search</text><text class=\"t\" x=\"98\" y=\"44\" text-anchor=\"middle\">Archive</text><text class=\"t\" x=\"140\" y=\"44\" text-anchor=\"middle\">Flag</text><text class=\"t\" x=\"180\" y=\"44\" text-anchor=\"middle\">Saved</text></svg></div></div></div>"
      },
      what: "Nielsen Norman Group's position, from the same 2014 article, is that a text label must be present alongside an icon to remove ambiguity, and that the label should be visible without any interaction. Text revealed on hover does not translate to touch devices, where there is no hover state to trigger it. The label also gives the control a name for screen readers and voice control, which an unlabelled glyph does not.",
      why: "A label costs a little space and buys back both comprehension and an accessible name. In a toolbar of unlabelled icons, users learn the two or three they need and never discover the rest, which quietly wastes everything else you built.",
      how: [
        "Put the label under or beside the icon, visible at rest rather than on hover.",
        "Keep the same label in the interface, the documentation and the search results.",
        "Where space genuinely forbids a label, restrict yourself to established conventions and give the control an accessible name.",
        "Do not rely on tooltips as the only labelling on touch interfaces."
      ],
      example: "Mobile tab bars almost universally pair icon and label, while desktop toolbars that hide labels behind hover leave most functions undiscovered.",
      numbers: "",
      pitfall: "Removing labels late in the process to tidy the layout. The interface looks calmer in a screenshot and gets slower to use.",
      source: "Aurora Harley, Icon Usability (Nielsen Norman Group, 27 July 2014)",
      verify: { status: "verified", note: "The requirement for a visible text label, the point that labels should not require interaction and the note that hover-revealed text fails on touch devices were all checked directly against the Nielsen Norman Group Icon Usability article of 27 July 2014." },
      belongs: { verdict: "core", why: "It is a concrete, testable interface rule with published usability evidence behind it, and it also carries accessibility weight." },
      related: [492, 488, 490]
    },
    {
      n: 494,
      title: "Pictogram standardisation",
      aka: ["Symbol signs", "Public information symbols"],
      oneLine: "Use the agreed public symbol rather than drawing your own version of it.",
      demo: {
        caption: "Both sides say three times as many. Only the right-hand one can be counted; the tall figure reads as far more.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One symbol, scaled up</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 86\"><circle class=\"f\" cx=\"40\" cy=\"53\" r=\"3.5\"/><path class=\"f\" d=\"M36 58 H44 L45 70 H35 Z\"/><circle class=\"f\" cx=\"130\" cy=\"19.5\" r=\"10.5\"/><path class=\"f\" d=\"M118 34 H142 L145 70 H115 Z\"/><path class=\"s-mute\" d=\"M6 70 H194\"/><text class=\"t\" x=\"28\" y=\"82\">1 unit</text><text class=\"t\" x=\"112\" y=\"82\">3 units</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One size, repeated</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 86\"><circle class=\"f\" cx=\"34\" cy=\"53\" r=\"3.5\"/><path class=\"f\" d=\"M30 58 H38 L39 70 H29 Z\"/><circle class=\"f\" cx=\"112\" cy=\"53\" r=\"3.5\"/><path class=\"f\" d=\"M108 58 H116 L117 70 H107 Z\"/><circle class=\"f\" cx=\"140\" cy=\"53\" r=\"3.5\"/><path class=\"f\" d=\"M136 58 H144 L145 70 H135 Z\"/><circle class=\"f\" cx=\"168\" cy=\"53\" r=\"3.5\"/><path class=\"f\" d=\"M164 58 H172 L173 70 H163 Z\"/><path class=\"s-mute\" d=\"M6 70 H194\"/><text class=\"t\" x=\"22\" y=\"82\">1 unit</text><text class=\"t\" x=\"100\" y=\"82\">3 units</text></svg></div></div></div>"
      },
      what: "The modern practice runs from Otto Neurath's Isotype, developed at Vienna's Social and Economic Museum between 1925 and 1934, with pictograms drawn by Gerd Arntz. Its governing rule was that greater quantities are shown by more symbols of the same size, never by one enlarged symbol. In 1974 AIGA, working with Roger Cook and Don Shanosky, produced 34 symbols for the US Department of Transportation, with 16 more added in 1979 to make 50. ISO 7001 has covered public information symbols since October 1980; the 2023 edition contains 177 symbols across seven categories.",
      why: "Standard symbols are already understood by travellers who do not read the local language, and they have been tested for comprehension. Redrawing them in a brand style throws away that recognition and, in transport or healthcare settings, can be a safety problem.",
      how: [
        "Check ISO 7001 and the AIGA symbol set before commissioning a new pictogram.",
        "Adopt the standard geometry and vary only line weight and colour to fit your system, if you must vary anything.",
        "Follow the Isotype rule in data pictograms: repeat the same symbol rather than scaling one up.",
        "If you create a new symbol, test it for comprehension with the actual audience."
      ],
      example: "The AIGA and DOT symbols for toilets, baggage claim and telephones are in almost every airport, and they came from a documented 1974 programme rather than from house style.",
      numbers: "AIGA and DOT: 34 symbols in 1974, 16 more in 1979, 50 in total. ISO 7001:2023: 177 symbols in seven categories, the standard first released in October 1980.",
      pitfall: "Restyling a wayfinding symbol until it no longer matches the version on the sign outside. Scaling a pictogram in a chart to show a quantity is the other classic error, because the reader compares area rather than height.",
      source: "Otto Neurath and Gerd Arntz, Isotype (1925-1934); AIGA and US DOT, Symbol Signs (1974, expanded 1979); ISO 7001 (1980; 2023 edition)",
      verify: { status: "verified", note: "Isotype dates, Arntz's role, Marie Neurath as transformer and the more-symbols-not-bigger-symbols rule checked against Wikipedia's Isotype (picture language) article. The 34 and 16 symbol counts, Cook and Shanosky and the November 1974 Symbol Signs report checked against Wikipedia's DOT pictograms article. ISO 7001's 1980 first publication, the 2023 edition's 177 symbols in seven categories and the ISO 22727 process reference checked against Wikipedia's ISO 7001 article. I could not verify any specific comprehension percentage threshold from ISO 9186, so none is quoted." },
      belongs: { verdict: "core", why: "Wayfinding, signage and data pictograms are design work, and the first decision is whether a tested standard symbol already exists." },
      related: [495, 492, 490, 488]
    },
    {
      n: 495,
      title: "Safety and hazard symbol standards",
      aka: ["ISO 7010", "GHS pictograms"],
      oneLine: "Safety symbols are prescribed by standards and law, so they are specified rather than designed.",
      demo: {
        caption: "The five ISO 3864 shape and colour pairings, colours approximate. The pairing carries the meaning before any symbol goes inside.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 88\"><circle cx=\"32\" cy=\"32\" r=\"19\" fill=\"#ffffff\" stroke=\"#cc2229\" stroke-width=\"6\"/><path d=\"M20.7 20.7 L43.3 43.3\" stroke=\"#cc2229\" stroke-width=\"6\" fill=\"none\"/><circle cx=\"96\" cy=\"32\" r=\"22\" fill=\"#005387\"/><path d=\"M160 11 L182 51 H138 Z\" fill=\"#f2b417\" stroke=\"#111111\" stroke-width=\"3\"/><rect x=\"202\" y=\"10\" width=\"44\" height=\"44\" fill=\"#1d7a4d\"/><rect x=\"266\" y=\"10\" width=\"44\" height=\"44\" fill=\"#cc2229\"/><text class=\"t\" x=\"32\" y=\"70\" text-anchor=\"middle\">prohibition</text><text class=\"t\" x=\"96\" y=\"70\" text-anchor=\"middle\">mandatory</text><text class=\"t\" x=\"160\" y=\"70\" text-anchor=\"middle\">warning</text><text class=\"t\" x=\"224\" y=\"70\" text-anchor=\"middle\">safe</text><text class=\"t\" x=\"224\" y=\"82\" text-anchor=\"middle\">condition</text><text class=\"t\" x=\"288\" y=\"70\" text-anchor=\"middle\">fire</text><text class=\"t\" x=\"288\" y=\"82\" text-anchor=\"middle\">equipment</text></svg></div>"
      },
      what: "ISO 7010 was published in October 2003, splitting off from ISO 3864:1984 and taking in the fire safety signs of ISO 6309:1987. It uses the colour and shape system of ISO 3864 with five combinations: red circle with a diagonal bar for prohibition, blue circle for mandatory action, yellow triangle for warning, green square for safe conditions such as exits, and red square for fire equipment. Chemical labelling runs on a separate system, the United Nations Globally Harmonized System. Appendix C of OSHA's Hazard Communication Standard designates eight hazard pictograms and prescribes the form: a square set at a point, with a black hazard symbol on a white background inside a red frame wide enough to be clearly visible. OSHA's website offers a ninth, the Environment pictogram, for download, but environmental hazards are not covered by its labelling requirements.",
      why: "These symbols are legally specified and their whole value is that they look identical everywhere. A designer's job is to source the correct symbol, place it at a legible size and stay out of the way.",
      how: [
        "Look up the governing standard for the territory and sector before drawing anything.",
        "Use the prescribed shape and colour pairing without adapting it to a brand palette.",
        "Keep the required clearance and minimum viewing sizes given in the standard.",
        "Buy or licence the official artwork rather than tracing an image found online."
      ],
      example: "The green running-man exit sign, the yellow warning triangle and the red diamond chemical pictograms on a bleach bottle all come from these standards, not from the manufacturer's designer.",
      numbers: "ISO 7010 defines five shape and colour combinations and was published in October 2003. OSHA's Hazard Communication Standard designates eight hazard pictograms in Appendix C, drawn as a square set at a point with a black symbol on white inside a red frame; a ninth, Environment, is offered for download but is not part of OSHA's labelling requirements.",
      pitfall: "Restyling safety symbols to match a brand. Aside from the legal exposure, a recoloured warning triangle loses the instant recognition that made it worth using.",
      source: "ISO 7010 (2003) and ISO 3864; UN Globally Harmonized System, as implemented in the OSHA Hazard Communication Standard",
      verify: { status: "adjusted", note: "ISO 7010's October 2003 publication, its split from ISO 3864:1984, the absorption of ISO 6309:1987 fire safety signs and the five shape and colour combinations checked against Wikipedia's ISO 7010 article. The square set at a point with a black hazard symbol on a white background inside a red frame sufficiently wide to be clearly visible is quoted from 29 CFR 1910.1200 Appendix C, section C.2.3.1, via OSHA's pictograms page. Adjusted the count: the entry said OSHA lists nine pictograms, but Appendix C Figure C.1 designates eight, and the ninth on OSHA's download page, Environment, is not addressed by its labelling requirements. The UNECE page on GHS returned 403, so no UN total is quoted." },
      belongs: { verdict: "adjacent", why: "Overturned from core. These symbols are prescribed by standards and law, so the subject is compliance rather than design, in the same category as image rights. The design use is narrow and worth stating: source the official artwork, size it legibly, and do not redraw it in the house style." },
      related: [494, 492, 490]
    },
    {
      n: 9477,
      title: "Text over image legibility",
      aka: ["Scrim", "Overlay contrast"],
      oneLine: "Type placed on a photograph needs a contrast treatment, because photographs are not flat backgrounds.",
      demo: {
        caption: "Same photograph, same white headline. The gradient behind the text is the only thing added on the right.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No treatment</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 138\"><rect x=\"6\" y=\"6\" width=\"208\" height=\"46\" fill=\"#dce7f1\"/><rect x=\"6\" y=\"52\" width=\"208\" height=\"8\" fill=\"#7d8b78\"/><rect x=\"6\" y=\"60\" width=\"208\" height=\"58\" fill=\"#e6ddc6\"/><text x=\"16\" y=\"94\" fill=\"#ffffff\" font-size=\"17\" font-weight=\"600\">Summer in the</text><text x=\"16\" y=\"112\" fill=\"#ffffff\" font-size=\"17\" font-weight=\"600\">high pastures</text><text class=\"t\" x=\"6\" y=\"132\">white on this field: about 1.3 : 1</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Gradient scrim</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 138\"><defs><linearGradient id=\"dbScrim9477\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0.4\" stop-color=\"#000000\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#000000\" stop-opacity=\"0.82\"/></linearGradient></defs><rect x=\"6\" y=\"6\" width=\"208\" height=\"46\" fill=\"#dce7f1\"/><rect x=\"6\" y=\"52\" width=\"208\" height=\"8\" fill=\"#7d8b78\"/><rect x=\"6\" y=\"60\" width=\"208\" height=\"58\" fill=\"#e6ddc6\"/><rect x=\"6\" y=\"6\" width=\"208\" height=\"112\" fill=\"url(#dbScrim9477)\"/><text x=\"16\" y=\"94\" fill=\"#ffffff\" font-size=\"17\" font-weight=\"600\">Summer in the</text><text x=\"16\" y=\"112\" fill=\"#ffffff\" font-size=\"17\" font-weight=\"600\">high pastures</text><text class=\"t\" x=\"6\" y=\"132\">under the scrim: clears 4.5 : 1</text></svg></div></div></div>"
      },
      what: "White type on a hero image is legible over the dark part of the picture and disappears over the bright part. WCAG 2.2 Success Criterion 1.4.3 sets the contrast floor at 4.5:1 for normal text and 3:1 for large text, where large means at least 18 point or 14 point bold. Photographs vary across the frame, so the only reliable fixes are a scrim, a gradient, a solid panel or a blurred backing behind the text. Apple's visionOS guidance takes the same approach, recommending a feathered glass background behind text over spatial photos to add contrast.",
      why: "This is one of the most common failures in real projects, because the design is approved with one photograph and the client later swaps in a brighter one. A treatment applied to the container rather than to the picture survives that swap.",
      how: [
        "Apply the darkening or lightening treatment to a layer over the image, not to the image file.",
        "Measure contrast against the lightest and darkest pixels the text actually sits on, not the average.",
        "Prefer a gradient anchored to the text area over a flat overlay, which dulls the whole picture.",
        "Set a rule in the CMS that images used behind text must pass the contrast check."
      ],
      example: "A gradient scrim running from transparent at the top to a dark tone behind a headline is the standard fix on news and streaming card layouts.",
      numbers: "WCAG 2.2 SC 1.4.3, Level AA: 4.5:1 for normal text, 3:1 for large text, where large text is at least 18 point or 14 point bold, roughly 24px and 18.5px.",
      pitfall: "Testing on one hero photograph. The next image the client uploads is a bright sky, and the headline vanishes on every phone.",
      source: "W3C, Web Content Accessibility Guidelines 2.2 (2023), Success Criterion 1.4.3 Contrast (Minimum)",
      verify: { status: "verified", note: "Ratios, Level AA rating and the large-text definition in points and approximate pixels checked directly against the W3C Understanding document for SC 1.4.3. Apple's feathered glass recommendation for text over spatial photos checked against the Apple HIG Images page. Added as a gap: the master list covers image hierarchy and image treatment but has no entry for the very common case of type placed on top of a photograph." },
      belongs: { verdict: "core", why: "Text over imagery appears on almost every hero and card layout, and it has a measurable published standard attached to it." },
      related: [477, 479, 488, 473]
    },
    {
      n: 9481,
      title: "Image rights, releases and licensing",
      aka: ["Model release", "Usage rights"],
      oneLine: "Permission to publish a picture is separate from the picture itself, and it has limits.",
      demo: {
        none: "Whether a picture may be published turns on signed permissions and licence wording, and any drawing of that would only restate the sentence as words in a box."
      },
      what: "A model release is a signed permission from the person in a photograph allowing it to be published. Taking the photograph does not require one; publishing it can, and the liability sits with the publisher rather than the photographer. News and editorial use of people in public places generally needs no release, while commercial use promoting a product or service generally does. Releases come in adult, minor and group forms, with a parent or guardian signing for a minor. Stock licences carry their own separate limits on territory, duration and media.",
      why: "This is the part of image work that produces legal letters. A client's brochure photograph reused in a paid advertisement two years later, or a staff portrait kept online after the person leaves, are the ordinary ways it goes wrong. Checking rights is faster than unwinding a campaign.",
      how: [
        "Get signed releases at the shoot, including for anyone in the background who is identifiable.",
        "Record the licence terms with the asset, including expiry, territory and permitted media.",
        "Check whether the intended use is editorial or commercial before choosing a library image.",
        "Ask about property releases for private buildings, interiors and recognisable artworks."
      ],
      example: "A staff portrait shot for a website and later used in a paid advertising campaign is a change of use that the original release may not cover.",
      numbers: "",
      pitfall: "Assuming a paid stock licence covers everything. Many exclude sensitive contexts, print runs above a threshold, or use in logos and merchandise.",
      source: "Standard photographic and publishing practice; model release conventions are well documented",
      verify: { status: "verified", note: "The definition of a model release, the point that publication rather than capture triggers the requirement, the publisher-side liability, the editorial versus commercial distinction and the adult, minor and group release types checked against Wikipedia's Model release article. That article does not cover property releases, so I have raised them as a question to ask rather than stating rules. Added as a gap: the master list covers choosing authentic imagery but has nothing on the right to publish it." },
      belongs: { verdict: "adjacent", why: "The subject is law rather than design, but the specific design use is concrete: it decides which images a designer may put into a layout and what has to be collected at a shoot." },
      related: [481, 480, 489]
    },
    {
      n: 9484,
      title: "Colour management for images",
      aka: ["ICC profiles", "sRGB and Display P3"],
      oneLine: "An image without an embedded colour profile is a guess about what its numbers mean.",
      demo: {
        caption: "One chromaticity chart, two gamuts. Each triangle's red corner is where the numbers 255, 0, 0 actually land.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 150\"><path class=\"s-mute\" d=\"M75.7 137.3 L49.2 119.4 L22.6 62.6 L43.8 21.3 L93.5 32.4 L139.4 50.6 L184 69.9 L220.6 85.8 L241.3 94.8 L255.1 100.9 Z\"/><path class=\"s-accent\" d=\"M237.6 93.2 L104.8 41.4 L68 129.6 Z\"/><path class=\"s\" d=\"M224.8 91.8 L116 54 L68 129.6 Z\"/><circle class=\"f\" cx=\"224.8\" cy=\"91.8\" r=\"3\"/><circle class=\"f-accent\" cx=\"237.6\" cy=\"93.2\" r=\"3\"/><path class=\"s-mute\" d=\"M224.8 95 V116 M237.6 96 V116 M224.8 116 H237.6\"/><text class=\"t\" x=\"146\" y=\"132\">same numbers: 255, 0, 0</text><path class=\"s\" d=\"M196 18 H214\"/><text class=\"t\" x=\"218\" y=\"21\">sRGB</text><path class=\"s-accent\" d=\"M196 30 H214\"/><text class=\"t\" x=\"218\" y=\"33\">Display P3</text></svg></div>"
      },
      what: "The same RGB numbers describe different colours in different colour spaces, so a file needs a profile saying which space it was authored in. WebKit assumes sRGB when an image carries no tagged profile, and colour-matches images that do carry one. Modern Apple displays support Display P3, which Dean Jackson's 2016 WebKit article describes as about 25 per cent wider than sRGB, with more room in saturated reds, yellows, purples and greens. A later update to that same article puts the difference at about 50 per cent by volume, measuring roughly 1.2 million Lab units against sRGB's 0.8 million, so the size of the gain depends on how you count it. Apple's own image guidance asks designers to include a colour profile with each image.",
      why: "Untagged wide-gamut photographs look flat or oversaturated depending on where they land, and brand colours drift between a photograph, a CSS value and a print proof. Tagging files is close to free and removes an entire class of nobody-can-reproduce-it colour complaints.",
      how: [
        "Embed a colour profile in every exported image rather than stripping it to save bytes.",
        "Author in sRGB unless you have a specific reason to go wider, since sRGB is the safe assumption.",
        "Serve wide-gamut versions conditionally with the color-gamut media query inside a picture element.",
        "Check brand colours across a photograph, a flat CSS fill and a printed sample before signing anything off."
      ],
      example: "WebKit's recommended pattern uses a source with media of color-gamut: p3 for the wide version and a plain img with the sRGB file as the fallback.",
      numbers: "WebKit's 2016 article calls Display P3 about 25 per cent wider than sRGB; an update to the same article puts it at about 50 per cent larger by volume, roughly 1.2 million Lab units against 0.8 million. Untagged images are treated as sRGB by WebKit.",
      pitfall: "Optimisation pipelines that strip metadata by default. The profile goes with it, and every wide-gamut photograph on the site shifts.",
      source: "Dean Jackson, Improving Color on the Web (WebKit, 1 July 2016); Apple, Human Interface Guidelines: Images",
      verify: { status: "adjusted", note: "The 25 per cent wider figure, the sRGB assumption for untagged images, WebKit's colour matching of tagged images and the color-gamut media query inside a picture element all checked directly against Dean Jackson's WebKit article of 1 July 2016. Adjusted because that article carries a later update giving a different answer, about 50 per cent larger by volume in Lab units, and quoting only the 25 per cent figure hid the disagreement. The instruction to include a colour profile with each image checked against Apple's HIG Images page. Added as a gap: the master list covers resolution, format and compression but has no entry on colour spaces or profiles." },
      belongs: { verdict: "core", why: "Colour accuracy across images, screens and print is a designer's responsibility, and profile handling is the mechanism that makes it work." },
      related: [484, 486, 474, 473]
    }
  ]
};
