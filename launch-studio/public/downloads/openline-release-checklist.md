# Openline release checklist

All initial items require review or evidence. Nothing here is store approval.

- [ ] Approve the smaller icon (Both; required)
  Owner: Design
  Paul requested 10–20% smaller than the 62% candidate. Review 52.7% (15% smaller), with 55.8% and 49.6% alternatives. Test the separate 48dp Android adaptive mark on real launchers.

- [ ] Integrate icons in release targets (Both; required)
  Owner: Engineering
  Import the Xcode catalog; merge Android resources; verify masks and dark/themed variants in the actual builds.

- [ ] Review the 12 screenshot compositions (Both; recommended)
  Owner: Design
  These are rendered from the supplied React design reference, not signed iOS or Android builds. Approve the direction only.

- [ ] Recapture from the native release builds (Both; required)
  Owner: Engineering
  Replace the design-reference imagery with accurate platform-native screens. Remove draft labels only after comparison and approval.

- [ ] Approve the Play feature graphic (Google; required)
  Owner: Design
  1024 × 500 RGB PNG included. Verify UI, language and claims against the Android build.

- [ ] Verify store copy and every claim (Both; required)
  Owner: Product
  Check features, plan availability, pricing language and support information. No coverage numbers or activation-speed claims are assumed.

- [ ] Choose launch languages (Both; recommended)
  Owner: Product
  English draft supplied. Commission French and Portuguese localization only for supported app languages. Each needs reviewed text and screenshots.

- [ ] Decide supported device families (Both; conditional)
  Owner: Engineering
  Phone-first is a proposal, not a build setting. If iPad/tablet support is enabled, create and verify native large-screen layouts and screenshots.

- [ ] Verify publishing accounts (Both; required)
  Owner: Founder
  Confirm legal publishing entity, enrollment, agreements, contact details and account verification. Organization accounts are recommended for a company app.

- [ ] Reserve final app identifiers (Both; required)
  Owner: Engineering
  Confirm the final bundle ID/package before creation. com.openline.app is only a proposed value and has not been reserved or checked.

- [ ] Build with the current Apple SDK (Apple; required)
  Owner: Engineering
  Use Xcode 26+ and iOS SDK 26+ for current uploads. This is not the minimum supported iOS version.

- [ ] Target Android API 36+ (Google; required)
  Owner: Engineering
  New app/update target requirement as of the research date; do not assume a policy extension. Choose minSdk separately based on dependencies.

- [ ] Complete signing and release artifacts (Both; required)
  Owner: Engineering
  Upload a signed iOS archive through the developer workflow and a signed Android App Bundle with Play App Signing configured. No builds are included here.

- [ ] Map actual data and SDK behavior (Both; required)
  Owner: Privacy owner
  Inventory identifiers, eSIM/network data, transactions, diagnostics, support and analytics. Determine collection, sharing, purposes and retention from the actual build.

- [ ] Publish and verify a privacy policy (Both; required)
  Owner: Privacy owner
  Provide a public privacy URL and in-app access. Verify owner contact, data practices, retention and deletion. Do not publish a generic policy as if it reflects the app.

- [ ] Complete privacy disclosures (Both; required)
  Owner: Privacy owner
  Complete App Privacy and Data safety from the verified data map. No “no data collected”, “no tracking” or “no ads” answers are assumed.

- [ ] Implement and test account deletion (Both; conditional)
  Owner: Engineering
  If accounts can be created: in-app deletion for Apple; an in-app route plus a public external deletion-request URL for Google. Deactivation alone is not sufficient.

- [ ] Review privacy manifests and permissions (Both; conditional)
  Owner: Engineering
  Audit required-reason APIs, SDK manifests and runtime permissions. Request ATT only if the app actually tracks under Apple’s definition.

- [ ] Verify the login experience (Apple; conditional)
  Owner: Engineering
  The supplied UI shows social login. Confirm implemented providers and §4.8 equivalent-login requirements or an applicable exception.

- [ ] Confirm the eSIM payment classification (Both; required)
  Owner: Product / legal
  Document each SKU, consumption, merchant model and checkout. Telecom/outside-app treatment may apply, but no blanket prepaid-eSIM exemption is presumed.

- [ ] Prepare a working review account (Both; conditional)
  Owner: Engineering
  Provide full/free review access, no expiring OTP dependency, clear installation instructions and a safe provisioning path. Store secrets only in the consoles.

- [ ] Complete age and audience questionnaires (Both; required)
  Owner: Product
  Answer age rating, target audience, content rating and ads declarations from actual features and SDK behavior. Do not assume 4+ or Everyone.

- [ ] Assess export compliance (Apple; required)
  Owner: Engineering / legal
  Inspect encryption usage and answer Apple’s export-compliance flow for the actual binary. Do not automatically set ITSAppUsesNonExemptEncryption to false.

- [ ] Verify EU trader and public contacts (Apple; conditional)
  Owner: Founder
  Declare actual trader status; complete EU trader verification if applicable. Approve public business address, phone and email.

- [ ] Resolve personal-account testing gate (Google; conditional)
  Owner: Release owner
  If a personal account was created after 13 Nov 2023: 12 testers continuously opted in for 14 days, then production-access approval. Account type/date are unknown.

- [ ] Run real-device release QA (Both; required)
  Owner: QA
  Test unsupported/locked phones, installation, payment failure, low/no connectivity, top-up, deletion and accessibility. Native eSIM functions cannot be certified from a web gallery.

- [ ] Verify support and public URLs (Both; required)
  Owner: Product
  Confirm live support, privacy and deletion pages. A proposed URL is not evidence that a page exists or meets policy.

- [ ] Choose rollout and release control (Both; recommended)
  Owner: Release owner
  Recommend manual Apple release after approval, and controlled Google production rollout as available. Confirm countries, availability and monitoring.

- [ ] Final submission review (Both; required)
  Owner: Release owner
  Compare every listing asset and declaration to the signed build. This workspace does not submit to either store.
