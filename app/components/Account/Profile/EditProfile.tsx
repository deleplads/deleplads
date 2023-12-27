"use client";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, FormHelperText, TextField } from "@mui/material";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import {
  Form,
  useActionData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import { getYearsRange } from "utils/account/profile/profileUtils";
import toast, { Toaster } from "react-hot-toast";
import type { profiles } from "@prisma/client";
import {
  validateAddressFields,
  validateBirthDateFields,
  validateFirstName,
  validateLastName,
  validatePhoneNumber,
  validatePostalCode,
} from "helpers/profileValidations";
import type { ProfileProps } from "../../../../types/profile.prop";

type EditProfileProps = {
  profile: profiles;
};

function EditProfile(props: ProfileProps) {
  const [profileImageUrl, setProfileImageUrl] = useState("");

  useEffect(() => {
    // This code will run only on the client side after component mounts
    if (props.profile.profile_image_buffer?.data) {
      const arrayBuffer = new Uint8Array(
        props.profile.profile_image_buffer.data
      ).buffer;
      const blob = new Blob([arrayBuffer], { type: "image/*" });
      const url = URL.createObjectURL(blob);
      setProfileImageUrl(url);
    }
  }, [props.profile.profile_image_buffer?.data]); // Dependency array ensures this runs only when the data changes

  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // Show loading toast or dismiss it when the form is submitted
  useEffect(() => {
    if (isSubmitting) {
      toast.loading("Sender formularen..");
    } else {
      toast.dismiss();
    }
  }, [isSubmitting]);

  // Show success/error toast when the form is being submitted or actionData returns error or success
  useEffect(() => {
    if (!isSubmitting && actionData?.error) {
      toast.error(actionData.error);
    }
    if (!isSubmitting && actionData?.success) {
      toast.success(actionData.success);
    }
  }, [isSubmitting, actionData?.error, actionData?.success]);

  const [formData, setFormData] = useState({
    firstName: props.profile.first_name,
    lastName: props.profile.last_name,
    birthDay: props.profile.birth_date
      ? new Date(props.profile.birth_date).getDate().toString()
      : "",
    birthMonth: props.profile.birth_date
      ? new Date(props.profile.birth_date).getMonth().toString()
      : "",
    birthYear: props.profile.birth_date
      ? new Date(props.profile.birth_date).getFullYear().toString()
      : "",
    address: props.profile.address || "",
    city: props.profile.city || "",
    postalCode: props.profile.postal_code
      ? props.profile.postal_code.toString()
      : "",
    phoneNumber: props.profile.phone_number
      ? props.profile.phone_number.toString()
      : "",
    profileImageUrl: profileImageUrl ? profileImageUrl : "",
  });
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [birthDateError, setBirthDateError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const newFormData = {
        ...prevFormData,
        [name]: value,
      };

      // We need to perform form validation within this callback so we can ensure that we get the latest
      // form data and that we are not lagging behind the current state.
      if (name === "firstName") {
        setFirstNameError(validateFirstName(value));
      }
      if (name === "lastName") {
        setLastNameError(validateLastName(value));
      }
      if (name === "postalCode") {
        setPostalCodeError(validatePostalCode(newFormData.postalCode));
      }

      return newFormData;
    });
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setProfileImageUrl(URL.createObjectURL(event.target.files[0]));
  };

  const submit = useSubmit();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const birthDateValidationError = validateBirthDateFields(
      formData.birthYear,
      formData.birthMonth,
      formData.birthDay
    );
    setBirthDateError(birthDateValidationError);
    const addressValidationError = validateAddressFields(
      formData.address,
      formData.postalCode,
      formData.city
    );
    setAddressError(addressValidationError);
    const phoneNumberValidationError = validatePhoneNumber(
      formData.phoneNumber
    );
    setPhoneNumberError(phoneNumberValidationError);

    // we check directly on the validation errors and not the React state because the state
    // is updated asynchronously and we won't catch the errors here
    if (
      !firstNameError &&
      !lastNameError &&
      !birthDateValidationError &&
      !addressValidationError &&
      !phoneNumberValidationError &&
      !postalCodeError
    ) {
      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("birthDay", formData.birthDay);
      formDataToSend.append("birthMonth", formData.birthMonth);
      formDataToSend.append("birthYear", formData.birthYear);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("postalCode", formData.postalCode);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      if (selectedFile) {
        formDataToSend.append("profileImage", selectedFile);
      }
      formDataToSend.append("profileId", props.profile.id);

      submit(formDataToSend, {
        method: "post",
        action: "/konto/profil",
        encType: "multipart/form-data",
      });
    } else {
      toast.error(
        "Formularen har nogle fejl. Du kan rette dem og prøve at gemme igen."
      );
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="angry-grid">
          <div id="item-0">
            <h1>Redigér profil</h1>
          </div>
          <div id="item-1">
            <InputLabel
              className="InputLabel"
              variant="standard"
              htmlFor="uncontrolled-native"
            >
              Navn
            </InputLabel>
            <TextField
              name="firstName"
              className="Textfield"
              id=""
              placeholder="Fornavn"
              variant="outlined"
              value={formData.firstName}
              label="Fornavn"
              error={!!firstNameError}
              helperText={firstNameError}
              onChange={handleInputChange}
            />
          </div>
          <div id="item-2">
            <InputLabel
              className="InputLabel"
              variant="standard"
              htmlFor="uncontrolled-native"
            >
              &nbsp;
            </InputLabel>
            <TextField
              name="lastName"
              className="Textfield"
              id=""
              placeholder="Efternavn"
              variant="outlined"
              value={formData.lastName}
              label="Efternavn"
              error={!!lastNameError}
              helperText={lastNameError}
              onChange={handleInputChange}
            />
          </div>
          <div id="item-3">
            <InputLabel
              className="InputLabel"
              variant="standard"
              htmlFor="uncontrolled-native"
            >
              Fødselsdag
            </InputLabel>
            <Box>
              <FormControl fullWidth error={!!birthDateError}>
                <InputLabel id="">Dag</InputLabel>
                <Select
                  name="birthDay"
                  labelId=""
                  id=""
                  label=""
                  value={formData.birthDay}
                  onChange={handleInputChange}
                >
                  <MenuItem value={""}>Vælg dag</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={13}>13</MenuItem>
                  <MenuItem value={14}>14</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={17}>17</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={21}>21</MenuItem>
                  <MenuItem value={22}>22</MenuItem>
                  <MenuItem value={23}>23</MenuItem>
                  <MenuItem value={24}>24</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={26}>26</MenuItem>
                  <MenuItem value={27}>27</MenuItem>
                  <MenuItem value={28}>28</MenuItem>
                  <MenuItem value={29}>29</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={31}>31</MenuItem>
                </Select>
                <FormHelperText className="FormHelperText">
                  {!!birthDateError ? birthDateError : "Vises ikke offentligt."}
                </FormHelperText>
              </FormControl>
            </Box>
          </div>
          <div id="item-4">
            <InputLabel
              className="InputLabel"
              variant="standard"
              htmlFor="uncontrolled-native"
            >
              &nbsp;
            </InputLabel>
            <Box>
              <FormControl fullWidth error={!!birthDateError}>
                <InputLabel id="">Måned</InputLabel>
                <Select
                  name="birthMonth"
                  labelId=""
                  id=""
                  label=""
                  value={formData.birthMonth}
                  onChange={handleInputChange}
                >
                  <MenuItem value={""}>Vælg måned</MenuItem>
                  <MenuItem value={0}>Januar</MenuItem>
                  <MenuItem value={1}>Februar</MenuItem>
                  <MenuItem value={2}>Marts</MenuItem>
                  <MenuItem value={3}>April</MenuItem>
                  <MenuItem value={4}>Maj</MenuItem>
                  <MenuItem value={5}>Juni</MenuItem>
                  <MenuItem value={6}>Juli</MenuItem>
                  <MenuItem value={7}>August</MenuItem>
                  <MenuItem value={8}>September</MenuItem>
                  <MenuItem value={9}>Oktober</MenuItem>
                  <MenuItem value={10}>November</MenuItem>
                  <MenuItem value={11}>December</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div id="item-5">
            <InputLabel
              className="InputLabel"
              variant="standard"
              htmlFor="uncontrolled-native"
            >
              &nbsp;
            </InputLabel>
            <Box>
              <FormControl fullWidth error={!!birthDateError}>
                <InputLabel id="">År</InputLabel>
                <Select
                  name="birthYear"
                  labelId=""
                  id=""
                  value={formData.birthYear}
                  label=""
                  onChange={handleInputChange}
                >
                  <MenuItem value={""}>Vælg år</MenuItem>
                  {getYearsRange().map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
          <div id="item-6">
            <InputLabel
              className="InputLabel"
              variant="standard"
              htmlFor="uncontrolled-native"
            >
              Adresse
            </InputLabel>
            <TextField
              name="address"
              className="Textfield"
              id="demo-helper-text-misaligned"
              placeholder="F.eks. Prins Jørgens Gård 11"
              value={formData.address}
              label="Addresse"
              error={!!addressError}
              helperText={addressError}
              onChange={handleInputChange}
            />
          </div>
          <div id="item-7">
            <InputLabel
              className="InputLabel"
              variant="standard"
              htmlFor="uncontrolled-native"
            >
              Postnummer og by
            </InputLabel>
            <TextField
              name="postalCode"
              className="Textfield"
              id="demo-helper-text-misaligned"
              placeholder="F.eks. 1218"
              value={formData.postalCode}
              label="Postnummer"
              error={!!addressError || !!postalCodeError}
              helperText={addressError || postalCodeError}
              onChange={handleInputChange}
            />
          </div>
          <div id="item-8">
            <InputLabel
              className="InputLabel"
              variant="standard"
              htmlFor="uncontrolled-native"
            >
              &nbsp;
            </InputLabel>
            <TextField
              name="city"
              className="Textfield"
              id="demo-helper-text-misaligned"
              placeholder="F.eks. København"
              value={formData.city}
              label="By"
              error={!!addressError}
              helperText={addressError}
              onChange={handleInputChange}
            />
          </div>
          <div id="item-9">
            <InputLabel
              className="InputLabel"
              variant="standard"
              htmlFor="uncontrolled-native"
            >
              Mobiltelefonnummer
            </InputLabel>
            <TextField
              name="phoneNumber"
              className="Textfield"
              id="demo-helper-text-misaligned"
              label="Mobiltelefonnummer"
              placeholder="F.eks. 11223344"
              value={formData.phoneNumber}
              error={!!phoneNumberError}
              helperText={phoneNumberError}
              onChange={handleInputChange}
            />
          </div>

          <div id="item-10">
            <div className="EditProfilePicture">
              <InputLabel
                className="InputLabel"
                variant="standard"
                htmlFor="uncontrolled-native"
              >
                Billede
              </InputLabel>
              <Avatar
                className="Avatar"
                alt="Bruger Profil Billede"
                src={profileImageUrl}
              />
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
                id="image-input"
              />
              <label htmlFor="image-input">
                <Button variant="outlined" component="span">
                  Vælg fil
                </Button>
              </label>
              {selectedFile && <span>{selectedFile.name}</span>}
              <input type="hidden" name="profileId" value={props.profile.id} />
            </div>
          </div>
          <div id="item-11">
            <Button
              type="submit"
              variant="contained"
              name="_action"
              value="updateProfile"
              disabled={isSubmitting}
            >
              Gem
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default EditProfile;
