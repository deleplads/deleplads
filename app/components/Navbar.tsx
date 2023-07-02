import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      {/* <Box sx={{ width: "100%", position: "fixed", zIndex: "100" }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Close me!
          </Alert>
        </Collapse>
      </Box> */}

      <div className="NavigationBar" /* style={ open ? { marginTop: "75px" } : {} }*/>
        <div className="InnerNavigationBar">
          <a href="/">Deleplads.dk</a>
          <div className="items">
            <a href="#">Parkeringspladser</a>
            <a href="#">FAQ</a>
            <a href="#">Blog</a>
            <a href="kontakt">Kontakt</a>
          </div>
          <span>
            <Button variant="text">Tilmeld</Button>
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{ textTransform: "Capitalize", background: "#006bff", fontWeight: "600" }}
            >
              Log ind
            </Button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
