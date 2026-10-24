# Ashutosh Portfolio

A multi-page personal portfolio built with React, Vite, React Router, and separate CSS files for pages and major homepage sections.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project structure

- `src/pages/` — each route has its own JSX and CSS.
- `src/sections/` — homepage sections, each with its own stylesheet.
- `src/components/` — shared navigation, footer, project cards, theme toggle, and scroll reveal.
- `src/data/` — editable project and experience content.
- `src/styles/` — global design tokens and base styles.
- `public/` — static files including a temporary resume placeholder.

## Customize first

1. Update the profile copy and project descriptions in `src/data/`.
2. Add your portrait at `public/images/ashutosh-portrait.jpg`; the homepage will automatically show it in the hero frame. If the image is missing, the designed monogram placeholder remains visible.
3. Add your actual resume PDF at `public/resume/Ashutosh_Kumar_Jha_Resume.pdf`. The homepage Download resume link points to this exact file path. Do not leave a `.txt` placeholder at that path.
4. Set your preferred contact email in `src/pages/Contact.jsx`.

## Contact form

The form validates fields and opens the visitor's email app using a `mailto:` link. This is a no-backend starter, not a hosted form-submission service. For reliable submissions, connect Formspree, Web3Forms, Resend through a serverless function, or another form provider before publishing.

## Deployment

### Vercel
Import the repository. Framework preset: Vite. Build command: `npm run build`; output directory: `dist`. `vercel.json` provides SPA route fallback.

### Cloudflare Pages
Build command: `npm run build`; output directory: `dist`. Configure SPA fallback as needed; this app uses client-side routing.

### GitHub Pages
Set the Vite `base` option if deploying under a repository subpath, and configure a 404 fallback or hash routing. The current setup is easiest to deploy on Vercel/Cloudflare Pages.

## Notes

- Dark mode preference is stored in `localStorage`.
- Project filtering, navigation, mobile menu, theme toggle, and reveal animations are implemented.
- Every project card opens its own detail route, such as `/projects/rasb`, rather than jumping to the project list.
- The content intentionally avoids fabricated work metrics, dates, testimonials, or credentials.


### Project identity assets
Each project card and case-study hero uses an SVG from `public/images/project-logos/`. These are original placeholder marks designed for this portfolio; replace them with official logo files if you have approved brand assets.
