---
name: design-hifi
description: Creates HTML/CSS Hi-Fi UI mockups from an approved PRD without Pencil or design MCP. Use during the Design phase, when the user asks for UI mockups, screens, or design-hifi output.
compatibility: opencode
metadata:
  phase: design
---

# Design Hi-Fi (HTML mockups)

Role: follow `.agents/designer.md`.

## Why this approach

No Pencil.dev / `.pen` files / design MCP. Output opens in any browser — good for demos and low-GPU laptops.

## Input

- Required: `docs/PRD.md` (approved)
- Optional: `docs/user-stories.md`, `diagrams/*.mmd`

## Outputs

| File | Purpose |
|------|---------|
| `design/hifi/screens.html` | All primary screens + key states in one browsable file |
| `design/hifi/design-notes.md` | Tokens, screen map, component notes for developers |

## screens.html requirements

1. One HTML file, self-contained CSS (inline `<style>` or same-folder CSS only).
2. Section per screen from the PRD (e.g. search, current weather, forecast, settings).
3. Include states: empty, loading, error, success where the PRD implies them.
4. Responsive-friendly layout notes via simple mobile/desktop variants or comments.
5. Placeholder content only — no live APIs.
6. Semantic HTML; readable labels for webinar demos.

## design-notes.md template

```markdown
# Design Notes

## Screen map
- Screen → purpose → PRD refs (F1, F2, ...)

## Visual tokens
- Colors
- Typography
- Spacing / radius

## Components
- List reusable UI pieces

## Handoff notes for Developer
- What to match exactly vs what is approximate
```

## Rules

- Follow PRD — do not invent features or screens.
- Never write the real application under project root (no `index.html` app yet).
- After writing files, stop and wait for approval.
