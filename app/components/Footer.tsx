"use client";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <section className="Footer">
      <div className="FooterInner">
        <div className="FooterColumn">
          <a href="/">Deleplads.dk</a>
          <span>
            <a href="">
              <YouTubeIcon sx={{ color: "#333333", fontSize: "30px" }} />
            </a>
            <a href="">
              <TwitterIcon
                sx={{ color: "#333333", fontSize: "30px", marginLeft: "15px" }}
              />
            </a>
            <a href="">
              <LinkedInIcon
                sx={{ color: "#333333", fontSize: "30px", marginLeft: "15px" }}
              />
            </a>
            <a href="">
              <FacebookIcon
                sx={{ color: "#333333", fontSize: "30px", marginLeft: "15px" }}
              />
            </a>
          </span>
        </div>
        <div className="FooterColumn">
          <h6>Overblik</h6>
          <a href="/">Forside</a>
          <a href="/leje">Leje</a>
          <a href="/udleje">Udleje</a>
          <a href="#">Blog</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="FooterColumn">
          <h6>Legal</h6>
          <a href="privacy-policy">Persondatapolitik</a>
          <a href="cookies">Cookiepolitik</a>
        </div>
        <div className="FooterColumn">
          <h6>Resourcer</h6>
          <a href="#">Kontakt os</a>
        </div>
      </div>
      <div className="FooterBottom">
        <p>Copyright © Deleplads.dk 2023</p>
        <span>
          <a href="privacy-policy">Persondatapolitik</a>
          <a href="cookies">Cookiepolitik</a>
        </span>
      </div>
    </section>
  );
}

export default Footer;
