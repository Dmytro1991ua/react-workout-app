import React, { ReactElement } from 'react';

import { colors } from '../../global-styles/ColorsPalette';
import { ProgressBarContainer } from './ProgressBar.styled';

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: keyof MainPalette;
  width?: string;
}

const ProgressBar = ({ value, max, color, width }: ProgressBarProps): ReactElement => {
  const progressBarColor = color && colors[color];

  return (
    <ProgressBarContainer color={progressBarColor} width={width}>
      <progress value={value} max={max} />
      <span>{value} %</span>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
