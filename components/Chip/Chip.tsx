"use client";

import React from "react";
import { ArrowLineLeft } from "@phosphor-icons/react";
import styles from "./Chip.module.css";

export type ChipState = "default" | "hover" | "active" | "disabled";

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  state?: ChipState;
  showIcon?: boolean;
}

export default function Chip({
  label = "Chip",
  state = "default",
  showIcon = true,
  className,
  ...rest
}: ChipProps) {
  const isDisabled = state === "disabled";
  const isActive = state === "active";
  const iconColor = isActive ? "var(--fg-offwhite)" : "var(--fg-emphasis)";

  return (
    <button
      {...rest}
      disabled={isDisabled}
      className={[styles.chip, className ?? ""].filter(Boolean).join(" ")}
      data-state={state}
    >
      {showIcon && (
        <span className={styles.iconSlot} aria-hidden="true">
          <ArrowLineLeft size={16} color={iconColor} />
        </span>
      )}
      <span className={styles.label}>{label}</span>
    </button>
  );
}
