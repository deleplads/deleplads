"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function HowShouldYouUseIt() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main className="how-should-you-use-it">
      <div className="inner">
        <h1>Sådan virker processen</h1>
        <p>
          På vores platform møder du lejere og udlejere, som deler en passion
          for at skabe et stærkt fællesskab, der forstærker brugeroplevelsen.
        </p>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            className="how-toggle"
          >
            <Tab label="Lejere" />
            <Tab label="Udljere" />
          </Tabs>

          {value === 0 && (
            <div className="how-renter">
              <div className="steps">
                <div className="step">
                  <Box
                    sx={{ width: "100%" }}
                    component="img"
                    src="../placeholderr.png"
                  />
                  <h2>1. Opret dig på portalen</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim temporibus adipisci.
                  </p>
                </div>
                <div className="step">
                  <Box
                    sx={{ width: "100%" }}
                    component="img"
                    src="../placeholderr.png"
                  />
                  <h2>2. Opret dig på portalen</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim temporibus adipisci.
                  </p>
                </div>
                <div className="step">
                  <Box
                    sx={{ width: "100%" }}
                    component="img"
                    src="../placeholderr.png"
                  />
                  <h2>3. Opret dig på portalen</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim temporibus adipisci.
                  </p>
                </div>
                <div className="step">
                  <Box
                    sx={{ width: "100%" }}
                    component="img"
                    src="../placeholderr.png"
                  />
                  <h2>4. Opret dig på portalen</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim temporibus adipisci.
                  </p>
                </div>
                <div className="step">
                  <Box
                    sx={{ width: "100%" }}
                    component="img"
                    src="../placeholderr.png"
                  />
                  <h2>5. Opret dig på portalen</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim temporibus adipisci.
                  </p>
                </div>
                <div className="step">
                  <Box
                    sx={{ width: "100%" }}
                    component="img"
                    src="../placeholderr.png"
                  />
                  <h2>6. Opret dig på portalen</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim temporibus adipisci.
                  </p>
                </div>
              </div>
            </div>
          )}

          {value === 1 && (
            <div className="how-host">
              <div className="steps">
                <div className="step">
                  <Box
                    sx={{ width: "100%" }}
                    component="img"
                    src="../placeholderr.png"
                  />
                  <h2>1. Opret dig på portalen</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim temporibus adipisci, provident.
                  </p>
                </div>
                <div className="step">
                  <Box
                    sx={{ width: "100%" }}
                    component="img"
                    src="../placeholderr.png"
                  />
                  <h2>2. Opret dig på portalen</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim temporibus adipisci, provident.
                  </p>
                </div>
                <div className="step">
                  <Box
                    sx={{ width: "100%" }}
                    component="img"
                    src="../placeholderr.png"
                  />
                  <h2>3. Opret dig på portalen</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim temporibus adipisci, provident.
                  </p>
                </div>
                <div className="step">
                  <Box
                    sx={{ width: "100%" }}
                    component="img"
                    src="../placeholderr.png"
                  />
                  <h2>4. Opret dig på portalen</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim temporibus adipisci, provident.
                  </p>
                </div>
                <div className="step">
                  <Box
                    sx={{ width: "100%" }}
                    component="img"
                    src="../placeholderr.png"
                  />
                  <h2>5. Opret dig på portalen</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim temporibus adipisci, provident.
                  </p>
                </div>
                <div className="step">
                  <Box
                    sx={{ width: "100%" }}
                    component="img"
                    src="../placeholderr.png"
                  />
                  <h2>6. Opret dig på portalen</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim temporibus adipisci, provident.
                  </p>
                </div>
              </div>
            </div>
          )}
        </Box>
      </div>
    </main>
  );
}

export default HowShouldYouUseIt;
