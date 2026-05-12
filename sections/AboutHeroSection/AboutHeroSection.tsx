"use client";
import { useEffect, useRef } from "react";
import Badge from "@/components/Badge";
import styles from "./AboutHeroSection.module.css";

export default function AboutHeroSection() {
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
        <Badge variant="mono" size="md" label="Sobre Nós" />
        <h1 className={styles.heading}>
          Não é sobre tecnologia.
          <br />
          É sobre pessoas.
        </h1>
        <p className={styles.subtitle}>
          Da primeira linha de código à publicação de um artigo,
          <br />
          estamos aqui para apoiar.
        </p>
      </div>
    </section>
  );
}
