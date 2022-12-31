import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper-bundle.min.css';
//swiper styles
import 'swiper/swiper.scss';

import React, { ReactElement } from 'react';
import SwiperCore, { Autoplay, EffectCoverflow, Mousewheel, Scrollbar } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { CustomSwiper } from '../../../../global-styles/SwiperGlobal.styles';
import { SliderConfig } from './Slider.config';
import { Image, SliderTitle } from './Slider.styled';

const Slider = (): ReactElement => {
  // install Swiper modules
  SwiperCore.use([Mousewheel, Scrollbar, Autoplay, EffectCoverflow]);

  const sortedSlides = SliderConfig.sort((a, b) => a.label.localeCompare(b.label, 'en', { numeric: true }));

  return (
    <CustomSwiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
      }}
      slideActiveClass='swiper-slider-active'
      grabCursor={true}
      observer={true}
      observeParents={true}
      scrollbar={{ draggable: true }}
      mousewheel={{ invert: true }}
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 3,
        },
        992: {
          width: 992,
          slidesPerView: 3,
        },
        1400: {
          width: 1400,
          slidesPerView: 4,
        },
      }}
      effect='coverflow'
      coverflowEffect={{
        rotate: 35,
        slideShadows: true,
      }}
    >
      {sortedSlides.map((slide) => (
        <SwiperSlide key={slide.id} tag={slide.tag}>
          <a href={slide.href} target={slide.target} rel={slide.rel}>
            <Image src={slide.imgSrc} alt={slide.alt} />
            <SliderTitle>{slide.label}</SliderTitle>
          </a>
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default Slider;
