"use client";

import React from "react";
import Link from "next/link";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import styles from "./Avatar.module.css";

export interface AvatarProps {
  variant?: "withText" | "card";
  size?: "md" | "sm";
  name?: string;
  role?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  showAvatar?: boolean;
  showRole?: boolean;
  showSocialIcons?: boolean;
  githubUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  href?: string;
  className?: string;
}

export default function Avatar({
  variant = "withText",
  size = "md",
  name = "Milena Duarte",
  role = "UX UI Designer",
  avatarSrc,
  avatarAlt,
  showAvatar = true,
  showRole = true,
  showSocialIcons = true,
  githubUrl,
  instagramUrl,
  linkedinUrl,
  href,
  className,
}: AvatarProps) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  if (variant === "card") {
    return (
      <div className={[styles.card, className ?? ""].filter(Boolean).join(" ")} data-size={size}>
        <div className={styles.cardPhoto}>
          {avatarSrc ? (
            <img src={avatarSrc} alt={avatarAlt ?? name} className={styles.cardImg} />
          ) : (
            <div className={styles.cardPlaceholder} aria-hidden="true">
              {initials}
            </div>
          )}
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.cardText}>
            <p className={styles.cardName}>{name}</p>
            {showRole && <p className={styles.cardRole}>{role}</p>}
          </div>
          {showSocialIcons && (githubUrl || instagramUrl || linkedinUrl) && (
            <div className={styles.social}>
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <GithubLogo size={20} color="var(--fg-emphasis)" />
                </a>
              )}
              {instagramUrl && (
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <InstagramLogo size={20} color="var(--fg-emphasis)" />
                </a>
              )}
              {linkedinUrl && (
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <LinkedinLogo size={20} color="var(--fg-emphasis)" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  const containerClass = [styles.container, href ? styles.containerLink : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  const withTextContent = (
    <>
      {showAvatar && (
        <div className={styles.avatar}>
          {avatarSrc ? (
            <img src={avatarSrc} alt={avatarAlt ?? name} className={styles.avatarImg} />
          ) : (
            <div className={styles.avatarPlaceholder} aria-hidden="true">
              {initials}
            </div>
          )}
        </div>
      )}
      <div className={styles.text}>
        <p className={styles.name}>{name}</p>
        {showRole && <p className={styles.role}>{role}</p>}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={containerClass} data-size={size}>
        {withTextContent}
      </Link>
    );
  }

  return (
    <div className={containerClass} data-size={size}>
      {withTextContent}
    </div>
  );
}
