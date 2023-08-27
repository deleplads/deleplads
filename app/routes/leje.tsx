import type { V2_MetaFunction } from "@remix-run/node";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Button } from "@mui/material";
import CallToAction from "~/components/CallToAction";
import Check from "@mui/icons-material/Check";
import LejeExplainer from "~/components/LejeExplainer";
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
      <Navbar></Navbar>

      <section className="leje">
        <h1>
          Find billig parkering,<br></br>hvor som helst
        </h1>
        <Button
          variant="contained"
          sx={{
            marginTop: "35px",
            textTransform: "initial",
            width: "fit-content",
            fontSize: "18px",
            fontWeight: "700",
          }}
          size="large"
          href="/sign-up"
        >
          Tilmeld dig gratis
        </Button>
      </section>

      <section className="lejeExplainer-1">
        <div className="inner">
          <div>
            <h1>Find privat udlejede parkeringspladser</h1>
            <ul>
              <li>
                <Check sx={{ fontSize: "20px", marginRight: "8px" }} />
                Billigere end traditionelle parkeringsmuligheder
              </li>
              <li>
                <Check sx={{ fontSize: "20px", marginRight: "8px" }} />
                Altid tilgængelige parkeringspladser døgnet rundt
              </li>

              <li>
                <Check sx={{ fontSize: "20px", marginRight: "8px" }} />
                Nem og sikker betaling mellem lejer og udlejer
              </li>
              <Button
                variant="contained"
                sx={{
                  marginTop: "35px",
                  textTransform: "initial",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
                size="large"
                href="/"
              >
                Se parkeringspladser
              </Button>
            </ul>
          </div>
          <Box
            component="img"
            src="../../14-test.png"
            className="ExplainerImage"
          />
        </div>
      </section>

      <LejeExplainer></LejeExplainer>

      <section className="lejeExplainer-2">
        <div className="inner">
          <div>
            <h1>Find privat udlejede parkeringspladser</h1>
            <ul>
              <li>
                <Check sx={{ fontSize: "20px", marginRight: "8px" }} />
                Billigere end almindelige parkeringspladser
              </li>
              <li>
                <Check sx={{ fontSize: "20px", marginRight: "8px" }} />
                Altid tilgængelige parkeringspladser døgnet rundt
              </li>

              <li>
                <Check sx={{ fontSize: "20px", marginRight: "8px" }} />
                Nem og sikker betaling mellem lejer og udlejer
              </li>
              <Button
                variant="contained"
                sx={{
                  marginTop: "35px",
                  textTransform: "initial",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
                size="large"
                href="/"
              >
                Se parkeringspladser
              </Button>
            </ul>
          </div>
          <Box
            component="img"
            src="../../14-test.png"
            className="ExplainerImage"
          />
        </div>
      </section>

      <FAQLeje></FAQLeje>

      <CallToAction></CallToAction>

      <Footer></Footer>
    </main>
  );
}
