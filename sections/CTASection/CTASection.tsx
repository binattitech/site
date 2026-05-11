import Button from "@/components/Button";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
      {/* Left — text content */}
      <div className={styles.content}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>
            Seu nome no
            <br />
            que{" "}
            <span className={styles.voceCriaWrapper}>
              <span className={styles.vWrapper}>
                v
                <img
                  className={styles.decorCrown}
                  src="/illustrations/@svg9.svg"
                  alt=""
                  aria-hidden="true"
                />
              </span>
              ocê cria
              <img
                className={styles.decorUnderline}
                src="/illustrations/@svg8.svg"
                alt=""
                aria-hidden="true"
              />
            </span>
          </h2>
        </div>

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

      {/* Right — group photo */}
      <div className={styles.photo} aria-hidden="true">
        <img src="/img/imgCTA.png" alt="" />
      </div>
      </div>
    </section>
  );
}
