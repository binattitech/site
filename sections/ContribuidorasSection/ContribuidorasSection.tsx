import Link from "next/link";
import AvatarWithText from "@/components/Avatar";
import { TEAM } from "@/data/team";
import styles from "./ContribuidorasSection.module.css";

export default function ContribuidorasSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Contribuidoras</h2>
        <div className={styles.grid}>
          {TEAM.map((member) =>
            member.clickable === false ? (
              <div key={member.username} className={styles.cardBtn}>
                <AvatarWithText
                  variant="card"
                  name={member.name}
                  role={member.role}
                  avatarSrc={`/team/${member.photo}.png`}
                />
              </div>
            ) : (
              <Link
                key={member.username}
                href={`/contribuidoras/${member.username}`}
                className={styles.cardBtn}
                aria-label={`Ver perfil de ${member.name}`}
              >
                <AvatarWithText
                  variant="card"
                  name={member.name}
                  role={member.role}
                  avatarSrc={`/team/${member.photo}.png`}
                />
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
