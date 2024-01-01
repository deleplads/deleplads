import { prisma } from "utils/prisma.server";

export async function getNextStepForParkingSpotById(
  spotId: string
): Promise<{ nextStep: string }> {
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

  let nextStep = `${spotId}/lokation`;
  if (
    !selectedSpot.street ||
    !selectedSpot.postal_code ||
    !selectedSpot.city ||
    !selectedSpot.street_nr
  ) {
    nextStep = `${spotId}/lokation`;
  } else if (
    !selectedSpot.parkingspot_details_parkingspot_details_spot_idToparkingspots ||
    selectedSpot.parkingspot_details_parkingspot_details_spot_idToparkingspots
      .length === 0
  ) {
    nextStep = `${spotId}/tilfoejelser`;
  } else if (!selectedSpot.notes) {
    nextStep = `${spotId}/noter`;
  } else if (!selectedSpot.prices || selectedSpot.prices.length === 0) {
    nextStep = `${spotId}/pris`;
  } else {
    nextStep = `${spotId}/kvittering`; // Or return a default step if all fields are filled
  }

  return { nextStep };
}
