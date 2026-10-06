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
No environment secrets are required. Deployment needs working access to
`openline-brand` in the connected Vercel team.

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
- iOS and store master: 43.5% visible width, approximately 17.5% smaller linearly
  than the 52.7% candidate. 44.8% and 42.2% compare the requested 15% and 20%
  reductions, rounded to one decimal place.
  The white square stays unchanged; previous masters remain available.
- No shadows or rounded corners are baked into flat export artwork. The UI adds
  a mask and presentation shadow for preview only.
- Dark Apple PNG is a reference. Icon Composer layer assets are supplied, not a
  compiled `.icon` file. Check all actual OS appearances in Xcode.
- Android adaptive candidate: 39.6dp visible artwork on a 108dp canvas, with
  foreground, monochrome and XML resources. This is a 17.5% reduction from the
  prior 48dp mark, below Android's recommended 48–66dp range. A 48dp reference
  fallback is included in the native kit. Test readability on actual launchers.
  Legacy Android and store-listing icons use the 43.5% flat composition.

## Competitor-informed revision

The Competitor review view documents Saily, Airalo and Holafly, with direct
App Store and Google Play evidence. Revision 02 uses a clearer first image,
larger UI crops, a decision-led screenshot sequence and more explanatory copy.
No competitor artwork, ratings, customer counts or feature promises are copied.
See `public/downloads/competitor-review.md` for the complete source-cited review.

Workspace schema 2 accepts earlier exports, preserving their text and checklist
notes. It clears earlier screenshot approvals when the artwork revision differs.
Previously edited copy is not silently replaced with the new baseline.
Icon revision 3 reopens older completed icon-review tasks, since native resources
have changed. The current selectable sizes are 42.2%, 43.5%, 44.8% and 52.7%.

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
remain unchanged. The connected CLI cannot create or see the intended project.
An empty project was created through the owner's browser, but renaming, Git linking
and deployment are pending because the browser session became unstable.
No Vercel production deployment is claimed.
