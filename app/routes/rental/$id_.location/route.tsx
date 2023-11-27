import { TextField } from "@mui/material";
import { Form, useLoaderData, useNavigate } from "@remix-run/react";
import Switch from "@mui/material/Switch";
import { json, LoaderFunction, type LinksFunction, type V2_MetaFunction, redirect } from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";
import rental from "~/styles/rental.css";
import { requireUserId } from "utils/auth.server";
import { getParkingSpotById } from "utils/parkingspot/getSport";
import React from "react";



export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: rental }];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Beliggenhed af udlejning" },
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

export default function RentalLocation() {
  const useLoader = useLoaderData();

  
  React.useEffect(() => {
    if (useLoader) {
      if (!useLoader.error) {
        console.log(useLoader);
        
      }
    } 
  }, [useLoader]);

  return (
    <>
      <section className="rentalLocation">
        <div className="inner">
          <h1>Hvor ligger din parkeringsplads?</h1>
          <p>Fortæl os hvor lejerne kan finde din parkeringsplads.</p>
          <Form>
            <TextField
              id="outlined-basic"
              label="Adresse"
              variant="outlined"
              className="rental-input"
            />
            <TextField
              id="outlined-basic"
              label="Husnummer"
              variant="outlined"
              className="rental-input"
            />
            <TextField
              id="outlined-basic"
              label="By"
              variant="outlined"
              className="rental-input"
            />
            <TextField
              id="outlined-basic"
              label="Postnummer"
              variant="outlined"
              className="rental-input"
            />
            <iframe
              title="SHIT"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.579493914321!2d12.536347670690457!3d55.65536410407578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525381652cfd11%3A0x6496d86f15f53006!2sEngelbert-Petersens%20Bageri!5e0!3m2!1sda!2sdk!4v1691516861738!5m2!1sda!2sdk"
              width="100%"
              height="325"
              style={{ border: 0, marginTop: "25px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Form>
          <div className="specific-location">
            <span>
              <h3>Vis din specifikke adresse</h3>
              <p>Vælg om dit husnummer skal være synligt eller ej.</p>
            </span>
            <Switch inputProps={{ "aria-label": "Switch demo" }} />
          </div>
        </div>
      </section>
      <RentalNavigation
        back={"/rental/1/type"}
        forward={"/rental/1/avaliability/type"}
        start={20}
      ></RentalNavigation>
    </>
  );
}
