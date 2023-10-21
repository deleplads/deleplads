import { TextField } from "@mui/material";
import { Form } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";
import React, { useState } from "react";
import { FormControl, FormControlLabel, Checkbox } from "@mui/material";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Note til udlejning" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function RentalNotes() {
  const [isFormEnabled, setIsFormEnabled] = useState(false);

  const handleCheckboxChange = () => {
    setIsFormEnabled(!isFormEnabled);
  };

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
        start={80}
      ></RentalNavigation>
    </>
  );
}
