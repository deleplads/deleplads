import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import ChevronDown from "../components/icons/ChevronDown";
import { Box } from "@mui/material";
import { slide as BurgerMenu } from "react-burger-menu";

function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  var styles = {
    bmBurgerButton: {
      position: "relative",
      width: "26px",
      height: "15px",
    },
    bmBurgerBars: {
      background: "grey",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100vh",
      width: "100vw",
      top: "0",
    },
    bmMenu: {
      display: "flex",
      flexDirection: "column",
      background: "white",
      padding: "2em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      marginBottom: "25px",
      textDecoration: "none",
      fontWeight: "700",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [isOpen, setisOpen] = useState({ menuOpen: false });

  const handleState = (state: any): void => {
    setisOpen(state);
  };

  const closeMenu = (): void => {
    setisOpen({ menuOpen: false });
  };

  return (
    <>
      <div className="NavigationBar">
        <div className="InnerNavigationBar">
          <a href="/" style={{ fontWeight: "700" }}>
            Deleplads.dk
          </a>
          <BurgerMenu
            className="MenuToggle"
            right
            styles={styles}
            isOpen={isOpen.menuOpen}
            onStateChange={(state) => handleState(state)}
          >
            <a id="home" className="menu-item" href="/">
              Forside
            </a>
            <a id="about" className="menu-item" href="/leje">
              Leje
            </a>
            <a id="contact" className="menu-item" href="/udleje">
              Udleje
            </a>
            <a id="contact" className="menu-item" href="/blog">
              Blog
            </a>
            <a id="contact" className="menu-item" href="/FAQ">
              FAQ
            </a>
            <a id="contact" className="menu-item" href="/sign-up">
              Tilmeld
            </a>
            <a id="contact" className="menu-item" href="/sign-in">
              Log ind
            </a>
          </BurgerMenu>
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
