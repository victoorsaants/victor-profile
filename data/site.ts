import type { NavItem } from "@/lib/types";

export const site = {
  name: "Victor",
  fullName: "Victor",
  role: "Desenvolvedor de Software",
  greeting: "Olá, eu sou",
  headline:
    "[placeholder] Desenvolvo aplicações modernas, escaláveis e focadas em oferecer boas experiências aos usuários.",
  location: "[placeholder] Localização a definir",
  email: "contato@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  whatsapp: "",
  about: {
    intro:
      "[placeholder] Sou desenvolvedor de software e esta seção apresentará, em breve, um resumo real da minha trajetória. O texto atual é provisório e será substituído.",
    interests:
      "[placeholder] Áreas de interesse: desenvolvimento web, interfaces cuidadosas e sistemas bem estruturados. Detalhes reais serão adicionados aqui.",
    technologies:
      "[placeholder] Trabalho com um conjunto moderno de tecnologias de frontend e backend. A lista completa está na seção de skills e pode ser ajustada.",
    workingStyle:
      "[placeholder] Prefiro código claro, iteração constante e atenção à experiência da pessoa que usa o produto. Esta descrição será refinada com a forma de trabalhar real.",
    goals:
      "[placeholder] Objetivo profissional a definir — por exemplo, contribuir com produtos de impacto e continuar evoluindo como engenheiro.",
  },
  contact: {
    title: "Vamos construir algo juntos?",
    description:
      "[placeholder] Aberto a conversas sobre projetos, oportunidades e colaborações. Substitua este texto e os links pelos canais reais de contato.",
  },
  seo: {
    title: "Victor | Desenvolvedor de Software",
    description:
      "[placeholder] Portfólio de Victor, desenvolvedor de software. Projetos, habilidades e formas de contato.",
    url: "https://example.com",
  },
} as const;

export const navItems: NavItem[] = [
  { href: "#sobre", label: "Sobre mim" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];
