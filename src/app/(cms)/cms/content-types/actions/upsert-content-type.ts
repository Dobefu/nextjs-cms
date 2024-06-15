'use server'

import { PrismaClient } from '@prisma/client'
import type { EditFormSchema } from '../components/EditForm/Component.client'

export default async function upsertContentType(
  values: EditFormSchema,
  id?: number,
): Promise<{
  success: boolean
  error?: unknown
}> {
  const prisma = new PrismaClient()

  const fieldValues = {
    title: values.title,
  }

  if (!id) {
    try {
      await prisma.contentType.create({
        data: {
          ...fieldValues,
        },
      })

      return {
        success: true,
      }
    }
    catch (e) {
      return {
        success: false,
        error: e,
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
  catch (e) {
    return {
      success: false,
      error: e,
    }
  }
}
