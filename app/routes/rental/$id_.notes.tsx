import { TextField } from "@mui/material";
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
  type LoaderFunction,
  type V2_MetaFunction,
  LinksFunction,
} from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreation/RentalNavigation";
import fetchParkingSpotData from "utils/parkingspot/fetchAndRequireAuth.server";
import React, { Suspense, useEffect, useState } from "react";
import { requireUserId } from "utils/auth.server";
import { parkingspots } from "@prisma/client";
import { createOrUpdate } from "utils/parkingspot/createOrUpdate.server";
import toast, { Toaster } from "react-hot-toast";
import rental from "~/styles/rental.css";
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

export default function RentalNotes() {
  const [selectedValue, setSelectedValue] = useState("");
  const fetcher = useFetcher();
  const useLoader = useLoaderData();
  const navigate = useNavigate();
  const params = useParams();
  const [back, setBack] = useState(`/opret-udlejning/${params.id}/billeder`);
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
        setBack(`/opret-udlejning/${useLoader.id}/billeder`);
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
        navigate(`/opret-udlejning/${fetcher.data.parkingspotId}/pris`);
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
            onNext={handleNext}
            start={75}
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
          <h1>Hvad skal folk være opmærksomme på?</h1>
          <p>
            Er din parkeringsplads svær at finde? Skriv en note til lejerne.
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
            onNext={handleNext}
            start={75}
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
  let note: string | null = null;

  // Check if selectedValue is a string and then call getCustomerType
  if (typeof selectedValue === "string" && selectedValue) {
    note = selectedValue;
  } 
  const parkingspotId = params.id;

  const parkingspot: Partial<parkingspots> = {
    notes: note,
    id: parkingspotId,
  };

  const newParkingspot = await createOrUpdate(parkingspot);

  return json({ success: true, parkingspotId: newParkingspot.id });
};