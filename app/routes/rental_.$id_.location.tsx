import { SetStateAction, useState } from "react";
import React from "react";
import { Button, TextField } from "@mui/material";
import Navbar from "~/components/Navbar";

export default function RentalLocation() {
  const [age, setAge] = useState("");

  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar></Navbar>
      <section className="rental">
        <h1>Hej med dig</h1>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <div className="rental-navigation">
          <div className="inner">
            <Button
              variant="outlined"
              style={{
                width: "fit-content",
                textTransform: "initial",
                fontWeight: "600",
              }}
            >
              Tilbage
            </Button>
            <Button
              variant="contained"
              style={{
                width: "fit-content",
                textTransform: "initial",
                fontWeight: "600",
              }}
            >
              Næste
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
