import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "projeto-01",
    title: "[placeholder] Nome do projeto 01",
    description:
      "[placeholder] Descrição curta do projeto e do problema que ele resolve. Substitua este texto, as tecnologias e os links quando o projeto real estiver pronto.",
    technologies: ["React", "Next.js", "TypeScript", "FastAPI"],
    github: "https://github.com/",
    demo: "#projetos",
    status: "placeholder",
    featured: true,
    accent: "#c45c26",
  },
  {
    id: "projeto-02",
    title: "Landing Page Join",
    description:
      "Landing page do e-book da JOIN sobre controladoria jurídica, feita em HTML, CSS e JavaScript, com foco em apresentar a oferta e converter visitantes.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/victoorsaants/Join",
    demo: "https://join-sigma.vercel.app/",
    status: "shipped",
    accent: "#3d6b5a",
  },
  {
    id: "projeto-03",
    title: "[placeholder] Nome do projeto 03",
    description:
      "[placeholder] Descrição curta do terceiro projeto. Use este espaço para destacar uma decisão técnica ou um aprendizado.",
    technologies: ["Next.js", "Node.js", "Supabase"],
    github: "https://github.com/",
    demo: "#projetos",
    status: "placeholder",
    accent: "#4a5d8a",
  },
  {
    id: "projeto-04",
    title: "Sistema DME (RPG)",
    description:
      "Sistema DME para RPG, com frontend em React e Vite, backend em Python e FastAPI, e banco de dados no Supabase.",
    technologies: ["React", "Vite", "Python", "FastAPI", "Supabase"],
    github: "https://github.com/dmecdt/DME-System",
    demo: "https://policiadme.com/login",
    status: "shipped",
    accent: "#8a5a3c",
  },
];
