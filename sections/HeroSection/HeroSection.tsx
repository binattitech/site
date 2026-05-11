import { TEAM } from "@/data/team";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>

        {/* Avatar group */}
        <div className={styles.avatarGroup}>
          {TEAM.slice(0, 4).map((member, i) => (
            <div
              key={member.username}
              className={styles.avatar}
              style={{ "--delay": `${i * 0.2}s` } as React.CSSProperties}
            >
              <img src={`/team/${member.photo}.png`} alt={member.name} />
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
          {/* Linha 3 — "o" de "source" substituído pelo coração */}
          e open s<img
            className={styles.heartO}
            src="/illustrations/@svg3.svg"
            alt="o"
            aria-hidden="true"
          />urce
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
