export type OpenSourcePR = {
  id: string;
  org: string;
  repo: string;
  prNumber: number;
  title: string;
  description?: string;
  url: string;
  mergedAt?: string;
  labels?: string[];
};

export const OPEN_SOURCE_PRS: OpenSourcePR[] = [
  // Open PRs
  {
    id: 'calcom-25707',
    org: 'calcom',
    repo: 'cal.com',
    prNumber: 25707,
    title: 'Open PR #25707',
    description: '',
    url: 'https://github.com/calcom/cal.com/pull/25707',
    labels: [],
  },
  {
    id: 'calcom-25186',
    org: 'calcom',
    repo: 'cal.com',
    prNumber: 25186,
    title: 'Open PR #25186',
    description: '',
    url: 'https://github.com/calcom/cal.com/pull/25186',
    labels: [],
  },
  {
    id: 'calcom-25052',
    org: 'calcom',
    repo: 'cal.com',
    prNumber: 25052,
    title: 'fix: markdown rendering',
    description: 'Fixes markdown rendering on public booking pages and in email notifications. Previously, markdown (headers, lists, bold, italic, links, etc.) was displayed as raw text instead of formatted HTML.',
    url: 'https://github.com/calcom/cal.com/pull/25052',
    labels: ['bug', 'emails'],
  },
  // Closed PRs
  {
    id: 'calcom-25371',
    org: 'calcom',
    repo: 'cal.com',
    prNumber: 25371,
    title: 'Closed PR #25371',
    description: '',
    url: 'https://github.com/calcom/cal.com/pull/25371',
    labels: [],
  },
  {
    id: 'calcom-25481',
    org: 'calcom',
    repo: 'cal.com',
    prNumber: 25481,
    title: 'Closed PR #25481',
    description: '',
    url: 'https://github.com/calcom/cal.com/pull/25481',
    labels: [],
  },
  // Merged PRs
  {
    id: 'calcom-25101',
    org: 'calcom',
    repo: 'cal.com',
    prNumber: 25101,
    title: 'fix: dynamic group meeting slots not loading',
    description: 'Fixed a bug where the Booker atom component fails to load available time slots when used for dynamic group meetings (multiple usernames). Changed the condition from Boolean(event?.data?.id) to event?.data?.id != null to correctly handle 0 as a valid ID.',
    url: 'https://github.com/calcom/cal.com/pull/25101',
    labels: ['bug', 'platform'],
  },
  {
    id: 'calcom-24556',
    org: 'calcom',
    repo: 'cal.com',
    prNumber: 24556,
    title: 'Add PR title here',
    description: 'Add PR description here',
    url: 'https://github.com/calcom/cal.com/pull/24556',
    labels: [],
  },
];

