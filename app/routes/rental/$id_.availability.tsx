import { useFetcher, useLoaderData, useNavigate, useParams } from "@remix-run/react";
import React, { Suspense, useRef, useState } from "react";
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
import {
  ArrowDropDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@mui/x-date-pickers";

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
  const params = useParams();
  const [back, setBack] = useState(`/opret-udlejning/${params.id}/attributes`);
  const [date, setDate] = useState(new DateObject());
  const [currentSelectedDate, setCurrentSelectedDate] = useState(null);
  const calendarRef = useRef();

  const update = (key, value) => {
    let date = calendarRef.current.date;

    calendarRef.current.set(key, date[key] + value);

    setDate(new DateObject(date));
  };

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
        setBack(`/opret-udlejning/${useLoader.id}/location`);
      }
    }

    if (fetcher.data?.success) {
      console.log("test");
    }
  }, [fetcher.data, navigate, useLoader]);

  const [highlightedDays, setHighlitedDays] = useState([]);

  const handleChange = (selectedDates: DateObject[] | null) => {
    if (selectedDates) {
      const newDates = selectedDates.map(date => date.format("DD/MM/YYYY HH:mm"));

      setHighlitedDays((prevDates) => {
        // Filter out any dates that are already highlighted
        const filteredNewDates = newDates.filter(date => !prevDates.includes(date));
        return [...prevDates, ...filteredNewDates];
      });
    }
  };

  // Function to handle focused date change
  const handleFocusedDateChange = (date) => {
    if (date) {
      const formattedDate = date.format("DD/MM/YYYY HH:mm");
      setCurrentSelectedDate(formattedDate);
    }
  };

  // Function to handle removal of a selected date
  const handleRemoveDate = () => {
    if (currentSelectedDate) {
      setHighlitedDays((prevDates) => 
        prevDates.filter(d => d !== currentSelectedDate)
      );
    }
  };

  return (
    <>
      <section className="rental-avaliability">
        <div className="inner">
          <h1>Hvornår er din parkeringsplads tilgængelig?</h1>
          <p>Fortæl os hvor lejerne kan finde din parkeringsplads.</p>
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
                variant="outlined"
                size="large"
                href="#"
                sx={{ textTransform: "initial", height: "fit-content" }}
              >
               Samme tidspunkt
              </Button>
              <Button
                onClick={handleRemoveDate} 
                variant="outlined"
                size="large"
                href="#"
                sx={{ textTransform: "initial", height: "fit-content" }}
              >
                Ryd dag
              </Button>
            </div>
            <div className="bookingContents">
              <div className="calenderPicker text-black flex flex-col justify-center items-center">
                <div className="pt-4 flex justify-between w-[85%] ">
                  <div className="flex">
                    <span className="font-semibold">{date.month.name + " " + date.year}</span>
                    <div className="flex flex-col bottom-3 relative">
                      <ArrowDropDownIcon
                        sx={{
                          transform: "rotate(180deg)",
                        }}
                        onClick={() => update("year", 1)}
                      ></ArrowDropDownIcon>
                      <ArrowDropDownIcon
                        onClick={() => update("year", -1)}
                      ></ArrowDropDownIcon>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <ArrowLeftIcon
                      className="cursor-pointer"
                      onClick={() => update("month", -1)}
                    ></ArrowLeftIcon>
                    <ArrowRightIcon
                      className="cursor-pointer"
                      onClick={() => update("month", 1)}
                    ></ArrowRightIcon>
                  </div>
                </div>
                <Calendar
                  ref={calendarRef}
                  numberOfMonths={2}
                  multiple={true}
                  value={highlightedDays}
                  onChange={handleChange}
                  onFocusedDateChange={handleFocusedDateChange}
                  format="DD/MM/YYYY HH:mm"
                  highlightToday
                  displayWeekNumbers={true}
                  weekStartDayIndex={1}
                  shadow={false}
                  weekDays={["S", "M", "T", "W", "T", "F", "S"]}
                />
              </div>
              <div className="desktopTimePicker">
                <TimePickerJs />
              </div>
            </div>
          </section>
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
