# Openline · Media Kit

Public brand assets for **Openline** — eSIMs that always get the best signal.

> Instant data in **190+ countries**. Multi-carrier Tier-1 networks, automatic switching, no roaming bills, no SIM cards. Activates in 30 seconds. Loved by **1M+ travellers**.
>
> Website: [openline.com](https://openline.com)

This repo is the canonical public host for the Openline logo, wordmark, social templates and animated brand. Hot-link freely from press articles, partner pages, decks, status pages, auth screens and anywhere else Openline needs to render.

---

## At a glance

| You need… | Grab… |
| --- | --- |
| The Openline **symbol** (the mark) on a transparent background | [`logo/png/openline-logo-color.png`](logo/png/openline-logo-color.png) |
| The Openline **wordmark** (the typeset name) | [`wordmark/png/openline-wordmark-color.png`](wordmark/png/openline-wordmark-color.png) |
| A vector source for print, signage, swag | [`logo/eps/openline-logo-color.eps`](logo/eps/openline-logo-color.eps) · [`logo/ai/openline-logo.ai`](logo/ai/openline-logo.ai) · [`logo/pdf/openline-logo.pdf`](logo/pdf/openline-logo.pdf) |
| A square social-card logo (e.g. avatar, OG image) | [`social/openline-social-logo-orange.png`](social/openline-social-logo-orange.png) |
| A YouTube channel watermark | [`social/openline-youtube-watermark.png`](social/openline-youtube-watermark.png) |
| A 512×512 mark for auth pages, favicons, app icons | [`openline-mark-512.png`](openline-mark-512.png) |
| The Openline **animated loader** (looping, ~1s) | [`animation/loading-loop/openline-loading-loop.mp4`](animation/loading-loop/openline-loading-loop.mp4) · `.gif` · `.lottie.json` |
| Horizontal / square / vertical brand animations for video | [`animation/`](animation/) |

---

## Hot-link URLs (raw GitHub)

These URLs are stable as long as the `main` branch exists. They serve over HTTPS with `Content-Type: image/png` (or the matching MIME) and aggressive CDN caching.

```
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/openline-mark-512.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/logo/png/openline-logo-color.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/wordmark/png/openline-wordmark-color.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/social/openline-social-logo-orange.png
https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/animation/loading-loop/openline-loading-loop.gif
```

For very high traffic, mirror through Cloudflare or jsDelivr:

```
https://cdn.jsdelivr.net/gh/paulfxyz/openline-brand-assets@main/openline-mark-512.png
```

jsDelivr fronts GitHub raw with a global CDN, no rate-limit concerns.

---

## Repository layout

```
openline-brand-assets/
├── openline-mark-512.png          ← 512×512 mark used for auth pages, favicons, app icons
│
├── logo/                          ← The Openline symbol (the mark, the circle)
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
    ├── favicon/                   ← Lottie favicon animations (3 variants)
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
    path:      'https://raw.githubusercontent.com/paulfxyz/openline-brand-assets/main/animation/loading-loop/openline-loading-loop.lottie.json'
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

---

## Brand basics

| Element | Spec |
| --- | --- |
| **Primary mark** | The Openline symbol — use on a clean background |
| **Wordmark** | Typeset "Openline" — pairs with the mark or stands alone |
| **Primary colour** | Openline orange (see `social/openline-social-logo-orange.png` for the canonical hex value baked into the artwork) |
| **Backgrounds** | Use the **white** variant on dark surfaces, **black** on light surfaces, **color** on neutral surfaces |
| **Clear space** | Keep at least the height of the mark's stroke as breathing room on every side |
| **Don'ts** | Do not recolour, rotate, distort, outline, drop-shadow, or place the mark on photography without a solid contrast plate |

---

## Usage policy

These files are published so that journalists, partners, integrators and customers can reference Openline accurately and visually. By using the assets in this repo, you agree to:

- Use the assets **as-is** — no recolouring, rotation, or distortion
- Not imply partnership, endorsement, or affiliation that doesn't exist
- Not use the assets for products, services, or content that compete with or disparage Openline
- Respect Openline's trademarks: "Openline" and the Openline mark are trademarks of Openline

For anything beyond standard editorial / partner usage — co-branding, merchandise, paid placement — email **ask@openline.com** before you ship.

---

## Press contact

- **Press / partnerships**: [ask@openline.com](mailto:ask@openline.com)
- **Web**: [openline.com](https://openline.com)

---

## Changelog

- **2026-06-14** — Initial media-kit drop: mark, wordmark, social, loading loop, favicon animations, horizontal / square / vertical animation sets (76 files, ~78 MB)
