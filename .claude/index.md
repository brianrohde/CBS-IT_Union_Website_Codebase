# Claude Code Workspace

This folder contains Claude-specific files for the CBS IT Union website project.

## Contents

- **`plans/`** — Implementation plans and audit trail
  - All tasks documented with initial plans and results
  - Chronologically organized: `YYYY-MM-DD-{task-name}.md`
  - See `plans/README.md` for details

## Workflow

For every implementation task:

1. Create a plan file in `plans/` before starting
2. Document the initial approach
3. Record actual results after completion
4. Include metrics, decisions, and trade-offs

This creates an **auditable, maintainable project history**.

## Not for Git

The `.claude/` folder should typically be kept local (not committed to git) since it contains development-specific planning artifacts. However, the project structure and decisions themselves are documented in `/memory/` which should be committed.

## Integration

Works alongside `/memory/` system:
- **`/memory/`** → Project rules, guidelines, architectural decisions
- **`.claude/plans/`** → Implementation history and audit trail

---

**System Version:** 1.0  
**Established:** 2026-04-09
