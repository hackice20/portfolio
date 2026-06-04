import { type Experience as ExperienceItem } from '../../experience.data';
import styles from '../../experience.module.css';

export const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
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
