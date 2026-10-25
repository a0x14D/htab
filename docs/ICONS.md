# Icons

## Flaticon UIcons
Icons are loaded via [Flaticon UIcons](https://www.flaticon.com/uicons) CSS (`https://cdn.jsdelivr.net/npm/@flaticon/flaticon-uicons@3.3.1/css/all/all.min.css`).

## Adding Icons to Links
In `app.js`, add `flaticonIcon` to a link:
```js
{ name: "GitHub", url: "https://github.com", icon: "🐙", flaticonIcon: "fi fi-brands-github" }
```

Or rely on host inference - `inferFlaticonIcon()` maps common hosts automatically.

## Styling
- Icons get `.dev-icon` class with size controlled by CSS
- On hover, brand colors are applied (GitHub, YouTube, Reddit, Discord, Google, etc.)
- Menu icons use `.dev-icon-menu` for smaller size
- Emoji fallback if no Flaticon icon is available

## Finding Icon Classes
Browse [Flaticon UIcons](https://www.flaticon.com/uicons/interface-icons) to find class names like `fi fi-brands-github`, `fi fi-rr-home`, etc.

## Customization
Edit `assets/scss/components/_icons.scss` to adjust sizes/colors/hover effects.
