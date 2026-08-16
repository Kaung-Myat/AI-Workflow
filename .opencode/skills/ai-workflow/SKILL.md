---
name: ai-workflow
description: Orchestrates the multi-phase agentic coding workflow with approval gates. Use when starting a project, choosing the next phase, switching agents, or when the user mentions workflow, phases, research, planning, design, development, or review.
compatibility: opencode
metadata:
  audience: webinar
  workflow: phased
---

# AI Workflow

Follow `.settings/workflow.md` and the matching role file under `.agents/`.

## Phases (never skip)

1. **Research** → `.agents/researcher.md` → `docs/research.md`
2. **Planning** → `.agents/planner.md` → load skill `write-prd`
3. **Design** → `.agents/designer.md` → load skill `design-hifi` → `design/hifi/`
4. **Development** → `.agents/developer.md` → load skill `implement-from-spec`
5. **Review** → `.agents/reviewer.md` → load skill `spec-review`

## Rules

- Never skip phases.
- Always save generated files to the paths listed in the agent file.
- After each phase output, **stop and ask for user approval** before continuing.
- Do not invent requirements; ask the user if unclear.
- Artifacts on disk are the source of truth (not chat history alone).

## How to run a phase

1. Confirm which phase is next (or ask the user).
2. Read the agent role file for that phase.
3. Load the related skill if one exists for that phase.
4. Produce only that phase’s outputs.
5. Summarize what was written and wait for approval.
