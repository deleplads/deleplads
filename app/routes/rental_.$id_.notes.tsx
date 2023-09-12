import { SetStateAction, useState } from "react";
import React from "react";
import Navbar from "~/components/Navbar";
import { Button, TextField } from "@mui/material";
import { Form, Link } from "@remix-run/react";
import Switch from "@mui/material/Switch";

export default function RentalNotes() {
  const [age, setAge] = useState("");

  const [value, setValue] = React.useState(0);

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <>
      <section className="rentalLocation">
        <div className="inner">
          <h1>Hihi</h1>
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
            <Switch {...label} />
          </div>
        </div>
      </section>
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
            <Link to={"/rental"}>Tilbage</Link>
          </Button>
          <Button
            variant="contained"
            style={{
              width: "fit-content",
              textTransform: "initial",
              fontWeight: "600",
            }}
          >
            <Link to={"/rental/1/avaliability"}>Næste</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
