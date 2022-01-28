import styled from 'styled-components';
import { colors } from '../../global-styles/GlobalStyles.styled';

export const CustomInput = styled('input')<{ borderColor?: string; fullWidth?: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  border: none;
  background-color: transparent;
  border-bottom: ${({ borderColor }) => `2px solid ${borderColor}`};
  border-radius: 1.2rem;
  color: ${colors.white};
  padding: 1.2rem 1rem;

  &::placeholder {
    font-size: 1.6rem;
    color: ${colors.white};
  }
`;
