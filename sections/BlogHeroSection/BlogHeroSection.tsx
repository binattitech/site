"use client";

import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Chip from "@/components/Chip";
import Card from "@/components/Card";
import styles from "./BlogHeroSection.module.css";

const CHIPS = ["Design com IA", "Dados", "Dev", "UX Research"];

export default function BlogHeroSection() {
  const [searchValue, setSearchValue] = useState("");
  const [searchState, setSearchState] = useState<"default" | "hover" | "typing">("default");

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

          <SearchBar
            state={searchState}
            value={searchValue}
            placeholder="Busca aí: "
            placeholderBold="design system"
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setSearchState("typing")}
            onClear={() => {
              setSearchValue("");
              setSearchState("default");
            }}
            onSearch={() => {}}
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
