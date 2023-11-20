import { Suspense } from 'react';
import { Await, Link, isRouteErrorResponse, useOutletContext, useRouteError } from '@remix-run/react';
import EditProfile from '~/components/ProfileSettings/EditProfile';
import { ActionFunction, json, redirect } from '@remix-run/node';
import { deleteProfile, updateProfile } from 'utils/profile.server';
import { logout } from 'utils/auth.server';

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
  const formObj = Object.fromEntries(formData);

  if (formObj._action === 'deleteUser') {
    await deleteProfile(formObj.profileId);
    return await logout(request);
  }

  // Validating the form data
  if (formObj.firstName  == '' || formObj.lastName == '') {
    return { error: 'Felterne for fornavn og efternavn må ikke være tomme.' };
  }
  
  const allAddressFieldsOrNone =
    (formObj.address && formObj.postalCode && formObj.city) ||
    (!formObj.address && !formObj.postalCode && !formObj.city);
  if (!allAddressFieldsOrNone) {
    return { error: 'Udfyld venligst alle adressefelter eller lad dem alle være tomme.' };
  }

  const allBirthDateFieldsOrNone =
    (formObj.birthYear != '' && formObj.birthMonth != '' && formObj.birthDay != '') ||
    (formObj.birthYear == '' && formObj.birthMonth == '' && formObj.birthDay == '');
  if (!allBirthDateFieldsOrNone) {
    return { error: 'Udfyld venligst alle fødselsdatofelter eller lad dem alle være tomme.' };
  }

  if (formObj.phoneNumber != '' && !isValidPhoneNumber(formObj.phoneNumber)) {
    return { error: 'Ugyldigt telefonnummer. Telefonnummeret skal indeholde 8 cifre.' };
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

function isValidPhoneNumber(phoneNumber: string) {
  const regex = /^\d{8}$/;
  return regex.test(phoneNumber);
}
