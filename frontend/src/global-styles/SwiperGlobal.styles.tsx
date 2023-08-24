import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import { colors } from './ColorsPalette';

export const CustomSwiper = styled(Swiper)`
  &.swiper-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin-bottom: 2rem;
    padding: 0 1rem;
    animation: fadeInRight 0.5s ease-in-out;
  }

  & .swiper-wrapper {
    margin-bottom: 3rem;
  }

  & .swiper-slide {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
  }

  & .swiper-slider-active {
    opacity: 1;
  }

  & .swiper-scrollbar {
    background-color: ${colors.transparentMantisDarker};
  }

  & .swiper-scrollbar-drag {
    cursor: pointer;
    background-color: ${colors.mantis};
  }

  @media screen and (min-width: 640px) {
    & .swiper-container {
      width: 640px;
    }
  }

  @media screen and (min-width: 768px) {
    & .swiper-container {
      width: 768px;
    }
  }

  @media screen and (min-width: 992px) {
    & .swiper-container {
      width: 992px;
    }
  }

  @media screen and (min-width: 1400px) {
    & .swiper-container {
      width: 1400px;
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
