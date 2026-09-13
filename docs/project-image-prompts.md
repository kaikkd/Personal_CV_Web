# Project image prompts

These prompts intentionally create conceptual editorial illustrations, not fake product screenshots.

## Shared production specification

- Canvas: **1600 × 900 px**
- Aspect ratio: **16:9**
- Safe area: keep important objects inside the central 1400 × 740 px
- Export: WebP, quality 82–88, target under 250 KB
- Use the same model, seed, style reference, and guidance settings for all three images
- Suggested Midjourney parameters: `--ar 16:9 --stylize 100 --chaos 0 --seed 2714`

### Shared style prefix

```text
Editorial systems illustration for a senior software engineering portfolio, precise Swiss grid composition, warm off-white paper background, subtle technical grid, charcoal and deep navy structural elements, thin graphite connector lines, restrained acid-lime highlights, one muted project accent color, crisp geometric forms, flat orthographic perspective with very shallow depth, premium technology magazine art direction, high information density, generous but controlled negative space, consistent line weight, soft natural grain, no decorative sci-fi effects
```

### Shared negative prompt

```text
no readable text, no letters, no numbers, no logos, no company branding, no people, no faces, no fake application screenshot, no browser chrome, no photorealistic laptop, no neon cyberpunk, no glassmorphism, no glowing orb, no robot, no circuit-board cliché, no stock illustration style, no excessive gradients, no clutter, no watermark
```

## 01 — Agent Evals Infrastructure

Accent color: muted cyan `#38B9B3`.

```text
[SHARED STYLE PREFIX]. Visualize a rigorous agent evaluation pipeline from left to right: many compact trajectory traces enter isolated container-shaped sandboxes, pass through a branching diagnostic layer that separates model failures, tool failures, and environment failures, then converge into a structured evaluation report. Show parallel processing through repeated lanes, clear boundaries around each sandbox, small evidence nodes and restrained status markers. The composition should communicate reproducibility, failure attribution, and scale without exposing any private interface. Muted cyan accent #38B9B3. [SHARED NEGATIVE PROMPT]
```

Suggested filename: `public/projects/generated/agent-evals.webp`

## 02 — Code Agent Bot

Accent color: muted violet `#735FD1`.

```text
[SHARED STYLE PREFIX]. Visualize an autonomous coding-agent runtime centered on a closed orchestration loop: planning node, execution node, critic node, and iteration node connected with directional flow. Below the loop, show a typed tool registry branching to code search, file reading, editing, deletion, and test execution, all enclosed by a clearly bounded filesystem sandbox. Add a thin event stream leaving the runtime toward a minimal interface frame, but do not create a fake UI. The composition should communicate controlled autonomy, typed tools, recovery, and observability. Muted violet accent #735FD1. [SHARED NEGATIVE PROMPT]
```

Suggested filename: `public/projects/generated/code-agent.webp`

## 03 — itravel

Accent color: muted amber `#D7902F`.

```text
[SHARED STYLE PREFIX]. Visualize a deterministic travel-planning system: a compact set of user constraints enters a five-stage route pipeline, expands into connected points of interest on an abstract map, and resolves into a balanced multi-day itinerary made of aligned cards and route segments. Show one shared central data structure feeding chat, schedule, and map projections, with graceful fallback paths represented by secondary dotted lines. Avoid tourism photography and fake screens; focus on the system that turns ambiguity into an editable plan. Muted amber accent #D7902F. [SHARED NEGATIVE PROMPT]
```

Suggested filename: `public/projects/generated/itravel.webp`

## Consistency review

Before using generated images, verify that:

1. All images share the same background, line weight, perspective, grain, and object scale.
2. No generated words, logos, or fake metrics appear.
3. The illustration does not imply an unimplemented product feature.
4. The conceptual image is labeled “Conceptual system illustration” on the website.
5. Real screenshots and repository links remain available as evidence on project detail pages.
