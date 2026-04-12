import Button from "@/components/Button";
import styles from "./SobreSection.module.css";

export default function SobreSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        {/* Text */}
        <div className={styles.txt}>
          <h2 className={styles.heading}>
            Mais que Códigos: <br /> uma comunidade
          </h2>

          <div className={styles.body}>
            <p className={styles.paragraph}>
              Somos uma comunidade de mulheres apaixonadas por tecnologia,
              unidas pelo propósito de compartilhar conhecimento, aprender
              juntas e impactar positivamente o futuro da tecnologia.
            </p>
            <p className={styles.paragraph}>
              Acreditamos no poder da colaboração e no crescimento coletivo,
              criando um espaço acolhedor para todas que desejam evoluir na
              jornada tecnológica.
            </p>
          </div>

          <Button
            variant="filled"
            kind="text"
            content="Conheça a comunidade"
            showIcon={false}
          />
        </div>

        {/* Photo */}
        <div className={styles.photo}>
          <img src="/about-photo.png" alt="Membras da Binatti Community" />
        </div>
      </div>
    </section>
  );
}
