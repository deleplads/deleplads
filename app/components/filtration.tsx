"use client";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Button } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import { useNavigate } from "@remix-run/react";

function Filtration() {
  const navigate = useNavigate();
  return (
    <section className="filtration">
      <div className="inner">
        <TextField
          id="outlined-basic"
          label="Hvor vil du gerne parkere?"
          variant="outlined"
          className="search"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker ampm={false} label="Start tidspunkt" />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker ampm={false} label="Slut tidspunkt" />
        </LocalizationProvider>
        <Button
          variant="outlined"
          startIcon={<ListIcon />}
          onClick={() => {
            navigate("/locate/list");
          }}
          sx={{
            textTransform: "capitalize",
            color: "black",
            padding: "15px",
          }}
        >
          Liste
        </Button>
        <Button
          variant="outlined"
          startIcon={<AppsIcon />}
          onClick={() => {
            navigate("/locate/gallery");
          }}
          sx={{
            textTransform: "capitalize",
            color: "black",
            padding: "15px",
          }}
        >
          Galleri
        </Button>
        <Button
          variant="outlined"
          startIcon={<LocationOnOutlinedIcon />}
          onClick={() => {
            navigate("/locate/map");
          }}
          sx={{
            textTransform: "capitalize",
            color: "black",
            padding: "15px",
          }}
        >
          Kort
        </Button>
      </div>
    </section>
  );
}

export default Filtration;
