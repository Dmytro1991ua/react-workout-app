import styled from 'styled-components';
import { FieldError } from '../../../../components/Input/Input.styled';
import { colors } from '../../../../global-styles/Global.styled';

export const WorkoutFormInput = styled.input`
  width: 100%;
  padding: 0.3rem 1.1rem;
  font-family: inherit;
  font-size: 1.4rem;
  border: none;
  border-radius: 3px;
  background-color: ${colors.powderAsh};
  transition: all 0.2s ease-in-out;
  border: 2px solid ${colors.mantisDarker};
  cursor: pointer;

  &:focus {
    outline: none;
    background-color: ${colors.white};
  }
`;

export const CustomFieldError = styled(FieldError)`
  margin-top: 1rem;
`;
