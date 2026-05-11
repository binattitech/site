import styles from "./AboutSobreSection.module.css";

export default function AboutSobreSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.left}>
          <span className={styles.badgeLeft}>Quem somos nós</span>
          <h2 className={styles.headingLeft}>
            Mais que Códigos: <br />
            uma comunidade
          </h2>
          <div className={styles.body}>
            <p className={styles.paragraph}>
              Somos uma comunidade de mulheres apaixonadas por tecnologia,
              unidas pelo propósito de compartilhar conhecimento, aprender
              juntas e impactar positivamente o futuro da tecnologia.
            </p>
            <p className={styles.paragraph}>
              Acreditamos no poder da colaboração e no crescimento coletivo,
              criando um espaço acolhedor para todas que desejam evoluir na
              jornada tecnológica.
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <span className={styles.badgeRight}>Nossa Missão</span>
          <h2 className={styles.headingRight}>
            Educação gratuita, <br />
            open source e <br />
            em comunidade.
          </h2>
        </div>
      </div>
    </section>
  );
}
