# CLAUDE.md

Guidance for working in this repository.

## Overview

Personal site for Kenan Berker — a calm, light, single-scrolling page built with Astro.
Design: **Direction 2 "Calm"** — Manrope typeface, a single cool-blue accent, mobile-first
with one desktop breakpoint at `720px`.

## Project structure

```text
src/
├── styles/
│   └── global.css           # design tokens, reset, base elements, layout primitives
├── layouts/
│   └── BaseLayout.astro      # <head>, fonts, Header + Footer; used by every page
├── components/
│   ├── Header.astro          # brand + anchor nav (shared chrome)
│   ├── Footer.astro          # shared chrome
│   ├── Section.astro         # reusable labeled-section wrapper (label + content grid)
│   ├── Hero.astro            # homepage sections, composed in pages/index.astro
│   ├── About.astro
│   ├── Resume.astro
│   ├── BlogPreview.astro
│   └── Contact.astro
├── pages/
│   ├── index.astro           # single scrolling homepage (composes the sections above)
│   └── blog/                 # blog scaffolding (placeholder "Coming soon" on the homepage)
│       ├── index.astro
│       └── [...slug].astro
└── utils/
    └── blog.js               # blog post data + markdown rendering
```

## CSS conventions

- **`global.css` holds only globals**: the `:root` design tokens (colors, spacing scale,
  fonts), the reset, base element styles, and a small set of layout primitives (`.wrap`,
  `.rule`). Nothing component-specific goes here.
- **Components style their own markup** in a scoped Astro `<style>` block. Styles live next
  to the markup they affect and can't leak.
- **Always use tokens**, never raw values — `var(--accent)`, `var(--s5)`, etc.
- **Mobile-first**: write base styles for ~390px, then add overrides inside a single
  `@media (min-width: 720px)` block.
- **Shared section typography** (h2, body paragraphs, links) lives once in `Section.astro`
  and is applied to slotted content via scoped `:global()`.

## To do

- Drop the real CV at `public/resume.pdf` and update the link in `Resume.astro`.
- Confirm the contact email in `Contact.astro`.
- Write blog posts (replace the placeholder data in `utils/blog.js`); the homepage Blog
  section can then link to `/blog` instead of showing "Coming soon".
