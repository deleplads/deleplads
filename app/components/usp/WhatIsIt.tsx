"use client";

import { Box, Button } from "@mui/material";

function WhatIsIt() {
  return (
    <main className="what-is-it">
      <div className="inner">
        <h1>Power to the people</h1>
        <p>
          You get 7 days to try it for free. And if it's not what you expected,
          <br />
          we guarantee your money back within the first two weeks.
        </p>
        <div className="solutions">
          <div className="solution-one">
            <Box component="img" src="./placeholderr.png" className="stars" />
            <span>
              løsning
              <Button
                className="usp-button"
                variant="contained"
                style={{
                  background: "#000",
                  color: "#FFF",
                  textTransform: "initial",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                Læs mere
              </Button>
            </span>
          </div>
          <div className="solution-two">
            <Box component="img" src="./placeholderr.png" className="stars" />
            <span>
              Privatudlejning
              <Button
                className="usp-button"
                variant="contained"
                style={{
                  background: "#000",
                  color: "#FFF",
                  textTransform: "initial",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                Læs mere
              </Button>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WhatIsIt;
