# Site Plan — Personal Interior Design Gift Website

## Overview

A gift website for a special person. Mobile-first. No e-commerce.
Built with Next.js (App Router) + Tailwind + Vercel.
Goal: A beautiful, emotional, portfolio-style site that feels like a love letter
wrapped in world-class interior design aesthetic.

---

## 1. Design Language

- **Palette:** Warm neutrals (off-white, sand, warm taupe) + one accent
  (dusty rose, sage green, or deep terracotta — pick one that suits the person)
- **Typography:** Serif heading font (Playfair Display or Cormorant Garamond)
  + clean sans body (Inter or DM Sans)
- **Motion:** Subtle scroll-based fade-ins, parallax on hero images,
  cursor-following highlight on desktop
- **Images:** Full-bleed, high-contrast, editorial — think Architectural Digest
- **Mobile nav:** Slide-in drawer with frosted glass effect

---

## 2. Pages & Routes

| Route              | Purpose                              |
|--------------------|--------------------------------------|
| `/`                | Hero homepage (see section 3)        |
| `/about`           | Story of the person                  |
| `/projects`        | Grid of all projects                 |
| `/projects/[slug]` | Individual project deep-dive         |
| `/philosophy`      | Their design values / creative vision |
| `/journal`         | Optional: thoughts, inspiration, MDX blog |
| `/contact`         | Simple form or social links          |

---

## 3. Homepage Layout (Section by Section)

This is the heart of the site. Build it as a single long scroll with
distinct sections. Each section below maps to a component.

### 3.1 Hero — Full-screen cinematic opener

- Layout: Full viewport height, single stunning project photo as background
- Overlay: dark gradient from bottom 40%
- Content: Large serif name/tagline centered or bottom-left
- Animation: Slow Ken Burns zoom on background image on load
- CTA: One ghost button — "Explore the work" — scrolls to projects
- Mobile: Same, image crops to portrait, text stays bottom-left

### 3.2 Signature Statement — The personal intro

- Layout: 2-column on desktop (left: large pull quote, right: portrait photo)
- Mobile: Stacked — photo first, then quote
- Content: 1–2 sentences that define who this person is
  Example: *"Spaces aren't decorated — they're composed."*
- Animation: Quote fades in word by word on scroll entry
- Optional: Subtle background texture (linen or grain overlay at 4% opacity)

### 3.3 Featured Projects — Bento-style grid

- Layout: Asymmetric bento grid on desktop
  - 1 large card (spans 2 cols), 2 medium cards, 2 small cards
  - Each card = full-bleed image + project name on hover
- Mobile: Single column stack, full-width cards
- Animation: Cards lift (translateY -4px + shadow) on hover
- Data source: `/content/projects/*.mdx`
- Link: Each card → `/projects/[slug]`

### 3.4 About Teaser — A glimpse of the person

- Layout: Full-width section, off-white or warm background
- Content:
  - Small label: "About"
  - Heading: Their name, large serif
  - 3–4 lines describing them (personal, warm, specific)
  - One signature detail — a hobby, a phrase they say, something only insiders know
- Visual: Either a candid photo (not a portfolio shot) or a decorative
  typographic element
- CTA: "Read the story" → `/about`

### 3.5 Philosophy Strip — Values as visual cards

- Layout: Horizontal scroll on mobile, 3-column grid on desktop
- Content: 3 cards, each with:
  - Icon (simple SVG line icon)
  - One-word value: "Warmth", "Intention", "Light"
  - 1-sentence description
- Background: Accent color (muted) — the one you picked in design language

### 3.6 Selected Project Spotlight — Immersive single project

- Layout: Full-width alternating sections (image left / text right, then flip)
- Content: 1 hero project shown in depth — before/after, materials used,
  the story behind it
- Animation: Parallax scroll on images
- Mobile: Stacked, image always above text

### 3.7 Numbers / Recognition (optional but impressive)

- Layout: 4-column stat row on desktop, 2x2 grid on mobile
- Content examples:
  - "12 homes transformed"
  - "3 cities"
  - "7 years creating"
  - "1 guiding principle: people first"
- Animation: Count-up on scroll entry

### 3.8 Journal / Inspiration Preview (optional)

- Layout: 3-card horizontal row
- Each card: Cover image + post title + 1-line excerpt
- Data: MDX files in `/content/journal/`
- Only include if there are 3+ posts ready; otherwise skip and add later

### 3.9 Contact / Footer CTA

- Layout: Full-width dark (or deep accent) section
- Content:
  - Warm heading: "Let's create something together" (or personalised line)
  - Email address or simple form (Formspree)
  - Social links: Instagram, Pinterest, LinkedIn (icons only)
- Footer below: Name, copyright year, "Built with love" — nothing else

---

## 4. `/about` Page Layout

- **Hero:** Split — left half solid accent color, right half portrait photo
- **Origin story:** 2–3 paragraphs. Where they grew up. What drew them to design.
  A specific childhood memory if possible.
- **Design process:** 3-step visual (Discover → Design → Deliver) with
  short text under each
- **Personal side:** A small grid of 4–6 photos that aren't project photos —
  travels, books, textures, things that inspire them
- **Quote block:** Full-width pullquote, large serif, center-aligned
- **CTA:** Links to projects + contact

---

## 5. `/projects` Page Layout

- **Header:** Simple — page title "Projects" + optional filter pills
  (Residential / Commercial / Before & After)
- **Grid:** Masonry-style on desktop, single column on mobile
- Each card has: Cover image, project name, location, year
- Hover state: Overlay with short tagline
- Data: Pulled from MDX frontmatter

---

## 6. `/projects/[slug]` Layout

Each project page uses a shared layout template. Frontmatter drives content.

**Frontmatter fields:**
```yaml
title: "The Whitfield Apartment"
location: "Bengaluru, IN"
year: 2024
category: Residential
tagline: "A home that breathes"
coverImage: /images/projects/whitfield/cover.jpg
gallery:
  - /images/projects/whitfield/01.jpg
  - /images/projects/whitfield/02.jpg
palette:
  - "#F5EFE7"
  - "#C9A98A"
  - "#4A3728"
```

**Page sections:**
1. Full-bleed hero image + title overlay
2. Project details bar: location, year, category, area (sqft/sqm)
3. The brief — 1 paragraph: what the client wanted
4. The response — 2–3 paragraphs: how the designer approached it
5. Image gallery (masonry or editorial layout)
6. Colour palette — visual swatches pulled from frontmatter
7. Materials used — simple text list or icon grid
8. Next project → (links to next slug alphabetically or by date)

---

## 7. `/philosophy` Page Layout

- **Opener:** Large serif headline spanning full width
- **3–4 belief sections:** Each = heading + 2 paragraphs + one full-bleed image
  between sections
- **Closing:** A personal note — handwritten-style font if desired

---

## 8. Content File Structure
/content
/projects
whitfield-apartment.mdx
koramangala-villa.mdx
...
/journal (optional)
on-negative-space.mdx
...
/public
/images
/projects
/whitfield
cover.jpg
01.jpg ...
/about
portrait.jpg
inspiration-01.jpg ...
/og
og-default.jpg   ← Open Graph fallback image
/src
/app
/about          page.tsx
/projects       page.tsx
/projects/[slug] page.tsx
/philosophy     page.tsx
/journal        page.tsx (optional)
/contact        page.tsx
layout.tsx      ← global nav + footer
page.tsx        ← homepage
/components
/ui             ← Button, Badge, Tag
/layout         ← Navbar, Footer, MobileDrawer
/sections       ← One file per homepage section
Hero.tsx
SignatureStatement.tsx
FeaturedProjects.tsx
AboutTeaser.tsx
PhilosophyStrip.tsx
ProjectSpotlight.tsx
Stats.tsx
JournalPreview.tsx
FooterCTA.tsx
/project        ← ProjectCard, ProjectGrid, ProjectHero, Gallery
/about          ← OriginStory, ProcessSteps, InspirationGrid
/lib
projects.ts     ← MDX loader + type definitions
journal.ts      ← MDX loader for journal posts (optional)
/styles
globals.css     ← Tailwind base + custom CSS vars
/tailwind.config.ts ← Palette, fonts, custom animations

---

## 9. Suggested Extra Touches (High-impact, Low-effort)

| Feature | Why it's great | How |
|---|---|---|
| Custom cursor | Feels bespoke on desktop | CSS + JS, small dot + ring |
| Page transition | Smooth fade between routes | Framer Motion `AnimatePresence` |
| OG image per project | Looks stunning when shared | Next.js `generateMetadata` |
| Color palette extractor | Shows project palette as swatches | Hardcode in MDX frontmatter |
| "Back to top" button | Long scroll pages need this | Floating, appears after 400px |
| Dark mode | Optional but elegant | Tailwind `dark:` + next-themes |
| Sound toggle | Ambient background music | `<audio>` + user-controlled toggle |
| Preloader | Cinematic first impression | Simple logo animation, 1.5s max |
| Reading progress bar | On project detail pages | Thin accent line at top |
| Print stylesheet | For PDF downloads of project pages | `@media print` CSS |

---

## 10. Performance Checklist

- [ ] All images use `next/image` with correct `sizes` prop
- [ ] Fonts loaded via `next/font` (no FOUT)
- [ ] Hero image has `priority` prop (no LCP penalty)
- [ ] Gallery images lazy loaded below the fold
- [ ] No `"use client"` on page-level components — only on interactive leaves
- [ ] `generateStaticParams` on `/projects/[slug]` for full SSG
- [ ] Vercel Analytics added from day one
- [ ] `robots.txt` and `sitemap.xml` generated via Next.js metadata

---

## 11. Build Order

1. `tailwind.config.ts` — lock palette, fonts, custom animation tokens
2. `globals.css` — CSS custom properties for colors
3. `layout.tsx` — Navbar + Footer shell (mobile drawer included)
4. `page.tsx` (homepage) — build section by section, top to bottom
5. MDX loader in `/lib/projects.ts`
6. `/projects` grid page
7. `/projects/[slug]` detail page
8. `/about` page
9. `/philosophy` page
10. Polish: animations, OG images, metadata, sitemap
11. Deploy to Vercel + connect domain

---

*This document is the single source of truth for the build.
Update it as decisions change.*

A few notes on the plan:
The bento grid homepage (section 3.3) is the visual showstopper — worth spending extra time on. The asymmetric layout with one large hero card and smaller supporting cards is the pattern used by most top-tier design studios right now.
The signature statement section (3.2) is what makes this feel like a gift rather than a template site — the pull quote and personal framing is where you drop in something genuinely specific about this person.
The extra touches table (section 9) has the highest return-on-impression ideas. The custom cursor, preloader, and page transitions alone will make the site feel like a studio production rather than a personal project.
Want me to go deeper on any specific section, generate the actual component code for one of the sections, or create the tailwind.config.ts design token setup?