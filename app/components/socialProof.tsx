"use client";

import { Box, Button } from "@mui/material";

function SocialProof() {
  return (
    <main className="socialProof">
      <div className="inner">
        <span>
          <Box component="img" src="./nicolas.jpg" className="socialProofimg" />
          <h2>Nicolas Allesøe</h2>
          <p>Verificeret udlejer</p>
        </span>
        <div>
          <Box component="img" src="./snipsnip.png" className="stars" />
          <p>
            "Efter jeg begyndte at anvende Deleplads.dk for en uge siden til at
            udleje min parkeringsplads, har jeg allerede tjent 3400 kroner!
            Denne platform gør det enkelt at oprette parkeringslister og
            acceptere lejeanmodninger, og der er konstant interesse fra folk,
            der søger parkeringspladser.
            <br />
            <br />
            Det er utroligt, hvor problemfrit det er blevet at tjene ekstra
            penge ved at udnytte en ressource, der ellers blot ville stå
            ubenyttet."
          </p>
        </div>
      </div>
    </main>
  );
}

export default SocialProof;
