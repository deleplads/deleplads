import type { V2_MetaFunction } from "@remix-run/node";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { SelectChangeEvent } from "@mui/material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState, type ReactNode, useEffect } from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Flag from "@mui/icons-material/Flag";
import AddRoadOutlined from "@mui/icons-material/AddRoadOutlined";
import GarageOutlined from "@mui/icons-material/GarageOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import VpnKeyOffOutlined from "@mui/icons-material/VpnKeyOffOutlined";
import CallToAction from "~/components/CallToAction";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Leje" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Parkeringsplads() {
  function handleChange(event: SelectChangeEvent<any>, child: ReactNode): void {
    throw new Error("Function not implemented.");
  }

  const [scrolledPastTop, setScrolledPastTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolledPastTop(true);
      } else if (window.scrollY <= 180) {
        setScrolledPastTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
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
          >
            Del
          </Button>
        </div>
        <div className="ParkingSpotInformation">
          <Box
            sx={{ aspectRatio: "16 / 9", backgroundSize: "cover" }}
            component="img"
            src="./parkeringsplads2.png"
          />
          <h2>Information</h2>
          <div className="ParkingSpotInformationDetails">
            <div className="ParkingSpotDetails">
              <PersonOutlined sx={{ fontSize: "30px", color: "#2d2d34" }} />
              <span>
                <h4>Privat person</h4>
                <p>Parkeringsplads udlejes af en privat ejer.</p>
              </span>
            </div>
            <div className="ParkingSpotDetails">
              <AddRoadOutlined sx={{ fontSize: "30px", color: "#2d2d34" }} />
              <span>
                <h4>Gadetilgængelig</h4>
                <p>Indkørsel til parkeringspladsen fra gaden.</p>
              </span>
            </div>
            <div className="ParkingSpotDetails">
              <GarageOutlined sx={{ fontSize: "30px", color: "#2d2d34" }} />
              <span>
                <h4>Carport</h4>
                <p>Parkeringspladsen har tilknyttet carport.</p>
              </span>
            </div>
            <div className="ParkingSpotDetails">
              <VpnKeyOffOutlined sx={{ fontSize: "30px", color: "#2d2d34" }} />
              <span>
                <h4>Ingen kode</h4>
                <p>Ingen behov for kode ved parkering.</p>
              </span>
            </div>
          </div>
          <div className="ParkingSpotAvaliability">
            <h2>Tilgængelighed</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar defaultValue={dayjs("2022-04-17")} disabled />
            </LocalizationProvider>
          </div>
          <div className="ParkingSpotLocation">
            <h2>Cirka placering af parkeringsplads</h2>
            <iframe
              title="SHIT"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.579493914321!2d12.536347670690457!3d55.65536410407578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525381652cfd11%3A0x6496d86f15f53006!2sEngelbert-Petersens%20Bageri!5e0!3m2!1sda!2sdk!4v1691516861738!5m2!1sda!2sdk"
              width="100%"
              height="325"
              style={{ border: 0, marginTop: "25px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="ParkingSpotText">
            <h2>Udlejerinformation</h2>
            <div className="Rentee">
              <Avatar className="Avatar" alt="Remy Sharp" src="" />
              <div className="RenteeInformation">
                <a href="#">Nicolas</a>
              </div>
            </div>
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
            <p>
              * Vær venligst opmærksom på, at den eksakte adresse først oplyses,
              når betalingen er modtaget.
            </p>
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
              sx={{ width: "100%", textTransform: "initial", background: "#635BFF" }}
            >
              Bestil
            </Button>
            <Button
              size="large"
              variant="outlined"
              href="/kontakt"
              sx={{ width: "100%", textTransform: "initial" }}
              startIcon={<Flag />}
            >
              Rapportér problem
            </Button>
            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FormControlLabel control={<Checkbox />} label="" />
              <p style={{ fontSize: "14px !important" }}>
                Jeg har læst og accepterer <a href="#">handelsbetingelserne</a>
              </p>
            </FormGroup>
          </div>
        </div>

        <div className="ParkingSpotMobileBooking">
          <Button
            size="large"
            href="#"
            sx={{
              width: "100%",
              textTransform: "initial",
              background: "#635BFF !important",
            }}
          >
            Bestil
          </Button>
        </div>
      </section>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  );
}
