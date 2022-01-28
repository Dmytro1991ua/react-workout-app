import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { ToastContainer } from 'react-toastify';

//Global styles
export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
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
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
`;

export const colors = {
  black: '#000',
  white: '#fff',
  powderAsh: '#c1c7c5',
  darkBlue: '#090c1b',
  mantis: '#7ac142',
  mantisDarker: ' #5a803d',
  lighterBlue: '#153c6b',
  brightGreen: '#60f702 ',
  tomato: '#ff6347',
  errorBg: '#f27f6b',
  error: '#821805',
};

export const Wrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 117rem;
  margin: 0 auto;
  padding: 0 1.6rem;

  @media (min-width: 90em) {
    max-width: 120rem;
  }
`;

export const CustomToastContainer = styled(ToastContainer)`
  &.Toastify__toast-container {
    width: fit-content;
    min-width: 350px;
    padding: 0;
  }

  .Toastify__toast-theme--dark {
    background-color: ${colors.darkBlue};
    border-radius: 1.2rem;
    border: 3px solid ${colors.mantisDarker};
  }

  .Toastify__close-button {
    align-self: center;
    color: ${colors.mantisDarker};
  }

  .Toastify__close-button > svg {
    width: 2rem;
    height: 2.2rem;
  }
`;

// Animations
export const rotation = keyframes`
  0%{
    transform: rotate(0deg);
    background-color:#09f;
  }
  50%{
    margin-top:20px;
    background-color:#fff;
  }
 
  100%{
    transform: rotate(90deg);
    background-color:#09f;
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
        opacity:0;
        -webkit-transform: translatey(-10px);
        -moz-transform: translatey(-10px);
        -o-transform: translatey(-10px);
        transform: translatey(-10px);
    }
    to {
        opacity:1;
        -webkit-transform: translatey(0);
        -moz-transform: translatey(0);
        -o-transform: translatey(0);
        transform: translatey(0);
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
    0%{
      transform: rotate(0deg);
      background-color:#71ba38;
        }
    50%{
      margin-top:15px;
      background-color:#fff;
    }

    100%{
      transform: rotate(-90deg); 
      background-color:#71ba38;
    }
`;
