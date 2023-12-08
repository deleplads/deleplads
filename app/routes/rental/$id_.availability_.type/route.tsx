// import React, { Suspense, useState } from "react";
// import { Form, useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
// import Radio from "@mui/material/Radio";
// import type { V2_MetaFunction, ActionFunction, LinksFunction } from "@remix-run/node";
// import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";
// import { json, LoaderFunction } from "@remix-run/node";
// import { requireUserId } from "utils/auth.server";
// import { createOrUpdate } from "utils/parkingspot/createOrUpdate.server";
// import type { AvaliabilityType, parkingspots } from "@prisma/client";
// import { getAvailabilityType } from "helpers/helpers";
// import fetchParkingSpotData from "utils/parkingspot/FetchAndRequireAuth";
// import rental from "~/styles/rental.css";

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: rental }];
// };

// export const meta: V2_MetaFunction = () => {
//   return [
//     { title: "Deleplads.dk - Type af udlejning" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

// export const loader: LoaderFunction = async ({ request, params }) => {
//   return await fetchParkingSpotData(request, params);
// };

// export const action: ActionFunction = async ({ request, params }) => {
//   await requireUserId(request);
//   const spotId = params.id;
//   const formData = await request.formData();
//   const availabilityType = formData.get("selectedValue");
//   let availability_type: AvaliabilityType | null = null;

//   // Check if selectedValue is a string and then call getCustomerType
//   if (typeof availabilityType === "string") {
//     availability_type = getAvailabilityType(availabilityType);
//   }

//   const parkingspot: Partial<parkingspots> = {
//     id: spotId,
//     availability_type: availability_type,
//     // Include other fields if necessary
//   };

//   const newParkingspot = await createOrUpdate(parkingspot);
  

//   return json({ success: true, parkingspotId: newParkingspot.id });
// };

// export default function RentalAvailabilityType() {
//   const [selectedValue, setSelectedValue] = React.useState("");
//   const fetcher = useFetcher();
//   const useLoader = useLoaderData();
//   const navigate = useNavigate();
//   const [back, setBack] = useState("");

//   const handleChange = (value: string) => {
//     setSelectedValue(value);
//   };

//   const handleNext = () => {
//     fetcher.submit({ selectedValue }, { method: "post" });
//   };

//   React.useEffect(() => {
//     if (useLoader) {
//       if (!useLoader.error) {
//         setBack(`/rental/${useLoader.id}/location`);
//         setSelectedValue(useLoader.availability_type);
//       }
//     }

//     if (fetcher.data?.success) {
//       navigate(`/rental/${fetcher.data.parkingspotId}/availability`);
//     }
//   }, [fetcher.data, navigate, useLoader]);

//   return (
//     <>
//       <section className="rentalLocation">
//         <div className="inner">
//           <h1>Hvilken udlejningsform vil du oprette?</h1>
//           <p>Fortæl os hvor lejerne kan finde din parkeringsplads.</p>
//           <Form>
//             <div className="rental-type-options">
//               <div className="private-option">
//                 <Radio
//                   checked={selectedValue === "OneTime"}
//                   onChange={() => handleChange("OneTime")}
//                   value="OneTime"
//                   name="radio-buttons"
//                   inputProps={{ "aria-label": "OneTime" }}
//                 />
//                 <p>Engangsparkering</p>
//               </div>
//               <div className="business-option">
//                 <Radio
//                   checked={selectedValue === "Repeatable"}
//                   onChange={() => handleChange("Repeatable")}
//                   value="Repeatable"
//                   name="radio-buttons"
//                   inputProps={{ "aria-label": "Repeatable" }}
//                 />
//                 <p>Gentagende parkering</p>
//               </div>
//             </div>
//           </Form>
//         </div>
//       </section>
//       <Suspense>
//         {useLoader && !useLoader.error ? (
//           <RentalNavigation
//             back={back}
//             start={30}
//             onNext={handleNext}
//           ></RentalNavigation>
//         ) : (
//           <div className="min-h-max"></div>
//         )}
//       </Suspense>
//     </>
//   );
// }
