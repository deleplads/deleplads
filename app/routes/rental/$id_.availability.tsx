import { Form, useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import React, { Suspense, useEffect, useState } from "react";
import type {
  LinksFunction,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";
import rental from "~/styles/rental.css";
import fetchParkingSpotData from "utils/parkingspot/fetchAndRequireAuth.server";
import { Calendar, DateObject } from "react-multi-date-picker";
import { Button, ListItem, ListItemText } from "@mui/material";
import { VariableSizeList } from "react-window";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: rental }];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Hvornår er din parkeringsplads ledig?" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async ({ request, params }) => {
  return await fetchParkingSpotData(request, params);
};

const hourList = Array.from({ length: 24 }, (_, i) => i);

const TimePickerJs = () => {
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

export default function RentalAvailability() {
  const fetcher = useFetcher();
  const useLoader = useLoaderData();
  const navigate = useNavigate();
  const [back, setBack] = useState("");

  const handleNext = () => {
    if (useLoader) {
      if (!useLoader.error) {
        navigate(`/opret-udlejning/${useLoader.id}/attributes`);
      }
    }
    // fetcher.submit({  }, { method: "post" });
  };

  React.useEffect(() => {
    if (useLoader) {
      if (!useLoader.error) {
        setBack(`/opret-udlejning/${useLoader.id}/availability/type`);
      }
    }

    if (fetcher.data?.success) {
      navigate(`/opret-udlejning/${fetcher.data.parkingspotId}/availability`);
    }
  }, [fetcher.data, navigate, useLoader]);

  const [value, setValue] = useState("");
  const [highlightedDays, setHighlitedDays] = useState([]);

  const handleChange = (selectedDates: DateObject[] | null) => {
    if (selectedDates) {
      const formattedDates = selectedDates.map((date) =>
        date.format("DD/MM/YYYY HH:mm")
      );
      setHighlitedDays(formattedDates);
    } else {
      setHighlitedDays([]);
    }
  };

  return (
    <>
      <section className="rental-avaliability">
        <div className="inner">
          <h1>Hvornår er din parkeringsplads tilgængelig?</h1>
          <p>Fortæl os hvor lejerne kan finde din parkeringsplads.</p>
          <Form>
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
                <div className="calenderPicker text-black">
                  <Calendar
                    multiple={true}
                    value={highlightedDays}
                    onChange={handleChange}
                    format="DD/MM/YYYY HH:mm"
                    plugins={[
                      <TimePicker
                        key={2}
                        hideSeconds
                        format="DD/MM/YYYY HH:mm"
                      />,
                    ]}
                    displayWeekNumbers={true}
                  />
                </div>
                <div className="desktopTimePicker">
                  <TimePickerJs />
                </div>
              </div>
            </section>
          </Form>
        </div>
      </section>
      <Suspense>
        {useLoader && !useLoader.error ? (
          <RentalNavigation
            back={back}
            start={37}
            onNext={handleNext}
          ></RentalNavigation>
        ) : (
          <div className="min-h-max"></div>
        )}
      </Suspense>
    </>
  );
}