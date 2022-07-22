import styled from 'styled-components';
import { colors } from '../../global-styles/ColorsPalette';

export const BadgeWrapper = styled('div')<{ backgroundColor?: string; iconColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : `${colors.lighterBlue}`)};

  svg {
    width: 1.5rem;
    hight: 1.5rem;
    fill: ${({ iconColor }) => (iconColor ? iconColor : `${colors.white}`)};
  }
`;
