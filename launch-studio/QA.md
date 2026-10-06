# Brand Studio QA

Checked October 6, 2026. This is browser and asset-package QA, not native app
certification or store acceptance.

## Verified

- Production Vite build completes successfully.
- All seven workspace views render on desktop and mobile without horizontal overflow.
- Light and dark themes render correctly.
- Icon-size, tone, store-platform and Android-mask controls update their previews.
- Checklist status, owner, evidence notes, search and platform/status filters work.
- Copy character limits show errors for over-limit drafts.
- Save/import restores the workspace, including checklist notes and review state.
- A malformed workspace is rejected without changing state.
- Artwork previews open, Escape closes dialogs, and keyboard focus is kept inside dialogs.
- ZIP download controls trigger file downloads.
- No browser page errors were observed during the interaction pass.
- Native icon dimensions, Apple opacity, Play size/alpha, artwork dimensions,
  RGB modes and ZIP integrity are validated by `scripts/validate_assets.py`.

## Still required

- A writable Vercel project or project-creation permission in the connected team.
- Final visual approval of the 62% icon candidate.
- Real iOS and Android device testing, including adaptive masks and Apple appearances.
- Native release screenshots to replace the labelled React design references.
- Verification of production claims, plan prices, permissions and data handling.
- Developer account, app identifiers, privacy, deletion, payment, age-rating,
  reviewer-access and legal answers in the actual consoles.

Use `public/downloads/store-requirements.md` for the official guidance and
`public/downloads/openline-release-checklist.md` for the complete baseline.
