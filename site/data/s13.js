window.DESIGN_BRAIN = window.DESIGN_BRAIN || {};
window.DESIGN_BRAIN[13] = {
  n: 13,
  slug: "data-viz",
  title: "Information design and data visualisation",
  blurb: "How to turn numbers into pictures that tell the truth and can be read quickly.",
  intro: "This family of ideas has three main roots. Jacques Bertin worked out, in 1967, which marks on a page the eye can order and measure. Edward Tufte, from 1983, argued for stripping graphics back to the evidence and for holding designers to account when a picture overstates the data. William Cleveland and Robert McGill ran the experiments in 1984 that turned taste into measured accuracy. Later work from the human-computer interaction community added interaction, uncertainty and narrative. Some of the doctrine has held up under testing and some has not, and this section says which is which.",
  sources: [
    "Edward Tufte, The Visual Display of Quantitative Information (1983, second edition 2001)",
    "Edward Tufte, Envisioning Information (1990)",
    "Edward Tufte, Visual Explanations (1997)",
    "Edward Tufte, Beautiful Evidence (2006)",
    "Jacques Bertin, Semiologie graphique (1967), translated as Semiology of Graphics (1983)",
    "William Cleveland and Robert McGill, Graphical Perception, Journal of the American Statistical Association 79(387), 531-554 (1984)",
    "William Cleveland, Visualizing Data (1993)",
    "Ben Shneiderman, The Eyes Have It, IEEE Symposium on Visual Languages (1996)",
    "Richard Becker and William Cleveland, Brushing Scatterplots, Technometrics 29(2), 127-142 (1987)",
    "George Furnas, Generalized Fisheye Views, ACM CHI '86, 16-23 (1986)",
    "Scott Bateman and others, Useful Junk?, ACM CHI 2010",
    "George Newman and Brian Scholl, Bar graphs depicting averages are perceptually misinterpreted: the within-the-bar bias, Psychonomic Bulletin and Review 19(4), 601-607 (2012)",
    "Michael Correll and Michael Gleicher, Error Bars Considered Harmful, IEEE TVCG 20(12), 2142-2151 (2014)",
    "Michael Correll, Enrico Bertini and Steven Franconeri, Truncating the Y-Axis: Threat or Menace?, ACM CHI 2020",
    "Edward Segel and Jeffrey Heer, Narrative Visualization: Telling Stories with Data, IEEE TVCG (2010)",
    "Duncan Menge and others, Logarithmic scales in ecological data presentation may cause misinterpretation, Nature Ecology and Evolution 2, 1393-1402 (2018)",
    "Stephen Few, Show Me the Numbers (2004, second edition 2012)",
    "W3C, Web Content Accessibility Guidelines 2.2 (2023)"
  ],
  entries: [
    {
      n: 496,
      title: "Graphical excellence",
      aka: [],
      oneLine: "Complex ideas shown with clarity, precision and efficiency: most ideas, least time, least ink, smallest space.",
      demo: { none: "Excellence is a verdict on a whole graphic, including whether the data was worth collecting, and the parts of it that can be seen are demonstrated separately at 499, 501, 505 and 508." },
      what: "Tufte opens The Visual Display of Quantitative Information by defining what he is aiming at. Graphical excellence is the well-designed presentation of interesting data, and it is a matter of substance, of statistics and of design at the same time. His working test is that the graphic gives the viewer the greatest number of ideas in the shortest time with the least ink in the smallest space. He adds two conditions: excellent graphics are nearly always multivariate, and they tell the truth about the data.",
      why: "It sets a standard you can argue against, which most design advice does not. Substance comes first, so a beautiful chart of a pointless number fails the test. Speed of reading is measurable, so you can time a colleague finding an answer in your chart.",
      how: [
        "Ask what the reader will be able to say after five seconds, and design backwards from that answer.",
        "Count how many variables the graphic carries; if it carries one, ask whether a sentence would do the job.",
        "Time a colleague answering a real question from the chart, then cut whatever slowed them down.",
        "Check the numbers before the styling, since no amount of craft rescues a graphic built on the wrong figures."
      ],
      example: "Charles Joseph Minard's 1869 flow map of Napoleon's 1812 Russian campaign, which Tufte holds up as the exemplar and analyses again in Beautiful Evidence. It carries army size, position, direction of march, date and temperature in one picture.",
      numbers: "",
      pitfall: "The phrase gets used as a compliment rather than a test. Say which of Tufte's conditions a graphic meets and which it misses, or the word means nothing in a critique.",
      source: "Edward Tufte, The Visual Display of Quantitative Information (1983), chapter 1.",
      verify: { status: "verified", note: "Checked Tufte's wording against John Stasko's Georgia Tech CS 7450 lecture notes on Tufte's design principles, which quote the definitions directly, and against the Beautiful Evidence chapter on analytical design hosted by Stanford Data Science, which uses Minard as its worked example." },
      belongs: { verdict: "core", why: "It is the stated goal of the whole discipline and it comes with testable conditions rather than vague praise." },
      related: [497, 505, 508, 501]
    },
    {
      n: 497,
      title: "Graphical integrity",
      aka: ["Telling the truth about the data"],
      oneLine: "What you draw must stay in proportion to what you measured, in context and correctly labelled.",
      demo: {
        caption: "Both sides double the same number. The left mark covers four times the area; the right is exactly twice as long.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Scaled in two dimensions</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><rect class=\"f-mute\" x=\"14\" y=\"58\" width=\"34\" height=\"34\"/><rect class=\"f\" x=\"70\" y=\"24\" width=\"68\" height=\"68\"/><text class=\"t\" x=\"31\" y=\"106\" text-anchor=\"middle\">100</text><text class=\"t\" x=\"104\" y=\"106\" text-anchor=\"middle\">200</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Scaled in one</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><path class=\"s-mute\" d=\"M14 24 V96\"/><rect class=\"f-mute\" x=\"14\" y=\"38\" width=\"52\" height=\"20\"/><rect class=\"f\" x=\"14\" y=\"68\" width=\"104\" height=\"20\"/><text class=\"t\" x=\"72\" y=\"52\">100</text><text class=\"t\" x=\"124\" y=\"82\">200</text></svg></div></div></div>"
      },
      what: "Tufte's second chapter sets out rules for honest graphics. The central one is that the representation of numbers, as physically measured on the surface of the graphic, should be directly proportional to the quantities represented. Alongside it sit clear labelling, showing variation in the data rather than variation in the design, using standardised units where money over time is involved, and keeping the number of information-carrying dimensions in the picture down to the number of dimensions in the data.",
      why: "Most misleading charts are not lies about the figures. They are honest figures drawn at the wrong scale, or shown without the context that would make them ordinary. Naming the specific rule that has been broken turns a vague feeling of unease into an argument you can win in a review.",
      how: [
        "Measure a mark on the finished graphic and check that it is proportional to its number.",
        "Never encode a single number as an area or a volume; one number gets one dimension.",
        "Show enough surrounding time or comparison so the reader can judge whether the change is unusual.",
        "Label the axis units, and deflate money series before plotting them."
      ],
      example: "The classic failure is a picture of two objects where one is twice the value of the other but drawn twice as tall and twice as wide, so it covers four times the area and reads as four times the value.",
      numbers: "",
      pitfall: "Design software makes the violations easy: three-dimensional bars, perspective, and image-scaled icons all break proportionality by default. Integrity has to be checked after the styling, not before.",
      source: "Edward Tufte, The Visual Display of Quantitative Information (1983), chapter 2.",
      verify: { status: "verified", note: "The proportionality rule was read in the text of chapter 2 of the second edition, from a scan posted for a University of Southern California course, where the chapter runs pages 53 to 77. The InfoVis Wiki entry on the lie factor quotes the same rule and cites the second edition, pages 57 to 69, for the distortion material." },
      belongs: { verdict: "core", why: "It is the ethical floor of the field and the thing that separates a chart from an advertisement." },
      related: [496, 498, 516, 522]
    },
    {
      n: 498,
      title: "Lie factor",
      aka: ["Tufte's lie factor"],
      oneLine: "The size of the effect shown in the graphic divided by the size of the effect in the data.",
      demo: {
        caption: "Tufte's fuel economy case: the same rise from 18 to 27.5 drawn twice, once at nearly fifteen times the size.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 400 176\"><text class=\"t\" x=\"8\" y=\"10\">as drawn</text><rect class=\"f-mute\" x=\"8\" y=\"18\" width=\"28\" height=\"14\"/><text class=\"t\" x=\"42\" y=\"29\">18 mpg</text><rect class=\"f-accent\" x=\"8\" y=\"38\" width=\"247\" height=\"14\"/><text class=\"t\" x=\"261\" y=\"49\">27.5 mpg</text><text class=\"t\" x=\"8\" y=\"70\">the mark grew 783 per cent</text><path class=\"s-mute\" d=\"M8 88 H392\"/><text class=\"t\" x=\"8\" y=\"108\">in proportion to the figures</text><rect class=\"f-mute\" x=\"8\" y=\"116\" width=\"28\" height=\"14\"/><text class=\"t\" x=\"42\" y=\"127\">18 mpg</text><rect class=\"f\" x=\"8\" y=\"136\" width=\"43\" height=\"14\"/><text class=\"t\" x=\"57\" y=\"147\">27.5 mpg</text><text class=\"t\" x=\"8\" y=\"170\">the figures grew 53 per cent</text><text class=\"t\" x=\"392\" y=\"170\" text-anchor=\"end\">783 / 53 = a lie factor of 14.8</text></svg></div>"
      },
      what: "Tufte proposed a single number for measuring visual exaggeration. Work out the percentage change shown on the page, work out the percentage change in the underlying figures, and divide the first by the second. A perfectly proportional graphic scores 1. Above 1 the picture overstates the change and below 1 it hides it. Tufte writes that values greater than 1.05 or less than 0.95 indicate substantial distortion, well past ordinary drawing error.",
      why: "It converts an argument about taste into arithmetic. A client who says a chart looks fine will find it harder to defend a lie factor of 9. It is also quick: two measurements with a ruler and one division.",
      how: [
        "Measure the drawn length or height of two marks, convert to a percentage change, and divide by the percentage change in the data.",
        "Run the calculation on any chart with a truncated axis, a perspective effect or scaled imagery before it ships.",
        "Record the figure in review notes so the argument is about a number, not about preference."
      ],
      example: "Tufte's worked case is a New York Times graphic on United States fuel economy standards, where the required figure rose from 18 to 27.5 miles per gallon, a 53 per cent increase, drawn as a 783 per cent increase. That gives a lie factor of 14.8.",
      numbers: "Lie factor = size of effect shown in graphic / size of effect in data. Tufte treats anything above 1.05 or below 0.95 as substantial distortion. The fuel economy example scores 14.8 (783 divided by 53).",
      pitfall: "The measure only works where a change has a clear visual length. It says nothing about a chart that is proportional but shows a cherry-picked window of time, which is a different kind of dishonesty.",
      source: "Edward Tufte, The Visual Display of Quantitative Information (1983), pages 57 to 69.",
      verify: { status: "verified", note: "The formula was checked against Wikipedia's misleading graph article and Stasko's lecture notes, which reproduce it from page 62. The 1.05 and 0.95 thresholds were found quoted from Tufte in three independent sources. The 14.8 figure and the 18 to 27.5 mpg detail were checked against the InfoVis Wiki lie factor entry and Michael Friendly's Gallery of Data Visualization." },
      belongs: { verdict: "core", why: "A named, checkable measure of distortion that any designer can apply in under a minute." },
      related: [497, 516, 500]
    },
    {
      n: 499,
      title: "Data-ink ratio",
      aka: ["Maximise the data-ink ratio"],
      oneLine: "The share of a graphic's ink that carries data, which Tufte says should be pushed as high as sense allows.",
      demo: {
        caption: "The same four values three times. The middle keeps every reading the first offered; the right has erased the scale as well.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 126\"><g><rect class=\"f-mute\" x=\"4\" y=\"10\" width=\"104\" height=\"90\" opacity=\"0.18\"/><rect class=\"s\" x=\"4\" y=\"10\" width=\"104\" height=\"90\"/><path class=\"s\" d=\"M4 32 H108 M4 55 H108 M4 78 H108\"/><rect class=\"f\" x=\"14\" y=\"60\" width=\"14\" height=\"40\"/><rect class=\"f\" x=\"38\" y=\"38\" width=\"14\" height=\"62\"/><rect class=\"f\" x=\"62\" y=\"70\" width=\"14\" height=\"30\"/><rect class=\"f\" x=\"86\" y=\"48\" width=\"14\" height=\"52\"/><text class=\"t\" x=\"56\" y=\"118\" text-anchor=\"middle\">as drawn</text></g><g transform=\"translate(124,0)\"><path class=\"s-mute\" d=\"M4 32 H108 M4 55 H108 M4 78 H108 M4 100 H108\"/><rect class=\"f\" x=\"14\" y=\"60\" width=\"14\" height=\"40\"/><rect class=\"f\" x=\"38\" y=\"38\" width=\"14\" height=\"62\"/><rect class=\"f\" x=\"62\" y=\"70\" width=\"14\" height=\"30\"/><rect class=\"f\" x=\"86\" y=\"48\" width=\"14\" height=\"52\"/><text class=\"t\" x=\"56\" y=\"118\" text-anchor=\"middle\">non-data ink erased</text></g><g transform=\"translate(248,0)\"><path class=\"s\" d=\"M14 60 h14 M38 38 h14 M62 70 h14 M86 48 h14\"/><text class=\"t\" x=\"56\" y=\"118\" text-anchor=\"middle\">erased too far</text></g></svg></div>"
      },
      what: "Tufte defines data-ink as the non-erasable core of a graphic, the marks that would change if a number changed. The data-ink ratio is data-ink divided by the total ink used to print the graphic. From this he draws a sequence of instructions: above all else show the data, push the data-ink ratio up within reason, erase non-data ink, erase redundant data ink, then revise and edit. Gridlines, frames, tick marks, drop shadows and background fills are the usual candidates for erasing.",
      why: "As an editing habit it is useful: removing a heavy frame and a dark grid usually makes the data easier to see. As a law it is weaker than it sounds, because nobody can measure ink on a screen and no experiment shows a higher ratio produces better reading.",
      how: [
        "Delete every element in turn and ask whether any reader question becomes harder to answer.",
        "Lighten gridlines rather than removing them, since they still help people read values off an axis.",
        "Keep the ratio as an editing pass, not as a score to be won.",
        "Stop cutting when the graphic starts to look like a puzzle."
      ],
      example: "Tufte's own redesigns of the box plot, the bar chart and the scatterplot, on pages 124 to 133, show the method taken to its limit, including a box plot reduced to a dot with two gaps in a line.",
      numbers: "Data-ink ratio = data-ink / total ink used to print the graphic, described by Tufte as the proportion of a graphic's ink devoted to the non-redundant display of data-information.",
      pitfall: "Taken literally it produces stripped charts that are harder to read than the originals. Tufte's own minimal box plot is a good example of a redesign that saves ink and costs the reader time.",
      source: "Edward Tufte, The Visual Display of Quantitative Information (1983), chapter 4, Data-Ink and Graphical Redesign; the worked redesigns follow in chapter 6.",
      verify: { status: "disputed", note: "Definition and five-instruction sequence confirmed against Stasko's Georgia Tech lecture notes. Chapters checked against the second edition contents: chapter 4 begins at page 91, and the redesigns fall in chapter 6, pages 124 to 133, corrected here from chapter 4. Bateman and others at CHI 2010 found accuracy on embellished charts no worse than plain, and Tufte offers no experimental support for maximising the ratio." },
      belongs: { verdict: "core", why: "The editing habit is part of every working designer's practice, even though the underlying rule has no experimental backing." },
      related: [500, 508, 511, 501]
    },
    {
      n: 500,
      title: "Chartjunk",
      aka: ["Visual embellishment", "Decoration in charts"],
      oneLine: "Tufte's name for graphic elements that add ink without adding information.",
      demo: {
        caption: "Same four values. The hatched fill crawls and flickers as your eye moves across it; the flat fill sits still.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Hatched fill</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--bottom db-row--centre db-row--tight db-row--nowrap\"><div class=\"db-block\" style=\"width:30px;height:34px;background:repeating-linear-gradient(45deg,var(--ink) 0 1px,var(--paper-raised) 1px 3px)\"></div><div class=\"db-block\" style=\"width:30px;height:58px;background:repeating-linear-gradient(45deg,var(--ink) 0 1px,var(--paper-raised) 1px 3px)\"></div><div class=\"db-block\" style=\"width:30px;height:44px;background:repeating-linear-gradient(45deg,var(--ink) 0 1px,var(--paper-raised) 1px 3px)\"></div><div class=\"db-block\" style=\"width:30px;height:70px;background:repeating-linear-gradient(45deg,var(--ink) 0 1px,var(--paper-raised) 1px 3px)\"></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Flat fill</span><div class=\"db-stage db-stage--tight\"><div class=\"db-row db-row--bottom db-row--centre db-row--tight db-row--nowrap\"><div class=\"db-block db-block--ink\" style=\"width:30px;height:34px\"></div><div class=\"db-block db-block--ink\" style=\"width:30px;height:58px\"></div><div class=\"db-block db-block--ink\" style=\"width:30px;height:44px\"></div><div class=\"db-block db-block--ink\" style=\"width:30px;height:70px\"></div></div></div></div></div>"
      },
      what: "Tufte coined the word in 1983 for the interior decoration of graphics: hatching that shimmers, heavy grids, three-dimensional effects, clip art and self-promoting graphical style. His argument is that these generate ink that tells the reader nothing new. He gives two named cases, the moire vibration produced by dense hatching patterns and the duck, a graphic where the data has been buried inside a picture of something else.",
      why: "The core observation survives: shimmering patterns and stacked visual effects do make charts harder to read. The blanket ban does not. The one direct test of Tufte's claim, Bateman and others at CHI 2010, found no accuracy penalty for decoration on small data sets read without a time limit, so decoration is a judgement about the audience and the setting rather than an automatic fault.",
      how: [
        "Remove any pattern fine enough to shimmer, since that one is a genuine perceptual failure.",
        "Strip three-dimensional effects from two-dimensional data, because they break proportionality.",
        "Judge illustration by whether the numbers can still be read accurately, not by whether it is decorative.",
        "Decorate for a poster or a campaign; keep it out of a dashboard people read every morning."
      ],
      example: "Nigel Holmes's illustrated charts for Time magazine are the standing test case. Bateman and colleagues used them in their CHI 2010 experiment and found readers interpreted them as accurately as plain versions.",
      numbers: "",
      pitfall: "Designers use the word as a conversation-stopper. Saying that something is chartjunk is not an argument until you can name what the reader can no longer do.",
      source: "Edward Tufte, The Visual Display of Quantitative Information (1983); the term is his coinage.",
      verify: { status: "disputed", note: "Tufte's coinage and definition confirmed against Wikipedia's chartjunk article, which quotes him. The prescription is challenged by Bateman and others, Useful Junk?, CHI 2010, whose summary states accuracy on embellished charts was no worse than plain and recall after two to three weeks significantly better. The picture is not one-sided: Li and Moacdieh, Proceedings of the Human Factors and Ergonomics Society 58(1), 1516-1520 (2014), repeated it on charts of ten or more data points and report from their abstract that a viewing time limit affected comprehension and short-term recall." },
      belongs: { verdict: "core", why: "The word is in daily use in design reviews, so a designer needs to know both what it means and where the evidence stops." },
      related: [499, 508, 511]
    },
    {
      n: 501,
      title: "Data density",
      aka: ["Present many numbers in a small space"],
      oneLine: "The number of data entries divided by the area they occupy, which Tufte argues should be high.",
      demo: {
        caption: "One series, three densities, identical frames. The collapse just past halfway survives only in the densest of the three.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 400 102\"><g><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"120\" height=\"76\"/><path class=\"s\" d=\"M17 49L35 47L54 53L72 42L91 33L109 36\"/><circle class=\"f\" cx=\"17\" cy=\"49\" r=\"2.4\"/><circle class=\"f\" cx=\"35\" cy=\"47\" r=\"2.4\"/><circle class=\"f\" cx=\"54\" cy=\"53\" r=\"2.4\"/><circle class=\"f\" cx=\"72\" cy=\"42\" r=\"2.4\"/><circle class=\"f\" cx=\"91\" cy=\"33\" r=\"2.4\"/><circle class=\"f\" cx=\"109\" cy=\"36\" r=\"2.4\"/><text class=\"t\" x=\"64\" y=\"96\" text-anchor=\"middle\">6 entries</text></g><g transform=\"translate(136,0)\"><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"120\" height=\"76\"/><path class=\"s\" d=\"M10 51L14 47L19 48L23 51L28 50L33 49L37 43L42 47L47 51L51 56L56 54L61 49L65 47L70 50L75 34L79 36L84 37L89 34L93 31L98 30L103 30L107 36L112 40L116 39\"/><text class=\"t\" x=\"64\" y=\"96\" text-anchor=\"middle\">24 entries</text></g><g transform=\"translate(272,0)\"><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"120\" height=\"76\"/><path class=\"s\" d=\"M8 52L10 53L11 49L13 45L14 47L16 48L17 46L19 46L20 53L22 46L23 53L25 53L27 47L28 53L30 50L31 52L33 51L34 45L36 42L37 43L39 43L41 48L42 45L44 47L45 51L47 47L48 55L50 51L51 58L53 59L54 54L56 54L58 52L59 51L61 49L62 48L64 50L65 46L67 45L68 38L70 39L72 73L73 33L75 36L76 32L78 35L79 38L81 36L82 36L84 37L85 38L87 33L89 34L90 35L92 31L93 30L95 31L96 28L98 31L99 32L101 28L103 29L104 31L106 34L107 35L109 40L110 36L112 42L113 44L115 38L116 40L118 39\"/><text class=\"t\" x=\"64\" y=\"96\" text-anchor=\"middle\">72 entries</text></g></svg></div>"
      },
      what: "Tufte's second measure counts the entries in the data matrix and divides by the area of the data graphic. His case is that data-rich designs give context and credibility, and that sparse ones invite suspicion about what has been left out. He also argues that clutter and confusion are failures of design rather than attributes of information, so the answer to a complicated data set is a better graphic, not less data.",
      why: "It pushes back against the habit of one number per slide. A reader who can see a hundred points at once can compare them; a reader shown ten screens of ten points cannot. High density also lets people find their own questions in the picture.",
      how: [
        "Put the comparison on one page rather than across a sequence of screens.",
        "Shrink charts until they are still readable, then repeat them rather than enlarging one.",
        "Use tables where the reader needs exact values and the set is small enough to scan.",
        "Only add density that the reader can act on, since an unsorted wall of numbers gives the eye nothing to hold on to."
      ],
      example: "The twenty-three hour Los Angeles air pollution display at page 170 of The Visual Display, and the chromosome charts at page 173, both of which put dozens of small series in the space of a single conventional chart.",
      numbers: "Data density of a graphic = number of entries in data matrix / area of data graphic.",
      pitfall: "Density without ordering is just noise. Tufte's dense examples all have a strong structure, usually a repeated small multiple, that makes the mass of marks scannable.",
      source: "Edward Tufte, The Visual Display of Quantitative Information (1983), chapter 8, Data Density and Small Multiples, page 168.",
      verify: { status: "verified", note: "Formula and the surrounding quotation about data-rich designs checked against Stasko's Georgia Tech lecture notes, which reproduce both and cite volume 1 page 168, and which also cite page 170 for the air pollution display and page 173 for the chromosome charts. The chapter number was corrected from 6 to 8 against the published table of contents of the second edition, where chapter 8, Data Density and Small Multiples, begins at page 161." },
      belongs: { verdict: "core", why: "A direct counterweight to the one-chart-per-slide habit, with a definition specific enough to apply." },
      related: [496, 502, 506, 504]
    },
    {
      n: 502,
      title: "Small multiples",
      aka: ["Trellis chart", "Lattice chart", "Panel chart", "Grid chart"],
      oneLine: "A grid of small charts sharing scales and axes, so the eye compares them at a glance.",
      demo: {
        caption: "Six series both sides on the same scale. Try to read the highlighted one: the grid answers before the tangle does.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">All six in one frame</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 310 96\"><rect class=\"s-mute\" x=\"4\" y=\"6\" width=\"302\" height=\"84\"/><path class=\"s-mute\" d=\"M10 67L58 63L107 53L155 49L203 42L252 45L300 28\"/><path class=\"s-mute\" d=\"M10 62L58 67L107 65L155 71L203 74L252 71L300 74\"/><path class=\"s-mute\" d=\"M10 50L58 50L107 48L155 46L203 52L252 44L300 46\"/><path class=\"s-accent\" d=\"M10 47L58 42L107 30L155 25L203 24L252 16L300 16\"/><path class=\"s-mute\" d=\"M10 31L58 37L107 36L155 45L203 41L252 43L300 49\"/><path class=\"s-mute\" d=\"M10 24L58 26L107 28L155 21L203 19L252 19L300 22\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One panel each, one scale</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 262 96\"><g><rect class=\"s-mute\" x=\"0\" y=\"2\" width=\"80\" height=\"42\"/><path class=\"s-mute\" d=\"M4 30L16 29L28 24L40 23L52 19L64 21L76 13\"/></g><g transform=\"translate(88,0)\"><rect class=\"s-mute\" x=\"0\" y=\"2\" width=\"80\" height=\"42\"/><path class=\"s-mute\" d=\"M4 28L16 30L28 30L40 32L52 34L64 32L76 34\"/></g><g transform=\"translate(176,0)\"><rect class=\"s-mute\" x=\"0\" y=\"2\" width=\"80\" height=\"42\"/><path class=\"s-mute\" d=\"M4 23L16 23L28 22L40 21L52 24L64 20L76 21\"/></g><g transform=\"translate(0,48)\"><rect class=\"s-mute\" x=\"0\" y=\"2\" width=\"80\" height=\"42\"/><path class=\"s-accent\" d=\"M4 22L16 19L28 14L40 12L52 11L64 8L76 8\"/></g><g transform=\"translate(88,48)\"><rect class=\"s-mute\" x=\"0\" y=\"2\" width=\"80\" height=\"42\"/><path class=\"s-mute\" d=\"M4 15L16 17L28 17L40 21L52 19L64 20L76 23\"/></g><g transform=\"translate(176,48)\"><rect class=\"s-mute\" x=\"0\" y=\"2\" width=\"80\" height=\"42\"/><path class=\"s-mute\" d=\"M4 11L16 12L28 13L40 10L52 9L64 9L76 11\"/></g></svg></div></div></div>"
      },
      what: "Take one chart design, repeat it once per category or time slice, and hold the axes and scales identical across every copy. Because the design stays constant, the only thing that varies is the data, so differences jump out. Tufte devotes a chapter of Envisioning Information to the technique and writes that small multiple designs, multivariate and data bountiful, answer directly by visually enforcing comparisons of changes.",
      why: "It solves the problem that a chart with twelve overlapping lines solves badly. Readers learn the chart once and then reuse that learning across the whole grid, so the cost of reading the twentieth panel is close to zero.",
      how: [
        "Fix one scale across all panels; a per-panel scale destroys the comparison the grid is for.",
        "Sort the panels by something meaningful, usually the value being shown, not by name.",
        "Label once at the edge of the grid rather than repeating axis labels in every panel.",
        "Keep panels small enough that a whole row is inside one glance."
      ],
      example: "The Financial Times and the New York Times both used small multiple grids of national case curves through the COVID-19 pandemic, one panel per country on shared axes. The technique predates the name: Eadweard Muybridge's motion photograph sequences from the 1880s work the same way.",
      numbers: "",
      pitfall: "Letting each panel take its own y-axis. It makes every panel look interesting and makes the grid meaningless, and charting libraries often do it by default.",
      source: "Edward Tufte, Envisioning Information (1990), chapter 4; the technique is older than the term.",
      verify: { status: "verified", note: "Chapter list of Envisioning Information confirmed against the Internet Archive catalogue record, whose contents note gives all six chapter titles in order. The wording and the Muybridge precedent were checked against Wikipedia's small multiple article, which quotes the sentence in full and cites page 67 of the 1990 book." },
      belongs: { verdict: "core", why: "One of the few named layout patterns that reliably beats the obvious alternative, and it applies far outside charts." },
      related: [501, 505, 506, 520]
    },
    {
      n: 503,
      title: "Layering and separation",
      aka: ["1 + 1 = 3", "Visual layering"],
      oneLine: "Sort the marks in a graphic into visual layers so the data sits in front and the scaffolding behind.",
      demo: {
        caption: "Same line, same grid, both sides. Only the weight of the reference layer changes, and the data steps in front.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One weight for everything</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 130 88\"><rect class=\"s\" x=\"4\" y=\"6\" width=\"120\" height=\"74\"/><path class=\"s\" d=\"M4 24 H124 M4 43 H124 M4 62 H124 M34 6 V80 M64 6 V80 M94 6 V80\"/><path class=\"s\" d=\"M10 51L14 47L19 48L23 51L28 50L33 49L37 43L42 47L47 51L51 56L56 54L61 49L65 47L70 50L75 34L79 36L84 37L89 34L93 31L98 30L103 30L107 36L112 40L116 39\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Reference layer dropped back</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 130 88\"><path class=\"s-mute\" d=\"M4 24 H124 M4 43 H124 M4 62 H124 M34 6 V80 M64 6 V80 M94 6 V80 M4 80 H124\"/><path class=\"s\" d=\"M10 51L14 47L19 48L23 51L28 50L33 49L37 43L42 47L47 51L51 56L56 54L61 49L65 47L70 50L75 34L79 36L84 37L89 34L93 31L98 30L103 30L107 36L112 40L116 39\"/></svg></div></div></div>"
      },
      what: "Tufte's argument is that any information display contains several kinds of mark: the data, the reference structure, the labels, the annotation. If they all carry the same visual weight the reader has to sort them out by reasoning rather than by seeing. Separation is achieved with weight, tone, colour and small differences in size rather than with boxes and rules. He states the danger as 1 + 1 = 3: two heavy lines close together create a third visual object, the white gap between them, which nobody intended.",
      why: "Layering is what makes a dense graphic readable. Drop the gridlines to a pale tone and keep the data at full strength, and the reader's eye lands on the data without being told to.",
      how: [
        "Assign every element to a layer before styling: data, reference, label, annotation.",
        "Give each layer a distinct weight or tone, and keep that assignment consistent across a family of charts.",
        "Push reference marks to the lightest tone that is still visible at the final size.",
        "Watch for unintended shapes appearing in the gaps between heavy marks."
      ],
      example: "A well-made railway timetable graph, where the tracks and time grid sit in pale tone and the train paths cross them in solid line. Tufte reproduces several, including a Java railway timetable, in Envisioning Information.",
      numbers: "",
      pitfall: "Designers separate layers with more ink rather than less, adding boxes and rules that create new edges. Separation almost always comes from taking weight away from the background layer.",
      source: "Edward Tufte, Envisioning Information (1990), chapter 3.",
      verify: { status: "verified", note: "Chapter title and position confirmed from the Internet Archive catalogue record for Envisioning Information, whose contents note lists the six chapters in order. The 1 + 1 = 3 formulation is quoted in Stasko's lecture notes on the same chapter." },
      belongs: { verdict: "core", why: "It is the mechanism behind almost every readable dense graphic, and it transfers straight to interface and page design." },
      related: [504, 511, 501, 525]
    },
    {
      n: 504,
      title: "Micro/macro reading",
      aka: ["Micro and macro readings", "Overview and detail in one image"],
      oneLine: "Build one image that reads as a pattern from a distance and as individual records up close.",
      demo: {
        caption: "Same year and the same arc both sides. Only the daily version still contains the one day that failed.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Twelve monthly averages</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 256 108\"><rect class=\"f-mute\" x=\"8\" y=\"60\" width=\"16\" height=\"28\"/><rect class=\"f-mute\" x=\"28\" y=\"55\" width=\"16\" height=\"33\"/><rect class=\"f-mute\" x=\"48\" y=\"48\" width=\"16\" height=\"40\"/><rect class=\"f-mute\" x=\"68\" y=\"41\" width=\"16\" height=\"47\"/><rect class=\"f-mute\" x=\"88\" y=\"39\" width=\"16\" height=\"49\"/><rect class=\"f-mute\" x=\"108\" y=\"37\" width=\"16\" height=\"51\"/><rect class=\"f-mute\" x=\"128\" y=\"38\" width=\"16\" height=\"50\"/><rect class=\"f-mute\" x=\"148\" y=\"47\" width=\"16\" height=\"41\"/><rect class=\"f-mute\" x=\"168\" y=\"51\" width=\"16\" height=\"37\"/><rect class=\"f-mute\" x=\"188\" y=\"56\" width=\"16\" height=\"32\"/><rect class=\"f-mute\" x=\"208\" y=\"65\" width=\"16\" height=\"23\"/><rect class=\"f-mute\" x=\"228\" y=\"72\" width=\"16\" height=\"16\"/><path class=\"s-mute\" d=\"M8 88 H246\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">A hundred and twenty days</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 256 108\"><path class=\"s-mute\" d=\"M8 88v-28M10 88v-28M12 88v-22M14 88v-26M16 88v-31M18 88v-28M20 88v-26M22 88v-34M24 88v-28M26 88v-33M28 88v-30M30 88v-31M32 88v-29M34 88v-39M36 88v-30M38 88v-30M40 88v-33M42 88v-32M44 88v-41M46 88v-38M48 88v-37M50 88v-35M52 88v-40M54 88v-38M56 88v-46M58 88v-37M60 88v-44M62 88v-42M64 88v-44M66 88v-40M68 88v-45M70 88v-42M72 88v-48M74 88v-42M76 88v-50M78 88v-45M80 88v-50M82 88v-50M84 88v-50M86 88v-46M88 88v-45M90 88v-47M92 88v-48M94 88v-45M96 88v-47M98 88v-51M100 88v-49M102 88v-47M104 88v-52M106 88v-56M108 88v-55M110 88v-47M112 88v-52M114 88v-54M116 88v-54M118 88v-46M120 88v-51M122 88v-48M124 88v-54M126 88v-48M128 88v-49M130 88v-55M132 88v-44M134 88v-47M136 88v-50M138 88v-52M140 88v-50M142 88v-48M144 88v-52M146 88v-49M148 88v-50M150 88v-49M152 88v-45M156 88v-48M158 88v-49M160 88v-44M162 88v-39M164 88v-48M166 88v-39M168 88v-39M170 88v-40M172 88v-40M174 88v-39M176 88v-35M178 88v-36M180 88v-36M182 88v-34M184 88v-35M186 88v-35M188 88v-38M190 88v-35M192 88v-32M194 88v-30M196 88v-35M198 88v-36M200 88v-34M202 88v-31M204 88v-27M206 88v-23M208 88v-24M210 88v-26M212 88v-29M214 88v-21M216 88v-26M218 88v-21M220 88v-25M222 88v-24M224 88v-17M226 88v-21M228 88v-13M230 88v-15M232 88v-16M234 88v-21M236 88v-15M238 88v-19M240 88v-17M242 88v-16M244 88v-9M246 88v-16\"/><path class=\"s-accent\" d=\"M154 88v-2M154 92v6\"/><path class=\"s-mute\" d=\"M8 88 H246\"/><text class=\"t\" x=\"154\" y=\"106\" text-anchor=\"middle\">one dead day</text></svg></div></div></div>"
      },
      what: "Tufte's observation is that detail and overview are not opposites. A graphic packed with individual entries can also present a clear large-scale shape, because the fine marks aggregate into texture and form. The reader gets a summary from the whole and specifics from any part, without switching views or clicking anything. He notes that the same graphical elements often do two jobs at once, serving the pattern and the record.",
      why: "It removes a navigation step. Where a dashboard would make someone drill down, a micro/macro image lets them read the trend and then read the exception in one movement of the eye. It also builds trust, because the reader can see the evidence behind the summary.",
      how: [
        "Print or render the graphic at final size and check it from two metres and from thirty centimetres.",
        "Let individual records stay visible instead of pre-aggregating them into a bar.",
        "Use tone and density so the mass of records forms a shape rather than an even grey field.",
        "Add a light reference structure that helps the close reading without competing at a distance."
      ],
      example: "The Vietnam Veterans Memorial in Washington, which Tufte uses as an example: a long dark shape from across the lawn, more than 58,000 individual names at arm's length. Maya Lin designed it and the names are ordered by date of death.",
      numbers: "",
      pitfall: "Aggregating too early. Once you have replaced a thousand records with twelve monthly averages, no amount of styling gets the micro reading back.",
      source: "Edward Tufte, Envisioning Information (1990), chapter 2.",
      verify: { status: "verified", note: "Chapter title confirmed from the Internet Archive catalogue listing for Envisioning Information. Stasko's Georgia Tech lecture notes on Tufte use the Vietnam Veterans Memorial as the micro/macro example and cite volume 2 pages 42 to 44." },
      belongs: { verdict: "core", why: "It names a specific, achievable property of a display and it is the honest alternative to drilling down through menus." },
      related: [503, 501, 528, 530]
    },
    {
      n: 505,
      title: "Multivariate display",
      aka: ["Showing more than two variables at once"],
      oneLine: "Good statistical graphics usually carry three or more variables, because interesting questions are comparative.",
      demo: {
        caption: "Same five units both sides. Only the scatter holds spend, return and headcount together, and unit e falls out of it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">One variable per chart</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 158\"><path class=\"s-mute\" d=\"M44 38 H136 M44 88 H136 M44 138 H136\"/><text class=\"t\" x=\"4\" y=\"38\">spend</text><text class=\"t\" x=\"4\" y=\"88\">return</text><text class=\"t\" x=\"4\" y=\"138\">staff</text><rect class=\"f-mute\" x=\"46\" y=\"32\" width=\"12\" height=\"6\"/><rect class=\"f-mute\" x=\"64\" y=\"24\" width=\"12\" height=\"14\"/><rect class=\"f-mute\" x=\"82\" y=\"19\" width=\"12\" height=\"19\"/><rect class=\"f-mute\" x=\"100\" y=\"13\" width=\"12\" height=\"25\"/><rect class=\"f-mute\" x=\"118\" y=\"8\" width=\"12\" height=\"30\"/><rect class=\"f-mute\" x=\"46\" y=\"79\" width=\"12\" height=\"9\"/><rect class=\"f-mute\" x=\"64\" y=\"75\" width=\"12\" height=\"13\"/><rect class=\"f-mute\" x=\"82\" y=\"64\" width=\"12\" height=\"24\"/><rect class=\"f-mute\" x=\"100\" y=\"71\" width=\"12\" height=\"17\"/><rect class=\"f-mute\" x=\"118\" y=\"80\" width=\"12\" height=\"8\"/><rect class=\"f-mute\" x=\"46\" y=\"132\" width=\"12\" height=\"6\"/><rect class=\"f-mute\" x=\"64\" y=\"127\" width=\"12\" height=\"11\"/><rect class=\"f-mute\" x=\"82\" y=\"120\" width=\"12\" height=\"18\"/><rect class=\"f-mute\" x=\"100\" y=\"124\" width=\"12\" height=\"14\"/><rect class=\"f-mute\" x=\"118\" y=\"108\" width=\"12\" height=\"30\"/><text class=\"t\" x=\"52\" y=\"152\" text-anchor=\"middle\">a</text><text class=\"t\" x=\"70\" y=\"152\" text-anchor=\"middle\">b</text><text class=\"t\" x=\"88\" y=\"152\" text-anchor=\"middle\">c</text><text class=\"t\" x=\"106\" y=\"152\" text-anchor=\"middle\">d</text><text class=\"t\" x=\"124\" y=\"152\" text-anchor=\"middle\">e</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Three variables in one frame</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 158\"><path class=\"s-mute\" d=\"M30 140 H196 M30 140 V20\"/><circle class=\"f-mute\" cx=\"42\" cy=\"110\" r=\"4\"/><circle class=\"f-mute\" cx=\"89\" cy=\"93\" r=\"5\"/><circle class=\"f-mute\" cx=\"117\" cy=\"30\" r=\"7\"/><circle class=\"f-mute\" cx=\"154\" cy=\"68\" r=\"6\"/><circle class=\"f-mute\" cx=\"182\" cy=\"118\" r=\"11\"/><text class=\"t\" x=\"49\" y=\"113\">a</text><text class=\"t\" x=\"97\" y=\"96\">b</text><text class=\"t\" x=\"127\" y=\"33\">c</text><text class=\"t\" x=\"163\" y=\"71\">d</text><text class=\"t\" x=\"182\" y=\"102\" text-anchor=\"middle\">e</text><text class=\"t\" x=\"113\" y=\"154\" text-anchor=\"middle\">spend</text><text class=\"t\" transform=\"translate(14,80) rotate(-90)\" text-anchor=\"middle\">return</text><text class=\"t\" x=\"196\" y=\"16\" text-anchor=\"end\">circle size = staff</text></svg></div></div></div>"
      },
      what: "Tufte states plainly that graphical excellence is nearly always multivariate. The reasoning is that a single variable over time rarely answers a question on its own; the reader wants to know how it compares with something else, or what it varies with. Position, length, colour, size, shape and the panels of a small multiple grid can each carry a variable, so a well-planned chart holds several without becoming a puzzle.",
      why: "It shifts the design question from how to draw a number to which comparison the reader needs. It also protects against the slide-deck habit of splitting one story across six single-variable charts, where the reader has to hold values in their head to compare them.",
      how: [
        "List the variables the question actually involves before choosing a chart type.",
        "Assign the most important comparison to position, since that is the encoding people read most accurately.",
        "Use a small multiple grid to add a categorical variable without adding clutter.",
        "Stop adding variables when a reader can no longer state what a single mark means."
      ],
      example: "Minard's 1869 campaign map carries six variables: army size, latitude, longitude, direction of travel, date and temperature. Tufte analyses exactly this count in Beautiful Evidence.",
      numbers: "",
      pitfall: "Multivariate turns into multi-encoded, where size, colour, shape and opacity all vary at once and none of them can be read. Each extra variable costs accuracy on the ones already there.",
      source: "Edward Tufte, The Visual Display of Quantitative Information (1983) and Beautiful Evidence (2006), principle three of analytical design.",
      verify: { status: "verified", note: "The claim that excellence is nearly always multivariate is quoted from Tufte in Stasko's lecture notes. The six-variable count for Minard was confirmed from the Beautiful Evidence chapter on analytical design, hosted by Stanford Data Science, which lists the dimensions." },
      belongs: { verdict: "core", why: "It sets the ambition level for a chart and it is the reason small multiples and scatterplot matrices exist." },
      related: [496, 502, 509, 514]
    },
    {
      n: 506,
      title: "Sparklines",
      aka: ["Word-sized graphics", "Intense continuous time series"],
      oneLine: "Small, wordless charts set inline with text at roughly the size of the surrounding type.",
      demo: {
        caption: "Word-sized: the trace sits inside the sentence, and in the table below all three rows share one vertical scale.",
        html: "<div class=\"db-stage\"><div class=\"db-col\"><div class=\"db-type\" style=\"font-size:13px\">Sales in the north have run <svg class=\"db-svg\" viewBox=\"0 0 60 14\" style=\"width:60px;height:14px;display:inline-block;vertical-align:-2px\"><path class=\"s\" d=\"M1 5L8 4L15 6L22 5L29 4L36 5L43 4L50 5L57 4\"/><circle class=\"f\" cx=\"57\" cy=\"4\" r=\"1.8\"/></svg> since April, and stand at 4,120 today.</div><div class=\"db-col db-col--tight\"><div class=\"db-row db-row--nowrap db-row--between\"><span class=\"db-note\">north</span><svg class=\"db-svg\" viewBox=\"0 0 60 14\" style=\"width:60px;height:14px\"><path class=\"s\" d=\"M1 5L8 4L15 6L22 5L29 4L36 5L43 4L50 5L57 4\"/><circle class=\"f\" cx=\"57\" cy=\"4\" r=\"1.8\"/></svg><span class=\"db-note\">4,120</span></div><div class=\"db-row db-row--nowrap db-row--between\"><span class=\"db-note\">south</span><svg class=\"db-svg\" viewBox=\"0 0 60 14\" style=\"width:60px;height:14px\"><path class=\"s\" d=\"M1 11L8 10L15 10L22 9L29 8L36 7L43 6L50 5L57 3\"/><circle class=\"f\" cx=\"57\" cy=\"3\" r=\"1.8\"/></svg><span class=\"db-note\">2,880</span></div><div class=\"db-row db-row--nowrap db-row--between\"><span class=\"db-note\">east</span><svg class=\"db-svg\" viewBox=\"0 0 60 14\" style=\"width:60px;height:14px\"><path class=\"s\" d=\"M1 4L8 5L15 5L22 7L29 8L36 10L43 11L50 12L57 12\"/><circle class=\"f\" cx=\"57\" cy=\"12\" r=\"1.8\"/></svg><span class=\"db-note\">1,940</span></div></div></div></div>"
      },
      what: "Tufte named the sparkline in Beautiful Evidence and defined it as a small, high-resolution graphic embedded in a context of words, numbers and images: data-intense, design-simple, word-sized. There is no axis, no frame and usually no label. The reader gets shape, direction and volatility, not exact values, and reads it in the flow of a sentence rather than as a separate exhibit.",
      why: "It puts the trend next to the number instead of on another page. A table of current figures tells you where things stand; the same table with a sparkline in each row tells you how each one got there, at almost no cost in space.",
      how: [
        "Set the height near the x-height of the body type so the graphic sits in the line rather than interrupting it.",
        "Mark the last value, and the minimum and maximum, if the reader needs anchors.",
        "Share the vertical scale across a column of sparklines, or say clearly that each is scaled to itself.",
        "Give the exact current number as text beside the sparkline; the graphic carries shape, the digits carry value."
      ],
      example: "Financial dashboards and stock tables routinely place a small price line beside each ticker. The graphic form predates Tufte's name for it: the Royal Society's 1888 report on the 1883 Krakatoa eruption printed compact barometric traces from stations around the world, though on separate plates rather than inline, so it lacks the one feature that defines a sparkline.",
      numbers: "",
      pitfall: "Scaling every sparkline in a table to its own range. Every row then looks equally dramatic, and a stable series is drawn with the same amplitude as a collapsing one.",
      source: "Edward Tufte, Beautiful Evidence (2006), chapter 2.",
      verify: { status: "verified", note: "Definition, wording and 2006 date checked against Wikipedia's sparkline article, which quotes Tufte on small, high-resolution graphics embedded in a context of words, numbers and images, and describes them as data-intense, design-simple, word-sized. The same article records the 1888 Krakatoa report, noting the barometric traces appeared on separate plates rather than in the text, and Peter Zelchenko's 1999 inline-chart implementation for Mike Medved's QuoteTracker." },
      belongs: { verdict: "core", why: "A named, specific graphic form with clear construction rules, now standard in tables and dashboards." },
      related: [501, 502, 507, 526]
    },
    {
      n: 507,
      title: "Direct labelling",
      aka: ["Labels on the data", "Killing the legend"],
      oneLine: "Put each series name next to its own line or bar instead of in a separate key.",
      demo: {
        caption: "Same three lines. The left makes you carry a colour down to the key and back; the right does not.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Legend below</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 262 116\"><path class=\"s-mute\" d=\"M10 98 H210\"/><path class=\"s\" d=\"M10 70L48 64L86 56L124 48L162 40L200 30\"/><path class=\"s-mute\" d=\"M10 44L48 48L86 42L124 46L162 44L200 48\"/><path class=\"s-accent\" d=\"M10 90L48 86L86 88L124 80L162 76L200 70\"/><path class=\"s\" d=\"M10 107 h14\"/><text class=\"t\" x=\"28\" y=\"110\">north</text><path class=\"s-mute\" d=\"M66 107 h14\"/><text class=\"t\" x=\"84\" y=\"110\">south</text><path class=\"s-accent\" d=\"M122 107 h14\"/><text class=\"t\" x=\"140\" y=\"110\">east</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Labels on the lines</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 262 116\"><path class=\"s-mute\" d=\"M10 98 H210\"/><path class=\"s\" d=\"M10 70L48 64L86 56L124 48L162 40L200 30\"/><path class=\"s-mute\" d=\"M10 44L48 48L86 42L124 46L162 44L200 48\"/><path class=\"s-accent\" d=\"M10 90L48 86L86 88L124 80L162 76L200 70\"/><text class=\"t\" x=\"206\" y=\"33\">north</text><text class=\"t\" x=\"206\" y=\"51\">south</text><text class=\"t\" x=\"206\" y=\"73\">east</text></svg></div></div></div>"
      },
      what: "A legend forces the reader to hold a colour in memory, travel to the key, decode it and travel back, once per series. Direct labelling removes that round trip by writing the name at the end of the line, inside the bar or beside the point. Tufte's chart advice states it flatly: avoid separate legends and keys, and put that information in the graphic itself.",
      why: "It cuts eye travel and memory load, and it survives being photocopied, screenshotted or read by someone with a colour vision deficiency. It also frees colour to do a different job, such as marking one highlighted series.",
      how: [
        "Label the end of each line at its final value, matching the label colour to the line.",
        "Where lines converge, label at the point of greatest separation rather than always at the right edge.",
        "Put value labels inside bars when there is room, aligned to the bar's end.",
        "Keep a legend only when the same categories repeat across many small panels, and then label the grid once."
      ],
      example: "Financial Times and Economist line charts label series at the line ends as house style rather than printing a key.",
      numbers: "",
      pitfall: "Charting libraries default to legends, and direct labels collide when series cross. Solving the collision usually means labelling at different x positions, not shrinking the type until it is unreadable.",
      source: "Edward Tufte's chart advice, avoid separate legends and keys, as taught from his books; also standard in William Cleveland's graphing advice and Stephen Few's Show Me the Numbers.",
      verify: { status: "verified", note: "The instruction is reproduced verbatim in Stasko's Georgia Tech lecture notes on Tufte, under Graph and Chart Tips: avoid separate legends and keys, just have that information in the graphic. Those notes draw on The Visual Display, Envisioning Information and Visual Explanations together, so the specific book and page cannot be pinned from them and no single volume is claimed here. The phrase direct labelling is a later convention rather than Tufte's own term, and I could not trace an originator for it." },
      belongs: { verdict: "core", why: "A concrete, always-applicable technique that removes a measurable cost from reading a chart." },
      related: [506, 525, 535, 503]
    },
    {
      n: 508,
      title: "Above all else, show the data",
      aka: ["Tufte's first design principle"],
      oneLine: "The data comes first; every other element in a graphic has to justify the space it takes.",
      demo: {
        caption: "Same four bars, same frame. On the left they hold about a twelfth of the space; on the right, most of it.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Everything else first</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 136\"><rect class=\"s-mute\" x=\"2\" y=\"2\" width=\"216\" height=\"132\"/><rect class=\"f-mute\" x=\"2\" y=\"2\" width=\"216\" height=\"20\" opacity=\"0.22\"/><text class=\"t\" x=\"10\" y=\"16\">third quarter performance</text><rect class=\"f-mute\" x=\"186\" y=\"30\" width=\"26\" height=\"14\" opacity=\"0.5\"/><rect class=\"f-mute\" x=\"72\" y=\"50\" width=\"76\" height=\"46\" opacity=\"0.14\"/><rect class=\"f\" x=\"78\" y=\"82\" width=\"10\" height=\"12\"/><rect class=\"f\" x=\"96\" y=\"74\" width=\"10\" height=\"20\"/><rect class=\"f\" x=\"114\" y=\"78\" width=\"10\" height=\"16\"/><rect class=\"f\" x=\"132\" y=\"68\" width=\"10\" height=\"26\"/><rect class=\"f-mute\" x=\"2\" y=\"114\" width=\"216\" height=\"20\" opacity=\"0.22\"/><text class=\"t\" x=\"10\" y=\"128\">source: internal reporting</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Data first</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 136\"><text class=\"t\" x=\"4\" y=\"12\">third quarter performance</text><rect class=\"f\" x=\"6\" y=\"81\" width=\"46\" height=\"47\"/><rect class=\"f\" x=\"60\" y=\"50\" width=\"46\" height=\"78\"/><rect class=\"f\" x=\"114\" y=\"66\" width=\"46\" height=\"62\"/><rect class=\"f\" x=\"168\" y=\"27\" width=\"46\" height=\"101\"/><path class=\"s-mute\" d=\"M4 128 H216\"/></svg></div></div></div>"
      },
      what: "This is the opening line of Tufte's sequence of design instructions and the one the rest hang from. It is followed by pushing the data-ink ratio up, erasing non-data ink, erasing redundant data ink, and then revising and editing. Read as a priority order rather than a slogan, it says that when the styling and the evidence compete for space, the evidence wins.",
      why: "Most bad charts fail here rather than at any subtle perceptual level. The data is drawn small, in the middle of a large frame, behind a background image, under a heading and a logo. Putting the data first is usually the single largest improvement available.",
      how: [
        "Measure what share of the graphic's area the data marks occupy, and grow it.",
        "Move the title, logo and footnote out of the plotting area.",
        "Drop background images and fills from anything a reader has to take a value from.",
        "Do the revise-and-edit pass Tufte lists last; the first version is a draft."
      ],
      example: "Any corporate slide where a four-bar chart occupies a quarter of the frame, surrounded by a gradient background, a logo and a footer, is a failure of this principle before it is anything else.",
      numbers: "",
      pitfall: "It gets quoted as a licence to strip everything, which is not what it says. The instruction is about priority, and a title that states the finding is part of showing the data, not a decoration.",
      source: "Edward Tufte, The Visual Display of Quantitative Information (1983), chapter 4.",
      verify: { status: "verified", note: "The full ordered sequence of five instructions was checked against Stasko's Georgia Tech lecture notes, which list them in order from Tufte's text." },
      belongs: { verdict: "core", why: "The plainest statement of priority in the field, and the fix for the most common failure in business graphics." },
      related: [499, 496, 500, 534]
    },
    {
      n: 509,
      title: "Escaping flatland",
      aka: ["Beyond the flat page"],
      oneLine: "The page is two-dimensional and the world is not, so find ways to show more dimensions without faking depth.",
      demo: {
        caption: "Every bar in both panels stands for 50. The rendered depth changes how large they look and carries no extra variable.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Depth rendered</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 132\"><path class=\"s-mute\" d=\"M6 118 L176 73\"/><rect class=\"f-mute\" x=\"14\" y=\"52\" width=\"30\" height=\"60\"/><path class=\"f-mute\" d=\"M14 52 L24 44 H54 L44 52 Z\" opacity=\"0.62\"/><path class=\"f-mute\" d=\"M44 52 L54 44 V104 L44 112 Z\" opacity=\"0.38\"/><rect class=\"f-mute\" x=\"76\" y=\"49\" width=\"23\" height=\"47\"/><path class=\"f-mute\" d=\"M76 49 L84 43 H107 L99 49 Z\" opacity=\"0.62\"/><path class=\"f-mute\" d=\"M99 49 L107 43 V90 L99 96 Z\" opacity=\"0.38\"/><rect class=\"f-mute\" x=\"132\" y=\"46\" width=\"18\" height=\"36\"/><path class=\"f-mute\" d=\"M132 46 L138 41 H156 L150 46 Z\" opacity=\"0.62\"/><path class=\"f-mute\" d=\"M150 46 L156 41 V77 L150 82 Z\" opacity=\"0.38\"/><text class=\"t\" x=\"29\" y=\"126\" text-anchor=\"middle\">50</text><text class=\"t\" x=\"87\" y=\"110\" text-anchor=\"middle\">50</text><text class=\"t\" x=\"141\" y=\"96\" text-anchor=\"middle\">50</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Flat</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 132\"><rect class=\"f-mute\" x=\"20\" y=\"52\" width=\"44\" height=\"60\"/><rect class=\"f-mute\" x=\"88\" y=\"52\" width=\"44\" height=\"60\"/><rect class=\"f-mute\" x=\"156\" y=\"52\" width=\"44\" height=\"60\"/><path class=\"s-mute\" d=\"M8 112 H212\"/><text class=\"t\" x=\"42\" y=\"126\" text-anchor=\"middle\">50</text><text class=\"t\" x=\"110\" y=\"126\" text-anchor=\"middle\">50</text><text class=\"t\" x=\"178\" y=\"126\" text-anchor=\"middle\">50</text></svg></div></div></div>"
      },
      what: "Tufte opens Envisioning Information with the problem that all information displays sit on a flat surface while the questions people ask are multi-dimensional. His answer is not three-dimensional rendering. It is layering, small multiples, colour, time on one axis, and clever combinations such as a timetable that plots distance against time so every journey becomes a line. Adding a rendered z-axis to two-dimensional data goes the wrong way, because it costs accuracy without adding a variable.",
      why: "It reframes a common request. When someone asks for a three-dimensional chart, what they usually want is another variable, and there are better places to put it. Knowing the alternatives lets you give them the variable without the distortion.",
      how: [
        "Treat a request for depth as a request for one more variable, then encode it with position, panel or colour.",
        "Refuse extruded bars and pies; they add occlusion and perspective error and no information.",
        "Consider a time axis, a small multiple grid or a scatterplot matrix before considering a third spatial dimension.",
        "Reserve true three-dimensional rendering for data that is genuinely spatial, such as anatomy or terrain."
      ],
      example: "The Java railway timetable graph Tufte reproduces, where the horizontal axis is time and the vertical axis is distance along the line, so every train is a diagonal and every crossing is a passing point.",
      numbers: "",
      pitfall: "Escaping flatland is read as an endorsement of three-dimensional charts, which is the opposite of the argument. The chapter is about getting more dimensions onto a flat surface honestly.",
      source: "Edward Tufte, Envisioning Information (1990), chapter 1.",
      verify: { status: "verified", note: "Chapter title and position confirmed from the Internet Archive catalogue record for Envisioning Information, whose contents note lists the six chapters in order. Stasko's lecture notes on this chapter record Tufte's point that escaping flatland does not require three-dimensional projection, and reproduce the Java railroad timetable from page 24." },
      belongs: { verdict: "core", why: "It names the constraint every information designer works under and supplies the honest workarounds." },
      related: [505, 502, 497, 503]
    },
    {
      n: 510,
      title: "Causality in visual explanation",
      aka: ["Show mechanism", "Pictures of verbs"],
      oneLine: "Design the display so the suspected cause and the effect can be compared in one view.",
      demo: {
        caption: "Same outbreak both sides. Only the map puts the deaths beside the pumps, so the cluster round one can be seen.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Effect on its own</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 108\"><rect class=\"f-mute\" x=\"8\" y=\"84\" width=\"14\" height=\"4\"/><rect class=\"f-mute\" x=\"25\" y=\"80\" width=\"14\" height=\"8\"/><rect class=\"f-mute\" x=\"42\" y=\"73\" width=\"14\" height=\"15\"/><rect class=\"f-mute\" x=\"59\" y=\"56\" width=\"14\" height=\"32\"/><rect class=\"f-mute\" x=\"76\" y=\"37\" width=\"14\" height=\"51\"/><rect class=\"f-mute\" x=\"93\" y=\"18\" width=\"14\" height=\"70\"/><rect class=\"f-mute\" x=\"110\" y=\"33\" width=\"14\" height=\"55\"/><rect class=\"f-mute\" x=\"127\" y=\"53\" width=\"14\" height=\"35\"/><rect class=\"f-mute\" x=\"144\" y=\"69\" width=\"14\" height=\"19\"/><rect class=\"f-mute\" x=\"161\" y=\"79\" width=\"14\" height=\"9\"/><rect class=\"f-mute\" x=\"178\" y=\"83\" width=\"14\" height=\"5\"/><rect class=\"f-mute\" x=\"195\" y=\"85\" width=\"14\" height=\"3\"/><path class=\"s-mute\" d=\"M8 88 H209\"/><text class=\"t\" x=\"108\" y=\"102\" text-anchor=\"middle\">deaths per week</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Effect against the suspected cause</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 220 108\"><circle class=\"f-mute\" cx=\"87\" cy=\"55\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"103\" cy=\"54\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"81\" cy=\"60\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"79\" cy=\"28\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"74\" cy=\"48\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"87\" cy=\"52\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"87\" cy=\"45\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"89\" cy=\"45\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"85\" cy=\"33\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"84\" cy=\"44\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"99\" cy=\"47\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"105\" cy=\"50\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"98\" cy=\"40\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"84\" cy=\"63\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"108\" cy=\"48\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"84\" cy=\"43\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"102\" cy=\"59\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"92\" cy=\"45\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"88\" cy=\"67\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"69\" cy=\"32\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"98\" cy=\"46\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"83\" cy=\"38\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"98\" cy=\"61\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"102\" cy=\"47\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"66\" cy=\"48\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"144\" cy=\"28\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"149\" cy=\"21\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"16\" cy=\"32\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"185\" cy=\"64\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"113\" cy=\"36\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"51\" cy=\"64\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"187\" cy=\"77\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"70\" cy=\"63\" r=\"2.4\"/><circle class=\"f-mute\" cx=\"152\" cy=\"53\" r=\"2.4\"/><rect class=\"s-mute\" x=\"27\" y=\"17\" width=\"7\" height=\"7\"/><rect class=\"s-mute\" x=\"167\" y=\"27\" width=\"7\" height=\"7\"/><rect class=\"s-mute\" x=\"147\" y=\"77\" width=\"7\" height=\"7\"/><rect class=\"s-mute\" x=\"37\" y=\"75\" width=\"7\" height=\"7\"/><rect class=\"s-accent\" x=\"83\" y=\"43\" width=\"7\" height=\"7\"/><text class=\"t\" x=\"8\" y=\"102\">squares: pumps</text><text class=\"t\" x=\"212\" y=\"102\" text-anchor=\"end\">dots: deaths</text></svg></div></div></div>"
      },
      what: "Tufte's Visual Explanations is about showing process and change rather than static quantity, and his later Beautiful Evidence makes causality the second principle of analytical design: show causality, mechanism, explanation, systematic structure. In practice this means plotting the candidate cause against the outcome on the same picture, at the same scale, so the relationship is visible instead of asserted in a caption. His worked examples include John Snow's 1854 cholera map and the charts prepared before the Challenger launch.",
      why: "A display that separates cause and effect onto different pages leaves the reader to do the joining, and readers usually accept whatever the caption tells them. Putting both in one frame makes the claim inspectable, including when it does not hold.",
      how: [
        "Plot the proposed explanatory variable and the outcome on the same axes or in adjacent panels with shared scales.",
        "Show the cases that do not fit as well as the ones that do.",
        "Use arrows and links only where you mean a directional claim, and say what the direction is based on.",
        "Give the reader enough of the record to test the claim rather than a summary statistic."
      ],
      example: "John Snow's map of the 1854 Broad Street cholera outbreak plots deaths as marks against the position of water pumps, so the concentration around one pump can be seen rather than argued. Tufte analyses it in Visual Explanations.",
      numbers: "",
      pitfall: "A chart that makes a causal story visible also makes a false causal story visible. Showing two lines rising together is an invitation to a causal reading, whether or not one is warranted.",
      source: "Edward Tufte, Visual Explanations (1997) and Beautiful Evidence (2006), principle two of analytical design.",
      verify: { status: "verified", note: "The six principles of analytical design, including show causality, were read in the Beautiful Evidence chapter hosted by Stanford Data Science. Visual Explanations (Graphics Press, 1997) and its treatment of Snow and Challenger were confirmed against the Internet Archive catalogue record and Google Books' subject index for the volume." },
      belongs: { verdict: "core", why: "It is the reason a display exists in analytical work, and it sets a testable requirement on the layout." },
      related: [505, 523, 525, 496]
    },
    {
      n: 511,
      title: "The smallest effective difference",
      aka: ["Make distinctions as subtle as possible but still clear"],
      oneLine: "Use the faintest visual difference that still does the job, then stop.",
      demo: {
        caption: "Both tables mark the same two groups. The left uses a fill, a box, capitals and bold; the right, one hairline.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Four devices at once</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span style=\"background:var(--paper-sunk);border:1px solid var(--rule-strong);padding:2px 5px;font-weight:700;text-transform:uppercase\">North</span><span>Leeds 412</span><span>York 288</span><span style=\"background:var(--paper-sunk);border:1px solid var(--rule-strong);padding:2px 5px;font-weight:700;text-transform:uppercase\">South</span><span>Bath 351</span><span>Hove 194</span></div></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">One pale hairline</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ui\"><div class=\"db-col db-col--tight\"><span>North</span><span>Leeds 412</span><span>York 288</span><span style=\"border-top:1px solid var(--rule);padding-top:7px\">South</span><span>Bath 351</span><span>Hove 194</span></div></div></div></div></div>"
      },
      what: "Tufte devotes a chapter of Visual Explanations to this rule: make all visual distinctions as subtle as possible, but still clear and effective. A dashed line, a pale tint and a half-point weight change are all differences. If a quarter-tone grey separates the reference layer from the data, there is no reason to reach for a box, a rule and a colour as well. The rule applies to type, tone, weight, colour and spacing alike.",
      why: "Loud distinctions compete with each other. Once several elements shout, none of them stands out, and the graphic acquires a texture of stripes and boxes that has nothing to do with the data. Subtle distinctions leave contrast available for the one thing you actually want noticed.",
      how: [
        "Set the difference at the level where it stops working, then step back one notch.",
        "Prefer one channel of difference at a time: tone or weight or colour, not all three.",
        "Test the subtlest version at final output size and on the worst display your readers use.",
        "Check against accessibility thresholds before you call it finished; subtle has a floor."
      ],
      example: "A table where alternate groups are separated by a single pale hairline rule rather than by full-strength rules, bold headers and fills all at once.",
      numbers: "",
      pitfall: "Pushed without checking, subtlety becomes invisibility. The rule has a hard floor in accessibility standards, and pale grey rules on white routinely fall below it.",
      source: "Edward Tufte, Visual Explanations (1997), chapter 4, page 73.",
      verify: { status: "verified", note: "Chapter title and page number confirmed from the reproduced contents page of the 1997 Graphics Press edition and from the Open Library and Google Books records for the same volume." },
      belongs: { verdict: "core", why: "A general design rule that applies far beyond charts and gives a specific stopping condition." },
      related: [503, 499, 527, 535]
    },
    {
      n: 512,
      title: "Visual variables (position, size, shape, value, colour, orientation, texture)",
      aka: ["Bertin's retinal variables", "Graphic variables"],
      oneLine: "Bertin's inventory of the ways a mark can differ from its neighbour and so carry information.",
      demo: {
        caption: "One mark, seven channels: each column varies it in one way only. Position is the plane; the rest are Bertin's retinal six.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 470 104\"><circle class=\"f\" cx=\"16\" cy=\"26\" r=\"4\"/><circle class=\"f\" cx=\"40\" cy=\"46\" r=\"4\"/><circle class=\"f\" cx=\"24\" cy=\"66\" r=\"4\"/><circle class=\"f\" cx=\"70\" cy=\"46\" r=\"2.5\"/><circle class=\"f\" cx=\"88\" cy=\"46\" r=\"5\"/><circle class=\"f\" cx=\"108\" cy=\"46\" r=\"8\"/><rect class=\"f\" x=\"124\" y=\"39\" width=\"14\" height=\"14\" opacity=\"0.22\"/><rect class=\"f\" x=\"142\" y=\"39\" width=\"14\" height=\"14\" opacity=\"0.55\"/><rect class=\"f\" x=\"160\" y=\"39\" width=\"14\" height=\"14\"/><rect class=\"s-mute\" x=\"182\" y=\"39\" width=\"14\" height=\"14\"/><path class=\"s-mute\" d=\"M182 46 h14\"/><rect class=\"s-mute\" x=\"200\" y=\"39\" width=\"14\" height=\"14\"/><path class=\"s-mute\" d=\"M200 43 h14 M200 46 h14 M200 49 h14\"/><rect class=\"s-mute\" x=\"218\" y=\"39\" width=\"14\" height=\"14\"/><path class=\"s-mute\" d=\"M218 41 h14 M218 43.5 h14 M218 46 h14 M218 48.5 h14 M218 51 h14\"/><rect x=\"240\" y=\"39\" width=\"14\" height=\"14\" style=\"fill:#4E7FBF\"/><rect x=\"258\" y=\"39\" width=\"14\" height=\"14\" style=\"fill:#CE5A46\"/><rect x=\"276\" y=\"39\" width=\"14\" height=\"14\" style=\"fill:#558B49\"/><path class=\"s\" d=\"M320 46 h14\"/><path class=\"s\" d=\"M340 52 l12 -12\"/><path class=\"s\" d=\"M364 39 v14\"/><circle class=\"f\" cx=\"398\" cy=\"46\" r=\"6.5\"/><rect class=\"f\" x=\"412\" y=\"40\" width=\"13\" height=\"13\"/><path class=\"f\" d=\"M436 53 l6.5 -13 l6.5 13 Z\"/><text class=\"t\" x=\"30\" y=\"96\" text-anchor=\"middle\">position</text><text class=\"t\" x=\"91\" y=\"96\" text-anchor=\"middle\">size</text><text class=\"t\" x=\"149\" y=\"96\" text-anchor=\"middle\">value</text><text class=\"t\" x=\"207\" y=\"96\" text-anchor=\"middle\">texture</text><text class=\"t\" x=\"265\" y=\"96\" text-anchor=\"middle\">colour</text><text class=\"t\" x=\"342\" y=\"96\" text-anchor=\"middle\">orientation</text><text class=\"t\" x=\"421\" y=\"96\" text-anchor=\"middle\">shape</text></svg></div>"
      },
      what: "Jacques Bertin published Semiologie graphique in 1967, translated into English as Semiology of Graphics in 1983. He set out the two planar dimensions of the page plus six retinal variables that can be varied independently of position: size, value (lightness), texture or grain, colour hue, orientation and shape. Any graphic, from a map to a bar chart, is built by assigning data to some of these. The inventory is finite, which is the useful part.",
      why: "It turns chart design into an assignment problem you can check. List the variables in the data, list the channels available, assign them, and see what is left over. It also explains why some charts fail: two data variables have been given to the same channel, or an important one has been given to a channel the eye reads badly.",
      how: [
        "Write down each data variable and the visual channel you have given it before you build anything.",
        "Give the variable the reader cares most about to position, the strongest channel.",
        "Do not encode two variables in one channel, such as hue carrying both category and value.",
        "Keep one channel spare for highlighting, so you can point at something without redesigning."
      ],
      example: "A dot map where position gives location, size gives population, hue gives region and shape gives settlement type is a straight application of Bertin's scheme, one variable per channel.",
      numbers: "Bertin's original set: two planar dimensions plus size, value, texture or grain, colour, orientation and shape.",
      pitfall: "Later authors have extended and reshuffled the list, so a source citing eight or twelve variables is not quoting Bertin. Say whose version you mean.",
      source: "Jacques Bertin, Semiologie graphique (1967), translated as Semiology of Graphics (University of Wisconsin Press, 1983).",
      verify: { status: "verified", note: "Publication and translation dates confirmed from Wikipedia's Jacques Bertin article. The variable list and the later additions were checked against Wikipedia's visual variable article, which distinguishes Bertin's 1967 set from post-1967 additions such as saturation, transparency and crispness." },
      belongs: { verdict: "core", why: "The base vocabulary of graphic encoding, and the thing that makes chart choice a decision rather than a habit." },
      related: [513, 514, 515, 535]
    },
    {
      n: 513,
      title: "Selective, associative, ordered and quantitative properties",
      aka: ["Bertin's levels of organisation"],
      oneLine: "Bertin's test of what each visual channel can actually do: group, isolate, rank or measure.",
      demo: {
        caption: "The same five ranked bands twice. Only the lightness strip tells you, with no key, which end is the top band.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Hue: selective, not ordered</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#4E7FBF\"></span><span style=\"background:#CE5A46\"></span><span style=\"background:#558B49\"></span><span style=\"background:#9A7A2E\"></span><span style=\"background:#7A5AA8\"></span></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Lightness: ordered</span><div class=\"db-stage db-stage--tight\"><div class=\"db-ramp\"><span style=\"background:#E7EDF5\"></span><span style=\"background:#B9CBE2\"></span><span style=\"background:#85A6CB\"></span><span style=\"background:#5379A6\"></span><span style=\"background:#2A4667\"></span></div></div></div></div>"
      },
      what: "Bertin did not treat his variables as interchangeable. He asked four questions of each. Is it selective, meaning the reader can pick out all marks of one value at a glance? Is it associative, meaning marks can be grouped as the same despite differing in other ways? Is it ordered, meaning values fall into an obvious sequence? Is it quantitative, meaning the reader can judge how many times larger one is than another? Of his six retinal variables, only size passes the quantitative test; the two planar dimensions pass it as well, which is why position keeps winning.",
      why: "It stops the most common encoding mistake, which is putting a measured quantity on a channel that cannot be measured. Hue can group and it can select, but nobody can say that this red is 2.4 times that blue. Lightness gives you an order without giving a ratio.",
      how: [
        "Match the level of the data to the level of the channel: categories to hue or shape, ranks to lightness, amounts to size or position.",
        "Never ask a reader to read a quantity off a hue scale; add labels or use position instead.",
        "Use an ordered channel such as lightness for anything with a natural sequence, including a rating.",
        "State which level you need before choosing a palette, and the palette choice follows."
      ],
      example: "A choropleth map that shades from pale to dark for a rate uses lightness, an ordered channel, correctly. The same map coloured in unrelated hues per band gives the reader no sequence at all.",
      numbers: "Of Bertin's six retinal variables, only size is classed as quantitative. Size and value are the two dissociative ones, meaning their variation cannot be visually ignored.",
      pitfall: "The four properties get taught as a table to memorise. The value is in the question, applied to whatever channel and whatever medium you are actually using.",
      source: "Jacques Bertin, Semiology of Graphics (1983 translation of the 1967 original).",
      verify: { status: "verified", note: "Levels and their assignment to variables checked against Wikipedia's visual variable article, which sets out associative, dissociative, selective, ordered and quantitative levels and states that Bertin included only size as quantitative, while noting the later argument that value is arguably quantitative too." },
      belongs: { verdict: "core", why: "It is the rule that tells you which channel a given kind of data may go on, which is the first decision in any chart." },
      related: [512, 514, 522, 535]
    },
    {
      n: 514,
      title: "Cleveland-McGill encoding accuracy ranking",
      aka: ["Graphical perception ranking", "Elementary perceptual tasks"],
      oneLine: "An experimentally ordered list of how accurately people read quantities from each visual encoding.",
      demo: {
        caption: "Every panel shows 100 beside 72. Judging that ratio gets steadily harder from left to right, and the data never changes.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 460 120\"><text class=\"t\" x=\"4\" y=\"12\">each panel: 100 beside 72</text><path class=\"s-mute\" d=\"M18 94 V22 M18 94 H74\"/><circle class=\"f\" cx=\"36\" cy=\"24\" r=\"4.5\"/><circle class=\"f\" cx=\"58\" cy=\"44\" r=\"4.5\"/><rect class=\"f\" x=\"110\" y=\"24\" width=\"14\" height=\"70\"/><rect class=\"f\" x=\"142\" y=\"40\" width=\"14\" height=\"50\"/><circle class=\"s-mute\" cx=\"200\" cy=\"52\" r=\"22\"/><path class=\"f-mute\" d=\"M200 52 L200 30 A22 22 0 0 1 216.9 66.1 Z\"/><circle class=\"s-mute\" cx=\"250\" cy=\"52\" r=\"22\"/><path class=\"f-mute\" d=\"M250 52 L250 30 A22 22 0 0 1 271.9 53.5 Z\"/><circle class=\"f-mute\" cx=\"306\" cy=\"52\" r=\"24\"/><circle class=\"f-mute\" cx=\"356\" cy=\"52\" r=\"20.4\"/><rect class=\"f\" x=\"390\" y=\"38\" width=\"26\" height=\"28\"/><rect class=\"f\" x=\"422\" y=\"38\" width=\"26\" height=\"28\" opacity=\"0.72\"/><text class=\"t\" x=\"44\" y=\"112\" text-anchor=\"middle\">position</text><text class=\"t\" x=\"133\" y=\"112\" text-anchor=\"middle\">length</text><text class=\"t\" x=\"225\" y=\"112\" text-anchor=\"middle\">angle</text><text class=\"t\" x=\"329\" y=\"112\" text-anchor=\"middle\">area</text><text class=\"t\" x=\"419\" y=\"112\" text-anchor=\"middle\">shading</text></svg></div>"
      },
      what: "William Cleveland and Robert McGill argued that reading a chart decomposes into elementary perceptual tasks, then ran experiments to rank those tasks by accuracy. Their order, most accurate first, is: position along a common scale; position along non-aligned scales; length, direction and angle; area; volume and curvature; shading and colour saturation. The paper appeared in the Journal of the American Statistical Association in 1984 and is the empirical backbone of most modern chart advice.",
      why: "It replaces preference with evidence. If two chart types could show your data, the ranking says which one people will read more accurately, and by roughly how much. It also explains why dot plots and bar charts keep winning comparison tests.",
      how: [
        "Put the quantity that must be judged accurately on a common-scale position, which means an axis all marks share.",
        "Use area or colour intensity only for rough magnitude, never where a reader needs a ratio.",
        "When comparing across small multiples, remember you have dropped to non-aligned position and keep scales identical.",
        "Where accuracy matters more than pattern, add the number as text next to the mark."
      ],
      example: "A grouped bar chart and a stacked bar chart show the same data, but only the bottom segment of the stack sits on a common baseline. Every other segment drops to position along a non-aligned scale, which is why stacks are harder to compare.",
      numbers: "Ranking, most to least accurate: position on a common scale; position on non-aligned scales; length, direction, angle; area; volume, curvature; shading, colour saturation.",
      pitfall: "The ranking measures accuracy of value judgement, nothing else. A treemap scores badly on it and is still right when the task is spotting the largest block in a hierarchy. Two details go missing in the popular shorthand: non-aligned position is a rank below common-scale position, and length and angle share one rank rather than beating each other.",
      source: "William Cleveland and Robert McGill, Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Methods, Journal of the American Statistical Association 79(387), 531-554 (1984).",
      verify: { status: "verified", note: "Citation details confirmed against the Crossref record: Journal of the American Statistical Association, volume 79, number 387, pages 531 to 554, September 1984. The six ranks in the order given here were read off the STA 313 graphical perception slides at vizdata.org, which reproduce the list. Heer and Bostock's 2010 crowdsourced study reproduced Cleveland and McGill's results for the position and length tasks it retested, rather than the whole six-rank order." },
      belongs: { verdict: "core", why: "The single most useful piece of experimental evidence in the field, and it decides chart type directly." },
      related: [515, 512, 519, 516]
    },
    {
      n: 515,
      title: "Position over length over angle over area over volume",
      aka: ["The encoding shorthand"],
      oneLine: "The working shorthand of the Cleveland and McGill ranking, useful but slightly wrong as usually quoted.",
      demo: {
        caption: "The same two values both sides, both encoded by position. On one baseline the taller is instant; on two you measure.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Position, common scale</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 120\"><rect class=\"f\" x=\"30\" y=\"42\" width=\"44\" height=\"62\"/><rect class=\"f\" x=\"100\" y=\"36\" width=\"44\" height=\"68\"/><path class=\"s-mute\" d=\"M12 104 H168\"/><text class=\"t\" x=\"4\" y=\"107\">0</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Position, non-aligned scales</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 120\"><rect class=\"f\" x=\"26\" y=\"42\" width=\"40\" height=\"62\"/><path class=\"s-mute\" d=\"M10 104 H82\"/><text class=\"t\" x=\"2\" y=\"107\">0</text><rect class=\"f\" x=\"114\" y=\"10\" width=\"40\" height=\"68\"/><path class=\"s-mute\" d=\"M98 78 H170\"/><text class=\"t\" x=\"90\" y=\"81\">0</text></svg></div></div></div>"
      },
      what: "This is the version of entry 514 that circulates in design teams, and it is close enough to act on: prefer position to length, length to angle, angle to area, area to volume. Two details get lost in the compression. Cleveland and McGill placed length, direction and angle at the same rank rather than in that order, and they split position into two ranks depending on whether the marks share a scale. Both of those distinctions change real decisions.",
      why: "Shorthand is what people actually use in a review, so it is worth carrying the corrected version. Knowing that position splits in two tells you that a small multiple grid is already a step down in accuracy, which changes how carefully you set the scales.",
      how: [
        "Say position on a common scale rather than just position, so the distinction survives the conversation.",
        "Treat length and angle as roughly equal rather than arguing that bars always beat pies on angle alone.",
        "Reserve area for showing rough magnitude and volume for nothing at all.",
        "Quote the 1984 paper when the shorthand is challenged, rather than the shorthand itself."
      ],
      example: "Choosing a dot plot over a bubble chart for a ranking of twenty countries applies the shorthand directly: position on a shared axis instead of area.",
      numbers: "",
      pitfall: "Quoted as a law it produces bad calls, such as rejecting a pie for two categories where angle is perfectly readable, or accepting any position encoding without checking that the scales are shared.",
      source: "A popular restatement of Cleveland and McGill (1984); the phrasing has no single author.",
      verify: { status: "adjusted", note: "Corrected against the original ranking as reproduced in vizdata.org teaching materials from Cleveland and McGill 1984: length, direction and angle occupy one rank together, and position is split into common-scale and non-aligned-scale ranks. The popular five-step version compresses both distinctions away." },
      belongs: { verdict: "cut", why: "Overturned from core. It has no author, it duplicates entry 514, and its own content is that the wording is wrong twice over. A reference cannot list a slogan as a fundamental while telling the reader not to use it. Keep 514, which is the sourced experimental result, and fold the two warnings from this entry into its pitfall: say position on a common scale rather than position, and treat length and angle as one rank." },
      related: [514, 519, 512, 502]
    },
    {
      n: 516,
      title: "Zero-baseline rule",
      aka: ["Start bar charts at zero", "Truncated axis"],
      oneLine: "Bars encode length, so their axis must start at zero; for other chart types the rule is contested.",
      demo: {
        caption: "The same four weekly figures. Cut the axis at 90 and a four per cent spread becomes a cliff.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Axis starts at 90</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 116\"><path class=\"s-mute\" d=\"M14 100 H172\"/><rect class=\"f\" x=\"26\" y=\"86\" width=\"26\" height=\"14\"/><rect class=\"f\" x=\"62\" y=\"58\" width=\"26\" height=\"42\"/><rect class=\"f\" x=\"98\" y=\"30\" width=\"26\" height=\"70\"/><rect class=\"f\" x=\"134\" y=\"72\" width=\"26\" height=\"28\"/><text class=\"t\" x=\"2\" y=\"103\">90</text><text class=\"t\" x=\"32\" y=\"112\">91</text><text class=\"t\" x=\"68\" y=\"112\">93</text><text class=\"t\" x=\"104\" y=\"112\">95</text><text class=\"t\" x=\"140\" y=\"112\">92</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Axis starts at zero</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 116\"><path class=\"s-mute\" d=\"M14 100 H172\"/><rect class=\"f\" x=\"26\" y=\"24\" width=\"26\" height=\"76\"/><rect class=\"f\" x=\"62\" y=\"22\" width=\"26\" height=\"78\"/><rect class=\"f\" x=\"98\" y=\"20\" width=\"26\" height=\"80\"/><rect class=\"f\" x=\"134\" y=\"23\" width=\"26\" height=\"77\"/><text class=\"t\" x=\"6\" y=\"103\">0</text><text class=\"t\" x=\"32\" y=\"112\">91</text><text class=\"t\" x=\"68\" y=\"112\">93</text><text class=\"t\" x=\"104\" y=\"112\">95</text><text class=\"t\" x=\"140\" y=\"112\">92</text></svg></div></div></div>"
      },
      what: "A bar says a quantity by how long it is. Cut the axis at 90 instead of 0 and a bar representing 95 becomes five times the length of one representing 91, which is a straight breach of proportionality. For line charts the argument is weaker, because a line encodes position and change rather than length, and forcing zero can flatten a real movement into a straight line. Correll, Bertini and Franconeri tested this at CHI 2020 and found the exaggeration effect persists across chart types.",
      why: "It is the most frequent single cause of a misleading business chart, and it is easy to check. Knowing where the rule is firm and where it is contested lets you defend a truncated line chart without defending a truncated bar chart.",
      how: [
        "Start every bar, column and area chart at zero, without exception.",
        "For line charts, choose the range from the size of change that matters, and say what the range is.",
        "Do not rely on a zigzag break mark to fix a truncated bar; readers still overestimate the difference.",
        "If a small real change matters, show it as a change or a rate rather than truncating a level."
      ],
      example: "A weekly sales chart with the axis running from 480 to 500 turns a four per cent movement into a cliff. The same figures on a zero axis look flat, which is the honest reading of a four per cent move.",
      numbers: "",
      pitfall: "The rule gets applied to everything, including temperature, share price and index series, where a zero baseline is meaningless and hides the entire signal.",
      source: "Edward Tufte, The Visual Display of Quantitative Information (1983) for the proportionality argument; Michael Correll, Enrico Bertini and Steven Franconeri, Truncating the Y-Axis: Threat or Menace?, ACM CHI 2020, for the experimental picture.",
      verify: { status: "disputed", note: "I read the Correll, Bertini and Franconeri abstract on arXiv (1907.02035). They report that y-axis truncation shifts subjective effect size across visualisation designs and that the effect persists even with explicit visual cues warning the reader, and they recommend choosing the scale from the meaningful effect size rather than following a blanket rule. Wikipedia's misleading graph article notes the same finding that warning readers does not remove the bias." },
      belongs: { verdict: "core", why: "Every designer meets this decision weekly, and the honest version of the rule is more useful than the slogan." },
      related: [497, 498, 517, 522]
    },
    {
      n: 517,
      title: "Dual-axis pitfalls",
      aka: ["Twin y-axes", "Secondary axis charts"],
      oneLine: "Two different y-scales on one chart let the designer set the crossing point, and therefore the story.",
      demo: {
        caption: "Identical numbers in both panels. Only the right-hand scale changed, and the two lines now cross somewhere else.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Right axis 0 to 100</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 196 116\"><path class=\"s-mute\" d=\"M22 12 V104 M166 12 V104 M22 104 H166\"/><path class=\"s\" d=\"M30 83 L64 74 L98 61 L132 48 L162 36\"/><path class=\"s-accent\" d=\"M30 23 L64 31 L98 40 L132 48 L162 57\"/><circle class=\"s\" cx=\"132\" cy=\"48\" r=\"5\"/><text class=\"t\" x=\"18\" y=\"16\" text-anchor=\"end\">100</text><text class=\"t\" x=\"18\" y=\"107\" text-anchor=\"end\">0</text><text class=\"t\" x=\"170\" y=\"16\">100</text><text class=\"t\" x=\"170\" y=\"107\">0</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Right axis 40 to 140</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 196 116\"><path class=\"s-mute\" d=\"M22 12 V104 M166 12 V104 M22 104 H166\"/><path class=\"s\" d=\"M30 83 L64 74 L98 61 L132 48 L162 36\"/><path class=\"s-accent\" d=\"M30 57 L64 66 L98 74 L132 83 L162 91\"/><circle class=\"s\" cx=\"77\" cy=\"69\" r=\"5\"/><text class=\"t\" x=\"18\" y=\"16\" text-anchor=\"end\">100</text><text class=\"t\" x=\"18\" y=\"107\" text-anchor=\"end\">0</text><text class=\"t\" x=\"170\" y=\"16\">140</text><text class=\"t\" x=\"170\" y=\"107\">40</text></svg></div></div></div>"
      },
      what: "A dual-axis chart plots two series with different units against two separate vertical scales. The problem is that the relationship between the two scales is chosen, not given. Slide one scale and the two lines cross earlier, later or not at all, and the apparent correlation changes with it. Readers also have to remember which line belongs to which axis, which they routinely get wrong.",
      why: "The chart type is common in business reporting and it is one of the few where the designer's arbitrary choice directly determines the reader's conclusion. Knowing the alternatives lets you say no with something to offer instead.",
      how: [
        "Use two stacked panels sharing the x-axis rather than two y-axes on one panel.",
        "Index both series to a common base, such as 100 at the start date, and plot them on one scale.",
        "Plot the ratio or the difference directly if that is the thing you are claiming.",
        "If a dual axis is unavoidable, colour the axis labels to match the lines and never imply causation from the crossings."
      ],
      example: "The charts that pair an economic indicator with an unrelated series and set the two scales so the peaks line up are the standard illustration of the problem. Any such pairing can be made to look tight by adjusting one axis.",
      numbers: "",
      pitfall: "The strongest version of the objection, that dual axes are always wrong, is a design argument rather than an experimental result. Present it as a reasoned preference, not as a finding.",
      source: "A standard objection in the data visualisation literature, argued by Stephen Few and Alberto Cairo among others; the nearest controlled study is Petra Isenberg, Anastasia Bezerianos, Pierre Dragicevic and Jean-Daniel Fekete, A Study on Dual-Scale Data Charts, IEEE TVCG 17(12), 2469-2478 (2011).",
      verify: { status: "disputed", note: "I confirmed the Isenberg and colleagues citation through PubMed and the HAL repository listing, but the paper covers dual-scale charts, meaning two scales on one axis, which is a related but different design from twin y-axes. I could not find a controlled study of twin-y-axis charts specifically, so the pitfall is presented here as a well-argued design position rather than a tested one." },
      belongs: { verdict: "core", why: "It is a decision designers face constantly and it has clear, better alternatives." },
      related: [516, 514, 497, 522]
    },
    {
      n: 518,
      title: "Banking to 45 degrees",
      aka: ["Aspect ratio selection", "Shape parameter"],
      oneLine: "Set a line chart's aspect ratio so the typical line segment sits near 45 degrees.",
      demo: {
        caption: "The same twelve readings. Squashed flat the cycle disappears; with segments near 45 degrees each rise and fall reads.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Flattened</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 300 60\"><path class=\"s-mute\" d=\"M6 54 H294\"/><path class=\"s\" d=\"M10 46 L35 39 L60 45 L85 35 L110 41 L135 30 L160 35 L185 25 L210 30 L235 19 L260 25 L285 14\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Banked near 45 degrees</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 300 150\"><path class=\"s-mute\" d=\"M6 144 H294\"/><path class=\"s\" d=\"M10 127 L35 102 L60 121 L85 89 L110 108 L135 70 L160 89 L185 51 L210 70 L235 32 L260 51 L285 13\"/><path class=\"s-accent\" d=\"M232 138 l18 -18\"/><text class=\"t\" x=\"254\" y=\"140\">45 deg</text></svg></div></div></div>"
      },
      what: "Cleveland's finding is that the aspect ratio of a line chart changes what an analyst sees in it, because the eye judges differences in slope most sharply when the slopes are near 45 degrees. Flatten a chart and real changes disappear; stretch it vertically and noise looks like signal. The procedure, which Cleveland calls banking to 45 degrees, computes the aspect ratio that makes the average absolute orientation of the line segments equal to 45 degrees.",
      why: "It replaces a decision usually made by whatever the slide template allows with one made by the data. Two charts of the same series at different aspect ratios support opposite conclusions, so this is not a cosmetic setting.",
      how: [
        "Pick the aspect ratio after seeing the data, not from the layout grid.",
        "Where a series has both a long trend and a short cycle, draw it twice at different aspect ratios rather than compromising.",
        "Keep the aspect ratio identical across small multiples so the slopes stay comparable.",
        "Check the chart at its final printed or rendered size, since responsive layouts can undo the setting."
      ],
      example: "Heer and Agrawala's carbon dioxide example: the same 1959 to 1990 monthly series at an aspect ratio of 1.17 shows an accelerating rise, and at 7.87 shows the seasonal cycle with a gradual rise and a steeper fall.",
      numbers: "Cleveland's criterion sets the average absolute orientation of the line segments to 45 degrees.",
      pitfall: "It is an optimisation criterion, not a law of perception. Later work proposed alternative criteria that do the job better, so treat 45 degrees as a sensible default rather than a target to hit exactly.",
      source: "William Cleveland, Visualizing Data (1993); the underlying work is Cleveland, McGill and McGill, The Shape Parameter of a Two-Variable Graph, Journal of the American Statistical Association (1988).",
      verify: { status: "verified", note: "The rule, its attribution to Cleveland's Visualizing Data, the average-absolute-orientation wording and the carbon dioxide aspect ratios of 1.17 and 7.87 were all read in the abstract and figure caption of Jeffrey Heer and Maneesh Agrawala, Multi-Scale Banking to 45 Degrees, IEEE TVCG 12(5), 701-708 (2006), on the Stanford Visualization Group site. That paper explicitly proposes alternative optimisation criteria, which is why the pitfall is worded as it is." },
      belongs: { verdict: "core", why: "Aspect ratio is a decision on every line chart and this is the only principled way to make it." },
      related: [514, 516, 502, 522]
    },
    {
      n: 519,
      title: "Pie chart limits",
      aka: ["When a pie works"],
      oneLine: "Pies encode angle and area, which people read less accurately than position, so keep them small and simple.",
      demo: {
        caption: "Seven shares of one total. As wedges you cannot rank them; on a common baseline the order is exact.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Seven similar slices</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><circle class=\"f-mute\" cx=\"85\" cy=\"58\" r=\"40\"/><circle class=\"s-mute\" cx=\"85\" cy=\"58\" r=\"40\"/><path class=\"s-mute\" d=\"M85 58 L85 18 M85 58 L121.2 41 M85 58 L118.8 79.4 M85 58 L87.5 97.9 M85 58 L55.8 85.4 M85 58 L45.1 55.5 M85 58 L57.6 28.8\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">The same seven as bars</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><path class=\"s-mute\" d=\"M18 8 V110\"/><rect class=\"f-mute\" x=\"18\" y=\"12\" width=\"90\" height=\"9\"/><rect class=\"f-mute\" x=\"18\" y=\"26\" width=\"80\" height=\"9\"/><rect class=\"f-mute\" x=\"18\" y=\"40\" width=\"75\" height=\"9\"/><rect class=\"f-mute\" x=\"18\" y=\"54\" width=\"70\" height=\"9\"/><rect class=\"f-mute\" x=\"18\" y=\"68\" width=\"65\" height=\"9\"/><rect class=\"f-mute\" x=\"18\" y=\"82\" width=\"60\" height=\"9\"/><rect class=\"f-mute\" x=\"18\" y=\"96\" width=\"60\" height=\"9\"/></svg></div></div></div>"
      },
      what: "The case against pie charts rests on the Cleveland and McGill ranking: judging angle is less accurate than judging position on a common scale, so a bar or dot plot beats a pie for comparing categories. The case has been overstated. Spence and Lewandowsky ran four experiments in 1991 and found the bar slightly ahead on the simplest task, comparing one slice with another, but the pie ahead once the reader had to compare combinations of parts, such as A plus B against C plus D. Pies fail hardest with many similar slices and when two pies must be compared.",
      why: "Blanket bans lose arguments with clients who like pies, and they are not supported by the evidence. A conditional rule, stating what a pie is good at and where it stops working, wins the argument and produces better charts.",
      how: [
        "Use a pie only for parts of one whole, only where the parts sum to a meaningful total.",
        "Keep the number of slices small; sort by size and group the tail into one other category.",
        "Never ask a reader to compare slices across two or more pies; use bars or a small multiple grid.",
        "Label each slice with its value, since the angle gives an impression and the number gives the fact."
      ],
      example: "A single pie showing that one category takes roughly half of a budget reads instantly. A pair of pies showing budget shares in two years, so the reader can find what changed, does not.",
      numbers: "",
      pitfall: "Donut charts, exploded slices and three-dimensional pies all make angle judgement worse. The three-dimensional version also breaks proportionality outright, because perspective enlarges the near slices.",
      source: "William Cleveland and Robert McGill (1984) for the accuracy ranking; Ian Spence and Stephan Lewandowsky, Displaying proportions and percentages, Applied Cognitive Psychology 5(1), 61-77 (1991), for the defence.",
      verify: { status: "disputed", note: "Read the full text of Spence and Lewandowsky 1991 in the copy hosted for a Washington University course. Their conclusion is that there is little to choose between pie and bar, with the pie ahead when the reader compares combinations of components, and that the results do not support the common opinion that pie charts are inferior. This entry previously said the pie wins when one slice is compared with the whole and the proportion is near 25 or 50 per cent. That is Wikipedia's gloss, and the paper credits the 25 and 50 per cent anchor points to Simkin and Hastie 1987 rather than to its own results, so the figures are gone. Wikipedia's pie chart article does record the Bell Laboratories finding that comparison by angle was less accurate than by length. No published maximum slice count found, so none is quoted." },
      belongs: { verdict: "core", why: "It is the chart argument designers have most often, and knowing both sides of the evidence settles it faster." },
      related: [514, 515, 520, 500]
    },
    {
      n: 520,
      title: "Ordering by value, not alphabet",
      aka: ["Sorting categorical axes", "Reorderable matrix"],
      oneLine: "Sort categories by the number being shown, unless the categories have their own natural order.",
      demo: {
        caption: "The same seven bars and the same seven values. Sorted, the ranking and the long tail need no reading.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Alphabetical</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><path class=\"s-mute\" d=\"M24 8 V110\"/><text class=\"t\" x=\"4\" y=\"20\">A</text><rect class=\"f-mute\" x=\"24\" y=\"12\" width=\"50\" height=\"9\"/><text class=\"t\" x=\"4\" y=\"34\">B</text><rect class=\"f-mute\" x=\"24\" y=\"26\" width=\"99\" height=\"9\"/><text class=\"t\" x=\"4\" y=\"48\">C</text><rect class=\"f-mute\" x=\"24\" y=\"40\" width=\"22\" height=\"9\"/><text class=\"t\" x=\"4\" y=\"62\">D</text><rect class=\"f-mute\" x=\"24\" y=\"54\" width=\"77\" height=\"9\"/><text class=\"t\" x=\"4\" y=\"76\">E</text><rect class=\"f-mute\" x=\"24\" y=\"68\" width=\"14\" height=\"9\"/><text class=\"t\" x=\"4\" y=\"90\">F</text><rect class=\"f-mute\" x=\"24\" y=\"82\" width=\"35\" height=\"9\"/><text class=\"t\" x=\"4\" y=\"104\">G</text><rect class=\"f-mute\" x=\"24\" y=\"96\" width=\"8\" height=\"9\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Sorted by value</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><path class=\"s-mute\" d=\"M24 8 V110\"/><text class=\"t\" x=\"4\" y=\"20\">B</text><rect class=\"f-mute\" x=\"24\" y=\"12\" width=\"99\" height=\"9\"/><text class=\"t\" x=\"4\" y=\"34\">D</text><rect class=\"f-mute\" x=\"24\" y=\"26\" width=\"77\" height=\"9\"/><text class=\"t\" x=\"4\" y=\"48\">A</text><rect class=\"f-mute\" x=\"24\" y=\"40\" width=\"50\" height=\"9\"/><text class=\"t\" x=\"4\" y=\"62\">F</text><rect class=\"f-mute\" x=\"24\" y=\"54\" width=\"35\" height=\"9\"/><text class=\"t\" x=\"4\" y=\"76\">C</text><rect class=\"f-mute\" x=\"24\" y=\"68\" width=\"22\" height=\"9\"/><text class=\"t\" x=\"4\" y=\"90\">E</text><rect class=\"f-mute\" x=\"24\" y=\"82\" width=\"14\" height=\"9\"/><text class=\"t\" x=\"4\" y=\"104\">G</text><rect class=\"f-mute\" x=\"24\" y=\"96\" width=\"8\" height=\"9\"/></svg></div></div></div>"
      },
      what: "Alphabetical order is an accident of language and carries no information about the data. Sorting by value turns a bar chart into a ranking, so the largest, the smallest and the shape of the distribution can all be read without measuring anything. Bertin made the general version of this point with his reorderable matrix, showing that permuting rows and columns of a data table until patterns emerge is itself an analytical act.",
      why: "It is the cheapest improvement available to most charts and tables. A reader looking for the top three finds them in one movement rather than scanning every label.",
      how: [
        "Sort by the value being plotted, descending, unless the categories are ordinal or temporal.",
        "Keep an ordinal sequence in its own order: days of the week, age bands, satisfaction scales.",
        "Hold the sort order constant across a small multiple grid so the panels stay comparable.",
        "Where readers need to look up a specific known category, offer alphabetical as a switch, not as the default."
      ],
      example: "A horizontal bar chart of survey responses sorted from most to least chosen, rather than by option label. Sorting also lets the longest label sit at the top where there is room for it.",
      numbers: "",
      pitfall: "Re-sorting a repeated chart on every refresh makes rows jump around, so a reader who has learned the layout loses it. Fix the order across a dashboard even when one panel would prefer a different sort.",
      source: "Standard table and graph guidance, set out in Stephen Few, Show Me the Numbers (2004); the analytical version is Jacques Bertin's reorderable matrix in Semiology of Graphics (1983).",
      verify: { status: "verified", note: "Few's table and graph design rules were checked against the published text of Show Me the Numbers, which gives explicit alignment and ordering guidance. Bertin's reorderable matrix is documented in the same Semiology of Graphics translation confirmed for entries 512 and 513. I found no controlled study measuring the speed gain from value ordering, so no figure is quoted." },
      belongs: { verdict: "core", why: "A one-line change that improves nearly every categorical chart, and it is skipped constantly." },
      related: [526, 502, 514, 521]
    },
    {
      n: 521,
      title: "Binning and aggregation choices",
      aka: ["Bin width", "Class intervals", "Modifiable areal unit problem"],
      oneLine: "How you group values into bins or areas changes the pattern, so the choice is part of the finding.",
      demo: {
        caption: "One set of 56 values, binned two ways. Four bins give one central mass; sixteen give two peaks and a gap.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Four bins</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><path class=\"s-mute\" d=\"M8 100 H162\"/><rect class=\"f-mute\" x=\"14\" y=\"66\" width=\"35\" height=\"34\"/><rect class=\"f-mute\" x=\"50\" y=\"16\" width=\"35\" height=\"84\"/><rect class=\"f-mute\" x=\"86\" y=\"16\" width=\"35\" height=\"84\"/><rect class=\"f-mute\" x=\"122\" y=\"66\" width=\"35\" height=\"34\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Sixteen bins</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><path class=\"s-mute\" d=\"M8 100 H162\"/><rect class=\"f-mute\" x=\"14\" y=\"92\" width=\"8\" height=\"8\"/><rect class=\"f-mute\" x=\"23\" y=\"83\" width=\"8\" height=\"17\"/><rect class=\"f-mute\" x=\"32\" y=\"75\" width=\"8\" height=\"25\"/><rect class=\"f-mute\" x=\"41\" y=\"83\" width=\"8\" height=\"17\"/><rect class=\"f-mute\" x=\"50\" y=\"66\" width=\"8\" height=\"34\"/><rect class=\"f-mute\" x=\"59\" y=\"24\" width=\"8\" height=\"76\"/><rect class=\"f-mute\" x=\"68\" y=\"58\" width=\"8\" height=\"42\"/><rect class=\"f-mute\" x=\"77\" y=\"83\" width=\"8\" height=\"17\"/><rect class=\"f-mute\" x=\"86\" y=\"83\" width=\"8\" height=\"17\"/><rect class=\"f-mute\" x=\"95\" y=\"58\" width=\"8\" height=\"42\"/><rect class=\"f-mute\" x=\"104\" y=\"24\" width=\"8\" height=\"76\"/><rect class=\"f-mute\" x=\"113\" y=\"66\" width=\"8\" height=\"34\"/><rect class=\"f-mute\" x=\"122\" y=\"83\" width=\"8\" height=\"17\"/><rect class=\"f-mute\" x=\"131\" y=\"75\" width=\"8\" height=\"25\"/><rect class=\"f-mute\" x=\"140\" y=\"83\" width=\"8\" height=\"17\"/><rect class=\"f-mute\" x=\"149\" y=\"92\" width=\"8\" height=\"8\"/></svg></div></div></div>"
      },
      what: "A histogram with five bins and the same data in fifty bins can tell different stories, one smoothed flat and one full of spikes. Published bin-width rules remove some of the guesswork: Sturges (1926) sets the bin count from the sample size, Scott (1979) sets the width from the standard deviation, and Freedman and Diaconis (1981) use the interquartile range, which is less easily thrown by outliers. The geographic version has its own name, the modifiable areal unit problem.",
      why: "Binning is usually left to a default in a charting library, so the finding is being set by software rather than by anyone's judgement. Knowing the rules gives you a defensible starting point.",
      how: [
        "Try several bin widths before choosing one, and say in a note which you used.",
        "Use the Freedman-Diaconis width as a default for skewed or outlier-heavy data.",
        "Keep bin boundaries at round, meaningful numbers where readers will think in them, such as decades of age.",
        "For maps, check whether the pattern survives a different set of boundaries before reporting it."
      ],
      example: "Openshaw's point is that census districts are arbitrary. Regroup the same households into different boundaries at the same scale and the correlation between two variables can change substantially, without any change in the underlying data.",
      numbers: "Sturges: bin count k = ceiling of log2(n) plus 1. Scott: bin width h = 3.49 times the standard deviation divided by the cube root of n. Freedman-Diaconis: h = 2 times the interquartile range divided by the cube root of n.",
      pitfall: "Presenting one binning as the result. If the story only appears at one bin width or one set of boundaries, the story is about the binning.",
      source: "Herbert Sturges, JASA 21(153), 65-66 (1926); David Scott, Biometrika 66(3), 605-610 (1979); David Freedman and Persi Diaconis, Zeitschrift fur Wahrscheinlichkeitstheorie und Verwandte Gebiete 57(4), 453-476 (1981); Stan Openshaw, The Modifiable Areal Unit Problem (1984).",
      verify: { status: "verified", note: "All three bin-width formulas and their citations were read from Wikipedia's histogram article, which reproduces the original references. The scale effect, the zoning effect, the Openshaw 1984 attribution and the earlier Gehlke and Biehl observation from 1934 were checked against Wikipedia's modifiable areal unit problem article." },
      belongs: { verdict: "adjacent", why: "The bin-width rules are statistics. They belong here because the choice is made inside the chart, by the person drawing it, and it changes what the reader sees." },
      related: [522, 523, 9521, 497]
    },
    {
      n: 9521,
      title: "Normalise by exposure, not raw counts",
      aka: ["Rate versus count", "Choropleth normalisation"],
      oneLine: "Shade a map or size a mark by a rate per head or per area, not by a raw total.",
      demo: {
        caption: "The same four districts, the same figures. Divide by population and the strongest shading moves to the smallest district.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Shaded by raw total</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 110\"><rect class=\"f-accent\" x=\"10\" y=\"10\" width=\"96\" height=\"46\" opacity=\"0.95\"/><rect class=\"f-accent\" x=\"110\" y=\"10\" width=\"50\" height=\"46\" opacity=\"0.74\"/><rect class=\"f-accent\" x=\"10\" y=\"60\" width=\"28\" height=\"40\" opacity=\"0.13\"/><rect class=\"f-accent\" x=\"42\" y=\"60\" width=\"118\" height=\"40\" opacity=\"0.07\"/><rect class=\"s-mute\" x=\"10\" y=\"10\" width=\"96\" height=\"46\"/><rect class=\"s-mute\" x=\"110\" y=\"10\" width=\"50\" height=\"46\"/><rect class=\"s-mute\" x=\"10\" y=\"60\" width=\"28\" height=\"40\"/><rect class=\"s-mute\" x=\"42\" y=\"60\" width=\"118\" height=\"40\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Shaded by rate per head</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 110\"><rect class=\"f-accent\" x=\"10\" y=\"10\" width=\"96\" height=\"46\" opacity=\"0.50\"/><rect class=\"f-accent\" x=\"110\" y=\"10\" width=\"50\" height=\"46\" opacity=\"0.33\"/><rect class=\"f-accent\" x=\"10\" y=\"60\" width=\"28\" height=\"40\" opacity=\"1\"/><rect class=\"f-accent\" x=\"42\" y=\"60\" width=\"118\" height=\"40\" opacity=\"0.17\"/><rect class=\"s-mute\" x=\"10\" y=\"10\" width=\"96\" height=\"46\"/><rect class=\"s-mute\" x=\"110\" y=\"10\" width=\"50\" height=\"46\"/><rect class=\"s-mute\" x=\"10\" y=\"60\" width=\"28\" height=\"40\"/><rect class=\"s-mute\" x=\"42\" y=\"60\" width=\"118\" height=\"40\"/></svg></div></div></div>"
      },
      what: "Colouring regions by a raw count mostly draws a picture of where the people are. Big regions and populous regions come out dark whatever the underlying phenomenon is doing. Cartographers make the distinction between spatially extensive variables, which are totals tied to the size of the unit, and spatially intensive ones such as densities, percentages and rates per head, which can be compared between units of any size. Choropleth maps are for the second kind.",
      why: "This is the most common single error in published maps and it is easy to make with a spreadsheet and a mapping tool. Fixing it usually changes the map completely, which is the point.",
      how: [
        "Divide by the relevant denominator before mapping: population, households, area, or number at risk.",
        "Say which denominator you used in the legend, since rate per 1,000 residents and rate per 1,000 workers are different maps.",
        "Use proportional symbols rather than shaded areas when a raw total genuinely is the subject.",
        "Check small units for unstable rates, where a handful of cases produces an extreme percentage."
      ],
      example: "A map of total crimes by police force area is close to a population map. The same data as crimes per thousand residents shows something else entirely.",
      numbers: "",
      pitfall: "Normalising by the wrong denominator is as misleading as not normalising. Deaths per resident and deaths per case answer different questions and will disagree.",
      source: "Standard cartographic practice; Mark Monmonier, How to Lie with Maps (University of Chicago Press, 1991), pages 22 to 23.",
      verify: { status: "verified", note: "Checked against Wikipedia's choropleth map article, which states that mapping spatially extensive variables is almost universally discouraged, sets out the intensive and extensive distinction with densities, proportions and rates as the acceptable cases, and cites Monmonier 1991 pages 22 to 23 on normalisation error. Added because the master list covers binning and log scales but has no entry on the denominator." },
      belongs: { verdict: "core", why: "A genuine gap: it is the single most frequent error in thematic maps and applies to bubble charts and heat maps too." },
      related: [521, 497, 522, 523]
    },
    {
      n: 522,
      title: "Log scales",
      aka: ["Logarithmic axes", "Log-log plots"],
      oneLine: "A scale where equal distances mean equal ratios, powerful for wide ranges and widely misread.",
      demo: {
        caption: "Values 1, 10, 100 and 1,000 plotted twice. On the log axis every tenfold step takes the same distance.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Linear axis</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 116\"><path class=\"s-mute\" d=\"M38 8 V104 M34 14 H38 M34 57 H38 M34 100 H38\"/><text class=\"t\" x=\"32\" y=\"17\" text-anchor=\"end\">1000</text><text class=\"t\" x=\"32\" y=\"60\" text-anchor=\"end\">500</text><text class=\"t\" x=\"32\" y=\"103\" text-anchor=\"end\">0</text><path class=\"s\" d=\"M58 100 L90 99 L122 91 L154 14\"/><circle class=\"f\" cx=\"58\" cy=\"100\" r=\"3\"/><circle class=\"f\" cx=\"90\" cy=\"99\" r=\"3\"/><circle class=\"f\" cx=\"122\" cy=\"91\" r=\"3\"/><circle class=\"f\" cx=\"154\" cy=\"14\" r=\"3\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Log axis</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 116\"><path class=\"s-mute\" d=\"M38 8 V104 M34 13 H38 M34 42 H38 M34 71 H38 M34 100 H38\"/><text class=\"t\" x=\"32\" y=\"16\" text-anchor=\"end\">1000</text><text class=\"t\" x=\"32\" y=\"45\" text-anchor=\"end\">100</text><text class=\"t\" x=\"32\" y=\"74\" text-anchor=\"end\">10</text><text class=\"t\" x=\"32\" y=\"103\" text-anchor=\"end\">1</text><path class=\"s\" d=\"M58 100 L90 71 L122 42 L154 13\"/><circle class=\"f\" cx=\"58\" cy=\"100\" r=\"3\"/><circle class=\"f\" cx=\"90\" cy=\"71\" r=\"3\"/><circle class=\"f\" cx=\"122\" cy=\"42\" r=\"3\"/><circle class=\"f\" cx=\"154\" cy=\"13\" r=\"3\"/></svg></div></div></div>"
      },
      what: "On a logarithmic axis, the gap from 1 to 10 is the same length as the gap from 10 to 100. That makes it possible to show quantities spanning several orders of magnitude on one chart, and it turns exponential growth into a straight line, which is why epidemiologists and physicists reach for it. It also removes the visual cue people rely on, since a small step on the page can be a tenfold change in the data.",
      why: "Log scales are not a neutral presentation choice. Menge and colleagues surveyed members of the Ecological Society of America in 2018 and found interpretation accuracy dropped sharply on log-log axes, among readers who were themselves practising scientists.",
      how: [
        "Label the tick marks with the actual values, such as 1, 10, 100, rather than exponents.",
        "Say in the axis title that the scale is logarithmic, in plain words.",
        "Show the same data on a linear scale alongside when the audience is general.",
        "Do not use a log scale to make a steep curve look manageable; that is a presentation decision dressed up as a technical one."
      ],
      example: "Case-count charts through the COVID-19 pandemic appeared in both linear and log versions, and news outlets that offered a toggle between the two were responding to exactly this readability problem.",
      numbers: "Menge and colleagues found 93 per cent of respondents interpreted graphs correctly with linear axes against 56 per cent with log-log axes on their overall metric, with individual items as far apart as 86 per cent against 9 per cent. They also found 22 per cent of 2015 papers in the journal Ecology used at least one log-scaled axis.",
      pitfall: "A log scale plus a truncated start value can hide a difference of an order of magnitude behind a small vertical gap, which is the most deniable kind of misleading chart.",
      source: "Duncan Menge, Anna MacPherson and colleagues, Logarithmic scales in ecological data presentation may cause misinterpretation, Nature Ecology and Evolution 2, 1393-1402 (2018).",
      verify: { status: "verified", note: "All figures were read directly from the published abstract on nature.com: 988 responses with 623 completed surveys, 93 per cent against 56 per cent on the all-around metric, item-level gaps of 86 against 9 and 88 against 12, and the 22 per cent of 2015 Ecology papers of which 21 per cent were log-log." },
      belongs: { verdict: "core", why: "A presentation choice with measured consequences for how many readers get the right answer." },
      related: [516, 521, 513, 535]
    },
    {
      n: 523,
      title: "Simpson's paradox",
      aka: ["Yule-Simpson effect", "Amalgamation paradox"],
      oneLine: "A trend that holds in every subgroup can reverse when the groups are pooled into one total.",
      demo: {
        caption: "The same ten points twice. Inside each group the trend climbs; the single line through all ten falls.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Split by group</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 120\"><path class=\"s-mute\" d=\"M14 112 H176 M14 112 V14\"/><path class=\"s-accent\" d=\"M24 76 L100 48\"/><path class=\"s-accent\" d=\"M94 104 L170 76\"/><circle class=\"f\" cx=\"30\" cy=\"74\" r=\"3.5\"/><circle class=\"f\" cx=\"46\" cy=\"68\" r=\"3.5\"/><circle class=\"f\" cx=\"62\" cy=\"62\" r=\"3.5\"/><circle class=\"f\" cx=\"78\" cy=\"56\" r=\"3.5\"/><circle class=\"f\" cx=\"94\" cy=\"50\" r=\"3.5\"/><circle class=\"s\" cx=\"100\" cy=\"102\" r=\"3.5\"/><circle class=\"s\" cx=\"116\" cy=\"96\" r=\"3.5\"/><circle class=\"s\" cx=\"132\" cy=\"90\" r=\"3.5\"/><circle class=\"s\" cx=\"148\" cy=\"84\" r=\"3.5\"/><circle class=\"s\" cx=\"164\" cy=\"78\" r=\"3.5\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Groups pooled</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 120\"><path class=\"s-mute\" d=\"M14 112 H176 M14 112 V14\"/><path class=\"s-accent\" d=\"M24 47 L170 105\"/><circle class=\"f\" cx=\"30\" cy=\"74\" r=\"3.5\"/><circle class=\"f\" cx=\"46\" cy=\"68\" r=\"3.5\"/><circle class=\"f\" cx=\"62\" cy=\"62\" r=\"3.5\"/><circle class=\"f\" cx=\"78\" cy=\"56\" r=\"3.5\"/><circle class=\"f\" cx=\"94\" cy=\"50\" r=\"3.5\"/><circle class=\"s\" cx=\"100\" cy=\"102\" r=\"3.5\"/><circle class=\"s\" cx=\"116\" cy=\"96\" r=\"3.5\"/><circle class=\"s\" cx=\"132\" cy=\"90\" r=\"3.5\"/><circle class=\"s\" cx=\"148\" cy=\"84\" r=\"3.5\"/><circle class=\"s\" cx=\"164\" cy=\"78\" r=\"3.5\"/></svg></div></div></div>"
      },
      what: "Split a data set by some grouping variable and each group may show the same relationship. Add them together and the relationship can point the other way, because the groups differ in size and in baseline rate. Edward Simpson described the effect formally in 1951, though Karl Pearson in 1899 and Udny Yule in 1903 had noted similar behaviour, and Colin Blyth gave it the name in 1972. It is a fact about arithmetic, not a statistical error.",
      why: "For a designer it is the reason aggregation is never neutral. A chart that pools categories can show the opposite of the truth, and the reader has no way to detect it from the chart alone. It is the argument for showing groups as well as totals.",
      how: [
        "Show the subgroup breakdown next to the total whenever groups differ in size.",
        "Offer a way to split by the obvious confounding variable, even in a static graphic.",
        "Say in the caption which variable the figures are pooled over.",
        "Check whether the direction reverses under any sensible split before publishing a claim from a total."
      ],
      example: "The 1973 University of California, Berkeley graduate admissions figures. Overall, 44 per cent of male applicants were admitted against 35 per cent of women, yet department by department the bias, where present, ran slightly the other way. Bickel, Hammel and O'Connell published the analysis in Science in 1975.",
      numbers: "Berkeley 1973: 44 per cent of men admitted against 35 per cent of women overall, from 12,763 applicants, with the department-level pattern reversing the direction.",
      pitfall: "Showing the split does not settle which number is right. Deciding whether the total or the breakdown answers the question needs an argument about what causes what, not more charts.",
      source: "Edward Simpson, The Interpretation of Interaction in Contingency Tables, Journal of the Royal Statistical Society Series B (1951); named by Colin Blyth (1972).",
      verify: { status: "verified", note: "Origins, the Pearson 1899 and Yule 1903 antecedents, Blyth's 1972 naming and the Berkeley figures including the 12,763 applicant count and the Bickel, Hammel and O'Connell citation in Science 187(4175), 398-404 (1975) were all checked against Wikipedia's Simpson's paradox article." },
      belongs: { verdict: "adjacent", why: "It is statistics, not design. It belongs here because it is the strongest argument for showing disaggregated data and for building a split control into any summary display." },
      related: [521, 9521, 524, 532]
    },
    {
      n: 524,
      title: "Uncertainty and error representation",
      aka: ["Error bars", "Showing confidence"],
      oneLine: "Show the range a number could reasonably take, and pick an encoding people do not misread.",
      demo: {
        caption: "Same two estimates. The whiskers draw a container; the gradient fades, so nothing sits sharply inside or outside.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Bar with error bars</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><path class=\"s-mute\" d=\"M18 16 V100 M18 100 H156\"/><rect class=\"f\" x=\"40\" y=\"44\" width=\"34\" height=\"56\"/><path class=\"s\" d=\"M57 30 V58 M52 30 H62 M52 58 H62\"/><rect class=\"f\" x=\"104\" y=\"58\" width=\"34\" height=\"42\"/><path class=\"s\" d=\"M121 44 V72 M116 44 H126 M116 72 H126\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Gradient plot</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><path class=\"s-mute\" d=\"M18 16 V100 M18 100 H156\"/><rect class=\"f\" x=\"40\" y=\"26\" width=\"34\" height=\"4\" opacity=\"0.14\"/><rect class=\"f\" x=\"40\" y=\"30\" width=\"34\" height=\"4\" opacity=\"0.30\"/><rect class=\"f\" x=\"40\" y=\"34\" width=\"34\" height=\"4\" opacity=\"0.55\"/><rect class=\"f\" x=\"40\" y=\"38\" width=\"34\" height=\"12\" opacity=\"0.95\"/><rect class=\"f\" x=\"40\" y=\"50\" width=\"34\" height=\"4\" opacity=\"0.55\"/><rect class=\"f\" x=\"40\" y=\"54\" width=\"34\" height=\"4\" opacity=\"0.30\"/><rect class=\"f\" x=\"40\" y=\"58\" width=\"34\" height=\"4\" opacity=\"0.14\"/><rect class=\"f\" x=\"104\" y=\"40\" width=\"34\" height=\"4\" opacity=\"0.14\"/><rect class=\"f\" x=\"104\" y=\"44\" width=\"34\" height=\"4\" opacity=\"0.30\"/><rect class=\"f\" x=\"104\" y=\"48\" width=\"34\" height=\"4\" opacity=\"0.55\"/><rect class=\"f\" x=\"104\" y=\"52\" width=\"34\" height=\"12\" opacity=\"0.95\"/><rect class=\"f\" x=\"104\" y=\"64\" width=\"34\" height=\"4\" opacity=\"0.55\"/><rect class=\"f\" x=\"104\" y=\"68\" width=\"34\" height=\"4\" opacity=\"0.30\"/><rect class=\"f\" x=\"104\" y=\"72\" width=\"34\" height=\"4\" opacity=\"0.14\"/></svg></div></div></div>"
      },
      what: "Point estimates drawn as bars or dots imply a precision the data rarely has. The conventional fix is the error bar, and it carries a bias of its own. Newman and Scholl named it in 2012: the bar acts as a false metaphor of containment, so readers treat values inside it as more likely than values outside, even on tasks where that is wrong. Correll and Gleicher reproduced the effect for error bars in 2014 and proposed two alternatives that performed better, gradient plots that hold full opacity inside the confidence interval and decay outside it, and violin plots that use width for probability density.",
      why: "Uncertainty is usually dropped from a chart because it is awkward to draw, and its absence is read as confidence. Showing it changes the decisions people make, so the encoding matters as much as the presence of it.",
      how: [
        "Say what the interval represents: standard error, standard deviation or a stated confidence level.",
        "Prefer a gradient or violin encoding over a bar with whiskers when the audience is not statistical.",
        "Do not put error bars on a bar chart, since the bar itself creates the bias.",
        "Where a forecast is shown, widen the band into the future rather than drawing a single line."
      ],
      example: "Election forecast graphics that draw a fan of possible outcomes rather than a single projected seat count are applying this directly. The Correll and Gleicher gradient plot is the same idea in static form.",
      numbers: "",
      pitfall: "Adding error bars without saying what they measure is worse than leaving them off, because a standard error bar and a 95 per cent interval look identical and mean very different things.",
      source: "George Newman and Brian Scholl, Bar graphs depicting averages are perceptually misinterpreted: the within-the-bar bias, Psychonomic Bulletin and Review (2012); Michael Correll and Michael Gleicher, Error Bars Considered Harmful, IEEE TVCG 20(12), 2142-2151 (2014).",
      verify: { status: "verified", note: "Read from the open copy of Correll and Gleicher on PubMed Central (PMC6214189). Attribution corrected: the entry previously credited the within-the-bar bias to them, but their own summary defines it as the bar giving a false metaphor of containment and cites Newman and Scholl 2012 for the term. They show it survives even when the values are given in text." },
      belongs: { verdict: "core", why: "Whether and how to draw uncertainty is a design decision with measured effects on how readers judge a difference." },
      related: [523, 534, 514, 532]
    },
    {
      n: 525,
      title: "Annotation layer",
      aka: ["Chart annotation", "Explanatory text on graphics"],
      oneLine: "The notes, callouts and labels laid over a chart that say what the reader is looking at.",
      demo: {
        caption: "Same twelve readings. Only the right one says which point matters and when it happened.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">No annotation</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 116\"><path class=\"s-mute\" d=\"M12 100 H170\"/><path class=\"s\" d=\"M12 84 L26 80 L40 82 L54 78 L68 76 L82 79 L96 74 L110 72 L124 34 L138 58 L152 66 L166 70\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Annotated</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 180 116\"><path class=\"s-mute\" d=\"M12 100 H170\"/><path class=\"s\" d=\"M12 84 L26 80 L40 82 L54 78 L68 76 L82 79 L96 74 L110 72 L124 34 L138 58 L152 66 L166 70\"/><path class=\"s-accent\" d=\"M120 30 L106 18\"/><circle class=\"f-accent\" cx=\"124\" cy=\"34\" r=\"3.5\"/><text class=\"t\" x=\"102\" y=\"21\" text-anchor=\"end\">peak, 8 Mar</text></svg></div></div></div>"
      },
      what: "A chart shows a shape. The annotation layer says which part of the shape matters and why: an arrow to the spike with the date and the cause, a shaded band marking a recession, a line marking a target. Tufte's fourth principle of analytical design makes the general case, that words, numbers, images and diagrams should be completely integrated rather than separated into a picture and a caption.",
      why: "Without annotation the reader has to supply the interpretation, and most will not. Amanda Cox, then at the New York Times graphics desk, put it as the annotation layer being the most important thing they do, because the alternative is handing the reader the data and telling them to work it out.",
      how: [
        "Annotate the two or three features you would point at if you were standing next to the reader.",
        "Put the note next to the feature rather than in a caption below the chart.",
        "Set annotations in a lighter weight than the data so they explain without competing.",
        "Include the source and the date in the graphic, since charts travel away from the article that carried them."
      ],
      example: "New York Times and Financial Times charts routinely carry inline notes marking events on the timeline, so a reader who arrives at the image alone still gets the story.",
      numbers: "",
      pitfall: "Annotation is where a chart stops being neutral. A note pointing at one peak and not another is an editorial choice, and it should be one you can defend.",
      source: "Edward Tufte, Beautiful Evidence (2006), principle four of analytical design; the quoted remark is Amanda Cox of the New York Times.",
      verify: { status: "verified", note: "The Tufte principle was read in the Beautiful Evidence chapter hosted by Stanford Data Science. The Cox remark, that the annotation layer is the most important thing we do, otherwise it is a case of here it is, you go figure it out, appears with consistent wording in Jonathan Schwabish's writing on text in data visualisation and in a 2026 arXiv paper on annotation design. I could not trace the original talk or interview it came from, so it is quoted as attributed rather than sourced to a primary record." },
      belongs: { verdict: "core", why: "Text is part of the graphic, and the annotation layer is where most of the meaning actually reaches the reader." },
      related: [534, 507, 533, 510]
    },
    {
      n: 526,
      title: "Table design and decimal alignment",
      aka: ["Numeric alignment", "Tabular figures"],
      oneLine: "Right-align numbers on their decimal point, keep decimal places consistent, and let the digits do the comparing.",
      demo: {
        caption: "Same five figures. Aligned right with matching decimal places, the place-value columns line up and the largest is obvious.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Centred, ragged decimals</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type db-type--mono\" style=\"text-align:center\"><p>1,204.5</p><p>89.25</p><p>1,003</p><p>7.4</p><p>12,660.75</p></div></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Right-aligned, two decimals</span><div class=\"db-stage db-stage--tight\"><div class=\"db-type db-type--mono\" style=\"text-align:right\"><p>1,204.50</p><p>89.25</p><p>1,003.00</p><p>7.40</p><p>12,660.75</p></div></div></div></div>"
      },
      what: "A column of numbers is a chart made of type. Align them on the decimal point and the digits line up in place-value columns, so the eye reads magnitude from the ragged left edge without processing a single figure. This needs three things: right alignment, a consistent number of decimal places down the column, and figures of equal width. Most text typefaces have proportional figures where a 1 is narrower than a 0, which breaks the columns; tabular or lining figures fix it, and are available in most professional families as an OpenType setting.",
      why: "It turns a lookup table into a scannable comparison at no cost in space. It also makes errors visible, because a misplaced decimal point sticks out of the column.",
      how: [
        "Right-align numbers, left-align text, and align headers with their column contents.",
        "Use the same number of decimal places for every value in a column, padding with zeros.",
        "Switch on tabular figures in the typeface, or pick a family that has them.",
        "Round to the precision the reader can act on, then say what the units are in the header once."
      ],
      example: "A financial statement or a set of published accounts, where every column of currency values is aligned on the decimal and totals sit under the figures they sum.",
      numbers: "Stephen Few's rule in Show Me the Numbers: align numbers to the right, keeping the decimal points aligned.",
      pitfall: "Centring numbers. It looks tidy in a design tool and destroys the comparison, and it is the default in several popular table components.",
      source: "Stephen Few, Show Me the Numbers: Designing Tables and Graphs to Enlighten (2004, second edition 2012); the typographic side is standard practice set out in Robert Bringhurst, The Elements of Typographic Style.",
      verify: { status: "verified", note: "Few's rule appears verbatim in the text of Show Me the Numbers as align numbers to the right, keeping the decimal points aligned, and is quoted identically in two independent documents that cite the book. The tabular figures point is standard OpenType practice rather than a finding, and is presented as such." },
      belongs: { verdict: "core", why: "Tables carry more numbers in working documents than charts do, and this is the rule that makes them readable." },
      related: [527, 520, 506, 511]
    },
    {
      n: 527,
      title: "Zebra-striping restraint",
      aka: ["Alternating row shading", "Banded rows"],
      oneLine: "Shading alternate table rows helps a little, sometimes, and mostly should be very faint or replaced.",
      demo: {
        caption: "Same table, same highlighted row. Under heavy banding the highlight is just another stripe.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Heavy stripes</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 114\"><rect class=\"f\" x=\"6\" y=\"26\" width=\"158\" height=\"16\" opacity=\"0.20\"/><rect class=\"f\" x=\"6\" y=\"58\" width=\"158\" height=\"16\" opacity=\"0.20\"/><rect class=\"f\" x=\"6\" y=\"90\" width=\"158\" height=\"16\" opacity=\"0.20\"/><rect class=\"f-accent\" x=\"6\" y=\"42\" width=\"158\" height=\"16\" opacity=\"0.30\"/><text class=\"t\" x=\"12\" y=\"21\">Alpha</text><text class=\"t\" x=\"158\" y=\"21\" text-anchor=\"end\">1,204</text><text class=\"t\" x=\"12\" y=\"37\">Bravo</text><text class=\"t\" x=\"158\" y=\"37\" text-anchor=\"end\">89</text><text class=\"t\" x=\"12\" y=\"53\">Charlie</text><text class=\"t\" x=\"158\" y=\"53\" text-anchor=\"end\">1,003</text><text class=\"t\" x=\"12\" y=\"69\">Delta</text><text class=\"t\" x=\"158\" y=\"69\" text-anchor=\"end\">7</text><text class=\"t\" x=\"12\" y=\"85\">Echo</text><text class=\"t\" x=\"158\" y=\"85\" text-anchor=\"end\">12,660</text><text class=\"t\" x=\"12\" y=\"101\">Foxtrot</text><text class=\"t\" x=\"158\" y=\"101\" text-anchor=\"end\">415</text></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Faint stripes</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 114\"><rect class=\"f\" x=\"6\" y=\"26\" width=\"158\" height=\"16\" opacity=\"0.06\"/><rect class=\"f\" x=\"6\" y=\"58\" width=\"158\" height=\"16\" opacity=\"0.06\"/><rect class=\"f\" x=\"6\" y=\"90\" width=\"158\" height=\"16\" opacity=\"0.06\"/><rect class=\"f-accent\" x=\"6\" y=\"42\" width=\"158\" height=\"16\" opacity=\"0.30\"/><text class=\"t\" x=\"12\" y=\"21\">Alpha</text><text class=\"t\" x=\"158\" y=\"21\" text-anchor=\"end\">1,204</text><text class=\"t\" x=\"12\" y=\"37\">Bravo</text><text class=\"t\" x=\"158\" y=\"37\" text-anchor=\"end\">89</text><text class=\"t\" x=\"12\" y=\"53\">Charlie</text><text class=\"t\" x=\"158\" y=\"53\" text-anchor=\"end\">1,003</text><text class=\"t\" x=\"12\" y=\"69\">Delta</text><text class=\"t\" x=\"158\" y=\"69\" text-anchor=\"end\">7</text><text class=\"t\" x=\"12\" y=\"85\">Echo</text><text class=\"t\" x=\"158\" y=\"85\" text-anchor=\"end\">12,660</text><text class=\"t\" x=\"12\" y=\"101\">Foxtrot</text><text class=\"t\" x=\"158\" y=\"101\" text-anchor=\"end\">415</text></svg></div></div></div>"
      },
      what: "Striping is meant to stop the eye slipping between rows in a wide table. Jessica Enders tested it in two studies published on A List Apart in 2008. The first found no statistically significant improvement in accuracy and very little in speed. The second, run under a fifteen-second time limit with 2,276 clean sessions, found striping improved accuracy on three of eight questions at conventional significance levels and made no measurable difference on the rest. Striping never made performance worse.",
      why: "The honest summary is a small benefit in some conditions and no harm. That justifies using it, and it does not justify heavy bands that fight with the numbers. Where rows are short and the table is narrow, generous row spacing does the same job with no ink at all.",
      how: [
        "Keep the stripe very light, a few per cent of tone, so it separates without becoming a pattern.",
        "Consider row spacing or a hairline rule first, especially in short tables.",
        "Group in bands of three or five rows rather than alternating, when rows come in natural groups.",
        "Add a row highlight on hover for interactive tables, which helps more than static striping."
      ],
      example: "Wide reference tables in printed timetables and price lists, where a reader tracks a value across many columns, are the case where striping earns its keep.",
      numbers: "Enders 2008, second study: 2,276 clean sessions, fifteen seconds per question, improvement on three of eight questions significant at p = 0.05 and p = 0.01, with a fourth at p = 0.0545.",
      pitfall: "Heavy stripes create horizontal banding that competes with the data and makes any real highlight impossible to see. They also print badly and can drop below contrast thresholds on screen.",
      source: "Jessica Enders, Zebra Striping: Does it Really Help? and Zebra Striping: More Data for the Case, A List Apart (2008).",
      verify: { status: "disputed", note: "Figures read from the second A List Apart article, which reports the sample size, the fifteen-second condition, the three-of-eight result with its significance levels and the p = 0.0545 near miss, and states that striping was never worse than plain or lined versions. The first study found no significant accuracy gain, so the evidence supports a mild benefit at best." },
      belongs: { verdict: "core", why: "A common table decision where the popular justification overstates the evidence, and the corrected version changes how heavy you make the stripe." },
      related: [526, 511, 535, 503]
    },
    {
      n: 528,
      title: "Overview first, zoom and filter, details on demand",
      aka: ["The Visual Information-Seeking Mantra", "Shneiderman's mantra"],
      oneLine: "Show the whole collection first, let people narrow it, and hold the detail back until it is asked for.",
      demo: {
        caption: "Three matches either way. Only the right one shows how many were considered, so three means something.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Straight to the result</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><circle class=\"f-accent\" cx=\"44\" cy=\"31\" r=\"5\"/><circle class=\"f-accent\" cx=\"108\" cy=\"65\" r=\"5\"/><circle class=\"f-accent\" cx=\"28\" cy=\"82\" r=\"5\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Overview, then narrow</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><circle class=\"f-mute\" cx=\"12\" cy=\"14\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"28\" cy=\"14\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"44\" cy=\"14\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"60\" cy=\"14\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"76\" cy=\"14\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"92\" cy=\"14\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"108\" cy=\"14\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"124\" cy=\"14\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"140\" cy=\"14\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"156\" cy=\"14\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"12\" cy=\"31\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"28\" cy=\"31\" r=\"3.5\"/><circle class=\"f-accent\" cx=\"44\" cy=\"31\" r=\"5\"/><circle class=\"f-mute\" cx=\"60\" cy=\"31\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"76\" cy=\"31\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"92\" cy=\"31\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"108\" cy=\"31\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"124\" cy=\"31\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"140\" cy=\"31\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"156\" cy=\"31\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"12\" cy=\"48\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"28\" cy=\"48\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"44\" cy=\"48\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"60\" cy=\"48\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"76\" cy=\"48\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"92\" cy=\"48\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"108\" cy=\"48\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"124\" cy=\"48\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"140\" cy=\"48\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"156\" cy=\"48\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"12\" cy=\"65\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"28\" cy=\"65\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"44\" cy=\"65\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"60\" cy=\"65\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"76\" cy=\"65\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"92\" cy=\"65\" r=\"3.5\"/><circle class=\"f-accent\" cx=\"108\" cy=\"65\" r=\"5\"/><circle class=\"f-mute\" cx=\"124\" cy=\"65\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"140\" cy=\"65\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"156\" cy=\"65\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"12\" cy=\"82\" r=\"3.5\"/><circle class=\"f-accent\" cx=\"28\" cy=\"82\" r=\"5\"/><circle class=\"f-mute\" cx=\"44\" cy=\"82\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"60\" cy=\"82\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"76\" cy=\"82\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"92\" cy=\"82\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"108\" cy=\"82\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"124\" cy=\"82\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"140\" cy=\"82\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"156\" cy=\"82\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"12\" cy=\"99\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"28\" cy=\"99\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"44\" cy=\"99\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"60\" cy=\"99\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"76\" cy=\"99\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"92\" cy=\"99\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"108\" cy=\"99\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"124\" cy=\"99\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"140\" cy=\"99\" r=\"3.5\"/><circle class=\"f-mute\" cx=\"156\" cy=\"99\" r=\"3.5\"/></svg></div></div></div>"
      },
      what: "Ben Shneiderman set this out in 1996 as the starting point for designing information displays. Give the reader an overview of the entire set, provide controls to zoom into what interests them and filter out what does not, then supply the details for a selected item on request. He presented it inside a wider taxonomy of seven data types and seven tasks, the other three tasks being relate, history and extract.",
      why: "It solves the orientation problem. Someone dropped into a filtered subset has no idea what they are missing, whereas someone shown the whole and then narrowing it keeps a sense of scale throughout. It also sets a clear order for building a screen.",
      how: [
        "Build the overview first, even for large sets, rather than opening on a search box.",
        "Keep the overview visible while the reader zooms, so context is never lost.",
        "Reserve exact values, records and metadata for a click or a hover rather than showing everything at once.",
        "Add the forgotten tasks: keep a history so people can undo, and let them export what they have found."
      ],
      example: "A property search that opens on a map of the whole city with every listing shown, sliders for price and bedrooms, and full listing detail only when a pin is selected. Shneiderman's own HomeFinder prototype worked exactly this way.",
      numbers: "Shneiderman's paper sets a target of under 100 milliseconds for the display to update as a filter slider is dragged.",
      pitfall: "The mantra is treated as an order of operations for every screen. For a known-item lookup, the overview is a delay, and Shneiderman says as much when he notes that someone who knows the name may do better with an alphabetical list.",
      source: "Ben Shneiderman, The Eyes Have It: A Task by Data Type Taxonomy for Information Visualizations, Proceedings of the IEEE Symposium on Visual Languages (1996).",
      verify: { status: "verified", note: "I read the full paper text. It states the mantra as overview first, zoom and filter, then details-on-demand, lists the seven data types and the seven tasks including relate, history and extract, gives the sub-100-millisecond filter feedback target, and includes the alphabetical-list caveat." },
      belongs: { verdict: "core", why: "The default structure for any screen that presents a collection, and it is as much an information architecture rule as a chart rule." },
      related: [529, 530, 531, 504]
    },
    {
      n: 529,
      title: "Brushing and linking",
      aka: ["Linked highlighting", "Coordinated multiple views"],
      oneLine: "Select points in one view and see the same records highlighted everywhere else on the screen.",
      demo: {
        caption: "One box drawn in view A. The same four records light up scattered right across view B.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 340 132\"><path class=\"s-mute\" d=\"M14 108 H152 M14 108 V16\"/><path class=\"s-mute\" d=\"M188 108 H326 M188 108 V16\"/><rect class=\"s-accent\" x=\"88\" y=\"18\" width=\"36\" height=\"34\"/><circle class=\"f-mute\" cx=\"32\" cy=\"90\" r=\"3\"/><circle class=\"f-mute\" cx=\"46\" cy=\"74\" r=\"3\"/><circle class=\"f-mute\" cx=\"60\" cy=\"96\" r=\"3\"/><circle class=\"f-mute\" cx=\"74\" cy=\"60\" r=\"3\"/><circle class=\"f-mute\" cx=\"90\" cy=\"84\" r=\"3\"/><circle class=\"f-mute\" cx=\"136\" cy=\"42\" r=\"3\"/><circle class=\"f-mute\" cx=\"126\" cy=\"70\" r=\"3\"/><circle class=\"f-mute\" cx=\"148\" cy=\"86\" r=\"3\"/><circle class=\"f-accent\" cx=\"96\" cy=\"32\" r=\"4\"/><circle class=\"f-accent\" cx=\"108\" cy=\"26\" r=\"4\"/><circle class=\"f-accent\" cx=\"102\" cy=\"44\" r=\"4\"/><circle class=\"f-accent\" cx=\"116\" cy=\"38\" r=\"4\"/><circle class=\"f-mute\" cx=\"210\" cy=\"86\" r=\"3\"/><circle class=\"f-mute\" cx=\"226\" cy=\"60\" r=\"3\"/><circle class=\"f-mute\" cx=\"240\" cy=\"34\" r=\"3\"/><circle class=\"f-mute\" cx=\"262\" cy=\"72\" r=\"3\"/><circle class=\"f-mute\" cx=\"276\" cy=\"44\" r=\"3\"/><circle class=\"f-mute\" cx=\"288\" cy=\"94\" r=\"3\"/><circle class=\"f-mute\" cx=\"306\" cy=\"28\" r=\"3\"/><circle class=\"f-mute\" cx=\"324\" cy=\"66\" r=\"3\"/><circle class=\"f-accent\" cx=\"204\" cy=\"40\" r=\"4\"/><circle class=\"f-accent\" cx=\"252\" cy=\"96\" r=\"4\"/><circle class=\"f-accent\" cx=\"294\" cy=\"58\" r=\"4\"/><circle class=\"f-accent\" cx=\"318\" cy=\"88\" r=\"4\"/><text class=\"t\" x=\"14\" y=\"126\">view A: brushed here</text><text class=\"t\" x=\"188\" y=\"126\">view B: linked</text></svg></div>"
      },
      what: "Richard Becker and William Cleveland described brushing in 1987 for scatterplot matrices. The reader drags a rectangle over some points in one panel, and the corresponding points light up in every other panel at the same time. Because the same records are identified across several views of different variable pairs, relationships that no single plot shows become visible. Linking generalises the idea to any set of coordinated views, including maps, tables and bar charts on one screen.",
      why: "It answers the question a static chart cannot: who are these points. A cluster in one scatterplot means little until you can see where those same records sit on every other axis, and brushing gives that in one gesture.",
      how: [
        "Make the selection reversible and visible, so people can experiment without losing their place.",
        "Highlight rather than filter by default; keeping the unselected points in a faded state preserves context.",
        "Link every view on the screen that shares the same records, including the table.",
        "Keep the response immediate, since the technique depends on rapid trial and error."
      ],
      example: "Any dashboard where clicking a country on a map dims all other countries in the accompanying bar chart and time series. The pattern is unchanged from Becker and Cleveland's 1987 scatterplot matrix.",
      numbers: "",
      pitfall: "Linked filtering that removes unselected records leaves the reader with no sense of proportion. Fading keeps the denominator on screen; deleting throws it away.",
      source: "Richard Becker and William Cleveland, Brushing Scatterplots, Technometrics 29(2), 127-142 (1987).",
      verify: { status: "verified", note: "Citation confirmed against the JSTOR record for Technometrics 29(2) and the Scientific Computing and Imaging Institute bibliography entry, both giving pages 127 to 142 in 1987. The generalisation to linking is documented in the Springer reference work entry on linking and brushing, which cites the same paper as the origin." },
      belongs: { verdict: "core", why: "The interaction that makes multi-view displays work, and the reason dashboards are built as coordinated views rather than separate charts." },
      related: [528, 530, 505, 502]
    },
    {
      n: 530,
      title: "Focus plus context",
      aka: ["Fisheye views", "Detail in context"],
      oneLine: "Show one region in full detail while keeping the rest of the structure visible, compressed around it.",
      demo: {
        caption: "Both centre on the same item. Only the right keeps all thirteen on screen, compressed, so you know where you are.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Detail view only</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><rect class=\"f\" x=\"10\" y=\"28\" width=\"150\" height=\"18\" opacity=\"0.4\"/><rect class=\"f\" x=\"10\" y=\"52\" width=\"150\" height=\"18\"/><rect class=\"f\" x=\"10\" y=\"76\" width=\"150\" height=\"18\" opacity=\"0.4\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Focus plus context</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><rect class=\"f\" x=\"10\" y=\"4\" width=\"150\" height=\"2\" opacity=\"0.18\"/><rect class=\"f\" x=\"10\" y=\"9\" width=\"150\" height=\"2\" opacity=\"0.22\"/><rect class=\"f\" x=\"10\" y=\"14\" width=\"150\" height=\"3\" opacity=\"0.28\"/><rect class=\"f\" x=\"10\" y=\"20\" width=\"150\" height=\"4\" opacity=\"0.36\"/><rect class=\"f\" x=\"10\" y=\"27\" width=\"150\" height=\"6\" opacity=\"0.5\"/><rect class=\"f\" x=\"10\" y=\"36\" width=\"150\" height=\"9\" opacity=\"0.7\"/><rect class=\"f\" x=\"10\" y=\"48\" width=\"150\" height=\"18\"/><rect class=\"f\" x=\"10\" y=\"69\" width=\"150\" height=\"9\" opacity=\"0.7\"/><rect class=\"f\" x=\"10\" y=\"81\" width=\"150\" height=\"6\" opacity=\"0.5\"/><rect class=\"f\" x=\"10\" y=\"90\" width=\"150\" height=\"4\" opacity=\"0.36\"/><rect class=\"f\" x=\"10\" y=\"97\" width=\"150\" height=\"3\" opacity=\"0.28\"/><rect class=\"f\" x=\"10\" y=\"103\" width=\"150\" height=\"2\" opacity=\"0.22\"/><rect class=\"f\" x=\"10\" y=\"108\" width=\"150\" height=\"2\" opacity=\"0.18\"/></svg></div></div></div>"
      },
      what: "George Furnas published generalised fisheye views at CHI in 1986. His idea was a degree-of-interest function: for any item, subtract its distance from the current focus from its a priori importance, and display the items that score highest. Important landmarks stay visible even when far away, unimportant nearby items appear, and the display stays a manageable size. Later work applied the same logic geometrically, magnifying a region while squeezing the surroundings rather than clipping them.",
      why: "It removes the cost of switching between an overview and a detail view. The reader never loses their place, because the surrounding structure stays on screen in reduced form.",
      how: [
        "Define importance explicitly rather than treating all items as equal; the technique depends on it.",
        "Keep landmarks visible at every level so people can orient themselves.",
        "Prefer suppressing detail to distorting geometry, since geometric fisheye distortion is hard to read.",
        "Offer an unfiltered view as well, because a degree-of-interest function is an editorial judgement."
      ],
      example: "A code editor that collapses distant functions to one line while showing the current one in full is a fisheye in Furnas's original sense: importance minus distance, with structure preserved.",
      numbers: "",
      pitfall: "Geometric fisheye distortion in prototypes has been limited to modest magnification factors, and heavy distortion makes targets move under the cursor. Suppression usually beats warping.",
      source: "George Furnas, Generalized Fisheye Views, Proceedings of ACM CHI '86, pages 16-23 (1986).",
      verify: { status: "verified", note: "Citation and page range confirmed from the reference list of Shneiderman's 1996 paper, which I read in full. That paper also summarises the degree-of-interest approach as trading a priori importance against distance and records that fisheye zoom factors in prototypes were limited to about five." },
      belongs: { verdict: "core", why: "A named solution to the overview-versus-detail problem that shows up in maps, editors, timelines and navigation." },
      related: [528, 531, 504, 529]
    },
    {
      n: 531,
      title: "Semantic zoom",
      aka: ["Content-aware zoom", "Multi-scale representation"],
      oneLine: "Zooming changes what is shown, not just how big it is.",
      demo: {
        caption: "Three zoom levels each. On the left the mark only grows; on the right it becomes a label, then a record.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Geometric zoom</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 176 92\"><circle class=\"f\" cx=\"20\" cy=\"46\" r=\"3\"/><path class=\"s-mute\" d=\"M30 46 H42\"/><path class=\"f-mute\" d=\"M42 43 L47 46 L42 49 Z\"/><circle class=\"f\" cx=\"66\" cy=\"46\" r=\"8\"/><path class=\"s-mute\" d=\"M80 46 H92\"/><path class=\"f-mute\" d=\"M92 43 L97 46 L92 49 Z\"/><circle class=\"f\" cx=\"126\" cy=\"46\" r=\"18\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Semantic zoom</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 176 92\"><circle class=\"f\" cx=\"14\" cy=\"46\" r=\"3\"/><path class=\"s-mute\" d=\"M22 46 H32\"/><path class=\"f-mute\" d=\"M32 43 L37 46 L32 49 Z\"/><circle class=\"f\" cx=\"46\" cy=\"46\" r=\"4\"/><text class=\"t\" x=\"53\" y=\"49\">Ward 4</text><path class=\"s-mute\" d=\"M94 46 H104\"/><path class=\"f-mute\" d=\"M104 43 L109 46 L104 49 Z\"/><rect class=\"s-mute\" x=\"114\" y=\"22\" width=\"58\" height=\"48\"/><text class=\"t\" x=\"119\" y=\"34\">Ward 4</text><rect class=\"f-mute\" x=\"119\" y=\"52\" width=\"9\" height=\"14\"/><rect class=\"f-mute\" x=\"132\" y=\"44\" width=\"9\" height=\"22\"/><rect class=\"f-mute\" x=\"145\" y=\"56\" width=\"9\" height=\"10\"/></svg></div></div></div>"
      },
      what: "In geometric zoom, everything simply gets larger. In semantic zoom, an object changes representation as it gains screen space: a dot becomes a labelled marker, becomes a small chart, becomes a full record. The idea comes from the Pad and Pad++ zooming interfaces, Ken Perlin and David Fox's Pad at SIGGRAPH in 1993 and Ben Bederson and James Hollan's Pad++ at UIST in 1994. Unlike a fisheye view it avoids distorting the geometry, because the change is in the content rather than the shape.",
      why: "It fixes the mismatch between a scale that shows structure and a scale that shows detail. A road network drawn at country scale needs motorways and nothing else; the same data at street scale needs house numbers. One representation cannot serve both.",
      how: [
        "Define the representation for each zoom band explicitly rather than scaling one design.",
        "Change what appears at a threshold, and animate the transition so people see what replaced what.",
        "Keep a stable anchor across bands, usually position, so the reader does not lose their place.",
        "Decide what disappears as well as what appears; a band that only adds detail becomes unreadable."
      ],
      example: "Online mapping: at national scale you see motorways and city names, and as you zoom the map switches to minor roads, then to building outlines and house numbers. Nothing is simply scaled up.",
      numbers: "",
      pitfall: "Unannounced switches disorient people. If the marks change at a threshold without an animated transition, the reader assumes the data changed rather than the representation.",
      source: "Ken Perlin and David Fox, Pad: An Alternative Approach to the Computer Interface, SIGGRAPH '93; Ben Bederson and James Hollan, Pad++: A Zooming Graphical Interface, ACM UIST '94.",
      verify: { status: "verified", note: "The InfoVis Wiki entry on semantic zoom gives Perlin and Fox 1993 as its earliest citation and defines the technique as changing the type and meaning of the information displayed rather than only the scale, and as avoiding the physical distortions of fisheye views. The Pad++ citation, ACM UIST 1994 pages 17 to 27, appears in the reference list of Shneiderman's 1996 paper. I could not establish who first used the exact phrase." },
      belongs: { verdict: "core", why: "The rule behind every zoomable map and timeline, and it applies to any interface where scale changes." },
      related: [530, 528, 504, 529]
    },
    {
      n: 532,
      title: "Exploratory versus explanatory visualisation",
      aka: ["Analysis graphics versus presentation graphics"],
      oneLine: "A chart you make to find something out is a different object from a chart you make to tell someone.",
      demo: {
        caption: "One data set, two jobs: twelve throwaway panels for the author to scan, one labelled and annotated chart for a reader.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Exploratory</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><rect class=\"s-mute\" x=\"6\" y=\"6\" width=\"36\" height=\"32\"/><path class=\"s\" d=\"M9 30 L17 26 L24 28 L31 22 L39 18\"/><rect class=\"s-mute\" x=\"48\" y=\"6\" width=\"36\" height=\"32\"/><path class=\"s\" d=\"M51 16 L59 20 L66 18 L73 26 L81 30\"/><rect class=\"s-mute\" x=\"90\" y=\"6\" width=\"36\" height=\"32\"/><path class=\"s\" d=\"M93 26 L101 24 L108 28 L115 25 L123 27\"/><rect class=\"s-mute\" x=\"132\" y=\"6\" width=\"36\" height=\"32\"/><path class=\"s\" d=\"M135 14 L143 28 L150 16 L157 30 L165 18\"/><rect class=\"s-mute\" x=\"6\" y=\"44\" width=\"36\" height=\"32\"/><path class=\"s\" d=\"M9 66 L17 66 L24 64 L31 54 L39 52\"/><rect class=\"s-mute\" x=\"48\" y=\"44\" width=\"36\" height=\"32\"/><path class=\"s\" d=\"M51 58 L59 60 L66 59 L73 61 L81 60\"/><rect class=\"s-mute\" x=\"90\" y=\"44\" width=\"36\" height=\"32\"/><path class=\"s\" d=\"M93 70 L101 64 L108 58 L115 54 L123 50\"/><rect class=\"s-mute\" x=\"132\" y=\"44\" width=\"36\" height=\"32\"/><path class=\"s\" d=\"M135 50 L143 54 L150 60 L157 64 L165 70\"/><rect class=\"s-mute\" x=\"6\" y=\"82\" width=\"36\" height=\"32\"/><path class=\"s\" d=\"M9 100 L17 96 L24 102 L31 94 L39 104\"/><rect class=\"s-mute\" x=\"48\" y=\"82\" width=\"36\" height=\"32\"/><path class=\"s\" d=\"M51 94 L59 102 L66 96 L73 104 L81 98\"/><rect class=\"s-mute\" x=\"90\" y=\"82\" width=\"36\" height=\"32\"/><path class=\"s\" d=\"M93 104 L101 98 L108 100 L115 92 L123 96\"/><rect class=\"s-mute\" x=\"132\" y=\"82\" width=\"36\" height=\"32\"/><path class=\"s\" d=\"M135 98 L143 100 L150 94 L157 102 L165 92\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Explanatory</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 170 116\"><path class=\"s-mute\" d=\"M12 100 H164\"/><path class=\"s\" d=\"M16 84 L37 80 L58 76 L79 78 L100 70 L121 58 L142 40 L160 34\"/><path class=\"s-accent\" d=\"M118 54 L102 36\"/><circle class=\"f-accent\" cx=\"121\" cy=\"58\" r=\"3.5\"/><text class=\"t\" x=\"98\" y=\"39\" text-anchor=\"end\">rise begins</text><text class=\"t\" x=\"16\" y=\"112\">Jan</text><text class=\"t\" x=\"164\" y=\"112\" text-anchor=\"end\">Aug</text></svg></div></div></div>"
      },
      what: "Exploratory graphics are fast and disposable. You make forty of them, most tell you nothing, and their audience is you. An explanatory graphic is finished work made for someone else, so it carries a title stating the finding, annotation, labelling and enough context for a stranger. The distinction descends from John Tukey's separation of exploratory data analysis from confirmatory analysis in his 1977 book, though the exploratory and explanatory pairing as visualisation teachers use it has no single author I could identify.",
      why: "Most bad presentation charts are exploratory charts that were never converted. They still carry the default title, the legend, the unsorted categories and the raw variable names, because the person who made them already knew what they meant.",
      how: [
        "Decide which kind you are making before you open the tool, and let quality standards follow.",
        "Never ship an exploratory chart; rebuild it for the audience rather than tidying it.",
        "On conversion, add a title stating the finding, sort the categories, label directly and cut every series that is not part of the point.",
        "Keep the exploratory versions, since they are the record of what you looked at and did not find."
      ],
      example: "A pair of charts from the same data: one a grid of forty unlabelled panels scanned in five minutes to find where the change is, the other a single annotated line chart in a report.",
      numbers: "",
      pitfall: "Treating the conversion as a styling job. Going from exploratory to explanatory usually means dropping most of the data and choosing what to say, which is editorial work rather than design work.",
      source: "The exploratory and confirmatory split is John Tukey, Exploratory Data Analysis (1977); the exploratory and explanatory pairing used in visualisation teaching has no single documented originator.",
      verify: { status: "adjusted", note: "Reframed to be honest about attribution. Tukey's Exploratory Data Analysis (Addison-Wesley, 1977) is a real and well-documented source, but his distinction is exploratory versus confirmatory analysis, which is not the same pair. I searched for an originator of the exploratory versus explanatory framing in visualisation and found it used widely without a first source, so it is described here as standard practice rather than attributed." },
      belongs: { verdict: "core", why: "It sets the quality standard for a piece of work, and mixing the two up is the most common cause of an unreadable presentation chart." },
      related: [533, 534, 525, 528]
    },
    {
      n: 533,
      title: "Narrative sequencing",
      aka: ["Narrative visualisation", "Data storytelling structure"],
      oneLine: "Ordering a set of graphics so each one prepares the reader for the next.",
      demo: {
        caption: "Three ways to hand over control. The martini glass leads the reader down one path, then opens into free exploration.",
        html: "<div class=\"db-stage\"><svg class=\"db-svg\" viewBox=\"0 0 360 118\"><path class=\"s-mute\" d=\"M18 50 H96\"/><circle class=\"f-mute\" cx=\"18\" cy=\"50\" r=\"4\"/><circle class=\"f-mute\" cx=\"44\" cy=\"50\" r=\"4\"/><circle class=\"f-mute\" cx=\"70\" cy=\"50\" r=\"4\"/><circle class=\"f-mute\" cx=\"96\" cy=\"50\" r=\"4\"/><text class=\"t\" x=\"57\" y=\"104\" text-anchor=\"middle\">author-driven</text><path class=\"s-accent\" d=\"M140 50 H188 M188 50 L218 26 M188 50 L218 50 M188 50 L218 74 M218 26 L250 14 M218 26 L250 32 M218 50 L250 50 M218 74 L250 68 M218 74 L250 86\"/><circle class=\"f-accent\" cx=\"140\" cy=\"50\" r=\"4\"/><circle class=\"f-accent\" cx=\"164\" cy=\"50\" r=\"4\"/><circle class=\"f-accent\" cx=\"188\" cy=\"50\" r=\"4\"/><circle class=\"f-accent\" cx=\"218\" cy=\"26\" r=\"4\"/><circle class=\"f-accent\" cx=\"218\" cy=\"50\" r=\"4\"/><circle class=\"f-accent\" cx=\"218\" cy=\"74\" r=\"4\"/><circle class=\"f-accent\" cx=\"250\" cy=\"14\" r=\"4\"/><circle class=\"f-accent\" cx=\"250\" cy=\"32\" r=\"4\"/><circle class=\"f-accent\" cx=\"250\" cy=\"50\" r=\"4\"/><circle class=\"f-accent\" cx=\"250\" cy=\"68\" r=\"4\"/><circle class=\"f-accent\" cx=\"250\" cy=\"86\" r=\"4\"/><text class=\"t\" x=\"195\" y=\"104\" text-anchor=\"middle\">martini glass</text><path class=\"s-mute\" d=\"M292 50 L322 16 M292 50 L330 33 M292 50 L334 50 M292 50 L330 67 M292 50 L322 84\"/><circle class=\"f-mute\" cx=\"292\" cy=\"50\" r=\"4\"/><circle class=\"f-mute\" cx=\"322\" cy=\"16\" r=\"4\"/><circle class=\"f-mute\" cx=\"330\" cy=\"33\" r=\"4\"/><circle class=\"f-mute\" cx=\"334\" cy=\"50\" r=\"4\"/><circle class=\"f-mute\" cx=\"330\" cy=\"67\" r=\"4\"/><circle class=\"f-mute\" cx=\"322\" cy=\"84\" r=\"4\"/><text class=\"t\" x=\"313\" y=\"104\" text-anchor=\"middle\">reader-driven</text></svg></div>"
      },
      what: "Edward Segel and Jeffrey Heer studied how news organisations tell stories with data and published the results in 2010. They identified recurring structures along a spectrum from author-driven, where the reader is walked through a fixed sequence, to reader-driven, where they explore freely. The middle case they named the martini glass: a guided opening sequence that widens into free exploration once the reader has been given the frame.",
      why: "A set of charts in the wrong order forces the reader to hold three of them in mind before any makes sense. The right order lets each graphic answer the question the previous one raised, which is what makes a data story feel effortless.",
      how: [
        "Write the sequence of sentences first, one per graphic, and check they follow.",
        "Give the frame before the detail: the overall level, then the breakdown, then the exception.",
        "Use the martini glass for a piece with a clear finding and an interested audience: lead them, then let them go.",
        "Keep the chart form constant across a sequence so readers learn it once."
      ],
      example: "A news interactive that scrolls through four fixed states of the same map, each with its own annotation, before handing the reader filters and a search box at the end.",
      numbers: "",
      pitfall: "Sequencing gets confused with animation. Moving between states is not a narrative, and an animated transition with no argument behind it just makes the reader wait.",
      source: "Edward Segel and Jeffrey Heer, Narrative Visualization: Telling Stories with Data, IEEE Transactions on Visualization and Computer Graphics (Proceedings of InfoVis), 2010.",
      verify: { status: "verified", note: "Citation confirmed against the Stanford Visualization Group listing for the paper and the IEEE Computer Society record, which describes the martini glass structure as beginning with an author-driven narrative and then allowing reader-driven exploration." },
      belongs: { verdict: "core", why: "Order is a design decision in any multi-chart document, and this is the one published framework for making it." },
      related: [532, 534, 525, 528]
    },
    {
      n: 534,
      title: "Titles that state the takeaway",
      aka: ["Active titles", "Assertion headlines"],
      oneLine: "Write the finding as the title rather than naming the variables, and accept that this steers the reader.",
      demo: {
        caption: "Identical marks, identical data. The words above the chart are doing nearly all of the communicating.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag\">Titled by its contents</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 124\"><text class=\"t\" x=\"12\" y=\"14\">Revenue, monthly</text><path class=\"s-mute\" d=\"M14 104 H190\"/><path class=\"s\" d=\"M24 44 L56 50 L88 58 L120 64 L152 74 L184 84\"/><circle class=\"f\" cx=\"24\" cy=\"44\" r=\"3\"/><circle class=\"f\" cx=\"56\" cy=\"50\" r=\"3\"/><circle class=\"f\" cx=\"88\" cy=\"58\" r=\"3\"/><circle class=\"f\" cx=\"120\" cy=\"64\" r=\"3\"/><circle class=\"f\" cx=\"152\" cy=\"74\" r=\"3\"/><circle class=\"f\" cx=\"184\" cy=\"84\" r=\"3\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag\">Titled with the finding</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 200 124\"><text class=\"t\" x=\"12\" y=\"14\">Revenue has fallen for six</text><text class=\"t\" x=\"12\" y=\"26\">straight months</text><path class=\"s-mute\" d=\"M14 104 H190\"/><path class=\"s\" d=\"M24 44 L56 50 L88 58 L120 64 L152 74 L184 84\"/><circle class=\"f\" cx=\"24\" cy=\"44\" r=\"3\"/><circle class=\"f\" cx=\"56\" cy=\"50\" r=\"3\"/><circle class=\"f\" cx=\"88\" cy=\"58\" r=\"3\"/><circle class=\"f\" cx=\"120\" cy=\"64\" r=\"3\"/><circle class=\"f\" cx=\"152\" cy=\"74\" r=\"3\"/><circle class=\"f\" cx=\"184\" cy=\"84\" r=\"3\"/></svg></div></div></div>"
      },
      what: "Most charts are titled with their contents: Monthly revenue by region. An active title states the point instead: Northern revenue has fallen for six straight months. Kong, Liu and Karahalios tested what titles do to readers at CHI 2019 and found that recall of the information aligned more closely with the title than with the visualisation itself, and that even when a title openly contradicted the chart, most participants still judged the visualisation impartial.",
      why: "The title does most of the communicating, whether or not you intend it to. Writing it deliberately means the reader takes away the thing you can defend; leaving it as a variable list means they take away whatever the chart happens to suggest.",
      how: [
        "Write the title as a full sentence saying what you found, then check the chart supports it.",
        "Put the variables and units in a subtitle or the axis labels, where they belong.",
        "Where the finding is uncertain, write a title that says so rather than one that overstates it.",
        "Have someone read the title and the chart separately and say whether they agree."
      ],
      example: "A public health chart headed Vaccination rates have stalled since March carries the finding. The same chart headed Vaccination rate, monthly leaves the reader to guess.",
      numbers: "",
      pitfall: "The power that makes active titles useful makes them dangerous. Kong and colleagues found readers absorbed a slanted title without registering that it disagreed with the chart in front of them, so a title you cannot defend is a lie the reader will not catch.",
      source: "Ha-Kyung Kong, Zhicheng Liu and Karrie Karahalios, Trust and Recall of Information across Varying Degrees of Title-Visualization Misalignment, ACM CHI 2019.",
      verify: { status: "verified", note: "Taken from the paper, which reports that recalled main messages aligned more frequently with the title than with the visualisation, and that 72 to 87 per cent of participants across all conditions still called the information neutral. Author name corrected to Ha-Kyung Kong against the author's own copy of the paper. It is a single study on two charts, not a replicated effect, so treat the size as unsettled and the direction as clear. The active-title convention has no originator I could trace." },
      belongs: { verdict: "core", why: "Titles are part of the graphic and carry more of the message than the marks do, with measured effects on recall." },
      related: [525, 532, 533, 497]
    },
    {
      n: 535,
      title: "Accessible charts",
      aka: ["Inclusive data visualisation"],
      oneLine: "Charts that work without colour vision, without fine acuity and without sight at all.",
      demo: {
        caption: "Same two series. Add a dash pattern and a direct label and the chart no longer depends on telling red from green.",
        html: "<div class=\"db-pair\"><div class=\"db-half\"><span class=\"db-tag db-tag--bad\">Colour only</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 120\"><path class=\"s\" style=\"stroke:#C0453A\" d=\"M20 14 H34\"/><text class=\"t\" x=\"38\" y=\"17\">Region A</text><path class=\"s\" style=\"stroke:#4E8C3F\" d=\"M96 14 H110\"/><text class=\"t\" x=\"114\" y=\"17\">Region B</text><path class=\"s-mute\" d=\"M16 104 H200\"/><path class=\"s\" style=\"stroke:#C0453A\" d=\"M20 76 L46 68 L72 58 L98 50 L124 40 L150 34\"/><path class=\"s\" style=\"stroke:#4E8C3F\" d=\"M20 44 L46 48 L72 54 L98 60 L124 68 L150 74\"/></svg></div></div><div class=\"db-half\"><span class=\"db-tag db-tag--good\">Colour plus a second cue</span><div class=\"db-stage db-stage--tight\"><svg class=\"db-svg\" viewBox=\"0 0 210 120\"><path class=\"s-mute\" d=\"M16 104 H200\"/><path class=\"s\" style=\"stroke:#C0453A\" d=\"M20 76 L46 68 L72 58 L98 50 L124 40 L150 34\"/><path class=\"s\" style=\"stroke:#4E8C3F\" stroke-dasharray=\"5 4\" d=\"M20 44 L46 48 L72 54 L98 60 L124 68 L150 74\"/><text class=\"t\" x=\"156\" y=\"37\">Region A</text><text class=\"t\" x=\"156\" y=\"77\">Region B</text></svg></div></div></div>"
      },
      what: "Three requirements cover most of it. Colour must never be the only thing distinguishing one series from another, which is WCAG success criterion 1.4.1. Parts of a graphic a reader needs in order to understand it must reach a contrast ratio of at least 3:1 against adjacent colours under criterion 1.4.11, and text must reach 4.5:1 under 1.4.3. The chart also needs a text equivalent, because a screen reader gets nothing from an image.",
      why: "An inaccessible chart is a blank space for the reader who cannot use it, and colour vision deficiency alone affects about one man in twelve. The same fixes help everyone else: direct labels, distinguishable line styles and decent contrast survive projection, printing and bad screens.",
      how: [
        "Give each series a second cue as well as colour: a direct label, a line style, a marker shape.",
        "Check the palette in a colour blindness simulator, and check every mark against the 3:1 threshold.",
        "Provide the underlying figures as a table or a downloadable file, not only as a picture.",
        "Write alt text that gives the finding and the shape of the data, not just the chart type."
      ],
      example: "The pie chart case in the W3C's own guidance: the slices are graphical objects, so each must be distinguishable from its neighbours at 3:1, which rules out most default pastel palettes.",
      numbers: "WCAG 2.2: 3:1 for graphical objects under 1.4.11, 4.5:1 for normal text under 1.4.3, no reliance on colour alone under 1.4.1. Colour vision deficiency affects roughly 1 in 12 men and 1 in 200 women.",
      pitfall: "Colour-safe palettes get treated as the whole job. A palette that survives a simulator still fails a screen reader, and still fails if two of its colours sit at 1.8:1 against each other.",
      source: "W3C, Web Content Accessibility Guidelines 2.2 (2023), success criteria 1.4.1, 1.4.3 and 1.4.11.",
      verify: { status: "verified", note: "I read the W3C Understanding document for 1.4.11 Non-text Contrast, which gives the 3:1 ratio for graphical objects, uses pie chart slices as its worked example, and notes that lines in a line graph need 3:1 against the background rather than against each other. Prevalence figures come from Colour Blind Awareness; a 2025 PubMed Central review gives up to 8 per cent of males and 0.5 per cent of females of Northern European descent, which is consistent." },
      belongs: { verdict: "core", why: "It is a legal requirement in much public sector work and a hard constraint on palette and encoding choices in all of it." },
      related: [507, 513, 511, 512]
    }
  ]
};
