import { notFound } from "next/navigation";
import { TEAM } from "@/data/team";
import { getAllArtigosMeta } from "@/lib/artigos";
import type { ContributionArticle } from "@/components/PersonalContribution";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileHeroSection from "@/sections/ProfileHeroSection";

export function generateStaticParams() {
  return TEAM.map((m) => ({ username: m.username }));
}

export default async function ContribuidoraPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const member = TEAM.find((m) => m.username === username);
  if (!member) notFound();

  const allArtigos = getAllArtigosMeta();
  const articles: ContributionArticle[] = allArtigos
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

  return (
    <>
      <Header />
      <main>
        <ProfileHeroSection
          name={member.name}
          bio={member.bio}
          avatarSrc={`/team/${member.photo}.png`}
          socialLinks={member.socialLinks}
          articles={articles}
          videos={member.videos}
        />
      </main>
      <Footer />
    </>
  );
}
