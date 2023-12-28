import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "@remix-run/react";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import VpnKeyOffOutlinedIcon from "@mui/icons-material/VpnKeyOffOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.579493914321!2d12.536347670690457!3d55.65536410407578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525381652cfd11%3A0x6496d86f15f53006!2sEngelbert-Petersens%20Bageri!5e0!3m2!1sda!2sdk!4v1691516861738!5m2!1sda!2sdk&amp;disableDefaultUI=true&amp;draggable=false"
            width="100%"
            height="225px"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
