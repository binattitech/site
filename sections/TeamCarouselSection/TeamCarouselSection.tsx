import Avatar from "@/components/Avatar";
import styles from "./TeamCarouselSection.module.css";

const TEAM = [
  { name: "Milena Duarte",          role: "UX UI Designer",  photo: "milena"  },
  { name: "Marina de Lima",         role: "Contribuidora",   photo: "marina"  },
  { name: "Aline Ramos",            role: "Contribuidora",   photo: "aline"   },
  { name: "Ana Vitória Mendes",     role: "Contribuidora",   photo: "ana"     },
  { name: "Beatriz Barreto",        role: "Contribuidora",   photo: "bea"     },
  { name: "Rafela Costa (Cassy)",   role: "Contribuidora",   photo: "cassy"   },
  { name: "Ingrid Ribeiro",         role: "Contribuidora",   photo: "ingrid"  },
  { name: "Kaielly Sousa",          role: "Contribuidora",   photo: "kaielly" },
  { name: "Kévilla Aguiar",         role: "Contribuidora",   photo: "kevilla" },
  { name: "Laura Madeira",          role: "Contribuidora",   photo: "laura"   },
];

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
