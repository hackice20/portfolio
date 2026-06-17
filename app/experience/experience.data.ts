export type Experience = {
  id: string;
  role: string;
  company: string;
  type?: string;
  period?: string;
  location?: string;
  points: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'kelp-fse-intern',
    role: 'Full Stack Engineer',
    company: 'Kelp',
    type: 'Internship',
    period: 'Dec 2025 - May 2026 · 6 mos',
    location: 'Mumbai, Maharashtra, India · On-site',
    points: [
      'Architected deals tool module integrating Elasticsearch queries across 4 data sources with intelligent parameter mapping for 2 enterprise clients.',
      'Implemented signed URL mechanism with Redis caching (15-minute TTL) to secure file downloads, eliminating filepath exposure vulnerabilities and preventing unauthorized file enumeration attacks.',
      'Refactored redundant JWT authentication across main and external investor portal into a unified auth service with dynamic database routing, eliminating code debt.',
    ],
  },
  {
    id: 'magnacamz-fse-intern',
    role: 'Full Stack Engineer',
    company: 'Magnacamz',
    type: 'Internship',
    period: 'Dec 2024 - Jan 2025 · 2 mos',
    location: 'Pimpri Chinchwad, Maharashtra, India · On-site',
    points: [
      'Architected and maintained 3 full-stack web applications, including 2 production-grade product websites and 1 interactive project demo.',
      'Integrated rate limiting, caching, and optimized API routes to boost backend performance by 40% while ensuring scalable and secure data handling across user sessions.',
      'Crafted responsive and SEO-optimized UIs with Tailwind CSS and Vite, reducing page load time by 35% and improving Lighthouse performance scores (90+).',
    ],
  },
];


