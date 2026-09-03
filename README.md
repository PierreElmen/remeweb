# Re:Me website

The public website for Re:Me, an iOS app for intentional phone-free commitments. The site explains protected commitments, per-mode allowed essentials, reclaimed-time progress, nearby group commitments, and the app’s local-first approach.

## Routes

- `/` — product landing page
- `/privacy` — privacy policy covering local storage, Screen Time, and nearby sharing
- `/support` — support and setup guidance

## Stack

- SvelteKit 2 and Svelte 4
- Tailwind CSS 3 with a custom Re:Me design system
- Static adapter for Netlify
- Inter variable font and Re:Me app icon assets

## Local development

```bash
npm install
npm run dev -- --open
```

## Production build

```bash
npm run build
npm run preview
```

Netlify publishes the generated `build/` directory at `https://reme.elmen.dev`.

The site intentionally contains no App Store badge or download URL until the public listing is confirmed.
