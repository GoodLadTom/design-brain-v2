# Playbook: deck and slides

Use with `core/CORE.md`. For presentations, pitch decks, tender responses and
anything projected or read as a sequence of fixed frames. Ranked by leverage.

## The job

A slide is read in seconds, often from the back of a room, often while someone
is talking over it. Each frame carries one idea, and the idea must survive at
thumbnail size (#476, #723). The corpus has no entry called "one idea per
slide"; the nearest are #666 One idea per sentence, #723 Staging (present one
thing at a time so the eye knows where to go) and #682 Message hierarchy. Apply
them to the frame.

Two artefacts hide inside every deck: the one that is presented, which wants
almost no text, and the one that is sent, which has to make sense unread. Decide
which you are building. If both, build the presented version and put the
reading in speaker notes or an appendix.

## Ranked entries

### 1. One idea, made obvious
- #723 Staging; #666 One idea per sentence; #682 Message hierarchy
- #94 Focal point; #149 Isolation as emphasis; #95 Subordination
- #397 Emphasis: pick one device and use it rarely
- #96 Hierarchy: three levels at most on a slide, usually two
- #534 Titles that state the takeaway: the slide title is the finding, not the
  topic ("Costs fell 12 per cent after the change", not "Costs")
- #1048 Flat hierarchy and competing focal points (failure mode)

### 2. Legibility at distance
- #881 Viewing distance to letter height: the United States Sign Council
  legibility index is 30 feet of viewing distance per inch of cap height, less
  in visually busy conditions. All-caps needs about 15 per cent more height.
  Treat projected slides as signage and size type for the back row.
- #9147 Safe area: keep titles and anything that matters inside the graphics
  safe area, 5 per cent in from each edge (EBU R 95); screens, projectors and
  video calls crop the rest
- #396 All-caps legibility limits; #1049 Text touching a rule or an edge
- #476 Thumbnail legibility: the slide sorter view is the test
- #690 Contrast at 4.5:1 for text, 3:1 large; projectors wash out mid-tones, so
  design above the minimum

### 3. Type on a frame
- #344 Type scale and #345 Modular scale: two or three sizes per deck, used
  identically on every slide
- #399 Line-height for headings: display lines are short, so leading tightens
- #380 Rag quality; #381 Widows and orphans; #386 Optical margin alignment,
  since every title is display type
- #339 Type pairing and #340 Contrast in pairing; #1025 Too many typefaces
- #1055 Faux bold and faux italic: install the real weights on the presenting
  machine or embed them
- #9377 Text alignment: flush left for anything over one line; #1027 Centred
  body copy

### 4. Images and charts on slides
- #9477 Text over image legibility; #1030 Scrim; #464 Subject placement; #136
  Rule of thirds and #138 Rabatment for placing the subject and the text
- #482 Focal-point cropping; #483 Aspect-ratio discipline; #1056 Stretched
  logos and images; #1057 Crops that ignore the focal point
- #838 Clear space and minimum size for any logo on a slide; #839 Misuse rules
- Charts: #534 takeaway titles, #507 Direct labelling, #498 Lie factor, #516
  Zero baseline, #515 Position over angle (so bars over pies), #519 Pie chart
  limits, #1058 Unlabelled charts. One chart per slide, one message per chart.

### 5. Sequence and rhythm
- #533 Narrative sequencing; #669 Inverted pyramid across the deck
- #859 Rhythm and pacing across spreads (from print, applies frame to frame:
  vary the density, plant a quiet slide before a loud one)
- #430 Pacing across pages; #101 Regular rhythm
- #857 Chapter openers: section dividers as real pauses, not decoration

### 6. Motion in decks
- #733 Purpose over decoration; #723 Staging (builds that reveal one point at
  a time earn their place; transitions between slides rarely do)
- #734 Duration guidelines and #1020 100 to 500ms: builds at the short end
- #1041 Decorative motion with no purpose; #702 no more than three flashes a
  second, which rules out most "dynamic" transition packs

## Numbers for this artefact

| Figure | Entry |
| --- | --- |
| 30 feet of viewing distance per inch of cap height | #881 |
| All-caps needs about 15 per cent more height | #881 |
| Graphics safe area 5 per cent from each edge | #9147 |
| Contrast 4.5:1 text, 3:1 large; go higher for projection | #690 |
| Two to three type sizes per deck | #344 |
| Three hierarchy levels at most | #96 |
| Logo clear space: NASA's is 1 to 2 N | #838 |
| Lie factor between 0.95 and 1.05 | #498 |
| Builds 100 to 300ms | #1020 |

## Checks before showing

1. Open the slide sorter. Can you name each slide's idea from the thumbnail?
   (#476, #723)
2. Read only the titles in order. Is that the argument? (#534, #533)
3. Stand three metres from the screen. Can you read the body text? (#881)
4. Draw a 5 per cent border. Does anything cross it? (#9147)
5. Count typefaces and sizes across the deck. More than two families or three
   sizes needs a reason (#339, #344).
6. Check every logo for clear space and stretch (#838, #1056).
7. Run `measure.mjs` on any HTML slides, or check contrast manually on the two
   worst slides.

## Failures that cluster on this artefact

#1047 Walls of text, #1048 Competing focal points, #1025 Too many typefaces,
#1028 Justified text, #1027 Centred body copy, #1030 Text on imagery, #1058
Unlabelled charts, #1056 Stretched logos, #1055 Faux bold, #1049 Text touching
an edge.
