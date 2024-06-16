import chevronLeftIcon from '@iconify/icons-mdi/chevron-left'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import type { Metadata } from 'next'
import { PrismaClient } from '@prisma/client'
import { notFound } from 'next/navigation'
import EditForm from '../../components/EditForm/Component.client'
import PageTitle from '@/components/molecules/PageTitle/Component'

export const metadata: Metadata = {
  title: 'Create Content | NextJS CMS',
  description: 'Create a new content entity.',
}

interface CreateProps {
  params: {
    contentType: string
  }
}

export default async function Create({ params }: CreateProps) {
  const prisma = new PrismaClient()

  const contentType = await prisma.contentTypes.findUnique({
    where: {
      id: +params.contentType,
    },
    select: {
      title: true,
    },
  })
    .catch(() => {
      return undefined
    })

  if (!contentType)
    notFound()

  return (
    <>
      <Link
        className="mb-8 flex items-center gap-3 text-muted-foreground max-md:mb-4"
        href="/cms/content/create"
      >
        <Icon
          className="size-4 shrink-0 rtl:rotate-180"
          icon={chevronLeftIcon}
          ssr
        />

        Back to content type selection
      </Link>

      <PageTitle
        className="mb-8 max-md:mb-4"
      >
        Create
        {' '}
        <i>{contentType.title}</i>
        {' '}
        content
      </PageTitle>

      <EditForm
        action="create"
        contentType={+params.contentType}
      />
    </>
  )
}
