import Image from 'next/image';
import { type Project } from '../../projects.data';
import styles from '../../projects.module.css';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        {project.statusChip && (
          <div className={styles.statusChip}>
            <div className="w-2 h-2 bg-green-500 rounded-full blinking-dot" aria-hidden="true"></div>
            <span className="text-sm font-medium text-foreground">{project.statusChip.label}</span>
          </div>
        )}
      </div>

      {project.media?.kind === 'image' && (
        <div className={styles.mediaFrame}>
          <Image
            src={project.media.src}
            alt={project.media.alt}
            width={1600}
            height={900}
            sizes="(min-width: 768px) 640px, 100vw"
            className="w-full h-auto rounded object-contain"
          />
        </div>
      )}

      {project.media?.kind === 'video' && (
        <div className={styles.mediaFrame}>
          <video
            className="w-full h-auto rounded [&::-webkit-media-controls-pip-button]:hidden [&::-webkit-media-controls-enclosure]:overflow-hidden"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            controls={false}
            disablePictureInPicture
            controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
            webkit-playsinline="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="false"
            x5-video-orientation="portraint"
          >
            {project.media.sources?.map((s, i) => (
              <source key={i} src={s.src} type={s.type} />
            ))}
          </video>
        </div>
      )}

      {project.tags?.length > 0 && (
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={styles.tag}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {project.points?.length > 0 && (
        <ul className={styles.points}>
          {project.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}

      {project.links?.length && (
        <div className={styles.links}>
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                link.variant === 'secondary'
                  ? 'px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90'
                  : 'px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90'
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
