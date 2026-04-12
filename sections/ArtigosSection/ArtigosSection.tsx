import Card from "@/components/Card";
import styles from "./ArtigosSection.module.css";

const ARTIGOS = [
  {
    title: "Como criar um Design System com Claude",
    author: "por Milena Oliveira",
    category: "NA PRÁTICA COM IA",
    tag: "design",
  },
  {
    title: "Por que toda dev deveria aprender sobre UX",
    author: "por Kayele Santos",
    category: "UX DESIGN",
    tag: "carreira",
  },
  {
    title: "Acessibilidade não é opcional: um argumento técnico",
    author: "por Laura Costa",
    category: "DEV",
    tag: "a11y",
  },
  {
    title: "Gestão de projetos para quem é dev, não gerente",
    author: "por Milena Oliveira",
    category: "PRODUTO",
    tag: "gestão",
  },
  {
    title: "Como apresentar seu trabalho técnico de forma clara",
    author: "por Kayele Santos",
    category: "COMUNIDADE",
    tag: "soft skills",
  },
];

export default function ArtigosSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Artigos</h2>
          <p className={styles.subtitle}>
            Conhecimento que fica na cabeça de uma pessoa{" "}
            <strong>não serve pra comunidade</strong>. Aqui cada membra escreve
            o que aprendeu e o que você encontra foi testado na prática,{" "}
            <strong>não copiado</strong> de documentação.
          </p>
        </div>

        <div className={styles.list}>
          {ARTIGOS.map((a) => (
            <Card
              key={a.title}
              variant="articles"
              title={a.title}
              author={a.author}
              category={a.category}
              tag={a.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
