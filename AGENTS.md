# AGENTS.md

## Project Stack

- React 19 + Vite 8 + TypeScript.
- Tailwind CSS 4 via `@tailwindcss/vite` and `src/styles/globals.css`.
- Motion for animations, Lenis for smooth scrolling, Lucide React for icons.
- Utility class merging with `clsx` + `tailwind-merge` through `src/lib/utils.ts`.

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Preview: `npm run preview`
- Tests: no test script is currently configured.

## Main Structure

- `src/App.tsx`: section order and app composition.
- `src/sections/`: landing sections.
- `src/components/layout/`: Navbar, Footer, Section, SmoothScroll.
- `src/components/ui/`: reusable UI and modals.
- `src/data/`: static site data and local image helpers.
- `src/i18n/` and `src/context/`: ES/EN translations and language provider.
- `src/assets/images/`: brand and tattoo image assets.
- `src/styles/globals.css`: Tailwind theme tokens, global styles, textures.

## Coding Conventions

- Use TypeScript with explicit props/types where useful.
- Prefer existing components (`Section`, `Container`, `Button`, `Badge`, `SectionTitle`) before creating new abstractions.
- Use `cn()` for conditional Tailwind classes.
- Keep data-driven content in `src/i18n/translations.ts` or `src/data/siteData.ts` as appropriate.
- Keep keys stable across languages; do not use translated text as React keys.
- Keep comments minimal and only where they clarify non-obvious behavior.

## Design Rules

- Preserve the dark, monochrome, premium tattoo-studio aesthetic.
- Use the existing palette and fonts from `globals.css`.
- Keep layouts editorial, high-contrast, responsive, and free of horizontal scroll.
- Use local assets only unless explicitly requested otherwise.
- Keep image treatments consistent: `object-cover`, dark overlays, subtle borders, controlled contrast.
- Do not introduce red accents unless the user explicitly asks.

## Restrictions

- Do not add new libraries without user approval.
- Do not replace Motion, Lenis, Tailwind, or the current i18n approach without a clear reason.
- Do not rewrite unrelated sections while making focused changes.
- Do not remove or overwrite user-provided assets.
- Avoid external image URLs; use files under `src/assets/images/`.

## Validation Before Finishing

- Run `npm run lint`.
- Run `npm run build`.
- For visual changes, verify desktop and mobile behavior in the browser.
- Check language switching if translated text, services, gallery, modals, or nav are touched.
- Confirm there is no horizontal scroll.
