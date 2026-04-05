export type TechItem = {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "ai" | "devops" | "dotnet";
};

export const stack: TechItem[] = [
  // Frontend
  { name: "Next.js",        icon: "logos:nextjs-icon",          category: "frontend" },
  { name: "React",          icon: "logos:react",                category: "frontend" },
  { name: "TypeScript",     icon: "logos:typescript-icon",      category: "frontend" },
  { name: "JavaScript",     icon: "logos:javascript",           category: "frontend" },
  { name: "jQuery",         icon: "logos:jquery",               category: "frontend" },
  { name: "Tailwind CSS",   icon: "logos:tailwindcss-icon",     category: "frontend" },
  // Backend / .NET
  { name: "C#",             icon: "logos:c-sharp",              category: "dotnet"   },
  { name: ".NET / ASP.NET", icon: "logos:dotnet",               category: "dotnet"   },
  { name: "Node.js",        icon: "logos:nodejs-icon",          category: "backend"  },
  { name: "Python",         icon: "logos:python",               category: "backend"  },
  { name: "FastAPI",        icon: "logos:fastapi-icon",         category: "backend"  },
  // Database
  { name: "SQL Server",     icon: "simple-icons:microsoftsqlserver", category: "backend" },
  { name: "PostgreSQL",     icon: "logos:postgresql",           category: "backend"  },
  // AI & Tools
  { name: "Claude API",     icon: "simple-icons:anthropic",     category: "ai"       },
  { name: "Docker",         icon: "logos:docker-icon",          category: "devops"   },
  { name: "GitHub",         icon: "logos:github-icon",          category: "devops"   },
];
