import { Suspense } from "react";
import { Await, useOutletContext } from "@remix-run/react";
import EditProfile from "~/components/Account/Profile/EditProfile";
import BasicCard from "~/components/Cards";
import ListingsCard from "~/components/ListingsCard";

export default function Listings() {
  const data = useOutletContext();

  return (
    <section className="account listings">
      <div className="inner">
        <h1>{data?.profile?.first_name + "s udlejninger"}</h1>
        <div className="accountListings">
          <ListingsCard></ListingsCard>
        </div>
      </div>
    </section>
  );
}
