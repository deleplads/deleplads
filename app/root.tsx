import styles from "../app/styles/app.css";
import { LoaderFunction, type LinksFunction } from "@remix-run/node";
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
import { downloadProfileImageAsBuffer } from "../utils/account/profile/profile.server";
import Footer from "./components/Footer";

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

  Debug();
  try {
    const [user, profile] = await getUser(request);

    const { data } = await downloadProfileImageAsBuffer(request);

    return { user, profile, profileImageBufferData: data };
  } catch (error) {
    // Handle error, maybe return a specific structure or status code
    return { error };
  }
}


export default function App() {
  const { user, profile, profileImageBufferData } = useLoaderData();

  if (profileImageBufferData) {
    profile.profileImageBufferData = profileImageBufferData;
  }

  function updateProfileImageState(newProfileImageBuffer: ArrayBuffer) {
    profile.profileImageBufferData = newProfileImageBuffer;
  }

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
        <Outlet context={{ updateProfileImageState, profileImageBufferData }}/>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
