import type { Metadata } from 'next'
import PageTitle from '@/components/molecules/PageTitle/Component'

export const metadata: Metadata = {
  title: 'Dashboard | NextJS CMS',
  description: '',
}

export default function Page() {
  return (
    <PageTitle
      className="mb-8 max-md:mb-4"
    >
      DASHBOARD
    </PageTitle>
  )
}
