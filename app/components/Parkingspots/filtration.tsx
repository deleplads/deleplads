"use client";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import { useNavigate } from "@remix-run/react";
import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import SearchIcon from "@mui/icons-material/Search";

type Anchor = "bottom";

function Filtration() {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <section className="resultsFiltration">
      <div className="inner">
        <TextField
          id="outlined-basic"
          label="Hvor vil du gerne parkere?"
          variant="outlined"
          className="resultsFiltrationSearch"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker ampm={false} label="Start tidspunkt" />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker ampm={false} label="Slut tidspunkt" />
        </LocalizationProvider>
        <Button
          variant="outlined"
          startIcon={<AppsIcon />}
          onClick={() => {
            navigate("/find-parkering/galleri");
          }}
        >
          Vis galleri
        </Button>
        <Button
          variant="outlined"
          startIcon={<LocationOnOutlinedIcon />}
          onClick={() => {
            navigate("/find-parkering/kort");
          }}
        >
          Vis på kort
        </Button>
      </div>

      {/* Mobile results filtration */}

      <div className="mobileResultsFiltration">
        {(["bottom"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <SearchIcon></SearchIcon>&nbsp;Vælg lokation, tid og dato
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              <div className="mobileResultsAppDrawer">
                <TextField
                  id="outlined-basic"
                  label="Hvor vil du gerne parkere?"
                  variant="outlined"
                  className="resultsFiltrationSearch"
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker ampm={false} label="Start tidspunkt" />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker ampm={false} label="Slut tidspunkt" />
                </LocalizationProvider>
                <Button
                  variant="outlined" // Skal ændres til contained når knap bug er fikset... :(
                  onClick={() => {
                    navigate("/find-parkering/galleri");
                  }}
                >
                  Find parkeringsplads
                </Button>
              </div>
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Filtration;
