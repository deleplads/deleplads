import React, { useState } from "react";
import { Button } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ListItem, ListItemText } from "@mui/material";
import { VariableSizeList } from "react-window";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import "dayjs/locale/en-gb";

const hourList = Array.from({ length: 24 }, (_, i) => i);

const TimePicker = () => {
  const [selectedHour, setSelectedHour] = useState(0);

  const handleHourClick = (hour: number) => {
    setSelectedHour(hour);
  };

  const rowRenderer = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const hour = hourList[index];
    const formattedHour = hour < 10 ? `0${hour}` : hour; // Add leading zero if hour is single-digit
    return (
      <ListItem
        button
        key={hour}
        style={style}
        selected={hour === selectedHour}
        onClick={() => handleHourClick(hour)}
      >
        <ListItemText primary={`${formattedHour}:00`} />
      </ListItem>
    );
  };

  const listHeight = 300; // Set your desired height
  const rowHeight = 48; // Set your desired row height

  return (
    <div>
      <div style={{ height: listHeight, width: "200px" }}>
        <VariableSizeList
          itemData={hourList}
          height={listHeight}
          width="100%"
          itemSize={() => rowHeight}
          itemCount={hourList.length}
        >
          {rowRenderer}
        </VariableSizeList>
      </div>
    </div>
  );
};

function Booking() {
  return (
    <>
      <section className="booking">
        <h2>Tilgængelighed</h2>
        <div className="controls">
          <Button
            variant="outlined"
            size="large"
            href="#"
            sx={{ textTransform: "initial", height: "fit-content" }}
          >
            Start: 16 sep, 08:00
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="#"
            sx={{ textTransform: "initial", height: "fit-content" }}
          >
            Slut: 16 sep, 09:00
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="#"
            sx={{ textTransform: "initial", height: "fit-content" }}
          >
            Flere dage
          </Button>
          <Button
            disabled
            variant="outlined"
            size="large"
            href="#"
            sx={{ textTransform: "initial", height: "fit-content" }}
          >
            Samme tidspunkt
          </Button>
          <Button
            disabled
            variant="outlined"
            size="large"
            href="#"
            sx={{ textTransform: "initial", height: "fit-content" }}
          >
            Ryd dag
          </Button>
        </div>
        <div className="bookingContents">
          <div className="calenderPicker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar defaultValue={dayjs("2022-04-17")} />
            </LocalizationProvider>
          </div>
          <div className="desktopTimePicker">
            <TimePicker />
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              className="MobileTimePicker"
              format="DD/MM hh:ss"
              ampm={false}
              label="Starttidspunkt"
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
              }}
            />
          </LocalizationProvider>
        </div>
      </section>
    </>
  );
}

export default Booking;
