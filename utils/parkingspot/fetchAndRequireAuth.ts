// utils/parkingspot.js (or a similar file in your utilities directory)

import { json, redirect } from "@remix-run/node";
import { requireUserId } from "utils/auth.server";
import { getParkingSpotById } from "utils/parkingspot/getSport";

async function fetchParkingSpotData(request: Request, params: any) {
  const userId = await requireUserId(request);
  const spotId = params.id;

  try {
    if (typeof spotId === "string" && spotId) {
      const parkingspots = await getParkingSpotById(spotId, userId);
      
      return json(parkingspots);
    } else {
      return redirect(`/rental`);
    }
  } catch (error) {
    return { error };
  }
}

export default fetchParkingSpotData;
