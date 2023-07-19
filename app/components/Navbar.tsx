import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
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
      <div className="NavigationBar">
        <div className="InnerNavigationBar">
          <a href="/" style={{ fontWeight: "700" }}>Deleplads.dk</a>
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

            {/* fontWeight: "500",
                fontSize: "16px",
                padding: "6px 16px",
                box-shadow: "rgba(0, 0, 0, 0.12) 0px 20px 40px 0px",
                borderRadius: "1000000000px",
                color: "white",
                fontWeight: 700 */}

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

      {/* <Box sx={{ width: "100%", zIndex: "100" }}>
        <div style={{ width: "100%", background: "#0b3558" }}> 
          <Alert
            color="info"
            sx={{
              height: "65px",
              display: "flex",
              alignItems: "center",
              background: "#0b3558",
              color: "white",
              width: "1340px",
              margin: "0 auto"
            }}
          >
            <AlertTitle sx={{ margin: "0" }}>Info</AlertTitle>
          </Alert>
        </div>
      </Box> */}
    </>
  );
}

export default Navbar;
