window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[18] = {
  n: 18,
  slug: "motion",
  title: "Motion and animation",
  blurb: "How things move on screen: the animator's craft rules, the timing numbers, and the safety limits.",
  intro: "Motion design has two parents. The older one is drawn character animation, where Disney animators worked out through the 1930s how to make a drawing feel like it had weight, and Frank Thomas and Ollie Johnston wrote the results down in 1981 as the twelve principles. The younger one is interface work, where the same ideas got rebuilt around durations, easing curves and springs, mostly published by Google and Apple in their platform guidance. Almost everything in this section is craft rather than science, so the honest sources are books, specifications and platform documentation rather than studies. Two things do have hard published limits: how long a person will wait before an interface feels broken, and how much movement you can put on screen before you make somebody ill. Those limits are the ones worth memorising.",
  sources: [
    "Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981)",
    "Material Design 1 motion guidance (Google, the original spec, still online at m1.material.io): Duration and easing, Movement, Choreography",
    "Google, Material Design original Animation section: Meaningful transitions, the source of the hierarchical timing guidance. This page is not on m1.material.io and was read from an archived copy of the original spec",
    "Material Design 2 motion guidance (Google): Understanding motion, The motion system, Speed, Choreography, Elevation",
    "Material Design 3 easing and duration tokens, as published in the Material Components for Android motion documentation",
    "Apple, Human Interface Guidelines: Motion (accessed August 2026)",
    "Apple, WWDC 2018 session 803, Designing Fluid Interfaces",
    "Apple Developer Documentation, UISpringTimingParameters",
    "Dan Saffer, Microinteractions: Designing with Details, O'Reilly (2013)",
    "Issara Willenskomer, Creating Usability with Motion: The UX in Motion Manifesto (31 March 2017)",
    "W3C, Web Content Accessibility Guidelines 2.2, Success Criteria 2.2.2, 2.3.1 and 2.3.3",
    "W3C, Media Queries Level 5, prefers-reduced-motion",
    "Val Head, Designing Safer Web Animation For Motion Sensitivity, A List Apart (8 September 2015)",
    "Google, RAIL performance model, web.dev",
    "Google, Animations guide (compositor-only properties), web.dev",
    "Jakob Nielsen, Response Times: The 3 Important Limits (1993), citing Miller (1968) and Card, Robertson and Mackinlay (1991)",
    "Katie Sherwin, Progress Indicators Make a Slow System Less Insufferable, Nielsen Norman Group (26 October 2014)",
    "MDN Web Docs, View Transition API",
    "Android Developers, ViewAnimationUtils.createCircularReveal (API level 21)",
    "The Guardian, Why iOS 7 is making some users sick (27 September 2013)"
  ],
  entries: [
    {
      n: 721,
      title: "Squash and stretch",
      aka: [],
      oneLine: "A moving object flattens and elongates while keeping its volume, so it reads as flesh rather than cardboard.",
      demo: {
        caption: "Same ball at three moments. Only the height changes on the left; on the right the width compensates and volume holds.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Height only</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 96\"><path class=\"s-mute\" d=\"M4 78 H148\"/><ellipse class=\"f\" cx=\"28\" cy=\"50\" rx=\"20\" ry=\"28\"/><ellipse class=\"f\" cx=\"76\" cy=\"64\" rx=\"20\" ry=\"14\"/><ellipse class=\"f\" cx=\"126\" cy=\"58\" rx=\"20\" ry=\"20\"/><text class=\"t\" x=\"28\" y=\"92\" text-anchor=\"middle\">stretch</text><text class=\"t\" x=\"76\" y=\"92\" text-anchor=\"middle\">squash</text><text class=\"t\" x=\"126\" y=\"92\" text-anchor=\"middle\">rest</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Volume held</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 96\"><path class=\"s-mute\" d=\"M4 78 H148\"/><ellipse class=\"f\" cx=\"28\" cy=\"50\" rx=\"14\" ry=\"28\"/><ellipse class=\"f\" cx=\"76\" cy=\"64\" rx=\"28\" ry=\"14\"/><ellipse class=\"f\" cx=\"126\" cy=\"58\" rx=\"20\" ry=\"20\"/><text class=\"t\" x=\"28\" y=\"92\" text-anchor=\"middle\">stretch</text><text class=\"t\" x=\"76\" y=\"92\" text-anchor=\"middle\">squash</text><text class=\"t\" x=\"126\" y=\"92\" text-anchor=\"middle\">rest</text></svg></div></div></div>"
      },
      what: "This is the first of the twelve principles Thomas and Johnston set out. A ball flattens when it hits the floor and elongates along its path when it is travelling fast. The rule that makes it convincing is constant volume: whatever a shape loses in height it gains in width, otherwise it looks like it is inflating and deflating instead of deforming. The same logic scales up from a ball to a face, a body or a coat.",
      why: "Deformation is how an audience reads weight and material. A shape that squashes on landing feels soft and heavy, and one that holds its outline feels hard. Kept very small, the same trick makes an interface control feel physically pressed rather than merely recoloured.",
      how: [
        "Hold the volume constant: widen as you flatten, narrow as you stretch.",
        "Squash at the moment of impact and stretch along the direction of travel at peak speed.",
        "In interface work keep it to a few per cent of scale, and only on soft objects such as buttons and chips.",
        "Leave rigid things rigid. Tables, panels, photographs and blocks of text should not wobble."
      ],
      example: "The bouncing-ball exercise that opens most animation courses: the ball elongates as it falls, flattens on contact, and springs back to a rounder shape as it rises.",
      numbers: "",
      pitfall: "Scaling an element on one axis only, so it reads as growing rather than squashing. In product work the commoner failure is applying it everywhere, which turns a serious tool into a toy.",
      source: "Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981)",
      verify: {
        status: "verified",
        note: "Checked the names and ordering of the twelve principles against Wikipedia's article on the twelve basic principles of animation, which sources them to Thomas and Johnston's 1981 book and to Disney studio practice from the 1930s. I did not have the book open, so the wording here is a paraphrase and not a quotation."
      },
      belongs: {
        verdict: "core",
        why: "Weight and material are read from deformation, and the constant-volume rule transfers straight to any animated illustration, icon or control."
      },
      related: [725, 726, 729, 736]
    },
    {
      n: 722,
      title: "Anticipation (animation)",
      aka: ["Anticipation"],
      oneLine: "A small movement in the opposite direction before the main action, so the viewer sees it coming.",
      demo: {
        caption: "Both plot position against time. The right dips below the rest line before the move, warning the eye.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No wind-up</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 156 100\"><path class=\"s-mute\" d=\"M12 12 V82 H150\"/><path class=\"s-mute\" d=\"M12 60 H150\" style=\"stroke-dasharray:4 4\"/><path class=\"s-accent\" d=\"M12 60 L48 60 C 68 60, 88 20, 150 20\"/><text class=\"t\" x=\"12\" y=\"8\">position</text><text class=\"t\" x=\"150\" y=\"96\" text-anchor=\"end\">time</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Anticipation</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 156 100\"><path class=\"s-mute\" d=\"M12 12 V82 H150\"/><path class=\"s-mute\" d=\"M12 60 H150\" style=\"stroke-dasharray:4 4\"/><path class=\"s-accent\" d=\"M12 60 L32 60 Q 46 76, 58 64 C 78 52, 98 20, 150 20\"/><text class=\"t\" x=\"12\" y=\"8\">position</text><text class=\"t\" x=\"52\" y=\"96\" text-anchor=\"middle\">wind-up</text><text class=\"t\" x=\"150\" y=\"96\" text-anchor=\"end\">time</text></svg></div></div></div>"
      },
      what: "Two unrelated principles share this name. This one is the wind-up before a movement, from Disney animation. Tognazzini's anticipation at 568 is a placement rule about bringing the user what they will need, and it has nothing to do with this. A character crouches before jumping. A bowler pulls the arm back before the delivery. The preparatory move is smaller and slower than the action it announces, and it points the eye at the place the action will happen. Without it, a movement appears from nowhere and reads as an edit rather than an event.",
      why: "The eye needs a moment of warning to track something. Anticipation also sells effort: the size of the wind-up tells you how much force is being spent, which is why a heavy object needs a longer preparation than a light one.",
      how: [
        "Move a little against the direction of the main action, then release.",
        "Scale the wind-up to the force: heavy and slow gets more, light and quick gets almost none.",
        "On anything the user triggered, keep the anticipation short enough that it adds no felt delay.",
        "Point the anticipation at the target so the eye arrives before the object does."
      ],
      example: "A golf backswing. The interface version is a control that compresses slightly under the press before the panel it opens expands.",
      numbers: "",
      pitfall: "Putting anticipation in front of a response to a tap. The person has already acted, so the wind-up is experienced as lag, not as craft.",
      source: "Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981)",
      verify: {
        status: "verified",
        note: "Confirmed as the second of the twelve principles in the published list sourced to Thomas and Johnston (1981). Description paraphrased, not quoted. Corrected in review: the earlier interface example described a floating action button dipping into the surface before expanding, which is not in Material Design's transforming material guidance and could not be confirmed anywhere else. The example is now written as a technique rather than as a claim about a shipped product."
      },
      belongs: {
        verdict: "core",
        why: "Preparing the eye before a movement is a general rule of legible motion, and it applies whenever something on screen is about to change position or size."
      },
      related: [721, 723, 729, 741, 568]
    },
    {
      n: 723,
      title: "Staging",
      aka: ["Presentation of an idea"],
      oneLine: "Present one idea at a time, clearly enough that the audience cannot miss what matters.",
      demo: {
        caption: "Left: everything moves and nothing is the subject. Right: one mark moves and the eye knows where to look.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Six things move</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-dot db-anim db-anim--slide db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--slide db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--slide db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--slide db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--slide db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--slide db-anim--ease\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One subject</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot db-anim db-anim--slide db-anim--ease\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span><span class=\"db-dot\"></span></div></div></div></div>"
      },
      what: "Staging is direction. Pose, framing, timing and background are arranged so the point of the shot is unmistakable, and everything that would compete with it is quietened or held still. The classic test is the silhouette: black out the figure, and the action should still read. Interface motion inherits the rule directly, because a transition where six things move at once has no subject.",
      why: "People can only follow one moving focal point properly. Staging decides what that point is instead of letting the busiest element win by accident.",
      how: [
        "Name the one thing the transition is about, then hold everything else still.",
        "Sequence competing movements rather than running them together.",
        "Check the silhouette or a greyscale version: if the action is unreadable there, it is unreadable at speed.",
        "In a shared transition, carry only the elements that genuinely matter across."
      ],
      example: "Material Design's container transform: a card expands into a detail page while the surrounding grid stays put, so the eye follows one object through the change.",
      numbers: "",
      pitfall: "Animating a page in as a set of independent fade-ups. Nothing is staged, so the eye picks a random starting point and the sequence teaches nothing.",
      source: "Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981); Material Design 1 choreography guidance (Google)",
      verify: {
        status: "verified",
        note: "Third of the twelve in the published list. The interface application is checked against Material Design 1's choreography page, which says that when multiple elements remain visible during a transition only the most important ones should be included, and warns against scenes without focus. Material Design 2 carries the same idea under the heading focal elements. Corrected in review: this advice sits in the original Material spec, not in Material Design 2's rewritten choreography page."
      },
      belongs: {
        verdict: "core",
        why: "Deciding what the viewer should look at is the first decision in any piece of motion, on screen or on film."
      },
      related: [722, 737, 739, 743]
    },
    {
      n: 724,
      title: "Straight-ahead action and pose to pose",
      aka: ["Straight ahead versus keys and in-betweens"],
      oneLine: "Two ways to build a sequence: draw frame after frame, or set the key poses and fill between them.",
      demo: {
        caption: "Left fixes the two extremes first and interpolates between them. Right builds forward frame by frame and drifts in scale.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Pose to pose</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 76\"><circle class=\"f-accent\" cx=\"14\" cy=\"34\" r=\"7\"/><circle class=\"f-mute\" cx=\"25\" cy=\"34\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"36\" cy=\"34\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"47\" cy=\"34\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"59\" cy=\"34\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"70\" cy=\"34\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"81\" cy=\"34\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"92\" cy=\"34\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"103\" cy=\"34\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"115\" cy=\"34\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"126\" cy=\"34\" r=\"3.5\"/><circle class=\"f-accent\" cx=\"138\" cy=\"34\" r=\"7\"/><text class=\"t\" x=\"14\" y=\"60\" text-anchor=\"middle\">key</text><text class=\"t\" x=\"76\" y=\"60\" text-anchor=\"middle\">in-betweens</text><text class=\"t\" x=\"138\" y=\"60\" text-anchor=\"middle\">key</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Straight ahead</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 76\"><circle class=\"f\" cx=\"14\" cy=\"38\" r=\"3\"/><circle class=\"f\" cx=\"25\" cy=\"39\" r=\"3.4\"/><circle class=\"f\" cx=\"36\" cy=\"37\" r=\"3.7\"/><circle class=\"f\" cx=\"47\" cy=\"36\" r=\"4.1\"/><circle class=\"f\" cx=\"59\" cy=\"38\" r=\"4.4\"/><circle class=\"f\" cx=\"70\" cy=\"35\" r=\"4.8\"/><circle class=\"f\" cx=\"81\" cy=\"34\" r=\"5.1\"/><circle class=\"f\" cx=\"92\" cy=\"36\" r=\"5.5\"/><circle class=\"f\" cx=\"103\" cy=\"33\" r=\"5.8\"/><circle class=\"f\" cx=\"115\" cy=\"32\" r=\"6.2\"/><circle class=\"f\" cx=\"126\" cy=\"31\" r=\"6.5\"/><circle class=\"f\" cx=\"138\" cy=\"29\" r=\"7\"/><text class=\"t\" x=\"14\" y=\"60\" text-anchor=\"middle\">1</text><text class=\"t\" x=\"76\" y=\"60\" text-anchor=\"middle\">drawn in order</text><text class=\"t\" x=\"138\" y=\"60\" text-anchor=\"middle\">12</text></svg></div></div></div>"
      },
      what: "Straight ahead means starting at the first frame and working forward, which produces spontaneous, unpredictable energy and tends to drift in scale and proportion. Pose to pose means drawing the extremes first and filling in the in-betweens, which keeps control of timing and staging at the cost of some liveliness. Production work mixes them: pose to pose for the structure, straight ahead for fire, water, smoke and cloth.",
      why: "It is a planning decision, and the digital version of it is live. A timed curve is pose to pose: you declare the start, the end and the duration. A spring or a gesture-driven value is straight ahead: the motion is computed forward from where it is now and you cannot state in advance exactly what frame twelve looks like.",
      how: [
        "Use keyframes and a curve when the motion must land on an exact state at an exact time.",
        "Use physics when the motion has to respond to input you cannot predict, such as a flick.",
        "Do not drive the same property with both a curve and a simulation.",
        "Plan the extremes first, whichever method you then use to get between them."
      ],
      example: "A modal that must settle at a specific size and position is keyframed. A bottom sheet dragged by a finger and released is run by a spring fed with the release velocity.",
      numbers: "",
      pitfall: "Choosing springs because they feel modern, then needing an exact end state and an exact duration for a design specification. Springs do not give you either.",
      source: "Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981)",
      verify: {
        status: "verified",
        note: "Fourth of the twelve in the published list sourced to Thomas and Johnston (1981). The keyframe-versus-simulation parallel is an analogy drawn here, not something the book says."
      },
      belongs: {
        verdict: "adjacent",
        why: "As published it is a decision about the order in which drawings get made, which has no direct counterpart in interface work. Its usefulness on screen comes through an analogy, keyframes versus physics, that the book does not make. Downgraded in review from core for the same reason as solid drawing and appeal."
      },
      related: [729, 736, 750]
    },
    {
      n: 725,
      title: "Follow-through and overlapping action",
      aka: ["Drag"],
      oneLine: "Loose parts carry on after the main mass stops, and different parts start and stop at different times.",
      demo: {
        caption: "Same three parts, same distance. On the right the lighter parts start later and settle later, so the group has mass.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Lockstep</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-dot db-dot--lg db-anim db-anim--slide db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--slide db-anim--ease\"></span><span class=\"db-dot db-dot--sm db-anim db-anim--slide db-anim--ease\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Offset</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-dot db-dot--lg db-anim db-anim--slide db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--slide db-anim--ease\" style=\"animation-delay:0.16s\"></span><span class=\"db-dot db-dot--sm db-anim db-anim--slide db-anim--ease\" style=\"animation-delay:0.32s\"></span></div></div></div></div>"
      },
      what: "Follow-through is what happens after the stop: hair, cloth and limbs continue, then settle. Overlapping action is the refusal to move everything in lockstep, so a trailing mass starts a little later and arrives a little later than the part that leads. Both come from the same physical fact, which is that connected objects with different weights cannot change speed together.",
      why: "A simultaneous start and a simultaneous stop is the signature of cheap animation. Offsetting the parts makes the whole thing read as objects with mass rather than as a group of layers on the same timeline.",
      how: [
        "Let the heaviest part lead and the lightest parts trail.",
        "End with a small settle rather than a hard stop.",
        "Offset the arrival of secondary elements by a few frames or a few tens of milliseconds.",
        "In lists and grids, stagger rather than moving every item at once."
      ],
      example: "Material Design's staggered entrance for a list: each item begins its entrance shortly after the one before, which is overlapping action applied to interface furniture.",
      numbers: "Material Design 1 choreography: begin each item's staggered entrance no more than 20ms apart.",
      pitfall: "Stretching the offsets until the last element arrives noticeably late. Follow-through is meant to be felt rather than counted.",
      source: "Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981); Material Design 1 choreography guidance (Google)",
      verify: {
        status: "verified",
        note: "Fifth of the twelve in the published list. The 20ms stagger figure is quoted from the choreography page of the original Material Design spec at m1.material.io, read in review: 'Begin each item's staggered entrance no more than 20ms apart.' Corrected from an earlier attribution to Material Design 2, whose choreography page does not contain the figure."
      },
      belongs: {
        verdict: "core",
        why: "Offsetting the parts of a movement is one of the few animation techniques that transfers to interface work unchanged."
      },
      related: [721, 726, 736, 737]
    },
    {
      n: 726,
      title: "Slow in and slow out",
      aka: ["Ease in and ease out", "Easing"],
      oneLine: "Actions start and finish gradually, with more frames near the extremes than in the middle.",
      demo: {
        caption: "Each dot is one frame of the same move. Even spacing is linear; bunching at both ends is eased.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 96\"><text class=\"t\" x=\"12\" y=\"14\">linear</text><path class=\"s-mute\" d=\"M12 34 H312\"/><circle class=\"f\" cx=\"12\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"42\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"72\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"102\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"132\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"162\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"192\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"222\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"252\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"282\" cy=\"34\" r=\"4\"/><circle class=\"f\" cx=\"312\" cy=\"34\" r=\"4\"/><text class=\"t\" x=\"12\" y=\"60\">slow in, slow out</text><path class=\"s-mute\" d=\"M12 80 H312\"/><circle class=\"f\" cx=\"12\" cy=\"80\" r=\"4\"/><circle class=\"f\" cx=\"20\" cy=\"80\" r=\"4\"/><circle class=\"f\" cx=\"43\" cy=\"80\" r=\"4\"/><circle class=\"f\" cx=\"77\" cy=\"80\" r=\"4\"/><circle class=\"f\" cx=\"118\" cy=\"80\" r=\"4\"/><circle class=\"f\" cx=\"162\" cy=\"80\" r=\"4\"/><circle class=\"f\" cx=\"206\" cy=\"80\" r=\"4\"/><circle class=\"f\" cx=\"247\" cy=\"80\" r=\"4\"/><circle class=\"f\" cx=\"281\" cy=\"80\" r=\"4\"/><circle class=\"f\" cx=\"304\" cy=\"80\" r=\"4\"/><circle class=\"f\" cx=\"312\" cy=\"80\" r=\"4\"/></svg></div>"
      },
      what: "Real objects accelerate and decelerate, so drawn animation packs its drawings closer together at the beginning and the end of a move and spreads them out in the middle. On screen the same shape is described by an easing curve, usually a cubic bezier. The standard curve in the original Material Design spec is cubic-bezier(0.4, 0, 0.2, 1), which starts quickly and settles slowly.",
      why: "Linear motion looks mechanical because nothing in the physical world changes speed instantly. Eased motion is also easier to follow, since the eye gets a slow moment at each end to register where the object started and where it stopped.",
      how: [
        "Leave linear only for continuous loops such as a spinner.",
        "Prefer asymmetric curves to a symmetrical ease-in-out.",
        "Decelerate things entering the screen and accelerate things leaving it.",
        "Compare curves side by side on the real element, since the same curve reads differently over a long distance."
      ],
      example: "Material Design 1's four named curves: standard cubic-bezier(0.4, 0, 0.2, 1), deceleration cubic-bezier(0, 0, 0.2, 1), acceleration cubic-bezier(0.4, 0, 1, 1) and sharp cubic-bezier(0.4, 0, 0.6, 1).",
      numbers: "Material Design 1 curves, read from Google's Duration and easing page: standard cubic-bezier(0.4, 0, 0.2, 1); deceleration cubic-bezier(0, 0, 0.2, 1); acceleration cubic-bezier(0.4, 0, 1, 1); sharp cubic-bezier(0.4, 0, 0.6, 1).",
      pitfall: "Reaching for ease-in-out by default. The popular reading of this principle is symmetrical, whereas the platform guidance is deliberately lopsided, and a slow tail on an exit makes an interface feel sluggish.",
      source: "Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981); Material Design 1 duration and easing guidance (Google)",
      verify: {
        status: "verified",
        note: "Sixth of the twelve in the published list. The four cubic-bezier values were read in review from the Duration and easing page of the original Material Design spec, which gives the CSS value for each named curve and says motion appears more natural when acceleration and deceleration occur asymmetrically. Corrected from an earlier attribution to Material Design 2, whose Speed page names a different set (standard, emphasized, accelerated, decelerated), drops the sharp curve and publishes no CSS value for emphasized."
      },
      belongs: {
        verdict: "core",
        why: "Easing is the single setting that separates motion that feels designed from motion that feels machine-generated."
      },
      related: [729, 734, 735, 736]
    },
    {
      n: 727,
      title: "Arcs",
      aka: [],
      oneLine: "Living things move along curved paths, so straight-line motion reads as mechanical.",
      demo: {
        caption: "Same two points, same object sampled four times. Only the path differs, and the arc keeps the vertical effort until last.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Straight line</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 96\"><path class=\"s-accent\" d=\"M20 76 L130 26\"/><circle class=\"f-mute\" cx=\"47.5\" cy=\"63.5\" r=\"4\"/><circle class=\"f-mute\" cx=\"75\" cy=\"51\" r=\"4\"/><circle class=\"f-mute\" cx=\"102.5\" cy=\"38.5\" r=\"4\"/><circle class=\"f\" cx=\"20\" cy=\"76\" r=\"6\"/><circle class=\"f\" cx=\"130\" cy=\"26\" r=\"6\"/><text class=\"t\" x=\"20\" y=\"92\" text-anchor=\"middle\">start</text><text class=\"t\" x=\"130\" y=\"14\" text-anchor=\"middle\">end</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Concave arc</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 96\"><path class=\"s-accent\" d=\"M20 76 Q 106 76, 130 26\"/><circle class=\"f-mute\" cx=\"59\" cy=\"73\" r=\"4\"/><circle class=\"f-mute\" cx=\"90.5\" cy=\"63.5\" r=\"4\"/><circle class=\"f-mute\" cx=\"114\" cy=\"48\" r=\"4\"/><circle class=\"f\" cx=\"20\" cy=\"76\" r=\"6\"/><circle class=\"f\" cx=\"130\" cy=\"26\" r=\"6\"/><text class=\"t\" x=\"20\" y=\"92\" text-anchor=\"middle\">start</text><text class=\"t\" x=\"130\" y=\"14\" text-anchor=\"middle\">end</text></svg></div></div></div>"
      },
      what: "Limbs pivot around joints, so their tips describe arcs, and a thrown object follows a parabola. Animators route movement along curves unless the subject genuinely is a machine. The original Material Design spec applies the same rule to screens: an element moving between two points inside the screen follows a natural concave arc, while an element travelling on one axis only keeps to a straight path.",
      why: "A curved path looks natural and is easier for the eye to follow, because it matches the way the eye expects a moving object to behave. It also gives a transition a sense of direction, since the shape of the arc tells you which point it left from.",
      how: [
        "Arc the path when both horizontal and vertical position change.",
        "Keep single-axis movement straight.",
        "Give upward movement a slower acceleration than downward, since rising costs effort.",
        "Watch the tangent at each end so the object does not appear to change its mind mid-flight."
      ],
      example: "Material Design 1's Movement page states that the movement of an element between two points within the bounds of the screen follows a natural, concave arc, and that elements moving along a single axis do not follow an arc.",
      numbers: "",
      pitfall: "Arcing everything. A drawer sliding in from the left has one axis and should travel straight, and a curve there just looks unstable.",
      source: "Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981); Material Design 1 movement guidance (Google)",
      verify: {
        status: "verified",
        note: "Seventh of the twelve in the published list. The screen rule is quoted from the Movement page of the original Material Design spec, read in review, which also carries the upward-movement rule used above: rising against gravity requires effort, so elements moving upward depict effort through a slower upward acceleration. Corrected from an earlier attribution to Material Design 2, which has no movement page."
      },
      belongs: {
        verdict: "core",
        why: "Path shape is a real decision in interface motion the moment an element changes both its horizontal and vertical position."
      },
      related: [726, 739, 744]
    },
    {
      n: 728,
      title: "Secondary action",
      aka: [],
      oneLine: "A smaller movement that supports the main action without competing with it for attention.",
      demo: {
        caption: "The bar is the main move. Left: the mark matches it in size and beat. Right: smaller, and it starts later.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Equal weight</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--lg db-dot--accent db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-note\">state</span></div><div class=\"db-block db-block--ink db-anim db-anim--fade db-anim--ease\"></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Subordinate</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--accent db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.5s\"></span><span class=\"db-note\">state</span></div><div class=\"db-block db-block--ink db-anim db-anim--fade db-anim--ease\"></div></div></div></div></div>"
      },
      what: "A character walks, and while walking they whistle, swing a bag or glance sideways. The secondary movement adds character and often adds information, but it stays subordinate: smaller in scale, quieter in timing, and usually started after the main action is already under way. If it starts to draw the eye, it has stopped being secondary.",
      why: "It gets a second piece of meaning across without asking for a second look. In an interface that might be an icon rotating while a section opens, telling you the state of the control at the same time as the panel tells you the content.",
      how: [
        "Start the secondary movement after the primary one has begun.",
        "Keep it smaller in amplitude and shorter in duration than the main action.",
        "Cut it first when the sequence feels busy.",
        "Never give two simultaneous movements the same visual weight."
      ],
      example: "A disclosure chevron rotating from pointing right to pointing down while the section below it expands, which you can check in most operating systems and component libraries.",
      numbers: "",
      pitfall: "Secondary action that outgrows the primary, usually because it is more fun to animate. The panel opening is the point; the chevron is not.",
      source: "Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981)",
      verify: {
        status: "verified",
        note: "Eighth of the twelve in the published list sourced to Thomas and Johnston (1981). Description paraphrased."
      },
      belongs: {
        verdict: "core",
        why: "Layering a supporting movement under a main one is a routine interface decision, from state icons to badge counts."
      },
      related: [723, 725, 743]
    },
    {
      n: 729,
      title: "Timing",
      aka: ["Spacing and timing"],
      oneLine: "The number of frames an action takes sets its weight, its size and its mood.",
      demo: {
        caption: "Same square, same distance, same curve. Only the duration differs, and the slow one reads as the heavier object.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">0.9s</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row\"><span class=\"db-sq db-sq--lg db-anim db-anim--slide db-anim--ease\" style=\"animation-duration:0.9s\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">3.6s</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row\"><span class=\"db-sq db-sq--lg db-anim db-anim--slide db-anim--ease\" style=\"animation-duration:3.6s\"></span></div></div></div></div>"
      },
      what: "Few frames means light and fast; many frames means heavy and slow. Timing also carries feeling, because the same pose held for six frames and for sixty says two different things. On screen, frames become milliseconds, and the rule survives: a large surface crossing a long distance needs longer than a small one moving a short way, or it looks weightless.",
      why: "Timing is the main lever you have. When a piece of motion feels wrong, the cause is usually the duration rather than the drawing or the curve, and the fix is a number.",
      how: [
        "Time by distance and size, not by preference.",
        "Give the same duration to the same class of object so the system stays coherent.",
        "Keep responses to direct input inside the limit at which people still feel the system reacted at once.",
        "Time it on the slowest device you support, since a dropped frame changes the felt duration."
      ],
      example: "Jakob Nielsen's three limits, drawn from Miller's 1968 paper and Card, Robertson and Mackinlay's 1991 paper: 0.1 second feels instantaneous, 1 second keeps a person's train of thought, 10 seconds is the limit of held attention.",
      numbers: "Nielsen's response limits: 0.1s, 1s, 10s. Google's RAIL model: complete a transition initiated by user input within 100ms.",
      pitfall: "Setting one duration for everything in the system. A tooltip and a full-screen sheet given the same 300ms both feel wrong, one dawdling and one snapping.",
      source: "Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981); Jakob Nielsen, Response Times: The 3 Important Limits (1993)",
      verify: {
        status: "verified",
        note: "Ninth of the twelve in the published list. The three response limits and their attribution to Miller (1968) and Card, Robertson and Mackinlay (1991) were read this session on the Nielsen Norman Group article; the 100ms figure is from Google's RAIL page."
      },
      belongs: {
        verdict: "core",
        why: "Duration is the setting most often wrong in shipped interfaces and the one with published human limits behind it."
      },
      related: [726, 734, 741, 751]
    },
    {
      n: 730,
      title: "Exaggeration",
      aka: [],
      oneLine: "Push an action past the literal so it reads at speed, while keeping it believable.",
      demo: {
        caption: "Rest beside pressed on both sides. The measured two per cent is invisible at this size; the pushed twelve reads instantly.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">2 per cent</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--top db-row--nowrap db-row--loose\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">rest</span><div class=\"db-block db-block--ink\" style=\"width:64px;height:64px\"></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">pressed</span><div class=\"db-block db-block--ink\" style=\"width:62.7px;height:62.7px\"></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">12 per cent</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--centre db-row--top db-row--nowrap db-row--loose\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">rest</span><div class=\"db-block db-block--ink\" style=\"width:64px;height:64px\"></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">pressed</span><div class=\"db-block db-block--ink\" style=\"width:56.3px;height:56.3px\"></div></div></div></div></div></div>"
      },
      what: "A movement copied exactly from life tends to look weak once it is drawn, because the drawing loses the small cues the eye picks up in the real thing. Exaggeration compensates by pushing the extremes: a bigger crouch, a wider swing, a further overshoot. It is caricature rather than chaos, and the amount of push has to stay consistent across a piece or the whole thing pulls apart.",
      why: "Short durations and small sizes eat subtlety. If a motion is meant to be noticed in 200ms on a phone, the version that is technically accurate will usually be invisible.",
      how: [
        "Push amplitude before you push duration; a bigger movement reads faster than a longer one.",
        "Exaggerate the extremes and leave the middle alone.",
        "In product interfaces, keep the exaggeration to a small overshoot on the settle.",
        "Apply the same amount of push across the whole system, so one component does not look like a different product."
      ],
      example: "A spring-driven panel that travels slightly past its resting position and comes back, which is exaggeration reduced to the smallest dose an interface can take.",
      numbers: "",
      pitfall: "Bouncy overshoot on tools people use all day. What reads as charming on the first view reads as an obstacle on the two hundredth.",
      source: "Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981)",
      verify: {
        status: "verified",
        note: "Tenth of the twelve in the published list sourced to Thomas and Johnston (1981). I have described the principle in general terms because I could not check the book's own wording, and popular retellings vary between caricature and outright distortion."
      },
      belongs: {
        verdict: "core",
        why: "Deciding how far past life to push a movement is a live judgement in every animation, including a 150ms button state."
      },
      related: [721, 733, 736]
    },
    {
      n: 731,
      title: "Solid drawing",
      aka: ["Drawing in three dimensions"],
      oneLine: "Draw with volume, weight and balance so a figure holds together in space instead of reading flat.",
      demo: {
        caption: "The accent dot shows the ball turning. On the right the shaded side stays put, so it reads as lit.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Shading turns too</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 78\"><path class=\"f-mute\" d=\"M28 18 A 18 18 0 0 0 28 54 Z\"/><circle class=\"s\" cx=\"28\" cy=\"36\" r=\"18\"/><circle class=\"f-accent\" cx=\"28\" cy=\"25\" r=\"3.5\"/><path class=\"f-mute\" d=\"M76 18 A 18 18 0 0 0 76 54 Z\" transform=\"rotate(120 76 36)\"/><circle class=\"s\" cx=\"76\" cy=\"36\" r=\"18\"/><circle class=\"f-accent\" cx=\"85.5\" cy=\"41.5\" r=\"3.5\"/><path class=\"f-mute\" d=\"M124 18 A 18 18 0 0 0 124 54 Z\" transform=\"rotate(240 124 36)\"/><circle class=\"s\" cx=\"124\" cy=\"36\" r=\"18\"/><circle class=\"f-accent\" cx=\"114.5\" cy=\"41.5\" r=\"3.5\"/><text class=\"t\" x=\"28\" y=\"72\" text-anchor=\"middle\">1</text><text class=\"t\" x=\"76\" y=\"72\" text-anchor=\"middle\">2</text><text class=\"t\" x=\"124\" y=\"72\" text-anchor=\"middle\">3</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Shading stays put</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 78\"><path class=\"f-mute\" d=\"M28 18 A 18 18 0 0 0 28 54 Z\"/><circle class=\"s\" cx=\"28\" cy=\"36\" r=\"18\"/><circle class=\"f-accent\" cx=\"28\" cy=\"25\" r=\"3.5\"/><path class=\"f-mute\" d=\"M76 18 A 18 18 0 0 0 76 54 Z\"/><circle class=\"s\" cx=\"76\" cy=\"36\" r=\"18\"/><circle class=\"f-accent\" cx=\"85.5\" cy=\"41.5\" r=\"3.5\"/><path class=\"f-mute\" d=\"M124 18 A 18 18 0 0 0 124 54 Z\"/><circle class=\"s\" cx=\"124\" cy=\"36\" r=\"18\"/><circle class=\"f-accent\" cx=\"114.5\" cy=\"41.5\" r=\"3.5\"/><text class=\"t\" x=\"28\" y=\"72\" text-anchor=\"middle\">1</text><text class=\"t\" x=\"76\" y=\"72\" text-anchor=\"middle\">2</text><text class=\"t\" x=\"124\" y=\"72\" text-anchor=\"middle\">3</text></svg></div></div></div>"
      },
      what: "The principle asks the animator to understand three-dimensional form, anatomy, weight, balance, light and shadow, so that a figure keeps its mass as it turns. It also covers habits such as avoiding twinning, where both sides of a body do the same thing at the same time and the pose goes dead. It is the drawing skill underneath the other eleven principles.",
      why: "For a designer the transferable part is consistency of form. If you animate an illustration, an isometric scene or a 3D asset, the light source, the perspective and the volumes have to stay true through the whole move or the object stops looking like an object.",
      how: [
        "Keep one light source and one perspective through an animated illustration.",
        "Check that volumes hold when a shape rotates rather than flattening at the halfway point.",
        "Avoid mirrored, evenly balanced poses in character work.",
        "Scale artwork in proportion, or the weight of the object changes as it moves."
      ],
      example: "A rotating 3D product view where the highlight stays on the same side of the object throughout, which is the modelling equivalent of holding the light source.",
      numbers: "",
      pitfall: "Animating a flat illustration as if it had depth, so shadows and highlights slide against each other and the shape reads as paper.",
      source: "Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981)",
      verify: {
        status: "verified",
        note: "Eleventh of the twelve in the published list, described there as requiring an understanding of three-dimensional shapes, anatomy, weight, balance, light and shadow."
      },
      belongs: {
        verdict: "adjacent",
        why: "It is a drawn-character skill with nothing to say about an interface transition. It earns a place only where you animate illustration, mascots or 3D assets, where volume, perspective and light have to stay consistent through the move."
      },
      related: [730, 732]
    },
    {
      n: 732,
      title: "Appeal",
      aka: ["Charisma"],
      oneLine: "The animated thing should be interesting to look at, with shapes a viewer wants to follow.",
      demo: {
        none: "Appeal is a judgement about whether a viewer wants to keep watching a character, so any picture would only assert that one invented drawing has charisma and another does not."
      },
      what: "The twelfth principle, described as the equivalent of charisma in an actor: the viewer should find the character real and interesting enough to watch. It is not the same as prettiness or cuteness. In practice it comes from clear silhouettes, varied shapes rather than repeated ones, and a design that reads instantly at the size it will be seen.",
      why: "For product work the useful residue is that anything a person is asked to watch has to earn the look. A mascot, an empty-state illustration or a loading character with a muddy silhouette gets ignored, and the seconds you spent animating it are wasted.",
      how: [
        "Test the silhouette at the smallest size the artwork will be used at.",
        "Vary shape sizes rather than repeating the same circle at three scales.",
        "Give the eye a clear place to land, usually the face or the point of action.",
        "Cut detail that disappears at playback size."
      ],
      example: "Any well-known brand character animation, where the figure stays recognisable in silhouette at the size of a favicon.",
      numbers: "",
      pitfall: "Treating appeal as a licence for decoration. It is a rule about legibility and interest, and adding sparkle to a weak shape does not create it.",
      source: "Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981)",
      verify: {
        status: "verified",
        note: "Twelfth of the twelve in the published list, glossed there as corresponding to what would be called charisma in an actor."
      },
      belongs: {
        verdict: "adjacent",
        why: "Charisma is a character-design idea from film animation. It applies to mascots, illustration and brand films, and offers nothing for a menu transition or a state change."
      },
      related: [731, 733]
    },
    {
      n: 733,
      title: "Purpose over decoration",
      aka: ["Motion with a job"],
      oneLine: "Animate to explain something. If the movement carries no information, cut it.",
      demo: {
        caption: "Left: every block fades on its own delay, so nothing settles. Right: only the thing that changed moves.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Everything animates</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--tight db-row--nowrap db-anim db-anim--fade db-anim--ease\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-note\">3 new</span></div><div class=\"db-lines db-anim db-anim--fade db-anim--ease\" style=\"animation-delay:0.3s\"><i></i><i></i><i></i></div><div class=\"db-lines db-anim db-anim--fade db-anim--ease\" style=\"animation-delay:0.6s\"><i></i><i></i><i></i></div><div class=\"db-lines db-anim db-anim--fade db-anim--ease\" style=\"animation-delay:0.9s\"><i></i><i></i><i></i></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One deliberate moment</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--accent db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-note\">3 new</span></div><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div>"
      },
      what: "Both major platform guides say the same thing in their own words. Apple's Human Interface Guidelines tell you to add motion purposefully and warn that gratuitous or excessive animation can distract people and may make them feel disconnected or physically uncomfortable. Google's motion principles are informative, focused and expressive, with focused defined as attention on what is important without unnecessary distraction. The test is whether you can say in one sentence what the animation tells the viewer.",
      why: "Every animation spends two things that belong to the user: time and attention. Motion that answers a question people actually have, such as where a panel came from or what just changed, pays that cost back. Motion that only signals effort does not.",
      how: [
        "Before building, write the sentence: this movement tells the person X. If the sentence is empty, delete the animation.",
        "Avoid adding custom motion to interactions that happen dozens of times a session.",
        "Never let motion be the only carrier of a piece of information, since some people will have it turned off.",
        "Budget decorative motion to a few deliberate moments rather than spreading it across every component."
      ],
      example: "Apple's guidance is explicit: do not add motion for the sake of adding motion, and in apps generally avoid adding motion to UI interactions that occur frequently.",
      numbers: "",
      pitfall: "Scroll-triggered fade-ups on every section of a marketing page. They delay reading, they fight the scroll, and they tell the reader nothing they did not already know.",
      source: "Apple, Human Interface Guidelines: Motion; Material Design 2 motion principles (Google)",
      verify: {
        status: "verified",
        note: "Read both pages this session. Apple's wording on gratuitous animation and on frequent interactions is quoted from the Human Interface Guidelines motion page; the informative, focused and expressive triad is from Material Design 2's Understanding motion page."
      },
      belongs: {
        verdict: "core",
        why: "It is the gate every other rule in this section passes through, and it is the one most often skipped."
      },
      related: [741, 742, 746, 753]
    },
    {
      n: 734,
      title: "Duration guidelines",
      aka: ["Motion speed"],
      oneLine: "Pick durations by size and distance, and keep responses to input well under half a second.",
      demo: {
        caption: "Material Design 1's own figures drawn to scale. Exits are shorter than entrances, and nothing crosses the 400ms warning.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 112\"><rect class=\"f\" x=\"100\" y=\"6\" width=\"95\" height=\"12\"/><rect class=\"f\" x=\"100\" y=\"26\" width=\"110\" height=\"12\"/><rect class=\"f\" x=\"100\" y=\"46\" width=\"147\" height=\"12\"/><rect class=\"f\" x=\"100\" y=\"66\" width=\"183\" height=\"12\"/><text class=\"t\" x=\"92\" y=\"16\" text-anchor=\"end\">exiting 195</text><text class=\"t\" x=\"92\" y=\"36\" text-anchor=\"end\">entering 225</text><text class=\"t\" x=\"92\" y=\"56\" text-anchor=\"end\">typical 300</text><text class=\"t\" x=\"92\" y=\"76\" text-anchor=\"end\">full-screen 375</text><path class=\"s-mute\" d=\"M100 88 H320\"/><path class=\"s-accent\" d=\"M296 2 V92\" style=\"stroke-dasharray:4 4\"/><text class=\"t\" x=\"100\" y=\"102\" text-anchor=\"middle\">0</text><text class=\"t\" x=\"296\" y=\"102\" text-anchor=\"end\">400ms limit</text></svg></div>"
      },
      what: "The original Material Design spec published concrete figures: around 300ms for a typical mobile transition, 375ms for a large or full-screen one, 225ms for elements entering and 195ms for elements leaving, with tablets about 30 per cent longer and wearables about 30 per cent shorter, desktop at 150 to 200ms, and a warning that transitions exceeding 400ms may feel too slow. Material Design 2 dropped the general figures and gave per-component ones instead. Material Design 3 replaced the prose with a token scale running from 50ms to 1000ms. The pattern behind all three is the same: bigger and further takes longer, and exits are quicker than entrances.",
      why: "Too fast and the eye cannot connect the start state to the end state, which defeats the point of animating at all. Too slow and the interface feels like it is making you wait for a decision you already made.",
      how: [
        "Set duration from the distance travelled and the area covered, not from taste.",
        "Make exits shorter than entrances, since nobody needs to study something leaving.",
        "Hold durations in tokens so the whole system moves at one speed family.",
        "Re-time on low-end hardware, where a nominal 200ms can render as 350ms."
      ],
      example: "Material Design 2's Speed page gives worked component pairs that show the exits-are-shorter rule: a navigation drawer opens over 250ms and closes over 200ms, a card expands over 300ms and collapses over 250ms, and a switch animates over 100ms.",
      numbers: "Material Design 1: mobile 300ms typical, 375ms large or full-screen, 225ms entering, 195ms leaving, tablet about 30 per cent longer (300ms becomes 390ms), wearable about 30 per cent shorter (300ms becomes 210ms), desktop 150 to 200ms, transitions exceeding 400ms may feel too slow. Material Design 2 component figures: switch 100ms, bottom sheet or chip 250ms expanding and 200ms collapsing, floating action button into a full-screen dialog 300ms expanding and 250ms collapsing. Material Design 3 tokens: short1 50ms, short2 100ms, short3 150ms, short4 200ms, medium1 250ms, medium2 300ms, medium3 350ms, medium4 400ms, long1 450ms, long2 500ms, long3 550ms, long4 600ms, extraLong1 700ms, extraLong2 800ms, extraLong3 900ms, extraLong4 1000ms.",
      pitfall: "Copying 300ms into every component because it is the number people quote. It was published as a mobile figure for a typical transition, and a desktop hover state at 300ms feels gluey.",
      source: "Material Design 1 duration and easing guidance (Google); Material Design 2 Speed guidance (Google); Material Design 3 duration tokens as published in the Material Components for Android documentation",
      verify: {
        status: "verified",
        note: "The 300, 375, 225 and 195ms figures, the tablet and wearable percentages, the 150 to 200ms desktop range and the 400ms warning were read in review on the Duration and easing page of the original Material Design spec at m1.material.io. Corrected from an earlier attribution to Material Design 2, whose Speed page carries none of them and gives per-component durations instead; those component figures were read on that page and are quoted above. The Material 3 token values were read from the Material Components for Android motion documentation on GitHub, which lists all sixteen motionDuration attributes with their millisecond values."
      },
      belongs: {
        verdict: "core",
        why: "Duration is the first number a designer has to choose, and there is published platform guidance rather than folklore behind it."
      },
      related: [729, 735, 751, 769]
    },
    {
      n: 735,
      title: "Easing curves (standard, decelerate, accelerate)",
      aka: ["Timing functions", "Bezier easing"],
      oneLine: "Named cubic-bezier curves that decide how an animation's speed changes across its life.",
      demo: {
        caption: "Progress up, time across. All four Material Design 1 curves at one scale, so the shapes can be compared.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 112\"><path class=\"s-mute\" d=\"M2 8 V78 H70\"/><path class=\"s-accent\" d=\"M2 78 C 29.2 78, 15.6 8, 70 8\"/><text class=\"t\" x=\"2\" y=\"92\">standard</text><text class=\"t\" x=\"2\" y=\"104\">0.4 0 0.2 1</text><path class=\"s-mute\" d=\"M88 8 V78 H156\"/><path class=\"s-accent\" d=\"M88 78 C 88 78, 101.6 8, 156 8\"/><text class=\"t\" x=\"88\" y=\"92\">decelerate</text><text class=\"t\" x=\"88\" y=\"104\">0 0 0.2 1</text><path class=\"s-mute\" d=\"M174 8 V78 H242\"/><path class=\"s-accent\" d=\"M174 78 C 201.2 78, 242 8, 242 8\"/><text class=\"t\" x=\"174\" y=\"92\">accelerate</text><text class=\"t\" x=\"174\" y=\"104\">0.4 0 1 1</text><path class=\"s-mute\" d=\"M260 8 V78 H328\"/><path class=\"s-accent\" d=\"M260 78 C 287.2 78, 300.8 8, 328 8\"/><text class=\"t\" x=\"260\" y=\"92\">sharp</text><text class=\"t\" x=\"260\" y=\"104\">0.4 0 0.6 1</text></svg></div>"
      },
      what: "An easing curve maps elapsed time to progress. The original Material Design spec named four: standard for movement that stays on screen, deceleration for things entering, acceleration for things leaving, and sharp for things that leave and may return at any time. Material Design 3 renamed and re-tuned the set, with a standard curve of cubic-bezier(0.2, 0, 0, 1) and a curve Google names emphasized that cannot be written as a single bezier at all, since it is published as a two-segment path.",
      why: "The curve is what makes a duration feel right. The same 300ms reads as heavy, brisk or springy depending on where the speed sits, and picking from a named set stops each component inventing its own feel.",
      how: [
        "Decelerate what enters, accelerate what leaves, and use the standard curve for movement that stays on screen.",
        "Keep the set small: three or four curves for a whole product is plenty.",
        "Store them as tokens next to the durations, so a component cannot use an orphan curve.",
        "Preview at the real size and distance, since a curve that reads well over 40px can look lazy over 400px."
      ],
      example: "Material Components for Android publishes motionEasingStandardInterpolator as cubic-bezier(0.2, 0, 0, 1), the emphasized decelerate curve as cubic-bezier(0.05, 0.7, 0.1, 1) and the emphasized accelerate curve as cubic-bezier(0.3, 0, 0.8, 0.15).",
      numbers: "Material 1: standard cubic-bezier(0.4, 0, 0.2, 1), deceleration cubic-bezier(0, 0, 0.2, 1), acceleration cubic-bezier(0.4, 0, 1, 1), sharp cubic-bezier(0.4, 0, 0.6, 1). Material 3 (Android attributes): standard cubic-bezier(0.2, 0, 0, 1), standard decelerate cubic-bezier(0, 0, 0, 1), standard accelerate cubic-bezier(0.3, 0, 1, 1), emphasized decelerate cubic-bezier(0.05, 0.7, 0.1, 1), emphasized accelerate cubic-bezier(0.3, 0, 0.8, 0.15); linear cubic-bezier(0, 0, 1, 1); emphasized itself is published as the path M 0,0 C 0.05, 0, 0.133333, 0.06, 0.166666, 0.4 C 0.208333, 0.82, 0.25, 1, 1, 1.",
      pitfall: "Using ease-in on something arriving. It creeps for the first half and then arrives in a rush, which is exactly backwards for an entrance.",
      source: "Material Design 1 duration and easing guidance (Google); Material Design 3 easing tokens as published in the Material Components for Android documentation",
      verify: {
        status: "verified",
        note: "Both sets of values were read in review, the four-curve set from the Duration and easing page of the original Material Design spec and the Material 3 values from the Material Components for Android motion documentation, which lists seven easing attributes and gives the emphasized curve as a two-segment path rather than a bezier. Corrected from an earlier attribution of the four-curve set to Material Design 2, which names standard, emphasized, accelerated and decelerated instead and has no sharp curve."
      },
      belongs: {
        verdict: "core",
        why: "Easing is a shared vocabulary with published values, and having four named curves is what makes motion consistent across a large product."
      },
      related: [726, 734, 736, 769]
    },
    {
      n: 736,
      title: "Spring physics (stiffness, damping, mass)",
      aka: ["Physically based animation", "Damped harmonic motion"],
      oneLine: "Motion generated by a simulated spring rather than a fixed curve, so it can absorb an incoming velocity.",
      demo: {
        caption: "Same target, three damping ratios. Below one it overshoots and rings; at one it lands cleanly; above one it crawls in.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 108\"><path class=\"s-mute\" d=\"M4 8 V86 H100\"/><path class=\"s-mute\" d=\"M4 22 H100\" style=\"stroke-dasharray:4 4\"/><path class=\"s-accent\" d=\"M4 86 C 20 86, 26 6, 42 6 C 54 6, 54 36, 66 36 C 78 36, 78 18, 88 18 C 94 18, 96 22, 100 22\"/><text class=\"t\" x=\"4\" y=\"102\">under, 0.4</text><path class=\"s-mute\" d=\"M116 8 V86 H212\"/><path class=\"s-mute\" d=\"M116 22 H212\" style=\"stroke-dasharray:4 4\"/><path class=\"s-accent\" d=\"M116 86 C 138 86, 150 22, 180 22 L212 22\"/><text class=\"t\" x=\"116\" y=\"102\">critical, 1</text><path class=\"s-mute\" d=\"M228 8 V86 H324\"/><path class=\"s-mute\" d=\"M228 22 H324\" style=\"stroke-dasharray:4 4\"/><path class=\"s-accent\" d=\"M228 86 C 262 86, 284 32, 324 23\"/><text class=\"t\" x=\"228\" y=\"102\">over, 1.8</text><text class=\"t\" x=\"324\" y=\"16\" text-anchor=\"end\">target</text></svg></div>"
      },
      what: "A spring animation models a mass on a spring with friction. Apple's UISpringTimingParameters takes mass, stiffness, damping and an initial velocity, and the documentation gives the damping ratio as damping divided by twice the square root of stiffness times mass. A ratio of 1 is critical damping, which settles as quickly as possible with no overshoot; below 1 the motion bounces; above 1 it crawls in. There is no duration to set, because the animation ends when the spring has settled.",
      why: "Springs take a starting velocity, which is what makes gesture-driven interfaces feel connected. A flick can hand its speed straight to the animation so the object keeps moving at the speed the finger left it. Springs are also naturally interruptible, since the state is a position and a velocity that can be redirected at any frame.",
      how: [
        "Start near critical damping for functional motion and add bounce only where playfulness is the point.",
        "Pass the gesture's release velocity into the spring rather than starting from zero.",
        "Check the settle time on a slow device, since an underdamped spring can wobble for much longer than you expect.",
        "Cap the overshoot distance on anything near a screen edge or another surface."
      ],
      example: "Apple's UIKit documentation gives the formula explicitly: the damping ratio for the spring is computed as damping divided by 2 times the square root of stiffness times mass.",
      numbers: "Damping ratio = damping / (2 * sqrt(stiffness * mass)), per Apple's UISpringTimingParameters documentation. A ratio of 1 is critical damping.",
      pitfall: "Tuning springs by dragging sliders until it looks nice, then finding the same settings feel wrong on a different distance. Springs depend on the displacement, so a preset that suits a 20px move can wallow over 400px.",
      source: "Apple Developer Documentation, UISpringTimingParameters (init with mass, stiffness, damping and initial velocity)",
      verify: {
        status: "verified",
        note: "Read Apple's UISpringTimingParameters initialiser page this session; the parameter list and the damping-ratio formula are taken directly from it. The interpretation of ratios below and above 1 is standard damped-oscillator behaviour rather than a quotation."
      },
      belongs: {
        verdict: "core",
        why: "Springs are the default motion model in current UI frameworks, and their three parameters are the controls a designer is actually given."
      },
      related: [724, 735, 749, 750]
    },
    {
      n: 737,
      title: "Choreography and staggering",
      aka: ["Offset and delay", "Sequencing"],
      oneLine: "Order and offset the moving parts so the eye follows one clear path through the change.",
      demo: {
        caption: "The accent dot is the touch point. On the right, reactions further from it start later, so the change spreads outward.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">All at once</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-dot--accent db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\"></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Radial reaction</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.45s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.36s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.32s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.36s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.45s\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.36s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.23s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.16s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.23s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.36s\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.32s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.16s\"></span><span class=\"db-dot db-dot--accent db-anim db-anim--pulse db-anim--ease\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.16s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.32s\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.36s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.23s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.16s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.23s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.36s\"></span></div><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.45s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.36s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.32s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.36s\"></span><span class=\"db-dot db-anim db-anim--pulse db-anim--ease\" style=\"animation-delay:0.45s\"></span></div></div></div></div></div>"
      },
      what: "Choreography is the arrangement of several movements in time. Google's original spec separates three ideas that are routinely muddled together. Radial reaction says screen reactions near the point of touch should happen sooner than reactions further away. Hierarchical timing says the order and timing of movement should support the information hierarchy and create a path for the eye, with a warning that it is not a simple formula in which the most important thing moves first. Staggering says items entering together should begin one after another to make a single smooth focal path. Willenskomer's name for the last of those is offset and delay, published as defining object relationships and hierarchies when introducing new elements and scenes.",
      why: "Order carries meaning. If the thing you touched reacts first and the rest follow outward, the sequence explains cause and effect without a word of copy.",
      how: [
        "Start the reaction at the point of contact and let it spread outward.",
        "Stagger entrances in reading order and keep the offsets short.",
        "Cap the stagger after the first handful of items, so a long list does not arrive late.",
        "Sequence in one direction only, since two competing directions cancel the focal path."
      ],
      example: "Material Design 1's choreography guidance is specific about the gap: begin each item's staggered entrance no more than 20ms apart.",
      numbers: "Material Design 1 choreography: staggered entrances no more than 20ms apart.",
      pitfall: "Staggering a fifty-row table. The last row lands a second after the first, and what was meant as polish becomes a wait.",
      source: "Material Design 1 choreography and meaningful transitions guidance (Google); Issara Willenskomer, Creating Usability with Motion: The UX in Motion Manifesto (31 March 2017)",
      verify: {
        status: "verified",
        note: "The 20ms figure and the point-of-touch rule were read in review on the choreography page of the original Material Design spec, where the point-of-touch rule sits under radial reaction. Hierarchical timing is a real Material term but means something else, and its definition above is quoted from the archived Meaningful transitions page. Corrected in review: the earlier draft attributed both to Material Design 2 and used the hierarchical timing label for the radial reaction rule. Offset and delay is confirmed as the second of Willenskomer's twelve principles, dated 31 March 2017, with the definition as published."
      },
      belongs: {
        verdict: "core",
        why: "Any transition with more than one moving element needs an order, and choosing it deliberately is what separates a designed sequence from a pile-up."
      },
      related: [723, 725, 738, 743]
    },
    {
      n: 738,
      title: "Shared-element transitions",
      aka: ["Container transform", "Hero transition"],
      oneLine: "One element persists across a change of view, so both views read as the same object.",
      demo: {
        caption: "One card across five moments: position, size and corner radius interpolate, and the contents stay pinned to its top edge.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 98\"><rect class=\"s-mute\" x=\"1\" y=\"4\" width=\"56\" height=\"76\" rx=\"3\"/><rect class=\"f-mute\" x=\"7\" y=\"10\" width=\"44\" height=\"12\" rx=\"2\"/><rect class=\"f-mute\" x=\"7\" y=\"26\" width=\"44\" height=\"12\" rx=\"2\"/><rect class=\"s-accent\" x=\"7\" y=\"44\" width=\"44\" height=\"16\" rx=\"3\"/><rect class=\"f\" x=\"10\" y=\"47\" width=\"38\" height=\"10\" rx=\"1\"/><text class=\"t\" x=\"29\" y=\"94\" text-anchor=\"middle\">card</text><rect class=\"s-mute\" x=\"69\" y=\"4\" width=\"56\" height=\"76\" rx=\"3\"/><rect class=\"s-mute\" x=\"75\" y=\"10\" width=\"44\" height=\"12\" rx=\"2\" style=\"stroke-dasharray:3 3\"/><rect class=\"s-accent\" x=\"74\" y=\"34\" width=\"46\" height=\"22\" rx=\"2\"/><rect class=\"f\" x=\"77\" y=\"37\" width=\"40\" height=\"12\" rx=\"1\"/><rect class=\"s-mute\" x=\"137\" y=\"4\" width=\"56\" height=\"76\" rx=\"3\"/><rect class=\"s-accent\" x=\"140\" y=\"24\" width=\"50\" height=\"28\" rx=\"2\"/><rect class=\"f\" x=\"143\" y=\"27\" width=\"44\" height=\"14\" rx=\"1\"/><rect class=\"s-mute\" x=\"205\" y=\"4\" width=\"56\" height=\"76\" rx=\"3\"/><rect class=\"s-accent\" x=\"206\" y=\"14\" width=\"54\" height=\"34\" rx=\"1\"/><rect class=\"f\" x=\"209\" y=\"17\" width=\"48\" height=\"16\" rx=\"1\"/><rect class=\"s-mute\" x=\"211\" y=\"56\" width=\"44\" height=\"5\" rx=\"1\" style=\"stroke-dasharray:3 3\"/><rect class=\"s-mute\" x=\"273\" y=\"4\" width=\"56\" height=\"76\" rx=\"3\"/><rect class=\"s-accent\" x=\"273\" y=\"4\" width=\"56\" height=\"40\" rx=\"1\"/><rect class=\"f\" x=\"276\" y=\"7\" width=\"50\" height=\"18\" rx=\"1\"/><rect class=\"f-mute\" x=\"279\" y=\"52\" width=\"44\" height=\"5\" rx=\"1\"/><rect class=\"f-mute\" x=\"279\" y=\"62\" width=\"32\" height=\"5\" rx=\"1\"/><text class=\"t\" x=\"301\" y=\"94\" text-anchor=\"middle\">page</text></svg></div>"
      },
      what: "Google's container transform pattern keeps a container on screen while its dimensions, position and shape animate in tandem, with the contents pinned to the container's top edge and scaled to match its width, and a fade sequencing the outgoing and incoming elements. On the web, the View Transition API does the equivalent by giving elements a view-transition-name so they animate separately from the rest of the page, across DOM states in a single-page app or across documents in a multi-page one.",
      why: "It answers the question people ask silently at every navigation, which is whether this new screen is the thing they just tapped. A persistent element answers it without a heading, a breadcrumb or a back animation.",
      how: [
        "Use it only where a real container persists, such as a card becoming its own page.",
        "Match corner radius and aspect ratio through the transform, or the object appears to be replaced rather than resized.",
        "Pin the contents to the container's top edge and sequence them with a fade, rather than stretching them to fill the new shape.",
        "Provide a plain fallback for browsers and states where the transition cannot run."
      ],
      example: "Google lists four checkable cases for the container transform: a card into a detail page, a list item into a detail page, a floating action button into a detail page, and a search bar into expanded search.",
      numbers: "",
      pitfall: "Forcing a shared element where nothing is genuinely shared. Two different objects morphing into each other is disorienting, and a fade through is the honest alternative.",
      source: "Material Design 2 motion system (Google); MDN Web Docs, View Transition API",
      verify: {
        status: "verified",
        note: "Read Google's Material Design 2 motion system page in review for the container transform specification and its four full-screen examples, and MDN's View Transition API page, which states that the API covers animating between DOM states in a single-page app and animating navigation between documents in a multi-page app. Corrected in review: the spec says the contents scale to match the container's width and are sequenced with a fade, and the fade through is a named variant rather than the default."
      },
      belongs: {
        verdict: "core",
        why: "It is the main technique for keeping a person's place across a navigation, and it now has a browser API rather than only a platform pattern."
      },
      related: [737, 739, 744]
    },
    {
      n: 739,
      title: "Object persistence and continuity",
      aka: ["Continuity"],
      oneLine: "Treat what is on screen as one continuous object, not as two pictures swapped over.",
      demo: {
        caption: "Left: four elements all carried across, so nothing leads. Right: one persists and the others stop, giving the eye a subject.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Everything carried across</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 96\"><rect class=\"f-mute\" x=\"4\" y=\"8\" width=\"30\" height=\"16\" rx=\"2\"/><rect class=\"f-mute\" x=\"42\" y=\"8\" width=\"30\" height=\"16\" rx=\"2\"/><rect class=\"f-mute\" x=\"80\" y=\"8\" width=\"30\" height=\"16\" rx=\"2\"/><rect class=\"f-mute\" x=\"118\" y=\"8\" width=\"30\" height=\"16\" rx=\"2\"/><path class=\"s-accent\" d=\"M19 26 L95 70\"/><path class=\"s-accent\" d=\"M57 26 L19 70\"/><path class=\"s-accent\" d=\"M95 26 L133 70\"/><path class=\"s-accent\" d=\"M133 26 L57 70\"/><rect class=\"f-mute\" x=\"4\" y=\"72\" width=\"30\" height=\"16\" rx=\"2\"/><rect class=\"f-mute\" x=\"42\" y=\"72\" width=\"30\" height=\"16\" rx=\"2\"/><rect class=\"f-mute\" x=\"80\" y=\"72\" width=\"30\" height=\"16\" rx=\"2\"/><rect class=\"f-mute\" x=\"118\" y=\"72\" width=\"30\" height=\"16\" rx=\"2\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One focal element</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 96\"><rect class=\"f-mute\" x=\"4\" y=\"8\" width=\"30\" height=\"16\" rx=\"2\"/><rect class=\"f\" x=\"42\" y=\"8\" width=\"30\" height=\"16\" rx=\"2\"/><rect class=\"f-mute\" x=\"80\" y=\"8\" width=\"30\" height=\"16\" rx=\"2\"/><rect class=\"f-mute\" x=\"118\" y=\"8\" width=\"30\" height=\"16\" rx=\"2\"/><path class=\"s-mute\" d=\"M19 26 V40\" style=\"stroke-dasharray:3 3\"/><path class=\"s-mute\" d=\"M95 26 V40\" style=\"stroke-dasharray:3 3\"/><path class=\"s-mute\" d=\"M133 26 V40\" style=\"stroke-dasharray:3 3\"/><path class=\"s-accent\" d=\"M57 26 C 57 48, 27 50, 27 70\"/><rect class=\"s-mute\" x=\"4\" y=\"66\" width=\"144\" height=\"26\" rx=\"2\"/><rect class=\"f\" x=\"8\" y=\"70\" width=\"38\" height=\"18\" rx=\"2\"/></svg></div></div></div>"
      },
      what: "If a card becomes a page, move and reshape the card into the page rather than fading one out and the other in. Google's guidance puts it in terms of persistent and focal elements: choose which elements survive the transition, and where several remain visible include only the most important ones, because scenes with many shared elements have no focus. Where nothing genuinely persists, the honest move is a fade through, which reads as a change of context rather than a change of state.",
      why: "People track objects, not screens. Keeping one object continuous across a change means the new view arrives as a development of the old one, so nobody has to rebuild their sense of where they are.",
      how: [
        "Decide which element persists before you design either state.",
        "Never cross-fade two representations of the same object; move and reshape it instead.",
        "If nothing persists, say so with a fade through rather than faking a connection.",
        "Reverse the same continuity on the way back, so the object returns to where it came from."
      ],
      example: "A photo thumbnail in a grid that grows into the full-size photo on the detail screen and shrinks back into the same grid cell on return.",
      numbers: "",
      pitfall: "Calling this object permanence and citing Piaget. The developmental-psychology idea, that infants learn objects continue to exist when hidden, is a different claim and it is not the source of this rule.",
      source: "Material Design 1 choreography guidance and Material Design 2 choreography guidance (Google); Issara Willenskomer, Creating Usability with Motion: The UX in Motion Manifesto (31 March 2017)",
      verify: {
        status: "verified",
        note: "The rule that only the most important shared elements should be included comes from the continuity section of the original Material Design choreography page; the definition of a focal element as a persistent element significant to the hierarchy comes from Material Design 2's choreography page. Both were read in review, and the earlier draft credited the first to the wrong version. Willenskomer's article groups Transformation, Value change, Masking, Overlay and Cloning under object continuity, so continuity is his category rather than one of the twelve named principles. The Piaget attribution is flagged because it circulates widely in UX writing and comes from none of these sources."
      },
      belongs: {
        verdict: "core",
        why: "Continuity is the reason to animate a navigation at all, and the alternative it rules out, the cross-fade of one object into itself, is a common mistake."
      },
      related: [723, 738, 742, 744]
    },
    {
      n: 740,
      title: "Spatial model and z-depth",
      aka: ["Elevation", "Layering model"],
      oneLine: "Decide where surfaces live in depth, then make every movement obey that model.",
      demo: {
        caption: "Material's default elevations drawn to scale in dp. Every shadow, overlap and rise in the product has to obey this stack.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 170\"><path class=\"s-mute\" d=\"M18 150 V6\" style=\"stroke-dasharray:3 3\"/><path class=\"s-mute\" d=\"M12 150 H318\"/><text class=\"t\" x=\"130\" y=\"164\">0dp, the base surface</text><rect class=\"f-mute\" x=\"12\" y=\"144\" width=\"110\" height=\"3\"/><text class=\"t\" x=\"130\" y=\"147.5\">card, 1dp</text><rect class=\"f-mute\" x=\"12\" y=\"126\" width=\"110\" height=\"3\"/><text class=\"t\" x=\"130\" y=\"129.5\">top app bar scrolled, 4dp</text><rect class=\"f-mute\" x=\"12\" y=\"114\" width=\"110\" height=\"3\"/><text class=\"t\" x=\"130\" y=\"117.5\">floating action button, 6dp</text><rect class=\"f-mute\" x=\"12\" y=\"102\" width=\"110\" height=\"3\"/><text class=\"t\" x=\"130\" y=\"105.5\">menu, 8dp</text><rect class=\"f-mute\" x=\"12\" y=\"54\" width=\"110\" height=\"3\"/><text class=\"t\" x=\"130\" y=\"57.5\">navigation drawer, 16dp</text><rect class=\"f-accent\" x=\"12\" y=\"6\" width=\"110\" height=\"3\"/><text class=\"t\" x=\"130\" y=\"9.5\">dialog, 24dp</text></svg></div>"
      },
      what: "Material Design treats the interface as a stack of surfaces with measured distances between them along the z-axis, quoted in density-independent pixels, and gives every component a resting elevation and a raised offset it moves to when touched. Motion expresses that depth in five ways Google lists: changes in shadow, overlap, pushing neighbours aside, scaling, and parallax. The point of writing the model down is that the same movement then means the same thing everywhere in the product.",
      why: "Depth is how an interface says which thing is temporarily in charge. A dialogue that rises above everything else and dims what is behind it is understood immediately, without any label saying it is modal.",
      how: [
        "Write the z-order down as a list before you animate anything.",
        "Raise the shadow as an element rises, and soften it as the distance grows.",
        "Keep surfaces at the same elevation from overlapping ambiguously.",
        "Move things out of the way rather than letting a rising surface pass through a fixed one."
      ],
      example: "Material Design 2's default elevations: dialog 24dp, navigation drawer 16dp, floating action button 6dp at rest and 12dp pressed, top app bar 4dp once scrolled, card 1dp at rest and 8dp when picked up.",
      numbers: "Material Design 2 default elevation values in dp: dialog 24, modal bottom sheet and navigation drawer 16, pressed floating action button 12, standard bottom sheet and menus 8, resting floating action button and snackbar 6, scrolled top app bar 4, contained button 2, card 1.",
      pitfall: "Shadows chosen for looks with no model behind them, so a dropdown sits visually below the sheet it belongs to and the depth cue contradicts the interaction.",
      source: "Material Design 2 elevation guidance (Google)",
      verify: {
        status: "verified",
        note: "Read Google's Material Design 2 elevation page in review, including the default elevation table and the list of five ways motion can emphasise elevation, published there as changes in shadows, displaying overlap, pushing, scaling and parallax. The table gives the top app bar as 4dp scrolled and 0 or 4dp at rest, which the example above now reflects."
      },
      belongs: {
        verdict: "core",
        why: "Almost every interface stacks surfaces, and motion that ignores the stack produces contradictions people notice even when they cannot name them."
      },
      related: [744, 746, 768]
    },
    {
      n: 741,
      title: "Motion as feedback",
      aka: ["Response motion"],
      oneLine: "Movement that confirms the system received the input and shows what it did with it.",
      demo: {
        caption: "Same 900ms wait on both. On the right the tap is acknowledged inside 100ms, and the work in hand is then shown.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No receipt</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 88\"><path class=\"s-accent\" d=\"M26 22 V72\" style=\"stroke-dasharray:3 3\"/><text class=\"t\" x=\"26\" y=\"16\" text-anchor=\"middle\">100ms</text><path class=\"s-mute\" d=\"M12 60 H140\"/><circle class=\"f\" cx=\"12\" cy=\"60\" r=\"4\"/><text class=\"t\" x=\"80\" y=\"46\" text-anchor=\"middle\">nothing happens</text><rect class=\"f\" x=\"128\" y=\"52\" width=\"12\" height=\"16\" rx=\"1\"/><text class=\"t\" x=\"12\" y=\"82\">tap</text><text class=\"t\" x=\"140\" y=\"82\" text-anchor=\"end\">900ms</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Received, working, finished</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 88\"><path class=\"s-accent\" d=\"M26 22 V72\" style=\"stroke-dasharray:3 3\"/><text class=\"t\" x=\"26\" y=\"16\" text-anchor=\"middle\">100ms</text><path class=\"s-mute\" d=\"M12 60 H140\"/><circle class=\"f\" cx=\"12\" cy=\"60\" r=\"4\"/><circle class=\"s-accent\" cx=\"26\" cy=\"60\" r=\"9\"/><circle class=\"f-accent\" cx=\"26\" cy=\"60\" r=\"4\"/><rect class=\"f-mute\" x=\"40\" y=\"57\" width=\"86\" height=\"6\" rx=\"1\"/><rect class=\"f\" x=\"128\" y=\"52\" width=\"12\" height=\"16\" rx=\"1\"/><text class=\"t\" x=\"84\" y=\"46\" text-anchor=\"middle\">progress shown</text><text class=\"t\" x=\"12\" y=\"82\">tap</text><text class=\"t\" x=\"140\" y=\"82\" text-anchor=\"end\">900ms</text></svg></div></div></div>"
      },
      what: "Google's guidance puts feedback and status among motion's main jobs: animated responses to input show whether an action succeeded, and animated placeholders show that content is loading. The touch ripple is the purest case, since it starts at the point of contact and so confirms both that the tap registered and where the system thinks you touched. Apple adds that feedback motion should be brief and precise, and that it should not be the only channel, with haptics and sound carrying the same message.",
      why: "Without a response, people repeat the action. Nielsen's first limit is the one that matters here: about a tenth of a second is the point at which a system still feels like it reacted instantly, and Google's RAIL model asks for a transition initiated by input to complete within 100ms.",
      how: [
        "Acknowledge within about 100ms even when the real work will take much longer.",
        "Start the feedback at the point of contact so it is clearly about that action.",
        "Distinguish three states: received, working, finished.",
        "Pair the motion with a non-visual channel, since some people have motion turned off."
      ],
      example: "Material's radial reaction, the ripple that spreads from the point of touch, which exists to connect user input to the surface's reaction at the place it happened.",
      numbers: "Nielsen: 0.1 second is the limit for feeling that the system is reacting instantaneously. RAIL: process input events within 50ms and complete an input-initiated transition within 100ms.",
      pitfall: "Animating only the result and not the receipt. A 900ms server call with nothing happening for the first 400ms reads as a dead button, however good the eventual transition is.",
      source: "Material Design 2 Understanding motion guidance and Material Design 1 choreography guidance (Google); Apple, Human Interface Guidelines: Motion; Jakob Nielsen, Response Times: The 3 Important Limits (1993); Google, RAIL performance model",
      verify: {
        status: "verified",
        note: "Feedback and status as a stated job of motion comes from Material Design 2's Understanding motion page, read in review. The ripple description comes from the radial reaction section of the original Material Design choreography page, which says to use touch ripples to indicate the point of touch and confirm that touch input was received; the earlier draft credited this to Material Design 2. The 100ms and 50ms figures were read on Google's RAIL page and the 0.1 second limit on the Nielsen Norman Group article."
      },
      belongs: {
        verdict: "core",
        why: "Confirming input is the one job of interface motion that is close to non-negotiable, and it has published timing limits attached."
      },
      related: [729, 734, 748, 750]
    },
    {
      n: 742,
      title: "Motion as orientation",
      aka: ["Spatial orientation"],
      oneLine: "Movement that tells people where they came from and where they now are.",
      demo: {
        caption: "Both panels move during the same navigation. On the right they travel the same way, so it reads as one journey.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Opposite directions</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 80\"><rect class=\"s-mute\" x=\"4\" y=\"8\" width=\"66\" height=\"46\" rx=\"2\"/><path class=\"s-accent\" d=\"M56 31 H24\"/><path class=\"f-accent\" d=\"M14 31 L24 26 L24 36 Z\"/><text class=\"t\" x=\"37\" y=\"70\" text-anchor=\"middle\">outgoing</text><rect class=\"s-mute\" x=\"82\" y=\"8\" width=\"66\" height=\"46\" rx=\"2\"/><path class=\"s-accent\" d=\"M96 31 H128\"/><path class=\"f-accent\" d=\"M138 31 L128 26 L128 36 Z\"/><text class=\"t\" x=\"115\" y=\"70\" text-anchor=\"middle\">incoming</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One shared axis</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 80\"><rect class=\"s-mute\" x=\"4\" y=\"8\" width=\"66\" height=\"46\" rx=\"2\"/><path class=\"s-accent\" d=\"M56 31 H24\"/><path class=\"f-accent\" d=\"M14 31 L24 26 L24 36 Z\"/><text class=\"t\" x=\"37\" y=\"70\" text-anchor=\"middle\">outgoing</text><rect class=\"s-mute\" x=\"82\" y=\"8\" width=\"66\" height=\"46\" rx=\"2\"/><path class=\"s-accent\" d=\"M134 31 H102\"/><path class=\"f-accent\" d=\"M92 31 L102 26 L102 36 Z\"/><text class=\"t\" x=\"115\" y=\"70\" text-anchor=\"middle\">incoming</text></svg></div></div></div>"
      },
      what: "Google's shared axis pattern uses a single axis to encode the relationship between two views: horizontal or vertical movement for peers such as steps in a flow, and z-axis movement for a change of level, such as going from a settings button into the settings page. Both the outgoing and incoming views move together in the same direction, which is what makes the pair read as one journey rather than two events.",
      why: "Direction becomes memory. If forward is always leftwards and back is always rightwards, people build a map of the product without being taught one, and the back gesture stops being a guess.",
      how: [
        "Fix a direction convention for forward and back, then never break it.",
        "Play the exact reverse of the transition for the reverse action.",
        "Reserve the z-axis for changes of level in the hierarchy.",
        "Use a fade through where there is no spatial relationship, rather than inventing a direction."
      ],
      example: "Google's own examples: an onboarding flow transitioning along the x-axis, a stepper along the y-axis, and parent-to-child navigation along the z-axis.",
      numbers: "",
      pitfall: "Different directions for the same relationship in different parts of the product, usually because two teams built two flows. The map people were building quietly stops working.",
      source: "Material Design 2 motion system, shared axis pattern (Google)",
      verify: {
        status: "verified",
        note: "Read Google's motion system page this session, including the x, y and z-axis cases and the rule that outgoing and incoming elements transform in unison."
      },
      belongs: {
        verdict: "core",
        why: "Navigation direction is one of the few pieces of information a person can only get from motion, and getting it wrong costs them their sense of place."
      },
      related: [738, 740, 743]
    },
    {
      n: 743,
      title: "Motion as hierarchy",
      aka: ["Hierarchical timing", "Parent and child motion"],
      oneLine: "The order and timing of movement show which element is the parent, which is the child, and what belongs together.",
      demo: {
        caption: "Dashed outlines are earlier frames. Left, the menu swells from the middle of the screen; right, it grows out of its icon.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Grows from nowhere</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 96\"><rect class=\"s-mute\" x=\"4\" y=\"4\" width=\"144\" height=\"88\" rx=\"2\"/><rect class=\"f-mute\" x=\"12\" y=\"12\" width=\"14\" height=\"10\" rx=\"1\"/><rect class=\"s-mute\" x=\"61\" y=\"46\" width=\"30\" height=\"22\" rx=\"2\" style=\"stroke-dasharray:3 3\"/><rect class=\"s-mute\" x=\"53\" y=\"39\" width=\"46\" height=\"36\" rx=\"2\" style=\"stroke-dasharray:3 3\"/><rect class=\"s-accent\" x=\"46\" y=\"32\" width=\"60\" height=\"50\" rx=\"2\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Grows from its icon</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 96\"><rect class=\"s-mute\" x=\"4\" y=\"4\" width=\"144\" height=\"88\" rx=\"2\"/><rect class=\"f-accent\" x=\"12\" y=\"12\" width=\"14\" height=\"10\" rx=\"1\"/><rect class=\"s-mute\" x=\"12\" y=\"26\" width=\"20\" height=\"16\" rx=\"2\" style=\"stroke-dasharray:3 3\"/><rect class=\"s-mute\" x=\"12\" y=\"26\" width=\"40\" height=\"33\" rx=\"2\" style=\"stroke-dasharray:3 3\"/><rect class=\"s-accent\" x=\"12\" y=\"26\" width=\"60\" height=\"50\" rx=\"2\"/></svg></div></div></div>"
      },
      what: "Google states it plainly: motion helps orient people by showing how elements in a transition are related, and gives the case of an inbox opening into a message, where the child grows out of the parent. The timing side is what Material calls hierarchical timing: the order in which elements move, and the timing of that movement, should support the information hierarchy and create a path for the eye to follow. The spec adds a caution worth keeping, that this is not a simple formula in which the most important thing moves first and the least important last.",
      why: "Structure is otherwise invisible. A menu that grows out of the icon that opened it has explained its own parentage; a menu that fades in at the centre of the screen has not, and the person has to work out where to look and what closed it.",
      how: [
        "Grow a child out of the control that opened it, and shrink it back into the same place.",
        "Move peers together and in the same direction, so equality reads as equality.",
        "Time reactions outward from the point of contact, which is Material's separate radial reaction rule.",
        "Keep parent surfaces visible where you can, so the relationship survives the transition."
      ],
      example: "Google illustrates the pattern with three cases: parent to child from an inbox to a message, a menu icon uniting with the menu it opens, and peer items in a navigation.",
      numbers: "",
      pitfall: "Menus and popovers that fade in on the spot. The hierarchy is lost, and on dismissal people have no idea where the thing went.",
      source: "Material Design 2 Understanding motion guidance, hierarchy section (Google); Material Design 1 meaningful transitions guidance, hierarchical timing section (Google)",
      verify: {
        status: "verified",
        note: "The hierarchy section of Material Design 2's Understanding motion page was read in review, including its three illustrated cases. Hierarchical timing was read on the archived Material Design meaningful transitions page. Corrected in review: the earlier draft defined hierarchical timing as reactions spreading outward from the point of touch, which is a different Material rule called radial reaction; hierarchical timing is about order and timing supporting the information hierarchy, and the spec explicitly denies that it means most important first."
      },
      belongs: {
        verdict: "core",
        why: "Motion is one of the few ways to express parent and child relationships without adding chrome, and the anchoring rule is directly actionable."
      },
      related: [723, 737, 742]
    },
    {
      n: 744,
      title: "Transformation versus translation",
      aka: ["Transform versus move"],
      oneLine: "An element can become another thing, or simply travel; the two say different things.",
      demo: {
        caption: "Left, the mark keeps its shape and changes place. Right, it keeps its place and changes job. Two different claims.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Translate: same thing, new place</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 76\"><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"44\" height=\"52\" rx=\"2\"/><rect class=\"f-accent\" x=\"8\" y=\"26\" width=\"16\" height=\"16\" rx=\"2\"/><rect class=\"s-mute\" x=\"54\" y=\"6\" width=\"44\" height=\"52\" rx=\"2\"/><rect class=\"f-accent\" x=\"68\" y=\"26\" width=\"16\" height=\"16\" rx=\"2\"/><rect class=\"s-mute\" x=\"104\" y=\"6\" width=\"44\" height=\"52\" rx=\"2\"/><rect class=\"f-accent\" x=\"128\" y=\"26\" width=\"16\" height=\"16\" rx=\"2\"/><text class=\"t\" x=\"76\" y=\"72\" text-anchor=\"middle\">shape never changes</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Transform: same place, new job</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 76\"><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"44\" height=\"52\" rx=\"2\"/><rect class=\"f-accent\" x=\"10\" y=\"26\" width=\"32\" height=\"16\" rx=\"8\"/><rect class=\"s-mute\" x=\"54\" y=\"6\" width=\"44\" height=\"52\" rx=\"2\"/><rect class=\"s-accent\" x=\"60\" y=\"26\" width=\"32\" height=\"16\" rx=\"8\"/><rect class=\"f-accent\" x=\"60\" y=\"26\" width=\"19\" height=\"16\" rx=\"8\"/><rect class=\"s-mute\" x=\"104\" y=\"6\" width=\"44\" height=\"52\" rx=\"2\"/><rect class=\"s-accent\" x=\"110\" y=\"26\" width=\"32\" height=\"16\" rx=\"8\"/><path class=\"s-accent\" d=\"M119 34 L124 39 L134 29\"/><text class=\"t\" x=\"76\" y=\"72\" text-anchor=\"middle\">place never changes</text></svg></div></div></div>"
      },
      what: "Transformation changes an object's shape, size or job while its identity carries on: Willenskomer defines it as creating a continuous state of narrative flow when an object's utility changes, such as a submit button becoming a progress bar and then a tick. Translation moves an object without changing what it is. Google's two headline patterns split along the same line, with the container transform reshaping a persistent container and the shared axis sliding views that stay themselves.",
      why: "Choosing the wrong one gives a false statement. Transforming two unrelated things into each other claims a relationship that does not exist, and translating something that has changed its function hides the change.",
      how: [
        "Transform when the object's role changes but the object survives.",
        "Translate when the object is the same and only its place in the flow has changed.",
        "Keep corner radius, colour and aspect ratio continuous through a transformation.",
        "Do not run both on the same element at once unless the container genuinely moves and reshapes together."
      ],
      example: "A payment button that becomes a progress bar and then a confirmation tick without ever leaving the spot, compared with a step in a wizard that slides left to make room for the next one.",
      numbers: "",
      pitfall: "Morphing for its own sake. If the object at the end is not a continuation of the object at the start, a transformation is a lie the eye will believe for a moment and then reject.",
      source: "Issara Willenskomer, Creating Usability with Motion: The UX in Motion Manifesto (31 March 2017); Material Design 2 motion system (Google)",
      verify: {
        status: "verified",
        note: "Willenskomer's definition of transformation, 'creates a continuous state of narrative flow when object utility changes', was read from his article in review, where it is the fourth of his twelve principles. The container transform and shared axis descriptions come from Material Design 2's motion system page. The pairing of the two ideas under this heading is this entry's framing; neither source uses the phrase transformation versus translation."
      },
      belongs: {
        verdict: "core",
        why: "It names a real fork in every transition design and predicts which of the standard patterns to reach for."
      },
      related: [738, 739, 742, 745]
    },
    {
      n: 745,
      title: "Masking and clipping reveals",
      aka: ["Clip reveal", "Circular reveal"],
      oneLine: "Reveal or hide content by animating a clipping shape, leaving the content itself still.",
      demo: {
        caption: "Left, the content itself scales, so every block moves. Right, the blocks never move and only the revealing arc grows.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Content scaled up</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 78\"><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"44\" height=\"60\" rx=\"2\"/><rect class=\"f\" x=\"8\" y=\"35.5\" width=\"3.5\" height=\"3.5\"/><rect class=\"f\" x=\"12.5\" y=\"35.5\" width=\"3.5\" height=\"3.5\"/><rect class=\"f\" x=\"17\" y=\"35.5\" width=\"3.5\" height=\"3.5\"/><rect class=\"f\" x=\"8\" y=\"40\" width=\"3.5\" height=\"3.5\"/><rect class=\"f\" x=\"12.5\" y=\"40\" width=\"3.5\" height=\"3.5\"/><rect class=\"f\" x=\"17\" y=\"40\" width=\"3.5\" height=\"3.5\"/><rect class=\"f\" x=\"8\" y=\"44.5\" width=\"3.5\" height=\"3.5\"/><rect class=\"f\" x=\"12.5\" y=\"44.5\" width=\"3.5\" height=\"3.5\"/><rect class=\"f\" x=\"17\" y=\"44.5\" width=\"3.5\" height=\"3.5\"/><rect class=\"s-mute\" x=\"54\" y=\"6\" width=\"44\" height=\"60\" rx=\"2\"/><rect class=\"f\" x=\"58\" y=\"23\" width=\"7\" height=\"7\"/><rect class=\"f\" x=\"67\" y=\"23\" width=\"7\" height=\"7\"/><rect class=\"f\" x=\"76\" y=\"23\" width=\"7\" height=\"7\"/><rect class=\"f\" x=\"58\" y=\"32\" width=\"7\" height=\"7\"/><rect class=\"f\" x=\"67\" y=\"32\" width=\"7\" height=\"7\"/><rect class=\"f\" x=\"76\" y=\"32\" width=\"7\" height=\"7\"/><rect class=\"f\" x=\"58\" y=\"41\" width=\"7\" height=\"7\"/><rect class=\"f\" x=\"67\" y=\"41\" width=\"7\" height=\"7\"/><rect class=\"f\" x=\"76\" y=\"41\" width=\"7\" height=\"7\"/><rect class=\"s-mute\" x=\"104\" y=\"6\" width=\"44\" height=\"60\" rx=\"2\"/><rect class=\"f\" x=\"108\" y=\"12\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"121\" y=\"12\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"134\" y=\"12\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"108\" y=\"25\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"121\" y=\"25\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"134\" y=\"25\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"108\" y=\"38\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"121\" y=\"38\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"134\" y=\"38\" width=\"10\" height=\"10\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Mask animated</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 78\"><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"44\" height=\"60\" rx=\"2\"/><rect class=\"f-mute\" x=\"8\" y=\"12\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"21\" y=\"12\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"34\" y=\"12\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"8\" y=\"25\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"21\" y=\"25\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"34\" y=\"25\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"8\" y=\"38\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"21\" y=\"38\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"34\" y=\"38\" width=\"10\" height=\"10\"/><path class=\"s-accent\" d=\"M4 40.4 A22 22 0 0 1 29.6 66\" style=\"stroke-dasharray:3 3\"/><circle class=\"f-accent\" cx=\"8\" cy=\"62\" r=\"2.5\"/><rect class=\"s-mute\" x=\"54\" y=\"6\" width=\"44\" height=\"60\" rx=\"2\"/><rect class=\"f-mute\" x=\"58\" y=\"12\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"71\" y=\"12\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"84\" y=\"12\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"58\" y=\"25\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"71\" y=\"25\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"84\" y=\"25\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"58\" y=\"38\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"71\" y=\"38\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"84\" y=\"38\" width=\"10\" height=\"10\"/><path class=\"s-accent\" d=\"M54 24.2 A38 38 0 0 1 95.8 66\" style=\"stroke-dasharray:3 3\"/><circle class=\"f-accent\" cx=\"58\" cy=\"62\" r=\"2.5\"/><rect class=\"s-mute\" x=\"104\" y=\"6\" width=\"44\" height=\"60\" rx=\"2\"/><rect class=\"f\" x=\"108\" y=\"12\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"121\" y=\"12\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"134\" y=\"12\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"108\" y=\"25\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"121\" y=\"25\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"134\" y=\"25\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"108\" y=\"38\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"121\" y=\"38\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"134\" y=\"38\" width=\"10\" height=\"10\"/><circle class=\"f-accent\" cx=\"108\" cy=\"62\" r=\"2.5\"/></svg></div></div></div>"
      },
      what: "Instead of moving or scaling the content, you animate the window it is seen through. Willenskomer's masking principle describes it as creating continuity in an object when what matters is which part of it is revealed or concealed. Android has shipped a specific version of this since API level 21 in ViewAnimationUtils.createCircularReveal, which animates a clipping circle from one radius to another to show or hide a view. On the web the same effect comes from animating clip-path.",
      why: "The content stays undistorted and stays put, so text remains readable throughout and nothing stretches. It also lets you anchor the reveal at the control that triggered it, which quietly explains where the new content came from.",
      how: [
        "Animate the mask, not the contents inside it.",
        "Start the reveal at the trigger point rather than the centre of the element.",
        "Match the mask's shape to the component's own corner radius.",
        "Keep it short, because a slowly sweeping mask leaves text half-visible for an uncomfortable amount of time."
      ],
      example: "Android's createCircularReveal, available since Android 5.0, which takes a centre point plus a start and end radius and animates a clipping circle to reveal or hide a view.",
      numbers: "ViewAnimationUtils.createCircularReveal has been available since API level 21 (Android 5.0).",
      pitfall: "Masking large blocks of body text. Half a paragraph clipped mid-word for 400ms is harder to read than a plain fade.",
      source: "Issara Willenskomer, Creating Usability with Motion: The UX in Motion Manifesto (31 March 2017); Android Developers, reveal or hide a view using animation",
      verify: {
        status: "verified",
        note: "Willenskomer's masking definition, 'creates continuity in an interface object or object group when utility is determined by which part of the object or group is revealed or concealed', was read from his article in review, where it is the sixth of his twelve principles. The createCircularReveal signature, its purpose and its availability from Android 5.0, API level 21, were read from the Android developer documentation, which describes the five parameters as the view, the centre x and y of the clipping circle, the start radius and the end radius."
      },
      belongs: {
        verdict: "core",
        why: "It is a distinct and cheap reveal technique with platform support, and it solves the specific problem of showing content without moving it."
      },
      related: [738, 744, 752]
    },
    {
      n: 746,
      title: "Parallax restraint",
      aka: ["Parallax scrolling"],
      oneLine: "Layers moving at different speeds imply depth, and are one of the quickest ways to make people ill.",
      demo: {
        caption: "Each arrow is one layer's travel for the same scroll. Left, the background runs the other way; right, everything agrees.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Background against the scroll</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 104\"><rect class=\"s-mute\" x=\"4\" y=\"4\" width=\"144\" height=\"44\" rx=\"2\"/><rect class=\"f-mute\" x=\"8\" y=\"8\" width=\"136\" height=\"16\"/><rect class=\"s-accent\" x=\"40\" y=\"18\" width=\"70\" height=\"26\" rx=\"2\"/><path class=\"s-mute\" d=\"M8 74 H144\" style=\"stroke-dasharray:3 3\"/><path class=\"s-mute\" d=\"M24 74 V60\"/><path class=\"f-mute\" d=\"M24 54 L20 61 L28 61 Z\"/><text class=\"t\" x=\"24\" y=\"100\" text-anchor=\"middle\">page</text><path class=\"s-accent\" d=\"M76 74 V84\"/><path class=\"f-accent\" d=\"M76 90 L72 83 L80 83 Z\"/><text class=\"t\" x=\"76\" y=\"100\" text-anchor=\"middle\">back</text><path class=\"s-accent\" d=\"M128 74 V60\"/><path class=\"f-accent\" d=\"M128 54 L124 61 L132 61 Z\"/><text class=\"t\" x=\"128\" y=\"100\" text-anchor=\"middle\">fore</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Same way, smaller difference</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 104\"><rect class=\"s-mute\" x=\"4\" y=\"4\" width=\"144\" height=\"44\" rx=\"2\"/><rect class=\"f-mute\" x=\"8\" y=\"8\" width=\"136\" height=\"16\"/><rect class=\"s-accent\" x=\"40\" y=\"18\" width=\"70\" height=\"26\" rx=\"2\"/><path class=\"s-mute\" d=\"M8 74 H144\" style=\"stroke-dasharray:3 3\"/><path class=\"s-mute\" d=\"M24 74 V60\"/><path class=\"f-mute\" d=\"M24 54 L20 61 L28 61 Z\"/><text class=\"t\" x=\"24\" y=\"100\" text-anchor=\"middle\">page</text><path class=\"s-accent\" d=\"M76 74 V68\"/><path class=\"f-accent\" d=\"M76 62 L72 69 L80 69 Z\"/><text class=\"t\" x=\"76\" y=\"100\" text-anchor=\"middle\">back</text><path class=\"s-accent\" d=\"M128 74 V60\"/><path class=\"f-accent\" d=\"M128 54 L124 61 L132 61 Z\"/><text class=\"t\" x=\"128\" y=\"100\" text-anchor=\"middle\">fore</text></svg></div></div></div>"
      },
      what: "Parallax grew out of the multiplane camera used in animation from the 1930s, reached games in the early 1980s with Jump Bug in 1981 and Moon Patrol in 1982, and arrived on the web in the late 2000s. Google lists it as one way motion can express elevation, with a foreground surface moving faster than the background. Val Head's article on motion sensitivity puts mismatched direction and speed near the top of the list of triggers, with parallax and scroll hijacking as the named examples.",
      why: "It does produce a genuine depth cue, and a small amount of it can separate foreground from background more convincingly than a shadow. The cost is that the same mismatch between what the hand does and what the eye sees is exactly what upsets the balance system. The claim that it lifts engagement is weaker than the number of case studies suggests. A Purdue master's thesis from 2013 concluded that although parallax scrolling enhanced certain aspects of the user experience, it did not necessarily improve the overall user experience. The journal paper that grew out of it found a difference only in perceived fun, and reported that two of the people who used the parallax site suffered motion sickness.",
      how: [
        "Keep the speed difference between layers small.",
        "Never move a layer against the direction of the scroll.",
        "Do not take over the scroll itself; let the page move at the speed the person expects.",
        "Ship a reduced-motion version that pins the layers together, and test it."
      ],
      example: "Google's elevation guidance uses parallax as a depth device, describing a foreground surface moving faster than a background image to create a sense of depth.",
      numbers: "",
      pitfall: "Parallax across a whole page rather than in one band. The effect stops being a depth cue and becomes a moving floor.",
      source: "Val Head, Designing Safer Web Animation For Motion Sensitivity, A List Apart (8 September 2015); Material Design 2 elevation guidance (Google); Dede M. Frederick, The Effects Of Parallax Scrolling On User Experience And Preference In Web Design, Purdue University master's thesis (18 April 2013); Frederick, Mohler, Vorvoreanu and Glotzbach, The effects of parallax scrolling on user experience in web design, Journal of Usability Studies 10(2) (February 2015)",
      verify: {
        status: "disputed",
        note: "Disputed because the usual selling point does not hold up. The technique, its history and the accessibility cost all check out: Val Head's article, Material Design 2's elevation page and Wikipedia's parallax scrolling article were read in review, and the last confirms the multiplane camera lineage from the 1930s, limited parallax in Jump Bug (1981) and a full three-layer implementation in Moon Patrol (1982). What does not check out is any published evidence that parallax improves comprehension, engagement or conversion. The 2013 finding is a Purdue master's thesis by Dede M. Frederick dated 18 April 2013, whose abstract page carries the sentence quoted above. The journal paper is Frederick, Mohler, Vorvoreanu and Glotzbach in the Journal of Usability Studies 10(2), February 2015; its abstract was read on the ACM Digital Library and reports a significant difference only in perceived fun, with two participants suffering motion sickness on the parallax site."
      },
      belongs: {
        verdict: "core",
        why: "It is used constantly on marketing sites and it carries a known accessibility cost, so a designer needs a rule for it rather than a preference."
      },
      related: [740, 753, 754]
    },
    {
      n: 747,
      title: "Idle and loop animation",
      aka: ["Indeterminate progress", "Ambient motion"],
      oneLine: "Motion that repeats while nothing else is happening, usually to say the system is still working.",
      demo: {
        caption: "Nielsen Norman's thresholds on one axis: a loop suits two to ten seconds, and past ten a percentage is owed.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 82\"><text class=\"t\" x=\"170\" y=\"14\" text-anchor=\"middle\">looped animation</text><text class=\"t\" x=\"320\" y=\"14\" text-anchor=\"end\">percent-done</text><rect class=\"f-mute\" x=\"20\" y=\"20\" width=\"50\" height=\"14\"/><rect class=\"f\" x=\"70\" y=\"20\" width=\"200\" height=\"14\"/><rect class=\"f-accent\" x=\"270\" y=\"20\" width=\"50\" height=\"14\"/><path class=\"s-mute\" d=\"M20 44 H320\"/><path class=\"s-mute\" d=\"M20 44 V48\"/><path class=\"s-mute\" d=\"M70 44 V48\"/><path class=\"s-mute\" d=\"M270 44 V48\"/><text class=\"t\" x=\"20\" y=\"58\" text-anchor=\"middle\">0</text><text class=\"t\" x=\"70\" y=\"58\" text-anchor=\"middle\">2s</text><text class=\"t\" x=\"270\" y=\"58\" text-anchor=\"middle\">10s</text><path class=\"s-accent\" d=\"M145 18 V52\" style=\"stroke-dasharray:3 3\"/><text class=\"t\" x=\"145\" y=\"58\" text-anchor=\"middle\">5s</text><text class=\"t\" x=\"145\" y=\"74\" text-anchor=\"middle\">WCAG: pause control past 5s</text></svg></div>"
      },
      what: "There are two families. Indeterminate loops such as spinners and shimmering placeholders report that work is happening but not how much of it is done. Ambient idle motion exists to keep something alive on screen, as in a breathing illustration or a slowly drifting background. Nielsen Norman Group's guidance splits the first family by wait length: a looped animation suits waits of roughly two to ten seconds, and beyond ten seconds you should show a percent-done indicator instead.",
      why: "A loop buys patience for a short wait and stops people pressing the button again. Past about ten seconds it stops reassuring, because it carries no information about progress and cannot distinguish a slow system from a broken one.",
      how: [
        "Loop only while real work is in flight, and stop the moment it finishes.",
        "Swap to a determinate indicator once a wait can exceed ten seconds.",
        "Match the last frame of the loop to the first, since a visible jump at the wrap reads as a stutter.",
        "Pause ambient loops when the element is off screen or the tab is in the background.",
        "Give a control to stop anything that loops for more than five seconds beside other content."
      ],
      example: "Nielsen Norman Group's threshold: use a looped animation for waits of about two to ten seconds, and a percent-done indicator above ten seconds because it tells the person roughly how long is left. The same article advises lowering that cut-off when your estimate of the delay is unreliable.",
      numbers: "Nielsen Norman Group: looped animation for waits of roughly 2 to 10 seconds, percent-done for 10 seconds or more. WCAG 2.2 SC 2.2.2: automatic movement lasting more than five seconds alongside other content needs a pause, stop or hide mechanism.",
      pitfall: "A spinner left running after the request has failed. The loop keeps promising progress that will never arrive, which is worse than an error message.",
      source: "Katie Sherwin, Progress Indicators Make a Slow System Less Insufferable, Nielsen Norman Group (26 October 2014); W3C, WCAG 2.2 Success Criterion 2.2.2",
      verify: {
        status: "adjusted",
        note: "Idle and loop animation is not a named canonical principle, and no originating author was found for the heading as the master list phrases it. Rather than invent a lineage it is grounded in two published sources read in review: Katie Sherwin's 2014 Nielsen Norman Group article, which reserves looped animation for actions taking between two and ten seconds and percent-done indicators for ten seconds or more, and the five-second rule in WCAG 2.2 Success Criterion 2.2.2."
      },
      belongs: {
        verdict: "core",
        why: "Waiting states are among the most-seen motion in any product, and there are published thresholds for getting them right."
      },
      related: [741, 754, 9747]
    },
    {
      n: 9747,
      title: "Pause, stop, hide for automatic motion",
      aka: ["Control over autoplay"],
      oneLine: "Anything that moves by itself for more than five seconds needs a way to stop it.",
      demo: {
        caption: "Both advance by themselves every four seconds. Only one of them gives the reader a way to stop it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No mechanism</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--accent db-anim db-anim--fade db-anim--linear\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span></div><span class=\"db-note\">auto, every 4s</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Pause, stop or hide</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--accent db-anim db-anim--fade db-anim--linear\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-dot db-dot--sm db-dot--mute\"></span></span><span class=\"db-btn db-btn--ghost db-btn--sm\">Pause</span></div><span class=\"db-note\">auto, every 4s</span></div></div></div></div></div>"
      },
      what: "WCAG 2.2 Success Criterion 2.2.2 is a Level A requirement. For moving, blinking or scrolling information that starts automatically, lasts more than five seconds and is shown alongside other content, there must be a mechanism to pause, stop or hide it, unless the movement is essential to the activity. The same criterion covers information that updates itself automatically. This is a separate obligation from the reduced-motion preference, and it applies whether or not that preference is set.",
      why: "Reading next to something that moves is hard for many people with attention or reading difficulties, and impossible for some. A carousel that advances on its own also takes control of pacing away from the reader, who then has to wait for the loop to come round again.",
      how: [
        "Give auto-advancing carousels a visible pause control, not only a pause on hover.",
        "Audit every animated GIF, marquee, ticker and background video for the five-second rule.",
        "Stop auto-advance permanently once a person interacts, rather than resuming after a delay.",
        "Prefer manual advance by default; autoplay is rarely essential in the sense the criterion means."
      ],
      example: "A home-page carousel that rotates every four seconds with no controls fails this criterion, since the movement runs beyond five seconds in total and sits beside the page's other content.",
      numbers: "WCAG 2.2 SC 2.2.2, Level A: more than five seconds of automatic movement presented in parallel with other content requires a pause, stop or hide mechanism.",
      pitfall: "Treating a hover pause as the mechanism. It does nothing for keyboard or touch users, and the criterion asks for a mechanism rather than an accidental side effect of the pointer resting somewhere.",
      source: "W3C, Web Content Accessibility Guidelines 2.2, Success Criterion 2.2.2 Pause, Stop, Hide (Level A)",
      verify: {
        status: "verified",
        note: "Read the full normative text of SC 2.2.2 in the WCAG 2.2 recommendation this session, including the three conditions (starts automatically, lasts more than five seconds, presented in parallel with other content) and the exception for essential movement."
      },
      belongs: {
        verdict: "core",
        why: "A Level A conformance requirement about motion, missing from the master list, which otherwise covers user control only through the reduced-motion preference. Added as a gap."
      },
      related: [747, 753, 754]
    },
    {
      n: 748,
      title: "Micro-interaction anatomy (trigger, rules, feedback, loops and modes)",
      aka: ["Saffer's four parts"],
      oneLine: "Dan Saffer's structure for a single small interaction: a trigger, the rules, the feedback, and loops and modes.",
      demo: { none: "Saffer's four parts are a checklist for writing an interaction down, and rules, loops and modes have no visible form, so a picture could only label the vocabulary." },
      what: "Saffer's 2013 book breaks any small self-contained interaction into four parts. The trigger starts it and may be user-initiated or system-initiated. The rules decide what can and cannot happen once it starts. The feedback is what the person sees, hears or feels, and it is how they learn the rules. Loops and modes cover behaviour over time: what happens on the hundredth use, what happens when the interaction is left running, and what alternative state the thing can be put into.",
      why: "It turns a vague brief such as make the like button nicer into four answerable questions. In practice most of the trouble in a micro-interaction lives in the rules and the modes rather than in the animation, and this structure forces you to write them down before you open the animation tool.",
      how: [
        "Write all four parts in a sentence each before designing any motion.",
        "Make triggers look like triggers, and keep them in the same place every time.",
        "Design the feedback so it reveals a rule rather than merely decorating the action.",
        "Decide the loop explicitly: does this behave the same way on the first use and the fiftieth?",
        "Avoid adding a mode where a separate control would do, since modes are where people get lost."
      ],
      example: "Pull to refresh. Trigger: dragging past a threshold at the top of a list. Rules: only when already at the top and not already refreshing. Feedback: an indicator that follows the finger, then spins. Loop: it spins until the request returns, then collapses.",
      numbers: "",
      pitfall: "Designing the feedback first. A beautifully animated control with undefined rules produces states nobody planned, such as a spinner that can be triggered twice.",
      source: "Dan Saffer, Microinteractions: Designing with Details, O'Reilly (2013)",
      verify: {
        status: "verified",
        note: "Checked against the book's published table of contents on O'Reilly, which lists Triggers, Rules, Feedback, and Loops and Modes as the structural chapters, and against the publisher's own summary of the book's structure. The pull-to-refresh breakdown is my own worked example, not the book's."
      },
      belongs: {
        verdict: "core",
        why: "It is the standard vocabulary for the smallest unit of interaction design, and it covers the non-visual parts that motion alone cannot express."
      },
      related: [733, 741, 749]
    },
    {
      n: 749,
      title: "Interruptibility",
      aka: ["Redirection"],
      oneLine: "Any animation must be redirectable in flight, without waiting for it to finish.",
      demo: {
        caption: "Both take a second input at the dashed line. Left finishes the first move; right turns from where it already was.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Input blocked until it ends</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 96\"><path class=\"s-mute\" d=\"M14 78 H144\"/><path class=\"s-mute\" d=\"M14 20 H144\" style=\"stroke-dasharray:3 3\"/><text class=\"t\" x=\"10\" y=\"81\" text-anchor=\"end\">A</text><text class=\"t\" x=\"10\" y=\"23\" text-anchor=\"end\">B</text><path class=\"s-accent\" d=\"M50 10 V86\" style=\"stroke-dasharray:3 3\"/><text class=\"t\" x=\"50\" y=\"8\" text-anchor=\"middle\">input</text><path class=\"s\" d=\"M14 78 C 30 78, 44 22, 82 20 L96 20 C 116 20, 124 78, 142 78\"/><circle class=\"f-accent\" cx=\"142\" cy=\"78\" r=\"3\"/><text class=\"t\" x=\"142\" y=\"92\" text-anchor=\"end\">settled</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Redirected in flight</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 96\"><path class=\"s-mute\" d=\"M14 78 H144\"/><path class=\"s-mute\" d=\"M14 20 H144\" style=\"stroke-dasharray:3 3\"/><text class=\"t\" x=\"10\" y=\"81\" text-anchor=\"end\">A</text><text class=\"t\" x=\"10\" y=\"23\" text-anchor=\"end\">B</text><path class=\"s-accent\" d=\"M50 10 V86\" style=\"stroke-dasharray:3 3\"/><text class=\"t\" x=\"50\" y=\"8\" text-anchor=\"middle\">input</text><path class=\"s\" d=\"M14 78 C 30 78, 42 34, 50 28 C 58 22, 66 30, 78 50 C 88 66, 96 78, 108 78\"/><circle class=\"f-accent\" cx=\"108\" cy=\"78\" r=\"3\"/><text class=\"t\" x=\"108\" y=\"92\" text-anchor=\"middle\">settled</text></svg></div></div></div>"
      },
      what: "Apple's guidance says to let people cancel motion, and as much as possible not to make them wait for an animation to finish before they can do anything, especially if they will see it more than once. Apple's WWDC 2018 talk on fluid interfaces treats constant redirection and interruption as one of its main themes, and describes responding to a change in the user's motion as fast as it can be detected rather than waiting for a timer to expire.",
      why: "Input blocked for the length of a transition is experienced as lag, even when the transition is fast. When motion can be caught and redirected mid-flight, the interface feels attached to the person rather than playing a recording at them.",
      how: [
        "Animate from the current value and current velocity, never from a hardcoded start state.",
        "Prefer springs, which carry position and velocity and can be redirected at any frame.",
        "Never disable input for the duration of a transition.",
        "Test by interrupting: tap, drag and reverse mid-animation and see whether anything jumps or gets stuck."
      ],
      example: "The iPhone home gesture, discussed in that talk: a swipe can be redirected into app switching or back into the app part-way through, because the animation is being driven rather than played.",
      numbers: "",
      pitfall: "Setting a flag such as isAnimating and rejecting input while it is true. It makes the code simple and the interface feel broken, because a fast person is now fighting a queue.",
      source: "Apple, Human Interface Guidelines: Motion; Apple, WWDC 2018 session 803, Designing Fluid Interfaces",
      verify: {
        status: "verified",
        note: "Read Apple's Human Interface Guidelines motion page this session for the guidance on cancelling motion, and the WWDC 2018 session 803 transcript for the passages on constant redirection and interruption and on responding to a change in motion rather than waiting for a timer."
      },
      belongs: {
        verdict: "core",
        why: "It is the difference between motion that serves the person and motion that makes them wait, and it constrains the technique you can use to build it."
      },
      related: [736, 741, 750]
    },
    {
      n: 750,
      title: "Gesture-following motion",
      aka: ["Direct manipulation motion"],
      oneLine: "While a finger is down the object tracks it exactly, then hands off to physics on release.",
      demo: {
        caption: "Two gestures released at the same instant. Left throws away how fast each was moving; right carries it into the settle.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Fixed duration on release</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 100\"><path class=\"s\" d=\"M14 10 H26\"/><text class=\"t\" x=\"30\" y=\"13\">flick</text><path class=\"s-mute\" d=\"M62 10 H74\"/><text class=\"t\" x=\"78\" y=\"13\">drag</text><path class=\"s-mute\" d=\"M14 82 H144\"/><path class=\"s-mute\" d=\"M14 30 H144\" style=\"stroke-dasharray:3 3\"/><path class=\"s-accent\" d=\"M52 20 V88\" style=\"stroke-dasharray:3 3\"/><text class=\"t\" x=\"52\" y=\"98\" text-anchor=\"middle\">release</text><path class=\"s\" d=\"M14 82 C 28 82, 38 50, 52 42 C 70 32, 96 30, 118 30\"/><path class=\"s-mute\" d=\"M14 82 C 32 82, 42 74, 52 70 C 74 60, 98 30, 118 30\"/><circle class=\"f-accent\" cx=\"118\" cy=\"30\" r=\"3\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Release velocity carried</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 100\"><path class=\"s\" d=\"M14 10 H26\"/><text class=\"t\" x=\"30\" y=\"13\">flick</text><path class=\"s-mute\" d=\"M62 10 H74\"/><text class=\"t\" x=\"78\" y=\"13\">drag</text><path class=\"s-mute\" d=\"M14 82 H144\"/><path class=\"s-mute\" d=\"M14 30 H144\" style=\"stroke-dasharray:3 3\"/><path class=\"s-accent\" d=\"M52 20 V88\" style=\"stroke-dasharray:3 3\"/><text class=\"t\" x=\"52\" y=\"98\" text-anchor=\"middle\">release</text><path class=\"s\" d=\"M14 82 C 28 82, 38 50, 52 42 C 60 36, 66 26, 76 27 C 82 28, 84 30, 88 30\"/><path class=\"s-mute\" d=\"M14 82 C 32 82, 42 74, 52 70 C 80 60, 106 32, 132 30\"/><circle class=\"f-accent\" cx=\"88\" cy=\"30\" r=\"3\"/><circle class=\"f-accent\" cx=\"132\" cy=\"30\" r=\"3\"/></svg></div></div></div>"
      },
      what: "Apple's guidance asks for realistic feedback motion that follows people's gestures and expectations, with the example that a view revealed by sliding down from the top should not be dismissed by sliding it sideways. The WWDC 2018 talk goes further into the mechanics: a touch carries position, velocity, pressure and contact size, and the useful design is one where the object follows the finger exactly and then continues under a spring seeded with the release velocity.",
      why: "Tracking makes the object feel like it is in the person's hand, which is the whole promise of touch. It also makes the interaction reversible, since a half-completed drag can be abandoned and will simply return.",
      how: [
        "Track the gesture one to one while contact is held; do not smooth or lag it.",
        "Hand the release velocity to a spring so the object carries on at the speed the finger left it.",
        "Rubber-band past the limits rather than stopping dead at them.",
        "Make dismissal the reverse of the reveal, on the same axis.",
        "Return the object to its start position on cancel, at the same speed it would have completed."
      ],
      example: "A bottom sheet dragged down with a finger: it follows the touch exactly, and on release either falls closed or springs back up depending on the distance travelled and the release speed.",
      numbers: "",
      pitfall: "Firing a fixed-duration animation on gesture end and ignoring the velocity. A hard flick and a slow drag then finish identically, and the interface stops feeling physical.",
      source: "Apple, Human Interface Guidelines: Motion; Apple, WWDC 2018 session 803, Designing Fluid Interfaces",
      verify: {
        status: "verified",
        note: "Apple's wording about feedback motion following people's gestures, and the slide-down and slide-sideways example, were read on the Human Interface Guidelines motion page this session. The point about a touch carrying velocity, pressure and size is from the WWDC 2018 session 803 transcript."
      },
      belongs: {
        verdict: "core",
        why: "Every touch interface has draggable surfaces, and the difference between tracking and not tracking is felt immediately by everyone who uses it."
      },
      related: [736, 741, 749]
    },
    {
      n: 751,
      title: "Frame budget and 60fps",
      aka: ["Frame rate", "Jank"],
      oneLine: "Every frame must be produced inside the display's refresh interval, or the motion visibly stutters.",
      demo: {
        caption: "Each slot is one 16ms frame at 60Hz. The fourth job overruns its boundary, and the next frame is never drawn.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 84\"><rect class=\"f\" x=\"20\" y=\"4\" width=\"10\" height=\"8\"/><text class=\"t\" x=\"34\" y=\"11\">your work, 10ms</text><rect class=\"f-mute\" x=\"140\" y=\"4\" width=\"10\" height=\"8\"/><text class=\"t\" x=\"154\" y=\"11\">browser, 6ms</text><path class=\"s-mute\" d=\"M20 20 V58\"/><path class=\"s-mute\" d=\"M80 20 V58\"/><path class=\"s-mute\" d=\"M140 20 V58\"/><path class=\"s-mute\" d=\"M200 20 V58\"/><path class=\"s-accent\" d=\"M260 20 V58\"/><path class=\"s-mute\" d=\"M320 20 V58\"/><path class=\"s-mute\" d=\"M20 58 H320\"/><rect class=\"f\" x=\"20\" y=\"26\" width=\"38\" height=\"14\"/><rect class=\"f-mute\" x=\"58\" y=\"26\" width=\"22\" height=\"14\"/><rect class=\"f\" x=\"80\" y=\"26\" width=\"38\" height=\"14\"/><rect class=\"f-mute\" x=\"118\" y=\"26\" width=\"22\" height=\"14\"/><rect class=\"f\" x=\"140\" y=\"26\" width=\"38\" height=\"14\"/><rect class=\"f-mute\" x=\"178\" y=\"26\" width=\"22\" height=\"14\"/><rect class=\"f\" x=\"200\" y=\"26\" width=\"82\" height=\"14\"/><text class=\"t\" x=\"290\" y=\"52\" text-anchor=\"middle\">dropped</text><text class=\"t\" x=\"20\" y=\"72\" text-anchor=\"middle\">0</text><text class=\"t\" x=\"80\" y=\"72\" text-anchor=\"middle\">16</text><text class=\"t\" x=\"140\" y=\"72\" text-anchor=\"middle\">32</text><text class=\"t\" x=\"200\" y=\"72\" text-anchor=\"middle\">48</text><text class=\"t\" x=\"260\" y=\"72\" text-anchor=\"middle\">64</text><text class=\"t\" x=\"320\" y=\"72\" text-anchor=\"end\">80ms</text></svg></div>"
      },
      what: "At 60Hz a frame arrives roughly every 16ms, and Google's RAIL model asks you to produce each animation frame in 10ms or less, because the browser needs the rest of the interval for its own work. The number 60 is a convention rather than a law: plenty of phones and monitors run at 90Hz or 120Hz, which shortens the budget accordingly. Apple's fluid interfaces talk makes the related point that it is more than just about frame rates, because you can have something chugging along at a nice 60 frames per second, but it just feels off.",
      why: "Dropped frames are read as poor quality even by people who cannot say what they saw. A stutter also breaks the illusion of direct manipulation faster than almost anything else, because a tracked object that lags behind the finger stops feeling held.",
      how: [
        "Measure frame time on the cheapest device you support, not the newest.",
        "Budget about 10ms of your own work per frame and leave the rest to the browser.",
        "Keep layout reads and writes out of scroll and gesture handlers.",
        "Watch for long tasks on the main thread that land in the middle of a transition."
      ],
      example: "Google's RAIL model states the arithmetic directly: 1000ms divided by 60 frames per second gives roughly 16ms per frame, of which about 6ms goes to the browser's own rendering work.",
      numbers: "RAIL: produce each animation frame in 10ms or less; 1000/60 is approximately 16ms per frame; process input events within 50ms; complete an input-initiated transition within 100ms.",
      pitfall: "Optimising for 60fps on a 120Hz display. The budget there is about 8ms, and motion tuned to the older figure can look worse on better hardware.",
      source: "Google, RAIL performance model (web.dev); Apple, WWDC 2018 session 803, Designing Fluid Interfaces",
      verify: {
        status: "adjusted",
        note: "The RAIL numbers were read on Google's web.dev page in review, including the arithmetic that 1000ms divided by 60 frames per second is roughly 16ms per frame, of which browsers need about 6ms, leaving the 10ms guideline. The framing of the master list title has been adjusted: the fundamental is matching the display's refresh interval, and 60fps is a convention that no longer describes much current hardware. The point that frame rate alone is not the measure is quoted from the WWDC 2018 session 803 transcript."
      },
      belongs: {
        verdict: "core",
        why: "Motion that cannot hit the frame budget is worse than no motion, so the budget is a design constraint and not only an engineering one."
      },
      related: [734, 752, 797]
    },
    {
      n: 752,
      title: "Animating cheap properties only",
      aka: ["Compositor-only animation"],
      oneLine: "Animate transform and opacity, because they skip layout and paint.",
      demo: {
        caption: "The same pipeline twice. Transform and opacity skip the two crossed stages, so the browser only recomposites the frame.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 330 104\"><text class=\"t\" x=\"36\" y=\"10\" text-anchor=\"middle\">style</text><text class=\"t\" x=\"122\" y=\"10\" text-anchor=\"middle\">layout</text><text class=\"t\" x=\"208\" y=\"10\" text-anchor=\"middle\">paint</text><text class=\"t\" x=\"294\" y=\"10\" text-anchor=\"middle\">composite</text><text class=\"t\" x=\"0\" y=\"26\">animating width or top</text><rect class=\"s\" x=\"0\" y=\"30\" width=\"72\" height=\"22\" rx=\"2\"/><rect class=\"s\" x=\"86\" y=\"30\" width=\"72\" height=\"22\" rx=\"2\"/><rect class=\"s\" x=\"172\" y=\"30\" width=\"72\" height=\"22\" rx=\"2\"/><rect class=\"s\" x=\"258\" y=\"30\" width=\"72\" height=\"22\" rx=\"2\"/><path class=\"s-mute\" d=\"M73 41 H80\"/><path class=\"f-mute\" d=\"M85 41 L79 38 L79 44 Z\"/><path class=\"s-mute\" d=\"M159 41 H166\"/><path class=\"f-mute\" d=\"M171 41 L165 38 L165 44 Z\"/><path class=\"s-mute\" d=\"M245 41 H252\"/><path class=\"f-mute\" d=\"M257 41 L251 38 L251 44 Z\"/><text class=\"t\" x=\"0\" y=\"70\">animating transform or opacity</text><rect class=\"s\" x=\"0\" y=\"74\" width=\"72\" height=\"22\" rx=\"2\"/><rect class=\"s-mute\" x=\"86\" y=\"74\" width=\"72\" height=\"22\" rx=\"2\" style=\"stroke-dasharray:3 3\"/><path class=\"s-mute\" d=\"M92 78 L152 92\"/><path class=\"s-mute\" d=\"M152 78 L92 92\"/><rect class=\"s-mute\" x=\"172\" y=\"74\" width=\"72\" height=\"22\" rx=\"2\" style=\"stroke-dasharray:3 3\"/><path class=\"s-mute\" d=\"M178 78 L238 92\"/><path class=\"s-mute\" d=\"M238 78 L178 92\"/><rect class=\"s\" x=\"258\" y=\"74\" width=\"72\" height=\"22\" rx=\"2\"/><path class=\"s-mute\" d=\"M73 85 H80\"/><path class=\"f-mute\" d=\"M85 85 L79 82 L79 88 Z\"/><path class=\"s-mute\" d=\"M159 85 H166\"/><path class=\"f-mute\" d=\"M171 85 L165 82 L165 88 Z\"/><path class=\"s-mute\" d=\"M245 85 H252\"/><path class=\"f-mute\" d=\"M257 85 L251 82 L251 88 Z\"/></svg></div>"
      },
      what: "Google's animations guide advises restricting animations to opacity and transform so they stay on the compositing stage of the rendering pipeline, and avoiding any property that triggers layout or paint unless it is genuinely necessary. Animating width, height, top, left, margin or padding forces the browser to recalculate positions every frame, and animating colours or shadows forces a repaint.",
      why: "The cheap properties are the ones that let a browser hit the frame budget on a slow phone. This is one of the few places where a design decision made in a static mockup, such as growing a card by width rather than by scale, determines whether the built version stutters.",
      how: [
        "Translate with transform instead of animating top or left.",
        "Scale with transform instead of animating width or height.",
        "Fade with opacity rather than toggling visibility or animating a colour.",
        "Use will-change sparingly and only after you have measured a problem; Google's guidance warns against applying it pre-emptively.",
        "Check what a property costs in browser developer tools before you animate it."
      ],
      example: "A card that grows on hover using transform: scale and one that grows by animating its width look almost identical in a mockup, and behave very differently under a performance trace.",
      numbers: "",
      pitfall: "Scaling a card and then wondering why its text looks blurry or its border thickens. Transform scales pixels, so type and strokes scale with it, and you may need to counter-scale the contents.",
      source: "Google, Animations guide (web.dev)",
      verify: {
        status: "verified",
        note: "Read the web.dev animations guide this session; the advice to restrict animations to opacity and transform, to avoid properties triggering layout or paint, and the caution about will-change are all taken from it."
      },
      belongs: {
        verdict: "core",
        why: "It converts a rendering constraint into a design rule, and the rule changes what a designer specifies rather than only how a developer builds it."
      },
      related: [745, 751, 797]
    },
    {
      n: 753,
      title: "Reduced-motion alternatives",
      aka: ["prefers-reduced-motion"],
      oneLine: "Honour the operating system setting by replacing motion with something quieter, not by breaking the interface.",
      demo: {
        caption: "Same message, same moment. The reduced version changes only in opacity, so the state still announces itself without travelling.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Default: it travels</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight db-row--nowrap db-anim db-anim--slide db-anim--ease\"><span class=\"db-dot db-dot--accent\"></span><span class=\"db-note\">saved</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Reduced: it changes in place</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight db-row--nowrap db-anim db-anim--fade db-anim--ease\"><span class=\"db-dot db-dot--accent\"></span><span class=\"db-note\">saved</span></div></div></div></div>"
      },
      what: "The prefers-reduced-motion media feature in Media Queries Level 5 exposes the setting the person has already chosen in their operating system, with the value reduce meaning they want less motion. WCAG 2.2 Success Criterion 2.3.3, at Level AAA, requires that motion animation triggered by interaction can be disabled unless the animation is essential to the functionality or the information. Reduced does not mean removed: the state change still has to be legible, which usually means a short cross-fade or an instant switch.",
      why: "For some people the setting is the difference between using your product and closing it. It is also the cheapest accessibility win in motion design, because the person has already told the machine what they want and you only have to read the answer.",
      how: [
        "Build the reduced version at the same time as the full one, not as a later ticket.",
        "Swap movement for opacity changes rather than deleting the transition entirely.",
        "Keep essential feedback: a person with reduced motion still needs to know the button worked.",
        "If your code waits for a transition or animation to finish before doing something, check what happens when the duration drops to zero.",
        "Turn the setting on in your own operating system and use the product for a day."
      ],
      example: "Media Queries Level 5 defines prefers-reduced-motion with the values no-preference and reduce, detecting a desire for less motion on the page.",
      numbers: "",
      pitfall: "Wiping out all transitions with a blanket rule. Instant state changes with no cross-fade can be more disorienting than the animation was, and anything relying on a transition-end event may quietly stop working.",
      source: "W3C, Media Queries Level 5, prefers-reduced-motion; W3C, WCAG 2.2 Success Criterion 2.3.3 Animation from Interactions (Level AAA)",
      verify: {
        status: "verified",
        note: "Read the prefers-reduced-motion section of the Media Queries Level 5 specification and the normative text of SC 2.3.3 in WCAG 2.2 this session. The advice that reduced should mean quieter rather than absent is common practice rather than a requirement in either document, and I have marked it as such in the wording."
      },
      belongs: {
        verdict: "core",
        why: "It is a published preference with a published conformance criterion behind it, and honouring it is part of designing the motion rather than an afterthought."
      },
      related: [701, 733, 754]
    },
    {
      n: 754,
      title: "Vestibular safety",
      aka: ["Motion sensitivity"],
      oneLine: "Large, fast or mismatched motion can make people dizzy or sick, sometimes for hours afterwards.",
      demo: {
        caption: "Same screen twice. Left moves most of it a long way; right moves a small element a short way.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Large area, long distance</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 96\"><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"144\" height=\"64\" rx=\"2\"/><rect class=\"s-mute\" x=\"8\" y=\"10\" width=\"90\" height=\"56\" rx=\"2\" style=\"stroke-dasharray:3 3\"/><rect class=\"s-accent\" x=\"54\" y=\"10\" width=\"90\" height=\"56\" rx=\"2\"/><path class=\"s-accent\" d=\"M8 80 H54\"/><path class=\"f-accent\" d=\"M4 80 L11 76 L11 84 Z\"/><path class=\"f-accent\" d=\"M58 80 L51 76 L51 84 Z\"/><text class=\"t\" x=\"31\" y=\"94\" text-anchor=\"middle\">travel</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Small area, short distance</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 152 96\"><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"144\" height=\"64\" rx=\"2\"/><rect class=\"s-mute\" x=\"96\" y=\"42\" width=\"28\" height=\"18\" rx=\"2\" style=\"stroke-dasharray:3 3\"/><rect class=\"s-accent\" x=\"116\" y=\"42\" width=\"28\" height=\"18\" rx=\"2\"/><path class=\"s-accent\" d=\"M96 80 H116\"/><path class=\"f-accent\" d=\"M92 80 L99 76 L99 84 Z\"/><path class=\"f-accent\" d=\"M120 80 L113 76 L113 84 Z\"/><text class=\"t\" x=\"106\" y=\"94\" text-anchor=\"middle\">travel</text></svg></div></div></div>"
      },
      what: "Val Head's 2015 article sets out three things that make web animation risky: the size of the movement relative to the screen, mismatched direction and speed between what the person does and what moves, and the distance covered by an animation such as a large zoom. Apple's guidance for spatial interfaces adds peripheral motion, rotating the world around the viewer, and sustained oscillation, warning specifically against frequencies around 0.2Hz. Photosensitive seizures are a separate condition covered by WCAG 2.3.1, which allows no more than three flashes in any one second.",
      why: "The symptoms outlast the page: nausea, headache and disorientation that can persist long after the tab is closed. This is the one part of motion design where getting it wrong causes physical harm rather than irritation.",
      how: [
        "Cap the screen area and the distance covered by any motion the person did not initiate.",
        "Avoid full-screen zooms, spins and wipes; scale and fade in place instead.",
        "Keep scroll-linked layers moving with the scroll, never against it.",
        "Give a stationary frame of reference around any moving content.",
        "Ship and test the reduced-motion version as the safe default path."
      ],
      example: "On 27 September 2013 the Guardian reported iPhone and iPad owners feeling ill from the zoom and parallax animations in iOS 7. Apple then widened the Reduce Motion setting in later iOS 7 releases, so that it damped the app zoom animations and not only the parallax wallpaper effect.",
      numbers: "WCAG 2.2 SC 2.3.1: no more than three flashes in any one-second period, or flashing below the general flash and red flash thresholds. Apple's spatial guidance: avoid sustained oscillation at frequencies around 0.2Hz.",
      pitfall: "Assuming this is a fringe concern. Val Head's article cites vestibular.org figures of around 8 million American adults reporting chronic balance problems and a further 2.4 million reporting chronic dizziness.",
      source: "Val Head, Designing Safer Web Animation For Motion Sensitivity, A List Apart (8 September 2015); Apple, Human Interface Guidelines: Motion; W3C, WCAG 2.2 Success Criterion 2.3.1",
      verify: {
        status: "verified",
        note: "Read Val Head's article, Apple's Human Interface Guidelines motion page (including the visionOS section warning against sustained oscillation at frequencies around 0.2 Hz) and the WCAG 2.2 text of Success Criterion 2.3.1 in review. Val Head's three factors are confirmed as relative size of movement, mismatched direction and speed, and distance covered. Two caveats. The prevalence figures reach this entry through Val Head citing vestibular.org, and the underlying survey has not been checked. The iOS 7 date comes from the Guardian piece of 27 September 2013 that Val Head links; the Guardian blocks this fetcher, so the article itself was not read here and the date rests on her link. An earlier draft also cited a Guardian follow-up of 13 March 2014 on iOS 7.1 and a Verge piece of 25 September 2013; neither could be found, so both have been removed. The widening of Reduce Motion in iOS 7.0.3 and 7.1 is from contemporary press coverage rather than an Apple release note."
      },
      belongs: {
        verdict: "core",
        why: "It sets the outer limit on everything else in this section, and it is the only motion rule where the failure mode is somebody being unwell."
      },
      related: [702, 746, 753, 9747]
    }
  ]
};
