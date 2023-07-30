import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import Navbar from "../components/Navbar";
import FAQ from "../components/faq";
import Footer from "../components/Footer";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Ofte stillede spørgsmål" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Faq() {
  return (
    <main>
      <Navbar></Navbar>
      <FAQ></FAQ>
      <Footer></Footer>
    </main>
  );
}
