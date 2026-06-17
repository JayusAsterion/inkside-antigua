# Noir Ink Studio Landing Page

Premium dark landing page demo for a tattoo studio website template. The page is designed to be adapted for studios that need custom tattoo services, artist profiles, portfolio presentation, and a simple booking flow.

## Stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS 4
- Motion
- Lenis
- Lucide React
- clsx + tailwind-merge

## Features

- Responsive navbar with a custom Noir N mark.
- Cinematic hero with local tattoo imagery and strong booking CTAs.
- About, services, artists, gallery, process, and booking sections.
- Service and artist modals.
- Image lightbox for portfolio items.
- Smooth scrolling with Lenis.
- Motion-based reveal and hover interactions with reduced-motion support.
- PNG favicon using the Noir N concept.

## Development

```bash
npm install
npm run dev
```

Vite serves the app at:

```txt
http://localhost:5173
```

## Validation

```bash
npm run lint
npm run build
```

## Assets

Tattoo images live in:

```txt
src/assets/images/tattoos/
```

The app detects images with:

```txt
tattoo-*.jpg
tattoo-*.jpeg
tattoo-*.png
tattoo-*.webp
```

The logo mark is rendered in code through `src/components/ui/LogoMark.tsx`. The browser icon lives at:

```txt
public/favicon.png
```

## Editable Content

Primary bilingual copy lives in:

```txt
src/i18n/translations.ts
```

Shared links and fallback constants live in:

```txt
src/data/siteData.ts
```
