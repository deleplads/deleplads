import { profiles } from '@prisma/client';
import { prisma } from '../../prisma.server';
import supabaseServerClient from '../../supabase.server';
import { getUserId } from '../../auth.server';
import { forUser } from 'prisma/extension/rls.server';

export async function getProfileFromUserId(userId: string) {
  const profile = await prisma.$extends(forUser(userId)).profiles.findFirst({
    where: { id: userId },
  });

  if (!profile) {
    throw new Error('Profile not found for the given user ID');
  }
  return profile;
}

export async function getAllProfiles(userId: string) {
  const profiles = await prisma.$extends(forUser(userId)).profiles.findMany();
  return profiles;
}

export async function updateProfile(userId: string, profileData: Partial<profiles>) {
  const profile = await prisma.$extends(forUser(userId)).profiles.update({
    where: {
      id: profileData.id,
    },
    data: {
      ...profileData,
    },
  });
  return profile;
}

export async function downloadProfileImageAsBuffer(request: Request) {
  const userId = await getUserId(request);
  const supabaseClient = await supabaseServerClient(request);
  const { data, error } = await supabaseClient.storage.from('users').download(`${userId}/profile_image`);

  return { data: data ? Buffer.from(await data.arrayBuffer()) : null, error: error };
}

export async function uploadProfileImage(request: Request, image: File) {
  const userId = await getUserId(request);

  const supabaseClient = await supabaseServerClient(request);
  const { data, error } = await supabaseClient.storage.from('users').upload(`${userId}/profile_image`, image, {
    cacheControl: '3600',
    upsert: true,
    contentType: 'image/*',
  });
  return { data: data, error: error };
}
