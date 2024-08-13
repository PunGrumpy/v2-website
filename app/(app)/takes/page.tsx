import { Metadata } from 'next'

import { TakesGallery } from '@/components/takes/takes-gallery'

import { takeFetch } from '../actions'

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE
    ? new URL(`${process.env.NEXT_PUBLIC_METADATA_BASE}/takes`)
    : new URL('http://localhost:3000/takes'),
  title: 'Takes',
  description: 'A collection of my takes and photos.'
}

export default function TakesPage() {
  return (
    <main className="z-10">
      <TakesGallery initialTakes={takeFetch} />
    </main>
  )
}
