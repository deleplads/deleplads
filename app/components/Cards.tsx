import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <a href="#" style={{ textDecoration: "none" }}>
      <Card sx={{ minWidth: "275", border: "none", boxShadow: "none" }}>
        <CardContent sx={{ padding: "0" }}>
          <Box
            sx={{ width: "100%" }}
            component="img"
            src="../../parkeringsplads.jpg"
          />
          <div className="avaliability">
            <p className="day ledig">M</p>
            <p className="day ikke-ledig">T</p>
            <p className="day ledig">O</p>
            <p className="day ledig">T</p>
            <p className="day ikke-ledig">F</p>
            <p className="day ledig">L</p>
            <p className="day ledig">S</p>
          </div>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Log ind og få vist adressen
          </Typography>
          <Typography sx={{ mt: 1.5 }} color="text.secondary">
            København
          </Typography>
          <Typography sx={{ mt: 1.5 }} color="text.secondary">
            17,75 / time
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
}
