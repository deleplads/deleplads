"use client";
import { Button } from "@mui/material";
import { useNavigation, useNavigate } from "@remix-run/react";
import LinearWithValueLabel from "./Progress";

type RentalNavigationProps = {
  back: string;
  forward?: string;
  start: number;
  onNext: () => void; // Define onNext as a function prop
  nextText?: string;
};

function RentalNavigation(props: RentalNavigationProps): JSX.Element {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const handleOnClick = () => {
    if (!props.forward) {
      props.onNext();
    } else {
      navigate(props.forward);
    }
  };

  return (
    <section>
      <div className="flex justify-center">
        <LinearWithValueLabel value={props.start} />
      </div>
      <div className="rental-navigation">
        <div className="inner">
          <Button
            onClick={() => {
              navigate(props.back + "?back=true");
            }}
            variant="outlined"
            disabled={navigation.state === "loading"}
            style={{
              width: "fit-content",
              textTransform: "initial",
              fontWeight: "600",
              padding: "12px 20px",
              border: "1px solid var(--BrandTertiary)",
              borderRadius: "52px",
            }}
          >
            Tilbage
          </Button>
          <Button
            onClick={handleOnClick}
            variant="contained"
            disabled={navigation.state === "loading"}
            sx={{
              textTransform: "initial",
              fontWeight: "700",
              padding: "12px 20px",
              background: "var(--BrandPrimary)",
              borderRadius: "52px",
            }}
          >
            {props.nextText ? props.nextText : "Næste skridt"}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default RentalNavigation;
