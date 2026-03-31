"use client";

import React from "react";
import { SunDim, MoonStars } from "@phosphor-icons/react";
import styles from "./SwitchGroup.module.css";

export type SwitchGroupMode = "light" | "dark";

export interface SwitchGroupProps {
  activeMode?: SwitchGroupMode;
  onToggle?: (mode: SwitchGroupMode) => void;
  className?: string;
}

export default function SwitchGroup({
  activeMode = "light",
  onToggle,
  className,
}: SwitchGroupProps) {
  const isLight = activeMode === "light";
  const isDark = activeMode === "dark";

  return (
    <div
      className={[styles.group, className ?? ""].filter(Boolean).join(" ")}
      data-active={activeMode}
    >
      {/* Claro */}
      <button
        className={styles.tab}
        data-active={isLight}
        onClick={() => onToggle?.("light")}
        aria-pressed={isLight}
      >
        <span className={styles.tabIcon} aria-hidden="true">
          <SunDim size={16} color={isLight ? "var(--fg-offwhite)" : "var(--fg-emphasis)"} />
        </span>
        <span className={styles.tabLabel}>claro</span>
      </button>

      {/* Escuro */}
      <button
        className={styles.tab}
        data-active={isDark}
        onClick={() => onToggle?.("dark")}
        aria-pressed={isDark}
      >
        <span className={styles.tabIcon} aria-hidden="true">
          <MoonStars size={16} color={isDark ? "var(--fg-offwhite)" : "var(--fg-emphasis)"} />
        </span>
        <span className={styles.tabLabel}>escuro</span>
      </button>
    </div>
  );
}
