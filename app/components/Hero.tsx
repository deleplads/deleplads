"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import Background from '../../public/test2.png';

function Hero() {
  return (
    <section
      className="Hero" /*style={{ background: `url(${Background})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", margin: "0 auto", backgroundPosition: "center 75px" }}*/
    >
      <div className="HeroInner">
        <h1>Udnyt din parkeringsplads</h1>
        <p>
          Leje og udlejning af private parkeringspladser, nemt, hurtigt og
          billigt.
        </p>

        <Button
          variant="contained"
          size="large"
          href="/sign-up"
          sx={{
            textTransform: "initial",
            borderRadius: "8px",
            padding: "14px 28px",
            fontSize: "17px",
            fontWeight: "600",
          }}
        >
          Tilmeld gratis
        </Button>
        {/* <Box component="img" src="../../hero-image.jpg" className="HeroImage"/> */}
      </div>
    </section>
  );
}

export default Hero;
