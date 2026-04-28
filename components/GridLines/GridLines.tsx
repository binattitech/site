"use client";
import { useEffect, useState } from "react";
import styles from "./GridLines.module.css";

const GRID_SIZE = 102;

interface LineConfig {
  pos: number;
  delay: number;
  duration: number;
}

export default function GridLines() {
  const [vertical, setVertical] = useState<LineConfig[]>([]);
  const [horizontal, setHorizontal] = useState<LineConfig[]>([]);

  useEffect(() => {
    const vCount = Math.ceil(window.innerWidth / GRID_SIZE) + 2;
    const hCount = Math.ceil(document.documentElement.scrollHeight / GRID_SIZE) + 2;

    setVertical(
      Array.from({ length: vCount }, (_, i) => ({
        pos: i * GRID_SIZE,
        delay: Math.random() * 1.2,
        duration: 3.5 + Math.random() * 1.5,
      }))
    );

    setHorizontal(
      Array.from({ length: hCount }, (_, i) => ({
        pos: i * GRID_SIZE,
        delay: Math.random() * 1.2,
        duration: 3.5 + Math.random() * 1.5,
      }))
    );
  }, []);

  return (
    <div className={styles.root} aria-hidden="true">
      {vertical.map((line, i) => (
        <div
          key={`v-${i}`}
          className={styles.vline}
          style={{
            left: `${line.pos}px`,
            "--delay": `${line.delay}s`,
            "--dur": `${line.duration}s`,
          } as React.CSSProperties}
        />
      ))}
      {horizontal.map((line, i) => (
        <div
          key={`h-${i}`}
          className={styles.hline}
          style={{
            top: `${line.pos}px`,
            "--delay": `${line.delay}s`,
            "--dur": `${line.duration}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
