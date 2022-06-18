import React, { ReactElement } from 'react';

import { Box1, Box2, LoaderContainer } from './SectionLoader.styled';

const SectionLoader = (): ReactElement => {
  return (
    <LoaderContainer>
      <Box1 />
      <Box2 />
    </LoaderContainer>
  );
};

export default SectionLoader;
