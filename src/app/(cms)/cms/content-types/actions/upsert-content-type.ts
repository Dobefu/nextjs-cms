'use server'

import { PrismaClient } from '@prisma/client'
import type { EditFormSchema } from '../components/EditForm/Component.client'
import { auth } from '@/auth'

export default async function upsertContentType(
  values: EditFormSchema,
  id?: number,
): Promise<{
  success: boolean
  data?: {
    id: number
  }
  error?: unknown
}> {
  const prisma = new PrismaClient()
  const session = await auth()

  if (!session?.user?.email) {
    return {
      success: false,
      error: 'no_author',
    }
  }

  const user = await prisma.users.findUnique({
    where: {
      email: session.user.email,
    },
  })
    .catch((e: Error) => {
      console.error(e.message)
      return null
    })

  const fieldValues = {
    title: values.title,
  }

  if (!id) {
    try {
      const { id } = await prisma.contentTypes.create({
        data: {
          authorId: user?.id,
          ...fieldValues,
        },
      })

      return {
        success: true,
        data: {
          id,
        },
      }
    }
    catch (e: any) {
      console.warn(user)
      return {
        success: false,
        error: e?.code ?? e.toString(),
      }
    }
  }

  try {
    await prisma.contentTypes.update({
      where: {
        id,
      },
      data: {
        ...fieldValues,
      },
    })

    return {
      success: true,
    }
  }
  catch (e: any) {
    return {
      success: false,
      error: e?.code ?? e.toString(),
    }
  }
}
