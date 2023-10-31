import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Footer from "~/components/Footer";
import type { SetStateAction} from "react";
import React, { useState } from "react";
import EditProfile from "~/components/ProfileSettings/EditProfile";
import { Tab, Tabs } from "@mui/material";
import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "utils/auth.server";
import { getProfileFromUserId } from "utils/profile.server";
import { useLoaderData } from "@remix-run/react";


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
    console.log(profile);
    
    return {profile}
  } catch (error) {
    return { error };
  }
}




export default function Profile() {
  const  { profile } = useLoaderData() as ProfileProps;
  const [age, setAge] = useState("");

  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <>
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
        <EditProfile profile={profile}></EditProfile>
      </section>
      <Footer></Footer>
    </>
  );
}
