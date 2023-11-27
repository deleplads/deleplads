import { prisma } from "utils/prisma.server";

export async function getNextStepForParkingSpotById(
  spotId: string
): Promise<{  nextStep: string }> {
  const selectedSpot = await prisma.parkingspots.findUnique({
    where: { id: spotId },
    include: {
      parkingspot_details_parkingspot_details_spot_idToparkingspots: true,
      prices: true,
    },
  });

  if (!selectedSpot) {
    throw new Error("Selected parking spot not found.");
  }

  let nextStep = `${spotId}/type`;
  if (!selectedSpot.customer_type)  {
    nextStep = `${spotId}/type`;
  } else if (
    !selectedSpot.street ||
    !selectedSpot.postal_code ||
    !selectedSpot.city ||
    !selectedSpot.street_nr
  ) {
    nextStep = `${spotId}/location`;
  } else if (
    !selectedSpot.parkingspot_details_parkingspot_details_spot_idToparkingspots ||
    selectedSpot.parkingspot_details_parkingspot_details_spot_idToparkingspots.length === 0
  ) {
    nextStep = `${spotId}/attributes`;
  } else if (!selectedSpot.notes) {
    nextStep = `${spotId}/notes`;
  }  else if (!selectedSpot.prices || selectedSpot.prices.length === 0) {
    nextStep = `${spotId}/price`;
  } else {
    nextStep =`${spotId}/recipt`; // Or return a default step if all fields are filled
  }

  return { nextStep };
}
