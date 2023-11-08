import type { parkingspots } from "@prisma/client";
import { prisma } from "../prisma.server";

export async function createOrUpdate(parkingspot: Partial<parkingspots>) {
  if (parkingspot.id) {
    // If `id` is provided, update the existing record
    const updatedParkingspot = await prisma.parkingspots.update({
      where: {
        id: parkingspot.id,
      },
      data: {
        ...parkingspot,
        updated_at: new Date(), // Set updated_at to the current time
      },
    });
    return updatedParkingspot;
  } else {
    // If `id` is not provided, create a new record
    const createdParkingspot = await prisma.parkingspots.create({
      data: {
        ...parkingspot,
      },
    });
    return createdParkingspot;
  }
}
