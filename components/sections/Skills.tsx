import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section id="habilidades" className="section" aria-labelledby="skills-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="skills-title"
            number="02"
            eyebrow="Tecnologias & Skills"
            title="Ferramentas que uso no dia a dia"
            description="[placeholder] Categorias e itens são provisórios e podem ser editados em data/skills.ts."
          />
        </Reveal>
        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 80}>
              <article className={styles.category}>
                <h4>{category.title}</h4>
                <ul>
                  {category.items.map((skill) => (
                    <li key={skill.name}>
                      <span aria-hidden="true">{skill.name.slice(0, 2)}</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
