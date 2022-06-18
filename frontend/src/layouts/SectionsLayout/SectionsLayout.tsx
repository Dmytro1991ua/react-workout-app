import React, { ReactElement, ReactNode } from 'react';

import { CommonSectionsContainer } from './SectionsLayout.styled';

interface SectionsLayoutProps {
  children?: ReactNode;
  sectionName?: 'Home' | 'Not Found';
}

const SectionsLayout = ({ children, sectionName }: SectionsLayoutProps): ReactElement => {
  return <CommonSectionsContainer sectionName={sectionName}>{children}</CommonSectionsContainer>;
};

export default SectionsLayout;
