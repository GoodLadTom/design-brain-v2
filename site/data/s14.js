window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[14] = {
  "n": 14,
  "slug": "interaction",
  "title": "Interaction principles",
  "blurb": "The named principles behind usable interfaces: affordances, feedback, error handling and the classic heuristic checklists.",
  "intro": "Almost everything in this part traces back to four people. Don Norman gave designers the vocabulary for why things are hard to use: affordances, signifiers, mapping, feedback, conceptual models and the two gulfs between what a person wants and what a machine offers. Jakob Nielsen turned that thinking into ten heuristics you can walk an interface against in an afternoon. Ben Shneiderman wrote eight golden rules from the other direction, out of interactive systems research, and Bruce Tognazzini kept a longer practitioner's list, first written in 1978 and still being revised in 2014. The four sets overlap heavily, and this reference says so rather than pretending each item is a separate discovery.",
  "sources": [
    "James J. Gibson, The Senses Considered as Perceptual Systems (1966) and The Ecological Approach to Visual Perception (1979)",
    "Donald A. Norman, The Design of Everyday Things, revised and expanded edition (Basic Books, 2013); first published 1988 as The Psychology of Everyday Things",
    "Donald A. Norman, Signifiers, not affordances, ACM Interactions vol 15 issue 6 (2008)",
    "Edwin L. Hutchins, James D. Hollan and Donald A. Norman, Direct Manipulation Interfaces, Human-Computer Interaction vol 1 (1985)",
    "Tom Djajadiningrat, Kees Overbeeke and Stephan Wensveen, But how, Donald, tell us how? On the creation of meaning in interaction design through feedforward and inherent feedback, DIS 2002",
    "Jo Vermeulen, Kris Luyten, Elise van den Hoven and Karin Coninx, Crossing the Bridge over Norman's Gulf of Execution: Revealing Feedforward's True Identity, CHI 2013",
    "Shigeo Shingo, A Study of the Toyota Production System from an Industrial Engineering Viewpoint (Productivity Press, English edition 1989)",
    "Jakob Nielsen and Rolf Molich, Heuristic evaluation of user interfaces, CHI 1990",
    "Jakob Nielsen, Enhancing the explanatory power of usability heuristics, CHI 1994",
    "Ben Shneiderman, Catherine Plaisant, Maxine Cohen, Steven Jacobs and Niklas Elmqvist, Designing the User Interface, sixth edition (Pearson, 2016)",
    "Bruce Tognazzini, First Principles of Interaction Design, revised and expanded (asktog.com, 2014)",
    "Bruce Tognazzini, First Principles of Interaction Design (asktog.com, revised edition)",
    "Jef Raskin, The Humane Interface (Addison-Wesley, 2000)",
    "Ben Shneiderman, Direct Manipulation: A Step Beyond Programming Languages, IEEE Computer (August 1983)",
    "Ben Shneiderman, Designing the User Interface (Object-Action Interface model)",
    "Jakob Nielsen, Usability Engineering (Academic Press, 1993), chapter 5 on response times",
    "Jakob Nielsen, 10 Usability Heuristics for User Interface Design (1994, revised)",
    "R. B. Miller, Response Time in Man-Computer Conversational Transactions, AFIPS (1968)",
    "John M. Carroll, The Nurnberg Funnel: Designing Minimalist Instruction (MIT Press, 1990)",
    "Alan Cooper, The Myth of Metaphor, Visual Basic Programmer's Journal (June 1995), later carried into About Face",
    "Aza Raskin, Never Use a Warning When you Mean Undo, A List Apart (July 2007)",
    "W3C, Web Content Accessibility Guidelines 2.2 (SC 2.4.3, 1.4.13, 2.5.5, 2.5.8)",
    "W3C, CSS Media Queries Level 4 (hover, any-hover, pointer)",
    "Apple, Human Interface Guidelines (Buttons, Accessibility)",
    "Google, Material Design accessibility guidance on touch targets"
  ],
  "entries": [
    {
      "n": 536,
      "title": "Affordance",
      "aka": [
        "Perceived affordance",
        "Action possibility"
      ],
      "oneLine": "A relationship between an object's properties and a person's abilities that determines how it could be used.",
      "demo": {
        "caption": "Identical row, identical markup. Deleting is a possible action for a pointer and not one for a finger.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Mouse: hover exists</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span>Invoice 0142</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Delete</span></div></div><span class=\"db-note\">Revealed on hover</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Touch: no hover exists</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span>Invoice 0142</span></div></div><span class=\"db-note\">Nothing to reveal it</span></div></div></div></div>"
      },
      "what": "The perceptual psychologist James J. Gibson coined the word in 1966 for what the environment offers an animal, whether or not the animal notices. Norman brought it into design in 1988 and the term promptly drifted. In the 2013 revision of his book he pinned it down again: an affordance is a relationship, not a property. A chair affords sitting for most people and affords lifting only for someone strong enough to lift it. Glass affords seeing through and blocks passage, which is why birds fly into windows.",
      "why": "Thinking relationally stops you designing for an imaginary average user. The same control affords different things to someone with full grip strength and someone without, and to someone who has met the pattern before and someone who has not.",
      "how": [
        "Ask what the thing technically allows, then ask which of those actions your actual users are capable of and aware of.",
        "Separate what is possible from what is signalled. An action that is possible but invisible is a signifier problem (537).",
        "Watch for anti-affordances, things that block an action, such as a disabled button. Those need signalling too.",
        "Stop saying a button affords clicking when you mean it looks clickable. That is a perceived affordance acting as a signifier."
      ],
      "example": "Norman's own case is the flat glass door with no hardware. It affords pushing and pulling equally well, gives no clue which the hinges allow, and ends up with a sign taped on.",
      "numbers": "",
      "pitfall": "Designers use affordance as a synonym for visual hint, which collapses the useful distinction between what is possible and what is communicated. Norman spent two decades trying to unpick that and eventually told designers to talk about signifiers instead.",
      "source": "James J. Gibson (1966, 1979); Donald A. Norman, The Design of Everyday Things (1988, revised 2013)",
      "verify": {
        "status": "disputed",
        "note": "Origin is not in doubt: Gibson coined it, Norman imported it. What is contested is the meaning. I read Norman's 2013 text directly, which states that affordance is a relationship rather than a property, and his 2008 ACM Interactions column, where he calls the term's use a source of confusion and tells designers to forget affordances and provide signifiers. The everyday design usage differs from both Gibson and Norman."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the base concept the rest of this section is built on, and the word appears in every interaction brief you will ever read."
      },
      "related": [
        537,
        538,
        541,
        543
      ]
    },
    {
      "n": 537,
      "title": "Signifier",
      "aka": [
        "Perceptible cue",
        "Social signifier"
      ],
      "oneLine": "Any perceivable mark or signal that tells a person what action is possible and where to do it.",
      "demo": {
        "caption": "Same sentence, same link underneath. Only the right one carries a mark saying where to click.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Nothing marks the target</span><div class=\"db-stage db-stage--tight\"><p class=\"db-type\">Read the full report before Friday and send your comments to the team.</p></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">The target is marked</span><div class=\"db-stage db-stage--tight\"><p class=\"db-type\">Read the <span style=\"color:var(--accent);text-decoration:underline\">full report</span> before Friday and send your comments to the team.</p></div></div></div>"
      },
      "what": "Norman introduced signifiers in a 2008 column for ACM Interactions and made them central to the 2013 revision of his book. His definition is broad: any mark or sound, any perceivable indicator that communicates appropriate behaviour. Signifiers can be deliberate, like the word PUSH on a door plate, or accidental, like the worn path across a lawn or an empty railway platform telling you the train has gone. Affordances determine what actions are possible; signifiers communicate where the action should take place.",
      "why": "Signifiers are the part of the pair you can actually control. Most on-screen usability failures are missing or misleading signals rather than missing capability. Getting them right is cheap and the payoff is immediate.",
      "how": [
        "For every action you expect a person to take, name the specific thing on screen that tells them it is available.",
        "Prefer a signifier built into the object over a label bolted on afterwards. A handwritten sign on a door is proof the door failed.",
        "Treat accidental signifiers as free information: timestamps, a scrollbar's length, the number of items already in a list.",
        "Check the signifier survives every state people meet it in, including hover-free touch screens and reduced-motion settings."
      ],
      "example": "The word PUSH silkscreened on a door plate, which is Norman's own illustration. On screen, the equivalent is a scrollbar thumb whose length tells you how much page is left.",
      "numbers": "",
      "pitfall": "Flat interfaces strip the signifiers out along with the ornament, leaving text that may or may not be a link and rectangles that may or may not be buttons. A misleading signifier is worse than none, because people act on it confidently.",
      "source": "Donald A. Norman, Signifiers, not affordances, ACM Interactions 15(6) (2008); The Design of Everyday Things, revised edition (2013)",
      "verify": {
        "status": "verified",
        "note": "Read the full text of Norman's 2008 Interactions column on jnd.org, which carries the note that it was published in Interactions volume 15 issue 6, and cross-checked the signifier passages in the 2013 book text."
      },
      "belongs": {
        "verdict": "core",
        "why": "This is the single most directly actionable idea in Norman's vocabulary and the one designers control most completely."
      },
      "related": [
        536,
        539,
        543,
        591
      ]
    },
    {
      "n": 538,
      "title": "Natural mapping",
      "aka": [
        "Spatial correspondence",
        "Good mapping"
      ],
      "oneLine": "Arranging controls so their layout matches the layout of the things they control.",
      "demo": {
        "caption": "Same four burners. Knobs in a row have to be guessed; knobs in the same square do not.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Controls in a tidy row</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 156\"><rect class=\"s-mute\" x=\"26\" y=\"8\" width=\"148\" height=\"76\"/><circle class=\"s\" cx=\"66\" cy=\"32\" r=\"12\"/><circle class=\"s\" cx=\"134\" cy=\"32\" r=\"12\"/><circle class=\"s\" cx=\"66\" cy=\"62\" r=\"12\"/><circle class=\"s\" cx=\"134\" cy=\"62\" r=\"12\"/><circle class=\"s\" cx=\"44\" cy=\"114\" r=\"8\"/><circle class=\"s\" cx=\"78\" cy=\"114\" r=\"8\"/><circle class=\"s\" cx=\"122\" cy=\"114\" r=\"8\"/><circle class=\"s\" cx=\"156\" cy=\"114\" r=\"8\"/><text class=\"t\" x=\"41\" y=\"100\">?</text><text class=\"t\" x=\"75\" y=\"100\">?</text><text class=\"t\" x=\"119\" y=\"100\">?</text><text class=\"t\" x=\"153\" y=\"100\">?</text><text class=\"t\" x=\"26\" y=\"148\">a row of four</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Controls in the same pattern</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 156\"><rect class=\"s-mute\" x=\"26\" y=\"8\" width=\"148\" height=\"76\"/><circle class=\"s\" cx=\"66\" cy=\"32\" r=\"12\"/><circle class=\"s\" cx=\"134\" cy=\"32\" r=\"12\"/><circle class=\"s\" cx=\"66\" cy=\"62\" r=\"12\"/><circle class=\"s\" cx=\"134\" cy=\"62\" r=\"12\"/><circle class=\"s-accent\" cx=\"66\" cy=\"102\" r=\"8\"/><circle class=\"s-accent\" cx=\"134\" cy=\"102\" r=\"8\"/><circle class=\"s-accent\" cx=\"66\" cy=\"128\" r=\"8\"/><circle class=\"s-accent\" cx=\"134\" cy=\"128\" r=\"8\"/><text class=\"t\" x=\"26\" y=\"148\">the same square</text></svg></div></div></div>"
      },
      "what": "Norman defines natural mapping as taking advantage of spatial analogies so the relationship between a control and its result is understood immediately. To move something up, move the control up. To work out which switch runs which light, arrange the switches in the same pattern as the lights. Some mappings come from the body and appear almost everywhere, such as up meaning more. Others are learned and vary by culture, which is why Norman warns that a mapping which feels natural to you may not be natural to someone else.",
      "why": "A good mapping removes the labelling problem entirely. Nobody has to read anything, remember anything or work anything out, because the arrangement carries the information.",
      "how": [
        "Lay controls out in the same spatial pattern as what they affect, not in a tidy row that ignores the real geometry.",
        "Put the control next to the thing it controls wherever the physical or screen layout allows.",
        "Use vertical position for amount and intensity, since up meaning more is close to universal.",
        "Test any mapping you think is obvious with someone from a different background before you rely on it."
      ],
      "example": "The car seat adjustment control shaped like the seat itself, which Norman prints as his model of a good mapping. Lift the front of the button and the front of the seat rises.",
      "numbers": "",
      "pitfall": "Four hob controls in a straight line above a square arrangement of four burners. Every person who cooks on it makes the same guess and is wrong half the time, forever.",
      "source": "Donald A. Norman, The Design of Everyday Things (1988, revised 2013), chapters 1 and 3",
      "verify": {
        "status": "verified",
        "note": "Read Norman's natural mapping passage and the seat control figure caption in the 2013 book text. Nielsen Norman Group's own heuristic page also links heuristic 2 to natural mapping."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a layout decision with a usability consequence, which puts it squarely in a designer's hands."
      },
      "related": [
        536,
        552,
        541,
        589
      ]
    },
    {
      "n": 539,
      "title": "Feedback",
      "aka": [
        "Response",
        "System response"
      ],
      "oneLine": "Telling the person what just happened, immediately, and in a form they can interpret.",
      "demo": {
        "caption": "The same payment. With nothing said on the first press, the button gets pressed again, and charged again.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No acknowledgement</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-btn\">Pay £40.00</span></div><span class=\"db-note\">Pressed three times</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>£40.00 charged</span><span>£40.00 charged</span><span>£40.00 charged</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Acknowledged on press</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-btn db-btn--ghost\">Paying, please wait</span></div><span class=\"db-note\">Pressed once</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>£40.00 charged</span></div></div></div></div></div></div>"
      },
      "what": "Norman takes the term from control and information theory and applies it to everyday objects. Feedback communicates the results of an action. He sets two requirements: it must be immediate, and it must be informative. A light or a beep that only says something happened, without saying what happened or what to do next, is poor feedback, and he argues poor feedback can be worse than none because it distracts and irritates. He is equally firm about the other failure mode, which is too much of it. Machines that announce everything get their announcements switched off, and the important ones go with them.",
      "why": "Without a response people repeat the action, assume it failed, or lose trust in the whole thing. Feedback is how someone closes the loop between what they meant and what the system did.",
      "how": [
        "Acknowledge every action a person takes, and scale the acknowledgement to how significant and how rare that action is.",
        "Say what happened, not just that something happened. A tick that appears silently beats a beep that could mean anything.",
        "Budget your interruptions. If everything alerts, nothing does.",
        "Where the real work takes time, show progress rather than a single event at the end (592, 595)."
      ],
      "example": "A UK pelican crossing button that lights the WAIT panel the instant you press it. The lights have not changed yet, but the system has said it heard you.",
      "numbers": "Norman states in the 2013 edition that feedback must be immediate and that even a delay of a tenth of a second can be disconcerting.",
      "pitfall": "Teams add feedback for the happy path and forget the failure path, so a successful save is celebrated and a failed one is silent. The silence reads as success.",
      "source": "Donald A. Norman, The Design of Everyday Things (1988, revised 2013), chapter 1",
      "verify": {
        "status": "verified",
        "note": "Read Norman's feedback section in the 2013 book text, including the tenth-of-a-second line and his backseat driver passage on excessive feedback."
      },
      "belongs": {
        "verdict": "core",
        "why": "One of the four design principles Norman names outright, and the one most often missing when an interface feels broken."
      },
      "related": [
        540,
        551,
        563,
        592
      ]
    },
    {
      "n": 540,
      "title": "Feedforward",
      "aka": [
        "Pre-action information"
      ],
      "oneLine": "Telling the person what will happen if they take an action, before they take it.",
      "demo": {
        "caption": "Both buttons run the same code. Only the right one states the outcome before anyone commits to it.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Names the mechanism</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-btn\">Submit</span></div><span class=\"db-note\">Submit what, and to whom</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Names the outcome</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-btn\">Email invoice to Acme Ltd</span></div><span class=\"db-note\">£1,240.00 payable in 30 days</span></div></div></div></div>"
      },
      "what": "Feedback comes after the action. Feedforward comes before it, and tells you what the result of that action will be. Djajadiningrat, Overbeeke and Wensveen defined it for interaction design in 2002, in a conference paper pointedly titled But how, Donald, tell us how? Vermeulen and colleagues sharpened it in 2013, placing feedforward as the thing that bridges the gulf of execution while feedback bridges the gulf of evaluation. Their distinction from a perceived affordance matters: an affordance says you can press this, feedforward says what pressing it will do.",
      "why": "People hesitate when they cannot predict a consequence, and they hesitate hardest over actions that look irreversible. Feedforward converts a gamble into a decision.",
      "how": [
        "Label actions with their outcome rather than their mechanism. Send invoice beats Submit.",
        "Show the effect during the gesture where you can, using drag previews, live counts and inline totals.",
        "State the consequence next to the control for anything destructive or costly, not in a dialogue after the click.",
        "Distinguish this from an affordance. Making a control look pressable is not the same as saying what it does."
      ],
      "example": "The iPhone slide-to-unlock control is the worked example in the Vermeulen paper: the slide to unlock label, the slider and its button with an arrow icon together say both what to do and what will happen.",
      "numbers": "",
      "pitfall": "Feedforward gets confused with feedback in team conversation, and people call a hover state feedforward when it only signals availability. Ask whether the cue names an outcome. If it does not, it is a signifier.",
      "source": "Djajadiningrat, Overbeeke and Wensveen, DIS 2002; Vermeulen, Luyten, van den Hoven and Coninx, CHI 2013",
      "verify": {
        "status": "verified",
        "note": "Both papers confirmed. Djajadiningrat, Overbeeke and Wensveen, But how, Donald, tell us how?, DIS 2002, pages 285 to 291. Vermeulen, Luyten, van den Hoven and Coninx, CHI 2013, pages 1931 to 1940, read in full from the authors' copy at jovermeulen.com: it argues feedforward bridges the Gulf of Execution, cites the 2002 definition at page 285, and its Figure 2 is the iPhone lock screen, captioned as the slide to unlock label, the slider and its button with an arrow icon. Corrected this pass: the earlier note said the CHI paper could not be opened, while describing its contents in the same sentence."
      },
      "belongs": {
        "verdict": "core",
        "why": "It names a distinct job that feedback and affordance do not cover, and it changes how you write button labels."
      },
      "related": [
        539,
        544,
        585,
        597
      ]
    },
    {
      "n": 541,
      "title": "Constraints (physical, cultural, semantic, logical)",
      "aka": [
        "Design constraints"
      ],
      "oneLine": "Four kinds of restriction that cut the number of possible actions down to the sensible ones.",
      "demo": {
        "caption": "Four ways the wrong action is ruled out: a shape that fits once, a learned colour, a purpose, a spare part.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 520 132\"><path class=\"s-mute\" stroke-dasharray=\"3 4\" d=\"M130 10 V110 M260 10 V110 M390 10 V110\"/><path class=\"s-mute\" d=\"M24 14 H58 V32 H96 V52 H24 Z\"/><path class=\"f-mute\" d=\"M24 66 H58 V84 H96 V104 H24 Z\"/><path class=\"s-accent\" d=\"M58 14 V32 H96 M58 66 V84 H96\"/><path class=\"s-mute\" d=\"M40 64 V58 M36 62 L40 56 L44 62\"/><rect class=\"s-mute\" x=\"150\" y=\"16\" width=\"36\" height=\"72\"/><circle class=\"f\" cx=\"168\" cy=\"36\" r=\"12\" style=\"fill:#c0392b\"/><circle class=\"f\" cx=\"168\" cy=\"68\" r=\"12\" style=\"fill:#2f9e56\"/><path class=\"s-mute\" d=\"M196 36 H224\"/><path class=\"s\" d=\"M230 26 V46\"/><path class=\"s-mute\" d=\"M196 68 H228 M222 62 L230 68 L222 74\"/><rect class=\"s\" x=\"288\" y=\"26\" width=\"76\" height=\"58\"/><path class=\"s-mute\" d=\"M288 66 H364\"/><circle class=\"f-mute\" cx=\"316\" cy=\"44\" r=\"9\"/><path class=\"s-accent\" d=\"M326 26 V15\"/><circle class=\"f-accent\" cx=\"326\" cy=\"12\" r=\"3\"/><circle class=\"s-mute\" cx=\"416\" cy=\"34\" r=\"12\"/><circle class=\"s-mute\" cx=\"452\" cy=\"34\" r=\"12\"/><circle class=\"s-mute\" cx=\"488\" cy=\"34\" r=\"12\"/><circle class=\"f\" cx=\"416\" cy=\"34\" r=\"7\"/><circle class=\"f\" cx=\"452\" cy=\"34\" r=\"7\"/><circle class=\"f\" cx=\"440\" cy=\"86\" r=\"7\"/><path class=\"s-accent\" d=\"M450 80 L478 50 M478 50 L468 52 M478 50 L477 60\"/><text class=\"t\" x=\"28\" y=\"124\">physical</text><text class=\"t\" x=\"150\" y=\"124\">cultural</text><text class=\"t\" x=\"288\" y=\"124\">semantic</text><text class=\"t\" x=\"404\" y=\"124\">logical</text></svg></div>"
      },
      "what": "Norman sorts constraints into four types. Physical constraints are shapes and sizes that stop the wrong assembly. Cultural constraints are learned conventions, such as red meaning stop. Semantic constraints come from knowing what a thing is for, so a motorcycle windscreen goes in front of the rider. Logical constraints work by elimination, as when one part is left over and one hole is empty, so they must go together. He notes that natural mappings work by providing logical constraints, and that conventions are a form of cultural constraint.",
      "why": "Constraints do the work that instructions otherwise have to do. They reduce the search space before the person starts guessing, which cuts both errors and reading.",
      "how": [
        "Reach for physical or logical constraints first. They hold even when the person has never seen your product.",
        "Use cultural constraints knowingly, and check that the convention holds in every market you ship to.",
        "In software, the equivalents are disabled states, input masks, date pickers and typed fields that will not accept the wrong shape of data.",
        "Where a constraint blocks something, say why. A greyed-out control with no explanation just looks broken."
      ],
      "example": "Norman builds the chapter around a Lego motorcycle kit. Cultural constraints fix where the red, blue and yellow lights go, semantic constraints put the windscreen in front of the rider, and the physical shapes prevent most wrong assemblies.",
      "numbers": "",
      "pitfall": "Constraints get applied so hard that legitimate cases are locked out, which is where people learn to defeat them. A name field that rejects apostrophes is a constraint that has stopped serving anyone.",
      "source": "Donald A. Norman, The Design of Everyday Things (1988, revised 2013), chapter 4",
      "verify": {
        "status": "verified",
        "note": "Read the constraints sections of chapter 4 in the 2013 book text, including the four named headings and the Lego motorcycle example."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the main tool for error prevention and it applies to physical products and screens alike."
      },
      "related": [
        548,
        550,
        555,
        596
      ]
    },
    {
      "n": 542,
      "title": "Conceptual model",
      "aka": [
        "Design model",
        "Designer's model"
      ],
      "oneLine": "A simplified explanation of how something works that the person builds and then reasons from.",
      "demo": {
        "caption": "Two models of one dial. Only the throttle model predicts that turning it up warms the room sooner.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 156\"><path class=\"s-mute\" d=\"M38 14 V126 H308\"/><path class=\"s-mute\" stroke-dasharray=\"4 3\" d=\"M38 126 L112 44 H196\"/><path class=\"s\" d=\"M38 126 L154 76 H308\"/><path class=\"s-accent\" d=\"M38 126 L228 44 H308\"/><text class=\"t\" x=\"104\" y=\"36\">throttle model</text><text class=\"t\" x=\"230\" y=\"36\">actual, dial 30</text><text class=\"t\" x=\"158\" y=\"68\">actual, dial 20</text><text class=\"t\" x=\"24\" y=\"10\">warmer</text><text class=\"t\" x=\"38\" y=\"146\">time</text></svg></div>"
      },
      "what": "Norman calls a conceptual model an explanation, usually highly simplified, of how something works, and says it does not have to be complete or even accurate as long as it is useful. Files and folders on a computer are his example: there are no folders inside the machine, but the picture helps people act. He then splits the idea three ways. The designer holds one model, the user builds another, and between them sits the system image (9542), which is everything the built thing communicates. Mental model is the loose everyday term for the version in the user's head, so it is only half of what conceptual model means here.",
      "why": "When someone's model is wrong, every action they take follows sensibly from a false premise, and polish on individual screens will not fix it. Get the model right and people work out things you never explained.",
      "how": [
        "Write down the model you want people to hold, in one paragraph, before you design any screens.",
        "Make the structure visible. Names, groupings and navigation are where people read the model off.",
        "Prefer one coherent metaphor over several partly true ones, and heed Norman's warning that oversimplified models break at the edges.",
        "Test the model by asking people to predict what will happen next, not by asking whether they understood."
      ],
      "example": "The desktop file and folder metaphor, which Norman uses himself. Nothing inside the computer is a folder, and the model still lets people organise millions of files.",
      "numbers": "",
      "pitfall": "Teams describe their internal architecture on screen instead of a model that helps the user act, so people meet workspaces, entities and tenants and have to learn the org chart of the company that built the product.",
      "source": "Donald A. Norman, The Design of Everyday Things (1988, revised 2013), chapter 1",
      "verify": {
        "status": "verified",
        "note": "Read the conceptual models and system image sections of chapter 1 in the 2013 book text, including the figure caption for the designer's model, the user's model and the system image."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the layer above every screen decision, and it explains failures that per-screen fixes never touch."
      },
      "related": [
        9542,
        545,
        552,
        573
      ]
    },
    {
      "n": 543,
      "title": "Discoverability",
      "aka": [
        "Findability of actions"
      ],
      "oneLine": "Whether a person can work out what actions are possible and where to perform them.",
      "demo": {
        "none": "Norman treats discoverability as the outcome of the five concepts either side of it, so any picture here would simply rerun the signifier, mapping or constraint demo next door."
      },
      "what": "Norman names discoverability and understanding as the two most important characteristics of good design. Discoverability answers whether it is even possible to tell what actions are available. Understanding answers what it all means. His wording is that discoverability results from the appropriate application of five fundamental psychological concepts: affordances, signifiers, constraints, mappings and feedback. He then adds a sixth, which he calls perhaps the most important of all, the conceptual model of the system. Discoverability is the outcome those six produce rather than a separate technique.",
      "why": "A feature nobody can find does not exist, and a hidden feature is indistinguishable from a missing one in every support ticket you will read. Discoverability is the difference between a capability and a usable capability.",
      "how": [
        "List the actions available on a screen, then ask what visible thing signals each one. Anything with no signal is undiscoverable.",
        "Count on nobody reading a tutorial. Norman's point is that discoverability should hold on first encounter.",
        "Be honest that gestures, long presses and hover-only controls are undiscoverable by default and need an alternative route.",
        "Where a device has no room for signifiers, accept that discoverability now depends on instruction, and design that instruction properly."
      ],
      "example": "A flat glass door with no plate and no handle. Nothing on it says push or pull, so people try both.",
      "numbers": "",
      "pitfall": "Discoverability is traded away for visual calm, and the team reassures itself that power users will find the hidden control. They do. Everyone else never learns the feature exists.",
      "source": "Donald A. Norman, The Design of Everyday Things, revised edition (2013)",
      "verify": {
        "status": "verified",
        "note": "Chapter 1 of the 2013 book states that two of the most important characteristics of good design are discoverability and understanding, and that discoverability results from the appropriate application of five fundamental psychological concepts, followed by a sixth, the conceptual model of the system. The original entry listed only the five; corrected this pass. Tognazzini also carries a Discoverability principle in his 2014 list."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the standing test for whether the rest of Norman's toolkit has been applied properly."
      },
      "related": [
        536,
        537,
        544,
        580
      ]
    },
    {
      "n": 544,
      "title": "Gulf of execution",
      "aka": [
        "The doing gap"
      ],
      "oneLine": "The gap between what a person wants to achieve and working out how to make the thing do it.",
      "demo": {
        "caption": "Same six keys, same machine. On the left nothing tells you which one gets you to the goal above.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Unmarked keys</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-note\">Goal: copy one page, both sides</span><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span><span class=\"db-sq db-sq--lg\"></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Marked keys</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-note\">Goal: copy one page, both sides</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Copies</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Paper</span><span class=\"db-btn db-btn--sm\">Both sides</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Colour</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Start</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Stop</span></div></div></div></div></div>"
      },
      "what": "The term comes from Hutchins, Hollan and Norman's 1985 paper on direct manipulation interfaces and became famous through Norman's book. The gulf of execution is what people face when they try to figure out how something operates. It is bridged, in Norman's words, by signifiers, constraints, mappings and a conceptual model. Feedforward is the later addition to that list.",
      "why": "It gives you a place to put a usability problem. If people know what they want but cannot find the route, the fault is in what the interface shows, not in the person and not in the underlying function.",
      "how": [
        "In testing, separate two failure types: could not work out what to do, and could not tell whether it worked. The first is this gulf.",
        "Widen the visible route rather than adding instructions. A visible control beats a tooltip explaining a hidden one.",
        "Match the vocabulary of the controls to the vocabulary of the goal, not to the internal function names."
      ],
      "example": "The filing cabinet that opens chapter 2. Norman's landlady could not get the top drawer open and blamed herself; Norman, holding a conceptual model of an internal catch out of alignment, wiggled, twisted and finally banged it open. The handle and slider signalled the normal route clearly, and once that route failed the cabinet offered no clue what else to try.",
      "numbers": "",
      "pitfall": "Teams close the gulf by writing help text, which works for people who read help text. The gulf is still there for everyone else.",
      "source": "Hutchins, Hollan and Norman, Direct Manipulation Interfaces, Human-Computer Interaction 1 (1985); Norman, The Design of Everyday Things (1988, revised 2013)",
      "verify": {
        "status": "verified",
        "note": "Confirmed the 1985 journal paper by Hutchins, Hollan and Norman as the origin of both gulf terms, and read pages 37 to 41 of chapter 2 of the 2013 book directly. Norman's wording: the Gulf of Execution is where people try to figure out how a thing operates, and it is bridged by signifiers, constraints, mappings and a conceptual model. Corrected this pass: the earlier version of this entry said Norman could not open the filing cabinet. He could. It was his landlady who could not, and Norman opened it."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a diagnostic that changes what you fix, and it is understood by every UX researcher you will work with."
      },
      "related": [
        540,
        545,
        546,
        543
      ]
    },
    {
      "n": 545,
      "title": "Gulf of evaluation",
      "aka": [
        "The understanding gap"
      ],
      "oneLine": "How much effort it takes to read a system's state and tell whether you got what you wanted.",
      "demo": {
        "caption": "The first two panels are identical, so nothing on screen tells you whether Save worked. The third does.",
        "html": "<div class=\"db-stage\"><div class=\"db-row db-row--top\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Before</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Display name</span><span class=\"db-input\">Priya Raman</span><div class=\"db-row\"><span class=\"db-btn db-btn--sm\">Save</span></div></div></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">After, no report</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Display name</span><span class=\"db-input\">Priya Raman</span><div class=\"db-row\"><span class=\"db-btn db-btn--sm\">Save</span></div></div></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">After, reported</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Display name</span><span class=\"db-input\">Priya Raman</span><div class=\"db-row\"><span class=\"db-btn db-btn--sm\">Save</span><span class=\"db-note db-note--accent\">Saved 12:04</span></div></div></div></div></div></div>"
      },
      "what": "The companion to the gulf of execution, from the same 1985 paper. Norman defines it as the amount of effort a person must make to interpret the physical state of a device and determine how well their expectations and intentions have been met. The gulf is small when the system reports its state in a form that is easy to get, easy to interpret, and matches how the person thinks about it. He names two bridges: feedback, and a good conceptual model.",
      "why": "People abandon tasks when they cannot tell whether they worked. Closing this gulf is usually cheaper than closing the execution one, because it is mostly a matter of what you display after the fact.",
      "how": [
        "After every consequential action, show the resulting state in the user's terms, not a status code.",
        "Make state readable at a glance rather than only on request. A saved indicator beats a save confirmation you have to remember seeing.",
        "Check that the reported state matches the mental model you set. Sent, delivered and read are three different states and people care about the difference."
      ],
      "example": "The same filing cabinet. Norman notes that this gulf was easy to bridge at first: the catch was released, the handle pulled, nothing happened, and the lack of action clearly signified failure. It only opened up once he improvised, because the cabinet gave no information about whether twisting and banging were getting him closer.",
      "numbers": "",
      "pitfall": "Success is signalled by the absence of an error, so a form that silently does nothing looks identical to a form that worked.",
      "source": "Hutchins, Hollan and Norman (1985); Norman, The Design of Everyday Things (1988, revised 2013)",
      "verify": {
        "status": "verified",
        "note": "Read page 39 of the 2013 book directly. Norman's wording is that the Gulf of Evaluation reflects the amount of effort the person must make to interpret the physical state of the device and determine how well expectations and intentions have been met, and that the two bridging elements are feedback and a good conceptual model. The filing cabinet passage has been corrected this pass to match his point that the gulf was easily bridged at first."
      },
      "belongs": {
        "verdict": "core",
        "why": "Half of the standard diagnosis, and the half that fixes most silent-failure complaints."
      },
      "related": [
        544,
        539,
        551,
        595
      ]
    },
    {
      "n": 546,
      "title": "Seven stages of action",
      "aka": [
        "Action cycle"
      ],
      "oneLine": "Norman's model of an action: one goal, three stages of doing, three stages of judging.",
      "demo": {
        "caption": "One goal, three stages of doing down the left, three of judging up the right, meeting at the world.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 196\"><rect class=\"s\" x=\"130\" y=\"6\" width=\"100\" height=\"24\"/><text class=\"t\" x=\"169\" y=\"22\">goal</text><text class=\"t\" x=\"10\" y=\"124\" transform=\"rotate(-90 10 124)\">execution</text><text class=\"t\" x=\"352\" y=\"124\" transform=\"rotate(-90 352 124)\">evaluation</text><rect class=\"s\" x=\"20\" y=\"56\" width=\"110\" height=\"24\"/><text class=\"t\" x=\"30\" y=\"72\">plan</text><rect class=\"s\" x=\"20\" y=\"94\" width=\"110\" height=\"24\"/><text class=\"t\" x=\"30\" y=\"110\">specify</text><rect class=\"s\" x=\"20\" y=\"132\" width=\"110\" height=\"24\"/><text class=\"t\" x=\"30\" y=\"148\">perform</text><rect class=\"s\" x=\"230\" y=\"56\" width=\"110\" height=\"24\"/><text class=\"t\" x=\"240\" y=\"72\">compare</text><rect class=\"s\" x=\"230\" y=\"94\" width=\"110\" height=\"24\"/><text class=\"t\" x=\"240\" y=\"110\">interpret</text><rect class=\"s\" x=\"230\" y=\"132\" width=\"110\" height=\"24\"/><text class=\"t\" x=\"240\" y=\"148\">perceive</text><rect class=\"s-mute\" x=\"20\" y=\"164\" width=\"320\" height=\"24\"/><text class=\"t\" x=\"158\" y=\"180\">the world</text><path class=\"s-mute\" d=\"M130 18 H75 V52 M71 48 L75 54 L79 48\"/><path class=\"s-mute\" d=\"M75 80 V88 M71 86 L75 92 L79 86\"/><path class=\"s-mute\" d=\"M75 118 V126 M71 124 L75 130 L79 124\"/><path class=\"s-mute\" d=\"M75 156 V160 M71 158 L75 164 L79 158\"/><path class=\"s-accent\" d=\"M285 164 V158 M281 160 L285 154 L289 160\"/><path class=\"s-accent\" d=\"M285 132 V124 M281 126 L285 120 L289 126\"/><path class=\"s-accent\" d=\"M285 94 V86 M281 88 L285 82 L289 88\"/><path class=\"s-accent\" d=\"M285 56 V18 H236 M236 14 L230 18 L236 22\"/></svg></div>"
      },
      "what": "Norman splits any action into a goal plus three execution stages and three evaluation stages. The stages are goal, plan, specify, perform, perceive, interpret, compare. Deciding to turn on a lamp is the goal. Choosing between opening the curtains and reaching for the switch is the plan. Working out which hand and which switch is specify. Pressing it is perform. Then you see the light change, work out what that means, and check it against what you wanted. For skilled actions most stages happen below conscious attention; for new ones they are all deliberate.",
      "why": "It gives you seven distinct places a design can fail, instead of one vague sense that something is hard. It also maps directly onto the two gulfs, with execution on one side and evaluation on the other.",
      "how": [
        "Walk a key task through all seven stages and note which ones your interface supports with something visible.",
        "Use it in error analysis: Norman locates mistakes in the top stages, around goals and plans, and slips in the lower ones.",
        "Do not present it to stakeholders as a process diagram. It is a diagnostic lens, not a workflow."
      ],
      "example": "Norman's own: reading in an armchair as dusk falls, noticing the light is failing, and going through all seven stages to end up with a lamp switched on.",
      "numbers": "Seven stages in total: one goal, three of execution (plan, specify, perform) and three of evaluation (perceive, interpret, compare).",
      "pitfall": "The model is often drawn as a neat loop and taught as though people follow it consciously. Norman is explicit that for practised actions most of the stages are subconscious.",
      "source": "Donald A. Norman, The Design of Everyday Things (1988, revised 2013), chapter 2",
      "verify": {
        "status": "verified",
        "note": "Read the Seven Stages of Action section and the figure caption in the 2013 book text, which lists the stages in exactly this order and wording."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the frame the gulfs and the error taxonomy both hang off, and it is standard vocabulary in HCI teaching."
      },
      "related": [
        544,
        545,
        549,
        547
      ]
    },
    {
      "n": 547,
      "title": "Knowledge in the head versus in the world",
      "aka": [
        "Internal and external knowledge"
      ],
      "oneLine": "People combine what they remember with what the environment shows them, and designers control the second half.",
      "demo": {
        "caption": "The same five operations. The prompt keeps them in your memory; the menu puts them on the screen.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">In the head: fast once known</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-ui\"><span class=\"db-input\">$</span></div><span class=\"db-note\">Every option recalled and typed</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">In the world: needs nothing</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>Move to folder</span><span>Copy</span><span>Rename</span><span>Archive</span><span>Delete</span></div></div><span class=\"db-note\">Every option on show</span></div></div></div></div>"
      },
      "what": "Norman's chapter 3 argument is that behaviour is guided by a combination of internal knowledge and external cues, and that people deliberately arrange the world so they need less in memory. Precision is rarely required. Performance is fine as long as the combined knowledge is enough to tell the right choice from the wrong ones. Physical constraints are knowledge in the world; learned conventions are knowledge in the head. The designer's job is to put enough into the world that someone with no prior knowledge still performs well.",
      "why": "It reframes memory problems as display problems. Every time you show something instead of expecting it to be remembered, you widen the group of people who can use the thing.",
      "how": [
        "Find every point where the task requires holding a value from one screen to use on another, and show it in both places.",
        "Keep the powerful memory-based route available as well. Norman's point is that the combination performs best, not that knowledge in the head is bad.",
        "Treat what people can look up, copy or infer from context as part of your design surface, including confirmation emails and printed receipts."
      ],
      "example": "A menu-driven app and a command line do the same work. The menu puts the options in the world; the command line requires the syntax in the head, and repays experts with speed.",
      "numbers": "",
      "pitfall": "Pushing everything into the world produces cluttered screens that slow experts down. Norman's balance point is often missed in one direction or the other.",
      "source": "Donald A. Norman, The Design of Everyday Things (1988, revised 2013), chapter 3",
      "verify": {
        "status": "verified",
        "note": "Read the opening argument of chapter 3 in the 2013 book text, including the four numbered points about precision, natural constraints and cultural constraints, and the passage on designers putting cues into the design."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the reasoning behind recognition over recall, visible state and sensible defaults, and it applies to every interface."
      },
      "related": [
        556,
        567,
        541,
        575
      ]
    },
    {
      "n": 548,
      "title": "Forcing functions (interlock, lock-in, lockout)",
      "aka": [
        "Hard constraints"
      ],
      "oneLine": "Physical constraints strong enough that failing one step makes the next step impossible.",
      "demo": {
        "caption": "The door itself breaks the circuit. With it open, no sequence of presses can start the magnetron.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Door open</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 132\"><rect class=\"s-mute\" x=\"10\" y=\"12\" width=\"86\" height=\"60\"/><path class=\"s\" d=\"M97 72 L143 33 M101 76 L147 37\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M97 74 V92\"/><circle class=\"s\" cx=\"18\" cy=\"98\" r=\"8\"/><path class=\"s\" d=\"M26 98 H62\"/><circle class=\"f\" cx=\"62\" cy=\"98\" r=\"2.5\"/><circle class=\"f\" cx=\"92\" cy=\"98\" r=\"2.5\"/><path class=\"s\" d=\"M62 98 L86 84\"/><path class=\"s-mute\" d=\"M92 98 H120\"/><rect class=\"s-mute\" x=\"120\" y=\"86\" width=\"76\" height=\"24\"/><text class=\"t\" x=\"126\" y=\"102\">magnetron</text><text class=\"t\" x=\"10\" y=\"126\">circuit broken at the door</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Door closed</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 132\"><rect class=\"s-mute\" x=\"10\" y=\"12\" width=\"86\" height=\"60\"/><rect class=\"s\" x=\"94\" y=\"12\" width=\"6\" height=\"60\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M97 74 V92\"/><circle class=\"s\" cx=\"18\" cy=\"98\" r=\"8\"/><path class=\"s-accent\" d=\"M26 98 H62\"/><circle class=\"f\" cx=\"62\" cy=\"98\" r=\"2.5\"/><circle class=\"f\" cx=\"92\" cy=\"98\" r=\"2.5\"/><path class=\"s-accent\" d=\"M62 98 H92 H120\"/><rect class=\"s\" x=\"120\" y=\"86\" width=\"76\" height=\"24\"/><text class=\"t\" x=\"126\" y=\"102\">magnetron</text><text class=\"t\" x=\"10\" y=\"126\">circuit made, power reaches it</text></svg></div></div></div>"
      },
      "what": "Norman treats forcing functions as the extreme end of physical constraint: situations where failure at one stage prevents the next from happening. He borrows three named methods from safety engineering. An interlock forces operations to happen in the right sequence. A lock-in keeps an operation active so it cannot be stopped prematurely. A lockout prevents access to somewhere dangerous. He notes that some companies use commercial lock-in for their own purposes, which is a different and less admirable use of the same mechanic.",
      "why": "For a small number of genuinely serious errors, prevention beats recovery. A forcing function converts a possible catastrophe into an impossible one.",
      "how": [
        "Reserve forcing functions for irreversible or dangerous outcomes. Everywhere else, prefer undo (584).",
        "Interlock when order matters, for example by disabling submit until the required prior step is complete.",
        "Lock in when abandoning halfway causes loss. Norman's own software example is the prompt a word processor gives when you close a document with unsaved changes.",
        "Lock out only when the harm is real. Every lockout will be worked around by someone who needed through."
      ],
      "example": "A microwave oven interlock that cuts the high voltage before the door can open. Norman's other case is the dead man's switch on a train, which he notes the British call the driver's safety device, and which requires the driver to hold a spring-loaded control for the train to run.",
      "numbers": "",
      "pitfall": "Forcing functions get bypassed when they block real work, which is why operators have been known to wedge dead man's switches down. If people are defeating your interlock, the interlock is misplaced.",
      "source": "Donald A. Norman, The Design of Everyday Things (1988, revised 2013), chapter 4",
      "verify": {
        "status": "verified",
        "note": "Chapter 4 of the 2013 book confirmed for all three named types: interlock illustrated by the microwave door, lock-in by the save prompt when closing an unsaved document (Figure 4.6), lockout by the fire gate on stairways down to a basement (Figure 4.7). The driver's safety device line is Norman's own, at pages 142 to 143, where he lists trains, lawn mowers, chainsaws and recreational vehicles together. Corrected this pass: a previous note claimed two details were absent from the book. Both are in it. Norman writes that lock-ins are so effective that he uses them deliberately as his standard way of exiting a program, and chainsaws appear in his own dead man's switch list."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the strongest error-prevention tool available and it comes with a clear rule about when not to use it."
      },
      "related": [
        541,
        550,
        555,
        585
      ]
    },
    {
      "n": 549,
      "title": "Slips versus mistakes",
      "aka": [
        "Error taxonomy",
        "Execution errors and planning errors"
      ],
      "oneLine": "A slip is the right goal done wrong; a mistake is the wrong goal done correctly.",
      "demo": {
        "caption": "Left, two identical controls four pixels apart. Right, every field filled in correctly, in the wrong unit.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Slip: right goal, wrong action</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-btn db-btn--ghost\">Archive</span><span class=\"db-btn db-btn--ghost\">Delete</span></div><span class=\"db-note\">Same size, same weight, 4px apart</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Mistake: wrong goal, right actions</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Fuel to load</span><span class=\"db-input\">22 300</span><span class=\"db-label\">Unit</span><span class=\"db-input\">pounds</span></div></div><span class=\"db-note\">Aircraft is fuelled in kilograms</span></div></div></div></div>"
      },
      "what": "Norman writes that he and the British psychologist James Reason developed this classification of human error together. A slip happens when a person intends one action and performs another, so the execution is flawed but the goal was sound. A mistake happens when the goal or plan itself is wrong, and the actions faithfully carry out that wrong plan. Slips divide into action-based slips and memory lapses; mistakes into rule-based, knowledge-based and memory-lapse types.",
      "why": "The two need opposite fixes. Slips are cured by constraints, better mapping and undo. Mistakes are cured by fixing the conceptual model and the information you give before the decision. The wrong remedy wastes the work.",
      "how": [
        "Classify every error you see in testing before you design a fix. Ask whether the person wanted the right thing.",
        "For slips, add constraints, increase target separation and make undo cheap.",
        "For mistakes, change what the interface teaches: better labels, clearer state, better feedforward.",
        "Expect slips from experts. Norman notes they increase with skill, because skilled action runs on subconscious control."
      ],
      "example": "Norman's own action-based slip is pouring milk into his coffee and then putting the cup in the fridge. His knowledge-based mistake is the Gimli Glider, where the fuel load was computed in pounds instead of kilograms.",
      "numbers": "",
      "pitfall": "Everything gets labelled user error and answered with a confirmation dialogue. Confirmations do very little against slips, because a slip is exactly the kind of inattentive action that clicks through a dialogue.",
      "source": "Donald A. Norman, The Design of Everyday Things (1988, revised 2013), chapter 5; classification developed with James Reason",
      "verify": {
        "status": "verified",
        "note": "Norman's own sentence in the 2013 book is that many years ago the British psychologist James Reason and I developed a classification of this sort. Confirmed alongside the two slip classes, the three mistake classes, the action-based slip of pouring milk into the coffee and putting the cup in the fridge, and the Gimli Glider as his knowledge-based mistake, where the weight of fuel was computed in pounds instead of kilograms."
      },
      "belongs": {
        "verdict": "core",
        "why": "It comes from psychology but Norman built it into design practice himself, and it directly determines which fix you apply."
      },
      "related": [
        546,
        555,
        550,
        559
      ]
    },
    {
      "n": 550,
      "title": "Poka-yoke (error-proofing)",
      "aka": [
        "Mistake-proofing",
        "Baka-yoke"
      ],
      "oneLine": "Shop-floor error-proofing: shape the process so the wrong action cannot be completed unnoticed.",
      "demo": {
        "caption": "Two springs taken from a dish, not a bin. The empty well shows the missing one before the case closes.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Springs taken from a bin</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 120\"><path class=\"s-mute\" d=\"M14 34 H72 V84 H14 Z\"/><circle class=\"f-mute\" cx=\"26\" cy=\"75\" r=\"4\"/><circle class=\"f-mute\" cx=\"38\" cy=\"75\" r=\"4\"/><circle class=\"f-mute\" cx=\"50\" cy=\"75\" r=\"4\"/><circle class=\"f-mute\" cx=\"62\" cy=\"75\" r=\"4\"/><circle class=\"f-mute\" cx=\"32\" cy=\"65\" r=\"4\"/><circle class=\"f-mute\" cx=\"44\" cy=\"65\" r=\"4\"/><circle class=\"f-mute\" cx=\"56\" cy=\"65\" r=\"4\"/><path class=\"s-mute\" d=\"M80 60 H104 M98 55 L104 60 L98 65\"/><rect class=\"s\" x=\"112\" y=\"38\" width=\"80\" height=\"46\"/><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"122\" y=\"48\" width=\"60\" height=\"26\"/><text class=\"t\" x=\"148\" y=\"66\">?</text><text class=\"t\" x=\"14\" y=\"108\">a miss is sealed inside</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Springs counted into a dish</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 120\"><path class=\"s\" d=\"M14 44 H124 V84 H14 Z\"/><circle class=\"s-mute\" cx=\"46\" cy=\"64\" r=\"15\"/><circle class=\"f\" cx=\"46\" cy=\"64\" r=\"6\"/><circle class=\"s-accent\" cx=\"92\" cy=\"64\" r=\"15\"/><path class=\"s-mute\" d=\"M132 64 H156 M150 59 L156 64 L150 69\"/><rect class=\"s\" x=\"164\" y=\"46\" width=\"36\" height=\"36\"/><text class=\"t\" x=\"14\" y=\"108\">the empty well is seen first</text></svg></div></div></div>"
      },
      "what": "Shigeo Shingo, the industrial engineer who documented the Toyota Production System, built his first device of this kind in 1961 at Yamada Electric. He called it baka-yoke, fool-proofing, and renamed it poka-yoke, mistake-proofing, in 1963 after a worker at Arakawa Body objected to being called a fool. His method is to change the process rather than exhort people to be careful. Shingo distinguished control devices, which stop the process when something is wrong, from warning devices, which alert the operator, and described contact, fixed-value and motion-step ways of detecting a fault.",
      "why": "For designers it supplies the same conclusion Norman reaches from psychology, arrived at from manufacturing: if a step can be got wrong, redesign the step. It also gives you the control-versus-warning choice, which is the difference between blocking an action and flagging it.",
      "how": [
        "Find the step people get wrong most often and change its shape, not its instructions.",
        "Choose deliberately between a control that blocks and a warning that alerts. Blocking is for harm, warning is for everything else.",
        "The fixed-value idea maps neatly to interfaces: if three items are required, show three slots, not a free-text box.",
        "Order-dependent steps map to Shingo's motion-step method, which is what a stepped wizard is doing."
      ],
      "example": "The 1961 Yamada Electric case. Workers assembling a switch sometimes left out one of two springs. Shingo split the job so the springs were placed in a small dish first, which made a missing spring visible before the switch was assembled.",
      "numbers": "",
      "pitfall": "Imported into software as a pile of validation warnings, which is the weakest form. Shingo's stronger move is to make the error impossible, not to detect it after the fact.",
      "source": "Shigeo Shingo, first poka-yoke device 1961; A Study of the Toyota Production System from an Industrial Engineering Viewpoint (Productivity Press, English edition 1989)",
      "verify": {
        "status": "adjusted",
        "note": "The 1961 Yamada Electric spring-and-dish device, the 1963 renaming after a worker at Arakawa Body objected to baka-yoke, the control versus warning split and the contact, fixed-value and motion-step methods are all consistent across the standard secondary accounts. Adjusted this pass: the entry previously said Shingo developed poka-yoke inside Toyota's production system. He was the engineer who documented that system, but the first device was built at Yamada Electric, not Toyota. Status is adjusted rather than verified because I have not read Shingo's own book."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "It is quality engineering rather than design, but the specific design use is clear: it supplies the control-versus-warning decision and the discipline of changing the step instead of warning the person."
      },
      "related": [
        548,
        541,
        555,
        596
      ]
    },
    {
      "n": 551,
      "title": "Visibility of system status",
      "aka": [
        "Nielsen heuristic 1"
      ],
      "oneLine": "Keep people informed about what is going on, through appropriate feedback within a reasonable time.",
      "demo": {
        "caption": "The same plan of the same centre. Without the marker you cannot work out which way to walk.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">State not shown</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 130\"><rect class=\"s-mute\" x=\"8\" y=\"8\" width=\"194\" height=\"114\"/><rect class=\"s-mute\" x=\"16\" y=\"14\" width=\"38\" height=\"42\"/><rect class=\"s-mute\" x=\"60\" y=\"14\" width=\"38\" height=\"42\"/><rect class=\"s-mute\" x=\"104\" y=\"14\" width=\"38\" height=\"42\"/><rect class=\"s-mute\" x=\"148\" y=\"14\" width=\"38\" height=\"42\"/><rect class=\"s-mute\" x=\"16\" y=\"76\" width=\"38\" height=\"42\"/><rect class=\"s-mute\" x=\"60\" y=\"76\" width=\"38\" height=\"42\"/><rect class=\"s-mute\" x=\"104\" y=\"76\" width=\"38\" height=\"42\"/><rect class=\"s-mute\" x=\"148\" y=\"76\" width=\"38\" height=\"42\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">State shown</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 130\"><rect class=\"s-mute\" x=\"8\" y=\"8\" width=\"194\" height=\"114\"/><rect class=\"s-mute\" x=\"16\" y=\"14\" width=\"38\" height=\"42\"/><rect class=\"s-mute\" x=\"60\" y=\"14\" width=\"38\" height=\"42\"/><rect class=\"s-mute\" x=\"104\" y=\"14\" width=\"38\" height=\"42\"/><rect class=\"s-mute\" x=\"148\" y=\"14\" width=\"38\" height=\"42\"/><rect class=\"s-mute\" x=\"16\" y=\"76\" width=\"38\" height=\"42\"/><rect class=\"s-mute\" x=\"60\" y=\"76\" width=\"38\" height=\"42\"/><rect class=\"s-mute\" x=\"104\" y=\"76\" width=\"38\" height=\"42\"/><rect class=\"s-mute\" x=\"148\" y=\"76\" width=\"38\" height=\"42\"/><circle class=\"f-accent\" cx=\"78\" cy=\"66\" r=\"5\"/><text class=\"t\" x=\"88\" y=\"70\">you are here</text></svg></div></div></div>"
      },
      "what": "The first of Jakob Nielsen's ten heuristics. The design should always keep users informed about what is going on, through appropriate feedback within a reasonable amount of time. Nielsen's argument is that knowing the current state lets people learn the outcome of what they just did and decide what to do next, and that predictable interactions build trust. It restates Norman's feedback principle as something you can check an interface against.",
      "why": "Most anxious moments in software are status vacuums: did that send, is it still uploading, am I logged in. Filling them costs almost nothing and removes a whole class of support contact.",
      "how": [
        "Never take an action with consequences without telling the person it happened.",
        "Show state continuously where it matters, rather than only in response to a question.",
        "Give feedback as quickly as possible, ideally immediately, even if the real work takes longer.",
        "Name the state in the person's terms: Saved, Sending, Sent, Failed to send."
      ],
      "example": "The You Are Here marker on a shopping centre map, which is the illustration Nielsen Norman Group uses for this heuristic.",
      "numbers": "",
      "pitfall": "Status is shown once as a toast that fades after a few seconds, so anyone who looked away has no way to find out what happened.",
      "source": "Jakob Nielsen, 10 Usability Heuristics for User Interface Design (1994, revised wording 2020)",
      "verify": {
        "status": "verified",
        "note": "Read the current Nielsen Norman Group heuristics page in full, which gives the definition wording quoted here. Nielsen's own note on that page records that he and Rolf Molich developed the original heuristics in 1990 and that he refined them in 1994 from a factor analysis of 249 usability problems."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the most frequently violated heuristic in real products and the easiest to check."
      },
      "related": [
        539,
        545,
        563,
        592
      ]
    },
    {
      "n": 552,
      "title": "Match between system and the real world",
      "aka": [
        "Nielsen heuristic 2",
        "Speak the user's language"
      ],
      "oneLine": "Use words, phrases and concepts your users know, and follow real-world conventions and ordering.",
      "demo": {
        "caption": "The same three menu items. One list is written from the database, the other from the job in hand.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">The system's words</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>Deprovision entity</span><span>Purge object store</span><span>Revoke tenant ACL</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">The user's words</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>Close this account</span><span>Delete the files</span><span>Remove someone's access</span></div></div></div></div></div>"
      },
      "what": "Nielsen's second heuristic says the design should speak the users' language and use words, phrases and concepts familiar to them rather than internal jargon, with information appearing in a natural and logical order. Nielsen Norman Group explicitly connect it to Norman's natural mapping: when controls follow real-world conventions and correspond to the outcomes people want, the interface is easier to learn and remember.",
      "why": "Jargon does not just confuse, it makes people guess, and a wrong guess about what a word means produces a mistake rather than a slip. Matching the user's language is the cheapest way to stop that.",
      "how": [
        "Take the vocabulary from research with actual users, not from your database schema or your internal team slang.",
        "Order steps the way the real task runs, not the way your system processes them.",
        "Check icons and imagery the same way you check words. A floppy disk means save to some people and nothing to others.",
        "Do not assume that a term clear to you and your colleagues is clear to anyone outside the building."
      ],
      "example": "Hob controls arranged to match the layout of the burners, which is the example Nielsen Norman Group print for this heuristic.",
      "numbers": "",
      "pitfall": "Teams translate jargon into friendlier jargon, so Deprovision becomes Offboard rather than Remove access. The words changed and the reader still does not know what will happen.",
      "source": "Jakob Nielsen, 10 Usability Heuristics for User Interface Design (1994, revised wording 2020)",
      "verify": {
        "status": "verified",
        "note": "Definition and hob example taken from the current Nielsen Norman Group heuristics page, read in full this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "Wording and ordering are design decisions, and this heuristic is where interface copy stops being decoration."
      },
      "related": [
        538,
        542,
        554,
        597
      ]
    },
    {
      "n": 553,
      "title": "User control and freedom",
      "aka": [
        "Nielsen heuristic 3",
        "Emergency exit"
      ],
      "oneLine": "People act by mistake, so give them a clearly marked way out without a long process.",
      "demo": {
        "caption": "The same checkout step. Only the right one has a marked exit that leaves the basket where it was.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One way through</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col\"><div class=\"db-nav\"><b>Delivery</b><span>Payment</span><span>Review</span></div><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--between\"><span class=\"db-btn\">Continue</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">A marked exit</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col\"><div class=\"db-nav\"><b>Delivery</b><span>Payment</span><span>Review</span></div><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--between\"><span class=\"db-btn db-btn--ghost\">Back to basket</span><span class=\"db-btn\">Continue</span></div></div></div></div></div></div>"
      },
      "what": "Nielsen's third heuristic states that users often perform actions by mistake and need a clearly marked emergency exit to leave the unwanted action, without having to go through an extended process. The recommended mechanisms are undo and redo, a visible way to leave the current interaction, and exits that are clearly labelled and easy to find.",
      "why": "When people know they can back out, they explore, and exploration is how they learn a product. Trap them and they stop trying anything they are unsure about.",
      "how": [
        "Support undo and redo wherever the data model allows it.",
        "Put a clearly labelled cancel or close on every modal, flow and wizard, and make it return the person to a known place.",
        "Do not hide the exit to improve a funnel metric. That converts a design into a trap.",
        "Make the exit visually findable, not just technically present behind a keyboard shortcut."
      ],
      "example": "A multi-step checkout with a visible cancel at every step that returns you to your basket with the contents intact.",
      "numbers": "",
      "pitfall": "The exit exists but discards work silently, so people learn that cancelling is dangerous and start abandoning the tab instead.",
      "source": "Jakob Nielsen, 10 Usability Heuristics for User Interface Design (1994, revised wording 2020)",
      "verify": {
        "status": "verified",
        "note": "Definition taken from the current Nielsen Norman Group heuristics page, read in full this session. Overlaps heavily with Shneiderman's sixth and seventh rules (565, 566), which predate it."
      },
      "belongs": {
        "verdict": "core",
        "why": "Reversibility is a structural decision that shapes the whole product, not a surface feature."
      },
      "related": [
        565,
        566,
        584,
        586
      ]
    },
    {
      "n": 554,
      "title": "Consistency and standards",
      "aka": [
        "Nielsen heuristic 4"
      ],
      "oneLine": "Users should not have to wonder whether different words or actions mean the same thing.",
      "demo": {
        "caption": "One action across three rows. On the left it has three names and moves about; on the right it does not.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Three words, three places</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span>Draft one</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Remove</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--nowrap\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Trash</span><span>Draft two</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span>Draft three</span><span class=\"db-btn db-btn--sm db-btn--quiet\">Discard</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One word, one place</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span>Draft one</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Delete</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span>Draft two</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Delete</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span>Draft three</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Delete</span></div></div></div></div></div></div>"
      },
      "what": "Nielsen's fourth heuristic asks for two kinds of consistency. Internal consistency means the same word, control and pattern mean the same thing throughout your product or family of products. External consistency means following platform and industry convention, because people spend most of their time in other people's software and arrive with those expectations already formed. Breaking either kind makes them learn something new for no gain.",
      "why": "Consistency is borrowed learning. Every convention you follow is training your users already received for free somewhere else.",
      "how": [
        "Follow the platform first. Native controls, native gestures, native placement.",
        "Pick one word per concept and keep it everywhere, including error messages, emails and help.",
        "Enforce internal consistency with a component library rather than a style document nobody reads.",
        "Break a convention only when you can name what the user gains, and expect to pay for it in explanation."
      ],
      "example": "Underlined or distinctly coloured text meaning a link on the web. It is arbitrary, it is universal, and inventing your own version costs you more than it gains.",
      "numbers": "",
      "pitfall": "Consistency gets treated as sameness, so every page is forced into one template and genuinely different tasks are made to look identical.",
      "source": "Jakob Nielsen, 10 Usability Heuristics for User Interface Design (1994, revised wording 2020)",
      "verify": {
        "status": "verified",
        "note": "Definition and the internal versus external distinction taken from the current Nielsen Norman Group heuristics page, read in full this session. Shneiderman's first golden rule (561) covers the internal half and predates it."
      },
      "belongs": {
        "verdict": "core",
        "why": "It governs both the design system you build and how much your users have to learn."
      },
      "related": [
        561,
        552,
        573,
        590
      ]
    },
    {
      "n": 555,
      "title": "Error prevention",
      "aka": [
        "Nielsen heuristic 5"
      ],
      "oneLine": "Good error messages matter, but the best designs stop the error happening at all.",
      "demo": {
        "caption": "Left, an impossible date typed and rejected afterwards. Right, the impossible dates were never on offer.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Caught after the event</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Appointment date</span><span class=\"db-input db-input--error\">31/02/2026</span><span class=\"db-note\">Enter a valid date</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Never offered</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 196 114\"><text class=\"t\" x=\"14\" y=\"14\">M</text><text class=\"t\" x=\"41\" y=\"14\">T</text><text class=\"t\" x=\"68\" y=\"14\">W</text><text class=\"t\" x=\"95\" y=\"14\">T</text><text class=\"t\" x=\"122\" y=\"14\">F</text><text class=\"t\" x=\"149\" y=\"14\">S</text><text class=\"t\" x=\"176\" y=\"14\">S</text><rect class=\"f-mute\" x=\"6\" y=\"22\" width=\"22\" height=\"20\"/><rect class=\"f-mute\" x=\"33\" y=\"22\" width=\"22\" height=\"20\"/><rect class=\"s-mute\" x=\"60\" y=\"22\" width=\"22\" height=\"20\"/><rect class=\"s-mute\" x=\"87\" y=\"22\" width=\"22\" height=\"20\"/><rect class=\"s-mute\" x=\"114\" y=\"22\" width=\"22\" height=\"20\"/><rect class=\"f-mute\" x=\"141\" y=\"22\" width=\"22\" height=\"20\"/><rect class=\"f-mute\" x=\"168\" y=\"22\" width=\"22\" height=\"20\"/><rect class=\"s-mute\" x=\"6\" y=\"48\" width=\"22\" height=\"20\"/><rect class=\"f-accent\" x=\"33\" y=\"48\" width=\"22\" height=\"20\"/><rect class=\"s-mute\" x=\"60\" y=\"48\" width=\"22\" height=\"20\"/><rect class=\"s-mute\" x=\"87\" y=\"48\" width=\"22\" height=\"20\"/><rect class=\"s-mute\" x=\"114\" y=\"48\" width=\"22\" height=\"20\"/><rect class=\"f-mute\" x=\"141\" y=\"48\" width=\"22\" height=\"20\"/><rect class=\"f-mute\" x=\"168\" y=\"48\" width=\"22\" height=\"20\"/><rect class=\"s-mute\" x=\"6\" y=\"74\" width=\"22\" height=\"20\"/><rect class=\"s-mute\" x=\"33\" y=\"74\" width=\"22\" height=\"20\"/><rect class=\"s-mute\" x=\"60\" y=\"74\" width=\"22\" height=\"20\"/><rect class=\"s-mute\" x=\"87\" y=\"74\" width=\"22\" height=\"20\"/><rect class=\"s-mute\" x=\"114\" y=\"74\" width=\"22\" height=\"20\"/><rect class=\"f-mute\" x=\"141\" y=\"74\" width=\"22\" height=\"20\"/><rect class=\"f-mute\" x=\"168\" y=\"74\" width=\"22\" height=\"20\"/><text class=\"t\" x=\"6\" y=\"110\">only real, open dates</text></svg></div></div></div>"
      },
      "what": "Nielsen's fifth heuristic asks you to either eliminate error-prone conditions or check for them and present a confirmation before the person commits. Nielsen Norman Group tie it directly to the slip and mistake distinction: avoid slips with helpful constraints and good defaults, and prevent mistakes by removing memory burdens, supporting undo and warning people. They also advise prioritising by cost, tackling expensive errors before minor frustrations.",
      "why": "Prevented errors cost nothing to recover from, produce no support contact and leave no bad memory. Recovery, however well designed, always costs the person something.",
      "how": [
        "Rank your known errors by what they cost the user, then work down from the top.",
        "Replace free text with constrained input wherever the valid set is knowable: pickers, selects, masks, typed fields.",
        "Set defaults that are correct for most people, since a good default prevents the error rather than catching it.",
        "Reserve confirmations for actions that are both destructive and hard to undo. Overused, they get clicked through."
      ],
      "example": "A date field that offers a calendar restricted to available dates, rather than a text box that accepts 31/02/2026 and rejects it after submission.",
      "numbers": "",
      "pitfall": "Prevention is implemented as an extra confirmation step, which adds friction for everyone and stops almost no slips, because a slip is inattentive by definition.",
      "source": "Jakob Nielsen, 10 Usability Heuristics for User Interface Design (1994, revised wording 2020)",
      "verify": {
        "status": "verified",
        "note": "Definition, the slips and mistakes tie-in and the advice to prevent high-cost errors first all confirmed against the current Nielsen Norman Group heuristics page. Coverage note for the editor: Shneiderman's fifth golden rule, Prevent errors, is missing from the master list, which jumps from 564 straight to 565. Its substance sits here and at 541 and 548, so no new number was added, but the omission should be recorded."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the heuristic with the largest effect on real support volume and the one most often answered with the wrong mechanism."
      },
      "related": [
        549,
        541,
        548,
        583
      ]
    },
    {
      "n": 556,
      "title": "Recognition rather than recall",
      "aka": [
        "Nielsen heuristic 6"
      ],
      "oneLine": "Make elements, actions and options visible so people do not have to remember them.",
      "demo": {
        "caption": "The same value is needed. On the left it comes out of your memory; on the right you point at it.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Produced from memory</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Reference from step one</span><span class=\"db-input\"> </span><span class=\"db-note\">Nothing on screen to check against</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Chosen from what is shown</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Reference from step one</span><span class=\"db-input\">INV-0142 Acme Ltd</span><span class=\"db-input\">INV-0143 Bell and Co</span><span class=\"db-input\">INV-0144 Dover Ltd</span></div></div></div></div></div>"
      },
      "what": "Nielsen's sixth heuristic says to minimise memory load by keeping elements, actions and options visible, and that information needed to use the design should be visible or easily retrievable when needed. A person should not have to carry something from one part of the interface to another in their head. It is the applied version of Norman's knowledge in the world.",
      "why": "Recognising something is easier than producing it from memory, and the gap widens under stress, interruption and fatigue, which describes most real use.",
      "how": [
        "Carry context forward. If a value was entered on step one and matters on step three, show it on step three.",
        "Offer choices rather than demanding recalled input: recent items, suggestions, pickers, autocomplete.",
        "Put help beside the field that needs it rather than in a tutorial people must memorise first.",
        "Keep labels visible. Placeholder text that disappears on focus turns a recognition task into a recall task."
      ],
      "example": "Nielsen Norman Group's illustration is that most people can answer whether Lisbon is the capital of Portugal more reliably than they can produce the capital of Portugal from memory.",
      "numbers": "",
      "pitfall": "Interfaces designed for the demo, where the designer already knows what everything is. Icon-only toolbars are the classic result.",
      "source": "Jakob Nielsen, 10 Usability Heuristics for User Interface Design (1994, revised wording 2020)",
      "verify": {
        "status": "verified",
        "note": "Definition and the Lisbon example taken from the current Nielsen Norman Group heuristics page, read in full this session. The underlying idea is Norman's knowledge in the head versus in the world (547)."
      },
      "belongs": {
        "verdict": "core",
        "why": "It settles concrete decisions about labels, placeholders and toolbars on every screen you build."
      },
      "related": [
        547,
        567,
        580,
        591
      ]
    },
    {
      "n": 557,
      "title": "Flexibility and efficiency of use",
      "aka": [
        "Nielsen heuristic 7",
        "Accelerators"
      ],
      "oneLine": "Hidden shortcuts speed up experts without getting in the way of first-time users.",
      "demo": {
        "caption": "Both menus have the same shortcuts. Only the right one lets the slow route teach the fast one.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Shortcut hidden</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>Duplicate</span><span>Rename</span><span>Export</span></div></div><span class=\"db-note\">Ctrl D duplicates. Nothing here says so.</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Shortcut shown beside it</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-row db-row--between db-row--nowrap\"><span>Duplicate</span><span class=\"db-note\">Ctrl D</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Rename</span><span class=\"db-note\">F2</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Export</span><span class=\"db-note\">Ctrl E</span></span></div></div><span class=\"db-note\">Using the slow route teaches the fast one.</span></div></div></div></div>"
      },
      "what": "Nielsen's seventh heuristic asks the design to serve both inexperienced and experienced users: shortcuts, hidden from novices, may speed the interaction for experts, and frequent actions should be tailorable. Nielsen Norman Group split the mechanisms into accelerators such as keyboard shortcuts and gestures, personalisation where the system adapts, and customisation where the person chooses.",
      "why": "Products are usually designed for the first hour and then used for years. Without a fast path, your most valuable users are permanently held at beginner speed.",
      "how": [
        "Add keyboard shortcuts for the actions people repeat most, and show the shortcut next to the menu item so it is learnable.",
        "Let people save, repeat or template frequent work rather than rebuilding it each time.",
        "Keep the beginner route intact. A shortcut is an addition, never a replacement.",
        "Be careful with personalisation that moves things around. Adaptive menus break the spatial memory experts rely on."
      ],
      "example": "A desktop application listing the keyboard shortcut alongside each menu command, so using the slow route teaches the fast one.",
      "numbers": "",
      "pitfall": "Customisation is offered instead of good defaults, so every user is handed a settings screen and a decision they did not want to make.",
      "source": "Jakob Nielsen, 10 Usability Heuristics for User Interface Design (1994, revised wording 2020)",
      "verify": {
        "status": "verified",
        "note": "Definition and the accelerator, personalisation and customisation split confirmed against the current Nielsen Norman Group heuristics page, whose tips name all three. Shneiderman got there first: his second golden rule was Enable frequent users to use shortcuts in the earlier editions, and it was later broadened into universal usability (562), which keeps shortcuts as a feature for experts. Corrected this pass: the earlier note dated that change to the fifth edition. The fourth edition already reads Cater to universal usability, so the change happened before then."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the heuristic that stops a product being optimised only for the demo and the first session."
      },
      "related": [
        562,
        590,
        572,
        583
      ]
    },
    {
      "n": 558,
      "title": "Aesthetic and minimalist design",
      "aka": [
        "Nielsen heuristic 8"
      ],
      "oneLine": "Every extra unit of information competes with the relevant ones and reduces their visibility.",
      "demo": {
        "caption": "Find the pay button in each. It is the same button, but on the left everything else is competing with it.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Nothing left out</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-row db-row--between db-row--nowrap\"><span>Annual plan</span><span>&#163;240</span></span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Best value</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Most chosen</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Two months free</span></div><span class=\"db-note\">Offer ends soon</span><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Pay now</span><span class=\"db-btn db-btn--ghost\">Compare plans</span><span class=\"db-btn db-btn--quiet\">Not now</span></div><span class=\"db-note\">Renews annually. Terms apply.</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Same action, competition removed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-row db-row--between db-row--nowrap\"><span>Annual plan</span><span>&#163;240</span></span><div class=\"db-lines\"><i></i><i></i></div><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Pay now</span></div><span class=\"db-note\">Compare plans</span></div></div></div></div></div>"
      },
      "what": "Nielsen's eighth heuristic says interfaces should not contain information that is irrelevant or rarely needed, because every extra unit competes with the relevant units and diminishes their relative visibility. Nielsen Norman Group are explicit that this does not mean flat design and does not mean sparse for its own sake. It means keeping the content and the visual design focused on what the person is there to do.",
      "why": "Attention is finite and the competition is internal. The thing that hides your primary action is usually your own secondary content, not anything an outsider added.",
      "how": [
        "For each screen, name the one thing the person came to do, then justify every element that is not helping with it.",
        "Move rarely needed controls behind progressive disclosure (580) instead of deleting the capability.",
        "Cut duplicate information before cutting decoration. Two counters saying the same thing cost more than a border does.",
        "Measure the result on the primary action, not on how clean the screenshot looks."
      ],
      "example": "Nielsen Norman Group illustrate it with an ornate teapot, whose decoration brings an uncomfortable handle and a nozzle that is hard to wash.",
      "numbers": "",
      "pitfall": "Read as an instruction to strip everything, which produces interfaces with no signifiers left (537). Nielsen Norman Group specifically warn that this heuristic is not a mandate for flat design.",
      "source": "Jakob Nielsen, 10 Usability Heuristics for User Interface Design (1994, revised wording 2020)",
      "verify": {
        "status": "verified",
        "note": "Definition, the teapot example and the explicit statement that this does not require flat design all come from the current Nielsen Norman Group heuristics page, read in full this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the usability argument for editing, and it is the heuristic most often misquoted to justify removing useful cues."
      },
      "related": [
        537,
        580,
        591,
        543
      ]
    },
    {
      "n": 559,
      "title": "Help users recognise, diagnose and recover from errors",
      "aka": [
        "Nielsen heuristic 9",
        "Error messages"
      ],
      "oneLine": "Error messages should be in plain language, name the problem exactly, and suggest a way out.",
      "demo": {
        "caption": "The same rejected date. Left tells you a number; right tells you what is wrong and what to do about it.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Code, no way out</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Card expiry</span><span class=\"db-input db-input--error\">03 / 21</span><span>Error 422: invalid input.</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Problem named, fix offered</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Card expiry</span><span class=\"db-input db-input--error\">03 / 21</span><span>This date has already passed. Check the date on the front of the card.</span></div></div></div></div></div>"
      },
      "what": "Nielsen's ninth heuristic asks for error messages expressed in plain language rather than error codes, that precisely indicate the problem and constructively suggest a solution. Nielsen Norman Group add that the message needs a visual treatment strong enough that people notice it, and that the language must avoid technical jargon.",
      "why": "An error is the moment a person is most likely to leave. A message that names the problem and offers the next step converts a dead end into a two-second correction.",
      "how": [
        "Write three parts: what happened, why, and what to do now.",
        "Put the message next to the thing that caused it, not at the top of a long form.",
        "Drop codes from the human-readable line, and keep a reference identifier somewhere for support if you need one.",
        "Never blame the person. The message describes a state of the system, not a character flaw."
      ],
      "example": "Replacing Invalid input with Your card's expiry date has already passed. Check the date on the front of the card.",
      "numbers": "",
      "pitfall": "The copy is fixed but the visual treatment is not, so a carefully written message appears in small grey text below the fold and nobody sees it.",
      "source": "Jakob Nielsen, 10 Usability Heuristics for User Interface Design (1994, revised wording 2020)",
      "verify": {
        "status": "verified",
        "note": "Definition and the guidance on visual treatment and plain language taken from the current Nielsen Norman Group heuristics page, read in full this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "Error copy is design work with a measurable effect on completion, and it is almost always written last by whoever is nearest."
      },
      "related": [
        597,
        598,
        555,
        549
      ]
    },
    {
      "n": 560,
      "title": "Help and documentation",
      "aka": [
        "Nielsen heuristic 10"
      ],
      "oneLine": "Ideally the design needs no explanation, but where it does, help must be searchable and task-focused.",
      "demo": {
        "caption": "The same setting. The article on the left exists only because the label does not say what the setting does.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Label plus an article</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-ui\"><div class=\"db-row db-row--between db-row--nowrap\"><span>Sync mode: passive</span><span class=\"db-btn db-btn--sm db-btn--ghost\">?</span></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Help centre article</span><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Label that needs no article</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-ui\"><div class=\"db-row db-row--between db-row--nowrap\"><span>Download changes, never upload</span></div></div><span class=\"db-note\">Nothing left to document</span></div></div></div></div>"
      },
      "what": "The tenth heuristic starts with a concession: it is best if the system needs no additional explanation, but documentation may still be necessary. Where it exists, Nielsen Norman Group ask for content that is easy to search, focused on the person's task rather than on the product's features, concise, and presented in context at the moment it is needed.",
      "why": "Help is where people go when the design has already failed them, so its quality determines whether that failure is recoverable. Task-shaped help also tells you exactly where the interface needs work.",
      "how": [
        "Organise help by what people are trying to do, not by your navigation structure.",
        "Put short help in context beside the control, and reserve full articles for genuinely complex tasks.",
        "Make it searchable in the words users actually type, which means reading your support queries.",
        "Track which help pages get the most traffic and treat that list as a design backlog."
      ],
      "example": "A short explanatory note beside a tax reference field explaining where to find that reference, instead of a link to a general help centre.",
      "numbers": "",
      "pitfall": "Documentation is written once at launch by a different team, then drifts out of step with the product, so it teaches a version of the system image (9542) that no longer exists.",
      "source": "Jakob Nielsen, 10 Usability Heuristics for User Interface Design (1994, revised wording 2020)",
      "verify": {
        "status": "verified",
        "note": "Definition and guidance taken from the current Nielsen Norman Group heuristics page, read in full this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "Help is part of the system image and part of the design surface, even though it usually sits outside the design team's remit."
      },
      "related": [
        9542,
        599,
        559,
        572
      ]
    },
    {
      "n": 561,
      "title": "Strive for consistency",
      "aka": [
        "Shneiderman's first golden rule"
      ],
      "oneLine": "Same terminology, same sequences, same visual treatment in similar situations, with few and comprehensible exceptions.",
      "demo": {
        "caption": "Six actions, one list. The left guards three of them at random; the right guards only the one you cannot undo.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Exceptions everywhere</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-row db-row--between db-row--nowrap\"><span>Rename</span><span class=\"db-note\">One click</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Duplicate</span><span class=\"db-note\">Confirm first</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Move</span><span class=\"db-note\">Type the name</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Export</span><span class=\"db-note\">One click</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Share</span><span class=\"db-note\">Confirm first</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Delete</span><span class=\"db-note\">One click</span></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One exception, and you can say why</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-row db-row--between db-row--nowrap\"><span>Rename</span><span class=\"db-note\">One click</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Duplicate</span><span class=\"db-note\">One click</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Move</span><span class=\"db-note\">One click</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Export</span><span class=\"db-note\">One click</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Share</span><span class=\"db-note\">One click</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Delete</span><span class=\"db-note db-note--accent\">Confirm first</span></span></div></div></div></div></div>"
      },
      "what": "The first of Ben Shneiderman's eight golden rules. Consistent sequences of actions should be required in similar situations, identical terminology should be used in prompts, menus and help screens, and consistent colour, layout, capitalisation and typefaces should run throughout. Shneiderman then adds the part usually dropped in the retelling: exceptions such as requiring confirmation before a delete, or not echoing passwords, should be comprehensible and limited in number.",
      "why": "It reduces what has to be learned and lets a person transfer knowledge from one part of your product to another. The exception clause is what keeps it from becoming a rule against ever doing anything differently.",
      "how": [
        "Keep one term per concept across interface, help, emails and support scripts.",
        "Standardise the shape of your action sequences, so cancelling, saving and confirming work the same way everywhere.",
        "Write down each deliberate inconsistency and the reason for it. If the list is long, you have a problem.",
        "Include capitalisation and colour in the definition. Shneiderman does."
      ],
      "example": "Shneiderman's own exception is requiring confirmation for a delete command. It breaks the normal one-click pattern deliberately, and every user understands why.",
      "numbers": "",
      "pitfall": "Consistency is used to block any change at all, so a genuinely better pattern is refused because the old one is everywhere.",
      "source": "Ben Shneiderman et al., Designing the User Interface, sixth edition (2016), section 3.3.4; Shneiderman dates the original list to 1985",
      "verify": {
        "status": "verified",
        "note": "Read the full text of all eight rules on Shneiderman's own page at cs.umd.edu, which states the version given is from section 3.3.4 of the sixth edition (2016) and notes that even the original list from 1985 was well received. This rule covers internal consistency; Nielsen's fourth heuristic (554) adds external convention."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the design-system rule stated a decade before design systems, and the exception clause is genuinely useful."
      },
      "related": [
        554,
        573,
        590,
        566
      ]
    },
    {
      "n": 562,
      "title": "Seek universal usability",
      "aka": [
        "Shneiderman's second golden rule",
        "Design for plasticity"
      ],
      "oneLine": "Design for the full spread of users: novice to expert, all ages, disabilities, languages and devices.",
      "demo": {
        "caption": "One button, two languages. Fix the width to the English label and the German one has nowhere to go.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Width fixed to one language</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-btn\" style=\"width:104px;overflow:hidden\">Save changes</span></div><div class=\"db-row\"><span class=\"db-btn\" style=\"width:104px;overflow:hidden\">&#196;nderungen speichern</span></div><span class=\"db-note\">Same control, same 104 pixels</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Width follows the content</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-btn\">Save changes</span></div><div class=\"db-row\"><span class=\"db-btn\">&#196;nderungen speichern</span></div><span class=\"db-note\">Same control, sized by its label</span></div></div></div></div>"
      },
      "what": "Shneiderman's second rule asks designers to recognise the needs of diverse users and design for plasticity, meaning content that can transform to suit different people and situations. He names novice to expert differences, age ranges, disabilities, international variations and technological diversity. His practical claim is that adding features for novices, such as explanations, and features for experts, such as shortcuts and faster pacing, improves the design and its perceived quality for everyone.",
      "why": "It reframes accessibility and expertise as the same problem: one interface serving a spread of people, rather than a compliance task bolted on at the end.",
      "how": [
        "Design the beginner path and the expert path as one interface, not two products.",
        "Let content adapt: text size, language, density, input method, connection speed.",
        "Bring accessibility requirements in at the wireframe stage, since colour, order and structure are decided there.",
        "Assume international use. Date formats, name shapes, address shapes and text expansion all bite late."
      ],
      "example": "Shneiderman's own illustration is adding explanations for novices and shortcuts with faster pacing for experts within the same interface.",
      "numbers": "",
      "pitfall": "Universal usability is handed to an accessibility audit at the end, which catches contrast and labels but cannot fix a structure that was wrong from the first sketch.",
      "source": "Ben Shneiderman et al., Designing the User Interface, sixth edition (2016), section 3.3.4",
      "verify": {
        "status": "verified",
        "note": "Rule text confirmed on Shneiderman's own cs.umd.edu page: recognise the needs of diverse users and design for plasticity, facilitating transformation of content. Corrected this pass: the earlier note said this replaced an accommodation-focused wording. It did not. Up to the third edition the second golden rule was Enable frequent users to use shortcuts. The fourth edition replaced it with Cater to universal usability and the sixth reads Seek universal usability, which is why 557 and this entry both make the novice-to-expert point."
      },
      "belongs": {
        "verdict": "core",
        "why": "It states the inclusion requirement as a design goal rather than a legal one, and it settles the novice-versus-expert argument."
      },
      "related": [
        557,
        535,
        572,
        587
      ]
    },
    {
      "n": 563,
      "title": "Offer informative feedback",
      "aka": [
        "Shneiderman's third golden rule"
      ],
      "oneLine": "Every action gets a response, scaled to how frequent and how significant that action is.",
      "demo": {
        "caption": "Three actions of very different consequence. On the left the interface says the same thing about all three.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One response for everything</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Key pressed</span><span class=\"db-ui\">Saved</span><span class=\"db-note\">Message archived</span><span class=\"db-ui\">Saved</span><span class=\"db-note\">Payment sent</span><span class=\"db-ui\">Saved</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Response scaled to the action</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Key pressed</span><span class=\"db-input\">the quick brown f</span><span class=\"db-note\">Message archived</span><span class=\"db-ui\">Archived. Undo</span><span class=\"db-note\">Payment sent</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span>&#163;240 sent to Acme Ltd</span><span class=\"db-note\">Reference 0142, receipt emailed</span></div></div></div></div></div></div>"
      },
      "what": "Shneiderman's third rule states that for every user action there should be interface feedback, and adds the calibration that most restatements leave out: for frequent and minor actions the response can be modest, while for infrequent and major actions it should be more substantial. He also notes that showing the objects of interest visually gives a convenient environment for making changes explicit, which links the rule to direct manipulation.",
      "why": "The scaling rule is the useful part. It tells you when a subtle state change is enough and when you owe the person a full confirmation, which is exactly the judgement that goes wrong in practice.",
      "how": [
        "Match the weight of the response to the weight of the action. A character typed needs no announcement; a payment sent does.",
        "For reversible, high-frequency actions, prefer a change in the object itself over a separate message.",
        "For rare, consequential actions, give a durable confirmation the person can return to, not a message that fades.",
        "Show the change on the thing being changed, since that is cheaper to read than any notification."
      ],
      "example": "A character appearing as you type is response enough for a frequent minor action. A completed order earns a full confirmation page, which is the case Shneiderman sets out under the closure rule (564).",
      "numbers": "",
      "pitfall": "Every action gets the same toast notification, so the interface is noisy for routine work and underwhelming at the one moment that mattered.",
      "source": "Ben Shneiderman et al., Designing the User Interface, sixth edition (2016), section 3.3.4",
      "verify": {
        "status": "verified",
        "note": "Full rule text read on Shneiderman's own page at cs.umd.edu, including the modest-versus-substantial calibration and the reference to direct manipulation."
      },
      "belongs": {
        "verdict": "core",
        "why": "It adds a calibration rule that Norman's feedback principle and Nielsen's first heuristic do not give you."
      },
      "related": [
        539,
        551,
        564,
        578
      ]
    },
    {
      "n": 564,
      "title": "Design dialogues to yield closure",
      "aka": [
        "Shneiderman's fourth golden rule",
        "Closure"
      ],
      "oneLine": "Group actions into sequences with a beginning, middle and end, and mark the end clearly.",
      "demo": {
        "caption": "The same three steps. On the left the sequence stops; on the right it is closed, and says what happened.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Stops</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">Basket</span><span class=\"db-arrow\">&#8594;</span><span class=\"db-note\">Address</span><span class=\"db-arrow\">&#8594;</span><span class=\"db-note\">Pay</span></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span>Your account</span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div><span class=\"db-note\">Did it go through?</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Closes</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">Basket</span><span class=\"db-arrow\">&#8594;</span><span class=\"db-note\">Address</span><span class=\"db-arrow\">&#8594;</span><span class=\"db-note\">Pay</span><span class=\"db-arrow\">&#8594;</span><span class=\"db-note db-note--accent\">End</span></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span>Order 4471 paid, &#163;240</span><span class=\"db-note\">Arrives Thursday. Receipt emailed.</span></div></div><span class=\"db-note\">Nothing left to hold in mind</span></div></div></div></div>"
      },
      "what": "Shneiderman's fourth rule asks that sequences of actions be organised into groups with a beginning, a middle and an end. Informative feedback at the completion of a group gives people the satisfaction of accomplishment, a sense of relief, a signal to drop contingency plans from their minds, and an indicator to prepare for the next group. The word dialogue here means the exchange between person and system, not a modal window.",
      "why": "Closure is what lets someone stop holding the task in their head. Without a clear ending they keep checking, keep the tab open and keep the anxiety.",
      "how": [
        "Give every multi-step flow a definite end state, not just a return to the previous screen.",
        "Say what was completed in concrete terms, and what happens next if anything does.",
        "Chunk long processes into groups small enough to finish, and confirm each group.",
        "Send a durable record for anything the person may need to prove later."
      ],
      "example": "Shneiderman's own case is an e-commerce site moving people from selecting products to checkout and ending with a clear confirmation page that completes the transaction.",
      "numbers": "",
      "pitfall": "The flow ends by dumping the person back on a dashboard with no statement of what happened, so they repeat the action to be sure and create a duplicate.",
      "source": "Ben Shneiderman et al., Designing the User Interface, sixth edition (2016), section 3.3.4",
      "verify": {
        "status": "verified",
        "note": "Full rule text read on Shneiderman's own page at cs.umd.edu. The word dialogs in his wording refers to human-computer dialogue, not modal dialogue boxes, which is a common misreading."
      },
      "belongs": {
        "verdict": "core",
        "why": "It names something none of the other lists cover: the psychological need for an ending, and what an ending has to say."
      },
      "related": [
        563,
        551,
        594,
        599
      ]
    },
    {
      "n": 565,
      "title": "Permit easy reversal of actions",
      "aka": [
        "Shneiderman's sixth golden rule",
        "Reversibility"
      ],
      "oneLine": "Make actions reversible so people stop being afraid and start exploring.",
      "demo": {
        "caption": "The same wrong address, pasted in. Count the undos each side needs to get back to where you were.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Undo per field</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-input\">Flat 2, 14 Bridge Street</span><span class=\"db-btn db-btn--sm db-btn--quiet\">Undo</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-input\">Leeds</span><span class=\"db-btn db-btn--sm db-btn--quiet\">Undo</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-input\">LS1 4AB</span><span class=\"db-btn db-btn--sm db-btn--quiet\">Undo</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-input\">United Kingdom</span><span class=\"db-btn db-btn--sm db-btn--quiet\">Undo</span></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Undo per block</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">Flat 2, 14 Bridge Street</span><span class=\"db-input\">Leeds</span><span class=\"db-input\">LS1 4AB</span><span class=\"db-input\">United Kingdom</span><div class=\"db-row\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Undo this address</span></div></div></div></div></div></div>"
      },
      "what": "Shneiderman's sixth rule says that as much as possible actions should be reversible. His stated reason is that reversibility relieves anxiety, because people know errors can be undone, and it encourages exploration of unfamiliar options. He also makes the point about granularity: the unit of reversibility may be a single action, a data-entry task, or a complete group of actions such as an entire name and address block.",
      "why": "Reversibility is the cheapest confidence you can build into a product. It also removes the need for most confirmation dialogues, which buy safety by taxing every user.",
      "how": [
        "Decide the unit of undo deliberately for each area. Character, field, record or whole batch are different products.",
        "Prefer undo after the fact over confirmation before it, except where the action genuinely cannot be reversed (584, 585).",
        "Make the undo route visible at the moment it is most likely to be needed, which is immediately after the action.",
        "Where reversal is impossible, say so plainly before the action rather than afterwards."
      ],
      "example": "Reverting a whole name and address block in one step rather than field by field, which is Shneiderman's own illustration of choosing the right unit.",
      "numbers": "",
      "pitfall": "Undo is implemented for the interface but not for the side effects, so the record is restored and the email it triggered has already gone.",
      "source": "Ben Shneiderman et al., Designing the User Interface, sixth edition (2016), section 3.3.4",
      "verify": {
        "status": "verified",
        "note": "Full rule text read on Shneiderman's own page at cs.umd.edu, including the anxiety and exploration reasoning and the units of reversibility."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is an architectural decision that has to be taken early, and it determines how much of the rest of your safety design you need."
      },
      "related": [
        553,
        584,
        585,
        586
      ]
    },
    {
      "n": 566,
      "title": "Keep users in control",
      "aka": [
        "Support internal locus of control",
        "Shneiderman's seventh golden rule"
      ],
      "oneLine": "Experienced users want the system to respond to them, without surprises or changes to familiar behaviour.",
      "demo": {
        "caption": "The same menu on two days. Track Export, in colour: on the left it has moved, and nothing told you.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Reorders itself by use</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--top db-row--between db-row--nowrap\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Monday</span><span class=\"db-note\">Rename</span><span class=\"db-note\">Duplicate</span><span class=\"db-note\">Move</span><span class=\"db-note\">Share</span><span class=\"db-note db-note--accent\">Export</span></div><div class=\"db-col db-col--tight\"><span class=\"db-label\">Tuesday</span><span class=\"db-note db-note--accent\">Export</span><span class=\"db-note\">Rename</span><span class=\"db-note\">Share</span><span class=\"db-note\">Duplicate</span><span class=\"db-note\">Move</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Stays where you left it</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--top db-row--between db-row--nowrap\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Monday</span><span class=\"db-note\">Rename</span><span class=\"db-note\">Duplicate</span><span class=\"db-note\">Move</span><span class=\"db-note\">Share</span><span class=\"db-note db-note--accent\">Export</span></div><div class=\"db-col db-col--tight\"><span class=\"db-label\">Tuesday</span><span class=\"db-note\">Rename</span><span class=\"db-note\">Duplicate</span><span class=\"db-note\">Move</span><span class=\"db-note\">Share</span><span class=\"db-note db-note--accent\">Export</span></div></div></div></div></div>"
      },
      "what": "Shneiderman's seventh rule says experienced users strongly want the sense that they are in charge and that the interface responds to their actions. He lists what breaks the feeling: surprises, changes in familiar behaviour, tedious data entry, difficulty getting necessary information, and inability to produce the result they want. In earlier editions of the book the rule was worded Support internal locus of control, which borrows a term from personality psychology describing whether someone feels outcomes are down to them or to outside forces. The sixth edition drops the jargon.",
      "why": "Agency is what separates a tool from something that happens to you. People who feel in control tolerate complexity; people who do not abandon at the first surprise.",
      "how": [
        "Do not move, rename or re-order things people have learned without warning and a way back.",
        "Let the person initiate. Avoid interfaces that act on their own and then report what they did.",
        "Remove pointless data entry, which is the specific irritant Shneiderman calls out.",
        "When the system must act automatically, show what it did and make it reversible."
      ],
      "example": "An application that silently reorders its menu by frequency of use. Every expert who had learned the positions is now slower, and nothing told them why.",
      "numbers": "",
      "pitfall": "Control is confused with configuration, so a product with no coherent defaults hands the user two hundred settings and calls that empowerment.",
      "source": "Ben Shneiderman et al., Designing the User Interface, sixth edition (2016), section 3.3.4",
      "verify": {
        "status": "adjusted",
        "note": "The master list keeps the older parenthetical wording. Shneiderman's current text, read in full on his own cs.umd.edu page, titles this rule Keep users in control. Support internal locus of control is the wording used in earlier editions and is still widely reproduced. I have kept both, with the current title first."
      },
      "belongs": {
        "verdict": "core",
        "why": "The design rule is a designer's rule. Only the borrowed psychology label needed correcting."
      },
      "related": [
        553,
        569,
        557,
        583
      ]
    },
    {
      "n": 567,
      "title": "Reduce short-term memory load",
      "aka": [
        "Shneiderman's eighth golden rule"
      ],
      "oneLine": "Do not make people carry information from one display to another in their heads.",
      "demo": {
        "caption": "Same question, two steps later. Only the right one shows the address you are being asked about.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Carried in your head</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Step 1</span><span>Deliver to Flat 2, 14 Bridge Street, Leeds LS1 4AB</span></div></div><span class=\"db-arrow\">&#8595;</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Step 3</span><span>Is the billing address the same?</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Yes</span><span class=\"db-btn db-btn--sm db-btn--ghost\">No</span></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Carried by the screen</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Step 1</span><span>Deliver to Flat 2, 14 Bridge Street, Leeds LS1 4AB</span></div></div><span class=\"db-arrow\">&#8595;</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Step 3</span><span class=\"db-note\">Flat 2, 14 Bridge Street, Leeds LS1 4AB</span><span>Is the billing address the same?</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Yes</span><span class=\"db-btn db-btn--sm db-btn--ghost\">No</span></div></div></div></div></div></div></div>"
      },
      "what": "Shneiderman's eighth rule states that humans have a limited capacity for information processing in short-term memory, and that designers should therefore avoid interfaces where users must remember information from one display to use on another. His own examples are that phones should not require re-entry of numbers, website locations should stay visible, and long forms should be compacted to fit one display. He cites the seven plus or minus two figure as a rule of thumb.",
      "why": "Every value you make somebody hold in memory is a value they can drop, and dropping it produces a slip rather than a considered mistake. Showing it costs pixels; forgetting it costs the task.",
      "how": [
        "Find each point where the task requires a remembered value across a boundary, and display it at the second point.",
        "Keep confirmation numbers, references and previously entered values on screen where they are needed again.",
        "Prefer choosing from a visible set over typing a remembered string.",
        "Do not split a coherent form across pages just to make each page look tidier."
      ],
      "example": "A form that shows the delivery address you entered on the previous step next to the field asking whether billing matches it.",
      "numbers": "Shneiderman's own text gives seven plus or minus two chunks as the rule of thumb for short-term memory. He presents it as a rule of thumb, not a measurement.",
      "pitfall": "The seven plus or minus two figure gets quoted as a design limit and turned into rules about menu length or navigation items, which was never what it measured.",
      "source": "Ben Shneiderman et al., Designing the User Interface, sixth edition (2016), section 3.3.4",
      "verify": {
        "status": "disputed",
        "note": "The rule is verified: I read the full text on Shneiderman's own cs.umd.edu page, including the seven plus or minus two phrasing, which he explicitly labels a rule of thumb. The underlying number is contested in psychology, with later work arguing for a substantially smaller working-memory capacity. I did not verify those later figures this session, so I have not quoted any. Treat the design advice as sound and the number as folklore."
      },
      "belongs": {
        "verdict": "core",
        "why": "The instruction to show rather than require recall is solid design guidance regardless of what the true memory span turns out to be."
      },
      "related": [
        556,
        547,
        596,
        583
      ]
    },
    {
      "n": 568,
      "title": "Anticipation (interaction)",
      "aka": [
        "Anticipation",
        "Tognazzini's anticipation principle"
      ],
      "oneLine": "Bring the person everything they need for the current step, so they never have to leave to fetch it.",
      "demo": {
        "caption": "Both ask for the same number. On the right, the thing you would have gone looking for is already here.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Answer is elsewhere</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Policy number</span><span class=\"db-input\">&#160;</span><span class=\"db-note\">Where do I find this? Opens the help centre</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Answer is on the step</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Policy number</span><span class=\"db-input\">&#160;</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Your certificate</span><div class=\"db-lines\"><i></i><i></i></div><span class=\"db-note db-note--accent\">Policy P-4471-08</span></div></div></div></div></div></div></div>"
      },
      "what": "Two unrelated principles share this name. This one is about placement: putting what the user will need where they already are. The animation principle at 722, the wind-up before a movement, is a different idea with a different source, and the two should not be run together. One of Bruce Tognazzini's First Principles of Interaction Design. His statement is that software and hardware should try to anticipate what the user wants and needs, and should not expect them to leave the current screen to search for and collect information. The information must be in place and the necessary tools present and visible. He adds two conditions: anticipation requires a deep understanding of both the task and the users, and enough usability testing to confirm it worked, because a tool that is on screen but cannot be found may as well not be there.",
      "why": "Every time someone leaves your flow to find something, you risk losing them and you certainly lose their place. Anticipation is mostly about what you place next to what.",
      "how": [
        "Walk the task and list every fact or tool the person needs at each step, then check each one is on that step.",
        "Bring reference information into the flow rather than linking out to it.",
        "Preload the obvious next action instead of returning people to a neutral screen.",
        "Test findability, not just presence. Tognazzini's whole point is that these are different."
      ],
      "example": "A form asking for a policy number that shows a small picture of where the number appears on the document, so nobody has to open a separate help page.",
      "numbers": "",
      "pitfall": "Anticipation slides into presumption, where the system guesses the next action and performs it. Predicting a need is helpful; acting on the prediction without asking removes control (566).",
      "source": "Bruce Tognazzini, First Principles of Interaction Design, revised and expanded (asktog.com, 5 March 2014)",
      "verify": {
        "status": "verified",
        "note": "Read the full Anticipation section of Tognazzini's principles page, dated 5 March 2014 and described there as a revision of an earlier version he keeps online. The wording about not expecting users to leave the current screen and about tools that cannot be found is his. Corrected this pass: the earlier note said the page dates the original list to 1978. It does not. That year appears only in the copyright line and in his account of joining Apple, and the page itself says the Track State principle joined the list in 1996."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a concrete layout and content-placement rule from a practitioner, and it is not covered by the Nielsen or Shneiderman lists."
      },
      "related": [
        583,
        580,
        543,
        599,
        722
      ]
    },
    {
      "n": 569,
      "title": "Autonomy",
      "aka": [
        "Tognazzini's autonomy principle",
        "Bounded freedom"
      ],
      "oneLine": "The computer, interface and task environment belong to the user, within boundaries that keep them safe.",
      "demo": {
        "caption": "Three amounts of choice over one product: one switch, five, twenty-four. Only the middle one is a decision anybody could make.",
        "html": "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Confining: one way, fixed</span><div class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\"></span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Bounded: the choices that matter, and a way back</span><div class=\"db-row db-row--tight\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq db-sq--accent\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-btn db-btn--sm db-btn--quiet\">Reset</span></div></div><div class=\"db-col db-col--tight\"><span class=\"db-note\">Unbounded: every decision handed back</span><div class=\"db-row db-row--tight\"><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span><span class=\"db-sq\"></span></div></div></div></div>"
      },
      "what": "Tognazzini's autonomy principle has two halves. The first is ownership: users gain a sense of mastery when placed in charge, and should be able to make their own decisions, even ones that are aesthetically poor or less efficient. The second is that autonomy is not the absence of rules. He argues people do not feel free without boundaries, and that a comfortable environment is neither confining nor infinite. The rest of his section is about status, since control cannot be exercised without accurate, current information about system state.",
      "why": "It is a corrective at both ends: against products that lock people into one way of working, and against the idea that giving people everything is the same as serving them.",
      "how": [
        "Let people configure the things that are genuinely theirs, including appearance and choice of tools.",
        "Keep the boundaries that prevent harm, and be able to say what each one prevents.",
        "Make status visible at a glance rather than on request, and keep it accurate.",
        "Where you set a threshold that affects behaviour, such as a double-click interval, let people change it."
      ],
      "example": "Tognazzini's own example is an iPhone and iPad system update whose progress indicator said roughly five minutes while the whole job routinely ran past an hour, because the five minutes covered only the system software and not the data reloading that followed. His point is that status can be technically current and still leave people unable to predict anything.",
      "numbers": "",
      "pitfall": "The principle is quoted as a licence to expose every setting, which produces a preferences screen instead of a decision. Tognazzini's own text warns against giving users enough rope to hang themselves.",
      "source": "Bruce Tognazzini, First Principles of Interaction Design, revised and expanded (asktog.com, 2014)",
      "verify": {
        "status": "verified",
        "note": "Autonomy section confirmed on Tognazzini's own page, revised 5 March 2014, copyright dated 1978 to 2014: the ownership statement, the argument that people feel most comfortable within boundaries rather than in an infinite space, and the status sub-principles. The update anecdote is his, told about iPhone and iPad updates at the time of writing, and it is attributed to him rather than presented as a verified fact about the product."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "Overturned from cut this pass. Most of it is genuinely covered elsewhere: the ownership half by 553 and 566, the status half by 551. What survives is the one argument none of those make, that freedom needs boundaries and an infinite space is not a comfortable one, which is the answer to a product that mistakes a settings screen for control. That earns it a place beside the others rather than deletion."
      },
      "related": [
        566,
        553,
        551,
        575
      ]
    },
    {
      "n": 570,
      "title": "Explorable interfaces",
      "aka": [
        "Safe exploration",
        "Well-marked roads and landmarks"
      ],
      "oneLine": "Let people try things and get back, so poking around costs nothing.",
      "demo": {
        "caption": "Both did four things to the picture. Only the right one kept the road back, step by step.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No record of the route</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Current state</span><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Cancel</span></div><span class=\"db-note\">Cancel throws away all four</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Every step still standing</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">History</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-note\">Open</span></span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-note\">Crop</span></span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-note\">Levels</span></span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span class=\"db-note db-note--accent\">Blur</span></span><span class=\"db-note\">Click any dot to stand there again</span></div></div></div></div></div>"
      },
      "what": "Bruce Tognazzini lists this among his First Principles of Interaction Design and sums it up as giving users well-marked roads and landmarks, then letting them shift into four-wheel drive. Beginners follow the obvious path. Anyone who wants to wander off it can, because the interface does not punish them for it. Tognazzini's condition for this is undo: exploration only feels safe if every step back out is available.",
      "why": "People learn software by trying it, not by reading about it. If a wrong turn loses data or lands them somewhere they cannot escape, they stop trying and stick to the two or three things they already know. Making the cost of a mistake near zero is what turns a nervous user into a competent one.",
      "how": [
        "Give every action a way back before you ship the action itself.",
        "Mark the main route clearly so a first-time user does not have to explore in order to do the ordinary thing.",
        "Show where a control will take someone before they commit, using previews rather than warnings.",
        "Never lose someone's context when they back out; return them to where they were, not to the start."
      ],
      "example": "Photoshop's history panel. You can try twenty filters in a row and step back through every one of them, which is why people experiment in it at all.",
      "numbers": "",
      "pitfall": "Teams add an exit but forget the state. The user cancels out of a wizard and finds the form they half-filled has been wiped, which teaches them never to open it again.",
      "source": "Bruce Tognazzini, First Principles of Interaction Design (asktog.com).",
      "verify": {
        "status": "verified",
        "note": "Read the Explorable Interfaces entry on Tognazzini's First Principles page, including the four-wheel-drive phrasing and the requirement for undo."
      },
      "belongs": {
        "verdict": "core",
        "why": "One of the named first principles of interaction design and the reason undo exists at all."
      },
      "related": [
        566,
        584,
        586,
        599
      ]
    },
    {
      "n": 571,
      "title": "Latency reduction",
      "aka": [
        "Response time",
        "Acknowledge the click"
      ],
      "oneLine": "Answer input fast, and when you cannot, say something about the wait.",
      "demo": {
        "caption": "Published thresholds on a log scale: 50 ms to acknowledge, one second to keep the thought, ten and they have gone.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 640 118\"><text class=\"t\" x=\"24\" y=\"18\">seconds, log scale</text><path class=\"s-mute\" d=\"M24 68 H616\"/><path class=\"s-accent\" d=\"M172 56 V80 M320 56 V80 M468 56 V80\"/><path class=\"s-mute\" d=\"M127 60 V76\"/><text class=\"t\" x=\"98\" y=\"44\" text-anchor=\"middle\">feels instant</text><text class=\"t\" x=\"246\" y=\"44\" text-anchor=\"middle\">thought held</text><text class=\"t\" x=\"394\" y=\"44\" text-anchor=\"middle\">attention held</text><text class=\"t\" x=\"542\" y=\"44\" text-anchor=\"middle\">attention gone</text><text class=\"t\" x=\"172\" y=\"94\" text-anchor=\"middle\">0.1 s</text><text class=\"t\" x=\"320\" y=\"94\" text-anchor=\"middle\">1 s</text><text class=\"t\" x=\"468\" y=\"94\" text-anchor=\"middle\">10 s</text><text class=\"t\" x=\"24\" y=\"94\">10 ms</text><text class=\"t\" x=\"616\" y=\"94\" text-anchor=\"end\">100 s</text><text class=\"t\" x=\"127\" y=\"110\" text-anchor=\"middle\">50 ms: acknowledge the press</text><text class=\"t\" x=\"468\" y=\"110\" text-anchor=\"middle\">past 10 s: progress and a way out</text></svg></div>"
      },
      "what": "Tognazzini's principle has two halves. Acknowledge the input almost immediately, and where the work behind it takes real time, report on it rather than going quiet. Jakob Nielsen's response time chapter gives the widely used bands, drawn from R. B. Miller's 1968 paper and from Card, Robertson and Mackinlay in 1991: about a tenth of a second feels instant, one second keeps a train of thought going, and past ten seconds attention has gone elsewhere and you need a progress indicator plus a way out.",
      "why": "Waiting without feedback reads as breakage, and a user who thinks a control is broken presses it again. Acknowledging the press separates the question of whether the system heard you from the question of how long it will take, and those two anxieties are what make slow software feel worse than it is.",
      "how": [
        "Change something visible the moment the control is pressed, before any network call returns.",
        "Keep interaction responses inside a tenth of a second and page or view transitions inside a second where you can.",
        "For anything over ten seconds, show progress and offer a cancel.",
        "Measure real latency on a slow connection and a mid-range phone, not on your own machine."
      ],
      "example": "A submit button that dims and shows a spinner on press, then swaps to a confirmation, rather than sitting inert while the request runs.",
      "numbers": "Tognazzini: acknowledge a button press within 50 milliseconds; past 15 seconds, end the wait with a noticeable sound and a strong visual signal so people know to come back. Nielsen, from Miller (1968) and Card et al. (1991): 0.1 second feels instantaneous, 1 second preserves flow of thought, 10 seconds is the limit of attention.",
      "pitfall": "Designers treat the ten-second figure as a budget rather than a ceiling. It is the point at which the user has already given up, not a target to design towards.",
      "source": "Bruce Tognazzini, First Principles of Interaction Design; Jakob Nielsen, Usability Engineering (1993), chapter 5.",
      "verify": {
        "status": "verified",
        "note": "The 50 millisecond figure is in the running text of Tognazzini's Latency Reduction entry. The 15 second figure is not: it sits in a chart on that page, captioned Delay Feedback Times and Indicators, whose last row reads over 15 seconds, same as over 10 plus add at the end a noticeable sound and strong visual indication so users know to return. I opened the chart image to read it. Nielsen's Response Times article gives the 0.1 / 1 / 10 second limits and cites Miller 1968 and Card et al. 1991. Tognazzini's 50 ms and Nielsen's 100 ms are different claims from different sources, so both are quoted rather than merged."
      },
      "belongs": {
        "verdict": "core",
        "why": "Response time is a design variable, not just an engineering one, and the thresholds are published and testable."
      },
      "related": [
        237,
        563,
        594,
        595
      ]
    },
    {
      "n": 572,
      "title": "Learnability",
      "aka": [
        "Ease of first use"
      ],
      "oneLine": "How quickly a new user gets to competence, measured rather than assumed.",
      "demo": {
        "caption": "Two correct answers to the same question. What changed is not the user's ability but how often they come back.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Used once a year</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Council tax reference</span><span>The ten digit number at the top right of your bill.</span><span class=\"db-input\">6 000 000 000</span><span class=\"db-note\">Nothing assumed, nothing to learn</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Used all day</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-btn db-btn--sm db-btn--ghost\">V</span><span class=\"db-btn db-btn--sm db-btn--ghost\">M</span><span class=\"db-btn db-btn--sm db-btn--ghost\">C</span><span class=\"db-btn db-btn--sm db-btn--ghost\">P</span><span class=\"db-btn db-btn--sm db-btn--ghost\">R</span></div><span class=\"db-note\">Everything assumed, learned once</span></div></div></div></div></div>"
      },
      "what": "Learnability is how fast someone with no prior exposure can start doing useful work. Tognazzini lists it as a first principle and makes the trade-off explicit: how much you spend on learnability depends on how often the thing is used. Something a person touches once in their life should be almost self-explanatory. Something they use eight hours a day can afford a steeper start in exchange for speed later. He also warns against testing only the first hour, because the design that wins the first hour often loses the tenth.",
      "why": "Learnability decides whether a product gets used at all, and it is the one usability quality that is cheap to test with five strangers and a task. It also stops teams optimising an interface for the people who already know it, which is the default failure mode of any team that uses its own product daily.",
      "how": [
        "Decide up front whether this is a once-in-a-lifetime task or a daily one, and design the learning curve to match.",
        "Test with people who have never seen it, and give them a real task rather than a tour.",
        "Test again after repeated use, so you can see whether the beginner-friendly choice slows down regulars.",
        "Count the things a new user has to be told before they can start. Reduce that count."
      ],
      "example": "A council tax form is used once a year by most people, so every field carries its own explanation. A code editor is used all day, so it hides almost everything behind shortcuts.",
      "numbers": "",
      "pitfall": "Optimising a professional tool for the first-run experience. Adding hand-holding to something used daily makes the interface slower forever to save one afternoon of learning.",
      "source": "Bruce Tognazzini, First Principles of Interaction Design; learnability is also one of the usability attributes in Jakob Nielsen's Usability Engineering (1993).",
      "verify": {
        "status": "verified",
        "note": "Read Tognazzini's Learnability entry, which sets out the frequency-of-use trade-off and the warning about testing beyond the initial learning curve."
      },
      "belongs": {
        "verdict": "core",
        "why": "A named quality of interaction design with a direct effect on how you shape defaults, labelling and disclosure."
      },
      "related": [
        580,
        590,
        599,
        600
      ]
    },
    {
      "n": 573,
      "title": "Metaphor",
      "aka": [
        "Interface metaphor",
        "Desktop metaphor"
      ],
      "oneLine": "Borrowing a familiar object or idea so the user arrives already knowing something.",
      "demo": {
        "caption": "One document that belongs in two places. A paper folder can only hold it once, so the metaphor makes a copy.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Held to the metaphor</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Clients / Acme</span><div class=\"db-card\"><span>Contract.pdf</span></div><span class=\"db-label\">Legal / 2026</span><div class=\"db-card\"><span>Contract.pdf (copy)</span></div><span class=\"db-note\">Two files. Edit one and they disagree.</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Metaphor dropped</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span>Contract.pdf</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Acme</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Legal 2026</span></div></div></div><span class=\"db-note\">One file, found from both places</span></div></div></div></div>"
      },
      "what": "An interface metaphor maps controls onto something the user already understands: files in folders, a shopping trolley, a bin. Tognazzini's advice is to choose metaphors that let people grasp the model at once, to appeal to more than one sense, and to abandon a metaphor as soon as it starts limiting the design. Alan Cooper argued the opposite way round in The Myth of Metaphor, saying most interface conventions are learned idioms rather than metaphors, and that hunting for a metaphor for every feature produces cramped, literal designs that cannot scale.",
      "why": "A good metaphor buys you free comprehension on first contact. A bad one costs you forever, because every new feature has to be squeezed into a physical analogy that was never designed to hold it.",
      "how": [
        "Use metaphor for the first thirty seconds of understanding, not as the architecture of the product.",
        "Check the metaphor against your hardest feature before you commit to it, not your easiest.",
        "Drop the visual literalism once the convention is learned; the icon can stay long after the skeuomorphism goes.",
        "Watch for metaphors that do not travel. A floppy disk save icon means nothing to anyone who never used one, and only survives as a learned idiom."
      ],
      "example": "The Macintosh desktop of files, folders and a wastebasket. It made the file system understandable, and then made nested search, tagging and cloud sync awkward to explain for decades afterwards.",
      "numbers": "",
      "pitfall": "Building the whole product around the metaphor. Once you have committed to a bookshelf, every feature has to be a book, and the useful thing you wanted to add is not a book.",
      "source": "Bruce Tognazzini, First Principles of Interaction Design; Alan Cooper, The Myth of Metaphor, Visual Basic Programmer's Journal (June 1995), carried into About Face.",
      "verify": {
        "status": "verified",
        "note": "Read Tognazzini's Metaphors entry in full. Its four principle headings are: choose metaphors that let users instantly grasp the finest details of the conceptual model; bring metaphors alive by appealing to sight, sound, touch and proprioception or kinesthesia; expand beyond literal interpretation of real-world counterparts; and if a metaphor is holding you back, abandon it. That confirms both the multi-sense point and the abandonment advice as written. Upgraded during review: the earlier pass relied on secondary sources for Cooper, but I reached the original article, which carries the byline Alan Cooper, Chairman and Founder, June 1995, originally published in Visual Basic Programmer's Journal, and states plainly that metaphors do not scale very well and that one that works for a simple process will often fail as that process grows in size or complexity."
      },
      "belongs": {
        "verdict": "core",
        "why": "A standing decision in every interface: how much to borrow from the physical world, and when to stop."
      },
      "related": [
        536,
        537,
        578,
        852
      ]
    },
    {
      "n": 574,
      "title": "Protect the user's work",
      "aka": [
        "Never lose their data"
      ],
      "oneLine": "Nothing the user has typed or made should ever be destroyed by the system.",
      "demo": {
        "caption": "One postcode was rejected. On the left every other answer went with it; on the right only the postcode is flagged.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Page returned empty</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>Check your details and try again.</span><span class=\"db-label\">Name</span><span class=\"db-input\">&#160;</span><span class=\"db-label\">Address</span><span class=\"db-input\">&#160;</span><span class=\"db-label\">Postcode</span><span class=\"db-input db-input--error\">&#160;</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Answers redisplayed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>Add the last letter of the postcode.</span><span class=\"db-label\">Name</span><span class=\"db-input\">J. Okonkwo</span><span class=\"db-label\">Address</span><span class=\"db-input\">Flat 2, 14 Bridge Street, Leeds</span><span class=\"db-label\">Postcode</span><span class=\"db-input db-input--error\">LS1 4A</span></div></div></div></div></div>"
      },
      "what": "Tognazzini states this one flatly: make sure users never lose their work, short of an unavoidable power cut. That means continuous saving rather than an explicit save step, full undo, and never discarding input because of a validation failure, a session expiry or a back button. He singles out forms and travel sites as habitual offenders, because they wipe an entry when one field is wrong.",
      "why": "Losing work is the single worst thing an interface can do to someone, because unlike a confusing label it destroys something that cannot be recreated by trying harder. One incident is usually enough to end trust in the product.",
      "how": [
        "Save drafts locally as the user types, not on submit.",
        "On a validation error, redisplay every field exactly as entered and mark only the failing one.",
        "Keep entered data across a session timeout, and restore it after re-authentication.",
        "Treat the browser back button and an accidental refresh as things that will happen, and test them."
      ],
      "example": "A long insurance quote form that rejects a postcode format and returns an empty page. The user has to re-enter thirty fields, and most of them leave instead.",
      "numbers": "",
      "pitfall": "Teams protect against the dramatic loss, a crash, and ignore the everyday one, a mistyped field wiping a form. The second happens far more often.",
      "source": "Bruce Tognazzini, First Principles of Interaction Design.",
      "verify": {
        "status": "verified",
        "note": "Read Tognazzini's Protect Users' Work entry, including the wording about never losing work and the criticism of forms that destroy entries."
      },
      "belongs": {
        "verdict": "core",
        "why": "An absolute rule that governs autosave, validation and error handling across every interface that takes input."
      },
      "related": [
        575,
        584,
        596,
        636
      ]
    },
    {
      "n": 575,
      "title": "State and state persistence",
      "aka": [
        "Track state",
        "Resume where you left off"
      ],
      "oneLine": "The system should remember where the user was and put them back there.",
      "demo": {
        "caption": "The same dialogue on two days. Compare each pair of rows: only the right one opens where you left it.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Opens at the defaults</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Yesterday</span><span class=\"db-row db-row--between db-row--nowrap\"><span>Invoices / 2026</span><span class=\"db-note\">Newest first</span></span><span class=\"db-label\">Today</span><span class=\"db-row db-row--between db-row--nowrap\"><span>Documents</span><span class=\"db-note\">A to Z</span></span><span class=\"db-note\">Two clicks and a re-sort, every time</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Opens where you stopped</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Yesterday</span><span class=\"db-row db-row--between db-row--nowrap\"><span>Invoices / 2026</span><span class=\"db-note\">Newest first</span></span><span class=\"db-label\">Today</span><span class=\"db-row db-row--between db-row--nowrap\"><span>Invoices / 2026</span><span class=\"db-note\">Newest first</span></span><span class=\"db-note\">Nothing to redo</span></div></div></div></div></div>"
      },
      "what": "Tognazzini's State principle says the interface should keep track of where the user is, what they were doing, what they did last time, and hand that back on return. Scroll position, open panels, sort order, half-finished drafts, the last folder they used. He also says this state should be held on the server so it follows the person across devices, and stored securely.",
      "why": "Every scrap of state you fail to keep is work the user has to redo, and redoing work is the part of software people describe as annoying rather than difficult. Persistence also removes a class of memory load: the user does not have to remember their own settings if the product does.",
      "how": [
        "Persist view state such as sort, filter, zoom and scroll position, not just documents.",
        "Restore the last used location and options rather than resetting to a default every session.",
        "Distinguish state that should follow the person across devices from state that belongs to this device.",
        "Give an obvious way to reset to standard settings, because remembered state eventually goes stale."
      ],
      "example": "A file dialog that opens in the folder you last used rather than in Documents. Small, and it saves several clicks every single time.",
      "numbers": "",
      "pitfall": "Persisting a filter without showing it. The user returns a week later, sees three results, and concludes the data has gone missing.",
      "source": "Bruce Tognazzini, First Principles of Interaction Design.",
      "verify": {
        "status": "verified",
        "note": "Read Tognazzini's State entry, which covers tracking location, prior sessions and current activity, and storing state on servers so users can resume."
      },
      "belongs": {
        "verdict": "core",
        "why": "Decides how much repeated work an interface imposes, and shapes navigation, forms and settings design."
      },
      "related": [
        567,
        574,
        583,
        636
      ]
    },
    {
      "n": 576,
      "title": "Modelessness",
      "aka": [
        "Modeless design",
        "Don't mode me in"
      ],
      "oneLine": "Avoid states where the same input does different things depending on hidden context.",
      "demo": {
        "caption": "The same key, pressed twice. On the left the result depends on a state that is nowhere near your eyes.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Modal: d means two things</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Press d</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>the quick brownd</span><span class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">a letter arrives</span><span class=\"db-note\">insert</span></span></div></div><span class=\"db-note\">Press d</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>&#160;</span><span class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">the line is gone</span><span class=\"db-note\">command</span></span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Modeless: d means one thing</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Press d</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>the quick brownd</span><span class=\"db-note\">a letter arrives</span></div></div><span class=\"db-note\">Press d</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>the quick browndd</span><span class=\"db-note\">a letter arrives</span></div></div><span class=\"db-note\">Deleting is select, then Delete</span></div></div></div></div>"
      },
      "what": "Larry Tesler defined a mode as a state of the interface that lasts a while, is not tied to any particular object, and exists only to change how input is interpreted. Jef Raskin sharpened it in The Humane Interface into a two-part test: an interface is modal with respect to a given gesture when the current state is not where the user's attention is, and the interface answers that same gesture differently depending on the state. Both halves are needed. A state the user is actually looking at is not the problem. The classic case is a text editor where typing sometimes inserts characters and sometimes issues commands. Tesler campaigned against modes for decades and drove around with a number plate reading NO MODES.",
      "why": "Modes cause errors that feel stupid and are not. The user's hands act on a habit while their attention is on the content, so the wrong interpretation of a keystroke is inevitable rather than careless. Removing a mode removes a whole family of mistakes at once.",
      "how": [
        "Ask what a given key or gesture does in every state. If the answer differs and the state is not visible, you have a mode.",
        "Where a mode is genuinely needed, make it loud and impossible to miss at the point of attention, not in a distant status bar.",
        "Prefer selecting an object then acting on it over switching the whole interface into a tool state.",
        "Replace long-lived modes with spring-loaded ones held by the user (577)."
      ],
      "example": "vi's insert and command modes. Powerful for experts, and the reason so many first-time users have typed a paragraph of text into a terminal as commands.",
      "numbers": "",
      "pitfall": "Indicating a mode only in a corner of the screen. The user's eyes are on the cursor, so the indicator might as well not exist.",
      "source": "Larry Tesler's definition of a mode; Jef Raskin, The Humane Interface (2000).",
      "verify": {
        "status": "verified",
        "note": "Checked Tesler's definition (a state that lasts for a period, is not associated with any particular object, and has no role other than to place an interpretation on operator input) and Raskin's two-condition formulation, plus the NO MODES number plate, against the Wikipedia article on modes in user interfaces, which quotes both sources. Corrected during review: the entry previously gave only Raskin's first condition, which on its own is not his definition."
      },
      "belongs": {
        "verdict": "core",
        "why": "A named structural property of interfaces that predicts a specific class of user error."
      },
      "related": [
        577,
        578,
        579,
        586
      ]
    },
    {
      "n": 577,
      "title": "Quasimodes",
      "aka": [
        "Spring-loaded modes",
        "Kinaesthetically held modes"
      ],
      "oneLine": "A mode the user holds open with a finger, so they cannot forget they are in it.",
      "demo": {
        "caption": "Both put the keyboard into capitals. Only the right one ends the moment you stop holding it.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Caps Lock: a toggle</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Press once, let go</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Caps Lock</span></div><span class=\"db-note\">On, and nothing is holding it</span><div class=\"db-ui\">THIS IS NOT WHAT I MEANT</div><span class=\"db-note\">Still on ten minutes later</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Shift: held open</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Press and keep pressing</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Shift</span></div><span class=\"db-note\">On, and your finger is holding it</span><div class=\"db-ui\">This is what I meant</div><span class=\"db-note\">Let go and it ends</span></div></div></div></div>"
      },
      "what": "Raskin's answer to the mode problem in The Humane Interface. If a mode is held in place by a continuous physical action, such as keeping the Shift key down, the user's own muscles remind them the mode is active. He calls these quasimodes, from quasi meaning almost, and also refers to them as spring-loaded modes. Let go and the mode ends. There is no state to remember and nothing to get stuck in.",
      "why": "The error a mode causes is a memory failure, and a quasimode removes the memory requirement entirely. It gives you the power of a mode with almost none of the cost, which is why every keyboard still has a Shift key rather than only a Caps Lock.",
      "how": [
        "Where you need a temporary alternative behaviour, bind it to a held key or a held press rather than a toggle.",
        "Compare Shift with Caps Lock in your own design. If it can be left on by accident, it is a mode, not a quasimode.",
        "On touch, use press-and-hold as the held state and end it cleanly on release.",
        "Make the held state visible as well, so the user gets confirmation and not just proprioception."
      ],
      "example": "Holding the space bar in Photoshop or Figma to pan. Release and you are back to the previous tool, with nothing to switch off.",
      "numbers": "",
      "pitfall": "Offering a held modifier that is physically hard to sustain. A quasimode that needs two hands and a stretch will be abandoned for a toggle, and the toggle brings the mode problem back.",
      "source": "Jef Raskin, The Humane Interface (Addison-Wesley, 2000).",
      "verify": {
        "status": "verified",
        "note": "Checked the definition and the quasi- etymology against the Wikipedia article on modes in user interfaces, which attributes the term to Raskin's The Humane Interface and gives spring-loaded modes as a synonym."
      },
      "belongs": {
        "verdict": "core",
        "why": "A specific, named design move that solves the mode problem rather than just describing it."
      },
      "related": [
        576,
        578,
        590,
        807
      ]
    },
    {
      "n": 578,
      "title": "Direct manipulation",
      "aka": [
        "See and point",
        "Drag it yourself"
      ],
      "oneLine": "Act on a visible object itself, with immediate visible results, instead of typing a command about it.",
      "demo": {
        "caption": "Left changes two numbers that stand for the shape. Right changes the shape, and the size follows the drag.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Type about the object</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Resize shape</span><span class=\"db-label\">Width</span><span class=\"db-input\">320</span><span class=\"db-label\">Height</span><span class=\"db-input\">180</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Apply</span></div><span class=\"db-note\">The shape is on another screen</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Act on the object</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 132\"><rect class=\"s\" x=\"20\" y=\"20\" width=\"110\" height=\"70\"/><rect class=\"f\" x=\"17\" y=\"17\" width=\"6\" height=\"6\"/><rect class=\"f\" x=\"127\" y=\"17\" width=\"6\" height=\"6\"/><rect class=\"f\" x=\"17\" y=\"87\" width=\"6\" height=\"6\"/><rect class=\"f\" x=\"127\" y=\"87\" width=\"6\" height=\"6\"/><rect class=\"s-accent\" stroke-dasharray=\"4 3\" x=\"20\" y=\"20\" width=\"150\" height=\"95\"/><path class=\"s-accent\" d=\"M134 94 L164 111\"/><path class=\"s-accent\" d=\"M164 111 L155 110 M164 111 L160 103\"/><rect class=\"f-accent\" x=\"167\" y=\"112\" width=\"6\" height=\"6\"/><text class=\"t\" x=\"20\" y=\"130\">the shape resizes while you drag</text></svg></div></div></div>"
      },
      "what": "Ben Shneiderman named this in 1982 and set it out in Direct Manipulation: A Step Beyond Programming Languages in IEEE Computer in August 1983. Three things define it: the objects of interest stay continuously visible, actions are physical gestures on those objects rather than typed syntax, and the operations are rapid, incremental and reversible with their effect shown at once. Dragging a file into a folder is direct manipulation. Typing a move command with two paths is not.",
      "why": "It replaces recall with recognition. The user does not have to remember a command name or its argument order, because the thing they want to change is on screen and they point at it. Immediate feedback also lets people correct mid-action rather than after the fact.",
      "how": [
        "Let the user act on the object rather than on a control that refers to the object.",
        "Show the result during the gesture, not after it. A drag should move the thing, not a ghost outline that resolves later.",
        "Keep every direct action reversible, since the whole point is that trying is cheap.",
        "Do not force direct manipulation onto bulk work. Renaming four hundred files is a job for a command, not a mouse."
      ],
      "example": "Dragging the corner handle of a shape in any drawing tool and watching it resize live, rather than typing new width and height values and pressing apply.",
      "numbers": "",
      "pitfall": "Direct manipulation scales badly. It is excellent for one object and painful for a thousand, so an interface built entirely on dragging leaves power users with no way to work in batches.",
      "source": "Ben Shneiderman, Direct Manipulation: A Step Beyond Programming Languages, IEEE Computer (August 1983); term introduced 1982.",
      "verify": {
        "status": "verified",
        "note": "Checked the 1982 coining, the 1983 IEEE Computer paper and the three defining properties against the Wikipedia article on direct manipulation interfaces, which quotes the paper."
      },
      "belongs": {
        "verdict": "core",
        "why": "The founding idea of graphical interfaces, and still the test for whether a control is doing real work or just describing it."
      },
      "related": [
        573,
        579,
        611,
        896
      ]
    },
    {
      "n": 579,
      "title": "Object-action versus action-object order",
      "aka": [
        "Noun-verb order",
        "Select then act",
        "OAI model"
      ],
      "oneLine": "Pick the thing first, then choose what to do to it, rather than the other way round.",
      "demo": {
        "caption": "Same job, opposite order. Choosing the object first lets the menu offer only what that object supports.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Action first</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">1. Choose an action</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Rename</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Merge</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Delete</span></div><span class=\"db-label\">2. Name the target</span><span class=\"db-input\">type the file name</span><span class=\"db-note\">Every action offered, whether it applies or not</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Object first</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">1. Choose the object</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--open\"></span><span>notes.txt</span></span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span>budget.xlsx</span></span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--open\"></span><span>logo.svg</span></span><span class=\"db-label\">2. Choose from what fits</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Rename</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Delete</span></div><span class=\"db-note\">Merge needs two files, so it is not there</span></div></div></div></div></div>"
      },
      "what": "Shneiderman's Object-Action Interface model puts the objects of a task first and the actions on them second, which is how graphical interfaces normally read: select a file, then delete it. The reverse order, action first, is how command lines and older menu systems work: choose delete, then say what to delete. Object first lets the interface show only the actions that apply to the current selection and lets the user change their mind about the target without restarting.",
      "why": "Object-first keeps the user's attention on their own content rather than on a list of the system's capabilities, and it makes the available actions self-revealing because the interface can filter them to the selection. Action-first is better when the target is a large or unbounded set, which is why command lines and search-driven interfaces still use it.",
      "how": [
        "Default to select-then-act for anything the user can see and point at.",
        "Grey out or hide actions that do not apply to the current selection, which is only possible in object-first order.",
        "Where you use action-first, such as a command palette, let the user pick the target afterwards without cancelling.",
        "Do not mix the two orders inside one screen. Users copy the first pattern they learn and then get it wrong everywhere else."
      ],
      "example": "Right-clicking a layer in Figma shows only the operations that layer supports. Typing a command in a terminal requires you to name the target yourself, correctly, in advance.",
      "numbers": "",
      "pitfall": "A toolbar where some buttons act on the selection and others start a mode that waits for a target. The user clicks the second kind expecting the first and acts on the wrong object.",
      "source": "Ben Shneiderman, Object-Action Interface model, in Designing the User Interface.",
      "verify": {
        "status": "verified",
        "note": "Confirmed the Object-Action Interface model is a named chapter section in Shneiderman's Designing the User Interface, via the book's table of contents and HCI course materials that describe it. The noun-verb phrasing is common in older Apple guidance, which I did not read this session, so it is listed only as an alternative name."
      },
      "belongs": {
        "verdict": "core",
        "why": "A structural choice that determines menu design, selection behaviour and how discoverable a set of actions is."
      },
      "related": [
        578,
        576,
        610,
        590
      ]
    },
    {
      "n": 580,
      "title": "Progressive disclosure",
      "aka": [
        "Show the common, hide the rare"
      ],
      "oneLine": "Show the few options most people need, and put the rest one step away.",
      "demo": {
        "caption": "The same dialog, the same capability. On the right, six controls almost nobody changes sit one click away.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Nine to read</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-row db-row--between db-row--nowrap\"><span>Printer</span><span class=\"db-note\">Hall 2F</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Copies</span><span class=\"db-note\">1</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Pages</span><span class=\"db-note\">All</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Two-sided</span><span class=\"db-note\">Off</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Scaling</span><span class=\"db-note\">100%</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Paper size</span><span class=\"db-note\">A4</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Orientation</span><span class=\"db-note\">Portrait</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Colour profile</span><span class=\"db-note\">sRGB</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Collate</span><span class=\"db-note\">On</span></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three to read</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-row db-row--between db-row--nowrap\"><span>Printer</span><span class=\"db-note\">Hall 2F</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Copies</span><span class=\"db-note\">1</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Pages</span><span class=\"db-note\">All</span></span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">More settings</span></div><span class=\"db-note\">The other six are behind it, unchanged</span></div></div></div></div></div>"
      },
      "what": "Present the small set of controls that cover the common case, and offer the specialised set on request. The advanced options are still there, one deliberate step further in, so nobody is locked out. Nielsen Norman Group describe it as a two-step approach and, writing in 2006, said the technique was already more than thirty years old and proven in countless applications. It reduces what a new user has to read without cutting what an experienced user can do.",
      "why": "The cost of an option is not only the screen space it takes but the reading and deciding it forces on everyone who does not need it. Moving rarely used controls behind one click makes the frequent path faster for the majority and costs the minority a single extra action.",
      "how": [
        "Work out which settings the great majority of users never change, and put those behind an Advanced section.",
        "Make the second level a real, labelled place, not a hover reveal, so it can be found again.",
        "Never hide anything the user must set in order to finish the task.",
        "Split by importance, not by which controls happen to look similar."
      ],
      "example": "The print dialog in most operating systems: copies, pages and printer up front, with duplex, scaling and colour management behind a More Settings control.",
      "numbers": "",
      "pitfall": "Using it as a tidying tool. If you hide something people genuinely need, you have not simplified the interface, you have added a step and a search.",
      "source": "Origin contested. Nielsen Norman Group treat it as long-established practice; Wikipedia credits Kristina Hooper Woolsey of the Apple Human Interface Group with the seminal idea in 1985.",
      "verify": {
        "status": "disputed",
        "note": "The technique is well documented and I read NN/g's article on it, which does not name an originator and states only that it is more than thirty years old. The Wikipedia article attributes it to Kristina Hooper Woolsey writing in 1985, citing Norman and Draper's User Centered System Design (1986). I could not check that primary text, so the attribution is reported rather than asserted."
      },
      "belongs": {
        "verdict": "core",
        "why": "A standard tool for managing complexity that shapes settings, forms and toolbars in almost every product."
      },
      "related": [
        581,
        572,
        600,
        583
      ]
    },
    {
      "n": 581,
      "title": "Staged disclosure",
      "aka": [
        "Sequential disclosure",
        "Wizards"
      ],
      "oneLine": "Break one task into ordered steps and show only the step the user is on.",
      "demo": {
        "caption": "Five stages in a fixed order, one on screen. Delivery can only be priced because step 2 gave an address.",
        "html": "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-note\">Basket</span></span><span class=\"db-arrow\">&#8594;</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm\"></span><span class=\"db-note\">Address</span></span><span class=\"db-arrow\">&#8594;</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--accent\"></span><span class=\"db-note db-note--accent\">Delivery</span></span><span class=\"db-arrow\">&#8594;</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-note\">Payment</span></span><span class=\"db-arrow\">&#8594;</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--mute\"></span><span class=\"db-note\">Review</span></span></div><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Step 3 of 5</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--accent\"></span><span>Standard to LS1 4AG, 2 to 3 days, free</span></span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-dot--sm db-dot--open\"></span><span>Next day to LS1 4AG, 4.95</span></span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Back</span><span class=\"db-btn db-btn--sm\">Continue</span></div></div></div><span class=\"db-note\">Payment and review hold nothing that can be answered yet</span></div></div>"
      },
      "what": "Where progressive disclosure splits controls by how important they are, staged disclosure splits them by when they are needed. The user moves through a fixed sequence and each screen holds only what that stage requires. Nielsen Norman Group set the two side by side: progressive disclosure hides advanced features behind a hierarchy and helps learnability, staged disclosure divides a task linearly and helps simplicity.",
      "why": "For a task with a genuine order, staging removes the need to work out what to do first. It also lets you validate as you go and gives a natural place to show progress. The trade is flexibility: the user follows your order rather than their own.",
      "how": [
        "Only stage tasks that have a real dependency order. If the steps are independent, one page is faster.",
        "Show which stage the user is on and how many remain (618).",
        "Allow backward movement without loss, and carry every answer forward.",
        "Keep the last stage a review, so the user can see everything they entered before it commits."
      ],
      "example": "A checkout flow: basket, delivery address, delivery method, payment, review. Each screen depends on the one before it.",
      "numbers": "",
      "pitfall": "Staging a task that has no order, which turns a two-minute form into five page loads and lets people abandon it four separate times.",
      "source": "Jakob Nielsen / Nielsen Norman Group, Progressive Disclosure, which defines staged disclosure by contrast.",
      "verify": {
        "status": "verified",
        "note": "Read NN/g's Progressive Disclosure article by Jakob Nielsen, dated 3 December 2006. Its comparison table gives navigation between displays as hierarchical for progressive and linear for staged, and gives the main usability benefit as learnability for progressive and simplicity for staged, which is the distinction this entry draws."
      },
      "belongs": {
        "verdict": "core",
        "why": "A named and distinct structure for sequenced tasks, and the design basis for wizards and checkouts."
      },
      "related": [
        580,
        618,
        595,
        564
      ]
    },
    {
      "n": 582,
      "title": "Deferred choice",
      "aka": [
        "Deferred Choices",
        "Answer it later"
      ],
      "oneLine": "Let people finish the main job now and come back to the optional questions later.",
      "demo": {
        "caption": "Same three optional questions. On the right the photo is already posted and they are asked afterwards.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">All of it before anything happens</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-block\"></div><span class=\"db-label\">Caption (required)</span><span class=\"db-input\">&#160;</span><span class=\"db-label\">Location (required)</span><span class=\"db-input\">&#160;</span><span class=\"db-label\">Tags (required)</span><span class=\"db-input\">&#160;</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Post</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Post now, answer later</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-block\"></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Post</span></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span>Posted. Add a caption, location or tags?</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Add details</span><span class=\"db-btn db-btn--sm db-btn--quiet\">Not now</span></div></div></div><span class=\"db-note\">The three questions survive, off the critical path</span></div></div></div></div>"
      },
      "what": "A pattern from Jenifer Tidwell's Designing Interfaces, summed up in her own phrasing as not wanting to answer that now and just wanting to finish. Anything that is not needed to complete the task is left out of the required path and offered afterwards. The user gets the thing they came for, and the optional detail is collected when they have a reason to care about it.",
      "why": "Every optional field on the required path is a chance to abandon. Deferring them raises completion and also produces better data, because someone filling in a profile after they have seen the value of the product answers more carefully than someone blocked at the door.",
      "how": [
        "Separate the fields that are genuinely required to complete the task from everything else, and cut the rest from the flow.",
        "Offer the deferred items in a clearly optional place afterwards, with a reason to bother.",
        "Never lose the deferred item silently. Leave a visible prompt the user can return to.",
        "Watch for a false requirement. Most fields marked mandatory are mandatory only because somebody in the business asked for them."
      ],
      "example": "Posting a photo before being asked to add a caption, location or tags, rather than being blocked until all four are filled in.",
      "numbers": "",
      "pitfall": "Deferring a question and then nagging about it on every screen. That converts one blocking step into a permanent low-level irritation.",
      "source": "Jenifer Tidwell, Designing Interfaces (O'Reilly, 2005), Deferred Choices pattern.",
      "verify": {
        "status": "verified",
        "note": "Confirmed Deferred Choices is a named pattern in chapter one of Designing Interfaces, appearing in the O'Reilly table of contents for the third edition and quoted with Tidwell's wording in reader summaries of the first edition."
      },
      "belongs": {
        "verdict": "core",
        "why": "A named interaction pattern that directly governs form scope and sign-up flow design."
      },
      "related": [
        583,
        617,
        599,
        613
      ]
    },
    {
      "n": 583,
      "title": "Sensible defaults",
      "aka": [
        "Good defaults",
        "Intelligent defaults"
      ],
      "oneLine": "Pre-set every choice to the answer most people want, and make it easy to replace.",
      "demo": {
        "caption": "Same three questions. The right one arrives holding the answer most people give, and each can still be changed.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Nothing chosen</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Country</span><span class=\"db-input\">Select...</span><span class=\"db-label\">Delivery</span><span class=\"db-input\">Select...</span><span class=\"db-label\">Billing address</span><span class=\"db-input\">Select...</span><span class=\"db-note\">Three decisions before you can pay</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Set to the commonest answer</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Country</span><span class=\"db-input\">United Kingdom</span><span class=\"db-label\">Delivery</span><span class=\"db-input\">Standard, 2 to 3 days</span><span class=\"db-label\">Billing address</span><span class=\"db-input\">Same as delivery</span><span class=\"db-note\">Three decisions already made, all replaceable</span></div></div></div></div></div>"
      },
      "what": "Tognazzini's Defaults principle says defaults should be intelligent and responsive, that a pre-filled field should arrive selected so a single keystroke replaces it, and that the word default itself should be avoided in the interface in favour of plain wording such as revert to standard settings. Tidwell carries the same idea as the Good Defaults pattern. The point is that a default is a decision the designer makes on the user's behalf, so it should be the decision that is right most often.",
      "why": "Most people never change a default, so whatever you set becomes the actual behaviour of the product for the majority. A good default removes a decision entirely; a lazy one silently commits everyone to whatever was easiest to code.",
      "how": [
        "Set each default to the commonest correct answer, using real usage data where you have it.",
        "Pre-select pre-filled text so typing over it takes one action.",
        "Never default to the option that benefits you and costs the user, such as a pre-ticked marketing box. That is a deceptive pattern, and consent collected that way is legally risky in the UK and EU.",
        "Give a clearly worded way back to the standard settings."
      ],
      "example": "A delivery form that defaults the billing address to the delivery address with a single tick box to separate them.",
      "numbers": "",
      "pitfall": "Defaulting to whatever the last user of that account chose, without showing it. Inherited state that looks like a fresh default causes quiet, repeated mistakes.",
      "source": "Bruce Tognazzini, First Principles of Interaction Design (Defaults); Jenifer Tidwell, Designing Interfaces (Good Defaults).",
      "verify": {
        "status": "verified",
        "note": "Read Tognazzini's Defaults entry, including the auto-selection advice and the recommendation to replace the word default with descriptive wording such as Revert to Standard Settings. The point about pre-ticked consent boxes is flagged as a legal risk rather than a stated rule, because I did not check the current UK or EU regulations this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "Defaults are the strongest lever a designer has over actual behaviour, and a named principle in the interaction canon."
      },
      "related": [
        582,
        616,
        575,
        617
      ]
    },
    {
      "n": 584,
      "title": "Undo over confirm",
      "aka": [
        "Never use a warning when you mean undo"
      ],
      "oneLine": "Let the action happen and offer a way back, rather than asking are you sure.",
      "demo": {
        "caption": "Left stops all forty deletions. Right performs them and offers the way back to the one that was a mistake.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Stops everyone, first</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span>Delete this conversation?</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Cancel</span><span class=\"db-btn db-btn--sm\">OK</span></div></div></div><span class=\"db-note\">Shown on all 40 deletions today</span><span class=\"db-note\">By the fifth, nobody reads it</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Acts, then keeps a way back</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-lines\"><i></i><i></i><i></i></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span>Conversation deleted</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Undo</span></div></div><span class=\"db-note\">No dialog on any of the 40</span></div></div></div></div>"
      },
      "what": "Aza Raskin argued the case in A List Apart in July 2007 under the title Never Use a Warning When you Mean Undo. A confirmation dialog stops everyone, including the great majority who meant it, and after a few repetitions people click through it without reading. An undo lets the common case run at full speed and still rescues the mistake. Nielsen Norman Group take the same line, recommending undo as the main recovery mechanism and reserving confirmations for serious consequences.",
      "why": "Confirmations train the reflex that defeats them. Undo puts the recovery after the action rather than before it, which means it works even for the mistakes the user did not know they were making at the time.",
      "how": [
        "Default to performing the action and offering an undo affordance, usually a message that stays long enough to be noticed and used.",
        "Keep the undone item recoverable for a period rather than only for the life of a toast.",
        "Make undo reachable by keyboard as well as by clicking the notification.",
        "Reserve a confirmation dialog for actions you genuinely cannot reverse (585)."
      ],
      "example": "Gmail's undo on deleting a message, which is the case Raskin's own article points to. The action happens at once, a bar offers to reverse it, and nobody is asked to confirm. Note that Gmail's undo send is a different mechanism: it holds the message for a chosen window of 5 to 30 seconds and cancels before sending, rather than recalling one already gone.",
      "numbers": "",
      "pitfall": "Offering undo through a toast that vanishes in three seconds. If the user does not notice the mistake inside that window, the undo may as well not exist.",
      "source": "Aza Raskin, Never Use a Warning When you Mean Undo, A List Apart (July 2007); Nielsen Norman Group on confirmation dialogs.",
      "verify": {
        "status": "verified",
        "note": "Read the A List Apart article: Aza Raskin, published 21 July 2007, arguing that habituation makes people click through warnings and that undo is the answer. It cites Gmail's delete-undo as the model. Read NN/g's confirmation dialog article for the same position. Corrected during review: the entry previously claimed Gmail's undo send lets the mail leave and then recalls it. Google's own help pages show it is a delayed-send cancellation window of 5, 10, 20 or 30 seconds, so the example has been rewritten."
      },
      "belongs": {
        "verdict": "core",
        "why": "A concrete, named rule that decides how error recovery is built in almost every application."
      },
      "related": [
        585,
        570,
        586,
        574
      ]
    },
    {
      "n": 585,
      "title": "Confirmation for destructive actions",
      "aka": [
        "Are you sure dialogs"
      ],
      "oneLine": "Ask first only where the consequence is serious and genuinely cannot be undone.",
      "demo": {
        "caption": "Both guard the same deletion. Only the right one says what is lost and names the buttons after their actions.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Generic</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span>Are you sure?</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Cancel</span><span class=\"db-btn db-btn--sm\">OK</span></div></div></div><span class=\"db-note\">Sure of what, and how much of it</span><span class=\"db-note\">OK is what the Enter key fires</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Proportionate</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span>Delete 12 files permanently?</span><span>They will not be in the bin afterwards.</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Keep files</span><span class=\"db-btn db-btn--sm db-btn--danger\">Delete 12 files</span></div></div></div><span class=\"db-note\">The count is in the question</span><span class=\"db-note\">Keep is the default; delete needs aim</span></div></div></div></div>"
      },
      "what": "Nielsen Norman Group's guidance is to use a confirmation dialog before actions with serious consequences, naming the destruction of a user's work or spending large sums of money as the cases that warrant it. Everything short of that should be handled by undo. The reason for the restriction is habituation: a dialog that appears for routine actions gets dismissed reflexively, so it stops protecting anything.",
      "why": "A confirmation is a spend of the user's attention. Spent rarely, it works. Spent often, it becomes noise and the one time it mattered gets clicked through with everything else.",
      "how": [
        "Say in the dialog exactly what will be destroyed and how much of it, not a generic warning.",
        "Label the buttons with the actions themselves, such as Delete 12 files and Keep files, rather than OK and Cancel.",
        "Make the destructive button the one that requires deliberate aim, and never make it the default the Enter key triggers.",
        "For the most serious cases, require the user to type something specific, such as the name of the item being deleted."
      ],
      "example": "GitHub asks you to type the full repository name before deleting it. The friction is proportionate because the action cannot be undone by the user.",
      "numbers": "",
      "pitfall": "Confirming everything. Once a product asks are you sure five times a day, the dialog has become a keystroke and offers no protection at all.",
      "source": "Nielsen Norman Group guidance on confirmation dialogs; Jakob Nielsen's error prevention heuristic (1994).",
      "verify": {
        "status": "verified",
        "note": "Read NN/g's article on confirmation dialogs, which limits their use to actions with serious consequences such as destroying work or costing large amounts of money, and warns that overuse causes automatic dismissal."
      },
      "belongs": {
        "verdict": "core",
        "why": "The counterpart to undo, and the decision point for every irreversible action in a product."
      },
      "related": [
        584,
        586,
        597,
        1034
      ]
    },
    {
      "n": 586,
      "title": "Forgiveness and safe exploration",
      "aka": [
        "Make mistakes cheap"
      ],
      "oneLine": "Design so that a wrong move costs nothing, so people are willing to try.",
      "demo": {
        "none": "The entry's own verdict is that its content is undo (584), recovery paths (598) and explorable interfaces (570), so any picture built here would be one of theirs drawn a second time."
      },
      "what": "The general form of the rule behind undo, explorable interfaces and error recovery. Nielsen's third heuristic asks for a clearly marked emergency exit from an unwanted action; Tognazzini's explorable interfaces principle makes undo the condition of exploration. Forgiveness is the property of a system where the worst outcome of a wrong choice is a moment lost, not data destroyed or money spent.",
      "why": "Confidence is what makes people competent with software. A forgiving system lets someone discover features by trying them, which is how almost all real learning of an interface happens. An unforgiving one produces users who only ever use the features they were shown.",
      "how": [
        "Ask of every control: what is the worst thing that happens if someone presses this by accident? Reduce that answer.",
        "Provide a way out of every flow at every step, and preserve what was entered on the way out.",
        "Prefer reversible operations to warnings, and warnings to silent destruction.",
        "Where an action genuinely cannot be forgiven, say so before it happens and gate it (585)."
      ],
      "example": "A trash or bin that holds deleted items for thirty days. The delete is instant, the file is not gone, and nobody has to be asked to confirm.",
      "numbers": "",
      "pitfall": "This one overlaps heavily with 570 and 584 and gets treated as a slogan rather than a specification. Written on a wall it changes nothing; written into the recovery behaviour of each destructive action it does.",
      "source": "Jakob Nielsen, heuristic 3, user control and freedom (1994); Bruce Tognazzini, Explorable Interfaces.",
      "verify": {
        "status": "verified",
        "note": "Read Nielsen's ten heuristics page for the exact wording of the user control and freedom heuristic, and Tognazzini's Explorable Interfaces entry. The specific phrase forgiveness and safe exploration is common in practitioner writing rather than a single named principle, so it is presented here as the general form of two sourced rules."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "Downgraded from core on review. The property is real, but the entry is a restatement: its two sources are Tognazzini's explorable interfaces (570) and Nielsen's heuristic 3, and its practical content is undo (584) plus recovery paths (598). Nothing here is actionable that those three do not already carry, and the phrase itself is practitioner shorthand rather than a named principle. It stays on the list because a designer will meet the term and should know it names a goal rather than a technique."
      },
      "related": [
        570,
        584,
        585,
        598
      ]
    },
    {
      "n": 587,
      "title": "Target size and hit area",
      "aka": [
        "Tap target size",
        "Touch target"
      ],
      "oneLine": "Make the pressable area big enough and far enough from its neighbours to hit reliably.",
      "demo": {
        "caption": "The dashed circle is one fingertip. The icons are the same size in both; only the hit areas differ.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">24 each, edge to edge</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 108\"><rect class=\"s-mute\" x=\"30\" y=\"26\" width=\"24\" height=\"24\"/><rect class=\"s-mute\" x=\"54\" y=\"26\" width=\"24\" height=\"24\"/><rect class=\"f\" x=\"38\" y=\"34\" width=\"8\" height=\"8\"/><rect class=\"f\" x=\"62\" y=\"34\" width=\"8\" height=\"8\"/><circle class=\"s-accent\" stroke-dasharray=\"3 3\" cx=\"54\" cy=\"38\" r=\"22\"/><text class=\"t\" x=\"8\" y=\"78\">the finger covers both</text><text class=\"t\" x=\"8\" y=\"94\">one of them is delete</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">44 each, 8 apart</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 108\"><rect class=\"s-mute\" x=\"16\" y=\"16\" width=\"44\" height=\"44\"/><rect class=\"s-mute\" x=\"68\" y=\"16\" width=\"44\" height=\"44\"/><rect class=\"f\" x=\"34\" y=\"34\" width=\"8\" height=\"8\"/><rect class=\"f\" x=\"86\" y=\"34\" width=\"8\" height=\"8\"/><circle class=\"s-accent\" stroke-dasharray=\"3 3\" cx=\"38\" cy=\"38\" r=\"22\"/><text class=\"t\" x=\"8\" y=\"78\">the finger fits inside one</text><text class=\"t\" x=\"8\" y=\"94\">the icon never grew</text></svg></div></div></div>"
      },
      "what": "The visible control and the area that responds to a press are two different things, and it is the second that matters. WCAG 2.2 sets a minimum of 24 by 24 CSS pixels at level AA, with exceptions for inline targets, targets spaced far enough apart, targets the browser controls, equivalent controls elsewhere, and cases where a particular size is essential. Level AAA raises this to 44 by 44 CSS pixels. Apple's guidelines call for a hit region of at least 44 by 44 points, and Google's Material guidance suggests at least 48 by 48 density-independent pixels separated by 8 or more.",
      "why": "Undersized targets produce mis-taps, and mis-taps are worse than slow taps because they trigger the wrong thing. The problem is much heavier for anyone with a tremor, limited dexterity, or a phone being used one-handed on a moving train.",
      "how": [
        "Extend the hit area with padding rather than making the icon bigger, so the visual weight stays as designed.",
        "Test with a thumb on a real device, not a cursor on a desktop screen.",
        "Space adjacent targets so a slightly off press does not land on the neighbour, particularly where one of them is destructive.",
        "Check icon-only controls in toolbars and table rows, which are where undersized targets nearly always hide."
      ],
      "example": "A 16 pixel close icon inside a 44 pixel padded button. The graphic stays small and delicate, the pressable area does not.",
      "numbers": "WCAG 2.2 SC 2.5.8 Target Size (Minimum), level AA: at least 24 by 24 CSS pixels, subject to five listed exceptions. WCAG 2.2 SC 2.5.5 Target Size (Enhanced), level AAA: at least 44 by 44 CSS pixels. Apple Human Interface Guidelines: at least 44 by 44 points, 60 by 60 in visionOS. Material guidance: at least 48 by 48 dp, about 9 mm physically, with 8 dp spacing.",
      "pitfall": "Meeting the size rule and ignoring spacing. Two adequate targets pressed against each other still produce constant mis-taps.",
      "source": "W3C, WCAG 2.2 SC 2.5.8 and SC 2.5.5; Apple Human Interface Guidelines; Google Material Design accessibility guidance.",
      "verify": {
        "status": "verified",
        "note": "Read the W3C Understanding documents for SC 2.5.8 (24 by 24 CSS pixels, level AA, five exceptions) and SC 2.5.5 (44 by 44 CSS pixels, level AAA). Apple's 44 by 44 point figure is quoted from the Human Interface Guidelines Buttons page; the Material 48 dp, 9 mm and 8 dp spacing figures are from Material and Android accessibility documentation."
      },
      "belongs": {
        "verdict": "core",
        "why": "A measurable requirement in an international standard with direct effect on every interface layout."
      },
      "related": [
        227,
        588,
        807,
        695
      ]
    },
    {
      "n": 588,
      "title": "Hover is not a state on touch",
      "aka": [
        "No hover on touch",
        "Touch has no mouseover"
      ],
      "oneLine": "Touch devices have no hover, so anything only revealed on hover is invisible there.",
      "demo": {
        "caption": "The same three rows, drawn for two inputs. Every control on the left is simply not there on the right.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Pointer: hover reveals it</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-row db-row--between db-row--nowrap\"><span>Invoice 1041</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Delete</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Invoice 1042</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Delete</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Invoice 1043</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Delete</span></span><span class=\"db-note\">Appears under the pointer</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Finger: nothing to reveal</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-row db-row--between db-row--nowrap\"><span>Invoice 1041</span><span class=\"db-note\">&#160;</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Invoice 1042</span><span class=\"db-note\">&#160;</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Invoice 1043</span><span class=\"db-note\">&#160;</span></span><span class=\"db-note\">Nobody reports it, because nobody sees it</span></div></div></div></div></div>"
      },
      "what": "A mouse has a position without a press, so it can hover. A finger does not. CSS Media Queries Level 4 makes this testable: the hover feature reports whether the primary input can hover conveniently, any-hover reports whether any available input can, and pointer reports whether the primary pointer is fine like a mouse or coarse like a finger. Anything you hide behind a hover has to have another route on a coarse pointer, and the browser cannot invent one for you.",
      "why": "Hover-only menus, hover-only delete buttons and hover-only labels simply do not exist for a large share of users. Keyboard users are in the same position for a different reason, which is why hover behaviour and focus behaviour should be designed together.",
      "how": [
        "Never make hover the only way to reach a function. Treat it as an accelerator for people with a fine pointer.",
        "Gate hover-only enhancements with the hover and pointer media features rather than guessing from screen width.",
        "Give every hover-revealed control a focus equivalent so keyboard users get the same thing.",
        "Watch for sticky hover on touch, where a tapped element keeps its hover styling until something else is tapped."
      ],
      "example": "A table row with a delete icon that only appears on mouseover. On a phone the row simply has no delete, and nobody reports it as a bug because they cannot see the feature at all.",
      "numbers": "",
      "pitfall": "Detecting touch by screen width. Laptops have touchscreens, tablets have keyboards and mice, and the two things are unrelated. The hover and pointer media features exist precisely because width does not tell you.",
      "source": "W3C, CSS Media Queries Level 4 (hover, any-hover, pointer media features).",
      "verify": {
        "status": "verified",
        "note": "Checked the hover, any-hover and pointer media features and their values against MDN, which cites Media Queries Level 4 as the defining specification. This is a platform fact rather than an authored principle; no originator is claimed."
      },
      "belongs": {
        "verdict": "core",
        "why": "Input capability is a first-order design constraint, and this is the single most common way designs break across devices."
      },
      "related": [
        587,
        807,
        808,
        601
      ]
    },
    {
      "n": 589,
      "title": "Keyboard focus order",
      "aka": [
        "Tab order"
      ],
      "oneLine": "Focus should move through a page in an order that preserves its meaning.",
      "demo": {
        "caption": "The layout pairs the fields in rows. On the left, surname is the fourth stop and every pair is broken.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Tabs down the columns</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 232 116\"><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"104\" height=\"28\"/><rect class=\"s-mute\" x=\"4\" y=\"42\" width=\"104\" height=\"28\"/><rect class=\"s-mute\" x=\"4\" y=\"78\" width=\"104\" height=\"28\"/><rect class=\"s-mute\" x=\"124\" y=\"6\" width=\"104\" height=\"28\"/><rect class=\"s-mute\" x=\"124\" y=\"42\" width=\"104\" height=\"28\"/><rect class=\"s-mute\" x=\"124\" y=\"78\" width=\"104\" height=\"28\"/><text class=\"t\" x=\"12\" y=\"24\">1</text><text class=\"t\" x=\"26\" y=\"24\">First name</text><text class=\"t\" x=\"12\" y=\"60\">2</text><text class=\"t\" x=\"26\" y=\"60\">Address</text><text class=\"t\" x=\"12\" y=\"96\">3</text><text class=\"t\" x=\"26\" y=\"96\">Card no</text><text class=\"t\" x=\"132\" y=\"24\">4</text><text class=\"t\" x=\"146\" y=\"24\">Surname</text><text class=\"t\" x=\"132\" y=\"60\">5</text><text class=\"t\" x=\"146\" y=\"60\">Postcode</text><text class=\"t\" x=\"132\" y=\"96\">6</text><text class=\"t\" x=\"146\" y=\"96\">Security code</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Tabs along the rows</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 232 116\"><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"104\" height=\"28\"/><rect class=\"s-mute\" x=\"4\" y=\"42\" width=\"104\" height=\"28\"/><rect class=\"s-mute\" x=\"4\" y=\"78\" width=\"104\" height=\"28\"/><rect class=\"s-mute\" x=\"124\" y=\"6\" width=\"104\" height=\"28\"/><rect class=\"s-mute\" x=\"124\" y=\"42\" width=\"104\" height=\"28\"/><rect class=\"s-mute\" x=\"124\" y=\"78\" width=\"104\" height=\"28\"/><text class=\"t\" x=\"12\" y=\"24\">1</text><text class=\"t\" x=\"26\" y=\"24\">First name</text><text class=\"t\" x=\"12\" y=\"60\">3</text><text class=\"t\" x=\"26\" y=\"60\">Address</text><text class=\"t\" x=\"12\" y=\"96\">5</text><text class=\"t\" x=\"26\" y=\"96\">Card no</text><text class=\"t\" x=\"132\" y=\"24\">2</text><text class=\"t\" x=\"146\" y=\"24\">Surname</text><text class=\"t\" x=\"132\" y=\"60\">4</text><text class=\"t\" x=\"146\" y=\"60\">Postcode</text><text class=\"t\" x=\"132\" y=\"96\">6</text><text class=\"t\" x=\"146\" y=\"96\">Security code</text></svg></div></div></div>"
      },
      "what": "WCAG 2.1 and 2.2 success criterion 2.4.3, at level A, requires that if a page can be navigated sequentially and the sequence affects meaning or operation, components receive focus in an order that preserves meaning and operability. More than one order can satisfy it. What it rules out is a sequence that scrambles the relationship the layout implies, for example tabbing from a field to a footer link and back up to the field's own label.",
      "why": "For a keyboard or screen reader user, focus order is the reading order and the operating order at once. Get it wrong and the page becomes a shuffled deck, even though it looks perfectly organised on screen.",
      "how": [
        "Match the DOM order to the visual order, then leave tab order alone. Almost every focus order bug comes from CSS moving things that the markup did not.",
        "Avoid positive tabindex values. They pull elements out of the natural sequence and break as soon as the page changes.",
        "Move focus deliberately when content appears, such as into a dialog when it opens and back to the trigger when it closes.",
        "Tab through the whole page yourself before shipping. It takes two minutes and finds most of the problems."
      ],
      "example": "A two-column form laid out with CSS grid where the markup lists all left-column fields then all right-column fields. It looks like rows and tabs like columns.",
      "numbers": "WCAG 2.2 SC 2.4.3 Focus Order is level A.",
      "pitfall": "Fixing focus order with tabindex numbers rather than by reordering the markup. It works on the page you tested and breaks the moment a component is reused elsewhere.",
      "source": "W3C, WCAG 2.2 success criterion 2.4.3 Focus Order (level A).",
      "verify": {
        "status": "verified",
        "note": "Read the W3C Understanding SC 2.4.3 document for the exact requirement wording and level A conformance, including the point that multiple orders can be valid so long as meaning and operability are preserved."
      },
      "belongs": {
        "verdict": "core",
        "why": "A level A requirement in an international standard and a basic condition of keyboard operability."
      },
      "related": [
        695,
        696,
        698,
        699
      ]
    },
    {
      "n": 590,
      "title": "Accelerators for experienced users",
      "aka": [
        "Shortcut layering",
        "Keyboard accelerators",
        "Flexibility and efficiency of use"
      ],
      "oneLine": "Offer fast hidden routes for frequent users without making beginners find them.",
      "demo": {
        "caption": "The same four commands, both reachable by menu. The right menu also teaches the keystroke that replaces it.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Shortcut exists, in the help page</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">File</span><span class=\"db-row db-row--between db-row--nowrap\"><span>New</span><span class=\"db-note\">&#160;</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Duplicate</span><span class=\"db-note\">&#160;</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Rename</span><span class=\"db-note\">&#160;</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Delete</span><span class=\"db-note\">&#160;</span></span><span class=\"db-note\">Only the team that built it uses them</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Shortcut printed beside the command</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">File</span><span class=\"db-row db-row--between db-row--nowrap\"><span>New</span><span class=\"db-note\">Ctrl N</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Duplicate</span><span class=\"db-note\">Ctrl D</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Rename</span><span class=\"db-note\">F2</span></span><span class=\"db-row db-row--between db-row--nowrap\"><span>Delete</span><span class=\"db-note\">Del</span></span><span class=\"db-note\">The slow route stays for everyone else</span></div></div></div></div></div>"
      },
      "what": "The master list calls this shortcut layering, which is not an established term. The established version is Nielsen's seventh heuristic, flexibility and efficiency of use, which states that shortcuts hidden from novice users may speed up interaction for the expert so the design serves both. Tognazzini's Efficiency of the User principle makes the same argument from the other side, measuring the user's productivity rather than the machine's. The layering idea is sound: the same function is reachable by an obvious slow route and a fast concealed one.",
      "why": "A single route forces a choice between the beginner and the person who uses the product all day, and whichever you pick you lose the other. Two routes to the same function cost almost nothing and let people move from one to the other at their own pace.",
      "how": [
        "Give every shortcut a visible equivalent, so nothing is reachable only by keystroke.",
        "Show the shortcut next to the menu item that performs the same action. That is how people learn them.",
        "Follow platform conventions before inventing bindings, and never override the browser or operating system's own.",
        "Add a command palette or search-driven entry point for products with more functions than a menu bar can hold."
      ],
      "example": "Any desktop application menu that prints the keyboard equivalent beside each command. The menu teaches the shortcut that eventually replaces the menu.",
      "numbers": "",
      "pitfall": "Shortcuts documented only in a help page nobody opens. If the accelerator is not shown at the point of use it will only ever be used by the team that built it.",
      "source": "Jakob Nielsen, heuristic 7, flexibility and efficiency of use (1994); Bruce Tognazzini, Efficiency of the User.",
      "verify": {
        "status": "adjusted",
        "note": "I searched for shortcut layering as a named design principle and found no source using it in this sense, so the entry is retitled to the accelerator idea it describes. The substance is verified against Nielsen's heuristic 7 wording on the NN/g heuristics page and against Efficiency of the User in Tognazzini's First Principles list."
      },
      "belongs": {
        "verdict": "core",
        "why": "A real and named principle, though the master list's name for it is not. It determines how a product serves first-time and daily users at once."
      },
      "related": [
        572,
        577,
        579,
        600
      ]
    },
    {
      "n": 9542,
      "title": "The system image",
      "aka": [
        "What the built thing communicates"
      ],
      "oneLine": "Everything the finished product conveys about itself, which is the designer's only channel to the user.",
      "demo": {
        "caption": "The same two dials. On the left is the machine people assume; on the right, what the dials really move.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">What the controls imply</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 152\"><rect class=\"s-mute\" x=\"18\" y=\"10\" width=\"110\" height=\"124\"/><path class=\"s-mute\" d=\"M18 58 H128\"/><text class=\"t\" x=\"62\" y=\"24\">freezer</text><text class=\"t\" x=\"56\" y=\"98\">fresh food</text><rect class=\"f-mute\" x=\"28\" y=\"18\" width=\"28\" height=\"12\"/><rect class=\"f-mute\" x=\"28\" y=\"70\" width=\"28\" height=\"12\"/><circle class=\"s\" cx=\"164\" cy=\"42\" r=\"13\"/><path class=\"s\" d=\"M164 42 L172 34\"/><circle class=\"s\" cx=\"164\" cy=\"100\" r=\"13\"/><path class=\"s\" d=\"M164 100 L172 92\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M151 42 H128\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M151 100 H128\"/><text class=\"t\" x=\"18\" y=\"148\">two separate cooling units</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">What is actually inside</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 152\"><rect class=\"s-mute\" x=\"18\" y=\"10\" width=\"110\" height=\"124\"/><path class=\"s-mute\" d=\"M18 58 H128\"/><text class=\"t\" x=\"62\" y=\"24\">freezer</text><text class=\"t\" x=\"56\" y=\"98\">fresh food</text><rect class=\"f-mute\" x=\"28\" y=\"112\" width=\"30\" height=\"14\"/><path class=\"s-accent\" d=\"M43 112 V40 M39 46 L43 40 L47 46\"/><path class=\"s-accent\" d=\"M43 64 H90 M84 60 L90 64 L84 68\"/><path class=\"s\" d=\"M34 72 L52 58\"/><circle class=\"s\" cx=\"164\" cy=\"42\" r=\"13\"/><path class=\"s\" d=\"M164 42 L172 34\"/><circle class=\"s\" cx=\"164\" cy=\"100\" r=\"13\"/><path class=\"s\" d=\"M164 100 L172 92\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M151 42 H138 V74 H56\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M151 100 H140 V120 H64\"/><text class=\"t\" x=\"18\" y=\"148\">one unit, one damper</text></svg></div></div></div>"
      },
      "what": "Norman draws a triangle. At one vertex is the designer's conceptual model. At another is the person using the thing, with their own model. The product sits between them, and the system image is everything that can be perceived from what was built: the physical structure, the controls, the labels, the documentation, the marketing site, the help pages. Because designers cannot talk to users directly, the entire burden of communication falls on the system image.",
      "why": "It puts the responsibility somewhere useful. If people misunderstand the product, that is not a user failing, it is a gap between the model you hold and the image you shipped.",
      "how": [
        "Audit the system image as one artefact: interface, empty states, error text, onboarding, help and the marketing page all teach the same model or fight each other.",
        "When the model cannot be inferred from the interface, either change the interface or accept that documentation is now load-bearing.",
        "Write help content and interface copy from the same model description, ideally by the same person."
      ],
      "example": "Norman's refrigerator with two controls labelled for the fresh food and freezer compartments, where the controls in fact adjust one cooling unit and how its cold air is split. The system image implies two independent thermostats, so people set them wrongly for years.",
      "numbers": "",
      "pitfall": "Documentation is written by a separate team against a different model, so the manual describes a product that does not exist and quietly makes the system image incoherent.",
      "source": "Donald A. Norman, The Design of Everyday Things (1988, revised 2013), chapter 1",
      "verify": {
        "status": "verified",
        "note": "Added as a gap. The master list has conceptual model (542) but not the system image, which is the half of Norman's triad that tells designers where their responsibility sits. Read the System Image section and the refrigerator figures in the 2013 book text."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is separately named by Norman, it is not the same thing as the conceptual model, and it changes who is accountable when people misunderstand a product."
      },
      "related": [
        542,
        543,
        560,
        573
      ]
    },
    {
      "n": 9589,
      "title": "Focus management on view change",
      "aka": [
        "Moving focus",
        "Focus on route change"
      ],
      "oneLine": "When the content changes, send keyboard focus to the new content deliberately.",
      "demo": {
        "caption": "The dialog is open in both. The ring shows where the keyboard actually is while it stands there.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Focus left behind</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Page</span><div class=\"db-ui\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-btn db-btn--sm db-btn--ghost\" style=\"outline:2px solid var(--accent);outline-offset:2px\">Settings</span><span class=\"db-note\">focus never moved</span></div></div><span class=\"db-note\">Dialog now open on top</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Display name</span><span class=\"db-input\">Ade</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Save</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Cancel</span></div></div></div><span class=\"db-note\">Tab goes on through the page behind</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Focus moved in</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Page</span><div class=\"db-ui\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Settings</span><span class=\"db-note\">focus returns here on close</span></div></div><span class=\"db-note\">Dialog now open on top</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Display name</span><span class=\"db-input\" style=\"outline:2px solid var(--accent);outline-offset:2px\">Ade</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Save</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Cancel</span></div></div></div><span class=\"db-note\">Tab stays inside until it closes</span></div></div></div></div>"
      },
      "what": "Focus order (589) covers where focus goes as the user tabs through a stable page. This covers what happens when the page itself changes under them: a dialog opens, a route changes in a single-page application, a panel expands, a list is replaced by search results. If nothing moves focus, it stays where it was or falls back to the top of the document, and a keyboard or screen reader user has no idea anything happened. The W3C's ARIA Authoring Practices set out the expected behaviour for dialogs: focus moves into the dialog on open and returns to the element that opened it on close.",
      "why": "Without it, the two commonest interactions in a modern web application, opening a dialog and navigating without a page load, are silent for anyone not using a mouse. It is also the difference between a modal that traps a screen reader outside itself and one that works.",
      "how": [
        "On opening a dialog, move focus into it, and on closing it, return focus to the trigger.",
        "On a client-side route change, move focus to the new page heading and make sure the page title changes too.",
        "When content is inserted or replaced in place, move focus to it or announce it, rather than leaving focus in a control that has gone.",
        "Never move focus without a user action behind it, which is disorienting in the other direction."
      ],
      "example": "Open a settings dialog with the keyboard, tab through it, press Escape, and land back on the settings button you started from.",
      "numbers": "",
      "pitfall": "Single-page applications that swap the whole view and leave focus on the link that was clicked, which no longer exists. The screen reader announces nothing and the user believes the link is broken.",
      "source": "W3C, WAI-ARIA Authoring Practices, dialog pattern; related to WCAG 2.2 SC 2.4.3.",
      "verify": {
        "status": "verified",
        "note": "Added as a gap. The dialog focus behaviour is the long-standing published ARIA Authoring Practices pattern; the underlying requirement for meaningful focus sequence is WCAG SC 2.4.3, whose text I read this session. Flagged because the master list covers focus order (589, 696) and visible focus (695) but not deliberate focus movement when content changes."
      },
      "belongs": {
        "verdict": "core",
        "why": "Without it, keyboard and screen reader users lose their place at exactly the moments an application changes state, which is most interactions in a modern web app."
      },
      "related": [
        589,
        695,
        698,
        1034
      ]
    }
  ]
};
