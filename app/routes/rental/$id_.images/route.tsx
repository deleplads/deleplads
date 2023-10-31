import { Button } from "@mui/material";
import { Form, Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Upload et billede af din parkeringsplads" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function RentalImages() {
  return (
    <>
      <section className="rentalLocation">
        <div className="inner">
          <h1>Hvordan ser din parkeringsplads ud?</h1>
          <p>
            Upload et billede af din parkeringsplads, så det bliver nemt for
            lejere at finde den.
          </p>
          <Form>
            <Button
              variant="contained"
              component="label"
              className="upload-image"
            >
              <h2>Upload fil</h2>
              {<AddPhotoAlternateOutlinedIcon className="image-icon" />}
              <input type="file" hidden />
            </Button>
          </Form>
        </div>
      </section>
      <RentalNavigation
        back={"/rental/1/notes"}
        forward={"/rental/1/price"}
        start={70}
      ></RentalNavigation>
    </>
  );
}
