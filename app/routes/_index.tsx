import type { V2_MetaFunction } from "@remix-run/node";
import CallToAction from "~/components/CallToAction";
import Footer from "~/components/Footer";
import Gallery from "~/components/Gallery";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Gallery></Gallery>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  );
}
