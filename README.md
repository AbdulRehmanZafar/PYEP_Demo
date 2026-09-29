# Punjab Youth Empowerment Program — Website

React + TypeScript + Vite + Tailwind CSS implementation of the PYEP website.

## Setup

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     One component per section (Header, Hero, About, Vision, Goal,
                   Objectives, Programs, Initiatives, Entrepreneurship,
                   EnvironmentalAction, SDGSection, Partnerships, Leadership,
                   CTA, Footer, LeadershipImage, Logo)
  data/           Content arrays (objectives, programs, sdgs, photos) — edit
                   these to change copy or imagery without touching component code
  assets/images/  maryam-nawaz.jpg and rana-sikandar-hayat.jpg — cropped
                   portraits used in the Hero and Leadership sections
```

## Logo

`src/components/Logo.tsx` is a custom SVG emblem — three ascending leaf/step
forms tracing a rising path, echoing the "opportunity → skill → participation"
language used throughout the copy — rather than a text initials badge. It
takes `size`, `withWordmark` and `dark` props and is used in both the Header
and Footer. Swap it for an official PYEP logo file whenever one exists by
replacing the contents of that one component.

## Photography

`src/data/photos.ts` centralizes every stock photo used on the site (hero,
about, programs, entrepreneurship, environmental action, and the youth CTA
banner). All of it is free-to-use editorial photography from Unsplash and
Pexels, hotlinked by direct CDN URL. Before launch, swap these for PYEP's own
photography of its actual participants and events — update the values in this
one file and every section using that photo updates automatically. Because
these are third-party hotlinks, also consider downloading and self-hosting
them (in `src/assets/images/`) for a production launch, so the site doesn't
depend on an external CDN staying up.

## Replacing the leadership photos

Swap the files in `src/assets/images/` with approved official photographs,
keeping the same filenames (or updating the imports in `Hero.tsx` and
`Leadership.tsx`). Images render at a 3:4 aspect ratio (portrait) or as small
circular thumbnails (Hero inset), all with `object-fit: cover`, so any
reasonably centered portrait will crop cleanly.

## Notes

- Color tokens (green/deep/fresh/soft/pale/ink/sub/border) are defined in
  `tailwind.config.js` — change them there to re-theme the whole site.
- No dark mode is implemented, per the design brief.
- Content in `data/` and section copy should be reviewed against the official
  PYEP presentation before this goes live — some values are placeholders
  (contact details, address, social links) that need real information.
