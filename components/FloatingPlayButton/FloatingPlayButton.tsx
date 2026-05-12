"use client";
import { useId, useState } from "react";
import { Play, Pause } from "@phosphor-icons/react";
import styles from "./FloatingPlayButton.module.css";

export interface FloatingPlayButtonProps {
  thumbnailSrc?: string;
  isPlaying?: boolean;
  label?: string;
  onClick?: () => void;
}

export default function FloatingPlayButton({
  thumbnailSrc,
  isPlaying: isPlayingProp,
  label = "SOBRE AS TRILHAS",
  onClick,
}: FloatingPlayButtonProps) {
  const [isPlayingInternal, setIsPlayingInternal] = useState(false);
  const isControlled = isPlayingProp !== undefined;
  const isPlaying = isControlled ? isPlayingProp : isPlayingInternal;

  const rawId = useId();
  const pathId = `fpb-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const hasThumbnail = Boolean(thumbnailSrc);
  const ringText = `${label} • ${label} • ${label} • `;
  // 2π × 78 (raio do path) = circunferência do anel
  const ringCircumference = +(2 * Math.PI * 78).toFixed(2);

  function handleClick() {
    if (!isControlled) setIsPlayingInternal((prev) => !prev);
    onClick?.();
  }

  return (
    <button
      className={styles.button}
      data-has-thumbnail={hasThumbnail}
      data-is-playing={isPlaying}
      onClick={handleClick}
      aria-label={isPlaying ? "Pausar" : "Reproduzir"}
      type="button"
    >
      {hasThumbnail && (
        <img
          className={styles.thumbnail}
          src={thumbnailSrc}
          alt=""
          aria-hidden="true"
        />
      )}

      <div className={styles.overlay} aria-hidden="true" />

      <svg
        className={styles.textRing}
        viewBox="0 0 200 200"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <path
            id={pathId}
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <text>
          <textPath
            href={`#${pathId}`}
            textLength={ringCircumference}
            lengthAdjust="spacing"
          >
            {ringText}
          </textPath>
        </text>
      </svg>

      <div className={styles.iconWrapper} aria-hidden="true">
        {isPlaying ? (
          <Pause size={40} color="white" weight="fill" />
        ) : (
          <Play size={40} color="white" weight="fill" />
        )}
      </div>
    </button>
  );
}
