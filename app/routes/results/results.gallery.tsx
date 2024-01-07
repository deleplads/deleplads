import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { getParkingSpotsWhereStatus } from "utils/parkingspot/getAllSpots.server";
import { useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import type { ParkingSpot } from "utils/types.server";
import BasicCard from "~/components/Parkingspots/Cards";
import CallToAction from "~/components/Parkingspots/CallToAction";
import { Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Locate" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = parseInt(url.searchParams.get("limit") || "10", 9);

  return getParkingSpotsWhereStatus("Completed", page, limit);
};

export default function LocateGallery() {
  const navigate = useNavigate();
  const initialData = useLoaderData();
  const fetcher = useFetcher();
  const data = fetcher.data || initialData;
  const { parkingSpots } = data;

  return (
    <>
      <div className="mapGallery">
        <div className="inner">
          <div className="gallery">
            {parkingSpots.length > 0 ? (
              parkingSpots.map((spot: ParkingSpot) => (
                <BasicCard key={spot.id} spot={spot} />
              ))
            ) : (
              <p>
                Din søgning matcher ikke nogle parkeringspladser. Prøv igen.
              </p>
            )}
          </div>
        </div>
        <Button
          variant="outlined"
          className="showOnMap"
          startIcon={<LocationOnOutlinedIcon />}
          onClick={() => {
            navigate("/find-parkering/kort");
          }}
        >
          Vis på kort
        </Button>
      </div>
      <CallToAction></CallToAction>
    </>
  );
}
