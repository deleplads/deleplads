import React, { Suspense, useState } from "react";
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
import {
  ActionFunction,
  json,
  type LinksFunction,
  type LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";
import rental from "~/styles/rental.css";
import fetchParkingSpotData from "utils/parkingspot/fetchAndRequireAuth";
import { useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import { parkingspot_details } from "@prisma/client";
import { requireUserId } from "utils/auth.server";
import createOrUpdateParkingspotDetails from "utils/parkingspot/createOrUpdateParkingDetails";
import Checkbox from "@mui/material/Checkbox";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: rental }];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Vælg fordele ved din parkeringsplads" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const action: ActionFunction = async ({ request, params }) => {
  await requireUserId(request);
  const spotId = params.id;
  const formData = await request.formData();
  const convertToBoolean = (value: FormDataEntryValue | null) => value === "true";

  const attributes: Partial<parkingspot_details> = {
    electric: convertToBoolean(formData.get("electric")),
    surveillance: convertToBoolean(formData.get("surveillance")),
    street_access: convertToBoolean(formData.get("street_access")),
    cover: convertToBoolean(formData.get("cover")),
    light: convertToBoolean(formData.get("light")),
    night_guards: convertToBoolean(formData.get("night_guards")),
    public_transport: convertToBoolean(formData.get("public_transport")),
    handicap: convertToBoolean(formData.get("handicap")),
    code: convertToBoolean(formData.get("code")),
    spot_id: spotId
  };
  

  const newParkingspot = await createOrUpdateParkingspotDetails(attributes);
  

  return json({ success: true, parkingspotId: newParkingspot.spot_id });
};

export const loader: LoaderFunction = async ({ request, params }) => {
  return await fetchParkingSpotData(request, params);
};

export default function RentalAttributes() {
  const [attributes, setAttributes] = useState({
    electric: false,
    code: false,
    surveillance: false,
    street_access: false,
    cover: false,
    light: false,
    night_guards: false,
    public_transport: false,
    handicap: false,
  });
  const fetcher = useFetcher();
  const useLoader = useLoaderData();
  const navigate = useNavigate();
  const [back, setBack] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setAttributes((prevAttrs: any) => ({
      ...prevAttrs,
      [name]: checked,
    }));
  };

  const handleNext = () => {
    fetcher.submit( attributes , { method: "post" });
  };

  React.useEffect(() => {
    if (useLoader) {
      if (!useLoader.error && useLoader.parkingspot_details_parkingspot_details_spot_idToparkingspots != null) {
        setBack(`/rental/${useLoader.id}/availability`);
        const spotDetails = useLoader.parkingspot_details_parkingspot_details_spot_idToparkingspots;
        
        setAttributes({
          code: spotDetails.code,
          cover: spotDetails.cover,
          electric: spotDetails.electric,
          handicap: spotDetails.handicap,
          light: spotDetails.light,
          night_guards: spotDetails.night_guards,
          public_transport: spotDetails.public_transport,
          street_access: spotDetails.street_access,
          surveillance: spotDetails.surveillance,
        });

      }
    }

    if (fetcher.data?.success) {
      navigate(`/rental/${fetcher.data.parkingspotId}/notes`);
    }
  }, [fetcher.data, navigate, useLoader]);

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
            <h3>El-ladestander</h3>
            <Checkbox
              checked={attributes.electric}
              onChange={handleChange}
              value={attributes.electric}
              name="electric"
              inputProps={{ "aria-label": "A" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<VpnKeyOffOutlinedIcon className="attribute-icon" />}
            <h3>Ingen adgangskode</h3>
            <Checkbox
              checked={attributes.code}
              onChange={handleChange}
              value={attributes.code}
              name="code"
              inputProps={{ "aria-label": "B" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<GarageOutlinedIcon className="attribute-icon" />}
            <h3>Overdækning</h3>
            <Checkbox
              checked={attributes.cover}
              onChange={handleChange}
              value={attributes.cover}
              name="cover"
              inputProps={{ "aria-label": "C" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<AddRoadOutlinedIcon className="attribute-icon" />}
            <h3>Gadetilgængelig</h3>
            <Checkbox
              checked={attributes.street_access}
              onChange={handleChange}
              value={attributes.street_access}
              name="street_access"
              inputProps={{ "aria-label": "D" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<CameraAltOutlinedIcon className="attribute-icon" />}
            <h3>Overvågning</h3>
            <Checkbox
              checked={attributes.surveillance}
              onChange={handleChange}
              value={attributes.surveillance}
              name="surveillance"
              inputProps={{ "aria-label": "E" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<AccessibleOutlinedIcon className="attribute-icon" />}
            <h3>Handicapadgang</h3>
            <Checkbox
              checked={attributes.handicap}
              onChange={handleChange}
              value={attributes.handicap}
              name="handicap"
              inputProps={{ "aria-label": "F" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<LightOutlinedIcon className="attribute-icon" />}
            <h3>Belysning</h3>
            <Checkbox
              checked={attributes.light}
              onChange={handleChange}
              value={attributes.light}
              name="light"
              inputProps={{ "aria-label": "G" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<DirectionsSubwayFilledOutlinedIcon className="attribute-icon" />}
            <h3>Tæt på offentlig transport</h3>
            <Checkbox
              checked={attributes.public_transport}
              onChange={handleChange}
              value={attributes.public_transport}
              name="public_transport"
              inputProps={{ "aria-label": "H" }}
              className="radio-check"
            />
          </div>
          <div className="option">
            {<HealthAndSafetyOutlinedIcon className="attribute-icon" />}
            <h3>Aftenvagter</h3>
            <Checkbox
              checked={attributes.night_guards}
              onChange={handleChange}
              value={attributes.night_guards}
              name="night_guards"
              inputProps={{ "aria-label": "I" }}
              className="radio-check"
            />
          </div>
        </div>
      </section>
      <Suspense>
        {useLoader && !useLoader.error ? (
          <RentalNavigation
            back={back}
            onNext={handleNext}
            start={50}
          ></RentalNavigation>
        ) : (
          <div className="min-h-max"></div>
        )}
      </Suspense>
    </>
  );
}
