"use client";

import styles from "./Tab.module.css";

export interface TabProps {
  state?: "default" | "active" | "disable";
  label?: string;
  onClick?: () => void;
}

export default function Tab({ state = "default", label = "Tab", onClick }: TabProps) {
  return (
    <button
      className={styles.tab}
      data-state={state}
      onClick={onClick}
      disabled={state === "disable"}
    >
      <span className={styles.label}>{label}</span>
    </button>
  );
}
