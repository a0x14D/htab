export function escapeHtml(str = "") {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export function sha256Hex(message) {
    if (typeof crypto === "undefined" || !crypto.subtle) {
        return Promise.resolve("");
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    return crypto.subtle.digest("SHA-256", data).then((buffer) => {
        const view = new Uint8Array(buffer);
        let hex = "";
        for (let i = 0; i < view.length; i++) {
            hex += view[i].toString(16).padStart(2, "0");
        }
        return hex;
    });
}

export function formatTime(date = new Date()) {
    return date.toLocaleTimeString([], { hour12: false });
}

export function formatDate(date = new Date()) {
    return date.toLocaleDateString([], { year: "numeric", month: "2-digit", day: "2-digit" });
}
