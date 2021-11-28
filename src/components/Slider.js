import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, Scrollbar, Autoplay, EffectCoverflow } from 'swiper';
import { Image, SliderTitle } from '../styles/SliderStyles';

//swiper styles
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/scrollbar/scrollbar.scss';

const Slider = () => {
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
      grabCursor='true'
      observer='true'
      observeParents='true'
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
      }}>
      <SwiperSlide tag='a' href='https://en.wikipedia.org/wiki/Cycling' target='_blank' rel='noreferrer'>
        {' '}
        <Image src={require('../images/slider/cycling.jpg').default} alt='cycling' />
        <SliderTitle>Cycling</SliderTitle>
      </SwiperSlide>
      <SwiperSlide tag='a' href='https://en.wikipedia.org/wiki/Running' target='_blank' rel='noreferrer'>
        <Image src={require('../images/slider/running.jpg').default} alt='Running' />
        <SliderTitle>Running</SliderTitle>
      </SwiperSlide>
      <SwiperSlide tag='a' href='https://en.wikipedia.org/wiki/Swimming_(sport)' target='_blank' rel='noreferrer'>
        <Image src={require('../images/slider/swimming.jpg').default} alt='swimming' />
        <SliderTitle>Swimming</SliderTitle>
      </SwiperSlide>
      <SwiperSlide tag='a' href='https://en.wikipedia.org/wiki/Weight_training' target='_blank' rel='noreferrer'>
        <Image src={require('../images/slider/gym-workout.jpg').default} alt='gym-workout' />
        <SliderTitle>Gym Workout</SliderTitle>
      </SwiperSlide>
      <SwiperSlide tag='a' href='https://en.wikipedia.org/wiki/Battling_ropes' target='_blank' rel='noreferrer'>
        <Image src={require('../images/slider/battle-ropes.jpg').default} alt='battle-rope' />
        <SliderTitle>Battle Ropes</SliderTitle>
      </SwiperSlide>
      <SwiperSlide tag='a' href='https://en.wikipedia.org/wiki/Aerobics' target='_blank' rel='noreferrer'>
        <Image src={require('../images/slider/aerobics.jpg').default} alt='aerobics' />
        <SliderTitle>Aerobics</SliderTitle>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
