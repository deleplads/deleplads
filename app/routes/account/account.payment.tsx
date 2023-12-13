import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Footer from "~/components/Footer";
import type { SetStateAction} from "react";
import React, { useState } from "react";
import EditProfile from "~/components/Account/Profile/EditProfile";
import { Tab, Tabs } from "@mui/material";
import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "utils/auth.server";
import { getProfileFromUserId } from "utils/account/profile/profile.server";
import { useLoaderData } from "@remix-run/react";



export default function Payment() {

 
    return (
    <section className="account">
       <h1>Betalingskort</h1>
    </section>
  );
}