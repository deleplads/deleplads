import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Navbar from "~/components/Navbar";
import Footer from "../components/Footer";
import type { SetStateAction} from "react";
import React, { useState } from "react";
import EditProfile from "~/components/ProfileSettings/EditProfile";
import { Tab, Tabs } from "@mui/material";


export default function Profile() {
  const [age, setAge] = useState("");

  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar></Navbar>

      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        className="ProfileMenuSettingsMobile"
      >
        <Tab label="Redigér profil" style={{ textTransform: "initial" }} />
        <Tab label="Betalingskort" style={{ textTransform: "initial" }} />
        <Tab label="Notifikationer" style={{ textTransform: "initial" }} />
        <Tab label="Indstillinger" style={{ textTransform: "initial" }} />
        <Tab label="Verificeringer" style={{ textTransform: "initial" }} />
      </Tabs>

      <section className="ProfileMenuSettings">
        <div className="ProfileMenuSettingsDesktop">
          <Box>
            <nav aria-label="profile settings menu">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Redigér profil" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#">
                    <ListItemText primary="Betalingskort" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#">
                    <ListItemText primary="Notifikationer" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#">
                    <ListItemText primary="Indstillinger" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#">
                    <ListItemText primary="Verificeringer" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </div>
        <EditProfile></EditProfile>
      </section>
      <Footer></Footer>
    </>
  );
}
