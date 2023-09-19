"use client";

import Flag from "@mui/icons-material/Flag";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";

function WhyShouldYouUseIt() {
  return (
    <main className="why-should-you-use-it">
      <div className="inner">
        <h2>Byens bedste parkeringshemmelighed</h2>
        <div className="why-should-you-use">
          <div className="item">
            <div className="icon">{<AttachMoneyOutlinedIcon />}</div>
            <p>Find de billigeste parkeringspladser rundt omkring i landet.</p>
          </div>
          <div className="item">
            <div className="icon">{<RecyclingOutlinedIcon />}</div>
            <p>Udnyt de eksisterende parkeringsmuligheder, og spar på.</p>
          </div>
          <div className="item">
            <div className="icon">{<VerifiedUserOutlinedIcon />}</div>
            <p>
              Lej trygt og sikkert parkeringspladser fra udelukkende
              verificerede udlejere.
            </p>
          </div>
          <div className="item">
            <div className="icon">{<SentimentVerySatisfiedOutlinedIcon />}</div>
            <p>Nemt og enkelt at booke parkeringspladser gennem platformen.</p>
          </div>
          <div className="item">
            <div className="icon">{<Flag />}</div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WhyShouldYouUseIt;
