import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Footer from "~/components/Footer";
import type { SetStateAction } from "react";
import React from "react";
import { Tab, Tabs } from "@mui/material";
import { useNavigate } from "@remix-run/react";
import { Outlet } from "@remix-run/react";

export default function Profile() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setValue(newValue);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    route: string
  ) => {
    navigate(route);
    setSelectedIndex(index);
  };

  return (
    <>
      <main className="ProfileMenuSettings">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className="ProfileMenuSettingsMobile"
        >
          <Tab label="Overblik" style={{ textTransform: "initial" }} />
          <Tab label="Mine udlejninger" style={{ textTransform: "initial" }} />
          <Tab label="Redigér profil" style={{ textTransform: "initial" }} />
          <Tab label="Betalingskort" style={{ textTransform: "initial" }} />
          <Tab label="Notifikationer" style={{ textTransform: "initial" }} />
          <Tab label="Indstillinger" style={{ textTransform: "initial" }} />
          <Tab label="Verificeringer" style={{ textTransform: "initial" }} />
          <Tab label="Aktivitet" style={{ textTransform: "initial" }} />
        </Tabs>
        <div className="ProfileMenuSettingsDesktop">
          <Box>
            <nav aria-label="profile settings menu">
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) =>
                      handleListItemClick(event, 0, "/account")
                    }
                  >
                    <ListItemText primary="Overblik" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) =>
                      handleListItemClick(event, 1, "/account/listings")
                    }
                  >
                    <ListItemText primary="Mine udlejninger" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) =>
                      handleListItemClick(event, 2, "/account/profile")
                    }
                  >
                    <ListItemText primary="Redigér profil" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) =>
                      handleListItemClick(event, 3, "/account/payment")
                    }
                  >
                    <ListItemText primary="Betalingskort" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) =>
                      handleListItemClick(event, 4, "/account/notfication")
                    }
                  >
                    <ListItemText primary="Notifikationer" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    selected={selectedIndex === 5}
                    onClick={(event) =>
                      handleListItemClick(event, 5, "/account/settings")
                    }
                  >
                    <ListItemText primary="Indstillinger" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    selected={selectedIndex === 6}
                    onClick={(event) =>
                      handleListItemClick(event, 6, "/account/verification")
                    }
                  >
                    <ListItemText primary="Verificeringer" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    selected={selectedIndex === 7}
                    onClick={(event) =>
                      handleListItemClick(event, 7, "/account/activity")
                    }
                  >
                    <ListItemText primary="Aktivitet" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </div>
        <section>
          <Outlet></Outlet>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
