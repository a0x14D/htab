# Usage

## Navigation
| Key / Action | What |
|--------------|------|
| `/` | Focus the command/search bar |
| `n` | Toggle scratchpad (notes + todos) |
| `q` | Open Duck.ai |
| `1` / `2` / `3` / `4` | Switch to Personal / Research / Dev / CTF |
| `Tab` / `↑` / `↓` | Navigate results in dropdown |
| `Enter` | Open selected item |
| `Esc` | Close dropdown / scratchpad |
| `?` | (Planned) Show shortcut help |

## Command Bar
- **Search**: Just type and press `Enter` to search with your default engine for the current mode.
- **Jump to link**: Start typing a link name to filter and jump to it.
- **Search engines**: Type `@` followed by shortcut/name (e.g. `@shodan test.com`).
- **Commands**: Type `:` followed by a command (e.g. `:mode dev`).
- **IOCs/decoders**: Paste IP/domain/hash/CVE/JWT/Base64 to get pivots/decoders.
- **History**: Clear bar to see recent searches.

## Commands (`:`)
| Command | Args | Description |
|---------|------|-------------|
| `:mode` | `personal\|research\|dev\|ctf` | Switch mode |
| `:order` | `default\|frecency` | Sort tiles by usage |
| `:reset-order` | — | Clear manual drag order |
| `:pin` | `<link name>` | Pin a link to top |
| `:unpin` | `<link name>` | Unpin a link |
| `:pins` | — | List pinned links |
| `:link` | `add <name> <url> [icon]` / `remove <name>` / `list` / `clear` | Manage custom links |
| `:todo` | `add <text>` / `done <n>` / `undone <n>` / `delete <n>` / `clear` / `open` | Manage todos |
| `:note` | `[text]` | Read or append to scratchpad notes |
| `:export` | — | Download backup JSON |
| `:import` | — | Import backup JSON (reloads after import) |
| `:clear-history` | — | Clear recent searches |
| `:theme` | — | Toggle scanlines/glow |
| `:help` | — | Show all commands |
| `:reload` | — | Reload dashboard |

## Scratchpad
- **Toggle**: Press `n` or click the 📝 button.
- **Tabs**: Switch between `checklist` and `notes`.
- **Todos**: Add via input (Enter) or `:todo add`. Click checkbox to toggle, ✕ to delete.
- **Notes**: Freeform text, auto‑saved per mode.
- **Indicator**: 📝 shows a green dot when there are open todos.

## Links
- **Drag & drop**: Drag tiles to reorder.
- **Pin**: Hover tile and click ★ to pin/unpin.
- **Custom**: Remove custom tiles with ✕. Add via `:link add`.
- **Target**: Click `→`/`↗` in header to toggle new tab vs same tab.

## Tips
- **Frecency**: After using links for a bit, `:order frecency` feels natural.
- **Pivots**: In Research mode, paste IOCs to get instant pivot links.
- **Decoders**: Paste encoded strings to decode inline without leaving the page.
- **Backup often**: Use `:export` before trying experimental changes.
- **Works offline-ish**: Core UI works without network; CDN assets may fail gracefully.
