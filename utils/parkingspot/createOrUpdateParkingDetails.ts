import type { parkingspot_details } from "@prisma/client";
import { prisma } from "../prisma.server";


async function createOrUpdateParkingspotDetails(attributes: Partial<parkingspot_details>) {
  // Check if details already exist for this spotId, then create or update
  const existingDetails = await prisma.parkingspot_details.findUnique({ where: { spot_id: attributes.spot_id }});

  if (existingDetails) {
    return await prisma.parkingspot_details.update({
      where: { spot_id: existingDetails.spot_id },
      data: { ...attributes, spot_id: attributes.spot_id }
    });
  } else {
    return await prisma.parkingspot_details.create({
      data: { ...attributes, spot_id: attributes.spot_id }
    });
  }
}

export default createOrUpdateParkingspotDetails;
