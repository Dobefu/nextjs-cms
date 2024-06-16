import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

import { PrismaClient } from '@prisma/client'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
  ],
  events: {
    signIn: async ({ user }) => {
      if (!user.email)
        return

      const prisma = new PrismaClient()

      await prisma.users.upsert({
        where: {
          email: user.email,
        },
        update: {
          name: user.name,
          image: user.image,
        },
        create: {
          email: user.email,
          name: user.name,
          image: user.image,
        },
      })
    },
  },
})
