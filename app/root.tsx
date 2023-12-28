import styles from "../app/styles/app.css";
import { LoaderFunction, type LinksFunction, defer } from "@remix-run/node";
import global from "../app/styles/css/global.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRevalidator,
} from "@remix-run/react";
import { Debug } from "utils/debug.server";
import type { Profile } from "db_types";
import Navbar from "./components/Navbar";
import { downloadProfileImageAsBuffer, getAllProfiles, getProfileFromUserId } from "../utils/account/profile/profile.server";
import Footer from "./components/Footer";
import supabaseServerClient from "utils/supabase.server";
import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

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

    const env = {
      SUPABASE_URL: process.env.SUPABASE_URL!,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!
    };

    const supabaseClient = await supabaseServerClient(request);
    const { data: { session } } = await supabaseClient.auth.getSession();
    // const profiles = await getAllProfiles(session?.user.id);
    // console.log('profiles')
    // console.log(profiles)

    const { data } = await downloadProfileImageAsBuffer(request);
    const profile = session?.user.id ? getProfileFromUserId(session?.user.id) : null;

    return defer({ env, session, profile, profileImageBufferData: data });
  } catch (error) {
    // Handle error, maybe return a specific structure or status code
    return { error };
  }
};

export default function App() {
  const { env, session, profile, profileImageBufferData, profiles } = useLoaderData<typeof loader>();

  const [supabaseClientBrowser] = useState(() => createBrowserClient(env.SUPABASE_URL!, env.SUPABASE_ANON_KEY!))

  const { revalidate } = useRevalidator()

  const serverAccessToken = session?.access_token;

  useEffect(() => {
    const {
      data: { subscription }
    } = supabaseClientBrowser.auth.onAuthStateChange((event, session) => {
      if (event !== 'INITIAL_SESSION' && session?.access_token !== serverAccessToken) {
        revalidate() // server and client are out of sync.
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [serverAccessToken, supabaseServerClient, revalidate])


  if (profileImageBufferData) {
    profile.profile_image_buffer = profileImageBufferData;
  }

  function updateProfileImageState(newProfileImageBuffer: ArrayBuffer) {
    profile.profile_image_buffer = newProfileImageBuffer;
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
          <Navbar supabaseClientBrowser={supabaseClientBrowser} session={session} profile={profile}></Navbar>
        </header>
        <Outlet context={{ session, supabaseClientBrowser, updateProfileImageState, profileImageBufferData }} />
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
