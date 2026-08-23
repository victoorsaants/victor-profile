import type { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [{ name: "Python" }, { name: "FastAPI" }, { name: "Node.js" }],
  },
  {
    id: "database",
    title: "Banco de dados",
    items: [{ name: "PostgreSQL" }, { name: "MySQL" }, { name: "Supabase" }],
  },
  {
    id: "tools",
    title: "Ferramentas",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "n8n" },
      { name: "VS Code" },
      { name: "Cursor" },
      { name: "Claude Code" },
    ],
  },
];
