# Email

Transactional email templates, brand letterhead, component library, and email
signatures — all self-contained HTML that opens in a browser and pastes into any
email client.

## What's inside

```
email/
├── templates/
│   ├── code-delivery.html        ← eSIM code delivery / QR ready-to-scan email
│   ├── esim-activation.html      ← Post-purchase activation walkthrough
│   ├── otp.html                  ← Login / verification one-time-password email
│   ├── letterhead.html           ← Openline letterhead template for long-form emails
│   ├── ui-sdk.html               ← Openline UI SDK announcement template
│   └── workadventure-sdk.html    ← Openline × WorkAdventure SDK announcement
├── signatures/
│   ├── openline.html             ← Corporate signature (brand-only)
│   └── paul-fleury.html          ← Personal signature (Paul Fleury)
└── component-library.html        ← Reusable table-based email components:
                                    buttons, cards, dividers, code blocks, etc.
```

## Conventions

- **Table-based layout** — every template uses old-school nested `<table>` structure so
  it renders identically in Gmail, Outlook, Apple Mail, Superhuman and mobile clients.
- **Inline styles only** — no `<style>` blocks in the template body; the preview wrapper
  is the only place with a `<style>` block, marked with `<!-- PREVIEW ONLY -->`.
- **System font stack** — `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial`
  so the email always uses the recipient's native UI font. Openline Orange (`#ff6616`)
  is the only brand accent.
- **Images hot-linked from this repo** — logos are pulled from the `logo/` and `social/`
  folders on the `main` branch (or a pinned tag) so the same image ships in every send.

## How to use a template

1. Open the `.html` file in a browser to preview it.
2. Copy everything between the `<!-- SIGNATURE START -->` / `<!-- SIGNATURE END -->` (for
   signatures) or `<!-- EMAIL START -->` / `<!-- EMAIL END -->` (for templates) markers.
3. Paste into your email client's HTML signature / template area, or send it through your
   ESP (Postmark, Resend, SendGrid…) as the HTML body.

## Signatures

- **`openline.html`** — Openline corporate signature. Use for role-based mailboxes
  (`ask@`, `support@`, `press@`).
- **`paul-fleury.html`** — Paul's personal signature. Duplicate this file for other
  teammates using the same pattern.

## Contributing a new template

- Copy the closest existing template as a starting point (`otp.html` is the simplest).
- Keep the `<!-- EMAIL START -->` / `<!-- EMAIL END -->` markers so consumers can extract
  the sendable body cleanly.
- Test in **Litmus** or **Email on Acid** before shipping — Outlook desktop remains the
  hardest target and will surface any non-table layout bugs.
