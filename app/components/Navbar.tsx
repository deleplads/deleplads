import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import ChevronDown from "../components/icons/ChevronDown";

function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
            <div
              onClick={handleOpenUserMenu}
              style={{ display: "flex", margin: "0 15px", cursor: "pointer" }}
            >
              <span>Leje og udleje</span>
              <div
                style={{
                  height: "16px",
                  width: "16px",
                  color: "#425466",
                  marginLeft: "5px",
                  marginTop: "2.5px",
                }}
              >
                <ChevronDown></ChevronDown>
              </div>
            </div>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <a href="/leje">Leje</a>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <a href="/udleje">Udleje</a>
              </MenuItem>
            </Menu>
            <a href="#">Blog</a>
            <a href="/faq">FAQ</a>
          </div>
          <span>
            <Button
              variant="outlined"
              href="/sign-up"
              sx={{
                marginRight: "15px",
                textTransform: "Capitalize",
                background: "white",
                fontWeight: "500",
                fontSize: "16px",
                padding: "6px 16px",
                border: "1px solid #e5e5e5",
              }}
            >
              Tilmeld
            </Button>
            <Button
              variant="contained"
              href="/sign-in"
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
