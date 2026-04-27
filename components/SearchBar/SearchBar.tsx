"use client";

import React, { useEffect, useRef, useState } from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import styles from "./SearchBar.module.css";

const ROTATING_WORDS = [
  "design system",
  "handoff no Figma",
  "componentes React",
  "IA no fluxo de UX",
  "Git para iniciantes",
  "testes automatizados",
  "acessibilidade na prática",
  "CSS Grid",
  "documentação de API",
  "prototipação no Figma",
  "user stories",
  "debugging com IA",
  "deploy no Vercel",
  "pesquisa com usuário",
  "banco de dados",
  "tokens de design",
];

const TYPE_SPEED = 80;
const ERASE_SPEED = 50;
const PAUSE_AFTER_TYPE = 2000;

export type SearchBarState = "default" | "hover" | "typing";

export interface SearchBarProps {
  state?: SearchBarState;
  value?: string;
  placeholder?: string;
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
  onChange,
  onSearch,
  onClear,
  onFocus,
  className,
}: SearchBarProps) {
  const isTyping = state === "typing";
  const isHover = state === "hover";

  const [displayedWord, setDisplayedWord] = useState("");
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isErasingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isTyping) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return;
    }

    const tick = () => {
      const currentWord = ROTATING_WORDS[wordIndexRef.current];

      if (!isErasingRef.current) {
        if (charIndexRef.current < currentWord.length) {
          charIndexRef.current++;
          setDisplayedWord(currentWord.slice(0, charIndexRef.current));
          timeoutRef.current = setTimeout(tick, TYPE_SPEED);
        } else {
          timeoutRef.current = setTimeout(() => {
            isErasingRef.current = true;
            tick();
          }, PAUSE_AFTER_TYPE);
        }
      } else {
        if (charIndexRef.current > 0) {
          charIndexRef.current--;
          setDisplayedWord(currentWord.slice(0, charIndexRef.current));
          timeoutRef.current = setTimeout(tick, ERASE_SPEED);
        } else {
          isErasingRef.current = false;
          wordIndexRef.current = (wordIndexRef.current + 1) % ROTATING_WORDS.length;
          timeoutRef.current = setTimeout(tick, TYPE_SPEED);
        }
      }
    };

    tick();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isTyping]);

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
            <strong className={styles.placeholderBold}>{displayedWord}</strong>
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
