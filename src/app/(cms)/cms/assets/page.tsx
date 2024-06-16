import type { Metadata } from 'next'
import PageTitle from '@/components/molecules/PageTitle/Component'

export const metadata: Metadata = {
  title: 'Assets | NextJS CMS',
  description: '',
}

export default function Assets() {
  return (
    <PageTitle>ASSETS</PageTitle>
  )
}
