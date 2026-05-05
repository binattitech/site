"use client";

import React, { useState } from "react";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import type { ArtigoMeta } from "@/lib/artigos";
import styles from "./BlogAreasSection.module.css";

const ITEMS_PER_PAGE = 9;

interface BlogAreasSectionProps {
  artigos: ArtigoMeta[];
}

export default function BlogAreasSection({ artigos }: BlogAreasSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(artigos.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageArtigos = artigos.slice(start, start + ITEMS_PER_PAGE);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.gridWrapper}>
          <div className={styles.grid}>
            {pageArtigos.map((a) => (
              <Card
                key={a.slug}
                variant="tutorial"
                size="md"
                title={a.title}
                author={a.author}
                category={a.category}
                tag={a.tag}
                imageSrc={a.imageSrc}
                href={`/blog/${a.slug}`}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

      </div>
    </section>
  );
}
