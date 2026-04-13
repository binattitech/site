"use client";

import React from "react";
import Button from "@/components/Button";
import ToggleNavMenu from "@/components/ToggleNavMenu";
import styles from "./Header.module.css";

export interface NavItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface HeaderProps {
  navItems?: NavItem[];
  logoSrc?: string;
  logoAlt?: string;
  onVolunteer?: () => void;
  onStudy?: () => void;
  onMenuOpen?: () => void;
  className?: string;
}

const DEFAULT_NAV: NavItem[] = [
  { label: "Trilhas" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre" },
];

export default function Header({
  navItems = DEFAULT_NAV,
  logoSrc = "/brand/logo.svg",
  logoAlt = "Binatti",
  onVolunteer,
  onStudy,
  onMenuOpen,
  className,
}: HeaderProps) {
  return (
    <header className={[styles.header, className ?? ""].filter(Boolean).join(" ")}>
      <div className={styles.nav}>

        {/* ── Logo ── */}
        <div className={styles.logo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt={logoAlt} className={styles.logoImg} />
        </div>

        {/* ── Menu central (hidden on sm) ── */}
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

        {/* ── Botões de ação (lg only) ── */}
        <div className={styles.actions}>
          <Button variant="outline" kind="text" content="Seja voluntária" onClick={onVolunteer} />
          <Button variant="filled"  kind="text" content="Bora estudar"    onClick={onStudy} />
        </div>

        {/* ── Hamburger (md + sm) ── */}
        <div className={styles.hamburger}>
          <Button variant="outline" kind="icon" content="Abrir menu" onClick={onMenuOpen} />
        </div>

      </div>
    </header>
  );
}
