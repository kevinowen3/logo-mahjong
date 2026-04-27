# Logo – Mahjong Solitaire with Tech Company Logos

A browser-based Mahjong Solitaire where tiles carry tech-company logos instead of traditional Mahjong suits. Plain HTML/CSS/JS — no build step. Deployed via GitHub Pages from `main` at https://kevinowen3.github.io/logo-mahjong/.

## File layout

- [index.html](index.html) – app shell: toolbar, board wrapper, win/game-over/about modals, gallery overlay
- [script.js](script.js) – everything: `LOGOS` array, layout, tile sizing, free-tile logic, render, event wiring
- [styles.css](styles.css) – ceramic tile face, fullscreen sidebar layout, modals
- [manifest.json](manifest.json) – PWA manifest (installable on mobile)

## Key constants (top of [script.js](script.js))

```
TILE_COLS = let  // derived per-layout via layoutExtents(), reassigned by applyDifficulty()
TILE_ROWS = let  // derived per-layout
MAX_Z     = 4    // layers 0–4 (only Smarty Pants reaches z=4; harmless on smaller layouts)
EDGE_W    = 6    // 3D depth offset per layer (px)
BOARD_PAD = 12   // shadow padding each side of the board (2*EDGE_W)
TOP_SHIFT = 18   // lifts every tile by (MAX_Z-1)*EDGE_W so z=0 y=0 sits at top=EDGE_W
```

Per-layout extents (post-normalize): Smarty Pants 15×8, Padawan 13×6, Baby 9×6.

The board element is sized as `TILE_COLS*tileW + BOARD_PAD` × `TILE_ROWS*tileH + BOARD_PAD` — tightly wraps the tile extent with 6 px shadow pad on every side. The older `(MAX_Z+2)*EDGE_W` overhead reserved room for z=4 stacks at every corner (e.g. x=14 y=0), but the classic-turtle layout never stacks at the corners, so that buffer just left dead space that pushed tiles off-centre in the wrapper and shrank them. `TOP_SHIFT` compensates for the reduced top padding so z=0 y=0 still lands at 6 px from the board top; the relative z-layer offset (6 px per layer) is unchanged, so the 3D effect is preserved.

`normalizeLayout()` (called by `applyDifficulty()`) shifts each layout's coordinates so its bounding box starts at (0, 0). Without this, smaller layouts (Baby, Padawan) leave dead space on the top/left of the board element — biasing tiles toward the bottom-right of the wrapper *and* shrinking tiles via `calcTileSize()` dividing by oversized TILE_COLS/TILE_ROWS. Relative positions are preserved so `computeFree()` and `render()` are unaffected.

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

- Toolbar becomes an 88–96 px left sidebar ([styles.css](styles.css) `body.is-fullscreen .toolbar`). `flex: 0 0 auto` pins it; **do not add `white-space: nowrap` to `.pairs-display` / `.tiles-display`** — in a column-flex sidebar, nowrap makes the flex min-content equal the longest label string, which overrides `max-width` and expands the toolbar past 96 px. Labels use `overflow-wrap: anywhere` so they wrap if needed. The previous 76–84 px range was too tight for "Pairs: 0 / 72" plus the new split button — clipped on S22 Ultra.
- Sidebar buttons use `padding: 0.3rem; line-height: 1; flex-shrink: 0` and `.toolbar-info` uses `flex-shrink: 0` — the entire column (title + 6 buttons + Pairs/Tiles) has to fit in ~360 CSS px of landscape viewport height on S22-class phones, or the bottom info gets pushed below the fold.
- `calcTileSize()` measures `board-wrapper.clientHeight/clientWidth` directly rather than `globalThis.innerHeight` — this respects `dvh` and safe-area insets. (The wrapper sizes correctly via flex; viewport-height globals diverged from true layout space on mobile.) All global references use `globalThis.*`, not `window.*`, to satisfy the project's lint rule.
- Tile aspect ratio (h/w) in fullscreen is clamped `[0.6, 1.25]`. The 0.6 lower bound lets very-landscape phones (S22 Ultra class: ~2:1 wrapper after sidebar + browser chrome) grow tiles meaningfully wider than tall so the board fills horizontal space. Clamping higher (tried 0.85) left a visible unused horizontal band on the right of the turtle in landscape.
- Re-render is scheduled after `resize`, `orientationchange`, and `screen.orientation` change events, with a double-fire at 200 ms and 600 ms to catch the real viewport *after* the landscape lock completes.
- The board is centered both axes inside the fullscreen board-wrapper.
- `<meta name="viewport">` does **not** set `maximum-scale` or `user-scalable=no` — both trip the `Web:S7926` a11y warning and block pinch-zoom.

## Game mechanics quick reference

- `buildTiles()` places 4 of each *active* logo (filtered by `activeLogoIds()` per the current difficulty) into `LAYOUT` positions, shuffled.
- `computeFree()` returns a `{uid: bool}` map of currently free tiles (not covered above, at least one of left/right free).
- `findFreePairs()` groups free tiles by `logoId` and returns pairs for hint / game-over detection.
- Win modal fires when all tiles are removed; game-over modal fires when no free pairs remain (offers Undo / Shuffle / New Game).
- `render()` also counts distinct matchable logos (free tiles of a given `logoId` with count ≥ 2) and writes it to `#freePairsCount`, reusing the already-computed `freeMap` instead of calling `findFreePairs()` a second time. It also writes `LAYOUT.length / 2` to `#pairsTotal` so the toolbar info reflects the active level (Baby 22, Padawan 36, Smarty Pants 72).

## Difficulty levels

Three levels share the same engine. **Internal IDs are stable** (`beginner` / `intermediate` / `advanced`) — they appear in `localStorage` keys, `data-level` attributes, and any `level` argument. **User-facing display labels** live in `LEVEL_LABELS = { beginner: 'Baby', intermediate: 'Padawan', advanced: 'Smarty Pants' }` and are looked up everywhere the user sees a level name.

| Level (display / id) | Tiles | Logos | Layout extents | Shape |
|---|---|---|---|---|
| Smarty Pants / `advanced` | 144 | 36 (full `LOGOS`) | 15 × 8 | Classic turtle (existing) |
| Padawan / `intermediate` | 72 | 18 (`INTERMEDIATE_LOGO_IDS`) | 13 × 6 | Row widths 8/6/10/10/6/8 + 1L+2R wings + 4-layer pyramid |
| Baby / `beginner` | 44 | 11 (`BEGINNER_LOGO_IDS`) | 9 × 6 | Smaller chamfered turtle + 3 wings + 1 cap above 4×2 layer 1 |

Logo subsets are **nested**: `BEGINNER_LOGO_IDS ⊆ INTERMEDIATE_LOGO_IDS ⊆ LOGOS`. A child who learns Baby is guaranteed to see those same logos again at higher levels.

State and persistence:
- `currentDifficulty` (let) holds the active level. Defaults to `'advanced'` via `readDifficulty()`, which validates against the `DIFFICULTIES` Set and falls back if the localStorage value is missing or unknown.
- `applyDifficulty(level)` updates `LAYOUT`, `TILE_COLS`, `TILE_ROWS`, and `currentDifficulty` — **pure** (no localStorage write).
- `chooseDifficulty(level)` is the user-initiated wrapper: applies + persists to `localStorage['logo:difficulty']`. Splitting the persist out of `applyDifficulty` is deliberate — the boot path calls `applyDifficulty(currentDifficulty)` to sync state without passively touching localStorage for an existing player who has never opened the chooser.
- `startNewGameAt(level)` is what the chooser modal calls: `chooseDifficulty()` + `hideDifficultyModal()` + `buildGallery()` + `newGame()`.
- The toolbar `#btnNew` and the win/game-over modal "New Game" buttons all call `newGame()` directly with no chooser — they preserve the current level (so an existing player's "click New Game" experience is byte-identical to before this feature shipped).

Layout builders: `buildAdvancedLayout()`, `buildIntermediateLayout()`, `buildBeginnerLayout()` each return a raw position array; `buildLayoutFor(level)` dispatches; `normalizeLayout()` shifts to (0, 0).

## UI chrome & event wiring

- **Game title** ([index.html](index.html) `#gameTitle`): `<span>` containing four inner spans (`.gt-l .gt-o1 .gt-g .gt-o2`) coloured with the Microsoft four-square palette (`#F25022`, `#00A4EF`, `#7FBA00`, `#FFB900`). It's clickable:
  - plain click → About modal
  - **Shift+Click → Win modal** (test harness)
  - **Ctrl+Click → Game Over modal** (test harness)
- **About modal** (`#aboutModal`): shown by `showAbout()`, which defers a capture-phase click listener (`aboutOutsideClick`) on `document` via `setTimeout(..., 0)` so the click that opened it doesn't immediately close it. Any subsequent click *outside* `.about-content` dismisses it; clicks inside the content are ignored so interactive controls (e.g. the "Show elapsed time" checkbox) don't close the modal mid-interaction. The date line (`.about-date` in [index.html](index.html)) is hardcoded — bump it by hand when shipping user-visible changes. `showAbout()` also calls `renderAboutStats()` (synchronous render from cached values), `loadStatsForDisplay()` (fire-and-forget refresh from the shared counter), and `syncTimerToggle()` (mirrors localStorage pref into the checkbox) each time it opens. `max-width: 540px` (was 420px) so the personal-stats line "Your plays · Your wins · Best Smarty Pants: …" fits on one row.
- **Split New Game button** (`.btn-split` wrapper containing `#btnNewLevel` and `#btnNew`): the toolbar's "New Game" is two adjacent buttons styled as one pill (no seam between them). The left half is a triangle (`▶`) that opens the difficulty chooser modal. The right half ("New Game") starts a new game at the persisted level — same behavior as the original single button, so existing players who ignore the triangle see no change. In fullscreen sidebar mode, `body.is-fullscreen .btn-split { display: flex; width: 100% }` keeps the two halves horizontal even though sibling toolbar buttons stack vertically; `#btnNew::after { content: "🆕" }` shows a squared-NEW glyph since the text is hidden.
- **Difficulty chooser modal** (`#difficultyModal`): three buttons (Smarty Pants / Padawan / Baby — display order top→bottom regardless of internal id) each carrying a `data-level` attribute and a `.difficulty-meta` line ("144 tiles · 36 logos" etc.). `showDifficultyModal()` marks the current level with `.selected` (teal outline) and follows the same setTimeout→capture-phase outside-click pattern as About. Clicking a button calls `startNewGameAt(button.dataset.level)`. Escape and outside-click dismiss without changing level.
- **Timer overlay** (`#timerDisplay`): an absolute-positioned stopwatch in the top-right corner of `.board-wrapper` (which has `position: relative` purely to anchor it). Hidden by default and opt-in per device via the **"Show elapsed time during play"** checkbox in the About modal. The pref persists in `localStorage` under `logo:show-timer` (`'1'` / `'0'`). A 1-second `setInterval` (started once at app boot) calls `updateTimerDisplay()`, which reads `gameStartMs` and `gameEndMs`: shows `0:00` until first click, ticks live during play, freezes on win (because `gameEndMs` is stamped in the win branch of `checkEndConditions()`). Format is `M:SS` under an hour, `H:MM:SS` at or above. The interval runs unconditionally — invisible-element writes are cheap, and that beats start/stop logic for a 1 Hz tick.
- **Timer pause**: the timer overlay is itself a click target — clicking it toggles `paused`. While paused the box turns amber (`.timer-display.paused` style) and the time gets a trailing `⏸` glyph; the displayed elapsed value freezes at `pausedAtMs - gameStartMs`. Resuming **shifts `gameStartMs` forward** by the paused duration (`gameStartMs += Date.now() - pausedAtMs`) — this keeps the single `now - gameStartMs` formula correct everywhere (including `recordWinTime` and the win-modal "Finished in"), so paused intervals never count toward the player's time. Any subsequent game-board activity auto-resumes via `resumeTimerIfPaused()`, called at the top of `onTileClick`, `doHint`, `doUndo`, `doShuffle`, and `deselectTile`. Toolbar meta actions (About / Logos / Fullscreen) deliberately do **not** resume — a paused player can open About without losing the pause. Pause is a no-op before the first click (`gameStartMs === null`) and after a win (`gameEndMs !== null`); `newGame()` resets `paused` and `pausedAtMs`. The pause gesture isn't otherwise discoverable, so the About modal carries an italic `.about-hint` line directly below the timer checkbox: "To pause the timer, click on the elapsed time displayed."
- **Win modal** (`#winModal`) shows the elapsed time for the just-completed game as "Finished in Xm Ys" via the `#winTime strong` span. `gameStartMs` uses **first-click-start**: `newGame()` sets it to `null` (sentinel) and the first time `onTileClick()` runs past the blocked-tile guard, it stamps `gameStartMs = Date.now()`. Pre-game thinking time is therefore not counted, but every shuffle and second of mid-game idle still is — `doShuffle()` deliberately does not reset `gameStartMs`, so a shuffled game stays in the same timed session and its full clearing time counts toward the player's personal best. The stamp happens after the blocked-tile guard but before the hint-accept / selection branches, so any meaningful first interaction (hint accept or first selection) starts the clock; clicking a blocked tile does not. `newGame()` resets `#winTime` text to "—" so the Shift+Click test harness doesn't display a stale time from a previous real win.
- **Status bar** is a wrapper with two spans: `#status` (message, written by `setStatus()`) and `.free-pairs-display` containing `#freePairsCount`. The count span is absolutely positioned on the right so the message stays centered. Fullscreen mode hides the whole status bar.
- **Selection / hint styling**: both use `.tile.selected` (teal ring via `box-shadow: 0 0 0 3px #00bcd4`, teal face, `z-index: 9000 !important` so the ring paints above neighbours). The hint system adds `.selected` to both tiles in a hint pair — it does not use a separate class. Any earlier `.tile.hint-glow` rule is gone; don't reintroduce it unless you also update the JS that applies the class.
- **Deselection triggers**: `deselectTile()` clears `selectedId`, `hintPair`, and `hintIndex` and re-renders. It's called by
  1. clicking the empty board surface (`e.target === boardEl`),
  2. clicking the margin around the board (`e.target.classList.contains('board-wrapper')`),
  3. pressing **Escape** (which also hides gallery, win, and game-over modals).
  Tile-on-tile clicks go through `onTileClick()` and don't touch `deselectTile()`.

## Stats (shared counter + personal)

A lightweight engagement-tracking system lives in the "Stats" section near the top of [script.js](script.js) (just after the DOM refs). Two kinds of numbers, both surfaced in the About modal:

**Shared counters** (one number across everyone who plays) use the free public service [abacus.jasoncameron.dev](https://abacus.jasoncameron.dev) with namespace `kevinowen3-logo` and keys `launches` and `wins`. Incremented via `/hit/:ns/:key` (no auth); read via `/get/:ns/:key`. The admin keys returned at `/create` time let you `/reset`, `/set`, or `/delete` the counters via POST with `Authorization: Bearer <key>` — these are **not** in the committed code and must not be. Keep them in a password manager; if lost, the counters can't be administratively reset but the `/hit` path keeps working. Every `/hit` resets the 6-month expiry, so as long as the game gets any traffic the counters don't auto-expire.

**Threshold rule**: the `launches` counter increments exactly once per game, triggered from the match-success hook inside `matchPair()` when `matchedPairs >= PLAY_THRESHOLD_PAIRS` (3). This is what the counter actually measures — "someone engaged with a game", not "someone loaded the page". The idempotency comes from `playCountedThisGame`, a boolean flag reset inside `newGame()`; without that flag, the threshold could retrigger via undo→rematch. Nothing fires on page load, nothing fires on the New Game click itself, and nothing fires on the Shift+Click / Ctrl+Click test-harness paths (they never call `matchPair()`). The `wins` counter fires once inside `checkEndConditions()` when all tiles are cleared.

**Dev exclusion**: `IS_DEV` is true on `localhost`, `127.0.0.1`, `[::1]`, or `file://`. When true, `maybeBumpPlay()` and `bumpWins()` still update localStorage personal stats but skip the network call entirely. This is a secondary filter — the threshold rule already excludes typical dev-by-deployed-site quick checks that don't involve 3 real matches.

**Personal stats** live in `localStorage` under the key `logo:personal-stats` as JSON: `{ launches, wins, bestTimes, lastPlayedMs }` where `bestTimes = { beginner, intermediate, advanced }` — one slot per level. `launches` / `wins` / `lastPlayedMs` stay unified across levels (matches the shared abacus counters, which can't be split retroactively). These follow the same threshold rule as shared stats so the labels mean the same thing on both lines. `readPersonal()` / `writePersonal()` wrap the storage in try/catch — private-browsing and quota-exceeded both fall back silently. `recordWinTime()` only writes `bestTimes[currentDifficulty]` when the new elapsed is lower, so each level's best is monotonic-improving.

**Schema migration** (legacy → current): pre-difficulty installs stored a single `bestTimeMs` field instead of `bestTimes`. `readPersonal()` detects the legacy field and migrates: `p.bestTimes = { advanced: p.bestTimeMs }; delete p.bestTimeMs;`. Idempotent (skipped once `bestTimes` exists or `bestTimeMs` is absent). The migrated value commits to storage on the next `bumpPersonal()` / `recordWinTime()` write.

**Graceful failure**: all abacus calls go through `counterFetch()`, which returns `null` on any non-2xx response, network error, or JSON parse failure. Null values render as `—` in the About modal. `renderAboutStats()` is safe to call when counters have never loaded — it just shows `—` for the shared line.

**About modal layout**: `renderAboutStats()` emits three rows: a `.shared` line (Game played / Solved counts), a `.personal` line (`Your plays · Your wins · Best ${LEVEL_LABELS[currentDifficulty]}: …`), and a separate `.personal` line for `Last play: …`. The "Best …" suffix only shows the *current* level's best — switching levels in the chooser swaps which best is displayed. "Last play" gets its own row because cramming it onto the personal line wraps awkwardly on narrow phones — keep it as a distinct `<div>` rather than appending to `personalBits`.

**Display helpers**: `formatDuration(ms)` renders `47s`, `6m 14s`, or `1h 02m 05s`; `formatRelative(ms)` turns a timestamp into "just now" / "4 minutes ago" / "yesterday" / "3 days ago" / absolute date for >30 days; `formatCount(n)` handles null and formats with locale separators.

## Logo gallery overlay

`buildGallery()` filters `LOGOS` by `activeLogoIds()` so the gallery shows only the active level's pool (Baby 11, Padawan 18, Smarty Pants 36). It's rebuilt by `startNewGameAt()` whenever the level changes.

`showGallery()` sizes each SVG to 92% of `calcTileSize()` — but capped at `ICON_CAP = 130` px. The cap matters because Baby/Padawan tiles can be 250+ px on a wide screen, which would overflow the grid columns. The grid template is set dynamically (`minmax(${iconW + 22}px, 1fr)`) so the columns always have at least 22 px of breathing room beyond the icon size — preventing icon-bleed across cards regardless of level or viewport.

## In-page validator (`__validateLogo()`)

A self-contained validator at the bottom of [script.js](script.js) runs ~50 pure-state assertions across 5 groups (logo subsets, layouts, free-tile logic, migration, level transitions). Two invocation paths:

- **Console**: open DevTools → run `__validateLogo()`. Returns `{ groups, passed, failed }`; results print via `console.group` / `console.groupCollapsed`.
- **URL param**: append `?validate=1` to auto-run on `DOMContentLoaded`.

The validator **saves and restores** every global it touches (`currentDifficulty`, `localStorage[LS_STATS_KEY]`, `localStorage[LS_DIFFICULTY_KEY]`) and calls `applyDifficulty(saved.currentDifficulty)` + `newGame()` on exit so the live game is never disturbed. It mutates the module-scope `tiles` while testing `computeFree()` against synthetic layouts; that's fine because `newGame()` rebuilds `tiles` from scratch.

Run it before commit when any of these change: `LOGOS`, `BEGINNER_LOGO_IDS`, `INTERMEDIATE_LOGO_IDS`, the `buildXxxLayout()` functions, `layoutExtents()` / `normalizeLayout()`, `computeFree()` / `findFreePairs()`, `readPersonal()` / `writePersonal()` / `recordWinTime()`, `readDifficulty()` / `writeDifficulty()` / `applyDifficulty()`. It does **not** cover visual look (S22 verification still required), click-driven UX, or production deploy/cache-bust.

## Deploying

GitHub Pages is already configured (build_type `legacy`, source `main /`). Any push to `main` auto-redeploys within ~1 minute.

**Cache-bust on CSS *and* JS changes**: [index.html](index.html) loads `styles.css?v=N` and `script.js?v=M` — bump the matching `v=` whenever you modify either file. Mobile browsers (Chrome on Android in particular) cache aggressively and will otherwise serve the previous asset even after a hard reload.

## Working on this project

- When adding or replacing a logo, match the existing conventions above — especially the viewBox and white-background rules.
- When the user provides a reference SVG, use its exact path data and scale it with a transform rather than re-tracing. If the source SVG has `<defs>` with `id="paintN_..."`, **rename the ids** (e.g., `logoid-pN`) and update all `fill="url(#...)"` references — otherwise multiple logos on the page will collide on the same gradient ids and one will steal the other's fill.
- CSS LF→CRLF warnings on `git commit` are benign (Windows line endings).
