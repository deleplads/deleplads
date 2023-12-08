import type { ParkingStatus } from "@prisma/client";
import { prisma } from "../prisma.server";

export async function getParkingSpotsByUserWhereStatus(userId: string, Status: ParkingStatus) {
    if (!userId) {
        throw new Error("User ID is required");
    }

    const parkingSpots = await prisma.parkingspots.findMany({
        where: {
            owner_id: userId,
            status: Status
        }
    });

    return parkingSpots;
}
