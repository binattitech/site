"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import Badge from "@/components/Badge";
import TagArea from "@/components/TagArea";
import styles from "./Card.module.css";

export type CardVariant = "tutorial" | "articles" | "project";
export type CardSize = "md" | "sm" | "xs";
export type CardStates = "default" | "hover";

export interface CardProps {
  variant?: CardVariant;
  size?: CardSize;
  states?: CardStates;
  title?: string;
  author?: string;
  category?: string;
  tag?: string;
  level?: string;
  description?: string;
  showDescription?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Card({
  variant = "tutorial",
  size = "md",
  states = "default",
  title = "Como criar um Design System com Claude",
  author = "por Fulana",
  category = "NA PRÁTICA COM IA",
  tag = "tag content",
  level = "Iniciante",
  description = "A cibersegurança é uma área valiosa para se aprender e explorar seus conceitos.",
  showDescription = true,
  imageSrc = "/placeholder-card.png",
  imageAlt = "",
  className,
  href,
  onClick,
}: CardProps) {
  const isTutorial = variant === "tutorial";
  const isProject = variant === "project";
  const isMd = size === "md";
  const isSm = size === "sm";
  const isXs = size === "xs";
  const isHover = states === "hover";

  /* ── Tutorial ──────────────────────────────────────────── */
  if (isTutorial) {
    const cardClass = [
      styles.card,
      styles.tutorial,
      isMd ? styles.tutorialMd : styles.tutorialSm,
      isHover ? styles.tutorialHover : "",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");

    const content = (
      <article
        className={cardClass}
        data-variant="tutorial"
        data-size={size}
        data-states={states}
        onClick={onClick}
      >
        <div className={styles.image}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div
          className={[
            styles.textArea,
            isMd ? styles.textAreaMd : styles.textAreaSm,
            isHover ? styles.textAreaHover : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <p className={styles.category}>{category}</p>
          <p className={isMd ? styles.titleMd : styles.titleSm}>{title}</p>
          <div className={styles.meta}>
            <span className={styles.author}>{author}</span>
            <TagArea content={tag} />
          </div>
        </div>
      </article>
    );

    return href ? (
      <Link href={href} className={styles.cardLink}>{content}</Link>
    ) : content;
  }

  /* ── Project (xs only) ─────────────────────────────────── */
  if (isProject) {
    const cardClass = [
      styles.card,
      styles.project,
      styles.projectXs,
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");

    const projectContent = (
      <article
        className={cardClass}
        data-variant="project"
        data-size="xs"
        data-states={states}
        onClick={onClick}
      >
        <div className={styles.projectHeader}>
          <Badge variant="light" color="lime" label={level} />
          <Badge variant="outline" radius="rounded" size="sm" label={tag} />
        </div>
        <p className={styles.articleTitleXs}>{title}</p>
        {showDescription && <p className={styles.projectDescription}>{description}</p>}
      </article>
    );

    return href ? (
      <Link href={href} className={styles.cardLink}>{projectContent}</Link>
    ) : projectContent;
  }

  /* ── Articles ──────────────────────────────────────────── */
  const listSizeClass = isMd
    ? styles.articlesMd
    : isSm
      ? styles.articlesSm
      : styles.articlesXs;

  const cardClass = [
    styles.card,
    styles.articles,
    listSizeClass,
    isMd && isHover ? styles.articlesMdHover : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const articlesContent = (
    <article
      className={cardClass}
      data-variant="articles"
      data-size={size}
      data-states={states}
      onClick={onClick}
    >
      {/* ── md: bloco texto + actions ── */}
      {isMd && (
        <>
          <div className={[styles.articleHeader, styles.articleHeaderMd].join(" ")}>
            {/* Categoria standalone — desktop only */}
            <p className={[styles.category, styles.categoryDesktop].join(" ")}>
              {category}
            </p>
            {/* Linha categoria + tag — mobile only */}
            <div className={styles.articleCategoryRow}>
              <p className={[styles.category, styles.categoryMobile].join(" ")}>
                {category}
              </p>
              <TagArea content={tag} />
            </div>
            <p className={styles.articleTitleMd}>{title}</p>
            <span className={styles.author}>{author}</span>
          </div>

          <div className={styles.articleActions}>
            <TagArea content={tag} />
            <div
              className={[
                styles.arrow,
                isHover ? styles.arrowHover : styles.arrowDefault,
              ].join(" ")}
            >
              <ArrowRight size={isHover ? 24 : 20} />
            </div>
          </div>
        </>
      )}

      {/* ── sm / xs: layout vertical ── */}
      {(isSm || isXs) && (
        <div className={[styles.articleHeader, styles.articleHeaderSmXs].join(" ")}>
          <div className={styles.articleCategoryRowSmXs}>
            <p className={styles.category}>{category}</p>
            <TagArea content={tag} />
          </div>
          <p className={isXs ? styles.articleTitleXs : styles.articleTitleSm}>
            {title}
          </p>
          <span className={styles.author}>{author}</span>
        </div>
      )}
    </article>
  );

  return href ? (
    <Link href={href} className={styles.cardLink}>{articlesContent}</Link>
  ) : articlesContent;
}
