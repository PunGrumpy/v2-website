import { fetchEducation } from '@/app/(app)/actions'
import { GitHubContributions } from '@/components/card/github-contributions'
import { EducationSection } from '@/components/section/education-section'
import { HeroSection } from '@/components/section/hero-section'

export default async function Home() {
  const education = await fetchEducation()

  return (
    <main className="z-10 mx-auto flex flex-row flex-wrap items-center justify-center gap-14 space-y-16 text-start">
      <HeroSection />
      <GitHubContributions />
      <EducationSection education={education} />
    </main>
  )
}
