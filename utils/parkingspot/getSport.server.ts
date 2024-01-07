
import type { ParkingSpotWithDetailsAndPrice } from "utils/types.server";
import { prisma } from "../prisma.server";

export async function getParkingSpotByOwnerAndSpotId(spotId: string, userId: string): Promise<ParkingSpotWithDetailsAndPrice | null> {
    if (!spotId) {
        throw new Error("Spot ID is required");
    }


    const parkingSpots = await prisma.parkingspots.findFirst({
        where: {
            id: spotId,
            owner_id: userId
        },
        include: {
            parkingspot_details_parkingspot_details_spot_idToparkingspots: true,
            prices: true
        }
    });

    return parkingSpots;
}

export async function getParkingSpotById(spotId: string): Promise<ParkingSpotWithDetailsAndPrice | null> {
    if (!spotId) {
        throw new Error("Spot ID is required");
    }


    const parkingSpots = await prisma.parkingspots.findFirst({
        where: {
            id: spotId,
        },
        include: {
            parkingspot_details_parkingspot_details_spot_idToparkingspots: true,
            prices: true
        }
    });

    return parkingSpots;
}
