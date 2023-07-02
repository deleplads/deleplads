"use client";
import * as React from "react";
import Button from '@mui/material/Button';
// import Background from '../../public/test2.png';

function Hero() {
  return (
    <section className="Hero" /*style={{ background: `url(${Background})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", margin: "0 auto", backgroundPosition: "center 75px" }}*/>
      <div className="HeroInner">
      <h1>Leje og udlejning af<br></br><span>private parkeringspladser</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maxime<br></br>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis.</p>
      {/* <span>
      <Button variant="outlined" size="large">Outlined</Button>
      <Button variant="outlined" size="large">Outlined</Button>
      </span> */}
      </div>
    </section>
  );
}

export default Hero;
