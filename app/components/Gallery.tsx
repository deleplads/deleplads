"use client";
import BasicCard from "./Parkingspots/Cards";
import SearchBar from "./Parkingspots/SearchBar";

function Gallery() {
  return (
    <section className="Gallery">
      <div className="GalleryInner">
        <SearchBar></SearchBar>
        <span>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
        </span>
      </div>
    </section>
  );
}
export default Gallery;
