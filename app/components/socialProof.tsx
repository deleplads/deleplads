import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"; // Import Swiper styles

function SocialProof() {
  return (
    <main className="socialProof">
      <h1>Bliv en del af fællesskabet</h1>
      <p>
        På vores platform møder du lejere og udlejere, som deler en passion for
        at skabe et stærkt fællesskab, der forstærker brugeroplevelsen.
      </p>
      <div className="inner">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper: any) => console.log(swiper)}
        >
          <SwiperSlide style={{ background: "red" }}>Slide 1</SwiperSlide>
          <SwiperSlide style={{ background: "red" }}>Slide 2</SwiperSlide>
          <SwiperSlide style={{ background: "red" }}>Slide 3</SwiperSlide>
          <SwiperSlide style={{ background: "red" }}>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}

export default SocialProof;
