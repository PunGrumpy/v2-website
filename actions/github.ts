'use server'

import { Activity } from '@/components/kibo-ui/contribution-graph'
import { unstable_cache } from 'next/cache'

type GitHubContributionsResponse = {
  contributions: Activity[]
}

const username = 'PunGrumpy'

export const getCachedContributions = unstable_cache(
  async () => {
    const url = new URL(
      `/v4/${username}`,
      'https://github-contributions-api.jogruber.de'
    )
    const response = await fetch(url)
    const data = (await response.json()) as GitHubContributionsResponse
    return data.contributions
  },
  ['github-contributions'],
  { revalidate: 60 * 60 * 24 }
)
