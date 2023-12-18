import type { price } from "@prisma/client"
import { prisma } from "../prisma.server";

async function createOrUpdatePrice(price: Partial<price>) {

  if (price.spot_id) {
    return await prisma.price.update({
      where: { spot_id: price.spot_id },
      data: { ...price, spot_id: price.spot_id, updated_at: new Date()},
    });
  } else {
    return await prisma.price.create({
      data: { ...price, spot_id: price.spot_id, created_at: new Date() },
    });
  }
}

export default createOrUpdatePrice;
