# Brief: Ravel Cycles service booking

**This business is fictional**, built so the derivation can show a form
reasoned from the corpus. Nothing on the page is a claim about a real shop.

## The client

Ravel Cycles, a bike shop with a workshop in Bristol. They service and repair
bikes. Bookings come by phone, which interrupts the mechanics, so they want a
web form that captures enough to book a slot without a call.

## The job of the form

One job: book a service slot. The mechanic needs to know what bike is coming,
which service, when the customer can drop it off, and how to reach them. That
is the whole data need.

## Audience

Adults who ride, a mix of commuters and weekend cyclists. Most will fill it in
on a phone. Some will be in a hurry, some will be nervous about jargon.

## Attributes (each with what it excludes)

- **Plain.** Excludes jargon in field labels and buttons.
- **Quick.** Excludes any field without a stated reason for existing.
- **Forgiving.** Excludes error messages that blame, and losing what someone
  typed.

## Tone

Casual but not jokey. Matter-of-fact. Errors are calm and say what to do.

## Content supplied

- Services and prices: Safety check, £25, about 30 minutes. Standard service,
  £60, about 2 hours. Full service, £120, a day. Prices for the labour; parts
  extra, quoted before fitting.
- Drop-off: Tuesday to Saturday, 8.30 to 10.30. Collect from 4.
- Contact: Ravel Cycles, 3 Cotham Hill, Bristol BS6 6LD. 0117 000 0000.

## Constraints

- Two states must be shown: the empty form, and the same form after a failed
  submit with two errors, because the error state is where forms fail people
  (#619, #597).
- No account, no login, no payment on the form.
- Single file, static HTML and CSS. Works at 390px first.
