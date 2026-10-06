# Openline Brand Studio

App icon review, store artwork, editable English listing drafts, suggested settings
and a 29-item launch checklist. This is a static React/Vite application, designed
for the `openline-brand` Vercel project.

## Run and deploy

```sh
npm ci
npm run dev
npm run build
```

Vercel: use the Vite preset, build command `npm run build`, output `dist`.
When importing the brand-assets repository, set the root directory to `launch-studio`.
The included `vercel.json` sets those defaults and noindex/security headers.
No environment secrets are required. Deployment needs permission to create or
access `openline-brand` in the connected Vercel team.

## Saving review work

This version intentionally has no public write API and no database. Checklist
progress, owners, notes, screenshot direction approvals and edited copy are held
in session memory. **Save workspace** exports a portable JSON file; **Import
workspace** restores it. Unsaved changes trigger a leave-page warning where
supported. Static downloads are the prepared baseline; the workspace export
and Markdown exports reflect the current edits.

Do not enter account credentials, reviewer passwords, customer data or private
legal documents. Shared multi-user persistence would need a protected database
and authentication before adding a write API.

## Creative specification

- The canonical Openline mark is preserved, cropped to its visible artwork.
- iOS and store master: 62% visible width, approximately 9% smaller than the prior
  68% composition. 58%, 66% and 68% masters are supplied as review alternatives.
- No shadows or rounded corners are baked into flat export artwork. The UI adds
  a mask and presentation shadow for preview only.
- Dark Apple PNG is a reference. Icon Composer layer assets are supplied, not a
  compiled `.icon` file. Check all actual OS appearances in Xcode.
- Android adaptive source: 48dp visible artwork on a 108dp canvas, with foreground,
  monochrome and XML resources. This differs from the flat store icon because
  Android masks/scales adaptive icons.

## Artwork

Six iPhone compositions at 1320×2868; six Android compositions at 1080×1920;
one Google Play feature graphic at 1024×500. All are RGB PNGs.

**These are design references rendered from the September 24 React delivery,
not native iOS or Android captures.** A footer preserves that status on each
composition. Sample pricing, eSIM values and UI flows are not certified production
behavior. Replace UI imagery with approved native captures and verify copy before
removing draft status. Tablet/iPad imagery is intentionally pending device support.

The supplied home-screen screenshot is not embedded or distributed.

## Regeneration

`scripts/make_icons.py` generates the icon kit using Pillow and the canonical
brand mark from the brand repository. `public/render.html` is a reproducible
artboard renderer; capture at its specified viewport with Playwright at DPR 1.
The six `screen-*.png` files are crops of `.ol-app-motion` from the supplied React
gallery rendered at DPR 3. Native final assets should replace those crops.

`scripts/package.mjs` refreshes English copy, default workspace and settings
exports. `scripts/package_assets.py` validates and packages icon/artwork handoffs.

## Submission boundaries

Nothing is submitted to Apple or Google. No real app IDs, SDK choices, privacy
answers, age ratings, trader status, payment exemptions, support URLs or launch
dates are asserted. The requirements reference and source index distinguish
current requirements, conditional rules and recommendations.

See `public/downloads/store-requirements.md` and `sources.json` for official URLs.
Policy research was checked on October 6, 2026; recheck at submission.

## Release status

Prepared October 6, 2026. The studio and download packages are review deliverables,
not a store submission. Existing production-path icons in the parent repository
remain unchanged. Vercel creation was blocked by the connected team's project
creation permissions; no Vercel production deployment is claimed.
