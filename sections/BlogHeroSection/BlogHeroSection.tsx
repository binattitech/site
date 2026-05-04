"use client";

import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import SearchModal from "@/components/SearchModal";
import Chip from "@/components/Chip";
import Card from "@/components/Card";
import type { ArtigoMeta } from "@/lib/artigos";
import styles from "./BlogHeroSection.module.css";

const CHIPS = ["Design com IA", "Dados", "Dev", "UX Research"];

interface BlogHeroSectionProps {
  artigos: ArtigoMeta[];
}

export default function BlogHeroSection({ artigos }: BlogHeroSectionProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const featured = artigos[0];

  const filteredResults = (
    query.trim()
      ? artigos.filter(
          (a) =>
            a.title.toLowerCase().includes(query.toLowerCase()) ||
            a.tag.toLowerCase().includes(query.toLowerCase()) ||
            a.author.toLowerCase().includes(query.toLowerCase()) ||
            a.category.toLowerCase().includes(query.toLowerCase())
        )
      : artigos
  ).map((a) => ({
    title: a.title,
    author: a.author,
    tag: a.tag,
    href: `/blog/${a.slug}`,
  }));

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
            results={filteredResults}
            onClose={() => {
              setIsSearchOpen(false);
              setQuery("");
            }}
            onQueryChange={setQuery}
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
        {featured && (
          <div className={styles.right}>
            <Card
              variant="tutorial"
              size="md"
              title={featured.title}
              author={featured.author}
              category={featured.category}
              tag={featured.tag}
              imageSrc={featured.imageSrc}
              href={`/blog/${featured.slug}`}
            />
          </div>
        )}
      </div>
    </section>
  );
}
