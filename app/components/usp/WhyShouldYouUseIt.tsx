"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export function WhyShouldYouUseIt() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main className="why-should-you-use-it">
      <div className="inner">
        <h2>En platform med mange fordele</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo iusto
          voluptates earum voluptatem consequuntur mollitia fugit asperiores at
          porro soluta!
        </p>
        <Button
          variant="contained"
          href="#"
          size="large"
          sx={{
            textTransform: "initial",
            background: "var(--BrandAccent)",
            width: "fit-content",
            margin: "0 auto",
            marginBottom: "32px",
          }}
          className="CallToActionButton"
        >
          Tilmeld gratis
        </Button>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: "auto",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab label="Miljøvenlig" {...a11yProps(0)} />
            <Tab label="Billigere end konkurrenterne" {...a11yProps(1)} />
            <Tab label="Bekvemmelig" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            Miljøvenlig
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </div>
    </main>
  );
}

export default WhyShouldYouUseIt;
