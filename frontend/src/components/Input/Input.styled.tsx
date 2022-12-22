import styled from 'styled-components';

import { colors } from '../../global-styles/ColorsPalette';

export const CustomInput = styled('input')<{ borderColor?: string; fullWidth?: boolean; hasError?: boolean }>`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  border: none;
  font-size: 1.4rem;
  background-color: transparent;
  border-bottom: ${({ borderColor }) => `2px solid ${borderColor}`};
  border-radius: 1.2rem;
  color: ${colors.white};
  padding: 1.2rem 1rem;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &::placeholder {
    font-size: 1.2rem;
    color: ${({ hasError }) => (hasError ? `${colors.tomato}` : `${colors.powderAsh}`)};
  }
`;

export const FieldErrorMessage = styled.span`
  position: absolute;
  bottom: -2rem;
  font-size: 13px;
  color: ${colors.tomato};
`;
