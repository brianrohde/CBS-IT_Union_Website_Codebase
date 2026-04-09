---
paths:
  - "**"
---

# Git Commit Workflow

> Auto-loaded every session. Governs how Claude generates concise, conventional commit messages based on session context and project state.

## Trigger Phrases

When Brian says any of the following (case-insensitive), **immediately** execute the deduction algorithm below and output a ready-to-paste commit message:

- `commit message`
- `git commit message`
- `generate commit message`

Do **not** wait to be asked twice. Do it inline, before continuing any other work.

---

## Deduction Algorithm

Run these steps in order. Each informs the next.

### Step 0 — Reconstruct current session work (PRIMARY source)

Before touching external data, recall everything done in the **current session** from conversation context:
- What files were created, modified, or deleted
- What logic was changed and why
- What problems were solved
- What was deferred or left incomplete

This is the richest source — use session context to write the commit body.

### Step 1 — Get git status

```bash
git -C "PROJECT_ROOT" status --short
```

Produces the list of modified, staged, and untracked files. Cross-reference with session context.

### Step 2 — Get last commit timestamp

```bash
git -C "PROJECT_ROOT" log -1 --format="%H %ai %s"
```

Returns: `<hash> <ISO datetime> <subject>`. Also run for context:

```bash
git -C "PROJECT_ROOT" log --oneline -5
```

### Step 3 — Cross-reference sources

Merge session context + git status into unified list of uncommitted changes:
- If `git status` shows a file matching session context → confirmed uncommitted
- If `git status` shows files with **no** session context → note as "undocumented changes"

### Step 4 — Draft commit message

Format:

```
<type>: <short imperative subject, ≤ 60 chars>

- <bullet: what changed and why — one line per logical unit>
- <bullet: ...>
```

**`<type>` values**: `feat`, `fix`, `refactor`, `chore`, `docs`
- `feat` — new user-facing functionality
- `fix` — correcting a bug
- `chore` / `docs` — tooling, rules, or documentation-only changes
- `refactor` — structural changes with no behaviour change
- Use the type that best describes the *dominant* change if mixed

**Subject line rules:**
- Imperative mood ("add X", "fix Y", not "added" / "adding")
- No period at end
- ≤ 60 characters

**Body rules:**
- One bullet per logical unit of work (not per file)
- Prioritise content from session context (richer detail)
- Reference filenames where specific enough to be useful
- Omit bullets that are obvious from the subject line

---

## Output Format

Present the commit message in a single fenced code block so Brian can copy it directly:

````
```
feat: add contact form with validation

- Created app/contact/page.tsx with contact form scaffold
- Added form field definitions in content/pages/contact.json
- Integrated Container and Heading components
```
````

Then add a brief note below:
- Summary of what was included
- Any undocumented changes

---

## Examples

**Good commit:**
```
feat: create events page with upcoming/past split

- Created app/events/page.tsx and app/events/past/page.tsx
- Built EventCard and EventList reusable components
- Added event content in content/events/upcoming.json and past.json
- Styled with design system colors and responsive grid
```

**Bad commit:**
```
feat: add features to the site and update components

- added lots of stuff
- modified files
- things work better now
```

---

## Cheatsheet Rule

Whenever a new trigger phrase is added to this file, also update `.claude/CHEATSHEET.md` (if it exists) to reflect it in the same response, without being asked.
