import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
      <Navbar></Navbar>

      <section className="rent">
        <p className="caption">Tjen penge på din tomme parkeringsplads</p>
        <h1>
          Tjen penge på din<br></br>parkeringsplads
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum magni facilis eius<br></br>hic veniam aperiam recusandae ipsam! Alias quaerat sunt ullam aspernatur.
        </p>
        <div className="wrapper">
          <Box
            component="img"
            src="./dashboard-illustration.svg"
            className="dashboard-illustration"
          />
        </div>
      </section>

      <div className="step-by-step">
        <h1>Sådan virker udlejningsprocessen</h1>
        <ul>
          <li>
            <span>1.</span>
            <p>
              For at komme i gang, skal du tilmelde dig gratis på portalen ved
              at oprette en konto.
            </p>
          </li>
          <li>
            <span>2.</span>
            <p>
              Følg verificeringsprocessen for at sikre, at både dig og dine
              udlejninger er af tilstrækkelig kvalitet til at være på portalen.
            </p>
          </li>
          <li>
            <span>3.</span>
            <p>Tilmeld betalingskort.</p>
          </li>
          <li>
            <span>4.</span>
            <p>Opret udleje.</p>
          </li>
          <li>
            <span>5.</span>
            <p>accepter requests.</p>
          </li>
          <li>
            <span>6.</span>
            <p>modtag penge på din deleplads konto.</p>
          </li>
          <li>
            <span>7.</span>
            <p>cash out på din deleplads konto.</p>
          </li>
        </ul>
      </div>

      <section className="highlight">
        <div className="inner">
          <p className="caption">Dit dashboard, dit tempo</p>
          <h2>
            Følg med i dine udlejninger<br></br>med dit eget dashboard
          </h2>
          <p>
            Få adgang til dybdegående data om interaktioner og
            udlejningsstatistikker for dine udlejninger, og følg<br></br>din
            indtjening måned for måned. Du kan også se visninger, transaktioner
            og meget, meget mere.
          </p>
          <div className="wrapper">
            <Box
              component="img"
              src="../../dashboard-illustration.svg"
              className="dashboard-illustration"
            />
          </div>
        </div>
      </section>

      <FAQLeje></FAQLeje>

      <CallToAction></CallToAction>

      <Footer></Footer>
    </main>
  );
}
