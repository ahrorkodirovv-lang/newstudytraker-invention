# Study Tracker — SOC → Security Engineer

Offline-first multi-goal study roadmap tracker (PWA).

## Open the app

**GitHub Pages** (after enabling):  
https://ahrorkodirovv-lang.github.io/newstudytraker-invention/

**Raw HTML** (open `index.html` via any static host).

## Features
- Multiple goals / tracks with switcher
- Customizable themes & colors
- Customize phases & tasks
- 15-second undo after deleting a goal
- Mobile adaptive (Redmi / phones)
- Works offline (service worker)

## How it loads
`index.html` + `bootstrap.js` load gzipped chunks `app.b64.0` … `app.b64.5` and inject the full app.

## Deploy to Netlify
Connect this repo, or drag the folder to [Netlify Drop](https://app.netlify.com/drop).

## Local
```bash
python3 -m http.server 8080
# open http://localhost:8080
```
