"use client";

import React from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import PaginationItem from "@/components/PaginationItem";
import styles from "./PaginationGroup.module.css";

export interface PaginationGroupProps {
  pages: number[];
  activePage: number;
  hasPrev?: boolean;
  hasNext?: boolean;
  onPageChange: (page: number) => void;
  onPrev?: () => void;
  onNext?: () => void;
  className?: string;
}

export default function PaginationGroup({
  pages,
  activePage,
  hasPrev = true,
  hasNext = true,
  onPageChange,
  onPrev,
  onNext,
  className,
}: PaginationGroupProps) {
  return (
    <div
      className={[styles.group, className ?? ""].filter(Boolean).join(" ")}
      role="navigation"
      aria-label="Paginação"
    >
      {/* Prev */}
      <button
        className={styles.arrow}
        onClick={onPrev}
        disabled={!hasPrev}
        aria-label="Página anterior"
      >
        <CaretLeft size={16} color="var(--fg-emphasis)" />
      </button>

      {/* Itens */}
      {pages.map((page) => (
        <PaginationItem
          key={page}
          label={String(page)}
          state={page === activePage ? "active" : "default"}
          onClick={() => onPageChange(page)}
        />
      ))}

      {/* Next */}
      <button
        className={styles.arrow}
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Próxima página"
      >
        <CaretRight size={16} color="var(--fg-emphasis)" />
      </button>
    </div>
  );
}
