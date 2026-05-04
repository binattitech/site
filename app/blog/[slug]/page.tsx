import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleHeroSection from "@/sections/ArticleHeroSection";
import ArticleBodySection from "@/sections/ArticleBodySection";
import RelatedArticlesSection from "@/sections/RelatedArticlesSection";
import { getArtigoBySlug, getAllArtigosMeta, getAllSlugs, formatDate } from "@/lib/artigos";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artigo = getArtigoBySlug(slug);

  if (!artigo) notFound();

  const tocItems = artigo.sections.map((s) => ({ label: s.heading }));
  const authorName = artigo.author.replace(/^por\s+/i, "");

  const allArtigos = getAllArtigosMeta();
  const related = allArtigos
    .filter(
      (a) =>
        a.slug !== slug &&
        (a.category === artigo.category || a.tag === artigo.tag)
    )
    .slice(0, 3)
    .map((a) => ({
      title: a.title,
      author: a.author,
      category: a.category,
      tag: a.tag,
      imageSrc: a.imageSrc,
      href: `/blog/${a.slug}`,
    }));

  return (
    <>
      <Header />
      <main>
        <ArticleHeroSection
          title={artigo.title}
          authorName={authorName}
          authorRole={artigo.authorRole}
          avatarSrc={artigo.avatarSrc}
          date={formatDate(artigo.date)}
          category={artigo.category}
          imageSrc={artigo.imageSrc}
        />
        <ArticleBodySection
          intro={artigo.intro}
          sections={artigo.sections}
          tocItems={tocItems}
        />
        <RelatedArticlesSection articles={related} />
      </main>
      <Footer />
    </>
  );
}
