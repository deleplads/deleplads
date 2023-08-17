import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useEffect, useState } from "react";
import ChevronDown from "../components/icons/ChevronDown";
import { useOutletContext, useNavigate } from "@remix-run/react";
import type { SupabaseOutletContext } from "~/root";
import { slide as BurgerMenu } from "react-burger-menu";
import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import type { Session } from "@supabase/supabase-js";
import type { Profile } from "db_types";
import { useMediaQuery } from "react-responsive";

interface LoaderData {
  profile: Profile[];
}

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

function Navbar() {
  const tablet = useMediaQuery({ query: "(max-width: 600px)" });
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorRentning, setAnchorRentning] = useState(null);
  const navigate = useNavigate();
  const [isOpen, setisOpen] = useState({ menuOpen: false });
  const [scrolledPastTop, setScrolledPastTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolledPastTop(true);
      } else if (window.scrollY <= 85) {
        setScrolledPastTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenRentingMenu = (event: any) => {
    setAnchorRentning(event.currentTarget);
  };

  const handleClosRentingMenu = () => {
    setAnchorRentning(null);
  };

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { supabase, session } = useOutletContext<SupabaseOutletContext>();
  const [currentSession, setCurrentSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<LoaderData | undefined>();

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      const { data: profile } = await supabase.from("profiles").select();
      if (profile) {
        setProfile({ profile });
      }
      setCurrentSession(data?.session ?? null);
      setLoading(false);
    };
    fetchSession();
  }, [session, supabase, supabase.auth]);

  const handleSubmit = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleState = (state: any): void => {
    setisOpen(state);
  };

  return (
    <>
      <div
        className={`NavigationBar ${scrolledPastTop ? "NavbarDropShadow" : ""}`}
      >
        <div className="InnerNavigationBar">
          <a href="/" style={{ fontWeight: "700" }}>
            <Box
              component="img"
              src="../../Wolt_logo_black.png"
              className="NavImage"
            />
          </a>

          {/* Virker ikke */}

          {/* {tablet ? (
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ width: "40px", height: "40px" }}
                  alt="Remy Sharp"
                  src="../../profile-picture-placeholder.jpg"
                />
              </IconButton>
            </Tooltip>
          ) : (
            <></>
          )} */}
          <BurgerMenu
            className="MenuToggle"
            right
            styles={styles}
            isOpen={isOpen.menuOpen}
            onStateChange={(state) => handleState(state)}
          >
            <a className="menu-item MLogo" href="/">
              Deleplads.dk
            </a>
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
            <a id="contact" className="menu-item MButton1" href="/sign-up">
              Tilmeld
            </a>
            <a id="contact" className="menu-item MButton2" href="/sign-in">
              Log ind
            </a>
          </BurgerMenu>
          <div className="MobileMenuNavigation">
            <div className="items">
              <a href="/">Find en parkeringsplads</a>
              <div
                onClick={handleOpenRentingMenu}
                style={{
                  display: "flex",
                  margin: "0 15px",
                  cursor: "pointer",
                }}
              >
                <span>Sådan virker det</span>
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
                anchorEl={anchorRentning}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorRentning)}
                onClose={handleClosRentingMenu}
                disableScrollLock={true}
              >
                <MenuItem>
                  <a href="/leje" style={{ textDecoration: "none" }}>
                    Leje
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="/udleje" style={{ textDecoration: "none" }}>
                    Udleje
                  </a>
                </MenuItem>
              </Menu>
              <a href="#">Blog</a>
              <a href="/faq">FAQ</a>
            </div>
            {loading ? (
              <div></div>
            ) : currentSession ? (
              <span className="LogOutMenu">
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="../../profile-picture-placeholder.jpg"
                      />
                    </IconButton>
                  </Tooltip>
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
                    disableScrollLock={true}
                  >
                    <MenuItem>
                      <a href="/#" style={{ textDecoration: "none" }}>
                        Opret udlejning
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="/dashboard" style={{ textDecoration: "none" }}>
                        Mit overblik
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="/profile" style={{ textDecoration: "none" }}>
                        Konto
                      </a>
                    </MenuItem>
                    <MenuItem
                      onClick={handleSubmit}
                      style={{ textDecoration: "none" }}
                    >
                      Log ud
                    </MenuItem>
                  </Menu>
                </Box>
              </span>
            ) : (
              <span>
                <Button
                  href="/sign-in"
                  sx={{
                    marginRight: "15px",
                    textTransform: "Capitalize",
                    background: "transparent",
                  }}
                >
                  Log ind
                </Button>
                <Button
                  variant="contained"
                  href="/sign-up"
                  sx={{
                    textTransform: "initial",
                    fontWeight: "600",
                    background: "#635bff",
                  }}
                >
                  Tilmeld
                </Button>
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
