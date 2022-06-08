import styled from 'styled-components';
import { colors } from '../../../../global-styles/ColorsPalette';

export const WorkoutForm = styled.form`
  display: grid;
  gap: 1.5rem 2.5rem;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: baseline;
`;

export const FormLabel = styled.label`
  flex: 0 0 50%;
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 0.7rem;
  color: ${colors.mantis};
`;

export const FieldInputWrapper = styled.div`
  width: 100%;
`;
