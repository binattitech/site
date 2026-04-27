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
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function NavLink({
  title = "Título",
  autor = "Fulano",
  badgeLabel = "TAG CONTENT",
  state = "default",
  href,
  onClick,
  className,
}: NavLinkProps) {
  const classNames = [styles.link, className ?? ""].filter(Boolean).join(" ");

  const inner = (
    <>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.autor}>{autor}</p>
      </div>
      <div className={styles.badge}>
        <Badge label={badgeLabel} variant="outline" radius="rounded" size="sm" />
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classNames} data-state={state}>
        {inner}
      </a>
    );
  }

  return (
    <button className={classNames} data-state={state} onClick={onClick}>
      {inner}
    </button>
  );
}
