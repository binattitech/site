import React from "react";
import styles from "./TagArea.module.css";

export interface TagAreaProps {
  content?: string;
  className?: string;
}

export default function TagArea({ content = "tag content", className }: TagAreaProps) {
  return (
    <div className={[styles.tag, className ?? ""].filter(Boolean).join(" ")}>
      <span className={styles.label}>{content}</span>
    </div>
  );
}
