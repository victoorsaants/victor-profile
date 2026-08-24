import type { NavItem } from "@/lib/types";

export const site = {
  name: "João Victor",
  fullName: "João Victor",
  role: "Desenvolvedor de Software",
  greeting: "Olá, eu sou",
  headline:
    "Desenvolvo automações e aplicações web com foco em reduzir trabalho manual e melhorar a experiência de quem usa o sistema.",
  location: "Sergipe, Brasil",
  email: "dev.victor77@gmail.com",
  github: "https://github.com/victoorsaants",
  linkedin: "https://www.linkedin.com/in/joão-victor-18b214326/",
  /** Somente dígitos, com DDI e DDD. Ex.: "5579999998888". Vazio esconde o botão. */
  whatsapp: "5579981295487",
  about: {
    intro:
      "Sou desenvolvedor de software e comecei em TI pelo suporte, no mesmo escritório de advocacia onde hoje atuo com automação. Cursando Análise e Desenvolvimento de Sistemas na Unit, construo aplicações web e rotinas que deixam o trabalho do dia a dia mais simples.",
    interests:
      "Automação de processos, desenvolvimento web e sistemas bem estruturados. Gosto de transformar rotinas repetitivas em fluxos claros, do frontend ao backend.",
    technologies:
      "No dia a dia uso Python, FastAPI e n8n para automações, além de React, Next.js e TypeScript no frontend. Para dados, trabalho com PostgreSQL, MySQL e Supabase.",
    workingStyle:
      "Prefiro código claro, iteração constante e atenção a quem usa o produto. A passagem pelo suporte me ensinou a entender o problema real antes de automatizar.",
    goals:
      "Seguir evoluindo como desenvolvedor, aprofundar automação e contribuir com produtos que façam diferença no cotidiano das pessoas.",
  },
  contact: {
    title: "Vamos construir algo juntos?",
    description:
      "Aberto a conversas sobre projetos, oportunidades e colaborações. Fale comigo por email, LinkedIn ou WhatsApp.",
  },
  seo: {
    title: "João Victor | Desenvolvedor de Software",
    description:
      "Portfólio de João Victor, desenvolvedor de software. Projetos, automações, habilidades e formas de contato.",
    url: "https://example.com",
  },
} as const;

export const navItems: NavItem[] = [
  { href: "#sobre", label: "Sobre mim" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#cursos", label: "Cursos" },
  { href: "#contato", label: "Contato" },
];
