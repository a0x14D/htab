# Deployment

## GitHub Pages (Recommended)
The live version is at [https://a0x14d.github.io/htab/](https://a0x14d.github.io/htab/).

To deploy your fork:
1. Go to repo **Settings → Pages**
2. Set **Source** to `Deploy from a branch`
3. Select branch `main` (or `master`) and folder `/ (root)`
4. Save - GitHub will build and deploy
5. Use the URL in Firefox New Tab Override

## Cloudflare Workers (static assets)
The repo includes a `wrangler.jsonc` that deploys the `dist/` folder as static assets. No Worker script or Vite plugin is needed.

From the repo root:

```bash
npm run deploy   # npm run build && wrangler deploy
```

For Cloudflare Workers Builds (connected Git repo), use:

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`

Wrangler reads `wrangler.jsonc`, so it will not try to auto-configure the project. Rename `"name"` in `wrangler.jsonc` if you fork it under a different Worker name.

## Static Hosting
Works on any static host: Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.

Just upload the repo contents. No server-side code needed. For Cloudflare **Pages** (rather than Workers), set the build command to `npm run build` and the output directory to `dist`.

## Local Serving
```bash
# Python
python3 -m http.server 8000

# Node
npx serve .

# Vite preview (after build)
npm run build && npm run preview
```

## Firefox New Tab Setup
Since Firefox removed `browser.newtab.url`:
1. Install [New Tab Override](https://addons.mozilla.org/firefox/addon/new-tab-override/)
2. Set custom URL to your hosted URL or `file:///.../index.html`
3. Done

## Notes
- All data is stored in localStorage per origin
- CDN assets (Tailwind, Flaticon) need internet on first load
- Works fine over `file://` protocol
- No backend required
