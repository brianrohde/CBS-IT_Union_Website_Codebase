---
paths:
  - "**"
---

# Docs Workflow

> Auto-loaded every session. Governs how Claude performs a full documentation update across all living project documents.

## Trigger Phrases

When Brian says any of the following (case-insensitive), **immediately** review the current session and update all relevant documents listed below:

- `update all docs`
- `update docs`
- `docs update`

Do **not** wait to be asked twice. Work through each document in order, skipping only if the session produced nothing relevant to that document.

---

## Document Update Order

Work through these in sequence. Each has its own update criteria.

### 1. `.claude/plans/YYYY-MM-DD_*.md`

**Update if**: a plan was actively discussed, executed, or partially implemented this session and does not yet have an `## Outcome` section.

**Which plans**: only plans touched in the current session — not all plans.

**Action**: Append Outcome section following plan-workflow format (✅ Completed / 🔄 Adjusted / ❌ Dropped).

---

### 2. `memory/CLAUDE.md`

Project-level instructions for Claude. Describes project structure, key modules, conventions, and rules.

**Update if**: 
- A new folder/module/major pattern was introduced
- Project structure changed
- A new rule file was added to `.claude/rules/`
- A standing convention was established/changed

**Do not** add ephemeral session notes — only durable structural facts.

---

### 3. `memory/decisions.md`

Running log of architectural decisions.

**Update if**:
- A new architectural decision was made (design pattern, technology choice, structure change)
- Context for a past decision needs clarification

**Action**: Add a new decision entry with date, decision made, why, and impact.

---

### 4. `README.md`

User-facing project documentation.

**Update if**:
- Setup steps changed
- New pages or major features added
- Project's described behavior no longer matches reality

**Do not** add implementation details — keep it user-level.

---

### 5. Other `.claude/rules/` files

Review each rule file for stale references.

**Update if**: a trigger phrase, file path, format, or pattern documented in a rule file was changed this session and the rule file hasn't been updated yet.

---

## Completion Signal

After finishing all updates, briefly list what was updated and what was skipped (with reason), e.g.:

> **Docs updated:** memory/CLAUDE.md ✅, memory/decisions.md ✅, README.md (skipped — no user-facing changes), plans: `2026-04-09_initial-setup.md` ✅, rules (skipped — no stale refs)

---

## Cheatsheet Rule

Whenever a new trigger phrase is added to this file, also update `.claude/CHEATSHEET.md` (if it exists) to reflect it in the same response, without being asked.
