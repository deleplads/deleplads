import type { V2_MetaFunction } from "@remix-run/node";
import CallToAction from "~/components/CallToAction";
import Footer from "~/components/Footer";
import Gallery from "~/components/Gallery";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Popular from "~/components/Popular";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      
      <Hero></Hero>
      <Gallery></Gallery>
      <Popular></Popular>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  );
}
