import styled, { createGlobalStyle, keyframes } from 'styled-components';

import { colors } from './ColorsPalette';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.powderAsh};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    display: inline-block;
  }

  ul,
  li {
    list-style: none;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-size: 1.6rem;
    font-family: Roboto, sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 1.6rem;

  @media (min-width: 90em) {
    max-width: 140rem;
  }
`;

export const rotation = keyframes`
  0% {
    transform: rotate(0deg);
    background-color: ${colors.pureBlue};
  }

  50% {
    margin-top: 2rem;
    background-color: ${colors.white};
  }
 
  100% {
    transform: rotate(90deg);
    background-color: ${colors.pureBlue};
  }
`;

export const rotationA = keyframes`
  0%,
  25% {
    transform: rotate(0deg);
  }

  50%,
  75% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const rotationB = keyframes`
  0%,
  25% {
    transform: rotate(90deg);
  }

  50%,
  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(450deg);
  }
`;

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const bounceInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-2000px);
  }

  60% {
    opacity: 1;
    transform: translateX(30px);
  }

  80% {
    transform: translateX(-10px);
  }

  100% {
    transform: translateX(0);
  }
`;

export const gear = keyframes`
  0% {
    transform: rotate(0deg);
    background-color: ${colors.mantis};
  }

  50% {
    margin-top: 15px;
    background-color: ${colors.white};
  }

  100% {
    transform: rotate(-90deg);
    background-color: ${colors.mantis};
  }
`;

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const fadeInRight = keyframes`
    0% {
        transform: translateX(4rem);
        opacity: 0;
    }

    100% {
        transform: translateX(0rem);
        opacity: 1;
    }
`;
