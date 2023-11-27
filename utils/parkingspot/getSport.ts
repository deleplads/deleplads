import { prisma } from "../prisma.server";

export async function getParkingSpotById(spotId: string, userId: string) {
    if (!spotId) {
        throw new Error("Spot ID is required");
    }

    const parkingSpots = await prisma.parkingspots.findFirst({
        where: {
            id: spotId,
            owner_id: userId
        }
    });

    return parkingSpots;
}
