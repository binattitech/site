import React from "react";
import styles from "./AvatarWithText.module.css";

export interface AvatarWithTextProps {
  name?: string;
  role?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  showAvatar?: boolean;
  showRole?: boolean;
  className?: string;
}

export default function AvatarWithText({
  name = "Milena Duarte",
  role = "UX UI Designer",
  avatarSrc,
  avatarAlt,
  showAvatar = true,
  showRole = true,
  className,
}: AvatarWithTextProps) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className={[styles.container, className ?? ""].filter(Boolean).join(" ")}>
      {showAvatar && (
        <div className={styles.avatar}>
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt={avatarAlt ?? name}
              className={styles.avatarImg}
            />
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
    </div>
  );
}
