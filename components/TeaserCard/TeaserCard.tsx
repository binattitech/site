"use client";
import { ArrowRight } from "@phosphor-icons/react";
import Button from "@/components/Button";
import styles from "./TeaserCard.module.css";

export interface TeaserCardProps {
  variant?: "minimal" | "compact" | "expanded";
  shade?: "light" | "medium" | "dark";
  title: string;
  category?: string;
  moduleInfo?: string;
  description?: string;
  stats?: string;
  moduleIcons?: string[];
  extraModules?: number;
  href?: string;
  color?: string;
  ctaLabel?: string;
}

export default function TeaserCard({
  variant = "minimal",
  shade = "light",
  title,
  category = "Trilha de aprendizagem",
  moduleInfo,
  description,
  stats,
  moduleIcons = [],
  extraModules = 0,
  href = "#",
  color = "cyan",
  ctaLabel = "Start learning",
}: TeaserCardProps) {
  const colorVars = {
    "--primary-50":  `var(--${color}-50)`,
    "--primary-100": `var(--${color}-100)`,
    "--primary-200": `var(--${color}-200)`,
    "--primary-400": `var(--${color}-400)`,
    "--primary-600": `var(--${color}-600)`,
  } as React.CSSProperties;

  if (variant === "minimal") {
    return (
      <div className={styles.minimal} style={colorVars}>
        <p className={styles.category}>{category}</p>
        <p className={styles.title}>{title}</p>
        {moduleInfo && <p className={styles.moduleInfo}>{moduleInfo}</p>}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={styles.compact} data-shade={shade} style={colorVars}>
        <p className={styles.compactTitle}>{title}</p>
        {description && <p className={styles.compactDesc}>{description}</p>}
        {stats && <p className={styles.stats}>{stats}</p>}
        <div className={styles.compactFooter}>
          <ModuleIconsRow icons={moduleIcons} extra={extraModules} />
          <Button
            kind="icon"
            variant="outline"
            icon={<ArrowRight size={24} color="var(--compact-btn)" />}
            style={{
              "--button-border": "var(--compact-btn)",
              "--button-shadow": "none",
            } as React.CSSProperties}
            aria-label="Ver trilha"
            onClick={() => { window.location.href = href; }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.expanded} style={colorVars}>
      {stats && (
        <div className={styles.expandedHeader}>
          <p className={styles.statsHeader}>{stats}</p>
        </div>
      )}
      <div className={styles.expandedBody}>
        <div className={styles.expandedContent}>
          <p className={styles.expandedTitle}>{title}</p>
          {description && <p className={styles.expandedDesc}>{description}</p>}
          {stats && <p className={styles.statsInline}>{stats}</p>}
        </div>
        <div className={styles.expandedFooter}>
          <ModuleIconsRow icons={moduleIcons} extra={extraModules} />
          <a href={href} className={styles.ctaBtn}>
            <span>{ctaLabel}</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
      <div className={styles.depthBar1} aria-hidden="true" />
      <div className={styles.depthBar2} aria-hidden="true" />
    </div>
  );
}

function ModuleIconsRow({
  icons,
  extra,
}: {
  icons: string[];
  extra: number;
}) {
  if (icons.length === 0 && extra === 0) return null;
  const STEP = 2.25; /* rem — 36px */
  return (
    <div className={styles.moduleIcons}>
      {icons.map((src, i) => (
        <div
          key={i}
          className={styles.moduleIcon}
          style={{ left: `${i * STEP}rem` }}
        >
          <img src={src} alt="" />
        </div>
      ))}
      {extra > 0 && (
        <div
          className={styles.moduleIconExtra}
          style={{ left: `${icons.length * STEP}rem` }}
        >
          +{extra}
        </div>
      )}
    </div>
  );
}
