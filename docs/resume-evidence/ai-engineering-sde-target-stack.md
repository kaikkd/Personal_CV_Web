# AI Engineering / SDE Target Stack

Purpose: convert recurring North American AI Engineering/SDE JD requirements into verifiable project evidence before adding them to application resumes.

## Already supported by current experience

- Python, TypeScript, JavaScript, SQL
- React, shadcn/ui, Express.js, FastAPI
- Unix/Linux, Docker, cloud deployment
- REST APIs, SSE, asynchronous/concurrent/parallel programming
- LLM-as-a-Judge, rubric grading, deterministic graders
- Function calling, MCP interfaces, CodeAct, multi-turn Agents
- Evaluation harnesses, benchmark integration, trajectory analysis, RCA
- Long-context compression, multimodal evaluation, failure taxonomies
- SQLite caching, schema validation, rate limiting, retry/exponential backoff
- PyTorch, Transformers, PEFT/QLoRA, RAG, FAISS, BGE reranking
- pytest, Vitest, Git, code review

## Priority 0 — broad SDE and AI infrastructure coverage

### C++ or Go

Why JDs ask for it:
- Systems programming, high-throughput services, inference/runtime infrastructure.

Evidence to build:
- Reimplement the trace parser or sandbox worker in Go or C++.
- Benchmark throughput and memory against the Python version.

Move to resume after:
- Tested repository, benchmark report, and one nontrivial concurrent component.

### PostgreSQL, Redis, and a message queue

Why JDs ask for it:
- Durable application state, caching, background jobs, distributed workers.

Evidence to build:
- PostgreSQL for tasks/results, Redis for cache and rate limits, Kafka/SQS/RabbitMQ for evaluation jobs.
- Idempotency keys, retries, dead-letter handling, and worker recovery.

Move to resume after:
- Multi-worker integration tests and measured throughput/recovery behavior.

### Kubernetes and one cloud provider

Why JDs ask for it:
- Production deployment, horizontal scaling, isolated workloads, service operations.

Evidence to build:
- Deploy API, worker, PostgreSQL, Redis, and trace store on AWS/GCP.
- Kubernetes Deployments/Jobs, autoscaling, health probes, secrets, and resource limits.

Move to resume after:
- Public architecture, deployment manifests, load test, and cost/latency measurements.

### CI/CD and observability

Why JDs ask for it:
- Reliable releases and production operations.

Evidence to build:
- GitHub Actions for lint, type checks, tests, container builds, security scans, and deployment.
- OpenTelemetry traces, Prometheus metrics, Grafana dashboards, structured logs, and alerts.

Move to resume after:
- Green CI, trace screenshots, dashboard metrics, and a documented failure investigation.

## Priority 1 — Agent Engineering differentiation

### Agent runtime and orchestration

Target terms:
- LangGraph, state machines, durable execution, checkpoints, human-in-the-loop, memory, context engineering, tool permissions.

Evidence to build:
- Convert Code Agent Bot orchestration into a resumable state graph.
- Add cancellation, checkpoint/resume, idempotent tools, approval gates, and typed state.

### Real MCP integration

Target terms:
- MCP client/server, transports, tool discovery, resources, prompts, authentication.

Evidence to build:
- Implement at least two real MCP servers and connect them through an MCP SDK rather than a custom tool registry.
- Add schema validation, permission boundaries, and tool-call traces.

### Agent evaluation platform

Target terms:
- Evaluation harness, LLM-as-a-Judge, graders, trace replay, simulation, golden datasets, regression testing, production-faithful evals.

Evidence to build:
- Public tasks from BFCL, SWE-bench Lite, τ-bench, or a self-authored repository benchmark.
- Versioned datasets and prompts; deterministic and model-based graders.
- Replayable JSONL traces and failure analysis by model, task, and tool.
- Metrics: task success, valid tool-call rate, judge agreement, critic recovery, latency, token cost, and failure distribution.

### Trace storage and analytics

Target terms:
- ClickHouse, data pipelines, observability, experiment tracking.

Evidence to build:
- Store events and evaluation results in ClickHouse.
- Query model regressions, tool errors, latency percentiles, and token cost through a dashboard.

### Browser and computer-use Agents

Target terms:
- Playwright, Chrome DevTools Protocol, browser automation, computer use, sandboxing.

Evidence to build:
- Add browser tasks with deterministic page fixtures and Playwright/CDP tools.
- Measure completion, invalid actions, recovery, and page-state grounding.

## Priority 2 — model and post-training roles

Only prioritize this group if targeting Research Engineer or post-training roles:

- SFT, instruction tuning, DPO, RLHF, RLVR, PPO, GRPO
- Reward models, verifiers, process rewards, synthetic data
- vLLM/TGI, quantization, batching, inference optimization
- PyTorch Distributed, FSDP/DeepSpeed, JAX
- CUDA/Triton profiling and kernel optimization

Recommended evidence:
- Fine-tune an open model on tool-use trajectories.
- Compare SFT against GRPO/RLVR on a deterministic Agent benchmark.
- Publish training curves, ablations, compute budget, and downstream task results.

## Recommended flagship project

Build one public **Agent Evaluation and Runtime Platform** instead of many disconnected demos:

1. LangGraph or typed state-machine Agent runtime.
2. Real MCP client/server integrations.
3. FastAPI/gRPC control plane.
4. PostgreSQL metadata, Redis cache/rate limits, and queued workers.
5. ClickHouse trace and evaluation storage.
6. Docker/Kubernetes deployment on AWS or GCP.
7. OpenTelemetry, Prometheus, and Grafana observability.
8. Deterministic graders plus LLM-as-a-Judge.
9. SWE-bench Lite/BFCL/τ-bench tasks and trace replay.
10. GitHub Actions CI/CD, security scans, load tests, and a public dashboard.

Completing this project would substantiate most recurring Agent Engineering, AI Infrastructure, Evals Engineering, and backend SDE keywords without assigning technologies to past work where they were not used.
