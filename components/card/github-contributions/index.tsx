import { Suspense } from 'react'

import { GitHubContributionFallback, GitHubContributionGraph } from './graph'
import { getCachedContributions } from '@/actions/github'

export const GitHubContributions = () => {
  const contributions = getCachedContributions()

  return (
    <div className="relative grid max-w-6xl overflow-hidden">
      <h2 className="sr-only">GitHub Contributions</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph
          contributions={contributions}
          username="PunGrumpy"
        />
      </Suspense>
    </div>
  )
}
