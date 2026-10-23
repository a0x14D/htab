<div align="center">

# ⌨️ Hacker New Tab

### Your browser's home page, but it went to hacker school.

**A retro terminal‑styled Firefox new‑tab dashboard** for four very different lives —
personal, research, dev, and CTF — with a keyboard‑first command bar, inline decoders,
IOC pivots, per‑mode accents, and zero backend.

<br>

[![Made with Vanilla JS](https://img.shields.io/badge/JavaScript-vanilla-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)](#-tech-stack)
[![No Build Step](https://img.shields.io/badge/build-none-3fb950?style=for-the-badge&logo=githubactions&logoColor=white)](#-getting-started)
[![No Backend](https://img.shields.io/badge/backend-none-58a6ff?style=for-the-badge&logo=serverless&logoColor=white)](#-local-data--privacy)
[![No Tracking](https://img.shields.io/badge/tracking-none-f85149?style=for-the-badge&logo=shield&logoColor=white)](#is-my-data-shared-with-anyone)
[![License: MIT](https://img.shields.io/badge/license-MIT-d29922?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-ff69b4?style=for-the-badge&logo=git&logoColor=white)](#-contributing)

<br>

**No npm install. No build. No server. No account. No telemetry.**
Just open the file and it works. That's the whole trick.

<br>

```
> root@firefox-newtab:~# ./why-should-you-care.sh

  [✓] 4 modes, 4 accents, 0 configuration files
  [✓] decoders that run locally instead of 12 browser tabs
  [✓] paste an IP -> Enter -> you're on Shodan. that's it.
  [✓] your notes never leave your machine
  [✓] works on your phone too
```

</div>

---

> [!TIP]
> **"Why not? Your browser's home page deserves this type."**
>
> You stare at it dozens of times a day. It might as well be fast, private, and look
> like it was built by someone who reads `man` pages for fun.

<div align="center">

### ⭐ If this replaces your boring new tab, drop a star — it costs you nothing and makes the terminal glow brighter.

</div>

---

## ✨ Why This Exists

Most "new tab" pages are either an ad platform wearing a search box, or a static
bookmark wall you outgrow in a week. Neither respects the fact that **you are four
different people** depending on the hour:

<div align="center">

| 😴 **Personal** | 🔍 **Research** | 💻 **Dev** | 🚩 **CTF** |
|:---:|:---:|:---:|:---:|
| 🟢 green | 🟡 amber | 🔵 blue | 🔴 red |
| mail, maps, chat | Shodan, VT, crt.sh | GitHub, MDN | HTB, CTFtime |
| *"just checking email"* | *"what is this IP"* | *"why is CI red"* | *"it's 3am and I'm winning"* |

</div>

One keypress (`1` `2` `3` `4`) switches who you are. Same dashboard, different brain.

---

## 🚀 Features

- **4 switchable profiles** — Personal, Research, Dev, and CTF, each with its own quick‑link grid.
- **Per‑mode accent colors** — green (Personal), amber (Research), blue (Dev), red (CTF). The whole UI re‑themes instantly.
- **Command bar** — one input for everything:
  - Type to **jump to any quick link** across all modes (`git` → GitHub), with **fuzzy matching** (`gthb` → GitHub) and **frecency** ranking so links you open most float to the top.
  - Press `Enter` to **search the web** when nothing is selected.
  - Type `@` to pick a **search engine** (DuckDuckGo, Google, Shodan, VirusTotal, GitHub, Exploit‑DB), then `@shodan port:22`.
  - Use **bangs** instead of `@` if you prefer: `!g`, `!d`, `!gh`, `!vt`, `!sh`, `!edb`.
  - **Recent searches** come back when the bar is empty.
- **Smart paste → IOC pivots** (Research & CTF modes) — paste an IP, domain, URL, CVE, hash, ASN, or JWT and get one‑keystroke pivots to Shodan, VirusTotal, AbuseIPDB, urlscan.io, crt.sh, NVD, Exploit‑DB, MalwareBazaar, bgp.he.net, and more. A pasted indicator auto‑selects the first pivot, so `Ctrl+V` + `Enter` is all it takes.
- **Inline decoders & utilities** — no more tab‑hopping for quick transforms. Type a prefix and the result appears as the first row; press `Enter` to copy it:
  - `b64:` / `b64e:` — Base64 decode / encode
  - `hex:` — hex → text
  - `url:` — URL‑decode
  - `rot13:` — ROT13
  - `jwt:<token>` — decode header + payload, with expiry warning
  - `sha256:` — SHA‑256 a string
  - `epoch:1700000000` — timestamp → UTC + local time
  - `cidr:10.0.0.0/24` — network, range, broadcast, and host count
  - `calc:2^16` — safe arithmetic (`+ - * / % ^ ()`)
  - JWTs, CIDRs, and bare math expressions are also detected without a prefix.
- **Copy toasts** — copies (and other actions) confirm with a brief terminal‑styled toast.
- **Research dork chips** — click `site:`, `inurl:`, `intitle:`, `filetype:pdf`, and more to build queries fast.
- **Per‑mode scratchpad** — autosaved notes kept separate for each profile (`n` to toggle).
- **Mode console** — three desktop‑only widgets that change with the mode: clock/day progress/one‑thing (Personal), session timer/IOC pivot/recent searches (Research), converter/SHA‑256/keys (Dev), countdown/hash ID/flag formats (CTF). On wide screens they sit in the left and right page gutters; on medium screens they fall back to a strip under the tiles.
- **Anime quote feed** — quiet‑resolve lines with character and series attribution, shown top‑left under the header and rotating every 3 seconds; pauses on hover and when the tab is hidden.
- **Duck.ai launcher** — an accent‑lit floating duck in the bottom‑right corner opens [duck.ai](https://duck.ai/) chat (`q`), in a new tab or the current one according to the target toggle. It gives a gentle nudge on load so you notice it, then rests; the animation is skipped under `prefers-reduced-motion` and in `:theme` reduced‑effects mode.
- **Per‑mode default engine** — plain `Enter` uses Google in Research/CTF and DuckDuckGo in Personal/Dev; the placeholder always shows the current engine.
- **Terminal aesthetic** — GitHub‑dark background, CRT scanlines, glowing accents, JetBrains Mono, plus a live clock.
- **Keyboard‑first** — `1`–`4` / `P R D C` for modes, `/` for search, `n` for notes, `q` for duck.ai, arrows to navigate results; `Enter` copies inline utility results and pivots pasted IOCs.
- **Responsive** — compact square tiles that reflow from 3 columns on phones to 5 on desktop.
- **Brand SVG icons** — tiles and command‑bar rows use [developer‑icons](https://github.com/xandemon/developer-icons) for the brands it covers, with host inference for custom tiles and emoji fallback elsewhere (see [Icons](#-icons)).
- **Path shortcuts** — `/htab/instagram` opens the Instagram tile, and an unknown name like `/htab/cve-2024-3094` runs a search instead of dead‑ending on GitHub's 404 page.
- **New tab / same tab toggle** — a header switch controls where quick links open (tiles and command‑bar jumps), remembered across reloads.
- **Pinned links** — click the ☆ on any tile (or run `:pin <link>`) to pin it above the grid; pins are stored per mode.
- **Frecency‑ordered tiles** — press `s` or run `:order frecency` to sort each mode's grid by what you actually use (14‑day half‑life). Pins always stay on top. Order is remembered.
- **Per‑mode todo checklist** — the scratchpad has a `checklist` tab alongside `notes`: add tasks, tick them off, see progress, and clear completed ones. Stored per mode.
- **Command actions** — type `:` in the command bar for `:mode`, `:order`, `:reset-order`, `:pin`, `:unpin`, `:pins`, `:todo`, `:note`, `:clear-history`, `:theme`, `:help`, `:reload`.
- **Reduced‑effects mode** — `:theme` toggles the CRT scanlines and glow off, remembered across reloads.
- **No backend, no tracking** — all state lives in your browser's `localStorage`.

---

## 🖥️ Modes

<table>
<tr><th>Mode</th><th>Shortcut</th><th>Accent</th><th>Highlights</th></tr>
<tr>
<td><b>Personal</b></td><td><code>1</code> / <code>P</code></td><td>🟢 Green</td>
<td>Gmail, ProtonMail, Calendar, Maps, WhatsApp, YouTube, Instagram, Reddit, Discord</td>
</tr>
<tr>
<td><b>Research</b></td><td><code>2</code> / <code>R</code></td><td>🟡 Amber</td>
<td>Google, Shodan, VirusTotal, urlscan.io, crt.sh, Wayback Machine, DNSDumpster, Exploit‑DB + dork chips</td>
</tr>
<tr>
<td><b>Dev</b></td><td><code>3</code> / <code>D</code></td><td>🔵 Blue</td>
<td>GitHub, Stack Overflow, MDN, DevDocs, npm, Regex101, Can I use, Medium, The Hacker News</td>
</tr>
<tr>
<td><b>CTF</b></td><td><code>4</code> / <code>C</code></td><td>🔴 Red</td>
<td>HackTheBox, TryHackMe, CTFtime, PortSwigger, CTF Sites, CyberChef, RevShells, GTFOBins, PayloadsAllTheThings</td>
</tr>
</table>

> **Caption:** four tabs' worth of tabs, collapsed into four keys.

---

## 🎛️ Mode Console

> **Caption:** three small instruments in the page gutters, one set per mode — and they only show up on desktop.

Each mode gets its own widgets. Everything runs locally: the clock and countdown use your system time, and the converter and hashes run in the browser. Nothing is sent anywhere.

On screens **1280 px and wider**, the first two cards fill the empty left gutter and the third balances the right gutter, so the tiles keep their centred column. Between **640 and 1279 px** there is no room for rails, so the three cards fall back to a strip under the tiles. The data is the same; only the host changes when you cross the breakpoint.

| Mode | Widgets |
|------|---------|
| Personal | local clock + date · day‑progress bar · "today's one thing" (saved per day) |
| Research | session stopwatch (survives reloads) · IOC pivot box (IP, domain, hash, CVE, JWT) · recent searches |
| Dev | base64 / URL converter · live SHA‑256 · keyboard cheatsheet |
| CTF | event countdown (editable target) · hash/JWT identifier · flag‑format reference |

Above the grid, top‑left under the header and mode switcher, a quiet‑resolve quote from anime rotates every 3 seconds, with character and series attribution. Hover to pause; it also pauses while the tab is hidden, and the fade is skipped under `prefers-reduced-motion`.

The phone layout is untouched: both the console and the quote stay hidden below 640 px.

---

## ⌨️ Keyboard Shortcuts

The mouse is optional. The keyboard is not.

| Key | Action |
|-----|--------|
| `1` – `4` | Switch to Personal / Research / Dev / CTF |
| `P` `R` `D` `C` | Same as above (letter shortcuts) |
| `/` | Focus the command bar (and show recent searches) |
| `n` | Toggle the per‑mode scratchpad |
| `s` | Toggle tile order between config order and frecency |
| `q` | Open Duck.ai chat |
| `:` | Open the command‑action list |
| `Enter` | Open the selected result, copy a utility result, or search if none is selected |
| `@` | Open the search‑engine picker |
| `!…` | Bang shortcut (`!g`, `!d`, `!gh`, `!vt`, `!sh`, `!edb`) |
| `↑` / `↓` | Move through results, engines, or history |
| `Esc` | Close results / leave search / close scratchpad |

---

## 🧰 Operator Console

> **Caption:** it's a search bar that decided to become a swiss army knife.

The command bar is also a small local toolkit. Everything runs in your browser — nothing is sent anywhere.

### Decoders & calculators

| Type this | You get |
|-----------|---------|
| `b64:SGVsbG8=` | `Hello` (Base64 decode) |
| `b64e:hello` | `aGVsbG8=` (Base64 encode) |
| `hex:48656c6c6f` | `Hello` |
| `url:hello%20world` | `hello world` |
| `rot13:Uryyb` | `Hello` |
| `jwt:<token>` | decoded header + payload, with expiry status |
| `sha256:hello` | SHA‑256 digest |
| `epoch:1700000000` | `2023-11-14 22:13:20 UTC` (+ local time) |
| `cidr:10.0.0.0/24` | network, usable range, broadcast, host count |
| `calc:2^16` | `65536` |

Press `Enter` on the top result to copy it. A `b64:`, `calc:`, `cidr:`… prefix auto‑selects that result; bare expressions, JWTs, and CIDRs are detected too but stay unselected so `Enter` still searches.

### IOC pivots (Research & CTF)

Paste an indicator and the first row becomes a pivot. Hit `Enter`, or use `↑`/`↓` to pick another tool:

| Indicator | Pivots to |
|-----------|-----------|
| `8.8.8.8` | Shodan · VirusTotal · AbuseIPDB · urlscan.io |
| `example.com` | crt.sh · VirusTotal · urlscan.io · Wayback |
| `https://…` | Open · VirusTotal · Wayback · urlscan (host) |
| `CVE-2024-3094` | NVD · Exploit‑DB · GitHub advisories |
| `d41d8cd9…` (32/40/64/128 hex) | VirusTotal · MalwareBazaar · Hybrid Analysis |
| `AS15169` | bgp.he.net · Shodan |
| `<JWT>` | jwt.io |

### Command actions

Type `:` to list them; run one with `Enter`.

| Command | Effect |
|---------|--------|
| `:mode research` | Switch mode (`personal` · `research` · `dev` · `ctf`) |
| `:order frecency` | Sort the grid by usage (`default` resets) |
| `:reset-order` | Forget the manual drag order for this mode |
| `:pin github` | Pin a link in the current mode |
| `:unpin github` | Remove a pin |
| `:pins` | List the current mode's pins |
| `:todo add check logs` | Add a task (`:todo` alone lists them) |
| `:todo done 2` | Complete task 2 (by number or text) |
| `:todo undone 2` | Reopen a task |
| `:todo delete 2` | Remove a task |
| `:todo clear` | Remove every completed task |
| `:todo open` | Open the scratchpad on the checklist tab |
| `:link add example.com` | Add a custom tile (optional name: `:link add example.com Example`) |
| `:link list` | List this mode's custom links |
| `:link remove example` | Remove a custom link by name |
| `:link clear` | Remove every custom link in this mode |
| `:note buy milk` | Append a line to the scratchpad (`:note` alone reads it) |
| `:clear-history` | Forget recent searches |
| `:theme` | Toggle scanlines/glow |
| `:help` | List every action |
| `:reload` | Reload the dashboard |

### Frecency

Every link you open from a tile or the command bar is recorded. Links you use often rank higher for the same query, with a 14‑day half‑life so stale habits fade. The command bar also matches on **subsequences**, so `gthb` finds GitHub.

The same scores drive the `:order frecency` tile sort (`s`). Pinned links are always shown first, in both orderings, and the sort never duplicates or drops tiles.

Drag any tile to set a manual order. Manual order takes precedence over frecency, pins still lead, and `:reset-order` clears it for the current mode.

### Scratchpad (`n`)

Press `n` (or the 📝 button) to open the per‑mode scratchpad. It has two tabs:

- **checklist** — add a task with the field at the top (or `:todo add <text>`), tick items off, watch the `done / total` counter, and delete tasks with ✕. `:todo clear` removes everything completed. The 📝 button shows a dot while tasks are open.
- **notes** — the original free‑form text area, saved as you type.

Both are stored per mode and are independent, so a Dev‑mode checklist never leaks into Personal.

---

## 🏁 Getting Started

Three ways in, ordered from laziest to fanciest.

<details open>
<summary><b>🚀 Quick start (30 seconds)</b></summary>

<br>

```bash
git clone https://github.com/a0x14d/htab.git
cd htab
# now double-click index.html. that's it. genuinely.
```

No `npm install`. No `npm run dev`. No `node_modules` — there isn't one by design.

</details>

### Option 1 — Just open it

```bash
git clone https://github.com/a0x14d/htab.git
cd htab
```

Double‑click `index.html`, or serve it locally:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000/
```

> Opening via `file://` works fine. A local server is only needed if you plan to use it as a hosted page or browser extension.

Want it hosted with no install and no local server? See
[Deploy to GitHub Pages](#-deploy-to-github-pages) — that URL works on your phone too.

### Option 2 — Use it as your Firefox new tab

Firefox removed the old `browser.newtab.url` pref, so `about:config` can no longer
point your new tab at a custom page. Use one of the methods below instead.

> **Recommended:** the GitHub Pages URL `https://a0x14d.github.io/htab/` — it needs
> no local server, works on every device, and survives restarts.

#### A. New Tab Override extension (easiest, persistent)

1. Install **[New Tab Override](https://addons.mozilla.org/firefox/addon/new-tab-override/)** from addons.mozilla.org.
2. Open its settings — click the **⚙️ / puzzle-piece** icon in the toolbar, or go to
   **Add-ons and themes → New Tab Override → Options / Preferences**.
3. Scroll to the **New tab page** section and select **Custom URL**.
4. Paste the URL into the field:

   ```
   https://a0x14d.github.io/htab/
   ```

   Prefer running it from disk? Use one of these instead:

   - `file:///home/<you>/htab/index.html` — replace `<you>` with your real path
     (e.g. `file:///home/alice/htab/index.html`).
   - `http://localhost:8000/` — only while `python3 -m http.server 8000` is running
     in the project folder.

5. Click **Save** (if the button is present). Open a new tab — the dashboard loads.

The setting persists across Firefox restarts, so you only do this once. The same
steps work in Firefox for Android via the extension's own settings screen.

> **Keep the trailing slash** in `https://a0x14d.github.io/htab/`. Without it, GitHub
> Pages still works, but the trailing slash is the canonical, redirect-free form.

> **Your data is per-URL.** `localStorage` is scoped to the exact origin, so data you
> saved while opening the page from `file://` is **not** visible on the GitHub Pages
> origin. Pick one method and stick with it, or re-add your links and pins.

#### B. Load it as a temporary WebExtension

No extension install, but it resets when Firefox restarts.

Create `manifest.json` next to `index.html`:

```json
{
  "manifest_version": 2,
  "name": "Hacker New Tab",
  "version": "1.0.0",
  "description": "Terminal-styled new tab dashboard.",
  "chrome_url_overrides": {
    "newtab": "index.html"
  }
}
```

Then:

1. Go to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add‑on…**.
3. Select `manifest.json`.
4. Open a new tab — the dashboard replaces it.

> Temporary add‑ons are removed when Firefox restarts. For a permanent install, package and sign the extension ([MDN guide](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)).

---

## 🌐 Deploy to GitHub Pages

Free hosting, no server to babysit, and a URL you can set as your new tab from any device.

> **Caption:** `git push` → new tab page. That's the entire deployment pipeline.

1. Push the project to GitHub.

   ```bash
   git add .
   git commit -m "feat: add command bar, scratchpad, dorks, and per-mode themes"
   git push origin master
   ```

2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `master` (or `main`) · **Folder:** `/ (root)`
4. Save. Your dashboard will be live at:

   ```
   https://a0x14d.github.io/htab/
   ```

5. Point **New Tab Override** (or a bookmark) at that URL — see
   [Option 2](#option-2--use-it-as-your-firefox-new-tab) for the click-by-click steps.

No CI, bundler, or config file required — `index.html` is the entry point.

> **Note:** GitHub Pages is HTTPS, so your `localStorage` is scoped to that exact
> origin. It is separate from any data you saved while opening the file locally —
> switching URLs starts you with a fresh, empty dashboard. Your notes, todos, and
> links are **not** uploaded anywhere; see
> [Local Data & Privacy](#-local-data--privacy).

---

## 🗂️ Project Structure

> **Caption:** four files and two shims. Still no build step.

```
website/
├── index.html          # Layout, theme variables, mode buttons, command bar, panels
├── app.js              # Modes, links, search routing, history, notes, shortcuts
├── icons.js            # Loads developer-icons, serializes SVG, emoji fallback
├── 404.html            # Forwards unknown paths to the app as ?go=<name>
├── vendor/
│   ├── react-shim.js         # Minimal `react` so developer-icons runs
│   └── jsx-runtime-shim.js   # Minimal `react/jsx-runtime`
├── README.md           # You are here
└── LICENSE             # MIT
```

---

## 🛠️ Customization

### Add your own links (no editing required)

You can add tiles from the command bar, per mode:

```
:link add example.com               # name derived from the host → "Example"
:link add https://foo.dev Foo Dev   # explicit name
:link list                          # show this mode's custom links
:link remove example                # remove one by name
:link clear                         # remove all in this mode
```

Custom tiles get a dashed accent border so you can tell them apart, and a ✕ appears on hover to remove them. Only `http`/`https` URLs are accepted; bare hosts like `example.com` are upgraded to `https://`. A URL that is already a built-in for that mode is rejected rather than duplicated.

Custom links are stored per mode under `hacker_custom_links` and are fully compatible with pins, frecency, drag ordering, and command-bar search. Removing a link also clears its pin and drops it from the saved drag order. There is a limit of 30 custom links per mode.

### Add or change built-in quick links

Edit the `MODES` object at the top of `app.js`. Built-ins are never mutated, so `:link clear` always returns a mode to exactly this list.

```js
const MODES = {
    dev: {
        label: "DEV",
        accent: "#58a6ff",
        accentRgb: "88, 166, 255",
        links: [
            { name: "GitHub", url: "https://github.com", icon: "🐙" },
            // add your own:
            { name: "Hacker News", url: "https://news.ycombinator.com", icon: "📰" }
        ]
    }
    // ...
};
```

### Add a new mode

1. Add an entry to `MODES` with `label`, `accent`, `accentRgb`, and `links`.
2. Add a matching button in `index.html`:

   ```html
   <button data-mode="notes" class="mode-btn px-2.5 sm:px-3 py-1.5 flex items-center gap-2">
       <kbd class="px-1.5 py-px text-[10px] font-bold rounded">5</kbd>
       Notes
   </button>
   ```

3. Extend the keyboard handler in `app.js`:

   ```js
   case "5":
       switchMode("notes");
       break;
   ```

The accent color is applied automatically from the mode data.

### Add a search engine

Append to `SEARCH_ENGINES` in `app.js`. `{{Q}}` is replaced with the encoded query:

```js
{ name: "Wikipedia", urlTemplate: "https://en.wikipedia.org/w/index.php?search={{Q}}", shortcut: "wiki", icon: "📚" }
```

Add a matching entry to `BANGS` to get `!wiki` too:

```js
const BANGS = { /* … */ wiki: "wiki" };
```

### Per‑mode default engine

Each mode sets `defaultEngine` (a `SEARCH_ENGINES` shortcut). Change it to make plain `Enter` use a different engine:

```js
research: { label: "RESEARCH", defaultEngine: "google", pivot: true, /* … */ }
```

Setting `pivot: true` enables IOC pivots for that mode.

### Add an IOC pivot or utility

- **Pivots** live in `IOC_ACTIONS`, keyed by indicator kind (`ip`, `domain`, `url`, `cve`, `hash`, `asn`, `jwt`). Each returns `{ label, icon, url }` rows.
- **Utilities** are detected in `detectUtilities()`; return `utilityItem(label, detail, copyValue, icon)` to add a row whose `Enter` action copies `copyValue`.

### Change research dork chips

The `dorks` array controls the chip row (Research mode only):

```js
dorks: ["site:", "inurl:", "intitle:", "filetype:pdf", "filetype:sql"]
```

Add the same array to another mode to show chips there too.

### Change the theme

- Accent colors live per mode in `app.js` (`accent` + `accentRgb`).
- Base colors and the CRT/scanline effect live in the `<style>` block of `index.html`.

---

## 🎨 Icons

Tiles and command-bar rows use brand SVGs from
**[developer-icons](https://github.com/xandemon/developer-icons)** (MIT), loaded from
jsDelivr. It is a React package, so the dashboard maps `react` and
`react/jsx-runtime` to two ~1 KB shims in `vendor/` and serializes the resulting
element tree to an SVG string. **No React is shipped and there is still no build.**

- **Sizing** is CSS-only (`.dev-icon`), so one SVG works at tile and menu sizes.
- **Coverage is deliberately partial.** developer-icons is a *developer* toolset —
  it has Gmail, GitHub, npm, YouTube, Discord, Reddit, Instagram, WhatsApp, and
  Bash/Linux, but **no** Shodan, VirusTotal, DuckDuckGo, Stack Overflow, or CTF
  tooling. Those keep their emoji, so nothing renders blank.
- **Configure a mapping** by adding `devIcon` to a link:

  ```js
  { name: "GitHub", url: "https://github.com", icon: "🐙", devIcon: "GitHubDark" }
  ```

- **Custom tiles infer icons from the host** (`github.com`, `youtube.com`,
  `reddit.com`, …) with no configuration.
- **Fallback:** if the CDN is blocked or you open the page over `file://` (where
  ES modules are blocked by CORS), every icon degrades to its emoji and the app
  keeps working. Icons are also non-blocking — tiles paint before they arrive.

Browse the 332 available names via `window.devIcons.names()` in the console.

---

## 💾 Local Data & Privacy

> **Caption:** the only "cloud" here is the CRT glow on your screen.

Nothing leaves your browser except search queries, the Duck.ai visit when you click the duck, and the CDN assets. Stored keys:

| Key | Purpose |
|-----|---------|
| `hacker_tab_mode` | Last active mode |
| `hacker_link_target` | Link opening preference (`new` or `self`) |
| `hacker_notes_<mode>` | Scratchpad text for each mode |
| `hacker_todos_<mode>` | Checklist tasks for each mode (text + done flag) |
| `hacker_custom_links` | User‑added tiles, keyed by mode |
| `hacker_search_history` | Last 8 searches (query + engine) |
| `hacker_link_frecency` | Per‑link open counts + timestamps, used for ranking |
| `hacker_link_pins` | Pinned links per mode |
| `hacker_link_order` | Tile ordering (`default` or `frecency`) |
| `hacker_link_manual_order` | Per‑mode drag order (list of link URLs) |
| `hacker_link_theme` | Effects preference (`full` or `calm`) |
| `hacker_one_thing` | "Today's one thing" on the Personal console (`{date, text}`) |
| `hacker_session` | Research session stopwatch (`{elapsed, startedAt}`) |
| `hacker_ctf_target` | CTF countdown target (`YYYY-MM-DDTHH:MM`) |

Clear them anytime from Firefox **Settings → Privacy & Security → Cookies and Site Data**, or with `localStorage.clear()` in the console.

### Is my data shared with anyone?

**No.** There is no server, no account, and no database — the whole app is static
files. Specifically:

- **No `fetch`, `XMLHttpRequest`, `sendBeacon`, `WebSocket`, or `EventSource`** anywhere in `app.js`. The app never transmits your notes, todos, searches, or custom links.
- **No analytics, telemetry, or tracking pixels.**
- All state lives in `localStorage`, which is **per‑browser, per‑device, and per‑origin**.

So if you host this on GitHub Pages and two people both visit it, **they cannot
see each other's recent searches, notes, or links.** Each visitor gets a private
copy of the data on their own machine. This is also true the other way around:
**the repo owner cannot see any visitor's data** — it never leaves their browser,
and `localStorage` contents are never committed to git.

The only outbound network activity is:

| Destination | When |
|---|---|
| `cdn.tailwindcss.com` | Page load (CSS framework) |
| `cdn.jsdelivr.net` | Page load (brand icon set, ~309 KB, cached 1 year) |
| `fonts.googleapis.com` | Page load (JetBrains Mono) |
| Your chosen search engine | Only when you submit a search |
| `duck.ai` | Only when you click the duck button or press `q` |
| A pivot site (Shodan, VirusTotal, …) | Only when you pick a pivot / click a tile |

> **If you fork this:** anything that adds a backend, a hosted API key, or user
> accounts changes the answer above. Keep API keys out of the repo — GitHub Pages
> serves `app.js` publicly, so any key in it is a key anyone can read.

---

## 🧪 Verification Checklist

- [ ] Open `index.html` — command bar is focused automatically.
- [ ] Press `1`–`4` and `P R D C` — mode, accent color, active button, and label update.
- [ ] Reload — the last used mode is restored.
- [ ] Type `git` — matching links appear; use `↓` + `Enter` to open one.
- [ ] Type `gthb` — fuzzing matching still finds GitHub.
- [ ] Open one link a few times, then type a short query that matches it — it ranks near the top (frecency).
- [ ] Press `Enter` with plain text — the mode's default engine opens (Google in Research/CTF, DuckDuckGo otherwise).
- [ ] Type `!gh react` + `Enter` — GitHub search opens for “react”.
- [ ] Type `@shodan port:22` + `Enter` — Shodan search opens.
- [ ] Type `@` and use `↑`/`↓` + `Enter` — engine picker works.
- [ ] Type `b64:SGVsbG8=` — `Hello` is the first row; `Enter` copies it and a toast appears.
- [ ] Type `cidr:10.0.0.0/24` — network details appear; `Enter` copies them.
- [ ] Type `calc:2^16` — `65536` appears.
- [ ] Paste a JWT with a `jwt:` prefix (and without) — header, payload, and expiry status show up.
- [ ] In Research or CTF, paste `8.8.8.8` — Shodan is the first row and auto‑selected; `Enter` pivots. Typing it manually does *not* auto‑select.
- [ ] In Research or CTF, paste `CVE-2024-3094` and `example.com` — NVD / crt.sh pivots appear.
- [ ] Press `n` — scratchpad opens and persists per mode after reload.
- [ ] Click a tile's ☆ — it pins to the front of the grid; click again (or `:unpin`) to release.
- [ ] Pin a link, reload — the pin is still there, and it does not appear twice in the grid.
- [ ] Press `s` — the grid reorders by usage; press again to return to config order.
- [ ] Run `:order frecency` then `:pin github` — the pinned link stays first, most‑used links follow.
- [ ] Type `:` — the action list appears; `:mode dev` switches mode, `:help` lists commands.
- [ ] Run `:theme` — scanlines and glow toggle off and the choice survives a reload.
- [ ] Run `:note hello` then open the scratchpad (`n`) — the line was appended.
- [ ] Drag one tile onto another — the order changes, the tile you dragged does **not** open, and the order survives a reload.
- [ ] Drag while a link is pinned and with `:order frecency` on — the pinned link stays first, manual order wins for the rest.
- [ ] Run `:reset-order` — the grid returns to config/frecency ordering.
- [ ] Run `:link add example.com` — a dashed‑border tile appears; hover it to see the ✕, then click it to remove.
- [ ] Run `:link add https://reddit.com` — it is refused with "already built in" instead of creating a duplicate.
- [ ] Add a custom link, pin it, press `s` — it leads the grid and never appears twice.
- [ ] Press `n`, add two tasks, tick one — the counter reads `1 / 2 done · 1 open` and the 📝 button shows a dot.
- [ ] Switch to Dev and reopen the scratchpad — the Personal tasks are gone; the two lists are separate.
- [ ] Run `:todo clear` — completed tasks disappear, open ones remain.
- [ ] Switch to the `notes` tab and type — notes and tasks are stored independently.
- [ ] Click the 🦆 duck in the bottom‑right (or press `q`) — duck.ai opens, honoring the Same tab / New tab toggle.
- [ ] Toggle **Same tab / New tab** in the header — tiles and command‑bar link jumps respect it, and the choice survives a reload.
- [ ] In Research mode, click a dork chip — it is inserted into the command bar.
- [ ] Widen the window past 1280 px — the console cards move into the left and right gutters beside the centred tiles (two left, one right), and the quote sits top‑left under the header. Between 640 and 1279 px the cards fall back to a strip under the tiles. Below 640 px both disappear and the phone layout is untouched.
- [ ] Switch modes — the three console cards change with the accent in whichever host is active, and the quote keeps rotating every 3 s (hover pauses it).
- [ ] Personal: type a "one thing", press `Enter`, reload — it is still there (it resets on a new day).
- [ ] Research: start the session timer, reload — it keeps counting; `reset` returns it to zero.
- [ ] Research: paste `8.8.8.8` into IOC pivot — Shodan, VirusTotal, AbuseIPDB and urlscan.io chips appear.
- [ ] Dev: type `hi` + `b64 ↑` — `aGk=`; `url ↑` on `a b&c` — `a%20b%26c`; type `abc` — SHA‑256 starts with `ba7816bf`.
- [ ] CTF: paste a 32‑character hex string — it is identified as MD5; change the datetime — the countdown follows.
- [ ] Resize the window — the grid reflows without horizontal scroll.

---

## 🧱 Tech Stack

No framework. No bundler. No 400MB of `node_modules` for a page that shows nine tiles.

- **HTML5** — semantic layout
- **Tailwind CSS** via CDN — utility styling
- **Vanilla JavaScript** — no framework, no bundler
- **[developer-icons](https://github.com/xandemon/developer-icons)** (MIT) via CDN — brand SVG icons, no React runtime (see [Icons](#-icons))
- **JetBrains Mono** — terminal typography
- **localStorage** — mode, notes, search history, and link frecency

---

## 🗺️ Roadmap / More Ideas

Useful additions if you want to keep building:

> **Caption:** it already does more than it should. Here's what it could do next.

- **Manual link ordering** — drag‑to‑reorder is in; the next step could be a keyboard/sortable fallback for touch.
- **Per‑mode todo lists** — turn the scratchpad into checklists with `[ ]`.
- **Custom link editor in the UI** — adding links works today via `:link add`; a click‑to‑edit form (rename, change icon, edit existing tiles) is the next step.
- **CTF event countdown** — pull upcoming events from the CTFtime API.
- **Command actions** — `:notes`, `:mode ctf`, `:clear-history` in the command bar.
- **Import browser bookmarks** — one‑click import into a mode.
- **Offline/PWA support** — service worker + installable dashboard.
- **Light theme toggle** — keep the terminal look, switch to a paper palette.
- **Copy‑friendly output** — export a decoded result or IOC report as a shareable block.

---

## 🤝 Contributing

1. Fork the repo.
2. Create a branch: `git checkout -b feat/my-change`.
3. Commit: `git commit -m "feat: add my change"`.
4. Push and open a Pull Request.

Keep changes dependency‑free and consistent with the existing terminal style.

---

## 📄 License

[MIT](LICENSE) © 2026 a0x14d

In short: use it, fork it, change it, ship it — just keep the copyright notice.
No warranty of any kind.

---

<div align="center">

### ⌨️ Built for people who press `/` before they press the mouse.

**If your new tab page is still someone else's ad space, you know what to do.**

⭐ **Star it · 🍴 Fork it · 🚩 Break it · 🔧 Fix it**

<sub>Made with vanilla JS, caffeine, and an unreasonable attachment to monospace fonts.</sub>

<br>

**[⬆ Back to top](#-hacker-new-tab)**

</div>
