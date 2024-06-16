import chevronLeftIcon from '@iconify/icons-mdi/chevron-left'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import type { Metadata } from 'next'
import { PrismaClient } from '@prisma/client'
import Overview from './components/Overview/Component.client'
import PageTitle from '@/components/molecules/PageTitle/Component'

export const metadata: Metadata = {
  title: 'Create Content | NextJS CMS',
  description: 'Create a new content entity.',
}

export default async function CreateOverview() {
  const prisma = new PrismaClient()
  const contentTypes = await prisma.contentTypes.findMany({
    select: {
      id: true,
      title: true,
    },
    take: 200,
  })
    .catch(() => {
      return []
    })

  return (
    <>
      <Link
        className="mb-8 flex items-center gap-3 text-muted-foreground max-md:mb-4"
        href="/cms/content"
      >
        <Icon
          className="size-4 shrink-0 rtl:rotate-180"
          icon={chevronLeftIcon}
          ssr
        />

        Back to overview
      </Link>

      <PageTitle
        className="mb-8 max-md:mb-4"
      >
        Create Content
      </PageTitle>

      <Overview
        contentTypes={contentTypes}
      />
    </>
  )
}
