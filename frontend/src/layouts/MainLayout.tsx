import React, { ReactElement, ReactNode } from 'react';

import { Wrapper } from '../global-styles/Global.styled';
import Header from '../modules/Header/Header';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps): ReactElement => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default MainLayout;
