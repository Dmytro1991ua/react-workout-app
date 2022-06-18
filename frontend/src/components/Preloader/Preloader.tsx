import React, { ReactElement } from 'react';

import { Loader, PreloaderContainer } from './Preloade.styled';

const Preloader = (): ReactElement => {
  return (
    <PreloaderContainer>
      <Loader />
    </PreloaderContainer>
  );
};

export default Preloader;
