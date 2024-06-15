import chevronLeftIcon from '@iconify/icons-mdi/chevron-left'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import EditForm from '../components/EditForm/Component.client'
import PageTitle from '@/components/molecules/PageTitle/Component'

export default function Create() {
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

      <PageTitle>Create a Content Type</PageTitle>

      <EditForm
        action="create"
      />
    </>
  )
}
