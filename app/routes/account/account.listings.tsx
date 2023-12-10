import { Suspense } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import ListingsCard from "~/components/ListingsCard";
import { getParkingSpotsByUserWhereStatus } from "utils/parkingspot/getAllSpots.server";
import { requireUserId } from "utils/auth.server";
import { LoaderFunction, json } from "@remix-run/node";
import { ParkingStatus } from "@prisma/client";
import { ParkingSpot } from "utils/types.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  try {
    const parkingspots = await getParkingSpotsByUserWhereStatus(userId, ParkingStatus.Completed);

    return json(parkingspots);
  } catch (error) {
    return { error };
  }
};


export default function Listings() {
  // Assuming useLoaderData returns an array of spots
  const spots = useLoaderData();
  const data = useOutletContext();

  // Render each ListingsCard with the corresponding spot data
  return (
    <section className="account listings">
      <div className="inner">
        <h1>{data?.profile?.first_name}'s Listings</h1>
        <div className="accountListings">
          {spots.map((spot: ParkingSpot) => (
            <ListingsCard key={spot.id} spot={spot} />
          ))}
        </div>
      </div>
    </section>
  );
}