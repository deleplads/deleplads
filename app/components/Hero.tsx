import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import Button from "@mui/material/Button";
import Ratings from "./Ratings";

function Hero() {
  return (
    <section className="Hero">
      <div className="HeroInner">
        <span>
        <Ratings />
          <h1>
            Leje og udleje af private
            <br />
             parkeringspladser
          </h1>
          
          <SearchBar />
          <Button
            className="SearchButton"
            variant="contained"
            href="#"
            sx={{
              textTransform: "initial",
              fontSize: "15px",
              width: "fit-content",
              padding: "12px 20px !important",
              background: "var(--BrandAccent) !important"
            }}
          >
            Find parkeringsplads
          </Button>
        </span>
        <Box
          component="video"
          src="./lmao.mp4"
          className="hero-content"
          loop
          autoPlay
        >
          <source src="./lmao.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
      </div>
    </section>
  );
}

export default Hero;
