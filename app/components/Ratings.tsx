"use client";

import { Box, Button } from "@mui/material";

function Ratings() {
  return (
    <main className="Ratings">
      {/* <div className="googleRatings">
        <b>
          <p>4.9 stars</p>{" "}
        </b>
        <Box className="stars" component="img" src="../stars.png" />{" "}
        <b>
          <p>666</p>
        </b>
        <p>&nbsp;reviews on</p>
        <Box className="stars" component="img" src="../g-logo.png" />{" "}
      </div> */}
      <div className="trustPilotRatings">
        <h3>Fremragende</h3>
        <Box className="stars" component="img" src="../tp-stars.svg" />{" "}
        <p>457 anmeldelser på</p>
        <Box className="stars" component="img" src="../tp-logo.png" />{" "}
      </div>
    </main>
  );
}

export default Ratings;
