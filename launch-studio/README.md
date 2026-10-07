# Openline Brand Studio

## Current: v1.13.0, separate submission variants

The approved marketing master remains unchanged. Open either store listing preview
and choose Submission draft for separate Apple/Google compositions and conservative
metadata. Direct links: `#app-store-submission`, `#google-play-submission`.

Downloads include `openline-apple-submission-draft.zip`,
`openline-google-submission-draft.zip` and `openline-submission-sources.zip`.
Google also includes a new neutral 1024 × 500 feature graphic.
Build with `node scripts/render_submission.mjs` while Vite is running, then
`python scripts/package_submission.py` and `python scripts/package_resources.py`.

Both drafts remain blocked on actual native captures, visible sample data/claims,
OMDM launch verification and store-console approval. See their readiness documents.

## Current: v1.12.1, OMDM pricing story restored

Frame 6 on both platforms now reads “Smarter market. Better prices.”
Supporting copy explicitly explains that Openline Mobile Data Market (OMDM)
compares supplier offers to help bring lower-priced travel data. The plan-selection
capture and large headline remain. This supersedes the neutral ending in v1.12.0.
Pricing evidence and platform review remain submission gates; no blanket
“cheapest” guarantee is made. Main/Archive and the final icon are unchanged.

## Current: v1.12.0, clean Main and separate Archive

Main contains only the approved app icon, four device/store preview cards and
a concise download recap. `#archive` preserves the previous full workbench,
including comparisons, checklists, settings and review notes. Switching views
does not discard in-session Archive edits.

All 12 current screenshot compositions omit category micro-labels, qualification
strips and review footers. The final neutral headline is larger on both platforms.
Review status is documented in Archive and the downloadable handoff, not burned
into the artwork. Native capture and claims verification remain required.

## Previous: v1.11.0, direct previews and complete resource bundle

iPhone and Android both end with “Your trip. Your kind of plan.” and neutral
plan-details copy. Four prominent CTA shortcuts open app-on-device previews or
store-listing previews. Deep links: `#iphone`, `#android`, `#app-store`, `#google-play`.
Phone previews show six supplied app captures, with screen selection and navigation.
The phone shells are simulations, not native test evidence.

`downloads/openline-all-resources.zip` contains current screenshots, approved and
native icon kits, editable art sources, metadata, checklist, policy assessment and
feature-graphic review. It excludes competitor assets and obsolete screenshot sets.
Build it with `python scripts/package_resources.py` after the existing packaging steps.

## Previous: v1.10.2, app-led sequence and alternating backgrounds

Six distinct app views: destination, purchase confirmation, setup, eSIM collection,
connection dashboard and plan selection. Network story is fifth, not fourth.
Every frame alternates orange / warm cream, beginning with orange.

The illustration-only frames are removed. Frame 5 uses the supplied Connected
dashboard; frame 6 uses plan selection. Android has neutral plan-choice copy
instead of “better prices.” These remain React references, not verified native
captures. See `public/downloads/screenshot-compliance-review.md` for remaining gates.

## Previous: v1.10.1, benefit illustrations

Frames 2 and 6 no longer reuse unrelated mobile captures. Frame 2 is a bespoke
network-route illustration connecting multiple partners through Openline to an
alternative eSIM profile. Frame 6 shows supplier offer cards, the OMDM comparison
layer and the resulting travel-plan benefit. No invented native controls,
retail prices, savings figures or carrier endorsements are shown.

These two frames are explicitly labeled benefit illustrations, not app screens.
The other four frames still use supplied React UI references. All remain drafts
pending native capture, claims verification and store-specific review.

## Previous: v1.10.0, Original orange only

Only option 1 remains. The header uses the real Openline icon and the Openline
name, white on orange and black on cream, never the underscore wordmark.

Screenshot 2 now shows **More networks. More ways to connect.** A partner/profile
flow and the supplied eSIM-profile screen explain best-effort profile replacement.
The final screenshot shows **A smarter market. For better prices.** A supplier
offers → OMDM → travel plan flow accompanies the supplied plan screen.

One description paragraph covers both mechanisms in plain language. No cheapest,
savings percentage, instant switching or universal access guarantee is made.
See `positioning-claims.md` for native, evidence and store-specific pricing gates.
The current download has 12 PNGs, not three options. The final app icon is unchanged.
Earlier release sections below are historical.

## v1.9.1: use the icon, not the underscore wordmark

The screenshot header uses the canonical Openline icon with the name Openline,
not the `_Openline` wordmark. The icon and name are prominent white on orange;
cream frames use black. All 36 PNGs, previews, contact sheets and ZIPs are rebuilt.
The approved app-icon package, three orange layouts and store copy are unchanged.

## v1.9.0: three orange options, one stronger reason to choose Openline

Paul retained the original orange direction and discarded the other four.
The current choices are **Original orange**, **Airy orange**, and **Bold orange**.
Each has six iPhone and six Android images, for 36 current review PNGs.

Only screenshot 2 adds the competitive story: **Big networks. More choice.**
Its supporting line is “Leading network partners. Plans for your kind of trip.”
One paragraph in each store description expresses quality, choice and budget fit.
The other five screenshots retain the accessible travel/product story.

No “cheapest”, savings percentage, automatic switching or universal multi-network
access claim is made. Partner evidence must match the launch catalog before
submission. See `public/downloads/positioning-claims.md`. The final icon is unchanged.
Previously imported copy is preserved rather than overwritten.

Current downloads:
- https://openline-brand.fly.dev/downloads/openline-orange-series.zip
- https://openline-brand.fly.dev/downloads/openline-orange-series-sources.zip

The older five-series URLs redirect to these three-option packages on Fly.
Non-orange images are removed from the current public files and downloads,
but remain recoverable in Git history. The historical sections below describe
previous releases, not current options.

## v1.8.0: five directions, complete store preview

The studio now opens in **Store preview**, not the previous artwork gallery.
Compare five complete creative directions: Signal, Editorial, Postcard, Product focus,
and After hours. Each has six iPhone and six Android compositions, for 60 review PNGs.
All five remain options; **no screenshot series is approved or automatically selected**.
The approved 43.5% flat icon is unchanged.

- **Store listing:** approximate Apple/Google listing shells, 375/390/430px options,
  all six swipeable images, editable workspace listing copy, and the approved icon.
- **Compare brands:** equal-width frame comparisons plus full strips for Openline,
  Saily, Airalo and Holafly. Actual source-linked images were collected separately
  from each platform on 7 October 2026, not fabricated or substituted.
- **All five series:** every sequence together, full-size image dialogs with keyboard
  navigation, per-series downloads, all-five archive and editable sources.
- **Decision state:** shortlist a direction and write review notes; Save workspace
  exports both. Import restores schema 4 and earlier workspaces. No shared persistence.
- **Prior artwork:** revision 03 is retained as superseded, not a final direction.

All artwork remains a design reference based on supplied React screens, with unverified
sample data. Replace with accurate native captures before store submission. Postcard's
travel backdrops are original AI-generated illustrations. Competitor assets are excluded
from Openline download bundles and carry attribution in the preview.

Downloads:
[All five series](https://openline-brand.fly.dev/downloads/openline-five-series.zip),
[Editable sources](https://openline-brand.fly.dev/downloads/openline-five-series-sources.zip),
[Final icon](https://openline-brand.fly.dev/downloads/openline-final-icon-all-formats.zip).

Rebuild new artwork: run Vite on port 5173, then `node scripts/render_series.mjs` and
`python scripts/package_series.py`. The PNG outputs are RGB; WebP derivatives serve
the preview. `series-layout-qa.json` records the 60 text/device overlap checks.

The following sections document the earlier launch-kit foundation. References to
the 12 R03 images describe the retained historical set, not the new shortlisted artwork.

App icon review, store artwork, editable English listing drafts, suggested settings
and a 33-item launch checklist. This is a static React/Vite application
published at [openline-brand.fly.dev](https://openline-brand.fly.dev).

## Run and deploy

Production hosting is Fly.io. See [hosting/README.md](hosting/README.md) for the
pinned-bundle deployment and update procedure. Git pushes do not auto-deploy.

```sh
npm ci
npm run dev
npm run build
```

Vercel: use the Vite preset, build command `npm run build`, output `dist`.
When importing the brand-assets repository, set the root directory to `launch-studio`.
The included `vercel.json` sets those defaults and noindex/security headers.
No environment secrets are required. Vercel remains an optional deployment route;
the earlier empty Vercel placeholder is not used by the live site.

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
  than the 52.7% candidate. Paul finalized this composition on 7 October 2026.
  The white square stays unchanged. Earlier experiments remain in version history,
  separate from the final-download interface.
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

Workspace schema 3 accepts earlier exports, preserving their text and checklist
notes. It clears obsolete artwork approvals and separates Apple/Google card
approval state. It locks the final icon to 43.5% and records Paul's approval.
New technical gates are added; expanded older requirements return to review.
Previously edited copy is not silently replaced with the new baseline.

## Final icon downloads

`public/downloads/openline-final-icon-all-formats.zip` contains the approved
composition as PNG (16–4096px), transparent PNG, SVG, vector PDF/EPS, JPEG,
lossless WebP, ICO and ICNS, alongside native integration resources.
SVG/PDF preserve the original vector paths and can be edited in Illustrator.
No native `.ai` or compiled Icon Composer `.icon` file is claimed.
The direct downloads and checksums are under `public/downloads/final-icon/`.

## Artwork

Six iPhone compositions at 1320×2868; six Android compositions at 1080×1920;
one Google Play feature graphic at 1024×500. All are RGB PNGs. Revision 03
introduces shorter taglines, generous margins and full, upright phones.
`public/artwork.json` drives the narrative and per-platform capture mapping.
The editable source ZIP and `screenshot-handoff.md` document native replacement.

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
Policy research was rechecked on October 7, 2026; recheck at submission.
See `public/downloads/submission-audit.md` for technical gates and owner decisions.

## Release status

Revised October 7, 2026. The icon visual choice is final; screenshots are
replacement-ready design references, not native submissions. Historical intake
icons remain available; the approved pack is separated under `app-icons/final/`
in the parent repository. The studio is live on Fly.io with HTTPS, a passing health check
and verified download ZIP. All eight views were checked on the production site;
desktop and mobile layouts retain the final 43.5% icon.
The empty Vercel placeholder remains undeployed; no Vercel deployment is claimed.
