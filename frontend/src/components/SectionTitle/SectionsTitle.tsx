import React, { ReactElement } from 'react';

import { SectionsHeading } from './SectionsTitle.styled';

interface SectionsTitleProps {
  title: string;
  color: string;
}

const SectionsTitle = ({ title, color }: SectionsTitleProps): ReactElement => {
  return <SectionsHeading style={{ color }}>{title}</SectionsHeading>;
};

export default SectionsTitle;
