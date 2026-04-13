import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHeroSection from "@/sections/BlogHeroSection";
import BlogAreasSection from "@/sections/BlogAreasSection";
import CTASection from "@/sections/CTASection";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogHeroSection />
        <BlogAreasSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
