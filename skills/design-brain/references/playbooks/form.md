# Playbook: forms

Use with `core/CORE.md`. For anything that collects input: contact and booking
forms, sign-up, checkout, settings, multi-step applications. Ranked by
leverage. Forms are where the corpus has the most measured evidence, so most
of these entries carry numbers.

## The job

A form is a conversation with fixed questions. Every question costs completions,
and under GDPR asking for data you don't need is unlawful as well as expensive
(#1043, #998). The whole design reduces to: ask only what's needed, make each
question unmistakable, catch mistakes kindly and early, and never lose what the
person typed.

## Ranked entries

### 1. Ask less
- #1043 Asking for data you don't need: checkouts average 11 to 13 fields and
  most need 8 (Baymard)
- #998 Data minimisation (GDPR Article 5(1)(c)); #997 Honest consent design;
  #1000 Honest defaults
- #617 Required versus optional marking: mark the rarer one
- #616 Smart defaults and autofill: correct `autocomplete` tokens (WCAG 1.3.5)
- #582 Deferred choice: ask for it when it is needed, not up front

### 2. Make each question unmistakable
- #612 Label placement: labels above the field are read in about 50ms; beside
  the field, up to 500ms (Penzo 2006, one small study, but the direction holds)
- #1045 Placeholder text used as a label (failure mode); #707 Form labels and
  instructions (51 per cent of home pages have unlabelled inputs)
- #613 Single-column form layout; #614 Field grouping and sectioning
- #620 Microcopy at decision points; #663 Plain language
- #615 Input masks and formatting: 89 per cent of people type numbers in
  several formats even with an example; accept them all, don't restrict
- #1013 Inputs at 16px or iOS zooms the page on focus

### 3. Catch mistakes kindly and early
- #596 Inline validation timing: validate on leaving a field, not on every
  keystroke; Wroblewski's study found 22 per cent higher success and 42 per
  cent faster completion
- #597 Error message anatomy; #619 Error summary and field-level errors
  (GOV.UK pattern); #598 Recovery paths
- #1044 Error messages that blame the user; #675 Tone in failure states: be
  straightforward, calm, serious, and offer the next step
- #555 Error prevention; #550 Poka-yoke
- #549 Slips versus mistakes: a slip wants a constraint, a mistake wants an
  explanation

### 4. Never lose the work
- #574 Protect the user's work; #636 Autosave and version history
- #9628 Timeouts and session expiry: warn, give 20 seconds, allow ten
  extensions (WCAG 2.2.1)
- #584 Undo over confirm; #585 Confirmation for destructive actions; #623
  Destructive action styling
- #618 Multi-step forms and progress indication: show where they are; the
  goal-gradient evidence says people speed up as the end approaches
- #634 Scroll restoration; #9589 Focus management on view change: after an
  error, focus moves to the summary

### 5. The buttons
- #621 Verb-first button labels naming the outcome ("Send enquiry", "Pay
  £48")
- #622 Primary, secondary and tertiary: one primary per form
- #624 Disabled-state pitfalls; #1036 Disabled buttons with no explanation:
  leave the button enabled and explain on press
- #587 Target size; #700 24 by 24 minimum, 44 by 44 for touch

### 6. Accessibility that is specific to forms
- #705 Accessible names; #707 Labels and instructions (WCAG 3.3.2)
- #589 Keyboard focus order; #695 Visible focus indicator; #10050 Removing the
  focus indicator
- #1050 Inaccessible custom controls: a styled `div` is not a checkbox
- #318 Never colour alone for error state: icon or text as well as red
- #619 Error identification and suggestion (WCAG 3.3.1, 3.3.3)

### 7. Ethics that apply on every form
- #986 Roach motel and #9000 Exit parity: leaving costs no more than joining
- #996 Privacy zuckering; #999 Privacy by design; #995 False urgency

## Numbers for this artefact

| Figure | Entry |
| --- | --- |
| Labels above: about 50ms to read; beside: up to 500ms | #612 |
| Inline validation: 22 per cent more success, 42 per cent faster | #596 |
| Checkout: 11 to 13 fields average, 8 needed | #1043 |
| 89 per cent type numbers in varied formats | #615 |
| Inputs 16px or iOS zooms | #1013 |
| Timeout: 20s warning, ten extensions | #9628 |
| Targets 24 by 24 min, 44 by 44 touch | #700 |
| 51 per cent of home pages have unlabelled inputs | #707 |

## Checks before showing

1. List every field with the reason it exists and what happens to the data.
   Delete any without a reason (#1043).
2. Hide placeholders. Is every field still labelled? (#1045)
3. Submit it empty. Is the summary at the top, does focus go there, does each
   error say how to fix it? (#619, #597, #9589)
4. Type a phone number with spaces, then with a country code. Does it take
   both? (#615)
5. Leave it for the timeout. Were you warned? Did you keep your text? (#9628,
   #574)
6. Tab through the whole thing with no mouse (#589, #695).
7. Run `measure.mjs` at 390px: targets, input size, contrast.
8. Read the submit button. Does it say what happens? (#621)

## Failures that cluster on this artefact

#1045 Placeholder labels, #1036 Disabled with no reason, #1044 Blaming errors,
#1043 Data you don't need, #10050 Focus removed, #1050 Inaccessible custom
controls, #1046 Jargon in CTAs.
