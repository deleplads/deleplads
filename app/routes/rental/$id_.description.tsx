import {
  Form,
  useFetcher,
  useLoaderData,
  useNavigate,
  useNavigation,
  useParams,
} from "@remix-run/react";
import React, { Suspense, useEffect, useState } from "react";
import {
  json,
  type ActionFunction,
  type LinksFunction,
  type LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreation/RentalNavigation";
import rental from "~/styles/rental.css";
import fetchParkingSpotData from "utils/parkingspot/fetchAndRequireAuth.server";
import {  TextField } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { requireUserId } from "utils/auth.server";
import type { parkingspots } from "@prisma/client";
import { createOrUpdate } from "utils/parkingspot/createOrUpdate.server";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: rental }];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Hvornår er din parkeringsplads ledig?" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async ({ request, params }) => {
  return await fetchParkingSpotData(request, params);
};


export default function RentalDescription() {
  const [selectedValue, setSelectedValue] = useState("");
  const fetcher = useFetcher();
  const useLoader = useLoaderData();
  const navigate = useNavigate();
  const params = useParams();
  const [back, setBack] = useState(`/opret-udlejning/${params.id}/lokation`);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleNext = () => {
    fetcher.submit({ selectedValue }, { method: "post" });
  };

  useEffect(() => {
    if (useLoader) {
      if (!useLoader.error) {
        setSelectedValue(useLoader.notes || "");
        setBack(`/opret-udlejning/${useLoader.id}/lokation`);
      } else {
        toast.error(useLoader.error);
      }
    }
  }, [navigate, useLoader]);

  useEffect(() => {
    if (fetcher.data) {
      if (!isSubmitting && fetcher.data.error) {
        toast.error(fetcher.data.error);
      } else if (!isSubmitting && fetcher.data.success) {
        navigate(`/opret-udlejning/${fetcher.data.parkingspotId}/tilfoejelser`);
      }
    }
  }, [fetcher.data, isSubmitting, navigate]);


  return navigation.state === "loading" ? (
    <>
      <div className="top-[30vh] relative flex justify-center">
        <span className="loader"> </span>
      </div>
      <Suspense>
        {useLoader && !useLoader.error ? (
          <RentalNavigation
            back={back}
            start={30}
            onNext={handleNext}
          ></RentalNavigation>
        ) : (
          <div className="min-h-max"></div>
        )}
      </Suspense>
    </>
  ) : (
    <>
        <Toaster position="top-right"></Toaster>
      <section className="rentalLocation">
        <div className="inner">
          <h1>Beskrivelse af parkeringspladsen</h1>
          <p>
            Er din parkeringsplads med opbvarmning? Skriv en beskrivelse til lejerne.
          </p>
          <Form>
            <TextField
              placeholder="Skriv din besked her"
              value={selectedValue}
              onChange={handleChange}
              multiline
              rows={10}
              sx={{ width: "100%" }}
            />
          </Form>
        </div>
      </section>
      <Suspense>
        {useLoader && !useLoader.error ? (
          <RentalNavigation
            back={back}
            start={30}
            onNext={handleNext}
          ></RentalNavigation>
        ) : (
          <div className="min-h-max"></div>
        )}
      </Suspense>
    </>
  );
}

export const action: ActionFunction = async ({ request, params }) => {
  await requireUserId(request);
  const formData = await request.formData();
  const selectedValue = formData.get("selectedValue");
  let description_public: string | null = null;

  // Check if selectedValue is a string and then call getCustomerType
  if (typeof selectedValue === "string" && selectedValue) {
    description_public = selectedValue;
  } 
  const parkingspotId = params.id;

  const parkingspot: Partial<parkingspots> = {
    description_public: description_public,
    id: parkingspotId,
  };

  const newParkingspot = await createOrUpdate(parkingspot);

  return json({ success: true, parkingspotId: newParkingspot.id });
};