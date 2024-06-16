'use server'

import { PrismaClient } from '@prisma/client'
import type { EditFormSchema } from '../components/EditForm/Component.client'

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

  const fieldValues = {
    title: values.title,
  }

  if (!id) {
    try {
      const { id } = await prisma.contentType.create({
        data: {
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
    await prisma.contentType.update({
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
