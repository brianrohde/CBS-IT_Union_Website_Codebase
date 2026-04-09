# CBS IT Union Website — Claude Code Cheatsheet

Quick reference for triggers, workflows, and commands used in this project.

---

## Trigger Phrases

### Commit Workflow
- `commit message` / `git commit message` / `generate commit message`
  → Generates a ready-to-paste conventional commit message based on session work

### Plan Workflow
- `update plan` (optionally with plan name)
  → Appends Outcome section to a plan file (✅ Completed / 🔄 Adjusted / ❌ Dropped)

### Docs Workflow
- `update all docs` / `update docs` / `docs update`
  → Updates memory, plans, README, and other project docs based on session changes

---

## Key Files & Folders

### Project Rules (`.claude/rules/`)
- `git-commit-workflow.md` — How to generate commit messages
- `plan-workflow.md` — How to update and relocate plan files
- `docs-workflow.md` — How to keep docs in sync with code

### Project Memory (`/memory/`)
- `CLAUDE.md` — AI behavior rules and project conventions
- `design-system.md` — Brand colors, fonts, spacing rules
- `layouts.md` — Approved page composition patterns
- `project-structure.md` — Repository architecture
- `decisions.md` — Architectural decisions made

### Planning & Audit (`.claude/plans/`)
- `YYYY-MM-DD_<short-slug>.md` — Plan files
  - Format: `## Initial Plan` + `## Outcome` (after execution)
  - Example: `2026-04-09_initial-setup.md`

### Project Docs
- `README.md` — User-facing setup and usage
- `package.json` — Dependencies and scripts

---

## Workflow Overview

### Before Work
1. Read `/memory/` files for rules and context
2. Create a plan file in `.claude/plans/YYYY-MM-DD_<slug>.md` if starting significant work

### During Work
1. Reference the memory system and existing plans
2. Follow design system, layouts, and structure rules
3. Keep changes focused and documented

### After Work
1. Say `update plan` to append Outcome section if plan exists
2. Say `update all docs` to sync memory, README, and other files
3. Say `commit message` to generate a conventional commit

---

## Common Tasks

### Create a New Feature/Page
1. Follow layout patterns from `/memory/layouts.md`
2. Use design system colors/spacing from `/memory/design-system.md`
3. Create new plan file: `.claude/plans/2026-04-10_add-feature-name.md`
4. Implement following component patterns from existing code
5. Update plan with Outcome section
6. Update all docs
7. Generate commit message

### Fix a Bug
1. Create brief plan: `.claude/plans/2026-04-10_fix-issue-name.md`
2. Reference `.claude/rules/git-commit-workflow.md` for commit format
3. Say `update all docs` when done
4. Say `commit message` for git

### Update Documentation
1. Edit relevant file in `/memory/` or root
2. Say `update all docs` (will validate changes)
3. Say `commit message` for git

---

## Git Commit Format

**Structure:**
```
<type>: <subject ≤ 60 chars>

- <bullet: what changed and why>
- <bullet: ...>
```

**Types:** `feat`, `fix`, `refactor`, `chore`, `docs`

**Example:**
```
feat: create contact form with validation

- Created app/contact/page.tsx with form scaffold
- Added form fields in content/pages/contact.json
- Integrated Container and Heading components
```

---

## Plan File Format

**Location:** `.claude/plans/YYYY-MM-DD_<short-slug>.md`

**Sections:**
```
# Plan: <title>

_Date: YYYY-MM-DD_

## Initial Plan
- Objective
- Constraints
- Execution Steps

---

## Outcome

_Completed: YYYY-MM-DD_

### ✅ Completed
- <what was done>

### 🔄 Adjusted
- **What**: <change>
  **Why**: <reason>
  **How**: <solution>

### ❌ Dropped
- <what was not done and why>
```

---

## Memory System

Three-tier documentation:

1. **Rules** (`.claude/rules/`) — How to do things (workflows, patterns)
2. **Memory** (`/memory/`) — Project constraints (design system, architecture, decisions)
3. **Plans** (`.claude/plans/`) — Work tracking (what was planned vs. what was done)

Together: **complete audit trail** of project evolution.

---

## Quick Commands

```bash
# Check what's changed
git status --short

# View recent commits
git log --oneline -5

# See files modified this session
git diff --name-only

# View a specific file's history
git log -p <filepath>
```

---

## Helpful Principles

- **Before coding**: check `/memory/layouts.md` for approved patterns
- **During coding**: follow component structure and design system rules
- **After coding**: always update docs before committing
- **For consistency**: read existing code before writing new code
- **For maintainability**: keep component names and structure predictable

---

**Last Updated:** 2026-04-09  
**Project:** CBS IT Union Website  
**Version:** 1.0
