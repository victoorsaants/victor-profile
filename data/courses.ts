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
        icon: "/images/certificates/dio-logica-programacao.png",
        credential: "/images/certificates/dio-logica-programacao-certificado.jpg",
        description:
          "Bootcamp de lógica de programação em parceria com a Blip. Código do certificado: HEQXMBWR.",
      },
      {
        id: "nexa-ml-genai",
        title: "Nexa - Machine Learning e GenAI na Prática",
        year: "2026",
        hours: "10h",
        partner: "AWS",
        icon: "/images/certificates/dio-nexa-ml-genai.png",
        credential: "/images/certificates/dio-nexa-ml-genai-certificado.jpg",
        description:
          "Curso prático de machine learning e GenAI, powered by AWS. Código do certificado: 7WCAJSIJ.",
      },
      {
        id: "fundamentos-ia",
        title: "Formação Fundamentos de Inteligência Artificial",
        year: "2026",
        hours: "10h",
        icon: "/images/certificates/dio-fundamentos-ia.png",
        credential: "/images/certificates/dio-fundamentos-ia-certificado.jpg",
        description:
          "Bootcamp de fundamentos de inteligência artificial. Código do certificado: 0IXKEDNE.",
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
        id: "python-mundo-01",
        title: "Linguagem Python 3: Mundo 01, Fundamentos",
        year: "2026",
        hours: "40h",
        credential: "/images/certificates/estudonauta-python-mundo-01-certificado.jpg",
        description:
          "Fundamentos da linguagem Python 3 em videoaulas, com aproveitamento acima de 70%. Código do certificado: 3098-B1B6-5.",
      },
      {
        id: "programacao-basica-m00",
        title: "Programação Básica: Módulo 00, Primeiros Passos",
        year: "2025",
        hours: "20h",
        credential: "/images/certificates/estudonauta-programacao-basica-m00-certificado.jpg",
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
        id: "java-poo",
        title: "Java POO",
        year: "2025",
        hours: "40h",
        credential: "/images/certificates/cev-java-poo-certificado.jpg",
        description: "Programação orientada a objetos com Java. Código do certificado: 3DFB1-645D-1.",
      },
      {
        id: "mysql",
        title: "MySQL",
        year: "2025",
        hours: "40h",
        credential: "/images/certificates/cev-mysql-certificado.jpg",
        description: "Banco de dados relacional com MySQL. Código do certificado: 3DFB1-6573-A.",
      },
      {
        id: "seguranca-informacao",
        title: "Segurança da Informação: Módulo 00",
        year: "2023",
        hours: "20h",
        credential: "/images/certificates/cev-seguranca-informacao-certificado.jpg",
        description:
          "Fundamentos de segurança da informação em videoaula. Código do certificado: 3DFB1-277D4-9.",
      },
      {
        id: "hardware",
        title: "Hardware",
        year: "2023",
        hours: "20h",
        credential: "/images/certificates/cev-hardware-certificado.jpg",
        description: "Fundamentos de hardware em videoaula. Código do certificado: 3DFB1-6616-8.",
      },
      {
        id: "linux",
        title: "Linux",
        year: "2022",
        hours: "40h",
        credential: "/images/certificates/cev-linux-certificado.jpg",
        description:
          "Fundamentos do sistema operacional Linux. Código do certificado: 3DFB1-6B78-3.",
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
