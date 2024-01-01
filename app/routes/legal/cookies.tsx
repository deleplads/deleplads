import type { V2_MetaFunction } from "@remix-run/node";
import Cookies from "~/components/CookiesSite";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Cookiepolitik" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function CookiesRoute() {
  return (
    <main>
      <Cookies></Cookies>
    </main>
  );
}