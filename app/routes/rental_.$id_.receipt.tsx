import { TextField } from "@mui/material";
import { Form } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Note til udlejning" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function RentalNotes() {
  return (
    <>
      <section className="rentalLocation">
        <div className="inner">
          <h1>Kvittering</h1>
          <p>
            Er din parkeringsplads svær at finde? Skriv en note til lejerne.
          </p>
          <Form>
            <TextField
              placeholder="Skriv din besked her"
              multiline
              rows={10}
              sx={{ width: "100%" }}
            />
          </Form>
        </div>
      </section>
      <RentalNavigation
        back={"/rental/1/price"}
        forward={"/"}
        start={90}
      ></RentalNavigation>
    </>
  );
}
