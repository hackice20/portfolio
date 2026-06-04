'use client';

import { useState } from 'react';
import { MAJOR_PROJECTS, MINOR_PROJECTS } from './projects.data';
import { PROJECTS_CSS } from './projects.animations';
import styles from './projects.module.css';
import { ProjectCard } from './components/project-card';


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
