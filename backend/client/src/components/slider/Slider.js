import React from 'react';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper';

import img1 from './todo app home contact-resized.jpg';
import img2 from './todo app home dashboard-resized.jpg';
import img3 from './todo app home page - redized.jpg';
import img4 from './todo app home routine-redized.jpg';
import { Image, Wrapper } from './slyderCSS';

const Slider = () => {
  return (
    <Wrapper>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Image src={img3} alt='image3' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img1} alt='image1' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img2} alt='image2' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img4} alt='image4' />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Slider;
