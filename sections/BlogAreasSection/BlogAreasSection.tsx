import Card from "@/components/Card";
import styles from "./BlogAreasSection.module.css";

const ARTIGOS = [
  {
    title: "Como criar um Design System com Claude",
    author: "por Milena Oliveira",
    category: "NA PRÁTICA COM IA",
    tag: "design",
  },
  {
    title: "Componentes acessíveis do zero com React",
    author: "por Laura Costa",
    category: "DEV",
    tag: "a11y",
  },
  {
    title: "Analisando dados sem ser cientista de dados",
    author: "por Kayele Santos",
    category: "DADOS",
    tag: "análise",
  },
  {
    title: "IA generativa na sua stack de produto",
    author: "por Milena Oliveira",
    category: "NA PRÁTICA COM IA",
    tag: "ia",
  },
  {
    title: "UX para devs: o que você precisa saber",
    author: "por Laura Costa",
    category: "UX",
    tag: "design",
  },
  {
    title: "Sua primeira contribuição open source",
    author: "por Kayele Santos",
    category: "DEV",
    tag: "open source",
  },
  {
    title: "Como apresentar seu trabalho técnico",
    author: "por Milena Oliveira",
    category: "COMUNIDADE",
    tag: "soft skills",
  },
  {
    title: "Gestão de projetos para quem é dev",
    author: "por Laura Costa",
    category: "PRODUTO",
    tag: "gestão",
  },
  {
    title: "Introdução a bancos de dados relacionais",
    author: "por Kayele Santos",
    category: "DADOS",
    tag: "sql",
  },
  {
    title: "Design tokens: da teoria à prática",
    author: "por Milena Oliveira",
    category: "DESIGN",
    tag: "tokens",
  },
  {
    title: "Testes automatizados para quem tem medo",
    author: "por Laura Costa",
    category: "DEV",
    tag: "testes",
  },
  {
    title: "Pesquisa com usuário sem orçamento",
    author: "por Kayele Santos",
    category: "UX",
    tag: "pesquisa",
  },
  {
    title: "Como usar o GitHub Actions no dia a dia",
    author: "por Milena Oliveira",
    category: "DEV",
    tag: "devops",
  },
  {
    title: "Métricas que realmente importam para produto",
    author: "por Laura Costa",
    category: "PRODUTO",
    tag: "métricas",
  },
  {
    title: "Prompts que funcionam para gerar código",
    author: "por Kayele Santos",
    category: "NA PRÁTICA COM IA",
    tag: "prompts",
  },
  {
    title: "Por que acessibilidade é um argumento técnico",
    author: "por Milena Oliveira",
    category: "DEV",
    tag: "a11y",
  },
  {
    title: "Visualizações de dados com Python e Pandas",
    author: "por Laura Costa",
    category: "DADOS",
    tag: "python",
  },
  {
    title: "Como construir portfólio sendo júnior",
    author: "por Kayele Santos",
    category: "COMUNIDADE",
    tag: "carreira",
  },
];

export default function BlogAreasSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Todas as áreas</h2>
          <p className={styles.subtitle}>
            Conteúdo escrito por mulheres em tech, testado na prática e
            organizado por área de atuação.
          </p>
        </div>

        <div className={styles.grid}>
          {ARTIGOS.map((a) => (
            <Card
              key={a.title}
              variant="tutorial"
              size="md"
              title={a.title}
              author={a.author}
              category={a.category}
              tag={a.tag}
              imageSrc="/placeholder-card.png"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
