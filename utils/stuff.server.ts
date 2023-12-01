import { prisma } from "./prisma.server";

export async function getAllStuff() {
  const stuff = await prisma.stuff.findMany();

  return stuff;
}

export async function getAllStuff2() {
  const stuff = await prisma.stuff2.findMany();

  return stuff;
}
