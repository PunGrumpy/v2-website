'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect,useState } from 'react'

import { cn } from '@/lib/utils'

const images = [
  'https://assets.pungrumpy.com/preview/desktop-home.png',
  'https://assets.pungrumpy.com/preview/desktop-about.png',
  'https://assets.pungrumpy.com/preview/mobile-home.png',
  'https://assets.pungrumpy.com/preview/mobile-about.png'
]

const useImageRotation = (images: string[], interval: number) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [previousImageIndex, setPreviousImageIndex] = useState(
    images.length - 1
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setPreviousImageIndex(currentImageIndex)
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval, currentImageIndex])

  return { currentImageIndex, previousImageIndex }
}

export const NewWorkOverlay = () => {
  const { currentImageIndex, previousImageIndex } = useImageRotation(
    images,
    3500
  )

  return (
    <main className="group fixed bottom-6 right-10 z-30 overflow-hidden">
      <Link
        href="https://www.pungrumpy.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block size-40 overflow-hidden rounded-lg border border-border bg-background shadow-lg transition-all duration-300"
      >
        <div className="relative size-full">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImageIndex}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%', position: 'absolute' }}
              transition={{
                duration: 1,
                ease: 'easeInOut'
              }}
              className="absolute size-full"
            >
              <Image
                src={images[currentImageIndex]}
                alt={`Portfolio screenshot ${currentImageIndex + 1}`}
                fill
                sizes="160px"
                priority
                className={cn(
                  'size-full object-cover',
                  'transform transition-transform duration-300 group-hover:scale-105'
                )}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-background/30 p-2 backdrop-blur-sm">
            <p className="text-center text-sm font-bold uppercase text-foreground">
              New portfolio
            </p>
          </div>
        </div>
      </Link>
    </main>
  )
}
