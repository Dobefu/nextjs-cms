import process from 'node:process'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.languages.create({
    data: {
      title: 'English',
      dir: 'LTR',
    },
  })

  await prisma.users.createMany({
    data: {
      name: 'Anonymous user',
      email: '',
    },
  })

  await prisma.$executeRaw`UPDATE Users set id=0 WHERE id=1;`
  await prisma.$executeRaw`ALTER TABLE Users AUTO_INCREMENT=1;`

  if (process.env.NODE_ENV !== 'development')
    return

  await prisma.contentTypes.create({
    data: {
      title: 'Basic page',
      authorId: 0,
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
