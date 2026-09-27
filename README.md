# Mythili Modern Portfolio

A redesigned React + Vite version of the existing Mythili portfolio.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## What changed

- Converted the original static Materialize HTML portfolio into reusable React components.
- Added a premium dark theme with restrained cyan/indigo accents.
- Added responsive desktop/tablet/mobile layouts.
- Added Framer Motion scroll/entrance/hover animations.
- Added accessible mobile navigation and active-section indication.
- Reused the existing portfolio images and project links.
- Added a mailto-based contact form so no backend service is required.
- Added reduced-motion support.
- Removed the old Materialize/jQuery dependency from the page.

## Main structure

- `src/App.jsx` — portfolio sections and interactions
- `src/data.js` — profile, experience, skills, projects and education data
- `src/styles.css` — responsive dark-theme styling
- `public/assets/` — existing portfolio assets

Note: dependency installation/build validation could not be completed in the execution environment because `npm install` timed out while fetching packages. The project files and asset references were checked locally in the workspace.
