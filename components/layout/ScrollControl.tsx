"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./ScrollControl.module.css";

export function ScrollControl() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.control} role="group" aria-label="Navegação da página">
      <button type="button" className={styles.button} onClick={scrollToTop} aria-label="Ir para o topo">
        <ChevronUp size={18} aria-hidden="true" />
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={scrollToBottom}
        aria-label="Ir para o final"
      >
        <ChevronDown size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
