import React from 'react';

import { Loader, PreloaderContainer } from '../../styles/PreloaderStyles.styled';

const Preloader = () => {
  return (
    <PreloaderContainer>
      <Loader />
    </PreloaderContainer>
  );
};

export default Preloader;
