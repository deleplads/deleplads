import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import Navbar from "../components/Navbar";
import FAQGeneral from "~/components/FAQGeneral";
import FAQLeje from "~/components/FaqLeje";
import FAQUdleje from "~/components/FaqUdleje";
import Footer from "../components/Footer";
import CallToAction from "~/components/CallToAction";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Ofte stillede spørgsmål" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Faq() {
  return (
    <main>
      <section className="FAQHeader">
        <p className="caption">Har du brug for hjælp?</p>
        <h1>Hyppige spørgsmål og svar 🤔</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
          distinctio?
        </p>
      </section>
      <FAQGeneral></FAQGeneral>
      <FAQLeje></FAQLeje>
      <FAQUdleje></FAQUdleje>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </main>
  );
}
