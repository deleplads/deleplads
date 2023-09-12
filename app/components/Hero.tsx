"use client";
import { Box, Button } from "@mui/material";

function Hero() {
  return (
    <section className="Hero">
      <div className="HeroInner">
        <span>
          <p className="caption">Collect form submissions</p>
          <h1>Find og udlej private parkeringspladser</h1>
          <p>
            Code your own HTML form and style it, then point your form to
            formcarry to get<br></br>email notifications, upload files, block
            spam and integrate with other apps.
          </p>
          <Button
            variant="contained"
            size="large"
            href="/sign-up"
            sx={{
              textTransform: "initial",
              borderRadius: "8px",
              fontWeight: "600",
              width: "fit-content",
              background: "#635bff",
              marginRight: "8px",
            }}
          >
            Tilmeld dig gratis
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="/locate/map"
            sx={{
              textTransform: "initial",
              borderRadius: "8px",
              fontWeight: "600",
              width: "fit-content",
              color: "#635bff",
              borderColor: "#635bff",
              marginLeft: "8px",
            }}
          >
            Find parkeringsplads
          </Button>
        </span>
      </div>
    </section>
  );
}

export default Hero;
