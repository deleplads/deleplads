import { Suspense } from "react";
import { Await, useOutletContext  } from "@remix-run/react";
import EditProfile from "~/components/Account/EditProfile";



export default function Profile() {
  const data = useOutletContext();

    return (
    <section className="">
     <div className="bg-black">
        {data?.profile?.first_name + " " + data?.profile?.last_name}
     </div>
    </section>
  );
}
