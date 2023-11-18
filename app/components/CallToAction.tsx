"use client";
import { Button } from "@mui/material";

function CallToAction() {
  return (
    <>
      <section className="CallToAction">
        <div className="inner">
          <h1>Parkering gjort enkelt</h1>
          <p>Kom i gang med at finde og udleje private parkeringspladser nu.</p>
          <Button
            variant="contained"
            href="#"
            size="large"
            sx={{ textTransform: "initial", background: "var(--BrandAccent)" }}
            className="CallToActionButton"
          >
            Tilmeld dig gratis
          </Button>
        </div>
      </section>
    </>
  );
}

export default CallToAction;
