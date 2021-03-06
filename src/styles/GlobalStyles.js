import styled, { createGlobalStyle } from "styled-components";

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

export const colors = {
  black: "#000",
  white: "#fff",
  powderAsh: "#c1c7c5",
  darkBlue: "#090c1b",
  mantis: "#7ac142",
  mantisDarker: " #5a803d",
  lighterBlue: "#153c6b",
  brightGreen: "#60f702 ",
  tomato: "#ff6347",
};
