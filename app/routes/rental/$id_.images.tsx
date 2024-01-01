import { Button } from "@mui/material";
import {
  Form,
  Link,
  useFetcher,
  useLoaderData,
  useNavigate,
  useNavigation,
  useParams,
} from "@remix-run/react";
import {
  ActionFunction,
  json,
  LinksFunction,
  type LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import RentalNavigation from "~/components/RentalCreation/RentalNavigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import fetchParkingSpotData from "utils/parkingspot/fetchAndRequireAuth.server";
import { requireUserId } from "utils/auth.server";
import rental from "~/styles/rental.css";
import {
  downloadParkingspotImageAsBuffer,
  uploadParkingspotImage,
} from "utils/parkingspot/spotImage.server";
import type { LoaderResponse } from "utils/types.server";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: rental }];
};
export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Upload et billede af din parkeringsplads" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const spot = await fetchParkingSpotData(request, params) as LoaderResponse;

  if (spot && typeof spot.id === "string") {
    const { data } = await downloadParkingspotImageAsBuffer(request, spot.id);
    if (data) {
      return json({ image: data, id: spot.id });
    } else {
      return json({ id: spot.id });
    }
  }
};

export default function RentalImages() {
  const fetcher = useFetcher();
  const useLoader = useLoaderData();
  const navigate = useNavigate();
  const params = useParams();
  const [back, setBack] = useState(`/opret-udlejning/${params.id}/noter`);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setProfileImageUrl(URL.createObjectURL(file));
  };

  const handleNext = () => {
    // Create a new FormData instance
    const formData = new FormData();

    // Append the selected file
    if (selectedFile) {
      formData.append("selectedFile", selectedFile);
    }

    // Use fetcher to submit the form data
    fetcher.submit(formData, {
      method: "post",
      encType: "multipart/form-data",
    });
  };

  useEffect(() => {
    if (useLoader) {
      if (!useLoader.error) {
        //Check if there is an image already
        if (useLoader.image && useLoader.image.data) {
          const arrayBuffer = new Uint8Array(useLoader.image.data).buffer;
          const blob = new Blob([arrayBuffer], { type: "image/*" });
          const url = URL.createObjectURL(blob);
          setProfileImageUrl(url);
        }
        setBack(`/opret-udlejning/${useLoader.id}/noter`);
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
        navigate(`/opret-udlejning/${fetcher.data.parkingspotId}/pris`);
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
              variant={profileImageUrl ? "text" : "contained"}
              component="label"
              className="upload-image"
            >
              {profileImageUrl ? (
                <img
                  className="max-w-[300px] max-h-[300px]"
                  src={profileImageUrl}
                  alt="parkingspot"
                />
              ) : (
                <>
                  <h2>Upload fil</h2>{" "}
                  <AddPhotoAlternateOutlinedIcon className="image-icon" />{" "}
                </>
              )}
              <input
                type="file"
                name="selectedFile"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
                id="image-input"
              />
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

export const action: ActionFunction = async ({ request, params }) => {
  await requireUserId(request);
  const formData = await request.formData();
  const parkingspotId = params.id;
  const file = formData.get("selectedFile");

  if (file instanceof File && typeof parkingspotId === "string") {
    const { error } = await uploadParkingspotImage(
      request,
      file,
      parkingspotId
    );
    if (error) {
      if (error.statusCode == "413") {
        // Content too large
        return {
          error:
            "Profilbilledet er for stort. Prøv at uploade et mindre billede.",
        };
      } else {
        return {
          error:
            "Der opstod en fejl under upload af profilbilledet. Prøv venligst igen med et andet billede.",
        };
      }
    }
  } else {
    return json({ error: "Du skal vælge et billede til din parkeringsplads" });
  }
  return json({ success: true, parkingspotId: parkingspotId });
};
