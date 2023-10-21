import { prisma } from "./prisma.server";

export async function getAllcommunes() {
  const communes = await prisma.commune_prices.findMany();

  return communes;
}
