import React from 'react';

import { Loader, PreloaderContainer } from './Preloade.styled';

const Preloader = () => {
  return (
    <PreloaderContainer>
      <Loader />
    </PreloaderContainer>
  );
};

export default Preloader;
