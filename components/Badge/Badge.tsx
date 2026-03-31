import React from "react";
import styles from "./Badge.module.css";

export type BadgeVariant = "outline" | "filled" | "mono";
export type BadgeRadius = "rounded" | "square" | "none";
export type BadgeSize = "sm" | "md";

export interface BadgeProps {
  label?: string;
  variant?: BadgeVariant;
  radius?: BadgeRadius;
  size?: BadgeSize;
  className?: string;
}

export default function Badge({
  label = "TAG CONTENT",
  variant = "outline",
  radius = "rounded",
  size = "sm",
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

  return (
    <div className={classNames} data-variant={variant} data-radius={radius} data-size={size}>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
