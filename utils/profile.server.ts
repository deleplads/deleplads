import { profiles } from '@prisma/client';
import { prisma } from './prisma.server';

export async function getProfileFromUserId(userId: string) {
  const profile = await prisma.profiles.findFirst({
    where: { id: userId },
  });

  if (!profile) {
    throw new Error('Profile not found for the given user ID');
  }
  return profile;
}

export async function updateProfile(profileData: Partial<profiles>) {
  const profile = await prisma.profiles.update({
    where: {
      id: profileData.id,
    },
    data: {
      ...profileData,
    },
  });
  return profile;
}

export async function deleteProfile(profileId: string) {
  await prisma.profiles.delete({
    where: { id: profileId },
  });
}
