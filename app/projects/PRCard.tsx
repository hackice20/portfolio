'use client';

import { ExternalLink, GitMerge, Calendar } from 'lucide-react';
import Image from 'next/image';

export type PRCardData = {
  id: string;
  org: string;
  repo: string;
  prNumber: number;
  title: string;
  description?: string;
  url: string;
  mergedAt?: string | null;
  labels?: Array<{ name: string; color?: string }>;
  author?: string;
  authorAvatar?: string;
  state?: string;
};

const PRCard = ({ pr }: { pr: PRCardData }) => {
  const formatDate = (dateString?: string | null) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getTimeAgo = (dateString?: string | null) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'today';
    if (diffInDays === 1) return '1 day ago';
    if (diffInDays < 30) return `${diffInDays} days ago`;
    if (diffInDays < 365) {
      const months = Math.floor(diffInDays / 30);
      return `${months} month${months > 1 ? 's' : ''} ago`;
    }
    const years = Math.floor(diffInDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 bg-card text-card-foreground border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <GitMerge className="w-4 h-4 text-primary" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
            {pr.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span className="font-mono">{pr.org}/{pr.repo}</span>
          <span>#{pr.prNumber}</span>
          {pr.mergedAt && (
            <>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{getTimeAgo(pr.mergedAt)}</span>
              </div>
            </>
          )}
        </div>
      </div>

      {pr.description && (
        <p className="text-muted-foreground text-sm mb-3 overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
        }}>
          {pr.description}
        </p>
      )}

      {pr.labels && pr.labels.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {pr.labels.map((label, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full border"
              style={{
                backgroundColor: label.color ? `#${label.color}20` : undefined,
                borderColor: label.color ? `#${label.color}` : undefined,
                color: label.color ? `#${label.color}` : undefined,
              }}
            >
              {label.name}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-300 dark:border-gray-700">
        <a
          href={pr.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors text-sm font-medium flex items-center gap-2"
        >
          View on GitHub
          <ExternalLink className="w-3 h-3" />
        </a>
        {pr.mergedAt && (
          <span className="text-xs text-muted-foreground">
            Merged {formatDate(pr.mergedAt)}
          </span>
        )}
      </div>
    </div>
  );
};

export default PRCard;

