export type TechItem = {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "ai" | "devops";
};

export const stack: TechItem[] = [
  { name: "Next.js",       icon: "logos:nextjs-icon",        category: "frontend" },
  { name: "React",         icon: "logos:react",              category: "frontend" },
  { name: "TypeScript",    icon: "logos:typescript-icon",    category: "frontend" },
  { name: "Tailwind CSS",  icon: "logos:tailwindcss-icon",   category: "frontend" },
  { name: "Node.js",       icon: "logos:nodejs-icon",        category: "backend"  },
  { name: "Python",        icon: "logos:python",             category: "backend"  },
  { name: "PostgreSQL",    icon: "logos:postgresql",         category: "backend"  },
  { name: "Claude API",    icon: "simple-icons:anthropic",   category: "ai"       },
  { name: "Docker",        icon: "logos:docker-icon",        category: "devops"   },
  { name: "GitHub",        icon: "logos:github-icon",        category: "devops"   },
];
