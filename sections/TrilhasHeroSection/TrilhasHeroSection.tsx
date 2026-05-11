"use client";
import { useEffect, useRef } from "react";
import styles from "./TrilhasHeroSection.module.css";

export default function TrilhasHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const offset = window.scrollY * 0.25;
      section.style.setProperty("--grid-offset-y", `${offset}px`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.content}>
        <span className={styles.badge}>BINATTI COMMUNITY</span>
        <h1 className={styles.heading}>
          Trilhas de conhecimento
          <br />
          em comunidade
        </h1>
        <p className={styles.subtitle}>
          Mulheres que aprendem tecnologia juntas constroem mais rápido, chegam
          mais longe e não precisam começar do zero sozinhas.
        </p>
      </div>
    </section>
  );
}
