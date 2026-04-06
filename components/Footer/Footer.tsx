"use client";

import React from "react";
import {
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import SwitchGroup from "@/components/SwitchGroup";
import type { SwitchGroupMode } from "@/components/SwitchGroup";
import styles from "./Footer.module.css";

export interface FooterProps {
  activeMode?: SwitchGroupMode;
  onToggle?: (mode: SwitchGroupMode) => void;
  instagramUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
  emailUrl?: string;
  className?: string;
}

export default function Footer({
  activeMode = "light",
  onToggle,
  instagramUrl = "https://www.instagram.com/binatti.co/",
  linkedinUrl = "https://www.linkedin.com/company/binatticommunity/",
  youtubeUrl = "https://www.youtube.com/@binatti_co",
  emailUrl = "mailto:oi@binatti.co",
  className,
}: FooterProps) {
  return (
    <footer
      className={[styles.footer, className ?? ""].filter(Boolean).join(" ")}
      data-theme="dark"
    >
      {/* Theme toggle */}
      <SwitchGroup activeMode={activeMode} onToggle={onToggle} />

      {/* Social links */}
      <div className={styles.social} aria-label="Redes sociais">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="Instagram da Binatti"
        >
          <InstagramLogo size={24} />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="LinkedIn da Binatti"
        >
          <LinkedinLogo size={24} />
        </a>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label="YouTube da Binatti"
        >
          <YoutubeLogo size={24} />
        </a>
        <a
          href={emailUrl}
          className={styles.socialLink}
          aria-label="Email da Binatti"
        >
          <EnvelopeSimple size={24} />
        </a>
      </div>

      {/* Divider */}
      <div className={styles.divider} aria-hidden="true" />

      {/* Copyright */}
      <p className={styles.copyright}>
        @2025 Binatti Community. Todos os direitos reservados.
      </p>
    </footer>
  );
}
