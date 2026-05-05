import fs from "fs";
import path from "path";
import { TEAM } from "@/data/team";
import type { TeamMember } from "@/data/team";

const ARTIGOS_DIR = path.join(process.cwd(), "data", "artigos");

export interface ArtigoSection {
  heading: string;
  paragraphs: string[];
}

export interface ArtigoMeta {
  slug: string;
  title: string;
  author: string;
  authorRole: string;
  avatarSrc?: string;
  category: string;
  tag: string;
  date: string;
  imageSrc: string;
}

export interface Artigo extends ArtigoMeta {
  intro: string[];
  sections: ArtigoSection[];
}

// ── Frontmatter parser (opcional — arquivos sem frontmatter também funcionam) ──

function parseFrontmatter(content: string): {
  meta: Record<string, string>;
  body: string;
  hasFrontmatter: boolean;
} {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: content, hasFrontmatter: false };

  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line
      .slice(colonIdx + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (key) meta[key] = value;
  }

  return { meta, body: match[2], hasFrontmatter: true };
}

// ── Extrai título do H1 ──

function extractH1(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "";
}

// ── Parser do corpo: H1 e --- são ignorados, ## vira seção ──

function parseBody(body: string): {
  intro: string[];
  sections: ArtigoSection[];
} {
  const lines = body.split(/\r?\n/);
  const intro: string[] = [];
  const sections: ArtigoSection[] = [];
  let currentSection: ArtigoSection | null = null;
  let buffer: string[] = [];

  const flush = () => {
    const text = buffer.join(" ").trim();
    if (text) {
      if (currentSection) currentSection.paragraphs.push(text);
      else intro.push(text);
    }
    buffer = [];
  };

  for (const line of lines) {
    // pula H1 (título) e separadores horizontais ---
    if (/^#\s/.test(line) || /^---+$/.test(line)) continue;

    if (line.startsWith("## ")) {
      flush();
      if (currentSection) sections.push(currentSection);
      currentSection = { heading: line.slice(3).trim(), paragraphs: [] };
    } else if (line.trim() === "") {
      flush();
    } else {
      buffer.push(line.trim());
    }
  }

  flush();
  if (currentSection) sections.push(currentSection);

  return { intro, sections };
}

// ── Cruza author string com data/team.ts ──

function findTeamMember(author: string): TeamMember | undefined {
  const cleanName = author.replace(/^por\s+/i, "").trim().toLowerCase();
  return TEAM.find((m) => m.name.toLowerCase() === cleanName);
}

// ── Converte nome de pasta em categoria legível ──

function folderToCategory(folder: string): string {
  if (!folder) return "ARTIGOS";
  return folder.toUpperCase();
}

// ── Coleta recursiva de todos os .md ──

interface FileEntry {
  filePath: string;
  slug: string;
  folder: string;
}

function collectMdFiles(dir: string, baseDir: string): FileEntry[] {
  const entries: FileEntry[] = [];
  if (!fs.existsSync(dir)) return entries;

  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      entries.push(...collectMdFiles(full, baseDir));
    } else if (name.endsWith(".md")) {
      const relative = path.relative(baseDir, path.dirname(full));
      const folder = relative === "." ? "" : relative;
      entries.push({ filePath: full, slug: name.replace(/\.md$/, ""), folder });
    }
  }

  return entries;
}

// ── Lê metadata de um arquivo ──

function buildMeta(entry: FileEntry): ArtigoMeta {
  const content = fs.readFileSync(entry.filePath, "utf-8");
  const { meta, hasFrontmatter } = parseFrontmatter(content);

  const title = hasFrontmatter ? (meta.title ?? "") : extractH1(content);
  const category = hasFrontmatter
    ? (meta.category ?? folderToCategory(entry.folder))
    : folderToCategory(entry.folder);

  const author = meta.author || "por Rafaela Costa (Cassy)";
  const teamMember = findTeamMember(author);

  return {
    slug: entry.slug,
    title,
    author,
    authorRole: meta.authorRole ?? teamMember?.role ?? "",
    avatarSrc: meta.avatarSrc ?? (teamMember ? `/team/${teamMember.photo}.png` : undefined),
    category,
    tag: meta.tag ?? (entry.folder.toLowerCase() || "artigo"),
    date: meta.date ?? "",
    imageSrc: meta.imageSrc ?? "/placeholder-card.png",
  };
}

// ── API pública ──

export function getAllArtigosMeta(): ArtigoMeta[] {
  return collectMdFiles(ARTIGOS_DIR, ARTIGOS_DIR)
    .map(buildMeta)
    .sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getArtigoBySlug(slug: string): Artigo | null {
  const entries = collectMdFiles(ARTIGOS_DIR, ARTIGOS_DIR);
  const entry = entries.find((e) => e.slug === slug);
  if (!entry) return null;

  const content = fs.readFileSync(entry.filePath, "utf-8");
  const { meta, body, hasFrontmatter } = parseFrontmatter(content);
  const { intro, sections } = parseBody(body);

  const title = hasFrontmatter ? (meta.title ?? "") : extractH1(content);
  const category = hasFrontmatter
    ? (meta.category ?? folderToCategory(entry.folder))
    : folderToCategory(entry.folder);

  const author = meta.author || "por Rafaela Costa (Cassy)";
  const teamMember = findTeamMember(author);

  return {
    slug,
    title,
    author,
    authorRole: meta.authorRole ?? teamMember?.role ?? "",
    avatarSrc: meta.avatarSrc ?? (teamMember ? `/team/${teamMember.photo}.png` : undefined),
    category,
    tag: meta.tag ?? (entry.folder.toLowerCase() || "artigo"),
    date: meta.date ?? "",
    imageSrc: meta.imageSrc ?? "/placeholder-card.png",
    intro,
    sections,
  };
}

export function getAllSlugs(): string[] {
  return collectMdFiles(ARTIGOS_DIR, ARTIGOS_DIR).map((e) => e.slug);
}

export function formatDate(isoDate: string): string {
  if (!isoDate) return "";
  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
  ];
  const [year, month, day] = isoDate.split("-").map(Number);
  return `Publicado em ${day} de ${months[month - 1]}, ${year}`;
}
