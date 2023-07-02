import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Kontakt from "~/pages/Kontakt";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Kontakt></Kontakt>
      <Footer></Footer>
    </main>
  );
}
