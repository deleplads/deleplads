import React, { useEffect, useState } from "react";
import { useNavigate } from "@remix-run/react";
import { Card, CardContent, Box, Button } from "@mui/material";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import VpnKeyOffOutlinedIcon from "@mui/icons-material/VpnKeyOffOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import AccessibleOutlinedIcon from "@mui/icons-material/AccessibleOutlined";
import LightOutlinedIcon from "@mui/icons-material/LightOutlined";
import DirectionsSubwayFilledOutlinedIcon from "@mui/icons-material/DirectionsSubwayFilledOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import AddRoadOutlinedIcon from "@mui/icons-material/AddRoadOutlined";
import type { ParkingSpot } from "utils/types.server";
interface ListingsCardProps {
  spot: ParkingSpot;
  image: File;
}

export default function ListingsCard({ spot, image }: ListingsCardProps) {
  const navigate = useNavigate();
  const [profileImageUrl, setProfileImageUrl] = useState("");
  
  useEffect(() => {
        if (image) {
          const arrayBuffer = new Uint8Array(image.data).buffer;
          const blob = new Blob([arrayBuffer], { type: "image/*" });
          const url = URL.createObjectURL(blob);
          setProfileImageUrl(url);
      
    }
  }, [image]);

  const navigateToSpot = () => {
    navigate(`/parkeringsplads/${spot.id}`);
  };

  const formattedPrice = spot.prices
    ? `${
        spot.prices.user_price !== null
          ? spot.prices.user_price?.toFixed(2)
          : spot.prices.recommended_price?.toFixed(2)
      } DKK per time`
    : "Der er ikke sat en pris";

  return (
    <div onClick={navigateToSpot}>
      <Card className="listingsCard">
        <CardContent className="gallery-cards-content">
          <Box
            sx={{ width: "100%" }}
            component="img"
            src={profileImageUrl ? profileImageUrl : "../parkeringsplads2.png"} // Replace with your image path
          />
          <div className="gallery-cards-content-info">
            <h3>
              {spot.street} {spot.street_nr}
            </h3>
            <p>{`${spot.city}, ${spot.postal_code}`}</p>
            <div className="cardsAttributes">
              {spot
                .parkingspot_details_parkingspot_details_spot_idToparkingspots
                ?.electric && (
                <div className="cardsAttribute">
                  <EvStationOutlinedIcon className="attribute-icon" />
                  <p>El-ladestander</p>
                </div>
              )}
              {spot
                .parkingspot_details_parkingspot_details_spot_idToparkingspots
                ?.code && (
                <div className="cardsAttribute">
                  <VpnKeyOffOutlinedIcon className="attribute-icon" />
                  <p>Ingen kode</p>
                </div>
              )}
              {spot
                .parkingspot_details_parkingspot_details_spot_idToparkingspots
                ?.cover && (
                <div className="cardsAttribute">
                  <GarageOutlinedIcon className="attribute-icon" />
                  <p>Overdækning</p>
                </div>
              )}
              {spot
                .parkingspot_details_parkingspot_details_spot_idToparkingspots
                ?.street_access && (
                <div className="cardsAttribute">
                  <AddRoadOutlinedIcon className="attribute-icon" />
                  <p>Gadetilgængelig</p>
                </div>
              )}
              {spot
                .parkingspot_details_parkingspot_details_spot_idToparkingspots
                ?.surveillance && (
                <div className="cardsAttribute">
                  <CameraAltOutlinedIcon className="attribute-icon" />
                  <p>Overvågning</p>
                </div>
              )}
              {spot
                .parkingspot_details_parkingspot_details_spot_idToparkingspots
                ?.handicap && (
                <div className="cardsAttribute">
                  <AccessibleOutlinedIcon className="attribute-icon" />
                  <p>Handicapadgang</p>
                </div>
              )}
              {spot
                .parkingspot_details_parkingspot_details_spot_idToparkingspots
                ?.light && (
                <div className="cardsAttribute">
                  <LightOutlinedIcon className="attribute-icon" />
                  <p>Belysning</p>
                </div>
              )}
              {spot
                .parkingspot_details_parkingspot_details_spot_idToparkingspots
                ?.public_transport && (
                <div className="cardsAttribute">
                  <DirectionsSubwayFilledOutlinedIcon className="attribute-icon" />
                  <p>Tæt på offentlig transport</p>
                </div>
              )}
              {spot
                .parkingspot_details_parkingspot_details_spot_idToparkingspots
                ?.night_guards && (
                <div className="cardsAttribute">
                  <HealthAndSafetyOutlinedIcon className="attribute-icon" />
                  <p>Aftenvagter</p>
                </div>
              )}
            </div>
            <div className="price">{formattedPrice}</div>
            <Button
              className="SearchButton"
              variant="contained"
              size="large"
              onClick={navigateToSpot}
              sx={{
                textTransform: "initial",
                padding: "12px 20px",
                width: "100%",
                fontWeight: 700,
                background: "var(--BrandAccent)",
              }}
            >
              Lej parkeringsplads →
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
