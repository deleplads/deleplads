import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import ChevronDown from "../components/icons/ChevronDown";
import { useOutletContext, useNavigate } from "@remix-run/react";
import type { SupabaseOutletContext } from "~/root";

function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
 

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { supabase, session } = useOutletContext<SupabaseOutletContext>();
  const currentSession = session ?? null;

  const handleSubmit = async () => {
    await supabase.auth.signOut();
    navigate('/');
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
                <Typography textAlign="center">Leje</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Udleje</Typography>
              </MenuItem>
            </Menu>
            <a href="#">Priser</a>
            <a href="#">Blog</a>
            <a href="/faq">FAQ</a>
          </div>
          {currentSession ? (
            <span>
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  textTransform: "Capitalize",
                  background: "#006bff",
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "white !important",
                }}
              >
                Log ud
              </Button>
            </span>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
