/**
 * data/team.ts — Fonte única de dados do time Binatti
 *
 * Para adicionar uma membra:
 *   1. Adicione um objeto ao array TEAM abaixo
 *   2. Coloque a foto em /public/team/<photo>.png
 *
 * Para remover: apague o objeto correspondente.
 * Todos os componentes (carrossel, grid, perfil modal) atualizam automaticamente.
 */

export type SocialPlatform = "linkedin" | "instagram" | "github" | "portfolio" | "behance";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface TeamVideo {
  /** URL da publicação no Instagram */
  url: string;
  /** Caminho para a thumbnail (ex: "/team/milena-reel1.jpg"). Opcional — exibe placeholder se ausente. */
  src?: string;
  alt?: string;
}

export interface TeamMember {
  /** Nome completo exibido no card e no perfil */
  name: string;
  /** Nome de usuário exibido na titlebar do perfil (sem @) */
  username: string;
  /** Cargo exibido abaixo do nome no card */
  role: string;
  /** Nome do arquivo em /public/team/ sem extensão (ex: "milena" → /team/milena.png) */
  photo: string;
  /** Bio exibida no perfil. Botão "Ver mais" aparece automaticamente se ultrapassar 7 linhas. */
  bio?: string;
  /** Links de redes sociais exibidos no perfil */
  socialLinks?: SocialLink[];
  /** Reels/vídeos do Instagram exibidos na aba Vídeos do perfil */
  videos?: TeamVideo[];
}

export const TEAM: TeamMember[] = [
  {
    name: "Milena Duarte",
    username: "miluarte",
    role: "UX UI Designer",
    photo: "milena",
    bio: "Designer UX/UI com formação em Engenharia de Software e experiência sólida na criação de produtos digitais centrados no usuário — de sistemas institucionais complexos a design systems do zero. Tenho vivência em todas as etapas do processo de design, desde pesquisa e arquitetura da informação até prototipagem de alta fidelidade e handoff técnico. Atuo também na interface entre design e produto, com experiência em levantamento de requisitos e facilitação de times ágeis, o que me permite comunicar com desenvolvedores e stakeholders com clareza e precisão.",
    socialLinks: [
      { platform: "linkedin",  url: "https://www.linkedin.com/in/miluarte/" },
      { platform: "behance",   url: "https://www.behance.net/miluarte" },
      { platform: "portfolio", url: "https://miluarte.figma.site" },
    ],
    videos: [
      { url: "https://www.instagram.com/reel/DWCQBfQEWWo/" },
      { url: "https://www.instagram.com/reel/DI43VsRSVrb/" },
      { url: "https://www.instagram.com/reel/DIz6RBvOtWU/" },
    ],
  },
  {
    name: "Marina de Lima",
    username: "marinadelima",
    role: "Contribuidora",
    photo: "marina",
    bio: "Me chamo Marina, uma paraibana meio perdida pelo Piauí. Em transição da arquitetura para a engenharia de software, divido meu tempo entre inteligência cibernética, arte e gastronomia. Levo a vida de forma espontânea, sempre guiada pela escolha que promete a melhor história pra contar.",
    socialLinks: [
      { platform: "github", url: "https://github.com/limademarina" },
    ],
  },
  {
    name: "Aline Ramos",
    username: "alineramos",
    role: "Contribuidora",
    photo: "aline",
  },
  {
    name: "Ana Vitória Mendes",
    username: "anavitoria",
    role: "Contribuidora",
    photo: "ana",
  },
  {
    name: "Beatriz Barreto",
    username: "beatrizbarreto",
    role: "Contribuidora",
    photo: "bea",
  },
  {
    name: "Rafela Costa (Cassy)",
    username: "cassy",
    role: "Contribuidora",
    photo: "cassy",
  },
  {
    name: "Ingrid Ribeiro",
    username: "ingridribeiro",
    role: "Contribuidora",
    photo: "ingrid",
  },
  {
    name: "Kaielly Sousa",
    username: "kaielly",
    role: "Contribuidora",
    photo: "kaielly",
  },
  {
    name: "Kévilla Aguiar",
    username: "kevillaaguiar",
    role: "Contribuidora",
    photo: "kevilla",
  },
  {
    name: "Laura Madeira",
    username: "lauramadeira",
    role: "Contribuidora",
    photo: "laura",
  },
];
