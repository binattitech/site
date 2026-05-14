"use client";

import React, { useEffect, useRef, useState } from "react";
import { X } from "@phosphor-icons/react";
import Button from "@/components/Button";
import NavMenuDropdown from "@/components/NavMenuDropdown";
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
  { label: "Trilhas", href: "/trilhas" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/sobre" },
];

export default function Header({
  navItems = DEFAULT_NAV,
  logoSrc = "/brand/logo.svg",
  logoAlt = "Binatti",
  onVolunteer,
  onStudy = () => { window.location.href = "/trilhas"; },
  onMenuOpen,
  className,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);    // controla ícone e aria
  const [isVisible, setIsVisible] = useState(false); // controla montagem (mantém durante close)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const CLOSE_DURATION = 200; // ms — deve bater com slideUp

  const openMenu = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsOpen(true);
    setIsVisible(true);
    onMenuOpen?.();
  };

  const closeMenu = () => {
    setIsOpen(false);
    closeTimerRef.current = setTimeout(() => setIsVisible(false), CLOSE_DURATION);
  };

  const handleMenuToggle = () => isOpen ? closeMenu() : openMenu();

  useEffect(() => () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }, []);

  return (
    <header
      className={[styles.header, className ?? ""].filter(Boolean).join(" ")}
      data-menu-open={isOpen}
    >
      <div className={styles.nav}>

        {/* ── Logo ── */}
        <a href="/" className={styles.logo} aria-label="Ir para a home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt={logoAlt} className={styles.logoImg} />
        </a>

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
          <Button
            variant="outline"
            kind="icon"
            content={isOpen ? "Fechar menu" : "Abrir menu"}
            icon={isOpen ? <X size={24} color="var(--fg-emphasis)" /> : undefined}
            onClick={handleMenuToggle}
            aria-expanded={isOpen}
          />
        </div>

      </div>

      {/* ── Dropdown mobile ── */}
      {isVisible && (
        <div className={[styles.dropdownWrapper, !isOpen ? styles.closing : ""].filter(Boolean).join(" ")}>
          <NavMenuDropdown
            variant="complete"
            navItems={navItems}
            onVolunteer={onVolunteer}
            onStudy={onStudy}
            className={styles.dropdownFull}
          />
        </div>
      )}
    </header>
  );
}
