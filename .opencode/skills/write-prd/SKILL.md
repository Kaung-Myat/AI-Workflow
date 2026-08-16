---
name: write-prd
description: Creates PRD, user stories, architecture docs, and Mermaid diagrams from research. Use during the Planning phase, after research.md is approved, or when the user asks for PRD, user stories, architecture, or flow diagrams.
compatibility: opencode
metadata:
  phase: planning
---

# Write PRD

Role: follow `.agents/planner.md`.

## Input

- Required: `docs/research.md` (must exist and be approved)
- Ask the user if the product goal is still unclear

## Outputs (write all)

| File | Purpose |
|------|---------|
| `docs/PRD.md` | Product requirements |
| `docs/user-stories.md` | User stories with acceptance criteria |
| `docs/architecture.md` | Stack, structure, data flow |
| `diagrams/flow.mmd` | High-level user/system flow |
| `diagrams/sequence.mmd` | Key interaction sequence |
| `diagrams/state.mmd` | App/UI state machine |

## PRD template

Use these sections in `docs/PRD.md`:

1. Overview
2. Target users
3. Functional requirements (F1, F2, … — numbered, testable)
4. Non-functional requirements
5. Out of scope
6. Success metrics (optional, short)

## Rules

- Do **not** write application code.
- Do **not** invent features beyond research + user answers.
- Keep scope demo-friendly (small web app).
- Prefer vanilla HTML/CSS/JS unless the user specifies otherwise.
- After writing all files, stop and wait for approval.
