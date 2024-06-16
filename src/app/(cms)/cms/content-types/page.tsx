import plusIcon from '@iconify/icons-mdi/plus'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import type { Metadata } from 'next'
import Overview from './components/Overview/Component'
import PageTitle from '@/components/molecules/PageTitle/Component'
import Button from '@/components/ui/Button/Component.client'

export const metadata: Metadata = {
  title: 'Content Types | NextJS CMS',
  description: '',
}

export default function ContentTypes() {
  return (
    <>
      <div
        className="flex items-center justify-between gap-4 pb-8"
      >
        <PageTitle className="pb-0">
          Content Types
        </PageTitle>

        <Button
          className="group"
          variant="success"
          size="icon"
          aria-label="Add content type"
          asChild
        >
          <Link
            className="shrink-0"
            href="/cms/content-types/create"
          >
            <Icon
              className="size-5 transition-transform group-hover:scale-125"
              icon={plusIcon}
              ssr
            />
          </Link>
        </Button>
      </div>

      <Overview />
    </>
  )
}
