# Code Agent Bot — Resume Evidence Audit

Audit date: 2026-09-13  
Repository: https://github.com/kaikkd/Code_Agent_Bot  
Audited commit: `ee0c859`

## Bottom line

The repository supports describing Code Agent Bot as a **full-stack coding-agent prototype** with planning, typed tools, critic-guided retries, sandboxed file access, streaming UI, authentication, and persistence.

It does **not yet support** the claims “production-ready,” “MCP implementation,” “RAG-enabled,” or any improvement in task success rate, tool hallucination, retrieval recall, latency, or token cost. The public CI is red and there is no committed Agent benchmark.

## Evidence that is safe to use now

### Agent orchestration

- Planner emits structured multi-step plans.
- Execution-risk analyzer routes simple prompts to a fast path.
- Executor supports up to 10 tool rounds.
- Multiple tool calls in one model response run concurrently with `asyncio.gather`.
- Critic reviews each plan step and can trigger up to three retries.
- OpenAI-compatible streaming retries rate-limit/API failures up to five times with backoff.

### Tooling and sandboxing

- Six registered high-level tools: project exploration, file reading, regex code search, file writing, deletion, and pytest execution.
- Tool parameters are exposed as typed JSON schemas.
- Filesystem paths are resolved against a configured sandbox root and reject parent-directory escapes.
- Tool-call events can be streamed to the interface.

### Product engineering

- FastAPI backend and React/TypeScript frontend.
- SSE streaming endpoint with thinking, planning, executing, message, done, and error events.
- JWT access/refresh tokens, password hashing, session/message persistence, pagination, pinning, archiving, title generation, and export endpoints.
- SQLAlchemy models for users, sessions, messages, and API usage.
- Multi-stage Dockerfile and Docker Compose configuration.
- 29 backend API test functions across authentication, health, and session management.

## Public evidence gaps and inconsistencies

### CI status

The latest public workflow run failed:
https://github.com/kaikkd/Code_Agent_Bot/actions/runs/21662282639

Locally reproduced against Python 3.11:

- `ruff`: **543 errors**, 491 automatically fixable. Most are formatting/import issues, but remaining findings need manual review.
- `mypy`: stops on duplicate `base` module discovery because package boundaries/configuration are incomplete.
- `pytest`: cannot collect tests because `email-validator` is missing from project dependencies.
- Frontend CI exits during linting; the repository has an ESLint script but no `.eslintrc.*` or `eslint.config.*`.
- There are no frontend test files or test script despite the UI being presented as production-oriented.
- Security upload uses deprecated `github/codeql-action/upload-sarif@v2` and lacks working `security-events: write` permissions.
- Docker build is skipped because it depends on the failed backend and frontend jobs.

### README

- Clone URL still points to the old account `XiaoW0417`.
- “Production-ready” is not supported by the red CI, missing benchmark, and absent deployment.
- “MCP” should not be used for this project yet: the runtime uses a custom `SkillRegistry`; the `MCPClient` abstraction is marked legacy/deprecated and is not the active tool path.
- “Token usage tracking and analytics” is only partially wired: database models/repositories exist, while a chat response currently returns `tokens_used=0`.
- README does not disclose that the project is an offline prototype with no public deployment or user metrics.

## Repair order

### P0 — make public evidence credible

1. Change all `XiaoW0417` links to `kaikkd`.
2. Replace “production-ready” with “full-stack prototype” until deployment and reliability evidence exist.
3. Add `email-validator` to backend dependencies.
4. Run `ruff check --fix`, manually resolve remaining errors, and format with `ruff format`.
5. Add missing package markers or configure mypy package discovery; then resolve actual type errors.
6. Add an ESLint configuration compatible with the current React/TypeScript versions.
7. Update SARIF upload to `github/codeql-action/upload-sarif@v3` and declare the required workflow permissions.
8. Make backend lint, type-check, tests, frontend lint/type-check/build, security scan, and Docker build all green.

### P1 — create the evidence recruiters care about

Add a committed `evals/` package and a reproducible benchmark:

- 30–50 repository tasks across search, localized edits, multi-file edits, test repair, and ambiguous requests.
- Versioned task schema with repository commit, prompt, expected patch/tests, and timeout.
- Metrics: `task_success@1`, test-pass rate, valid tool-call rate, average tool rounds, critic-recovery rate, wall-clock latency, and token usage.
- Baselines: direct LLM, Plan–Execute without Critic, and full Plan–Execute–Critic.
- Failure taxonomy: planning, context retrieval, tool selection, tool arguments, edit correctness, test/debug loop, and timeout.
- Store per-run traces and generate a summary report from raw JSONL.

This directly unlocks JD terms such as:

`agent harness`, `evaluation harness`, `agent trace replay`, `failure diagnosis`, `regression testing`, `grading`, `observability`, `long-horizon tasks`, `tool-use evaluation`, and `production-faithful evals`.

### P2 — strengthen product proof

1. Add frontend unit/component tests and one browser end-to-end flow.
2. Deploy a public demo with restricted sandbox resources and disposable workspaces.
3. Record p50/p95 latency, task completion rate, token cost, and failure distribution.
4. Add an architecture diagram, benchmark table, demo GIF, CI badge, coverage badge, and one-command reproduction instructions.
5. Either integrate a real MCP SDK/server transport or continue describing the current system as typed tool/function calling.

## Resume wording

### Safe now

> Built a full-stack coding agent with structured planning, typed tools, parallel tool execution, critic-guided retries, sandboxed file access, SSE streaming, JWT authentication, and persisted sessions using Python, FastAPI, React, TypeScript, SQLAlchemy, and Docker.

### Use only after P0

> Shipped 29 backend tests and a CI pipeline covering linting, static typing, API tests, frontend build checks, security scanning, and container builds.

### Use only after P1 measurements

> Built a reproducible Agent evaluation harness across **N** repository tasks; improved task success from **X%** to **Y%** with critic-guided recovery while measuring tool validity, latency, token cost, and failure categories from replayable traces.

## Recommended repository positioning

Code Agent Bot should remain one of the two flagship projects, but `itravel` is currently the stronger public engineering artifact. Until P0 and P1 are complete:

1. Lead the resume with TikTok experience.
2. Describe Code Agent Bot as a technically substantial prototype, not a production system.
3. Use `itravel` to prove end-to-end product quality and automated testing.
4. Use TikTok—not this repository—as the primary evidence for MCP and production Agent evaluation.
