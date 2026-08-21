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
            description="[placeholder] Itens da timeline são provisórios. Atualize data/experience.ts com cargos, empresas e períodos reais."
          />
        </Reveal>
        <ol className={styles.timeline}>
          {experience.map((item, index) => (
            <li key={item.id}>
              <Reveal delay={index * 90}>
                <article className={styles.item}>
                  <p className={styles.year}>{item.year}</p>
                  <div className={styles.content}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
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
