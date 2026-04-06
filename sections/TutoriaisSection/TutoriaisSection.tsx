import Card from "@/components/Card";
import styles from "./TutoriaisSection.module.css";

const TUTORIAIS = [
  {
    title: "Como criar um Design System com Claude",
    author: "por Milena Oliveira",
    category: "NA PRÁTICA COM IA",
    tag: "design",
    imageSrc: "/tutorial-1.png",
  },
  {
    title: "Construindo sua primeira API REST com TypeScript",
    author: "por Kayele Santos",
    category: "DEV",
    tag: "backend",
    imageSrc: "/tutorial-1.png",
  },
  {
    title: "Pesquisa de usuário do zero: guia prático",
    author: "por Laura Costa",
    category: "UX DESIGN",
    tag: "pesquisa",
    imageSrc: "/tutorial-1.png",
  },
  {
    title: "Acessibilidade em produtos digitais: por onde começar",
    author: "por Milena Oliveira",
    category: "UX DESIGN",
    tag: "a11y",
    imageSrc: "/tutorial-1.png",
  },
  {
    title: "Git para iniciantes: do clone ao merge request",
    author: "por Kayele Santos",
    category: "DEV",
    tag: "git",
    imageSrc: "/tutorial-1.png",
  },
  {
    title: "Prototipagem no Figma: components e variantes",
    author: "por Laura Costa",
    category: "UX DESIGN",
    tag: "figma",
    imageSrc: "/tutorial-1.png",
  },
];

export default function TutoriaisSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Últimos tutoriais</h2>
          <p className={styles.subtitle}>
            Quem aprende aqui tem tutorial escrito por alguém que já errou,
            ajustou e documentou pra você não precisar repetir o mesmo caminho.
          </p>
        </div>

        <div className={styles.grid}>
          {TUTORIAIS.map((t) => (
            <Card
              key={t.title}
              variant="tutorial"
              title={t.title}
              author={t.author}
              category={t.category}
              tag={t.tag}
              imageSrc={t.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
