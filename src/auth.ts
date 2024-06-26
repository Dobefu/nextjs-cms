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

      const result = await prisma.users.upsert({
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
        .catch((e: Error) => {
          console.error(e.message)
          return null
        })

      if (!result)
        return

      if (result.createdAt.toString() !== result.updatedAt.toString())
        return

      if (result.id === 1) {
        await prisma.users.update({
          where: {
            id: result.id,
          },
          data: {
            role: 'ADMIN',
          },
        })
          .catch((e: Error) => {
            console.error(e.message)
            return null
          })
      }
    },
  },
})
