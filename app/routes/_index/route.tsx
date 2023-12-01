import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import CallToAction from "~/components/CallToAction";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Popular from "~/components/Popular";
import SocialProof from "~/components/blogTeaser";
import FAQGeneral from "~/components/FAQGeneral";
import swipercss from "node_modules/swiper/swiper-bundle.min.css";
import Benefits from "~/components/benefits";
import { getAllStuff } from "utils/stuff.server";
import { useLoaderData } from "@remix-run/react";


export const loader: LoaderFunction = async ({ request }) => {

  // const stuff = await getAllStuff();
  // console.log(stuff)

  // console.log(stuff.map(item => item.name))

  return { name: "hello" };

}

export const meta: V2_MetaFunction = () => {
  const data = useLoaderData();
  console.log(data)
  // const stuff = await getAllStuff();

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
      <Benefits></Benefits>
      <SocialProof></SocialProof>
      <FAQGeneral></FAQGeneral>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  );
}
