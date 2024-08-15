import { AnimatePresence, motion } from 'framer-motion'
import { Aperture, Camera, Focus, SunDim, Timer, Zap } from 'lucide-react'
import Image from 'next/image'
import { PortableText } from 'next-sanity'
import { useMemo, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { formatDateString } from '@/lib/utils'
import { TakeInterface } from '@/types'

interface GalleryCardProps {
  take: TakeInterface
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ take }) => {
  const [isHovered, setIsHovered] = useState(false)

  const hoverContent = useMemo(
    () => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 overflow-y-auto bg-card/70 p-4 backdrop-blur-md"
      >
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {take.title}
        </h3>
        <p className="mb-2 text-sm text-muted-foreground">
          {formatDateString(take.date)}
        </p>
        <div className="mb-2 text-sm text-foreground">
          <PortableText value={take.description} />
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          <div className="flex items-center">
            <Camera className="mr-1 size-4" />
            <span>
              {take.camera} ({take.cameraType})
            </span>
          </div>
          <div className="flex items-center">
            <Aperture className="mr-1 size-4" />
            <span>{take.settings.aperture} &fnof;</span>
          </div>
          <div className="flex items-center">
            <SunDim className="mr-1 size-4" />
            <span>{take.settings.exposureCompensation} eV</span>
          </div>
          <div className="flex items-center">
            <Timer className="mr-1 size-4" />
            <span>{take.settings.shutterSpeed} sec</span>
          </div>
          <div className="flex items-center">
            <Zap className="mr-1 size-4" />
            <span>ISO {take.settings.iso}</span>
          </div>
          <div className="flex items-center">
            <Focus className="mr-1 size-4" />
            <span>
              {take.settings.focalLength} mm ({take.lensType})
            </span>
          </div>
        </div>
      </motion.div>
    ),
    [take]
  )

  return (
    <Card
      className="md:w-[calc(33.33% - 16px)] relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={take.takeImage.image}
            alt={take.takeImage.alt || take.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            quality={100}
            placeholder={take.takeImage?.lqip ? 'blur' : 'empty'}
            blurDataURL={take.takeImage?.lqip || ''}
            className="object-cover"
          />
          <AnimatePresence>{isHovered && hoverContent}</AnimatePresence>
        </div>
        <div className="p-4">
          <div className="h-20">
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {take.title}
            </h3>
            <p className="mb-2 text-sm text-muted-foreground">
              {formatDateString(take.date)}
            </p>
          </div>
          <div className="mb-2 mt-4 flex flex-wrap gap-2">
            {take.tags.map((tag, index) => (
              <Badge key={index} variant="filled" color="secondary" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
