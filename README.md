# Ghifari Alwy — Developer Portfolio

A minimalist, dark/light-mode personal portfolio built with React (Vite) and Tailwind CSS v4.

## Stack

- **React 19 + Vite** — build tooling and dev server
- **Tailwind CSS v4** (`@tailwindcss/vite` plugin, `darkMode: 'class'` via `@custom-variant`)
- **lucide-react** — icon set
- Content lives in `src/data/*.js` as plain JS objects — edit those files to update copy, experience, projects, skills, etc. No component code needs to change for content updates.

## Project structure

```
src/
  components/   # Navbar, Hero, About, Experience, Projects, Skills,
                # Education, Contact, Footer, + small helpers
                # (SectionHeading, Reveal, SystemGraph, BrandIcons)
  data/         # personal.js, experience.js, projects.js, skills.js,
                # education.js — structured content, edit freely
  hooks/        # useTheme (dark/light persistence), useReveal (scroll fade-in)
  index.css     # design tokens (@theme) + base styles
public/
  Ghifari_Alwy_CV.pdf   # replace with an updated CV; the Hero "Download CV"
                          # button links to this file by name
  favicon.svg
```

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Outputs a static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploying to Vercel

1. Push this repo to GitHub (or any git provider).
2. In Vercel: **New Project → Import** the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output directory `dist` (auto-detected).
4. Deploy — no environment variables are required.

A `vercel.json` is included with an SPA rewrite so client-side/anchor routing behaves correctly.

Alternatively, via the CLI:

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

## Updating content

- **Text/experience/projects/skills/education**: edit the corresponding file in `src/data/`.
- **CV file**: replace `public/Ghifari_Alwy_CV.pdf` with a new PDF of the same filename (or update `cvFile` in `src/data/personal.js`).
- **Colors/fonts**: adjust the `@theme` block in `src/index.css`.
- **Dark/light default**: the toggle defaults to the visitor's OS preference on first visit, then persists their explicit choice in `localStorage`.

## Notes

- Icons are from `lucide-react`; LinkedIn/GitHub marks are small inline SVGs in `src/components/BrandIcons.jsx` since brand icons were removed from lucide's core set.
- The contact form submits via a `mailto:` link (no backend/server required) — swap the `action` in `src/components/Contact.jsx` for a form-handling service (e.g. Formspree) if you want submissions without opening the visitor's mail client.
# my-portofolio
