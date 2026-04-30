import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>

        {/* Avatar group */}
        <div className={styles.avatarGroup}>
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className={styles.avatar}>
              <img src={`/avatar-${n}.png`} alt="" />
            </div>
          ))}
        </div>

        {/* Heading */}
        <h1 className={styles.title}>
          {/* Linha 1 — sublinhado sempre sob "Com" */}
          <span className={styles.comWrapper}>
            Com
            <img
              className={styles.decorSvg1}
              src="/illustrations/@svg1.svg"
              alt=""
              aria-hidden="true"
            />
          </span>unidade feminina
          <br />
          {/* Linha 2 — gem no "i" de "tecnologia" */}
          de tecnolog
          <span className={styles.iWrapper}>
            i
            <img
              className={styles.decorSvg2}
              src="/illustrations/@svg2.svg"
              alt=""
              aria-hidden="true"
            />
          </span>
          a, gratuita
          <br />
          {/* Linha 3 — coração após "source" */}
          <span className={styles.lastLine}>
            e open source
            <img
              className={styles.decorSvg3}
              src="/illustrations/@svg3.svg"
              alt=""
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          Mulheres que aprendem tecnologia juntas constroem mais rápido, chegam
          mais longe e não precisam começar do zero sozinhas.
        </p>

      </div>
    </section>
  );
}
