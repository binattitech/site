"use client";

import React from "react";
import styles from "./Button.module.css";

/* ─────────────────────────────────────────────────────────────
 * Tipos — espelham todas as propriedades do componente no Figma
 * ───────────────────────────────────────────────────────────── */
export type ButtonSize = "md";
export type ButtonState = "default" | "hover";
export type ButtonKind = "text" | "icon";   // "type" é palavra reservada no HTML
export type ButtonVariant = "filled" | "outline";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  /** Texto exibido quando kind="text" */
  content?: string;
  /** Tamanho do botão (apenas "md" por enquanto) */
  size?: ButtonSize;
  /**
   * Estado visual — "hover" força visualmente o estilo de hover,
   * útil para stories/documentação. Em produção deixe "default".
   */
  state?: ButtonState;
  /** "text" exibe label; "icon" exibe apenas o ícone (hamburger) */
  kind?: ButtonKind;
  /** "filled" = fundo preto; "outline" = borda preta, fundo transparente */
  variant?: ButtonVariant;
  /** Ícone customizado para kind="icon". Padrão: ícone hamburger do Figma */
  icon?: React.ReactNode;
  /** type nativo do <button> (submit | reset | button) */
  htmlType?: "submit" | "reset" | "button";
}

/* ─────────────────────────────────────────────────────────────
 * Ícone padrão — Hamburger (phosphor:List) do Figma
 * Reproduzido como SVG inline para não depender de assets externos
 * ───────────────────────────────────────────────────────────── */
function HamburgerIcon({ color }: { color: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="4" y1="6"  x2="20" y2="6"  stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="12" x2="20" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="18" x2="20" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
 * Componente
 * ───────────────────────────────────────────────────────────── */
export default function Button({
  content = "button",
  disabled = false,
  size = "md",
  state = "default",
  kind = "text",
  variant = "filled",
  icon,
  htmlType = "button",
  className,
  ...rest
}: ButtonProps) {
  const isFilled = variant === "filled";
  const isIcon = kind === "icon";

  const classNames = [
    styles.button,
    isFilled ? styles.filled : styles.outline,
    isIcon ? styles.sizeIcon : styles.sizeText,
    state === "hover" ? styles.stateHover : "",
    disabled ? styles.disabled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  /* Cor do ícone acompanha a variante */
  const iconColor = isFilled
    ? "var(--action-primary-fg)"
    : "var(--action-outline-fg)";

  return (
    <button
      {...rest}
      type={htmlType}
      disabled={disabled}
      className={classNames}
      data-variant={variant}
      data-size={size}
      data-state={state}
      data-kind={kind}
    >
      {isIcon ? (
        <span className={styles.icon} aria-label={content}>
          {icon ?? <HamburgerIcon color={iconColor} />}
        </span>
      ) : (
        content
      )}
    </button>
  );
}
