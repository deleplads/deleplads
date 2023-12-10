import type { price } from "@prisma/client"
import { prisma } from "../prisma.server";

async function createOrUpdatePrice(price: Partial<price>) {

  if (price.id) {
    return await prisma.price.update({
      where: { id: price.id },
      data: { ...price, spot_id: price.spot_id, updated_at: new Date()},
    });
  } else {
    return await prisma.price.create({
      data: { ...price, spot_id: price.spot_id, created_at: new Date() },
    });
  }
}

export default createOrUpdatePrice;
