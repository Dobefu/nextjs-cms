import Client from './Component.client'

export default function Overview() {
  const contentTypes: {
    id: string
    title: string
    lastmod: number
  }[] = []

  return (
    <Client
      contentTypes={contentTypes}
    />
  )
}
