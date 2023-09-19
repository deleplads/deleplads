import type { V2_MetaFunction } from "@remix-run/node";
import Footer from "../components/Footer";
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SelectChangeEvent,
} from "@mui/material";
import { ReactNode } from "react";
import AddIcon from "@mui/icons-material/Add";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Leje" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Dashboard() {
  function handleChange(event: SelectChangeEvent<any>, child: ReactNode): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <section className="Dashboard">
        <div className="DashboardMenu">
          <Box className="DashboardMenuInner">
            <nav aria-label="profile settings menu">
              <List>
                <ListItem disablePadding>
                  <ListItemButton href="#Udlejningsoverblik">
                    <ListItemText primary="Udlejningsoverblik" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton href="#DashboardParkingSpotsOverview">
                    <ListItemText primary="Mine udlejninger" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton href="#DashboardTransactionHistory">
                    <ListItemText primary="Historik" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </div>
        <div className="DashboardOverview">
          <h1>Udlejningsoverblik </h1>
          <div id="DashboardOverviewAnalytics">
            <div className="DashboardAnalytics">
              <h2>Indkomst fra udlejninger</h2>
              <p>sidste 30 dage</p>
              <h3>3241 DKK</h3>
              <p>
                <span className="up">+54%</span> fra sidste måned
              </p>
            </div>
            <div className="DashboardAnalytics">
              <h2>Successfulde udlejninger</h2>
              <p>sidste 30 dage</p>
              <h3>4</h3>
              <p>
                <span className="down">-17%</span> fra sidste måned
              </p>
            </div>
            <div className="DashboardAnalytics">
              <h2>Visninger</h2>
              <p>sidste 30 dage</p>
              <h3>18</h3>
              <p>
                <span className="up">+82%</span> fra sidste måned
              </p>
            </div>
          </div>
          <div id="DashboardParkingSpotsOverview">
            <div className="header">
              <h2>Mine udlejninger</h2>
              <Button
                size="large"
                variant="outlined"
                href="#"
                sx={{ textTransform: "initial", width: "max-content" }}
                startIcon={<AddIcon />}
              >
                Opret udlejning
              </Button>
            </div>
            <div className="DashboardParkingSpot">
              <h4>Ll. Blovstrødvej 33</h4>
              <span>
                <Button
                  size="large"
                  href="#"
                  variant="contained"
                  sx={{ textTransform: "initial", marginRight: "15px" }}
                >
                  Rediger
                </Button>
                <Button
                  size="large"
                  href="#"
                  variant="contained"
                  color="error"
                  sx={{ textTransform: "initial" }}
                >
                  Slet
                </Button>
              </span>
            </div>
          </div>
          <div id="DashboardTransactionHistory">
            <h2>Udlejningshistorik</h2>
            <div className="DashboardTransaction">
              <span>
                <Avatar></Avatar>
                <p>
                  <a href="#">Nicolas</a> udlejde din parkeringsplads.
                </p>
              </span>
              <p>27-07-2023 15:42:19</p>
            </div>
            <div className="DashboardTransaction">
              <span>
                <Avatar></Avatar>
                <p>
                  <a href="#">Nicolas</a> udlejde din parkeringsplads.
                </p>
              </span>
              <p>27-07-2023 15:42:19</p>
            </div>
            <div className="DashboardTransaction">
              <span>
                <Avatar></Avatar>
                <p>
                  <a href="#">Nicolas</a> udlejde din parkeringsplads.
                </p>
              </span>
              <p>27-07-2023 15:42:19</p>
            </div>
            <div className="DashboardTransaction">
              <span>
                <Avatar></Avatar>
                <p>
                  <a href="#">Nicolas</a> udlejde din parkeringsplads.
                </p>
              </span>
              <p>27-07-2023 15:42:19</p>
            </div>
            <div className="DashboardTransaction">
              <span>
                <Avatar></Avatar>
                <p>
                  <a href="#">Nicolas</a> udlejde din parkeringsplads.
                </p>
              </span>
              <p>27-07-2023 15:42:19</p>
            </div>
            <div className="DashboardTransaction">
              <span>
                <Avatar></Avatar>
                <p>
                  <a href="#">Nicolas</a> udlejde din parkeringsplads.
                </p>
              </span>
              <p>27-07-2023 15:42:19</p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
