import type { V2_MetaFunction } from "@remix-run/node";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import VpnKeyOffOutlinedIcon from "@mui/icons-material/VpnKeyOffOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Locate" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function LocateMap() {
  return (
    <section className="locate">
      <div className="avaliable-bookings">
        <h2>Viser 365 ledige parkeringspladser</h2>
        <div className="booking">
          <h2>Ll. Blovstrødvej 33</h2>
          <p>3450 Allerød, Hovedstaden</p>
          <div className="map-cards-attributes">
            <div className="map-cards-attribute">
              {<EvStationOutlinedIcon className="attribute-icon" />}{" "}
              <p>El-ladestander</p>
            </div>
            <div className="map-cards-attribute">
              {<GarageOutlinedIcon className="attribute-icon" />}{" "}
              <p>Overdækning</p>
            </div>
            <div className="map-cards-attribute">
              {<VpnKeyOffOutlinedIcon className="attribute-icon" />}{" "}
              <p>Ingen kode</p>
            </div>
            <div className="map-cards-attribute">
              {<CameraAltOutlinedIcon className="attribute-icon" />}{" "}
              <p>Overvågning</p>
            </div>
          </div>
          <p>24,95 kr. per time</p>
        </div>
      </div>
      <iframe
        title="SHIT"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.579493914321!2d12.536347670690457!3d55.65536410407578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525381652cfd11%3A0x6496d86f15f53006!2sEngelbert-Petersens%20Bageri!5e0!3m2!1sda!2sdk!4v1691516861738!5m2!1sda!2sdk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
