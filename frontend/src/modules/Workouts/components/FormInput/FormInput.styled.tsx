import styled from 'styled-components';

import { FieldErrorMessage } from '../../../../components/Input/Input.styled';
import { colors } from '../../../../global-styles/ColorsPalette';

export const WorkoutFormInput = styled('input')<{ fullWidth?: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  padding: 0.3rem 1.1rem;
  font-family: inherit;
  font-size: 1.4rem;
  border-radius: 3px;
  background-color: ${colors.powderAsh};
  transition: all 0.2s ease-in-out;
  border: 2px solid ${colors.mantisDarker};
  cursor: pointer;

  &:focus {
    outline: none;
    background-color: ${colors.white};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const CustomFieldError = styled(FieldErrorMessage)`
  margin-top: 1rem;
`;
