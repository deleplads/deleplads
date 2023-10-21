"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import RecyclingIcon from "@mui/icons-material/Recycling";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

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
            marginBottom: "64px",
            fontWeight: 700,
            padding: "12px 20px"
          }}
          className="CallToActionButton"
        >
          Tilmeld gratis
        </Button>
        <div className="benefits">
          <div className="benefit">
            {<RecyclingIcon className="attribute-icon" />}{" "}
            <h3>Bæredygtig resourcefordeling</h3>
            <p>
              I takt med færre parkeringspladser i storbyerne, er det
              miljømæssigt bedre at benytte de eksisterende
              parkeringsmuligheder.
            </p>
          </div>
          <div className="benefit">
            {<VerifiedUserOutlinedIcon className="attribute-icon" />}{" "}
            <h3>Sikre og trygge interaktioner</h3>
            <p>
              På platformen er alle brugere verificerede, hvilket understøtter
              en sikker og tryg brugeroplevelse for alle.
            </p>
          </div>
          <div className="benefit">
            {<PriceCheckIcon className="attribute-icon" />}{" "}
            <h3>Billigere end konkurrenterne</h3>
            <p>
              Vi bestræber os på, altid at være billigere end konkurrenterne.
              Vores system er designet til at kunne prismatche.
            </p>
          </div>
          <div className="benefit">
            {<TagFacesIcon className="attribute-icon" />}{" "}
            <h3>Nem og enkel brugeroplevelse</h3>
            <p>
              Scale your traffic, content, and site performance to match your
              business — without worrying about reliability.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WhyShouldYouUseIt;
