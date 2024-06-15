'use server'

import { PrismaClient } from '@prisma/client'
import type { EditFormSchema } from '../components/EditForm/Component.client'

export default async function upsertContentType(values: EditFormSchema, id?: number) {
  const prisma = new PrismaClient()

  const fieldValues = {
    title: values.title,
  }

  if (!id) {
    await prisma.contentType.create({
      data: {
        ...fieldValues,
      },
    })

    return
  }

  await prisma.contentType.update({
    where: {
      id,
    },
    data: {
      ...fieldValues,
    },
  })
}
