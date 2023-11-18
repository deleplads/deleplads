"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import "dayjs/locale/en-gb";
import dayjs from "dayjs";
import { Button, Input } from "@mui/material";

function SearchBar() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <div className="SearchBar">
      <TextField
        id="outlined-basic"
        className="AreaSelector"
        label="Hvor vil du gerne parkere?"
        sx={{
          height: "50px !important",
        }}
      />

      <span>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            format="DD/MM hh:ss"
            ampm={false}
            label="Starttidspunkt"
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
          />
          <DateTimePicker
            format="DD/MM hh:ss"
            ampm={false}
            label="Sluttidspunkt"
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
          />
        </LocalizationProvider>
      </span>

      <Button
        className="SearchButton"
        variant="contained"
        href="#"
        sx={{
          textTransform: "initial",
          fontSize: "15px",
          padding: "12px 20px !important",
          background: "#FF4F00",
          height: "fit-content",
          fontWeight: 700,
        }}
      >
        Find parkeringsplads
      </Button>
    </div>
  );
}

export default SearchBar;
