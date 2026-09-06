# Playbook: landing page and small business site

Use with `core/CORE.md`. This is the entry list for a page whose job is to get
one kind of visitor to do one thing: a service business site, a product
landing page, a campaign page. Ranked by leverage. Pull any entry with
`query.py entry <n>` for the full method.

## The job

A landing page has one job and one primary action (#683). Everything on it
either moves the visitor toward that action or gets in the way. The Unbounce
figure the corpus records is an attention ratio of one to one: one link, one
goal (#683 numbers). Most small business sites fail this before anything else
because the home page tries to be the whole company.

## Ranked entries

### 1. What it says, and in what order
- #683 One primary job per page
- #682 Message hierarchy: cut the brand attributes to about three, with
  supporting words
- #685 Benefit before feature; #684 Call-to-action design; #621 Verb-first
  button labels
- #686 Proof and evidence placement: proof sits next to the claim it supports,
  not in a testimonials section three screens down
- #669 Inverted pyramid; #664 Front-loaded sentences; #670 Meaningful headings
- #668 Scannability: 79 per cent of users scan; write for them
- #663 Plain language; #667 Reading level targeting (UK Home Office: reading
  age 9 at most)
- #1046 Jargon in calls to action (failure mode)

### 2. What the visitor sees first
- #443 The fold: 57 per cent of viewing time above it, 74 per cent in the
  first two screenfuls (NN/g 2018). The first screen carries the job, the
  proof and the action.
- #94 Focal point; #96 Hierarchy; #622 One prominent action, two at most
- #602 Scroll affordance: the first screen must not look finished (the false
  bottom)
- #9477 Text over image legibility; #1030 Text on busy imagery without a scrim
- #481 Authenticity over generic stock: a real photo of the real premises,
  van, team or work. If there is none, use none.

### 3. Structure
- #409 Hierarchical grid; #119 White space (macro); #446 Whitespace scale
- #372 Measure: prose columns capped in `ch`, checked at tablet width where a
  two-column grid collapses and the measure doubles
- #604 Sticky elements: a sticky header costs screen on every scroll; NN/g's
  13:1 content-to-chrome ratio is the reasonable end
- #605 Global, local, contextual navigation; #644 Labelling systems; #649
  Findability: labels are what the visitor calls things, not what the business
  calls them
- #660 URL design

### 4. Trust
- #686 Proof placement; #481 real imagery; #687 Readable legal copy
- #995 False urgency and scarcity; #990 Hidden costs; #989 Disguised ads.
  Under the UK DMCC Act 2024 (in force 6 April 2025) these are unlawful, not
  merely unwise.
- #997 Honest consent design for any cookie or contact consent
- #850 Tone of voice, set per context: the sales copy and the error message
  are not the same dial settings

### 5. The contact or booking form
Follow `playbooks/form.md`. The short version: labels above fields (#612),
single column (#613), only the fields needed (#1043), 16px inputs (#1013),
verb-first submit button naming the outcome (#621).

### 6. Craft that shows on the phone first
- #791 Mobile-first; #793 Fluid and intrinsic layout; #9791 Viewport meta and
  user zoom (never disable zoom)
- #798 LCP 2.5s; #800 CLS 0.1; #805 Layout-shift prevention (reserve image
  space); #804 Font loading
- #803 Responsive images and art direction; #482 Focal-point cropping per
  breakpoint; #483 Aspect-ratio discipline
- #797 Performance as a design constraint: web.dev's example budget is under
  170KB of critical-path resources
- #817 Share image at 1200 by 630; #818 Favicon set; #819 404 page
- #1060 Header that wraps at intermediate widths (test 700 to 1000px, not just
  phone and desktop)

## Numbers for this artefact

| Figure | Entry |
| --- | --- |
| One link, one goal (attention ratio 1:1) | #683 |
| 57 per cent of viewing time above the fold | #443 |
| 79 per cent of users scan | #668 |
| Page title 65 characters or fewer, front-loaded | #664 |
| Reading age 9 (UK Home Office) | #667 |
| LCP 2.5s, INP 200ms, CLS 0.1 | #1022 |
| Critical path under 170KB (web.dev example) | #797 |
| Share image 1200 by 630 | #817 |
| Body 16px, measure 45 to 75 | #1013, #372 |
| Contrast 4.5:1 body, 3:1 large | #690 |

## Checks before showing

1. Cover everything but the first screen. Can a stranger say what the business
   does, for whom, and what to press? (#683, #443)
2. Count the buttons on the first screen. More than two is a hierarchy failure
   (#622).
3. Run `measure.mjs` at 1280 and 390. Fix FAILs.
4. Read every button label aloud. Does each say what happens? (#621, #1046)
5. Find every number and claim. Is each one real and sourced? (#686, #498)
6. Resize the window slowly from 1200 to 360. Does the header ever wrap or the
   measure ever exceed 80? (#1060, #372)
7. Load with images blocked. Does the alt text carry the meaning? (#488)

## Failures that cluster on this artefact

#1033 Carousels, #1037 Generic stock, #1046 CTA jargon, #1047 Walls of text,
#1030 Text on imagery, #1048 Competing focal points, #1029 Grey on grey,
#1053 Layout shift, #1060 Header wrap, #1045 Placeholder labels.
