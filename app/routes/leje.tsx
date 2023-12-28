import type { V2_MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer";
import CallToAction from "~/components/Parkingspots/CallToAction";
import FAQLeje from "~/components/FaqLeje";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Leje" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Leje() {
  return (
    <main>
      <section className="leje">
      </section>

      <FAQLeje></FAQLeje>

      <CallToAction></CallToAction>

      <Footer></Footer>
    </main>
  );
}
