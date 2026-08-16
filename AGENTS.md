# AGENTS.md

This repo is a **phased agentic coding workflow template**, not an application. It contains no app code, no root manifest, and no build/test commands. Working here means running the workflow, not compiling a project.

## Workflow (never skip phases)

Five phases run in order, each producing fixed artifacts and gated on user approval:

1. Research — `.agents/researcher.md` → `docs/research.md`
2. Planning — `.agents/planner.md` + skill `write-prd` → `docs/PRD.md`, `docs/user-stories.md`, `docs/architecture.md`, `diagrams/{flow,sequence,state}.mmd`
3. Design — `.agents/designer.md` + skill `design-hifi` → `design/hifi/screens.html`, `design/hifi/design-notes.md`
4. Development — `.agents/developer.md` + skill `implement-from-spec` → the app itself
5. Review — `.agents/reviewer.md` + skill `spec-review` → `docs/review-report.md`

Rules from `.settings/workflow.md`:
- Never skip a phase. After each phase, **stop and ask for user approval** before continuing.
- Load the `ai-workflow` skill when starting a project or deciding the next phase; it orchestrates the role files and skills above.
- Artifacts on disk are the source of truth, not chat history.
- Never invent features or requirements — ask the user if unclear.

## Conventions to respect

- Default stack is **vanilla HTML/CSS/JS** (flat `index.html`, `css/`, `js/` layout) unless the user specifies otherwise.
- Design output is static HTML/CSS mockups. **No Pencil.dev, `.pen` files, or design MCP.**
- PRD requirements are numbered `F1, F2, ...` and the review checks each one.
- Write artifacts to the exact paths above; planners/designers must not create app code, and developers must not touch design/planning artifacts.

## Repo layout

- `.settings/workflow.md` — master workflow spec (the authoritative rules).
- `.agents/*.md` — role definitions, one per phase.
- `.opencode/skills/*/SKILL.md` — phase skills (`ai-workflow`, `write-prd`, `design-hifi`, `implement-from-spec`, `spec-review`).
- `.opencode/package.json` + lockfiles — local opencode tooling only; **gitignored on purpose**, do not commit.
- `docs/`, `design/`, `diagrams/` — generated during the workflow; absent until phases run.
