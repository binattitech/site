import Card from "@/components/Card";
import type { ArtigoMeta } from "@/lib/artigos";
import styles from "./ArtigosSection.module.css";

interface ArtigosSectionProps {
  artigos: ArtigoMeta[];
}

export default function ArtigosSection({ artigos }: ArtigosSectionProps) {
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
          {artigos.map((a) => (
            <Card
              key={a.slug}
              variant="articles"
              title={a.title}
              author={a.author}
              category={a.category}
              tag={a.tag}
              href={`/blog/${a.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
