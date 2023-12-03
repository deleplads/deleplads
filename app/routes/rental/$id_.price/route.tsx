import { Form, useFetcher, useLoaderData, useNavigate, useNavigation } from "@remix-run/react";
import { ActionFunction, json, LoaderFunction, type V2_MetaFunction } from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";
import React, { useEffect, useState } from "react";
import { FormControl, FormControlLabel, Checkbox, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { requireUserId } from "utils/auth.server";
import fetchParkingSpotData from "utils/parkingspot/fetchAndRequireAuth";

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
  // const formData = await request.formData();
  // const selectedValue = formData.get('selectedValue');
  // let note: string | null = null;

  // // Check if selectedValue is a string and then call getCustomerType
  // if (typeof selectedValue === 'string' && selectedValue) {
  //   note = selectedValue;
  // }else {
  //   return json({error: "Du skal udfylde noten"})
  // }
  const parkingspotId = params.id;

  return json({ success: true, parkingspotId: parkingspotId });
  // const parkingspot: Partial<parkingspots> = {
  //    notes: note,
  //    id: parkingspotId
  // }

  //  const newParkingspot = await createOrUpdate(parkingspot);

  // return json({ success: true, parkingspotId: newParkingspot.id });
};

export default function RentalNotes() {
  const [isFormEnabled, setIsFormEnabled] = useState(false);

  const handleCheckboxChange = () => {
    setIsFormEnabled(!isFormEnabled);
  };

  const fetcher = useFetcher();
  const useLoader = useLoaderData();
  const navigate = useNavigate();
  const [back, setBack] = useState("");
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const handleNext = () => {
    fetcher.submit({  }, { method: "post" });
  };

  useEffect(() => {
    if (useLoader) {
      if (!useLoader.error) {
        
        setBack(`/rental/${useLoader.id}/notes`);
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
        navigate(`/rental/${fetcher.data.parkingspotId}/reciept`);
      }
    }
  }, [fetcher.data, isSubmitting, navigate]);


  return (
    <>
      <section className="rentalLocation">
        <div className="inner">
          <h1>Standard timetakst</h1>
          <p>
            Vores prisforslag er baseret på en sammenligning af din specifikke
            bilmodel med de aktuelle markedspriser og efterspørgsel.
          </p>
          <div className="recommended-price">
            <h2>DKK 24</h2>
            <p>per time</p>
          </div>
          <FormControl sx={{ width: "100% !important" }}>
            <div className="set-custom-price">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isFormEnabled}
                    onChange={handleCheckboxChange}
                  />
                }
                label
              />
              <span>
                <h4>Sæt tilpasset pris</h4>
                <p>Din bil står altid på samme sted, på en reserveret plads.</p>
              </span>
            </div>
            <div className="custom-price">
              <h3>Morgentakst</h3>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                disabled={!isFormEnabled}
              />
            </div>
            <hr />
            <div className="custom-price">
              <h3>Eftermiddagstakst</h3>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                disabled={!isFormEnabled}
              />
            </div>
            <hr />
            <div className="custom-price">
              <h3>Aftentakst</h3>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                disabled={!isFormEnabled}
              />
            </div>
            {/* Add more input fields as needed */}
          </FormControl>
        </div>
      </section>
      <RentalNavigation
        back="/rental/1/notes"
        forward="/rental/1/receipt"
        start={87}
      ></RentalNavigation>
    </>
  );
}
