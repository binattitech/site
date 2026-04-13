import styles from "./HeroSection.module.css";

const CATEGORIES = [
  { img: "/folder-1.png", label: "Dev",               bottom: "390px", labelPos: "left"   },
  { img: "/folder-2.png", label: "IA",                bottom: "340px", labelPos: "right"  },
  { img: "/folder-3.png", label: "Dados",             bottom: "285px", labelPos: "left"   },
  { img: "/folder-4.png", label: "UX Design",         bottom: "230px", labelPos: "left"   },
  { img: "/folder-5.png", label: "Produto",           bottom: "175px", labelPos: "left"   },
  { img: "/folder-6.png", label: "Design de Serviço", bottom: "115px", labelPos: "left"   },
  { img: "/folder-7.png", label: "Comunidade",        bottom: "55px",  labelPos: "center" },
];

export default function HeroSection() {
  return (
    <section className={styles.section}>
      {/* Content */}
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
          Trilhas de conhecimento
          <br />
          {/* "em" com sublinhado decorativo (@svg1) */}
          <span className={styles.emWrapper}>
            em
            <img className={styles.decorSvg1} src="/illustrations/@svg1.svg" alt="" aria-hidden="true" />
          </span>
          {" "}
          {/* "comunidade" com gem no "i" (@svg2) e coração ao final (@svg3) */}
          <span className={styles.comunidadeWrapper}>
            comun
            <span className={styles.iWrapper}>
              i
              <img className={styles.decorSvg2} src="/illustrations/@svg2.svg" alt="" aria-hidden="true" />
            </span>
            dade
            <img className={styles.decorSvg3} src="/illustrations/@svg3.svg" alt="" aria-hidden="true" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          Mulheres que aprendem tecnologia juntas constroem mais rápido,
          chegam mais longe e não precisam começar do zero sozinhas.
        </p>
      </div>

    </section>
  );
}
