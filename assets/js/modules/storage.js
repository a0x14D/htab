const NOTES_KEY = "hackernt_notes_v1";
const TODOS_KEY = "hackernt_todos_v1";
const PINS_KEY = "hackernt_pins_v1";
const ORDER_KEY = "hackernt_tile_order_v1";
const CUSTOM_KEY = "hackernt_custom_links_v1";
const HISTORY_KEY = "hackernt_history_v1";
const LINK_TARGET_KEY = "hackernt_link_target_v1";
const TILE_ORDER_MODE_KEY = "hackernt_tile_order_mode_v1";
const MODE_KEY = "hackernt_mode_v1";
const THEME_KEY = "hackernt_theme_v1";

export function getNotes(mode) {
    try {
        const data = JSON.parse(localStorage.getItem(NOTES_KEY) || "{}");
        return data[mode] || "";
    } catch {
        return "";
    }
}

export function saveNotes(mode, text) {
    try {
        const data = JSON.parse(localStorage.getItem(NOTES_KEY) || "{}");
        data[mode] = text;
        localStorage.setItem(NOTES_KEY, JSON.stringify(data));
    } catch {}
}

export function getAllTodos() {
    try {
        return JSON.parse(localStorage.getItem(TODOS_KEY) || "{}");
    } catch {
        return {};
    }
}

export function saveAllTodos(todos) {
    try {
        localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    } catch {}
}

export function getPinned(mode) {
    try {
        const data = JSON.parse(localStorage.getItem(PINS_KEY) || "{}");
        return new Set(data[mode] || []);
    } catch {
        return new Set();
    }
}

export function savePinned(mode, pins) {
    try {
        const data = JSON.parse(localStorage.getItem(PINS_KEY) || "{}");
        data[mode] = Array.from(pins);
        localStorage.setItem(PINS_KEY, JSON.stringify(data));
    } catch {}
}

export function getTileOrder(mode) {
    try {
        const data = JSON.parse(localStorage.getItem(ORDER_KEY) || "{}");
        return data[mode] || [];
    } catch {
        return [];
    }
}

export function saveTileOrder(mode, order) {
    try {
        const data = JSON.parse(localStorage.getItem(ORDER_KEY) || "{}");
        data[mode] = order;
        localStorage.setItem(ORDER_KEY, JSON.stringify(data));
    } catch {}
}

export function getCustomLinks() {
    try {
        return JSON.parse(localStorage.getItem(CUSTOM_KEY) || "[]");
    } catch {
        return [];
    }
}

export function saveCustomLinks(links) {
    try {
        localStorage.setItem(CUSTOM_KEY, JSON.stringify(links));
    } catch {}
}

export function getHistory() {
    try {
        return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    } catch {
        return [];
    }
}

export function saveHistory(history) {
    try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 50)));
    } catch {}
}

export function getLinkTarget() {
    try {
        return localStorage.getItem(LINK_TARGET_KEY) || "same";
    } catch {
        return "same";
    }
}

export function saveLinkTarget(target) {
    try {
        localStorage.setItem(LINK_TARGET_KEY, target);
    } catch {}
}

export function getTileOrderMode() {
    try {
        return localStorage.getItem(TILE_ORDER_MODE_KEY) || "default";
    } catch {
        return "default";
    }
}

export function saveTileOrderMode(mode) {
    try {
        localStorage.setItem(TILE_ORDER_MODE_KEY, mode);
    } catch {}
}

export function getSavedMode() {
    try {
        return localStorage.getItem(MODE_KEY) || "personal";
    } catch {
        return "personal";
    }
}

export function saveMode(mode) {
    try {
        localStorage.setItem(MODE_KEY, mode);
    } catch {}
}

export function getTheme() {
    try {
        return localStorage.getItem(THEME_KEY) === "no-fx" ? "no-fx" : "fx";
    } catch {
        return "fx";
    }
}

export function saveTheme(theme) {
    try {
        localStorage.setItem(THEME_KEY, theme);
    } catch {}
}
