import { Box } from "@mui/material";
import type { V2_MetaFunction } from "@remix-run/node";
import CallToAction from "~/components/Parkingspots/CallToAction";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Locate" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function userstorie() {
  return (
    <>
      <section className="user-stories">
        <div className="header">
          <div className="inner">
            <span>
              <h1>Historier om vores fantastiske brugere</h1>
            </span>
            <Box
              className="hero-content"
              component="img"
              src="../chandler.jpg"
            />
          </div>
        </div>
        <div className="stories">
          <div className="story">
            <Box className="hero-content" component="img" src="../ross.jpg" />
            <div className="content">
              <h2>Ross tjener lommepenge med hans parkeringsplads</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                quia illum ex. Minima, quia ipsam.
              </p>
              <a href="#">
                Læs historien{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <div className="story">
            <Box className="hero-content" component="img" src="../joey.jpg" />
            <div className="content">
              <h2>Ross tjener lommepenge med hans parkeringsplads</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                facilis nostrum eos iste magnam inventore!
              </p>
              <a href="#">
                Læs historien{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <div className="story">
            <Box
              className="hero-content"
              component="img"
              src="../chandler.jpg"
              sx={{ borderTopRightRadius: "6px", borderTopLeftRadius: "6px" }}
            />
            <div className="content">
              <h2>Ross tjener lommepenge med hans parkeringsplads</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                facilis nostrum eos iste magnam inventore!
              </p>
              <a href="#">
                Læs historien{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <CallToAction></CallToAction>
    </>
  );
}
