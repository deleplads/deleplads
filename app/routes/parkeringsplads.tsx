import type { V2_MetaFunction } from "@remix-run/node";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ReactNode } from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Flag, IosShare } from "@mui/icons-material";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Leje" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function udleje() {
  function handleChange(event: SelectChangeEvent<any>, child: ReactNode): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Navbar></Navbar>
      <section className="ParkingSpot">
        <div className="ParkingSpotInformationHeader">
          <span>
            <h1>Ll. Blovstrødvej</h1>
            <p>3450, Allerød</p>
          </span>
          <Button
            variant="outlined"
            size="large"
            href="#"
            sx={{ textTransform: "initial", height: "fit-content" }}
            startIcon={<IosShare />}
          >
            Del
          </Button>
        </div>
        <div className="ParkingSpotInformation">
          <Box
            sx={{ aspectRatio: "16 / 9", backgroundSize: "cover" }}
            component="img"
            src="../../parkeringsplads.jpg"
          />
          <div className="Rentee">
            <Avatar className="Avatar" alt="Remy Sharp" src="" />
            <div className="RenteeInformation">
              <h2>
                Udlejes af <a href="#">Nicolas</a>
              </h2>
              <span>
                <Rating
                  className="Rating"
                  name="read-only"
                  value={0}
                  readOnly
                />
                <p>0 anmeldelser</p>
              </span>
              <a href="#">Send en besked</a>
            </div>
          </div>
          <div className="ParkingSpotAvaliability">
            <h2>Tidstilgængelighed</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar defaultValue={dayjs("2022-04-17")} disabled />
            </LocalizationProvider>
          </div>
          <div className="ParkingSpotLocation">
            <h2>Cirka placering af parkeringsplads</h2>
            <Box
              sx={{ width: "100%", marginTop: "16px" }}
              component="img"
              src="../../googlemapsplaceholder.jpg"
            />
          </div>
          <div className="ParkingSpotText">
            <h2>Nicolas siger</h2>
            <p>
              Parkeringspladsen ligger inde i gården. Min nabo Erna råber af alt
              og alle, så tag dig ikke af hende.
            </p>
          </div>
          <div className="ParkingSpotTerms">
            <h2>Regler og betingelser</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi, fuga doloribus? Similique a iusto excepturi! Facilis
              omnis, molestias animi voluptates, accusamus magni ex debitis
              distinctio recusandae non corrupti similique inventore ratione
              commodi nobis quisquam laudantium nemo dicta quasi repellendus
              minima totam! Quo voluptatem veniam pariatur autem illo quae
              consequatur rem.
            </p>
          </div>
        </div>

        <div className="ParkingSpotBooking">
          <div className="ParkingSpotBookingOptions">
            <h2>Lej denne parkeringsplads</h2>
            <p>* Vær venligst opmærksom på, at den eksakte adresse først oplyses, når betalingen er modtaget.</p>
            <Box sx={{ minWidth: "20%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Onsdag d. 25/07
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Hovedstaden</MenuItem>
                  <MenuItem value={20}>Sjælland</MenuItem>
                  <MenuItem value={30}>Syddanmark</MenuItem>
                  <MenuItem value={20}>Midtjylland</MenuItem>
                  <MenuItem value={30}>Nordjylland</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <span>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker ampm={false} label="Start tidspunkt" />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker ampm={false} label="Slut tidspunkt" />
              </LocalizationProvider>
            </span>
            <h2 className="price">Pris: 629,-</h2>
            <Button
              size="large"
              variant="contained"
              href="#"
              sx={{ width: "100%", textTransform: "initial" }}
            >
              Bestil
            </Button>
            <Button
              size="large"
              variant="outlined"
              href="#"
              sx={{ width: "100%", textTransform: "initial" }}
              startIcon={<Flag />}
            >
              Rapportér problem
            </Button>
            <a href="#">Regler og vilkår gælder</a>
          </div>
        </div>

        <div className="ParkingSpotMobileBooking">
          <Button variant="contained" size="large" href="#" sx={{width: "100%", textTransform: "initial"}}>Bestil</Button>
        </div>

      </section>
      <Footer></Footer>
    </>
  );
}
