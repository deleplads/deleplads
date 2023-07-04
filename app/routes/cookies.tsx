import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cookies from "../components/cookies"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Cookiepolitik" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <Navbar></Navbar>
      <Cookies></Cookies>
      <Footer></Footer>
    </main>
  );
}
