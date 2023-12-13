import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import type { SetStateAction } from "react";
import React, { useEffect } from "react";
import { Tab, Tabs } from "@mui/material";
import { useNavigate, Outlet, useLoaderData, useLocation, useOutletContext } from "@remix-run/react";
import { defer, type LoaderFunction } from "@remix-run/node";
import { getProfileFromUserId } from "utils/account/profile/profile.server";
import { requireUserId } from "utils/auth.server";
import { mapProfileEntityToProfileProp } from "../../../utils/account/profile/profile.mapper";
import type { ProfileProps } from "utils/account/profile/profile.prop";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const userId = await requireUserId(request);
    const profile = await getProfileFromUserId(userId);
    const profileProps = mapProfileEntityToProfileProp(profile);

    return defer({
      profile: profileProps
    });
  } catch (error) {
    return { error };
  }
};

export default function Profile() {
  const location = useLocation();
  const outletData = useOutletContext();
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);
  const { profile } = useLoaderData() as ProfileProps;
  profile.profile_image_buffer = outletData.profileImageBufferData;

  const tabMapping = {
    "/konto": 0, // default path, e.g., /account
    "/konto/udlejninger": 1,
    "/konto/rediger": 2,
    "/konto/kodeord": 3,
    "/konto/betalingskort": 4,
    "/konto/notifikationer": 5,
    "/konto/indstillinger": 6,
    "/konto/verificeringer": 7,
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
            <Tab label="Overblik" style={{ textTransform: "initial" }}/>
            <Tab
              label="Mine udlejninger"
              style={{ textTransform: "initial" }}
            />
            <Tab label="Redigér profil" style={{ textTransform: "initial" }}/>
            <Tab label="Betalingskort" style={{ textTransform: "initial" }}/>
            <Tab label="Notifikationer" style={{ textTransform: "initial" }}/>
            <Tab label="Indstillinger" style={{ textTransform: "initial" }}/>
            <Tab label="Verificeringer" style={{ textTransform: "initial" }}/>
            <Tab label="Kodeord" style={{ textTransform: "initial" }}/>
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
                      <ListItemText primary="Overblik"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={selectedIndex === 1}
                      onClick={(event) =>
                        handleListItemClick(event, 1, "/konto/udlejninger")
                      }
                    >
                      <ListItemText primary="Mine udlejninger"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={selectedIndex === 2}
                      onClick={(event) =>
                        handleListItemClick(event, 2, "/konto/rediger")
                      }
                    >
                      <ListItemText primary="Redigér profil"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={selectedIndex === 3}
                      onClick={(event) =>
                        handleListItemClick(event, 3, "/konto/kodeord")
                      }
                    >
                      <ListItemText primary="Kodeord"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={selectedIndex === 4}
                      onClick={(event) =>
                        handleListItemClick(event, 4, "/konto/betalingskort")
                      }
                    >
                      <ListItemText primary="Betalingskort"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={selectedIndex === 5}
                      onClick={(event) =>
                        handleListItemClick(event, 5, "/konto/notifikationer")
                      }
                    >
                      <ListItemText primary="Notifikationer"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={selectedIndex === 6}
                      onClick={(event) =>
                        handleListItemClick(event, 6, "/konto/indstillinger")
                      }
                    >
                      <ListItemText primary="Indstillinger"/>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      selected={selectedIndex === 7}
                      onClick={(event) =>
                        handleListItemClick(event, 7, "/konto/verificeringer")
                      }
                    >
                      <ListItemText primary="Verificeringer"/>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </div>
          <section>
            <Outlet
              context={{ profile: profile, updateProfileImageState: outletData.updateProfileImageState }}></Outlet>
          </section>
        </main>
      </div>
    </>
  );
}
