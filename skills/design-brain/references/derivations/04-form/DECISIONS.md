# Decision log: Ravel Cycles service booking form

Worked from `core/CORE.md` and `playbooks/form.md`. The page shows two states
of the same form on purpose, because the error state is where forms fail
people (#625, #619). Measured figures at the end are from `scripts/measure.mjs`;
the full output is in `MEASURE.txt`.

## Brief (Step 0)

- Job: book a service slot without a phone call (#683).
- Audience: riders on phones, some in a hurry, some wary of jargon.
- Attributes and exclusions: plain (no jargon in labels or buttons, #1046),
  quick (no field without a stated reason, #1043), forgiving (no blame in
  errors, nothing typed is lost, #1044, #574).
- Tone (#850): casual but not jokey, matter-of-fact. Errors calm, with the
  next step in the sentence (#675).

## Ask less (the field list, each with its reason)

| Field | Reason it exists | Entry |
| --- | --- | --- |
| Service (radio, three options) | The mechanic needs to know what to book; price and time shown at the decision | #620 |
| Kind of bike | Sets up the bay and the parts likely needed | #1043 |
| Anything we should know (optional) | Catches the noise or the part they already bought | #617 |
| Drop-off day | Books the slot; hint states the days and hours | #620 |
| Name | To greet them and label the bike | #1043 |
| Mobile | The confirmation and the "ready" text go here | #616 |
| Email (optional) | Only for people who want it in writing | #617 |

Seven fields, two optional, against the Baymard checkout average of 11 to 13
(#1043). No account, no payment, no address.

## Make each question unmistakable

- Labels above every field, in bold, with the hint in a lighter line beneath
  (#612: about 50ms to read, against up to 500ms beside the field).
- Single column (#613). Fields grouped into four fieldsets with legends
  (#614).
- The service choice is a list of full-width targets with the price and the
  time visible at the point of decision (#620). The selected one gets a 2px
  ink border as well as the filled radio, so the state is not colour alone
  (#318).
- Inputs at 18px so iOS does not zoom on focus (#1013); 48px tall (#700).
- Optional marked, not required, because required is the common case (#617).
- The phone field accepts anything; nothing is masked (#615: 89 per cent of
  people type numbers in several formats).

## Catch mistakes kindly

State 2 shows the same form after a submit with two problems:

- An error summary first, in a bordered box with `role="alert"`, listing each
  problem as a link to its field (#619, the GOV.UK pattern).
- Each failing field carries the message above the input, in red with an
  icon and words, and a red left rule on the group (#597, #318). The message
  says what to do: "Sunday is closed. Choose a day between Tuesday and
  Saturday." Nothing blames the person (#1044).
- Everything typed is still there (#574), and the page says so under the
  button.
- The disabled state is not used anywhere; the button stays live and the
  page explains on submit (#624, #1036).

## Type and colour

- One family, Public Sans, in three weights (#339: one family with real
  contrast). Scale base 18, ratio 1.25: 18, 22, 28, 35, plus 16 for hints
  and the footer (#345). Measured at 1280: 16, 18, 22, 35; at 390: 16, 18,
  22, 28.
- Ground `#f4f5f7`, panel white, ink `#16181d` (16.5:1), secondary `#4b505a`
  (7.5:1). Accent, the shop's red, `#b3261e` (6.4:1 on white; white on it
  6.4:1). Error red `#a4210f`, used only for errors, always with an icon and
  words (#623, #318). Input borders `#6b717c` at 4.0:1 (#691).
- **Bug recorded.** Same root-size slip as derivation 01: rem tokens on an
  18px root scaled every token by 18/16. Fixed the same way.
- **Departure recorded.** A design-lint hook flagged the red left rule on a
  failing field as a "side-tab accent", a common AI tell. It stays: it is the
  GOV.UK Design System's own error pattern, which #619 cites, and it marks
  the field for people who cannot see red (#318). The hook's other findings:
  an uppercase exhibit label (real, changed to sentence case, #396) and
  "flat hierarchy" (false positive after the root fix).

## Interaction

- Submit button: "Book this slot", verb first, naming the outcome (#621).
  One primary action per form (#622).
- Targets: all inputs 48px; the summary links padded to 24px tall after the
  tool caught them at 21px (#700).
- Focus: 3px ink outline everywhere (#695). Error summary is focusable so
  focus can be moved to it after a failed submit (#9589).
- Radio inputs measured through their labels, which is how WCAG counts the
  target: the whole row is the target (#587).

## Motion

None.

## Measured (Step 8)

- 1280 x 800: PASS on every check. Contrast all text; body 18px at 1.5;
  four sizes, one family; spacing on scale; all block-level targets at least
  24px; one hue family (the two reds); one h1, no heading skips; every field
  labelled.
- 390 x 844: PASS on every check. Measure 38 and 46 characters per line.
- No WARN or CHECK lines remain.

## Departures from the core

The red left rule, defended above. Otherwise none.
