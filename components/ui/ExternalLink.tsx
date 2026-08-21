import type { ReactNode } from "react";
import styles from "./ExternalLink.module.css";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  const isHash = href.startsWith("#");

  return (
    <a
      className={[styles.link, className].filter(Boolean).join(" ")}
      href={href}
      {...(!isHash ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
    </a>
  );
}
