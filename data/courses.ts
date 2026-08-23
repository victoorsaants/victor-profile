import type { CourseGroup } from "@/lib/types";

export const courseGroups: CourseGroup[] = [
  {
    id: "dio",
    institution: "Digital Innovation One",
    logo: "/images/institutions/dio.png",
    summary: "Bootcamps focados em lógica, dados e inteligência artificial.",
    courses: [
      {
        id: "logica-programacao",
        title: "Blip - Lógica de Programação",
        year: "2026",
        hours: "27h",
        partner: "Blip",
        description: "Bootcamp de lógica de programação em parceria com a Blip.",
      },
      {
        id: "nexa-ml-genai",
        title: "Nexa - Machine Learning e GenAI na Prática",
        year: "2026",
        hours: "10h",
        partner: "AWS",
        description: "Curso prático de machine learning e GenAI, powered by AWS.",
      },
    ],
  },
  {
    id: "estudonauta",
    institution: "Estudonauta",
    logo: "/images/institutions/estudonauta-mark.png",
    summary: "Certificados de programação em videoaulas, com validação pública no site da plataforma.",
    courses: [
      {
        id: "programacao-basica-m00",
        title: "Programação Básica: Módulo 00, Primeiros Passos",
        year: "2025",
        hours: "20h",
        description:
          "Curso concluído em videoaulas, com aproveitamento acima de 70%. Código do certificado: 3098-AD83-7.",
        credentialUrl:
          "https://estudonauta.com/certificates/certificado-20h/?course_id=44419&cert-nonce=d31a16fc93",
      },
    ],
  },
  {
    id: "curso-em-video",
    institution: "Curso em Vídeo",
    logo: "/images/institutions/curso-em-video.png",
    summary: "Base de programação, banco de dados, infraestrutura e segurança.",
    courses: [
      {
        id: "seguranca-informacao",
        title: "Segurança da Informação: Módulo 00",
        year: "2023",
        hours: "20h",
        description: "Fundamentos de segurança da informação em videoaula.",
      },
      {
        id: "java-poo",
        title: "Java POO",
        year: "2023",
        hours: "40h",
        description: "Programação orientada a objetos com Java.",
      },
      {
        id: "mysql",
        title: "MySQL",
        year: "2023",
        hours: "40h",
        description: "Banco de dados relacional com MySQL.",
      },
      {
        id: "linux",
        title: "Linux",
        year: "2022",
        hours: "40h",
        description: "Fundamentos do sistema operacional Linux.",
      },
    ],
  },
  {
    id: "udemy",
    institution: "Udemy",
    logo: "/images/institutions/udemy.svg",
    summary: "Cursos e certificados da Udemy. A lista será preenchida em breve.",
    courses: [],
  },
];
