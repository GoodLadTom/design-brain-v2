window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[31] = {
  "n": 31,
  "slug": "patterns",
  "title": "Interface patterns and states",
  "blurb": "States, patterns, forms and controls: what gets built with the principles, and how each piece is known to fail.",
  "intro": "The principles in section 14 say why interfaces work. This section is the catalogue of what gets built with them: the states a screen passes through, the patterns for finding and choosing, the anatomy of a form, the words on a button. Most of it comes from people who wrote down what worked rather than from experiments: the GOV.UK Design System, Luke Wroblewski's form research, Apple's and Google's platform guidelines, and Nielsen Norman Group's studies. Where a number exists, such as Penzo's 50 milliseconds for a label above a field or Wroblewski's 22 per cent from inline validation, it comes from one study and the entry says so. The rest is convention that has held up in practice, and is labelled as convention.",
  "sources": [
    "Brad A. Myers, The importance of percent-done progress indicators for computer-human interfaces, CHI (1985)",
    "John M. Carroll, The Nurnberg Funnel: Designing Minimalist Instruction (MIT Press, 1990)",
    "Jenifer Tidwell, Designing Interfaces (O'Reilly, 2005 and later editions)",
    "Luke Wroblewski, Inline Validation in Web Forms, A List Apart (2009), with Etre",
    "Luke Wroblewski, Mobile Design Details: Avoid The Spinner (lukew.com, 17 September 2013)",
    "W3C, Web Content Accessibility Guidelines 2.2 (SC 2.4.3, 1.4.13, 2.5.5, 2.5.8)",
    "Apple, Human Interface Guidelines (Buttons, Accessibility)",
    "Google, Material Design accessibility guidance on touch targets",
    "Tom Brinck, Darren Gergle and Scott D. Wood, Designing Web Sites that Work: Usability for the Web (Morgan Kaufmann, 2002)",
    "Nielsen Norman Group, Scrolling and Attention eyetracking study (2018)",
    "Denys Mishunov, True Lies Of Optimistic User Interfaces, Smashing Magazine (15 November 2016)",
    "Bill Chung, Everything you need to know about skeleton screens, UX Collective, and Viget, A Bone to Pick with Skeleton Screens (2017), which reach opposite conclusions",
    "Louis Rosenfeld and Peter Morville, Information Architecture for the World Wide Web, O'Reilly (1998; 2nd edn 2002)",
    "S. R. Ranganathan, Colon Classification (1933)",
    "Marcia J. Bates, The Design of Browsing and Berrypicking Techniques for the Online Search Interface, Online Review 13(5) (1989)",
    "Marti Hearst and the Flamenco project, University of California Berkeley; Design Recommendations for Hierarchical Faceted Search Interfaces (2006)",
    "Ben Shneiderman, The Eyes Have It: A Task by Data Type Taxonomy for Information Visualizations, IEEE Symposium on Visual Languages (1996)",
    "Bonnie Lida Rogers and Barbara S. Chaparro, Breadcrumb Navigation: Further Investigation of Usage, Usability News 5(2), Wichita State University (2003)",
    "Page Laubheimer, Sticky Headers: 5 Ways to Make Them Better, Nielsen Norman Group (2021)",
    "Hyrum Denney, A Sticky Menu Is Quicker To Navigate, Smashing Magazine (11 September 2012)",
    "Nielsen Norman Group, Infinite Scrolling: When to Use It, When to Avoid It",
    "Matteo Penzo, Label Placement in Forms, UXmatters (12 July 2006)",
    "Luke Wroblewski, Web Form Design: Filling in the Blanks, Rosenfeld Media (2008)",
    "GOV.UK Design System: question pages pattern, error summary and error message components",
    "Edward Scott, Consider Using Localized Input Masks for 'Phone' and Other Restricted Inputs, Baymard Institute (28 November 2017)",
    "W3C, Web Content Accessibility Guidelines 2.2 (SC 1.3.5, 1.4.3, 1.4.11, 2.2.1, 2.5.7, 3.3.1, 3.3.3)",
    "Ran Kivetz, Oleg Urminsky and Yuhuang Zheng, The Goal-Gradient Hypothesis Resurrected, Journal of Marketing Research 43(1) (2006)",
    "Joshua Porter, Writing Microcopy, Bokardo (2009)",
    "Kinneret Yifrah, Microcopy: The Complete Guide (2017 English edition)",
    "Apple, Human Interface Guidelines: Buttons, Privacy, Managing notifications",
    "Scott Hurff, The UI Stack, scotthurff.com (18 August 2015), excerpted from Designing Products People Love, O'Reilly (January 2016); after 37signals, The Three State Solution, in Getting Real (2004)",
    "Eric Meyer and Sara Wachter-Boettcher, Design for Real Life, A Book Apart (2016)",
    "Google, Material Design 2, Bidirectionality (the detailed mirroring rules; Material 2 is no longer maintained)",
    "Google Search Central, Breadcrumb (BreadcrumbList) structured data",
    "Alex Feyerke, Designing Offline-First Web Apps, A List Apart (4 December 2013)",
    "Leah Findlater and Joanna McGrenere, A Comparison of Static, Adaptive and Adaptable Menus, CHI (2004)",
    "William Lidwell, Kritina Holden and Jill Butler, Universal Principles of Design, Rockport (2003; revised 2010)",
    "Jakob Nielsen, End of Web Design, Nielsen Norman Group (2000)",
    "Tim Berners-Lee, Cool URIs Don't Change, W3C (1998)",
    "WHATWG HTML Standard and MDN, History.scrollRestoration"
  ],
  "entries": [
    {
      "n": 591,
      "title": "Empty states",
      "aka": [
        "Blank slate",
        "Zero data state"
      ],
      "oneLine": "What a screen shows before there is anything in it, designed rather than left blank.",
      "demo": {
        "caption": "Two versions of the same first screen. Only one says what belongs here and how to put something in it.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Left blank</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Your invoices</span><div class=\"db-card\" style=\"min-height:96px\"></div><span class=\"db-note\">Reads as broken, not as new</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Designed</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Your invoices</span><div class=\"db-card\" style=\"min-height:96px\"><div class=\"db-col db-col--tight\"><span>No invoices yet.</span><span class=\"db-note\">They appear here once you send one</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Create your first invoice</span></div></div></div><span class=\"db-note\">Filtered to nothing needs different words</span></div></div></div></div></div>"
      },
      "what": "Every list, inbox, dashboard and folder has a first moment with nothing in it, and it is the moment most likely to be seen by a new user and least likely to be designed. A useful empty state explains what belongs here, why the space is empty, and gives the one action that fills it. There are three distinct cases and they need different content: nothing created yet, nothing matching a filter or search, and nothing left because the user cleared it.",
      "why": "The empty state is the first screen of the product for a new user, so it is doing onboarding whether you designed it to or not. It also removes a specific fear, which is that the thing is broken. A blank panel with no explanation reads as a failure rather than a beginning.",
      "how": [
        "Design all three cases separately. No results for a search needs different words from no items yet.",
        "Put the primary action in the empty space itself, not only in a toolbar.",
        "Show what a filled version looks like, with a sample or an illustration of the real content.",
        "Do not use the empty state for a joke at the expense of an explanation. The user still needs to know what to do."
      ],
      "example": "A new project management board that shows a single Add your first task control in the middle of the empty column, rather than three grey columns and nothing else.",
      "numbers": "",
      "pitfall": "Only the first case gets designed. The user filters a list down to nothing, sees the friendly welcome message meant for new accounts, and thinks their data has been deleted.",
      "source": "Origin unclear. The equivalent term blank slate has been used by 37signals in Getting Real and on their design blog; empty state is standard practitioner vocabulary with no single originator.",
      "verify": {
        "status": "unverified",
        "note": "I could not find a primary source that originates empty states as a named principle. The nearest is 37signals: the public Getting Real text carries a chapter called The Blank Slate, and Basecamp later published a design post titled Backstage: Designing the new Basecamp blank slates, so the term is theirs in practice. The design guidance here reflects standard practice rather than a cited authority."
      },
      "belongs": {
        "verdict": "core",
        "why": "Every data-driven interface has these screens and they carry the first-run experience, so they need designing even without a canonical source."
      },
      "related": [
        599,
        592,
        600,
        608
      ]
    },
    {
      "n": 592,
      "title": "Loading and skeleton states",
      "aka": [
        "Skeleton screens",
        "Placeholder UI"
      ],
      "oneLine": "Show the shape of the content while it loads instead of a spinner over nothing.",
      "demo": {
        "caption": "Both are waiting for the same feed. The right one already shows where each post will land.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">A mark over nothing</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-centre\"><span class=\"db-dot db-dot--lg db-anim db-anim--pulse db-anim--linear\"></span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">The shape of what is coming</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col\"><div class=\"db-row db-row--nowrap\"><span class=\"db-sq db-sq--lg db-sq--mute\"></span><div class=\"db-lines db-fill\"><i></i><i></i></div></div><div class=\"db-row db-row--nowrap\"><span class=\"db-sq db-sq--lg db-sq--mute\"></span><div class=\"db-lines db-fill\"><i></i><i></i></div></div><div class=\"db-row db-row--nowrap\"><span class=\"db-sq db-sq--lg db-sq--mute\"></span><div class=\"db-lines db-fill\"><i></i><i></i></div></div></div></div></div></div></div>"
      },
      "what": "Luke Wroblewski described the technique on 17 September 2013, calling a skeleton screen a blank version of a page into which information is gradually loaded. His argument was that a spinner puts the user's attention on the waiting, while a skeleton puts it on the content arriving. He reported that after spinners were added to the Polar app users complained there was an excessive amount of waiting around, and that skeleton screens were used in several places to eliminate those spinners. Whether they also make the wait feel shorter is contested, and the testing since has gone both ways.",
      "why": "It gives the user something to read the structure of while they wait, and it avoids the jolt of a layout appearing all at once. It also stops the page collapsing to zero height and then jumping, which is a real problem rather than a perceived one.",
      "how": [
        "Match the skeleton to the real layout so nothing shifts when content lands.",
        "Use skeletons for content that is arriving, and a determinate indicator for a process that is running (595).",
        "Keep any shimmer slow and subtle. A fast pulsing animation draws attention back to the wait.",
        "Do not show a skeleton for a load that usually finishes in well under a second; the flash is worse than the wait."
      ],
      "example": "Facebook and LinkedIn feeds show grey blocks in the shape of posts before the posts arrive.",
      "numbers": "",
      "pitfall": "Skeletons that do not match the final layout. The user starts reading the shape, the real content lands in a different arrangement, and everything they were looking at moves.",
      "source": "Luke Wroblewski, Mobile Design Details: Avoid The Spinner (lukew.com, 17 September 2013); Bill Chung (UX Collective) and Viget (2017) for the contested perceived-speed evidence.",
      "verify": {
        "status": "disputed",
        "note": "The technique and its origin are verified: I read Wroblewski's post, dated 17 September 2013, which defines a skeleton screen as a blank version of a page into which information is gradually loaded, and describes the Polar case. The perceived-speed claim is genuinely contested and the two published tests disagree. Bill Chung (UX Collective, 80 participants) found skeletons were perceived as shorter than a spinner or a blank screen, but in his own summary not by much, with the blank screen worst. Viget (2017, 136 participants) found the opposite: skeleton viewers estimated the longest wait of the three, 2.82 seconds against 2.41 for a spinner and 2.29 for a blank screen, and concluded skeletons are not a silver bullet. Corrected during review: the entry previously reported only the favourable study and added an at-some-durations qualifier I could not source. Treat layout stability as the reliable benefit and perceived speed as unproven."
      },
      "belongs": {
        "verdict": "core",
        "why": "Loading is a state every networked interface has, and how it is drawn is a design decision with a named technique behind it."
      },
      "related": [
        593,
        594,
        595,
        571
      ]
    },
    {
      "n": 593,
      "title": "Optimistic UI",
      "aka": [
        "Optimistic updates"
      ],
      "oneLine": "Show the result of an action straight away and correct it if the server disagrees.",
      "demo": {
        "caption": "The tap happens at the same instant in both rows. Filled means the star is showing as starred.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 138\"><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M48 12 V118\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M234 12 V118\"/><text class=\"t\" x=\"34\" y=\"132\">tap</text><text class=\"t\" x=\"200\" y=\"132\">server replies</text><text class=\"t\" x=\"58\" y=\"28\">waits for the reply</text><circle class=\"s\" cx=\"48\" cy=\"48\" r=\"7\"/><path class=\"s-mute\" d=\"M57 48 H225\"/><circle class=\"f-accent\" cx=\"234\" cy=\"48\" r=\"7\"/><text class=\"t\" x=\"58\" y=\"80\">acts, then settles up</text><circle class=\"f-accent\" cx=\"48\" cy=\"98\" r=\"7\"/><path class=\"s-accent\" d=\"M57 98 H225\"/><circle class=\"f-accent\" cx=\"234\" cy=\"98\" r=\"7\"/><path class=\"s-mute\" stroke-dasharray=\"3 3\" d=\"M243 98 H284\"/><circle class=\"s\" cx=\"293\" cy=\"98\" r=\"7\"/><text class=\"t\" x=\"248\" y=\"82\">or reverts</text></svg></div>"
      },
      "what": "The interface assumes the request will succeed, updates immediately, and quietly reverts if it does not. The name borrows from optimistic concurrency control in databases. It suits small, low-stakes, reversible actions where failure is rare and the cost of being wrong for a second is trivial: liking, starring, reordering, adding to a basket. It does not suit anything involving money, irreversible changes or a result the user will act on immediately.",
      "why": "It removes the round trip from the user's experience of the interaction, so the interface responds at the speed of the device rather than the speed of the network. That is often the difference between an app that feels alive and one that feels remote.",
      "how": [
        "Restrict it to actions that are cheap to reverse and that fail rarely.",
        "Design the failure path first: how the state reverts, and how the user is told without a jarring dialog.",
        "Never do it for payments, submissions or anything the user will screenshot as proof.",
        "Keep a queue so actions taken offline apply when the connection returns, rather than being lost."
      ],
      "example": "A like button that fills in on tap and quietly returns to empty if the request fails offline.",
      "numbers": "",
      "pitfall": "Reverting silently. If the state flips back with no explanation the user assumes they mis-tapped and tries again, which can double the action when the request eventually lands.",
      "source": "Origin unclear as a named design principle; the term is established in web development practice and was set out for designers by Denys Mishunov in True Lies Of Optimistic User Interfaces, Smashing Magazine (2016).",
      "verify": {
        "status": "verified",
        "note": "Confirmed the pattern and terminology against Mishunov's Smashing Magazine article of 15 November 2016, which says plainly that no single thing could be called an optimistic UI and treats it as the mental model behind an implementation rather than one technique. No originator is claimed here because I found none. The 97 to 99 per cent success figure in that article is the author's own premise rather than measured data, so it is not repeated."
      },
      "belongs": {
        "verdict": "core",
        "why": "A design decision about when to lie to the user about state, with a defined failure behaviour. That is interaction design, not implementation detail."
      },
      "related": [
        592,
        594,
        571,
        563
      ]
    },
    {
      "n": 594,
      "title": "Perceived performance",
      "aka": [
        "Felt speed"
      ],
      "oneLine": "How fast something feels, which is a separate problem from how fast it is.",
      "demo": {
        "caption": "Two four-second waits drawn to the same length. Only the lower one shows anything before the end.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 320 124\"><text class=\"t\" x=\"10\" y=\"18\">nothing until it finishes</text><rect class=\"f-mute\" x=\"10\" y=\"24\" width=\"272\" height=\"10\"/><rect class=\"f-accent\" x=\"282\" y=\"24\" width=\"8\" height=\"10\"/><text class=\"t\" x=\"10\" y=\"62\">answers at once, fills in as it goes</text><rect class=\"f-accent\" x=\"10\" y=\"68\" width=\"6\" height=\"10\"/><rect class=\"f-mute\" x=\"16\" y=\"68\" width=\"120\" height=\"10\"/><rect class=\"f-accent\" x=\"136\" y=\"68\" width=\"154\" height=\"10\"/><text class=\"t\" x=\"22\" y=\"92\">heard you</text><text class=\"t\" x=\"136\" y=\"92\">first ten results</text><path class=\"s-mute\" d=\"M10 104 H290\"/><path class=\"s-mute\" d=\"M10 100 V108 M290 100 V108\"/><text class=\"t\" x=\"10\" y=\"120\">0s</text><text class=\"t\" x=\"278\" y=\"120\">4s</text></svg></div>"
      },
      "what": "Two operations of identical duration can feel very different depending on what happens during them. R. B. Miller set out response requirements for different kinds of interaction in 1968, and Nielsen's bands of 0.1, 1 and 10 seconds come from that work and from Card, Robertson and Mackinlay in 1991. Perceived performance is the set of moves that change the feeling without changing the clock: acknowledging input immediately, showing partial results, filling the wait with something informative, and starting work before it is asked for.",
      "why": "Real speed is expensive and has a floor set by physics and the user's network. Perceived speed is cheap and has no such floor. Improving it is usually the highest return available on a slow product, and it is the part a designer can act on without touching the backend.",
      "how": [
        "Respond to the input instantly even if the work takes seconds, so the user knows the system heard them.",
        "Show whatever you already have while the rest loads, rather than holding the whole screen back.",
        "Start fetching on hover or on press-down rather than on release, where the action is safe to prefetch.",
        "Never fake progress. A bar that stalls at 99 per cent does more damage than no bar at all."
      ],
      "example": "A search results page that renders the first ten results as they arrive rather than waiting for the count, the facets and the adverts to finish.",
      "numbers": "Nielsen's response bands, from Miller (1968) and Card et al. (1991): 0.1 second feels instantaneous, 1 second maintains flow of thought, 10 seconds is the limit of held attention.",
      "pitfall": "Using perceived performance as a substitute for fixing a genuinely slow system. It buys you patience, and patience runs out.",
      "source": "R. B. Miller, Response Time in Man-Computer Conversational Transactions (1968); Jakob Nielsen, Usability Engineering (1993), chapter 5.",
      "verify": {
        "status": "verified",
        "note": "The three response bands and their citations to Miller 1968 and Card et al. 1991 are taken from Nielsen's Response Times article, which states it is excerpted from chapter 5 of Usability Engineering (1993). The specific techniques listed are standard practice; no single source is claimed for the set."
      },
      "belongs": {
        "verdict": "core",
        "why": "Speed is experienced, not measured, and the gap between the two is a design space with published thresholds."
      },
      "related": [
        571,
        592,
        593,
        595
      ]
    },
    {
      "n": 595,
      "title": "Determinate versus indeterminate progress",
      "aka": [
        "Progress bar versus spinner"
      ],
      "oneLine": "Show how much is left when you know, and show that something is happening when you do not.",
      "demo": {
        "caption": "The same upload. Only the right one lets you decide whether to wait or go and do something else.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Indeterminate</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-dot db-anim db-anim--pulse db-anim--linear\"></span><span>Uploading</span></span><span class=\"db-note\">No scale, no end, no cancel</span><span class=\"db-note\">It has looked like this for 40 seconds</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Determinate</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>Uploading 68 of 200 photos</span><div class=\"db-bar db-fill\"><div class=\"db-bar db-bar--accent\" style=\"width:34%\"></div></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Cancel</span></div><span class=\"db-note\">Units you understand, and a way out</span></div></div></div></div></div>"
      },
      "what": "A determinate indicator reports a proportion completed. An indeterminate one only reports that work is under way. Brad Myers presented the case for percent-done indicators at CHI in 1985, testing 48 subjects and finding that 86.1 per cent liked them. The waits in that experiment were fixed by the design, so the bar saved nobody any time and was preferred anyway. Nielsen's rule is that anything past ten seconds needs a progress indicator and a way to cancel. Where the total is genuinely unknown, a running count of work done still beats a spinner, because it proves motion and hints at scale.",
      "why": "A determinate bar converts an unknown wait into a decision: stay or go and do something else. That is the actual value, and it is why people accept long waits with a bar and abandon short ones without.",
      "how": [
        "Use a determinate bar whenever you can calculate a proportion, even a rough one.",
        "Prefer units the user understands, such as uploading 7 of 200 photos, over a bare percentage.",
        "Where the total is unknown, show the running count rather than a spinner.",
        "Provide a cancel for anything long enough to need an indicator at all."
      ],
      "example": "A file copy dialog that names the current file and shows a filling bar, against a browser tab spinner that tells you nothing except that it has not given up.",
      "numbers": "Myers (CHI 1985): 48 subjects, mostly computer science graduate students with about one fifth computer novices; 86.1 per cent liked progress indicators, mean usefulness rating 2.94 on a scale where 1 is very useful and 9 is useless and annoying. Delays were held at a constant 10 seconds or varied randomly from 1 to 17 seconds, so the indicator changed no actual duration. Nielsen: past about 10 seconds, show a percent-done indicator and give a clearly signposted way to interrupt the operation.",
      "pitfall": "A bar that is not honest. Non-linear progress that races to 90 per cent and then crawls teaches users to ignore the bar entirely, which throws away the one benefit it had.",
      "source": "Brad A. Myers, The importance of percent-done progress indicators for computer-human interfaces, CHI (1985); Jakob Nielsen, Usability Engineering (1993).",
      "verify": {
        "status": "verified",
        "note": "Upgraded during review. The earlier pass could not get past the ACM paywall and left the figures out; I reached the full paper as a PDF and read it. It confirms 48 subjects, 86.1 per cent liking progress indicators, the 2.94 mean rating, and delays fixed at a constant 10 seconds or randomly varied from 1 to 17 seconds. Note the secondhand summaries describing 48 students are imprecise: the paper says most were computer science graduate students but about one fifth were computer novices. The 10 second threshold and the interrupt requirement are from Nielsen's response time limits, read this session."
      },
      "belongs": {
        "verdict": "core",
        "why": "A concrete choice between two feedback forms, with a published threshold for when feedback becomes compulsory."
      },
      "related": [
        594,
        592,
        571,
        563
      ]
    },
    {
      "n": 596,
      "title": "Inline validation timing",
      "aka": [
        "Live validation",
        "Reward early, punish late"
      ],
      "oneLine": "Check a field as the user finishes it, not while they are still typing it.",
      "demo": {
        "caption": "The same three keystrokes. On the left the field is red before there is anything there to judge.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Judged on every keystroke</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-input db-input--error\">j</span><span>Enter a valid email address</span></div></div><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-input db-input--error\">jo@</span><span>Enter a valid email address</span></div></div><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">jo@example.com</span><span class=\"db-note\">Accepted at last</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Judged on leaving the field</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">j</span><span class=\"db-note\">Still typing</span></div></div><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">jo@</span><span class=\"db-note\">Still typing</span></div></div><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-input\">jo@example.com</span><span class=\"db-note\">Checked once you tab away</span></div></div></div></div></div></div>"
      },
      "what": "Luke Wroblewski ran a study with the London usability firm Etre in 2009, testing six versions of the same form with 22 participants aged 21 to 49, including eye tracking. Validating after the user leaves a field beat validating during typing for most fields, because live feedback while typing caused hesitation. Validating before and while typing performed worst, with participants complaining that the field flashed red before they had a chance to answer. Fields with strict rules, such as usernames and passwords, were the exception and benefited from feedback during entry. Mihael Konjevic later named the hybrid rule reward early, punish late: once a field is already in error, revalidate immediately so the error clears as soon as it is fixed.",
      "why": "Timing decides whether validation feels like help or like being interrupted. Correct timing catches the mistake while the user is still thinking about that field, which is the only moment fixing it is cheap.",
      "how": [
        "Validate on blur by default, once the user has left the field.",
        "Validate during typing only where the rules are strict and unguessable, such as password requirements or username availability.",
        "Once a field is in error, switch to validating on every keystroke so the error clears the instant it is corrected.",
        "Never show an error for a field the user has not yet reached."
      ],
      "example": "A password field that shows its requirements ticking off as you type, next to an email field that says nothing until you tab away from it.",
      "numbers": "Wroblewski and Etre (2009), 22 participants: inline validation gave a 22 per cent increase in success rates, a 22 per cent decrease in errors, a 31 per cent increase in satisfaction ratings, a 42 per cent decrease in completion times and a 47 per cent decrease in eye fixations, compared with submit-and-refresh validation.",
      "pitfall": "Applying the same timing to every field. The strategy that helps on a password field is the one that annoys people most on a name field.",
      "source": "Luke Wroblewski with Etre, Inline Validation in Web Forms, A List Apart (2009); Mihael Konjevic, Inline validation in forms: designing the experience, for the reward early, punish late pattern.",
      "verify": {
        "status": "verified",
        "note": "Read the A List Apart article, published 1 September 2009: 22 users aged 21 to 49, six variations of a registration form, and the five figures quoted here. It names the after method, validating on blur, as most effective and the before-and-while method as worst, with a participant complaining that the field flashes red before you get the chance to put anything in. The reward early, punish late pattern is credited to Konjevic by both Smashing Magazine and Smart Interface Design Patterns, which link to his original article; I did not establish its publication date, so no year is given."
      },
      "belongs": {
        "verdict": "core",
        "why": "A timing decision made in every form, with a named study behind it and measured effects."
      },
      "related": [
        597,
        619,
        612,
        574
      ]
    },
    {
      "n": 597,
      "title": "Error message anatomy",
      "aka": [
        "Good error messages"
      ],
      "oneLine": "Say what went wrong in plain words, where it went wrong, and how to fix it.",
      "demo": {
        "caption": "The same declined card. Only the right one names the field, says it in plain words and offers the fix.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">A code, at the top of the page</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><span style=\"color:var(--sig-disputed)\">Transaction error 4102</span></div><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Card number</span><span class=\"db-input\">4242 4242 4242 4242</span></div></div><span class=\"db-note\">No what, no where, no how</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Plain words, beside the field, with the fix</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Card number</span><span class=\"db-input db-input--error\">4242 4242 4242 4242</span><span style=\"color:var(--sig-disputed)\">Your bank declined this card.</span><span class=\"db-row\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Try another card</span></span></div></div><span class=\"db-note\">What happened, which field, what to do</span></div></div></div></div>"
      },
      "what": "Nielsen's ninth heuristic sets the specification: error messages should be in plain language with no error codes, should indicate the problem precisely, and should constructively suggest a solution. That gives three parts. What happened, stated without blame. Which specific thing caused it, identified exactly. What to do next, as an action the user can actually take. A message missing the third part is a complaint rather than an error message.",
      "why": "An error is a moment where the user has already lost, and the message either recovers them or loses them permanently. Precise wording also cuts support volume, because the answer is in the message rather than in a queue.",
      "how": [
        "Name the specific field or item, not the form. Postcode not recognised beats Please check your details.",
        "Put the message beside the thing that caused it as well as in any summary.",
        "Write the fix as an instruction, and where you can, offer it as a control the user can press.",
        "Drop the codes, the apologies and the passive voice. Keep a reference code only where support genuinely needs it, and put it last."
      ],
      "example": "Card declined by your bank. Try a different card or contact your bank, sitting under the card number field, rather than a red banner reading Transaction error 4102.",
      "numbers": "",
      "pitfall": "Writing the error from the system's point of view. The user does not care that a validation constraint was violated; they care which box to change and what to put in it.",
      "source": "Jakob Nielsen, heuristic 9, help users recognise, diagnose and recover from errors (1994).",
      "verify": {
        "status": "verified",
        "note": "Read the exact wording of heuristic 9 on the NN/g ten heuristics page: plain language, no error codes, precisely indicate the problem, constructively suggest a solution. The three-part structure is my restatement of that sentence, not an additional claim."
      },
      "belongs": {
        "verdict": "core",
        "why": "One of the ten heuristics, and the piece of interface writing with the highest cost per word."
      },
      "related": [
        598,
        596,
        619,
        585
      ]
    },
    {
      "n": 598,
      "title": "Recovery paths",
      "aka": [
        "Error recovery",
        "Emergency exit"
      ],
      "oneLine": "Every failure needs a route back to a working state, not just an explanation.",
      "demo": {
        "caption": "Both pages come back from the same failure. Only the right one keeps what was typed and lands where it broke.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Flow recovered, data lost</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Payment failed at step 3 of 5</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Step 1 of 5 &#183; Your details</span><span class=\"db-input\">&#160;</span><span class=\"db-input\">&#160;</span><span class=\"db-input\">&#160;</span></div></div><span class=\"db-row\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Start again</span></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Flow and data both recovered</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Payment failed at step 3 of 5</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Step 3 of 5 &#183; Payment</span><span class=\"db-input\">Jo Bramble</span><span class=\"db-input\">14 Mill Lane, Leeds</span><span class=\"db-input\">LS6 2AN</span></div></div><span class=\"db-row\"><span class=\"db-btn db-btn--sm\">Try another card</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Retry</span></span></div></div></div></div>"
      },
      "what": "The other half of Nielsen's ninth heuristic. Recognising and diagnosing an error is useless without recovering from it, and his third heuristic asks for a clearly marked emergency exit from any unwanted state. In practice a recovery path means the user's data survives, the route back is visible on the failing screen, and it takes them somewhere they can act rather than to a generic home page.",
      "why": "Most abandonment happens at a failure, not at a decision. If the way back is visible and costs nothing, a failed step becomes a detour. If it is not, the failure becomes the end of the session.",
      "how": [
        "Put the recovery action on the error screen itself, as a control, not as advice.",
        "Preserve everything the user entered through the failure and back again (574).",
        "For a failed operation, offer retry as well as an alternative route, since many failures are transient.",
        "Design the 404 and the offline screen as real pages with search and the main routes, not as apologies."
      ],
      "example": "A payment failure page that keeps the whole basket and delivery details and shows Try another card as a button, rather than returning the user to an empty basket.",
      "numbers": "",
      "pitfall": "Recovering the flow but not the data. Sending the user back to step one of a five-step form with everything cleared is not a recovery path, it is a second failure.",
      "source": "Jakob Nielsen, heuristics 3 and 9 (1994).",
      "verify": {
        "status": "verified",
        "note": "Read the NN/g ten heuristics page for heuristic 3 (clearly marked emergency exit) and heuristic 9 (recover from errors). The specific practices listed are standard application of those heuristics rather than separately sourced claims."
      },
      "belongs": {
        "verdict": "core",
        "why": "Failure handling is a design responsibility, and the recovery route is the part most often left to whatever the framework does by default."
      },
      "related": [
        597,
        586,
        574,
        584
      ]
    },
    {
      "n": 599,
      "title": "First-run experience and onboarding by doing",
      "aka": [
        "Onboarding",
        "Minimalist instruction"
      ],
      "oneLine": "Teach the product by letting people do real work in it, not by showing them a tour.",
      "demo": {
        "caption": "Same product, first screen. One covers the page to explain five features; the other has the cursor already in a note.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Five slides before any work</span><div class=\"db-stage db-stage--tight\"><div class=\"db-stack\"><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class=\"db-centre\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Welcome to Notes</span><span>Pencil writes, folder files, star pins.</span><span class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">1 of 5</span><span class=\"db-btn db-btn--sm\">Next</span></span></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">The first real note</span><div class=\"db-stage db-stage--tight\"><div class=\"db-centre\"><div class=\"db-ui db-fill\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Untitled note</span><span class=\"db-row db-row--tight db-row--nowrap\"><span class=\"db-bar db-bar--tall db-bar--accent\" style=\"width:2px\"></span><span class=\"db-note\">start typing</span></span></div></div></div></div></div></div>"
      },
      "what": "John Carroll's research at IBM, gathered in The Nurnberg Funnel in 1990, set out minimalism as an approach to instruction. He cut explanatory and procedural text hard and let people learn by exploring while doing genuine tasks, on the finding that adults start acting immediately rather than reading first. One of his designs, the Training Wheels interface, blocked the functions a beginner did not need yet, so that a whole class of early mistakes could not be made. He reported that minimalist manuals produced faster learning than the conventional systems approach.",
      "why": "A tour is forgotten by the time it is needed, because nothing in it is attached to a task the person cares about. Learning attached to real work sticks, and it produces a user who has already achieved something rather than one who has watched a demonstration.",
      "how": [
        "Get the user to a first real result as fast as possible, using their own content rather than a sample.",
        "Cut the tour to the one or two things they cannot work out alone, and put the rest in context later (600).",
        "Consider turning off advanced functions at first, in the spirit of Training Wheels, rather than explaining them.",
        "Design the empty state as the first lesson, since it is the screen they land on (591)."
      ],
      "example": "A note-taking app that opens with the cursor in an empty note rather than a five-slide carousel about features.",
      "numbers": "",
      "pitfall": "Building a modal tour because the interface is confusing. The tour is a patch over a design problem, and it only works on the first session while the problem stays for every session after.",
      "source": "John M. Carroll, The Nurnberg Funnel: Designing Minimalist Instruction (MIT Press, 1990), including the Training Wheels interface.",
      "verify": {
        "status": "verified",
        "note": "Checked the book, MIT Press and the 1990 date, the nine minimalist principles, and the three designs (Guided Exploration, the Minimal Manual and the Training Wheels interface) against Farkas and Williams's published review of The Nurnberg Funnel and Carroll's own later paper Creating Minimalist Instruction. The review states that subjects using the Minimal Manual showed greater mastery and faster learning than those using systems approach manuals, and that Training Wheels reduced error recovery time. Wording tightened during review: Training Wheels blocked the unneeded functions rather than removing them, and it prevented a class of errors rather than all early mistakes."
      },
      "belongs": {
        "verdict": "core",
        "why": "A researched position on how people actually learn interfaces, and the basis for rejecting tour-first onboarding."
      },
      "related": [
        591,
        600,
        572,
        570
      ]
    },
    {
      "n": 600,
      "title": "In-context help",
      "aka": [
        "Help at the point of need",
        "Embedded assistance"
      ],
      "oneLine": "Put the explanation next to the thing it explains, at the moment it is needed.",
      "demo": {
        "caption": "The same question. Measure the distance from the question to its answer in each pane.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Answer kept on another page</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-nav\"><span>Basket</span><span>Delivery</span><b>Payment</b><span>Help</span></span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Security code</span><span class=\"db-input\">&#160;</span></div></div><span class=\"db-note\">Which three digits? Go and find out</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Answer between label and box</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-nav\"><span>Basket</span><span>Delivery</span><b>Payment</b><span>Help</span></span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Security code</span><span>The last 3 digits on the signature strip</span><span class=\"db-input\">&#160;</span></div></div><span class=\"db-note\">Nothing to go and find</span></div></div></div></div>"
      },
      "what": "Nielsen's tenth heuristic starts from the position that the system ideally needs no explanation, and treats documentation as necessary only where that fails. Where help is needed it should be findable at the point of the task rather than in a separate manual. Carroll's minimalism points the same way: people do not read ahead, so an explanation only lands if it arrives attached to the step it concerns.",
      "why": "Help placed somewhere else is help nobody reads. Putting the sentence beside the field turns documentation into part of the interface, and it also exposes how much of your help text exists to paper over confusing labels.",
      "how": [
        "Write the field label and hint so the help is unnecessary, then add help only where that fails.",
        "Keep the explanation visible next to the control rather than behind a hover or an icon (601).",
        "Answer the question the user has at that moment, not the whole feature.",
        "Track which help items get used. Heavy use of one hint is a defect report on the control beside it."
      ],
      "example": "The three-digit security code field on a card form, with a small diagram of where the code sits on the card printed next to it.",
      "numbers": "",
      "pitfall": "Treating a help panel as a fix for a bad label. If a field needs a paragraph, the field is wrong.",
      "source": "Jakob Nielsen, heuristic 10, help and documentation (1994); John M. Carroll, The Nurnberg Funnel (1990).",
      "verify": {
        "status": "verified",
        "note": "Read the wording of heuristic 10 on the NN/g ten heuristics page, which says it is best if the system needs no additional explanation. Carroll's position on learners not reading ahead is from the reviews of The Nurnberg Funnel checked for entry 599."
      },
      "belongs": {
        "verdict": "core",
        "why": "One of the ten heuristics, and the decision that determines whether documentation is part of the design or a separate deliverable."
      },
      "related": [
        599,
        601,
        597,
        615
      ]
    },
    {
      "n": 601,
      "title": "Tooltip use and misuse",
      "aka": [
        "Hover tips",
        "Title attribute"
      ],
      "oneLine": "A short label revealed on hover or focus, which must never hold anything essential.",
      "demo": {
        "caption": "Same three controls. Cover the hover tip, as a touch screen does, and the left toolbar has no names left.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">The tooltip is the only label</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 100\"><rect class=\"s-accent\" x=\"6\" y=\"4\" width=\"42\" height=\"17\" rx=\"3\"/><text class=\"t\" x=\"13\" y=\"16\">Bold</text><path class=\"s-accent\" d=\"M25 21 V32\"/><rect class=\"s-mute\" x=\"10\" y=\"34\" width=\"30\" height=\"30\" rx=\"3\"/><rect class=\"s-mute\" x=\"50\" y=\"34\" width=\"30\" height=\"30\" rx=\"3\"/><rect class=\"s-mute\" x=\"90\" y=\"34\" width=\"30\" height=\"30\" rx=\"3\"/><rect class=\"f\" x=\"20\" y=\"42\" width=\"10\" height=\"14\"/><path class=\"s\" d=\"M68 42 L62 56\"/><circle class=\"s\" cx=\"101\" cy=\"49\" r=\"4\"/><circle class=\"s\" cx=\"109\" cy=\"49\" r=\"4\"/><text class=\"t\" x=\"10\" y=\"84\">no pointer, no names at all</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">The tooltip only repeats the label</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 100\"><rect class=\"s-mute\" x=\"10\" y=\"34\" width=\"30\" height=\"30\" rx=\"3\"/><rect class=\"s-mute\" x=\"50\" y=\"34\" width=\"30\" height=\"30\" rx=\"3\"/><rect class=\"s-mute\" x=\"90\" y=\"34\" width=\"30\" height=\"30\" rx=\"3\"/><rect class=\"f\" x=\"20\" y=\"42\" width=\"10\" height=\"14\"/><path class=\"s\" d=\"M68 42 L62 56\"/><circle class=\"s\" cx=\"101\" cy=\"49\" r=\"4\"/><circle class=\"s\" cx=\"109\" cy=\"49\" r=\"4\"/><text class=\"t\" x=\"12\" y=\"76\">Bold</text><text class=\"t\" x=\"52\" y=\"76\">Italic</text><text class=\"t\" x=\"92\" y=\"76\">Link</text><text class=\"t\" x=\"10\" y=\"92\">named in every mode</text></svg></div></div></div>"
      },
      "what": "A tooltip names or briefly explains a control. It is not a place for instructions, links or forms. WCAG 2.2 success criterion 1.4.13, at level AA, sets three conditions for anything that appears on hover or focus: it must be dismissible without moving the pointer or focus, the pointer must be able to move over it without it disappearing, and it must stay visible until the trigger is removed, the user dismisses it or the information stops being valid. The browser's native title attribute meets none of these reliably and does not appear on touch at all.",
      "why": "Tooltips are the most common way essential information gets hidden from touch users, keyboard users and anyone reading at high magnification, where the tip can cover the very thing it describes. Getting the three conditions right is what separates a helpful label from a piece of content that some people simply never receive.",
      "how": [
        "Only ever put a repeat of the control's name or a short clarification in a tooltip. Never the only copy of anything.",
        "Trigger on focus as well as hover, so keyboard users get it too.",
        "Make the tip hoverable and dismissible with Escape, and give it a route on touch, usually a tap on an information control.",
        "Avoid the title attribute for anything you care about. Build the tooltip yourself."
      ],
      "example": "An icon-only toolbar button showing Bold on hover and focus, next to a form that puts its formatting rules in visible hint text rather than a tooltip.",
      "numbers": "WCAG 2.2 SC 1.4.13 Content on Hover or Focus is level AA and has three conditions: dismissible, hoverable, persistent.",
      "pitfall": "Icon-only toolbars where the tooltip is the only label. On a touch device the icons have no names at all, and the user is left guessing from pictograms.",
      "source": "W3C, WCAG 2.2 success criterion 1.4.13 Content on Hover or Focus (level AA).",
      "verify": {
        "status": "verified",
        "note": "Read the W3C Understanding SC 1.4.13 document for the three conditions and their exact wording and the level AA conformance. The point about the title attribute not appearing on touch follows from the hover media feature behaviour checked for entry 588."
      },
      "belongs": {
        "verdict": "core",
        "why": "A specific control governed by a testable standard, and a frequent source of content that some users never see."
      },
      "related": [
        588,
        600,
        808,
        587
      ]
    },
    {
      "n": 602,
      "title": "Scroll affordance and depth cues",
      "aka": [
        "The false bottom",
        "Cutting off the fold"
      ],
      "oneLine": "Make it visible that the page continues, or people will stop where it looks finished.",
      "demo": {
        "caption": "Both pages continue below this edge. Only the right one shows it, by letting a card be sliced by the fold.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Ends on a rule and empty space</span><div class=\"db-stage db-stage--tight\" style=\"height:158px\"><div class=\"db-col\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-bar db-bar--thin db-fill\"></div><span class=\"db-note\">looks finished</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">A card cut by the bottom edge</span><div class=\"db-stage db-stage--tight\" style=\"height:158px\"><div class=\"db-col\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div></div>"
      },
      "what": "People scroll happily, but they stop at anything that looks like an ending. Brinck, Gergle and Wood set the problem out as a false bottom in Designing Web Sites that Work in 2002: a page that appears to end while more content remains below. They use and illustrate the term rather than claim to have coined it. A full-width horizontal rule, a band of flat colour, or a hero section sized exactly to the viewport can all read as the end of the document. The fix is a depth cue, usually a piece of content cut off by the bottom edge, so the eye registers that something continues.",
      "why": "Attention drops sharply below the fold whether or not there is a false bottom, so you cannot afford to add an artificial stop on top of that. Nielsen Norman Group's 2018 eyetracking study found 57 per cent of viewing time was spent above the fold and 74 per cent within the first two screenfuls, with the same sharp drop-off they had recorded in 2010.",
      "how": [
        "Let something be visibly cut by the bottom of the viewport: a half-visible card, a heading, the top of an image.",
        "Avoid full-width horizontal rules and solid colour bands at the point where the viewport happens to end.",
        "Size hero sections to less than the full viewport height, so the next section peeks.",
        "Check the fold position at several common viewport heights, not just your own screen."
      ],
      "example": "A card grid where the third row is deliberately half-cut by the bottom of the screen, so it is obvious there is a fourth.",
      "numbers": "NN/g eyetracking (2018), 120 participants and over 130,000 fixations: 57 per cent of viewing time above the fold, 74 per cent within the first two screenfuls. The equivalent 2010 figure for above the fold was 80 per cent.",
      "pitfall": "Relying on a scroll arrow or a bouncing chevron instead of cutting content. The arrow is easy to miss and easy to read as decoration; a half-visible photograph is not.",
      "source": "Tom Brinck, Darren Gergle and Scott D. Wood, Designing Web Sites that Work: Usability for the Web (Morgan Kaufmann, 2002), for the false bottom; Nielsen Norman Group, Scrolling and Attention (2018), for the attention figures.",
      "verify": {
        "status": "verified",
        "note": "Confirmed the false bottom term in the text of Designing Web Sites that Work, which carries a figure captioned around a page with a false bottom that seems to end, and confirmed the authors, publisher and 2002 date. Softened during review from the claim that the book named the term, which I could not establish; the book uses it without claiming coinage. Read NN/g's Scrolling and Attention article directly for the 2018 figures: 120 participants, over 130,000 fixations, 57 per cent of viewing time above the fold, 74 per cent in the first two screenfuls, against 80 per cent above the fold in the 2010 research."
      },
      "belongs": {
        "verdict": "core",
        "why": "A layout decision with measured consequences for whether content below the fold is ever seen."
      },
      "related": [
        603,
        604,
        592,
        591
      ]
    },
    {
      "n": 603,
      "title": "Pagination versus infinite scroll",
      "aka": [
        "Load more",
        "Endless scroll",
        "Paged results"
      ],
      "oneLine": "How you break a long list: numbered pages, a Load More button, or content that never ends.",
      "demo": {
        "caption": "The same 412 results. Only the right frame contains an ending: a count, a pager, and a footer that stays put.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Infinite scroll: no end to reach</span><div class=\"db-stage db-stage--tight\" style=\"height:176px\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Numbered pages: the set is countable</span><div class=\"db-stage db-stage--tight\" style=\"height:176px\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i></div></div><span class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">412 results</span><span class=\"db-note\">1 2 3 &#8230; 12</span></span><span class=\"db-nav\"><span>Terms</span><span>Privacy</span><span>Contact</span></span></div></div></div></div>"
      },
      "what": "A long result set has to be delivered in pieces. Pagination hands the reader numbered pages and a clear total. Infinite scroll loads the next batch automatically as the reader nears the bottom. A Load More button sits between the two, fetching in place but only when asked. The three differ in who controls the fetch and whether the reader can tell how much is left.",
      "why": "The choice decides whether someone can judge the size of the set, find their way back to an item, and reach anything below the list. Automatic loading suits open-ended feeds where there is no finish line. Countable, comparable sets suit pages, because people compare across a page and then commit.",
      "how": [
        "Use pagination when the reader is choosing between options and needs to know how many there are.",
        "Use infinite scroll for feeds with no natural end and no footer worth reaching.",
        "If you load automatically, keep the URL in step with the batch on screen so the back button and a shared link both land in the right place.",
        "Never bury links a person needs (contact, terms, filters) in a footer that a self-loading list keeps pushing away.",
        "Offer a Load More button when you want the benefits of in-place loading without stealing control of the fetch."
      ],
      "example": "Google Search still paginates results; the Instagram home feed does not. Both are right for what they are: one is a set you compare and leave, the other is a stream you graze.",
      "numbers": "",
      "pitfall": "The footer trap. On an infinitely scrolling page the footer flashes into view and is immediately pushed off again, so keyboard and screen-reader users can never reach it, and neither can anyone hunting for the privacy link.",
      "source": "Nielsen Norman Group, Infinite Scrolling: When to Use It, When to Avoid It. Also discussed in a First Monday usability evaluation of web scrolling types.",
      "verify": {
        "status": "verified",
        "note": "Checked the Nielsen Norman Group article on infinite scrolling and a First Monday peer-reviewed comparison of normal, infinite, infinite-with-pagination and infinite-with-load-more scrolling. Both name the same failure modes: lost scroll position on return, and unreachable footers. I have not quoted the First Monday effect sizes because the reported statistics cover subjective ratings rather than a single headline number."
      },
      "belongs": {
        "verdict": "core",
        "why": "Every list of more than one screenful forces this decision, and it changes findability, shareability and accessibility at once."
      },
      "related": [
        602,
        604,
        607,
        634
      ]
    },
    {
      "n": 604,
      "title": "Sticky elements",
      "aka": [
        "Fixed header",
        "Persistent navigation",
        "Sticky menu"
      ],
      "oneLine": "Interface elements pinned in place while the page scrolls beneath them.",
      "demo": {
        "caption": "Two phones, one page. The grey bands are pinned bars; on the left they hold a third of the screen.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Three stickies, about 2:1</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 280 214\"><rect class=\"f-mute\" x=\"90\" y=\"4\" width=\"100\" height=\"24\"/><rect class=\"f-mute\" x=\"90\" y=\"28\" width=\"100\" height=\"20\"/><rect class=\"f-mute\" x=\"90\" y=\"186\" width=\"100\" height=\"24\"/><path class=\"s-mute\" d=\"M100 60 H180 M100 74 H180 M100 88 H180 M100 102 H180 M100 116 H180 M100 130 H180 M100 144 H180 M100 158 H180 M100 172 H148\"/><rect class=\"s-mute\" x=\"90\" y=\"4\" width=\"100\" height=\"206\"/><path class=\"s-accent\" d=\"M80 48 H86 M80 48 V186 M80 186 H86\"/><text class=\"t\" x=\"8\" y=\"20\">chrome 24</text><text class=\"t\" x=\"8\" y=\"42\">chrome 20</text><text class=\"t\" x=\"8\" y=\"120\">content 138</text><text class=\"t\" x=\"8\" y=\"202\">chrome 24</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One slim bar, about 13:1</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 280 214\"><rect class=\"f-mute\" x=\"90\" y=\"4\" width=\"100\" height=\"15\"/><path class=\"s-mute\" d=\"M100 32 H180 M100 46 H180 M100 60 H180 M100 74 H180 M100 88 H180 M100 102 H180 M100 116 H180 M100 130 H180 M100 144 H180 M100 158 H180 M100 172 H180 M100 186 H180 M100 200 H148\"/><rect class=\"s-mute\" x=\"90\" y=\"4\" width=\"100\" height=\"206\"/><path class=\"s-accent\" d=\"M80 19 H86 M80 19 V210 M80 210 H86\"/><text class=\"t\" x=\"8\" y=\"14\">chrome 15</text><text class=\"t\" x=\"8\" y=\"118\">content 191</text></svg></div></div></div>"
      },
      "what": "A sticky element stays put in the viewport while content moves. Headers, filter bars, table column headings and mobile action bars are the usual candidates. The trade is fixed access against permanently lost screen space, and the smaller the screen the worse that trade becomes.",
      "why": "Persistent navigation removes the scroll back to the top before every jump. Sticky table headers keep column meaning attached to rows far down a long table. The cost is paid on every screen by every reader whether they use the element or not.",
      "how": [
        "Work out the content-to-chrome ratio before you commit. Nielsen Norman Group treat roughly 13:1 on a phone as a fair trade and 2:1 as a bad one.",
        "Consider a partially persistent header that hides on scroll down and returns on scroll up, so the space is only spent when the reader looks like they want it.",
        "Add scroll-margin-top to anchor targets, or in-page links will land under the sticky bar.",
        "Do not stack stickies. One sticky header plus a sticky filter bar plus a sticky cookie notice leaves almost nothing on a phone."
      ],
      "example": "The New Yorker's mobile site is the case Nielsen Norman Group hold up as a reasonable trade-off, with a slim persistent bar rather than the full masthead.",
      "numbers": "Nielsen Norman Group cite a 13:1 content-to-chrome ratio on an iPhone 11 Pro as reasonable and 2:1 as poor, and suggest a 300 to 400ms slide-in for headers that reappear. Apple's Human Interface Guidelines set a minimum hit region of 44x44 pt (60x60 pt in visionOS), which puts a practical floor under bar height.",
      "pitfall": "The widely repeated claim that sticky menus are 22 per cent quicker to navigate comes from one informal test of 40 people written up on a design blog, not from peer-reviewed research, and it is routinely credited to Nielsen Norman Group, who did not run it.",
      "source": "Page Laubheimer, Sticky Headers: 5 Ways to Make Them Better, Nielsen Norman Group (4 April 2021). The 22 per cent figure is from Hyrum Denney, A Sticky Menu Is Quicker To Navigate, Smashing Magazine (11 September 2012).",
      "verify": {
        "status": "disputed",
        "note": "Read the Laubheimer article. The ratios are confirmed as written: The New Yorker at 13:1 on an iPhone 11 Pro is his example of a reasonable trade-off, Lollar Pickups at 2:1 on the same device is his bad one, and 300 to 400ms is his recommended slide-in for a partially persistent header. The 22 per cent figure is the disputed part. It traces to a 2012 Smashing Magazine article by Hyrum Denney reporting his own small informal test, and secondary sites routinely credit it to Nielsen Norman Group instead, which is wrong. Treat it as an anecdote."
      },
      "belongs": {
        "verdict": "core",
        "why": "A daily layout decision with a measurable cost in screen space and a known set of side effects on anchors and focus."
      },
      "related": [
        587,
        603,
        605,
        634
      ]
    },
    {
      "n": 605,
      "title": "Global, local, contextual and supplemental navigation",
      "aka": [
        "Embedded navigation systems",
        "Navigation taxonomy"
      ],
      "oneLine": "Four kinds of navigation that do different jobs and should not be merged into one menu.",
      "demo": {
        "caption": "The same links. On the right they split by job: a global bar, a local panel, a link inside the sentence.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One bar carrying every layer</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-row db-row--tight\"><span>Home</span><span>Tax</span><span>Self Assessment</span><span>Deadlines</span><span>Penalties</span><span>Appeals</span><span>A to Z</span><span>Sitemap</span></div></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Four layers, four treatments</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-nav\"><b>Home</b><span>Tax</span><span>Benefits</span></span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Self Assessment</span><span>Deadlines</span><span>Penalties</span><span>Appeals</span></div></div><p class=\"db-type\">Miss 31 January and you are charged a <span style=\"color:var(--accent);text-decoration:underline\">late filing penalty</span>.</p><span class=\"db-note\">A to Z &#183; Sitemap</span></div></div></div></div>"
      },
      "what": "Rosenfeld and Morville split navigation into embedded and supplemental systems. Embedded navigation has three layers: global, present on every page and giving access to the whole site; local, showing what sits near the current page in the structure; and contextual, the links written into the content itself. Supplemental systems sit outside the page structure and include sitemaps, indexes and guides.",
      "why": "Naming the four stops the common failure of piling everything into one top bar. Each layer answers a different question: where can I go from anywhere, where can I go from here, what is related to this thing, and how do I see the whole shape.",
      "how": [
        "Keep global navigation identical on every page, including the deepest ones.",
        "Give local navigation its own visual treatment so it does not read as another global menu.",
        "Write contextual links into the prose rather than dumping them in a Related box nobody reads.",
        "Build supplemental navigation (an A to Z, a sitemap) for the people who cannot find things through browsing, and do not count it as your main route."
      ],
      "example": "The GOV.UK topic pages show the pattern cleanly: a fixed global header, a topic-level local list, contextual links inside guidance text, and a separate A to Z of departments.",
      "numbers": "",
      "pitfall": "Local navigation that quietly replaces global navigation on deep pages. The reader loses the exit and starts using the back button as their only tool.",
      "source": "Louis Rosenfeld and Peter Morville, Information Architecture for the World Wide Web, O'Reilly (1998), chapter on navigation systems.",
      "verify": {
        "status": "verified",
        "note": "Checked the chapter structure and definitions of the book (Embedded Navigation Systems and Supplemental Navigation Systems appear as named sections in the published table of contents), and confirmed the global, local and contextual split against the O'Reilly chapter listing and multiple course summaries of it."
      },
      "belongs": {
        "verdict": "core",
        "why": "A working taxonomy that stops navigation design collapsing into a single menu, and it is the vocabulary information architects actually use."
      },
      "related": [
        606,
        608,
        645,
        648
      ]
    },
    {
      "n": 606,
      "title": "Breadcrumbs",
      "aka": [
        "Breadcrumb trail",
        "Path navigation"
      ],
      "oneLine": "A one-line trail showing where the current page sits in the hierarchy, with each step clickable.",
      "demo": {
        "caption": "Two trails above the same page. The left records this visitor's clicks; the right records where the page sits.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Path: the route taken</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Home &#8250; Search &#8250; Boots &#8250; Search &#8250; Trainers &#8250; Search &#8250; Boots</span><span class=\"db-note\">Grows on every click and differs per visitor</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Location: where the page sits</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\"><span style=\"color:var(--accent)\">Books</span> &#8250; <span style=\"color:var(--accent)\">Science Fiction</span> &#8250; Award Winners</span><span class=\"db-note\">Same for everyone, and the last step is not a link</span></div></div></div></div>"
      },
      "what": "A breadcrumb runs from the site root to the current page, usually as a slim line above the heading. Location breadcrumbs mirror the site structure and are the same for everyone. Path breadcrumbs mirror the route the individual took, which is a different and much less useful thing because it repeats itself and grows.",
      "why": "The trail does two jobs. It tells someone arriving from search what kind of place they have landed in, and it gives a one-click step up to the parent category. It also takes almost no space, so it costs little even for the people who ignore it.",
      "how": [
        "Show location, not history. The trail should be identical for two people looking at the same page.",
        "Make the current page the last item and do not link it.",
        "Mark it up as a BreadcrumbList in structured data so search engines can show the path instead of a raw URL.",
        "Follow the route people actually take rather than the URL structure. Google's guidance asks for the typical user path, and allows a page to carry more than one trail.",
        "Keep it small and quiet. A breadcrumb competing with the page heading is doing the wrong job."
      ],
      "example": "Google's own breadcrumb documentation shows the pattern as Books, then Science Fiction, then Award Winners, with the last item unlinked, and displays that trail in place of the URL in a result.",
      "numbers": "",
      "pitfall": "Reaching for a breadcrumb to patch a hierarchy that is too deep or badly named. If people need the trail to understand where they are, fix the structure first.",
      "source": "Long-standing web convention, named after Hansel and Gretel. Usage studied by Bonnie Lida Rogers and Barbara S. Chaparro, Breadcrumb Navigation: Further Investigation of Usage, Usability News 5(2), Wichita State University (2003). Jakob Nielsen argued for them in Breadcrumb Navigation Increasingly Useful, Nielsen Norman Group (2007). Markup guidance from Google Search Central, Breadcrumb (BreadcrumbList) structured data.",
      "verify": {
        "status": "verified",
        "note": "The structured-data half is quoted from Google's own breadcrumb documentation, including the worked Books, Science Fiction, Award Winners trail, the rule that the last item needs no link, and the guideline to represent a typical user path rather than mirror the URL structure. The Rogers and Chaparro 2003 study exists and asks whether people choose breadcrumbs and whether exposure improves their mental model of site structure; secondary sources report a 6 per cent click rate from it, but I did not read the full paper, so no percentage is quoted here. I removed the previous example, which asserted that BBC News carries a location breadcrumb above article headings: I could not confirm it and it is the kind of product claim that goes stale."
      },
      "belongs": {
        "verdict": "core",
        "why": "Cheap, standard, and one of the few navigation elements that carries no cost to the people who never use it."
      },
      "related": [
        605,
        634,
        648,
        649
      ]
    },
    {
      "n": 607,
      "title": "Faceted filtering",
      "aka": [
        "Faceted search",
        "Faceted navigation",
        "Guided navigation"
      ],
      "oneLine": "Filtering a set along several independent attributes at once, each narrowing the result count.",
      "demo": {
        "caption": "One branch to guess on the left. On the right, three independent axes, each stating what it would leave behind.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One taxonomy: pick the right branch</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>Shoes</span><span>&#160;&#160;&#160;Women's</span><span>&#160;&#160;&#160;&#160;&#160;&#160;Boots</span><span>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Black</span></div></div><span class=\"db-note\">Size 7 is filed somewhere else entirely</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three facets, combined in any order</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Size</span><span>6 (42) &#183; 7 (38) &#183; 8 (11)</span><span class=\"db-label\">Colour</span><span>Black (54) &#183; Tan (29) &#183; <span style=\"color:var(--ink-4)\">Red (0)</span></span><span class=\"db-label\">Price</span><span>Under &#163;50 (19) &#183; &#163;50 to &#163;100 (44)</span></div></div><span class=\"db-note\">The count is shown before the click, so nothing leads to nothing</span></div></div></div></div>"
      },
      "what": "Facets are independent axes of description. A shoe has a size, a colour, a brand and a price, and none of those determines the others. Faceted filtering lets someone combine selections across those axes in any order and see the set shrink as they go. It differs from a single taxonomy, where an item lives in one branch and you must guess the right one.",
      "why": "It removes the guessing. Someone who knows two things about what they want can state both without having to work out which one the site filed the item under. Live result counts also stop people driving themselves into an empty set.",
      "how": [
        "Show the count next to each facet value before it is applied, and grey out or hide values that would return nothing.",
        "Keep applied filters visible as removable chips, not just as ticked boxes further up a long sidebar.",
        "Order facets by how often they are actually used, and put the long ones (brand, size) behind a search box inside the facet.",
        "Let filters live in the URL so a filtered view can be bookmarked and shared."
      ],
      "example": "The John Lewis product listings, and the original Flamenco prototypes at Berkeley that established the pattern for image and recipe collections.",
      "numbers": "",
      "pitfall": "Zero-result dead ends. If a facet value can be selected but returns nothing, you have shifted the work of understanding your inventory onto the customer.",
      "source": "Faceted classification comes from S. R. Ranganathan's colon classification (1933). The interface pattern was developed in the 1990s and 2000s, most visibly by Marti Hearst's Flamenco project at the University of California, Berkeley.",
      "verify": {
        "status": "verified",
        "note": "Verified Ranganathan's 1933 colon classification as the origin of faceted classification, and the Flamenco project at Berkeley led by Marti Hearst as the main academic source of the faceted search interface, alongside work by Ben Shneiderman, Steven Pollitt and Gary Marchionini. Checked against the Flamenco project's own published design recommendations paper."
      },
      "belongs": {
        "verdict": "core",
        "why": "The dominant pattern for large catalogues, with a traceable origin in library science and a documented interface literature."
      },
      "related": [
        608,
        609,
        641,
        647
      ]
    },
    {
      "n": 608,
      "title": "Search versus browse",
      "aka": [
        "Query versus navigate",
        "Known-item versus exploratory search"
      ],
      "oneLine": "People arrive either knowing what they want or wanting to find out, and need different tools.",
      "demo": {
        "caption": "Left, the model a search box assumes. Right, what people do: the question changes and results are gathered piecemeal.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">The classic model</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 116\"><rect class=\"s-mute\" x=\"8\" y=\"30\" width=\"54\" height=\"20\"/><text class=\"t\" x=\"14\" y=\"44\">one query</text><path class=\"s-accent\" d=\"M66 40 H102\"/><path class=\"f-accent\" d=\"M102 36 L110 40 L102 44 Z\"/><rect class=\"s-mute\" x=\"114\" y=\"18\" width=\"64\" height=\"44\"/><rect class=\"f-mute\" x=\"120\" y=\"24\" width=\"9\" height=\"12\"/><rect class=\"f-mute\" x=\"134\" y=\"24\" width=\"9\" height=\"12\"/><rect class=\"f-mute\" x=\"148\" y=\"24\" width=\"9\" height=\"12\"/><rect class=\"f-mute\" x=\"120\" y=\"42\" width=\"9\" height=\"12\"/><rect class=\"f-mute\" x=\"134\" y=\"42\" width=\"9\" height=\"12\"/><rect class=\"f-mute\" x=\"148\" y=\"42\" width=\"9\" height=\"12\"/><text class=\"t\" x=\"114\" y=\"76\">one result set</text><text class=\"t\" x=\"8\" y=\"100\">the search ends here</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Berrypicking (Bates, 1989)</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 190 116\"><path class=\"s-accent\" d=\"M12 96 L48 74 L84 58 L124 38 L176 24\"/><circle class=\"f-accent\" cx=\"12\" cy=\"96\" r=\"3\"/><circle class=\"f-accent\" cx=\"48\" cy=\"74\" r=\"3\"/><circle class=\"f-accent\" cx=\"84\" cy=\"58\" r=\"3\"/><circle class=\"f-accent\" cx=\"124\" cy=\"38\" r=\"3\"/><circle class=\"f-accent\" cx=\"176\" cy=\"24\" r=\"3\"/><rect class=\"f\" x=\"22\" y=\"70\" width=\"7\" height=\"9\"/><rect class=\"f\" x=\"58\" y=\"52\" width=\"7\" height=\"9\"/><rect class=\"f\" x=\"96\" y=\"34\" width=\"7\" height=\"9\"/><rect class=\"f\" x=\"142\" y=\"18\" width=\"7\" height=\"9\"/><text class=\"t\" x=\"4\" y=\"110\">Q0</text><text class=\"t\" x=\"42\" y=\"90\">Q1</text><text class=\"t\" x=\"78\" y=\"74\">Q2</text><text class=\"t\" x=\"118\" y=\"54\">Q3</text><text class=\"t\" x=\"160\" y=\"40\">Q4</text><text class=\"t\" x=\"4\" y=\"14\">a bit picked up at each turn</text></svg></div></div></div>"
      },
      "what": "Searching means stating a target and getting matches. Browsing means moving through structure and recognising something. Marcia Bates argued in 1989 that real information seeking is neither, but a berrypicking process: the query itself changes as you go, and useful pieces are picked up along the way rather than delivered in one final result set.",
      "why": "If you only build search, people who cannot name what they want get nothing. If you only build browse, people who can name it are made to click through five levels. Berrypicking says the two have to interleave, because someone will search, browse the result, refine, and search again.",
      "how": [
        "Offer both routes from the same page, and let a search result lead back into the browse structure.",
        "Preserve the query when someone filters or sorts, so refining does not mean starting again.",
        "Support recognition as well as recall: show recent searches, saved items and viewed history.",
        "Treat a zero-result search as a browse prompt, offering categories rather than an apology."
      ],
      "example": "A library catalogue where a subject search returns records that each carry clickable subject headings, letting the reader jump from a found item into the surrounding category.",
      "numbers": "",
      "pitfall": "Treating search as the escape hatch for bad structure. If the search box is doing all the work, the navigation has failed and the search log will tell you exactly where.",
      "source": "Marcia J. Bates, The Design of Browsing and Berrypicking Techniques for the Online Search Interface, Online Review 13(5), pp. 407-424 (1989).",
      "verify": {
        "status": "verified",
        "note": "Verified Bates's 1989 berrypicking paper against her own copy hosted at UCLA, including the distinction she draws between searching and browsing and the claim that the query evolves during the search."
      },
      "belongs": {
        "verdict": "core",
        "why": "It sets the shape of the whole interface, deciding whether search and structure are two systems or one."
      },
      "related": [
        605,
        607,
        646,
        649
      ]
    },
    {
      "n": 609,
      "title": "Sorting and filtering models",
      "aka": [
        "Dynamic queries",
        "Refinement controls"
      ],
      "oneLine": "Filtering removes items from a set; sorting reorders the same set. Do not let one masquerade as the other.",
      "demo": {
        "caption": "Six items. The middle group is the same six in a new order; the bottom group is three of them.",
        "html": "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">The set &#183; six items</span><span class=\"db-bar db-bar--thin\" style=\"width:40%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:75%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:20%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:95%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:55%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:30%\"></span></div><div class=\"db-col db-col--tight\"><span class=\"db-label\">Sorted, longest first &#183; still six items</span><span class=\"db-bar db-bar--thin\" style=\"width:95%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:75%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:55%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:40%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:30%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:20%\"></span></div><div class=\"db-col db-col--tight\"><span class=\"db-label\">Filtered to over 50 &#183; three items, original order</span><span class=\"db-bar db-bar--thin\" style=\"width:75%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:95%\"></span><span class=\"db-bar db-bar--thin\" style=\"width:55%\"></span></div></div></div>"
      },
      "what": "A filter changes membership. A sort changes sequence. Shneiderman's 1996 information-seeking mantra puts them in order: overview first, zoom and filter, then details on demand. His earlier work on dynamic queries added the rule that the result should update as the control moves, not after a submit, so the person sees the effect of the constraint immediately.",
      "why": "Keeping the two distinct stops the classic confusion where someone sorts by price and thinks the expensive items have been removed. Immediate feedback also turns filtering into exploration, because a slider that shows the set shrinking teaches you the shape of the data.",
      "how": [
        "Put sorting and filtering in visually separate groups and label them with what they do to the set.",
        "Update results live where the query is cheap, and show a count so the effect of each constraint is visible.",
        "Always show the current sort and the current filters together above the results.",
        "Give a single Clear all that returns to the unfiltered overview, and keep the sort separate from it."
      ],
      "example": "Shneiderman's HomeFinder prototype at Maryland, where dragging a price slider redrew the map of matching houses as you moved it, is the canonical dynamic-query demonstration.",
      "numbers": "",
      "pitfall": "A hidden filter left over from the previous visit. The person sees an incomplete set, assumes you do not stock the thing, and leaves.",
      "source": "Ben Shneiderman, The Eyes Have It: A Task by Data Type Taxonomy for Information Visualizations, IEEE Symposium on Visual Languages (1996), and his earlier dynamic query work.",
      "verify": {
        "status": "verified",
        "note": "Verified the wording of the visual information-seeking mantra, overview first, zoom and filter, then details-on-demand, and its attribution to Shneiderman 1996, against the InfoVis wiki entry and a peer-reviewed paper analysing the mantra (Craft and Cairns)."
      },
      "belongs": {
        "verdict": "core",
        "why": "Sorting and filtering are the two controls almost every list interface offers, and confusing them is a common, fixable error."
      },
      "related": [
        607,
        603,
        610
      ]
    },
    {
      "n": 610,
      "title": "Selection and bulk actions",
      "aka": [
        "Multi-select",
        "Batch operations"
      ],
      "oneLine": "Pick a set of objects first, then choose one action that applies to all of them.",
      "demo": {
        "caption": "Same button, same code. Only the right bar says how many rows are about to go, and which ones.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Scope unstated</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-row db-row--between db-row--nowrap\"><span>Select all</span><span class=\"db-btn db-btn--sm db-btn--danger\">Delete</span></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div><span class=\"db-note\">The 50 on this page, or all 4,312?</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Scope and count both stated</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-ui\"><div class=\"db-row db-row--between db-row--nowrap\"><span>50 on this page</span><span class=\"db-btn db-btn--sm db-btn--danger\">Delete 50</span></div></div><div class=\"db-card\"><div class=\"db-lines\"><i></i><i></i></div></div><span class=\"db-note\">Or select all 4,312 matching this filter</span></div></div></div></div>"
      },
      "what": "Bulk action interfaces follow object-action order: the person selects rows, files or messages, and only then picks what to do. The pattern needs three things to work. The selection has to stay visible, the count has to be stated, and the available actions have to change to match what is actually selected.",
      "why": "Doing the same thing thirty times is the most common reason people abandon an admin tool. Selecting first also means the action bar can tell them how many items they are about to affect, which is the last chance to catch a mistake before something irreversible happens.",
      "how": [
        "State the count in the action bar (Delete 14 items), not just on the button.",
        "Handle select-all honestly: distinguish the 50 rows on this page from all 4,312 matching the filter, and say which one the person has chosen.",
        "Disable or hide actions that cannot apply to the whole selection rather than failing halfway through.",
        "Report partial failure per item. Fifty succeeded and three failed is useful; an error toast is not."
      ],
      "example": "Gmail's checkbox column with the banner offering to extend the selection from the 50 conversations on this page to all conversations in the label.",
      "numbers": "",
      "pitfall": "Silent partial failure. The job runs, some items are skipped for permission reasons, and the interface says Done, so the person believes work happened that did not.",
      "source": "Origin unclear as a named principle. The underlying rule is object-action (noun-verb) interaction order, covered separately at 579.",
      "verify": {
        "status": "unverified",
        "note": "I looked for an originating source for bulk actions as a named design pattern and did not find one. It is a widespread craft convention documented in platform guidelines and pattern libraries rather than a principle traceable to a person or paper. The object-action ordering it rests on is a real and separately sourced idea; the bulk-action pattern itself I could not attribute."
      },
      "belongs": {
        "verdict": "core",
        "why": "Any interface that lists records needs it, and the details (count, select-all scope, partial failure) are exactly where designers get it wrong."
      },
      "related": [
        579,
        585,
        609,
        623
      ]
    },
    {
      "n": 611,
      "title": "Drag-and-drop feedback",
      "aka": [
        "Direct manipulation feedback",
        "Drag affordance"
      ],
      "oneLine": "Dragging must show what is carried and where it lands, and always offer a non-drag alternative.",
      "demo": {
        "caption": "Left: the region lights up and dragging is the only route. Right: a line marks the landing point, buttons offer another.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Whole region highlighted, drag only</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\" style=\"background:var(--accent-soft)\"><div class=\"db-col db-col--tight\"><div class=\"db-card\">Task A</div><div class=\"db-card\">Task B</div><div class=\"db-card\">Task C</div></div></div><span class=\"db-note\">Between which two? And only a drag will do it</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Drop line, plus a route without dragging</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-card\">Task A</div><span class=\"db-bar db-bar--thin db-bar--accent\"></span><div class=\"db-card\">Task B</div><div class=\"db-card\">Task C</div></div></div><span class=\"db-row\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Move up</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Move to&#8230;</span></span></div></div></div></div>"
      },
      "what": "A drag interaction has three moments that need feedback: the grab, where the item should visibly lift; the travel, where the drop target must reveal itself; and the drop, where the item settles into its new position rather than teleporting. WCAG 2.2 added a fourth requirement. Success Criterion 2.5.7, Dragging Movements, at Level AA, says any function that uses a dragging movement must also work with a single pointer without dragging, unless dragging is essential.",
      "why": "Dragging is the most physically demanding pointer action there is, and it fails for tremor, limited dexterity, trackpad users and anyone on a bad connection. Providing a button or a text input alongside the drag costs little and makes the feature usable by everybody.",
      "how": [
        "Show a drop indicator, a line or gap, rather than only highlighting a whole region.",
        "Animate the settle so the eye can follow where the item went.",
        "Add a non-drag route: a Move to menu, cut and paste, up and down buttons, or a numeric position field.",
        "Make the drag handle a real target of at least 44 by 44 CSS pixels and label it for screen readers.",
        "Support Escape to cancel mid-drag and return the item to where it started."
      ],
      "example": "Trello lets you drag a card between lists and also offers a Move item action in the card menu, which satisfies the single-pointer requirement.",
      "numbers": "WCAG 2.2 Success Criterion 2.5.7 Dragging Movements, Level AA. WCAG 2.2 Success Criterion 2.5.8 Target Size (Minimum), Level AA, sets 24 by 24 CSS pixels; Apple's Human Interface Guidelines ask for 44 by 44 pt.",
      "pitfall": "Building drag as the only way to reorder. Kanban tools do this constantly and lock out anyone who cannot hold a button down while moving a pointer accurately.",
      "source": "W3C, Web Content Accessibility Guidelines 2.2, Success Criterion 2.5.7 Dragging Movements (Level AA).",
      "verify": {
        "status": "verified",
        "note": "Quoted from the W3C Understanding document for SC 2.5.7, which states that all functionality using a dragging movement can be achieved by a single pointer without dragging unless dragging is essential or the functionality is determined by the user agent. Also confirmed the note that a text input can be an acceptable single-pointer alternative."
      },
      "belongs": {
        "verdict": "core",
        "why": "Direct manipulation is a design decision with an explicit accessibility requirement attached, so a designer needs both halves."
      },
      "related": [
        578,
        587,
        589,
        610
      ]
    },
    {
      "n": 612,
      "title": "Label placement in forms",
      "aka": [
        "Top-aligned labels",
        "Right-aligned labels",
        "Floating labels"
      ],
      "oneLine": "Where the label sits relative to the field changes how fast the form reads and how well it survives translation.",
      "demo": {
        "caption": "Three placements of the same two labels. The accent line is the trip the eye makes from label to box.",
        "html": "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 332 134\"><text class=\"t\" x=\"2\" y=\"14\">Above</text><text class=\"t\" x=\"4\" y=\"40\">Name</text><rect class=\"s-mute\" x=\"4\" y=\"46\" width=\"92\" height=\"18\"/><text class=\"t\" x=\"4\" y=\"86\">Postcode</text><rect class=\"s-mute\" x=\"4\" y=\"92\" width=\"92\" height=\"18\"/><path class=\"s-accent\" d=\"M8 36 V52\"/><circle class=\"f-accent\" cx=\"8\" cy=\"36\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"8\" cy=\"52\" r=\"2.5\"/><text class=\"t\" x=\"4\" y=\"126\">shortest trip</text><text class=\"t\" x=\"114\" y=\"14\">Right-aligned</text><text class=\"t\" x=\"158\" y=\"59\" text-anchor=\"end\">Name</text><rect class=\"s-mute\" x=\"164\" y=\"46\" width=\"48\" height=\"18\"/><text class=\"t\" x=\"158\" y=\"105\" text-anchor=\"end\">Postcode</text><rect class=\"s-mute\" x=\"164\" y=\"92\" width=\"48\" height=\"18\"/><path class=\"s-accent\" d=\"M134 55 H170\"/><circle class=\"f-accent\" cx=\"134\" cy=\"55\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"170\" cy=\"55\" r=\"2.5\"/><text class=\"t\" x=\"114\" y=\"126\">ragged label edge</text><text class=\"t\" x=\"226\" y=\"14\">Left-aligned</text><text class=\"t\" x=\"226\" y=\"59\">Name</text><rect class=\"s-mute\" x=\"280\" y=\"46\" width=\"48\" height=\"18\"/><text class=\"t\" x=\"226\" y=\"105\">Postcode</text><rect class=\"s-mute\" x=\"280\" y=\"92\" width=\"48\" height=\"18\"/><path class=\"s-accent\" d=\"M226 55 H286\"/><circle class=\"f-accent\" cx=\"226\" cy=\"55\" r=\"2.5\"/><circle class=\"f-accent\" cx=\"286\" cy=\"55\" r=\"2.5\"/><text class=\"t\" x=\"226\" y=\"126\">widest gap</text></svg></div>"
      },
      "what": "There are three serious options and one popular bad one. Labels above the field give the shortest eye movement between label and input and cope with long translated strings. Labels to the left, right-aligned against the field, make a tight vertical column but are hard to scan. Labels to the left, left-aligned, scan well but leave a wide gap. The bad option is the placeholder used as a label, which vanishes the moment someone types.",
      "why": "Every extra eye movement between reading a label and typing in a field is repeated for every field in the form. Placement also decides whether the layout survives German, and whether the label is still on screen when a mobile keyboard covers the bottom half of the page.",
      "how": [
        "Default to labels above the field for anything the person has not filled in a hundred times before.",
        "Consider right-aligned left labels only for short, familiar, scannable forms where vertical space is tight.",
        "Never use a placeholder as the only label. It disappears on input and usually fails contrast requirements.",
        "If you use a floating label, check the animated state still meets contrast and is announced correctly by a screen reader."
      ],
      "example": "The GOV.UK Design System puts every label above its input, with hint text between label and field, and it holds up across long Welsh translations.",
      "numbers": "Penzo measured saccade times, the eye movement from label to field: about 500ms for left-aligned labels beside the field, 170ms for experts and 240ms for novices with right-aligned labels beside the field, and 50ms with labels above the field. Setting those top labels in bold pushed 50ms up to 80ms. These are the real figures behind the claim, and they come from one small study.",
      "pitfall": "Treating top-aligned labels as settled science. The evidence is thinner than the confidence with which it gets repeated.",
      "source": "Matteo Penzo, Label Placement in Forms, UXmatters (12 July 2006), popularised by Luke Wroblewski in Web Form Design: Filling in the Blanks, Rosenfeld Media (2008).",
      "verify": {
        "status": "disputed",
        "note": "Read Penzo's article and its comment thread in full. The saccade figures above are quoted from it directly. The finding stands up as far as it goes, but the study is small and Penzo says so himself in his opening paragraphs: the setup deliberately stripped out everything else on the page and did not resemble real-world conditions. Wroblewski's own comment of 15 July 2006 adds the limits that matter most: the tested forms had only four input fields and all of them were required, so scanning a long form for the few fields you need was never tested, and his cumulative lab and live-site findings disagreed with Penzo's on bold labels. Participants were Italian. I found no large replication. The advice is sound and widely adopted; the popular version, which states it as settled fact, overstates what one study can carry."
      },
      "belongs": {
        "verdict": "core",
        "why": "Applies to every form a designer draws, and the wrong choice costs time on every field."
      },
      "related": [
        613,
        614,
        617,
        601
      ]
    },
    {
      "n": 613,
      "title": "Single-column form layout",
      "aka": [
        "One question per row",
        "Vertical form flow"
      ],
      "oneLine": "Stack fields in one column so the eye follows a single straight line down the form.",
      "demo": {
        "caption": "The accent line is the reading path. Two columns make it zigzag; one column makes it a straight drop.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Two columns</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 148\"><rect class=\"s-mute\" x=\"6\" y=\"12\" width=\"76\" height=\"26\"/><rect class=\"s-mute\" x=\"98\" y=\"12\" width=\"76\" height=\"26\"/><rect class=\"s-mute\" x=\"6\" y=\"56\" width=\"76\" height=\"26\"/><rect class=\"s-mute\" x=\"98\" y=\"56\" width=\"76\" height=\"26\"/><rect class=\"s-mute\" x=\"6\" y=\"100\" width=\"76\" height=\"26\"/><rect class=\"s-mute\" x=\"98\" y=\"100\" width=\"76\" height=\"26\"/><path class=\"s-accent\" d=\"M12 25 H104 L12 69 H104 L12 113 H104\"/><circle class=\"f-accent\" cx=\"12\" cy=\"25\" r=\"3\"/><text class=\"t\" x=\"6\" y=\"142\">a choice at every row</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One column</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 148\"><rect class=\"s-mute\" x=\"6\" y=\"12\" width=\"168\" height=\"26\"/><rect class=\"s-mute\" x=\"6\" y=\"56\" width=\"168\" height=\"26\"/><rect class=\"s-mute\" x=\"6\" y=\"100\" width=\"168\" height=\"26\"/><path class=\"s-accent\" d=\"M12 25 V113\"/><circle class=\"f-accent\" cx=\"12\" cy=\"25\" r=\"3\"/><text class=\"t\" x=\"6\" y=\"142\">one straight run</text></svg></div></div></div>"
      },
      "what": "A single-column form gives one clear path from first field to submit. Multi-column forms break that path: the reader has to decide at each row whether to go right or down, and the two columns often mean unrelated questions end up side by side. The exception is genuinely paired data, such as a postcode next to a house number, or a card expiry month and year, where the pairing is part of the meaning.",
      "why": "One column removes a decision from every row. It also survives narrow viewports without a separate mobile layout, and it makes the reading order the same as the tab order, which is what keyboard and screen-reader users get.",
      "how": [
        "One question per row by default. Break the rule only for fields that belong to the same fact.",
        "Set a comfortable measure on the column rather than letting fields stretch the full window width.",
        "Vary field width to hint at expected input length: a postcode field should be short, an address line long.",
        "Check the tab order matches the visual order after any layout change."
      ],
      "example": "GOV.UK service forms follow a single column inside a two-thirds grid column, with each question stacked and a single Continue button at the bottom.",
      "numbers": "",
      "pitfall": "Two columns adopted to make the form look shorter. It does not shorten the work, it hides half the questions from the scan path, and the tab order usually ends up jumping across the page.",
      "source": "Luke Wroblewski, Web Form Design: Filling in the Blanks, Rosenfeld Media (2008). Codified in the GOV.UK Design System question pages pattern.",
      "verify": {
        "status": "verified",
        "note": "Confirmed from the published GOV.UK question pages pattern and its code samples: every example stacks its fields in a single govuk-grid-column-two-thirds column under one page heading, with a submit button that the guidance requires to be labelled Continue rather than Next and left-aligned so people do not miss it. The pattern also states the underlying rule, start with one question per page. Wroblewski's book is the standard citation for the recommendation itself, though I did not read it and quote no figures from it."
      },
      "belongs": {
        "verdict": "core",
        "why": "It sets the base layout for every form and it is the one change that most often reduces completion errors without removing a single field."
      },
      "related": [
        612,
        614,
        618,
        589
      ]
    },
    {
      "n": 614,
      "title": "Field grouping and sectioning",
      "aka": [
        "Fieldsets",
        "Form chunking"
      ],
      "oneLine": "Group related questions with space and a heading so a long form reads as a few short ones.",
      "demo": {
        "caption": "Eight identical fields on both sides. On the right the gap between groups is bigger than the gap inside one.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One even run of eight</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:10px\"><span class=\"db-input\">&#160;</span><span class=\"db-input\">&#160;</span><span class=\"db-input\">&#160;</span><span class=\"db-input\">&#160;</span><span class=\"db-input\">&#160;</span><span class=\"db-input\">&#160;</span><span class=\"db-input\">&#160;</span><span class=\"db-input\">&#160;</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three groups, made by spacing alone</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col\" style=\"gap:26px\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Contact</span><span class=\"db-input\">&#160;</span><span class=\"db-input\">&#160;</span></div><div class=\"db-col db-col--tight\"><span class=\"db-label\">Delivery address</span><span class=\"db-input\">&#160;</span><span class=\"db-input\">&#160;</span><span class=\"db-input\">&#160;</span></div><div class=\"db-col db-col--tight\"><span class=\"db-label\">Payment</span><span class=\"db-input\">&#160;</span><span class=\"db-input\">&#160;</span><span class=\"db-input\">&#160;</span></div></div></div></div></div>"
      },
      "what": "Questions that belong to the same subject get put together, separated from the next group by white space and introduced by a heading. In HTML this is a fieldset with a legend, which also tells assistive technology that a set of radio buttons or checkboxes belongs to one question. The grouping is done with proximity first and a rule or box only if proximity is not enough.",
      "why": "Gestalt proximity means things close together are read as one thing, so spacing alone can do most of the work. Grouping also gives someone a way to skip: a person who has no delivery address different from their billing address can pass over the whole block once they see its heading.",
      "how": [
        "Use more space between groups than between fields inside a group. If the two gaps look similar, the grouping does not exist.",
        "Wrap radio and checkbox sets in a fieldset with a legend, so a screen reader reads the question before the options.",
        "Give each group a plain heading that names the subject, not the internal system it feeds.",
        "Prefer space to boxes. Boxing every group makes a form look like a spreadsheet."
      ],
      "example": "A checkout split into Contact, Delivery address, Delivery method and Payment, each with its own heading and a clear gap, rather than one run of twenty fields.",
      "numbers": "",
      "pitfall": "Grouping by database table rather than by what the person is thinking about. The person is thinking where is this going and how am I paying, not customers, addresses, orders.",
      "source": "Gestalt proximity, from Max Wertheimer's 1923 grouping laws, applied to forms; the fieldset and legend elements are part of the HTML standard.",
      "verify": {
        "status": "verified",
        "note": "The mechanism (proximity as a grouping cue) is the Gestalt law covered elsewhere in this reference, and the fieldset and legend requirement for grouped controls is in the HTML standard and in WCAG technique guidance. I found no single named source for form sectioning as a principle; it is a straightforward application of proximity, and I have said so rather than inventing an authority."
      },
      "belongs": {
        "verdict": "core",
        "why": "Long forms are the normal case in real work, and grouping is the cheapest way to make one feel finishable."
      },
      "related": [
        613,
        618,
        105,
        619
      ]
    },
    {
      "n": 615,
      "title": "Input masks and formatting",
      "aka": [
        "Masked input",
        "Auto-formatting"
      ],
      "oneLine": "The field adds the punctuation itself so the person only types the characters that carry meaning.",
      "demo": {
        "caption": "The same sixteen digits. Grouping them in fours is the difference between counting and reading.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No mask</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Before typing</span><span class=\"db-input\">&#160;</span><span class=\"db-label\">After typing</span><span class=\"db-input\">4242424242424242</span><span class=\"db-note\">Checking it means counting one digit at a time</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Masked in groups of four</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Before typing</span><span class=\"db-input\">____ ____ ____ ____</span><span class=\"db-label\">After typing</span><span class=\"db-input\">4242 4242 4242 4242</span><span class=\"db-note\">The shape is shown first, and the spaces are the field's job</span></div></div></div></div>"
      },
      "what": "An input mask shows the expected shape of the value before typing starts, then inserts the separators as the person types. A phone field shows the brackets and dashes; a card number field adds a space every four digits. The alternative, and often the better one, is a field that accepts anything and strips the formatting server-side.",
      "why": "Baymard's checkout testing found that people enter numbers in whatever format they habitually use even when a format example is shown, and then hit validation errors for punctuation they did not know mattered. A mask removes the guessing and makes long strings easier to read back and check.",
      "how": [
        "Always show the empty mask on focus, so it is obvious the person does not type the punctuation themselves.",
        "Auto-space card numbers in groups of four; it matches how the number is printed on the card and how people read it aloud.",
        "Localise or switch off. A United States phone mask applied to a German number, where valid lengths run from seven to eleven digits, will block a real customer.",
        "Test editing, not just typing. Most broken masks break when someone puts the cursor in the middle and deletes a character.",
        "If you cannot mask reliably, accept any format and normalise it yourself rather than rejecting it."
      ],
      "example": "Best Buy's checkout auto-formats the card number with spaces as it is typed, which Baymard record as performing well in their testing.",
      "numbers": "Baymard Institute report that 89 per cent of users are likely to enter numerical inputs in several different ways even when a formatting example is shown, that 98 per cent of e-commerce sites restrict inputs on certain fields, and that 64 per cent of sites either do not use input masks or use them incorrectly.",
      "pitfall": "A mask that assumes one country. It converts a formatting nuisance into a hard block, and the person cannot complete the order at all.",
      "source": "Edward Scott, Consider Using Localized Input Masks for 'Phone' and Other Restricted Inputs, Baymard Institute (28 November 2017).",
      "verify": {
        "status": "verified",
        "note": "All three figures are quoted from the Baymard article and match its wording: 89 per cent of test subjects entered data in a different format from the example shown, 98 per cent of e-commerce sites restrict inputs for certain fields, and 64 per cent of sites either do not use input masks or do not use them correctly. The German example is theirs too, at 7 to 11 digits with a 2 to 5 digit area code, as is the Best Buy card-number auto-spacing. Baymard is a commercial research firm publishing its own large-scale usability testing, not a peer-reviewed source, which is worth knowing when quoting the numbers."
      },
      "belongs": {
        "verdict": "core",
        "why": "Formatted fields appear in every checkout and every sign-up, and the failure mode is a lost transaction."
      },
      "related": [
        596,
        616,
        619,
        626
      ]
    },
    {
      "n": 616,
      "title": "Smart defaults and autofill",
      "aka": [
        "Sensible defaults",
        "Browser autofill",
        "Autocomplete tokens"
      ],
      "oneLine": "Pre-fill what you can safely know, and mark fields so the browser can fill the rest.",
      "demo": {
        "none": "A valid autocomplete token and an invented one produce fields that look exactly alike, so the whole difference happens inside the browser's own autofill interface, which a drawing cannot honestly stand in for."
      },
      "what": "Two separate things share this heading. A smart default is a value you supply because it is right for most people, such as the current country or today's date. Autofill is the browser filling a field from the person's own stored data, which only works if you tag the field with the right HTML autocomplete token. WCAG 2.1 made those tokens a requirement at Level AA under Success Criterion 1.3.5, Identify Input Purpose.",
      "why": "Every field the person does not have to think about is a field they cannot get wrong. The accessibility case is stronger than the convenience case: WCAG's stated benefit is for people with memory or executive-function difficulties, who should not have to recall their own address.",
      "how": [
        "Add autocomplete tokens to every field that collects personal data: name, email, tel, street-address, postal-code, cc-number.",
        "Never switch autofill off on password or address fields to force manual entry. It causes more errors than it prevents.",
        "Default only where the value is right for a clear majority, and make it obviously editable.",
        "Do not default anything with a cost or a commitment attached, such as a pre-ticked insurance add-on."
      ],
      "example": "A UK checkout that tags the postcode field autocomplete=\"postal-code\" so Safari and Chrome offer the saved address in one tap.",
      "numbers": "WCAG 2.1 and 2.2 Success Criterion 1.3.5 Identify Input Purpose, Level AA. The valid values are the fixed autocomplete tokens in the HTML standard, not free text.",
      "pitfall": "Invented autocomplete values. The attribute only accepts a defined list, so autocomplete=\"customer-postcode\" does nothing and fails the criterion silently.",
      "source": "W3C, WCAG 2.2 Success Criterion 1.3.5 Identify Input Purpose, and the HTML standard's autofill field names. Defaults as a design principle are covered separately at 583.",
      "verify": {
        "status": "verified",
        "note": "Verified against the W3C Understanding document for SC 1.3.5, which states that the HTML autocomplete attribute accepts only a fixed set of well-defined values, names technique H98 as sufficient, and gives the memory and executive-function benefit. Also confirmed the existence of an ACT rule testing whether the autocomplete value is valid."
      },
      "belongs": {
        "verdict": "core",
        "why": "It is both a usability win and a stated accessibility requirement, and the implementation detail (valid tokens) is something designers must specify."
      },
      "related": [
        583,
        615,
        617,
        626
      ]
    },
    {
      "n": 617,
      "title": "Required versus optional marking",
      "aka": [
        "Asterisk convention",
        "Optional labelling"
      ],
      "oneLine": "Mark whichever group is smaller, and say in words what the marking means.",
      "demo": {
        "caption": "Same five questions. The left marks the four that are required; the right marks the one that is not.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Marking the majority</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div><span class=\"db-label\">Full name *</span><span class=\"db-input\">&#160;</span></div><div><span class=\"db-label\">Email address *</span><span class=\"db-input\">&#160;</span></div><div><span class=\"db-label\">Postcode *</span><span class=\"db-input\">&#160;</span></div><div><span class=\"db-label\">Phone number *</span><span class=\"db-input\">&#160;</span></div><div><span class=\"db-label\">Company</span><span class=\"db-input\">&#160;</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Marking the minority</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div><span class=\"db-label\">Full name</span><span class=\"db-input\">&#160;</span></div><div><span class=\"db-label\">Email address</span><span class=\"db-input\">&#160;</span></div><div><span class=\"db-label\">Postcode</span><span class=\"db-input\">&#160;</span></div><div><span class=\"db-label\">Phone number</span><span class=\"db-input\">&#160;</span></div><div><span class=\"db-label\">Company (optional)</span><span class=\"db-input\">&#160;</span></div></div></div></div></div>"
      },
      "what": "Two conventions compete. The older one marks required fields with an asterisk and explains the asterisk once at the top of the form. The GOV.UK Design System takes the opposite line: never mark mandatory fields with asterisks, and instead mark optional ones with the word (optional) in the label. Accessibility guidance often prefers an explicit word over a symbol either way, because an asterisk read aloud is just star.",
      "why": "The point of the marking is to let someone predict the work before they start and to avoid a validation error at the end. Marking the smaller group keeps the noise down. If nine fields in ten are required, marking the one optional field is quieter than nine asterisks.",
      "how": [
        "Count first. Mark the minority, whichever it is.",
        "Put the marking in the label text, not floating beside the field, so it is read as part of the question.",
        "If you use asterisks, state what they mean at the top of the form in plain words, before the first field.",
        "Set the required attribute in the markup as well as showing the visual marker, so assistive technology gets it too.",
        "Better still, remove the optional fields. A question you do not need is a question you should not ask."
      ],
      "example": "GOV.UK question pages label optional questions with (optional) appended to the label and use no asterisks anywhere.",
      "numbers": "",
      "pitfall": "An asterisk with no key. The person meets a red star and has to guess whether it means required, important, or footnoted.",
      "source": "GOV.UK Design System question pages pattern. The competing asterisk convention is long-standing web practice, discussed by Luke Wroblewski in Web Form Design (2008).",
      "verify": {
        "status": "disputed",
        "note": "Both conventions are real and in active conflict. The GOV.UK position is quoted from the live question pages pattern, not from a proposal: in most contexts, add (optional) to the labels of optional fields; for radios and checkboxes, add it to the legend; and then, as its own line, never mark mandatory fields with asterisks. Against that, accessibility practitioners commonly recommend marking required fields explicitly with an asterisk or the word required. There is no settled answer, so the entry gives the decision rule rather than picking a winner."
      },
      "belongs": {
        "verdict": "core",
        "why": "Every form has to make the call, and the two mainstream conventions give opposite instructions."
      },
      "related": [
        612,
        613,
        619,
        620
      ]
    },
    {
      "n": 618,
      "title": "Multi-step forms and progress indication",
      "aka": [
        "Wizards",
        "Step indicators",
        "One thing per page"
      ],
      "oneLine": "Split a long form into steps and show progress, but only where the steps are real.",
      "demo": {
        "caption": "Both are on question three of nine. Look at how far down the panel the question itself begins.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Indicator listing every question</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">1 Your name</span><span class=\"db-note\">2 Your address</span><span class=\"db-note db-note--accent\">3 Your income</span><span class=\"db-note\">4 Your employer</span><span class=\"db-note\">5 Your partner</span><span class=\"db-note\">6 Your children</span><span class=\"db-note\">7 Your savings</span><span class=\"db-note\">8 Your rent</span><span class=\"db-note\">9 Check answers</span><span class=\"db-label\">Your income before tax</span><span class=\"db-input\">&#160;</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Continue</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Plain caption</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Question 3 of 9</span><span class=\"db-label\">Your income before tax</span><span class=\"db-input\">&#160;</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Continue</span></div></div></div></div></div>"
      },
      "what": "Breaking a form into steps reduces what is on screen at once and lets each step carry a proper heading. A progress indicator tells the person how many steps there are and which one they are on. The GOV.UK guidance is markedly cautious. Test the form without one first, and if you do add one, keep it to a plain caption such as Question 3 of 9. It tells you specifically not to build an indicator that shows all the questions at once, allows navigation back to them and marks the current one, because that combination is often unnoticed, eats space, breaks on small screens and cannot handle conditional sections.",
      "why": "Steps make a long task feel finishable and give a natural save point. The motivational argument comes from the goal-gradient effect: people work harder as they get closer to a reward. Kivetz, Urminsky and Zheng showed this with loyalty cards, including the finding that a card apparently already part-complete gets finished faster than an identical one starting from zero.",
      "how": [
        "Split by subject, not by field count. Each step should have a heading someone would recognise as a topic.",
        "Show the step count only when you can state the total reliably, and update it as the person moves.",
        "Save on every step so a dropped connection does not cost the whole form.",
        "Let people go back and change an earlier answer without losing later ones, and offer a check-your-answers page before submit.",
        "Do not fake progress. Inventing steps to make a bar move is a deceptive pattern."
      ],
      "example": "The GOV.UK check-your-answers pattern at the end of a multi-step service, where every answer is listed with a Change link back to its own step.",
      "numbers": "In Kivetz, Urminsky and Zheng's cafe field experiment, customers given a 12-stamp card carrying two free bonus stamps completed the same ten purchases in 12.7 days on average, against 15.6 days for customers given a plain 10-stamp card.",
      "pitfall": "A progress bar on a branching service. The person is told they are on step three of six, the answers send them down a shorter path, and the count changes under them.",
      "source": "GOV.UK Design System question pages pattern (progress indicators). Goal-gradient evidence from Ran Kivetz, Oleg Urminsky and Yuhuang Zheng, The Goal-Gradient Hypothesis Resurrected, Journal of Marketing Research 43(1), pp. 39-58 (2006).",
      "verify": {
        "status": "verified",
        "note": "The 12.7 versus 15.6 day figures and the design of the cafe field experiment are confirmed from the paper and from the University of Chicago Booth summary of it by one of its own authors. Keep the caveat in view: that study is about loyalty cards, not forms, so applying it to progress bars is an extrapolation, and the entry says so. The GOV.UK guidance is quoted from the live question pages pattern, including the Question 3 of 9 caption, the requirement to state the total only if you can do so reliably, and the three-part description of the indicator style to avoid. GOV.UK also records that the Carer's Allowance team removed a twelve-step indicator with no effect on completion rates or times."
      },
      "belongs": {
        "verdict": "core",
        "why": "Long transactional forms are common client work, and the step and progress decisions change completion rates."
      },
      "related": [
        613,
        614,
        595,
        636
      ]
    },
    {
      "n": 619,
      "title": "Error summary and field-level errors",
      "aka": [
        "Error list",
        "Inline errors"
      ],
      "oneLine": "Show a linked summary at the top and a specific message beside each broken field.",
      "demo": {
        "caption": "Two fields failed in both. Only the right says so at the top, and links straight to each one.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Field messages only</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Full name</span><span class=\"db-input db-input--error\">&#160;</span><span class=\"db-note\">Error: enter your full name</span><span class=\"db-label\">Email address</span><span class=\"db-input\">ade@example.com</span><span class=\"db-label\">Passport issue date</span><span class=\"db-input db-input--error\">12 May 2031</span><span class=\"db-note\">Error: the date must be in the past</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Summary and field messages</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\">There is a problem</span><span class=\"db-note db-note--accent\">Enter your full name &#8594;</span><span class=\"db-note db-note--accent\">The date must be in the past &#8594;</span></div></div><span class=\"db-label\">Full name</span><span class=\"db-input db-input--error\">&#160;</span><span class=\"db-note\">Error: enter your full name</span><span class=\"db-label\">Email address</span><span class=\"db-input\">ade@example.com</span><span class=\"db-label\">Passport issue date</span><span class=\"db-input db-input--error\">12 May 2031</span><span class=\"db-note\">Error: the date must be in the past</span></div></div></div></div>"
      },
      "what": "When a submitted form comes back with errors it needs both layers. A summary at the top of the page states there is a problem and lists each error as a link jumping to the field it belongs to. Each field then carries its own message next to the input, plus a visual marker. WCAG requires the error to be identified and described in text under Success Criterion 3.3.1, and requires a suggested correction where one is known under 3.3.3.",
      "why": "The summary means a person using a screen reader or a magnifier learns immediately that something failed and how many things failed, without scrolling the whole form. The inline message means they know what to fix while looking at the field. One without the other leaves somebody stranded.",
      "how": [
        "Move keyboard focus to the summary when the page reloads with errors.",
        "Make each summary item a link to the field's input, not to the label or the section.",
        "Write the message as an instruction: Enter your full name, not This field is invalid.",
        "Never clear the fields the person already filled in correctly.",
        "Do not rely on red alone. Add an icon or the word Error so the marking survives colour blindness."
      ],
      "example": "The GOV.UK error summary component, titled There is a problem, listing errors such as Enter your full name and The date your passport was issued must be in the past, each linking to its field.",
      "numbers": "WCAG 2.2 Success Criterion 3.3.1 Error Identification (Level A) and 3.3.3 Error Suggestion (Level AA).",
      "pitfall": "Wiping the form on error. It is still common in server-rendered checkouts and it is the single fastest way to lose the sale.",
      "source": "GOV.UK Design System error summary and error message components; W3C WCAG 2.2 Success Criteria 3.3.1 and 3.3.3.",
      "verify": {
        "status": "verified",
        "note": "Verified the GOV.UK error summary component (title There is a problem, error list of linked items, focus moved to the summary by default with a disableAutoFocus option) and the error message component guidance including the instruction not to clear form fields when showing an error. The WCAG criteria numbers and names are from the published standard."
      },
      "belongs": {
        "verdict": "core",
        "why": "Error handling is where forms are won or lost, and there is a published standard plus a mature component pattern to follow."
      },
      "related": [
        596,
        597,
        598,
        617
      ]
    },
    {
      "n": 620,
      "title": "Microcopy at decision points",
      "aka": [
        "UX writing",
        "Interface copy"
      ],
      "oneLine": "The small pieces of text next to a control that answer the question stopping someone from acting.",
      "demo": {
        "caption": "Porter's sentence is on both checkouts. On the right it sits where the hesitation happens, against the button.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Answer kept in the footer</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Total</span><span class=\"db-type\">&#163;24.00</span></div><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Buy the book</span></div><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i></div><span class=\"db-note\">Transactions are handled through paypal but you don't need a paypal account to buy this book</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Answer at the button</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Total</span><span class=\"db-type\">&#163;24.00</span></div><span class=\"db-note\">Transactions are handled through paypal but you don't need a paypal account to buy this book</span><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Buy the book</span></div><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i></div></div></div></div></div>"
      },
      "what": "Microcopy is the short text attached to interface elements: hint text under a field, the line beside a submit button, the sentence in an empty state. Joshua Porter coined the term in 2009 after a checkout he had built kept failing on billing addresses that did not match the card. He added one line at the top of the form, \"Be sure to enter the billing address associated with your credit card\", and the errors stopped. Kinneret Yifrah's Microcopy: The Complete Guide is the standard book-length treatment.",
      "why": "At the moment of committing, people have one specific worry: will you charge me, can I change this later, who sees this. Answering that worry where the worry occurs is more effective than a FAQ page, because nobody leaves a checkout to read the FAQ.",
      "how": [
        "Find the decision points first: submit, delete, share, pay, sign up. Write for those, not for every field.",
        "Answer the actual objection in the person's own words. Cancel any time, no card needed beats Flexible plans.",
        "Put the reassurance next to the control, not in a footer or a tooltip.",
        "Keep the brand voice out of the way at the risky moments. Jokes near a payment button read as evasion.",
        "Test the copy with real people; microcopy is the cheapest thing in the build to change and the most often guessed at."
      ],
      "example": "Porter's second example in the same post is Mark Boulton's book checkout, which carried the line \"Transactions are handled through paypal but you don't need a paypal account to buy this book\", answering the exact worry that stopped people paying.",
      "numbers": "",
      "pitfall": "Writing microcopy last, after the layout is locked, so there is only room for three words where the person needed a sentence.",
      "source": "Joshua Porter, Writing Microcopy, Bokardo (9 June 2009), who coined the term. Kinneret Yifrah, Microcopy: The Complete Guide (English edition 2017).",
      "verify": {
        "status": "verified",
        "note": "Read Porter's original post. Both quoted lines are verbatim from it, and the date on the post is 9 June 2009. I corrected the description of his own case: the copy went at the top of the checkout form, not beside the billing address field, and what he reports is that the error notifications stopped, with revenue and support benefits inferred rather than measured. Yifrah's book credits the coining to this same post. No conversion percentage is quoted here, because Porter gives none and the figures circulating online are later inventions."
      },
      "belongs": {
        "verdict": "core",
        "why": "Copy at the point of action is a design decision, not a marketing hand-off, and it changes behaviour more cheaply than any layout change."
      },
      "related": [
        621,
        623,
        591,
        597
      ]
    },
    {
      "n": 621,
      "title": "Verb-first button labels",
      "aka": [
        "Action labels",
        "Task-based buttons"
      ],
      "oneLine": "Name the action the button performs, starting with the verb, so the outcome is readable before the click.",
      "demo": {
        "caption": "The message is unread in both, as usual. Only the right-hand buttons say what pressing them will do.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Generic labels</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--tight\"><span class=\"db-btn\">OK</span><span class=\"db-btn db-btn--ghost\">Cancel</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Verb and object</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Publish now</span><span class=\"db-btn db-btn--ghost\">Keep as draft</span></div></div></div></div></div></div>"
      },
      "what": "A button label should describe what happens next. Apple's Human Interface Guidelines put it plainly: write a few words that describe what the button does, and consider starting the label with a verb, giving Add to Cart as the example. Generic labels such as OK, Submit and Yes push the meaning back into the surrounding text, which people often have not read.",
      "why": "In a dialogue the button is frequently the only thing that gets read. A person who has skimmed the message still knows what Delete draft does; they do not know what OK does. Verb labels also improve screen-reader use, where buttons are often listed out of context.",
      "how": [
        "Match the verb to the heading. If the dialogue asks Delete this project? the button should say Delete project, not Yes.",
        "Say what is being acted on when the object is not obvious: Discard changes beats Discard.",
        "Keep the pairing honest. Cancel should abandon the action, never cancel a subscription.",
        "Avoid labelling both buttons with the same verb in different tenses; people read the shape of the word, not the ending.",
        "Add a trailing ellipsis when the button opens another window, view or app, which is the long-standing desktop convention for signalling that more input is coming."
      ],
      "example": "Apple's worked example is a button that lets people add items to their shopping cart, labelled Add to Cart rather than OK. The system permission alert follows the same logic with Don't Allow in place of Cancel.",
      "numbers": "",
      "pitfall": "Cancel next to a Cancel-something action. A dialogue asking whether to cancel your booking, with Cancel and OK as the options, is genuinely ambiguous.",
      "source": "Apple, Human Interface Guidelines, Buttons (Content section).",
      "verify": {
        "status": "verified",
        "note": "Quoted directly from the current Apple Human Interface Guidelines page on Buttons, which advises writing a few words that succinctly describe what the button does and considering starting the label with a verb, with Add to Cart as its example. The ellipsis rule is verbatim from the same page's macOS push button section: append a trailing ellipsis to the title when a push button opens another window, view, or app. I trimmed the example, which previously described Add to Cart as an alert button title. It is not one; the HIG uses it as a shopping-cart button label."
      },
      "belongs": {
        "verdict": "core",
        "why": "The button label is the smallest and most consequential piece of interface writing, and there is a documented platform rule for it."
      },
      "related": [
        620,
        622,
        623,
        585
      ]
    },
    {
      "n": 622,
      "title": "Primary, secondary and tertiary action hierarchy",
      "aka": [
        "Button hierarchy",
        "Prominence ranking"
      ],
      "oneLine": "One clearly dominant action per view, with the rest visibly ranked below it.",
      "demo": {
        "caption": "Same four actions. On the left you rank them yourself; on the right the styling has already done it.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Four prominent buttons</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Publish</span><span class=\"db-btn\">Save draft</span><span class=\"db-btn\">Preview</span><span class=\"db-btn\">Export</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One primary, then the rest</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Publish</span><span class=\"db-btn db-btn--ghost\">Save draft</span><span class=\"db-btn db-btn--quiet\">Preview</span><span class=\"db-btn db-btn--quiet\">Export</span></div></div></div></div></div>"
      },
      "what": "Actions on a screen are not equal, and the styling should say so. Apple's guidance is to use a prominent style for the most likely action, to keep the number of prominent buttons to one or two per view, and to distinguish the preferred choice by style rather than by size. Most design systems implement this as a filled primary, an outlined or tinted secondary, and a plain text tertiary.",
      "why": "A view with five equally weighted buttons makes the reader do the ranking. Apple's own reasoning is that too many prominent buttons increase cognitive load, because people spend longer weighing options before choosing. A single dominant action also tells someone what the screen is for.",
      "how": [
        "Pick the one action the screen exists for and make only that one prominent.",
        "Use style, not size, to separate the options. Two buttons of different sizes side by side reads as a mistake.",
        "Demote rarely used actions to plain text links or an overflow menu rather than shrinking a filled button.",
        "Keep the same rank meaning across the whole product. A filled button that means confirm on one screen and navigate on another destroys the signal.",
        "Check the hierarchy still reads in greyscale, so it does not rest on colour alone."
      ],
      "example": "A standard iOS alert with a tinted primary button, a plain secondary and, where relevant, a red destructive option, all at the same size.",
      "numbers": "Apple's Human Interface Guidelines advise keeping prominent buttons to one or two per view.",
      "pitfall": "Every stakeholder wanting their action promoted, so the page ends up with four filled buttons and no hierarchy at all.",
      "source": "Apple, Human Interface Guidelines, Buttons (Style and Role sections).",
      "verify": {
        "status": "verified",
        "note": "Verified against the Apple Human Interface Guidelines Buttons page, which states: keep the number of prominent buttons to one or two per view; presenting too many prominent buttons increases cognitive load; and use style, not size, to visually distinguish the preferred choice among multiple options. The named button roles are Normal, Primary, Cancel and Destructive."
      },
      "belongs": {
        "verdict": "core",
        "why": "Visual hierarchy applied to actions, and one of the few places where a platform vendor states a hard limit."
      },
      "related": [
        621,
        623,
        118,
        594
      ]
    },
    {
      "n": 623,
      "title": "Destructive action styling",
      "aka": [
        "Destructive role",
        "Danger buttons"
      ],
      "oneLine": "Actions that lose data get their own visual role and never get the default treatment.",
      "demo": {
        "caption": "Both dialogues delete fourteen files. On the left, the button the Return key fires is the one that destroys them.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Destructive as the default</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--tight\"><span class=\"db-btn\" style=\"outline:2px solid var(--accent);outline-offset:2px\">Delete</span><span class=\"db-btn db-btn--ghost\">Cancel</span></div><span class=\"db-note\">Return presses the ringed button</span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Destructive in its own role</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-lines\"><i></i><i></i><i></i></div><div class=\"db-row db-row--tight\"><span class=\"db-btn\" style=\"outline:2px solid var(--accent);outline-offset:2px\">Cancel</span><span class=\"db-btn db-btn--danger\">Delete 14 files</span></div><span class=\"db-note\">Return presses the ringed button</span></div></div></div></div>"
      },
      "what": "Apple defines destructive as a formal button role, alongside normal, primary and cancel, and gives it the system red colour. The accompanying rule matters more than the colour: do not assign the primary role to a button that performs a destructive action, even when that action is the most likely choice. The reasoning is that a visually prominent button gets pressed without being read.",
      "why": "Destruction is the one outcome that cannot be walked back by pressing something else. Giving it a distinct role means the person's habit of clicking the highlighted button cannot destroy anything, and it puts the recovery burden on the interface rather than on their attention.",
      "how": [
        "Give destructive actions their own colour role, not just a red tint on the primary style.",
        "Do not make the destructive option the default that the Return key triggers.",
        "Name the object in the label: Delete 14 files, not Delete.",
        "Prefer undo over a confirmation dialogue for anything you can reverse, and reserve confirmation for what you genuinely cannot.",
        "Where the action is severe and irreversible, ask for a typed confirmation of the item's name rather than a click."
      ],
      "example": "GitHub's repository deletion flow makes you type the repository name before the red button becomes active. Apple's rule reaches the same end by a different route: the destructive role takes system red, and because the primary role is what the Return key triggers, a destructive button must not hold it.",
      "numbers": "",
      "pitfall": "Red used for emphasis elsewhere in the product, so by the time a genuinely destructive button appears the colour has stopped meaning danger.",
      "source": "Apple, Human Interface Guidelines, Buttons (Role section).",
      "verify": {
        "status": "verified",
        "note": "Quoted from the Apple Human Interface Guidelines Buttons page, which defines the destructive role as one that performs an action that can result in data destruction, states that it uses the system red colour, and instructs: don't assign the primary role to a button that performs a destructive action, even if that action is the most likely choice, because people sometimes choose a primary button without reading it first."
      },
      "belongs": {
        "verdict": "core",
        "why": "A specific, documented rule protecting against irreversible loss, and it is broken constantly in admin interfaces."
      },
      "related": [
        584,
        585,
        610,
        622
      ]
    },
    {
      "n": 624,
      "title": "Disabled-state pitfalls",
      "aka": [
        "Greyed-out controls",
        "Inactive components"
      ],
      "oneLine": "A disabled control tells someone they cannot act without telling them why, and it is exempt from contrast rules.",
      "demo": {
        "caption": "Left greys the button out and says nothing else. Right leaves it live and names the field holding the order up.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Disabled, no reason given</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Postcode</span><span class=\"db-input\">SW1A</span><div class=\"db-row db-row--tight\"><span class=\"db-btn\" style=\"opacity:0.38\">Place order</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Live, and it tells you</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-label\">Postcode</span><span class=\"db-input db-input--error\">SW1A</span><span class=\"db-note\">Error: enter a full postcode, for example SW1A 1AA</span><div class=\"db-row db-row--tight\"><span class=\"db-btn\">Place order</span></div></div></div></div></div>"
      },
      "what": "Disabling a control removes it from the tab order in most implementations, gives it no hover or focus behaviour, and typically drops its contrast. WCAG explicitly exempts it: under both Success Criterion 1.4.3 and 1.4.11, components that are not available for user interaction are not required to meet contrast requirements. So a disabled button can legally be unreadable, and often is.",
      "why": "The exemption is convenient for the developer and hostile to the person. A greyed submit button with no explanation is a dead end. It cannot be read at low contrast, and because focus skips it there is nothing to hear either, so nobody learns which field is holding the form up. The deeper problem is that a disabled control still carries information, and the standard exempts it anyway.",
      "how": [
        "Prefer an always-enabled submit that validates and reports the problem to a disabled one that says nothing.",
        "If you must disable, pair it with visible text saying what would enable it.",
        "Keep disabled controls readable anyway. The exemption is a floor, not a target.",
        "Never disable something that is genuinely unavailable for good; remove it or replace it with an explanation.",
        "Consider aria-disabled with the control still focusable, so a keyboard user can reach it and hear why it is off."
      ],
      "example": "A checkout with a greyed Place order button and no indication that the postcode failed validation three fields up.",
      "numbers": "WCAG 2.2 Success Criteria 1.4.3 Contrast (Minimum) and 1.4.11 Non-text Contrast both exempt inactive user interface components from contrast requirements.",
      "pitfall": "The disabled submit as the only error signal. The person tries everything, cannot see what is wrong, and abandons the form.",
      "source": "W3C, WCAG 2.2 Understanding documents for Success Criteria 1.4.3 and 1.4.11 (Inactive User Interface Components).",
      "verify": {
        "status": "verified",
        "note": "The exemption wording is confirmed against the W3C material for both 1.4.3 and 1.4.11 and the WCAG2ICT guidance that restates it: user interface components that are not available for user interaction, for example a disabled control in HTML, are not required to meet contrast requirements. I removed a sentence attributing published criticism of the exemption to a named WCAG working group member. The criticism is real and common among accessibility practitioners, but I could not locate the specific comment to stand it up, so the entry now argues the point on its own terms rather than borrowing an authority."
      },
      "belongs": {
        "verdict": "core",
        "why": "A default behaviour with a real accessibility hole in the standard itself, so a designer has to decide deliberately rather than accept the default."
      },
      "related": [
        596,
        619,
        589,
        597
      ]
    },
    {
      "n": 625,
      "title": "State matrix completeness (empty, loading, partial, error, ideal, overflow)",
      "aka": [
        "The UI Stack",
        "Screen states"
      ],
      "oneLine": "Every screen has several states, and designing only the full, happy one leaves most of the work undone.",
      "demo": {
        "caption": "The left is the state that gets designed. The right is every state the same screen actually passes through.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">What gets drawn</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 150\"><rect class=\"s-mute\" x=\"20\" y=\"8\" width=\"160\" height=\"118\"/><rect class=\"f\" x=\"32\" y=\"20\" width=\"110\" height=\"7\"/><rect class=\"f\" x=\"32\" y=\"36\" width=\"136\" height=\"7\"/><rect class=\"f\" x=\"32\" y=\"52\" width=\"136\" height=\"7\"/><rect class=\"f\" x=\"32\" y=\"68\" width=\"136\" height=\"7\"/><rect class=\"f\" x=\"32\" y=\"84\" width=\"136\" height=\"7\"/><rect class=\"f\" x=\"32\" y=\"100\" width=\"92\" height=\"7\"/><text class=\"t\" x=\"20\" y=\"142\">ideal</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">What the screen does</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 150\"><rect class=\"s-mute\" x=\"4\" y=\"8\" width=\"52\" height=\"44\"/><rect class=\"s-mute\" stroke-dasharray=\"3 3\" x=\"18\" y=\"22\" width=\"24\" height=\"16\"/><text class=\"t\" x=\"4\" y=\"64\">empty</text><rect class=\"s-mute\" x=\"64\" y=\"8\" width=\"52\" height=\"44\"/><rect class=\"f-mute\" x=\"70\" y=\"15\" width=\"40\" height=\"5\"/><rect class=\"f-mute\" x=\"70\" y=\"24\" width=\"40\" height=\"5\"/><rect class=\"f-mute\" x=\"70\" y=\"33\" width=\"40\" height=\"5\"/><text class=\"t\" x=\"64\" y=\"64\">loading</text><rect class=\"s-mute\" x=\"124\" y=\"8\" width=\"52\" height=\"44\"/><rect class=\"f\" x=\"130\" y=\"15\" width=\"40\" height=\"5\"/><text class=\"t\" x=\"124\" y=\"64\">partial</text><rect class=\"s-mute\" x=\"4\" y=\"82\" width=\"52\" height=\"44\"/><path class=\"s\" d=\"M30 92 L40 110 H20 Z\"/><path class=\"s\" d=\"M30 99 V104\"/><text class=\"t\" x=\"4\" y=\"138\">error</text><rect class=\"s-mute\" x=\"64\" y=\"82\" width=\"52\" height=\"44\"/><rect class=\"f\" x=\"70\" y=\"89\" width=\"40\" height=\"5\"/><rect class=\"f\" x=\"70\" y=\"98\" width=\"40\" height=\"5\"/><rect class=\"f\" x=\"70\" y=\"107\" width=\"40\" height=\"5\"/><rect class=\"f\" x=\"70\" y=\"116\" width=\"40\" height=\"5\"/><text class=\"t\" x=\"64\" y=\"138\">ideal</text><rect class=\"s-mute\" x=\"124\" y=\"82\" width=\"52\" height=\"44\"/><rect class=\"f\" x=\"130\" y=\"89\" width=\"64\" height=\"5\"/><rect class=\"f\" x=\"130\" y=\"98\" width=\"40\" height=\"5\"/><rect class=\"f\" x=\"130\" y=\"107\" width=\"58\" height=\"5\"/><rect class=\"f\" x=\"130\" y=\"116\" width=\"40\" height=\"5\"/><rect class=\"f\" x=\"130\" y=\"125\" width=\"40\" height=\"5\"/><text class=\"t\" x=\"124\" y=\"138\">overflow</text></svg></div></div></div>"
      },
      "what": "Scott Hurff's UI Stack names five states every screen can be in: blank (his own heading is empty), loading, partial, error and ideal. Blank is before there is any data, loading is while it arrives, partial is when there is some but not much, error is when it fails, and ideal is the state that gets designed and put in the portfolio. Hurff presents this openly as an update of 37signals' 2004 Getting Real chapter The Three State Solution, which asked for regular, blank and error. The master list adds a sixth, overflow, for when there is far more data than the layout expected.",
      "why": "The ideal state is the one people see least. A new account starts blank, a slow connection sits in loading, a real account after a month is partial, and something eventually errors. Working through the list turns a set of bugs discovered in production into design decisions made deliberately.",
      "how": [
        "Draw all six states for any screen that loads data, and review them as a set.",
        "Give the blank state a job: explain what goes here and offer the action that fills it.",
        "Design partial deliberately. A dashboard with one of eight widgets populated should not look broken.",
        "For overflow, decide truncation, wrapping or scroll per element before the content team hands you a 90-character product name.",
        "Keep the layout stable across states so the screen does not jump as data arrives."
      ],
      "example": "A project management tool where a brand new board shows an illustrated blank state with a Create your first task button, rather than an empty grid.",
      "numbers": "",
      "pitfall": "Designing the states in isolation so they use different layouts, and the screen visibly reflows three times between load and ready.",
      "source": "Scott Hurff, Why Your User Interface Is Awkward: You're Ignoring the UI Stack, scotthurff.com (18 August 2015), an excerpt from Designing Products People Love, O'Reilly (January 2016). Descends from 37signals, The Three State Solution, in Getting Real (2004).",
      "verify": {
        "status": "adjusted",
        "note": "Read Hurff's article in full. His five states are Ideal, Empty, Error, Partial and Loading, and he uses blank and empty interchangeably in the text. Two corrections to what was here before. The book is Designing Products People Love and Hurff's own standfirst dates it to O'Reilly, January 2016, not 2015; the 2015 date belongs to the article. And he credits the idea openly to 37signals' The Three State Solution, calling his version an adaptation, which was missing. The master list adds overflow, which is not Hurff's; it is a sensible addition and the entry now says which five are his and which one is not."
      },
      "belongs": {
        "verdict": "core",
        "why": "A named checklist that turns the most common category of production bug into a design step."
      },
      "related": [
        591,
        592,
        595,
        626
      ]
    },
    {
      "n": 626,
      "title": "Content extremes and edge cases",
      "aka": [
        "Stress cases",
        "Content stress testing"
      ],
      "oneLine": "Design for the longest name, the empty field and the worst day, not the tidy sample data.",
      "demo": {
        "caption": "Same card, same rules. Only the content changed: it wraps, the button runs off the edge, one value is missing.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Sample content</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Customer</span><span class=\"db-type\">Jane Smith</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Total</span><span class=\"db-type\">&#163;24.00</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Delivery note</span><span class=\"db-type\">Leave at door</span></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Message Jane Smith</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag\">Content that turns up</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Customer</span><span class=\"db-type\">Bartholomew Featherstonehaugh-Wilberforce</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Total</span><span class=\"db-type\">&#163;1,284,900.00</span></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Delivery note</span><span class=\"db-type\"></span></div><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Message Bartholomew Featherstonehaugh-Wilberforce</span></div></div></div></div></div>"
      },
      "what": "Real content is uglier than placeholder content. Names run long or have no surname, prices reach seven figures, uploads fail, and someone is using your bereavement form on the worst day of their life. Eric Meyer and Sara Wachter-Boettcher argued in Design for Real Life that calling these edge cases is itself the problem: the word implies they are rare and marginal, when they are ordinary and often the moments that matter most. They proposed stress cases instead.",
      "why": "The naming changes the priority. An edge case gets deferred; a stress case gets designed. Meyer's own experience of Facebook's Year in Review showing him his dead daughter's photograph as a celebration is the case study, and it came from a feature that worked perfectly on its intended input.",
      "how": [
        "Test every layout with the longest and shortest realistic content you can find, not with lorem ipsum.",
        "Ask who is worst served by this feature, then design that path before the happy one.",
        "Handle names properly: no assumption of two parts, no forced capitalisation, no character restrictions that exclude real people.",
        "Give people a route out of automated cheerfulness, and never make an emotional feature opt-out only.",
        "Review copy for anything that assumes a good outcome, especially in confirmations and celebrations."
      ],
      "example": "Facebook's 2014 Year in Review, which auto-assembled a celebratory album from a person's most-engaged photos, described in Meyer's own account of receiving one built around his daughter's death.",
      "numbers": "",
      "pitfall": "Calling them edge cases in the backlog. The label does the deprioritising for you and they never get built.",
      "source": "Eric Meyer and Sara Wachter-Boettcher, Design for Real Life, A Book Apart (2016).",
      "verify": {
        "status": "adjusted",
        "note": "Verified the book, its authors and publisher, and confirmed that Meyer and Wachter-Boettcher are credited with making the case for taking users' stress cases seriously, from A List Apart's interview with Wachter-Boettcher about the book. I have adjusted the framing: the master list title says edge cases, and the book's specific argument is that this term is the wrong one and should be replaced with stress cases. The Year in Review incident is Meyer's own widely documented account."
      },
      "belongs": {
        "verdict": "core",
        "why": "It changes what gets built, not just how it looks, and the renaming is a genuine contribution rather than a slogan."
      },
      "related": [
        625,
        615,
        627,
        597
      ]
    },
    {
      "n": 627,
      "title": "Right-to-left mirroring",
      "aka": [
        "Bidirectionality",
        "RTL layout",
        "Bidi"
      ],
      "oneLine": "For Arabic, Hebrew and Urdu the layout flips, but not everything in it does.",
      "demo": {
        "caption": "Same four parts. The arrow, the checkbox and the text swap sides; the clock and the search glyph are drawn identically.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Left to right</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 150\"><path class=\"s\" d=\"M14 22 H62\"/><path class=\"s\" d=\"M22 16 L14 22 L22 28\"/><rect class=\"s\" x=\"14\" y=\"50\" width=\"12\" height=\"12\"/><path class=\"s\" d=\"M17 56 L20 59 L24 53\"/><text class=\"t\" x=\"34\" y=\"60\">Remember me</text><rect class=\"f-mute\" x=\"14\" y=\"82\" width=\"130\" height=\"5\"/><rect class=\"f-mute\" x=\"14\" y=\"92\" width=\"130\" height=\"5\"/><rect class=\"f-mute\" x=\"14\" y=\"102\" width=\"80\" height=\"5\"/><g transform=\"translate(28,128)\"><circle class=\"s\" cx=\"0\" cy=\"0\" r=\"11\"/><path class=\"s\" d=\"M0 0 V-6\"/><path class=\"s\" d=\"M0 0 H5\"/></g><g transform=\"translate(70,128)\"><circle class=\"s\" cx=\"0\" cy=\"0\" r=\"8\"/><path class=\"s\" d=\"M6 6 L12 12\"/></g></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Right to left</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 160 150\"><path class=\"s\" d=\"M146 22 H98\"/><path class=\"s\" d=\"M138 16 L146 22 L138 28\"/><rect class=\"s\" x=\"134\" y=\"50\" width=\"12\" height=\"12\"/><path class=\"s\" d=\"M137 56 L140 59 L144 53\"/><text class=\"t\" x=\"126\" y=\"60\" text-anchor=\"end\">Remember me</text><rect class=\"f-mute\" x=\"16\" y=\"82\" width=\"130\" height=\"5\"/><rect class=\"f-mute\" x=\"16\" y=\"92\" width=\"130\" height=\"5\"/><rect class=\"f-mute\" x=\"66\" y=\"102\" width=\"80\" height=\"5\"/><g transform=\"translate(132,128)\"><circle class=\"s\" cx=\"0\" cy=\"0\" r=\"11\"/><path class=\"s\" d=\"M0 0 V-6\"/><path class=\"s\" d=\"M0 0 H5\"/></g><g transform=\"translate(90,128)\"><circle class=\"s\" cx=\"0\" cy=\"0\" r=\"8\"/><path class=\"s\" d=\"M6 6 L12 12\"/></g></svg></div></div></div>"
      },
      "what": "In a right-to-left language the reading direction reverses, so the layout mirrors: navigation moves to the right, text right-aligns, back arrows point right, checkboxes sit to the right of their labels. Some things stay put. Material Design's guidance is that circular representations of time do not mirror, so clocks still run clockwise and refresh icons keep their direction. Physical objects such as keyboards and headsets are not mirrored, and neither are icons that depict a right-handed grip, such as the magnifying glass.",
      "why": "A half-mirrored interface is worse than an unmirrored one, because the inconsistency makes the reader check every element. Getting the rules right also means the same code can serve both directions rather than needing a separate build.",
      "how": [
        "Use CSS logical properties (margin-inline-start, padding-inline-end, text-align: start) instead of left and right, and the layout mirrors itself.",
        "Mirror directional icons (back, forward, redo, indent) and leave non-directional ones alone.",
        "Leave numerals, phone numbers and Latin-script strings in their own direction inside right-to-left text.",
        "Do not mirror slashes used to mean off. Material notes that most right-to-left countries keep the left-to-right slash.",
        "Test with real translated content, not with reversed English, which hides bidirectional string problems."
      ],
      "example": "Material's own worked set: the back button points right, the checkbox sits right of its label and the volume slider reverses, while the refresh icon, the history icon, a keyboard, a headset and the search glyph all stay exactly as they were.",
      "numbers": "",
      "pitfall": "Flipping the entire layout with a CSS transform. It mirrors the text too, along with photographs and the brand mark.",
      "source": "Google, Material Design 2, Bidirectionality (m2.material.io). Material 2 is no longer maintained and Material 3 carries a shorter Bidirectionality and RTL page, but the detailed mirroring rules quoted here live in the Material 2 page. The underlying text behaviour is the Unicode Bidirectional Algorithm, Unicode Standard Annex 9.",
      "verify": {
        "status": "verified",
        "note": "Every rule here is quoted from the Material bidirectionality page: back and forward buttons reverse; linear time mirrors but circular time does not, so clocks still turn clockwise and a clockwise refresh icon is not mirrored; most right-to-left countries do not mirror slashes; physical objects such as keyboards and headsets are not mirrored; icons depicting a right-handed grip such as the search glyph are not mirrored; numbers and untranslated text keep their own direction. One correction to the source line, which said only Material Design: the detailed rules are on the Material 2 page, which now carries a banner saying it is no longer maintained, and Material 3's page is a different and much shorter document. I also replaced an example that asserted specific behaviour in Google's Arabic mobile apps, which I could not check, with Material's own documented cases."
      },
      "belongs": {
        "verdict": "core",
        "why": "A concrete, rule-based skill any designer working on a product with international reach has to have, with published guidance to follow."
      },
      "related": [
        626,
        632,
        633
      ]
    },
    {
      "n": 628,
      "title": "Offline and connectivity states",
      "aka": [
        "Offline first",
        "Degraded connectivity design"
      ],
      "oneLine": "Treat a lost connection as a normal state to be designed, not an error to be reported.",
      "demo": {
        "caption": "Left blocks the work until the network returns. Right keeps taking it, and says what is queued and what is saved.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Working or broken</span><div class=\"db-stage db-stage--tight\"><div class=\"db-stack\"><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class=\"db-centre\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\">No connection</span><span class=\"db-note\">Your changes could not be saved</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Retry</span></div></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">The states in between</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Working offline</span><span class=\"db-note\">3 changes queued</span></div><div class=\"db-lines\"><i></i><i></i><i></i><i></i><i></i></div><span class=\"db-input\">still typing here</span><span class=\"db-note\">Saved on this device, will sync</span></div></div></div></div>"
      },
      "what": "Alex Feyerke made the case for offline-first design in A List Apart in December 2013, arguing that designers assume users have the latest devices and a good connection because that is what designers have. Offline-first inverts the default: the app works from local data and syncs when it can, rather than failing when the network drops. In interface terms that means showing connection state, queueing actions, and being clear about what has actually been saved.",
      "why": "Connections fail on trains, in lifts, in hospitals and across most of the world's mobile networks. An interface that only distinguishes working from broken makes people retype things and lose work. One that shows queued, syncing and synced lets them carry on.",
      "how": [
        "Show the state, not just the failure. Saved locally, will sync is different from Saved.",
        "Queue actions rather than rejecting them, and show the queue so nothing is silently lost.",
        "Make the offline indicator quiet and persistent rather than a modal that blocks work.",
        "Never lose typed input to a failed request. Keep it in the field or in local storage.",
        "Say what is unavailable offline rather than showing empty screens that look like data loss."
      ],
      "example": "Google Docs shows a Working offline indicator and keeps accepting edits, then reconciles them when the connection returns.",
      "numbers": "",
      "pitfall": "A binary online-or-offline flag. The common real case is a connection that is technically up and effectively useless, and a binary check reports everything as fine.",
      "source": "Alex Feyerke, Designing Offline-First Web Apps, A List Apart (4 December 2013).",
      "verify": {
        "status": "verified",
        "note": "Confirmed the article, author and publication date on A List Apart, and confirmed from secondary sources that the term offline first is credited to this piece. The technical enabler, service workers, is a separate W3C specification and is not what the design principle rests on."
      },
      "belongs": {
        "verdict": "core",
        "why": "A state that every networked interface enters and that most interfaces still handle as a generic error."
      },
      "related": [
        625,
        594,
        636,
        575
      ]
    },
    {
      "n": 629,
      "title": "Permission request timing",
      "aka": [
        "Permission priming",
        "Just-in-time permissions"
      ],
      "oneLine": "Ask for access at the moment the person uses the feature that needs it, not at launch.",
      "demo": {
        "caption": "The alert is identical. What differs is what happened immediately before it: nothing on the left, a tap on the right.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Asked at launch</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">The app has just opened</span><div class=\"db-lines\"><i></i><i></i></div></div></div><div class=\"db-row db-row--centre\"><span class=\"db-arrow\">&#8595;</span></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\">Allow Trailhead to use your location?</span><span class=\"db-note\">Trailhead shows where you are on the route.</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost\">Don't Allow</span><span class=\"db-btn\">Allow</span></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Asked by the feature</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">On the route, the person taps</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm\">Show my position</span></div></div></div><div class=\"db-row db-row--centre\"><span class=\"db-arrow\">&#8595;</span></div><div class=\"db-card\"><div class=\"db-col db-col--tight\"><span class=\"db-type\">Allow Trailhead to use your location?</span><span class=\"db-note\">Trailhead shows where you are on the route.</span><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--ghost\">Don't Allow</span><span class=\"db-btn\">Allow</span></div></div></div></div></div></div></div>"
      },
      "what": "Operating systems put a standard alert in front of any request for location, camera, microphone, contacts or tracking, and the app only supplies the sentence explaining why. Apple's guidance is to request permission only when the app clearly needs access, to wait until the person actually uses a feature that requires it, and to avoid requesting at launch unless the app cannot function without it. A pre-alert screen explaining the benefit is allowed, with strict rules.",
      "why": "A permission prompt at launch arrives before the person has any reason to say yes, and a denial is difficult to reverse because it sends them to system settings. Asking in context means the request answers a question they have just asked themselves.",
      "how": [
        "Trigger the request from the feature, not from app start.",
        "Write the purpose string as an active sentence naming the use. Apple's approved example is: The app records during the night to detect snoring sounds.",
        "If you show a priming screen first, give it exactly one button and call it Continue or Next, never Allow.",
        "Do not put a cancel or close option on a priming screen, and never offer a reward for granting permission.",
        "Design the denied path properly. The feature should degrade, not break."
      ],
      "example": "Apple's Core Location button, which grants one-time location access on tap, so a person can share their location for a single task without ever seeing a standing permission prompt.",
      "numbers": "",
      "pitfall": "A priming screen that imitates the system alert, or an arrow pointing at the Allow button. Apple names both as grounds for App Store rejection, alongside offering an incentive and showing an image of the alert.",
      "source": "Apple, Human Interface Guidelines, Privacy (Requesting permission).",
      "verify": {
        "status": "verified",
        "note": "Read the Apple Human Interface Guidelines Privacy page. Confirmed the instruction to request permission only when the app clearly needs access and to wait until people actually use a feature that requires it, the caution against launch-time requests, the snoring purpose string as the approved example against two rejected ones, the one-button pre-alert rule using Continue or Next rather than Allow, the ban on cancel or close options, and the four prohibited designs. Worth knowing the scope: Apple states the rejection consequence in the Tracking requests section, and the App Review reference it cites is 5.1.1 (iv), so the enforcement bite is clearest for tracking prompts even though the design guidance covers camera, microphone, location, contacts and calendar too."
      },
      "belongs": {
        "verdict": "core",
        "why": "A specific timing decision with documented platform rules and a real penalty for getting it wrong."
      },
      "related": [
        630,
        599,
        620,
        582
      ]
    },
    {
      "n": 630,
      "title": "Notification restraint",
      "aka": [
        "Interruption levels",
        "Alert budget"
      ],
      "oneLine": "Rank every notification by how much it deserves to interrupt, and send far fewer than you can.",
      "demo": {
        "caption": "Six alerts, all promoted to break through, and the switch is off. Two, ranked honestly, and it is still on.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Everything promoted</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\">Someone liked your post</span><span class=\"db-note db-note--accent\">time sensitive</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\">New in your feed</span><span class=\"db-note db-note--accent\">time sensitive</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\">Weekly summary ready</span><span class=\"db-note db-note--accent\">time sensitive</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\">Try our new theme</span><span class=\"db-note db-note--accent\">time sensitive</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\">Ade commented</span><span class=\"db-note db-note--accent\">time sensitive</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\">Two friends joined</span><span class=\"db-note db-note--accent\">time sensitive</span></div></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Alerts from this app</span><span class=\"db-note\">off</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Ranked and batched</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\">8 updates from your feed</span><span class=\"db-note\">passive</span></div></div><div class=\"db-card\"><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-type\">Your delivery arrives in 20 minutes</span><span class=\"db-note db-note--accent\">time sensitive</span></div></div><div class=\"db-row db-row--between db-row--nowrap\"><span class=\"db-note\">Alerts from this app</span><span class=\"db-note\">on</span></div></div></div></div></div>"
      },
      "what": "Apple's notification model gives four interruption levels: passive, active, time sensitive and critical. Passive is delivered quietly, active behaves normally, time sensitive can break through a Focus mode, and critical, reserved for health and safety, can break through silent mode and requires special entitlement. The design job is to assign the right level and to resist promoting things up the scale.",
      "why": "You need permission before sending anything at all, and people can change that decision in settings at any time, which in practice means downwards. Every low-value alert spends credit from an account you cannot top up, and the usual outcome is not annoyance but silence: the person turns all of them off, including the one that mattered. Apple also lets people switch off your time sensitive alerts specifically, and prompts them to reconsider periodically.",
      "how": [
        "Assign a level to every notification type before you build them, and default everything to passive.",
        "Reserve time sensitive for events happening now or within the hour, which is the test Apple sets. A package delivery is their example.",
        "Never dress marketing as an alert. Apple's guidance states that promotional notifications require the person's consent and must not break through Focus.",
        "Batch anything that arrives in bursts, so ten events produce one alert.",
        "Give per-type controls inside the app, so someone can silence one kind without switching everything off."
      ],
      "example": "Apple's own critical alerts, which require an entitlement from Apple and are meant for things like a glucose monitor warning, not for an app update.",
      "numbers": "Apple's Human Interface Guidelines define four notification interruption levels: passive, active (the default), time sensitive and critical. Only time sensitive and critical break through a Focus; only critical overrides the Ring and Silent switch. Time sensitive is meant for something happening now or within an hour.",
      "pitfall": "Marking everything time sensitive because the growth target needs opens. It works once, then the whole channel goes off.",
      "source": "Apple, Human Interface Guidelines, Managing notifications. The entitlement requirement for critical alerts comes from Apple's separate developer entitlement process, not from this page.",
      "verify": {
        "status": "verified",
        "note": "Read the current Managing notifications page. Confirmed the four interruption levels with active named as the default, the behaviour table showing that time sensitive and critical break through Focus while only critical overrides the Ring and Silent switch, the one-hour test for time sensitive, the reservation of critical alerts for urgent health and safety, the ban on marketing notifications using the time sensitive level, the requirement for explicit consent before any promotional notification, and the requirement to provide in-app settings. I corrected the previous claim that notification permission is granted once and revoked permanently: the page states plainly that the system lets people change the decision in settings, and Apple periodically re-prompts people about time sensitive alerts. No interruption-cost research is quoted, because none was verified."
      },
      "belongs": {
        "verdict": "core",
        "why": "A designer decides what interrupts a person and how often, which is one of the higher-consequence choices in a product."
      },
      "related": [
        629,
        568,
        631,
        620
      ]
    },
    {
      "n": 631,
      "title": "Personalisation versus predictability",
      "aka": [
        "Adaptive versus adaptable interfaces"
      ],
      "oneLine": "Interfaces that rearrange themselves to suit you usually cost more in lost muscle memory than they save.",
      "demo": {
        "caption": "Follow the accented item between visits. On the left it has moved. On the right it is where your hand expects.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Adaptive: reordered by use</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">First visit</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Cut</span><span class=\"db-note\">Copy</span><span class=\"db-note\">Paste</span><span class=\"db-note db-note--accent\">Format</span><span class=\"db-note\">Insert</span></div></div><span class=\"db-note\">Next visit</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-note db-note--accent\">Format</span><span class=\"db-note\">Cut</span><span class=\"db-note\">Paste</span><span class=\"db-note\">Copy</span><span class=\"db-note\">Insert</span></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Static: same place every time</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">First visit</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Cut</span><span class=\"db-note\">Copy</span><span class=\"db-note\">Paste</span><span class=\"db-note db-note--accent\">Format</span><span class=\"db-note\">Insert</span></div></div><span class=\"db-note\">Next visit</span><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Cut</span><span class=\"db-note\">Copy</span><span class=\"db-note\">Paste</span><span class=\"db-note db-note--accent\">Format</span><span class=\"db-note\">Insert</span></div></div></div></div></div></div>"
      },
      "what": "There are two ways to fit an interface to a person. Adaptive means the system rearranges things based on observed behaviour. Adaptable means the person rearranges things themselves. Findlater and McGrenere tested both against a static layout in 2004, using split menus built from real Microsoft Word 2000 menus and twenty weeks of one person's logged menu selections. The static menu was significantly faster than the adaptive one in every presentation order. The adaptable menu was no slower than static in two orders of the three, and it was the one most people preferred.",
      "why": "People navigate familiar interfaces by position, not by reading. Anything that moves destroys that, and the system's guess about what you want next is wrong often enough to cost more than it saves. Giving the person the controls keeps the benefit of personalisation without the instability.",
      "how": [
        "Keep positions stable. If something must be promoted, add it rather than moving the original.",
        "Prefer adaptable to adaptive: let people pin, reorder and hide, and remember their choices.",
        "If you do adapt automatically, make it visible and reversible, and never move the most-used items.",
        "Use recency as an addition (a Recent section) rather than as a reordering of the main list."
      ],
      "example": "Microsoft Office 2000's adaptive menus, which showed a short menu by default and moved items into it as you used them. Findlater and McGrenere took the two rules behind it, frequency and recency, for their own adaptive condition, and later Office versions dropped the behaviour.",
      "numbers": "Twenty-seven participants. Asked which menu they preferred overall, 55 per cent chose adaptable, 30 per cent adaptive and 15 per cent static, even though the static split menu was the optimal one. Sixteen of the twenty-seven also judged adaptable the most efficient, and exactly one person found it the most frustrating.",
      "pitfall": "Personalising the navigation of a tool people use daily. The faster someone gets at your product, the more the reshuffling costs them.",
      "source": "Leah Findlater and Joanna McGrenere, A Comparison of Static, Adaptive, and Adaptable Menus, CHI (2004).",
      "verify": {
        "status": "verified",
        "note": "Read the full paper. Static was significantly faster than adaptive in all three presentation orders. Adaptable beat adaptive when it was not shown first and was not significantly different from static; shown first, it was significantly slower, because four of the five people who never customised met it first. The 55, 30 and 15 per cent preference split is the paper's own wording, from twenty-seven undergraduate participants. Two things tightened here. The menus were split menus after Sears and Shneiderman, built on Word 2000's structure and log data, so the paper is modelled partly on Office 2000 rather than being a test of it; the authors in fact suggest an adaptive split menu may be preferable to Microsoft's design. And no reason is claimed for Microsoft dropping the feature, only that later versions do not use it."
      },
      "belongs": {
        "verdict": "core",
        "why": "A recurring product decision with a controlled study behind it that points the opposite way to most product instincts."
      },
      "related": [
        632,
        633,
        634,
        572
      ]
    },
    {
      "n": 632,
      "title": "Internal, external, functional and aesthetic consistency",
      "aka": [
        "Four kinds of consistency"
      ],
      "oneLine": "Consistency splits four ways, and the four are not equally worth protecting.",
      "demo": {
        "none": "The four kinds are told apart by how a control behaves rather than by how it looks, which static markup cannot show, and the one visibly demonstrable kind, matching outside conventions, is drawn next door at 633."
      },
      "what": "Lidwell, Holden and Butler name four kinds. Aesthetic consistency is consistency of style and appearance, which builds recognition. Functional consistency means the same element behaves the same way wherever it appears. Internal consistency is consistency within one system. External consistency is consistency with other systems the person already uses. The four can pull against each other, which is why naming them helps.",
      "why": "Arguments about consistency usually collapse because nobody has said which kind is at stake. A component that looks slightly different but behaves identically is a much smaller problem than one that looks identical and behaves differently. Ranking functional above aesthetic settles most of these disputes quickly.",
      "how": [
        "Protect functional consistency hardest. A control that looks the same must do the same thing.",
        "Allow aesthetic variation where it serves the content, provided behaviour holds.",
        "Check external consistency for anything with a strong convention: search boxes, shopping baskets, form controls.",
        "When internal and external consistency conflict, follow the convention people meet more often, which is usually the external one."
      ],
      "example": "A product that keeps its own visual language throughout (internal, aesthetic) while using the platform's standard date picker rather than a bespoke one (external, functional).",
      "numbers": "",
      "pitfall": "Enforcing aesthetic consistency across contexts that need to differ, so a marketing page and a data-heavy admin tool are forced into the same spacing and type scale, and the admin tool becomes unusable.",
      "source": "William Lidwell, Kritina Holden and Jill Butler, Universal Principles of Design, Rockport (2003; revised and updated 2010).",
      "verify": {
        "status": "verified",
        "note": "Verified the four named kinds against the Consistency chapter of Universal Principles of Design, Revised and Updated, which states: there are four kinds of consistency: aesthetic, functional, internal, and external, and defines aesthetic consistency as consistency of style and appearance."
      },
      "belongs": {
        "verdict": "core",
        "why": "A working vocabulary for the single most common design-review argument, from a standard reference."
      },
      "related": [
        633,
        631,
        634,
        573
      ]
    },
    {
      "n": 633,
      "title": "Platform convention adherence",
      "aka": [
        "Jakob's Law",
        "Native patterns"
      ],
      "oneLine": "People spend most of their time in other products, so they expect yours to work like those.",
      "demo": {
        "caption": "The same six parts on both pages: logo, navigation, search, basket, banner, text. Only one is findable without reading.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Same parts, moved</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 134\"><rect class=\"s-mute\" x=\"6\" y=\"8\" width=\"188\" height=\"118\"/><path class=\"s\" d=\"M14 17 H28 L26 27 H16 Z\"/><path class=\"s\" d=\"M17 17 C17 11, 25 11, 25 17\"/><path class=\"s-mute\" d=\"M6 34 H194\"/><rect class=\"f-mute\" x=\"168\" y=\"44\" width=\"20\" height=\"5\"/><rect class=\"f-mute\" x=\"168\" y=\"54\" width=\"20\" height=\"5\"/><rect class=\"f-mute\" x=\"168\" y=\"64\" width=\"20\" height=\"5\"/><rect class=\"s-mute\" x=\"14\" y=\"42\" width=\"144\" height=\"36\"/><rect class=\"f-mute\" x=\"14\" y=\"86\" width=\"144\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"96\" width=\"144\" height=\"6\"/><rect class=\"f\" x=\"80\" y=\"106\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"94\" y=\"109\" width=\"26\" height=\"5\"/><g transform=\"translate(178,112)\"><circle class=\"s\" cx=\"0\" cy=\"0\" r=\"5\"/><path class=\"s\" d=\"M4 4 L8 8\"/></g></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Where people reach</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 134\"><rect class=\"s-mute\" x=\"6\" y=\"8\" width=\"188\" height=\"118\"/><rect class=\"f\" x=\"14\" y=\"16\" width=\"10\" height=\"10\"/><rect class=\"f-mute\" x=\"28\" y=\"19\" width=\"26\" height=\"5\"/><rect class=\"f-mute\" x=\"74\" y=\"19\" width=\"18\" height=\"5\"/><rect class=\"f-mute\" x=\"98\" y=\"19\" width=\"18\" height=\"5\"/><rect class=\"f-mute\" x=\"122\" y=\"19\" width=\"18\" height=\"5\"/><g transform=\"translate(158,21)\"><circle class=\"s\" cx=\"0\" cy=\"0\" r=\"5\"/><path class=\"s\" d=\"M4 4 L8 8\"/></g><path class=\"s\" d=\"M174 17 H188 L186 27 H176 Z\"/><path class=\"s\" d=\"M177 17 C177 11, 185 11, 185 17\"/><path class=\"s-mute\" d=\"M6 34 H194\"/><rect class=\"s-mute\" x=\"14\" y=\"42\" width=\"172\" height=\"36\"/><rect class=\"f-mute\" x=\"14\" y=\"86\" width=\"172\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"96\" width=\"172\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"106\" width=\"110\" height=\"6\"/></svg></div></div></div>"
      },
      "what": "Jakob Nielsen stated it in 2000 as Jakob's Law of the Internet User Experience: users spend most of their time on other sites, so they prefer your site to work the same way as all the other sites they already know. Applied to apps it means following the platform: iOS navigation behaves like iOS, Android back behaves like Android back, and web forms behave like web forms. Novelty in these mechanics is spent from the same budget as novelty everywhere else, and it buys less.",
      "why": "Learned expectations are a free resource. Matching them means someone can use a feature the first time without instruction. Breaking them means every person pays a small learning cost, and most of them will not pay it.",
      "how": [
        "Use the platform's own components for navigation, dates, pickers and system sheets before building your own.",
        "Keep the conventional positions: logo top left links home, basket top right, search where people reach for it.",
        "Spend your originality on the content and the brand, not on the mechanics of scrolling and selecting.",
        "When you do break a convention, make the new behaviour visible on first use rather than hoping it is discovered."
      ],
      "example": "The back gesture on Android and the swipe-from-left-edge on iOS. An app that intercepts either one and does something else gets uninstalled quickly.",
      "numbers": "",
      "pitfall": "Confusing convention with quality. Following a convention that is itself bad, such as carousel hero banners, is not the same as respecting expectations.",
      "source": "Jakob Nielsen, End of Web Design, Nielsen Norman Group (22 July 2000), which states Jakob's Law of the Internet User Experience.",
      "verify": {
        "status": "verified",
        "note": "Checked the article on Nielsen Norman Group's own site. The name is Jakob's Law of the Internet User Experience, not the Web User Experience as it is often rendered, and the statement itself is short: users spend most of their time on other sites. Publication date 22 July 2000. The application to native platforms is an extension by later writers rather than Nielsen's own wording, which is about websites."
      },
      "belongs": {
        "verdict": "core",
        "why": "It sets the default position for every interaction decision and gives a reason to justify departures rather than assume them."
      },
      "related": [
        632,
        573,
        631,
        588
      ]
    },
    {
      "n": 634,
      "title": "Scroll restoration and memory of place",
      "aka": [
        "Back-button position",
        "Scroll anchoring"
      ],
      "oneLine": "Going back should put someone where they were, not at the top of the page.",
      "demo": {
        "caption": "The bar at each panel's edge is the scroll position. Press back: on the left it jumps to the top.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Back lands at the top</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 140\"><rect class=\"s-mute\" x=\"6\" y=\"14\" width=\"76\" height=\"104\"/><rect class=\"f-mute\" x=\"14\" y=\"22\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"34\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"46\" width=\"48\" height=\"6\"/><rect class=\"f-accent\" x=\"14\" y=\"58\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"70\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"82\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"94\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"106\" width=\"48\" height=\"6\"/><rect class=\"s-mute\" x=\"74\" y=\"20\" width=\"3\" height=\"92\"/><rect class=\"f\" x=\"74\" y=\"58\" width=\"3\" height=\"24\"/><text class=\"t\" x=\"6\" y=\"132\">before</text><text class=\"t\" x=\"88\" y=\"56\">back</text><path class=\"s-mute\" d=\"M90 66 H108\"/><path class=\"s-mute\" d=\"M102 61 L108 66 L102 71\"/><rect class=\"s-mute\" x=\"118\" y=\"14\" width=\"76\" height=\"104\"/><rect class=\"f-mute\" x=\"126\" y=\"22\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"126\" y=\"34\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"126\" y=\"46\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"126\" y=\"58\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"126\" y=\"70\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"126\" y=\"82\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"126\" y=\"94\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"126\" y=\"106\" width=\"48\" height=\"6\"/><rect class=\"s-mute\" x=\"186\" y=\"20\" width=\"3\" height=\"92\"/><rect class=\"f\" x=\"186\" y=\"20\" width=\"3\" height=\"24\"/><text class=\"t\" x=\"118\" y=\"132\">after back</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Back lands where you were</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 140\"><rect class=\"s-mute\" x=\"6\" y=\"14\" width=\"76\" height=\"104\"/><rect class=\"f-mute\" x=\"14\" y=\"22\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"34\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"46\" width=\"48\" height=\"6\"/><rect class=\"f-accent\" x=\"14\" y=\"58\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"70\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"82\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"94\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"14\" y=\"106\" width=\"48\" height=\"6\"/><rect class=\"s-mute\" x=\"74\" y=\"20\" width=\"3\" height=\"92\"/><rect class=\"f\" x=\"74\" y=\"58\" width=\"3\" height=\"24\"/><text class=\"t\" x=\"6\" y=\"132\">before</text><text class=\"t\" x=\"88\" y=\"56\">back</text><path class=\"s-mute\" d=\"M90 66 H108\"/><path class=\"s-mute\" d=\"M102 61 L108 66 L102 71\"/><rect class=\"s-mute\" x=\"118\" y=\"14\" width=\"76\" height=\"104\"/><rect class=\"f-mute\" x=\"126\" y=\"22\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"126\" y=\"34\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"126\" y=\"46\" width=\"48\" height=\"6\"/><rect class=\"f-accent\" x=\"126\" y=\"58\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"126\" y=\"70\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"126\" y=\"82\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"126\" y=\"94\" width=\"48\" height=\"6\"/><rect class=\"f-mute\" x=\"126\" y=\"106\" width=\"48\" height=\"6\"/><rect class=\"s-mute\" x=\"186\" y=\"20\" width=\"3\" height=\"92\"/><rect class=\"f\" x=\"186\" y=\"58\" width=\"3\" height=\"24\"/><text class=\"t\" x=\"118\" y=\"132\">after back</text></svg></div></div></div>"
      },
      "what": "Browsers restore scroll position on history navigation by default. The HTML standard exposes this through history.scrollRestoration, which takes two values: auto, the default, restores the position the person had scrolled to; manual hands the job to the page. Single-page applications routinely set manual or replace the history stack, and then forget to restore anything, so every back press lands at the top.",
      "why": "Someone forty items down a filtered list who opens an item and comes back has done real work to get to that position. Losing it makes browsing a catalogue exhausting, and it is the main reason infinite scroll gets blamed for problems that are actually history handling.",
      "how": [
        "Leave scrollRestoration on auto unless you have a specific reason, and if you set manual, restore the position yourself.",
        "In a single-page app, store the scroll offset with the route entry and reapply it after the content has rendered, not before.",
        "For lists that load in batches, restore the batch as well as the offset, or the position is meaningless.",
        "Add scroll-margin-top to anchor targets so restored positions are not hidden under a sticky header.",
        "Test with the browser back button, not with an in-page Back link, because they behave differently."
      ],
      "example": "An e-commerce listing where tapping a product and pressing back returns you to the same row you left, rather than to the top of an unfiltered list.",
      "numbers": "",
      "pitfall": "Restoring the offset before the content has loaded. The page snaps to the right pixel, then the content arrives and pushes everything down.",
      "source": "WHATWG HTML Standard, History.scrollRestoration; documented on MDN. As a design principle it is an application of state persistence (575).",
      "verify": {
        "status": "verified",
        "note": "Verified the scrollRestoration property and its two values, auto and manual, against MDN and the Chrome for Developers post announcing it, plus a WHATWG HTML issue discussing how it interacts with fragment navigation. The design guidance around it is craft convention rather than a cited principle, and I have said so."
      },
      "belongs": {
        "verdict": "core",
        "why": "One of the most common and most annoying interaction failures on the modern web, with a specific and checkable technical cause."
      },
      "related": [
        575,
        603,
        604,
        635
      ]
    },
    {
      "n": 635,
      "title": "Deep linking and shareable state",
      "aka": [
        "URL as state",
        "Addressability"
      ],
      "oneLine": "Anything worth looking at should have its own address that can be copied, bookmarked and sent.",
      "demo": {
        "caption": "Both people are looking at the same filtered list. Compare the address, then compare what the paste opens.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">State held in memory</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Your screen</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Open</span><span class=\"db-btn db-btn--sm db-btn--ghost\">By date</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Page 3</span></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div><span class=\"db-input\">shop.example.com/orders</span><div class=\"db-row db-row--centre\"><span class=\"db-arrow\">&#8595;</span></div><span class=\"db-note\">Opened from the pasted address</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">All</span><span class=\"db-btn db-btn--sm db-btn--ghost\">By relevance</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Page 1</span></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">State held in the address</span><div class=\"db-stage db-stage--tight\"><div class=\"db-col db-col--tight\"><span class=\"db-note\">Your screen</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Open</span><span class=\"db-btn db-btn--sm db-btn--ghost\">By date</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Page 3</span></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div><span class=\"db-input\">shop.example.com/orders?status=open&amp;sort=date&amp;page=3</span><div class=\"db-row db-row--centre\"><span class=\"db-arrow\">&#8595;</span></div><span class=\"db-note\">Opened from the pasted address</span><div class=\"db-card\"><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--tight\"><span class=\"db-btn db-btn--sm db-btn--ghost\">Open</span><span class=\"db-btn db-btn--sm db-btn--ghost\">By date</span><span class=\"db-btn db-btn--sm db-btn--ghost\">Page 3</span></div><div class=\"db-lines\"><i></i><i></i><i></i></div></div></div></div></div></div></div>"
      },
      "what": "A view that cannot be linked to cannot be shared, bookmarked, indexed or returned to. Putting state in the URL means filters, tabs, sort order, search terms and pagination all survive a refresh and a paste into a message. Tim Berners-Lee's 1998 W3C note Cool URIs Don't Change makes the related argument that once an address exists it should keep working, and that instability is an organisational failure rather than a technical one.",
      "why": "The URL is the only piece of interface state that people can move between contexts by hand. Losing it costs support tickets (I cannot show you what I am seeing), lost search traffic, and a broken back button.",
      "how": [
        "Put filters, sort, tab and search into query parameters, and read them back on load.",
        "Give modals and drawers their own routes if they hold content someone might want to link to.",
        "Keep the URL updating during infinite scroll so the position can be shared.",
        "Redirect old addresses rather than deleting them when structure changes.",
        "Test the paste path: copy the address, open it in a private window, and check you land on the same view."
      ],
      "example": "Google Maps encodes the location, zoom and layer in the URL, so a pasted link opens the same view for the recipient.",
      "numbers": "",
      "pitfall": "Modals with no route. A person opens a settings panel, refreshes, and lands on the dashboard with no idea how to get back.",
      "source": "Tim Berners-Lee, Cool URIs Don't Change, W3C (1998), for URL persistence. Deep linking as a pattern has no single named origin.",
      "verify": {
        "status": "verified",
        "note": "Verified the W3C style note Cool URIs Don't Change, published 1998 and still hosted at w3.org/Provider/Style/URI, including its argument that URI instability is caused by the organisation rather than by HTTP. Deep linking as a design pattern I could not attribute to a single source and have not tried to."
      },
      "belongs": {
        "verdict": "core",
        "why": "Addressability decides whether a view can be shared, found or returned to, which affects support, search and basic usability."
      },
      "related": [
        634,
        603,
        607,
        649
      ]
    },
    {
      "n": 636,
      "title": "Autosave and version history",
      "aka": [
        "Automatic saving",
        "Revision history"
      ],
      "oneLine": "Save continuously without being asked, and keep enough history that saving cannot destroy anything.",
      "demo": {
        "caption": "Both save every keystroke. Only the right keeps the earlier states, so a bad edit an hour ago is still recoverable.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Autosave alone</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 106\"><path class=\"s-mute\" d=\"M12 70 H186\"/><circle class=\"s-mute\" cx=\"24\" cy=\"70\" r=\"4\"/><path class=\"s-mute\" d=\"M20 74 L28 66\"/><circle class=\"s-mute\" cx=\"60\" cy=\"70\" r=\"4\"/><path class=\"s-mute\" d=\"M56 74 L64 66\"/><circle class=\"s-mute\" cx=\"96\" cy=\"70\" r=\"4\"/><path class=\"s-mute\" d=\"M92 74 L100 66\"/><circle class=\"s-mute\" cx=\"132\" cy=\"70\" r=\"4\"/><path class=\"s-mute\" d=\"M128 74 L136 66\"/><circle class=\"f\" cx=\"168\" cy=\"70\" r=\"4\"/><text class=\"t\" x=\"156\" y=\"90\">now</text><text class=\"t\" x=\"12\" y=\"96\">each save overwrites the last</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Autosave with history</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 106\"><path class=\"s-mute\" d=\"M12 70 H186\"/><circle class=\"f\" cx=\"24\" cy=\"70\" r=\"4\"/><circle class=\"f\" cx=\"60\" cy=\"70\" r=\"4\"/><circle class=\"f\" cx=\"96\" cy=\"70\" r=\"4\"/><circle class=\"f\" cx=\"132\" cy=\"70\" r=\"4\"/><circle class=\"f\" cx=\"168\" cy=\"70\" r=\"4\"/><path class=\"s-accent\" d=\"M168 62 C150 36, 78 36, 60 62\"/><path class=\"s-accent\" d=\"M55 55 L60 64 L65 55\"/><text class=\"t\" x=\"86\" y=\"32\">restore</text><text class=\"t\" x=\"156\" y=\"90\">now</text><text class=\"t\" x=\"12\" y=\"96\">every save kept</text></svg></div></div></div>"
      },
      "what": "Autosave removes the explicit save action and writes changes as they happen. On its own that is dangerous, because it also removes the ability to abandon a bad edit by closing without saving. The pair that works is autosave plus version history: every change is kept, and the person can look back and restore an earlier state. Without the second half, autosave converts a forgotten save into an unrecoverable overwrite.",
      "why": "Nobody should lose work to a crash, a closed tab or a flat battery. Continuous saving also changes how people work, because they stop treating every edit as a commitment and start exploring, which is the point of safe exploration.",
      "how": [
        "Autosave and keep versions. Shipping one without the other is worse than shipping neither.",
        "Show save state honestly. Saving, All changes saved and Saved offline are three different facts.",
        "Name versions where you can (before publishing, after import) so the history is browsable rather than a list of timestamps.",
        "Keep a real undo stack in the session as well as versions on the server; they solve different problems.",
        "For destructive edits inside an autosaved document, still offer undo rather than relying on version restore."
      ],
      "example": "Google Docs saves continuously and keeps a named version history under File, Version history, so an accidental deletion can be reversed days later.",
      "numbers": "",
      "pitfall": "Autosave over a shared document with no history and no conflict handling. Two people edit, the last write wins, and the other person's work is gone with no record that it existed.",
      "source": "Origin unclear as a named principle. It follows from protecting the user's work, covered at 574, and from undo over confirm, at 584.",
      "verify": {
        "status": "unverified",
        "note": "I could not find an originating source for autosave with version history as a named design principle. It is a product pattern, implemented widely (Google Docs, Apple's Auto Save and Versions, Figma) and derived from the older principle of protecting the user's work. Rather than attach a plausible-looking citation, I have said the origin is unclear and pointed at the two master-list principles it descends from."
      },
      "belongs": {
        "verdict": "adjacent",
        "why": "Downgraded from core on review. Data loss is the worst outcome an interface can produce, but this entry has no origin of its own and derives entirely from two principles already in the reference: protect the user's work at 574, and prefer undo to confirmation at 584. What it adds is one good implementation rule, that autosave without version history is worse than neither, which makes it a well-argued application rather than a fundamental in its own right."
      },
      "related": [
        574,
        584,
        575,
        628
      ]
    },
    {
      "n": 9628,
      "title": "Timeouts and session expiry",
      "aka": [
        "Session limits",
        "Timing adjustable"
      ],
      "oneLine": "If the interface imposes a time limit, warn before it bites and let people extend it.",
      "demo": {
        "caption": "Same limit on both. The right warns before it lands, leaves at least twenty seconds to respond, and extends.",
        "html": "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Expires silently</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 106\"><path class=\"s-mute\" d=\"M12 60 H150\"/><path class=\"s\" d=\"M150 48 V72\"/><text class=\"t\" x=\"12\" y=\"44\">session</text><text class=\"t\" x=\"136\" y=\"86\">limit</text><text class=\"t\" x=\"12\" y=\"100\">no warning: signed out, form gone</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Warns, then extends</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 106\"><path class=\"s-mute\" d=\"M12 60 H150\"/><path class=\"s\" d=\"M150 48 V72\"/><path class=\"s-accent\" d=\"M112 48 V72\"/><path class=\"s-accent\" d=\"M150 60 H188\"/><path class=\"s-accent\" d=\"M182 55 L188 60 L182 65\"/><text class=\"t\" x=\"12\" y=\"44\">session</text><text class=\"t\" x=\"76\" y=\"44\">warning</text><text class=\"t\" x=\"154\" y=\"44\">extended</text><text class=\"t\" x=\"136\" y=\"86\">limit</text><text class=\"t\" x=\"12\" y=\"100\">warned, then extended</text></svg></div></div></div>"
      },
      "what": "Many systems log people out, expire a form, or clear a basket after a period of inactivity. WCAG 2.2 covers this under Success Criterion 2.2.1, Timing Adjustable, at Level A: where a time limit is set by the content, the person must be able to turn it off, adjust it, or extend it, with a small set of exceptions such as real-time events and limits longer than twenty hours. The extension requirement includes being warned before the limit expires and being given at least twenty seconds to ask for more time.",
      "why": "Time limits punish exactly the people who need longest: anyone using a screen reader, anyone reading slowly, anyone interrupted by a child or a phone call. Losing thirty minutes of a benefits application to a silent session expiry is a real and common harm.",
      "how": [
        "Warn before expiry with a visible countdown and an obvious Stay signed in control.",
        "Save the work first, so an expiry costs a login rather than the form contents.",
        "Give a generous default and let people extend it at least ten times, which is what the criterion asks.",
        "On return after expiry, restore the person to where they were rather than to the home page."
      ],
      "example": "The GOV.UK session timeout warning dialogue, which appears before a service signs someone out and offers to continue the session.",
      "numbers": "WCAG 2.2 Success Criterion 2.2.1 Timing Adjustable, Level A. The criterion's extension route requires warning the user, giving at least 20 seconds to respond with a simple action, and allowing extension at least ten times. Limits over 20 hours are exempt.",
      "pitfall": "Expiring the session without saving. The person comes back from a phone call to a login screen and forty minutes of typing is gone.",
      "source": "W3C, WCAG 2.2 Success Criterion 2.2.1 Timing Adjustable (Level A).",
      "verify": {
        "status": "verified",
        "note": "This is a published W3C success criterion whose requirements (turn off, adjust, or extend; warning plus at least 20 seconds to respond; at least ten extensions; the 20-hour exception) are stated in the normative text of WCAG. Added as a gap: nothing in master list entries 566 to 636 covers time limits, despite them being a Level A requirement and a routine cause of lost work."
      },
      "belongs": {
        "verdict": "core",
        "why": "A design decision with a Level A accessibility requirement attached, and it is missing from the range it belongs in."
      },
      "related": [
        628,
        636,
        575,
        574
      ]
    }
  ]
};
