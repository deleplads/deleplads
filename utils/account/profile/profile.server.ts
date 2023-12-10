import { profiles } from '@prisma/client';
import { prisma } from '../../prisma.server';
import supabase from "../../supabase.server";
import { getUserId } from "../../auth.server";

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

export async function downloadProfileImageAsBuffer(request: Request) {
  const userId = await getUserId(request);
  const supabaseClient = await supabase(request);
  const { data, error } = await supabaseClient
    .storage
    .from('users')
    .download(`${userId}/profile_image`);

  return { data: data ? Buffer.from(await data.arrayBuffer()) : null, error: error };
}

export async function uploadProfileImage(request: Request, image: File) {
  const userId = await getUserId(request);

  const supabaseClient = await supabase(request);
  const { data, error } = await supabaseClient
    .storage
    .from('users')
    .upload(`${userId}/profile_image`, image, {
      cacheControl: '3600',
      upsert: true,
      contentType: 'image/*'
    })
  return { data: data, error: error };

}
