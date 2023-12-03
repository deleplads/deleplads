import { Button } from "@mui/material";
import {
  Form,
  Link,
  useFetcher,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import {
  ActionFunction,
  json,
  type LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import fetchParkingSpotData from "utils/parkingspot/fetchAndRequireAuth";
import { requireUserId } from "utils/auth.server";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Upload et billede af din parkeringsplads" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async ({ request, params }) => {
  return await fetchParkingSpotData(request, params);
};

export const action: ActionFunction = async ({ request, params }) => {
  await requireUserId(request);
  // const formData = await request.formData();
  // const selectedValue = formData.get('selectedValue');
  // let note: string | null = null;

  // // Check if selectedValue is a string and then call getCustomerType
  // if (typeof selectedValue === 'string' && selectedValue) {
  //   note = selectedValue;
  // }else {
  //   return json({error: "Du skal udfylde noten"})
  // }
  const parkingspotId = params.id;

  return json({ success: true, parkingspotId: parkingspotId });
  // const parkingspot: Partial<parkingspots> = {
  //    notes: note,
  //    id: parkingspotId
  // }

  //  const newParkingspot = await createOrUpdate(parkingspot);

  // return json({ success: true, parkingspotId: newParkingspot.id });
};

export default function RentalImages() {
  const [selectedValue, setSelectedValue] = useState("");
  const fetcher = useFetcher();
  const useLoader = useLoaderData();
  const navigate = useNavigate();
  const [back, setBack] = useState("");
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const handleNext = () => {
    fetcher.submit({ selectedValue }, { method: "post" });
  };

  useEffect(() => {
    if (useLoader) {
      if (!useLoader.error) {
        setSelectedValue(useLoader.notes || "");
        setBack(`/rental/${useLoader.id}/attributes`);
      } else {
        toast.error(useLoader.error);
      }
    }
  }, [navigate, useLoader]);

  useEffect(() => {
    if (fetcher.data) {
      if (!isSubmitting && fetcher.data.error) {
        toast.error(fetcher.data.error);
      } else if (!isSubmitting && fetcher.data.success) {
        navigate(`/rental/${fetcher.data.parkingspotId}/price`);
      }
    }
  }, [fetcher.data, isSubmitting, navigate]);

  return (
    <>
      <Toaster position="top-right"></Toaster>
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
        back={back}
        start={75}
        onNext={handleNext}
      ></RentalNavigation>
    </>
  );
}
