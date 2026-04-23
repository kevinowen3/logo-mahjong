# Logo – Mahjong Solitaire with Tech Company Logos

A browser-based Mahjong Solitaire where tiles carry tech-company logos instead of traditional Mahjong suits. Plain HTML/CSS/JS — no build step. Deployed via GitHub Pages from `main` at https://kevinowen3.github.io/logo-mahjong/.

## File layout

- [index.html](index.html) – app shell: toolbar, board wrapper, win/game-over/about modals, gallery overlay
- [script.js](script.js) – everything: `LOGOS` array, layout, tile sizing, free-tile logic, render, event wiring
- [styles.css](styles.css) – ceramic tile face, fullscreen sidebar layout, modals
- [manifest.json](manifest.json) – PWA manifest (installable on mobile)

## Key constants (top of [script.js](script.js))

```
TILE_COLS = 15   // x spans 0–14
TILE_ROWS = 8    // y spans 0–7
MAX_Z     = 4    // layers 0–4
EDGE_W    = 6    // 3D depth offset per layer (px)
```

Tile positions use a **half-grid**: some layout entries sit at `x.5` / `y.5`. `computeFree()` uses overlap covering (`|dx|<1, |dy|<1`) so a half-grid cap tile correctly covers the 2×2 integer-grid peak beneath it.

## Logo conventions (the `LOGOS` array in [script.js](script.js))

Each entry is `{ id, name, svg }` where `svg` is a template literal holding a complete `<svg>`. Rules that emerged from iteration:

- **viewBox is always `0 0 100 100`** — tile sizing assumes a 1:1 logo box.
- **No background rect when the tile's ceramic gradient should show through.** The tile face is `linear-gradient(168deg, #ffffff 0%, #eef0f4 100%)`. A solid `#ffffff` rect inside the SVG creates a visible seam against that gradient — so "white-background" logos (Intel, HP) omit the rect and rely on the tile.
- **No drop shadow on white-background logos.** `feDropShadow` casts a gray halo onto any explicit white rect, showing as off-white banding. Shadows are fine on coloured-background marks.
- **Scale foreign viewBoxes with a `transform` on a wrapping `<g>`** rather than rewriting path data. Typical pattern: `transform="translate(tx, ty) scale(s)"` where `s = targetSize / sourceSize` and `tx, ty` compensate for any non-zero origin in the source viewBox.
- **Coverage targets**: no-background marks (Chrome, Apple, Intel, HP) scale to ~98% of the 100-unit viewBox; coloured-badge marks (Amazon, AT&T, etc.) use an `rx="18"` rounded rect at `x=8 y=8 84×84` with the glyph inside; circular full-bleed marks (e.g. Xbox's gray sphere) scale to ~93% so their visual weight matches the badge marks rather than the no-background ones.

## Fullscreen / mobile specifics

Toggling `btnFullscreen` adds `body.is-fullscreen` and requests landscape orientation lock. In that mode:

- Toolbar becomes a 76–84 px left sidebar ([styles.css](styles.css) `body.is-fullscreen .toolbar`). `flex: 0 0 auto` pins it; **do not add `white-space: nowrap` to `.pairs-display` / `.tiles-display`** — in a column-flex sidebar, nowrap makes the flex min-content equal the longest label string, which overrides `max-width` and expands the toolbar past 84 px. Labels must wrap.
- Sidebar buttons use `padding: 0.3rem; line-height: 1; flex-shrink: 0` and `.toolbar-info` uses `flex-shrink: 0` — the entire column (title + 6 buttons + Pairs/Tiles) has to fit in ~360 CSS px of landscape viewport height on S22-class phones, or the bottom info gets pushed below the fold.
- `calcTileSize()` measures `board-wrapper.clientHeight/clientWidth` directly rather than `globalThis.innerHeight` — this respects `dvh` and safe-area insets. (The wrapper sizes correctly via flex; viewport-height globals diverged from true layout space on mobile.) All global references use `globalThis.*`, not `window.*`, to satisfy the project's lint rule.
- Tile aspect ratio in fullscreen is clamped `[0.85, 1.25]` — the 0.85 lower bound lets ultra-landscape phones grow tiles slightly wider-than-tall to fill horizontal space without leaving a narrow board.
- Re-render is scheduled after `resize`, `orientationchange`, and `screen.orientation` change events, with a double-fire at 200 ms and 600 ms to catch the real viewport *after* the landscape lock completes.
- The board is centered both axes inside the fullscreen board-wrapper.
- `<meta name="viewport">` does **not** set `maximum-scale` or `user-scalable=no` — both trip the `Web:S7926` a11y warning and block pinch-zoom.

## Game mechanics quick reference

- `buildTiles()` places 4 of each logo into `LAYOUT` positions, shuffled.
- `computeFree()` returns a `{uid: bool}` map of currently free tiles (not covered above, at least one of left/right free).
- `findFreePairs()` groups free tiles by `logoId` and returns pairs for hint / game-over detection.
- Win modal fires when all tiles are removed; game-over modal fires when no free pairs remain (offers Undo / Shuffle / New Game).
- `render()` also counts distinct matchable logos (free tiles of a given `logoId` with count ≥ 2) and writes it to `#freePairsCount`, reusing the already-computed `freeMap` instead of calling `findFreePairs()` a second time.

## UI chrome & event wiring

- **Game title** ([index.html](index.html) `#gameTitle`): `<span>` containing four inner spans (`.gt-l .gt-o1 .gt-g .gt-o2`) coloured with the Microsoft four-square palette (`#F25022`, `#00A4EF`, `#7FBA00`, `#FFB900`). It's clickable:
  - plain click → About modal
  - **Shift+Click → Win modal** (test harness)
  - **Ctrl+Click → Game Over modal** (test harness)
- **About modal** (`#aboutModal`): shown by `showAbout()`, which defers a one-shot capture-phase click listener on `document` via `setTimeout(..., 0)` so the click that opened it doesn't immediately close it. Any subsequent click anywhere on the page dismisses it. The date line (`.about-date` in [index.html](index.html)) is hardcoded — bump it by hand when shipping user-visible changes.
- **Status bar** is a wrapper with two spans: `#status` (message, written by `setStatus()`) and `.free-pairs-display` containing `#freePairsCount`. The count span is absolutely positioned on the right so the message stays centered. Fullscreen mode hides the whole status bar.
- **Selection / hint styling**: both use `.tile.selected` (teal ring via `box-shadow: 0 0 0 3px #00bcd4`, teal face, `z-index: 9000 !important` so the ring paints above neighbours). The hint system adds `.selected` to both tiles in a hint pair — it does not use a separate class. Any earlier `.tile.hint-glow` rule is gone; don't reintroduce it unless you also update the JS that applies the class.
- **Deselection triggers**: `deselectTile()` clears `selectedId`, `hintPair`, and `hintIndex` and re-renders. It's called by
  1. clicking the empty board surface (`e.target === boardEl`),
  2. clicking the margin around the board (`e.target.classList.contains('board-wrapper')`),
  3. pressing **Escape** (which also hides gallery, win, and game-over modals).
  Tile-on-tile clicks go through `onTileClick()` and don't touch `deselectTile()`.

## Deploying

GitHub Pages is already configured (build_type `legacy`, source `main /`). Any push to `main` auto-redeploys within ~1 minute.

**Cache-bust on CSS changes**: [index.html](index.html) loads `styles.css?v=N` — bump `N` whenever you modify [styles.css](styles.css). Mobile browsers (Chrome on Android in particular) cache aggressively and will otherwise serve the previous stylesheet even after a hard reload.

## Working on this project

- When adding or replacing a logo, match the existing conventions above — especially the viewBox and white-background rules.
- When the user provides a reference SVG, use its exact path data and scale it with a transform rather than re-tracing. If the source SVG has `<defs>` with `id="paintN_..."`, **rename the ids** (e.g., `logoid-pN`) and update all `fill="url(#...)"` references — otherwise multiple logos on the page will collide on the same gradient ids and one will steal the other's fill.
- CSS LF→CRLF warnings on `git commit` are benign (Windows line endings).
