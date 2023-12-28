import type { price } from "@prisma/client"
import { prisma } from "../prisma.server";

async function createOrUpdatePrice(price: Partial<price>) {
  if (price.spot_id) {
    return await prisma.price.upsert({
      where: { spot_id: price.spot_id },
      update: { ...price, updated_at: new Date()  },
      create: { ...price, created_at: new Date() }
    });
  }
}

export default createOrUpdatePrice;
