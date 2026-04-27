"use client";

import React from "react";
import styles from "./PaginationItem.module.css";

export type PaginationItemState = "default" | "hover" | "active" | "disabled";

export interface PaginationItemProps {
  label?: string;
  state?: PaginationItemState;
  onClick?: () => void;
  className?: string;
}

export default function PaginationItem({
  label = "1",
  state = "default",
  onClick,
  className,
}: PaginationItemProps) {
  return (
    <button
      className={[styles.item, className ?? ""].filter(Boolean).join(" ")}
      data-state={state}
      disabled={state === "disabled"}
      onClick={state === "disabled" ? undefined : onClick}
      aria-current={state === "active" ? "page" : undefined}
    >
      {label}
    </button>
  );
}
