"use client";

import React from "react";
import { SunDim, MoonStars } from "@phosphor-icons/react";
import Switch from "@/components/Switch";
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
      <Switch
        label="claro"
        state={isLight ? "active" : "default"}
        icon={<SunDim size={16} color={isLight ? "var(--fg-offwhite)" : "var(--fg-emphasis)"} />}
        onClick={() => onToggle?.("light")}
        aria-pressed={isLight}
      />
      <Switch
        label="escuro"
        state={isDark ? "active" : "default"}
        icon={<MoonStars size={16} color={isDark ? "var(--fg-offwhite)" : "var(--fg-emphasis)"} />}
        onClick={() => onToggle?.("dark")}
        aria-pressed={isDark}
      />
    </div>
  );
}
