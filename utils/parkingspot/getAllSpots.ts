import type { user } from "@prisma/client";
import { prisma } from "../prisma.server";

export async function getParkingSpotsByUser(userId: string) {
    if (!userId) {
        throw new Error("User ID is required");
    }

    const parkingSpots = await prisma.parkingspots.findMany({
        where: {
            owner_id: userId
        }
    });

    return parkingSpots;
}
