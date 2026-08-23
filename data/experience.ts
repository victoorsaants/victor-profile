import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    id: "dev-junior",
    year: "2026",
    period: "jan/2026 — atual · 7 meses",
    title: "Desenvolvedor Júnior",
    company: "Escritório de advocacia",
    description:
      "Após o período no suporte, passei a compor o time de desenvolvimento, atuando na criação e manutenção de automações que reduzem trabalho manual nas rotinas jurídicas e administrativas.",
    highlights: [
      "RPA e automação de processos",
      "Desenvolvimento de rotinas internas",
      "Integração com sistemas do escritório",
    ],
    current: true,
  },
  {
    id: "suporte-ti",
    year: "2024",
    period: "jul/2024 — jan/2026 · 1 ano e 6 meses",
    title: "Suporte de TI",
    company: "Escritório de advocacia",
    description:
      "Primeira experiência na área de TI, dando suporte diário aos usuários do escritório e cuidando da infraestrutura, dos equipamentos e do fluxo de atendimento.",
    highlights: [
      "Sistema de abertura de chamados",
      "Gestão de estoque de equipamentos",
      "Redes e infraestrutura",
      "Atendimento ao usuário",
    ],
  },
];
