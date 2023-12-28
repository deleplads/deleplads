import type { V2_MetaFunction } from "@remix-run/node";
import CallToAction from "~/components/Parkingspots/CallToAction";
import Hero from "~/components/Common/Hero";
import Popular from "~/components/Popular";

import FAQGeneral from "~/components/FAQGeneral";
import swipercss from "node_modules/swiper/swiper-bundle.min.css";
import ProductPerspective from "~/components/ProductPerspective";
import Benefits from "~/components/benefits";


export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export function links() {
  return [
    { rel: "stylesheet", href: swipercss },
  ];
}

export default function Index() {
  return (
    <>
      <Hero></Hero>
      <Popular></Popular>
      <ProductPerspective></ProductPerspective>
      <Benefits></Benefits>
      <FAQGeneral></FAQGeneral>
      <CallToAction></CallToAction>
    </>
  );
}
