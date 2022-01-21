import React, { ReactElement, ReactNode } from 'react';
import Header from '../modules/Header/Header';
import { Wrapper } from '../global-styles/GlobalStyles.styled';

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
