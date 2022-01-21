import React from 'react';
import { SectionsHeading } from './SectionsTitleStyles.styled';

interface SectionsTitleProps {
  title: string;
  color: string;
}

const SectionsTitle = ({ title, color }: SectionsTitleProps) => {
  return <SectionsHeading style={{ color }}>{title}</SectionsHeading>;
};

export default SectionsTitle;
