import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filtration from "../components/filtration"
import Gallery from "~/components/Gallery";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Locate" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function LocateGallery() {
  return (
      <section className="pt-52">
        <Gallery></Gallery>
      </section>
  );
}
