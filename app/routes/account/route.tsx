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
import { getProfileFromUserId } from "utils/account/profile/profile.server";
import { requireUserId } from "utils/auth.server";
import { createServerClient, parse, serialize } from "@supabase/ssr";
// import { supabase } from "utils/supabase.server";
import supabase from "utils/supabase.server";

type ProfileProps = {
  profile: {
    id: string;
    created_at: Date | null;
    first_name: string;
    last_name: string;
    address: string | null;
    postal_code: number | null;
    city: string | null;
    birth_date: string | null;
    phone_number: number | null;
    profile_image: Blob | null;
  };
};
const blobToBase64 = (blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onloadend = () => resolve(reader.result);
  reader.onerror = reject;
  reader.readAsDataURL(blob);
});
export const loader: LoaderFunction = async ({ request }) => {
  try {
    const userId = await requireUserId(request);
    const profile = await getProfileFromUserId(userId);

    const supabaseClient = await supabase(request);
    const { data, error } = await supabaseClient.storage
      .from('users')
      .download(`${userId}/profile_image`);

    const buffer = Buffer.from(await data.arrayBuffer());
    profile.buffer = buffer;

    return defer({
      profile
    });
  } catch (error) {
    return { error };
  }
};

export default function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  // const { profile } = useLoaderData() as ProfileProps;
  const { profile } = useLoaderData();
  const tabMapping = {
    "/account": 0, // default path, e.g., /account
    "/account/listings": 1,
    "/account/profile": 2,
    "/account/payment": 3,
    "/account/notification": 4,
    "/account/settings": 5,
    "/account/verification": 6,
    "/account/activity": 7,
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
                        handleListItemClick(event, 4, "/account/notification")
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
            <Outlet context={{ profile: profile }}></Outlet>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}
