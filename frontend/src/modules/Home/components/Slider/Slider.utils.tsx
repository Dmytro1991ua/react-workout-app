import { SwiperSlide } from 'swiper/react';

import { SliderConfig } from './Slider.config';
import { Image, SliderTitle } from './Slider.styled';

export const getSortedSliders = (): SliderConfiguration[] =>
  SliderConfig.sort((a, b) => a.label.localeCompare(b.label, 'en', { numeric: true }));

export const generateSortedSliders = (): JSX.Element[] => {
  const sortedSlides = getSortedSliders();

  return sortedSlides.map(({ alt, href, id, imgSrc, label, rel, tag, target }) => (
    <SwiperSlide key={id} tag={tag}>
      <a href={href} target={target} rel={rel}>
        <Image src={imgSrc} alt={alt} />
        <SliderTitle>{label}</SliderTitle>
      </a>
    </SwiperSlide>
  ));
};
