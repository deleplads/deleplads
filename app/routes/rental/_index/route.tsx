import React from "react";
import type { V2_MetaFunction , ActionFunction} from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";
import { json } from "@remix-run/node";
import { useFetcher, useNavigate } from "@remix-run/react";
import { createOrUpdate } from "utils/Parkingspot/createOrUpdate.server";
import type { parkingspots } from "@prisma/client";
import { getUser } from "utils/auth.server";

export const action: ActionFunction = async ({ request }) => {
  const userArray = await getUser(request);

  let ownerId: string | undefined;
  
  if (userArray && userArray.length > 0) {
      const user = userArray[0]; // Assuming 'user' is always the first element
  
      if (user && 'id' in user) {
          ownerId = user.id;
      }
  }
  
  const parkingspot: Partial<parkingspots> = {
      owner_id: ownerId
  }

   const newParkingspot = await createOrUpdate(parkingspot);
 
  return json({ success: true, parkingspotId: newParkingspot.id }); 
};


export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Opret udlejning" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Rental() {
  const fetcher = useFetcher(); // useFetcher hook from Remix
  const navigate = useNavigate();


  const handleNext = () => {
    fetcher.submit(
      { /* your form data here */ }, 
      { method: "post" }
    );
  };

  React.useEffect(() => {
    if (fetcher.data?.success) {
      navigate(`/rental/${fetcher.data.parkingspotId}/type`);
    }
  }, [fetcher.data, navigate]);

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
        start={0}
        onNext={handleNext}
      ></RentalNavigation>
    </>
  );
}
