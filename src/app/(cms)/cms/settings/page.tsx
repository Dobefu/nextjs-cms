import type { Metadata } from 'next'
import PageTitle from '@/components/molecules/PageTitle/Component'

export const metadata: Metadata = {
  title: 'Settings | NextJS CMS',
  description: '',
}

export default function Settings() {
  return (
    <PageTitle>SETTINGS</PageTitle>
  )
}
