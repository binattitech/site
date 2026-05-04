import React from "react";
import Link from "next/link";
import Card from "@/components/Card";
import Button from "@/components/Button";
import styles from "./RelatedArticlesSection.module.css";

export interface RelatedArticle {
  title: string;
  author: string;
  category: string;
  tag: string;
  imageSrc?: string;
  href?: string;
}

export interface RelatedArticlesSectionProps {
  articles?: RelatedArticle[];
}

export default function RelatedArticlesSection({
  articles = [],
}: RelatedArticlesSectionProps) {
  if (articles.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.heading}>Conteúdo Relacionado</p>
          <Link href="/blog">
            <Button variant="outline" content="Ver todos os Artigos" showIcon />
          </Link>
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
              href={article.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
