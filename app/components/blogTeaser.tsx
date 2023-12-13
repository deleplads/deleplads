import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper/modules";
import { Box } from "@mui/material";

function blogTeaser() {
  return (
    <main className="blogTeaser">
      <h1>Bliv en del af fællesskabet</h1>
      <p>
        På vores platform møder du lejere og udlejere, som deler en passion for
        at skabe et stærkt fællesskab, der forstærker brugeroplevelsen.
      </p>
      <div className="inner">
        <Swiper
          modules={[Scrollbar, A11y]}
          spaceBetween={24}
          slidesPerView={6}
          freeMode={true}
          mousewheel={{ releaseOnEdges: true }}
          // navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          centeredSlides={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper: any) => console.log(swiper)}
        >
          <SwiperSlide className="swiper-slide">
            <Box
              sx={{ width: "100%" }}
              component="img"
              src="../parkeringsplads2.png"
            />
            <h3>Slide 2</h3>
            <p style={{ textAlign: "left" }}>
              Learn the fundamentals of web design and development through this
              comprehensive course. tissemand
            </p>
            <a href="#">Læs om oplevelsen</a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Box
              sx={{ width: "100%" }}
              component="img"
              src="../parkeringsplads2.png"
            />
            <h3>Slide 2</h3>
            <p style={{ textAlign: "left" }}>
              Learn the fundamentals of web design and development through this
              comprehensive course. tissemand
            </p>
            <a href="#">Læs om oplevelsen</a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Box
              sx={{ width: "100%" }}
              component="img"
              src="../parkeringsplads2.png"
            />
            <h3>Slide 2</h3>
            <p style={{ textAlign: "left" }}>
              Learn the fundamentals of web design and development through this
              comprehensive course. tissemand
            </p>
            <a href="#">Læs om oplevelsen</a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Box
              sx={{ width: "100%" }}
              component="img"
              src="../parkeringsplads2.png"
            />
            <h3>Slide 2</h3>
            <p style={{ textAlign: "left" }}>
              Learn the fundamentals of web design and development through this
              comprehensive course. tissemand
            </p>
            <a href="#">Læs om oplevelsen</a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Box
              sx={{ width: "100%" }}
              component="img"
              src="../parkeringsplads2.png"
            />
            <h3>Slide 2</h3>
            <p style={{ textAlign: "left" }}>
              Learn the fundamentals of web design and development through this
              comprehensive course. tissemand
            </p>
            <a href="#">Læs om oplevelsen</a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Box
              sx={{ width: "100%" }}
              component="img"
              src="../parkeringsplads2.png"
            />
            <h3>Slide 2</h3>
            <p style={{ textAlign: "left" }}>
              Learn the fundamentals of web design and development through this
              comprehensive course. tissemand
            </p>
            <a href="#">Læs om oplevelsen</a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Box
              sx={{ width: "100%" }}
              component="img"
              src="../parkeringsplads2.png"
            />
            <h3>Slide 2</h3>
            <p style={{ textAlign: "left" }}>
              Learn the fundamentals of web design and development through this
              comprehensive course. tissemand
            </p>
            <a href="#">Læs om oplevelsen</a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Box
              sx={{ width: "100%" }}
              component="img"
              src="../parkeringsplads2.png"
            />
            <h3>Slide 2</h3>
            <p style={{ textAlign: "left" }}>
              Learn the fundamentals of web design and development through this
              comprehensive course. tissemand
            </p>
            <a href="#">Læs om oplevelsen</a>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}

export default blogTeaser;
