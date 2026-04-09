# Layout Reference — CBS IT Union Website

## Purpose
This file defines the approved layout patterns for the CBS IT Union website.

It should be used by Claude when:
- creating new pages
- proposing page sections
- structuring homepage flows
- deciding how to combine text, images, cards, logos, forms, galleries, and CTA blocks

The goal is to keep the website:
- clear
- modern
- student-friendly
- structured
- reusable across future committee handovers

This file should work together with:
- `design-system.md` for visual identity
- `project-structure.md` for repo architecture
- `CLAUDE.md` for AI behavior and coding rules

---

## Global Layout Rules

### Grid System
- Use a 12-column responsive grid
- Desktop layouts should typically use:
  - 12 columns total
  - 1140px–1280px max content width
- Tablet:
  - reduce to 2-column or stacked layouts
- Mobile:
  - mostly single-column layout

### Spacing System
Use the project spacing scale:
- 8
- 16
- 24
- 32
- 40
- 48
- 64

Rules:
- prefer generous whitespace over dense layouts
- group related content closely
- separate different content groups clearly
- avoid cramped cards and uneven spacing

### Vertical Rhythm
Typography should define the vertical rhythm of the site.

Use patterns like:
- heading → supporting text → CTA
- section title → intro copy → content grid
- paragraph → spacing → next paragraph
- section intro → cards / gallery / grid

Do not simulate layout quality through arbitrary spacing hacks.

### Mobile-First Principle
- all layouts must degrade gracefully to tablet and mobile
- desktop complexity should never break clarity on smaller screens
- when in doubt, stack content vertically on mobile

---

## General UX Layout Principles

### Familiarity
Use familiar web patterns and predictable placement for key elements:
- navbar at top
- hero first
- content sections in logical order
- CTA near high-intent sections
- footer last

### Simplicity
Avoid overly experimental layouts.
Prefer simple, readable structures over novelty.

### Cognitive Load
Keep content grouped into chunks of roughly 3–4 items where possible.

### Consistency
Reuse the same section logic across pages:
- same container widths
- same heading hierarchy
- same card behavior
- same CTA patterns
- same visual rhythm

### Narrative Logic
Each page should generally follow this sequence:
1. orient the visitor
2. explain the value
3. build trust
4. give a clear next step

---

## Approved Layout Patterns

## 1. Hero — Split Screen (Text Left, Visual Right)

### Best for
- homepage hero
- major landing sections
- campaign or initiative promotion
- partner-facing intro sections

### Desktop
- Left: 6 columns
- Right: 6 columns

### Tablet
- Stack: text above visual

### Mobile
- Single column

### Content
- headline
- short supporting copy
- primary CTA
- optional secondary CTA
- image / illustration / branded visual

### Notes
- this should be the default homepage hero pattern
- keep the text side concise
- visual should support the message, not distract from it

---

## 2. Hero — Centered

### Best for
- about page intro
- contact page intro
- partners page intro
- events page intro
- legal or informational pages

### Desktop
- centered container
- 8–10 columns width

### Tablet / Mobile
- single centered column

### Content
- headline
- subheading
- optional CTA

### Notes
- use when clarity matters more than visual drama
- keep this version cleaner and more text-focused

---

## 3. Three-Column Feature Grid

### Best for
- homepage “What we do”
- community pillars
- member benefits
- union focus areas

### Desktop
- 3 cards: 4 / 4 / 4

### Tablet
- 2 columns then 1

### Mobile
- single column

### Card Content
- title
- short explanation
- optional icon or small visual

### Notes
- this is the default pattern for summarizing high-level ideas
- keep cards concise and scannable
- avoid paragraphs that are too long

---

## 4. Two-Column Feature Block (Text + Image)

### Best for
- explaining initiatives
- event concept explanation
- student value proposition
- partnership value proposition
- deeper storytelling sections

### Desktop
- Text: 7 columns
- Image: 5 columns

### Tablet / Mobile
- stack vertically

### Content
- title
- body copy
- optional CTA
- supporting image or illustration

### Notes
- use when one topic deserves more depth than a short card
- image should clarify or strengthen the story

---

## 5. Reversed Two-Column Feature Block (Image + Text)

### Best for
- alternating section rhythm on long pages
- preventing visual monotony
- story-driven page composition

### Desktop
- Image: 5 columns
- Text: 7 columns

### Tablet / Mobile
- stack vertically

### Notes
- alternate with the standard two-column feature pattern
- use sparingly and intentionally

---

## 6. Logo / Partner Grid

### Best for
- partner logos
- sponsor visibility
- affiliated organizations
- collaboration proof

### Desktop
- 4 or 6 columns

### Tablet
- 3 columns

### Mobile
- 2 columns

### Content
- logos only, or logo + optional name

### Notes
- keep this section visually clean
- use balanced logo sizing
- grayscale or muted styling is preferred unless brand requirements suggest otherwise
- avoid clutter and inconsistent spacing

---

## 7. Testimonials / Quotes Grid

### Best for
- student feedback
- partner endorsements
- event reactions
- member experience

### Desktop
- 2 columns

### Tablet
- 1–2 columns

### Mobile
- single column

### Card Content
- quote
- name
- role / affiliation
- optional image

### Notes
- prefer short, credible quotes over long paragraphs
- use only when actual testimonials are available

---

## 8. Stats / KPI Row

### Best for
- number of events
- number of students reached
- committee size
- partnerships
- community activity metrics

### Desktop
- 3 or 4 equal-width blocks

### Tablet
- 2 per row

### Mobile
- 1 per row

### Content
- number
- short label
- optional short explanation

### Notes
- only use when the numbers are meaningful and trustworthy
- do not invent statistics
- keep labels short

---

## 9. Events / Resources Card Grid

### Best for
- upcoming events
- workshops
- initiatives
- resources
- activity overviews

### Desktop
- 2 or 3 columns depending on density

### Tablet
- 2 columns

### Mobile
- single column

### Card Content
- title
- short description
- optional date
- optional category/tag
- CTA or link

### Notes
- this is likely one of the most reusable patterns on the site
- cards should feel modular and easy to scan
- keep event info visible and structured

---

## 10. FAQ Accordion

### Best for
- membership questions
- participation questions
- partner / sponsor questions
- contact-related clarification

### Desktop
- centered single column, 8–10 columns

### Tablet / Mobile
- full width

### Notes
- use only for genuinely repeated questions
- do not use FAQ as a dumping ground for extra content

---

## 11. Content + Form

### Best for
- contact page
- partnership inquiry
- join-us page
- volunteer interest
- newsletter sign-up

### Desktop
- Text: 5 columns
- Form: 7 columns

### Tablet / Mobile
- stacked layout

### Content
- left side:
  - heading
  - short intro
  - optional supporting contact info
- right side:
  - form

### Notes
- keep forms minimal
- reduce friction
- prioritize clarity and action

---

## 12. CTA Banner

### Best for
- “Join the community”
- “See upcoming events”
- “Partner with us”
- “Get involved”

### Structure
- short headline
- one-line support text
- 1 primary CTA
- optional 1 secondary CTA

### Notes
- use after trust-building sections
- do not place before the visitor has enough context
- keep this visually strong but not overwhelming

---

## 13. Footer Layout

### Desktop
- 3–4 columns:
  - brand/about
  - navigation
  - resources
  - contact/social/legal

### Tablet
- 2 columns

### Mobile
- stacked

### Content
- navigation links
- legal links
- contact links
- optional social links
- short organization description

### Notes
- footer should appear on every page
- keep it structured and dependable

---

## 14. Team / Board Grid

### Best for
- about page
- board / committee presentation
- structured people overview

### Desktop
- 3–4 columns

### Tablet
- 2 columns

### Mobile
- 1–2 columns

### Card Content
- photo
- name
- role
- optional short bio
- optional LinkedIn or contact link

### Notes
- this should not appear on the homepage
- keep bios short
- maintain consistent card height and spacing where possible

---

## 15. Event Gallery / Archive Grid

### Best for
- past events
- photo documentation
- activity archive
- community credibility

### Desktop
- 2–3 columns depending on image density

### Tablet
- 2 columns

### Mobile
- 1 column

### Card Content
- image
- event title
- optional date
- short description
- optional category tag

### Notes
- strong visual component
- avoid overly text-heavy cards
- image quality matters here

---

## 16. Calendar / Upcoming Events List

### Best for
- events page
- homepage events preview
- activity planning and awareness

### Desktop
- list or simplified calendar view in centered container

### Tablet / Mobile
- stacked list view preferred

### Content
- event title
- date
- time
- optional location
- short description
- CTA

### Notes
- prioritize clarity over complexity
- for the first version, a clean structured list is often better than a complicated interactive calendar
- this can later evolve if needed

---

## 17. Announcement Bar

### Best for
- urgent event updates
- registrations open
- application deadlines
- special notices

### Placement
- above the navbar

### Notes
- use sparingly
- should be dismissible if persistent
- reserve for time-sensitive or high-priority messages

---

## Recommended Page Compositions

## Homepage (`/`)

### Purpose
- communicate value quickly
- show activity
- drive engagement

### Recommended Order
1. Navbar
2. Hero (split screen)
3. What is CBS IT Union? (short intro)
4. Key pillars / benefits (3-column grid)
5. Upcoming events preview
6. Partners logo strip
7. Optional stats or testimonials
8. CTA banner
9. Footer

### Notes
- do not include board/team here
- homepage should prioritize:
  - who IT Union is
  - what it does
  - why students should care
  - how they can engage

---

## About / Board Page (`/about`)

### Purpose
- explain the organization
- communicate mission and structure
- show the people behind it

### Recommended Order
1. Centered hero
2. Mission / purpose section
3. What we do
4. Board / team grid
5. Optional values / structure / programs represented
6. CTA banner
7. Footer

### Notes
- this is the dedicated place for the board
- use friendly but credible presentation
- avoid overly long biographies

---

## Events Page (`/events`)

### Purpose
- show upcoming activities
- drive participation

### Recommended Order
1. Centered hero
2. Upcoming events list or simplified calendar
3. Optional event categories or highlights
4. CTA
5. Footer

### Notes
- keep the first version simple and useful
- structured list view may be better than a complex calendar widget initially

---

## Past Events Page (`/events/past`)

### Purpose
- showcase previous activity
- build credibility
- visually document the union’s work

### Recommended Order
1. Centered hero
2. Event gallery / archive grid
3. Optional short event descriptions
4. Footer

### Notes
- this page should feel active and visual
- strong photography will matter a lot

---

## Partners Page (`/partners`)

### Purpose
- show credibility and network
- support partner outreach

### Recommended Order
1. Centered hero
2. Partner logo grid
3. Optional partner categories or short descriptions
4. Optional CTA (“Partner with us”)
5. Footer

### Notes
- keep this page professional and clean
- focus on trust and external legitimacy

---

## Contact Page (`/contact`)

### Purpose
- enable outreach from:
  - companies
  - students
  - collaborators
  - potential partners

### Recommended Order
1. Centered hero
2. Contact + form section
3. Optional direct email / social links
4. Optional FAQ
5. Footer

### Form Fields
- name
- email
- message
- optional inquiry type:
  - student
  - company
  - partner
  - other

### Notes
- keep friction low
- use clear CTA copy like:
  - “Get in touch”
  - “Partner with us”
  - “Reach out”

---

## Layout Usage Rules

### Prefer
- split hero for high-impact entry pages
- centered hero for simple informational pages
- 3-card sections for quick scanning
- 2-column sections for deeper explanation
- reusable grids for events, partners, and people
- visual archive sections for past activity

### Avoid
- overly dense pages
- long uninterrupted text blocks
- more than one visually dominant CTA section per page
- random section order without a clear narrative
- complex layouts that future student maintainers will struggle to reuse
- putting internal/team-heavy content too early on the homepage

---

## Final Page Map

- `/` → Homepage
- `/about` → About + Board
- `/events` → Upcoming events
- `/events/past` → Past events archive
- `/partners` → Partner network
- `/contact` → Contact / outreach

---

## Key Principle

Homepage = attract + orient + engage  
Inner pages = explain + deepen + convert  

Board = credibility  
Events = activity  
Partners = trust  
Contact = action  

The site should feel like a modern student tech community:
- energetic
- credible
- clear
- welcoming
- structured