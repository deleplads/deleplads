import type { V2_MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer";
import Cookies from "~/components/cookies";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Cookiepolitik" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <Cookies></Cookies>
      <Footer></Footer>
    </main>
  );
}