import TeaserCard from "@/components/TeaserCard";
import styles from "./TrilhasDestaqueSection.module.css";

export default function TrilhasDestaqueSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <TeaserCard
          variant="expanded"
          shade="dark"
          color="orange"
          title="UX UI Design"
          description="Aprenda a criar produtos digitais que equilibram beleza e funcionalidade. Explore os fundamentos de pesquisa, prototipação e design de interfaces para construir experiências que encantam usuários."
          stats="6 MÓDULOS • 2.5 HORAS"
          ctaLabel="Começar trilha"
          href="#"
        />
      </div>
    </section>
  );
}
