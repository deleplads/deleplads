import React from "react";
import { Form, useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import Radio from "@mui/material/Radio";
import { type V2_MetaFunction , json, ActionFunction, LinksFunction, LoaderFunction, redirect } from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";
import { CustomerType, parkingspots } from "@prisma/client";
import { createOrUpdate } from "utils/parkingspot/createOrUpdate.server";
import { getCustomerType } from "utils/helpers/getTypes";
import rental from "~/styles/rental.css";
import { requireUserId } from "utils/auth.server";
import { getParkingSpotById } from "utils/parkingspot/getSport";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: rental }];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Type af udlejning" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const spotId = params.id;

  try {
    if (typeof spotId === "string" && spotId) {
      const parkingspots = await getParkingSpotById(spotId, userId);
  
      return json(parkingspots);
    }else {
      return redirect(`/rental`);
    }
  } catch (error) {
    return { error };
  }
};


export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const selectedValue = formData.get('selectedValue');
  let customerType: CustomerType | null = null;

  // Check if selectedValue is a string and then call getCustomerType
  if (typeof selectedValue === 'string') {
    customerType = getCustomerType(selectedValue);
  }
  const parkingspotId = params.id;

  const parkingspot: Partial<parkingspots> = {
     customer_type: customerType,
     id: parkingspotId
  }

   const newParkingspot = await createOrUpdate(parkingspot);
 
  return json({ success: true, parkingspotId: newParkingspot.id }); 
};

export default function RentalType() {
  const [selectedValue, setSelectedValue] = React.useState("");
  const fetcher = useFetcher();
  const useLoader = useLoaderData();
  const navigate = useNavigate();

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleNext = () => {
    fetcher.submit(
      { selectedValue }, 
      { method: "post" }
    );
  };

  React.useEffect(() => {
    if (useLoader) {
      if (!useLoader.error) {
        setSelectedValue(useLoader.customer_type);
      }
    } 

    if (fetcher.data?.success) {
      navigate(`/rental/${fetcher.data.parkingspotId}/location`);
    }
  }, [fetcher.data, navigate, useLoader]);

  return (
    <>
      <section className="rentalLocation">
        <div className="inner">
          <h1>Hvilken type parkering vil du oprette?</h1>
          <p>Fortæl os hvor lejerne kan finde din parkeringsplads.</p>
          <Form>
            <div className="rental-type-options">
              <div className="private-option">
                <Radio
                  checked={selectedValue === "Private"}
                  onClick={() => handleChange("Private")}
                  value="Private"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "Private" }}
                />
                <p>Privat</p>
              </div>
              <div className="business-option">
                <Radio
                  checked={selectedValue === "Business"}
                  onClick={() => handleChange("Business")}
                  value="Business"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "Business" }}
                  disabled={true}
                />
                <p>Erhverv</p>
                <div className="coming-soon">
                  <p>Kommer snart</p>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </section>
      <RentalNavigation
        back={"/rental"}
        start={10}
        onNext={handleNext}
      ></RentalNavigation>
    </>
  );
}
