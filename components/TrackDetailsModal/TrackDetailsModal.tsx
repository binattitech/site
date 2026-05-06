"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "@phosphor-icons/react";
import Avatar from "@/components/Avatar";
import Badge from "@/components/Badge";
import styles from "./TrackDetailsModal.module.css";

export type TrackLevel = "iniciante" | "intermediario" | "avancado";

export interface TrackContributor {
  name: string;
  role: string;
  avatarSrc?: string;
}

export interface TrackItem {
  id: string;
  title: string;
  level: TrackLevel;
  format: string;
  href?: string;
}

export interface TrackDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  color?: string;
  trackName: string;
  description: string;
  contributors: TrackContributor[];
  trilhaItems?: TrackItem[];
  projetoItems?: TrackItem[];
}

const LEVEL: Record<TrackLevel, { color: string; label: string }> = {
  iniciante:    { color: "red",    label: "Iniciante" },
  intermediario:{ color: "yellow", label: "Intermediário" },
  avancado:     { color: "lime",   label: "Avançado" },
};

export default function TrackDetailsModal({
  isOpen,
  onClose,
  color = "rose",
  trackName,
  description,
  contributors,
  trilhaItems = [],
  projetoItems = [],
}: TrackDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<"trilha" | "projetos">("trilha");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const themeStyle = {
    "--primary-50":  `var(--${color}-50)`,
    "--primary-100": `var(--${color}-100)`,
    "--primary-200": `var(--${color}-200)`,
    "--primary-300": `var(--${color}-300)`,
    "--primary-400": `var(--${color}-400)`,
    "--primary-500": `var(--${color}-500)`,
    "--primary-600": `var(--${color}-600)`,
    "--primary-900": `var(--${color}-900)`,
  } as React.CSSProperties;

  const items = activeTab === "trilha" ? trilhaItems : projetoItems;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        style={themeStyle}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={trackName}
      >
        <aside className={styles.sidebar}>
          <header className={styles.sidebarHeader}>
            <h2 className={styles.trackName}>{trackName}</h2>
            <p className={styles.description}>{description}</p>
          </header>
          <hr className={styles.divider} />
          <div className={styles.contributors}>
            {contributors.map((c, i) => (
              <Avatar
                key={i}
                variant="withText"
                size="sm"
                name={c.name}
                role={c.role}
                avatarSrc={c.avatarSrc}
              />
            ))}
          </div>
        </aside>

        <main className={styles.content}>
          <div className={styles.tabs}>
            {(["trilha", "projetos"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                className={styles.tab}
                data-active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "trilha" ? "Trilha" : "Projetos"}
              </button>
            ))}
          </div>

          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.id} className={styles.item}>
                <div className={styles.itemHeader}>
                  <Badge
                    variant="light"
                    color={LEVEL[item.level].color}
                    label={LEVEL[item.level].label}
                  />
                  <Badge
                    variant="outline"
                    radius="rounded"
                    size="sm"
                    label={item.format}
                  />
                </div>
                <p className={styles.itemTitle}>{item.title}</p>
              </li>
            ))}
          </ul>
        </main>

        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Fechar"
        >
          <X size={18} color="var(--fg-emphasis)" />
        </button>
      </div>
    </div>,
    document.body
  );
}
