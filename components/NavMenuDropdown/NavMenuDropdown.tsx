"use client";

import React from "react";
import Button from "@/components/Button";
import ToggleNavMenu from "@/components/ToggleNavMenu";
import type { NavItem } from "@/components/Header";
import styles from "./NavMenuDropdown.module.css";

export type NavMenuDropdownVariant = "complete" | "cta-buttons";

export interface NavMenuDropdownProps {
  /** "complete" → itens de nav + botões CTA | "cta-buttons" → só botões */
  variant?: NavMenuDropdownVariant;
  /** Itens do menu — exibidos apenas na variante "complete" */
  navItems?: NavItem[];
  /** Label do botão outline */
  volunteerLabel?: string;
  /** Label do botão filled */
  studyLabel?: string;
  /** Callback do botão outline */
  onVolunteer?: () => void;
  /** Callback do botão filled */
  onStudy?: () => void;
  className?: string;
}

const DEFAULT_NAV: NavItem[] = [
  { label: "Trilhas" },
  { label: "Oficinas" },
  { label: "Blog" },
  { label: "Sobre" },
];

export default function NavMenuDropdown({
  variant = "complete",
  navItems = DEFAULT_NAV,
  volunteerLabel = "Seja voluntária",
  studyLabel = "Bora estudar",
  onVolunteer,
  onStudy,
  className,
}: NavMenuDropdownProps) {
  const isComplete = variant === "complete";

  const dropdownClass = [
    styles.dropdown,
    isComplete ? styles.variantComplete : styles.variantCtaButtons,
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={dropdownClass} data-variant={variant}>

      {/* ── Itens de navegação (só na variante complete) ── */}
      {isComplete && (
        <nav className={styles.navList} aria-label="Navegação mobile">
          {navItems.map((item) => (
            <ToggleNavMenu
              key={item.label}
              content={item.label}
              state={item.active ? "active" : "default"}
              onClick={item.href ? () => { window.location.href = item.href! } : undefined}
            />
          ))}
        </nav>
      )}

      {/* ── Botões CTA ── */}
      <div className={styles.cta}>
        <Button
          variant="outline"
          kind="text"
          content={volunteerLabel}
          onClick={onVolunteer}
        />
        <Button
          variant="filled"
          kind="text"
          content={studyLabel}
          onClick={onStudy}
        />
      </div>

    </div>
  );
}
