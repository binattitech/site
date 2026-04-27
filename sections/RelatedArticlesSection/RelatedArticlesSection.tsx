import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import styles from "./RelatedArticlesSection.module.css";

export interface RelatedArticle {
  title: string;
  author: string;
  category: string;
  tag: string;
  imageSrc?: string;
}

export interface RelatedArticlesSectionProps {
  articles?: RelatedArticle[];
}

const DEFAULT_ARTICLES: RelatedArticle[] = [
  {
    title: "Como criar um Design System com Claude",
    author: "por Milena Oliveira",
    category: "NA PRÁTICA COM IA",
    tag: "design",
    imageSrc: "/placeholder-card.png",
  },
  {
    title: "Componentes acessíveis do zero com React",
    author: "por Laura Costa",
    category: "DEV",
    tag: "a11y",
    imageSrc: "/placeholder-card.png",
  },
  {
    title: "Analisando dados sem ser cientista de dados",
    author: "por Kayele Santos",
    category: "DADOS",
    tag: "análise",
    imageSrc: "/placeholder-card.png",
  },
];

export default function RelatedArticlesSection({
  articles = DEFAULT_ARTICLES,
}: RelatedArticlesSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.heading}>Conteúdo Relacionado</p>
          <Button
            variant="outline"
            content="Ver todos os Artigos"
            showIcon
          />
        </div>
        <div className={styles.grid}>
          {articles.map((article) => (
            <Card
              key={article.title}
              variant="tutorial"
              size="md"
              title={article.title}
              author={article.author}
              category={article.category}
              tag={article.tag}
              imageSrc={article.imageSrc ?? "/placeholder-card.png"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
