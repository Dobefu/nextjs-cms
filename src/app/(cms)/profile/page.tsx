import { PrismaClient } from '@prisma/client'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import PageTitle from '@/components/molecules/PageTitle/Component'
import BaseImage from '@/components/ui/Image/Component'

export const metadata: Metadata = {
  title: 'Profile | NextJS CMS',
  description: '',
}

export default async function Page() {
  const session = await auth()

  if (!session || !session?.user?.email)
    return

  const prisma = new PrismaClient()
  const userData = await prisma.users.findFirst({
    where: {
      email: session.user.email,
    },
  })

  if (!userData)
    return redirect('/logout')

  return (
    <div
      className="flex flex-wrap gap-8 max-md:gap-4"
    >
      <BaseImage
        src={userData.image ?? ''}
        alt="User avatar"
        width={256}
        height={256}
      />

      <div>
        <PageTitle
          className="mb-8 max-md:mb-4"
        >
          {userData.name}
        </PageTitle>

        <div>
          <b>Email:</b>
          {' '}
          {userData.email}
        </div>
      </div>
    </div>
  )
}
