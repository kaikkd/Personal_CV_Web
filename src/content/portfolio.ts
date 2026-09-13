import type { Locale, PortfolioContent, Project } from "./types";

const projects: Record<Locale, Project[]> = {
  en: [
    {
      slug: "agent-evals-infrastructure",
      index: "01",
      title: "Agent Evals Infrastructure",
      eyebrow: "BYTEDANCE SEED · AGENT EVALUATION",
      summary:
        "Evaluation infrastructure spanning LLM-as-a-Judge, function calling, CodeAct, multimodal evaluation, and trajectory RCA.",
      challenge:
        "Large-scale agent evaluation combines model behavior, tool execution, real environments, rate limits, long contexts, and heterogeneous graders. Failures must be reproducible and attributable rather than hidden inside aggregate scores.",
      solution:
        "Built Python and TypeScript evaluation systems using rubric-based judges, deterministic schema graders, isolated sessions, layered retries, asynchronous polling, and a four-stage trajectory RCA pipeline with long-context compression and content-addressed caching.",
      result:
        "Delivered eight evaluation and product projects, shipped four suites across two platform releases, reduced BFCL runtime from 72 to 34 hours and CodeAct from 10 to 2 hours, and evaluated 23,300 streaming-video cases. Internal implementation details remain confidential.",
      stack: [
        "Python",
        "Linux",
        "Docker",
        "BFCL v4",
        "Agent Evals",
        "Cloud Deployment",
      ],
      metrics: [
        { value: "5,106", label: "BFCL v4 cases" },
        { value: "80K→18K", label: "RCA context compression" },
        { value: "23.3K", label: "streaming-video cases" },
      ],
      links: [],
      accent: "cyan",
      media: {
        kind: "image",
        src: "/projects/generated/agent-evals.jpg",
        alt: "Conceptual illustration of an agent evaluation and RCA pipeline",
        caption: "Conceptual system illustration",
      },
    },
    {
      slug: "code-agent-bot",
      index: "02",
      title: "Code Agent Bot",
      eyebrow: "OPEN SOURCE · AGENT RUNTIME",
      summary:
        "A full-stack coding-agent runtime with planning, typed tools, critic-guided recovery, and observable execution.",
      challenge:
        "Long-horizon coding tasks require more than a single model response: the system must gather context, choose safe tools, recover from failures, and keep every action visible.",
      solution:
        "Built Plan–Execute–Reflect–Iterate orchestration, an execution-risk router, typed tool interfaces, parallel tool execution, critic-guided retries, filesystem sandboxing, and streamed events.",
      result:
        "Delivered REST APIs and a React interface with JWT authentication, persisted conversations, Docker Compose, and automated tests. The repository exposes six high-level tools and up to ten execution rounds.",
      stack: ["Python", "FastAPI", "React", "TypeScript", "SQLAlchemy", "Docker"],
      metrics: [
        { value: "6", label: "typed agent tools" },
        { value: "10", label: "maximum tool rounds" },
        { value: "29", label: "backend API tests" },
      ],
      links: [
        {
          label: "View GitHub",
          href: "https://github.com/kaikkd/Code_Agent_Bot",
        },
      ],
      accent: "violet",
      media: {
        kind: "image",
        src: "/projects/generated/code-agent.jpg",
        alt: "Conceptual illustration of the Code Agent Bot runtime and sandbox",
        caption: "Conceptual system illustration",
      },
    },
    {
      slug: "itravel",
      index: "03",
      title: "itravel",
      eyebrow: "OPEN SOURCE · AGENTIC PRODUCT",
      summary:
        "A full-stack travel-planning agent that turns constraints into editable, map-aware daily itineraries.",
      challenge:
        "Travel plans must balance ambiguous preferences, POI selection, route order, transit, model limits, and third-party service failures—while remaining editable across chat, schedule, and map views.",
      solution:
        "Designed a deterministic intent-to-render workflow, streamed intermediate events over SSE, and added provider switching, token budgets, truncated-JSON repair, and deterministic fallbacks. A shared itinerary state keeps every surface consistent.",
      result:
        "Shipped JWT authentication, rate limiting, persistence, drag-and-drop editing, and 70 automated backend and frontend tests around a five-stage planning workflow.",
      stack: ["Python", "FastAPI", "React", "TypeScript", "SQLModel", "Zustand"],
      metrics: [
        { value: "70", label: "automated tests" },
        { value: "5", label: "planning stages" },
        { value: "4", label: "streamed event types" },
      ],
      links: [
        {
          label: "View GitHub",
          href: "https://github.com/kaikkd/itravel",
        },
      ],
      accent: "amber",
      media: {
        kind: "image",
        src: "/projects/generated/itravel.jpg",
        alt: "Conceptual illustration of the itravel planning workflow",
        caption: "Conceptual system illustration",
      },
    },
  ],
  zh: [
    {
      slug: "agent-evals-infrastructure",
      index: "01",
      title: "Agent 评测基础设施",
      eyebrow: "字节跳动 SEED · AGENT 评测",
      summary: "覆盖 LLM-as-a-Judge、函数调用、CodeAct、多模态评测与轨迹 RCA 的评测基础设施。",
      challenge:
        "大规模 Agent 评测同时涉及模型行为、工具执行、真实环境、限流、长上下文与多类 Grader；失败必须可复现、可归因，而不能只停留在聚合分数。",
      solution:
        "使用 Python 与 TypeScript 构建 Rubric Judge、确定性 Schema Grader、隔离 Session、分层重试与异步轮询，并实现带长上下文压缩和内容寻址缓存的四阶段轨迹 RCA 流程。",
      result:
        "交付 8 个评测与产品项目，推动 4 个评测集随平台两个版本发布；将 BFCL 耗时由 72 降至 34 小时、CodeAct 由 10 降至 2 小时，并完成 23,300 个流式视频 Case 评测。内部实现细节不对外公开。",
      stack: ["Python", "Linux", "Docker", "BFCL v4", "Agent 评测", "云端部署"],
      metrics: [
        { value: "5,106", label: "BFCL v4 用例" },
        { value: "80K→18K", label: "RCA 上下文压缩" },
        { value: "23.3K", label: "流式视频 Case" },
      ],
      links: [],
      accent: "cyan",
      media: {
        kind: "image",
        src: "/projects/generated/agent-evals.jpg",
        alt: "Agent 评测与 RCA 流程概念图",
        caption: "概念系统图",
      },
    },
    {
      slug: "code-agent-bot",
      index: "02",
      title: "Code Agent Bot",
      eyebrow: "开源项目 · AGENT RUNTIME",
      summary: "集成规划、类型化工具、Critic 恢复机制与可观测执行过程的全栈编程 Agent Runtime。",
      challenge:
        "长链路编程任务无法依赖一次模型回答：系统需要收集上下文、选择安全工具、从失败中恢复，并让用户看清每一步操作。",
      solution:
        "实现 Plan–Execute–Reflect–Iterate 编排、执行风险路由、类型化工具、并发执行、Critic 重试、文件系统沙箱与事件流式展示。",
      result:
        "交付带 JWT 鉴权、会话持久化、Docker Compose 与自动化测试的 REST API 和 React 界面；仓库包含 6 个高层工具，最多支持 10 轮执行。",
      stack: ["Python", "FastAPI", "React", "TypeScript", "SQLAlchemy", "Docker"],
      metrics: [
        { value: "6", label: "类型化 Agent 工具" },
        { value: "10", label: "最大工具轮次" },
        { value: "29", label: "后端 API 测试" },
      ],
      links: [
        {
          label: "查看 GitHub",
          href: "https://github.com/kaikkd/Code_Agent_Bot",
        },
      ],
      accent: "violet",
      media: {
        kind: "image",
        src: "/projects/generated/code-agent.jpg",
        alt: "Code Agent Bot Runtime 与沙箱概念图",
        caption: "概念系统图",
      },
    },
    {
      slug: "itravel",
      index: "03",
      title: "itravel",
      eyebrow: "开源项目 · AGENTIC 产品",
      summary: "将用户约束转化为可编辑、支持地图联动逐日行程的全栈旅行规划 Agent。",
      challenge:
        "旅行规划需要同时处理模糊偏好、POI 选择、路线顺序、交通方式、模型限制与第三方服务故障，并在对话、日程和地图之间保持可编辑状态。",
      solution:
        "设计确定性的意图到渲染工作流，通过 SSE 流式返回中间状态，加入模型切换、Token 预算、截断 JSON 修复与服务不可用时的确定性降级；以单一事实源同步所有界面。",
      result:
        "交付 JWT 鉴权、限流、持久化和拖拽编辑，并围绕五阶段规划工作流完成 70 项前后端自动化测试。",
      stack: ["Python", "FastAPI", "React", "TypeScript", "SQLModel", "Zustand"],
      metrics: [
        { value: "70", label: "自动化测试" },
        { value: "5", label: "规划阶段" },
        { value: "4", label: "SSE 事件类型" },
      ],
      links: [
        {
          label: "查看 GitHub",
          href: "https://github.com/kaikkd/itravel",
        },
      ],
      accent: "amber",
      media: {
        kind: "image",
        src: "/projects/generated/itravel.jpg",
        alt: "itravel 规划工作流概念图",
        caption: "概念系统图",
      },
    },
  ],
};

export const content: Record<Locale, PortfolioContent> = {
  en: {
    locale: "en",
    languageLabel: "中文",
    identity: {
      name: "Jun Wang",
      role: "Software Engineer · Agent Runtime & Evals Infrastructure",
      location: "San Diego, CA",
      affiliation: "M.S. CSE @ UC San Diego",
      email: "xiaow1704@gmail.com",
      github: "https://github.com/kaikkd",
      linkedin: "https://www.linkedin.com/in/jun-wang-a258513b5/",
    },
    meta: {
      title: "Jun Wang — Agent Runtime & Evals Engineer",
      description:
        "Software engineer building agent runtimes, evaluation infrastructure, and full-stack AI systems.",
    },
    notice: "",
    nav: {
      work: "Work",
      about: "About",
      experience: "Experience",
      research: "Research",
      contact: "Contact",
      menu: "Menu",
    },
    hero: {
      status: "Seeking Summer 2027 software engineering opportunities",
      kicker: "PROFILE / 2026",
      title: "Agent runtimes, evaluation infrastructure, and full-stack AI systems.",
      description:
        "At ByteDance Seed, delivered eight LLM, VLM, and Agent evaluation and product projects in Python and TypeScript.",
      viewWork: "Explore selected work",
      contact: "Start a conversation",
    },
    signal: {
      label: "Selected engineering metrics",
      items: [
        "8 evaluation & product projects",
        "5,106 BFCL v4 cases",
        "23,300 video cases",
        "80K → 18K tokens",
      ],
    },
    work: {
      eyebrow: "SELECTED SYSTEMS",
      title: "Agents that are built to be inspected.",
      description:
        "Evaluation infrastructure, an autonomous coding runtime, and a resilient planning product—each designed around explicit failure modes.",
      viewCase: "Read case study",
    },
    projects: projects.en,
    about: {
      eyebrow: "ENGINEERING APPROACH / 04",
      title: "Across model behavior, infrastructure, and the product surface.",
      paragraphs: [
        "I am a software engineer focused on the difficult middle layer of AI products: runtimes that coordinate tools, evaluation systems that explain failures, and interfaces that keep users informed.",
        "My background spans Agent engineering at ByteDance Seed, production-oriented full-stack systems, computer vision, and machine-learning research. I care about deterministic boundaries around probabilistic models.",
      ],
      principles: [
        {
          index: "01",
          title: "Runtime reliability",
          text: "Typed tools, sandboxed execution, retries, concurrency, streaming, and graceful degradation.",
        },
        {
          index: "02",
          title: "Evaluation & diagnosis",
          text: "Benchmarks, trajectory attribution, failure taxonomies, RCA, and release evidence.",
        },
        {
          index: "03",
          title: "Full-stack ownership",
          text: "Python and FastAPI backends paired with React and TypeScript product interfaces.",
        },
      ],
    },
    experience: {
      eyebrow: "EXPERIENCE",
      title: "Building AI systems in research and production contexts.",
      roles: [
        {
          period: "AUG 2025 — JUL 2026",
          role: "LLM Evaluation Intern, Agent Engineering",
          company: "ByteDance, Seed",
          location: "Beijing, China",
          organizationId: "bytedance",
          highlights: [
            "Delivered eight LLM/VLM/Agent evaluation and product projects, contributing +10,226/−4,387 lines, 18 merged MRs, and 19 code reviews; shipped four evaluation suites across two releases.",
            "Owned a 2,505-case multi-turn LLM-as-a-Judge pipeline and integrated 5,106 BFCL v4 cases; deterministic grading and tuned parallelism reduced BFCL runtime from 72 to 34 hours.",
            "Built a 63-case CodeAct harness in real Lark Base environments, cutting runtime from 10 to 2 hours through isolated sessions, rate-limit-aware retries, jitter, and async export polling.",
            "Designed four-stage trajectory RCA with 80K→18K-token compression and SQLite content-addressed caching; produced 20 reports across 16 models and reached 97 internal runs.",
            "Evaluated 23,300 streaming-video cases below 5% error rate and independently shipped a React/shadcn and Express.js product across three repositories and 76 commits.",
          ],
        },
        {
          period: "OCT — DEC 2024",
          role: "AI Algorithm Engineer Intern",
          company: "LargeV Instrument Corp.",
          location: "Beijing, China",
          organizationId: "largev",
          highlights: [
            "Cleaned and standardized 5,000 private intraoral scans and removed more than 10% label-conflict samples.",
            "Migrated a dental pipeline from YOLOv8 to YOLOv10, improving test-set F1 by 13.7%.",
            "Integrated model pre-labeling into the annotation platform, increasing throughput from 100 to 500 images per day.",
          ],
        },
      ],
      educationLabel: "EDUCATION",
      education: [
        {
          period: "SEP 2026 — DEC 2027",
          degree: "M.S. in Computer Science and Engineering",
          school: "University of California San Diego",
          location: "San Diego, CA",
          organizationId: "ucsd",
        },
        {
          period: "SEP 2022 — JUL 2026",
          degree: "B.Eng. in Computer Science and Technology",
          school: "Beijing Forestry University",
          location: "Beijing, China",
          organizationId: "bjfu",
          honors: [
            "National First Prize, Multimedia Application Competition",
            "Silver Award, University ACM Programming Competition (2024)",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "TECHNICAL SYSTEM",
      title: "Tools for building and evaluating reliable AI systems.",
      groups: [
        {
          label: "Languages",
          items: ["Python", "TypeScript", "JavaScript", "SQL"],
        },
        {
          label: "Agent & Evals",
          items: ["LLM-as-a-Judge", "Function calling", "CodeAct", "Trajectory RCA", "Multimodal evals", "MCP"],
        },
        {
          label: "Systems & Web",
          items: ["React", "shadcn/ui", "Express.js", "FastAPI", "SSE", "JWT", "SQLite", "Docker"],
        },
        {
          label: "Reliability",
          items: ["Sandboxing", "Schema grading", "Content-addressed cache", "Rate limiting", "Retries & backoff"],
        },
      ],
    },
    research: {
      eyebrow: "SELECTED RESEARCH",
      title: "Research grounded in measurable comparisons.",
      description:
        "Work spanning remote-sensing change detection, clustering optimization, and knowledge-graph construction.",
      publications: [
        {
          index: "01",
          title:
            "FCDNet: A Multiscale Attention Network for Forest Change Detection Using Dual-Temporal Very-High-Resolution Remote Sensing Images",
          venue: "IEEE TGRS · 2025",
          role: "First author",
          result: "F1: 78.51% / 90.48% / 92.57% across three datasets",
          href: "https://doi.org/10.1109/TGRS.2025.3631750",
          linkLabel: "DOI",
        },
        {
          index: "02",
          title: "GCAO: Group-driven Clustering via Gravitational Attraction and Optimization",
          venue: "arXiv · 2025",
          role: "Second author · Project lead",
          result: "Outperformed 11 baselines across NMI, ARI, Homogeneity, and ACC",
          href: "https://arxiv.org/abs/2510.23259",
          linkLabel: "arXiv",
        },
        {
          index: "03",
          title:
            "ForestFoodKG: A Structured Dataset and Knowledge Graph for Forest Food Taxonomy and Nutrition",
          venue: "Foods · 2025",
          role: "Data processing and curation",
          result: "4,492 entities · 14,130 semantic relations",
          href: "https://doi.org/10.3390/foods14244186",
          linkLabel: "DOI",
        },
      ],
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Let’s turn ambitious AI ideas into dependable systems.",
      description:
        "I am looking for Summer 2027 software engineering opportunities across AI applications, agent infrastructure, evaluation, and backend systems.",
      emailLabel: "xiaow1704@gmail.com",
    },
    projectPage: {
      back: "All selected work",
      challenge: "The challenge",
      solution: "The response",
      result: "The outcome",
      stack: "System ingredients",
      next: "Next case study",
    },
    footer: "AI systems, evaluated and engineered end to end.",
  },
  zh: {
    locale: "zh",
    languageLabel: "EN",
    identity: {
      name: "王骏",
      role: "软件工程师 · Agent Runtime 与评测基础设施",
      location: "美国加州圣地亚哥",
      affiliation: "加州大学圣地亚哥分校 · 计算机科学与工程硕士",
      email: "xiaow1704@gmail.com",
      github: "https://github.com/kaikkd",
      linkedin: "https://www.linkedin.com/in/jun-wang-a258513b5/",
    },
    meta: {
      title: "王骏 — Agent Runtime 与评测工程师",
      description: "专注 Agent Runtime、评测基础设施和全栈 AI 系统的软件工程师。",
    },
    notice: "",
    nav: {
      work: "作品",
      about: "关于",
      experience: "经历",
      research: "研究",
      contact: "联系",
      menu: "菜单",
    },
    hero: {
      status: "正在寻找 2027 年暑期软件工程机会",
      kicker: "个人档案 / 2026",
      title: "Agent Runtime、评测基础设施与全栈 AI 系统。",
      description:
        "在字节跳动 Seed 使用 Python 与 TypeScript 交付 8 个 LLM、VLM 与 Agent 评测及产品项目。",
      viewWork: "查看精选项目",
      contact: "和我聊聊",
    },
    signal: {
      label: "精选工程指标",
      items: ["8 个评测与产品项目", "5,106 个 BFCL v4 用例", "23,300 个视频 Case", "80K → 18K Token"],
    },
    work: {
      eyebrow: "精选系统",
      title: "让 Agent 的每一步都可被检查。",
      description:
        "从评测基础设施、自主编程 Runtime 到可靠的规划产品，每个系统都围绕明确的失败模式设计。",
      viewCase: "查看完整案例",
    },
    projects: projects.zh,
    about: {
      eyebrow: "工程方法 / 04",
      title: "连接模型行为、工程基础设施与产品界面。",
      paragraphs: [
        "我是一名专注 AI 产品中间层的软件工程师：用 Runtime 协调工具，用评测系统解释失败，也用交互界面让用户理解系统状态。",
        "我的经历覆盖字节跳动 Seed Agent 工程、面向生产的全栈系统、计算机视觉与机器学习研究。我关注如何在概率模型周围建立确定性的工程边界。",
      ],
      principles: [
        {
          index: "01",
          title: "Runtime 可靠性",
          text: "类型化工具、沙箱执行、自动重试、并发、流式输出与确定性降级。",
        },
        {
          index: "02",
          title: "评测与诊断",
          text: "Benchmark、轨迹归因、失败分类、RCA 与可验证的发布依据。",
        },
        {
          index: "03",
          title: "全栈交付",
          text: "以 Python、FastAPI 构建后端，以 React、TypeScript 实现产品体验。",
        },
      ],
    },
    experience: {
      eyebrow: "实习经历",
      title: "在研究与生产环境中构建 AI 系统。",
      roles: [
        {
          period: "2025.08 — 2026.07",
          role: "大模型评测实习生（Agent 工程）",
          company: "字节跳动 Seed",
          location: "中国北京",
          organizationId: "bytedance",
          highlights: [
            "交付 8 个 LLM/VLM/Agent 评测与产品项目，贡献 +10,226/−4,387 行代码、合并 18 个 MR、评审 19 个 MR，推动 4 个评测集随平台两个版本发布。",
            "负责 2,505 题多轮 LLM-as-a-Judge 流水线并接入 5,106 个 BFCL v4 用例，通过确定性判分与并发调优将 BFCL 耗时由 72 降至 34 小时。",
            "构建 63 题 CodeAct Harness，通过隔离 Session、限流感知重试、随机抖动与异步轮询将真实飞书环境执行由 10 小时降至 2 小时。",
            "设计带 80K→18K Token 压缩和 SQLite 内容寻址缓存的四阶段轨迹 RCA，覆盖 16 个模型、产出 20 份报告并获得 97 次内部运行。",
            "完成 23,300 个流式视频 Case 评测且错误率低于 5%，并跨 3 个仓库、76 次提交独立交付 React/shadcn 与 Express.js 产品。",
          ],
        },
        {
          period: "2024.10 — 2024.12",
          role: "AI 算法工程实习生",
          company: "LargeV Instrument Corp.",
          location: "中国北京",
          organizationId: "largev",
          highlights: [
            "清洗并标准化 5,000 张私有口腔扫描图像，移除 10%+ 标注冲突样本。",
            "将牙齿分割/分类方案由 YOLOv8 迁移至 YOLOv10，测试集 F1 提升 13.7%。",
            "将模型预标注接入标注平台，日吞吐由 100 张提升至 500 张。",
          ],
        },
      ],
      educationLabel: "教育经历",
      education: [
        {
          period: "2026.09 — 2027.12",
          degree: "计算机科学与工程硕士",
          school: "加州大学圣地亚哥分校",
          location: "美国加州圣地亚哥",
          organizationId: "ucsd",
        },
        {
          period: "2022.09 — 2026.07",
          degree: "计算机科学与技术工学学士",
          school: "北京林业大学",
          location: "中国北京",
          organizationId: "bjfu",
          honors: ["全国多媒体应用竞赛一等奖", "校 ACM 程序设计竞赛银奖（2024）"],
        },
      ],
    },
    skills: {
      eyebrow: "技术能力",
      title: "构建并评测可靠 AI 系统的工程工具。",
      groups: [
        {
          label: "编程语言",
          items: ["Python", "TypeScript", "JavaScript", "SQL"],
        },
        {
          label: "Agent 与评测",
          items: ["LLM-as-a-Judge", "函数调用", "CodeAct", "轨迹 RCA", "多模态评测", "MCP"],
        },
        {
          label: "系统与 Web",
          items: ["React", "shadcn/ui", "Express.js", "FastAPI", "SSE", "JWT", "SQLite", "Docker"],
        },
        {
          label: "可靠性",
          items: ["沙箱隔离", "Schema 判分", "内容寻址缓存", "限流", "重试与指数退避"],
        },
      ],
    },
    research: {
      eyebrow: "精选研究",
      title: "以可衡量的比较验证研究成果。",
      description: "覆盖遥感变化检测、聚类优化与知识图谱构建的研究工作。",
      publications: [
        {
          index: "01",
          title: "FCDNet：面向双时相超高分辨率遥感影像的多尺度注意力变化检测网络",
          venue: "IEEE TGRS · 2025",
          role: "第一作者",
          result: "三个数据集 F1：78.51% / 90.48% / 92.57%",
          href: "https://doi.org/10.1109/TGRS.2025.3631750",
          linkLabel: "DOI",
        },
        {
          index: "02",
          title: "GCAO：基于群体引力与优化的聚类算法",
          venue: "arXiv · 2025",
          role: "第二作者 · 项目主导",
          result: "在 NMI、ARI、Homogeneity、ACC 上超过 11 种基线",
          href: "https://arxiv.org/abs/2510.23259",
          linkLabel: "arXiv",
        },
        {
          index: "03",
          title: "ForestFoodKG：森林食物分类与营养知识图谱数据集",
          venue: "Foods · 2025",
          role: "数据处理与整理",
          result: "4,492 个实体 · 14,130 条语义关系",
          href: "https://doi.org/10.3390/foods14244186",
          linkLabel: "DOI",
        },
      ],
    },
    contact: {
      eyebrow: "联系方式",
      title: "一起把有挑战的 AI 想法变成可靠系统。",
      description:
        "我正在寻找 2027 年暑期软件工程机会，方向包括 AI 应用、Agent 基础设施、评测与后端系统。",
      emailLabel: "xiaow1704@gmail.com",
    },
    projectPage: {
      back: "返回精选项目",
      challenge: "问题与挑战",
      solution: "方案与实现",
      result: "结果与影响",
      stack: "系统技术栈",
      next: "下一个案例",
    },
    footer: "从评测到实现，端到端构建可靠 AI 系统。",
  },
};

export const locales = Object.keys(content) as Locale[];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
