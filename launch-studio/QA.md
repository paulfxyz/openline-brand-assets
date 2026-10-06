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
- Revision 03: new 42.2%, 43.5% and 44.8% masters resolve correctly; desktop and
  375px mobile icon views have no horizontal overflow or browser errors.
- Revision 03: older completed icon approvals return to review on import.
- Revision 03: adaptive candidate and 48dp fallback bounds are validated at all
  five Android resource densities.

## Production verification: Fly.io

- https://openline-brand.fly.dev serves the studio over HTTPS.
- Machine `8d7155be3ed118` in `cdg` reports a passing HTTP health check.
- All eight views render without browser page errors or horizontal overflow.
- Desktop icon canvas and 375px mobile overview visually checked.
- Default remains Candidate 03, 43.5%; the white square is unchanged.
- Public launch-kit ZIP downloads successfully and passes ZIP integrity checks.
- Hosting uses one shared CPU, 256 MB, shared IPv4/IPv6 and idle autostop.
- Vercel placeholder remains unused. Git pushes do not automatically deploy to Fly.

## Still required

- Final visual approval of the 43.5% icon candidate (another ~17.5% smaller than
  52.7%), with 42.2% and 44.8% alternatives for approximately 20% and 15% reductions.
- Android adaptive legibility testing: the 39.6dp experimental candidate is below
  the recommended 48–66dp artwork range. The prior 48dp fallback is preserved.
- Real iOS and Android device testing, including adaptive masks and Apple appearances.
- Native release screenshots to replace the labelled React design references.
- Verification of production claims, plan prices, permissions and data handling.
- Developer account, app identifiers, privacy, deletion, payment, age-rating,
  reviewer-access and legal answers in the actual consoles.

Use `public/downloads/store-requirements.md` for the official guidance and
`public/downloads/openline-release-checklist.md` for the complete baseline.
