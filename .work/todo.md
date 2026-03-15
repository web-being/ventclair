## Business Analysis

### Current state
- Static site: index.html (EN) + fr/index.html (FR) — Jekyll 4.3 with `_projects/` collection
- Tailwind v4, `@source` directives for class scanning
- 3 projects in `_projects/` (bilingual YAML front matter):
  1. **Hudson luxury home** — 21 photos, 6bed/6bath, 4466sqft, 2022
  2. **Lachute 16-unit complex** — 1 photo, 2 buildings, 2020
  3. **Sainte-Adèle 6-unit** — 1 photo, 3 floors
- Portfolio: structured project cards with image sliders, specs, descriptions
- Lead capture form added, process timeline added
- Identity: "luxury home builder" (consistent across EN/FR)

### Competitive positioning
- **Moat**: direct-import premium materials from China at wholesale
- **Niche**: "Accessible luxury" — premium finishes at sub-market pricing
- **Target**: upper-middle Montreal families ($800K-1.5M budget) who want marble/walnut/designer but can't afford boutique firms
- **Identity**: luxury home builder (fixed)

### Success metrics
| Timeframe | Goal | Metric |
|-----------|------|--------|
| 3 months | 3 inbound leads from website | form submissions |
| 6 months | 2-3 projects showcased properly | portfolio depth |
| 12 months | top 5 "custom home builder Montreal" | local search rank |
| 12 months | 10+ Google reviews, 4.5+ stars | social proof |

---

## Phases

### Phase 1: Portfolio page + project cards
- [x] Create `/projects` page (projects.html) with 3 project cards
- [x] Each card: hero image, title, location, type badge, key specs (beds/baths/sqft or units)
- [x] Project detail: image slider with arrows/dots/counter, description, specs table
- [x] Project 1 (Hudson): curated 21 photos for slider
- [x] Projects 2-3: single image each (what's available)
- [x] Data-driven from _projects/ YAML so owner can edit
- [x] Link from main site portfolio section → /projects
- [x] Featured cards on index.html (3 portrait cards with gradient overlay)
- [x] Removed old flat 78-image carousel
- [x] Bilingual support (EN/FR data in _projects/)
- [ ] Touch swipe on mobile — verify
- [ ] Visual polish pass
- [ ] Admin panel

### Phase 3: Main site improvements
- [x] Fix French version routing
- [x] Replace flat carousel on index.html with link to /projects + 3 featured cards
- [x] Add lead capture form (name, email, phone, project type, budget range)
- [x] Add "Get a Free Consultation" CTA
- [x] Fix identity: "luxury real estate agency" → "luxury home builder" (EN + FR)
- [x] Fix meta descriptions to match positioning (EN + FR)
- [x] Professional email domain note (recommend info@groupeventclair.com) — owner action, not code

### Phase 4: Trust & conversion
- [ ] Price signal
- [ ] Testimonials section (placeholder structure, owner fills in)
- [ ] Team/founder section with photo
- [x] Process timeline (consultation → design → build → deliver)
- [x] Move warranty section higher, make it more prominent
- [ ] Before/after or construction progress section

### Phase 5: Marketing foundations
- [ ] Google My Business setup guidance — owner action
- [ ] Houzz profile recommendation — owner action
- [ ] Instagram content strategy (weekly progress posts) — owner action
- [x] SEO: proper meta tags, structured data for local business (JSON-LD HomeAndConstructionBusiness)
- [x] SEO: hreflang alternate links, Open Graph meta tags
- [ ] Analytics goals setup in existing GA4 — owner action
- [x] Formspree form endpoint setup — owner action (currently placeholder URL)

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
