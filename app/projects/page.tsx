'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MAJOR_PROJECTS, MINOR_PROJECTS, type Project } from './projects.data';
import { PROJECTS_CSS } from './projects.animations';
import { projectsClasses as styles } from './projects.styles';

const ProjectCard = ({ project }: { project: Project }) => {
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

type TabType = 'major' | 'minor';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabType>('major');

  const getTabTitle = () => {
    switch (activeTab) {
      case 'major':
        return 'Major Projects';
      case 'minor':
        return 'Minor Projects';
      default:
        return 'Projects';
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.intro}>
          <h1 className={styles.title}>projects</h1>
          <p className={styles.subtitle}>Here are some of the projects I&apos;ve been working on:</p>
        </section>

        <div className={styles.tabs}>
          <button 
            onClick={() => setActiveTab('major')} 
            className={`${styles.tabButton} ${
              activeTab === 'major' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-transparent text-primary hover:bg-muted'
            }`}
          >
            Major Projects
          </button>
          <button 
            onClick={() => setActiveTab('minor')} 
            className={`${styles.tabButton} ${
              activeTab === 'minor' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-transparent text-primary hover:bg-muted'
            }`}
          >
            Minor Projects
          </button>
        </div>

        <style jsx>{PROJECTS_CSS}</style>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{getTabTitle()}</h2>
          
          {(activeTab === 'major' ? MAJOR_PROJECTS : MINOR_PROJECTS).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </div>
  );
}
