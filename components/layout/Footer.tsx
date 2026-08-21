import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, site } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="rodape" className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.name}>{site.name}</p>
          <p className={styles.copy}>
            © {year} {site.fullName}. Portfólio pessoal.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <p className={styles.label}>Navegação</p>
          <ul className={styles.links}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={styles.label}>Contato</p>
          <ul className={styles.social}>
            <li>
              <a href={`mailto:${site.email}`} aria-label="Email">
                <Mail size={18} aria-hidden="true" />
                Email
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
