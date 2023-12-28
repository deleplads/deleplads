import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import Footer from "~/components/Footer";
import Filtration from "~/components/filtration";
import { Link, Outlet } from "@remix-run/react";
import { Box } from "@mui/material";
import CallToAction from "~/components/CallToAction";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Locate" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function blog() {
  return (
    <main>
      <section className="blog">
        <div className="header">
          <h1>Blog</h1>
        </div>
        <Link to={"/artikel2"} className="article">
          <span>
            <p className="date">19. december 2023</p>
            <h2>5000 færre parkeringspladser i København i 2024</h2>
            <p>
              I 2024 står København over for en markant ændring af byens urbane
              landskab, når 5000 parkeringspladser forsvinder. Bliv klogere på
              konsekvenserne, udfordringerne og fremtiden for transport i denne
              foranderlige metropol, og hvordan du som bruger hos deleplads.dk
              er bedre stillet end de fleste.
            </p>
            <div className="author">
              <Box
                sx={{ width: "48px", height: "48px", borderRadius: "100%" }}
                component="img"
                src="../nicolas.jpg"
              />
              <span>
                <b>Nicolas Allesøe</b>
                <p>Teachlead, Deleplads</p>
              </span>
            </div>
          </span>
          <Box
            sx={{ width: "100%" }}
            component="img"
            src="../parkeringsplads2.png"
          />
        </Link>
        <Link to={"/faq"} className="article">
          <span>
            <p className="date">19. december 2023</p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              iure saepe fugit dolorem animi ad.
            </p>
            <div className="author">
              <Box
                sx={{ width: "48px", height: "48px", borderRadius: "100%" }}
                component="img"
                src="../nicolas.jpg"
              />
              <span>
                <b>Nicolas Allesøe</b>
                <p>Teachlead, Deleplads</p>
              </span>
            </div>
          </span>
          <Box
            sx={{ width: "100%" }}
            component="img"
            src="../parkeringsplads2.png"
          />
        </Link>
        <Link to={"/faq"} className="article">
          <span>
            <p className="date">19. december 2023</p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              iure saepe fugit dolorem animi ad.
            </p>
            <div className="author">
              <Box
                sx={{ width: "48px", height: "48px", borderRadius: "100%" }}
                component="img"
                src="../nicolas.jpg"
              />
              <span>
                <b>Nicolas Allesøe</b>
                <p>Teachlead, Deleplads</p>
              </span>
            </div>
          </span>
          <Box
            sx={{ width: "100%" }}
            component="img"
            src="../parkeringsplads2.png"
          />
        </Link>
      </section>
      <CallToAction></CallToAction>
    </main>
  );
}
