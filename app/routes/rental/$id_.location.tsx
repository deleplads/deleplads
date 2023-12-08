import { TextField } from "@mui/material";
import {
  Form,
  useFetcher,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import Switch from "@mui/material/Switch";
import {
  LoaderFunction,
  type LinksFunction,
  type V2_MetaFunction,
  ActionFunction,
} from "@remix-run/node";
import RentalNavigation from "~/components/RentalCreationNavigation/RentalNavigation";
import rental from "~/styles/rental.css";
import { Suspense, useEffect, useState } from "react";
import { createOrUpdate } from "utils/parkingspot/createOrUpdate.server";
import type { parkingspots } from "@prisma/client";
import toast, { Toaster } from "react-hot-toast";
import fetchParkingSpotData from "utils/parkingspot/FetchAndRequireAuth";
import {
  validateAddressFields,
  validatePostalCode,
} from "helpers/rentalAddressValidations";
import { convertToBoolean } from "helpers/helpers";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: rental }];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Beliggenhed af udlejning" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();

  const formValues = {
    street: formData.get("street")?.toString() || null,
    street_nr: formData.get("street_nr")
      ? Number(formData.get("street_nr"))
      : null,
    city: formData.get("city")?.toString() || null,
    postal_code: formData.get("postal_code")
      ? Number(formData.get("postal_code"))
      : null,
    show_street_nr: convertToBoolean(formData.get("show_street_nr")),
  };

  if (!formValues.street || !formValues.city || formValues.street_nr === null) {
    return { error: "Street, city, and street number are required." };
  }

  if (
    formValues.postal_code === null ||
    formValues.postal_code.toString().length < 4
  ) {
    return { error: "Postal code must be at least 4 digits." };
  }
  const parkingspotId = params.id;

  const parkingspot: Partial<parkingspots> = {
    city: formValues.city,
    street: formValues.street,
    street_nr: formValues.street_nr,
    postal_code: formValues.postal_code,
    show_street_nr: formValues.show_street_nr,
    id: parkingspotId,
  };

  const newParkingspot = await createOrUpdate(parkingspot);

  return { success: true, parkingspotId: newParkingspot.id }; // or other appropriate response
};

export const loader: LoaderFunction = async ({ request, params }) => {
  return await fetchParkingSpotData(request, params);
};

export default function RentalLocation() {
  const useLoader = useLoaderData();
  const [back, setBack] = useState("");
  const fetcher = useFetcher();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();
  const [addressError, setAddressError] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");

  const [formData, setFormData] = useState({
    street: "",
    street_nr: "",
    city: "",
    postal_code: "",
    show_street_nr: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement; // Type assertion
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
    }));
};


  useEffect(() => {
    if (useLoader) {
      if (!useLoader.error) {
        setBack(`/rental/${useLoader.id}/type`);

        setFormData({
          street: useLoader.street || "",
          street_nr: useLoader.street_nr ? useLoader.street_nr.toString() : "",
          city: useLoader.city || "",
          postal_code: useLoader.postal_code
            ? useLoader.postal_code.toString()
            : "",
          show_street_nr: useLoader.show_street_nr
        });

      }
    }
  }, [useLoader]);

  useEffect(() => {
    if (fetcher.data) {
      if (!isSubmitting && fetcher.data.error) {
        toast.error(fetcher.data.error);
      } else if (!isSubmitting && fetcher.data.success) {
        navigate(`/rental/${fetcher.data.parkingspotId}/availability`);
      }
    }
  }, [fetcher.data, isSubmitting, navigate]);

  const handleNext = () => {
    const addressValidationError = validateAddressFields(
      formData.street,
      formData.postal_code,
      formData.city,
      formData.street_nr
    );
    const postalCodevaldiation = validatePostalCode(formData.postal_code);
    setPostalCodeError(postalCodevaldiation);
    setAddressError(addressValidationError);
      
    if (!postalCodevaldiation && !addressValidationError) { 
      fetcher.submit(formData, { method: "post" });
    }
  };
  return (
    <>
      <Toaster position="top-right" />
      <section className="rentalLocation">
        <div className="inner">
          <h1>Hvor ligger din parkeringsplads?</h1>
          <p>Fortæl os hvor lejerne kan finde din parkeringsplads.</p>
          <Form>
            <TextField
              id="outlined-basic"
              label="Adresse"
              name="street"
              value={formData.street}
              onChange={handleChange}
              error={!!addressError}
              helperText={addressError}
              variant="outlined"
              className="rental-input"
            />
            <TextField
              id="outlined-basic"
              label="Husnummer"
              name="street_nr"
              value={formData.street_nr}
              onChange={handleChange}
              variant="outlined"
              className="rental-input"
            />
            <TextField
              id="outlined-basic"
              label="By"
              name="city"
              value={formData.city}
              onChange={handleChange}
              variant="outlined"
              className="rental-input"
            />
            <TextField
              id="outlined-basic"
              label="Postnummer"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
              error={!!postalCodeError}
              helperText={postalCodeError}
              variant="outlined"
              className="rental-input"
            />
            <iframe
              title="SHIT"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.579493914321!2d12.536347670690457!3d55.65536410407578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525381652cfd11%3A0x6496d86f15f53006!2sEngelbert-Petersens%20Bageri!5e0!3m2!1sda!2sdk!4v1691516861738!5m2!1sda!2sdk"
              width="100%"
              height="325"
              style={{ border: 0, marginTop: "25px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Form>
          <div className="specific-location">
            <span>
              <h3>Vis din specifikke adresse</h3>
              <p>Vælg om dit husnummer skal være synligt eller ej.</p>
            </span>
            <Switch  inputProps={{ "aria-label": "Switch demo" }} value={formData.show_street_nr} name="show_street_nr" checked={formData.show_street_nr} onChange={handleChange}/>
          </div>
        </div>
      </section>
      <Suspense>
        {useLoader && !useLoader.error ? (
          <RentalNavigation
            back={back ? back : "/rental"}
            onNext={handleNext}
            start={25}
          ></RentalNavigation>
        ) : (
          <div className="min-h-max"></div>
        )}
      </Suspense>
    </>
  );
}
