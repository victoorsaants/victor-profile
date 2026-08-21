import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import styles from "./About.module.css";

const highlights = [
  { title: "Interesses", body: site.about.interests },
  { title: "Tecnologias", body: site.about.technologies },
  { title: "Forma de trabalhar", body: site.about.workingStyle },
  { title: "Objetivos", body: site.about.goals },
];

export function About() {
  return (
    <section id="sobre" className="section" aria-labelledby="sobre-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="sobre-title"
            number="01"
            eyebrow="Sobre mim"
            title="Trajetória em construção"
          />
        </Reveal>

        <div className={styles.layout}>
          <Reveal className={styles.portraitWrap}>
            <div className={styles.portrait} aria-hidden="true">
              <span>{site.name.slice(0, 1)}</span>
            </div>
            <p className={styles.caption}>
              <span className="placeholder-flag">placeholder</span>
              Foto / avatar a substituir
            </p>
            <p className={styles.location}>{site.location}</p>
          </Reveal>

          <div>
            <Reveal>
              <p className={styles.intro}>{site.about.intro}</p>
            </Reveal>

            <div className={styles.cards}>
              {highlights.map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  <article className={styles.card}>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
