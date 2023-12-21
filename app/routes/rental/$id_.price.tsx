import {
  Form,
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
  LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";
import React, { Suspense, useEffect, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";
import toast from "react-hot-toast";
import { requireUserId } from "utils/auth.server";
import fetchParkingSpotData from "utils/parkingspot/fetchAndRequireAuth.server";
import rental from "~/styles/rental.css";
import { price } from "@prisma/client";
import createOrUpdatePrice from "utils/parkingspot/createOrUpdatePrices.server";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: rental }];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Note til udlejning" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const parkingspot = await fetchParkingSpotData(request, params);
  const spotId = params.id;

  if (typeof spotId === "string" && spotId && parkingspot?.prices == null) {
    const newPrice = await createOrUpdatePrice({
      recommended_price: 23,
      spot_id: spotId,
    });
    return json({ parkingspot: parkingspot, priceId: newPrice.spot_id });
  }
  return json({ parkingspot: parkingspot });
};

export const action: ActionFunction = async ({ request, params }) => {
  await requireUserId(request);
  const formData = await request.formData();

  const formValues = {
    noon_price: formData.get("noon_price")
      ? Number(formData.get("noon_price"))
      : null,
    morning_price: formData.get("morning_price")
      ? Number(formData.get("morning_price"))
      : null,
    evening_price: formData.get("evening_price")
      ? Number(formData.get("evening_price"))
      : null,
    weekend_price: formData.get("weekend_price")
      ? Number(formData.get("weekend_price"))
      : null,
  };

  const parkingspotId = params.id;

  const parkingspot: Partial<price> = {
    evening_price: formValues.evening_price,
    morning_price: formValues.morning_price,
    noon_price: formValues.noon_price,
    weekend_price: formValues.weekend_price,
    spot_id: parkingspotId,
  };

  const newParkingspot = await createOrUpdatePrice(parkingspot);

  return json({ success: true, parkingspotId: newParkingspot.spot_id });
};

export default function RentalPrices() {
  const [isFormEnabled, setIsFormEnabled] = useState(false);
  const [prices, setPrices] = useState({
    noon_price: "",
    morning_price: "",
    evening_price: "",
    weekend_price: "",
  });

  const handleCheckboxChange = () => {
    setIsFormEnabled(!isFormEnabled);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPrices((prevAttrs: any) => ({
      ...prevAttrs,
      [name]: value,
    }));
  };

  const fetcher = useFetcher();
  const useLoader = useLoaderData();
  const navigate = useNavigate();
  const params = useParams();
  const [back, setBack] = useState(`/opret-udlejning/${params.id}/notes`);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const handleNext = () => {
    if (!isFormEnabled) {
      fetcher.submit(
        {
          noon_price: "24",
          morning_price: "24",
          evening_price: "24",
          weekend_price: "24",
        },
        { method: "post" }
      );
    } else {
      fetcher.submit(prices, { method: "post" });
    }
  };

  useEffect(() => {
    if (useLoader) {
      if (!useLoader.error) {
        setBack(`/opret-udlejning/${useLoader.parkingspot.id}/notes`);
        setPrices({
          evening_price: useLoader.parkingspot.prices?.evening_price || "",
          morning_price: useLoader.parkingspot.prices?.morning_price || "",
          noon_price: useLoader.parkingspot.prices?.noon_price || "",
          weekend_price: useLoader.parkingspot.prices?.weekend_price || "",
        });
      } else if (useLoader?.error) {
        toast.error(useLoader.error);
      }
    }
  }, [navigate, useLoader]);

  useEffect(() => {
    if (fetcher.data) {
      if (!isSubmitting && fetcher.data.error) {
        toast.error(fetcher.data.error);
      } else if (!isSubmitting && fetcher.data.success) {
        navigate(`/opret-udlejning/${fetcher.data.parkingspotId}/receipt`);
      }
    }
  }, [fetcher.data, isSubmitting, navigate]);

  return (
    <>
      <section className="rentalLocation">
        <div className="inner">
          <h1>Standard timetakst</h1>
          <p>
            Vores prisforslag er baseret på en sammenligning af din specifikke
            bilmodel med de aktuelle markedspriser og efterspørgsel.
          </p>
          <div className="recommended-price">
            <h2>DKK 24</h2>
            <p>per time</p>
          </div>
          <Form>
            <div className="w-full">
              <div className="set-custom-price">
                <Checkbox
                  checked={isFormEnabled}
                  onChange={handleCheckboxChange}
                />
                <span>
                  <h4>Sæt tilpasset pris</h4>
                  <p>
                    Din bil står altid på samme sted, på en reserveret plads.
                  </p>
                </span>
              </div>
              <div className="custom-price">
                <h3>Morgentakst</h3>
                <TextField
                  id="outlined-basic"
                  label="Morgentakst"
                  variant="outlined"
                  name="morning_price"
                  onChange={handleChange}
                  value={prices.morning_price}
                  disabled={!isFormEnabled}
                />
              </div>
              <hr />
              <div className="custom-price">
                <h3>Eftermiddagstakst</h3>
                <TextField
                  id="outlined-basic"
                  label="Eftermiddagstakst"
                  name="noon_price"
                  onChange={handleChange}
                  value={prices.noon_price}
                  variant="outlined"
                  disabled={!isFormEnabled}
                />
              </div>
              <hr />
              <div className="custom-price">
                <h3>Aftentakst</h3>
                <TextField
                  id="outlined-basic"
                  label="Aftentakst"
                  onChange={handleChange}
                  variant="outlined"
                  name="evening_price"
                  value={prices.evening_price}
                  disabled={!isFormEnabled}
                />
              </div>
              <hr />
              <div className="custom-price">
                <h3>WeekendsTakst</h3>
                <TextField
                  id="outlined-basic"
                  label="WeekendsTakst"
                  onChange={handleChange}
                  name="weekend_price"
                  value={prices.weekend_price}
                  variant="outlined"
                  disabled={!isFormEnabled}
                />
              </div>
            </div>
          </Form>
        </div>
      </section>
      <Suspense>
        {useLoader && !useLoader.error ? (
          <RentalNavigation
            back={back}
            onNext={handleNext}
            start={87}
          ></RentalNavigation>
        ) : (
          <div className="min-h-max"></div>
        )}
      </Suspense>
    </>
  );
}
