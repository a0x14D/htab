/**
 * developer-icons loader + SVG serializer.
 *
 * The library is React-based, so instead of shipping React we map `react` and
 * `react/jsx-runtime` to tiny local shims (see vendor/). Its icons then return
 * plain element trees like {type:"svg", props:{...}, children:[...]}, which we
 * serialize to an SVG string here.
 *
 * Why a serializer instead of mounting React:
 *   - no React runtime (~140 KB saved)
 *   - no build step, no framework in the page
 *   - icons are inert markup, so they cannot break the app if the CDN is down
 *
 * If anything fails (offline, file:// where module CORS is blocked, CDN error)
 * the app keeps using its emoji icons — see iconMarkup() in app.js.
 */

const ICON_SOURCE = "https://cdn.jsdelivr.net/npm/developer-icons@7.1.0/dist/main.min.js";

// Self-closing SVG elements.
const VOID_ELEMENTS = new Set([
    "path", "circle", "rect", "line", "polygon", "polyline", "ellipse", "use", "stop"
]);

/**
 * React spells some SVG attributes in camelCase but the DOM expects either
 * kebab-case or a name that is itself camelCase. Only kebab-case the known
 * presentation attributes, so `viewBox`, `preserveAspectRatio`,
 * `gradientUnits` and friends keep their exact casing.
 */
const KEBAB_ATTRS = new Set([
    "strokeWidth", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit",
    "strokeDasharray", "strokeDashoffset", "strokeOpacity", "fillOpacity",
    "fillRule", "clipRule", "clipPath", "clipPathUnits", "stopColor",
    "stopOpacity", "fontSize", "fontFamily", "fontWeight", "textAnchor",
    "dominantBaseline", "letterSpacing", "wordSpacing", "textDecoration",
    "colorInterpolation", "colorInterpolationFilters", "floodColor",
    "floodOpacity", "lightingColor", "markerStart", "markerMid", "markerEnd",
    "paintOrder", "shapeRendering", "vectorEffect", "filterUnits",
    "primitiveUnits", "maskUnits", "maskContentUnits", "gradientUnits",
    "gradientTransform", "patternUnits", "patternContentUnits",
    "patternTransform", "markerWidth", "markerHeight", "markerUnits",
    "refX", "refY", "stdDeviation", "baseFrequency", "numOctaves",
    "xChannelSelector", "yChannelSelector", "surfaceScale",
    "specularConstant", "specularExponent", "diffuseConstant", "kernelMatrix",
    "kernelUnitLength", "preserveAlpha", "spreadMethod", "textLength",
    "lengthAdjust", "startOffset"
]);

const RENAMED_ATTRS = {
    className: "class",
    htmlFor: "for",
    xmlSpace: "xml:space",
    xlinkHref: "xlink:href",
    xmlnsXlink: "xmlns:xlink"
};

function attributeName(name) {
    if (RENAMED_ATTRS[name]) return RENAMED_ATTRS[name];
    if (KEBAB_ATTRS.has(name)) return name.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
    return name;
}

function escapeXml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function styleToString(style) {
    return Object.entries(style)
        .map(([prop, value]) => `${prop.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}:${value}`)
        .join(";");
}

/**
 * Serialize a React-ish element tree to SVG markup.
 * Handles both jsx() nodes ({type, props, key}) and createElement() nodes
 * ({type, props, children}) because the library uses both.
 */
function serialize(node) {
    if (node === null || node === undefined || node === false || node === true) return "";
    if (typeof node === "string" || typeof node === "number") return escapeXml(node);
    if (Array.isArray(node)) return node.map(serialize).join("");

    const { type, props } = node;

    // Component (e.g. the shared <Icon> wrapper) — call it and serialize the result.
    if (typeof type === "function") return serialize(type(props || {}));

    // Fragment
    if (typeof type === "symbol" || type === undefined) {
        return serialize(node.children !== undefined ? node.children : props && props.children);
    }

    const children = node.children !== undefined ? node.children : props && props.children;

    let attributes = "";
    for (const [rawName, value] of Object.entries(props || {})) {
        if (rawName === "children" || rawName === "key") continue;
        if (value === null || value === undefined || value === false) continue;

        if (rawName === "style" && value && typeof value === "object") {
            attributes += ` style="${escapeXml(styleToString(value))}"`;
            continue;
        }

        attributes += ` ${attributeName(rawName)}="${escapeXml(value)}"`;
    }

    const open = `<${type}${attributes}`;
    if (VOID_ELEMENTS.has(type)) return `${open}/>`;
    return `${open}>${serialize(children)}</${type}>`;
}

let iconModule = null;

/**
 * Load the icon bundle and publish window.devIcons.
 * Safe to call more than once; resolves to the same registry.
 */
export async function loadIcons() {
    if (iconModule) return window.devIcons;

    iconModule = await import(ICON_SOURCE);

    window.devIcons = {
        /**
         * @param {string} name  Export name, e.g. "GitHubDark".
         * @param {number} size  Rendered pixel size (CSS may override it).
         * @returns {string} SVG markup, or "" when the icon does not exist.
         */
        svg(name, size = 24) {
            if (!name || typeof name !== "string") return "";
            const component = iconModule[name];
            if (typeof component !== "function") return "";
            try {
                return serialize(component({ size }));
            } catch (error) {
                return "";
            }
        },

        /** @returns {boolean} whether the icon set exports this name. */
        has(name) {
            return typeof iconModule[name] === "function";
        },

        /** All available export names (useful for debugging). */
        names() {
            return Object.keys(iconModule);
        }
    };

    document.dispatchEvent(
        new CustomEvent("devicons:ready", { detail: { count: Object.keys(iconModule).length } })
    );

    return window.devIcons;
}

// Kick off immediately; failures are non-fatal by design.
loadIcons().catch(() => {
    // Offline, blocked by CORS (file://), or CDN down: emoji fallbacks stay.
});
