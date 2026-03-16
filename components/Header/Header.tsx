"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import ToggleNavMenu from "@/components/ToggleNavMenu";
import styles from "./Header.module.css";

export type HeaderSize = "lg" | "md" | "sm";

export interface NavItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface HeaderProps {
  /** Tamanho / breakpoint do header */
  size?: HeaderSize;
  /** Itens do menu de navegação */
  navItems?: NavItem[];
  /** Src do logo */
  logoSrc?: string;
  /** Alt do logo */
  logoAlt?: string;
  /** Callback do botão "Seja voluntária" (outline) */
  onVolunteer?: () => void;
  /** Callback do botão "Bora estudar" (filled) */
  onStudy?: () => void;
  /** Callback do hamburguer (sm/md) */
  onMenuOpen?: () => void;
  className?: string;
}

const DEFAULT_NAV: NavItem[] = [
  { label: "Trilhas" },
  { label: "Oficinas" },
  { label: "Blog" },
  { label: "Sobre" },
];

export default function Header({
  size = "lg",
  navItems = DEFAULT_NAV,
  logoSrc = "/logo.png",
  logoAlt = "Binatti",
  onVolunteer,
  onStudy,
  onMenuOpen,
  className,
}: HeaderProps) {
  const isLg = size === "lg";
  const isMd = size === "md";
  const isSm = size === "sm";

  const headerClass = [
    styles.header,
    isLg ? styles.sizeLg : isMd ? styles.sizeMd : styles.sizeSm,
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const navClass = [
    styles.nav,
    isLg ? styles.navLg : isMd ? styles.navMd : styles.navSm,
  ].join(" ");

  return (
    <header className={headerClass} data-size={size}>
      <div className={navClass}>

        {/* ── Logo ── */}
        <div className={[styles.logo, !isSm ? styles.logoAbsolute : ""].join(" ")}>
          <Image
            src={logoSrc}
            alt={logoAlt}
            fill
            style={{ objectFit: "contain", objectPosition: "left center" }}
            priority
          />
        </div>

        {/* ── Menu central (lg + md) ── */}
        {(isLg || isMd) && (
          <nav className={styles.menu} aria-label="Navegação principal">
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

        {/* ── Ações: lg → dois botões texto ── */}
        {isLg && (
          <div className={styles.actions}>
            <Button
              variant="outline"
              kind="text"
              content="Seja voluntária"
              onClick={onVolunteer}
            />
            <Button
              variant="filled"
              kind="text"
              content="Bora estudar"
              onClick={onStudy}
            />
          </div>
        )}

        {/* ── Ações: md → hamburger absoluto ── */}
        {isMd && (
          <div className={styles.iconAction}>
            <Button
              variant="outline"
              kind="icon"
              content="Abrir menu"
              onClick={onMenuOpen}
            />
          </div>
        )}

        {/* ── Ações: sm → hamburger inline (flex) ── */}
        {isSm && (
          <Button
            variant="outline"
            kind="icon"
            content="Abrir menu"
            className={styles.iconActionInline}
            onClick={onMenuOpen}
          />
        )}

      </div>
    </header>
  );
}
