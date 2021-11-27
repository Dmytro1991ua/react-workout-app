import React from 'react';

import { SectionsHeading } from '../styles/SectionsTitleStyles';

const SectionsTitle = ({ title, color }) => {
  return <SectionsHeading style={{ color }}>{title}</SectionsHeading>;
};

export default SectionsTitle;
