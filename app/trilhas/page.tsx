import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrilhasHeroSection from "@/sections/TrilhasHeroSection";
import TrilhasDestaqueSection from "@/sections/TrilhasDestaqueSection";
import NossasTrilhasSection from "@/sections/NossasTrilhasSection";
import FloatingPlayButton from "@/components/FloatingPlayButton";
import styles from "./trilhas.module.css";

export const metadata = {
  title: "Trilhas — Binatti Community",
  description:
    "Tutoriais práticos, experiências reais e conteúdo técnico organizado por área.",
};

export default function TrilhasPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <TrilhasHeroSection />
        <TrilhasDestaqueSection />
        <NossasTrilhasSection />
      </main>
      <Footer />
      <div className={styles.floatingPlay}>
        <FloatingPlayButton />
      </div>
    </div>
  );
}
