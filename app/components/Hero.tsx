"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import Background from '../../public/test2.png';

function Hero() {
  return (
    <section
      className="Hero" /*style={{ background: `url(${Background})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", margin: "0 auto", backgroundPosition: "center 75px" }}*/
    >
      <div className="HeroInner">
        <h1>
          Leje og udlejning af<br></br>private parkeringspladser
        </h1>
        <p>
          Leje og udleje private parkeringspladser — nemt, hurtigt og billigt.
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maxime<br></br>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis. */}
        </p>
        <div className="HeroSignUp">
          <p>Tilmeld dig gratis med Google eller Microsoft</p>
          <span>
            <Button
              variant="outlined"
              size="large"
              sx={{
                textTransform: "capitalize",
                padding: "10px 60px",
                fontWeight: "700",
                color: "#0b3558",
                borderColor: "#e5e5e5",
              }}
            >
              <Box
                component="img"
                sx={{ height: 25, width: 25, marginRight: "10px" }}
                src="../../google.png"
              />
              Google
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                textTransform: "capitalize",
                padding: "10px 60px",
                fontWeight: "700",
                color: "#0b3558",
                borderColor: "#e5e5e5",
              }}
            >
              <Box
                component="img"
                sx={{ height: 25, width: 25, marginRight: "10px" }}
                src="../../microsoft.png"
              />
              Microsoft
            </Button>
          </span>
          <div className="hr-seperator">
            <hr />
            <p>Eller</p>
            <hr />
          </div>
          <a href="#">Tilmeld dig med e-mail.</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
