/* =========================================================
   Hacker New Tab — modes, command bar, scratchpad, shortcuts
   ========================================================= */

// ---------- Data ----------
const MODES = {
    personal: {
        label: "PERSONAL",
        accent: "#3fb950",
        accentRgb: "63, 185, 80",
        defaultEngine: "ddg",
        links: [
            { name: "Gmail", url: "https://mail.google.com", icon: "✉️", flaticonIcon: "fi fi-brands-google" },
            { name: "ProtonMail", url: "https://mail.proton.me", icon: "🔒" },
            { name: "Calendar", url: "https://calendar.google.com", icon: "📅", flaticonIcon: "fi fi-rr-calendar" },
            { name: "Maps", url: "https://maps.google.com", icon: "🗺️", flaticonIcon: "fi fi-rr-marker" },
            { name: "WhatsApp", url: "https://web.whatsapp.com", icon: "💬", flaticonIcon: "fi fi-brands-whatsapp" },
            { name: "YouTube", url: "https://youtube.com", icon: "📺", flaticonIcon: "fi fi-brands-youtube" },
            { name: "Instagram", url: "https://instagram.com", icon: "📸", flaticonIcon: "fi fi-brands-instagram" },
            { name: "Reddit", url: "https://reddit.com", icon: "🤖", flaticonIcon: "fi fi-brands-reddit" },
            { name: "Discord", url: "https://discord.com", icon: "💬", flaticonIcon: "fi fi-brands-discord" },
            { name: "YTMusic", url: "https://music.youtube.com", icon: "🎵" }
        ]
    },
    research: {
        label: "RESEARCH",
        accent: "#d29922",
        accentRgb: "210, 153, 34",
        defaultEngine: "google",
        pivot: true,
        dorks: ["site:", "inurl:", "intitle:", "intext:", "filetype:pdf", "filetype:sql", "-inurl:", "ext:log"],
        links: [
            { name: "Google", url: "https://google.com", icon: "🔍", flaticonIcon: "fi fi-brands-google" },
            { name: "Shodan", url: "https://shodan.io", icon: "🌐" },
            { name: "VirusTotal", url: "https://virustotal.com", icon: "🛡️" },
            { name: "urlscan.io", url: "https://urlscan.io", icon: "🔬" },
            { name: "crt.sh", url: "https://crt.sh", icon: "📜" },
            { name: "Wayback Machine", url: "https://web.archive.org", icon: "🗄️" },
            { name: "DNSDumpster", url: "https://dnsdumpster.com", icon: "🧭" },
            { name: "Exploit-DB", url: "https://exploit-db.com", icon: "⚡" }
        ]
    },
    dev: {
        label: "DEV",
        accent: "#58a6ff",
        accentRgb: "88, 166, 255",
        defaultEngine: "ddg",
        links: [
            { name: "GitHub", url: "https://github.com", icon: "🐙", flaticonIcon: "fi fi-brands-github" },
            { name: "Stack Overflow", url: "https://stackoverflow.com", icon: "💬", flaticonIcon: "fi fi-brands-stack-overflow" },
            { name: "MDN Docs", url: "https://developer.mozilla.org", icon: "📖", flaticonIcon: "fi fi-brands-firefox-browser" },
            { name: "DevDocs", url: "https://devdocs.io", icon: "📚" },
            { name: "npm", url: "https://www.npmjs.com", icon: "📦", flaticonIcon: "fi fi-brands-npm" },
            { name: "Regex101", url: "https://regex101.com", icon: "🧪" },
            { name: "Can I use", url: "https://caniuse.com", icon: "🧷" },
            { name: "Medium", url: "https://medium.com", icon: "✍️", flaticonIcon: "fi fi-brands-medium" },
            { name: "The Hacker News", url: "https://thehackernews.com", icon: "📰" }
        ]
    },
    ctf: {
        label: "CTF",
        accent: "#f85149",
        accentRgb: "248, 81, 73",
        defaultEngine: "google",
        pivot: true,
        links: [
            { name: "HackTheBox", url: "https://www.hackthebox.com", icon: "📦" },
            { name: "TryHackMe", url: "https://tryhackme.com", icon: "🔴" },
            { name: "CTFtime", url: "https://ctftime.org", icon: "🚩" },
            { name: "PortSwigger", url: "https://portswigger.net/web-security", icon: "🧪" },
            { name: "CTF Sites", url: "https://ctfsites.github.io/", icon: "📚" },
            { name: "CyberChef", url: "https://gchq.github.io/CyberChef/", icon: "🧰" },
            { name: "RevShells", url: "https://www.revshells.com", icon: "🐚" },
            { name: "GTFOBins", url: "https://gtfobins.github.io", icon: "🐧" },
            { name: "PayloadsAllTheThings", url: "https://github.com/swisskyrepo/PayloadsAllTheThings", icon: "💥", flaticonIcon: "fi fi-brands-github" }
        ]
    }
};

const SEARCH_ENGINES = [
    { name: "DuckDuckGo", urlTemplate: "https://duckduckgo.com/?q={{Q}}", shortcut: "ddg", icon: "🦆" },
    { name: "Google", urlTemplate: "https://www.google.com/search?q={{Q}}", shortcut: "google", icon: "🔍", flaticonIcon: "fi fi-brands-google" },
    { name: "Shodan", urlTemplate: "https://www.shodan.io/search?query={{Q}}", shortcut: "shodan", icon: "🌐" },
    { name: "VirusTotal", urlTemplate: "https://www.virustotal.com/gui/search?query={{Q}}", shortcut: "vt", icon: "🛡️" },
    { name: "GitHub", urlTemplate: "https://github.com/search?q={{Q}}", shortcut: "gh", icon: "🐙", flaticonIcon: "fi fi-brands-github" },
    { name: "Exploit-DB", urlTemplate: "https://www.exploit-db.com/search?q={{Q}}", shortcut: "edb", icon: "⚡" }
];

// ---------- Storage keys ----------
const MODE_KEY = "hacker_tab_mode";
const NOTES_PREFIX = "hacker_notes_";
const TODO_PREFIX = "hacker_todos_";
const CUSTOM_LINKS_KEY = "hacker_custom_links";
const HISTORY_KEY = "hacker_search_history";
const TARGET_KEY = "hacker_link_target";
const FRECENCY_KEY = "hacker_link_frecency";
const ORDER_KEY = "hacker_link_order";
const PIN_KEY = "hacker_link_pins";
const MANUAL_ORDER_KEY = "hacker_link_manual_order";
const THEME_KEY = "hacker_link_theme";
const HISTORY_LIMIT = 8;

// Bang shortcuts: !g, !gh, !vt, !sh, !edb, !d
const BANGS = {
    g: "google",
    google: "google",
    gh: "gh",
    github: "gh",
    vt: "vt",
    virustotal: "vt",
    sh: "shodan",
    shodan: "shodan",
    edb: "edb",
    d: "ddg",
    ddg: "ddg"
};

// ---------- State ----------
let currentMode = localStorage.getItem(MODE_KEY);
if (!MODES[currentMode]) currentMode = "personal";

let linkTarget = localStorage.getItem(TARGET_KEY) === "new" ? "new" : "self";
let tileOrder = localStorage.getItem(ORDER_KEY) === "frecency" ? "frecency" : "default";

let menuItems = [];
let selectedIndex = -1;
let firstFocus = true;
let pastedInput = false;

// ---------- Elements ----------
const linksContainer = document.getElementById("links-container");
const searchInput = document.getElementById("search-input");
const searchDropdown = document.getElementById("search-dropdown");
const dorkBar = document.getElementById("dork-bar");
const scratchpad = document.getElementById("scratchpad");
const scratchpadInput = document.getElementById("scratchpad-input");
const scratchpadMode = document.getElementById("scratchpad-mode");
const scratchpadTodos = document.getElementById("scratchpad-todos");
const scratchpadNotes = document.getElementById("scratchpad-notes");
const tabTodos = document.getElementById("tab-todos");
const tabNotes = document.getElementById("tab-notes");
const todoInput = document.getElementById("todo-input");
const todoAdd = document.getElementById("todo-add");
const todoList = document.getElementById("todo-list");
const todoProgress = document.getElementById("todo-progress");
const todoEmpty = document.getElementById("todo-empty");
const notesToggle = document.getElementById("notes-toggle");
const modeLabel = document.getElementById("current-mode-label");
const clock = document.getElementById("clock");
const targetToggle = document.getElementById("target-toggle");
const targetToggleIcon = document.getElementById("target-toggle-icon");
const targetToggleLabel = document.getElementById("target-toggle-label");
const toast = document.getElementById("toast");
const duckBtn = document.getElementById("duck-btn");

// ---------- Storage helpers ----------
function getHistory() {
    try {
        const parsed = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
        return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
        return [];
    }
}

function pushHistory(query, engineName) {
    if (!query) return;
    const history = getHistory().filter(
        (item) => !(item.query === query && item.engine === engineName)
    );
    history.unshift({ query, engine: engineName });
    try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, HISTORY_LIMIT)));
    } catch (err) {
        /* storage unavailable — history is best-effort */
    }
}

function getNotes(mode) {
    try {
        return localStorage.getItem(NOTES_PREFIX + mode) || "";
    } catch (err) {
        return "";
    }
}

function saveNotes(mode, value) {
    try {
        localStorage.setItem(NOTES_PREFIX + mode, value);
    } catch (err) {
        /* ignore quota/private-mode errors */
    }
}

// ---------- Per-mode todo checklist ----------
// Tasks live in their own key so the free-form notes stay untouched.
function getTodos(mode) {
    try {
        const parsed = JSON.parse(localStorage.getItem(TODO_PREFIX + mode) || "[]");
        if (!Array.isArray(parsed)) return [];
        return parsed
            .filter((item) => item && typeof item.text === "string")
            .map((item) => ({ text: item.text, done: Boolean(item.done) }));
    } catch (err) {
        return [];
    }
}

function saveTodos(mode, todos) {
    try {
        localStorage.setItem(TODO_PREFIX + mode, JSON.stringify(todos));
    } catch (err) {
        /* best effort */
    }
}

function addTodo(mode, text) {
    const cleaned = String(text).replace(/\s+/g, " ").trim();
    if (!cleaned) return null;
    const todos = getTodos(mode);
    todos.push({ text: cleaned, done: false });
    saveTodos(mode, todos);
    return todos;
}

function setTodoDone(mode, index, done) {
    const todos = getTodos(mode);
    if (index < 0 || index >= todos.length) return;
    todos[index].done = Boolean(done);
    saveTodos(mode, todos);
}

function removeTodo(mode, index) {
    const todos = getTodos(mode);
    if (index < 0 || index >= todos.length) return;
    todos.splice(index, 1);
    saveTodos(mode, todos);
}

function clearDoneTodos(mode) {
    const todos = getTodos(mode).filter((todo) => !todo.done);
    saveTodos(mode, todos);
    return todos;
}

function todoSummary(mode) {
    const todos = getTodos(mode);
    const done = todos.filter((todo) => todo.done).length;
    return { total: todos.length, done, open: todos.length - done };
}

// Resolve a task by 1-based number or by fuzzy text match.
function findTodoIndex(mode, term) {
    const todos = getTodos(mode);
    const query = String(term || "").trim().toLowerCase();
    if (!query) return -1;

    if (/^\d+$/.test(query)) {
        const index = Number(query) - 1;
        return index >= 0 && index < todos.length ? index : -1;
    }

    const exact = todos.findIndex((todo) => todo.text.toLowerCase() === query);
    if (exact !== -1) return exact;

    const partial = todos.findIndex((todo) => todo.text.toLowerCase().includes(query));
    if (partial !== -1) return partial;

    return todos.findIndex((todo) => fuzzyScore(todo.text, query) >= 0);
}

// ---------- Custom links ----------
// Users can add their own tiles per mode. Built-ins stay in MODES and are
// never mutated, so custom links can always be reset away.
const MAX_CUSTOM_LINKS = 30;
const MAX_LINK_NAME = 32;

function getCustomLinks() {
    try {
        const parsed = JSON.parse(localStorage.getItem(CUSTOM_LINKS_KEY) || "{}");
        if (!parsed || typeof parsed !== "object") return {};
        const clean = {};
        Object.entries(parsed).forEach(([modeKey, list]) => {
            if (!Array.isArray(list)) return;
            clean[modeKey] = list
                .filter((link) => link && typeof link.url === "string" && link.url)
                .map((link) => ({
                    name: String(link.name || link.url).slice(0, MAX_LINK_NAME),
                    url: link.url,
                    icon: typeof link.icon === "string" && link.icon ? link.icon : "🔗",
                    custom: true
                }));
        });
        return clean;
    } catch (err) {
        return {};
    }
}

function saveCustomLinks(all) {
    try {
        localStorage.setItem(CUSTOM_LINKS_KEY, JSON.stringify(all));
    } catch (err) {
        /* best effort */
    }
}

function getCustomLinksFor(modeKey) {
    return getCustomLinks()[modeKey] || [];
}

// Built-in links plus any the user added, with duplicates by URL removed.
function getModeLinks(modeKey) {
    const mode = MODES[modeKey];
    if (!mode) return [];

    const seen = new Set();
    const merged = [];

    [...mode.links, ...getCustomLinksFor(modeKey)].forEach((link) => {
        const key = normalizeUrl(link.url) || link.url;
        if (seen.has(key)) return;
        seen.add(key);
        merged.push(link);
    });

    return merged;
}

// Accept "example.com", "https://example.com/path" etc. and normalise.
function normalizeUrl(value) {
    const raw = String(value || "").trim();
    if (!raw) return "";
    const withScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(raw) ? raw : `https://${raw}`;
    try {
        const parsed = new URL(withScheme);
        if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return "";
        if (!parsed.hostname.includes(".")) return "";
        return parsed.href;
    } catch (err) {
        return "";
    }
}

// Derive a readable name from a URL when the user does not give one.
function nameFromUrl(url) {
    try {
        const host = new URL(url).hostname.replace(/^www\./, "");
        const label = host.split(".")[0];
        return label.charAt(0).toUpperCase() + label.slice(1);
    } catch (err) {
        return url;
    }
}

// Two links are "the same" when their normalised URLs match. Built-ins are
// stored unnormalised (https://reddit.com) while user input goes through
// normalizeUrl (https://reddit.com/), so compare canonically.
function sameUrl(a, b) {
    const left = normalizeUrl(a);
    const right = normalizeUrl(b);
    if (!left || !right) return String(a) === String(b);
    return left === right;
}

function findLinkByUrl(modeKey, url) {
    return getModeLinks(modeKey).find((link) => sameUrl(link.url, url)) || null;
}

function addCustomLink(modeKey, name, url, icon) {
    const all = getCustomLinks();
    const list = all[modeKey] || [];

    if (list.length >= MAX_CUSTOM_LINKS) {
        return { ok: false, reason: `Limit is ${MAX_CUSTOM_LINKS} custom links per mode` };
    }
    if (MODES[modeKey].links.some((link) => sameUrl(link.url, url))) {
        return { ok: false, reason: "That link is already built in" };
    }
    if (list.some((link) => sameUrl(link.url, url))) {
        return { ok: false, reason: "That link is already added" };
    }

    const entry = {
        name: (name || nameFromUrl(url)).slice(0, MAX_LINK_NAME),
        url,
        icon: icon || "🔗",
        custom: true
    };

    all[modeKey] = [...list, entry];
    saveCustomLinks(all);
    return { ok: true, link: entry };
}

function removeCustomLink(modeKey, url) {
    const all = getCustomLinks();
    const list = all[modeKey] || [];
    const next = list.filter((link) => !sameUrl(link.url, url));
    if (next.length === list.length) return false;
    all[modeKey] = next;
    saveCustomLinks(all);
    return true;
}

function clearCustomLinks(modeKey) {
    const all = getCustomLinks();
    const count = (all[modeKey] || []).length;
    delete all[modeKey];
    saveCustomLinks(all);
    return count;
}

function isCustomLink(url) {
    return getCustomLinksFor(currentMode).some((link) => sameUrl(link.url, url));
}

// ---------- Link frecency ----------
function getFrecency() {
    try {
        const parsed = JSON.parse(localStorage.getItem(FRECENCY_KEY) || "{}");
        return parsed && typeof parsed === "object" ? parsed : {};
    } catch (err) {
        return {};
    }
}

function recordLinkOpen(url) {
    const data = getFrecency();
    const entry = data[url] || { c: 0, t: 0 };
    entry.c += 1;
    entry.t = Date.now();
    data[url] = entry;
    try {
        localStorage.setItem(FRECENCY_KEY, JSON.stringify(data));
    } catch (err) {
        /* best effort */
    }
}

// ---------- Pinned links ----------
function getPins() {
    try {
        const parsed = JSON.parse(localStorage.getItem(PIN_KEY) || "{}");
        return parsed && typeof parsed === "object" ? parsed : {};
    } catch (err) {
        return {};
    }
}

function isPinned(mode, url) {
    return Boolean(getPins()[mode] && getPins()[mode].includes(url));
}

function setPinned(mode, url, pinned) {
    const pins = getPins();
    const list = new Set(pins[mode] || []);
    if (pinned) list.add(url);
    else list.delete(url);
    pins[mode] = [...list];
    try {
        localStorage.setItem(PIN_KEY, JSON.stringify(pins));
    } catch (err) {
        /* best effort */
    }
}

function getTileOrder() {
    return tileOrder;
}

function setTileOrder(mode) {
    tileOrder = mode === "frecency" ? "frecency" : "default";
    try {
        localStorage.setItem(ORDER_KEY, tileOrder);
    } catch (err) {
        /* best effort */
    }
}

// ---------- Manual link order (drag & drop) ----------
function getManualOrder() {
    try {
        const parsed = JSON.parse(localStorage.getItem(MANUAL_ORDER_KEY) || "{}");
        return parsed && typeof parsed === "object" ? parsed : {};
    } catch (err) {
        return {};
    }
}

// Saved manual order for a mode, filtered down to links that still exist.
function getManualOrderFor(modeKey, links) {
    const saved = getManualOrder()[modeKey];
    if (!Array.isArray(saved)) return [];
    const present = new Set(links.map((link) => link.url));
    return saved.filter((url) => present.has(url));
}

function saveManualOrder(modeKey, urls) {
    const all = getManualOrder();
    all[modeKey] = urls;
    try {
        localStorage.setItem(MANUAL_ORDER_KEY, JSON.stringify(all));
    } catch (err) {
        /* best effort */
    }
}

function clearManualOrder(modeKey) {
    const all = getManualOrder();
    delete all[modeKey];
    try {
        localStorage.setItem(MANUAL_ORDER_KEY, JSON.stringify(all));
    } catch (err) {
        /* best effort */
    }
}

// ---------- Shared ranking ----------
// Frecency with a 14-day half-life, so stale habits fade out.
function frecencyValue(url, freq) {
    const entry = (freq || getFrecency())[url];
    if (!entry || !entry.c) return 0;
    const ageDays = Math.max(0, (Date.now() - (entry.t || 0)) / 86400000);
    return entry.c * Math.pow(0.5, ageDays / 14);
}

// Pinned links first, then manual/frecency/config order.
// Precedence: manual drag order overrides frecency, and pins override both.
function orderLinks(links, applyFrecency) {
    const freq = getFrecency();
    const pins = getPins()[currentMode] || [];
    const pinnedSet = new Set(pins);

    // Links the user dragged keep their exact slot; frecency only orders
    // the rest. Build the list position by position so nothing is dropped.
    const manual = getManualOrderFor(currentMode, links);
    const byUrl = new Map(links.map((link) => [link.url, link]));
    const manualBySlot = new Map(manual.map((url, index) => [index, byUrl.get(url)]));

    let pool = links.filter((link) => !manual.includes(link.url));

    if (applyFrecency) {
        pool = pool
            .map((link, index) => ({ link, index, score: frecencyValue(link.url, freq) }))
            .sort((a, b) => b.score - a.score || a.index - b.index)
            .map((entry) => entry.link);
    }

    const total = manual.length + pool.length;
    const ordered = [];
    for (let slot = 0; slot < total; slot += 1) {
        if (manualBySlot.has(slot)) ordered.push(manualBySlot.get(slot));
        else if (pool.length) ordered.push(pool.shift());
    }

    // Pinned links lead, but keep their relative manual/usage order.
    const pinnedLinks = ordered.filter((link) => pinnedSet.has(link.url));
    const rest = ordered.filter((link) => !pinnedSet.has(link.url));

    return [...pinnedLinks, ...rest];
}

// ---------- Small helpers ----------
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function truncate(value, max) {
    const text = String(value);
    return text.length > max ? text.slice(0, max - 1) + "…" : text;
}

let toastTimer = null;

function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

async function copyText(text) {
    if (!text) {
        showToast("Nothing to copy");
        return;
    }
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        const helper = document.createElement("textarea");
        helper.value = text;
        helper.style.position = "fixed";
        helper.style.opacity = "0";
        document.body.appendChild(helper);
        helper.select();
        try {
            document.execCommand("copy");
        } catch (err2) {
            helper.remove();
            showToast("Copy failed");
            return;
        }
        helper.remove();
    }
    showToast("Copied to clipboard");
}

function sha256Hex(text) {
    if (!window.crypto || !window.crypto.subtle) return Promise.resolve(null);
    return window.crypto.subtle
        .digest("SHA-256", new TextEncoder().encode(text))
        .then((buffer) =>
            Array.from(new Uint8Array(buffer))
                .map((byte) => byte.toString(16).padStart(2, "0"))
                .join("")
        )
        .catch(() => null);
}

// ---------- Decoders / calculators ----------
function base64UrlDecode(value) {
    const padded = value
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(Math.ceil(value.length / 4) * 4, "=");
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
}

function tryBase64Decode(value) {
    try {
        return base64UrlDecode(value);
    } catch (err) {
        return null;
    }
}

function tryBase64Encode(value) {
    try {
        const bytes = new TextEncoder().encode(value);
        let binary = "";
        bytes.forEach((byte) => {
            binary += String.fromCharCode(byte);
        });
        return btoa(binary);
    } catch (err) {
        return null;
    }
}

function rot13(value) {
    return value.replace(/[a-z]/gi, (char) => {
        const base = char <= "Z" ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
    });
}

function isJwt(value) {
    return /^eyJ[\w-]*\.[\w-]+\.[\w-]*$/.test(value);
}

function decodeJwt(token) {
    const parts = token.split(".");
    if (parts.length < 2) return null;
    try {
        return {
            header: JSON.parse(base64UrlDecode(parts[0])),
            payload: JSON.parse(base64UrlDecode(parts[1]))
        };
    } catch (err) {
        return null;
    }
}

function jwtUtilities(token) {
    const decoded = decodeJwt(token);
    if (!decoded) return [];

    const { header, payload } = decoded;
    let expiry = "";
    if (typeof payload.exp === "number") {
        const when = new Date(payload.exp * 1000);
        expiry =
            when.getTime() < Date.now()
                ? " · EXPIRED " + when.toISOString().slice(0, 10)
                : " · expires " + when.toISOString().slice(0, 10);
    }

    return [
        utilityItem(
            "JWT payload",
            truncate(JSON.stringify(payload), 60) + expiry,
            JSON.stringify(payload, null, 2),
            "🔓"
        ),
        utilityItem(
            "JWT header",
            `alg: ${header.alg || "unknown"}`,
            JSON.stringify(header, null, 2),
            "🧾"
        )
    ];
}

function parseCidr(value) {
    const match = value.match(/^((?:\d{1,3}\.){3}\d{1,3})\/(\d{1,2})$/);
    if (!match) return null;

    const octets = match[1].split(".").map(Number);
    if (octets.some((octet) => octet > 255)) return null;
    const bits = Number(match[2]);
    if (bits > 32) return null;

    const ipInt =
        ((octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3]) >>> 0;
    const mask = bits === 0 ? 0 : (0xffffffff << (32 - bits)) >>> 0;
    const network = (ipInt & mask) >>> 0;
    const broadcast = (network | (~mask >>> 0)) >>> 0;
    const hosts = bits >= 31 ? (bits === 32 ? 1 : 2) : Math.pow(2, 32 - bits) - 2;

    return {
        bits,
        network: intToIp(network),
        broadcast: intToIp(broadcast),
        first: intToIp(bits >= 31 ? network : network + 1),
        last: intToIp(bits >= 31 ? broadcast : broadcast - 1),
        hosts
    };
}

function intToIp(value) {
    return [24, 16, 8, 0].map((shift) => (value >>> shift) & 255).join(".");
}

function cidrUtility(value) {
    const info = parseCidr(value);
    if (!info) return null;
    return utilityItem(
        "CIDR",
        `${info.network}/${info.bits} · ${info.hosts} hosts · ${info.first} – ${info.last}`,
        `${info.network}/${info.bits}\nrange: ${info.first} – ${info.last}\nbroadcast: ${info.broadcast}\nhosts: ${info.hosts}`,
        "🧮"
    );
}

function epochUtility(value) {
    if (!/^\d{10,13}$/.test(value)) return null;
    const ms = value.length === 13 ? Number(value) : Number(value) * 1000;
    const date = new Date(ms);
    if (Number.isNaN(date.getTime())) return null;

    const iso = date.toISOString();
    const utc = iso.slice(0, 19).replace("T", " ") + " UTC";
    return utilityItem("Epoch", `${utc} · local ${date.toLocaleString()}`, iso, "🕰️");
}

function evaluateExpression(expression) {
    const compact = expression.replace(/\s+/g, "");
    if (!compact || !/^[\d.+\-*/%^()]+$/.test(compact)) return null;
    if (!/[+\-*/%^]/.test(compact) || !/\d/.test(compact)) return null;

    const tokens = compact.match(/\d+(?:\.\d+)?|[()+\-*/%^]/g);
    if (!tokens || tokens.join("") !== compact) return null;

    let index = 0;
    const peek = () => tokens[index];
    const next = () => tokens[index++];

    function parsePrimary() {
        const token = next();
        if (token === "(") {
            const value = parseExpression();
            if (next() !== ")") throw new Error("parenthesis");
            return value;
        }
        if (token === undefined || !/^\d/.test(token)) throw new Error("number");
        return Number(token);
    }

    function parsePower() {
        const base = parsePrimary();
        if (peek() === "^") {
            next();
            return Math.pow(base, parseUnary());
        }
        return base;
    }

    function parseUnary() {
        const token = peek();
        if (token === "+" || token === "-") {
            next();
            const value = parseUnary();
            return token === "-" ? -value : value;
        }
        return parsePower();
    }

    function parseTerm() {
        let value = parseUnary();
        while (peek() === "*" || peek() === "/" || peek() === "%") {
            const op = next();
            const right = parseUnary();
            if (op === "*") value *= right;
            else if (op === "/") value /= right;
            else value %= right;
        }
        return value;
    }

    function parseExpression() {
        let value = parseTerm();
        while (peek() === "+" || peek() === "-") {
            const op = next();
            const right = parseTerm();
            value = op === "+" ? value + right : value - right;
        }
        return value;
    }

    try {
        const result = parseExpression();
        if (index !== tokens.length || !Number.isFinite(result)) return null;
        return result;
    } catch (err) {
        return null;
    }
}

function mathUtility(value) {
    const expression = value.replace(/^calc:/i, "").trim();
    const result = evaluateExpression(expression);
    if (result === null) return null;
    const formatted = Number.isInteger(result)
        ? String(result)
        : String(Number(result.toFixed(10)));
    return utilityItem("Calc", `${expression} = ${formatted}`, formatted, "🧮");
}

function utilityItem(label, detail, copy, icon) {
    return { type: "utility", label, detail: String(detail), copy: String(copy), icon };
}

function detectUtilities(value) {
    const raw = value.trim();
    if (!raw) return [];

    const items = [];
    let match;

    if ((match = raw.match(/^b64:(.+)$/i))) {
        const decoded = tryBase64Decode(match[1].trim());
        items.push(
            decoded !== null
                ? utilityItem("Base64 decode", decoded, decoded, "🔓")
                : utilityItem("Base64 decode", "invalid base64 input", "", "⚠️")
        );
    } else if ((match = raw.match(/^b64e:(.+)$/i))) {
        const encoded = tryBase64Encode(match[1]);
        items.push(
            encoded !== null
                ? utilityItem("Base64 encode", encoded, encoded, "🔒")
                : utilityItem("Base64 encode", "encoding failed", "", "⚠️")
        );
    } else if ((match = raw.match(/^hex:(.+)$/i))) {
        const hex = match[1].replace(/\s+/g, "");
        if (!/^[0-9a-f]+$/i.test(hex) || hex.length % 2 !== 0) {
            items.push(utilityItem("Hex decode", "invalid hex input", "", "⚠️"));
        } else {
            const bytes = new Uint8Array(
                hex.match(/../g).map((pair) => parseInt(pair, 16))
            );
            const decoded = new TextDecoder().decode(bytes);
            items.push(utilityItem("Hex decode", decoded, decoded, "🔓"));
        }
    } else if ((match = raw.match(/^url:(.+)$/i))) {
        let decoded = null;
        try {
            decoded = decodeURIComponent(match[1]);
        } catch (err) {
            decoded = null;
        }
        items.push(
            decoded !== null
                ? utilityItem("URL decode", decoded, decoded, "🔓")
                : utilityItem("URL decode", "invalid URL encoding", "", "⚠️")
        );
    } else if ((match = raw.match(/^rot13:(.+)$/i))) {
        const decoded = rot13(match[1]);
        items.push(utilityItem("ROT13", decoded, decoded, "🔄"));
    } else if ((match = raw.match(/^jwt:(.+)$/i))) {
        const decoded = jwtUtilities(match[1].trim());
        items.push(
            ...(decoded.length
                ? decoded
                : [utilityItem("JWT", "invalid token", "", "⚠️")])
        );
    } else if ((match = raw.match(/^sha256:(.+)$/i))) {
        items.push({
            type: "utility",
            label: "SHA-256",
            detail: "computing…",
            copy: "",
            icon: "🔐",
            pending: match[1]
        });
    } else if ((match = raw.match(/^epoch:(\d{10,13})$/i))) {
        const item = epochUtility(match[1]);
        if (item) items.push(item);
    } else if ((match = raw.match(/^cidr:(.+)$/i))) {
        const item = cidrUtility(match[1].trim());
        items.push(
            item || utilityItem("CIDR", "invalid CIDR (use 10.0.0.0/24)", "", "⚠️")
        );
    } else if ((match = raw.match(/^calc:(.+)$/i))) {
        const item = mathUtility(match[1]);
        if (item) items.push(item);
    }

    if (!items.length) {
        if (isJwt(raw)) {
            items.push(...jwtUtilities(raw));
        } else if (/^(?:\d{1,3}\.){3}\d{1,3}\/\d{1,2}$/.test(raw)) {
            const item = cidrUtility(raw);
            if (item) items.push(item);
        } else if (/[\d.]+[+\-*/%^]/.test(raw)) {
            const item = mathUtility(raw);
            if (item) items.push(item);
        }
    }

    return items;
}

// ---------- IOC pivoting (Research / CTF) ----------
const IOC_ACTIONS = {
    ip: (target) => [
        { label: "Shodan", icon: "🌐", url: `https://www.shodan.io/host/${target}` },
        { label: "VirusTotal", icon: "🛡️", url: `https://www.virustotal.com/gui/ip-address/${target}` },
        { label: "AbuseIPDB", icon: "🚨", url: `https://www.abuseipdb.com/check/${target}` },
        { label: "urlscan.io", icon: "🔬", url: `https://urlscan.io/ip/${target}` }
    ],
    domain: (target) => [
        { label: "crt.sh", icon: "📜", url: `https://crt.sh/?q=${encodeURIComponent(target)}` },
        { label: "VirusTotal", icon: "🛡️", url: `https://www.virustotal.com/gui/domain/${target}` },
        { label: "urlscan.io", icon: "🔬", url: `https://urlscan.io/domain/${target}` },
        { label: "Wayback Machine", icon: "🗄️", url: `https://web.archive.org/web/*/${target}` }
    ],
    url: (target) => {
        let host = "";
        let vtId = "";
        try {
            host = new URL(target).hostname;
        } catch (err) {
            /* ignore */
        }
        try {
            vtId = btoa(target).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
        } catch (err) {
            /* ignore */
        }

        const actions = [{ label: "Open URL", icon: "↗", url: target }];
        if (vtId) {
            actions.push({
                label: "VirusTotal",
                icon: "🛡️",
                url: `https://www.virustotal.com/gui/url/${vtId}`
            });
        }
        actions.push({
            label: "Wayback",
            icon: "🗄️",
            url: `https://web.archive.org/web/*/${target}`
        });
        if (host) {
            actions.push({
                label: "urlscan (host)",
                icon: "🔬",
                url: `https://urlscan.io/domain/${host}`
            });
        }
        return actions;
    },
    cve: (target) => [
        { label: "NVD", icon: "📋", url: `https://nvd.nist.gov/vuln/detail/${target}` },
        {
            label: "Exploit-DB",
            icon: "⚡",
            url: `https://www.exploit-db.com/search?cve=${encodeURIComponent(target.replace("CVE-", ""))}`
        },
        {
            label: "GitHub advisories",
            icon: "🐙",
            url: `https://github.com/advisories?query=${encodeURIComponent(target)}`
        }
    ],
    hash: (target) => [
        { label: "VirusTotal", icon: "🛡️", url: `https://www.virustotal.com/gui/file/${target}` },
        { label: "MalwareBazaar", icon: "🧬", url: `https://bazaar.abuse.ch/sample/${target}/` },
        {
            label: "Hybrid Analysis",
            icon: "🔬",
            url: `https://www.hybrid-analysis.com/search?query=${target}`
        }
    ],
    asn: (target) => [
        { label: "bgp.he.net", icon: "🕸️", url: `https://bgp.he.net/${target}` },
        {
            label: "Shodan",
            icon: "🌐",
            url: `https://www.shodan.io/search?query=asn%3A${target.replace(/^AS/i, "")}`
        }
    ],
    jwt: (target) => [
        { label: "jwt.io", icon: "🔓", url: `https://jwt.io/#debugger-io?token=${target}` }
    ]
};

function hashLabel(hash) {
    return (
        {
            32: "MD5 hash",
            40: "SHA-1 hash",
            64: "SHA-256 hash",
            128: "SHA-512 hash"
        }[hash.length] || "hash"
    );
}

function parseIOC(value) {
    const raw = value.trim();
    if (!raw || /\s/.test(raw)) return null;

    if (/^https?:\/\/\S+$/i.test(raw)) {
        return { kind: "url", target: raw, label: "URL" };
    }

    if (/^CVE-\d{4}-\d{4,}$/i.test(raw)) {
        const target = raw.toUpperCase();
        return { kind: "cve", target, label: target };
    }

    if (/^AS\d{1,10}$/i.test(raw)) {
        const target = raw.toUpperCase();
        return { kind: "asn", target, label: target };
    }

    if (
        /^(?:\d{1,3}\.){3}\d{1,3}$/.test(raw) &&
        raw.split(".").every((part) => Number(part) <= 255)
    ) {
        return { kind: "ip", target: raw, label: raw };
    }

    if (/^[a-f0-9]{32}$|^[a-f0-9]{40}$|^[a-f0-9]{64}$|^[a-f0-9]{128}$/i.test(raw)) {
        const target = raw.toLowerCase();
        return { kind: "hash", target, label: hashLabel(target) };
    }

    if (isJwt(raw)) {
        return { kind: "jwt", target: raw, label: "JWT" };
    }

    if (
        /^(?=.{1,253}$)(?!-)[a-z0-9-]{1,63}(?<!-)(?:\.(?!-)[a-z0-9-]{1,63}(?<!-))+$/i.test(
            raw
        )
    ) {
        const tld = raw.split(".").pop();
        if (tld.length >= 2 && !/^\d+$/.test(tld)) {
            return { kind: "domain", target: raw, label: raw };
        }
    }

    return null;
}

function buildPivotItems(ioc) {
    return IOC_ACTIONS[ioc.kind](ioc.target).map((action) => ({
        type: "pivot",
        label: action.label,
        icon: action.icon,
        url: action.url,
        detail: ioc.label
    }));
}

// ---------- Command actions (:prefix) ----------
const COMMAND_ACTIONS = [
    { name: "mode", icon: "🔀", hint: "personal · research · dev · ctf", detail: "Switch work mode" },
    { name: "order", icon: "📊", hint: "default · frecency", detail: "Sort tiles by usage" },
    { name: "reset-order", icon: "↩️", hint: "", detail: "Forget the manual drag order" },
    { name: "pin", icon: "📌", hint: "<link name>", detail: "Pin a link to the top" },
    { name: "unpin", icon: "📍", hint: "<link name>", detail: "Remove a link pin" },
    { name: "pins", icon: "🧷", hint: "", detail: "List pinned links" },
    { name: "todo", icon: "✅", hint: "add · done · undone · delete · clear · open", detail: "Manage the mode's checklist" },
    { name: "link", icon: "🔗", hint: "add · remove · list · clear", detail: "Add your own tiles" },
    { name: "note", icon: "📝", hint: "[text]", detail: "Read or append to the scratchpad" },
    { name: "clear-history", icon: "🗑️", hint: "", detail: "Forget recent searches" },
    { name: "theme", icon: "🎨", hint: "", detail: "Toggle scanlines and glow" },
    { name: "export", icon: "💾", hint: "", detail: "Export backup (todos, notes, links)" },
    { name: "import", icon: "📥", hint: "", detail: "Import backup from JSON" },
    { name: "help", icon: "❓", hint: "", detail: "Show all command actions" },
    { name: "reload", icon: "🔄", hint: "", detail: "Reload the dashboard" }
];

function parseCommand(value) {
    if (!value.startsWith(":")) return null;
    const body = value.slice(1);
    const spaceIndex = body.indexOf(" ");
    return {
        name: (spaceIndex === -1 ? body : body.slice(0, spaceIndex)).toLowerCase(),
        args: spaceIndex === -1 ? "" : body.slice(spaceIndex + 1).trim()
    };
}

function findLinkInMode(modeKey, term) {
    const links = getModeLinks(modeKey);
    const query = term.toLowerCase();
    return (
        links.find((link) => link.name.toLowerCase() === query) ||
        links.find((link) => link.name.toLowerCase().includes(query)) ||
        links.find((link) => fuzzyScore(link.name, query) >= 0) ||
        null
    );
}

function buildCommandItems(value) {
    const command = parseCommand(value);
    if (!command) return [];

    const matches = COMMAND_ACTIONS.filter((action) => action.name.includes(command.name));
    const list = matches.length ? matches : COMMAND_ACTIONS;

    return list.map((action) => ({
        type: "command",
        name: action.name,
        icon: action.icon,
        detail:
            action.name === "mode" && !command.args
                ? `${action.detail} · now ${currentMode}`
                : action.name === "order" && !command.args
                  ? `${action.detail} · now ${tileOrder}`
                  : action.name === "todo" && !command.args
                    ? `${action.detail} · ${todoSummary(currentMode).open} open`
                    : action.name === "link" && !command.args
                      ? `${action.detail} · ${getCustomLinksFor(currentMode).length} custom`
                      : action.detail,
        hint: command.args ? `${action.hint} · ${command.args}` : action.hint,
        args: command.args,
        label: `:${action.name}`
    }));
}

function runCommand(name, args) {
    switch (name) {
        case "mode": {
            if (!args) {
                showToast(`Mode: ${currentMode}`);
                return;
            }
            if (MODES[args.toLowerCase()]) {
                switchMode(args.toLowerCase());
                showToast(`Mode: ${args.toLowerCase()}`);
            } else {
                showToast(`Unknown mode: ${args}`);
            }
            return;
        }

        case "order": {
            if (!args) {
                showToast(`Tile order: ${tileOrder}`);
                return;
            }
            if (args.toLowerCase() === "default" || args.toLowerCase() === "frecency") {
                setTileOrder(args.toLowerCase());
                renderLinks();
                showToast(`Tile order: ${tileOrder}`);
            } else {
                showToast("Use: :order default|frecency");
            }
            return;
        }

        case "reset-order": {
            clearManualOrder(currentMode);
            renderLinks();
            showToast("Manual order cleared");
            return;
        }

        case "pin":
        case "unpin": {
            if (!args) {
                showToast(`Use: :${name} <link name>`);
                return;
            }
            const link = findLinkInMode(currentMode, args);
            if (!link) {
                showToast(`No link matches “${truncate(args, 24)}”`);
                return;
            }
            setPinned(currentMode, link.url, name === "pin");
            renderLinks();
            showToast(`${name === "pin" ? "Pinned" : "Unpinned"} ${link.name}`);
            return;
        }

        case "pins": {
            const pins = (getPins()[currentMode] || [])
                .map((url) => {
                    const link = findLinkByUrl(currentMode, url);
                    return link ? link.name : url;
                })
                .join(", ");
            showToast(pins ? `Pinned: ${truncate(pins, 60)}` : "No pinned links in this mode");
            return;
        }

        case "link": {
            const sub = args ? args.split(" ")[0].toLowerCase() : "";
            const rest = args ? args.slice(sub.length).trim() : "";

            if (!args || sub === "list") {
                const custom = getCustomLinksFor(currentMode);
                showToast(
                    custom.length
                        ? `Custom: ${truncate(custom.map((link) => link.name).join(", "), 60)}`
                        : "No custom links — use :link add example.com"
                );
                return;
            }

            if (sub === "add" || sub === "new") {
                if (!rest) {
                    showToast("Use: :link add <url> [name]");
                    return;
                }
                const parts = rest.split(" ");
                const url = normalizeUrl(parts[0]);
                if (!url) {
                    showToast(`Not a valid URL: ${truncate(parts[0], 30)}`);
                    return;
                }
                const name = parts.slice(1).join(" ");
                const result = addCustomLink(currentMode, name, url, null);
                if (!result.ok) {
                    showToast(result.reason);
                    return;
                }
                renderLinks();
                showToast(`Added ${result.link.name}`);
                return;
            }

            if (sub === "remove" || sub === "delete" || sub === "rm") {
                const link = findLinkInMode(currentMode, rest);
                if (!link) {
                    showToast(`No link matches “${truncate(rest, 24)}”`);
                    return;
                }
                if (!isCustomLink(link.url)) {
                    showToast("Built-in links can't be removed");
                    return;
                }
                removeLink(link.url);
                return;
            }

            if (sub === "clear") {
                const count = clearCustomLinks(currentMode);
                renderLinks();
                showToast(count ? `Removed ${count} custom link${count === 1 ? "" : "s"}` : "No custom links");
                return;
            }

            showToast("Use: :link add|remove|list|clear");
            return;
        }

        case "todo": {
            const sub = args ? args.split(" ")[0].toLowerCase() : "";
            const rest = args ? args.slice(sub.length).trim() : "";

            if (!args) {
                const items = getTodos(currentMode);
                if (!items.length) {
                    showToast("No tasks — use :todo add <text>");
                    return;
                }
                const list = items
                    .map((todo) => `${todo.done ? "[x]" : "[ ]"} ${todo.text}`)
                    .join(" · ");
                showToast(truncate(list, 70));
                return;
            }

            if (sub === "add") {
                if (!rest) {
                    showToast("Use: :todo add <text>");
                    return;
                }
                addTodo(currentMode, rest);
                renderTodos();
                showToast("Task added");
                return;
            }

            if (sub === "done" || sub === "undone") {
                const index = findTodoIndex(currentMode, rest);
                if (index === -1) {
                    showToast(`No task matches “${truncate(rest, 24)}”`);
                    return;
                }
                setTodoDone(currentMode, index, sub === "done");
                renderTodos();
                showToast(sub === "done" ? "Task complete" : "Task reopened");
                return;
            }

            if (sub === "delete" || sub === "rm") {
                const index = findTodoIndex(currentMode, rest);
                if (index === -1) {
                    showToast(`No task matches “${truncate(rest, 24)}”`);
                    return;
                }
                removeTodo(currentMode, index);
                renderTodos();
                showToast("Task deleted");
                return;
            }

            if (sub === "clear") {
                const before = todoSummary(currentMode).done;
                clearDoneTodos(currentMode);
                renderTodos();
                showToast(before ? `Cleared ${before} completed` : "Nothing to clear");
                return;
            }

            if (sub === "open" || sub === "list") {
                setScratchpadTab("todos");
                toggleScratchpad(true);
                return;
            }

            // Bare text after :todo is treated as a new task.
            addTodo(currentMode, args);
            renderTodos();
            showToast("Task added");
            return;
        }

        case "note": {
            if (!args) {
                const note = getNotes(currentMode);
                showToast(note ? truncate(note, 60) : "Scratchpad is empty — add text to write");
                return;
            }
            const existing = getNotes(currentMode);
            const next = existing ? `${existing.replace(/\s+$/, "")}\n${args}` : args;
            saveNotes(currentMode, next);
            scratchpadInput.value = next;
            setScratchpadTab("notes");
            showToast("Added to scratchpad");
            return;
        }

        case "clear-history": {
            try {
                localStorage.removeItem(HISTORY_KEY);
            } catch (err) {
                /* ignore */
            }
            showToast("Search history cleared");
            return;
        }

        case "theme": {
            const reduced = document.body.classList.toggle("no-fx");
            try {
                localStorage.setItem(THEME_KEY, reduced ? "calm" : "full");
            } catch (err) {
                /* ignore */
            }
            showToast(reduced ? "Effects off" : "Effects on");
            return;
        }

        case "help": {
            showToast(
                ":mode :order :reset-order :pin :unpin :pins :link :todo :note :clear-history :theme :help :reload | Keys: 1-4 / ? n t m s q g x"
            );
            return;
        }

        case "reload":
            window.location.reload();
            return;

        case "export":
            import('./modules/backup.js').then(({ exportAll }) => {
                if (exportAll()) {
                    showToast("Backup exported");
                } else {
                    showToast("Export failed");
                }
            }).catch(() => showToast("Export failed"));
            closeMenu();
            searchInput.value = "";
            return;

        case "import": {
            import('./modules/backup.js').then(({ createImportInput, importAll }) => {
                const input = createImportInput();
                input.onchange = async (e) => {
                    const file = e.target.files[0];
                    if (!file) {
                        document.body.removeChild(input);
                        return;
                    }
                    try {
                        await importAll(file);
                        showToast("Backup imported — reloading...");
                        setTimeout(() => window.location.reload(), 800);
                    } catch (err) {
                        showToast("Import failed");
                    }
                    document.body.removeChild(input);
                };
                input.click();
            }).catch(() => showToast("Import failed"));
            closeMenu();
            searchInput.value = "";
            return;
        }

        default: {
            // ":" on its own is harmless; anything else is a real miss.
            showToast(
                name
                    ? `Unknown command: :${name}`
                    : ":mode :order :pin :unpin :pins :note :help"
            );
        }
    }
}

// ---------- Mode handling ----------
function switchMode(mode) {
    if (!MODES[mode]) return;
    currentMode = mode;
    try {
        localStorage.setItem(MODE_KEY, mode);
    } catch (err) {
        /* ignore */
    }

    const data = MODES[mode];
    document.body.style.setProperty("--accent", data.accent);
    document.body.style.setProperty("--accent-rgb", data.accentRgb);
    document.body.dataset.mode = mode;

    document.querySelectorAll("#mode-selector .mode-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.mode === mode);
    });

    modeLabel.textContent = data.label;
    scratchpadMode.textContent = data.label;
    scratchpadInput.value = getNotes(mode);
    renderTodos();

    const engine = getDefaultEngine();
    searchInput.placeholder = `Search ${engine.name} · jump to a link · @engines`;

    renderDorks();
    renderLinks();
    renderConsole();
    closeMenu();
}

// ---------- Icons (developer-icons, with emoji fallback) ----------

/**
 * Host -> developer-icons export. Lets custom tiles and any link without an
 * explicit `devIcon` pick up a brand icon automatically.
 *
 * Matching is EXACT (after stripping "www.") on purpose: with suffix matching,
 * calendar.google.com and maps.google.com would inherit the generic Google "G"
 * and lose their clearer calendar/map icons.
 */
const HOST_ICONS = new Map([
    ["github.com", "GitHubDark"],
    ["gist.github.com", "GitHubDark"],
    ["youtube.com", "YouTube"],
    ["youtu.be", "YouTube"],
    ["reddit.com", "Reddit"],
    ["discord.com", "Discord"],
    ["discord.gg", "Discord"],
    ["instagram.com", "Instagram"],
    ["whatsapp.com", "WhatsApp"],
    ["web.whatsapp.com", "WhatsApp"],
    ["wa.me", "WhatsApp"],
    ["mail.google.com", "Gmail"],
    ["npmjs.com", "NPM"],
    ["developer.mozilla.org", "Mozilla"],
    ["mozilla.org", "Mozilla"],
    ["google.com", "Google"]
]);

function inferDevIcon(url) {
    let host;
    try {
        host = new URL(url).hostname.toLowerCase().replace(/^www\./, "");
    } catch (error) {
        return "";
    }
    return HOST_ICONS.get(host) || "";
}

function devIconNameFor(link) {
    return link.flaticonIcon || link.devIcon || inferFlaticonIcon(link.url);
}

function inferFlaticonIcon(url) {
    let host;
    try {
        host = new URL(url).hostname.toLowerCase().replace(/^www\./, "");
    } catch (error) {
        return "";
    }
    const FLATICON_MAP = new Map([
        ["github.com", "fi fi-brands-github"],
        ["gist.github.com", "fi fi-brands-github"],
        ["youtube.com", "fi fi-brands-youtube"],
        ["youtu.be", "fi fi-brands-youtube"],
        ["reddit.com", "fi fi-brands-reddit"],
        ["discord.com", "fi fi-brands-discord"],
        ["discord.gg", "fi fi-brands-discord"],
        ["instagram.com", "fi fi-brands-instagram"],
        ["whatsapp.com", "fi fi-brands-whatsapp"],
        ["web.whatsapp.com", "fi fi-brands-whatsapp"],
        ["wa.me", "fi fi-brands-whatsapp"],
        ["mail.google.com", "fi fi-brands-google"],
        ["npmjs.com", "fi fi-brands-npm"],
        ["developer.mozilla.org", "fi fi-brands-firefox-browser"],
        ["mozilla.org", "fi fi-brands-firefox-browser"],
        ["google.com", "fi fi-brands-google"],
        ["twitter.com", "fi fi-brands-twitter"],
        ["x.com", "fi fi-brands-twitter"],
        ["linkedin.com", "fi fi-brands-linkedin"],
        ["facebook.com", "fi fi-brands-facebook"],
        ["stackoverflow.com", "fi fi-brands-stack-overflow"],
        ["medium.com", "fi fi-brands-medium"],
        ["gitlab.com", "fi fi-brands-gitlab"]
    ]);
    return FLATICON_MAP.get(host) || "";
}

/**
 * Render a tile/menu icon using Flaticon UIcons.
 */
function iconMarkup(emoji, flaticonClass, emojiClass = "", devClass = "dev-icon") {
    if (flaticonClass) {
        return `<span class="${devClass}" aria-hidden="true"><i class="${flaticonClass}"></i></span>`;
    }
    return `<span class="${emojiClass}" aria-hidden="true">${emoji}</span>`;
}

/**
 * Swap emoji for SVGs once the icon bundle arrives. Safe to call repeatedly;
 * skipped mid-drag so a re-render cannot cancel the gesture.
 */
function refreshIcons() {
    if (dragUrl) return;
    renderLinks();
    if (menuItems.length > 0) renderMenu();
}

document.addEventListener("devicons:ready", refreshIcons);

function renderLinks() {
    const target = linkTarget === "new" ? "_blank" : "_self";
    const rel = linkTarget === "new" ? ' rel="noopener noreferrer"' : "";
    const links = orderLinks(getModeLinks(currentMode), tileOrder === "frecency");

    linksContainer.innerHTML = links
        .map((link) => {
            const pinned = isPinned(currentMode, link.url);
            const custom = link.custom === true;
            const removeBtn = custom
                ? `<span class="link-del" data-del-url="${escapeHtml(link.url)}"
                       role="button" tabindex="0" aria-label="Remove ${escapeHtml(link.name)}">✕</span>`
                : "";
            return `
        <a href="${escapeHtml(link.url)}" target="${target}"${rel}
           title="${escapeHtml(link.name)} — ${escapeHtml(link.url)}\nDrag to reorder · click the pin to ${pinned ? "unpin" : "pin"}${custom ? " · custom link" : ""}"
           draggable="true" data-link-url="${escapeHtml(link.url)}"
           class="link-card${pinned ? " pinned" : ""}${custom ? " custom" : ""} group relative aspect-square p-2.5 sm:p-3 flex flex-col items-center justify-center gap-1.5 sm:gap-2 text-center">
            <span class="pin-btn${pinned ? " pinned" : ""}" data-pin-url="${escapeHtml(link.url)}"
                  role="button" tabindex="0" aria-pressed="${pinned}"
                  aria-label="${pinned ? "Unpin" : "Pin"} ${escapeHtml(link.name)}">${pinned ? "★" : "☆"}</span>
            ${removeBtn}
            ${iconMarkup(link.icon, devIconNameFor(link), "text-3xl sm:text-4xl leading-none", "dev-icon flaticon-icon")}
            <span class="link-name text-[11px] sm:text-xs font-bold text-gray-300 leading-tight break-words max-w-full transition-colors">${escapeHtml(link.name)}</span>
        </a>`;
        })
        .join("");
}

// ---------- Drag to reorder tiles ----------
let dragUrl = null;
let justDragged = false;

function currentTileUrls() {
    return [...linksContainer.querySelectorAll("a.link-card")].map((card) =>
        card.getAttribute("data-link-url")
    );
}

function onDragStart(e) {
    const card = e.target.closest("a.link-card");
    if (!card) return;

    dragUrl = card.getAttribute("data-link-url");
    card.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
    // Firefox needs some data set for the drag to start.
    try {
        e.dataTransfer.setData("text/plain", dragUrl);
    } catch (err) {
        /* ignore */
    }
}

function onDragOver(e) {
    if (!dragUrl) return;
    const over = e.target.closest("a.link-card");
    if (!over) return;

    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    const dragging = linksContainer.querySelector("a.link-card.dragging");
    if (!dragging || dragging === over) return;

    // Decide before/after by comparing horizontal midpoints.
    const rect = over.getBoundingClientRect();
    const before = e.clientX < rect.left + rect.width / 2;
    linksContainer.insertBefore(dragging, before ? over : over.nextSibling);
}

function onDragEnd() {
    const dragging = linksContainer.querySelector("a.link-card.dragging");
    if (dragging) dragging.classList.remove("dragging");

    if (!dragUrl) return;

    // A drag ends with a click event on the tile; remember to swallow it so
    // reordering never opens the link.
    justDragged = true;
    dragUrl = null;

    const urls = currentTileUrls();
    if (urls.length) {
        saveManualOrder(currentMode, urls);
        showToast("Order saved");
    }
}

// Open a quick link using the current target preference.
function openLink(url) {
    if (linkTarget === "new") {
        window.open(url, "_blank", "noopener,noreferrer");
    } else {
        window.location.href = url;
    }
}

// Duck.ai chat launcher — respects the same tab preference as tiles.
function openDuckAi() {
    openLink("https://duck.ai/");
}

function applyLinkTarget() {
    const isNewTab = linkTarget === "new";

    targetToggle.setAttribute("aria-pressed", String(isNewTab));
    targetToggle.setAttribute(
        "aria-label",
        isNewTab ? "Links open in a new tab" : "Links open in the current tab"
    );
    targetToggleIcon.textContent = isNewTab ? "↗" : "→";
    targetToggleLabel.textContent = isNewTab ? "New tab" : "Same tab";
    targetToggle.title = isNewTab
        ? "Links open in a new tab — click to open in the current tab"
        : "Links open in the current tab — click to open in a new tab";

    renderLinks();
}

function renderDorks() {
    const dorks = MODES[currentMode].dorks || [];
    dorkBar.classList.toggle("visible", dorks.length > 0);
    dorkBar.innerHTML = dorks
        .map(
            (dork) =>
                `<button type="button" class="dork-chip" data-dork="${dork}">${dork}</button>`
        )
        .join("");
}

// ---------- Command menu ----------
function closeMenu() {
    menuItems = [];
    selectedIndex = -1;
    searchDropdown.classList.add("hidden");
    searchDropdown.innerHTML = "";
}

// Small accessors (used by the headless test harness).
function getMenuItems() {
    return menuItems;
}

function getSelectedIndex() {
    return selectedIndex;
}

function fuzzyScore(text, query) {
    const haystack = text.toLowerCase();
    const needle = query.toLowerCase();
    let position = 0;
    let score = 0;
    let streak = 0;

    for (const char of needle) {
        const index = haystack.indexOf(char, position);
        if (index === -1) return -1;
        streak = index === position ? streak + 1 : 0;
        score += 1 + streak * 2 - index * 0.01;
        position = index + 1;
    }
    return score;
}

function matchLinks(query) {
    const freq = getFrecency();
    const seen = new Set();
    const results = [];

    for (const modeKey of Object.keys(MODES)) {
        for (const link of getModeLinks(modeKey)) {
            if (seen.has(link.url)) continue;

            const nameScore = fuzzyScore(link.name, query);
            const urlScore = fuzzyScore(link.url.replace(/^https?:\/\//, ""), query) * 0.6;
            const match = Math.max(nameScore, urlScore);
            if (match < 0) continue;

            seen.add(link.url);
            const frecency = frecencyValue(link.url, freq);

            results.push({
                ...link,
                modeLabel: MODES[modeKey].label,
                rank: match + frecency * 2 + (modeKey === currentMode ? 0.5 : 0)
            });
        }
    }

    results.sort((a, b) => b.rank - a.rank || a.name.localeCompare(b.name));
    return results.slice(0, 5);
}

const EXPLICIT_UTILITY = /^(b64|b64e|hex|url|rot13|jwt|sha256|epoch|cidr|calc):/i;

function updateMenu() {
    const value = searchInput.value;
    const wasPasted = pastedInput;
    pastedInput = false;

    if (value.startsWith("@")) {
        const keyword = value.slice(1).toLowerCase().split(" ")[0];
        menuItems = SEARCH_ENGINES.filter(
            (eng) => eng.name.toLowerCase().includes(keyword) || eng.shortcut.includes(keyword)
        ).map((engine) => ({ type: "engine", engine }));
        selectedIndex = menuItems.length ? 0 : -1;
    } else if (value.startsWith(":")) {
        menuItems = buildCommandItems(value);
        selectedIndex = menuItems.length ? 0 : -1;
    } else if (value.trim()) {
        const raw = value.trim();
        const utilItems = detectUtilities(raw);
        const jwtMatch = raw.match(/^jwt:(.+)$/i);
        const ioc = MODES[currentMode].pivot
            ? parseIOC(jwtMatch ? jwtMatch[1].trim() : raw)
            : null;
        const pivotItems = ioc ? buildPivotItems(ioc) : [];

        menuItems = [
            ...utilItems,
            ...pivotItems,
            ...matchLinks(raw).map((link) => ({ type: "link", link })),
            { type: "search", query: raw, engine: getDefaultEngine() }
        ];

        selectedIndex =
            (EXPLICIT_UTILITY.test(raw) || wasPasted) &&
            (utilItems.length || pivotItems.length)
                ? 0
                : -1;
    } else {
        menuItems = getHistory().map((entry) => ({ type: "history", ...entry }));
        selectedIndex = -1;
    }

    renderMenu();

    const pending = menuItems.find((item) => item.pending);
    if (pending) {
        const snapshot = searchInput.value.trim();
        sha256Hex(pending.pending).then((hash) => {
            if (searchInput.value.trim() !== snapshot) return;
            pending.detail = hash || "unavailable (needs secure context)";
            pending.copy = hash || "";
            renderMenu();
        });
    }
}

function renderMenu() {
    if (menuItems.length === 0) {
        searchDropdown.classList.add("hidden");
        searchDropdown.innerHTML = "";
        return;
    }

    searchDropdown.classList.remove("hidden");
    searchDropdown.innerHTML = menuItems
        .map((item, index) => {
            const selected = index === selectedIndex ? " selected" : "";
            const row = (icon, title, subtitle, hint) => `
                <div class="menu-item${selected}" data-index="${index}" role="option">
                    ${icon}
                    <div class="min-w-0">
                        <div class="font-bold truncate">${title}</div>
                        <div class="text-xs text-gray-500 truncate">${subtitle}</div>
                    </div>
                    <span class="text-[10px] text-gray-500 ml-auto pl-2 whitespace-nowrap">${hint}</span>
                </div>`;
            const menuIcon = (emoji, devName) =>
                iconMarkup(emoji, devName, "text-lg", "dev-icon dev-icon-menu");

            if (item.type === "command") {
                return row(
                    menuIcon(item.icon, item.flaticonIcon || item.devIcon),
                    `${escapeHtml(item.label)} <span class="font-normal text-gray-500">${
                        item.hint ? escapeHtml(item.hint) : ""
                    }</span>`,
                    escapeHtml(truncate(item.detail, 60)),
                    "run ⏎"
                );
            }

            if (item.type === "engine") {
                return row(
                    menuIcon(item.engine.icon, item.engine.flaticonIcon || item.engine.devIcon),
                    escapeHtml(item.engine.name),
                    "",
                    `@${escapeHtml(item.engine.shortcut)}`
                );
            }

            if (item.type === "link") {
                return row(
                    menuIcon(item.link.icon, devIconNameFor(item.link)),
                    escapeHtml(item.link.name),
                    escapeHtml(truncate(item.link.url, 60)),
                    escapeHtml(item.link.modeLabel)
                );
            }

            if (item.type === "utility") {
                return row(
                    menuIcon(item.icon),
                    escapeHtml(item.label),
                    `<span class="font-mono" title="${escapeHtml(item.copy || item.detail)}">${escapeHtml(
                        truncate(item.detail, 70)
                    )}</span>`,
                    "copy ⏎"
                );
            }

            if (item.type === "pivot") {
                return row(
                    menuIcon(item.icon),
                    escapeHtml(item.label),
                    escapeHtml(truncate(item.detail, 60)),
                    "pivot ↗"
                );
            }

            if (item.type === "search") {
                return row(
                    menuIcon("🔎"),
                    `Search “${escapeHtml(truncate(item.query, 44))}”`,
                    `with ${escapeHtml(item.engine.name)}`,
                    "enter"
                );
            }

            return row(
                menuIcon("🕘"),
                escapeHtml(item.query),
                "",
                escapeHtml(item.engine || "search")
            );
        })
        .join("");
}

function moveSelection(delta) {
    if (!menuItems.length) return;
    selectedIndex =
        selectedIndex === -1
            ? delta > 0
                ? 0
                : menuItems.length - 1
            : (selectedIndex + delta + menuItems.length) % menuItems.length;
    renderMenu();
}

// ---------- Search ----------
function getDefaultEngine() {
    const shortcut = MODES[currentMode].defaultEngine || "ddg";
    return SEARCH_ENGINES.find((eng) => eng.shortcut === shortcut) || SEARCH_ENGINES[0];
}

function engineForKeyword(keyword) {
    return SEARCH_ENGINES.find(
        (eng) => eng.shortcut === keyword || eng.name.toLowerCase().startsWith(keyword)
    );
}

function buildEngineUrl(engine, query) {
    const template = engine && typeof engine.urlTemplate === "string" ? engine.urlTemplate : "";
    if (!/^https?:\/\//i.test(template)) return "";
    return template.replace("{{Q}}", query ? encodeURIComponent(query) : "");
}

function resolveSearch(rawValue, engineOverride) {
    let query = rawValue.trim();
    let engine = engineOverride || getDefaultEngine();

    if (query.startsWith("!")) {
        const rest = query.slice(1);
        const spaceIndex = rest.indexOf(" ");
        const bang = (spaceIndex === -1 ? rest : rest.slice(0, spaceIndex)).toLowerCase();
        const shortcut = BANGS[bang];
        if (shortcut) {
            engine = SEARCH_ENGINES.find((eng) => eng.shortcut === shortcut) || engine;
            query = spaceIndex === -1 ? "" : rest.slice(spaceIndex + 1).trim();
        }
    } else if (query.startsWith("@")) {
        const rest = query.slice(1);
        const spaceIndex = rest.indexOf(" ");
        const keyword = (spaceIndex === -1 ? rest : rest.slice(0, spaceIndex)).toLowerCase();
        query = spaceIndex === -1 ? "" : rest.slice(spaceIndex + 1).trim();

        if (!engineOverride) {
            const matched = keyword ? engineForKeyword(keyword) : null;
            if (matched) {
                engine = matched;
            } else {
                // No engine matched — treat the text as a normal query.
                query = rest.trim();
            }
        }
    }

    return { query, engine, url: buildEngineUrl(engine, query) };
}

function runSearch(rawValue, engineOverride) {
    // Never let a colon command fall through to a web search.
    if (!engineOverride && rawValue.trim().startsWith(":")) {
        const command = parseCommand(rawValue.trim());
        if (command && COMMAND_ACTIONS.some((action) => action.name === command.name)) {
            runCommand(command.name, command.args);
            return;
        }
    }

    const { query, engine, url } = resolveSearch(rawValue, engineOverride);
    // Guard against ever navigating to a relative URL (which would resolve
    // against the current page, e.g. /htab/hi instead of the search engine).
    if (!/^https?:\/\//i.test(url)) {
        showToast("Could not build a search URL");
        return;
    }
    if (query) pushHistory(query, engine.name);
    window.location.href = url;
}

// ---------- Path shortcuts (/htab/<name>) ----------
// GitHub Pages serves 404.html for unknown paths; that page forwards the path
// here as ?go=<name>. Resolve it to a tile when possible, otherwise treat it
// as a search, so a typed path never dead-ends on GitHub's 404.

function slugify(value) {
    return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function findLinkBySlug(slug) {
    const want = slugify(slug);
    if (!want) return null;

    for (const modeKey of Object.keys(MODES)) {
        for (const link of getModeLinks(modeKey)) {
            if (slugify(link.name) === want) return link;
            if (slugify(String(link.name).split(/\s+/)[0]) === want) return link;
            try {
                const host = new URL(link.url).hostname.replace(/^www\./, "").split(".")[0];
                if (slugify(host) === want) return link;
            } catch (error) {
                /* not a URL we can parse — skip the host check */
            }
        }
    }

    return null;
}

function handlePathShortcut() {
    let slug = "";
    try {
        slug = new URLSearchParams(window.location.search).get("go") || "";
    } catch (error) {
        return;
    }

    slug = String(slug).replace(/^\/+|\/+$/g, "").slice(0, 80);
    if (!slug) return;

    const link = findLinkBySlug(slug);
    if (link) {
        window.location.replace(link.url);
        return;
    }

    // Unknown name: search instead of showing a dead end.
    runSearch(slug.replace(/\/+/g, " "));
}

function activateSelected() {
    const item = menuItems[selectedIndex];

    if (!item) {
        runSearch(searchInput.value);
        return;
    }

    if (item.type === "engine") {
        runSearch(searchInput.value, item.engine);
    } else if (item.type === "command") {
        runCommand(item.name, item.args);
        closeMenu();
    } else if (item.type === "link") {
        recordLinkOpen(item.link.url);
        openLink(item.link.url);
    } else if (item.type === "pivot") {
        openLink(item.url);
    } else if (item.type === "utility") {
        copyText(item.copy);
    } else if (item.type === "search") {
        runSearch(item.query, item.engine);
    } else {
        const engine = SEARCH_ENGINES.find((eng) => eng.name === item.engine);
        runSearch(item.query, engine);
    }
}

// ---------- Scratchpad ----------
let scratchpadTab = "todos";

function setScratchpadTab(tab) {
    scratchpadTab = tab === "notes" ? "notes" : "todos";
    const showNotes = scratchpadTab === "notes";

    scratchpadTodos.classList.toggle("hidden", showNotes);
    scratchpadNotes.classList.toggle("hidden", !showNotes);
    tabTodos.setAttribute("aria-selected", String(!showNotes));
    tabNotes.setAttribute("aria-selected", String(showNotes));

    if (scratchpad.classList.contains("hidden")) return;
    if (showNotes) scratchpadInput.focus();
    else todoInput.focus();
}

function renderTodos() {
    const todos = getTodos(currentMode);
    const summary = todoSummary(currentMode);

    todoList.innerHTML = todos
        .map(
            (todo, index) => `
        <li class="todo-row${todo.done ? " done" : ""}" data-todo-index="${index}">
            <button class="todo-check" type="button" role="checkbox"
                    aria-checked="${todo.done}" aria-label="${todo.done ? "Mark incomplete" : "Mark complete"}"
                    data-todo-toggle="${index}">${todo.done ? "✓" : ""}</button>
            <span class="todo-text">${escapeHtml(todo.text)}</span>
            <button class="todo-del" type="button" aria-label="Delete task" data-todo-delete="${index}">✕</button>
        </li>`
        )
        .join("");

    todoEmpty.classList.toggle("hidden", todos.length > 0);
    todoProgress.textContent = summary.total
        ? `${summary.done} / ${summary.total} done · ${summary.open} open`
        : "";
    updateTodoBadge();
}

// Reflect the number of open tasks on the scratchpad toggle button.
function updateTodoBadge() {
    const { open } = todoSummary(currentMode);
    const base = "Scratchpad (n)";
    notesToggle.title = open ? `${base} — ${open} open task${open === 1 ? "" : "s"}` : base;
    notesToggle.classList.toggle("has-todos", open > 0);
}

function toggleScratchpad(force) {
    const shouldOpen =
        typeof force === "boolean" ? force : scratchpad.classList.contains("hidden");

    scratchpad.classList.toggle("hidden", !shouldOpen);

    if (shouldOpen) {
        if (scratchpadTab === "notes") scratchpadInput.focus();
        else todoInput.focus();
    } else {
        searchInput.focus();
    }
}

// ---------- Clock ----------
function startClock() {
    const tick = () => {
        clock.textContent = new Date().toLocaleTimeString([], { hour12: false });
    };
    tick();
    setInterval(tick, 1000);
}

// ---------- Events: modes ----------
document.querySelectorAll("#mode-selector .mode-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchMode(btn.dataset.mode));
});

// ---------- Events: link target toggle ----------
targetToggle.addEventListener("click", () => {
    linkTarget = linkTarget === "new" ? "self" : "new";
    try {
        localStorage.setItem(TARGET_KEY, linkTarget);
    } catch (err) {
        /* ignore */
    }
    applyLinkTarget();
});

// ---------- Events: Duck.ai launcher ----------
duckBtn.addEventListener("click", openDuckAi);

// ---------- Events: quick links ----------
function togglePin(url) {
    const pinned = isPinned(currentMode, url);
    setPinned(currentMode, url, !pinned);
    renderLinks();
    showToast(pinned ? "Unpinned" : "Pinned to top");
}

// Remove a user-added link, along with any pin or frecency data for it.
function removeLink(url) {
    const name = (getCustomLinksFor(currentMode).find((link) => sameUrl(link.url, url)) || {}).name;
    if (!removeCustomLink(currentMode, url)) return;

    setPinned(currentMode, url, false);
    // Drop only this URL from the drag order — the rest must be preserved.
    restoreManualOrderWithout(url);
    renderLinks();
    showToast(`Removed ${name || "link"}`);
}

// Drop a URL from the saved drag order, keeping the rest of the order.
function restoreManualOrderWithout(url) {
    const saved = getManualOrder()[currentMode];
    if (!Array.isArray(saved)) return;
    const rest = saved.filter((item) => !sameUrl(item, url));
    if (rest.length === saved.length) return;
    if (rest.length) saveManualOrder(currentMode, rest);
    else clearManualOrder(currentMode);
}

function deleteLinkByUrl(url) {
    if (!isCustomLink(url)) {
        showToast("Built-in links can't be removed");
        return;
    }
    removeLink(url);
}

linksContainer.addEventListener("click", (e) => {
    const pin = e.target.closest(".pin-btn");
    if (pin) {
        e.preventDefault();
        e.stopPropagation();
        togglePin(pin.dataset.pinUrl);
        return;
    }

    const del = e.target.closest(".link-del");
    if (del) {
        e.preventDefault();
        e.stopPropagation();
        deleteLinkByUrl(del.dataset.delUrl);
        return;
    }

    // Swallow the click that follows a drag — reordering must not navigate.
    if (justDragged) {
        justDragged = false;
        e.preventDefault();
        return;
    }

    const card = e.target.closest("a.link-card");
    if (card) recordLinkOpen(card.getAttribute("href"));
});

linksContainer.addEventListener("keydown", (e) => {
    const pin = e.target.closest(".pin-btn");
    if (pin && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        e.stopPropagation();
        togglePin(pin.dataset.pinUrl);
        return;
    }

    const del = e.target.closest(".link-del");
    if (del && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        e.stopPropagation();
        deleteLinkByUrl(del.dataset.delUrl);
    }
});

// Drag to reorder. Starting a drag from the pin star would be confusing,
// so suppress it there and let the pin click through instead.
linksContainer.addEventListener("dragstart", (e) => {
    if (e.target.closest(".pin-btn")) {
        e.preventDefault();
        return;
    }
    onDragStart(e);
});
linksContainer.addEventListener("dragover", onDragOver);
linksContainer.addEventListener("drop", (e) => e.preventDefault());
linksContainer.addEventListener("dragend", onDragEnd);

// ---------- Events: command bar ----------
searchInput.addEventListener("input", updateMenu);
searchInput.addEventListener("paste", () => {
    pastedInput = true;
    setTimeout(() => {
        pastedInput = false;
    }, 0);
});
searchInput.addEventListener("focus", () => {
    if (firstFocus) {
        firstFocus = false;
        return;
    }
    updateMenu();
});
searchInput.addEventListener("blur", closeMenu);

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
        e.preventDefault();
        moveSelection(1);
        return;
    }
    if (e.key === "ArrowUp") {
        e.preventDefault();
        moveSelection(-1);
        return;
    }
    if (e.key === "Enter") {
        e.preventDefault();
        if (!searchDropdown.classList.contains("hidden") && selectedIndex >= 0) {
            activateSelected();
        } else {
            runSearch(searchInput.value);
        }
        return;
    }
    if (e.key === "Escape") {
        closeMenu();
        searchInput.blur();
    }
});

searchDropdown.addEventListener("mousedown", (e) => {
    const item = e.target.closest(".menu-item");
    if (!item) return;
    e.preventDefault(); // keep focus long enough to activate
    selectedIndex = Number(item.dataset.index);
    activateSelected();
});

// ---------- Events: dork chips ----------
dorkBar.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-dork]");
    if (!chip) return;

    const token = chip.dataset.dork;
    searchInput.value = searchInput.value ? `${searchInput.value} ${token}` : token;
    searchInput.focus();
    const end = searchInput.value.length;
    searchInput.setSelectionRange(end, end);
    updateMenu();
});

// ---------- Events: scratchpad ----------
notesToggle.addEventListener("click", () => toggleScratchpad());
document
    .getElementById("scratchpad-close")
    .addEventListener("click", () => toggleScratchpad(false));
scratchpadInput.addEventListener("input", () => saveNotes(currentMode, scratchpadInput.value));

// Tabs
tabTodos.addEventListener("click", () => setScratchpadTab("todos"));
tabNotes.addEventListener("click", () => setScratchpadTab("notes"));

// Add a task from the input (Enter or the + button)
function submitTodo() {
    if (!addTodo(currentMode, todoInput.value)) return;
    todoInput.value = "";
    renderTodos();
}

todoAdd.addEventListener("click", submitTodo);
todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        submitTodo();
    }
});

// Toggle / delete tasks (delegated so re-renders stay cheap)
todoList.addEventListener("click", (e) => {
    const toggle = e.target.closest("[data-todo-toggle]");
    if (toggle) {
        const index = Number(toggle.dataset.todoToggle);
        const todo = getTodos(currentMode)[index];
        if (!todo) return;
        setTodoDone(currentMode, index, !todo.done);
        renderTodos();
        return;
    }

    const del = e.target.closest("[data-todo-delete]");
    if (del) {
        removeTodo(currentMode, Number(del.dataset.todoDelete));
        renderTodos();
    }
});

// ---------- Global keyboard shortcuts ----------
window.addEventListener("keydown", (e) => {
    const tag = document.activeElement.tagName;
    const isTyping = tag === "INPUT" || tag === "TEXTAREA";

    if (isTyping) {
        if (e.key === "Escape") {
            if (tag === "TEXTAREA") toggleScratchpad(false);
            else {
                closeMenu();
                searchInput.blur();
            }
        }
        return;
    }

    if (e.key === "/") {
        e.preventDefault();
        searchInput.focus();
        updateMenu();
        return;
    }

    if (e.key === "Escape") {
        if (!scratchpad.classList.contains("hidden")) toggleScratchpad(false);
        return;
    }

    const key = e.key.toLowerCase();

    if (key === "n") {
        e.preventDefault();
        toggleScratchpad();
        return;
    }

    if (key === "t") {
        e.preventDefault();
        toggleScratchpad();
        setScratchpadTab("todos");
        return;
    }

    if (key === "m") {
        e.preventDefault();
        toggleScratchpad();
        setScratchpadTab("notes");
        return;
    }

    if (key === "s") {
        e.preventDefault();
        setTileOrder(tileOrder === "frecency" ? "default" : "frecency");
        renderLinks();
        showToast(`Tile order: ${tileOrder}`);
        return;
    }

    if (key === "q") {
        e.preventDefault();
        openDuckAi();
        return;
    }

    if (key === "g") {
        e.preventDefault();
        openLink("https://github.com/a0x14D/htab");
        showToast("g · Open repo");
        return;
    }

    if (key === "x") {
        e.preventDefault();
        openLink("https://github.com/a0x14D/htab/stargazers");
        showToast("x · Star repo");
        return;
    }

    if (key === "?") {
        e.preventDefault();
        showToast("Keys: 1-4 modes · / search · ? help · n notes · t todos · m notes · q duck.ai · s order · g github · x star repo");
        return;
    }

    switch (e.key) {
        case "1":
            switchMode("personal");
            break;
        case "2":
            switchMode("research");
            break;
        case "3":
            switchMode("dev");
            break;
        case "4":
            switchMode("ctf");
            break;
        default: {
            if (key === "p") switchMode("personal");
            else if (key === "r") switchMode("research");
            else if (key === "d") switchMode("dev");
            else if (key === "c") switchMode("ctf");
        }
    }
});

// ---------- Mode console (desktop-only widgets) ----------
// Three cards under the tiles, different per mode. Everything is local:
// no requests, no APIs, no tracking. Hidden below 640px by CSS.

const ONE_THING_KEY = "hacker_one_thing";
const SESSION_KEY = "hacker_session";
const CTF_TARGET_KEY = "hacker_ctf_target";

const ONE_THING_MAX = 120;

const CONSOLE_TEMPLATES = {
    personal: [
        `
        <div class="console-card">
            <p class="console-label">LOCAL TIME</p>
            <p class="console-value" id="console-clock">--:--:--</p>
            <p class="console-sub" id="console-date"></p>
        </div>
        `,
        `
        <div class="console-card">
            <p class="console-label">DAY PROGRESS</p>
            <p class="console-value" id="console-day-pct">--%</p>
            <div class="console-bar"><span id="console-day-fill"></span></div>
            <p class="console-sub" id="console-day-left"></p>
        </div>
        `,
        `
        <div class="console-card">
            <p class="console-label">TODAY'S ONE THING</p>
            <input id="console-one-thing" class="console-input" type="text" maxlength="${ONE_THING_MAX}"
                   placeholder="The one thing that matters today" aria-label="Today's one thing"
                   autocomplete="off" spellcheck="false">
            <p class="console-sub" id="console-one-status"></p>
        </div>
        `
    ],
    research: [
        `
        <div class="console-card">
            <p class="console-label">SESSION TIMER</p>
            <p class="console-value" id="console-session">00:00:00</p>
            <div class="console-row">
                <button type="button" class="console-btn" data-console-action="session-toggle"
                        id="console-session-toggle">start</button>
                <button type="button" class="console-btn" data-console-action="session-reset">reset</button>
            </div>
        </div>
        `,
        `
        <div class="console-card">
            <p class="console-label">IOC PIVOT</p>
            <input id="console-ioc" class="console-input" type="text"
                   placeholder="IP · domain · hash · CVE · JWT" aria-label="IOC pivot"
                   autocomplete="off" spellcheck="false">
            <div class="console-chips" id="console-ioc-out"></div>
        </div>
        `,
        `
        <div class="console-card">
            <p class="console-label">RECENT SEARCHES</p>
            <div class="console-chips" id="console-recent"></div>
        </div>
        `
    ],
    dev: [
        `
        <div class="console-card">
            <p class="console-label">CONVERTER</p>
            <textarea id="console-conv" class="console-input console-textarea" rows="2"
                      placeholder="text or encoded value" aria-label="Converter input"
                      spellcheck="false"></textarea>
            <div class="console-row">
                <button type="button" class="console-btn" data-console-action="conv-b64e">b64 ↑</button>
                <button type="button" class="console-btn" data-console-action="conv-b64d">b64 ↓</button>
                <button type="button" class="console-btn" data-console-action="conv-urle">url ↑</button>
                <button type="button" class="console-btn" data-console-action="conv-urld">url ↓</button>
            </div>
            <button type="button" class="console-mono console-out" id="console-conv-out"
                    data-console-action="copy-conv" title="Click to copy">Output appears here</button>
        </div>
        `,
        `
        <div class="console-card">
            <p class="console-label">SHA-256</p>
            <input id="console-devhash" class="console-input" type="text"
                   placeholder="Type to hash" aria-label="Text to hash"
                   autocomplete="off" spellcheck="false">
            <button type="button" class="console-mono console-out" id="console-devhash-out"
                    data-console-action="copy-devhash" title="Click to copy">—</button>
        </div>
        `,
        `
        <div class="console-card">
            <p class="console-label">KEYS</p>
            <ul class="console-keys">
                <li><kbd>/</kbd> search · <kbd>Esc</kbd> close</li>
                <li><kbd>1</kbd>–<kbd>4</kbd> switch mode</li>
                <li><kbd>n</kbd> notes · <kbd>s</kbd> sort</li>
                <li><kbd>q</kbd> duck.ai</li>
            </ul>
        </div>
        `
    ],
    ctf: [
        `
        <div class="console-card">
            <p class="console-label">NEXT CTF</p>
            <p class="console-value" id="console-ctf-count">--d --:--:--</p>
            <input id="console-ctf-target" class="console-input" type="datetime-local"
                   aria-label="CTF start time">
            <p class="console-sub" id="console-ctf-status"></p>
        </div>
        `,
        `
        <div class="console-card">
            <p class="console-label">HASH IDENTIFIER</p>
            <input id="console-ctf-hash" class="console-input" type="text"
                   placeholder="paste a hash or JWT" aria-label="Hash to identify"
                   autocomplete="off" spellcheck="false">
            <p class="console-sub" id="console-hash-out">Waiting for input…</p>
        </div>
        `,
        `
        <div class="console-card">
            <p class="console-label">FLAG FORMATS</p>
            <ul class="console-formats">
                <li><code>HTB{...}</code> · <code>picoCTF{...}</code></li>
                <li><code>flag{...}</code> · <code>CTF{...}</code></li>
                <li><code>[a-f0-9]{32}</code> MD5</li>
                <li><code>eyJ...</code> JWT (base64url)</li>
            </ul>
        </div>
        `
    ]
};

let consoleConvResult = "";
let consoleDevHash = "";
let devHashToken = 0;
let devHashTimer = null;
let consoleTicker = null;

function consoleStoreGet(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (err) {
        return fallback;
    }
}

function consoleStoreSet(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (err) {
        showToast("Storage unavailable");
        return false;
    }
}

function pad2(value) {
    return String(value).padStart(2, "0");
}

function todayKey() {
    const d = new Date();
    return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
}

// ----- One thing -----
function renderOneThing() {
    const input = document.getElementById("console-one-thing");
    const status = document.getElementById("console-one-status");
    if (!input || !status) return;

    const saved = consoleStoreGet(ONE_THING_KEY, null);
    const fresh = saved && saved.date === todayKey() ? String(saved.text || "") : "";
    input.value = fresh;
    status.textContent = fresh
        ? "Saved for today · Enter to update"
        : "Set the one thing that matters today";
}

function saveOneThing(value) {
    const text = String(value || "").slice(0, ONE_THING_MAX).trim();
    consoleStoreSet(ONE_THING_KEY, { date: todayKey(), text });
    const status = document.getElementById("console-one-status");
    if (status) {
        status.textContent = text
            ? "Saved for today · Enter to update"
            : "Cleared for today";
    }
}

// ----- Research session timer -----
function getSession() {
    const saved = consoleStoreGet(SESSION_KEY, null) || {};
    return {
        elapsed: Number(saved.elapsed) > 0 ? Number(saved.elapsed) : 0,
        startedAt: typeof saved.startedAt === "number" ? saved.startedAt : null
    };
}

function sessionElapsed(session) {
    const running = session.startedAt ? Math.max(0, Date.now() - session.startedAt) : 0;
    return session.elapsed + running;
}

function formatDuration(ms) {
    const total = Math.floor(ms / 1000);
    return [
        Math.floor(total / 3600),
        Math.floor((total % 3600) / 60),
        total % 60
    ].map(pad2).join(":");
}

function toggleSession() {
    const session = getSession();
    if (session.startedAt) {
        consoleStoreSet(SESSION_KEY, { elapsed: sessionElapsed(session), startedAt: null });
    } else {
        consoleStoreSet(SESSION_KEY, { elapsed: session.elapsed, startedAt: Date.now() });
    }
    updateConsoleClocks();
}

function resetSession() {
    consoleStoreSet(SESSION_KEY, { elapsed: 0, startedAt: null });
    updateConsoleClocks();
    showToast("Session reset");
}

// ----- IOC pivots + recent searches -----
function renderIocPivots(value) {
    const out = document.getElementById("console-ioc-out");
    if (!out) return;

    const ioc = parseIOC(value);
    if (!ioc) {
        out.innerHTML =
            '<span class="console-sub">' +
            (String(value || "").trim()
                ? "Not a recognized indicator."
                : "Paste an indicator to get pivots.") +
            "</span>";
        return;
    }

    const items = buildPivotItems(ioc).slice(0, 4);
    out.innerHTML =
        '<span class="console-sub">' + escapeHtml(ioc.label) + "</span>" +
        items
            .map(
                (item) =>
                    '<button type="button" class="console-chip" data-console-action="pivot" data-url="' +
                    escapeHtml(item.url) +
                    '">' +
                    escapeHtml(item.label) +
                    "</button>"
            )
            .join("");
}

function renderRecentSearches() {
    const box = document.getElementById("console-recent");
    if (!box) return;

    const items = getHistory().slice(0, 3);
    if (!items.length) {
        box.innerHTML = '<span class="console-sub">No searches yet — the command bar fills this.</span>';
        return;
    }

    box.innerHTML = items
        .map(
            (item) =>
                '<button type="button" class="console-chip" data-console-action="recent" data-query="' +
                escapeHtml(item.query) +
                '" data-engine="' +
                escapeHtml(item.engine || "") +
                '" title="' +
                escapeHtml((item.engine || "search") + ": " + item.query) +
                '">' +
                escapeHtml(truncate(item.query, 26)) +
                "</button>"
        )
        .join("");
}

// ----- Dev converter + hash -----
function runConverter(action) {
    const input = document.getElementById("console-conv");
    const out = document.getElementById("console-conv-out");
    if (!input || !out) return;

    const value = input.value;
    let result = "";
    let error = "";

    if (!value.trim()) {
        consoleConvResult = "";
        out.textContent = "Output appears here";
        return;
    }

    if (action === "conv-b64e") {
        result = tryBase64Encode(value) || "";
        if (!result) error = "Could not encode as base64";
    } else if (action === "conv-b64d") {
        result = tryBase64Decode(value.trim()) || "";
        if (!result) error = "Not valid base64";
    } else if (action === "conv-urle") {
        try {
            result = encodeURIComponent(value);
        } catch (err) {
            error = "Could not encode";
        }
    } else if (action === "conv-urld") {
        try {
            result = decodeURIComponent(value.trim());
        } catch (err) {
            error = "Not valid URL encoding";
        }
    }

    if (error) {
        consoleConvResult = "";
        out.textContent = error;
        return;
    }

    consoleConvResult = result;
    out.textContent = truncate(result, 90);
}

function copyConverterResult() {
    if (!consoleConvResult) {
        showToast("Nothing to copy");
        return;
    }
    copyText(consoleConvResult);
}

function updateDevHash() {
    const input = document.getElementById("console-devhash");
    const out = document.getElementById("console-devhash-out");
    if (!input || !out) return;

    const value = input.value;
    if (!value) {
        consoleDevHash = "";
        out.textContent = "—";
        return;
    }

    const token = ++devHashToken;
    sha256Hex(value).then((hex) => {
        if (token !== devHashToken) return;
        const target = document.getElementById("console-devhash-out");
        if (!target) return;
        consoleDevHash = hex || "";
        target.textContent = hex ? hex.slice(0, 40) + "…" : "crypto unavailable";
    });
}

// ----- CTF countdown + hash identifier -----
function defaultCtfTarget() {
    const d = new Date();
    d.setHours(18, 0, 0, 0);
    let add = (6 - d.getDay() + 7) % 7; // next Saturday
    if (add === 0 && d.getTime() <= Date.now()) add = 7;
    d.setDate(d.getDate() + add);
    return (
        d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate()) +
        "T" + pad2(d.getHours()) + ":" + pad2(d.getMinutes())
    );
}

function renderCtfTarget() {
    const input = document.getElementById("console-ctf-target");
    if (!input) return;
    const saved = consoleStoreGet(CTF_TARGET_KEY, "");
    input.value = typeof saved === "string" && saved ? saved : defaultCtfTarget();
}

function identifyHash(value) {
    const raw = String(value || "").trim();
    if (!raw) return "Waiting for input…";
    if (isJwt(raw)) return "JWT · base64url header.payload.signature";
    if (/^\$2[aby]\$\d{2}\$/.test(raw)) return "bcrypt hash";
    if (/^\$argon2(id|i|d)?\$/.test(raw)) return "Argon2 hash";
    if (/^\$1\$/.test(raw)) return "MD5-crypt (Unix)";
    if (/^\$5\$/.test(raw)) return "SHA-256-crypt (Unix)";
    if (/^\$6\$/.test(raw)) return "SHA-512-crypt (Unix)";

    if (/^[a-f0-9]+$/i.test(raw)) {
        const byLength = {
            32: "MD5",
            40: "SHA-1",
            56: "SHA-224",
            64: "SHA-256",
            96: "SHA-384",
            128: "SHA-512"
        };
        if (byLength[raw.length]) return byLength[raw.length] + " · " + raw.length + " hex chars";
        if (raw.length === 24) return "Possibly legacy NTLM/MySQL · 24 hex chars";
    }

    if (/^[A-Za-z0-9+/]+={0,2}$/.test(raw) && raw.length % 4 === 0) {
        const decoded = tryBase64Decode(raw);
        if (decoded && /^[\x20-\x7e\s]+$/.test(decoded)) {
            return "Base64 · " + truncate(decoded, 40);
        }
        return "Base64-looking · " + raw.length + " chars";
    }

    return "Unknown format · expected hex, JWT, bcrypt or argon2";
}

// ----- Rendering + ticking -----
function renderConsole() {
    const cards = CONSOLE_TEMPLATES[currentMode] || [];
    const single = document.getElementById("mode-console");
    const left = document.getElementById("console-left");
    const right = document.getElementById("console-right");
    const wide = window.matchMedia && window.matchMedia("(min-width: 1280px)").matches;

    if (single) single.innerHTML = "";

    if (wide && left && right) {
        left.innerHTML = cards.slice(0, 2).join("");
        right.innerHTML = cards.slice(2).join("");
    } else {
        if (left) left.innerHTML = "";
        if (right) right.innerHTML = "";
        if (single) single.innerHTML = cards.join("");
    }

    if (currentMode === "personal") renderOneThing();
    if (currentMode === "research") renderRecentSearches();
    if (currentMode === "ctf") renderCtfTarget();

    updateConsoleClocks();
}

function updateConsoleClocks() {
    const now = new Date();

    const clockEl = document.getElementById("console-clock");
    if (clockEl) clockEl.textContent = now.toLocaleTimeString([], { hour12: false });

    const dateEl = document.getElementById("console-date");
    if (dateEl) {
        dateEl.textContent = now.toLocaleDateString([], {
            weekday: "long",
            month: "short",
            day: "numeric"
        });
    }

    const pctEl = document.getElementById("console-day-pct");
    if (pctEl) {
        const start = new Date(now);
        start.setHours(0, 0, 0, 0);
        const end = new Date(now);
        end.setHours(24, 0, 0, 0);
        const pct = Math.min(100, Math.max(0, ((now - start) / (end - start)) * 100));
        pctEl.textContent = pct.toFixed(0) + "%";
        const fill = document.getElementById("console-day-fill");
        if (fill) fill.style.width = pct.toFixed(1) + "%";
        const left = end - now;
        const hoursLeft = Math.floor(left / 3600000);
        const minutesLeft = Math.floor((left % 3600000) / 60000);
        const leftEl = document.getElementById("console-day-left");
        if (leftEl) {
            leftEl.textContent = hoursLeft + "h " + minutesLeft + "m left in the day";
        }
    }

    const sessionEl = document.getElementById("console-session");
    if (sessionEl) {
        const session = getSession();
        const elapsed = sessionElapsed(session);
        sessionEl.textContent = formatDuration(elapsed);
        const toggle = document.getElementById("console-session-toggle");
        if (toggle) toggle.textContent = session.startedAt ? "pause" : elapsed > 0 ? "resume" : "start";
    }

    const countEl = document.getElementById("console-ctf-count");
    if (countEl) {
        const targetInput = document.getElementById("console-ctf-target");
        const target = targetInput && targetInput.value ? new Date(targetInput.value) : null;
        const statusEl = document.getElementById("console-ctf-status");

        if (!target || isNaN(target.getTime())) {
            countEl.textContent = "--d --:--:--";
            if (statusEl) statusEl.textContent = "Set a target time";
        } else {
            const diff = target.getTime() - now.getTime();
            const past = diff <= 0;
            const abs = Math.abs(diff);
            const days = Math.floor(abs / 86400000);
            const hours = Math.floor((abs % 86400000) / 3600000);
            const minutes = Math.floor((abs % 3600000) / 60000);
            const seconds = Math.floor((abs % 60000) / 1000);
            countEl.textContent =
                (past ? "+" : "") + days + "d " + pad2(hours) + ":" + pad2(minutes) + ":" + pad2(seconds);
            if (statusEl) {
                statusEl.textContent = past
                    ? "Target passed · set the next one"
                    : "until " +
                      target.toLocaleString([], {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                      });
            }
        }
    }
}

function startConsoleClock() {
    if (consoleTicker) return;
    consoleTicker = setInterval(updateConsoleClocks, 1000);
    updateConsoleClocks();
}

// Console events are delegated on the wrapper, so cards can move between the
// side rails and the under-tile strip without losing their handlers.
(function bindConsole() {
    const host = document.getElementById("content");
    if (!host) return;

    host.addEventListener("click", (e) => {
        const action = e.target.closest("[data-console-action]");
        if (!action) return;

        switch (action.dataset.consoleAction) {
            case "session-toggle":
                toggleSession();
                break;
            case "session-reset":
                resetSession();
                break;
            case "pivot":
                if (action.dataset.url) openLink(action.dataset.url);
                break;
            case "recent": {
                const engine = SEARCH_ENGINES.find((item) => item.name === action.dataset.engine);
                runSearch(action.dataset.query || "", engine || undefined);
                break;
            }
            case "conv-b64e":
            case "conv-b64d":
            case "conv-urle":
            case "conv-urld":
                runConverter(action.dataset.consoleAction);
                break;
            case "copy-conv":
                copyConverterResult();
                break;
            case "copy-devhash":
                if (consoleDevHash) copyText(consoleDevHash);
                else showToast("Type something to hash");
                break;
            default:
                break;
        }
    });

    host.addEventListener("input", (e) => {
        const id = e.target.id;
        if (id === "console-ioc") {
            renderIocPivots(e.target.value);
        } else if (id === "console-devhash") {
            if (devHashTimer) clearTimeout(devHashTimer);
            devHashTimer = setTimeout(updateDevHash, 200);
        } else if (id === "console-ctf-hash") {
            const out = document.getElementById("console-hash-out");
            if (out) out.textContent = identifyHash(e.target.value);
        } else if (id === "console-one-thing") {
            const status = document.getElementById("console-one-status");
            if (status) status.textContent = "Unsaved — press Enter to save";
        }
    });

    host.addEventListener("change", (e) => {
        if (e.target.id === "console-ctf-target") {
            consoleStoreSet(CTF_TARGET_KEY, e.target.value);
            updateConsoleClocks();
        }
    });

    host.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;

        if (e.target.id === "console-one-thing") {
            e.preventDefault();
            saveOneThing(e.target.value);
            showToast("Saved for today");
        } else if (e.target.id === "console-ioc") {
            const ioc = parseIOC(e.target.value);
            const first = ioc ? buildPivotItems(ioc)[0] : null;
            if (first) {
                e.preventDefault();
                openLink(first.url);
            }
        }
    });
})();

// Cards move between the under-tile strip (<1280px) and the side gutters
// (>=1280px). Re-render on the crossing so the right host gets them.
if (window.matchMedia) {
    const wideLayout = window.matchMedia("(min-width: 1280px)");
    const syncConsoleLayout = () => renderConsole();
    if (wideLayout.addEventListener) wideLayout.addEventListener("change", syncConsoleLayout);
    else if (wideLayout.addListener) wideLayout.addListener(syncConsoleLayout);
}

// ---------- Anime quote feed ----------
// Short, quiet-resolve lines. Rotates every 3 seconds, pauses while hovered or
// while the tab is hidden, and skips the fade when reduced motion is requested.

const QUOTES = [
    {
        text: "If you win, you live. If you lose, you die. If you don't fight, you can't win.",
        author: "Eren Yeager",
        series: "Attack on Titan"
    },
    {
        text: "A lesson without pain is meaningless. For you cannot gain anything without sacrificing something in return.",
        author: "Edward Elric",
        series: "Fullmetal Alchemist"
    },
    {
        text: "The world isn't perfect. But it's there for us, doing the best it can. That's what makes it so damn beautiful.",
        author: "Roy Mustang",
        series: "Fullmetal Alchemist"
    },
    {
        text: "Hard work betrays none, but dreams betray many.",
        author: "Hachiman Hikigaya",
        series: "My Teen Romantic Comedy SNAFU"
    },
    {
        text: "If everyone is not special, maybe you can be what you want to be.",
        author: "Shigeo Kageyama",
        series: "Mob Psycho 100"
    },
    {
        text: "The moment you think of giving up, think of the reason why you held on for so long.",
        author: "Natsu Dragneel",
        series: "Fairy Tail"
    },
    {
        text: "I'll leave tomorrow's problems to tomorrow's me.",
        author: "Saitama",
        series: "One Punch Man"
    },
    {
        text: "My magic is never giving up!",
        author: "Asta",
        series: "Black Clover"
    },
    {
        text: "The only thing we're allowed to do is believe that we won't regret the choice we made.",
        author: "Levi Ackerman",
        series: "Attack on Titan"
    },
    {
        text: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
        author: "Kenshin Himura",
        series: "Rurouni Kenshin"
    },
    {
        text: "It's not the face that makes someone a monster; it's the choices they make.",
        author: "Naruto Uzumaki",
        series: "Naruto"
    },
    {
        text: "You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want.",
        author: "Ging Freecss",
        series: "Hunter x Hunter"
    },
    {
        text: "No matter how deep the night, it always turns to day, eventually.",
        author: "Brook",
        series: "One Piece"
    }
];

const QUOTE_INTERVAL = 3000;
const QUOTE_FADE = 350;

let quoteIndex = 0;
let quoteTimer = null;
let quotePaused = false;

function renderQuote() {
    const textEl = document.getElementById("quote-text");
    const authorEl = document.getElementById("quote-author");
    if (!textEl || !authorEl) return;

    const quote = QUOTES[quoteIndex % QUOTES.length];
    textEl.textContent = quote.text;
    authorEl.textContent = quote.author + ", " + quote.series;
}

function advanceQuote() {
    const card = document.getElementById("quote-card");
    const reduceMotion =
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!card || reduceMotion) {
        quoteIndex = (quoteIndex + 1) % QUOTES.length;
        renderQuote();
        return;
    }

    card.classList.add("fading");
    setTimeout(() => {
        quoteIndex = (quoteIndex + 1) % QUOTES.length;
        renderQuote();
        card.classList.remove("fading");
    }, QUOTE_FADE);
}

function startQuotes() {
    const card = document.getElementById("quote-card");
    if (!card) return;

    // Start somewhere new each day instead of always at line one.
    quoteIndex = Math.floor(Date.now() / 86400000) % QUOTES.length;
    renderQuote();

    if (quoteTimer) clearInterval(quoteTimer);
    quoteTimer = setInterval(() => {
        if (document.hidden || quotePaused) return;
        advanceQuote();
    }, QUOTE_INTERVAL);

    card.addEventListener("mouseenter", () => {
        quotePaused = true;
    });
    card.addEventListener("mouseleave", () => {
        quotePaused = false;
    });
}

// ---------- Initialize ----------
try {
    if (localStorage.getItem(THEME_KEY) === "calm") document.body.classList.add("no-fx");
} catch (err) {
    /* ignore */
}
applyLinkTarget();
switchMode(currentMode);
startClock();
startConsoleClock();
startQuotes();

// A path like /htab/instagram arrives as ?go=instagram (see 404.html).
handlePathShortcut();

// ---------- Search focus ----------
// Firefox hands focus to the address bar when a tab opens, and a custom
// new-tab page does not always win that race. If typing lands in the address
// bar instead, Firefox appends it to the page URL (e.g. /htab/hi) and you get
// a 404. Claim focus for the command bar so keystrokes land where intended.
// Only when nothing else has focus, so we never steal it from the user.
function focusSearchBar() {
    const active = document.activeElement;
    if (active === searchInput) return;
    if (active && active !== document.body && active !== document.documentElement) return;
    try {
        searchInput.focus({ preventScroll: true });
    } catch (error) {
        searchInput.focus();
    }
}

focusSearchBar();
// The address bar can grab focus just after load; retry once on the next
// frame and once shortly after, then leave focus alone.
requestAnimationFrame(focusSearchBar);
setTimeout(focusSearchBar, 150);

// Returning via the back/forward cache also restores the browser's focus.
window.addEventListener("pageshow", (event) => {
    if (event.persisted) focusSearchBar();
});

// The icon bundle normally arrives after this script runs (it is a deferred
// module); refresh in case it was already cached and parsed first.
if (window.devIcons) refreshIcons();
