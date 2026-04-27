import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleHeroSection from "@/sections/ArticleHeroSection";
import ArticleBodySection from "@/sections/ArticleBodySection";
import RelatedArticlesSection from "@/sections/RelatedArticlesSection";

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main>
        <ArticleHeroSection />
        <ArticleBodySection />
        <RelatedArticlesSection />
      </main>
      <Footer />
    </>
  );
}
