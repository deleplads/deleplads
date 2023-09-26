"use client";
import { Button } from "@mui/material";
import { Link, useNavigate, useLocation  } from "@remix-run/react";
import LinearWithValueLabel from "./Progress";
import { useEffect, useState } from "react";

type RentalNavigationProps = {
  back: string;
  forward: string;
  start: number;
  end: number;
};

function RentalNavigation(props: RentalNavigationProps): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const [reverse, setReverse ] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const back = params.get('back');

    if (back === "true") {
      setReverse(false);
    }else {
      setReverse(true);
    }
  }, [location.search]);
  
  return (
    <section>
      <div className="flex justify-center">
        <LinearWithValueLabel start={props.end} end={props.start} reverse={reverse} />
      </div>
      <div className="rental-navigation">
        <div className="inner">
          <Button
            onClick={() => {
              navigate(props.back + "?back=true");
            }}
            variant="outlined"
            style={{
              width: "fit-content",
              textTransform: "initial",
              fontWeight: "600",
              padding: "12px 20px",
              border: "1px solid #e5e5e5",
              borderRadius: "52px",
            }}
          >
            Tilbage
          </Button>
          <Button
            onClick={() => {
              navigate(props.forward);
            }}
            variant="contained"
            sx={{
              textTransform: "initial",
              fontWeight: "700",
              padding: "12px 20px",
              background: "var(--BrandPrimary)",
              borderRadius: "52px",
            }}
          >
            Næste skridt
          </Button>
        </div>
      </div>
    </section>
  );
}

export default RentalNavigation;
