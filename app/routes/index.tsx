import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import CallToAction from "~/components/Parkingspots/CallToAction";
import Hero from "~/components/Common/Hero";
import { getParkingSpotsWhereStatus } from "utils/parkingspot/getAllSpots.server";
import { useFetcher, useLoaderData } from "@remix-run/react";
import type {
  ParkingSpot,
} from "utils/types.server";
import { Button, Pagination, Stack } from "@mui/material";
import BasicCard from "~/components/Parkingspots/Cards";
import { useRef, useState } from "react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = parseInt(url.searchParams.get("limit") || "10", 9);

  return getParkingSpotsWhereStatus("Completed", page, limit);
};

export default function Index() {
  const initialData = useLoaderData();
  const limit = 9; // Or whatever your default limit is
  const fetcher = useFetcher();
  const data = fetcher.data || initialData;
  const { parkingSpots, totalCount, page } = data;
  const totalPages = Math.ceil(totalCount / limit);
  const regionGroupRef = useRef(null);
  const [initPage, setPage] = useState(page ? page : 1);

  const handlePageChange = (event, value) => {
    setPage(value);
    fetcher.load(`/?page=${value}`);
    if (regionGroupRef.current) {
      regionGroupRef.current.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        window.scrollBy(0, -400); // Adjust -100 to the desired offset
      }, 150); // Adjust timing if necessary
    }
  };

  return (
    <>
      <Hero></Hero>
      <section ref={regionGroupRef} className="popular">
        <div className="popularInner">
          <div className="region-group">
            <Stack spacing={2} direction="row">
              <Button variant="outlined">Alle regioner</Button>
              <Button variant="outlined">Region Hovedestaden</Button>
              <Button variant="outlined">Region Sjælland</Button>
              <Button variant="outlined">Region Nordjylland</Button>
              <Button variant="outlined">Region Midtjylland</Button>
              <Button variant="outlined">Region Syddanmark</Button>
              <Button variant="outlined">Filtre</Button>
            </Stack>
          </div>
          <div className="grid-cols-3 grid gap-10">
            {parkingSpots.length > 0 ? (
              parkingSpots.map((spot: ParkingSpot) => (
                <BasicCard key={spot.id} spot={spot} />
              ))
            ) : (
              <p>Du har ingen udlejninger.</p>
            )}
          </div>
          <div className="pagination">
            <Stack spacing={2}>
              <Pagination
                count={totalPages}
                page={initPage}
                onChange={handlePageChange}
                size="large"
                color="primary"
              />
            </Stack>
          </div>
        </div>
      </section>
      <CallToAction></CallToAction>
    </>
  );
}
