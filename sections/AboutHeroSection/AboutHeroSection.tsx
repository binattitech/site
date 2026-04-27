import styles from "./AboutHeroSection.module.css";

export default function AboutHeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <span className={styles.badge}>Binatti Community</span>
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
