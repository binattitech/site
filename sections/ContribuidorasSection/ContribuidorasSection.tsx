"use client";

import { useState, useRef } from "react";
import AvatarWithText from "@/components/Avatar";
import WindowProfile from "@/components/WindowProfile";
import { TEAM } from "@/data/team";
import styles from "./ContribuidorasSection.module.css";

export default function ContribuidorasSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex !== null ? TEAM[selectedIndex] : null;

  // Keep last valid member so the modal doesn't flash defaults during close animation
  const lastSelected = useRef(selected);
  if (selected !== null) lastSelected.current = selected;
  const displayMember = selected ?? lastSelected.current;

  return (
    <>
      <section className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Contribuidoras</h2>
          <div className={styles.grid}>
            {TEAM.map((member, i) => (
              <button
                key={member.photo}
                className={styles.cardBtn}
                onClick={() => setSelectedIndex(i)}
                aria-label={`Ver perfil de ${member.name}`}
              >
                <AvatarWithText
                  variant="card"
                  name={member.name}
                  role={member.role}
                  avatarSrc={`/team/${member.photo}.png`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <WindowProfile
        isOpen={selected !== null}
        onClose={() => setSelectedIndex(null)}
        username={displayMember?.username}
        name={displayMember?.name}
        bio={displayMember?.bio}
        avatarSrc={displayMember ? `/team/${displayMember.photo}.png` : undefined}
        socialLinks={displayMember?.socialLinks}
        videos={displayMember?.videos}
      />
    </>
  );
}
