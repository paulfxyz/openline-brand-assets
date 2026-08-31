# Openline UI — Shared Web Design System

**One CSS file, two apps in lockstep.**
Consumed by `openline-kb.pplx.app`, `openline-comp.pplx.app`, and any future Openline surface that needs the same look.

- Stylesheet: `web/openline-ui.css`
- Version: **v1.0.0**
- Font: **Inter** (400/500/600/700/800)
- Brand color: `#FF6A00`

## Include it

Use jsDelivr — GitHub raw serves CSS as `text/plain` and modern browsers refuse to apply it.

```html
<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/paulfxyz/openline-brand-assets@main/web/openline-ui.css" />
<link rel="stylesheet" href="./style.css" /> <!-- app-specific overrides -->
```

To pin a version, replace `@main` with `@v1.0.0` (once a release tag exists) or a commit SHA.

## What the stylesheet ships

| Section | What it styles |
| --- | --- |
| Tokens | `--brand`, `--ink*`, `--line*`, `--bg*`, `--ok/--err`, `--shadow-*`, `--radius*`, `--content-w`, `--hero-w` |
| Base | Body font, links, `.skip-link`, `.visually-hidden` |
| Topbar | `.topbar`, `.brand`, `.brand-word`, `.brand-sub` (also `.brand-kb` for backwards-compat), `.topnav` |
| Hero | `.hero`, `.hero-logo`, `.hero-title`, `.hero-title .accent`, `.hero-tag` |
| Search | `.search-wrap`, `.search-wrap input`, `.search-wrap .clear`, `.search-icon` |
| Filters | `.filters`, `.filters-toggle`, `.filters-panel`, `.filters-explain`, `.cats`, `.cat-btn`, `.filters-clear` |
| Results | `.results-head`, `#results-title`, `.count`, `.legend`, `.dot-ok`, `.dot-err` |
| Card grid | `.grid`, `.card`, `.card-cat`, `.card-title`, `.card-snippet`, `.card mark` |
| Row list (dense) | `.row-list`, `.row`, `.row .indicator`, `.row .meta`, `.row .name`, `.row .sub`, `.row .code`, `.row .badge` |
| Empty state | `.empty`, `.empty-title` |
| Footer | `.footer`, `.footer-count` |
| Utility pills | `.badge-pill`, `.badge-pill.ok`, `.badge-pill.err`, `.badge-pill.brand` |
| Modal shell | `.opl-modal-shell`, `.opl-modal-card` (used when embedded full-screen on openline.com) |
| Motion | Honors `prefers-reduced-motion` |

## Per-item tinting

Cards and category buttons share a tint pattern. Set `--cat` and `--cat-bg` inline (or in a scoped rule) to color the accent stripe, hover border, and mark highlight:

```css
/* KB: per-category color */
[data-cat="installation"] { --cat: #B03CE8; --cat-bg: #F3E5FA; }

/* comp: yes = green, no = red */
#compat-cats .cat-btn[data-value="yes"] { --cat: var(--ok);  --cat-bg: var(--ok-bg); }
#compat-cats .cat-btn[data-value="no"]  { --cat: var(--err); --cat-bg: var(--err-bg); }
```

## Two content layouts, one system

- **KB uses `.grid` + `.card`** (large browsable tiles with snippets)
- **Comp uses `.row-list` + `.row`** (dense table-like list, indicator + badge)

Both live in the same stylesheet. Apps pick whichever fits their content.

## Full-screen modal embed

When either app is embedded inside `openline.com` via a modal, wrap the app's root in:

```html
<div class="opl-modal-shell">
  <div class="opl-modal-card"> … app markup … </div>
</div>
```

The card fills the viewport on mobile and becomes a max-width 1280 px rounded card on desktop.

## Change process

1. Edit `web/openline-ui.css` on `main` (small, additive changes are safe — apps consume `@main`).
2. Bump the version comment at the top for anything breaking.
3. Both consuming apps pick up the change on their next page load (jsDelivr caches ~7 days at the edge — bust with a version tag or commit-SHA URL if urgent).

## Consuming apps

- [openline-kb](https://openline-kb.pplx.app) — Knowledge Base (uses `.grid`/`.card`, has a modal for full articles)
- [openline-comp](https://openline-comp.pplx.app) — eSIM Compatibility (uses `.row-list`/`.row`, has compat + brand filters)

Both keep only page-specific rules in their own `style.css`. Everything shared lives here.
