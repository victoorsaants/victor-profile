import Image from "next/image";
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
            title="Do suporte ao desenvolvimento"
          />
        </Reveal>

        <div className={styles.layout}>
          <Reveal className={styles.portraitWrap}>
            <div className={styles.portrait}>
              <Image
                src="/images/victor.png"
                alt={`Foto de ${site.fullName}`}
                fill
                sizes="(max-width: 900px) 240px, 280px"
                priority
              />
            </div>
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
