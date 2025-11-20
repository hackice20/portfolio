'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MAJOR_PROJECTS, MINOR_PROJECTS, type Project } from './projects.data';
import { OPEN_SOURCE_PRS } from './open-source.data';
import PRCard, { type PRCardData } from './PRCard';
import { fetchMultiplePRs, type GitHubPR } from './github-utils';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="p-3 sm:p-4 md:p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{project.title}</h3>
        {project.statusChip && (
          <div className="flex items-center gap-2 px-3 py-1 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-background">
            <div className="w-2 h-2 bg-green-500 rounded-full blinking-dot"></div>
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

type TabType = 'major' | 'minor' | 'opensource';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabType>('major');
  const [prData, setPrData] = useState<PRCardData[]>([]);
  const [loadingPRs, setLoadingPRs] = useState(false);

  useEffect(() => {
    if (activeTab === 'opensource') {
      setLoadingPRs(true);
      const prRequests = OPEN_SOURCE_PRS.map(pr => ({
        org: pr.org,
        repo: pr.repo,
        prNumber: pr.prNumber,
      }));

      fetchMultiplePRs(prRequests)
        .then((githubPRs: GitHubPR[]) => {
          // Merge GitHub data with our static data
          const mergedPRs: PRCardData[] = OPEN_SOURCE_PRS.map(staticPR => {
            const githubPR = githubPRs.find(
              gpr => gpr.org === staticPR.org && 
                     gpr.repo === staticPR.repo && 
                     gpr.prNumber === staticPR.prNumber
            );
            
            if (githubPR) {
              return {
                id: staticPR.id,
                org: githubPR.org,
                repo: githubPR.repo,
                prNumber: githubPR.prNumber,
                title: githubPR.title,
                description: githubPR.description || staticPR.description,
                url: githubPR.url,
                mergedAt: githubPR.mergedAt,
                labels: githubPR.labels.map(l => ({ name: l.name, color: l.color })),
                author: githubPR.author,
                authorAvatar: githubPR.authorAvatar,
              };
            }
            
            // Fallback to static data if GitHub fetch failed
            return {
              id: staticPR.id,
              org: staticPR.org,
              repo: staticPR.repo,
              prNumber: staticPR.prNumber,
              title: staticPR.title,
              description: staticPR.description,
              url: staticPR.url,
              mergedAt: staticPR.mergedAt || null,
              labels: staticPR.labels?.map(l => ({ name: l })) || [],
            };
          });
          
          setPrData(mergedPRs);
        })
        .catch((error) => {
          console.error('Error fetching PR data:', error);
          // Fallback to static data
          setPrData(OPEN_SOURCE_PRS.map(pr => ({
            id: pr.id,
            org: pr.org,
            repo: pr.repo,
            prNumber: pr.prNumber,
            title: pr.title,
            description: pr.description,
            url: pr.url,
            mergedAt: pr.mergedAt || null,
            labels: pr.labels?.map(l => ({ name: l })) || [],
          })));
        })
        .finally(() => {
          setLoadingPRs(false);
        });
    }
  }, [activeTab]);

  const getTabTitle = () => {
    switch (activeTab) {
      case 'major':
        return 'Major Projects';
      case 'minor':
        return 'Minor Projects';
      case 'opensource':
        return 'Open Source Contributions';
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
          <button 
            onClick={() => setActiveTab('opensource')} 
            className={`px-3 sm:px-4 md:px-5 py-2 rounded text-xs sm:text-sm md:text-base transition-colors whitespace-nowrap ${
              activeTab === 'opensource' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-transparent text-primary hover:bg-muted'
            }`}
          >
            Open Source
          </button>
        </div>

        <style jsx>{`
          @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0.3; } }
          .blinking-dot { animation: blink 1.5s infinite; }
        `}</style>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">{getTabTitle()}</h2>
          
          {activeTab === 'opensource' ? (
            <>
              {loadingPRs ? (
                <div className="text-center py-8 text-muted-foreground">
                  Loading open source contributions...
                </div>
              ) : (
                prData.length > 0 ? (
                  prData.map((pr) => (
                    <PRCard key={pr.id} pr={pr} />
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No open source contributions found.
                  </div>
                )
              )}
            </>
          ) : (
            (activeTab === 'major' ? MAJOR_PROJECTS : MINOR_PROJECTS).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </section>
      </div>
    </div>
  );
}
