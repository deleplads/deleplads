import { prisma } from 'utils/prisma.server';

export async function markUserForDeletion(userId: string) {
  await prisma.user.update({
    where: { id: userId },
    data: {
      marked_for_deletion_at: new Date(), // Set marked_for_deletion_at to the current time
    },
  });
}
