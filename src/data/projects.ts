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
    id: "tradeos-framework",
    slug: "tradeos-framework",
    title: "TradeOS Framework",
    description:
      "Algorithmic trading system using Hidden Markov Models for market pattern recognition — integrated with MetaTrader 5 and Claude AI for intelligent trade execution.",
    longDescription:
      "TradeOS is a full-stack algorithmic trading framework that combines statistical machine learning (Hidden Markov Models) with AI decision-making. The system connects MetaTrader 5 for real-time market data and execution, a FastAPI backend for signal processing, and Claude AI for contextual trade reasoning beyond pure statistics.",
    highlights: [
      "Hidden Markov Models for detecting latent market regimes (trend, consolidation, reversal)",
      "Real-time integration with MetaTrader 5 via Python bridge",
      "Claude AI layer for contextual risk assessment and execution approval",
      "ASP.NET dashboard for monitoring positions, P&L, and model confidence",
      "PostgreSQL for trade history, model states, and performance analytics",
    ],
    challenges:
      "Synchronizing real-time market data with HMM state inference while keeping latency low enough for meaningful execution — and designing the Claude AI prompt layer to reason about risk without overriding statistical signals.",
    outcome:
      "A production-grade trading framework that demonstrates the intersection of quantitative finance, machine learning, and AI reasoning — one of the most technically complex personal projects built independently.",
    tech: ["Python", "FastAPI", "React", "ASP.NET", "PostgreSQL", "Claude AI", "MetaTrader 5"],
    github: "https://github.com/asisrasyid/-tradeos-framework",
    featured: true,
  },
  {
    id: "finance-app",
    slug: "finance-app",
    title: "Finance App",
    description:
      "PWA for personal finance — transactions, budgeting, and savings planning. Works fully offline with background sync.",
    longDescription:
      "A Progressive Web App built for daily personal finance management. Tracks income and expenses, supports budget planning per category, and includes savings goal tracking. Designed to work offline-first — all data is available without internet, synced when connection is restored.",
    highlights: [
      "Full offline support via Service Worker and IndexedDB caching",
      "Transaction categorization with visual budget tracking",
      "Savings goal planner with progress visualization",
      "Installable as a native-like app on iOS and Android",
    ],
    challenges:
      "Implementing reliable offline-first data sync without conflicts, and designing a UI that feels native on both mobile and desktop without a framework dependency.",
    outcome:
      "A fully functional finance tracker used for daily personal finance management, demonstrating deep JavaScript and PWA capability without heavy dependencies.",
    tech: ["PWA", "JavaScript", "CSS", "Service Worker", "IndexedDB"],
    github: "https://github.com/asisrasyid/updat-mobile-app-fn",
    live: "https://updat-mobile-app-fn.vercel.app",
    featured: true,
  },
  {
    id: "todo-simple",
    slug: "todo-simple",
    title: "Todo Simple",
    description:
      "Minimalist productivity app with Google Apps Script sync — clean UI, fast, and always in sync across devices.",
    longDescription:
      "A minimalist task management app built with Next.js and TypeScript. Focuses on speed and simplicity — no friction, just tasks. Syncs with Google Sheets via Google Apps Script as a lightweight backend, making it free to run and easy to extend.",
    highlights: [
      "Google Apps Script integration for free cloud sync",
      "Instant add/complete/delete with optimistic UI updates",
      "Clean, distraction-free interface built with Tailwind",
      "Persistent state — tasks survive page refresh and device switches",
    ],
    challenges:
      "Keeping the sync layer with Google Apps Script responsive enough to feel instant, while handling rate limits and network failures gracefully.",
    outcome:
      "A daily-use productivity tool that proves you don't need a complex backend to build something genuinely useful — and a good demonstration of full-stack thinking with minimal infrastructure.",
    tech: ["Next.js", "TypeScript", "Google Apps Script", "Tailwind CSS"],
    github: "https://github.com/asisrasyid/todoapps-simple",
    live: "https://todoapps-simple.vercel.app",
    featured: true,
  },
  {
    id: "local-claude-chat",
    slug: "local-claude-chat",
    title: "Local Claude Chat",
    description:
      "A local Next.js workspace that auto-loads project context and connects to Claude API — a personal AI co-pilot for development decisions.",
    longDescription:
      "Built as a personal tool to replace scattered note-taking with structured, contextual AI discussions. Every conversation auto-loads the current sprint, stack decisions, and project context — so Claude always knows exactly where the project stands.",
    highlights: [
      "Auto-loads .agent/context.md, snap.md, and decisions.md before each session",
      "SheetMaster SDK integration — Claude knows your current sprint tasks",
      "Persistent conversation history per project",
      "Markdown-rendered responses with code syntax highlighting",
    ],
    challenges:
      "Designing a context injection system that stays under Claude's context window while including all relevant project state — prioritizing snap.md freshness over log history.",
    outcome:
      "Every architectural decision is now discussed with full project context. Eliminated 10+ minutes of re-explaining project background — Claude already knows everything.",
    tech: ["Next.js", "TypeScript", "Anthropic API", "Tailwind CSS"],
    github: "https://github.com/asisrasyid/local-claude-chat",
    featured: false,
  },
  {
    id: "telegram-task-bot",
    slug: "telegram-task-bot",
    title: "Telegram Task Bot",
    description:
      "Telegram bot for AI-assisted task management — create, track, and update project tasks via chat using Claude and SheetMaster SDK.",
    longDescription:
      "Eliminates context-switching by letting you manage your entire project board without leaving Telegram. Integrates with SheetMaster SDK, supports natural language task creation via /task-claude, and keeps your sprint always up to date.",
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
    tech: ["Node.js", "Telegraf", "Anthropic API", "SheetMaster SDK", "Railway"],
    github: "https://github.com/asisrasyid/telegram-task-bot",
    featured: false,
  },
  {
    id: "sheetmaster-sdk",
    slug: "sheetmaster-sdk",
    title: "SheetMaster SDK",
    description:
      "JavaScript/TypeScript SDK for SheetMaster — a Google Sheets-based project management API. Simplifies board, task, and subtask operations for any Node.js app.",
    longDescription:
      "SheetMaster uses Google Sheets as a lightweight project management backend. This SDK wraps the raw API into a clean, typed interface — making it easy to integrate board and task management into any tool: bots, CLIs, web apps, or AI agents.",
    highlights: [
      "Typed methods for all SheetMaster actions: getBoards, getBoard, createTask, moveTask, updateSubTask",
      "Handles redirect-based Google Apps Script authentication automatically",
      "Used by Telegram Task Bot and Local Claude Chat internally",
      "Zero dependencies beyond Node.js built-ins",
    ],
    challenges:
      "Google Apps Script redirects POST requests to GET — the SDK needed a custom HTTP client that follows redirects correctly without losing the request body.",
    outcome:
      "Reusable across all personal projects — any tool can now integrate SheetMaster in minutes instead of re-implementing the HTTP layer from scratch.",
    tech: ["Node.js", "TypeScript", "Google Apps Script"],
    github: "https://github.com/asisrasyid/sheetmaster-sdk",
    featured: false,
  },
];
