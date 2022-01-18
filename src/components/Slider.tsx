import React, { ReactElement } from 'react';
import SwiperCore, { Mousewheel, Scrollbar, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CyclingSliderImg from '../assets/images/slider/cycling.jpg';
import AerobicsSliderImg from '../assets/images/slider/aerobics.jpg';
import BattleRopesSliderImg from '../assets/images/slider/battle-ropes.jpg';
import GymWorkoutSliderImg from '../assets/images/slider/gym-workout.jpg';
import RunningSliderImg from '../assets/images/slider/running.jpg';
import SwimmingSliderImg from '../assets/images/slider/swimming.jpg';

import { Image, SliderTitle } from '../styles/SliderStyles.styled';

//swiper styles
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/scrollbar/scrollbar.scss';

const Slider = (): ReactElement => {
  // install Swiper modules
  SwiperCore.use([Mousewheel, Scrollbar, Autoplay, EffectCoverflow]);

  return (
    <Swiper
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
      <SwiperSlide tag='a' href='https://en.wikipedia.org/wiki/Cycling' target='_blank' rel='noreferrer'>
        <Image src={CyclingSliderImg} alt='cycling' />
        <SliderTitle>Cycling</SliderTitle>
      </SwiperSlide>
      <SwiperSlide tag='a' href='https://en.wikipedia.org/wiki/Running' target='_blank' rel='noreferrer'>
        <Image src={RunningSliderImg} alt='Running' />
        <SliderTitle>Running</SliderTitle>
      </SwiperSlide>
      <SwiperSlide tag='a' href='https://en.wikipedia.org/wiki/Swimming_(sport)' target='_blank' rel='noreferrer'>
        <Image src={SwimmingSliderImg} alt='swimming' />
        <SliderTitle>Swimming</SliderTitle>
      </SwiperSlide>
      <SwiperSlide tag='a' href='https://en.wikipedia.org/wiki/Weight_training' target='_blank' rel='noreferrer'>
        <Image src={GymWorkoutSliderImg} alt='gym-workout' />
        <SliderTitle>Gym Workout</SliderTitle>
      </SwiperSlide>
      <SwiperSlide tag='a' href='https://en.wikipedia.org/wiki/Battling_ropes' target='_blank' rel='noreferrer'>
        <Image src={BattleRopesSliderImg} alt='battle-rope' />
        <SliderTitle>Battle Ropes</SliderTitle>
      </SwiperSlide>
      <SwiperSlide tag='a' href='https://en.wikipedia.org/wiki/Aerobics' target='_blank' rel='noreferrer'>
        <Image src={AerobicsSliderImg} alt='aerobics' />
        <SliderTitle>Aerobics</SliderTitle>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
