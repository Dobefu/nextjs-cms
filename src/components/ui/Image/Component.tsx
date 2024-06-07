import Client from './Component.client'

interface BaseImageProps {
  className?: string
  alt: string
  src: string
  width: number
  height: number
  priority?: boolean
}

export default function BaseImage(props: BaseImageProps) {
  return (
    <Client
      {...props}
    />
  )
}
