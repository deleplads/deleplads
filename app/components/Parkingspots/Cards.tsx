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
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="gallery-cards-content-info">
            <span>
            <h3>Hans Hartvig Seedorffs Stræde</h3>
            <p>3450, Allerød</p>
            </span>
            <div className="price">
              <p><b>15 DKK</b></p> &nbsp;/ time
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
