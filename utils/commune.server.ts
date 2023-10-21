import { prisma } from "./prisma.server";

export async function getAllcommunes() {
  const profile = await prisma
  return profile;
}
