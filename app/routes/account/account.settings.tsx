import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Footer from "~/components/Footer";
import type { SetStateAction } from "react";
import React, { Suspense, useState } from "react";
import EditProfile from "~/components/Account/Profile/EditProfile";
import { Tab, Tabs } from "@mui/material";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { requireUserId } from "utils/auth.server";
import { getProfileFromUserId } from "utils/account/profile/profile.server";
import { Await, useLoaderData, useOutletContext } from "@remix-run/react";
import ProfileSettings from "~/components/Account/Settings/AccountSettings";
import { logout } from 'utils/auth.server';
import { accountSettingsForm } from "types/AccountSettings";
import { markUserForDeletion } from "utils/user/user.server";



export default function Payment() {
  const data = useOutletContext();

  return (
    <section className="">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={data}>
          <div className="">
            <ProfileSettings profile={data?.profile} />
          </div>
        </Await>
      </Suspense>
    </section>
  );
}

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const settingsForm = Object.fromEntries<accountSettingsForm>(formData);

  if (settingsForm._action === 'markUserForDeletion') {  
    await markUserForDeletion(userId);
   
    return await logout(request);
  }
  
  return null;
};