import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import ChevronDown from "../components/icons/ChevronDown";
import { Box } from "@mui/material";

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
      <div className="NavigationBar">
        <div className="InnerNavigationBar">
          <a href="/" style={{ fontWeight: "700" }}>
            Deleplads.dk
          </a>
          <div className="MenuToggle">
            <Box
              sx={{ width: "100%" }}
              component="img"
              src="../../hamburger.png"
            />
          </div>
          <div className="MobileMenuNavigation">
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
                href="/sign-up"
                sx={{
                  marginRight: "15px",
                  textTransform: "Capitalize",
                  background: "white",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                Tilmeld
              </Button>

              <Button
                variant="contained"
                href="/sign-in"
                sx={{
                  textTransform: "initial",
                  fontWeight: "700",
                  fontSize: "14px",
                  padding: "6px 16px",
                  background: "#FF2455",
                  borderRadius: "100px",
                  boxShadow: "rgba(0, 0, 0, 0.12) 0px 10px 20px 0px",
                }}
              >
                Log ind
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
