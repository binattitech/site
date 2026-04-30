"use client";

import React from "react";
import { LinkedinLogo, Link as LinkIcon } from "@phosphor-icons/react";
import Badge from "@/components/Badge";
import styles from "./NavLink.module.css";

export type NavLinkState = "default" | "hover";
export type NavLinkSize = "md" | "sm";

export interface NavLinkProps {
  title?: string;
  autor?: string;
  badgeLabel?: string;
  size?: NavLinkSize;
  state?: NavLinkState;
  showDescription?: boolean;
  showBadge?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function NavLink({
  title = "Título",
  autor = "Fulano",
  badgeLabel = "TAG CONTENT",
  size = "md",
  state = "default",
  showDescription = true,
  showBadge = true,
  href,
  onClick,
  className,
}: NavLinkProps) {
  const classNames = [styles.link, className ?? ""].filter(Boolean).join(" ");

  const inner =
    size === "sm" ? (
      <>
        <span className={styles.icon}>
          <LinkedinLogo size={20} color="var(--fg-emphasis)" weight="fill" />
        </span>
        <span className={styles.smTitle}>{title}</span>
        <span className={styles.linkIcon}>
          <LinkIcon size={16} color="var(--fg-muted)" />
        </span>
      </>
    ) : (
      <>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          {showDescription && <p className={styles.autor}>{autor}</p>}
        </div>
        {showBadge && (
          <div className={styles.badge}>
            <Badge label={badgeLabel} variant="outline" radius="rounded" size="sm" />
          </div>
        )}
      </>
    );

  if (href) {
    return (
      <a href={href} className={classNames} data-state={state} data-size={size}>
        {inner}
      </a>
    );
  }

  return (
    <button className={classNames} data-state={state} data-size={size} onClick={onClick}>
      {inner}
    </button>
  );
}
