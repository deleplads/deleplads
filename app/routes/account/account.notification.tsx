import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Payment() {
  return (
    <section className="account">
      <h1>Notifikationer</h1>
      <p>
        Her kan du til- og fravælge de forskellige typer af notifikationer du
        gerne vil modtage.
      </p>
      <div className="list-of-notifications">
        <div className="notification-group">
          <h3>Konto aktivitet</h3>
          <hr />
          <div className="notification-setting">
            <Checkbox {...label} />{" "}
            <p>
              Modtag periodiske notifikationer om den samlede aktivitet af mine
              udlejninger.
            </p>
          </div>
          <div className="notification-setting">
            <Checkbox {...label} disabled checked />
            <p>
              Modtag notifikationer, når en parkeringsplads er blevet booket
              eller anmodet om.
            </p>
          </div>
        </div>
        <div className="notification-group">
          <h3>Udlejning</h3>
          <hr />
          <div className="notification-setting">
            <Checkbox {...label} disabled checked />
            <p>
              Modtag notifikationer når der er nogen der vil leje min
              parkeringsplads.
            </p>
          </div>
          <div className="notification-setting">
            <Checkbox {...label} />{" "}
            <p>
              Modtag notifikationer når der her været besøgende på min
              udlejning.
            </p>
          </div>
          <div className="notification-setting">
            <Checkbox {...label} />{" "}
            <p>Modtag notifikationer når mine udlejninger er ved at udløbe.</p>
          </div>
          <div className="notification-setting">
            <Checkbox {...label} />{" "}
            <p>
              Modtag notifikationer når en udlejning af min parkeringsplads
              starter og slutter.
            </p>
          </div>
        </div>
        <div className="notification-group">
          <h3>Tilbud og nyheder</h3>
          <hr />
          <div className="notification-setting">
            <Checkbox {...label} />{" "}
            <p>Hold dig opdateret med marketingnyheder og eksklusive tilbud.</p>
          </div>
          <div className="notification-setting">
            <Checkbox {...label} /> <p>Få tilsendt vores e-mail-nyhedsbrev.</p>
          </div>
        </div>
        <Button
          variant="contained"
          sx={{
            textTransform: "initial",
            fontWeight: "700",
            padding: "12px 20px",
            marginTop: "48px",
            background: "var(--BrandAccent)",
          }}
        >
          Opdater notifikationer
        </Button>
      </div>
    </section>
  );
}
