import { ArrowDownRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import styles from "./Hero.module.css";

const floatingTech = [
  { name: "React", className: "chip1" },
  { name: "Next.js", className: "chip2" },
  { name: "TypeScript", className: "chip3" },
  { name: "Python", className: "chip4" },
] as const;

export function Hero() {
  return (
    <section id="topo" className={`section ${styles.hero}`} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.greeting}>{site.greeting}</p>
          <h1 id="hero-title" className={styles.title}>
            {site.name}.
          </h1>
          <p className={styles.role}>{site.role}</p>
          <p className={styles.headline}>{site.headline}</p>

          <div className={styles.actions}>
            <Button href="#projetos">
              Ver projetos
              <ArrowDownRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#contato" variant="secondary">
              Entre em contato
            </Button>
          </div>

          <div className={styles.social}>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.codeCard}>
            <div className={styles.codeHeader}>
              <span />
              <span />
              <span />
              <p>profile.ts</p>
            </div>
            <pre className={styles.code}>
              <code>
                <span className={styles.kw}>const</span> profile = {"{"}
                {"\n"}
                {"  "}name: <span className={styles.str}>&quot;{site.name}&quot;</span>,
                {"\n"}
                {"  "}role: <span className={styles.str}>&quot;{site.role}&quot;</span>,
                {"\n"}
                {"  "}stack: [<span className={styles.str}>&quot;React&quot;</span>,{" "}
                <span className={styles.str}>&quot;Next.js&quot;</span>],
                {"\n"}
                {"  "}focus: <span className={styles.str}>&quot;UX + scale&quot;</span>
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>

          {floatingTech.map((tech) => (
            <span key={tech.name} className={`${styles.chip} ${styles[tech.className]}`}>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
