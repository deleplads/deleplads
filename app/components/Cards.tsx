import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
    <a href="/parkeringsplads">
      <Card className="gallery-cards">
        <CardContent className="gallery-cards-content">
          <Box
            sx={{ width: "100%" }}
            component="img"
            src="../parkeringsplads2.png"
          />
          <Typography>Ll. Blovstrødvej</Typography>
          <Typography>3450 Allerød</Typography>
          <Typography>17,75 / time</Typography>
        </CardContent>
      </Card>
    </a>
  );
}
