# Contributing to CBS IT Union Website

Thanks for helping improve the CBS IT Union website! This guide explains how to contribute effectively.

## Before You Start

Read `/memory/CLAUDE.md` — it contains all coding standards and project rules for this repo.

## Branching Strategy

Create feature branches from `main`:

```bash
git checkout -b <type>/<short-description>
```

Branch name examples:
- `feat/mobile-navigation`
- `fix/contact-form-validation`
- `content/update-events-april`
- `docs/contributing-guide`

## Commit Messages

Use [conventional commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Allowed Types

- `feat` — new feature
- `fix` — bug fix
- `content` — content updates (JSON only, no code changes)
- `style` — code style, formatting, unused variables
- `refactor` — code change that doesn't fix or add features
- `docs` — documentation updates
- `test` — adding/updating tests
- `chore` — build, dependencies, tooling
- `ci` — GitHub Actions, CI/CD changes

### Examples

```
feat(header): add mobile navigation hamburger menu

Implement responsive mobile nav drawer that appears on screens < 768px.
Uses useState to manage toggle state, keep Header as use client only.

Closes #12
```

```
content(events): add april workshop to upcoming events

Updated content/events/upcoming.json with new Python workshop event.
```

```
fix(contact): disable form submit button during submission

Prevent duplicate form submissions by disabling button state during POST.
```

## Pull Requests

### Before Submitting

1. **Test locally:**
   ```bash
   npm run dev      # Test in browser
   npm run build    # Full build
   npm run lint     # Linting
   ```

2. **Sync with main:**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

3. **Update related docs** if your change affects:
   - Component behavior → update `/memory/` docs
   - Project structure → update `/memory/project-structure.md`
   - New patterns → add to `/memory/layouts.md`

### PR Description Template

```markdown
## Summary
Brief description of what this PR does.

## Changes
- Bullet 1
- Bullet 2

## Testing
How to verify this works:
- [ ] Test step 1
- [ ] Test step 2

## Screenshots (if UI changes)
[Add images if relevant]

## Related Issues
Closes #123
```

## Code Review Checklist

Before merging, ensure:

- [ ] All CI checks pass (build, lint, tests)
- [ ] Code follows `/memory/CLAUDE.md` standards
- [ ] No hardcoded paths or secrets
- [ ] TypeScript strict mode passes
- [ ] No unused imports or variables
- [ ] Content changes validate against schema
- [ ] Mobile responsive (tested on phone-size viewport)

## Content Updates (JSON Files)

**No code review needed** if you're only editing `/content/` JSON files.

1. Update the relevant JSON file in `/content/`
2. Create a simple PR with `content: ...` commit type
3. Assign a content editor for approval

### Adding Events

Edit `/content/events/upcoming.json`:

```json
{
  "title": "Event Name",
  "date": "2026-05-15",
  "time": "19:00",
  "location": "Building / Room",
  "description": "Brief description",
  "imageUrl": "/images/events/event-name.png"
}
```

### Updating Partners

Edit `/content/partners/partners.json`:

```json
{
  "name": "Partner Name",
  "logo": "/images/partners/logo.png",
  "url": "https://partner-site.com",
  "description": "Brief description"
}
```

## Getting Help

- **Architecture questions** → `/memory/decisions.md`
- **Component patterns** → `/memory/layouts.md`
- **Design system** → `/memory/design-system.md`
- **Styling rules** → `/memory/CLAUDE.md`

## Development Phases

This project follows a structured roadmap. See [`.claude/plans/cbs-it-website-development-roadmap.md`](./.claude/plans/cbs-it-website-development-roadmap.md) for priorities and current phase.

---

**Questions?** Open an issue or ask in the project discussions.
