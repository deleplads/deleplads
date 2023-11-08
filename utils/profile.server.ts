import { prisma } from "./prisma.server";

export async function getProfileFromUserId(userId: string) {
  const profile = await prisma.profiles.findFirst({
    where: { id: userId },
  });

  if (!profile) {
    throw new Error('Profile not found for the given user ID');
  }
  return profile;
}
