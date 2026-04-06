import Button from "@/components/Button";
import styles from "./TrilhasSection.module.css";

export default function TrilhasSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        {/* Photo */}
        <div className={styles.photo}>
          <img src="/about-photo.png" alt="Membras colaborando em trilhas de aprendizado" />
        </div>

        {/* Text */}
        <div className={styles.txt}>
          <h2 className={styles.heading}>O que são as Trilhas</h2>

          <div className={styles.body}>
            <p className={styles.paragraph}>
              Tecnologia faz mais sentido quando você aprende na ordem certa,
              com quem já percorreu o caminho.
            </p>
            <p className={styles.paragraph}>
              As trilhas da Binatti são sequências de conteúdo encadeado, cada
              tutorial começa onde o anterior terminou. Uma membra faz o design,
              outra desenvolve a partir dele, outra testa o resultado. No final,
              a comunidade produziu um produto inteiro. E você aprendeu vendo
              como cada peça se conecta.
            </p>
            <p className={styles.paragraph}>
              Escolha sua área. Comece de onde você está.
            </p>
          </div>

          <Button
            variant="filled"
            kind="text"
            content="Explorar trilhas"
            showIcon={false}
          />
        </div>
      </div>
    </section>
  );
}
