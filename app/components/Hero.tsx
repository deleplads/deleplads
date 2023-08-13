"use client";
import { Box, Button } from "@mui/material";

function Hero() {
  return (
    <section className="Hero">
      <div className="HeroInner">
        <span>
          <h1>
            Leje og udleje<br></br>af private<br></br>parkeringspladser
          </h1>
          <p>
            Her kan du leje eller udleje parkeringspladser, til attratiktive priser.
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
            }}
          >
            Tilmeld gratis
          </Button>
        </span>
        {/* <Box component="img" src="../../hero-image-mobile.jpg" className="HeroImage" />
        <Box component="img" src="../../hero-image-desktop.jpg" className="rekt" /> */}
      </div>
    </section>
  );
}

export default Hero;
