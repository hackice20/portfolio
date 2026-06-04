import { EXPERIENCES } from './experience.data';
import styles from './experience.module.css';
import { ExperienceCard } from './components/experience-card';



export default function Experience() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.intro}>
          <h1 className={styles.title}>experience</h1>
          <p className={styles.subtitle}>Places I have worked and what I did there.</p>
        </section>

        <section className={styles.list}>
          {EXPERIENCES.map((e) => (
            <ExperienceCard key={e.id} item={e} />
          ))}
        </section>
      </div>
    </main>
  );
}
