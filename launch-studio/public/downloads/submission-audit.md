# Openline submission preparation audit

## Current creative status: v1.9.0

Paul retained orange and discarded the other directions. There are now three
orange options (36 phone compositions); no final option is approved. Screen 2
and one description paragraph add the network-quality/choice/value positioning.
The network-partner statement is owner-provided positioning and needs launch
contract/catalog evidence, not an independently verified universal service claim.
No cheapest, quantified savings, automatic switching or universal multi-network
access promise is made. The official wordmark is larger, white on orange and
black on cream. Native capture and compliance gates below remain open.

## Creative-status addendum: v1.8.0

Revision 03 was rejected as a final visual direction and is now historical.
Five new six-screen directions are available for review in both phone formats;
none is selected or approved. They still use the supplied React design UI, not
native captures. The final 43.5% icon is unchanged. The technical/compliance
findings below remain applicable; this addition does not clear any submission gate.

Compare at https://openline-brand.fly.dev and download the options separately:
https://openline-brand.fly.dev/downloads/openline-five-series.zip

The following audit describes the v1.7 foundation and known capture risks.

Audited 7 October 2026. Creative package v1.7.0. The icon choice is final and
the screenshot compositions are ready for native-image replacement. This is
not a claim that only screenshots remain before submission: signed builds,
native tests, console declarations and account decisions still require evidence.

## Completed creative preparation

- Final 43.5% white-square icon approved by Paul, with experiments removed from
  the final-download path.
- PNG 16–4096px, transparent PNG, SVG, PDF, EPS, JPEG, lossless WebP, ICO and ICNS.
  Vector files use canonical source paths, not a raster embedded in an SVG.
- Native Xcode catalog, Apple appearance references/source layers and Android
  legacy/adaptive/monochrome resources, with a separate 48dp adaptive fallback.
- Twelve airier store compositions and a matching Play feature graphic.
- Six benefit-led taglines, English listing copy with length/byte checks, editable
  screenshot sources and a per-platform capture mapping.
- Platform-specific artwork approval state: approving an Apple card no longer
  silently approves its Android counterpart.
- Revised 33-item release checklist. Only the visual icon choice starts complete;
  creative approval does not mark native integration or compliance complete.

## Requirements reviewed and fixes incorporated

- **Current SDK floors:** Xcode/iOS SDK 26+ and Android target API 36+ at this
  checkpoint, not minimum supported OS values. Future SDK deadlines are not
  represented as today's requirement.
  https://developer.apple.com/news/upcoming-requirements/?id=02032026a
  https://support.google.com/googleplay/android-developer/answer/11926878?hl=en
- **Binary compatibility:** require actual Android 64-bit and 16 KB evidence,
  including native dependencies. Do not infer compliance or a policy extension.
  https://support.google.com/googleplay/android-developer/answer/17492799?hl=en-GB
  https://developer.android.com/guide/practices/page-sizes
- **Apple SDKs:** listed third-party SDKs need privacy manifests; applicable
  binary dependencies also need signatures, including repackaged SDKs.
  https://developer.apple.com/support/third-party-SDK-requirements
- **eSIM provisioning:** validate entitlement/distribution-profile eligibility
  if using CTCellularPlanProvisioning. This is conditional, not a universal
  requirement for QR/manual installation.
  https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.commcenter.fine-grained
- **Trader status:** declare status for Apple; EU trader contact verification
  is a separate conditional task.
  https://developer.apple.com/help/app-store-connect/manage-compliance-information/manage-european-union-digital-services-act-trader-requirements/
- **Android verification:** verify actual package/signing-key registration for
  intended territories rather than assuming automatic registration succeeded.
  https://developer.android.com/developer-verification
- **First Google production release:** no percentage rollout; it reaches all
  eligible users in selected countries. Release notes allow 500 Unicode
  characters per language.
  https://support.google.com/googleplay/android-developer/answer/9859348?hl=en
- **Asset specifications:** exact phone dimensions, opacity and byte sizes are
  checked. An iPad set remains conditional on iPad support.
  https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications
  https://support.google.com/googleplay/android-developer/answer/9866151?hl=en
- **Adaptive icon caveat:** 39.6dp is the supplied small-size treatment, below the
  stated 48–66dp guidance. The 48dp fallback remains separate; real launcher
  tests determine whether that adaptation needs adjustment. Flat-icon approval
  is not revoked by this engineering check.
  https://developer.android.com/develop/ui/compose/system/icon_design_adaptive

## Screenshot-specific audit

No mock screenshot is approved for store upload. Every card has a design-preview
footer. The current reference UI contains the following values/claims that must
be replaced or substantiated in the mature native release:

| Card | Risks to resolve |
|---|---|
| Destinations | “190+ countries”, regional counts, coverage and sample prices |
| Plans | Unlimited/full-speed/hotspot promises, best-value badge, pricing and rounding |
| eSIM details | Provisioning identifiers, carrier/plan terms, network/coverage and actions |
| Dashboard | Sample identity, usage timing, balances, activation codes and “Connected” state |
| My eSIMs | Unlimited-vs-10GB inconsistency; “6.8 of 10GB left” paired with “32% left”; state/actions and refunds |
| Account | Openline+ entitlement, savings calculation, referral earnings and supported account tools |

These were not silently painted into supposedly real app screenshots. They are
documented inputs awaiting replacement; native captures must show truthful data.
The obsolete settings panel's ad-blocking/network-switching claims were removed
from the store narrative. The Android profile reference omits the Apple Wallet
button rather than advertising an iOS-only action in an Android image.
Apple requires accurate metadata:
https://developer.apple.com/app-store/review/guidelines/

## Owner decisions and evidence still required

| Owner | Required decision or evidence |
|---|---|
| Founder | Legal publisher, verified accounts, agreements, public contacts, Apple trader declaration and EU verification where applicable |
| Product | Supported countries/devices/locales, confirmed plan claims, support URLs, payment/SKU classification and account scope |
| Engineering | Bundle/package IDs and signing, build SDKs, minimum OS, AAB/archive, entitlements, SDK inventory/signatures, native icon tests and native screenshot captures |
| Privacy / legal | Actual collection/sharing/retention map, App Privacy/Data safety, privacy/deletion URLs, account-deletion implementation, permissions and encryption answers |
| QA / release | Reviewer access without expiring OTPs, provisioning/purchase failure cases, compatibility/accessibility, personal-account testing gate if applicable, monitoring and release controls |

Actual reviewer credentials belong only in the secure consoles, never this
public studio. Do not infer “no data collected”, “no ads”, unrestricted eSIM
eligibility, automatic payment exemptions, age ratings or encryption declarations.
https://developer.apple.com/app-store/review/guidelines/
https://support.google.com/googleplay/android-developer/answer/17517561?hl=en
https://support.google.com/googleplay/android-developer/answer/14151465?hl=en

## Release handoff order

1. Complete native implementation and verify actual SDK/data/payment behavior.
2. Validate native icon integration; approved flat geometry stays at 43.5%.
3. Replace the six captures separately for iOS and Android, then approve copy.
4. Complete console metadata, public URLs, legal/account declarations and access.
5. Validate signed builds on real devices and in the store consoles.
6. Export upload assets without review labels only after the above signoff.
7. Perform final submission review. No submission was made by this workspace.
