import React, { ReactElement, ReactNode } from 'react';

import { Wrapper } from '../global-styles/Global.styled';

interface NotFoundLayoutProps {
  children?: ReactNode;
}

const NotFoundLayout = ({ children }: NotFoundLayoutProps): ReactElement => {
  return <Wrapper>{children}</Wrapper>;
};

export default NotFoundLayout;
