# Project Structure — CBS IT Union Website

## Purpose
This file defines the folder structure and architectural conventions for the CBS IT Union website.

It ensures:
- maintainability across student handovers
- consistency in development
- clarity for AI-assisted coding (Claude)

This structure is optimized for:
- Next.js (App Router)
- modular components
- structured content
- AI-assisted workflows

---

## Core Principles

### 1. Separation of Concerns
- UI → `components/`
- Pages → `app/`
- Content → `content/`
- Design rules → `/memory/`
- Utilities → `lib/`

---

### 2. Reusability
- components must be reusable across pages
- avoid page-specific hardcoding
- prefer composition over duplication

---

### 3. Maintainability
- future committee members must understand structure quickly
- avoid unnecessary complexity
- keep naming intuitive

---

### 4. AI Compatibility
- structure should be easy for Claude to navigate
- memory files must be clearly separated
- predictable folder naming is critical

---

## Root Structure

```
my-website/
│
├── app/                        # Next.js App Router (pages & routes)
├── components/                # UI building blocks
├── content/                   # Page content (JSON or structured data)
├── lib/                       # Utilities and integrations
├── public/                    # Static assets
├── memory/                    # AI memory system (CRITICAL)
│
├── tailwind.config.js
├── package.json
├── README.md
```

---

## 1. App Directory (Routing Layer)

```
app/
│
├── layout.tsx                 # Root layout (global wrapper)
├── globals.css                # Global styles
│
├── page.tsx                  # Homepage (/)
│
├── about/
│   └── page.tsx              # About + Board
│
├── events/
│   ├── page.tsx              # Upcoming events
│   └── past/
│       └── page.tsx          # Past events archive
│
├── partners/
│   └── page.tsx              # Partner page
│
├── contact/
│   └── page.tsx              # Contact page
│
└── api/                      # Optional backend routes
```

### Notes
- routing is file-based (Next.js standard)
- each folder = route
- keep pages thin → logic should live in components

---

## 2. Components Directory (UI Layer)

```
components/
│
├── layout/                   # Global layout elements
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── PageWrapper.tsx
│
├── sections/                 # Full page sections
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── EventsPreview.tsx
│   ├── PartnersStrip.tsx
│   ├── CTA.tsx
│   ├── Testimonials.tsx
│   └── ...
│
├── modules/                  # IT Union specific modules
│   ├── EventCard.tsx
│   ├── EventList.tsx
│   ├── EventCalendar.tsx
│   ├── PartnerGrid.tsx
│   ├── TeamGrid.tsx
│   └── Gallery.tsx
│
├── ui/                       # Generic UI components (shadcn/ui)
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   └── ...
│
└── common/                   # Shared helpers
    ├── Container.tsx
    ├── Section.tsx
    └── Heading.tsx
```

### Notes
- sections = big building blocks
- modules = reusable domain-specific elements
- ui = generic components
- keep components small and focused

---

## 3. Content Directory (Data Layer)

```
content/
│
├── pages/
│   ├── home.json
│   ├── about.json
│   ├── events.json
│   ├── partners.json
│   └── contact.json
│
├── events/
│   ├── upcoming.json
│   └── past.json
│
├── partners/
│   └── partners.json
│
└── settings/
    ├── navigation.json
    └── footer.json
```

### Notes
- separates content from code
- allows non-developers to edit content later
- future-proof for CMS integration

---

## 4. Memory Directory (AI SYSTEM — CRITICAL)

```
memory/
│
├── design-system.md
├── layouts.md
├── project-structure.md
├── decisions.md
```

### Purpose
This is the **brain of the project for Claude**

Claude should:
- read these files at the start of each session
- update them when changes occur

### File Roles

- `design-system.md` → colors, fonts, visual rules
- `layouts.md` → page composition + layout patterns
- `project-structure.md` → repo architecture (this file)
- `decisions.md` → architectural decisions over time

---

## 5. Lib Directory (Logic Layer)

```
lib/
│
├── utils.ts                  # helper functions
├── supabase.ts              # backend integration (if used)
├── i18n.ts                  # translations (if used)
```

### Notes
- keep logic out of components where possible
- centralize integrations

---

## 6. Public Directory (Assets)

```
public/
│
├── images/
│   ├── events/
│   ├── team/
│   └── partners/
│
├── icons/
├── logo/
└── favicon.ico
```

### Notes
- organize assets by type
- avoid dumping files into root

---

## 7. Styling

- Tailwind CSS should be used
- follow design-system.md strictly
- avoid inline styles
- avoid custom CSS unless necessary

---

## 8. Naming Conventions

### Files
- PascalCase for components
- kebab-case for folders

### Components
- `Hero.tsx`
- `EventCard.tsx`
- `PartnerGrid.tsx`

### Routes
- `/about`
- `/events`
- `/partners`
- `/contact`

---

## 9. Development Rules

### Do
- reuse components
- follow layout patterns
- respect design system
- keep pages clean and simple

### Don’t
- hardcode layout styles in pages
- mix content with UI logic
- create unnecessary files
- break consistency

---

## 10. Key Insight

This structure is designed so that:

- developers can navigate easily
- non-technical team members can update content
- AI tools (Claude) can operate efficiently

---

## Final Principle

Structure first → components second → styling third  

NOT:

code first → chaos later