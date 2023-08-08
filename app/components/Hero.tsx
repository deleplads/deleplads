"use client";
import SearchBar from "./SearchBar";
// import Background from '../../public/test2.png';

function Hero() {
  return (
    <section
      className="Hero" /*style={{ background: `url(${Background})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", margin: "0 auto", backgroundPosition: "center 75px" }}*/
    >
      <div className="HeroInner">
        <h1>Lej private parkeringspladser</h1>
        <SearchBar></SearchBar>
        {/* <p>
          Leje og udlejning af private parkeringspladser, nemt, hurtigt og
          billigt.
        </p>

        <Button
          variant="contained"
          size="large"
          href="/sign-up"
          sx={{
            textTransform: "initial",
            borderRadius: "8px",
            padding: "14px 28px",
            fontSize: "17px",
            fontWeight: "600",
          }}
        >
          Tilmeld gratis
        </Button> */}
        {/* <Box component="img" src="../../hero-image.jpg" className="HeroImage"/> */}
      </div>
    </section>
  );
}

export default Hero;
