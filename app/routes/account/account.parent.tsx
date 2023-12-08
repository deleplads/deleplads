import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Footer from "~/components/Footer";
import type { SetStateAction } from "react";
import React, { useEffect } from "react";
import { Tab, Tabs } from "@mui/material";
import { useNavigate, Outlet, useLoaderData, useLocation } from "@remix-run/react";
import { defer, type LoaderFunction } from "@remix-run/node";
import { getProfileFromUserId } from "utils/profile.server";
import { requireUserId } from "utils/auth.server";

type ProfileProps = {
  profile: {
    id: string;
    created_at: Date | null;
    first_name: string;
    last_name: string;
  };
};
export const loader: LoaderFunction = async ({ request }) => {
  try {
    const userId = await requireUserId(request);
    const profile = await getProfileFromUserId(userId);

    return defer({
      profile,
    });
  } catch (error) {
    return { error };
  }
};

export default function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const { profile } = useLoaderData() as ProfileProps;
  const tabMapping = {
    "/konto": 0, // default path, e.g., /account
    "/konto/mine-udlejninger": 1,
    "/konto/profil": 2,
    "/konto/betalingskort": 3,
    "/konto/notifikationer": 4,
    "/konto/indstillinger": 5,
    "/konto/verificeringer": 6,
    "/konto/aktivitet": 7,
  };

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setValue(newValue);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const updateSelectedIndexFromURL = () => {
    const path = location.pathname;
    
    const index = tabMapping[path] ?? 0; // Default to 0 if path not found
    setSelectedIndex(index);
    
  };

  // Update selectedIndex when URL changes
  useEffect(() => {
     updateSelectedIndexFromURL();
  }, [location]);

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
      <div className="account">
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
            <Tab
              label="Mine udlejninger"
              style={{ textTransform: "initial" }}
            />
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
                        handleListItemClick(event, 0, "/konto")
                      }
                    >
                      <ListItemText primary="Overblik" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={selectedIndex === 1}
                      onClick={(event) =>
                        handleListItemClick(event, 1, "/konto/mine-udlejninger")
                      }
                    >
                      <ListItemText primary="Mine udlejninger" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={selectedIndex === 2}
                      onClick={(event) =>
                        handleListItemClick(event, 2, "/konto/profil")
                      }
                    >
                      <ListItemText primary="Redigér profil" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={selectedIndex === 3}
                      onClick={(event) =>
                        handleListItemClick(event, 3, "/konto/betalingskort")
                      }
                    >
                      <ListItemText primary="Betalingskort" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={selectedIndex === 4}
                      onClick={(event) =>
                        handleListItemClick(event, 4, "/konto/notifikationer")
                      }
                    >
                      <ListItemText primary="Notifikationer" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={selectedIndex === 5}
                      onClick={(event) =>
                        handleListItemClick(event, 5, "/konto/indstillinger")
                      }
                    >
                      <ListItemText primary="Indstillinger" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={selectedIndex === 6}
                      onClick={(event) =>
                        handleListItemClick(event, 6, "/konto/verificeringer")
                      }
                    >
                      <ListItemText primary="Verificeringer" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={selectedIndex === 7}
                      onClick={(event) =>
                        handleListItemClick(event, 7, "/konto/aktivitet")
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
            <Outlet context={{ profile: profile }}></Outlet>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}