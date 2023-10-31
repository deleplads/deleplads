import type { V2_MetaFunction } from "@remix-run/node";
import CallToAction from "~/components/CallToAction";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Popular from "~/components/Popular";
import WhatIsIt from "~/components/usp/WhatIsIt";
import WhyShouldYouUseIt from "~/components/usp/WhyShouldYouUseIt";
import HowShouldYouUseIt from "~/components/usp/HowShouldYouUseIt";
import SocialProof from "~/components/socialProof";
import FAQGeneral from "~/components/FAQGeneral";
import swipercss from  "node_modules/swiper/swiper-bundle.min.css"; // Import Swiper styles


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
      <WhatIsIt></WhatIsIt>
      <HowShouldYouUseIt></HowShouldYouUseIt>
      <WhyShouldYouUseIt></WhyShouldYouUseIt>
      <SocialProof></SocialProof>
      <FAQGeneral></FAQGeneral>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  );
}
