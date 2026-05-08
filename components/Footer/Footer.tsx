"use client";

import React, { useState } from "react";
import {
  InstagramLogo,
  LinkedinLogo,
  EnvelopeSimple,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import styles from "./Footer.module.css";

export interface FooterProps {
  instagramUrl?: string;
  linkedinUrl?: string;
  emailUrl?: string;
  onSubscribe?: (email: string) => void;
  className?: string;
}

export default function Footer({
  instagramUrl = "https://www.instagram.com/binatti.co/",
  linkedinUrl = "https://www.linkedin.com/company/binatticommunity/",
  emailUrl = "mailto:oi@binatti.co",
  onSubscribe,
  className,
}: FooterProps) {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email && onSubscribe) onSubscribe(email);
  }

  return (
    <footer
      className={[styles.footer, className ?? ""].filter(Boolean).join(" ")}
      data-theme="dark"
    >
      <div className={styles.container}>
        {/* ── Frase ── */}
        <div className={styles.frase}>
          <p className={styles.brand}>Binatti</p>
          <div className={styles.citacao}>
            <p className={styles.quote}>
              "Se a educação sozinha não transforma a sociedade, sem ela
              tampouco a sociedade muda."
            </p>
            <p className={styles.attribution}>Paulo Freire</p>
          </div>
        </div>

        {/* ── Divisor ── */}
        <div className={styles.divider} aria-hidden="true" />

        {/* ── Body: newsletter + sitemap ── */}
        <div className={styles.body}>
          {/* Newsletter */}
          <div className={styles.newsletter}>
            <p className={styles.newsletterLabel}>Assine nossa newsletter</p>
            <form className={styles.inputRow} onSubmit={handleSubmit}>
              <input
                type="email"
                className={styles.input}
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email para newsletter"
              />
              <button
                type="submit"
                className={styles.submitBtn}
                aria-label="Enviar"
              >
                <PaperPlaneTilt size={24} />
              </button>
            </form>
            <p className={styles.newsletterNote}>
              Ao se inscrever, você concorda com nossa{" "}
              <a href="/privacidade" className={styles.privacyLink}>
                política de privacidade
              </a>{" "}
              e termos de uso.
            </p>
          </div>

          {/* Sitemap */}
          <div className={styles.sitemap}>
            <div className={styles.sitemapGroup}>
              <p className={styles.sitemapTitle}>Trilhas</p>
              <a href="/trilhas/ux-design" className={styles.sitemapLink}>UX Design</a>
              <a href="/trilhas/desenvolvimento-web" className={styles.sitemapLink}>Dev Web</a>
              <a href="/trilhas/ciberseguranca" className={styles.sitemapLink}>Cibersegurança</a>
            </div>
            <div className={styles.sitemapGroup}>
              <p className={styles.sitemapTitle}>Blog</p>
              <a href="/blog" className={styles.sitemapLink}>Artigos</a>
              <a href="/blog/tutoriais" className={styles.sitemapLink}>Tutoriais</a>
              <a href="/blog" className={styles.sitemapLink}>Ver tudo</a>
            </div>
            <div className={styles.sitemapGroup}>
              <p className={styles.sitemapTitle}>Sobre</p>
              <a href="/sobre" className={styles.sitemapLink}>Sobre nós</a>
              <a href="/contribuidoras" className={styles.sitemapLink}>Contribuidoras</a>
              <a href="mailto:oi@binatti.co" className={styles.sitemapLink}>Contato</a>
            </div>
          </div>
        </div>

        {/* ── Divisor ── */}
        <div className={styles.divider} aria-hidden="true" />

        {/* ── Bottom ── */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>©2025 Binatti Community</p>
          <div className={styles.social} aria-label="Redes sociais">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Instagram da Binatti"
            >
              <InstagramLogo size={24} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="LinkedIn da Binatti"
            >
              <LinkedinLogo size={24} />
            </a>
            <a
              href={emailUrl}
              className={styles.socialBtn}
              aria-label="Email da Binatti"
            >
              <EnvelopeSimple size={24} />
            </a>
          </div>
          <p className={styles.credit}>Website by miluarte</p>
        </div>
      </div>
    </footer>
  );
}
