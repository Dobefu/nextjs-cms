import { PrismaClient } from '@prisma/client'
import Client from './Component.client'

export default async function Overview() {
  const prisma = new PrismaClient()

  const content = await prisma.content.findMany({
    select: {
      id: true,
      published: true,
      title: true,
      updatedAt: true,
    },
    take: 200,
  })
    .then((values) => {
      return values.map((entity) => {
        return {
          id: entity.id,
          published: entity.published,
          title: entity.title,
          lastmod: entity.updatedAt.getTime(),
        }
      })
    })
    .catch((e: Error) => {
      console.error(e.message)
      return []
    })

  return (
    <Client
      content={content}
    />
  )
}
