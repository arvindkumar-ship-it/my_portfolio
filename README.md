# Arvind portfolio — Next.js/TSX rebuild

Full rebuild of the original static HTML/CSS/JS site as a functioning
Next.js (App Router) + TypeScript app.

## What changed from the original

- **Projects section** — old 3D flip carousel replaced with the straight-line
  stacked-card carousel (`components/ProjectsCarousel.tsx`), same transition
  used earlier in this chat. Real project data (AgentSec, Raahgir AI,
  CareFlow, Anvesh) pulled from the uploaded `index.html`.
- **Contact section** — old plain form replaced with the integrated
  `ContactDrawer.tsx`: slide-in panel triggered from the navbar `Contact`
  link or the floating bottom-right `[ Contact ]` tag, real controlled form
  state, social links grid.
- **Neural graph** — reimplemented in plain SVG + React state
  (`NeuralGraph.tsx`) instead of the old `graph.js`. Click a project node to
  isolate its stack.
- **Border/hover system** — every clickable element uses the shared
  `.brutal` class in `app/globals.css`:
  - Resting: already-thick 3px border + hard offset shadow.
  - Hover: border thickens to 4px, element shifts into its own shadow.
  - Active (on click): border thickens to 6px, shadow fully flushes.
  Form fields use `.brutal-field` (thick border, thickens further on focus,
  no shift — inputs shouldn't jump around while typing).

## Setup

```bash
npm install
npm run dev
```

Requires Next.js 15 / React 19 (App Router). If you're dropping this into
an existing Next.js project instead, just copy `app/`, `components/`, and
`lib/` in and merge `globals.css`.

## Still placeholder / needs wiring

- `ContactDrawer.tsx` submit currently opens a `mailto:` link. Swap in
  Formspree, EmailJS, or a serverless function for real delivery — the TODO
  comment marks the spot.
- Achievement values, footer email/LinkedIn/GitHub/resume links, and hero
  chip placeholders — same `[placeholder: ...]` markers as the original
  site, now in `lib/data.ts`.
- Demo links are only wired for CareFlow (per the original data); others
  show a disabled "Demo [placeholder]" state until deployed.
- Dark mode toggle (`Navbar`) flips CSS vars in `globals.css` — no
  localStorage persistence yet if you want it to remember the choice.
