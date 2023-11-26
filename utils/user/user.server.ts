import { prisma } from 'utils/prisma.server';

export async function markUserForDeletion(profileId: string) {
  await prisma.user.update({
    where: { id: profileId },
    data: {
      marked_for_deletion_at: new Date(), // Set marked_for_deletion_at to the current time
    },
  });
}
