<div align="center">

<img src="https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/openline-mark-512.png" alt="Openline" width="128" height="128" />

# Openline · Media Kit

**The canonical public home for the Openline logo, wordmark, social templates and animated brand.**

[![Version](https://img.shields.io/badge/media--kit-v1.1-FF6A00?style=flat-square)](https://github.com/paulfxyz/openline-brand-assets/releases)
[![License](https://img.shields.io/badge/license-Brand%20Usage%20Policy-1A1A1A?style=flat-square)](#usage-policy)
[![Assets](https://img.shields.io/badge/assets-76%20files-2563EB?style=flat-square)](#repository-layout)
[![Formats](https://img.shields.io/badge/formats-PNG%20·%20JPG%20·%20EPS%20·%20AI%20·%20PDF%20·%20MP4%20·%20GIF%20·%20Lottie-22C55E?style=flat-square)](#repository-layout)
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

You can **hot-link freely** from these URLs (raw GitHub, jsDelivr, or your own CDN mirror). No download-and-reupload is necessary — and we'd prefer you didn't, because hot-linking guarantees you always get the latest, on-brand version.

---

## Table of contents

- [At a glance](#at-a-glance)
- [Hot-link URLs (raw GitHub)](#hot-link-urls-raw-github)
- [CDN and hot-linking](#cdn-and-hot-linking)
- [Repository layout](#repository-layout)
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
| The Openline **symbol** (the mark) on a transparent background | [`logo/png/openline-logo-color.png`](logo/png/openline-logo-color.png) |
| The Openline **wordmark** (the typeset name) | [`wordmark/png/openline-wordmark-color.png`](wordmark/png/openline-wordmark-color.png) |
| A **vector source** for print, signage, swag | [`logo/eps/openline-logo-color.eps`](logo/eps/openline-logo-color.eps) · [`logo/ai/openline-logo.ai`](logo/ai/openline-logo.ai) · [`logo/pdf/openline-logo.pdf`](logo/pdf/openline-logo.pdf) |
| A **square social-card** logo (avatar, OG image) | [`social/openline-social-logo-orange.png`](social/openline-social-logo-orange.png) |
| A **YouTube channel watermark** | [`social/openline-youtube-watermark.png`](social/openline-youtube-watermark.png) |
| A **512×512 mark** for auth pages, favicons, app icons | [`openline-mark-512.png`](openline-mark-512.png) |
| The Openline **animated loader** (looping, ~1s) | [`animation/loading-loop/openline-loading-loop.mp4`](animation/loading-loop/openline-loading-loop.mp4) · [`.gif`](animation/loading-loop/openline-loading-loop.gif) · [`.lottie.json`](animation/loading-loop/openline-loading-loop.lottie.json) |
| **Horizontal / square / vertical** brand animations for video, social, Stories, Reels | [`animation/`](animation/) |
| **Social backgrounds** (full-bleed orange brand plates) | [`social/openline-social-background.jpg`](social/openline-social-background.jpg) · [`social/openline-social-background-zoomout.jpg`](social/openline-social-background-zoomout.jpg) |

---

## Hot-link URLs (raw GitHub)

These URLs are **stable as long as the `main` branch exists**. They serve over HTTPS with the correct `Content-Type` (`image/png`, `image/jpeg`, `image/gif`, `video/mp4`, `application/json`) and aggressive CDN caching.

```
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/openline-mark-512.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/logo/png/openline-logo-color.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/logo/png/openline-logo-black.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/logo/png/openline-logo-white.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/wordmark/png/openline-wordmark-color.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/wordmark/png/openline-wordmark-black.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/wordmark/png/openline-wordmark-white.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/social/openline-social-logo-orange.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/animation/loading-loop/openline-loading-loop.gif
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/animation/loading-loop/openline-loading-loop.mp4
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/animation/loading-loop/openline-loading-loop.lottie.json
```

---

## CDN and hot-linking

For low-traffic embeds (a press article, an investor deck, an internal status page), raw GitHub is fine.

For **high-traffic** placements — public-facing product surfaces, marketing pages, browser extensions, mobile apps — front the assets through a CDN to avoid raw-GitHub rate limits and improve TTFB.

### jsDelivr (recommended, zero-config)

```
https://cdn.jsdelivr.net/gh/paulfxyz/openline-brand-assets@main/openline-mark-512.png
https://cdn.jsdelivr.net/gh/paulfxyz/openline-brand-assets@main/logo/png/openline-logo-color.png
https://cdn.jsdelivr.net/gh/paulfxyz/openline-brand-assets@main/animation/loading-loop/openline-loading-loop.lottie.json
```

jsDelivr fronts GitHub raw with a global CDN. No rate-limit concerns, automatic content negotiation, immutable URLs when you pin a tag (`@v1.1` once a release is cut) instead of `@main`.

### Cloudflare / your own CDN

If you operate a Cloudflare zone, set up a Worker or Transform Rule that proxies `https://brand.yourdomain.tld/<path>` to `https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/<path>` with `Cache-Control: public, max-age=31536000, immutable`.

---

## Repository layout

```
openline-brand-assets/
├── openline-mark-512.png          ← 512×512 mark used for auth pages, favicons, app icons
│
├── logo/                          ← The Openline symbol (the mark)
│   ├── png/   openline-logo-{color,black,white}.png
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
└── animation/                     ← Motion graphics (MP4 + Lottie JSON + GIF preview)
    ├── loading-loop/              ← The signature ~1s loading loop
    ├── favicon/                   ← Lottie favicon animations (3 variants + preview HTML)
    ├── horizontal/
    │   ├── loop/                  ← Intro + looping play
    │   └── sequences/             ← 8 horizontal-format reels
    ├── square/
    │   ├── loop/                  ← Intro + looping play (Instagram-ready)
    │   └── sequences/             ← 8 square-format reels
    └── vertical/
        ├── loop/                  ← Intro + looping play (Stories / Reels)
        └── sequences/             ← 8 vertical-format reels
```

**File-format guide**

| Format | Best for |
| --- | --- |
| **PNG** | Web, app UI, decks, any digital surface needing transparency |
| **JPG** | Quick previews, email signatures, anywhere transparency isn't required |
| **EPS** | Print, large-format signage, anything reproduced at unknown final size |
| **AI** | Source files — editable in Adobe Illustrator |
| **PDF** | Press-ready vector, also opens in any browser or design tool |
| **MP4** | Video backgrounds, social posts, ads, in-product loops |
| **GIF** | Quick preview in emails, Slack, Notion, PRs |
| **Lottie JSON** | Native-quality animation in web / iOS / Android with tiny payloads |

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

### As a Cloudflare Access login-page logo

In **Zero Trust → Reusable components → Custom pages → Access login page → Manage**, paste this URL into the **Logo** field:

```
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/openline-mark-512.png
```

### As an MP4 background

```html
<video autoplay muted loop playsinline
  src="https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/animation/loading-loop/openline-loading-loop.mp4">
</video>
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
| **The wordmark** | Typeset "Openline" — geometric, low-contrast, modern. | The plain-language brand. Used when context (a press story, an app store listing) already explains who we are. |
| **The motion system** | A ~1-second loading loop and three format-tuned animation sets (horizontal / square / vertical). | A signature beat that's recognisable across product, social, and broadcast. |
| **The colour** | Openline orange — one primary, no gradients in the core mark. | Memorability. One colour is faster to recognise than a palette. |
| **The voice** | Direct, warm, expert. Plain numbers (190+, 30 seconds, 1M+) over adjectives. | Travellers buy reliability, not poetry. |

### Where the brand shows up

- **Product surfaces** — auth pages, dashboard, status page, native mobile apps
- **Marketing** — openline.com, paid creative, landing pages, partner co-marketing
- **Social** — Twitter/X, Instagram, LinkedIn, YouTube, TikTok
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
| **Primary colour** | Openline orange (the canonical hex is baked into [`social/openline-social-logo-orange.png`](social/openline-social-logo-orange.png) and the master vectors in [`logo/ai/`](logo/ai/) and [`wordmark/ai/`](wordmark/ai/)) |
| **Backgrounds** | Use the **white** variant on dark surfaces, **black** on light surfaces, **color** on neutral surfaces |
| **Clear space** | Keep at least the height of the mark's stroke as breathing room on every side |
| **Minimum size** | 16px for the mark (use [`openline-mark-512.png`](openline-mark-512.png) downscaled), 80px for the wordmark |
| **Don'ts** | Do not recolour, rotate, distort, outline, drop-shadow, or place the mark on photography without a solid contrast plate |

---

## Do / Don't gallery

✅ **Do**

- Use the **color** mark on white, off-white, or light neutral backgrounds.
- Use the **white** mark on dark surfaces (≥ 70% black equivalent) and on the Openline orange background.
- Use the **black** mark when colour reproduction isn't available (B&W print, fax, low-ink media).
- Use the **Lottie** version wherever possible for crispness and tiny file sizes.
- Pair the mark with the wordmark only when there's room — at small sizes, pick one.

❌ **Don't**

- Don't recolour the mark to match a partner palette. Use the on-brand `color`, `black`, or `white` file.
- Don't add effects: no drop shadows, glows, bevels, gradients, or strokes.
- Don't rotate, skew, stretch, or crop the mark.
- Don't place the mark on busy photography without a solid contrast plate (a circle or rounded square in white / black / orange).
- Don't typeset "Openline" yourself — always use the wordmark file.
- Don't combine the mark with another logo without a clear separator and equal clear space.

---

## Usage policy

These files are published so that journalists, partners, integrators and customers can reference Openline accurately and visually. By using the assets in this repo, you agree to:

- Use the assets **as-is** — no recolouring, rotation, or distortion.
- Not imply partnership, endorsement, or affiliation that doesn't exist.
- Not use the assets for products, services, or content that compete with or disparage Openline.
- Respect Openline's trademarks: **"Openline"** and the Openline mark are trademarks of Openline.

For anything beyond standard editorial / partner usage — co-branding, merchandise, paid placement, large-scale physical signage — email **[ask@openline.com](mailto:ask@openline.com)** before you ship.

---

## Contributing & maintenance

This repo is **actively maintained**. Expect regular drops — new sequences, refreshed motion, seasonal variants, partner co-marks (when approved), and additional formats as we encounter new surfaces.

### Open a request

- **Need a format that's missing?** (SVG, WebP, AVIF, AV1, APNG, specific aspect ratio…) → open an [issue](https://github.com/paulfxyz/openline-brand-assets/issues) describing the surface and the use case.
- **Spotted a stale file, broken link, or off-brand asset in the wild?** → open an [issue](https://github.com/paulfxyz/openline-brand-assets/issues) with a screenshot and the URL.
- **Building a partner co-mark or co-branded surface?** → email **[ask@openline.com](mailto:ask@openline.com)** first; we'll work with you and (when ready) drop the approved co-mark here.

### Submit a contribution

Pull requests are welcome for:

- Additional **language variants** of the wordmark (sub-brand or localised lockups).
- Additional **format conversions** of files already present (e.g. an SVG made from an existing EPS).
- **Documentation** improvements — clearer examples, more framework snippets, translations of this README.

PRs that modify the **core mark or wordmark artwork** will not be merged — those changes go through internal brand review and ship as a new tagged release.

### Versioning

This media kit follows lightweight semver:

- **Major** (`v2.0`) — the mark, wordmark, or primary colour materially change.
- **Minor** (`v1.1`, `v1.2`, …) — new asset families, new formats, new motion sets, restructure that breaks no existing hot-link.
- **Patch** (`v1.1.1`) — file-level fixes (compression, metadata strip, small re-export) with no URL changes.

Tag a release on GitHub when bumping the version, so consumers can pin `@v1.1` instead of `@main` for production embeds.

### Maintainer

- **[@paulfxyz](https://github.com/paulfxyz)** — repository owner, brand custodian.

---

## Press contact

- **Press / partnerships**: [ask@openline.com](mailto:ask@openline.com)
- **Web**: [openline.com](https://openline.com)
- **Issues / asset requests**: [github.com/paulfxyz/openline-brand-assets/issues](https://github.com/paulfxyz/openline-brand-assets/issues)

---

## Changelog

### v1.1 — 2026-06-15

- 📝 **Rewrote README** with full table of contents, badges, and richer guidance.
- 🎯 Added **Branding strategy** section (pillars, surfaces, decision principles).
- ✅ Added **Do / Don't gallery** for fast onboarding of journalists, partners and integrators.
- 🌐 Added **CDN and hot-linking** guidance (jsDelivr, Cloudflare proxy pattern).
- 🧩 Added **framework usage snippets** (React / Next.js, Slack / Notion / GitHub avatars).
- 🤝 Added **Contributing & maintenance** section with PR scope, versioning, and request workflow.
- 📦 No file changes — every hot-link from v1.0 still resolves.

### v1.0 — 2026-06-14

- Initial media-kit drop: mark, wordmark, social, loading loop, favicon animations, horizontal / square / vertical animation sets (76 files, ~78 MB).

---

<div align="center">

<sub>Made in Lisbon · © Openline · <a href="https://openline.com">openline.com</a></sub>

</div>
