import React, { Suspense } from 'react';
import { Await, useActionData, useOutletContext } from '@remix-run/react';
import EditProfile from '~/components/Account/Profile/EditProfile';
import type { ActionFunction } from '@remix-run/node';
import {
  validateAddressFields,
  validateBirthDateFields,
  validateNames,
  validatePhoneNumber,
  validatePostalCode
} from 'helpers/profileValidations';
import type { updateProfiles } from "types/Profiles"
import { updateProfile, uploadProfileImage } from "../../../utils/account/profile/profile.server";


export default function Profile() {
  const data = useOutletContext();
  // at this point, we rerender the profile component, and if the profile image is updated, we want the navbar
  // to also update its profile iamge
  data.updateProfileImageState(data.profile.profile_image_buffer);

  return (
    <section className="">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={data}>
          <div className="">
            <EditProfile profile={data?.profile}></EditProfile>
          </div>
        </Await>
      </Suspense>
    </section>
  );
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const profileForm = Object.fromEntries<updateProfiles>(formData);
  const { error } = await uploadProfileImage(request, profileForm.profileImage);

  if (error) {
    if (error.statusCode == '413') { // Content too large
      return { error: 'Profilbilledet er for stort. Prøv at uploade et mindre billede.' };
    } else {
      return { error: 'Der opstod en fejl under upload af profilbilledet. Prøv venligst igen med et andet billede.' }
    }
  }

  validateProfileForm(profileForm);

  const profileEntity = mapProfileDataToDatabaseEntity(profileForm);
  await updateProfile(profileEntity);

  return { success: 'Profil opdateret!' };
};

function validateProfileForm(formObj: updateProfiles) {
  const nameValidationResult = validateNames(formObj.firstName, formObj.lastName);
  if (nameValidationResult) {
    return { error: nameValidationResult };
  }

  const addressValidationResult = validateAddressFields(formObj.address, formObj.postalCode, formObj.city);
  if (addressValidationResult) {
    return { error: addressValidationResult };
  }

  const birthDateValidationResult = validateBirthDateFields(formObj.birthYear, formObj.birthMonth, formObj.birthDay);
  if (birthDateValidationResult) {
    return { error: birthDateValidationResult };
  }

  const postalCodeValidationResult = validatePostalCode(formObj.postalCode);
  if (postalCodeValidationResult) {
    return { error: postalCodeValidationResult };
  }

  const phoneValidationResult = validatePhoneNumber(formObj.phoneNumber);
  if (phoneValidationResult) {
    return { error: phoneValidationResult };
  }
}

function mapProfileDataToDatabaseEntity(profileData: any) {

  let birthDate = null;
  if (profileData.birthYear != '' && profileData.birthMonth != '' && profileData.birthDay != '') {
    birthDate = new Date(Date.UTC(profileData.birthYear, profileData.birthMonth, profileData.birthDay));
  }

  let profileEntity = {
    id: profileData.profileId,
    first_name: profileData.firstName,
    last_name: profileData.lastName,
    birth_date: birthDate,
    address: profileData.address,
    postal_code: parseInt(profileData.postalCode),
    city: profileData.city,
    phone_number: parseInt(profileData.phoneNumber),
  };

  return profileEntity;
}
