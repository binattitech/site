import React from "react";
import styles from "./TableOfContents.module.css";

export interface TocItem {
  label: string;
  href?: string;
}

export interface TableOfContentsProps {
  title?: string;
  items?: TocItem[];
  activeIndex?: number;
  onItemClick?: (index: number, item: TocItem) => void;
  className?: string;
}

const DEFAULT_ITEMS: TocItem[] = [
  { label: "Definição básica de cibersegurança" },
  { label: "Blue Team" },
  { label: "Red Team" },
  { label: "Desenvolvimento seguro" },
  { label: "Importância da cibersegurança" },
  { label: "Conclusão" },
  { label: "Referências" },
];

export default function TableOfContents({
  title = "Confira neste artigo",
  items = DEFAULT_ITEMS,
  activeIndex = 0,
  onItemClick,
  className,
}: TableOfContentsProps) {
  return (
    <nav
      className={[styles.toc, className ?? ""].filter(Boolean).join(" ")}
      aria-label="Índice do artigo"
    >
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
      </div>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i}>
            <button
              className={styles.item}
              data-active={i === activeIndex}
              onClick={() => onItemClick?.(i, item)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
