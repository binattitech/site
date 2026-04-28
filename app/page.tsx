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

export default function Home() {
  return (
    <div className={s.page}>
      <Header />
      <main>
        <HeroSection />
        <TrilhasSection />
        <TutoriaisSection />
        <TeamCarouselSection />
        <ArtigosSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
