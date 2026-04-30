"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  X,
  CaretDown,
  LinkedinLogo,
  InstagramLogo,
  GithubLogo,
  Globe,
  BehanceLogo,
} from "@phosphor-icons/react";
import PersonalContribution from "@/components/PersonalContribution";
import type {
  ContributionArticle,
  ContributionVideo,
} from "@/components/PersonalContribution";
import styles from "./WindowProfile.module.css";

export type SocialPlatform =
  | "linkedin"
  | "instagram"
  | "github"
  | "portfolio"
  | "behance";

const SOCIAL_ICONS: Record<SocialPlatform, React.ElementType> = {
  linkedin: LinkedinLogo,
  instagram: InstagramLogo,
  github: GithubLogo,
  portfolio: Globe,
  behance: BehanceLogo,
};

const SOCIAL_LABELS: Record<SocialPlatform, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  github: "GitHub",
  portfolio: "Portfólio",
  behance: "Behance",
};

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface WindowProfileProps {
  username?: string;
  name?: string;
  bio?: string;
  bannerSrc?: string;
  avatarSrc?: string;
  socialLinks?: SocialLink[];
  articles?: ContributionArticle[];
  videos?: ContributionVideo[];
  isOpen?: boolean;
  onClose?: () => void;
}

export default function WindowProfile({
  username = "marinadelima",
  name = "Marina de Lima",
  bio = "Designer UX/UI com formação em Engenharia de Software e experiência sólida na criação de produtos digitais centrados no usuário.",
  bannerSrc,
  avatarSrc,
  socialLinks = [],
  articles = [],
  videos = [],
  isOpen = false,
  onClose,
}: WindowProfileProps) {
  const [bioExpanded, setBioExpanded] = useState(false);
  const [bioOverflows, setBioOverflows] = useState(false);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  // Hydration guard — portal requires document
  useEffect(() => setMounted(true), []);

  // Animate open / close
  useEffect(() => {
    if (isOpen) {
      setClosing(false);
      setVisible(true);
    } else if (visible) {
      setClosing(true);
      const t = setTimeout(() => {
        setVisible(false);
        setClosing(false);
      }, 220);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Detecta se a bio ultrapassa 7 linhas
  useEffect(() => {
    if (!visible || !bioRef.current) return;
    const el = bioRef.current;
    setBioOverflows(el.scrollHeight > el.clientHeight);
  }, [visible, bio]);

  // Block body scroll while open
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!mounted || !visible) return null;

  return createPortal(
    <div
      className={styles.overlay}
      data-closing={closing}
      onClick={onClose}
    >
      <div
        className={styles.windowModal}
        data-closing={closing}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.window}>
          {/* Titlebar */}
          <div className={styles.titlebar}>
            <span className={styles.titlebarUsername}>{username}</span>
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Fechar"
            >
              <X size={16} />
            </button>
          </div>

          {/* Main */}
          <div className={styles.main}>
            {/* Banner */}
            <div className={styles.banner}>
              {bannerSrc && (
                <img src={bannerSrc} alt="" className={styles.bannerImg} />
              )}
            </div>

            {/* Content row */}
            <div className={styles.content}>
              {/* Sidebar */}
              <aside className={styles.sidebar}>
                <p className={styles.name}>{name}</p>

                {/* Bio */}
                <div className={styles.bioSection}>
                  <p className={styles.sectionLabel}>Sobre mim</p>
                  <p
                    ref={bioRef}
                    className={styles.bio}
                    data-expanded={bioExpanded}
                  >
                    {bio}
                  </p>
                  {bioOverflows && (
                    <button
                      className={styles.verMais}
                      onClick={() => setBioExpanded((v) => !v)}
                      data-expanded={bioExpanded}
                    >
                      <span>{bioExpanded ? "Ver menos" : "Ver mais"}</span>
                      <span className={styles.caretIcon}>
                        <CaretDown size={16} />
                      </span>
                    </button>
                  )}
                </div>

                {/* Social */}
                {socialLinks.length > 0 && (
                  <div className={styles.socialSection}>
                    <p className={styles.sectionLabel}>Social</p>
                    <div className={styles.socialLinks}>
                      {socialLinks.map(({ platform, url }) => {
                        const Icon = SOCIAL_ICONS[platform];
                        return (
                          <a
                            key={platform}
                            href={url}
                            className={styles.socialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon
                              size={20}
                              weight="fill"
                              className={styles.socialLinkIcon}
                            />
                            <span className={styles.socialLinkLabel}>
                              {SOCIAL_LABELS[platform]}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </aside>

              {/* Contributions */}
              <div className={styles.contributions}>
                <PersonalContribution articles={articles} videos={videos} />
              </div>
            </div>

            {/* Avatar — absolute, overlaps banner/content boundary */}
            <div className={styles.avatar}>
              {avatarSrc ? (
                <img src={avatarSrc} alt={name} className={styles.avatarImg} />
              ) : (
                <div className={styles.avatarPlaceholder} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
