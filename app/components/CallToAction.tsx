"use client";

import { Button } from "@mui/material";

function CallToAction() {
  return (
    <>
      <section className="CallToAction">
        <div className="inner">
          <h1>Download gratis app til<br/>kvitteringer</h1>
          <Button
            variant="contained"
            href="#"
            size="large"
            sx={{ textTransform: "initial", background: "var(--BrandAccent)" }}
            className="CallToActionButton"
          >
            Tilmeld gratis
          </Button>
        </div>
      </section>
    </>
  );
}

export default CallToAction;
