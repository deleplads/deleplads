import styles from "../app/styles/app.css";
import { LoaderFunction, redirect, type LinksFunction, } from "@remix-run/node";
import global from "../app/styles/css/global.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { getUser } from "utils/auth.server";
import { Debug } from "utils/debug.server";
import type { Profile } from "db_types";
import Navbar from "./components/Navbar";
import { getAllcommunes } from "utils/commune.server";
import { getAllStuff, getAllStuff2 } from "utils/stuff.server";

export type SupabaseOutletContext = {
  profile: Profile;
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: global },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {

  // const stuff = await getAllStuff();
  // console.log(stuff)

  // const communes = await getAllcommunes();
  // console.log(communes)

  Debug();
  try {
    const [user, profile] = await getUser(request);
    // const stuff = await getAllStuff();
    // const names =  stuff.map(item => item.name)
    const stuff2 = await getAllStuff2();
    console.log(stuff2)
    // const names = {name: 'Jon'}
    
    // return {user, profile, names} ;
    return {user, profile} ;
  } catch (error) {
    // Handle error, maybe return a specific structure or status code
    return { error };
  }
}



export default function App() {
  const  {user, profile } = useLoaderData();
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <Navbar profile={profile}></Navbar>
        </header>
        <Outlet/>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
