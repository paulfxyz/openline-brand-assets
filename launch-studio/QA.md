# Brand Studio QA

Checked October 6, 2026. This is browser and asset-package QA, not native app
certification or store acceptance.

## Verified

- Production Vite build completes successfully.
- All eight workspace views, including Competitor review, render on desktop and mobile without horizontal overflow.
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
- Revision 02: all twelve headline/deck pairs fit without overlap; Android
  compositions crop out the iOS-style status bar from the supplied design screens.
- Revision 02: 10%, 15% and 20% icon-reduction options resolve to the correct files.
- Schema-1 imports preserve user copy and notes but clear obsolete artwork
  approvals and return completed artwork-review tasks to review.

## Still required

- Working Vercel project access and a stable authenticated browser session. An empty
  project was created through the owner browser session, but renaming, Git linking
  and deployment could not be completed. The connector cannot see that new project.
- Final visual approval of the 52.7% icon candidate (15% smaller than 62%), with
  49.6% and 55.8% alternatives corresponding to the requested 20% and 10% reductions.
- Real iOS and Android device testing, including adaptive masks and Apple appearances.
- Native release screenshots to replace the labelled React design references.
- Verification of production claims, plan prices, permissions and data handling.
- Developer account, app identifiers, privacy, deletion, payment, age-rating,
  reviewer-access and legal answers in the actual consoles.

Use `public/downloads/store-requirements.md` for the official guidance and
`public/downloads/openline-release-checklist.md` for the complete baseline.
