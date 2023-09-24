import { Radio } from "@mui/material";
import { Form } from "@remix-run/react";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import type { V2_MetaFunction } from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Hvornår er din parkeringsplads ledig?" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function RentalAvaliability() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <section className="rental-avaliability">
        <div className="inner">
          <h1>Hvornår er din parkeringsplads tilgængelig?</h1>
          <p>Fortæl os hvor lejerne kan finde din parkeringsplads.</p>
          <Form></Form>
          <div className="avaliability-option">
            <div className="avaliability-day">
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
              <p>Mandag</p>
            </div>
            <div className="avaliability-time">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker label="Basic time picker" />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker label="Basic time picker" />
              </LocalizationProvider>
            </div>
          </div>
          <div className="avaliability-option">
            <div className="avaliability-day">
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
              <p>Tirsdag</p>
            </div>
            <div className="avaliability-time">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker label="Basic time picker" />
              </LocalizationProvider>
            </div>
          </div>
          <div className="avaliability-option">
            <div className="avaliability-day">
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
              <p>Onsdag</p>
            </div>
            <div className="avaliability-time">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker label="Basic time picker" />
              </LocalizationProvider>
            </div>
          </div>
          <div className="avaliability-option">
            <div className="avaliability-day">
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
              <p>Torsdag</p>
            </div>
            <div className="avaliability-time">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker label="Basic time picker" />
              </LocalizationProvider>
            </div>
          </div>
          <div className="avaliability-option">
            <div className="avaliability-day">
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
              <p>Fredag</p>
            </div>
            <div className="avaliability-time">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker label="Basic time picker" />
              </LocalizationProvider>
            </div>
          </div>
          <div className="avaliability-option">
            <div className="avaliability-day">
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
              <p>Lørdag</p>
            </div>
            <div className="avaliability-time">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker label="Basic time picker" />
              </LocalizationProvider>
            </div>
          </div>
          <div className="avaliability-option">
            <div className="avaliability-day">
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
              <p>Søndag</p>
            </div>
            <div className="avaliability-time">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker label="Basic time picker" />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </section>
      <RentalNavigation
        back={"/rental/1/location"}
        forward={"/rental/1/attributes"}
        percentage={57.12}
      ></RentalNavigation>
    </>
  );
}
