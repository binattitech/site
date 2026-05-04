import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHeroSection from "@/sections/BlogHeroSection";
import BlogAreasSection from "@/sections/BlogAreasSection";
import CTASection from "@/sections/CTASection";
import { getAllArtigosMeta } from "@/lib/artigos";

export default function BlogPage() {
  const artigos = getAllArtigosMeta();

  return (
    <>
      <Header />
      <main>
        <BlogHeroSection artigos={artigos} />
        <BlogAreasSection artigos={artigos} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
