"use client";

import { useEffect, useRef } from "react";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import styles from "./NotFoundSection.module.css";

/* Padrão decorativo: string "40" repetida sem espaços, várias vezes
   por linha. Cada linha deslize horizontalmente de forma independente,
   alternando direção (ímpares → esquerda, pares → direita). O
   deslocamento (--cell-w) precisa ser exatamente a largura renderizada
   de um grupo "40" — por isso é medido no DOM (span invisível) em vez
   de aproximado com `ch`, senão o loop não encaixa pixel a pixel numa
   fonte não-monoespaçada. */
const ROWS = 24;
const REPEATS_PER_ROW = 40;
const UNIT = "40";
const ROW_TEXT = UNIT.repeat(REPEATS_PER_ROW);

export default function NotFoundSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const gridEl = gridRef.current;
    const measureEl = measureRef.current;
    if (!gridEl || !measureEl) return;

    const updateCellWidth = () => {
      const width = measureEl.getBoundingClientRect().width;
      if (width > 0) {
        gridEl.style.setProperty("--cell-w", `${width}px`);
      }
    };

    updateCellWidth();

    // Refaz a medição quando o font-size muda (clamp com vw é responsivo).
    const observer = new ResizeObserver(updateCellWidth);
    observer.observe(measureEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      {/* Camada decorativa — padrão diagonal infinito */}
      <div className={styles.marqueeLayer} aria-hidden="true">
        <div className={styles.marqueeGrid} ref={gridRef}>
          {/* Elemento de medição — mesmo font-family/weight/size/tracking
              das linhas, invisível e fora do fluxo. */}
          <span ref={measureRef} className={styles.measure}>
            {UNIT}
          </span>

          {Array.from({ length: ROWS }).map((_, i) => (
            <div className={styles.row} key={i}>
              <div className={styles.track}>{ROW_TEXT}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Conteúdo em primeiro plano */}
      <div className={styles.panel}>
        <Badge label="ERRO 404" variant="mono" radius="rounded" size="sm" />

        <h1 className={styles.title}>Essa página se perdeu no caminho</h1>

        <p className={styles.description}>
          O link pode estar quebrado ou a página foi movida. Vamos te ajudar
          a voltar para o começo.
        </p>

        <Button
          content="Voltar para o início"
          variant="filled"
          showIcon
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </div>
    </section>
  );
}
