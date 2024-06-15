import { PrismaClient } from '@prisma/client'
import { notFound } from 'next/navigation'
import chevronLeftIcon from '@iconify/icons-mdi/chevron-left'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import EditForm from '../../components/EditForm/Component.client'
import PageTitle from '@/components/molecules/PageTitle/Component'

interface EditPageProps {
  params: {
    id: number
  }
}

export default async function EditPage({ params }: EditPageProps) {
  const prisma = new PrismaClient()

  const contentType = await prisma.contentType.findUnique({
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
        className="flex items-center gap-3 pb-8 text-muted-foreground max-md:pb-4"
        href="/cms/content-types"
      >
        <Icon
          className="size-4 shrink-0"
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
