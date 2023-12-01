import { Suspense } from 'react';
import { Await, useOutletContext } from '@remix-run/react';
import EditProfile from '~/components/Account/Profile/EditProfile';
import { ActionFunction } from '@remix-run/node';
import { updateProfile } from 'utils/account/profile/profile.server';
import { validateAddressFields, validateBirthDateFields, validateNames, validatePhoneNumber, validatePostalCode } from 'helpers/profileValidations';
import updateProfiles from "types/Profiles"
import { createClient } from '@supabase/supabase-js';
import { supabaseClient } from 'utils/supabase.client';


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

  const formData = await request.formData();
  const profileForm = Object.fromEntries<updateProfiles>(formData);


  // todo: figure out issue with import from supabase.client.ts.
  // and 
// [1] {
// [1]   statusCode: '403',
// [1]   error: 'Unauthorized',
// [1]   message: 'new row violates row-level security policy'
// [1] }
  // const supabaseClient = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
  // const { data, error } = await supabaseClient
  //   .storage
  //   .from('profile_image')
  //   .upload('public/avatar1.png', profileForm.image, {
  //     cacheControl: '3600',
  //     upsert: false
  //   })
  // console.log(data)
  // console.log(error)

  // return null;

  
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
