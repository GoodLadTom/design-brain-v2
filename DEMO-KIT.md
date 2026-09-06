# Demo kit

Entries that benefit from a visual get one: a small piece of markup that *shows*
the fundamental instead of describing it. This is the spec for authoring them.

Not every entry earns one. Judging that is part of the job, and is covered in
**Deciding whether to build one** below.

Read `assets/demos.css` for the full class list. Nothing outside that file
exists, so do not invent class names.

---

## The field

Add a `demo` object to the entry, after `oneLine`:

```js
demo: {
  caption: "One line, max 22 words, telling the reader what to look at.",
  html: "<div class=\"db-stage\">...</div>"
}
```

`html` is injected into a `<figure>` and rendered live. It must start with a
`db-stage` (or a `db-pair` of them).

---

## Deciding whether to build one

A demo must teach something the sentence next to it cannot. Ask one question:
**would a reader understand this faster, or more precisely, for having seen it?**

Build one when the fundamental has a visible form: a spacing, a ratio, a
contrast, a shape, a sequence, a state, a curve, a layout, a piece of interface
behaviour. Most entries are like this, including many that look abstract at
first. Sound and haptics drawn as envelopes over time work well. So does a
doctrine shown as its consequence: nine controls against three.

Skip it when the entry is a claim about process, ethics, responsibility, market
position or professional conduct, and any picture would be an illustration of
the words rather than a demonstration of the thing. A box with the principle’s
name in it teaches nothing. Two arrows and a label teach nothing. If the only
demo you can think of restates the title, that is the signal to skip.

To skip, still add the field, with a reason instead of markup:

```js
demo: {
  none: "One sentence on why a visual would not add anything here."
},
```

This is a recorded decision, not an omission. It tells the next person the entry
was considered rather than missed. Skipping is a legitimate answer and roughly
one entry in six is expected to take it, but it is an answer you must be able to
defend: reach for it because a picture genuinely cannot help, never because the
demo is hard to build.

## Hard rules

1. **No `<script>`, no `on*` handlers, no `<iframe>`, no external URLs, no
   `<img src>`.** Demos are markup and CSS only. The renderer strips these.
2. **Use demo-kit classes for structure.** Inline `style` is allowed only for
   the specific value the demo is *about*: the letter-spacing being compared,
   the colour being tested, the width being constrained. If you find yourself
   writing a paragraph of inline CSS, the demo is too complicated.
3. **Use theme variables, never fixed colours**, unless the colour is the point
   of the demo. `var(--ink)`, `var(--ink-3)`, `var(--accent)`,
   `var(--paper)`, `var(--rule)`. A demo with `#333` hardcoded breaks in dark
   mode.
4. **Escape properly.** The file is JavaScript, so double quotes inside `html`
   must be escaped as `\"`. The file must pass `node --check`.
5. **No emoji. British English in the caption.**
6. **It must actually demonstrate the thing.** A decorative box with the word
   "proximity" written in it is worthless. If a reader could not work out the
   principle from the picture with the caption covered, the demo has failed.

---

## The four shapes a good demo takes

### 1. The comparison pair — use this most

The reader learns a fundamental fastest by seeing it broken next to it working.

```html
<div class="db-pair">
  <div class="db-half">
    <span class="db-tag db-tag--bad">Even spacing</span>
    <div class="db-stage db-stage--tight">
      <div class="db-row db-row--centre">
        <span class="db-dot"></span><span class="db-dot"></span>
        <span class="db-dot"></span><span class="db-dot"></span>
      </div>
    </div>
  </div>
  <div class="db-half">
    <span class="db-tag db-tag--good">Grouped by proximity</span>
    <div class="db-stage db-stage--tight">
      <div class="db-row db-row--centre db-row--loose">
        <span class="db-row db-row--tight"><span class="db-dot"></span><span class="db-dot"></span></span>
        <span class="db-row db-row--tight"><span class="db-dot"></span><span class="db-dot"></span></span>
      </div>
    </div>
  </div>
</div>
```

### 2. The single stage

For anything that is one continuous thing: a scale, a ramp, a grid, a curve.

```html
<div class="db-stage">
  <div class="db-row db-row--top">
    <span class="db-specimen" style="font-size:12px">Aa</span>
    <span class="db-specimen" style="font-size:16px">Aa</span>
    <span class="db-specimen" style="font-size:21px">Aa</span>
    <span class="db-specimen" style="font-size:28px">Aa</span>
  </div>
</div>
```

### 3. The annotated diagram

SVG, using the kit's `.s`, `.s-mute`, `.s-accent`, `.f`, `.f-accent`, `.t`
classes so strokes and labels follow the theme.

```html
<div class="db-stage">
  <svg class="db-svg" viewBox="0 0 320 90">
    <path class="s-mute" d="M10 80 H310"/>
    <path class="s-accent" d="M10 80 C 90 80, 120 20, 310 20"/>
    <text class="t" x="10" y="16">ease-out</text>
  </svg>
</div>
```

### 4. The interface fragment

For interaction, forms, states and copy.

```html
<div class="db-stage">
  <div class="db-ui">
    <span class="db-label">Card number</span>
    <span class="db-input">4242 4242 4242 4242</span>
  </div>
</div>
```

---

## Motion

Only for entries that are genuinely about time. Use `db-anim` plus one
`db-anim--*` name and one timing function. The global stylesheet already stops
all animation for `prefers-reduced-motion`, so nothing extra is needed.

```html
<div class="db-stage">
  <span class="db-dot db-dot--lg db-anim db-anim--slide db-anim--linear"></span>
</div>
```

---

## Worked examples by kind of fundamental

| Fundamental is about | Build it from |
| --- | --- |
| Grouping, similarity, closure | `db-dot`, `db-sq` in `db-row` / `db-col` |
| Balance, weight, tension | `db-block` at different sizes in a stage |
| Hierarchy, scale, rhythm | `db-specimen` at stepped sizes, or `db-bar` |
| Measure, leading, tracking | `db-type` with `db-measure-narrow/good/wide` |
| Grids, columns, baseline | `db-cols`, `db-baseline` over `db-lines` |
| Colour | `db-swatch`, `db-ramp`, `db-chip-text` |
| Contrast ratios | two `db-chip-text` with real colour values |
| Depth, layering | `db-stack` with offsets |
| Charts, data | `db-svg` with bars or a line |
| Interaction, forms, states | `db-ui`, `db-btn`, `db-input`, `db-card` |
| Motion, easing, timing | `db-anim` on a mark, or an SVG curve |
| Print, binding, production | `db-svg` diagram |
| Abstract doctrine | Show the design consequence, not the slogan |

**On abstract entries.** Some fundamentals are arguments, not shapes: "form
follows function", "design is one", "responsibility". Try the *consequence*
before you give up on them. For "less, but better", two versions of the same
control panel, one with nine buttons and one with three, is a real
demonstration of the doctrine in use. Never draw a metaphor instead.

If the consequence cannot be shown without inventing a scenario that is really
just the sentence redrawn, skip it with a reason. "Responsibility" and
"equity in design" are honest skips. "Less, but better" is not.

---

## Caption

One line. Say what to look at, not what the principle means. The entry already
explains the principle.

Good: "Same four dots. Only the spacing changed, and the right pair reads as two
things."

Bad: "Proximity is a Gestalt principle where nearby elements are perceived as
related."
