"use client";
import BasicCard from "./Cards";

function Popular() {
  return (
    <section className="popular">
      <div className="popularInner">
        <h1>Populære parkeringspladser</h1>
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
