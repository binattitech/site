"use client";

import React from "react";
import Badge from "@/components/Badge";
import styles from "./NavLink.module.css";

export type NavLinkState = "default" | "hover";

export interface NavLinkProps {
  title?: string;
  autor?: string;
  badgeLabel?: string;
  state?: NavLinkState;
  onClick?: () => void;
  className?: string;
}

export default function NavLink({
  title = "Título",
  autor = "Fulano",
  badgeLabel = "TAG CONTENT",
  state = "default",
  onClick,
  className,
}: NavLinkProps) {
  return (
    <button
      className={[styles.link, className ?? ""].filter(Boolean).join(" ")}
      data-state={state}
      onClick={onClick}
    >
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.autor}>{autor}</p>
      </div>
      <div className={styles.badge}>
        <Badge
          label={badgeLabel}
          variant="outline"
          radius="rounded"
          size="sm"
        />
      </div>
    </button>
  );
}
