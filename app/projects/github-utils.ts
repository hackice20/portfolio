export type GitHubPR = {
  id: string;
  org: string;
  repo: string;
  prNumber: number;
  title: string;
  description: string;
  url: string;
  mergedAt: string | null;
  labels: Array<{ name: string; color: string }>;
  state: string;
  author: string;
  authorAvatar: string;
};

export async function fetchPRData(org: string, repo: string, prNumber: number): Promise<GitHubPR | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${org}/${repo}/pulls/${prNumber}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      cache: 'force-cache', // Cache for browser
    });

    if (!response.ok) {
      console.error(`Failed to fetch PR ${prNumber}: ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    
    return {
      id: `${org}-${repo}-${prNumber}`,
      org,
      repo,
      prNumber,
      title: data.title,
      description: data.body || '',
      url: data.html_url,
      mergedAt: data.merged_at,
      labels: data.labels || [],
      state: data.state,
      author: data.user?.login || 'unknown',
      authorAvatar: data.user?.avatar_url || '',
    };
  } catch (error) {
    console.error(`Error fetching PR ${prNumber}:`, error);
    return null;
  }
}

export async function fetchMultiplePRs(prs: Array<{ org: string; repo: string; prNumber: number }>): Promise<GitHubPR[]> {
  const promises = prs.map(pr => fetchPRData(pr.org, pr.repo, pr.prNumber));
  const results = await Promise.all(promises);
  return results.filter((pr): pr is GitHubPR => pr !== null);
}

