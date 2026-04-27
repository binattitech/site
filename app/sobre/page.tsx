import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/sections/AboutHeroSection";
import AboutSobreSection from "@/sections/AboutSobreSection";
import ContribuidorasSection from "@/sections/ContribuidorasSection";
import ValoresSection from "@/sections/ValoresSection";

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        <AboutHeroSection />
        <AboutSobreSection />
        <ContribuidorasSection />
        <ValoresSection />
      </main>
      <Footer />
    </>
  );
}
