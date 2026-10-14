"use client";

import { ChevronLeft, ChevronRight, Github, Globe, Images } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
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

function coverFor(project: Project) {
  return project.image ?? project.screenshots?.[0]?.src;
}

function ProjectThumb({ project }: { project: Project }) {
  const cover = coverFor(project);

  if (cover) {
    return (
      <div className={styles.thumb}>
        <Image
          src={cover}
          alt={`Captura da ${project.title}`}
          fill
          sizes="(max-width: 620px) 100vw, 360px"
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

function ProjectCard({
  project,
  onOpenScreenshots,
}: {
  project: Project;
  onOpenScreenshots: (project: Project) => void;
}) {
  const screenshots = project.screenshots ?? [];

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
          {screenshots.length > 0 ? (
            <button
              type="button"
              className={styles.action}
              onClick={() => onOpenScreenshots(project)}
            >
              <Images size={16} aria-hidden="true" />
              Ver telas
            </button>
          ) : null}
          {project.demo ? (
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
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              className={styles.action}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [gallery, setGallery] = useState<{ project: Project; index: number } | null>(null);
  const screenshots = gallery?.project.screenshots ?? [];
  const current = gallery ? screenshots[gallery.index] : null;

  useEffect(() => {
    if (!gallery) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setGallery((value) => {
          if (!value?.project.screenshots?.length) {
            return value;
          }

          return {
            ...value,
            index: (value.index - 1 + value.project.screenshots.length) % value.project.screenshots.length,
          };
        });
      }

      if (event.key === "ArrowRight") {
        setGallery((value) => {
          if (!value?.project.screenshots?.length) {
            return value;
          }

          return {
            ...value,
            index: (value.index + 1) % value.project.screenshots.length,
          };
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [gallery]);

  return (
    <section id="projetos" className="section" aria-labelledby="projetos-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="projetos-title"
            number="03"
            eyebrow="Projetos selecionados"
            title="Trabalhos que posso apresentar"
            description="Alguns sistemas têm acesso restrito. Nesses casos, as telas ficam na galeria do projeto."
          />
        </Reveal>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <ProjectCard
                project={project}
                onOpenScreenshots={(item) => setGallery({ project: item, index: 0 })}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        open={Boolean(current)}
        title={gallery ? `${gallery.project.title} · telas` : "Telas"}
        onClose={() => setGallery(null)}
      >
        {gallery && current ? (
          <div className={styles.gallery}>
            <div className={styles.galleryStage}>
              {screenshots.length > 1 ? (
                <button
                  type="button"
                  className={styles.galleryNav}
                  aria-label="Tela anterior"
                  onClick={() =>
                    setGallery((value) =>
                      value
                        ? {
                            ...value,
                            index:
                              (value.index - 1 + screenshots.length) % screenshots.length,
                          }
                        : value,
                    )
                  }
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
              ) : null}

              <Image
                src={current.src}
                alt={current.alt}
                width={1280}
                height={800}
                className={styles.galleryImage}
              />

              {screenshots.length > 1 ? (
                <button
                  type="button"
                  className={`${styles.galleryNav} ${styles.galleryNavNext}`}
                  aria-label="Próxima tela"
                  onClick={() =>
                    setGallery((value) =>
                      value
                        ? { ...value, index: (value.index + 1) % screenshots.length }
                        : value,
                    )
                  }
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              ) : null}
            </div>

            <p className={styles.galleryCaption}>
              {current.alt}
              {screenshots.length > 1
                ? ` · ${gallery.index + 1} de ${screenshots.length}`
                : null}
            </p>

            {screenshots.length > 1 ? (
              <div className={styles.galleryThumbs}>
                {screenshots.map((shot, index) => (
                  <button
                    key={shot.src}
                    type="button"
                    className={`${styles.galleryThumb} ${
                      index === gallery.index ? styles.galleryThumbActive : ""
                    }`}
                    onClick={() => setGallery((value) => (value ? { ...value, index } : value))}
                    aria-label={shot.alt}
                    aria-current={index === gallery.index}
                  >
                    <Image src={shot.src} alt="" width={160} height={100} />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
