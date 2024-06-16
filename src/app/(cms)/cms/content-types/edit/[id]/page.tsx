import { PrismaClient } from '@prisma/client'
import { notFound } from 'next/navigation'
import chevronLeftIcon from '@iconify/icons-mdi/chevron-left'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import type { Metadata } from 'next'
import EditForm from '../../components/EditForm/Component.client'
import PageTitle from '@/components/molecules/PageTitle/Component'

export const metadata: Metadata = {
  title: 'Edit Content Type | NextJS CMS',
  description: 'Edit your existing content type.',
}

interface EditPageProps {
  params: {
    id: number
  }
}

export default async function EditPage({ params }: EditPageProps) {
  const prisma = new PrismaClient()

  const contentType = await prisma.contentTypes.findUnique({
    where: {
      id: +params.id,
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
        className="mb-8 flex items-center gap-3 text-muted-foreground max-md:pb-4"
        href="/cms/content-types"
      >
        <Icon
          className="size-4 shrink-0 rtl:rotate-180"
          icon={chevronLeftIcon}
          ssr
        />

        Back to overview
      </Link>

      <PageTitle>
        Edit
        {' '}
        <i>{contentType?.title}</i>
      </PageTitle>

      <EditForm
        action="edit"
        id={+params.id}
        defaultValues={{
          title: contentType.title,
        }}
      />
    </>
  )
}
