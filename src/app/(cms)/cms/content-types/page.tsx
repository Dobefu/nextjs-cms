import plusIcon from '@iconify/icons-mdi/plus'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Overview from './components/Overview/Component'
import PageTitle from '@/components/molecules/PageTitle/Component'
import Button from '@/components/ui/Button/Component.client'

export default function ContentTypes() {
  return (
    <>
      <div
        className="flex items-center justify-between pb-8"
      >
        <PageTitle className="pb-0">
          Content Types
        </PageTitle>

        <Button
          variant="outline"
          size="icon"
          aria-label="Add content type"
          asChild
        >
          <Link
            href="/cms/content-types/create"
          >
            <Icon
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
