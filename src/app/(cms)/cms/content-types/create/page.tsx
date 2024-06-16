import chevronLeftIcon from '@iconify/icons-mdi/chevron-left'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import type { Metadata } from 'next'
import EditForm from '../components/EditForm/Component.client'
import PageTitle from '@/components/molecules/PageTitle/Component'

export const metadata: Metadata = {
  title: 'Create Content Type | NextJS CMS',
  description: 'Create a new content type.',
}

export default function Create() {
  return (
    <>
      <Link
        className="mb-8 flex items-center gap-3 text-muted-foreground max-md:pb-4"
        href="/cms/content-types"
      >
        <Icon
          className="size-4 shrink-0"
          icon={chevronLeftIcon}
          ssr
        />

        Back to overview
      </Link>

      <PageTitle>Create a Content Type</PageTitle>

      <EditForm
        action="create"
      />
    </>
  )
}
