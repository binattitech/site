import Image from "next/image";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Card from "@/components/Card";
import s from "./home.module.css";

/* ─── dados dos tutoriais ────────────────────────────────── */
const TUTORIALS = [
  { img: "/tutorial-1.png", title: "Como criar um Design System com Claude", author: "por Milena Duarte", tag: "tutorial" },
  { img: "/tutorial-2.png", title: "Acessibilidade no Figma do zero",         author: "por Ciclana", tag: "ux" },
  { img: "/tutorial-3.png", title: "Prototipando com componentes reais",       author: "por Beltrana", tag: "design" },
  { img: "/tutorial-4.png", title: "Git para designers: sem medo",             author: "por Fulana", tag: "dev" },
  { img: "/tutorial-5.png", title: "CSS Grid na prática",                      author: "por Ciclana", tag: "frontend" },
  { img: "/tutorial-6.png", title: "Como documentar componentes no Storybook", author: "por Beltrana", tag: "docs" },
];

const ARTICLES = [
  { title: "Por que comunidades importam mais do que cursos",      author: "por Fulana",   tag: "comunidade" },
  { title: "O que aprendi errando em produção",                    author: "por Ciclana",  tag: "devops" },
  { title: "Design e código: a parceria que ninguém te ensina",   author: "por Beltrana", tag: "carreira" },
  { title: "Como eu entrei em tech sem ter feito faculdade",       author: "por Fulana",   tag: "carreira" },
  { title: "Ferramentas de IA que uso todo dia no meu trabalho",  author: "por Ciclana",  tag: "ia" },
];

/* ─── FolderGroup ─────────────────────────────────────────── */
const FOLDERS = [
  { img: "/folder-1.png", top: 0,   label: "UX Design",        labelColor: "white",   pos: "center" },
  { img: "/folder-2.png", top: 0,   label: "Front-end",        labelColor: "white",   pos: "left"   },
  { img: "/folder-3.png", top: 80,  label: "Produto",          labelColor: "white",   pos: "left"   },
  { img: "/folder-4.png", top: 160, label: "Data Science",     labelColor: "black",   pos: "right"  },
  { img: "/folder-5.png", top: 160, label: "DevOps",           labelColor: "white",   pos: "center" },
  { img: "/folder-6.png", top: 160, label: "Mobile",           labelColor: "white",   pos: "left"   },
  { img: "/folder-7.png", top: 240, label: "Segurança",        labelColor: "white",   pos: "left"   },
] as const;

export default function Home() {
  return (
    <div className={s.page}>

      {/* ── Decoração hero (atrás do conteúdo) ── */}
      <div className={s.heroDecorGroup5} aria-hidden="true">
        <Image src="/decor-group5.png" alt="" fill style={{ objectFit: "contain" }} />
      </div>

      {/* ════════════════════════════════════════
          HEADER
          ════════════════════════════════════════ */}
      <Header size="lg" />

      {/* ════════════════════════════════════════
          HERO
          ════════════════════════════════════════ */}
      <section className={s.hero} aria-label="Hero">
        <div className={s.heroContent}>

          {/* Avatar group */}
          <div className={s.avatarGroup} aria-hidden="true">
            {["/avatar-1.png", "/avatar-2.png", "/avatar-3.png", "/avatar-4.png"].map((src, i) => (
              <div key={i} className={s.avatar}>
                <Image src={src} alt="" fill />
              </div>
            ))}
          </div>

          {/* Título */}
          <h1 className={s.heroTitle}>
            <span className={s.heroTitleBold}>Trilhas de conhecimento</span>
            <span className={s.heroTitleLight}>em comunidade</span>
          </h1>

          {/* Subtítulo */}
          <p className={s.heroSubtitle}>
            Mulheres que aprendem tecnologia juntas constroem mais rápido, chegam mais longe e não precisam começar do zero sozinhas.
          </p>
        </div>

        {/* Folder Group */}
        <div className={s.folderGroup} aria-hidden="true">
          {FOLDERS.map((f, i) => (
            <div key={i} className={s.folderSlice} style={{ top: f.top }}>
              <Image src={f.img} alt="" fill style={{ objectFit: "cover" }} />
              <span
                className={[
                  s.folderLabel,
                  f.labelColor === "white" ? s.folderLabelWhite : s.folderLabelBlack,
                  f.pos === "center" ? s.folderLabelCenter : f.pos === "left" ? s.folderLabelLeft : s.folderLabelRight,
                ].join(" ")}
              >
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          SOBRE
          ════════════════════════════════════════ */}
      <section className={s.sobre} aria-label="Sobre a Binatti">
        <div className={s.sobreContent}>

          {/* Coluna texto */}
          <div className={s.sobreTxt}>
            <div className={s.sobreHeading}>
              <div className={s.sobreHeadingText}>
                <span className={s.sobreHeadingRegular}>Mais que Códigos: </span>
                <span className={s.sobreHeadingBold}>Uma Comunidade</span>
              </div>
              <div className={s.sobreUnderline} aria-hidden="true">
                <Image src="/decor-underline.png" alt="" fill style={{ objectFit: "contain" }} />
              </div>
            </div>

            <div className={s.sobreBody}>
              <p>Somos uma comunidade de mulheres apaixonadas por tecnologia, unidas pelo propósito de compartilhar conhecimento, aprender juntas e impactar positivamente o futuro da tecnologia.</p>
              <p>Acreditamos no poder da colaboração e no crescimento coletivo, criando um espaço acolhedor para todas que desejam evoluir na jornada tecnológica.</p>
            </div>

            <Button variant="filled" kind="text" content="Conheça a comunidade" />

            {/* Decoração smile */}
            <div className={s.smileDecor} aria-hidden="true">
              <Image src="/decor-smile.png" alt="" fill style={{ objectFit: "contain" }} />
            </div>
          </div>

          {/* Coluna foto */}
          <div className={s.sobrePhoto}>
            <Image src="/about-photo.png" alt="Mulheres em tecnologia" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ÚLTIMOS TUTORIAIS
          ════════════════════════════════════════ */}
      <section className={s.tutoriais} aria-label="Últimos tutoriais">
        <div className={s.tutoriaisContainer}>

          <div className={s.sectionHeader}>
            <h2 className={s.sectionTitle}>
              <span className={s.sectionTitleRegular}>Últimos </span>
              <span className={s.sectionTitleBold}>tutoriais</span>
            </h2>
            <p className={s.sectionSubtitle}>
              Quem aprende aqui tem tutorial escrito por alguém que já errou, ajustou e documentou pra você não precisar repetir o mesmo caminho.
            </p>
            {/* Decoração grlpwr */}
            <div className={s.grlpwrDecor} aria-hidden="true">
              <Image src="/decor-grlpwr.png" alt="" fill style={{ objectFit: "contain" }} />
            </div>
          </div>

          <div className={s.cardsGrid}>
            {TUTORIALS.map((t, i) => (
              <Card
                key={i}
                variant="tutorial"
                size="md"
                states="default"
                title={t.title}
                author={t.author}
                tag={t.tag}
                imageSrc={t.img}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          O QUE SÃO AS TRILHAS
          ════════════════════════════════════════ */}
      <section className={s.trilhas} aria-label="O que são as Trilhas">
        <div className={s.trilhasContent}>

          {/* Foto */}
          <div className={s.trilhasPhoto}>
            <Image src="/about-photo.png" alt="Trilhas Binatti" fill style={{ objectFit: "cover" }} />
          </div>

          {/* Texto */}
          <div className={s.trilhasTxt}>
            <h2 className={s.trilhasHeading}>
              <strong>O que são</strong>{" "}as Trilhas
            </h2>

            <div className={s.trilhasBody}>
              <p>Tecnologia faz mais sentido quando você aprende na ordem certa, com quem já percorreu o caminho.</p>
              <p>As trilhas da Binatti são sequências de conteúdo encadeado, cada tutorial começa onde o anterior terminou. Uma membra faz o design, outra desenvolve a partir dele, outra testa o resultado. No final, a comunidade produziu um produto inteiro. E você aprendeu vendo como cada peça se conecta.</p>
              <p>Escolha sua área. Comece de onde você está.</p>
            </div>

            <Button variant="filled" kind="text" content="Ver as trilhas" />

            {/* Decoração */}
            <div className={s.trilhasDecor} aria-hidden="true">
              <Image src="/decor-group13.png" alt="" fill style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ARTIGOS
          ════════════════════════════════════════ */}
      <section className={s.artigos} aria-label="Artigos">
        <div className={s.artigosContainer}>

          <div className={s.sectionHeader}>
            <h2 className={s.artigosHeaderTitle}>Artigos</h2>
            <p className={s.artigosHeaderBody}>
              Conhecimento que fica na cabeça de uma pessoa{" "}
              <strong>não serve pra comunidade</strong>. Aqui cada membra escreve o que aprendeu e o que você encontra foi testado na prática,{" "}
              <strong>não copiado</strong> de documentação.
            </p>
          </div>

          <div className={s.artigosList}>
            {ARTICLES.map((a, i) => (
              <Card
                key={i}
                variant="articles"
                size="md"
                states="default"
                title={a.title}
                author={a.author}
                tag={a.tag}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA
          ════════════════════════════════════════ */}
      <section className={s.cta} aria-label="Seja voluntária">

        {/* Foto lateral */}
        <div className={s.ctaPhoto} aria-hidden="true">
          <Image src="/cta-photo.png" alt="" fill style={{ objectFit: "cover", objectPosition: "top left" }} />
        </div>

        <div className={s.ctaTxt}>
          {/* Decoração group6 (fundo) */}
          <div className={s.ctaDecorGroup6} aria-hidden="true">
            <Image src="/decor-group6.png" alt="" fill style={{ objectFit: "contain" }} />
          </div>

          {/* Título */}
          <h2 className={s.ctaTitle}>
            <span className={s.ctaTitleBold}>Seu nome</span>
            <span className={s.ctaTitleRegular}> no que você cria</span>
          </h2>

          {/* Corpo */}
          <div className={s.ctaBody}>
            <p>
              <strong>Mulheres</strong> em tech <strong>existem</strong>, ensinam e constroem, com ou sem reconhecimento. A Binatti existe pra mudar o &ldquo;sem&rdquo;.
            </p>
            <p>
              Se você quer fazer parte de uma comunidade que coloca seu nome no que você cria, <strong>seu lugar é aqui</strong>.
            </p>
          </div>

          <Button variant="filled" kind="text" content="Quero ser Voluntária" />

          {/* Decorações textuais */}
          <div className={s.ctaDecorVector93} aria-hidden="true">
            <Image src="/decor-vector93.png" alt="" fill style={{ objectFit: "contain" }} />
          </div>
          <div className={s.ctaDecorGroup12} aria-hidden="true">
            <Image src="/decor-group12.png" alt="" fill style={{ objectFit: "contain" }} />
          </div>
        </div>

        {/* Decoração group11 rotacionada */}
        <div className={s.ctaDecorGroup11} aria-hidden="true">
          <div className={s.ctaDecorGroup11Inner}>
            <Image src="/decor-group11.png" alt="" fill style={{ objectFit: "contain" }} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════ */}
      <footer className={s.footer}>
        <div className={s.footerDivider} />
        <div className={s.footerMeta}>
          <p className={s.footerCopy}>@2025 Binatti Community. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
