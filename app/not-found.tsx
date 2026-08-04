import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFoundSection from "@/sections/NotFoundSection";

export const metadata: Metadata = {
  title: "Página não encontrada | Binatti Community",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div style={{ background: "var(--bg-default)", minHeight: "100dvh" }}>
      <Header />
      <main>
        <NotFoundSection />
      </main>
      <Footer />
    </div>
  );
}
