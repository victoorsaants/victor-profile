"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { navItems, site } from "@/data/site";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (open) {
      firstLinkRef.current?.focus();
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.logo} href="#topo" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <nav className={styles.desktopNav} aria-label="Principal">
          {navItems.map((item) => (
            <a key={item.href} className={styles.navLink} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <a className={styles.cta} href="#contato">
            Contato
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`${styles.mobilePanel} ${open ? styles.mobileOpen : ""}`}
        hidden={!open}
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              ref={index === 0 ? firstLinkRef : undefined}
              className={styles.mobileLink}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className={styles.mobileCta} href="#contato" onClick={() => setOpen(false)}>
            Entre em contato
          </a>
        </nav>
      </div>
    </header>
  );
}
