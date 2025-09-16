export type Experience = {
  id: string;
  role: string;
  company: string;
  period?: string;
  points: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'magnacamz-winter-intern',
    role: 'Winter Intern',
    company: 'Magnacamz Technologies Pvt. Ltd.',
    points: [
      'Developed and maintained scalable full-stack applications using modern technologies such as React, Node.js, Express, TypeScript, and MongoDB.',
      'Designed and deployed responsive, user-friendly interfaces with frameworks like Tailwind CSS and Vite, ensuring cross-browser and mobile compatibility.',
      'Collaborated with diverse tools and frameworks, achieving optimized performance, security, and usability across all projects.',
    ],
  },
];


