---
name: Jun Wang
target_role: Software Engineer — Agent Runtime & Evals Infrastructure
target_cycle: Summer 2027
status: working-draft
last_updated: 2026-09-13
---

# Jun Wang

San Diego, CA · [xiaow1704@gmail.com](mailto:xiaow1704@gmail.com) · [GitHub](https://github.com/kaikkd)

**Software Engineer specializing in Agent Runtime and Evals Infrastructure.** At ByteDance Seed, delivered eight LLM/VLM/Agent evaluation and product projects spanning LLM-as-a-Judge, function calling, CodeAct, multimodal evaluation, trajectory attribution, concurrent execution, and full-stack AI systems in Python and TypeScript.

## Education

**University of California San Diego** — M.S. in Computer Science and Engineering  
San Diego, CA · Sep 2026 – Dec 2027 (Expected)

**Beijing Forestry University** — B.Eng. in Computer Science and Technology  
Beijing, China · Sep 2022 – Jul 2026  
**Honors:** National First Prize, Multimedia Application Competition; Silver Award, University ACM Programming Competition (2024)

## Experience

**ByteDance, Seed** — LLM Evaluation Intern, Agent Engineering  
Beijing, China · Aug 2025 – Jul 2026

- Delivered eight LLM/VLM/Agent evaluation and product projects in Python and TypeScript, contributing **+10,226/−4,387 lines**, 18 merged MRs, and 19 code reviews; shipped four evaluation suites across two internal platform releases.
- Owned a **2,505-case multi-turn LLM-as-a-Judge pipeline**, implementing rubric-based grading, five-vote aggregation, compliance checks, follow-up evaluation, runtime model configuration, and four-layer retry/exponential-backoff handling.
- Integrated **BFCL v4** with 5,106 function-calling cases across eight capability dimensions and deterministic schema-based grading; isolated memory workloads and tuned parallel execution to reduce end-to-end runtime from 72 to 34 hours.
- Built a 63-case **CodeAct evaluation harness** that executed TypeScript in real Lark Base environments and used an LLM judge; introduced four isolated sessions, rate-limit-aware retries, jitter, and asynchronous export polling to reduce runtime from 10 to 2 hours.
- Designed a four-stage **agent trajectory attribution and RCA system** with deterministic feature extraction, 80K→18K-token long-context compression, fixed taxonomies plus LLM-based dynamic clustering, SQLite content-addressed caching, and layered JSON recovery; produced 20 reports across 16 models and reached 97 internal runs.
- Evaluated 23,300 streaming-video cases across 1,353 videos and 49,979 QA pairs using six semantic, contextual, logical, temporal, and completeness metrics, maintaining an error rate below 5%.
- Independently built a React/TypeScript/shadcn UI and Express.js service across three repositories and 76 commits, covering streamed task progress, MCP tool-call visualization, multi-turn sessions, file/multimodal uploads, and 10+ modules; authored onboarding documentation used by 10+ engineers.

**LargeV Instrument Corp.** — AI Algorithm Engineer Intern  
Beijing, China · Oct 2024 – Dec 2024

- Cleaned and standardized 5,000 private intraoral scan images with automated consistency checks, removing 10%+ label-conflict samples.
- Migrated the dental segmentation/classification pipeline from YOLOv8 to YOLOv10 and applied data augmentation and hyperparameter tuning, improving test-set F1 by 13.7%.
- Integrated model inference into the annotation platform through its API, changing the workflow from manual labeling to model pre-labeling plus human correction and increasing throughput from 100 to 500 images per day.

## Selected Projects

**Code Agent Bot** — Full-stack autonomous coding agent · [GitHub](https://github.com/kaikkd/Code_Agent_Bot)  
Python, FastAPI, React, TypeScript, SQLAlchemy, Docker, pytest · Oct 2025 – Feb 2026

- Built a full-stack coding-agent runtime with Plan–Execute–Reflect–Iterate orchestration, an execution-risk router, typed tool registry, critic-guided retries, and filesystem sandboxing for multi-step tasks.
- Implemented code exploration, regex search, file editing, deletion, and test execution behind typed tool interfaces, with parallel tool execution, event streaming, and failure recovery.
- Shipped REST APIs and a React interface with JWT authentication, persisted conversations, streaming chat, Docker Compose, and automated tests.

**itravel** — Agentic travel planning product · [GitHub](https://github.com/kaikkd/itravel)  
Python, FastAPI, React, TypeScript, SQLModel, Zustand, SSE, Docker · Jun 2026 – Aug 2026

- Built a full-stack planning agent that turns user constraints into structured daily itineraries through a deterministic intent → POI → routing → transit → rendering workflow.
- Streamed status, skeleton, daily-plan, and completion events over SSE; added model-provider switching, token-budget controls, truncated-JSON repair, and deterministic fallbacks for unavailable LLM and map services.
- Designed a single-source-of-truth itinerary state shared by chat, schedule, map, and drag-and-drop editing; added JWT authentication, rate limiting, persistence, and 70 automated backend/frontend tests.

## Selected Publications

- **Jun Wang**, Zongqi Yao, Long Chen, Ruijing Yang, Xiaoli Zhang. “FCDNet: A Multiscale Attention Network for Forest Change Detection Using Dual-Temporal Very-High-Resolution Remote Sensing Images.” *IEEE Transactions on Geoscience and Remote Sensing*, 2025. First author. [DOI](https://doi.org/10.1109/TGRS.2025.3631750)  
  Designed a multiscale feature aggregation and adaptive channel-attention network that achieved F1 scores of 78.51%, 90.48%, and 92.57% on FCD, LEVIR-CD, and WHU-CD.
- Qi Li, **Jun Wang**. “GCAO: Group-driven Clustering via Gravitational Attraction and Optimization.” *arXiv preprint*, 2025. Second author. [arXiv](https://arxiv.org/abs/2510.23259)  
  Led the end-to-end research project and independently designed a group-level gravitational optimization algorithm for high-dimensional, non-uniform clustering; outperformed 11 baselines with average gains of 37.13% NMI, 52.08% ARI, 44.98% Homogeneity, and 38.81% ACC.
- Rongen Yan, Zhidan Chen, Shengqi Zhou, Guoxing Niu, Yan Li, Zehui Liu, **Jun Wang**, et al. “ForestFoodKG: A Structured Dataset and Knowledge Graph for Forest Food Taxonomy and Nutrition.” *Foods*, 2025. [DOI](https://doi.org/10.3390/foods14244186)  
  Performed data processing and curation for a BERT-based named-entity recognition and relation-extraction pipeline supporting a 1,191-record dataset and a Neo4j knowledge graph with 4,492 entities and 14,130 semantic relations.

## Skills

**Languages:** Python, TypeScript, JavaScript, SQL  
**Agent & Evals:** Agent runtime, evaluation infrastructure/harnesses, LLM-as-a-Judge, multi-turn and multimodal evaluation, rubric and deterministic graders, function calling, CodeAct, context engineering, trajectory attribution, RCA/failure taxonomies, long-context compression, benchmarking, MCP, ReAct, RAG  
**ML & Retrieval:** PyTorch, Transformers, PEFT/QLoRA, LangChain, FAISS, BGE embeddings/reranking, BERT, NER, knowledge graphs, YOLO  
**Systems & Web:** Data structures and algorithms, OOP, Unix/Linux, asynchronous/concurrent and parallel programming, data pipelines, React, shadcn/ui, Express.js, FastAPI, SQLAlchemy/SQLModel, SQLite, REST APIs, SSE, JWT authentication, schema validation, sandboxing, content-addressed caching, rate limiting, retry/exponential backoff, Docker, cloud deployment, Git, pytest, Vitest

---

# 王骏

San Diego, CA · [xiaow1704@gmail.com](mailto:xiaow1704@gmail.com) · [GitHub](https://github.com/kaikkd)

**专注 Agent Runtime 与评测基础设施的软件工程师。** 在字节跳动 Seed 交付 8 个 LLM/VLM/Agent 评测与产品项目，覆盖 LLM-as-a-Judge、函数调用、CodeAct、多模态评测、轨迹归因、并发执行及 Python/TypeScript 全栈 AI 系统。

## 教育经历

**加州大学圣地亚哥分校** — 计算机科学与工程硕士  
美国加州圣地亚哥 · 2026.09 – 2027.12（预计）

**北京林业大学** — 计算机科学与技术工学学士  
中国北京 · 2022.09 – 2026.07  
**荣誉：** 全国多媒体应用竞赛一等奖；校 ACM 程序设计竞赛银奖（2024）

## 实习经历

**字节跳动 Seed** — 大模型评测实习生（Agent 工程）  
中国北京 · 2025.08 – 2026.07

- 基于 Python/TypeScript 交付 8 个 LLM/VLM/Agent 评测与产品项目，累计贡献 **+10,226/−4,387 行代码**、合并 18 个 MR、评审 19 个 MR，推动 4 个评测集随内部平台两个版本发布。
- 独立负责 **2,505 题多轮 LLM-as-a-Judge 评测流水线**，实现 Rubric 判分、5 票聚合、内容合规检查、追问评测、运行时模型配置及四层重试/指数退避。
- 接入 **BFCL v4** 的 5,106 个函数调用用例，覆盖 8 个能力维度并采用确定性 Schema 判分；通过隔离 memory 负载与调整并发，将端到端耗时由 72 小时降至 34 小时。
- 构建 63 题 **CodeAct Evaluation Harness**，在真实飞书多维表格环境执行 TypeScript 并由 LLM Judge 评分；通过 4 个独立 Session、限流感知重试、随机抖动和异步导出轮询，将耗时由 10 小时降至 2 小时。
- 独立设计四阶段 **Agent 轨迹归因与 RCA 系统**，实现确定性特征提取、80K→18K Token 长上下文压缩、固定分类与 LLM 动态聚类、SQLite 内容寻址缓存及分层 JSON 恢复，覆盖 16 个模型、产出 20 份报告并获得 97 次内部调用。
- 使用 6 类语义、上下文、逻辑、时序和完整性指标，对 1,353 个流式视频、49,979 个 QA 对完成 23,300 Case 对比评测，Error Rate 控制在 5% 以下。
- 独立完成跨 3 个仓库、76 次提交的 React/TypeScript/shadcn UI 与 Express.js 服务，交付任务进度流式输出、MCP 工具调用可视化、多轮会话、文件/多模态上传等 10+ 模块；沉淀的新人文档被 10+ 工程师使用。

**LargeV Instrument Corp.** — AI 算法工程实习生  
中国北京 · 2024.10 – 2024.12

- 面向 5,000 张私有口腔扫描图像编写一致性校验与格式标准化流程，清理 10%+ 标注冲突样本。
- 将牙齿分割/分类方案由 YOLOv8 迁移至 YOLOv10，结合数据增强与超参数调优，将测试集 F1 提升 13.7%。
- 通过标注平台 API 接入模型推理，将纯人工标注改造为“模型预标注 + 人工修正”，标注吞吐由 100 张/天提升至 500 张/天。

## 精选项目

**Code Agent Bot** — 全栈自主编码 Agent · [GitHub](https://github.com/kaikkd/Code_Agent_Bot)  
Python、FastAPI、React、TypeScript、SQLAlchemy、Docker、pytest · 2025.10 – 2026.02

- 构建全栈编码 Agent Runtime，实现 Plan–Execute–Reflect–Iterate 编排、执行风险路由、类型化工具注册、Critic 重试及文件系统沙箱，支持多步骤任务。
- 将代码探索、正则搜索、文件编辑/删除和测试执行封装为类型化工具接口，支持并行工具执行、事件流式展示与失败恢复。
- 交付 REST API 与 React 交互界面，实现 JWT 鉴权、会话持久化、流式对话、Docker Compose 及自动化测试。

**itravel** — Agentic AI 旅行规划产品 · [GitHub](https://github.com/kaikkd/itravel)  
Python、FastAPI、React、TypeScript、SQLModel、Zustand、SSE、Docker · 2026.06 – 2026.08

- 构建全栈规划 Agent，通过“意图—POI—顺路排序—交通—渲染”确定性工作流，将用户约束转化为结构化逐日行程。
- 基于 SSE 流式返回状态、骨架、逐日计划与完成事件；支持模型服务切换、Token 预算、截断 JSON 修复，以及 LLM/地图服务不可用时的确定性降级。
- 设计由对话、日程、地图及拖拽编辑共享的单一事实源状态，补充 JWT 鉴权、登录限流、数据持久化及 70 项前后端自动化测试。

## 精选论文

- **王骏**、姚宗祺、陈龙、杨瑞静、张晓丽：《FCDNet: A Multiscale Attention Network for Forest Change Detection Using Dual-Temporal Very-High-Resolution Remote Sensing Images》，*IEEE Transactions on Geoscience and Remote Sensing*，2025，一作。[DOI](https://doi.org/10.1109/TGRS.2025.3631750)  
  设计多尺度特征聚合与自适应通道注意力网络，在 FCD、LEVIR-CD、WHU-CD 数据集上分别取得 78.51%、90.48%、92.57% 的 F1。
- Qi Li、**王骏**：《GCAO: Group-driven Clustering via Gravitational Attraction and Optimization》，*arXiv preprint*，2025，二作。[arXiv](https://arxiv.org/abs/2510.23259)  
  主导端到端科研工作并独立设计面向高维、非均匀数据的组级引力优化算法；相较 11 种基线，NMI、ARI、Homogeneity、ACC 平均提升 37.13%、52.08%、44.98%、38.81%。
- Rongen Yan、Zhidan Chen、Shengqi Zhou、Guoxing Niu、Yan Li、Zehui Liu、**王骏** 等：《ForestFoodKG: A Structured Dataset and Knowledge Graph for Forest Food Taxonomy and Nutrition》，*Foods*，2025。[DOI](https://doi.org/10.3390/foods14244186)  
  负责 BERT 命名实体识别与关系抽取流程的数据处理和整理，支持构建 1,191 条森林食物数据集及包含 4,492 个实体、14,130 条语义关系的 Neo4j 知识图谱。

## 技能

**编程语言：** Python、TypeScript、JavaScript、SQL  
**Agent 与评测：** Agent Runtime、评测基础设施/Evaluation Harness、LLM-as-a-Judge、多轮与多模态评测、Rubric/确定性 Grader、函数调用、CodeAct、Context Engineering、轨迹归因、RCA/故障分类、长上下文压缩、Benchmark、MCP、ReAct、RAG  
**机器学习与检索：** PyTorch、Transformers、PEFT/QLoRA、LangChain、FAISS、BGE 向量与重排序、BERT、NER、知识图谱、YOLO  
**系统与 Web：** 数据结构与算法、面向对象编程、Unix/Linux、异步/并发/并行编程、数据流水线、React、shadcn/ui、Express.js、FastAPI、SQLAlchemy/SQLModel、SQLite、REST API、SSE、JWT 鉴权、Schema 校验、沙箱隔离、内容寻址缓存、限流、重试/指数退避、Docker、云端部署、Git、pytest、Vitest
