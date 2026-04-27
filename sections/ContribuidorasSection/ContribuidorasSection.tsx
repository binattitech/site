import AvatarWithText from "@/components/Avatar";
import styles from "./ContribuidorasSection.module.css";

const TEAM = [
  { name: "Milena Duarte",  role: "UX UI Designer",  photo: "milena"  },
  { name: "Marina de Lima", role: "Contribuidora",    photo: "marina"  },
  { name: "Aline Ramos",          role: "Contribuidora",    photo: "aline"   },
  { name: "Ana Vitória Mendes",            role: "Contribuidora",    photo: "ana"     },
  { name: "Beatriz Barreto",            role: "Contribuidora",    photo: "bea"     },
  { name: "Rafela Costa (Cassy)",          role: "Contribuidora",    photo: "cassy"   },
  { name: "Ingrid Ribeiro",         role: "Contribuidora",    photo: "ingrid"  },
  { name: "Kaielly Sousa",        role: "Contribuidora",    photo: "kaielly" },
  { name: "Kévilla Aguiar",        role: "Contribuidora",    photo: "kevilla" },
  { name: "Laura Madeira",          role: "Contribuidora",    photo: "laura"   },
];

export default function ContribuidorasSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Contribuidoras</h2>
        <div className={styles.grid}>
          {TEAM.map((member) => (
            <AvatarWithText
              key={member.photo}
              variant="card"
              name={member.name}
              role={member.role}
              avatarSrc={`/team/${member.photo}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
