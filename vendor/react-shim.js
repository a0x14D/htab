/**
 * Minimal React shim for developer-icons.
 *
 * `developer-icons` is published as React components, but it only uses React
 * to *build element trees* — it never mounts anything or uses hooks. So we
 * provide just enough of the React API for the bundle to run, then serialize
 * the resulting tree to SVG ourselves (see icons.js).
 *
 * This is mapped in by the import map in index.html:
 *     "react" -> "./vendor/react-shim.js"
 *
 * Keep it dependency-free: it must not import anything.
 */

export function createElement(type, props, ...children) {
    return {
        type,
        props: props || {},
        children: children.length ? children : undefined
    };
}

export const Fragment = Symbol("Fragment");

export default { createElement, Fragment };
