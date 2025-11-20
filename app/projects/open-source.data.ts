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

