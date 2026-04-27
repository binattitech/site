import React from "react";
import AvatarWithText from "@/components/AvatarWithText";
import Badge from "@/components/Badge";
import styles from "./ArticleHeroSection.module.css";

export interface ArticleHeroSectionProps {
  title?: string;
  authorName?: string;
  authorRole?: string;
  avatarSrc?: string;
  date?: string;
  category?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function ArticleHeroSection({
  title = "Como criar um Design System com Claude",
  authorName = "Milena Duarte",
  authorRole = "UX UI Designer",
  avatarSrc,
  date = "Publicado em 10 de Agosto, 2025",
  category = "NA PRÁTICA COM IA",
  imageSrc = "/placeholder-card.png",
  imageAlt = "",
}: ArticleHeroSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={imageSrc} alt={imageAlt} />
        </div>
        <div className={styles.textArea}>
          <p className={styles.title}>{title}</p>
          <div className={styles.meta}>
            <AvatarWithText
              name={authorName}
              role={authorRole}
              avatarSrc={avatarSrc}
            />
            <div className={styles.metaRight}>
              <span className={styles.date}>{date}</span>
              <Badge label={category} variant="outline" radius="rounded" size="sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
