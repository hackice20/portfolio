'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MAJOR_PROJECTS, MINOR_PROJECTS, type Project } from './projects.data';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="p-3 sm:p-4 md:p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{project.title}</h3>
        {project.statusChip && (
          <div className="flex items-center gap-2 px-3 py-1 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-background">
            <div className="w-2 h-2 bg-green-500 rounded-full blinking-dot" aria-hidden="true"></div>
            <span className="text-sm font-medium text-foreground">{project.statusChip.label}</span>
          </div>
        )}
      </div>

      {project.media?.kind === 'image' && (
        <div className="w-full rounded-md bg-muted/20 border border-gray-300 dark:border-gray-700 flex items-center justify-center p-2 mt-2">
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
        <div className="w-full rounded-md bg-muted/20 border border-gray-300 dark:border-gray-700 flex items-center justify-center p-2 mt-2">
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
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-background border border-foreground/20 text-foreground rounded-full px-3 py-1 select-none cursor-default transition-transform duration-150 ease-out hover:scale-105 hover:bg-foreground/10"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {project.points?.length > 0 && (
        <ul className="mt-2 text-muted-foreground list-disc pl-5">
          {project.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}

      {project.links?.length && (
        <div className="flex space-x-4 mt-4">
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
    <div className="min-h-screen pt-[80px] sm:pt-[98px] md:pt-[98px] pb-16 p-2 sm:p-4 md:p-8 lg:px-24 font-mono">
      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        <section className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">projects</h1>
          <p className="text-muted-foreground">Here are some of the projects I've been working on:</p>
        </section>

        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mt-4">
          <button 
            onClick={() => setActiveTab('major')} 
            className={`px-3 sm:px-4 md:px-5 py-2 rounded text-xs sm:text-sm md:text-base transition-colors whitespace-nowrap ${
              activeTab === 'major' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-transparent text-primary hover:bg-muted'
            }`}
          >
            Major Projects
          </button>
          <button 
            onClick={() => setActiveTab('minor')} 
            className={`px-3 sm:px-4 md:px-5 py-2 rounded text-xs sm:text-sm md:text-base transition-colors whitespace-nowrap ${
              activeTab === 'minor' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-transparent text-primary hover:bg-muted'
            }`}
          >
            Minor Projects
          </button>
        </div>

        <style jsx>{`
          @keyframes blink-green {
    0% {
      background-color: #14532d; 
      box-shadow: 0 0 0 0 rgba(20, 83, 45, 0.7); 
    }
    50% {
      background-color: #4ade80; 
      box-shadow: 0 0 5px 2px rgba(74, 222, 128, 0.4);
    }
    100% {
      background-color: #14532d; 
      box-shadow: 0 0 0 0 rgba(20, 83, 45, 0);
    }
  }

  .blinking-dot {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    display: inline-block;
    animation: blink-green 1.5s infinite ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .blinking-dot {
      animation: none;
      background-color: #14532d;
    }
  }
        `}</style>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">{getTabTitle()}</h2>
          
          {(activeTab === 'major' ? MAJOR_PROJECTS : MINOR_PROJECTS).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </div>
  );
}
