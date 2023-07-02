import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import navBarStyle from "../styles/components/navbar.css";
import heroStyle from "../styles/components/hero.css";
import footerStyle from "../styles/components/footer.css";
import galleryStyle from "../styles/components/gallery.css";
import searchbarStyle from "../styles/components/searchbar.css";
import kontaktStyle from '../styles/components/kontakt.css'
import Kontakt from "~/pages/Kontakt";


export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: navBarStyle },
  { rel: "stylesheet", href: footerStyle },
  { rel: "stylesheet", href: heroStyle },
  { rel: "stylesheet", href: galleryStyle },
  { rel: "stylesheet", href: searchbarStyle },
  { rel: "stylesheet", href: kontaktStyle },
];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Kontakt></Kontakt>
      <Footer></Footer>
    </main>
  );
}
