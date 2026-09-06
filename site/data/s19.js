window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[19] = {
  "n": 19,
  "slug": "sound-haptics",
  "title": "Sound and haptics",
  "blurb": "How interfaces use sound and vibration to confirm, warn and identify, and when to stay quiet.",
  "intro": "Sound and touch are the two channels that still work when nobody is looking at the screen. Most of the usable theory comes from a narrow band of research between 1986 and 1995, when Bill Gaver and Meera Blattner's group worked out two opposite ways to make a sound mean something and Judy Edworthy measured what makes a warning feel urgent. The haptic half is younger and is documented by Apple and Google rather than by academics, so the sources there are platform guidelines with named patterns and published parameter ranges. Read both halves together, since each is about giving someone information without asking for their eyes. The practical job is small: pick the short list of events worth a sound or a buzz, give each one a fixed pattern, and keep everything else silent.",
  "sources": [
    "Meera Blattner, Denise Sumikawa and Robert Greenberg, Earcons and Icons: Their Structure and Common Design Principles, Human-Computer Interaction 4(1) (1989)",
    "William Gaver, Auditory Icons: Using Sound in Computer Interfaces, Human-Computer Interaction 2(2), 167-177 (1986)",
    "William Gaver, The SonicFinder: An Interface That Uses Auditory Icons, Human-Computer Interaction 4(1) (1989)",
    "David McGookin and Stephen Brewster, Earcons, chapter 14 of The Sonification Handbook (Logos, 2011)",
    "Eoin Brazil and Mikael Fernstrom, Auditory Icons, chapter 13 of The Sonification Handbook (Logos, 2011)",
    "Stephen Brewster, Peter Wright, Alan Dix and Alistair Edwards, The Sonic Enhancement of Graphical Buttons, INTERACT '95",
    "Judy Edworthy, Sarah Loxley and Ian Dennis, Improving Auditory Warning Design: Relationship between Warning Sound Parameters and Perceived Urgency, Human Factors 33(2), 205-231 (1991)",
    "Daniel M. Jackson, Sonic Branding: An Introduction (Palgrave Macmillan, 2003)",
    "W3C, Web Content Accessibility Guidelines 2.2, Success Criterion 1.4.2 Audio Control",
    "Apple, Human Interface Guidelines: Playing haptics and Playing audio; Core Haptics AHAP reference",
    "Android developers, Haptics design principles; Add haptic feedback to events; android.os.VibrationEffect reference",
    "Google, Chrome autoplay policy (Chrome 66, April 2018)",
    "United States Patent and Trademark Office, Trademark sound mark examples",
    "William W. Gaver, Auditory Icons: Using Sound in Computer Interfaces, Human-Computer Interaction 2(2) (1986)",
    "Stephen Brewster and Lorna M. Brown, Tactons: Structured Tactile Messages for Non-Visual Information Display, AUIC 2004",
    "EBU Recommendation R 128, Loudness normalisation and permitted maximum level of audio signals (2010; v5.0 2023)",
    "ISO 24500:2010, Ergonomics, Accessible design, Auditory signals for consumer products"
  ],
  "entries": [
    {
      "n": 755,
      "title": "Earcons",
      "aka": [
        "Abstract auditory cues",
        "Musical earcons"
      ],
      "oneLine": "Short structured musical sounds whose meaning has to be learned, built from motives that combine into families.",
      "demo": {
        "caption": "Each earcon is pitch over time. Left pair differ only in height; right pair differ in rhythm and note count.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Pitch alone separates them</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 100\"><path class=\"s-mute\" d=\"M6 20H164M6 36H164M6 52H164M6 68H164\"/><path class=\"s-mute\" d=\"M85 10V78\"/><rect class=\"f\" x=\"16\" y=\"47\" width=\"16\" height=\"10\"/><rect class=\"f\" x=\"38\" y=\"47\" width=\"16\" height=\"10\"/><rect class=\"f\" x=\"60\" y=\"47\" width=\"16\" height=\"10\"/><rect class=\"f-accent\" x=\"94\" y=\"31\" width=\"16\" height=\"10\"/><rect class=\"f-accent\" x=\"116\" y=\"31\" width=\"16\" height=\"10\"/><rect class=\"f-accent\" x=\"138\" y=\"31\" width=\"16\" height=\"10\"/><text class=\"t\" x=\"46\" y=\"92\" text-anchor=\"middle\">EARCON A</text><text class=\"t\" x=\"124\" y=\"92\" text-anchor=\"middle\">EARCON B</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Rhythm and note count differ</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 100\"><path class=\"s-mute\" d=\"M6 20H164M6 36H164M6 52H164M6 68H164\"/><path class=\"s-mute\" d=\"M85 10V78\"/><rect class=\"f\" x=\"16\" y=\"47\" width=\"16\" height=\"10\"/><rect class=\"f\" x=\"38\" y=\"47\" width=\"16\" height=\"10\"/><rect class=\"f\" x=\"60\" y=\"47\" width=\"16\" height=\"10\"/><rect class=\"f-accent\" x=\"94\" y=\"31\" width=\"34\" height=\"10\"/><rect class=\"f-accent\" x=\"134\" y=\"63\" width=\"16\" height=\"10\"/><text class=\"t\" x=\"46\" y=\"92\" text-anchor=\"middle\">EARCON A</text><text class=\"t\" x=\"124\" y=\"92\" text-anchor=\"middle\">EARCON B</text></svg></div></div></div>"
      },
      "what": "Blattner, Sumikawa and Greenberg defined earcons as non-verbal audio messages that tell someone about an object, an operation or an interaction. They are built from motives: brief runs of pitches with a rhythm distinct enough to recognise on their own. Nothing about the sound resembles what it stands for, so the link is arbitrary and has to be taught. The original paper set out four ways to build a family, from one-element earcons up to hierarchical ones.",
      "why": "A learned grammar scales where a pile of separate beeps does not. Once someone knows that a piano timbre means one thing and a fast triplet means another, they can decode a combination they have never heard, on a channel that works while the eyes are busy.",
      "how": [
        "Use musical timbres rather than sine tones, from different musical families.",
        "Map categorical data to timbre and continuous data to pitch or register.",
        "Make rhythm and note count the main difference; never let pitch alone carry a distinction.",
        "Leave a gap between the parts of a compound earcon so the ear hears two messages, not one.",
        "Avoid playing two earcons from the same family at once; identification falls away sharply."
      ],
      "example": "Brewster, Raty and Kortekangas built a hierarchical set of 27 earcons for a telephone menu system and found it worked for menu items.",
      "numbers": "Blattner and colleagues proposed no more than four notes per motive. Brewster, Wright and Edwards keep pitch below about 5 kHz and above about 125 to 150 Hz, use register differences of two to three octaves, leave at least 0.1 seconds between compound components, stagger concurrent earcons by at least 300 ms measured onset to onset, and hold a family to about three values for each of the three main attributes. Five to ten minutes of training is usually enough to reach roughly 80 per cent identification.",
      "pitfall": "Teams treat earcons as decoration and skip the grammar, so users face twenty unrelated beeps and learn none. Loudness is the other trap: listeners judge it poorly, so coding meaning by volume mostly just annoys people.",
      "source": "Blattner, Sumikawa and Greenberg, Earcons and Icons: Their Structure and Common Design Principles, Human-Computer Interaction 4(1), 1989; guidelines refined by Brewster, Wright and Edwards.",
      "verify": {
        "status": "verified",
        "note": "Read McGookin and Brewster's earcon chapter in The Sonification Handbook (2011), which quotes the Blattner definition, tabulates the Brewster, Wright and Edwards guidelines and states the four-note limit, the three-values-per-attribute constraint and the training figure. Every number above is from that chapter, not from the primary papers, which I did not read. Two honest caveats: the handbook credits the 1989 paper with proposing earcons while some secondary sources trace the word to an earlier 1985 technical report by Sumikawa that I could not obtain, so the coinage date is unsettled; and the 80 per cent identification figure is the handbook's summary of a range across studies, not a single measured result."
      },
      "belongs": {
        "verdict": "core",
        "why": "Sound is one of the few channels left when the screen is full, hidden or absent, and this is the named, structured method for using it."
      },
      "related": [
        9755,
        757,
        539,
        551
      ]
    },
    {
      "n": 9755,
      "title": "Auditory icons",
      "aka": [
        "Everyday listening cues"
      ],
      "oneLine": "Interface sounds that imitate real events, so their meaning is recognised rather than memorised.",
      "demo": {
        "caption": "Same three events. Left, three beeps you must learn. Right, the sound the event itself makes, drawn as its envelope.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Abstract tone, learned</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 136\"><text class=\"t\" x=\"8\" y=\"16\">DELETE / TONE A</text><path class=\"s\" d=\"M50 25V43M55 25V43M60 25V43M65 25V43M70 25V43M75 25V43M80 25V43M85 25V43M90 25V43M95 25V43M100 25V43M105 25V43M110 25V43\"/><text class=\"t\" x=\"8\" y=\"60\">ERROR / TONE B</text><path class=\"s\" d=\"M50 69V87M55 69V87M60 69V87M65 69V87M70 69V87M75 69V87M80 69V87M85 69V87M90 69V87\"/><text class=\"t\" x=\"8\" y=\"104\">COPY / TONE C</text><path class=\"s\" d=\"M50 113V131M55 113V131M60 113V131M65 113V131M70 113V131M75 113V131M80 113V131M85 113V131M90 113V131M95 113V131M100 113V131M105 113V131M110 113V131M115 113V131M120 113V131\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">The event's own sound</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 136\"><text class=\"t\" x=\"8\" y=\"16\">DELETE / CRUMPLE</text><path class=\"s\" d=\"M50 31V37M55 25V43M60 30V38M65 24V44M70 32V36M75 27V41M80 31V37M85 25V43M90 29V39M95 26V42M100 32V36M105 28V40M110 31V37\"/><text class=\"t\" x=\"8\" y=\"60\">ERROR / SMASH</text><path class=\"s\" d=\"M50 62V94M55 66V90M60 65V91M65 69V87M70 68V88M75 71V85M80 70V86M85 73V83M90 72V84M95 74V82M100 74V82M105 75V81M110 76V80\"/><text class=\"t\" x=\"8\" y=\"104\">COPY / POUR</text><path class=\"s\" d=\"M50 120V124M55 119V125M60 119V125M65 118V126M70 117V127M75 117V127M80 116V128M85 115V129M90 115V129M95 114V130M100 113V131M105 113V131M110 112V132\"/></svg></div></div></div>"
      },
      "what": "Gaver proposed sounds that work the way visual icons do: a crumpling sound for discarding something, breaking glass for a failure. His argument rests on everyday listening, the idea that we hear events and sources rather than pitches and timbres. He built the SonicFinder for the Macintosh Finder, where file type mapped to a material such as wood or metal, size mapped to pitch, and dragging made a scraping sound.",
      "why": "The mapping costs nothing to learn when the analogy is good, which is the opposite trade to an earcon. It carries quantity for free too, because a bigger thing can simply sound bigger, and people read that without being told.",
      "how": [
        "Start from an event people already know the sound of, and invent one only when no real sound fits.",
        "Use a parameter of the sound to carry quantity, as SonicFinder used pitch for file size.",
        "Test identification with people who have not seen your mapping table.",
        "Fall back to earcons for anything abstract, such as a permission level or a sync state."
      ],
      "example": "The SonicFinder mapping table: selection is a hitting sound, dragging is scraping, dropping into the trashcan is a crash, and emptying it is a crunch.",
      "numbers": "",
      "pitfall": "The metaphor runs out. Screen windows snap open where real ones do not, so Gaver invented a whooshing sound, and the pouring sound for copying ended up standing for progress rather than for copying. Once you are inventing sounds you are designing earcons and should follow those rules instead.",
      "source": "Gaver, Auditory Icons: Using Sound in Computer Interfaces, Human-Computer Interaction 2(2), 167-177 (1986), and The SonicFinder, Human-Computer Interaction 4(1) (1989).",
      "verify": {
        "status": "verified",
        "note": "Checked the journal record for the 1986 paper on Taylor and Francis (volume 2, issue 2, pages 167-177) and read the auditory icons chapter by Brazil and Fernstrom in The Sonification Handbook, which reproduces the SonicFinder mapping table and its criticisms."
      },
      "belongs": {
        "verdict": "core",
        "why": "Added as a gap: the master list has earcons but not their opposite number, and you cannot choose sensibly between learned and recognised sound without both."
      },
      "related": [
        755,
        757,
        573
      ]
    },
    {
      "n": 756,
      "title": "Sonic branding",
      "aka": [
        "Audio branding",
        "Sonic logo",
        "Sound mark"
      ],
      "oneLine": "A brand's ownable sound, used consistently so the ear alone identifies who is speaking.",
      "demo": {
        "caption": "One five-note motif cut to three lengths. The pitch contour holds, so film logo and interface tick read as one brand.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 168\"><path class=\"s-mute\" d=\"M72 28H352M72 74H352M72 120H352\"/><text class=\"t\" x=\"2\" y=\"31\">FILM 4 S</text><rect class=\"f-accent\" x=\"72\" y=\"25\" width=\"35\" height=\"7\"/><rect class=\"f-accent\" x=\"114\" y=\"16\" width=\"42\" height=\"7\"/><rect class=\"f-accent\" x=\"163\" y=\"34\" width=\"56\" height=\"7\"/><rect class=\"f-accent\" x=\"226\" y=\"25\" width=\"49\" height=\"7\"/><rect class=\"f-accent\" x=\"282\" y=\"16\" width=\"70\" height=\"7\"/><text class=\"t\" x=\"2\" y=\"77\">STING 1.5 S</text><rect class=\"f-accent\" x=\"72\" y=\"71\" width=\"13\" height=\"7\"/><rect class=\"f-accent\" x=\"88\" y=\"62\" width=\"16\" height=\"7\"/><rect class=\"f-accent\" x=\"106\" y=\"80\" width=\"21\" height=\"7\"/><rect class=\"f-accent\" x=\"130\" y=\"71\" width=\"18\" height=\"7\"/><rect class=\"f-accent\" x=\"151\" y=\"62\" width=\"26\" height=\"7\"/><text class=\"t\" x=\"2\" y=\"123\">TICK 0.4 S</text><rect class=\"f-accent\" x=\"72\" y=\"117\" width=\"11\" height=\"7\"/><rect class=\"f-accent\" x=\"85\" y=\"108\" width=\"12\" height=\"7\"/><path class=\"s-mute\" d=\"M72 146H352M72 146V151M142 146V151M212 146V151M282 146V151M352 146V151\"/><text class=\"t\" x=\"72\" y=\"162\" text-anchor=\"middle\">0</text><text class=\"t\" x=\"142\" y=\"162\" text-anchor=\"middle\">1</text><text class=\"t\" x=\"212\" y=\"162\" text-anchor=\"middle\">2</text><text class=\"t\" x=\"282\" y=\"162\" text-anchor=\"middle\">3</text><text class=\"t\" x=\"352\" y=\"162\" text-anchor=\"end\">4 S</text></svg></div>"
      },
      "what": "Sonic branding treats sound as part of an identity system, alongside the logo and the typeface. The centrepiece is usually a short mnemonic, often called a sonic logo, plus rules for everything else the brand makes noise with: adverts, product start-up, notification tones, hold music. These sounds can be protected. The US Patent and Trademark Office publishes a page of sound mark examples, most of them registered, that includes NBC's chimes, MGM's roaring lion, Intel's chimes and Lucasfilm's THX logo theme.",
      "why": "A sound reaches people who are not looking, including from the next room, and it survives a bad speaker better than a small logo survives distance. Registering it turns a piece of design into an asset the business owns.",
      "how": [
        "Agree what the sound has to say about the brand before anyone writes a note.",
        "Design a family: full version for film, a short sting for adverts, one or two notes for the interface.",
        "Approve it on a phone speaker and cheap earbuds at low volume, not only on studio monitors.",
        "Reuse it unchanged for years, because recognition is built by repetition and reset by redesign.",
        "Run a trademark search early and consider registering the mark."
      ],
      "example": "Intel's own support article calls its sound mark, the bong, a simple five-note tune, and says composer Walter Werzowa made it from five notes and twenty sounds derived from those notes. THX's Deep Note was created by James Moorer of Lucasfilm's computer division and first played at the 1983 premiere of Return of the Jedi.",
      "numbers": "",
      "pitfall": "Agencies quote recall and sales uplift figures for sonic branding that trace back to their own unpublished work; ask for the study before repeating the number. The other common failure is a mnemonic mixed on studio monitors that vanishes on a phone speaker.",
      "source": "USPTO trademark sound mark examples; Intel support article on its signature sound; THX on the Deep Note. Daniel M. Jackson, Sonic Branding: An Introduction (Palgrave Macmillan, 2003) is the standard book-length treatment.",
      "verify": {
        "status": "adjusted",
        "note": "Downgraded from verified because the Jackson book was originally cited as the source of the substance here, and only its catalogue record was ever checked (Palgrave Macmillan, 2003, ISBN 9781403905192). It is now listed as further reading rather than as the source. What I did read: the USPTO sound mark examples page, which lists NBC chimes under serial 72349496, MGM's roaring lion under 73553567, Intel under 75332744 and the THX logo theme under 74309951; Intel's support article for the bong description; and THX's own Deep Note page for the Moorer attribution. Intel names the composer and the notes but gives no date, so no year for the bong appears here. I found no peer-reviewed evidence for the recall statistics agencies quote, which is why none appear either."
      },
      "belongs": {
        "verdict": "core",
        "why": "Identity work extends past the eye, and a designer running a brand system is expected to specify sound the same way they specify colour and type."
      },
      "related": [
        314,
        822,
        849,
        850,
        755
      ]
    },
    {
      "n": 9756,
      "title": "Auditory icons",
      "aka": [
        "Everyday-sound feedback",
        "Gaver's icons"
      ],
      "oneLine": "Feedback sounds borrowed from the physical world, so the meaning arrives without being learned.",
      "demo": {
        "caption": "Same event, deleting a file. Left, a two-note motif that must be learned. Right, a thud and a crumple the ear already knows.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Learned motif</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 72\"><path class=\"s-mute\" d=\"M8 56H152\"/><rect class=\"f\" x=\"30\" y=\"34\" width=\"12\" height=\"22\"/><rect class=\"f\" x=\"52\" y=\"18\" width=\"12\" height=\"38\"/><text class=\"t\" x=\"8\" y=\"68\">TWO NOTES, MEANING DELETE</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Everyday sound</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 72\"><path class=\"s-mute\" d=\"M8 56H152\"/><path class=\"s-accent\" d=\"M14 56 L22 12 L32 56\"/><path class=\"s-accent\" d=\"M48 56 L54 34 L60 50 L66 28 L72 48 L78 36 L84 52 L90 42 L96 56\"/><text class=\"t\" x=\"8\" y=\"68\">THUD, THEN CRUMPLE</text></svg></div></div></div>"
      },
      "what": "William Gaver's 1986 paper proposed mapping computer events to the everyday sounds of analogous physical events: a file dropped in the bin sounds like something landing in a bin, a large file makes a heavier sound than a small one, a window opening makes an opening sound. People already know what those sounds mean from a lifetime of hearing them, so the interface does not have to teach a code. Gaver built the idea into the SonicFinder for the Macintosh in 1989, where the sound of a file changed with its size. The contrast is with earcons (#755), which are abstract musical motifs that have to be learned.",
      "why": "An auditory icon carries information for free. It can encode size, material and force in one sound, and it works without looking at the screen. It is also why a fake shutter on a phone camera has never needed a manual.",
      "how": [
        "Map each event to a real-world sound whose cause resembles what happened: arriving, leaving, filling, breaking.",
        "Vary the sound's parameters with the data, so a bigger file lands harder and an emptier bin rings hollower.",
        "Keep the set small and reuse it; three sounds people recognise beat twelve they must decode.",
        "Give every sound a visible equivalent, because sound is off, or unheard, most of the time (#758)."
      ],
      "example": "The crunch when a Macintosh empties its bin, and the shutter click on a phone camera. Neither has ever needed explaining, because the ear already knows what they mean.",
      "numbers": "No thresholds are published for auditory icons. The design rule is the mapping, not a level; loudness limits come from platform guidance and from #9758.",
      "pitfall": "Sounds that are literal about the wrong thing. A cartoon boing for an error is an auditory icon of a cartoon, not of a failure, and it teaches people to dismiss the event.",
      "source": "William W. Gaver, Auditory Icons: Using Sound in Computer Interfaces, Human-Computer Interaction 2(2), 167 to 177 (1986); William W. Gaver, The SonicFinder: An Interface That Uses Auditory Icons, Human-Computer Interaction 4(1) (1989)",
      "verify": {
        "status": "verified",
        "note": "Publication details for the 1986 paper were confirmed this session against the ACM Digital Library record (DOI 10.1207/s15327051hci0202_3) and the ERIC record: volume 2, issue 2, pages 167 to 177. The SonicFinder paper was confirmed as Gaver's 1989 follow-up in the same journal; its page numbers were not checked, so none are given. The bin and file-size examples are the standard ones associated with the SonicFinder."
      },
      "belongs": {
        "verdict": "core",
        "why": "Sound feedback that needs no learning is a design method with a named originator and a working implementation, and the earcons entry has no counterpart without it."
      },
      "related": [
        755,
        757,
        758,
        759
      ]
    },
    {
      "n": 757,
      "title": "Sound as confirmation",
      "aka": [
        "Auditory feedback",
        "Completion sound"
      ],
      "oneLine": "A short sound tells someone their action landed, especially when their eyes are somewhere else.",
      "demo": {
        "caption": "Press, slide off the button, release. With a distinct slip sound people noticed and recovered in half the time.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Silent button</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 112\"><rect class=\"s\" x=\"14\" y=\"24\" width=\"76\" height=\"30\" rx=\"3\"/><circle class=\"f\" cx=\"52\" cy=\"39\" r=\"3.5\"/><path class=\"s\" d=\"M52 39C78 41 96 50 118 62\"/><path class=\"f\" d=\"M120 64L112 63L114 57Z\"/><text class=\"t\" x=\"52\" y=\"18\" text-anchor=\"middle\">PRESS</text><text class=\"t\" x=\"68\" y=\"86\">SLIP OFF</text><text class=\"t\" x=\"116\" y=\"32\">NO CUE</text><text class=\"t\" x=\"8\" y=\"104\">RECOVERY 4.21 S</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Slip has its own sound</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 112\"><rect class=\"s\" x=\"14\" y=\"24\" width=\"76\" height=\"30\" rx=\"3\"/><circle class=\"f\" cx=\"52\" cy=\"39\" r=\"3.5\"/><path class=\"s\" d=\"M52 39C78 41 96 50 118 62\"/><path class=\"f\" d=\"M120 64L112 63L114 57Z\"/><path class=\"s-accent\" d=\"M124 54A12 12 0 0 1 124 70\"/><path class=\"s-accent\" d=\"M129 48A19 19 0 0 1 129 76\"/><path class=\"s-accent\" d=\"M134 42A26 26 0 0 1 134 82\"/><text class=\"t\" x=\"52\" y=\"18\" text-anchor=\"middle\">PRESS</text><text class=\"t\" x=\"68\" y=\"86\">SLIP OFF</text><text class=\"t\" x=\"110\" y=\"32\">SLIP TONE</text><text class=\"t\" x=\"8\" y=\"104\">RECOVERY 2.00 S</text></svg></div></div></div>"
      },
      "what": "A confirmation sound reports one discrete event: the photo was taken, the message went, the card was read. Android's guidance lists confirming a state change after a user action as one of three good reasons to add feedback, and the same logic applies to audio. The point is closing the loop on something the person just did, rather than narrating what the system is up to.",
      "why": "Feedback lands faster through the ear than through a small visual change nobody is looking at, so mistakes get noticed sooner. In Brewster's button experiment people recovered from slips about twice as fast, preferred the sonic buttons and did not rate them more annoying. Read that as sound outperforming the standard visual highlight, because in the auditory condition the buttons did not highlight at all; the study swapped the two channels rather than stacking them.",
      "how": [
        "Fire the sound on the state change itself, not on the start of the animation.",
        "Keep it short and quiet; the sounds in that study were deliberately low in level.",
        "Always pair it with a visible change, so nothing depends on hearing it.",
        "Give failure its own sound; success and failure sharing one beep teaches people nothing."
      ],
      "example": "Brewster, Wright, Dix and Edwards gave graphical buttons sounds so that a slip-off, where you press a button then slide off before releasing, sounded different from a proper press. Participants typed five-digit codes into a keypad in both conditions.",
      "numbers": "Twelve participants, within subjects. Average recovery from a slip-off was 2.00 seconds in the auditory condition against 4.21 seconds in the visual one (p = 0.004), and 1.5 mouse clicks against 5.89 (p = 0.0008). Overall preference for the sonic buttons was significant (p = 0.0003); annoyance was not significantly different either way.",
      "pitfall": "Read that study honestly before promising speed. Throughput did not improve: the sound group typed no more codes, and total time lost to errors was about the same, 13.2 seconds against 12.6, because they made slightly more slips.",
      "source": "Brewster, Wright, Dix and Edwards, The Sonic Enhancement of Graphical Buttons, INTERACT '95, with supporting platform guidance from Apple and Android.",
      "verify": {
        "status": "verified",
        "note": "Read the paper PDF hosted on Stephen Brewster's University of Glasgow page (Interact'95, Lillehammer, pages 43-48) and took every figure from its results section, including the null results quoted in the pitfall. Corrected one drift while checking: the entry previously described the study as adding sound to normal buttons, but the paper states that in the auditory condition the buttons stayed white with no visual highlighting, so it measured substitution rather than addition. It is a single study with twelve participants, so treat the effect size as indicative. Cross-checked the confirmation use case against Android's haptics design principles page, which does list confirming a state change after a user action as one of its three reasons for feedback."
      },
      "belongs": {
        "verdict": "core",
        "why": "Feedback is a first-order interaction principle, and this is the sound-shaped version of it that a designer has to specify event by event."
      },
      "related": [
        539,
        551,
        741,
        748
      ]
    },
    {
      "n": 9757,
      "title": "Perceived urgency mapping",
      "aka": [
        "Urgency mapping in alarms"
      ],
      "oneLine": "Acoustic parameters control how urgent a sound feels, so match that feeling to real severity.",
      "demo": {
        "caption": "Three alerts. Pulse rate, height and attack sharpness rise with severity, so the battery warning outranks the calendar nudge.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 18 360 154\"><path class=\"s-mute\" d=\"M100 40H352M100 94H352M100 150H352\"/><text class=\"t\" x=\"4\" y=\"44\">CALENDAR</text><path class=\"f-mute\" d=\"M108 40Q131 14 154 40Z\"/><path class=\"f-mute\" d=\"M208 40Q231 14 254 40Z\"/><text class=\"t\" x=\"100\" y=\"56\">2 PULSES / SLOW / SOFT ATTACK</text><text class=\"t\" x=\"4\" y=\"98\">SYNC FAILED</text><path class=\"f\" d=\"M110 94L116 72L128 94Z\"/><path class=\"f\" d=\"M156 94L162 72L174 94Z\"/><path class=\"f\" d=\"M202 94L208 72L220 94Z\"/><path class=\"f\" d=\"M248 94L254 72L266 94Z\"/><text class=\"t\" x=\"100\" y=\"110\">4 PULSES / FASTER / SHARPER</text><text class=\"t\" x=\"4\" y=\"154\">BATTERY LOW</text><path class=\"f-accent\" d=\"M104 150L104 118L114 150Z\"/><path class=\"f-accent\" d=\"M134 150L134 118L144 150Z\"/><path class=\"f-accent\" d=\"M164 150L164 118L174 150Z\"/><path class=\"f-accent\" d=\"M194 150L194 118L204 150Z\"/><path class=\"f-accent\" d=\"M224 150L224 118L234 150Z\"/><path class=\"f-accent\" d=\"M254 150L254 118L264 150Z\"/><path class=\"f-accent\" d=\"M284 150L284 118L294 150Z\"/><path class=\"f-accent\" d=\"M314 150L314 118L324 150Z\"/><text class=\"t\" x=\"100\" y=\"166\">8 PULSES / FAST / HARD ATTACK</text></svg></div>"
      },
      "what": "Edworthy, Loxley and Dennis measured which parts of a sound make listeners rate it as urgent. Fundamental frequency, harmonic series, amplitude envelope shape and delayed harmonics all had clear effects, as did speed, rhythm, pitch range and melodic structure. They then built thirteen warnings from those findings, predicted the order people would rank them in, and the prediction correlated significantly with what listeners reported. Urgency is a quantity you can design.",
      "why": "If every alert sounds like an emergency, people stop reacting to any of them, which is the alarm fatigue problem documented in intensive care from the early 1980s. Ranking alerts and matching sound urgency to consequence keeps the loud one meaningful.",
      "how": [
        "List every alert your product can make and rank them by what happens if they are missed.",
        "Give the top of that list faster pulses, higher pitch and a sharper attack; keep routine notices slow and soft.",
        "Check the rank order with listeners rather than your own ear, which has heard the sounds too often.",
        "Leave headroom: if the worst event is already at the ceiling, you cannot add anything above it later."
      ],
      "example": "The thirteen-warning set built and rank-ordered in the 1991 Human Factors paper, which is heavily cited in later aviation and medical alarm work.",
      "numbers": "Two experimental series, then a final set of thirteen warnings whose predicted urgency rank order correlated highly significantly with the order listeners produced. The paper gives no single urgency formula you can apply off the page, so treat it as a set of directions, not a calculator.",
      "pitfall": "Urgency gets set per feature by whoever built that feature, so the calendar nudge ends up sounding as serious as the low-battery warning. It needs one owner and one ranked list.",
      "source": "Edworthy, Loxley and Dennis, Improving Auditory Warning Design: Relationship between Warning Sound Parameters and Perceived Urgency, Human Factors 33(2), 205-231 (1991). Earlier practical guidance: Patterson, Guidelines for Auditory Warning Systems on Civil Aircraft, CAA Paper 82017 (1982).",
      "verify": {
        "status": "verified",
        "note": "Read the abstract and the full record on the Sage journal page: Human Factors 33(2), 205-231, published April 1991, PMID 1860703. The abstract names exactly the parameters quoted here and the set of thirteen warnings. I did not read the body of the paper, so nothing beyond the abstract is asserted. The Patterson CAA report and Kerr and Hayes's 1983 intensive care alarm paper both appear in its reference list, which is where I took them from; I have not read either, so the alarm fatigue sentence is background rather than a finding of this paper."
      },
      "belongs": {
        "verdict": "core",
        "why": "Added as a gap: any product with more than one alert has to decide which sounds more serious, and this is the only measured basis for that decision."
      },
      "related": [
        757,
        758,
        759
      ]
    },
    {
      "n": 758,
      "title": "Mute-first restraint",
      "aka": [
        "Silence by default",
        "No autoplay with sound"
      ],
      "oneLine": "Ship with sound off, obey the silent switch, and never start audio the user did not ask for.",
      "demo": {
        "caption": "Same player. Left starts loud with the stop control three steps in; right starts silent with the control visible.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Autoplays with sound</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col\"><div class=\"db-block\"></div><span class=\"db-note db-note--accent\">SOUND ON AT 0 S</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--quiet\">Menu</span><span class=\"db-arrow\">&gt;</span><span class=\"db-btn db-btn--sm db-btn--quiet\">Settings</span><span class=\"db-arrow\">&gt;</span><span class=\"db-btn db-btn--sm db-btn--quiet\">Mute</span></div><span class=\"db-note\">STOP CONTROL THREE STEPS IN</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Starts muted</span><div class=\"db-stage db-stage--tight\"><div class=\"db-card\"><div class=\"db-col\"><div class=\"db-block\"></div><span class=\"db-note\">SILENT AT 0 S</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Turn sound on</span></div><span class=\"db-note\">CONTROL VISIBLE BEFORE ANY SOUND</span></div></div></div></div></div>"
      },
      "what": "This is a working rule rather than a named law, and three published things hold it up. WCAG 2.2 Success Criterion 1.4.2, at Level A, says that if audio plays automatically for more than 3 seconds you must give a way to pause or stop it, or to control its volume separately from the system volume. Chrome has blocked autoplay with sound since Chrome 66 unless the person has interacted with the site, scores highly enough on desktop media engagement, or has installed it. On Apple platforms the audio session category decides whether your sound obeys the Ring/Silent switch: ambient categories do, playback does not.",
      "why": "Unexpected audio talks straight over the screen reader a blind user is listening to, which is why the WCAG criterion exists, and it embarrasses people in offices and waiting rooms. A quiet default is what makes the sounds you do play worth hearing.",
      "how": [
        "Default every non-essential sound to off, with the control findable before the sound plays rather than inside it.",
        "Choose the audio category honestly: if your sound is decoration, let the silent switch kill it.",
        "On the web, autoplay muted with a visible unmute, and never unmute on hover.",
        "If audible autoplay is unavoidable, give a stop control that works inside 3 seconds and takes keyboard focus early."
      ],
      "example": "Apple's guidance says that on tvOS the system plays audio only when people initiate it, and does not play sounds for alerts or notifications at all.",
      "numbers": "WCAG 2.2 SC 1.4.2 (Level A): the threshold is audio playing automatically for more than 3 seconds. Chrome's autoplay policy shipped in Chrome 66, April 2018.",
      "pitfall": "The mute control gets buried inside the noisy experience, so the person who most wants silence has to sit through the noise to find it. Muted autoplay that unmutes itself on hover is the same failure wearing a disguise.",
      "source": "W3C, WCAG 2.2 Success Criterion 1.4.2 Audio Control; Google's published Chrome autoplay policy; Apple Human Interface Guidelines, Playing audio. No single named originator.",
      "verify": {
        "status": "adjusted",
        "note": "The master list name is house terminology, not an established principle, and I have said so rather than inventing a source for it. What changed: reframed from a matter of taste to a rule with standards behind it. I read the W3C Understanding page for SC 1.4.2 for the exact 3 second wording and Level A rating, Google's Chrome autoplay policy article for the Chrome 66 date and conditions, and Apple's Playing audio page for the audio category table."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a Level A accessibility requirement and a browser-enforced platform rule, so a designer who ignores it ships something that is both unpleasant and non-conformant."
      },
      "related": [
        711,
        694,
        701,
        757
      ]
    },
    {
      "n": 9758,
      "title": "Loudness normalisation",
      "aka": [
        "EBU R 128",
        "LUFS targets"
      ],
      "oneLine": "Set every sound and video to one measured loudness so nothing in the product shouts.",
      "demo": {
        "caption": "Three clips. Left, peak-normalised to one ceiling and still uneven in loudness. Right, one loudness target, peaks wherever they fall.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Peak-normalised</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 76\"><path class=\"s-mute\" d=\"M8 60H152\"/><rect class=\"s-mute\" x=\"20\" y=\"10\" width=\"22\" height=\"50\" fill=\"none\"/><rect class=\"f\" x=\"24\" y=\"46\" width=\"14\" height=\"14\"/><text class=\"t\" x=\"20\" y=\"70\">VOICE</text><rect class=\"s-mute\" x=\"66\" y=\"10\" width=\"22\" height=\"50\" fill=\"none\"/><rect class=\"f\" x=\"70\" y=\"14\" width=\"14\" height=\"46\"/><text class=\"t\" x=\"66\" y=\"70\">STING</text><rect class=\"s-mute\" x=\"112\" y=\"10\" width=\"22\" height=\"50\" fill=\"none\"/><rect class=\"f\" x=\"116\" y=\"30\" width=\"14\" height=\"30\"/><text class=\"t\" x=\"112\" y=\"70\">MUSIC</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Loudness-normalised</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 76\"><path class=\"s-mute\" d=\"M8 60H152\"/><path class=\"s-accent\" d=\"M8 30H152\" stroke-dasharray=\"3 3\"/><text class=\"t\" x=\"118\" y=\"26\">-23 LUFS</text><rect class=\"s-mute\" x=\"20\" y=\"20\" width=\"22\" height=\"40\" fill=\"none\"/><rect class=\"f\" x=\"24\" y=\"30\" width=\"14\" height=\"30\"/><text class=\"t\" x=\"20\" y=\"70\">VOICE</text><rect class=\"s-mute\" x=\"66\" y=\"8\" width=\"22\" height=\"52\" fill=\"none\"/><rect class=\"f\" x=\"70\" y=\"30\" width=\"14\" height=\"30\"/><text class=\"t\" x=\"66\" y=\"70\">STING</text><rect class=\"s-mute\" x=\"112\" y=\"16\" width=\"22\" height=\"44\" fill=\"none\"/><rect class=\"f\" x=\"116\" y=\"30\" width=\"14\" height=\"30\"/><text class=\"t\" x=\"112\" y=\"70\">MUSIC</text></svg></div></div></div>"
      },
      "what": "Loudness is not peak level. Two clips can touch the same maximum and differ enormously in how loud they sound, because loudness is energy over time as the ear weights it. EBU Recommendation R 128, first published in August 2010 and now at version 5.0 (November 2023), fixes the measurement (ITU-R BS.1770) and sets a programme loudness target of minus 23 LUFS, with a tolerance of plus or minus 0.5 LU for file-based work and plus or minus 1 LU for live, and a maximum true peak of minus 1 dBTP. Supplement R 128 s1 covers short-form content such as adverts and promos. The target is for broadcast; streaming services set their own, so check the platform rather than assuming.",
      "why": "Interface sounds, notification tones, autoplay video and background music in a product are heard one after another. Set by ear, or by peak, the quiet ones get missed and the loud ones send people to the mute switch, which is the failure #758 exists to prevent.",
      "how": [
        "Measure every sound asset in LUFS with a BS.1770 meter, not by looking at the waveform.",
        "Pick one target for the product and normalise every asset to it: minus 23 LUFS where broadcast rules apply, the platform's own figure elsewhere.",
        "Hold true peaks at minus 1 dBTP or below so lossy encoding does not clip.",
        "Treat short interface sounds like short-form content: consistent with each other, and never louder than the speech around them."
      ],
      "example": "A notification tone mastered to sound punchy on its own lands well above the podcast the person is listening to. It is the loudest thing they hear all day, and the app gets muted.",
      "numbers": "EBU R 128: programme loudness minus 23 LUFS; tolerance plus or minus 0.5 LU (plus or minus 1 LU for live); maximum true peak minus 1 dBTP; measured to ITU-R BS.1770. First published August 2010; version 5.0 November 2023.",
      "pitfall": "Normalising to peak. Every clip touches the ceiling and the loudness still swings, because peak says nothing about energy over time.",
      "source": "EBU Recommendation R 128, Loudness normalisation and permitted maximum level of audio signals (EBU, 2010; version 5.0, 2023), with supplement R 128 s1 for short-form content; ITU-R BS.1770 for the measurement",
      "verify": {
        "status": "verified",
        "note": "The target, tolerances, true-peak limit and revision dates were checked this session against the EBU's published R 128 page and PDF and the s1 supplement. Streaming platforms' own targets were left out because they change and were not checked."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "Loudness is audio engineering rather than design, but any product that plays sound has to pick a target, and the mute-first entry has no number to work with without it."
      },
      "related": [
        758,
        10041,
        755,
        9756
      ]
    },
    {
      "n": 759,
      "title": "Haptic vocabulary",
      "aka": [
        "Haptic patterns",
        "Named feedback types"
      ],
      "oneLine": "A small fixed set of named vibrations, each tied to one meaning and reused everywhere.",
      "demo": {
        "caption": "Six events as impulse patterns. Left invents one per event; right reuses three named patterns, so the hand can learn them.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">A custom buzz per event</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 152\"><path class=\"s-mute\" d=\"M76 20H120M76 44H120M76 68H120M76 92H120M76 116H120M76 140H120\"/><text class=\"t\" x=\"2\" y=\"20\">SAVED</text><path class=\"s\" d=\"M78 20V14M86 20V8M94 20V12M102 20V6\"/><text class=\"t\" x=\"126\" y=\"20\">CUSTOM</text><text class=\"t\" x=\"2\" y=\"44\">SENT</text><rect class=\"f-mute\" x=\"78\" y=\"39\" width=\"34\" height=\"5\"/><path class=\"s\" d=\"M118 44V34\"/><text class=\"t\" x=\"126\" y=\"44\">CUSTOM</text><text class=\"t\" x=\"2\" y=\"68\">PAID</text><path class=\"s\" d=\"M78 68V54M88 68V64M98 68V54M108 68V64M118 68V54\"/><text class=\"t\" x=\"126\" y=\"68\">CUSTOM</text><text class=\"t\" x=\"2\" y=\"92\">LIMIT</text><rect class=\"f-mute\" x=\"78\" y=\"87\" width=\"16\" height=\"5\"/><rect class=\"f-mute\" x=\"100\" y=\"87\" width=\"16\" height=\"5\"/><text class=\"t\" x=\"126\" y=\"92\">CUSTOM</text><text class=\"t\" x=\"2\" y=\"116\">FAILED</text><path class=\"s\" d=\"M78 116V100M84 116V110M90 116V100M96 116V110M102 116V100\"/><text class=\"t\" x=\"126\" y=\"116\">CUSTOM</text><text class=\"t\" x=\"2\" y=\"140\">DECLINED</text><path class=\"s\" d=\"M78 140V130M116 140V124\"/><rect class=\"f-mute\" x=\"84\" y=\"135\" width=\"26\" height=\"5\"/><text class=\"t\" x=\"126\" y=\"140\">CUSTOM</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three named patterns, reused</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 152\"><path class=\"s-mute\" d=\"M76 20H120M76 44H120M76 68H120M76 92H120M76 116H120M76 140H120\"/><text class=\"t\" x=\"2\" y=\"20\">SAVED</text><path class=\"s\" d=\"M78 20V12M88 20V6\"/><text class=\"t\" x=\"126\" y=\"20\">SUCCESS</text><text class=\"t\" x=\"2\" y=\"44\">SENT</text><path class=\"s\" d=\"M78 44V36M88 44V30\"/><text class=\"t\" x=\"126\" y=\"44\">SUCCESS</text><text class=\"t\" x=\"2\" y=\"68\">PAID</text><path class=\"s\" d=\"M78 68V60M88 68V54\"/><text class=\"t\" x=\"126\" y=\"68\">SUCCESS</text><text class=\"t\" x=\"2\" y=\"92\">LIMIT</text><path class=\"s\" d=\"M78 92V78\"/><rect class=\"f-mute\" x=\"86\" y=\"87\" width=\"22\" height=\"5\"/><text class=\"t\" x=\"126\" y=\"92\">WARNING</text><text class=\"t\" x=\"2\" y=\"116\">FAILED</text><path class=\"s\" d=\"M78 116V104M86 116V104M94 116V104\"/><text class=\"t\" x=\"126\" y=\"116\">ERROR</text><text class=\"t\" x=\"2\" y=\"140\">DECLINED</text><path class=\"s\" d=\"M78 140V128M86 140V128M94 140V128\"/><text class=\"t\" x=\"126\" y=\"140\">ERROR</text></svg></div></div></div>"
      },
      "what": "Both mobile platforms ship a named set, and the discipline is using theirs rather than inventing yours. Apple defines notification haptics (success, warning, error), impact haptics (light, medium, heavy, rigid, soft) and selection; watchOS adds up, down, failure, retry, start, stop and click. Android tells developers to reach for action-oriented constants in HapticFeedbackConstants first. Apple's instruction is blunt: use system patterns according to their documented meanings, and where the meaning does not fit, use a generic pattern or build your own rather than repurpose one.",
      "why": "People learn these patterns across every app on the device, so borrowing them correctly means your product is understood on first use. Using the success buzz for a failure is the haptic version of a green error message.",
      "how": [
        "Write a table of event, meaning and pattern, and allow exactly one pattern per meaning.",
        "Prefer platform constants, so the system can substitute a fallback on hardware that cannot play the fancy effect.",
        "Design the haptic, the animation and the sound in one sitting; a haptic out of sync with its animation reads as a broken phone.",
        "Let people switch haptics off, and check the product still makes sense without them."
      ],
      "example": "Apple's Playing haptics page gives each pattern a one-line meaning: light impact for a collision between small objects, heavy for large ones, selection for a value changing as you scroll a picker.",
      "numbers": "Android says a good keyclick haptic should last 10 to 20 milliseconds, and warns that the actuator may keep ringing for another 20 to 50 milliseconds after a 20 millisecond input.",
      "pitfall": "Adding a custom buzz to every tap to feel premium. Apple's line is that the best haptic is often one people are not conscious of but miss when it is gone; overuse numbs the hand and gets the feature switched off.",
      "source": "Apple Human Interface Guidelines, Playing haptics; Android developers, Haptics design principles.",
      "verify": {
        "status": "verified",
        "note": "Read both pages in full this session. The pattern names, the instruction about documented meanings and the 10 to 20 millisecond keyclick figure are quoted from them directly."
      },
      "belongs": {
        "verdict": "core",
        "why": "Touch is a real output channel on every phone shipped today, and a shared vocabulary is what stops each app teaching a different language."
      },
      "related": [
        760,
        757,
        554,
        539
      ]
    },
    {
      "n": 9759,
      "title": "Tactons (structured tactile messages)",
      "aka": [
        "Tactile icons",
        "Vibrotactile messages"
      ],
      "oneLine": "Vibration patterns built from a few parameters, so a message can be felt without being seen or heard.",
      "demo": {
        "caption": "Three messages from two parameters, rhythm and strength. Each row is one thing a hand can learn to tell from the others.",
        "html": "<div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 84\"><path class=\"s-mute\" d=\"M70 22H232M70 48H232M70 74H232\"/><text class=\"t\" x=\"4\" y=\"22\">TWO TAPS</text><rect class=\"f\" x=\"74\" y=\"12\" width=\"10\" height=\"10\"/><rect class=\"f\" x=\"92\" y=\"12\" width=\"10\" height=\"10\"/><text class=\"t\" x=\"4\" y=\"48\">LONG BUZZ</text><rect class=\"f\" x=\"74\" y=\"38\" width=\"70\" height=\"10\"/><text class=\"t\" x=\"4\" y=\"74\">THREE STRONG</text><rect class=\"f-accent\" x=\"74\" y=\"56\" width=\"10\" height=\"18\"/><rect class=\"f-accent\" x=\"92\" y=\"56\" width=\"10\" height=\"18\"/><rect class=\"f-accent\" x=\"110\" y=\"56\" width=\"10\" height=\"18\"/></svg></div>"
      },
      "what": "Stephen Brewster and Lorna Brown proposed tactons in 2004 as the tactile counterpart of icons and earcons: abstract, structured messages made from the parameters a vibration motor can vary, which they list as frequency, amplitude, waveform, duration, rhythm, body location and spatiotemporal pattern. A tacton can stand for a message on its own, or be combined so that rhythm carries one meaning and intensity another. Their later work with Helen Purchase tested how many such dimensions people can tell apart at once. The platform haptic vocabularies in #759 are tactons by another name, chosen and tested by Apple and Google so you do not have to.",
      "why": "Touch is the channel that still works when the screen is in a pocket, the room is loud or the person cannot see. A structured set of felt messages lets a device say more than buzz, without demanding attention.",
      "how": [
        "Build messages from at most two or three parameters; rhythm and intensity are the easiest to tell apart by feel.",
        "Reuse the platform's named patterns before inventing any (#759).",
        "Tie each pattern to one meaning and keep it stable across the product.",
        "Test with the device in a pocket and in a hand, because body location changes what can be felt."
      ],
      "example": "A watch that taps twice for a message and gives one long buzz for a call is using a two-tacton vocabulary. The wearer learns it in a day without a manual.",
      "numbers": "Brewster and Brown list seven parameters: frequency, amplitude, waveform, duration, rhythm, body location and spatiotemporal pattern. No recognition thresholds are given here; the 2004 paper is a design proposal and the later studies vary by device.",
      "pitfall": "Encoding meaning in a parameter phones cannot reproduce. Most consumer actuators do frequency and waveform poorly, so a set that relies on them collapses to one buzz.",
      "source": "Stephen Brewster and Lorna M. Brown, Tactons: Structured Tactile Messages for Non-Visual Information Display, Proceedings of the Fifth Australasian User Interface Conference (AUIC 2004), Dunedin; Lorna M. Brown, Stephen Brewster and Helen Purchase, Multidimensional Tactons for Non-Visual Information Presentation in Mobile Devices, MobileHCI 2006",
      "verify": {
        "status": "verified",
        "note": "The 2004 paper and its venue were confirmed this session from the University of Glasgow eprint and the Semantic Scholar record; the seven-parameter list is the paper's own. The 2006 follow-up was confirmed as a MobileHCI paper from the copy hosted at Columbia; its recognition figures were not read, so none are quoted."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the named origin of structured haptic feedback, and the haptic vocabulary entry rests on it."
      },
      "related": [
        759,
        760,
        755,
        9756
      ]
    },
    {
      "n": 760,
      "title": "Haptic intensity mapping",
      "aka": [
        "Strength to importance mapping"
      ],
      "oneLine": "Match how strong a vibration feels to how important and how frequent the event is.",
      "demo": {
        "caption": "Bar height is vibration strength. The constant events barely register; strength is saved for the rare, consequential ones.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 160\"><path class=\"s-mute\" d=\"M40 22V112H352\"/><text class=\"t\" x=\"34\" y=\"25\" text-anchor=\"end\">1.0</text><text class=\"t\" x=\"34\" y=\"115\" text-anchor=\"end\">0</text><text class=\"t\" x=\"44\" y=\"14\">INTENSITY (CORE HAPTICS 0-1)</text><rect class=\"f\" x=\"52\" y=\"100\" width=\"42\" height=\"12\"/><rect class=\"f\" x=\"116\" y=\"88\" width=\"42\" height=\"24\"/><rect class=\"f\" x=\"180\" y=\"70\" width=\"42\" height=\"42\"/><rect class=\"f\" x=\"244\" y=\"49\" width=\"42\" height=\"63\"/><rect class=\"f\" x=\"308\" y=\"30\" width=\"42\" height=\"82\"/><text class=\"t\" x=\"73\" y=\"126\" text-anchor=\"middle\">SCROLL</text><text class=\"t\" x=\"137\" y=\"126\" text-anchor=\"middle\">PICKER</text><text class=\"t\" x=\"201\" y=\"126\" text-anchor=\"middle\">TOGGLE</text><text class=\"t\" x=\"265\" y=\"126\" text-anchor=\"middle\">SUBMIT</text><text class=\"t\" x=\"329\" y=\"126\" text-anchor=\"middle\">ERROR</text><text class=\"t\" x=\"52\" y=\"144\">MANY TIMES A MINUTE</text><text class=\"t\" x=\"352\" y=\"144\" text-anchor=\"end\">RARE, CONSEQUENTIAL</text><path class=\"s-mute\" d=\"M52 152H344\"/><path class=\"f-mute\" d=\"M352 152L342 148L342 156Z\"/></svg></div>"
      },
      "what": "Google states this as a design guideline: correlate event importance and frequency with strength. Frequent events such as scrolling or dragging a text handle get something barely there; consequential ones such as submitting a form get something firmer. Both platforms give you the dial. Apple's Core Haptics gives every event an intensity and a sharpness; Android takes an amplitude per vibration, or an array of them across a waveform.",
      "why": "Strength is how the hand reads priority, the way size is how the eye reads hierarchy. A product where every haptic feels identical has thrown away its only ranking dimension, and one where everything is strong reads as broken.",
      "how": [
        "Rank every haptic event by frequency and by consequence, then let strength follow that ranking.",
        "Reserve the firmest patterns for a handful of events; if everything is heavy, nothing registers as heavy.",
        "Match intensity and sharpness to the animation the haptic accompanies, which is Apple's stated guidance.",
        "Ramp amplitude across a sequence of ticks to signal approach to a snap point, which is Android's worked example.",
        "Test on a cheap handset as well as a flagship; the same value can be imperceptible on one actuator and jarring on another."
      ],
      "example": "Android suggests gradually increasing the amplitude of a sequence of ticks as a drag approaches its drop or snap target, so the hand feels the target coming.",
      "numbers": "Core Haptics HapticIntensity and HapticSharpness both run 0 to 1, as do attack, decay and release. Android's createOneShot takes an amplitude of 1 to 255, waveform amplitudes run 0 to 255 with 0 meaning the motor is off, and the predefined ladder is EFFECT_TICK, then EFFECT_CLICK, then EFFECT_HEAVY_CLICK.",
      "pitfall": "Intensity gets tuned by feel on one expensive phone in a quiet room. Actuators differ enormously, so a value that reads as a refined tap in the studio arrives as a dead nudge or an alarming jolt elsewhere.",
      "source": "Android developers, Haptics design principles; Apple, Core Haptics and the AHAP file parameter reference.",
      "verify": {
        "status": "verified",
        "note": "Read Google's guideline headed Correlate event importance and frequency with strength, Apple's AHAP parameter table for the 0 to 1 ranges, and the android.os.VibrationEffect reference for the 1 to 255 amplitude range and the predefined effect constants."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "Downgraded from core. The rule is real and the parameter ranges are published, but it is the strength clause of the haptic vocabulary in 759 rather than an idea of its own, and the entry's own author said so. Keep it for the numbers; read it as a rider on 759."
      },
      "related": [
        759,
        757,
        748
      ]
    },
    {
      "n": 9760,
      "title": "Standard beep patterns for products",
      "aka": [
        "ISO 24500",
        "Accessible auditory signals"
      ],
      "oneLine": "Fixed-frequency feedback beeps on consumer products follow an international standard chosen by testing with visually impaired users.",
      "demo": {
        "caption": "Three feedback events as beep patterns, kept apart by rhythm. The standard fixes patterns like these so a beep means the same thing on every product.",
        "html": "<div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 240 84\"><path class=\"s-mute\" d=\"M70 22H232M70 48H232M70 74H232\"/><text class=\"t\" x=\"4\" y=\"22\">ACCEPTED</text><rect class=\"f\" x=\"74\" y=\"12\" width=\"12\" height=\"10\"/><text class=\"t\" x=\"4\" y=\"48\">REFUSED</text><rect class=\"f-accent\" x=\"74\" y=\"38\" width=\"12\" height=\"10\"/><rect class=\"f-accent\" x=\"92\" y=\"38\" width=\"12\" height=\"10\"/><rect class=\"f-accent\" x=\"110\" y=\"38\" width=\"12\" height=\"10\"/><text class=\"t\" x=\"4\" y=\"74\">FINISHED</text><rect class=\"f\" x=\"74\" y=\"64\" width=\"40\" height=\"10\"/><rect class=\"f\" x=\"122\" y=\"64\" width=\"40\" height=\"10\"/></svg></div>"
      },
      "what": "ISO 24500:2010, Ergonomics, Accessible design, Auditory signals for consumer products, specifies the beep patterns used as feedback for operations and conditions of consumer products, for people with and without visual or hearing impairment. It applies to fixed-frequency signals in general use, the ordinary beep, and not to melodic or variable-frequency sounds, chimes, voice prompts or telephone sounds, nor to alarm and danger signals, which other standards cover (ISO 7731, ISO 8201, ISO 11429). It does not set sound pressure levels; the companion ISO 24501:2010 does that. The patterns were chosen from experiments with participants across age ranges and degrees of visual impairment.",
      "why": "A kettle, a microwave and a card reader that each invent their own beeps leave a person with low vision guessing which one meant no. Standard patterns make the meaning portable between products, which is the whole value of a convention.",
      "how": [
        "Use the standard's patterns for accept, refuse and finish rather than inventing a house set, when designing a physical product with a beeper.",
        "Keep alarm and danger sounds on their own standards; the beep set is for feedback only.",
        "Pair every beep with a visible state, because hearing loss and noisy rooms are common (#758).",
        "Set levels from ISO 24501 or the platform, not by ear in a quiet studio."
      ],
      "example": "Contactless readers, appliances and ticket gates each teach their own beeps. The standard exists so a refusal sounds like a refusal on all of them.",
      "numbers": "ISO 24500:2010 specifies patterns, not levels. Sound pressure levels for the same signals are in ISO 24501:2010. Alarm and danger signals are excluded and belong to ISO 7731, ISO 8201 and ISO 11429.",
      "pitfall": "Reading the standard as covering alarms. It excludes them by design, so a product that uses its feedback beeps for a fault condition has used the wrong document.",
      "source": "ISO 24500:2010, Ergonomics, Accessible design, Auditory signals for consumer products (International Organization for Standardization, 2010); ISO 24501:2010 for sound pressure levels",
      "verify": {
        "status": "verified",
        "note": "Scope, inclusions and exclusions were checked this session against the ISO catalogue entry and the Online Browsing Platform abstract for ISO 24500:2010, and the companion ISO 24501:2010 was confirmed from its own preview. The standard itself is paywalled and the specific patterns were not read, which is why none are described and the demo draws patterns like them rather than the standard's own."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "It is a product-engineering standard rather than a design principle, kept because it is the one place feedback sounds are fixed by evidence rather than by taste."
      },
      "related": [
        758,
        755,
        9756,
        760
      ]
    }
  ]
};
