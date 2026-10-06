export const screens = [
  {slug:'dashboard',title:'Your next trip. Connected.',short:'Stay connected',detail:'A clear view of your travel data.',screen:'Dashboard'},
  {slug:'countries',title:'Find your place. Find your plan.',short:'Explore destinations',detail:'Find a destination and compare available plans.',screen:'Countries'},
  {slug:'plans',title:'A plan for your kind of trip.',short:'Choose a plan',detail:'Compare data and validity for your journey.',screen:'Plans · 3 · options'},
  {slug:'esims',title:'All your eSIMs. One clear view.',short:'Manage your eSIMs',detail:'Keep travel connections in one place.',screen:'My eSIMs'},
  {slug:'profile',title:'Your connection. At a glance.',short:'See the details',detail:'Plan details and installation information.',screen:'eSIM profile (activated)'},
  {slug:'settings',title:'Make yourself at home.',short:'Make it yours',detail:'Manage your preferences.',screen:'Settings'}
];
export const copyDefaults={
  apple:{
    name:'Openline: Travel eSIM',
    subtitle:'Mobile data for your next trip',
    promotional:'Plan your next connection with Openline. Explore travel eSIM plans, keep your eSIMs together, and check your plan details in one place.',
    keywords:'travel,data,international,roaming,internet,connectivity,abroad,holiday,mobile',
    description:`Meet Openline, your travel eSIM companion.

Explore mobile data plans for your next destination and keep your travel connections in one place.

FIND A PLAN FOR YOUR TRIP
Browse destinations and compare available data allowances and validity periods. Review the plan details before you buy.

KEEP YOUR eSIMs TOGETHER
View your eSIMs, find installation information and check the details of your current plans from a single dashboard.

TRAVEL PREPARED
Before purchasing, check that your device supports eSIM and is network-unlocked. Plan availability, coverage and service conditions vary by destination and provider.

Openline is free to download. Mobile data plans are purchased separately. Review each plan's pricing, validity, activation conditions and included services before checkout.

Need help? Visit openline.com for support information.`,
    reviewNotes:`Openline provides travel eSIM connectivity.

Before submission, the release owner must enter a working, non-expiring review account through App Store Connect's secure review fields. Do not put credentials in this workspace.

Explain: supported eSIM devices; provisioning and installation flow; any geography or hardware constraints; how a reviewer can access all functionality without a real purchase or an OTP dependency.

Describe the exact connectivity product and payment model, and confirm the applicable store payment policy. The screenshots must match this submitted build.

Provide tested steps for account deletion, support access, purchases and installation. Replace this preparation note with the verified build-specific instructions.`
  },
  google:{
    name:'Openline: Travel eSIM',
    shortDescription:'Find travel eSIM plans and manage your mobile data in one place.',
    description:`Travel with your mobile data organised.

Openline brings travel eSIM plans and connection details into one place, helping you prepare for your next trip.

EXPLORE YOUR DESTINATION
Browse destinations and compare available data allowances and validity periods. Review the details and choose the plan that fits your journey.

MANAGE YOUR eSIMs
Keep your eSIMs together. Find installation information and review your plan details from a clear dashboard.

BEFORE YOU TRAVEL
Check that your phone supports eSIM and is network-unlocked before purchasing. Availability, network coverage and service conditions depend on the destination and provider.

The app is free to download. Mobile data plans are purchased separately. Check the price, validity, activation conditions and included services shown for each plan before checkout.

Visit openline.com for support information.`,
    releaseNotes:'Initial release of Openline. Explore travel eSIM plans and manage your eSIMs in one place. Verify this summary against the features in the release build before publishing.'
  }
};
export const fieldSpecs={
 apple:[['name','App name',30],['subtitle','Subtitle',30],['promotional','Promotional text',170],['keywords','Keywords',100,'bytes'],['description','Description',4000],['reviewNotes','Review notes template',4000,'bytes']],
 google:[['name','App name',30],['shortDescription','Short description',80],['description','Full description',4000],['releaseNotes','Release notes draft',500]]
};
export const tasks=[
 ['icon','Approve the smaller icon','Creative','Both','review','Review the 62% iOS/store artwork and test the separate 48dp Android adaptive mark on real launchers.','apple-icons','Design','required'],
 ['native-icons','Integrate icons in release targets','Build','Both','todo','Import the Xcode catalog; merge Android resources; verify masks and dark/themed variants in the actual builds.','android-icons','Engineering','required'],
 ['art','Review the 12 screenshot compositions','Creative','Both','review','These are rendered from the supplied React design reference, not signed iOS or Android builds. Approve the direction only.','google-assets','Design','recommended'],
 ['captures','Recapture from the native release builds','Creative','Both','blocked','Replace the design-reference imagery with accurate platform-native screens. Remove draft labels only after comparison and approval.','apple-screenshots','Engineering','required'],
 ['feature','Approve the Play feature graphic','Creative','Google','review','1024 × 500 RGB PNG included. Verify UI, language and claims against the Android build.','google-assets','Design','required'],
 ['copy','Verify store copy and every claim','Listing','Both','review','Check features, plan availability, pricing language and support information. No coverage numbers or activation-speed claims are assumed.','apple-copy','Product','required'],
 ['locales','Choose launch languages','Listing','Both','todo','English draft supplied. Commission French and Portuguese localization only for supported app languages. Each needs reviewed text and screenshots.','google-assets','Product','recommended'],
 ['tablets','Decide supported device families','Build','Both','blocked','Phone-first is a proposal, not a build setting. If iPad/tablet support is enabled, create and verify native large-screen layouts and screenshots.','apple-screenshots','Engineering','conditional'],
 ['accounts','Verify publishing accounts','Accounts','Both','blocked','Confirm legal publishing entity, enrollment, agreements, contact details and account verification. Organization accounts are recommended for a company app.','google-copy-build','Founder','required'],
 ['ids','Reserve final app identifiers','Build','Both','todo','Confirm the final bundle ID/package before creation. com.openline.app is only a proposed value and has not been reserved or checked.','google-copy-build','Engineering','required'],
 ['apple-sdk','Build with the current Apple SDK','Build','Apple','todo','Use Xcode 26+ and iOS SDK 26+ for current uploads. This is not the minimum supported iOS version.','apple-sdk','Engineering','required'],
 ['android-sdk','Target Android API 36+','Build','Google','todo','New app/update target requirement as of the research date; do not assume a policy extension. Choose minSdk separately based on dependencies.','google-sdk','Engineering','required'],
 ['signing','Complete signing and release artifacts','Build','Both','todo','Upload a signed iOS archive through the developer workflow and a signed Android App Bundle with Play App Signing configured. No builds are included here.','google-copy-build','Engineering','required'],
 ['privacy-map','Map actual data and SDK behavior','Privacy','Both','blocked','Inventory identifiers, eSIM/network data, transactions, diagnostics, support and analytics. Determine collection, sharing, purposes and retention from the actual build.','google-policy','Privacy owner','required'],
 ['privacy-policy','Publish and verify a privacy policy','Privacy','Both','blocked','Provide a public privacy URL and in-app access. Verify owner contact, data practices, retention and deletion. Do not publish a generic policy as if it reflects the app.','google-policy','Privacy owner','required'],
 ['privacy-label','Complete privacy disclosures','Privacy','Both','blocked','Complete App Privacy and Data safety from the verified data map. No “no data collected”, “no tracking” or “no ads” answers are assumed.','google-policy','Privacy owner','required'],
 ['deletion','Implement and test account deletion','Privacy','Both','blocked','If accounts can be created: in-app deletion for Apple; an in-app route plus a public external deletion-request URL for Google. Deactivation alone is not sufficient.','google-policy','Engineering','conditional'],
 ['sdk-manifest','Review privacy manifests and permissions','Privacy','Both','todo','Audit required-reason APIs, SDK manifests and runtime permissions. Request ATT only if the app actually tracks under Apple’s definition.','apple-review','Engineering','conditional'],
 ['login','Verify the login experience','Review','Apple','todo','The supplied UI shows social login. Confirm implemented providers and §4.8 equivalent-login requirements or an applicable exception.','apple-review','Engineering','conditional'],
 ['payments','Confirm the eSIM payment classification','Review','Both','blocked','Document each SKU, consumption, merchant model and checkout. Telecom/outside-app treatment may apply, but no blanket prepaid-eSIM exemption is presumed.','google-policy','Product / legal','required'],
 ['review-access','Prepare a working review account','Review','Both','blocked','Provide full/free review access, no expiring OTP dependency, clear installation instructions and a safe provisioning path. Store secrets only in the consoles.','apple-review','Engineering','conditional'],
 ['rating','Complete age and audience questionnaires','Listing','Both','todo','Answer age rating, target audience, content rating and ads declarations from actual features and SDK behavior. Do not assume 4+ or Everyone.','google-policy','Product','required'],
 ['export','Assess export compliance','Review','Apple','todo','Inspect encryption usage and answer Apple’s export-compliance flow for the actual binary. Do not automatically set ITSAppUsesNonExemptEncryption to false.','apple-review','Engineering / legal','required'],
 ['trader','Verify EU trader and public contacts','Accounts','Apple','blocked','Declare actual trader status; complete EU trader verification if applicable. Approve public business address, phone and email.','apple-dsa','Founder','conditional'],
 ['testing','Resolve personal-account testing gate','Testing','Google','todo','If a personal account was created after 13 Nov 2023: 12 testers continuously opted in for 14 days, then production-access approval. Account type/date are unknown.','google-testing','Release owner','conditional'],
 ['qa','Run real-device release QA','Testing','Both','todo','Test unsupported/locked phones, installation, payment failure, low/no connectivity, top-up, deletion and accessibility. Native eSIM functions cannot be certified from a web gallery.','apple-review','QA','required'],
 ['links','Verify support and public URLs','Listing','Both','blocked','Confirm live support, privacy and deletion pages. A proposed URL is not evidence that a page exists or meets policy.','google-policy','Product','required'],
 ['release','Choose rollout and release control','Release','Both','todo','Recommend manual Apple release after approval, and controlled Google production rollout as available. Confirm countries, availability and monitoring.','google-copy-build','Release owner','recommended'],
 ['submit','Final submission review','Release','Both','blocked','Compare every listing asset and declaration to the signed build. This workspace does not submit to either store.','apple-review','Release owner','required']
].map(([id,title,group,platform,status,detail,source,owner,requirement])=>({id,title,group,platform,status,detail,source,owner,requirement,notes:''}));
export const suggestedSettings=[
 ['Store identity','App name','Openline: Travel eSIM','Draft','Verify name availability in both consoles.','apple-copy'],
 ['Store identity','Category','Apple: Travel · Google: Travel & Local','Suggested','Confirm these are the best categories for the shipped app.','google-copy-build'],
 ['Store identity','Pricing','Free download; data plans purchased separately','Suggested','Confirm exact product and billing setup. Free download does not mean free data.','google-policy'],
 ['Store identity','Primary language','English (US)','Suggested','Add only languages supported and reviewed for the release.','apple-copy'],
 ['Build configuration','Bundle ID / package','com.openline.app','Unconfirmed','Proposed only; verify ownership and existing identifiers before creating.','google-copy-build'],
 ['Build configuration','Version','1.0.0 · build 1 / versionCode 1','Suggested','Only if this is the first build. Existing apps need unique/increasing build values.','google-copy-build'],
 ['Build configuration','Apple build SDK','Xcode 26+ · iOS SDK 26+','Requirement','Do not confuse the SDK with the deployment target.','apple-sdk'],
 ['Build configuration','Android target SDK','API 36+','Requirement','Current new-app/update baseline; no extension assumed.','google-sdk'],
 ['Build configuration','Minimum OS','Decide after dependency and device audit','Unconfirmed','No minimum iOS or Android version can be verified from the React mockups.','google-sdk'],
 ['Build configuration','Supported devices','Phone-first; tablets pending decision','Suggested','iPad/tablet support creates additional layout and asset work.','apple-screenshots'],
 ['Store declarations','Privacy / Data safety','Needs actual build and SDK inventory','Blocked','Do not infer disclosures from the visual design.','google-policy'],
 ['Store declarations','Age rating / audience / ads','Answer console questionnaires','Blocked','No default “Everyone”, “4+”, “no ads” or “no tracking” claim.','google-policy'],
 ['Store declarations','Encryption / export','Engineering and legal assessment','Blocked','Declare based on actual binary and encryption use.','apple-review'],
 ['Store declarations','Payment route','Confirm SKU-specific telecom treatment','Blocked','External payment may be appropriate for connectivity, but must be verified.','google-policy'],
 ['Release controls','Apple release','Manual release after approval','Suggested','Coordinate support, production APIs and the public launch.','apple-review'],
 ['Release controls','Google release','Controlled rollout where available','Suggested','Configure countries and monitoring; verify options for the first release.','google-copy-build'],
 ['Release controls','EU availability','Trader status and legal review first','Blocked','Confirm public legal/contact data before EU distribution.','apple-dsa']
].map(([group,field,value,status,detail,source])=>({group,field,value,status,detail,source}));
export const initialWorkspace={schemaVersion:1,iconSize:62,iconTone:'light',copy:copyDefaults,tasks,titles:screens.map(s=>s.title),approvedScreens:[],settingsNotes:'',updatedAt:null};
