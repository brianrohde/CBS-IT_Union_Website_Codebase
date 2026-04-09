# CBS IT Union Website — CLAUDE.md

## Purpose
This file defines how Claude should behave when working on this project.

It ensures:
- consistent code quality
- adherence to design system and layout rules
- maintainability for future student teams
- efficient token usage

Claude should act as a **project-native engineer**, not a generic assistant.

---

## 1. Core Workflow (MANDATORY)

### Step 1 — Read Memory
At the start of every session, read:

- /memory/design-system.md
- /memory/layouts.md
- /memory/project-structure.md
- /memory/decisions.md (if exists)

Do NOT proceed without understanding these.

---

### Step 2 — Plan Before Coding
- Clarify the task
- Identify affected files
- Avoid unnecessary file creation
- Reuse existing components whenever possible

---

### Step 3 — Implement
- Follow project structure strictly
- Use existing components first
- Keep code minimal and clean

---

### Step 4 — Update Memory (when relevant)
If a structural or design decision changes:
- update `/memory/decisions.md`

---

## 2. Tech Stack (DO NOT CHANGE)

- Next.js (App Router)
- React (TypeScript)
- Tailwind CSS
- shadcn/ui components

Do not introduce new frameworks or libraries unless explicitly requested.

---

## 3. Design System Rules (STRICT)

All UI must follow:
- `/memory/design-system.md`

### Colors
- Use only defined color palette
- No arbitrary colors

### Typography
- Follow defined scale and fonts
- No random font sizes

### Spacing
- Use spacing scale: 8, 16, 24, 32, 40, 48, 64
- Avoid arbitrary pixel values

---

## 4. Layout Rules (STRICT)

All layouts must follow:
- `/memory/layouts.md`

### Key Constraints
- Use approved layout patterns only
- Maintain consistent section order
- Use 12-column grid logic
- Ensure mobile responsiveness

Do NOT invent new layout patterns unless explicitly requested.

---

## 5. Component Rules

### General
- Keep components small and reusable
- Prefer composition over complex props
- Avoid duplication

### Structure
- `components/sections` → page sections
- `components/modules` → reusable domain components
- `components/ui` → generic UI components

---

### Reuse First
Before creating a new component:
1. Check if it exists
2. Check if it can be extended
3. Only create new if necessary

---

## 6. Page Rules

- Pages should be thin
- No heavy logic inside pages
- Pages should only:
  - assemble components
  - pass data

---

## 7. Content Handling

- Content should come from `/content/` when possible
- Do not hardcode text unless necessary
- Structure content clearly

---

## 8. Styling Rules (Tailwind)

- Use Tailwind utility classes only
- Do not use inline styles
- Do not introduce custom CSS unless necessary

### Preferred Patterns
- `max-w-*` + `mx-auto` for layout
- `flex` / `grid` for structure
- `gap-*` for spacing

---

## 9. Token Efficiency Rules (CRITICAL)

### Always
- be concise
- avoid repetition
- avoid long explanations unless asked

### Never
- restate obvious context
- explain basic concepts
- generate unnecessary code

---

### Output Style
- prioritize minimal, correct code
- avoid verbose descriptions
- only include explanations if needed

---

## 10. File Creation Rules

### Do NOT create files unless:
- absolutely necessary
- clearly requested
- no existing file can be reused

### Prefer:
- editing existing files
- extending existing components

---

## 11. Error Handling

- anticipate edge cases
- handle loading states
- handle empty states

---

## 12. Naming Conventions

### Components
- PascalCase (e.g. `EventCard.tsx`)

### Folders
- kebab-case

### Routes
- simple and predictable:
  - `/about`
  - `/events`
  - `/partners`
  - `/contact`

---

## 13. AI Behavior Constraints

### DO
- follow structure
- respect design system
- reuse components
- keep output minimal

### DO NOT
- invent features not requested
- introduce new design styles
- break consistency
- over-engineer solutions

---

## 14. Preferred Workflow Pattern

When implementing a feature:

1. Identify layout pattern from `layouts.md`
2. Identify design constraints from `design-system.md`
3. Identify existing components
4. Implement minimal solution
5. Ensure responsiveness
6. Keep code clean and readable

---

## 15. Project Goal

The website should feel like:

- a modern student tech community
- structured but energetic
- professional but approachable

NOT:
- corporate
- overly experimental
- cluttered

---

## 16. Key Principle

Structure > Prompting  

Follow the system defined in `/memory/`  
Do not improvise outside of it.

---

## 17. Commands (Reference)

```bash
npm run dev
npm run build
npm run start
npm run lint
```

---

## Final Reminder

You are not generating random UI.

You are implementing a **predefined system**.

Respect:
- structure
- consistency
- simplicity
