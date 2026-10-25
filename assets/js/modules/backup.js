const KEYS = {
    todos: "hackernt_todos_v1",
    notes: "hackernt_notes_v1",
    pins: "hackernt_pins_v1",
    tileOrder: "hackernt_tile_order_v1",
    customLinks: "hackernt_custom_links_v1",
    history: "hackernt_history_v1",
    linkTarget: "hackernt_link_target_v1",
    tileOrderMode: "hackernt_tile_order_mode_v1",
    mode: "hackernt_mode_v1",
    theme: "hackernt_theme_v1"
};

export function exportAll() {
    try {
        const data = {
            version: 1,
            exportedAt: new Date().toISOString(),
            todos: JSON.parse(localStorage.getItem(KEYS.todos) || "{}"),
            notes: JSON.parse(localStorage.getItem(KEYS.notes) || "{}"),
            pins: JSON.parse(localStorage.getItem(KEYS.pins) || "{}"),
            tileOrder: JSON.parse(localStorage.getItem(KEYS.tileOrder) || "{}"),
            customLinks: JSON.parse(localStorage.getItem(KEYS.customLinks) || "[]"),
            history: JSON.parse(localStorage.getItem(KEYS.history) || "[]"),
            linkTarget: localStorage.getItem(KEYS.linkTarget) || "same",
            tileOrderMode: localStorage.getItem(KEYS.tileOrderMode) || "default",
            mode: localStorage.getItem(KEYS.mode) || "personal",
            theme: localStorage.getItem(KEYS.theme) || "fx"
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `hacker-newtab-backup-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        return true;
    } catch (err) {
        console.error("Export failed:", err);
        return false;
    }
}

export function importAll(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject(new Error("No file provided"));
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                
                if (data.todos) localStorage.setItem(KEYS.todos, JSON.stringify(data.todos));
                if (data.notes) localStorage.setItem(KEYS.notes, JSON.stringify(data.notes));
                if (data.pins) localStorage.setItem(KEYS.pins, JSON.stringify(data.pins));
                if (data.tileOrder) localStorage.setItem(KEYS.tileOrder, JSON.stringify(data.tileOrder));
                if (data.customLinks) localStorage.setItem(KEYS.customLinks, JSON.stringify(data.customLinks));
                if (data.history) localStorage.setItem(KEYS.history, JSON.stringify(data.history));
                if (data.linkTarget) localStorage.setItem(KEYS.linkTarget, data.linkTarget);
                if (data.tileOrderMode) localStorage.setItem(KEYS.tileOrderMode, data.tileOrderMode);
                if (data.mode) localStorage.setItem(KEYS.mode, data.mode);
                if (data.theme) localStorage.setItem(KEYS.theme, data.theme);
                
                resolve(data);
            } catch (err) {
                reject(err);
            }
        };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

export function createImportInput() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json,.json";
    input.style.display = "none";
    document.body.appendChild(input);
    return input;
}
