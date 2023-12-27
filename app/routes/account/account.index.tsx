import { useOutletContext  } from "@remix-run/react";
import { requireUserId } from "utils/auth.server";
import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  
  return null;
};

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
