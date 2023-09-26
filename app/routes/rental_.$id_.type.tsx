import React from "react";
import { Form } from "@remix-run/react";
import Radio from "@mui/material/Radio";
import type { V2_MetaFunction } from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Type af udlejning" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function RentalType() {
  const [selectedValue, setSelectedValue] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

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
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                <p>Privat</p>
              </div>
              <div className="business-option">
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                  disabled={true}
                />
                <p>Erhverv</p>
              </div>
            </div>
          </Form>
        </div>
      </section>
      <RentalNavigation
        back={"/rental"}
        forward={"/rental/1/location"}
        end={20}
        start={10}
      ></RentalNavigation>
    </>
  );
}
