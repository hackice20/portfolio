import { EXPERIENCES, type Experience as ExperienceItem } from './experience.data';
import { experienceClasses as styles } from './experience.styles';

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.role}>{item.role}</h3>
        <span className={styles.company}>{item.company}</span>
      </div>
      {item.points?.length > 0 && (
        <ul className={styles.points}>
          {item.points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

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
