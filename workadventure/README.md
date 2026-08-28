# WorkAdventure SDK

Openline × WorkAdventure app-launcher: self-contained HTML previews of every "app"
we've designed for the WorkAdventure virtual-office SDK. Open any file in a browser
to see the finished UI; use the launcher for a bird's-eye tour of the whole set.

## What's inside

```
workadventure/
├── index.html                 ← App launcher (start here — grid of every app with a real screenshot)
├── readme.html                ← Full narrative README rendered as a styled HTML page
├── links.html                 ← Cross-reference index of every app URL
├── sdk.html                   ← SDK overview / integration reference
└── apps/
    ├── <slug>.html            ← 36 individual app UI previews (self-contained HTML)
    └── screenshots/
        ├── <slug>.png         ← 640×400 launcher thumbnail (one per app)
        └── full/<slug>.png    ← 1280×800 full-resolution capture (for docs, press)
```

### Screenshots (v1.3+)

Every app now has a **real screenshot** rendered from the actual HTML — no mockups, no
placeholders. The launcher displays the 640×400 thumbnail on each card and falls back to
the emoji if the image fails to load. Full 1280×800 captures live in `apps/screenshots/full/`
for use in docs, press kits, and app-store listings.

To **re-generate** screenshots after an app change: serve the folder with any static
server (`python3 -m http.server` from `workadventure/`), then run Playwright over
`http://localhost:PORT/apps/*.html` at 1280×800 viewport, save as PNG, and resize to
640×400 for the launcher thumbs. Any headless-browser tool works; the requirement is
just a real render (fonts, charts, gradients all need to load).

## The apps (36)

Each file in `apps/` is a **single, self-contained** HTML page — no build step, no
external CSS, no runtime dependencies beyond Google Fonts. Drop it on any static host
and it works.

| Category | Apps |
| --- | --- |
| **Productivity** | `todo`, `notes`, `pomodoro`, `calendar`, `standup`, `dashboard`, `projects`, `files`, `upload`, `snippets` |
| **Comms** | `chat`, `voice`, `poll`, `announce`, `reactions`, `directory`, `status`, `onboarding` |
| **Media & fun** | `spotify`, `soundcloud`, `youtube`, `jam`, `playlist`, `poolside`, `sleepy`, `chillout` |
| **Data & AI** | `ai`, `stats`, `leaderboard`, `weather`, `database`, `backoffice`, `integrations`, `mercury` |
| **Creative** | `whiteboard`, `map` |

## Design tokens (shared across every app)

- **Background:** `#070c18` (deep space navy)
- **Surface:** `#0c1120`
- **Header:** `#090e1c`
- **Text:** `#dde6ff`
- **Muted:** `rgba(255,255,255,.45)`
- **Openline orange (accent):** `#ff6616`
- **Openline blue (primary):** `#3B3BFF`
- **Fonts:** Inter (body), Play (display), Press Start 2P (retro badges), JetBrains
  Mono (code)

## How to preview

- **Local:** open `index.html` in any browser — no server needed.
- **Hot-link:** every file is servable from raw GitHub or jsDelivr, but the launcher
  works best served together (relative `<a href="apps/foo.html">` links).
- **CDN-hosted preview:**
  ```
  https://cdn.jsdelivr.net/gh/paulfxyz/openline-brand-assets@main/workadventure/index.html
  ```

## Contributing a new app

1. Copy the closest existing file in `apps/` as your starting point.
2. Keep the shared design tokens (see above) — do not introduce new colours or fonts.
3. Name the file `<slug>.html` in lowercase, hyphen-separated.
4. Add a card to `index.html` (the launcher) so it shows up in the grid.
5. Open a PR with a screenshot in the description.
