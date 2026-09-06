# Brief: Ledger, the owner's dashboard

**The product and every number on the page are fictional and illustrative.**
The derivation shows how a dashboard is reasoned from the corpus; it makes no
claim about any real business or any real data.

## The product

Ledger is invoicing software for sole traders and small firms. The owner opens
it a few times a week, usually on a laptop, sometimes on a phone in a van.

## The job of the screen

Answer three questions in the order the owner asks them, then get out of the
way:

1. How much am I owed right now, and how much of it is overdue?
2. Are invoices being paid faster or slower than they were?
3. Which customers are overdue, and what do I do about it?

## Audience

Owners, not accountants. They read numbers well and charts badly. They want
to act (send a reminder) rather than explore.

## Attributes (each with what it excludes)

- **Direct.** Excludes decoration, and any chart that answers no question.
- **Calm.** Excludes red everywhere; red is for overdue and nothing else.
- **Dense enough.** Excludes marketing spacing; this is a working screen.

## Tone

Matter-of-fact, respectful, serious. Numbers are stated, not celebrated.

## Content supplied (illustrative)

- Outstanding: £18,420 across 23 invoices. Overdue: £4,310 across 4 invoices.
- Paid this month: £12,880 (17 invoices).
- Average days to pay, last twelve months (September to August):
  41, 39, 40, 37, 36, 38, 34, 33, 31, 32, 29, 27. A year ago the figure was 41.
- Overdue invoices: four rows with customer, invoice number, amount, days
  overdue.
- Filters: date range (this month, last quarter, last twelve months).

## Constraints

- Light theme only. Dark is a separate design (#813) and out of scope here.
- One family. No display face; the hero figure uses the same sans.
- Static HTML and inline SVG; no charting library. A table view exists for
  every chart. Hover tooltips via native SVG titles, keyboard reachable.
- Works at 390px and 1280px.
