import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/sections/AboutHeroSection";
import AboutSobreSection from "@/sections/AboutSobreSection";
import ContribuidorasSection from "@/sections/ContribuidorasSection";
import ValoresSection from "@/sections/ValoresSection";
import { getAllArtigosMeta } from "@/lib/artigos";
import { TEAM } from "@/data/team";
import type { ContributionArticle } from "@/components/PersonalContribution";

export default function SobrePage() {
  const allArtigos = getAllArtigosMeta();

  const artigosPorMembro: Record<string, ContributionArticle[]> = {};
  for (const member of TEAM) {
    artigosPorMembro[member.photo] = allArtigos
      .filter((a) => {
        const cleanAuthor = a.author.replace(/^por\s+/i, "").trim().toLowerCase();
        return cleanAuthor === member.name.toLowerCase();
      })
      .map((a) => ({
        title: a.title,
        category: a.category,
        tag: a.tag,
        author: a.author,
        href: `/blog/${a.slug}`,
      }));
  }

  return (
    <>
      <Header />
      <main>
        <AboutHeroSection />
        <AboutSobreSection />
        <ContribuidorasSection artigosPorMembro={artigosPorMembro} />
        <ValoresSection />
      </main>
      <Footer />
    </>
  );
}
