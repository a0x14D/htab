/**
 * Icon loader using Flaticon UIcons.
 * Icons are loaded via CSS classes from the Flaticon UIcons CDN.
 */

let iconModule = null;

// Keep the event dispatch for compatibility
export async function loadIcons() {
    if (iconModule) return iconModule;
    
    iconModule = { ready: true };
    
    document.dispatchEvent(
        new CustomEvent("devicons:ready", { detail: { count: 0 } })
    );
    
    return iconModule;
}

// Kick off immediately
loadIcons().catch(() => {
    // Ignore errors
});
