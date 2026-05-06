import React from "react";
import styles from "./Badge.module.css";

export type BadgeVariant = "outline" | "filled" | "mono";
export type BadgeRadius = "rounded" | "none";
export type BadgeSize = "sm" | "md";

export interface BadgeProps {
  label?: string;
  variant?: BadgeVariant;
  radius?: BadgeRadius;
  size?: BadgeSize;
  color?: string;
  className?: string;
}

export default function Badge({
  label = "TAG CONTENT",
  variant = "outline",
  radius = "rounded",
  size = "sm",
  color,
  className,
}: BadgeProps) {
  const classNames = [
    styles.badge,
    styles[`variant-${variant}`],
    styles[`radius-${radius}`],
    styles[`size-${size}`],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const style =
    variant === "filled" && radius === "rounded" && size === "sm" && color
      ? ({
          "--badge-bg": `var(--${color}-200)`,
          "--badge-color": `var(--${color}-600)`,
        } as React.CSSProperties)
      : undefined;

  return (
    <div className={classNames} data-variant={variant} data-radius={radius} data-size={size} style={style}>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
