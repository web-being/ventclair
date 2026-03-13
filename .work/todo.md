## Business Analysis

### Current state
- Static site: index.html (EN) + fr.html (FR link exists but `/fr` route broken, fr.html at root)
- Tailwind v4, no build framework, no SSG, no CMS
- 3 projects in portfolio.md (bilingual data ready):
  1. **Hudson luxury home** — 78 photos (img/portfolio/1/), 6bed/6bath, 4466sqft, 2022
  2. **Lachute 16-unit complex** — 1 photo (img/portfolio/2/), 2 buildings, 2020
  3. **Sainte-Adele 6-unit** — 1 photo (img/portfolio/3/), 3 floors
- Portfolio currently: flat carousel of 78 images (all from project 1), no labels, no project separation
- No lead capture, no CMS, gmail contact, no social proof

### Competitive positioning
- **Moat**: direct-import premium materials from China at wholesale
- **Niche**: "Accessible luxury" — premium finishes at sub-market pricing
- **Target**: upper-middle Montreal families ($800K-1.5M budget) who want marble/walnut/designer but can't afford boutique firms
- **Identity to fix**: site says "luxury real estate agency" / "construction" / "architectural masterpiece" — pick one: **luxury home builder**

### Website problems
1. One project shown as many (78 photos, no context) — erodes trust
2. No project structure — just a scrolling image strip
3. No social proof (testimonials, team, process)
4. No pricing signals — "accessible luxury" unanchored
5. No lead capture form
6. French route broken
7. Gmail contact for a luxury brand
8. Warranty section (strong content) buried at bottom

### Success metrics
| Timeframe | Goal | Metric |
|-----------|------|--------|
| 3 months | 3 inbound leads from website | form submissions |
| 6 months | 2-3 projects showcased properly | portfolio depth |
| 12 months | top 5 "custom home builder Montreal" | local search rank |
| 12 months | 10+ Google reviews, 4.5+ stars | social proof |

---

## Phases

### Phase 1: Portfolio page + project cards (current)
- [x] Create `/projects` page (projects.html) with 3 project cards
- [x] Each card: hero image, title, location, type badge, key specs (beds/baths/sqft or units)
- [x] Project detail: image slider with arrows/dots/counter, description, specs table
- [x] Project 1 (Hudson): curated 14 best photos for slider
- [x] Projects 2-3: single image each (what's available)
- [x] Data-driven from projects.json so owner can edit
- [x] Link from main site portfolio section → /projects
- [x] Featured cards on index.html (3 portrait cards with gradient overlay)
- [x] Removed old flat 78-image carousel
- [x] Bilingual support (EN/FR data in projects.json)
- [ ] Touch swipe on mobile — verify
- [ ] Visual polish pass

**Design direction**: Premium cards (like Sobha reference) — large hero image with slider inside card, gold/dark accents matching existing site palette. Not a flat grid. Each card is a statement.

### Phase 2: Simple CMS backend
- [ ] Admin page for editing project data (title, description, specs, images)
- [ ] Admin page for site-wide settings (phone, email, tagline, social links)
- [ ] Flat-file storage (JSON or markdown) — no database needed
- [ ] Image upload handling
- [ ] Auth (simple password gate)

### Phase 3: Main site improvements
- [ ] Fix French version routing
- [ ] Replace flat carousel on index.html with link to /projects + 3 featured cards
- [ ] Add lead capture form (name, email, phone, project type, budget range)
- [ ] Add "Get a Free Consultation" CTA
- [ ] Professional email domain note (recommend info@groupeventclair.com)

### Phase 4: Trust & conversion
- [ ] Testimonials section (placeholder structure, owner fills in)
- [ ] Team/founder section with photo
- [ ] Process timeline (design → build → deliver)
- [ ] Move warranty section higher, make it more prominent
- [ ] Before/after or construction progress section

### Phase 5: Marketing foundations
- [ ] Google My Business setup guidance
- [ ] Houzz profile recommendation
- [ ] Instagram content strategy (weekly progress posts)
- [ ] SEO: proper meta tags, structured data for local business
- [ ] Analytics goals setup in existing GA4

---

## Archive

* [x] montrealize
* [x] french version
* [x] redirect groupe
* [x] mobile version
* [x] portfolio
* [x] main sections
* [x] remove titles from 3 images
* [x] fix hero screwups
* [x] logo
* [x] typographics
