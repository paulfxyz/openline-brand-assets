# Openline mobile icon candidate · 2026-10-06

Canonical mark geometry preserved. Default visible mark width: 52.7% of square,
15% smaller linearly than the 62% candidate. The white square is unchanged.
49.6% and 55.8% alternatives represent 20% and 10% reductions from 62%.
Original export: approximately 68%. No pre-rendered corners or shadows.

## iOS
Import ios/AppIcon.appiconset into Assets.xcassets for the standard PNG workflow.
Default icons are opaque RGB PNGs. The 1024px icon is included.
icon-composer-layers contains full-canvas background, black mark and orange accent
layers for manual assembly in Apple's Icon Composer. These are SOURCE LAYERS,
not a compiled .icon document. Validate default, dark, tinted and clear appearances
in current Xcode on-device. Appearance-reference PNGs are design references only.

## Android
Merge android/res into your application resources; do not overwrite app resources
blindly. Point android:icon to @mipmap/ic_launcher. Configure roundIcon as appropriate
for your app and test masks on real devices. v26 adaptive XML and v33 monochrome XML
are supplied. Artwork spans 48dp on a 108dp canvas, the small end of Android's
recommended 48–66dp range. Masked appearance differs from iOS; validate every mask.
This adaptive sizing is intentionally independent of the 52.7% flat icon, not
the same percentage applied to a different canvas. The 52.7% reduction applies
to iOS, legacy Android and store-listing white-square icons.
Google Play icon: 512x512 RGBA PNG, fully opaque. No rounded corners baked in.

## Release gate
These files are design candidates, not store approval. Verify rendering in the
signed release builds and approve the final size before replacing production icons.

Official guidance:
https://developer.apple.com/design/human-interface-guidelines/app-icons
https://developer.android.com/develop/ui/compose/system/icon_design_adaptive
https://support.google.com/googleplay/android-developer/answer/9866151?hl=en
