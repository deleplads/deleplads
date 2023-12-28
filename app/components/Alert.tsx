import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);
  const [scrolledPastTop, setScrolledPastTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolledPastTop(true);
      } else if (window.scrollY <= 85) {
        setScrolledPastTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={` ${scrolledPastTop ? "hideAlert" : ""}`}>
      <Box sx={{ width: "100%", zIndex: "9999", position: "fixed" }}>
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
      </Box>
    </div>
  );
}
