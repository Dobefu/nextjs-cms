import type { Metadata } from 'next'
import PageTitle from '@/components/molecules/PageTitle/Component'

export const metadata: Metadata = {
  title: 'Content | NextJS CMS',
  description: '',
}

export default function Content() {
  return (
    <PageTitle>CONTENT</PageTitle>
  )
}
