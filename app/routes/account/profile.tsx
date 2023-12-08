import { Suspense } from "react";
import { Await, useOutletContext  } from "@remix-run/react";
import EditProfile from "~/components/ProfileSettings/EditProfile";



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