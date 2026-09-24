<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/logo/png/openline-logo-white.png" />
  <img src="https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/logo/png/openline-logo-color.png" alt="Openline" width="140" height="140" />
</picture>

# Openline · Media Kit

**Openline's public brand library: identity, motion, app icons, mobile Figma and React sources, web styles, payment logos, email templates and WorkAdventure previews.**

[![Version](https://img.shields.io/badge/media--kit-v1.4-FF6616?style=flat-square)](https://github.com/paulfxyz/openline-brand-assets/releases)
[![License](https://img.shields.io/badge/license-Brand%20Usage%20Policy-1A1A1A?style=flat-square)](#usage-policy)
[![Mobile](https://img.shields.io/badge/mobile-19%20screens-2563EB?style=flat-square)](mobile/)
[![App icons](https://img.shields.io/badge/app%20icons-iOS%20%2B%20Android-22C55E?style=flat-square)](app-icons/)
[![Formats](https://img.shields.io/badge/formats-PNG%20·%20JPG%20·%20SVG%20·%20EPS%20·%20AI%20·%20PDF%20·%20MP4%20·%20GIF%20·%20Lottie%20·%20HTML%20·%20TSX-22C55E?style=flat-square)](#repository-layout)
[![CDN](https://img.shields.io/badge/CDN-jsDelivr%20·%20Cloudflare-F38020?style=flat-square)](#cdn-and-hot-linking)
[![Hot-link](https://img.shields.io/badge/hot--link-friendly-9333EA?style=flat-square)](#hot-link-urls-raw-github)
[![Status](https://img.shields.io/badge/status-actively%20maintained-22C55E?style=flat-square)](#changelog)
[![Website](https://img.shields.io/badge/openline.com-Visit-FF6A00?style=flat-square)](https://openline.com)
[![Contact](https://img.shields.io/badge/contact-ask%40openline.com-1A1A1A?style=flat-square)](mailto:ask@openline.com)

</div>

---

> **Openline** is an eSIM provider that always gets the best signal. Instant data in **190+ countries**, multi-carrier Tier-1 networks, automatic switching, no roaming bills, no SIM cards, activates in **30 seconds**. Loved by **1M+ travellers**.
>
> Website: **[openline.com](https://openline.com)**

This repository is the **single source of truth** for everything that visually represents Openline in the wild — press articles, partner pages, decks, status pages, auth screens, integrations, conference signage, integrator dashboards, third-party app stores, browser extensions, and anywhere else the brand needs to render.

Since **v1.2** it also holds the **applied brand surfaces**: the payment-method logo library, the transactional email templates and signatures, Figma code exports, and the Openline × WorkAdventure SDK app previews.

**New in v1.4:** [native app icons](app-icons/), a [19-screen React mobile gallery](mobile/), and a [dated native Figma source](figma/mobile/). The mobile gallery is a buildable UI reference with mock data, not a production native app or live checkout.

You can **hot-link freely** from these URLs (raw GitHub, jsDelivr, or your own CDN mirror). No download-and-reupload is necessary — and we'd prefer you didn't, because hot-linking guarantees you always get the latest, on-brand version.

---

## Table of contents

- [At a glance](#at-a-glance)
- [Repository layout](#repository-layout)
- [Resource areas](#resource-areas)
  - [Logo](#logo)
  - [Wordmark](#wordmark)
  - [Social](#social)
  - [Animation](#animation)
  - [Payment methods](#payment-methods)
  - [Email](#email)
  - [Figma](#figma)
  - [WorkAdventure SDK](#workadventure-sdk)
  - [App icons](#app-icons)
  - [Mobile app sources](#mobile-app-sources)
  - [Web styles](#web-styles)
- [Hot-link URLs (raw GitHub)](#hot-link-urls-raw-github)
- [CDN and hot-linking](#cdn-and-hot-linking)
- [How to use](#how-to-use)
- [Branding strategy](#branding-strategy)
- [Brand basics](#brand-basics)
- [Do / Don't gallery](#do--dont-gallery)
- [Usage policy](#usage-policy)
- [Contributing & maintenance](#contributing--maintenance)
- [Press contact](#press-contact)
- [Changelog](#changelog)

---

## At a glance

| You need… | Grab… |
| --- | --- |
| The Openline **symbol** on a transparent background | [`logo/png/openline-logo-color.png`](logo/png/openline-logo-color.png) |
| The Openline **wordmark** (typeset name) | [`wordmark/png/openline-wordmark-color.png`](wordmark/png/openline-wordmark-color.png) |
| A **vector source** for print, signage, swag | [`logo/eps/openline-logo-color.eps`](logo/eps/openline-logo-color.eps) · [`logo/ai/openline-logo.ai`](logo/ai/openline-logo.ai) · [`logo/pdf/openline-logo.pdf`](logo/pdf/openline-logo.pdf) |
| A **square social-card** logo (avatar, OG image) | [`social/openline-social-logo-orange.png`](social/openline-social-logo-orange.png) |
| A **YouTube channel watermark** | [`social/openline-youtube-watermark.png`](social/openline-youtube-watermark.png) |
| A **512×512 mark** for auth pages, favicons, app icons | [`openline-mark-512.png`](openline-mark-512.png) |
| A **2250×2250 mark** master (transparent PNG) | [`logo/png/openline-mark-2250.png`](logo/png/openline-mark-2250.png) |
| The Openline **animated loader** (looping, ~1s) | [`animation/loading-loop/openline-loading-loop.mp4`](animation/loading-loop/openline-loading-loop.mp4) · [`.gif`](animation/loading-loop/openline-loading-loop.gif) · [`.lottie.json`](animation/loading-loop/openline-loading-loop.lottie.json) |
| A **payment-method logo** (Visa, Apple Pay, PayPal, …) | [`payment-methods/svg/`](payment-methods/svg/) (100 logos) |
| A **transactional email template** (OTP, activation, code delivery, letterhead) | [`email/templates/`](email/templates/) |
| An **HTML email signature** for `ask@openline.com` or a teammate | [`email/signatures/`](email/signatures/) |
| A **Figma → React** export to lift for a component | [`figma/code-exports/`](figma/code-exports/) |
| A **WorkAdventure SDK app** preview (36 apps) | [`workadventure/apps/`](workadventure/apps/) |
| **iOS and Android app icons**, including store sizes | [`app-icons/`](app-icons/) |
| The mobile app's **native Figma source** | [`figma/mobile/openline-mobile-screens-2026-09-24.fig`](figma/mobile/openline-mobile-screens-2026-09-24.fig) |
| The **19-screen React mobile gallery** and build instructions | [`mobile/app-screens/`](mobile/app-screens/) |
| Shared **web UI styles** | [`web/openline-ui.css`](web/openline-ui.css) |

---

## Repository layout

```
openline-brand-assets/
├── openline-mark-512.png          ← 512×512 mark used for auth pages, favicons, app icons
│
├── logo/                          ← The Openline symbol (the mark)
│   ├── png/   openline-logo-{color,black,white}.png · openline-mark-2250.png
│   ├── jpg/   openline-logo-{color,black}.jpg
│   ├── eps/   openline-logo{,-color,-black,-white}.eps
│   ├── ai/    openline-logo.ai
│   └── pdf/   openline-logo.pdf
│
├── wordmark/                      ← "Openline" typeset (no mark)
│   ├── png/   openline-wordmark-{color,black,white}.png
│   ├── jpg/   openline-wordmark-{color,black}.jpg
│   ├── eps/   openline-wordmark{,-color,-black,-white}.eps
│   ├── ai/    openline-wordmark.ai
│   └── pdf/   openline-wordmark.pdf
│
├── social/                        ← Drop-in assets for Twitter/X, IG, LinkedIn, YouTube
│   ├── openline-social-logo-{black,white,orange,transparent}.png
│   ├── openline-social-logo-{black,white}-small.png
│   ├── openline-social-background{,-zoomout}.{jpg,png}
│   └── openline-youtube-watermark.png
│
├── animation/                     ← Motion graphics (MP4 + Lottie JSON + GIF preview)
│   ├── loading-loop/              ← The signature ~1s loading loop
│   ├── favicon/                   ← Lottie favicon animations
│   ├── horizontal/                ← Intro + loop + 8 reels
│   ├── square/                    ← Intro + loop + 8 reels (Instagram-ready)
│   └── vertical/                  ← Intro + loop + 8 reels (Stories / Reels)
│
├── payment-methods/               ← 100 individual payment-method logos + reference
│   ├── svg/                       ← Every method as a self-contained SVG
│   ├── app-source/                ← Hand-built SVGs used inside the mobile checkout
│   └── reference.html             ← Visual index — open in a browser
│
├── email/                         ← Transactional email templates & signatures
│   ├── templates/                 ← OTP, code delivery, activation, letterhead, SDK
│   ├── signatures/                ← Openline brand + Paul Fleury personal
│   └── component-library.html     ← Reusable table-based email components
│
├── figma/                         ← Figma → React code exports (Dev Mode copies)
│   ├── code-exports/              ← 67 TSX + SVG modules
│   ├── mobile/                    ← Native .fig snapshots and embedded thumbnails
│   └── LINKS.md                   ← Live Figma share links (design source of truth)
│
├── app-icons/                    ← Native iOS and Android app icons
│   ├── ios/AppIcon.appiconset/   ← 15 PNGs and Xcode Contents.json
│   └── android/                 ← Density icons, adaptive layers, Play Store icon
│
├── mobile/                       ← Mobile design and implementation references
│   ├── app-screens/             ← React/Vite source, lockfile and static preview/
│   └── deliveries/              ← Intake provenance, checksums and validation
│
├── web/                          ← Shared web UI CSS and usage documentation
│
├── workadventure/                 ← Openline × WorkAdventure SDK app previews
│   ├── index.html                 ← App launcher (start here)
│   ├── readme.html · links.html · sdk.html
│   └── apps/                      ← 36 self-contained app UIs
│
└── misc/                          ← Catch-all landing spot for future contributions
```

**File-format guide**

| Format | Best for |
| --- | --- |
| **PNG** | Web, app UI, decks, any digital surface needing transparency |
| **JPG** | Quick previews, email signatures, anywhere transparency isn't required |
| **SVG** | Payment-method logos, icons, any resolution-independent artwork |
| **EPS** | Print, large-format signage, anything reproduced at unknown final size |
| **AI** | Source files — editable in Adobe Illustrator |
| **PDF** | Press-ready vector, also opens in any browser or design tool |
| **MP4** | Video backgrounds, social posts, ads, in-product loops |
| **GIF** | Quick preview in emails, Slack, Notion, PRs |
| **Lottie JSON** | Native-quality animation in web / iOS / Android with tiny payloads |
| **HTML** | Email templates, signatures, WorkAdventure SDK app previews |
| **TSX** | Figma → React code exports (reference implementation) |
| **FIG** | Native Figma design snapshots for import and editing |

---

## Resource areas

### Logo
The Openline symbol — the mark that stands alone. Available in **color / black / white**, five formats (PNG, JPG, EPS, AI, PDF), plus a **2250×2250 transparent master** and the **512×512** favicon / auth mark. → [`logo/`](logo/)

### Wordmark
"Openline" typeset — the plain-language brand. Same three variants and five formats as the mark, meant for surfaces where context already introduces us (press stories, app store listings). → [`wordmark/`](wordmark/)

### Social
Ready-to-post assets for Twitter/X, Instagram, LinkedIn, YouTube: square social-card logos in **black / white / orange / transparent**, small variants, full-bleed **brand backgrounds**, and the **YouTube channel watermark**. → [`social/`](social/)

### Animation
The Openline motion system. The signature **~1-second loading loop** (MP4 · GIF · Lottie), animated **favicons**, and three format-tuned animation packs — **horizontal / square / vertical**, each with intro, loop and 8 reels. → [`animation/`](animation/)

### Payment methods
**100 individual payment-method logos** as self-contained SVGs (cards, wallets, buy-now-pay-later, bank transfers, crypto), plus 6 hand-built app-source logotypes and a standalone HTML visual index. → [`payment-methods/`](payment-methods/) · [reference.html](payment-methods/reference.html)

### Email
The applied brand in transactional email: **OTP**, **code delivery**, **eSIM activation**, **letterhead**, **UI SDK announcement**, **WorkAdventure SDK announcement**, an **email component library** and **HTML signatures** (Openline brand + Paul Fleury personal). Every template is table-based, inline-styled, and battle-tested across mail clients. → [`email/`](email/)

### Figma

Legacy named React/TSX exports live in [`figma/code-exports/`](figma/code-exports/), while native mobile `.fig` snapshots now live in [`figma/mobile/`](figma/mobile/). [`LINKS.md`](figma/LINKS.md) records supplied live design links and companion code; archived snapshots and live files may evolve independently.

### WorkAdventure SDK
Openline × WorkAdventure: **36 self-contained HTML app previews** for the virtual-office SDK (todo, notes, pomodoro, calendar, chat, voice, whiteboard, stats, AI, and more), an **app launcher**, and an **integration reference**. Same design tokens as the Openline product. → [`workadventure/`](workadventure/) · [launcher](workadventure/index.html)

### App icons

[`app-icons/`](app-icons/) contains 24 PNGs: 15 for the Xcode catalog and nine for Android, including legacy density variants, three adaptive layers and a Play Store icon. Native filenames are preserved, and the platform README explains how to integrate them without replacing the transparent web/brand mark.

### Mobile app sources

[`mobile/`](mobile/) connects the native design, icon pack and standalone React/Vite screen gallery. Its 19 screens cover login, dashboard, eSIM management, country and plan selection, checkout, account/settings, connection states and six variants.

The gallery offers an overview and a phone-sized screen switcher. Source, asset dependencies, a lockfile, prebuilt preview and [delivery provenance](mobile/deliveries/2026-09-24.md) are included; all service and account data are mock content.

### Web styles

[`web/`](web/) contains the shared `openline-ui.css` stylesheet and its integration notes. This existing web resource is separate from the mobile gallery's precompiled stylesheet; consult each surface's own documentation before combining styles or tokens.

---

## Hot-link URLs (raw GitHub)

These URLs are **stable as long as the `main` branch exists**. They serve over HTTPS with the correct `Content-Type` and aggressive CDN caching.

```
# Brand identity
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/openline-mark-512.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/logo/png/openline-logo-color.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/logo/png/openline-logo-black.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/logo/png/openline-logo-white.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/logo/png/openline-mark-2250.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/wordmark/png/openline-wordmark-color.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/social/openline-social-logo-orange.png

# Motion
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/animation/loading-loop/openline-loading-loop.gif
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/animation/loading-loop/openline-loading-loop.mp4
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/animation/loading-loop/openline-loading-loop.lottie.json

# Payment methods
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/payment-methods/svg/visa.svg
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/payment-methods/svg/mastercard.svg
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/payment-methods/svg/apple-pay.svg
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/payment-methods/svg/google-pay.svg
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/payment-methods/svg/paypal.svg
```

---

## CDN and hot-linking

For low-traffic embeds (a press article, an investor deck, an internal status page), raw GitHub is fine.

For **high-traffic** placements — public-facing product surfaces, marketing pages, browser extensions, mobile apps — front the assets through a CDN.

### jsDelivr (recommended, zero-config)

```
https://cdn.jsdelivr.net/gh/paulfxyz/openline-brand-assets@main/openline-mark-512.png
https://cdn.jsdelivr.net/gh/paulfxyz/openline-brand-assets@main/logo/png/openline-logo-color.png
https://cdn.jsdelivr.net/gh/paulfxyz/openline-brand-assets@main/payment-methods/svg/visa.svg
https://cdn.jsdelivr.net/gh/paulfxyz/openline-brand-assets@main/animation/loading-loop/openline-loading-loop.lottie.json
```

Pin to a tag (`@v1.2`) instead of `@main` for immutable, cache-forever URLs in production.

### Cloudflare / your own CDN

Set up a Worker or Transform Rule that proxies `https://brand.yourdomain.tld/<path>` to `https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/<path>` with `Cache-Control: public, max-age=31536000, immutable`.

---

## How to use

### As an `<img>` tag

```html
<img
  src="https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/logo/png/openline-logo-color.png"
  alt="Openline"
  width="120"
  height="120"
/>
```

### As a Lottie animation (web)

```html
<script src="https://cdn.jsdelivr.net/npm/lottie-web@latest/build/player/lottie.min.js"></script>
<div id="openline-loader" style="width:128px;height:128px"></div>
<script>
  lottie.loadAnimation({
    container: document.getElementById('openline-loader'),
    renderer:  'svg',
    loop:      true,
    autoplay:  true,
    path:      'https://cdn.jsdelivr.net/gh/paulfxyz/openline-brand-assets@main/animation/loading-loop/openline-loading-loop.lottie.json'
  });
</script>
```

### A payment-method logo in a checkout

```html
<img src="https://cdn.jsdelivr.net/gh/paulfxyz/openline-brand-assets@main/payment-methods/svg/visa.svg" alt="Visa" width="38" height="24" />
<img src="https://cdn.jsdelivr.net/gh/paulfxyz/openline-brand-assets@main/payment-methods/svg/apple-pay.svg" alt="Apple Pay" height="24" />
```

### An HTML email signature

Open [`email/signatures/openline.html`](email/signatures/openline.html) in a browser, copy everything between `<!-- SIGNATURE START -->` and `<!-- SIGNATURE END -->`, and paste into your mail client's HTML signature editor.

### As a Cloudflare Access login-page logo

In **Zero Trust → Reusable components → Custom pages → Access login page → Manage**, paste this URL into the **Logo** field:

```
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/openline-mark-512.png
```

### As a React component (Next.js)

```tsx
import Image from "next/image";

export const OpenlineMark = ({ size = 48 }: { size?: number }) => (
  <Image
    src="https://cdn.jsdelivr.net/gh/paulfxyz/openline-brand-assets@main/openline-mark-512.png"
    alt="Openline"
    width={size}
    height={size}
    priority
  />
);
```

### As a Slack workspace icon / Notion workspace icon / GitHub org avatar

Upload [`openline-mark-512.png`](openline-mark-512.png) directly — it's pre-sized to the 512×512 standard most platforms expect.

---

## Branding strategy

Openline is a **traveller-first connectivity brand**. The visual system exists to communicate three things, always:

1. **Always-on signal** — the mark and its motion language evoke a steady, continuous wave. Continuity is the message.
2. **Borderless travel** — the orange is intentionally warm, sun-lit, and globally legible. It reads the same in Lisbon, Lagos, Lima or Lahore.
3. **Premium simplicity** — restraint over ornament. We earn trust with telecom-grade reliability and software-grade polish, not with decoration.

### Visual pillars

| Pillar | What it looks like | Why it matters |
| --- | --- | --- |
| **The mark** | A single, confident circular symbol — the "line" that's always open. | Stand-alone identity. Works at 16px (favicon) and on a billboard. |
| **The wordmark** | Typeset "Openline" — geometric, low-contrast, modern. | The plain-language brand. Used when context already explains who we are. |
| **The motion system** | A ~1-second loading loop and three format-tuned animation sets. | A signature beat that's recognisable across product, social and broadcast. |
| **The colour** | Openline orange (`#FF6616`) — one primary, no gradients in the core mark. | Memorability. One colour is faster to recognise than a palette. |
| **The voice** | Direct, warm, expert. Plain numbers (190+, 30 seconds, 1M+) over adjectives. | Travellers buy reliability, not poetry. |
| **The applied surfaces** | Payment logos, email templates, launcher UIs — all built from the same tokens. | The brand doesn't stop at the logo. Every touchpoint uses the same orange, the same Play / Inter type pair, the same restraint. |

### Where the brand shows up

- **Product surfaces** — auth pages, dashboard, status page, native mobile apps
- **Marketing** — openline.com, paid creative, landing pages, partner co-marketing
- **Social** — Twitter/X, Instagram, LinkedIn, YouTube, TikTok
- **Transactional** — OTPs, receipts, activation, letterhead (see [`email/`](email/))
- **Checkout** — payment-method logos in cart, at pay, in receipts (see [`payment-methods/`](payment-methods/))
- **Ecosystem** — WorkAdventure SDK apps and integrator surfaces (see [`workadventure/`](workadventure/))
- **Press & partners** — journalist hot-link, integrator marketplaces, conference signage, slide decks
- **Internal** — investor decks, board reporting, hiring materials

### How we decide what ships

Anything in this repo has been signed off as **on-brand and reusable**. If an asset isn't here, it isn't approved for public reuse — yet. To propose a new asset, see [Contributing & maintenance](#contributing--maintenance).

---

## Brand basics

| Element | Spec |
| --- | --- |
| **Primary mark** | The Openline symbol — use on a clean background |
| **Wordmark** | Typeset "Openline" — pairs with the mark or stands alone |
| **Primary colour** | Openline orange — `#FF6616` |
| **Secondary colour** | Openline blue — `#3B3BFF` (used in the WorkAdventure surface, secondary UI accents) |
| **Type — display** | **Play** — hero titles, marketing, section headers |
| **Type — body** | **Inter** — UI, product, email body |
| **Type — mono / code** | **JetBrains Mono** — code blocks, technical surfaces |
| **Type — retro badges** | **Press Start 2P** — micro badges, easter-egg accents (WorkAdventure) |
| **Backgrounds** | White variant on dark, black on light, color on neutral |
| **Clear space** | ≥ the stroke height of the mark on every side |
| **Minimum size** | 16px (mark) · 80px (wordmark) |
| **Don'ts** | No recolour, rotate, distort, outline, drop-shadow, or busy-photo placement without a contrast plate |

---

## Do / Don't gallery

✅ **Do**

- Use the **color** mark on white / off-white / light neutral backgrounds.
- Use the **white** mark on dark surfaces (≥ 70% black equivalent) and on Openline orange.
- Use the **black** mark when colour reproduction isn't available (B&W print, fax, low-ink media).
- Use the **Lottie** version wherever possible for crispness and tiny file sizes.
- Pair the mark with the wordmark only when there's room — at small sizes, pick one.
- Use **payment-method logos** at their canonical size (38×24 for card marks) and follow each brand's own guidelines.

❌ **Don't**

- Don't recolour the mark to match a partner palette. Use the on-brand `color`, `black`, or `white` file.
- Don't add effects: no drop shadows, glows, bevels, gradients, or strokes.
- Don't rotate, skew, stretch, or crop the mark.
- Don't place the mark on busy photography without a solid contrast plate.
- Don't typeset "Openline" yourself — always use the wordmark file.
- Don't combine the mark with another logo without a clear separator and equal clear space.
- Don't rebuild a payment-method logo — always use the SVG from [`payment-methods/svg/`](payment-methods/svg/).

---

## Usage policy

These files are published so that journalists, partners, integrators and customers can reference Openline accurately and visually. By using the assets in this repo, you agree to:

- Use the assets **as-is** — no recolouring, rotation, or distortion.
- Not imply partnership, endorsement, or affiliation that doesn't exist.
- Not use the assets for products, services, or content that compete with or disparage Openline.
- Respect Openline's trademarks: **"Openline"** and the Openline mark are trademarks of Openline.
- Respect **third-party trademarks** — the payment-method logos in [`payment-methods/`](payment-methods/) are trademarks of their respective owners, reproduced for identification and interoperability. Follow each brand's own usage guidelines.

For anything beyond standard editorial / partner usage — co-branding, merchandise, paid placement, large-scale physical signage — email **[ask@openline.com](mailto:ask@openline.com)** before you ship.

---

## Contributing & maintenance

This repo is **actively maintained**. Expect regular drops — new sequences, refreshed motion, seasonal variants, partner co-marks (when approved), and additional formats as we encounter new surfaces.

### Open a request

- **Need a format that's missing?** (SVG, WebP, AVIF, AV1, APNG, specific aspect ratio…) → open an [issue](https://github.com/paulfxyz/openline-brand-assets/issues).
- **Need a payment method we don't ship yet?** → open an issue with the brand name and a link to their brand assets page.
- **Spotted a stale file, broken link, or off-brand asset in the wild?** → open an issue with a screenshot and the URL.
- **Building a partner co-mark or co-branded surface?** → email **[ask@openline.com](mailto:ask@openline.com)** first.

### Submit a contribution

Pull requests are welcome for:

- Additional **language variants** of the wordmark (sub-brand or localised lockups).
- Additional **format conversions** of files already present (e.g. an SVG made from an existing EPS).
- Additional **payment-method logos** (drop into `payment-methods/svg/`, add to `reference.html`, follow the sizing conventions in [payment-methods/README.md](payment-methods/README.md)).
- Additional **email templates** or template refreshes (see [email/README.md](email/README.md) — table-based, inline-styled).
- Additional **WorkAdventure apps** (see [workadventure/README.md](workadventure/README.md) — reuse the shared design tokens).
- **Documentation** improvements — clearer examples, more framework snippets, translations of this README.

PRs that modify the **core mark, wordmark, or primary colour** will not be merged — those changes go through internal brand review and ship as a new tagged release.

### Versioning

This media kit follows lightweight semver:

- **Major** (`v2.0`) — the mark, wordmark, or primary colour materially change.
- **Minor** (`v1.1`, `v1.2`, …) — new asset families, new formats, new motion sets, restructure that breaks no existing hot-link.
- **Patch** (`v1.2.1`) — file-level fixes (compression, metadata strip, small re-export) with no URL changes.

Tag a release on GitHub when bumping the version so consumers can pin `@v1.2` instead of `@main` for production embeds.

### Maintainer

- **[@paulfxyz](https://github.com/paulfxyz)** — repository owner, brand custodian.

---

## Press contact

- **Press / partnerships**: [ask@openline.com](mailto:ask@openline.com)
- **Web**: [openline.com](https://openline.com)
- **Issues / asset requests**: [github.com/paulfxyz/openline-brand-assets/issues](https://github.com/paulfxyz/openline-brand-assets/issues)

---

## Changelog

### v1.4: 2026-09-24

- Added `app-icons/`: 24 native app PNGs with the original Xcode catalog and Android resource names.
- Archived `figma/mobile/openline-mobile-screens-2026-09-24.fig` unchanged, with its embedded thumbnail and supplied live Figma reference.
- Added `mobile/app-screens/`: 19 React/TypeScript screen entries, local image/SVG dependencies, lockfile and rebuilt static preview.
- Fixed the missing demo payment registry and PNG type declarations; made Vite output subdirectory-safe.
- Fixed screen deep links to prefer exact names, including the `Me` account screen.
- Updated Vite from 6.3.5 to 6.4.3 and added an explicit type-check command.
- Added mobile intake checksums, usage notes and regeneration instructions. Listed the existing `web/` library in the resource directory.
- Preserved all existing asset paths and the transparent, theme-aware README hero.

### v1.3 — 2026-08-28

- 🖼️ **Every WorkAdventure app now has a real screenshot** — 74 new PNGs (640×400 launcher thumbs + 1280×800 full captures) rendered from the actual HTML, no mockups. The launcher grid displays them inline, with an emoji fallback if a thumbnail fails to load.
- ✏️ **Renamed every Figma export** from Figma's generic auto-labels (`Frame1.tsx`, `Container.tsx`, `List.tsx`…) to descriptive `kebab-case` filenames like `hero-best-signal.tsx`, `carriers-grid-34.tsx`, `payment-list-wechat.tsx`, `chevron-glyph.tsx`. Shared `svg-*.ts` path-data modules kept their hashed names.
- 📖 [`figma/README.md`](figma/README.md) now includes a grouped index of the renamed components (Hero & marketing · Coverage & carriers · Checkout / payment · Icons & glyphs).
- 📚 [`workadventure/README.md`](workadventure/README.md) documents the new `apps/screenshots/` folder and the re-generation workflow.
- ✅ No breaking changes to hot-links for identity assets (logo, wordmark, social, animation, payment methods, email). Figma exports were renamed, so anyone deep-linking to `figma/code-exports/Frame*.tsx` should switch to the new filenames.

### v1.2 — 2026-07-22

- 📦 **Massive expansion** — the repo now covers applied brand surfaces, not just identity.
- 💳 Added **`payment-methods/`** — 100 payment-method SVGs (cards, wallets, BNPL, bank transfers, crypto), 6 hand-built app-source logotypes, and a standalone HTML visual reference.
- ✉️ Added **`email/`** — transactional templates (OTP, code delivery, eSIM activation, letterhead, UI SDK, WorkAdventure SDK), an email component library, and two HTML signatures (Openline brand + Paul Fleury personal).
- 🎨 Added **`figma/`** — 67 React/TSX components auto-exported from Figma Dev Mode, plus `LINKS.md` for the live Figma share links.
- 🕹️ Added **`workadventure/`** — 36 self-contained HTML app previews for the Openline × WorkAdventure SDK, an app launcher, integration reference, and rendered README.
- 🖼️ Added **`logo/png/openline-mark-2250.png`** — 2250×2250 transparent master of the mark.
- 🗑️ Added **`misc/`** — catch-all landing spot for future one-off contributions.
- 📝 Rewrote the main README to cover the eight areas, updated brand basics with the full typography stack (Play, Inter, JetBrains Mono, Press Start 2P) and the secondary Openline blue (`#3B3BFF`).
- ✅ No breaking changes — every hot-link from v1.1 still resolves.

### v1.1 — 2026-06-15

- 📝 Rewrote README with full table of contents, badges, and richer guidance.
- 🎯 Added Branding strategy section (pillars, surfaces, decision principles).
- ✅ Added Do / Don't gallery.
- 🌐 Added CDN and hot-linking guidance (jsDelivr, Cloudflare proxy pattern).
- 🧩 Added framework usage snippets (React / Next.js, Slack / Notion / GitHub avatars).
- 🤝 Added Contributing & maintenance section with PR scope, versioning, and request workflow.
- 📦 No file changes — every hot-link from v1.0 still resolves.
- 🎨 Hero image switches between color / white mark via `<picture>` + `prefers-color-scheme`.

### v1.0 — 2026-06-14

- Initial media-kit drop: mark, wordmark, social, loading loop, favicon animations, horizontal / square / vertical animation sets (76 files, ~78 MB).

---

<div align="center">

<sub>Made in Lisbon · © Openline · <a href="https://openline.com">openline.com</a></sub>

</div>
