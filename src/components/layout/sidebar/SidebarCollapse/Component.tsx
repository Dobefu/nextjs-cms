import { cookies } from 'next/headers'
import Client from './Component.client'

export default function SidebarCollapse() {
  const isOpenInitial = cookies().get('sidebar-open')?.value === 'true'

  return (
    <Client
      isOpenInitial={isOpenInitial ?? true}
    />
  )
}
