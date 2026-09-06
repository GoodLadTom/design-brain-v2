window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[7] = {
  "n": 7,
  "slug": "colour",
  "title": "Colour",
  "blurb": "How colour is built, measured, named and set against itself, from RGB to Albers's classroom experiments.",
  "intro": "Colour splits into two halves that rarely meet. One half is measurement: how light and ink actually behave, and the systems built to pin a colour down so two people in different rooms can agree on it. The other half is perception, where a colour shifts depending on what sits beside it and nothing can be judged alone. This part runs through both, from the additive and subtractive models through Munsell, CIELAB, OKLCH and HCT, then into the teaching experiments Johannes Itten and Josef Albers used for the perceptual side. Most colour mistakes in professional work come from applying a rule from one half to a problem in the other.",
  "sources": [
    "James Clerk Maxwell, three-colour projection demonstration (1861)",
    "Albert H. Munsell, A Color Notation (1905)",
    "Ewald Hering, opponent-colour theory, usually dated 1892; Grundzuge der Lehre vom Lichtsinn (1905-1920)",
    "W. D. Ross (ed.), The Works of Aristotle vol 3 (Clarendon, 1931), 375a, on colours in woven stuffs",
    "David Katz, Die Erscheinungsweisen der Farben (1911), revised as Der Aufbau der Farbwelt (1930)",
    "Michel Eugene Chevreul, De la loi du contraste simultane des couleurs (1839)",
    "George Field, Chromatography (1835)",
    "Adolf Holzel, colour contrast list (1904)",
    "Johannes Itten, Kunst der Farbe / The Art of Color (Otto Maier Verlag, 1961)",
    "Josef Albers, Interaction of Color (Yale University Press, 1963)",
    "George Joblove and Donald Greenberg, Color Spaces for Computer Graphics, SIGGRAPH (1978)",
    "CIE 1976 L*a*b* (CIELAB), International Commission on Illumination (1976)",
    "Bjorn Ottosson, A perceptual color space for image processing (Oklab, 2020)",
    "W3C, CSS Color Module Level 4",
    "Google, Material Design 3 and material-color-utilities (HCT)",
    "Swedish Colour Centre Foundation, Natural Colour System (developed from 1964)",
    "Robert Hirschler and Andreas Schwarz, Itten's seven colour contrasts: a review, Journal of the International Colour Association vol 33 (2023), Part I pp 136-154, Part II pp 155-170, Part III pp 171-177",
    "Alvy Ray Smith, Color Gamut Transform Pairs, Computer Graphics 12(3), SIGGRAPH 78 proceedings (August 1978)",
    "Bevil R. Conway, Saima Malik-Moraleda and Edward Gibson, Color appearance and the end of Hering's Opponent-Colors Theory, Trends in Cognitive Sciences 27(9) (2023)",
    "Rosa Lafer-Sousa, Katherine Hermann and Bevil Conway, Striking individual differences in color perception uncovered by 'the dress' photograph, Current Biology (2015)",
    "Josef Albers, Interaction of Color (1963)",
    "Michel-Eugene Chevreul, De la loi du contraste simultane des couleurs (1839)",
    "Johannes Itten, The Art of Color (1961)",
    "W3C, Web Content Accessibility Guidelines 2.2, Understanding documents",
    "Andrew Somers / Myndex Research, APCA documentation",
    "Masataka Okabe and Kei Ito, Color Universal Design (2008)",
    "Cynthia A. Brewer, Geoffrey W. Hatchard and Mark A. Harrower, ColorBrewer in Print, Cartography and Geographic Information Science 30(1) (2003)",
    "David Borland and Russell Taylor II, Rainbow Color Map (Still) Considered Harmful, IEEE Computer Graphics and Applications 27(2) (2007)",
    "Stefan van der Walt and Nathaniel Smith, viridis colour maps, SciPy (2015)",
    "Bjorn Ottosson, A perceptual color space for image processing (2020)",
    "International Color Consortium, ICC.1 profile specification (v4)",
    "IEC 61966-2-1:1999, sRGB",
    "ISO 3664:2009, Graphic technology and photography, viewing conditions",
    "Mubeen M. Aslam, Are You Selling the Right Colour?, Journal of Marketing Communications 12(1) (2006)",
    "Qualitex Co. v Jacobson Products Co., US Supreme Court (1995)",
    "Google, Material Design dark theme guidance"
  ],
  "entries": [
    {
      "n": 269,
      "title": "Additive colour (RGB)",
      "aka": [
        "Light mixing",
        "RGB"
      ],
      "oneLine": "Colours made by adding light, where red, green and blue emitters sum to white.",
      "demo": {
        "caption": "Light adds up. Each row mixes emitters, so the result is lighter than its parts and all three give white.",
        "html": "<div class=\"db-stage db-stage--dark\"><div class=\"db-col\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-swatch\" style=\"background:#FF0000\"></span><span class=\"db-note\">+</span><span class=\"db-swatch\" style=\"background:#00FF00\"></span><span class=\"db-note\">=</span><span class=\"db-swatch\" style=\"background:#FFFF00\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-swatch\" style=\"background:#00FF00\"></span><span class=\"db-note\">+</span><span class=\"db-swatch\" style=\"background:#0000FF\"></span><span class=\"db-note\">=</span><span class=\"db-swatch\" style=\"background:#00FFFF\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-swatch\" style=\"background:#0000FF\"></span><span class=\"db-note\">+</span><span class=\"db-swatch\" style=\"background:#FF0000\"></span><span class=\"db-note\">=</span><span class=\"db-swatch\" style=\"background:#FF00FF\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-swatch\" style=\"background:#FF0000\"></span><span class=\"db-note\">+</span><span class=\"db-swatch\" style=\"background:#00FF00\"></span><span class=\"db-note\">+</span><span class=\"db-swatch\" style=\"background:#0000FF\"></span><span class=\"db-note\">=</span><span class=\"db-swatch\" style=\"background:#FFFFFF\"></span></div></div></div>"
      },
      "what": "Screens emit light rather than reflect it. Overlapping red, green and blue light adds up, so more light gives a lighter result and all three at full strength read as white. Pairs of primaries give cyan, magenta and yellow. James Clerk Maxwell demonstrated the principle at the Royal Institution in 1861, using a tartan ribbon that Thomas Sutton photographed three times through red, green and blue filters, then projecting the three images back through the same filters onto one screen.",
      "why": "Every screen you design for works this way, so the mental model has to be additive rather than the paint mixing taught at school. It explains why intense colour is cheap on a display and expensive in ink, and why adding colour lightens rather than darkens.",
      "how": [
        "Treat white as full RGB and black as the absence of light, then check dark themes are genuinely emitting less rather than just looking grey.",
        "Remember hex values are gamma-encoded, not linear light, so averaging two hex codes does not give the perceptual midpoint. Mix in a perceptual space instead (273).",
        "Do not carry print habits over: there is no such thing as a rich black on screen.",
        "Green carries most of the perceived brightness, so a green shift affects legibility far more than a blue one."
      ],
      "example": "Hold a loupe or a strong magnifier against a white patch on any screen and the white resolves into separate red, green and blue subpixels, all running at full output.",
      "numbers": "sRGB relative luminance weights, as used by WCAG 2: 0.2126 red, 0.7152 green, 0.0722 blue.",
      "pitfall": "Assuming screen mixing behaves like paint. Yellow light plus blue light gives a pale near-white, not green, and designers who expect otherwise build broken blend modes.",
      "source": "James Clerk Maxwell's 1861 three-colour projection; standardised for screens as sRGB (IEC 61966-2-1).",
      "verify": {
        "status": "verified",
        "note": "Checked Maxwell's 1861 tartan ribbon demonstration and the RGB primary structure against reference descriptions of additive colour this session. The photographs were taken by Thomas Sutton, not by Maxwell, so the entry now says so. The luminance weights are the published WCAG 2 relative luminance coefficients. The original example claimed a phone camera could resolve subpixels, which I could not support, so it now says loupe or magnifier."
      },
      "belongs": {
        "verdict": "core",
        "why": "The physical model underneath every screen a designer works on. Getting it wrong breaks blending, dark mode and contrast reasoning."
      },
      "related": [
        270,
        273,
        280,
        316
      ]
    },
    {
      "n": 270,
      "title": "Subtractive colour (CMY / CMYK)",
      "aka": [
        "Four-colour process",
        "Process colour"
      ],
      "oneLine": "Colours made by removing light, where cyan, magenta and yellow inks each absorb part of the spectrum.",
      "demo": {
        "caption": "Ink takes light away, so every overlap darkens. All three make a muddy brown, which is why a black plate exists.",
        "html": "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-swatch\" style=\"background:#00AEEF\"></span><span class=\"db-note\">+</span><span class=\"db-swatch\" style=\"background:#EC008C\"></span><span class=\"db-note\">=</span><span class=\"db-swatch\" style=\"background:#2E3192\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-swatch\" style=\"background:#EC008C\"></span><span class=\"db-note\">+</span><span class=\"db-swatch\" style=\"background:#FFF200\"></span><span class=\"db-note\">=</span><span class=\"db-swatch\" style=\"background:#ED1C24\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-swatch\" style=\"background:#00AEEF\"></span><span class=\"db-note\">+</span><span class=\"db-swatch\" style=\"background:#FFF200\"></span><span class=\"db-note\">=</span><span class=\"db-swatch\" style=\"background:#00A651\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-swatch\" style=\"background:#00AEEF\"></span><span class=\"db-note\">+</span><span class=\"db-swatch\" style=\"background:#EC008C\"></span><span class=\"db-note\">+</span><span class=\"db-swatch\" style=\"background:#FFF200\"></span><span class=\"db-note\">=</span><span class=\"db-swatch\" style=\"background:#3E2E2A\"></span><span class=\"db-note\">three-ink black</span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-note\">key plate</span><span class=\"db-swatch\" style=\"background:#000000\"></span></div></div></div>"
      },
      "what": "Ink and paint take wavelengths out of the light that hits them. Cyan, magenta and yellow each subtract roughly a third of the spectrum, so stacking them darkens rather than lightens. Commercial printing adds a fourth ink, black, called the key plate, because three-ink black comes out muddy, floods the paper with ink and cannot hold fine text or outlines. Continuous tone is faked by halftoning: small dots of varying size and spacing that the eye averages.",
      "why": "It is why the colour you signed off on a display arrives dull on paper. Ink cannot reach the saturated cyans, oranges and greens a backlit screen produces, so the print gamut is much smaller and the conversion has to throw colour away somewhere.",
      "how": [
        "Work in CMYK from the start for print, or at least soft-proof with the printer's profile before showing a client.",
        "Set small text in black only, never a four-colour build, or any misregistration on press shows as coloured fringing.",
        "Ask the printer for their profile and total ink limit rather than guessing.",
        "Where a colour has to be exact, specify a spot ink instead of a process build (277)."
      ],
      "example": "Look at any four-colour magazine photograph under a loupe and you see cyan, magenta, yellow and black halftone dots, each screen set at a different angle so the pattern does not moire.",
      "numbers": "",
      "pitfall": "Converting a finished RGB file to CMYK the night before delivery. The saturated colours flatten out, the blacks change, and there is no time left to compensate.",
      "source": "Standard four-colour process printing; origin unclear as a single invention.",
      "verify": {
        "status": "verified",
        "note": "Checked the role of the black key plate, halftoning and the gamut difference against reference descriptions of the CMYK model. I found no authoritative published total ink limit that applies generally, so no number is quoted."
      },
      "belongs": {
        "verdict": "core",
        "why": "Anyone who produces printed work needs the subtractive model to predict what will happen on press."
      },
      "related": [
        269,
        277,
        322,
        323
      ]
    },
    {
      "n": 271,
      "title": "HSL / HSB",
      "aka": [
        "HSV",
        "Hue, saturation, lightness"
      ],
      "oneLine": "Cylindrical rearrangements of RGB that let people pick colour by hue, saturation and a brightness axis.",
      "demo": {
        "caption": "Six hues, every one at HSL lightness 50 per cent. Desaturated, the yellow is nearly white and the blue nearly black.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">All at HSL lightness 50%</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#FF0000\"></span><span style=\"background:#FFFF00\"></span><span style=\"background:#00FF00\"></span><span style=\"background:#00FFFF\"></span><span style=\"background:#0000FF\"></span><span style=\"background:#FF00FF\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">The same six, desaturated</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#7F7F7F\"></span><span style=\"background:#F7F7F7\"></span><span style=\"background:#DCDCDC\"></span><span style=\"background:#E5E5E5\"></span><span style=\"background:#4C4C4C\"></span><span style=\"background:#919191\"></span></div></div></div></div>"
      },
      "what": "HSL and HSB (also called HSV) reshape the RGB cube into a cylinder so a colour can be picked by hue angle, a saturation figure and a lightness or brightness figure. Alvy Ray Smith published HSV in Color Gamut Transform Pairs at SIGGRAPH in 1978; George Joblove and Donald Greenberg published a lightness variant in the same proceedings. Both are arithmetic on RGB values. Neither contains any model of the human eye.",
      "why": "They are quick to reason about and they are everywhere: CSS, Photoshop, almost every colour picker. For nudging one hue lighter or duller they are perfectly good, and a designer can hold the whole cylinder in their head.",
      "how": [
        "Use HSL for fast adjustments within a single hue, not for building a scale that crosses hues.",
        "Never read HSL lightness as perceived lightness; it is a geometric position, not a brightness measurement.",
        "Move to OKLCH or HCT the moment a palette has to hold consistent contrast across different hues (273, 274).",
        "If you must stay in HSL, check the finished ramp in greyscale before committing (310)."
      ],
      "example": "In CSS, hsl(60 100% 50%) is pure yellow and hsl(240 100% 50%) is pure blue. Both claim the same 50% lightness. Their relative luminance is 0.9278 and 0.0722.",
      "numbers": "Yellow and blue at HSL lightness 50% have relative luminance 0.9278 and 0.0722 respectively, a difference of nearly thirteen times.",
      "pitfall": "Generating a design-token ramp by fixing saturation and lightness and rotating the hue. The yellows come out glaring, the blues come out heavy, and no two colours at the same step match in weight.",
      "source": "Alvy Ray Smith, Color Gamut Transform Pairs, SIGGRAPH 1978 (HSV); Joblove and Greenberg, same proceedings (HSL).",
      "verify": {
        "status": "verified",
        "note": "Smith's 1978 SIGGRAPH paper confirmed on his own paper archive at alvyray.com, with Joblove and Greenberg cited in the same proceedings. The luminance figures were computed from the WCAG 2 relative luminance coefficients."
      },
      "belongs": {
        "verdict": "core",
        "why": "The working colour model most designers touch daily, and its failure mode is one of the commonest causes of broken palettes."
      },
      "related": [
        272,
        273,
        274,
        280
      ]
    },
    {
      "n": 272,
      "title": "CIE Lab and LCh",
      "aka": [
        "CIELAB",
        "L*a*b*",
        "CIELCh"
      ],
      "oneLine": "A colour space built so equal numeric steps feel like roughly equal visual steps.",
      "demo": {
        "caption": "Both ramps run black to white in six equal steps. Only the L* ramp looks evenly spaced.",
        "html": "<div class=\"db-stage\"><div class=\"db-col\"><div><span class=\"db-note\">Equal steps of luminance</span><div class=\"db-ramp\"><span style=\"background:#000000\"></span><span style=\"background:#7C7C7C\"></span><span style=\"background:#AAAAAA\"></span><span style=\"background:#CBCBCB\"></span><span style=\"background:#E7E7E7\"></span><span style=\"background:#FFFFFF\"></span></div></div><div><span class=\"db-note\">Equal steps of L*</span><div class=\"db-ramp\"><span style=\"background:#000000\"></span><span style=\"background:#303030\"></span><span style=\"background:#5E5E5E\"></span><span style=\"background:#919191\"></span><span style=\"background:#C6C6C6\"></span><span style=\"background:#FFFFFF\"></span></div></div></div></div>"
      },
      "what": "CIELAB, defined by the International Commission on Illumination in 1976, places colour on three axes: L* for lightness from 0 to 100, a* running green to red, and b* running blue to yellow. LCh is the same space in polar form, swapping a* and b* for chroma and a hue angle, which is far easier to steer by hand. The design goal was perceptual uniformity, so that a numeric distance corresponds to a visual difference.",
      "why": "It hands you a lightness figure that actually means something to the eye, which HSL cannot. It also underpins colour difference measurement, which is how print, paint and manufacturing settle arguments about whether a colour matched.",
      "how": [
        "Use L* whenever you need a true lightness ordering across different hues.",
        "Work in LCh rather than Lab when tuning by hand; hue angle and chroma are quantities you can picture.",
        "Treat colour difference figures as a comparison tool rather than a promise. CIE94 and CIEDE2000 exist because the original 1976 formula is not uniform enough.",
        "Quote Lab values, not hex, when specifying a physical colour to a supplier."
      ],
      "example": "Paint, plastics and textile suppliers routinely sign off colour approvals against a target Lab value with an agreed difference tolerance.",
      "numbers": "L* runs 0 to 100. L* 50 corresponds to roughly 18% relative luminance, not 50%, because L* is a cube-root style function of luminance.",
      "pitfall": "Assuming the space is uniform everywhere. CIELAB is known to misbehave in the blues, where changing lightness drags the hue towards purple, which is exactly the problem Oklab was built to fix.",
      "source": "CIE 1976 L*a*b* (CIELAB), International Commission on Illumination, 1976.",
      "verify": {
        "status": "verified",
        "note": "The 1976 date, the axis definitions, the LCh polar conversion and the known blue non-uniformity were checked this session. The 18% figure I computed from the published CIELAB lightness function, L* = 116 f(Y/Yn) - 16."
      },
      "belongs": {
        "verdict": "core",
        "why": "The reference space behind colour management, colour difference and every perceptual space that followed it."
      },
      "related": [
        271,
        273,
        274,
        280
      ]
    },
    {
      "n": 273,
      "title": "OKLab / OKLCH",
      "aka": [
        "Oklab",
        "oklch()"
      ],
      "oneLine": "A modern perceptual colour space where changing hue does not drag lightness with it.",
      "demo": {
        "caption": "Same two endpoints, nine steps. The sRGB blend sags through grey at the midpoint; the OKLCH blend stays colourful.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Interpolated in sRGB</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#0000FF\"></span><span style=\"background:#2020DF\"></span><span style=\"background:#4040BF\"></span><span style=\"background:#60609F\"></span><span style=\"background:#808080\"></span><span style=\"background:#9F9F60\"></span><span style=\"background:#BFBF40\"></span><span style=\"background:#DFDF20\"></span><span style=\"background:#FFFF00\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Interpolated in OKLCH</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#0000FF\"></span><span style=\"background:#005DFF\"></span><span style=\"background:#008DF8\"></span><span style=\"background:#00B2DF\"></span><span style=\"background:#00CFBD\"></span><span style=\"background:#00E495\"></span><span style=\"background:#19F268\"></span><span style=\"background:#B0FA36\"></span><span style=\"background:#FFFF00\"></span></div></div></div></div>"
      },
      "what": "Bjorn Ottosson published Oklab on 23 December 2020. It has the same shape as CIELAB but is fitted to better appearance data: CAM16 for lightness and chroma, and the uniform hue data used to derive IPT. The stated aim was to fix the poor hue prediction of CIELAB and CIELUV, worst of all in the blues. OKLCH is the polar form, giving lightness, chroma and hue angle.",
      "why": "You can build a scale by holding lightness fixed and rotating hue, and the steps look even. Gradients interpolated in OKLCH skip the grey dead zone you get halfway through an sRGB gradient between opposite hues.",
      "how": [
        "Define token ramps by fixed lightness values so that every hue at the same step reads at the same visual weight.",
        "Use oklch() directly in CSS; both oklab() and oklch() are defined in CSS Color Module Level 4.",
        "Interpolate gradients in OKLCH rather than sRGB whenever the gradient crosses between distant hues.",
        "Pair it with a gamut check, because the space describes colours your display cannot make (322)."
      ],
      "example": "A CSS gradient from blue to yellow interpolated in sRGB sags through a dull grey at the midpoint. The same two endpoints interpolated in OKLCH stay colourful all the way across.",
      "numbers": "Oklab lightness runs 0 to 1, which CSS expresses as 0% to 100%. Chroma has no fixed upper bound.",
      "pitfall": "Chroma being unbounded means a value that looks fine in a picker can sit outside sRGB and clip on a normal monitor. Always gamut-map before shipping.",
      "source": "Bjorn Ottosson, A perceptual color space for image processing (2020); oklab() and oklch() defined in W3C CSS Color Module Level 4.",
      "verify": {
        "status": "verified",
        "note": "Read Ottosson's original post, dated 23 December 2020, for the fitting data (CAM16 for lightness and chroma, IPT hue data) and the stated CIELAB and CIELUV hue problem. Confirmed the oklab() and oklch() definitions in the W3C CSS Color Module Level 4 specification."
      },
      "belongs": {
        "verdict": "core",
        "why": "The current default for building perceptually even palettes and gradients on the web, and it is in the CSS standard."
      },
      "related": [
        272,
        274,
        320,
        322
      ]
    },
    {
      "n": 274,
      "title": "HCT",
      "aka": [
        "Hue, chroma, tone",
        "Material Design 3 colour space"
      ],
      "oneLine": "Google's colour space that generates whole themes from one seed and predicts contrast from tone alone.",
      "demo": {
        "caption": "One seed, ten tone stops. Two colours fifty tones apart clear 4.5:1; twenty apart does not come close.",
        "html": "<div class=\"db-stage\"><div class=\"db-col\"><div><span class=\"db-note\">One seed hue, tone 10 to 95</span><div class=\"db-ramp\"><span style=\"background:#001D32\"></span><span style=\"background:#003352\"></span><span style=\"background:#004B74\"></span><span style=\"background:#006399\"></span><span style=\"background:#007DBF\"></span><span style=\"background:#1498E4\"></span><span style=\"background:#4FB2FF\"></span><span style=\"background:#9ACBFF\"></span><span style=\"background:#CFE5FF\"></span><span style=\"background:#E8F2FF\"></span></div></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-chip-text db-fill\" style=\"background:#CFE5FF;color:#006399\">Tone 40 on 90: 5.0:1</span><span class=\"db-chip-text db-fill\" style=\"background:#1498E4;color:#006399\">Tone 40 on 60: 2.1:1</span></div></div></div>"
      },
      "what": "HCT is the colour space behind Material Design 3. Hue and chroma come from the CAM16 appearance model, which predicts hue more consistently than CIELAB; tone is CIELAB's L*, on a 0 to 100 scale, which predicts lightness better than CAM16. The combination lets a system generate a full tonal palette from a single seed colour and know, before anyone looks, roughly how much contrast any two tones will produce.",
      "why": "It turns contrast from a per-pairing check into arithmetic. Fix your tone stops once, then compose light and dark themes by swapping tone numbers rather than re-picking colours.",
      "how": [
        "Build tonal palettes as fixed tone stops from a seed hue, then define light and dark themes as different tone assignments over the same palette.",
        "Use tone distance as the first-pass contrast filter, then verify the final pair with a measured ratio (316).",
        "Expect chroma to fall away at very high and very low tones; the space reduces it to stay inside the display gamut.",
        "Do not use tone distance to reason about colour-blind separation; that is a different problem (315)."
      ],
      "example": "Android's dynamic colour feature seeds an HCT tonal palette from the user's wallpaper and derives the whole system theme from it.",
      "numbers": "Material's own implementation states that a difference of 40 in HCT tone guarantees a contrast ratio of at least 3.0, and a difference of 50 guarantees at least 4.5.",
      "pitfall": "Treating the tone-difference rule as a substitute for testing. It gives you a floor, not the actual ratio, and it says nothing about how the pair behaves for someone with a colour-vision deficiency.",
      "source": "Google Material Design 3; hue and chroma from CAM16, tone from CIELAB L*.",
      "verify": {
        "status": "verified",
        "note": "Re-read Google's material-color-utilities source, typescript/hct/hct.ts, this session. It states verbatim: a difference of 40 in HCT tone guarantees a contrast ratio >= 3.0, and a difference of 50 guarantees a contrast ratio >= 4.5. The same file gives hue and chroma from CAM16 and tone from L*."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "Downgraded from core on review. This is one company's colour space tied to one design system, and the general lesson (fix lightness, get predictable contrast) is already carried by CIELAB L* at 272 and value at 280. Worth knowing if you build on Material, not a fundamental in its own right."
      },
      "related": [
        272,
        273,
        316,
        319
      ]
    },
    {
      "n": 275,
      "title": "Munsell system (hue, value, chroma)",
      "aka": [
        "Munsell colour order system"
      ],
      "oneLine": "The first system to separate colour into three independent dimensions spaced by eye, not by theory.",
      "demo": {
        "caption": "Each row runs from grey outwards until the colour runs out. Yellow only turns vivid when light, blue when dark.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Yellow page</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col--tight db-col\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-sq db-sq--lg\" style=\"--mark:#DAD5BE\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#DED5A8\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#E1D691\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#E3D779\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#E4D760\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#E4D843\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#E3D914\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-sq db-sq--lg\" style=\"--mark:#B0AB96\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#B4AC80\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#B6AD6A\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#B7AD52\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#B8AE37\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#B7AF0A\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-sq db-sq--lg\" style=\"--mark:#88846F\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#8B855B\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#8D8545\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#8E862C\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#8D8702\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-sq db-sq--lg\" style=\"--mark:#625F4B\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#655F37\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#666021\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-sq db-sq--lg\" style=\"--mark:#3F3C29\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#403C16\"></span></div><span class=\"db-note\">value high to low, chroma left to right</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Blue page</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col--tight db-col\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-sq db-sq--lg\" style=\"--mark:#D2D3E9\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#CED1FF\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-sq db-sq--lg\" style=\"--mark:#A9AABF\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#A5A8D4\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#9FA7E8\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#98A5FD\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-sq db-sq--lg\" style=\"--mark:#818297\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#7D81AB\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#777FBE\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#6E7ED2\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#607DE6\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#4C7CFA\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-sq db-sq--lg\" style=\"--mark:#5C5D71\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#575C83\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#4F5A96\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#4359A8\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#2E59BB\"></span></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-sq db-sq--lg\" style=\"--mark:#393A4C\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#33395D\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#28386F\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#0E3780\"></span></div><span class=\"db-note\">value high to low, chroma left to right</span></div></div></div></div>"
      },
      "what": "Albert Munsell, an American painter and teacher, split colour into hue, value (light to dark) and chroma (distance from grey), and set the spacing by visual judgement rather than arithmetic. He began in 1898 and published A Color Notation in 1905. The hue circle has five principal hues (red, yellow, green, blue, purple) and five intermediates, later subdivided to give 100 steps. Value runs 0 for black to 10 for white, and chroma has no fixed ceiling, because different hues reach their maximum vividness at different points.",
      "why": "This is where the habit of thinking in hue, value and chroma comes from, and it is still the cleanest model for palette work. Because Munsell measured rather than assumed, his solid is a lumpy irregular shape, which teaches something HSL hides: there is no such thing as a dark, vivid yellow.",
      "how": [
        "Separate the three decisions. Fix value first, then chroma, then hue.",
        "Use Munsell notation, such as 5R 4/14, when specifying a physical colour to someone who cannot see your screen.",
        "Accept the irregular gamut and chase the value you need before the vividness.",
        "When a palette will not resolve, plot it as value against chroma; the problem usually shows up at once."
      ],
      "example": "The Munsell Soil Color Charts are used by soil scientists and archaeologists in the field to record a colour with no screen and no instrument involved.",
      "numbers": "Value 0 to 10. Ten hue families of ten steps each, giving 100 hues; printed charts commonly show 40 hues at 2.5-step intervals.",
      "pitfall": "Reading the Munsell solid as a neat cylinder. Maximum chroma varies enormously with hue and value, and a palette built on the assumption of symmetry will have holes in it.",
      "source": "Albert H. Munsell, A Color Notation (1905); refined by the Optical Society of America renotation of the 1940s.",
      "verify": {
        "status": "verified",
        "note": "The 1898 start, the 1905 publication, the five principal plus five intermediate hues, the 0 to 10 value scale, the open chroma scale and the OSA renotation of the 1940s were all checked against reference descriptions of the Munsell system this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "The origin of the hue/value/chroma vocabulary every later colour system uses, and still the best teaching model for palette structure."
      },
      "related": [
        278,
        279,
        280,
        309
      ]
    },
    {
      "n": 276,
      "title": "Natural Colour System",
      "aka": [
        "NCS"
      ],
      "oneLine": "A colour system that describes how a colour looks by its resemblance to six elementary percepts.",
      "demo": {
        "caption": "The notation read as quantities: whiteness, blackness and chromaticness total 100, and the hue sits nine-tenths from yellow to red.",
        "html": "<div class=\"db-stage\"><div class=\"db-col\"><span class=\"db-note\">S 2030-Y90R</span><div class=\"db-ramp\"><span style=\"flex:0 0 50%;background:#FFFFFF\"></span><span style=\"flex:0 0 20%;background:#000000\"></span><span style=\"flex:0 0 30%;background:#C8461E\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">whiteness 50</span><span class=\"db-note\">blackness 20</span><span class=\"db-note\">chromaticness 30</span></div><div><span class=\"db-note\">hue: Y to R</span><div class=\"db-block db-fill\" style=\"background:linear-gradient(to right,#FFD400,#D0021B)\"></div><div class=\"db-measure-mark\" style=\"width:90%\">Y90R</div></div></div></div>"
      },
      "what": "NCS describes a colour by how much it resembles white, black, yellow, red, blue and green, with no reference to pigments or wavelengths. A notation such as S 2030-Y90R reads as 20% blackness, 30% chromaticness, and a hue that is 90% of the way from yellow towards red, with whiteness making up the remainder to 100. The current system was developed from 1964 by the Swedish Colour Centre Foundation, with Anders Hard, Lars Sivik and Gunnar Tonnquist doing the research, and it rests on Ewald Hering's opponent-colour hypothesis.",
      "why": "It gives you ordinary language for hue mixture. Telling a decorator that a grey is Y30R is more useful than handing over a hex code, because it says which way the colour leans and by how much.",
      "how": [
        "Use NCS when specifying paint, plastics or textiles in Europe, where it is the reference standard in several countries.",
        "Read blackness and chromaticness as your value and saturation controls.",
        "Use the hue notation to name an undertone precisely instead of arguing about whether a grey is greenish (283).",
        "Keep an NCS fan deck if you do interiors work; the atlas is designed to be compared under real light."
      ],
      "example": "NCS is the national reference standard in Sweden (since 1979), Norway (1984), Spain (1994) and South Africa (2004). The NCS 1950 atlas holds 1,950 standard samples.",
      "numbers": "Blackness plus chromaticness plus whiteness always totals 100. The NCS 1950 atlas contains 1,950 colours.",
      "pitfall": "Treating NCS as a measurement space. It records how a colour appears to a normal observer, not what it is made of, so two samples that match in NCS can come apart under different light (324).",
      "source": "Swedish Colour Centre Foundation, developed from 1964, based on Ewald Hering's opponent-colour theory.",
      "verify": {
        "status": "verified",
        "note": "Developers, the 1964 start date, the six elementary colours, the notation structure and the national adoption dates were checked against the reference description of NCS this session. Worth noting that the Hering theory it rests on has since been challenged; see the added entry on opponent-process vision."
      },
      "belongs": {
        "verdict": "core",
        "why": "A perceptual specification system used every day in paint, interiors and product colour across Europe."
      },
      "related": [
        275,
        277,
        283,
        324
      ]
    },
    {
      "n": 277,
      "title": "Spot colour systems",
      "aka": [
        "Pantone Matching System",
        "PMS",
        "Special colours"
      ],
      "oneLine": "Pre-mixed inks printed from their own plate rather than simulated with process dots.",
      "demo": {
        "caption": "Magnified. The left is a screen of four separate ink dots; the right is one pre-mixed ink laid flat.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 130\"><defs><pattern id=\"db277y\" width=\"14\" height=\"14\" patternUnits=\"userSpaceOnUse\"><circle cx=\"7\" cy=\"7\" r=\"5\" fill=\"#FFF200\"/></pattern><pattern id=\"db277m\" width=\"14\" height=\"14\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(75)\"><circle cx=\"7\" cy=\"7\" r=\"4.4\" fill=\"#EC008C\"/></pattern><pattern id=\"db277c\" width=\"14\" height=\"14\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(15)\"><circle cx=\"7\" cy=\"7\" r=\"3.2\" fill=\"#00AEEF\"/></pattern><pattern id=\"db277k\" width=\"14\" height=\"14\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(45)\"><circle cx=\"7\" cy=\"7\" r=\"1.8\" fill=\"#111111\"/></pattern></defs><rect x=\"0\" y=\"20\" width=\"140\" height=\"100\" fill=\"#FFFFFF\"/><rect x=\"0\" y=\"20\" width=\"140\" height=\"100\" fill=\"url(#db277y)\"/><rect x=\"0\" y=\"20\" width=\"140\" height=\"100\" fill=\"url(#db277m)\"/><rect x=\"0\" y=\"20\" width=\"140\" height=\"100\" fill=\"url(#db277c)\"/><rect x=\"0\" y=\"20\" width=\"140\" height=\"100\" fill=\"url(#db277k)\"/><rect x=\"180\" y=\"20\" width=\"140\" height=\"100\" fill=\"#FF6A13\"/><text class=\"t\" x=\"0\" y=\"12\">FOUR-COLOUR BUILD</text><text class=\"t\" x=\"180\" y=\"12\">SPOT INK</text></svg></div>"
      },
      "what": "A spot colour is a single ink, mixed to a formula before it reaches the press, laid down on its own plate. The Pantone Matching System made this a shared language: a number that any printer anywhere can mix to. Because a spot ink is a real pigment rather than a screen of four-colour dots, it can reach colours the process gamut cannot, and it holds flat and even at any size.",
      "why": "Consistency and reach. A spot ink keeps a brand colour the same across print runs, suppliers and substrates, and it gets you metallics, fluorescents and deep saturated colours that four-colour process simply cannot produce.",
      "how": [
        "Specify a spot ink for a logo colour that has to survive many printers over many years.",
        "Budget for it. Each spot is another plate, another wash-up and more money.",
        "Check the coated and uncoated versions separately; the same number prints differently on different stock and the C and U references are not interchangeable.",
        "Always publish a process, RGB and hex equivalent alongside the spot in the brand guidelines."
      ],
      "example": "Pantone treats its colour references, names, numbers and formulas as licensed property. Adobe began removing the pre-loaded Pantone colour books from Illustrator, InDesign and Photoshop in updates from 16 August 2022, and pulled the last three from Illustrator in October 2023, leaving users to buy a Pantone Connect subscription instead.",
      "numbers": "About 30% of the 1,114 Pantone spot colours in the year 2000 system could not be simulated in CMYK. The system held 2,161 colours as of 2019.",
      "pitfall": "Handing a client a Pantone number with no digital equivalent, so every website, deck and email guesses at the colour and none of them agree.",
      "source": "Pantone Matching System, devised by Lawrence Herbert, who bought the business and renamed it Pantone in 1962.",
      "verify": {
        "status": "adjusted",
        "note": "The spot versus process distinction and the 2,161 count as of 2019 were checked against the Pantone reference description this session, which also confirms Herbert bought the company's assets and renamed it in 1962. That source ties the 30% figure to the 1,114 spot colours of the year 2000, so the entry now carries the base and the date instead of quoting 30% as a standing fact. Sources split on whether the Matching System itself dates from 1962 or 1963, so the entry gives no launch year for the system. The Adobe dates come from Adobe's own help page, Pantone Color Books | Illustrator, read this session: the books began to be phased out in updates released as of 16 August 2022, and the October 2023 release removed the last three remaining books (Pantone + CMYK Coated, Pantone + CMYK Uncoated and Pantone + Metallic Coated) from Illustrator."
      },
      "belongs": {
        "verdict": "core",
        "why": "The standard mechanism for owning a brand colour in print, and the reason brand guidelines contain more than a hex code."
      },
      "related": [
        270,
        314,
        322,
        323
      ]
    },
    {
      "n": 278,
      "title": "Hue",
      "aka": [
        "Chromatic attribute"
      ],
      "oneLine": "The name-of-the-colour dimension: what makes red red rather than green.",
      "demo": {
        "caption": "Hue is an angle, not a scale. The strip ends on the same red it began with.",
        "html": "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-ramp\"><span style=\"background:#FF0000\"></span><span style=\"background:#FF8000\"></span><span style=\"background:#FFFF00\"></span><span style=\"background:#80FF00\"></span><span style=\"background:#00FF00\"></span><span style=\"background:#00FF80\"></span><span style=\"background:#00FFFF\"></span><span style=\"background:#0080FF\"></span><span style=\"background:#0000FF\"></span><span style=\"background:#8000FF\"></span><span style=\"background:#FF00FF\"></span><span style=\"background:#FF0080\"></span><span style=\"background:#FF0000\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">0</span><span class=\"db-note\">90</span><span class=\"db-note\">180</span><span class=\"db-note\">270</span><span class=\"db-note\">360</span></div></div></div>"
      },
      "what": "Hue is the attribute by which a colour appears similar to one of red, yellow, green or blue, or to two of them in combination. It is normally expressed as an angle round a circle, because the sequence wraps: red runs through purple and back to red with no join. Hue is one leg of the three-way split Munsell established, alongside value and chroma, and every modern colour space keeps it as a separate axis.",
      "why": "Hue is the first thing people name and the last thing they judge accurately. It carries most of a brand's recognition and almost none of the legibility, which is why hue-led decisions so often produce something memorable that nobody can read.",
      "how": [
        "Choose hue for meaning and recognition, then let value do the legibility work (309).",
        "Set hue by angle in a perceptual space so rotation is predictable and does not drag lightness with it.",
        "Watch for hue drift when darkening. In sRGB and CIELAB a darkened blue swings towards purple.",
        "Never let hue be the only thing distinguishing two states; back it with shape, position or value (318)."
      ],
      "example": "A UK traffic signal is coded by hue and by fixed position, red always at the top. The position is the redundancy that keeps it usable for a driver with red-green colour-vision deficiency.",
      "numbers": "Hue is expressed as 0 to 360 degrees in HSL, LCh, OKLCH and HCT.",
      "pitfall": "Building a whole system on hue difference alone. It fails in greyscale, in bright sunlight, on cheap screens and for a substantial share of readers.",
      "source": "Standard colorimetric terminology; separated as an independent dimension by Munsell (1905).",
      "verify": {
        "status": "verified",
        "note": "The definition matches the standard colorimetric wording checked this session, and the hue/value/chroma separation was confirmed against the Munsell system description."
      },
      "belongs": {
        "verdict": "core",
        "why": "One of the three basic colour dimensions; you cannot specify or discuss colour without it."
      },
      "related": [
        275,
        279,
        280,
        318
      ]
    },
    {
      "n": 279,
      "title": "Saturation / chroma",
      "aka": [
        "Colourfulness",
        "Intensity"
      ],
      "oneLine": "Two different measures of how far a colour sits from grey, routinely confused with each other.",
      "demo": {
        "caption": "Same chart, two families of line. The navy and the sky sit on one saturation ray, far apart in chroma.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 400 170\"><path class=\"s-mute\" d=\"M52 140 H250\"/><path class=\"s-mute\" d=\"M52 140 V24\"/><path class=\"s-mute\" d=\"M170 140 V30\" stroke-dasharray=\"3 4\"/><path class=\"s-accent\" d=\"M52 140 L250 52\"/><path class=\"s-mute\" d=\"M100 119 V140\" stroke-dasharray=\"2 3\"/><path class=\"s-mute\" d=\"M215 68 V140\" stroke-dasharray=\"2 3\"/><circle cx=\"100\" cy=\"119\" r=\"6\" fill=\"#1B2A6B\"/><circle cx=\"215\" cy=\"68\" r=\"6\" fill=\"#7FB2E5\"/><text class=\"t\" x=\"0\" y=\"18\">LIGHTNESS</text><text class=\"t\" x=\"52\" y=\"156\">CHROMA</text><text class=\"t\" x=\"176\" y=\"26\">EQUAL CHROMA</text><text class=\"t\" x=\"256\" y=\"54\">EQUAL SATURATION</text><text class=\"t\" x=\"66\" y=\"114\">NAVY</text><text class=\"t\" x=\"184\" y=\"52\">SKY</text></svg></div>"
      },
      "what": "These are not the same thing, and the words get swapped constantly. Colourfulness is the raw attribute: how chromatic an area looks, and it rises as you turn the lights up. Chroma is that colourfulness judged as a proportion of the brightness of a similarly lit white. Saturation is that colourfulness judged in proportion to the area's own brightness. So a dark navy and a bright sky blue can be close in saturation while their chroma is far apart.",
      "why": "If you ask for more saturation when you mean more chroma, you get a different colour back. Knowing which quantity you are controlling is what lets you build a palette where the steps hold together across hues and lightnesses.",
      "how": [
        "Say chroma when you mean distance from grey at a fixed lightness. That is what LCh, OKLCH and HCT hand you.",
        "Remember chroma has a ceiling that varies by hue and lightness, so a dark vivid yellow is not available at any price.",
        "Reduce chroma rather than lightness when a colour is shouting on a dark background (319).",
        "Keep a chroma range across a layout rather than a single level; uniform chroma flattens hierarchy."
      ],
      "example": "On a Munsell chart, lines of equal chroma run vertically up the page while lines of equal saturation radiate outwards from the black point. Same chart, two different families of lines.",
      "numbers": "",
      "pitfall": "HSL saturation is neither of these. It is a geometric ratio inside the RGB cube with no perceptual meaning, so a token named for it will not behave consistently.",
      "source": "CIE definitions of colourfulness, chroma and saturation; the chroma dimension from Munsell (1905).",
      "verify": {
        "status": "verified",
        "note": "The CIE definitions of colourfulness, chroma and saturation, and the Munsell chart illustration of how the two families of lines differ, were checked this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "A distinction that decides whether a palette specification is reproducible or just a vibe."
      },
      "related": [
        275,
        278,
        280,
        289
      ]
    },
    {
      "n": 280,
      "title": "Value / lightness",
      "aka": [
        "Tone (in painting)",
        "L*"
      ],
      "oneLine": "How light or dark a colour looks, independent of its hue, and the dimension that carries structure.",
      "demo": {
        "caption": "Six hues, all set to the same lightness. Desaturate them and the row collapses into one unbroken grey.",
        "html": "<div class=\"db-stage\"><div class=\"db-col\"><div><span class=\"db-note\">Six hues, all at L* 60</span><div class=\"db-ramp\"><span style=\"background:#CB7B73\"></span><span style=\"background:#A58F52\"></span><span style=\"background:#6D9C68\"></span><span style=\"background:#00A1A5\"></span><span style=\"background:#7490CD\"></span><span style=\"background:#B77EB0\"></span></div></div><div><span class=\"db-note\">The same six, desaturated</span><div class=\"db-ramp\"><span style=\"background:#919191\"></span><span style=\"background:#919191\"></span><span style=\"background:#919191\"></span><span style=\"background:#919191\"></span><span style=\"background:#919191\"></span><span style=\"background:#919191\"></span></div></div></div></div>"
      },
      "what": "Value is the light-to-dark dimension. CIELAB puts a number on it, L*, running 0 to 100, derived from luminance through a cube-root style function that matches how the eye compresses brightness. It is not the same as luminance: L* 50 sits at roughly 18% relative luminance, not half. Munsell called the same dimension value and scaled it 0 to 10; HCT calls it tone and reuses the CIELAB scale.",
      "why": "Value does the structural work in any piece. Text legibility, figure-ground separation, whether a chart survives a photocopier, whether a logo reads at 16 pixels: all of it comes from value separation and almost none of it from hue.",
      "how": [
        "Design the value structure first, in greyscale, and add hue on top (309, 310).",
        "Hold L* or HCT tone constant across a token ramp rather than HSL lightness.",
        "When something looks wrong and you cannot say why, desaturate the screenshot and look again.",
        "Give every important edge a value step, not just a hue step (294)."
      ],
      "example": "A newspaper front page is pure value structure: black text, white paper, grey halftones, and it works without a single colour decision.",
      "numbers": "L* runs 0 to 100. L* 50 corresponds to roughly 18% relative luminance. Munsell value runs 0 to 10; HCT tone runs 0 to 100 on the same L* scale.",
      "pitfall": "Confusing the lightness number in your picker with perceived lightness. Two swatches both sitting at HSL 50% can be worlds apart in value, which is how a supposedly matched palette ends up with one unreadable colour.",
      "source": "CIE 1976 L*a*b* lightness function; the concept from Munsell's value dimension (1905).",
      "verify": {
        "status": "verified",
        "note": "The 18% figure I computed from the published CIELAB lightness function; the CIELAB 0 to 100 scale, the Munsell 0 to 10 value scale and HCT's reuse of L* were all confirmed against sources checked this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "The single most load-bearing colour dimension for legibility and hierarchy."
      },
      "related": [
        272,
        285,
        309,
        310
      ]
    },
    {
      "n": 281,
      "title": "Tint, shade, tone",
      "aka": [
        "Colour modifications"
      ],
      "oneLine": "Three named ways of moving a pure hue: add white, add black, or add grey.",
      "demo": {
        "caption": "One blue, three moves. White lifts it, black sinks it, grey drains the colour while the lightness barely shifts.",
        "html": "<div class=\"db-stage\"><div class=\"db-col\"><div><span class=\"db-note\">Tint: add white</span><div class=\"db-ramp\"><span style=\"background:#007DBF\"></span><span style=\"background:#5796CD\"></span><span style=\"background:#85AFDC\"></span><span style=\"background:#ADC9EA\"></span><span style=\"background:#D4E4F9\"></span></div></div><div><span class=\"db-note\">Shade: add black</span><div class=\"db-ramp\"><span style=\"background:#007DBF\"></span><span style=\"background:#13689E\"></span><span style=\"background:#19547E\"></span><span style=\"background:#1A405F\"></span><span style=\"background:#182E42\"></span></div></div><div><span class=\"db-note\">Tone: add grey</span><div class=\"db-ramp\"><span style=\"background:#007DBF\"></span><span style=\"background:#3E7CAF\"></span><span style=\"background:#567A9F\"></span><span style=\"background:#66798F\"></span><span style=\"background:#72787F\"></span></div></div></div></div>"
      },
      "what": "Add white to a hue and you get a tint. Add black and you get a shade. Add grey, or a little of the opposite colour, and you get a tone. Each move lands somewhere different: tints gain lightness and lose chroma, shades lose both, tones lose chroma while the lightness can stay roughly where it was.",
      "why": "These are the actual moves you make when building a palette from one brand colour, and naming them stops you drifting. Reaching for black when you wanted a tone is how a palette turns muddy without anyone being able to point at the step where it went wrong.",
      "how": [
        "Build interface surfaces from tints and shades of the brand hue, and use tones for the supporting greys.",
        "Mix your greys by toning the brand hue rather than using neutral grey; the palette will hold together better.",
        "Watch chroma when tinting. Heavy tints of a saturated hue go chalky fast.",
        "Toning with the complementary rather than grey keeps a little life in the result (287)."
      ],
      "example": "A greige interior palette is a set of tones: a hue knocked back with grey rather than lightened with white, which is why it reads as soft rather than pale.",
      "numbers": "",
      "pitfall": "In digital work shade gets used loosely for any variant at all, so a token named blue-shade-3 tells nobody what it is. Number your tokens by tone or lightness instead.",
      "source": "Standard artists' and colour-theory terminology; origin unclear as a single codification.",
      "verify": {
        "status": "verified",
        "note": "The three definitions are consistent across the standard colour-theory references I checked. I could not trace the terms to a single originating author or text, so the source field says so rather than inventing an attribution."
      },
      "belongs": {
        "verdict": "core",
        "why": "Basic working vocabulary for palette construction, and the distinctions have real consequences for chroma."
      },
      "related": [
        279,
        280,
        301,
        308
      ]
    },
    {
      "n": 282,
      "title": "Colour temperature",
      "aka": [
        "Correlated colour temperature",
        "CCT",
        "Kelvin"
      ],
      "oneLine": "A light source described by the temperature of a black body glowing that colour, measured in kelvin.",
      "demo": {
        "caption": "Black-body colours in kelvin order. The low end looks warm and the high end cool, so the naming runs backwards.",
        "html": "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#FF830B\"></span><span class=\"db-note\">1850 K</span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#FF9D3D\"></span><span class=\"db-note\">2400 K</span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#FFAC5D\"></span><span class=\"db-note\">2700 K</span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#FFD1A3\"></span><span class=\"db-note\">4000 K</span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#FFE4CE\"></span><span class=\"db-note\">5000 K</span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#FFF9FD\"></span><span class=\"db-note\">6500 K</span></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">called warm</span><span class=\"db-note\">called cool</span></div></div></div>"
      },
      "what": "Colour temperature describes light by comparing it to an idealised black body heated until it glows. A source that does not follow the black-body curve, such as an LED or a fluorescent tube, gets a correlated colour temperature instead: the nearest match on the curve. Candlelight sits around 1,850 K, incandescent lamps around 2,400 K, and the CIE D65 standard daylight illuminant at about 6,500 K.",
      "why": "It sets the white point that everything else is judged against. Get it wrong and skin goes green, whites go blue, and a client rejects a print they would have approved under different light. It is also the biggest single lever on the mood of a photograph or an interior.",
      "how": [
        "Fix a viewing condition before approving colour: D65 for screen work, D50 for print proofing.",
        "Choose lamp temperature for the job rather than the building's habit; retail, food and gallery lighting all want different white points.",
        "Keep one temperature per scene when shooting. Mixed sources are hard to correct afterwards.",
        "Check a screen palette under the ambient light the audience will actually have (325)."
      ],
      "example": "Consumer lamps are sold as warm white at about 2,700 K and daylight at about 6,500 K, and the two look completely different in the same room.",
      "numbers": "Candlelight about 1,850 K; incandescent lamps about 2,400 K; overcast daylight and the D65 standard illuminant about 6,500 K.",
      "pitfall": "The naming runs backwards from the physics. Higher kelvin is physically hotter but looks bluer and is called cool; lower kelvin looks yellower and is called warm. People argue about this for hours without realising they mean different scales.",
      "source": "CIE colorimetry; correlated colour temperature as defined for non-Planckian sources.",
      "verify": {
        "status": "verified",
        "note": "Definitions of colour temperature and correlated colour temperature, the kelvin figures for candlelight, incandescent and D65, and the warm/cool naming inversion were all checked against reference descriptions this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "Every colour judgement happens under some light, and this is how that light gets specified."
      },
      "related": [
        286,
        323,
        324,
        325
      ]
    },
    {
      "n": 283,
      "title": "Undertone",
      "aka": [
        "Masstone and undertone",
        "Colour bias"
      ],
      "oneLine": "The hidden bias in a colour that only shows when it is thinned, tinted or set beside a true neutral.",
      "demo": {
        "caption": "The same off-white twice. Alone it reads as white; first in a line of six, its warm bias appears.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">On its own</span><div class=\"db-stage db-stage--tight\"><div class=\"db-centre\"><span class=\"db-swatch db-swatch--lg\" style=\"background:#F6F1EA\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Beside five others</span><div class=\"db-stage db-stage--tight\"><div class=\"db-centre\"><div class=\"db-col\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-swatch\" style=\"background:#F6F1EA\"></span><span class=\"db-swatch\" style=\"background:#FFFFFF\"></span><span class=\"db-swatch\" style=\"background:#F2F4F1\"></span><span class=\"db-swatch\" style=\"background:#F7F0F2\"></span><span class=\"db-swatch\" style=\"background:#F1F3F8\"></span><span class=\"db-swatch\" style=\"background:#F8F5E8\"></span></div><span class=\"db-note\">first swatch is the one on the left</span></div></div></div></div></div>"
      },
      "what": "A mixed colour usually has two readings. The masstone is what you see at full strength: this grey is grey. The undertone is the bias that appears when you thin the colour, mix it with white, or place it next to a true neutral: that grey leans green. The pairing is trade vocabulary from paint and pigment work, and it has carried over into interiors, product finishes and brand neutrals.",
      "why": "Undertone decides whether a set of neutrals sits together or fights. Most cases of the colours are right but it looks wrong turn out to be clashing undertones rather than wrong hues, and you cannot fix them by adjusting the obvious colour.",
      "how": [
        "Judge a neutral against pure white or a true grey, never on its own. The bias only appears in comparison.",
        "Line up every candidate side by side and sort them by which way they lean before choosing.",
        "Keep undertones consistent across a palette: warm greys with beige, blue-greys with cool.",
        "Check under the actual lighting of the room or the actual screen, because the bias moves with the light (282)."
      ],
      "example": "The paint trade teaches the distinction directly. SWPPC, the Sherwin-Williams site for professional painting contractors, tells painters that most of the focus goes on a paint's mass tone, its obvious colour, while undertones are the underlying hues that come from mixing different colours together, and that the more intense the colour, the less you need to worry about the undertone. Sherwin-Williams's own article on undertones adds that the closer the undertone sits to the mass tone, the truer the colour appears.",
      "numbers": "",
      "pitfall": "Choosing whites from a single small chip. Set six so-called whites next to each other and the pinks, yellows and greens appear immediately.",
      "source": "Paint and pigment trade terminology (masstone and undertone); origin unclear as a single author.",
      "verify": {
        "status": "adjusted",
        "note": "Two pages read in full this session. The mass tone wording and the point about intense colours come from '9 Things Every Pro Painter Should Know About Undertones' on swppc.com, the Sherwin-Williams professional painting contractors site, published 19 May 2026, which says most of the focus goes onto a paint's mass tone, the paint's obvious colour, and that the more intense the colour, the less you need to worry about undertones. The line about the undertone sitting close to the mass tone is on Sherwin-Williams's own STIR article 'Understanding Undertones to Choose the Right Color', which states that the closer the undertone is to the mass tone, the truer the colour will appear. An earlier review pass dropped that line as unsourceable, which was wrong, so it is back with the page named. No single originating author for the terms could be traced, so none is claimed."
      },
      "belongs": {
        "verdict": "core",
        "why": "The practical skill behind choosing neutrals, which is most of the colour work in interiors, product and interface systems."
      },
      "related": [
        276,
        279,
        281,
        307
      ]
    },
    {
      "n": 284,
      "title": "Contrast of hue",
      "aka": [
        "Farbe-an-sich-Kontrast",
        "Contrast of colour in itself"
      ],
      "oneLine": "The plain difference between undiluted hues, at its strongest with yellow, red and blue.",
      "demo": {
        "caption": "Three hues each side, all at full chroma. The contrast is the size of the gap round the circle.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Hues far apart</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-swatch db-swatch--lg\" style=\"background:#ED1C24\"></span><span class=\"db-swatch db-swatch--lg\" style=\"background:#FFF200\"></span><span class=\"db-swatch db-swatch--lg\" style=\"background:#0054A6\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Hues close together</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-swatch db-swatch--lg\" style=\"background:#ED1C24\"></span><span class=\"db-swatch db-swatch--lg\" style=\"background:#F15A22\"></span><span class=\"db-swatch db-swatch--lg\" style=\"background:#F7941D\"></span></div></div></div></div>"
      },
      "what": "The simplest of the seven contrasts Johannes Itten set out in The Art of Color: put clearly different, unmuted hues side by side and the difference itself is the effect. It is strongest with the primaries and weakens as the hues move closer round the circle or lose chroma. Itten put it first because using it drags most of the other six along with it.",
      "why": "It is loud and it reads from across a room, which is why it turns up in playgrounds, folk art, children's books and warning systems. It also makes an interface feel busy very quickly, so it is a decision about volume as much as about colour.",
      "how": [
        "Use three or four clearly separated hues at full chroma when you want energy and instant differentiation.",
        "Separate the hues with black, white or grey lines if the edges start to shimmer (293).",
        "Cut the number of hues or drop the chroma when the piece needs to feel calm.",
        "Give the hues different areas so something still leads (290)."
      ],
      "example": "Piet Mondrian's grid paintings of the late 1920s and 1930s set red, yellow and blue at full strength inside heavy black lines, which is contrast of hue with the boundaries policed.",
      "numbers": "",
      "pitfall": "Full-chroma hue contrast across an entire layout produces no hierarchy at all. Everything shouts at the same volume and the eye has nowhere to land.",
      "source": "Johannes Itten, Kunst der Farbe / The Art of Color (Otto Maier Verlag, 1961). The canon is inherited: Adolf Holzel listed seven contrasts in a letter of 4 March 1904, and took five of them from George Field's Chromatography (1835).",
      "verify": {
        "status": "verified",
        "note": "Checked against Hirschler and Schwarz, Itten's seven colour contrasts: a review, Part I, Journal of the International Colour Association vol 33 (2023) 136-154, PDF read in full this session. Its Table 1 prints Holzel's 1904 list beside Itten's 1913-14 Stuttgart diary and the 1961 book. Itten changed Holzel's seventh item to simultaneous contrast and renamed intensity as quality; otherwise the list is Holzel's, and Holzel took Field's five and added two. Itten popularised the canon, he did not invent it."
      },
      "belongs": {
        "verdict": "core",
        "why": "The base case of colour interaction and the one most designers reach for first, so knowing its limits matters."
      },
      "related": [
        285,
        287,
        290,
        303
      ]
    },
    {
      "n": 285,
      "title": "Light-dark contrast",
      "aka": [
        "Hell-Dunkel-Kontrast",
        "Value contrast"
      ],
      "oneLine": "Difference in lightness, the contrast that does the structural work whether or not hue is involved.",
      "demo": {
        "caption": "Four hues at full chroma with their measured lightness. The red and the green land on the same value.",
        "html": "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-swatch\" style=\"background:#F5EA00\"></span><span class=\"db-note\">L*91</span><div class=\"db-fill\"><div class=\"db-bar db-bar--tall\" style=\"width:91%\"></div></div></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-swatch\" style=\"background:#E4002B\"></span><span class=\"db-note\">L*48</span><div class=\"db-fill\"><div class=\"db-bar db-bar--tall\" style=\"width:48%\"></div></div></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-swatch\" style=\"background:#008420\"></span><span class=\"db-note\">L*48</span><div class=\"db-fill\"><div class=\"db-bar db-bar--tall\" style=\"width:48%\"></div></div></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-swatch\" style=\"background:#3A0093\"></span><span class=\"db-note\">L*20</span><div class=\"db-fill\"><div class=\"db-bar db-bar--tall\" style=\"width:20%\"></div></div></div></div></div>"
      },
      "what": "The second of Itten's seven: the difference between light and dark, which can exist with or without any hue difference. Itten treated it as the most powerful of the set and the one most often mishandled, because judging which of two different hues is lighter is genuinely hard. Pure yellow is very light, pure violet is very dark, and a saturated red and a saturated green can sit within a point or two of each other.",
      "why": "Everything structural rides on it. Text legibility, figure-ground separation, whether a chart survives being printed in black and white, whether an icon reads at small size. Hue can be wrong and the thing still works; value cannot.",
      "how": [
        "Squint at it or desaturate it. The eye is unreliable at comparing lightness across hues at full chroma (310).",
        "Set the value steps before you set the hues, then treat hue as decoration on top.",
        "Use a measured ratio for anything a person has to read (316, 317).",
        "Check the extremes: your lightest surface against your lightest text, and the darkest pair too."
      ],
      "example": "Photocopy a colourful chart. Every distinction carried by hue disappears and only the light-dark differences survive, which is a fair preview of what a reader with a colour-vision deficiency gets from the original.",
      "numbers": "",
      "pitfall": "Choosing a brand colour pair on hue appeal, then discovering the two sit within a few points of L* and nothing separates them. By then the pair is in the logo.",
      "source": "Johannes Itten, The Art of Color (1961), Hell-Dunkel-Kontrast; on Adolf Holzel's 1904 list as Hell u. dunkel.",
      "verify": {
        "status": "verified",
        "note": "Confirmed as the second of Itten's seven, and as item 3 on Holzel's 1904 list, in Hirschler and Schwarz Parts I and II (JAIC vol 33, 2023). Part II also records the reviewers' point that establishing equal lightness across different hues is very difficult for an untrained eye, and that vividness differences get mistaken for lightness differences."
      },
      "belongs": {
        "verdict": "core",
        "why": "The contrast that legibility and accessibility are actually made of."
      },
      "related": [
        280,
        294,
        309,
        316
      ]
    },
    {
      "n": 286,
      "title": "Cold-warm contrast",
      "aka": [
        "Kalt-Warm-Kontrast",
        "Temperature contrast"
      ],
      "oneLine": "Setting the warm side of the hue circle against the cold side, mainly to set mood.",
      "demo": {
        "caption": "The same layout twice at matched lightness. Only the side of the hue circle changed, and the mood changes with it.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Warm</span><div class=\"db-stage db-stage--tight\" style=\"background:#FEE2D7\"><div class=\"db-col\"><div class=\"db-block db-fill\" style=\"background:#AC4F24\"></div><div class=\"db-block db-fill\" style=\"background:#DF9B7D\"></div><span class=\"db-btn\" style=\"background:#803817;border-color:#803817;color:#FEE2D7\">Continue</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Cool</span><div class=\"db-stage db-stage--tight\" style=\"background:#D4EBFD\"><div class=\"db-col\"><div class=\"db-block db-fill\" style=\"background:#00729D\"></div><div class=\"db-block db-fill\" style=\"background:#60B4E4\"></div><span class=\"db-btn\" style=\"background:#005474;border-color:#005474;color:#D4EBFD\">Continue</span></div></div></div></div>"
      },
      "what": "Split the hue circle into a warm side, roughly yellow through orange to red, and a cold side, roughly green through blue, then set one against the other. Itten treated this as the mood-setting contrast. In traditional colour theory the same words also describe the bias inside a single hue: a reddish yellow is called a warm yellow and a greenish yellow a cool one.",
      "why": "It is the fastest way to change how a piece feels without touching the layout. It also creates depth, because a warm and a cool of the same value read as different planes rather than as a flat pair.",
      "how": [
        "Pick one temperature to dominate and let the other appear in small quantities (290).",
        "Use a cool shadow against a warm light for depth in illustration and photography.",
        "Say which sense you mean, hue family or hue bias, before arguing about whether a green is warm.",
        "Keep temperature consistent within a neutral ramp; a warm grey beside a cool grey looks like a mistake (283)."
      ],
      "example": "George Field's Chromatography of 1835 already listed a contrast of warmth and coolness and made it responsible for the general mood of a painting, more than a century before Itten wrote it down.",
      "numbers": "",
      "pitfall": "Warm and cool are naming conventions, not physical properties, and different authors draw the dividing line in different places. There is no fact to settle, so agree a working definition and move on. It also collides with colour temperature (282), where the kelvin scale runs the opposite way.",
      "source": "Johannes Itten, The Art of Color (1961), Kalt-Warm-Kontrast; the same contrast appears in George Field, Chromatography (1835) and Adolf Holzel's 1904 list.",
      "verify": {
        "status": "verified",
        "note": "Hirschler and Schwarz Part I (JAIC vol 33, 2023, 136-154) records that Field's Chromatography of 1835 distinguishes five contrasts and that, in Field's account, the contrast of warmth and coolness is responsible for the general effect or mood of a painting. Part II reports that the warm/cool split is extremely subjective and prints six different warm/cool classifications of the same twelve-hue wheel, which is the evidence behind the pitfall below."
      },
      "belongs": {
        "verdict": "core",
        "why": "A real and constantly used axis in colour work, provided you treat it as convention rather than physics."
      },
      "related": [
        282,
        287,
        311,
        319
      ]
    },
    {
      "n": 287,
      "title": "Complementary contrast",
      "aka": [
        "Komplementar-Kontrast",
        "Opposites"
      ],
      "oneLine": "Two hues that cancel to a neutral when mixed, though which pairs those are depends on the mixing.",
      "demo": {
        "caption": "One red, two different opposites. Which hue counts as complementary depends on whether you are mixing light or pigment.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Opposite in light</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-swatch\" style=\"background:#FF0000\"></span><span class=\"db-note\">+</span><span class=\"db-swatch\" style=\"background:#00FFFF\"></span><span class=\"db-note\">=</span><span class=\"db-swatch\" style=\"background:#FFFFFF\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Opposite on the pigment wheel</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-swatch\" style=\"background:#FF0000\"></span><span class=\"db-note\">+</span><span class=\"db-swatch\" style=\"background:#00A651\"></span><span class=\"db-note\">=</span><span class=\"db-swatch\" style=\"background:#43301C\"></span></div></div></div></div>"
      },
      "what": "Itten's fourth contrast pairs hues that sit opposite each other and neutralise to grey when mixed, and he built his account of harmony on them. The problem is that complementary has at least three incompatible meanings. Red's opposite is cyan in light, green on the schoolroom wheel, and something else again if you go by afterimage. Mixing two paints to black does not prove they are complementary either, since plenty of non-complementary filter pairs also produce black.",
      "why": "A genuine complementary pair is the strongest hue opposition available, which is exactly what you want for one small accent against a dominant field. Used at equal strength across a whole layout it simply fights itself.",
      "how": [
        "Say which space you mean when you specify a complement, and pick the opposite in OKLCH or on your actual palette rather than trusting a printed wheel.",
        "Use complements in unequal amounts: a large muted field, a small vivid accent (290).",
        "Mix a little of a colour's complement into it to knock it back without going flat grey (281).",
        "Test the pair for edge shimmer before shipping; complements at similar lightness vibrate (293)."
      ],
      "example": "The orange and teal grade common in action films sets warm skin tones against pushed-cyan shadows, a near-complementary pair kept in very unequal proportion.",
      "numbers": "",
      "pitfall": "A wheel that tells you red's opposite is green will not give you a pair that mixes to neutral in ink. Itten defines the pairing by pigment mixing and then reads the result perceptually and aesthetically, which is where the definition comes apart.",
      "source": "Johannes Itten, The Art of Color (1961), Komplementar-Kontrast.",
      "verify": {
        "status": "disputed",
        "note": "Hirschler and Schwarz, Part II (JAIC vol 33, 2023, 155-170), read in full this session. They set out five distinct ways complementary colours arise, which do not agree with each other, and call Itten's attempt to make mixing rules from hue a misleading, futile exercise. They also show that a subtractive mixture going black does not prove two colours are complementary, since green plus red dichroic filters also give black. Under magnification they found the mixture greys in Itten's own plates were made with black ink rather than by mixing the two pigments. An earlier draft of this entry said the reviewers call complementary contrast the most controversial of the seven; they do not, and the phrase about bitter controversies in their text is applied to cold-warm contrast, so I removed it."
      },
      "belongs": {
        "verdict": "core",
        "why": "The strongest hue relationship available and a standard palette move, as long as you know the definition is not fixed."
      },
      "related": [
        286,
        288,
        303,
        304
      ]
    },
    {
      "n": 288,
      "title": "Simultaneous contrast (Itten)",
      "aka": [
        "Simultaneous contrast",
        "Simultan-Kontrast"
      ],
      "oneLine": "A colour changes appearance according to what surrounds it, shifting in hue, lightness and chroma at once.",
      "demo": {
        "caption": "The same grey square twice. Against blue it turns warm, against orange it turns cool, and nothing was changed.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Blue ground</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 96\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"96\" fill=\"#2A5FA8\"></rect><rect x=\"45\" y=\"23\" width=\"60\" height=\"50\" fill=\"#8C8C8C\"></rect></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Orange ground</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 96\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"96\" fill=\"#D97A2B\"></rect><rect x=\"45\" y=\"23\" width=\"60\" height=\"50\" fill=\"#8C8C8C\"></rect></svg></div></div></div>"
      },
      "what": "This is Itten's teaching version, one of his seven contrasts, and it sits in a course built to train the eye. The underlying perceptual effect, with Chevreul's 1839 law and Albers' plates, is at 189. Put the same grey on a blue ground and on an orange ground and it will look warmer on the blue and cooler on the orange. The surround pushes the enclosed colour away from itself in all three dimensions at the same time. Itten took his definition from Goethe, saying the eye requires the complementary and generates it spontaneously, which is a poetic description rather than an accurate mechanism.",
      "why": "It means no colour can be judged in isolation. Every swatch approved in a picker will look different in the layout, and every token will read differently on the light and dark themes.",
      "how": [
        "Never sign off a colour on a white artboard. Test it on the real background at the real size.",
        "Place the same swatch on your lightest and darkest surfaces side by side before committing to it.",
        "Add a neutral border when two colours are distorting each other past usefulness.",
        "Re-check greys and near-neutrals hardest; they shift the most because they have least of their own to hold on to."
      ],
      "example": "Aristotle recorded it more than two thousand years before Chevreul, in the translation edited by W. D. Ross: in woven and embroidered stuffs the appearance of colours is profoundly affected by their juxtaposition with one another, purple for instance appearing different on white and on black wool.",
      "numbers": "",
      "pitfall": "Itten illustrated it with small uniform squares on flat grounds, which badly understates the effect. In real layouts it is larger, messier, and changes with the size of the patch and the texture around it.",
      "source": "Johannes Itten, The Art of Color (1961), Simultan-Kontrast; the canonical modern treatment is Chevreul, De la loi du contraste simultane des couleurs (1839).",
      "verify": {
        "status": "adjusted",
        "note": "I corrected Itten's framing. Hirschler and Schwarz Part II (JAIC vol 33, 2023) show his definition comes straight from Goethe and call it very poetic but not very accurate, they cite O'Shea and colleagues that simultaneous colour contrast remains unexplained, and they say Itten's small-squares illustration is a vast simplification. The Aristotle line is their quotation, taken from W. D. Ross (ed.), The Works of Aristotle vol 3, 375a, Clarendon 1931; I have reproduced their wording rather than paraphrasing it. They put the passage more than twenty-two centuries before Chevreul, which the dates do not quite support, so the entry says more than two thousand years. The phenomenon itself is not in doubt and is demonstrable in seconds. The opening pointer to 189 was added when the two cards were cross-linked; the claims there stand on their own sources."
      },
      "belongs": {
        "verdict": "core",
        "why": "The single most consequential perceptual fact about colour in practice: context changes the colour you shipped."
      },
      "related": [
        189,
        291,
        292,
        300,
        319
      ]
    },
    {
      "n": 289,
      "title": "Saturation contrast",
      "aka": [
        "Qualitats-Kontrast",
        "Quality contrast",
        "Contrast of intensity"
      ],
      "oneLine": "Vivid colour set against muted colour, holding hue and value roughly steady.",
      "demo": {
        "caption": "Six squares at one hue and one lightness. Only chroma changes on the right, and the eye lands instantly.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">All at full chroma</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-sq db-sq--lg\" style=\"--mark:#E8002D\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#E8002D\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#E8002D\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#E8002D\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#E8002D\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#E8002D\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">One vivid, five muted</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-sq db-sq--lg\" style=\"--mark:#A36C68\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#A36C68\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#A36C68\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#E8002D\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#A36C68\"></span><span class=\"db-sq db-sq--lg\" style=\"--mark:#A36C68\"></span></div></div></div></div>"
      },
      "what": "Itten's sixth contrast, which he called quality contrast, is the difference between pure, intense colour and dull, diluted colour. A muted field makes a small vivid patch look far more intense than it measures. The same contrast appears on Holzel's earlier list under the name intensity.",
      "why": "It is the cheapest hierarchy available. You can keep the hue and the value almost unchanged and still make one element unmistakably the subject, which matters when the palette is already fixed by a brand.",
      "how": [
        "Keep the great majority of a layout low in chroma and spend the vividness on the thing that needs acting on.",
        "Dull a colour by adding grey, white, black or its complement; each route lands somewhere different (281).",
        "Check the muted colours still separate from each other, because low chroma collapses distinctions quickly.",
        "Reserve your highest-chroma colour for one job and do not spend it twice on a page."
      ],
      "example": "Schindler's List (1993) is shot in black and white, then hand-colours one girl's coat red. Nothing about the composition changes; the colour difference alone makes her the subject.",
      "numbers": "",
      "pitfall": "Muted does not mean grey. Desaturate everything and the page dies. What you need is a chroma range, not a chroma ceiling applied uniformly.",
      "source": "Johannes Itten, The Art of Color (1961), Qualitats-Kontrast, rendered in the English edition as contrast of saturation; on Adolf Holzel's 1904 list as Intensitatsgegensatze.",
      "verify": {
        "status": "adjusted",
        "note": "Hirschler and Schwarz Parts I and II (JAIC vol 33, 2023) confirm the term change from Holzel's Intensitatsgegensatze to Itten's Qualitatskontrast, and quote Itten's own definition: the contrast between pure, intense colours and dull, diluted colours. The English translation heads the section contrast of saturation, so both names are given. I corrected the example: Schindler's List was filmed in black and white, it was not a desaturated colour frame, and the entry previously said the wrong thing."
      },
      "belongs": {
        "verdict": "core",
        "why": "The most useful contrast for building hierarchy inside a fixed brand palette."
      },
      "related": [
        279,
        284,
        308,
        319
      ]
    },
    {
      "n": 290,
      "title": "Contrast of extension (proportion)",
      "aka": [
        "Quantitats-Kontrast",
        "Contrast of quantity"
      ],
      "oneLine": "How much of each colour you use, treated as a colour decision rather than a layout accident.",
      "demo": {
        "caption": "Two colours, two proportions. At equal areas they compete; at nine to one the same pair becomes field and accent.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Equal areas</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#597188;flex-grow:1\"></span><span style=\"background:#F58220;flex-grow:1\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Nine to one</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#597188;flex-grow:9\"></span><span style=\"background:#F58220;flex-grow:1\"></span></div></div></div></div>"
      },
      "what": "Itten's seventh contrast concerns relative area. He argued that colours balance when their areas run inversely to their visual force, so a small patch of a light, strong colour balances a large field of a dark, weak one. He gave numerical light values for the hues and derived harmonious area ratios from them, attributing the figures to Goethe.",
      "why": "The idea underneath is sound and useful even though the arithmetic is not. Two colours at fifty-fifty read as a clash; the same two at ninety-ten read as a scheme with an accent. Proportion is where most palettes are won or lost.",
      "how": [
        "Decide proportions before you decide exact hues: dominant field, supporting colour, small accent (308).",
        "Give the loudest colour the smallest area.",
        "Judge the balance at final size and on the final medium, since the effect scales with area.",
        "Include chroma in your judgement, not just lightness, because a dull large field and a vivid small one is the pairing that works."
      ],
      "example": "The 60-30-10 split taught in interior design is the same idea with the arithmetic stripped out and a rule of thumb put in its place (308).",
      "numbers": "",
      "pitfall": "The specific ratios are not reliable, and the scheme only weighs lightness and area while ignoring chroma, which is a large part of what makes a colour dominate.",
      "source": "Johannes Itten, The Art of Color (1961), Quantitats-Kontrast.",
      "verify": {
        "status": "disputed",
        "note": "Hirschler and Schwarz Part II (JAIC vol 33, 2023, 155-170) state that the numerical ratios Itten attributed to Goethe came from Schopenhauer, by way of Schreiber and Holzel, that Goethe never spoke of them, and that Schopenhauer does not mention Goethe in this context. Elsasser published corrected area ratios in 1968 in a student magazine, though the reviewers call his corrections only minor modifications. Their larger objection is that the calculation weighs lightness and area alone and disregards vividness, and that the ratios are extremely vague in any case. I have kept the principle and deliberately left out every number."
      },
      "belongs": {
        "verdict": "core",
        "why": "Proportion is a genuine colour variable and the least taught one; the principle survives even though Itten's figures do not."
      },
      "related": [
        284,
        289,
        308,
        314
      ]
    },
    {
      "n": 291,
      "title": "Relativity of colour",
      "aka": [
        "A colour has many faces"
      ],
      "oneLine": "Colour is almost never seen as it is, because what surrounds it changes what it looks like.",
      "demo": {
        "caption": "A single grey rectangle drawn straight across both grounds. It looks darker on the left half and lighter on the right.",
        "html": "<div class=\"db-stage\"><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 96\"><rect x=\"0\" y=\"0\" width=\"160\" height=\"96\" fill=\"#E4E4E4\"></rect><rect x=\"160\" y=\"0\" width=\"160\" height=\"96\" fill=\"#2E2E2E\"></rect><rect x=\"16\" y=\"36\" width=\"288\" height=\"24\" fill=\"#8C8C8C\"></rect></svg><span class=\"db-note\">One rectangle, one grey value</span></div></div>"
      },
      "what": "This is the opening argument of Josef Albers's Interaction of Color, chapter four, titled A color has many faces: the relativity of color. One colour can be made to look like two, and two colours can be made to look like one. Albers taught the whole course with cut coloured paper rather than paint, so students could not fudge the swatch. The colour was fixed; only the context could change.",
      "why": "It reframes colour work as relationship management. You are not picking colours, you are picking what each colour sits against, and the second decision changes the first.",
      "how": [
        "Do colour studies as swatches in real context, never as a palette strip on white.",
        "Change the ground before you change the figure. It is usually the cheaper and more effective fix.",
        "Keep a fixed set of your real surface colours to test against, the way Albers kept his coloured papers.",
        "Assume any colour you approve in isolation will need adjusting once it is placed."
      ],
      "example": "Albers's own plate for the chapter puts one small square on two different grounds so that it reads convincingly as two different colours.",
      "numbers": "",
      "pitfall": "Approving colour on a blank white canvas in a design tool, then finding the same token unusable the moment it lands on a dark theme or over a photograph.",
      "source": "Josef Albers, Interaction of Color (Yale University Press, 1963), chapter IV, A color has many faces: the relativity of color.",
      "verify": {
        "status": "verified",
        "note": "Chapter IV, A color has many faces: the relativity of color, confirmed against the published chapter list for Interaction of Color: The Complete Digital Edition, read this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "The founding idea of practical colour work and the reason isolated swatch approval fails."
      },
      "related": [
        288,
        292,
        296,
        300
      ]
    },
    {
      "n": 292,
      "title": "Subtraction of colour",
      "aka": [
        "2 different colors look alike"
      ],
      "oneLine": "Two genuinely different colours can be made to look identical by choosing the right grounds.",
      "demo": {
        "caption": "Two greys, abutting on the left so the step shows. On their own grounds they close up and read as one.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">On one ground</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 60\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"60\" fill=\"#C4C4C4\"></rect><rect x=\"38\" y=\"14\" width=\"37\" height=\"32\" fill=\"#9E9E9E\"></rect><rect x=\"75\" y=\"14\" width=\"37\" height=\"32\" fill=\"#8A8A8A\"></rect></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Each on its own ground</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 60\"><rect x=\"0\" y=\"0\" width=\"75\" height=\"60\" fill=\"#E6E6E6\"></rect><rect x=\"75\" y=\"0\" width=\"75\" height=\"60\" fill=\"#3A3A3A\"></rect><rect x=\"20\" y=\"14\" width=\"35\" height=\"32\" fill=\"#9E9E9E\"></rect><rect x=\"95\" y=\"14\" width=\"35\" height=\"32\" fill=\"#8A8A8A\"></rect></svg></div></div></div>"
      },
      "what": "Albers's chapter seven runs the relativity trick in reverse. Place each of two different colours on a ground that pushes it towards the other, and they read as the same colour. He called it subtraction, because the ground takes something out of the colour it holds. The classroom exercise is to make two different papers appear as one.",
      "why": "It proves that context does the work, and it warns you that these two look the same is a statement about one particular pairing, not a property of the colours themselves.",
      "how": [
        "When two elements must read as the same colour across different surfaces, test them on those surfaces, not against each other.",
        "When two elements must read as different, check they still do against every background in the system.",
        "Use it deliberately to knit a palette together by adjusting grounds instead of endlessly retuning swatches.",
        "Add it to design-system review: every token gets checked on every surface it can legally land on."
      ],
      "example": "Albers's plate for the chapter sets two different papers on two grounds so that they read as one colour to almost every viewer.",
      "numbers": "",
      "pitfall": "Assuming a hex code guarantees consistent appearance. The same token on a white card and over a hero image will not read as the same colour, and users will report it as a bug.",
      "source": "Josef Albers, Interaction of Color (1963), chapter VII, 2 different colors look alike: subtraction of color.",
      "verify": {
        "status": "verified",
        "note": "Chapter VII, 2 different colors look alike: subtraction of color, confirmed against the published chapter list for Interaction of Color: The Complete Digital Edition, read this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "The counterpart to relativity, and directly applicable to design-token review."
      },
      "related": [
        288,
        291,
        296,
        319
      ]
    },
    {
      "n": 293,
      "title": "Vibrating boundaries",
      "aka": [
        "Enforced contours"
      ],
      "oneLine": "Two colours of similar lightness and opposed hue make their shared edge shimmer.",
      "demo": {
        "caption": "The same two colours twice, both at lightness 49. On the left every shared edge shimmers; a keyline stops it.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Edges touching</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 70\"><rect x=\"0\" y=\"0\" width=\"25\" height=\"70\" fill=\"#E8002D\"></rect><rect x=\"25\" y=\"0\" width=\"25\" height=\"70\" fill=\"#00857A\"></rect><rect x=\"50\" y=\"0\" width=\"25\" height=\"70\" fill=\"#E8002D\"></rect><rect x=\"75\" y=\"0\" width=\"25\" height=\"70\" fill=\"#00857A\"></rect><rect x=\"100\" y=\"0\" width=\"25\" height=\"70\" fill=\"#E8002D\"></rect><rect x=\"125\" y=\"0\" width=\"25\" height=\"70\" fill=\"#00857A\"></rect></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Keyline between</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 70\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"70\" fill=\"#FFFFFF\"></rect><rect x=\"0\" y=\"0\" width=\"22\" height=\"70\" fill=\"#E8002D\"></rect><rect x=\"25.6\" y=\"0\" width=\"22\" height=\"70\" fill=\"#00857A\"></rect><rect x=\"51.2\" y=\"0\" width=\"22\" height=\"70\" fill=\"#E8002D\"></rect><rect x=\"76.8\" y=\"0\" width=\"22\" height=\"70\" fill=\"#00857A\"></rect><rect x=\"102.4\" y=\"0\" width=\"22\" height=\"70\" fill=\"#E8002D\"></rect><rect x=\"128\" y=\"0\" width=\"22\" height=\"70\" fill=\"#00857A\"></rect></svg></div></div></div>"
      },
      "what": "Albers's chapter twenty-two, titled Vibrating boundaries: enforced contours. When two colours are close in lightness but strongly opposed in hue, the edge where they meet appears to flicker and the eye cannot settle on it. Albers described the contour as enforced: the boundary asserts itself rather than sitting quietly between two areas.",
      "why": "Occasionally you want it, for a poster or a piece of packaging that has to grab attention from across a room. Almost always you do not, because it makes text unreadable and gives people eye strain.",
      "how": [
        "Check every high-chroma pairing at similar lightness for shimmer before shipping.",
        "Kill it by separating the two colours in lightness, or by dropping the chroma of one of them.",
        "If both colours have to stay at strength, insert a thin black, white or grey keyline between them. That is the standard fix.",
        "Test at final size, not on a big swatch."
      ],
      "example": "Saturated red type on a saturated blue field of similar darkness, a staple of hastily made market signage, shimmers along every letter edge.",
      "numbers": "",
      "pitfall": "It gets worse at small sizes and on thin strokes, so a pairing that looks acceptable as two large blocks fails badly on body text and on one-pixel borders.",
      "source": "Josef Albers, Interaction of Color (1963), chapter XXII, Vibrating boundaries: enforced contours.",
      "verify": {
        "status": "adjusted",
        "note": "Chapter XXII, Vibrating boundaries: enforced contours, confirmed against the published chapter list for Interaction of Color: The Complete Digital Edition, read this session. I cut a claim that keylining is why comic art outlines everything, which is an invented causal story I could not source."
      },
      "belongs": {
        "verdict": "core",
        "why": "A specific, avoidable failure mode that shows up constantly in signage and interface work."
      },
      "related": [
        285,
        287,
        294,
        312
      ]
    },
    {
      "n": 294,
      "title": "Vanishing boundaries",
      "aka": [
        "Equal light intensity"
      ],
      "oneLine": "When two colours match in lightness the edge between them dissolves, whatever their hues.",
      "demo": {
        "caption": "The same four hues twice. On the left they share one lightness and the edges go soft; stepping lightness restores them.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One lightness</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#F14F3D\"></span><span style=\"background:#49A832\"></span><span style=\"background:#3493EA\"></span><span style=\"background:#DD3CD6\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Stepped lightness</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#F8BDB3\"></span><span style=\"background:#55C13B\"></span><span style=\"background:#2775BB\"></span><span style=\"background:#721A6E\"></span></div></div></div></div>"
      },
      "what": "Albers's chapter twenty-three, titled Equal light intensity: vanishing boundaries. Bring two colours to the same lightness and the boundary between them softens and can disappear entirely, even when the hues are obviously different when seen apart. He set it as an exercise: find two papers of equal light intensity and watch the edge go.",
      "why": "This is the most common accessibility failure in colour work, and it explains why a layout that looks fine to you is unusable for someone else. Used deliberately it also gives you a soft, atmospheric quality that hard edges cannot.",
      "how": [
        "Check every important edge for lightness difference, not hue difference.",
        "Convert the design to greyscale. A boundary that vanishes there will vanish for many readers (310).",
        "Add a lightness step, a border or a shadow wherever hue alone is carrying an edge.",
        "Test on a cheap screen and in bright daylight, not only on your calibrated monitor."
      ],
      "example": "A pie chart whose adjacent segments differ in hue but not in lightness collapses into a single blob when it is printed in black and white.",
      "numbers": "",
      "pitfall": "Designers with good colour vision on a good display rarely see it happening, so it survives internal review and fails in the wild.",
      "source": "Josef Albers, Interaction of Color (1963), chapter XXIII, Equal light intensity: vanishing boundaries.",
      "verify": {
        "status": "verified",
        "note": "Chapter XXIII, Equal light intensity: vanishing boundaries, confirmed against the published chapter list for Interaction of Color: The Complete Digital Edition, read this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "It names the mechanism behind most colour accessibility failures, which makes it directly actionable."
      },
      "related": [
        285,
        293,
        310,
        315
      ]
    },
    {
      "n": 295,
      "title": "Colour intervals and transformation",
      "aka": [
        "Colour steps"
      ],
      "oneLine": "The perceived distance between two colours, and the skill of making a sequence of even steps.",
      "demo": {
        "caption": "Six steps each way. On the left the first jump swallows half the ramp; on the right every step matches.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Lightness multiplied by a constant</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#DBD6F5\"></span><span style=\"background:#7461D7\"></span><span style=\"background:#402AAA\"></span><span style=\"background:#2B1D73\"></span><span style=\"background:#1D144F\"></span><span style=\"background:#140D35\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Even perceptual steps</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#ADE9FF\"></span><span style=\"background:#7FC1FF\"></span><span style=\"background:#509AE3\"></span><span style=\"background:#2575BC\"></span><span style=\"background:#01518E\"></span><span style=\"background:#003164\"></span></div></div></div></div>"
      },
      "what": "Albers's chapter fourteen. An interval is the felt distance between two colours. He had students build sequences in which each step feels the same size as the last, and then transform one colour into another through a set number of steps. The training is in judging difference rather than absolute colour, which is a different and harder skill.",
      "why": "Every ramp, gradient and quantitative scale you build is an interval problem. If the steps are uneven the eye finds the lumps immediately, even when the underlying numbers look perfectly tidy in a spreadsheet.",
      "how": [
        "Build ramps by eye as well as by formula. Equal numeric steps rarely feel equal.",
        "Test a ramp by covering the two ends and asking whether the middle steps are still evenly spaced.",
        "Start from a perceptual space (273, 320), then hand-correct the steps that look wrong.",
        "Give a ramp a job before you build it: how many steps, distinguishable at what size, on what background."
      ],
      "example": "A gradient from blue to yellow interpolated in sRGB dips through a dull grey at the midpoint. The endpoints are right and the interval in the middle is wrong.",
      "numbers": "",
      "pitfall": "Trusting arithmetic. A ramp generated by multiplying lightness by a constant looks systematic in a spreadsheet and visibly uneven on screen.",
      "source": "Josef Albers, Interaction of Color (1963), chapter XIV, Color intervals and transformation.",
      "verify": {
        "status": "verified",
        "note": "Chapter XIV, Color intervals and transformation, confirmed against the published chapter list for Interaction of Color: The Complete Digital Edition, read this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "Directly underpins every design-token ramp, data scale and gradient."
      },
      "related": [
        273,
        296,
        320,
        321
      ]
    },
    {
      "n": 296,
      "title": "The middle mixture",
      "aka": [
        "Intersecting colors"
      ],
      "oneLine": "The colour that reads as the true halfway point between two others, which is a judgement not an average.",
      "demo": {
        "caption": "Red to green in three steps. The averaged middle drops darker than both parents; the judged one sits between them.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Hex codes averaged</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#FF0000\"></span><span style=\"background:#806000\"></span><span style=\"background:#00C000\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Judged as a middle</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#FF0000\"></span><span style=\"background:#BC8A00\"></span><span style=\"background:#00C000\"></span></div></div></div></div>"
      },
      "what": "Albers's chapter fifteen, The middle mixture again: intersecting colors. Given two colours, the middle mixture is the one the eye accepts as sitting exactly between them. His exercise is to find that paper and then place it where two shapes overlap, so the overlap reads as transparency even though every piece of paper is opaque.",
      "why": "It is the mechanic behind every convincing transparency effect, every overlap in a diagram and every three-step ramp. It also teaches that a midpoint is a perceptual judgement, not the arithmetic mean of two numbers.",
      "how": [
        "When faking transparency with flat colour, work out the intersection colour by eye and check it against both parents.",
        "Test a three-step ramp by asking whether the middle step belongs equally to both ends.",
        "Remember the midpoint depends on the space you mix in; sRGB, CIELAB and OKLCH each give a different answer (273).",
        "If the overlap looks wrong, adjust the intersection rather than the two shapes."
      ],
      "example": "A Venn diagram drawn in flat colour only reads as two translucent overlapping discs if the intersection colour is a believable mixture of the two. Get it wrong and it reads as three unrelated shapes.",
      "numbers": "",
      "pitfall": "Averaging hex codes. sRGB values are gamma-encoded, so their arithmetic mean is not the perceptual midpoint and the result usually looks too dark.",
      "source": "Josef Albers, Interaction of Color (1963), chapter XV, The middle mixture again: intersecting colors.",
      "verify": {
        "status": "verified",
        "note": "Chapter XV, The middle mixture again: intersecting colors, confirmed against the published chapter list for Interaction of Color: The Complete Digital Edition, read this session. The word again in the title points back to chapter IX, Color mixture in paper: illusion of transparence, which is on the same list."
      },
      "belongs": {
        "verdict": "core",
        "why": "The concrete skill behind transparency, overlap and any short ramp."
      },
      "related": [
        292,
        295,
        298,
        320
      ]
    },
    {
      "n": 297,
      "title": "Film colour versus volume colour",
      "aka": [
        "Modes of appearance",
        "Katz's modes"
      ],
      "oneLine": "Colour can appear as placeless film, as a filled transparent volume, or as belonging to a surface.",
      "demo": {
        "caption": "One blue, three sets of cues. It reads as placeless air, as liquid inside a glass, and as a painted panel.",
        "html": "<div class=\"db-stage\"><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 96\"><rect x=\"0\" y=\"0\" width=\"100\" height=\"96\" fill=\"#2E6FBF\"></rect><polygon points=\"129,44 183,44 180,85 132,85\" fill=\"#2E6FBF\"></polygon><ellipse cx=\"156\" cy=\"44\" rx=\"27\" ry=\"4\" fill=\"#5B95D6\"></ellipse><path class=\"s\" d=\"M126 6 L132 86 L180 86 L186 6\"></path><ellipse cx=\"262\" cy=\"86\" rx=\"46\" ry=\"4\" class=\"f-mute\"></ellipse><rect x=\"212\" y=\"14\" width=\"100\" height=\"64\" rx=\"3\" fill=\"#2E6FBF\"></rect><rect x=\"212\" y=\"14\" width=\"100\" height=\"3\" fill=\"#5B95D6\"></rect><rect x=\"212\" y=\"75\" width=\"100\" height=\"3\" fill=\"#1F4E8C\"></rect><rect x=\"212\" y=\"14\" width=\"100\" height=\"64\" rx=\"3\" class=\"s-mute\"></rect></svg><div class=\"db-row db-row--between\"><span class=\"db-note\">film</span><span class=\"db-note\">volume</span><span class=\"db-note\">surface</span></div></div></div>"
      },
      "what": "Colour does not always look like it belongs to something. David Katz set out these modes of appearance, and Albers taught them in chapter seventeen. Film colour looks like a flat, placeless film with no texture and no clear distance, the way a clear sky does. Volume colour appears to fill a transparent body, the way wine fills a glass. Surface colour belongs to an object you could touch. Identical wavelengths, three different readings.",
      "why": "It explains why a screen tends to make a colour look like glowing air rather than a painted panel, and why the same colour that reads as a material in print reads as light on a display. If you want an interface surface to feel like a surface, you have to supply the cues.",
      "how": [
        "Give a flat colour texture, a defined edge and a light direction if it must read as a material.",
        "Use large, untextured, edge-free colour fields when you want the placeless glowing quality on purpose.",
        "Remember an emitting screen defaults towards film mode, so material illusions need active work.",
        "Reach for grain, edge treatment or a light source before you reach for a different hue."
      ],
      "example": "Look at a clear blue sky and you cannot say how far away the colour is or what surface carries it. Look at a glass of red wine and the colour clearly occupies the volume of liquid.",
      "numbers": "",
      "pitfall": "Ignoring the distinction and then wondering why a paper-textured background on screen never actually feels like paper. Changing the hue will not fix it; adding surface cues will.",
      "source": "Josef Albers, Interaction of Color (1963), chapter XVII, Film color and volume color: 2 natural effects; the modes-of-appearance distinction comes from David Katz, Die Erscheinungsweisen der Farben und ihre Beeinflussung durch die individuelle Erfahrung (1911), revised as Der Aufbau der Farbwelt (1930), published in English as The World of Colour (1935).",
      "verify": {
        "status": "verified",
        "note": "Albers's chapter number and full title confirmed against the published chapter list for Interaction of Color: The Complete Digital Edition this session. Katz's 1911 original title, the 1930 revision as Der Aufbau der Farbwelt and the 1935 English translation by R. B. MacLeod and C. W. Fox were confirmed against a library catalogue record."
      },
      "belongs": {
        "verdict": "core",
        "why": "Explains the gap between screen colour and material colour, which is a daily problem in interface and product work."
      },
      "related": [
        269,
        291,
        319,
        325
      ]
    },
    {
      "n": 298,
      "title": "Transparency and spatial illusion in colour",
      "aka": [
        "Illusion of transparency",
        "Space illusion"
      ],
      "oneLine": "Pick three flat colours so that one appears to be a see-through layer over another.",
      "demo": {
        "caption": "Same two rectangles, two overlap colours. On the left the ochre reads as a layer; on the right the overlap comes forward.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Overlap nearer the ochre</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 90\"><rect x=\"15\" y=\"14\" width=\"80\" height=\"62\" fill=\"#E8B33C\"></rect><rect x=\"55\" y=\"30\" width=\"80\" height=\"52\" fill=\"#2E6FBF\"></rect><rect x=\"55\" y=\"30\" width=\"40\" height=\"46\" fill=\"#BAA25D\"></rect></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Overlap at the exact middle</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 90\"><rect x=\"15\" y=\"14\" width=\"80\" height=\"62\" fill=\"#E8B33C\"></rect><rect x=\"55\" y=\"30\" width=\"80\" height=\"52\" fill=\"#2E6FBF\"></rect><rect x=\"55\" y=\"30\" width=\"40\" height=\"46\" fill=\"#8B917E\"></rect></svg></div></div></div>"
      },
      "what": "This is chapter XI of Josef Albers's Interaction of Color, Transparence and space-illusion. Take two colours and find a third that reads as their overlap, so the eye accepts one plane sitting over another. Nothing is actually transparent and no paint is mixed. The third colour has to be judged by eye until it convinces. Albers also points out the tipping point: at the exact middle mixture, equidistant from both parents, neither plane can be read as being on top, and the overlap comes forward as a colour in its own right rather than as a see-through layer.",
      "why": "It gives depth on a flat surface without shadows, blur or gradients. Interfaces use it constantly for scrims, tinted panels, chips and selection states, and judging the overlap colour correctly is what makes a panel read as glass rather than as a grey rectangle.",
      "how": [
        "Mix the overlap colour by eye against the real background instead of setting an opacity percentage and hoping.",
        "Compare the overlap with both parents in isolation. If it reads closer to one, that one belongs underneath.",
        "Sample the composited result and store it as a solid token, so the effect survives screenshots, PDFs and print.",
        "Kill the illusion on purpose when you want a flat plane: set the overlap at the exact middle mixture, which Albers says then appears frontal."
      ],
      "example": "Albers's own plates in Interaction of Color, where three flat opaque papers are arranged so that one rectangle appears to lie over another.",
      "numbers": "",
      "pitfall": "Designers set a percentage opacity and move on. Over a photograph the composite changes with every pixel underneath, so the layer reads as glass in one place and as dirt in another.",
      "source": "Josef Albers, Interaction of Color (Yale University Press, 1963), chapter XI, Transparence and space-illusion.",
      "verify": {
        "status": "verified",
        "note": "Chapter XI, Transparence and space-illusion, confirmed against the published chapter list for Interaction of Color: The Complete Digital Edition. An earlier draft called it exercise XI, which is the chapter number, not an exercise number. Correction made during review: an earlier draft also said the middle mixture makes the layers flatten. Albers's own wording is that a middle mixture presupposes equidistance from its colour parents and therefore appears frontal, as a colour by itself, so the transparency reading is lost rather than the surface flattening. That wording sits in chapter XV, on the middle mixture, not in chapter XI."
      },
      "belongs": {
        "verdict": "core",
        "why": "Using flat colour to imply layering is a daily decision in interface and print work, and it is the mechanism behind every overlay in a design system."
      },
      "related": [
        291,
        296,
        319
      ]
    },
    {
      "n": 299,
      "title": "Bezold effect",
      "aka": [
        "Von Bezold spreading effect",
        "Colour assimilation"
      ],
      "oneLine": "Small areas of colour blend into their neighbours instead of contrasting with them.",
      "demo": {
        "caption": "One red, two thread colours. Break it with white and it lifts towards pink; break it with black and it sinks.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">White threads</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 80\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"80\" fill=\"#D42A2A\"></rect><path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"3\" d=\"M2 0V80M10 0V80M18 0V80M26 0V80M34 0V80M42 0V80M50 0V80M58 0V80M66 0V80M74 0V80M82 0V80M90 0V80M98 0V80M106 0V80M114 0V80M122 0V80M130 0V80M138 0V80M146 0V80\"></path></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Black threads</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 80\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"80\" fill=\"#D42A2A\"></rect><path fill=\"none\" stroke=\"#151515\" stroke-width=\"3\" d=\"M2 0V80M10 0V80M18 0V80M26 0V80M34 0V80M42 0V80M50 0V80M58 0V80M66 0V80M74 0V80M82 0V80M90 0V80M98 0V80M106 0V80M114 0V80M122 0V80M130 0V80M138 0V80M146 0V80\"></path></svg></div></div></div>"
      },
      "what": "When colour is broken into fine areas, threads, hairlines, small type or dots, the eye mixes it with what surrounds it rather than pushing it away. Change one colour in a fine pattern and every other colour in that pattern appears to shift. This runs opposite to simultaneous contrast, which is what you get when the areas are large. Size decides which of the two you are dealing with.",
      "why": "It explains why a palette that looks right in big swatches falls apart at twelve pixels. Thin strokes, small text, table rules, sparklines and pattern fills all drift towards whatever they sit on, so they need more separation than a large block of the same colour.",
      "how": [
        "Test every colour at the size it will actually appear, never as a 200px swatch.",
        "Expect small elements to need more contrast than large ones to look equally strong.",
        "Use the effect deliberately: change a background thread or a grout colour and you shift a whole pattern without touching the main colours.",
        "Watch one-pixel borders. They assimilate into the background and quietly vanish."
      ],
      "example": "Bezold's own case was rug and textile pattern design, where swapping a single background colour changed the apparent colour of every motif without any motif being redyed.",
      "numbers": "",
      "pitfall": "Choosing brand colours as large swatches, then finding the accent reads grey in a one-pixel underline and muddy in a ten-pixel badge.",
      "source": "Wilhelm von Bezold (1837-1907), from his work on textile and rug patterns.",
      "verify": {
        "status": "verified",
        "note": "Attribution to Wilhelm von Bezold (1837-1907), a German professor of meteorology, and the discovery while experimenting with ways to modify a rug design by changing only one colour, were both confirmed from reference sources. The characterisation as an assimilation effect, the opposite of simultaneous contrast, was confirmed with it. Re-checked during review: still no reliable date for the original publication, and secondary pages that give 1874 do not cite the work, so no year is given here."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the reason palettes behave differently at small sizes, which affects type, icons, rules and charts in every project."
      },
      "related": [
        288,
        293,
        300
      ]
    },
    {
      "n": 300,
      "title": "Chevreul's law of simultaneous contrast",
      "aka": [
        "Law of simultaneous contrast of colours"
      ],
      "oneLine": "Two colours seen side by side push each other apart, in hue and in lightness.",
      "demo": {
        "caption": "Six flat, uniform greys. Each band looks lighter along the edge it shares with its darker neighbour, and darker along the other.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 300 64\"><rect x=\"0\" y=\"0\" width=\"50\" height=\"64\" fill=\"#DDDDDD\"></rect><rect x=\"50\" y=\"0\" width=\"50\" height=\"64\" fill=\"#BBBBBB\"></rect><rect x=\"100\" y=\"0\" width=\"50\" height=\"64\" fill=\"#9B9B9B\"></rect><rect x=\"150\" y=\"0\" width=\"50\" height=\"64\" fill=\"#7C7C7C\"></rect><rect x=\"200\" y=\"0\" width=\"50\" height=\"64\" fill=\"#5E5E5E\"></rect><rect x=\"250\" y=\"0\" width=\"50\" height=\"64\" fill=\"#424242\"></rect></svg></div>"
      },
      "what": "Michel-Eugene Chevreul was a chemist running the dye works at the Gobelins weaving manufactory in Paris, and he was asked why certain black wools looked weak. He found the fault was not the dye but the colours beside it. He set out the result in De la loi du contraste simultane des couleurs in 1839: two colour areas seen together look more different from each other than they do apart. A grey looks warmer against blue and cooler against orange, without changing at all.",
      "why": "No colour in your design is ever judged on its own. What the user sees is the colour plus its surroundings, which means a palette can only be approved in context, at size, on the real background.",
      "how": [
        "Judge every colour on its real background, at its real size, next to its real neighbours.",
        "If a neutral looks tinted, look at what is beside it before you change the neutral.",
        "Separate two colours that are fighting with a band of neutral. Chevreul's own remedy in woven work was an outline.",
        "Never sign colour off from a swatch sheet."
      ],
      "example": "Chevreul's remit was the Gobelins dye house, where black wools looked faded next to blue. The dye was correct; the neighbouring colour was doing it.",
      "numbers": "",
      "pitfall": "Chasing the wrong variable. A team adjusts a grey five times when the actual fix is the panel colour sitting behind it.",
      "source": "Michel-Eugene Chevreul, De la loi du contraste simultane des couleurs (Paris, 1839).",
      "verify": {
        "status": "verified",
        "note": "Title, city, 1839 date, the Gobelins connection and the statement of the law were all confirmed. Editorial note: this duplicates entry 288 (simultaneous contrast). The two should probably be merged, with this one supplying the historical attribution."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the founding observation that colour is relative, and every practical rule about judging colour in context comes from it."
      },
      "related": [
        288,
        291,
        299
      ]
    },
    {
      "n": 301,
      "title": "Monochromatic harmony",
      "aka": [
        "Single-hue palette"
      ],
      "oneLine": "One hue, varied only by lightness and saturation.",
      "demo": {
        "caption": "One hue marked on the twelve-hue circle, and the whole palette built from it by moving lightness alone.",
        "html": "<div class=\"db-stage\"><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 96\"><circle cx=\"18.3\" cy=\"66\" r=\"11\" class=\"s\"></circle><circle cx=\"46\" cy=\"18\" r=\"4.5\" fill=\"#FFE500\"></circle><circle cx=\"62\" cy=\"22.3\" r=\"4.5\" fill=\"#FDB913\"></circle><circle cx=\"73.7\" cy=\"34\" r=\"4.5\" fill=\"#F58220\"></circle><circle cx=\"78\" cy=\"50\" r=\"4.5\" fill=\"#EF4123\"></circle><circle cx=\"73.7\" cy=\"66\" r=\"4.5\" fill=\"#ED1C24\"></circle><circle cx=\"62\" cy=\"77.7\" r=\"4.5\" fill=\"#A2248F\"></circle><circle cx=\"46\" cy=\"82\" r=\"4.5\" fill=\"#662D91\"></circle><circle cx=\"30\" cy=\"77.7\" r=\"4.5\" fill=\"#2E3192\"></circle><circle cx=\"18.3\" cy=\"66\" r=\"8\" fill=\"#0072BC\"></circle><circle cx=\"14\" cy=\"50\" r=\"4.5\" fill=\"#00A79D\"></circle><circle cx=\"18.3\" cy=\"34\" r=\"4.5\" fill=\"#00A651\"></circle><circle cx=\"30\" cy=\"22.3\" r=\"4.5\" fill=\"#8DC63F\"></circle><rect x=\"110\" y=\"28\" width=\"33\" height=\"44\" fill=\"#EAF3FD\"></rect><rect x=\"143\" y=\"28\" width=\"33\" height=\"44\" fill=\"#B2D5F9\"></rect><rect x=\"176\" y=\"28\" width=\"33\" height=\"44\" fill=\"#5DAAF5\"></rect><rect x=\"209\" y=\"28\" width=\"33\" height=\"44\" fill=\"#2B7EC9\"></rect><rect x=\"242\" y=\"28\" width=\"33\" height=\"44\" fill=\"#12558E\"></rect><rect x=\"275\" y=\"28\" width=\"33\" height=\"44\" fill=\"#052F53\"></rect></svg><div class=\"db-row db-row--between\"><span class=\"db-note\">twelve-hue circle</span><span class=\"db-note\">resulting palette</span></div></div></div>"
      },
      "what": "A monochromatic scheme fixes the hue and moves value and chroma. Everything is a tint, shade or tone of the same colour, plus whatever neutrals you allow yourself. Because hue is held constant, the whole burden of hierarchy falls on lightness, which is the channel the eye reads structure with anyway.",
      "why": "It is the hardest scheme to make ugly and the easiest to make dull. You get guaranteed cohesion, and you are forced to build hierarchy properly, through value steps and spacing, rather than by reaching for another colour.",
      "how": [
        "Build the lightness ramp first in even perceptual steps, then decide the chroma at each step.",
        "Allow yourself neutrals plus one genuine accent if the interface needs warning and error states.",
        "Keep at least one very light and one very dark step so text contrast is available at both ends.",
        "Do not let chroma rise with lightness by accident. That is what makes a single-hue palette go muddy in the middle."
      ],
      "example": "Tailwind CSS ships each hue as a numbered lightness ramp. A page built from one of those ramps plus black and white is a monochromatic scheme.",
      "numbers": "",
      "pitfall": "Everything harmonises and nothing stands out, so the primary button and the disabled button end up looking like siblings.",
      "source": "Standard colour-wheel teaching. The geometric schemes were codified for art education by Johannes Itten, The Art of Color (1961).",
      "verify": {
        "status": "verified",
        "note": "Itten's twelve-part colour circle and his harmony geometry were confirmed. Monochrome is the degenerate case of that family, a single hue rather than a geometric relation between hues, and the term itself is common teaching vocabulary."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the default fallback when a brand has one colour, and it teaches the habit of building structure in lightness."
      },
      "related": [
        302,
        309,
        320
      ]
    },
    {
      "n": 302,
      "title": "Analogous harmony",
      "aka": [
        "Adjacent hues"
      ],
      "oneLine": "Two to four hues that sit next to each other on the colour wheel.",
      "demo": {
        "caption": "Three neighbouring hues taken off the circle. One dominates by area; the other two support it without opposing it.",
        "html": "<div class=\"db-stage\"><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 96\"><polyline class=\"s\" points=\"18.3,66 14,50 18.3,34\"></polyline><circle cx=\"46\" cy=\"18\" r=\"4.5\" fill=\"#FFE500\"></circle><circle cx=\"62\" cy=\"22.3\" r=\"4.5\" fill=\"#FDB913\"></circle><circle cx=\"73.7\" cy=\"34\" r=\"4.5\" fill=\"#F58220\"></circle><circle cx=\"78\" cy=\"50\" r=\"4.5\" fill=\"#EF4123\"></circle><circle cx=\"73.7\" cy=\"66\" r=\"4.5\" fill=\"#ED1C24\"></circle><circle cx=\"62\" cy=\"77.7\" r=\"4.5\" fill=\"#A2248F\"></circle><circle cx=\"46\" cy=\"82\" r=\"4.5\" fill=\"#662D91\"></circle><circle cx=\"30\" cy=\"77.7\" r=\"4.5\" fill=\"#2E3192\"></circle><circle cx=\"18.3\" cy=\"66\" r=\"8\" fill=\"#0072BC\"></circle><circle cx=\"14\" cy=\"50\" r=\"8\" fill=\"#00A79D\"></circle><circle cx=\"18.3\" cy=\"34\" r=\"8\" fill=\"#00A651\"></circle><circle cx=\"30\" cy=\"22.3\" r=\"4.5\" fill=\"#8DC63F\"></circle><rect x=\"110\" y=\"28\" width=\"112\" height=\"44\" fill=\"#597188\"></rect><rect x=\"222\" y=\"28\" width=\"48\" height=\"44\" fill=\"#789995\"></rect><rect x=\"270\" y=\"28\" width=\"38\" height=\"44\" fill=\"#00A651\"></rect></svg><div class=\"db-row db-row--between\"><span class=\"db-note\">twelve-hue circle</span><span class=\"db-note\">resulting palette</span></div></div></div>"
      },
      "what": "An analogous scheme takes neighbouring hues, blue with blue-green and green, and treats one of them as dominant. On Itten's twelve-hue circle these are the wedges that touch. The result reads as one colour family with internal variation, which is closer to how light behaves in a real scene than a scheme built from opposites.",
      "why": "It gives more life than a single hue while holding the temperature and mood steady. Because no pair is opposed, nothing vibrates at the edges, so it is safe across large areas and for long reading.",
      "how": [
        "Pick one hue to dominate and let the others support. Equal shares read as indecision.",
        "Vary lightness across the hues, or the scheme goes flat, because neighbouring hues are often close in value.",
        "Add a neutral or one small complementary accent when a call to action needs to escape the family.",
        "Check the hues stay distinct in greyscale and under a colour-blindness simulation."
      ],
      "example": "Any interface that tints its whole surface set towards one side of the wheel, so that page background, cards, dividers and muted text are all warm greys and beiges rather than neutral greys.",
      "numbers": "",
      "pitfall": "Neighbouring hues are often similar in lightness, so an analogous palette can look varied and still fail a contrast check between the very elements it is meant to separate.",
      "source": "Johannes Itten, The Art of Color (1961), twelve-part colour circle.",
      "verify": {
        "status": "verified",
        "note": "Itten's twelve-part circle was confirmed. The word analogous is standard colour-wheel teaching vocabulary rather than Itten's own coinage, so the name and the underlying geometry come from different places."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the most common way to build a palette with variety but no conflict, and it is what most brand palettes actually are."
      },
      "related": [
        301,
        303,
        309
      ]
    },
    {
      "n": 303,
      "title": "Complementary harmony",
      "aka": [
        "Opposite hues"
      ],
      "oneLine": "Two hues from opposite sides of the wheel, used as a large field and a small accent.",
      "demo": {
        "caption": "Two hues straight across the circle. Give them very unequal areas and the small one becomes the thing you click.",
        "html": "<div class=\"db-stage\"><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 96\"><line class=\"s\" x1=\"73.7\" y1=\"66\" x2=\"18.3\" y2=\"34\"></line><circle cx=\"46\" cy=\"18\" r=\"4.5\" fill=\"#FFE500\"></circle><circle cx=\"62\" cy=\"22.3\" r=\"4.5\" fill=\"#FDB913\"></circle><circle cx=\"73.7\" cy=\"34\" r=\"4.5\" fill=\"#F58220\"></circle><circle cx=\"78\" cy=\"50\" r=\"4.5\" fill=\"#EF4123\"></circle><circle cx=\"73.7\" cy=\"66\" r=\"8\" fill=\"#ED1C24\"></circle><circle cx=\"62\" cy=\"77.7\" r=\"4.5\" fill=\"#A2248F\"></circle><circle cx=\"46\" cy=\"82\" r=\"4.5\" fill=\"#662D91\"></circle><circle cx=\"30\" cy=\"77.7\" r=\"4.5\" fill=\"#2E3192\"></circle><circle cx=\"18.3\" cy=\"66\" r=\"4.5\" fill=\"#0072BC\"></circle><circle cx=\"14\" cy=\"50\" r=\"4.5\" fill=\"#00A79D\"></circle><circle cx=\"18.3\" cy=\"34\" r=\"8\" fill=\"#00A651\"></circle><circle cx=\"30\" cy=\"22.3\" r=\"4.5\" fill=\"#8DC63F\"></circle><rect x=\"110\" y=\"28\" width=\"170\" height=\"44\" fill=\"#73947A\"></rect><rect x=\"280\" y=\"28\" width=\"28\" height=\"44\" fill=\"#ED1C24\"></rect></svg><div class=\"db-row db-row--between\"><span class=\"db-note\">twelve-hue circle</span><span class=\"db-note\">resulting palette</span></div></div></div>"
      },
      "what": "Complementaries sit across the circle from one another. Which pairs count depends on which wheel you are using, and that matters more than most guides admit. On the artists' red-yellow-blue wheel that Itten taught, red opposes green and blue opposes orange. On an additive or opponent-process model the pairs are different, with red opposing cyan and blue opposing yellow. Both wheels are in daily circulation, so the complement of blue is not a single answer.",
      "why": "Maximum hue separation gives you the loudest signal available for an accent. At unequal sizes, one hue holds the page and the other points at the one thing you want clicked.",
      "how": [
        "Give the two hues very unequal areas: a large field of one, a small mark of the other.",
        "State which wheel you are working on before anyone argues about what the complement is.",
        "Never place two full-chroma complementaries at similar lightness against each other, or the shared edge will shimmer.",
        "Desaturate the dominant and let the accent keep its chroma."
      ],
      "example": "Itten listed complementary contrast as one of his seven colour contrasts, alongside contrast of hue, light-dark, cold-warm, simultaneous, saturation and extension.",
      "numbers": "",
      "pitfall": "Full-strength complementaries at equal value produce a vibrating boundary that is unreadable behind text and unpleasant behind anything else.",
      "source": "Johannes Itten, The Art of Color (1961), the seven colour contrasts.",
      "verify": {
        "status": "verified",
        "note": "Itten's seven contrasts were confirmed as hue, light-dark, cold-warm, complementary, simultaneous, saturation and extension. The mismatch between artists' RYB complements and opponent-process pairs is a known difference between the painters' wheel and psychophysical colour models."
      },
      "belongs": {
        "verdict": "core",
        "why": "Dominant field plus opposite accent is the workhorse structure for calls to action, and knowing which wheel defines the pair prevents a common argument."
      },
      "related": [
        287,
        293,
        304
      ]
    },
    {
      "n": 304,
      "title": "Split-complementary harmony",
      "aka": [
        "Split complement"
      ],
      "oneLine": "One hue plus the two hues sitting either side of its opposite.",
      "demo": {
        "caption": "The dominant hue and the two flanking its opposite. Most of the tension of a complementary pair, without the hard edge.",
        "html": "<div class=\"db-stage\"><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 96\"><polygon class=\"s\" points=\"73.7,66 14,50 30,22.3\"></polygon><circle cx=\"46\" cy=\"18\" r=\"4.5\" fill=\"#FFE500\"></circle><circle cx=\"62\" cy=\"22.3\" r=\"4.5\" fill=\"#FDB913\"></circle><circle cx=\"73.7\" cy=\"34\" r=\"4.5\" fill=\"#F58220\"></circle><circle cx=\"78\" cy=\"50\" r=\"4.5\" fill=\"#EF4123\"></circle><circle cx=\"73.7\" cy=\"66\" r=\"8\" fill=\"#ED1C24\"></circle><circle cx=\"62\" cy=\"77.7\" r=\"4.5\" fill=\"#A2248F\"></circle><circle cx=\"46\" cy=\"82\" r=\"4.5\" fill=\"#662D91\"></circle><circle cx=\"30\" cy=\"77.7\" r=\"4.5\" fill=\"#2E3192\"></circle><circle cx=\"18.3\" cy=\"66\" r=\"4.5\" fill=\"#0072BC\"></circle><circle cx=\"14\" cy=\"50\" r=\"8\" fill=\"#00A79D\"></circle><circle cx=\"18.3\" cy=\"34\" r=\"4.5\" fill=\"#00A651\"></circle><circle cx=\"30\" cy=\"22.3\" r=\"8\" fill=\"#8DC63F\"></circle><rect x=\"110\" y=\"28\" width=\"130\" height=\"44\" fill=\"#AA7069\"></rect><rect x=\"240\" y=\"28\" width=\"34\" height=\"44\" fill=\"#00A79D\"></rect><rect x=\"274\" y=\"28\" width=\"34\" height=\"44\" fill=\"#8DC63F\"></rect></svg><div class=\"db-row db-row--between\"><span class=\"db-note\">twelve-hue circle</span><span class=\"db-note\">resulting palette</span></div></div></div>"
      },
      "what": "Rather than pairing a hue with its direct opposite, you take the two hues flanking that opposite. On Itten's twelve-hue circle this makes an isosceles triangle, and he counted isosceles triads among his harmonious sets. You keep most of the tension of a complementary pair and lose the hard edge, because neither accent is the exact opposite of the dominant.",
      "why": "This is the practical version of a complementary scheme. Boundary vibration drops sharply, and you gain a second accent hue for a secondary action or a second data series without leaving the structure.",
      "how": [
        "Hold the single hue as your dominant and treat the flanking pair as accents.",
        "Keep the two accents at different lightness levels so they do not compete for the same job.",
        "Reach for it when a straight complementary pair is too aggressive for the area involved.",
        "Name the roles in your tokens, or the second accent will drift into decoration."
      ],
      "example": "Itten's harmonious triads include triangles that are isosceles rather than equilateral on the twelve-part circle. The split-complementary is precisely that case.",
      "numbers": "",
      "pitfall": "Applying both accents at full strength gives three loud hues and no dominant, which is worse than the complementary pair you were trying to soften.",
      "source": "Johannes Itten, The Art of Color (1961).",
      "verify": {
        "status": "verified",
        "note": "Itten's rule that triads forming equilateral or isosceles triangles on the twelve-part circle count as harmonious was checked, and the split-complementary is the isosceles case. The name itself is later teaching vocabulary, not Itten's term."
      },
      "belongs": {
        "verdict": "core",
        "why": "It solves a real problem, the harshness of direct complements, with a small and specific geometric move."
      },
      "related": [
        293,
        303,
        305
      ]
    },
    {
      "n": 305,
      "title": "Triadic harmony",
      "aka": [
        "Triad"
      ],
      "oneLine": "Three hues spaced evenly around the wheel.",
      "demo": {
        "caption": "Three hues at equal spacing. Even spacing makes them peers, so one still has to be given the dominant area.",
        "html": "<div class=\"db-stage\"><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 96\"><polygon class=\"s\" points=\"46,18 73.7,66 18.3,66\"></polygon><circle cx=\"46\" cy=\"18\" r=\"8\" fill=\"#FFE500\"></circle><circle cx=\"62\" cy=\"22.3\" r=\"4.5\" fill=\"#FDB913\"></circle><circle cx=\"73.7\" cy=\"34\" r=\"4.5\" fill=\"#F58220\"></circle><circle cx=\"78\" cy=\"50\" r=\"4.5\" fill=\"#EF4123\"></circle><circle cx=\"73.7\" cy=\"66\" r=\"8\" fill=\"#ED1C24\"></circle><circle cx=\"62\" cy=\"77.7\" r=\"4.5\" fill=\"#A2248F\"></circle><circle cx=\"46\" cy=\"82\" r=\"4.5\" fill=\"#662D91\"></circle><circle cx=\"30\" cy=\"77.7\" r=\"4.5\" fill=\"#2E3192\"></circle><circle cx=\"18.3\" cy=\"66\" r=\"8\" fill=\"#0072BC\"></circle><circle cx=\"14\" cy=\"50\" r=\"4.5\" fill=\"#00A79D\"></circle><circle cx=\"18.3\" cy=\"34\" r=\"4.5\" fill=\"#00A651\"></circle><circle cx=\"30\" cy=\"22.3\" r=\"4.5\" fill=\"#8DC63F\"></circle><rect x=\"110\" y=\"28\" width=\"120\" height=\"44\" fill=\"#597188\"></rect><rect x=\"230\" y=\"28\" width=\"42\" height=\"44\" fill=\"#ED1C24\"></rect><rect x=\"272\" y=\"28\" width=\"36\" height=\"44\" fill=\"#FFE500\"></rect></svg><div class=\"db-row db-row--between\"><span class=\"db-note\">twelve-hue circle</span><span class=\"db-note\">resulting palette</span></div></div></div>"
      },
      "what": "A triad takes three hues at equal spacing, which on Itten's twelve-part circle draws an equilateral triangle. Red, yellow and blue is the obvious one on the artists' wheel, and orange, green and violet is the other. Itten counted equilateral triads among his harmonious sets. The scheme covers a wide hue range while keeping the spacing regular, which is what makes the members feel like peers.",
      "why": "It gives three genuinely distinct signals, which is what categorical data and multi-state interfaces need. Even spacing means no two of the three collapse into each other under casual viewing.",
      "how": [
        "Choose one hue to dominate and hold the other two back in area or in chroma.",
        "Drop the chroma of at least two of them before covering any large area.",
        "Check the triad in greyscale. Even hue spacing tells you nothing about even lightness.",
        "If the third hue has no job, use two."
      ],
      "example": "Mondrian's grid paintings from around 1930 use red, yellow and blue with black, white and grey, which is the artists' primary triad plus neutrals.",
      "numbers": "",
      "pitfall": "Three hues at equal area and equal chroma produce a children's toy rather than a hierarchy, and the eye has nowhere to land first.",
      "source": "Johannes Itten, The Art of Color (1961).",
      "verify": {
        "status": "verified",
        "note": "Itten's equilateral-triad rule was confirmed against descriptions of his twelve-part circle. The Mondrian line is a description of what is visible in the paintings, not a claim about his stated working method."
      },
      "belongs": {
        "verdict": "core",
        "why": "Three-way categorical distinction comes up constantly in charts, statuses and wayfinding, and even spacing is the reliable way to get it."
      },
      "related": [
        304,
        306,
        321
      ]
    },
    {
      "n": 306,
      "title": "Tetradic / double-complementary harmony",
      "aka": [
        "Double complementary",
        "Square or rectangular harmony"
      ],
      "oneLine": "Four hues arranged as two complementary pairs.",
      "demo": {
        "caption": "Two complementary pairs, a square on the circle. Four hues means four candidates for dominance, so two are muted and held small.",
        "html": "<div class=\"db-stage\"><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 96\"><polygon class=\"s\" points=\"46,18 78,50 46,82 14,50\"></polygon><circle cx=\"46\" cy=\"18\" r=\"8\" fill=\"#FFE500\"></circle><circle cx=\"62\" cy=\"22.3\" r=\"4.5\" fill=\"#FDB913\"></circle><circle cx=\"73.7\" cy=\"34\" r=\"4.5\" fill=\"#F58220\"></circle><circle cx=\"78\" cy=\"50\" r=\"8\" fill=\"#EF4123\"></circle><circle cx=\"73.7\" cy=\"66\" r=\"4.5\" fill=\"#ED1C24\"></circle><circle cx=\"62\" cy=\"77.7\" r=\"4.5\" fill=\"#A2248F\"></circle><circle cx=\"46\" cy=\"82\" r=\"8\" fill=\"#662D91\"></circle><circle cx=\"30\" cy=\"77.7\" r=\"4.5\" fill=\"#2E3192\"></circle><circle cx=\"18.3\" cy=\"66\" r=\"4.5\" fill=\"#0072BC\"></circle><circle cx=\"14\" cy=\"50\" r=\"8\" fill=\"#00A79D\"></circle><circle cx=\"18.3\" cy=\"34\" r=\"4.5\" fill=\"#00A651\"></circle><circle cx=\"30\" cy=\"22.3\" r=\"4.5\" fill=\"#8DC63F\"></circle><rect x=\"110\" y=\"28\" width=\"90\" height=\"44\" fill=\"#789995\"></rect><rect x=\"200\" y=\"28\" width=\"70\" height=\"44\" fill=\"#AF7A6F\"></rect><rect x=\"270\" y=\"28\" width=\"20\" height=\"44\" fill=\"#662D91\"></rect><rect x=\"290\" y=\"28\" width=\"18\" height=\"44\" fill=\"#FFE500\"></rect></svg><div class=\"db-row db-row--between\"><span class=\"db-note\">twelve-hue circle</span><span class=\"db-note\">resulting palette</span></div></div></div>"
      },
      "what": "A tetrad is two complementary pairs used together, sitting on the circle as a square or a rectangle. Itten counted square and rectangular tetrads among his harmonious sets. In practice it is the hardest of the wheel schemes to control, because you now have two axes of tension and four candidates for dominance, and the scheme gives you no help choosing between them.",
      "why": "It offers the widest hue range that still has a stated structure behind it, which earns its place when you genuinely need four distinct categories and cannot fake the difference with lightness alone.",
      "how": [
        "Nominate one hue as dominant before you place anything on the page.",
        "Balance the warm and cool halves by area rather than by counting hues.",
        "Mute two of the four. Four saturated hues in one layout will fight.",
        "If you cannot say why you need four hues, use fewer."
      ],
      "example": "Itten's harmonious tetrads are the squares and rectangles that can be inscribed in his twelve-part colour circle.",
      "numbers": "",
      "pitfall": "A team pulls a tetrad out of a palette generator, applies all four at equal weight, and ships a layout in which nothing is primary.",
      "source": "Johannes Itten, The Art of Color (1961).",
      "verify": {
        "status": "verified",
        "note": "Itten's rule that tetrads forming squares or rectangles on the twelve-part circle count as harmonious was confirmed. Worth stating plainly: Itten's harmony rules are doctrine from a teaching treatise, not findings from an experiment, and no study was offered in support of them."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a real named scheme with a legitimate use in four-category data work, though it is the weakest of the wheel schemes and the one palette generators abuse most."
      },
      "related": [
        303,
        305,
        321
      ]
    },
    {
      "n": 307,
      "title": "Achromatic and accented neutral schemes",
      "aka": [
        "Neutral palette with one accent"
      ],
      "oneLine": "Black, white and greys, with at most one colour doing all the pointing.",
      "demo": {
        "caption": "Same wireframe twice. On the right only one element is coloured, and it is the only thing you look at.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Accent on five things</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-bar db-bar--accent db-bar--tall\" style=\"width:52%\"></span><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-bar db-bar--accent\" style=\"width:18%\"></span><span class=\"db-bar db-bar--accent\" style=\"width:24%\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-bar db-bar--accent db-bar--tall\" style=\"width:32%\"></span><span class=\"db-bar db-bar--accent db-bar--thin\" style=\"width:24%\"></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Accent on one</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><span class=\"db-bar db-bar--ink db-bar--tall\" style=\"width:52%\"></span><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-bar\" style=\"width:18%\"></span><span class=\"db-bar\" style=\"width:24%\"></span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-bar db-bar--accent db-bar--tall\" style=\"width:32%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:24%\"></span></div></div></div></div></div>"
      },
      "what": "An achromatic scheme uses only neutrals, so every distinction is made with lightness. An accented neutral keeps that structure and adds one chromatic colour, used sparingly, to mark the thing that matters. Because the neutrals carry no hue signal, the accent is unmissable even at small size and low chroma.",
      "why": "It is the cheapest reliable route to a clear hierarchy, and it survives greyscale printing, colour-vision deficiency and bad monitors. It also degrades well: if the accent fails to render, the layout still works.",
      "how": [
        "Build a neutral ramp with enough steps for page, surface, border, muted text and body text.",
        "Reserve the accent for interactive and status elements. Once it appears decoratively it stops meaning anything.",
        "Give the neutrals a slight consistent temperature rather than pure grey, so they read as chosen.",
        "Test the accent against every neutral in the ramp, not only against white."
      ],
      "example": "GOV.UK service pages are close to monochrome, with the green start button effectively the only strong colour on the page.",
      "numbers": "",
      "pitfall": "Accent creep. The one colour gets used for a heading, then a badge, then a hover state, and within a release nothing is emphasised any more.",
      "source": "Common practice. The principle underneath it is Itten's contrast of extension, where a small area of strong colour balances a large quiet field.",
      "verify": {
        "status": "verified",
        "note": "The link to Itten's contrast of extension was checked and it is one of his seven contrasts. The scheme name itself is common teaching vocabulary rather than a sourced coinage, so the label and the principle have different provenance."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the most durable palette structure there is, and the discipline of one accent forces genuine decisions about priority."
      },
      "related": [
        290,
        308,
        309
      ]
    },
    {
      "n": 308,
      "title": "Dominant, secondary, accent (60-30-10)",
      "aka": [
        "60-30-10 rule"
      ],
      "oneLine": "Give one colour most of the area, one a supporting share, and one a small accent.",
      "demo": {
        "caption": "Both halves are 60/30/10 by area. Only the right one puts the quiet surface in the dominant slot.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Brand colour dominant</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 96\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"96\" fill=\"#1D4ED8\"></rect><rect x=\"0\" y=\"0\" width=\"150\" height=\"28.8\" fill=\"#9DBBFF\"></rect><rect x=\"12\" y=\"58\" width=\"60\" height=\"24\" fill=\"#FF7A00\"></rect></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Surface dominant</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 96\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"96\" fill=\"#F2F3F5\"></rect><rect x=\"0\" y=\"0\" width=\"150\" height=\"28.8\" fill=\"#1D4ED8\"></rect><rect x=\"12\" y=\"58\" width=\"60\" height=\"24\" fill=\"#FF7A00\"></rect></svg></div></div></div>"
      },
      "what": "The rule says roughly 60 per cent of a surface goes to a dominant colour, 30 per cent to a secondary and 10 per cent to an accent. The idea underneath is sound: unequal areas create hierarchy and equal areas create noise. The specific figures are not sound. I looked for an originator and found none, and the common claim that the ratio derives from the golden section does not survive arithmetic, since 60:30:10 is nothing like 1.618.",
      "why": "It gives an inexperienced designer a default that prevents the worst error, which is splitting a layout evenly between two or three strong colours. Treat it as a starting ratio to break, not a target to hit.",
      "how": [
        "Set the dominant first and make it the surface, not the brand colour.",
        "Let the accent be genuinely small. If you have to hunt for it, that is usually about right.",
        "Measure area rather than counting colours. Two accents at five per cent each still spend one accent budget.",
        "For a principled version, use Itten's contrast of extension, which weights areas by the strength of the colour instead of fixing a ratio."
      ],
      "example": "Apartment Therapy publishes the rule as standard decorating advice, which is the interior-design tradition the web and UI version was imported from.",
      "numbers": "60 / 30 / 10 by area. Conventional figures, not measured ones.",
      "pitfall": "Teams audit working screens against the ratio and repaint them to hit it. No interface is 60 per cent brand colour, and forcing the numbers usually damages a layout that was already fine.",
      "source": "Origin unclear. Repeated for decades in interior design and then in UI writing, with no traceable originator.",
      "verify": {
        "status": "disputed",
        "note": "Searched for an originator and found none. Sources describe it as long-standing interior-design advice with no named inventor. The frequently repeated claim that it derives from the golden section is false: 60:30:10 is not a golden ratio in any arrangement. Corrected during review: an earlier draft named two magazines as publishing the rule and only one of those could be confirmed, so the second was removed."
      },
      "belongs": {
        "verdict": "core",
        "why": "Proportional allocation of colour is a genuine fundamental even though these particular numbers are folklore, and the entry earns its place by saying which half is which."
      },
      "related": [
        290,
        307,
        309
      ]
    },
    {
      "n": 309,
      "title": "Value structure before hue",
      "aka": [
        "Value does the work, colour gets the credit"
      ],
      "oneLine": "Get the lightness structure right first. Hue is the last decision, not the first.",
      "demo": {
        "caption": "One lightness structure, three hue sets. Every panel uses the same five steps, so the hierarchy is identical.",
        "html": "<div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 104\"><text class=\"t\" x=\"0\" y=\"10\">neutral</text><rect x=\"0\" y=\"16\" width=\"100\" height=\"84\" fill=\"#DEDEDE\"></rect><rect x=\"0\" y=\"16\" width=\"100\" height=\"20\" fill=\"#929292\"></rect><rect x=\"10\" y=\"46\" width=\"80\" height=\"30\" fill=\"#BEBEBE\"></rect><rect x=\"18\" y=\"56\" width=\"56\" height=\"4\" fill=\"#333333\"></rect><rect x=\"18\" y=\"64\" width=\"42\" height=\"4\" fill=\"#333333\"></rect><rect x=\"10\" y=\"84\" width=\"40\" height=\"10\" fill=\"#636363\"></rect><text class=\"t\" x=\"110\" y=\"10\">cool</text><rect x=\"110\" y=\"16\" width=\"100\" height=\"84\" fill=\"#C6E1FF\"></rect><rect x=\"110\" y=\"16\" width=\"100\" height=\"20\" fill=\"#7B95B0\"></rect><rect x=\"120\" y=\"46\" width=\"80\" height=\"30\" fill=\"#A6C1DD\"></rect><rect x=\"128\" y=\"56\" width=\"56\" height=\"4\" fill=\"#1E354B\"></rect><rect x=\"128\" y=\"64\" width=\"42\" height=\"4\" fill=\"#1E354B\"></rect><rect x=\"120\" y=\"84\" width=\"40\" height=\"10\" fill=\"#4D667F\"></rect><text class=\"t\" x=\"220\" y=\"10\">warm</text><rect x=\"220\" y=\"16\" width=\"100\" height=\"84\" fill=\"#FDD5BD\"></rect><rect x=\"220\" y=\"16\" width=\"100\" height=\"20\" fill=\"#AE8973\"></rect><rect x=\"230\" y=\"46\" width=\"80\" height=\"30\" fill=\"#DBB59E\"></rect><rect x=\"238\" y=\"56\" width=\"56\" height=\"4\" fill=\"#492A17\"></rect><rect x=\"238\" y=\"64\" width=\"42\" height=\"4\" fill=\"#492A17\"></rect><rect x=\"230\" y=\"84\" width=\"40\" height=\"10\" fill=\"#7D5B46\"></rect></svg></div>"
      },
      "what": "Lightness carries shape, edge and hierarchy. Hue and chroma add identity and mood on top of that structure. The working instruction is to design the whole thing in lightness steps and only then decide which hue sits at each step. There is hard support for the ordering: human vision resolves fine detail far better in lightness than in colour, which is why video and image compression throw away colour resolution and keep luminance at full rate.",
      "why": "A layout with a correct value structure works in greyscale, in sunlight, on a bad projector and for a colour-blind user. One built hue-first usually has to be rescued later with borders and drop shadows.",
      "how": [
        "Sketch the page in greys, assign roles to lightness levels, then colour those levels.",
        "When two elements refuse to separate, change lightness before you change hue.",
        "Keep the lightness of a token stable when its hue changes, so a rebrand does not break hierarchy.",
        "Use a perceptual lightness axis such as Lab or OKLCH so the steps are even to the eye rather than even in numbers."
      ],
      "example": "Chroma subsampling. The 4:2:0 scheme used in most JPEG implementations, DVD-Video, Blu-ray and H.264 halves the colour resolution in each direction, leaving about a quarter of the chroma samples, and viewers do not notice.",
      "numbers": "4:2:0 chroma subsampling samples colour at half resolution horizontally and half vertically, about a quarter of the chroma data, while keeping luminance at full rate. The rule of thumb behind it is that the eye resolves hue and colourfulness at roughly a third of the resolution it resolves luminance.",
      "pitfall": "Picking the brand hue first and then trying to derive a nine-step ramp from it, which gives steps that are uneven in lightness and unusable for text.",
      "source": "The aphorism is an anonymous painters' saying. The vision-science support is standard and is the basis of chroma subsampling.",
      "verify": {
        "status": "disputed",
        "note": "Disputed for the attribution, verified for the claim. Searched for an originator of the saying and found it described as an anonymous artists' cliche, with no reliable attribution to Ed Whitney, Kevin Macpherson or anyone else. The 4:2:0 sampling pattern and the one-third figure were re-checked against the standard reference account of chroma subsampling, which states the point as a rule of thumb about the visual system rather than as a measured acuity ratio, and it is given that way here. An earlier draft described 4:2:0 as a quarter of the spatial resolution, which conflates sample count with linear resolution; the wording now separates the two."
      },
      "belongs": {
        "verdict": "core",
        "why": "It sets the order of operations for every palette decision and is supported by how the visual system actually allocates acuity."
      },
      "related": [
        280,
        310,
        316
      ]
    },
    {
      "n": 310,
      "title": "Greyscale test",
      "aka": [
        "Desaturate check",
        "Squint test for colour"
      ],
      "oneLine": "Strip the colour out and check whether the design still reads.",
      "demo": {
        "caption": "The same chart desaturated. The two series were picked at one lightness, so in grey they become one series.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">In colour</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 80\"><rect x=\"6\" y=\"30\" width=\"18\" height=\"46\" fill=\"#DF574E\"></rect><rect x=\"30\" y=\"18\" width=\"18\" height=\"58\" fill=\"#47944C\"></rect><rect x=\"54\" y=\"14\" width=\"18\" height=\"62\" fill=\"#DF574E\"></rect><rect x=\"78\" y=\"36\" width=\"18\" height=\"40\" fill=\"#47944C\"></rect><rect x=\"102\" y=\"42\" width=\"18\" height=\"34\" fill=\"#DF574E\"></rect><rect x=\"126\" y=\"10\" width=\"18\" height=\"66\" fill=\"#47944C\"></rect><path class=\"s-mute\" d=\"M0 76.5H150\"></path></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Desaturated</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 80\"><rect x=\"6\" y=\"30\" width=\"18\" height=\"46\" fill=\"#848484\"></rect><rect x=\"30\" y=\"18\" width=\"18\" height=\"58\" fill=\"#848484\"></rect><rect x=\"54\" y=\"14\" width=\"18\" height=\"62\" fill=\"#848484\"></rect><rect x=\"78\" y=\"36\" width=\"18\" height=\"40\" fill=\"#848484\"></rect><rect x=\"102\" y=\"42\" width=\"18\" height=\"34\" fill=\"#848484\"></rect><rect x=\"126\" y=\"10\" width=\"18\" height=\"66\" fill=\"#848484\"></rect><path class=\"s-mute\" d=\"M0 76.5H150\"></path></svg></div></div></div>"
      },
      "what": "Convert the screen or spread to greyscale and confirm that hierarchy, grouping and every state distinction survive. It is a two-second check for the failure mode where colour is doing work that nothing else is doing. If a chart, a form or a set of tabs becomes ambiguous in grey, colour is load-bearing and needs a second cue.",
      "why": "It catches accessibility problems and print problems in the same pass, and it is faster than running a colour-blindness simulation on every screen. It also exposes a design being held together by chroma rather than by structure.",
      "how": [
        "Run it on the full composition, not on the palette page. What matters is how the parts sit together.",
        "Use a perceptual desaturation such as the CSS grayscale() filter or Lab lightness rather than averaging the channels.",
        "Test error and success states, selected and unselected tabs, and every chart legend.",
        "Fix failures with lightness, shape, pattern or a label. Do not fix them by making the colours louder."
      ],
      "example": "A chart with one series in mid-red and one in mid-green. Clearly distinct in colour, and near-identical greys the moment you desaturate.",
      "numbers": "",
      "pitfall": "Running the test on the palette page, where every swatch is a large square, and missing the failures that only appear at one-pixel and twelve-pixel sizes.",
      "source": "Standard studio practice; origin unclear.",
      "verify": {
        "status": "unverified",
        "note": "I could not find an originator or a first publication for the greyscale check. It appears throughout design teaching as common practice with no attribution. The reason it works is the luminance-acuity fact behind entry 309, which I did verify."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a method rather than a principle, and arguably it should be folded into 309, but it is the single most useful colour check a designer can run in a working day."
      },
      "related": [
        309,
        315,
        318
      ]
    },
    {
      "n": 311,
      "title": "Warm advance, cool recede",
      "aka": [
        "Cold-warm contrast",
        "Colour and depth"
      ],
      "oneLine": "The convention that warm hues appear to come forward and cool hues to fall back.",
      "demo": {
        "caption": "The same red and blue bars twice. Which colour floats in front swaps when the background polarity does.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">On black</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 80\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"80\" fill=\"#000000\"></rect><rect x=\"14\" y=\"16\" width=\"24\" height=\"48\" fill=\"#FF0000\"></rect><rect x=\"46\" y=\"16\" width=\"24\" height=\"48\" fill=\"#0000FF\"></rect><rect x=\"78\" y=\"16\" width=\"24\" height=\"48\" fill=\"#FF0000\"></rect><rect x=\"110\" y=\"16\" width=\"24\" height=\"48\" fill=\"#0000FF\"></rect></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">On white</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 80\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"80\" fill=\"#FFFFFF\"></rect><rect x=\"14\" y=\"16\" width=\"24\" height=\"48\" fill=\"#FF0000\"></rect><rect x=\"46\" y=\"16\" width=\"24\" height=\"48\" fill=\"#0000FF\"></rect><rect x=\"78\" y=\"16\" width=\"24\" height=\"48\" fill=\"#FF0000\"></rect><rect x=\"110\" y=\"16\" width=\"24\" height=\"48\" fill=\"#0000FF\"></rect></svg></div></div></div>"
      },
      "what": "The claim is that reds and oranges look nearer than blues and greens at the same physical distance. There is a real effect underneath it, chromostereopsis, caused mainly by the eye focusing and displacing long and short wavelengths differently. It is not reliable. Most observers do see red in front, but a minority see the reverse and others see no depth at all, and the direction flips with the background: on black, red bars come forward, while on white the blue bars come forward instead.",
      "why": "Used carefully, temperature is still a compositional lever for pushing a background back and pulling a subject forward, particularly alongside the reductions in contrast and chroma that real distance produces.",
      "how": [
        "Build depth with lightness and contrast first, and treat temperature as a garnish on top.",
        "Never rely on hue alone to signal which interface layer is on top.",
        "Avoid saturated red type on a saturated blue field, where the effect is strongest and most uncomfortable.",
        "When something needs to recede, cut its contrast and chroma rather than cooling its hue."
      ],
      "example": "Saturated red text on a saturated blue background. The two appear to sit at different depths and the eye cannot settle on either.",
      "numbers": "",
      "pitfall": "Treating it as a law and building an entire depth system on hue temperature, which then reads flat or inverted for the minority of viewers who see the effect weakly or backwards, and inverts again for everyone when the background polarity changes.",
      "source": "Johannes Itten, The Art of Color (1961), lists cold-warm contrast among the seven contrasts. The advance-recede claim rests on chromostereopsis research.",
      "verify": {
        "status": "disputed",
        "note": "Checked against a reference summary of the chromostereopsis literature. The effect is real but varies between individuals, reverses for some observers, and reverses for everyone with background polarity, red appearing nearer on black and further on white. Its mechanism is still argued over, with longitudinal and transverse chromatic aberration, pupil eccentricity and the Stiles-Crawford effect all proposed and no single one sufficient. Corrected during review: an earlier draft said roughly half of viewers see red in front. The source says most observers do, with a minority reversed or seeing no depth, so the figure was wrong and has been removed rather than replaced, because no percentage is given in the source."
      },
      "belongs": {
        "verdict": "core",
        "why": "Cold-warm contrast is one of Itten's seven and a real design lever. The shaky part is the advance-recede mechanism, not the practice of using temperature, and designers should know which is which."
      },
      "related": [
        286,
        293,
        312
      ]
    },
    {
      "n": 312,
      "title": "Colour and legibility trade-offs",
      "aka": [
        "Readable colour pairs"
      ],
      "oneLine": "Colour choices that work as graphics often make text harder to read.",
      "demo": {
        "caption": "The same red and green on both sides. Only their lightness differs, and only one side can be read.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One lightness, 1.0:1</span><div class=\"db-stage db-stage--tight\"><div class=\"db-chip-text db-fill\" style=\"color:#D1524D;background:#458B49\">Read this line at arm's length</div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Lightness split, 8.2:1</span><div class=\"db-stage db-stage--tight\"><div class=\"db-chip-text db-fill\" style=\"color:#782524;background:#D9EED7\">Read this line at arm's length</div></div></div></div>"
      },
      "what": "Text legibility runs mostly on lightness difference, not hue difference. Two colours can sit far apart on the wheel and still be almost the same lightness, which gives a handsome graphic and unreadable type. Saturated blue is a specific problem for small text: the centre of the fovea has a lower density of blue-sensitive cones, with their maximum density in a ring around it, so acuity for blue is lower than for other colours and peaks roughly one degree off centre.",
      "why": "This is the difference between a design that works for everyone and one that works for whoever has good eyes and a good screen. The fix is almost always lightness, which costs you nothing chromatically.",
      "how": [
        "Set text colour by lightness contrast against its actual background, then adjust hue within whatever still passes.",
        "Avoid saturated blue for body text and for hairline detail. A darker, less saturated blue reads far better.",
        "Never place saturated complementaries directly against each other behind text.",
        "Check text over images at the lightest and darkest point of the image, not against its average."
      ],
      "example": "Blue cone density is lowest at the very centre of the fovea and highest in a ring around it, and maximum acuity for blue light is lower than for other colours and occurs about one degree off centre. Blue hairlines and blue small text land in the worst part of the retina for them.",
      "numbers": "WCAG 2.2 SC 1.4.3 requires 4.5:1 for normal text and 3:1 for large text, defined as at least 18 point or 14 point bold. SC 1.4.6 raises that to 7:1 for normal text and 4.5:1 for large text at level AAA.",
      "pitfall": "Passing a contrast checker with a pair chosen for the brand, then setting it at 13px in a light weight, where the ratio no longer describes what the eye is actually doing.",
      "source": "W3C, WCAG 2.2, SC 1.4.3 and 1.4.6. The retinal detail is standard vision science.",
      "verify": {
        "status": "verified",
        "note": "The WCAG thresholds and the large-text definition, at least 18 point or 14 point bold, were read from the W3C Understanding document for SC 1.4.3. The AAA figures were completed during review: the entry previously gave only the 7:1 normal-text figure and omitted the 4.5:1 large-text figure. The lower blue-cone density at the foveal centre, the ring of maximum blue-cone density around it, and the statement that maximum acuity for blue is lower than for other colours and occurs approximately one degree off centre were all read from a standard reference account of foveal anatomy."
      },
      "belongs": {
        "verdict": "core",
        "why": "Type sits on colour in almost every design, and this entry is where aesthetic palette choices meet the limits of the eye."
      },
      "related": [
        311,
        316,
        317
      ]
    },
    {
      "n": 313,
      "title": "Colour semantics and cultural meaning",
      "aka": [
        "Colour associations",
        "Colour symbolism"
      ],
      "oneLine": "What a colour means is learned, local, and not the same everywhere.",
      "demo": {
        "none": "The entry deliberately asserts no colour-to-meaning mapping, so any picture would have to invent the associations it says do not transfer."
      },
      "what": "Colour associations come from culture, language and industry convention rather than from the wavelength. Aslam's 2006 review in the Journal of Marketing Communications gathered the cross-cultural evidence and concluded that colour meaning varies enough between markets that one global palette cannot be assumed to carry one global message. That is a narrower and much weaker claim than the popular colour-psychology genre, which asserts that particular hues cause particular emotions or purchase decisions.",
      "why": "The design consequence is small and practical: before you use colour to mean something, find out what it already means to the people you are shipping to, and in the sector you are shipping into.",
      "how": [
        "Check the convention in the target market rather than in a colour-meaning infographic.",
        "Prefer sector convention to general symbolism. In finance, medicine and cartography the existing convention beats any theory.",
        "Never let colour carry meaning on its own, whatever the market.",
        "Write the intended meaning into the token name so the team stops re-deciding it every quarter."
      ],
      "example": "Aslam's review exists because the mappings do not transfer. It sets out colour associations market by market rather than offering one global table.",
      "numbers": "",
      "pitfall": "Lifting a colour-meaning chart from a blog post and treating it as research. Most of those charts have nothing behind them.",
      "source": "Mubeen M. Aslam, \"Are You Selling the Right Colour? A Cross-cultural Review of Colour as a Marketing Cue\", Journal of Marketing Communications 12(1), 15-30 (2006).",
      "verify": {
        "status": "disputed",
        "note": "I confirmed the paper's author, title, journal, volume, issue, pages and year, and that it is a cross-cultural review of colour associations. I did not verify any individual colour-to-meaning mapping and have deliberately stated none. The popular claims that specific hues reliably cause specific emotions or behaviours are not supported by anything I could confirm."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "The material is marketing and anthropology rather than design. The honest design use is narrow but real: check the local and sector convention before you assign meaning to a colour, and never let the colour carry the meaning alone."
      },
      "related": [
        314,
        318,
        321
      ]
    },
    {
      "n": 314,
      "title": "Brand colour ownership",
      "aka": [
        "Colour trade marks",
        "Signature colour"
      ],
      "oneLine": "Consistent use can turn a colour into a brand asset, and sometimes into a registered trade mark.",
      "demo": {
        "none": "What the entry teaches is trade mark law, and the one design rule left over, use the colour almost nowhere else, is already shown at 307."
      },
      "what": "Using one colour consistently over years makes it a recognition shortcut. Law recognises this in limited circumstances. In the United States, Qualitex v Jacobson Products (1995) held that a single colour can be registered as a trade mark where it has acquired secondary meaning, that is, where consumers read it as identifying a source, and where it is not functional. In the European Union, Libertel (2003) set out the conditions for registering a colour on its own. Registration is hard: Cadbury's purple, Pantone 2685C, was allowed at first instance in the UK and then overturned by the Court of Appeal in 2013, because the word predominant in the specification let the mark take a multitude of forms and so failed the requirement to be a sign capable of graphical representation.",
      "why": "Owning a colour compresses an identity into something recognised before a logo or a word is read. It also imposes discipline, because the colour only works as a signal if you use it consistently and use it almost nowhere else.",
      "how": [
        "Pick one colour to own rather than a palette, and specify it with a measurement for each medium instead of one hex code.",
        "Define where the colour may not be used. That matters more than defining where it may.",
        "Check the sector first. A colour already owned by a competitor is worth less than a distinctive second choice.",
        "Keep a physical reference and measure production against it."
      ],
      "example": "Qualitex's green-gold press pads, the case that established colour-only trade marks in United States law.",
      "numbers": "",
      "pitfall": "Declaring a brand colour and then spreading it across every interface state, so it stops being a signal and becomes wallpaper.",
      "source": "Qualitex Co. v Jacobson Products Co. (US Supreme Court, 1995); Libertel Groep v Benelux-Merkenbureau (ECJ, 2003); Societe des Produits Nestle SA v Cadbury UK Ltd [2013] EWCA Civ 1174.",
      "verify": {
        "status": "verified",
        "note": "The Qualitex holding was confirmed: a single colour is registrable with secondary meaning, subject to the functionality doctrine. Libertel's existence and subject matter were also confirmed. The Cadbury appeal year was resolved during review, where the previous draft gave none: the Court of Appeal handed down Nestle v Cadbury [2013] EWCA Civ 1174 on 4 October 2013, allowing Nestle's appeal and overturning the trial judge's decision, on the ground that the word predominant made the mark ambiguous. Note that Cadbury and Nestle litigated the purple mark again later, so 2013 is one judgment in a longer sequence and not the end of the story. This is law, it varies by jurisdiction, and it is not design doctrine."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "Overturned from core during review. Colour as an identity asset is a genuine brand design idea, but almost everything this entry actually teaches is trade mark law: Qualitex, Libertel, the Cadbury appeal, secondary meaning, functionality. That is borrowed material, it varies by jurisdiction, and a designer cannot act on it without a lawyer. The part that is ours reduces to one line, pick a colour and use it nowhere else, which entry 307 already covers as discipline. Adjacent is the honest verdict."
      },
      "related": [
        313,
        322,
        323
      ]
    },
    {
      "n": 315,
      "title": "Colour-vision deficiency safe palettes",
      "aka": [
        "Colour-blind safe palettes",
        "Colour Universal Design palettes"
      ],
      "oneLine": "Choose colours that stay separable for people who cannot distinguish red from green.",
      "demo": {
        "caption": "Top pair as seen, bottom pair simulated for deuteranopia. The red and green collapse; the orange and blue do not.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Red and green series</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 84\"><text class=\"t\" x=\"0\" y=\"9\">as seen</text><rect x=\"0\" y=\"14\" width=\"70\" height=\"24\" fill=\"#D62728\"></rect><rect x=\"78\" y=\"14\" width=\"70\" height=\"24\" fill=\"#2CA02C\"></rect><text class=\"t\" x=\"0\" y=\"53\">deuteranopia</text><rect x=\"0\" y=\"58\" width=\"70\" height=\"24\" fill=\"#7F7F13\"></rect><rect x=\"78\" y=\"58\" width=\"70\" height=\"24\" fill=\"#8A8A32\"></rect></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Okabe-Ito orange and blue</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 84\"><text class=\"t\" x=\"0\" y=\"9\">as seen</text><rect x=\"0\" y=\"14\" width=\"70\" height=\"24\" fill=\"#E69F00\"></rect><rect x=\"78\" y=\"14\" width=\"70\" height=\"24\" fill=\"#56B4E9\"></rect><text class=\"t\" x=\"0\" y=\"53\">deuteranopia</text><rect x=\"0\" y=\"58\" width=\"70\" height=\"24\" fill=\"#B8B800\"></rect><rect x=\"78\" y=\"58\" width=\"70\" height=\"24\" fill=\"#A0A0EA\"></rect></svg></div></div></div>"
      },
      "what": "Around 8 per cent of men and about 0.4 per cent of women of Northern European ancestry have a congenital colour vision deficiency. The common forms are red-green, and deuteranomaly is the most frequent single type at roughly 5 per cent of men. Blue-yellow deficiency is rare. A safe palette is one whose members differ in lightness and along the blue-yellow axis as well as along red-green, so the distinctions survive when the red-green channel is unavailable.",
      "why": "Red-green pairs are the default for status colours and chart series, and they are the exact pairs that collapse. Designing the palette to be separable from the start costs far less than patching every chart afterwards.",
      "how": [
        "Start from a published set instead of inventing one. The Okabe-Ito eight-colour set from the Color Universal Design project is built for this.",
        "Make sure any two colours carrying different meanings also differ in lightness.",
        "Simulate protanopia and deuteranopia on the real screens, not on the swatch sheet.",
        "Never let colour be the only cue, whatever palette you use."
      ],
      "example": "The Okabe-Ito set: orange, sky blue, bluish green, yellow, blue, vermilion, reddish purple and black, published by Masataka Okabe and Kei Ito in the Color Universal Design guidance, dated 2002 and revised twice in 2008, and now standard in scientific figures.",
      "numbers": "About 8 per cent of men and 0.4 per cent of women of Northern European ancestry. By type in men: deuteranomaly about 5 per cent, protanopia about 1.3 per cent, protanomaly about 1.3 per cent, deuteranopia about 1.2 per cent. Tritanopia is about 0.008 per cent in both sexes.",
      "pitfall": "Running a simulator, deciding the chart is fine, and forgetting that simulators model the complete dichromacies while most affected people have the milder anomalous forms, which behave differently.",
      "source": "Masataka Okabe and Kei Ito, Color Universal Design, first dated 20 November 2002 and revised in February and September 2008. Prevalence figures from standard epidemiology.",
      "verify": {
        "status": "verified",
        "note": "The palette, its authors and their institutions were read from the Color Universal Design page itself, which carries the dates 20 November 2002 and revisions on 15 February and 24 September 2008. Corrected during review: the entry previously dated the palette to 2008 alone. Every prevalence figure was re-checked against a standard epidemiology table and each one holds: 8 per cent of men and 0.4 per cent of women of Northern European ancestry, and in men deuteranomaly 5.0, protanopia 1.3, protanomaly 1.3, deuteranopia 1.2 and tritanopia 0.008 per cent. Note that 0.5 per cent for women is also widely quoted."
      },
      "belongs": {
        "verdict": "core",
        "why": "One in twelve men cannot use a red-green distinction, which makes this a constraint on the palette rather than a later accessibility patch."
      },
      "related": [
        316,
        318,
        321
      ]
    },
    {
      "n": 316,
      "title": "Luminance contrast ratio",
      "aka": [
        "WCAG contrast ratio"
      ],
      "oneLine": "A number comparing the relative luminance of two colours, used as the accessibility test.",
      "demo": {
        "caption": "One grey family on white at three measured ratios. Watch where the line stops being comfortable to read.",
        "html": "<div class=\"db-stage\"><div class=\"db-col db-col--tight\"><div class=\"db-chip-text db-fill\" style=\"color:#B4B4B4;background:#FFFFFF\">This line sits at 2.1 to 1</div><div class=\"db-chip-text db-fill\" style=\"color:#767676;background:#FFFFFF\">This line sits at 4.5 to 1, the AA floor</div><div class=\"db-chip-text db-fill\" style=\"color:#595959;background:#FFFFFF\">This line sits at 7 to 1, the AAA level</div></div></div>"
      },
      "what": "WCAG 2 defines contrast as (L1 + 0.05) / (L2 + 0.05), where L1 is the relative luminance of the lighter colour, L2 that of the darker, and relative luminance is calculated from linearised sRGB channels weighted 0.2126 red, 0.7152 green and 0.0722 blue. The scale runs from 1:1 to 21:1. Level AA requires 4.5:1 for normal text and 3:1 for large text, defined as at least 18 point or 14 point bold. Level AAA requires 7:1, dropping to 4.5:1 for large text. Under SC 1.4.11, user interface components, their states, and the parts of a graphic needed to understand it require 3:1.",
      "why": "It turns an argument about whether something is readable into a number a build can fail on. That is worth a great deal, even where the number itself is imperfect.",
      "how": [
        "Test against the actual rendered background, including any overlay or image sitting behind the text.",
        "Treat the thresholds as a floor. Body text at exactly 4.5:1 is compliant and still tiring to read.",
        "Remember 1.4.11. Focus rings, input borders, chart lines and icon shapes all need 3:1.",
        "Do not round up. The W3C is explicit that computed values should not be rounded, and gives 4.499:1 as an example of a ratio that does not meet the 4.5:1 threshold."
      ],
      "example": "A focus ring on a form field. Under SC 1.4.11 it has to reach 3:1 against the colours adjacent to it, which rules out the pale grey outline most design systems begin with.",
      "numbers": "4.5:1 normal text (AA), 3:1 large text (AA, at least 18 point or 14 point bold), 7:1 normal and 4.5:1 large text (AAA), 3:1 non-text under SC 1.4.11. Formula (L1 + 0.05) / (L2 + 0.05), with relative luminance linearised at a threshold of 0.04045 and weighted 0.2126, 0.7152, 0.0722. Range 1:1 to 21:1.",
      "pitfall": "The formula is known to overstate contrast for dark colours, so a dark-mode pair that passes at 4.5:1 can look distinctly weaker than a light-mode pair carrying the same number.",
      "source": "W3C, Web Content Accessibility Guidelines 2.2, SC 1.4.3, 1.4.6 and 1.4.11.",
      "verify": {
        "status": "verified",
        "note": "The thresholds, the large-text definition, the relative luminance coefficients and linearisation threshold, the ratio formula, the exceptions for logos and incidental text, and the no-rounding note were all read from the W3C Understanding document for SC 1.4.3 in WCAG 2.2. Corrected during review: the entry previously attributed a 2.999:1 versus 3:1 example to the W3C. The example the W3C actually gives is 4.499:1 against the 4.5:1 threshold, and the wording now quotes that. The 21:1 upper bound follows from the formula applied to pure black and pure white."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the legal accessibility standard in most jurisdictions and the one colour number a designer will be held to."
      },
      "related": [
        312,
        317,
        318
      ]
    },
    {
      "n": 317,
      "title": "APCA perceptual contrast",
      "aka": [
        "Accessible Perceptual Contrast Algorithm",
        "Lc"
      ],
      "oneLine": "A newer contrast measure reporting a polarity-aware Lc value instead of a ratio.",
      "demo": {
        "caption": "Both pairs measure 4.74 to 1. Look at how much weaker the dark one reads; APCA scores it Lc minus 34.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">4.74:1, Lc 73</span><div class=\"db-stage db-stage--tight\"><div class=\"db-chip-text db-fill\" style=\"color:#737373;background:#FFFFFF\">Same ratio, both sides</div></div></div><div class=\"db-half\"><span class=\"db-tag\">4.74:1, Lc -34</span><div class=\"db-stage db-stage--tight\"><div class=\"db-chip-text db-fill\" style=\"color:#808080;background:#121212\">Same ratio, both sides</div></div></div></div>"
      },
      "what": "APCA was developed by Andrew Somers at Myndex Research as the candidate contrast method for WCAG 3. It reports lightness contrast as an Lc value on a scale the documentation gives as Lc 0 to Lc 105 and above, and the sign carries polarity: positive for dark text on a light background, negative for light text on a dark one. It is designed so that a given Lc means the same perceived readability at any lightness, which is the thing WCAG 2's ratio does not deliver. Its published levels tie contrast to font size and weight rather than to one blanket number.",
      "why": "It gives usable guidance for dark mode and for thin type, both of which WCAG 2 handles poorly. If you are designing a dark theme, APCA will tell you something the ratio will not.",
      "how": [
        "Use APCA alongside WCAG 2, not instead of it. WCAG 2 remains the legal standard almost everywhere.",
        "Aim at Lc 90 for body text, which is the preferred level, and treat Lc 75 as the minimum for a column of body text.",
        "Use Lc 45 for headlines and large text, and treat Lc 15 as the point at which many users cannot see it at all.",
        "Recheck a dark theme with APCA even when it already passed the ratio test."
      ],
      "example": "The APCA documentation pairs each level with a size and weight. For body text, Lc 90 is quoted with a font no smaller than 18px at weight 300 or 14px at weight 400, and Lc 75 with 24px at 300, 18px at 400, 16px at 500 or 14px at 700, so the number and the type specification are read together.",
      "numbers": "Lc 90 preferred for fluent text and columns of body text; Lc 75 minimum for columns of body text; Lc 60 minimum for content text that is not body or block text; Lc 45 minimum for headlines and large text; Lc 30 absolute minimum for any other text, including placeholder text; Lc 15 absolute minimum for non-semantic non-text that must still be discernible. Scale runs Lc 0 to Lc 105 and above.",
      "pitfall": "Shipping an interface that only satisfies APCA and then failing a procurement or legal accessibility audit, because those are run against WCAG 2.",
      "source": "Andrew Somers / Myndex Research, APCA documentation. Candidate method for WCAG 3, also published as the APCA Readability Criterion.",
      "verify": {
        "status": "verified",
        "note": "The Lc levels and the font size and weight pairings for Lc 90 and Lc 75 were read from APCA in a Nutshell on the Myndex documentation site, which gives the scale as Lc 0 to Lc 105 and above. Corrected during review: the entry previously capped the scale at about 106 and inverted the guidance for Lc 75 and Lc 90, treating Lc 75 as the body-text target when the documentation makes Lc 90 the preferred level and Lc 75 the minimum. Lc 15 is described there as the minimum for non-semantic non-text and the point of invisibility for many users, not a general text threshold. WCAG 3 is still a draft and APCA is not a ratified requirement, so nothing here is a legal threshold."
      },
      "belongs": {
        "verdict": "core",
        "why": "Dark interfaces are now routine and WCAG 2's ratio misjudges them, so a designer needs a second measure and this is the one being standardised."
      },
      "related": [
        312,
        316,
        319
      ]
    },
    {
      "n": 318,
      "title": "Redundant encoding (never colour alone)",
      "aka": [
        "Use of colour",
        "Double encoding"
      ],
      "oneLine": "Anything colour tells the user must also be told some other way.",
      "demo": {
        "caption": "The same three states in colour and in grey. Only the right pair survives when the colour is taken away.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Colour only</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">in colour</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot\" style=\"--mark:#E36359\"></span><span class=\"db-dot\" style=\"--mark:#C17D19\"></span><span class=\"db-dot\" style=\"--mark:#529B56\"></span></div><span class=\"db-note\">in grey</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot\" style=\"--mark:#8B8B8B\"></span><span class=\"db-dot\" style=\"--mark:#8C8C8C\"></span><span class=\"db-dot\" style=\"--mark:#8B8B8B\"></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Colour, shape and word</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">in colour</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-sq\" style=\"--mark:#E36359\"></span><span class=\"db-note\">failed</span><span class=\"db-tri\" style=\"--mark:#C17D19\"></span><span class=\"db-note\">check</span><span class=\"db-dot\" style=\"--mark:#529B56\"></span><span class=\"db-note\">passed</span></div><span class=\"db-note\">in grey</span><div class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-sq\" style=\"--mark:#8B8B8B\"></span><span class=\"db-note\">failed</span><span class=\"db-tri\" style=\"--mark:#8C8C8C\"></span><span class=\"db-note\">check</span><span class=\"db-dot\" style=\"--mark:#8B8B8B\"></span><span class=\"db-note\">passed</span></div></div></div></div></div>"
      },
      "what": "WCAG 2 SC 1.4.1, at level A, states that colour must not be the only visual means of conveying information, indicating an action, prompting a response or distinguishing a visual element. In practice that means adding a second channel: text, an icon, a shape, a pattern, a position or a line style. It sits at the lowest conformance level in the whole standard, which tells you how basic it is considered.",
      "why": "One extra cue removes an entire class of failure at once: colour blindness, greyscale printing, direct sunlight, cheap screens, monochrome e-ink, and every screenshot that ends up pasted into a document.",
      "how": [
        "Label chart series directly rather than relying on a colour legend.",
        "Give error states an icon and a message, not only a red border.",
        "Distinguish links in body text by underline as well as by colour.",
        "Give map and chart categories different shapes, fills or textures alongside their colours."
      ],
      "example": "A required-field marker shown as red text alone fails SC 1.4.1. Adding an asterisk or the word required satisfies it.",
      "numbers": "WCAG 2.2 SC 1.4.1, level A.",
      "pitfall": "Teams satisfy this on error states and then forget charts, status dots, calendar categories and tag colours, which are the places it matters most.",
      "source": "W3C, WCAG 2.2, SC 1.4.1 Use of Color (level A).",
      "verify": {
        "status": "verified",
        "note": "The criterion text and its level A status were read from the W3C Understanding document, including the note that distinguishing visited from unvisited links by colour alone does not fail this criterion even below 3:1 between the two link colours."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the single highest-yield accessibility habit in colour work and it costs almost nothing to apply from the start."
      },
      "related": [
        310,
        315,
        321
      ]
    },
    {
      "n": 319,
      "title": "Dark-mode desaturation and elevation tinting",
      "aka": [
        "Dark theme surfaces"
      ],
      "oneLine": "Dark themes need muted colours and lighter surfaces for higher layers, not pure black at full chroma.",
      "demo": {
        "caption": "Same three stacked panels. On the right each layer is a lighter grey, so depth reads without a single shadow.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Pure black, full-chroma accent</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 92\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"92\" fill=\"#000000\"></rect><rect x=\"10\" y=\"10\" width=\"130\" height=\"72\" fill=\"#000000\"></rect><rect x=\"22\" y=\"22\" width=\"106\" height=\"48\" fill=\"#000000\"></rect><rect x=\"32\" y=\"30\" width=\"80\" height=\"4\" fill=\"#FFFFFF\"></rect><rect x=\"32\" y=\"38\" width=\"60\" height=\"4\" fill=\"#FFFFFF\"></rect><rect x=\"32\" y=\"48\" width=\"52\" height=\"14\" fill=\"#7C4DFF\"></rect></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">#121212 base, muted accent</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 92\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"92\" fill=\"#121212\"></rect><rect x=\"10\" y=\"10\" width=\"130\" height=\"72\" fill=\"#1E1E1E\"></rect><rect x=\"22\" y=\"22\" width=\"106\" height=\"48\" fill=\"#2E2E2E\"></rect><rect x=\"32\" y=\"30\" width=\"80\" height=\"4\" fill=\"#E0E0E0\"></rect><rect x=\"32\" y=\"38\" width=\"60\" height=\"4\" fill=\"#E0E0E0\"></rect><rect x=\"32\" y=\"48\" width=\"52\" height=\"14\" fill=\"#B39DDB\"></rect></svg></div></div></div>"
      },
      "what": "Two rules come out of Google's Material dark theme guidance. First, the base surface is a very dark grey rather than pure black; Material specifies #121212. Second, layering is expressed through lightness, with a higher surface built by placing a semi-transparent white overlay over the base, so the higher a panel sits the lighter it is. Saturated colours are pulled back because high chroma against a dark field vibrates and loses legibility.",
      "why": "Pure black gives the maximum possible contrast against white text, which is uncomfortable over long reading and leaves nowhere to go when you need to show depth. A dark grey base gives you room in both directions.",
      "how": [
        "Use a dark grey base rather than #000000, and reserve true black for the deepest recess if you use it at all.",
        "Desaturate and lighten your brand colour for dark mode. The light-mode value is almost always too dark and too saturated.",
        "Show elevation by making higher surfaces lighter, since drop shadows barely register on a dark background.",
        "Recheck all contrast in dark mode, and use APCA as a second opinion because WCAG 2's ratio flatters dark pairs."
      ],
      "example": "Material Design specifies #121212 as the dark theme surface colour, with higher-elevation surfaces produced by placing a semi-transparent white overlay over it. Its published table runs from 0 per cent white at 0dp to 16 per cent at 24dp, and a card at 1dp takes 5 per cent.",
      "numbers": "Material Design's dark theme surface is #121212. White elevation overlay transparencies: 0dp 0 per cent, 1dp 5, 2dp 7, 3dp 8, 4dp 9, 6dp 11, 8dp 12, 12dp 14, 16dp 15, 24dp 16 per cent. Material also asks for at least 15.8:1 between white text and the base surface, so that body text still clears 4.5:1 on the lightest 24dp surface.",
      "pitfall": "Reusing the light-mode brand colour in dark mode. It usually goes muddy against the dark surface, and if it is saturated it buzzes at the edges of type.",
      "source": "Google, Material Design dark theme guidance.",
      "verify": {
        "status": "verified",
        "note": "The #121212 surface value, the white-overlay elevation model, the full overlay table from 0dp to 24dp and the 15.8:1 figure were read from Google's own Material Design dark theme page. Added during review: the previous draft omitted the overlay table because it had not been found in a primary source, and it is on that page in full. Note the overlays are not applied to surfaces using a primary or secondary colour. The desaturation rationale is stated guidance rather than a measured threshold."
      },
      "belongs": {
        "verdict": "core",
        "why": "Dark themes are now expected on most products, and these two rules are the difference between a theme that reads and one that glares."
      },
      "related": [
        316,
        317,
        320
      ]
    },
    {
      "n": 320,
      "title": "Perceptually uniform ramps",
      "aka": [
        "Even colour scales",
        "Uniform colour spaces"
      ],
      "oneLine": "Colour steps that look evenly spaced, because the space they were built in matches perception.",
      "demo": {
        "caption": "Six hues, one nominal lightness each way. On the left yellow blazes and blue sinks; on the right they match.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">HSL lightness 50 for all six</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#FF0000\"></span><span style=\"background:#FFFF00\"></span><span style=\"background:#00FF00\"></span><span style=\"background:#00FFFF\"></span><span style=\"background:#0000FF\"></span><span style=\"background:#FF00FF\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">OKLCH lightness 0.68 for all six</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#CF8074\"></span><span style=\"background:#9D9D50\"></span><span style=\"background:#74A86E\"></span><span style=\"background:#39ABAB\"></span><span style=\"background:#7997D6\"></span><span style=\"background:#BA82B8\"></span></div></div></div></div>"
      },
      "what": "RGB and HSL step evenly in numbers, not in what the eye sees. A ramp built in HSL will jump in apparent lightness between hues, with yellow reading far lighter than blue at the same nominal value. Perceptually uniform spaces fix that. CIELAB was the long-standing answer. Oklab, published by Bjorn Ottosson on 23 December 2020, improves hue prediction, where CIELAB's blues are notoriously poor, and lightness prediction, and its cylindrical form OKLCH is in CSS Color 4. Holding hue and chroma while stepping lightness gives steps that look even.",
      "why": "Even steps mean your neutral scale, your tints and your data ramps behave predictably. It also makes a design system portable: if the lightness step carries the meaning, a new hue drops straight into the existing scale.",
      "how": [
        "Build ramps in OKLCH or Lab rather than HSL.",
        "Hold lightness constant across hues when you want colours to feel equally strong.",
        "Reduce chroma at the very light and very dark ends, where the available gamut narrows anyway.",
        "Interpolate gradients in OKLCH so they do not sag through a grey or muddy midpoint."
      ],
      "example": "The viridis colour map, created by Stefan van der Walt and Nathaniel Smith and presented at SciPy in 2015, was designed to be perceptually uniform and to stay uniform when converted to greyscale.",
      "numbers": "",
      "pitfall": "Generating a nine-step ramp from HSL lightness values 90 down to 10 and shipping it. The middle steps sit too close together and the ends too far apart.",
      "source": "Bjorn Ottosson, \"A perceptual color space for image processing\" (2020); W3C CSS Color Module Level 4; van der Walt and Smith, viridis (2015).",
      "verify": {
        "status": "verified",
        "note": "Ottosson's post is dated 23 December 2020, and it states plainly that CIELAB's largest issue is its inability to predict hue and that blue hues in particular are predicted badly. His own comparison table gives Oklab a hue prediction error of 0.49 against CIELAB's 0.69, and a lightness prediction error of 0.20 against 1.70. OKLCH's presence in CSS Color 4 was confirmed from the specification. The viridis authorship and its perceptual-uniformity goal were confirmed separately."
      },
      "belongs": {
        "verdict": "core",
        "why": "Every design system ships a colour ramp, and building it in the wrong space is the most common reason those ramps are uneven."
      },
      "related": [
        273,
        321,
        322
      ]
    },
    {
      "n": 321,
      "title": "Sequential, diverging and categorical palettes",
      "aka": [
        "Qualitative palettes",
        "ColorBrewer scheme types"
      ],
      "oneLine": "Three palette types for three kinds of data: ordered, ordered around a midpoint, and unordered.",
      "demo": {
        "caption": "Three ColorBrewer families. Lightness climbs in the first, turns at the middle in the second, stays level in the third.",
        "html": "<div class=\"db-stage\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">sequential</span><div class=\"db-ramp\"><span style=\"background:#EFF3FF\"></span><span style=\"background:#BDD7E7\"></span><span style=\"background:#6BAED6\"></span><span style=\"background:#3182BD\"></span><span style=\"background:#08519C\"></span></div><span class=\"db-note\">diverging</span><div class=\"db-ramp\"><span style=\"background:#CA0020\"></span><span style=\"background:#F4A582\"></span><span style=\"background:#F7F7F7\"></span><span style=\"background:#92C5DE\"></span><span style=\"background:#0571B0\"></span></div><span class=\"db-note\">categorical</span><div class=\"db-ramp\"><span style=\"background:#1B9E77\"></span><span style=\"background:#D95F02\"></span><span style=\"background:#7570B3\"></span><span style=\"background:#E7298A\"></span><span style=\"background:#66A61E\"></span></div></div></div>"
      },
      "what": "Cynthia Brewer's ColorBrewer work splits map and chart palettes into three families. Sequential palettes run light to dark for data with an order and one direction, such as population density. Diverging palettes run from one hue through a neutral middle to another hue, for data with a meaningful centre, such as change from zero. Qualitative or categorical palettes use distinct hues at similar lightness for data with no order at all, such as land-use classes. Matching the family to the data is the whole exercise.",
      "why": "Using the wrong family lies about the data. A categorical palette on ordered data hides the order, and a sequential palette on unordered categories invents an order that is not there.",
      "how": [
        "Choose the family from the data before you choose any colours.",
        "Keep lightness monotonic in sequential palettes so greyscale printing still carries the order.",
        "Anchor a diverging palette's neutral point on a real value, usually zero, not on the midpoint of the observed range.",
        "Keep categorical sets small. Data-visualisation guidance generally puts the ceiling at about eight colours, beyond which reliable distinctions get very hard to find.",
        "Avoid rainbow ramps for continuous data."
      ],
      "example": "The ColorBrewer tool, published alongside Brewer, Hatchard and Harrower's 2003 catalogue in Cartography and Geographic Information Science, sorts every scheme into these three families and flags which are colour-blind safe and print safe.",
      "numbers": "",
      "pitfall": "The rainbow ramp. Borland and Taylor's four-page 2007 paper in IEEE Computer Graphics and Applications set out the case against it: no perceptual ordering, uncontrolled lightness variation that hides features, and gradients introduced that are not in the data.",
      "source": "Cynthia A. Brewer, Geoffrey W. Hatchard and Mark A. Harrower, \"ColorBrewer in Print: A Catalog of Color Schemes for Maps\", Cartography and Geographic Information Science 30(1), 5-32 (2003).",
      "verify": {
        "status": "verified",
        "note": "The ColorBrewer paper was confirmed on Brewer's own publication list at Penn State as Cartography and Geographic Information Science 30(1): 5-32, 2003. Borland and Taylor was confirmed as IEEE Computer Graphics and Applications 27(2): 14-17, March-April 2007. Corrected during review: a bullet previously claimed that categorical distinguishability collapses beyond eight colours and that this is why the Okabe-Ito set stops at eight. The eight-colour ceiling is common data-visualisation guidance, but Okabe and Ito do not give it as their reason, so the causal claim was removed. Note also that a 2023 IEEE CG&A article, Rainbow Colormaps Are Not All Bad, pushes back on the stronger form of the anti-rainbow position."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the first decision in any chart or map, and getting it wrong misrepresents the data before a single value is plotted."
      },
      "related": [
        315,
        318,
        320
      ]
    },
    {
      "n": 322,
      "title": "Gamut and out-of-gamut mapping",
      "aka": [
        "Colour gamut",
        "Gamut clipping"
      ],
      "oneLine": "Every device shows only some colours, and the rest have to be moved somewhere it can reach.",
      "demo": {
        "caption": "The inner triangle is what sRGB can show. The dot sits outside it, so it has to be moved in.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 150\"><polygon class=\"s-accent\" points=\"141.2,88.2 62.35,17.9 40.5,137.6\"></polygon><polygon class=\"s\" points=\"133.6,86.3 69,35 40.5,137.6\"></polygon><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M63.3 19.8L71.4 86.5\"></path><circle class=\"f-mute\" cx=\"71.4\" cy=\"86.5\" r=\"2\"></circle><path class=\"s\" d=\"M63.3 19.8L66.3 44.65\"></path><polygon class=\"f\" points=\"66.3,44.65 63.2,40 68.2,39.4\"></polygon><circle class=\"f-accent\" cx=\"63.3\" cy=\"19.8\" r=\"3\"></circle><text class=\"t\" x=\"85\" y=\"100\" text-anchor=\"middle\">sRGB</text><text class=\"t\" x=\"148\" y=\"90\">P3</text><text class=\"t\" x=\"172\" y=\"30\">CIE xy chromaticity</text><text class=\"t\" x=\"172\" y=\"52\">dot: green beyond sRGB</text><text class=\"t\" x=\"172\" y=\"70\">arrow: chroma reduced</text><text class=\"t\" x=\"172\" y=\"82\">to fit, hue held</text><text class=\"t\" x=\"172\" y=\"100\">dashes: toward white</text></svg></div>"
      },
      "what": "A gamut is the set of colours a device or encoding can actually produce. sRGB is the narrow, safe web default. DCI-P3 is wider, covering 53.6 per cent of the CIE 1931 chromaticity diagram and 86.9 per cent of Pointer's gamut of real surface colours, against sRGB's 69.4 per cent of Pointer's gamut. Rec. 2020 is wider still. A colour specified outside the destination gamut has to be mapped inwards. Clipping each channel to its limit is the crude option and it shifts hue. Reducing chroma while holding lightness and hue is better, and CSS Color 4 describes several such approaches for out-of-gamut CSS colours without mandating one.",
      "why": "Specify wide-gamut colours without thinking about mapping and your brand colour will differ between a P3 laptop, an sRGB monitor and CMYK print, in ways you did not choose.",
      "how": [
        "Provide a fallback for wide-gamut colours and check both, rather than trusting the browser's default handling.",
        "Prefer chroma reduction over clipping, because holding hue is what preserves recognition.",
        "Test brand colours at the edge of the gamut, since those are the ones that will move.",
        "For print, soft-proof against the actual press profile before signing anything off."
      ],
      "example": "A vivid green specified in Display P3. On a P3 screen it is the colour you chose. On an sRGB screen it has to be pulled inside a smaller gamut, and how it is pulled decides whether it stays green or drifts.",
      "numbers": "DCI-P3 covers 53.6 per cent of the CIE 1931 chromaticity diagram and 86.9 per cent of Pointer's gamut. Rec. 709 and sRGB cover 69.4 per cent of Pointer's gamut. Display P3 is described as about 50 per cent larger than sRGB by volume and about 25 per cent larger by surface, which is why the two figures both circulate.",
      "pitfall": "Choosing a brand colour on a wide-gamut studio display and only meeting the sRGB version at press, or on a client's laptop.",
      "source": "W3C CSS Color Module Level 4 (gamut mapping); DCI-P3 and sRGB specifications.",
      "verify": {
        "status": "verified",
        "note": "The DCI-P3 figures, 53.6 per cent of the CIE 1931 chromaticity diagram and 86.9 per cent of Pointer's gamut, and the 69.4 per cent Pointer's-gamut figure for Rec. 709 and sRGB, were re-checked against a published reference comparison and all three hold. Added during review: the same source gives Display P3 as roughly 50 per cent larger than sRGB by volume but only 25 per cent by surface, and quoting only the volume figure invites the reader to overstate the difference, so both are now given. CSS Color 4's gamut mapping approaches, including clipping, closest-colour (MINDE), chroma reduction and several hybrids, were read from the specification, which offers sample pseudocode but does not mandate a single algorithm."
      },
      "belongs": {
        "verdict": "core",
        "why": "Wide-gamut screens are now normal, so a brand colour has to be specified with its mapping behaviour in mind rather than as one hex value."
      },
      "related": [
        314,
        320,
        323
      ]
    },
    {
      "n": 323,
      "title": "Colour management and profiles",
      "aka": [
        "ICC colour management",
        "Rendering intents"
      ],
      "oneLine": "Profiles define what a device's numbers mean, so colour survives the trip between devices.",
      "demo": {
        "caption": "Five devices. Connecting every pair takes ten conversions; connecting each one to a shared reference takes five.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Pair by pair: 10 conversions</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 96\"><path class=\"s-mute\" d=\"M75 14L107.3 37.5M75 14L95 75.5M75 14L55 75.5M75 14L42.7 37.5M107.3 37.5L95 75.5M107.3 37.5L55 75.5M107.3 37.5L42.7 37.5M95 75.5L55 75.5M95 75.5L42.7 37.5M55 75.5L42.7 37.5\"></path><circle class=\"f\" cx=\"75\" cy=\"14\" r=\"6\"></circle><circle class=\"f\" cx=\"107.3\" cy=\"37.5\" r=\"6\"></circle><circle class=\"f\" cx=\"95\" cy=\"75.5\" r=\"6\"></circle><circle class=\"f\" cx=\"55\" cy=\"75.5\" r=\"6\"></circle><circle class=\"f\" cx=\"42.7\" cy=\"37.5\" r=\"6\"></circle></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Via the connection space: 5</span><div class=\"db-stage db-stage--flush\"><svg class=\"db-svg\" viewBox=\"0 0 150 96\"><path class=\"s-mute\" d=\"M75 14L75 48M107.3 37.5L75 48M95 75.5L75 48M55 75.5L75 48M42.7 37.5L75 48\"></path><circle class=\"s-accent\" cx=\"75\" cy=\"48\" r=\"11\"></circle><text class=\"t\" x=\"75\" y=\"51\" text-anchor=\"middle\">PCS</text><circle class=\"f\" cx=\"75\" cy=\"14\" r=\"6\"></circle><circle class=\"f\" cx=\"107.3\" cy=\"37.5\" r=\"6\"></circle><circle class=\"f\" cx=\"95\" cy=\"75.5\" r=\"6\"></circle><circle class=\"f\" cx=\"55\" cy=\"75.5\" r=\"6\"></circle><circle class=\"f\" cx=\"42.7\" cy=\"37.5\" r=\"6\"></circle></svg></div></div></div>"
      },
      "what": "An ICC profile maps a device's colour numbers to a device-independent reference called the profile connection space, which is based on CIE 1931 colorimetry under D50 illumination. Because every device connects to the same reference, an input profile and an output profile can be made independently and still work together. Conversions are governed by a rendering intent: perceptual, relative colorimetric, saturation, or absolute colorimetric. Perceptual compresses the whole image to fit and suits photographs. Relative colorimetric keeps in-gamut colours accurate and maps white to the paper. Absolute colorimetric is for proofing one device on another.",
      "why": "Without a profile a hex value is three numbers with no defined meaning. With one you can predict what a file will look like on a press or a phone, and you can demonstrate that a mismatch is the device rather than the file.",
      "how": [
        "Embed profiles in delivered files rather than assuming everyone will guess sRGB.",
        "Use relative colorimetric with black point compensation for logos and flat brand colour, and perceptual for photographs.",
        "Calibrate and profile the display you sign colour off on, and re-profile it periodically.",
        "Ask the printer for the actual output profile instead of guessing at a generic CMYK standard."
      ],
      "example": "The ICC profile connection space is specified under D50 with measurement per ISO 13655, and the perceptual intent is referenced to a hypothetical substrate of 89 per cent neutral reflectance viewed under ISO 3664 condition P2.",
      "numbers": "",
      "pitfall": "Untagged sRGB files opened in an application that assumes something else, which is why the same JPEG can look different in a browser and in a layout program on the same machine.",
      "source": "International Color Consortium, ICC.1 profile specification (v4); ICC.1:2004-10 was published as ISO 15076-1:2005.",
      "verify": {
        "status": "verified",
        "note": "The profile connection space definition, its D50 basis, the ISO 13655 measurement reference, the four rendering intents and the reference medium used for perceptual rendering were read from the ICC's own documentation, and the 89 per cent neutral reflectance wording appears verbatim in the published standard text. Added during review: the previous draft gave no ISO number because it had not been confirmed. ICC.1:2004-10 was adopted as ISO 15076-1:2005, which states that it is technically identical to ICC.1:2004-10, so the number can now be given. The current ICC.1 specification has moved on past that version."
      },
      "belongs": {
        "verdict": "core",
        "why": "Anyone whose work leaves the screen has to know what a profile is, and it is the only way to argue about a colour mismatch with evidence."
      },
      "related": [
        322,
        324,
        325
      ]
    },
    {
      "n": 324,
      "title": "Metamerism",
      "aka": [
        "Metameric match",
        "Metameric failure"
      ],
      "oneLine": "Two colours that match under one light and stop matching under another.",
      "demo": {
        "caption": "Two different materials. Under the warm light the pair matches exactly; in daylight the same two samples separate.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Under the shop lights</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 82\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"64\" fill=\"#EFE1C4\"></rect><rect x=\"14\" y=\"10\" width=\"52\" height=\"44\" fill=\"#8E6F4E\"></rect><rect x=\"84\" y=\"10\" width=\"52\" height=\"44\" fill=\"#8E6F4E\"></rect><text class=\"t\" x=\"40\" y=\"78\" text-anchor=\"middle\">sample A</text><text class=\"t\" x=\"110\" y=\"78\" text-anchor=\"middle\">sample B</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">In daylight</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 150 82\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"64\" fill=\"#DFE6EE\"></rect><rect x=\"14\" y=\"10\" width=\"52\" height=\"44\" fill=\"#7C6C60\"></rect><rect x=\"84\" y=\"10\" width=\"52\" height=\"44\" fill=\"#90714A\"></rect><text class=\"t\" x=\"40\" y=\"78\" text-anchor=\"middle\">sample A</text><text class=\"t\" x=\"110\" y=\"78\" text-anchor=\"middle\">sample B</text></svg></div></div></div>"
      },
      "what": "Human colour vision reduces a whole spectrum to three cone responses, so two samples with completely different spectral curves can produce identical tristimulus values and look the same. That is a metameric match, and it is fragile. Change the light and the match breaks, which is illuminant metamerism. It breaks between people too, because the ratio of long-wavelength to medium-wavelength cones varies from one observer to the next. It also breaks with viewing angle and with the size of the patch.",
      "why": "Anyone specifying a colour across more than one material or process is relying on metameric matches: ink on coated stock, ink on uncoated, dyed fabric, moulded plastic, a backlit screen. They are matched to the eye, not to the spectrum, so they will not all agree under every light.",
      "how": [
        "Approve physical colour under the light the product will actually be seen in, then check under at least one other.",
        "Specify a measurement rather than a visual match when the same colour has to appear on different materials.",
        "Expect the fabric, plastic and print versions of a brand colour to need separate targets.",
        "Use a light booth to a stated standard instead of the studio window."
      ],
      "example": "Car interior trim. Fabric, plastic and leather parts can match under showroom fluorescent lighting and clearly mismatch in daylight, because their spectral curves differ even where their tristimulus values agree.",
      "numbers": "The CIE metamerism index, from CIE publication 51.2, grades daylight simulators by the mean colour difference in CIELAB units between sample pairs under the reference illuminant and under the simulator: category A below 0.25, category B below 0.5, running down to category E above 2.0.",
      "pitfall": "Signing off a brand colour on a printed proof under studio lighting, then finding the packaging and the fabric no longer agree on the shop floor.",
      "source": "CIE colorimetry: the standard definition of metamerism, and CIE publication 51.2 for the index used to grade daylight simulators.",
      "verify": {
        "status": "verified",
        "note": "The definition, the four types (illuminant, observer, geometric and field-size) and the vehicle-trim example were checked against a standard reference account of metamerism. The grading scheme was traced to CIE publication 51.2, and a CIE conference paper confirms the two tightest boundaries directly: mean differences below 0.25 and below 0.5 delta E*ab give categories A and B. The rest of the A-to-E sequence, ending at E above 2.0, follows the same published scale but was not read off the paid standard itself."
      },
      "belongs": {
        "verdict": "core",
        "why": "Any designer specifying a brand colour across print, screen and physical material is managing metamerism whether or not they know the word, and it explains most colour disputes with suppliers."
      },
      "related": [
        314,
        323,
        325
      ]
    },
    {
      "n": 325,
      "title": "Ambient light and viewing conditions",
      "aka": [
        "Viewing environment",
        "Standard illuminant conditions"
      ],
      "oneLine": "The room changes what a colour looks like, which is why the standards specify the room.",
      "demo": {
        "caption": "The illuminance each standard assumes, drawn to scale. The room the sRGB numbers encode for is the top sliver.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 92\"><text class=\"t\" x=\"112\" y=\"17\" text-anchor=\"end\">sRGB encodes for</text><rect class=\"f-accent\" x=\"118\" y=\"8.5\" width=\"4.8\" height=\"11\"></rect><text class=\"t\" x=\"127\" y=\"17\">64 lx</text><text class=\"t\" x=\"112\" y=\"37\" text-anchor=\"end\">typical room</text><rect class=\"f\" x=\"118\" y=\"28.5\" width=\"15\" height=\"11\"></rect><text class=\"t\" x=\"137\" y=\"37\">200 lx</text><text class=\"t\" x=\"112\" y=\"57\" text-anchor=\"end\">ISO 3664 practical</text><rect class=\"f\" x=\"118\" y=\"48.5\" width=\"37.5\" height=\"11\"></rect><text class=\"t\" x=\"159.5\" y=\"57\">500 lx</text><text class=\"t\" x=\"112\" y=\"77\" text-anchor=\"end\">ISO 3664 critical</text><rect class=\"f\" x=\"118\" y=\"68.5\" width=\"150\" height=\"11\"></rect><text class=\"t\" x=\"272\" y=\"77\">2000 lx</text></svg></div>"
      },
      "what": "Colour appearance depends on the light you view under, its intensity and the surround. The standards say so explicitly. ISO 3664:2009 sets viewing conditions for graphic arts: D50 at a correlated colour temperature of 5000K, 2000 lux at the viewing surface for critical appraisal, a lower level of 500 lux for practical appraisal, and a colour rendering index above 90 for the lamp. The sRGB reference viewing environment in IEC 61966-2-1 assumes a screen luminance of 80 cd/m2 at a D65 white point, 64 lux of ambient light at a D50 ambient white point, and a surround at 20 per cent reflectance. Almost nobody works in either condition, and the sRGB table itself lists 200 lux as the typical ambient level against the 64 lux it encodes for.",
      "why": "It tells you where colour disagreements come from. When a client says the colour is wrong, the room is one of the first suspects and it is the one nobody checks.",
      "how": [
        "Sign off print colour in a booth to ISO 3664 rather than by the studio window.",
        "Keep the wall behind the monitor neutral and the room light steady through the day.",
        "Calibrate the display to a luminance that suits the actual room rather than to the panel's maximum.",
        "Reproduce the viewing situation for signage and environmental work. A sign judged in the studio and the same sign judged at dusk in the rain are two different jobs."
      ],
      "example": "ISO 3664:2009 requires D50 at 2000 lux for critical appraisal, and requires the viewing booth's lamp to have a colour rendering index above 90.",
      "numbers": "ISO 3664:2009: D50 (5000K), 2000 lux at the viewing surface for critical appraisal, 500 lux for practical appraisal, general CRI 90 or above. sRGB reference viewing environment (IEC 61966-2-1): 80 cd/m2 screen luminance, D65 screen white point, 64 lux encoding ambient at a D50 ambient white point, 20 per cent surround reflectance, 1.0 per cent encoding viewing flare, against a typical ambient of 200 lux and 5.0 per cent flare.",
      "pitfall": "Comparing a print and a screen side by side under office fluorescents and concluding that the printer got it wrong.",
      "source": "ISO 3664:2009, Graphic technology and photography, viewing conditions; IEC 61966-2-1:1999 (sRGB).",
      "verify": {
        "status": "verified",
        "note": "The ISO 3664:2009 figures were re-checked against a viewing-equipment manufacturer's summary of the standard: D50, 2000 lux for critical appraisal, 500 lux for practical appraisal, and a general colour rendering index of 90 or greater with each individual sample at 80 or greater. The full sRGB reference viewing environment table was re-read and every value holds. Corrected during review: the previous draft implied a single D65 white point for the whole environment. In the sRGB table the screen white point is D65 while the ambient white point is D50, and the typical ambient row (200 lux, 5.0 per cent flare) is worth quoting alongside the encoding row, because it is the standard's own admission of the gap. The paid ISO text itself was not read."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the environmental half of colour accuracy, and without it a calibrated screen and a profiled press still produce arguments nobody can settle."
      },
      "related": [
        319,
        323,
        324
      ]
    },
    {
      "n": 9276,
      "title": "Opponent-process colour vision",
      "aka": [
        "Hering's opponent-colours theory"
      ],
      "oneLine": "Colour described as opposed pairs, red against green and blue against yellow, which is why no colour looks reddish-green.",
      "demo": {
        "caption": "Six hue pairings. Four name a colour that sits between them. The two opponent pairs leave an empty square.",
        "html": "<div class=\"db-stage\"><div class=\"db-row db-row--nowrap db-row--centre db-row--top\"><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#FF7A00\"></span><span class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-dot--sm\" style=\"--mark:#FF0000\"></span><span class=\"db-note\">+</span><span class=\"db-dot db-dot--sm\" style=\"--mark:#FFD400\"></span></span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#9ACD00\"></span><span class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-dot--sm\" style=\"--mark:#FFD400\"></span><span class=\"db-note\">+</span><span class=\"db-dot db-dot--sm\" style=\"--mark:#00A651\"></span></span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#00A9A5\"></span><span class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-dot--sm\" style=\"--mark:#00A651\"></span><span class=\"db-note\">+</span><span class=\"db-dot db-dot--sm\" style=\"--mark:#0057B8\"></span></span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\" style=\"background:#7B2FBE\"></span><span class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-dot--sm\" style=\"--mark:#0057B8\"></span><span class=\"db-note\">+</span><span class=\"db-dot db-dot--sm\" style=\"--mark:#FF0000\"></span></span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\"></span><span class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-dot--sm\" style=\"--mark:#FF0000\"></span><span class=\"db-note\">+</span><span class=\"db-dot db-dot--sm\" style=\"--mark:#00A651\"></span></span></span><span class=\"db-col db-col--tight\"><span class=\"db-swatch\"></span><span class=\"db-row db-row--tight db-row--nowrap db-row--centre\"><span class=\"db-dot db-dot--sm\" style=\"--mark:#0057B8\"></span><span class=\"db-note\">+</span><span class=\"db-dot db-dot--sm\" style=\"--mark:#FFD400\"></span></span></span></div></div>"
      },
      "what": "Ewald Hering proposed in the late nineteenth century that colour appearance is coded as three opposed pairs: red against green, blue against yellow, and black against white. Leo Hurvich and Dorothea Jameson claimed to validate it in 1957 with hue cancellation experiments, adding one opponent colour to a stimulus until the other disappeared. This structure is why NCS uses six elementary colours, and why CIELAB, Oklab and every Lab-style space has two opponent axes rather than three primaries.",
      "why": "Once you know colour appearance is organised in opposed pairs, the layout of every modern colour space stops looking arbitrary and you stop expecting the RGB primaries to describe how colour looks.",
      "how": [
        "Read a* and b*, or Oklab's a and b, as opponent axes rather than as amounts of red and blue.",
        "Use the structure to explain to a client why there is no reddish-green: the two ends of one axis cannot both be positive.",
        "Prefer an opponent-based system (NCS, LCh, OKLCH) when describing a colour to someone non-technical.",
        "Treat it as a useful description of appearance, not as a claim about what neurons are doing."
      ],
      "example": "NCS notation asks how much a colour resembles yellow, red, blue and green, and its structure never permits a colour to be both red and green at once.",
      "numbers": "",
      "pitfall": "It is no longer settled science, so do not present it as established fact about the brain. It remains a good organising description of how colours look and how colour spaces are built.",
      "source": "Ewald Hering, opponent-colour theory, usually dated 1892, set out at length in Grundzuge der Lehre vom Lichtsinn (1905-1920); Leo Hurvich and Dorothea Jameson, hue cancellation experiments (1957).",
      "verify": {
        "status": "disputed",
        "note": "Reference works give 1892 as the date of Hering's proposal but name no publication for that year, so the entry now says late nineteenth century rather than asserting a date I could not tie to a text; his full treatment is Grundzuge der Lehre vom Lichtsinn. The 1957 Hurvich and Jameson hue cancellation work is well documented, though the same reference notes they defined the unique hues by the very colours used in the cancellation, which is circular. Conway, Malik-Moraleda and Gibson, Color appearance and the end of Hering's Opponent-Colors Theory, Trends in Cognitive Sciences 27(9), 791-804 (2023), abstract and highlights read this session, review the psychological and physiological evidence and conclude the theory is wrong, proposing Utility-Based Coding instead."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "It comes from vision science, not design. It earns its place because the architecture of every colour space a designer uses, NCS, CIELAB, Oklab and HCT, is built on opponent axes, so you need it to read those spaces correctly."
      },
      "related": [
        272,
        273,
        276,
        287
      ]
    },
    {
      "n": 9291,
      "title": "Colour constancy and chromatic adaptation",
      "aka": [
        "Discounting the illuminant"
      ],
      "oneLine": "The eye estimates the light and subtracts it, so a surface keeps its identity as the lighting changes.",
      "demo": {
        "caption": "The left card in each scene reads as white. Lifted out onto the neutral strip below, the two are plainly different.",
        "html": "<div class=\"db-stage\"><div class=\"db-col db-col--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 76\"><rect x=\"0\" y=\"0\" width=\"150\" height=\"76\" fill=\"#C4B278\"></rect><rect x=\"12\" y=\"12\" width=\"38\" height=\"52\" fill=\"#FFDD95\"></rect><rect x=\"56\" y=\"12\" width=\"38\" height=\"52\" fill=\"#A58A5D\"></rect><rect x=\"100\" y=\"12\" width=\"38\" height=\"52\" fill=\"#393020\"></rect><rect x=\"170\" y=\"0\" width=\"150\" height=\"76\" fill=\"#B0C4D8\"></rect><rect x=\"182\" y=\"12\" width=\"38\" height=\"52\" fill=\"#CEE9FF\"></rect><rect x=\"226\" y=\"12\" width=\"38\" height=\"52\" fill=\"#8192B1\"></rect><rect x=\"270\" y=\"12\" width=\"38\" height=\"52\" fill=\"#2D323D\"></rect></svg><div class=\"db-row db-row--between\"><span class=\"db-note\">under warm light</span><span class=\"db-note\">under cool light</span></div><svg class=\"db-svg\" viewBox=\"0 0 320 36\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"36\" fill=\"#9A9A9A\"></rect><rect x=\"90\" y=\"7\" width=\"62\" height=\"22\" fill=\"#FFDD95\"></rect><rect x=\"168\" y=\"7\" width=\"62\" height=\"22\" fill=\"#CEE9FF\"></rect></svg></div></div>"
      },
      "what": "A white shirt looks white in daylight, in a shop and under a table lamp, even though the light reaching your eye is a completely different colour in each case. The visual system estimates the illumination and discounts it. The estimate is a guess, and different people can guess differently from the same image, which is when measured colour and perceived colour come apart in public.",
      "why": "It means a pixel value is not a colour experience. Any decision about a colour carries a hidden assumption about the light it will be seen in, and if that assumption is wrong the colour will be rejected by someone who is looking at exactly the same file.",
      "how": [
        "State the viewing condition when you specify colour: D65 for screen, D50 for print proofing (282, 325).",
        "Put a visible white reference in an image if the colour has to be read correctly.",
        "Proof in the room that matters, and expect a studio-approved colour to be questioned in the client's meeting room.",
        "Do not rely on the eyedropper. Look at the colour in place, at size, under the target light."
      ],
      "example": "The dress photograph of 2015. Lafer-Sousa, Hermann and Conway surveyed 1,401 people and found 57% described it as blue and black, 30% as white and gold, 11% as blue and brown and 2% as something else. The pixels never changed; the assumed illumination did.",
      "numbers": "In the 2015 study, 1,401 subjects: 57% blue/black, 30% white/gold, 11% blue/brown, 2% other.",
      "pitfall": "Assuming everyone sees your carefully chosen neutral as neutral. Ambient light, monitor white point and the surrounding page all shift it, and none of those are under your control.",
      "source": "Long-established finding in colour science; the individual-differences result is Lafer-Sousa, Hermann and Conway, Striking individual differences in color perception uncovered by 'the dress' photograph, Current Biology (2015).",
      "verify": {
        "status": "verified",
        "note": "I read the full text of Lafer-Sousa, Hermann and Conway, Current Biology (2015), on PubMed Central this session. It states verbatim: overall, 57% of subjects described the dress as blue/black; 30%, white/gold; 11%, blue/brown; and 2%, other, from 1,401 subjects. The popular retelling has these the other way round, so the figures are worth checking against the paper rather than a news write-up. I could not identify a single originating source for colour constancy itself, so none is claimed."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the reason colour management, proofing and viewing conditions exist. The master list has metamerism and ambient light but no entry for constancy itself, which is the mechanism behind both."
      },
      "related": [
        288,
        291,
        324,
        325
      ]
    },
    {
      "n": 9320,
      "title": "Gamma encoding and blending in linear light",
      "aka": [
        "sRGB transfer function",
        "Linear-light compositing"
      ],
      "oneLine": "sRGB numbers are not proportional to light, so naive blending and gradients go wrong.",
      "demo": {
        "caption": "Squint at the striped block. It matches the patch on the right, not the mid-grey on the left.",
        "html": "<div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 320 86\"><rect x=\"0\" y=\"0\" width=\"100\" height=\"70\" fill=\"#808080\"></rect><rect x=\"110\" y=\"0\" width=\"100\" height=\"70\" fill=\"#FFFFFF\"></rect><path stroke=\"#000000\" stroke-width=\"1\" fill=\"none\" shape-rendering=\"crispEdges\" d=\"M110.5 0V70M112.5 0V70M114.5 0V70M116.5 0V70M118.5 0V70M120.5 0V70M122.5 0V70M124.5 0V70M126.5 0V70M128.5 0V70M130.5 0V70M132.5 0V70M134.5 0V70M136.5 0V70M138.5 0V70M140.5 0V70M142.5 0V70M144.5 0V70M146.5 0V70M148.5 0V70M150.5 0V70M152.5 0V70M154.5 0V70M156.5 0V70M158.5 0V70M160.5 0V70M162.5 0V70M164.5 0V70M166.5 0V70M168.5 0V70M170.5 0V70M172.5 0V70M174.5 0V70M176.5 0V70M178.5 0V70M180.5 0V70M182.5 0V70M184.5 0V70M186.5 0V70M188.5 0V70M190.5 0V70M192.5 0V70M194.5 0V70M196.5 0V70M198.5 0V70M200.5 0V70M202.5 0V70M204.5 0V70M206.5 0V70M208.5 0V70\"></path><rect x=\"220\" y=\"0\" width=\"100\" height=\"70\" fill=\"#BCBCBC\"></rect><text class=\"t\" x=\"50\" y=\"82\" text-anchor=\"middle\">#808080</text><text class=\"t\" x=\"160\" y=\"82\" text-anchor=\"middle\">half black, half white</text><text class=\"t\" x=\"270\" y=\"82\" text-anchor=\"middle\">#BCBCBC</text></svg></div>"
      },
      "what": "The sRGB encoding applies a non-linear transfer function, so the value 128 is not half the light of 255. WCAG's own relative luminance calculation has to linearise each channel before weighting it, which is direct evidence of the gap between the stored number and the actual light. Blend, average, resize or interpolate in the encoded numbers and you are doing arithmetic on the wrong quantity, which is why a red-to-green gradient in sRGB sags through a dark muddy middle.",
      "why": "Once you know this, a family of odd results makes sense at once: grey dips in gradients, halos when photographs are downscaled, and semi-transparent overlays that come out darker than expected. The remedy is always convert, operate, convert back.",
      "how": [
        "Interpolate gradients in a perceptual space such as OKLCH, which CSS Color 4 supports, rather than in raw sRGB.",
        "Linearise before averaging or resampling images, then re-encode afterwards.",
        "When working out contrast by hand, linearise the channels first, exactly as the WCAG formula does.",
        "Do not read a hex value's channels as if they were quantities of light."
      ],
      "example": "The WCAG relative luminance formula, which converts each sRGB channel through a threshold at 0.04045 before applying the weights 0.2126, 0.7152 and 0.0722. The conversion step exists precisely because the stored value is not linear light.",
      "numbers": "sRGB relative luminance: for each channel, if the value is at or below 0.04045 divide by 12.92, otherwise take ((c + 0.055) / 1.055) to the power 2.4; then L = 0.2126R + 0.7152G + 0.0722B. IEC 61966-2-1 was first published on 18 October 1999.",
      "pitfall": "Building a design system's alpha overlays by eye in sRGB and then wondering why the same overlay reads correctly over a light surface and far too heavy over a dark one.",
      "source": "IEC 61966-2-1:1999 (sRGB); W3C WCAG 2 relative luminance definition; W3C CSS Color Module Level 4.",
      "verify": {
        "status": "verified",
        "note": "The relative luminance procedure, its 0.04045 threshold and its channel weights were read from the W3C Understanding document for SC 1.4.3 in WCAG 2.2, which also records that this threshold replaced the older 0.03928 value with no practical effect on the result. Anyone comparing implementations will meet both numbers, so it is worth knowing which is which. The IEC webstore gives 18 October 1999 as the publication date of IEC 61966-2-1:1999. This entry is an addition and does not appear on the master list."
      },
      "belongs": {
        "verdict": "core",
        "why": "It sits underneath entries 316, 320 and 322 and explains the mechanism they all depend on, so leaving it out makes those three harder to apply correctly."
      },
      "related": [
        316,
        320,
        322
      ]
    },
    {
      "n": 9324,
      "title": "Colour constancy and chromatic adaptation",
      "aka": [
        "Discounting the illuminant"
      ],
      "oneLine": "The eye discounts the colour of the light, so a white shirt still looks white indoors and out.",
      "demo": {
        "none": "The constancy entry alongside this one already shows the effect; what is distinct here is adaptation over time, which happens in the reader's eye rather than on the page."
      },
      "what": "Under a warm bulb and under overcast daylight, the light reaching your eye from a white surface is very different, yet you see white both times. The visual system adapts to the prevailing illumination and judges surfaces relative to it. This is why matching measured tristimulus values is not the same as matching appearance, and why colour appearance models exist separately from colorimetry. It is also why the colour standards fix an illuminant rather than leaving it to the room.",
      "why": "It explains why a screen looks blue when you first sit down in a warm room and normal ten minutes later, and why a colour decision made in one environment does not transfer to another. It also explains why a warm-tinted dark theme settles into reading as neutral.",
      "how": [
        "Give your eyes time to adapt before judging colour, and judge in the environment the work will be seen in.",
        "Keep the surround neutral when signing colour off. A coloured wall or a bright desktop image shifts adaptation.",
        "Do not chase a small hue difference on a screen you have been staring at for an hour.",
        "For print, use a light booth to a stated standard so that adaptation is the same every time you look."
      ],
      "example": "The ICC profile connection space is defined under D50, and graphic-arts viewing standards specify D50 lighting, precisely so that everyone signing off a job is adapted to the same illuminant.",
      "numbers": "",
      "pitfall": "Approving a palette at the end of a long session in a room with a coloured wall, then finding it reads quite differently the following morning.",
      "source": "Standard colour science. The practical rules are embodied in ISO 3664:2009 viewing conditions and in the ICC's use of a D50 profile connection space.",
      "verify": {
        "status": "verified",
        "note": "Chromatic adaptation is the reason the ICC profile connection space and the graphic-arts viewing standards fix an illuminant at D50, and both of those facts were confirmed this session. I have not named any specific colour appearance model, because I did not verify one. This entry is an addition and does not appear on the master list."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the missing link between metamerism and viewing conditions, and it is the reason those two entries have the rules they do."
      },
      "related": [
        291,
        324,
        325
      ]
    }
  ]
};
