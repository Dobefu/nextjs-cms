'use client'

import Image from 'next/image'

interface BaseImageProps {
  className?: string
  alt: string
  src: string
  width: number
  height: number
  priority?: boolean
}

export default function Client({ className, alt, src, width, height, priority }: BaseImageProps) {
  return (
    <Image
      className={className}
      alt={alt}
      src={src}
      width={width}
      height={height}
      priority={priority ?? false}
    />
  )
}
