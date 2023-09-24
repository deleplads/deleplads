"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import "dayjs/locale/en-gb";

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
      />

      <span>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Fra hvornår?"
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
          />
          <DateTimePicker
            label="Til hvornår?"
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
          />
        </LocalizationProvider>
      </span>
    </div>
  );
}

export default SearchBar;
