import { PrismaClient } from '@prisma/client'
import Client from './Component.client'

export default async function Overview() {
  const prisma = new PrismaClient()

  const content = await prisma.content.findMany({
    select: {
      id: true,
      title: true,
      updatedAt: true,
    },
    take: 200,
  })
    .then((values) => {
      return values.map((entity) => {
        return {
          id: entity.id,
          title: entity.title,
          lastmod: entity.updatedAt.getTime(),
        }
      })
    })
    .catch(() => {
      return []
    })

  return (
    <Client
      content={content}
    />
  )
}
