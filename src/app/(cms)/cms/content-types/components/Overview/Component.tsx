import { PrismaClient } from '@prisma/client'
import Client from './Component.client'

export default async function Overview() {
  const prisma = new PrismaClient()

  const contentTypes = await prisma.contentTypes.findMany({
    select: {
      id: true,
      title: true,
      updatedAt: true,
    },
    take: 200,
  })
    .then((values) => {
      return values.map((contentType) => {
        return {
          id: contentType.id,
          title: contentType.title,
          lastmod: contentType.updatedAt.getTime(),
        }
      })
    })
    .catch((e: Error) => {
      console.error(e.message)
      return []
    })

  return (
    <Client
      contentTypes={contentTypes}
    />
  )
}
