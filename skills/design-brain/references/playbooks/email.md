# Playbook: email

Use with `core/CORE.md`. For marketing email, newsletters, transactional
messages and cold outreach. This playbook is honest about its limits: the
corpus is about design fundamentals, and it has almost nothing on email client
rendering. What follows is the part of an email that fundamentals govern, which
is most of what decides whether it gets read.

## What the corpus does not cover

Email clients render HTML inconsistently, some strip styles, some invert
colours in dark mode, some block images by default, and the preheader and
subject line have length limits that vary by client. None of that is in the
corpus. Take it from the client documentation and test in the real clients.
Don't cite Design Brain for it.

## The job

One email, one job (#683). A newsletter with six equal items has no job; it
has a table of contents. The person reads the sender and the subject line in
the list view, opens or doesn't, then scans (#668). The whole design serves
those three seconds.

## Ranked entries

### 1. The subject line and first line
- #664 Front-loaded sentences: the point first, because the list view
  truncates. The corpus records GOV.UK's 65-character cap for page titles and
  NN/g's finding that the first 40 to 60 characters do the work; the same
  logic applies to subject lines
- #669 Inverted pyramid; #666 One idea per sentence
- #995 False urgency and scarcity: "Last chance" with no real deadline is a
  deceptive pattern and, in the UK, unlawful
- #850 Tone of voice: set the four dials for this kind of message and keep
  them

### 2. The body
- #683 One primary job; #684 Call-to-action design; #621 Verb-first button
  labels; #622 One primary action
- #685 Benefit before feature; #686 Proof next to the claim
- #668 Scannability; #670 Meaningful headings; #671 Chunking; #663 Plain
  language; #667 Reading level
- #372 Measure: a single column of about 60 characters; email is read on
  phones, and a wide desktop column becomes a long line
- #1013 16px body text; #1012 line-height 1.4 to 1.6; #690 4.5:1 contrast on
  the real background, which in dark-mode clients may not be the one you set
- #9377 Flush left; #1027 Centred body copy

### 3. Images
- #488 Alt text as content: with images blocked, the alt text is the email.
  Write it as copy
- #481 Authenticity over generic stock; #1037 Generic stock imagery
- #9477 Text over image legibility; #1030 Scrim; and never put the message or
  the button inside an image
- #483 Aspect-ratio discipline: set width and height so the layout holds
  before images load

### 4. Trust and exit
- #9000 Exit parity and #986 Roach motel: unsubscribing costs one click, the
  same as subscribing
- #997 Honest consent design; #998 Data minimisation
- #989 Disguised ads; #990 Hidden costs
- #687 Readable legal and compliance copy: the footer is read by the people
  who matter most, the ones about to complain

## Numbers for this artefact

| Figure | Entry |
| --- | --- |
| Front-load; first 40 to 60 characters carry the subject | #664 |
| One primary action | #622, #683 |
| Measure about 60 characters, single column | #372 |
| Body 16px, line-height 1.4 to 1.6 | #1013, #1012 |
| Contrast 4.5:1 | #690 |
| Target 44 by 44 on touch | #700 |
| Reading age 9 for public-facing copy | #667 |

## Checks before showing

1. Read the sender, subject and first line as they appear in a phone list
   view. Is the job clear? (#664, #683)
2. Count the links and buttons. One primary; the rest quieter or gone (#622).
3. Block images. Does the email still make sense? (#488)
4. Read it in a dark-mode client. Is the text still 4.5:1? (#690)
5. Find the unsubscribe. One click? (#9000)
6. Find every claim of urgency or scarcity. Is each one true? (#995)
7. Run `measure.mjs` on the HTML at 390px for contrast, measure and targets.

## Failures that cluster on this artefact

#1046 CTA jargon, #1030 Text on imagery, #1037 Generic stock, #995 False
urgency, #1027 Centred body copy, #1029 Grey on grey, #1047 Walls of text.
