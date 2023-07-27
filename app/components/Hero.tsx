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
          sx={{ textTransform: "initial" }}
        >
          Tilmeld gratis
        </Button>
      </div>
    </section>
  );
}

export default Hero;
