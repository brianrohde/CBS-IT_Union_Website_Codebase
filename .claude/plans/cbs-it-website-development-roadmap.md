# CBS-IT Union Website — Next Development Phases

## Context

The CBS-IT Union website exists as a well-structured local prototype (Next.js 14, App Router, TypeScript, Tailwind CSS) with 5 pages, a solid component library, and a content-as-JSON architecture. It was scaffolded on 2026-04-09. Key gaps exist: no Git repo, no deployment, no mobile nav, a non-functional contact form, no real images, and a few wiring inconsistencies. The goal is to move from prototype → structured, deployable project with clean team workflow.

Reference project: `everything-claude-code` is a Claude Code plugin system (not a web app), but offers excellent patterns for: strict CI validation, conventional commits, schema-driven content, separation-of-concerns documentation, and profile-based feature flags.

---

## Phase 1 — Stabilize & Wire (Short-term, ~1–2 weeks)

**Goal:** Close all known gaps; make the project "real" with a repo, clean code, and a working site.

### 1.1 Version Control Setup
- [ ] `git init` in project root, create `.gitignore` (node_modules, .next, .env*)
- [ ] First commit with full project baseline
- [ ] Push to GitHub (private repo)
- [ ] Add conventional commits config (`commitlint` + `husky`) — pattern from `everything-claude-code/commitlint.config.js`
  - Allowed types: `feat|fix|content|style|refactor|docs|chore`

### 1.2 Wiring Gaps (Quick wins)
- [ ] Wire `content/settings/navigation.json` into `Header.tsx` (replace hardcoded array)
- [ ] Wire `content/settings/footer.json` into `Footer.tsx`
- [ ] Extract team data to `content/team/members.json`, remove hardcode from `app/about/page.tsx`
- [ ] Use `formatDate()` from `lib/utils.ts` in `EventCard.tsx` (it exists but is unused)
- [ ] Replace `<a>` with Next.js `<Link>` in pages where native anchors are used

### 1.3 Mobile Navigation
- [ ] Add hamburger menu to `Header.tsx` (toggle state with `useState`)
- [ ] Mobile drawer: full-width overlay with all 5 nav links
- [ ] Use `use client` directive only on Header (keep pages as server components)

### 1.4 Contact Form Submission
- [ ] Decision: Use **Formspree** (free tier, no backend needed) or Next.js API route
  - **Recommended:** Formspree for now — zero infrastructure, swap later
  - If API route preferred: `app/api/contact/route.ts` with server-side email via Resend
- [ ] Add basic client-side validation (required fields, email format)
- [ ] Add success/error feedback state to form

### 1.5 Content & Assets
- [ ] Add real partner logos to `public/images/partners/` (CBS logo first, placeholders for others)
- [ ] Add board member photos to `public/images/team/` or use initials avatar fallback component
- [ ] Update `content/partners/partners.json` with real partner data
- [ ] Configure `next.config.js` with image domains if using external image URLs

### 1.6 Code Quality
- [ ] Enable strict TypeScript: set `"strict": true` in `tsconfig.json`
- [ ] Add `prettier` with consistent config (avoid style debates)
- [ ] Wire ESLint to catch unused imports and `console.log` statements

**Dependencies:** None — all items are self-contained.
**Risk:** Team photos may not be available; use initials fallback.

---

## Phase 2 — Structure & Deploy (Mid-term, ~2–4 weeks)

**Goal:** Deployed, maintainable, team-friendly project with real content workflow.

### 2.1 Deployment
- [ ] Deploy to **Vercel** (zero-config for Next.js, free tier for student orgs)
- [ ] Configure custom domain (CBS subdomain or own domain)
- [ ] Set up preview deployments for PRs (automatic with Vercel + GitHub)
- [ ] Add environment variables for Formspree endpoint / email keys

### 2.2 Content Workflow
- [ ] Document how to add events, update partners, add team members (in README)
- [ ] Consider **Contentlayer** or **next-mdx-remote** if non-developers will manage content
  - Current JSON approach works well; only migrate if content editors aren't comfortable with JSON
- [ ] Add content validation: JSON Schema files for `events`, `partners`, `team` content types (pattern from `everything-claude-code/schemas/`)
- [ ] Add a CI check that validates JSON content files against schemas on push

### 2.3 CI/CD Pipeline (GitHub Actions)
- [ ] `build.yml`: On push/PR → `npm ci` + `npm run build` + `npm run lint`
- [ ] `validate-content.yml`: Validate all JSON content files against schemas
- [ ] Branch protection on `main`: require CI passing before merge
- [ ] Pattern: one workflow per concern (inspired by `everything-claude-code/scripts/ci/`)

### 2.4 UX Improvements
- [ ] Active nav link state (highlight current page in Header)
- [ ] Loading/skeleton states for EventList (if data ever becomes async)
- [ ] SEO: Add `metadata` exports to all pages (`title`, `description`, `og:image`)
- [ ] Accessibility audit: keyboard navigation, focus rings, aria labels on interactive elements
- [ ] Favicon and social preview image

### 2.5 Events Feature Enhancement
- [ ] Event detail pages: `app/events/[slug]/page.tsx` with individual event info
- [ ] Interest/RSVP form on event detail page (low-effort: Formspree form per event)
- [ ] Link EventCard components to their detail pages

### 2.6 Newsletter / Mailing List
- [ ] Research: **Buttondown** (free for <100 subscribers) or **Mailchimp** free tier
- [ ] Embed subscribe form in Footer and/or CTA sections
- [ ] No custom backend needed — embed via iframe or API widget

**Dependencies:** Phase 1 wiring complete; GitHub repo live.
**Risk:** Domain setup may take time; preview on Vercel subdomain in meantime.

---

## Phase 3 — Growth & Maintenance (Optional / Long-term)

**Goal:** Self-sustaining project that outlasts any individual contributor.

### 3.1 Backend (Only if needed)
- [ ] Next.js API routes for contact form (if Formspree outgrown)
- [ ] Event RSVP tracking (if Excel/manual tracking insufficient)
- [ ] Simple admin dashboard for board members (consider Notion embed as low-effort alternative)

### 3.2 CMS Integration (Only if non-devs edit content frequently)
- [ ] **Sanity** (free tier) or **Tina CMS** (Git-backed, no database)
- [ ] Tina is recommended: edits go directly to JSON/MDX files, no database, works with current architecture

### 3.3 Analytics
- [ ] **Plausible** (privacy-friendly, student discount) or **Vercel Analytics** (built-in)
- [ ] Track: page views, event page engagement, contact form submissions

### 3.4 Contributor Onboarding
- [ ] CONTRIBUTING.md with setup, branch naming, PR process
- [ ] Issue templates (bug report, feature request, content update)
- [ ] Stale bot or manual triage process for issues

---

## External Inspiration Integration

### From `everything-claude-code`:
| Pattern | How to Apply to CBS-IT Website |
|---|---|
| **Conventional commits** | Adopt `feat|fix|content|style|refactor|docs|chore` — exact config is in `commitlint.config.js` |
| **Schema validation in CI** | JSON Schema + AJV to validate `events/*.json`, `partners/*.json`, `team/*.json` before deploy |
| **Separation of concerns docs** | Create `CLAUDE.md` (AI instructions), `CONTRIBUTING.md` (human contributor guide), keep `memory/` AI docs |
| **Catalog count enforcement** | Simple CI check: assert `upcoming.json` has ≥1 event, `partners.json` has ≥1 real partner |
| **Config protection** | Never let AI modify `tailwind.config.ts` or the design system — document this as a rule |
| **No-personal-paths CI check** | Validate no absolute Windows paths leaked into JSON content files |

### Additional Web Repositories to Study:
| Repo | What to Extract |
|---|---|
| **Vercel's Next.js examples** (github.com/vercel/next.js/tree/canary/examples) | App Router patterns, Metadata API, image optimization, form handling with server actions |
| **shadcn/ui** (ui.shadcn.com) | Accessible component primitives — consider adopting for form inputs and modals in Phase 2 |
| **Taxonomy (shadcn)** | Full Next.js 14 app with MDX, auth, and Stripe — reference architecture for a complete project |

---

## Task Prioritization Framework

Use **Impact × Effort** scoring. For this project at this stage:

```
Priority 1 (Do first):    High impact, Low effort   → Wiring gaps, mobile nav, Git repo
Priority 2 (Schedule):    High impact, High effort  → Deployment, CI/CD, event detail pages
Priority 3 (Batch later): Low impact, Low effort    → SEO metadata, active nav state, favicon
Priority 4 (Defer/skip):  Low impact, High effort   → Custom CMS, full backend, admin dashboard
```

**Current Priority 1 items (from Phase 1):**
1. Git init + GitHub push
2. Mobile navigation
3. Contact form submission (Formspree)
4. Wire navigation.json into Header
5. Add real partner logos

---

## Work Modularization

Split work by **area of ownership** to minimize merge conflicts:

| Track | Owner focus | Files |
|---|---|---|
| **Content** | Non-dev team member | `content/**/*.json` only |
| **Frontend/UI** | Component developer | `components/**`, `app/**/page.tsx` |
| **Infrastructure** | DevOps-minded | `.github/`, `next.config.js`, `vercel.json` |
| **Design** | Designer | `tailwind.config.ts`, `globals.css`, `memory/design-system.md` |

Rule: **Content track is always merge-safe** — JSON files never conflict with component changes. Protect `tailwind.config.ts` from ad-hoc changes (only intentional design system updates).

---

## Research / Open Questions

- [ ] **Form handling:** Formspree vs Next.js Server Actions (Next 14 supports server actions natively — may avoid third-party entirely)
- [ ] **Domain:** Does CBS IT Union have a domain or subdomain allocation? If not, Vercel subdomain works initially.
- [ ] **Real content:** Who provides partner logos, board member photos, event details? Define content pipeline early.
- [ ] **Access control:** Who gets GitHub repo access? Define branch protection rules before inviting contributors.
- [ ] **Image hosting:** Should event/team images be in `public/` (in-repo) or an external CDN? For small orgs, in-repo is fine until images exceed ~50MB.

---

## Verification Checklist (Post-Phase-1)

- [ ] `npm run dev` starts without errors
- [ ] `npm run build` succeeds (TypeScript + ESLint pass)
- [ ] Mobile nav opens/closes correctly on viewport < 768px
- [ ] Contact form submission reaches email inbox
- [ ] All 5 pages render without broken image/link errors
- [ ] `git log --oneline` shows conventional commit history
- [ ] GitHub repo is live with `.gitignore` correctly excluding `node_modules` and `.next`
