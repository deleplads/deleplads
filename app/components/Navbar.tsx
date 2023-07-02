import * as React from "react";
import Button from "@mui/material/Button";


function Navbar() {
  return (
    <div className="NavigationBar">
      <div className="InnerNavigationBar">
        <div className="logo">Deleplads.dk</div>
        <div className="items">
          <a href="#">Parkeringspladser</a>
          <a href="#">FAQ</a>
          <a href="#">Blog</a>
          <a href="kontakt">Kontakt</a>
        </div>
        <span>
          <Button variant="text">Tilmeld</Button>
          <Button variant="contained" href="#contained-buttons">
            Login
          </Button>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
