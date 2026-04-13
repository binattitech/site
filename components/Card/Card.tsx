"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import TagArea from "@/components/TagArea";
import styles from "./Card.module.css";

export type CardVariant = "tutorial" | "articles";
export type CardSize    = "md" | "sm";
export type CardStates  = "default" | "hover";

export interface CardProps {
  variant?:  CardVariant;
  size?:     CardSize;
  states?:   CardStates;
  title?:    string;
  author?:   string;
  category?: string;
  tag?:      string;
  /** Src da imagem (tutorial) */
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  variant  = "tutorial",
  size     = "md",
  states   = "default",
  title    = "Como criar um Design System com Claude",
  author   = "por Fulana",
  category = "NA PRÁTICA COM IA",
  tag      = "tag content",
  imageSrc = "/placeholder-card.png",
  imageAlt = "",
  className,
  onClick,
}: CardProps) {
  const isTutorial = variant === "tutorial";
  const isArticles = variant === "articles";
  const isMd       = size === "md";
  const isSm       = size === "sm";
  const isHover    = states === "hover";

  /* ── Tutorial ──────────────────────────────────────────── */
  if (isTutorial) {
    const cardClass = [
      styles.card,
      styles.tutorial,
      isMd ? styles.tutorialMd : styles.tutorialSm,
      isHover ? styles.tutorialHover : "",
      className ?? "",
    ].filter(Boolean).join(" ");

    return (
      <article className={cardClass} data-variant="tutorial" data-size={size} data-states={states} onClick={onClick}>
        {/* Imagem 16:9 */}
        <div className={styles.image}>
          <Image src={imageSrc} alt={imageAlt} fill style={{ objectFit: "cover" }} />
        </div>

        {/* Texto */}
        <div className={[styles.textArea, isMd ? styles.textAreaMd : styles.textAreaSm].join(" ")}>
          <p className={styles.category}>{category}</p>

          <p className={isMd ? styles.titleMd : styles.titleSm}>{title}</p>

          <div className={styles.meta}>
            <span className={styles.author}>{author}</span>
            <TagArea content={tag} />
          </div>
        </div>
      </article>
    );
  }

  /* ── Articles ──────────────────────────────────────────── */
  // Layout é sempre md; CSS faz a troca responsive para mobile (sm visual).
  const cardClass = [
    styles.card,
    styles.articles,
    styles.articlesMd,
    isHover ? styles.articlesMdHover : "",
    className ?? "",
  ].filter(Boolean).join(" ");

  return (
    <article className={cardClass} data-variant="articles" data-size={size} data-states={states} onClick={onClick}>

      {/* Bloco de cabeçalho */}
      <div className={[styles.articleHeader, styles.articleHeaderMd].join(" ")}>

        {/* Mobile: categoria + tag na mesma linha (sm style) */}
        <div className={styles.articleCategoryRow}>
          <p className={[styles.category, styles.articleCategoryFlex].join(" ")}>{category}</p>
          <TagArea content={tag} />
        </div>

        {/* Desktop: categoria em linha própria (md style) */}
        <p className={[styles.category, styles.categoryDesktop].join(" ")}>{category}</p>

        <p className={styles.articleTitleMd}>{title}</p>
        <span className={styles.author}>{author}</span>
      </div>

      {/* Desktop: tag + seta — display:contents faz eles entrarem no flex row */}
      <div className={styles.articleActions}>
        <TagArea content={tag} />
        <div className={[styles.arrow, isHover ? styles.arrowHover : styles.arrowDefault].join(" ")}>
          <ArrowRight size={isHover ? 24 : 20} />
        </div>
      </div>
    </article>
  );
}
