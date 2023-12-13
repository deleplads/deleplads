import {
  Form,
  useFetcher,
  useLoaderData,
  useNavigate,
  useNavigation,
  useParams,
} from "@remix-run/react";
import {
  json,
  type ActionFunction,
  type LinksFunction,
  type LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";
import rental from "~/styles/rental.css";
import fetchParkingSpotData from "utils/parkingspot/fetchAndRequireAuth.server";
import { Suspense, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { requireUserId } from "utils/auth.server";
import { parkingspots } from "@prisma/client";
import createOrUpdate from "utils/parkingspot/createOrUpdate.server";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: rental }];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Note til udlejning" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const loader: LoaderFunction = async ({ request, params }) => {
  return await fetchParkingSpotData(request, params);
};

export const action: ActionFunction = async ({ request, params }) => {
  await requireUserId(request);
  
  const parkingspotId = params.id;

  const parkingspot: Partial<parkingspots> = {
    status: "Completed",
    id: parkingspotId,
  };

  const newParkingspot = await createOrUpdate(parkingspot);

  return json({ success: true, parkingspotId: newParkingspot.id });
};

export default function RentalReceipt() {
  const useLoader = useLoaderData();
  const navigate = useNavigate();
  const params = useParams();
  const [back, setBack] = useState(`/opret-udlejning/${params.id}/price`);
  const fetcher = useFetcher();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (useLoader) {
      if (!useLoader.error) {
        setBack(`/opret-udlejning/${useLoader.id}/price`);
      }
    } else if (useLoader?.error) {
      toast.error(useLoader.error);
    }
  }, [useLoader]);

  useEffect(() => {
    if (fetcher.data) {
      if (!isSubmitting && fetcher.data.error) {
        toast.error(fetcher.data.error);
      } else if (!isSubmitting && fetcher.data.success) {
        navigate(`/`);
      }
    }
  }, [fetcher.data, isSubmitting, navigate]);

  const handleNext = () => {
    fetcher.submit({}, { method: "post" });
  };

  return (
    <>
      <Toaster position="top-right" />
      <section className="rentalLocation">
        <div className="inner">
          <h1>Kvittering</h1>
          <p>
            Er din parkeringsplads svær at finde? Skriv en note til lejerne.
          </p>
          <Form>
            <div className="text-black w-full min-h-screen flex justify-center p-10">
              <Suspense fallback={<div>Indlæser...</div>}>
                {useLoader && !useLoader.error ? (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      Parkeringsplads Kvittering
                    </h2>
                    <div className="bg-white shadow rounded-lg p-6 max-w-2xl w-full">
                      <div className="flex justify-evenly">
                        <div className="border-t border-gray-200 py-4">
                        <h3 className="text-lg font-semibold">Detaljer</h3>
                        <p>Gade: {useLoader.street}</p>
                        <p>Husnummer: {useLoader.street_nr}</p>
                        <p>By: {useLoader.city}</p>
                        <p>Postnummer: {useLoader.postal_code}</p>
                        <p>Kundetype: {useLoader.customer_type}</p>
                        <p>Noter: {useLoader.notes}</p>
                        <p>
                          Vis husnummer:{" "}
                          {useLoader.show_street_nr ? "Ja" : "Nej"}
                        </p>
                        </div>
                        <div className="border-t border-gray-200 py-4">
                          <h3 className="text-lg font-semibold">Faciliteter</h3>
                          <p>
                            El-opladning:{" "}
                            {useLoader.parkingspot_details?.electric
                              ? "Ja"
                              : "Nej"}
                          </p>
                          <p>
                            Handicapadgang:{" "}
                            {useLoader.parkingspot_details?.handicap
                              ? "Ja"
                              : "Nej"}
                          </p>
                          <p>
                            Belysning:{" "}
                            {useLoader.parkingspot_details?.light
                              ? "Ja"
                              : "Nej"}
                          </p>
                          <p>
                            Natvagter:{" "}
                            {useLoader.parkingspot_details?.night_guards
                              ? "Ja"
                              : "Nej"}
                          </p>
                          <p>
                            Offentlig transport:{" "}
                            {useLoader.parkingspot_details?.public_transport
                              ? "Ja"
                              : "Nej"}
                          </p>
                          <p>
                            Gadetilgængelig:{" "}
                            {useLoader.parkingspot_details?.street_access
                              ? "Ja"
                              : "Nej"}
                          </p>
                          <p>
                            Overvågning:{" "}
                            {useLoader.parkingspot_details?.surveillance
                              ? "Ja"
                              : "Nej"}
                          </p>
                          <p>
                            Overdækning:{" "}
                            {useLoader.parkingspot_details?.cover
                              ? "Ja"
                              : "Nej"}
                          </p>
                          <p>
                            Ingen adgangskode:{" "}
                            {useLoader.parkingspot_details?.code ? "Nej" : "Ja"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-16">
                      <h3 className="text-lg font-semibold">Prisdetaljer</h3>
                        <div className="mt-2">
                          <p>Morgenpris: {useLoader.prices.morning_price}</p>
                          <p>Aftenpris: {useLoader.prices.evening_price}</p>
                          <p>Weekendpris: {useLoader.prices.weekend_price}</p>
                          <p>Anbefalet pris: {useLoader.prices.recommended_price}</p>
                        </div>
                    </div>
                  </div>
                ) : (
                  <div className="min-h-max">
                    Fejl eller ingen tilgængelige data
                  </div>
                )}
              </Suspense>
            </div>
          </Form>
        </div>
      </section>
      <Suspense>
        {useLoader != null && !useLoader.error ? (
          <RentalNavigation
            back={back}
            onNext={handleNext}
            start={100}
            nextText={"Afslut"}
          ></RentalNavigation>
        ) : (
          <div className="min-h-max"></div>
        )}
      </Suspense>
    </>
  );
}
