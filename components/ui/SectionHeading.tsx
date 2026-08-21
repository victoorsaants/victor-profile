import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  id?: string;
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  number,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className={styles.header}>
      <p className={styles.eyebrow}>
        <span aria-hidden="true">{number}</span>
        {eyebrow}
      </p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
