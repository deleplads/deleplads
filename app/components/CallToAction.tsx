"use client";

import { Button } from "@mui/material";

function CallToAction() {
  return (
    <>
      <section className="CallToAction">
        <div className="inner">
          <h1>Kom i gang med at leje og udleje parkeringspladser i dag</h1>
          <Button
            variant="contained"
            href="#"
            size="large"
            sx={{ textTransform: "initial", background: "#635BFF" }}
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
