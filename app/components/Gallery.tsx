"use client";
import BasicCard from "./Cards";
import SearchBar from "./SearchBar";

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
