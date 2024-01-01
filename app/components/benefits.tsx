"use client";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export function Benefits() {
  return (
    <section className="benefits">
      <div className="inner">
        <div className="benefit">
          <div className="text">
            {/* What is it */}
            <h2>Byens bedste parkerings hemmelighed</h2> 
            <p>
              En deleøkonomisk platform, der matcher lejere og udlejere af
              private parkeringspladser — nemt, enkelt og billigt.
            </p>
            <Button
              variant="contained"
              href="/find-parkering/kort"
              size="large"
              sx={{
                textTransform: "initial",
                background: "var(--BrandAccent)",
                width: "fit-content",
                margin: "0 auto",
                fontWeight: 700,
                padding: "12px 20px",
              }}
              className="CallToActionButton"
            >
              Find en parkeringsplads
            </Button>
          </div>
          <Box component="img" src="placeholder-image.jpg" />
        </div>
        <div className="benefit">
          <div className="text">
            {/* How is it */}
            <h2>Sådan virker processen</h2>
            <p>
              På vores platform møder du lejere og udlejere, som deler en
              passion for at skabe et stærkt fællesskab, der forstærker
              brugeroplevelsen.
            </p>
            <Button
              variant="contained"
              href="#"
              size="large"
              sx={{
                textTransform: "initial",
                background: "var(--BrandAccent)",
                width: "fit-content",
                margin: "0 auto",
                fontWeight: 700,
                padding: "12px 20px",
              }}
              className="CallToActionButton"
            >
              Læs hvordan det virker
            </Button>
          </div>
          <Box component="img" src="placeholder-image.jpg" />
        </div>
        <div className="benefit">
          <div className="text">
            {/* Why is it */}
            <h2>En platform med mange fordele</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              iusto voluptates earum voluptatem consequuntur mollitia fugit
              asperiores at
            </p>
            <Button
              variant="contained"
              href="#"
              size="large"
              sx={{
                textTransform: "initial",
                background: "var(--BrandAccent)",
                width: "fit-content",
                margin: "0 auto",
                fontWeight: 700,
                padding: "12px 20px",
              }}
              className="CallToActionButton"
            >
              Se spørgsmål og svar
            </Button>
          </div>
          <Box component="img" src="placeholder-image.jpg" />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
