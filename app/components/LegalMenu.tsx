"use client";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "@remix-run/react";
import React, { useEffect } from "react";

function LegalMenu() {
  const location = useLocation();
  const tabMapping = {
    "/persondatapolitik": 0,
    "/cookies": 1,
    "/regler-og-vilkaar": 2,
  };

  const [selectedIndex, setSelectedIndex] = React.useState();

  const navigate = useNavigate();

  const updateSelectedIndexFromURL = () => {
    const path = location.pathname;
    console.log(path);
    
    const index = tabMapping[path] ?? null;
    setSelectedIndex(index);
  };

  useEffect(() => {
    updateSelectedIndexFromURL();
  }, [location]);

  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={() => navigate("/persondatapolitik")}
          >
            <ListItemText primary="Persondatapolitik" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={() => navigate("/cookies")}
          >
            <ListItemText primary="Cookies" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={() => navigate("/regler-og-vilkaar")}
          >
            <ListItemText primary="Regler og vilkår" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}

export default LegalMenu;
