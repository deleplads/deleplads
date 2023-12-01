import { Prisma, PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient();

// const prisma = new PrismaClient({
//   datasources: { db: { url: process.env.DATABASE_URL } },
// }).$extends(useSupabaseRowLevelSecurity())

const prisma = new PrismaClient()
const rlsDb = prisma.$extends(currentCompanyRlsExtension(session.stuff.userId))

function currentCompanyRlsExtension(userId) {
  return Prisma.defineExtension((prisma) =>
    prisma.$extends({
      query: {
        $allModels: {
          async $allOperations({ args, query }) {
            const [, result] = await prisma.$transaction([
              prisma.$executeRaw`SELECT set_config('user_id', ${userId}, TRUE)`,
              query(args),
            ])
            return result
          },
        },
      },
    }),
  )
}

export { prisma }
