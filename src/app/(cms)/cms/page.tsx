import type { Metadata } from 'next'
import PageTitle from '@/components/molecules/PageTitle/Component'

export const metadata: Metadata = {
  title: 'Dashboard | NextJS CMS',
  description: '',
}

export default function Page() {
  return (
    <PageTitle>DASHBOARD</PageTitle>
  )
}
