import styles from "./Badge.module.css";

type BadgeProps = {
  children: string;
  tone?: "neutral" | "accent";
};

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
