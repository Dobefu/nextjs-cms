import plusIcon from '@iconify/icons-mdi/plus-bold'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import type { Metadata } from 'next'
import Overview from './components/Overview/Component'
import PageTitle from '@/components/molecules/PageTitle/Component'
import Button from '@/components/ui/Button/Component.client'

export const metadata: Metadata = {
  title: 'Content | NextJS CMS',
  description: '',
}

export default function Content() {
  return (
    <>
      <div
        className="mb-8 flex items-center justify-between gap-4 max-md:mb-4"
      >
        <PageTitle>Content</PageTitle>

        <Button
          className="group max-md:p-4"
          variant="success"
          asChild
        >
          <Link
            className="flex shrink-0 gap-2"
            href="/cms/content/create"
          >
            <Icon
              className="size-4 transition-transform group-hover:scale-125"
              icon={plusIcon}
              ssr
            />
            <span
              className="font-semibold max-md:sr-only"
            >
              Create content
            </span>
          </Link>
        </Button>
      </div>

      <Overview />
    </>
  )
}
