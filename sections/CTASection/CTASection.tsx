import Button from "@/components/Button";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      {/* Group photo — bottom right, absolute */}
      <div className={styles.photo} aria-hidden="true">
        <img src="/cta-photo.png" alt="" />
      </div>

      {/* Decorative doodle overlay on photo area */}
      <img
        className={styles.decorGroup}
        src="/decor-group6.png"
        alt=""
        aria-hidden="true"
      />

      {/* Main content */}
      <div className={styles.content}>
        {/* Heading with decorative overlays */}
        <div className={styles.headingWrapper}>
          <img
            className={styles.decorCrown}
            src="/illustrations/@svg9.svg"
            alt=""
            aria-hidden="true"
          />
          <h2 className={styles.heading}>
            Seu nome no
            <br />
            que você cria
          </h2>
          <img
            className={styles.decorUnderline}
            src="/illustrations/@svg8.svg"
            alt=""
            aria-hidden="true"
          />
        </div>

        {/* Body text */}
        <div className={styles.body}>
          <p className={styles.paragraph}>
            Mulheres em tech <strong>existem</strong>, ensinam e constroem, com
            ou sem reconhecimento. A Binatti existe pra mudar o
            &ldquo;sem&rdquo;.
          </p>
          <p className={styles.paragraph}>
            Se você quer fazer parte de uma comunidade que coloca seu nome no
            que você cria, <strong>seu lugar é aqui</strong>.
          </p>
        </div>

        <div className={styles.buttonWrapper}>
          <Button content="Quero ser Voluntária" showIcon variant="filled" />
        </div>
      </div>
    </section>
  );
}
