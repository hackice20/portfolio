"use client"

import { useAge } from "@/hooks/useAge"
import { BIRTH_DATE_ISO, HERO_COPY, SKILL_SECTIONS } from "./home.data"
import styles from "./page.module.css"

export default function Home() {
  const age = useAge(BIRTH_DATE_ISO)

  return (
    <main className={styles.main} id="top">
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            {HERO_COPY.greeting}
          </h1>
          <p className={styles.heroSubtitle}>
            {HERO_COPY.linePrefix} <span className="font-mono">{age}</span>{HERO_COPY.lineSuffix}
          </p>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className={styles.skillsSectionTitle}>
            skills
          </h2>
          <div className={styles.skillsGrid}>
            {SKILL_SECTIONS.map((section, idx) => (
              <div key={idx} className={`${styles.skillCard} frosted-glass dark:frosted-glass-dark levitate`}>
                <h3 className={styles.skillCardTitle}>{section.title}</h3>
                <div className={styles.skillCardIcons}>
                  {section.icons.map((Icon, iconIdx) => (
                    <Icon key={iconIdx} className="w-4 h-4 md:w-6 md:h-6" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
