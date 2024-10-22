import React from "react";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

import img1 from "./todo app home contact-resized.jpg";
import img2 from "./todo app home dashboard-resized.jpg";
import img3 from "./todo app home page - redized.jpg";
import img4 from "./todo app home routine-resized.jpg";

import { Image, Wrapper } from "./slyderCSS";

const Slider = ({ data = [] }) => {
  // Fallback to default images if `data` is empty or not provided
  const images = data.length
    ? data
    : [
        { id: 1, src: img1, alt: "image1" },
        { id: 2, src: img2, alt: "image2" },
        { id: 3, src: img3, alt: "image3" },
        { id: 4, src: img4, alt: "image4" },
      ];

  return (
    <Wrapper className="animate">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {/* Loop through the images array and create a SwiperSlide for each image */}
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default Slider;
