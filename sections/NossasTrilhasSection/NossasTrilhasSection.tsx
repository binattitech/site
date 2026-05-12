import TeaserCard from "@/components/TeaserCard";
import styles from "./NossasTrilhasSection.module.css";

const TOP_CARDS = [
  {
    color: "rose",
    shade: "dark" as const,
    title: "Blockchain",
    description:
      "Conheça a tecnologia que garante segurança e transparência para uma nova era de negócios e inovação. Com Blockchain, você transforma a maneira como transações e dados são gerenciados.",
    stats: "6 CURSOS • 2.5 HORAS",
    href: "#",
  },
  {
    color: "yellow",
    shade: "medium" as const,
    title: "Ciência de dados & Analytics",
    description:
      "Descubra como analisar e interpretar dados para obter insights claros e precisos, transformando conhecimento em tomada de decisão, ações eficazes e resultados concretos.",
    stats: "6 CURSOS • 2.5 HORAS",
    href: "#",
  },
];

const GRID_CARDS = [
  {
    color: "purple",
    shade: "dark" as const,
    title: "Desenvolvimento de games",
    description:
      "Com o desenvolvimento de games, você transforma ideias em jogos inovadores. Explore a tecnologia por trás da criação de experiências digitais que encantam.",
    stats: "6 MÓDULOS • 2.5 HORAS",
    href: "#",
  },
  {
    color: "purple",
    shade: "medium" as const,
    title: "UX Design",
    description:
      "Aprenda a criar interfaces intuitivas e experiências que encantam os usuários, tornando a navegação simples e agradável.",
    stats: "6 MÓDULOS • 2.5 HORAS",
    href: "#",
  },
  {
    color: "cyan",
    shade: "light" as const,
    title: "Teste de Software",
    description:
      "Aprenda a validar e verificar sistemas, garantindo a qualidade do software com técnicas que detectam falhas e melhoram a performance de aplicações.",
    stats: "6 MÓDULOS • 2.5 HORAS",
    href: "#",
  },
  {
    color: "cyan",
    shade: "light" as const,
    title: "Inteligência Artificial",
    description:
      "Domine a Inteligência Artificial e aprenda a construir sistemas que simulam o raciocínio humano para resolver desafios e otimizar processos.",
    stats: "6 MÓDULOS • 2.5 HORAS",
    href: "#",
  },
  {
    color: "cyan",
    shade: "light" as const,
    title: "Desenvolvimento Mobile",
    description:
      "Crie aplicações para iOS e Android e leve suas ideias para a palma da mão dos usuários com as principais tecnologias do mercado.",
    stats: "6 MÓDULOS • 2.5 HORAS",
    href: "#",
  },
  {
    color: "cyan",
    shade: "light" as const,
    title: "Cibersegurança",
    description:
      "Proteja sistemas, redes e dados contra ameaças digitais. Aprenda as práticas e ferramentas essenciais para atuar na área de segurança da informação.",
    stats: "6 MÓDULOS • 2.5 HORAS",
    href: "#",
  },
];

export default function NossasTrilhasSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Nossas Trilhas</h2>
          <p className={styles.subtitle}>
            Para você explorar, escolher e começar!
          </p>
        </div>

        <div className={styles.cardsOuter}>
          <div className={styles.topRow}>
            {TOP_CARDS.map((card) => (
              <TeaserCard
                key={card.title}
                variant="compact"
                shade={card.shade}
                color={card.color}
                title={card.title}
                description={card.description}
                stats={card.stats}
                href={card.href}
              />
            ))}
          </div>

          <div className={styles.grid}>
            {GRID_CARDS.map((card) => (
              <TeaserCard
                key={card.title}
                variant="compact"
                shade={card.shade}
                color={card.color}
                title={card.title}
                description={card.description}
                stats={card.stats}
                href={card.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
