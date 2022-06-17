import React, { ReactNode } from 'react';

import { CommonSectionsContainer } from './SectionsLayout.styled';

interface SectionsLayoutProps {
  children?: ReactNode;
  sectionName?: 'Home' | 'Not Found';
}

const SectionsLayout = ({ children, sectionName }: SectionsLayoutProps) => {
  return <CommonSectionsContainer sectionName={sectionName}>{children}</CommonSectionsContainer>;
};

export default SectionsLayout;
