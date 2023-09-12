"use client";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Button, List } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import { useNavigate } from "@remix-run/react";

function Filtration() {
  const navigate = useNavigate();
  return (
    <section className="filtration">
      <div className="inner">
        <div className="search">
          <TextField
            id="outlined-basic"
            label="Hvor vil du gerne parkere?"
            variant="outlined"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker ampm={false} label="Start tidspunkt" />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker ampm={false} label="Slut tidspunkt" />
          </LocalizationProvider>
        </div>
        <span>
          <Button variant="outlined" startIcon={<ListIcon />} onClick={() => {navigate("/locate/list")}}>
            Liste
          </Button>
          <Button variant="outlined" startIcon={<AppsIcon />} onClick={() => {navigate("/locate/gallery")}}>
            Galleri
          </Button>
          <Button variant="outlined" startIcon={<LocationOnOutlinedIcon />} onClick={() => {navigate("/locate/map")}}>
            Kort
          </Button>
        </span>
      </div>
    </section>
  );
}

export default Filtration;
