"use client";

import { useState, useRef, useEffect } from "react";
import {
  CaretDown,
  LinkedinLogo,
  InstagramLogo,
  GithubLogo,
  Globe,
  BehanceLogo,
  GraduationCap,
} from "@phosphor-icons/react";
import PersonalContribution from "@/components/PersonalContribution";
import type { ContributionArticle, ContributionVideo } from "@/components/PersonalContribution";
import type { SocialLink } from "@/data/team";
import styles from "./ProfileHeroSection.module.css";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  linkedin: LinkedinLogo,
  instagram: InstagramLogo,
  github: GithubLogo,
  portfolio: Globe,
  behance: BehanceLogo,
  "google-scholar": GraduationCap,
};

const SOCIAL_LABELS: Record<string, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  github: "GitHub",
  portfolio: "Portfólio",
  behance: "Behance",
  "google-scholar": "Google Acadêmico",
};

interface ProfileHeroSectionProps {
  name: string;
  role?: string;
  bio?: string;
  bannerSrc?: string;
  avatarSrc?: string;
  socialLinks?: SocialLink[];
  articles?: ContributionArticle[];
  videos?: ContributionVideo[];
}

export default function ProfileHeroSection({
  name,
  role,
  bio,
  bannerSrc,
  avatarSrc,
  socialLinks = [],
  articles = [],
  videos = [],
}: ProfileHeroSectionProps) {
  const [bioExpanded, setBioExpanded] = useState(false);
  const [bioOverflows, setBioOverflows] = useState(false);
  const bioRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!bioRef.current) return;
    setBioOverflows(bioRef.current.scrollHeight > bioRef.current.clientHeight);
  }, [bio]);

  return (
    <section className={styles.section}>
      {/* Banner */}
      <div className={styles.banner}>
        {bannerSrc && <img src={bannerSrc} alt="" className={styles.bannerImg} />}
      </div>

      {/* Container — avatar absolutely positioned at banner/content boundary */}
      <div className={styles.container}>
        <div className={styles.avatar}>
          {avatarSrc ? (
            <img src={avatarSrc} alt={name} className={styles.avatarImg} />
          ) : (
            <div className={styles.avatarPlaceholder} />
          )}
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.nameGroup}>
            <p className={styles.name}>{name}</p>
            {role && <p className={styles.role}>{role}</p>}
          </div>

          {bio && (
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
          )}

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
                      <Icon size={20} weight="fill" />
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
    </section>
  );
}
