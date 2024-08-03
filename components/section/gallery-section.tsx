import Image from 'next/image'

import { cn } from '@/lib/utils'

export interface GalleryProps {
  className?: string
}

export interface GalleryImageProps {
  src: string
  alt: string
}

const images = [
  { src: '/gallery/gallery-1.png', alt: 'Gallery Image 1' },
  { src: '/gallery/gallery-2.png', alt: 'Gallery Image 2' },
  { src: '/gallery/gallery-3.png', alt: 'Gallery Image 3' }
]

export function GallerySection({ className }: GalleryProps) {
  return (
    <div
      className={cn(
        'relative flex w-full max-w-7xl flex-row flex-wrap items-start justify-start gap-6',
        className
      )}
    >
      {images.map((image, index) => (
        <GalleryImage key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  )
}

export function GalleryImage({ src, alt }: GalleryImageProps) {
  return (
    <div className="ease-&lsqb;cubic-bezier(0.2,0.8,0.2,1)&rsqb; group relative flex h-80 min-w-[280px] max-w-[520px] flex-1 flex-col items-start justify-start gap-2.5 overflow-hidden rounded-3xl border border-border">
      <Image src={src} alt={alt} fill className="z-0 object-cover" />
    </div>
  )
}
