import Avatar from "@/components/Avatar";
import { TEAM } from "@/data/team";
import styles from "./TeamCarouselSection.module.css";

export default function TeamCarouselSection() {
  return (
    <section className={styles.section} aria-label="Time Binatti">
      <div className={styles.viewport}>
        <div className={styles.track} aria-hidden="true">
          {[...TEAM, ...TEAM].map((member, i) => (
            <Avatar
              key={`${member.photo}-${i}`}
              variant="withText"
              name={member.name}
              role={member.role}
              avatarSrc={`/team/${member.photo}.png`}
              showSocialIcons={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
