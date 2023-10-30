import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "@remix-run/react";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import VpnKeyOffOutlinedIcon from "@mui/icons-material/VpnKeyOffOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import AccessibleOutlinedIcon from "@mui/icons-material/AccessibleOutlined";
import LightOutlinedIcon from "@mui/icons-material/LightOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import DirectionsSubwayFilledOutlinedIcon from "@mui/icons-material/DirectionsSubwayFilledOutlined";
import AddRoadOutlinedIcon from "@mui/icons-material/AddRoadOutlined";

export default function BasicCard() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("parkeringsplads");
      }}
    >
      <Card className="gallery-cards">
        <CardContent className="gallery-cards-content">
          <Box
            sx={{ width: "100%" }}
            component="img"
            src="../parkeringsplads2.png"
          />
          <div className="gallery-cards-content-info">
            <h3>Ll. Blovstrødvej 33</h3>

            <p>3450 Allerød, Hovedstaden</p>
            <br />
            <div className="gallery-cards-attributes">
              <div className="gallery-cards-attribute">
                {<EvStationOutlinedIcon className="attribute-icon" />}{" "}
                <p>El-ladestander</p>
              </div>
              <div className="gallery-cards-attribute">
                {<GarageOutlinedIcon className="attribute-icon" />}{" "}
                <p>Overdækning</p>
              </div>
              <div className="gallery-cards-attribute">
                {<VpnKeyOffOutlinedIcon className="attribute-icon" />}{" "}
                <p>Ingen kode</p>
              </div>
              <div className="gallery-cards-attribute">
                {<CameraAltOutlinedIcon className="attribute-icon" />}{" "}
                <p>Overvågning</p>
              </div>
            </div>
            <br />
            <div className="price">1337 DKK per time</div>
            <Button
              className="SearchButton"
              variant="contained"
              size="large"
              href="#"
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
