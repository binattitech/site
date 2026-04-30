"use client";

import { useState } from "react";
import Tab from "@/components/Tab";
import Card from "@/components/Card";
import styles from "./PersonalContribution.module.css";

type ActiveTab = "trilhas" | "artigos" | "videos";

export interface ContributionArticle {
  title: string;
  category?: string;
  tag?: string;
  author?: string;
}

export interface ContributionVideo {
  src: string;
  alt?: string;
}

export interface PersonalContributionProps {
  articles?: ContributionArticle[];
  videos?: ContributionVideo[];
  defaultTab?: ActiveTab;
}

const TABS: { key: ActiveTab; label: string; disabled?: boolean }[] = [
  { key: "trilhas", label: "Trilhas", disabled: true },
  { key: "artigos", label: "Artigos" },
  { key: "videos", label: "Vídeos" },
];

export default function PersonalContribution({
  articles = [],
  videos = [],
  defaultTab = "artigos",
}: PersonalContributionProps) {
  const [active, setActive] = useState<ActiveTab>(defaultTab);

  return (
    <div className={styles.container}>
      {/* Tabs */}
      <div className={styles.tabs}>
        {TABS.map(({ key, label, disabled }) => (
          <Tab
            key={key}
            label={label}
            state={disabled ? "disable" : active === key ? "active" : "default"}
            onClick={disabled ? undefined : () => setActive(key)}
          />
        ))}
      </div>

      {/* Artigos */}
      {active === "artigos" && (
        <div className={styles.articlesList}>
          {articles.map((article, i) => (
            <Card
              key={i}
              variant="articles"
              size="xs"
              title={article.title}
              category={article.category}
              tag={article.tag}
              author={article.author}
            />
          ))}
        </div>
      )}

      {/* Vídeos */}
      {active === "videos" && (
        <div className={styles.videosGrid}>
          {videos.map((video, i) => (
            <div key={i} className={styles.videoThumb}>
              <img src={video.src} alt={video.alt ?? ""} />
            </div>
          ))}
          {videos.length === 0 && (
            <div className={styles.empty} />
          )}
        </div>
      )}

      {/* Trilhas — conteúdo a definir */}
      {active === "trilhas" && (
        <div className={styles.articlesList} />
      )}
    </div>
  );
}
