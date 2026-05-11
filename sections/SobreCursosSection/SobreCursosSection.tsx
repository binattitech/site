"use client";
import { useEffect, useRef } from "react";
import styles from "./SobreCursosSection.module.css";

const FEATURES = [
  {
    title: "Open source",
    description:
      "Tudo que a comunidade produz é documentado, versionado no GitHub e aberto.",
  },
  {
    title: "Gratuita",
    description:
      "Sem freemium, sem tier premium. Tudo que a Binatti produz é público e acessível.",
  },
  {
    title: "No seu ritmo",
    description:
      "Sem cobrança de frequência, sem justificativa de ausência.",
  },
  {
    title: "Em comunidade",
    description:
      "Quem sabe mais, ensina. Quem está chegando, é acolhida.",
  },
  {
    title: "Prática",
    description:
      "O que as membras aprendem, elas aplicam e publicam.",
  },
];

export default function SobreCursosSection() {
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
      <div className={styles.bordered}>
        <div className={styles.content}>

          {/* Col 1 — heading + image, max 400px */}
          <div className={styles.col1}>
            <h2 className={styles.heading}>
              {"O que você \nvai encontrar aqui"}
            </h2>
            <div className={styles.image} aria-hidden="true" />
          </div>

          {/* Col 2 — feature grid, bottom-aligned */}
          <div className={styles.col2}>
            {FEATURES.map(({ title, description }) => (
              <div key={title} className={styles.feature}>
                <p className={styles.featureTitle}>{title}</p>
                <p className={styles.featureDescription}>{description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
