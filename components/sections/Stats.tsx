import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/data/stats";
import styles from "./Stats.module.css";

export function Stats() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="stats-title">
      <div className="container">
        <h2 id="stats-title" className="sr-only">
          Estatísticas
        </h2>
        <Reveal>
          <ul className={styles.list}>
            {stats.map((item) => (
              <li key={item.id}>
                <p className={styles.value}>{item.value}</p>
                <p className={styles.label}>{item.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
