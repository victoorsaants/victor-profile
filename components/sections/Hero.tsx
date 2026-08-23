import { ArrowDownRight, Github, Linkedin } from "lucide-react";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
import styles from "./Hero.module.css";

export function Hero() {
  const whatsapp = whatsappLink();

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
            {whatsapp ? (
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
              >
                <BrandIcon name="whatsapp" />
                WhatsApp
              </a>
            ) : null}
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.codeCard}>
            <div className={styles.codeHeader}>
              <span />
              <span />
              <span />
              <p>profile.py</p>
            </div>
            <pre className={styles.code}>
              <code>
                <span className={styles.kw}>class</span> Profile:
                {"\n"}
                {"    "}name = <span className={styles.str}>&quot;{site.name}&quot;</span>
                {"\n"}
                {"    "}role = <span className={styles.str}>&quot;{site.role}&quot;</span>
                {"\n"}
                {"    "}stack = [<span className={styles.str}>&quot;Python&quot;</span>,{" "}
                <span className={styles.str}>&quot;FastAPI&quot;</span>]
                {"\n"}
                {"    "}focus = <span className={styles.str}>&quot;RPA + automação&quot;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
