import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import styles from "./Contact.module.css";

export function Contact() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Contato pelo portfólio")}`;

  return (
    <section id="contato" className="section" aria-labelledby="contato-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="contato-title"
            number="05"
            eyebrow="Contato"
            title={site.contact.title}
            description={site.contact.description}
          />
        </Reveal>
        <Reveal>
          <div className={styles.panel}>
            <a className={styles.email} href={mailto}>
              {site.email}
            </a>
            <p className={styles.hint}>
              O endereço acima abre o cliente de email. Não há envio pelo site — tudo permanece no
              frontend.
            </p>

            <div className={styles.channels}>
              <a href={mailto}>
                <Mail size={18} aria-hidden="true" />
                Email
              </a>
              <a href={site.github} target="_blank" rel="noreferrer noopener">
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer noopener">
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
              {site.whatsapp ? (
                <a href={site.whatsapp} target="_blank" rel="noreferrer noopener">
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp
                </a>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
