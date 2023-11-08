import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Footer from "~/components/Footer";
import type { SetStateAction} from "react";
import React, { Suspense, useEffect, useState } from "react";
import EditProfile from "~/components/ProfileSettings/EditProfile";
import { Tab, Tabs } from "@mui/material";
import { defer, type LoaderFunction } from "@remix-run/node";
import { requireUserId } from "utils/auth.server";
import { getProfileFromUserId } from "utils/profile.server";
import { Await, useFetcher, useLoaderData, useNavigate } from "@remix-run/react";

export const shouldRevalidate = () => false;

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
      profile
  })} catch (error) {
    return { error };
  }
}


export default function Profile() {
   const  { profile } =  useLoaderData() as ProfileProps;
    const [age, setAge] = useState("");
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState<typeof profile>(profile);
    const [value, setValue] = React.useState(0);
    const fetcher = useFetcher();

    
    const handleChange = (event: any, newValue: SetStateAction<number>) => {
      setValue(newValue);
    };
  
    return (
    <section className="">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={userProfile}>
          <div className="">
            {/* <EditProfile profile={userProfile}></EditProfile>   */}
          </div>
        </Await>
      </Suspense>
        
    </section>
  );
}