import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useEffect, useState } from "react";
import ChevronDown from "../components/icons/ChevronDown";
import { useOutletContext, useNavigate, Link } from "@remix-run/react";
import type { SupabaseOutletContext } from "~/root";
import { slide as BurgerMenu } from "react-burger-menu";
import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import type { Session } from "@supabase/supabase-js";
import type { Profile } from "db_types";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-hot-toast";

// const TabletDiv = (tablet: any ) => {

//   const [anchorElUser, setAnchorElUser] = useState(null);

//   const handleOpenUserMenu = (event: any) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   return tablet ? (
//     <Tooltip title="Open settings">
//       <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//         <Avatar
//           sx={{ width: "40px", height: "40px" }}
//           alt="Remy Sharp"
//           src="../../profile-picture-placeholder.jpg"
//         />
//       </IconButton>
//     </Tooltip>
//   ) : null;
// };

interface LoaderData {
  profile: Profile;
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

function Navbar(profile: any) {
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

  // const { profile } = useOutletContext<SupabaseOutletContext>();
  // const [currentSession, setCurrentSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setProfile] = useState<LoaderData | undefined>();

  useEffect(() => {
    const fetchSession = async () => {
      setProfile(profile);
      setLoading(false);
    };
    fetchSession();
  }, [profile]);

  const handleSubmit = async () => {
    const response = await fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      navigate("/");
    } else {
      toast.error("Error logging out");
    }
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
          <Link to={"/"} style={{ fontWeight: "700" }}>
            <Box component="div" className="NavImage">
              Deleplads
            </Box>
          </Link>
          <BurgerMenu
            className="MenuToggle"
            right
            styles={styles}
            isOpen={isOpen.menuOpen}
            onStateChange={(state) => handleState(state)}
          >
            <Link to={"/"} className="menu-item MLogo">
              Deleplads.dk
            </Link>
            <Link to={"/"} id="home" className="menu-item">
              Hjem
            </Link>
            <Link to={"/leje"} id="about" className="menu-item">
              Leje
            </Link>
            <Link to={"/udleje"} id="contact" className="menu-item">
              Udleje
            </Link>
            <Link to={"/blog"} id="contact" className="menu-item">
              Blog
            </Link>
            <Link to={"/FAQ"} id="contact" className="menu-item">
              FAQ
            </Link>
            <Link to={"/sign-up"} id="contact" className="menu-item MButton1">
              Tilmeld
            </Link>
            <Link to={"/sign-in"} id="contact" className="menu-item MButton2">
              Log ind
            </Link>
          </BurgerMenu>
          <div className="MobileMenuNavigation">
            <div className="items">
              <Link to={"/"} id="home" className="menu-item">
                Hjem
              </Link>
              <Link to={"/locate/map"}>Find en parkeringsplads</Link>
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
                  <Link to={"/leje"} style={{ textDecoration: "none" }}>
                    Leje
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/udleje"} style={{ textDecoration: "none" }}>
                    Udleje
                  </Link>
                </MenuItem>
              </Menu>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/faq"}>FAQ</Link>
            </div>
            {loading ? (
              <div></div>
            ) :userProfile?.profile ? (
              <span className="LogOutMenu">
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        sx={{ width: "40px", height: "40px" }}
                        alt="Remy Sharp"
                        src="./profile-picture-placeholder.jpg"
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
                    <MenuItem  onClick={() => {navigate("/rental"); handleCloseUserMenu()}}>
                        Opret udlejning
                    </MenuItem>
                    <MenuItem  onClick={() => {navigate("/dashboard"); handleCloseUserMenu()}}>
                        Mit overblik
                    </MenuItem>
                    <MenuItem onClick={() => {navigate("/profile"); handleCloseUserMenu()}}>
                        Konto
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
