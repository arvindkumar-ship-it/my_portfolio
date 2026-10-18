# Arvind Kumar — Portfolio

Next.js (App Router) + TypeScript. Sections: Hero, Projects (filterable by category), Achievements, Skills, Contact.

## Run

```bash
npm install
npm run dev
```

## Add or edit content

All content lives in `lib/data.ts`. To add a project, copy one entry in `projects` and fill:
`category`, `summary`, `built` (implementation points), `impact`, `metrics`, `industryUse`, `stack`, links.
A new `category` string automatically becomes a filter chip.

## Known gap

`ContactDrawer` submit opens a `mailto:` link. Replace with Formspree/EmailJS for real delivery.
