"use client";

import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import styles from "./Switch.module.css";

export type SwitchState = "default" | "hover" | "active" | "disabled";

export interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  state?: SwitchState;
  showIcon?: boolean;
  /** Custom icon slot — replaces default ArrowRight */
  icon?: React.ReactNode;
}

export default function Switch({
  label = "Switch",
  state = "default",
  showIcon = true,
  icon,
  className,
  ...rest
}: SwitchProps) {
  const isDisabled = state === "disabled";

  return (
    <button
      {...rest}
      disabled={isDisabled}
      className={[styles.switch, className ?? ""].filter(Boolean).join(" ")}
      data-state={state}
    >
      {showIcon && (
        <span className={styles.iconSlot} aria-hidden="true">
          {icon ?? <ArrowRight size={16} weight="regular" />}
        </span>
      )}
      <span className={styles.label}>{label}</span>
    </button>
  );
}
