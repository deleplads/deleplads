"use client";
import { Link } from "@remix-run/react";
import BasicCard from "./Cards";

function Popular() {
  return (
    <section className="popular">
      <div className="popularInner">
        <div className="heading">
          <h1>Populære parkeringspladser</h1>
          <Link to={"/udleje"} id="contact" className="headingItem">
            Vis flere →
          </Link>
        </div>
        <span>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
        </span>
      </div>
    </section>
  );
}
export default Popular;
