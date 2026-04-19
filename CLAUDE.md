# Logo – Mahjong Solitaire with Tech Company Logos

A browser-based Mahjong Solitaire where tiles carry tech-company logos instead of traditional Mahjong suits. Plain HTML/CSS/JS — no build step. Deployed via GitHub Pages from `main` at https://kevinowen3.github.io/logo-mahjong/.

## File layout

- [index.html](index.html) – app shell: toolbar, board wrapper, win/game-over modals, gallery overlay
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
- **Coverage targets**: no-background marks (Chrome, Apple, Intel, HP) scale to ~98% of the 100-unit viewBox; coloured-badge marks (Amazon, AT&T, etc.) use an `rx="18"` rounded rect at `x=8 y=8 84×84` with the glyph inside.

## Fullscreen / mobile specifics

Toggling `btnFullscreen` adds `body.is-fullscreen` and requests landscape orientation lock. In that mode:

- Toolbar becomes a 52–60 px left sidebar ([styles.css](styles.css) `body.is-fullscreen .toolbar`).
- `calcTileSize()` measures `board-wrapper.clientHeight/clientWidth` directly rather than `window.innerHeight` — this respects `dvh` and safe-area insets. (The wrapper sizes correctly via flex; `window.innerHeight` diverged from true layout space on mobile.)
- Tile aspect ratio in fullscreen is clamped `[0.85, 1.25]` — the 0.85 lower bound lets ultra-landscape phones grow tiles slightly wider-than-tall to fill horizontal space without leaving a narrow board.
- Re-render is scheduled after `resize`, `orientationchange`, and `screen.orientation` change events, with a double-fire at 200 ms and 600 ms to catch the real viewport *after* the landscape lock completes.
- The board is centered both axes inside the fullscreen board-wrapper.

## Game mechanics quick reference

- `buildTiles()` places 4 of each logo into `LAYOUT` positions, shuffled.
- `computeFree()` returns a `{uid: bool}` map of currently free tiles (not covered above, at least one of left/right free).
- `findFreePairs()` groups free tiles by `logoId` and returns pairs for hint / game-over detection.
- Win modal fires when all tiles are removed; game-over modal fires when no free pairs remain (offers Undo / Shuffle / New Game).

## Deploying

GitHub Pages is already configured (build_type `legacy`, source `main /`). Any push to `main` auto-redeploys within ~1 minute.

## Working on this project

- When adding or replacing a logo, match the existing conventions above — especially the viewBox and white-background rules.
- When the user provides a reference SVG, use its exact path data and scale it with a transform rather than re-tracing.
- CSS LF→CRLF warnings on `git commit` are benign (Windows line endings).
