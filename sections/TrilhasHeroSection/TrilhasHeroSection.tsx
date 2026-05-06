"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Input from "@/components/Input";
import TrackDetailsModal, {
  type TrackContributor,
  type TrackItem,
} from "@/components/TrackDetailsModal";
import styles from "./TrilhasHeroSection.module.css";

const CONTRIBUTORS: TrackContributor[] = [
  { name: "Milena Duarte", role: "UX UI Designer", avatarSrc: "/photos/milena.jpg" },
  { name: "Milena Duarte", role: "UX UI Designer", avatarSrc: "/photos/milena.jpg" },
  { name: "Milena Duarte", role: "UX UI Designer", avatarSrc: "/photos/milena.jpg" },
  { name: "Milena Duarte", role: "UX UI Designer", avatarSrc: "/photos/milena.jpg" },
];

const TRILHA_ITEMS: TrackItem[] = [
  { id: "1", title: "Como criar um Design System com Claude", level: "iniciante",     format: "VÍDEO" },
  { id: "2", title: "Como criar um Design System com Claude", level: "iniciante",     format: "ARTIGO" },
  { id: "3", title: "Como criar um Design System com Claude", level: "iniciante",     format: "ARTIGO" },
  { id: "4", title: "Como criar um Design System com Claude", level: "intermediario", format: "VÍDEO" },
  { id: "5", title: "Como criar um Design System com Claude", level: "intermediario", format: "VÍDEO" },
  { id: "6", title: "Como criar um Design System com Claude", level: "avancado",      format: "VÍDEO" },
];

const DOTS: { x: number; y: number; s: number }[] = [
  { x: 128, y: 366, s: 12 }, { x: 117, y: 275, s: 12 }, { x: 181, y: 349, s: 12 },
  { x: 123, y: 212, s: 12 }, { x: 158, y: 176, s: 12 }, { x: 181, y: 101, s: 12 },
  { x: 236, y: 59,  s: 12 }, { x: 274, y: 80,  s: 12 }, { x: 262, y: 131, s: 12 },
  { x: 230, y: 166, s: 12 }, { x: 429, y: 86,  s: 12 }, { x: 448, y: 47,  s: 12 },
  { x: 534, y: 80,  s: 12 }, { x: 511, y: 119, s: 12 }, { x: 569, y: 182, s: 12 },
  { x: 389, y: 137, s: 12 }, { x: 306, y: 154, s: 12 }, { x: 435, y: 200, s: 12 },
  { x: 464, y: 235, s: 12 }, { x: 334, y: 218, s: 12 }, { x: 352, y: 160, s: 12 },
  { x: 346, y: 68,  s: 12 }, { x: 435, y: 137, s: 12 }, { x: 382, y: 188, s: 12 },
  { x: 377, y: 275, s: 12 }, { x: 228, y: 319, s: 12 }, { x: 204, y: 257, s: 18 },
  { x: 286, y: 230, s: 18 }, { x: 368, y: 319, s: 18 }, { x: 389, y: 235, s: 12 },
  { x: 286, y: 281, s: 12 }, { x: 274, y: 331, s: 12 }, { x: 216, y: 372, s: 12 },
  { x: 318, y: 349, s: 12 }, { x: 286, y: 409, s: 12 }, { x: 249, y: 436, s: 12 },
  { x: 334, y: 403, s: 12 }, { x: 418, y: 397, s: 12 }, { x: 458, y: 378, s: 12 },
  { x: 470, y: 331, s: 12 }, { x: 476, y: 287, s: 12 }, { x: 569, y: 299, s: 12 },
  { x: 470, y: 430, s: 12 }, { x: 376, y: 421, s: 12 }, { x: 510, y: 160, s: 14 },
  { x: 210, y: 232, s: 12 },
];

const AREAS = ["Design", "Desenvolvimento", "Dados", "Produto", "Segurança", "IA"];

export default function TrilhasHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Trilhas de conhecimento em comunidade
          </h1>
          <p className={styles.subtitle}>
            Tutoriais práticos, experiências reais e conteúdo técnico organizado
            por área. Escrito por quem trabalha com isso.
          </p>
          <div className={styles.controls}>
            <SearchBar onFocus={() => setIsModalOpen(true)} />
            <Input fieldType="select" label="Área" options={AREAS} />
          </div>
        </div>

        <div className={styles.graphPanel} aria-hidden="true">
          {DOTS.map((dot, i) => (
            <div
              key={i}
              className={styles.dot}
              style={{
                left: dot.x,
                top: dot.y,
                width: dot.s,
                height: dot.s,
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>

      <TrackDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        color="rose"
        trackName="UX UI Design"
        description="Se você está começando a entrar no mundo da tecnologia, ou se já é veterano e quer reforçar seus conhecimentos, a cibersegurança é uma área valiosa para se aprender e explorar seus conceitos."
        contributors={CONTRIBUTORS}
        trilhaItems={TRILHA_ITEMS}
        projetoItems={[]}
      />
    </section>
  );
}
