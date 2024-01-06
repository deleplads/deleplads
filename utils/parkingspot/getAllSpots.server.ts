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
        }, 
        include: {
            parkingspot_details_parkingspot_details_spot_idToparkingspots: true,
            prices: true
        }
    });

    return parkingSpots;
}

export async function getParkingSpotsWhereStatus(status: ParkingStatus, page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    const parkingSpots = await prisma.parkingspots.findMany({
        where: { status },
        skip,
        take: limit,
        include: {
            parkingspot_details_parkingspot_details_spot_idToparkingspots: true,
            prices: true
        }
    });

    // You should also return the total count to calculate the total pages
    const totalCount = await prisma.parkingspots.count({
        where: { status }
    });

    return { parkingSpots, totalCount, page };
}
