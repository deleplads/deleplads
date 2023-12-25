import { useFetcher, useLoaderData, useNavigate, useParams } from "@remix-run/react";
import React, { Suspense, useRef, useState } from "react";
import type {
  LinksFunction,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreation/RentalNavigation";
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
import TimePickerJs from "~/components/RentalCreation/Timepicker";

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


const currentSelectedDateStyle = {
  color: 'white',
  backgroundColor: 'blue', // Color for the current selected date
};

const highlightedDateStyle = {
  color: 'white',
  backgroundColor: 'purple', // Color for other highlighted dates
};


export default function RentalAvailability() {
  const fetcher = useFetcher();
  const useLoader = useLoaderData();
  const navigate = useNavigate();
  const params = useParams();
  const [back, setBack] = useState(`/opret-udlejning/${params.id}/attributes`);
  const [date, setDate] = useState(new DateObject());
  const [highlightedDays, setHighlitedDays] = useState([]);
  const [dateHoursMap, setDateHoursMap] = useState<{ [key: string]: number[] }>({});
  const [currentSelectedDate, setCurrentSelectedDate] = useState(null);
  const calendarRef = useRef();

  const updateCalender = (key, value) => {
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


  const handleChange = (selectedDates: DateObject[] | null) => {

    if (selectedDates) {
      const newDates = selectedDates.map(date => date.format("DD/MM/YYYY HH:mm"));

      setHighlitedDays((prevDates) => {
        if (newDates.length < prevDates.length) {
          // Find the date that was removed
          const removedDate = prevDates.find(date => !newDates.includes(date));
          if (removedDate) {
            setCurrentSelectedDate(removedDate);
          }
        } else if (newDates.length > prevDates.length) {
          // Find the date that was newly added
          const addedDate = newDates.find(date => !prevDates.includes(date));
          if (addedDate) {
            setCurrentSelectedDate(addedDate);
          }
        }

        // Add only new dates to the highlightedDays, do not remove any
        return [...new Set([...prevDates, ...newDates])];
      });
    } else {
      // Handle the case when all dates are deselected
      setCurrentSelectedDate(null);
      setHighlitedDays([]);
    }
  };


  const updateDateHours = (date: string, hours: number[]) => {
    setDateHoursMap(prevMap => ({
      ...prevMap,
      [date]: hours
    }));
  };

  const handleRemoveDate = () => {
    if (currentSelectedDate) {
      // Remove the selected date from highlightedDays
      setHighlitedDays(prevDates => prevDates.filter(d => d !== currentSelectedDate));
  
      // Remove the corresponding hours entry from dateHoursMap
      setDateHoursMap(prevMap => {
        const newMap = { ...prevMap };
        delete newMap[currentSelectedDate];
        return newMap;
      });
  
      // Update currentSelectedDate to the next date or null
      const index = highlightedDays.indexOf(currentSelectedDate);
      const nextDate = index >= 0 && index < highlightedDays.length - 1 
          ? highlightedDays[index + 1] 
          : (highlightedDays.length > 1 ? highlightedDays[0] : null);
      setCurrentSelectedDate(nextDate);
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
                        onClick={() => updateCalender("year", 1)}
                      ></ArrowDropDownIcon>
                      <ArrowDropDownIcon
                        onClick={() => updateCalender("year", -1)}
                      ></ArrowDropDownIcon>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <ArrowLeftIcon
                      className="cursor-pointer"
                      onClick={() => updateCalender("month", -1)}
                    ></ArrowLeftIcon>
                    <ArrowRightIcon
                      className="cursor-pointer"
                      onClick={() => updateCalender("month", 1)}
                    ></ArrowRightIcon>
                  </div>
                </div>
                <Calendar
                  ref={calendarRef}
                  numberOfMonths={2}
                  multiple={true}
                  value={highlightedDays}
                  onChange={handleChange}
                  format="DD/MM/YYYY HH:mm"
                  highlightToday
                  displayWeekNumbers={true}
                  weekStartDayIndex={1}
                  shadow={false}
                  mapDays={({ date }) => {
                    let style = {};
                    const formattedDate = date.format("DD/MM/YYYY HH:mm");

                    if (formattedDate === currentSelectedDate) {
                      style = currentSelectedDateStyle;
                    } else if (highlightedDays.includes(formattedDate)) {
                      style = highlightedDateStyle;
                    }

                    return { style };
                  }}
                  weekDays={["S", "M", "T", "W", "T", "F", "S"]}
                />
              </div>
              <div className="desktopTimePicker">
                <TimePickerJs
                  currentDate={currentSelectedDate}
                  updateHighlightedHours={updateDateHours}
                  highlightedHoursForDate={dateHoursMap}
                />
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
