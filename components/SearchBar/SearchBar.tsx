"use client";

import React from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import styles from "./SearchBar.module.css";

export type SearchBarState = "default" | "hover" | "typing";

export interface SearchBarProps {
  state?: SearchBarState;
  value?: string;
  placeholder?: string;
  placeholderBold?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
  onClear?: () => void;
  onFocus?: () => void;
  className?: string;
}

export default function SearchBar({
  state = "default",
  value = "",
  placeholder = "Busca aí: ",
  placeholderBold = "testes automatizados",
  onChange,
  onSearch,
  onClear,
  onFocus,
  className,
}: SearchBarProps) {
  const isTyping = state === "typing";
  const isHover = state === "hover";

  return (
    <div
      className={[
        styles.container,
        isHover ? styles.hover : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-state={state}
    >
      {isTyping ? (
        <input
          className={styles.input}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          autoFocus
          aria-label="Buscar"
        />
      ) : (
        <button
          className={styles.placeholderBtn}
          onClick={onFocus}
          aria-label="Abrir busca"
        >
          <span className={styles.placeholderText}>
            {placeholder}
            <strong className={styles.placeholderBold}>{placeholderBold}</strong>
          </span>
        </button>
      )}

      {isTyping && (
        <button
          className={styles.clearBtn}
          onClick={onClear}
          aria-label="Limpar busca"
        >
          <X size={20} color="var(--fg-emphasis)" />
        </button>
      )}

      <button
        className={styles.searchBtn}
        onClick={onSearch}
        aria-label="Buscar"
      >
        <MagnifyingGlass size={24} color="var(--fg-offwhite)" />
      </button>
    </div>
  );
}
