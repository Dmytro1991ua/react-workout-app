import React from "react";
import { Loader, PreloaderContainer } from "../styles/PreloaderStyles";

const Preloader = () => {
  return (
    <PreloaderContainer>
      <Loader></Loader>
    </PreloaderContainer>
  );
};

export default Preloader;
