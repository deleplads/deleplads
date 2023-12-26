import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import Footer from "~/components/Footer";
import Filtration from "~/components/Parkingspots/filtration";
import { Outlet } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Locate" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Locate() {
  return (
    <main>
      <Filtration></Filtration>
      <Outlet></Outlet>
      <Footer></Footer>
    </main>
  );
}
