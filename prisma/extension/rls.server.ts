import { Prisma } from "@prisma/client";

/**
 * Allows database operation using userId with the RLS policies
 * @returns object used by Prisma to allow database operation using userId with RLS
 */
export function forUser(userId: string) {
  return Prisma.defineExtension((prisma) =>
    prisma.$extends({
      query: {
        $allModels: {
          async $allOperations({ args, query }) {
            const [, result] = await prisma.$transaction([
              prisma.$executeRaw`SELECT set_config('app.current_user_id', ${userId}, TRUE)`,
              query(args),
            ]);
            return result;
          },
        },
      },
    })
  );
}


/**
 * Bypasses the RLS policies
 * @returns object used by Prisma to bypass RLS in our application
 */
export function bypassRLS() {
  return Prisma.defineExtension((prisma) =>
    prisma.$extends({
      query: {
        $allModels: {
          async $allOperations({ args, query }) {
            const [, result] = await prisma.$transaction([
              prisma.$executeRaw`SELECT set_config('app.bypass_rls', 'on', TRUE)`,
              query(args),
            ]);
            return result;
          },
        },
      },
    })
  );
}
