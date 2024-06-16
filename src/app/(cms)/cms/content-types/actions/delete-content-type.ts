'use server'

import { PrismaClient } from '@prisma/client'

export default async function deleteContentType(
  id: number,
): Promise<{
  success: boolean
  error?: unknown
}> {
  const prisma = new PrismaClient()

  const result = await prisma.contentType.delete({
    where: {
      id,
    },
  })
    .then(() => {
      return {
        success: true,
      }
    })
    .catch((e: any) => {
      return {
        success: false,
        error: e.toString(),
      }
    })

  return result
}
