# CBS IT Union Website

A modern, maintainable website for CBS IT Union — connecting students across Data Science, Digital Business, and Information Systems at Copenhagen Business School.

## Tech Stack

- **Next.js 14+** (App Router)
- **React 18+** with TypeScript
- **Tailwind CSS** for styling
- **JSON-based content** for easy updates

## Project Structure

```
cbs-it-union-website/
├── app/                          # Next.js App Router pages
│   ├── (pages)
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   └── api/                     # Future API routes
│
├── components/                   # Reusable React components
│   ├── layout/                  # Header, Footer, etc.
│   ├── sections/                # Full page sections (Hero, CTA, etc.)
│   ├── modules/                 # Domain-specific components (EventCard, etc.)
│   ├── common/                  # Shared utilities (Container, Section, etc.)
│   └── ui/                      # Generic UI components
│
├── content/                      # Structured content (JSON)
│   ├── pages/                   # Page content
│   ├── events/                  # Event data
│   ├── partners/                # Partner data
│   └── settings/                # Navigation, footer, etc.
│
├── memory/                       # AI system documentation (CRITICAL)
│   ├── CLAUDE.md                # How Claude should work on this project
│   ├── design-system.md         # Brand colors, typography, spacing
│   ├── layouts.md               # Approved layout patterns
│   ├── project-structure.md     # Repo architecture
│   └── decisions.md             # Architectural decisions
│
├── public/                       # Static assets
│   ├── images/
│   ├── icons/
│   └── logo/
│
├── lib/                          # Utilities and helpers
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Project Memory & Planning System

This project uses two complementary systems:

### 1. Memory System (`/memory/`)
**Permanent rules and guidelines:**
- `/memory/CLAUDE.md` — AI behavior rules and coding standards
- `/memory/design-system.md` — Brand colors, fonts, spacing rules
- `/memory/layouts.md` — Approved page composition patterns
- `/memory/project-structure.md` — Repository architecture
- `/memory/decisions.md` — Key architectural decisions

**Always read these first when working on the project.**

### 2. Planning & Audit System (`.claude/plans/`)
**Implementation history and decisions:**
- `.claude/plans/` — All task plans and results
- Each file: `YYYY-MM-DD-{task-name}.md`
- Documents initial plan + actual results
- Provides audit trail for all work done

**Reference these to understand past decisions and context.**

Together, these systems provide **complete project documentation** for consistency, auditability, and knowledge transfer.

## Pages

- **Homepage** (`/`) — Overview, pillar features, event preview, partners
- **About** (`/about`) — Mission, what we do, board/team grid
- **Events** (`/events`) — Upcoming events
- **Past Events** (`/events/past`) — Event archive & gallery
- **Partners** (`/partners`) — Partner logos and info
- **Contact** (`/contact`) — Contact form and info

## Content Management

All page content is stored in `/content/` as JSON files. This allows non-technical team members to update content without touching code.

### Updating Content

1. Edit JSON files in `/content/pages/`, `/content/events/`, etc.
2. No code changes needed
3. Changes appear immediately on the site

### Adding New Content

- **New events** → `/content/events/upcoming.json`
- **Page updates** → `/content/pages/{page-name}.json`
- **Partner updates** → `/content/partners/partners.json`

## Component Guidelines

### Keep Components Small

- One responsibility per component
- Prefer composition over complex props

### Reuse First

Before creating a new component:
1. Check if it exists in `/components/`
2. Can it be extended?
3. Only create if necessary

### Use Design System

- Colors, fonts, spacing from `/memory/design-system.md`
- Tailwind utilities only — no inline styles
- Follow layout patterns from `/memory/layouts.md`

## Pages Structure

### Pages are Thin

Pages should:
- Import components
- Load content
- Assemble sections
- NOT contain complex logic

### Example Page

```tsx
import Hero from '@/components/sections/Hero'
import Container from '@/components/common/Container'
import pageContent from '@/content/pages/page-name.json'

export default function Page() {
  return (
    <>
      <Hero {...pageContent.hero} />
      <Container>
        {/* Add sections */}
      </Container>
    </>
  )
}
```

## Styling Rules

- **Use Tailwind utilities** — no inline styles
- **No custom CSS** unless absolutely necessary
- **Follow design system** — colors, spacing, fonts
- **Responsive first** — mobile-first design approach
- **Use spacing scale** — 8, 16, 24, 32, 40, 48, 64

## Development Roadmap

This project follows a structured 3-phase development approach:

### Phase 1 — Stabilize & Wire (Short-term, ~1–2 weeks)
Close all prototype gaps: Git setup, mobile navigation, contact form wiring, image assets, code quality.

### Phase 2 — Structure & Deploy (Mid-term, ~2–4 weeks)
Launch to production: Vercel deployment, CI/CD pipeline, content validation, UX polish, event detail pages.

### Phase 3 — Growth & Maintenance (Optional, Long-term)
Enhance and scale: Backend APIs, CMS integration, analytics, contributor onboarding.

**Full roadmap:** See [`.claude/plans/cbs-it-website-development-roadmap.md`](./.claude/plans/cbs-it-website-development-roadmap.md)

## Future Enhancements

- Form backend submission (contact page)
- Newsletter signup
- Blog section
- Advanced event calendar
- CMS integration (Contentful, Sanity, etc.)
- Analytics integration
- Multilingual support

## Maintenance

This project is designed for **student handovers**. Key principles:

1. **Structure is predictable** — new maintainers can navigate easily
2. **Memory files guide development** — rules are in `/memory/`
3. **Content is separated** — non-developers can update content
4. **Components are reusable** — reduce duplication across pages

## Questions?

Refer to:
- `/memory/CLAUDE.md` for development standards
- `/memory/layouts.md` for page composition
- `/memory/design-system.md` for visual rules
- `/memory/decisions.md` for architectural context

## License

© CBS IT Union. All rights reserved.
