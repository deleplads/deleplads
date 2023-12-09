import { Suspense } from 'react';
import { Await, useLoaderData, useOutletContext } from '@remix-run/react';
import EditProfile from '~/components/Account/Profile/EditProfile';
import { ActionFunction, LoaderFunction, json } from '@remix-run/node';
import { validateAddressFields, validateBirthDateFields, validateNames, validatePhoneNumber, validatePostalCode } from 'helpers/profileValidations';
import updateProfiles from "types/Profiles"
import { createServerClient, type CookieOptions, parse, serialize } from '@supabase/ssr'
import { getUserId, requireUserId } from "utils/auth.server";
import supabase from 'utils/supabase.server';
import { getProfileFromUserId } from 'utils/account/profile/profile.server';

// export const loader: LoaderFunction = async ({ request }) => {

//   const userId = await requireUserId(request);
//   const profile = await getProfileFromUserId(userId);

//   const supabaseClient = await supabase(request);
//   const { data, error } = await supabaseClient.storage
//     .from('users')
//     .download(`${userId}/profile_image`);

//   if (data) {
//     const blob = data;
//     const buffer = Buffer.from(await blob.arrayBuffer());
//     // return { buffer: buffer, type: data?.type };
//     return buffer;
//   }

// return null;
// }

export default function Profile() {
  // const loaderData = useLoaderData();
  // console.log("Loader data:")
  // console.log(loaderData)
  // console.log(URL.createObjectURL(loaderData))

  const data = useOutletContext();
  // data.profile.buffer = loaderData;

  return (
    <section className="">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={data}>
          <div className="">
            <EditProfile profile={data?.profile}></EditProfile>
            {/* <EditProfile profile={loaderData}></EditProfile> */}
          </div>
        </Await>
      </Suspense>
    </section>
  );
}

export const action: ActionFunction = async ({ request }) => {

  const formData = await request.formData();
  const profileForm = Object.fromEntries<updateProfiles>(formData);

  const userId = await getUserId(request);

  const supabaseClient = await supabase(request);
  const { data, error } = await supabaseClient
    .storage
    .from('users')
    .upload(`${userId}/profile_image`, profileForm.profileImage, {
      cacheControl: '3600',
      upsert: true,
      contentType: 'image/*'
    })
  // console.log(data)
  if (error) {
    console.log(error)
    if (error.statusCode == '413') { // Content too large
      return { error: 'Profilbilledet er for stort. Prøv at uploade et mindre billede.' };
    } else {
      return { error: 'Der opstod en fejl under upload af profilbilledet. Prøv venligst igen med et andet billede.' }
    }
  }

  // validateProfileForm(profileForm);

  // const profileEntity = mapProfileDataToDatabaseEntity(profileForm);
  // await updateProfile(profileEntity);

  // const publicUrlData = supabaseClient.storage
  //   .from('users')
  //   .getPublicUrl(`${userId}/profile_image`);
  // // add the profile image to the profile object
  // console.log(publicUrlData)
  return { success: 'Profil opdateret!', profileImageUrl: publicUrlData?.data?.publicUrl };
  // return null;
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
