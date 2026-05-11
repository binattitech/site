import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import SobreSection from "@/sections/SobreSection";
import TutoriaisSection from "@/sections/TutoriaisSection";
import TrilhasSection from "@/sections/TrilhasSection";
import ArtigosSection from "@/sections/ArtigosSection";
import CTASection from "@/sections/CTASection";
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
        <TutoriaisSection />
        <TeamCarouselSection />
        <ArtigosSection artigos={artigos} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
