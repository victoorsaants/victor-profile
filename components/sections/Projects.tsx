import Image from "next/image";
import { Github, Globe } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import type { Project } from "@/lib/types";
import styles from "./Projects.module.css";

const statusLabel: Record<Project["status"], string> = {
  placeholder: "Placeholder",
  "in-progress": "Em desenvolvimento",
  shipped: "Publicado",
};

function ProjectThumb({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className={styles.thumb}>
        <Image
          src={project.image}
          alt={`Captura da ${project.title}`}
          fill
          sizes="(max-width: 860px) 100vw, 360px"
        />
      </div>
    );
  }

  return (
    <div className={styles.thumb} style={{ background: project.accent }}>
      <svg viewBox="0 0 320 200" role="img" aria-label={`Thumbnail placeholder de ${project.title}`}>
        <rect width="320" height="200" fill={project.accent} />
        <circle cx="250" cy="36" r="70" fill="rgba(255,255,255,0.12)" />
        <rect x="28" y="48" width="150" height="12" rx="6" fill="rgba(255,255,255,0.35)" />
        <rect x="28" y="74" width="108" height="10" rx="5" fill="rgba(255,255,255,0.2)" />
        <rect x="28" y="128" width="88" height="28" rx="14" fill="rgba(255,255,255,0.16)" />
      </svg>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <ProjectThumb project={project} />
      <div className={styles.body}>
        <div className={styles.meta}>
          <Badge tone="accent">{statusLabel[project.status]}</Badge>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p className={styles.tech}>{project.technologies.join(" • ")}</p>
        <div className={styles.actions}>
          <a
            href={project.demo}
            className={styles.action}
            {...(project.demo.startsWith("http")
              ? { target: "_blank", rel: "noreferrer noopener" }
              : {})}
          >
            <Globe size={16} aria-hidden="true" />
            Ver projeto
          </a>
          <a
            href={project.github}
            className={styles.action}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="section" aria-labelledby="projetos-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="projetos-title"
            number="03"
            eyebrow="Projetos selecionados"
            title="Trabalhos que posso apresentar"
            description="[placeholder] Quatro projetos provisórios. Edite data/projects.ts para trocar nomes, imagens, textos e links."
          />
        </Reveal>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
