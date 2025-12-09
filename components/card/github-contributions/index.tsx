import { Suspense } from 'react'

import { GitHubContributionFallback, GitHubContributionGraph } from './graph'
import { getCachedContributions } from '@/actions/github'

export const GitHubContributions = () => {
  const contributions = getCachedContributions()

  return (
    <div className="mx-auto">
      <h2 className="sr-only">GitHub Contributions</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <div className="mx-auto max-w-6xl">
          <GitHubContributionGraph
            contributions={contributions}
            username="PunGrumpy"
          />
        </div>
      </Suspense>
    </div>
  )
}
