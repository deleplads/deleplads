import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  
  return (
      <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
      >
          {value === index && (
              <Box sx={{ p: 3 }}>
                  {children}
              </Box>
          )}
      </div>
  );
    }
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ProductPerspective() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className="ProductPerspective">
      <div className="inner">
        <div className="heading">
          <h1>Byens bedste parkerings hemmelighed</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            provident?
          </p>
        </div>
        <div>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label="For lejere" {...a11yProps(0)} />
              <Tab label="For udlejere" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="tabContent">
              <div className="bullets">
                <div>
                  <h2>Fleksibilitet</h2>
                  <p>
                    En deleøkonomisk platform, der matcher lejere og udlejere af
                    private parkeringspladser — nemt, enkelt og billigt.
                  </p>
                </div>
                <div>
                  <h2>Billige parkeringspladser</h2>
                  <p>
                    En deleøkonomisk platform, der matcher lejere og udlejere af
                    private parkeringspladser — nemt, enkelt og billigt.
                  </p>
                </div>
                <div>
                  <h2>Trygt og sikkert</h2>
                  <p>
                    En deleøkonomisk platform, der matcher lejere og udlejere af
                    private parkeringspladser — nemt, enkelt og billigt.
                  </p>
                </div>
              </div>
              <Box component="img" src="placeholder-image.jpg" />
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="tabContent">
              <div className="bullets">
                <div>
                  <h2>Fleksibilitet</h2>
                  <p>
                    En deleøkonomisk platform, der matcher lejere og udlejere af
                    private parkeringspladser — nemt, enkelt og billigt.
                  </p>
                </div>
                <div>
                  <h2>Billige parkeringspladser</h2>
                  <p>
                    En deleøkonomisk platform, der matcher lejere og udlejere af
                    private parkeringspladser — nemt, enkelt og billigt.
                  </p>
                </div>
                <div>
                  <h2>Trygt og sikkert</h2>
                  <p>
                    En deleøkonomisk platform, der matcher lejere og udlejere af
                    private parkeringspladser — nemt, enkelt og billigt.
                  </p>
                </div>
              </div>
              <Box component="img" src="placeholder-image.jpg" />
            </div>
          </CustomTabPanel>
        </div>
      </div>
    </section>
  );
}

export default ProductPerspective;
