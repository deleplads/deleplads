import { Box } from "@mui/material";
import SearchBar from "./SearchBar";

function Hero() {
  return (
    <section className="Hero">
      <div className="HeroInner">
        <span>
          <h1>
            Lej en privat<br></br>parkeringsplads
          </h1>
          <SearchBar />
        </span>
        <Box className="hero-content" component="img" src="../hihihhi.jpg" />
      </div>
    </section>
  );
}

export default Hero;
