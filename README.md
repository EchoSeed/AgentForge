# ⚗️ Philosopher's Stone v4

**AI Agent Markdown Forge** — Dual-Register · Triple-Mode · Semantic Taxonomy · EchoSeed v4.2

Transmutes raw text (research, docs, specs, code, conversations) into structured `SKILL.md` files for AI agents. Runs a six-stage analysis pipeline powered by Claude, producing machine-readable knowledge artifacts with prime-number-constrained extraction depths.

---

## Features

- **Dual-Register Extraction** — pulls concepts with both a technical definition and a plain-language explanation
- **Triple-Mode Elaboration** — enriches each concept with decision logic, an analogy, and a non-obvious insight
- **Semantic Taxonomy** — builds index terms, semantic clusters, and a density map
- **Compress / Expand** — distills a core thesis and glossary from the concept set
- **Meta-Analysis** — profiles complexity, coverage score, blind spots, and recommendations
- **Skill Forge** — synthesises all pipeline outputs into a single `SKILL.md` with Python code blocks and reference tables
- **Parallel execution** where stages have no dependencies on each other
- **JSON repair heuristic** for robust LLM output parsing
- **Server-side API proxy** — your `ANTHROPIC_API_KEY` never leaves the server

---

## Project Structure

```
AgentForge/
├── components/
│   └── PhilosophersStone.jsx   # Full pipeline UI (three-panel layout)
├── pages/
│   ├── _app.js                 # Global head + CSS reset
│   ├── index.js                # Entry point
│   └── api/
│       └── claude.js           # Server-side Anthropic proxy
├── .env.local.example          # Environment variable template
├── next.config.js
└── package.json
```

---

## Getting Started

### 1. Clone & install

```bash
git clone https://github.com/EchoSeed/AgentForge.git
cd AgentForge
npm install
```

### 2. Configure your API key

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
ANTHROPIC_API_KEY=sk-ant-...
```

> Your key is only read server-side in `pages/api/claude.js` and is never exposed to the browser.

### 3. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Pipeline Stages

| # | Stage | Icon | Depends on | Output |
|---|-------|------|------------|--------|
| 1 | Dual-Register Extraction | ⚗️ | — | 17 concept objects with `technical` + `plain` fields |
| 2 | Triple-Mode Elaboration | 🔬 | `dual_extract` | Decision logic, analogy, insight per concept |
| 3 | Semantic Taxonomy | 🗂️ | `dual_extract` | 11 index terms, 7 clusters, density map |
| 4 | Compress / Expand | 💎 | `dual_extract` | 5-sentence thesis + 13-entry glossary |
| 5 | Meta-Analysis | 📡 | — | Complexity profile, coverage score, blind spots |
| 6 | Skill Forge | 🛠️ | `dual_extract`, `semantic_index`, `compress_expand` | `SKILL.md` markdown file |

Stages 2 & 3 run in parallel. Stages 5 & 6 run in parallel.

---

## UI Layout

```
┌──────────────┬──────────────────────────┬──────────────────┐
│  LEFT PANEL  │      CENTER PANEL        │   RIGHT PANEL    │
│              │                          │                  │
│ Source text  │ Pipeline progress cards  │  SKILL.md output │
│ Stage toggle │ (click DONE to expand)   │  (copy button)   │
│ Run button   │ Pipeline log             │                  │
└──────────────┴──────────────────────────┴──────────────────┘
```

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | Yes | Your Anthropic API key (`sk-ant-...`) |

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm start` | Start production server |

---

## Tech Stack

- [Next.js 14](https://nextjs.org/) — framework + API routes
- [React 18](https://react.dev/) — UI
- [Claude](https://anthropic.com) (`claude-sonnet-4-20250514`) — analysis engine

---

## License

MIT © 2026 EchoSeed
