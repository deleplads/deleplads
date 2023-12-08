import type {
  V2_MetaFunction,
  ActionFunction,
  LoaderFunction,
  LinksFunction,
} from "@remix-run/node";
import React, { useState } from "react";

import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";
import { json } from "@remix-run/node";
import { useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import { createOrUpdate } from "utils/Parkingspot/createOrUpdate.server";
import { ParkingStatus, type parkingspots } from "@prisma/client";
import { getUser, requireUserId } from "utils/auth.server";
import { getParkingSpotsByUserWhereStatus } from "utils/parkingspot/getAllSpots";
import NativeSelect from "@mui/material/NativeSelect";
import { Button, InputLabel } from "@mui/material";
import { getNextStepForParkingSpotById } from "utils/parkingspot/nextStep";
import rental from "~/styles/rental.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: rental }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  try {
    const parkingspots = await getParkingSpotsByUserWhereStatus(userId, ParkingStatus.InProgress);

    return json(parkingspots);
  } catch (error) {
    return { error };
  }
};

export const action: ActionFunction = async ({ request }) => {
  await requireUserId(request);
  const formData = await request.formData();
  const action = formData.get("action");

  if (action === "next") {
    const userArray = await getUser(request);
    let ownerId: string | undefined;

    if (userArray && userArray.length > 0) {
      const user = userArray[0]; // Assuming 'user' is always the first element

      if (user && "id" in user) {
        ownerId = user.id;
      }
    }

    const parkingspot: Partial<parkingspots> = {
      owner_id: ownerId,
    };

    const newParkingspot = await createOrUpdate(parkingspot);

    return json({ success: true, type: "next" ,parkingspotId: newParkingspot.id });
  } else if (action === "selected") {
    const selectedSpotId = formData.get("selected");
    if (typeof selectedSpotId === "string" && selectedSpotId) {
      const { nextStep } = await getNextStepForParkingSpotById(
        selectedSpotId
      );

      return json({ success: true, type: "selected", nextStep: nextStep });
    }
  }
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Opret udlejning" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Rental() {
  const [selected, setSelected] = useState("");
  const fetcher = useFetcher(); // useFetcher hook from Remix
  const navigate = useNavigate();
  const useLoader = useLoaderData();

  const handleNext = () => {
    fetcher.submit({ action: "next" }, { method: "post" });
  };

  React.useEffect(() => {
    if (fetcher.data?.type == "next") {
      navigate(`/opret-udlejning/${fetcher.data.parkingspotId}/type`);
    } else if(fetcher.data?.type == "selected") {
      navigate(`/opret-udlejning/${fetcher.data.nextStep}`)
    }
  }, [fetcher.data, navigate]);

  function handleSelected() {
    fetcher.submit(
      { action: "selected", selected: selected },
      { method: "post" }
    );
  }

  const handleChange = (event: { target: { value: string } }) => {
    setSelected(event.target.value);
  };
  return (
    <>
      <section>
        <div className="text-black mt-32 mx-auto flex items-center flex-col">
          {useLoader.length > 0 ? (
            <>
              <div className="pb-5 font-semibold">
                Du har allerede nogle parkerings oprettelser igang, vil du
                forsætte med en af dem?
              </div>
              <div className="pb-5">
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Oprettelses dato
                </InputLabel>
                <NativeSelect
                  onChange={handleChange}
                  defaultValue={selected}
                  inputProps={{
                    name: "createdAt",
                    id: "uncontrolled-native",
                  }}
                >
                  <option aria-label="None" value="" />
                  {useLoader.map((element: parkingspots, index: number) => (
                    <option key={index} value={element.id}>
                      {new Date(element.created_at).toLocaleString()}
                    </option>
                  ))}
                </NativeSelect>
              </div>
              <Button
                onClick={() => handleSelected()}
                variant="outlined"
                style={{
                  width: "fit-content",
                  textTransform: "initial",
                  fontWeight: "600",
                  padding: "8px 20px",
                  border: "1px solid var(--BrandTertiary)",
                  borderRadius: "52px",
                }}
              >
                Forsæt fra valgte
              </Button>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="rentalIntroduction">
          <div className="inner">
            <div className="introductionText">
              <h1>Lad din parkeringsplads arbejde for dig</h1>
            </div>
            <div className="introductionSteps">
              <div className="step">
                <h3>1. Fortæl os om din parkeringsplads</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae soluta eius nostrum doloremque saepe nisi.
                </p>
              </div>
              <div className="step">
                <h3>2. Få den til at skille sig ud</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae soluta eius nostrum doloremque saepe nisi.
                </p>
              </div>
              <div className="step">
                <h3>3. Færdiggør opslaget og offentliggør det</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae soluta eius nostrum doloremque saepe nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RentalNavigation
        back={"/"}
        start={0}
        onNext={handleNext}
        nextText="Begynd oprettelse"
      ></RentalNavigation>
    </>
  );
}
