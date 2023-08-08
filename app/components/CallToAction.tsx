"use client";

import { Button } from "@mui/material";

function CallToAction() {
  return (
    <>
      <section className="CallToAction">
        <div className="inner">
          <h1>Tilmeld dig gratis</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <Button variant="contained" href="#" size="large" sx={{ textTransform:"initial" }} className="CallToActionButton">Tilmeld gratis</Button>
        </div>
      </section>
    </>
  );
}

export default CallToAction;
