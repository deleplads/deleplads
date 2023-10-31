import React from "react";
import { Form } from "@remix-run/react";
import Radio from "@mui/material/Radio";
import type { V2_MetaFunction } from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Type af udlejning" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function RentalAvailabilityType() {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <section className="rentalLocation">
        <div className="inner">
          <h1>Hvilken udlejningsform vil du oprette?</h1>
          <p>Fortæl os hvor lejerne kan finde din parkeringsplads.</p>
          <Form>
            <div className="rental-type-options">
              <div className="private-option">
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                <p>Engangsparkering</p>
              </div>
              <div className="business-option">
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
                <p>Gentagende parkering</p>
              </div>
            </div>
          </Form>
        </div>
      </section>
      <RentalNavigation
        back={"/rental/1/location"}
        forward={"/rental/1/avaliability"}
        start={30}
      ></RentalNavigation>
    </>
  );
}
