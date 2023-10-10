import React from "react";
import Radio from "@mui/material/Radio";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import VpnKeyOffOutlinedIcon from "@mui/icons-material/VpnKeyOffOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import AccessibleOutlinedIcon from "@mui/icons-material/AccessibleOutlined";
import LightOutlinedIcon from "@mui/icons-material/LightOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import DirectionsSubwayFilledOutlinedIcon from "@mui/icons-material/DirectionsSubwayFilledOutlined";
import AddRoadOutlinedIcon from "@mui/icons-material/AddRoadOutlined";
import type { V2_MetaFunction } from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Vælg fordele ved din parkeringsplads" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function RentalAttributes() {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <section className="rental-attributes">
        <h1>Fortæl os mere om din parkeringsplads</h1>
        <p>
          Vælg de forskellige fordele der kan være for en lejer, at vælge lige
          netop din parkeringsplads.
        </p>
        <div className="attributes-grid">
          <div className="option">
            {<EvStationOutlinedIcon className="attribute-icon" />}
            <h2>El-ladestander</h2>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<VpnKeyOffOutlinedIcon className="attribute-icon" />}
            <h2>Ingen adgangskode</h2>
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<GarageOutlinedIcon className="attribute-icon" />}
            <h2>Overdækning</h2>
            <Radio
              checked={selectedValue === "c"}
              onChange={handleChange}
              value="c"
              name="radio-buttons"
              inputProps={{ "aria-label": "C" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<AddRoadOutlinedIcon className="attribute-icon" />}
            <h2>Gadetilgængelig</h2>
            <Radio
              checked={selectedValue === "d"}
              onChange={handleChange}
              value="d"
              name="radio-buttons"
              inputProps={{ "aria-label": "D" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<CameraAltOutlinedIcon className="attribute-icon" />}
            <h2>Overvågning</h2>
            <Radio
              checked={selectedValue === "e"}
              onChange={handleChange}
              value="e"
              name="radio-buttons"
              inputProps={{ "aria-label": "E" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<AccessibleOutlinedIcon className="attribute-icon" />}
            <h2>Handicapadgang</h2>
            <Radio
              checked={selectedValue === "f"}
              onChange={handleChange}
              value="f"
              name="radio-buttons"
              inputProps={{ "aria-label": "F" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<LightOutlinedIcon className="attribute-icon" />}
            <h2>Belysning</h2>
            <Radio
              checked={selectedValue === "g"}
              onChange={handleChange}
              value="g"
              name="radio-buttons"
              inputProps={{ "aria-label": "G" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<DirectionsSubwayFilledOutlinedIcon className="attribute-icon" />}
            <h2>Tæt på offentlig transport</h2>
            <Radio
              checked={selectedValue === "h"}
              onChange={handleChange}
              value="h"
              name="radio-buttons"
              inputProps={{ "aria-label": "H" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<HealthAndSafetyOutlinedIcon className="attribute-icon" />}
            <h2>Aftenvagter</h2>
            <Radio
              checked={selectedValue === "i"}
              onChange={handleChange}
              value="i"
              name="radio-buttons"
              inputProps={{ "aria-label": "I" }}
              className="radio-check"
            />
          </div>
        </div>
      </section>
      <RentalNavigation
        back={"/rental/1/avaliability"}
        forward={"/rental/1/notes"}
        end={3}
        start={50}
      ></RentalNavigation>
    </>
  );
}
