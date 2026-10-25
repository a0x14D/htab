export const state = {
    currentMode: "personal",
    menuItems: [],
    selectedIndex: -1,
    dragUrl: null,
    justDragged: false,
    pastedInput: false
};

export function setCurrentMode(mode) {
    state.currentMode = mode;
}

export function setMenuItems(items) {
    state.menuItems = items;
}

export function setSelectedIndex(index) {
    state.selectedIndex = index;
}

export function setDragUrl(url) {
    state.dragUrl = url;
}

export function setJustDragged(val) {
    state.justDragged = val;
}

export function setPastedInput(val) {
    state.pastedInput = val;
}
