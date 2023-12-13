import { Button} from "@mui/material";

export default function Payment() {
  return (
    <section className="account">
      <h1>Kodeord</h1>
      <p>Her kan du ændre dit gamle kodeord til et nyt.</p>
      <div className="password-options">
        <div className="inner">
          <div className="password-option">
            <div>
              <label htmlFor="">Gammelt kodeord</label>
              <input type="text" />
            </div>
          </div>
          <div className="password-option">
            <div>
              <label htmlFor="">Nyt kodeord</label>
              <input type="text" />
            </div>
          </div>
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
        Skift kodeord
      </Button>
    </section>
  );
}
