'use server'

import { PrismaClient } from '@prisma/client'
import type { EditFormSchema } from '../components/EditForm/Component.client'
import { auth } from '@/auth'

export default async function upsertContent(
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

  const fieldValues = {
    title: values.title,
    published: values.published,
  }

  if (!id) {
    try {
      const { id } = await prisma.content.create({
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
      return {
        success: false,
        error: e?.code ?? e.toString(),
      }
    }
  }

  try {
    await prisma.content.update({
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
