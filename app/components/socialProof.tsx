"use client";

import { Avatar, Box, Button } from "@mui/material";

function SocialProof() {
  return (
    <main className="socialProof">
      <h1>Bliv en del af fællesskabet</h1>
      <p>
        På vores platform møder du lejere og udlejere, som deler en passion for
        at skabe et stærkt fællesskab, der forstærker brugeroplevelsen.
      </p>
      <a href="#">Tilmeld dig gratis →</a>
      <div className="inner">
        <div className="socialGrid">
          <div className="bigger">
            <div className="info">
              <Avatar alt="Remy Sharp" src="../nicolas.jpg" />
              <h3>Emma</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum
              quidem quisquam in ratione perspiciatis totam exercitationem
              ducimus sunt! Aspernatur reiciendis odio iusto error quibusdam?
            </p>
          </div>
          <div className="smaller-upper">
            <div className="info">
              <Avatar alt="Remy Sharp" src="../nicolas.jpg" />
              <h3>Christian</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum
              quidem quisquam in ratione perspiciatis totam exercitationem
              ducimus sunt! Aspernatur reiciendis odio iusto error quibusdam?
            </p>
          </div>
          <div className="smaller-lower">
            <div className="info">
              <Avatar alt="Remy Sharp" src="../nicolas.jpg" />
              <h3>Laura</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum
              quidem quisquam in ratione perspiciatis totam exercitationem
              ducimus sunt! Aspernatur reiciendis odio iusto error quibusdam?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SocialProof;
