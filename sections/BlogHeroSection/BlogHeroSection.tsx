"use client";

import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import SearchModal from "@/components/SearchModal";
import Chip from "@/components/Chip";
import Card from "@/components/Card";
import styles from "./BlogHeroSection.module.css";

const CHIPS = ["Design com IA", "Dados", "Dev", "UX Research"];

// Resultados mock — substituir por dados reais futuramente
const MOCK_RESULTS = [
  { title: "Como criar um Design System com Claude", author: "por Milena Oliveira", tag: "Design com IA" },
  { title: "Git para quem nunca usou terminal", author: "por Laura Lima", tag: "Dev" },
  { title: "Acessibilidade na prática: checklist real", author: "por Kayele Santos", tag: "UX Research" },
  { title: "CSS Grid em 10 minutos", author: "por Milena Oliveira", tag: "Dev" },
  { title: "Como documentar uma API do zero", author: "por Laura Lima", tag: "Dev" },
  { title: "Pesquisa com usuário: do recrutamento à análise", author: "por Kayele Santos", tag: "UX Research" },
  { title: "Deploy no Vercel sem drama", author: "por Milena Oliveira", tag: "Dev" },
];

export default function BlogHeroSection() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left — heading + search + chips */}
        <div className={styles.left}>
          <div className={styles.textContent}>
            <h1 className={styles.heading}>
              Explore artigos de tecnologia por área de atuação
            </h1>
            <p className={styles.body}>
              Busque por área, tema ou tecnologia e encontre conteúdo escrito
              por quem já passou por isso.
            </p>
          </div>

          {/* SearchBar é só gatilho — toda interação acontece no modal */}
          <SearchBar
            state="default"
            placeholder="Busca aí: "
            onFocus={() => setIsSearchOpen(true)}
            onSearch={() => setIsSearchOpen(true)}
          />

          <SearchModal
            isOpen={isSearchOpen}
            results={MOCK_RESULTS}
            onClose={() => setIsSearchOpen(false)}
          />

          <div className={styles.chips}>
            {CHIPS.map((chip) => (
              <Chip key={chip} label={chip} showIcon={false} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} aria-hidden="true" />

        {/* Right — featured card */}
        <div className={styles.right}>
          <Card
            variant="tutorial"
            size="md"
            title="Como criar um Design System com Claude"
            author="por Milena Oliveira"
            category="NA PRÁTICA COM IA"
            tag="design"
            imageSrc="/tutorial-1.png"
          />
        </div>
      </div>
    </section>
  );
}
