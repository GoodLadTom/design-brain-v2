# House overlays

The core is brief-neutral so anyone can use it. A house overlay is a short
file of rules that sit on top of it for one studio, one brand or one person.
The DESIGN mode loads an overlay when the user asks for it by name, or when it
is the user's own, and house rules win where they conflict with the core. The
decision log records every place they did.

## Writing one

One file, `house/<name>.md`. Keep it under a page. Each rule says what it is,
why, and which core entry it tightens or overrides, so the reasoning stays
visible. Rules that repeat the core are noise; only write down where you are
stricter, looser or different.

```markdown
# House: <name>

## Always
- <rule> (tightens #690: ...)

## Never
- <rule> (overrides #813: ...)

## Defaults
- <the value the house reaches for when the brief is silent>

## Process
- <anything about how work is shown, approved, shipped>
```

`goodlad.md` in this folder is a real one, and the format to copy.
