import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Locate" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function blog() {
  return (
    <main>
      <Outlet></Outlet>
    </main>
  );
}