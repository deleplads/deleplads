import React, { Suspense } from "react";
import type { ActionFunction } from "@remix-run/node";
import { requireUserId, logout } from "utils/auth.server";
import { Await, useOutletContext } from "@remix-run/react";
import ProfileSettings from "~/components/Account/Settings/AccountSettings";
import type { accountSettingsForm } from "types/AccountSettings";
import { markUserForDeletion } from "utils/user/user.server";


export default function Payment() {
  const data = useOutletContext();

  return (
    <section className="">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={data}>
          <div className="">
            <ProfileSettings profile={data?.profile} />
          </div>
        </Await>
      </Suspense>
    </section>
  );
}

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const settingsForm = Object.fromEntries<accountSettingsForm>(formData);

  if (settingsForm._action === 'markUserForDeletion') {  
    await markUserForDeletion(userId);
   
    return await logout(request);
  }
  
  return null;
};