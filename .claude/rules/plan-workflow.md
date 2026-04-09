---
paths:
  - "**"
---

# Plan Workflow

> Auto-loaded every session. Governs how Claude updates plan files after execution.

## Trigger Phrase

When Brian says **`"update plan"`** (optionally followed by a plan name),
Claude must execute the following steps **in order**:

1. **Locate the plan file** — search `<project-root>/.claude/plans/`
2. **Rename if needed** — if the filename does not follow `YYYY-MM-DD_<short-slug>.md`, rename it
3. **Append the `## Outcome` section** to the correctly named file

Do **not** wait to be asked twice. Do it inline, before continuing other work.

---

## Outcome Section Format

Append at the **bottom** of the plan file:

```
---

## Outcome

_Completed: YYYY-MM-DD_

### ✅ Completed
- <what was implemented, as planned>

### 🔄 Adjusted
- **What**: <what changed from the original plan>
  **Why**: <reason — constraint, discovery, decision>
  **How**: <what was done instead>

### ❌ Dropped
- **What**: <step or item that was not done>
  **Why**: <reason — out of scope, superseded, deferred>

### Notes
<any other context useful for future reference>
```

Omit sections if there is nothing to record.

---

## When to Apply

- Triggered manually by Brian saying `"update plan"` after a plan has been executed
- Do **not** auto-trigger — always wait for Brian to confirm he is happy with the outcome first
- If multiple plans were touched, ask Brian which one to update (or update all if he says so)

---

## Plan File Location

All plan files live in: `<project-root>/.claude/plans/`

Naming convention: `YYYY-MM-DD_<short-slug>.md`
- Use today's date (or the plan's creation date if visible)
- Derive slug from plan's title — lowercase, hyphen-separated, ≤ 5 words
- Example: "Fix slow fetch API" created 2026-03-25 → `2026-03-25_fix-slow-fetch-api.md`

---

## Relocate & Rename

When the plan file has a non-conforming name:

1. **Read** the file content from its current path
2. **Derive the correct filename**: `YYYY-MM-DD_<short-slug>.md`
3. **Write** to `<project-root>/.claude/plans/<correct-filename>.md`
4. **Delete** the original misplaced/misnamed file using `Bash`: `rm "<original-path>"`
5. Confirm to Brian: `Moved → .claude/plans/<correct-filename>.md` (one line)
6. Continue with appending Outcome section to new path

Do NOT leave the original file in place. Do NOT create duplicates.

---

## Cheatsheet Rule

Whenever a new **trigger phrase** is added, Claude must also update
`.claude/CHEATSHEET.md` (if it exists) to reflect it — in the same response, without being asked.
