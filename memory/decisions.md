# Architectural Decisions — CBS IT Union Website

## Overview
This file tracks key architectural and design decisions made during the development of the CBS IT Union website.

---

## 1. Tech Stack Selection

**Decision**: Use Next.js 14+ (App Router), React 18+, TypeScript, Tailwind CSS

**Why**:
- App Router enables modern, optimized routing
- TypeScript ensures type safety and maintainability
- Tailwind CSS allows rapid, consistent styling
- Framework familiarity for student teams

**Status**: Final  
**Date**: 2026-04-09

---

## 2. Component Architecture

**Decision**: Three-tier component hierarchy
- `sections/` → page-level sections
- `modules/` → reusable domain components
- `ui/` → generic UI components

**Why**:
- Clear separation of concerns
- Easier for students to locate and modify components
- Reusability across pages
- Scalable structure

**Status**: Final  
**Date**: 2026-04-09

---

## 3. Content Management

**Decision**: Structured JSON files in `/content/` directory
- No hardcoded content in components
- JSON structure mirrors site information architecture
- Future-proof for CMS migration

**Why**:
- Non-technical team members can update content
- Clear separation of content from code
- Easier to maintain across handovers
- Scalable for growth

**Status**: Final  
**Date**: 2026-04-09

---

## 4. Memory System Location

**Decision**: AI memory files in `/memory/` directory
- `CLAUDE.md` → AI behavior rules
- `design-system.md` → visual identity
- `layouts.md` → page composition patterns
- `project-structure.md` → repo architecture
- `decisions.md` → this file

**Why**:
- Central location for all project context
- Clear for AI tools to understand constraints
- Easy for students to find documentation
- Supports efficient Claude Code workflows

**Status**: Final  
**Date**: 2026-04-09

---

## 5. Homepage Composition

**Decision**: Follow layout pattern from `/memory/layouts.md`
- Hero (split screen)
- What is CBS IT Union? (intro)
- Key pillars (3-column grid)
- Upcoming events preview
- Partners logo strip
- CTA banner
- Footer

**Why**:
- Balances quick value communication with engagement
- Establishes trust through credibility signals (events, partners)
- Follows proven UX patterns
- Board/team deliberately excluded (about page only)

**Status**: Final  
**Date**: 2026-04-09

---

## 6. Board/Team Placement

**Decision**: Board grid appears on `/about` page only, NOT on homepage

**Why**:
- Homepage should focus on *what the org does*, not *who runs it*
- About page is the appropriate credibility signal
- Reduces cognitive load on homepage
- Students searching may care more about activities/events than committee names

**Status**: Final  
**Date**: 2026-04-09

---

## 7. Events Architecture

**Decision**: Two-page structure for events
- `/events` → Upcoming events (list/card grid)
- `/events/past` → Past events archive (gallery grid)

**Why**:
- Separates forward-looking from retrospective content
- Past events build credibility and activity proof
- Clean separation reduces page complexity

**Status**: Final  
**Date**: 2026-04-09

---

## 8. Styling Approach

**Decision**: Tailwind CSS utility-first, no custom CSS initially

**Why**:
- Enforces consistency with design system
- Easier for students to maintain
- Faster development
- Built-in responsive design support

**Status**: Final  
**Date**: 2026-04-09

---

## 9. Form Handling (Contact Page)

**Decision**: Form UI scaffolded, backend submission not wired

**Why**:
- Allows page structure to be complete
- Backend can be added later without UI changes
- Reduces initial complexity
- Keeps scope focused on frontend

**Status**: Initial (can be upgraded)  
**Date**: 2026-04-09

---

## 10. Asset Organization

**Decision**: Assets organized by type in `/public/`
- `/public/images/{events,team,partners}`
- `/public/icons/`
- `/public/logo/`

**Why**:
- Clear organization for future asset additions
- Easy for students to locate and update images
- Scalable structure

**Status**: Final  
**Date**: 2026-04-09

---

## Future Considerations

### Planned Enhancements (Not implemented)
- CMS integration (Contentful, Sanity, etc.)
- Event registration system
- Blog section
- Newsletter signup backend
- Search functionality
- Analytics integration

### Potential Upgrades
- Form submission backend
- Dynamic event calendar widget
- Image optimization & CDN
- Multilingual support
- Dark mode toggle

---

## Change Log

### Initial Setup (2026-04-09)
- Project scaffolding
- Memory system established
- Component architecture defined
- Content structure defined
- Homepage composition approved
- All key decisions documented
