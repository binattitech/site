"use client";

import React from "react";
import PaginationGroup from "@/components/PaginationGroup";
import styles from "./Pagination.module.css";

export interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  /** Quantos números de página exibir por vez (default 5) */
  visiblePages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

function getVisiblePages(current: number, total: number, visible: number): number[] {
  if (total <= visible) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const half = Math.floor(visible / 2);
  let start = Math.max(1, current - half);
  const end = Math.min(total, start + visible - 1);
  // Ajusta se chegou no fim
  start = Math.max(1, end - visible + 1);
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export default function Pagination({
  currentPage = 1,
  totalPages = 100,
  visiblePages = 5,
  onPageChange,
  className,
}: PaginationProps) {
  const pages = getVisiblePages(currentPage, totalPages, visiblePages);

  const goTo = (page: number) => onPageChange?.(page);
  const prev = () => goTo(Math.max(1, currentPage - 1));
  const next = () => goTo(Math.min(totalPages, currentPage + 1));

  return (
    <div className={[styles.pagination, className ?? ""].filter(Boolean).join(" ")}>
      <p className={styles.label}>
        Página{" "}
        <strong className={styles.labelCurrent}>{currentPage}</strong>
        {" "}de {totalPages}
      </p>

      <PaginationGroup
        pages={pages}
        activePage={currentPage}
        hasPrev={currentPage > 1}
        hasNext={currentPage < totalPages}
        onPageChange={goTo}
        onPrev={prev}
        onNext={next}
      />
    </div>
  );
}
