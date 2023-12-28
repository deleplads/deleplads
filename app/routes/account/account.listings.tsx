import { useLoaderData, useOutletContext } from "@remix-run/react";
import ListingsCard from "~/components/Parkingspots/ListingsCard";
import { getParkingSpotsByUserWhereStatus } from "utils/parkingspot/getAllSpots.server";
import { requireUserId } from "utils/auth.server";
import type { LoaderFunction} from "@remix-run/node";
import { json } from "@remix-run/node";
import { ParkingStatus } from "@prisma/client";
import type { ParkingSpot } from "utils/types.server";

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
        <h1>{data?.profile?.first_name}'s udlejninger</h1>
        <div className="accountListings gap-2">
        {spots.length > 0 ? (
          spots.map((spot: ParkingSpot) => (
            <ListingsCard key={spot.id} spot={spot} />
          ))
          ) : (
            <p>Du har ingen udlejninger.</p>
          )}
        </div>
      </div>
    </section>
  );
}