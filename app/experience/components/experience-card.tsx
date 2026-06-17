import { type Experience as ExperienceItem } from '../experience.data';
import styles from '../experience.module.css';

export const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <h3 className={styles.role}>{item.role}</h3>
        <div className={styles.meta}>
          <span className={styles.companyLine}>
            {item.company}{item.type && <> · {item.type}</>}
          </span>
          {item.period && <span className={styles.period}>{item.period}</span>}
          {item.location && <span className={styles.location}>{item.location}</span>}
        </div>
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
