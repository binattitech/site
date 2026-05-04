"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import NavLink from "@/components/NavLink";
import SearchBar from "@/components/SearchBar";
import styles from "./SearchModal.module.css";

export interface SearchResult {
  title: string;
  author: string;
  tag?: string;
  href?: string;
}

export interface SearchModalProps {
  isOpen: boolean;
  results?: SearchResult[];
  onClose: () => void;
  onSearch?: (value: string) => void;
  onQueryChange?: (query: string) => void;
}

export default function SearchModal({
  isOpen,
  results = [],
  onClose,
  onSearch,
  onQueryChange,
}: SearchModalProps) {
  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => setMounted(true), []);

  // Limpa o campo ao abrir
  useEffect(() => {
    if (isOpen) setValue("");
  }, [isOpen]);

  // Fecha no Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Bloqueia scroll do body
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const isNothingFound = value.trim().length > 0 && results.length === 0;

  return createPortal(
    <div
      className={styles.overlay}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Buscar"
    >
      <div className={styles.modal}>

        {/* SearchBar em estado typing — foco automático via autoFocus do input */}
        <SearchBar
          state="typing"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onQueryChange?.(e.target.value);
          }}
          onClear={() => {
            setValue("");
            onQueryChange?.("");
          }}
          onSearch={() => onSearch?.(value)}
        />

        {/* Corpo — resultados ou estado vazio */}
        <div className={styles.body}>
          {isNothingFound ? (
            <p className={styles.empty}>
              <strong>Nenhum</strong>{" "}resultado encontrado...
            </p>
          ) : (
            results.map((result, i) => (
              <NavLink
                key={i}
                title={result.title}
                autor={result.author}
                badgeLabel={result.tag}
                href={result.href ?? "#"}
              />
            ))
          )}
        </div>

      </div>
    </div>,
    document.body
  );
}
