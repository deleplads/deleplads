import { TextField } from "@mui/material";
import { Form } from "@remix-run/react";
import Switch from "@mui/material/Switch";
import type { V2_MetaFunction } from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Beliggenhed af udlejning" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function RentalLocation() {
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
          </Form>
          <div className="specific-location">
            <span>
              <h2>Vis din specifikke adresse</h2>
              <p>Vælg om dit husnummer skal være synligt eller ej.</p>
            </span>
            <Switch inputProps={{ "aria-label": "Switch demo" }} />
          </div>
        </div>
      </section>
      <RentalNavigation
        back={"/rental/1/type"}
        forward={"/rental/1/avaliability"}
        percentage={42.48}
      ></RentalNavigation>
    </>
  );
}
