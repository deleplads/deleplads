"use client";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, FormHelperText, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import profilePicture from "public/profile-picture-placeholder.jpg"
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { getYearsRange } from "utils/profile/profileUtils";
import toast, { Toaster } from "react-hot-toast";
import type { profiles } from "@prisma/client";


type EditProfileProps = {
  profile: profiles
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

  // An error or succes happened after submitting the form
  useEffect(() => {
    if (!isSubmitting && actionData?.error) {
      toast.error(actionData.error);
    }
    if (!isSubmitting && actionData?.success) {
      toast.success(actionData.success);
    }
  }, [isSubmitting, actionData?.error, actionData?.success]);

  const yearsRange = getYearsRange();
  const [formData, setFormData] = useState({
    firstName: profile.profile.first_name,
    lastName: profile.profile.last_name,
    birthDay: profile.profile.birth_date ? new Date(profile.profile.birth_date).getDate() : null,
    birthMonth: profile.profile.birth_date ? new Date(profile.profile.birth_date).getMonth() : null,
    birthYear: profile.profile.birth_date ? new Date(profile.profile.birth_date).getFullYear() : null,
    address: profile.profile.address,
    city: profile.profile.city,
    postalCode: profile.profile.postal_code,
    phoneNumber: profile.profile.phone_number
  });

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }));
};


  const [firstNameError, setFirstNameError] = useState('');
  const validateFirstName = () => {
    if (!formData.firstName) {
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
              value={formData.firstName}
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
              <FormControl fullWidth>
                <InputLabel id="">Dag</InputLabel>
                <Select
                  name="birthDay"
                  labelId=""
                  id=""
                  label=""
                  value={formData.birthDay}
                  onChange={handleInputChange}
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
                  value={formData.birthMonth}
                  onChange={handleInputChange}
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
                  value={formData.birthYear}
                  label=""
                  onChange={handleInputChange}
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
              value={formData.address}
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
              label="Postnummer"
              placeholder="F.eks. 1218"
              value={formData.postalCode}
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
              label="By"
              placeholder="F.eks. København"
              value={formData.city}
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
