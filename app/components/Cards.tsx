import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "@remix-run/react";

export default function BasicCard() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("parkeringsplads");
      }}
    >
      <Card className="gallery-cards">
        <CardContent className="gallery-cards-content">
          <Box
            sx={{ width: "100%" }}
            component="img"
            src="../parkeringsplads2.png"
          />
          <div className="gallery-cards-content-info">
            <h3>Ll. Blovstrødvej 33</h3>

            <p>3450 Allerød, Hovedstaden</p>
            <br />
            <p>Mandag: 08:00-16:00</p>
            <p>Tirsdag: 08:00-16:00</p>
            <p>Onsdag: 08:00-16:00</p>
            <p>Torsdag: 08:00-16:00</p>
            <p>Fredag: 08:00-16:00</p>
            <p>Lørdag: 08:00-16:00</p>
            <p>Søndag: 08:00-16:00</p>
            <br />
            <Button
              className="SearchButton"
              variant="contained"
              size="large"
              href="#"
              sx={{
                textTransform: "initial",
                borderRadius: "52px",
                width: "100%",
              }}
            >
              Find parkeringsplads
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
