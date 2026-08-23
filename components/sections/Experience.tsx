import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experiencia" className="section" aria-labelledby="experiencia-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="experiencia-title"
            number="04"
            eyebrow="Experiência"
            title="Trajetória ao longo do tempo"
            description="Do suporte de TI ao time de desenvolvimento, dentro do mesmo escritório de advocacia."
          />
        </Reveal>
        <ol className={styles.timeline}>
          {experience.map((item, index) => (
            <li key={item.id}>
              <Reveal delay={index * 90}>
                <article className={styles.item}>
                  <p className={styles.year}>{item.year}</p>
                  <div className={styles.content}>
                    <div className={styles.heading}>
                      <h4>{item.title}</h4>
                      {item.current ? <span className={styles.current}>Atual</span> : null}
                    </div>
                    <p className={styles.company}>{item.company}</p>
                    <p className={styles.period}>{item.period}</p>
                    <p>{item.description}</p>
                    <ul className={styles.highlights}>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
