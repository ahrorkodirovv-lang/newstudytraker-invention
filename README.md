# Study Tracker — SOC → Security Engineer

Offline-first, mobile-friendly multi-goal study roadmap tracker (PWA).

## Features
- Multiple goals / tracks with switcher
- Customizable themes, colors, backgrounds
- Customize button for phases & tasks
- 15-second undo toast after deleting a goal
- Fully offline (localStorage + service worker)
- Adaptive for phones (including Redmi / small screens)
- Installable as PWA

## Live demo
https://unique-lollipop-f86b8b.netlify.app/

## How to use
1. Open `index.html` in any modern browser, or
2. Deploy the whole folder to Netlify / GitHub Pages / any static host
3. On Android: open the site → browser menu → "Add to Home screen" / "Install app"

## Files
- `index.html` — complete single-file app (HTML + CSS + JS)
- `manifest.json` — PWA manifest
- `sw.js` — service worker for offline caching
- `icon-192.png` / `icon-512.png` — app icons (optional)

## Local development
Just open `index.html`. No build step required.

Built for Redmi and other Android devices with proper viewport, safe-area, and touch support.
