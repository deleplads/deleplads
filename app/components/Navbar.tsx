import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from '@mui/material/AlertTitle';

function Navbar() {

  return (
    <>
      {/* <Box sx={{ width: "100%", position: "fixed", zIndex: "100" }}>
          <Alert severity="info" sx={{ height: "50px", display: "flex", alignItems: "center" }}>
            <AlertTitle sx={{ margin: "0" }}>Info</AlertTitle>
          </Alert> 
      </Box> */}

      <div className="NavigationBar">
        <div className="InnerNavigationBar">
          <a href="/">Deleplads.dk</a>
          <div className="items">
            <a href="/">Forside</a>
            <a href="#">Leje og udleje</a>
            <a href="#">Priser</a>
            <a href="#">Blog</a>
            <a href="/faq">FAQ</a>
          </div>
          <span>
            <Button variant="text">Tilmeld</Button>
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{
                textTransform: "Capitalize",
                background: "#006bff",
                fontWeight: "500",
                fontSize: "16px",
              }}
            >
              Log ind
            </Button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
