import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./trilhas.module.css";

export const metadata = {
  title: "Trilhas — Binatti Community",
  description:
    "Tutoriais práticos, experiências reais e conteúdo técnico organizado por área.",
};

export default function TrilhasPage() {
  return (
    <div className={styles.page} data-theme="dark">
      <Header />
      <main />
      <Footer />
    </div>
  );
}
