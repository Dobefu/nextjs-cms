import Client from './Component.client'

export default function Overview() {
  const contentTypes: {
    id: string
    title: string
    lastmod: string
  }[] = [
    {
      id: 'basic_page',
      title: 'Basic page',
      lastmod: new Date(0).toLocaleString(),
    },
    {
      id: 'homepage',
      title: 'Homepage',
      lastmod: new Date(1000000).toLocaleString(),
    },
  ]

  for (let i = 0; i < 120; i++) {
    contentTypes.push({
      id: `page-${i}`,
      title: `Page ${i + 3}`,
      lastmod: new Date(i * 10000000000).toLocaleString(),
    })
  }

  return (
    <Client
      contentTypes={contentTypes}
    />
  )
}
