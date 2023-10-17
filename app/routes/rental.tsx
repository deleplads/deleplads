import React from "react";
import type { V2_MetaFunction } from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Opret udlejning" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Rental() {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <section className="rentalIntroduction">
        <div className="inner">
          <div className="introductionText">
            <h1>Lad din parkeringsplads arbejde for dig</h1>
          </div>
          <div className="introductionSteps">
            <div className="step">
              <h3>1. Fortæl os om din parkeringsplads</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae soluta eius nostrum doloremque saepe nisi.
              </p>
            </div>
            <div className="step">
              <h3>2. Få den til at skille sig ud</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae soluta eius nostrum doloremque saepe nisi.
              </p>
            </div>
            <div className="step">
              <h3>3. Færdiggør opslaget og offentliggør det</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae soluta eius nostrum doloremque saepe nisi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <RentalNavigation
        back={"/"}
        forward={"/rental/1/type"}
        start={0}
        end={10}
      ></RentalNavigation>
    </>
  );
}
