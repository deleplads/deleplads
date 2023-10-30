import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import Footer from "~/components/Footer";
import { Box } from "@mui/material";
import CallToAction from "~/components/CallToAction";
import FAQLeje from "~/components/FaqLeje";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Leje" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Udleje() {
  return (
    <main>
      <section className="rent">
      </section>

      <FAQLeje></FAQLeje>

      <CallToAction></CallToAction>

      <Footer></Footer>
    </main>
  );
}
