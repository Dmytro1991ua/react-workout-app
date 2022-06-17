import React, { ReactNode } from 'react';

import { Wrapper } from '../global-styles/Global.styled';

interface NotFoundLayoutProps {
  children?: ReactNode;
}

const NotFoundLayout = ({ children }: NotFoundLayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default NotFoundLayout;
