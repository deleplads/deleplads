import type { V2_MetaFunction } from "@remix-run/node";
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
    </main>
  );
}
