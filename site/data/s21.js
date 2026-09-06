window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[21] = {
  "n": 21,
  "slug": "web-craft",
  "title": "Web and front-end craft",
  "blurb": "How web pages get built: layout that adapts, speed you can measure, states the browser gives you.",
  "intro": "This is the part of design that only exists on the web. A printed page has one size and one speed. A web page has an unknown width, an unknown input device, an unknown connection, and a reader who may have asked their operating system for dark mode. Most of the ideas here were written down between 2003 and 2013 by working developers, and the measurable ones were later turned into published thresholds by Google's Chrome team. The people who are good at this design the constrained case first and treat load speed and layout stability as their own decisions rather than someone else's problem.",
  "sources": [
    "Ethan Marcotte, Responsive Web Design, A List Apart, 25 May 2010",
    "Luke Wroblewski, Mobile First (A Book Apart, October 2011)",
    "Luke Wroblewski, Mobile Design Details: Avoid The Spinner, lukew.com, 17 September 2013",
    "Jen Simmons, Everything You Know About Web Design Just Changed, An Event Apart Seattle 2018 (the term Intrinsic Web Design)",
    "Steven Champeon, Progressive Enhancement and the Future of Web Design, Webmonkey (2003)",
    "Tim Kadlec, Setting a performance budget, timkadlec.com, 27 January 2013",
    "Google Chrome team, web.dev Core Web Vitals documentation (LCP, INP, CLS thresholds)",
    "Google, RAIL performance model, web.dev",
    "Ilya Grigorik, Critical Rendering Path, web.dev, 31 March 2014",
    "Jakob Nielsen, Response Times: The 3 Important Limits (Nielsen Norman Group), after R. B. Miller (1968) and Card, Robertson and Mackinlay (1991)",
    "Kathryn Faulkner and Katherine Olvera, A Bone to Pick with Skeleton Screens, Viget, 19 October 2017",
    "Bill Chung, Everything you need to know about skeleton screens, UX Collective (2018)",
    "Tim Kadlec, Effective Skeleton Screens, timkadlec.com, 2 November 2020",
    "W3C, CSS Containment Module Level 3 (container queries)",
    "W3C, Media Queries Level 4 (pointer, hover, any-pointer, media types)",
    "W3C, CSS Color Adjustment Module Level 1 (color-scheme)",
    "W3C, CSS Values and Units Module Level 4 (svh, lvh, dvh)",
    "W3C, CSS Environment Variables Module Level 1 (env, safe-area-inset-*)",
    "W3C, CSS Fonts Module Level 4 (font-display)",
    "W3C, Web Content Accessibility Guidelines 2.2 (SC 2.5.8, 2.5.5, 2.4.11, 2.4.13)",
    "Material Design 2, Dark theme guidance (m2.material.io)",
    "The Open Graph protocol (ogp.me), created at Facebook",
    "Meta for Developers, Sharing best practices for images",
    "schema.org, launched 2 June 2011 by Bing, Google and Yahoo",
    "IETF RFC 6928, Increasing TCP's Initial Window",
    "IETF RFC 9110, HTTP Semantics (status codes 404 and 410)",
    "MDN Web Docs (responsive images, viewport meta tag, stacking context, passive listeners, visited link privacy)"
  ],
  "entries": [
    {
      "n": 791,
      "title": "Mobile-first",
      "aka": [
        "Mobile first design"
      ],
      "oneLine": "Design the small screen first, then add for bigger ones, instead of trimming a desktop layout down.",
      "demo": {
        "caption": "Same content at phone width. Left, the wide layout squeezed and the booking button below the fold; right, ranked to fit.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Desktop layout trimmed down</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 158\"><rect class=\"s-mute\" x=\"6\" y=\"6\" width=\"84\" height=\"146\" rx=\"4\"/><rect class=\"f-mute\" x=\"12\" y=\"12\" width=\"22\" height=\"5\"/><rect class=\"f-mute\" x=\"12\" y=\"22\" width=\"16\" height=\"4\"/><rect class=\"f-mute\" x=\"31\" y=\"22\" width=\"13\" height=\"4\"/><rect class=\"f-mute\" x=\"47\" y=\"22\" width=\"18\" height=\"4\"/><rect class=\"f-mute\" x=\"68\" y=\"22\" width=\"16\" height=\"4\"/><rect class=\"f-mute\" x=\"12\" y=\"30\" width=\"14\" height=\"4\"/><rect class=\"f-mute\" x=\"29\" y=\"30\" width=\"19\" height=\"4\"/><rect class=\"s-mute\" x=\"12\" y=\"40\" width=\"22\" height=\"52\"/><rect class=\"s-mute\" x=\"37\" y=\"40\" width=\"22\" height=\"52\"/><rect class=\"s-mute\" x=\"62\" y=\"40\" width=\"22\" height=\"52\"/><rect class=\"f-mute\" x=\"16\" y=\"46\" width=\"14\" height=\"3\"/><rect class=\"f-mute\" x=\"41\" y=\"46\" width=\"14\" height=\"3\"/><rect class=\"f-mute\" x=\"66\" y=\"46\" width=\"14\" height=\"3\"/><rect class=\"f-mute\" x=\"12\" y=\"98\" width=\"72\" height=\"9\"/><rect class=\"f-mute\" x=\"12\" y=\"112\" width=\"72\" height=\"9\"/><path class=\"s-accent\" stroke-dasharray=\"4 3\" d=\"M2 116 H94\"/><text class=\"t\" x=\"98\" y=\"119\">FOLD</text><rect class=\"f-accent\" x=\"12\" y=\"128\" width=\"46\" height=\"12\"/><path class=\"s-mute\" d=\"M58 134 H94\"/><text class=\"t\" x=\"98\" y=\"131\">BOOK IS</text><text class=\"t\" x=\"98\" y=\"143\">BELOW FOLD</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Ranked at narrow width first</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 158\"><rect class=\"s-mute\" x=\"6\" y=\"6\" width=\"84\" height=\"146\" rx=\"4\"/><rect class=\"f-mute\" x=\"12\" y=\"12\" width=\"22\" height=\"5\"/><rect class=\"s-mute\" x=\"70\" y=\"11\" width=\"14\" height=\"7\"/><rect class=\"f\" x=\"12\" y=\"26\" width=\"66\" height=\"8\"/><rect class=\"f\" x=\"12\" y=\"38\" width=\"48\" height=\"8\"/><rect class=\"f-accent\" x=\"12\" y=\"54\" width=\"46\" height=\"12\"/><path class=\"s-mute\" d=\"M58 60 H94\"/><text class=\"t\" x=\"98\" y=\"57\">BOOK IS</text><text class=\"t\" x=\"98\" y=\"69\">IN VIEW</text><rect class=\"s-mute\" x=\"12\" y=\"74\" width=\"72\" height=\"32\"/><rect class=\"f-mute\" x=\"12\" y=\"112\" width=\"72\" height=\"9\"/><path class=\"s-accent\" stroke-dasharray=\"4 3\" d=\"M2 116 H94\"/><text class=\"t\" x=\"98\" y=\"119\">FOLD</text><rect class=\"f-mute\" x=\"12\" y=\"126\" width=\"72\" height=\"9\"/><rect class=\"f-mute\" x=\"12\" y=\"140\" width=\"72\" height=\"9\"/></svg></div></div></div>"
      },
      "what": "Luke Wroblewski's argument is that you begin the design at the smallest, most constrained screen and work outwards. A narrow screen only holds a few things at once, so it forces you to rank content and actions before you draw anything. Whatever survives that ranking is what the page is for. Wider screens then get more room for the same content, not extra content that the phone never sees.",
      "why": "A narrow screen is an honest editor. It exposes the sections nobody could justify and stops a design leaning on width to disguise weak hierarchy. It also means the constrained version gets designed deliberately rather than reverse-engineered from a desktop comp at the last minute.",
      "how": [
        "Rank the page as a single ordered list before you open a layout tool. That order is your small-screen design.",
        "Write the small-screen CSS as the base styles and use min-width queries to add, so the default rules are the simplest ones.",
        "Sign off the narrow layout with the client before anyone draws a wide one.",
        "Check that the small screen carries the same information as the wide one. More space is enhancement; less content is loss."
      ],
      "example": "Open a page you have built at 360 pixels wide with no zoom. If it only makes sense once you widen the window, it was not designed mobile-first, whatever order the CSS is written in.",
      "numbers": "",
      "pitfall": "Teams announce mobile-first, then approve a desktop comp first anyway, so the phone version is a squeeze rather than a design. The second failure is treating a small screen as permission to delete the content people actually came for.",
      "source": "Luke Wroblewski, Mobile First (A Book Apart, October 2011), developing a short November 2009 post on lukew.com.",
      "verify": {
        "status": "verified",
        "note": "Book publisher and October 2011 date checked at lukew.com/resources/mobile_first.asp. The originating post was read directly this session: lukew.com/ff/entry.asp?933, dated 3 November 2009, giving three reasons as mobile is exploding, mobile forces you to focus, and mobile extends your capabilities. Note the third reason is about device capabilities such as GPS and multi-touch, not about editing."
      },
      "belongs": {
        "verdict": "core",
        "why": "A sequencing rule that changes what gets designed and in what order, not just how it is coded."
      },
      "related": [
        792,
        793,
        810
      ]
    },
    {
      "n": 792,
      "title": "Content-out breakpoints",
      "aka": [
        "Content-based breakpoints",
        "Design in the breakpoints"
      ],
      "oneLine": "Put breakpoints where your content stops working, not at the widths of popular phones.",
      "demo": {
        "caption": "Both windows are 700 pixels wide. The nav ran out of room at 690, so that is where the breakpoint belongs.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Breakpoint at 768, a device width</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 138\"><text class=\"t\" x=\"6\" y=\"12\">WINDOW AT 700 PX</text><rect class=\"s-mute\" x=\"6\" y=\"18\" width=\"158\" height=\"46\"/><rect class=\"f\" x=\"12\" y=\"30\" width=\"20\" height=\"6\"/><rect class=\"f-mute\" x=\"40\" y=\"31\" width=\"22\" height=\"4\"/><rect class=\"f-mute\" x=\"66\" y=\"31\" width=\"26\" height=\"4\"/><rect class=\"f-mute\" x=\"96\" y=\"31\" width=\"20\" height=\"4\"/><rect class=\"f-mute\" x=\"120\" y=\"31\" width=\"28\" height=\"4\"/><rect class=\"f-mute\" x=\"152\" y=\"31\" width=\"26\" height=\"4\"/><path class=\"s-accent\" d=\"M164 24 V44\"/><text class=\"t\" x=\"96\" y=\"56\">NAV OVERFLOWS</text><path class=\"s-mute\" d=\"M6 96 H164 M6 92 V100 M164 92 V100\"/><text class=\"t\" x=\"6\" y=\"110\">600</text><text class=\"t\" x=\"164\" y=\"110\" text-anchor=\"end\">900 PX</text><rect class=\"f-mute\" x=\"53\" y=\"93\" width=\"42\" height=\"6\"/><path class=\"s-accent\" d=\"M53 84 V104\"/><text class=\"t\" x=\"53\" y=\"80\" text-anchor=\"middle\">690</text><path class=\"s\" d=\"M95 84 V104\"/><text class=\"t\" x=\"95\" y=\"80\" text-anchor=\"middle\">768</text><text class=\"t\" x=\"6\" y=\"124\">CONTENT BREAKS AT 690</text><text class=\"t\" x=\"6\" y=\"136\">78 PX OF BROKEN PAGE</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Breakpoint at 690, where it broke</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 138\"><text class=\"t\" x=\"6\" y=\"12\">WINDOW AT 700 PX</text><rect class=\"s-mute\" x=\"6\" y=\"18\" width=\"158\" height=\"46\"/><rect class=\"f\" x=\"12\" y=\"30\" width=\"20\" height=\"6\"/><rect class=\"s-mute\" x=\"142\" y=\"28\" width=\"16\" height=\"10\"/><path class=\"s-mute\" d=\"M145 31 H155 M145 33 H155 M145 35 H155\"/><text class=\"t\" x=\"12\" y=\"56\">NAV FITS</text><path class=\"s-mute\" d=\"M6 96 H164 M6 92 V100 M164 92 V100\"/><text class=\"t\" x=\"6\" y=\"110\">600</text><text class=\"t\" x=\"164\" y=\"110\" text-anchor=\"end\">900 PX</text><path class=\"s-accent\" d=\"M53 84 V104\"/><text class=\"t\" x=\"53\" y=\"80\" text-anchor=\"middle\">690</text><text class=\"t\" x=\"6\" y=\"124\">BREAKPOINT MOVED TO 690</text><text class=\"t\" x=\"6\" y=\"136\">NO BROKEN BAND</text></svg></div></div></div>"
      },
      "what": "A breakpoint is the width at which your CSS changes the layout. Content-out means you find those widths by widening the browser until the design looks wrong, and putting a breakpoint there. The alternative, device-based breakpoints, picks round numbers taken from whichever handsets were selling that year. Those numbers go stale and they have nothing to do with your line lengths, your card widths or your navigation.",
      "why": "Breakpoints chosen from content stay correct when new devices appear, because they describe your design rather than someone's hardware. You also tend to need fewer of them, which means less CSS and fewer states to test.",
      "how": [
        "Drag the browser window slowly from narrow to wide and note every width where something breaks: a headline wraps badly, a card gets too wide to scan, a nav runs out of room.",
        "Set a breakpoint at each of those widths and nowhere else.",
        "Use em or rem rather than pixels in media queries so the breakpoint moves if the reader has enlarged their default text size.",
        "Give each breakpoint a reason in a comment, so the next person knows why it exists and when it can go."
      ],
      "example": "A three-column card grid that becomes unreadable somewhere around a card width of 220 pixels tells you where its breakpoint is. That number belongs to your card, not to any phone.",
      "numbers": "",
      "pitfall": "Copying a framework's default breakpoints, which were chosen to make that framework's grid demo look tidy. They almost never coincide with the widths at which your own content fails.",
      "source": "Stephen Hay, Responsive Design Workflow, talk at BDConf, Orlando, April 2012, as recorded by Brad Frost (bradfrost.com, 17 April 2012), where the line is quoted as: 'Start with the small screen first, then expand until it looks like shit. Time for a breakpoint!'; Stephen Hay, Responsive Design Workflow (New Riders, 2013)",
      "verify": {
        "status": "adjusted",
        "note": "Traced this session to Brad Frost's write-up of Stephen Hay's Responsive Design Workflow talk at BDConf in Orlando, posted 17 April 2012, which quotes the line as Hay's. That is the earliest contemporaneous record found, so the status moves from unverified to adjusted. Hay's book of the same name was not checked for the wording, so the talk write-up stands as the source."
      },
      "belongs": {
        "verdict": "core",
        "why": "It decides where a responsive design changes shape, which is a layout judgement rather than a coding detail."
      },
      "related": [
        791,
        793,
        794
      ]
    },
    {
      "n": 793,
      "title": "Fluid and intrinsic layout",
      "aka": [
        "Intrinsic web design",
        "Fluid grids"
      ],
      "oneLine": "Let content and available space size the layout, so it adapts without waiting for a breakpoint.",
      "demo": {
        "caption": "Four identical cards. Fixed columns keep three across and crush the labels; auto-fit re-flows to the width it has.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">repeat(3, 1fr)</span><div class=\"db-stage db-stage--tight\"><div style=\"display:grid;grid-template-columns:repeat(3,1fr);gap:6px\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">IMPLANT CONSULTATION</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">TEETH WHITENING</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">HYGIENIST VISIT</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">EMERGENCY APPOINTMENT</span><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">repeat(auto-fit, minmax(8rem, 1fr))</span><div class=\"db-stage db-stage--tight\"><div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(8rem,1fr));gap:6px\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">IMPLANT CONSULTATION</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">TEETH WHITENING</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">HYGIENIST VISIT</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">EMERGENCY APPOINTMENT</span><div class=\"db-lines\"><i></i><i></i></div></div></div></div></div></div></div>"
      },
      "what": "Fluid layout means sizing in percentages and fractions rather than fixed pixels, which Ethan Marcotte named as one of the three ingredients of responsive web design in 2010. Intrinsic web design is Jen Simmons's 2018 term for what became possible once CSS Grid, Flexbox, min-content and max-content sizing and multi-column arrived together. Different parts of a layout can now flex at different moments: one column holds still while another collapses. Media queries become a tool you reach for occasionally rather than the mechanism the whole design hangs on.",
      "why": "A layout that responds continuously has no ugly widths between breakpoints, because there are no gaps to fall into. It also survives content you did not plan for, which is what actually happens once a client starts editing.",
      "how": [
        "Reach for grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)) before you reach for a media query.",
        "Use clamp() for type and spacing so they scale between a sensible floor and ceiling instead of jumping.",
        "Set max-width on text containers in ch or rem so the measure stays readable at any window width.",
        "Test with the real content at its longest and shortest, not with placeholder text of a convenient length."
      ],
      "example": "Jen Simmons's labs.jensimmons.com carries a 2018 Intrinsic Design set that builds the same page six ways, from HTML flow alone through fluid, fixed and responsive to intrinsic. Stepping through them in order is the clearest demonstration of what changed.",
      "numbers": "",
      "pitfall": "Fluid sizing applied to everything, including things that should be fixed, gives you 40-character lines on a phone and 160-character lines on a monitor. Fluid needs limits or it is just uncontrolled.",
      "source": "Ethan Marcotte, Responsive Web Design (A List Apart, 25 May 2010) for fluid grids; Jen Simmons, An Event Apart Seattle 2018, for intrinsic web design.",
      "verify": {
        "status": "verified",
        "note": "Marcotte's article checked directly on alistapart.com: date 25 May 2010, three ingredients named as fluid grids, flexible images and media queries. Simmons's term is confirmed by her own announcement, x.com/jensimmons/status/980980521848127488, posted 3 April 2018: 'I just introduced Intrinsic Web Design at An Event Apart Seattle', linking her talk Everything You Know About Web Design Just Changed. The six-example Intrinsic Design set was seen on labs.jensimmons.com this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the current default model for how a web layout behaves, and it changes how you draw a design rather than only how you build it."
      },
      "related": [
        792,
        794,
        810
      ]
    },
    {
      "n": 794,
      "title": "Container queries",
      "aka": [
        "Element queries"
      ],
      "oneLine": "A component styles itself from the width of its own container rather than the width of the window.",
      "demo": {
        "caption": "Same page width on both sides. Only the right-hand sidebar card responds to the width of its own box.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Media query: page width only</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--top db-row--nowrap db-row--tight\"><div style=\"width:78px;flex:none\"><span class=\"db-note\">SIDEBAR</span><div class=\"db-card\"><div class=\"db-row db-row--top db-row--nowrap db-row--tight\"><span class=\"db-sq db-sq--lg\"></span><div class=\"db-lines db-fill\"><i></i><i></i><i></i></div></div></div></div><div class=\"db-fill\"><span class=\"db-note\">MAIN COLUMN</span><div class=\"db-card\"><div class=\"db-row db-row--top db-row--nowrap db-row--tight\"><span class=\"db-sq db-sq--lg\"></span><div class=\"db-lines db-fill\"><i></i><i></i><i></i></div></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Container query: its own box</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--top db-row--nowrap db-row--tight\"><div style=\"width:78px;flex:none\"><span class=\"db-note\">SIDEBAR</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-sq db-sq--lg\"></span><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div><div class=\"db-fill\"><span class=\"db-note\">MAIN COLUMN</span><div class=\"db-card\"><div class=\"db-row db-row--top db-row--nowrap db-row--tight\"><span class=\"db-sq db-sq--lg\"></span><div class=\"db-lines db-fill\"><i></i><i></i><i></i></div></div></div></div></div></div></div></div>"
      },
      "what": "A media query asks how wide the viewport is. A container query asks how wide the element's containing box is. You mark an ancestor as a query container with container-type, then write @container rules against it. There are matching length units: cqw and cqh are 1 per cent of the container's width and height, cqi and cqb 1 per cent of its inline and block size, and cqmin and cqmax 1 per cent of whichever of those two is smaller or larger. Where no eligible container exists they fall back to the small viewport unit for that axis.",
      "why": "It makes a component genuinely portable. The same card can sit in a narrow sidebar and a wide main column and pick the right layout in both, without the page having to tell it where it is. That is what design systems always wanted and never had.",
      "how": [
        "Use container-type: inline-size as your default. It queries width only and does not require the container's height to be known.",
        "Name containers with container-name when a component might be nested inside another query container.",
        "Remember an element cannot query itself. Put container-type on the wrapper and the @container rules on its children.",
        "Write component breakpoints in the component's own file, not in a global stylesheet."
      ],
      "example": "A product card that shows a stacked image-over-text layout below about 400 pixels of container width, and a side-by-side layout above it, works correctly in a sidebar, a grid and a full-width row with no page-level code.",
      "numbers": "",
      "pitfall": "container-type: size applies size containment on both axes, which means the container stops taking its height from its content and collapses. Reach for inline-size unless you specifically need block-axis queries.",
      "source": "W3C CSS Containment Module Level 3; container query units defined alongside it.",
      "verify": {
        "status": "verified",
        "note": "container-type values (size, inline-size, normal) checked on MDN's container queries guide. Each cq unit definition and the sentence 'If no eligible container is available for the query, the container query length unit defaults to the small viewport unit for that axis' were read directly from MDN's length page this session. MDN attributes the feature to the CSS Containment module."
      },
      "belongs": {
        "verdict": "core",
        "why": "It changes the unit of responsive thinking from page to component, which is a design-system decision as much as a technical one."
      },
      "related": [
        793,
        788,
        792
      ]
    },
    {
      "n": 795,
      "title": "Progressive enhancement",
      "aka": [
        "PE"
      ],
      "oneLine": "Build a working page from semantic HTML first, then add CSS and JavaScript as optional layers.",
      "demo": {
        "caption": "Both pages with scripting blocked, and the HTML each one sent. Only the right-hand page still lets someone book.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Rendered by script only</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">HTML SENT</span><span class=\"db-input\">&lt;div id=\"root\"&gt;&lt;/div&gt;</span><span class=\"db-note\">SCRIPT BLOCKED</span><div class=\"db-ui\"><span class=\"db-note\">NOTHING RENDERS</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Script is the top layer</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">HTML SENT</span><span class=\"db-input\">&lt;form action=\"/book\" method=\"post\"&gt;</span><span class=\"db-note\">SCRIPT BLOCKED</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div><span class=\"db-label\">Appointment date</span><span class=\"db-input\">14 September</span></div><div><span class=\"db-btn db-btn--sm\">Book</span></div></div></div></div></div></div></div>"
      },
      "what": "Steven Champeon set this out in 2003. You start with content marked up in meaningful HTML, which works for every browser, every assistive technology and every crawler. Presentation goes on top as CSS. Behaviour goes on top of that as JavaScript. Each layer improves the experience for the people whose software can run it, and its absence degrades the page rather than breaking it. A form still submits, a link still navigates, text is still readable.",
      "why": "It gives you a floor you can promise. Whatever fails, and something always fails, the reader can still do the main task. It also happens to produce faster first renders, better accessibility and better search indexing, because all three depend on the same semantic base.",
      "how": [
        "Make every primary action work as a plain link or form submit before you attach a script to it.",
        "Never render body content only through JavaScript unless you also send it in the HTML.",
        "Check the page with CSS disabled: the reading order should still make sense.",
        "Treat scripted enhancements as opt-in, guarded by feature detection rather than browser sniffing."
      ],
      "example": "A booking form whose submit button posts to a server endpoint, with JavaScript layered on to validate inline and update without a reload. Turn the script off and the booking still goes through.",
      "numbers": "",
      "pitfall": "Building the JavaScript version first and promising to add a no-JS fallback later. The fallback never gets built, and by then the markup is too far gone to retrofit.",
      "source": "Steven Champeon, Progressive Enhancement and the Future of Web Design, Webmonkey (2003); Champeon and Nick Finck presented the related talk Inclusive Web Design for the Future at SXSW in 2003.",
      "verify": {
        "status": "verified",
        "note": "Webmonkey itself is gone, but the primary text is not. The full article was read this session at hesketh.com/publications/progressive_enhancement_and_the_future_of_web_design.html, bylined Steve Champeon, dated 21 March 2003, and opening with his account of the South by Southwest Interactive presentation he gave with Nick Finck. Wikipedia's Progressive enhancement article cites the same Webmonkey piece with that date and dates the SXSWi presentation to 11 March 2003."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a design stance about what you guarantee to whom, and it decides the order in which a page gets built."
      },
      "related": [
        796,
        816,
        819
      ]
    },
    {
      "n": 796,
      "title": "Graceful degradation",
      "aka": [
        "Fault tolerance"
      ],
      "oneLine": "Build the full experience, then make sure it fails down to something usable when parts are unavailable.",
      "demo": {
        "caption": "The same blocked map embed on both sides. Only the right-hand page still gives an address and a way out.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No fallback behind the embed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">MAP EMBED BLOCKED</span><div class=\"db-block db-block--outline\" style=\"height:94px\"></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">The fallback you designed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">MAP EMBED BLOCKED</span><svg class=\"db-svg\" viewBox=\"0 0 160 56\"><rect class=\"s-mute\" x=\"0.5\" y=\"0.5\" width=\"159\" height=\"55\"/><path class=\"s-mute\" d=\"M0 34 H160 M52 0 V56 M110 0 V56 M0 14 H52 M110 44 H160\"/><circle class=\"f-accent\" cx=\"80\" cy=\"22\" r=\"3.5\"/><path class=\"f-accent\" d=\"M80 32 L76 25 H84 Z\"/></svg><span class=\"db-note\">12 HIGH STREET, LEEDS</span><div><span class=\"db-btn db-btn--sm db-btn--ghost\">Open in Maps</span></div></div></div></div></div>"
      },
      "what": "Graceful degradation starts from the finished, feature-rich version and asks what happens when a piece is missing. No web font, no JavaScript, no network, an unsupported CSS property, a blocked third-party embed. In each case the page should lose that feature and keep working, rather than showing a blank area or a broken control. It is the mirror image of progressive enhancement: same destination, opposite direction of travel.",
      "why": "Every site loses something in production. Fonts time out, ad blockers remove embeds, corporate proxies strip scripts. Designing the degraded states means those readers get a slightly plainer page instead of a dead one, and you find out what your design actually depends on.",
      "how": [
        "List every external dependency on the page and sketch what the layout looks like without each one.",
        "Give every embed a visible fallback with a link out, not an empty box.",
        "Use @supports so unsupported CSS falls back to a simpler layout you have chosen, rather than one you have not.",
        "Set a system-font fallback stack that is close enough in metrics that losing the web font does not reflow the page."
      ],
      "example": "A page whose map embed is blocked by a privacy extension should show the address, a static image and a link to open directions, not a grey rectangle.",
      "numbers": "",
      "pitfall": "Used as cover for shipping a knowingly broken experience to older or restricted browsers and calling it degraded. Degradation is a design you choose, not an accident you accept.",
      "source": "Origin unclear for the web-specific sense. Standard vocabulary in web design as the counterpart to Champeon's progressive enhancement.",
      "verify": {
        "status": "unverified",
        "note": "I could not find a primary source that coins graceful degradation for web design. It appears throughout the literature only as the contrast case to progressive enhancement, and the phrase is older than the web in engineering usage, which I also did not verify to a primary citation this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "Deciding what the page looks like when a dependency fails is a design decision that nobody else will make for you."
      },
      "related": [
        795,
        804,
        819
      ]
    },
    {
      "n": 797,
      "title": "Performance as a design constraint",
      "aka": [
        "Performance budget"
      ],
      "oneLine": "Set an agreed speed and weight limit up front, and treat exceeding it as a design problem.",
      "demo": {
        "caption": "One page against a 170 KB limit. A third font weight breaks it; the hero pays for it in the bottom row.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 160\"><text class=\"t\" x=\"99\" y=\"16\" text-anchor=\"middle\">HTML/CSS</text><text class=\"t\" x=\"150\" y=\"16\" text-anchor=\"middle\">FONTS</text><text class=\"t\" x=\"226\" y=\"16\" text-anchor=\"middle\">IMAGE</text><text class=\"t\" x=\"283\" y=\"16\" text-anchor=\"middle\">JS</text><rect class=\"f-mute\" x=\"78\" y=\"26\" width=\"15.96\" height=\"20\"/><rect class=\"f\" x=\"93.96\" y=\"26\" width=\"26.6\" height=\"20\"/><rect class=\"f-accent\" x=\"120.56\" y=\"26\" width=\"58.52\" height=\"20\"/><rect class=\"f-mute\" x=\"179.08\" y=\"26\" width=\"93.1\" height=\"20\"/><rect class=\"f\" x=\"272.18\" y=\"26\" width=\"21.28\" height=\"20\"/><text class=\"t\" x=\"2\" y=\"40\">TWO WEIGHTS</text><rect class=\"f-mute\" x=\"78\" y=\"68\" width=\"15.96\" height=\"20\"/><rect class=\"f\" x=\"93.96\" y=\"68\" width=\"26.6\" height=\"20\"/><rect class=\"f-accent\" x=\"120.56\" y=\"68\" width=\"87.78\" height=\"20\"/><rect class=\"f-mute\" x=\"208.34\" y=\"68\" width=\"93.1\" height=\"20\"/><rect class=\"f\" x=\"301.44\" y=\"68\" width=\"21.28\" height=\"20\"/><text class=\"t\" x=\"2\" y=\"82\">THIRD ADDED</text><text class=\"t\" x=\"300\" y=\"62\" text-anchor=\"end\">OVER BY 14 KB</text><rect class=\"f-mute\" x=\"78\" y=\"110\" width=\"15.96\" height=\"20\"/><rect class=\"f\" x=\"93.96\" y=\"110\" width=\"26.6\" height=\"20\"/><rect class=\"f-accent\" x=\"120.56\" y=\"110\" width=\"87.78\" height=\"20\"/><rect class=\"f-mute\" x=\"208.34\" y=\"110\" width=\"63.84\" height=\"20\"/><rect class=\"f\" x=\"272.18\" y=\"110\" width=\"21.28\" height=\"20\"/><text class=\"t\" x=\"2\" y=\"124\">HERO CUT</text><path class=\"s-accent\" stroke-dasharray=\"4 3\" d=\"M304 20 V138\"/><text class=\"t\" x=\"304\" y=\"150\" text-anchor=\"middle\">170 KB LIMIT</text></svg></div>"
      },
      "what": "Tim Kadlec's 2013 article gave the practice its name. A performance budget is a stated limit on the things that make a page slow: total weight, request count, the size of a category such as images or fonts, or a timing target. Once it exists, adding a carousel or a second typeface has a visible cost, and the trade gets made openly instead of discovered after launch.",
      "why": "Without a budget, speed is nobody's job and everything gets added. With one, the designer decides what the site spends its weight on, which is where the decision belongs. It also turns an argument about taste into an argument about numbers.",
      "how": [
        "Agree the budget at the start and put it in the brief, not in a retrospective.",
        "Budget by category so trades are concrete: this much for images, this much for fonts, this much for scripts.",
        "Wire it into the build so it fails loudly, rather than checking by hand once a quarter.",
        "When something must break the budget, remove something else rather than raising the number."
      ],
      "example": "Deciding that a homepage gets one web font family in two weights, and that a third weight has to displace one of the first two, is a performance budget doing its job.",
      "numbers": "RAIL: respond to input within 100 ms; produce each animation frame in 10 ms or less against a 16 ms hardware frame; do deferred work in 50 ms chunks; load and be interactive in 5 seconds or less on mid-range mobile over slow 3G. web.dev's worked example budget: under 170 KB of compressed critical-path resources. Nielsen's limits: 0.1 s feels instant, 1 s keeps thought unbroken, 10 s is the limit of attention.",
      "pitfall": "Setting the budget from the current site's numbers, which only ratifies what you already ship. Set it from what the design needs to feel fast, then work back.",
      "source": "Tim Kadlec, Setting a performance budget (27 January 2013); Google's RAIL model on web.dev; Jakob Nielsen, Response Times: The 3 Important Limits, after Miller (1968) and Card, Robertson and Mackinlay (1991).",
      "verify": {
        "status": "verified",
        "note": "RAIL figures read directly from web.dev/articles/rail. The 170 KB critical-path figure read from web.dev/articles/performance-budgets-101, which states it as 'under 170 KB of critical-path resources (compressed/minified)' on a 3G assumption. Nielsen's three limits and his citations to Miller 1968 and Card et al 1991 read from nngroup.com. Kadlec's article is dated 27 January 2013 on his own tag index and is still live at timkadlec.com/remembers/2013/01/setting-a-performance-budget/, checked this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "It puts the cost of a design decision in front of the person making it, which is what turns speed into a design variable."
      },
      "related": [
        798,
        801,
        802
      ]
    },
    {
      "n": 798,
      "title": "Largest Contentful Paint",
      "aka": [
        "LCP"
      ],
      "oneLine": "How long until the biggest image or block of text in the first screenful has actually rendered.",
      "demo": {
        "caption": "Three frames from one load. LCP is the frame where the hero paints, and the ruler shows which band it lands in.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 150\"><rect class=\"s-mute\" x=\"24\" y=\"16\" width=\"44\" height=\"50\"/><rect class=\"f-mute\" x=\"28\" y=\"20\" width=\"14\" height=\"3\"/><rect class=\"s-mute\" x=\"76\" y=\"16\" width=\"44\" height=\"50\"/><rect class=\"f-mute\" x=\"80\" y=\"20\" width=\"14\" height=\"3\"/><rect class=\"f-mute\" x=\"80\" y=\"30\" width=\"36\" height=\"3\"/><rect class=\"f-mute\" x=\"80\" y=\"36\" width=\"30\" height=\"3\"/><rect class=\"f-mute\" x=\"80\" y=\"42\" width=\"33\" height=\"3\"/><rect class=\"s-accent\" x=\"134\" y=\"16\" width=\"44\" height=\"50\"/><rect class=\"f-mute\" x=\"138\" y=\"20\" width=\"14\" height=\"3\"/><rect class=\"f-accent\" x=\"138\" y=\"27\" width=\"36\" height=\"24\"/><rect class=\"f-mute\" x=\"138\" y=\"55\" width=\"30\" height=\"3\"/><rect class=\"f-mute\" x=\"138\" y=\"60\" width=\"24\" height=\"3\"/><text class=\"t\" x=\"156\" y=\"12\" text-anchor=\"middle\">LCP: HERO PAINTS</text><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M46 66 V92 M98 66 V92\"/><path class=\"s-accent\" stroke-dasharray=\"3 3\" d=\"M156 66 V130\"/><path class=\"s-mute\" d=\"M20 92 H344 M20 92 V97 M84.8 92 V97 M149.6 92 V97 M214.4 92 V97 M279.2 92 V97 M344 92 V97\"/><text class=\"t\" x=\"20\" y=\"107\" text-anchor=\"middle\">0</text><text class=\"t\" x=\"84.8\" y=\"107\" text-anchor=\"middle\">1</text><text class=\"t\" x=\"149.6\" y=\"107\" text-anchor=\"middle\">2</text><text class=\"t\" x=\"214.4\" y=\"107\" text-anchor=\"middle\">3</text><text class=\"t\" x=\"279.2\" y=\"107\" text-anchor=\"middle\">4</text><text class=\"t\" x=\"344\" y=\"107\" text-anchor=\"end\">5 S</text><text class=\"t\" x=\"182\" y=\"120\" text-anchor=\"middle\">2.5 S</text><text class=\"t\" x=\"279\" y=\"120\" text-anchor=\"middle\">4.0 S</text><path class=\"s-mute\" d=\"M20 126 H344 M20 122 V130 M182 122 V130 M279 122 V130 M344 122 V130\"/><text class=\"t\" x=\"101\" y=\"142\" text-anchor=\"middle\">GOOD</text><text class=\"t\" x=\"230.5\" y=\"142\" text-anchor=\"middle\">NEEDS WORK</text><text class=\"t\" x=\"311.5\" y=\"142\" text-anchor=\"middle\">POOR</text></svg></div>"
      },
      "what": "LCP measures the moment the largest content element visible in the viewport finishes rendering. Candidates are img elements, image elements inside svg, the poster or first frame of a video, elements with a CSS background image set via url(), and block-level elements containing text. The browser discards obvious non-content: fully transparent elements, elements covering the whole viewport, and low-entropy placeholder images. It is the metric that tries to answer the reader's actual question, which is when the page looked ready.",
      "why": "The LCP element is nearly always a design decision. It is the hero image you specified, or the headline you set. Knowing which element it is tells you exactly what to optimise, and stops the team optimising things nobody sees.",
      "how": [
        "Find out which element is your LCP before optimising anything; browser dev tools will name it.",
        "Never lazy-load the LCP image, and give it fetchpriority=\"high\".",
        "If the LCP element is text in a web font, make sure the font does not block that text from painting.",
        "Serve the hero at the size it will display, in a modern format, rather than a full-width original scaled down in CSS."
      ],
      "example": "On a typical practice or restaurant homepage the LCP element is the hero photograph, so the number is mostly a report on one file. Serving that file at display size in a modern format is the first thing to try, and on image-led pages it tends to be worth more than script work.",
      "numbers": "Good: 2.5 seconds or less. Needs improvement: between 2.5 and 4.0 seconds. Poor: greater than 4.0 seconds. Assessed at the 75th percentile of page loads, segmented into mobile and desktop.",
      "pitfall": "Optimising a lab score on a fast laptop while the field data, which is what Google reports, comes from mid-range phones on real networks. The two can disagree by seconds.",
      "source": "Google Chrome team, Largest Contentful Paint documentation on web.dev; part of Core Web Vitals.",
      "verify": {
        "status": "verified",
        "note": "Thresholds, the 75th percentile rule and the candidate element list read directly from web.dev/articles/lcp and web.dev/articles/vitals in August 2026."
      },
      "belongs": {
        "verdict": "core",
        "why": "It measures the visual promise a designer made with the hero, and the fix for a bad score is usually a design change."
      },
      "related": [
        797,
        801,
        803
      ]
    },
    {
      "n": 799,
      "title": "Interaction to Next Paint",
      "aka": [
        "INP"
      ],
      "oneLine": "How long, at worst, between a tap or keypress and the screen visibly changing in response.",
      "demo": {
        "caption": "Left, where a 220 millisecond interaction spends its time. Right, eight interactions: the mean passes, the worst one is reported.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">One interaction, three phases</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 110\"><rect class=\"f-mute\" x=\"10\" y=\"40\" width=\"21.3\" height=\"16\"/><rect class=\"f\" x=\"31.3\" y=\"40\" width=\"64\" height=\"16\"/><rect class=\"f-mute\" x=\"95.3\" y=\"40\" width=\"32\" height=\"16\"/><path class=\"s-accent\" stroke-dasharray=\"4 3\" d=\"M116.7 30 V66\"/><text class=\"t\" x=\"116.7\" y=\"26\" text-anchor=\"middle\">200 MS LIMIT</text><text class=\"t\" x=\"20.6\" y=\"72\" text-anchor=\"middle\">DELAY</text><text class=\"t\" x=\"63.3\" y=\"86\" text-anchor=\"middle\">PROCESSING</text><text class=\"t\" x=\"111.3\" y=\"72\" text-anchor=\"middle\">PAINT</text><text class=\"t\" x=\"10\" y=\"100\">220 MS IN TOTAL: OVER</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">One page, eight interactions</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 110\"><rect class=\"f-mute\" x=\"20\" y=\"75.2\" width=\"12\" height=\"12.8\"/><rect class=\"f-mute\" x=\"38\" y=\"71.7\" width=\"12\" height=\"16.3\"/><rect class=\"f-mute\" x=\"56\" y=\"74\" width=\"12\" height=\"14\"/><rect class=\"f-mute\" x=\"74\" y=\"65.8\" width=\"12\" height=\"22.2\"/><rect class=\"f-accent\" x=\"92\" y=\"39\" width=\"12\" height=\"49\"/><rect class=\"f-mute\" x=\"110\" y=\"72.8\" width=\"12\" height=\"15.2\"/><rect class=\"f-mute\" x=\"128\" y=\"69.3\" width=\"12\" height=\"18.7\"/><rect class=\"f-mute\" x=\"146\" y=\"70.5\" width=\"12\" height=\"17.5\"/><path class=\"s-mute\" d=\"M12 88 H176\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M12 67.3 H176\"/><text class=\"t\" x=\"176\" y=\"64\" text-anchor=\"end\">MEAN 89 MS</text><path class=\"s-accent\" stroke-dasharray=\"4 3\" d=\"M12 41.3 H176\"/><text class=\"t\" x=\"176\" y=\"38\" text-anchor=\"end\">200 MS</text><text class=\"t\" x=\"98\" y=\"30\" text-anchor=\"middle\">INP</text><text class=\"t\" x=\"12\" y=\"102\">THE WORST ONE IS THE SCORE</text></svg></div></div></div>"
      },
      "what": "INP watches clicks, taps and key presses across the whole life of a page and reports the worst interaction latency, with outliers discarded. Each measured interaction has three parts: input delay before the handler runs, processing duration while the handlers execute, and presentation delay until the next frame is painted. It replaced First Input Delay, which only measured the delay before the first interaction's handler started and ignored everything after that.",
      "why": "It is the closest published number to the feeling of a sluggish interface. A page can score well on load metrics and still feel dead under the finger, and INP is what catches that. For a designer it also sets a hard limit on how much work a single control is allowed to trigger.",
      "how": [
        "Give every control an immediate visual acknowledgement, even if the real work takes longer.",
        "Do not do heavy work synchronously inside a click or input handler; yield to the browser so it can paint.",
        "Watch the interactions people repeat, such as typing in a filter or opening a menu, not just the first tap.",
        "Test on a mid-range Android device, because that is where the number moves."
      ],
      "example": "A filter that re-sorts a long product list on every keystroke will fail INP long before the page fails LCP, because the cost lands on the reader every time they type.",
      "numbers": "Good: 200 milliseconds or less. Needs improvement: between 200 and 500 milliseconds. Poor: above 500 milliseconds. Assessed at the 75th percentile. INP replaced First Input Delay as a Core Web Vital on 12 March 2024.",
      "pitfall": "Chasing the average interaction time. INP reports close to the worst one, so a single expensive control can sink a page that feels fine elsewhere.",
      "source": "Google Chrome team, Interaction to Next Paint documentation on web.dev.",
      "verify": {
        "status": "verified",
        "note": "Thresholds and the three-phase breakdown read from web.dev/articles/inp. The 12 March 2024 changeover date read from web.dev/blog/inp-cwv-march-12."
      },
      "belongs": {
        "verdict": "core",
        "why": "Responsiveness is felt, not read, and the amount of work a control triggers is set at design time."
      },
      "related": [
        797,
        806,
        808
      ]
    },
    {
      "n": 800,
      "title": "Cumulative Layout Shift",
      "aka": [
        "CLS"
      ],
      "oneLine": "A score for how much visible content jumps around unexpectedly while the page is loading and running.",
      "demo": {
        "caption": "web.dev's worked example: a block half the viewport tall drops a quarter of it, so 0.75 times 0.25 scores 0.1875.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 160\"><text class=\"t\" x=\"14\" y=\"16\">BEFORE</text><rect class=\"s-mute\" x=\"14\" y=\"22\" width=\"90\" height=\"110\"/><rect class=\"f-mute\" x=\"18\" y=\"26\" width=\"82\" height=\"51\"/><text class=\"t\" x=\"134\" y=\"16\">AFTER</text><rect class=\"s-mute\" x=\"134\" y=\"22\" width=\"90\" height=\"110\"/><rect class=\"f-mute\" x=\"138\" y=\"51.5\" width=\"82\" height=\"51\"/><text class=\"t\" x=\"254\" y=\"16\">IMPACT x DISTANCE</text><rect class=\"s-mute\" x=\"254\" y=\"22\" width=\"90\" height=\"110\"/><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"258\" y=\"26\" width=\"82\" height=\"51\"/><rect class=\"f-mute\" x=\"258\" y=\"51.5\" width=\"82\" height=\"51\"/><rect class=\"s-accent\" x=\"258\" y=\"26\" width=\"82\" height=\"76.5\"/><path class=\"s-accent\" d=\"M262 26 V102.5 M259 26 H265 M259 102.5 H265\"/><text class=\"t\" x=\"266\" y=\"116\">0.75</text><path class=\"s-accent\" d=\"M334 26 V51.5 M331 26 H337 M331 51.5 H337\"/><text class=\"t\" x=\"330\" y=\"42\" text-anchor=\"end\">0.25</text><text class=\"t\" x=\"180\" y=\"146\" text-anchor=\"middle\">IMPACT 0.75 x DISTANCE 0.25 = 0.1875</text><text class=\"t\" x=\"180\" y=\"157\" text-anchor=\"middle\">GOOD IS 0.1 OR LESS</text></svg></div>"
      },
      "what": "Each unexpected shift is scored as impact fraction multiplied by distance fraction. Impact fraction is the share of the viewport occupied by the elements that moved, across both frames. Distance fraction is the furthest any of them travelled, divided by the viewport's larger dimension. Shifts are grouped into session windows, where a window is a burst of shifts less than one second apart lasting at most five seconds, and CLS reports the largest such burst rather than the total. Shifts within 500 milliseconds of a user interaction are not counted, because those are expected.",
      "why": "Layout shift is the one performance metric readers complain about without being asked. It is why people tap the wrong button and lose their place mid-sentence. Nearly every cause is something a designer specified: an image without dimensions, a late-loading banner, a font swap that changes line heights.",
      "how": [
        "Give every image and video explicit width and height attributes, or an aspect-ratio in CSS, so the browser reserves the box before the file arrives.",
        "Reserve space for anything injected later: cookie bars, ads, embeds, notification strips.",
        "Do not insert content above existing content unless the reader asked for it.",
        "Match your fallback font's metrics to the web font, using size-adjust or the ascent and descent override descriptors."
      ],
      "example": "A news page where the headline shifts down as a leaderboard advert loads is the standard CLS failure, and it is the reason readers click adverts they did not intend to.",
      "numbers": "Good: 0.1 or less. Needs improvement: greater than 0.1 up to 0.25. Poor: greater than 0.25. Assessed at the 75th percentile. Session window: shifts less than 1 second apart, maximum window 5 seconds.",
      "pitfall": "Testing on a fast connection, where everything arrives before first paint and nothing shifts. Throttle the network or you will never see the problem your readers see.",
      "source": "Google Chrome team, Cumulative Layout Shift documentation on web.dev.",
      "verify": {
        "status": "verified",
        "note": "Thresholds, the impact-fraction and distance-fraction formula, and the session-window rule read directly from web.dev/articles/cls in August 2026. The 500 millisecond recent-input exclusion checked against MDN's LayoutShift.hadRecentInput page."
      },
      "belongs": {
        "verdict": "core",
        "why": "Almost every cause of layout shift is a design or content decision, and the fixes are layout fixes."
      },
      "related": [
        805,
        803,
        804
      ]
    },
    {
      "n": 801,
      "title": "Critical rendering path",
      "aka": [
        "CRP"
      ],
      "oneLine": "The sequence a browser must finish before it can paint anything, and what blocks it.",
      "demo": {
        "caption": "One load, laid out in time. The script stops HTML parsing, and the screen stays blank until both trees exist.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 150\"><text class=\"t\" x=\"2\" y=\"31\">HTML</text><rect class=\"f-mute\" x=\"80\" y=\"22\" width=\"52\" height=\"12\"/><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"132\" y=\"22\" width=\"64\" height=\"12\"/><rect class=\"f-mute\" x=\"196\" y=\"22\" width=\"40\" height=\"12\"/><text class=\"t\" x=\"134\" y=\"18\">PARSING STOPPED</text><text class=\"t\" x=\"2\" y=\"53\">CSS</text><rect class=\"f-mute\" x=\"80\" y=\"44\" width=\"90\" height=\"12\"/><text class=\"t\" x=\"174\" y=\"53\">CSSOM READY</text><text class=\"t\" x=\"2\" y=\"75\">SCRIPT</text><rect class=\"f-accent\" x=\"132\" y=\"66\" width=\"64\" height=\"12\"/><text class=\"t\" x=\"2\" y=\"97\">RENDER</text><text class=\"t\" x=\"232\" y=\"97\" text-anchor=\"end\">TREE, LAYOUT, PAINT</text><rect class=\"f\" x=\"236\" y=\"88\" width=\"44\" height=\"12\"/><text class=\"t\" x=\"2\" y=\"120\">SCREEN</text><rect class=\"s-mute\" x=\"80\" y=\"106\" width=\"200\" height=\"22\"/><text class=\"t\" x=\"180\" y=\"120\" text-anchor=\"middle\">BLANK</text><rect class=\"s-mute\" x=\"280\" y=\"106\" width=\"68\" height=\"22\"/><rect class=\"f-mute\" x=\"284\" y=\"110\" width=\"20\" height=\"3\"/><rect class=\"f-mute\" x=\"284\" y=\"116\" width=\"56\" height=\"3\"/><rect class=\"f-mute\" x=\"284\" y=\"121\" width=\"40\" height=\"3\"/><path class=\"s-accent\" stroke-dasharray=\"4 3\" d=\"M280 16 V132\"/><text class=\"t\" x=\"280\" y=\"144\" text-anchor=\"middle\">FIRST PAINT</text></svg></div>"
      },
      "what": "The browser parses HTML into the DOM, parses CSS into the CSSOM, combines the two into a render tree, works out geometry in layout, then paints pixels. Nothing appears until the CSSOM is complete, because the browser will not paint content it might have to restyle. A synchronous script tag stops HTML parsing until the script has downloaded and run. The critical rendering path is the shortest set of resources that must arrive before the first useful paint.",
      "why": "It explains why a page can be small and still look slow. For a designer the payoff is knowing which of your specifications are on the path and which are not: a stylesheet is, a web font used for body text effectively is, a footer illustration is not.",
      "how": [
        "Keep the CSS needed for the first screenful small, and load the rest without blocking.",
        "Add defer or async to scripts that do not need to run before first paint, which is nearly all of them.",
        "Avoid @import in CSS, which serialises one stylesheet download behind another.",
        "Preconnect to any third-party origin that serves something on the path, so DNS and TLS do not happen twice."
      ],
      "example": "A page that loads a 400 KB stylesheet containing every component in the design system will hold a blank screen until that file lands, even if the visible page uses a tenth of it.",
      "numbers": "",
      "pitfall": "Inlining so much critical CSS that the HTML itself becomes the bottleneck and cannot be cached between pages. There is a crossover point and it is worth measuring rather than guessing.",
      "source": "Ilya Grigorik, Critical Rendering Path, web.dev, 31 March 2014.",
      "verify": {
        "status": "verified",
        "note": "The byline Ilya Grigorik and the line 'Published: March 31, 2014' were read directly from web.dev/articles/critical-rendering-path this session. The DOM, CSSOM, render tree, layout and paint sequence is set out across that article's sub-pages."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "This is browser engineering rather than design, but it is the mechanism behind first impressions: it tells you which of your visual choices, particularly stylesheet size and body web fonts, delay the reader seeing anything."
      },
      "related": [
        797,
        798,
        804
      ]
    },
    {
      "n": 802,
      "title": "Above-the-fold weight budget",
      "aka": [
        "Critical-path resource budget",
        "First-screen budget"
      ],
      "oneLine": "Cap the bytes needed to render the first screenful, separately from the page's total weight.",
      "demo": {
        "caption": "Both pages weigh 480 KB in total. Only the first-screen figure tells them apart, and that is the one readers feel.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One total-page budget</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 168\"><rect class=\"s-mute\" x=\"8\" y=\"16\" width=\"154\" height=\"124\"/><rect class=\"s-mute\" x=\"12\" y=\"20\" width=\"146\" height=\"12\"/><text class=\"t\" x=\"16\" y=\"29\">HTML, CSS, FONT 20 KB</text><rect class=\"s\" x=\"12\" y=\"36\" width=\"146\" height=\"30\"/><text class=\"t\" x=\"16\" y=\"54\">HERO VIDEO 300 KB</text><path class=\"s-accent\" stroke-dasharray=\"4 3\" d=\"M4 70 H166\"/><text class=\"t\" x=\"166\" y=\"78\" text-anchor=\"end\">FOLD</text><rect class=\"s-mute\" x=\"12\" y=\"84\" width=\"146\" height=\"26\"/><text class=\"t\" x=\"16\" y=\"100\">BELOW THE FOLD 160 KB</text><text class=\"t\" x=\"4\" y=\"152\">FIRST SCREEN 320 KB</text><text class=\"t\" x=\"4\" y=\"164\">PAGE TOTAL 480 KB</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">First screen budgeted on its own</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 168\"><rect class=\"s-mute\" x=\"8\" y=\"16\" width=\"154\" height=\"124\"/><rect class=\"s-mute\" x=\"12\" y=\"20\" width=\"146\" height=\"12\"/><text class=\"t\" x=\"16\" y=\"29\">HTML, CSS, FONT 20 KB</text><rect class=\"s\" x=\"12\" y=\"36\" width=\"146\" height=\"14\"/><text class=\"t\" x=\"16\" y=\"46\">HERO STILL 60 KB</text><path class=\"s-accent\" stroke-dasharray=\"4 3\" d=\"M4 70 H166\"/><text class=\"t\" x=\"166\" y=\"78\" text-anchor=\"end\">FOLD</text><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"12\" y=\"84\" width=\"146\" height=\"22\"/><text class=\"t\" x=\"16\" y=\"98\">VIDEO AFTER PAINT 240 KB</text><rect class=\"s-mute\" x=\"12\" y=\"110\" width=\"146\" height=\"26\"/><text class=\"t\" x=\"16\" y=\"126\">BELOW THE FOLD 160 KB</text><text class=\"t\" x=\"4\" y=\"152\">FIRST SCREEN 80 KB</text><text class=\"t\" x=\"4\" y=\"164\">PAGE TOTAL 480 KB</text></svg></div></div></div>"
      },
      "what": "A whole-page budget lets you hide a heavy hero behind a light footer. Budgeting the first screenful separately stops that. Two published numbers anchor it. RFC 6928 raised TCP's initial congestion window to ten segments, capped at 14,600 bytes, which is roughly what a server can send before waiting for an acknowledgement, so an HTML document that fits inside it arrives in one round trip. web.dev's worked example budget puts critical-path resources under 170 KB compressed and minified, on the assumption of a 3G connection.",
      "why": "The first screenful is the only part most readers judge you on, and it is the part a designer has most control over. Giving it its own number turns 'the hero feels heavy' into a figure someone can check.",
      "how": [
        "Measure the bytes needed for the first viewport only: HTML, critical CSS, the hero image, any blocking font.",
        "Keep the HTML document itself small enough to arrive in the first round trip where you can.",
        "Count third-party tags in the first-screen budget, because the reader's browser certainly does.",
        "Re-measure every time the hero design changes, not once at launch."
      ],
      "example": "Trading a full-bleed video hero for a single well-compressed still, with the video loaded only after first paint, is a first-screen budget decision that a total-page budget would have let you avoid.",
      "numbers": "RFC 6928 initial window: min(10 x MSS, max(2 x MSS, 14600 bytes)). web.dev example critical-path budget: under 170 KB of critical-path resources, compressed and minified, on a 3G assumption.",
      "pitfall": "Treating 14 KB as a hard law for the whole page. It is the initial congestion window for one round trip, nothing more, and plenty of fast pages exceed it.",
      "source": "IETF RFC 6928, Increasing TCP's Initial Window (2013); Google, Performance budgets 101, web.dev. There is no published standard using the phrase 'above-the-fold weight budget'.",
      "verify": {
        "status": "adjusted",
        "note": "The master list name is not a published term, so the entry has been kept and the real sources behind it named. The 14,600 byte figure was read directly from RFC 6928 on datatracker.ietf.org, which states the bound as min(10*MSS, max(2*MSS, 14600)). The 170 KB figure and its 3G assumption were read from web.dev/articles/performance-budgets-101. An earlier draft attached a five-second interactive target to the 170 KB figure; that target comes from RAIL, not from the budget page, and has been removed."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "Downgraded from core. The mechanism is entry 797's, the name is invented rather than published, and what is left is one useful application of a performance budget: give the first screenful its own line. Kept because that is the line that governs hero design."
      },
      "related": [
        797,
        798,
        801
      ]
    },
    {
      "n": 803,
      "title": "Responsive images and art direction",
      "aka": [
        "srcset and sizes",
        "The picture element"
      ],
      "oneLine": "Two different problems: sending the right size of the same picture, and sending a different picture.",
      "demo": {
        "caption": "The same phone frame twice. srcset can only shrink the wide shot; a media source swaps in a crop that still reads.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">srcset alone: one composition</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 158\"><rect class=\"s-mute\" x=\"35\" y=\"8\" width=\"100\" height=\"124\" rx=\"4\"/><rect class=\"s-mute\" x=\"39\" y=\"18\" width=\"92\" height=\"52\"/><path class=\"s-mute\" d=\"M39 56 H131 M39 56 q14 -12 28 0 M75 56 q18 -16 36 0\"/><path class=\"f\" d=\"M99 56 q0 -5 2 -6 q2 1 2 6 Z\"/><circle class=\"f\" cx=\"101\" cy=\"48\" r=\"1.8\"/><path class=\"f\" d=\"M104 56 q0 -3.5 1.5 -4.5 q1.5 1 1.5 4.5 Z\"/><circle class=\"f\" cx=\"105.5\" cy=\"50\" r=\"1.3\"/><rect class=\"f-mute\" x=\"39\" y=\"80\" width=\"92\" height=\"4\"/><rect class=\"f-mute\" x=\"39\" y=\"88\" width=\"80\" height=\"4\"/><rect class=\"f-mute\" x=\"39\" y=\"96\" width=\"86\" height=\"4\"/><rect class=\"f-mute\" x=\"39\" y=\"104\" width=\"58\" height=\"4\"/><text class=\"t\" x=\"6\" y=\"146\">SAME WIDE SHOT, SCALED DOWN</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">picture + media: a new crop</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 158\"><rect class=\"s-mute\" x=\"35\" y=\"8\" width=\"100\" height=\"124\" rx=\"4\"/><rect class=\"s-mute\" x=\"39\" y=\"18\" width=\"92\" height=\"52\"/><path class=\"s-mute\" d=\"M39 46 H131 M39 46 q20 -14 40 -2\"/><path class=\"f\" d=\"M52 70 q0 -18 20 -22 q20 4 20 22 Z\"/><circle class=\"f\" cx=\"72\" cy=\"36\" r=\"10\"/><path class=\"f\" d=\"M86 70 q0 -13 13 -16 q13 3 13 16 Z\"/><circle class=\"f\" cx=\"99\" cy=\"48\" r=\"7\"/><rect class=\"f-mute\" x=\"39\" y=\"80\" width=\"92\" height=\"4\"/><rect class=\"f-mute\" x=\"39\" y=\"88\" width=\"80\" height=\"4\"/><rect class=\"f-mute\" x=\"39\" y=\"96\" width=\"86\" height=\"4\"/><rect class=\"f-mute\" x=\"39\" y=\"104\" width=\"58\" height=\"4\"/><text class=\"t\" x=\"6\" y=\"146\">A CROP CHOSEN FOR THIS WIDTH</text></svg></div></div></div>"
      },
      "what": "Resolution switching uses srcset and sizes on an img element. You list the available file widths, tell the browser how wide the image will display at various layout widths, and it picks a file using the viewport and the screen's pixel density. Art direction uses the picture element with media attributes on each source. That is for when the small screen needs a genuinely different crop or composition, not a smaller copy. MDN is explicit that the media attribute belongs to art direction only, and that you should not also put media conditions in sizes.",
      "why": "Resolution switching is about bytes. Art direction is about meaning: a wide landscape shot with a person small in the frame becomes useless at phone width, and the fix is a tighter crop, not a smaller file. Confusing the two is why so many mobile heroes show an empty sky.",
      "how": [
        "Use img with srcset and sizes by default. Only reach for picture when the crop genuinely has to change.",
        "Get sizes right, because a wrong sizes value makes the browser pick badly however good your srcset is.",
        "Decide the mobile crop yourself rather than letting a CMS centre-crop and hope.",
        "Also use picture with type attributes to offer a modern format with an older fallback."
      ],
      "example": "MDN's own worked example is a wide shot of a man holding his daughter for screens of 800 pixels and up, swapped for a close portrait crop of the pair below that. At phone width the wide version shrinks until the faces are unreadable, which is exactly the case srcset alone cannot solve.",
      "numbers": "",
      "pitfall": "Shipping one huge file and letting CSS scale it. The reader still pays for every byte, and on a phone that is usually the single biggest thing you send.",
      "source": "MDN Web Docs, Responsive images; the srcset, sizes and picture features came out of the W3C Responsive Images Community Group work.",
      "verify": {
        "status": "verified",
        "note": "The distinction between resolution switching and art direction, the picture markup with source media conditions at 800 pixels, and the note 'You should use the media attribute only in art direction scenarios; when you do use media, don't also offer media conditions within the sizes attribute' were all read directly from MDN's Using responsive images in HTML guide this session. An earlier draft described the example image as a child in a garden; MDN's alt text is 'Chris standing up holding his daughter Elva' and the narrow source is a close portrait crop. The Responsive Images Community Group history is not verified here."
      },
      "belongs": {
        "verdict": "core",
        "why": "Choosing the mobile crop is a compositional decision, and it is one designers routinely leave to a script."
      },
      "related": [
        798,
        800,
        9803
      ]
    },
    {
      "n": 804,
      "title": "Font loading strategy and subsetting",
      "aka": [
        "FOIT and FOUT",
        "font-display"
      ],
      "oneLine": "Decide what the reader sees while your web font is still downloading, and ship less font.",
      "demo": {
        "caption": "One slow font, arriving at the marker. Only block starts with nothing on screen; only the bottom row never swaps.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 142\"><text class=\"t\" x=\"2\" y=\"33\">BLOCK</text><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"84\" y=\"20\" width=\"112\" height=\"18\"/><text class=\"t\" x=\"140\" y=\"33\" text-anchor=\"middle\">INVISIBLE</text><rect class=\"s-mute\" x=\"196\" y=\"20\" width=\"56\" height=\"18\"/><text class=\"t\" x=\"224\" y=\"33\" text-anchor=\"middle\">FALLBACK</text><rect class=\"s-accent\" x=\"252\" y=\"20\" width=\"96\" height=\"18\"/><text class=\"t\" x=\"300\" y=\"33\" text-anchor=\"middle\">WEB FONT</text><text class=\"t\" x=\"2\" y=\"69\">SWAP</text><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"84\" y=\"56\" width=\"8\" height=\"18\"/><rect class=\"s-mute\" x=\"92\" y=\"56\" width=\"160\" height=\"18\"/><text class=\"t\" x=\"172\" y=\"69\" text-anchor=\"middle\">FALLBACK</text><rect class=\"s-accent\" x=\"252\" y=\"56\" width=\"96\" height=\"18\"/><text class=\"t\" x=\"300\" y=\"69\" text-anchor=\"middle\">WEB FONT</text><text class=\"t\" x=\"2\" y=\"99\">FALLBACK</text><text class=\"t\" x=\"2\" y=\"110\">OPTIONAL</text><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"84\" y=\"92\" width=\"8\" height=\"18\"/><rect class=\"s-mute\" x=\"92\" y=\"92\" width=\"256\" height=\"18\"/><text class=\"t\" x=\"172\" y=\"105\" text-anchor=\"middle\">FALLBACK STAYS</text><path class=\"s-accent\" stroke-dasharray=\"4 3\" d=\"M252 14 V118\"/><text class=\"t\" x=\"252\" y=\"138\" text-anchor=\"middle\">FONT ARRIVES</text><path class=\"s-mute\" d=\"M84 122 H348\"/><text class=\"t\" x=\"84\" y=\"138\">TIME</text></svg></div>"
      },
      "what": "The CSS font-display descriptor splits font loading into a block period, when unloaded text renders invisibly, a swap period, when it renders in a fallback, and a failure period, when the fallback becomes permanent. The five values set how long each period lasts: auto leaves it to the browser, block gives a short block and infinite swap, swap gives an almost-zero block and infinite swap, fallback gives an almost-zero block and short swap, optional gives an almost-zero block and no swap. Invisible text during the block period is the flash of invisible text; a fallback that later changes is the flash of unstyled text. Subsetting means shipping only the characters and features you use.",
      "why": "This is the one place where a typographic decision directly costs the reader time. Choosing swap says legibility beats brand consistency for the first second. Choosing optional says a slow connection gets the fallback and that is fine. Both are defensible; not choosing is not.",
      "how": [
        "Set font-display explicitly on every @font-face. Do not leave it on auto.",
        "Preload the one or two font files used above the fold, and only those.",
        "Subset to the scripts and characters you actually need, and use WOFF2.",
        "Tune the fallback with size-adjust, ascent-override and descent-override so the swap does not move the layout."
      ],
      "example": "A site setting body copy in a display face with font-display: block will show a blank column on a slow connection, because the block period hides the text rather than showing it in a fallback.",
      "numbers": "MDN states the block and swap durations are user-agent defined, described only as 'short' and 'extremely small'. Firefox exposes them as the preferences gfx.downloadable_fonts.fallback_delay and fallback_delay_short.",
      "pitfall": "Preloading every weight in the family. Preload competes for bandwidth with everything else on the critical path, so preloading five files makes all of them later.",
      "source": "W3C CSS Fonts Module Level 4, font-display descriptor.",
      "verify": {
        "status": "verified",
        "note": "The five values, the three-period model and the note that durations are user-agent defined all read from MDN's font-display page, which cites CSS Fonts Module Level 4. I deliberately did not state the commonly repeated three-second block period, because MDN does not give it and I did not verify it against a browser's source this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a typographic decision with a visible consequence, and the designer is the person who should be choosing between invisible text and a font swap."
      },
      "related": [
        800,
        801,
        805
      ]
    },
    {
      "n": 805,
      "title": "Layout-shift prevention",
      "aka": [
        "Reserving space"
      ],
      "oneLine": "Reserve the correct box for everything that arrives late, so nothing already on screen moves.",
      "demo": {
        "caption": "Two frames each, before and after the file lands. Only the right-hand page reserved the box, so the paragraph holds.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No width or height on the image</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 140\"><text class=\"t\" x=\"6\" y=\"12\">BEFORE</text><rect class=\"s-mute\" x=\"6\" y=\"16\" width=\"78\" height=\"106\"/><rect class=\"f\" x=\"10\" y=\"20\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"10\" y=\"32\" width=\"70\" height=\"4\"/><rect class=\"f-mute\" x=\"10\" y=\"39\" width=\"70\" height=\"4\"/><rect class=\"f-mute\" x=\"10\" y=\"46\" width=\"70\" height=\"4\"/><rect class=\"f-mute\" x=\"10\" y=\"53\" width=\"44\" height=\"4\"/><text class=\"t\" x=\"96\" y=\"12\">AFTER</text><rect class=\"s-mute\" x=\"96\" y=\"16\" width=\"78\" height=\"106\"/><rect class=\"f\" x=\"100\" y=\"20\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"100\" y=\"32\" width=\"70\" height=\"40\"/><rect class=\"s\" x=\"100\" y=\"32\" width=\"70\" height=\"40\"/><rect class=\"f-mute\" x=\"100\" y=\"78\" width=\"70\" height=\"4\"/><rect class=\"f-mute\" x=\"100\" y=\"85\" width=\"70\" height=\"4\"/><rect class=\"f-mute\" x=\"100\" y=\"92\" width=\"70\" height=\"4\"/><rect class=\"f-mute\" x=\"100\" y=\"99\" width=\"44\" height=\"4\"/><path class=\"s-accent\" d=\"M90 34 V96 M87 91 l3 5 l3 -5\"/><text class=\"t\" x=\"6\" y=\"134\">THE PARAGRAPH IS PUSHED DOWN</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Box reserved from an aspect ratio</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 140\"><text class=\"t\" x=\"6\" y=\"12\">BEFORE</text><rect class=\"s-mute\" x=\"6\" y=\"16\" width=\"78\" height=\"106\"/><rect class=\"f\" x=\"10\" y=\"20\" width=\"48\" height=\"6\"/><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"10\" y=\"32\" width=\"70\" height=\"40\"/><text class=\"t\" x=\"45\" y=\"55\" text-anchor=\"middle\">RESERVED</text><rect class=\"f-mute\" x=\"10\" y=\"78\" width=\"70\" height=\"4\"/><rect class=\"f-mute\" x=\"10\" y=\"85\" width=\"70\" height=\"4\"/><rect class=\"f-mute\" x=\"10\" y=\"92\" width=\"70\" height=\"4\"/><rect class=\"f-mute\" x=\"10\" y=\"99\" width=\"44\" height=\"4\"/><text class=\"t\" x=\"96\" y=\"12\">AFTER</text><rect class=\"s-mute\" x=\"96\" y=\"16\" width=\"78\" height=\"106\"/><rect class=\"f\" x=\"100\" y=\"20\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"100\" y=\"32\" width=\"70\" height=\"40\"/><rect class=\"s\" x=\"100\" y=\"32\" width=\"70\" height=\"40\"/><rect class=\"f-mute\" x=\"100\" y=\"78\" width=\"70\" height=\"4\"/><rect class=\"f-mute\" x=\"100\" y=\"85\" width=\"70\" height=\"4\"/><rect class=\"f-mute\" x=\"100\" y=\"92\" width=\"70\" height=\"4\"/><rect class=\"f-mute\" x=\"100\" y=\"99\" width=\"44\" height=\"4\"/><text class=\"t\" x=\"6\" y=\"134\">NOTHING MOVES</text></svg></div></div></div>"
      },
      "what": "The browser can only lay out what it knows the size of. An img with no width and height attributes has no size until the file arrives, so the browser gives it zero height and pushes everything down when it lands. The same applies to iframes, ads, embeds, dynamically inserted banners and any element whose content grows. Prevention means declaring the geometry in advance, either with intrinsic dimensions on the element or with aspect-ratio and min-height in CSS.",
      "why": "It is the direct fix for CLS, and it costs nothing in visual quality. It also removes a whole class of misclicks, where the reader aims at a button and something loads underneath their finger.",
      "how": [
        "Put width and height attributes on every img and iframe, even when CSS controls the display size. Modern browsers use them to compute an aspect ratio.",
        "Give every slot that fills later a min-height sized to its most common content.",
        "Animate with transform and opacity rather than properties that trigger layout, because transforms do not count as layout shifts.",
        "Insert new content below the fold or behind a user action, never above what someone is reading."
      ],
      "example": "A cookie banner injected at the top of the document after first paint shifts the entire page down. The fix is to overlay it or reserve its height in the initial HTML.",
      "numbers": "See entry 800 for the CLS thresholds this prevents breaching: good is 0.1 or less.",
      "pitfall": "Reserving space with a fixed pixel height that is right at one breakpoint and wrong at the others, so you trade one shift for three.",
      "source": "Google Chrome team, Optimize CLS guidance on web.dev.",
      "verify": {
        "status": "verified",
        "note": "The mechanism follows from the CLS definition read at web.dev/articles/cls. The width and height attribute behaviour was checked directly on MDN's img page this session, which states that including them 'enables the aspect ratio of the image to be calculated by the browser prior to the image being loaded' and that this ratio 'is used to reserve the space needed to display the image, reducing or even preventing a layout shift'."
      },
      "belongs": {
        "verdict": "core",
        "why": "Reserving space is a layout decision made at design time, and the alternative is content moving under the reader."
      },
      "related": [
        800,
        803,
        806
      ]
    },
    {
      "n": 806,
      "title": "Skeletons versus spinners",
      "aka": [
        "Loading placeholders",
        "Ghost UI"
      ],
      "oneLine": "Show a grey outline of the content to come, or show a spinner, or show neither.",
      "demo": {
        "caption": "The three waiting states, with Viget's 2017 figures beneath. In that test the skeleton came last on both measures.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 172\"><text class=\"t\" x=\"56\" y=\"12\" text-anchor=\"middle\">SKELETON</text><text class=\"t\" x=\"170\" y=\"12\" text-anchor=\"middle\">SPINNER</text><text class=\"t\" x=\"284\" y=\"12\" text-anchor=\"middle\">BLANK</text><rect class=\"s-mute\" x=\"14\" y=\"20\" width=\"84\" height=\"80\"/><rect class=\"f-mute\" x=\"22\" y=\"28\" width=\"68\" height=\"22\"/><rect class=\"f-mute\" x=\"22\" y=\"56\" width=\"68\" height=\"5\"/><rect class=\"f-mute\" x=\"22\" y=\"65\" width=\"68\" height=\"5\"/><rect class=\"f-mute\" x=\"22\" y=\"74\" width=\"42\" height=\"5\"/><rect class=\"f-mute\" x=\"22\" y=\"86\" width=\"28\" height=\"8\"/><rect class=\"s-mute\" x=\"128\" y=\"20\" width=\"84\" height=\"80\"/><path class=\"s\" d=\"M170 46 A14 14 0 1 1 156 60\"/><rect class=\"s-mute\" x=\"242\" y=\"20\" width=\"84\" height=\"80\"/><text class=\"t\" x=\"56\" y=\"118\" text-anchor=\"middle\">2.82 S</text><text class=\"t\" x=\"170\" y=\"118\" text-anchor=\"middle\">2.41 S</text><text class=\"t\" x=\"284\" y=\"118\" text-anchor=\"middle\">2.29 S</text><text class=\"t\" x=\"56\" y=\"132\" text-anchor=\"middle\">59% QUICK</text><text class=\"t\" x=\"170\" y=\"132\" text-anchor=\"middle\">74% QUICK</text><text class=\"t\" x=\"284\" y=\"132\" text-anchor=\"middle\">66% QUICK</text><path class=\"s-mute\" d=\"M14 140 H326\"/><text class=\"t\" x=\"14\" y=\"154\">PERCEIVED WAIT, THEN AGREED IT WAS QUICK</text><text class=\"t\" x=\"14\" y=\"166\">VIGET 2017, N=136</text></svg></div>"
      },
      "what": "Luke Wroblewski popularised the skeleton screen in a 2013 post, defining it as a blank version of a page into which information is gradually loaded, and arguing it beats a spinner because attention stays on the content rather than on the wait. The industry then turned that into a rule, and the rule is not supported. Viget tested 136 people in 2017 and found the skeleton performed worst of the three options, with both the spinner and a plain blank screen ahead of it. Bill Chung's 2018 test of 80 people found the reverse ordering on mobile, with the skeleton best and the blank screen worst, and said the margin was small.",
      "why": "The two studies disagree about the ranking, so treat the choice as contextual rather than settled, and be suspicious of anyone who states it flatly. Wroblewski's original case was narrower than the way it gets quoted: on Polar, a skeleton that filled in incrementally replaced a spinner and the complaints about waiting stopped. What the evidence does point at is whether the placeholder tells the truth about what is coming.",
      "how": [
        "Do not assume a skeleton feels faster than a spinner. The published tests point both ways.",
        "Make the skeleton match the real layout exactly, or it becomes a layout shift you designed on purpose.",
        "Fill the skeleton incrementally as data arrives, rather than swapping the whole thing at the end.",
        "Use a spinner for short waits inside one component, and a skeleton for a whole region being populated.",
        "For waits beyond a few seconds, tell the reader in words what is happening."
      ],
      "example": "Tim Kadlec's Effective Skeleton Screens, 2 November 2020, uses the YouTube desktop homepage: grey boxes for 6.9 seconds on a cable connection, then the whole skeleton jumping as an advert loads. The placeholder promised a layout the page did not deliver.",
      "numbers": "Viget (2017, n=136, split 39 skeleton, 39 spinner, 58 blank): agreed loading was quick, 59 per cent skeleton, 66 per cent blank, 74 per cent spinner; perceived wait 2.82 s, 2.29 s and 2.41 s in the same order. Chung (2018, n=80) reports the skeleton best on perceived duration on mobile and the blank control worst.",
      "pitfall": "Shimmer on a skeleton that stays for ten seconds. Kadlec's point is that the placeholder only holds attention for the moment it takes to read it, after which the reader is back to waiting with nothing to do.",
      "source": "Luke Wroblewski, Mobile Design Details: Avoid The Spinner, 17 September 2013; Kathryn Faulkner and Katherine Olvera, A Bone to Pick with Skeleton Screens, Viget, 19 October 2017; Bill Chung, Everything you need to know about skeleton screens, UX Collective, 2018; Tim Kadlec, Effective Skeleton Screens, 2 November 2020.",
      "verify": {
        "status": "disputed",
        "note": "Coinage verified: Wroblewski's post was read directly, dated 17 September 2013, and contains the quoted definition and the Polar case. The performance claim is contested and the two studies contradict each other. The Viget article was read in full: authors Kathryn Faulkner and Katherine Olvera, 19 October 2017, 136 participants, all figures above taken from its results table. An earlier draft of this entry said both studies agree a blank screen is worst; that is wrong for Viget, where the blank screen beat the skeleton, and it has been corrected. Chung's study was read as a published summary of its own results rather than as raw data."
      },
      "belongs": {
        "verdict": "core",
        "why": "Designing the waiting state is a real deliverable, even though the evidence for which waiting state is best does not support the confidence with which it is usually asserted."
      },
      "related": [
        799,
        805,
        819
      ]
    },
    {
      "n": 807,
      "title": "Pointer versus touch input",
      "aka": [
        "Coarse and fine pointers",
        "Input modality"
      ],
      "oneLine": "Ask what kind of pointer the reader has rather than guessing from screen width.",
      "demo": {
        "caption": "MDN's example, both halves the same screen width: the same checkbox at 15 pixels for a mouse, 30 for a finger.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Pointer: fine, a trackpad</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--nowrap\"><span class=\"db-sq\" style=\"width:15px;height:15px\"></span><span class=\"db-note\">Remember me</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-sq\" style=\"width:15px;height:15px\"></span><span class=\"db-note\">Email a receipt</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-sq\" style=\"width:15px;height:15px\"></span><span class=\"db-note\">Add to calendar</span></div><span class=\"db-note db-note--accent\">15 px targets</span></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Pointer: coarse, a finger</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row db-row--nowrap\"><span class=\"db-sq\" style=\"width:30px;height:30px\"></span><span class=\"db-note\">Remember me</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-sq\" style=\"width:30px;height:30px\"></span><span class=\"db-note\">Email a receipt</span></div><div class=\"db-row db-row--nowrap\"><span class=\"db-sq\" style=\"width:30px;height:30px\"></span><span class=\"db-note\">Add to calendar</span></div><span class=\"db-note db-note--accent\">30 px targets</span></div></div></div></div>"
      },
      "what": "Media Queries Level 4 gives you interaction features that describe the input device instead of the screen. The pointer feature reports the primary pointing device as fine, meaning something accurate like a mouse, coarse, meaning something imprecise like a finger, or none. The hover feature reports whether that device can hover. The any-pointer and any-hover variants test all attached devices rather than only the primary one, which matters for laptops with touchscreens and tablets with a trackpad attached.",
      "why": "Screen width has never been a reliable proxy for input. A 13-inch touchscreen laptop and a 13-inch trackpad laptop are the same width and need different target sizes. Querying the input directly lets you size controls honestly instead of assuming.",
      "how": [
        "Enlarge hit areas under @media (pointer: coarse) rather than under a width breakpoint.",
        "Never make a function reachable only on hover. Use hover as an enhancement and put the same action somewhere tappable.",
        "Prefer any-hover and any-pointer when a device might have both kinds of input attached.",
        "Use Pointer Events rather than separate mouse and touch handlers, so one code path covers mouse, finger and stylus."
      ],
      "example": "MDN's own worked example draws a checkbox at 15 pixels square under @media (pointer: fine) and 30 pixels square under @media (pointer: coarse). Same control, sized for the hand or the mouse actually holding it.",
      "numbers": "WCAG 2.2 SC 2.5.8 Target Size (Minimum), level AA: targets for pointer inputs are at least 24 by 24 CSS pixels, with limited exceptions. SC 2.5.5 Target Size (Enhanced), level AAA: at least 44 by 44 CSS pixels.",
      "pitfall": "Treating pointer: coarse as a synonym for phone. A television remote and a games controller also report coarse, and neither behaves like a touchscreen.",
      "source": "W3C Media Queries Level 4 (pointer, hover, any-pointer, any-hover); W3C WCAG 2.2 for the target size figures.",
      "verify": {
        "status": "verified",
        "note": "The three values (none, coarse, fine) and their definitions were read from MDN's pointer media feature page this session, along with its worked example, which sets the checkbox to 15 by 15 pixels under pointer: fine and 30 by 30 under pointer: coarse. MDN cites Media Queries Level 4. Target size figures quoted from the W3C WCAG 2.2 recommendation, SC 2.5.8 (24 by 24 CSS pixels, AA) and SC 2.5.5 (44 by 44 CSS pixels, AAA)."
      },
      "belongs": {
        "verdict": "core",
        "why": "Target size and hover dependence are design decisions, and this is the mechanism that lets you make them correctly rather than by guesswork."
      },
      "related": [
        808,
        700,
        791
      ]
    },
    {
      "n": 808,
      "title": "Hover, focus, active and visited states",
      "aka": [
        "Link states",
        "LVHA order"
      ],
      "oneLine": "Every interactive element needs a designed resting, hover, focus, pressed and visited appearance.",
      "demo": {
        "caption": "Left, four states that look identical and a link you cannot tell you have read. Right, each one distinct.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Only the resting state drawn</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--ghost\">Send</span><span class=\"db-note\">Rest</span></span><span class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--ghost\">Send</span><span class=\"db-note\">Hover</span></span><span class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--ghost\">Send</span><span class=\"db-note\">Focus</span></span><span class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--ghost\">Send</span><span class=\"db-note\">Pressed</span></span></div><div class=\"db-row\"><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"color:var(--accent);text-decoration:underline\">Fees</span><span class=\"db-note\">Link</span></span><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"color:var(--accent);text-decoration:underline\">Fees</span><span class=\"db-note\">Visited</span></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Five appearances drawn</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-row\"><span class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--ghost\">Send</span><span class=\"db-note\">Rest</span></span><span class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--ghost\" style=\"background:var(--accent-soft);border-color:var(--accent-line)\">Send</span><span class=\"db-note\">Hover</span></span><span class=\"db-col db-col--tight\"><span class=\"db-btn db-btn--ghost\" style=\"outline:2px solid var(--accent);outline-offset:2px\">Send</span><span class=\"db-note\">Focus</span></span><span class=\"db-col db-col--tight\"><span class=\"db-btn\" style=\"background:var(--accent);border-color:var(--accent)\">Send</span><span class=\"db-note\">Pressed</span></span></div><div class=\"db-row\"><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"color:var(--accent);text-decoration:underline\">Fees</span><span class=\"db-note\">Link</span></span><span class=\"db-col db-col--tight\"><span class=\"db-type\" style=\"color:var(--ink-3);text-decoration:underline\">Fees</span><span class=\"db-note\">Visited</span></span></div></div></div></div></div>"
      },
      "what": "CSS gives links five states worth designing: default, visited, hover, focus and active. They must be written in that order, :link, :visited, :hover, :active, because later rules of equal specificity win and otherwise the visited colour overrides hover. The :focus-visible pseudo-class applies only when the browser judges an indicator appropriate, typically keyboard navigation, so you can style keyboard focus strongly without ringing every mouse click. Visited links are restricted for privacy: browsers honour only colour-family properties, ignore the alpha channel, and getComputedStyle deliberately returns the unvisited value.",
      "why": "States are how an interface answers back. A control with no hover state feels dead, a control with no focus state is unusable by keyboard, and a link with no visited state makes people re-read pages they have already read.",
      "how": [
        "Write link rules in LVHA order, and remember :focus-visible sits alongside rather than replacing :focus.",
        "Never remove an outline without replacing it with something at least as visible.",
        "Design the pressed state, not just hover. On touch there is no hover, so :active is the only feedback.",
        "Keep visited styling to colour, because that is all the browser applies, and pick one that still passes contrast."
      ],
      "example": "Wikipedia keeps its visited links a distinct purple against unvisited blue, which is why long research sessions there do not turn into re-reading the same articles.",
      "numbers": "WCAG 2.2 SC 2.4.13 Focus Appearance, level AAA: the indicator is at least as large as a 2 CSS pixel thick perimeter of the component and has a contrast ratio of at least 3:1. SC 2.4.11 Focus Not Obscured (Minimum), level AA: a focused component must not be entirely hidden by author content.",
      "pitfall": "outline: none applied globally in a reset and never replaced. It is the commonest way a site becomes unusable by keyboard while looking perfectly fine to the person who built it.",
      "source": "CSS link pseudo-classes, documented on MDN; W3C WCAG 2.2 for the focus criteria.",
      "verify": {
        "status": "verified",
        "note": "The LVHA order, the reasoning behind it and the :visited privacy restrictions, including the ignored alpha channel and the getComputedStyle behaviour, read from MDN's :visited page. Focus criteria quoted from the W3C WCAG 2.2 recommendation."
      },
      "belongs": {
        "verdict": "core",
        "why": "Interaction states are drawn by a designer or they are not drawn at all, and their absence is felt immediately."
      },
      "related": [
        807,
        695,
        799
      ]
    },
    {
      "n": 809,
      "title": "Safe areas and device notches",
      "aka": [
        "env(safe-area-inset-*)",
        "viewport-fit=cover"
      ],
      "oneLine": "Keep content out of the corners, notches and gesture bars that the hardware has already claimed.",
      "demo": {
        "caption": "Left, the title sits under the notch and the button under the home bar. Right, the insets keep content clear.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No safe area insets</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 176 182\"><rect class=\"s-mute\" x=\"8\" y=\"10\" width=\"104\" height=\"162\" rx=\"14\"/><rect class=\"f-mute\" x=\"30\" y=\"16\" width=\"56\" height=\"8\"/><rect class=\"f-mute\" x=\"14\" y=\"34\" width=\"92\" height=\"4\"/><rect class=\"f-mute\" x=\"14\" y=\"42\" width=\"92\" height=\"4\"/><rect class=\"f-mute\" x=\"14\" y=\"50\" width=\"60\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"62\" width=\"104\" height=\"46\"/><rect class=\"f-mute\" x=\"14\" y=\"116\" width=\"92\" height=\"4\"/><rect class=\"f-mute\" x=\"14\" y=\"124\" width=\"70\" height=\"4\"/><rect class=\"f-accent\" x=\"14\" y=\"146\" width=\"92\" height=\"18\"/><rect class=\"f\" x=\"42\" y=\"10\" width=\"36\" height=\"12\" rx=\"6\"/><rect class=\"f\" x=\"42\" y=\"152\" width=\"36\" height=\"4\" rx=\"2\"/><path class=\"s-mute\" d=\"M112 16 H120\"/><text class=\"t\" x=\"122\" y=\"19\">NOTCH</text><path class=\"s-mute\" d=\"M112 154 H120\"/><text class=\"t\" x=\"122\" y=\"157\">HOME BAR</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Insets added as padding</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 176 182\"><rect class=\"s-mute\" x=\"8\" y=\"10\" width=\"104\" height=\"162\" rx=\"14\"/><path class=\"s-accent\" stroke-dasharray=\"3 3\" d=\"M8 28 H112\"/><path class=\"s-accent\" stroke-dasharray=\"3 3\" d=\"M8 144 H112\"/><rect class=\"f-mute\" x=\"14\" y=\"34\" width=\"56\" height=\"8\"/><rect class=\"f-mute\" x=\"14\" y=\"50\" width=\"92\" height=\"4\"/><rect class=\"f-mute\" x=\"14\" y=\"58\" width=\"92\" height=\"4\"/><rect class=\"f-mute\" x=\"8\" y=\"70\" width=\"104\" height=\"38\"/><rect class=\"f-mute\" x=\"14\" y=\"114\" width=\"70\" height=\"4\"/><rect class=\"f-accent\" x=\"14\" y=\"124\" width=\"92\" height=\"16\"/><rect class=\"f\" x=\"42\" y=\"10\" width=\"36\" height=\"12\" rx=\"6\"/><rect class=\"f\" x=\"42\" y=\"152\" width=\"36\" height=\"4\" rx=\"2\"/><path class=\"s-mute\" d=\"M112 28 H120\"/><text class=\"t\" x=\"122\" y=\"31\">INSET</text><path class=\"s-mute\" d=\"M112 144 H120\"/><text class=\"t\" x=\"122\" y=\"147\">INSET</text></svg></div></div></div>"
      },
      "what": "CSS Environment Variables Module Level 1 defines env(), and the browser exposes safe-area-inset-top, -right, -bottom and -left. Each is the distance from that viewport edge to where it is safe to put content without a rounded corner, a camera cutout or a system gesture bar covering it. They read as zero on an ordinary rectangular viewport with nothing in the way. They become non-zero when the display is not rectangular or when browser or system furniture is occupying viewport space, and on iOS you have to opt in with viewport-fit=cover in the viewport meta tag before you get anything to work with.",
      "why": "Full-bleed layouts look best when the background genuinely reaches the edge and the content does not. Safe area insets let you have both, instead of choosing between letterboxing the whole page and having your bottom navigation sit under a home indicator.",
      "how": [
        "Add viewport-fit=cover to the viewport meta tag, then add the insets back as padding on the elements that hold content.",
        "Combine with your own spacing rather than replacing it: padding-bottom: calc(1rem + env(safe-area-inset-bottom)).",
        "Give env() a fallback value as its second argument for browsers that do not know the variable.",
        "Check fixed headers and footers in landscape, where the left and right insets become the awkward ones."
      ],
      "example": "A sticky bottom action bar on an iPhone will sit underneath the home indicator without this, so the primary button is half covered by a system control the reader cannot move.",
      "numbers": "",
      "pitfall": "Applying the insets to the background element as well as the content, which produces white strips down the sides and defeats the point of a full-bleed design.",
      "source": "W3C CSS Environment Variables Module Level 1; the feature originated in the iOS browser.",
      "verify": {
        "status": "verified",
        "note": "Definitions, the conditions under which the insets are non-zero, the viewport-fit=cover requirement and the iOS origin all read from MDN's env() page, which cites CSS Environment Variables Module Level 1."
      },
      "belongs": {
        "verdict": "core",
        "why": "It governs where the edge of a layout actually is on modern hardware, which is a composition question before it is a code question."
      },
      "related": [
        810,
        9791,
        791
      ]
    },
    {
      "n": 810,
      "title": "Viewport units and mobile toolbars",
      "aka": [
        "svh, lvh, dvh",
        "The 100vh problem"
      ],
      "oneLine": "On mobile the viewport height changes as toolbars slide away, so pick which height you mean.",
      "demo": {
        "caption": "The same hero on arrival, with the toolbars still showing. Only the svh version keeps its button on the screen.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">height: 100vh</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 200\"><rect class=\"s-mute\" x=\"8\" y=\"8\" width=\"104\" height=\"180\" rx=\"12\"/><rect class=\"f-mute\" x=\"8\" y=\"8\" width=\"104\" height=\"16\"/><rect class=\"s-mute\" x=\"16\" y=\"12\" width=\"88\" height=\"8\" rx=\"4\"/><rect class=\"s-accent\" x=\"12\" y=\"28\" width=\"96\" height=\"168\"/><rect class=\"f\" x=\"18\" y=\"40\" width=\"60\" height=\"8\"/><rect class=\"f-mute\" x=\"18\" y=\"54\" width=\"84\" height=\"4\"/><rect class=\"f-accent\" x=\"18\" y=\"170\" width=\"48\" height=\"14\"/><rect class=\"f-mute\" x=\"8\" y=\"172\" width=\"104\" height=\"16\"/><path class=\"s-accent\" d=\"M116 24 V196 M113 24 H119 M113 196 H119\"/><text class=\"t\" x=\"122\" y=\"112\">100VH</text><text class=\"t\" x=\"122\" y=\"178\">BUTTON</text><text class=\"t\" x=\"122\" y=\"190\">HIDDEN</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">height: 100svh</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 200\"><rect class=\"s-mute\" x=\"8\" y=\"8\" width=\"104\" height=\"180\" rx=\"12\"/><rect class=\"f-mute\" x=\"8\" y=\"8\" width=\"104\" height=\"16\"/><rect class=\"s-mute\" x=\"16\" y=\"12\" width=\"88\" height=\"8\" rx=\"4\"/><rect class=\"s-accent\" x=\"12\" y=\"28\" width=\"96\" height=\"140\"/><rect class=\"f\" x=\"18\" y=\"40\" width=\"60\" height=\"8\"/><rect class=\"f-mute\" x=\"18\" y=\"54\" width=\"84\" height=\"4\"/><rect class=\"f-accent\" x=\"18\" y=\"146\" width=\"48\" height=\"14\"/><rect class=\"f-mute\" x=\"8\" y=\"172\" width=\"104\" height=\"16\"/><path class=\"s-accent\" d=\"M116 24 V168 M113 24 H119 M113 168 H119\"/><text class=\"t\" x=\"122\" y=\"96\">100SVH</text><text class=\"t\" x=\"122\" y=\"146\">BUTTON</text><text class=\"t\" x=\"122\" y=\"158\">IN VIEW</text></svg></div></div></div>"
      },
      "what": "CSS Values and Units Level 4 splits viewport units into three sets. Small units, svh and friends, measure the viewport when the browser interface is fully expanded. Large units, lvh and friends, measure it when the interface has retracted. Dynamic units, dvh and friends, track the current state and change as the reader scrolls. Plain vh resolves to the large value, which is why a 100vh hero on a phone is taller than the screen the reader is actually looking at on arrival.",
      "why": "Full-height sections are one of the commonest layout requests, and the wrong unit either cuts the bottom off a call to action or leaves a strip of empty space after the first scroll. Choosing between svh, lvh and dvh is choosing which of those you would rather have.",
      "how": [
        "Use svh when nothing may be cut off, such as a hero containing a button.",
        "Use dvh sparingly, because it changes value while the reader scrolls and can cause content to resize mid-gesture.",
        "Consider min-height with a content-based fallback instead of a fixed viewport height, so long content is never clipped.",
        "Test in real mobile Safari and Chrome, not a desktop responsive-mode preview, because the toolbar behaviour is the whole point."
      ],
      "example": "A hero set to height: 100vh on iOS Safari pushes its bottom button below the screen edge on load, and the button only appears once the reader scrolls and the toolbar shrinks.",
      "numbers": "",
      "pitfall": "Reaching for a JavaScript workaround that measures window.innerHeight and sets a custom property. It was necessary before these units existed and now just adds a resize listener and a flash of the wrong height.",
      "source": "W3C CSS Values and Units Module Level 4.",
      "verify": {
        "status": "verified",
        "note": "Read directly from MDN's length page this session: the small, large and dynamic viewport definitions, the statement that 'vh is equivalent to lvh', and the note that dynamic viewport units 'can cause the content to resize while a user is scrolling a page'. MDN cites CSS Values and Units Module Level 4."
      },
      "belongs": {
        "verdict": "core",
        "why": "It decides whether a full-height section actually fits the screen, which is a layout outcome the designer specified."
      },
      "related": [
        809,
        793,
        811
      ]
    },
    {
      "n": 811,
      "title": "Scroll performance",
      "aka": [
        "Jank",
        "Smooth scrolling"
      ],
      "oneLine": "Keep scrolling at the display's frame rate by not making the browser wait or repaint too much.",
      "demo": {
        "caption": "The top row finishes inside every frame. The bottom row's work runs past the boundary, so half the frames never paint.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 148\"><text class=\"t\" x=\"46\" y=\"12\">RAIL: 10 MS OF WORK IN EACH 16 MS FRAME</text><path class=\"s-mute\" stroke-dasharray=\"2 3\" d=\"M46 20 V104 M82 20 V104 M118 20 V104 M154 20 V104 M190 20 V104 M226 20 V104 M262 20 V104 M298 20 V104 M334 20 V104\"/><text class=\"t\" x=\"2\" y=\"41\">10 MS</text><rect class=\"f-mute\" x=\"46\" y=\"30\" width=\"22\" height=\"14\"/><rect class=\"f-mute\" x=\"82\" y=\"30\" width=\"22\" height=\"14\"/><rect class=\"f-mute\" x=\"118\" y=\"30\" width=\"22\" height=\"14\"/><rect class=\"f-mute\" x=\"154\" y=\"30\" width=\"22\" height=\"14\"/><rect class=\"f-mute\" x=\"190\" y=\"30\" width=\"22\" height=\"14\"/><rect class=\"f-mute\" x=\"226\" y=\"30\" width=\"22\" height=\"14\"/><rect class=\"f-mute\" x=\"262\" y=\"30\" width=\"22\" height=\"14\"/><rect class=\"f-mute\" x=\"298\" y=\"30\" width=\"22\" height=\"14\"/><text class=\"t\" x=\"2\" y=\"77\">28 MS</text><rect class=\"f-accent\" x=\"46\" y=\"66\" width=\"58\" height=\"14\"/><rect class=\"f-accent\" x=\"118\" y=\"66\" width=\"58\" height=\"14\"/><rect class=\"f-accent\" x=\"190\" y=\"66\" width=\"58\" height=\"14\"/><rect class=\"f-accent\" x=\"262\" y=\"66\" width=\"58\" height=\"14\"/><path class=\"s-accent\" d=\"M78 88 L86 96 M86 88 L78 96 M150 88 L158 96 M158 88 L150 96 M222 88 L230 96 M230 88 L222 96 M294 88 L302 96 M302 88 L294 96\"/><path class=\"s-mute\" d=\"M46 106 H334\"/><text class=\"t\" x=\"46\" y=\"122\">DASHED LINE = A NEW FRAME, 16 MS</text><text class=\"t\" x=\"46\" y=\"136\">X = A FRAME THE BROWSER MISSED</text></svg></div>"
      },
      "what": "Scrolling is smooth when the browser produces a new frame every refresh. It stutters when the main thread is busy, or when the browser cannot start scrolling because it has to wait for an event handler that might cancel the scroll. The passive listener option fixes the second case: it promises the handler will not call preventDefault, so the browser can scroll immediately. Browsers now default passive to true for wheel, mousewheel, touchstart and touchmove listeners attached to Window, Document and document.body, precisely because so much old code got this wrong.",
      "why": "Scroll is the most-used gesture on the web, so stutter there colours the reader's impression of everything else. For a designer the useful consequence is a shortlist of expensive effects to use sparingly rather than everywhere.",
      "how": [
        "Pass { passive: true } on any scroll, wheel or touch listener that does not cancel the default.",
        "Animate with transform and opacity, which the compositor can handle without a full repaint.",
        "Treat backdrop-filter, large blurred shadows and full-page parallax as budgeted items, not defaults.",
        "Use content-visibility: auto on long off-screen sections so the browser can skip rendering work.",
        "Apply will-change only to the element being animated, and remove it afterwards."
      ],
      "example": "A sticky header with a backdrop-filter blur over a long page of images is the usual culprit for stutter on mid-range Android phones, because the blur is recomputed as the content behind it moves.",
      "numbers": "RAIL sets 10 ms of work per animation frame against a 16 ms budget on a 60 Hz display, leaving the browser the rest.",
      "pitfall": "will-change sprinkled across a stylesheet as a supposed speed fix. It forces the browser to hold extra layers in memory, and on a low-end phone it makes scrolling worse rather than better.",
      "source": "MDN, addEventListener passive option; Google, RAIL model on web.dev.",
      "verify": {
        "status": "verified",
        "note": "The passive option's purpose and the list of events whose default changed to passive on Window, Document and document.body read directly from MDN's addEventListener page. The 10 ms and 16 ms figures read from web.dev/articles/rail."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "This is rendering engineering, but it belongs here because the things that break it are design choices: parallax, backdrop blur, sticky layers and long unbounded lists."
      },
      "related": [
        797,
        751,
        810
      ]
    },
    {
      "n": 812,
      "title": "Z-index scale",
      "aka": [
        "Layering scale",
        "Stacking order tokens"
      ],
      "oneLine": "Agree a short, named set of layer values instead of raising numbers until something appears on top.",
      "demo": {
        "caption": "The same two numbers on both sides. Only the header's wrapper differs, and that decides which panel paints on top.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Wrapper has a transform</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 176 166\"><text class=\"t\" x=\"4\" y=\"10\">HEADER WRAP: TRANSFORM</text><text class=\"t\" x=\"4\" y=\"22\">HEADER 5, MODAL 9999</text><rect class=\"s-mute\" x=\"4\" y=\"30\" width=\"168\" height=\"112\"/><rect class=\"f\" x=\"40\" y=\"44\" width=\"96\" height=\"84\" rx=\"2\"/><rect class=\"f-mute\" x=\"4\" y=\"30\" width=\"168\" height=\"28\"/><text class=\"t\" x=\"4\" y=\"158\">MODAL PAINTS BEHIND</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Wrapper left alone</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 176 166\"><text class=\"t\" x=\"4\" y=\"10\">HEADER WRAP: NO TRANSFORM</text><text class=\"t\" x=\"4\" y=\"22\">HEADER 5, MODAL 9999</text><rect class=\"s-mute\" x=\"4\" y=\"30\" width=\"168\" height=\"112\"/><rect class=\"f-mute\" x=\"4\" y=\"30\" width=\"168\" height=\"28\"/><rect class=\"f\" x=\"40\" y=\"44\" width=\"96\" height=\"84\" rx=\"2\"/><text class=\"t\" x=\"4\" y=\"158\">MODAL PAINTS IN FRONT</text></svg></div></div></div>"
      },
      "what": "z-index only orders siblings within the same stacking context. Contexts are created by the root element, by anything positioned fixed or sticky, by relatively or absolutely positioned elements and by flex or grid items with a z-index other than auto, and by a long list of visual properties: opacity below 1, any transform, filter or backdrop-filter, a blend mode, clip-path, mask, isolation: isolate, contain: layout or paint, container-type, will-change naming any of those, and the top layer used by fullscreen and popovers. A child's z-index of 9999 inside a context whose parent sits at 4 still loses to a sibling of that parent at 5.",
      "why": "Layering is part of the design, so it should have a vocabulary the way spacing and type do. A named scale makes the intended order readable and gives you somewhere obvious to add a new layer.",
      "how": [
        "Define five or six named tokens and use nothing else: base, raised, sticky, overlay, modal, toast.",
        "Space the values in tens so there is room between them, and never hard-code a raw number in a component.",
        "Add isolation: isolate to a section deliberately, to trap its children's layering inside it.",
        "When something will not come to the front, look up the ancestor chain for an opacity, transform or filter before touching the number."
      ],
      "example": "A modal that stubbornly renders behind a sticky header is nearly always a stacking-context problem: the header's wrapper has an opacity or transform on it, so the modal's z-index is being compared inside a box the header is not in.",
      "numbers": "",
      "pitfall": "The 9999 escalation. Two components each claim the top, a third arrives, and nobody can reason about the order because the numbers no longer mean anything.",
      "source": "CSS 2.1 section on layered presentation; the full list of context-creating properties is maintained on MDN.",
      "verify": {
        "status": "verified",
        "note": "The stacking-context trigger list and the worked example showing a nested z-index of 6 losing to a sibling of 5 read from MDN's Stacking context page. The CSS 2.1 specification named in the source line was not opened this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "Depth order is a design decision, and a named scale is a design-system artefact in the same way a spacing scale is."
      },
      "related": [
        788,
        740,
        811
      ]
    },
    {
      "n": 813,
      "title": "Dark mode implementation",
      "aka": [
        "Dark theme"
      ],
      "oneLine": "A dark interface is a separate design with its own rules, not the light one with the values inverted.",
      "demo": {
        "caption": "Left, the light palette inverted. Right, Material's own values: grey surface, lighter card for depth, lightened error red.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Light theme inverted</span><div class=\"db-stage\" style=\"background:#000000\"><div class=\"db-col\"><span class=\"db-type\" style=\"color:#ffffff\">Appointments</span><div class=\"db-card\" style=\"background:#000000;border-color:#0a0a0a;box-shadow:0 2px 10px rgba(0,0,0,0.7)\"><span class=\"db-note\" style=\"color:#ffffff\">Raised card</span></div><span class=\"db-chip-text\" style=\"background:#b00020;color:#ffffff\">Payment failed</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Material dark recipe</span><div class=\"db-stage\" style=\"background:#121212\"><div class=\"db-col\"><span class=\"db-type\" style=\"color:rgba(255,255,255,0.87)\">Appointments</span><div class=\"db-card\" style=\"background:#2e2e2e;border-color:#3a3a3a\"><span class=\"db-note\" style=\"color:rgba(255,255,255,0.6)\">Raised card, 12% overlay</span></div><span class=\"db-chip-text\" style=\"background:#cf6679;color:#121212\">Payment failed</span></div></div></div></div>"
      },
      "what": "Material Design's dark theme guidance is the most specific published set of rules. It uses a dark grey surface rather than black, at hex 121212, because shadows stay visible on grey and light text on grey is less punishing than on black. Depth comes from making higher surfaces lighter with a semi-transparent white overlay, not from shadow alone. Saturated accents are swapped for desaturated ones, because saturated hues fail contrast on dark surfaces and vibrate optically. Text emphasis is set with opacity rather than with separate grey values.",
      "why": "Mechanical inversion produces a bad interface. Shadows disappear, brand colours go muddy or start buzzing, and pure white on pure black smears for a lot of readers. Following a real dark palette recipe gets you a second theme that holds its hierarchy.",
      "how": [
        "Start from a dark grey surface and build lighter surfaces for raised elements.",
        "Desaturate accent colours and check each against every surface it can appear on, including the lightest.",
        "Keep the brand colour at full saturation for one or two elements only, such as a logo or primary button.",
        "Keep shadows dark. A light glow does not read as depth."
      ],
      "example": "Material's baseline dark error colour, hex CF6679, is the light-theme error red B00020 lightened with a 40 per cent white overlay so it passes AA contrast on a dark surface.",
      "numbers": "Material Design 2: dark surface #121212; at least 15.8:1 contrast between white body text and the surface, which keeps body text above WCAG AA's 4.5:1 even on the lightest 24dp surface; elevation overlay from 0 per cent at 0dp to 16 per cent at 24dp; text opacity 87 / 60 / 38 per cent.",
      "pitfall": "Reusing the light theme's contrast checks. A pairing that passes on white can fail badly on a raised dark surface, because the surface gets lighter as elevation increases and the check was only ever run against the darkest one.",
      "source": "Material Design 2, Dark theme guidance (m2.material.io). Material 2 is no longer maintained; the numbers remain the clearest published set.",
      "verify": {
        "status": "verified",
        "note": "Re-checked against the Material Design 2 dark theme page this session, figure by figure: 'The recommended dark theme surface color is #121212'; 'Dark surfaces and 100% white body text have a contrast level of at least 15.8:1', stated as ensuring body text still passes AA at the highest 24dp surface; the overlay table 00dp 0 per cent, 01dp 5, 02dp 7, 03dp 8, 04dp 9, 06dp 11, 08dp 12, 12dp 14, 16dp 15, 24dp 16; high-emphasis 87 per cent, medium 60, disabled 38; and the error colour #CF6679 'created by taking the light theme error color (#B00020) and lightening it with a 40% white overlay'. The page carries a banner saying Material 2 is no longer maintained."
      },
      "belongs": {
        "verdict": "core",
        "why": "A second theme is a second design, with its own colour, contrast and depth decisions."
      },
      "related": [
        814,
        691,
        812
      ]
    },
    {
      "n": 814,
      "title": "Colour-scheme respect",
      "aka": [
        "prefers-color-scheme",
        "color-scheme property"
      ],
      "oneLine": "Take the reader's system preference as your default, and tell the browser which schemes you support.",
      "demo": {
        "caption": "The same dark page. On the left the scrollbar and the date field are still drawn in the browser's light colours.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">color-scheme not declared</span><div class=\"db-stage db-stage--tight\" style=\"background:#12100c\"><div class=\"db-row db-row--nowrap db-row--top\"><div class=\"db-col db-fill\"><span class=\"db-label\" style=\"color:#a49c8e\">Appointment date</span><span class=\"db-input\" style=\"background:#ffffff;color:#17150f;border-color:#c9c4bb\">14 / 03 / 2026</span><span class=\"db-note\" style=\"color:#a49c8e\">Browser-drawn parts stay light</span></div><span class=\"db-bar\" style=\"width:10px;height:104px;background:#e8e5df\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">color-scheme: light dark</span><div class=\"db-stage db-stage--tight\" style=\"background:#12100c\"><div class=\"db-row db-row--nowrap db-row--top\"><div class=\"db-col db-fill\"><span class=\"db-label\" style=\"color:#a49c8e\">Appointment date</span><span class=\"db-input\" style=\"background:#1a1712;color:#ede7da;border-color:#3a352c\">14 / 03 / 2026</span><span class=\"db-note\" style=\"color:#a49c8e\">Browser-drawn parts follow</span></div><span class=\"db-bar\" style=\"width:10px;height:104px;background:#262319\"></span></div></div></div></div>"
      },
      "what": "Two separate mechanisms do two separate jobs. The prefers-color-scheme media query reports what the operating system says the reader wants, so you can apply your own rules. The color-scheme property declares which schemes your page can render in, and the browser uses that to adjust the parts you do not style: the canvas background, scrollbars, default form control colours and browser-drawn interface such as spellcheck underlines. Setting color-scheme: light dark on the root, then using the light-dark() function for values, is now the compact way to write both themes. The value only light opts out of a browser's automatic dark-mode adjustment.",
      "why": "Honouring the system setting is the difference between a site that fits into someone's evening and one that flashes white at them. Declaring color-scheme is what stops the embarrassing half-state where your dark page has a white scrollbar and white text boxes.",
      "how": [
        "Set color-scheme on the root element for every theme you support, not just the media query.",
        "Default to the system preference, then offer an explicit override and remember the choice.",
        "Give any theme toggle three positions: light, dark and follow the system.",
        "Set a meta theme-color for each scheme so the mobile browser chrome matches."
      ],
      "example": "A dark page with color-scheme left unset renders a light scrollbar and light-chrome date pickers, which is a common tell that the dark theme was styled by hand and never declared.",
      "numbers": "",
      "pitfall": "Treating the media query as a reliable statement of intent. It reports an operating system setting, which many people never change and some devices schedule automatically, so an in-page override still matters.",
      "source": "W3C CSS Color Adjustment Module Level 1 for color-scheme; Media Queries Level 5 for prefers-color-scheme.",
      "verify": {
        "status": "verified",
        "note": "The distinction between the property and the media query, the list of interface elements color-scheme affects, the only light behaviour and the light-dark() pattern all read from MDN's color-scheme page, which cites CSS Color Adjustment Module Level 1."
      },
      "belongs": {
        "verdict": "core",
        "why": "Which theme a reader gets, and whether they can change it, is a design decision with a visible failure mode."
      },
      "related": [
        813,
        691,
        703
      ]
    },
    {
      "n": 815,
      "title": "Print stylesheet",
      "aka": [
        "@media print"
      ],
      "oneLine": "Design the printed version of pages people actually print, rather than letting the browser guess.",
      "demo": {
        "caption": "The same page sent to a printer. Left carries the navigation, banner and advert, and slices the table at the break.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No print stylesheet</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 206\"><text class=\"t\" x=\"4\" y=\"14\">PAGE 1 OF 4</text><rect class=\"s-mute\" x=\"40\" y=\"20\" width=\"106\" height=\"150\"/><rect class=\"f-mute\" x=\"46\" y=\"26\" width=\"94\" height=\"7\"/><rect class=\"s-mute\" x=\"46\" y=\"37\" width=\"94\" height=\"14\"/><rect class=\"f-mute\" x=\"50\" y=\"41\" width=\"56\" height=\"3\"/><rect class=\"f-mute\" x=\"50\" y=\"46\" width=\"40\" height=\"3\"/><rect class=\"s-mute\" x=\"46\" y=\"55\" width=\"94\" height=\"26\"/><text class=\"t\" x=\"93\" y=\"71\" text-anchor=\"middle\">ADVERT</text><rect class=\"f\" x=\"46\" y=\"88\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"46\" y=\"100\" width=\"94\" height=\"3\"/><rect class=\"f-mute\" x=\"46\" y=\"106\" width=\"94\" height=\"3\"/><rect class=\"f-mute\" x=\"46\" y=\"112\" width=\"70\" height=\"3\"/><rect class=\"s-mute\" x=\"46\" y=\"122\" width=\"94\" height=\"66\"/><path class=\"s-mute\" d=\"M46 136 H140 M46 150 H140 M46 164 H140 M46 178 H140\"/><path class=\"s-accent\" stroke-dasharray=\"3 3\" d=\"M34 170 H152\"/><text class=\"t\" x=\"4\" y=\"202\">TABLE CUT AT THE PAGE BREAK</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Print stylesheet</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 206\"><text class=\"t\" x=\"4\" y=\"14\">PAGE 1 OF 1</text><rect class=\"s-mute\" x=\"40\" y=\"20\" width=\"106\" height=\"150\"/><rect class=\"f\" x=\"46\" y=\"32\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"46\" y=\"44\" width=\"94\" height=\"3\"/><rect class=\"f-mute\" x=\"46\" y=\"50\" width=\"94\" height=\"3\"/><rect class=\"f-mute\" x=\"46\" y=\"56\" width=\"66\" height=\"3\"/><rect class=\"s-mute\" x=\"46\" y=\"68\" width=\"94\" height=\"56\"/><path class=\"s-mute\" d=\"M46 82 H140 M46 96 H140 M46 110 H140\"/><rect class=\"f-mute\" x=\"46\" y=\"132\" width=\"94\" height=\"3\"/><rect class=\"f-mute\" x=\"46\" y=\"138\" width=\"60\" height=\"3\"/><text class=\"t\" x=\"46\" y=\"152\" style=\"font-size:6px\">Fees (example.com/fees)</text><path class=\"s-accent\" stroke-dasharray=\"3 3\" d=\"M34 170 H152\"/><text class=\"t\" x=\"4\" y=\"202\">NOTHING CROSSES THE BREAK</text></svg></div></div></div>"
      },
      "what": "CSS now defines three media types: all, screen and print. The print type applies both to real printing and to print preview, and the older device-specific types such as handheld, tv and projection were deprecated in Media Queries Level 4. A print stylesheet strips what does not belong on paper, sets type in physical units, controls where pages break, and reveals information that was only implied on screen, such as the destination of a link.",
      "why": "Some pages get printed whatever you think: recipes, tickets, invoices, directions, price lists, consent forms. Those printouts are the version of your work someone puts on a fridge or hands across a counter. Leaving them to chance produces four pages of navigation and a QR code cut in half.",
      "how": [
        "Hide navigation, search, cookie notices, share buttons and anything else that cannot be tapped on paper.",
        "Force black text on white and remove background images, which most browsers drop anyway.",
        "Use break-inside: avoid on tables, figures and cards so they are not sliced across a page break.",
        "Print link destinations where they matter, using a::after { content: ' (' attr(href) ')' } on content links only.",
        "Set type in points for print, because that is the unit the printer works in."
      ],
      "example": "A recipe page that prints as one clean page of ingredients and method, with the header, related links and advert slots gone, is the whole argument for this in one artefact.",
      "numbers": "",
      "pitfall": "Printing every link's href, including navigation and social icons, which fills the page with parenthesised URLs and makes the printout harder to read than the screen version.",
      "source": "W3C Media Queries Level 4 for media types; CSS fragmentation properties for page breaks.",
      "verify": {
        "status": "verified",
        "note": "Read from MDN's @media page this session: the media type list is all, print and screen; print is 'intended for paged material and documents viewed on a screen in print preview mode'; and tty, tv, projection, handheld, braille, embossed and aural 'were deprecated in Media Queries 4 and shouldn't be used'."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a real output medium with its own layout, and for some page types it is the one the reader keeps."
      },
      "related": [
        816,
        819,
        678
      ]
    },
    {
      "n": 816,
      "title": "Semantics and structured data",
      "aka": [
        "Semantic HTML",
        "Schema.org markup"
      ],
      "oneLine": "Mark up what things are, in HTML for people and machines, and in schema.org for search engines.",
      "demo": {
        "caption": "Both pages look identical. The outline beside each is what a screen reader or a search engine actually receives.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Levels chosen for size</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--top db-row--nowrap\"><div class=\"db-col db-col--tight db-fill\"><span class=\"db-specimen\" style=\"font-size:20px\">Fees</span><span class=\"db-specimen\" style=\"font-size:13px\">Private</span><span class=\"db-lines\"><i></i><i></i></span><span class=\"db-specimen\" style=\"font-size:13px\">Plans</span><span class=\"db-lines\"><i></i><i></i></span></div><div class=\"db-col db-col--tight db-fill\"><span class=\"db-note\">H1 Fees</span><span class=\"db-note\" style=\"padding-left:30px\">H4 Private</span><span class=\"db-note\" style=\"padding-left:30px\">H4 Plans</span><span class=\"db-note db-note--accent\">Two levels skipped</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Levels describe the document</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--top db-row--nowrap\"><div class=\"db-col db-col--tight db-fill\"><span class=\"db-specimen\" style=\"font-size:20px\">Fees</span><span class=\"db-specimen\" style=\"font-size:13px\">Private</span><span class=\"db-lines\"><i></i><i></i></span><span class=\"db-specimen\" style=\"font-size:13px\">Plans</span><span class=\"db-lines\"><i></i><i></i></span></div><div class=\"db-col db-col--tight db-fill\"><span class=\"db-note\">H1 Fees</span><span class=\"db-note\" style=\"padding-left:12px\">H2 Private</span><span class=\"db-note\" style=\"padding-left:12px\">H2 Plans</span><span class=\"db-note db-note--accent\">Size set in CSS</span></div></div></div></div></div>"
      },
      "what": "Two related jobs sit under this heading. Semantic HTML means using elements for their meaning: a button element for a button, a heading hierarchy that describes the document, lists for lists, landmark elements such as nav, main and footer. Structured data is a separate layer that describes the entity a page is about, using the schema.org vocabulary, most often written as JSON-LD in a script tag. Schema.org was launched on 2 June 2011 by Bing, Google and Yahoo, with Yandex joining that November, and it supports Microdata, RDFa and JSON-LD.",
      "why": "The heading outline is the information architecture written down, so getting it right is a design act as much as a code one. Structured data is where facts a designer laid out visually, such as opening hours, address, price or review count, become machine-readable and change how the page is presented in a search result.",
      "how": [
        "Make the heading levels describe the document's structure, with no level skipped for visual reasons. Style separately.",
        "Use the real interactive elements. A div with a click handler is not a button and never behaves like one.",
        "Write structured data as JSON-LD, and only claim facts that are visible on the page.",
        "Validate the markup with a structured data testing tool before launch."
      ],
      "example": "A dental practice page that carries LocalBusiness structured data with its real address, telephone number and opening hours is describing, in machine form, the same facts the design already shows in the footer.",
      "numbers": "",
      "pitfall": "Structured data that contradicts the visible page, usually because someone updated the footer and not the JSON-LD. Search engines treat that as a quality signal, and readers treat it as a lie.",
      "source": "HTML Living Standard for element semantics; schema.org, launched 2 June 2011 by Bing, Google and Yahoo.",
      "verify": {
        "status": "verified",
        "note": "Launch date of 2 June 2011, the three founding search engines and Yandex joining in November 2011 confirmed from the Wikipedia article on Schema.org; the supported syntaxes (Microdata, RDFa, JSON-LD) confirmed from schema.org's own FAQ, which names the four current stewards but not the launch date."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "The semantics half overlaps entry 703 in the accessibility section, and structured data is a search-marketing format rather than a design principle. It stays because the heading outline is the information architecture in machine-readable form, and because designers are the people who decide which facts appear on the page at all."
      },
      "related": [
        703,
        704,
        817
      ]
    },
    {
      "n": 817,
      "title": "Share and Open Graph image design",
      "aka": [
        "og:image",
        "Social preview card"
      ],
      "oneLine": "Design the small picture that represents your page when someone pastes the link somewhere else.",
      "demo": {
        "caption": "Each card at full size, then at a third of it, which is roughly the size a link preview actually arrives at.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Page hero reused</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 110\"><text class=\"t\" x=\"8\" y=\"12\">FULL SIZE</text><rect class=\"s-mute\" x=\"8\" y=\"18\" width=\"120\" height=\"63\"/><rect class=\"f-mute\" x=\"8\" y=\"18\" width=\"120\" height=\"44\"/><text class=\"t\" x=\"13\" y=\"72\" style=\"font-size:4px\">Rebuilding the booking flow</text><text class=\"t\" x=\"140\" y=\"12\">IN A CHAT</text><rect class=\"s-mute\" x=\"140\" y=\"18\" width=\"40\" height=\"21\"/><rect class=\"f-mute\" x=\"140\" y=\"18\" width=\"40\" height=\"14.7\"/><text class=\"t\" x=\"141.7\" y=\"36\" style=\"font-size:1.33px\">Rebuilding the booking flow</text><text class=\"t\" x=\"8\" y=\"100\">HEADLINE GONE AT VIEWING SIZE</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Card drawn as a poster</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 110\"><text class=\"t\" x=\"8\" y=\"12\">FULL SIZE</text><rect class=\"s-mute\" x=\"8\" y=\"18\" width=\"120\" height=\"63\"/><path class=\"s-accent\" stroke-dasharray=\"3 3\" d=\"M14 24 H122 V75 H14 Z\"/><rect class=\"f-accent\" x=\"20\" y=\"28\" width=\"7\" height=\"7\"/><text class=\"t\" x=\"20\" y=\"48\" style=\"font-size:13px;fill:var(--ink)\">Fees,</text><text class=\"t\" x=\"20\" y=\"64\" style=\"font-size:13px;fill:var(--ink)\">plainly</text><text class=\"t\" x=\"140\" y=\"12\">IN A CHAT</text><rect class=\"s-mute\" x=\"140\" y=\"18\" width=\"40\" height=\"21\"/><rect class=\"f-accent\" x=\"144\" y=\"21.3\" width=\"2.3\" height=\"2.3\"/><text class=\"t\" x=\"144\" y=\"28.7\" style=\"font-size:4.33px;fill:var(--ink)\">Fees,</text><text class=\"t\" x=\"144\" y=\"34\" style=\"font-size:4.33px;fill:var(--ink)\">plainly</text><text class=\"t\" x=\"8\" y=\"100\">STILL READS AT VIEWING SIZE</text></svg></div></div></div>"
      },
      "what": "The Open Graph protocol, created at Facebook, lets a page describe itself to anything that unfurls a link. Four properties are required: og:title, og:type, og:image and og:url. The protocol itself sets no recommended pixel size; it only defines optional og:image:width, og:image:height and og:image:alt. The commonly quoted 1200 by 630 figure comes from Meta's own sharing guidance, not from the specification.",
      "why": "For many pages the share card is seen more often than the page. It appears in messages, feeds and chat previews at a few hundred pixels wide next to a title, so it works as a small poster rather than a photograph.",
      "how": [
        "Design at the recommended size and check it at roughly a third of that width, which is closer to how it is seen.",
        "Keep essential elements away from the edges, because platforms crop to different ratios.",
        "Set type large enough to read at thumbnail size. Six or seven words is usually the limit.",
        "Always set og:image:alt, and give og:image an absolute URL.",
        "Generate per-page cards where the title is worth showing, rather than one image for the whole site."
      ],
      "example": "Paste a link into a messaging app and look at it on a phone. If the headline in your card is unreadable at that size, the card is decoration rather than a preview.",
      "numbers": "Meta recommends at least 1200 by 630 pixels, a minimum of 600 by 315 for the larger card treatment, an absolute minimum of 200 by 200, and an aspect ratio close to 1.91:1. The Open Graph protocol itself specifies no size.",
      "pitfall": "Reusing the page's hero photograph. A hero is composed for a wide viewport with its text overlaid in HTML, so as a share card it becomes a random crop of a background with no message on it.",
      "source": "The Open Graph protocol, ogp.me, created at Facebook; Meta for Developers, sharing best practices for images.",
      "verify": {
        "status": "verified",
        "note": "Read ogp.me directly: it lists the four required properties, defines og:image:width, og:image:height and og:image:alt, and states no recommended pixel size. Meta's Images in Link Shares page was re-read this session and states all four figures: 'The minimum allowed image dimension is 200 x 200 pixels', 'Use images that are at least 1200 x 630 pixels for the best display on high resolution devices', 'At the minimum, you should use images that are 600 x 315 pixels to display link page posts with larger images', and 'keep your images as close to 1.91:1 aspect ratio as possible'. It also caps the file at 8 MB. These are Meta's numbers, not the protocol's."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is a small poster with a fixed frame and a fixed viewing size, which is a straightforward and often neglected design brief."
      },
      "related": [
        818,
        816,
        803
      ]
    },
    {
      "n": 818,
      "title": "Favicon and app icon set",
      "aka": [
        "Site icon",
        "Touch icon"
      ],
      "oneLine": "Redraw the mark for tiny sizes, and supply the whole set the platforms actually ask for.",
      "demo": {
        "caption": "The same mark at 72 pixels and then at 16 in a tab strip. Only one of the two survives the trip.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Full logo shrunk</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><svg class=\"db-svg\" viewBox=\"0 0 16 16\" style=\"width:72px;height:72px\"><circle class=\"s\" cx=\"8\" cy=\"8\" r=\"7\" style=\"stroke-width:0.4\"/><circle class=\"s\" cx=\"8\" cy=\"8\" r=\"4.6\" style=\"stroke-width:0.4\"/><path class=\"s\" style=\"stroke-width:0.4\" d=\"M8 1 V15 M1 8 H15 M3.1 3.1 L12.9 12.9\"/><rect class=\"f\" x=\"4\" y=\"13.4\" width=\"8\" height=\"0.5\"/></svg><div class=\"db-nav\"><span class=\"db-row db-row--tight\"><svg class=\"db-svg\" viewBox=\"0 0 16 16\" style=\"width:16px;height:16px\"><circle class=\"s\" cx=\"8\" cy=\"8\" r=\"7\" style=\"stroke-width:0.4\"/><circle class=\"s\" cx=\"8\" cy=\"8\" r=\"4.6\" style=\"stroke-width:0.4\"/><path class=\"s\" style=\"stroke-width:0.4\" d=\"M8 1 V15 M1 8 H15 M3.1 3.1 L12.9 12.9\"/><rect class=\"f\" x=\"4\" y=\"13.4\" width=\"8\" height=\"0.5\"/></svg><b>Our page</b></span><span class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\" style=\"width:16px;height:16px\"></span>Another tab</span></div><span class=\"db-note\">At 16 px the strokes merge</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Redrawn for 16 pixels</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><svg class=\"db-svg\" viewBox=\"0 0 16 16\" style=\"width:72px;height:72px\"><path class=\"f\" fill-rule=\"evenodd\" d=\"M1 8 A7 7 0 1 1 15 8 A7 7 0 1 1 1 8 Z M5 8 A3 3 0 1 0 11 8 A3 3 0 1 0 5 8 Z\"/><rect class=\"f\" x=\"6.9\" y=\"1\" width=\"2.2\" height=\"14\"/></svg><div class=\"db-nav\"><span class=\"db-row db-row--tight\"><svg class=\"db-svg\" viewBox=\"0 0 16 16\" style=\"width:16px;height:16px\"><path class=\"f\" fill-rule=\"evenodd\" d=\"M1 8 A7 7 0 1 1 15 8 A7 7 0 1 1 1 8 Z M5 8 A3 3 0 1 0 11 8 A3 3 0 1 0 5 8 Z\"/><rect class=\"f\" x=\"6.9\" y=\"1\" width=\"2.2\" height=\"14\"/></svg><b>Our page</b></span><span class=\"db-row db-row--tight\"><span class=\"db-sq db-sq--mute\" style=\"width:16px;height:16px\"></span>Another tab</span></div><span class=\"db-note\">Two shapes, still readable</span></div></div></div></div>"
      },
      "what": "Microsoft introduced the favicon with Internet Explorer 5 in March 1999: a 16 by 16 pixel file called favicon.ico in the site root. The modern set is larger. Browsers now accept PNG and SVG as well as ICO, Apple devices look for apple-touch-icon links, and a web app manifest supplies icons for home screens.",
      "why": "The favicon is your mark at its smallest and most repeated: a tab strip, a bookmark bar, a home screen full of competitors. It is the only piece of brand identity guaranteed to be seen at 16 pixels, far below the size any logo was drawn for.",
      "how": [
        "Redraw rather than shrink. Drop the wordmark, thicken strokes, reduce to one or two shapes.",
        "Test on a real tab strip beside twelve other tabs, in both a light and a dark browser theme.",
        "Supply an SVG favicon, an ICO fallback, an apple-touch-icon and manifest icons.",
        "Give touch and manifest icons an opaque background, because platforms mask them into their own shape.",
        "Use a media query inside the SVG if the mark needs to change for dark browser chrome."
      ],
      "example": "The Wikipedia favicon is a single W from the wordmark with everything else removed. At 16 pixels it is still recognisable, which the full puzzle-globe logo would not be.",
      "numbers": "Original favicon: 16 by 16 pixels, favicon.ico, in the site root. The apple-touch-icon sizes in common use are 152, 167 and 180 pixels square, and Android manifest icons are usually supplied in multiples of 48 pixels with 192 as the practical minimum. Those two sets are conventions rather than current published requirements.",
      "pitfall": "Shipping a downscaled full-colour logo. Thin strokes disappear, tight counters fill in, and a mark that reads perfectly on a business card becomes a coloured smudge in the tab.",
      "source": "Microsoft, Internet Explorer 5 (March 1999) for the original; the touch and manifest icon sizes are long-standing platform conventions rather than figures in Apple's current guidelines.",
      "verify": {
        "status": "adjusted",
        "note": "The origin (Microsoft, Internet Explorer 5, March 1999, favicon.ico in the site root) and the current format list are taken from the Wikipedia article on Favicon, which lists 16 by 16 among the standard ICO sizes. That the original was drawn at 16 by 16 comes from developer references rather than from that article. The 152, 167 and 180 apple-touch-icon sizes are widely used but were not found in Apple's current Human Interface Guidelines, which was opened this session and covers native app icons only, at 1024 by 1024 for iOS, iPadOS and macOS. They descend from Apple's now-archived Safari Web Content Guide. The Android figures were not checked against Google's documentation. The entry has been reworded to present both sets as conventions rather than standards."
      },
      "belongs": {
        "verdict": "core",
        "why": "Drawing a mark that survives at 16 pixels is a genuine identity design task with a hard constraint."
      },
      "related": [
        817,
        826,
        825
      ]
    },
    {
      "n": 819,
      "title": "404, error and offline pages",
      "aka": [
        "Error states",
        "Offline fallback"
      ],
      "oneLine": "Design the pages people reach when something is missing, broken or unreachable.",
      "demo": {
        "caption": "Left, a big number with no way onward, quietly served as a success. Right, one sentence, two routes, correct status.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No way out, wrong status</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-centre\"><span class=\"db-specimen\" style=\"font-size:52px\">404</span></div><span class=\"db-note db-note--accent\">Served with status 200</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Routes out, right status</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\"><div class=\"db-nav\"><b>Practice</b><span>Treatments</span><span>Fees</span></div><span class=\"db-type\">That page has moved. Two ways on from here.</span><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Homepage</span><span class=\"db-btn db-btn--ghost\">Treatments</span></div><span class=\"db-note db-note--accent\">Served with status 404</span></div></div></div></div>"
      },
      "what": "RFC 9110 defines 404 Not Found as the server not finding a current representation for the requested resource, or being unwilling to say one exists. It defines 410 Gone as access no longer being available, probably permanently. The same thinking covers 500 errors, empty search results, expired sessions and the offline page a service worker serves when the network has gone. These are ordinary screens with an unusual trigger, and they deserve the same care as any other screen.",
      "why": "Someone on an error page has already failed at what they came to do. The useful thing the page can do is say plainly what happened and give a short route onward. It is also a rare moment where a little personality is welcome, because the reader is mildly annoyed rather than concentrating.",
      "how": [
        "Say what happened in one plain sentence, without a status code as the headline.",
        "Give two or three concrete routes onward: search, the homepage, the main sections.",
        "Keep the navigation and branding, so the reader knows they are still on your site.",
        "Return the correct status code. A missing page that returns 200 is invisible to every tool you own.",
        "Use 410 for content removed deliberately, and serve an offline fallback through a service worker."
      ],
      "example": "Tim Kadlec's own 404 page opens by admitting that someone who obsesses over the web could at least keep his pages alive, tells you the page is not there and that he may have broken it, then offers the homepage and the blog. Plain words and two ways out.",
      "numbers": "HTTP 404 Not Found and 410 Gone, as defined in RFC 9110 sections 15.5.5 and 15.5.11.",
      "pitfall": "A clever illustrated 404 with no navigation and no search is a joke that leaves the reader stuck. The other common failure is the soft 404: a friendly error page served with a 200 status, so nothing ever reports the broken link.",
      "source": "IETF RFC 9110, HTTP Semantics (2022), sections 15.5.5 and 15.5.11.",
      "verify": {
        "status": "verified",
        "note": "Both status code definitions quoted from RFC 9110 on rfc-editor.org, sections 15.5.5 and 15.5.11. The Kadlec 404 page was observed directly this session at a non-existent URL on timkadlec.com, which returned a 404 status with that copy."
      },
      "belongs": {
        "verdict": "core",
        "why": "Error and empty states are screens a designer either draws or abandons to a default, and they arrive at the worst moment."
      },
      "related": [
        795,
        806,
        815
      ]
    },
    {
      "n": 9791,
      "title": "Viewport meta tag and user zoom",
      "aka": [
        "width=device-width",
        "The zoom lock"
      ],
      "oneLine": "One line of HTML decides whether a responsive design works at all, and whether people can zoom.",
      "demo": {
        "caption": "MDN's example on one 640 pixel screen. Without the tag the browser lays the page out at 980 pixels, then shrinks it.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No viewport meta tag</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 140\"><rect class=\"s-mute\" x=\"8\" y=\"10\" width=\"86\" height=\"118\" rx=\"4\"/><rect class=\"f-mute\" x=\"12\" y=\"16\" width=\"10\" height=\"2\"/><rect class=\"f-mute\" x=\"24\" y=\"16\" width=\"8\" height=\"2\"/><rect class=\"f-mute\" x=\"34\" y=\"16\" width=\"11\" height=\"2\"/><rect class=\"f-mute\" x=\"47\" y=\"16\" width=\"7\" height=\"2\"/><rect class=\"f-mute\" x=\"56\" y=\"16\" width=\"9\" height=\"2\"/><rect class=\"f-mute\" x=\"67\" y=\"16\" width=\"8\" height=\"2\"/><rect class=\"f-mute\" x=\"78\" y=\"16\" width=\"12\" height=\"2\"/><rect class=\"s-mute\" x=\"12\" y=\"22\" width=\"78\" height=\"14\"/><rect class=\"f-mute\" x=\"16\" y=\"26\" width=\"40\" height=\"2\"/><rect class=\"f-mute\" x=\"16\" y=\"30\" width=\"28\" height=\"2\"/><rect class=\"s-mute\" x=\"12\" y=\"40\" width=\"24\" height=\"28\"/><rect class=\"s-mute\" x=\"39\" y=\"40\" width=\"24\" height=\"28\"/><rect class=\"s-mute\" x=\"66\" y=\"40\" width=\"24\" height=\"28\"/><rect class=\"f-mute\" x=\"15\" y=\"44\" width=\"18\" height=\"2\"/><rect class=\"f-mute\" x=\"15\" y=\"48\" width=\"18\" height=\"2\"/><rect class=\"f-mute\" x=\"42\" y=\"44\" width=\"18\" height=\"2\"/><rect class=\"f-mute\" x=\"42\" y=\"48\" width=\"18\" height=\"2\"/><rect class=\"f-mute\" x=\"69\" y=\"44\" width=\"18\" height=\"2\"/><rect class=\"f-mute\" x=\"69\" y=\"48\" width=\"18\" height=\"2\"/><rect class=\"f-mute\" x=\"12\" y=\"72\" width=\"78\" height=\"2\"/><rect class=\"f-mute\" x=\"12\" y=\"77\" width=\"78\" height=\"2\"/><rect class=\"f-mute\" x=\"12\" y=\"82\" width=\"78\" height=\"2\"/><rect class=\"f-mute\" x=\"12\" y=\"87\" width=\"52\" height=\"2\"/><rect class=\"s-mute\" x=\"12\" y=\"94\" width=\"78\" height=\"12\"/><text class=\"t\" x=\"98\" y=\"54\">LAID OUT AT</text><text class=\"t\" x=\"98\" y=\"68\">980 PX WIDE</text><text class=\"t\" x=\"98\" y=\"82\">THEN SHRUNK</text><text class=\"t\" x=\"98\" y=\"96\">TEXT TINY</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">width=device-width, initial-scale=1</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 140\"><rect class=\"s-mute\" x=\"8\" y=\"10\" width=\"86\" height=\"118\" rx=\"4\"/><rect class=\"f\" x=\"12\" y=\"16\" width=\"20\" height=\"6\"/><rect class=\"s-mute\" x=\"78\" y=\"16\" width=\"12\" height=\"6\"/><rect class=\"f\" x=\"12\" y=\"30\" width=\"70\" height=\"7\"/><rect class=\"f\" x=\"12\" y=\"41\" width=\"52\" height=\"7\"/><rect class=\"f-mute\" x=\"12\" y=\"54\" width=\"78\" height=\"4\"/><rect class=\"f-mute\" x=\"12\" y=\"62\" width=\"78\" height=\"4\"/><rect class=\"f-mute\" x=\"12\" y=\"70\" width=\"78\" height=\"4\"/><rect class=\"f-mute\" x=\"12\" y=\"78\" width=\"50\" height=\"4\"/><rect class=\"s-mute\" x=\"12\" y=\"90\" width=\"78\" height=\"26\"/><text class=\"t\" x=\"98\" y=\"54\">LAID OUT AT</text><text class=\"t\" x=\"98\" y=\"68\">DEVICE WIDTH</text><text class=\"t\" x=\"98\" y=\"82\">640 PX</text><text class=\"t\" x=\"98\" y=\"96\">TEXT READABLE</text></svg></div></div></div>"
      },
      "what": "Without a viewport meta tag, mobile browsers lay a page out in a virtual window wider than the screen and then shrink the result to fit, so media queries never match the real screen and the text arrives tiny. MDN's worked illustration is a 640 pixel screen rendering the page at 980 pixels. The standard line is meta name=viewport with content of width=device-width, initial-scale=1. Two other values do damage: user-scalable=no and a maximum-scale of 1 both prevent pinch zoom. MDN notes that browser settings can ignore both and that iOS 10 and later ignores them by default, but shipping them still states an intent, and not every browser overrides them.",
      "why": "Every other responsive technique in this section depends on this tag being present and correct. Zoom matters for a different reason: enlarging a page is how many people with low vision read at all. MDN's own warning is blunt about it, saying that setting user-scalable to no 'prevents people experiencing low vision conditions from being able to read and understand page content', and pointing at WCAG's requirement for at least 2x scaling.",
      "how": [
        "Ship width=device-width, initial-scale=1 on every page and check it is actually in the head.",
        "Never set user-scalable=no or maximum-scale=1.",
        "Add viewport-fit=cover only when you are also handling safe area insets.",
        "Test at 200 per cent browser zoom as well as at narrow widths, because they are different failure modes."
      ],
      "example": "A responsive stylesheet with no viewport meta tag renders on a phone as a shrunken desktop layout. Nothing is wrong with the CSS; the browser was never told to use the real screen width.",
      "numbers": "MDN's illustration of the virtual viewport: a 640 pixel screen rendering pages at 980 pixels. WCAG requires a minimum of 2x scaling, per MDN's warning, which cites Success Criterion 1.4.4 Resize Text; MDN calls 5x the better target.",
      "pitfall": "Framework starter templates and older CMS themes that still carry user-scalable=no from a time when it was recommended for app-like pages. It survives in a head partial nobody reads.",
      "source": "MDN Web Docs, meta name=viewport, which cites CSS Viewport Module Level 1; W3C WCAG Success Criterion 1.4.4 Resize Text for the zoom requirement.",
      "verify": {
        "status": "verified",
        "note": "Added as a gap entry, and confirmed this session rather than left open. MDN's meta name=viewport page was read directly: the virtual viewport explanation with its 640 and 980 pixel example, the recommended width=device-width with initial-scale=1 line, the note that browser settings can ignore maximum-scale, minimum-scale and user-scalable and that iOS 10 and later ignores them by default, the accessibility warning quoted above with its 2x minimum and 5x best-practice figures, and the specification link to CSS Viewport Module Level 1. Cross-check against entries 692 and 693 for overlap before publishing."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is the precondition for every responsive technique here, and it is missing from the master list in a section that assumes it."
      },
      "related": [
        791,
        793,
        809
      ]
    },
    {
      "n": 9801,
      "title": "Resource hints and loading priority",
      "aka": [
        "preload, preconnect, prefetch",
        "fetchpriority",
        "Lazy loading"
      ],
      "oneLine": "Tell the browser what to fetch early, what to fetch late, and what matters most.",
      "demo": {
        "caption": "Same page, same time axis. Preloading moves the hero request to the start of the load, and the LCP marker with it.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Hero discovered late</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 116\"><text class=\"t\" x=\"2\" y=\"23\">HTML</text><rect class=\"f-mute\" x=\"48\" y=\"15\" width=\"30\" height=\"9\"/><text class=\"t\" x=\"2\" y=\"39\">CSS</text><rect class=\"f-mute\" x=\"78\" y=\"31\" width=\"26\" height=\"9\"/><text class=\"t\" x=\"2\" y=\"55\">JS</text><rect class=\"f-mute\" x=\"78\" y=\"47\" width=\"34\" height=\"9\"/><text class=\"t\" x=\"2\" y=\"71\">HERO</text><rect class=\"f-accent\" x=\"112\" y=\"63\" width=\"44\" height=\"9\"/><text class=\"t\" x=\"152\" y=\"60\" text-anchor=\"end\">FOUND LATE</text><path class=\"s-mute\" d=\"M48 86 H176\"/><path class=\"s-accent\" stroke-dasharray=\"3 3\" d=\"M156 12 V86\"/><text class=\"t\" x=\"48\" y=\"98\">TIME</text><text class=\"t\" x=\"156\" y=\"98\" text-anchor=\"middle\">LCP</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Hero preloaded, fetchpriority high</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 116\"><text class=\"t\" x=\"2\" y=\"23\">HTML</text><rect class=\"f-mute\" x=\"48\" y=\"15\" width=\"30\" height=\"9\"/><text class=\"t\" x=\"2\" y=\"39\">CSS</text><rect class=\"f-mute\" x=\"78\" y=\"31\" width=\"26\" height=\"9\"/><text class=\"t\" x=\"2\" y=\"55\">JS</text><rect class=\"f-mute\" x=\"78\" y=\"47\" width=\"34\" height=\"9\"/><text class=\"t\" x=\"2\" y=\"71\">HERO</text><rect class=\"f-accent\" x=\"52\" y=\"63\" width=\"44\" height=\"9\"/><text class=\"t\" x=\"100\" y=\"71\">PRELOADED</text><path class=\"s-mute\" d=\"M48 86 H176\"/><path class=\"s-accent\" stroke-dasharray=\"3 3\" d=\"M96 12 V86\"/><text class=\"t\" x=\"48\" y=\"98\">TIME</text><text class=\"t\" x=\"96\" y=\"98\" text-anchor=\"middle\">LCP</text></svg></div></div></div>"
      },
      "what": "The browser guesses at priority from where a resource appears in the document, and it guesses badly for anything discovered late. Preload tells it to fetch something now that it would otherwise find later. Preconnect opens the DNS, TCP and TLS handshake to another origin ahead of time. Prefetch grabs something for a likely next page. The fetchpriority attribute nudges a resource up or down within its own class. Setting loading=lazy defers an image until it comes near the viewport.",
      "why": "This is where the critical rendering path stops being theory. Two identical designs, one with the hero preloaded and the font preconnected and one without, can differ by a second or more of LCP on a phone.",
      "how": [
        "Preload the LCP image and the one or two fonts used above the fold, and nothing else.",
        "Preconnect only to origins you genuinely use on first render; each one costs a connection.",
        "Set loading=lazy on images below the fold, never on images in the first viewport.",
        "Give the LCP image fetchpriority=\"high\" so it is not queued behind decorative assets."
      ],
      "example": "web.dev's guidance is blunt about the commonest mistake: do not lazy-load images that are likely to be in the viewport when the page loads, especially LCP images, because the browser cannot start fetching until it has worked out where the image sits.",
      "numbers": "",
      "pitfall": "Preloading generously, which is self-defeating. Everything preloaded competes for the same bandwidth, so preloading six things makes all six arrive later than preloading one would have.",
      "source": "Google Chrome team, browser-level image lazy loading guidance on web.dev; resource hints are specified by the W3C.",
      "verify": {
        "status": "verified",
        "note": "The lazy-loading rule and the reason behind it were read directly from web.dev/articles/browser-level-image-lazy-loading, including the instruction not to lazy-load in-viewport and LCP images. I did not open the W3C Resource Hints specification this session, so no spec-level claims are made about preload or preconnect semantics beyond their ordinary documented behaviour."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "Marked adjacent for the same reason as entries 801 and 811: this is loading engineering rather than design. It stays because deciding which single image matters most is a design judgement about what the page is, and because it is the practical lever behind LCP."
      },
      "related": [
        798,
        801,
        802
      ]
    },
    {
      "n": 9803,
      "title": "Image format and compression choice",
      "aka": [
        "AVIF, WebP, JPEG, PNG, SVG"
      ],
      "oneLine": "Pick the format that suits the picture, then compress it until quality starts to show, not before.",
      "demo": {
        "caption": "Left, one hard edge as vector and as an enlarged raster. Right, MDN's byte figures for the same set of photographs.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Drawn artwork, enlarged</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 120\"><text class=\"t\" x=\"6\" y=\"14\">SVG</text><rect class=\"s-mute\" x=\"6\" y=\"18\" width=\"72\" height=\"72\"/><path class=\"f\" d=\"M10 86 L74 86 L74 26 Z\"/><text class=\"t\" x=\"92\" y=\"14\">RASTER AT 4X</text><rect class=\"s-mute\" x=\"92\" y=\"18\" width=\"72\" height=\"72\"/><rect class=\"f\" x=\"96\" y=\"78.5\" width=\"8.5\" height=\"7.5\"/><rect class=\"f\" x=\"104.5\" y=\"71\" width=\"8.5\" height=\"15\"/><rect class=\"f\" x=\"113\" y=\"63.5\" width=\"8.5\" height=\"22.5\"/><rect class=\"f\" x=\"121.5\" y=\"56\" width=\"8.5\" height=\"30\"/><rect class=\"f\" x=\"130\" y=\"48.5\" width=\"8.5\" height=\"37.5\"/><rect class=\"f\" x=\"138.5\" y=\"41\" width=\"8.5\" height=\"45\"/><rect class=\"f\" x=\"147\" y=\"33.5\" width=\"8.5\" height=\"52.5\"/><rect class=\"f\" x=\"155.5\" y=\"26\" width=\"8.5\" height=\"60\"/><rect class=\"f-mute\" x=\"101\" y=\"74\" width=\"3\" height=\"3\"/><rect class=\"f-mute\" x=\"110\" y=\"66\" width=\"3\" height=\"3\"/><rect class=\"f-mute\" x=\"118\" y=\"59\" width=\"3\" height=\"3\"/><rect class=\"f-mute\" x=\"127\" y=\"51\" width=\"3\" height=\"3\"/><rect class=\"f-mute\" x=\"144\" y=\"36\" width=\"3\" height=\"3\"/><rect class=\"f-mute\" x=\"152\" y=\"29\" width=\"3\" height=\"3\"/><text class=\"t\" x=\"6\" y=\"106\">ONE STAYS SHARP AT ANY SIZE</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Photographs, same source set</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 120\"><text class=\"t\" x=\"2\" y=\"31\">JPEG</text><rect class=\"f-mute\" x=\"48\" y=\"20\" width=\"92\" height=\"14\"/><text class=\"t\" x=\"144\" y=\"31\">100</text><text class=\"t\" x=\"2\" y=\"55\">WEBP</text><rect class=\"f\" x=\"48\" y=\"44\" width=\"64.4\" height=\"14\"/><text class=\"t\" x=\"116.4\" y=\"55\">70</text><text class=\"t\" x=\"2\" y=\"79\">AVIF</text><rect class=\"f-accent\" x=\"48\" y=\"68\" width=\"46\" height=\"14\"/><text class=\"t\" x=\"98\" y=\"79\">50</text><path class=\"s-mute\" d=\"M48 88 V16\"/><text class=\"t\" x=\"2\" y=\"104\">MDN, ONE JPEG SET:</text><text class=\"t\" x=\"2\" y=\"116\">WEBP -30%   AVIF -50%</text></svg></div></div></div>"
      },
      "what": "Entry 803 covers sending the right size. This covers sending the right kind of file. SVG is vector, so it stays sharp at any size and suits icons, diagrams and interface marks. PNG is lossless with full alpha, so it suits screenshots and anything needing exact pixels. JPEG is lossy with no alpha and remains the default for photographs. WebP and AVIF both do lossy and lossless with alpha and animation, at smaller sizes, with AVIF the smaller and WebP the more broadly supported.",
      "why": "Format choice is often the largest single saving available on a page, and only the person who made the asset can take it sensibly. It also has visual consequences: heavy JPEG compression smears text and hard edges, and flat illustration exported as JPEG picks up ringing artefacts that PNG or SVG would not have.",
      "how": [
        "Use SVG for anything drawn rather than photographed, and optimise it before shipping.",
        "Serve AVIF or WebP with a JPEG or PNG fallback, using the type attribute on picture source elements.",
        "Compress by eye, at the size the image will display, rather than to a fixed quality number.",
        "Watch flat gradients and skies, which band before anything else does."
      ],
      "example": "A screenshot of an interface saved as a JPEG shows visible fringing around every letter. The same file as a PNG or WebP is clean, and often smaller, because the picture is mostly flat colour.",
      "numbers": "MDN reports lossy WebP as on average 25 to 35 per cent smaller than JPEG at similar quality, lossless WebP as typically 26 per cent smaller than PNG, and AVIF as reaching a median 50 per cent reduction on a JPEG set where WebP reached 30 per cent.",
      "pitfall": "Choosing a format by habit. Logos exported as PNG at four times the needed size, and flat illustrations exported as JPEG, are the two most avoidable page-weight problems in client work.",
      "source": "MDN Web Docs, Image file type and format guide.",
      "verify": {
        "status": "verified",
        "note": "All three comparative figures re-checked against MDN's Image file type and format guide this session and quoted correctly: 'Lossy WebP images are on average 25-35% smaller than JPEG images of visually similar compression levels', 'Lossless WebP images are typically 26% smaller than the same images in PNG format', and 'median 50% vs. 30% compression for the same JPG set' for AVIF against WebP. These are MDN's summaries of published comparisons, not original measurements, and MDN sources the AVIF figure to CTRL Blog."
      },
      "belongs": {
        "verdict": "core",
        "why": "The asset's format and compression level are set by whoever produces the artwork, and both change how the image looks as well as what it costs."
      },
      "related": [
        803,
        798,
        797
      ]
    }
  ]
};
