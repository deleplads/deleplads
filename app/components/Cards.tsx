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
    <a href="#" style={{ textDecoration: "none" }}>
      <Card sx={{ minWidth: "275", border: "none", boxShadow: "none" }}>
        <CardContent sx={{ padding: "0" }}>
          <Box
            sx={{ width: "100%" }}
            component="img"
            src="../../parkeringsplads.jpg"
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Østervang 30
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
