import Image from 'next/image'
import React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { formatDateString } from '@/lib/utils'
import { TakeInterface } from '@/types'

interface GalleryCardProps {
  take: TakeInterface
}

export function GalleryCard({ take }: GalleryCardProps) {
  return (
    <Card className="m-4 overflow-hidden md:w-[342px]">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={take.takeImage.image}
            alt={take.takeImage.alt}
            fill
            className="rounded-t-xl object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold">{take.title}</h3>
          <p className="mb-2 text-sm text-muted-foreground">
            {formatDateString(take.date)}
          </p>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {take.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
