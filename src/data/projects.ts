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
];
