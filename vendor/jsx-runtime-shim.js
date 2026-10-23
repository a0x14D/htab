/**
 * Minimal `react/jsx-runtime` shim for developer-icons.
 *
 * React's automatic JSX runtime calls `jsx(type, props, key)`. The key is the
 * third argument — NOT a child — so it must not be folded into the tree.
 *
 * Mapped in by the import map in index.html:
 *     "react/jsx-runtime" -> "./vendor/jsx-runtime-shim.js"
 */

function element(type, props, key) {
    return { type, props: props || {}, key };
}

export function jsx(type, props, key) {
    return element(type, props, key);
}

export function jsxs(type, props, key) {
    return element(type, props, key);
}

// Some builds reference jsxDEV in development; alias it for safety.
export const jsxDEV = jsx;

export const Fragment = Symbol("Fragment");

export default { jsx, jsxs, jsxDEV, Fragment };
