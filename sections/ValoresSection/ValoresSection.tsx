import styles from "./ValoresSection.module.css";

const VALORES = [
  {
    id: "acessivel",
    title: "Educação Acessível",
    body: "Criamos conteúdos educativos gratuitos sobre Inteligência Artificial, Cibersegurança e Experiência do Usuário (UX) para que qualquer pessoa possa aprender e se desenvolver na área.",
  },
  {
    id: "mulheres",
    title: "Mais Mulheres na Tecnologia",
    body: "Construímos um espaço onde mulheres podem se apoiar, compartilhar conhecimento e contribuir voluntariamente, incentivando a representatividade e diversidade no setor.",
  },
  {
    id: "crescimento",
    title: "Oportunidades de Crescimento",
    body: "Através do nosso blog, fórum e mini cursos com certificado, buscamos capacitar e conectar pessoas interessadas no mundo da tecnologia.",
  },
];

export default function ValoresSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Nossos Valores</h2>
        <div className={styles.cards}>
          {VALORES.map((valor, i) => (
            <div key={valor.id} className={styles.cqueard} data-index={i}>
              <div className={styles.cardTxt}>
                <p className={styles.cardTitle}>{valor.title}</p>
                <p className={styles.cardBody}>{valor.body}</p>
              </div>
              <div className={styles.cardDecor} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
