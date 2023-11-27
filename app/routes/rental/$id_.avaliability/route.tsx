import { Form } from "@remix-run/react";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";
import Switch from "@mui/material/Switch";
import rental from "~/styles/rental.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: rental }];
};

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

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleChange = () => {
    setIsOpen(!isOpen);
  };

  const labelText = isOpen ? "Åben" : "Lukket";

  return (
    <>
      <section className="rental-avaliability">
        <div className="inner">
          <h1>Hvornår er din parkeringsplads tilgængelig?</h1>
          <p>Fortæl os hvor lejerne kan finde din parkeringsplads.</p>
          <Form className="options-form">
            <div className="avaliability-option">
              <div className="availability-day">
                <p>Mandag</p>
                <Switch {...label} defaultChecked />
              </div>

              <div className="avaliability-time">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="09:00" />
                </LocalizationProvider>
                <p>til</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="17:00" />
                </LocalizationProvider>
              </div>
            </div>
            <div className="avaliability-option">
              <div className="availability-day">
                <p>Tirsdag</p>
                <Switch {...label} defaultChecked />
              </div>

              <div className="avaliability-time">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="09:00" />
                </LocalizationProvider>
                <p>til</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="17:00" />
                </LocalizationProvider>
              </div>
            </div>
            <div className="avaliability-option">
              <div className="availability-day">
                <p>Onsdag</p>
                <Switch {...label} defaultChecked />
              </div>

              <div className="avaliability-time">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="09:00" />
                </LocalizationProvider>
                <p>til</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="17:00" />
                </LocalizationProvider>
              </div>
            </div>
            <div className="avaliability-option">
              <div className="availability-day">
                <p>Torsdag</p>
                <Switch {...label} defaultChecked />
              </div>

              <div className="avaliability-time">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="09:00" />
                </LocalizationProvider>
                <p>til</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="17:00" />
                </LocalizationProvider>
              </div>
            </div>
            <div className="avaliability-option">
              <div className="availability-day">
                <p>Fredag</p>
                <Switch {...label} defaultChecked />
              </div>

              <div className="avaliability-time">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="09:00" />
                </LocalizationProvider>
                <p>til</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="17:00" />
                </LocalizationProvider>
              </div>
            </div>
            <div className="avaliability-option">
              <div className="availability-day">
                <p>Lørdag</p>
                <Switch {...label} defaultChecked />
              </div>

              <div className="avaliability-time">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="09:00" />
                </LocalizationProvider>
                <p>til</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="17:00" />
                </LocalizationProvider>
              </div>
            </div>
            <div className="avaliability-option">
              <div className="availability-day">
                <p>Søndag</p>
                <Switch {...label} defaultChecked />
              </div>

              <div className="avaliability-time">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="09:00" />
                </LocalizationProvider>
                <p>til</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker label="17:00" />
                </LocalizationProvider>
              </div>
            </div>
          </Form>
        </div>
      </section>
      <RentalNavigation
        back={"/rental/1/avaliability/type"}
        forward={"/rental/1/attributes"}
        start={40}
      ></RentalNavigation>
    </>
  );
}
