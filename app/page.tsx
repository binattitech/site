import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import TutoriaisSection from "@/sections/TutoriaisSection";
import ArtigosSection from "@/sections/ArtigosSection";
import CTASection from "@/sections/CTASection";
import SobreCursosSection from "@/sections/SobreCursosSection";
import s from "./home.module.css";
import TeamCarouselSection from "@/sections/TeamCarouselSection/TeamCarouselSection";
import { getAllArtigosMeta } from "@/lib/artigos";

export default function Home() {
  const artigos = getAllArtigosMeta().slice(0, 5);

  return (
    <div className={s.page}>
      <Header />
      <main>
        <HeroSection />
        <SobreCursosSection />
        <TutoriaisSection />
        <ArtigosSection artigos={artigos} />

        <TeamCarouselSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
