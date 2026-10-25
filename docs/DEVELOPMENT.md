# Development

## Tech Stack
- **Vanilla JS (ES modules)** — no framework
- **Vite** — dev server with HMR, production builds
- **SASS** — styles in `assets/scss/`, compiled to `assets/css/main.css`
- **Tailwind CSS** — utility classes via CDN
- **Flaticon UIcons** — icons via CSS

## Project Structure
```text
htab/
├── assets/
│   ├── css/
│   │   └── main.css      # Compiled CSS
│   ├── js/
│   │   ├── app.js        # Main app logic
│   │   ├── icons.js      # Icon loader
│   │   └── modules/
│   │       ├── backup.js # Import/export
│   │       ├── state.js  # Shared state
│   │       ├── storage.js# localStorage helpers
│   │       └── utils.js  # Utilities (escapeHtml, etc.)
│   └── scss/             # SASS partials (abstracts/, base/, components/, layout/)
├── docs/                 # Documentation
├── vendor/               # React shims (legacy)
├── index.html
├── package.json
├── vite.config.js
├── wrangler.jsonc        # Cloudflare static asset deploy config
└── README.md
```

## Setup
```bash
npm install
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

## SASS
```bash
npm run sass:build       # Compile once
npm run sass:watch       # Watch mode
npm run sass:build:prod  # Compressed
```

## Branches & Deploy
- `dev` — working branch; commit work here.
- `master` — default branch; Cloudflare builds from this one.

Keep both branches in lockstep with a fast-forward merge:

```bash
git checkout dev
# ...work...
git add -A && git commit -m "..."

git checkout master
git merge --ff-only dev        # fails if master diverged - fix that first
git push origin master

git checkout dev
git push origin dev
```

Use `--ff-only` so `master` only ever moves forward to the same commit as `dev` — no merge commits, no drift.

Deployment runs `npm run build` then `npx wrangler deploy`; `wrangler.jsonc` uploads `dist/` as static assets, so no Worker script or Cloudflare Vite plugin is involved. To deploy manually, run `npm run deploy`. See [Deployment](DEPLOYMENT.md) for details.

## Development Notes
- **ES Modules**: `app.js` and modules use `import`/`export`. Loaded as `<script type="module">`.
- **State**: Try to use `modules/state.js` for shared state to avoid globals where possible.
- **Storage**: Use `modules/storage.js` helpers for localStorage access.
- **Styling**: Add styles to appropriate SASS partials in `assets/scss/components/` or `layout/`. Avoid large inline styles.
- **Icons**: Add Flaticon classes via `flaticonIcon` or let host inference handle it.
- **Backwards compatible**: The app still works as static files (open `index.html` directly).

## Adding Features
1. **New command**: Add to `COMMANDS` array in `app.js`, handle in `runCommand()`.
2. **New module**: Create in `assets/js/modules/`, import where needed.
3. **New style**: Create/edit partial in `assets/scss/`, run `npm run sass:build`.
4. **New link/default**: Edit `MODES` in `app.js`.

## Tips
- Use Vite dev server for fastest iteration.
- Keep changes dependency-free when possible.
- Follow existing terminal/hacker aesthetic.
- Test in Firefox and Chrome.
- Data is in localStorage - use `:export` to backup before big changes.
