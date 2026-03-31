"use client";

import React from "react";
import { ArrowRight, List } from "@phosphor-icons/react";
import styles from "./Button.module.css";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonState = "default" | "hover";
export type ButtonKind = "text" | "icon";
export type ButtonVariant = "filled" | "outline";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  content?: string;
  size?: ButtonSize;
  state?: ButtonState;
  kind?: ButtonKind;
  variant?: ButtonVariant;
  /** Overrides default icon. For kind="icon": replaces hamburger. For kind="text" with showIcon: replaces arrow. */
  icon?: React.ReactNode;
  /** Shows arrow icon to the right of text (kind="text" only) */
  showIcon?: boolean;
  htmlType?: "submit" | "reset" | "button";
}

export default function Button({
  content = "button",
  disabled = false,
  size = "md",
  state = "default",
  kind = "text",
  variant = "filled",
  icon,
  showIcon = false,
  htmlType = "button",
  className,
  ...rest
}: ButtonProps) {
  const isFilled = variant === "filled";
  const isIcon = kind === "icon";

  const classNames = [
    styles.button,
    isIcon ? styles.sizeIcon : styles.sizeText,
    state === "hover" ? styles.stateHover : "",
    disabled ? styles.disabled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const iconColor = isFilled ? "var(--fg-offwhite)" : "var(--fg-emphasis)";

  return (
    <button
      {...rest}
      type={htmlType}
      disabled={disabled}
      className={classNames}
      data-variant={variant}
      data-size={size}
      data-state={state}
      data-kind={kind}
    >
      {isIcon ? (
        <span className={styles.icon} aria-label={content}>
          {icon ?? <List size={24} color={iconColor} />}
        </span>
      ) : (
        <>
          {content}
          {showIcon && (
            <span className={styles.arrow} aria-hidden="true">
              {icon ?? <ArrowRight size={20} color={iconColor} />}
            </span>
          )}
        </>
      )}
    </button>
  );
}
