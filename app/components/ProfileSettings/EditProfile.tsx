"use client";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, FormHelperText, TextField } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import profilePicture from "public/profile-picture-placeholder.jpg"
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { getYearsRange } from './ProfileUtils'
import toast, { Toaster } from "react-hot-toast";

type EditProfileProps = {
  profile: {
    id: string;
    created_at: Date | null;
    first_name: string;
    last_name: string;
    birth_date: string | null;
    address: string | null;
    city: string | null;
    postal_code: number | null;
    phone_number: number | null;
  };
};
function EditProfile(profile: EditProfileProps) {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  // The form is being submitted to the backend
  useEffect(() => {
    if (isSubmitting) {
      toast.loading("Sender formularen..");
    } else {
      toast.dismiss();
    }
  }, [isSubmitting]);
  // An error happened after submitting the form
  useEffect(() => {
    if (!isSubmitting && actionData?.error) {
      toast.error(actionData.error);
    }
  }, [isSubmitting, actionData?.error]);
  // The form was submitted successfully
  useEffect(() => {
    if (!isSubmitting && actionData?.success) {
      toast.success(actionData.success);
    }
  }, [isSubmitting, actionData?.success]);

  const yearsRange = getYearsRange();

  const [firstName, setFirstName] = useState(profile.profile.first_name);
  const [lastName, setLastName] = useState(profile.profile.last_name);
  const [birthDay, setBirthDay] = useState(profile.profile.birth_date ? new Date(profile.profile.birth_date).getDate() : null);
  const [birthMonth, setBirthMonth] = useState(profile.profile.birth_date ? new Date(profile.profile.birth_date).getMonth() : null);
  const [birthYear, setBirthYear] = useState(profile.profile.birth_date ? new Date(profile.profile.birth_date).getFullYear() : null);
  const [address, setAddress] = useState(profile.profile.address);
  const [city, setCity] = useState(profile.profile.city);
  const [postalCode, setPostalCode] = useState(profile.profile.postal_code);
  const [phoneNumber, setPhoneNumber] = useState(profile.profile.phone_number);

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value);
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value);
  const handleBirthDayChange = (event: SelectChangeEvent<number | null>) => setBirthDay(event.target.value);
  const handleBirthMonthChange = (event: SelectChangeEvent<number | null>) => setBirthMonth(event.target.value);
  const handleBirthYearChange = (event: SelectChangeEvent<number | null>) => setBirthYear(event.target.value);
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => setAddress(event.target.value);
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => setCity(event.target.value);
  const handlePostalCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => setPostalCode(event.target.value);
  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(event.target.value);


  const [firstNameError, setFirstNameError] = useState('');
  const validateFirstName = () => {
    if (!firstName) {
      setFirstNameError("First name is required");
      return false;
    } else {
      setFirstNameError('');
      return true;
    }
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const isFirstNameValid = validateFirstName();

    if (!isFirstNameValid) {
      return;
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <Form method="post">
        <div className="angry-grid">
          <div id="item-0">
            <div className="ProfileEditHeader">
              <h1>Redigér profil</h1>
              <Button variant="outlined" className="Button">
                Vis profil
              </Button>
            </div>
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
              error={!!firstNameError}
              helperText={firstNameError}
              placeholder="Fornavn"
              variant="outlined"
              value={firstName}
              onChange={handleFirstNameChange}
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
              value={lastName}
              onChange={handleLastNameChange}
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
              <FormControl fullWidth>
                <InputLabel id="">Dag</InputLabel>
                <Select
                  name="birthDay"
                  labelId=""
                  id=""
                  label=""
                  value={birthDay}
                  onChange={handleBirthDayChange}
                >
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
                  Vises ikke offentligt.
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
              <FormControl fullWidth>
                <InputLabel id="">Måned</InputLabel>
                <Select
                  name="birthMonth"
                  labelId=""
                  id=""
                  label=""
                  value={birthMonth}
                  onChange={handleBirthMonthChange}
                >
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
              <FormControl fullWidth>
                <InputLabel id="">År</InputLabel>
                <Select
                  name="birthYear"
                  labelId=""
                  id=""
                  value={birthYear}
                  label=""
                  onChange={handleBirthYearChange}
                >
                  {yearsRange.map((year) => (
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
              value={address}
              onChange={handleAddressChange}
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
              label="Postnummer"
              placeholder="F.eks. 1218"
              value={postalCode}
              onChange={handlePostalCodeChange}
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
              label="By"
              placeholder="F.eks. København"
              value={city}
              onChange={handleCityChange}
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
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
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
                alt="Remy Sharp"
                src={profilePicture}
              />
              <span>
                <Button variant="outlined">Vælg fil</Button>
                <p></p>
              </span>
            </div>
          </div>
          <input type="hidden" name="profileId" value={profile.profile.id} />
          <div id="item-11">
            <Button type="submit" variant="contained" name="_action" value="updateProfile" disabled={isSubmitting}>
              Gem
            </Button>
          </div>
          <div id="item-12">
            <Button type="submit" color="error" variant="contained" name="_action" value="deleteUser" disabled={isSubmitting}>
              Slet konto
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default EditProfile;
