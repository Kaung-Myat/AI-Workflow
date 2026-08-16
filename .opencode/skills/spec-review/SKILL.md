---
name: spec-review
description: Reviews implementation against the PRD and reports gaps, bugs, and fixes. Use during the Review phase, after development, or when the user asks for a PRD compliance check, bug find, or review report.
compatibility: opencode
metadata:
  phase: review
---

# Spec Review

Role: follow `.agents/reviewer.md`.

## Input

- `docs/PRD.md` (source of truth)
- `docs/user-stories.md` if present
- Implemented app files
- `design/hifi/screens.html` and `design/hifi/design-notes.md` for UI parity checks if present

## Process

1. List each PRD functional requirement (F1, F2, …).
2. Mark each: **Pass** / **Partial** / **Fail** / **Missing**.
3. Note bugs, UX issues, a11y gaps, and error-handling holes.
4. Suggest minimal fixes (no new features).
5. Fix only when the user explicitly asks.

## Report format

Write `docs/review-report.md`:

```markdown
# Review Report

## Summary
- Verdict: Pass | Needs fixes
- PRD coverage: X/Y requirements

## Requirement checklist
| ID | Requirement | Status | Notes |
|----|-------------|--------|-------|
| F1 | ... | Pass/Partial/Fail/Missing | ... |

## Bugs
1. ...

## Improvements (optional, non-blocking)
1. ...

## Recommended fixes (ordered)
1. ...
```

## Rules

- Compare against PRD — do not expand scope.
- Prefer evidence (file paths, short snippets) over vague comments.
- After the report, stop unless the user requests fixes.
