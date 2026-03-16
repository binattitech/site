"use client";

import React from "react";
import styles from "./ToggleNavMenu.module.css";

export type NavMenuState = "default" | "active";

export interface ToggleNavMenuProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Texto do item de navegação */
  content?: string;
  /** "default" = medium; "active" = bold */
  state?: NavMenuState;
}

export default function ToggleNavMenu({
  content = "menu item",
  state = "default",
  className,
  ...rest
}: ToggleNavMenuProps) {
  const isActive = state === "active";

  const itemClass = [styles.item, className ?? ""].filter(Boolean).join(" ");
  const labelClass = [
    styles.label,
    isActive ? styles.labelActive : styles.labelDefault,
  ].join(" ");

  return (
    <button
      {...rest}
      className={itemClass}
      data-state={state}
      aria-current={isActive ? "page" : undefined}
    >
      <span className={labelClass}>{content}</span>
    </button>
  );
}
