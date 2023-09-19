import type { V2_MetaFunction } from "@remix-run/node";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Button } from "@mui/material";

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

      <section className="kontakt">
        <div className="inner">
          <div className="information">
            <h1>Hvordan kan vi hjælpe dig?</h1>
            <p>
              Du meget velkommen til at kontakte os med dine idéer, input eller
              spørgsmål! Vi sidder altid klar, til at hjælpe dig. Vi glæder os
              til at høre fra dig, og svarer som regel indenfor et par timer.
            </p>
          </div>
          <div className="message">
            <span>
              <div className="message-contents">
                <label htmlFor="#">Fornavn</label>
                <input type="text" placeholder="Indtast dit fornavn" required />
              </div>
              <div className="message-contents">
                <label htmlFor="#">Efternavn</label>
                <input type="text" placeholder="Indtast dit efternavn" />
              </div>
            </span>
            <span>
              <div className="message-contents">
                <label htmlFor="#">E-mail</label>
                <input type="text" placeholder="Indtast din e-mail adresse" />
              </div>
              <div className="message-contents">
                <label htmlFor="#">Telefon</label>
                <input type="text" placeholder="Indtast dit telefonnummer" />
              </div>
            </span>
            <div className="message-contents">
              <label htmlFor="#">Henvendelsestype</label>
              <select name="cars" id="cars">
                <option value="volvo">Generelle spørgsmål</option>
                <option value="saab">Ris og ros</option>
                <option value="mercedes">Fejl på siden</option>
                <option value="audi">Salgshenvendelse</option>
              </select>
            </div>
            <div className="message-contents">
              <label htmlFor="#">Din besked</label>
              <textarea
                name=""
                id=""
                placeholder="Indtast din besked"
              ></textarea>
            </div>
            <p>
              Ved at klikke på send bekræfter du, at du giver samtykke til
              behandlingen af dine personlige oplysninger, som det fremgår af
              vores&nbsp;
              <a href="/privacy-policy">privatlivspolitik</a>.
            </p>
            <Button
              variant="contained"
              size="large"
              href="/sign-up"
              sx={{
                textTransform: "initial",
                borderRadius: "8px",
                fontWeight: "600",
                background: "#635bff",
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </main>
  );
}
