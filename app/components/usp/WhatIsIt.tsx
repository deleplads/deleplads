"use client";

import { Box, Button } from "@mui/material";

function WhatIsIt() {
  return (
    <main className="what-is-it">
      <div className="inner">
        <h1>Byens bedste parkeringshemmelighed</h1>
        <p>
          En deleøkonomisk platform, der matcher lejere og udlejere af private parkeringspladser — nemt, enkelt og billigt.
        </p>
        <div className="solutions">
          <div className="solution-one">
            <Box component="img" src="./placeholderr.png" className="stars" />
            <span>
              Lej private parkeringspladser
              <Button
                className="usp-button"
                variant="contained"
                style={{
                  background: "var(--BrandAccent)",
                  color: "#FFF",
                  textTransform: "initial",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "12px 20px"
                }}
              >
                Læs mere
              </Button>
            </span>
          </div>
          <div className="solution-two">
            <Box component="img" src="./placeholderr.png" className="stars" />
            <span>
              Udlej din parkeringsplads
              <Button
                className="usp-button"
                variant="contained"
                style={{
                  background: "var(--BrandAccent)",
                  color: "#FFF",
                  textTransform: "initial",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "12px 20px"
                }}
              >
                Læs mere
              </Button>
            </span>
          </div>
        </div>
        <iframe
          width="100%"
          height="697,50"
          src="https://www.youtube-nocookie.com/embed/3zhym9oUSGU?si=vDUxUwPxi87hE1WB&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ borderRadius: "24px", marginTop: "32px" }}
        ></iframe>
      </div>
    </main>
  );
}

export default WhatIsIt;
