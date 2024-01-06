import type { V2_MetaFunction } from "@remix-run/node";
import CallToAction from "~/components/Parkingspots/CallToAction";
import Hero from "~/components/Common/Hero";
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
      <Popular></Popular>
      <CallToAction></CallToAction>
    </>
  );
}
