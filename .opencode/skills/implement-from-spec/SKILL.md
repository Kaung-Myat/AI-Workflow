---
name: implement-from-spec
description: Implements the application strictly from approved PRD, diagrams, and design. Use during the Development phase, when coding from specs, or when the user asks to build the app without inventing features.
compatibility: opencode
metadata:
  phase: development
---

# Implement From Spec

Role: follow `.agents/developer.md`.

## Input (read before coding)

1. `docs/PRD.md`
2. `docs/architecture.md` and `docs/user-stories.md` if present
3. `diagrams/*.mmd`
4. `design/hifi/screens.html` and `design/hifi/design-notes.md` if present

If PRD is missing, stop and tell the user Planning is not done.

## Rules

- **Never invent features** — only implement numbered PRD requirements.
- Match `screens.html` layout/tokens and `design-notes.md` as closely as practical.
- Prefer clean separation: data/API vs UI.
- Keep code maintainable and beginner-readable (good for demos).
- Handle errors called out in the PRD (invalid input, network, permission denied).

## Suggested structure (unless architecture.md says otherwise)

```text
index.html
css/styles.css
js/
  app.js
  api.js
  ui.js
```

## Done when

- Every functional requirement in the PRD is implemented or explicitly marked blocked
- App runs with the stack defined in architecture
- No extra features beyond the PRD

Then stop and wait for Review phase approval / handoff.
