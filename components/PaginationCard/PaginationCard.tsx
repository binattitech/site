"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import styles from "./PaginationCard.module.css";

export interface PaginationCardProps {
  direction?: "prev" | "next";
  label?: string;
  title: string;
  color?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function PaginationCard({
  direction = "prev",
  label,
  title,
  color = "rose",
  href,
  onClick,
  className,
}: PaginationCardProps) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  const defaultLabel = direction === "prev" ? "Anterior" : "Próximo";

  const themeStyle = {
    "--primary-100": `var(--${color}-100)`,
    "--primary-300": `var(--${color}-300)`,
    "--primary-400": `var(--${color}-400)`,
    "--primary-900": `var(--${color}-900)`,
  } as React.CSSProperties;

  const content = (
    <div
      className={[styles.card, className].filter(Boolean).join(" ")}
      style={themeStyle}
      data-direction={direction}
      onClick={onClick}
    >
      <div className={styles.header} data-direction={direction}>
        <Icon size={16} color="var(--primary-400)" />
        <span className={styles.label}>{label ?? defaultLabel}</span>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );

  return href ? (
    <Link href={href} className={styles.link}>
      {content}
    </Link>
  ) : (
    content
  );
}
