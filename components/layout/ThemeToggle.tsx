"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      aria-pressed={isDark}
      suppressHydrationWarning
    >
      <Sun className={styles.sun} size={16} aria-hidden="true" />
      <Moon className={styles.moon} size={16} aria-hidden="true" />
      <span className={styles.thumb} aria-hidden="true" />
    </button>
  );
}
