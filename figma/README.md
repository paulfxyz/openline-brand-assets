# Figma

The "code side" of the Openline design system — React/TSX components generated from
Figma via **Dev Mode → Copy code**, plus a place to keep the live Figma share links so
this repo stays in sync with the design source of truth.

## What's inside

```
figma/
├── code-exports/    ← Auto-generated TSX / TS components straight from Figma Dev Mode
│                      (Container.tsx, Frame*.tsx, List*.tsx, svg-*.ts, world-map-dotted.tsx…)
└── LINKS.md         ← Paste Figma share links here (one row per file / design)
```

## What these files are (and aren't)

- **Are:** raw React/TSX and inline SVG modules copied verbatim from Figma Dev Mode.
  Useful as a **reference implementation** — the exact spacing, typography, colours,
  and structure the designer intended, expressed as code you can diff and lift from.
- **Aren't:** production components. They use hard-coded pixel values, embed raw SVG,
  reference `imgGroup*` placeholders, and don't wire up interactivity. Treat them as
  a specification you translate into your real design-system components.

## Where the images live

Figma-exported **PNG** assets are large and belong with the app that consumes them
(typically `openline-native-sdk/src/assets/` inside the mobile / SDK repo), not here.
This folder only holds the **code** side of Figma exports.

## Source files (`.fig`)

The original `.fig` files themselves live in the Figma workspace, not on disk. Use
[`LINKS.md`](LINKS.md) to keep a running index of the share links so anyone with this
repo can jump straight to the live source.

## Contributing

- **Refreshing an export:** in Figma, select the frame, switch to Dev Mode, choose
  React + Tailwind, copy the code, replace the corresponding file here, and commit.
- **New design:** drop the export into `code-exports/` using a descriptive filename
  (e.g. `checkout-summary.tsx` beats `Frame3.tsx`) and add the Figma link to
  `LINKS.md`.
- **Cleanup PRs welcome:** renaming the auto-generated `Frame*.tsx` files to human
  names, or grouping svg-hash modules alongside the component that uses them, is a
  great low-risk contribution.
