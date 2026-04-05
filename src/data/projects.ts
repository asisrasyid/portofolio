export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
  challenges: string;
  outcome: string;
  tech: string[];
  github: string;
  live?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "finance-ai-agent",
    slug: "finance-ai-agent",
    title: "Finance AI Agent",
    description:
      "AI-powered personal finance analyzer — turns raw transaction data into actionable insights via natural language conversation with Claude.",
    longDescription:
      "Built with Python, Anthropic Claude API, and Streamlit. Replaces manual spreadsheet analysis with a conversational AI interface that understands context, flags anomalies, and provides personalized financial recommendations.",
    highlights: [
      "Natural language query over personal transaction data",
      "Automatic anomaly detection and spending pattern analysis",
      "Claude-powered recommendations tailored to user's financial habits",
      "CSV/Excel import — zero manual data entry",
    ],
    challenges:
      "Structuring unstructured financial data into a format Claude could reason about accurately, while keeping the context window efficient across large transaction histories.",
    outcome:
      "Reduced manual finance review time from ~2 hours/month to under 10 minutes. Demonstrated how Claude can serve as a domain-specific analyst with the right context engineering.",
    tech: ["Python", "Anthropic API", "Streamlit", "Pandas"],
    github: "https://github.com/muhammadazis/finance-ai-agent",
    live: "https://finance-ai-agent.streamlit.app",
    featured: true,
  },
  {
    id: "telegram-task-bot",
    slug: "telegram-task-bot",
    title: "Telegram Task Bot",
    description:
      "Telegram bot for AI-assisted task management — create, track, and update project tasks via chat commands powered by Claude.",
    longDescription:
      "Eliminates context-switching by letting you manage your entire project board without leaving Telegram. Integrates with SheetMaster API, supports natural language task creation via /task-claude, and keeps your sprint always up to date.",
    highlights: [
      "/task-claude — describe in plain language, Claude creates structured task + subtasks",
      "/snap — instant project status summary in chat",
      "/boards, /done — full board management from Telegram",
      "Deployed on Railway with zero-downtime restarts",
    ],
    challenges:
      "Maintaining conversation context within Telegram's stateless message model while giving Claude enough project context to create meaningful, actionable tasks.",
    outcome:
      "Task creation time dropped from 3-5 minutes to under 30 seconds. Now used daily as the primary interface for sprint management.",
    tech: ["Node.js", "Telegraf", "Anthropic API", "Railway"],
    github: "https://github.com/muhammadazis/telegram-task-bot",
    featured: true,
  },
  {
    id: "local-claude-chat",
    slug: "local-claude-chat",
    title: "Local Claude Chat",
    description:
      "A local Next.js workspace that auto-loads project context and connects to Claude API — a personal AI co-pilot for development discussions.",
    longDescription:
      "Always-on AI context: every conversation knows your current sprint, stack, and decisions. Built as a personal tool to replace scattered note-taking with structured, contextual AI discussions that inform real decisions.",
    highlights: [
      "Auto-loads .agent/context.md, snap.md, and decisions.md before each session",
      "SheetMaster integration — Claude knows your current sprint tasks",
      "Persistent conversation history per project",
      "Markdown-rendered responses with code highlighting",
    ],
    challenges:
      "Designing a context injection system that stays under Claude's context window while including all the relevant project state — prioritizing snap.md freshness over log history.",
    outcome:
      "Every architectural decision is now discussed with full project context. Reduced re-explaining project background from 10+ minutes to 0 — Claude already knows everything.",
    tech: ["Next.js", "TypeScript", "Anthropic API", "Tailwind CSS"],
    github: "https://github.com/muhammadazis/local-claude-chat",
    featured: true,
  },
];
