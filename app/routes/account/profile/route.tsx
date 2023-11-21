import { Suspense } from 'react';
import { Await, Link, isRouteErrorResponse, useOutletContext, useRouteError } from '@remix-run/react';
import EditProfile from '~/components/ProfileSettings/EditProfile';
import { ActionFunction, json, redirect } from '@remix-run/node';
import { deleteProfile, updateProfile } from 'utils/profile.server';
import { logout } from 'utils/auth.server';
import { validateAddressFields, validateBirthDateFields, validateNames, validatePhoneNumber } from 'helpers/profileValidations';
import updateProfiles from "types/Profiles"
export default function Profile() {
  const data = useOutletContext();

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
  // todo: remove line used for testing purposes
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));

  const formData = await request.formData();
  const formObj = Object.fromEntries<updateProfiles>(formData);

  if (formObj._action === 'deleteUser') {
    await deleteProfile(formObj.profileId);
    return await logout(request);
  }

  const nameValidationResult = validateNames(formObj.firstName, formObj.lastName);
  if (nameValidationResult?.error) {
      return nameValidationResult;
  }
  
  const addressValidationResult = validateAddressFields(formObj.address, formObj.postalCode, formObj.city);
  if (addressValidationResult?.error) {
      return addressValidationResult;
  }
  
  const birthDateValidationResult = validateBirthDateFields(formObj.birthYear, formObj.birthMonth, formObj.birthDay);
  if (birthDateValidationResult?.error) {
      return birthDateValidationResult;
  }

  const phoneValidationResult = validatePhoneNumber(formObj.phoneNumber);
  if (phoneValidationResult?.error) {
    return phoneValidationResult
  }

  const profileEntity = mapProfileDataToDatabaseEntity(formObj);
  await updateProfile(profileEntity);

  return { success: 'Profil opdateret!' };
};

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
