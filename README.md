# Study Tracker — SOC → Security Engineer

Multi-goal study roadmap tracker (Progress Console). Works as a **PWA** on phone (Chrome → Add to Home screen) and offline after first load.

## Live use

1. Open the GitHub Pages / Netlify URL for this repo, **or**
2. Open `index.html` via any HTTPS host
3. Chrome on phone → **⋮ → Install app / Add to Home screen**

## Files

| File | Role |
|------|------|
| `index.html` | Full app (tracker UI + logic) |
| `manifest.json` | PWA manifest |
| `sw.js` | Service worker (offline cache) |
| `icon-192.png` / `icon-512.png` | App icons |

## Features

- Multi-goal tracking with switchable goals
- Editable title / track name
- Roadmap phases + custom tasks/phases
- Study log & reminders
- Achievements / badges
- Theme customization (schemes + custom colors)
- Undo delete goal (15s toast)
- Mobile-responsive layout

## Local preview

```bash
cd this-folder
python3 -m http.server 8080
# open http://localhost:8080
```

## Netlify

Drag this folder onto [Netlify Drop](https://app.netlify.com/drop), or connect this GitHub repo to Netlify for auto-deploy.
