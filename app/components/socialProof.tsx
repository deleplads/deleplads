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
      <div className="inner">
        <div className="socialGrid">
          <div className="bigger">
            <div className="info">
              <Avatar alt="Remy Sharp" src="../emma.jpg" />
              <h3>Emma</h3>
            </div>
            <p>
              Hurtig og bekvem måde at tjene ekstra penge på min
              parkeringsplads. Brugervenligt og pålideligt. Sikker og bekvem
              måde at finde parkering. Betaling og adgang
            </p>
            <a href="#">Læs brugeroplevelsen &gt;</a>
          </div>
          <div className="smaller-upper">
            <div className="info">
              <Avatar alt="Remy Sharp" src="../nicolas.jpg" />
              <h3>Christian</h3>
            </div>
            <p>
              Ingen stress med parkering! Platformen har ændret spillet med nem
              booking og hurtige betalinger. Anbefales til alle bybilister. Anbefales til alle bybilister. Anbefales til alle bybilister.
            </p>
            <a href="#">Læs brugeroplevelsen &gt;</a>
          </div>
          <div className="smaller-lower">
            <Box
              component="img"
              src="../laura-story.jpg"
              sx={{
                height: "420px",
                width: "auto",
                borderRadius: "24px 24px 0 0;",
              }}
            />
            <div className="info">
              <span>
                <Avatar alt="Remy Sharp" src="../laura.jpg" />
                <h3>Laura</h3>
              </span>
              <p>
                Hurtig og bekvem måde at tjene ekstra penge på min
                parkeringsplads. Brugervenligt og pålideligt. Sikker og bekvem
                måde at finde parkering. Betaling og adgang
              </p>
              <a href="#">Læs brugeroplevelsen &gt;</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SocialProof;
