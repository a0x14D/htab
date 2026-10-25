# Features

## Modes & Theming
- **4 switchable profiles** — Personal, Research, Dev, and CTF, each with its own quick‑link grid.
- **Per‑mode accent colors** — green (Personal), amber (Research), blue (Dev), red (CTF). The whole UI re‑themes instantly.
- **Keyboard mode switching** — `1`, `2`, `3`, `4` jump between modes.
- **Reduced‑effects mode** — `:theme` toggles scanlines/glow to save CPU on old machines.

## Command Bar & Search
- **Command bar** — press `/` to focus, type freely or start with `:` for commands, `@` for search engines.
- **Quick links** — press `Tab`/arrows to navigate and `Enter` to open. Start typing to filter.
- **Search engines** — built‑in DuckDuckGo, Google, Shodan, VirusTotal, GitHub, Exploit‑DB. Add your own via `:link`.
- **Recent searches** — history is shown when the bar is empty (arrow keys to replay).
- **Frecency sorting** — `:order frecency` boosts links you actually click.

## Research & Pivots
- **IOC detection** — paste an IP, domain, URL, email, CVE, hash, or JWT and get context-aware pivot links.
- **One‑click pivots** — Shodan, VirusTotal, urlscan.io, crt.sh, AbuseIPDB, MalwareBazaar, etc. appear automatically in Research/Dev/CTF.
- **Inline decoders** — decode Base64, URL, hex, ROT13, HTML entities right from the menu.
- **Research dork chips** — quick operators like `site:`, `inurl:`, `intitle:`, `filetype:pdf`.
- **JWT inspector** — `jwt:<token>` or just paste a JWT to see header/payload + quick links.

## Scratchpad & Todos
- **Per‑mode scratchpad** — press `n` to toggle, notes auto‑save as you type.
- **Checklist todos** — add tasks, mark done/undone, delete, clear completed. Progress counter shown. Dot indicator on 📝 when tasks exist.
- **Per‑mode isolation** — Personal todos/notes never leak to Dev/CTF.
- **Commands** — `:todo add <text>`, `:todo done <n>`, `:todo undone <n>`, `:todo delete <n>`, `:todo clear`, `:todo open`.

## Links & Customization
- **Drag to reorder** — reorder tiles in any mode.
- **Pin links** — pin important links to the top per mode.
- **Custom links** — add/remove your own tiles with `:link add/remove/list/clear`.
- **Link target toggle** — switch between "Same tab" (`→`) and "New tab" (`↗`).
- **Auto‑icons** — Flaticon UIcons for common sites, with host inference and emoji fallback.

## Utilities & UX
- **Clock & status** — footer shows time and online status.
- **Toasts** — subtle confirmations for actions.
- **Duck.ai launcher** — quick access to Duck.ai (`q` or button).
- **Anime quotes** — rotating quotes above the search bar (non‑distracting).
- **Console widgets** — mode‑specific helpers on wider screens (timers, converters, etc.).
- **Backup/restore** — `:export` downloads JSON, `:import` restores it (todos, notes, links, pins, order, history, settings).

## Privacy
- **Zero backend** — everything runs in the browser.
- **No telemetry** — no tracking, analytics, or external calls beyond user‑initiated navigations and optional CDNs (Tailwind/Flaticon).
- **Local only** — all data stays in `localStorage`.
