import { cookies } from 'next/headers'
import Client from './Component.client'

interface SidebarBaseProps {
  children?: React.ReactNode
}

export default async function SidebarBase({ children }: SidebarBaseProps) {
  const isOpenInitial = (cookies().get('sidebar-open')?.value ?? 'true') === 'true'

  return (
    <Client
      isOpenInitial={isOpenInitial}
    >
      {children}
    </Client>
  )
}
