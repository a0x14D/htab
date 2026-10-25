# Deployment

## GitHub Pages (Recommended)
The live version is at [https://a0x14d.github.io/htab/](https://a0x14d.github.io/htab/).

To deploy your fork:
1. Go to repo **Settings → Pages**
2. Set **Source** to `Deploy from a branch`
3. Select branch `main` (or `master`) and folder `/ (root)`
4. Save - GitHub will build and deploy
5. Use the URL in Firefox New Tab Override

## Static Hosting
Works on any static host: Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.

Just upload the repo contents. No server-side code needed.

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
