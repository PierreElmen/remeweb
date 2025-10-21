# Re:Me Landing

Re:Me is a mindful iOS companion that helps you take intentional breaks from your phone. This SvelteKit site mirrors the app’s calm styling and shares how commitments, Screen Time shielding, achievements, and the growing tree work.

## Tech stack
- SvelteKit 2 + Vite
- adapter-static for Netlify (`build/` publish directory, `npm run build`)
- System fonts, custom CSS mirroring Theme.swift
- Two routes: `/` (landing) and `/privacy`

## Local development
```bash
npm install
npm run dev -- --open
Production build
npm run build
npm run preview
Deploying to Netlify
Build command: npm run build
Publish directory: build
Site URL: https://reme.elmen.dev
